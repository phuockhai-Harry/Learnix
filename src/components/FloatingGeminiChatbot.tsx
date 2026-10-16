import React, { useState, useEffect } from 'react';
import { Bot, X } from 'lucide-react';
import GeminiStudyChatbot from './GeminiStudyChatbot';
import { useLanguage } from '../i18n';

export default function FloatingGeminiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const isVi = language === 'vi';

  // Listen for Escape key to easily close chatbot
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Floating launcher trigger button */}
      {!isOpen && (
        <button
          id="floating-gemini-chatbot-btn"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white pl-4 pr-5 py-3 rounded-full shadow-xl shadow-teal-700/25 hover:shadow-2xl hover:shadow-teal-700/35 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
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

      {/* Floating Chat Modal / Drawer with backdrop click and corner close button */}
      {isOpen && (
        <div 
          id="floating-gemini-modal"
          className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 flex items-end sm:items-end justify-end p-2 sm:p-0 bg-black/40 backdrop-blur-xs sm:bg-transparent sm:backdrop-blur-none transition-all animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="relative shadow-2xl rounded-2xl w-full sm:w-[480px] max-w-[520px]">
            {/* Dedicated Top-Right Close Button Badge */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-3.5 -right-2 sm:-right-3 z-60 w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white dark:border-gray-900 cursor-pointer"
              title={isVi ? 'Đóng cửa sổ trò chuyện (ESC)' : 'Close chat (ESC)'}
              aria-label="Close"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

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
