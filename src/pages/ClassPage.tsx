import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, doc, updateDoc, arrayUnion, arrayRemove, onSnapshot, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { Users, Link2, Check, Trophy, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClassPage() {
  const { classId } = useParams<{ classId: string }>();
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const { t } = useLanguage();
  
  const [classData, setClassData] = useState<any>(null);
  const [myStudents, setMyStudents] = useState<any[]>([]);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const [emailInput, setEmailInput] = useState('');
  const [addingStudent, setAddingStudent] = useState(false);
  const [addStudentError, setAddStudentError] = useState('');
  const [allStudentEmails, setAllStudentEmails] = useState<string[]>([]);
  const [myQuizzes, setMyQuizzes] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    if (!user || !profile || !classId) return;

    let unsubscribeClass: () => void;
    let unsubscribeUsers: () => void;

    const fetchData = async () => {
      try {
        const classRef = doc(db, 'classes', classId);
        
        unsubscribeClass = onSnapshot(classRef, async (docSnap) => {
          if (!docSnap.exists()) {
            navigate('/');
            return;
          }
          const cData = docSnap.data();
          
          // Permission check
          if (profile.role === 'teacher' && cData.teacherId !== user.uid) {
             navigate('/');
             return;
          }
          if (profile.role === 'student' && (!cData.studentEmails || !cData.studentEmails.includes(profile.email))) {
             navigate('/');
             return;
          }

          setClassData({ id: docSnap.id, ...cData });
          
          // Fetch quizzes assigned by this teacher
          const quizzesQuery = query(collection(db, 'quizzes'), where('creatorId', '==', cData.teacherId));
          const quizSnap = await getDocs(quizzesQuery);
          const quizzesList = quizSnap.docs.map(d => ({ id: d.id, ...d.data() }));
          setMyQuizzes(quizzesList);

          // Fetch submissions
          const subsQuery = query(collection(db, 'submissions'), where('teacherId', '==', cData.teacherId));
          const subSnap = await getDocs(subsQuery);
          const subList = subSnap.docs.map(d => d.data());
          setSubmissions(subList);

          // Build students list
          if (cData.studentEmails && cData.studentEmails.length > 0) {
            const studentPromises = cData.studentEmails.map(async (email: string) => {
              const userQ = query(collection(db, 'users'), where('email', '==', email));
              const userSnap = await getDocs(userQ);
              if (!userSnap.empty) {
                const uDoc = userSnap.docs[0];
                const uData = uDoc.data();
                return { email, realName: uData.realName || uData.codeName, registered: true, id: uDoc.id };
              }
              return { email, realName: 'Pending Registration', registered: false, id: null };
            });
            const students = await Promise.all(studentPromises);
            setMyStudents(students);

            // Calculate leaderboard based on these students
            const aggregated: Record<string, number> = {};
            subList.forEach(sub => {
               // Only include students in this class
               const studentInfo = students.find(s => s.id === sub.studentId);
               if (studentInfo && studentInfo.realName) {
                 aggregated[studentInfo.realName] = (aggregated[studentInfo.realName] || 0) + sub.score;
               }
            });
            const leaderArr = Object.keys(aggregated)
              .map(name => ({ name, score: aggregated[name] }))
              .sort((a,b) => b.score - a.score)
              .slice(0, 10);
            setLeaderboard(leaderArr);
          } else {
            setMyStudents([]);
            setLeaderboard([]);
          }
        });

        if (profile.role === 'teacher') {
          const allUsersQ = query(collection(db, 'users'), where('role', '==', 'student'));
          unsubscribeUsers = onSnapshot(allUsersQ, (allUsersSnap) => {
            setAllStudentEmails(allUsersSnap.docs.map(d => d.data().email).filter(Boolean));
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (unsubscribeClass) unsubscribeClass();
      if (unsubscribeUsers) unsubscribeUsers();
    };
  }, [user, profile, classId, navigate]);

  const handleCopyLink = (classCode: string) => {
    const url = `${window.location.origin}/join/${classCode}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(classCode);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddStudentError('');
    if (!user || !emailInput.trim() || !classData) return;
    
    const inputEmail = emailInput.trim();
    let matchedEmail = allStudentEmails.find(email => email.toLowerCase() === inputEmail.toLowerCase());

    if (!matchedEmail) {
      try {
        const usersQ = query(collection(db, 'users'), where('email', '==', inputEmail));
        const usersSnap = await getDocs(usersQ);
        if (!usersSnap.empty) {
          matchedEmail = usersSnap.docs[0].data().email;
        }
      } catch (e) {
        console.error("Error verifying email in Firestore", e);
      }
    }

    if (!matchedEmail) {
      const confirmAdd = window.confirm(t('teacher.email_not_found') + ' Do you still want to add this email as a Pending invite?');
      if (!confirmAdd) {
        setAddStudentError(t('teacher.email_not_found'));
        return;
      }
      matchedEmail = inputEmail;
    }

    setAddingStudent(true);
    try {
      await updateDoc(doc(db, 'classes', classId!), {
        studentEmails: arrayUnion(matchedEmail)
      });
      setEmailInput('');
    } catch (error) {
      console.error(error);
      alert("Failed to add student.");
    } finally {
      setAddingStudent(false);
    }
  };

  const handleExpelStudent = async (email: string) => {
    try {
      await updateDoc(doc(db, 'classes', classId!), {
        studentEmails: arrayRemove(email)
      });
    } catch (error) {
      console.error("Failed to expel student", error);
    }
  };

  if (loading || !classData) {
    return <div className="text-center py-10 flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div></div>;
  }

  const isTeacher = profile?.role === 'teacher';

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <Link to="/" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
      </Link>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{classData.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">
             Teacher: {classData.teacherName}
             {isTeacher && ` • Class Code: ${classData.classCode}`}
          </p>
        </div>
        {isTeacher && (
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => handleCopyLink(classData.classCode)}
              className="flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 px-4 py-2 rounded-lg font-medium transition-colors border border-blue-200 dark:border-blue-800"
            >
              {copiedId === classData.classCode ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-green-600 dark:text-green-400 font-bold">{t('teacher.link_copied')}</span>
                </>
              ) : (
                <>
                  <Link2 className="w-5 h-5" />
                  <span>{t('teacher.copy_link')}</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Users className="text-blue-500" /> Members ({myStudents.length})
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden p-6">
            {isTeacher && (
              <form onSubmit={handleAddStudent} className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex gap-4">
                  <input
                    type="email"
                    list="student-emails-list"
                    placeholder={t('teacher.student_email_placeholder')}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={emailInput}
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                      setAddStudentError('');
                    }}
                    required
                  />
                  <datalist id="student-emails-list">
                    {allStudentEmails.map(email => (
                      <option key={email} value={email} />
                    ))}
                  </datalist>
                  <button
                    type="submit"
                    disabled={addingStudent}
                    className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 min-w-max"
                  >
                    {addingStudent ? t('teacher.adding') : t('teacher.add_student')}
                  </button>
                </div>
                {addStudentError && <p className="text-red-500 text-sm font-medium">{addStudentError}</p>}
              </form>
            )}

            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {myStudents.map((s, idx) => {
                let progressPercent = 0;
                if (s.registered && s.id && myQuizzes.length > 0) {
                  const completedQuizzes = new Set(submissions.filter(sub => sub.studentId === s.id).map(sub => sub.quizId));
                  progressPercent = Math.round((completedQuizzes.size / myQuizzes.length) * 100);
                }

                return (
                  <li key={idx} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex-1 w-full">
                      <p className="font-medium text-gray-900 dark:text-white text-lg">{s.realName}</p>
                      {isTeacher && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{s.email}</p>}
                      
                      {s.registered && myQuizzes.length > 0 && (
                        <div className="w-full sm:w-48 mt-1">
                          <div className="flex justify-between items-center text-xs mb-1">
                            <span className="text-gray-500 dark:text-gray-400 font-bold">{progressPercent}% Completed</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div className="bg-teal-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {isTeacher && (
                        <>
                          <span className={`text-xs px-2 py-1 rounded-full font-bold ${s.registered ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                            {s.registered ? t('teacher.registered') : t('teacher.pending')}
                          </span>
                          <button
                            onClick={() => handleExpelStudent(s.email)}
                            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium px-2 py-1 bg-red-50 dark:bg-red-900/30 rounded-md transition-colors"
                          >
                            {t('teacher.expel')}
                          </button>
                        </>
                      )}
                    </div>
                  </li>
                );
              })}
              {myStudents.length === 0 && (
                <li className="py-4 text-sm text-gray-500 dark:text-gray-400 text-center">No members yet.</li>
              )}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Trophy className="text-yellow-500" /> Leaderboard
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
             {leaderboard.length > 0 ? (
                <ul className="divide-y divide-gray-100 dark:divide-gray-700/50">
                  {leaderboard.map((student, idx) => (
                    <li key={idx} className="py-4 flex justify-between items-center group hover:bg-gray-50 dark:hover:bg-gray-750 px-4 -mx-4 rounded-xl transition-colors">
                      <div className="flex items-center space-x-4">
                        <span className={`w-8 h-8 flex items-center justify-center rounded-xl text-sm font-black shadow-sm ${idx === 0 ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' : idx === 1 ? 'bg-gray-100 text-gray-600 border border-gray-200' : idx === 2 ? 'bg-orange-100 text-orange-700 border border-orange-200' : 'bg-gray-50 text-gray-400 dark:bg-gray-700'}`}>
                          {idx + 1}
                        </span>
                        <span className="font-bold text-gray-900 dark:text-gray-100">{student.name}</span>
                      </div>
                      <span className="font-black text-teal-600 dark:text-teal-400">{student.score} pts</span>
                    </li>
                  ))}
                </ul>
             ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">No scores yet in this class.</p>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
