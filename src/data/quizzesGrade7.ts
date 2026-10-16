import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Grade 7 Curriculum Quizzes Database
 * Covers at least 4 Regular 15-Minute Assessments and 1 Final Evaluation per Semester for each subject
 * Aligned with Vietnam Ministry of Education GDPT 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */
export const GRADE_7_FULL_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // SEMESTER 1 (HỌC KỲ 1) - TOÁN HỌC 7
  // =========================================================================
  {
    id: 'quiz-g7-s1-math-reg1',
    title: 'Toán 7 - Kiểm tra Thường xuyên 1: Tập hợp Số hữu tỉ ℚ & Phép tính',
    titleEn: 'Math 7 - Regular Assessment 1: Rational Numbers Q & Operations',
    grade: 7,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Khái niệm số hữu tỉ, biểu diễn trên trục số, số đối và các phép tính cộng trừ nhân chia số hữu tỉ.',
    descriptionEn: 'Concept of rational numbers, number line representation, opposite numbers, and rational arithmetic.',
    questions: [
      {
        question: 'Số nào sau đây KHÔNG PHẢI là số hữu tỉ?',
        options: ['√2 (căn bậc hai số học của 2)', '-3/5', '0.75', '-4'],
        answerIndex: 0,
        hint: 'Số hữu tỉ là số viết được dưới dạng phân số a/b với a, b thuộc Z, b ≠ 0.',
        explanation: '√2 là số thập phân vô hạn không tuần hoàn (số vô tỉ), không thể biểu diễn dưới dạng phân số a/b.'
      },
      {
        question: 'Số đối của số hữu tỉ -2/7 là:',
        options: ['2/7', '-7/2', '7/2', '-2/7'],
        answerIndex: 0,
        hint: 'Hai số đối nhau có tổng bằng 0.',
        explanation: 'Số đối của -a/b là a/b, do đó số đối của -2/7 là 2/7.'
      },
      {
        question: 'Tính giá trị: (-1/3) + 5/6 = ?',
        options: ['1/2', '4/9', '-1/2', '2/3'],
        answerIndex: 0,
        hint: 'Quy đồng mẫu số chung là 6: (-2/6) + 5/6.',
        explanation: '(-2 + 5)/6 = 3/6 = 1/2.'
      },
      {
        question: 'Kết quả của phép tính (-3/4) · (8/9) là:',
        options: ['-2/3', '2/3', '-1/3', '-6/13'],
        answerIndex: 0,
        hint: 'Rút gọn chéo trước khi nhân tử với tử, mẫu với mẫu.',
        explanation: '(-3 · 8)/(4 · 9) = (-24)/36 = -2/3.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-math-reg2',
    title: 'Toán 7 - Kiểm tra Thường xuyên 2: Lũy thừa với số mũ tự nhiên của Số hữu tỉ',
    titleEn: 'Math 7 - Regular Assessment 2: Powers with Natural Exponents of Rational Numbers',
    grade: 7,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Lũy thừa của một tích, lũy thừa của một thương, nhân chia hai lũy thừa cùng cơ số.',
    descriptionEn: 'Power of a product, power of a quotient, multiplying and dividing powers with same base.',
    questions: [
      {
        question: 'Tính giá trị của (-1/2)³:',
        options: ['-1/8', '1/8', '-1/6', '1/6'],
        answerIndex: 0,
        hint: 'Số âm mũ lẻ cho kết quả âm: (-1/2) · (-1/2) · (-1/2).',
        explanation: '(-1)³/2³ = -1/8.'
      },
      {
        question: 'Công thức nào sau đây ĐÚNG với mọi số hữu tỉ x và các số tự nhiên m, n?',
        options: ['xᵐ · xⁿ = xᵐ⁺ⁿ', 'xᵐ · xⁿ = xᵐⁿ', '(xᵐ)ⁿ = xᵐ⁺ⁿ', 'xᵐ : xⁿ = xᵐ:ⁿ'],
        answerIndex: 0,
        hint: 'Khi nhân hai lũy thừa cùng cơ số, giữ nguyên cơ số và cộng các số mũ.',
        explanation: 'Quy tắc lũy thừa: xᵐ · xⁿ = xᵐ⁺ⁿ.'
      },
      {
        question: 'Giá trị của biểu thức (2/3)⁴ : (2/3)² là:',
        options: ['4/9', '2/3', '8/27', '1'],
        answerIndex: 0,
        hint: 'Trừ số mũ: (2/3)⁴⁻² = (2/3)².',
        explanation: '(2/3)² = 4/9.'
      },
      {
        question: 'Tìm x biết x² = 16/25 và x > 0:',
        options: ['x = 4/5', 'x = -4/5', 'x = 16/5', 'x = 2/5'],
        answerIndex: 0,
        hint: 'Căn bậc hai số học của 16/25.',
        explanation: 'Vì x > 0 nên x = √(16/25) = 4/5.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-math-reg3',
    title: 'Toán 7 - Kiểm tra Thường xuyên 3: Hai góc So le trong, Đồng vị & Đường thẳng Song song',
    titleEn: 'Math 7 - Regular Assessment 3: Alternate Interior, Corresponding Angles & Parallel Lines',
    grade: 7,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Góc ở vị trí đặc biệt (kề bù, đối đỉnh), dấu hiệu nhận biết hai đường thẳng song song, tiên đề Ơ-clit.',
    descriptionEn: 'Adjacent supplementary angles, vertical angles, criteria for parallel lines, Euclid axiom.',
    questions: [
      {
        question: 'Hai góc đối đỉnh thì:',
        options: ['Bằng nhau', 'Bù nhau (tổng 180°)', 'Phụ nhau (tổng 90°)', 'Kề nhau'],
        answerIndex: 0,
        hint: 'Tính chất cơ bản của hai góc đối đỉnh.',
        explanation: 'Hai góc đối đỉnh thì luôn luôn bằng nhau.'
      },
      {
        question: 'Nếu đường thẳng c cắt hai đường thẳng a và b, trong các góc tạo thành có một cặp góc so le trong bằng nhau thì:',
        options: ['a song song với b (a // b)', 'a vuông góc với b', 'a trùng với b', 'a cắt b tại một điểm'],
        answerIndex: 0,
        hint: 'Dấu hiệu nhận biết hai đường thẳng song song.',
        explanation: 'Dấu hiệu nhận biết: Nếu một đường thẳng cắt hai đường thẳng tạo thành cặp góc so le trong bằng nhau thì hai đường thẳng đó song song.'
      },
      {
        question: 'Cho a // b, biết một góc trong cùng phía có số đo 70°. Số đo của góc trong cùng phía còn lại là:',
        options: ['110°', '70°', '90°', '20°'],
        answerIndex: 0,
        hint: 'Hai góc trong cùng phía của hai đường thẳng song song thì bù nhau (tổng bằng 180°).',
        explanation: '180° - 70° = 110°.'
      },
      {
        question: 'Qua một điểm ở ngoài một đường thẳng, có bao nhiêu đường thẳng song song với đường thẳng đó?',
        options: ['Chỉ có 1 đường thẳng duy nhất', 'Vô số đường thẳng', 'Có 2 đường thẳng', 'Không có đường thẳng nào'],
        answerIndex: 0,
        hint: 'Nội dung tiên đề Ơ-clit về đường thẳng song song.',
        explanation: 'Tiên đề Ơ-clit khẳng định qua một điểm ở ngoài một đường thẳng chỉ có một đường thẳng song song với đường thẳng đó.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-math-reg4',
    title: 'Toán 7 - Kiểm tra Thường xuyên 4: Số Thực, Căn bậc hai số học & Giá trị tuyệt đối',
    titleEn: 'Math 7 - Regular Assessment 4: Real Numbers, Arithmetic Square Roots & Absolute Values',
    grade: 7,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Tập hợp số thực ℝ, căn bậc hai số học √a, định nghĩa và tính chất của giá trị tuyệt đối |x|.',
    descriptionEn: 'Real numbers R, square roots, absolute value definition and properties.',
    questions: [
      {
        question: 'Căn bậc hai số học của 81 là:',
        options: ['9', '-9', '±9', '81'],
        answerIndex: 0,
        hint: 'Căn bậc hai số học của số a không âm là số không âm x sao cho x² = a.',
        explanation: '√81 = 9 vì 9 > 0 và 9² = 81.'
      },
      {
        question: 'Giá trị tuyệt đối của số -3.5 là:',
        options: ['3.5', '-3.5', '±3.5', '0'],
        answerIndex: 0,
        hint: 'Khoảng cách từ điểm x đến gốc 0 trên trục số luôn không âm.',
        explanation: '|-3.5| = 3.5.'
      },
      {
        question: 'Tập hợp số thực ℝ bao gồm:',
        options: ['Số hữu tỉ và số vô tỉ', 'Chỉ có số nguyên và số tự nhiên', 'Chỉ có các phân số dương', 'Các số nguyên tố'],
        answerIndex: 0,
        hint: 'R là sự hợp nhất của tập Q và tập I.',
        explanation: 'Tập hợp số thực ℝ bao gồm toàn bộ số hữu tỉ (ℚ) và số vô tỉ (𝕀).'
      },
      {
        question: 'Tìm x biết |x| = 5:',
        options: ['x = 5 hoặc x = -5', 'x = 5', 'x = -5', 'x = 25'],
        answerIndex: 0,
        hint: 'Có hai số có khoảng cách đến điểm 0 bằng 5.',
        explanation: '|5| = 5 và |-5| = 5, do đó x = 5 hoặc x = -5.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-math-final',
    title: 'Toán 7 - Đề Kiểm Tra Cuối Học Kỳ 1 (Tổng hợp Toàn diện)',
    titleEn: 'Math 7 - Semester 1 Final Examination (Comprehensive)',
    grade: 7,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp kiến thức cả Học kỳ 1: Số hữu tỉ, số thực, lũy thừa, góc và đường thẳng song song, tam giác bằng nhau.',
    descriptionEn: 'Comprehensive final exam covering Sem 1: rational & real numbers, geometry & triangle congruence.',
    questions: [
      {
        question: 'Giá trị của biểu thức A = (-1/2)² + 3/4 · (-2/3) là:',
        options: ['-1/4', '1/4', '-3/4', '0'],
        answerIndex: 0,
        hint: '(-1/2)² = 1/4; 3/4 · (-2/3) = -2/4 = -1/2.',
        explanation: 'A = 1/4 + (-2/4) = -1/4.'
      },
      {
        question: 'Cho tam giác ABC có góc A = 60°, góc B = 70°. Số đo góc C là:',
        options: ['50°', '60°', '70°', '80°'],
        answerIndex: 0,
        hint: 'Tổng ba góc trong một tam giác bằng 180°.',
        explanation: 'Góc C = 180° - (60° + 70°) = 180° - 130° = 50°.'
      },
      {
        question: 'Căn bậc hai số học của 144 là:',
        options: ['12', '-12', '±12', '72'],
        answerIndex: 0,
        hint: '12² = 144.',
        explanation: '√144 = 12.'
      },
      {
        question: 'Khẳng định nào sau đây là SAI?',
        options: ['Mọi số nguyên đều là số vô tỉ', 'Mọi số tự nhiên đều là số hữu tỉ', 'Số 0 là số hữu tỉ', 'Số vô tỉ là số thập phân vô hạn không tuần hoàn'],
        answerIndex: 0,
        hint: 'Số nguyên biểu diễn được dưới dạng phân số z/1 nên nó là số hữu tỉ.',
        explanation: 'Khẳng định "Mọi số nguyên đều là số vô tỉ" là sai vì số nguyên là số hữu tỉ.'
      },
      {
        question: 'Cho hai tam giác ABC và MNP có AB = MN, AC = MP, BC = NP. Hai tam giác này bằng nhau theo trường hợp nào?',
        options: ['Cạnh - cạnh - cạnh (c-c-c)', 'Cạnh - góc - cạnh (c-g-c)', 'Góc - cạnh - góc (g-c-g)', 'Cạnh huyền - góc nhọn'],
        answerIndex: 0,
        hint: 'Ba cặp cạnh tương ứng bằng nhau.',
        explanation: 'Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác bằng nhau (c-c-c).'
      },
      {
        question: 'Tìm x biết (2x - 1)³ = -27:',
        options: ['x = -1', 'x = 1', 'x = -2', 'x = 2'],
        answerIndex: 0,
        hint: '(-3)³ = -27 => 2x - 1 = -3.',
        explanation: '2x - 1 = -3 => 2x = -2 => x = -1.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 1 (HỌC KỲ 1) - NGỮ VĂN 7
  // =========================================================================
  {
    id: 'quiz-g7-s1-lit-reg1',
    title: 'Ngữ văn 7 - Kiểm tra Thường xuyên 1: Tiếng nói Vạn vật & Thơ 4 chữ, 5 chữ',
    titleEn: 'Literature 7 - Regular Assessment 1: Voices of Nature & 4-5 Syllable Poetry',
    grade: 7,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Đặc điểm thể thơ bốn chữ, năm chữ; gieo vần, ngắt nhịp và hình ảnh thiên nhiên qua bài thơ Lời của cây, Sang thu.',
    descriptionEn: 'Poetic forms with 4 and 5 syllables, rhyming schemes, meter, and seasonal imagery.',
    questions: [
      {
        question: 'Bài thơ "Sang thu" của tác giả Hữu Thỉnh được viết theo thể thơ nào?',
        options: ['Thơ 5 chữ (ngũ ngôn)', 'Thơ 4 chữ', 'Thơ lục bát', 'Thơ tự do'],
        answerIndex: 0,
        hint: 'Đếm số lượng tiếng trong mỗi dòng thơ: "Bỗng nhận ra hương ổi / Phả vào trong gió se...".',
        explanation: 'Mỗi dòng thơ gồm đúng 5 tiếng, thuộc thể thơ 5 chữ.'
      },
      {
        question: 'Tín hiệu đầu tiên thông báo mùa thu sang trong bài thơ "Sang thu" là:',
        options: ['Hương ổi phả vào trong gió se', 'Sông được lúc dềnh dàng', 'Chim bắt đầu vội vã', 'Mây vắt nửa mình sang thu'],
        answerIndex: 0,
        hint: 'Mở đầu bài thơ: "Bỗng nhận ra hương ổi...".',
        explanation: 'Tác giả đón nhận mùa thu bằng khứu giác qua mùi hương ổi chín quen thuộc nơi đồng quê.'
      },
      {
        question: 'Phó từ là những từ chuyên đi kèm với từ loại nào để bổ sung ý nghĩa?',
        options: ['Động từ và Tính từ', 'Chỉ đi kèm Danh từ', 'Chỉ đi kèm Đại từ', 'Chỉ đi kèm Số từ'],
        answerIndex: 0,
        hint: 'Ví dụ: "đang chạy", "rất đẹp", "đã học".',
        explanation: 'Phó từ chuyên đi kèm trước hoặc sau động từ, tính từ để bổ sung ý nghĩa về thời gian, mức độ, tiếp diễn,...'
      },
      {
        question: 'Biện pháp tu từ nào được sử dụng trong câu "Sấm cũng bớt bất ngờ / Trên hàng cây đứng tuổi"?',
        options: ['Nhân hóa', 'So sánh', 'Điệp ngữ', 'Nói quá'],
        answerIndex: 0,
        hint: '"Hàng cây đứng tuổi" gán phẩm chất tuổi tác của con người cho thiên nhiên.',
        explanation: 'Biện pháp nhân hóa giúp hàng cây mang dáng dấp của những con người từng trải, điềm tĩnh trước sóng gió.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-lit-reg2',
    title: 'Ngữ văn 7 - Kiểm tra Thường xuyên 2: Khúc nhạc Tâm hồn & Tản văn, Tùy bút',
    titleEn: 'Literature 7 - Regular Assessment 2: Melodies of the Soul & Essays',
    grade: 7,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Chất trữ tình và cái "tôi" tác giả trong tản văn, tùy bút (Cốm Làng Vòng, Mùa thu về Trùng Khánh nghe hạt dẻ hát).',
    descriptionEn: 'Lyrical qualities and personal narrative voice in essay forms.',
    questions: [
      {
        question: 'Đặc điểm nổi bật nhất của thể loại tản văn, tùy bút là:',
        options: ['Giàu chất trữ tình, thể hiện trực tiếp cảm xúc và cái "tôi" của người viết', 'Cốt truyện ly kỳ, có nhiều xung đột gay gắt', 'Toàn bộ viết bằng văn vần có vần điệu cố định', 'Chỉ nhằm mục đích ghi chép tin tức thời sự hàng ngày'],
        answerIndex: 0,
        hint: 'Tản văn và tùy bút là thể loại ghi lại rung cảm tinh tế của tác giả trước cuộc sống.',
        explanation: 'Tùy bút và tản văn giàu cảm xúc cá nhân, mang đậm chất thơ và phong cách riêng của người viết.'
      },
      {
        question: 'Thức quà thanh nhã, tinh khiết của đồng quê trong bài tùy bút của Thạch Lam là:',
        options: ['Cốm non làng Vòng', 'Bánh đậu xanh Hải Dương', 'Kẹo sìu châu Nam Định', 'Trà sen Tây Hồ'],
        answerIndex: 0,
        hint: 'Làm từ hạt thóc nếp non mang hương thơm của lá sen.',
        explanation: 'Thạch Lam ca ngợi cốm Vòng là một thức quà thanh nhã và tinh khiết của đồng quê Việt Nam.'
      },
      {
        question: 'Từ ngữ nào sau đây là từ láy tượng thanh?',
        options: ['Róc rách', 'Xanh ngắt', 'Đo đỏ', 'Nho nhỏ'],
        answerIndex: 0,
        hint: 'Tượng thanh là mô phỏng âm thanh tự nhiên.',
        explanation: '"Róc rách" mô phỏng tiếng nước chảy róc rách, là từ láy tượng thanh.'
      },
      {
        question: 'Nghĩa của từ "nguồn cội" trong văn cảnh gia đình là:',
        options: ['Gốc rễ, tổ tiên, quê hương nơi sinh ra và nuôi dưỡng con người', 'Dòng suối bắt đầu chảy trên núi', 'Nơi cung cấp nguồn năng lượng', 'Điểm đến trong tương lai'],
        answerIndex: 0,
        hint: 'Nơi xuất phát cội nguồn tình cảm thiêng liêng.',
        explanation: '"Nguồn cội" chỉ gốc rễ, tổ tiên, cội nguồn nơi gắn kết huyết thống và văn hóa gia đình.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-lit-reg3',
    title: 'Ngữ văn 7 - Kiểm tra Thường xuyên 3: Cội nguồn Yêu thương & Văn nghị luận',
    titleEn: 'Literature 7 - Regular Assessment 3: Roots of Love & Argumentative Essays',
    grade: 7,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Yếu tố luận điểm, lí lẽ và bằng chứng trong văn bản nghị luận xã hội và văn học.',
    descriptionEn: 'Claims, reasoning, and evidence in persuasive essays.',
    questions: [
      {
        question: 'Trong văn nghị luận, "lí lẽ" có vai trò gì?',
        options: ['Giải thích, phân tích để làm sáng tỏ tính đúng đắn của luận điểm', 'Kể lại các câu chuyện cổ tích hấp dẫn', 'Miêu tả hình dáng nhân vật', 'Gieo vần để câu văn êm tai'],
        answerIndex: 0,
        hint: 'Lí lẽ là những lập luận logic xuất phát từ suy nghĩ và hiểu biết.',
        explanation: 'Lí lẽ dùng để cắt nghĩa, phân tích nhằm thuyết phục người đọc về luận điểm nêu ra.'
      },
      {
        question: '"Bằng chứng" trong văn nghị luận phải đảm bảo yêu cầu nào?',
        options: ['Chân thực, cụ thể, tiêu biểu và có tính xác thực cao', 'Hư cấu hoàn toàn từ trí tưởng tượng', 'Càng dài dòng càng tốt', 'Không cần liên quan đến luận điểm'],
        answerIndex: 0,
        hint: 'Bằng chứng là dẫn chứng người thật, việc thật hoặc số liệu thực tế.',
        explanation: 'Bằng chứng phải chân thực, tiêu biểu và chính xác để tạo sức thuyết phục vững chắc.'
      },
      {
        question: 'Thành ngữ nào sau đây khuyên răn con người về lòng biết ơn đối với thế hệ đi trước?',
        options: ['Uống nước nhớ nguồn', 'Ăn no ngủ kĩ', 'Đục nước béo cò', 'Nước chảy bèo trôi'],
        answerIndex: 0,
        hint: 'Nhớ tới người đã đào giếng khơi nguồn dòng nước mát.',
        explanation: '"Uống nước nhớ nguồn" là đạo lý truyền thống tốt đẹp thể hiện lòng biết ơn sâu nặng.'
      },
      {
        question: 'Từ Hán Việt "đồng bào" có nghĩa là:',
        options: ['Những người cùng chung một bọc, cùng giống nòi dân tộc', 'Bạn cùng lớp học tập', 'Người cùng đi trên một con thuyền', 'Đồng nghiệp trong cơ quan'],
        answerIndex: 0,
        hint: 'Xuất phát từ truyền thuyết mẹ Âu Cơ sinh bọc trăm trứng.',
        explanation: '"Đồng" là cùng, "bào" là bọc. "Đồng bào" chỉ những người cùng một giống nòi dân tộc Việt Nam.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-lit-reg4',
    title: 'Ngữ văn 7 - Kiểm tra Thường xuyên 4: Mở rộng Trạng ngữ & Nghĩa của Từ ngữ',
    titleEn: 'Literature 7 - Regular Assessment 4: Adverbial Phrases & Word Semantics',
    grade: 7,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Công dụng của trạng ngữ, mở rộng trạng ngữ bằng cụm từ và từ đồng nghĩa, trái nghĩa trong tiếng Việt.',
    descriptionEn: 'Functions of adverbial phrases, phrase expansion, and semantic context.',
    questions: [
      {
        question: 'Trạng ngữ trong câu "Mùa xuân, trăm hoa đua nở rực rỡ" bổ sung ý nghĩa gì cho câu?',
        options: ['Ý nghĩa về thời gian', 'Ý nghĩa về nơi chốn địa điểm', 'Ý nghĩa về nguyên nhân', 'Ý nghĩa về mục đích'],
        answerIndex: 0,
        hint: '"Mùa xuân" trả lời cho câu hỏi "Khi nào?".',
        explanation: 'Trạng ngữ chỉ thời gian xác định thời điểm diễn ra sự việc.'
      },
      {
        question: 'Khi mở rộng trạng ngữ bằng một cụm từ, câu văn sẽ:',
        options: ['Cung cấp thông tin chi tiết, sinh động và rõ ràng hơn', 'Bị sai ngữ pháp', 'Mất đi chủ ngữ chính', 'Trở thành câu nghi vấn'],
        answerIndex: 0,
        hint: 'Ví dụ: "Sáng nay" mở rộng thành "Vào một buổi sáng mùa thu trong trẻo".',
        explanation: 'Mở rộng trạng ngữ giúp câu văn giàu hình ảnh, cung cấp bối cảnh cụ thể và sinh động.'
      },
      {
        question: 'Xác định thành phần trạng ngữ trong câu: "Bằng đôi bàn tay khéo léo, nghệ nhân đã tạo nên tác phẩm tuyệt mỹ."',
        options: ['"Bằng đôi bàn tay khéo léo"', '"Nghệ nhân"', '"Đã tạo nên"', '"Tác phẩm tuyệt mỹ"'],
        answerIndex: 0,
        hint: 'Trả lời cho câu hỏi "Bằng phương tiện / cách thức nào?".',
        explanation: '"Bằng đôi bàn tay khéo léo" là trạng ngữ chỉ phương tiện/cách thức.'
      },
      {
        question: 'Cặp từ nào sau đây là cặp từ trái nghĩa?',
        options: ['Thành công - Thất bại', 'Chăm chỉ - Siêng năng', 'Học tập - Nghiên cứu', 'Bao la - Rộng lớn'],
        answerIndex: 0,
        hint: 'Hai từ có ý nghĩa hoàn toàn đối lập nhau.',
        explanation: '"Thành công" và "Thất bại" có nghĩa trái ngược nhau hoàn toàn.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-lit-final',
    title: 'Ngữ văn 7 - Đề Kiểm Tra Cuối Học Kỳ 1 (Đọc hiểu & Tiếng Việt)',
    titleEn: 'Literature 7 - Semester 1 Final Examination (Reading & Vietnamese)',
    grade: 7,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi kiểm tra đánh giá cuối học kỳ 1 môn Ngữ văn 7 tổng hợp kỹ năng Đọc hiểu văn bản và Tiếng Việt thực hành.',
    descriptionEn: 'Semester 1 comprehensive final exam testing reading comprehension and language mechanics.',
    questions: [
      {
        question: 'Thể thơ nào có số tiếng ở các dòng lần lượt là sáu tiếng rồi đến tám tiếng?',
        options: ['Thơ lục bát', 'Thơ song thất lục bát', 'Thơ tự do', 'Thơ 7 chữ'],
        answerIndex: 0,
        hint: '"Lục" là 6, "bát" là 8.',
        explanation: 'Thơ lục bát gồm từng cặp câu 6 tiếng (câu lục) và 8 tiếng (câu bát) luân phiên.'
      },
      {
        question: 'Trong văn bản thông tin, phương tiện phi ngôn ngữ thường bao gồm những gì?',
        options: ['Hình ảnh, số liệu, biểu đồ, sơ đồ minh họa', 'Những câu thơ lục bát', 'Các lời thoại nhân vật', 'Các từ ngữ địa phương'],
        answerIndex: 0,
        hint: 'Phi ngôn ngữ là những yếu tố truyền tải thông tin không dùng chữ viết lời nói trực tiếp.',
        explanation: 'Phương tiện phi ngôn ngữ gồm tranh ảnh, biểu đồ, infographic giúp thông tin trực quan, chính xác.'
      },
      {
        question: 'Từ "dềnh dàng" trong câu thơ "Sông được lúc dềnh dàng" mang ý nghĩa gì?',
        options: ['Chảy chậm chạp, êm đềm như đang ngập ngừng thư thái', 'Chảy cuồn cuộn xiết mạnh', 'Nước sông dâng cao ngập bờ', 'Nước sông cạn khô đáy'],
        answerIndex: 0,
        hint: 'Trạng thái chuyển mình êm dịu của dòng sông khi bước vào mùa thu.',
        explanation: '"Dềnh dàng" gợi tả dòng sông thu trôi chậm rãi, thanh thản, đối lập với dòng chảy cuồn cuộn mùa hạ.'
      },
      {
        question: 'Chức năng chính của dấu chấm lửng (...) đặt ở cuối câu liệt kê là:',
        options: ['Biểu thị còn nhiều sự vật, hiện tượng tương tự chưa liệt kê hết', 'Báo hiệu lời nói của người khác', 'Để kết thúc câu hỏi nghi vấn', 'Dùng để nhấn mạnh lỗi sai'],
        answerIndex: 0,
        hint: 'Tương đương với từ "vân vân" (v.v.).',
        explanation: 'Dấu chấm lửng (...) đặt cuối danh sách biểu thị sự liệt kê chưa hết các đối tượng cùng loại.'
      },
      {
        question: 'Thông điệp ý nghĩa nhất mà bài thơ "Mẹ" của Đỗ Trung Lai muốn gửi gắm tới người đọc là:',
        options: ['Lòng biết ơn, sự xót xa trước nỗi vất vả và quy luật già nua của người mẹ kính yêu', 'Miêu tả vẻ đẹp của cây cau trong vườn', 'Khuyên học sinh chăm chỉ làm vườn', 'Kể lại chuyện trồng cây ăn quả'],
        answerIndex: 0,
        hint: 'Hình ảnh tương phản giữa cây cau càng cao và lưng mẹ càng còng.',
        explanation: 'Bài thơ thể hiện tình yêu thương sâu sắc, niềm xúc động nghẹn ngào của người con trước tuổi già của mẹ.'
      },
      {
        question: 'Xác định từ loại của từ "rất" trong cụm từ "rất chăm chỉ":',
        options: ['Phó từ chỉ mức độ', 'Tính từ', 'Quan hệ từ', 'Đại từ'],
        answerIndex: 0,
        hint: 'Bổ nghĩa về mức độ cao cho tính từ "chăm chỉ".',
        explanation: '"Rất" là phó từ chỉ mức độ đứng trước tính từ để bổ nghĩa.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 1 (HỌC KỲ 1) - KHOA HỌC TỰ NHIÊN 7
  // =========================================================================
  {
    id: 'quiz-g7-s1-sci-reg1',
    title: 'KHTN 7 - Kiểm tra Thường xuyên 1: Phương pháp & Kỹ năng học tập KHTN',
    titleEn: 'Science 7 - Regular Assessment 1: Scientific Methodology & Lab Skills',
    grade: 7,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Quy trình nghiên cứu khoa học, kỹ năng quan sát, đo lường, dự đoán và an toàn trong phòng thực hành.',
    descriptionEn: 'Scientific process, observational and measurement skills, laboratory safety.',
    questions: [
      {
        question: 'Bước đầu tiên trong tiến trình tìm hiểu tự nhiên là gì?',
        options: ['Quan sát và đặt câu hỏi nghiên cứu', 'Lập kế hoạch kiểm tra giả thuyết', 'Viết báo cáo kết quả', 'Tiến hành làm thí nghiệm ngay'],
        answerIndex: 0,
        hint: 'Mọi phát minh khoa học đều bắt đầu từ việc quan sát hiện tượng và thắc mắc "Tại sao?".',
        explanation: 'Quan sát và đặt câu hỏi là bước mở đầu khởi xướng cho mọi nghiên cứu khoa học.'
      },
      {
        question: 'Dụng cụ nào sau đây dùng để đo thể tích chất lỏng với độ chính xác cao trong phòng thí nghiệm?',
        options: ['Ống đong có vạch chia (hoặc buret, pipet)', 'Nhiệt kế thủy ngân', 'Cân đồng hồ', 'Lực kế lò xo'],
        answerIndex: 0,
        hint: 'Dụng cụ hình trụ có chia các vạch mililit (ml).',
        explanation: 'Ống đong (graduated cylinder) chuyên dùng đo thể tích chất lỏng chính xác.'
      },
      {
        question: 'Để đo thời gian một viên bi sắt rơi từ độ cao 1m chạm đất, người ta dùng thiết bị nào chuẩn nhất?',
        options: ['Đồng hồ đo thời gian hiện số dùng cổng quang điện', 'Đồng hồ cát', 'Đồng hồ đeo tay có kim giây', 'Nhẩm đếm theo nhịp thở'],
        answerIndex: 0,
        hint: 'Thiết bị điện tử tự động bấm giờ khi vật chắn tia sáng của cổng quang điện.',
        explanation: 'Đồng hồ đo hiện số nối với cổng quang điện loại bỏ sai số do phản xạ bấm tay của con người.'
      },
      {
        question: 'Khi quan sát tế bào vi sinh vật có kích thước siêu nhỏ không thể nhìn thấy bằng mắt thường, dụng cụ cần dùng là:',
        options: ['Kính hiển vi quang học', 'Kính lúp cầm tay', 'Kính viễn vọng thiên văn', 'Kính râm chống nắng'],
        answerIndex: 0,
        hint: 'Kính có khả năng phóng đại từ 40 đến 1000 lần.',
        explanation: 'Kính hiển vi quang học cho phép phóng đại tế bào lên hàng trăm, hàng nghìn lần.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-sci-reg2',
    title: 'KHTN 7 - Kiểm tra Thường xuyên 2: Nguyên tử, Nguyên tố Hóa học & Bảng tuần hoàn',
    titleEn: 'Science 7 - Regular Assessment 2: Atoms, Elements & The Periodic Table',
    grade: 7,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Cấu tạo hạt nhân nguyên tử (proton, nơtron, electron), ô nguyên tố, chu kỳ và nhóm trong bảng Men-đê-lê-ép.',
    descriptionEn: 'Atomic structure, protons, neutrons, electrons, and periodic table organization.',
    questions: [
      {
        question: 'Hạt mang điện tích âm trong cấu tạo nguyên tử là:',
        options: ['Electron (e)', 'Proton (p)', 'Nơtron (n)', 'Hạt nhân'],
        answerIndex: 0,
        hint: 'Chuyển động trên các lớp vỏ xung quanh hạt nhân.',
        explanation: 'Electron mang điện tích âm (-1), proton mang điện tích dương (+1), nơtron không mang điện.'
      },
      {
        question: 'Nguyên tử luôn trung hòa về điện là do:',
        options: ['Số hạt proton luôn bằng số hạt electron (p = e)', 'Khối lượng hạt nhân rất lớn', 'Số nơtron luôn bằng số proton', 'Vỏ nguyên tử không có điện tích'],
        answerIndex: 0,
        hint: 'Tổng điện tích dương bằng tổng điện tích âm.',
        explanation: 'Vì số proton (mang điện dương) luôn bằng số electron (mang điện âm) nên nguyên tử trung hòa về điện.'
      },
      {
        question: 'Ký hiệu hóa học của nguyên tố Oxi (Oxygen) là:',
        options: ['O', 'Ox', 'Og', 'H'],
        answerIndex: 0,
        hint: 'Chữ cái đầu tiên viết hoa.',
        explanation: 'Oxi có ký hiệu hóa học là O, số hiệu nguyên tử 8.'
      },
      {
        question: 'Số thứ tự của chu kỳ trong bảng tuần hoàn cho biết thông tin gì về cấu tạo nguyên tử?',
        options: ['Số lớp electron trong vỏ nguyên tử', 'Số electron ở lớp ngoài cùng', 'Số hạt nơtron trong hạt nhân', 'Khối lượng nguyên tử'],
        answerIndex: 0,
        hint: 'Quy luật sắp xếp các nguyên tố theo hàng ngang.',
        explanation: 'Số thứ tự của chu kỳ bằng đúng số lớp electron của nguyên tử nguyên tố đó.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-sci-reg3',
    title: 'KHTN 7 - Kiểm tra Thường xuyên 3: Tốc độ Chuyển động & Đồ thị Quãng đường - Thời gian',
    titleEn: 'Science 7 - Regular Assessment 3: Motion Speed & Distance-Time Graphs',
    grade: 7,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Khái niệm tốc độ v = s/t, đơn vị m/s và km/h, đọc và phân tích đồ thị s - t.',
    descriptionEn: 'Speed formula, velocity units, and distance-time graph interpretation.',
    questions: [
      {
        question: 'Công thức tính tốc độ chuyển động là:',
        options: ['v = s / t', 'v = s · t', 'v = t / s', 'v = s + t'],
        answerIndex: 0,
        hint: 'Thương số giữa quãng đường đi được và khoảng thời gian đi quãng đường đó.',
        explanation: 'Tốc độ v = s/t (quãng đường chia thời gian).'
      },
      {
        question: 'Một xe máy di chuyển 36 km trong thời gian 1 giờ. Tốc độ của xe máy tính theo đơn vị m/s là:',
        options: ['10 m/s', '36 m/s', '5 m/s', '20 m/s'],
        answerIndex: 0,
        hint: 'Đổi từ km/h sang m/s: chia cho 3.6 (36 : 3.6 = 10).',
        explanation: '36 km/h = 36000 m / 3600 s = 10 m/s.'
      },
      {
        question: 'Trên đồ thị quãng đường - thời gian (s - t), đoạn đồ thị nằm ngang song song với trục thời gian cho biết vật đang:',
        options: ['Đứng yên (không chuyển động)', 'Chuyển động thẳng đều nhanh dần', 'Chuyển động lùi lại điểm xuất phát', 'Tăng tốc đột ngột'],
        answerIndex: 0,
        hint: 'Thời gian t vẫn trôi nhưng quãng đường s không thay đổi.',
        explanation: 'Đoạn nằm ngang biểu thị vị trí không đổi theo thời gian, tức vật đang đứng yên.'
      },
      {
        question: 'Thiết bị bắn tốc độ mà cảnh sát giao thông sử dụng dùng để làm gì?',
        options: ['Đo tốc độ tức thời của phương tiện giao thông trên đường', 'Chụp ảnh phong cảnh', 'Đo khoảng cách giữa hai xe tải', 'Kiểm tra nồng độ khí thải'],
        answerIndex: 0,
        hint: 'Kiểm soát tốc độ an toàn giao thông.',
        explanation: 'Súng bắn tốc độ đo tốc độ chuyển động của xe tại thời điểm bị bắn để xử lý xe chạy quá tốc độ quy định.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-sci-reg4',
    title: 'KHTN 7 - Kiểm tra Thường xuyên 4: Sóng Âm & Độ cao, Độ to của Âm thanh',
    titleEn: 'Science 7 - Regular Assessment 4: Sound Waves, Pitch & Loudness',
    grade: 7,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Nguồn âm dao động, môi trường truyền âm, tần số dao động (Héc - Hz) và biên độ dao động (Đề-xi-ben - dB).',
    descriptionEn: 'Vibrating sound sources, transmission mediums, frequency in Hertz and amplitude in decibels.',
    questions: [
      {
        question: 'Âm thanh được tạo ra khi nào?',
        options: ['Khi các vật thể dao động rung động', 'Khi vật đứng yên hoàn toàn', 'Khi vật bị đun nóng ở nhiệt độ cao', 'Khi có dòng điện chạy qua không khí'],
        answerIndex: 0,
        hint: 'Mọi nguồn âm phát ra âm thanh đều có sự dao động.',
        explanation: 'Các vật phát ra âm thanh đều dao động rung động xung quanh vị trí cân bằng.'
      },
      {
        question: 'Âm thanh KHÔNG THỂ truyền qua môi trường nào sau đây?',
        options: ['Môi trường chân không', 'Chất rắn (kim loại, gỗ)', 'Chất lỏng (nước biển)', 'Chất khí (không khí)'],
        answerIndex: 0,
        hint: 'Chân không không có các phân tử hạt vật chất để truyền dao động.',
        explanation: 'Âm thanh cần môi trường vật chất đàn hồi để lan truyền dao động, do đó không truyền được trong chân không.'
      },
      {
        question: 'Độ cao (bổng hay trầm) của âm thanh do đại lượng nào quyết định?',
        options: ['Tần số dao động (số dao động trong 1 giây, đơn vị Hz)', 'Biên độ dao động', 'Thể tích của vật phát âm', 'Khoảng cách từ nguồn âm đến tai'],
        answerIndex: 0,
        hint: 'Tần số càng lớn âm càng bổng (cao), tần số càng nhỏ âm càng trầm (thấp).',
        explanation: 'Tần số dao động quyết định độ cao của âm. Đơn vị tần số là Héc (Hz).'
      },
      {
        question: 'Đơn vị dùng để đo độ to của âm thanh là gì?',
        options: ['Đề-xi-ben (dB)', 'Héc (Hz)', 'Mét trên giây (m/s)', 'Jun (J)'],
        answerIndex: 0,
        hint: 'Ký hiệu dB.',
        explanation: 'Độ to của âm được đo bằng đơn vị đề-xi-ben (dB). Tiếng ồn trên 80 dB có thể gây ô nhiễm tiếng ồn.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-sci-final',
    title: 'KHTN 7 - Đề Kiểm Tra Cuối Học Kỳ 1 (Vật lý & Hóa học Tổng hợp)',
    titleEn: 'Natural Science 7 - Semester 1 Final Examination (Physics & Chemistry)',
    grade: 7,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối kỳ toàn diện: Nguyên tử, bảng tuần hoàn, phân tử & liên kết hóa học, tốc độ, đồ thị quãng đường - thời gian, sóng âm.',
    descriptionEn: 'Comprehensive final exam covering atomic theory, periodic trends, motion, and acoustics.',
    questions: [
      {
        question: 'Phân tử nước (H₂O) gồm những nguyên tử nào liên kết với nhau?',
        options: ['2 nguyên tử Hiđro (H) và 1 nguyên tử Oxi (O)', '1 nguyên tử Hiđro (H) và 2 nguyên tử Oxi (O)', '2 nguyên tử Cacbon (C) và 1 nguyên tử Oxi (O)', '2 nguyên tử Nitơ (N) và 1 nguyên tử Oxi (O)'],
        answerIndex: 0,
        hint: 'Công thức hóa học H₂O.',
        explanation: 'Phân tử nước cấu tạo từ 2 nguyên tử H liên kết cộng hóa trị với 1 nguyên tử O.'
      },
      {
        question: 'Một người nghe thấy tiếng sấm sau khi nhìn thấy tia chớp 3 giây. Biết tốc độ truyền âm trong không khí là 340 m/s. Khoảng cách từ người đó đến nơi phát ra tia sét là:',
        options: ['1020 mét', '340 mét', '680 mét', '170 mét'],
        answerIndex: 0,
        hint: 'Áp dụng công thức: s = v · t = 340 · 3.',
        explanation: 's = 340 · 3 = 1020 (m).'
      },
      {
        question: 'Khí nào chiếm thể tích lớn nhất (khoảng 78%) trong không khí xung quanh chúng ta?',
        options: ['Khí Nitơ (Nitrogen - N₂)', 'Khí Oxi (Oxygen - O₂)', 'Khí Cacbon đioxit (CO₂)', 'Khí Hơi nước'],
        answerIndex: 0,
        hint: 'Một chất khí trơ không màu không mùi.',
        explanation: 'Khí Nitơ chiếm khoảng 78% thể tích không khí, Oxi chiếm khoảng 21%.'
      },
      {
        question: 'Hiện tượng phản xạ âm thanh xảy ra khi nào?',
        options: ['Khi sóng âm gặp một mặt chắn và bị dội ngược trở lại', 'Khi âm truyền thẳng trong không khí', 'Khi âm bị vật xốp hút hết', 'Khi nguồn âm ngừng dao động'],
        answerIndex: 0,
        hint: 'Hiện tượng tạo ra tiếng vang trong hang động.',
        explanation: 'Âm dội lại khi gặp một mặt chắn cứng nhẵn được gọi là âm phản xạ (tiếng vang).'
      },
      {
        question: 'Nguyên tố Natri (Sodium) có ký hiệu hóa học là:',
        options: ['Na', 'S', 'So', 'N'],
        answerIndex: 0,
        hint: 'Bắt nguồn từ tiếng Latin Natrium.',
        explanation: 'Natri có ký hiệu Na, số hiệu nguyên tử 11, là kim loại kiềm nhóm IA.'
      },
      {
        question: 'Biện pháp nào sau đây giúp chống ô nhiễm tiếng ồn tại khu dân cư gần đường cao tốc?',
        options: ['Trồng dải cây xanh và xây tường cách âm cách âm', 'Bóp còi to hơn', 'Mở to cửa sổ nhà', 'Lát đường bằng sỏi đá gồ ghề'],
        answerIndex: 0,
        hint: 'Cây xanh và tường hấp thụ và phân tán sóng âm.',
        explanation: 'Trồng hàng cây xanh và dựng tường chắn cách âm là giải pháp hiệu quả làm giảm cường độ âm thanh truyền tới khu dân cư.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 1 (HỌC KỲ 1) - TIẾNG ANH 7 (GLOBAL SUCCESS)
  // =========================================================================
  {
    id: 'quiz-g7-s1-eng-reg1',
    title: 'Tiếng Anh 7 - Regular Assessment 1: Hobbies & Simple Present Tense',
    titleEn: 'English 7 - Regular Assessment 1: Hobbies & Simple Present Tense',
    grade: 7,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Unit 1: Hobbies, verbs of liking/disliking (love, like, enjoy, hate + V-ing), and present simple tense.',
    descriptionEn: 'Vocabulary on leisure activities, gerunds after verbs of preference, and present simple.',
    questions: [
      {
        question: 'Choose the correct form: "My sister enjoys __________ teddy bears and keychains."',
        options: ['collecting', 'collect', 'collected', 'to collect'],
        answerIndex: 0,
        hint: 'The verb "enjoy" is followed by a gerund (V-ing).',
        explanation: '"Enjoy + V-ing": She enjoys collecting teddy bears.'
      },
      {
        question: 'Which of the following is an outdoor hobby?',
        options: ['Gardening', 'Playing chess', 'Reading novels', 'Building dollhouses'],
        answerIndex: 0,
        hint: 'An activity done in the garden under the open sky.',
        explanation: 'Gardening (làm vườn) is an outdoor activity, while chess and reading are usually indoor hobbies.'
      },
      {
        question: 'Choose the correct sentence in the Present Simple:',
        options: ['He usually plays football with his classmates on Sundays.', 'He usually playing football on Sundays.', 'He play usually football on Sundays.', 'He is play football on Sundays.'],
        answerIndex: 0,
        hint: 'Third-person singular "he" takes "plays".',
        explanation: '"He" requires verb + s/es: "He usually plays...".'
      },
      {
        question: 'What is the opposite of "hate"?',
        options: ['Love', 'Dislike', 'Ignore', 'Refuse'],
        answerIndex: 0,
        hint: 'To feel deep affection or liking for something.',
        explanation: '"Love" is the antonym of "hate".'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-eng-reg2',
    title: 'Tiếng Anh 7 - Regular Assessment 2: Healthy Living & Imperatives with More/Less',
    titleEn: 'English 7 - Regular Assessment 2: Healthy Living & Imperatives with More/Less',
    grade: 7,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Unit 2: Health problems (acne, sunburn, flu), healthy habits, and imperative advice with more/less.',
    descriptionEn: 'Vocabulary of wellness, ailments, and imperative sentences offering health advice.',
    questions: [
      {
        question: 'Complete the health tip: "Eat __________ vegetables and __________ junk food to stay fit."',
        options: ['more - less', 'less - more', 'much - many', 'little - fewer'],
        answerIndex: 0,
        hint: 'Vegetables are good (need more), fast food is unhealthy (need less).',
        explanation: '"Eat more vegetables and less junk food" is the standard doctor advice for healthy living.'
      },
      {
        question: 'If you stay in the scorching sun for too long without suncream, you will get __________.',
        options: ['sunburn', 'flu', 'toothache', 'broken leg'],
        answerIndex: 0,
        hint: 'Red, painful skin caused by overexposure to UV rays.',
        explanation: 'Sunburn (cháy nắng) occurs when the skin is damaged by excessive sunlight.'
      },
      {
        question: 'Choose the correct advice: "I have a sore throat." - "__________."',
        options: ['You should drink warm water with honey', 'You should eat lots of ice cream', 'You should shout loudly', 'You should stay up late'],
        answerIndex: 0,
        hint: 'Warm liquids soothe the throat lining.',
        explanation: 'Drinking warm water with honey relieves sore throat irritation.'
      },
      {
        question: 'Which word has the underlined part pronounced /f/?',
        options: ['Tough', 'Rough', 'Enough', 'All of the above'],
        answerIndex: 3,
        hint: 'The "-gh" ending sounds like /f/ in all three words.',
        explanation: 'Tough, rough, and enough all end in the /f/ phoneme.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-eng-reg3',
    title: 'Tiếng Anh 7 - Regular Assessment 3: Community Service & Past Simple Tense',
    titleEn: 'English 7 - Regular Assessment 3: Community Service & Past Simple Tense',
    grade: 7,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 3: Volunteering, donating books, cleaning parks, and forming regular/irregular Past Simple verbs.',
    descriptionEn: 'Community volunteering verbs, charity projects, and past simple grammar.',
    questions: [
      {
        question: 'Last weekend, our youth club __________ 50 warm coats to children in mountain villages.',
        options: ['donated', 'donate', 'donates', 'donating'],
        answerIndex: 0,
        hint: '"Last weekend" indicates an action completed in the past (Past Simple).',
        explanation: 'The past tense of the regular verb donate is "donated".'
      },
      {
        question: 'Volunteers who help patients in hospitals without getting paid are called __________.',
        options: ['volunteers', 'employers', 'customers', 'managers'],
        answerIndex: 0,
        hint: 'People who offer their services willingly without payment.',
        explanation: 'Volunteers (tình nguyện viên) work freely to support communities and non-profits.'
      },
      {
        question: 'Choose the correct past form of the irregular verb "teach":',
        options: ['Taught', 'Teached', 'Thought', 'Tought'],
        answerIndex: 0,
        hint: 'Teach -> Taught.',
        explanation: 'The past simple of teach is "taught".'
      },
      {
        question: 'They didn\'t __________ litter in the national park yesterday.',
        options: ['drop', 'dropped', 'dropping', 'drops'],
        answerIndex: 0,
        hint: 'After "didn\'t" in negative past sentences, use bare infinitive.',
        explanation: 'Negative past simple: Subject + didn\'t + Verb (base form).'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-eng-reg4',
    title: 'Tiếng Anh 7 - Regular Assessment 4: Music and Arts & Comparisons (as...as, different from)',
    titleEn: 'English 7 - Regular Assessment 4: Music & Arts, Comparisons (as...as, different from)',
    grade: 7,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 4: Musical instruments, water puppetry, painters, and comparison structures (as...as, the same as, different from).',
    descriptionEn: 'Artistic vocabulary, exhibitions, and comparative equality/differentiation.',
    questions: [
      {
        question: 'Classical music is quite __________ modern hip-hop music.',
        options: ['different from', 'same to', 'as different', 'differs as'],
        answerIndex: 0,
        hint: 'Structure: be + different + from.',
        explanation: '"Different from" is the correct prepositional comparative phrase.'
      },
      {
        question: 'Water puppetry (múa rối nước) is a unique traditional art form originating from __________.',
        options: ['Vietnam', 'France', 'England', 'Canada'],
        answerIndex: 0,
        hint: 'Originated in the villages of the Red River Delta in northern Vietnam.',
        explanation: 'Water puppetry is an indigenous traditional folk art of Vietnam.'
      },
      {
        question: 'This exhibition is not __________ interesting as the one we saw last month.',
        options: ['as', 'more', 'too', 'same'],
        answerIndex: 0,
        hint: 'Negative comparison of equality: not as + adj + as.',
        explanation: 'Structure: not as + adjective + as.'
      },
      {
        question: 'A person who composes musical songs and melodies is a __________.',
        options: ['composer', 'painter', 'actor', 'sculptor'],
        answerIndex: 0,
        hint: 'Beethoven and Mozart were world-famous composers.',
        explanation: 'A composer (nhạc sĩ sáng tác) writes music.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-eng-final',
    title: 'Tiếng Anh 7 - Semester 1 Comprehensive Final Exam (Global Success)',
    titleEn: 'English 7 - Semester 1 Comprehensive Final Examination',
    grade: 7,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Semester 1 comprehensive English exam testing phonetics, grammar, vocabulary, reading comprehension, and error identification.',
    descriptionEn: 'End-of-term standardized evaluation covering Units 1 to 6 of Grade 7 syllabus.',
    questions: [
      {
        question: 'Find the word with the differently stressed syllable:',
        options: ['Volunteer', 'Community', 'Environment', 'Activity'],
        answerIndex: 0,
        hint: 'Vol-un-TEER (3rd syllable stress), while the others are stressed on the 2nd syllable.',
        explanation: '"Volunteer" is stressed on the third syllable /ˌvɒl.ənˈtɪər/, while the others are stressed on the second.'
      },
      {
        question: 'How __________ milk do you usually drink every morning?',
        options: ['much', 'many', 'long', 'often'],
        answerIndex: 0,
        hint: 'Milk is an uncountable noun.',
        explanation: 'Use "How much" with uncountable nouns (milk, water, rice).'
      },
      {
        question: 'The Temple of Literature (Văn Miếu - Quốc Tử Giám) __________ in 1070 under Emperor Ly Thanh Tong.',
        options: ['was founded', 'is founded', 'founded', 'was founding'],
        answerIndex: 0,
        hint: 'Passive voice in the past: was/were + V3/ed.',
        explanation: '"Was founded" is the past passive voice indicating when the historic temple was established.'
      },
      {
        question: 'You look tired. You __________ go to bed early and take a good rest.',
        options: ['should', 'mustn\'t', 'shouldn\'t', 'ought'],
        answerIndex: 0,
        hint: 'Modal verb used to give positive advice.',
        explanation: '"Should" is used to offer friendly, constructive advice.'
      },
      {
        question: 'Pho (noodle soup) is one of the most famous traditional Vietnamese __________.',
        options: ['dishes', 'beverages', 'fruits', 'spices'],
        answerIndex: 0,
        hint: 'A prepared culinary food item.',
        explanation: 'Pho is an iconic culinary dish (món ăn).'
      },
      {
        question: 'Identify the error: "He didn\'t went to school yesterday because he had a cold."',
        options: ['didn\'t went -> didn\'t go', 'to school -> for school', 'because -> so', 'had a cold -> has a cold'],
        answerIndex: 0,
        hint: 'Use bare infinitive after auxiliary "didn\'t".',
        explanation: 'After "didn\'t", the verb must be in bare infinitive: "didn\'t go".'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 1 (HỌC KỲ 1) - LỊCH SỬ VÀ ĐỊA LÝ 7
  // =========================================================================
  {
    id: 'quiz-g7-s1-hisgeo-reg1',
    title: 'Lịch sử & Địa lý 7 - Thường xuyên 1: Tây Âu từ Thế kỷ V đến Nửa đầu Thế kỷ XVI',
    titleEn: 'History & Geography 7 - Regular Assessment 1: Western Europe in the Middle Ages',
    grade: 7,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Sự hình thành chế độ phong kiến Tây Âu, lãnh địa phong kiến và vai trò của thành thị trung đại.',
    descriptionEn: 'Feudal Western Europe, feudal manors, and medieval cities development.',
    questions: [
      {
        question: 'Hai giai cấp cơ bản trong xã hội phong kiến Tây Âu thời trung đại là:',
        options: ['Lãnh chúa phong kiến và Nông nô', 'Địa chủ và Nông dân tá điền', 'Chủ nô và Nô lệ', 'Tư sản và Vô sản'],
        answerIndex: 0,
        hint: 'Lãnh chúa sở hữu đất đai rộng lớn (lãnh địa), nông nô phụ thuộc và nộp tô.',
        explanation: 'Chế độ phong kiến Tây Âu hình thành dựa trên mối quan hệ giữa lãnh chúa phong kiến và nông nô.'
      },
      {
        question: 'Đặc điểm kinh tế nổi bật nhất của lãnh địa phong kiến Tây Âu là:',
        options: ['Kinh tế tự cung, tự cấp, khép kín trong lãnh địa', 'Kinh tế hàng hóa mở rộng giao thương quốc tế', 'Phát triển công nghiệp cơ khí', 'Kinh tế thương mại điện tử'],
        answerIndex: 0,
        hint: 'Mọi nhu cầu lương thực, đồ dùng đều do nông nô sản xuất và tiêu thụ ngay trong lãnh địa.',
        explanation: 'Kinh tế lãnh địa mang tính tự cung tự cấp, nông nô tự may mặc, làm công cụ, ít trao đổi với bên ngoài.'
      },
      {
        question: 'Sự ra đời của các thành thị trung đại Tây Âu đã thúc đẩy điều gì?',
        options: ['Thúc đẩy kinh tế hàng hóa phát triển và phá vỡ nền kinh tế tự cấp tự túc', 'Kéo dài thời kỳ nô lệ', 'Xóa bỏ hoàn toàn tôn giáo', 'Dẫn tới suy thoái văn hóa'],
        answerIndex: 0,
        hint: 'Thành thị là nơi buôn bán của thương nhân và thợ thủ công.',
        explanation: 'Thành thị trung đại mở mang buôn bán trao đổi, mang lại không khí tự do dân chủ sơ khai.'
      },
      {
        question: 'Thành phần cư dân chủ yếu sinh sống và làm việc trong thành thị trung đại là:',
        options: ['Thợ thủ công và Thương nhân', 'Nông nô cày cấy', 'Các võ sĩ samurai', 'Các vua chúa'],
        answerIndex: 0,
        hint: 'Họ sản xuất hàng thủ công và trao đổi buôn bán.',
        explanation: 'Thợ thủ công và thương nhân là lực lượng dân cư nòng cốt lập nên các phường hội trong thành thị.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-hisgeo-reg2',
    title: 'Lịch sử & Địa lý 7 - Thường xuyên 2: Các cuộc Phát kiến Địa lý & Phong trào Văn hóa Phục hưng',
    titleEn: 'History & Geography 7 - Regular Assessment 2: Age of Discovery & The Renaissance',
    grade: 7,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Các chuyến thám hiểm của C.Cô-lôm-bô, Ma-gien-lan và phong trào Phục hưng rực rỡ thế kỷ XV - XVII.',
    descriptionEn: 'Maritime expeditions by Columbus and Magellan, Humanism in the Renaissance.',
    questions: [
      {
        question: 'Nhà thám hiểm nào đã chỉ huy đoàn thám hiểm đầu tiên đi vòng quanh Trái Đất bằng đường biển?',
        options: ['Phéc-năng Ma-gien-lan (Magellan)', 'Cri-xtốp Cô-lôm-bô (Columbus)', 'Vát-xcô đơ Ga-ma (Vasco da Gama)', 'Bác-tô-lô-mêu Đi-a-xơ'],
        answerIndex: 0,
        hint: 'Chuyến hải trình lịch sử kéo dài từ năm 1519 đến 1522 chứng minh Trái Đất hình cầu.',
        explanation: 'Đoàn thám hiểm của Ma-gien-lan đã thực hiện thành công chuyến đi vòng quanh thế giới đầu tiên.'
      },
      {
        question: 'Năm 1492, C.Cô-lôm-bô cùng đoàn thủy thủ đã tìm ra châu lục nào?',
        options: ['Châu Mỹ (Tân thế giới)', 'Châu Úc (Châu Đại Dương)', 'Châu Nam Cực', 'Châu Á'],
        answerIndex: 0,
        hint: 'Vùng đất mới phía Tây bờ đại dương mà ban đầu ông tưởng nhầm là bờ biển Ấn Độ.',
        explanation: 'Tháng 10/1492, Cô-lôm-bô cập bến quần đảo Ban-ha-ma, khám phá ra châu Mỹ.'
      },
      {
        question: 'Nội dung cốt lõi của phong trào Văn hóa Phục hưng là đề cao điều gì?',
        options: ['Đề cao giá trị con người (chủ nghĩa nhân văn) và khoa học thực nghiệm', 'Củng cố giáo lý thần học nghiêm ngặt của nhà thờ', 'Ủng hộ chế độ chiếm hữu nô lệ', 'Cấm đoán văn học nghệ thuật'],
        answerIndex: 0,
        hint: 'Phong trào "hồi sinh" lại tinh thần nhân văn cao đẹp của nền văn minh cổ đại Hy Lạp - La Mã.',
        explanation: 'Văn hóa Phục hưng lên án giáo hội phong kiến, đề cao tự do cá nhân và giá trị cao quý của con người.'
      },
      {
        question: 'Bức tranh bất hủ "Nàng Mô-na Li-sa" (La Gioconda) là kiệt tác của danh họa vĩ đại nào?',
        options: ['Lê-ô-na đơ Vanh-xi (Leonardo da Vinci)', 'Mi-ken-lăng-giơ (Michelangelo)', 'Ráp-pha-en (Raphael)', 'Sếch-xpia (Shakespeare)'],
        answerIndex: 0,
        hint: 'Thiên tài toàn năng người Ý thời kỳ Phục hưng.',
        explanation: 'Leonardo da Vinci là tác giả của kiệt tác Nàng Mona Lisa với nụ cười bí ẩn trường tồn.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-hisgeo-reg3',
    title: 'Lịch sử & Địa lý 7 - Thường xuyên 3: Vị trí Địa lý, Địa hình & Khoáng sản Châu Âu',
    titleEn: 'History & Geography 7 - Regular Assessment 3: Europe Geography, Relief & Resources',
    grade: 7,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Đặc điểm tự nhiên châu Âu: vị trí tiếp giáp, địa hình đồng bằng và miền núi, khí hậu ôn đới hải dương và ôn đới lục địa.',
    descriptionEn: 'European geographical boundaries, mountain ranges, plain basins, and temperate climates.',
    questions: [
      {
        question: 'Châu Âu nằm hoàn toàn ở bán cầu nào của Trái Đất?',
        options: ['Bán cầu Bắc', 'Bán cầu Nam', 'Khu vực xích đạo', 'Cực Nam'],
        answerIndex: 0,
        hint: 'Nằm từ khoảng 36°B đến 71°B.',
        explanation: 'Toàn bộ lãnh thổ châu Âu nằm ở bán cầu Bắc, thuộc đới khí hậu ôn hòa (ôn đới).'
      },
      {
        question: 'Dãy núi trẻ đồ sộ và cao nhất ở phía nam châu Âu là dãy núi nào?',
        options: ['Dãy An-pơ (Alps)', 'Dãy U-ran (Ural)', 'Dãy Xcan-đi-na-vi', 'Dãy Hi-ma-lay-a'],
        answerIndex: 0,
        hint: 'Nổi tiếng với đỉnh Mông Băng quanh năm tuyết trắng bao phủ.',
        explanation: 'Dãy An-pơ là hệ thống núi non hùng vĩ uốn lượn qua nhiều nước nam và trung Âu.'
      },
      {
        question: 'Dạng địa hình chiếm phần lớn diện tích (khoảng 2/3 diện tích) của châu Âu là:',
        options: ['Đồng bằng', 'Núi lửa', 'Sa mạc cát', 'Bình nguyên cao nguyên'],
        answerIndex: 0,
        hint: 'Tạo điều kiện thuận lợi cho sản xuất nông nghiệp và phân bố dân cư.',
        explanation: 'Địa hình đồng bằng chiếm 2/3 diện tích châu Âu, tiêu biểu là đồng bằng Đông Âu rộng lớn.'
      },
      {
        question: 'Khí hậu ven biển Tây Âu có đặc điểm gì nổi bật nhờ ảnh hưởng của dòng biển nóng Bắc Đại Tây Dương?',
        options: ['Ấm áp, ẩm ướt quanh năm, lượng mưa dồi dào', 'Khô hạn khắc nghiệt như sa mạc', 'Lạnh giá quanh năm đóng băng vĩnh cửu', 'Mưa theo mùa gió mùa châu Á'],
        answerIndex: 0,
        hint: 'Khí hậu ôn đới hải dương.',
        explanation: 'Dòng biển nóng và gió tây ôn đới mang hơi ẩm vào lục địa, làm khí hậu Tây Âu ấm áp và mưa đều quanh năm.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-hisgeo-reg4',
    title: 'Lịch sử & Địa lý 7 - Thường xuyên 4: Đô thị hóa & Cơ cấu Dân cư Châu Âu',
    titleEn: 'History & Geography 7 - Regular Assessment 4: Urbanization & Demographics in Europe',
    grade: 7,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Quy mô dân số, già hóa dân số, làn sóng nhập cư và mức độ đô thị hóa cao ở châu lục già.',
    descriptionEn: 'Population aging, migration trends, and high urban density in the European continent.',
    questions: [
      {
        question: 'Đặc điểm cơ cấu dân số theo độ tuổi nổi bật nhất ở châu Âu hiện nay là:',
        options: ['Cơ cấu dân số già (tỉ lệ người già trên 65 tuổi ngày càng tăng)', 'Cơ cấu dân số cực kỳ trẻ', 'Bùng nổ dân số với tỉ lệ sinh rất cao', 'Tỉ lệ trẻ em dưới 15 tuổi chiếm đa số'],
        answerIndex: 0,
        hint: 'Tỉ suất sinh thấp, tuổi thọ trung bình của người dân tăng cao.',
        explanation: 'Châu Âu là châu lục có cơ cấu dân số già hóa nhanh nhất thế giới, đặt ra thách thức về thiếu hụt lao động.'
      },
      {
        question: 'Tỉ lệ dân cư thành thị ở châu Âu hiện nay đạt khoảng:',
        options: ['Trên 75%', 'Dưới 30%', 'Khoảng 40%', 'Chỉ có 10%'],
        answerIndex: 0,
        hint: 'Châu Âu là một trong những châu lục có mức độ đô thị hóa cao nhất toàn cầu.',
        explanation: 'Hơn 75% dân số châu Âu sinh sống tại các khu đô thị và thành phố phát triển.'
      },
      {
        question: 'Làn sóng người nhập cư vào châu Âu chủ yếu mang lại tác động tích cực nào?',
        options: ['Bổ sung lực lượng lao động trẻ cho nền kinh tế đang già hóa', 'Làm giảm hoàn toàn mật độ dân số', 'Tự động giải quyết triệt để vấn đề khí thải', 'Xóa bỏ nhu cầu bảo hiểm xã hội'],
        answerIndex: 0,
        hint: 'Bù đắp khoảng trống thiếu hụt nhân công trong nhiều ngành nghề.',
        explanation: 'Người nhập cư trẻ tuổi đóng góp nguồn nhân lực quý giá cho thị trường lao động các nước phát triển.'
      },
      {
        question: 'Thủ đô Luân Đôn (London) thuộc quốc gia châu Âu nào?',
        options: ['Vương quốc Anh (United Kingdom)', 'Cộng hòa Pháp', 'Cộng hòa Liên bang Đức', 'Vương quốc Tây Ban Nha'],
        answerIndex: 0,
        hint: 'Nằm bên bờ sông Thêm (Thames).',
        explanation: 'Luân Đôn là thủ đô hoa lệ của Vương quốc Liên hiệp Anh và Bắc Ireland.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-hisgeo-final',
    title: 'Lịch sử & Địa lý 7 - Đề Kiểm Tra Cuối Học Kỳ 1 (Tổng hợp)',
    titleEn: 'History & Geography 7 - Semester 1 Final Examination (Comprehensive)',
    grade: 7,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối kỳ 1: Phong kiến Tây Âu, phát kiến địa lý, văn hóa Phục hưng, đặc điểm tự nhiên và dân cư châu Âu.',
    descriptionEn: 'End-of-term comprehensive evaluation of European history, geographical systems, and society.',
    questions: [
      {
        question: 'Ranh giới tự nhiên ngăn cách giữa châu Âu và châu Á ở phía đông là dãy núi nào?',
        options: ['Dãy núi U-ran (Ural)', 'Dãy núi An-pơ', 'Dãy núi Cáp-ca', 'Dãy núi Xcan-đi-na-vi'],
        answerIndex: 0,
        hint: 'Chạy dài từ bắc xuống nam trên lãnh thổ Liên bang Nga.',
        explanation: 'Dãy U-ran được coi là ranh giới tự nhiên phân chia giữa hai lục địa Âu và Á.'
      },
      {
        question: 'Phong trào Cải cách tôn giáo ở Tây Âu thế kỷ XVI đã dẫn tới sự ra đời của tôn giáo mới nào?',
        options: ['Đạo Tin Lành (Protestantism)', 'Đạo Hồi', 'Đạo Phật', 'Đạo Hin-đu'],
        answerIndex: 0,
        hint: 'Tôn giáo tách ra khỏi Giáo hội Công giáo Rô-ma do Mác-tin Lu-thơ khởi xướng.',
        explanation: 'Phong trào Cải cách tôn giáo đã khai sinh ra dòng đạo Tin Lành với giáo lý tiến bộ hơn.'
      },
      {
        question: 'Dòng sông dài nhất ở châu Âu, đổ ra biển Ca-xpi (Caspian) là:',
        options: ['Sông Vông-ga (Volga)', 'Sông Đa-nuýp (Danube)', 'Sông Ranh (Rhine)', 'Sông Thêm (Thames)'],
        answerIndex: 0,
        hint: 'Dòng sông mẹ của nước Nga dài hơn 3500 km.',
        explanation: 'Sông Vông-ga là dòng sông dài và có lưu lượng nước lớn nhất châu Âu.'
      },
      {
        question: 'Quê hương khởi phát đầu tiên của phong trào Văn hóa Phục hưng là quốc gia nào?',
        options: ['I-ta-li-a (Ý)', 'Anh', 'Tây Ban Nha', 'Đức'],
        answerIndex: 0,
        hint: 'Nơi có các thành phố phồn hoa như Florence, Venice, Roma.',
        explanation: 'Đất nước Ý với kinh tế hàng hải thịnh vượng là cái nôi đầu tiên bừng nở phong trào Phục hưng.'
      },
      {
        question: 'Phương tiện vận tải nào đóng vai trò xương sống trong giao thương đường thủy nội địa ở châu Âu?',
        options: ['Tàu thuyền qua hệ thống kênh đào và sông ngòi liên hoàn', 'Xe đạp thồ', 'Xe trượt tuyết do chó kéo', 'Thuyền buồm thô sơ'],
        answerIndex: 0,
        hint: 'Mạng lưới sông ngòi châu Âu được kết nối chặt chẽ bằng nhiều kênh đào hiện đại.',
        explanation: 'Hệ thống sông ngòi kết hợp kênh đào thông suốt giúp tàu hàng vận tải hàng hóa với chi phí rẻ.'
      },
      {
        question: 'Nguyên nhân trực tiếp dẫn tới các cuộc phát kiến địa lý thế kỷ XV - XVI là gì?',
        options: ['Con đường buôn bán tơ lụa và hương liệu truyền thống sang phương Đông bị người Ốt-tô-man chiếm giữ', 'Người châu Âu muốn di cư lên Mặt Trăng', 'Để giải quyết nạn bùng nổ dân số', 'Vì cạn kiệt nguồn nước ngọt'],
        answerIndex: 0,
        hint: 'Nhu cầu cấp bách tìm kiếm con đường biển mới sang Ấn Độ và châu Á.',
        explanation: 'Việc đế quốc Thổ Nhĩ Kỳ Ottoman chặn đường bộ sang phương Đông buộc thương nhân châu Âu phải tìm đường biển mới.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 1 (HỌC KỲ 1) - TIN HỌC 7
  // =========================================================================
  {
    id: 'quiz-g7-s1-info-reg1',
    title: 'Tin học 7 - Kiểm tra Thường xuyên 1: Thiết bị Vào - Ra & Cổng Kết nối Máy tính',
    titleEn: 'Informatics 7 - Regular Assessment 1: Input-Output Devices & Computer Ports',
    grade: 7,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Chức năng các thiết bị vào (bàn phím, chuột, máy quét) và thiết bị ra (màn hình, máy in, loa); cổng HDMI, USB.',
    descriptionEn: 'Hardware input/output components, peripheral connectors, HDMI and USB interfaces.',
    questions: [
      {
        question: 'Thiết bị nào sau đây là thiết bị VÀO (Input Device) của máy tính?',
        options: ['Bàn phím (Keyboard) và Chuột (Mouse)', 'Màn hình (Monitor)', 'Máy in (Printer)', 'Loa (Speaker)'],
        answerIndex: 0,
        hint: 'Dùng để nhập dữ liệu hoặc lệnh từ người dùng vào máy tính.',
        explanation: 'Bàn phím và chuột giúp con người nhập thông tin vào máy tính xử lý.'
      },
      {
        question: 'Cổng kết nối nào thường được dùng để truyền cả tín hiệu hình ảnh độ phân giải cao và âm thanh cùng lúc?',
        options: ['Cổng HDMI', 'Cổng cắm tai nghe 3.5mm', 'Cổng mạng LAN RJ45', 'Cổng nguồn điện'],
        answerIndex: 0,
        hint: 'High-Definition Multimedia Interface.',
        explanation: 'Cổng HDMI truyền đồng thời cả luồng video sắc nét và âm thanh kỹ thuật số đa kênh.'
      },
      {
        question: 'Khi sử dụng máy tính, thao tác nào sau đây là KHÔNG AN TOÀN cho thiết bị?',
        options: ['Rút đột ngột dây nguồn máy tính khi đang hoạt động chưa Shutdown', 'Bấm nút Shutdown trong menu Start', 'Vệ sinh bàn phím bằng cọ mềm khô', 'Đặt máy tính ở nơi khô ráo thoáng khí'],
        answerIndex: 0,
        hint: 'Ngắt điện đột ngột dễ làm hỏng ổ đĩa cứng và lỗi hệ điều hành.',
        explanation: 'Tắt máy tính bằng cách ngắt nguồn điện đột ngột có thể làm mất dữ liệu và hỏng linh kiện phần cứng.'
      },
      {
        question: 'Thiết bị nào sau đây vừa có chức năng của thiết bị vào vừa là thiết bị ra?',
        options: ['Màn hình cảm ứng (Touchscreen)', 'Máy chiếu', 'Bàn phím cơ', 'Chuột quang'],
        answerIndex: 0,
        hint: 'Vừa hiển thị hình ảnh (ra), vừa cho phép chạm tay để thao tác (vào).',
        explanation: 'Màn hình cảm ứng hiển thị nội dung (ra) và nhận thao tác chạm ngón tay (vào).'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-info-reg2',
    title: 'Tin học 7 - Kiểm tra Thường xuyên 2: Hệ Điều hành & Phần mềm Ứng dụng',
    titleEn: 'Informatics 7 - Regular Assessment 2: Operating Systems & Application Software',
    grade: 7,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Vai trò của hệ điều hành (Windows, Linux, Android, iOS), phân biệt phần mềm hệ thống và ứng dụng.',
    descriptionEn: 'Operating system functions, software hierarchy, file system management.',
    questions: [
      {
        question: 'Hệ điều hành (Operating System) đóng vai trò gì trong máy tính?',
        options: ['Là môi trường trung gian quản lý phần cứng và điều khiển các phần mềm ứng dụng', 'Chỉ dùng để gõ văn bản tiếng Việt', 'Là trò chơi giải trí trên máy tính', 'Dùng để làm sạch bụi trong thùng máy'],
        answerIndex: 0,
        hint: 'Không có hệ điều hành, máy tính không thể khởi động và sử dụng được.',
        explanation: 'Hệ điều hành quản lý toàn bộ tài nguyên phần cứng máy tính và cung cấp giao diện tương tác cho người dùng.'
      },
      {
        question: 'Hệ điều hành nào phổ biến nhất trên các dòng điện thoại thông minh hiện nay?',
        options: ['Android và iOS', 'Windows 95', 'MS-DOS', 'macOS Sonoma'],
        answerIndex: 0,
        hint: 'Của Google và Apple.',
        explanation: 'Android (Google) và iOS (Apple) chiếm hơn 99% thị phần hệ điều hành di động thế giới.'
      },
      {
        question: 'Phần mềm nào sau đây là phần mềm ỨNG DỤNG?',
        options: ['Microsoft Word (soạn thảo văn bản)', 'Windows 11', 'Linux Ubuntu', 'iOS 17'],
        answerIndex: 0,
        hint: 'Phần mềm phục vụ một mục đích công việc cụ thể của con người.',
        explanation: 'Microsoft Word là phần mềm ứng dụng phục vụ nhu cầu tạo và chỉnh sửa tài liệu.'
      },
      {
        question: 'Đuôi mở rộng của tệp tin thường dùng để xác định điều gì?',
        options: ['Định dạng kiểu tệp và phần mềm có thể mở tệp đó (ví dụ .docx, .xlsx, .pdf)', 'Dung lượng bộ nhớ RAM của máy', 'Tên của người đã tạo tệp', 'Thời gian máy tính kết nối Internet'],
        answerIndex: 0,
        hint: 'Ví dụ .jpg là ảnh, .mp3 là âm thanh.',
        explanation: 'Phần mở rộng (file extension) báo cho hệ điều hành biết loại tệp và chương trình mặc định tương ứng.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-info-reg3',
    title: 'Tin học 7 - Kiểm tra Thường xuyên 3: Mạng Xã hội & Ứng xử Văn hóa Không gian mạng',
    titleEn: 'Informatics 7 - Regular Assessment 3: Social Media & Cyber Ethics',
    grade: 7,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Ưu và nhược điểm của mạng xã hội, phòng chống lừa đảo trực tuyến, bảo vệ thông tin riêng tư và bản quyền.',
    descriptionEn: 'Pros and cons of social networks, privacy protection, cyberbullying prevention, digital copyright.',
    questions: [
      {
        question: 'Hành vi nào sau đây là VI PHẠM pháp luật và đạo đức trên mạng xã hội?',
        options: ['Đăng tải tin tức bịa đặt, vu khống làm nhục người khác hoặc chia sẻ thông tin độc hại', 'Chia sẻ những bài học bổ ích cho bạn bè', 'Bình luận lịch sự động viên người khác', 'Đổi mật khẩu tài khoản định kỳ'],
        answerIndex: 0,
        hint: 'Hành vi phát tán tin giả, bôi nhọ nhân phẩm.',
        explanation: 'Luật An ninh mạng nghiêm cấm tung tin thất thiệt, xuyên tạc bôi nhọ người khác trên Internet.'
      },
      {
        question: 'Để bảo vệ tài khoản mạng xã hội an toàn trước hacker, học sinh NÊN làm gì?',
        options: ['Đặt mật khẩu mạnh gồm chữ hoa, chữ thường, số, ký tự đặc biệt và bật xác thực 2 bước', 'Chia sẻ mật khẩu cho tất cả bạn cùng lớp', 'Đặt mật khẩu là ngày sinh nhật hoặc 123456', 'Đăng nhập tài khoản trên các máy tính công cộng mà không thoát ra'],
        answerIndex: 0,
        hint: 'Mật khẩu phức tạp và bảo mật 2 lớp chống xâm nhập.',
        explanation: 'Mật khẩu mạnh kèm xác thực 2 lớp (2FA) bảo vệ tài khoản tối ưu khỏi nguy cơ bị đánh cắp.'
      },
      {
        question: 'Khi nhận được một đường link lạ hứa hẹn tặng quà hoặc tiền thưởng miễn phí từ người không quen biết, em nên làm gì?',
        options: ['Tuyệt đối không nhấn vào link và chặn/báo cáo tài khoản nghi ngờ lừa đảo', 'Nhấn ngay vào để nhận thưởng', 'Nhập thông tin tài khoản ngân hàng của bố mẹ', 'Chuyển tiếp link cho tất cả bạn bè'],
        answerIndex: 0,
        hint: 'Cảnh giác với thủ đoạn lừa đảo giả mạo (Phishing).',
        explanation: 'Đường link lạ thường chứa mã độc hoặc trang web giả mạo đánh cắp tài khoản ngân hàng và dữ liệu cá nhân.'
      },
      {
        question: 'Quyền tác giả (Bản quyền) trên không gian số bảo vệ điều gì?',
        options: ['Bảo vệ các tác phẩm trí tuệ (phần mềm, bài hát, tranh ảnh, bài viết) của người sáng tạo', 'Cho phép bất kỳ ai lấy bài của người khác để bán kiếm tiền', 'Bắt buộc mọi người phải xóa tài khoản', 'Cấm mọi người tra cứu tài liệu'],
        answerIndex: 0,
        hint: 'Tôn trọng chất xám của tác giả.',
        explanation: 'Bản quyền bảo vệ quyền sở hữu trí tuệ hợp pháp của tác giả đối với sáng tạo của họ.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-info-reg4',
    title: 'Tin học 7 - Kiểm tra Thường xuyên 4: Bảng tính Điện tử & Nhập liệu trong Excel',
    titleEn: 'Informatics 7 - Regular Assessment 4: Spreadsheet Software & Data Entry',
    grade: 7,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Giao diện bảng tính (hàng, cột, ô), nhập dữ liệu số và văn bản, địa chỉ ô (A1, B5) và khối ô.',
    descriptionEn: 'Spreadsheet interface, rows, columns, cell addresses, data types, and range selections.',
    questions: [
      {
        question: 'Giao điểm của một cột và một hàng trong phần mềm bảng tính được gọi là gì?',
        options: ['Ô tính (Cell)', 'Bảng (Table)', 'Thanh công cụ (Ribbon)', 'Trang giấy (Page)'],
        answerIndex: 0,
        hint: 'Nơi chứa dữ liệu và công thức tính toán.',
        explanation: 'Giao điểm của một cột và một hàng tạo thành một ô tính, có địa chỉ xác định như A1, B3.'
      },
      {
        question: 'Trong bảng tính Excel, địa chỉ ô tính được viết theo quy tắc nào?',
        options: ['Tên cột đứng trước, tên hàng đứng sau (Ví dụ: C5)', 'Tên hàng trước, tên cột sau (Ví dụ: 5C)', 'Chỉ viết tên hàng', 'Chỉ viết tên cột'],
        answerIndex: 0,
        hint: 'Cột ký hiệu bằng chữ cái A, B, C; hàng ký hiệu bằng số 1, 2, 3.',
        explanation: 'Địa chỉ ô luôn bắt đầu bằng chữ cái của cột theo sau là số của hàng (VD: C5).'
      },
      {
        question: 'Dữ liệu số (Number) khi nhập vào ô tính mặc định sẽ được căn lề nào?',
        options: ['Căn lề phải', 'Căn lề trái', 'Căn chính giữa', 'Căn đều hai bên'],
        answerIndex: 0,
        hint: 'Ngược lại với dữ liệu văn bản (căn trái).',
        explanation: 'Mặc định trong bảng tính, dữ liệu số căn phải để các hàng đơn vị thẳng cột với nhau.'
      },
      {
        question: 'Khối ô từ ô B2 đến ô D6 được ký hiệu là:',
        options: ['B2:D6', 'B2-D6', 'B2..D6', 'B2/D6'],
        answerIndex: 0,
        hint: 'Dùng dấu hai chấm (:) ngăn cách giữa ô góc trên bên trái và ô góc dưới bên phải.',
        explanation: 'Khối ô trong phần mềm bảng tính được ký hiệu bằng dấu hai chấm, ví dụ B2:D6.'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-info-final',
    title: 'Tin học 7 - Đề Kiểm Tra Cuối Học Kỳ 1 (Tổng hợp Kỹ thuật số)',
    titleEn: 'Informatics 7 - Semester 1 Final Examination (Comprehensive)',
    grade: 7,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối học kỳ 1: Thiết bị phần cứng, hệ điều hành, mạng xã hội, an toàn thông tin và kiến thức bảng tính.',
    descriptionEn: 'End-of-term evaluation covering computer architecture, operating environments, digital safety, and spreadsheets.',
    questions: [
      {
        question: 'Bộ phận nào được ví như "bộ não" điều khiển mọi hoạt động tính toán và xử lý của máy tính?',
        options: ['CPU (Bộ vi xử lý trung tâm)', 'RAM (Bộ nhớ trong)', 'Ổ cứng SSD', 'Bộ nguồn máy tính (PSU)'],
        answerIndex: 0,
        hint: 'Central Processing Unit.',
        explanation: 'CPU là bộ xử lý trung tâm đóng vai trò như bộ não điều hành toàn bộ máy tính.'
      },
      {
        question: 'Để tính tổng các giá trị trong khối ô A1:A5 trong Excel, ta dùng hàm nào sau đây?',
        options: ['=SUM(A1:A5)', '=AVERAGE(A1:A5)', '=MAX(A1:A5)', '=COUNT(A1:A5)'],
        answerIndex: 0,
        hint: 'Hàm tính tổng bắt đầu bằng SUM.',
        explanation: 'Hàm =SUM(A1:A5) cộng toàn bộ các giá trị từ ô A1 đến ô A5.'
      },
      {
        question: 'Khi sao chép công thức chứa địa chỉ tương đối trong Excel sang ô khác, địa chỉ ô sẽ:',
        options: ['Tự động thay đổi tương ứng theo vị trí mới', 'Giữ nguyên không bao giờ thay đổi', 'Báo lỗi #VALUE!', 'Xóa trắng dữ liệu'],
        answerIndex: 0,
        hint: 'Tính chất thông minh của địa chỉ tương đối.',
        explanation: 'Địa chỉ tương đối tự động dịch chuyển hàng và cột tương ứng khi sao chép công thức.'
      },
      {
        question: 'Bộ nhớ RAM khác với ổ cứng SSD ở đặc điểm nào sau đây?',
        options: ['Dữ liệu trong RAM sẽ bị mất sạch khi tắt nguồn máy tính (bộ nhớ tạm thời)', 'RAM lưu trữ dữ liệu vĩnh viễn', 'RAM có dung lượng lớn hơn ổ cứng', 'RAM dùng để in văn bản'],
        answerIndex: 0,
        hint: 'RAM là bộ nhớ khả biến (volatile memory).',
        explanation: 'RAM là bộ nhớ truy xuất ngẫu nhiên tạm thời, mất toàn bộ dữ liệu khi ngắt điện.'
      },
      {
        question: 'Tác hại nghiêm trọng của việc nghiện mạng xã hội và chơi game trực tuyến quá độ là:',
        options: ['Giảm thị lực, sa sút kết quả học tập và hạn chế giao tiếp thực tế với gia đình bạn bè', 'Giúp thông minh hơn mà không cần đi học', 'Tự động có nhiều tiền thưởng', 'Làm cho mắt sáng hơn'],
        answerIndex: 0,
        hint: 'Ảnh hưởng tiêu cực đến sức khỏe thể chất và tâm lý.',
        explanation: 'Lạm dụng mạng xã hội gây lười vận động, giảm thị lực, mất tập trung và cô lập với thế giới thực.'
      }
    ]
  },
  // =========================================================================
  // SEMESTER 2 (HỌC KỲ 2) - TOÁN HỌC 7
  // =========================================================================
  {
    id: 'quiz-g7-s2-math-reg1',
    title: 'Toán 7 - Kiểm tra Thường xuyên 1: Tỉ lệ thức & Dãy tỉ số bằng nhau',
    titleEn: 'Math 7 - Regular Assessment 1: Proportions & Equal Ratios',
    grade: 7,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Định nghĩa tỉ lệ thức a/b = c/d, tính chất tích chéo a.d = b.c và tính chất dãy tỉ số bằng nhau.',
    descriptionEn: 'Proportion definitions, cross-multiplication property, and equal ratio chains.',
    questions: [
      {
        question: 'Từ tỉ lệ thức 3/x = 9/15, tìm giá trị của x:',
        options: ['x = 5', 'x = 3', 'x = 45', 'x = 1/5'],
        answerIndex: 0,
        hint: 'Tích ngoại tỉ bằng tích trung tỉ: 9 · x = 3 · 15.',
        explanation: '9x = 45 => x = 45 / 9 = 5.'
      },
      {
        question: 'Áp dụng tính chất của dãy tỉ số bằng nhau, từ a/2 = b/3 ta có:',
        options: ['(a + b)/(2 + 3)', '(a - b)/(3 - 2)', '(a · b)/(2 · 3)', '(a + b)/(2 · 3)'],
        answerIndex: 0,
        hint: 'Cộng các tử số tương ứng với cộng các mẫu số.',
        explanation: 'a/2 = b/3 = (a + b)/(2 + 3) = (a + b)/5.'
      },
      {
        question: 'Hai đại lượng x và y tỉ lệ thuận với nhau theo công thức y = k · x (k ≠ 0). Khi x = 3 thì y = 12. Hệ số tỉ lệ k là:',
        options: ['k = 4', 'k = 36', 'k = 1/4', 'k = 9'],
        answerIndex: 0,
        hint: 'k = y / x.',
        explanation: 'k = 12 / 3 = 4.'
      },
      {
        question: 'Nếu hai đại lượng x và y tỉ lệ nghịch với nhau thì tích x · y luôn:',
        options: ['Không đổi (bằng hằng số a ≠ 0)', 'Bằng 0', 'Tăng dần theo thời gian', 'Bằng 1'],
        answerIndex: 0,
        hint: 'Định nghĩa hai đại lượng tỉ lệ nghịch x · y = a.',
        explanation: 'Hai đại lượng tỉ lệ nghịch có tích luôn là hằng số a khác 0.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-math-reg2',
    title: 'Toán 7 - Kiểm tra Thường xuyên 2: Tam giác Bằng nhau (c-c-c, c-g-c, g-c-g)',
    titleEn: 'Math 7 - Regular Assessment 2: Triangle Congruence (SSS, SAS, ASA)',
    grade: 7,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Ba trường hợp bằng nhau của tam giác thường và các trường hợp bằng nhau của tam giác vuông.',
    descriptionEn: 'Triangle congruence criteria for general and right triangles.',
    questions: [
      {
        question: 'Để hai tam giác bằng nhau theo trường hợp góc - cạnh - góc (g-c-g), cạnh bằng nhau phải thỏa mãn điều kiện gì?',
        options: ['Là cạnh kề giữa hai góc tương ứng bằng nhau', 'Là cạnh đối diện góc vuông', 'Là cạnh dài nhất trong tam giác', 'Bất kỳ cạnh nào không quan trọng'],
        answerIndex: 0,
        hint: 'Cạnh phải nằm kề giữa hai góc đó.',
        explanation: 'Trường hợp g-c-g đòi hỏi hai góc và cạnh xen giữa của tam giác này bằng hai góc và cạnh xen giữa của tam giác kia.'
      },
      {
        question: 'Tam giác cân có hai cạnh bên bằng nhau thì hai góc ở đáy có đặc điểm gì?',
        options: ['Bằng nhau', 'Bù nhau', 'Phụ nhau', 'Một góc gấp đôi góc kia'],
        answerIndex: 0,
        hint: 'Tính chất cơ bản của tam giác cân.',
        explanation: 'Trong một tam giác cân, hai góc ở đáy luôn luôn bằng nhau.'
      },
      {
        question: 'Tam giác vuông có một góc nhọn bằng 45° là tam giác gì?',
        options: ['Tam giác vuông cân', 'Tam giác đều', 'Tam giác tù', 'Tam giác vuông thường'],
        answerIndex: 0,
        hint: 'Góc nhọn còn lại = 90° - 45° = 45°.',
        explanation: 'Tam giác vuông có hai góc nhọn cùng bằng 45° là tam giác vuông cân.'
      },
      {
        question: 'Trong tam giác vuông, cạnh đối diện với góc vuông được gọi là:',
        options: ['Cạnh huyền', 'Cạnh góc vuông', 'Đường cao', 'Đường trung tuyến'],
        answerIndex: 0,
        hint: 'Cạnh dài nhất trong tam giác vuông.',
        explanation: 'Cạnh huyền là cạnh đối diện với góc vuông.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-math-reg3',
    title: 'Toán 7 - Kiểm tra Thường xuyên 3: Biểu thức Đại số & Đa thức Một biến',
    titleEn: 'Math 7 - Regular Assessment 3: Algebraic Expressions & Polynomials',
    grade: 7,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Đơn thức, đa thức một biến, bậc của đa thức, cộng trừ đa thức và nghiệm của đa thức một biến.',
    descriptionEn: 'Single-variable polynomials, degrees, coefficient evaluation, addition and subtraction.',
    questions: [
      {
        question: 'Bậc của đa thức P(x) = 3x⁴ - 5x² + 7x - 2 là:',
        options: ['4', '3', '2', '1'],
        answerIndex: 0,
        hint: 'Số mũ lớn nhất của biến trong đa thức đã thu gọn.',
        explanation: 'Bậc của P(x) là 4 vì hạng tử 3x⁴ có số mũ cao nhất là 4.'
      },
      {
        question: 'Hệ số cao nhất của đa thức Q(x) = -4x³ + 2x² - x + 9 là:',
        options: ['-4', '9', '2', '-1'],
        answerIndex: 0,
        hint: 'Hệ số của lũy thừa có số mũ cao nhất.',
        explanation: 'Hệ số cao nhất là hệ số của x³, tức là -4.'
      },
      {
        question: 'Giá trị nào sau đây là nghiệm của đa thức f(x) = 2x - 6?',
        options: ['x = 3', 'x = -3', 'x = 6', 'x = 0'],
        answerIndex: 0,
        hint: 'Nghiệm làm cho đa thức có giá trị bằng 0: 2x - 6 = 0.',
        explanation: '2(3) - 6 = 6 - 6 = 0, nên x = 3 là nghiệm của f(x).'
      },
      {
        question: 'Thu gọn đơn thức M = (2x²) · (-3x³) ta được:',
        options: ['-6x⁵', '-6x⁶', '5x⁵', '-x⁵'],
        answerIndex: 0,
        hint: 'Nhân hệ số với hệ số, nhân biến với biến (cộng số mũ 2 + 3).',
        explanation: '2 · (-3) = -6; x² · x³ = x⁵ => M = -6x⁵.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-math-reg4',
    title: 'Toán 7 - Kiểm tra Thường xuyên 4: Các đường Đồng quy trong Tam giác',
    titleEn: 'Math 7 - Regular Assessment 4: Concurrent Lines in a Triangle',
    grade: 7,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Giao điểm ba đường trung tuyến (trọng tâm), ba đường phân giác, ba đường cao (trực tâm) và ba đường trung trực.',
    descriptionEn: 'Centroid, incenter, orthocenter, and circumcenter of a triangle.',
    questions: [
      {
        question: 'Ba đường trung tuyến của một tam giác cùng đi qua một điểm. Điểm đó được gọi là:',
        options: ['Trọng tâm của tam giác', 'Trực tâm của tam giác', 'Tâm đường tròn ngoại tiếp', 'Tâm đường tròn nội tiếp'],
        answerIndex: 0,
        hint: 'Điểm này cách mỗi đỉnh một khoảng bằng 2/3 độ dài đường trung tuyến tương ứng.',
        explanation: 'Giao điểm của ba đường trung tuyến gọi là trọng tâm (Centroid).'
      },
      {
        question: 'Giao điểm của ba đường cao trong một tam giác được gọi là:',
        options: ['Trực tâm của tam giác', 'Trọng tâm', 'Tâm đối xứng', 'Tâm tỉ lệ'],
        answerIndex: 0,
        hint: 'Orthocenter.',
        explanation: 'Trực tâm là giao điểm của ba đường cao trong tam giác.'
      },
      {
        question: 'Điểm cách đều ba đỉnh của một tam giác là giao điểm của:',
        options: ['Ba đường trung trực', 'Ba đường phân giác', 'Ba đường trung tuyến', 'Ba đường cao'],
        answerIndex: 0,
        hint: 'Tâm của đường tròn đi qua cả ba đỉnh (đường tròn ngoại tiếp).',
        explanation: 'Ba đường trung trực của tam giác đồng quy tại một điểm cách đều 3 đỉnh.'
      },
      {
        question: 'Trong một tam giác, đoạn thẳng vuông góc kẻ từ một đỉnh đến đường thẳng chứa cạnh đối diện gọi là:',
        options: ['Đường cao', 'Đường trung tuyến', 'Đường phân giác', 'Đường trung trực'],
        answerIndex: 0,
        hint: 'Hạ vuông góc từ đỉnh.',
        explanation: 'Đoạn thẳng vuông góc kẻ từ đỉnh xuống cạnh đối diện là đường cao.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-math-final',
    title: 'Toán 7 - Đề Kiểm Tra Cuối Học Kỳ 2 (Tổng kết Năm học)',
    titleEn: 'Math 7 - Semester 2 Final Examination (Year-End Review)',
    grade: 7,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp kiến thức cả năm học Toán 7: Tỉ lệ thức, đa thức một biến, tam giác bằng nhau, tam giác cân, các đường đồng quy.',
    descriptionEn: 'End-of-year comprehensive final exam covering algebra, polynomials, and triangle properties.',
    questions: [
      {
        question: 'Cho hai đa thức A(x) = 2x² - 3x + 1 và B(x) = x² + 3x - 5. Tính tổng P(x) = A(x) + B(x):',
        options: ['P(x) = 3x² - 4', 'P(x) = 3x² + 6x - 4', 'P(x) = x² - 4', 'P(x) = 3x² - 6x - 4'],
        answerIndex: 0,
        hint: 'Cộng các hạng tử đồng dạng: (2+1)x² + (-3+3)x + (1-5).',
        explanation: 'P(x) = 3x² + 0x - 4 = 3x² - 4.'
      },
      {
        question: 'Cho tam giác DEF cân tại D có góc D = 80°. Số đo góc E ở đáy là:',
        options: ['50°', '80°', '100°', '40°'],
        answerIndex: 0,
        hint: 'Tổng hai góc ở đáy = 180° - 80° = 100° => Góc E = 100° / 2.',
        explanation: 'Góc E = (180° - 80°) / 2 = 50°.'
      },
      {
        question: 'Biết 3 công nhân làm xong một công việc trong 12 ngày. Hỏi 6 công nhân (với cùng năng suất) làm xong công việc đó trong bao nhiêu ngày?',
        options: ['6 ngày', '24 ngày', '9 ngày', '4 ngày'],
        answerIndex: 0,
        hint: 'Số công nhân và thời gian hoàn thành là hai đại lượng tỉ lệ nghịch: 3 · 12 = 6 · x.',
        explanation: 'x = (3 · 12) / 6 = 6 (ngày).'
      },
      {
        question: 'Khẳng định nào sau đây là ĐÚNG về quan hệ giữa cạnh và góc đối diện trong một tam giác?',
        options: ['Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn', 'Cạnh đối diện với góc lớn hơn là cạnh nhỏ hơn', 'Tam giác có ba góc bằng nhau thì ba cạnh không bằng nhau', 'Cạnh huyền luôn ngắn hơn cạnh góc vuông'],
        answerIndex: 0,
        hint: 'Định lý về quan hệ giữa cạnh và góc đối diện trong tam giác.',
        explanation: 'Trong một tam giác, đối diện với cạnh lớn hơn là góc lớn hơn.'
      },
      {
        question: 'Đa thức nào sau đây KHÔNG CÓ NGHIỆM trên tập số thực ℝ?',
        options: ['g(x) = x² + 4', 'f(x) = x² - 4', 'h(x) = 2x + 1', 'k(x) = x³ - 1'],
        answerIndex: 0,
        hint: 'x² ≥ 0 với mọi x nên x² + 4 ≥ 4 > 0.',
        explanation: 'Vì x² ≥ 0 nên x² + 4 luôn lớn hơn hoặc bằng 4 > 0, do đó g(x) vô nghiệm.'
      },
      {
        question: 'Trọng tâm G của tam giác ABC chia đường trung tuyến AM thành hai đoạn theo tỉ lệ nào?',
        options: ['AG = 2/3 AM', 'AG = 1/2 AM', 'AG = 3/4 AM', 'AG = 1/3 AM'],
        answerIndex: 0,
        hint: 'Tính chất trọng tâm tam giác.',
        explanation: 'Trọng tâm cách đỉnh một khoảng bằng 2/3 độ dài đường trung tuyến đi qua đỉnh đó.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2 (HỌC KỲ 2) - KHOA HỌC TỰ NHIÊN 7
  // =========================================================================
  {
    id: 'quiz-g7-s2-sci-reg1',
    title: 'KHTN 7 - Kiểm tra Thường xuyên 1: Ánh sáng & Định luật Phản xạ Ánh sáng',
    titleEn: 'Science 7 - Regular Assessment 1: Light & The Law of Reflection',
    grade: 7,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Năng lượng ánh sáng, tia sáng, chùm sáng, định luật phản xạ ánh sáng trên gương phẳng.',
    descriptionEn: 'Light rays, beam paths, and the law of planar reflection.',
    questions: [
      {
        question: 'Theo định luật phản xạ ánh sáng, góc phản xạ (i\') và góc tới (i) có mối quan hệ như thế nào?',
        options: ['Góc phản xạ luôn bằng góc tới (i\' = i)', 'Góc phản xạ luôn lớn hơn góc tới', 'Góc phản xạ luôn gấp đôi góc tới', 'Góc phản xạ cộng góc tới luôn bằng 180°'],
        answerIndex: 0,
        hint: 'Định luật phản xạ ánh sáng.',
        explanation: 'Định luật phản xạ ánh sáng khẳng định góc phản xạ luôn bằng góc tới (i\' = i).'
      },
      {
        question: 'Chiếu một tia sáng tới mặt gương phẳng sao cho góc tới bằng 30°. Góc phản xạ thu được là:',
        options: ['30°', '60°', '90°', '15°'],
        answerIndex: 0,
        hint: 'i\' = i.',
        explanation: 'Vì i = 30° nên góc phản xạ i\' = 30°.'
      },
      {
        question: 'Ảnh của một vật tạo bởi gương phẳng có tính chất nào sau đây?',
        options: ['Là ảnh ảo, cùng kích thước với vật, cách gương một khoảng bằng khoảng cách từ vật đến gương', 'Là ảnh thật hứng được trên màn chắn', 'Là ảnh ảo nhỏ hơn vật', 'Là ảnh ảo ngược chiều với vật'],
        answerIndex: 0,
        hint: 'Tính chất ảnh tạo bởi gương phẳng thông thường soi mặt hàng ngày.',
        explanation: 'Gương phẳng tạo ảnh ảo, không hứng được trên màn, có độ lớn bằng vật và đối xứng qua gương.'
      },
      {
        question: 'Hiện tượng vùng tối và vùng nửa tối xuất hiện phía sau vật cản sáng là bằng chứng thực tế chứng minh:',
        options: ['Ánh sáng truyền đi theo đường thẳng trong môi trường trong suốt đồng tính', 'Ánh sáng truyền đi theo đường cong zích zắc', 'Ánh sáng bị uốn cong bởi gió', 'Ánh sáng không thể phản xạ'],
        answerIndex: 0,
        hint: 'Định luật truyền thẳng của ánh sáng.',
        explanation: 'Sự hình thành bóng tối chứng minh ánh sáng truyền thẳng trong môi trường trong suốt và đồng tính.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-sci-reg2',
    title: 'KHTN 7 - Kiểm tra Thường xuyên 2: Từ trường, Nam châm & La bàn',
    titleEn: 'Science 7 - Regular Assessment 2: Magnetic Fields, Magnets & Compasses',
    grade: 7,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Nam châm vĩnh cửu, hai cực từ (Bắc - Nam), từ trường Trái Đất và nguyên lý hoạt động của la bàn.',
    descriptionEn: 'Permanent magnets, magnetic poles, Earth magnetic shield, and compass direction finding.',
    questions: [
      {
        question: 'Khi đưa hai cực từ cùng tên của hai thanh nam châm lại gần nhau thì chúng sẽ:',
        options: ['Đẩy nhau', 'Hút nhau', 'Không có hiện tượng gì', 'Lúc hút lúc đẩy ngẫu nhiên'],
        answerIndex: 0,
        hint: 'Quy tắc tương tác từ: Cùng tên thì đẩy, khác tên thì hút.',
        explanation: 'Hai cực cùng tên (Bắc - Bắc hoặc Nam - Nam) đẩy nhau, hai cực khác tên hút nhau.'
      },
      {
        question: 'Kim la bàn luôn định hướng theo phương nào khi để tự do trên mặt phẳng ngang xa các vật nhiễm từ?',
        options: ['Phương Bắc - Nam địa lý', 'Phương Đông - Tây', 'Phương thẳng đứng', 'Quay tròn liên tục'],
        answerIndex: 0,
        hint: 'Do chịu tác dụng của từ trường Trái Đất.',
        explanation: 'Từ trường Trái Đất định hướng kim la bàn luôn nằm dọc theo phương Bắc - Nam.'
      },
      {
        question: 'Kim loại nào sau đây bị nam châm hút mạnh?',
        options: ['Sắt (Fe) và Thép', 'Nhôm (Al)', 'Đồng (Cu)', 'Vàng (Au)'],
        answerIndex: 0,
        hint: 'Vật liệu sắt từ.',
        explanation: 'Sắt, niken, coban là những vật liệu từ bị nam châm hút mạnh.'
      },
      {
        question: 'Đường sức từ xung quanh một thanh nam châm thẳng có chiều quy ước như thế nào?',
        options: ['Đi ra từ cực Bắc (N) và đi vào cực Nam (S)', 'Đi ra từ cực Nam và đi vào cực Bắc', 'Đi tròn đồng tâm', 'Không có chiều xác định'],
        answerIndex: 0,
        hint: 'Quy tắc "Vào Nam - Ra Bắc".',
        explanation: 'Bên ngoài nam châm, đường sức từ có chiều đi ra từ cực Bắc (North) và đi vào cực Nam (South).'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-sci-reg3',
    title: 'KHTN 7 - Kiểm tra Thường xuyên 3: Trao đổi Chất, Năng lượng & Quang hợp ở Thực vật',
    titleEn: 'Science 7 - Regular Assessment 3: Plant Metabolism & Photosynthesis',
    grade: 7,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Phương trình quang hợp, bào quan lục lạp, vai trò của diệp lục và sản phẩm tạo thành (chất hữu cơ & O₂).',
    descriptionEn: 'Photosynthetic reaction, chloroplasts, chlorophyll light absorption, and glucose synthesis.',
    questions: [
      {
        question: 'Bào quan nào trong tế bào thực vật là nơi trực tiếp diễn ra quá trình quang hợp?',
        options: ['Lục lạp (chứa chất diệp lục)', 'Ti thể', 'Không bào', 'Nhân tế bào'],
        answerIndex: 0,
        hint: 'Bào quan có màu xanh lục hấp thụ ánh sáng mặt trời.',
        explanation: 'Lục lạp chứa sắc tố diệp lục có khả năng hấp thụ năng lượng ánh sáng để quang hợp.'
      },
      {
        question: 'Nguyên liệu đầu vào của quá trình quang hợp ở thực vật gồm có:',
        options: ['Nước (H₂O) và Khí cacbonic (CO₂)', 'Khí oxi và chất hữu cơ', 'Chỉ có ánh sáng mặt trời', 'Chất khoáng và khí nitơ'],
        answerIndex: 0,
        hint: 'Cây hút nước từ rễ và hấp thụ CO₂ từ không khí qua khí khổng.',
        explanation: 'Phương trình quang hợp: Nước + Carbon dioxide + Năng lượng ánh sáng -> Glucose + Oxygen.'
      },
      {
        question: 'Sản phẩm giải phóng ra môi trường trong quá trình quang hợp có ý nghĩa sống còn đối với sự hô hấp của con người là:',
        options: ['Khí Oxi (Oxygen - O₂)', 'Khí Cacbonic (CO₂)', 'Khí Nitơ (N₂)', 'Khí Mê-tan (CH₄)'],
        answerIndex: 0,
        hint: 'Dưỡng khí nuôi dưỡng mọi sự sống hiếu khí.',
        explanation: 'Quang hợp của cây xanh tạo ra khí O₂ duy trì sự sống và hô hấp của muôn loài trên Trái Đất.'
      },
      {
        question: 'Tại sao không nên để nhiều chậu hoa cây cảnh dày đặc trong phòng ngủ đóng kín cửa vào ban đêm?',
        options: ['Ban đêm cây không quang hợp mà chỉ hô hấp lấy O₂ và thải CO₂, dễ gây ngạt thở cho người', 'Cây sẽ hút hết hơi ẩm làm phòng quá khô', 'Cây sẽ sinh ra côn trùng cắn', 'Cây làm giảm nhiệt độ phòng quá lạnh'],
        answerIndex: 0,
        hint: 'Ban đêm không có ánh sáng cây hô hấp cạnh tranh khí thở Oxi.',
        explanation: 'Vào ban đêm không có ánh sáng, cây thực hiện hô hấp tế bào tiêu thụ O₂ và thải ra CO₂, có thể gây ngạt.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-sci-reg4',
    title: 'KHTN 7 - Kiểm tra Thường xuyên 4: Hô hấp Tế bào & Vận chuyển các chất trong Cây',
    titleEn: 'Science 7 - Regular Assessment 4: Cellular Respiration & Transport in Plants',
    grade: 7,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Hô hấp tế bào giải phóng năng lượng ATP, mạch gỗ (xylem) vận chuyển nước khoáng và mạch rây (phloem) dẫn chất hữu cơ.',
    descriptionEn: 'Cellular ATP generation, xylem transport of water and phloem translocating sucrose.',
    questions: [
      {
        question: 'Mạch gỗ (xylem) trong thân cây có chức năng chính là gì?',
        options: ['Vận chuyển nước và muối khoáng hòa tan từ rễ lên thân và lá', 'Vận chuyển chất hữu cơ từ lá xuống rễ', 'Bảo vệ thân cây chống vi khuẩn', 'Thực hiện quá trình quang hợp'],
        answerIndex: 0,
        hint: 'Dòng vận chuyển một chiều đi từ dưới rễ ngược lên ngọn.',
        explanation: 'Mạch gỗ vận chuyển dòng nước và chất khoáng hút từ đất lên khắp các cơ quan của cây.'
      },
      {
        question: 'Bào quan được ví như "nhà máy năng lượng" của tế bào thực hiện hô hấp tế bào là:',
        options: ['Ti thể (Mitochondria)', 'Lục lạp', 'Bộ máy Golgi', 'Ribosome'],
        answerIndex: 0,
        hint: 'Nơi tổng hợp phần lớn các phân tử năng lượng ATP.',
        explanation: 'Ti thể là bào quan chuyên biệt thực hiện quá trình oxy hóa chất hữu cơ tạo ra năng lượng ATP.'
      },
      {
        question: 'Hiện tượng thoát hơi nước qua khí khổng ở lá cây có vai trò chủ yếu nào?',
        options: ['Tạo lực hút kéo dòng nước và muối khoáng từ rễ lên, đồng thời làm mát bề mặt lá', 'Làm cho cây mau rụng lá', 'Giúp lá cây tích tụ chất độc', 'Ngăn cản cây hấp thụ ánh sáng'],
        answerIndex: 0,
        hint: 'Động lực đầu trên của dòng mạch gỗ.',
        explanation: 'Thoát hơi nước tạo sức hút kéo nước lên ngọn cây và điều hòa nhiệt độ chống nóng cho lá.'
      },
      {
        question: 'Năng lượng giải phóng ra từ quá trình hô hấp tế bào được lưu trữ dưới dạng hợp chất nào?',
        options: ['ATP (Adenosine triphosphate)', 'Glucose', 'Protein', 'Tinh bột'],
        answerIndex: 0,
        hint: 'Đồng tiền năng lượng của tế bào.',
        explanation: 'Năng lượng sinh học được tích lũy trong các liên kết cao năng của phân tử ATP.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-sci-final',
    title: 'KHTN 7 - Đề Kiểm Tra Cuối Học Kỳ 2 (Quang học, Từ học & Sinh học Tổng hợp)',
    titleEn: 'Natural Science 7 - Semester 2 Final Examination (Comprehensive)',
    grade: 7,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm học: Ánh sáng & gương phẳng, từ trường & nam châm, trao đổi chất, quang hợp, hô hấp và cảm ứng sinh vật.',
    descriptionEn: 'Year-end evaluation of optics, magnetism, plant physiology, and cellular metabolism.',
    questions: [
      {
        question: 'Một người đứng cách gương phẳng 1.5 mét. Khoảng cách giữa người đó và ảnh của mình tạo bởi gương là:',
        options: ['3.0 mét', '1.5 mét', '0.75 mét', '4.5 mét'],
        answerIndex: 0,
        hint: 'Khoảng cách từ người đến gương (1.5m) cộng khoảng cách từ gương đến ảnh (1.5m).',
        explanation: 'Khoảng cách giữa vật và ảnh = 1.5m + 1.5m = 3.0m.'
      },
      {
        question: 'Cấu tạo của một nam châm điện đơn giản gồm có:',
        options: ['Một cuộn dây dẫn quấn quanh một lõi sắt non và nối với nguồn điện', 'Một thanh thép vĩnh cửu không có dây quấn', 'Một thanh gỗ ngâm dầu', 'Hai cục pin nối với bóng đèn'],
        answerIndex: 0,
        hint: 'Khi có dòng điện chạy qua cuộn dây, lõi sắt non bị nhiễm từ trở thành nam châm.',
        explanation: 'Nam châm điện gồm ống dây có dòng điện bao quanh lõi sắt non để tăng cường từ trường.'
      },
      {
        question: 'Hiện tượng ngọn cây luôn uốn cong và vươn về phía có nguồn ánh sáng được gọi là tính:',
        options: ['Hướng sáng dương của cây', 'Hướng trọng lực', 'Hướng nước', 'Hướng tiếp xúc'],
        answerIndex: 0,
        hint: 'Phản ứng sinh trưởng hướng về phía có ánh sáng để tối ưu quang hợp.',
        explanation: 'Thân và ngọn cây có tính hướng sáng dương, vươn về phía ánh sáng mặt trời.'
      },
      {
        question: 'Mạch rây (phloem) trong cây vận chuyển chất nào chủ yếu?',
        options: ['Các chất hữu cơ (đặc biệt là đường sucrose) được tổng hợp từ lá', 'Nước tinh khiết', 'Chỉ có khoáng chất sắt', 'Không khí ô nhiễm'],
        answerIndex: 0,
        hint: 'Dòng vận chuyển từ cơ quan nguồn (lá) đến cơ quan dự trữ (củ, quả, hạt).',
        explanation: 'Mạch rây vận chuyển các sản phẩm hữu cơ của quang hợp đi nuôi dưỡng các bộ phận của cây.'
      },
      {
        question: 'Khi cắt một thanh nam châm thẳng làm đôi, ta sẽ thu được:',
        options: ['Hai thanh nam châm mới, mỗi thanh đều có đủ hai cực Bắc và Nam', 'Một thanh chỉ có cực Bắc, một thanh chỉ có cực Nam', 'Hai mẩu sắt mất hoàn toàn từ tính', 'Một nam châm điện'],
        answerIndex: 0,
        hint: 'Từ trường không thể tồn tại đơn cực từ.',
        explanation: 'Không thể tách rời đơn cực từ; khi bẻ đôi nam châm luôn tạo ra hai nam châm hoàn chỉnh mới.'
      },
      {
        question: 'Các yếu tố môi trường chủ yếu ảnh hưởng đến tốc độ quang hợp ở thực vật bao gồm:',
        options: ['Cường độ ánh sáng, nồng độ khí CO₂, nhiệt độ và nước', 'Tiếng ồn âm thanh', 'Từ trường của máy tính', 'Áp suất khí quyển'],
        answerIndex: 0,
        hint: 'Các nhân tố trực tiếp tham gia vào phản ứng quang hợp.',
        explanation: 'Ánh sáng, nước, nồng độ CO₂ và nhiệt độ là các nhân tố sinh thái quyết định năng suất quang hợp.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2 (HỌC KỲ 2) - NGỮ VĂN 7
  // =========================================================================
  {
    id: 'quiz-g7-s2-lit-reg1',
    title: 'Ngữ văn 7 - Kiểm tra Thường xuyên 1: Tục ngữ về Thiên nhiên & Lao động Sản xuất',
    titleEn: 'Literature 7 - Regular Assessment 1: Proverbs on Nature & Farming',
    grade: 7,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Đặc điểm hình thức của tục ngữ (ngắn gọn, có vần, nhịp), kinh nghiệm dự báo thời tiết và thời vụ canh tác.',
    descriptionEn: 'Folk proverbs, rhyming structures, meteorological observation, and seasonal farming wisdom.',
    questions: [
      {
        question: 'Câu tục ngữ nào sau đây đúc kết kinh nghiệm quý báu về thời tiết đêm ngày theo mùa?',
        options: ['Đêm tháng năm chưa nằm đã sáng, ngày tháng mười chưa cười đã tối', 'Tấc đất tấc vàng', 'Ăn quả nhớ kẻ trồng cây', 'Học thầy không tày học bạn'],
        answerIndex: 0,
        hint: 'Hiện tượng ngày dài đêm ngắn mùa hạ và ngày ngắn đêm dài mùa đông.',
        explanation: 'Câu tục ngữ phản ánh chính xác quy luật chênh lệch thời gian ngày đêm giữa mùa hạ và mùa đông.'
      },
      {
        question: 'Tục ngữ là thể loại văn học dân gian có đặc điểm hình thức nào nổi bật?',
        options: ['Câu nói ngắn gọn, súc tích, có vần điệu, đúc kết kinh nghiệm sống', 'Truyện dài nhiều chương hồi', 'Bài thơ lục bát dài hàng trăm câu', 'Văn bản kịch có nhiều nhân vật thoại'],
        answerIndex: 0,
        hint: 'Được truyền tụng đúc kết từ đời này sang đời khác.',
        explanation: 'Tục ngữ là túi khôn dân gian, câu ngắn, vần đối chuẩn xác, giàu hình ảnh.'
      },
      {
        question: 'Ý nghĩa của câu tục ngữ "Tấc đất tấc vàng" là:',
        options: ['Đất đai là tài nguyên vô cùng quý giá, cần trân trọng gìn giữ và khai thác hiệu quả', 'Dưới lòng đất có rất nhiều mỏ vàng', 'Một tấc đất đổi được một tấc vàng thật', 'Mua bán đất kiếm được nhiều lợi nhuận'],
        answerIndex: 0,
        hint: 'Đề cao giá trị thiêng liêng của đất đai đối với sản xuất nông nghiệp.',
        explanation: 'Tác giả dân gian so sánh đất với vàng để nhắc nhở con cháu trân trọng nguồn tư liệu sản xuất nuôi sống con người.'
      },
      {
        question: 'Câu "Cơn đằng Đông vừa trông vừa trông vừa chạy, cơn đằng Nam vừa làm vừa chơi" phản ánh điều gì?',
        options: ['Kinh nghiệm dự báo mưa giông: mây đen hướng Đông thì mưa nhanh, hướng Nam thì mưa chậm', 'Cách chơi trò chơi trốn tìm', 'Phương pháp chạy bộ tập thể dục', 'Quy tắc xây nhà hướng Nam'],
        answerIndex: 0,
        hint: 'Kinh nghiệm nhìn mây đoán mưa gió của nhà nông.',
        explanation: 'Giông từ phía Đông kéo đến rất nhanh kèm gió lốc, còn giông phía Nam thường mưa rải rác.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-lit-reg2',
    title: 'Ngữ văn 7 - Kiểm tra Thường xuyên 2: Truyện Ngụ ngôn & Bài học Triết lý Nhân sinh',
    titleEn: 'Literature 7 - Regular Assessment 2: Fables & Philosophical Morals',
    grade: 7,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Truyện ngụ ngôn Ếch ngồi đáy giếng, Thầy bói xem voi, Đẽo cày giữa đường và bài học khiêm tốn, lắng nghe có chọn lọc.',
    descriptionEn: 'Satirical fables, allegorical characters, and ethical life lessons.',
    questions: [
      {
        question: 'Bài học đắt giá rút ra từ truyện ngụ ngôn "Ếch ngồi đáy giếng" là:',
        options: ['Không nên chủ quan kiêu ngạo, tầm nhìn hạn hẹp coi trời bằng vung kẻo phải trả giá đắt', 'Nên ở yên một chỗ không cần học hỏi', 'Trời chỉ to bằng cái vung nồi', 'Ếch là loài vật khỏe mạnh nhất'],
        answerIndex: 0,
        hint: 'Chú ếch nghênh ngang bị trâu giẫm bẹp vì ngộ nhận về thế giới.',
        explanation: 'Truyện phê phán những kẻ hiểu biết nông cạn nhưng lại tự mãn kiêu căng, khuyên con người mở rộng tầm mắt.'
      },
      {
        question: 'Thành ngữ "Đẽo cày giữa đường" dùng để chỉ kiểu người nào trong xã hội?',
        options: ['Người không có chính kiến riêng, ai bảo sao nghe vậy dẫn đến thất bại xôi hỏng bỏng không', 'Người thợ mộc chăm chỉ làm việc ngoài đường', 'Người biết lắng nghe mọi ý kiến', 'Người nông dân giỏi cày cấy'],
        answerIndex: 0,
        hint: 'Lắng nghe mù quáng khiến khúc gỗ quý thành mẩu que vô dụng.',
        explanation: 'Thành ngữ phê phán người thiếu bản lĩnh, ba phải, không kiên định mục tiêu.'
      },
      {
        question: 'Truyện "Thầy bói xem voi" phê phán điều gì trong cách nhìn nhận sự vật hiện tượng?',
        options: ['Cách đánh giá phiến diện, chỉ sờ một bộ phận mà vội vàng kết luận cho toàn thể', 'Những người bị khiếm thị', 'Con voi quá to lớn', 'Các lễ hội truyền thống'],
        answerIndex: 0,
        hint: 'Người sờ vòi bảo như con đỉa, người sờ ngà bảo như cái đòn càn...',
        explanation: 'Truyện khuyên con người phải có cái nhìn toàn diện, khách quan, tránh thầy bói xem voi.'
      },
      {
        question: 'Truyện ngụ ngôn thường mượn hình tượng nào để răn dạy con người?',
        options: ['Loài vật, đồ vật hoặc chính con người để ngụ ý kín đáo về bài học đạo đức', 'Các vị thần siêu nhiên trên trời', 'Người ngoài hành tinh', 'Các máy móc vi tính'],
        answerIndex: 0,
        hint: 'Dùng thủ pháp nhân hóa mượn chuyện loài vật để nói chuyện con người.',
        explanation: 'Truyện ngụ ngôn dùng chuyện loài vật để răn dạy những bài học nhân sinh sâu sắc.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-lit-reg3',
    title: 'Ngữ văn 7 - Kiểm tra Thường xuyên 3: Văn bản Thông tin & Thuật lại một Sự kiện',
    titleEn: 'Literature 7 - Regular Assessment 3: Informational Texts & Event Recounts',
    grade: 7,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Cấu trúc bài văn thuyết minh thuật lại sự kiện văn hóa, lịch sử; cách triển khai thông tin theo trật tự thời gian.',
    descriptionEn: 'Chronological informational reports, historical event narration, and objective writing.',
    questions: [
      {
        question: 'Khi thuật lại một sự kiện lịch sử hoặc lễ hội truyền thống, thông tin thường được sắp xếp theo trật tự nào?',
        options: ['Trật tự thời gian (từ trước đến sau, diễn biến sự kiện)', 'Trật tự bảng chữ cái', 'Sắp xếp ngẫu nhiên không cần thứ tự', 'Từ kết thúc ngược về mở đầu'],
        answerIndex: 0,
        hint: 'Nguyên nhân -> Diễn biến -> Kết quả.',
        explanation: 'Trật tự thời gian giúp người đọc nắm bắt mạch lạc diễn biến từng chặng của sự kiện.'
      },
      {
        question: 'Nhan đề của văn bản thông tin thường có chức năng gì?',
        options: ['Nêu rõ đối tượng hoặc sự kiện trọng tâm được giới thiệu trong bài', 'Gieo vần cho hay', 'Giấu kín thông tin để gây tò mò', 'Là tên riêng của người đọc'],
        answerIndex: 0,
        hint: 'Cho biết ngay văn bản viết về điều gì.',
        explanation: 'Nhan đề văn bản thông tin khái quát đối tượng, sự kiện hoặc nội dung chính.'
      },
      {
        question: 'Từ ngữ nào sau đây thường dùng để kết nối các sự việc theo trình tự thời gian?',
        options: ['"Trước hết", "Tiếp theo", "Sau đó", "Cuối cùng"', '"Mặc dù", "Tuy nhiên"', '"Bởi vì", "Do đó"', '"Hoặc là", "Hay là"'],
        answerIndex: 0,
        hint: 'Các từ chỉ thứ tự các bước tiến hành.',
        explanation: 'Các từ nối chỉ thứ tự liên kết chặt chẽ các giai đoạn của sự việc.'
      },
      {
        question: 'Yêu cầu quan trọng nhất đối với thông tin trong văn bản thuyết minh thuật lại sự kiện là:',
        options: ['Chính xác, khách quan, trung thực và có nguồn gốc rõ ràng', 'Hư cấu ly kỳ để người đọc thích thú', 'Sử dụng nhiều từ ngữ châm biếm', 'Thêm thắt cảm xúc cá nhân tiêu cực'],
        answerIndex: 0,
        hint: 'Tôn trọng sự thật khách quan.',
        explanation: 'Tính chính xác, khách quan là phẩm chất hàng đầu của văn bản thông tin.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-lit-reg4',
    title: 'Ngữ văn 7 - Kiểm tra Thường xuyên 4: Liên kết Câu & Nghĩa của Từ Hán Việt',
    titleEn: 'Literature 7 - Regular Assessment 4: Cohesive Devices & Sino-Vietnamese Semantics',
    grade: 7,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Các phép liên kết câu (phép lặp, phép thế, phép nối, phép đồng nghĩa/trái nghĩa) và yếu tố Hán Việt phong phú.',
    descriptionEn: 'Textual cohesion techniques (repetition, substitution, conjunction) and Sino-Vietnamese roots.',
    questions: [
      {
        question: 'Trong đoạn văn "Mùa xuân đã về. Không khí mùa xuân tràn ngập khắp đất trời", hai câu được liên kết bằng phép liên kết nào?',
        options: ['Phép lặp từ ngữ (lặp lại từ "mùa xuân")', 'Phép thế', 'Phép nối', 'Phép tương phản'],
        answerIndex: 0,
        hint: 'Từ "mùa xuân" xuất hiện ở cả hai câu liên tiếp.',
        explanation: 'Phép lặp dùng lại từ ngữ đã có ở câu trước để tạo sự liên kết chặt chẽ.'
      },
      {
        question: 'Yếu tố Hán Việt "quốc" trong các từ "quốc gia", "quốc kỳ", "ái quốc" có nghĩa là:',
        options: ['Nước, đất nước', 'Vua', 'Người dân', 'Đất đai'],
        answerIndex: 0,
        hint: 'Ái quốc là yêu nước.',
        explanation: '"Quốc" trong Hán Việt có nghĩa là đất nước, quốc gia.'
      },
      {
        question: 'Trong câu "Trời mưa rất to, tuy nhiên các bạn vẫn đến lớp đúng giờ", từ "tuy nhiên" thực hiện phép liên kết gì?',
        options: ['Phép nối (chỉ quan hệ tương phản đối lập)', 'Phép lặp', 'Phép thế', 'Phép liên tưởng'],
        answerIndex: 0,
        hint: 'Dùng quan hệ từ để nối câu sau với câu trước.',
        explanation: '"Tuy nhiên" là từ nối thể hiện quan hệ nghịch đối giữa hai vế câu/hai câu.'
      },
      {
        question: 'Thành ngữ nào sau đây mang ý nghĩa ca ngợi sự kiên trì, bền bỉ vượt qua khó khăn để thành công?',
        options: ['Có công mài sắt, có ngày nên kim', 'Há miệng chờ sung', 'Được đằng chân lân đằng đầu', 'Nước đến chân mới nhảy'],
        answerIndex: 0,
        hint: 'Thanh sắt to mài dần cũng thành cây kim khâu nhỏ xíu.',
        explanation: '"Có công mài sắt, có ngày nên kim" khuyên con người rèn luyện đức tính kiên trì nhẫn nại.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-lit-final',
    title: 'Ngữ văn 7 - Đề Kiểm Tra Cuối Học Kỳ 2 (Tổng hợp Đọc hiểu & Viết)',
    titleEn: 'Literature 7 - Semester 2 Final Examination (Comprehensive)',
    grade: 7,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra đánh giá cuối năm học Ngữ văn 7 chuẩn GDPT: Tục ngữ, truyện ngụ ngôn, văn bản thông tin, phép liên kết và từ Hán Việt.',
    descriptionEn: 'End-of-year comprehensive literature exam testing reading, analysis, and grammar mechanics.',
    questions: [
      {
        question: 'Mục đích cao nhất của các câu tục ngữ về con người và xã hội là gì?',
        options: ['Giáo dục nhân cách, đạo lý làm người và lối ứng xử tốt đẹp trong cộng đồng', 'Để làm cho cuộc nói chuyện dài hơn', 'Để khoe tài ăn nói', 'Chỉ nhằm mục đích mua bán'],
        answerIndex: 0,
        hint: 'Truyền tải các giá trị đạo đức truyền thống như uống nước nhớ nguồn, tôn sư trọng đạo.',
        explanation: 'Tục ngữ về con người đề cao phẩm giá, răn dạy cách ăn ở nhân nghĩa, thủy chung.'
      },
      {
        question: 'Biện pháp tu từ nào được sử dụng trong câu tục ngữ "Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao"?',
        options: ['Ẩn dụ kết hợp tương phản đối lập (1 cây tương phản với 3 cây)', 'Nói quá', 'Chơi chữ', 'So sánh ngang bằng'],
        answerIndex: 0,
        hint: 'Hình ảnh cây và núi ẩn dụ cho sức mạnh của sự đoàn kết.',
        explanation: 'Sử dụng hình ảnh ẩn dụ và phép đối lập để khẳng định sức mạnh vĩ đại của tinh thần đoàn kết.'
      },
      {
        question: 'Khi sử dụng từ Hán Việt trong giao tiếp và viết văn, tác dụng nổi bật là gì?',
        options: ['Tạo sắc thái trang trọng, tao nhã, cổ kính và súc tích cho câu văn', 'Làm cho người đọc không hiểu được', 'Khiến câu văn trở nên bình dân suồng sã', 'Để kéo dài độ dài văn bản'],
        answerIndex: 0,
        hint: 'Ví dụ dùng "phụ nữ" thay cho "đàn bà", "hy sinh" thay cho "chết".',
        explanation: 'Từ Hán Việt mang sắc thái trang nghiêm, biểu thị thái độ tôn kính và tính bác học.'
      },
      {
        question: 'Bài học triết lý sâu sắc nhất từ câu chuyện "Người đẽo cày giữa đường" là:',
        options: ['Cần biết lắng nghe có chọn lọc, có chính kiến và tự chịu trách nhiệm với mục tiêu của mình', 'Không nên làm nghề thợ mộc', 'Cần tăng giá bán cày bừa', 'Nên đẽo cày thật to'],
        answerIndex: 0,
        hint: 'Tự chủ và kiên định với kế hoạch đúng đắn.',
        explanation: 'Truyện răn dạy bài học về tính tự chủ, bản lĩnh cá nhân, tránh ba phải mù quáng.'
      },
      {
        question: 'Xác định phép thế trong đoạn văn sau: "Bác Hồ là vị lãnh tụ vĩ đại của dân tộc. Người đã cống hiến trọn cuộc đời cho độc lập tự do."',
        options: ['Từ "Người" thay thế cho "Bác Hồ"', 'Từ "vĩ đại" thay thế cho "dân tộc"', 'Từ "cuộc đời" thay thế cho "độc lập"', 'Từ "dân tộc" thay thế cho "Bác Hồ"'],
        answerIndex: 0,
        hint: 'Đại từ "Người" ở câu sau chỉ Bác Hồ ở câu trước.',
        explanation: 'Phép thế sử dụng đại từ "Người" thay cho "Bác Hồ" giúp tránh lặp từ và tạo liên kết mạch lạc.'
      },
      {
        question: 'Nhận định nào sau đây ĐÚNG khi nói về văn bản nghị luận văn học?',
        options: ['Bàn luận, phân tích và đánh giá vẻ đẹp nội dung nghệ thuật của một tác phẩm văn học', 'Kể lại một chuyến đi du lịch', 'Miêu tả phong cảnh mùa hè', 'Báo cáo tài chính công ty'],
        answerIndex: 0,
        hint: 'Nghị luận về một bài thơ, câu chuyện, nhân vật văn học.',
        explanation: 'Nghị luận văn học là thể văn chuyên dùng để phân tích, cảm nhận giá trị tư tưởng và nghệ thuật của tác phẩm.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2 (HỌC KỲ 2) - TIẾNG ANH 7 (GLOBAL SUCCESS)
  // =========================================================================
  {
    id: 'quiz-g7-s2-eng-reg1',
    title: 'Tiếng Anh 7 - Regular Assessment 1: Traffic & Road Safety Rules',
    titleEn: 'English 7 - Regular Assessment 1: Traffic & Road Safety Rules',
    grade: 7,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Unit 7: Road signs, means of transport, asking about distance (How far is it...?), and traffic laws.',
    descriptionEn: 'Transportation vocabulary, distance questions, road safety and traffic sign comprehension.',
    questions: [
      {
        question: 'Complete the question about distance: "__________ is it from your home to school?" - "It\'s about 2 kilometers."',
        options: ['How far', 'How long', 'How often', 'How much'],
        answerIndex: 0,
        hint: 'Question phrase used to ask about distance between two locations.',
        explanation: '"How far is it from A to B?" asks about geographic distance.'
      },
      {
        question: 'You must always wear a __________ when riding a motorbike on the road.',
        options: ['helmet', 'hat', 'cap', 'mask'],
        answerIndex: 0,
        hint: 'Protective headgear required by traffic law.',
        explanation: 'Wearing a helmet (mũ bảo hiểm) is mandatory for motorcyclists to prevent head injuries.'
      },
      {
        question: 'Drivers must stop their vehicles when the traffic light turns __________.',
        options: ['red', 'green', 'yellow', 'blue'],
        answerIndex: 0,
        hint: 'Red means stop, green means go.',
        explanation: 'A red traffic light signals that all approaching traffic must come to a complete halt.'
      },
      {
        question: 'Choose the correct preposition: "My father goes to work __________ car every day."',
        options: ['by', 'on', 'in', 'with'],
        answerIndex: 0,
        hint: 'By car, by bus, by train, by plane.',
        explanation: 'Use "by + transport vehicle" without article: "by car".'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-eng-reg2',
    title: 'Tiếng Anh 7 - Regular Assessment 2: Films & Conjunctions (Although, However)',
    titleEn: 'English 7 - Regular Assessment 2: Films & Conjunctions (Although, However)',
    grade: 7,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Unit 8: Film genres (action, comedy, sci-fi, documentary), ending with -ed vs -ing adjectives, and contrast connectors.',
    descriptionEn: 'Cinema vocabulary, participial adjectives (-ed/-ing), although and however connectors.',
    questions: [
      {
        question: 'Choose the best connector: "__________ the film was quite long, we enjoyed every minute of it."',
        options: ['Although', 'However', 'Because', 'Despite of'],
        answerIndex: 0,
        hint: 'Connects a subordinate clause of contrast: Although + Clause.',
        explanation: '"Although + clause" introduces a contrastive idea.'
      },
      {
        question: 'I was really __________ by the shocking plot twist at the end of the thriller movie.',
        options: ['surprised', 'surprising', 'surprise', 'surprises'],
        answerIndex: 0,
        hint: 'Use -ed adjectives to describe a person\'s feelings or emotions.',
        explanation: '-ed adjectives describe emotional states: "I was surprised".'
      },
      {
        question: 'A movie about space travel, aliens, and futuristic technology is called a __________ film.',
        options: ['science-fiction (sci-fi)', 'romantic comedy', 'historical drama', 'horror'],
        answerIndex: 0,
        hint: 'Sci-fi explores scientific imagination and the cosmos.',
        explanation: 'Science-fiction (phim khoa học viễn tưởng) features futuristic concepts and interstellar exploration.'
      },
      {
        question: 'The film received terrible reviews from critics. __________, it made millions at the box office.',
        options: ['However', 'Although', 'Despite', 'Because'],
        answerIndex: 0,
        hint: 'Followed by a comma (,) and introduces a new independent sentence.',
        explanation: '"However," connects two independent sentences expressing contrast.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-eng-reg3',
    title: 'Tiếng Anh 7 - Regular Assessment 3: Festivals around the World & Yes/No Questions',
    titleEn: 'English 7 - Regular Assessment 3: Festivals around the World & Yes/No Questions',
    grade: 7,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 9: Cultural festivals (La Tomatina, Cannes Film Festival, Halloween, Mid-Autumn), adverbial clauses, and auxiliary questions.',
    descriptionEn: 'Worldwide cultural celebrations, holiday traditions, and question structures.',
    questions: [
      {
        question: 'During the festival of La Tomatina in Spain, people enthusiastically throw __________ at each other for fun.',
        options: ['ripe tomatoes', 'eggs', 'colored powders', 'water balloons'],
        answerIndex: 0,
        hint: 'Tomatina comes from the word tomato.',
        explanation: 'La Tomatina is Spain\'s famous tomato-throwing festival held in the town of Buñol.'
      },
      {
        question: 'Children love carving scary pumpkin faces called Jack-o\'-lanterns during __________.',
        options: ['Halloween', 'Christmas', 'Easter', 'Thanksgiving'],
        answerIndex: 0,
        hint: 'Celebrated annually on the night of October 31st.',
        explanation: 'Carving pumpkins is an iconic Halloween tradition.'
      },
      {
        question: 'Choose the correct question: "__________ you celebrate Mid-Autumn Festival with mooncakes?" - "Yes, I do."',
        options: ['Do', 'Are', 'Did', 'Have'],
        answerIndex: 0,
        hint: 'Present simple auxiliary for habitual action with subject "you".',
        explanation: '"Do you + base verb?" is the standard present simple yes/no inquiry.'
      },
      {
        question: 'People hold festivals to __________ historical figures, deities, or bountiful crop harvests.',
        options: ['celebrate', 'destroy', 'forget', 'punish'],
        answerIndex: 0,
        hint: 'To observe with festivities and respect.',
        explanation: '"Celebrate" (tổ chức kỷ niệm/tôn vinh) is the verb describing festival commemoration.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-eng-reg4',
    title: 'Tiếng Anh 7 - Regular Assessment 4: Energy Sources & Future Simple (will/won\'t)',
    titleEn: 'English 7 - Regular Assessment 4: Energy Sources & Future Simple (will/won\'t)',
    grade: 7,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 10: Renewable energy (solar, wind, hydro) vs non-renewable sources (coal, oil, gas), and predictions with will/won\'t.',
    descriptionEn: 'Clean green power technologies, fossil fuels depletion, and future tense predictions.',
    questions: [
      {
        question: 'Which of the following is a RENEWABLE source of energy?',
        options: ['Solar power (from sunlight)', 'Coal', 'Crude oil', 'Natural gas'],
        answerIndex: 0,
        hint: 'Energy that comes from natural resources that are naturally replenished.',
        explanation: 'Solar energy from the sun is inexhaustible and renewable, unlike fossil fuels.'
      },
      {
        question: 'In the future, electric cars __________ replace petrol vehicles to protect our environment.',
        options: ['will', 'did', 'was', 'have'],
        answerIndex: 0,
        hint: 'Future prediction: will + bare verb.',
        explanation: 'We use "will" for predictions about future technological advancements.'
      },
      {
        question: 'Burning fossil fuels causes heavy air __________ and contributes to global warming.',
        options: ['pollution', 'pollute', 'polluted', 'polluting'],
        answerIndex: 0,
        hint: 'Noun after adjective "air".',
        explanation: '"Air pollution" (ô nhiễm không khí) is the noun phrase designating atmospheric contamination.'
      },
      {
        question: 'Wind turbines generate clean electricity by harnessing the natural power of the __________.',
        options: ['wind', 'waves', 'geothermal heat', 'coal'],
        answerIndex: 0,
        hint: 'Huge windmill blades turned by moving air currents.',
        explanation: 'Wind turbines convert the kinetic power of wind currents into electrical energy.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-eng-final',
    title: 'Tiếng Anh 7 - Semester 2 Comprehensive Final Exam (Global Success)',
    titleEn: 'English 7 - Semester 2 Comprehensive Final Examination',
    grade: 7,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Complete Semester 2 examination covering transport regulations, cinema, cultural celebrations, green energy, and advanced grammar.',
    descriptionEn: 'Standardized end-of-year English exam aligned with GDPT 2018 grade 7 benchmarks.',
    questions: [
      {
        question: 'Solar energy is not only renewable __________ friendly to the ecological environment.',
        options: ['but also', 'and too', 'so that', 'either'],
        answerIndex: 0,
        hint: 'Correlative conjunction: not only... but also...',
        explanation: '"Not only... but also" (không những... mà còn) links parallel qualities.'
      },
      {
        question: 'Find the word that has a different pronunciation of the underlined "-ed" ending in past verbs:',
        options: ['Lived', 'Played', 'Loved', 'Watched'],
        answerIndex: 3,
        hint: 'Watched ends in /t/, while lived, played, and loved end in /d/.',
        explanation: '"Watched" is pronounced with /t/ sound (/wɒtʃt/) because it follows the voiceless /tʃ/ sound.'
      },
      {
        question: '__________ they spent a huge budget on special effects, the sci-fi movie was boring.',
        options: ['Although', 'Despite', 'Because', 'So'],
        answerIndex: 0,
        hint: 'Although + clause expressing surprise or contrast.',
        explanation: '"Although" introduces an adverbial clause of concession.'
      },
      {
        question: 'If you want to save electricity, you should remember to __________ all the lights before leaving the classroom.',
        options: ['turn off', 'turn on', 'look for', 'give up'],
        answerIndex: 0,
        hint: 'Opposite of turn on.',
        explanation: '"Turn off" (tắt đi) means switching off electrical appliances to conserve power.'
      },
      {
        question: 'Vehicles must strictly obey the speed __________ to prevent fatal road accidents.',
        options: ['limit', 'stop', 'sign', 'meter'],
        answerIndex: 0,
        hint: 'Speed limit (giới hạn tốc độ tối đa).',
        explanation: '"Speed limit" is the legal maximum speed permitted for vehicles on a specific road.'
      },
      {
        question: 'Choose the correct sentence:',
        options: ['We will build modern wind farms to produce green electricity next year.', 'We built modern wind farms next year.', 'We will to build modern wind farms next year.', 'We building modern wind farms next year.'],
        answerIndex: 0,
        hint: 'Future simple: Subject + will + Verb (bare infinitive).',
        explanation: '"We will build..." follows proper future simple grammar.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2 (HỌC KỲ 2) - LỊCH SỬ VÀ ĐỊA LÝ 7
  // =========================================================================
  {
    id: 'quiz-g7-s2-hisgeo-reg2',
    title: 'Lịch sử & Địa lý 7 - Thường xuyên 2: Nước Đại Việt thời Lý & Dời đô về Thăng Long',
    titleEn: 'History & Geography 7 - Regular Assessment 2: Dai Viet under the Ly Dynasty',
    grade: 7,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Năm 1010 Lý Công Uẩn dời đô về Thăng Long (Hà Nội), tổ chức bộ máy nhà nước, luật Hình thư và Văn Miếu 1070.',
    descriptionEn: 'Establishment of Thang Long capital in 1010, legal codes, and the Temple of Literature.',
    questions: [
      {
        question: 'Năm 1010, vua Lý Thái Tổ (Lý Công Uẩn) đã ban Chiếu dời đô từ đâu về đâu?',
        options: ['Từ Hoa Lư (Ninh Bình) về Đại La (sau đổi tên thành Thăng Long - Hà Nội)', 'Từ Cổ Loa về Hoa Lư', 'Từ Thăng Long vào Phú Xuân Huế', 'Từ Mê Linh về Bạch Hạc'],
        answerIndex: 0,
        hint: 'Nhìn thấy rồng vàng bay lên nên đặt tên kinh đô là Thăng Long.',
        explanation: 'Mùa thu năm 1010, Lý Công Uẩn dời đô từ Hoa Lư về thành Đại La, mở ra thời kỳ thịnh trị rực rỡ của Đại Việt.'
      },
      {
        question: 'Bộ luật thành văn đầu tiên của nước Đại Việt được ban hành dưới thời nhà Lý (năm 1042) là:',
        options: ['Luật Hình thư', 'Bộ luật Hồng Đức', 'Bộ luật Gia Long', 'Quốc triều hình luật'],
        answerIndex: 0,
        hint: 'Bộ luật đánh dấu bước tiến vượt bậc về pháp quyền của nước ta.',
        explanation: 'Năm 1042, vua Lý Thái Tông ban hành bộ luật Hình thư, bộ luật thành văn đầu tiên trong lịch sử dân tộc.'
      },
      {
        question: 'Trường đại học đầu tiên của nước ta, được xây dựng năm 1076 dưới thời Lý là:',
        options: ['Quốc Tử Giám', 'Văn Miếu', 'Đại học Quốc gia', 'Viện Hàn lâm'],
        answerIndex: 0,
        hint: 'Nằm phía sau Văn Miếu, nơi đào tạo nhân tài cho đất nước.',
        explanation: 'Quốc Tử Giám được lập năm 1076 dưới thời vua Lý Nhân Tông, là trường đại học đầu tiên của Việt Nam.'
      },
      {
        question: 'Bài thơ thần "Nam quốc sơn hà" vang lên trên phòng tuyến sông Như Nguyệt gắn liền với tên tuổi vị danh tướng nào?',
        options: ['Lý Thường Kiệt', 'Trần Hưng Đạo', 'Quang Trung', 'Lê Lợi'],
        answerIndex: 0,
        hint: 'Vị thái úy lãnh đạo cuộc kháng chiến chống quân Tống xâm lược (1075 - 1077).',
        explanation: 'Lý Thường Kiệt cho ngâm vang bài thơ thần "Nam quốc sơn hà" khẳng định chủ quyền độc lập thiêng liêng.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-hisgeo-reg3',
    title: 'Lịch sử & Địa lý 7 - Thường xuyên 3: Nước Đại Việt thời Trần & 3 lần Đại thắng Mông - Nguyên',
    titleEn: 'History & Geography 7 - Regular Assessment 3: Dai Viet under Tran Dynasty & Mongol Defeats',
    grade: 7,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Hội nghị Diên Hồng, Hịch tướng sĩ, chiến thắng Bạch Đằng năm 1288 và hào khí Đông A thời Trần.',
    descriptionEn: 'Tran dynasty resistance, Dien Hong conference, Tran Hung Dao, and the Battle of Bach Dang 1288.',
    questions: [
      {
        question: 'Hội nghị Diên Hồng (năm 1284) do Thượng hoàng Trần Thánh Tông triệu tập các bô lão trong cả nước thể hiện điều gì?',
        options: ['Tinh thần đại đoàn kết toàn dân tộc và ý chí quyết tâm đánh giặc "Đánh! Muôn người cùng hô một tiếng"', 'Sự chia rẽ nội bộ triều đình', 'Bàn về việc đầu hàng quân giặc', 'Chia ruộng đất cho quan lại'],
        answerIndex: 0,
        hint: 'Khi nhà vua hỏi nên đánh hay nên hòa, các bô lão muôn người cùng hô to "Đánh!".',
        explanation: 'Hội nghị Diên Hồng là biểu tượng sáng ngời cho khối đại đoàn kết toàn dân và tinh thần bất khuất chống ngoại xâm.'
      },
      {
        question: 'Chiến thắng vang dội trên dòng sông nào năm 1288 đã đập tan hoàn toàn ý chí xâm lược của đế quốc Nguyên Mông lần thứ ba?',
        options: ['Chiến thắng Bạch Đằng (năm 1288)', 'Chiến thắng sông Đáy', 'Chiến thắng sông Gianh', 'Chiến thắng sông Hồng'],
        answerIndex: 0,
        hint: 'Chiến thuật đóng cọc gỗ trên sông của Quốc công Tiết chế Trần Hưng Đạo.',
        explanation: 'Trận Bạch Đằng năm 1288 tiêu diệt toàn bộ đoàn thuyền chiến giặc Nguyên, bắt sống tướng giặc Ô Mã Nhi.'
      },
      {
        question: 'Tác phẩm văn học quân sự bất hủ của Trần Quốc Tuấn viết để khích lệ tướng sĩ luyện tập binh pháp là:',
        options: ['Hịch tướng sĩ', 'Bình Ngô đại cáo', 'Nam quốc sơn hà', 'Chiếu dời đô'],
        answerIndex: 0,
        hint: 'Lời văn thống thiết: "Ta thường tới bữa quên ăn, nửa đêm vỗ gối, ruột đau như cắt, nước mắt đầm đìa...".',
        explanation: 'Hịch tướng sĩ khơi dậy lòng yêu nước nồng nàn và ý chí chiến đấu xả thân vì độc lập của quân dân Đại Việt.'
      },
      {
        question: 'Vị vua anh minh đã lãnh đạo nhân dân đánh thắng giặc Mông - Nguyên rồi nhường ngôi đi tu lập ra Thiền phái Trúc Lâm Yên Tử là:',
        options: ['Trần Nhân Tông (Phật hoàng Trần Nhân Tông)', 'Trần Thái Tông', 'Trần Thánh Tông', 'Trần Anh Tông'],
        answerIndex: 0,
        hint: 'Vị vua - thiền sư vĩ đại của văn hóa Đại Việt.',
        explanation: 'Trần Nhân Tông là vị anh hùng dân tộc, người sáng lập dòng thiền Trúc Lâm đậm đà bản sắc Việt.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-hisgeo-reg4',
    title: 'Lịch sử & Địa lý 7 - Thường xuyên 4: Vị trí Địa lý & Đặc điểm Tự nhiên Châu Á',
    titleEn: 'History & Geography 7 - Regular Assessment 4: Asia Geography & Climate Zones',
    grade: 7,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Châu Á - châu lục rộng lớn và đông dân nhất thế giới; dãy Hi-ma-lay-a, đỉnh Everest và các đới khí hậu gió mùa phong phú.',
    descriptionEn: 'Asian landmass geography, Himalayas mountain ranges, monsoon wind dynamics, and ecological diversity.',
    questions: [
      {
        question: 'Châu Á có diện tích đứng thứ mấy trong số các châu lục trên thế giới?',
        options: ['Lớn nhất thế giới (diện tích khoảng 44.4 triệu km² tính cả các đảo)', 'Đứng thứ hai sau châu Mỹ', 'Đứng thứ ba sau châu Phi', 'Nhỏ nhất thế giới'],
        answerIndex: 0,
        hint: 'Châu lục rộng lớn nhất và có số dân đông nhất hành tinh.',
        explanation: 'Châu Á là châu lục có diện tích lớn nhất thế giới, chiếm gần 30% diện tích đất liền của Trái Đất.'
      },
      {
        question: 'Đỉnh núi cao nhất thế giới (cao 8848.86 m so với mực nước biển) nằm trên dãy Hi-ma-lay-a là:',
        options: ['Đỉnh Ê-vơ-rét (Everest / Chomolungma)', 'Đỉnh Phan-xi-păng', 'Đỉnh Mông Băng', 'Đỉnh Phú Sĩ'],
        answerIndex: 0,
        hint: 'Nóc nhà của thế giới nằm giữa biên giới Nepal và Trung Quốc.',
        explanation: 'Đỉnh Everest thuộc dãy Himalaya là đỉnh núi cao nhất hành tinh.'
      },
      {
        question: 'Khí hậu gió mùa châu Á nổi bật ở những khu vực nào sau đây?',
        options: ['Nam Á và Đông Nam Á, Đông Á', 'Bắc Á (Xi-bê-ri)', 'Tây Nam Á (bán đảo A-rập)', 'Trung Á'],
        answerIndex: 0,
        hint: 'Khu vực có gió mùa mùa hạ nóng ẩm mưa nhiều và gió mùa mùa đông khô lạnh.',
        explanation: 'Khu vực Nam Á, Đông Nam Á và Đông Á chịu ảnh hưởng sâu sắc của gió mùa châu Á, thuận lợi trồng lúa nước.'
      },
      {
        question: 'Hồ nước ngọt sâu nhất và có thể tích nước ngọt lớn nhất hành tinh nằm ở châu Á là:',
        options: ['Hồ Bai-can (Baikal)', 'Biển Hồ Campuchia', 'Hồ Ban-khát', 'Hồ Tơ-nưng'],
        answerIndex: 0,
        hint: 'Nằm ở vùng nam Siberia của nước Nga.',
        explanation: 'Hồ Baican có độ sâu hơn 1600m, chứa tới 20% lượng nước ngọt không đóng băng trên bề mặt Trái Đất.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-hisgeo-final',
    title: 'Lịch sử & Địa lý 7 - Đề Kiểm Tra Cuối Học Kỳ 2 (Toàn diện Cuối năm)',
    titleEn: 'History & Geography 7 - Semester 2 Final Examination (Comprehensive)',
    grade: 7,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra đánh giá cuối năm học: Lịch sử Đại Việt thời Lý - Trần, địa lý tự nhiên và kinh tế - xã hội Châu Á.',
    descriptionEn: 'End-of-year comprehensive examination of Vietnamese medieval dynasties and Asian geographical systems.',
    questions: [
      {
        question: 'Kế sách đánh giặc độc đáo "Tiên phát chế nhân" (ngồi yên đợi giặc không bằng đem quân đánh trước để chặn mũi nhọn của giặc) do danh tướng nào đề ra?',
        options: ['Lý Thường Kiệt (trong cuộc kháng chiến chống Tống)', 'Trần Thủ Độ', 'Trần Hưng Đạo', 'Lê Lợi'],
        answerIndex: 0,
        hint: 'Chủ động tấn công sang đất Tống để triệt phá các kho lương thảo Ung Châu.',
        explanation: 'Lý Thường Kiệt chủ trương tấn công phủ đầu sang các căn cứ tập kết quân của nhà Tống rồi lui về lập phòng tuyến Như Nguyệt.'
      },
      {
        question: 'Câu nói nổi tiếng khẳng định ý chí quyết chiến "Nếu bệ hạ muốn hàng giặc thì hãy chém đầu thần trước đã" là của ai?',
        options: ['Thái sư Trần Thủ Độ', 'Hưng Đạo Vương Trần Quốc Tuấn', 'Trần Quang Khải', 'Trần Bình Trọng'],
        answerIndex: 0,
        hint: 'Lời tâu với vua Trần Thái Tông trong cuộc kháng chiến chống Mông Cổ lần 1 (1258).',
        explanation: 'Thái sư Trần Thủ Độ thể hiện khí phách kiên cường bất khuất bảo vệ giang sơn xã tắc.'
      },
      {
        question: 'Châu Á tiếp giáp với những đại dương nào sau đây?',
        options: ['Bắc Băng Dương, Thái Bình Dương và Ấn Độ Dương', 'Đại Tây Dương, Nam Đại Dương và Bắc Băng Dương', 'Chỉ tiếp giáp Thái Bình Dương', 'Chỉ tiếp giáp Ấn Độ Dương'],
        answerIndex: 0,
        hint: 'Phía Bắc giáp Bắc Băng Dương, phía Đông giáp Thái Bình Dương, phía Nam giáp Ấn Độ Dương.',
        explanation: 'Ba mặt của châu Á giáp với ba đại dương lớn: Bắc Băng Dương, Thái Bình Dương và Ấn Độ Dương.'
      },
      {
        question: 'Đồng bằng nào sau đây là đồng bằng châu thổ màu mỡ và rộng lớn bậc nhất ở Đông Á?',
        options: ['Đồng bằng Hoa Bắc và Hoa Trung (Trung Quốc)', 'Đồng bằng Lưỡng Hà', 'Đồng bằng Tây Xi-bê-ri', 'Đồng bằng Mê Công'],
        answerIndex: 0,
        hint: 'Được bồi đắp bởi phù sa sông Hoàng Hà và sông Trường Giang.',
        explanation: 'Đồng bằng Hoa Bắc và Hoa Trung là vựa lúa mì và lúa gạo trù phú nuôi sống hàng trăm triệu người dân.'
      },
      {
        question: 'Thành ngữ "Ta thà làm ma nước Nam chứ không thèm làm vương đất Bắc" gắn liền với tấm gương hy sinh oanh liệt của vị tướng nào?',
        options: ['Trần Bình Trọng', 'Trần Quốc Toản', 'Yết Kiêu', 'Dã Tượng'],
        answerIndex: 0,
        hint: 'Khi bị giặc Nguyên bắt dụ dỗ ban tước vương.',
        explanation: 'Trần Bình Trọng hiên ngang tuẫn tiết trước quân thù, để lại tấm gương ái quốc muôn đời chói lọi.'
      },
      {
        question: 'Cây lương thực quan trọng nhất được gieo trồng phổ biến tại các vùng đồng bằng gió mùa ẩm châu Á là:',
        options: ['Cây lúa nước', 'Cây củ cải đường', 'Cây lúa mạch', 'Cây ô-liu'],
        answerIndex: 0,
        hint: 'Nguồn lương thực chính của các nước Đông Nam Á và Đông Á.',
        explanation: 'Lúa nước thích hợp với khí hậu nhiệt đới gió mùa nóng ẩm mưa nhiều của châu Á.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2 (HỌC KỲ 2) - TIN HỌC 7
  // =========================================================================
  {
    id: 'quiz-g7-s2-info-reg1',
    title: 'Tin học 7 - Kiểm tra Thường xuyên 1: Các hàm Tính toán Cơ bản trong Excel',
    titleEn: 'Informatics 7 - Regular Assessment 1: Fundamental Excel Functions (SUM, AVERAGE, MAX, MIN)',
    grade: 7,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Cú pháp và cách sử dụng các hàm toán học và thống kê: SUM, AVERAGE, MAX, MIN, COUNT trong bảng tính.',
    descriptionEn: 'Formulas and syntax for math/statistical functions in Excel.',
    questions: [
      {
        question: 'Mọi công thức hoặc hàm tính toán trong bảng tính Excel bắt buộc phải bắt đầu bằng ký tự nào?',
        options: ['Dấu bằng (=)', 'Dấu cộng (+)', 'Dấu hai chấm (:)', 'Dấu hỏi (?)'],
        answerIndex: 0,
        hint: 'Ví dụ: =SUM(A1:A5).',
        explanation: 'Phần mềm bảng tính quy định mọi công thức và hàm đều phải bắt đầu bằng dấu "=".'
      },
      {
        question: 'Để tính điểm trung bình cộng của 3 môn Toán, Văn, Anh nằm tại các ô B2, C2, D2, công thức nào sau đây là ĐÚNG?',
        options: ['=AVERAGE(B2:D2)', '=SUM(B2:D2)', '=MAX(B2:D2)', '=MEAN(B2:D2)'],
        answerIndex: 0,
        hint: 'Hàm tính trung bình cộng trong tiếng Anh là AVERAGE.',
        explanation: '=AVERAGE(B2:D2) tính trung bình cộng giá trị của các ô từ B2 đến D2.'
      },
      {
        question: 'Hàm nào dùng để tìm giá trị lớn nhất trong một danh sách các số?',
        options: ['=MAX()', '=MIN()', '=LARGE()', '=TOP()'],
        answerIndex: 0,
        hint: 'MAX là viết tắt của Maximum.',
        explanation: 'Hàm =MAX(danh_sách) trả về giá trị số lớn nhất trong dãy.'
      },
      {
        question: 'Nếu ô A1 = 10, ô A2 = 20, ô A3 = 30. Kết quả của công thức =MIN(A1:A3) là:',
        options: ['10', '20', '30', '60'],
        answerIndex: 0,
        hint: 'Giá trị nhỏ nhất trong 3 số 10, 20, 30.',
        explanation: 'Hàm MIN tìm giá trị bé nhất, kết quả là 10.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-info-reg2',
    title: 'Tin học 7 - Kiểm tra Thường xuyên 2: Định dạng Bảng tính & Trình bày Trang in',
    titleEn: 'Informatics 7 - Regular Assessment 2: Sheet Formatting & Print Setup',
    grade: 7,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kẻ đường viền ô (Borders), màu nền (Fill Color), gộp ô (Merge & Center), và căn chỉnh lề in trang A4.',
    descriptionEn: 'Cell borders, background fills, merging cells, and print margin orientation.',
    questions: [
      {
        question: 'Để gộp nhiều ô liền kề thành một ô duy nhất và căn dữ liệu vào chính giữa, ta dùng nút lệnh nào trên thanh Ribbon?',
        options: ['Merge & Center', 'Wrap Text', 'Align Left', 'AutoSum'],
        answerIndex: 0,
        hint: 'Nằm trong nhóm lệnh Alignment của thẻ Home.',
        explanation: 'Nút lệnh Merge & Center gộp các ô đã chọn thành một ô lớn và căn giữa nội dung.'
      },
      {
        question: 'Khi in bảng tính ra giấy A4, chế độ hướng giấy nào giúp in được bảng có nhiều cột ngang?',
        options: ['Landscape (Hướng giấy nằm ngang)', 'Portrait (Hướng giấy đứng)', 'Square (Vuông)', 'Circle (Tròn)'],
        answerIndex: 0,
        hint: 'Xoay ngang khổ giấy để mở rộng chiều rộng in.',
        explanation: 'Chế độ Landscape xoay ngang trang in giúp bảng tính có nhiều cột không bị cắt tràn trang.'
      },
      {
        question: 'Khi các ký tự "#######" xuất hiện đầy trong ô tính, nguyên nhân chính là do:',
        options: ['Độ rộng của cột quá hẹp không đủ để hiển thị hết số liệu', 'Công thức bị lỗi chia cho số 0', 'Dữ liệu bị xóa mất', 'Máy tính bị nhiễm virus'],
        answerIndex: 0,
        hint: 'Chỉ cần nháy đúp chuột vào vạch ngăn cách giữa hai tên cột để kéo rộng cột ra.',
        explanation: 'Lỗi chuỗi dấu thăng hiển thị khi cột quá hẹp so với độ dài của số liệu; chỉ cần tăng độ rộng cột.'
      },
      {
        question: 'Công cụ Wrap Text trong phần mềm bảng tính có chức năng gì?',
        options: ['Tự động ngắt dòng văn bản dài trong ô khi chạm mép cột', 'Đổi màu chữ sang màu đỏ', 'Xóa toàn bộ văn bản', 'Chuyển chữ thường thành chữ hoa'],
        answerIndex: 0,
        hint: 'Giúp hiển thị toàn bộ nội dung trong ô mà không cần kéo cột quá rộng.',
        explanation: 'Wrap Text tự động xuống dòng văn bản trong cùng một ô tính.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-info-reg3',
    title: 'Tin học 7 - Kiểm tra Thường xuyên 3: Sắp xếp & Lọc Dữ liệu trong Bảng tính',
    titleEn: 'Informatics 7 - Regular Assessment 3: Sorting & Filtering Data in Excel',
    grade: 7,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Sắp xếp dữ liệu tăng dần/giảm dần (Sort A to Z / Z to A) và trích xuất thông tin theo tiêu chí bằng bộ lọc tự động (AutoFilter).',
    descriptionEn: 'Ascending/descending sort operations, custom criteria filters, and database searches.',
    questions: [
      {
        question: 'Để sắp xếp danh sách điểm học sinh từ cao nhất xuống thấp nhất, ta chọn kiểu sắp xếp nào?',
        options: ['Sắp xếp giảm dần (Sort Descending / Z to A)', 'Sắp xếp tăng dần (Sort Ascending / A to Z)', 'Sắp xếp ngẫu nhiên', 'Không thể sắp xếp số'],
        answerIndex: 0,
        hint: 'Từ số lớn nhất đến số bé nhất.',
        explanation: 'Sắp xếp giảm dần (Descending) xếp các giá trị từ lớn nhất đến nhỏ nhất.'
      },
      {
        question: 'Thao tác "Lọc dữ liệu" (Filter) trong bảng tính giúp chúng ta:',
        options: ['Chọn và chỉ hiển thị các hàng thỏa mãn tiêu chuẩn nhất định, tạm thời ẩn đi các hàng khác', 'Xóa vĩnh viễn các dữ liệu không cần thiết', 'Tự động tính tổng tiền', 'Đổi tên toàn bộ các tệp tin'],
        answerIndex: 0,
        hint: 'Trích xuất những thông tin cần thiết mà không làm mất dữ liệu gốc.',
        explanation: 'Bộ lọc Filter hiển thị các bản ghi thỏa mãn điều kiện lọc và ẩn các bản ghi còn lại.'
      },
      {
        question: 'Nút lệnh bật tính năng lọc dữ liệu tự động (Filter) có biểu tượng hình gì trên thanh công cụ?',
        options: ['Hình cái phễu lọc', 'Hình kính lúp', 'Hình máy in', 'Hình cây kéo'],
        answerIndex: 0,
        hint: 'Chiếc phễu dùng để lọc chất lỏng.',
        explanation: 'Biểu tượng hình cái phễu (Filter) trong nhóm lệnh Sort & Filter dùng để bật bộ lọc.'
      },
      {
        question: 'Sau khi lọc dữ liệu, để bảng tính trở lại trạng thái hiển thị đầy đủ ban đầu, ta thực hiện:',
        options: ['Chọn Clear Filter hoặc bỏ chọn nút Filter', 'Tắt máy tính', 'Nhấn nút Delete', 'Đóng bảng tính không lưu'],
        answerIndex: 0,
        hint: 'Xóa bỏ điều kiện lọc đã áp dụng.',
        explanation: 'Chọn lệnh Clear Filter để hủy bộ lọc và hiển thị lại toàn bộ các hàng dữ liệu.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-info-reg4',
    title: 'Tin học 7 - Kiểm tra Thường xuyên 4: Trực quan hóa Dữ liệu bằng Biểu đồ (Charts)',
    titleEn: 'Informatics 7 - Regular Assessment 4: Data Visualization with Charts',
    grade: 7,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Các dạng biểu đồ phổ biến (biểu đồ cột, biểu đồ đường, biểu đồ tròn) và quy trình chèn biểu đồ trong Excel.',
    descriptionEn: 'Bar charts, line graphs, pie charts, and data trend visualization.',
    questions: [
      {
        question: 'Để so sánh số liệu giữa các đối tượng khác nhau (ví dụ so sánh điểm trung bình giữa các lớp), dạng biểu đồ nào là thích hợp nhất?',
        options: ['Biểu đồ cột (Column Chart / Bar Chart)', 'Biểu đồ tròn (Pie Chart)', 'Biểu đồ đường (Line Chart)', 'Biểu đồ phân tán (Scatter)'],
        answerIndex: 0,
        hint: 'Các cột đứng giúp đối chiếu độ cao trực quan.',
        explanation: 'Biểu đồ cột tối ưu cho việc so sánh độ lớn giữa các đối tượng hoặc các danh mục.'
      },
      {
        question: 'Để mô tả tỉ lệ phần trăm các thành phần trong một tổng thể (ví dụ cơ cấu chi tiêu trong gia đình đạt 100%), dạng biểu đồ chuẩn nhất là:',
        options: ['Biểu đồ hình tròn (Pie Chart)', 'Biểu đồ đường', 'Biểu đồ hình hộp', 'Biểu đồ mạng nhện'],
        answerIndex: 0,
        hint: 'Hình chiếc bánh chia thành các lát phần trăm.',
        explanation: 'Biểu đồ tròn (Pie Chart) chuyên dùng để biểu diễn cơ cấu tỉ lệ phần trăm của một tổng thể.'
      },
      {
        question: 'Để thể hiện xu hướng tăng trưởng hoặc biến động của dữ liệu liên tục theo thời gian (ví dụ nhiệt độ trong 7 ngày), ta nên dùng biểu đồ nào?',
        options: ['Biểu đồ đoạn thẳng / đường gấp khúc (Line Chart)', 'Biểu đồ tròn', 'Biểu đồ bong bóng', 'Bảng số liệu thô'],
        answerIndex: 0,
        hint: 'Các đường nối liền các điểm thể hiện sự lên xuống theo ngày tháng.',
        explanation: 'Biểu đồ đường (Line Chart) rất hiệu quả khi theo dõi xu hướng phát triển theo thời gian.'
      },
      {
        question: 'Để tạo một biểu đồ mới trong Excel, sau khi bôi đen vùng dữ liệu, ta truy cập vào thẻ nào trên thanh Ribbon?',
        options: ['Thẻ Insert (nhóm Charts)', 'Thẻ Home', 'Thẻ View', 'Thẻ File'],
        answerIndex: 0,
        hint: 'Insert có nghĩa là chèn vào tài liệu.',
        explanation: 'Mọi thao tác chèn hình ảnh, bảng biểu, biểu đồ đều nằm trong thẻ Insert.'
      }
    ]
  },
  {
    id: 'quiz-g7-s2-info-final',
    title: 'Tin học 7 - Đề Kiểm Tra Cuối Học Kỳ 2 (Tổng hợp Xử lý Dữ liệu Bảng tính)',
    titleEn: 'Informatics 7 - Semester 2 Final Examination (Comprehensive Data Processing)',
    grade: 7,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi kiểm tra cuối năm môn Tin học 7: Tổng hợp các hàm bảng tính, định dạng số, sắp xếp lọc dữ liệu và vẽ biểu đồ.',
    descriptionEn: 'Comprehensive end-of-year practical exam testing formulas, functions, formatting, sorting, and charts.',
    questions: [
      {
        question: 'Công thức =SUM(B2:B4, 10) với B2 = 5, B3 = 10, B4 = 15 sẽ cho kết quả là:',
        options: ['40', '30', '50', '20'],
        answerIndex: 0,
        hint: 'Cộng tổng (5 + 10 + 15) + 10.',
        explanation: 'Tổng B2:B4 là 30, cộng thêm 10 bằng 40.'
      },
      {
        question: 'Hàm nào sau đây đếm số lượng các ô chứa dữ liệu kiểu số trong một khối ô?',
        options: ['=COUNT()', '=COUNTA()', '=SUM()', '=NUMBER()'],
        answerIndex: 0,
        hint: 'Hàm đếm số ô số.',
        explanation: 'Hàm =COUNT(vùng_chọn) đếm các ô chứa dữ liệu số.'
      },
      {
        question: 'Để in tiêu đề cột xuất hiện lặp lại ở đầu mỗi trang in khi bảng tính quá dài nhiều trang, ta dùng tính năng nào?',
        options: ['Rows to repeat at top (trong mục Print Titles của thẻ Page Layout)', 'Copy và dán tiêu đề thủ công vào từng trang', 'Xóa bớt dữ liệu để vừa 1 trang', 'Chụp ảnh dán vào Word'],
        answerIndex: 0,
        hint: 'Tính năng lặp lại dòng tiêu đề trong thiết lập trang in.',
        explanation: 'Mục Rows to repeat at top tự động in lại dòng tiêu đề ở đầu mỗi trang in tiếp theo.'
      },
      {
        question: 'Khi sao chép công thức =A$1 + B2 xuống ô ngay phía dưới, công thức sẽ biến đổi thành:',
        options: ['=A$1 + B3', '=A$2 + B3', '=A1 + B2', '=A$1 + B1'],
        answerIndex: 0,
        hint: 'Dấu $ cố định hàng 1 của ô A$1 (địa chỉ hỗn hợp).',
        explanation: 'Hàng 1 được cố định bởi dấu $ nên giữ nguyên là A$1, còn B2 tịnh tiến thành B3.'
      },
      {
        question: 'Ưu điểm lớn nhất của việc sử dụng biểu đồ thay vì nhìn bảng số liệu thô là:',
        options: ['Giúp người xem dễ dàng quan sát, nắm bắt xu hướng so sánh và đưa ra quyết định nhanh chóng', 'Làm cho dung lượng tệp tin nặng hơn', 'Làm máy tính chạy chậm lại', 'Bắt buộc phải in màu tốn mực'],
        answerIndex: 0,
        hint: 'Một hình ảnh trực quan có giá trị hơn ngàn con số.',
        explanation: 'Biểu đồ trực quan hóa dữ liệu, giúp người đọc dễ so sánh và nắm bắt xu hướng cốt lõi.'
      },
      {
        question: 'Trong biểu đồ hình cột, trục nằm ngang (trục hoành) thường đại diện cho yếu tố gì?',
        options: ['Các đối tượng hoặc các mốc thời gian phân loại (Trục danh mục - Category Axis)', 'Giá trị số lượng đo lường', 'Màu sắc cột', 'Tên tác giả vẽ biểu đồ'],
        answerIndex: 0,
        hint: 'Trục X (trục ngang).',
        explanation: 'Trục hoành X biểu thị các hạng mục phân loại, trục tung Y biểu thị giá trị đo lường.'
      }
    ]
  }
];


