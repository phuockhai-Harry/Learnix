import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import { useLanguage } from '../i18n';
import MathMarkdown from './MathMarkdown';

interface HomeworkChatProps {
  homework: any;
  gradeLevel: number | string;
  onClose: () => void;
}

export function HomeworkChat({ homework, gradeLevel, onClose }: HomeworkChatProps) {
  const { t } = useLanguage();
  
  const initialGreeting = `${t('chat.initial_greeting')} "${homework.title}". ${t('chat.need_hint')}`;

  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: initialGreeting }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          homeworkId: homework.quizId,
          homeworkTitle: homework.title,
          gradeLevel,
          studentMessage: userMessage,
          history: messages.filter(m => m.role !== 'model' || m.text !== initialGreeting)
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'model', text: data.text }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', text: `${t('chat.error')}: ${data.error}` }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: t('chat.network_error') }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">{t('chat.ai_tutor')}</h3>
              <p className="text-teal-100 text-sm">{t('chat.helping_with')} {homework.title}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === 'user' 
                  ? 'bg-teal-500 text-white rounded-tr-sm' 
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-sm shadow-sm'
              }`}>
                <MathMarkdown content={msg.text} />
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('chat.ask_hint')}
              disabled={isLoading}
              className="flex-1 bg-gray-100 dark:bg-gray-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 text-gray-900 dark:text-white"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-teal-500 text-white p-3 rounded-xl hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
