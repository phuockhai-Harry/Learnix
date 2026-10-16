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
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GRADE_6_HISTORY_LESSONS, HistoryLessonArticle, HistoryFlashcardItem } from '../data/historyGrade6Data';
import { GRADE_6_HISTORY_QUIZZES } from '../data/historyGrade6Quizzes';
import { getCurriculumQuizzes, CurriculumQuiz } from '../data/curriculumData';
import { jsPDF } from 'jspdf';
import { removeVietnameseTones } from '../lib/pdfUnicode';
import { QuizA4PdfButton } from './QuizA4PdfButton';
import { HistoryGeographySubNav, SubsystemType } from './HistoryGeographySubNav';

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

  // Generate Authentic 2-Page PDF with jsPDF
  const handleDownloadLesson2PagePDF = async () => {
    try {
      setIsPdfGenerating(true);
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const t = (str: string) => removeVietnameseTones(str || '');

      // ================= PAGE 1 =================
      doc.setFillColor(180, 83, 9); // Amber-700
      doc.rect(10, 10, 190, 24, 'F');
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(255, 255, 255);
      doc.text(t('BO GIAO DUC VA DAO TAO - SGK LICH SU VA DIA LI 6'), 105, 18, { align: 'center' });
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text(t(currentLesson.title), 105, 25, { align: 'center' });
      doc.text(t(`TRANG 1/2: KIEN THUC TRONG TAM & SO DO BAI HOC`), 105, 30, { align: 'center' });

      // Concept Box
      doc.setFillColor(254, 243, 199); // Amber-100
      doc.roundedRect(10, 38, 190, 20, 2, 2, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(146, 64, 14); // Amber-800
      doc.text(t('I. KHAI NIEM VA Y NGHIA COT LOI:'), 14, 44);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(30, 41, 59);
      const conceptLines = doc.splitTextToSize(t(currentLesson.page1.mainConcept), 182);
      doc.text(conceptLines, 14, 49);

      // Core Knowledge Sections
      let curY = 64;
      currentLesson.page1.coreKnowledge.forEach((sec, idx) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(180, 83, 9);
        doc.text(t(`${idx + 1}. ${sec.sectionTitle}`), 12, curY);
        curY += 5;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 41, 59);
        sec.bullets.forEach(b => {
          const bulletLines = doc.splitTextToSize(t(`• ${b}`), 184);
          doc.text(bulletLines, 14, curY);
          curY += bulletLines.length * 4.2;
        });
        curY += 2;
      });

      // Timeline box on Page 1
      if (currentLesson.page1.chronologyTimeline && currentLesson.page1.chronologyTimeline.length > 0) {
        doc.setFillColor(241, 245, 249);
        doc.roundedRect(10, curY, 190, 40, 2, 2, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(15, 23, 42);
        doc.text(t('DONG THOI GIAN LICH SU TIEU BIEU:'), 14, curY + 6);
        curY += 11;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        currentLesson.page1.chronologyTimeline.forEach(tl => {
          doc.text(t(`[${tl.time}]: ${tl.event}`), 16, curY);
          curY += 5;
        });
      }

      // Footer Page 1
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(t('Learnix Education System - Tai lieu on tap chuan kien thuc Lich su lop 6'), 105, 285, { align: 'center' });
      doc.text('Trang 1 / 2', 195, 285, { align: 'right' });

      // ================= PAGE 2 =================
      doc.addPage();
      
      doc.setFillColor(30, 41, 59); // Slate-800
      doc.rect(10, 10, 190, 20, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(255, 255, 255);
      doc.text(t(`TRANG 2/2: TU LIEU SU HOC & CAU HOI CUNG CO - ${currentLesson.title}`), 105, 22, { align: 'center' });

      let curY2 = 38;
      // Historical Quotes
      if (currentLesson.page2.historicalQuotes.length > 0) {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(180, 83, 9);
        doc.text(t('II. TU LIEU SU LIEU TRICH DAN:'), 12, curY2);
        curY2 += 6;

        currentLesson.page2.historicalQuotes.forEach(q => {
          doc.setFillColor(254, 242, 242);
          doc.roundedRect(12, curY2, 186, 18, 2, 2, 'F');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(153, 27, 27);
          doc.text(t(`Nguon: ${q.source}`), 16, curY2 + 5);
          doc.setFont('helvetica', 'italic');
          doc.setTextColor(15, 23, 42);
          doc.text(t(q.quote), 16, curY2 + 10);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.5);
          doc.setTextColor(100, 116, 139);
          doc.text(t(q.context), 16, curY2 + 15, { maxWidth: 178 });
          curY2 += 22;
        });
      }

      // Golden Takeaways
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(180, 83, 9);
      doc.text(t('III. GHI NHO VANG COT LOI:'), 12, curY2);
      curY2 += 6;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(30, 41, 59);
      currentLesson.page2.goldenRules.forEach(rule => {
        const ruleLines = doc.splitTextToSize(t(`★ ${rule}`), 184);
        doc.text(ruleLines, 14, curY2);
        curY2 += ruleLines.length * 4.5;
      });
      curY2 += 4;

      // Review Questions
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      doc.text(t('IV. HE THONG CAU HOI CUNG CO & VAN DUNG:'), 12, curY2);
      curY2 += 6;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      currentLesson.page2.reviewQuestions.forEach(q => {
        const qLines = doc.splitTextToSize(t(q), 184);
        doc.text(qLines, 14, curY2);
        curY2 += qLines.length * 4.5;
      });

      // Footer Page 2
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(t('Learnix Education System - Ban quyen thuoc ve hoc sinh Learnix THCS'), 105, 285, { align: 'center' });
      doc.text('Trang 2 / 2', 195, 285, { align: 'right' });

      // Save PDF
      doc.save(`Learnix_LichSu6_${currentLesson.id}_2Trang_ChuanA4.pdf`);
    } catch (e) {
      console.error('Error generating 2-page PDF:', e);
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
          } else if (target === 'flashcards') {
            setActiveHistoryTab('lessons');
            const el = document.getElementById('history-flashcards-section');
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {GRADE_6_HISTORY_LESSONS.map((lesson) => {
                    const isSelected = lesson.id === selectedLessonId;
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
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-amber-200 text-amber-900' : 'bg-gray-100 dark:bg-gray-700 text-gray-600'
                          }`}>
                            HK{lesson.semester} • Bài {lesson.lessonNumber}
                          </span>
                          <h4 className="font-black text-sm mt-2 leading-snug line-clamp-1">
                            {lesson.title}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                            {lesson.subtitle}
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-amber-600 pt-2 border-t border-amber-200/40">
                          <span>Đúng 2 trang PDF</span>
                          <span>{lesson.flashcards.length} Flashcards</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* DOCUMENT VIEWER: TÀI LIỆU PDF ĐÚNG 2 TRANG SIÊU CHI TIẾT   */}
              {/* -------------------------------------------------------- */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-amber-200 dark:border-amber-900/60 shadow-lg p-6 sm:p-8 space-y-6">
                
                {/* Header Action Bar of 2-Page PDF */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 text-xs font-black uppercase tracking-wider">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Tài liệu PDF Độc quyền: Chuẩn đúng 2 trang</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                      {currentLesson.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {currentLesson.sgkReference} • {currentLesson.author}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Toggle Page 1 & Page 2 */}
                    <div className="flex items-center p-1 bg-gray-100 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setCurrentPdfPage(1)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                          currentPdfPage === 1 
                            ? 'bg-amber-600 text-white shadow-xs' 
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                        }`}
                      >
                        📄 Trang 1 (Kiến thức)
                      </button>
                      <button
                        onClick={() => setCurrentPdfPage(2)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                          currentPdfPage === 2 
                            ? 'bg-amber-600 text-white shadow-xs' 
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                        }`}
                      >
                        📄 Trang 2 (Tư liệu & Ôn tập)
                      </button>
                    </div>

                    {/* Download 2-Page PDF Button */}
                    <button
                      onClick={handleDownloadLesson2PagePDF}
                      disabled={isPdfGenerating}
                      className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      title="Tải trọn bộ tài liệu 2 trang chuẩn định dạng PDF A4"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isPdfGenerating ? 'Đang xuất PDF...' : 'Tải File PDF 2 Trang'}</span>
                    </button>
                  </div>
                </div>

                {/* PDF Page 1 Content */}
                {currentPdfPage === 1 && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/40 dark:bg-gray-900/40 border border-amber-200 dark:border-amber-800/60 space-y-6">
                    <div className="flex items-center justify-between border-b border-amber-200 dark:border-amber-800/40 pb-3">
                      <span className="text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest">
                        {currentLesson.page1.headerTitle}
                      </span>
                      <span className="text-xs font-bold text-gray-400">Trang 1 / 2</span>
                    </div>

                    {/* Main Concept Highlight Box */}
                    <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border-l-4 border-amber-500 shadow-xs space-y-2">
                      <h5 className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Khái niệm & Luận điểm then chốt</span>
                      </h5>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                        {currentLesson.page1.mainConcept}
                      </p>
                    </div>

                    {/* Core Knowledge Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {currentLesson.page1.coreKnowledge.map((sec, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
                          <h6 className="font-black text-sm text-gray-900 dark:text-white">
                            {sec.sectionTitle}
                          </h6>
                          <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                            {sec.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Chronology Timeline */}
                    {currentLesson.page1.chronologyTimeline && (
                      <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
                        <h6 className="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-600" />
                          <span>Dòng thời gian sự kiện lịch sử then chốt</span>
                        </h6>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          {currentLesson.page1.chronologyTimeline.map((tl, idx) => (
                            <div key={idx} className="p-3 rounded-xl bg-amber-50/60 dark:bg-gray-900/60 border border-amber-100 dark:border-gray-700 flex items-start gap-2.5 text-xs">
                              <span className="px-2 py-0.5 rounded-md bg-amber-600 text-white font-black text-[10px] shrink-0">
                                {tl.time}
                              </span>
                              <span className="font-semibold text-gray-800 dark:text-gray-200">
                                {tl.event}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* PDF Page 2 Content */}
                {currentPdfPage === 2 && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/60 dark:bg-gray-900/40 border border-slate-200 dark:border-slate-800 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                      <span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                        {currentLesson.page2.headerTitle}
                      </span>
                      <span className="text-xs font-bold text-gray-400">Trang 2 / 2</span>
                    </div>

                    {/* Historical Quotes and Archives */}
                    <div className="space-y-4">
                      <h5 className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        Tư liệu sử học & Sử liệu trích dẫn
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentLesson.page2.historicalQuotes.map((q, qIdx) => (
                          <div key={qIdx} className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-900/60 space-y-2">
                            <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 block uppercase">
                              {q.source}
                            </span>
                            <blockquote className="text-xs font-black text-gray-900 dark:text-white italic leading-relaxed">
                              {q.quote}
                            </blockquote>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-normal">
                              {q.context}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Comparison Table */}
                    {currentLesson.page2.comparisonTable && (
                      <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-3">
                        <h6 className="font-black text-sm text-gray-900 dark:text-white">
                          Bảng đối chiếu & Hệ thống hóa
                        </h6>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs text-left">
                            <thead className="bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-black">
                              <tr>
                                {currentLesson.page2.comparisonTable.headers.map((h, i) => (
                                  <th key={i} className="p-2.5 border border-amber-200 dark:border-amber-800">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {currentLesson.page2.comparisonTable.rows.map((r, ri) => (
                                <tr key={ri} className="border-b border-gray-100 dark:border-gray-800">
                                  {r.map((cell, ci) => (
                                    <td key={ci} className="p-2.5 border border-gray-100 dark:border-gray-800 font-medium text-gray-700 dark:text-gray-300">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Golden Rules */}
                    <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-2">
                      <h6 className="text-xs font-black uppercase text-amber-700 dark:text-amber-300">
                        🌟 Ghi nhớ vàng Lịch sử
                      </h6>
                      <ul className="space-y-1.5 text-xs text-amber-900 dark:text-amber-200 font-semibold">
                        {currentLesson.page2.goldenRules.map((gr, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span>★</span>
                            <span>{gr}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Review Questions */}
                    <div className="p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2">
                      <h6 className="text-xs font-black uppercase text-gray-700 dark:text-gray-300">
                        ❓ Câu hỏi củng cố tự rèn luyện
                      </h6>
                      <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                        {currentLesson.page2.reviewQuestions.map((rq, idx) => (
                          <p key={idx} className="font-medium">{rq}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* -------------------------------------------------------- */}
              {/* PHẦN BỔ TRỢ 1: MINDMAP (SƠ ĐỒ TƯ DUY)                     */}
              {/* -------------------------------------------------------- */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-indigo-100 dark:border-indigo-950/60 shadow-md p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black">
                      🧠
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                        <span>1. Sơ đồ Tư duy (Mindmap)</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold">
                          Trực quan hóa đa nhánh
                        </span>
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Liên kết logic từ chủ đề trung tâm đến các nhánh sự kiện và từ khóa cốt lõi
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Mindmap Canvas */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-amber-50/30 dark:from-gray-900 dark:to-gray-950 border border-indigo-200/60 dark:border-indigo-900/40 space-y-6">
                  
                  {/* Central Node */}
                  <div className="max-w-md mx-auto text-center p-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg space-y-1 ring-4 ring-amber-400/20">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-100 block">
                      CHỦ ĐỀ TRUNG TÂM
                    </span>
                    <h5 className="text-base sm:text-lg font-black tracking-tight">
                      {currentLesson.mindmap.centralTheme}
                    </h5>
                    <p className="text-[11px] text-amber-100 font-medium">
                      {currentLesson.mindmap.themeDescription}
                    </p>
                  </div>

                  {/* Connecting Branches */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                    {currentLesson.mindmap.branches.map((branch) => {
                      const isExpanded = expandedBranchId === branch.id;
                      return (
                        <div 
                          key={branch.id}
                          className="bg-white dark:bg-gray-800 p-5 rounded-2xl border-2 border-indigo-100 dark:border-indigo-900/60 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center gap-2.5">
                              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center text-xs font-black shrink-0 shadow-xs">
                                🌿
                              </span>
                              <h6 className="font-black text-sm text-gray-900 dark:text-white">
                                {branch.title}
                              </h6>
                            </div>

                            <div className="space-y-2.5 pt-1">
                              {branch.subBranches.map((sub, sIdx) => (
                                <div key={sIdx} className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 text-xs space-y-1">
                                  <span className="font-bold text-gray-800 dark:text-gray-200 block">
                                    ▸ {sub.title}
                                  </span>
                                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {sub.detail}
                                  </p>
                                  {sub.keywords && (
                                    <div className="flex flex-wrap gap-1 pt-1">
                                      {sub.keywords.map((kw, ki) => (
                                        <span key={ki} className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">
                                          #{kw}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* PHẦN BỔ TRỢ 3: BỘ THẺ GHI NHỚ (FLASHCARDS) CỤC BỘ         */}
              {/* Ít nhất 5 tấm thẻ, lật 3D, đánh dấu đã thuộc, không lỗi   */}
              {/* -------------------------------------------------------- */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-rose-100 dark:border-rose-950/60 shadow-md p-6 sm:p-8 space-y-6">
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
