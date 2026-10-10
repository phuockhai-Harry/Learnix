import React, { useState } from 'react';
import { Bot, Sparkles, X, MessageSquare } from 'lucide-react';
import GeminiStudyChatbot from './GeminiStudyChatbot';
import { useLanguage } from '../i18n';

export default function FloatingGeminiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const isVi = language === 'vi';

  return (
    <>
      {/* Floating launcher trigger button */}
      {!isOpen && (
        <button
          id="floating-gemini-chatbot-btn"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white pl-4 pr-5 py-3 rounded-full shadow-xl shadow-teal-700/25 hover:shadow-2xl hover:shadow-teal-700/35 transition-all duration-200 transform hover:-translate-y-0.5"
          title={isVi ? 'Mở Gia sư Gemini AI' : 'Open Gemini AI Study Tutor'}
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300"></span>
            </span>
          </div>
          <span className="text-xs font-black tracking-wide">
            {isVi ? 'Gia sư Gemini AI' : 'Gemini AI Tutor'}
          </span>
        </button>
      )}

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div 
          id="floating-gemini-modal"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[480px] max-w-[520px] transition-all animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          <div className="relative shadow-2xl rounded-2xl">
            <GeminiStudyChatbot 
              isFloating={true} 
              onClose={() => setIsOpen(false)} 
            />
          </div>
        </div>
      )}
    </>
  );
}
