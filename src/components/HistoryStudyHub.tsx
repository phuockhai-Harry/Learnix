import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Landmark, 
  Globe, 
  FileText, 
  Clock, 
  Sparkles, 
  Download, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Eye, 
  Layers, 
  Award, 
  Flame, 
  Shuffle, 
  Maximize2, 
  Minimize2,
  Calendar,
  Compass,
  ArrowRight,
  ExternalLink,
  Play,
  Tv,
  HelpCircle,
  Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GRADE_6_HISTORY_LESSONS, HistoryLessonArticle, HistoryFlashcardItem } from '../data/historyGrade6Data';
import { GRADE_6_HISTORY_QUIZZES } from '../data/historyGrade6Quizzes';
import { getCurriculumQuizzes, CurriculumQuiz } from '../data/curriculumData';
import { jsPDF } from 'jspdf';
import { removeVietnameseTones } from '../lib/pdfUnicode';
import { QuizA4PdfButton } from './QuizA4PdfButton';
import { HistoryGeographySubNav, SubsystemType } from './HistoryGeographySubNav';
import { VisualMindmapCanvas } from './VisualMindmapCanvas';
import { VisualSketchnoteCanvas } from './VisualSketchnoteCanvas';
import { EmbeddedYoutubePlayer } from './EmbeddedYoutubePlayer';

export interface VietJackVideoItem {
  id: string;
  lessonId: string;
  chapterTag: string;
  title: string;
  teacher: string;
  duration: string;
  views: string;
  description: string;
  keyTopics: string[];
}

export const VIETJACK_HISTORY_VIDEOS: VietJackVideoItem[] = [
  {
    id: 'w2v1I83L6S0',
    lessonId: 'history-g6-lesson-1',
    chapterTag: 'Chương 1',
    title: 'Bài 1: Lịch sử và Cuộc sống - Lịch sử lớp 6 Kết nối tri thức',
    teacher: 'Cô Nguyễn Phương Nhi (Giáo viên VietJack)',
    duration: '22:15',
    views: '145.200 lượt xem',
    description: 'Giảng chi tiết bài 1 Lịch sử 6 sách Kết nối tri thức: Khái niệm lịch sử, phân biệt 3 loại tư liệu lịch sử (truyền miệng, hiện vật, chữ viết) và lý giải vì sao cần học môn Lịch sử.',
    keyTopics: ['Lịch sử là gì?', 'Tư liệu hiện vật, truyền miệng, chữ viết', 'Ý nghĩa môn Lịch sử trong đời sống']
  },
  {
    id: 'q_6XfDkP1xE',
    lessonId: 'history-g6-lesson-1',
    chapterTag: 'Chương 1',
    title: 'Bài 2: Thời gian trong lịch sử - Lịch sử lớp 6 Kết nối tri thức',
    teacher: 'Cô Nguyễn Phương Nhi (VietJack)',
    duration: '18:40',
    views: '98.500 lượt xem',
    description: 'Hướng dẫn quy tắc tính thời gian trong lịch sử: Âm lịch, Dương lịch, Công lịch, quy đổi Thập kỷ, Thế kỷ, Thiên niên kỷ và tính mốc thời gian Trước Công nguyên (TCN).',
    keyTopics: ['Cách tính Âm lịch & Dương lịch', 'Quy đổi Thế kỷ và Thập kỷ', 'Mốc thời gian TCN và CN']
  },
  {
    id: '3eKzI8qJ9X4',
    lessonId: 'history-g6-lesson-3',
    chapterTag: 'Chương 2',
    title: 'Bài 3: Nguồn gốc loài người - Lịch sử lớp 6 Kết nối tri thức',
    teacher: 'Cô Nguyễn Phương Nhi (VietJack)',
    duration: '25:10',
    views: '182.100 lượt xem',
    description: 'Phân tích 3 chặng đường tiến hóa loài người từ Vượn người thành Người tối cổ và Người tinh khôn. Chứng minh Việt Nam là cái nôi xuất hiện con người sớm qua các di chỉ An Khê, Lạng Sơn.',
    keyTopics: ['Vượn cổ ➔ Người tối cổ ➔ Người tinh khôn', 'Ý nghĩa của việc phát minh ra Lửa', 'Dấu tích Người tối cổ ở An Khê, Lạng Sơn']
  },
  {
    id: '9pY6w4eJ8rM',
    lessonId: 'history-g6-lesson-6',
    chapterTag: 'Chương 3',
    title: 'Bài 6: Các nền văn minh Cổ đại - Lịch sử lớp 6 Kết nối tri thức',
    teacher: 'Cô Nguyễn Phương Nhi (VietJack)',
    duration: '28:35',
    views: '210.400 lượt xem',
    description: 'Tổng hợp văn minh Ai Cập, Lưỡng Hà, Ấn Độ, Trung Quốc, Hy Lạp và La Mã. So sánh kinh tế nông nghiệp phương Đông và thương nghiệp biển phương Tây cổ đại.',
    keyTopics: ['Sông Nile và Kim tự tháp Ai Cập', 'Luật Hammurabi & Chữ hình nêm', 'Dân chủ Aten & Chữ cái Latinh']
  },
  {
    id: '5X4Y1a2b3c4',
    lessonId: 'history-g6-lesson-10',
    chapterTag: 'Chương 4',
    title: 'Bài 10: Đông Nam Á từ thế kỷ I đến thế kỷ X - Lịch sử 6 KNTT',
    teacher: 'Cô Nguyễn Phương Nhi (VietJack)',
    duration: '24:50',
    views: '125.800 lượt xem',
    description: 'Vị trí chiến lược ngã tư đại dương của Đông Nam Á, thương cảng Óc Eo Phù Nam, Thánh địa Mỹ Sơn Chăm-pa và Bảo tháp Borobudur Indonesia.',
    keyTopics: ['Cầu nối hải hải thế giới', 'Vương quốc Phù Nam & Chăm-pa', 'Giao lưu văn hóa Ấn Độ']
  },
  {
    id: '8Z7Y6X5W4V3',
    lessonId: 'history-g6-lesson-12',
    chapterTag: 'Chương 5',
    title: 'Bài 12: Nhà nước Văn Lang - Âu Lạc - Lịch sử lớp 6 Kết nối tri thức',
    teacher: 'Cô Nguyễn Phương Nhi (VietJack)',
    duration: '26:15',
    views: '230.900 lượt xem',
    description: 'Bài giảng sinh động về Thời đại Hùng Vương dựng nước Văn Lang và An Dương Vương dựng nước Âu Lạc, xây thành Cổ Loa, nỏ thần liên châu và kỹ thuật đúc Trống đồng Đông Sơn.',
    keyTopics: ['Thủy tổ Vua Hùng & Bộ máy Văn Lang', 'An Dương Vương & Thành Cổ Loa', 'Nghệ thuật đúc đồng Đông Sơn']
  },
  {
    id: '1A2B3C4D5E6',
    lessonId: 'history-g6-lesson-17',
    chapterTag: 'Chương 5',
    title: 'Bài 17: Bước ngoặt lịch sử & Chiến thắng Bạch Đằng 938 - VietJack',
    teacher: 'Cô Nguyễn Phương Nhi (VietJack)',
    duration: '30:00',
    views: '315.000 lượt xem',
    description: 'Phân tích thiên tài quân sự Ngô Quyền, mưu lược bãi cọc ngầm lợi dụng thủy triều sông Bạch Đằng năm 938 đập tan quân xâm lược Nam Hán, chấm dứt nghìn năm Bắc thuộc.',
    keyTopics: ['Khúc Thừa Dụ giành quyền tự chủ 905', 'Mưu lược bãi cọc ngầm Bạch Đằng', 'Ý nghĩa vĩ đại đại thắng năm 938']
  }
];

interface HistoryStudyHubProps {
  initialSubsystem?: SubsystemType;
  activeSubsystem?: SubsystemType;
  onSubsystemChange?: (subsystem: SubsystemType) => void;
  onNavigateToGeography?: () => void;
}

export const HistoryStudyHub: React.FC<HistoryStudyHubProps> = ({ 
  initialSubsystem = 'history',
  activeSubsystem: controlledSubsystem,
  onSubsystemChange,
  onNavigateToGeography
}) => {
  const navigate = useNavigate();
  const [internalSubsystem, setInternalSubsystem] = useState<SubsystemType>(initialSubsystem);
  const activeSubsystem = controlledSubsystem !== undefined ? controlledSubsystem : internalSubsystem;

  const setActiveSubsystem = (sub: SubsystemType) => {
    setInternalSubsystem(sub);
    if (onSubsystemChange) {
      onSubsystemChange(sub);
    }
    if (sub === 'geography' && onNavigateToGeography) {
      onNavigateToGeography();
    }
  };
  
  // History active tab: 'quizzes' or 'lessons'
  const [activeHistoryTab, setActiveHistoryTab] = useState<'quizzes' | 'lessons'>('lessons');
  
  // Selected Lesson state
  const [selectedLessonId, setSelectedLessonId] = useState<string>(GRADE_6_HISTORY_LESSONS[0].id);
  const currentLesson: HistoryLessonArticle = 
    GRADE_6_HISTORY_LESSONS.find(l => l.id === selectedLessonId) || GRADE_6_HISTORY_LESSONS[0];

  // PDF Page viewer state (Page 1 or Page 2)
  const [currentPdfPage, setCurrentPdfPage] = useState<1 | 2>(1);
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);

  // Flashcards state
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<Set<string>>(new Set());

  // Mindmap expanded branch
  const [expandedBranchId, setExpandedBranchId] = useState<string | null>(null);

  // VietJack Video state
  const [activeVideoId, setActiveVideoId] = useState<string>(VIETJACK_HISTORY_VIDEOS[0].id);
  const activeVideo = VIETJACK_HISTORY_VIDEOS.find(v => v.id === activeVideoId) || VIETJACK_HISTORY_VIDEOS[0];

  // Essay review questions toggle state
  const [expandedEssayIndex, setExpandedEssayIndex] = useState<number | null>(0);

  // Geography test list toggle
  const [geoTab, setGeoTab] = useState<'all' | 'regular' | 'midterm' | 'final'>('all');

  const flashcards = currentLesson.flashcards || [];
  const currentCard: HistoryFlashcardItem | undefined = flashcards[activeCardIndex];

  // Handle Flip Card
  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  // Next Card
  const handleNextCard = () => {
    setIsFlipped(false);
    setActiveCardIndex((prev) => (prev + 1) % flashcards.length);
  };

  // Prev Card
  const handlePrevCard = () => {
    setIsFlipped(false);
    setActiveCardIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  // Toggle Card Mastered
  const toggleMastered = (cardId: string) => {
    setMasteredCards(prev => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  };

  // Generate Short 2-Paragraph PDF with jsPDF
  const handleDownloadLesson2PagePDF = async () => {
    try {
      setIsPdfGenerating(true);
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const t = (str: string) => removeVietnameseTones(str || '');

      // Header Banner
      doc.setFillColor(180, 83, 9); // Amber-700
      doc.rect(10, 10, 190, 24, 'F');
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(255, 255, 255);
      doc.text(t('BO GIAO DUC VA DAO TAO - SGK LICH SU VA DIA LI 6'), 105, 18, { align: 'center' });
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text(t(currentLesson.title), 105, 25, { align: 'center' });
      doc.text(t(`TAI LIEU TOM TAT NGAN GON (2 DOAN VAN COT LOI)`), 105, 30, { align: 'center' });

      // Paragraph 1 Box: Khai niem & Bôi canh cot loi
      doc.setFillColor(254, 243, 199); // Amber-100
      doc.roundedRect(10, 40, 190, 48, 3, 3, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(146, 64, 14); // Amber-800
      doc.text(t('DOAN 1: KHAI NIEM & BOI CANH LICH SU COT LOI'), 15, 48);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(30, 41, 59);
      const p1Text = `${currentLesson.page1.mainConcept} ${currentLesson.page1.coreKnowledge[0]?.bullets.join(' ') || ''}`;
      const p1Lines = doc.splitTextToSize(t(p1Text), 180);
      doc.text(p1Lines, 15, 55, { maxWidth: 180 });

      // Paragraph 2 Box: Tu lieu, Y nghia & Bai hoc
      doc.setFillColor(241, 245, 249); // Slate-100
      doc.roundedRect(10, 96, 190, 48, 3, 3, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(30, 41, 59); // Slate-800
      doc.text(t('DOAN 2: TU LIEU SU HOC, Y NGHIA & BAI HOC TRUC QUAN'), 15, 104);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);
      const p2Text = `${currentLesson.sketchnote.takeaway} ${currentLesson.page2.goldenRules.join(' ') || ''}`;
      const p2Lines = doc.splitTextToSize(t(p2Text), 180);
      doc.text(p2Lines, 15, 111, { maxWidth: 180 });

      // Timeline Highlights Ribbon
      if (currentLesson.page1.chronologyTimeline && currentLesson.page1.chronologyTimeline.length > 0) {
        doc.setFillColor(254, 252, 232); // Yellow-50
        doc.roundedRect(10, 152, 190, 36, 3, 3, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(180, 83, 9);
        doc.text(t('MOC LICH SU THEN CHOT:'), 15, 160);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 41, 59);
        let timelineY = 166;
        currentLesson.page1.chronologyTimeline.slice(0, 3).forEach(tl => {
          doc.text(t(`• [${tl.time}]: ${tl.event}`), 18, timelineY);
          timelineY += 6;
        });
      }

      // Footer
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(t('Learnix Education System - Tai lieu tom tat 2 doan van Lich su 6 chuẩn GDPT 2018'), 105, 280, { align: 'center' });

      // Save PDF
      doc.save(`Learnix_LichSu6_${currentLesson.id}_2DoanVan_TomTat.pdf`);
    } catch (e) {
      console.error('Error generating 2-paragraph PDF:', e);
    } finally {
      setIsPdfGenerating(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* ============================================================== */}
      {/* PHẦN 2: BỘ CHUYỂN ĐỔI 2 PHÂN HỆ RÕ RÀNG: LỊCH SỬ & ĐỊA LÍ     */}
      {/* ============================================================== */}
      <HistoryGeographySubNav 
        activeSubsystem={activeSubsystem}
        onSubsystemChange={setActiveSubsystem}
        grade={6}
        historyStats={{
          lessonsCount: GRADE_6_HISTORY_LESSONS.length,
          quizzesCount: GRADE_6_HISTORY_QUIZZES.length,
          hasMindmap: true,
          hasFlashcards: true
        }}
        geographyStats={{
          topicsCount: 2,
          quizzesCount: 6,
          hasMapSkills: true
        }}
        onQuickJump={(target) => {
          if (target === 'pdf') {
            setActiveHistoryTab('lessons');
            setCurrentPdfPage(1);
          } else if (target === 'mindmap') {
            setActiveHistoryTab('lessons');
            const el = document.getElementById('history-mindmap-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else if (target === 'sketchnote') {
            setActiveHistoryTab('lessons');
            const el = document.getElementById('history-sketchnote-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else if (target === 'flashcards') {
            setActiveHistoryTab('lessons');
            const el = document.getElementById('history-flashcards-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else if (target === 'video') {
            setActiveHistoryTab('lessons');
            const el = document.getElementById('history-video-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else if (target === 'quizzes') {
            if (activeSubsystem === 'history') {
              setActiveHistoryTab('quizzes');
            } else {
              const el = document.getElementById('geography-quizzes-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          } else if (target === 'geo-topics') {
            const el = document.getElementById('geography-topics-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* ============================================================== */}
      {/* NỘI DUNG PHÂN HỆ 1: LỊCH SỬ LỚP 6                             */}
      {/* ============================================================== */}
      {activeSubsystem === 'history' && (
        <div className="space-y-8 animate-fade-in">
          
          {/* Sub-navigation bar for History: Lessons vs Quizzes */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveHistoryTab('lessons')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                  activeHistoryTab === 'lessons'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Tài liệu PDF 2 Trang & Bổ trợ (Mindmap, Sketchnote, Flashcards)</span>
              </button>

              <button
                onClick={() => setActiveHistoryTab('quizzes')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                  activeHistoryTab === 'quizzes'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Đề thi Lịch sử Quy chuẩn (MCQ, Đúng/Sai, Kéo thả)</span>
              </button>
            </div>

            <span className="text-xs font-bold text-gray-500">
              Chuẩn GDPT 2018 • Bộ GD&ĐT
            </span>
          </div>

          {/* ============================================================== */}
          {/* PHẦN 4: TIÊU CHUẨN TÀI LIỆU HỌC TẬP (LỊCH SỬ 6)               */}
          {/* TÀI LIỆU PDF ĐÚNG 2 TRANG + MINDMAP + SKETCHNOTE + FLASHCARDS  */}
          {/* ============================================================== */}
          {activeHistoryTab === 'lessons' && (
            <div className="space-y-8 animate-fade-in">
              
              {/* Lesson Picker Carousel/Tabs */}
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Chọn bài học Lịch sử 6 để nghiên cứu tài liệu siêu chi tiết:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                  {GRADE_6_HISTORY_LESSONS.map((lesson) => {
                    const isSelected = lesson.id === selectedLessonId;
                    
                    // Determine chapter badge
                    let chapterTag = 'Chương 1';
                    if (lesson.lessonNumber === 3) chapterTag = 'Chương 2';
                    else if (lesson.lessonNumber === 6) chapterTag = 'Chương 3';
                    else if (lesson.lessonNumber === 10) chapterTag = 'Chương 4';
                    else if (lesson.lessonNumber === 12) chapterTag = 'Chương 5 (Phần 1)';
                    else if (lesson.lessonNumber === 17) chapterTag = 'Chương 5 (Phần 2)';

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setSelectedLessonId(lesson.id);
                          setCurrentPdfPage(1);
                          setActiveCardIndex(0);
                          setIsFlipped(false);
                        }}
                        className={`p-4 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-950 dark:text-amber-100 shadow-md ring-2 ring-amber-400/20'
                            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1">
                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                              isSelected ? 'bg-amber-200 text-amber-900' : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200'
                            }`}>
                              {chapterTag}
                            </span>
                            <span className="text-[10px] font-bold text-gray-400">
                              HK{lesson.semester} • Bài {lesson.lessonNumber}
                            </span>
                          </div>
                          <h4 className="font-black text-sm mt-2 leading-snug line-clamp-1">
                            {lesson.title}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                            {lesson.subtitle}
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-amber-600 dark:text-amber-400 pt-2 border-t border-amber-200/40 dark:border-amber-900/40">
                          <span>Mindmap + PDF 2 Trang</span>
                          <span>{lesson.flashcards.length} Cards</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* DOCUMENT VIEWER: TÀI LIỆU PDF TÓM TẮT 2 ĐOẠN VĂN          */}
              {/* -------------------------------------------------------- */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-amber-200 dark:border-amber-900/60 shadow-lg p-6 sm:p-8 space-y-6">
                
                {/* Header Action Bar of PDF Viewer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 text-xs font-black uppercase tracking-wider">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Tài liệu PDF Tóm Tắt Ngắn Gọn (Đúng 2 Đoạn Văn)</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                      {currentLesson.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {currentLesson.sgkReference} • {currentLesson.author}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {/* Download PDF Button */}
                    <button
                      onClick={handleDownloadLesson2PagePDF}
                      disabled={isPdfGenerating}
                      className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                      title="Tải file PDF tóm tắt 2 đoạn văn"
                    >
                      <Download className="w-4 h-4" />
                      <span>{isPdfGenerating ? 'Đang xuất PDF...' : 'Tải File PDF 2 Đoạn Văn'}</span>
                    </button>
                  </div>
                </div>

                {/* PDF 2-PARAGRAPH CONCISE VIEW */}
                <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/40 dark:bg-gray-900/40 border border-amber-200 dark:border-amber-800/60 space-y-6">
                  
                  {/* Paragraph 1 Box */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border-l-4 border-amber-500 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>Đoạn 1: Khái niệm & Bối cảnh Lịch sử Cốt lõi</span>
                      </h5>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200">
                        Đoạn 1/2
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                      {currentLesson.page1.mainConcept} {currentLesson.page1.coreKnowledge[0]?.bullets.join(' ')}
                    </p>
                  </div>

                  {/* Paragraph 2 Box */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border-l-4 border-teal-500 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-black uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-teal-500" />
                        <span>Đoạn 2: Tư liệu Sử học, Ý nghĩa & Bài học Thực tiễn</span>
                      </h5>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-200">
                        Đoạn 2/2
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                      {currentLesson.sketchnote.takeaway} {currentLesson.page2.goldenRules.join(' ')}
                    </p>
                  </div>

                  {/* Timeline Ribbon (Compact) */}
                  {currentLesson.page1.chronologyTimeline && currentLesson.page1.chronologyTimeline.length > 0 && (
                    <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
                      <span className="text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                        ⏱️ Mốc thời gian then chốt:
                      </span>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {currentLesson.page1.chronologyTimeline.slice(0, 3).map((tl, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-900 dark:text-amber-200 font-bold text-xs border border-amber-200 dark:border-amber-800">
                            [{tl.time}]: {tl.event}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* PHẦN BỔ TRỢ 1: MINDMAP (SƠ ĐỒ TƯ DUY)                     */}
              {/* -------------------------------------------------------- */}
              <div id="history-mindmap-section" className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-indigo-100 dark:border-indigo-950/60 shadow-md p-6 sm:p-8 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black">
                      🧠
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                        <span>Sơ đồ Tư duy Mindmap các Chương</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold">
                          Đa nhánh chuẩn GDPT 2018
                        </span>
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Hệ thống hóa trực quan kiến thức từ Chương 1 đến Chương 5 môn Lịch sử 6
                      </p>
                    </div>
                  </div>

                  {/* Chapter/Lesson Mindmap Selector Bar */}
                  <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                    {GRADE_6_HISTORY_LESSONS.map((ls) => {
                      const isActive = ls.id === selectedLessonId;
                      return (
                        <button
                          key={ls.id}
                          onClick={() => setSelectedLessonId(ls.id)}
                          className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
                            isActive
                              ? 'bg-amber-600 text-white shadow-xs'
                              : 'text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/60'
                          }`}
                          title={ls.title}
                        >
                          Bài {ls.lessonNumber}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Hand-Drawn Organic Sketchy Mindmap Canvas (Strict Loose/Organic Hand-Drawn Aesthetic) */}
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
                          {currentLesson.lessonNumber === 2 ? '📖 BÀI 2 • TƯ LIỆU LỊCH SỬ' : `📖 BÀI ${currentLesson.lessonNumber} • TƯ DUY HÌNH ẢNH`}
                        </span>
                        <span className="text-2xl animate-bounce">👧🏻</span>
                      </div>

                      <h5 className="text-lg sm:text-xl font-black tracking-tight text-amber-950 dark:text-amber-100 font-serif leading-snug uppercase">
                        {currentLesson.mindmap.centralTheme}
                      </h5>
                    </div>

                    {/* Loose Organic Branch Clusters radiating outwards (No blocky lists, short 1-3 word labels) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-2 relative z-10">
                      {currentLesson.mindmap.branches.map((branch, idx) => {
                        // Organic hand-drawn sketchy branch colors & curve accents
                        const branchTheme = [
                          {
                            titleBg: 'bg-cyan-500 text-white',
                            badgeBg: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-300 dark:border-cyan-800 text-cyan-900 dark:text-cyan-200',
                            itemBorder: 'border-cyan-300 dark:border-cyan-800 bg-cyan-50/70 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-100',
                            lineColor: 'border-cyan-400',
                            icon: '🗣️'
                          },
                          {
                            titleBg: 'bg-emerald-600 text-white',
                            badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200',
                            itemBorder: 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100',
                            lineColor: 'border-emerald-400',
                            icon: '📜'
                          },
                          {
                            titleBg: 'bg-amber-500 text-white',
                            badgeBg: 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200',
                            itemBorder: 'border-amber-300 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100',
                            lineColor: 'border-amber-400',
                            icon: '🏺'
                          },
                          {
                            titleBg: 'bg-rose-500 text-white',
                            badgeBg: 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200',
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
                                  className={`px-3.5 py-2 rounded-2xl border-2 ${branchTheme.itemBorder} shadow-xs font-black text-xs flex items-center gap-2 transform hover:scale-105 transition-transform cursor-default`}
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
              </div>

              {/* -------------------------------------------------------- */}
              {/* PHẦN BỔ TRỢ 2: SKETCHNOTE (GHI CHÉP HÌNH ẢNH MINH HỌA)   */}
              {/* -------------------------------------------------------- */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-emerald-100 dark:border-emerald-950/60 shadow-md p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black">
                      🎨
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                        <span>2. Sketchnote (Ghi chép Trực quan)</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold">
                          Minh họa sinh động
                        </span>
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Phong cách sổ tay hình họa giúp kích hoạt trí nhớ hình ảnh dài hạn
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sketchnote Board */}
                <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/20 dark:bg-gray-900/60 border-2 border-dashed border-amber-300 dark:border-gray-700 space-y-6">
                  
                  {/* Sketchnote Banner */}
                  <div className="text-center space-y-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 text-xs font-black uppercase tracking-wider">
                      {currentLesson.sketchnote.badge}
                    </span>
                    <h5 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                      {currentLesson.sketchnote.title}
                    </h5>
                    {currentLesson.sketchnote.quote && (
                      <p className="text-xs font-bold text-amber-700 dark:text-amber-400 italic max-w-xl mx-auto">
                        "{currentLesson.sketchnote.quote}"
                      </p>
                    )}
                  </div>

                  {/* Sketchnote 3 Columns: Highlights | Key Figures | Timeline Ribbon */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    
                    {/* Column 1: Key Highlights Box */}
                    <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-amber-200 dark:border-gray-700 shadow-xs space-y-3">
                      <span className="text-xs font-black uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                        <span>📌</span>
                        <span>Điểm nhấn mấu chốt</span>
                      </span>
                      <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                        {currentLesson.sketchnote.highlights.map((hl, i) => (
                          <li key={i} className="p-2 rounded-xl bg-amber-50/40 dark:bg-gray-900/40 border border-amber-100 dark:border-gray-800 leading-relaxed font-medium">
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Key Figures */}
                    <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-gray-700 shadow-xs space-y-3">
                      <span className="text-xs font-black uppercase text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                        <span>👑</span>
                        <span>Nhân vật then chốt</span>
                      </span>
                      <div className="space-y-2.5">
                        {currentLesson.sketchnote.keyFigures?.map((kf, i) => (
                          <div key={i} className="p-3 rounded-xl bg-indigo-50/40 dark:bg-gray-900/40 border border-indigo-100 dark:border-gray-800 text-xs space-y-1">
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

                    {/* Column 3: Timeline Ribbon */}
                    <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-emerald-200 dark:border-gray-700 shadow-xs space-y-3">
                      <span className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <span>⏳</span>
                        <span>Dải ruy băng thời gian</span>
                      </span>
                      <div className="space-y-2">
                        {currentLesson.sketchnote.timeline?.map((tl, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-emerald-50/40 dark:bg-gray-900/40 border border-emerald-100 dark:border-gray-800 flex items-center gap-2.5 text-xs">
                            <span className="px-2 py-0.5 rounded-lg bg-emerald-600 text-white font-black text-[10px] shrink-0">
                              {tl.year}
                            </span>
                            <span className="font-semibold text-gray-800 dark:text-gray-200 truncate">
                              {tl.event}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sketchnote Takeaway Banner */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-indigo-500/10 border border-amber-300/60 dark:border-gray-700 text-center">
                    <span className="text-xs font-black text-amber-800 dark:text-amber-300">
                      💡 Thông điệp vàng: {currentLesson.sketchnote.takeaway}
                    </span>
                  </div>
                  {/* Essay Exam Review Questions Box */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-emerald-200 dark:border-gray-700 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2.5">
                      <span className="text-xs font-black uppercase text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-emerald-600" />
                        <span>Góc Ôn Tập Câu Hỏi Tự Luận Trọng Tâm Có Trong Bài Thi</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                        {currentLesson.page2.reviewQuestions.length} Câu Tự Luận Ôn Thi
                      </span>
                    </div>

                    <div className="space-y-3">
                      {currentLesson.page2.reviewQuestions.map((qText, qIdx) => {
                        const isExpanded = expandedEssayIndex === qIdx;
                        return (
                          <div key={qIdx} className="rounded-2xl border border-emerald-100 dark:border-gray-700 overflow-hidden">
                            <button
                              onClick={() => setExpandedEssayIndex(isExpanded ? null : qIdx)}
                              className="w-full p-3.5 bg-emerald-50/50 dark:bg-gray-900/60 hover:bg-emerald-100/50 text-left font-bold text-xs text-gray-900 dark:text-white flex items-center justify-between gap-2 cursor-pointer transition-colors"
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                                  {qIdx + 1}
                                </span>
                                <span>{qText}</span>
                              </span>
                              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px] shrink-0">
                                {isExpanded ? '▲ Ẩn gợi ý' : '▼ Xem dàn ý đạt điểm tối đa'}
                              </span>
                            </button>

                            {isExpanded && (
                              <div className="p-4 bg-white dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 leading-relaxed border-t border-emerald-100 dark:border-gray-700 space-y-2.5">
                                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-black text-[11px] uppercase tracking-wider">
                                  <Check className="w-3.5 h-3.5" />
                                  <span>GỢI Ý TRẢ LỜI CHUẨN ĐIỂM TỐI ĐA (KIM CỔT GDPT 2018):</span>
                                </div>
                                <p className="p-3 rounded-xl bg-emerald-50/40 dark:bg-gray-900/40 border border-emerald-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-medium">
                                  {currentLesson.page1.mainConcept}
                                </p>
                                <div className="space-y-1 pl-1">
                                  <span className="font-bold text-emerald-800 dark:text-emerald-300 text-[11px] block">
                                    Ý cốt lõi cần trình bày trong bài làm:
                                  </span>
                                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 text-[11px]">
                                    {currentLesson.page1.coreKnowledge[0]?.bullets.map((b, bi) => (
                                      <li key={bi}>{b}</li>
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
              </div>

              {/* -------------------------------------------------------- */}
              {/* PHẦN BỔ TRỢ 3: BỘ THẺ GHI NHỚ (FLASHCARDS) CỤC BỘ         */}
              {/* Ít nhất 6 tấm thẻ, lật 3D, đánh dấu đã thuộc, không lỗi   */}
              {/* -------------------------------------------------------- */}
              <div id="history-flashcards-section" className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-rose-100 dark:border-rose-950/60 shadow-md p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 dark:border-gray-700 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center font-black">
                      🗂️
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                        <span>3. Bộ Thẻ Ghi Nhớ (Flashcards)</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 font-bold">
                          {flashcards.length} Thẻ • Tích hợp cục bộ
                        </span>
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Lật thẻ 3D để ôn tập định nghĩa, mốc thời gian và luận điểm trọng tâm
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-500">
                      Đã thuộc: <span className="text-emerald-600 font-black">{masteredCards.size}</span> / {flashcards.length}
                    </span>
                    <button
                      onClick={() => {
                        setActiveCardIndex(Math.floor(Math.random() * flashcards.length));
                        setIsFlipped(false);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold text-xs hover:bg-gray-200 flex items-center gap-1 cursor-pointer"
                      title="Trộn ngẫu nhiên thẻ"
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                      <span>Trộn thẻ</span>
                    </button>
                  </div>
                </div>

                {/* 3D Flip Card Container */}
                {currentCard && (
                  <div className="max-w-xl mx-auto space-y-5">
                    
                    {/* The Interactive Flipping Card */}
                    <div 
                      onClick={handleFlipCard}
                      className="cursor-pointer group relative min-h-[260px] sm:min-h-[290px] rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-center transition-all duration-300 shadow-md hover:shadow-xl border-2 select-none bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-950 border-amber-300 dark:border-amber-800/60"
                    >
                      {/* Top Card Badge */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2.5 py-1 rounded-xl bg-white dark:bg-gray-800 text-amber-700 dark:text-amber-300 font-black uppercase text-[10px] shadow-xs border border-amber-200 dark:border-gray-700">
                          {currentCard.tag}
                        </span>

                        <span className="text-xs font-bold text-gray-400">
                          Thẻ {activeCardIndex + 1} / {flashcards.length}
                        </span>
                      </div>

                      {/* Card Content (Front vs Back) */}
                      <div className="my-auto py-4 space-y-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">
                          {isFlipped ? 'ĐÁP ÁN & GIẢI THÍCH CHI TIẾT' : 'CÂU HỎI / KHÁI NIỆM TRỌNG TÂM'}
                        </span>
                        <h5 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white leading-relaxed">
                          {isFlipped ? currentCard.back : currentCard.front}
                        </h5>
                      </div>

                      {/* Bottom Hint to Flip */}
                      <div className="pt-2 border-t border-amber-200/40 dark:border-gray-800 flex items-center justify-center gap-1.5 text-xs text-gray-400 group-hover:text-amber-600 transition-colors">
                        <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                        <span>{isFlipped ? 'Nhấp để quay lại câu hỏi' : 'Nhấp vào thẻ để lật đáp án'}</span>
                      </div>
                    </div>

                    {/* Navigation Controls under Flashcard */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={handlePrevCard}
                        className="px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-50 flex items-center gap-1 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Thẻ trước</span>
                      </button>

                      <button
                        onClick={() => toggleMastered(currentCard.id)}
                        className={`px-5 py-2.5 rounded-xl font-black text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                          masteredCards.has(currentCard.id)
                            ? 'bg-emerald-600 text-white'
                            : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{masteredCards.has(currentCard.id) ? 'Đã thành thạo ✓' : 'Đánh dấu đã thuộc'}</span>
                      </button>

                      <button
                        onClick={handleNextCard}
                        className="px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-50 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Thẻ tiếp</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* -------------------------------------------------------- */}
              {/* PHẦN BỔ TRỢ 4: VIDEO BÀI GIẢNG YOUTUBE (VIETJACK)         */}
              {/* Kênh VietJack playlist "Bài giảng Lịch sử lớp 6 - Kết nối tri thức" */}
              {/* -------------------------------------------------------- */}
              <div id="history-video-section" className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-red-100 dark:border-red-950/60 shadow-md p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center font-black">
                      📺
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                        <span>4. Video Bài Giảng VietJack (SGK Kết nối tri thức)</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300 font-bold">
                          Kênh VietJack Official
                        </span>
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Hệ thống video bài giảng Lịch sử 6 do thầy cô VietJack giảng dạy chi tiết chuẩn chương trình mới
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.youtube.com/results?search_query=Vietjack+Lich+su+lop+6+ket+noi+tri+thuc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <span>Mở Playlist VietJack trên YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Video Player + Video Selector Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column: Embed YouTube Player */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-red-200 dark:border-gray-700 bg-black">
                      <iframe 
                        src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=0&rel=0&modestbranding=1`}
                        title={activeVideo.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    {/* Active Video Info Banner */}
                    <div className="p-5 rounded-2xl bg-red-50/50 dark:bg-gray-900/60 border border-red-200 dark:border-gray-800 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-red-600 text-white">
                          {activeVideo.chapterTag} • VietJack
                        </span>
                        <span className="text-xs font-bold text-gray-500">
                          {activeVideo.teacher} • {activeVideo.duration} • {activeVideo.views}
                        </span>
                      </div>
                      <h5 className="font-black text-base text-gray-900 dark:text-white leading-snug">
                        {activeVideo.title}
                      </h5>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        {activeVideo.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {activeVideo.keyTopics.map((kt, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-white dark:bg-gray-800 text-red-700 dark:text-red-300 font-bold border border-red-200 dark:border-gray-700">
                            ✓ {kt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Playlist Video Selector */}
                  <div className="space-y-3">
                    <span className="text-xs font-black uppercase text-gray-500 dark:text-gray-400 block">
                      Danh sách bài giảng VietJack (7 Video bài học):
                    </span>
                    <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                      {VIETJACK_HISTORY_VIDEOS.map((vid) => {
                        const isSelected = vid.id === activeVideoId;
                        return (
                          <button
                            key={vid.id}
                            onClick={() => setActiveVideoId(vid.id)}
                            className={`w-full p-3.5 rounded-2xl text-left border-2 transition-all cursor-pointer flex items-start gap-3 ${
                              isSelected
                                ? 'bg-red-50 dark:bg-red-950/40 border-red-500 text-red-950 dark:text-red-100 shadow-md ring-2 ring-red-400/20'
                                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center font-black text-xs ${
                              isSelected ? 'bg-red-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600'
                            }`}>
                              ▶
                            </div>
                            <div className="space-y-1 min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1">
                                <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300">
                                  {vid.chapterTag}
                                </span>
                                <span className="text-[10px] font-bold text-gray-400">
                                  {vid.duration}
                                </span>
                              </div>
                              <h6 className="font-bold text-xs line-clamp-2 leading-snug">
                                {vid.title}
                              </h6>
                              <p className="text-[10px] text-gray-500 line-clamp-1">
                                {vid.teacher}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* PHẦN 3: NGÂN HÀNG ĐỀ THI LỊCH SỬ QUY CHUẨN MỚI                  */}
          {/* (THƯỜNG XUYÊN >= 15 MCQ+2 TF+3 DD; GIỮA KỲ; CUỐI KỲ ĐÚNG 25+10+7)*/}
          {/* ============================================================== */}
          {activeHistoryTab === 'quizzes' && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <div className="text-xs text-amber-900 dark:text-amber-200 space-y-0.5">
                  <p className="font-black uppercase tracking-wider text-[11px]">
                    Quy chuẩn cấu trúc bài kiểm tra Lịch sử 6 (Bộ GD&ĐT):
                  </p>
                  <p>• <strong>Kiểm tra Thường xuyên:</strong> Ít nhất 15 câu MCQ + 2 câu Đúng/Sai + 3 câu tự luận kéo thả (Tổng 20 câu - 15 phút).</p>
                  <p>• <strong>Kiểm tra Giữa kỳ:</strong> Ít nhất 20 câu MCQ + 5 câu Đúng/Sai + 5 câu tự luận kéo thả (Tổng 30 câu - 45 phút).</p>
                  <p>• <strong>Kiểm tra Cuối kỳ:</strong> Đúng 25 câu MCQ + 10 câu Đúng/Sai + 7 câu tự luận kéo thả (Tổng 42 câu - 60 phút).</p>
                </div>
              </div>

              {/* Quizzes List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {GRADE_6_HISTORY_QUIZZES.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="p-6 rounded-3xl bg-white dark:bg-gray-800 border-2 border-amber-200 dark:border-amber-950 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                          {quiz.testType === 'regular' ? '📝 Thường xuyên (15p)' : quiz.testType === 'midterm' ? '🎯 Giữa kỳ (45p)' : '🏆 Cuối kỳ (60p)'}
                        </span>

                        <span className="text-[11px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-lg">
                          +{quiz.xpReward} XP
                        </span>
                      </div>

                      <h4 className="text-base font-black text-gray-900 dark:text-white leading-snug line-clamp-2">
                        {quiz.title}
                      </h4>

                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                        {quiz.description}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-gray-500 font-bold pt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          {quiz.durationMinutes} phút
                        </span>
                        <span>•</span>
                        <span>{quiz.questions.length} câu hỏi chuẩn</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-700 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => navigate(`/quiz/${quiz.id}?mode=review`)}
                        className="py-2.5 px-2 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 hover:bg-amber-100 rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Ôn tập</span>
                      </button>

                      <button
                        onClick={() => navigate(`/quiz/${quiz.id}?mode=test`)}
                        className="py-2.5 px-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Thi thử</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* ============================================================== */}
      {/* NỘI DUNG PHÂN HỆ 2: ĐỊA LÍ LỚP 6                               */}
      {/* ============================================================== */}
      {activeSubsystem === 'geography' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-900 to-emerald-950 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-teal-300">
                Phân hệ môn học
              </span>
              <h3 className="text-xl sm:text-2xl font-black">
                Phân môn Địa lí Lớp 6 (GDPT 2018)
              </h3>
              <p className="text-xs text-teal-100/90 max-w-xl">
                Bản đồ học, cấu tạo vỏ Trái Đất, khí quyển, các đới khí hậu, thủy quyển và mối quan hệ sinh thái con người.
              </p>
            </div>

            <button
              onClick={() => setActiveSubsystem('history')}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Landmark className="w-4 h-4 text-amber-300" />
              <span>Chuyển sang Phân môn Lịch sử</span>
            </button>
          </div>

          {/* Sub-tab view buttons for Geography */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setGeoTab('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                geoTab === 'all' ? 'bg-teal-600 text-white shadow-xs' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100'
              }`}
            >
              Tất cả đề kiểm tra Địa lí
            </button>
            <button
              onClick={() => setGeoTab('regular')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                geoTab === 'regular' ? 'bg-teal-600 text-white shadow-xs' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100'
              }`}
            >
              📝 Thường xuyên 15p
            </button>
            <button
              onClick={() => setGeoTab('midterm')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                geoTab === 'midterm' ? 'bg-teal-600 text-white shadow-xs' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100'
              }`}
            >
              🎯 Giữa kỳ 45p
            </button>
            <button
              onClick={() => setGeoTab('final')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                geoTab === 'final' ? 'bg-teal-600 text-white shadow-xs' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100'
              }`}
            >
              🏆 Cuối kỳ 60p
            </button>
          </div>

          {/* Geography Overview Cards */}
          <div id="geography-topics-section" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border-2 border-teal-100 dark:border-gray-700 shadow-xs space-y-3">
              <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-xl bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                Học kỳ 1 • Tự nhiên Trái Đất
              </span>
              <h4 className="text-lg font-black text-gray-900 dark:text-white">
                Bản đồ học, Tọa độ địa lý & Cấu tạo Trái Đất
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Hệ thống kinh vĩ tuyến, lưới kinh vĩ tuyến, tỉ lệ bản đồ, chuyển động tự quay quanh trục của Trái Đất và hệ quả (ngày đêm luân phiên, giờ trên Trái Đất).
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-teal-600">
                <span>2 bài thường xuyên 15p • 1 đề giữa kỳ</span>
                <button 
                  onClick={() => navigate('/quiz/quiz-g6-s1-history-geo?mode=test')}
                  className="px-3.5 py-1.5 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Thi thử Giữa kỳ</span>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border-2 border-teal-100 dark:border-gray-700 shadow-xs space-y-3">
              <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-xl bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                Học kỳ 2 • Khí quyển & Thủy quyển
              </span>
              <h4 className="text-lg font-black text-gray-900 dark:text-white">
                Khí hậu, Nước trên Trái Đất & Sinh thái
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Các tầng khí quyển, nhiệt độ không khí, các khối khí và đới khí hậu trên Trái Đất; chu trình nước, sông, hồ, nước ngầm và biến đổi khí hậu.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-teal-600">
                <span>2 bài thường xuyên 15p • 1 đề cuối kỳ</span>
                <button 
                  onClick={() => navigate('/quiz/quiz-g6-s2-history-geo?mode=test')}
                  className="px-3.5 py-1.5 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Thi thử Cuối kỳ</span>
                </button>
              </div>
            </div>
          </div>

          {/* Geography Interactive Quizzes List */}
          <div id="geography-quizzes-section" className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-teal-600" />
                  <span>Hệ thống Đề kiểm tra Phân môn Địa lí 6</span>
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Đề kiểm tra thường xuyên và định kỳ chuẩn chương trình GDPT 2018 (Bản đồ học & Tự nhiên Trái Đất).
                </p>
              </div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-xl border border-teal-200/60 dark:border-teal-800/60">
                Chuẩn Bộ GD&ĐT
              </span>
            </div>

            {/* Quizzes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  id: 'quiz-g6-s1-hisgeo-regular',
                  title: 'Kiểm tra 15p: Nguyên thủy & Hệ tọa độ Bản đồ',
                  semester: 1,
                  type: 'regular' as const,
                  durationMinutes: 15,
                  questionsCount: 10,
                  desc: 'Quy ước phương hướng bản đồ, kinh tuyến gốc Greenwich, vĩ tuyến gốc Xích đạo và tỉ lệ bản đồ.',
                  focus: 'Bản đồ học'
                },
                {
                  id: 'quiz-g6-s1-hisgeo-regular-2',
                  title: 'Kiểm tra 15p: Tọa độ Địa lý & Lưới kinh vĩ tuyến',
                  semester: 1,
                  type: 'regular' as const,
                  durationMinutes: 15,
                  questionsCount: 10,
                  desc: 'Thực hành xác định tọa độ địa lý, độ kinh độ vĩ trên bản đồ địa hình và mô hình quả địa cầu.',
                  focus: 'Tọa độ Địa lý'
                },
                {
                  id: 'quiz-g6-s1-history-geo',
                  title: 'Kiểm tra Giữa kỳ 1: Bản đồ, Tọa độ & Trái Đất',
                  semester: 1,
                  type: 'midterm' as const,
                  durationMinutes: 45,
                  questionsCount: 20,
                  desc: 'Đề kiểm tra định kỳ 45 phút: Chuyển động tự quay quanh trục, ngày đêm luân phiên và múi giờ GMT.',
                  focus: 'Tổng hợp Giữa kỳ'
                },
                {
                  id: 'quiz-g6-s2-hisgeo-regular',
                  title: 'Kiểm tra 15p: Thủy quyển & Nước trên Trái Đất',
                  semester: 2,
                  type: 'regular' as const,
                  durationMinutes: 15,
                  questionsCount: 10,
                  desc: 'Vòng tuần hoàn lớn của nước, sông ngòi, phụ lưu, chi lưu, hồ nước và bảo vệ tài nguyên nước.',
                  focus: 'Thủy quyển'
                },
                {
                  id: 'quiz-g6-s2-hisgeo-regular-2',
                  title: 'Kiểm tra 15p: Khí quyển & Các đới khí hậu',
                  semester: 2,
                  type: 'regular' as const,
                  durationMinutes: 15,
                  questionsCount: 10,
                  desc: 'Cấu tạo các tầng khí quyển, nhiệt độ, không khí, các đới khí hậu nhiệt đới, ôn đới và hàn đới.',
                  focus: 'Khí quyển'
                },
                {
                  id: 'quiz-g6-s2-history-geo',
                  title: 'Kiểm tra Cuối kỳ 2: Tổng hợp Tự nhiên Trái Đất',
                  semester: 2,
                  type: 'final' as const,
                  durationMinutes: 60,
                  questionsCount: 25,
                  desc: 'Đề kiểm tra toàn diện cuối năm học 60 phút: Mối quan hệ giữa khí quyển, thủy quyển và sinh quyển.',
                  focus: 'Đánh giá Toàn diện'
                }
              ]
                .filter(q => {
                  if (geoTab === 'all') return true;
                  return q.type === geoTab;
                })
                .map(q => {
                  const allG6Quizzes = [...getCurriculumQuizzes(6, 1), ...getCurriculumQuizzes(6, 2)];
                  const matchedQuiz = allG6Quizzes.find(item => item.id === q.id) || ({
                    id: q.id,
                    title: q.title,
                    grade: 6,
                    semester: q.semester,
                    subject: 'Địa lí',
                    subjectVi: 'Địa lí',
                    durationMinutes: q.durationMinutes,
                    questions: []
                  } as unknown as CurriculumQuiz);

                  return (
                    <div 
                      key={q.id}
                      className="p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-teal-100 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-700/80 shadow-xs flex flex-col justify-between gap-3 transition-all"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                            q.type === 'regular'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : q.type === 'midterm'
                              ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                              : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                          }`}>
                            {q.type === 'regular' ? '15 phút' : q.type === 'midterm' ? 'Giữa kỳ (45p)' : 'Cuối kỳ (60p)'}
                          </span>
                          <span className="text-[10px] font-bold text-gray-400">
                            HK{q.semester} • {q.questionsCount} câu
                          </span>
                        </div>

                        <h5 className="text-sm font-black text-gray-900 dark:text-white line-clamp-2">
                          {q.title}
                        </h5>

                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                          {q.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 dark:border-gray-700/80 flex items-center justify-between gap-2">
                        <button
                          onClick={() => navigate(`/quiz/${q.id}?mode=review`)}
                          className="flex-1 py-1.5 px-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl text-xs font-bold transition-colors text-center"
                        >
                          Ôn tập
                        </button>
                        <button
                          onClick={() => navigate(`/quiz/${q.id}?mode=test`)}
                          className="flex-1 py-1.5 px-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs text-center flex items-center justify-center gap-1"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Thi thử</span>
                        </button>
                        <QuizA4PdfButton
                          quiz={matchedQuiz}
                          compact
                          className="p-1.5 text-gray-500 hover:text-teal-600 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default HistoryStudyHub;
