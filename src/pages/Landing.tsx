import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Flame, Trophy, ShieldCheck, CheckCircle, Sparkles, ArrowRight, BookOpen, Bot, Zap, LayoutDashboard } from 'lucide-react';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';

export default function Landing() {
  const { language, toggleLanguage } = useLanguage();
  const { user, profile } = useAuth();
  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);
  const isAuthenticated = Boolean(user && profile);

  const quizOptions = [
    { text: '5/4 (1 ¼)', isCorrect: true },
    { text: '4/6', isCorrect: false },
    { text: '2/3', isCorrect: false },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-teal-200">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-gray-900">Learnix</span>
            <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-100 text-teal-800">
              Interactive EdTech
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            id="landing-language-btn"
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors uppercase tracking-wider"
          >
            <span>{language === 'en' ? '🇻🇳 VI' : '🇬🇧 EN'}</span>
          </button>
          <Link 
            id="landing-signin-btn"
            to={isAuthenticated ? "/dashboard" : "/login"}
            className="px-6 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold transition-all shadow-sm hover:shadow flex items-center gap-1.5"
          >
            {isAuthenticated ? (
              <>
                <LayoutDashboard className="w-4 h-4" />
                <span>{language === 'en' ? 'Dashboard' : 'Bảng điều khiển'}</span>
              </>
            ) : (
              <span>{language === 'en' ? 'Sign in' : 'Đăng nhập'}</span>
            )}
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Copy tailored to Learnix */}
        <div className="space-y-6 max-w-xl z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-black tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>
              {language === 'en' 
                ? 'Gamified Learning & Smart Quizzes' 
                : 'Nền tảng học tập tương tác & trò chơi hoá'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.12] tracking-tight text-gray-900">
            {language === 'en' ? (
              <>
                Interactive learning,<br />
                daily challenges &<br />
                <span className="text-teal-600">knowledge quests</span>
              </>
            ) : (
              <>
                Học tập tương tác,<br />
                chinh phục thử thách<br />
                <span className="text-teal-600">cùng Learnix</span>
              </>
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            {language === 'en' ? 
              'Master key subjects through engaging bite-sized quizzes, earn XP rewards, maintain daily streaks, get instant AI guidance, and study anytime—even offline.' : 
              'Làm chủ kiến thức với các bài trắc nghiệm sinh động, tích lũy điểm XP, mở khóa huy hiệu, duy trì chuỗi học tập cùng gia sư AI và đồng bộ an toàn ngay cả khi ngoại tuyến.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
            <Link 
              id="landing-hero-student-cta"
              to={isAuthenticated ? "/dashboard" : "/login"}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-center transition-all shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 flex items-center justify-center gap-2"
            >
              <span>
                {isAuthenticated 
                  ? (language === 'en' ? 'Go to Dashboard' : 'Vào Bảng điều khiển')
                  : (language === 'en' ? 'Start Learning Now' : 'Bắt đầu học ngay')}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              id="landing-hero-teacher-cta"
              to={isAuthenticated ? "/dashboard" : "/login"}
              className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-2xl font-bold text-center transition-all shadow-sm hover:border-gray-300"
            >
              {language === 'en' ? 'Teachers Portal' : 'Dành cho Giáo viên'}
            </Link>
          </div>

          {/* Quick highlight pills */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-gray-500">
            <div className="flex items-center gap-1.5 bg-gray-100/80 px-3 py-1.5 rounded-lg">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>{language === 'en' ? 'Streak & XP Rewards' : 'Tích luỹ XP & Chuỗi streak'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-100/80 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>{language === 'en' ? 'Offline Protected' : 'Tự động lưu ngoại tuyến'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-100/80 px-3 py-1.5 rounded-lg">
              <Bot className="w-3.5 h-3.5 text-indigo-600" />
              <span>{language === 'en' ? 'AI Study Tutor' : 'Gia sư AI hỗ trợ'}</span>
            </div>
          </div>
        </div>

        {/* Right Column - Authentic Learnix Interactive Showcase */}
        <div className="relative">
          {/* Subtle decorative background glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 rounded-[2.5rem] filter blur-xl opacity-70"></div>
          
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200/80 p-6 md:p-8 max-w-md mx-auto space-y-5">
            {/* Mock Header with Subject and Streak */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-black text-sm">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-teal-700">
                    {language === 'en' ? 'Interactive Challenge' : 'Thử thách Toán học'}
                  </h4>
                  <p className="text-xs text-gray-500 font-bold">
                    {language === 'en' ? 'Lesson: Fractions & Logic' : 'Bài 3: Phân số & Tư duy logic'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 rounded-full text-xs font-black">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
                <span>5 {language === 'en' ? 'Days' : 'Ngày'}</span>
              </div>
            </div>

            {/* Question card */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                {language === 'en' ? 'Question 1 of 5' : 'Câu hỏi 1 / 5'}
              </span>
              <p className="font-bold text-gray-900 text-base mt-1">
                {language === 'en' 
                  ? 'Calculate the sum: 3/4 + 1/2 = ?' 
                  : 'Tính giá trị của phép cộng: 3/4 + 1/2 = ?'}
              </p>
            </div>

            {/* Interactive answer choices */}
            <div className="space-y-2.5">
              {quizOptions.map((opt, idx) => {
                const isPicked = selectedAnswer === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedAnswer(idx)}
                    className={`w-full p-3.5 rounded-xl border text-left font-bold text-sm flex items-center justify-between transition-all ${
                      isPicked
                        ? opt.isCorrect
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm'
                          : 'border-teal-500 bg-teal-50 text-teal-900'
                        : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg text-xs flex items-center justify-center font-black ${
                        isPicked && opt.isCorrect 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt.text}</span>
                    </div>
                    {isPicked && opt.isCorrect && (
                      <div className="flex items-center gap-1.5 text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>+100 XP</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Floating feature pills inside showcase */}
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-600">
              <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Auto-synced' : 'Đã tự lưu'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg">
                <Bot className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'AI Hint ready' : 'Gợi ý từ AI'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg">
                <Trophy className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Rank #1' : 'Hạng 1 lớp'}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Learnix Core Value Highlights */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              {language === 'en' 
                ? 'Why students and educators choose Learnix' 
                : 'Vì sao học sinh và giáo viên tin chọn Learnix'}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-medium mt-2">
              {language === 'en'
                ? 'A comprehensive learning ecosystem built for curiosity, consistency, and real results.'
                : 'Hệ sinh thái học tập toàn diện, khơi dậy niềm đam mê và ghi nhận mọi nỗ lực của học sinh.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Gamified Learning */}
            <div className="bg-gray-50/70 hover:bg-white rounded-3xl p-8 border border-gray-200/80 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'en' ? 'Gamified XP & Streaks' : 'Học tập trò chơi hoá & Chuỗi streak'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en' 
                  ? 'Build daily learning habits with streaks, earn XP rewards for completed quizzes, and unlock unique achievement badges.' 
                  : 'Tạo thói quen rèn luyện mỗi ngày với chuỗi ngày liên tục, tích luỹ XP sau mỗi bài làm và mở khóa bộ sưu tập huy hiệu độc đáo.'}
              </p>
            </div>

            {/* Card 2: Offline Ready */}
            <div className="bg-gray-50/70 hover:bg-white rounded-3xl p-8 border border-gray-200/80 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'en' ? 'Offline-Ready & Auto-Sync' : 'Học tập mọi lúc, tự động lưu'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en' 
                  ? 'Never lose progress due to spotty connections. Quiz submissions and XP are safely cached locally and sync automatically once back online.' 
                  : 'Làm bài tập thoải mái ngay cả khi mất mạng. Điểm số, chuỗi streak và kết quả được lưu an toàn trên máy và tự động đồng bộ khi có Internet.'}
              </p>
            </div>

            {/* Card 3: AI Tutor & Reports */}
            <div className="bg-gray-50/70 hover:bg-white rounded-3xl p-8 border border-gray-200/80 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'en' ? 'AI Tutor & Progress Reports' : 'Gia sư AI & Báo cáo phụ huynh'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en' 
                  ? 'Get instant step-by-step guidance from the AI study assistant, alongside comprehensive PDF report cards for parents and teachers.' 
                  : 'Nhận gợi ý và giải thích từng bước từ gia sư AI, đồng thời hỗ trợ xuất báo cáo kết quả học tập định dạng PDF chuẩn mực cho phụ huynh.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
