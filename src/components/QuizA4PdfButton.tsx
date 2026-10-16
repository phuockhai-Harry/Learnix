import React, { useState } from 'react';
import { FileDown, Printer, Check, Loader2, KeyRound, ChevronDown } from 'lucide-react';
import { CurriculumQuiz } from '../data/curriculumData';
import { generateQuizA4PDF } from '../lib/quizPdfGenerator';
import { useLanguage } from '../i18n';
import { useToast } from '../context/ToastContext';

interface QuizA4PdfButtonProps {
  quiz: CurriculumQuiz;
  compact?: boolean;
  className?: string;
}

export const QuizA4PdfButton: React.FC<QuizA4PdfButtonProps> = ({
  quiz,
  compact = false,
  className = ''
}) => {
  const { language } = useLanguage();
  const { showToast } = useToast();
  const isVi = language === 'vi';

  const [generating, setGenerating] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleExport = async (withKey: boolean) => {
    setShowDropdown(false);
    if (generating) return;

    setGenerating(true);
    try {
      await generateQuizA4PDF(quiz, {
        includeAnswerKey: withKey,
        schoolName: 'TRƯỜNG THCS LEARNIX'
      });

      showToast({
        type: 'success',
        title: isVi ? 'Đã xuất PDF 1 trang A4 thành công!' : 'A4 1-Page PDF Exported!',
        message: isVi
          ? `Đã tạo đề thi "${quiz.title}" chuẩn 1 trang A4 ${withKey ? 'kèm đáp án' : 'cho học sinh làm bài'}.`
          : `Generated 1-page A4 exam paper for "${quiz.title}".`,
        duration: 4000
      });
    } catch (err: any) {
      console.error('Error generating Quiz A4 PDF:', err);
      showToast({
        type: 'error',
        title: isVi ? 'Lỗi tạo PDF' : 'PDF Generation Failed',
        message: err.message || (isVi ? 'Không thể tạo file PDF đề thi.' : 'Could not generate PDF.'),
        duration: 4000
      });
    } finally {
      setGenerating(false);
    }
  };

  if (compact) {
    return (
      <div className="relative inline-block">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowDropdown(prev => !prev);
          }}
          disabled={generating}
          title={isVi ? 'In / Tải đề thi chuẩn 1 trang A4' : 'Print / Download 1-page A4 Exam PDF'}
          className={`p-2 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-all active:scale-95 cursor-pointer shadow-2xs ${className}`}
        >
          {generating ? (
            <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
          ) : (
            <Printer className="w-4 h-4" />
          )}
        </button>

        {showDropdown && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown(false);
              }} 
            />
            <div 
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-1.5 z-50 text-xs animate-in fade-in zoom-in-95 duration-150"
            >
              <div className="px-3 py-1.5 font-bold text-gray-400 text-[10px] uppercase tracking-wider border-b border-gray-100 dark:border-gray-700">
                {isVi ? 'Đề thi 1 trang A4' : '1-Page A4 Exam Paper'}
              </div>
              <button
                onClick={() => handleExport(false)}
                className="w-full text-left px-3 py-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-gray-800 dark:text-gray-200 font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>{isVi ? 'Đề thi (Học sinh làm bài)' : 'Student Exam Sheet'}</span>
              </button>
              <button
                onClick={() => handleExport(true)}
                className="w-full text-left px-3 py-2 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-gray-800 dark:text-gray-200 font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <KeyRound className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{isVi ? 'Đề thi kèm Đáp án & Lời giải' : 'With Answer Key'}</span>
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className.includes('w-full') ? 'w-full' : 'inline-block'}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowDropdown(prev => !prev);
        }}
        disabled={generating}
        className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-black transition-all active:scale-95 cursor-pointer shadow-2xs bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 ${className}`}
      >
        {generating ? (
          <>
            <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-600 shrink-0" />
            <span className="truncate">{isVi ? 'Đang tạo...' : 'Generating...'}</span>
          </>
        ) : (
          <>
            <Printer className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span className="truncate">{isVi ? 'In đề PDF A4' : 'A4 PDF Exam'}</span>
            <ChevronDown className="w-3 h-3 opacity-60 shrink-0" />
          </>
        )}
      </button>

      {showDropdown && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(false);
            }} 
          />
          <div 
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-full mt-2 w-60 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-2 z-50 text-xs animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="px-3 py-1 font-bold text-gray-400 text-[10px] uppercase tracking-wider border-b border-gray-100 dark:border-gray-700 mb-1">
              {isVi ? 'Tùy chọn tải đề chuẩn 1 trang A4' : 'A4 Single-Page Exam Export'}
            </div>
            <button
              onClick={() => handleExport(false)}
              className="w-full text-left px-3 py-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-gray-800 dark:text-gray-200 font-bold flex items-center gap-2 cursor-pointer transition-colors"
            >
              <FileDown className="w-4 h-4 text-indigo-600 shrink-0" />
              <div>
                <p className="font-black text-gray-900 dark:text-white">{isVi ? 'Đề thi trắc nghiệm' : 'Student Exam Sheet'}</p>
                <p className="text-[10px] font-normal text-gray-500">{isVi ? 'Bảng đáp án trống để học sinh tự làm' : 'Blank answer key grid for test taking'}</p>
              </div>
            </button>
            <button
              onClick={() => handleExport(true)}
              className="w-full text-left px-3 py-2 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-gray-800 dark:text-gray-200 font-bold flex items-center gap-2 cursor-pointer transition-colors mt-1"
            >
              <KeyRound className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <p className="font-black text-gray-900 dark:text-white">{isVi ? 'Đề thi kèm Đáp án' : 'Exam with Answer Key'}</p>
                <p className="text-[10px] font-normal text-gray-500">{isVi ? 'Đánh dấu đáp án đúng & giải thích chi tiết' : 'Filled answers for grading & review'}</p>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
