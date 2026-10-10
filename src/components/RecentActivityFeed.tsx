import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  History, CheckCircle2, Trophy, Target, Flame, Sparkles, 
  ArrowRight, Award, Clock, Star, MessageSquare, ChevronDown, 
  ChevronUp, ExternalLink, Zap, RefreshCw, BookOpen
} from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { BADGES } from '../data/badges';
import confetti from 'canvas-confetti';

export type ActivityType = 'quiz' | 'badge' | 'study_goal' | 'streak_milestone';

export interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  subtitle?: string;
  timestamp: Date;
  score?: number;
  xpEarned?: number;
  badgeIcon?: string;
  badgeColor?: string;
  teacherComment?: string;
  quizId?: string;
  meta?: Record<string, any>;
}

interface RecentActivityFeedProps {
  submissions: any[];
  className?: string;
}

export function RecentActivityFeed({ submissions, className = '' }: RecentActivityFeedProps) {
  const { user, profile } = useAuth();
  const { t, language } = useLanguage();
  const isVi = language === 'vi';

  const [filter, setFilter] = useState<'all' | 'quiz' | 'goal'>('all');
  const [completedStudySlots, setCompletedStudySlots] = useState<any[]>([]);
  const [loadingGoals, setLoadingGoals] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Fetch completed study goals from studyPlans/{user.uid}
  useEffect(() => {
    if (!user) return;
    const fetchStudyGoals = async () => {
      setLoadingGoals(true);
      try {
        const planDoc = await getDoc(doc(db, 'studyPlans', user.uid));
        if (planDoc.exists()) {
          const planData = planDoc.data();
          const slots: any[] = [];
          if (Array.isArray(planData.schedule)) {
            planData.schedule.forEach((day: any) => {
              if (Array.isArray(day.slots)) {
                day.slots.forEach((s: any) => {
                  if (s.completed) {
                    slots.push({
                      ...s,
                      dateStr: day.date,
                    });
                  }
                });
              }
            });
          }
          setCompletedStudySlots(slots);
        }
      } catch (err) {
        console.warn('Could not load completed study goals:', err);
      } finally {
        setLoadingGoals(false);
      }
    };

    fetchStudyGoals();
  }, [user]);

  // Combine submissions and goals into a chronological feed
  const activities = useMemo(() => {
    const list: ActivityItem[] = [];

    // 1. Quizzes
    submissions.forEach((sub) => {
      let d = new Date();
      if (sub.completedAt?.toMillis) {
        d = new Date(sub.completedAt.toMillis());
      } else if (sub.completedAt?.toDate) {
        d = sub.completedAt.toDate();
      } else if (typeof sub.completedAt === 'string') {
        d = new Date(sub.completedAt);
      } else if (sub.createdAt?.toMillis) {
        d = new Date(sub.createdAt.toMillis());
      }

      // Calculate XP estimate if not explicitly present: 100 XP for 100%, 75 XP for >=80%, 50 XP base
      const earnedXp = sub.score === 100 ? 100 : sub.score >= 80 ? 75 : 50;

      list.push({
        id: `sub_${sub.id || Math.random()}`,
        type: 'quiz',
        title: sub.quizTitle || (isVi ? 'Bài kiểm tra trắc nghiệm' : 'Quiz Assessment'),
        subtitle: sub.teacherComment ? `Feedback: "${sub.teacherComment}"` : undefined,
        timestamp: d,
        score: sub.score,
        xpEarned: earnedXp,
        teacherComment: sub.teacherComment,
        quizId: sub.quizId,
      });
    });

    // 2. Unlocked Badges & Goals
    const earnedBadgeIds = profile?.earnedBadges || [];
    earnedBadgeIds.forEach((bId, idx) => {
      const bObj = BADGES.find((b) => b.id === bId);
      if (bObj) {
        // Approximate chronological spacing based on user activity or sub dates
        const approximateDate = new Date(Date.now() - (earnedBadgeIds.length - idx) * 3600 * 1000 * 24);
        list.push({
          id: `badge_${bId}`,
          type: 'badge',
          title: isVi ? (bObj.nameVi || bObj.name) : bObj.name,
          subtitle: isVi ? (bObj.descriptionVi || bObj.description) : bObj.description,
          timestamp: approximateDate,
          badgeIcon: bObj.icon,
          badgeColor: bObj.color,
          xpEarned: 150,
        });
      }
    });

    // 3. Completed Study Slots / Goals
    completedStudySlots.forEach((slot) => {
      const slotDate = slot.dateStr ? new Date(`${slot.dateStr}T12:00:00`) : new Date();
      const activityLabel = isVi
        ? (slot.activityType === 'quiz' ? 'Luyện đề trắc nghiệm' : slot.activityType === 'practice' ? 'Thực hành bài tập' : 'Ôn tập kiến thức')
        : (slot.activityType === 'quiz' ? 'Practice Quiz' : slot.activityType === 'practice' ? 'Problem Solving' : 'Concept Review');

      list.push({
        id: `slot_${slot.id || Math.random()}`,
        type: 'study_goal',
        title: slot.topic || (isVi ? 'Mục tiêu học tập hoàn thành' : 'Study Goal Completed'),
        subtitle: `${slot.className || (isVi ? 'Lịch ôn tập' : 'Study Plan')} • ${slot.durationMinutes || 30} ${isVi ? 'phút' : 'mins'} (${activityLabel})`,
        timestamp: slotDate,
        xpEarned: 50,
      });
    });

    // 4. Streak Milestone (if student has an active streak)
    const streakCount = profile?.streakCount || 0;
    if (streakCount >= 3) {
      list.push({
        id: `streak_milestone_${streakCount}`,
        type: 'streak_milestone',
        title: isVi ? `Đạt cột mốc chuỗi học tập ${streakCount} ngày liên tục! 🔥` : `Reached ${streakCount}-Day Learning Streak! 🔥`,
        subtitle: isVi ? 'Duy trì thói quen học tập đều đặn mỗi ngày.' : 'Consistent daily study habit unlocked.',
        timestamp: new Date(Date.now() - 3600 * 1000 * 12),
        xpEarned: streakCount * 25,
      });
    }

    // Sort descending chronologically
    return list.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }, [submissions, profile, completedStudySlots, isVi]);

  // Filtered list
  const filteredActivities = useMemo(() => {
    if (filter === 'all') return activities;
    if (filter === 'quiz') return activities.filter((a) => a.type === 'quiz');
    if (filter === 'goal') return activities.filter((a) => a.type !== 'quiz');
    return activities;
  }, [activities, filter]);

  const displayedActivities = filteredActivities.slice(0, visibleCount);
  const hasMore = filteredActivities.length > visibleCount;

  // Format relative time helper
  const formatTimeAgo = (d: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 1) return isVi ? 'Vừa xong' : 'Just now';
    if (diffMinutes < 60) return `${diffMinutes} ${isVi ? 'phút trước' : 'm ago'}`;
    if (diffHours < 24) return `${diffHours} ${isVi ? 'giờ trước' : 'h ago'}`;
    if (diffDays === 1) return isVi ? 'Hôm qua' : 'Yesterday';
    if (diffDays < 7) return `${diffDays} ${isVi ? 'ngày trước' : 'd ago'}`;
    return d.toLocaleDateString(isVi ? 'vi-VN' : 'en-US', { month: 'short', day: 'numeric' });
  };

  const triggerBadgeCelebration = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { x, y },
      colors: ['#0d9488', '#f59e0b', '#8b5cf6', '#10b981']
    });
  };

  return (
    <div className={`bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-[2.5rem] shadow-sm border-2 border-gray-100 dark:border-gray-700 space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-teal-50 dark:bg-teal-950/60 rounded-2xl text-teal-600 dark:text-teal-400">
            <History className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                {t('activity.title')}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300">
                {filteredActivities.length}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {t('activity.subtitle')}
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-900/80 p-1 rounded-2xl self-start sm:self-auto overflow-x-auto max-w-full">
          <button
            type="button"
            onClick={() => { setFilter('all'); setVisibleCount(6); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-white dark:bg-gray-800 text-teal-700 dark:text-teal-300 shadow-xs'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
            }`}
          >
            {t('activity.all')}
          </button>
          <button
            type="button"
            onClick={() => { setFilter('quiz'); setVisibleCount(6); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'quiz'
                ? 'bg-white dark:bg-gray-800 text-teal-700 dark:text-teal-300 shadow-xs'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
            }`}
          >
            {t('activity.quizzes')}
          </button>
          <button
            type="button"
            onClick={() => { setFilter('goal'); setVisibleCount(6); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'goal'
                ? 'bg-white dark:bg-gray-800 text-teal-700 dark:text-teal-300 shadow-xs'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
            }`}
          >
            {t('activity.goals')}
          </button>
        </div>
      </div>

      {/* Activity Timeline List */}
      {displayedActivities.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-3xl bg-gray-50/70 dark:bg-gray-900/40 border border-dashed border-gray-200 dark:border-gray-700 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/50 text-teal-600 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 max-w-md mx-auto">
            {t('activity.no_activity')}
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/practice"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
            >
              <span>{t('activity.start_quiz')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="relative pl-6 sm:pl-8 space-y-6 before:content-[''] before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:via-gray-200 dark:before:via-gray-700 before:to-gray-100 dark:before:to-gray-800">
          {displayedActivities.map((item) => {
            const isQuiz = item.type === 'quiz';
            const isBadge = item.type === 'badge';
            const isGoal = item.type === 'study_goal';
            const isStreak = item.type === 'streak_milestone';

            const scoreColor = (item.score || 0) === 100
              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300'
              : (item.score || 0) >= 80
              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300'
              : 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border-teal-300';

            return (
              <div 
                key={item.id} 
                className="relative group transition-all"
              >
                {/* Timeline Node Icon */}
                <div className={`absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center -translate-x-1/2 shadow-xs transition-transform group-hover:scale-110 ${
                  isQuiz
                    ? 'bg-white dark:bg-gray-800 border-teal-500 text-teal-600'
                    : isBadge
                    ? 'bg-amber-500 border-amber-300 text-white shadow-amber-500/20'
                    : isStreak
                    ? 'bg-orange-500 border-orange-300 text-white shadow-orange-500/20'
                    : 'bg-purple-600 border-purple-300 text-white shadow-purple-500/20'
                }`}>
                  {isQuiz ? (
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : isBadge ? (
                    <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : isStreak ? (
                    <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>

                {/* Activity Card */}
                <div className="bg-gray-50/70 dark:bg-gray-900/40 hover:bg-gray-50 dark:hover:bg-gray-900 p-4 sm:p-5 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all hover:border-teal-200 dark:hover:border-teal-900/60 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    {/* Activity Info */}
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                          isQuiz 
                            ? 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' 
                            : isBadge 
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' 
                            : isStreak 
                            ? 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300'
                            : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                        }`}>
                          {isQuiz 
                            ? (isVi ? 'Hoàn thành bài tập' : 'Quiz Completed') 
                            : isBadge 
                            ? (isVi ? 'Mở khóa huy hiệu' : 'Badge Unlocked') 
                            : isStreak 
                            ? (isVi ? 'Cột mốc chuỗi' : 'Streak Milestone')
                            : (isVi ? 'Mục tiêu ôn tập' : 'Study Target')}
                        </span>

                        <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{formatTimeAgo(item.timestamp)}</span>
                        </span>

                        {item.xpEarned && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                            <Zap className="w-3 h-3" />
                            <span>+{item.xpEarned} XP</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {isBadge && item.badgeIcon && (
                          <span 
                            onClick={triggerBadgeCelebration}
                            className="text-xl cursor-pointer hover:scale-125 transition-transform"
                            title="Click to celebrate!"
                          >
                            {item.badgeIcon}
                          </span>
                        )}
                        <h4 className="text-base font-black text-gray-900 dark:text-white tracking-tight">
                          {item.title}
                        </h4>
                      </div>

                      {item.subtitle && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {item.subtitle}
                        </p>
                      )}

                      {/* Teacher qualitative feedback callout if present */}
                      {item.teacherComment && (
                        <div className="mt-2 p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-900/60 text-xs text-teal-900 dark:text-teal-200 flex items-start gap-2">
                          <MessageSquare className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-[10px] uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
                              {isVi ? 'Nhận xét từ giáo viên:' : 'Teacher Feedback:'}
                            </span>
                            <span className="italic">"{item.teacherComment}"</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Score / Action Badge */}
                    <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                      {isQuiz && item.score !== undefined && (
                        <div className={`px-3 py-1.5 rounded-xl border text-sm font-black flex items-center gap-1.5 shadow-2xs ${scoreColor}`}>
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{item.score}/100</span>
                        </div>
                      )}

                      {isQuiz && item.quizId && (
                        <Link
                          to={`/quiz/${item.quizId}`}
                          className="px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center gap-1 shadow-2xs transition-colors"
                        >
                          <span>{t('activity.retake')}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}

                      {isGoal && (
                        <Link
                          to="/planner"
                          className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 hover:bg-purple-100 border border-purple-200 dark:border-purple-800 font-bold text-xs flex items-center gap-1 transition-colors"
                        >
                          <span>{t('activity.view_plan')}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}

                      {isBadge && (
                        <button
                          type="button"
                          onClick={triggerBadgeCelebration}
                          className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 hover:bg-amber-100 border border-amber-200 dark:border-amber-800 font-bold text-xs flex items-center gap-1 transition-colors"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{isVi ? 'Ăn mừng' : 'Celebrate'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Show more / Show less toggle */}
      {filteredActivities.length > 6 && (
        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => (hasMore ? prev + 6 : 6))}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span>
              {hasMore
                ? (isVi ? `Xem thêm hoạt động (${filteredActivities.length - visibleCount})` : `Show more activities (${filteredActivities.length - visibleCount})`)
                : (isVi ? 'Thu gọn' : 'Show less')}
            </span>
            {hasMore ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
export default RecentActivityFeed;
