import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';
import { db } from '../firebase';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { Flame, Zap, CheckCircle, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { calculateStreak } from '../lib/streak';
import PracticeCalendar from '../components/PracticeCalendar';

export default function Practice() {
  const { t, language } = useLanguage();
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const [submissions, setSubmissions] = useState<any[]>([]);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const qSubs = query(
          collection(db, 'submissions'),
          where('studentId', '==', user.uid)
        );
        const subSnap = await getDocs(qSubs);
        const subs = subSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (isMounted) {
          setSubmissions(subs);
        }

        try {
          const quizSnap = await getDocs(query(collection(db, 'quizzes'), where('isPublic', '==', true)));
          const qData = quizSnap.docs.map(d => ({ id: d.id, ...d.data() }));
          if (isMounted) {
            setQuizzes(qData);
          }
        } catch (quizErr) {
          console.warn('Non-fatal: could not fetch public quiz metadata:', quizErr);
        }
      } catch (err) {
        console.error('Error fetching submissions for streak calculation:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [user]);

  // Calculate accurate streak and daily activity
  const { streak, isCompletedToday, activityByDate } = calculateStreak(profile, submissions);

  // Sync back to user profile if outdated in Firestore
  useEffect(() => {
    if (user && profile && !loading) {
      if (profile.streakCount !== streak) {
        const userRef = doc(db, 'users', user.uid);
        updateDoc(userRef, { streakCount: streak }).catch(e => {
          console.error("Auto-sync streak error:", e);
        });
      }
    }
  }, [user, profile, streak, loading]);

  // Calculate remaining time today for daily quests
  const getRemainingTimeToday = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    const diffMs = Math.max(0, endOfDay.getTime() - now.getTime());
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m ${language === 'vi' ? 'còn lại' : 'left'}`;
  };

  // Compute challenge completion based on today's submissions
  const todayStr = new Date().toLocaleDateString('en-CA');
  const todaySubmissions = submissions.filter(sub => {
    let sDate = '';
    if (sub.completedAt?.toDate) {
      sDate = sub.completedAt.toDate().toLocaleDateString('en-CA');
    } else if (sub.completedAt?.seconds) {
      sDate = new Date(sub.completedAt.seconds * 1000).toLocaleDateString('en-CA');
    }
    return sDate === todayStr;
  });

  const dailyChallenges = [
    { 
      id: 1, 
      title: t('practice.challenge1'), 
      xp: 50, 
      completed: todaySubmissions.length >= 1 
    },
    { 
      id: 2, 
      title: t('practice.challenge2'), 
      xp: 100, 
      completed: todaySubmissions.some(s => s.score >= 100) 
    },
    { 
      id: 3, 
      title: t('practice.challenge3'), 
      xp: 150, 
      completed: todaySubmissions.length >= 2 || (profile?.earnedBadges && profile.earnedBadges.length > 0) 
    },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Streak Card */}
        <div className="bg-gradient-to-br from-orange-400 to-red-500 p-8 rounded-[2rem] shadow-lg border-b-[6px] border-red-700 text-white md:col-span-1 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-4 shadow-inner">
              <Flame className={`w-12 h-12 text-yellow-300 drop-shadow-sm ${streak > 0 ? 'animate-pulse' : 'opacity-80'}`} />
            </div>
            <h2 className="text-6xl font-black mb-1 drop-shadow-sm tracking-tight">
              {loading ? '...' : streak}
            </h2>
            <p className="font-black text-xl text-orange-50 uppercase tracking-widest">{t('practice.streak')}</p>
            <p className="text-orange-100 mt-4 font-medium px-4 leading-snug text-sm">
              {streak === 0
                ? t('practice.streak_start')
                : (isCompletedToday ? t('practice.streak_subtitle') : t('practice.streak_keep'))}
            </p>

            {streak === 0 && (
              <button
                onClick={() => navigate('/explore')}
                className="mt-5 px-5 py-2.5 bg-white text-orange-600 font-black rounded-xl text-sm hover:bg-orange-50 transition-all shadow-md active:scale-95 flex items-center gap-1.5"
              >
                <span>{language === 'vi' ? 'Bắt đầu ngay' : 'Start Today'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
          {/* Decorative burst */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
        </div>
        
        {/* Daily Challenges */}
        <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-[2rem] shadow-sm border-2 border-gray-100 dark:border-gray-700 md:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">{t('practice.quests')}</h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">{t('practice.quests_subtitle')}</p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/30 border-2 border-teal-100 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-5 py-3 rounded-2xl font-black flex items-center space-x-2 shrink-0">
              <Clock className="w-5 h-5" />
              <span>{getRemainingTimeToday()}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {dailyChallenges.map(challenge => (
              <div key={challenge.id} className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-teal-400 dark:hover:border-teal-600 transition-colors gap-4">
                <div className="flex items-center space-x-5">
                  <div className={`shrink-0 p-3 rounded-xl border-2 transition-colors ${challenge.completed ? 'bg-green-100 border-green-200 text-green-600' : 'bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600 text-gray-400 group-hover:bg-teal-50 group-hover:border-teal-200'}`}>
                    <CheckCircle className={`w-7 h-7 ${challenge.completed ? '' : 'opacity-50'}`} />
                  </div>
                  <div>
                    <h3 className={`font-black text-lg ${challenge.completed ? 'text-gray-400 line-through dark:text-gray-500' : 'text-gray-900 dark:text-gray-100'}`}>
                      {challenge.title}
                    </h3>
                    <p className={`text-sm font-black flex items-center space-x-1 mt-1 ${challenge.completed ? 'text-gray-400' : 'text-teal-600 dark:text-teal-400'}`}>
                      <Zap className="w-4 h-4 fill-current" />
                      <span>{challenge.xp} XP</span>
                    </p>
                  </div>
                </div>
                {!challenge.completed && (
                  <button 
                    onClick={() => navigate('/explore')}
                    className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all border-b-4 border-black dark:border-gray-300 active:border-b-0 active:translate-y-1 w-full sm:w-auto shrink-0 flex items-center justify-center gap-1"
                  >
                    <span>{t('practice.go')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Curriculum 2 Semesters & Modes Spotlight */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-indigo-950 p-6 sm:p-8 rounded-[2rem] text-white shadow-lg border-2 border-teal-700/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/10 backdrop-blur-md text-teal-200 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{language === 'vi' ? '2 Học kỳ Tiêu chuẩn & Chế độ Ôn thi' : '2 Standard Semesters & Exam Modes'}</span>
          </div>
          <h3 className="text-2xl font-black text-white">
            {language === 'vi' ? 'Luyện tập Theo Học kỳ & Đọc Tài liệu PDF' : 'Practice by Semester & Read Study PDFs'}
          </h3>
          <p className="text-teal-100/90 text-sm max-w-xl font-medium leading-relaxed">
            {language === 'vi'
              ? 'Lựa chọn giữa Chế độ Ôn tập (xem lời giải tức thì) hoặc Chế độ Kiểm tra (bấm giờ thi thử) cho toàn bộ 12 khối lớp và 2 học kỳ.'
              : 'Choose between Review Mode (instant explanations & hints) or Test Mode (timed exam simulation) across all 12 grades and 2 semesters.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={() => navigate('/explore')}
            className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-gray-900 font-black text-xs transition-all shadow-md flex items-center gap-2"
          >
            <span>{language === 'vi' ? 'Khám phá 2 Học kỳ' : 'Explore Semesters'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Smart Hub Practice History & Streak Calendar */}
      <PracticeCalendar 
        submissions={submissions} 
        streak={streak} 
        quizzes={quizzes} 
      />
    </div>
  );
}
