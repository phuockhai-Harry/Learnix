import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../auth';
import { useTheme } from '../theme';
import { useLanguage } from '../i18n';
import { 
  Moon, Sun, LogOut, BookOpen, User as UserIcon, Globe, 
  Home, Compass, Target, Trophy, Menu, X 
} from 'lucide-react';

export default function Layout() {
  const { profile, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('layout.dashboard'), icon: <Home className="w-5 h-5" />, roles: ['student', 'teacher'] },
    { path: '/explore', label: t('layout.explore'), icon: <Compass className="w-5 h-5" />, roles: ['student'] },
    { path: '/practice', label: t('layout.practice'), icon: <Target className="w-5 h-5" />, roles: ['student'] },
    { path: '/achievements', label: t('layout.achievements'), icon: <Trophy className="w-5 h-5" />, roles: ['student'] },
  ];

  const visibleNavItems = navItems.filter(item => !profile?.role || item.roles.includes(profile.role));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800 justify-between lg:justify-start">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-2xl tracking-tight text-teal-900 dark:text-teal-100">Learnix</span>
            </Link>
            <button className="lg:hidden text-gray-500" onClick={() => setSidebarOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <div className="mb-6 px-2">
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">{t('layout.learning')}</p>
              {visibleNavItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3.5 rounded-2xl font-black transition-all ${
                      isActive 
                        ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 shadow-sm border border-teal-100 dark:border-teal-800' 
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200 border border-transparent'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3 px-3 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
              <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-700 dark:text-teal-300 font-bold uppercase">
                {(profile?.codeName || profile?.realName || 'U').charAt(0)}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-bold truncate">{profile?.codeName || profile?.realName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{profile?.role}</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="mt-4 w-full flex items-center justify-center space-x-2 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>{t('layout.logout')}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <button 
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex justify-end items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Toggle Language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-bold uppercase">{language}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
