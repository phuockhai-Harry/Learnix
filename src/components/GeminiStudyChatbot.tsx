import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  RotateCcw, 
  BookOpen, 
  GraduationCap, 
  Zap, 
  HelpCircle, 
  Flame, 
  Copy, 
  Check, 
  Lightbulb, 
  Cpu, 
  Target,
  ChevronDown,
  Mic,
  MicOff,
  PhoneCall,
  Volume2,
  VolumeX,
  MessageSquare,
  Plus,
  Trash2,
  Edit2,
  UserCheck,
  FolderOpen,
  X
} from 'lucide-react';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';
import LiveVoiceStudyModal from './LiveVoiceStudyModal';
import MathMarkdown from './MathMarkdown';

export type TutorRole = 'socratic' | 'quizmaster' | 'explainer' | 'speed';
export type GeminiModel = 'gemini-3.5-flash' | 'gemini-3.1-flash-lite' | 'gemini-3.1-pro-preview';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  modelUsed?: string;
}

export interface ConversationSession {
  id: string;
  title: string;
  topic: string;
  role: TutorRole;
  model: GeminiModel;
  createdAt: string;
  updatedAt: string;
  messages: ChatMessage[];
}

interface GeminiStudyChatbotProps {
  initialTopic?: string;
  isFloating?: boolean;
  onClose?: () => void;
}

const DEFAULT_TOPICS = [
  'Mathematics: Fractions & Pre-Algebra',
  'Science: Photosynthesis & Plants',
  'Physics: Forces, Gravity & Motion',
  'Language Arts: Grammar & Creative Writing',
  'Computer Science: Algorithms & Logic',
  'History: Ancient World Civilizations'
];

export default function GeminiStudyChatbot({ initialTopic, isFloating = false, onClose }: GeminiStudyChatbotProps) {
  const { t, language } = useLanguage();
  const { user, profile } = useAuth();
  const isVi = language === 'vi';

  // 1. Isolate storage strictly per student account
  const studentId = useMemo(() => {
    if (user?.uid) return user.uid;
    if (profile?.email) return 'email_' + profile.email.toLowerCase().replace(/[^a-z0-9]/g, '_');
    if (profile?.codeName) return 'code_' + profile.codeName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    return 'student_guest';
  }, [user?.uid, profile?.email, profile?.codeName]);

  const studentDisplayName = profile?.realName || profile?.codeName || (isVi ? 'Bạn học' : 'Student');
  const studentGrade = profile?.grade || 6;

  const getStorageKey = (sId: string) => `learnix_student_convs_${sId}`;
  const getActiveKey = (sId: string) => `learnix_student_active_conv_${sId}`;

  // Helper to generate a personalized greeting for this specific student
  const createPersonalizedGreeting = (topicName: string, selectedRole: TutorRole, selectedModel: GeminiModel): ChatMessage => {
    const greetingText = isVi
      ? `Xin chào **${studentDisplayName}**! 👋\n\nMình là **Gia sư Học tập Gemini AI**, đồng hành riêng cùng bạn (Lớp ${studentGrade}). Hiện tại chúng ta đang ôn tập chủ đề **${topicName}** với phong cách **${
          selectedRole === 'socratic' ? 'Gợi mở Socratic' : selectedRole === 'quizmaster' ? 'Trắc nghiệm Thử thách' : selectedRole === 'explainer' ? 'Giải thích Trực quan' : 'Ôn thi Cấp tốc'
        }**.\n\nBạn có thể:\n- Hỏi bất kỳ câu hỏi hoặc bài tập nào đang gặp khó khăn\n- Nhấn các nút gợi ý bên dưới để mình đố vui kiến thức hoặc tóm tắt công thức\n- Đổi vai trò hoặc tạo thêm cuộc trò chuyện mới để ôn tập nhiều môn khác nhau!`
      : `Hello **${studentDisplayName}**! 👋\n\nI'm your personal **Gemini AI Study Tutor** (Grade ${studentGrade}). We are currently focused on **${topicName}** using the **${
          selectedRole === 'socratic' ? 'Socratic Mentor' : selectedRole === 'quizmaster' ? 'Interactive Quizmaster' : selectedRole === 'explainer' ? 'Concept Explainer' : 'Rapid Review'
        }** mode.\n\nFeel free to ask a question, challenge yourself with a quiz question below, or start a new conversation thread to organize your study topics!`;

    return {
      id: 'initial-greeting-' + Date.now(),
      role: 'model',
      text: greetingText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelUsed: selectedModel
    };
  };

  // Helper to create a new session
  const createNewSession = (topicName: string, roleVal: TutorRole = 'socratic', modelVal: GeminiModel = 'gemini-3.5-flash', customTitle?: string): ConversationSession => {
    const defaultTitle = customTitle || (isVi ? `Chủ đề: ${topicName.split(':')[0] || topicName}` : `Topic: ${topicName.split(':')[0] || topicName}`);
    return {
      id: `conv-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      title: defaultTitle,
      topic: topicName,
      role: roleVal,
      model: modelVal,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [createPersonalizedGreeting(topicName, roleVal, modelVal)]
    };
  };

  // State: Student conversations list & active conversation
  const [conversations, setConversations] = useState<ConversationSession[]>([]);
  const [activeConvId, setActiveConvId] = useState<string>('');
  const [isConvListOpen, setIsConvListOpen] = useState<boolean>(false);
  const [editingTitleId, setEditingTitleId] = useState<string | null>(null);
  const [editingTitleText, setEditingTitleText] = useState<string>('');

  // Active conversation values
  const activeSession = useMemo(() => {
    return conversations.find(c => c.id === activeConvId) || conversations[0] || null;
  }, [conversations, activeConvId]);

  // Working state for active conversation
  const [customTopic, setCustomTopic] = useState<string>('');
  const [isEditingTopic, setIsEditingTopic] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState<boolean>(false);
  const [isVoiceTyping, setIsVoiceTyping] = useState<boolean>(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // 2. Load conversations whenever studentId changes (ensures student isolation!)
  useEffect(() => {
    const storageKey = getStorageKey(studentId);
    const activeKey = getActiveKey(studentId);
    const savedConvs = localStorage.getItem(storageKey);
    let loaded: ConversationSession[] = [];

    if (savedConvs) {
      try {
        const parsed = JSON.parse(savedConvs);
        if (Array.isArray(parsed) && parsed.length > 0) {
          loaded = parsed;
        }
      } catch (e) {
        console.error('Failed to parse student conversations', e);
      }
    }

    // If this student has no saved conversations yet, initialize with a fresh personalized conversation
    if (loaded.length === 0) {
      // Check legacy history only if this is the very first student or fallback
      const initialTopicChoice = initialTopic || DEFAULT_TOPICS[0];
      const initialSession = createNewSession(initialTopicChoice);
      loaded = [initialSession];
      localStorage.setItem(storageKey, JSON.stringify(loaded));
    }

    setConversations(loaded);

    // Set active conversation
    const savedActiveId = localStorage.getItem(activeKey);
    if (savedActiveId && loaded.some(c => c.id === savedActiveId)) {
      setActiveConvId(savedActiveId);
    } else {
      setActiveConvId(loaded[0].id);
      localStorage.setItem(activeKey, loaded[0].id);
    }
  }, [studentId]);

  // Sync initialTopic prop if passed and differs
  useEffect(() => {
    if (initialTopic && activeSession && activeSession.topic !== initialTopic) {
      // If active conversation only has the initial greeting, update its topic directly
      if (activeSession.messages.length <= 1) {
        updateActiveSession({
          topic: initialTopic,
          title: isVi ? `Chủ đề: ${initialTopic.split(':')[0] || initialTopic}` : `Topic: ${initialTopic.split(':')[0] || initialTopic}`,
          messages: [createPersonalizedGreeting(initialTopic, activeSession.role, activeSession.model)]
        });
      }
    }
  }, [initialTopic]);

  // Persist conversations to student-specific key
  const saveStudentConversations = (updatedConvs: ConversationSession[], currentActiveId?: string) => {
    setConversations(updatedConvs);
    localStorage.setItem(getStorageKey(studentId), JSON.stringify(updatedConvs));
    if (currentActiveId) {
      setActiveConvId(currentActiveId);
      localStorage.setItem(getActiveKey(studentId), currentActiveId);
    }
  };

  const updateActiveSession = (patch: Partial<ConversationSession>) => {
    if (!activeSession) return;
    const updated = conversations.map(c => {
      if (c.id === activeSession.id) {
        return {
          ...c,
          ...patch,
          updatedAt: new Date().toISOString()
        };
      }
      return c;
    });
    saveStudentConversations(updated, activeSession.id);
  };

  const handleCreateNewConversation = (customTopicName?: string) => {
    const topicToUse = customTopicName || initialTopic || DEFAULT_TOPICS[0];
    const newSession = createNewSession(topicToUse, 'socratic', 'gemini-3.5-flash');
    const updated = [newSession, ...conversations];
    saveStudentConversations(updated, newSession.id);
    setIsConvListOpen(false);
  };

  const handleSelectConversation = (convId: string) => {
    setActiveConvId(convId);
    localStorage.setItem(getActiveKey(studentId), convId);
    setIsConvListOpen(false);
  };

  const handleDeleteConversation = (convId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(isVi ? 'Bạn có chắc chắn muốn xóa cuộc trò chuyện này?' : 'Are you sure you want to delete this conversation?')) {
      const remaining = conversations.filter(c => c.id !== convId);
      if (remaining.length === 0) {
        // Always maintain at least one conversation for the student
        const fresh = createNewSession(initialTopic || DEFAULT_TOPICS[0]);
        saveStudentConversations([fresh], fresh.id);
      } else {
        const nextActiveId = activeConvId === convId ? remaining[0].id : activeConvId;
        saveStudentConversations(remaining, nextActiveId);
      }
    }
  };

  const handleStartRename = (conv: ConversationSession, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingTitleId(conv.id);
    setEditingTitleText(conv.title);
  };

  const handleSaveRename = (convId: string, e: React.MouseEvent | React.FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!editingTitleText.trim()) {
      setEditingTitleId(null);
      return;
    }
    const updated = conversations.map(c => {
      if (c.id === convId) {
        return { ...c, title: editingTitleText.trim() };
      }
      return c;
    });
    saveStudentConversations(updated, activeConvId);
    setEditingTitleId(null);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeSession?.messages, isLoading]);

  const activeTopicString = customTopic.trim() || activeSession?.topic || DEFAULT_TOPICS[0];
  const activeRole = activeSession?.role || 'socratic';
  const activeModel = activeSession?.model || 'gemini-3.5-flash';
  const activeMessages = activeSession?.messages || [];

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading || !activeSession) return;

    const userMessage: ChatMessage = {
      id: 'msg-' + Date.now() + '-user',
      role: 'user',
      text: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // If first message in conversation or title is default, give it a smart descriptive title
    let newTitle = activeSession.title;
    if (activeMessages.length <= 1 || activeSession.title.startsWith('Chủ đề:') || activeSession.title.startsWith('Topic:')) {
      newTitle = messageContent.length > 36 ? messageContent.slice(0, 34) + '...' : messageContent;
    }

    const newHistory = [...activeMessages, userMessage];
    updateActiveSession({
      messages: newHistory,
      title: newTitle
    });

    setInput('');
    setIsLoading(true);

    try {
      // Map previous turns for multi-turn context (last 10 turns for balance)
      const historyPayload = newHistory
        .filter(m => !m.id.startsWith('initial-greeting'))
        .slice(-10)
        .map(m => ({
          role: m.role,
          text: m.text
        }));

      const response = await fetch('/api/gemini-study-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageContent,
          history: historyPayload.slice(0, -1),
          topic: activeTopicString,
          role: activeRole,
          model: activeModel,
          gradeLevel: studentGrade,
          studentName: studentDisplayName,
          language
        })
      });

      const data = await response.json();

      if (response.ok && data.text) {
        const assistantMessage: ChatMessage = {
          id: 'msg-' + Date.now() + '-ai',
          role: 'model',
          text: data.text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          modelUsed: data.modelUsed || activeModel
        };
        updateActiveSession({
          messages: [...newHistory, assistantMessage]
        });
      } else {
        const errorMessage: ChatMessage = {
          id: 'msg-' + Date.now() + '-error',
          role: 'model',
          text: isVi 
            ? `⚠️ Rất tiếc, đã có sự cố kết nối: ${data.error || 'Vui lòng thử lại sau.'}`
            : `⚠️ Sorry, there was an issue connecting to Gemini: ${data.error || 'Please try again.'}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        updateActiveSession({
          messages: [...newHistory, errorMessage]
        });
      }
    } catch (err: any) {
      const networkErrorMessage: ChatMessage = {
        id: 'msg-' + Date.now() + '-error',
        role: 'model',
        text: isVi
          ? `⚠️ Không thể gửi tin nhắn. Hãy kiểm tra kết nối mạng của bạn.`
          : `⚠️ Network error: Could not reach the AI tutor. Please check your connection.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      updateActiveSession({
        messages: [...newHistory, networkErrorMessage]
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearHistory = () => {
    if (window.confirm(isVi ? 'Bạn có muốn làm mới cuộc trò chuyện này?' : 'Do you want to reset this chat thread?')) {
      const resetMsg: ChatMessage = createPersonalizedGreeting(activeTopicString, activeRole, activeModel);
      updateActiveSession({
        messages: [resetMsg]
      });
    }
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleVoiceTyping = () => {
    if (isVoiceTyping) {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (e) { /* ignore */ }
      }
      setIsVoiceTyping(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert(isVi ? 'Trình duyệt hiện tại chưa hỗ trợ nhận dạng giọng nói tự động.' : 'Speech recognition is not supported in this browser.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.lang = isVi ? 'vi-VN' : 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsVoiceTyping(true);
      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        if (transcript) {
          setInput(prev => (prev ? prev + ' ' : '') + transcript);
        }
      };
      recognition.onerror = () => setIsVoiceTyping(false);
      recognition.onend = () => setIsVoiceTyping(false);
      recognition.start();
    } catch (e) {
      setIsVoiceTyping(false);
    }
  };

  const toggleReadAloud = (msgId: string, text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    let spokenText = text
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, (_m, num, den) => {
        return isVi ? `${num} phần ${den}` : `${num} over ${den}`;
      })
      .replace(/\$/g, '')
      .replace(/[*_#`~>\[\]\(\)]/g, ' ')
      .replace(/\n+/g, '. ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(spokenText);
    utterance.lang = isVi ? 'vi-VN' : 'en-US';
    utterance.rate = 1.0;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(msgId);
    window.speechSynthesis.speak(utterance);
  };

  const quickActionChips = [
    {
      id: 'quiz',
      label: t('gemini_chat.chip_quiz'),
      prompt: isVi 
        ? `Hãy đố mình một câu hỏi trắc nghiệm hay về chủ đề "${activeTopicString}". Cho mình 4 phương án A, B, C, D và đợi mình trả lời trước khi giải thích nhé!` 
        : `Quiz me with an engaging multiple-choice question on the topic "${activeTopicString}". Give me 4 choices (A, B, C, D) and wait for my answer before revealing the solution!`
    },
    {
      id: 'explain',
      label: t('gemini_chat.chip_explain'),
      prompt: isVi 
        ? `Hãy giải thích khái niệm cốt lõi của "${activeTopicString}" bằng một ví dụ thực tế hoặc hình ảnh ẩn dụ thật sinh động, dễ nhớ cho học sinh lớp ${studentGrade}.` 
        : `Explain the core concept of "${activeTopicString}" using a clear, relatable real-world analogy suitable for a Grade ${studentGrade} student.`
    },
    {
      id: 'practice',
      label: t('gemini_chat.chip_practice'),
      prompt: isVi 
        ? `Cho mình một bài tập vận dụng về "${activeTopicString}" kèm theo một gợi ý nhỏ để mình tự giải.` 
        : `Give me a realistic practice problem on "${activeTopicString}" with a subtle hint so I can solve it on my own.`
    },
    {
      id: 'formula',
      label: t('gemini_chat.chip_formula'),
      prompt: isVi 
        ? `Hãy tóm tắt ngắn gọn các công thức, định nghĩa và mẹo tránh bẫy quan trọng nhất của chủ đề "${activeTopicString}".` 
        : `Provide a high-yield summary of key formulas, definitions, and common test pitfalls for "${activeTopicString}".`
    }
  ];

  return (
    <div className={`relative flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 ${
      isFloating 
        ? 'h-[640px] max-h-[85vh] w-full rounded-2xl shadow-2xl overflow-hidden' 
        : 'h-[calc(100vh-140px)] min-h-[580px] rounded-3xl shadow-sm overflow-hidden'
    }`}>
      {/* Top Header */}
      <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 text-white p-3.5 sm:px-6 flex items-center justify-between border-b border-teal-800/20 shrink-0">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-teal-100 shadow-inner shrink-0">
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h2 className="font-extrabold text-sm sm:text-base leading-tight truncate">
                {t('gemini_chat.title')}
              </h2>
              {/* Distinct Student Profile Tag: Displays the active student account */}
              <div 
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-800/50 text-[10px] sm:text-[11px] font-bold text-teal-100 border border-teal-400/30"
                title={`${isVi ? 'Không gian riêng của học sinh' : 'Private student workspace'}: ${studentDisplayName}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="truncate max-w-[120px] sm:max-w-[160px]">{studentDisplayName}</span>
                <span className="text-[9px] text-teal-300 opacity-80">(L.{studentGrade})</span>
              </div>
            </div>
            <p className="text-[11px] text-teal-100/90 font-medium truncate mt-0.5">
              {activeSession ? activeSession.title : t('gemini_chat.subtitle')}
            </p>
          </div>
        </div>

        {/* Header Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Conversation Switcher Button */}
          <button
            onClick={() => setIsConvListOpen(!isConvListOpen)}
            className={`px-2.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all ${
              isConvListOpen 
                ? 'bg-white text-teal-800 shadow-md ring-2 ring-teal-300' 
                : 'bg-white/15 hover:bg-white/25 text-white'
            }`}
            title={t('gemini_chat.conversations')}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('gemini_chat.conversations')}</span>
            <span className="px-1.5 py-0.2 rounded-full bg-teal-900/40 text-[10px] font-black">
              {conversations.length}
            </span>
          </button>

          {/* New Chat Button */}
          <button
            onClick={() => handleCreateNewConversation()}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-teal-800/60 hover:bg-teal-800 text-teal-100 font-bold text-xs flex items-center gap-1 transition-all"
            title={t('gemini_chat.new_chat')}
          >
            <Plus className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden md:inline">{t('gemini_chat.new_chat')}</span>
          </button>

          {/* Voice Call Button */}
          <button
            id="gemini-header-voice-call-btn"
            onClick={() => setIsVoiceModalOpen(true)}
            className="px-2.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-teal-950 font-black text-xs flex items-center gap-1.5 shadow-sm transition-all transform hover:scale-105"
            title={t('gemini_chat.start_voice_call')}
          >
            <PhoneCall className="w-3.5 h-3.5 text-teal-950 animate-pulse" />
            <span className="hidden lg:inline">{isVi ? 'Gọi thoại AI Live' : 'Live Voice'}</span>
          </button>

          {/* Clear Current Chat Button */}
          <button
            onClick={handleClearHistory}
            title={t('gemini_chat.clear_history')}
            className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-teal-100 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Slide-over Conversations Drawer / Dropdown Panel */}
      {isConvListOpen && (
        <div className="absolute top-[58px] left-0 right-0 z-30 bg-white dark:bg-gray-900 border-b-2 border-teal-500 shadow-2xl p-4 sm:p-5 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <FolderOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-900 dark:text-white">
                  {isVi ? `Các cuộc trò chuyện của ${studentDisplayName}` : `${studentDisplayName}'s Conversations`}
                </h3>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {isVi 
                    ? 'Mỗi cuộc trò chuyện lưu giữ chủ đề và lịch sử riêng biệt dành cho tài khoản của bạn.' 
                    : 'Each conversation retains separate topics and chat history isolated to your account.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCreateNewConversation()}
                className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t('gemini_chat.new_chat')}</span>
              </button>
              <button
                onClick={() => setIsConvListOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conversations Grid / List */}
          <div className="mt-3 max-h-60 overflow-y-auto space-y-2 pr-1">
            {conversations.length === 0 ? (
              <div className="text-center py-6 text-gray-400 text-xs">
                {t('gemini_chat.no_conversations')}
              </div>
            ) : (
              conversations.map((conv) => {
                const isActive = conv.id === activeConvId;
                const isEditing = editingTitleId === conv.id;

                return (
                  <div
                    key={conv.id}
                    onClick={() => handleSelectConversation(conv.id)}
                    className={`group relative flex items-center justify-between p-3 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-teal-50/80 dark:bg-teal-950/40 border-teal-400 dark:border-teal-700 shadow-xs ring-1 ring-teal-400/40'
                        : 'bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 hover:border-teal-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1 pr-2">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-teal-600' : 'bg-gray-300 dark:bg-gray-600'}`} />
                      
                      <div className="min-w-0 flex-1">
                        {isEditing ? (
                          <form onSubmit={(e) => handleSaveRename(conv.id, e)} className="flex items-center gap-1">
                            <input
                              type="text"
                              value={editingTitleText}
                              onChange={(e) => setEditingTitleText(e.target.value)}
                              className="text-xs font-bold px-2 py-1 rounded border border-teal-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white w-full"
                              autoFocus
                              onClick={(e) => e.stopPropagation()}
                            />
                            <button
                              type="submit"
                              className="text-[11px] px-2 py-1 bg-teal-600 text-white rounded font-bold"
                            >
                              OK
                            </button>
                          </form>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-bold truncate ${isActive ? 'text-teal-950 dark:text-teal-100 font-black' : 'text-gray-800 dark:text-gray-200'}`}>
                              {conv.title}
                            </span>
                            <button
                              onClick={(e) => handleStartRename(conv, e)}
                              className="opacity-0 group-hover:opacity-100 p-0.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-opacity"
                              title={t('gemini_chat.rename_chat')}
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
                          <span className="truncate max-w-[140px] text-teal-600 dark:text-teal-400 font-medium">
                            {conv.topic}
                          </span>
                          <span>•</span>
                          <span>{conv.messages.length} {isVi ? 'tin nhắn' : 'msgs'}</span>
                          <span>•</span>
                          <span>{new Date(conv.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {isActive && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-teal-600 text-white">
                          {isVi ? 'Đang mở' : 'Active'}
                        </span>
                      )}
                      <button
                        onClick={(e) => handleDeleteConversation(conv.id, e)}
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors"
                        title={t('gemini_chat.delete_chat')}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Control Bar: Topics, Roles, and Gemini Model */}
      <div className="bg-gray-50/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 px-3.5 py-2.5 sm:px-6 space-y-2.5 shrink-0">
        {/* Row 1: Study Topic & Model Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {/* Topic selector */}
          <div className="flex-1 flex items-center gap-2 min-w-0">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              {t('gemini_chat.select_topic')}:
            </span>
            {isEditingTopic ? (
              <div className="flex items-center gap-1.5 flex-1 max-w-md">
                <input
                  type="text"
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder={t('gemini_chat.custom_topic_placeholder')}
                  className="w-full text-xs font-semibold px-3 py-1 rounded-lg border border-teal-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  autoFocus
                />
                <button
                  onClick={() => {
                    if (customTopic.trim()) {
                      updateActiveSession({ topic: customTopic.trim() });
                    }
                    setIsEditingTopic(false);
                  }}
                  className="text-xs px-2.5 py-1 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700"
                >
                  OK
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                <select
                  value={DEFAULT_TOPICS.includes(activeTopicString) ? activeTopicString : 'custom'}
                  onChange={(e) => {
                    if (e.target.value === 'custom') {
                      setIsEditingTopic(true);
                    } else {
                      setCustomTopic('');
                      updateActiveSession({ topic: e.target.value });
                    }
                  }}
                  className="text-xs font-bold bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-2.5 py-1 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-teal-500 max-w-[200px] sm:max-w-[280px] truncate"
                >
                  {DEFAULT_TOPICS.map((top, idx) => (
                    <option key={idx} value={top}>{top}</option>
                  ))}
                  <option value="custom">✏️ {isVi ? 'Chủ đề tự chọn...' : 'Custom topic...'}</option>
                </select>
                {customTopic && (
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-md border border-teal-200 dark:border-teal-800 truncate max-w-[150px]">
                    {customTopic}
                  </span>
                )}
                <button
                  onClick={() => setIsEditingTopic(true)}
                  className="text-[11px] text-teal-600 dark:text-teal-400 hover:underline font-bold whitespace-nowrap"
                >
                  {isVi ? 'Đổi chủ đề' : 'Edit'}
                </button>
              </div>
            )}
          </div>

          {/* Model selector */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0">
            <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-indigo-500" />
              Model:
            </span>
            <select
              value={activeModel}
              onChange={(e) => updateActiveSession({ model: e.target.value as GeminiModel })}
              className="text-xs font-bold bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-1 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="gemini-3.5-flash">
                ⚡ {t('gemini_chat.model_balanced')}
              </option>
              <option value="gemini-3.1-flash-lite">
                🚀 {t('gemini_chat.model_fast')}
              </option>
              <option value="gemini-3.1-pro-preview">
                🧠 {t('gemini_chat.model_pro')}
              </option>
            </select>
          </div>
        </div>

        {/* Row 2: Pedagogical Roles Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider whitespace-nowrap mr-1">
            {isVi ? 'Vai trò:' : 'Role:'}
          </span>

          <button
            onClick={() => updateActiveSession({ role: 'socratic' })}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all whitespace-nowrap ${
              activeRole === 'socratic'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-teal-400'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t('gemini_chat.role_socratic')}</span>
          </button>

          <button
            onClick={() => updateActiveSession({ role: 'quizmaster' })}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all whitespace-nowrap ${
              activeRole === 'quizmaster'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-amber-400'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>{t('gemini_chat.role_quizmaster')}</span>
          </button>

          <button
            onClick={() => updateActiveSession({ role: 'explainer' })}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all whitespace-nowrap ${
              activeRole === 'explainer'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-400'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>{t('gemini_chat.role_explainer')}</span>
          </button>

          <button
            onClick={() => updateActiveSession({ role: 'speed' })}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all whitespace-nowrap ${
              activeRole === 'speed'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-400'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{t('gemini_chat.role_speed')}</span>
          </button>
        </div>
      </div>

      {/* Message Scrollable Thread */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#FBFBFC] dark:bg-gray-950/70">
        {activeMessages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex gap-2.5 sm:gap-3 max-w-3xl ${isUser ? 'ml-auto justify-end' : 'mr-auto justify-start'}`}
            >
              {!isUser && (
                <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`relative group max-w-[88%] sm:max-w-[80%] rounded-2xl p-3.5 sm:p-4 shadow-sm transition-all ${
                isUser
                  ? 'bg-teal-600 text-white rounded-tr-none'
                  : 'bg-white dark:bg-gray-800/90 text-gray-800 dark:text-gray-100 border border-gray-200/80 dark:border-gray-700/80 rounded-tl-none'
              }`}>
                {/* Message Header info for model */}
                {!isUser && (
                  <div className="flex items-center justify-between gap-3 pb-1.5 mb-2 border-b border-gray-100 dark:border-gray-700/60 text-[11px] font-bold text-gray-400 dark:text-gray-500">
                    <span className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400">
                      <Sparkles className="w-3 h-3" />
                      <span>Learnix Gemini Tutor</span>
                      {msg.modelUsed && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-mono font-normal">
                          {msg.modelUsed}
                        </span>
                      )}
                    </span>
                    <span>{msg.timestamp}</span>
                  </div>
                )}

                {/* Message Content rendered with MathMarkdown */}
                <div className={`prose prose-sm max-w-none break-words leading-relaxed ${
                  isUser 
                    ? 'text-white prose-invert' 
                    : 'dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-pre:bg-gray-900 prose-pre:text-gray-100'
                }`}>
                  <MathMarkdown content={msg.text} />
                </div>

                {/* Action buttons (Read Aloud & Copy) */}
                <div className="pt-2 mt-1 flex items-center justify-between">
                  <span className={`text-[10px] ${isUser ? 'text-teal-200' : 'text-gray-400'}`}>
                    {isUser ? msg.timestamp : ''}
                  </span>
                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {!isUser && (
                      <button
                        onClick={() => toggleReadAloud(msg.id, msg.text)}
                        className={`p-1 rounded hover:bg-black/10 text-xs flex items-center gap-1 ${
                          speakingId === msg.id 
                            ? 'text-teal-600 dark:text-teal-400 font-bold' 
                            : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                        }`}
                        title={speakingId === msg.id ? t('gemini_chat.tts_stop') : t('gemini_chat.tts_read_aloud')}
                      >
                        {speakingId === msg.id ? (
                          <VolumeX className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                    <button
                      onClick={() => copyToClipboard(msg.id, msg.text)}
                      className={`p-1 rounded hover:bg-black/10 text-xs flex items-center gap-1 ${
                        isUser ? 'text-teal-100' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                      }`}
                      title="Copy text"
                    >
                      {copiedId === msg.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {isUser && (
                <div className="w-8 h-8 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {/* Loading Bubble */}
        {isLoading && (
          <div className="flex gap-2.5 sm:gap-3 mr-auto max-w-3xl">
            <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center gap-3">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce" />
              </div>
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                {isVi ? 'Gemini đang chuẩn bị câu trả lời cho bạn...' : 'Gemini is preparing your study guidance...'}
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Chips */}
      <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-3.5 py-2 sm:px-6 shrink-0">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-bold text-gray-400 whitespace-nowrap flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            {isVi ? 'Gợi ý:' : 'Quick:'}
          </span>
          {quickActionChips.map((chip) => (
            <button
              key={chip.id}
              onClick={() => handleSendMessage(chip.prompt)}
              disabled={isLoading}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50/50 dark:hover:bg-teal-950/30 transition-all whitespace-nowrap shadow-2xs disabled:opacity-50"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="p-3 sm:p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-end gap-2"
        >
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t('gemini_chat.input_placeholder')}
              rows={2}
              className="w-full resize-none rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 px-4 py-2.5 sm:py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:border-teal-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
            />
          </div>

          <button
            type="button"
            onClick={toggleVoiceTyping}
            className={`h-11 sm:h-12 w-11 sm:w-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
              isVoiceTyping 
                ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse shadow-lg shadow-red-500/30 ring-2 ring-red-400' 
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
            title={isVoiceTyping ? t('gemini_chat.voice_dictation_stop') : t('gemini_chat.voice_dictation_start')}
          >
            {isVoiceTyping ? (
              <MicOff className="w-5 h-5 text-white" />
            ) : (
              <Mic className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            )}
          </button>

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="h-11 sm:h-12 px-4 sm:px-5 rounded-2xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold transition-all shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>{isVi ? 'Gửi' : 'Send'}</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-1.5 flex items-center justify-between text-[11px] text-gray-400 px-1">
          <span className="truncate mr-2">
            {isVoiceTyping 
              ? (isVi ? '🎤 Đang nghe... Hãy nói câu hỏi của bạn!' : '🎤 Listening... Speak your question!') 
              : (isVi ? 'Nhấn Enter để gửi, hoặc bấm Micro để nói' : 'Press Enter to send, or click Mic to speak')}
          </span>
          <span className="font-mono text-[10px] shrink-0 text-teal-600 dark:text-teal-400">
            {activeRole === 'socratic' ? 'Socratic' : activeRole === 'quizmaster' ? 'Quizmaster' : activeRole === 'explainer' ? 'Explainer' : 'Speed'} • {studentDisplayName}
          </span>
        </div>
      </div>

      {/* Real-time Voice Call Modal using Gemini 3.8 Live API */}
      <LiveVoiceStudyModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        topic={activeTopicString}
        role={activeRole}
      />
    </div>
  );
}
