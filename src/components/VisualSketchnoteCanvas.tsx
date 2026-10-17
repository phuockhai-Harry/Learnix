import React, { useState } from 'react';
import { 
  Maximize2, 
  Minimize2, 
  HelpCircle, 
  Check, 
  Sparkles, 
  Award, 
  BookOpen, 
  Clock, 
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { HistoryLessonArticle } from '../data/historyGrade6Data';

interface VisualSketchnoteCanvasProps {
  lesson: HistoryLessonArticle;
}

export const VisualSketchnoteCanvas: React.FC<VisualSketchnoteCanvasProps> = ({ lesson }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [expandedEssayIndex, setExpandedEssayIndex] = useState<number | null>(0);

  return (
    <div className={`relative bg-amber-50/40 dark:bg-gray-900 rounded-3xl border-2 border-emerald-200 dark:border-emerald-950/60 p-5 sm:p-7 shadow-xl transition-all space-y-6 ${
      isFullscreen ? 'fixed inset-2 z-50 overflow-auto bg-amber-50 dark:bg-gray-950 p-8' : ''
    }`}>
      
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-emerald-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-xl shadow-xs">
            🎨
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-black uppercase tracking-wider">
                {lesson.sketchnote.badge}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white">
              {lesson.sketchnote.title}
            </h4>
          </div>
        </div>

        <button 
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          <span>{isFullscreen ? 'Thoát' : 'Toàn màn hình'}</span>
        </button>
      </div>

      {/* Sketchnote Visual Notebook Board */}
      <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border-2 border-dashed border-amber-300 dark:border-gray-700 space-y-6 shadow-sm">
        
        {/* Quote Banner */}
        {lesson.sketchnote.quote && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-100 via-emerald-100 to-amber-100 dark:from-gray-900 dark:via-emerald-950/40 dark:to-gray-900 border border-amber-300/80 dark:border-emerald-800 text-center space-y-1">
            <span className="text-[10px] font-black uppercase text-amber-800 dark:text-amber-400 tracking-widest block">
              💬 LỜI BÌNH VÀNG TRONG LỊCH SỬ
            </span>
            <p className="text-xs sm:text-sm font-black text-amber-950 dark:text-amber-200 italic">
              "{lesson.sketchnote.quote}"
            </p>
          </div>
        )}

        {/* 3 Sketchnote Highlight Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Key Highlights */}
          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-gray-900/60 border border-amber-200 dark:border-gray-700 space-y-3">
            <span className="text-xs font-black uppercase text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
              <span>📌</span>
              <span>Điểm nhấn bài học</span>
            </span>
            <ul className="space-y-2 text-xs">
              {lesson.sketchnote.highlights.map((hl, i) => (
                <li key={i} className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-amber-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium leading-relaxed shadow-2xs">
                  {hl}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Figures */}
          <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-gray-900/60 border border-indigo-200 dark:border-gray-700 space-y-3">
            <span className="text-xs font-black uppercase text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
              <span>👑</span>
              <span>Nhân vật lịch sử</span>
            </span>
            <div className="space-y-2">
              {lesson.sketchnote.keyFigures?.map((kf, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-indigo-100 dark:border-gray-700 text-xs space-y-1 shadow-2xs">
                  <span className="font-black text-indigo-900 dark:text-indigo-200 block">
                    {kf.name}
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 block">
                    {kf.role}
                  </span>
                  <p className="text-[11px] text-gray-600 dark:text-gray-300">
                    {kf.achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Ribbon */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-gray-900/60 border border-emerald-200 dark:border-gray-700 space-y-3">
            <span className="text-xs font-black uppercase text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
              <span>⏳</span>
              <span>Mốc thời gian</span>
            </span>
            <div className="space-y-2">
              {lesson.sketchnote.timeline?.map((tl, i) => (
                <div key={i} className="p-2 rounded-xl bg-white dark:bg-gray-800 border border-emerald-100 dark:border-gray-700 flex items-center gap-2 text-xs shadow-2xs">
                  <span className="px-2 py-0.5 rounded-lg bg-emerald-600 text-white font-black text-[10px] shrink-0">
                    {tl.year}
                  </span>
                  <span className="font-medium text-gray-800 dark:text-gray-200 truncate">
                    {tl.event}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Golden Takeaway Banner */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-indigo-500/10 border border-amber-300/80 dark:border-gray-700 text-center">
          <span className="text-xs font-black text-amber-900 dark:text-amber-200">
            💡 Thông điệp vàng cốt lõi: {lesson.sketchnote.takeaway}
          </span>
        </div>

      </div>

      {/* Essay Exam Review Questions Accordion Box */}
      <div className="p-5 rounded-3xl bg-white dark:bg-gray-800 border-2 border-emerald-200 dark:border-gray-700 shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-black uppercase text-emerald-800 dark:text-emerald-300 tracking-wider">
              Góc Ôn Tập Câu Hỏi Tự Luận Trọng Tâm Trong Bài Thi
            </span>
          </div>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-bold">
            {lesson.page2.reviewQuestions.length} Câu Ôn Thi Đạt Điểm 10
          </span>
        </div>

        <div className="space-y-3">
          {lesson.page2.reviewQuestions.map((qText, qIdx) => {
            const isExpanded = expandedEssayIndex === qIdx;
            return (
              <div key={qIdx} className="rounded-2xl border border-emerald-100 dark:border-gray-700 overflow-hidden transition-all shadow-2xs">
                <button
                  onClick={() => setExpandedEssayIndex(isExpanded ? null : qIdx)}
                  className="w-full p-4 bg-emerald-50/50 dark:bg-gray-900/60 hover:bg-emerald-100/50 text-left font-bold text-xs text-gray-900 dark:text-white flex items-center justify-between gap-3 cursor-pointer transition-colors"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black shrink-0 shadow-2xs">
                      {qIdx + 1}
                    </span>
                    <span className="leading-snug">{qText}</span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px] shrink-0 flex items-center gap-1">
                    <span>{isExpanded ? '▲ Ẩn gợi ý' : '▼ Dàn ý đạt điểm tối đa'}</span>
                  </span>
                </button>

                {isExpanded && (
                  <div className="p-4 bg-white dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 leading-relaxed border-t border-emerald-100 dark:border-gray-700 space-y-3 animate-fade-in">
                    <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-black text-[11px] uppercase tracking-wider">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>DÀN Ý TRẢ LỜI CÂU TỰ LUẬN CHUẨN GDPT 2018:</span>
                    </div>

                    <p className="p-3.5 rounded-xl bg-emerald-50/40 dark:bg-gray-900/40 border border-emerald-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                      {lesson.page1.mainConcept}
                    </p>

                    <div className="space-y-1.5 pl-1">
                      <span className="font-black text-emerald-800 dark:text-emerald-300 text-[11px] block">
                        Các luận điểm cốt lõi học sinh cần triển khai:
                      </span>
                      <ul className="list-disc pl-5 space-y-1.5 text-gray-600 dark:text-gray-300 text-[11px]">
                        {lesson.page1.coreKnowledge[0]?.bullets.map((b, bi) => (
                          <li key={bi} className="leading-relaxed">{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
