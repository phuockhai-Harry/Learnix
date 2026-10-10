import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';
import { 
  Compass, 
  Target, 
  ChevronRight, 
  Play, 
  Calculator, 
  Code, 
  FlaskConical, 
  Globe, 
  BookOpen, 
  PenTool, 
  Lightbulb, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Cloud, 
  Flame, 
  Sliders, 
  Award,
  RefreshCw,
  DownloadCloud
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { QuizDownloadButton } from '../components/QuizDownloadButton';
import { 
  subscribeStudentProgress, 
  subscribePersonalizedLearningPath, 
  initializeStudentLearningPath,
  updateLearningPathSettings,
  LessonProgress, 
  PersonalizedLearningPath 
} from '../services/progressSyncService';

const getTopicsForGrade = (grade: number, isVi: boolean) => {
  const subjectDefs = [
    {
      idSuffix: '1',
      nameEn: 'Mathematics',
      nameVi: 'Toán học',
      descEn: 'Core arithmetic, algebra, word problems, and geometry equations tailored for grade ' + grade,
      descVi: 'Số học cốt lõi, đại số, toán đố và hình học phù hợp cho học sinh lớp ' + grade,
      icon: <Calculator />,
      color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600',
      badgeColor: 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300'
    },
    {
      idSuffix: '2',
      nameEn: 'Natural Science',
      nameVi: 'Khoa học Tự nhiên',
      descEn: 'Explore biology, physics, chemistry, and environmental science concepts',
      descVi: 'Khám phá các khái niệm sinh học, vật lý, hóa học và khoa học môi trường',
      icon: <FlaskConical />,
      color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600',
      badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
    },
    {
      idSuffix: '3',
      nameEn: 'Literature',
      nameVi: 'Ngữ văn',
      descEn: 'Grammar, reading comprehension, vocabulary enrichment, and expressive writing',
      descVi: 'Ngữ pháp, đọc hiểu, mở rộng vốn từ và kỹ năng viết biểu cảm',
      icon: <BookOpen />,
      color: 'bg-purple-50 dark:bg-gray-800 border-purple-200 dark:border-purple-800 text-purple-600',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
    },
    {
      idSuffix: '4',
      nameEn: 'Penmanship',
      nameVi: 'Luyện chữ & Chính tả',
      descEn: 'Neat handwriting practices, spelling rules, and vocabulary mastery',
      descVi: 'Luyện tập nét chữ chuẩn, quy tắc chính tả và làm chủ từ vựng tiếng Việt',
      icon: <PenTool />,
      color: 'bg-orange-50 dark:bg-gray-800 border-orange-200 dark:border-orange-800 text-orange-600',
      badgeColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300'
    },
    {
      idSuffix: '5',
      nameEn: 'Extended Maths',
      nameVi: 'Toán nâng cao',
      descEn: 'Challenge puzzles, logical word problems, and advanced problem-solving',
      descVi: 'Các bài toán thách đố, toán đố logic và kỹ năng giải quyết vấn đề nâng cao',
      icon: <Lightbulb />,
      color: 'bg-green-50 dark:bg-gray-800 border-green-200 dark:border-green-800 text-green-600',
      badgeColor: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
    },
    {
      idSuffix: '6',
      nameEn: 'Computer Science',
      nameVi: 'Khoa học Máy tính',
      descEn: 'Hardware components, binary systems, internet protocols, and data structures',
      descVi: 'Cấu kiện phần cứng, hệ nhị phân, giao thức mạng và cấu trúc dữ liệu',
      icon: <Globe />,
      color: 'bg-indigo-50 dark:bg-gray-800 border-indigo-200 dark:border-indigo-800 text-indigo-600',
      badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
    },
    {
      idSuffix: '7',
      nameEn: 'Coding',
      nameVi: 'Lập trình',
      descEn: 'Algorithmic thinking, loops, conditionals, and Python/JS programming basics',
      descVi: 'Tư duy thuật toán, vòng lặp, câu lệnh điều kiện và cơ sở lập trình Python/JS',
      icon: <Code />,
      color: 'bg-pink-50 dark:bg-gray-800 border-pink-200 dark:border-pink-800 text-pink-600',
      badgeColor: 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300'
    },
  ];

  return subjectDefs.map((sub, i) => ({
    id: `grade-${grade}-topic-${sub.idSuffix}`,
    title: isVi ? sub.nameVi : sub.nameEn,
    description: isVi ? sub.descVi : sub.descEn,
    modules: 4,
    icon: React.cloneElement(sub.icon, { className: 'w-6 h-6' }),
    color: sub.color,
    badgeColor: sub.badgeColor,
    subjectKey: sub.nameEn
  }));
};

export default function Explore() {
  const { t, language } = useLanguage();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const isVi = language === 'vi';
  
  const studentGrade = profile?.grade || 5;
  const rawTopics = getTopicsForGrade(studentGrade, isVi);

  // Real-time Cloud Progress state
  const [progressList, setProgressList] = useState<LessonProgress[]>([]);
  const [learningPath, setLearningPath] = useState<PersonalizedLearningPath | null>(null);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');
  const [syncPulse, setSyncPulse] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);

  // Subscribe to real-time Cloud Storage for student progress
  useEffect(() => {
    if (!user?.uid) return;

    const unsubProgress = subscribeStudentProgress(user.uid, (list) => {
      setProgressList(list);
      setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setSyncPulse(true);
      setTimeout(() => setSyncPulse(false), 2000);
    });

    const unsubPath = subscribePersonalizedLearningPath(user.uid, (path) => {
      if (!path) {
        // Initialize personalized learning path if missing
        initializeStudentLearningPath(user.uid, studentGrade, isVi).then(newPath => {
          setLearningPath(newPath);
        });
      } else {
        setLearningPath(path);
      }
      setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setSyncPulse(true);
      setTimeout(() => setSyncPulse(false), 2000);
    });

    return () => {
      unsubProgress();
      unsubPath();
    };
  }, [user?.uid, studentGrade, isVi]);

  // Compute live progress percentage for each topic based on Cloud Storage records
  const paths = rawTopics.map((topic) => {
    const matchingRecords = progressList.filter(p => 
      p.lessonId === topic.id || 
      p.subject?.toLowerCase() === topic.subjectKey.toLowerCase()
    );

    const isCompleted = matchingRecords.some(r => r.completed);
    let progressPercent = 0;
    if (isCompleted) {
      progressPercent = 100;
    } else if (matchingRecords.length > 0) {
      const avgMastery = Math.round(
        matchingRecords.reduce((sum, r) => sum + (r.mastery || 50), 0) / matchingRecords.length
      );
      progressPercent = Math.min(95, Math.max(25, avgMastery));
    }

    return {
      ...topic,
      progress: progressPercent,
      isCompleted
    };
  });

  const handlePaceChange = async (newMinutes: number) => {
    if (!user?.uid || !learningPath) return;
    setSavingSettings(true);
    try {
      await updateLearningPathSettings(user.uid, { dailyPaceMinutes: newMinutes });
      setLearningPath(prev => prev ? { ...prev, dailyPaceMinutes: newMinutes } : null);
    } catch (e) {
      console.error(e);
    } finally {
      setSavingSettings(false);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12 animate-fade-in">
      {/* Top Banner with Real-time Cloud Sync Indicator */}
      <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-[2rem] shadow-sm border-2 border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-gray-100 mb-2">
            {t('explore.title')} - {isVi ? `Lớp ${studentGrade}` : `Grade ${studentGrade}`}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-medium">
            {t('explore.subtitle')}
          </p>
        </div>

        {/* Live Multi-Device Sync Badge */}
        <div className="shrink-0 bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="relative">
            <Cloud className={`w-6 h-6 text-emerald-600 dark:text-emerald-400 ${syncPulse ? 'animate-bounce' : ''}`} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
              <span>{isVi ? 'Đồng bộ đám mây trực tiếp' : 'Live Cloud Sync'}</span>
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              {isVi ? `Cập nhật lúc: ${lastSyncTime}` : `Synced: ${lastSyncTime}`}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Personalized Learning Path Hub */}
      {learningPath && (
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 rounded-[2.5rem] p-6 sm:p-10 text-white shadow-xl border-2 border-indigo-700/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md text-indigo-200 text-xs font-black uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{isVi ? 'Lộ trình học tập cá nhân hóa' : 'Personalized Learning Path'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {learningPath.targetGoal}
                </h2>
              </div>

              {/* Study Pace Selector with Cloud Sync */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                <div className="text-xs font-bold text-indigo-200 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Mục tiêu học mỗi ngày:' : 'Daily Pace Goal:'}</span>
                </div>
                <div className="flex items-center gap-2">
                  {[15, 30, 45, 60].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => handlePaceChange(mins)}
                      disabled={savingSettings}
                      className={`px-3 py-1 rounded-xl text-xs font-black transition-all ${
                        learningPath.dailyPaceMinutes === mins
                          ? 'bg-amber-400 text-gray-900 shadow-md scale-105'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      {mins}m
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Overall Progress Bar */}
            <div className="space-y-2 bg-white/5 rounded-2xl p-4 border border-white/10">
              <div className="flex justify-between text-sm font-black">
                <span className="text-indigo-200 uppercase tracking-wider">
                  {isVi ? 'Tiến độ hoàn thành lộ trình' : 'Overall Path Completion'}
                </span>
                <span className="text-amber-300 text-lg">{learningPath.overallProgress}%</span>
              </div>
              <div className="w-full bg-black/30 rounded-full h-4 p-0.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${Math.max(5, learningPath.overallProgress)}%` }}
                ></div>
              </div>
            </div>

            {/* Step-by-Step Milestones Roadmap */}
            <div>
              <h3 className="text-sm font-black text-indigo-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-300" />
                <span>{isVi ? 'Các chặng mục tiêu (Milestones)' : 'Learning Milestones'}</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {learningPath.milestones.map((ms, idx) => (
                  <div 
                    key={ms.id}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      ms.completed 
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100'
                        : 'bg-white/10 hover:bg-white/15 border-white/10 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
                        ms.completed ? 'bg-emerald-500 text-white' : 'bg-white/20 text-indigo-200'
                      }`}>
                        {ms.completed ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                      </div>
                      <div className="truncate">
                        <div className="font-bold text-sm truncate">{ms.title}</div>
                        <div className="text-[11px] text-indigo-200/80 flex items-center gap-2">
                          <span>{ms.subject}</span>
                          <span>•</span>
                          <span className="text-amber-300 font-bold">+{ms.xpReward} XP</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(`/quiz/${ms.lessonId}`)}
                      className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                        ms.completed
                          ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/30'
                          : 'bg-white hover:bg-gray-100 text-gray-900 shadow-sm'
                      }`}
                    >
                      {ms.completed 
                        ? (isVi ? 'Ôn lại' : 'Review') 
                        : (isVi ? 'Học ngay' : 'Start')}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grade Subject Explorations with Real Synced Progress */}
      <div className="space-y-6 mt-10">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl text-indigo-600">
            <Compass className="w-6 h-6" />
          </div>
          {t('explore.paths')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div 
              key={path.id} 
              className={`p-6 rounded-[2rem] border-2 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:-translate-y-1 ${path.color}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white">
                  {path.icon}
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <QuizDownloadButton 
                      quizId={path.id} 
                      quizTitle={path.title} 
                      subject={path.subjectKey} 
                      compact 
                    />
                    <span className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      {path.modules} {t('explore.modules')}
                    </span>
                  </div>
                  {path.isCompleted && (
                    <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {isVi ? 'Đã hoàn thành' : 'Mastered'}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                {path.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-8 h-10 line-clamp-2">
                {path.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-black text-gray-700 dark:text-gray-200">
                  <span className="uppercase tracking-wider flex items-center gap-1.5">
                    <span>{t('explore.progress')}</span>
                  </span>
                  <span>{path.progress}%</span>
                </div>
                <div className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full h-4 p-0.5">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      path.isCompleted ? 'bg-emerald-500' : 'bg-gray-900 dark:bg-white'
                    }`}
                    style={{ width: `${path.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mt-8 flex items-center gap-2">
                <button 
                  onClick={() => navigate(`/quiz/${path.id}`)}
                  className="flex-1 flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3.5 rounded-2xl font-black hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border-b-4 border-gray-200 dark:border-gray-900 active:border-b-0 active:translate-y-1 shadow-sm"
                >
                  <span>
                    {path.isCompleted 
                      ? (isVi ? 'Luyện tập lại' : 'Practice Again')
                      : path.progress > 0 
                        ? t('explore.continue') 
                        : t('explore.start')}
                  </span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recommended Spotlight Lessons */}
      <div className="space-y-6 mt-16">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
          <div className="p-2 bg-pink-100 dark:bg-pink-900/50 rounded-xl text-pink-600">
            <Target className="w-6 h-6" />
          </div>
          {t('explore.recommended')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div 
            onClick={() => navigate('/quiz/scientific-notation')}
            className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-[2rem] border-b-[6px] border-teal-800 text-white shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2 drop-shadow-sm">
                {isVi ? 'Ký hiệu Khoa học' : 'Scientific Notation'}
              </h3>
              <p className="text-teal-50 mb-6 font-medium text-lg">
                {isVi ? 'Nắm vững các số lớn và số mũ.' : 'Master large numbers and exponents.'}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center space-x-2 font-black text-sm bg-white text-teal-800 w-fit px-6 py-3 rounded-2xl shadow-sm border-b-4 border-gray-200 group-hover:bg-gray-50 transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                  <span>{t('explore.start_lesson')}</span>
                </div>
                <div onClick={(e) => e.stopPropagation()}>
                  <QuizDownloadButton 
                    quizId="scientific-notation" 
                    quizTitle={isVi ? 'Ký hiệu Khoa học' : 'Scientific Notation'} 
                    subject="Mathematics" 
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30" 
                  />
                </div>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white opacity-10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
          </div>
          
          <div 
            onClick={() => navigate('/quiz/logic')}
            className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-[2rem] border-b-[6px] border-indigo-800 text-white shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2 drop-shadow-sm">
                {isVi ? 'Nhập môn Logic học' : 'Introduction to Logic'}
              </h3>
              <p className="text-purple-50 mb-6 font-medium text-lg">
                {isVi ? 'Bảng chân lý, logic boolean và suy luận.' : 'Truth tables, boolean logic, and reasoning.'}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center space-x-2 font-black text-sm bg-white text-indigo-800 w-fit px-6 py-3 rounded-2xl shadow-sm border-b-4 border-gray-200 group-hover:bg-gray-50 transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                  <span>{t('explore.start_lesson')}</span>
                </div>
                <div onClick={(e) => e.stopPropagation()}>
                  <QuizDownloadButton 
                    quizId="logic" 
                    quizTitle={isVi ? 'Nhập môn Logic học' : 'Introduction to Logic'} 
                    subject="Computer Science" 
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30" 
                  />
                </div>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white opacity-10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
