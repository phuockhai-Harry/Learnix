import React, { useState, useMemo } from 'react';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';
import { useNavigate } from 'react-router-dom';
import { getLessons } from '../data/lessons';
import { 
  Flame, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Plus, 
  ArrowRight, 
  Calendar as CalendarIcon,
  SunMedium
} from 'lucide-react';

interface PracticeCalendarProps {
  submissions: any[];
  streak: number;
  quizzes?: any[];
}

interface DayPracticeItem {
  id: string;
  title: string;
  score: number;
  timeStr: string;
  dateStr: string;
  subjectEmoji: string;
  colorSchemeIndex: number;
}

const PASTEL_THEMES = [
  {
    card: 'bg-purple-100/80 hover:bg-purple-100 text-purple-950 border-l-4 border-purple-400 dark:bg-purple-950/40 dark:text-purple-200 dark:border-purple-400',
    badge: 'bg-purple-200/80 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300',
    avatar: 'bg-purple-300 text-purple-900 dark:bg-purple-800 dark:text-purple-200',
  },
  {
    card: 'bg-sky-100/80 hover:bg-sky-100 text-sky-950 border-l-4 border-sky-400 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-400',
    badge: 'bg-sky-200/80 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300',
    avatar: 'bg-sky-300 text-sky-900 dark:bg-sky-800 dark:text-sky-200',
  },
  {
    card: 'bg-emerald-100/80 hover:bg-emerald-100 text-emerald-950 border-l-4 border-emerald-400 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-400',
    badge: 'bg-emerald-200/80 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300',
    avatar: 'bg-emerald-300 text-emerald-900 dark:bg-emerald-800 dark:text-emerald-200',
  },
  {
    card: 'bg-rose-100/80 hover:bg-rose-100 text-rose-950 border-l-4 border-rose-400 dark:bg-rose-950/40 dark:text-rose-200 dark:border-rose-400',
    badge: 'bg-rose-200/80 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300',
    avatar: 'bg-rose-300 text-rose-900 dark:bg-rose-800 dark:text-rose-200',
  },
  {
    card: 'bg-amber-100/80 hover:bg-amber-100 text-amber-950 border-l-4 border-amber-400 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-400',
    badge: 'bg-amber-200/80 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300',
    avatar: 'bg-amber-300 text-amber-900 dark:bg-amber-800 dark:text-amber-200',
  },
];

const EMOJIS = ['📐', '💡', '🧪', '✍️', '⚡', '🧠', '📚', '🎯', '🚀', '🎨'];

export default function PracticeCalendar({ submissions, streak, quizzes = [] }: PracticeCalendarProps) {
  const { t, language } = useLanguage();
  const { profile } = useAuth();
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const localizedLessons = useMemo(() => getLessons(language), [language]);

  // Group submissions by date string YYYY-MM-DD
  const submissionsByDate = useMemo(() => {
    const map: Record<string, DayPracticeItem[]> = {};

    submissions.forEach((sub, index) => {
      let d: Date | null = null;
      if (sub.completedAt?.toDate) {
        d = sub.completedAt.toDate();
      } else if (sub.completedAt instanceof Date) {
        d = sub.completedAt;
      } else if (sub.completedAt?.seconds) {
        d = new Date(sub.completedAt.seconds * 1000);
      } else if (typeof sub.completedAt === 'string') {
        d = new Date(sub.completedAt);
      }

      if (!d || isNaN(d.getTime())) {
        d = new Date(); // fallback
      }

      const dateStr = d.toLocaleDateString('en-CA');
      const timeStr = d.toLocaleTimeString(language === 'vi' ? 'vi-VN' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      // Find quiz title
      let title = sub.quizTitle;
      if (!title) {
        if (localizedLessons[sub.quizId as keyof typeof localizedLessons]) {
          title = localizedLessons[sub.quizId as keyof typeof localizedLessons].title;
        } else {
          const foundQuiz = quizzes.find(q => q.id === sub.quizId);
          title = foundQuiz ? foundQuiz.title : (language === 'vi' ? 'Bài tập tổng hợp' : 'General Quiz');
        }
      }

      const emoji = EMOJIS[Math.abs((sub.quizId?.length || index) * 7) % EMOJIS.length];
      const colorSchemeIndex = (map[dateStr]?.length || index) % PASTEL_THEMES.length;

      if (!map[dateStr]) {
        map[dateStr] = [];
      }

      map[dateStr].push({
        id: sub.id || `${dateStr}-${index}`,
        title,
        score: sub.score ?? 100,
        timeStr,
        dateStr,
        subjectEmoji: emoji,
        colorSchemeIndex,
      });
    });

    return map;
  }, [submissions, language, localizedLessons, quizzes]);

  const todayStr = useMemo(() => new Date().toLocaleDateString('en-CA'), []);

  // Compute week start (Monday) and 7 days for current selectedDate
  const currentWeekDays = useMemo(() => {
    const curr = new Date(selectedDate);
    const dayOfWeek = curr.getDay(); // 0 is Sunday, 1 is Monday...
    // Start on Monday (1)
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(curr);
    monday.setDate(curr.getDate() + diffToMonday);

    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const dateStr = d.toLocaleDateString('en-CA');
      const items = submissionsByDate[dateStr] || [];
      const isToday = dateStr === todayStr;
      const isPast = dateStr < todayStr;
      const isFuture = dateStr > todayStr;
      const hasStreak = items.length > 0;

      days.push({
        date: d,
        dateStr,
        dayNum: d.getDate(),
        weekday: d.toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US', { weekday: 'short' }),
        items,
        isToday,
        isPast,
        isFuture,
        hasStreak,
      });
    }
    return days;
  }, [selectedDate, submissionsByDate, todayStr, language]);

  // Compute month days for current selectedDate
  const currentMonthDays = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Days from previous month to align with Monday start
    const startDayOfWeek = firstDay.getDay();
    const leadingDaysCount = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    const days = [];
    for (let i = leadingDaysCount; i > 0; i--) {
      const d = new Date(year, month, 1 - i);
      const dateStr = d.toLocaleDateString('en-CA');
      days.push({
        date: d,
        dateStr,
        dayNum: d.getDate(),
        isCurrentMonth: false,
        items: submissionsByDate[dateStr] || [],
        isToday: dateStr === todayStr,
        hasStreak: (submissionsByDate[dateStr]?.length || 0) > 0,
      });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const d = new Date(year, month, i);
      const dateStr = d.toLocaleDateString('en-CA');
      days.push({
        date: d,
        dateStr,
        dayNum: i,
        isCurrentMonth: true,
        items: submissionsByDate[dateStr] || [],
        isToday: dateStr === todayStr,
        hasStreak: (submissionsByDate[dateStr]?.length || 0) > 0,
      });
    }

    // Trailing days to fill 5 or 6 weeks (multiples of 7)
    const totalCells = Math.ceil(days.length / 7) * 7;
    const trailingCount = totalCells - days.length;
    for (let i = 1; i <= trailingCount; i++) {
      const d = new Date(year, month + 1, i);
      const dateStr = d.toLocaleDateString('en-CA');
      days.push({
        date: d,
        dateStr,
        dayNum: d.getDate(),
        isCurrentMonth: false,
        items: submissionsByDate[dateStr] || [],
        isToday: dateStr === todayStr,
        hasStreak: (submissionsByDate[dateStr]?.length || 0) > 0,
      });
    }

    return days;
  }, [selectedDate, submissionsByDate, todayStr]);

  // Navigate functions
  const handlePrev = () => {
    setSelectedDate(prev => {
      const next = new Date(prev);
      if (viewMode === 'week') {
        next.setDate(next.getDate() - 7);
      } else {
        next.setMonth(next.getMonth() - 1);
      }
      return next;
    });
  };

  const handleNext = () => {
    setSelectedDate(prev => {
      const next = new Date(prev);
      if (viewMode === 'week') {
        next.setDate(next.getDate() + 7);
      } else {
        next.setMonth(next.getMonth() + 1);
      }
      return next;
    });
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  // Date range title
  const dateRangeLabel = useMemo(() => {
    if (viewMode === 'week') {
      const start = currentWeekDays[0].date;
      const end = currentWeekDays[6].date;
      const startMonth = start.toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US', { month: 'short' });
      const endMonth = end.toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US', { month: 'short' });
      const year = end.getFullYear();

      if (startMonth === endMonth) {
        return `${startMonth} ${start.getDate()} - ${end.getDate()}, ${year}`;
      }
      return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${year}`;
    } else {
      return selectedDate.toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US', {
        month: 'long',
        year: 'numeric'
      });
    }
  }, [viewMode, currentWeekDays, selectedDate, language]);

  // Quick stats
  const totalPracticedDays = Object.keys(submissionsByDate).length;
  const userInitials = (profile?.codeName || profile?.realName || 'S').slice(0, 2).toUpperCase();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-4 sm:p-7 shadow-xl border-4 border-gray-100 dark:border-gray-800 transition-all">
      {/* Smart Hub Header (Skylight inspired) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-gray-100 dark:border-gray-800 gap-4">
        {/* Left: Hub Title & Current Time */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 dark:bg-teal-400/10 border-2 border-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shadow-inner">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>{t('calendar.title')}</span>
              </h2>
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500 flex items-center gap-2 mt-0.5">
                <span className="flex items-center gap-1 text-teal-600 dark:text-teal-400">
                  <SunMedium className="w-3.5 h-3.5" />
                  {new Date().toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <span>•</span>
                <span>{language === 'vi' ? 'Bảng thông minh Learnix Hub' : 'Learnix Smart Display'}</span>
              </p>
            </div>
          </div>

          {/* Student Profile Pill with Active Streak */}
          <div className="flex items-center space-x-2.5 px-3.5 py-1.5 bg-gray-50 dark:bg-gray-800/80 rounded-full border border-gray-200 dark:border-gray-700">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 text-white flex items-center justify-center text-xs font-black shadow-sm">
              {userInitials}
            </div>
            <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
              {profile?.codeName || profile?.realName || 'Student'}
            </span>
            <div className="flex items-center gap-1 text-xs font-black px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              <span>{streak} {language === 'vi' ? 'ngày' : 'days'}</span>
            </div>
          </div>
        </div>

        {/* Right: View Toggles & Period Navigation */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Month / Week Switcher Pill (matching the image) */}
          <div className="flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200/80 dark:border-gray-700">
            <button
              onClick={() => setViewMode('week')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                viewMode === 'week'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t('calendar.week')}
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                viewMode === 'month'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t('calendar.month')}
            </button>
          </div>

          {/* Period Arrows Navigation */}
          <div className="flex items-center space-x-1.5 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-2xl border border-gray-200 dark:border-gray-700">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs sm:text-sm font-black text-gray-800 dark:text-gray-200 px-2 select-none min-w-[140px] text-center">
              {dateRangeLabel}
            </span>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              title="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick "Today" jump button */}
          <button
            onClick={handleToday}
            className="px-3.5 py-1.5 bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-black rounded-xl transition-all active:scale-95 shadow-sm"
          >
            {t('calendar.today')}
          </button>
        </div>
      </div>

      {/* WEEK VIEW (Direct inspiration from Skylight horizontal calendar in image.png) */}
      {viewMode === 'week' && (
        <div className="overflow-x-auto pb-2 -mx-2 px-2">
          <div className="grid grid-cols-7 gap-3 sm:gap-4 min-w-[760px]">
            {currentWeekDays.map((day) => {
              const theme = PASTEL_THEMES[day.dayNum % PASTEL_THEMES.length];
              return (
                <div
                  key={day.dateStr}
                  className={`flex flex-col rounded-3xl p-3 sm:p-3.5 transition-all min-h-[380px] border-2 ${
                    day.isToday
                      ? 'bg-blue-50/40 dark:bg-blue-950/20 border-blue-400 dark:border-blue-600 shadow-sm ring-2 ring-blue-400/30'
                      : day.hasStreak
                      ? 'bg-orange-50/20 dark:bg-orange-950/10 border-orange-200/80 dark:border-orange-900/40'
                      : 'bg-gray-50/60 dark:bg-gray-800/40 border-gray-100 dark:border-gray-800'
                  }`}
                >
                  {/* Column Day Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/60 dark:border-gray-700/60">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {day.weekday}
                      </span>
                      {/* Date Badge Pill */}
                      <span
                        className={`w-7 h-7 rounded-full text-xs font-black flex items-center justify-center transition-all ${
                          day.isToday
                            ? 'bg-blue-600 text-white shadow-md'
                            : day.hasStreak
                            ? 'bg-orange-500 text-white shadow-sm'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {day.dayNum}
                      </span>
                    </div>

                    {/* Streak flame indicator on day header */}
                    {day.hasStreak && (
                      <div
                        className="flex items-center gap-0.5 text-[11px] font-black text-orange-600 dark:text-orange-400 bg-orange-100/90 dark:bg-orange-950/80 px-2 py-0.5 rounded-full border border-orange-200 dark:border-orange-800 shadow-xs"
                        title={t('calendar.streak_kept')}
                      >
                        <Flame className="w-3 h-3 fill-orange-500 text-orange-500 animate-pulse" />
                        <span className="hidden sm:inline text-[10px] uppercase tracking-wider">
                          {language === 'vi' ? 'Chuỗi' : 'Kept'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Activity Subtitle / Counter */}
                  <div className="mb-3 px-1 flex items-center justify-between text-[11px] font-bold text-gray-400 dark:text-gray-500">
                    <span>
                      {day.items.length > 0
                        ? `${day.items.length} ${day.items.length === 1 ? t('calendar.quiz_done') : t('calendar.quizzes_done')}`
                        : (day.isPast ? t('calendar.rest_day') : (day.isToday ? t('calendar.today') : ''))}
                    </span>
                    {day.hasStreak && (
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                      </span>
                    )}
                  </div>

                  {/* Day Practice Cards Stack */}
                  <div className="flex-1 space-y-2.5">
                    {day.items.map((item) => {
                      const itemTheme = PASTEL_THEMES[item.colorSchemeIndex % PASTEL_THEMES.length];
                      return (
                        <div
                          key={item.id}
                          className={`p-3 rounded-2xl transition-all shadow-xs border relative overflow-hidden group ${itemTheme.card}`}
                        >
                          <div className="flex items-start justify-between gap-1.5 mb-1.5">
                            <span className="text-xs font-black line-clamp-2 leading-tight">
                              <span className="mr-1">{item.subjectEmoji}</span>
                              {item.title}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[11px] mt-2 pt-1 border-t border-black/5 dark:border-white/5">
                            <span className="flex items-center gap-1 font-semibold opacity-75">
                              <Clock className="w-3 h-3" />
                              {item.timeStr}
                            </span>
                            <span className={`px-2 py-0.5 rounded-md font-black text-[10px] ${itemTheme.badge}`}>
                              {item.score} {t('calendar.score')}
                            </span>
                          </div>

                          {/* Mini Avatar in bottom corner (matching the reference photo) */}
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-black/10 dark:bg-white/20 flex items-center justify-center text-[9px] font-black">
                            {userInitials.charAt(0)}
                          </div>
                        </div>
                      );
                    })}

                    {/* Today CTA if not practiced yet */}
                    {day.isToday && day.items.length === 0 && (
                      <div
                        onClick={() => navigate('/explore')}
                        className="p-3.5 rounded-2xl border-2 border-dashed border-orange-300 dark:border-orange-700/80 bg-orange-50/50 dark:bg-orange-950/20 hover:bg-orange-100/60 dark:hover:bg-orange-900/30 transition-all cursor-pointer text-center group flex flex-col items-center justify-center min-h-[140px]"
                      >
                        <div className="w-9 h-9 rounded-full bg-orange-100 dark:bg-orange-900/60 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Plus className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-black text-orange-900 dark:text-orange-200 mb-1">
                          {t('calendar.practice_today')}
                        </p>
                        <span className="text-[10px] font-bold text-orange-700 dark:text-orange-300 bg-orange-200/60 dark:bg-orange-900/60 px-2 py-0.5 rounded-full mt-1">
                          {t('calendar.start_quiz')} →
                        </span>
                      </div>
                    )}

                    {/* Past day empty rest state */}
                    {day.isPast && day.items.length === 0 && (
                      <div className="py-8 text-center text-gray-300 dark:text-gray-600 flex flex-col items-center justify-center">
                        <span className="text-lg opacity-40">💤</span>
                        <span className="text-[10px] font-semibold mt-1 opacity-60">
                          {t('calendar.rest_day')}
                        </span>
                      </div>
                    )}

                    {/* Future day placeholder */}
                    {day.isFuture && (
                      <div className="py-8 text-center text-gray-300 dark:text-gray-700 flex flex-col items-center justify-center">
                        <span className="text-xs font-medium opacity-40">•••</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MONTH VIEW */}
      {viewMode === 'month' && (
        <div className="space-y-2">
          {/* Day of week headers */}
          <div className="grid grid-cols-7 gap-2 text-center pb-2 border-b border-gray-100 dark:border-gray-800">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((dw, i) => (
              <span key={i} className="text-xs font-black uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {language === 'vi' 
                  ? ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'][i]
                  : dw}
              </span>
            ))}
          </div>

          {/* Month grid cells */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3">
            {currentMonthDays.map((cell, idx) => (
              <div
                key={`${cell.dateStr}-${idx}`}
                className={`min-h-[85px] sm:min-h-[105px] p-2 rounded-2xl border transition-all flex flex-col justify-between ${
                  cell.isToday
                    ? 'border-blue-500 bg-blue-50/40 dark:bg-blue-950/20 ring-2 ring-blue-400/40'
                    : cell.hasStreak
                    ? 'border-orange-300 dark:border-orange-800/80 bg-orange-50/30 dark:bg-orange-950/20'
                    : cell.isCurrentMonth
                    ? 'border-gray-100 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-800/30'
                    : 'border-transparent bg-transparent opacity-30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center ${
                      cell.isToday
                        ? 'bg-blue-600 text-white'
                        : cell.hasStreak
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {cell.dayNum}
                  </span>

                  {cell.hasStreak && (
                    <span className="flex items-center text-orange-500" title={t('calendar.streak_kept')}>
                      <Flame className="w-3.5 h-3.5 fill-orange-500" />
                    </span>
                  )}
                </div>

                {/* Event chips in month view */}
                <div className="mt-1 space-y-1">
                  {cell.items.slice(0, 2).map((item, i) => {
                    const itemTheme = PASTEL_THEMES[item.colorSchemeIndex % PASTEL_THEMES.length];
                    return (
                      <div
                        key={item.id}
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded truncate border ${itemTheme.card}`}
                        title={`${item.title} (${item.score} pts)`}
                      >
                        {item.subjectEmoji} {item.title}
                      </div>
                    );
                  })}
                  {cell.items.length > 2 && (
                    <span className="text-[9px] font-black text-gray-500 dark:text-gray-400 px-1">
                      +{cell.items.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Calendar Bottom Summary & Legend */}
      <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              {t('calendar.streak_kept')}
            </span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              {t('calendar.today')}
            </span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-md bg-purple-200 border border-purple-300"></div>
            <span>{language === 'vi' ? 'Bài tập đã hoàn thành' : 'Completed Quizzes'}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 font-bold">
          <span>
            {t('calendar.total_days')}:{' '}
            <strong className="text-gray-900 dark:text-white">{totalPracticedDays}</strong>
          </span>
          <span>
            {t('calendar.streak_days')}:{' '}
            <strong className="text-orange-600 dark:text-orange-400">{streak}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
