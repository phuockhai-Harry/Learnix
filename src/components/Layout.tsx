import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../auth';
import { useTheme } from '../theme';
import { useLanguage } from '../i18n';
import { useToast } from '../context/ToastContext';
import { NotificationCenter } from './NotificationCenter';
import { OnboardingTour } from './OnboardingTour';
import { 
  Moon, Sun, LogOut, BookOpen, User as UserIcon, Globe, 
  Home, Compass, Target, Trophy, Menu, X, HelpCircle,
  WifiOff, Wifi, Bot, Sparkles, Calendar, ShieldCheck, FileText, Users,
  ChevronDown, Check, MessageSquare
} from 'lucide-react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { profile, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();
  const { isOnline, isSimulatedOffline, toggleSimulatedOffline, pendingSyncCount, triggerManualSync } = useToast();
  const isVi = language === 'vi';
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navItems = [
    { 
      path: '/dashboard', 
      label: profile?.role === 'admin' 
        ? (isVi ? 'Bảng quản trị' : 'Admin Overview') 
        : profile?.role === 'teacher' 
        ? (isVi ? 'Bảng giáo viên' : 'Teacher Dashboard') 
        : t('layout.dashboard'), 
      icon: <Home className="w-4 h-4 shrink-0" />, 
      roles: ['student', 'teacher', 'admin'] 
    },
    { path: '/explore', label: isVi ? 'Học tập' : 'Learning', icon: <BookOpen className="w-4 h-4 shrink-0" />, roles: ['student'] },
    { path: '/practice', label: t('layout.practice'), icon: <Target className="w-4 h-4 shrink-0" />, roles: ['student'] },
    { path: '/classes', label: t('layout.classes'), icon: <Users className="w-4 h-4 text-blue-600 shrink-0" />, roles: ['student'] },
    { path: '/achievements', label: isVi ? 'Bảng xếp hạng & Huy hiệu' : 'Badges & Leaderboard', icon: <Trophy className="w-4 h-4 text-amber-500 shrink-0" />, roles: ['student', 'teacher'] },
    { path: '/study-rooms', label: t('layout.studyRooms'), icon: <MessageSquare className="w-4 h-4 text-teal-600 shrink-0" />, roles: ['student', 'teacher'] },
    { path: '/tutor', label: t('layout.tutor'), icon: <Bot className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />, roles: ['student'] },
    
    // Teacher-exclusive tools
    { path: '/quiz/create', label: isVi ? 'Tạo câu hỏi' : 'Create Quiz', icon: <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />, roles: ['teacher'] },
    
    // Admin-exclusive tools
    { path: '/admin', label: isVi ? 'Quản trị người dùng' : 'User Directory', icon: <ShieldCheck className="w-4 h-4 text-indigo-500 shrink-0" />, roles: ['admin'] },
    
    // Account settings for all roles
    { path: '/account', label: t('layout.account'), icon: <UserIcon className="w-4 h-4 shrink-0" />, roles: ['student', 'teacher', 'admin'] },
  ];

  const currentRole = profile?.role || 'student';
  const visibleNavItems = navItems.filter(item => item.roles.includes(currentRole));

  const sectionLabel = currentRole === 'admin' 
    ? (isVi ? 'Quản trị hệ thống' : 'Administration') 
    : currentRole === 'teacher' 
    ? (isVi ? 'Giảng dạy & Lớp học' : 'Teaching & Classes') 
    : t('layout.learning');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 flex">
      <OnboardingTour forceOpen={showTour} role={currentRole as any} onClose={() => setShowTour(false)} />

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation - Always present on tablet/desktop, cleanly structured */}
      <aside className={`fixed inset-y-0 left-0 w-60 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:sticky md:top-0 flex flex-col h-screen min-h-screen shrink-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Brand Header */}
        <div className="h-14 flex items-center px-4 border-b border-gray-200 dark:border-gray-800 justify-between shrink-0">
          <Link to="/dashboard" className="flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
            <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center shadow-sm">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="font-black text-xl tracking-tight text-teal-900 dark:text-teal-100">Learnix</span>
          </Link>
          <button className="md:hidden text-gray-500 p-1" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Compact Navigation Menu */}
        <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto min-h-0">
          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-2.5 mb-1.5">{sectionLabel}</p>
          {visibleNavItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/');
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive 
                    ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 shadow-xs border border-teal-100 dark:border-teal-800' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200 border border-transparent'
                }`}
              >
                <span className="shrink-0">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer with Tour and User Profile */}
        <div className="p-3 border-t border-gray-200 dark:border-gray-800 space-y-2 shrink-0 bg-white dark:bg-gray-900 mt-auto">
          {/* App Tour Shortcut */}
          <button
            onClick={() => {
              setSidebarOpen(false);
              setShowTour(true);
            }}
            className={`w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              currentRole === 'admin'
                ? 'bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-900/50'
                : currentRole === 'teacher'
                ? 'bg-purple-50/80 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-900 hover:bg-purple-100 dark:hover:bg-purple-900/50'
                : 'bg-teal-50/80 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200/80 dark:border-teal-900 hover:bg-teal-100 dark:hover:bg-teal-900/50'
            }`}
            title={
              currentRole === 'admin'
                ? (isVi ? 'Xem hướng dẫn quản trị' : 'Admin Tour')
                : currentRole === 'teacher'
                ? (isVi ? 'Xem hướng dẫn giáo viên' : 'Teacher Tour')
                : (isVi ? 'Xem hướng dẫn ứng dụng' : 'Quick Tour')
            }
          >
            <HelpCircle className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">
              {currentRole === 'admin'
                ? (isVi ? 'Hướng dẫn Quản trị' : 'Admin Tour')
                : currentRole === 'teacher'
                ? (isVi ? 'Hướng dẫn Giáo viên' : 'Teacher Tour')
                : (isVi ? 'Hướng dẫn sử dụng' : 'Quick Tour')}
            </span>
          </button>

          {/* User Account & Logout in a single sleek compact row */}
          <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800">
            <Link to="/account" onClick={() => setSidebarOpen(false)} className="flex items-center gap-2 min-w-0 hover:opacity-80 transition-opacity">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs uppercase shrink-0 ${
                profile?.role === 'admin'
                  ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300'
                  : profile?.role === 'teacher'
                  ? 'bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300'
                  : 'bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300'
              }`}>
                {(profile?.codeName || profile?.realName || 'U').charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold truncate text-gray-900 dark:text-white leading-tight">
                  {profile?.codeName || profile?.realName || 'User'}
                </p>
                <p className="text-[10px] text-gray-400 capitalize font-medium truncate">
                  {profile?.role === 'admin' ? (isVi ? 'Quản trị' : 'Admin') : profile?.role === 'teacher' ? (isVi ? 'Giáo viên' : 'Teacher') : (isVi ? 'Học sinh' : 'Student')}
                </p>
              </div>
            </Link>

            <button
              onClick={logout}
              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors shrink-0"
              title={t('layout.logout')}
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <button 
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6 shrink-0" />
          </button>
          
          <div className="flex-1 flex justify-end items-center space-x-2 sm:space-x-3">
            {/* Offline Connection Status Indicator */}
            {!isOnline && (
              <button
                id="header-offline-status-btn"
                onClick={isSimulatedOffline ? toggleSimulatedOffline : triggerManualSync}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/15 dark:bg-amber-950/60 border border-amber-500/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-black hover:bg-amber-500/25 transition-colors"
                title={isSimulatedOffline ? (isVi ? 'Nhấp để kết nối lại' : 'Click to reconnect') : (isVi ? 'Đang ngoại tuyến - dữ liệu được lưu trên máy' : 'Offline - data saved locally')}
              >
                <WifiOff className="w-3.5 h-3.5 animate-pulse text-amber-600 dark:text-amber-400" />
                <span className="hidden xs:inline">{isVi ? 'Ngoại tuyến' : 'Offline'}</span>
                {pendingSyncCount > 0 && (
                  <span className="px-1.5 py-0.2 bg-amber-500 text-slate-950 rounded-full text-[10px] font-black">
                    {pendingSyncCount}
                  </span>
                )}
              </button>
            )}

            <NotificationCenter />
            {/* Multi-language dropdown selector showing current language */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-700 transition-all shadow-xs"
                title="Select Language / Chọn ngôn ngữ"
                aria-haspopup="true"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{language === 'vi' ? '🇻🇳 Tiếng Việt' : '🇺🇸 English'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {langDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setLangDropdownOpen(false)} 
                  />
                  <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('vi');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-3.5 py-2 text-left text-xs font-bold flex items-center justify-between transition-colors ${
                        language === 'vi'
                          ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>🇻🇳</span>
                        <span>Tiếng Việt</span>
                      </div>
                      {language === 'vi' && <Check className="w-3.5 h-3.5 text-teal-600" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('en');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-3.5 py-2 text-left text-xs font-bold flex items-center justify-between transition-colors ${
                        language === 'en'
                          ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>🇺🇸</span>
                        <span>English</span>
                      </div>
                      {language === 'en' && <Check className="w-3.5 h-3.5 text-teal-600" />}
                    </button>
                  </div>
                </>
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 p-4 sm:p-6 lg:p-8 pb-28 md:pb-12">
          {children || <Outlet />}
        </main>
      </div>

      {/* Sleek Mobile Bottom Taskbar for Students (Khan Academy & Brilliant Style) */}
      {currentRole === 'student' && (
        <nav 
          aria-label="Mobile Bottom Navigation"
          className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-2 py-1.5 flex items-center justify-around shadow-lg"
        >
          <Link
            to="/dashboard"
            className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
              location.pathname === '/dashboard' || location.pathname === '/'
                ? 'text-teal-600 dark:text-teal-400 font-black'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900'
            }`}
          >
            <Home className="w-5 h-5 shrink-0" />
            <span className="truncate mt-0.5">{t('layout.dashboard')}</span>
          </Link>

          <Link
            to="/explore"
            className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
              location.pathname === '/explore'
                ? 'text-teal-600 dark:text-teal-400 font-black'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900'
            }`}
          >
            <BookOpen className="w-5 h-5 shrink-0" />
            <span className="truncate mt-0.5">{isVi ? 'Học tập' : 'Learning'}</span>
          </Link>

          <Link
            to="/practice"
            className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
              location.pathname === '/practice'
                ? 'text-teal-600 dark:text-teal-400 font-black'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900'
            }`}
          >
            <Target className="w-5 h-5 shrink-0" />
            <span className="truncate mt-0.5">{t('layout.practice')}</span>
          </Link>

          <Link
            to="/classes"
            className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
              location.pathname === '/classes'
                ? 'text-blue-600 dark:text-blue-400 font-black'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900'
            }`}
          >
            <Users className="w-5 h-5 shrink-0" />
            <span className="truncate mt-0.5">{t('layout.classes')}</span>
          </Link>

          <Link
            to="/study-rooms"
            className={`flex flex-col items-center py-1 px-2 rounded-xl text-[10px] font-bold transition-colors ${
              location.pathname === '/study-rooms'
                ? 'text-teal-600 dark:text-teal-400 font-black'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900'
            }`}
          >
            <MessageSquare className="w-5 h-5 shrink-0" />
            <span className="truncate mt-0.5">{t('layout.studyRooms')}</span>
          </Link>
        </nav>
      )}
    </div>
  );
}
