import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Grade 8 Curriculum Quizzes Database
 * Covers at least 4 Regular 15-Minute Assessments and 1 Final Examination per Semester for core subjects
 * Aligned with Vietnam Ministry of Education GDPT 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */
export const GRADE_8_FULL_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // GRADE 8 - TOÁN HỌC 8 - SEMESTER 1
  // =========================================================================
  {
    id: 'quiz-g8-s1-math-reg1',
    title: 'Toán 8 - Kiểm tra Thường xuyên 1: Đơn thức & Đa thức nhiều biến',
    titleEn: 'Math 8 - Regular Assessment 1: Multivariable Monomials & Polynomials',
    grade: 8,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Đơn thức thu gọn, bậc của đơn thức, đa thức nhiều biến và các phép cộng trừ đơn thức đồng dạng.',
    descriptionEn: 'Monomials, multivariable polynomial operations, like terms, and degrees.',
    questions: [
      {
        question: 'Biểu thức nào sau đây là một ĐƠN THỨC?',
        options: ['-3x²y', '2x + y', 'x / y', 'x² - 1'],
        answerIndex: 0,
        hint: 'Đơn thức là biểu thức chỉ gồm một số, một biến hoặc một tích giữa các số và biến.',
        explanation: '-3x²y là tích giữa số và các biến, là một đơn thức.'
      },
      {
        question: 'Bậc của đơn thức A = 4x³y²z là:',
        options: ['6', '5', '4', '3'],
        answerIndex: 0,
        hint: 'Tổng số mũ của tất cả các biến: 3 + 2 + 1 = 6.',
        explanation: 'Bậc của đơn thức là tổng số mũ của các biến: 3 + 2 + 1 = 6.'
      },
      {
        question: 'Cặp đơn thức nào sau đây là hai đơn thức đồng dạng?',
        options: ['-2x²y và 5x²y', '3xy² và 3x²y', '4x và 4y', 'x³ và 3x'],
        answerIndex: 0,
        hint: 'Hai đơn thức có hệ số khác 0 và có cùng phần biến.',
        explanation: '-2x²y và 5x²y có cùng phần biến x²y nên là hai đơn thức đồng dạng.'
      },
      {
        question: 'Thu gọn đa thức P = 3x²y - 5xy + 2x²y + 5xy ta được:',
        options: ['5x²y', 'x²y', '5x²y + 10xy', '0'],
        answerIndex: 0,
        hint: '(3 + 2)x²y + (-5 + 5)xy = 5x²y + 0.',
        explanation: 'Nhóm các hạng tử đồng dạng: (3x²y + 2x²y) + (-5xy + 5xy) = 5x²y.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-math-reg2',
    title: 'Toán 8 - Kiểm tra Thường xuyên 2: Bảy Hằng đẳng thức đáng nhớ',
    titleEn: 'Math 8 - Regular Assessment 2: The Seven Remarkable Algebraic Identities',
    grade: 8,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: '(A+B)², (A-B)², A²-B², (A+B)³, (A-B)³, A³+B³, A³-B³ và áp dụng tính nhanh.',
    descriptionEn: 'The 7 classic algebraic identities, expansion and factoring applications.',
    questions: [
      {
        question: 'Khai triển hằng đẳng thức (x + 2y)² ta được kết quả:',
        options: ['x² + 4xy + 4y²', 'x² + 2xy + 4y²', 'x² + 4y²', 'x² + 4xy + 2y²'],
        answerIndex: 0,
        hint: '(A + B)² = A² + 2AB + B² với A = x, B = 2y.',
        explanation: '(x + 2y)² = x² + 2(x)(2y) + (2y)² = x² + 4xy + 4y².'
      },
      {
        question: 'Biểu thức x² - 9 được viết dưới dạng tích là:',
        options: ['(x - 3)(x + 3)', '(x - 3)²', '(x + 3)²', '(x - 9)(x + 1)'],
        answerIndex: 0,
        hint: 'A² - B² = (A - B)(A + B) với 9 = 3².',
        explanation: 'Hiệu hai bình phương: x² - 3² = (x - 3)(x + 3).'
      },
      {
        question: 'Tính nhanh giá trị: 101² = ?',
        options: ['10201', '10101', '10200', '10001'],
        answerIndex: 0,
        hint: '(100 + 1)² = 10000 + 200 + 1 = 10201.',
        explanation: '101² = (100 + 1)² = 100² + 2 · 100 · 1 + 1² = 10201.'
      },
      {
        question: 'Hằng đẳng thức nào sau đây là ĐÚNG?',
        options: ['A³ - B³ = (A - B)(A² + AB + B²)', 'A³ - B³ = (A - B)(A² - AB + B²)', '(A - B)³ = A³ - B³', 'A² - B² = (A - B)²'],
        answerIndex: 0,
        hint: 'Hiệu hai lập phương bằng tích của hiệu với bình phương thiếu của tổng.',
        explanation: 'A³ - B³ = (A - B)(A² + AB + B²).'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-math-reg3',
    title: 'Toán 8 - Kiểm tra Thường xuyên 3: Phân tích Đa thức thành Nhân tử',
    titleEn: 'Math 8 - Regular Assessment 3: Factoring Polynomials',
    grade: 8,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Phương pháp đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử và tách hạng tử.',
    descriptionEn: 'Common factor extraction, group pairing, and identity substitution methods.',
    questions: [
      {
        question: 'Phân tích đa thức 2x² - 4x thành nhân tử bằng phương pháp đặt nhân tử chung:',
        options: ['2x(x - 2)', '2(x² - 4)', 'x(2x - 4)', '2x(x + 2)'],
        answerIndex: 0,
        hint: 'Nhân tử chung là 2x.',
        explanation: '2x² - 4x = 2x · x - 2x · 2 = 2x(x - 2).'
      },
      {
        question: 'Phân tích đa thức x² - 2xy + y² - 16 thành nhân tử:',
        options: ['(x - y - 4)(x - y + 4)', '(x - y - 16)(x - y + 16)', '(x + y - 4)(x + y + 4)', '(x - y)² - 16'],
        answerIndex: 0,
        hint: '(x² - 2xy + y²) - 16 = (x - y)² - 4².',
        explanation: '(x - y)² - 4² = (x - y - 4)(x - y + 4).'
      },
      {
        question: 'Tìm x biết x(x - 5) = 0:',
        options: ['x = 0 hoặc x = 5', 'x = 5', 'x = 0', 'x = -5'],
        answerIndex: 0,
        hint: 'Tích A · B = 0 khi A = 0 hoặc B = 0.',
        explanation: 'x = 0 hoặc x - 5 = 0 <=> x = 5.'
      },
      {
        question: 'Phân tích đa thức x² - 5x + 6 thành nhân tử:',
        options: ['(x - 2)(x - 3)', '(x + 2)(x + 3)', '(x - 1)(x - 6)', '(x + 1)(x - 6)'],
        answerIndex: 0,
        hint: 'Tách -5x = -2x - 3x.',
        explanation: 'x² - 2x - 3x + 6 = x(x - 2) - 3(x - 2) = (x - 2)(x - 3).'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-math-reg4',
    title: 'Toán 8 - Kiểm tra Thường xuyên 4: Tứ giác, Hình thang cân & Hình bình hành',
    titleEn: 'Math 8 - Regular Assessment 4: Quadrilaterals, Trapezoids & Parallelograms',
    grade: 8,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Tổng 4 góc của tứ giác bằng 360°, tính chất hình thang cân, dấu hiệu nhận biết hình bình hành và hình chữ nhật.',
    descriptionEn: 'Angle sums, isosceles trapezoids, and parallelogram identification properties.',
    questions: [
      {
        question: 'Tổng số đo các góc trong một tứ giác lồi luôn bằng bao nhiêu độ?',
        options: ['360°', '180°', '540°', '720°'],
        answerIndex: 0,
        hint: 'Chia tứ giác thành 2 tam giác: 180° + 180° = 360°.',
        explanation: 'Định lý: Tổng các góc của một tứ giác luôn bằng 360°.'
      },
      {
        question: 'Hình thang cân là hình thang có:',
        options: ['Hai góc kề một đáy bằng nhau (hoặc hai đường chéo bằng nhau)', 'Hai cạnh bên song song', 'Bốn góc vuông', 'Hai đường chéo vuông góc'],
        answerIndex: 0,
        hint: 'Định nghĩa hình thang cân.',
        explanation: 'Hình thang cân có hai góc kề một đáy bằng nhau và hai đường chéo bằng nhau.'
      },
      {
        question: 'Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình gì?',
        options: ['Hình bình hành', 'Hình thang vuông', 'Hình chữ nhật', 'Hình thoi'],
        answerIndex: 0,
        hint: 'Dấu hiệu nhận biết hình bình hành cơ bản.',
        explanation: 'Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình bình hành.'
      },
      {
        question: 'Hình bình hành có một góc vuông là hình gì?',
        options: ['Hình chữ nhật', 'Hình thoi', 'Hình vuông', 'Hình thang cân'],
        answerIndex: 0,
        hint: 'Góc vuông làm cho cả 4 góc đều bằng 90°.',
        explanation: 'Hình bình hành có 1 góc vuông là hình chữ nhật.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-math-final',
    title: 'Toán 8 - Đề Kiểm Tra Cuối Học Kỳ 1 (Tổng hợp Toàn diện)',
    titleEn: 'Math 8 - Semester 1 Final Examination (Comprehensive)',
    grade: 8,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối kỳ 1: Đa thức nhiều biến, hằng đẳng thức, phân tích nhân tử, tứ giác, hình chữ nhật, hình thoi, hình vuông.',
    descriptionEn: 'End-of-term comprehensive evaluation of multivariable algebra and geometry.',
    questions: [
      {
        question: 'Giá trị của biểu thức M = x² - 4xy + 4y² tại x = 102 và y = 1 là:',
        options: ['10000', '10404', '100', '10200'],
        answerIndex: 0,
        hint: 'M = (x - 2y)² = (102 - 2)² = 100².',
        explanation: 'M = (x - 2y)² = (102 - 2 · 1)² = 100² = 10000.'
      },
      {
        question: 'Hình thoi có hai đường chéo vuông góc và có tính chất nào sau đây?',
        options: ['Cắt nhau tại trung điểm mỗi đường và là đường phân giác của các góc', 'Luôn có 4 góc vuông', 'Có hai cạnh kề không bằng nhau', 'Không phải là hình bình hành'],
        answerIndex: 0,
        hint: 'Tính chất đặc trưng của đường chéo hình thoi.',
        explanation: 'Trong hình thoi, hai đường chéo vuông góc với nhau và là các đường phân giác của các góc.'
      },
      {
        question: 'Tìm x biết x³ - 4x = 0:',
        options: ['x = 0, x = 2, x = -2', 'x = 0, x = 4', 'x = 2, x = -2', 'x = 0'],
        answerIndex: 0,
        hint: 'x(x² - 4) = x(x - 2)(x + 2) = 0.',
        explanation: 'Phương trình có 3 nghiệm phân biệt: x = 0; x = 2; x = -2.'
      },
      {
        question: 'Hình vuông là tứ giác vừa là hình chữ nhật, vừa là:',
        options: ['Hình thoi', 'Hình thang cân', 'Tam giác đều', 'Hình đa giác đều 5 cạnh'],
        answerIndex: 0,
        hint: 'Vừa có 4 góc vuông (hình chữ nhật) vừa có 4 cạnh bằng nhau (hình thoi).',
        explanation: 'Hình vuông vừa là hình chữ nhật vừa là hình thoi.'
      },
      {
        question: 'Rút gọn biểu thức (x - 2)(x + 2) - x(x - 3) ta được:',
        options: ['3x - 4', '-3x - 4', '3x + 4', '-4'],
        answerIndex: 0,
        hint: 'x² - 4 - (x² - 3x) = x² - 4 - x² + 3x = 3x - 4.',
        explanation: '(x² - 4) - (x² - 3x) = 3x - 4.'
      },
      {
        question: 'Tứ giác ABCD có số đo góc A = 70°, B = 90°, C = 110°. Số đo góc D là:',
        options: ['90°', '80°', '100°', '120°'],
        answerIndex: 0,
        hint: 'Góc D = 360° - (70° + 90° + 110°) = 360° - 270° = 90°.',
        explanation: 'Tổng 4 góc bằng 360° nên góc D = 90°.'
      }
    ]
  },

  // =========================================================================
  // GRADE 8 - TOÁN HỌC 8 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g8-s2-math-reg1',
    title: 'Toán 8 - Kiểm tra Thường xuyên 1: Phân thức Đại số & Rút gọn Phân thức',
    titleEn: 'Math 8 - Regular Assessment 1: Rational Fractions & Simplification',
    grade: 8,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Định nghĩa phân thức A/B (B ≠ 0), điều kiện xác định và quy tắc rút gọn phân thức đại số.',
    descriptionEn: 'Algebraic fractions, domain restrictions, and fraction reduction.',
    questions: [
      {
        question: 'Phân thức đại số (x + 1)/(x - 3) xác định (có nghĩa) khi nào?',
        options: ['x ≠ 3', 'x ≠ -1', 'x = 3', 'x ≠ 0'],
        answerIndex: 0,
        hint: 'Mẫu thức phải khác 0: x - 3 ≠ 0.',
        explanation: 'Điều kiện xác định của phân thức là mẫu thức khác 0, tức x - 3 ≠ 0 <=> x ≠ 3.'
      },
      {
        question: 'Rút gọn phân thức (2x - 4)/(x² - 4) ta được kết quả là:',
        options: ['2/(x + 2)', '2/(x - 2)', '1/(x + 2)', '2'],
        answerIndex: 0,
        hint: '2(x - 2) / [(x - 2)(x + 2)].',
        explanation: 'Tử là 2(x - 2), mẫu là (x - 2)(x + 2). Rút gọn x - 2 còn lại 2/(x + 2).'
      },
      {
        question: 'Hai phân thức A/B và C/D bằng nhau (A/B = C/D) khi và chỉ khi:',
        options: ['A · D = B · C', 'A · B = C · D', 'A + D = B + C', 'A / D = B / C'],
        answerIndex: 0,
        hint: 'Tích chéo bằng nhau.',
        explanation: 'Quy tắc bằng nhau của hai phân thức: A · D = B · C.'
      },
      {
        question: 'Kết quả của phép cộng x/(x + 2) + 2/(x + 2) là:',
        options: ['1', '(x + 2)', '2x/(x + 2)', '0'],
        answerIndex: 0,
        hint: '(x + 2) / (x + 2) = 1.',
        explanation: 'Cùng mẫu thức nên cộng hai tử số: (x + 2)/(x + 2) = 1.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-math-reg2',
    title: 'Toán 8 - Kiểm tra Thường xuyên 2: Phương trình Bậc nhất một ẩn',
    titleEn: 'Math 8 - Regular Assessment 2: Linear Equations with One Variable',
    grade: 8,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Phương trình ax + b = 0 (a ≠ 0), quy tắc chuyển vế và nhân chia hai vế với một số khác 0.',
    descriptionEn: 'First-degree equations, transformation rules, and real-life word problem modeling.',
    questions: [
      {
        question: 'Nghiệm của phương trình bậc nhất 3x - 9 = 0 là:',
        options: ['x = 3', 'x = -3', 'x = 9', 'x = 1/3'],
        answerIndex: 0,
        hint: '3x = 9 <=> x = 9 / 3 = 3.',
        explanation: 'Chuyển -9 sang vế phải: 3x = 9 <=> x = 3.'
      },
      {
        question: 'Phương trình nào sau đây là phương trình bậc nhất một ẩn?',
        options: ['2x + 5 = 0', 'x² - 4 = 0', '0x + 3 = 0', '1/x + 2 = 0'],
        answerIndex: 0,
        hint: 'Dạng ax + b = 0 với a ≠ 0.',
        explanation: '2x + 5 = 0 có a = 2 ≠ 0 và b = 5, là phương trình bậc nhất một ẩn.'
      },
      {
        question: 'Giải phương trình 5x - (2x + 3) = 6:',
        options: ['x = 3', 'x = 1', 'x = -3', 'x = 9'],
        answerIndex: 0,
        hint: '5x - 2x - 3 = 6 <=> 3x = 9 <=> x = 3.',
        explanation: '3x - 3 = 6 <=> 3x = 9 <=> x = 3.'
      },
      {
        question: 'Hai phương trình tương đương là hai phương trình có đặc điểm gì?',
        options: ['Có cùng một tập nghiệm', 'Có cùng một ẩn số', 'Có cùng số hệ số', 'Có đồ thị cắt nhau'],
        answerIndex: 0,
        hint: 'Định nghĩa hai phương trình tương đương.',
        explanation: 'Hai phương trình được gọi là tương đương khi chúng có cùng tập hợp nghiệm.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-math-reg3',
    title: 'Toán 8 - Kiểm tra Thường xuyên 3: Định lý Ta-lét trong Tam giác',
    titleEn: 'Math 8 - Regular Assessment 3: Thales Theorem in Triangles',
    grade: 8,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Định lý Ta-lét thuận và đảo, hệ quả định lý Ta-lét và tỉ số các đoạn thẳng định ra trên hai cạnh.',
    descriptionEn: 'Thales intercept theorem, parallel segments, and proportional segment ratios.',
    questions: [
      {
        question: 'Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó:',
        options: ['Định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ', 'Chia tam giác thành hai phần bằng nhau', 'Luôn đi qua trọng tâm', 'Tạo ra hai tam giác vuông'],
        answerIndex: 0,
        hint: 'Nội dung định lý Ta-lét trong tam giác.',
        explanation: 'Định lý Ta-lét: Đường thẳng song song với 1 cạnh của tam giác định ra trên 2 cạnh kia các đoạn thẳng tương ứng tỉ lệ.'
      },
      {
        question: 'Cho tam giác ABC có MN // BC (M thuộc AB, N thuộc AC). Biết AM = 2 cm, MB = 4 cm, AN = 3 cm. Độ dài đoạn NC là:',
        options: ['6 cm', '4 cm', '5 cm', '8 cm'],
        answerIndex: 0,
        hint: 'Áp dụng Ta-lét: AM/MB = AN/NC <=> 2/4 = 3/NC => NC = (4 · 3)/2 = 6 cm.',
        explanation: 'NC = (MB · AN) / AM = (4 · 3) / 2 = 6 cm.'
      },
      {
        question: 'Định lý Ta-lét đảo dùng để làm gì trong hình học?',
        options: ['Chứng minh hai đường thẳng song song với nhau', 'Tính diện tích hình tròn', 'Chứng minh hai đoạn thẳng vuông góc', 'Tìm số đo góc tù'],
        answerIndex: 0,
        hint: 'Nếu một đường thẳng cắt hai cạnh và định ra các đoạn tỉ lệ thì nó song song với cạnh thứ ba.',
        explanation: 'Định lý Ta-lét đảo là công cụ hữu hiệu để chứng minh quan hệ song song.'
      },
      {
        question: 'Trong tam giác ABC, đường phân giác của góc A chia cạnh đối diện BC thành hai đoạn BD và DC có tính chất nào?',
        options: ['DB/DC = AB/AC', 'DB/DC = AC/AB', 'DB = DC', 'DB · DC = AB · AC'],
        answerIndex: 0,
        hint: 'Tính chất đường phân giác trong tam giác.',
        explanation: 'Đường phân giác trong tam giác chia cạnh đối diện thành hai đoạn tỉ lệ với hai cạnh kề: DB/DC = AB/AC.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-math-reg4',
    title: 'Toán 8 - Kiểm tra Thường xuyên 4: Tam giác Đồng dạng & Các trường hợp Đồng dạng',
    titleEn: 'Math 8 - Regular Assessment 4: Similar Triangles & Similarity Criteria',
    grade: 8,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Định nghĩa hai tam giác đồng dạng, tỉ số đồng dạng k, ba trường hợp đồng dạng (c-c-c, c-g-c, g-g).',
    descriptionEn: 'Triangle similarity definitions, scale factor k, SSS, SAS, and AA criteria.',
    questions: [
      {
        question: 'Nếu tam giác ABC đồng dạng với tam giác A\'B\'C\' theo tỉ số đồng dạng k, thì tỉ số diện tích của hai tam giác đó bằng:',
        options: ['k²', 'k', '2k', '√k'],
        answerIndex: 0,
        hint: 'Tỉ số diện tích bằng bình phương tỉ số đồng dạng.',
        explanation: 'Định lý: Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng (k²).'
      },
      {
        question: 'Hai tam giác có hai cặp góc tương ứng bằng nhau thì hai tam giác đó:',
        options: ['Đồng dạng với nhau (trường hợp góc - góc: g-g)', 'Bằng nhau hoàn toàn', 'Có diện tích bằng nhau', 'Vuông góc với nhau'],
        answerIndex: 0,
        hint: 'Trường hợp đồng dạng thứ ba (g-g).',
        explanation: 'Nếu hai góc của tam giác này lần lượt bằng hai góc của tam giác kia thì hai tam giác đó đồng dạng.'
      },
      {
        question: 'Cho tam giác ABC đồng dạng với tam giác DEF theo tỉ số k = 1/2. Chu vi tam giác ABC bằng 20 cm. Chu vi tam giác DEF là:',
        options: ['40 cm', '10 cm', '20 cm', '80 cm'],
        answerIndex: 0,
        hint: 'Tỉ số chu vi bằng tỉ số đồng dạng: C(ABC) / C(DEF) = 1/2 => C(DEF) = 2 · 20 = 40 cm.',
        explanation: 'Tỉ số chu vi của hai tam giác đồng dạng bằng đúng tỉ số đồng dạng k.'
      },
      {
        question: 'Tam giác vuông này đồng dạng với tam giác vuông kia khi:',
        options: ['Có một góc nhọn bằng nhau', 'Có một góc vuông', 'Có cạnh huyền bằng nhau', 'Có hai cạnh góc vuông bằng nhau'],
        answerIndex: 0,
        hint: 'Vì cả hai đều có sẵn một góc vuông 90°, chỉ cần thêm 1 góc nhọn bằng nhau là thỏa mãn trường hợp g-g.',
        explanation: 'Hai tam giác vuông có 1 góc nhọn bằng nhau thì đồng dạng theo trường hợp góc - góc.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-math-final',
    title: 'Toán 8 - Đề Kiểm Tra Cuối Học Kỳ 2 (Tổng kết Năm học)',
    titleEn: 'Math 8 - Semester 2 Final Examination (Year-End Review)',
    grade: 8,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp kiến thức cả năm học Toán 8: Phân thức đại số, phương trình bậc nhất, định lý Ta-lét, tam giác đồng dạng và hình học không gian.',
    descriptionEn: 'End-of-year comprehensive evaluation covering algebraic rational equations and geometric similarity.',
    questions: [
      {
        question: 'Giải phương trình: (x - 1)/2 + (x + 1)/3 = 3:',
        options: ['x = 4', 'x = 3', 'x = 5', 'x = 2'],
        answerIndex: 0,
        hint: 'Quy đồng mẫu chung 6: 3(x - 1) + 2(x + 1) = 18 <=> 5x - 1 = 18 <=> 5x = 20 <=> x = 4.',
        explanation: '3x - 3 + 2x + 2 = 18 <=> 5x - 1 = 18 <=> 5x = 20 <=> x = 4.'
      },
      {
        question: 'Cho tam giác ABC vuông tại A có AB = 6 cm, AC = 8 cm. Độ dài cạnh huyền BC theo định lý Pi-ta-go là:',
        options: ['10 cm', '14 cm', '12 cm', '√28 cm'],
        answerIndex: 0,
        hint: 'BC² = AB² + AC² = 36 + 64 = 100 => BC = 10 cm.',
        explanation: 'BC = √(6² + 8²) = √100 = 10 cm.'
      },
      {
        question: 'Một người đi xe đạp từ A đến B với vận tốc 15 km/h. Lúc về người đó đi với vận tốc 12 km/h nên thời gian về nhiều hơn thời gian đi 30 phút (0.5 giờ). Quãng đường AB dài:',
        options: ['30 km', '45 km', '60 km', '25 km'],
        answerIndex: 0,
        hint: 'Gọi quãng đường là s: s/12 - s/15 = 0.5 <=> s/60 = 0.5 => s = 30 km.',
        explanation: 's/12 - s/15 = 1/2 <=> 5s - 4s = 30 <=> s = 30 km.'
      },
      {
        question: 'Biểu thức P = (x² - 1)/(x - 1) với x ≠ 1 sau khi rút gọn có giá trị là:',
        options: ['x + 1', 'x - 1', '1', 'x'],
        answerIndex: 0,
        hint: '(x - 1)(x + 1) / (x - 1) = x + 1.',
        explanation: 'P = (x - 1)(x + 1)/(x - 1) = x + 1.'
      },
      {
        question: 'Hình lăng trụ đứng tam giác có bao nhiêu mặt, bao nhiêu đỉnh và bao nhiêu cạnh?',
        options: ['5 mặt, 6 đỉnh, 9 cạnh', '6 mặt, 8 đỉnh, 12 cạnh', '4 mặt, 4 đỉnh, 6 cạnh', '5 mặt, 5 đỉnh, 8 cạnh'],
        answerIndex: 0,
        hint: '2 mặt đáy hình tam giác + 3 mặt bên hình chữ nhật.',
        explanation: 'Lăng trụ đứng tam giác gồm 2 đáy tam giác và 3 mặt bên, tổng cộng 5 mặt, 6 đỉnh và 9 cạnh.'
      },
      {
        question: 'Tỉ số đồng dạng của hai tam giác bằng 3. Hỏi diện tích tam giác lớn gấp mấy lần diện tích tam giác bé?',
        options: ['9 lần', '3 lần', '6 lần', '27 lần'],
        answerIndex: 0,
        hint: 'Tỉ số diện tích bằng k² = 3² = 9.',
        explanation: 'Tỉ số diện tích bằng bình phương tỉ số đồng dạng: 3² = 9 lần.'
      }
    ]
  },

  // =========================================================================
  // GRADE 8 - KHOA HỌC TỰ NHIÊN 8 - SEMESTER 1
  // =========================================================================
  {
    id: 'quiz-g8-s1-sci-reg1',
    title: 'KHTN 8 - Kiểm tra Thường xuyên 1: Phản ứng Hóa học & Định luật Bảo toàn Khối lượng',
    titleEn: 'Science 8 - Regular Assessment 1: Chemical Reactions & Conservation of Mass',
    grade: 8,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Hiện tượng vật lý và hiện tượng hóa học, phương trình chữ, định luật bảo toàn khối lượng (m chất tham gia = m sản phẩm).',
    descriptionEn: 'Chemical vs physical changes, reaction equations, and the law of mass conservation.',
    questions: [
      {
        question: 'Hiện tượng nào sau đây là HIỆN TƯỢNG HÓA HỌC?',
        options: ['Đinh sắt để trong không khí ẩm bị gỉ sét màu nâu đỏ', 'Nước đá tan chảy thành nước lỏng', 'Cồn bay hơi khi mở nắp lọ', 'Hòa tan đường vào cốc nước'],
        answerIndex: 0,
        hint: 'Có chất mới sinh ra (oxit sắt từ màu nâu đỏ).',
        explanation: 'Sắt gỉ là hiện tượng hóa học vì có sự biến đổi tạo ra chất mới (oxit sắt).'
      },
      {
        question: 'Đốt cháy hoàn toàn 12 gam Cacbon trong khí Oxi thu được 44 gam khí Cacbonic (CO₂). Khối lượng Oxi đã phản ứng là:',
        options: ['32 gam', '56 gam', '22 gam', '16 gam'],
        answerIndex: 0,
        hint: 'Theo định luật bảo toàn khối lượng: m(C) + m(O₂) = m(CO₂) => m(O₂) = 44 - 12.',
        explanation: 'm(O₂) = 44 - 12 = 32 gam.'
      },
      {
        question: 'Trong một phản ứng hóa học, yếu tố nào sau đây KHÔNG THAY ĐỔI?',
        options: ['Số lượng nguyên tử của mỗi nguyên tố', 'Số lượng phân tử của các chất', 'Liên kết giữa các nguyên tử', 'Tính chất hóa học của các chất'],
        answerIndex: 0,
        hint: 'Các nguyên tử chỉ liên kết lại với nhau chứ không tự sinh ra hay mất đi.',
        explanation: 'Định luật bảo toàn khối lượng dựa trên việc tổng số nguyên tử của mỗi nguyên tố được bảo toàn.'
      },
      {
        question: 'Dấu hiệu nào sau đây thường đi kèm với một phản ứng hóa học xảy ra?',
        options: ['Có chất khí thoát ra, có chất kết tủa xuất hiện hoặc có sự thay đổi màu sắc', 'Thể tích chất lỏng tăng gấp đôi', 'Nhiệt độ phòng tăng lên 1 độ', 'Không có bất kỳ dấu hiệu nào'],
        answerIndex: 0,
        hint: 'Dấu hiệu nhận biết phản ứng: sủi bọt khí, kết tủa, tỏa nhiệt, đổi màu.',
        explanation: 'Sự biến đổi màu sắc, sinh khí hoặc xuất hiện kết tủa là các dấu hiệu rõ nét của phản ứng hóa học.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-sci-reg2',
    title: 'KHTN 8 - Kiểm tra Thường xuyên 2: Mol, Khối lượng Mol & Thể tích Mol chất khí',
    titleEn: 'Science 8 - Regular Assessment 2: Moles, Molar Mass & Gas Molar Volume',
    grade: 8,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Khái niệm Mol, hằng số Avogadro (6.022 · 10²³), khối lượng mol M = m/n, thể tích mol chất khí ở điều kiện chuẩn 25°C, 1 bar (24.79 lít).',
    descriptionEn: 'The mole concept, Avogadro number, molar mass formulas, and standard gas volume (24.79 L).',
    questions: [
      {
        question: 'Một mol chất chứa bao nhiêu hạt vi mô (nguyên tử hoặc phân tử) của chất đó?',
        options: ['6.022 · 10²³ hạt (Số Avogadro - N_A)', '6.022 · 10²² hạt', '1000 hạt', '3.14 · 10²³ hạt'],
        answerIndex: 0,
        hint: 'Hằng số Avogadro.',
        explanation: '1 mol chất chứa xấp xỉ 6.022 · 10²³ nguyên tử hoặc phân tử chất đó.'
      },
      {
        question: 'Ở điều kiện chuẩn (25°C và 1 bar), thể tích của 1 mol chất khí bất kỳ bằng bao nhiêu?',
        options: ['24.79 lít', '22.4 lít', '24.0 lít', '1.0 lít'],
        answerIndex: 0,
        hint: 'Theo chuẩn đo lường GDPT 2018 (nhiệt độ 25°C, áp suất 1 bar).',
        explanation: 'Theo chuẩn quốc tế IUPAC mới và SGK GDPT 2018, thể tích mol chất khí ở điều kiện chuẩn là 24.79 lít.'
      },
      {
        question: 'Khối lượng mol phân tử của khí Cacbon đioxit (CO₂) là:',
        options: ['44 g/mol', '28 g/mol', '32 g/mol', '16 g/mol'],
        answerIndex: 0,
        hint: 'M(CO₂) = M(C) + 2 · M(O) = 12 + 2 · 16 = 44.',
        explanation: 'M = 12 + 16 · 2 = 44 g/mol.'
      },
      {
        question: 'Số mol của 5.4 gam nhôm (Al, có M = 27 g/mol) là:',
        options: ['0.2 mol', '0.5 mol', '0.1 mol', '2.0 mol'],
        answerIndex: 0,
        hint: 'n = m / M = 5.4 / 27.',
        explanation: 'n = 5.4 / 27 = 0.2 mol.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-sci-reg3',
    title: 'KHTN 8 - Kiểm tra Thường xuyên 3: Dung dịch, Nồng độ Phần trăm & Nồng độ Mol',
    titleEn: 'Science 8 - Regular Assessment 3: Solutions, Mass Percent & Molarity',
    grade: 8,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Chất tan, dung môi, dung dịch bão hòa; công thức C% = (m_ct / m_dd) · 100% và C_M = n / V.',
    descriptionEn: 'Solutes, solvents, concentration formulas (mass percent C% and molarity C_M).',
    questions: [
      {
        question: 'Hòa tan 20 gam muối ăn (NaCl) vào 80 gam nước. Nồng độ phần trăm (C%) của dung dịch thu được là:',
        options: ['20%', '25%', '15%', '80%'],
        answerIndex: 0,
        hint: 'Khối lượng dung dịch = m_chất tan + m_nước = 20 + 80 = 100g. C% = (20 / 100) · 100%.',
        explanation: 'C% = (20 / 100) · 100% = 20%.'
      },
      {
        question: 'Dung dịch bão hòa ở một nhiệt độ xác định là dung dịch:',
        options: ['Không thể hòa tan thêm chất tan đó được nữa', 'Có thể hòa tan thêm rất nhiều chất tan', 'Đã bị cạn hết nước', 'Có màu rất sẫm'],
        answerIndex: 0,
        hint: 'Đã đạt tới độ tan cực đại.',
        explanation: 'Dung dịch bão hòa là dung dịch không thể hòa tan thêm chất tan ở nhiệt độ đó.'
      },
      {
        question: 'Công thức tính nồng độ mol (C_M) của dung dịch là:',
        options: ['C_M = n / V (mol/lít)', 'C_M = m / V', 'C_M = V / n', 'C_M = n · V'],
        answerIndex: 0,
        hint: 'Số mol chất tan chia cho thể tích dung dịch tính bằng lít.',
        explanation: 'C_M = n / V với n là số mol chất tan, V là thể tích dung dịch (lít).'
      },
      {
        question: 'Hòa tan 0.5 mol NaOH vào nước để được 250 ml (0.25 lít) dung dịch. Nồng độ mol của dung dịch NaOH là:',
        options: ['2 M (hoặc 2 mol/L)', '0.5 M', '1 M', '4 M'],
        answerIndex: 0,
        hint: 'C_M = n / V = 0.5 / 0.25 = 2 M.',
        explanation: 'C_M = 0.5 / 0.25 = 2 M.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-sci-reg4',
    title: 'KHTN 8 - Kiểm tra Thường xuyên 4: Khối lượng riêng & Áp suất Chất lỏng',
    titleEn: 'Science 8 - Regular Assessment 4: Density & Hydrostatic Pressure',
    grade: 8,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Công thức khối lượng riêng D = m/V (kg/m³), áp suất p = F/S (N/m² hoặc Pa) và áp suất chất lỏng p = d.h.',
    descriptionEn: 'Density D = m/V, pressure p = F/S, and fluid depth pressure p = d.h.',
    questions: [
      {
        question: 'Công thức tính khối lượng riêng của một chất là:',
        options: ['D = m / V', 'D = m · V', 'D = V / m', 'D = P / V'],
        answerIndex: 0,
        hint: 'Khối lượng của một đơn vị thể tích chất đó.',
        explanation: 'D = m / V (đơn vị kg/m³).'
      },
      {
        question: 'Đơn vị đo áp suất trong hệ đo lường quốc tế SI là:',
        options: ['Paxcan (Pa, 1 Pa = 1 N/m²)', 'Niu-tơn (N)', 'Jun (J)', 'Oát (W)'],
        answerIndex: 0,
        hint: 'Pascal (Pa).',
        explanation: 'Áp suất được đo bằng Pascal (Pa), với 1 Pa = 1 N/m².'
      },
      {
        question: 'Càng lặn sâu xuống đáy biển, áp suất chất lỏng tác dụng lên người thợ lặn sẽ:',
        options: ['Càng tăng mạnh', 'Càng giảm đi', 'Không thay đổi', 'Bằng 0'],
        answerIndex: 0,
        hint: 'Áp suất chất lỏng p = d · h (tỉ lệ thuận với độ sâu h).',
        explanation: 'Độ sâu h càng lớn thì cột nước đè lên càng nặng, áp suất chất lỏng p = d · h càng tăng.'
      },
      {
        question: 'Để tăng áp suất tác dụng lên mặt tiếp xúc, người ta thường dùng biện pháp nào?',
        options: ['Mài sắc lưỡi dao kéo để giảm diện tích tiếp xúc S', 'Làm cùn lưỡi dao', 'Tăng diện tích mặt tiếp xúc', 'Giảm áp lực F'],
        answerIndex: 0,
        hint: 'p = F / S, khi S giảm thì p tăng.',
        explanation: 'Mài sắc lưỡi dao làm giảm diện tích mặt tiếp xúc S, làm tăng áp suất giúp cắt gọt dễ dàng.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-sci-final',
    title: 'KHTN 8 - Đề Kiểm Tra Cuối Học Kỳ 1 (Hóa học & Vật lý Toàn diện)',
    titleEn: 'Natural Science 8 - Semester 1 Final Examination (Comprehensive)',
    grade: 8,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối học kỳ 1: Phản ứng hóa học, định luật bảo toàn khối lượng, mol & tính toán hóa học, khối lượng riêng, áp suất.',
    descriptionEn: 'End-of-term evaluation of stoichiometry, molar gas relations, density, and hydrostatic mechanics.',
    questions: [
      {
        question: 'Cho 6.5 gam kẽm (Zn) phản ứng hoàn toàn với dung dịch axit clohiđric: Zn + 2HCl -> ZnCl₂ + H₂↑. Thể tích khí H₂ thu được ở đkc (25°C, 1 bar) là:',
        options: ['2.479 lít', '2.24 lít', '4.958 lít', '1.12 lít'],
        answerIndex: 0,
        hint: 'n(Zn) = 6.5 / 65 = 0.1 mol => n(H₂) = 0.1 mol => V = 0.1 · 24.79 = 2.479 lít.',
        explanation: 'Theo phương trình n(H₂) = n(Zn) = 0.1 mol. V = 0.1 · 24.79 = 2.479 lít.'
      },
      {
        question: 'Tỉ khối của khí Cacbon đioxit (CO₂, M=44) so với khí Oxi (O₂, M=32) là:',
        options: ['1.375', '0.727', '1.5', '2.0'],
        answerIndex: 0,
        hint: 'd(CO₂/O₂) = M(CO₂) / M(O₂) = 44 / 32 = 1.375.',
        explanation: 'Tỉ khối d = 44 / 32 = 1.375.'
      },
      {
        question: 'Tại sao các xe tải chở hàng siêu trường siêu trọng thường có rất nhiều bánh xe to?',
        options: ['Để tăng diện tích tiếp xúc với mặt đường, từ đó làm giảm áp suất đè lên mặt đường tránh hỏng đường', 'Để chạy nhanh hơn', 'Để xe trông đẹp mắt hơn', 'Để chở được ít hàng hơn'],
        answerIndex: 0,
        hint: 'p = F / S, tăng diện tích tiếp xúc S giúp giảm áp suất p.',
        explanation: 'Nhiều bánh xe làm tăng diện tích mặt tiếp xúc S, làm giảm áp suất đè lên mặt đường để bảo vệ đường sá.'
      },
      {
        question: 'Khối lượng riêng của nước ngọt là 1000 kg/m³. Một khối nước có thể tích 2 m³ có khối lượng là:',
        options: ['2000 kg (2 tấn)', '500 kg', '1000 kg', '4000 kg'],
        answerIndex: 0,
        hint: 'm = D · V = 1000 · 2 = 2000 kg.',
        explanation: 'm = D · V = 1000 · 2 = 2000 kg.'
      },
      {
        question: 'Hiện tượng nào sau đây giải thích tại sao nắp ấm trà thường có một lỗ nhỏ?',
        options: ['Để không khí tràn vào giúp áp suất khí quyển trong ấm cân bằng, nước trà dễ dàng rót ra ngoài', 'Để nhìn thấy trà bên trong', 'Để thoát nhiệt thật nhanh làm trà nguội', 'Để trang trí'],
        answerIndex: 0,
        hint: 'Tác dụng của áp suất khí quyển.',
        explanation: 'Lỗ nhỏ cho phép không khí lọt vào, tạo áp suất khí quyển đẩy nước trà chảy đều ra vòi.'
      },
      {
        question: 'Khi hòa tan hết 5.85 gam muối NaCl (M = 58.5 g/mol) vào nước được 500 ml dung dịch. Nồng độ mol của dung dịch là:',
        options: ['0.2 M', '0.1 M', '0.5 M', '1.0 M'],
        answerIndex: 0,
        hint: 'n = 5.85 / 58.5 = 0.1 mol. V = 0.5 lít. C_M = 0.1 / 0.5 = 0.2 M.',
        explanation: 'C_M = n / V = 0.1 / 0.5 = 0.2 M.'
      }
    ]
  },

  // =========================================================================
  // GRADE 8 - KHOA HỌC TỰ NHIÊN 8 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g8-s2-sci-reg1',
    title: 'KHTN 8 - Kiểm tra Thường xuyên 1: Axit, Bazơ, Muối & Thang đo pH',
    titleEn: 'Science 8 - Regular Assessment 1: Acids, Bases, Salts & The pH Scale',
    grade: 8,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Tính chất hóa học của axit (HCl, H₂SO₄), bazơ (NaOH, Ca(OH)₂), muối; chỉ thị quỳ tím và ý nghĩa thang pH (0 đến 14).',
    descriptionEn: 'Acid-base reactions, litmus indicator responses, salt formation, and pH scale diagnostics.',
    questions: [
      {
        question: 'Dung dịch nào sau đây làm quỳ tím chuyển sang MÀU ĐỎ?',
        options: ['Dung dịch Axit clohiđric (HCl)', 'Dung dịch Natri hiđroxit (NaOH)', 'Nước cất tinh khiết', 'Dung dịch muối ăn (NaCl)'],
        answerIndex: 0,
        hint: 'Axit làm quỳ tím hóa đỏ.',
        explanation: 'Dung dịch axit làm quỳ tím đổi màu đỏ.'
      },
      {
        question: 'Dung dịch có giá trị pH = 7 ở 25°C là môi trường gì?',
        options: ['Môi trường trung tính', 'Môi trường axit mạnh', 'Môi trường kiềm bazơ', 'Môi trường muối'],
        answerIndex: 0,
        hint: 'Nước tinh khiết có pH = 7.',
        explanation: 'pH = 7 là môi trường trung tính; pH < 7 là môi trường axit; pH > 7 là môi trường bazơ (kiềm).'
      },
      {
        question: 'Phản ứng giữa một axit và một bazơ tạo thành muối và nước được gọi là phản ứng gì?',
        options: ['Phản ứng trung hòa', 'Phản ứng phân hủy', 'Phản ứng thế', 'Phản ứng trùng hợp'],
        answerIndex: 0,
        hint: 'Axit khử tính bazơ và ngược lại.',
        explanation: 'Phản ứng axit + bazơ -> muối + nước là phản ứng trung hòa.'
      },
      {
        question: 'Để cải tạo đất trồng trọt bị chua (nhiễm phèn, pH < 5), người nông dân thường bón chất gì vào ruộng?',
        options: ['Vôi bột (CaO hoặc Ca(OH)₂)', 'Muối ăn (NaCl)', 'Dung dịch giấm ăn', 'Đường mía'],
        answerIndex: 0,
        hint: 'Vôi có tính kiềm giúp khử chua cho đất.',
        explanation: 'Vôi bột có tính bazơ giúp trung hòa lượng axit dư thừa trong đất chua, nâng độ pH lên mức thích hợp.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-sci-reg2',
    title: 'KHTN 8 - Kiểm tra Thường xuyên 2: Lực đẩy Ác-si-mét & Sự nổi của Vật',
    titleEn: 'Science 8 - Regular Assessment 2: Archimedes Buoyant Force & Flotation',
    grade: 8,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Định luật Ác-si-mét F_A = d · V, hướng thẳng đứng từ dưới lên; điều kiện vật chìm, lơ lửng và nổi (d_vật vs d_chất lỏng).',
    descriptionEn: 'Archimedes upward force formula F_A = d.V, floating, sinking and neutral buoyancy criteria.',
    questions: [
      {
        question: 'Lực đẩy Ác-si-mét tác dụng lên một vật nhúng chìm trong chất lỏng có phương và chiều như thế nào?',
        options: ['Phương thẳng đứng, chiều từ dưới lên trên', 'Phương nằm ngang từ trái sang phải', 'Phương thẳng đứng chiều từ trên xuống', 'Phương ngẫu nhiên theo dòng chảy'],
        answerIndex: 0,
        hint: 'Lực đẩy nâng đỡ vật hướng lên phía trên mặt nước.',
        explanation: 'Lực đẩy Ác-si-mét luôn có phương thẳng đứng và chiều hướng từ dưới lên trên.'
      },
      {
        question: 'Công thức tính độ lớn lực đẩy Ác-si-mét là:',
        options: ['F_A = d · V', 'F_A = m · g', 'F_A = p · S', 'F_A = d / V'],
        answerIndex: 0,
        hint: 'd là trọng lượng riêng của chất lỏng, V là thể tích phần chất lỏng bị vật chiếm chỗ.',
        explanation: 'F_A = d · V, bằng đúng trọng lượng của phần chất lỏng bị vật chiếm chỗ.'
      },
      {
        question: 'Một vật sẽ NỔI lên mặt nước khi:',
        options: ['Trọng lượng riêng của vật nhỏ hơn trọng lượng riêng của nước (d_vật < d_nước)', 'd_vật > d_nước', 'd_vật = d_nước', 'Trọng lượng của vật rất nặng'],
        answerIndex: 0,
        hint: 'Ví dụ gỗ nổi trên nước vì gỗ nhẹ hơn nước.',
        explanation: 'Khi d_vật < d_chất lỏng, lực đẩy Ác-si-mét lớn hơn trọng lượng vật khi nhúng chìm hoàn toàn, đẩy vật nổi lên.'
      },
      {
        question: 'Tại sao những con tàu thủy khổng lồ bằng thép nặng hàng vạn tấn lại nổi được trên mặt biển?',
        options: ['Tàu được thiết kế rỗng bên trong nên thể tích V rất lớn, làm cho trọng lượng riêng trung bình của tàu nhỏ hơn nước biển', 'Vì nước biển có nhiều muối làm tăng nhiệt độ', 'Thép nhẹ hơn nước biển', 'Do động cơ đẩy tàu lên'],
        answerIndex: 0,
        hint: 'Khoang tàu rỗng chứa nhiều không khí.',
        explanation: 'Khoang rỗng khổng lồ chứa không khí làm thể tích choán nước rất lớn, khiến trọng lượng riêng trung bình của cả con tàu nhỏ hơn nước biển.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-sci-reg3',
    title: 'KHTN 8 - Kiểm tra Thường xuyên 3: Nhiệt lượng & Các hình thức Truyền nhiệt',
    titleEn: 'Science 8 - Regular Assessment 3: Thermal Energy & Heat Transfer Mechanisms',
    grade: 8,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Dẫn nhiệt (chất rắn), đối lưu (chất lỏng và chất khí), bức xạ nhiệt (chân không) và công thức tính nhiệt lượng Q = m.c.Δt.',
    descriptionEn: 'Conduction, convection, radiation heat exchange, and thermal capacity Q = m.c.Δt.',
    questions: [
      {
        question: 'Hình thức truyền nhiệt chủ yếu trong chất rắn là gì?',
        options: ['Dẫn nhiệt', 'Đối lưu', 'Bức xạ nhiệt', 'Bay hơi'],
        answerIndex: 0,
        hint: 'Nhiệt truyền từ nguyên tử này sang nguyên tử kế cận qua dao động mạng tinh thể.',
        explanation: 'Dẫn nhiệt là hình thức truyền nhiệt chính trong chất rắn (kim loại dẫn nhiệt tốt nhất).'
      },
      {
        question: 'Hình thức truyền nhiệt bằng các dòng chất lỏng hoặc chất khí di chuyển nóng lên lạnh xuống gọi là:',
        options: ['Đối lưu', 'Dẫn nhiệt', 'Bức xạ nhiệt', 'Điện phân'],
        answerIndex: 0,
        hint: 'Hiện tượng nước sôi cuộn trào trong ấm đun.',
        explanation: 'Đối lưu là sự truyền nhiệt nhờ sự dịch chuyển thành dòng của các khối chất lỏng hoặc khí nóng nhẹ hơn nổi lên.'
      },
      {
        question: 'Năng lượng nhiệt từ Mặt Trời truyền qua khoảng chân không vũ trụ đến Trái Đất bằng hình thức nào?',
        options: ['Bức xạ nhiệt (tia nhiệt)', 'Dẫn nhiệt', 'Đối lưu', 'Gió bão'],
        answerIndex: 0,
        hint: 'Chân không không có vật chất nên không thể dẫn nhiệt hay đối lưu.',
        explanation: 'Bức xạ nhiệt truyền dưới dạng sóng điện từ (tia hồng ngoại), truyền được cả trong môi trường chân không.'
      },
      {
        question: 'Tại sao về mùa đông người ta thường thích mặc áo ấm màu tối hoặc áo phao xốp?',
        options: ['Vật màu tối hấp thụ bức xạ nhiệt tốt hơn và lớp bông xốp chứa không khí tĩnh dẫn nhiệt rất kém giúp giữ ấm cơ thể', 'Áo màu tối phát ra nhiệt sưởi ấm', 'Áo xốp nhẹ dễ bay', 'Để người khác không nhìn thấy'],
        answerIndex: 0,
        hint: 'Không khí tĩnh là chất dẫn nhiệt cực kỳ kém.',
        explanation: 'Không khí mắc kẹt trong lớp bông xốp ngăn cản cơ thể truyền nhiệt ra môi trường lạnh bên ngoài.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-sci-reg4',
    title: 'KHTN 8 - Kiểm tra Thường xuyên 4: Hệ Cơ quan ở Người - Tuần hoàn & Hô hấp',
    titleEn: 'Science 8 - Regular Assessment 4: Human Organ Systems - Circulation & Respiration',
    grade: 8,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Cấu tạo tim và hệ mạch, 4 nhóm máu (A, B, AB, O), trao đổi khí ở phế nang phổi và bảo vệ hệ tuần hoàn hô hấp.',
    descriptionEn: 'Heart anatomy, circulatory circuits, ABO blood grouping, pulmonary alveoli, and cardiovascular wellness.',
    questions: [
      {
        question: 'Tế bào máu nào có nhiệm vụ chính là vận chuyển khí Oxi (O₂) từ phổi đến các mô tế bào trong cơ thể?',
        options: ['Hồng cầu (chứa huyết sắc tố Hemoglobin)', 'Bạch cầu', 'Tiểu cầu', 'Huyết tương'],
        answerIndex: 0,
        hint: 'Tế bào hình đĩa lõm hai mặt có màu đỏ.',
        explanation: 'Hồng cầu chứa hemoglobin kết hợp linh hoạt với O₂ để phân phối dưỡng khí đi khắp cơ thể.'
      },
      {
        question: 'Người có nhóm máu O có thể truyền máu cho những người có nhóm máu nào sau đây (theo nguyên tắc truyền máu an toàn)?',
        options: ['Cả 4 nhóm máu: A, B, AB và O (Người cho phổ thông)', 'Chỉ truyền được cho nhóm AB', 'Chỉ truyền được cho nhóm A', 'Không thể truyền cho ai'],
        answerIndex: 0,
        hint: 'Hồng cầu nhóm O không có kháng nguyên A và B.',
        explanation: 'Hồng cầu nhóm O không có kháng nguyên nên có thể truyền an toàn cho cả 4 nhóm máu.'
      },
      {
        question: 'Nơi diễn ra quá trình trao đổi khí trực tiếp giữa máu và không khí hít vào trong phổi là:',
        options: ['Các phế nang (túi phổi siêu nhỏ)', 'Thanh quản', 'Khí quản', 'Màng phổi'],
        answerIndex: 0,
        hint: 'Hàng trăm triệu túi khí li ti bao quanh bởi mạng lưới mao mạch dày đặc.',
        explanation: 'Phế nang có thành mỏng, là nơi O₂ khuếch tán vào máu và CO₂ khuếch tán ra ngoài để thở ra.'
      },
      {
        question: 'Thói quen nào sau đây giúp giữ gìn một trái tim khỏe mạnh và hệ tuần hoàn dẻo dai?',
        options: ['Tập thể dục thể thao đều đặn vừa sức, hạn chế ăn mỡ động vật và không hút thuốc lá', 'Thường xuyên thức khuya chơi game', 'Ăn nhiều đồ chiên rán mặn', 'Uống nhiều rượu bia nước ngọt có ga'],
        answerIndex: 0,
        hint: 'Lối sống lành mạnh vận động thể chất.',
        explanation: 'Vận động thể thao tăng cường cơ tim co bóp, chế độ ăn ít dầu mỡ phòng chống xơ vữa động mạch.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-sci-final',
    title: 'KHTN 8 - Đề Kiểm Tra Cuối Học Kỳ 2 (Vật lý, Hóa học & Sinh học Cơ thể Người)',
    titleEn: 'Natural Science 8 - Semester 2 Final Examination (Comprehensive)',
    grade: 8,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm học: Axit - bazơ - muối, lực đẩy Ác-si-mét, nhiệt lượng & truyền nhiệt, hệ tuần hoàn - hô hấp - bài tiết ở người.',
    descriptionEn: 'End-of-year comprehensive evaluation of acids-bases, fluid buoyancy, thermal physics, and human physiology.',
    questions: [
      {
        question: 'Một thỏi nhôm có thể tích 0.002 m³ được nhúng chìm hoàn toàn trong nước. Biết trọng lượng riêng của nước là d = 10000 N/m³. Lực đẩy Ác-si-mét tác dụng lên thỏi nhôm là:',
        options: ['20 N', '2 N', '200 N', '5 N'],
        answerIndex: 0,
        hint: 'F_A = d · V = 10000 · 0.002 = 20 N.',
        explanation: 'F_A = 10000 · 0.002 = 20 N.'
      },
      {
        question: 'Kim loại nào sau đây phản ứng được với dung dịch axit sunfuric loãng (H₂SO₄ loãng) giải phóng khí H₂?',
        options: ['Sắt (Fe)', 'Đồng (Cu)', 'Bạc (Ag)', 'Vàng (Au)'],
        answerIndex: 0,
        hint: 'Kim loại đứng trước Hiđro trong dãy hoạt động hóa học.',
        explanation: 'Fe đứng trước H trong dãy hoạt động nên đẩy được H ra khỏi axit: Fe + H₂SO₄ -> FeSO₄ + H₂↑. Cu, Ag, Au đứng sau H nên không phản ứng.'
      },
      {
        question: 'Tại sao xoong, nồi đun nấu thức ăn thường được làm bằng kim loại (nhôm, inox) nhưng quai xoong lại bọc nhựa hoặc gỗ?',
        options: ['Kim loại dẫn nhiệt tốt giúp nấu thức ăn nhanh chín, quai bọc nhựa/gỗ dẫn nhiệt kém để cầm không bị bỏng tay', 'Để làm cho xoong nồi nặng hơn', 'Để xoong nồi có nhiều màu sắc', 'Nhựa dẫn nhiệt nhanh hơn kim loại'],
        answerIndex: 0,
        hint: 'Ứng dụng tính dẫn nhiệt tốt và dẫn nhiệt kém của các vật liệu.',
        explanation: 'Kim loại dẫn nhiệt nhanh giúp tiết kiệm năng lượng, nhựa và gỗ cách nhiệt tốt bảo vệ tay người nấu.'
      },
      {
        question: 'Tiểu cầu trong máu có chức năng sinh học vô cùng quan trọng nào sau đây?',
        options: ['Tham gia vào quá trình đông máu giúp hàn gắn vết thương và cầm máu', 'Tiêu diệt vi khuẩn gây bệnh', 'Mang chất dinh dưỡng đi nuôi tế bào', 'Tạo ra màu đỏ của máu'],
        answerIndex: 0,
        hint: 'Hình thành cục máu đông khi bị thương chảy máu.',
        explanation: 'Khi mạch máu bị rách, tiểu cầu giải phóng chất làm đông máu tạo nút tiểu cầu cầm máu an toàn.'
      },
      {
        question: 'Nước thải công nghiệp chưa qua xử lý có tính axit mạnh (pH < 4) xả trực tiếp ra sông hồ sẽ gây ra hậu quả nào?',
        options: ['Làm chua nguồn nước, hủy diệt hệ sinh thái thủy sinh (cá tôm chết hàng loạt)', 'Làm cho cá tôm sinh sản nhanh hơn', 'Làm sạch lòng sông', 'Biến nước sông thành nước ngọt uống được ngay'],
        answerIndex: 0,
        hint: 'Ô nhiễm môi trường nước do axit hóa.',
        explanation: 'Nước chua axit phá hủy mang cá, tiêu diệt vi sinh vật và làm chết hàng loạt sinh vật thủy sinh.'
      },
      {
        question: 'Công thức tính nhiệt lượng thu vào để làm một vật nóng lên từ nhiệt độ t1 đến t2 là:',
        options: ['Q = m · c · (t2 - t1)', 'Q = m · c / (t2 - t1)', 'Q = m / (c · Δt)', 'Q = c · (t2 - t1)'],
        answerIndex: 0,
        hint: 'm là khối lượng (kg), c là nhiệt dung riêng (J/kg.K), (t2 - t1) là độ tăng nhiệt độ.',
        explanation: 'Q = m · c · Δt với c là nhiệt dung riêng của chất cấu tạo nên vật.'
      }
    ]
  }
];

