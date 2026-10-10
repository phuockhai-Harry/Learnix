import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, getDoc, doc, updateDoc, arrayUnion, arrayRemove, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { Link } from 'react-router-dom';
import { Edit3, Download, Users, FileText, UserPlus, Link2, Check, Loader2, HelpCircle } from 'lucide-react';
import jsPDF from 'jspdf';
import { setupPdfUnicode, removeVietnameseTones } from '../lib/pdfUnicode';

export default function TeacherDashboard() {
  const { user, profile } = useAuth();
  const { t, language } = useLanguage();
  const [myQuizzes, setMyQuizzes] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [classes, setClasses] = useState<any[]>([]);
  const [classNameInput, setClassNameInput] = useState('');
  const [addingClass, setAddingClass] = useState(false);
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const [savingCommentId, setSavingCommentId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !profile) return;
      try {
        const quizzesQuery = query(collection(db, 'quizzes'), where('creatorId', '==', user.uid));
        const quizSnap = await getDocs(quizzesQuery);
        const quizzesData = quizSnap.docs.map(doc => ({ id: doc.id, ...doc.data() as any }));
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
      const randomSeed = Math.floor(Math.random() * 1000000);
      const encodedPrompt = encodeURIComponent(`abstract geometric education background, clean, modern, flat design, teal and blue, school class ${classNameInput.trim()}`);
      const bannerUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=400&nologo=true&seed=${randomSeed}`;

      const newClassRef = await addDoc(collection(db, 'classes'), {
        name: classNameInput.trim(),
        teacherId: user.uid,
        teacherName: profile?.realName || 'Teacher',
        classCode,
        studentEmails: [],
        bannerUrl,
        createdAt: serverTimestamp()
      });
      
      const newClassData = {
        id: newClassRef.id,
        name: classNameInput.trim(),
        teacherId: user.uid,
        teacherName: profile?.realName || 'Teacher',
        classCode,
        bannerUrl,
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

  const handleSaveComment = async (subId: string) => {
    const comment = commentInputs[subId] !== undefined ? commentInputs[subId] : (submissions.find(s => s.id === subId)?.teacherComment || '');
    setSavingCommentId(subId);
    try {
      await updateDoc(doc(db, 'submissions', subId), {
        teacherComment: comment
      });
      setSubmissions(prev => prev.map(s => s.id === subId ? { ...s, teacherComment: comment } : s));
    } catch (err: any) {
      console.error(err);
      alert('Failed to save feedback comment: ' + (err.message || ''));
    } finally {
      setSavingCommentId(null);
    }
  };

  const [exportingPdf, setExportingPdf] = useState(false);

  const exportPDF = async () => {
    if (exportingPdf) return;
    setExportingPdf(true);
    try {
      const doc = new jsPDF();
      const hasUnicode = await setupPdfUnicode(doc);
      const fontName = hasUnicode ? 'Roboto' : 'helvetica';
      const formatTxt = (txt: string) => (hasUnicode ? txt : removeVietnameseTones(txt));

      doc.setFont(fontName, 'bold');
      doc.setFontSize(18);
      doc.setTextColor(15, 23, 42);
      doc.text(formatTxt(t('teacher.report')), 14, 22);

      doc.setFont(fontName, 'normal');
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(formatTxt(`${new Date().toLocaleDateString()} | Teacher: ${profile?.realName || user?.email || 'Teacher'}`), 14, 30);
      
      doc.setFontSize(11);
      doc.setTextColor(30, 41, 59);
      let y = 44;
      submissions.forEach((sub, index) => {
        if (y > 275) {
          doc.addPage();
          if (hasUnicode) doc.setFont('Roboto', 'normal');
          y = 20;
        }
        doc.text(formatTxt(`${index + 1}. ${sub.studentName} - ${sub.quizTitle}: ${t('teacher.score')} ${sub.score}/100`), 14, y);
        y += 8;
        if (sub.teacherComment) {
          doc.setFontSize(9);
          doc.setTextColor(13, 148, 136);
          doc.text(formatTxt(`   Feedback: "${sub.teacherComment}"`), 14, y);
          doc.setFontSize(11);
          doc.setTextColor(30, 41, 59);
          y += 6;
        }
      });

      doc.save('learnix_class_report.pdf');
    } catch (err) {
      console.error('Failed to export teacher report PDF:', err);
    } finally {
      setExportingPdf(false);
    }
  };

  if (loading) return <div className="text-center py-10">{t('teacher.loading')}</div>;

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t('teacher.admin')}</h1>
          <p className="text-gray-600 dark:text-gray-400">{t('teacher.manage')}</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap gap-2.5 sm:gap-3">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('learnix-open-tour'))} 
            className="flex items-center space-x-2 bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 px-3.5 py-2 rounded-lg font-medium hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors"
            title={language === 'vi' ? 'Xem hướng dẫn giáo viên' : 'Teacher Tour'}
          >
            <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>{language === 'vi' ? 'Hướng dẫn Giáo viên' : 'Teacher Tour'}</span>
          </button>
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
                <li key={sub.id} className="p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-base font-bold text-gray-900 dark:text-white">{sub.studentName}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{sub.quizTitle}</p>
                    </div>
                    <div className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 py-1.5 px-3.5 rounded-full text-sm font-black">
                      {t('teacher.score')} {sub.score}/100
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-700/60 space-y-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Teacher Qualitative Feedback
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add personalized qualitative feedback..."
                        defaultValue={sub.teacherComment || ''}
                        onChange={(e) => setCommentInputs(prev => ({ ...prev, [sub.id]: e.target.value }))}
                        className="flex-1 px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 focus:border-teal-500 outline-none"
                      />
                      <button
                        onClick={() => handleSaveComment(sub.id)}
                        disabled={savingCommentId === sub.id}
                        className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-xl transition-colors disabled:opacity-50"
                      >
                        {savingCommentId === sub.id ? 'Saving...' : 'Save'}
                      </button>
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
                    className="block bg-gray-50 dark:bg-gray-750/50 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-teal-500 transition-all hover:-translate-y-1 overflow-hidden"
                  >
                    {c.bannerUrl ? (
                      <div className="w-full h-32 relative">
                        <img src={c.bannerUrl} alt={c.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <Users className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{c.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">{c.studentEmails?.length || 0} Students</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-xs">Code</span>
                        <span className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded font-mono font-bold text-gray-800 dark:text-gray-200">{c.classCode}</span>
                      </div>
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
