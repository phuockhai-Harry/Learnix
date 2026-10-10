import { collection, doc, setDoc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { saveLessonProgress } from '../services/progressSyncService';

export interface PendingSubmission {
  id: string;
  quizId: string;
  quizTitle: string;
  studentId: string;
  teacherId: string;
  score: number;
  completedAtIso: string;
  xpDelta: number;
  newBadges?: string[];
  streakInfo?: {
    newStreak: number;
    todayStr: string;
  };
}

const STORAGE_KEY = 'learnix_pending_offline_submissions';

export function getPendingSubmissions(): PendingSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading pending offline submissions:', err);
    return [];
  }
}

export function savePendingSubmission(sub: Omit<PendingSubmission, 'id' | 'completedAtIso'>): PendingSubmission {
  const pending = getPendingSubmissions();
  const newEntry: PendingSubmission = {
    ...sub,
    id: 'offline_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    completedAtIso: new Date().toISOString()
  };
  pending.push(newEntry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pending));
  window.dispatchEvent(new CustomEvent('learnix_pending_sync_change', { detail: { count: pending.length } }));
  return newEntry;
}

export function clearPendingSubmissions(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('learnix_pending_sync_change', { detail: { count: 0 } }));
}

/**
 * Syncs any offline submissions stored in localStorage up to Firestore.
 * Returns the number of synced items.
 */
export async function syncPendingSubmissions(studentUserId?: string): Promise<number> {
  const pending = getPendingSubmissions();
  if (pending.length === 0) return 0;

  let successCount = 0;
  const remaining: PendingSubmission[] = [];

  for (const item of pending) {
    try {
      // 1. Write submission document
      const subRef = doc(collection(db, 'submissions'));
      await setDoc(subRef, {
        quizId: item.quizId,
        quizTitle: item.quizTitle,
        studentId: item.studentId,
        teacherId: item.teacherId,
        score: item.score,
        completedAt: serverTimestamp(),
        syncedFromOffline: true,
        offlineCompletedAt: item.completedAtIso
      });

      // Synchronize lesson completion to Cloud Storage
      let subject = 'General Knowledge';
      if (item.quizId.includes('math') || item.quizId.includes('scientific-notation')) subject = 'Mathematics';
      else if (item.quizId.includes('logic') || item.quizId.includes('code')) subject = 'Computer Science';
      else if (item.quizId.includes('topic-1')) subject = 'Mathematics';
      else if (item.quizId.includes('topic-2')) subject = 'Natural Science';
      else if (item.quizId.includes('topic-3')) subject = 'Literature';

      await saveLessonProgress({
        studentId: item.studentId,
        lessonId: item.quizId,
        title: item.quizTitle || 'Lesson Quiz',
        subject,
        grade: 5,
        score: item.score,
        mastery: 100,
        status: 'completed'
      }).catch(e => console.warn('Sync lesson progress notice:', e));

      // 2. Update user XP and streak if needed
      const userId = studentUserId || item.studentId;
      if (userId) {
        const userRef = doc(db, 'users', userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const userData = userSnap.data();
          const currentXP = userData.xp || 0;
          const currentBadges = userData.earnedBadges || [];
          const updatedBadges = Array.from(new Set([...currentBadges, ...(item.newBadges || [])]));

          const updatePayload: Record<string, any> = {
            xp: currentXP + (item.xpDelta || 0),
            earnedBadges: updatedBadges,
            updatedAt: serverTimestamp()
          };

          if (item.streakInfo) {
            updatePayload.streakCount = Math.max(userData.streakCount || 0, item.streakInfo.newStreak);
            updatePayload.lastActiveDate = item.streakInfo.todayStr;
          }

          await updateDoc(userRef, updatePayload);
        }
      }

      successCount++;
    } catch (err) {
      console.warn('Could not sync pending submission:', item.id, err);
      remaining.push(item);
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining));
  window.dispatchEvent(new CustomEvent('learnix_pending_sync_change', { detail: { count: remaining.length } }));

  return successCount;
}
