import { CurriculumPDF } from './curriculumData';
import { GRADE_6_PDFS } from './pdfsGrade6';

/**
 * Authoritative Curriculum Review PDFs for All Grades (1 to 12)
 * Based on Ministry of Education GDPT 2018 Online Textbooks (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */
export const ALL_CURRICULUM_PDFS: CurriculumPDF[] = [
  // ==========================================
  // GRADE 1 - LỚP 1
  // ==========================================
  {
    id: 'pdf-g1-s1-vietnamese-alphabet',
    title: 'Sổ tay Ôn tập Tiếng Việt 1 - Bảng chữ cái & Vần cơ bản',
    titleEn: 'Vietnamese 1 Handbook - Alphabet, Vowels & Basic Phonics',
    grade: 1,
    semester: 1,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    pageCount: 12,
    fileSize: '2.1 MB',
    description: 'Cẩm nang ghi nhớ 29 chữ cái tiếng Việt, bảng 11 nguyên âm đơn, phụ âm ghép (ch, gh, kh, nh, ph, th, tr) và quy tắc thanh điệu.',
    descriptionEn: 'Handbook for 29 letters, 11 single vowels, compound consonants, and tones.',
    author: 'Tổ Chuyên môn Tiểu học - NXB Giáo dục',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_TiengViet1_BangChuCai_Van.pdf',
    sections: [
      {
        title: 'Bảng 29 Chữ cái Tiếng Việt & Dấu thanh',
        content: 'Bảng chữ cái tiếng Việt chuẩn gồm 29 chữ cái: a, ă, â, b, c, d, đ, e, ê, g, h, i, k, l, m, n, o, ô, ơ, p, q, r, s, t, u, ư, v, x, y. 5 thanh điệu: Dấu sắc (´), dấu huyền (`), dấu hỏi (?), dấu ngã (~), dấu nặng (.) và thanh ngang (không dấu).',
        formulas: [
          'Nguyên âm: a, ă, â, e, ê, i, o, ô, ơ, u, ư, y',
          'Phụ âm ghép: ch, gh, gi, kh, nh, ng, ngh, ph, th, tr, qu'
        ],
        keyPoints: [
          'Chữ k, gh, ngh CHỈ ĐƯỢC GHÉP với các nguyên âm: e, ê, i (y). Ví dụ: kem, ghế, nghỉ.',
          'Các nguyên âm còn lại (a, o, ô, ơ, u, ư) đi với c, g, ng. Ví dụ: cá, gà, ngô.'
        ],
        exampleProblem: {
          problem: 'Ghép phụ âm "c" hoặc "k" vào chỗ chấm: "...éo co", "...á chép".',
          solution: 'Trước âm "e" dùng "k" -> "kéo co". Trước âm "a" dùng "c" -> "cá chép".'
        }
      }
    ]
  },
  {
    id: 'pdf-g1-s1-math-counting-10',
    title: 'Tóm tắt Kiến thức Toán 1 - Số đếm & Phép tính trong phạm vi 10',
    titleEn: 'Math 1 Summary - Counting, Comparison & Operations to 10',
    grade: 1,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 14,
    fileSize: '2.4 MB',
    description: 'Bộ thẻ số trực quan, sơ đồ tách - gộp số, bảng cộng trừ trong phạm vi 10 và các hình phẳng cơ bản (hình tròn, vuông, tam giác).',
    descriptionEn: 'Visual number cards, number bonds, addition/subtraction within 10, basic shapes.',
    author: 'Hội đồng Khoa học Sư phạm Tiểu học',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan1_HocKy1_PhepTinhPhamVi10.pdf',
    sections: [
      {
        title: 'Sơ đồ Tách - Gộp Số & Bảng Cộng trong phạm vi 10',
        content: 'Tách - gộp là nền tảng của phép cộng trừ: 5 gồm 2 và 3; gộp 2 và 3 được 5 (2 + 3 = 5; 5 - 2 = 3).',
        formulas: [
          'Phép cộng có tính chất giao hoán: a + b = b + a (Ví dụ: 3 + 4 = 4 + 3 = 7)',
          'Cộng với số 0: a + 0 = 0 + a = a (Ví dụ: 6 + 0 = 6)',
          'Trừ đi số 0: a - 0 = a ; Trừ đi chính nó: a - a = 0'
        ],
        keyPoints: [
          'Muốn tìm một phần khi biết số tổng và phần kia: Lấy tổng trừ đi phần đã biết.',
          'Hình vuông có 4 cạnh bằng nhau, hình tam giác có 3 cạnh, hình tròn cong tròn khép kín.'
        ]
      }
    ]
  },
  {
    id: 'pdf-g1-s2-math-numbers-100',
    title: 'Tài liệu Ôn tập Toán 1 HK2 - Số đến 100 & Đo độ dài cm',
    titleEn: 'Math 1 Sem 2 Review - Numbers to 100 & Length Measuring',
    grade: 1,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 16,
    fileSize: '2.6 MB',
    description: 'Hệ thống số có 2 chữ số (chục và đơn vị), phép cộng trừ không nhớ trong phạm vi 100, đơn vị đo xăng-ti-mét (cm) và xem giờ đúng.',
    descriptionEn: 'Tens and ones, 2-digit arithmetic, cm units, and reading clocks.',
    author: 'Viện Khoa học Giáo dục Việt Nam',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_Toan1_HocKy2_SoDen100_DoDoDai.pdf',
    sections: [
      {
        title: 'Cấu tạo số có 2 chữ số & Phép tính không nhớ',
        content: 'Số có hai chữ số gồm chữ số hàng chục đứng trước và chữ số hàng đơn vị đứng sau. Đặt tính rồi tính: viết các chữ số thẳng cột (hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục).',
        formulas: [
          'Số lớn nhất có hai chữ số: 99 ; Số bé nhất có hai chữ số: 10',
          '1 chục = 10 đơn vị ; 10 chục = 100 đơn vị (1 trăm)',
          '1 xăng-ti-mét viết tắt là 1 cm'
        ],
        keyPoints: [
          'Khi dùng thước kẻ đo đoạn thẳng: Đặt vạch số 0 của thước trùng với một đầu mút của đoạn thẳng, đọc số ở đầu mút còn lại.',
          'Kim ngắn chỉ giờ, kim dài chỉ phút. Kim dài chỉ số 12 là giờ đúng.'
        ]
      }
    ]
  },

  // ==========================================
  // GRADE 2 - LỚP 2
  // ==========================================
  {
    id: 'pdf-g2-s1-math-addition-subtraction',
    title: 'Cẩm nang Toán 2 - Bảng Cộng trừ có nhớ & Đại lượng dm, kg, l',
    titleEn: 'Math 2 Guide - Regrouping Addition/Subtraction & Measurement',
    grade: 2,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 16,
    fileSize: '2.5 MB',
    description: 'Thuật toán cộng trừ có nhớ trong phạm vi 100, bảng cộng trừ qua 10, chuyển đổi đề-xi-mét (dm) sang xăng-ti-mét (cm), ki-lô-gam (kg) và lít (l).',
    descriptionEn: 'Regrouping across 10, measurement units dm, kg, liters.',
    author: 'Tổ Bộ môn Toán Tiểu học Learnix',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan2_HocKy1_CongTruCoNho.pdf',
    sections: [
      {
        title: 'Bảng cộng, trừ qua 10 & Phép tính có nhớ',
        content: 'Phương pháp "Làm cho tròn chục rồi cộng với số còn lại": Ví dụ 9 + 5 = 9 + 1 + 4 = 10 + 4 = 14. Phép trừ: 11 - 5 = 11 - 1 - 4 = 10 - 4 = 6.',
        formulas: [
          '1 dm = 10 cm ; 10 cm = 1 dm',
          'Ki-lô-gam viết tắt là kg (đơn vị đo khối lượng)',
          'Lít viết tắt là l (đơn vị đo dung tích)'
        ],
        keyPoints: [
          'Khi cộng có nhớ: nhớ 1 sang hàng chục.',
          'Khi trừ có nhớ: mượn 1 chục ở hàng chục (bằng 10 đơn vị) rồi phải nhớ trả 1 sang số trừ ở hàng chục.'
        ],
        exampleProblem: {
          problem: 'Đặt tính rồi tính: 47 + 28 = ?',
          solution: '7 + 8 = 15, viết 5 nhớ 1. 4 + 2 = 6, thêm 1 bằng 7. Kết quả: 75.'
        }
      }
    ]
  },
  {
    id: 'pdf-g2-s2-math-multiplication-tables',
    title: 'Sổ tay Toán 2 HK2 - Bảng nhân chia 2 và 5 & Hình khối',
    titleEn: 'Math 2 Sem 2 Handbook - Times Tables 2 & 5, 3D Shapes',
    grade: 2,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 15,
    fileSize: '2.4 MB',
    description: 'Hình thành phép nhân từ tổng các số hạng bằng nhau, bảng nhân 2, chia 2, bảng nhân 5, chia 5; nhận biết khối lập phương, khối trụ.',
    descriptionEn: 'Multiplication as repeated addition, tables for 2 and 5, 3D solids.',
    author: 'Hội đồng Khảo thí Quốc gia Learnix',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_Toan2_HocKy2_BangNhanChia.pdf',
    sections: [
      {
        title: 'Ý nghĩa Phép nhân & Bảng nhân, chia 2 và 5',
        content: 'Phép nhân là cách viết gọn của tổng các số hạng bằng nhau: a được lấy n lần viết là a x n.',
        formulas: [
          'Bảng nhân 2: 2x1=2; 2x2=4; 2x3=6; ...; 2x10=20',
          'Bảng nhân 5: 5x1=5; 5x2=10; 5x3=15; ...; 5x10=50',
          'Quan hệ nhân - chia: a x b = c => c : a = b và c : b = a'
        ],
        keyPoints: [
          'Khối lập phương: có 6 mặt là các hình vuông bằng nhau.',
          'Khối hộp chữ nhật: có 6 mặt là hình chữ nhật.'
        ]
      }
    ]
  },

  // ==========================================
  // GRADE 3 - LỚP 3
  // ==========================================
  {
    id: 'pdf-g3-s1-math-tables-geometry',
    title: 'Tài liệu Ôn thi Toán 3 - Bảng cửu chương 6-9, Chu vi & Góc vuông',
    titleEn: 'Math 3 Study Sheet - Times Tables 6-9, Perimeter & Angles',
    grade: 3,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 18,
    fileSize: '2.8 MB',
    description: 'Toàn bộ bảng cửu chương 1 đến 9, tính chất phép chia có dư (số dư luôn bé hơn số chia), công thức chu vi hình chữ nhật và hình vuông.',
    descriptionEn: 'Full 1-9 multiplication tables, division with remainder, perimeter formulas.',
    author: 'Ban Chuyên môn Tiểu học GDPT 2018',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan3_HocKy1_CuuChuong_ChuVi.pdf',
    sections: [
      {
        title: 'Bảng cửu chương & Phép chia có dư',
        content: 'Trong phép chia có dư: Số bị chia = Số chia x Thương + Số dư. ĐIỀU KIỆN BẮT BUỘC: Số dư luôn nhỏ hơn số chia (0 < r < b).',
        formulas: [
          'Chu vi hình chữ nhật: P = (chiều dài + chiều rộng) x 2 (cùng đơn vị đo)',
          'Chu vi hình vuông: P = độ dài cạnh x 4 (P = a x 4)',
          'Độ dài cạnh hình vuông = Chu vi : 4'
        ],
        keyPoints: [
          'Số dư lớn nhất trong phép chia cho 7 là số 6.',
          'Dùng góc vuông của thước ê-ke để kiểm tra góc vuông hay không vuông.'
        ],
        exampleProblem: {
          problem: 'Một mảnh đất hình chữ nhật có chiều dài 15m, chiều rộng 9m. Tính chu vi mảnh đất.',
          solution: 'P = (15 + 9) x 2 = 24 x 2 = 48 (m).'
        }
      }
    ]
  },
  {
    id: 'pdf-g3-s2-vietnamese-literary-devices',
    title: 'Sổ tay Ngữ văn 3 - Nghệ thuật So sánh, Nhân hóa & Tập làm văn',
    titleEn: 'Literature 3 Guide - Similes, Personification & Composition',
    grade: 3,
    semester: 2,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    pageCount: 18,
    fileSize: '2.7 MB',
    description: 'Phương pháp phát hiện và sử dụng biện pháp so sánh, 3 cách nhân hóa đồ vật con vật; dàn ý viết đoạn văn miêu tả cảnh đẹp và người thân.',
    descriptionEn: 'Similes, 3 forms of personification, essay outlining.',
    author: 'Viện Văn học Thiếu nhi - NXB Giáo dục',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_TiengViet3_SoSanh_NhanHoa_Van.pdf',
    sections: [
      {
        title: '3 Cách Nhân hóa trong Tiếng Việt',
        content: 'Nhân hóa là cách gọi hoặc tả đồ vật, con vật, cây cối bằng những từ ngữ vốn dùng cho con người, làm cho chúng trở nên sinh động, gần gũi.',
        formulas: [
          'Cách 1: Gọi sự vật bằng từ ngữ dùng để gọi người (Ví dụ: Bác kim giờ, chị chim sẻ, chú gà trống).',
          'Cách 2: Tả sự vật bằng từ ngữ dùng để tả người (Ví dụ: Gió thì thầm, lá bàng reo vui).',
          'Cách 3: Trò chuyện với sự vật thân mật như với người (Ví dụ: Khăn thương nhớ ai?).'
        ],
        keyPoints: [
          'Mô hình so sánh chuẩn: Sự vật 1 - Từ so sánh (như, là, tựa, tựa như) - Sự vật 2.',
          'So sánh giúp sự vật hiện lên cụ thể, giàu hình ảnh và truyền cảm.'
        ]
      }
    ]
  },

  // ==========================================
  // GRADE 4 - LỚP 4
  // ==========================================
  {
    id: 'pdf-g4-s1-math-large-numbers-divisibility',
    title: 'Tài liệu Ôn tập Toán 4 - Lớp Triệu, Dấu hiệu chia hết & Trung bình cộng',
    titleEn: 'Math 4 Review - Millions, Divisibility Rules & Averages',
    grade: 4,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 22,
    fileSize: '3.1 MB',
    description: 'Hàng và lớp (lớp đơn vị, lớp nghìn, lớp triệu); quy tắc chia hết cho 2, 3, 5, 9; phương pháp giải bài toán Tìm số trung bình cộng và Tìm hai số khi biết Tổng và Hiệu.',
    descriptionEn: 'Number classes, divisibility rules for 2, 3, 5, 9, sum-difference word problems.',
    author: 'Hội đồng Khoa học GDPT 2018',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan4_HocKy1_LopTrieu_ChiaHet.pdf',
    sections: [
      {
        title: 'Dấu hiệu chia hết & Toán Tổng - Hiệu',
        content: 'Dấu hiệu chia hết là công cụ tính toán nhẩm cực kỳ quan trọng giúp kiểm tra nhanh ước và phân tích thừa số.',
        formulas: [
          'Chia hết cho 2: Chữ số tận cùng là chẵn (0, 2, 4, 6, 8)',
          'Chia hết cho 5: Chữ số tận cùng là 0 hoặc 5',
          'Chia hết cho 3: Tổng các chữ số chia hết cho 3',
          'Chia hết cho 9: Tổng các chữ số chia hết cho 9',
          'Toán Tổng - Hiệu: Số lớn = (Tổng + Hiệu) : 2 ; Số bé = (Tổng - Hiệu) : 2'
        ],
        keyPoints: [
          'Một số chia hết cho 9 thì chắc chắn chia hết cho 3, nhưng chia hết cho 3 chưa chắc chia hết cho 9.',
          'Số vừa chia hết cho 2 vừa chia hết cho 5 phải có chữ số tận cùng là 0.'
        ],
        exampleProblem: {
          problem: 'Hai bạn An và Bình có tổng cộng 56 viên bi. An nhiều hơn Bình 12 viên bi. Hỏi mỗi bạn có bao nhiêu viên bi?',
          solution: 'Số bi của An (số lớn): (56 + 12) : 2 = 68 : 2 = 34 (viên). Số bi của Bình (số bé): 56 - 34 = 22 (viên).'
        }
      }
    ]
  },
  {
    id: 'pdf-g4-s2-math-fractions-geometry',
    title: 'Sổ tay Toán 4 HK2 - Toàn tập Phân số & Hình thoi, Hình bình hành',
    titleEn: 'Math 4 Sem 2 Handbook - Complete Fractions & Parallelogram/Rhombus Area',
    grade: 4,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 24,
    fileSize: '3.4 MB',
    description: 'Quy đồng mẫu số, rút gọn phân số, 4 phép tính cộng trừ nhân chia phân số; công thức diện tích hình bình hành S = a x h và hình thoi S = (m x n) : 2.',
    descriptionEn: 'Complete fraction arithmetic and quadrilateral area formulas.',
    author: 'Tổ Toán Học liệu Chuẩn Learnix',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_Toan4_HocKy2_PhanSo_HinhHoc.pdf',
    sections: [
      {
        title: 'Bốn Phép tính Phân số & Công thức Hình học Phẳng',
        content: 'Cộng/trừ phân số khác mẫu: Quy đồng mẫu số rồi cộng/trừ các tử số, giữ nguyên mẫu số chung. Phép nhân: tử nhân tử, mẫu nhân mẫu. Phép chia: nhân với phân số đảo ngược.',
        formulas: [
          'Nhân: (a/b) x (c/d) = (a x c) / (b x d)',
          'Chia: (a/b) : (c/d) = (a/b) x (d/c) = (a x d) / (b x c)',
          'Diện tích hình bình hành: S = a x h (đáy nhân chiều cao)',
          'Diện tích hình thoi: S = (m x n) : 2 (tích 2 đường chéo chia 2)'
        ],
        keyPoints: [
          'Luôn rút gọn kết quả phân số về dạng phân số tối giản.',
          'Trong công thức hình học: Đáy và chiều cao phải có cùng một đơn vị đo độ dài.'
        ]
      }
    ]
  },

  // ==========================================
  // GRADE 5 - LỚP 5
  // ==========================================
  {
    id: 'pdf-g5-s1-math-decimals-percentages',
    title: 'Bí kíp Toán 5 - Số Thập phân, Tỉ số Phần trăm & Hình học',
    titleEn: 'Math 5 Mastery - Decimals, Percentages & Geometry Formulas',
    grade: 5,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 26,
    fileSize: '3.6 MB',
    description: 'Chuyển đổi hỗn số - phân số thập phân; nhân chia số thập phân với 10, 100, 0.1, 0.01; 3 dạng bài toán về tỉ số phần trăm; diện tích hình tam giác, hình thang, hình tròn.',
    descriptionEn: 'Decimals, percentages 3 classic problem types, triangle, trapezoid and circle geometry.',
    author: 'Hội đồng Khảo thí Quốc gia Learnix',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan5_HocKy1_SoThapPhan_PhanTram.pdf',
    sections: [
      {
        title: 'Số Thập phân & Ba Dạng Toán Tỉ số Phần trăm',
        content: 'Dạng 1: Tìm tỉ số phần trăm của 2 số a và b -> (a : b) x 100%. Dạng 2: Tìm a% của một số B -> B x a : 100. Dạng 3: Tìm một số biết a% của nó là B -> B : a x 100.',
        formulas: [
          'Diện tích hình tam giác: S = (a x h) : 2',
          'Diện tích hình thang: S = (a + b) x h : 2',
          'Chu vi hình tròn: C = d x 3.14 = r x 2 x 3.14',
          'Diện tích hình tròn: S = r x r x 3.14'
        ],
        keyPoints: [
          'Nhân với 0.1, 0.01 = chia cho 10, 100 (dời dấu phẩy sang trái).',
          'Chia cho 0.1, 0.01 = nhân với 10, 100 (dời dấu phẩy sang phải).'
        ],
        exampleProblem: {
          problem: 'Một thửa ruộng hình thang có đáy lớn 40m, đáy bé 25m, chiều cao 18m. Tính diện tích thửa ruộng.',
          solution: 'S = (40 + 25) x 18 : 2 = 65 x 9 = 585 (m²).'
        }
      }
    ]
  },
  {
    id: 'pdf-g5-s2-math-motion-volume',
    title: 'Tuyển tập Toán 5 HK2 - Toán Chuyển động đều & Hình khối Không gian',
    titleEn: 'Math 5 Sem 2 Collection - Uniform Speed Problems & 3D Solids',
    grade: 5,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 28,
    fileSize: '3.8 MB',
    description: 'Chuyên đề chuyển động đều (v = s/t, hai xe đi ngược chiều gặp nhau, hai xe đi cùng chiều đuổi nhau, chuyển động trên dòng nước); thể tích và diện tích toàn phần hình hộp chữ nhật, hình lập phương.',
    descriptionEn: 'Uniform motion mechanics, relative speeds, water currents, 3D surface area and volume.',
    author: 'Viện Khoa học Giáo dục Quốc gia',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_Toan5_HocKy2_ChuyenDongDeu_HinhKhoi.pdf',
    sections: [
      {
        title: 'Toán Chuyển động đều (v, s, t) & Dòng nước',
        content: 'Vận tốc v = s : t ; Quãng đường s = v x t ; Thời gian t = s : v.',
        formulas: [
          'Hai xe đi ngược chiều gặp nhau: t = s : (v1 + v2)',
          'Hai xe đi cùng chiều đuổi nhau: t = s : (v1 - v2)',
          'Chuyển động trên dòng nước: v_xuôi = v_thực + v_dòng ; v_ngược = v_thực - v_dòng',
          'v_dòng = (v_xuôi - v_ngược) : 2 ; v_thực = (v_xuôi + v_ngược) : 2',
          'Thể tích hình hộp chữ nhật: V = a x b x c ; Hình lập phương: V = a x a x a'
        ],
        keyPoints: [
          'Đổi đơn vị đo thời gian chuẩn trước khi tính toán: 1 giờ 15 phút = 1.25 giờ; 45 phút = 0.75 giờ.',
          'Diện tích toàn phần = Diện tích xung quanh + Diện tích 2 mặt đáy.'
        ]
      }
    ]
  },

  // ==========================================
  // GRADE 6 - LỚP 6 (ALL 8 SUBJECTS, KẾT NỐI TRI THỨC)
  // ==========================================
  ...GRADE_6_PDFS,

  // ==========================================
  // GRADE 7 - LỚP 7
  // ==========================================
  {
    id: 'pdf-g7-s1-math-rationals-reals',
    title: 'Cẩm nang Toán 7 - Số Hữu tỉ, Số Thực & Các Đường Đồng quy trong Tam giác',
    titleEn: 'Math 7 Handbook - Rational/Real Numbers & Triangle Concurrent Lines',
    grade: 7,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 26,
    fileSize: '3.5 MB',
    description: 'Tập hợp số hữu tỉ Q, số thực R, căn bậc hai số học, tỉ lệ thức và dãy tỉ số bằng nhau; tính chất 3 đường trung tuyến (trọng tâm), 3 đường phân giác, 3 đường cao trong tam giác.',
    descriptionEn: 'Rationals, reals, equal ratios theorem, medians, angle bisectors, centroid.',
    author: 'Hội đồng Khoa học GDPT 2018 Learnix',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan7_HocKy1_SoThuc_TamGiac.pdf',
    sections: [
      {
        title: 'Dãy Tỉ số bằng nhau & Các đường đồng quy trong Tam giác',
        content: 'Tính chất dãy tỉ số bằng nhau: a/b = c/d = e/f = (a + c + e) / (b + d + f) = (a - c + e) / (b - d + f).',
        formulas: [
          'Căn bậc hai số học: √a = x <=> x ≥ 0 và x² = a',
          'Trọng tâm G chia đường trung tuyến theo tỉ số: AG / AM = 2/3',
          'Tổng 3 góc trong một tam giác luôn bằng 180°',
          'Bất đẳng thức tam giác: |b - c| < a < b + c'
        ],
        keyPoints: [
          'Giao điểm 3 đường trung tuyến gọi là Trọng tâm của tam giác.',
          'Giao điểm 3 đường phân giác là tâm đường tròn nội tiếp (cách đều 3 cạnh).',
          'Giao điểm 3 đường trung trực là tâm đường tròn ngoại tiếp (cách đều 3 đỉnh).'
        ]
      }
    ]
  },
  {
    id: 'pdf-g7-s2-natural-science-optics-acoustics',
    title: 'Tóm tắt KHTN 7 HK2 - Quang học, Âm thanh & Sinh học Trao đổi chất',
    titleEn: 'Natural Science 7 Sem 2 - Optics, Sound Waves & Photosynthesis',
    grade: 7,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    pageCount: 26,
    fileSize: '3.6 MB',
    description: 'Định luật phản xạ ánh sáng, vận tốc truyền âm trong các môi trường (rắn > lỏng > khí), tần số dao động (Héc - Hz); phương trình quang hợp và hô hấp tế bào.',
    descriptionEn: 'Light reflection law, acoustic propagation speeds, sound frequency, photosynthesis bioenergetics.',
    author: 'Ban Biên soạn KHTN Cấp 2',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_KHTN7_HocKy2_QuangHoc_AmThanh_QuangHop.pdf',
    sections: [
      {
        title: 'Định luật Phản xạ Ánh sáng & Sóng âm',
        content: 'Tia sáng phản xạ nằm trong mặt phẳng tới và ở bên kia pháp tuyến so với tia tới. Góc phản xạ i\' luôn bằng góc tới i (i\' = i).',
        formulas: [
          'Góc phản xạ = Góc tới: i\' = i',
          'Vận tốc truyền âm: v_rắn > v_lỏng > v_khí (âm KHÔNG truyền được trong chân không)',
          'Tần số dao động f = số dao động / số giây (đơn vị Hz)',
          'Phương trình quang hợp: Nước + CO2 + (Ánh sáng, Diệp lục) -> Glucozơ + O2'
        ],
        keyPoints: [
          'Tai người bình thường nghe được âm có tần số từ 16 Hz đến 20 000 Hz.',
          'Âm thanh có tần số dưới 16 Hz gọi là hạ âm; trên 20 000 Hz gọi là siêu âm.'
        ]
      }
    ]
  },

  // ==========================================
  // GRADE 8 - LỚP 8
  // ==========================================
  {
    id: 'pdf-g8-s1-math-algebra-geometry',
    title: 'Bí kíp Toán 8 - 7 Hằng đẳng thức, Phân thức & Tứ giác Hình học',
    titleEn: 'Math 8 Mastery - 7 Special Identities, Rational Fractions & Quadrilaterals',
    grade: 8,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 30,
    fileSize: '4.0 MB',
    description: 'Toàn bộ 7 hằng đẳng thức đáng nhớ, phương pháp phân tích đa thức thành nhân tử (đặt nhân tử chung, nhóm, dùng hằng đẳng thức, tách hạng tử); tính chất hình bình hành, chữ nhật, thoi, vuông.',
    descriptionEn: '7 special identities, factoring techniques, quadrilateral family tree and proofs.',
    author: 'Hội đồng Khảo thí Quốc gia Learnix',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan8_HocKy1_HangDangThuc_TuGiac.pdf',
    sections: [
      {
        title: '7 Hằng đẳng thức đáng nhớ & Phân tích Đa thức',
        content: 'Bảy hằng đẳng thức là công cụ trọng tâm xuyên suốt đại số từ lớp 8 đến lớp 12 và các kỳ thi chuyển cấp.',
        formulas: [
          '1. (A + B)² = A² + 2AB + B²',
          '2. (A - B)² = A² - 2AB + B²',
          '3. A² - B² = (A - B)(A + B)',
          '4. (A + B)³ = A³ + 3A²B + 3AB² + B³',
          '5. (A - B)³ = A³ - 3A²B + 3AB² - B³',
          '6. A³ + B³ = (A + B)(A² - AB + B²)',
          '7. A³ - B³ = (A - B)(A² + AB + B²)'
        ],
        keyPoints: [
          'A² + AB + B² là "bình phương thiếu của một tổng", luôn dương với mọi A, B không đồng thời bằng 0.',
          'Hình chữ nhật có 2 đường chéo vuông góc là hình vuông.',
          'Hình thoi có 1 góc vuông là hình vuông.'
        ]
      }
    ]
  },
  {
    id: 'pdf-g8-s2-natural-science-chemistry-fluids',
    title: 'Sổ tay KHTN 8 HK2 - Hóa học Vô cơ (Axit, Bazơ, Muối) & Cơ học Áp suất',
    titleEn: 'Natural Science 8 Sem 2 - Inorganic Chemistry, Moles & Fluid Mechanics',
    grade: 8,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    pageCount: 32,
    fileSize: '4.2 MB',
    description: 'Khái niệm Mol, nồng độ phần trăm C%, nồng độ mol CM, phân loại oxit - axit - bazơ - muối; áp suất thủy tĩnh p = d.h, lực đẩy Ác-si-mét FA = d.V.',
    descriptionEn: 'Molarity, stoichiometry, acid-base-salt families, liquid pressure and Archimedes buoyant force.',
    author: 'Viện Nghiên cứu Giáo dục Khoa học',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_KHTN8_HocKy2_HoaHoc_ApSuat_AcsiMet.pdf',
    sections: [
      {
        title: 'Mol, Dung dịch & Lực đẩy Ác-si-mét',
        content: 'Mol là lượng chất chứa 6.022 x 10²³ nguyên tử hoặc phân tử chất đó (hằng số Avôgađrô NA).',
        formulas: [
          'Số mol: n = m / M = V / 24.79 (ở 25°C, 1 bar)',
          'Nồng độ phần trăm: C% = (m_chất_tan / m_dung_dịch) x 100%',
          'Nồng độ mol: CM = n / V_dung_dịch (mol/l)',
          'Áp suất chất lỏng: p = d . h (d là trọng lượng riêng, h là độ sâu)',
          'Lực đẩy Ác-si-mét: FA = d . V (V là thể tích phần vật chìm trong chất lỏng)'
        ],
        keyPoints: [
          'Vật nổi khi FA > P ; Vật lơ lửng khi FA = P ; Vật chìm khi FA < P.',
          'Kim loại đứng trước H trong dãy hoạt động hóa học mới tác dụng được với dung dịch axit loãng (HCl, H2SO4 loãng) giải phóng khí H2.'
        ]
      }
    ]
  },

  // ==========================================
  // GRADE 9 - LỚP 9
  // ==========================================
  {
    id: 'pdf-g9-s1-math-entrance-exam-algebra',
    title: 'Chiến thuật Toán 9 Ôn thi vào 10 - Căn bậc hai & Hệ phương trình',
    titleEn: 'Math 9 High School Entrance Strategy - Radicals & Systems',
    grade: 9,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 34,
    fileSize: '4.3 MB',
    description: 'Phương pháp rút gọn biểu thức đại số chứa căn bậc hai, các câu hỏi phụ (tìm x để biểu thức nguyên, so sánh với số k); giải hệ phương trình bằng thế và cộng đại số.',
    descriptionEn: 'Radical algebraic simplification, parameter questions, linear systems for entrance exams.',
    author: 'Hội đồng Giáo viên Luyện thi vào 10 Learnix',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan9_HocKy1_CanBacHai_HePhuongTrinh.pdf',
    sections: [
      {
        title: 'Kỹ thuật Rút gọn Biểu thức chứa Căn & Câu hỏi Phụ',
        content: 'Bài toán rút gọn biểu thức luôn chiếm 1.5 - 2.0 điểm trong đề thi tuyển sinh vào lớp 10 công lập.',
        formulas: [
          '√(A²) = |A| (bằng A nếu A ≥ 0, bằng -A nếu A < 0)',
          '√(A/B) = √A / √B (với A ≥ 0, B > 0)',
          'Trục căn thức ở mẫu: A / (√B ± C) = A(√B ∓ C) / (B - C²)'
        ],
        keyPoints: [
          'Luôn tìm ĐIỀU KIỆN XÁC ĐỊNH (ĐKXĐ) trước khi giải biểu thức hoặc phương trình chứa căn.',
          'Nhớ đối chiếu nghiệm tìm được với ĐKXĐ trước khi kết luận.'
        ]
      }
    ]
  },
  {
    id: 'pdf-g9-s2-math-vieta-geometry-circle',
    title: 'Tuyệt đỉnh Toán 9 HK2 - Định lý Vi-ét, Tứ giác Nội tiếp & Ôn thi vào 10',
    titleEn: 'Math 9 Sem 2 - Vieta Formulas, Cyclic Quadrilaterals & Mock Tests',
    grade: 9,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 36,
    fileSize: '4.6 MB',
    description: 'Chuyên đề phương trình bậc hai ax² + bx + c = 0, hệ thức Vi-ét và các bài toán tương giao Parabol y = ax² với đường thẳng y = mx + n; 5 dấu hiệu chứng minh tứ giác nội tiếp đường tròn.',
    descriptionEn: 'Quadratic equations, Vieta relationships, line-parabola intersections, cyclic quadrilateral proofs.',
    author: 'Hội đồng Khảo thí Quốc gia Learnix',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_Toan9_HocKy2_Viet_TuGiacNoiTiep_Vao10.pdf',
    sections: [
      {
        title: 'Hệ thức Vi-ét & 5 Dấu hiệu Chứng minh Tứ giác Nội tiếp',
        content: 'Với phương trình ax² + bx + c = 0 (a ≠ 0) có hai nghiệm x1, x2 khi Δ ≥ 0: S = x1 + x2 = -b/a ; P = x1.x2 = c/a.',
        formulas: [
          'Biệt thức Δ = b² - 4ac (hoặc Δ\' = b\'² - ac với b = 2b\')',
          'Biến đổi Vi-ét cơ bản: x1² + x2² = (x1 + x2)² - 2x1.x2 = S² - 2P',
          '|x1 - x2| = √( (x1 + x2)² - 4x1.x2 ) = √(S² - 4P)',
          'Số đo góc nội tiếp = 1/2 số đo cung bị chắn'
        ],
        keyPoints: [
          'Dấu hiệu 1: Tứ giác có tổng hai góc đối diện bằng 180°.',
          'Dấu hiệu 2: Tứ giác có hai đỉnh kề nhau cùng nhìn cạnh chứa hai đỉnh còn lại dưới một góc bằng nhau.',
          'Dấu hiệu 3: Tứ giác có góc ngoài tại một đỉnh bằng góc trong tại đỉnh đối diện.'
        ]
      }
    ]
  },

  // ==========================================
  // GRADE 10 - LỚP 10
  // ==========================================
  {
    id: 'pdf-g10-s1-math-sets-vectors',
    title: 'Cẩm nang Toán 10 - Mệnh đề, Tập hợp, Vectơ & Hệ thức lượng Tam giác',
    titleEn: 'Math 10 Guide - Sets, Vectors, Dot Product & Triangle Trigonometry',
    grade: 10,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 30,
    fileSize: '3.9 MB',
    description: 'Các phép toán tập hợp; hệ bất phương trình bậc nhất hai ẩn và bài toán tối ưu quy hoạch tuyến tính; tích vô hướng hai vectơ; định lý Cosin, Sin và các công thức diện tích tam giác.',
    descriptionEn: 'Set theory, linear programming, vector dot products, Laws of Cosines/Sines, triangle area formulas.',
    author: 'Tổ Toán THPT Chuyên - NXB Giáo dục',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan10_HocKy1_TapHop_Vecto_HeThucLuong.pdf',
    sections: [
      {
        title: 'Định lý Cosin, Sin & Tích Vô hướng Vectơ',
        content: 'Hệ thức lượng trong tam giác ABC với độ dài 3 cạnh a, b, c và bán kính đường tròn ngoại tiếp R, nội tiếp r.',
        formulas: [
          'Định lý Cosin: a² = b² + c² - 2bc.cos(A)',
          'Định lý Sin: a / sin(A) = b / sin(B) = c / sin(C) = 2R',
          'Diện tích tam giác: S = 1/2 a.h_a = 1/2 ab.sin(C) = abc / (4R) = p.r = √(p(p-a)(p-b)(p-c))',
          'Tích vô hướng: a⃗ . b⃗ = |a⃗| . |b⃗| . cos(a⃗, b⃗) = a1.b1 + a2.b2'
        ],
        keyPoints: [
          'Hai vectơ vuông góc khi và chỉ khi tích vô hướng của chúng bằng 0: a⃗ ⊥ b⃗ <=> a⃗ . b⃗ = 0 <=> a1.b1 + a2.b2 = 0.',
          'Công thức Hê-rông tính diện tích tam giác khi biết độ dài 3 cạnh cực kỳ hữu dụng.'
        ]
      }
    ]
  },
  {
    id: 'pdf-g10-s2-physics-mechanics-energy',
    title: 'Sổ tay Vật lý 10 HK2 - Năng lượng, Công cơ học & Định luật Bảo toàn',
    titleEn: 'Physics 10 Sem 2 - Mechanical Work, Energy Conservation & Collisions',
    grade: 10,
    semester: 2,
    subject: 'Vật lý',
    subjectVi: 'Vật lý',
    subjectEn: 'Physics',
    category: 'science',
    pageCount: 28,
    fileSize: '3.7 MB',
    description: 'Công cơ học A = F.s.cos α, công suất P = A/t = F.v; động năng Wđ = 1/2 mv², thế năng trọng trường Wt = mgz, định luật bảo toàn cơ năng và động lượng.',
    descriptionEn: 'Work, power, kinetic and gravitational potential energy, mechanical energy conservation, momentum.',
    author: 'Viện Vật lý Ứng dụng - Learnix',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_VatLy10_HocKy2_NangLuong_BaoToanCoNang.pdf',
    sections: [
      {
        title: 'Công, Động năng & Định luật Bảo toàn Cơ năng',
        content: 'Cơ năng của vật chuyển động dưới tác dụng của trọng lực hoặc lực đàn hồi là đại lượng bảo toàn.',
        formulas: [
          'Công cơ học: A = F . s . cos α (α là góc giữa lực F⃗ và hướng chuyển động)',
          'Động năng: Wđ = 1/2 m . v²',
          'Thế năng trọng trường: Wt = m . g . z',
          'Cơ năng: W = Wđ + Wt = hằng số (khi chỉ có lực thế sinh công)',
          'Định lý động năng: Wđ2 - Wđ1 = ∑ A_ngoại_lực'
        ],
        keyPoints: [
          'Công phát động: 0 ≤ α < 90° (cos α > 0 => A > 0).',
          'Công cản: 90° < α ≤ 180° (cos α < 0 => A < 0, ví dụ lực ma sát).',
          'Lực vuông góc với hướng chuyển động (α = 90°) không sinh công (A = 0).'
        ]
      }
    ]
  },

  // ==========================================
  // GRADE 11 - LỚP 11
  // ==========================================
  {
    id: 'pdf-g11-s1-math-calculus-trig-sequences',
    title: 'Tuyển tập Toán 11 - Lượng giác, Cấp số cộng/nhân & Giới hạn Hàm số',
    titleEn: 'Math 11 Collection - Trigonometry, Arithmetic/Geometric Series & Limits',
    grade: 11,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 32,
    fileSize: '4.1 MB',
    description: 'Công thức biến đổi lượng giác (cộng, nhân đôi, biến đổi tích thành tổng); dãy số, cấp số cộng, cấp số nhân lùi vô hạn; giới hạn dãy số và giới hạn hàm số dạng 0/0, ∞/∞.',
    descriptionEn: 'Trigonometric identities, sequences, series, calculus limits indeterminate forms.',
    author: 'Hội đồng Khoa học Chuyên ban THPT',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan11_HocKy1_LuongGiac_CapSo_GioiHan.pdf',
    sections: [
      {
        title: 'Cấp số Cộng, Cấp số Nhân & Khử dạng Vô định Giới hạn',
        content: 'Các công thức cốt lõi về cấp số và phương pháp phân tích nhân tử, nhân liên hợp khử dạng vô định.',
        formulas: [
          'Cấp số cộng: un = u1 + (n - 1)d ; Sn = n(u1 + un) / 2',
          'Cấp số nhân: un = u1 . qⁿ⁻¹ ; Sn = u1(1 - qⁿ) / (1 - q)',
          'Tổng CSN lùi vô hạn (|q| < 1): S = u1 / (1 - q)',
          'Nhân liên hợp bậc hai: a - b = (a² - b²) / (a + b)',
          'Nhân liên hợp bậc ba: a - b = (a³ - b³) / (a² + ab + b²)'
        ],
        keyPoints: [
          'Các góc lượng giác đặc biệt: 0, π/6, π/4, π/3, π/2, π.',
          'Khi tính lim hàm phân thức đa thức tại vô cực: Rút lũy thừa bậc cao nhất ở tử và mẫu ra làm nhân tử chung.'
        ]
      }
    ]
  },
  {
    id: 'pdf-g11-s2-math-derivatives-3d-geometry',
    title: 'Sổ tay Toán 11 HK2 - Đạo hàm, Tiếp tuyến & Hình học Không gian Vuông góc',
    titleEn: 'Math 11 Sem 2 Handbook - Derivatives, Tangents & 3D Perpendicularity',
    grade: 11,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 34,
    fileSize: '4.4 MB',
    description: 'Bảng đạo hàm các hàm số cơ bản và hàm hợp, ý nghĩa hình học của đạo hàm (phương trình tiếp tuyến y - y0 = f\'(x0)(x - x0)); hai mặt phẳng vuông góc, góc giữa đường thẳng và mặt phẳng, khoảng cách.',
    descriptionEn: 'Derivative formulas, tangent line equations, spatial perpendicularity and distance formulas.',
    author: 'Viện Toán học Ứng dụng & Phát triển Giáo dục',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_Toan11_HocKy2_DaoHam_TiepTuyen_KhongGian.pdf',
    sections: [
      {
        title: 'Bảng Đạo hàm & Phương trình Tiếp tuyến',
        content: 'Quy tắc tính đạo hàm tổng, hiệu, tích, thương và đạo hàm hàm hợp.',
        formulas: [
          '(xⁿ)\' = n . xⁿ⁻¹ ; (uⁿ)\' = n . uⁿ⁻¹ . u\'',
          '(1/x)\' = -1/x² ; (√x)\' = 1 / (2√x)',
          '(sin x)\' = cos x ; (cos x)\' = -sin x ; (tan x)\' = 1 / cos² x',
          '(u . v)\' = u\'v + uv\' ; (u / v)\' = (u\'v - uv\') / v²',
          'Phương trình tiếp tuyến tại M(x0, y0): y = f\'(x0)(x - x0) + y0'
        ],
        keyPoints: [
          'Hệ số góc k của tiếp tuyến chính là giá trị đạo hàm tại tiếp điểm: k = f\'(x0).',
          'Hai đường thẳng vuông góc trong không gian: tích vô hướng hai vectơ chỉ phương bằng 0.'
        ]
      }
    ]
  },

  // ==========================================
  // GRADE 12 - LỚP 12
  // ==========================================
  {
    id: 'pdf-g12-s1-math-curve-sketching-logarithms',
    title: 'Cẩm nang Toán 12 - Khảo sát Hàm số, Cực trị & Mũ - Logarit',
    titleEn: 'Math 12 Guide - Function Graphing, Extrema, Exponential & Logarithms',
    grade: 12,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 36,
    fileSize: '4.5 MB',
    description: 'Xét tính đơn điệu, 2 quy tắc tìm cực trị hàm số, phương pháp tìm giá trị lớn nhất - nhỏ nhất (GTLN, GTNN); đường tiệm cận đứng, ngang, xiên; các công thức logarit và phương trình mũ logarit.',
    descriptionEn: 'Monotonicity, extrema rules, min/max optimizations, asymptotes, logarithm properties and equations.',
    author: 'Hội đồng Khảo thí Quốc gia Learnix',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan12_HocKy1_KhaoSatHamSo_MuLogarit.pdf',
    sections: [
      {
        title: 'Cực trị Hàm số & Các Công thức Mũ - Logarit Chuẩn',
        content: 'Điều kiện đủ để hàm số đạt cực trị: Nếu f\'(x0) = 0 và f\'(x) đổi dấu từ + sang - khi qua x0 thì x0 là điểm cực đại. Đổi dấu từ - sang + thì x0 là điểm cực tiểu.',
        formulas: [
          'Hàm số phân thức y = (ax + b) / (cx + d): Tiệm cận đứng x = -d/c ; Tiệm cận ngang y = a/c ; y\' = (ad - bc) / (cx + d)²',
          'log_a(x . y) = log_a(x) + log_a(y) ; log_a(x / y) = log_a(x) - log_a(y)',
          'log_a(x^α) = α . log_a(x) ; log_(a^β)(x) = (1/β) . log_a(x)',
          'Công thức đổi cơ số: log_a(b) = log_c(b) / log_c(a)'
        ],
        keyPoints: [
          'Đạo hàm của hàm mũ: (a^x)\' = a^x . ln(a) ; (e^x)\' = e^x.',
          'Đạo hàm của hàm logarit: (log_a(x))\' = 1 / (x . ln(a)) ; (ln x)\' = 1/x.',
          'Điều kiện tồn tại của log_a(b): Cơ số 0 < a ≠ 1 và biểu thức b > 0.'
        ]
      }
    ]
  },
  {
    id: 'pdf-g12-s2-math-integrals-spatial-oxyz',
    title: 'Tuyệt đỉnh Toán 12 HK2 - Nguyên hàm, Tích phân & Hình học Oxyz Ôn thi Tốt nghiệp',
    titleEn: 'Math 12 Sem 2 - Integrals, 3D Oxyz Space Geometry & Graduation Exam',
    grade: 12,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 38,
    fileSize: '4.8 MB',
    description: 'Bảng nguyên hàm đầy đủ, phương pháp đổi biến số, tích phân từng phần; ứng dụng tính diện tích hình phẳng và thể tích khối tròn xoay; phương trình mặt cầu, mặt phẳng, đường thẳng trong không gian tọa độ Oxyz.',
    descriptionEn: 'Integration by parts, volume of revolution, 3D spatial geometry of planes, lines, spheres in Oxyz.',
    author: 'Bộ Khảo thí Quốc gia - NXB Giáo dục',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_Toan12_HocKy2_TichPhan_Oxyz_OnThiTN.pdf',
    sections: [
      {
        title: 'Nguyên hàm, Tích phân & Hình học Không gian Oxyz',
        content: 'Định nghĩa: F(x) là nguyên hàm của f(x) trên K nếu F\'(x) = f(x). Công thức Newton-Leibniz: ∫[a,b] f(x)dx = F(b) - F(a).',
        formulas: [
          'Tích phân từng phần: ∫ u dv = u.v - ∫ v du (Ưu tiên đặt u: Nhất lô, nhì đa, tam lượng, tứ mũ)',
          'Diện tích hình phẳng giới hạn bởi y = f(x) và y = g(x): S = ∫[a,b] |f(x) - g(x)| dx',
          'Thể tích khối tròn xoay quanh trục Ox: V = π ∫[a,b] f²(x) dx',
          'Phương trình mặt phẳng đi qua M0(x0, y0, z0) có VTPT n⃗(A, B, C): A(x - x0) + B(y - y0) + C(z - z0) = 0',
          'Mặt cầu tâm I(a, b, c) bán kính R: (x - a)² + (y - b)² + (z - c)² = R²'
        ],
        keyPoints: [
          'Khoảng cách từ điểm M0(x0, y0, z0) đến mặt phẳng (P): Ax + By + Cz + D = 0:',
          'd(M0, (P)) = |A.x0 + B.y0 + C.z0 + D| / √(A² + B² + C²).',
          'Vị trí tương đối giữa mặt cầu và mặt phẳng: d < R cắt theo đường tròn, d = R tiếp xúc, d > R không cắt.'
        ]
      }
    ]
  }
];
