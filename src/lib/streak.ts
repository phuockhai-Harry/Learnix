import { UserProfile } from '../auth';

export interface StreakData {
  streak: number;
  isCompletedToday: boolean;
  activityByDate: Record<string, number>;
  totalQuizzes: number;
}

export function calculateStreak(profile: UserProfile | null, submissions: any[] = []): StreakData {
  const activityByDate: Record<string, number> = {};

  submissions.forEach(sub => {
    let dateStr: string | null = null;
    if (sub.completedAt?.toDate) {
      dateStr = sub.completedAt.toDate().toLocaleDateString('en-CA');
    } else if (sub.completedAt instanceof Date) {
      dateStr = sub.completedAt.toLocaleDateString('en-CA');
    } else if (typeof sub.completedAt === 'string') {
      dateStr = sub.completedAt.split('T')[0];
    } else if (sub.completedAt?.seconds) {
      dateStr = new Date(sub.completedAt.seconds * 1000).toLocaleDateString('en-CA');
    }

    if (dateStr) {
      activityByDate[dateStr] = (activityByDate[dateStr] || 0) + 1;
    }
  });

  const today = new Date();
  const todayStr = today.toLocaleDateString('en-CA');

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toLocaleDateString('en-CA');

  // Also include lastActiveDate from profile if recorded
  if (profile?.lastActiveDate) {
    if (!activityByDate[profile.lastActiveDate]) {
      activityByDate[profile.lastActiveDate] = 1;
    }
  }

  const isCompletedToday = (activityByDate[todayStr] || 0) > 0 || profile?.lastActiveDate === todayStr;

  // Calculate continuous consecutive active days backwards
  let streak = 0;
  const checkDate = new Date(today);

  if (!isCompletedToday) {
    // If not completed today, check if yesterday was active to keep ongoing streak alive
    checkDate.setDate(checkDate.getDate() - 1);
  }

  while (true) {
    const dStr = checkDate.toLocaleDateString('en-CA');
    if (activityByDate[dStr] && activityByDate[dStr] > 0) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  // Also respect profile streakCount if profile.lastActiveDate is valid (today or yesterday)
  if (profile?.streakCount && profile.streakCount > 0) {
    if (profile.lastActiveDate === todayStr || profile.lastActiveDate === yesterdayStr) {
      streak = Math.max(streak, profile.streakCount);
    }
  }

  return {
    streak,
    isCompletedToday,
    activityByDate,
    totalQuizzes: submissions.length,
  };
}
