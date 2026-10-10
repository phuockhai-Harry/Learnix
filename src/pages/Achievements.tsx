import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';
import { BADGES } from '../data/badges';
import { Trophy, Award, Crown, Search, Sparkles, User, Medal } from 'lucide-react';

export default function Achievements() {
  const { t, language } = useLanguage();
  const { user, profile } = useAuth();
  const isVi = language === 'vi';

  const [activeTab, setActiveTab] = useState<'badges' | 'leaderboard'>('badges');
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const userEarnedBadges = new Set(profile?.earnedBadges || []);
  const totalXP = profile?.xp || 0;

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoadingLeaderboard(true);
      try {
        // Query all registered students from users collection to rank every single user
        const studentsQuery = query(collection(db, 'users'), where('role', '==', 'student'));
        const snap = await getDocs(studentsQuery);
        
        const allStudents = snap.docs.map(docSnap => {
          const data = docSnap.data();
          const realName = data.realName || data.codeName || (isVi ? 'Học sinh' : 'Student');
          return {
            id: docSnap.id,
            realName: realName,
            codeName: data.codeName,
            name: realName,
            xp: typeof data.xp === 'number' ? data.xp : 0,
            grade: data.grade || 6,
            badgesCount: (data.earnedBadges || []).length,
            isCurrent: docSnap.id === user?.uid
          };
        }).sort((a, b) => {
          if (b.xp !== a.xp) return b.xp - a.xp;
          // Tie-break alphabetically by real name
          return a.realName.localeCompare(b.realName);
        });

        setLeaderboard(allStudents);
      } catch (err) {
        console.error('Error fetching full students leaderboard in achievements:', err);
      } finally {
        setLoadingLeaderboard(false);
      }
    };

    fetchLeaderboard();
  }, [user, isVi]);

  // Find current user's rank
  const currentUserIndex = leaderboard.findIndex(s => s.isCurrent);
  const currentUserRank = currentUserIndex !== -1 ? currentUserIndex + 1 : null;

  const filteredLeaderboard = leaderboard.filter(student => 
    student.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 sm:p-12 rounded-[2.5rem] shadow-lg border-b-[6px] border-purple-800 text-white flex flex-col sm:flex-row items-center justify-between text-center sm:text-left relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-yellow-300 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isVi ? 'Thành tích & Bảng vinh danh' : 'Hall of Fame'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100 drop-shadow-sm">
            {t('achievements.title')}
          </h1>
          <p className="text-indigo-100 text-sm sm:text-base font-medium max-w-lg">
            {t('achievements.subtitle')}
          </p>
        </div>
        <div className="mt-6 sm:mt-0 relative z-10 bg-white/20 p-6 sm:p-8 rounded-3xl backdrop-blur-md border border-white/30 text-center shadow-sm shrink-0">
          <p className="text-xs font-black uppercase tracking-widest text-indigo-100 mb-1">{t('achievements.total_xp')}</p>
          <p className="text-4xl sm:text-5xl font-black text-yellow-300 drop-shadow-md">{totalXP.toLocaleString()}</p>
          <p className="text-[11px] text-indigo-200 mt-1 font-bold">
            {userEarnedBadges.size} / {BADGES.length} {isVi ? 'huy hiệu mở khóa' : 'badges unlocked'}
          </p>
        </div>
        <div className="absolute left-1/2 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl mix-blend-overlay"></div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-center gap-2 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl w-fit mx-auto border border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('badges')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm transition-all ${
            activeTab === 'badges'
              ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-300 shadow-xs'
              : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>{isVi ? 'Huy hiệu Đã mở khóa' : 'Badges'}</span>
        </button>
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm transition-all ${
            activeTab === 'leaderboard'
              ? 'bg-white dark:bg-gray-700 text-yellow-600 dark:text-yellow-400 shadow-xs'
              : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>{isVi ? `Bảng xếp hạng (${leaderboard.length})` : `Leaderboard (${leaderboard.length})`}</span>
        </button>
      </div>

      {/* Tab: Badges */}
      {activeTab === 'badges' && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-2">
          {BADGES.map(badge => {
            const isEarned = userEarnedBadges.has(badge.id);
            const badgeName = language === 'vi' ? badge.nameVi : badge.name;
            const badgeDesc = language === 'vi' ? badge.descriptionVi : badge.description;
            return (
              <div 
                key={badge.id} 
                className={`p-6 sm:p-8 rounded-[2rem] border-2 text-center transition-all duration-300 ${
                  isEarned 
                    ? 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-sm hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]' 
                    : 'bg-gray-50 dark:bg-gray-900 border-dashed border-gray-200 dark:border-gray-800 opacity-60'
                }`}
              >
                <div className={`w-20 h-20 mx-auto rounded-[1.5rem] flex items-center justify-center mb-5 shadow-sm border-b-4 ${
                  isEarned ? badge.color : 'bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 grayscale'
                }`}>
                  <div className="transform scale-125 text-3xl">
                    {badge.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className={`text-lg font-black ${isEarned ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                    {badgeName}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    {badgeDesc}
                  </p>
                </div>
                {isEarned ? (
                  <span className="inline-block mt-4 px-3 py-1 bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 text-[10px] font-black uppercase rounded-full">
                    {isVi ? 'Đã đạt được' : 'Earned'}
                  </span>
                ) : (
                  <span className="inline-block mt-4 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-400 text-[10px] font-black uppercase rounded-full">
                    {isVi ? 'Chưa mở khóa' : 'Locked'}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Tab: Full School Leaderboard (Ranks every student user) */}
      {activeTab === 'leaderboard' && (
        <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <Crown className="w-6 h-6 text-yellow-500" />
              <span>{isVi ? 'Bảng xếp hạng Toàn bộ Học sinh' : 'All Students School Leaderboard'}</span>
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {isVi 
                ? `Hiển thị và xếp thứ hạng toàn bộ ${leaderboard.length} học sinh đã đăng ký tài khoản theo tổng điểm kinh nghiệm (XP) tích lũy.` 
                : `Ranking all ${leaderboard.length} registered student users by total accumulated Experience Points (XP).`}
            </p>
          </div>

          {/* User's Current Standing Card */}
          {currentUserRank && (
            <div className="bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/10 border-2 border-teal-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
                  #{currentUserRank}
                </div>
                <div>
                  <p className="text-xs font-black text-teal-900 dark:text-teal-200 flex items-center gap-1.5">
                    <span>{isVi ? 'Vị trí hiện tại của bạn:' : 'Your current ranking:'}</span>
                    <span className="px-2 py-0.5 rounded-full bg-teal-600 text-white text-[10px]">
                      {isVi ? `Hạng ${currentUserRank} / ${leaderboard.length}` : `Rank #${currentUserRank} of ${leaderboard.length}`}
                    </span>
                  </p>
                  <p className="text-[11px] text-teal-800 dark:text-teal-300">
                    {profile?.realName || profile?.codeName} • {totalXP} XP • {userEarnedBadges.size} {isVi ? 'huy hiệu' : 'badges'}
                  </p>
                </div>
              </div>
              <span className="text-xs font-black text-teal-700 dark:text-teal-300 shrink-0">
                {currentUserRank === 1 
                  ? (isVi ? '🏆 Đang dẫn đầu!' : '🏆 In First Place!') 
                  : (isVi ? 'Tiếp tục luyện tập để leo hạng!' : 'Keep practicing to climb higher!')}
              </span>
            </div>
          )}

          {/* Search bar */}
          {leaderboard.length > 5 && (
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={isVi ? 'Tìm kiếm học sinh theo tên...' : 'Search student by name...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
          )}

          {loadingLeaderboard ? (
            <div className="py-12 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600" />
            </div>
          ) : filteredLeaderboard.length > 0 ? (
            <div className="divide-y divide-gray-100 dark:divide-gray-700/60 max-w-2xl mx-auto">
              {filteredLeaderboard.map((student, idx) => {
                // Determine original absolute rank in the full leaderboard
                const originalRank = leaderboard.findIndex(s => s.id === student.id) + 1;
                const isCurrentUser = student.isCurrent;

                return (
                  <div 
                    key={student.id || idx} 
                    className={`py-3.5 flex justify-between items-center px-4 rounded-2xl transition-all ${
                      isCurrentUser 
                        ? 'bg-teal-50/80 dark:bg-teal-950/40 border-2 border-teal-300 dark:border-teal-700 shadow-xs my-1' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-750/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5 min-w-0">
                      <span className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-black shadow-xs shrink-0 ${
                        originalRank === 1 
                          ? 'bg-yellow-100 dark:bg-yellow-950/60 text-yellow-800 dark:text-yellow-300 border border-yellow-300' 
                          : originalRank === 2 
                          ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300' 
                          : originalRank === 3 
                          ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300' 
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                      }`}>
                        {originalRank === 1 ? <Crown className="w-4 h-4 text-yellow-600" /> : originalRank}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`font-bold text-sm truncate ${isCurrentUser ? 'text-teal-900 dark:text-teal-100 font-black' : 'text-gray-900 dark:text-gray-100'}`}>
                            {student.realName}
                          </span>
                          {student.codeName && student.codeName !== student.realName && (
                            <span className="text-[11px] text-gray-400 font-medium">
                              ({student.codeName})
                            </span>
                          )}
                          {isCurrentUser && (
                            <span className="px-2 py-0.5 rounded-full bg-teal-600 text-white text-[10px] font-black uppercase tracking-wider">
                              {isVi ? 'Bạn' : 'You'}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-400 flex items-center gap-2">
                          <span>{isVi ? `Lớp ${student.grade}` : `Grade ${student.grade}`}</span>
                          {student.badgesCount > 0 && (
                            <>
                              <span>•</span>
                              <span>{student.badgesCount} {isVi ? 'huy hiệu' : 'badges'}</span>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="font-black text-teal-600 dark:text-teal-400 text-base shrink-0 text-right">
                      {student.xp.toLocaleString()} <span className="text-xs text-gray-400 font-bold">{t('student.pts')}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-10 font-medium">
              {searchTerm ? (isVi ? 'Không tìm thấy học sinh phù hợp.' : 'No students found matching your search.') : t('student.no_scores')}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
