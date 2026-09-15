import React from 'react';
import { useLanguage } from '../i18n';
import { Calendar, Flame, Zap, CheckCircle, Clock } from 'lucide-react';

export default function Practice() {
  const { t } = useLanguage();
  
  const streak = 14;
  
  const dailyChallenges = [
    { id: 1, title: 'Complete 3 Math problems', xp: 50, completed: true },
    { id: 2, title: 'Score 100% on any quiz', xp: 100, completed: false },
    { id: 3, title: 'Learn a new concept in Computer Science', xp: 150, completed: false },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Streak Card */}
        <div className="bg-gradient-to-br from-orange-400 to-red-500 p-8 rounded-[2rem] shadow-lg border-b-[6px] border-red-700 text-white md:col-span-1 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-4">
              <Flame className="w-12 h-12 text-yellow-300 drop-shadow-sm" />
            </div>
            <h2 className="text-6xl font-black mb-1 drop-shadow-sm">{streak}</h2>
            <p className="font-black text-xl text-orange-50 uppercase tracking-widest">{t('practice.streak')}</p>
            <p className="text-orange-100 mt-4 font-medium px-4">{t('practice.streak_subtitle')}</p>
          </div>
          {/* Decorative burst */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500 opacity-20 blur-3xl rounded-full"></div>
        </div>
        
        {/* Daily Challenges */}
        <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-[2rem] shadow-sm border-2 border-gray-100 dark:border-gray-700 md:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">{t('practice.quests')}</h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">{t('practice.quests_subtitle')}</p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/30 border-2 border-teal-100 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-5 py-3 rounded-2xl font-black flex items-center space-x-2 shrink-0">
              <Clock className="w-5 h-5" />
              <span>{t('practice.time_left')}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {dailyChallenges.map(challenge => (
              <div key={challenge.id} className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-teal-400 dark:hover:border-teal-600 transition-colors gap-4">
                <div className="flex items-center space-x-5">
                  <div className={`shrink-0 p-3 rounded-xl border-2 transition-colors ${challenge.completed ? 'bg-green-100 border-green-200 text-green-600' : 'bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600 text-gray-400 group-hover:bg-teal-50 group-hover:border-teal-200'}`}>
                    <CheckCircle className={`w-7 h-7 ${challenge.completed ? '' : 'opacity-50'}`} />
                  </div>
                  <div>
                    <h3 className={`font-black text-lg ${challenge.completed ? 'text-gray-400 line-through dark:text-gray-500' : 'text-gray-900 dark:text-gray-100'}`}>
                      {challenge.title}
                    </h3>
                    <p className={`text-sm font-black flex items-center space-x-1 mt-1 ${challenge.completed ? 'text-gray-400' : 'text-teal-600 dark:text-teal-400'}`}>
                      <Zap className="w-4 h-4 fill-current" />
                      <span>{challenge.xp} XP</span>
                    </p>
                  </div>
                </div>
                {!challenge.completed && (
                  <button className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all border-b-4 border-black dark:border-gray-300 active:border-b-0 active:translate-y-1 w-full sm:w-auto shrink-0">
                    {t('practice.go')}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-[2rem] shadow-sm border-2 border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-xl text-blue-600"><Calendar className="w-6 h-6" /></div>
          <span>{t('practice.history')}</span>
        </h2>
        
        {/* Placeholder for an activity heatmap */}
        <div className="grid grid-cols-7 gap-3 sm:gap-4 max-w-2xl mx-auto sm:mx-0">
          {[...Array(28)].map((_, i) => {
            const intensity = Math.random();
            let bgClass = "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700";
            if (intensity > 0.8) bgClass = "bg-teal-500 border-teal-600 text-white";
            else if (intensity > 0.5) bgClass = "bg-teal-400 border-teal-500 text-teal-900";
            else if (intensity > 0.2) bgClass = "bg-teal-100 border-teal-200 dark:bg-teal-900 dark:border-teal-800 text-teal-700";
            
            return (
              <div key={i} className={`aspect-square rounded-2xl border-b-4 ${bgClass} transition-transform hover:-translate-y-1 cursor-pointer flex items-center justify-center`} title={`Activity level ${Math.round(intensity * 10)}`}>
                {intensity > 0.5 && <Flame className="w-4 h-4 opacity-50" />}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
