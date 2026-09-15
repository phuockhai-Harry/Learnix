import React from 'react';
import { useLanguage } from '../i18n';
import { Trophy, Star, Medal, Crown, Shield } from 'lucide-react';

const badges = [
  { id: 1, title: 'First Steps', description: 'Complete your first quiz', icon: <Star className="w-8 h-8 text-yellow-500" />, earned: true },
  { id: 2, title: 'Flawless', description: 'Score 100% on any challenge', icon: <Trophy className="w-8 h-8 text-blue-500" />, earned: true },
  { id: 3, title: 'Speed Demon', description: 'Finish a quiz in under 2 minutes', icon: <Shield className="w-8 h-8 text-green-500" />, earned: true },
  { id: 4, title: 'Week Warrior', description: 'Maintain a 7-day streak', icon: <Crown className="w-8 h-8 text-purple-500" />, earned: true },
  { id: 5, title: 'Math Genius', description: 'Complete 10 math modules', icon: <Medal className="w-8 h-8 text-gray-400" />, earned: false },
  { id: 6, title: 'Top of Class', description: 'Reach #1 on the leaderboard', icon: <Crown className="w-8 h-8 text-gray-400" />, earned: false },
];

export default function Achievements() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-10 sm:p-12 rounded-[2rem] shadow-lg border-b-[6px] border-purple-800 text-white flex flex-col sm:flex-row items-center justify-between text-center sm:text-left relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100 drop-shadow-sm">{t('achievements.title')}</h1>
          <p className="text-indigo-100 text-lg font-medium max-w-lg">{t('achievements.subtitle')}</p>
        </div>
        <div className="mt-8 sm:mt-0 relative z-10 bg-white/20 p-8 rounded-3xl backdrop-blur-md border border-white/30 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-widest text-indigo-100 mb-2">{t('achievements.total_xp')}</p>
          <p className="text-5xl font-black text-yellow-300 drop-shadow-md">4,250</p>
        </div>
        {/* Decorative elements */}
        <div className="absolute left-1/2 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl mix-blend-overlay"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
        {badges.map(badge => (
          <div key={badge.id} className={`p-8 rounded-[2rem] border-2 text-center transition-all duration-300 ${badge.earned ? 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-sm hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]' : 'bg-gray-50 dark:bg-gray-900 border-dashed border-gray-200 dark:border-gray-800 opacity-60'}`}>
            <div className={`w-20 h-20 mx-auto rounded-[1.5rem] flex items-center justify-center mb-6 shadow-sm border-b-4 ${badge.earned ? 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600' : 'bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 grayscale'}`}>
              <div className="transform scale-125">
                {badge.icon}
              </div>
            </div>
            <h3 className={`text-xl font-black mb-2 ${badge.earned ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>{badge.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
