import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n';
import { useToast } from '../context/ToastContext';
import { 
  Download, Check, Trash2, Loader2, Sparkles, AlertCircle, HardDrive
} from 'lucide-react';
import { 
  isQuizDownloaded, 
  saveDownloadedQuiz, 
  removeDownloadedQuiz, 
  OfflineQuizItem 
} from '../lib/offlineQuizManager';

interface QuizDownloadButtonProps {
  quizId: string;
  quizTitle: string;
  subject?: string;
  grade?: number;
  description?: string;
  questions?: Array<{
    question: string;
    options: string[];
    answerIndex: number;
    explanation?: string;
  }>;
  onDownloadedChange?: (downloaded: boolean) => void;
  className?: string;
  compact?: boolean;
}

export const QuizDownloadButton: React.FC<QuizDownloadButtonProps> = ({
  quizId,
  quizTitle,
  subject,
  grade,
  description,
  questions,
  onDownloadedChange,
  className = '',
  compact = false
}) => {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const isVi = language === 'vi';

  const [downloaded, setDownloaded] = useState<boolean>(() => isQuizDownloaded(quizId));
  const [downloading, setDownloading] = useState<boolean>(false);

  useEffect(() => {
    const handleStorageChange = (e: any) => {
      if (e.detail?.updatedQuizId === quizId || e.detail?.removedQuizId === quizId || !e.detail) {
        setDownloaded(isQuizDownloaded(quizId));
      }
    };
    window.addEventListener('learnix_offline_quizzes_changed', handleStorageChange);
    return () => window.removeEventListener('learnix_offline_quizzes_changed', handleStorageChange);
  }, [quizId]);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (downloading) return;

    if (downloaded) {
      // Remove from downloaded storage
      removeDownloadedQuiz(quizId);
      setDownloaded(false);
      onDownloadedChange?.(false);
      showToast({
        type: 'info',
        title: isVi ? 'Đã gỡ bài tập tải về' : 'Quiz Removed from Offline Cache',
        message: isVi 
          ? `Đã xóa bài "${quizTitle}" khỏi bộ nhớ ngoại tuyến để giải phóng dung lượng.` 
          : `Removed "${quizTitle}" from your offline device storage.`,
        duration: 3000
      });
      return;
    }

    setDownloading(true);

    try {
      let resolvedQuestions = questions || [];

      // If questions are not passed, try to fetch from builtin lessons or firestore
      if (resolvedQuestions.length === 0) {
        const { getLessons } = await import('../data/lessons');
        const lessons = getLessons(language, quizId);
        if (lessons[quizId as keyof typeof lessons]) {
          resolvedQuestions = lessons[quizId as keyof typeof lessons].questions;
        } else {
          const { doc, getDoc } = await import('firebase/firestore');
          const { db } = await import('../firebase');
          const docSnap = await getDoc(doc(db, 'quizzes', quizId));
          if (docSnap.exists()) {
            const data = docSnap.data();
            resolvedQuestions = JSON.parse(data.questionsData || '[]');
          }
        }
      }

      if (resolvedQuestions.length === 0) {
        throw new Error(isVi ? 'Không tìm thấy nội dung câu hỏi để tải về.' : 'No questions found for this quiz.');
      }

      const item: OfflineQuizItem = {
        id: quizId,
        title: quizTitle,
        subject,
        grade,
        description,
        questions: resolvedQuestions,
        totalQuestions: resolvedQuestions.length,
        downloadedAt: new Date().toISOString(),
        sizeBytes: new Blob([JSON.stringify(resolvedQuestions)]).size
      };

      saveDownloadedQuiz(item);
      setDownloaded(true);
      onDownloadedChange?.(true);

      showToast({
        type: 'success',
        title: isVi ? 'Đã tải thành công!' : 'Quiz Downloaded for Offline Practice!',
        message: isVi 
          ? `Đã lưu "${quizTitle}" vào bộ nhớ máy. Bạn có thể luyện tập bất cứ lúc nào ngay cả khi không có mạng!` 
          : `"${quizTitle}" is saved to your device. You can practice anytime even without internet!`,
        duration: 4000
      });
    } catch (err: any) {
      console.error('Download quiz error:', err);
      showToast({
        type: 'error',
        title: isVi ? 'Không thể tải về' : 'Download Failed',
        message: err.message || (isVi ? 'Đã có lỗi xảy ra khi tải bài kiểm tra.' : 'An error occurred while downloading.'),
        duration: 4000
      });
    } finally {
      setDownloading(false);
    }
  };

  if (compact) {
    return (
      <button
        onClick={handleDownload}
        disabled={downloading}
        title={downloaded 
          ? (isVi ? 'Đã tải ngoại tuyến. Nhấp để xóa' : 'Downloaded offline. Click to remove') 
          : (isVi ? 'Tải về để làm bài ngoại tuyến' : 'Download for offline practice')}
        className={`p-2 rounded-xl border transition-all active:scale-95 ${
          downloaded
            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 hover:text-emerald-700'
            : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-teal-500 hover:text-teal-600'
        } ${className}`}
      >
        {downloading ? (
          <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
        ) : downloaded ? (
          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <Download className="w-4 h-4" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all active:scale-95 shadow-2xs ${
        downloaded
          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-950/40 dark:hover:text-red-400'
          : 'bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/60'
      } ${className}`}
    >
      {downloading ? (
        <>
          <Loader2 className="w-3.5 h-3.5 animate-spin text-teal-600" />
          <span>{isVi ? 'Đang tải...' : 'Downloading...'}</span>
        </>
      ) : downloaded ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{isVi ? 'Đã tải (Ngoại tuyến)' : 'Offline Ready'}</span>
        </>
      ) : (
        <>
          <Download className="w-3.5 h-3.5" />
          <span>{isVi ? 'Tải ngoại tuyến' : 'Download Quiz'}</span>
        </>
      )}
    </button>
  );
};
