import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n';
import { useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';
import { 
  DownloadCloud, Trash2, Play, HardDrive, WifiOff, CheckCircle2, 
  RefreshCw, Clock, BookOpen, AlertCircle
} from 'lucide-react';
import { 
  getDownloadedQuizzes, 
  removeDownloadedQuiz, 
  getDownloadedStorageSizeKB, 
  OfflineQuizItem 
} from '../lib/offlineQuizManager';

export const OfflineQuizPracticeHub: React.FC = () => {
  const { language } = useLanguage();
  const { isOnline, pendingSyncCount, triggerManualSync } = useToast();
  const navigate = useNavigate();
  const isVi = language === 'vi';

  const [quizzes, setQuizzes] = useState<OfflineQuizItem[]>(() => getDownloadedQuizzes());
  const [storageSizeKB, setStorageSizeKB] = useState<number>(() => getDownloadedStorageSizeKB());
  const [syncing, setSyncing] = useState<boolean>(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setQuizzes(getDownloadedQuizzes());
      setStorageSizeKB(getDownloadedStorageSizeKB());
    };
    window.addEventListener('learnix_offline_quizzes_changed', handleStorageChange);
    return () => window.removeEventListener('learnix_offline_quizzes_changed', handleStorageChange);
  }, []);

  const handleDelete = (quizId: string, title: string) => {
    removeDownloadedQuiz(quizId);
    setQuizzes(getDownloadedQuizzes());
    setStorageSizeKB(getDownloadedStorageSizeKB());
  };

  const handleSyncNow = async () => {
    setSyncing(true);
    try {
      await triggerManualSync();
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-[2rem] border-2 border-teal-100 dark:border-teal-900/60 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-black uppercase tracking-wider mb-2">
            <DownloadCloud className="w-4 h-4" />
            <span>{isVi ? 'Trung tâm Luyện tập Ngoại tuyến' : 'Offline Practice Hub'}</span>
          </div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">
            {isVi ? 'Bài kiểm tra đã tải về trên máy' : 'Downloaded Quizzes for Offline Practice'}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {isVi 
              ? 'Luyện tập không cần mạng Internet. Kết quả làm bài và điểm XP sẽ tự động lưu và đồng bộ lên đám mây khi bạn trực tuyến trở lại.' 
              : 'Practice anywhere without Wi-Fi. Your test results, scores, and XP are stored locally and sync instantly once reconnected.'}
          </p>
        </div>

        {/* Storage stats & Sync button */}
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
          <div className="px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>{quizzes.length} {isVi ? 'bài đã tải' : 'quizzes'} ({storageSizeKB} KB)</span>
          </div>

          {pendingSyncCount > 0 && (
            <button
              onClick={handleSyncNow}
              disabled={syncing || !isOnline}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                isOnline
                  ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
              title={isOnline ? (isVi ? 'Đồng bộ kết quả ngoại tuyến lên đám mây' : 'Sync pending results to cloud') : (isVi ? 'Chờ có kết nối mạng để đồng bộ' : 'Waiting for internet connection to sync')}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
              <span>{isVi ? `Đồng bộ ${pendingSyncCount} kết quả` : `Sync ${pendingSyncCount} Results`}</span>
            </button>
          )}
        </div>
      </div>

      {quizzes.length === 0 ? (
        <div className="p-8 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-center space-y-3 bg-gray-50/50 dark:bg-gray-900/20">
          <div className="w-12 h-12 mx-auto rounded-full bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
            <DownloadCloud className="w-6 h-6" />
          </div>
          <p className="font-bold text-gray-700 dark:text-gray-300 text-base">
            {isVi ? 'Chưa có bài kiểm tra nào được tải về' : 'No quizzes downloaded yet'}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            {isVi 
              ? 'Nhấn nút "Tải ngoại tuyến" ở bất kỳ chủ đề hoặc bài kiểm tra nào bên dưới để lưu vào máy và luyện tập khi mất kết nối.' 
              : 'Click the "Download Quiz" button on any lesson or quiz card to save it locally for offline study.'}
          </p>
          <button
            onClick={() => navigate('/explore')}
            className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 text-white font-black text-xs hover:bg-teal-700 transition-all shadow-sm"
          >
            <BookOpen className="w-4 h-4" />
            <span>{isVi ? 'Khám phá bài kiểm tra ngay' : 'Explore Quizzes to Download'}</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quizzes.map((quiz) => (
            <div 
              key={quiz.id}
              className="p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-900/40 hover:border-teal-400 dark:hover:border-teal-500 transition-all flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-[11px] font-black">
                    <CheckCircle2 className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                    <span>{isVi ? 'Sẵn sàng Ngoại tuyến' : 'Offline Ready'}</span>
                  </span>
                  
                  <button
                    onClick={() => handleDelete(quiz.id, quiz.title)}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors"
                    title={isVi ? 'Xóa khỏi bộ nhớ' : 'Delete download'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-black text-base text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-1">
                  {quiz.title}
                </h3>
                
                {quiz.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {quiz.description}
                  </p>
                )}

                <div className="flex items-center gap-3 mt-3 text-xs text-gray-600 dark:text-gray-400 font-semibold">
                  <span>{quiz.totalQuestions} {isVi ? 'câu hỏi' : 'questions'}</span>
                  <span>•</span>
                  <span>{quiz.sizeBytes ? `${Math.round(quiz.sizeBytes / 1024 * 10) / 10} KB` : '12 KB'}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">
                  {isVi ? 'Đã tải: ' : 'Downloaded: '}
                  {new Date(quiz.downloadedAt).toLocaleDateString()}
                </span>
                
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => navigate(`/quiz/${quiz.id}?mode=review`)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-black text-xs hover:bg-teal-100 transition-all border border-teal-200 dark:border-teal-800"
                    title={isVi ? 'Ôn tập kèm giải thích tức thì' : 'Review Mode'}
                  >
                    <span>{isVi ? 'Ôn tập' : 'Review'}</span>
                  </button>
                  <button
                    onClick={() => navigate(`/quiz/${quiz.id}?mode=test`)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-black text-xs hover:bg-indigo-700 transition-all shadow-2xs"
                    title={isVi ? 'Kiểm tra bấm giờ' : 'Test Mode'}
                  >
                    <span>{isVi ? 'Thi thử' : 'Test'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
