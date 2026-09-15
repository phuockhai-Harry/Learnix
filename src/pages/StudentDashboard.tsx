import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, orderBy, limit, doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { Link } from 'react-router-dom';
import { PlayCircle, Trophy, BarChart3, Edit3, Bell, Flame, Award, Users } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { lessons } from '../data/lessons';
import { BADGES } from '../data/badges';

export default function StudentDashboard() {
  const { user, profile } = useAuth();
  const { t } = useLanguage();
  const [publicQuizzes, setPublicQuizzes] = useState<any[]>([]);
  const [mySubmissions, setMySubmissions] = useState<any[]>([]);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [joinedClasses, setJoinedClasses] = useState<any[]>([]);
  const [joinCodeInput, setJoinCodeInput] = useState('');
  const [joining, setJoining] = useState(false);
  const [joinError, setJoinError] = useState('');

  useEffect(() => {
    // Request notification permission for goal updates
    if ("Notification" in window && Notification.permission !== "granted" && Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  }, []);

  const sendGoalNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(t('student.notify_goal'), {
        body: t('student.notify_body'),
        icon: "/vite.svg"
      });
    } else {
      alert(`${t('student.notify_goal')} ${t('student.notify_body')}`);
    }
  };

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
        return; // Already joined
      }

      await updateDoc(doc(db, 'classes', classDoc.id), {
        studentEmails: arrayUnion(profile.email)
      });

      setJoinedClasses(prev => [...prev, { id: classDoc.id, ...classData }]);
      setJoinCodeInput('');
    } catch (error) {
      console.error(error);
      setJoinError('Error joining class');
    } finally {
      setJoining(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        if (profile?.email) {
          const classesQ = query(collection(db, 'classes'), where('studentEmails', 'array-contains', profile.email));
          const classesSnap = await getDocs(classesQ);
          setJoinedClasses(classesSnap.docs.map(d => ({ id: d.id, ...d.data() })));
        }

        const quizzesQuery = query(collection(db, 'quizzes'), where('isPublic', '==', true));
        const quizSnap = await getDocs(quizzesQuery);
        const quizzesData = quizSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPublicQuizzes(quizzesData);

        const submissionsQuery = query(collection(db, 'submissions'), where('studentId', '==', user.uid));
        const subSnap = await getDocs(submissionsQuery);
        const subData = subSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        const chartedData = subData.map(sub => {
          let title = 'Unknown Quiz';
          if (lessons[sub.quizId as keyof typeof lessons]) {
            title = lessons[sub.quizId as keyof typeof lessons].title;
          } else {
            const quiz = quizzesData.find(q => q.id === sub.quizId);
            if (quiz) title = quiz.title;
          }
          return {
            ...sub,
            quizTitle: title,
          };
        });
        setMySubmissions(chartedData);

        // Fetch all submissions for leaderboard
        const allSubsQuery = query(collection(db, 'submissions'), orderBy('score', 'desc'), limit(10));
        const allSubsSnap = await getDocs(allSubsQuery);
        const topScores = await Promise.all(allSubsSnap.docs.map(async (docSnap) => {
           const sData = docSnap.data();
           let name = 'Student';
           try {
             const userDocRef = doc(db, 'users', sData.studentId);
             const uSnap = await getDoc(userDocRef);
             if (uSnap.exists()) {
               const uData = uSnap.data();
               name = uData.realName || uData.codeName || 'Student';
             }
           } catch(e) {}
           return { id: docSnap.id, score: sData.score, name };
        }));
        
        // Deduplicate and aggregate scores per student
        const aggregated: Record<string, number> = {};
        topScores.forEach(ts => {
           aggregated[ts.name] = (aggregated[ts.name] || 0) + ts.score;
        });
        const leaderArr = Object.keys(aggregated).map(name => ({ name, score: aggregated[name] })).sort((a,b) => b.score - a.score).slice(0, 5);
        setLeaderboard(leaderArr);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  if (loading) return <div className="text-center py-10">{t('student.loading')}</div>;

  const isNewUser = mySubmissions.length === 0 && (!profile?.earnedBadges || profile.earnedBadges.length === 0);

  if (isNewUser) {
    return (
      <div className="max-w-4xl mx-auto py-20 flex flex-col items-center justify-center text-center space-y-8">
        <div className="w-32 h-32 bg-teal-100 dark:bg-teal-900/30 text-teal-500 rounded-full flex items-center justify-center mb-4">
          <Award className="w-16 h-16 opacity-50" />
        </div>
        <h1 className="text-5xl font-black text-gray-900 dark:text-white tracking-tight">
          Welcome to your <span className="text-teal-600 dark:text-teal-400">Blank Slate</span>, {profile?.realName}!
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
          You haven't completed any quizzes yet. No streaks, no completions, no badges. It's time to start your learning journey and build up your profile!
        </p>
        <div className="pt-8">
          <Link to="/explore" className="inline-flex items-center space-x-3 bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-teal-700 transition-all shadow-lg border-b-4 border-teal-800 active:border-b-0 active:translate-y-1">
            <span>Explore Lessons</span>
            <PlayCircle className="w-6 h-6" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-8 sm:p-12 rounded-[2rem] shadow-lg border-b-[6px] border-teal-700 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start">
          <div>
            <h1 className="text-4xl font-black mb-3 drop-shadow-sm">{t('student.welcome')} {profile?.realName}!</h1>
            <p className="text-teal-50 text-lg font-medium">{t('student.subtitle')}</p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-wrap items-center gap-3">
            {profile?.xp !== undefined && (
              <div className="flex items-center space-x-2 bg-indigo-500/20 hover:bg-indigo-500/30 backdrop-blur-md border border-indigo-400/50 text-indigo-100 px-4 py-3 rounded-2xl transition-all shadow-sm">
                <span className="font-black text-xl">{profile.xp} XP</span>
              </div>
            )}
            {profile?.streakCount !== undefined && profile.streakCount > 0 && (
              <div className="flex items-center space-x-2 bg-orange-500/20 hover:bg-orange-500/30 backdrop-blur-md border border-orange-400/50 text-orange-100 px-4 py-3 rounded-2xl transition-all shadow-sm">
                <Flame className="w-6 h-6 text-orange-400" />
                <span className="font-bold text-lg">{profile.streakCount} Day Streak</span>
              </div>
            )}
            <button onClick={sendGoalNotification} className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white rounded-2xl transition-all shadow-sm active:scale-95" title={t('student.notify_reminders')}>
               <Bell className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 relative z-10 flex space-x-4">
          <Link to="/quiz/create" className="flex items-center space-x-2 bg-white text-teal-700 px-6 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all border-b-4 border-gray-200 active:border-b-0 active:translate-y-1 shadow-sm">
            <Edit3 className="w-5 h-5" />
            <span>{t('student.create_quiz')}</span>
          </Link>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-teal-900 opacity-20 rounded-full blur-xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-100 dark:bg-teal-900/50 rounded-xl text-teal-600"><PlayCircle className="w-6 h-6" /></div>
              {t('student.available_quizzes')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {publicQuizzes.map(quiz => (
                <div key={quiz.id} className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border-2 border-gray-100 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{quiz.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium h-10 line-clamp-2">{t('student.test_knowledge')}</p>
                  <Link to={`/quiz/${quiz.id}`} className="flex items-center justify-center space-x-2 text-sm font-bold text-white bg-teal-500 hover:bg-teal-600 w-full py-3 rounded-2xl border-b-4 border-teal-700 active:border-b-0 active:translate-y-1 transition-all">
                    <span>{t('student.start_challenge')}</span>
                    <PlayCircle className="w-4 h-4" />
                  </Link>
                </div>
              ))}
              {publicQuizzes.length === 0 && (
                <div className="col-span-2 bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-center">
                  <p className="text-gray-500 dark:text-gray-400 font-bold">{t('student.no_quizzes')}</p>
                </div>
              )}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-xl text-pink-600"><Award className="w-6 h-6" /></div>
              My Badges
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border-2 border-gray-100 dark:border-gray-700">
               {profile?.earnedBadges && profile.earnedBadges.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {profile.earnedBadges.map(badgeId => {
                       const b = BADGES.find(x => x.id === badgeId);
                       if (!b) return null;
                       return (
                         <div key={b.id} className={`flex flex-col items-center text-center p-4 rounded-2xl border-2 shadow-sm transition-transform hover:scale-105 ${b.color}`}>
                           <span className="text-4xl mb-2 drop-shadow-sm">{b.icon}</span>
                           <span className="font-bold text-sm leading-tight">{b.name}</span>
                         </div>
                       );
                    })}
                  </div>
               ) : (
                  <p className="text-gray-500 dark:text-gray-400 font-medium">Earn badges by completing quizzes!</p>
               )}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl text-yellow-600"><Trophy className="w-6 h-6" /></div>
              {t('student.leaderboard')}
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border-2 border-gray-100 dark:border-gray-700">
               {leaderboard.length > 0 ? (
                  <ul className="divide-y divide-gray-100 dark:divide-gray-700/50">
                    {leaderboard.map((student, idx) => (
                      <li key={idx} className="py-4 flex justify-between items-center group hover:bg-gray-50 dark:hover:bg-gray-750 px-4 -mx-4 rounded-2xl transition-colors">
                        <div className="flex items-center space-x-4">
                          <span className={`w-10 h-10 flex items-center justify-center rounded-2xl text-sm font-black shadow-sm ${idx === 0 ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' : idx === 1 ? 'bg-gray-100 text-gray-600 border border-gray-200' : idx === 2 ? 'bg-orange-100 text-orange-700 border border-orange-200' : 'bg-gray-50 text-gray-400 dark:bg-gray-700'}`}>
                            {idx + 1}
                          </span>
                          <span className="font-bold text-lg text-gray-900 dark:text-gray-100">{student.name}</span>
                        </div>
                        <span className="font-black text-teal-600 dark:text-teal-400 text-xl">{student.score} <span className="text-sm text-gray-400 font-bold">{t('student.pts')}</span></span>
                      </li>
                    ))}
                  </ul>
               ) : (
                  <p className="text-gray-500 dark:text-gray-400 font-medium">{t('student.no_scores')}</p>
               )}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600"><Users className="w-6 h-6" /></div>
              {t('student.my_classes')}
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border-2 border-gray-100 dark:border-gray-700">
              <form onSubmit={handleJoinClass} className="flex flex-col gap-2 mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={t('student.class_code_placeholder')}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={joinCodeInput}
                    onChange={(e) => setJoinCodeInput(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    disabled={joining}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-teal-700 transition-colors disabled:opacity-50"
                  >
                    {t('student.join')}
                  </button>
                </div>
                {joinError && <p className="text-red-500 text-sm font-medium">{joinError}</p>}
              </form>

              {joinedClasses.length > 0 ? (
                <ul className="divide-y divide-gray-100 dark:divide-gray-700/50">
                  {joinedClasses.map((c, idx) => (
                    <li key={idx} className="py-3">
                      <Link to={`/class/${c.id}`} className="block group">
                        <p className="font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{c.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('student.teacher')}: {c.teacherName}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center font-medium">Not joined any classes yet.</p>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600"><BarChart3 className="w-6 h-6" /></div>
              {t('student.analytics')}
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border-2 border-gray-100 dark:border-gray-700">
              {mySubmissions.length > 0 ? (
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mySubmissions}>
                      <XAxis dataKey="quizTitle" hide />
                      <YAxis tick={{fontWeight: 'bold', fill: '#9ca3af'}} axisLine={false} tickLine={false} />
                      <Tooltip cursor={{fill: 'rgba(20, 184, 166, 0.1)'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                      <Bar dataKey="score" fill="#0d9488" radius={[8, 8, 0, 0]} maxBarSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                  <Trophy className="w-16 h-16 mx-auto mb-4 text-gray-200 dark:text-gray-700" />
                  <p className="font-bold">{t('student.complete_quizzes')}</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
