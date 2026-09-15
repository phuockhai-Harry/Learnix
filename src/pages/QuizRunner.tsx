import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, getDocs, query, where, collection, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { CheckCircle, XCircle, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { lessons } from '../data/lessons';
import { BADGES, checkNewBadges, Badge } from '../data/badges';

export default function QuizRunner() {
  const { quizId } = useParams();
  const { user, profile } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);
  const [newEarnedBadges, setNewEarnedBadges] = useState<Badge[]>([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId) return;

      // 1. Check if it's a built-in lesson
      if (lessons[quizId as keyof typeof lessons]) {
        const builtin = lessons[quizId as keyof typeof lessons];
        setQuiz({ id: builtin.id, title: builtin.title, creatorId: 'system' });
        setQuestions(builtin.questions);
        return;
      }

      // 2. Otherwise fetch from Firestore
      try {
        const docSnap = await getDoc(doc(db, 'quizzes', quizId));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setQuiz({ id: docSnap.id, ...data });
          setQuestions(JSON.parse(data.questionsData || '[]'));
        } else {
          alert(t('runner.not_found'));
          navigate('/');
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchQuiz();
  }, [quizId, navigate, t]);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);

    const isCorrect = index === questions[currentIndex].answerIndex;
    if (isCorrect) {
      setScore(s => s + 100);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
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
    
    try {
      const newSubRef = doc(collection(db, 'submissions'));
      await setDoc(newSubRef, {
        quizId: quiz.id,
        studentId: user.uid,
        teacherId: quiz.creatorId,
        score: finalScore,
        completedAt: serverTimestamp()
      });

      // Update streak and badges
      if (profile) {
        const todayStr = new Date().toLocaleDateString('en-CA');
        const lastActive = profile.lastActiveDate;
        
        let newStreak = profile.streakCount || 0;
        if (lastActive !== todayStr) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toLocaleDateString('en-CA');
          
          if (lastActive === yesterdayStr) {
            newStreak += 1;
          } else {
            newStreak = 1;
          }
        }

        const newXP = (profile.xp || 0) + finalScore;
        const currentBadges = profile.earnedBadges || [];
        
        // Fetch subs to count
        const subsSnap = await getDocs(query(collection(db, 'submissions'), where('studentId', '==', user.uid)));
        const totalQuizzes = subsSnap.size;
        
        const now = new Date();
        const isPerfect = finalScore === questions.length * 100;

        const newBadgeIds = checkNewBadges(currentBadges, {
          totalQuizzes,
          streak: newStreak,
          perfectScores: isPerfect ? 1 : 0, // Simplified for now, just checking if this one is perfect
          totalXP: newXP,
          hourOfDay: now.getHours(),
          dayOfWeek: now.getDay()
        });

        const updatedBadges = [...currentBadges, ...newBadgeIds];

        if (newBadgeIds.length > 0) {
          const newlyEarned = BADGES.filter(b => newBadgeIds.includes(b.id));
          setNewEarnedBadges(newlyEarned);
          
          // Grand celebration for badges
          const duration = 5000;
          const animationEnd = Date.now() + duration;
          const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
          const interval: any = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } });
          }, 250);
        }

        await updateDoc(doc(db, 'users', user.uid), {
          streakCount: newStreak,
          lastActiveDate: todayStr,
          earnedBadges: updatedBadges,
          xp: newXP,
          updatedAt: serverTimestamp()
        });
      }
    } catch (err) {
      console.error(err);
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
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300">{quiz.title}</h2>
        <div className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full font-bold">
          {t('runner.score')} {score}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
          {t('creator.question')} {currentIndex + 1} {t('runner.of')} {questions.length}
        </p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 leading-relaxed">
          {currentQ.question}
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
                  <span>{opt}</span>
                  {showResult && idx === currentQ.answerIndex && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {showResult && idx === selectedOption && idx !== currentQ.answerIndex && <XCircle className="w-5 h-5 text-red-500" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
