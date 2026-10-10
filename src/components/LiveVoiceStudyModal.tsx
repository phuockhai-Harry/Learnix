import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  PhoneOff, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Bot, 
  User, 
  Activity, 
  Settings2,
  AlertCircle,
  Radio
} from 'lucide-react';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';

interface LiveVoiceStudyModalProps {
  topic: string;
  role: string;
  isOpen: boolean;
  onClose: () => void;
}

// Convert Float32Array PCM from mic to 16-bit PCM base64 string
function floatTo16BitPCMBase64(float32Array: Float32Array): string {
  const l = float32Array.length;
  const int16Array = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    const s = Math.max(-1, Math.min(1, float32Array[i]));
    int16Array[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  let binary = '';
  const bytes = new Uint8Array(int16Array.buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export default function LiveVoiceStudyModal({ topic, role, isOpen, onClose }: LiveVoiceStudyModalProps) {
  const { language } = useLanguage();
  const { profile } = useAuth();
  const isVi = language === 'vi';

  const [status, setStatus] = useState<'connecting' | 'listening' | 'speaking' | 'muted' | 'error' | 'disconnected'>('connecting');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [selectedVoice, setSelectedVoice] = useState<string>('Zephyr');
  const [transcripts, setTranscripts] = useState<Array<{ sender: 'ai' | 'user'; text: string; id: string }>>([]);
  const [audioLevel, setAudioLevel] = useState<number>(0);

  const wsRef = useRef<WebSocket | null>(null);
  const inputAudioCtxRef = useRef<AudioContext | null>(null);
  const outputAudioCtxRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const nextPlayTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<AudioBufferSourceNode[]>([]);
  const isMutedRef = useRef<boolean>(false);

  isMutedRef.current = isMuted;

  // Cleanup helper
  const cleanupAudio = () => {
    try {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
        mediaStreamRef.current = null;
      }
      if (scriptProcessorRef.current) {
        scriptProcessorRef.current.disconnect();
        scriptProcessorRef.current = null;
      }
      if (inputAudioCtxRef.current && inputAudioCtxRef.current.state !== 'closed') {
        inputAudioCtxRef.current.close();
        inputAudioCtxRef.current = null;
      }
      activeSourcesRef.current.forEach(s => {
        try { s.stop(); } catch (e) { /* ignore */ }
      });
      activeSourcesRef.current = [];
      if (outputAudioCtxRef.current && outputAudioCtxRef.current.state !== 'closed') {
        outputAudioCtxRef.current.close();
        outputAudioCtxRef.current = null;
      }
    } catch (e) {
      console.error("Cleanup audio error:", e);
    }
  };

  // Play incoming 24kHz PCM chunk
  const playAudioChunk = (base64Audio: string) => {
    try {
      if (!outputAudioCtxRef.current || outputAudioCtxRef.current.state === 'closed') {
        outputAudioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }
      const audioCtx = outputAudioCtxRef.current;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const binary = atob(base64Audio);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const int16 = new Int16Array(bytes.buffer);
      const float32 = new Float32Array(int16.length);
      for (let i = 0; i < int16.length; i++) {
        float32[i] = int16[i] / 32768.0;
      }

      const buffer = audioCtx.createBuffer(1, float32.length, 24000);
      buffer.getChannelData(0).set(float32);

      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(audioCtx.destination);

      const currentTime = audioCtx.currentTime;
      const startTime = Math.max(currentTime, nextPlayTimeRef.current);
      source.start(startTime);
      nextPlayTimeRef.current = startTime + buffer.duration;

      activeSourcesRef.current.push(source);
      source.onended = () => {
        activeSourcesRef.current = activeSourcesRef.current.filter(s => s !== source);
        if (activeSourcesRef.current.length === 0) {
          setStatus(prev => prev === 'speaking' ? 'listening' : prev);
        }
      };

      setStatus('speaking');
    } catch (err) {
      console.error("Audio playback error:", err);
    }
  };

  const handleInterruption = () => {
    // Model was interrupted by student speaking: stop playing any currently queued audio
    activeSourcesRef.current.forEach(source => {
      try { source.stop(); } catch (e) { /* ignore */ }
    });
    activeSourcesRef.current = [];
    nextPlayTimeRef.current = 0;
    setStatus('listening');
  };

  useEffect(() => {
    if (!isOpen) {
      cleanupAudio();
      return;
    }

    let isSubscribed = true;

    async function initLiveVoice() {
      setStatus('connecting');
      setErrorMessage('');
      setTranscripts([
        {
          id: 'welcome',
          sender: 'ai',
          text: isVi 
            ? `Đang kết nối với Gia sư Gemini Live (gemini-3.8-live)... Bạn có thể bắt đầu nói khi micro sáng xanh!` 
            : `Connecting to Gemini 3.8 Live API... Start speaking once the microphone activates!`
        }
      ]);

      try {
        // 1. Get microphone access
        const stream = await navigator.mediaDevices.getUserMedia({ 
          audio: {
            channelCount: 1,
            sampleRate: 16000,
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        });

        if (!isSubscribed) return;
        mediaStreamRef.current = stream;

        // 2. Setup input AudioContext at 16kHz
        const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
        inputAudioCtxRef.current = inputCtx;
        const source = inputCtx.createMediaStreamSource(stream);

        // ScriptProcessorNode for streaming PCM chunks
        const processor = inputCtx.createScriptProcessor(2048, 1, 1);
        scriptProcessorRef.current = processor;
        source.connect(processor);
        processor.connect(inputCtx.destination);

        // 3. Connect to WebSocket Live endpoint
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${protocol}//${window.location.host}/live?topic=${encodeURIComponent(topic)}&role=${encodeURIComponent(role)}&voice=${encodeURIComponent(selectedVoice)}&gradeLevel=${profile?.grade || 6}&language=${language}`;
        
        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;

        ws.onopen = () => {
          if (!isSubscribed) return;
          setStatus('listening');
          setTranscripts(prev => [
            ...prev,
            {
              id: 'connected',
              sender: 'ai',
              text: isVi
                ? `Đã kết nối trực tiếp với Gemini 3.8 Live! Hãy hỏi bài hoặc thảo luận về chủ đề "${topic}".`
                : `Connected to Gemini 3.8 Live! Ask any question or start chatting about "${topic}".`
            }
          ]);
        };

        ws.onmessage = (event) => {
          if (!isSubscribed) return;
          try {
            const data = JSON.parse(event.data);
            if (data.error) {
              setStatus('error');
              setErrorMessage(data.error);
              return;
            }
            if (data.interrupted) {
              handleInterruption();
            }
            if (data.audio) {
              playAudioChunk(data.audio);
            }
            if (data.text) {
              setTranscripts(prev => {
                const last = prev[prev.length - 1];
                if (last && last.sender === 'ai' && last.id !== 'connected' && last.id !== 'welcome') {
                  return [...prev.slice(0, -1), { ...last, text: last.text + ' ' + data.text }];
                }
                return [...prev, { id: 'ai-' + Date.now(), sender: 'ai', text: data.text }];
              });
            }
          } catch (e) {
            console.error("WS message parse error:", e);
          }
        };

        ws.onerror = (e) => {
          console.error("Live WebSocket error:", e);
          if (isSubscribed) {
            setStatus('error');
            setErrorMessage(isVi ? 'Không thể kết nối WebSocket với Gemini Live.' : 'Failed to connect to Gemini Live server.');
          }
        };

        ws.onclose = () => {
          if (isSubscribed) {
            setStatus('disconnected');
          }
        };

        // 4. Capture microphone audio and stream PCM to WebSocket
        processor.onaudioprocess = (e) => {
          if (!isSubscribed || isMutedRef.current || ws.readyState !== WebSocket.OPEN) return;
          const inputData = e.inputBuffer.getChannelData(0);
          
          // Calculate audio level for visualizer
          let sum = 0;
          for (let i = 0; i < inputData.length; i++) {
            sum += Math.abs(inputData[i]);
          }
          const avg = sum / inputData.length;
          setAudioLevel(Math.min(100, Math.round(avg * 400)));

          const base64Audio = floatTo16BitPCMBase64(inputData);
          ws.send(JSON.stringify({ audio: base64Audio }));
        };

      } catch (err: any) {
        console.error("Live voice initialization error:", err);
        if (isSubscribed) {
          setStatus('error');
          setErrorMessage(err?.message || (isVi ? 'Không thể truy cập microphone.' : 'Microphone permission denied or unavailable.'));
        }
      }
    }

    initLiveVoice();

    return () => {
      isSubscribed = false;
      cleanupAudio();
    };
  }, [isOpen, topic, role, selectedVoice]);

  if (!isOpen) return null;

  const voices = [
    { id: 'Zephyr', name: 'Zephyr (Warm & Engaging)' },
    { id: 'Puck', name: 'Puck (Enthusiastic & Playful)' },
    { id: 'Kore', name: 'Kore (Calm & Scholarly)' },
    { id: 'Fenrir', name: 'Fenrir (Deep & Resonant)' },
    { id: 'Charon', name: 'Charon (Clear & Steady)' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-gray-900 border border-teal-500/30 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col text-white">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/90">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <span className="flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  status === 'speaking' ? 'bg-emerald-400' : status === 'listening' ? 'bg-cyan-400' : 'bg-amber-400'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${
                  status === 'speaking' ? 'bg-emerald-500' : status === 'listening' ? 'bg-cyan-500' : 'bg-amber-500'
                }`}></span>
              </span>
            </div>
            <div>
              <h3 className="text-sm font-black flex items-center gap-1.5">
                <span>{isVi ? 'Cuộc gọi Thoại Gemini Live' : 'Gemini 3.8 Live Voice Call'}</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  gemini-3.8-live
                </span>
              </h3>
              <p className="text-xs text-gray-400 line-clamp-1">
                {topic} • {role}
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => {
              cleanupAudio();
              onClose();
            }}
            className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Central Audio Visualizer Section */}
        <div className="p-8 flex flex-col items-center justify-center relative min-h-[220px] bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
          
          {/* Animated Glowing Wave Rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer animated rings */}
            <div 
              className={`absolute rounded-full transition-all duration-300 ${
                status === 'speaking'
                  ? 'w-48 h-48 bg-emerald-500/10 border border-emerald-500/30 animate-pulse'
                  : status === 'listening'
                  ? 'w-48 h-48 bg-teal-500/10 border border-teal-500/30'
                  : 'w-40 h-40 bg-gray-800/20 border border-gray-700/20'
              }`}
              style={{
                transform: `scale(${1 + audioLevel * 0.008})`
              }}
            />
            <div 
              className={`absolute rounded-full transition-all duration-200 ${
                status === 'speaking'
                  ? 'w-36 h-36 bg-emerald-500/20 border border-emerald-500/40'
                  : status === 'listening'
                  ? 'w-36 h-36 bg-teal-500/20 border border-teal-500/40'
                  : 'w-32 h-32 bg-gray-800/40'
              }`}
              style={{
                transform: `scale(${1 + audioLevel * 0.005})`
              }}
            />

            {/* Center Core Avatar */}
            <div className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
              status === 'speaking'
                ? 'bg-gradient-to-tr from-emerald-600 to-teal-400 ring-4 ring-emerald-500/50 shadow-emerald-500/50'
                : status === 'listening'
                ? 'bg-gradient-to-tr from-teal-600 to-cyan-500 ring-4 ring-cyan-500/50 shadow-cyan-500/50'
                : status === 'error'
                ? 'bg-red-600 ring-4 ring-red-500/50'
                : 'bg-gray-800 ring-4 ring-gray-700'
            }`}>
              {status === 'speaking' ? (
                <Volume2 className="w-10 h-10 text-white animate-bounce" />
              ) : status === 'listening' ? (
                <Radio className="w-10 h-10 text-white animate-pulse" />
              ) : status === 'error' ? (
                <AlertCircle className="w-10 h-10 text-white" />
              ) : (
                <Sparkles className="w-10 h-10 text-amber-300 animate-spin [animation-duration:6s]" />
              )}
            </div>
          </div>

          {/* Status Label */}
          <div className="mt-6 text-center">
            <p className="text-base font-black tracking-tight">
              {status === 'connecting' && (isVi ? 'Đang kết nối Gemini 3.8 Live...' : 'Connecting to Gemini 3.8 Live...')}
              {status === 'listening' && (isVi ? 'Đang lắng nghe bạn nói...' : 'Listening to your voice... Speak anytime!')}
              {status === 'speaking' && (isVi ? 'Gemini đang trả lời bằng giọng nói...' : 'Gemini is speaking...')}
              {status === 'muted' && (isVi ? 'Microphone đang tắt' : 'Microphone is muted')}
              {status === 'error' && (isVi ? 'Sự cố kết nối' : 'Connection Notice')}
              {status === 'disconnected' && (isVi ? 'Cuộc gọi đã kết thúc' : 'Call ended')}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {status === 'listening' && (isVi ? 'Bạn có thể nói hoặc hỏi bài trực tiếp không cần bấm nút' : 'Natural two-way spoken conversation with auto-interruption')}
              {status === 'speaking' && (isVi ? 'Bạn có thể ngắt lời bất kỳ lúc nào bằng cách nói vào mic' : 'You can interrupt by speaking at any moment')}
            </p>
          </div>

          {/* Error notice if any */}
          {errorMessage && (
            <div className="mt-4 p-3 bg-red-950/60 border border-red-800 rounded-2xl text-xs text-red-200 max-w-sm text-center">
              {errorMessage}
            </div>
          )}
        </div>

        {/* Live Subtitles / Transcript Box */}
        <div className="px-6 py-3 bg-gray-950/90 border-t border-gray-800 max-h-36 overflow-y-auto space-y-2">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-between">
            <span>{isVi ? 'Phụ đề trực tiếp' : 'Live Subtitles & Guidance'}</span>
            <span className="font-mono text-[10px] text-teal-400">16kHz in • 24kHz out</span>
          </div>
          {transcripts.map((t) => (
            <div key={t.id} className="text-xs leading-relaxed">
              <span className={`font-bold mr-1.5 ${t.sender === 'ai' ? 'text-teal-400' : 'text-cyan-300'}`}>
                {t.sender === 'ai' ? 'Gemini:' : 'You:'}
              </span>
              <span className="text-gray-200">{t.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Call Controls */}
        <div className="p-6 bg-gray-900 border-t border-gray-800 flex items-center justify-between gap-4">
          {/* Voice selector */}
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Settings2 className="w-3.5 h-3.5 text-teal-400" />
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-gray-200 text-xs rounded-xl px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-500 font-bold"
            >
              {voices.map(v => (
                <option key={v.id} value={v.id}>{v.name}</option>
              ))}
            </select>
          </div>

          {/* Action buttons: Mute & End Call */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMuted(prev => !prev)}
              className={`p-3.5 rounded-full transition-all shadow-lg ${
                isMuted
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
              }`}
              title={isMuted ? 'Unmute microphone' : 'Mute microphone'}
            >
              {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            <button
              onClick={() => {
                cleanupAudio();
                onClose();
              }}
              className="px-5 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs flex items-center gap-2 shadow-lg shadow-red-600/30 transition-all"
            >
              <PhoneOff className="w-4 h-4" />
              <span>{isVi ? 'Kết thúc cuộc gọi' : 'End Call'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
