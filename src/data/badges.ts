export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // lucide icon name or emoji
  color: string;
}

export const BADGES: Badge[] = [
  { id: 'first_blood', name: 'First Steps', description: 'Complete your first quiz.', icon: '🎯', color: 'bg-blue-100 text-blue-600 border-blue-200' },
  { id: 'learner_5', name: 'Learner', description: 'Complete 5 quizzes.', icon: '📚', color: 'bg-green-100 text-green-600 border-green-200' },
  { id: 'scholar_10', name: 'Scholar', description: 'Complete 10 quizzes.', icon: '🎓', color: 'bg-purple-100 text-purple-600 border-purple-200' },
  { id: 'brainiac_25', name: 'Brainiac', description: 'Complete 25 quizzes.', icon: '🧠', color: 'bg-pink-100 text-pink-600 border-pink-200' },
  { id: 'genius_50', name: 'Genius', description: 'Complete 50 quizzes.', icon: '⚡', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
  { id: 'streak_3', name: 'Consistent', description: 'Reach a 3-day streak.', icon: '🔥', color: 'bg-orange-100 text-orange-600 border-orange-200' },
  { id: 'streak_7', name: 'Dedicated', description: 'Reach a 7-day streak.', icon: '🔥', color: 'bg-orange-100 text-orange-600 border-orange-200' },
  { id: 'streak_14', name: 'Unstoppable', description: 'Reach a 14-day streak.', icon: '🔥', color: 'bg-orange-100 text-orange-600 border-orange-200' },
  { id: 'streak_30', name: 'Legendary Habit', description: 'Reach a 30-day streak.', icon: '🌋', color: 'bg-red-100 text-red-600 border-red-200' },
  { id: 'perfect_1', name: 'Flawless', description: 'Get a perfect score on a quiz.', icon: '🌟', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
  { id: 'perfect_5', name: 'Perfectionist', description: 'Get 5 perfect scores.', icon: '⭐', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
  { id: 'perfect_10', name: 'Unbeatable', description: 'Get 10 perfect scores.', icon: '🏆', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
  { id: 'xp_1000', name: 'Rising Star', description: 'Earn 1,000 XP.', icon: '✨', color: 'bg-indigo-100 text-indigo-600 border-indigo-200' },
  { id: 'xp_5000', name: 'High Achiever', description: 'Earn 5,000 XP.', icon: '🚀', color: 'bg-indigo-100 text-indigo-600 border-indigo-200' },
  { id: 'xp_10000', name: 'Mastermind', description: 'Earn 10,000 XP.', icon: '👑', color: 'bg-indigo-100 text-indigo-600 border-indigo-200' },
  { id: 'night_owl', name: 'Night Owl', description: 'Complete a quiz after 10 PM.', icon: '🦉', color: 'bg-gray-800 text-gray-200 border-gray-700' },
  { id: 'early_bird', name: 'Early Bird', description: 'Complete a quiz before 7 AM.', icon: '🌅', color: 'bg-orange-50 text-orange-500 border-orange-200' },
  { id: 'speed_demon', name: 'Speed Demon', description: 'Finish a quiz very quickly.', icon: '⚡', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
  { id: 'weekend_warrior', name: 'Weekend Warrior', description: 'Complete a quiz on a weekend.', icon: '🎉', color: 'bg-teal-100 text-teal-600 border-teal-200' },
  { id: 'explorer', name: 'Explorer', description: 'Try different subjects.', icon: '🗺️', color: 'bg-emerald-100 text-emerald-600 border-emerald-200' }
];

export function checkNewBadges(
  currentBadges: string[],
  stats: {
    totalQuizzes: number;
    streak: number;
    perfectScores: number;
    totalXP: number;
    hourOfDay: number;
    dayOfWeek: number;
  }
): string[] {
  const newBadges: string[] = [];
  const earned = new Set(currentBadges);

  const check = (id: string, condition: boolean) => {
    if (condition && !earned.has(id)) {
      newBadges.push(id);
      earned.add(id);
    }
  };

  // Quizzes
  check('first_blood', stats.totalQuizzes >= 1);
  check('learner_5', stats.totalQuizzes >= 5);
  check('scholar_10', stats.totalQuizzes >= 10);
  check('brainiac_25', stats.totalQuizzes >= 25);
  check('genius_50', stats.totalQuizzes >= 50);

  // Streaks
  check('streak_3', stats.streak >= 3);
  check('streak_7', stats.streak >= 7);
  check('streak_14', stats.streak >= 14);
  check('streak_30', stats.streak >= 30);

  // Perfect Scores
  check('perfect_1', stats.perfectScores >= 1);
  check('perfect_5', stats.perfectScores >= 5);
  check('perfect_10', stats.perfectScores >= 10);

  // XP
  check('xp_1000', stats.totalXP >= 1000);
  check('xp_5000', stats.totalXP >= 5000);
  check('xp_10000', stats.totalXP >= 10000);

  // Time based
  check('night_owl', stats.hourOfDay >= 22 || stats.hourOfDay < 4);
  check('early_bird', stats.hourOfDay >= 4 && stats.hourOfDay < 7);
  check('weekend_warrior', stats.dayOfWeek === 0 || stats.dayOfWeek === 6);

  // Explorer - handled loosely here based on total for now, or just give it if they have done 3 quizzes
  check('explorer', stats.totalQuizzes >= 3);
  
  // Speed demon - we will just award it randomly for fun as a placeholder, or if they score perfectly (placeholder logic)
  check('speed_demon', stats.perfectScores >= 2); 

  return newBadges;
}
