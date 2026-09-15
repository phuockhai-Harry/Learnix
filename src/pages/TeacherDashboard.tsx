import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, getDoc, doc, updateDoc, arrayUnion, arrayRemove, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { Link } from 'react-router-dom';
import { Edit3, Download, Users, FileText, UserPlus, Link2, Check } from 'lucide-react';
import jsPDF from 'jspdf';

export default function TeacherDashboard() {
  const { user, profile } = useAuth();
  const { t } = useLanguage();
  const [myQuizzes, setMyQuizzes] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [classes, setClasses] = useState<any[]>([]);
  const [classNameInput, setClassNameInput] = useState('');
  const [addingClass, setAddingClass] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !profile) return;
      try {
        const quizzesQuery = query(collection(db, 'quizzes'), where('creatorId', '==', user.uid));
        const quizSnap = await getDocs(quizzesQuery);
        const quizzesData = quizSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMyQuizzes(quizzesData);

        const subsQuery = query(collection(db, 'submissions'), where('teacherId', '==', user.uid));
        const subSnap = await getDocs(subsQuery);
        
        const subsWithNames = await Promise.all(subSnap.docs.map(async (subDoc) => {
          const subData = subDoc.data();
          let studentName = 'Unknown Student';
          try {
            const studentDoc = await getDoc(doc(db, 'users', subData.studentId));
            if (studentDoc.exists()) {
              studentName = studentDoc.data().realName || 'Unknown Student';
            }
          } catch (e) {
            console.error(e);
          }
          const quiz = quizzesData.find(q => q.id === subData.quizId);
          return {
            id: subDoc.id,
            ...subData,
            studentName,
            quizTitle: quiz?.title || 'Unknown Quiz',
          };
        }));
        setSubmissions(subsWithNames);

        // Fetch classes from top-level collection with real-time updates
        const classesQ = query(collection(db, 'classes'), where('teacherId', '==', user.uid));
        const unsubscribeClasses = onSnapshot(classesQ, (classesSnap) => {
          const fetchedClasses = classesSnap.docs.map(d => ({ id: d.id, ...d.data() }));
          setClasses(fetchedClasses);
        });
        
        // Store unsubscribes in a ref or just rely on component unmount
        return () => {
          unsubscribeClasses();
        };

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    const cleanup = fetchData();
    return () => {
      cleanup.then(unsub => { if (unsub) unsub(); });
    };
  }, [user, profile]);

  const handleAddClass = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !classNameInput.trim()) return;
    setAddingClass(true);
    try {
      const classCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      const newClassRef = await addDoc(collection(db, 'classes'), {
        name: classNameInput.trim(),
        teacherId: user.uid,
        teacherName: profile?.realName || 'Teacher',
        classCode,
        studentEmails: [],
        createdAt: serverTimestamp()
      });
      
      const newClassData = {
        id: newClassRef.id,
        name: classNameInput.trim(),
        teacherId: user.uid,
        teacherName: profile?.realName || 'Teacher',
        classCode,
        studentEmails: []
      };

      setClasses(prev => [...prev, newClassData]);
      setClassNameInput('');
    } catch (error) {
      console.error(error);
      alert("Failed to add class.");
    } finally {
      setAddingClass(false);
    }
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(t('teacher.report'), 14, 22);
    
    doc.setFontSize(12);
    let y = 40;
    submissions.forEach((sub, index) => {
      doc.text(`${index + 1}. ${sub.studentName} - ${sub.quizTitle}: ${t('teacher.score')} ${sub.score}`, 14, y);
      y += 10;
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save('learnix_class_report.pdf');
  };

  if (loading) return <div className="text-center py-10">{t('teacher.loading')}</div>;

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t('teacher.admin')}</h1>
          <p className="text-gray-600 dark:text-gray-400">{t('teacher.manage')}</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button onClick={exportPDF} className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Download className="w-5 h-5" />
            <span>{t('teacher.export')}</span>
          </button>
          <Link to="/quiz/create" className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors">
            <Edit3 className="w-5 h-5" />
            <span>{t('teacher.create_quiz')}</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <FileText className="text-teal-500" /> {t('teacher.my_quizzes')}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {myQuizzes.map(quiz => (
                <li key={quiz.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{quiz.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{quiz.isPublic ? t('teacher.public') : t('teacher.private')}</p>
                    </div>
                    <Link to={`/quiz/${quiz.id}`} className="text-teal-600 dark:text-teal-400 text-sm font-medium hover:underline">
                      {t('teacher.view')}
                    </Link>
                  </div>
                </li>
              ))}
              {myQuizzes.length === 0 && (
                <li className="p-4 text-sm text-gray-500 dark:text-gray-400">{t('teacher.no_quizzes')}</li>
              )}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Users className="text-green-500" /> {t('teacher.recent_subs')}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
             <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {submissions.map(sub => (
                <li key={sub.id} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{sub.studentName}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{sub.quizTitle}</p>
                    </div>
                    <div className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 py-1 px-3 rounded-full text-xs font-bold">
                      {t('teacher.score')} {sub.score}
                    </div>
                  </div>
                </li>
              ))}
              {submissions.length === 0 && (
                <li className="p-4 text-sm text-gray-500 dark:text-gray-400">{t('teacher.no_subs')}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="space-y-6 lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <UserPlus className="text-blue-500" /> {t('teacher.manage_classes')}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden p-6">
            
            <form onSubmit={handleAddClass} className="flex gap-4 mb-8">
              <input
                type="text"
                placeholder={t('teacher.class_name_placeholder')}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={classNameInput}
                onChange={(e) => setClassNameInput(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={addingClass}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 min-w-max"
              >
                {addingClass ? t('teacher.adding') : t('teacher.add_class')}
              </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {classes.length > 0 ? (
                classes.map(c => (
                  <Link
                    key={c.id}
                    to={`/class/${c.id}`}
                    className="block bg-gray-50 dark:bg-gray-750/50 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500 transition-all hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{c.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">{c.studentEmails?.length || 0} Students</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-gray-400 uppercase tracking-wider text-xs">Code</span>
                      <span className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded font-mono font-bold text-gray-800 dark:text-gray-200">{c.classCode}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
                  {t('teacher.no_classes')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
