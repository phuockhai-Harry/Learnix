import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { useToast } from '../context/ToastContext';
import { savePendingSubmission } from '../lib/offlineSync';
import { saveLessonProgress } from '../services/progressSyncService';
import { 
  CheckCircle, 
  XCircle, 
  Trophy, 
  Clock, 
  WifiOff, 
  ShieldCheck, 
  DownloadCloud, 
  HelpCircle, 
  RotateCcw, 
  Flag, 
  BookOpen, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  Sparkles, 
  AlertTriangle, 
  Layers,
  ChevronRight,
  ChevronLeft,
  Check,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getLessons } from '../data/lessons';
import { BADGES, checkNewBadges, Badge } from '../data/badges';
import { audio } from '../lib/audio';
import MathMarkdown from '../components/MathMarkdown';
import { getDownloadedQuiz } from '../lib/offlineQuizManager';

type QuizMode = 'review' | 'test';

export default function QuizRunner() {
  const { quizId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, profile } = useAuth();
  const { t, language } = useLanguage();
  const { isOnline, showToast } = useToast();
  const navigate = useNavigate();
  const isVi = language === 'vi';

  // Mode: can be read from URL query param or selected on start screen
  const queryMode = searchParams.get('mode') as QuizMode | null;
  const [selectedMode, setSelectedMode] = useState<QuizMode | null>(queryMode);
  
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Review Mode state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  // Test Mode state
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [testFilter, setTestFilter] = useState<'all' | 'wrong' | 'flagged'>('all');

  // Timer & Completion state
  const [durationMinutes, setDurationMinutes] = useState(15);
  const [timeLeft, setTimeLeft] = useState(900); // 15 mins default
  const [totalTimeSpentSeconds, setTotalTimeSpentSeconds] = useState(0);
  const [finished, setFinished] = useState(false);
  const [newEarnedBadges, setNewEarnedBadges] = useState<Badge[]>([]);

  // Load Quiz Data
  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId) return;

      const localizedLessons = getLessons(language, quizId);

      const shuffleQuestions = (qs: any[]) => {
        return qs.map(q => {
          const correctOption = q.options[q.answerIndex];
          const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
          const newAnswerIndex = shuffledOptions.indexOf(correctOption);
          return { 
            ...q, 
            options: shuffledOptions, 
            answerIndex: newAnswerIndex,
            hint: q.hint || '',
            explanation: q.explanation || ''
          };
        });
      };

      // 1. Check if the quiz is saved in downloaded offline storage
      const downloaded = getDownloadedQuiz(quizId);
      if (downloaded) {
        setQuiz({
          id: downloaded.id,
          title: downloaded.title,
          creatorId: downloaded.creatorId || 'offline_downloaded',
          isOfflineDownloaded: true,
          durationMinutes: downloaded.timeLimitSeconds ? Math.round(downloaded.timeLimitSeconds / 60) : 15
        });
        const qs = shuffleQuestions(downloaded.questions);
        setQuestions(qs);
        const mins = downloaded.timeLimitSeconds ? Math.round(downloaded.timeLimitSeconds / 60) : Math.max(10, qs.length * 2);
        setDurationMinutes(mins);
        setTimeLeft(mins * 60);
        return;
      }

      // 2. Check if it's a built-in curriculum lesson
      if (localizedLessons[quizId as keyof typeof localizedLessons]) {
        const builtin = localizedLessons[quizId as keyof typeof localizedLessons];
        setQuiz({ 
          id: builtin.id, 
          title: builtin.title, 
          creatorId: 'system',
          durationMinutes: builtin.durationMinutes || Math.max(10, builtin.questions.length * 2)
        });
        const qs = shuffleQuestions(builtin.questions);
        setQuestions(qs);
        const mins = builtin.durationMinutes || Math.max(10, builtin.questions.length * 2);
        setDurationMinutes(mins);
        setTimeLeft(mins * 60);
        return;
      }

      // 3. Otherwise fetch from Firestore
      try {
        const docSnap = await getDoc(doc(db, 'quizzes', quizId));
        if (docSnap.exists()) {
          const data = docSnap.data();
          const parsedQuestions = JSON.parse(data.questionsData || '[]');
          const qs = shuffleQuestions(parsedQuestions);
          const mins = data.durationMinutes || Math.max(10, qs.length * 2);
          setQuiz({ id: docSnap.id, durationMinutes: mins, ...data });
          setQuestions(qs);
          setDurationMinutes(mins);
          setTimeLeft(mins * 60);
        } else {
          alert(t('runner.not_found'));
          navigate('/explore');
        }
      } catch (err) {
        console.warn('Network error loading quiz, checking offline cache fallback:', err);
        const fallback = getDownloadedQuiz(quizId);
        if (fallback) {
          setQuiz({
            id: fallback.id,
            title: fallback.title,
            creatorId: fallback.creatorId || 'offline_downloaded',
            isOfflineDownloaded: true
          });
          const qs = shuffleQuestions(fallback.questions);
          setQuestions(qs);
          setDurationMinutes(15);
          setTimeLeft(900);
        } else {
          console.error(err);
        }
      }
    };
    fetchQuiz();
  }, [quizId, navigate, t, language]);

  // Timer: in Test Mode, count down to 0; in Review Mode, count total time without forcing completion
  useEffect(() => {
    if (finished || !selectedMode || !quiz) return;

    const timer = setInterval(() => {
      setTotalTimeSpentSeconds(s => s + 1);

      if (selectedMode === 'test') {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            submitTest();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [finished, selectedMode, quiz]);

  // Mode Selection Helper
  const handleSelectMode = (mode: QuizMode) => {
    setSelectedMode(mode);
    setSearchParams({ mode });
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
    setShowHint(false);
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setFinished(false);
  };

  // Review Mode: Instant feedback selection
  const handleReviewSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);

    const isCorrect = index === questions[currentIndex].answerIndex;
    if (isCorrect) {
      audio.playCorrectAnswer();
      setScore(s => s + 100);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      audio.playWrongAnswer();
    }
  };

  const handleRetryQuestion = () => {
    setSelectedOption(null);
    setShowResult(false);
  };

  const handleNextReviewQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setShowResult(false);
      setShowHint(false);
    } else {
      finishQuiz(score);
    }
  };

  const handlePrevReviewQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setSelectedOption(null);
      setShowResult(false);
      setShowHint(false);
    }
  };

  // Test Mode: Select option without revealing answer
  const handleTestSelect = (optIndex: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optIndex
    }));
  };

  const toggleFlagQuestion = (idx: number) => {
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  // Submit test and calculate comprehensive scorecard
  const submitTest = () => {
    setShowConfirmSubmit(false);

    let testScore = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.answerIndex) {
        testScore += 100;
      }
    });

    setScore(testScore);
    finishQuiz(testScore);
  };

  const finishQuiz = async (finalScore: number) => {
    setFinished(true);
    if (!user || !quiz) return;
    
    let resolvedTeacherId = quiz.creatorId;
    if (!resolvedTeacherId || resolvedTeacherId === 'system') {
      resolvedTeacherId = localStorage.getItem('activeTeacherId') || user.uid;
    }

    const todayStr = new Date().toLocaleDateString('en-CA');
    let newStreak = (profile?.streakCount || 0);
    if (profile) {
      const lastActive = profile.lastActiveDate;
      if (lastActive !== todayStr) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toLocaleDateString('en-CA');
        newStreak = (lastActive === yesterdayStr) ? newStreak + 1 : 1;
      }
      if (newStreak <= 0) newStreak = 1;
    }

    const newXP = (profile?.xp || 0) + finalScore;
    const currentBadges = profile?.earnedBadges || [];
    const isPerfect = finalScore === questions.length * 100;
    const now = new Date();

    const newBadgeIds = checkNewBadges(currentBadges, {
      totalQuizzes: 1,
      streak: newStreak,
      perfectScores: isPerfect ? 1 : 0,
      totalXP: newXP,
      hourOfDay: now.getHours(),
      dayOfWeek: now.getDay()
    });

    const updatedBadges = [...currentBadges, ...newBadgeIds];

    if (newBadgeIds.length > 0) {
      audio.playBadgeUnlocked();
      const newlyEarned = BADGES.filter(b => newBadgeIds.includes(b.id));
      setNewEarnedBadges(newlyEarned);
      confetti({ particleCount: 100, spread: 360, origin: { y: 0.6 } });
    } else {
      audio.playQuizComplete();
    }

    const isActuallyOffline = !isOnline || !navigator.onLine;

    if (isActuallyOffline) {
      savePendingSubmission({
        quizId: quiz.id,
        quizTitle: quiz.title || 'Quiz',
        studentId: user.uid,
        teacherId: resolvedTeacherId,
        score: finalScore,
        xpDelta: finalScore,
        newBadges: newBadgeIds,
        streakInfo: {
          newStreak,
          todayStr
        }
      });

      showToast({
        type: 'info',
        title: isVi ? 'Đã lưu cục bộ an toàn' : 'Progress Saved Locally',
        message: isVi
          ? 'Bạn đang ngoại tuyến. Kết quả bài làm và điểm XP đã được lưu vào bộ nhớ đệm và sẽ tự động đồng bộ khi có kết nối trở lại!'
          : 'You are offline. Your quiz score and XP are securely cached and will automatically sync once your connection is restored!',
        duration: 6000
      });
      return;
    }

    try {
      const newSubRef = doc(collection(db, 'submissions'));
      await setDoc(newSubRef, {
        quizId: quiz.id,
        quizTitle: quiz.title || 'Quiz',
        studentId: user.uid,
        teacherId: resolvedTeacherId,
        score: finalScore,
        mode: selectedMode,
        completedAt: serverTimestamp()
      });

      const maxPossibleScore = Math.max(100, questions.length * 100);
      const masteryPercent = Math.round((finalScore / maxPossibleScore) * 100);
      let subject = 'General Knowledge';
      if (quiz.id.includes('math') || quiz.id.includes('fraction')) subject = 'Mathematics';
      else if (quiz.id.includes('science') || quiz.id.includes('energy') || quiz.id.includes('physics') || quiz.id.includes('chem')) subject = 'Natural Science';
      else if (quiz.id.includes('literature') || quiz.id.includes('grammar')) subject = 'Literature';

      await saveLessonProgress({
        studentId: user.uid,
        lessonId: quiz.id,
        title: quiz.title || 'Lesson Quiz',
        subject,
        grade: profile?.grade || quiz.grade || 5,
        score: finalScore,
        mastery: masteryPercent,
        status: 'completed'
      });

      if (profile) {
        await updateDoc(doc(db, 'users', user.uid), {
          streakCount: newStreak,
          lastActiveDate: todayStr,
          earnedBadges: updatedBadges,
          xp: newXP,
          updatedAt: serverTimestamp()
        });
      }
    } catch (err) {
      console.warn('Network error saving quiz online, queuing to offline buffer:', err);
      savePendingSubmission({
        quizId: quiz.id,
        quizTitle: quiz.title || 'Quiz',
        studentId: user.uid,
        teacherId: resolvedTeacherId,
        score: finalScore,
        xpDelta: finalScore,
        newBadges: newBadgeIds,
        streakInfo: {
          newStreak,
          todayStr
        }
      });
    }
  };

  if (!quiz || questions.length === 0) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="font-bold text-gray-700 dark:text-gray-300">{t('runner.loading')}</p>
      </div>
    );
  }

  // Pre-Start Mode Selector Screen (if no mode selected yet)
  if (!selectedMode) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4 space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-black uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>{isVi ? 'Chuẩn bị làm bài' : 'Quiz Preparation'}</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">
            {quiz.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
            {isVi 
              ? 'Chọn phương thức luyện tập phù hợp với mục tiêu của bạn hôm nay:' 
              : 'Choose the study mode that fits your goals today:'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Review Mode Card */}
          <div 
            onClick={() => handleSelectMode('review')}
            className="group cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-3xl border-2 border-teal-100 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {isVi ? 'Chế độ Ôn tập' : 'Review Mode'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  {isVi 
                    ? 'Phản hồi ngay sau mỗi câu hỏi, xem lời giải chi tiết, mở gợi ý hỗ trợ và không áp lực thời gian.' 
                    : 'Instant feedback after each question, step-by-step explanations, helpful hints, and relaxed pace.'}
                </p>
              </div>

              <div className="space-y-1.5 pt-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>{isVi ? 'Xem lời giải & công thức tức thì' : 'Instant explanations & formula tips'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>{isVi ? 'Nút gợi ý không sợ mất điểm' : 'Hint button to assist reasoning'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>{isVi ? 'Thử lại câu sai để khắc sâu kiến thức' : 'Retry questions to master concepts'}</span>
                </div>
              </div>
            </div>

            <button 
              className="mt-6 w-full py-3 bg-teal-50 group-hover:bg-teal-600 text-teal-700 group-hover:text-white dark:bg-gray-700 dark:group-hover:bg-teal-600 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2"
            >
              <span>{isVi ? 'Bắt đầu Ôn tập' : 'Start Review'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Test Mode Card */}
          <div 
            onClick={() => handleSelectMode('test')}
            className="group cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-3xl border-2 border-indigo-100 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {isVi ? 'Chế độ Kiểm tra' : 'Test Mode'}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  {isVi 
                    ? 'Mô phỏng thi thực tế: bấm giờ nghiêm túc, bảng chuyển câu hỏi linh hoạt, bảo mật đáp án và bảng điểm chi tiết.' 
                    : 'Standard exam simulation: strict countdown timer, question palette, locked answers, and in-depth report card.'}
                </p>
              </div>

              <div className="space-y-1.5 pt-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" />
                  <span>{isVi ? `Bấm giờ đếm ngược ${durationMinutes} phút` : `Countdown timer: ${durationMinutes} mins`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" />
                  <span>{isVi ? 'Bảng câu hỏi & Cờ đánh dấu xem lại' : 'Question palette & Flag for review'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" />
                  <span>{isVi ? 'Bảng điểm & Nhận xét sau khi nộp' : 'Comprehensive score sheet post-submit'}</span>
                </div>
              </div>
            </div>

            <button 
              className="mt-6 w-full py-3 bg-indigo-50 group-hover:bg-indigo-600 text-indigo-700 group-hover:text-white dark:bg-gray-700 dark:group-hover:bg-indigo-600 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2"
            >
              <span>{isVi ? 'Bắt đầu Làm bài thi' : 'Start Test'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => navigate('/explore')}
            className="text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            ← {isVi ? 'Quay lại danh sách khóa học' : 'Back to explore'}
          </button>
        </div>
      </div>
    );
  }

  // Finished Screen: Detailed Scorecard
  if (finished) {
    const totalQuestions = questions.length;
    const correctCount = selectedMode === 'test' 
      ? questions.filter((q, i) => userAnswers[i] === q.answerIndex).length
      : Math.round(score / 100);
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const scaledScore = ((correctCount / totalQuestions) * 10).toFixed(1);
    const isPassed = percentage >= 60;

    const filteredQuestions = questions.map((q, idx) => ({
      ...q,
      originalIndex: idx,
      userChoice: selectedMode === 'test' ? userAnswers[idx] : undefined,
      isCorrect: selectedMode === 'test' ? userAnswers[idx] === q.answerIndex : undefined,
      isFlagged: flaggedQuestions.has(idx)
    })).filter(q => {
      if (testFilter === 'wrong') return !q.isCorrect;
      if (testFilter === 'flagged') return q.isFlagged;
      return true;
    });

    return (
      <div className="max-w-3xl mx-auto py-10 px-4 space-y-8 animate-fade-in">
        {/* Top Summary Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-black uppercase tracking-wider">
            {selectedMode === 'test' ? (isVi ? 'Kết quả Kỳ thi Thử' : 'Exam Results') : (isVi ? 'Hoàn thành Ôn tập' : 'Review Complete')}
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
            {quiz.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="bg-gray-50 dark:bg-gray-900/60 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 min-w-32">
              <span className="text-xs text-gray-400 font-bold block">{isVi ? 'Điểm số thang 10' : 'Score (Out of 10)'}</span>
              <span className="text-4xl font-black text-teal-600 dark:text-teal-400">{scaledScore}</span>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900/60 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 min-w-32">
              <span className="text-xs text-gray-400 font-bold block">{isVi ? 'Tỉ lệ đúng' : 'Accuracy'}</span>
              <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400">{percentage}%</span>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900/60 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 min-w-32">
              <span className="text-xs text-gray-400 font-bold block">{isVi ? 'Đúng / Tổng số' : 'Correct / Total'}</span>
              <span className="text-4xl font-black text-amber-500">{correctCount}/{totalQuestions}</span>
            </div>
          </div>

          <div className="pt-2">
            <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black ${
              isPassed 
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' 
                : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
            }`}>
              {isPassed ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
              <span>{isPassed ? (isVi ? 'ĐẠT TIÊU CHUẨN XUẤT SẮC' : 'PASSED') : (isVi ? 'CẦN ÔN TẬP THÊM' : 'NEEDS PRACTICE')}</span>
            </span>
          </div>
        </div>

        {/* Offline Notice if applicable */}
        {!isOnline && (
          <div className="bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300/80 dark:border-amber-800 p-5 rounded-2xl flex items-start gap-3.5 text-left shadow-sm">
            <WifiOff className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-sm text-amber-900 dark:text-amber-200">
                {isVi ? 'Tiến độ được bảo vệ ngoại tuyến' : 'Offline Progress Protected'}
              </p>
              <p className="text-xs text-amber-800 dark:text-amber-300 mt-1">
                {isVi ? `Điểm số (+${score} XP) đã được lưu trên máy và sẽ tự động đồng bộ khi có mạng.` : `Score (+${score} XP) saved locally and will auto-sync on reconnect.`}
              </p>
            </div>
          </div>
        )}

        {/* Badges Earned */}
        {newEarnedBadges.length > 0 && (
          <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-orange-100 p-6 rounded-3xl border-2 border-amber-300 space-y-4">
            <h3 className="text-lg font-black text-amber-900 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-amber-500" />
              <span>{isVi ? 'Huy hiệu mới mở khóa!' : 'New Badges Unlocked!'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {newEarnedBadges.map(badge => (
                <div key={badge.id} className="p-3 bg-white/80 rounded-2xl flex items-center gap-3 border border-amber-200 shadow-2xs">
                  <span className="text-3xl">{badge.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{badge.name}</p>
                    <p className="text-[11px] text-gray-500">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* In-depth Answer Sheet Review (for Test Mode) */}
        {selectedMode === 'test' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-600" />
                <span>{isVi ? 'Chi tiết Bảng bài làm & Lời giải' : 'Detailed Answer Sheet & Explanations'}</span>
              </h2>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setTestFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${testFilter === 'all' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xs' : 'text-gray-500'}`}
                >
                  {isVi ? 'Tất cả' : 'All'} ({questions.length})
                </button>
                <button
                  onClick={() => setTestFilter('wrong')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${testFilter === 'wrong' ? 'bg-white dark:bg-gray-700 text-red-600 shadow-xs' : 'text-gray-500'}`}
                >
                  {isVi ? 'Câu sai' : 'Wrong'} ({questions.length - correctCount})
                </button>
                <button
                  onClick={() => setTestFilter('flagged')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${testFilter === 'flagged' ? 'bg-white dark:bg-gray-700 text-amber-600 shadow-xs' : 'text-gray-500'}`}
                >
                  {isVi ? 'Cắm cờ' : 'Flagged'} ({flaggedQuestions.size})
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredQuestions.map((q) => {
                const isUserCorrect = q.userChoice === q.answerIndex;
                const answered = q.userChoice !== undefined;

                return (
                  <div 
                    key={q.originalIndex}
                    className={`p-6 rounded-3xl border-2 transition-all space-y-4 ${
                      isUserCorrect 
                        ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800' 
                        : 'bg-red-50/40 dark:bg-red-950/20 border-red-200 dark:border-red-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black ${
                          isUserCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                        }`}>
                          {q.originalIndex + 1}
                        </span>
                        <span className="text-xs font-black uppercase tracking-wider text-gray-400">
                          {isUserCorrect ? (isVi ? 'Chính xác' : 'Correct') : (isVi ? 'Chưa đúng' : 'Incorrect')}
                        </span>
                      </div>

                      {q.isFlagged && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-100 dark:bg-amber-900/50 px-2 py-0.5 rounded-lg">
                          <Flag className="w-3 h-3" />
                          <span>{isVi ? 'Đã cắm cờ' : 'Flagged'}</span>
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-gray-900 dark:text-white text-base leading-relaxed">
                      <MathMarkdown content={q.question} />
                    </h4>

                    {/* Options status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt: string, optIdx: number) => {
                        const isCorrectAnswer = optIdx === q.answerIndex;
                        const isStudentChoice = optIdx === q.userChoice;

                        let style = "p-3 rounded-xl border font-medium flex items-center justify-between ";
                        if (isCorrectAnswer) {
                          style += "bg-emerald-100/80 dark:bg-emerald-900/40 border-emerald-400 text-emerald-900 dark:text-emerald-100 font-bold";
                        } else if (isStudentChoice) {
                          style += "bg-red-100/80 dark:bg-red-900/40 border-red-400 text-red-900 dark:text-red-100 line-through";
                        } else {
                          style += "bg-white/60 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 text-gray-500 opacity-60";
                        }

                        return (
                          <div key={optIdx} className={style}>
                            <MathMarkdown content={opt} inline />
                            {isCorrectAnswer && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-1.5" />}
                            {isStudentChoice && !isCorrectAnswer && <XCircle className="w-4 h-4 text-red-600 shrink-0 ml-1.5" />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    {q.explanation && (
                      <div className="bg-white/80 dark:bg-gray-900/80 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1">
                        <span className="font-black text-teal-700 dark:text-teal-400 uppercase tracking-wider text-[10px] block">
                          💡 {isVi ? 'Lời giải bước-từng-bước:' : 'Step-by-step Solution:'}
                        </span>
                        <div className="leading-relaxed">
                          <MathMarkdown content={q.explanation} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => handleSelectMode('review')}
            className="px-6 py-3 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 font-black text-xs hover:bg-teal-100 transition-colors flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isVi ? 'Ôn tập lại bộ đề này' : 'Switch to Review Mode'}</span>
          </button>

          <button
            onClick={() => handleSelectMode('test')}
            className="px-6 py-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-black text-xs hover:bg-indigo-100 transition-colors flex items-center gap-2"
          >
            <Clock className="w-4 h-4" />
            <span>{isVi ? 'Thi lại từ đầu' : 'Retake Exam'}</span>
          </button>

          <button
            onClick={() => navigate('/explore')}
            className="px-8 py-3 rounded-2xl bg-teal-600 text-white font-black text-xs hover:bg-teal-700 shadow-md transition-colors"
          >
            {isVi ? 'Quay về Khóa học' : 'Return to Explore'}
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  // ================= RENDER ACTIVE QUIZ =================
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-6">
      
      {/* Top Header Bar */}
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setSelectedMode(null)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shrink-0"
            title={isVi ? 'Đổi chế độ' : 'Change Mode'}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                selectedMode === 'test' 
                  ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300' 
                  : 'bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300'
              }`}>
                {selectedMode === 'test' ? (isVi ? 'Chế độ Thi' : 'Test Mode') : (isVi ? 'Chế độ Ôn tập' : 'Review Mode')}
              </span>
              {quiz.isOfflineDownloaded && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-600">
                  <DownloadCloud className="w-3 h-3" />
                  <span>{isVi ? 'Ngoại tuyến' : 'Offline'}</span>
                </span>
              )}
            </div>
            <h2 className="text-base sm:text-lg font-black text-gray-900 dark:text-white truncate">
              {quiz.title}
            </h2>
          </div>
        </div>

        {/* Mode Indicators */}
        <div className="flex items-center gap-3">
          {selectedMode === 'test' ? (
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-xs ${
              timeLeft <= 180 
                ? 'bg-red-100 text-red-700 animate-pulse border border-red-300' 
                : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</span>
            </div>
          ) : (
            <div className="bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{score} XP</span>
            </div>
          )}

          {/* Test Mode: Flag Button */}
          {selectedMode === 'test' && (
            <button
              onClick={() => toggleFlagQuestion(currentIndex)}
              className={`p-2 rounded-xl border transition-colors ${
                flaggedQuestions.has(currentIndex)
                  ? 'bg-amber-100 border-amber-300 text-amber-700 dark:bg-amber-950 dark:border-amber-700'
                  : 'border-gray-200 dark:border-gray-700 text-gray-400 hover:text-gray-700'
              }`}
              title={isVi ? 'Cắm cờ xem lại' : 'Flag for review'}
            >
              <Flag className="w-4 h-4" />
            </button>
          )}

          {/* Test Mode: Direct Submit Button */}
          {selectedMode === 'test' && (
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs transition-colors shadow-xs"
            >
              {isVi ? 'Nộp bài' : 'Submit'}
            </button>
          )}
        </div>
      </div>

      {/* Test Mode Question Palette Drawer */}
      {selectedMode === 'test' && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-gray-500">
            <span>{isVi ? 'Bảng điều hướng câu hỏi' : 'Question Palette'}</span>
            <span>{Object.keys(userAnswers).length}/{questions.length} {isVi ? 'đã làm' : 'answered'}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {questions.map((_, qIdx) => {
              const isAnswered = userAnswers[qIdx] !== undefined;
              const isCurrent = qIdx === currentIndex;
              const isFlagged = flaggedQuestions.has(qIdx);

              let btnClass = "w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center transition-all ";
              if (isCurrent) {
                btnClass += "ring-2 ring-indigo-500 ring-offset-2 scale-105 ";
              }
              if (isFlagged) {
                btnClass += "bg-amber-400 text-gray-900 ";
              } else if (isAnswered) {
                btnClass += "bg-indigo-600 text-white ";
              } else {
                btnClass += "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 ";
              }

              return (
                <button
                  key={qIdx}
                  onClick={() => setCurrentIndex(qIdx)}
                  className={btnClass}
                >
                  {qIdx + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 space-y-6">
        
        {/* Question Counter & Hint Tool (Review Mode) */}
        <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider">
          <span>{isVi ? 'Câu hỏi' : 'Question'} {currentIndex + 1} / {questions.length}</span>

          {selectedMode === 'review' && currentQ.hint && (
            <button
              onClick={() => setShowHint(prev => !prev)}
              className="flex items-center gap-1 text-amber-600 dark:text-amber-400 hover:opacity-80 transition-opacity"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{showHint ? (isVi ? 'Ẩn gợi ý' : 'Hide Hint') : (isVi ? 'Xem gợi ý' : 'Show Hint')}</span>
            </button>
          )}
        </div>

        {/* Hint Box */}
        {selectedMode === 'review' && showHint && currentQ.hint && (
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 p-4 rounded-2xl text-xs text-amber-900 dark:text-amber-200 space-y-1 animate-fade-in">
            <span className="font-black uppercase tracking-wider block text-[10px]">💡 {isVi ? 'Gợi ý suy luận:' : 'Hint:'}</span>
            <MathMarkdown content={currentQ.hint} />
          </div>
        )}

        {/* Question Text */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-relaxed">
          <MathMarkdown content={currentQ.question} />
        </h3>

        {/* Drag & Drop Visual Matching Panel if question is interactive drag_drop */}
        {currentQ.dragPairs && currentQ.slots && (
          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-3">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block">
              🧩 Các mục thông tin cần kéo thả ghép nối vào ô đúng:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Thông tin / Sự kiện / Hiện vật:</span>
                {currentQ.dragPairs.map((p: any, pi: number) => (
                  <div key={pi} className="p-2 rounded-xl bg-white dark:bg-gray-800 border border-amber-200/60 text-gray-800 dark:text-gray-200 font-semibold shadow-2xs">
                    {pi + 1}. {p.item}
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Các ô phân loại cần thả vào:</span>
                {currentQ.slots.map((s: string, si: number) => (
                  <div key={si} className="p-2 rounded-xl bg-amber-100/70 dark:bg-amber-900/40 border border-amber-300 text-amber-900 dark:text-amber-200 font-bold">
                    [Ô {si + 1}]: {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {currentQ.options.map((opt: string, idx: number) => {
            let btnClass = "p-4 text-left rounded-2xl border-2 font-medium transition-all duration-200 flex items-center justify-between ";

            if (selectedMode === 'review') {
              if (!showResult) {
                btnClass += "border-gray-200 dark:border-gray-700 hover:border-teal-500 hover:bg-teal-50/50 dark:hover:bg-gray-700/50 text-gray-800 dark:text-gray-200";
              } else {
                if (idx === currentQ.answerIndex) {
                  btnClass += "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold";
                } else if (idx === selectedOption) {
                  btnClass += "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200 line-through";
                } else {
                  btnClass += "border-gray-200 dark:border-gray-700 text-gray-400 opacity-50";
                }
              }
            } else {
              // Test Mode
              const isSelected = userAnswers[currentIndex] === idx;
              if (isSelected) {
                btnClass += "border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold shadow-xs";
              } else {
                btnClass += "border-gray-200 dark:border-gray-700 hover:border-indigo-300 hover:bg-gray-50 dark:hover:bg-gray-700/40 text-gray-800 dark:text-gray-200";
              }
            }

            return (
              <button
                key={idx}
                disabled={selectedMode === 'review' && showResult}
                onClick={() => selectedMode === 'review' ? handleReviewSelect(idx) : handleTestSelect(idx)}
                className={btnClass}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-black flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <MathMarkdown content={opt} inline />
                </div>

                {selectedMode === 'review' && showResult && idx === currentQ.answerIndex && (
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
                )}
                {selectedMode === 'review' && showResult && idx === selectedOption && idx !== currentQ.answerIndex && (
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Review Mode: Detailed Explanation Box */}
        {selectedMode === 'review' && showResult && currentQ.explanation && (
          <div className="bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/80 p-5 rounded-2xl space-y-2 animate-fade-in">
            <span className="text-[11px] font-black uppercase tracking-wider text-teal-800 dark:text-teal-300 block">
              📖 {isVi ? 'Giải thích & Phương pháp giải:' : 'Explanation & Method:'}
            </span>
            <div className="text-xs sm:text-sm text-teal-950 dark:text-teal-100 leading-relaxed">
              <MathMarkdown content={currentQ.explanation} />
            </div>
          </div>
        )}

        {/* Bottom Navigation Toolbar */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-wrap items-center justify-between gap-3">
          {selectedMode === 'review' ? (
            <>
              <div className="flex items-center gap-2">
                <button
                  disabled={currentIndex === 0}
                  onClick={handlePrevReviewQuestion}
                  className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 disabled:opacity-30 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isVi ? 'Câu trước' : 'Previous'}</span>
                </button>

                {showResult && selectedOption !== currentQ.answerIndex && (
                  <button
                    onClick={handleRetryQuestion}
                    className="px-3.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 text-xs font-bold hover:bg-amber-100 transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isVi ? 'Làm lại câu này' : 'Retry'}</span>
                  </button>
                )}
              </div>

              <button
                disabled={!showResult}
                onClick={handleNextReviewQuestion}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-xs disabled:opacity-40 transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>{currentIndex === questions.length - 1 ? (isVi ? 'Hoàn thành' : 'Finish') : (isVi ? 'Câu tiếp theo' : 'Next Question')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            // Test Mode Navigation
            <>
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
                className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 disabled:opacity-30 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{isVi ? 'Câu trước' : 'Previous'}</span>
              </button>

              <div className="flex items-center gap-2">
                {currentIndex < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>{isVi ? 'Câu tiếp theo' : 'Next Question'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowConfirmSubmit(true)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isVi ? 'Nộp bài thi' : 'Submit Test'}</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>

      </div>

      {/* Test Mode Confirm Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 max-w-md w-full p-6 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 space-y-4">
            <h3 className="text-xl font-black text-gray-900 dark:text-white">
              {isVi ? 'Xác nhận nộp bài thi?' : 'Confirm Test Submission?'}
            </h3>
            
            <div className="text-xs text-gray-600 dark:text-gray-300 space-y-2">
              <p>
                {isVi 
                  ? `Bạn đã hoàn thành ${Object.keys(userAnswers).length} / ${questions.length} câu hỏi.` 
                  : `You have completed ${Object.keys(userAnswers).length} / ${questions.length} questions.`}
              </p>
              {questions.length - Object.keys(userAnswers).length > 0 && (
                <p className="text-amber-600 dark:text-amber-400 font-bold">
                  ⚠️ {isVi 
                    ? `Còn ${questions.length - Object.keys(userAnswers).length} câu chưa có đáp án!` 
                    : `${questions.length - Object.keys(userAnswers).length} questions are still unanswered!`}
                </p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100"
              >
                {isVi ? 'Làm tiếp' : 'Keep Working'}
              </button>
              <button
                onClick={submitTest}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black shadow-md"
              >
                {isVi ? 'Đồng ý nộp bài' : 'Confirm & Submit'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
