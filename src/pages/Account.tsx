import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth';
import { db } from '../firebase';
import { doc, updateDoc, deleteDoc, serverTimestamp, collection, query, where, getDocs } from 'firebase/firestore';
import { useLanguage } from '../i18n';
import { Trash2, AlertTriangle, GraduationCap, User as UserIcon, BookOpen, Layers, ShieldAlert, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';

export default function Account() {
  const { user, profile, logout } = useAuth();
  const { t, language } = useLanguage();
  const isVi = language === 'vi';
  const isTeacher = profile?.role === 'teacher';
  const isAdmin = profile?.role === 'admin';

  const [currentRole, setCurrentRole] = useState<'student' | 'teacher' | 'admin'>(profile?.role || 'student');
  const [realName, setRealName] = useState(profile?.realName || '');
  const [codeName, setCodeName] = useState(profile?.codeName || '');
  const [grade, setGrade] = useState(profile?.grade || 1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Stats for teacher
  const [teacherStats, setTeacherStats] = useState<{ classesCount: number; quizzesCount: number } | null>(null);
  const [loadingStats, setLoadingStats] = useState(false);

  // Deletion modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [confirmInput, setConfirmInput] = useState('');

  useEffect(() => {
    if (profile) {
      setCurrentRole(profile.role || 'student');
      setRealName(profile.realName || '');
      setCodeName(profile.codeName || '');
      if (profile.grade) setGrade(profile.grade);
    }
  }, [profile]);

  // Load teacher stats if teacher
  useEffect(() => {
    const fetchTeacherStats = async () => {
      if (!user || !isTeacher) return;
      setLoadingStats(true);
      try {
        const classesQ = query(collection(db, 'classes'), where('teacherId', '==', user.uid));
        const classesSnap = await getDocs(classesQ);

        const quizzesQ = query(collection(db, 'quizzes'), where('creatorId', '==', user.uid));
        const quizzesSnap = await getDocs(quizzesQ);

        setTeacherStats({
          classesCount: classesSnap.size,
          quizzesCount: quizzesSnap.size
        });
      } catch (err) {
        console.warn('Could not load teacher stats:', err);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchTeacherStats();
  }, [user, isTeacher]);

  if (!user || !profile) return null;

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const updatePayload: Record<string, any> = {
        realName: realName.trim(),
        role: currentRole,
        updatedAt: serverTimestamp()
      };

      if (currentRole === 'student') {
        updatePayload.codeName = codeName.trim() || realName.trim();
        updatePayload.grade = grade || 6;
      }

      await updateDoc(doc(db, 'users', user.uid), updatePayload);
      setSuccess(t('account.success'));
    } catch (err: any) {
      setError(err.message || t('account.error'));
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    setDeleteLoading(true);
    setError('');

    try {
      if (isTeacher) {
        // 1. Delete all classes created by teacher
        try {
          const classesQuery = query(collection(db, 'classes'), where('teacherId', '==', user.uid));
          const classesSnap = await getDocs(classesQuery);
          for (const classDoc of classesSnap.docs) {
            await deleteDoc(doc(db, 'classes', classDoc.id));
          }
        } catch (e) {
          console.warn('Class deletion error during teacher cleanup:', e);
        }

        // 2. Delete teacher submissions
        try {
          const subsQuery = query(collection(db, 'submissions'), where('teacherId', '==', user.uid));
          const subsSnap = await getDocs(subsQuery);
          for (const subDoc of subsSnap.docs) {
            await deleteDoc(doc(db, 'submissions', subDoc.id));
          }
        } catch (e) {
          console.warn('Submissions cleanup error during teacher cleanup:', e);
        }

        // 3. Delete quizzes created by teacher
        try {
          const quizzesQuery = query(collection(db, 'quizzes'), where('creatorId', '==', user.uid));
          const quizzesSnap = await getDocs(quizzesQuery);
          for (const quizDoc of quizzesSnap.docs) {
            await deleteDoc(doc(db, 'quizzes', quizDoc.id));
          }
        } catch (e) {
          console.warn('Quiz deletion error during teacher cleanup:', e);
        }
      } else {
        // For students: remove study plan, personalized learning path, and lesson progress
        try {
          await deleteDoc(doc(db, 'studyPlans', user.uid));
        } catch (e) {}

        try {
          await deleteDoc(doc(db, 'learningPaths', user.uid));
        } catch (e) {}

        try {
          const progQ = query(collection(db, 'progress'), where('studentId', '==', user.uid));
          const progSnap = await getDocs(progQ);
          for (const progDoc of progSnap.docs) {
            await deleteDoc(doc(db, 'progress', progDoc.id));
          }
        } catch (e) {}
      }

      // 4. Delete user profile document from Firestore
      await deleteDoc(doc(db, 'users', user.uid));

      // 5. Delete Firebase Auth account
      if (typeof user.delete === 'function') {
        try {
          await user.delete();
        } catch (authErr: any) {
          console.warn('Auth user.delete requires re-login, signing out:', authErr);
          await logout();
        }
      }

      window.location.href = '/login';
    } catch (err: any) {
      setError(
        err.message ||
          (isVi
            ? 'Không thể xóa tài khoản lúc này. Vui lòng đăng xuất, đăng nhập lại và thử lại.'
            : 'Could not delete account. Please sign out, sign in again, and retry.')
      );
      setDeleteLoading(false);
      setShowDeleteModal(false);
    }
  };

  const expectedKeyword = isVi ? 'XOA' : 'DELETE';
  const isConfirmValid = confirmInput.trim().toUpperCase() === expectedKeyword;

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8 px-4 sm:px-0">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border-2 border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`p-3 rounded-2xl shrink-0 flex items-center justify-center ${
              isAdmin
                ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                : isTeacher 
                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' 
                : 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300'
            }`}>
              {isAdmin ? <ShieldCheck className="w-7 h-7 shrink-0" /> : isTeacher ? <GraduationCap className="w-7 h-7 shrink-0" /> : <UserIcon className="w-7 h-7 shrink-0" />}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                {isAdmin
                  ? (isVi ? 'Cài đặt Tài khoản Quản trị viên' : 'Administrator Account Settings')
                  : isTeacher 
                  ? (isVi ? 'Cài đặt Tài khoản Giáo viên' : 'Teacher Account Settings') 
                  : t('account.title')}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {isAdmin
                  ? (isVi ? 'Quản lý thông tin quản trị viên hệ thống Learnix' : 'Manage your system administrator profile')
                  : isTeacher 
                  ? (isVi ? 'Quản lý thông tin cá nhân và lớp học của bạn' : 'Manage your teacher profile and teaching preferences')
                  : (isVi ? 'Quản lý thông tin hồ sơ và khối lớp học tập' : 'Manage your student profile and grade level')}
              </p>
            </div>
          </div>

          <div className="self-start sm:self-center">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${
              isAdmin
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'
                : isTeacher 
                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300' 
                : 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300'
            }`}>
              {isAdmin ? (isVi ? 'Quản trị viên' : 'Administrator') : isTeacher ? (isVi ? 'Tài khoản Giáo viên' : 'Teacher Account') : (isVi ? 'Tài khoản Học sinh' : 'Student Account')}
            </span>
          </div>
        </div>

        {/* Teacher Teaching Summary Card */}
        {isTeacher && teacherStats && (
          <div className="mb-8 grid grid-cols-2 gap-4 p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-600 text-white rounded-xl">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900 dark:text-white">{teacherStats.classesCount}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-bold">{isVi ? 'Lớp học đang quản lý' : 'Classes Managed'}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-600 text-white rounded-xl">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900 dark:text-white">{teacherStats.quizzesCount}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-bold">{isVi ? 'Bộ đề kiểm tra đã tạo' : 'Quizzes Created'}</div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Update Form */}
        <form onSubmit={handleUpdate} className="space-y-6">
          {success && (
            <div className="flex items-center gap-2 bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-300 p-4 rounded-2xl font-bold text-sm border border-green-200 dark:border-green-800">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span>{success}</span>
            </div>
          )}
          {error && (
            <div className="flex items-center gap-2 bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300 p-4 rounded-2xl font-bold text-sm border border-red-200 dark:border-red-800">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('account.role')}</label>
              {isAdmin ? (
                <div className="px-4 py-3 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 rounded-xl font-bold text-xs uppercase tracking-wider">
                  {isVi ? 'Quản trị viên Hệ thống' : 'System Administrator'}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentRole('student')}
                    className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all border ${
                      currentRole === 'student'
                        ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {isVi ? 'Học sinh' : 'Student'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentRole('teacher')}
                    className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all border ${
                      currentRole === 'teacher'
                        ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {isVi ? 'Giáo viên' : 'Teacher'}
                  </button>
                </div>
              )}
              <p className="text-xs text-gray-400 mt-1.5">
                {isAdmin ? (isVi ? 'Quyền quản trị cấp cao nhất' : 'Full system privileges') : (isVi ? 'Chuyển đổi vai trò để xem giao diện học sinh hoặc giáo viên' : 'Switch role to test student or teacher views')}
              </p>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('account.email')}</label>
              <div className="px-4 py-3 bg-gray-100 dark:bg-gray-900 rounded-xl font-bold text-gray-600 dark:text-gray-300 cursor-not-allowed truncate">
                {user.email}
              </div>
              <p className="text-xs text-gray-400 mt-1.5">{t('account.email_notice')}</p>
            </div>
          </div>

          <div>
            <label htmlFor="realName" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              {isAdmin ? (isVi ? 'Họ và tên Quản trị viên' : 'Administrator Full Name') : isTeacher ? (isVi ? 'Họ và tên Giáo viên' : 'Teacher Full Name') : t('account.real_name')}
            </label>
            <input
              id="realName"
              type="text"
              required
              value={realName}
              onChange={(e) => setRealName(e.target.value)}
              placeholder={isTeacher ? (isVi ? 'Ví dụ: Thầy Hoàng Nam' : 'e.g. Mr. David Smith') : ''}
              className={`w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 outline-none transition-colors font-medium text-gray-900 dark:text-white ${
                isAdmin ? 'focus:border-amber-500' : isTeacher ? 'focus:border-indigo-500' : 'focus:border-teal-500'
              }`}
            />
            {isTeacher && (
              <p className="text-xs text-gray-400 mt-1.5">
                {isVi ? 'Tên này sẽ hiển thị trên các lớp học và đề kiểm tra bạn gửi cho học sinh.' : 'This name appears on the classes and quizzes you share with students.'}
              </p>
            )}
          </div>

          {currentRole === 'student' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="codeName" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('account.code_name')}</label>
                <input
                  id="codeName"
                  type="text"
                  required
                  value={codeName}
                  onChange={(e) => setCodeName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-teal-500 outline-none transition-colors font-medium text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="grade" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t('account.grade')}</label>
                <select
                  id="grade"
                  value={grade}
                  onChange={(e) => setGrade(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:border-teal-500 outline-none transition-colors font-medium text-gray-900 dark:text-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
                    <option key={g} value={g}>
                      {t('account.grade_option')} {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-auto px-8 py-3.5 text-white font-bold rounded-xl border-b-4 active:border-b-0 active:translate-y-1 transition-all shadow-md flex items-center justify-center gap-2 ${
                isAdmin
                  ? 'bg-amber-600 hover:bg-amber-700 border-amber-900'
                  : isTeacher 
                  ? 'bg-indigo-600 hover:bg-indigo-700 border-indigo-900' 
                  : 'bg-teal-600 hover:bg-teal-700 border-teal-900'
              }`}
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              <span>{loading ? t('account.saving') : t('account.save')}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Delete Account Danger Zone */}
      <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-3xl border-2 border-red-200 dark:border-red-900/50">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-red-100 dark:bg-red-900/40 text-red-600 rounded-2xl shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-2 flex-1">
            <h2 className="text-xl font-black text-red-700 dark:text-red-400">
              {isVi ? 'Xóa tài khoản vĩnh viễn' : 'Delete Account'}
            </h2>
            <p className="text-sm text-red-600 dark:text-red-300 font-medium leading-relaxed">
              {isAdmin
                ? (isVi
                    ? 'Hành động này sẽ xóa tài khoản quản trị viên của bạn khỏi hệ thống. Không thể hoàn tác.'
                    : 'This will delete your administrator account from the platform. This action cannot be undone.')
                : isTeacher
                ? (isVi
                    ? 'Hành động này sẽ xóa vĩnh viễn tài khoản giáo viên của bạn. Tất cả các lớp học do bạn quản lý, bài tập về nhà và đề kiểm tra đã tạo sẽ bị xóa vĩnh viễn khỏi hệ thống. Không thể hoàn tác.'
                    : 'This will permanently delete your teacher account. All classes you manage, homework assignments, and quizzes you created will be completely deleted from the platform. This action cannot be undone.')
                : (isVi
                    ? 'Hành động này sẽ xóa vĩnh viễn tài khoản, điểm số XP, huy hiệu, lịch ôn thi và bài tập của bạn khỏi hệ thống. Không thể hoàn tác.'
                    : 'This will permanently delete your account, learning streak, badges, study plan, and all quiz progress. This action cannot be undone.')}
            </p>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setConfirmInput('');
                  setShowDeleteModal(true);
                }}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center gap-2 text-sm"
              >
                <Trash2 className="w-4 h-4" />
                <span>
                  {isAdmin
                    ? (isVi ? 'Xóa tài khoản quản trị viên' : 'Delete Admin Account')
                    : isTeacher 
                    ? (isVi ? 'Xóa tài khoản giáo viên' : 'Delete Teacher Account') 
                    : (isVi ? 'Xóa tài khoản của tôi' : 'Delete My Account')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 max-w-lg w-full p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 space-y-6 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-3 text-red-600">
              <div className="p-3 bg-red-100 dark:bg-red-900/40 rounded-2xl">
                <AlertTriangle className="w-8 h-8 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">
                  {isVi ? 'Xác nhận xóa tài khoản?' : 'Confirm Account Deletion'}
                </h3>
                <p className="text-xs text-red-500 font-bold uppercase tracking-wider">
                  {isVi ? 'Hành động không thể hoàn tác' : 'Irreversible Action'}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <p className="font-medium">
                {isTeacher
                  ? (isVi
                      ? 'Dữ liệu sau đây của bạn sẽ bị xóa ngay lập tức:'
                      : 'The following data will be erased permanently:')
                  : (isVi
                      ? 'Tất cả dữ liệu hồ sơ cá nhân và thành tích sẽ bị xóa:'
                      : 'All personal profile records and progress will be deleted:')}
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-500 dark:text-gray-400 pl-1">
                {isTeacher ? (
                  <>
                    <li>{isVi ? 'Hồ sơ giáo viên và thông tin đăng nhập' : 'Teacher profile & authentication credentials'}</li>
                    <li>{isVi ? 'Tất cả các lớp học do bạn tạo' : 'All classes created & managed by you'}</li>
                    <li>{isVi ? 'Tất cả đề trắc nghiệm và bài tập về nhà' : 'All quizzes & homework assignments created by you'}</li>
                    <li>{isVi ? 'Lịch sử nộp bài của học sinh trong các lớp của bạn' : 'Student submissions received in your classes'}</li>
                  </>
                ) : (
                  <>
                    <li>{isVi ? 'Hồ sơ học sinh và thông tin đăng nhập' : 'Student profile & authentication credentials'}</li>
                    <li>{isVi ? 'Điểm XP, chuỗi học tập và huy hiệu thành tích' : 'XP points, streak history, and earned badges'}</li>
                    <li>{isVi ? 'Lịch ôn thi cá nhân và các mục tiêu đã đặt' : 'Personal study planner & exam schedules'}</li>
                    <li>{isVi ? 'Lịch sử làm bài tập và nhận xét của giáo viên' : 'Quiz submission history & teacher feedback'}</li>
                  </>
                )}
              </ul>
            </div>

            {/* Type confirmation code */}
            <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">
                {isVi ? `Để xác nhận, vui lòng nhập "${expectedKeyword}" vào ô bên dưới:` : `To confirm, please type "${expectedKeyword}" below:`}
              </label>
              <input
                type="text"
                value={confirmInput}
                onChange={(e) => setConfirmInput(e.target.value)}
                placeholder={expectedKeyword}
                className="w-full px-4 py-2.5 border-2 border-red-200 dark:border-red-900/60 rounded-xl bg-red-50/50 dark:bg-red-950/20 text-red-900 dark:text-red-200 font-mono font-bold tracking-widest focus:border-red-500 outline-none uppercase"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                disabled={deleteLoading}
                className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-200 transition-colors"
              >
                {isVi ? 'Hủy' : 'Cancel'}
              </button>
              <button
                type="button"
                onClick={handleDeleteAccount}
                disabled={deleteLoading || !isConfirmValid}
                className="flex-1 py-3 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                {deleteLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                <span>{deleteLoading ? (isVi ? 'Đang xóa...' : 'Deleting...') : (isVi ? 'Xác nhận xóa' : 'Confirm Delete')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
