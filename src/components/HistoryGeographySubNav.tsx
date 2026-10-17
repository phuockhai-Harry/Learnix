import React from 'react';
import { 
  Landmark, 
  Globe, 
  BookOpen, 
  Layers, 
  Compass, 
  FileText, 
  Award, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export type SubsystemType = 'history' | 'geography';

export interface HistoryGeographySubNavProps {
  activeSubsystem: SubsystemType;
  onSubsystemChange: (subsystem: SubsystemType) => void;
  grade?: number;
  semester?: 1 | 2;
  variant?: 'banner' | 'compact' | 'segmented';
  historyStats?: {
    lessonsCount?: number;
    quizzesCount?: number;
    hasMindmap?: boolean;
    hasFlashcards?: boolean;
  };
  geographyStats?: {
    topicsCount?: number;
    quizzesCount?: number;
    hasMapSkills?: boolean;
  };
  onQuickJump?: (target: 'pdf' | 'mindmap' | 'sketchnote' | 'flashcards' | 'video' | 'quizzes' | 'geo-topics') => void;
  className?: string;
}

export const HistoryGeographySubNav: React.FC<HistoryGeographySubNavProps> = ({
  activeSubsystem,
  onSubsystemChange,
  grade = 6,
  semester = 1,
  variant = 'banner',
  historyStats = {
    lessonsCount: 3,
    quizzesCount: 6,
    hasMindmap: true,
    hasFlashcards: true
  },
  geographyStats = {
    topicsCount: 2,
    quizzesCount: 6,
    hasMapSkills: true
  },
  onQuickJump,
  className = ''
}) => {
  const isHistory = activeSubsystem === 'history';
  const isGeography = activeSubsystem === 'geography';

  // Compact Segmented Mode (ideal for sticky bars or tight mobile containers)
  if (variant === 'segmented') {
    return (
      <div 
        role="tablist" 
        aria-label="Phân hệ môn Lịch sử và Địa lí"
        className={`inline-flex items-center p-1.5 bg-gray-100 dark:bg-gray-800/90 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xs ${className}`}
      >
        <button
          role="tab"
          aria-selected={isHistory}
          onClick={() => onSubsystemChange('history')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
            isHistory
              ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-500/30'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
          }`}
        >
          <Landmark className="w-4 h-4 shrink-0" />
          <span>Phân môn Lịch sử</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
            isHistory ? 'bg-amber-700 text-amber-100' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}>
            {historyStats.lessonsCount} bài
          </span>
        </button>

        <button
          role="tab"
          aria-selected={isGeography}
          onClick={() => onSubsystemChange('geography')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
            isGeography
              ? 'bg-teal-600 text-white shadow-sm ring-2 ring-teal-500/30'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
          }`}
        >
          <Globe className="w-4 h-4 shrink-0" />
          <span>Phân môn Địa lí</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
            isGeography ? 'bg-teal-700 text-teal-100' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}>
            {geographyStats.topicsCount} chuyên đề
          </span>
        </button>
      </div>
    );
  }

  // Full Rich Banner Mode (Default & structurally distinct)
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Top Descriptor Card */}
      <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-3xl border-2 border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Information & Title */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                Môn tích hợp GDPT 2018
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 dark:text-gray-400">
                Lớp {grade} • Học kỳ {semester} • 2 Phân hệ độc lập
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-teal-500 text-white flex items-center justify-center shadow-xs shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <span>Cấu trúc Phân môn Lịch sử & Địa lí</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
              Chọn phân hệ chuyên biệt để truy cập hệ thống bài giảng A4, sơ đồ tư duy, flashcards và bộ đề thi đánh giá năng lực theo chuẩn Bộ GD&ĐT:
            </p>
          </div>

          {/* Quick Segment Toggle on top right for quick switcher */}
          <div className="flex items-center gap-1.5 p-1.5 bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 self-start lg:self-center shrink-0">
            <button
              onClick={() => onSubsystemChange('history')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                isHistory
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>Lịch sử</span>
            </button>
            <button
              onClick={() => onSubsystemChange('geography')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
                isGeography
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Địa lí</span>
            </button>
          </div>
        </div>

        {/* 2 Big Distinct Modular Cards */}
        <div 
          role="tablist" 
          aria-label="Lựa chọn phân hệ học tập"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5"
        >
          {/* Card 1: Phân môn Lịch sử */}
          <div
            role="tab"
            tabIndex={0}
            aria-selected={isHistory}
            onClick={() => onSubsystemChange('history')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSubsystemChange('history');
              }
            }}
            className={`group relative p-5 rounded-2xl border-2 transition-all cursor-pointer text-left select-none outline-none ${
              isHistory
                ? 'bg-gradient-to-br from-amber-50 to-orange-50/70 dark:from-amber-950/30 dark:to-orange-950/20 border-amber-500 shadow-md ring-2 ring-amber-500/30 scale-[1.01]'
                : 'bg-white dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700/60 hover:shadow-xs'
            }`}
          >
            {/* Active Pill Badge */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                isHistory
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
              }`}>
                <Landmark className="w-3 h-3" />
                <span>Phân hệ 1</span>
              </span>

              {isHistory ? (
                <span className="flex items-center gap-1 text-[11px] font-black text-amber-600 dark:text-amber-400">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Đang xem</span>
                </span>
              ) : (
                <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Chuyển sang</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              )}
            </div>

            {/* Title & Description */}
            <div className="space-y-1">
              <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                <span>Phân môn Lịch sử</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                  Lớp {grade}
                </span>
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Nghiên cứu tiến trình phát triển của xã hội loài người từ nguyên thủy đến cổ đại và phong trào dựng nước Văn Lang - Âu Lạc.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-amber-200/60 dark:border-amber-900/40 text-[11px]">
              <span className="px-2 py-1 rounded-lg bg-white/80 dark:bg-gray-800 font-bold text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60 flex items-center gap-1">
                <FileText className="w-3 h-3 text-amber-600" />
                {historyStats.lessonsCount} bài PDF 2 trang
              </span>
              <span className="px-2 py-1 rounded-lg bg-white/80 dark:bg-gray-800 font-bold text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-600" />
                Sơ đồ & Sketchnote
              </span>
              <span className="px-2 py-1 rounded-lg bg-white/80 dark:bg-gray-800 font-bold text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60 flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-600" />
                {historyStats.quizzesCount} đề kiểm tra chuẩn
              </span>
            </div>
          </div>

          {/* Card 2: Phân môn Địa lí */}
          <div
            role="tab"
            tabIndex={0}
            aria-selected={isGeography}
            onClick={() => onSubsystemChange('geography')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSubsystemChange('geography');
              }
            }}
            className={`group relative p-5 rounded-2xl border-2 transition-all cursor-pointer text-left select-none outline-none ${
              isGeography
                ? 'bg-gradient-to-br from-teal-50 to-emerald-50/70 dark:from-teal-950/30 dark:to-emerald-950/20 border-teal-500 shadow-md ring-2 ring-teal-500/30 scale-[1.01]'
                : 'bg-white dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-700/60 hover:shadow-xs'
            }`}
          >
            {/* Active Pill Badge */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                isGeography
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300'
              }`}>
                <Globe className="w-3 h-3" />
                <span>Phân hệ 2</span>
              </span>

              {isGeography ? (
                <span className="flex items-center gap-1 text-[11px] font-black text-teal-600 dark:text-teal-400">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Đang xem</span>
                </span>
              ) : (
                <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>Chuyển sang</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              )}
            </div>

            {/* Title & Description */}
            <div className="space-y-1">
              <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                <span>Phân môn Địa lí</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300">
                  Lớp {grade}
                </span>
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Khám phá bản đồ học, hệ thống kinh vĩ tuyến, cấu tạo Trái Đất, khí quyển, thủy quyển và mối quan hệ sinh thái tự nhiên.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-teal-200/60 dark:border-teal-900/40 text-[11px]">
              <span className="px-2 py-1 rounded-lg bg-white/80 dark:bg-gray-800 font-bold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60 flex items-center gap-1">
                <Compass className="w-3 h-3 text-teal-600" />
                Bản đồ học & Tọa độ
              </span>
              <span className="px-2 py-1 rounded-lg bg-white/80 dark:bg-gray-800 font-bold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60 flex items-center gap-1">
                <Globe className="w-3 h-3 text-teal-600" />
                Khí quyển & Thủy quyển
              </span>
              <span className="px-2 py-1 rounded-lg bg-white/80 dark:bg-gray-800 font-bold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60 flex items-center gap-1">
                <Award className="w-3 h-3 text-teal-600" />
                {geographyStats.quizzesCount} đề kiểm tra chuẩn
              </span>
            </div>
          </div>
        </div>

        {/* Quick jump navigation actions */}
        {onQuickJump && (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-4 border-t border-gray-100 dark:border-gray-700/80 text-xs">
            <span className="font-bold text-gray-500 dark:text-gray-400">
              Lối tắt phân hệ {isHistory ? 'Lịch sử' : 'Địa lí'}:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {isHistory ? (
                <>
                  <button
                    onClick={() => onQuickJump('pdf')}
                    className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors"
                  >
                    📄 Đọc tài liệu 2 trang
                  </button>
                  <button
                    onClick={() => onQuickJump('mindmap')}
                    className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors"
                  >
                    🧠 Mindmap
                  </button>
                  <button
                    onClick={() => onQuickJump('sketchnote')}
                    className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors"
                  >
                    🎨 Sketchnote Ôn Tự Luận
                  </button>
                  <button
                    onClick={() => onQuickJump('flashcards')}
                    className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors"
                  >
                    🎴 Flashcards
                  </button>
                  <button
                    onClick={() => onQuickJump('video')}
                    className="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-bold hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
                  >
                    📺 Video VietJack
                  </button>
                  <button
                    onClick={() => onQuickJump('quizzes')}
                    className="px-2.5 py-1 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-700 transition-colors shadow-xs"
                  >
                    📝 Đề kiểm tra Lịch sử
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => onQuickJump('geo-topics')}
                    className="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-bold hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
                  >
                    🗺️ Chuyên đề Bản đồ & Trái Đất
                  </button>
                  <button
                    onClick={() => onQuickJump('quizzes')}
                    className="px-2.5 py-1 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors shadow-xs"
                  >
                    📝 Đề kiểm tra Địa lí
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Also export as CurriculumSubsystemSwitch alias for flexible naming
export const CurriculumSubsystemSwitch = HistoryGeographySubNav;
export default HistoryGeographySubNav;
