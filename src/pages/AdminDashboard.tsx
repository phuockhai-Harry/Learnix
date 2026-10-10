import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth, ADMIN_EMAIL } from '../auth';
import { useLanguage } from '../i18n';
import { 
  ShieldCheck, Users, GraduationCap, User as UserIcon, Search, 
  Download, RefreshCw, Mail, Check, Trash2, Edit2, AlertTriangle, 
  ExternalLink, Sparkles, Filter, ChevronDown, CheckCircle2, HelpCircle
} from 'lucide-react';

interface UserRecord {
  id: string;
  email?: string;
  role: 'student' | 'teacher' | 'admin';
  realName?: string;
  codeName?: string;
  grade?: number;
  xp?: number;
  streakCount?: number;
  createdAt?: any;
  lastActiveDate?: string;
}

export default function AdminDashboard() {
  const { user, profile } = useAuth();
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const [usersList, setUsersList] = useState<UserRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'student' | 'teacher' | 'admin'>('all');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Edit role modal state
  const [editingUser, setEditingUser] = useState<UserRecord | null>(null);
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'admin'>('student');
  const [isUpdatingRole, setIsUpdatingRole] = useState(false);
  const [modalSuccess, setModalSuccess] = useState('');

  // Delete user state
  const [deletingUser, setDeletingUser] = useState<UserRecord | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const usersCol = collection(db, 'users');
    const unsubscribe = onSnapshot(usersCol, (snapshot) => {
      const records: UserRecord[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as any),
      }));
      setUsersList(records);
      setLoading(false);
    }, (err) => {
      console.error('Error listening to all users in Admin Dashboard:', err);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleOpenEditModal = (u: UserRecord) => {
    setEditingUser(u);
    setSelectedRole(u.role);
    setModalSuccess('');
  };

  const handleSaveRole = async () => {
    if (!editingUser) return;
    setIsUpdatingRole(true);
    setModalSuccess('');
    try {
      await updateDoc(doc(db, 'users', editingUser.id), {
        role: selectedRole,
      });
      setModalSuccess(isVi ? 'Đã cập nhật vai trò thành công!' : 'Role updated successfully!');
      setTimeout(() => {
        setEditingUser(null);
      }, 1200);
    } catch (err: any) {
      console.error('Failed to update user role:', err);
      alert(isVi ? 'Lỗi khi cập nhật vai trò: ' + err.message : 'Error updating role: ' + err.message);
    } finally {
      setIsUpdatingRole(false);
    }
  };

  const handleDeleteUserDoc = async () => {
    if (!deletingUser) return;
    setIsDeleting(true);
    try {
      await deleteDoc(doc(db, 'users', deletingUser.id));
      setDeletingUser(null);
    } catch (err: any) {
      console.error('Failed to delete user doc:', err);
      alert(isVi ? 'Lỗi khi xóa tài khoản: ' + err.message : 'Error deleting user: ' + err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleExportCSV = () => {
    if (usersList.length === 0) return;
    const headers = ['UID', 'Email', 'Role', 'Real Name', 'Code Name', 'Grade', 'XP', 'Streak', 'Created At'];
    const rows = usersList.map((u) => {
      const createdAtStr = u.createdAt?.toDate ? u.createdAt.toDate().toISOString() : '';
      return [
        `"${u.id}"`,
        `"${u.email || ''}"`,
        `"${u.role}"`,
        `"${u.realName || ''}"`,
        `"${u.codeName || ''}"`,
        u.grade || '',
        u.xp || 0,
        u.streakCount || 0,
        `"${createdAtStr}"`
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `learnix_users_directory_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered users
  const filteredUsers = usersList.filter((u) => {
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    const term = searchTerm.toLowerCase().trim();
    if (!term) return matchesRole;
    const matchesEmail = u.email?.toLowerCase().includes(term);
    const matchesName = u.realName?.toLowerCase().includes(term);
    const matchesCode = u.codeName?.toLowerCase().includes(term);
    const matchesId = u.id.toLowerCase().includes(term);
    return matchesRole && (matchesEmail || matchesName || matchesCode || matchesId);
  });

  // Role counters
  const totalCount = usersList.length;
  const studentsCount = usersList.filter((u) => u.role === 'student').length;
  const teachersCount = usersList.filter((u) => u.role === 'teacher').length;
  const adminsCount = usersList.filter((u) => u.role === 'admin' || (u.email && u.email.toLowerCase() === ADMIN_EMAIL.toLowerCase())).length;

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-8 rounded-3xl shadow-xl border border-indigo-900/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0">
            <div className="p-3 sm:p-3.5 bg-indigo-600/30 border border-indigo-500/40 rounded-2xl text-indigo-300 shrink-0 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 sm:w-9 sm:h-9 shrink-0" />
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30 shrink-0">
                  {isVi ? 'Hệ thống Quản trị viên' : 'Admin Portal'}
                </span>
                <span className="text-xs text-indigo-300 font-mono truncate max-w-[200px] sm:max-w-none">
                  {user?.email}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                {isVi ? 'Danh bạ Tài khoản Learnix' : 'Learnix User Directory'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                {isVi 
                  ? 'Theo dõi toàn bộ địa chỉ email đăng nhập và phân quyền vai trò (Admin, Giáo viên, Học sinh).' 
                  : 'Full overview of all authenticated accounts, email addresses, and roles across Learnix.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 self-start sm:self-auto flex-wrap">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('learnix-open-tour'))}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-bold border border-indigo-400/40 transition-all shadow-sm"
              title={isVi ? 'Xem hướng dẫn quản trị' : 'Admin Tour'}
            >
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>{isVi ? 'Hướng dẫn Quản trị' : 'Admin Tour'}</span>
            </button>
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-bold border border-white/20 transition-all shadow-sm"
              title="Export all user records as CSV"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>{isVi ? 'Xuất CSV' : 'Export CSV'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div 
          onClick={() => setRoleFilter('all')}
          className={`p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
            roleFilter === 'all' 
              ? 'bg-white dark:bg-gray-800 border-indigo-500 shadow-md ring-2 ring-indigo-500/20' 
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2 gap-1.5">
            <span className="text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider truncate">{isVi ? 'Tổng người dùng' : 'Total Accounts'}</span>
            <div className="p-1 sm:p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 shrink-0">
              <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">{totalCount}</div>
          <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 truncate">{isVi ? 'Đang hoạt động' : 'Registered users'}</p>
        </div>

        <div 
          onClick={() => setRoleFilter('student')}
          className={`p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
            roleFilter === 'student' 
              ? 'bg-white dark:bg-gray-800 border-teal-500 shadow-md ring-2 ring-teal-500/20' 
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2 gap-1.5">
            <span className="text-[11px] sm:text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider truncate">{isVi ? 'Học sinh' : 'Students'}</span>
            <div className="p-1 sm:p-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/50 shrink-0">
              <UserIcon className="w-4 h-4 text-teal-600 shrink-0" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">{studentsCount}</div>
          <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 truncate">{isVi ? 'Tài khoản học sinh' : 'Student profiles'}</p>
        </div>

        <div 
          onClick={() => setRoleFilter('teacher')}
          className={`p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
            roleFilter === 'teacher' 
              ? 'bg-white dark:bg-gray-800 border-purple-500 shadow-md ring-2 ring-purple-500/20' 
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2 gap-1.5">
            <span className="text-[11px] sm:text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider truncate">{isVi ? 'Giáo viên' : 'Teachers'}</span>
            <div className="p-1 sm:p-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/50 shrink-0">
              <GraduationCap className="w-4 h-4 text-purple-600 shrink-0" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">{teachersCount}</div>
          <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 truncate">{isVi ? 'Tài khoản giáo viên' : 'Teacher educators'}</p>
        </div>

        <div 
          onClick={() => setRoleFilter('admin')}
          className={`p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
            roleFilter === 'admin' 
              ? 'bg-white dark:bg-gray-800 border-amber-500 shadow-md ring-2 ring-amber-500/20' 
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-2 gap-1.5">
            <span className="text-[11px] sm:text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider truncate">{isVi ? 'Quản trị viên' : 'Administrators'}</span>
            <div className="p-1 sm:p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/50 shrink-0">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">{adminsCount}</div>
          <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 truncate">{isVi ? 'Quyền cao nhất' : 'Full access'}</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 shrink-0 pointer-events-none" />
          <input
            type="text"
            placeholder={isVi ? 'Tìm kiếm theo email, họ tên, vai trò...' : 'Search by email, name, role...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none text-gray-900 dark:text-white placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {(['all', 'student', 'teacher', 'admin'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-colors shrink-0 ${
                roleFilter === r
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {r === 'admin' && <ShieldCheck className="w-3.5 h-3.5 shrink-0" />}
              {r === 'student' && <UserIcon className="w-3.5 h-3.5 shrink-0" />}
              {r === 'teacher' && <GraduationCap className="w-3.5 h-3.5 shrink-0" />}
              {r === 'all' && <Users className="w-3.5 h-3.5 shrink-0" />}
              <span>{r === 'all' ? (isVi ? 'Tất cả' : 'All') : r}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        {loading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm font-bold text-gray-500">{isVi ? 'Đang tải danh sách tài khoản...' : 'Loading accounts directory...'}</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <Users className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto" />
            <h3 className="text-base font-bold text-gray-700 dark:text-gray-300">
              {isVi ? 'Không tìm thấy người dùng phù hợp' : 'No users found matching your filter'}
            </h3>
            <p className="text-xs text-gray-400">
              {isVi ? 'Thử thay đổi từ khóa tìm kiếm hoặc bỏ bộ lọc vai trò.' : 'Try adjusting your search query or reset role filter.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-900/40 text-[11px] font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  <th className="py-4 px-6">{isVi ? 'Tài khoản & Email' : 'User & Email Address'}</th>
                  <th className="py-4 px-6">{isVi ? 'Vai trò' : 'Role'}</th>
                  <th className="py-4 px-6">{isVi ? 'Thông tin học tập / giảng dạy' : 'Profile Details'}</th>
                  <th className="py-4 px-6">{isVi ? 'Ngày tạo' : 'Joined Date'}</th>
                  <th className="py-4 px-6 text-right">{isVi ? 'Hành động' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60 text-sm">
                {filteredUsers.map((u) => {
                  const isCurrentAdmin = u.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase() || u.role === 'admin';
                  const roleBadge = u.role === 'admin' 
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300'
                    : u.role === 'teacher'
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300'
                    : 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border-teal-300';

                  const initials = (u.realName || u.codeName || u.email || 'U').charAt(0).toUpperCase();

                  let joinedDateStr = 'Unknown';
                  if (u.createdAt?.toDate) {
                    joinedDateStr = u.createdAt.toDate().toLocaleDateString(isVi ? 'vi-VN' : 'en-US');
                  }

                  return (
                    <tr key={u.id} className="hover:bg-gray-50/80 dark:hover:bg-gray-750/50 transition-colors">
                      {/* Name & Email */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3.5">
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 ${
                            u.role === 'admin'
                              ? 'bg-amber-500 text-white'
                              : u.role === 'teacher'
                              ? 'bg-purple-600 text-white'
                              : 'bg-teal-600 text-white'
                          }`}>
                            {initials}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-gray-900 dark:text-white truncate">
                                {u.realName || u.codeName || (isVi ? 'Chưa đặt tên' : 'Nameless')}
                              </p>
                              {u.codeName && u.role === 'student' && (
                                <span className="text-xs text-gray-400 font-mono">(@{u.codeName})</span>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">
                              <Mail className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                              <span className="font-mono truncate">{u.email || (isVi ? 'Không có email' : 'No email logged')}</span>
                              {u.email && (
                                <button
                                  type="button"
                                  onClick={() => handleCopyEmail(u.email!)}
                                  className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-0.5"
                                  title="Copy Email"
                                >
                                  {copiedEmail === u.email ? (
                                    <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                  ) : (
                                    <span className="text-[10px] font-bold underline cursor-pointer">copy</span>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border shrink-0 ${roleBadge}`}>
                          {u.role === 'admin' ? (
                            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                          ) : u.role === 'teacher' ? (
                            <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                          ) : (
                            <UserIcon className="w-3.5 h-3.5 shrink-0" />
                          )}
                          <span>{u.role}</span>
                        </span>
                      </td>

                      {/* Details */}
                      <td className="py-4 px-6">
                        {u.role === 'student' ? (
                          <div className="text-xs space-y-0.5 text-gray-600 dark:text-gray-300">
                            <div><span className="font-bold text-gray-400">Grade:</span> {u.grade || 'K-9'}</div>
                            <div><span className="font-bold text-gray-400">XP:</span> {u.xp || 0} pts • <span className="font-bold text-gray-400">Streak:</span> {u.streakCount || 0} days</div>
                          </div>
                        ) : u.role === 'teacher' ? (
                          <div className="text-xs text-purple-700 dark:text-purple-300 font-medium">
                            {isVi ? 'Giáo viên hướng dẫn lớp học' : 'Active Educator / Quiz Creator'}
                          </div>
                        ) : (
                          <div className="text-xs text-amber-700 dark:text-amber-300 font-bold">
                            {isVi ? 'Quản trị viên toàn quyền' : 'Full Platform Access'}
                          </div>
                        )}
                      </td>

                      {/* Joined Date */}
                      <td className="py-4 px-6 text-xs text-gray-500 font-medium">
                        {joinedDateStr}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="inline-flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(u)}
                            className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-xl transition-colors"
                            title={isVi ? 'Đổi vai trò' : 'Change Role'}
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          
                          {u.id !== user?.uid && (
                            <button
                              type="button"
                              onClick={() => setDeletingUser(u)}
                              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-xl transition-colors"
                              title={isVi ? 'Xóa tài khoản' : 'Delete user record'}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit Role Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 max-w-md w-full p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 space-y-5 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-gray-900 dark:text-white">
                {isVi ? 'Chỉnh sửa vai trò người dùng' : 'Change User Role'}
              </h3>
              <button 
                onClick={() => setEditingUser(null)}
                className="text-gray-400 hover:text-gray-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-3.5 bg-gray-50 dark:bg-gray-800 rounded-2xl text-xs space-y-1">
              <div className="font-bold text-gray-900 dark:text-white">{editingUser.realName || editingUser.codeName || 'User'}</div>
              <div className="text-gray-500 font-mono">{editingUser.email || editingUser.id}</div>
            </div>

            {modalSuccess && (
              <div className="p-3 bg-green-50 text-green-700 rounded-xl text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{modalSuccess}</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                {isVi ? 'Chọn vai trò mới:' : 'Select New Role:'}
              </label>
              
              <div className="grid grid-cols-3 gap-2">
                {(['student', 'teacher', 'admin'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setSelectedRole(r)}
                    className={`py-3 px-2 rounded-xl text-xs font-black uppercase tracking-wider border text-center transition-all ${
                      selectedRole === r
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 ring-2 ring-indigo-500/20'
                        : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setEditingUser(null)}
                className="flex-1 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-xl text-sm"
              >
                {isVi ? 'Hủy' : 'Cancel'}
              </button>
              <button
                type="button"
                disabled={isUpdatingRole}
                onClick={handleSaveRole}
                className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm shadow-md transition-colors disabled:opacity-50"
              >
                {isUpdatingRole ? (isVi ? 'Đang lưu...' : 'Saving...') : (isVi ? 'Lưu thay đổi' : 'Save')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete User Confirmation Modal */}
      {deletingUser && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 max-w-md w-full p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 space-y-4">
            <div className="flex items-center gap-3 text-red-600">
              <div className="p-3 bg-red-100 dark:bg-red-950/50 rounded-2xl">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-black text-gray-900 dark:text-white">
                  {isVi ? 'Xác nhận xóa tài khoản?' : 'Delete User Document?'}
                </h3>
                <p className="text-xs text-red-500 font-bold">{deletingUser.email || deletingUser.id}</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              {isVi 
                ? 'Hành động này sẽ xóa dữ liệu người dùng này khỏi Firestore. Người dùng sẽ phải thiết lập lại hồ sơ khi đăng nhập lần tiếp theo.' 
                : 'This deletes the user profile document from Firestore. The user will be prompted to recreate their profile upon next sign in.'}
            </p>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeletingUser(null)}
                className="flex-1 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-xl text-sm"
              >
                {isVi ? 'Hủy' : 'Cancel'}
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDeleteUserDoc}
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-md transition-colors disabled:opacity-50"
              >
                {isDeleting ? (isVi ? 'Đang xóa...' : 'Deleting...') : (isVi ? 'Xác nhận xóa' : 'Delete')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
