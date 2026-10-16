import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, orderBy, limit, doc, getDoc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { Link } from 'react-router-dom';
import { 
  PlayCircle, Trophy, BarChart3, Flame, Award, Users, 
  AlertCircle, MessageCircle, FileText, WifiOff, RefreshCw, 
  Bot, ArrowRight, Sparkles, BookOpen, Calendar, ChevronRight, Crown,
  Cloud, Target, CheckCircle2
} from 'lucide-react';
import { getLessons } from '../data/lessons';
import { HomeworkChat } from '../components/HomeworkChat';
import { calculateStreak } from '../lib/streak';
import { useToast } from '../context/ToastContext';
import { RecentActivityFeed } from '../components/RecentActivityFeed';
import { CURRICULUM_QUIZZES, getSubjectsForGrade } from '../data/curriculumData';


export default function StudentDashboard() {
  const { user, profile } = useAuth();
  const { t, language } = useLanguage();
  const { isOnline, pendingSyncCount, triggerManualSync } = useToast();
  const isVi = language === 'vi';

  const [mySubmissions, setMySubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [joinedClasses, setJoinedClasses] = useState<any[]>([]);
  const [joinCodeInput, setJoinCodeInput] = useState('');
  const [joining, setJoining] = useState(false);
  const [joinError, setJoinError] = useState('');
  const [homeworks, setHomeworks] = useState<any[]>([]);
  const [activeChatHomework, setActiveChatHomework] = useState<any | null>(null);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');
  const [syncPulse, setSyncPulse] = useState(false);

  const streakInfo = calculateStreak(profile, mySubmissions);
  const accurateStreak = streakInfo.streak;

  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted" && Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  }, []);

  const handleJoinClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !profile?.email || !joinCodeInput.trim()) return;
    setJoinError('');
    setJoining(true);

    try {
      const code = joinCodeInput.trim().toUpperCase();
      const q = query(collection(db, 'classes'), where('classCode', '==', code));
      const snap = await getDocs(q);

      if (snap.empty) {
        setJoinError(t('student.invalid_code'));
        return;
      }

      const classDoc = snap.docs[0];
      const classData = classDoc.data();

      if (classData.studentEmails && classData.studentEmails.includes(profile.email)) {
        setJoinCodeInput('');
        return;
      }

      await updateDoc(doc(db, 'classes', classDoc.id), {
        studentEmails: arrayUnion(profile.email)
      });

      setJoinedClasses(prev => [...prev, { id: classDoc.id, ...classData }]);
      setJoinCodeInput('');
    } catch (error) {
      console.error(error);
      setJoinError('Lỗi khi tham gia lớp học');
    } finally {
      setJoining(false);
    }
  };

  useEffect(() => {
    if (!user || !auth.currentUser) return;

    let isCancelled = false;
    let unsubSubmissions: () => void = () => {};
    let unsubLearningPath: () => void = () => {};

    const setupRealtimeSync = async () => {
      try {
        let currentClasses: any[] = [];
        if (profile?.email && auth.currentUser) {
          const classesQ = query(collection(db, 'classes'), where('studentEmails', 'array-contains', profile.email));
          const classesSnap = await getDocs(classesQ);
          if (isCancelled) return;
          currentClasses = classesSnap.docs.map(d => ({ id: d.id, ...d.data() }));
          setJoinedClasses(currentClasses);
        }

        if (isCancelled || !auth.currentUser) return;

        const quizzesQuery = query(collection(db, 'quizzes'), where('creatorId', '==', user.uid));
        const quizSnap = await getDocs(quizzesQuery);
        if (isCancelled || !auth.currentUser) return;
        const quizzesData = quizSnap.docs.map(d => ({ id: d.id, ...d.data() as any }));

        // Real-time synchronization for submissions across all devices
        const submissionsQuery = query(collection(db, 'submissions'), where('studentId', '==', user.uid));
        unsubSubmissions = onSnapshot(submissionsQuery, (subSnap) => {
          if (isCancelled) return;
          const subData = subSnap.docs.map(d => ({ id: d.id, ...d.data() as any }));
          
          let allHws: any[] = [];
          currentClasses.forEach(c => {
            if (c.homeworks) {
              allHws = [...allHws, ...c.homeworks.map((h: any) => ({ ...h, className: c.name }))];
            }
          });
          
          const todayDate = new Date();
          const todayStr = todayDate.toISOString().split('T')[0];
          const tomorrowDate = new Date();
          tomorrowDate.setDate(tomorrowDate.getDate() + 1);
          const tomorrowStr = tomorrowDate.toISOString().split('T')[0];

          for (let hw of allHws) {
            hw.completed = subData.some(sub => sub.quizId === hw.quizId && (!sub.completedAt || new Date(sub.completedAt.toMillis()).toISOString().split('T')[0] <= hw.dueDate));
            hw.overdue = !hw.completed && hw.dueDate < todayStr;
            hw.dueSoon = !hw.completed && !hw.overdue && (hw.dueDate === todayStr || hw.dueDate === tomorrowStr);
          }
          setHomeworks(allHws);
          
          const localizedLessons = getLessons(language);
          
          const chartedData = subData.map(sub => {
            let title = sub.quizTitle || '';
            if (localizedLessons[sub.quizId as keyof typeof localizedLessons]) {
              title = localizedLessons[sub.quizId as keyof typeof localizedLessons].title;
            } else {
              const quiz = quizzesData.find(q => q.id === sub.quizId) || CURRICULUM_QUIZZES.find(q => q.id === sub.quizId);
              if (quiz) title = isVi ? quiz.title : (quiz.titleEn || quiz.title);
            }
            if (!title || title.toLowerCase().includes('unknown')) {
              title = sub.subject ? `${sub.subject} - ${isVi ? 'Bài kiểm tra chuyên đề' : 'Curriculum Quiz'}` : (isVi ? 'Bài kiểm tra ôn tập chuẩn' : 'Standard Curriculum Quiz');
            }
            return {
              ...sub,
              quizTitle: title,
            };
          }).sort((a, b) => {
            const tA = a.completedAt?.toMillis ? a.completedAt.toMillis() : 0;
            const tB = b.completedAt?.toMillis ? b.completedAt.toMillis() : 0;
            return tB - tA;
          });
          setMySubmissions(chartedData);
          setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
          setSyncPulse(true);
          setTimeout(() => setSyncPulse(false), 2000);
          setLoading(false);
        }, (err) => {
          console.warn("Submissions real-time listener notice:", err);
          setLoading(false);
        });

        if (isCancelled || !auth.currentUser) {
          unsubSubmissions();
          return;
        }

        if (isCancelled || !auth.currentUser) {
          unsubSubmissions();
          return;
        }
      } catch (err) {
        console.error("Error setting up real-time student data sync:", err);
        if (!isCancelled) setLoading(false);
      }
    };

    setupRealtimeSync();

    return () => {
      isCancelled = true;
      unsubSubmissions();
    };
  }, [user, language, profile?.grade, isVi]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  const avgScore = mySubmissions.length > 0 
    ? Math.min(100, Math.max(0, Math.round(mySubmissions.reduce((acc, curr) => acc + (curr.percentage || (curr.score <= 100 ? curr.score : Math.round((curr.score / 150) * 100))), 0) / mySubmissions.length)))
    : 0;

  return (
    <div className="space-y-8 pb-12 max-w-7xl mx-auto">
      {/* Active Homework AI Chat Modal */}
      {activeChatHomework && (
        <HomeworkChat
          homework={activeChatHomework}
          gradeLevel={profile?.grade || 6}
          onClose={() => setActiveChatHomework(null)}
        />
      )}

      {/* Top Banner & Quick Shortcuts */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-6 sm:p-8 rounded-[2rem] shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>{isVi ? `Khối lớp ${profile?.grade || 6}` : `Grade ${profile?.grade || 6}`}</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">
            {t('student.welcome')} {profile?.codeName || profile?.realName || 'Student'}! 👋
          </h1>
          <p className="text-teal-100 text-sm font-medium">
            {isVi 
              ? 'Tiếp tục luyện tập các bài học tương tác và duy trì chuỗi học tập hàng ngày!' 
              : 'Keep completing interactive quizzes and growing your study streak!'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-amber-400 text-gray-900 px-5 py-3 rounded-2xl font-black shadow-md hover:bg-amber-300 transition-all hover:scale-105 active:scale-95 text-sm"
          >
            <BookOpen className="w-4 h-4 text-gray-900" />
            <span>{isVi ? 'Môn học & 2 Học kỳ' : 'Subjects & Semesters'}</span>
          </Link>
          <Link
            to="/practice"
            className="flex items-center gap-2 bg-white text-teal-800 px-5 py-3 rounded-2xl font-black shadow-md hover:bg-teal-50 transition-all hover:scale-105 active:scale-95 text-sm"
          >
            <PlayCircle className="w-4 h-4 text-teal-600" />
            <span>{isVi ? 'Luyện tập ngay' : 'Practice Now'}</span>
          </Link>
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-teal-700/80 hover:bg-teal-800 text-white px-5 py-3 rounded-2xl font-black shadow-md transition-all hover:scale-105 active:scale-95 text-sm border border-teal-400/40"
          >
            <BookOpen className="w-4 h-4" />
            <span>{isVi ? 'Vào Học tập' : 'Start Learning'}</span>
          </Link>
        </div>
      </div>

      {/* Offline Status Banner */}
      {!isOnline && (
        <div 
          id="student-offline-status-banner"
          className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border-2 border-amber-300 dark:border-amber-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <WifiOff className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-black text-amber-900 dark:text-amber-200">
                {isVi ? 'Bạn đang ở Chế độ Ngoại tuyến (Offline)' : 'You are working in Offline Mode'}
              </p>
              <p className="text-[11px] text-amber-800 dark:text-amber-300 mt-0.5">
                {isVi 
                  ? 'Mọi bài làm và điểm số được lưu an toàn trên máy và sẽ tự động đồng bộ khi có kết nối trở lại.'
                  : 'All your answers and XP are cached locally and will automatically sync once reconnected.'}
              </p>
            </div>
          </div>
          {pendingSyncCount > 0 && (
            <button
              onClick={triggerManualSync}
              className="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition-all shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isVi ? `Đồng bộ (${pendingSyncCount})` : `Sync (${pendingSyncCount})`}</span>
            </button>
          )}
        </div>
      )}



      {/* 3 Core Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-xs border border-gray-100 dark:border-gray-700 flex items-center space-x-3.5">
          <div className="p-3 bg-teal-50 dark:bg-teal-900/40 rounded-xl text-teal-600 shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-gray-400 truncate">{t('student.total_xp')}</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white truncate">{profile?.xp || 0}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-xs border border-gray-100 dark:border-gray-700 flex items-center space-x-3.5">
          <div className="p-3 bg-orange-50 dark:bg-orange-900/40 rounded-xl text-orange-600 shrink-0">
            <Flame className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-gray-400 truncate">{t('student.streak')}</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white truncate">{accurateStreak} {isVi ? 'ngày' : 'days'}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-xs border border-gray-100 dark:border-gray-700 flex items-center space-x-3.5">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/40 rounded-xl text-blue-600 shrink-0">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-gray-400 truncate">{isVi ? 'Điểm trung bình' : 'Avg Score'}</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white truncate">{avgScore}%</p>
          </div>
        </div>
      </div>

      {/* 2 Semesters & Subject Quick Jump Hub ("mỗi môn sẽ chuyển sang tab đúng với môn đó") */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border-2 border-gray-100 dark:border-gray-700/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-gray-700 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-teal-50 dark:bg-teal-950/60 rounded-xl text-teal-600 dark:text-teal-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-gray-900 dark:text-white">
                {isVi ? `Chương trình Khối lớp ${profile?.grade || 6}: 2 Học kỳ & Môn học` : `Grade ${profile?.grade || 6}: Semesters & Subjects`}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {isVi ? 'Nhấp vào từng môn để chuyển thẳng sang tab đề thi Giữa kỳ, Thường xuyên & tài liệu' : 'Click any subject to open its Midterm, Regular tests & study PDFs'}
              </p>
            </div>
          </div>
          <Link
            to="/explore"
            className="text-xs font-black text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 self-start sm:self-center"
          >
            <span>{isVi ? 'Xem tất cả môn' : 'View all'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {getSubjectsForGrade(profile?.grade || 6).map((sub) => {
            return (
              <Link
                key={sub.id}
                to={`/explore?subject=${sub.id}`}
                className="p-3 sm:p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 hover:bg-teal-50 dark:hover:bg-teal-950/40 border border-gray-200/80 dark:border-gray-700/60 hover:border-teal-400 dark:hover:border-teal-600 transition-all flex flex-col items-center text-center gap-2 group shadow-2xs hover:shadow-xs hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-2xs flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform shrink-0">
                  {sub.category === 'math' && <span className="text-lg">📐</span>}
                  {sub.category === 'literature' && <span className="text-lg">📖</span>}
                  {sub.category === 'science' && <span className="text-lg">🔬</span>}
                  {sub.category === 'english' && <span className="text-lg">🇬🇧</span>}
                  {sub.category === 'social' && sub.id.includes('civic') && <span className="text-lg">⚖️</span>}
                  {sub.category === 'social' && !sub.id.includes('civic') && <span className="text-lg">🌏</span>}
                  {sub.category === 'tech' && sub.id.includes('tech') && <span className="text-lg">🛠️</span>}
                  {sub.category === 'tech' && !sub.id.includes('tech') && <span className="text-lg">💻</span>}
                </div>
                <div className="min-w-0 w-full px-1">
                  <span className="text-xs font-black text-gray-800 dark:text-gray-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 truncate block text-center" title={isVi ? sub.nameVi : sub.nameEn}>
                    {isVi ? sub.nameVi : sub.nameEn}
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold block mt-0.5">
                    HK1 & HK2
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Active Homework Section (if any assignments exist) */}
      {homeworks.length > 0 && (
        <section className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 p-6 rounded-[2rem] border border-indigo-100 dark:border-indigo-900/50 shadow-xs">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-black text-indigo-900 dark:text-indigo-200 flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-indigo-600" />
              <span>{t('student.homework_title')}</span>
            </h2>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
              {homeworks.filter(h => !h.completed).length} {isVi ? 'bài cần làm' : 'due'}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {homeworks.map((hw, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-xs border border-indigo-100 dark:border-gray-700 flex flex-col justify-between gap-3.5">
                <div>
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300">
                      {hw.className}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      hw.completed ? 'bg-green-100 text-green-700' : hw.overdue ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {hw.completed ? (isVi ? 'Đã nộp' : 'Done') : hw.overdue ? (isVi ? 'Quá hạn (-100 XP)' : 'Overdue (-100 XP)') : `${isVi ? 'Hạn' : 'Due'}: ${hw.dueDate}`}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-gray-900 dark:text-white">{hw.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">{hw.description}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/quiz/${hw.quizId}`}
                    className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-center rounded-xl shadow-xs text-xs transition-colors"
                  >
                    {isVi ? 'Làm bài' : 'Take Quiz'}
                  </Link>
                  <button
                    onClick={() => setActiveChatHomework(hw)}
                    className="px-3 py-2.5 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 font-bold rounded-xl hover:bg-indigo-100 transition-colors flex items-center gap-1 text-xs"
                    title="Ask AI Tutor"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">AI Tutor</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Activity & Study Updates */}
      <div className="space-y-6">
        <RecentActivityFeed submissions={mySubmissions} />
      </div>
    </div>
  );
}
