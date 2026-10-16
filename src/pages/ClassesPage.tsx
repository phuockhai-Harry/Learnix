import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Plus, Sparkles, CheckCircle2, ChevronRight, School, Award } from 'lucide-react';

export default function ClassesPage() {
  const { user, profile } = useAuth();
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const [joinedClasses, setJoinedClasses] = useState<any[]>([]);
  const [joinCodeInput, setJoinCodeInput] = useState('');
  const [joining, setJoining] = useState(false);
  const [joinError, setJoinError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      if (!profile?.email) {
        setLoading(false);
        return;
      }
      try {
        const classesQ = query(collection(db, 'classes'), where('studentEmails', 'array-contains', profile.email));
        const classesSnap = await getDocs(classesQ);
        const currentClasses = classesSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        setJoinedClasses(currentClasses);
      } catch (err) {
        console.error('Error fetching classes:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchClasses();
  }, [profile?.email]);

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
        setJoinError(isVi ? 'Mã lớp học không hợp lệ hoặc không tồn tại.' : 'Invalid or non-existent class code.');
        return;
      }

      const classDoc = snap.docs[0];
      const classData = classDoc.data();

      if (classData.studentEmails && classData.studentEmails.includes(profile.email)) {
        setJoinError(isVi ? 'Bạn đã tham gia lớp học này rồi.' : 'You have already joined this class.');
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
      setJoinError(isVi ? 'Lỗi khi tham gia lớp học' : 'Error joining class');
    } finally {
      setJoining(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12 max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 text-white p-6 sm:p-8 rounded-[2rem] shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <School className="w-3.5 h-3.5 text-amber-300" />
            <span>{isVi ? 'Quản lý lớp học & Bài tập' : 'Classrooms & Homework'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">
            {isVi ? 'Lớp học của tôi' : 'My Classes'}
          </h1>
          <p className="text-teal-100 text-xs sm:text-sm font-medium">
            {isVi 
              ? 'Tham gia lớp học của giáo viên bằng mã lớp để nhận bài tập và theo dõi điểm số.' 
              : 'Join your teacher\'s classroom with a code to receive assignments and track scores.'}
          </p>
        </div>

        {/* Join Class Card Form */}
        <form onSubmit={handleJoinClass} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 w-full md:w-80 space-y-3 shrink-0">
          <label className="block text-xs font-bold text-teal-100">
            {isVi ? 'Nhập mã lớp để tham gia' : 'Enter class code'}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={isVi ? 'VD: ABC123XYZ' : 'e.g. ABC123XYZ'}
              value={joinCodeInput}
              onChange={(e) => setJoinCodeInput(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-black text-xs uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <button
              type="submit"
              disabled={joining}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-gray-900 font-black text-xs shadow-md transition-all disabled:opacity-50 shrink-0 flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{joining ? '...' : (isVi ? 'Tham gia' : 'Join')}</span>
            </button>
          </div>
          {joinError && <p className="text-amber-200 text-[11px] font-bold">{joinError}</p>}
        </form>
      </div>

      {/* Classes Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-teal-600" />
          <span>{isVi ? `Lớp học đã tham gia (${joinedClasses.length})` : `Enrolled Classes (${joinedClasses.length})`}</span>
        </h2>

        {joinedClasses.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700 space-y-4">
            <School className="w-12 h-12 text-gray-300 mx-auto" />
            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="font-black text-gray-900 dark:text-white text-base">
                {isVi ? 'Bạn chưa tham gia lớp học nào' : 'No classes joined yet'}
              </h3>
              <p className="text-xs text-gray-500">
                {isVi 
                  ? 'Hãy xin mã lớp từ giáo viên của bạn và nhập vào ô phía trên để kết nối với lớp học.' 
                  : 'Ask your teacher for a class code and enter it above to connect with your classroom.'}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {joinedClasses.map((c) => (
              <div 
                key={c.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      {isVi ? 'Lớp học' : 'Class'}
                    </span>
                    <span className="text-xs font-bold text-gray-400 font-mono">
                      {c.classCode}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-gray-900 dark:text-white leading-tight">
                    {c.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                    <Users className="w-3.5 h-3.5 text-teal-600" />
                    <span>{c.studentEmails?.length || 0} {isVi ? 'học sinh' : 'students'}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    to={`/class/${c.id}`}
                    className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>{isVi ? 'Vào phòng học' : 'Enter Classroom'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
