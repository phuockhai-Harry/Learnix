import React, { useState } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Download, 
  BookOpen, 
  Sparkles, 
  Clock, 
  Compass, 
  Landmark, 
  Shield, 
  Globe, 
  CheckCircle2,
  Info
} from 'lucide-react';
import { HistoryLessonArticle } from '../data/historyGrade6Data';

interface VisualMindmapCanvasProps {
  lesson: HistoryLessonArticle;
  onSelectBranch?: (branchId: string) => void;
}

export const VisualMindmapCanvas: React.FC<VisualMindmapCanvasProps> = ({ lesson }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [activeNodeDetail, setActiveNodeDetail] = useState<{ title: string; detail: string; keywords?: string[] } | null>(null);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.15, 1.4));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.15, 0.7));
  const handleResetZoom = () => setZoomLevel(1);

  // Lesson 1 Special Illustrated Mindmap matching user uploaded image: "LỊCH SỬ LÀ GÌ?"
  const isLesson1 = lesson.lessonNumber === 1 || lesson.id === 'history-g6-lesson-1';

  return (
    <div className={`relative bg-gradient-to-br from-amber-50/70 via-orange-50/30 to-amber-100/40 dark:from-gray-900 dark:via-gray-950 dark:to-amber-950/20 rounded-3xl border-2 border-amber-300 dark:border-amber-900/60 p-4 sm:p-6 shadow-xl transition-all ${
      isFullscreen ? 'fixed inset-2 z-50 overflow-auto bg-amber-50 dark:bg-gray-950 p-8' : ''
    }`}>
      
      {/* Top Floating Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-amber-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-sm shadow-md">
            🧠
          </span>
          <div>
            <span className="text-[10px] font-black uppercase text-amber-700 dark:text-amber-400 tracking-widest block">
              SƠ ĐỒ TƯ DUY HÌNH ẢNH TRỰC QUAN (MINDMAP ART)
            </span>
            <h4 className="text-sm sm:text-base font-black text-gray-900 dark:text-white">
              {lesson.mindmap.centralTheme}
            </h4>
          </div>
        </div>

        {/* Toolbar controls */}
        <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 p-1.5 rounded-2xl border border-amber-200 dark:border-gray-700 shadow-xs backdrop-blur-xs">
          <button 
            onClick={handleZoomOut}
            className="p-1.5 rounded-xl hover:bg-amber-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
            title="Thu nhỏ"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          
          <span className="text-xs font-black text-amber-800 dark:text-amber-300 px-1">
            {Math.round(zoomLevel * 100)}%
          </span>

          <button 
            onClick={handleZoomIn}
            className="p-1.5 rounded-xl hover:bg-amber-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
            title="Phóng to"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button 
            onClick={handleResetZoom}
            className="p-1.5 rounded-xl hover:bg-amber-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
            title="Đặt lại kích thước"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <div className="w-px h-4 bg-gray-300 dark:bg-gray-700 my-auto mx-0.5" />

          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-xl bg-amber-600 text-white font-bold hover:bg-amber-700 transition-colors cursor-pointer flex items-center gap-1 text-xs"
            title={isFullscreen ? 'Thoát toàn màn hình' : 'Xem toàn màn hình'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Illustrated Canvas Area */}
      <div className="overflow-x-auto pb-4">
        <div 
          className="min-w-[850px] transition-transform duration-300 transform-origin-top-center space-y-8"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {isLesson1 ? (
            /* ========================================================================= */
            /* EXACT ILLUSTRATED MINDMAP CANVAS FOR BÀI 1 MATCHING USER UPLOADED IMAGE  */
            /* ========================================================================= */
            <div className="relative p-6 sm:p-8 rounded-3xl bg-amber-50/90 dark:bg-gray-900 border-2 border-amber-300/80 dark:border-gray-800 shadow-inner space-y-8">
              
              {/* Central Banner Node */}
              <div className="relative max-w-md mx-auto text-center p-6 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-2xl ring-8 ring-amber-300/50 space-y-2 z-10">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl">📖</span>
                  <div className="text-left">
                    <span className="text-[10px] font-black uppercase text-amber-100 tracking-widest block">
                      CHỦ ĐỀ TRUNG TÂM
                    </span>
                    <h3 className="text-2xl font-black tracking-tight uppercase drop-shadow-xs">
                      LỊCH SỬ LÀ GÌ?
                    </h3>
                  </div>
                  <span className="text-3xl">🔍</span>
                </div>
                <p className="text-xs text-amber-100 font-bold bg-amber-700/40 py-1 px-3 rounded-full inline-block">
                  👨‍🎓 Học sinh nghiên cứu sách & tư liệu quá khứ
                </p>
              </div>

              {/* 4 Major Curved Illustrated Branches Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                
                {/* BRANCH 1: QUÁ KHỨ (ORANGE STEM) */}
                <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-orange-300 dark:border-orange-900/60 shadow-md space-y-4 hover:border-orange-500 transition-colors">
                  <div className="flex items-center gap-3 border-b border-orange-100 dark:border-gray-700 pb-2">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
                      ⏳
                    </span>
                    <div>
                      <h5 className="font-black text-base text-orange-900 dark:text-orange-300 uppercase tracking-wide">
                        1. QUÁ KHỨ
                      </h5>
                      <span className="text-[10px] font-bold text-gray-500">
                        Những điều đã diễn ra trong lịch sử
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div 
                      onClick={() => setActiveNodeDetail({
                        title: 'Những gì đã xảy ra',
                        detail: 'Toàn bộ sự việc, hiện tượng của tự nhiên và xã hội loài người đã diễn ra trong thời gian qua.',
                        keywords: ['Khách quan', 'Đã diễn ra', 'Mốc thời gian']
                      })}
                      className="p-3 rounded-xl bg-orange-50/60 dark:bg-gray-900/60 border border-orange-200 dark:border-gray-700 hover:bg-orange-100/60 cursor-pointer transition-colors space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-xs text-orange-950 dark:text-orange-200 flex items-center gap-1.5">
                          <span>🕰️</span>
                          <span>Những gì đã xảy ra</span>
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-200 text-orange-900 font-bold">
                          Khái niệm
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        Tất cả hoạt động sinh tồn, sản xuất và tư tưởng con người từ thời cổ đại đến hiện tại.
                      </p>
                    </div>

                    <div 
                      onClick={() => setActiveNodeDetail({
                        title: 'Lịch sử loài người & xã hội',
                        detail: 'Khoa học nghiên cứu và phục dựng lại chặng đường tiến hóa xã hội loài người qua các thời kỳ.',
                        keywords: ['Loài người', 'Tiến hóa', 'Xã hội']
                      })}
                      className="p-3 rounded-xl bg-orange-50/60 dark:bg-gray-900/60 border border-orange-200 dark:border-gray-700 hover:bg-orange-100/60 cursor-pointer transition-colors space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-xs text-orange-950 dark:text-orange-200 flex items-center gap-1.5">
                          <span>🏰</span>
                          <span>Lịch sử loài người & xã hội</span>
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-200 text-orange-900 font-bold">
                          Phục dựng
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        Từ Vượn cổ đến Người tối cổ, công xã nguyên thủy, thành lũy cổ đại và quốc gia phong kiến.
                      </p>
                    </div>
                  </div>
                </div>

                {/* BRANCH 2: CỘI NGUỒN (GREEN STEM) */}
                <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-emerald-300 dark:border-emerald-900/60 shadow-md space-y-4 hover:border-emerald-500 transition-colors">
                  <div className="flex items-center gap-3 border-b border-emerald-100 dark:border-gray-700 pb-2">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
                      🌳
                    </span>
                    <div>
                      <h5 className="font-black text-base text-emerald-900 dark:text-emerald-300 uppercase tracking-wide">
                        2. CỘI NGUỒN
                      </h5>
                      <span className="text-[10px] font-bold text-gray-500">
                        Tìm về gốc gác gia đình, quê hương, đất nước
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div 
                      onClick={() => setActiveNodeDetail({
                        title: 'Tìm về gốc gác Gia đình - Tổ tiên',
                        detail: 'Hiểu rõ phả hệ dòng họ, công ơn sinh thành dưỡng dục và truyền thống gia đình.',
                        keywords: ['Gia đình', 'Tổ tiên', 'Uống nước nhớ nguồn']
                      })}
                      className="p-3 rounded-xl bg-emerald-50/60 dark:bg-gray-900/60 border border-emerald-200 dark:border-gray-700 hover:bg-emerald-100/60 cursor-pointer transition-colors space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-xs text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5">
                          <span>🏡</span>
                          <span>Gia đình & Tổ tiên</span>
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-bold">
                          Gốc gác
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        Biết rõ gốc tích gia đình, nhà tổ, các thế hệ đi trước để giữ gìn nếp nhà thiêng liêng.
                      </p>
                    </div>

                    <div 
                      onClick={() => setActiveNodeDetail({
                        title: 'Quê hương & Đất nước',
                        detail: 'Nhận thức quá trình dựng nước, giữ nước của dân tộc Việt Nam qua hàng ngàn năm.',
                        keywords: ['Khuê Văn Các', 'Trống đồng', 'Đền Hùng']
                      })}
                      className="p-3 rounded-xl bg-emerald-50/60 dark:bg-gray-900/60 border border-emerald-200 dark:border-gray-700 hover:bg-emerald-100/60 cursor-pointer transition-colors space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-xs text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5">
                          <span>🏛️</span>
                          <span>Quê hương, Đất nước</span>
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-bold">
                          Nguồn cội
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        Khuê Văn Các, Trống đồng Đông Sơn, Đền Hùng - biểu tượng truyền thống văn hóa tự hào.
                      </p>
                    </div>
                  </div>
                </div>

                {/* BRANCH 3: KHÁM PHÁ QUÁ KHỨ (BLUE STEM) */}
                <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-blue-300 dark:border-blue-900/60 shadow-md space-y-4 hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-3 border-b border-blue-100 dark:border-gray-700 pb-2">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
                      📜
                    </span>
                    <div>
                      <h5 className="font-black text-base text-blue-900 dark:text-blue-300 uppercase tracking-wide">
                        3. KHÁM PHÁ QUÁ KHỨ
                      </h5>
                      <span className="text-[10px] font-bold text-gray-500">
                        Học sinh khai thác 3 nguồn tư liệu lịch sử
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-xl bg-blue-50/60 dark:bg-gray-900/60 border border-blue-200 dark:border-gray-700 text-xs space-y-1">
                      <span className="font-black text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                        <span>🏺</span>
                        <span>Tư liệu hiện vật:</span>
                      </span>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300">
                        Trống đồng, bình gốm, di tích khảo cổ, vũ khí đá & đồng của người xưa.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-blue-50/60 dark:bg-gray-900/60 border border-blue-200 dark:border-gray-700 text-xs space-y-1">
                      <span className="font-black text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                        <span>📖</span>
                        <span>Tư liệu chữ viết:</span>
                      </span>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300">
                        Văn bia đá, giáp cốt văn, chiếu chỉ, thư tịch cổ "Đại Việt sử ký".
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-blue-50/60 dark:bg-gray-900/60 border border-blue-200 dark:border-gray-700 text-xs space-y-1">
                      <span className="font-black text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                        <span>🗣️</span>
                        <span>Tư liệu truyền miệng:</span>
                      </span>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300">
                        Thần thoại, truyền thuyết (Thánh Gióng, Sơn Tinh), ca dao truyền qua các thế hệ.
                      </p>
                    </div>
                  </div>
                </div>

                {/* BRANCH 4: Ý NGHĨA & BÀI HỌC (MAGENTA/PINK STEM) */}
                <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-rose-300 dark:border-rose-900/60 shadow-md space-y-4 hover:border-rose-500 transition-colors">
                  <div className="flex items-center gap-3 border-b border-rose-100 dark:border-gray-700 pb-2">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
                      🌱
                    </span>
                    <div>
                      <h5 className="font-black text-base text-rose-900 dark:text-rose-300 uppercase tracking-wide">
                        4. Ý NGHĨA & BÀI HỌC
                      </h5>
                      <span className="text-[10px] font-bold text-gray-500">
                        Quá khứ - Hiện tại - Tương lai
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-xl bg-rose-50/60 dark:bg-gray-900/60 border border-rose-200 dark:border-gray-700 text-xs space-y-1">
                      <span className="font-black text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
                        <span>🧠</span>
                        <span>Hiểu biết quá khứ:</span>
                      </span>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300">
                        Kích hoạt tư duy trí tuệ, đúc kết bài học kinh nghiệm quý báu của cha ông.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-rose-50/60 dark:bg-gray-900/60 border border-rose-200 dark:border-gray-700 text-xs space-y-1">
                      <span className="font-black text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
                        <span>🌿</span>
                        <span>Trân trọng hiện tại:</span>
                      </span>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300">
                        Biết ơn sự hy sinh xương máu của các thế hệ đi trước để sống có trách nhiệm.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-rose-50/60 dark:bg-gray-900/60 border border-rose-200 dark:border-gray-700 text-xs space-y-1">
                      <span className="font-black text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
                        <span>🏙️</span>
                        <span>Hướng tới tương lai:</span>
                      </span>
                      <p className="text-[11px] text-gray-600 dark:text-gray-300">
                        Vững tin xây dựng đất nước giàu mạnh, hiện đại và hội nhập quốc tế.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ) : (
          /* ========================================================================= */
          /* UNIFORM LOOSE ORGANIC HAND-DRAWN SKETCHY MINDMAP FOR ALL LESSONS         */
          /* ========================================================================= */
          <div className="relative p-6 sm:p-10 rounded-3xl bg-[#FAF7F2] dark:bg-gray-950 border-4 border-dashed border-amber-300 dark:border-amber-900/60 shadow-inner overflow-hidden select-none min-h-[580px] flex flex-col justify-between">
            
            {/* Decorative Hand-Drawn Floral Accents */}
            <div className="absolute top-3 left-4 text-amber-400 dark:text-amber-700 text-xl opacity-80 pointer-events-none">🌸 🌿 🌼 ⏳</div>
            <div className="absolute top-3 right-4 text-emerald-400 dark:text-emerald-700 text-xl opacity-80 pointer-events-none">📜 🍃 🌻 🌺</div>
            <div className="absolute bottom-3 left-4 text-orange-400 dark:text-orange-700 text-xl opacity-80 pointer-events-none">🏺 🥁 🌿 🌼</div>
            <div className="absolute bottom-3 right-4 text-red-400 dark:text-red-700 text-xl opacity-80 pointer-events-none">🔍 🌺 🍃 🌻</div>

            {/* Organic Mindmap Container: Free-form Floating Branches (No Grids / No Square Cards) */}
            <div className="relative w-full max-w-5xl mx-auto py-4 space-y-8">
              
              {/* Central Node: Hand-Drawn Book Illustration */}
              <div className="relative z-10 max-w-md mx-auto text-center p-5 rounded-[40px] bg-white dark:bg-gray-900 border-4 border-amber-500 dark:border-amber-600 shadow-2xl ring-8 ring-amber-100/70 dark:ring-amber-950/40 transform hover:scale-[1.03] transition-transform">
                {/* Student Character Doodles */}
                <div className="flex items-center justify-center gap-3 pb-1">
                  <span className="text-2xl animate-bounce">👦🏻</span>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-xs uppercase tracking-widest shadow-xs">
                    📖 BÀI {lesson.lessonNumber} • TƯ DUY HÌNH ẢNH
                  </span>
                  <span className="text-2xl animate-bounce">👧🏻</span>
                </div>

                <h5 className="text-lg sm:text-xl font-black tracking-tight text-amber-950 dark:text-amber-100 font-serif leading-snug uppercase">
                  {lesson.mindmap.centralTheme}
                </h5>
              </div>

              {/* Loose Organic Branch Clusters radiating outwards (No blocky lists, short 1-3 word labels) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-2 relative z-10">
                {lesson.mindmap.branches.map((branch, idx) => {
                  // Organic hand-drawn sketchy branch colors & curve accents
                  const branchTheme = [
                    {
                      titleBg: 'bg-cyan-500 text-white',
                      itemBorder: 'border-cyan-300 dark:border-cyan-800 bg-cyan-50/70 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-100',
                      lineColor: 'border-cyan-400',
                      icon: '🗣️'
                    },
                    {
                      titleBg: 'bg-emerald-600 text-white',
                      itemBorder: 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100',
                      lineColor: 'border-emerald-400',
                      icon: '📜'
                    },
                    {
                      titleBg: 'bg-amber-500 text-white',
                      itemBorder: 'border-amber-300 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100',
                      lineColor: 'border-amber-400',
                      icon: '🏺'
                    },
                    {
                      titleBg: 'bg-rose-500 text-white',
                      itemBorder: 'border-rose-300 dark:border-rose-800 bg-rose-50/70 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100',
                      lineColor: 'border-rose-400',
                      icon: '🔍'
                    }
                  ][idx % 4];

                  return (
                    <div key={branch.id} className="relative space-y-4 p-4 rounded-[32px] border-2 border-dashed border-gray-300/60 dark:border-gray-800 bg-white/40 dark:bg-gray-900/30 backdrop-blur-xs">
                      
                      {/* Branch Curved Stem Title (Organic Cloud Pill) */}
                      <div className="flex items-center gap-3">
                        <span className={`px-4 py-1.5 rounded-full ${branchTheme.titleBg} font-black text-xs sm:text-sm uppercase tracking-wider shadow-md flex items-center gap-2 transform -rotate-1`}>
                          <span>{branchTheme.icon}</span>
                          <span>{branch.title}</span>
                        </span>
                        <div className={`h-1 flex-1 border-b-4 border-dotted ${branchTheme.lineColor} rounded-full`} />
                      </div>

                      {/* Sparse 1-3 Word Keyword Labels (Loose Floating Pills - NO Paragraphs / NO Square Lists) */}
                      <div className="flex flex-wrap gap-2.5 pt-1 pl-2">
                        {branch.subBranches.map((sub, sIdx) => (
                          <div 
                            key={sIdx} 
                            onClick={() => setActiveNodeDetail({
                              title: sub.title,
                              detail: sub.detail,
                              keywords: sub.keywords
                            })}
                            className={`px-3.5 py-2 rounded-2xl border-2 ${branchTheme.itemBorder} shadow-xs font-black text-xs flex items-center gap-2 transform hover:scale-105 transition-transform cursor-pointer`}
                          >
                            <span className="text-amber-500">✦</span>
                            <span>{sub.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Organic Canvas Hand-Drawn Footer */}
            <div className="pt-4 text-center text-xs font-black text-amber-800/80 dark:text-amber-300/80 flex items-center justify-center gap-2 border-t border-dashed border-amber-200 dark:border-gray-800">
              <span>✏️ Sơ đồ Tư duy Hình họa Hand-drawn (Nhiều màu sắc • Từ khóa cô đọng 1-3 từ)</span>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Node Detail Modal / Card Popup */}
      {activeNodeDetail && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 max-w-md w-full p-6 rounded-3xl border-2 border-amber-400 shadow-2xl space-y-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
              <span className="text-xs font-black uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>Chi tiết nhánh kiến thức</span>
              </span>
              <button 
                onClick={() => setActiveNodeDetail(null)}
                className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-gray-600 font-bold text-xs flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <h4 className="text-base font-black text-gray-900 dark:text-white">
              {activeNodeDetail.title}
            </h4>

            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed bg-amber-50 dark:bg-gray-900 p-3 rounded-xl border border-amber-200 dark:border-gray-700">
              {activeNodeDetail.detail}
            </p>

            {activeNodeDetail.keywords && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeNodeDetail.keywords.map((kw, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 font-bold border border-amber-200 dark:border-gray-700">
                    #{kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
