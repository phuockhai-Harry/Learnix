import { jsPDF } from 'jspdf';
import { CurriculumQuiz } from '../data/curriculumData';
import { setupPdfUnicode, removeVietnameseTones } from './pdfUnicode';

export interface QuizPdfOptions {
  includeAnswerKey?: boolean;
  schoolName?: string;
  studentName?: string;
  className?: string;
  examDate?: string;
  subjectCode?: string;
}

/**
 * Generates an authoritative, beautifully designed, single-page A4 PDF examination sheet
 * complying with Vietnamese National Standard (GDPT 2018) formatting.
 * Guaranteed to fit strictly on 1 A4 page with no overlapping text.
 */
export async function generateQuizA4PDF(
  quiz: CurriculumQuiz,
  options: QuizPdfOptions = {}
): Promise<void> {
  const {
    includeAnswerKey = false,
    schoolName = 'TRƯỜNG THCS LEARNIX',
    studentName = '',
    className = `${quiz.grade || 6}A.....`,
    examDate = new Date().toLocaleDateString('vi-VN'),
    subjectCode
  } = options;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  // Attach Unicode font (Roboto)
  const hasUnicode = await setupPdfUnicode(doc);
  const fontRegular = hasUnicode ? 'Roboto' : 'helvetica';
  const fontBold = hasUnicode ? 'Roboto' : 'helvetica';

  const t = (str: string): string => {
    if (!str) return '';
    return hasUnicode ? str : removeVietnameseTones(str);
  };

  // Professional Color Palette
  const primaryNavy = [15, 23, 42];      // #0f172a
  const secondaryNavy = [30, 41, 59];    // #1e293b
  const borderGray = [148, 163, 184];    // #94a3b8
  const lightBg = [248, 250, 252];       // #f8fafc
  const headerBg = [241, 245, 249];      // #f1f5f9
  const accentTeal = [13, 148, 136];     // #0d9488
  const accentIndigo = [79, 70, 229];    // #4f46e5
  const answerGreen = [5, 150, 105];     // #059669
  const mutedText = [100, 116, 139];     // #64748b

  // =========================================================================
  // 1. DUAL OUTER PAGE BORDER (National Standard Examination Border)
  // =========================================================================
  doc.setDrawColor(borderGray[0], borderGray[1], borderGray[2]);
  doc.setLineWidth(0.45);
  doc.rect(7, 6, 196, 285);
  doc.setLineWidth(0.15);
  doc.rect(8, 7, 194, 283);

  // =========================================================================
  // 2. TOP HEADER SECTION
  // =========================================================================
  // Left Header: School & Department
  doc.setFont(fontBold, 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(t('SỞ GIÁO DỤC VÀ ĐÀO TẠO'), 12, 11.5);
  doc.text(t(schoolName.toUpperCase()), 12, 15.5);
  doc.setFont(fontRegular, 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(t('Năm học: 2024 - 2025 | Học kỳ: ') + `${quiz.semester}`, 12, 19.5);
  doc.setDrawColor(borderGray[0], borderGray[1], borderGray[2]);
  doc.setLineWidth(0.25);
  doc.line(12, 21, 55, 21);

  // Right Header: National Exam Standard & Code
  doc.setFont(fontBold, 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(t('CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM'), 198, 11.5, { align: 'right' });
  doc.setFont(fontRegular, 'normal');
  doc.setFontSize(7.2);
  doc.text(t('Độc lập - Tự do - Hạnh phúc'), 198, 15.5, { align: 'right' });
  
  const generatedExamCode = subjectCode || quiz.id.replace(/[^0-9]/g, '').slice(-3) || '102';
  doc.setFont(fontBold, 'bold');
  doc.setFontSize(7.8);
  doc.setTextColor(accentIndigo[0], accentIndigo[1], accentIndigo[2]);
  doc.text(t(`MÃ ĐỀ THI: ${generatedExamCode}`), 198, 19.5, { align: 'right' });
  doc.setDrawColor(borderGray[0], borderGray[1], borderGray[2]);
  doc.setLineWidth(0.25);
  doc.line(155, 21, 198, 21);

  // Center Title Banner
  const testTypeLabel = quiz.testType === 'final'
    ? 'BÀI KIỂM TRA ĐÁNH GIÁ CUỐI HỌC KỲ'
    : quiz.testType === 'midterm'
      ? 'BÀI KIỂM TRA ĐÁNH GIÁ GIỮA HỌC KỲ'
      : 'BÀI KIỂM TRA THƯỜNG XUYÊN (15 PHÚT)';

  doc.setFont(fontBold, 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(t(`${testTypeLabel} ${quiz.semester}`.toUpperCase()), 105, 24.5, { align: 'center' });

  doc.setFontSize(9);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.text(t(`MÔN: ${(quiz.subjectVi || quiz.subject).toUpperCase()} - KHỐI ${quiz.grade || 6}`), 105, 28.5, { align: 'center' });

  doc.setFont(fontRegular, 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(
    t(`Thời gian làm bài: ${quiz.durationMinutes} phút (Không kể thời gian phát đề) - Đề thi gồm 01 trang`),
    105,
    32.2,
    { align: 'center' }
  );

  // =========================================================================
  // 3. STUDENT DETAILS & SCORING BOX (Strictly Aligned)
  // =========================================================================
  const boxTop = 34.5;
  const boxHeight = 16.5;
  doc.setDrawColor(borderGray[0], borderGray[1], borderGray[2]);
  doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
  doc.rect(12, boxTop, 186, boxHeight, 'FD');

  // Left Details: Candidate information
  doc.setFont(fontRegular, 'normal');
  doc.setFontSize(7.6);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  
  const displayStudent = studentName ? studentName : '........................................................................';
  doc.text(t(`Họ và tên thí sinh: ${displayStudent}`), 14, boxTop + 4.5);
  doc.text(t(`Lớp: ${className} | Ngày kiểm tra: ${examDate} | SBD: ....................`), 14, boxTop + 9);
  doc.text(t(`Phòng thi số: ......... | Giám thị 1: ............................. | Giám thị 2: .............................`), 14, boxTop + 13.5);

  // Vertical Dividers in Box for Score & Remarks
  const divX1 = 138;
  const divX2 = 166;
  doc.setLineWidth(0.2);
  doc.line(divX1, boxTop, divX1, boxTop + boxHeight);
  doc.line(divX2, boxTop, divX2, boxTop + boxHeight);

  // Score Box
  doc.setFont(fontBold, 'bold');
  doc.setFontSize(7);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(t('ĐIỂM SỐ'), divX1 + (divX2 - divX1) / 2, boxTop + 3.8, { align: 'center' });
  doc.line(divX1, boxTop + 5.2, divX2, boxTop + 5.2);
  doc.setFont(fontRegular, 'normal');
  doc.setFontSize(6.2);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(t('Số: ........ Chữ: ........'), divX1 + (divX2 - divX1) / 2, boxTop + 11.5, { align: 'center' });

  // Teacher Remarks Box
  doc.setFont(fontBold, 'bold');
  doc.setFontSize(7);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(t('LỜI PHÊ CỦA THẦY CÔ'), divX2 + (198 - divX2) / 2, boxTop + 3.8, { align: 'center' });
  doc.line(divX2, boxTop + 5.2, 198, boxTop + 5.2);

  // =========================================================================
  // 4. INSTRUCTION BANNER
  // =========================================================================
  const bannerY = boxTop + boxHeight + 1.2;
  const bannerHeight = 4.2;
  doc.setFillColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.rect(12, bannerY, 186, bannerHeight, 'F');
  doc.setFont(fontBold, 'bold');
  doc.setFontSize(6.8);
  doc.setTextColor(255, 255, 255);
  doc.text(
    t('PHẦN TRẮC NGHIỆM KHÁCH QUAN: Thí sinh chọn 01 phương án đúng nhất (A, B, C hoặc D) và điền vào Bảng đáp án cuối trang'),
    105,
    bannerY + 2.9,
    { align: 'center' }
  );

  // =========================================================================
  // 5. DYNAMIC TWO-COLUMN BALANCED QUESTION LAYOUT
  // Guarantee: No text runs off margins and never overlaps with bottom answer grid
  // =========================================================================
  const questions = quiz.questions || [];
  const totalQ = questions.length;
  const col1Count = Math.ceil(totalQ / 2);

  const col1X = 12;
  const col1Width = 89;
  const col2X = 107;
  const col2Width = 89;
  const dividerX = 104;

  // Maximum allowed Y for questions before bottom section starts
  // Reserve space for answer grid (16mm) + explanations (if with key: 18mm) + footer (8mm)
  const maxQuestionBottomY = includeAnswerKey ? 246 : 256;

  // Scale font sizes dynamically based on question count to guarantee 1 single A4 page
  let qFontSize = 7.5;
  let optFontSize = 6.8;
  let lineSpacing = 3.3;
  let qSpacing = 2.5;

  if (totalQ > 12) {
    qFontSize = 6.4;
    optFontSize = 6.0;
    lineSpacing = 2.7;
    qSpacing = 1.6;
  } else if (totalQ > 8) {
    qFontSize = 6.9;
    optFontSize = 6.4;
    lineSpacing = 3.0;
    qSpacing = 2.0;
  } else if (totalQ <= 5) {
    qFontSize = 8.0;
    optFontSize = 7.4;
    lineSpacing = 3.8;
    qSpacing = 3.5;
  }

  const startY = bannerY + bannerHeight + 2.5;
  let curY1 = startY;
  let curY2 = startY;

  const optLabels = ['A', 'B', 'C', 'D'];

  questions.forEach((q, idx) => {
    const isCol1 = idx < col1Count;
    const curX = isCol1 ? col1X : col2X;
    const curWidth = isCol1 ? col1Width : col2Width;
    let yPos = isCol1 ? curY1 : curY2;

    // Safety guard against overflowing the available vertical space
    if (yPos > maxQuestionBottomY - 12) {
      lineSpacing = Math.max(2.4, lineSpacing * 0.9);
      qSpacing = Math.max(1.0, qSpacing * 0.8);
    }

    // Question Number & Text
    doc.setFont(fontBold, 'bold');
    doc.setFontSize(qFontSize);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);

    const qNumText = t(`Câu ${idx + 1}: `);
    const qNumWidth = doc.getTextWidth(qNumText);
    doc.text(qNumText, curX, yPos);

    doc.setFont(fontRegular, 'normal');
    const qBodyLines = doc.splitTextToSize(t(q.question), curWidth - qNumWidth);
    doc.text(qBodyLines, curX + qNumWidth, yPos);
    yPos += Math.max(1, qBodyLines.length) * lineSpacing;

    // Format Options: Check length to balance 2 options per line vs 1 option per line
    doc.setFontSize(optFontSize);
    const safeOptions = q.options || [];
    const maxOptLen = Math.max(...safeOptions.map(o => (o || '').length), 0);
    const twoPerLine = maxOptLen <= 32 && safeOptions.length === 4;

    if (twoPerLine) {
      // 2 options per line (2 lines total: A & B on line 1, C & D on line 2)
      const halfWidth = (curWidth - 2) / 2;
      for (let i = 0; i < safeOptions.length; i += 2) {
        // Option 1 (A or C)
        const isOpt1Correct = includeAnswerKey && q.answerIndex === i;
        doc.setFont(fontBold, isOpt1Correct ? 'bold' : 'normal');
        if (isOpt1Correct) {
          doc.setTextColor(answerGreen[0], answerGreen[1], answerGreen[2]);
        } else {
          doc.setTextColor(secondaryNavy[0], secondaryNavy[1], secondaryNavy[2]);
        }
        const opt1Label = isOpt1Correct ? `[✓ ${optLabels[i]}] ` : `${optLabels[i]}. `;
        const opt1Text = doc.splitTextToSize(t(`${opt1Label}${safeOptions[i]}`), halfWidth - 1);
        doc.text(opt1Text, curX, yPos);

        // Option 2 (B or D)
        if (i + 1 < safeOptions.length) {
          const isOpt2Correct = includeAnswerKey && q.answerIndex === i + 1;
          doc.setFont(fontBold, isOpt2Correct ? 'bold' : 'normal');
          if (isOpt2Correct) {
            doc.setTextColor(answerGreen[0], answerGreen[1], answerGreen[2]);
          } else {
            doc.setTextColor(secondaryNavy[0], secondaryNavy[1], secondaryNavy[2]);
          }
          const opt2Label = isOpt2Correct ? `[✓ ${optLabels[i + 1]}] ` : `${optLabels[i + 1]}. `;
          const opt2Text = doc.splitTextToSize(t(`${opt2Label}${safeOptions[i + 1]}`), halfWidth - 1);
          doc.text(opt2Text, curX + halfWidth + 1, yPos);
        }

        yPos += Math.max(1, opt1Text.length) * (lineSpacing * 0.95);
      }
    } else {
      // 1 option per line (stacked cleanly)
      safeOptions.forEach((opt, oIdx) => {
        const isCorrect = includeAnswerKey && q.answerIndex === oIdx;
        doc.setFont(fontBold, isCorrect ? 'bold' : 'normal');
        if (isCorrect) {
          doc.setTextColor(answerGreen[0], answerGreen[1], answerGreen[2]);
        } else {
          doc.setTextColor(secondaryNavy[0], secondaryNavy[1], secondaryNavy[2]);
        }
        const optLabel = isCorrect ? `[✓ ${optLabels[oIdx]}] ` : `${optLabels[oIdx]}. `;
        const optLines = doc.splitTextToSize(t(`${optLabel}${opt}`), curWidth);
        doc.text(optLines, curX, yPos);
        yPos += Math.max(1, optLines.length) * (lineSpacing * 0.9);
      });
    }

    // Space before next question
    yPos += qSpacing;

    if (isCol1) {
      curY1 = yPos;
    } else {
      curY2 = yPos;
    }
  });

  // Vertical Column Divider line
  const maxQuestionY = Math.max(curY1, curY2);
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.2);
  doc.line(dividerX, startY, dividerX, Math.min(252, maxQuestionY + 1));

  // =========================================================================
  // 6. BOTTOM ANSWER KEY & DETAILED EXPLANATION GRID (Super Detailed)
  // Positioned dynamically so it NEVER overlaps with questions above
  // =========================================================================
  const gridY = Math.min(
    258,
    Math.max(maxQuestionY + 2.5, includeAnswerKey ? 246 : 252)
  );

  // Table header background
  const gridHeight = includeAnswerKey ? 24.5 : 18;
  doc.setFillColor(headerBg[0], headerBg[1], headerBg[2]);
  doc.rect(12, gridY, 186, 4.2, 'F');
  doc.setDrawColor(borderGray[0], borderGray[1], borderGray[2]);
  doc.setLineWidth(0.3);
  doc.rect(12, gridY, 186, gridHeight);

  doc.setFont(fontBold, 'bold');
  doc.setFontSize(7.2);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(
    t(
      includeAnswerKey
        ? 'BẢNG ĐÁP ÁN CHUẨN & HƯỚNG DẪN GIẢI CHI TIẾT (DÀNH CHO GIÁO VIÊN / HỌC SINH TỰ CHẤM)'
        : 'PHIẾU TRẢ LỜI TRẮC NGHIỆM (Thí sinh ghi đáp án A, B, C, D vào ô tương ứng dưới đây)'
    ),
    105,
    gridY + 3.0,
    { align: 'center' }
  );

  // Table rows: Row 1 = Câu (C1..Cn), Row 2 = Đáp án
  const cellHeight = 6.2;
  const colWidth = 186 / Math.max(8, totalQ);

  // Row 1 & 2 horizontal dividers
  doc.line(12, gridY + 4.2, 198, gridY + 4.2);
  doc.line(12, gridY + 4.2 + cellHeight, 198, gridY + 4.2 + cellHeight);

  doc.setFont(fontBold, 'bold');
  doc.setFontSize(6.8);

  for (let i = 0; i < totalQ; i++) {
    const xCell = 12 + i * colWidth;
    if (i > 0) {
      doc.line(xCell, gridY + 4.2, xCell, gridY + 4.2 + cellHeight * 2);
    }

    // Question number header
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`C${i + 1}`, xCell + colWidth / 2, gridY + 8.2, { align: 'center' });

    // Answer cell
    if (includeAnswerKey) {
      const correctChar = optLabels[questions[i]?.answerIndex] || '';
      doc.setFont(fontBold, 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(answerGreen[0], answerGreen[1], answerGreen[2]);
      doc.text(correctChar, xCell + colWidth / 2, gridY + 14.2, { align: 'center' });
    } else {
      // Empty candidate box with subtle dots
      doc.setFont(fontRegular, 'normal');
      doc.setFontSize(6);
      doc.setTextColor(203, 213, 225);
      doc.text('...', xCell + colWidth / 2, gridY + 14.2, { align: 'center' });
    }
  }

  // If Answer Key Mode: add concise solution explanations row
  if (includeAnswerKey) {
    const explY = gridY + 4.2 + cellHeight * 2;
    doc.line(12, explY, 198, explY);
    doc.setFont(fontRegular, 'normal');
    doc.setFontSize(5.8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);

    // Format concise explanation hints
    const explanationsBrief = questions
      .slice(0, 10)
      .map((q, qIdx) => {
        const char = optLabels[q.answerIndex];
        const explText = (q.explanation || q.hint || '').replace(/[\n\r]+/g, ' ').slice(0, 48);
        return `[C${qIdx + 1}:${char}] ${explText}`;
      })
      .join(' | ');

    const splitExpl = doc.splitTextToSize(t(`Ghi chú giải thích: ${explanationsBrief}`), 182);
    doc.text(splitExpl.slice(0, 2), 14, explY + 3.2);
  }

  // =========================================================================
  // 7. FOOTER SECTION
  // =========================================================================
  doc.setFont(fontRegular, 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(borderGray[0], borderGray[1], borderGray[2]);
  doc.text(
    t('--- HẾT --- Cán bộ coi thi không giải thích gì thêm | Học và luyện thi trực tuyến tại Learnix'),
    105,
    284,
    { align: 'center' }
  );
  doc.text(t('Trang 1 / 1 (Khổ A4 chuẩn GDPT 2018)'), 196, 284, { align: 'right' });

  // STRICT SINGLE-PAGE GUARANTEE: Remove any accidentally created overflow pages
  while (doc.getNumberOfPages() > 1) {
    doc.deletePage(doc.getNumberOfPages());
  }

  // Save the PDF file
  const sanitizedTitle = quiz.title
    .replace(/[^a-zA-Z0-9À-ỹ\s_-]/g, '')
    .trim()
    .replace(/\s+/g, '_');
  const filename = `${sanitizedTitle}_1Trang_A4${includeAnswerKey ? '_DapAn' : ''}.pdf`;

  doc.save(filename);
}
