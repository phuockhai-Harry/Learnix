import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, doc, updateDoc, arrayUnion, arrayRemove, onSnapshot, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { Users, Link2, Check, Trophy, ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { setupPdfUnicode, removeVietnameseTones } from '../lib/pdfUnicode';
import { QuizDownloadButton } from '../components/QuizDownloadButton';

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
  const [myQuizzes, setMyQuizzes] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    if (!user || !profile || !classId) return;

    let unsubscribeClass: () => void;

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
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (unsubscribeClass) unsubscribeClass();
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
    
    const inputEmail = emailInput.trim().toLowerCase();
    
    // Check if already in class
    if (classData.studentEmails && classData.studentEmails.some((em: string) => em.toLowerCase() === inputEmail)) {
      setAddStudentError(t('teacher.student_already_added') || 'Học sinh này đã có trong danh sách lớp.');
      return;
    }

    setAddingStudent(true);
    try {
      // Check user role: Do not allow adding teachers or admins into class roster as students
      const userQ = query(collection(db, 'users'), where('email', '==', inputEmail));
      const userSnap = await getDocs(userQ);
      if (!userSnap.empty) {
        const targetUserData = userSnap.docs[0].data();
        if (targetUserData.role === 'teacher' || targetUserData.role === 'admin') {
          setAddStudentError('Không thể thêm Giáo viên hoặc Quản trị viên vào danh sách Học sinh của lớp!');
          setAddingStudent(false);
          return;
        }
      }

      await updateDoc(doc(db, 'classes', classId!), {
        studentEmails: arrayUnion(inputEmail)
      });
      setEmailInput('');
    } catch (error) {
      console.error(error);
      setAddStudentError(t('teacher.add_student_failed') || "Failed to add student.");
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

  const exportStudentPDF = async (studentId: string, studentName: string) => {
    try {
      const doc = new jsPDF();
      const hasUnicode = await setupPdfUnicode(doc);
      const fontName = hasUnicode ? 'Roboto' : 'helvetica';
      const formatTxt = (txt: string) => (hasUnicode ? txt : removeVietnameseTones(txt));

      doc.setFont(fontName, 'bold');
      doc.setFontSize(18);
      doc.setTextColor(15, 23, 42);
      doc.text(formatTxt(`Student Report: ${studentName}`), 14, 22);

      doc.setFont(fontName, 'normal');
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(formatTxt(`Class: ${classData?.name || 'Classroom'} | Generated: ${new Date().toLocaleDateString()}`), 14, 28);
      
      const studentSubs = submissions.filter(sub => sub.studentId === studentId);
      const tableData = studentSubs.map(sub => {
        const quiz = myQuizzes.find(q => q.id === sub.quizId);
        const title = quiz ? quiz.title : 'Unknown Quiz';
        const date = sub.completedAt?.toDate ? sub.completedAt.toDate().toLocaleDateString() : 'N/A';
        return [formatTxt(title), sub.score.toString(), date];
      });

      autoTable(doc, {
        startY: 34,
        styles: { font: fontName },
        headStyles: { font: fontName, fontStyle: 'bold', fillColor: [13, 148, 136] },
        head: [['Quiz Title', 'Score', 'Completed Date']],
        body: tableData.length > 0 ? tableData : [['No completed quizzes yet.', '', '']],
        theme: 'striped'
      });

      doc.save(`student_report_${studentName.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error('Failed to export student PDF:', err);
    }
  };

  const [hwQuizId, setHwQuizId] = useState('');
  const [hwDueDate, setHwDueDate] = useState('');
  const [hwTitle, setHwTitle] = useState('');

  const handleAssignHomework = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hwQuizId || !hwDueDate || !hwTitle) return;
    try {
      const newHw = {
        id: Date.now().toString(),
        quizId: hwQuizId,
        title: hwTitle,
        dueDate: hwDueDate,
        teacherId: classData.teacherId
      };
      await updateDoc(doc(db, 'classes', classId!), {
        homeworks: arrayUnion(newHw)
      });
      setHwQuizId('');
      setHwDueDate('');
      setHwTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteHomework = async (hwToRemove: any) => {
    if (!isTeacher) return;
    try {
      await updateDoc(doc(db, 'classes', classId!), {
        homeworks: arrayRemove(hwToRemove)
      });
    } catch (err) {
      console.error(err);
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
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {classData.bannerUrl && (
          <div className="w-full h-48 md:h-64 relative">
            <img 
              src={classData.bannerUrl} 
              alt={classData.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </div>
        )}
        
        <div className={`p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center ${classData.bannerUrl ? 'mt-[-80px] relative z-10' : ''}`}>
          <div className={classData.bannerUrl ? 'text-white' : ''}>
            <h1 className="text-3xl font-bold mb-2 drop-shadow-md">{classData.name}</h1>
            <p className={classData.bannerUrl ? "text-gray-200 drop-shadow-sm font-medium" : "text-gray-600 dark:text-gray-400 font-medium"}>
               Teacher: {classData.teacherName}
               {isTeacher && ` • Class Code: ${classData.classCode}`}
            </p>
          </div>
          {isTeacher && (
            <div className="mt-4 sm:mt-0">
              <button
                onClick={() => handleCopyLink(classData.classCode)}
                className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors border shadow-sm backdrop-blur-sm
                  ${classData.bannerUrl 
                    ? 'bg-white/20 hover:bg-white/30 text-white border-white/30' 
                    : 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 border-blue-200 dark:border-blue-800'
                  }`}
              >
                {copiedId === classData.classCode ? (
                  <>
                    <Check className={`w-5 h-5 ${classData.bannerUrl ? 'text-green-300' : 'text-green-500'}`} />
                    <span className={`font-bold ${classData.bannerUrl ? 'text-green-100' : 'text-green-600 dark:text-green-400'}`}>{t('teacher.link_copied')}</span>
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          
          {isTeacher && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Trophy className="text-purple-500" /> Assign Homework
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                <form onSubmit={handleAssignHomework} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Homework Title"
                    value={hwTitle}
                    onChange={(e) => setHwTitle(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-700"
                  />
                  <select
                    value={hwQuizId}
                    onChange={(e) => setHwQuizId(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-700"
                  >
                    <option value="">Select Quiz</option>
                    <option value="scientific-notation">Scientific Notation (Built-in)</option>
                    <option value="logic">Introduction to Logic (Built-in)</option>
                    <option value="math-foundations">Mathematical Foundations (Built-in)</option>
                    {myQuizzes.map(q => (
                      <option key={q.id} value={q.id}>{q.title}</option>
                    ))}
                  </select>
                  <input
                    type="date"
                    value={hwDueDate}
                    onChange={(e) => setHwDueDate(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-700"
                  />
                  <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-purple-700">
                    Assign Homework
                  </button>
                </form>
              </div>
            </div>
          )}

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Check className="text-teal-500" /> Assigned Quizzes & Homework ({classData.homeworks?.length || 0})
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
              {classData.homeworks && classData.homeworks.length > 0 ? (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {classData.homeworks.map((hw: any, idx: number) => {
                    const isCompleted = !isTeacher && submissions.some(sub => sub.studentId === user?.uid && sub.quizId === hw.quizId);
                    return (
                      <li key={idx} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white text-lg">{hw.title}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Due: {hw.dueDate}</p>
                          {isCompleted && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full mt-1">
                              <Check className="w-3 h-3" /> Completed
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {!isTeacher && (
                            <>
                              <QuizDownloadButton
                                quizId={hw.quizId}
                                quizTitle={hw.title}
                                compact
                              />
                              <button
                                onClick={() => {
                                  localStorage.setItem('activeTeacherId', classData.teacherId);
                                  navigate(`/quiz/${hw.quizId}`);
                                }}
                                className="bg-teal-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-sm"
                              >
                                {isCompleted ? 'Retake Quiz' : 'Take Quiz'}
                              </button>
                            </>
                          )}
                          {isTeacher && (
                            <button
                              onClick={() => handleDeleteHomework(hw)}
                              className="bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">No quizzes or homework assigned yet.</p>
              )}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Users className="text-blue-500" /> Members ({myStudents.length})
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden p-6">
            {isTeacher && (
              <form onSubmit={handleAddStudent} className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder={t('teacher.student_email_placeholder')}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    value={emailInput}
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                      setAddStudentError('');
                    }}
                    required
                  />
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
                let completedHwCount = 0;
                const totalHwCount = classData.homeworks?.length || 0;

                if (s.registered && s.id && totalHwCount > 0) {
                  completedHwCount = classData.homeworks.filter((hw: any) =>
                    submissions.some(sub => sub.studentId === s.id && sub.quizId === hw.quizId)
                  ).length;
                  progressPercent = Math.round((completedHwCount / totalHwCount) * 100);
                } else if (s.registered && s.id && myQuizzes.length > 0) {
                  const completedQuizzes = new Set(submissions.filter(sub => sub.studentId === s.id).map(sub => sub.quizId));
                  progressPercent = Math.round((completedQuizzes.size / myQuizzes.length) * 100);
                }

                return (
                  <li key={idx} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex-1 w-full">
                      <p className="font-medium text-gray-900 dark:text-white text-lg">{s.realName}</p>
                      {isTeacher && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{s.email}</p>}
                      
                      {s.registered && (totalHwCount > 0 || myQuizzes.length > 0) && (
                        <div className="w-full sm:w-56 mt-1">
                          <div className="flex justify-between items-center text-xs mb-1">
                            <span className="text-teal-700 dark:text-teal-300 font-bold">
                              {progressPercent}% Hoàn thành
                              {totalHwCount > 0 && ` (${completedHwCount}/${totalHwCount} bài tập)`}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div className="bg-teal-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {isTeacher && (
                        <>
                          <span className={`text-xs px-2 py-1 rounded-full font-bold ${s.registered ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                            {s.registered ? t('teacher.registered') : t('teacher.pending')}
                          </span>
                          {s.registered && s.id && (
                            <button
                              onClick={() => exportStudentPDF(s.id, s.realName)}
                              title="Download PDF Report"
                              className="flex items-center gap-1 text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300 text-sm font-medium px-2 py-1 bg-teal-50 dark:bg-teal-900/30 rounded-md transition-colors"
                            >
                              <Download className="w-4 h-4" />
                              Report
                            </button>
                          )}
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

        {!isTeacher && profile?.role === 'student' && (
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
        )}
      </div>
    </div>
  );
}
