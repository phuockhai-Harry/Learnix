import React, { useState } from 'react';
import { Sparkles, Brain, BookOpen, Target, GraduationCap, Zap, HelpCircle } from 'lucide-react';
import GeminiStudyChatbot from '../components/GeminiStudyChatbot';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';

export default function AITutorPage() {
  const { t, language } = useLanguage();
  const { profile } = useAuth();
  const isVi = language === 'vi';

  const [activeTopic, setActiveTopic] = useState<string>('Mathematics: Fractions & Pre-Algebra');

  const popularTopics = [
    { title: isVi ? 'Toán học: Phân số & Đại số cơ bản' : 'Math: Fractions & Algebra', topic: 'Mathematics: Fractions & Pre-Algebra', icon: '📐' },
    { title: isVi ? 'Khoa học: Quang hợp & Hệ sinh thái' : 'Science: Ecosystems & Energy', topic: 'Science: Photosynthesis & Ecosystems', icon: '🔬' },
    { title: isVi ? 'Vật lý: Lực & Định luật Newton' : 'Physics: Forces & Newton Laws', topic: 'Physics: Forces, Gravity & Newton Laws', icon: '⚡' },
    { title: isVi ? 'Lập trình: Thuật toán & Tư duy Logic' : 'Coding: Algorithms & Logic', topic: 'Computer Science: Algorithms & Logic', icon: '💻' },
    { title: isVi ? 'Lịch sử & Địa lý Thế giới' : 'World History & Civilizations', topic: 'History: Ancient World Civilizations', icon: '🌍' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page Title & Highlights */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/5 dark:from-teal-950/40 dark:to-emerald-950/30 p-6 rounded-3xl border border-teal-200/60 dark:border-teal-800/40">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 text-xs font-black mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{isVi ? 'Trợ lý Học tập Gemini AI 3 Series • Hỗ trợ Giọng nói Live' : 'Gemini AI 3-Series Multi-Turn Study Tutor • Spoken Voice Live'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            {isVi ? 'Gia sư Học tập & Ôn thi Cá nhân' : 'AI Study Partner & Quiz Coach'}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-2xl font-medium">
            {isVi
              ? 'Hỏi bài, khám phá chủ đề học tập, luyện tập trắc nghiệm và nhận hướng dẫn từng bước được cá nhân hoá theo trình độ của bạn.'
              : 'Ask study questions, dive into specific curriculum topics, get quizzed with interactive test problems, and unlock step-by-step guidance.'}
          </p>
        </div>

        {/* Quick topic buttons */}
        <div className="flex flex-wrap items-center gap-2 max-w-md">
          {popularTopics.slice(0, 3).map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTopic(item.topic)}
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-2xs flex items-center gap-1.5"
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Gemini Study Chatbot Interface */}
      <GeminiStudyChatbot initialTopic={activeTopic} />
    </div>
  );
}
