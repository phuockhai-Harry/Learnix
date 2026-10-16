import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  query, 
  where, 
  onSnapshot, 
  serverTimestamp, 
  Unsubscribe 
} from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from '../firebase';

export interface LessonProgress {
  id: string;
  studentId: string;
  lessonId: string;
  title: string;
  subject: string;
  grade: number;
  status: 'not_started' | 'in_progress' | 'completed';
  completed: boolean;
  score: number;
  mastery: number; // 0 - 100 percentage
  lastAccessedAt?: any;
  completedAt?: any;
  updatedAt?: any;
}

export interface LearningPathMilestone {
  id: string;
  title: string;
  subject: string;
  lessonId: string;
  completed: boolean;
  xpReward: number;
  targetOrder: number;
  description?: string;
}

export interface PersonalizedLearningPath {
  id: string; // studentId
  studentId: string;
  grade: number;
  targetGoal: string;
  overallProgress: number; // 0 - 100 percentage
  dailyPaceMinutes: number;
  strengths: string[];
  focusAreas: string[];
  milestones: LearningPathMilestone[];
  recommendedModules: string[];
  updatedAt?: any;
}

export const getProgressDocId = (studentId: string, lessonId: string): string => {
  const sanitizedLessonId = lessonId.replace(/[^a-zA-Z0-9_-]/g, '_');
  return `prog_${studentId}_${sanitizedLessonId}`;
};

/**
 * Real-time listener for all lesson progress records belonging to a student.
 * Updates immediately across all open tabs, phones, and devices.
 */
export function subscribeStudentProgress(
  studentId: string,
  onUpdate: (progressList: LessonProgress[]) => void,
  onError?: (err: any) => void
): Unsubscribe {
  if (!studentId || !auth.currentUser) {
    onUpdate([]);
    return () => {};
  }

  const q = query(collection(db, 'progress'), where('studentId', '==', studentId));
  
  return onSnapshot(
    q,
    (snapshot) => {
      const results: LessonProgress[] = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      } as LessonProgress));
      
      // Update local storage backup
      try {
        localStorage.setItem(`learnix_cached_progress_${studentId}`, JSON.stringify(results));
      } catch (e) {}

      // Dispatch sync event for UI notification
      window.dispatchEvent(new CustomEvent('learnix_cloud_sync_update', {
        detail: { type: 'progress', count: results.length, timestamp: Date.now() }
      }));

      onUpdate(results);
    },
    (error) => {
      console.warn('Real-time progress sync notice:', error);
      // Fallback to local cache
      try {
        const cached = localStorage.getItem(`learnix_cached_progress_${studentId}`);
        if (cached) {
          onUpdate(JSON.parse(cached));
        }
      } catch (e) {}

      // If user signed out, listener disconnects expectedly
      if (!auth.currentUser) {
        return;
      }

      if (onError) {
        onError(error);
      } else {
        try {
          handleFirestoreError(error, OperationType.LIST, 'progress');
        } catch (e) {}
      }
    }
  );
}

/**
 * Real-time listener for the student's personalized learning path.
 * Syncs milestone progression, custom target pace, and recommendations in real-time.
 */
export function subscribePersonalizedLearningPath(
  studentId: string,
  onUpdate: (path: PersonalizedLearningPath | null) => void,
  onError?: (err: any) => void
): Unsubscribe {
  if (!studentId || !auth.currentUser) {
    onUpdate(null);
    return () => {};
  }

  const docRef = doc(db, 'learningPaths', studentId);

  return onSnapshot(
    docRef,
    (docSnap) => {
      if (docSnap.exists()) {
        const pathData = { id: docSnap.id, ...docSnap.data() } as PersonalizedLearningPath;
        try {
          localStorage.setItem(`learnix_cached_learning_path_${studentId}`, JSON.stringify(pathData));
        } catch (e) {}

        window.dispatchEvent(new CustomEvent('learnix_cloud_sync_update', {
          detail: { type: 'learningPath', timestamp: Date.now() }
        }));

        onUpdate(pathData);
      } else {
        onUpdate(null);
      }
    },
    (error) => {
      console.warn('Real-time learning path sync notice:', error);
      try {
        const cached = localStorage.getItem(`learnix_cached_learning_path_${studentId}`);
        if (cached) {
          onUpdate(JSON.parse(cached));
        }
      } catch (e) {}

      // If user signed out, listener disconnects expectedly
      if (!auth.currentUser) {
        return;
      }

      if (onError) {
        onError(error);
      } else {
        try {
          handleFirestoreError(error, OperationType.GET, `learningPaths/${studentId}`);
        } catch (e) {}
      }
    }
  );
}

/**
 * Real-time listener for quiz submissions.
 */
export function subscribeStudentSubmissions(
  studentId: string,
  onUpdate: (subs: any[]) => void,
  onError?: (err: any) => void
): Unsubscribe {
  if (!studentId || !auth.currentUser) {
    onUpdate([]);
    return () => {};
  }

  const q = query(collection(db, 'submissions'), where('studentId', '==', studentId));

  return onSnapshot(
    q,
    (snapshot) => {
      const subs = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      }));

      window.dispatchEvent(new CustomEvent('learnix_cloud_sync_update', {
        detail: { type: 'submissions', count: subs.length, timestamp: Date.now() }
      }));

      onUpdate(subs);
    },
    (error) => {
      console.warn('Real-time submissions sync notice:', error);
      if (!auth.currentUser) return;
      if (onError) onError(error);
    }
  );
}

/**
 * Saves lesson progress to Cloud Firestore.
 * Automatically updates both the individual progress record and the personalized learning path milestones.
 */
export async function saveLessonProgress(data: {
  studentId: string;
  lessonId: string;
  title: string;
  subject: string;
  grade: number;
  score: number;
  mastery: number;
  status?: 'not_started' | 'in_progress' | 'completed';
}): Promise<void> {
  const { studentId, lessonId, title, subject, grade, score, mastery, status = 'completed' } = data;
  const progressId = getProgressDocId(studentId, lessonId);

  const payload = {
    studentId,
    lessonId,
    title,
    subject,
    grade,
    status,
    completed: status === 'completed',
    score,
    mastery: Math.min(100, Math.max(0, mastery)),
    lastAccessedAt: serverTimestamp(),
    completedAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  try {
    const progRef = doc(db, 'progress', progressId);
    await setDoc(progRef, payload, { merge: true });

    // Also update milestones in personalized learning path if present
    await syncMilestoneToLearningPath(studentId, lessonId, grade);

  } catch (err) {
    console.warn('Could not save progress directly to cloud, saving locally for sync:', err);
    // Queue offline sync
    try {
      const cachedList: any[] = JSON.parse(localStorage.getItem(`learnix_pending_progress_${studentId}`) || '[]');
      cachedList.push({ ...payload, clientTimestamp: Date.now() });
      localStorage.setItem(`learnix_pending_progress_${studentId}`, JSON.stringify(cachedList));
    } catch (e) {}
  }
}

/**
 * Updates a milestone in the student's personalized learning path when a lesson is finished.
 */
async function syncMilestoneToLearningPath(studentId: string, lessonId: string, grade: number) {
  try {
    const pathRef = doc(db, 'learningPaths', studentId);
    const snap = await getDoc(pathRef);

    if (snap.exists()) {
      const pathData = snap.data() as PersonalizedLearningPath;
      let changed = false;
      const updatedMilestones = (pathData.milestones || []).map(m => {
        if (m.lessonId === lessonId || lessonId.includes(m.lessonId) || m.lessonId.includes(lessonId)) {
          if (!m.completed) {
            changed = true;
            return { ...m, completed: true };
          }
        }
        return m;
      });

      if (changed || pathData.overallProgress !== undefined) {
        const completedCount = updatedMilestones.filter(m => m.completed).length;
        const totalCount = Math.max(1, updatedMilestones.length);
        const newProgress = Math.round((completedCount / totalCount) * 100);

        await updateDoc(pathRef, {
          milestones: updatedMilestones,
          overallProgress: newProgress,
          updatedAt: serverTimestamp()
        });
      }
    } else {
      // If path doesn't exist yet, generate standard path with this lesson completed
      await initializeStudentLearningPath(studentId, grade);
    }
  } catch (err) {
    console.warn('Notice: learning path milestone sync error:', err);
  }
}

/**
 * Generates and seeds an initial personalized learning path for a student based on their grade.
 */
export async function initializeStudentLearningPath(studentId: string, grade: number, isVi: boolean = true): Promise<PersonalizedLearningPath> {
  const g = grade || 5;

  const defaultMilestones: LearningPathMilestone[] = [
    {
      id: `ms-${g}-1`,
      title: isVi ? `Toán học Lớp ${g}: Phân số và Số học Ứng dụng` : `Grade ${g} Math: Fractions & Arithmetic`,
      subject: isVi ? 'Toán học' : 'Mathematics',
      lessonId: `grade-${g}-topic-1`,
      completed: false,
      xpReward: 150,
      targetOrder: 1,
      description: isVi ? 'Củng cố nền tảng số học và giải toán đố nhiều bước.' : 'Master foundation arithmetic and multistep problem solving.'
    },
    {
      id: `ms-${g}-2`,
      title: isVi ? `Khoa học Tự nhiên Lớp ${g}: Năng lượng & Sinh quyển` : `Grade ${g} Science: Energy & Biosphere`,
      subject: isVi ? 'Khoa học Tự nhiên' : 'Natural Science',
      lessonId: `grade-${g}-topic-2`,
      completed: false,
      xpReward: 150,
      targetOrder: 2,
      description: isVi ? 'Khám phá sự chuyển hóa năng lượng và hệ sinh thái đa dạng.' : 'Explore energy transformation and living ecosystems.'
    },
    {
      id: `ms-${g}-3`,
      title: isVi ? 'Ký hiệu Khoa học & Lũy thừa lớn' : 'Scientific Notation & Exponents',
      subject: isVi ? 'Toán học Nâng cao' : 'Advanced Mathematics',
      lessonId: 'scientific-notation',
      completed: false,
      xpReward: 200,
      targetOrder: 3,
      description: isVi ? 'Kỹ năng biểu diễn số siêu nhỏ và siêu lớn một cách chính xác.' : 'Express astronomical and microscopic numbers with precision.'
    },
    {
      id: `ms-${g}-4`,
      title: isVi ? 'Tư duy Logic & Bảng chân lý cơ bản' : 'Logic Foundations & Truth Tables',
      subject: isVi ? 'Khoa học Máy tính & Logic' : 'Computer Science & Logic',
      lessonId: 'logic',
      completed: false,
      xpReward: 200,
      targetOrder: 4,
      description: isVi ? 'Cổng logic AND, OR, XOR và phương pháp tư duy suy luận chặt chẽ.' : 'Boolean algebra, digital logic gates, and deductive reasoning.'
    },
    {
      id: `ms-${g}-5`,
      title: isVi ? `Ngữ văn & Đọc hiểu Lớp ${g}: Phân tích Ngữ cảnh` : `Grade ${g} Literature: Reading Comprehension`,
      subject: isVi ? 'Ngữ văn' : 'Literature',
      lessonId: `grade-${g}-topic-3`,
      completed: false,
      xpReward: 150,
      targetOrder: 5,
      description: isVi ? 'Mở rộng vốn từ học thuật và rèn luyện kỹ năng tóm tắt văn bản.' : 'Expand academic vocabulary and master textual synthesis.'
    }
  ];

  const initialPath: PersonalizedLearningPath = {
    id: studentId,
    studentId,
    grade: g,
    targetGoal: isVi ? `Hoàn thành xuất sắc chương trình chuẩn Lớp ${g}` : `Achieve Grade ${g} Curriculum Mastery`,
    overallProgress: 0,
    dailyPaceMinutes: 30,
    strengths: [isVi ? 'Tư duy logic hình ảnh' : 'Visual Logic Thinking', isVi ? 'Kiên trì giải toán' : 'Arithmetic Persistence'],
    focusAreas: [isVi ? 'Toán đố có lời văn' : 'Word Problems', isVi ? 'Thuật ngữ Khoa học' : 'Scientific Terminology'],
    milestones: defaultMilestones,
    recommendedModules: [`grade-${g}-topic-1`, 'scientific-notation', 'logic']
  };

  try {
    const pathRef = doc(db, 'learningPaths', studentId);
    await setDoc(pathRef, {
      ...initialPath,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (err) {
    console.warn('Saved learning path locally due to Firestore connectivity:', err);
    try {
      localStorage.setItem(`learnix_cached_learning_path_${studentId}`, JSON.stringify(initialPath));
    } catch (e) {}
  }

  return initialPath;
}

/**
 * Updates daily pace or learning goal in the personalized learning path.
 */
export async function updateLearningPathSettings(
  studentId: string,
  settings: { dailyPaceMinutes?: number; targetGoal?: string }
): Promise<void> {
  const pathRef = doc(db, 'learningPaths', studentId);
  const payload: Record<string, any> = {
    updatedAt: serverTimestamp()
  };
  if (typeof settings.dailyPaceMinutes === 'number') {
    payload.dailyPaceMinutes = settings.dailyPaceMinutes;
  }
  if (settings.targetGoal) {
    payload.targetGoal = settings.targetGoal;
  }

  try {
    await updateDoc(pathRef, payload);
  } catch (err) {
    console.error('Failed to update learning path settings in cloud:', err);
    throw err;
  }
}
