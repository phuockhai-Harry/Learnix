/**
 * Offline Quiz Storage & Sync Service for Learnix PWA
 * 
 * Supports:
 * - Downloading quizzes with full questions, options, metadata for offline practice
 * - Tracking download state (status, timestamp, version)
 * - Removing downloaded quizzes to free space
 * - Storing offline quiz results / submissions
 * - Auto-syncing completed quizzes to Firestore & Cloud storage on reconnect
 */

export interface OfflineQuizItem {
  id: string;
  title: string;
  subject?: string;
  grade?: number;
  description?: string;
  questions: Array<{
    question: string;
    options: string[];
    answerIndex: number;
    explanation?: string;
  }>;
  totalQuestions: number;
  downloadedAt: string;
  sizeBytes?: number;
  creatorId?: string;
  timeLimitSeconds?: number;
}

const OFFLINE_QUIZZES_KEY = 'learnix_downloaded_quizzes';

/**
 * Get all downloaded quizzes stored in local offline storage
 */
export function getDownloadedQuizzes(): OfflineQuizItem[] {
  try {
    const raw = localStorage.getItem(OFFLINE_QUIZZES_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading downloaded quizzes:', err);
    return [];
  }
}

/**
 * Check if a quiz is currently downloaded for offline use
 */
export function isQuizDownloaded(quizId: string): boolean {
  const quizzes = getDownloadedQuizzes();
  return quizzes.some(q => q.id === quizId);
}

/**
 * Get a specific downloaded quiz
 */
export function getDownloadedQuiz(quizId: string): OfflineQuizItem | undefined {
  const quizzes = getDownloadedQuizzes();
  return quizzes.find(q => q.id === quizId);
}

/**
 * Save or update a downloaded quiz in local storage
 */
export function saveDownloadedQuiz(quiz: OfflineQuizItem): void {
  const quizzes = getDownloadedQuizzes().filter(q => q.id !== quiz.id);
  quizzes.push(quiz);
  localStorage.setItem(OFFLINE_QUIZZES_KEY, JSON.stringify(quizzes));
  window.dispatchEvent(new CustomEvent('learnix_offline_quizzes_changed', { 
    detail: { count: quizzes.length, updatedQuizId: quiz.id, action: 'download' } 
  }));
}

/**
 * Remove a downloaded quiz from local storage
 */
export function removeDownloadedQuiz(quizId: string): void {
  const quizzes = getDownloadedQuizzes().filter(q => q.id !== quizId);
  localStorage.setItem(OFFLINE_QUIZZES_KEY, JSON.stringify(quizzes));
  window.dispatchEvent(new CustomEvent('learnix_offline_quizzes_changed', { 
    detail: { count: quizzes.length, removedQuizId: quizId, action: 'delete' } 
  }));
}

/**
 * Calculate approximate storage size of downloaded quizzes in KB
 */
export function getDownloadedStorageSizeKB(): number {
  try {
    const raw = localStorage.getItem(OFFLINE_QUIZZES_KEY) || '';
    return Math.round((new Blob([raw]).size / 1024) * 10) / 10;
  } catch {
    return 0;
  }
}
