import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, getDocs, query, where, collection, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { useToast } from '../context/ToastContext';
import { savePendingSubmission } from '../lib/offlineSync';
import { saveLessonProgress } from '../services/progressSyncService';
import { CheckCircle, XCircle, Trophy, Clock, WifiOff, ShieldCheck, DownloadCloud } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getLessons } from '../data/lessons';
import { BADGES, checkNewBadges, Badge } from '../data/badges';
import { audio } from '../lib/audio';
import MathMarkdown from '../components/MathMarkdown';
import { getDownloadedQuiz, saveDownloadedQuiz, isQuizDownloaded } from '../lib/offlineQuizManager';

export default function QuizRunner() {
  const { quizId } = useParams();
  const { user, profile } = useAuth();
  const { t, language } = useLanguage();
  const { isOnline, showToast } = useToast();
  const navigate = useNavigate();
  
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);
  const [newEarnedBadges, setNewEarnedBadges] = useState<Badge[]>([]);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (finished || !quiz) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishQuiz(score);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [finished, quiz, score]);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId) return;

      const localizedLessons = getLessons(language, quizId);

      const shuffleQuestions = (qs: any[]) => {
        return qs.map(q => {
          const correctOption = q.options[q.answerIndex];
          const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
          const newAnswerIndex = shuffledOptions.indexOf(correctOption);
          return { ...q, options: shuffledOptions, answerIndex: newAnswerIndex };
        });
      };

      // 1. Check if the quiz is saved in downloaded offline storage
      const downloaded = getDownloadedQuiz(quizId);
      if (downloaded) {
        setQuiz({
          id: downloaded.id,
          title: downloaded.title,
          creatorId: downloaded.creatorId || 'offline_downloaded',
          isOfflineDownloaded: true
        });
        setQuestions(shuffleQuestions(downloaded.questions));
        return;
      }

      // 2. Check if it's a built-in lesson
      if (localizedLessons[quizId as keyof typeof localizedLessons]) {
        const builtin = localizedLessons[quizId as keyof typeof localizedLessons];
        setQuiz({ id: builtin.id, title: builtin.title, creatorId: 'system' });
        setQuestions(shuffleQuestions(builtin.questions));
        return;
      }

      // 3. Otherwise fetch from Firestore
      try {
        const docSnap = await getDoc(doc(db, 'quizzes', quizId));
        if (docSnap.exists()) {
          const data = docSnap.data();
          const parsedQuestions = JSON.parse(data.questionsData || '[]');
          setQuiz({ id: docSnap.id, ...data });
          setQuestions(shuffleQuestions(parsedQuestions));
        } else {
          alert(t('runner.not_found'));
          navigate('/');
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
          setQuestions(shuffleQuestions(fallback.questions));
        } else {
          console.error(err);
        }
      }
    };
    fetchQuiz();
  }, [quizId, navigate, t, language]);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);

    const isCorrect = index === questions[currentIndex].answerIndex;
    if (isCorrect) {
      audio.playCorrectAnswer();
      setScore(s => s + 100);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      audio.playWrongAnswer();
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(i => i + 1);
        setSelectedOption(null);
        setShowResult(false);
      } else {
        finishQuiz(score + (isCorrect ? 100 : 0));
      }
    }, 1500);
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
      
      const duration = 5000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } });
      }, 250);
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
        title: language === 'vi' ? 'Đã lưu cục bộ an toàn' : 'Progress Saved Locally',
        message: language === 'vi'
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
        completedAt: serverTimestamp()
      });

      // Secure Cloud Storage: Save lesson completion and personalized learning path progress
      const maxPossibleScore = Math.max(100, questions.length * 100);
      const masteryPercent = Math.round((finalScore / maxPossibleScore) * 100);
      let subject = 'General Knowledge';
      if (quiz.id.includes('math') || quiz.id.includes('scientific-notation')) subject = 'Mathematics';
      else if (quiz.id.includes('logic') || quiz.id.includes('code')) subject = 'Computer Science';
      else if (quiz.id.includes('topic-1')) subject = 'Mathematics';
      else if (quiz.id.includes('topic-2')) subject = 'Natural Science';
      else if (quiz.id.includes('topic-3')) subject = 'Literature';

      await saveLessonProgress({
        studentId: user.uid,
        lessonId: quiz.id,
        title: quiz.title || 'Lesson Quiz',
        subject,
        grade: profile?.grade || 5,
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

  if (!quiz || questions.length === 0) return <div className="text-center py-10">{t('runner.loading')}</div>;

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">{t('runner.complete')}</h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{t('runner.final_score')}</p>
          <p className="text-6xl font-black text-teal-600 dark:text-teal-400">{score}</p>
        </div>

        {!isOnline && (
          <div 
            id="quiz-offline-notice" 
            className="bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300/80 dark:border-amber-800/80 p-5 rounded-2xl flex items-start gap-3.5 text-left shadow-sm"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
              <WifiOff className="w-5 h-5" />
            </div>
            <div>
              <p className="font-black text-sm text-amber-900 dark:text-amber-200">
                {language === 'vi' ? 'Tiến độ được bảo vệ ngoại tuyến' : 'Offline Progress Protected'}
              </p>
              <p className="text-xs text-amber-800 dark:text-amber-300 mt-1 leading-relaxed">
                {language === 'vi'
                  ? 'Điểm số của bạn (+ ' + score + ' XP) đã được lưu trên máy an toàn. Hệ thống sẽ tự động đồng bộ kết quả lên máy chủ ngay khi bạn có kết nối mạng trở lại.'
                  : 'Your score (+ ' + score + ' XP) is safely saved locally. Learnix will automatically synchronize your progress with the cloud as soon as your connection is restored.'}
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5" />
                {language === 'vi' ? 'Đã lưu vào bộ nhớ đệm an toàn' : 'Cached securely locally'}
              </div>
            </div>
          </div>
        )}
        
        {newEarnedBadges.length > 0 && (
          <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-orange-100 p-8 rounded-3xl shadow-xl border-2 border-yellow-300 animate-in fade-in zoom-in duration-700">
            <h3 className="text-2xl font-black text-yellow-800 mb-6 flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              New Badges Unlocked!
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {newEarnedBadges.map(badge => (
                <div key={badge.id} className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-sm border-2 ${badge.color} transform hover:scale-105 transition-transform`}>
                  <span className="text-4xl drop-shadow-sm">{badge.icon}</span>
                  <div className="text-left">
                    <p className="font-bold text-lg leading-tight">{badge.name}</p>
                    <p className="text-sm opacity-80 font-medium">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => navigate('/')}
          className="mt-8 bg-teal-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg border-b-4 border-teal-800 active:border-b-0 active:translate-y-1"
        >
          {t('runner.return')}
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300">{quiz.title}</h2>
          {quiz.isOfflineDownloaded && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-black">
              <DownloadCloud className="w-3 h-3" />
              <span>{language === 'vi' ? 'Đã tải ngoại tuyến' : 'Downloaded Offline'}</span>
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold ${timeLeft <= 15 ? 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 animate-bounce' : 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200'}`}>
            <Clock className="w-4 h-4" />
            <span>{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</span>
          </div>
          <div className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full font-bold">
            {t('runner.score')} {score}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
          {t('creator.question')} {currentIndex + 1} {t('runner.of')} {questions.length}
        </p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 leading-relaxed">
          <MathMarkdown content={currentQ.question} inline />
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentQ.options.map((opt: string, idx: number) => {
            let btnClass = "p-4 text-left rounded-xl border-2 font-medium transition-all duration-200 ";
            
            if (!showResult) {
              btnClass += "border-gray-200 dark:border-gray-700 hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200";
            } else {
              if (idx === currentQ.answerIndex) {
                 btnClass += "border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300";
              } else if (idx === selectedOption) {
                btnClass += "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300";
              } else {
                btnClass += "border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                disabled={showResult}
                onClick={() => handleSelect(idx)}
                className={btnClass}
              >
                <div className="flex justify-between items-center">
                  <MathMarkdown content={opt} inline />
                  {showResult && idx === currentQ.answerIndex && <CheckCircle className="w-5 h-5 text-green-500 shrink-0 ml-2" />}
                  {showResult && idx === selectedOption && idx !== currentQ.answerIndex && <XCircle className="w-5 h-5 text-red-500 shrink-0 ml-2" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
