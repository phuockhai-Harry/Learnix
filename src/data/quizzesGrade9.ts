import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Grade 9 Curriculum Quizzes Database (Part 1)
 * Covers Toán học, Ngữ văn, Khoa học Tự nhiên for Grade 9 (Semesters 1 & 2)
 * Meets requirement: At least 4 Regular Assessments (15-min) + 1 Final Evaluation (60-min) per semester
 * Aligned with Vietnam Ministry of Education GDPT 2018 & National Grade 10 High School Entrance Exam Prep
 */
export const GRADE_9_PART1_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // GRADE 9 - TOÁN HỌC 9 - SEMESTER 1
  // =========================================================================
  {
    id: 'quiz-g9-s1-math-reg1',
    title: 'Toán 9 - Kiểm tra Thường xuyên 1: Phương trình & Hệ hai Phương trình Bậc nhất Hai ẩn',
    titleEn: 'Math 9 - Regular Assessment 1: Linear Equations & Systems of Two Variables',
    grade: 9,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Khái niệm hệ hai phương trình bậc nhất hai ẩn, phương pháp thế và phương pháp cộng đại số.',
    descriptionEn: 'Systems of 2-variable linear equations, substitution method and algebraic addition method.',
    questions: [
      {
        question: 'Cặp số nào sau đây là nghiệm của hệ phương trình: { x + y = 5; x - y = 1 }?',
        options: ['(3; 2)', '(2; 3)', '(4; 1)', '(5; 0)'],
        answerIndex: 0,
        hint: 'Cộng hai phương trình vế theo vế: 2x = 6 => x = 3; thay vào tìm y = 2.',
        explanation: 'Cộng 2 vế ta có 2x = 6 => x = 3, suy ra y = 5 - 3 = 2. Cặp nghiệm là (3; 2).'
      },
      {
        question: 'Phương trình nào sau đây là phương trình bậc nhất hai ẩn x và y?',
        options: ['2x - 3y = 7', 'x² + y = 4', 'xy = 5', '2x + 1/y = 3'],
        answerIndex: 0,
        hint: 'Dạng tổng quát ax + by = c với a, b không đồng thời bằng 0.',
        explanation: 'Phương trình 2x - 3y = 7 có bậc của cả x và y đều bằng 1 nên là phương trình bậc nhất hai ẩn.'
      },
      {
        question: 'Để giải hệ phương trình { 2x + 3y = 8; 2x - y = 4 } bằng phương pháp cộng đại số, ta thực hiện phép tính nào?',
        options: ['Trừ phương trình thứ nhất cho phương trình thứ hai vế theo vế để triệt tiêu biến x', 'Nhân hai phương trình với nhau', 'Chia phương trình thứ nhất cho phương trình thứ hai', 'Cộng cả hai phương trình với số 10'],
        answerIndex: 0,
        hint: 'Hai phương trình có cùng hệ số 2x của x nên trừ vế với vế sẽ triệt tiêu x.',
        explanation: 'Trừ vế theo vế: (2x - 2x) + (3y - (-y)) = 8 - 4 => 4y = 4 => y = 1.'
      },
      {
        question: 'Hệ phương trình bậc nhất hai ẩn ax + by = c và a\'x + b\'y = c\' có VÔ SỐ NGHIỆM khi và chỉ khi:',
        options: ['a/a\' = b/b\' = c/c\' (hai đường thẳng trùng nhau)', 'a/a\' = b/b\' ≠ c/c\'', 'a/a\' ≠ b/b\'', 'a = b = c = 1'],
        answerIndex: 0,
        hint: 'Hai đường thẳng biểu diễn tập nghiệm trùng khít lên nhau.',
        explanation: 'Khi các hệ số tỉ lệ đồng nhất a/a\' = b/b\' = c/c\', hai đường thẳng trùng nhau nên hệ có vô số nghiệm.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-math-reg2',
    title: 'Toán 9 - Kiểm tra Thường xuyên 2: Căn bậc Hai & Căn thức Bậc hai',
    titleEn: 'Math 9 - Regular Assessment 2: Square Roots & Radical Expressions',
    grade: 9,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Điều kiện xác định của căn thức √(A), hằng đẳng thức √(A²) = |A|, rút gọn biểu thức chứa căn.',
    descriptionEn: 'Domain conditions for radical expressions, identity √(A²) = |A|, and simplification.',
    questions: [
      {
        question: 'Căn thức bậc hai √(2x - 6) XÁC ĐỊNH (có nghĩa) khi và chỉ khi x thỏa mãn điều kiện nào?',
        options: ['x ≥ 3', 'x ≤ 3', 'x > 3', 'x ≠ 3'],
        answerIndex: 0,
        hint: 'Biểu thức dưới dấu căn phải không âm: 2x - 6 ≥ 0.',
        explanation: '2x - 6 ≥ 0 <=> 2x ≥ 6 <=> x ≥ 3.'
      },
      {
        question: 'Giá trị của biểu thức √( (3 - √11)² ) sau khi khai phương là:',
        options: ['√11 - 3', '3 - √11', '11 - 3', '3 + √11'],
        answerIndex: 0,
        hint: '√(A²) = |A|. Vì 3 = √9 < √11 nên 3 - √11 < 0 => |3 - √11| = √11 - 3.',
        explanation: 'Áp dụng hằng đẳng thức √(A²) = |A| = |3 - √11|. Do 3 < √11 nên kết quả là √11 - 3.'
      },
      {
        question: 'Rút gọn biểu thức A = √75 - √48 + √12 ta được kết quả là:',
        options: ['3√3', '√3', '5√3', '2√3'],
        answerIndex: 0,
        hint: '√75 = 5√3; √48 = 4√3; √12 = 2√3.',
        explanation: 'A = 5√3 - 4√3 + 2√3 = (5 - 4 + 2)√3 = 3√3.'
      },
      {
        question: 'Trục căn thức ở mẫu của biểu thức 2 / (√3 - 1) ta được kết quả thu gọn là:',
        options: ['√3 + 1', '√3 - 1', '2(√3 + 1)', '(√3 + 1) / 2'],
        answerIndex: 0,
        hint: 'Nhân cả tử và mẫu với lượng liên hợp (√3 + 1). Mẫu là (√3)² - 1² = 3 - 1 = 2.',
        explanation: '2(√3 + 1) / ((√3 - 1)(√3 + 1)) = 2(√3 + 1) / 2 = √3 + 1.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-math-reg3',
    title: 'Toán 9 - Kiểm tra Thường xuyên 3: Tỉ số Lượng giác của Góc nhọn & Hệ thức Lượng trong Tam giác vuông',
    titleEn: 'Math 9 - Regular Assessment 3: Trigonometric Ratios & Right Triangle Metrics',
    grade: 9,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Sin, cos, tan, cot trong tam giác vuông; hệ thức liên hệ giữa cạnh và đường cao; ứng dụng thực tế đo chiều cao.',
    descriptionEn: 'Trigonometric functions, metric relations in right triangles, and height measurement applications.',
    questions: [
      {
        question: 'Trong tam giác ABC vuông tại A có đường cao AH. Hệ thức lượng nào sau đây là ĐÚNG?',
        options: ['AH² = BH · CH', 'AH² = AB · AC', 'AB² = AH · BC', 'AH = BH · CH'],
        answerIndex: 0,
        hint: 'Bình phương đường cao ứng với cạnh huyền bằng tích hai hình chiếu của hai cạnh góc vuông.',
        explanation: 'Hệ thức lượng cơ bản trong tam giác vuông: AH² = BH · CH (h² = b\' · c\').'
      },
      {
        question: 'Cho tam giác ABC vuông tại A có AB = 6 cm, AC = 8 cm. Giá trị của sin B là bao nhiêu?',
        options: ['4/5 (0.8)', '3/5 (0.6)', '3/4 (0.75)', '4/3'],
        answerIndex: 0,
        hint: 'Cạnh huyền BC = √(6² + 8²) = 10 cm. sin B = đối / huyền = AC / BC.',
        explanation: 'BC = √(36 + 64) = 10 cm. sin B = AC / BC = 8 / 10 = 4/5 = 0.8.'
      },
      {
        question: 'Với mọi góc nhọn α, công thức lượng giác nào sau đây luôn luôn đúng?',
        options: ['sin²α + cos²α = 1', 'sin²α - cos²α = 1', 'tan α = cos α / sin α', 'tan α · cot α = 0'],
        answerIndex: 0,
        hint: 'Định lý Pythagore áp dụng cho vòng tròn lượng giác hoặc tam giác vuông.',
        explanation: 'Công thức cơ bản sin²α + cos²α = 1 luôn đúng với mọi góc nhọn α.'
      },
      {
        question: 'Một cái thang dài 4m dựng tựa vào tường tạo với mặt đất một góc 60°. Chiều cao thang chạm tường là bao nhiêu?',
        options: ['2√3 m (khoảng 3.46 m)', '2 m', '4√3 m', '3 m'],
        answerIndex: 0,
        hint: 'h = L · sin(60°) = 4 · (√3 / 2) = 2√3 m.',
        explanation: 'Chiều cao chạm tường h = 4 · sin 60° = 4 · (√3 / 2) = 2√3 m ≈ 3.46 m.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-math-reg4',
    title: 'Toán 9 - Kiểm tra Thường xuyên 4: Đường tròn & Vị trí Tương đối của Đường thẳng và Đường tròn',
    titleEn: 'Math 9 - Regular Assessment 4: Circles, Tangents & Mutual Positions',
    grade: 9,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Định nghĩa đường tròn, tính chất đối xứng, liên hệ đường kính và dây cung, tính chất hai tiếp tuyến cắt nhau.',
    descriptionEn: 'Circle properties, chords and diameters, tangent line properties and intersecting tangents.',
    questions: [
      {
        question: 'Cho đường tròn (O; R). Một đường thẳng d được gọi là TIẾP TUYẾN của đường tròn (O) khi và chỉ khi khoảng cách d từ O đến đường thẳng bằng:',
        options: ['d = R', 'd < R', 'd > R', 'd = 2R'],
        answerIndex: 0,
        hint: 'Tiếp tuyến chỉ cắt đường tròn tại duy nhất một điểm chung.',
        explanation: 'Đường thẳng d tiếp xúc với (O; R) khi khoảng cách từ tâm đến đường thẳng bằng đúng bán kính (d = R).'
      },
      {
        question: 'Đường kính vuông góc với một dây cung thì có tính chất hình học nào sau đây?',
        options: ['Đi qua trung điểm của dây cung ấy', 'Song song với dây cung ấy', 'Có độ dài gấp 3 lần dây cung', 'Tạo với dây cung một góc 45°'],
        answerIndex: 0,
        hint: 'Định lý cơ bản về đường kính và dây cung.',
        explanation: 'Trong một đường tròn, đường kính vuông góc với một dây thì đi qua trung điểm của dây ấy.'
      },
      {
        question: 'Từ điểm M nằm ngoài đường tròn (O), kẻ hai tiếp tuyến MA và MB (A, B là các tiếp điểm). Nhận định nào sau đây là ĐÚNG?',
        options: ['MA = MB và MO là tia phân giác của góc AMB', 'MA > MB', 'Tam giác MAB là tam giác tù', 'MO vuông góc với AB nhưng MA ≠ MB'],
        answerIndex: 0,
        hint: 'Tính chất của hai tiếp tuyến cắt nhau.',
        explanation: 'Theo định lý hai tiếp tuyến cắt nhau, khoảng cách từ M đến hai tiếp điểm bằng nhau (MA = MB) và tia MO là phân giác của góc AMB.'
      },
      {
        question: 'Tam giác ABC nội tiếp đường tròn đường kính BC có đặc điểm hình học gì đặc biệt?',
        options: ['Tam giác ABC vuông tại A', 'Tam giác ABC là tam giác đều', 'Tam giác ABC là tam giác cân tại B', 'Tam giác ABC là tam giác tù'],
        answerIndex: 0,
        hint: 'Góc nội tiếp chắn nửa đường tròn là góc vuông.',
        explanation: 'Góc BAC chắn nửa đường tròn đường kính BC nên góc BAC = 90°, do đó tam giác ABC vuông tại A.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-math-final',
    title: 'Toán 9 - Đề Kiểm Tra Cuối Học Kỳ 1 (Đề Chuẩn Cấu Trúc Thi Vào Lớp 10)',
    titleEn: 'Math 9 - Semester 1 Final Examination (Grade 10 Entrance Format)',
    grade: 9,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối kỳ 1: Rút gọn biểu thức chứa căn, hệ hai phương trình bậc nhất hai ẩn, hàm số bậc nhất y = ax + b, tam giác vuông và tiếp tuyến đường tròn.',
    descriptionEn: 'Semester 1 comprehensive final exam covering radicals, linear systems, linear functions, and circle geometry.',
    questions: [
      {
        question: 'Cho hàm số bậc nhất y = (m - 2)x + 3. Hàm số ĐỒNG BIẾN trên R khi và chỉ khi m thỏa mãn điều kiện nào?',
        options: ['m > 2', 'm < 2', 'm ≥ 2', 'm ≠ 2'],
        answerIndex: 0,
        hint: 'Hàm số bậc nhất y = ax + b đồng biến khi hệ số a > 0.',
        explanation: 'Hệ số a = m - 2. Hàm số đồng biến <=> a > 0 <=> m - 2 > 0 <=> m > 2.'
      },
      {
        question: 'Nghiệm của hệ phương trình { 3x + 2y = 11; x - 2y = 1 } là:',
        options: ['(3; 1)', '(1; 3)', '(2; 2)', '(4; -1)'],
        answerIndex: 0,
        hint: 'Cộng vế theo vế triệt tiêu y: 4x = 12 => x = 3; thay vào tìm y = 1.',
        explanation: 'Cộng hai vế: 4x = 12 => x = 3. Thay x = 3 vào phương trình thứ hai: 3 - 2y = 1 => 2y = 2 => y = 1. Nghiệm là (3; 1).'
      },
      {
        question: 'Rút gọn biểu thức P = (√x / (√x + 2) + 2 / (√x - 2)) : (x + 4) / (x - 4) với x ≥ 0, x ≠ 4 ta được kết quả:',
        options: ['1', '√x', '(√x + 2)', 'x - 4'],
        answerIndex: 0,
        hint: 'Quy đồng mẫu chung trong ngoặc là x - 4. Tử số thành (√x(√x - 2) + 2(√x + 2)) = x - 2√x + 2√x + 4 = x + 4.',
        explanation: 'Tử thức ngoặc thứ nhất là x + 4, mẫu thức là x - 4. Khi chia cho (x + 4)/(x - 4) ta được kết quả bằng 1.'
      },
      {
        question: 'Đường thẳng (d1): y = 2x - 5 và đường thẳng (d2): y = (m² - 2)x + 1 SONG SONG với nhau khi m bằng:',
        options: ['m = -2 (vì m = 2 làm d1 trùng d2 nếu tung độ gốc giống nhau)', 'm = ±2', 'm = 4', 'm = 0'],
        answerIndex: 1,
        hint: 'Hai đường thẳng song song khi a = a\' và b ≠ b\'. Ở đây -5 ≠ 1 luôn đúng, m² - 2 = 2 => m² = 4 => m = ±2.',
        explanation: 'Để hai đường thẳng song song: a = a\' và b ≠ b\'. Do -5 ≠ 1 nên ta chỉ cần m² - 2 = 2 <=> m² = 4 <=> m = ±2.'
      },
      {
        question: 'Cho đường tròn (O; 5 cm) và dây cung AB có độ dài 8 cm. Khoảng cách từ tâm O đến dây cung AB là:',
        options: ['3 cm', '4 cm', '√41 cm', '2.5 cm'],
        answerIndex: 0,
        hint: 'Kẻ OH vuông góc AB thì H là trung điểm AB => AH = 4 cm. Áp dụng định lý Pytago trong tam giác vuông OHA: OH = √(5² - 4²).',
        explanation: 'H là trung điểm AB => AH = 4 cm. OH = √(OA² - AH²) = √(5² - 4²) = √(25 - 16) = √9 = 3 cm.'
      },
      {
        question: 'Một người đứng cách chân tháp 50m nhìn lên đỉnh tháp dưới một góc nâng 45°. Giả sử mắt người cách mặt đất 1.6m. Chiều cao của tháp là:',
        options: ['51.6 m', '50 m', '48.4 m', '100 m'],
        answerIndex: 0,
        hint: 'h_tháp = d · tan(45°) + h_mắt = 50 · 1 + 1.6 = 51.6 m.',
        explanation: 'Chiều cao phần tháp từ tầm mắt trở lên = 50 · tan 45° = 50 · 1 = 50m. Cộng thêm chiều cao từ đất tới mắt 1.6m => Tổng chiều cao = 51.6m.'
      }
    ]
  },

  // =========================================================================
  // GRADE 9 - TOÁN HỌC 9 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g9-s2-math-reg1',
    title: 'Toán 9 - Kiểm tra Thường xuyên 1: Hàm số y = ax² & Phương trình Bậc hai Một ẩn',
    titleEn: 'Math 9 - Regular Assessment 1: Quadratic Functions y = ax² & Quadratic Equations',
    grade: 9,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Đồ thị parabol y = ax², tính chất biến thiên, công thức nghiệm biệt thức Δ = b² - 4ac của phương trình bậc hai.',
    descriptionEn: 'Parabola graphs y = ax², discriminant Δ = b² - 4ac, and root formulas.',
    questions: [
      {
        question: 'Biệt thức Δ (Delta) của phương trình bậc hai ax² + bx + c = 0 (a ≠ 0) được tính theo công thức nào?',
        options: ['Δ = b² - 4ac', 'Δ = b² - 2ac', 'Δ = b² + 4ac', 'Δ = 4ac - b²'],
        answerIndex: 0,
        hint: 'Công thức biệt thức chuẩn xác để xét số nghiệm.',
        explanation: 'Biệt thức delta là Δ = b² - 4ac. Nếu Δ > 0 phương trình có 2 nghiệm phân biệt, Δ = 0 có nghiệm kép, Δ < 0 vô nghiệm.'
      },
      {
        question: 'Phương trình bậc hai 2x² - 5x + 2 = 0 có biệt thức Δ bằng bao nhiêu?',
        options: ['9', '1', '25', '-7'],
        answerIndex: 0,
        hint: 'Δ = (-5)² - 4 · 2 · 2 = 25 - 16 = 9.',
        explanation: 'Δ = b² - 4ac = (-5)² - 4(2)(2) = 25 - 16 = 9 > 0. Phương trình có 2 nghiệm phân biệt.'
      },
      {
        question: 'Đồ thị của hàm số y = -2x² là một đường Parabol có đặc điểm hình học nào sau đây?',
        options: ['Nằm phía dưới trục hoành Ox, đỉnh O(0; 0) là điểm cao nhất', 'Nằm phía trên trục hoành Ox, đỉnh O(0; 0) là điểm thấp nhất', 'Là một đường thẳng đi qua gốc tọa độ', 'Là một đường tròn tâm O'],
        answerIndex: 0,
        hint: 'Hệ số a = -2 < 0 nên bề lõm quay xuống dưới.',
        explanation: 'Vì a = -2 < 0, parabol có bề lõm quay xuống dưới, nằm hoàn toàn phía dưới trục hoành (trừ gốc O) và đỉnh O là điểm cực đại.'
      },
      {
        question: 'Phương trình x² - 6x + 9 = 0 có tập nghiệm là:',
        options: ['x = 3 (nghiệm kép)', 'x = -3', 'x = 3 và x = -3', 'Vô nghiệm'],
        answerIndex: 0,
        hint: 'Hằng đẳng thức (x - 3)² = 0 hoặc Δ = 36 - 36 = 0.',
        explanation: 'Phương trình viết lại thành (x - 3)² = 0 <=> x = 3 (nghiệm kép).'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-math-reg2',
    title: 'Toán 9 - Kiểm tra Thường xuyên 2: Định lý Viète & Ứng dụng Giải Toán vào 10',
    titleEn: 'Math 9 - Regular Assessment 2: Vieta\'s Formulas & Symmetric Expressions',
    grade: 9,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Hệ thức Viète về tổng và tích nghiệm (S = x1 + x2, P = x1 · x2), tìm hai số biết tổng và tích, biểu thức đối xứng.',
    descriptionEn: 'Vieta theorem for roots sum and product, symmetric polynomials x1² + x2².',
    questions: [
      {
        question: 'Nếu x1 và x2 là hai nghiệm của phương trình ax² + bx + c = 0 (a ≠ 0) thì theo định lý Viète:',
        options: ['x1 + x2 = -b / a và x1 · x2 = c / a', 'x1 + x2 = b / a và x1 · x2 = -c / a', 'x1 + x2 = -b / (2a) và x1 · x2 = c / (2a)', 'x1 + x2 = c / a và x1 · x2 = b / a'],
        answerIndex: 0,
        hint: 'Tổng có dấu trừ (-b/a), tích giữ nguyên dấu (c/a).',
        explanation: 'Định lý Viète: S = x1 + x2 = -b/a và P = x1 · x2 = c/a.'
      },
      {
        question: 'Cho phương trình x² - 7x + 10 = 0 có hai nghiệm x1, x2. Giá trị của biểu thức A = x1² + x2² là:',
        options: ['29', '49', '39', '19'],
        answerIndex: 0,
        hint: 'A = (x1 + x2)² - 2x1x2 = 7² - 2(10) = 49 - 20 = 29.',
        explanation: 'Theo Viète: x1 + x2 = 7, x1 · x2 = 10. Do đó A = (x1 + x2)² - 2x1x2 = 7² - 2 · 10 = 49 - 20 = 29.'
      },
      {
        question: 'Hai số u và v có tổng S = u + v = 9 và tích P = u · v = 14 là nghiệm của phương trình nào?',
        options: ['t² - 9t + 14 = 0', 't² + 9t + 14 = 0', 't² - 14t + 9 = 0', 't² + 14t - 9 = 0'],
        answerIndex: 0,
        hint: 'Hai số có tổng S và tích P là nghiệm của phương trình: t² - St + P = 0.',
        explanation: 'Công thức lập phương trình bậc hai: t² - St + P = 0 <=> t² - 9t + 14 = 0. Hai nghiệm là 2 và 7.'
      },
      {
        question: 'Phương trình bậc hai ax² + bx + c = 0 có a - b + c = 0 thì phương trình luôn có một nghiệm x1 là:',
        options: ['x1 = -1 và x2 = -c / a', 'x1 = 1 và x2 = c / a', 'x1 = 0', 'x1 = -b / a'],
        answerIndex: 0,
        hint: 'Nhẩm nghiệm: thay x = -1 vào ta được a(-1)² + b(-1) + c = a - b + c = 0.',
        explanation: 'Trường hợp đặc biệt nhẩm nghiệm: nếu a - b + c = 0 thì phương trình có nghiệm x1 = -1 và x2 = -c/a.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-math-reg3',
    title: 'Toán 9 - Kiểm tra Thường xuyên 3: Góc với Đường tròn & Tứ giác Nội tiếp',
    titleEn: 'Math 9 - Regular Assessment 3: Angles in Circles & Cyclic Quadrilaterals',
    grade: 9,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Góc ở tâm, góc nội tiếp, góc tạo bởi tia tiếp tuyến và dây cung, dấu hiệu nhận biết tứ giác nội tiếp đường tròn.',
    descriptionEn: 'Central angles, inscribed angles, tangent-chord angles, and cyclic quadrilateral theorems.',
    questions: [
      {
        question: 'Số đo của GÓC NỘI TIẾP chắn một cung bằng bao nhiêu so với số đo của cung bị chắn?',
        options: ['Bằng nửa số đo của cung bị chắn', 'Bằng đúng số đo của cung bị chắn', 'Gấp đôi số đo của cung bị chắn', 'Bằng 90° trong mọi trường hợp'],
        answerIndex: 0,
        hint: 'Góc ở tâm bằng số đo cung; góc nội tiếp bằng 1/2 số đo cung.',
        explanation: 'Định lý góc nội tiếp: trong một đường tròn, số đo góc nội tiếp bằng nửa số đo cung bị chắn.'
      },
      {
        question: 'Điều kiện cần và đủ để một TỨ GIÁC lồi NỘI TIẾP được trong một đường tròn là gì?',
        options: ['Tổng số đo hai góc đối diện bằng 180°', 'Hai góc đối diện bằng nhau', 'Bốn cạnh của tứ giác bằng nhau', 'Hai đường chéo vuông góc với nhau'],
        answerIndex: 0,
        hint: 'Định lý tứ giác nội tiếp: ∠A + ∠C = 180° hoặc ∠B + ∠D = 180°.',
        explanation: 'Một tứ giác nội tiếp được đường tròn khi và chỉ khi tổng số đo hai góc đối diện của nó bằng 180°.'
      },
      {
        question: 'Cho tứ giác ABCD nội tiếp đường tròn (O). Biết góc A = 70°. Số đo của góc đối diện góc C là:',
        options: ['110°', '70°', '140°', '90°'],
        answerIndex: 0,
        hint: 'Góc C = 180° - góc A = 180° - 70° = 110°.',
        explanation: 'Vì ABCD nội tiếp nên ∠A + ∠C = 180° => ∠C = 180° - 70° = 110°.'
      },
      {
        question: 'Góc tạo bởi TIA TIẾP TUYẾN và DÂY CUNG có số đo bằng:',
        options: ['Nửa số đo của cung bị chắn (bằng góc nội tiếp cùng chắn cung đó)', 'Bằng số đo của cung bị chắn', 'Gấp đôi góc ở tâm', 'Luôn luôn bằng 45°'],
        answerIndex: 0,
        hint: 'Góc tiếp tuyến và dây cung cùng chắn cung AmB có số đo bằng góc nội tiếp chắn cung AmB.',
        explanation: 'Số đo góc tạo bởi tiếp tuyến và dây cung bằng một nửa số đo của cung bị chắn.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-math-reg4',
    title: 'Toán 9 - Kiểm tra Thường xuyên 4: Hình Trụ, Hình Nón, Hình Cầu & Thể tích Khối tròn xoay',
    titleEn: 'Math 9 - Regular Assessment 4: Cylinder, Cone, Sphere & Spatial Volumes',
    grade: 9,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Công thức diện tích xung quanh, toàn phần và thể tích của hình trụ, hình nón, hình cầu; bài toán thực tế lon sữa, quả bóng.',
    descriptionEn: 'Formulas for lateral/total surface area and volume of cylinders, cones, and spheres.',
    questions: [
      {
        question: 'Công thức tính THỂ TÍCH (V) của hình trụ có bán kính đáy r và chiều cao h là:',
        options: ['V = π · r² · h', 'V = (1/3) · π · r² · h', 'V = 2π · r · h', 'V = (4/3) · π · r³'],
        answerIndex: 0,
        hint: 'Thể tích hình trụ = Diện tích đáy x chiều cao = (πr²) · h.',
        explanation: 'Hình trụ có đáy là hình tròn diện tích S = πr² nên thể tích V = πr²h.'
      },
      {
        question: 'Một hình nón có bán kính đáy r = 3 cm và chiều cao h = 4 cm. Thể tích của khối nón đó là:',
        options: ['12π cm³', '36π cm³', '16π cm³', '48π cm³'],
        answerIndex: 0,
        hint: 'V = (1/3)πr²h = (1/3) · π · 3² · 4 = (1/3) · π · 9 · 4 = 12π cm³.',
        explanation: 'V_nón = (1/3)πr²h = (1/3) · π · 9 · 4 = 12π cm³.'
      },
      {
        question: 'Công thức tính THỂ TÍCH của hình cầu có bán kính R là:',
        options: ['V = (4/3) · π · R³', 'V = 4π · R²', 'V = (1/3) · π · R³', 'V = 2π · R³'],
        answerIndex: 0,
        hint: '4/3 pi R lập phương.',
        explanation: 'Thể tích khối cầu bán kính R được tính theo công thức V = (4/3)πR³. Diện tích mặt cầu là S = 4πR².'
      },
      {
        question: 'Một lon sữa đặc có dạng hình trụ với đường kính đáy 7 cm và chiều cao 8 cm. Diện tích xung quanh của lon sữa là:',
        options: ['56π cm²', '28π cm²', '112π cm²', '196π cm²'],
        answerIndex: 0,
        hint: 'S_xq = 2πrh = π · d · h = π · 7 · 8 = 56π cm².',
        explanation: 'S_xq = 2πrh = π · (2r) · h = π · d · h = π · 7 · 8 = 56π cm².'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-math-final',
    title: 'Toán 9 - Đề Kiểm Tra Cuối Học Kỳ 2 (Tổng Ôn Luyện Đề Thi Tuyển Sinh Vào Lớp 10 THPT)',
    titleEn: 'Math 9 - Semester 2 Final Examination (Grade 10 High School Entrance Master Test)',
    grade: 9,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm học lớp 9 chuẩn hóa cấu trúc Sở GD&ĐT: Phương trình bậc hai, hệ thức Viète, giải bài toán bằng cách lập phương trình, hình học tứ giác nội tiếp và hình học không gian.',
    descriptionEn: 'End-of-year master exam for Grade 10 entrance: Quadratics, Vieta applications, applied word problems, cyclic quadrilaterals, 3D solids.',
    questions: [
      {
        question: 'Hai vòi nước cùng chảy vào một bể cạn thì sau 4 giờ đầy bể. Nếu chảy riêng thì vòi 1 chảy đầy bể nhanh hơn vòi 2 là 6 giờ. Thời gian vòi 1 chảy riêng đầy bể là:',
        options: ['6 giờ', '12 giờ', '8 giờ', '10 giờ'],
        answerIndex: 0,
        hint: 'Gọi thời gian vòi 1 là x (h) thì vòi 2 là x + 6. Phương trình: 1/x + 1/(x+6) = 1/4 => x = 6.',
        explanation: '1/x + 1/(x+6) = 1/4 <=> (2x+6)/(x² + 6x) = 1/4 <=> x² + 6x = 8x + 24 <=> x² - 2x - 24 = 0 => (x-6)(x+4)=0 => x = 6 giờ.'
      },
      {
        question: 'Tìm tất cả giá trị của m để phương trình x² - 2(m + 1)x + m² + 3 = 0 có hai nghiệm phân biệt x1, x2:',
        options: ['m > 1', 'm < 1', 'm ≥ 1', 'm ≠ 1'],
        answerIndex: 0,
        hint: 'Δ\' = (m + 1)² - (m² + 3) = m² + 2m + 1 - m² - 3 = 2m - 2 > 0 => 2m > 2 => m > 1.',
        explanation: 'Biệt thức thu gọn Δ\' = b\'² - ac = (m + 1)² - (m² + 3) = 2m - 2. Để có 2 nghiệm phân biệt thì Δ\' > 0 <=> 2m - 2 > 0 <=> m > 1.'
      },
      {
        question: 'Cho tam giác nhọn ABC nội tiếp đường tròn (O; R). Các đường cao AD, BE, CF cắt nhau tại trực tâm H. Tứ giác nào sau đây là TỨ GIÁC NỘI TIẾP?',
        options: ['Tứ giác BFHD và tứ giác CDHE', 'Chỉ có tứ giác ABC', 'Tứ giác ABDE', 'Không có tứ giác nào nội tiếp'],
        answerIndex: 0,
        hint: '∠BDH = 90° và ∠BFH = 90° => ∠BDH + ∠BFH = 180° nên BFHD nội tiếp.',
        explanation: 'Tứ giác BFHD có hai góc đối diện tại D và F đều vuông (tổng bằng 180°) nên BFHD là tứ giác nội tiếp đường tròn đường kính BH.'
      },
      {
        question: 'Một quả bóng đá tiêu chuẩn số 5 có chu vi đường xích đạo là 68.5 cm. Thể tích không khí xấp xỉ bên trong quả bóng gần nhất với giá trị nào?',
        options: ['5570 cm³ (khoảng 5.57 lít)', '1200 cm³', '10000 cm³', '2500 cm³'],
        answerIndex: 0,
        hint: 'Chu vi C = 2πR = 68.5 => R ≈ 10.9 cm. Thể tích V = (4/3)πR³ ≈ (4/3) · 3.14 · (10.9)³ ≈ 5570 cm³.',
        explanation: 'Bán kính quả bóng R = 68.5 / (2π) ≈ 10.9 cm. Thể tích V = (4/3)πR³ ≈ (4/3) · π · 10.9³ ≈ 5570 cm³.'
      },
      {
        question: 'Tọa độ giao điểm của parabol (P): y = x² và đường thẳng (d): y = 2x + 3 là:',
        options: ['(3; 9) và (-1; 1)', '(1; 1) và (-3; 9)', '(2; 4) và (3; 9)', '(0; 3) và (-1; 1)'],
        answerIndex: 0,
        hint: 'Phương trình hoành độ giao điểm: x² = 2x + 3 <=> x² - 2x - 3 = 0 <=> (x - 3)(x + 1) = 0.',
        explanation: 'x² - 2x - 3 = 0 => x = 3 (y = 9) hoặc x = -1 (y = 1). Hai giao điểm là (3; 9) và (-1; 1).'
      },
      {
        question: 'Giá trị nhỏ nhất của biểu thức A = x - 2√x + 5 (với x ≥ 0) là:',
        options: ['4 (khi x = 1)', '5 (khi x = 0)', '0', '1'],
        answerIndex: 0,
        hint: 'A = (√x - 1)² + 4 ≥ 4. Đẳng thức xảy ra khi √x = 1 <=> x = 1.',
        explanation: 'A = (√x)² - 2√x + 1 + 4 = (√x - 1)² + 4. Do (√x - 1)² ≥ 0 với mọi x ≥ 0 nên A ≥ 4. Min A = 4 khi x = 1.'
      }
    ]
  }
];
