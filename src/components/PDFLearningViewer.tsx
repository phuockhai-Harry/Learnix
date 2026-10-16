import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  BookOpen, 
  CheckCircle2, 
  Lightbulb, 
  Calendar, 
  User, 
  ShieldCheck, 
  Sparkles,
  Layers,
  ArrowDownToLine,
  Bookmark
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CurriculumPDF } from '../data/curriculumData';
import { useLanguage } from '../i18n';
import MathMarkdown from './MathMarkdown';

interface PDFLearningViewerProps {
  pdf: CurriculumPDF;
  isOpen: boolean;
  onClose: () => void;
}

export const PDFLearningViewer: React.FC<PDFLearningViewerProps> = ({ pdf, isOpen, onClose }) => {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const activeSection = pdf.sections[activeSectionIndex] || pdf.sections[0];

  const handleDownloadRealPDF = async () => {
    try {
      setIsDownloading(true);

      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const primaryColor = [13, 148, 136]; // Teal #0d9488
      const darkColor = [30, 41, 59]; // Slate #1e293b
      const grayColor = [100, 116, 139]; // Slate-500
      const accentBg = [240, 253, 250]; // Teal-50

      // Page 1: Cover Header
      doc.setFillColor(13, 148, 136);
      doc.rect(0, 0, 210, 36, 'F');

      // Brand Title
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('LEARNIX - AI STUDY REPOSITORY', 15, 16);

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(`Official Academic Resource | Grade ${pdf.grade} - Semester ${pdf.semester}`, 15, 24);
      doc.text(`Release: ${pdf.releaseDate} | Author: ${pdf.author}`, 15, 30);

      // Document Title
      let currentY = 48;
      doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      const titleLines = doc.splitTextToSize(isVi ? pdf.title : pdf.titleEn, 180);
      doc.text(titleLines, 15, currentY);
      currentY += titleLines.length * 7 + 4;

      // Metadata summary bar
      doc.setFillColor(accentBg[0], accentBg[1], accentBg[2]);
      doc.roundedRect(15, currentY, 180, 14, 2, 2, 'F');
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text(`SUBJECT: ${pdf.subject.toUpperCase()} | SEMESTER: ${pdf.semester} | PAGES: ${pdf.pageCount}`, 20, currentY + 6);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
      doc.text(isVi ? pdf.description : pdf.descriptionEn, 20, currentY + 11, { maxWidth: 170 });
      currentY += 22;

      // Iterate through sections and build clean educational layout
      pdf.sections.forEach((sec, idx) => {
        // Page break check
        if (currentY > 240) {
          doc.addPage();
          currentY = 25;
        }

        // Section Title
        doc.setFillColor(241, 245, 249);
        doc.roundedRect(15, currentY, 180, 9, 1.5, 1.5, 'F');
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(15, 23, 42);
        doc.text(`${idx + 1}. ${sec.title}`, 18, currentY + 6.5);
        currentY += 14;

        // Content
        doc.setFontSize(9.5);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(51, 65, 85);
        const contentLines = doc.splitTextToSize(sec.content, 175);
        doc.text(contentLines, 18, currentY);
        currentY += contentLines.length * 5 + 4;

        // Key Formulas Box if any
        if (sec.formulas && sec.formulas.length > 0) {
          if (currentY > 230) {
            doc.addPage();
            currentY = 25;
          }

          doc.setFillColor(240, 253, 250);
          doc.setDrawColor(94, 234, 212);
          const formulaHeight = sec.formulas.length * 6 + 10;
          doc.roundedRect(18, currentY, 174, formulaHeight, 2, 2, 'FD');

          doc.setFontSize(9);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(13, 148, 136);
          doc.text('CORE FORMULAS & RULES:', 22, currentY + 6);

          doc.setFont('helvetica', 'normal');
          doc.setTextColor(15, 23, 42);
          sec.formulas.forEach((f, fIdx) => {
            doc.text(`• ${f}`, 24, currentY + 12 + fIdx * 6);
          });
          currentY += formulaHeight + 6;
        }

        // Key Points
        if (sec.keyPoints && sec.keyPoints.length > 0) {
          if (currentY > 240) {
            doc.addPage();
            currentY = 25;
          }

          doc.setFontSize(9);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(30, 41, 59);
          doc.text('Key Takeaways & Reminders:', 18, currentY);
          currentY += 5;

          doc.setFont('helvetica', 'normal');
          doc.setTextColor(71, 85, 105);
          sec.keyPoints.forEach(kp => {
            const kpLines = doc.splitTextToSize(`- ${kp}`, 170);
            doc.text(kpLines, 22, currentY);
            currentY += kpLines.length * 4.5 + 1.5;
          });
          currentY += 4;
        }

        // Example Problem
        if (sec.exampleProblem) {
          if (currentY > 220) {
            doc.addPage();
            currentY = 25;
          }

          doc.setFillColor(254, 243, 199); // amber-100
          doc.setDrawColor(252, 211, 77); // amber-300
          doc.roundedRect(18, currentY, 174, 26, 2, 2, 'FD');

          doc.setFontSize(8.5);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(146, 64, 14);
          doc.text('WORKED EXAMPLE:', 22, currentY + 5.5);

          doc.setFont('helvetica', 'normal');
          doc.setTextColor(30, 41, 59);
          const probLines = doc.splitTextToSize(`Problem: ${sec.exampleProblem.problem}`, 166);
          doc.text(probLines, 22, currentY + 11);

          const solLines = doc.splitTextToSize(`Solution: ${sec.exampleProblem.solution}`, 166);
          doc.setFont('helvetica', 'italic');
          doc.text(solLines, 22, currentY + 18);

          currentY += 32;
        }

        currentY += 6;
      });

      // Add Page Numbers to all pages
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(148, 163, 184);
        doc.text(`Learnix Academic Portal • Grade ${pdf.grade} Semester ${pdf.semester} • Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
      }

      // Trigger download
      doc.save(pdf.downloadFileName);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Error generating PDF file:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white dark:bg-gray-900 w-full max-w-5xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3 bg-gray-50/80 dark:bg-gray-800/60 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  {isVi ? `Lớp ${pdf.grade} • Học kỳ ${pdf.semester}` : `Grade ${pdf.grade} • Semester ${pdf.semester}`}
                </span>
                <span className="text-gray-300 dark:text-gray-600">|</span>
                <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                  {pdf.fileSize} • {pdf.pageCount} {isVi ? 'trang' : 'pages'}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-gray-900 dark:text-white truncate">
                {isVi ? pdf.title : pdf.titleEn}
              </h2>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button
                onClick={() => setZoomLevel(prev => Math.max(80, prev - 15))}
                className="p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg transition-colors"
                title={isVi ? 'Thu nhỏ' : 'Zoom Out'}
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold px-1.5 text-gray-600 dark:text-gray-300">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(140, prev + 15))}
                className="p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg transition-colors"
                title={isVi ? 'Phóng to' : 'Zoom In'}
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              title={isVi ? 'In tài liệu' : 'Print'}
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Real PDF Download Button */}
            <button
              onClick={handleDownloadRealPDF}
              disabled={isDownloading}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black shadow-md transition-all active:scale-95 ${
                downloadSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-teal-600 hover:bg-teal-700 text-white'
              }`}
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>{isVi ? 'Đã tải thành công!' : 'Downloaded!'}</span>
                </>
              ) : isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{isVi ? 'Đang tạo PDF...' : 'Generating...'}</span>
                </>
              ) : (
                <>
                  <ArrowDownToLine className="w-4 h-4" />
                  <span>{isVi ? 'Tải PDF (.pdf)' : 'Download PDF'}</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewer Body: Two-column layout (Table of Contents + Document Paper View) */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row min-h-0">
          
          {/* Table of Contents Sidebar */}
          <div className="w-full md:w-72 bg-gray-50 dark:bg-gray-800/40 border-r border-gray-100 dark:border-gray-800 p-4 overflow-y-auto shrink-0 space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>{isVi ? 'Mục lục chương' : 'Table of Contents'}</span>
            </div>

            <div className="space-y-1.5">
              {pdf.sections.map((sec, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSectionIndex(index)}
                  className={`w-full text-left p-3 rounded-2xl text-xs font-bold transition-all flex items-start gap-2.5 ${
                    activeSectionIndex === index
                      ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-200 border-2 border-teal-500/50 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 border border-transparent'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 text-[10px] font-black ${
                    activeSectionIndex === index
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="line-clamp-2 leading-relaxed">{sec.title}</span>
                </button>
              ))}
            </div>

            {/* Document Info Card */}
            <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700 text-xs space-y-2.5 shadow-sm">
              <div className="font-bold text-gray-900 dark:text-gray-200 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>{isVi ? 'Chứng nhận Học thuật' : 'Verified Syllabus'}</span>
              </div>
              <div className="text-gray-500 dark:text-gray-400 space-y-1 text-[11px]">
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">{isVi ? 'Tác giả:' : 'Author:'}</span> {pdf.author}</p>
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">{isVi ? 'Niên khóa:' : 'Period:'}</span> {pdf.releaseDate}</p>
                <p><span className="font-semibold text-gray-700 dark:text-gray-300">{isVi ? 'Môn học:' : 'Subject:'}</span> {pdf.subject}</p>
              </div>
            </div>
          </div>

          {/* Document Content Sheet */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-gray-100 dark:bg-gray-950 flex justify-center">
            <div 
              className="bg-white dark:bg-gray-900 max-w-3xl w-full rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-10 transition-all space-y-8"
              style={{ fontSize: `${zoomLevel}%` }}
            >
              {/* Header inside Sheet */}
              <div className="border-b-2 border-teal-500/20 pb-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  <span>{pdf.subject} • {isVi ? `Lớp ${pdf.grade}` : `Grade ${pdf.grade}`}</span>
                  <span>{isVi ? `Học kỳ ${pdf.semester}` : `Semester ${pdf.semester}`}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight">
                  {activeSection.title}
                </h1>
                <p className="text-xs text-gray-400 font-medium">
                  {isVi ? 'Phần' : 'Section'} {activeSectionIndex + 1} / {pdf.sections.length} • {pdf.author}
                </p>
              </div>

              {/* Main Content Paragraph */}
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
                <MathMarkdown content={activeSection.content} />
              </div>

              {/* Key Formulas Section */}
              {activeSection.formulas && activeSection.formulas.length > 0 && (
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/40 dark:to-emerald-950/40 border-2 border-teal-200 dark:border-teal-800/80 rounded-2xl p-5 space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-teal-900 dark:text-teal-200 font-black text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                    <span>{isVi ? 'Công thức & Quy tắc cốt lõi' : 'Core Formulas & Rules'}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeSection.formulas.map((form, fIdx) => (
                      <div key={fIdx} className="bg-white/80 dark:bg-gray-900/80 p-3 rounded-xl border border-teal-100 dark:border-teal-900/60 font-mono text-xs sm:text-sm text-teal-900 dark:text-teal-100 font-bold flex items-center gap-2 shadow-2xs">
                        <span className="w-5 h-5 rounded-md bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 flex items-center justify-center text-[10px] shrink-0">
                          {fIdx + 1}
                        </span>
                        <MathMarkdown content={form} inline />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Points / Reminders */}
              {activeSection.keyPoints && activeSection.keyPoints.length > 0 && (
                <div className="bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-2xl p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-blue-900 dark:text-blue-200 font-black text-xs uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                    <span>{isVi ? 'Điểm lưu ý khi làm bài' : 'Exam Takeaways'}</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-blue-950 dark:text-blue-100">
                    {activeSection.keyPoints.map((kp, kpIdx) => (
                      <li key={kpIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="leading-relaxed">{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Example Problem & Solution */}
              {activeSection.exampleProblem && (
                <div className="bg-amber-50/80 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-900/70 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-black text-xs uppercase tracking-wider">
                    <Bookmark className="w-4 h-4 text-amber-600" />
                    <span>{isVi ? 'Bài tập ví dụ & Hướng dẫn giải chi tiết' : 'Worked Example Problem'}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 bg-white/80 dark:bg-gray-900/80 p-3 rounded-xl border border-amber-200/60 dark:border-amber-900/40">
                    <MathMarkdown content={activeSection.exampleProblem.problem} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/60 p-3 rounded-xl border border-amber-100 dark:border-amber-900/30 space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                      {isVi ? 'Lời giải bước-từng-bước:' : 'Step-by-step Solution:'}
                    </span>
                    <div className="whitespace-pre-line leading-relaxed">
                      <MathMarkdown content={activeSection.exampleProblem.solution} />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3">
                <button
                  disabled={activeSectionIndex === 0}
                  onClick={() => setActiveSectionIndex(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isVi ? 'Phần trước' : 'Previous Section'}</span>
                </button>

                <span className="text-xs text-gray-400 font-bold">
                  {activeSectionIndex + 1} / {pdf.sections.length}
                </span>

                <button
                  disabled={activeSectionIndex === pdf.sections.length - 1}
                  onClick={() => setActiveSectionIndex(prev => Math.min(pdf.sections.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold disabled:opacity-40 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>{isVi ? 'Phần tiếp theo' : 'Next Section'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
