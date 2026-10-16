import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  PhoneOff, 
  Volume2, 
  Sparkles, 
  Settings2,
  AlertCircle,
  Radio,
  Send,
  RefreshCw,
  MessageSquare
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
  const [micState, setMicState] = useState<'granted' | 'denied' | 'requesting' | 'unavailable'>('requesting');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [selectedVoice, setSelectedVoice] = useState<string>('Zephyr');
  const [transcripts, setTranscripts] = useState<Array<{ sender: 'ai' | 'user'; text: string; id: string }>>([]);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [textInput, setTextInput] = useState<string>('');

  const wsRef = useRef<WebSocket | null>(null);
  const inputAudioCtxRef = useRef<AudioContext | null>(null);
  const outputAudioCtxRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const nextPlayTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<AudioBufferSourceNode[]>([]);
  const isMutedRef = useRef<boolean>(false);
  const isSubscribedRef = useRef<boolean>(true);

  isMutedRef.current = isMuted;

  // Cleanup helper
  const cleanupAudio = () => {
    try {
      if (wsRef.current) {
        try { wsRef.current.close(); } catch { /* ignore */ }
        wsRef.current = null;
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => {
          try { track.stop(); } catch { /* ignore */ }
        });
        mediaStreamRef.current = null;
      }
      if (scriptProcessorRef.current) {
        try { scriptProcessorRef.current.disconnect(); } catch { /* ignore */ }
        scriptProcessorRef.current = null;
      }
      if (inputAudioCtxRef.current && inputAudioCtxRef.current.state !== 'closed') {
        try { inputAudioCtxRef.current.close(); } catch { /* ignore */ }
        inputAudioCtxRef.current = null;
      }
      activeSourcesRef.current.forEach(s => {
        try { s.stop(); } catch { /* ignore */ }
      });
      activeSourcesRef.current = [];
      if (outputAudioCtxRef.current && outputAudioCtxRef.current.state !== 'closed') {
        try { outputAudioCtxRef.current.close(); } catch { /* ignore */ }
        outputAudioCtxRef.current = null;
      }
    } catch {
      // safe cleanup
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
    } catch {
      // safe audio playback
    }
  };

  const handleInterruption = () => {
    // Model was interrupted by student speaking: stop playing any currently queued audio
    activeSourcesRef.current.forEach(source => {
      try { source.stop(); } catch { /* ignore */ }
    });
    activeSourcesRef.current = [];
    nextPlayTimeRef.current = 0;
    setStatus('listening');
  };

  // Attempt to acquire microphone access safely
  const setupMicrophone = async (): Promise<boolean> => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setMicState('unavailable');
      return false;
    }

    try {
      setMicState('requesting');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          channelCount: 1,
          sampleRate: 16000,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });

      if (!isSubscribedRef.current) {
        stream.getTracks().forEach(t => t.stop());
        return false;
      }

      mediaStreamRef.current = stream;

      // Setup input AudioContext at 16kHz
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      inputAudioCtxRef.current = inputCtx;
      const source = inputCtx.createMediaStreamSource(stream);

      // ScriptProcessorNode for streaming PCM chunks
      const processor = inputCtx.createScriptProcessor(2048, 1, 1);
      scriptProcessorRef.current = processor;
      source.connect(processor);
      processor.connect(inputCtx.destination);

      processor.onaudioprocess = (e) => {
        if (!isSubscribedRef.current || isMutedRef.current || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
        const inputData = e.inputBuffer.getChannelData(0);
        
        // Calculate audio level for visualizer
        let sum = 0;
        for (let i = 0; i < inputData.length; i++) {
          sum += Math.abs(inputData[i]);
        }
        const avg = sum / inputData.length;
        setAudioLevel(Math.min(100, Math.round(avg * 400)));

        const base64Audio = floatTo16BitPCMBase64(inputData);
        wsRef.current.send(JSON.stringify({ audio: base64Audio }));
      };

      setMicState('granted');
      return true;
    } catch {
      // Microphone permission not granted or user dismissed prompt
      setMicState('denied');
      return false;
    }
  };

  // Send textual query to Gemini Live
  const handleSendText = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = textInput.trim();
    if (!query) return;

    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      setErrorMessage(isVi ? 'Chưa kết nối với Gemini Live. Hãy thử lại!' : 'Not connected to Gemini Live yet.');
      return;
    }

    // Add student query to transcripts
    setTranscripts(prev => [
      ...prev,
      { id: 'user-' + Date.now(), sender: 'user', text: query }
    ]);
    setTextInput('');

    // Send through WebSocket to Gemini Live server
    wsRef.current.send(JSON.stringify({ text: query }));
  };

  useEffect(() => {
    if (!isOpen) {
      cleanupAudio();
      return;
    }

    isSubscribedRef.current = true;

    async function initLiveVoice() {
      setStatus('connecting');
      setErrorMessage('');
      setTranscripts([
        {
          id: 'welcome',
          sender: 'ai',
          text: isVi 
            ? `Đang kết nối với Gia sư Gemini Live (gemini-3.8-live)... Bạn có thể nói hoặc gõ câu hỏi!` 
            : `Connecting to Gemini 3.8 Live API... You can speak through your mic or type anytime!`
        }
      ]);

      try {
        // 1. First, connect to WebSocket Live endpoint so session is established
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${protocol}//${window.location.host}/live?topic=${encodeURIComponent(topic)}&role=${encodeURIComponent(role)}&voice=${encodeURIComponent(selectedVoice)}&gradeLevel=${profile?.grade || 6}&language=${language}`;
        
        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;

        ws.onopen = async () => {
          if (!isSubscribedRef.current) return;
          setStatus('listening');

          // Attempt microphone setup quietly
          const micOk = await setupMicrophone();

          setTranscripts(prev => [
            ...prev,
            {
              id: 'connected',
              sender: 'ai',
              text: micOk
                ? (isVi
                    ? `Đã kết nối trực tiếp với Gemini 3.8 Live! Hãy hỏi bài hoặc thảo luận về chủ đề "${topic}".`
                    : `Connected to Gemini 3.8 Live! Ask any question or start chatting about "${topic}".`)
                : (isVi
                    ? `Đã kết nối với Gemini 3.8 Live! Chưa cấp quyền Microphone - bạn có thể bấm "Bật Micro" hoặc gõ câu hỏi bên dưới để nghe Gemini nói!`
                    : `Connected to Gemini 3.8 Live! Mic is not active - click "Enable Mic" or type questions below to hear voice answers!`)
            }
          ]);
        };

        ws.onmessage = (event) => {
          if (!isSubscribedRef.current) return;
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
          } catch {
            // ignore parse err
          }
        };

        ws.onerror = () => {
          if (isSubscribedRef.current) {
            setStatus('error');
            setErrorMessage(isVi ? 'Không thể kết nối WebSocket với Gemini Live.' : 'Failed to connect to Gemini Live server.');
          }
        };

        ws.onclose = () => {
          if (isSubscribedRef.current) {
            setStatus('disconnected');
          }
        };

      } catch {
        if (isSubscribedRef.current) {
          setStatus('error');
          setErrorMessage(isVi ? 'Không thể khởi động phiên Gemini Live.' : 'Unable to initialize Gemini Live voice session.');
        }
      }
    }

    initLiveVoice();

    return () => {
      isSubscribedRef.current = false;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-gray-900 border border-teal-500/30 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col text-white max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/90 shrink-0">
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
            className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Central Audio Visualizer Section */}
        <div className="p-6 flex flex-col items-center justify-center relative min-h-[190px] bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 shrink-0">
          
          {/* Animated Glowing Wave Rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer animated rings */}
            <div 
              className={`absolute rounded-full transition-all duration-300 ${
                status === 'speaking'
                  ? 'w-44 h-44 bg-emerald-500/10 border border-emerald-500/30 animate-pulse'
                  : status === 'listening'
                  ? 'w-44 h-44 bg-teal-500/10 border border-teal-500/30'
                  : 'w-36 h-36 bg-gray-800/20 border border-gray-700/20'
              }`}
              style={{
                transform: `scale(${1 + audioLevel * 0.008})`
              }}
            />
            <div 
              className={`absolute rounded-full transition-all duration-200 ${
                status === 'speaking'
                  ? 'w-32 h-32 bg-emerald-500/20 border border-emerald-500/40'
                  : status === 'listening'
                  ? 'w-32 h-32 bg-teal-500/20 border border-teal-500/40'
                  : 'w-28 h-28 bg-gray-800/40'
              }`}
              style={{
                transform: `scale(${1 + audioLevel * 0.005})`
              }}
            />

            {/* Center Core Avatar */}
            <div className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
              status === 'speaking'
                ? 'bg-gradient-to-tr from-emerald-600 to-teal-400 ring-4 ring-emerald-500/50 shadow-emerald-500/50'
                : status === 'listening'
                ? 'bg-gradient-to-tr from-teal-600 to-cyan-500 ring-4 ring-cyan-500/50 shadow-cyan-500/50'
                : status === 'error'
                ? 'bg-red-600 ring-4 ring-red-500/50'
                : 'bg-gray-800 ring-4 ring-gray-700'
            }`}>
              {status === 'speaking' ? (
                <Volume2 className="w-8 h-8 text-white animate-bounce" />
              ) : status === 'listening' ? (
                <Radio className="w-8 h-8 text-white animate-pulse" />
              ) : status === 'error' ? (
                <AlertCircle className="w-8 h-8 text-white" />
              ) : (
                <Sparkles className="w-8 h-8 text-amber-300 animate-spin [animation-duration:6s]" />
              )}
            </div>
          </div>

          {/* Status Label */}
          <div className="mt-4 text-center">
            <p className="text-sm font-black tracking-tight">
              {status === 'connecting' && (isVi ? 'Đang kết nối Gemini 3.8 Live...' : 'Connecting to Gemini 3.8 Live...')}
              {status === 'listening' && (isVi ? 'Gemini đang lắng nghe bạn nói...' : 'Gemini is listening... Speak anytime!')}
              {status === 'speaking' && (isVi ? 'Gemini đang trả lời bằng giọng nói...' : 'Gemini is speaking...')}
              {status === 'muted' && (isVi ? 'Microphone đang tạm tắt' : 'Microphone is muted')}
              {status === 'error' && (isVi ? 'Thông báo kết nối' : 'Connection Notice')}
              {status === 'disconnected' && (isVi ? 'Cuộc gọi đã kết thúc' : 'Call ended')}
            </p>
            
            {/* Friendly Microphone Permission Notice & Re-enable button */}
            {micState === 'denied' && (
              <div className="mt-3 flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                <span>{isVi ? 'Micro chưa bật (Bạn có thể gõ câu hỏi hoặc cấp quyền micro):' : 'Mic is not active (Type questions or enable mic):'}</span>
                <button
                  onClick={setupMicrophone}
                  className="px-2.5 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-gray-950 font-black text-[11px] flex items-center gap-1 transition-all cursor-pointer shadow-xs"
                >
                  <Mic className="w-3 h-3" />
                  <span>{isVi ? 'Bật Micro' : 'Enable Mic'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Error notice if any */}
          {errorMessage && (
            <div className="mt-3 p-2.5 bg-red-950/60 border border-red-800 rounded-2xl text-xs text-red-200 max-w-sm text-center">
              {errorMessage}
            </div>
          )}
        </div>

        {/* Live Subtitles / Transcript Box */}
        <div className="px-6 py-3 bg-gray-950/90 border-t border-gray-800 max-h-32 overflow-y-auto space-y-1.5 flex-1">
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-between">
            <span>{isVi ? 'Phụ đề & Lời thoại trực tiếp' : 'Live Subtitles & Conversation'}</span>
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

        {/* Quick Question Input for Voice Response (Fallback & Accessibility) */}
        <form onSubmit={handleSendText} className="px-6 py-2.5 bg-gray-900 border-t border-gray-800 flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder={isVi ? 'Gõ câu hỏi để nghe Gemini nói trả lời...' : 'Type a question to hear Gemini answer aloud...'}
              className="w-full bg-gray-950 border border-gray-700 focus:border-teal-500 text-gray-100 placeholder-gray-500 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            disabled={!textInput.trim()}
            className="p-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:hover:bg-teal-600 text-white transition-all cursor-pointer shrink-0"
            title={isVi ? 'Gửi để Gemini trả lời bằng giọng nói' : 'Send for spoken answer'}
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Bottom Call Controls */}
        <div className="p-4 px-6 bg-gray-900 border-t border-gray-800 flex items-center justify-between gap-3 shrink-0">
          {/* Voice selector */}
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Settings2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-gray-200 text-xs rounded-xl px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-500 font-bold cursor-pointer"
            >
              {voices.map(v => (
                <option key={v.id} value={v.id}>{v.name}</option>
              ))}
            </select>
          </div>

          {/* Action buttons: Mute / Enable Mic & End Call */}
          <div className="flex items-center gap-2 sm:gap-3">
            {micState === 'denied' ? (
              <button
                onClick={setupMicrophone}
                className="px-3 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                title={isVi ? 'Bật Microphone' : 'Enable Microphone'}
              >
                <Mic className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">{isVi ? 'Cấp quyền Micro' : 'Enable Mic'}</span>
              </button>
            ) : (
              <button
                onClick={() => setIsMuted(prev => !prev)}
                className={`p-3 rounded-full transition-all shadow-md cursor-pointer ${
                  isMuted
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                }`}
                title={isMuted ? 'Bật lại micro' : 'Tắt tiếng micro'}
              >
                {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={() => {
                cleanupAudio();
                onClose();
              }}
              className="px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-red-600/30 transition-all cursor-pointer"
            >
              <PhoneOff className="w-3.5 h-3.5" />
              <span>{isVi ? 'Kết thúc' : 'End Call'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
