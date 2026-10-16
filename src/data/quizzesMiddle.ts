import { CurriculumQuiz } from './curriculumData';
import { GRADE_6_QUIZZES } from './quizzesGrade6';
import { GRADE_6_REGULAR_QUIZZES } from './quizzesRegularGrade6';
import { ADDITIONAL_GRADE_6_REGULAR_QUIZZES } from './quizzesRegularGrade6Part2';
import { ADDITIONAL_GRADE_6_REGULAR_QUIZZES_PART3 } from './quizzesRegularGrade6Part3';
import { GRADE_6_FINAL_QUIZZES } from './quizzesFinalGrade6';
import { GRADE_7_FULL_QUIZZES } from './quizzesGrade7';
import { GRADE_8_FULL_QUIZZES } from './quizzesGrade8';
import { GRADE_8_PART2_QUIZZES } from './quizzesGrade8Part2';
import { GRADE_8_PART3_QUIZZES } from './quizzesGrade8Part3';
import { GRADE_9_PART1_QUIZZES } from './quizzesGrade9';
import { GRADE_9_LIT_SCI_QUIZZES } from './quizzesGrade9LitSci';
import { GRADE_9_LIT_SCI_PART2_QUIZZES } from './quizzesGrade9LitSciPart2';
import { GRADE_9_ENG_HIS_INFO_QUIZZES } from './quizzesGrade9EngHisInfo';

/**
 * Authentic Quizzes for Middle School (THCS: Lớp 6 - 9)
 * Based on Ministry of Education GDPT 2018 Textbooks (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */
export const MIDDLE_QUIZZES: CurriculumQuiz[] = [
  // ==========================================
  // GRADE 6 - LỚP 6 (FINAL, MIDTERM & REGULAR ASSESSMENTS)
  // ==========================================
  ...GRADE_6_QUIZZES,
  ...GRADE_6_REGULAR_QUIZZES,
  ...ADDITIONAL_GRADE_6_REGULAR_QUIZZES,
  ...ADDITIONAL_GRADE_6_REGULAR_QUIZZES_PART3,
  ...GRADE_6_FINAL_QUIZZES,

  // ==========================================
  // GRADE 7 - LỚP 7 (FULL REGULAR, MIDTERM & FINAL EXAMS)
  // ==========================================
  ...GRADE_7_FULL_QUIZZES,

  // ==========================================
  // GRADE 8 - LỚP 8 (FULL REGULAR & FINAL EXAMS)
  // ==========================================
  ...GRADE_8_FULL_QUIZZES,
  ...GRADE_8_PART2_QUIZZES,
  ...GRADE_8_PART3_QUIZZES,

  // ==========================================
  // GRADE 9 - LỚP 9 (FULL REGULAR & FINAL EXAMS - GRADE 10 PREP)
  // ==========================================
  ...GRADE_9_PART1_QUIZZES,
  ...GRADE_9_LIT_SCI_QUIZZES,
  ...GRADE_9_LIT_SCI_PART2_QUIZZES,
  ...GRADE_9_ENG_HIS_INFO_QUIZZES,
  {
    id: 'quiz-g7-s1-math-rationals-reals',
    title: 'Toán 7 - HK1: Số Hữu tỉ, Số Thực & Góc ở Vị trí Đặc biệt',
    titleEn: 'Math 7 - Sem 1: Rational & Real Numbers, Special Angle Pairs',
    grade: 7,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 115,
    description: 'Số hữu tỉ Q, số vô tỉ, số thực R; căn bậc hai số học; hai góc so le trong, đồng vị, trong cùng phía của hai đường thẳng song song.',
    descriptionEn: 'Rational and real numbers, square roots, alternate interior and corresponding angle relationships.',
    questions: [
      {
        question: 'Căn bậc hai số học của số 49 là bao nhiêu?',
        options: ['7', '-7', '±7', '14'],
        answerIndex: 0,
        hint: 'Căn bậc hai số học của một số không âm a là số không âm x sao cho x² = a (√a ≥ 0).',
        explanation: '√49 = 7 (vì 7 > 0 và 7² = 49).'
      },
      {
        question: 'Cho hai đường thẳng a và b song song với nhau. Hai góc so le trong tạo bởi một cát tuyến cắt cả a và b có quan hệ gì?',
        options: ['Bằng nhau', 'Bù nhau (tổng bằng 180°)', 'Phụ nhau (tổng bằng 90°)', 'Gấp đôi nhau'],
        answerIndex: 0,
        hint: 'Định lý về hai đường thẳng song song.',
        explanation: 'Nếu hai đường thẳng song song bị cắt bởi một đường thẳng thứ ba thì hai góc so le trong bằng nhau.'
      },
      {
        question: 'Số thập phân vô hạn không tuần hoàn được gọi là số gì?',
        options: ['Số vô tỉ (I)', 'Số hữu tỉ (Q)', 'Số tự nhiên (N)', 'Số nguyên (Z)'],
        answerIndex: 0,
        hint: 'Ví dụ tiêu biểu: số π = 3.14159265..., √2 = 1.4142135...',
        explanation: 'Số thập phân vô hạn không tuần hoàn là số vô tỉ ký hiệu I. Tập hợp số vô tỉ cùng với số hữu tỉ tạo thành tập hợp số thực R.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-science-speed-periodic-table',
    title: 'Khoa học Tự nhiên 7 - HK1: Tốc độ Chuyển động & Bảng Tuần hoàn',
    titleEn: 'Natural Science 7 - Sem 1: Speed Kinematics & Periodic Table Elements',
    grade: 7,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Công thức tốc độ v = s/t, đồ thị quãng đường - thời gian; nguyên tử, phân tử, nguyên tố hóa học trong bảng Men-đê-lê-ép.',
    descriptionEn: 'Kinematic speed calculations, distance-time graphs, atomic structures and periodic table periods/groups.',
    questions: [
      {
        question: 'Một vận động viên bơi lội bơi quãng đường 100m hết thời gian 50 giây. Tốc độ bơi trung bình của vận động viên là:',
        options: ['2 m/s', '0.5 m/s', '5 m/s', '4 m/s'],
        answerIndex: 0,
        hint: 'Công thức tính tốc độ: v = s / t.',
        explanation: 'v = 100 / 50 = 2 (m/s).'
      },
      {
        question: 'Trong bảng tuần hoàn, các nguyên tố trong cùng một chu kỳ có đặc điểm chung nào về cấu tạo nguyên tử?',
        options: ['Có cùng số lớp electron', 'Có cùng số electron ở lớp ngoài cùng', 'Có cùng khối lượng nguyên tử', 'Có cùng tính kim loại'],
        answerIndex: 0,
        hint: 'Chu kỳ là dãy các nguyên tố xếp theo hàng ngang.',
        explanation: 'Số thứ tự của chu kỳ bằng đúng số lớp electron trong vỏ nguyên tử của các nguyên tố trong chu kỳ đó.'
      },
      {
        question: 'Ký hiệu hóa học của nguyên tố kim loại Sắt (Iron) là gì?',
        options: ['Fe', 'Cu', 'Al', 'Zn'],
        answerIndex: 0,
        hint: 'Bắt nguồn từ tiếng Latinh Ferrum.',
        explanation: 'Sắt có ký hiệu hóa học là Fe (Ferrum), số nguyên tử 26.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-math-congruent-triangles',
    title: 'Toán 7 - HK2: Tam giác Bằng nhau & Tỉ lệ thức, Đại lượng Tỉ lệ',
    titleEn: 'Math 7 - Sem 2: Triangle Congruence (SSS, SAS, ASA) & Proportions',
    grade: 7,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 18,
    xpReward: 125,
    description: '3 trường hợp bằng nhau của tam giác (c.c.c, c.g.c, g.c.g), tính chất đường trung trực, tỉ lệ thức a/b = c/d.',
    descriptionEn: 'Triangle congruence criteria, perpendicular bisectors, properties of proportions.',
    questions: [
      {
        question: 'Từ tỉ lệ thức a/b = c/d (với b, d ≠ 0), ta có tính chất nhân chéo nào sau đây?',
        options: ['a . d = b . c', 'a . b = c . d', 'a . c = b . d', 'a + d = b + c'],
        answerIndex: 0,
        hint: 'Tích ngoại tỉ bằng tích trung tỉ.',
        explanation: 'Tính chất cơ bản của tỉ lệ thức: Nếu a/b = c/d thì a.d = b.c.'
      },
      {
        question: 'Để hai tam giác ABC và DEF bằng nhau theo trường hợp cạnh - góc - cạnh (c-g-c), góc bằng nhau phải thỏa mãn điều kiện gì?',
        options: ['Góc phải là góc xen giữa hai cạnh tương ứng bằng nhau', 'Góc bất kỳ đối diện với một cạnh', 'Cả hai tam giác phải có góc vuông', 'Góc lớn nhất trong tam giác'],
        answerIndex: 0,
        hint: 'Cạnh - góc xen giữa - cạnh.',
        explanation: 'Trường hợp c-g-c đòi hỏi góc phải xen giữa hai cạnh tương ứng bằng nhau của hai tam giác.'
      },
      {
        question: 'Tập hợp các điểm cách đều hai đầu mút của một đoạn thẳng AB là đường gì?',
        options: ['Đường trung trực của đoạn thẳng AB', 'Đường phân giác', 'Đường trung tuyến', 'Đường cao'],
        answerIndex: 0,
        hint: 'Đường thẳng vuông góc với đoạn thẳng tại trung điểm của nó.',
        explanation: 'Đường trung trực của một đoạn thẳng là tập hợp tất cả các điểm cách đều hai mút của đoạn thẳng đó.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-history-geo-dai-viet',
    title: 'Lịch sử & Địa lý 7 - HK2: Nước Đại Việt thời Lý - Trần & Địa lý Châu Á',
    titleEn: 'History & Geography 7 - Sem 2: Dai Viet Feudal Eras & Asian Geography',
    grade: 7,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 115,
    description: 'Chiến thắng trên sông Như Nguyệt (Lý Thường Kiệt), ba lần kháng chiến chống quân Nguyên Mông; khí hậu và các khu vực địa lý châu Á.',
    descriptionEn: 'Battle of Nhu Nguyet River, anti-Mongol campaigns, and Asian physiography.',
    questions: [
      {
        question: 'Bài thơ "Nam quốc sơn hà" vang lên trên phòng tuyến sông Như Nguyệt gắn liền với tên tuổi của vị danh tướng nào?',
        options: ['Lý Thường Kiệt', 'Trần Hưng Đạo', 'Quang Trung', 'Lê Lợi'],
        answerIndex: 0,
        hint: 'Người chỉ huy cuộc kháng chiến chống quân Tống xâm lược năm 1077.',
        explanation: 'Lý Thường Kiệt đã cho ngâm bài thơ "Nam quốc sơn hà" (bản Tuyên ngôn độc lập đầu tiên) khích lệ sĩ khí quân dân đại thắng giặc Tống.'
      },
      {
        question: 'Vị tướng kiệt xuất chỉ huy quân đội Đại Việt đại thắng quân Nguyên Mông trên sông Bạch Đằng năm 1288 là ai?',
        options: ['Trần Hưng Đạo (Trần Quốc Tuấn)', 'Trần Quang Khải', 'Trần Thủ Độ', 'Trần Khánh Dư'],
        answerIndex: 0,
        hint: 'Tác giả "Hịch tướng sĩ", được nhân dân tôn làm Đức Thánh Trần.',
        explanation: 'Quốc công Tiết chế Hưng Đạo Đại Vương Trần Quốc Tuấn đã lãnh đạo trận Bạch Đằng năm 1288 đập tan hoàn toàn đoàn thuyền chiến giặc Nguyên.'
      },
      {
        question: 'Châu Á là châu lục có diện tích như thế nào so với các châu lục khác trên thế giới?',
        options: ['Rộng lớn nhất thế giới', 'Nhỏ nhất thế giới', 'Đứng thứ hai sau châu Phi', 'Đứng thứ ba sau châu Mỹ'],
        answerIndex: 0,
        hint: 'Diện tích phần đất liền và hải đảo khoảng 44.4 triệu km².',
        explanation: 'Châu Á là châu lục có diện tích rộng lớn nhất và dân số đông nhất trên Trái Đất.'
      }
    ]
  },

  // ==========================================
  // GRADE 8 - LỚP 8
  // ==========================================
  {
    id: 'quiz-g8-s1-math-algebra-identities',
    title: 'Toán 8 - HK1: 7 Hằng đẳng thức đáng nhớ & Tứ giác Hình học',
    titleEn: 'Math 8 - Sem 1: 7 Notable Algebraic Identities & Quadrilaterals',
    grade: 8,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 18,
    xpReward: 135,
    description: 'Thành thạo 7 hằng đẳng thức đáng nhớ, phân tích đa thức thành nhân tử; dấu hiệu nhận biết hình bình hành, hình chữ nhật, hình thoi, hình vuông.',
    descriptionEn: 'Master the 7 polynomial identities, factoring, and quadrilateral properties and proofs.',
    questions: [
      {
        question: 'Khai triển hằng đẳng thức (a - b)³ ta được kết quả nào?',
        options: ['a³ - 3a²b + 3ab² - b³', 'a³ - 3a²b - 3ab² - b³', 'a³ - b³', 'a³ - a²b + ab² - b³'],
        answerIndex: 0,
        hint: 'Lập phương của một hiệu: a³ - 3a²b + 3ab² - b³.',
        explanation: '(a - b)³ = a³ - 3a²b + 3ab² - b³.'
      },
      {
        question: 'Hình chữ nhật có hai đường chéo vuông góc với nhau là hình gì?',
        options: ['Hình vuông', 'Hình thoi', 'Hình thang cân', 'Hình bình hành'],
        answerIndex: 0,
        hint: 'Hình chữ nhật có thêm tính chất của hình thoi (2 đường chéo vuông góc).',
        explanation: 'Dấu hiệu nhận biết: Hình chữ nhật có hai đường chéo vuông góc là hình vuông.'
      },
      {
        question: 'Phân tích đa thức x² - 9 thành nhân tử:',
        options: ['(x - 3)(x + 3)', '(x - 9)(x + 1)', '(x - 3)²', '(x + 3)²'],
        answerIndex: 0,
        hint: 'Áp dụng hiệu hai bình phương: A² - B² = (A - B)(A + B).',
        explanation: 'x² - 9 = x² - 3² = (x - 3)(x + 3).'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-science-reactions-pressure',
    title: 'Khoa học Tự nhiên 8 - HK1: Mol, Phản ứng Hóa học & Áp suất Chất lỏng',
    titleEn: 'Natural Science 8 - Sem 1: Moles, Chemical Stoichiometry & Liquid Pressure',
    grade: 8,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 18,
    xpReward: 135,
    description: 'Định luật bảo toàn khối lượng, mol n = m/M, thể tích khí đo ở điều kiện chuẩn V = n x 24.79 lít; áp suất p = F/S và áp suất chất lỏng p = d x h.',
    descriptionEn: 'Stoichiometry, mole calculations, molar volume at STP, and fluid pressure physics.',
    questions: [
      {
        question: 'Số mol của 8 gam khí Oxy (O₂, phân tử khối M = 32 g/mol) là bao nhiêu?',
        options: ['0.25 mol', '0.5 mol', '2 mol', '4 mol'],
        answerIndex: 0,
        hint: 'Công thức tính số mol: n = m / M = 8 / 32.',
        explanation: 'n = 8 / 32 = 0.25 mol.'
      },
      {
        question: 'Áp suất chất lỏng tại một điểm ở độ sâu h trong lòng chất lỏng phụ thuộc vào những yếu tố nào?',
        options: ['Trọng lượng riêng của chất lỏng (d) và độ sâu tính từ mặt thoáng (h)', 'Diện tích đáy bình chứa', 'Hình dạng bình chứa', 'Khối lượng của bình chứa'],
        answerIndex: 0,
        hint: 'Công thức tính áp suất thủy tĩnh: p = d . h.',
        explanation: 'Áp suất chất lỏng chỉ phụ thuộc vào trọng lượng riêng của chất lỏng d và độ sâu h tính từ mặt thoáng (p = d.h).'
      },
      {
        question: 'Khi đốt cháy hoàn toàn 6 gam cacbon (C) trong khí oxi tạo thành 22 gam khí cacbonic (CO₂). Khối lượng khí oxi đã tham gia phản ứng là:',
        options: ['16 gam', '28 gam', '12 gam', '18 gam'],
        answerIndex: 0,
        hint: 'Áp dụng định luật bảo toàn khối lượng: m(C) + m(O₂) = m(CO₂).',
        explanation: 'm(O₂) = m(CO₂) - m(C) = 22 - 6 = 16 gam.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-math-thales-fractions',
    title: 'Toán 8 - HK2: Phân thức Đại số & Định lý Talet, Tam giác Đồng dạng',
    titleEn: 'Math 8 - Sem 2: Rational Expressions & Thales Theorem, Similar Triangles',
    grade: 8,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 18,
    xpReward: 140,
    description: 'Quy đồng phân thức đại số, phép nhân chia phân thức; định lý Talet thuận và đảo, 3 trường hợp đồng dạng của tam giác.',
    descriptionEn: 'Rational algebraic expressions, Thales parallel proportions, similar triangle criteria.',
    questions: [
      {
        question: 'Định lý Talet phát biểu: Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó:',
        options: ['Định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ', 'Chia tam giác thành hai phần có diện tích bằng nhau', 'Tạo ra hai tam giác bằng nhau', 'Luôn đi qua trọng tâm tam giác'],
        answerIndex: 0,
        hint: 'Định ra các đoạn tỉ lệ: AM/AB = AN/AC.',
        explanation: 'Định lý Talet: Một đường thẳng song song với một cạnh của tam giác định ra trên hai cạnh kia những đoạn thẳng tương ứng tỉ lệ.'
      },
      {
        question: 'Điều kiện xác định của phân thức đại số (2x + 1) / (x - 3) là:',
        options: ['x ≠ 3', 'x ≠ -3', 'x ≠ -1/2', 'x > 3'],
        answerIndex: 0,
        hint: 'Mẫu thức phải khác 0: x - 3 ≠ 0.',
        explanation: 'Phân thức xác định khi và chỉ khi mẫu thức khác 0: x - 3 ≠ 0 <=> x ≠ 3.'
      },
      {
        question: 'Nếu tam giác ABC đồng dạng với tam giác A\'B\'C\' theo tỉ số đồng dạng k = 2 thì tỉ số diện tích S(ABC) / S(A\'B\'C\') bằng bao nhiêu?',
        options: ['4 (k²)', '2', '8', '1/2'],
        answerIndex: 0,
        hint: 'Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng k².',
        explanation: 'S / S\' = k² = 2² = 4.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-english-passive-voice',
    title: 'Tiếng Anh 8 - HK2: Passive Voice & Technology Vocabulary',
    titleEn: 'English 8 - Sem 2: Passive Voice & Future Technology',
    grade: 8,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 125,
    description: 'Chuyển đổi câu chủ động sang câu bị động (Passive voice) ở thì hiện tại đơn, quá khứ đơn, hiện tại hoàn thành; từ vựng về công nghệ và môi trường.',
    descriptionEn: 'Passive voice transformation across tenses, green living and IT vocabulary.',
    questions: [
      {
        question: 'Chuyển sang thể bị động: "Alexander Graham Bell invented the telephone in 1876."',
        options: [
          'The telephone was invented by Alexander Graham Bell in 1876.',
          'The telephone is invented by Alexander Graham Bell in 1876.',
          'The telephone were invented by Alexander Graham Bell in 1876.',
          'The telephone has been invented by Alexander Graham Bell in 1876.'
        ],
        answerIndex: 0,
        hint: 'Thì quá khứ đơn bị động: S + was/were + V3/ed + by O.',
        explanation: 'The telephone là danh từ số ít, ở thì quá khứ đơn nên dùng was invented.'
      },
      {
        question: 'Chọn từ thích hợp: "Solar panels are used to convert sunlight ... electricity."',
        options: ['into', 'at', 'with', 'on'],
        answerIndex: 0,
        hint: 'Cụm từ "convert something into something": chuyển đổi cái gì thành cái gì.',
        explanation: 'Cụm động từ: convert into (chuyển đổi thành).'
      },
      {
        question: 'Điền dạng bị động của động từ: "This bridge ... (build) two years ago."',
        options: ['was built', 'is built', 'built', 'has been built'],
        answerIndex: 0,
        hint: 'Dấu hiệu thời gian: "two years ago" (quá khứ đơn), chủ ngữ là cây cầu.',
        explanation: 'Chủ ngữ số ít ở quá khứ: was built.'
      }
    ]
  },

  // ==========================================
  // GRADE 9 - LỚP 9
  // ==========================================
  {
    id: 'quiz-g9-s1-math-radicals-linear-systems',
    title: 'Toán 9 - HK1: Căn bậc hai & Hệ phương trình bậc nhất hai ẩn',
    titleEn: 'Math 9 - Sem 1: Square Roots, Radicals & 2-Variable Linear Systems',
    grade: 9,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 150,
    description: 'Rút gọn biểu thức chứa căn, trục căn thức ở mẫu, giải hệ 2 phương trình bậc nhất bằng phương pháp thế và cộng đại số.',
    descriptionEn: 'Radical simplification, rationalizing denominators, solving linear systems by substitution and elimination.',
    questions: [
      {
        question: 'Rút gọn biểu thức A = √(12) - √(27) + √(75) ta được:',
        options: ['4√3', '2√3', '5√3', '3√3'],
        answerIndex: 0,
        hint: 'Đưa thừa số ra ngoài dấu căn: √12 = 2√3; √27 = 3√3; √75 = 5√3.',
        explanation: 'A = 2√3 - 3√3 + 5√3 = (2 - 3 + 5)√3 = 4√3.'
      },
      {
        question: 'Nghiệm (x; y) của hệ phương trình: { 2x + y = 7 ; x - y = 2 } là:',
        options: ['(3; 1)', '(1; 5)', '(4; 2)', '(2; 3)'],
        answerIndex: 0,
        hint: 'Cộng hai phương trình vế theo vế: 3x = 9 => x = 3. Thay vào: y = x - 2 = 1.',
        explanation: 'Cộng hai phương trình: (2x+y) + (x-y) = 7 + 2 <=> 3x = 9 <=> x = 3. Khi đó y = 3 - 2 = 1. Nghiệm là (3; 1).'
      },
      {
        question: 'Biểu thức √(2x - 6) có nghĩa (xác định) khi và chỉ khi:',
        options: ['x ≥ 3', 'x > 3', 'x ≤ 3', 'x ≠ 3'],
        answerIndex: 0,
        hint: 'Biểu thức dưới dấu căn bậc hai phải không âm: 2x - 6 ≥ 0.',
        explanation: '2x - 6 ≥ 0 <=> 2x ≥ 6 <=> x ≥ 3.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-science-inorganic-optics',
    title: 'Khoa học Tự nhiên 9 - HK1: Axit - Bazơ - Muối & Thấu kính Quang học',
    titleEn: 'Natural Science 9 - Sem 1: Inorganic Chemistry & Optical Lenses',
    grade: 9,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 150,
    description: 'Dãy hoạt động hóa học của kim loại, nhận biết axit bazơ bằng quỳ tím, phản ứng trao đổi; thấu kính hội tụ và phân kỳ.',
    descriptionEn: 'Metal activity series, acid/base indicators, double displacement reactions, converging and diverging lenses.',
    questions: [
      {
        question: 'Khi nhỏ vài giọt dung dịch axit clohiđric (HCl) vào mẩu giấy quỳ tím, quỳ tím chuyển sang màu gì?',
        options: ['Màu đỏ', 'Màu xanh', 'Màu hồng', 'Mất màu'],
        answerIndex: 0,
        hint: 'Axit làm quỳ tím hóa đỏ, dung dịch kiềm làm quỳ tím hóa xanh.',
        explanation: 'Dung dịch axit có tính axit làm quỳ tím chuyển sang màu đỏ đặc trưng.'
      },
      {
        question: 'Kim loại nào sau đây phản ứng mãnh liệt với nước ở nhiệt độ thường giải phóng khí hiđro (H₂)?',
        options: ['Natri (Na)', 'Đồng (Cu)', 'Sắt (Fe)', 'Bạc (Ag)'],
        answerIndex: 0,
        hint: 'Kim loại kiềm thuộc nhóm IA có tính khử rất mạnh.',
        explanation: '2Na + 2H₂O -> 2NaOH + H₂↑. Natri phản ứng rất mạnh với nước ngay nhiệt độ thường.'
      },
      {
        question: 'Một vật sáng đặt vuông góc với trục chính của thấu kính hội tụ, nằm NGOÀI khoảng tiêu cự (d > f) cho ảnh như thế nào?',
        options: ['Ảnh thật, ngược chiều với vật', 'Ảnh ảo, cùng chiều với vật', 'Ảnh thật, cùng chiều với vật', 'Không cho ảnh'],
        answerIndex: 0,
        hint: 'Khi d > f qua thấu kính hội tụ luôn thu được ảnh hứng được trên màn (ảnh thật).',
        explanation: 'Vật đặt ngoài khoảng tiêu cự của thấu kính hội tụ luôn cho ảnh thật và ngược chiều với vật.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-math-vieta-circles-exam',
    title: 'Toán 9 - HK2: Phương trình Bậc hai, Định lý Vi-ét & Góc với Đường tròn',
    titleEn: 'Math 9 - Sem 2: Quadratic Equations, Vieta Theorem & Inscribed Angles',
    grade: 9,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 22,
    xpReward: 160,
    description: 'Công thức nghiệm biệt thức Δ = b² - 4ac, định lý Vi-ét (x1 + x2 = -b/a, x1.x2 = c/a), góc nội tiếp, tứ giác nội tiếp ôn thi vào 10.',
    descriptionEn: 'Quadratic formula discriminant, Vieta formulas, inscribed angles, cyclic quadrilaterals for high school entrance.',
    questions: [
      {
        question: 'Cho phương trình bậc hai x² - 5x + 6 = 0. Tổng (S) và tích (P) hai nghiệm của phương trình theo định lý Vi-ét là:',
        options: ['S = 5 ; P = 6', 'S = -5 ; P = 6', 'S = 5 ; P = -6', 'S = -5 ; P = -6'],
        answerIndex: 0,
        hint: 'Định lý Vi-ét: S = x1 + x2 = -b/a = -(-5)/1 = 5; P = x1.x2 = c/a = 6/1 = 6.',
        explanation: 'a = 1, b = -5, c = 6. Áp dụng Vi-ét: S = -b/a = 5 và P = c/a = 6.'
      },
      {
        question: 'Góc nội tiếp chắn nửa đường tròn luôn có số đo bằng bao nhiêu độ?',
        options: ['90° (góc vuông)', '180°', '60°', '45°'],
        answerIndex: 0,
        hint: 'Số đo góc nội tiếp bằng nửa số đo cung bị chắn (nửa đường tròn là 180°).',
        explanation: 'Số đo góc nội tiếp bằng 1/2 số đo cung nửa đường tròn = 180° / 2 = 90°.'
      },
      {
        question: 'Một tứ giác ABCD nội tiếp được đường tròn khi và chỉ khi tổng số đo hai góc đối diện bằng bao nhiêu?',
        options: ['180°', '360°', '90°', '270°'],
        answerIndex: 0,
        hint: 'Định lý tứ giác nội tiếp: ∠A + ∠C = 180° hoặc ∠B + ∠D = 180°.',
        explanation: 'Tứ giác nội tiếp đường tròn có tổng số đo hai góc đối diện luôn bằng 180°.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-literature-entrance-prep',
    title: 'Ngữ văn 9 - HK2: Thơ ca Hiện đại & Kỹ năng Nghị luận Văn học vào 10',
    titleEn: 'Literature 9 - Sem 2: Modern Vietnamese Poetry & Grade 10 Entrance Exam Essay',
    grade: 9,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 155,
    description: 'Phân tích các tác phẩm trọng tâm: Mùa xuân nho nhỏ (Thanh Hải), Viếng lăng Bác (Viễn Phương), Sang thu (Hữu Thỉnh); lập dàn ý bài văn nghị luận.',
    descriptionEn: 'Deep literary analysis of core entrance exam poems and analytical essay argumentation skills.',
    questions: [
      {
        question: 'Bài thơ "Mùa xuân nho nhỏ" của nhà thơ Thanh Hải được sáng tác trong hoàn cảnh đặc biệt nào?',
        options: [
          'Trên giường bệnh ở bệnh viện Trung ương Huế không bao lâu trước khi nhà thơ qua đời',
          'Trong những ngày kháng chiến chống Mỹ ác liệt ở chiến khu Trị Thiên',
          'Khi đất nước vừa giải phóng năm 1975',
          'Trong chuyến du ngoạn ngắm cảnh sông Hương mùa xuân'
        ],
        answerIndex: 0,
        hint: 'Tháng 11 năm 1980, khi nhà thơ đang lâm bệnh nặng trên giường bệnh.',
        explanation: 'Tháng 11/1980, trên giường bệnh những ngày cuối đời, Thanh Hải viết "Mùa xuân nho nhỏ" gửi gắm khát vọng cống hiến thầm lặng cho đời.'
      },
      {
        question: 'Câu thơ "Mặt trời trong lăng rất đỏ" trong bài thơ "Viếng lăng Bác" của Viễn Phương sử dụng biện pháp tu từ gì?',
        options: ['Ẩn dụ', 'Hoán dụ', 'So sánh', 'Nói giảm nói tránh'],
        answerIndex: 0,
        hint: 'Hình ảnh Bác Hồ được ví ngầm với mặt trời mang lại ánh sáng chân lý.',
        explanation: 'Biện pháp ẩn dụ ca ngợi Bác Hồ vĩ đại như vầng thái dương tỏa ánh sáng cách mạng ấm áp cho dân tộc.'
      },
      {
        question: 'Tín hiệu giao mùa đặc trưng nhất báo hiệu mùa thu về trong bài thơ "Sang thu" của Hữu Thỉnh là gì?',
        options: [
          'Hương ổi phả vào gió se và sương chùng chình qua ngõ',
          'Hoa sen tàn và tiếng ve dứt hẳn',
          'Lá vàng rơi rụng đầy sân',
          'Những cơn mưa rào bất chợt'
        ],
        answerIndex: 0,
        hint: 'Mở đầu bài thơ: "Bỗng nhận ra hương ổi / Phả vào trong gió se...".',
        explanation: '"Bỗng nhận ra hương ổi / Phả vào trong gió se / Sương chùng chình qua ngõ / Hình như thu đã về".'
      }
    ]
  }
];
