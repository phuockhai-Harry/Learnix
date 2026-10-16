import { CurriculumQuiz } from './curriculumData';

/**
 * Authoritative Curriculum Quizzes Database across All 12 Grades (Grades 1 to 12)
 * Aligned with the standard Vietnamese General Education Curriculum (GDPT 2018 - Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */
export const ALL_CURRICULUM_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // GRADE 1 (LỚP 1) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g1-s1-vietnamese',
    title: 'Tiếng Việt 1 - HK1: Nhận biết 29 Chữ cái & Ghép vần',
    titleEn: 'Vietnamese 1 - Sem 1: 29 Letters & Phonics Recognition',
    grade: 1,
    semester: 1,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    difficulty: 'easy',
    durationMinutes: 10,
    xpReward: 90,
    description: 'Nhận diện nguyên âm, phụ âm, 5 dấu thanh và ghép vần đơn giản theo sách Tiếng Việt 1.',
    descriptionEn: 'Recognize vowels, consonants, 5 tone marks, and blend simple syllables.',
    questions: [
      {
        question: 'Chữ cái nào sau đây là một nguyên âm trong bảng chữ cái tiếng Việt?',
        options: ['Chữ "A"', 'Chữ "B"', 'Chữ "C"', 'Chữ "D"'],
        answerIndex: 0,
        hint: 'Nguyên âm tự phát âm được không cần phụ âm kèm theo: a, ă, â, e, ê, i, o, ô, ơ, u, ư, y.',
        explanation: '"A" là nguyên âm chính đứng đầu bảng chữ cái tiếng Việt.'
      },
      {
        question: 'Ghép phụ âm "b" với nguyên âm "a" và dấu huyền (\`) ta được từ nào?',
        options: ['bà', 'ba', 'bá', 'bả'],
        answerIndex: 0,
        hint: 'Âm "b" + âm "a" = "ba", thêm thanh huyền thành "bà".',
        explanation: 'b - a - ba - huyền - bà. Chỉ người bà kính yêu trong gia đình.'
      },
      {
        question: 'Bảng chữ cái tiếng Việt chuẩn của Bộ Giáo dục có tất cả bao nhiêu chữ cái?',
        options: ['29 chữ cái', '26 chữ cái', '30 chữ cái', '24 chữ cái'],
        answerIndex: 0,
        hint: 'Bao gồm các chữ đặc trưng: ă, â, đ, ê, ô, ơ, ư.',
        explanation: 'Bảng chữ cái tiếng Việt chính thức có 29 chữ cái.'
      }
    ]
  },
  {
    id: 'quiz-g1-s1-math',
    title: 'Toán 1 - HK1: Các số 0 đến 10 & Phép cộng trừ cơ bản',
    titleEn: 'Math 1 - Sem 1: Numbers 0-10 & Addition within 10',
    grade: 1,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'easy',
    durationMinutes: 10,
    xpReward: 90,
    description: 'Đếm số, so sánh lớn hơn (>), bé hơn (<) và phép cộng trừ không nhớ trong phạm vi 10.',
    descriptionEn: 'Counting numbers 0 to 10, comparison symbols, and addition within 10.',
    questions: [
      {
        question: 'Tính kết quả: 5 + 3 = ?',
        options: ['8', '7', '9', '6'],
        answerIndex: 0,
        hint: 'Đếm thêm 3 từ số 5: 6, 7, 8.',
        explanation: '5 cộng thêm 3 đơn vị bằng 8.'
      },
      {
        question: 'Điền dấu thích hợp: 9 ... 6',
        options: ['Dấu lớn hơn (>)', 'Dấu bé hơn (<)', 'Dấu bằng (=)', 'Dấu cộng (+)'],
        answerIndex: 0,
        hint: '9 que tính nhiều hơn 6 que tính.',
        explanation: '9 lớn hơn 6, viết là 9 > 6.'
      },
      {
        question: 'Hình nào có 3 cạnh khép kín và 3 góc?',
        options: ['Hình tam giác', 'Hình vuông', 'Hình tròn', 'Hình chữ nhật'],
        answerIndex: 0,
        hint: 'Tam giác có 3 đỉnh và 3 cạnh.',
        explanation: 'Hình tam giác có 3 cạnh nối với nhau tạo thành 3 góc.'
      }
    ]
  },
  {
    id: 'quiz-g1-s2-math',
    title: 'Toán 1 - HK2: Các số đến 100 & Đo độ dài xăng-ti-mét',
    titleEn: 'Math 1 - Sem 2: Numbers to 100 & Centimeters Measurement',
    grade: 1,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'easy',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Số tròn chục, phép tính cộng trừ không nhớ trong phạm vi 100, đơn vị cm và xem giờ đúng.',
    descriptionEn: 'Tens numbers, addition/subtraction within 100, centimeter ruler, reading clock.',
    questions: [
      {
        question: 'Số gồm 4 chục và 7 đơn vị viết là:',
        options: ['47', '74', '407', '11'],
        answerIndex: 0,
        hint: 'Viết chữ số hàng chục (4) trước, chữ số hàng đơn vị (7) sau.',
        explanation: '4 chục và 7 đơn vị là số 47 (bốn mươi bảy).'
      },
      {
        question: 'Tính: 30 cm + 20 cm = ?',
        options: ['50 cm', '60 cm', '10 cm', '50'],
        answerIndex: 0,
        hint: '3 chục + 2 chục = 5 chục. Giữ nguyên đơn vị cm.',
        explanation: '30 cm + 20 cm = 50 cm.'
      },
      {
        question: 'Khi kim ngắn chỉ số 8 và kim dài chỉ đúng số 12, đồng hồ chỉ mấy giờ?',
        options: ['8 giờ đúng', '12 giờ đúng', '8 giờ 30 phút', '7 giờ đúng'],
        answerIndex: 0,
        hint: 'Kim dài chỉ số 12 là giờ đúng.',
        explanation: 'Kim ngắn chỉ số 8, kim dài chỉ số 12 biểu thị đúng 8 giờ.'
      }
    ]
  },
  {
    id: 'quiz-g1-s1-nature-society',
    title: 'TN&XH 1 - HK1: Gia đình em & Chăm sóc cơ thể',
    titleEn: 'Science 1 - Sem 1: My Family & Personal Hygiene',
    grade: 1,
    semester: 1,
    subject: 'Tự nhiên và Xã hội',
    subjectVi: 'Tự nhiên và Xã hội',
    subjectEn: 'Nature & Society',
    category: 'science',
    difficulty: 'easy',
    durationMinutes: 10,
    xpReward: 90,
    description: 'Các thành viên trong gia đình, các bộ phận cơ thể và thói quen vệ sinh lành mạnh.',
    descriptionEn: 'Family members, human body parts, and daily hygiene habits.',
    questions: [
      {
        question: 'Để giữ gìn đôi mắt luôn sáng và khỏe mạnh, em nên làm gì?',
        options: ['Đọc sách ở nơi đủ ánh sáng và không nhìn màn hình quá gần', 'Dụi tay bẩn vào mắt', 'Xem tivi sát màn hình', 'Đọc truyện trong bóng tối'],
        answerIndex: 0,
        hint: 'Ánh sáng đầy đủ và khoảng cách phù hợp bảo vệ thị lực.',
        explanation: 'Ngồi học nơi đủ ánh sáng và giữ khoảng cách khoảng 25-30cm giúp bảo vệ mắt.'
      },
      {
        question: 'Trước khi ăn cơm và sau khi đi vệ sinh, em cần làm gì?',
        options: ['Rửa tay sạch bằng xà phòng và nước sạch', 'Chỉ cần lau tay vào quần áo', 'Không cần rửa tay', 'Uống một cốc nước lạnh'],
        answerIndex: 0,
        hint: 'Rửa tay bằng xà phòng diệt vi khuẩn gây bệnh đường ruột.',
        explanation: 'Rửa tay bằng xà phòng bảo vệ đường tiêu hóa và ngăn ngừa bệnh truyền nhiễm.'
      }
    ]
  },

  // =========================================================================
  // GRADE 2 (LỚP 2) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g2-s1-math',
    title: 'Toán 2 - HK1: Phép cộng trừ có nhớ trong phạm vi 100',
    titleEn: 'Math 2 - Sem 1: Addition & Subtraction with Regrouping within 100',
    grade: 2,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Cộng trừ có nhớ dạng 28 + 5, 43 - 8, ngày tháng và đơn vị đo đê-xi-mét, lít, ki-lô-gam.',
    descriptionEn: 'Regrouping addition and subtraction, measurement units dm, kg, liter.',
    questions: [
      {
        question: 'Tính kết quả phép tính: 38 + 25 = ?',
        options: ['63', '53', '62', '58'],
        answerIndex: 0,
        hint: '8 + 5 = 13, viết 3 nhớ 1; 3 + 2 = 5, thêm 1 bằng 6.',
        explanation: '38 + 25 = 63.'
      },
      {
        question: '1 đề-xi-mét (dm) bằng bao nhiêu xăng-ti-mét (cm)?',
        options: ['10 cm', '100 cm', '1 cm', '1000 cm'],
        answerIndex: 0,
        hint: 'dm là đơn vị liền trước cm: 1 dm = 10 cm.',
        explanation: '1 dm = 10 cm.'
      },
      {
        question: 'Mẹ mua 15 lít dầu, đã dùng hết 8 lít dầu. Hỏi còn lại bao nhiêu lít dầu?',
        options: ['7 lít', '8 lít', '9 lít', '6 lít'],
        answerIndex: 0,
        hint: 'Lấy số dầu mẹ mua trừ đi số dầu đã dùng: 15 - 8.',
        explanation: '15 - 8 = 7 lít dầu.'
      }
    ]
  },
  {
    id: 'quiz-g2-s2-math',
    title: 'Toán 2 - HK2: Bảng nhân chia 2 và 5 & Số có ba chữ số',
    titleEn: 'Math 2 - Sem 2: Multiplication & Division 2, 5 & 3-Digit Numbers',
    grade: 2,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 12,
    xpReward: 110,
    description: 'Bảng nhân 2, 5, bảng chia 2, 5, so sánh số có 3 chữ số và đơn vị ki-lô-mét.',
    descriptionEn: 'Times tables 2 and 5, division, 3-digit number comparisons, kilometer unit.',
    questions: [
      {
        question: 'Tính: 5 x 7 = ?',
        options: ['35', '30', '40', '25'],
        answerIndex: 0,
        hint: 'Bảng nhân 5: 5 x 6 = 30, thêm 5 nữa.',
        explanation: '5 x 7 = 35.'
      },
      {
        question: 'Có 18 viên kẹo chia đều cho 2 bạn. Mỗi bạn được bao nhiêu viên kẹo?',
        options: ['9 viên kẹo', '8 viên kẹo', '10 viên kẹo', '7 viên kẹo'],
        answerIndex: 0,
        hint: 'Phép chia: 18 : 2 = ?',
        explanation: '18 : 2 = 9 viên kẹo.'
      },
      {
        question: '1 ki-lô-mét (km) bằng bao nhiêu mét (m)?',
        options: ['1000 m', '100 m', '10 m', '10000 m'],
        answerIndex: 0,
        hint: 'Tiền tố "kilo" tương ứng 1000.',
        explanation: '1 km = 1000 m.'
      }
    ]
  },
  {
    id: 'quiz-g2-s1-vietnamese',
    title: 'Tiếng Việt 2 - HK1: Từ chỉ sự vật, hoạt động & Câu kiểu Ai là gì?',
    titleEn: 'Vietnamese 2 - Sem 1: Nouns, Verbs & Sentence Structures',
    grade: 2,
    semester: 1,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    difficulty: 'medium',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Nhận biết từ chỉ người, đồ vật, con vật, câu giới thiệu Ai là gì? và mở rộng từ vựng.',
    descriptionEn: 'Identify nouns, action verbs, introductory sentence forms, and vocabulary.',
    questions: [
      {
        question: 'Câu nào dưới đây được viết theo mẫu câu "Ai là gì?" (câu giới thiệu)?',
        options: ['Bạn Mai là học sinh lớp 2A.', 'Bạn Mai đang đọc sách.', 'Bạn Mai rất chăm chỉ.', 'Bạn Mai chạy nhanh.'],
        answerIndex: 0,
        hint: 'Câu giới thiệu có từ "là" nối giữa chủ ngữ và lời giới thiệu nghề nghiệp, danh xưng.',
        explanation: '"Bạn Mai là học sinh lớp 2A" là câu giới thiệu theo mẫu Ai là gì.'
      },
      {
        question: 'Từ nào sau đây là từ chỉ hoạt động?',
        options: ['Chạy nhảy', 'Bàn ghế', 'Xinh đẹp', 'Dài ngoẵng'],
        answerIndex: 0,
        hint: 'Từ chỉ hoạt động thể hiện động tác của người hoặc con vật.',
        explanation: '"Chạy nhảy" là từ chỉ hoạt động, vận động của cơ thể.'
      }
    ]
  },

  // =========================================================================
  // GRADE 3 (LỚP 3) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g3-s1-math',
    title: 'Toán 3 - HK1: Bảng cửu chương 6, 7, 8, 9 & Góc vuông',
    titleEn: 'Math 3 - Sem 1: Times Tables 6-9 & Right Angles',
    grade: 3,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 14,
    xpReward: 110,
    description: 'Làm chủ bảng cửu chương nhân chia, góc vuông, góc không vuông, giải toán có lời văn bằng 2 phép tính.',
    descriptionEn: 'Multiplication tables 6-9, right angles, and 2-step word problems.',
    questions: [
      {
        question: 'Tính: 8 x 7 = ?',
        options: ['56', '54', '64', '48'],
        answerIndex: 0,
        hint: 'Theo bảng nhân 8: 8 x 6 = 48, 48 + 8 = 56.',
        explanation: '8 x 7 = 56.'
      },
      {
        question: 'Thước ê-ke dùng để kiểm tra góc nào?',
        options: ['Góc vuông', 'Góc nhọn', 'Góc tù', 'Độ dài đoạn thẳng bất kỳ'],
        answerIndex: 0,
        hint: 'Ê-ke có một góc 90 độ gọi là góc vuông.',
        explanation: 'Thước ê-ke có một góc vuông chuẩn dùng để nhận biết và vẽ góc vuông.'
      },
      {
        question: 'Giảm 48 đi 6 lần ta được kết quả là:',
        options: ['8', '42', '288', '7'],
        answerIndex: 0,
        hint: 'Muốn giảm một số đi nhiều lần, ta lấy số đó chia cho số lần: 48 : 6.',
        explanation: 'Giảm đi 6 lần tức là lấy 48 : 6 = 8.'
      }
    ]
  },
  {
    id: 'quiz-g3-s2-math',
    title: 'Toán 3 - HK2: Diện tích hình chữ nhật & Số đến 100.000',
    titleEn: 'Math 3 - Sem 2: Rectangle Area & Numbers to 100,000',
    grade: 3,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Chu vi và diện tích hình chữ nhật, hình vuông, phép cộng trừ nhân chia số có 5 chữ số.',
    descriptionEn: 'Area & perimeter formulas, arithmetic with 5-digit numbers to 100,000.',
    questions: [
      {
        question: 'Một hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm. Diện tích hình chữ nhật đó là:',
        options: ['40 cm²', '26 cm²', '13 cm²', '40 cm'],
        answerIndex: 0,
        hint: 'Diện tích hình chữ nhật = chiều dài x chiều rộng. Đơn vị diện tích có số mũ 2 (cm²).',
        explanation: 'S = 8 x 5 = 40 cm².'
      },
      {
        question: 'Một hình vuông có cạnh dài 7 cm. Chu vi của hình vuông đó là:',
        options: ['28 cm', '49 cm²', '21 cm', '14 cm'],
        answerIndex: 0,
        hint: 'Chu vi hình vuông = độ dài 1 cạnh nhân với 4.',
        explanation: 'P = 7 x 4 = 28 cm.'
      },
      {
        question: 'Số liền sau của số 99.999 là số nào?',
        options: ['100.000', '99.998', '100.001', '1.000.000'],
        answerIndex: 0,
        hint: 'Lấy số đó cộng thêm 1 đơn vị: 99.999 + 1.',
        explanation: '99.999 + 1 = 100.000 (Một trăm nghìn).'
      }
    ]
  },
  {
    id: 'quiz-g3-s1-vietnamese',
    title: 'Tiếng Việt 3 - HK1: Nghệ thuật So sánh & Luyện câu',
    titleEn: 'Vietnamese 3 - Sem 1: Simile Arts & Sentence Analysis',
    grade: 3,
    semester: 1,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    difficulty: 'medium',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Nhận biết hình ảnh so sánh (sự vật 1 - từ so sánh - sự vật 2), mở rộng vốn từ quê hương và trường học.',
    descriptionEn: 'Simile structures, creative imagery, sentence expansion.',
    questions: [
      {
        question: 'Trong câu thơ: "Trẻ em như búp trên cành", sự vật nào được so sánh với "trẻ em"?',
        options: ['Búp trên cành', 'Cái cây', 'Mặt trời', 'Bông hoa'],
        answerIndex: 0,
        hint: 'Từ so sánh là "như". Sự vật đứng sau từ "như" là hình ảnh so sánh.',
        explanation: 'Tác giả so sánh trẻ em non nớt, đáng yêu như búp non trên cành cây.'
      },
      {
        question: 'Dấu câu nào dùng để kết thúc một câu hỏi?',
        options: ['Dấu chấm hỏi (?)', 'Dấu chấm (.)', 'Dấu chấm than (!)', 'Dấu phẩy (,)'],
        answerIndex: 0,
        hint: 'Câu hỏi nhằm mục đích thắc mắc, tìm kiếm câu trả lời.',
        explanation: 'Dấu chấm hỏi (?) luôn được đặt ở cuối câu nghi vấn/câu hỏi.'
      }
    ]
  },
  {
    id: 'quiz-g3-s1-tech',
    title: 'Tin học 3 - HK1: Bàn phím máy tính & Khám phá phần mềm',
    titleEn: 'Informatics 3 - Sem 1: Computer Keyboard & Software Basics',
    grade: 3,
    semester: 1,
    subject: 'Tin học & Công nghệ',
    subjectVi: 'Tin học & Công nghệ',
    subjectEn: 'Informatics & Tech',
    category: 'tech',
    difficulty: 'easy',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Thao tác chuột, cấu tạo bàn phím, hàng phím cơ sở và gõ 10 ngón cơ bản.',
    descriptionEn: 'Mouse control, keyboard rows, home row keys F and J, touch typing.',
    questions: [
      {
        question: 'Hai phím nào trên bàn phím có gờ nổi để đặt hai ngón tay trỏ khi gõ 10 ngón?',
        options: ['Phím F và phím J', 'Phím A và phím L', 'Phím Space và Enter', 'Phím G và H'],
        answerIndex: 0,
        hint: 'Nằm ở hàng phím cơ sở (Home row).',
        explanation: 'Phím F (ngón trỏ trái) và J (ngón trỏ phải) có gờ nhỏ giúp định vị bàn tay mà không cần nhìn bàn phím.'
      },
      {
        question: 'Bộ phận nào của máy tính hiển thị hình ảnh và kết quả làm việc cho người dùng xem?',
        options: ['Màn hình (Monitor)', 'Bàn phím (Keyboard)', 'Chuột (Mouse)', 'Thân máy (CPU Case)'],
        answerIndex: 0,
        hint: 'Thiết bị xuất hình ảnh ra ngoài.',
        explanation: 'Màn hình là thiết bị xuất hiển thị văn bản, hình ảnh và giao diện làm việc.'
      }
    ]
  },

  // =========================================================================
  // GRADE 4 (LỚP 4) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g4-s1-math',
    title: 'Toán 4 - HK1: Số đến lớp triệu, Góc & Hai đường thẳng song song',
    titleEn: 'Math 4 - Sem 1: Millions Class, Angles & Parallel Lines',
    grade: 4,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Đọc viết số lớn, dấu hiệu chia hết cho 2, 5, 9, 3, góc nhọn/tù/bẹt, hai đường thẳng song song và vuông góc.',
    descriptionEn: 'Millions class, divisibility rules, angles classification, parallel and perpendicular lines.',
    questions: [
      {
        question: 'Số nào sau đây chia hết cho cả 2 và 5?',
        options: ['Số có chữ số tận cùng là 0', 'Số có chữ số tận cùng là 5', 'Số chẵn bất kỳ', 'Số có tổng các chữ số chia hết cho 9'],
        answerIndex: 0,
        hint: 'Chia hết cho 2 thì chữ số tận cùng chẵn (0,2,4,6,8); chia hết cho 5 thì tận cùng 0 hoặc 5.',
        explanation: 'Số có chữ số tận cùng là 0 thì vừa chia hết cho 2 vừa chia hết cho 5.'
      },
      {
        question: 'Góc có số đo lớn hơn góc vuông (90°) và nhỏ hơn góc bẹt (180°) gọi là góc gì?',
        options: ['Góc tù', 'Góc nhọn', 'Góc bẹt', 'Góc vuông'],
        answerIndex: 0,
        hint: 'Góc nhọn < 90°, góc tù > 90° và < 180°.',
        explanation: 'Góc tù là góc có số đo lớn hơn góc vuông và nhỏ hơn góc bẹt.'
      },
      {
        question: 'Tính giá trị biểu thức: 125 x 8 = ?',
        options: ['1000', '100', '1250', '800'],
        answerIndex: 0,
        hint: 'Bộ đôi quen thuộc tính nhanh: 125 x 8 = 1000.',
        explanation: '125 x 8 = 1000.'
      }
    ]
  },
  {
    id: 'quiz-g4-s2-math',
    title: 'Toán 4 - HK2: Phân số & Các phép tính phân số',
    titleEn: 'Math 4 - Sem 2: Fractions & Arithmetic Operations',
    grade: 4,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 15,
    xpReward: 130,
    description: 'Quy đồng mẫu số, rút gọn phân số, phép cộng trừ nhân chia phân số và hình thoi.',
    descriptionEn: 'Common denominator, fraction simplification, 4 fraction operations, rhombus area.',
    questions: [
      {
        question: 'Rút gọn phân số 18/24 về phân số tối giản:',
        options: ['3/4', '9/12', '6/8', '2/3'],
        answerIndex: 0,
        hint: 'Ước chung lớn nhất của 18 và 24 là 6. Chia cả tử và mẫu cho 6.',
        explanation: '18 : 6 / 24 : 6 = 3/4.'
      },
      {
        question: 'Tính: 2/3 + 1/4 = ?',
        options: ['11/12', '3/7', '3/12', '5/12'],
        answerIndex: 0,
        hint: 'Mẫu số chung là 12. 2/3 = 8/12; 1/4 = 3/12.',
        explanation: '8/12 + 3/12 = 11/12.'
      },
      {
        question: 'Tính: (3/5) x (4/7) = ?',
        options: ['12/35', '7/12', '12/25', '15/28'],
        answerIndex: 0,
        hint: 'Tử số nhân tử số, mẫu số nhân mẫu số: (3 x 4) / (5 x 7).',
        explanation: '(3 x 4) / (5 x 7) = 12/35.'
      }
    ]
  },
  {
    id: 'quiz-g4-s1-science',
    title: 'Khoa học 4 - HK1: Nước, Không khí & Dinh dưỡng',
    titleEn: 'Science 4 - Sem 1: Water, Air Properties & Human Nutrition',
    grade: 4,
    semester: 1,
    subject: 'Khoa học',
    subjectVi: 'Khoa học',
    subjectEn: 'Science',
    category: 'science',
    difficulty: 'medium',
    durationMinutes: 12,
    xpReward: 110,
    description: 'Tính chất của nước, vòng tuần hoàn của nước, thành phần không khí và 4 nhóm chất dinh dưỡng.',
    descriptionEn: 'Properties of water, water cycle, air composition, 4 food nutrient groups.',
    questions: [
      {
        question: 'Nước có những tính chất vật lý nào sau đây ở điều kiện bình thường?',
        options: ['Là chất lỏng không màu, không mùi, không vị, không có hình dạng nhất định', 'Có màu trắng đục và vị ngọt', 'Có hình dạng cố định như hình tròn', 'Không thể hòa tan bất kỳ chất nào'],
        answerIndex: 0,
        hint: 'Nước tinh khiết trong suốt và chảy loang trên mặt phẳng.',
        explanation: 'Nước là chất lỏng trong suốt, không màu, không mùi, không vị, chảy từ cao xuống thấp và hòa tan được nhiều chất.'
      },
      {
        question: 'Khí nào trong không khí duy trì sự cháy và sự sống của con người, động vật?',
        options: ['Khí Oxy (Oxygen)', 'Khí Nitơ (Nitrogen)', 'Khí Carbonic', 'Khí Heli'],
        answerIndex: 0,
        hint: 'Khí chiếm khoảng 21% thể tích khí quyển.',
        explanation: 'Khí oxy cần thiết cho quá trình hô hấp của sinh vật và duy trì sự cháy.'
      }
    ]
  },
  {
    id: 'quiz-g4-s1-history-geo',
    title: 'Lịch sử & Địa lý 4 - HK1: Buổi đầu dựng nước & Vùng núi Bắc Bộ',
    titleEn: 'History & Geography 4 - Sem 1: Ancient Vietnam & Northern Highlands',
    grade: 4,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    difficulty: 'medium',
    durationMinutes: 14,
    xpReward: 110,
    description: 'Nước Văn Lang thời Hùng Vương, thành Cổ Loa, địa hình và các dân tộc vùng núi phía Bắc.',
    descriptionEn: 'Van Lang kingdom under Hung Kings, Co Loa citadel, northern ethnic communities.',
    questions: [
      {
        question: 'Nhà nước đầu tiên trong lịch sử dân tộc Việt Nam có tên là gì?',
        options: ['Nhà nước Văn Lang (đứng đầu là Hùng Vương)', 'Nhà nước Âu Lạc (An Dương Vương)', 'Nước Vạn Xuân (Lý Nam Đế)', 'Đại Cồ Việt (Đinh Tiên Hoàng)'],
        answerIndex: 0,
        hint: 'Thời kỳ gắn với truyền thuyết 18 đời vua Hùng dựng nước tại Phong Châu (Phú Thọ).',
        explanation: 'Nhà nước Văn Lang do các vua Hùng đứng đầu là nhà nước đầu tiên của dân tộc Việt Nam.'
      },
      {
        question: 'Địa hình đặc trưng của vùng Trung du Bắc Bộ là gì?',
        options: ['Những đồi hình bát úp, sườn thoải xen kẽ đồng ruộng mương lạch', 'Các dãy núi đá vôi dốc đứng', 'Bình nguyên ngập nước quanh năm', 'Sa mạc cát ven biển'],
        answerIndex: 0,
        hint: 'Nổi tiếng với những đồi chè xanh mướt uốn lượn hình bát úp.',
        explanation: 'Vùng trung du Bắc Bộ có địa hình đồi tròn hình bát úp, sườn thoải rất thích hợp trồng chè và cây ăn quả.'
      }
    ]
  },

  // =========================================================================
  // GRADE 5 (LỚP 5) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g5-s1-math-fractions',
    title: 'Toán 5 - HK1: Phân số & Hỗn số nâng cao',
    titleEn: 'Math 5 - Sem 1: Advanced Fractions & Mixed Numbers',
    grade: 5,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Nắm vững quy tắc quy đồng mẫu số, chuyển đổi hỗn số và bài toán tìm x với phân số.',
    descriptionEn: 'Master common denominators, mixed number conversion, and fraction equations.',
    questions: [
      {
        question: 'Tính giá trị của biểu thức: 3/4 + 2/5 = ?',
        options: ['23/20 (tức 1 và 3/20)', '5/9', '6/20', '1 và 1/4'],
        answerIndex: 0,
        hint: 'Quy đồng mẫu số chung nhỏ nhất của 4 và 5 là 20. Ta có 3/4 = 15/20 và 2/5 = 8/20.',
        explanation: 'Mẫu số chung là 20: 3/4 = 15/20; 2/5 = 8/20. Cộng lại: 15/20 + 8/20 = 23/20.'
      },
      {
        question: 'Chuyển đổi hỗn số 4 và 3/7 thành phân số tối giản:',
        options: ['31/7', '19/7', '12/7', '28/7'],
        answerIndex: 0,
        hint: 'Tử số = (phần nguyên x mẫu) + tử số: 4 x 7 + 3.',
        explanation: '(4 x 7 + 3) / 7 = 31/7.'
      },
      {
        question: 'Một mảnh đất hình chữ nhật có chiều dài 4/5 km, chiều rộng bằng 3/4 chiều dài. Tính chiều rộng của mảnh đất:',
        options: ['3/5 km', '7/9 km', '1/2 km', '12/25 km'],
        answerIndex: 0,
        hint: 'Nhân phân số: 4/5 x 3/4.',
        explanation: '4/5 x 3/4 = 12/20 = 3/5 km.'
      }
    ]
  },
  {
    id: 'quiz-g5-s1-science-energy',
    title: 'Khoa học 5 - HK1: Năng lượng & Sự biến đổi của chất',
    titleEn: 'Science 5 - Sem 1: Energy & Physical Changes',
    grade: 5,
    semester: 1,
    subject: 'Khoa học',
    subjectVi: 'Khoa học',
    subjectEn: 'Science',
    category: 'science',
    difficulty: 'easy',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Khám phá các nguồn năng lượng sạch, hiện tượng bay hơi, ngưng tụ và an toàn sử dụng điện.',
    descriptionEn: 'Discover renewable energy, condensation, evaporation, and electrical safety.',
    questions: [
      {
        question: 'Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo (sạch, không cạn kiệt)?',
        options: ['Năng lượng mặt trời và gió', 'Than đá', 'Dầu mỏ', 'Khí đốt thiên nhiên'],
        answerIndex: 0,
        hint: 'Năng lượng tái tạo là năng lượng tự nhiên liên tục được tái sinh.',
        explanation: 'Năng lượng mặt trời và gió là nguồn năng lượng sạch vô tận, không gây ô nhiễm.'
      },
      {
        question: 'Hiện tượng nước chuyển từ thể lỏng sang thể khí (hơi) ở bề mặt gọi là gì?',
        options: ['Sự bay hơi', 'Sự ngưng tụ', 'Sự đông đặc', 'Sự nóng chảy'],
        answerIndex: 0,
        hint: 'Hiện tượng khi phơi quần áo ướt dưới ánh nắng.',
        explanation: 'Sự bay hơi là quá trình chuyển thể từ lỏng sang khí diễn ra ở bề mặt chất lỏng.'
      }
    ]
  },
  {
    id: 'quiz-g5-s2-math-decimals-percent',
    title: 'Toán 5 - HK2: Tỉ số phần trăm & Thể tích hình hộp',
    titleEn: 'Math 5 - Sem 2: Percentages & Volume Calculations',
    grade: 5,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 150,
    description: 'Giải các bài toán thực tế về tỉ số phần trăm, diện tích toàn phần và thể tích hình lập phương, hình hộp chữ nhật.',
    descriptionEn: 'Solve real-world percentage problems and geometric volumes of rectangular prisms.',
    questions: [
      {
        question: 'Lớp 5A có 40 học sinh, trong đó có 24 học sinh nữ. Tỉ số phần trăm của số học sinh nữ so với cả lớp là bao nhiêu?',
        options: ['60%', '40%', '65%', '55%'],
        answerIndex: 0,
        hint: 'Tính thương: (24 : 40) x 100%.',
        explanation: '24 : 40 = 0.6 = 60%. Học sinh nữ chiếm 60% cả lớp.'
      },
      {
        question: 'Một hình hộp chữ nhật có chiều dài 8cm, chiều rộng 5cm và chiều cao 6cm. Thể tích của hình hộp chữ nhật đó là:',
        options: ['240 cm³', '120 cm³', '214 cm³', '480 cm³'],
        answerIndex: 0,
        hint: 'Công thức thể tích V = a x b x c.',
        explanation: 'V = 8 x 5 x 6 = 240 cm³.'
      }
    ]
  },
  {
    id: 'quiz-g5-s1-vietnamese-grammar',
    title: 'Tiếng Việt 5 - HK1: Đại từ, Từ đồng nghĩa & Văn miêu tả cảnh',
    titleEn: 'Vietnamese 5 - Sem 1: Pronouns, Synonyms & Landscape Essays',
    grade: 5,
    semester: 1,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    difficulty: 'medium',
    durationMinutes: 14,
    xpReward: 110,
    description: 'Từ đồng nghĩa hoàn toàn/không hoàn toàn, đại từ xưng hô và nghệ thuật miêu tả cảnh sắc quê hương.',
    descriptionEn: 'Absolute synonyms, personal pronouns, and descriptive language devices.',
    questions: [
      {
        question: 'Cặp từ nào dưới đây là cặp từ đồng nghĩa hoàn toàn (có thể thay thế cho nhau)?',
        options: ['Mẹ - Má (U)', 'Ăn - Xơi (khác sắc thái biểu cảm)', 'To lớn - Vĩ đại (khác quy mô)', 'Chết - Hy sinh (khác sự tôn kính)'],
        answerIndex: 0,
        hint: 'Từ đồng nghĩa hoàn toàn có nghĩa tương đương, chỉ mang yếu tố vùng miền.',
        explanation: 'Mẹ, má, u đều chỉ người phụ nữ sinh ra mình, là từ đồng nghĩa hoàn toàn.'
      },
      {
        question: 'Từ nào sau đây là đại từ dùng để xưng hô?',
        options: ['Chúng tôi', 'Ngôi nhà', 'Chạy nhảy', 'Xanh ngắt'],
        answerIndex: 0,
        hint: 'Đại từ xưng hô chỉ người nói ngôi thứ nhất số nhiều.',
        explanation: '"Chúng tôi" là đại từ nhân xưng chỉ nhóm người nói.'
      }
    ]
  },

  // =========================================================================
  // GRADE 6 (LỚP 6) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g6-s1-math-integers',
    title: 'Toán 6 - HK1: Tập hợp Số nguyên & Quy tắc Dấu ngoặc',
    titleEn: 'Math 6 - Sem 1: Integers Set & Parenthesis Rules',
    grade: 6,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Cộng trừ nhân chia số nguyên âm và dương, quy tắc chuyển vế và bỏ dấu ngoặc trong Z.',
    descriptionEn: 'Integer arithmetic, negative numbers, parenthesis removal rules in Z.',
    questions: [
      {
        question: 'Tính giá trị của biểu thức: (-15) + (-25) = ?',
        options: ['-40', '40', '-10', '10'],
        answerIndex: 0,
        hint: 'Cộng hai số nguyên cùng dấu âm: cộng phần tự nhiên rồi đặt dấu trừ.',
        explanation: '(-15) + (-25) = -(15 + 25) = -40.'
      },
      {
        question: 'Tính: (-6) x (-8) = ?',
        options: ['48 (dương)', '-48', '14', '-14'],
        answerIndex: 0,
        hint: 'Âm nhân âm ra dương.',
        explanation: 'Tích hai số nguyên cùng dấu là số dương: (-6) x (-8) = +48.'
      },
      {
        question: 'Quy tắc bỏ dấu ngoặc có dấu trừ (-) đằng trước:',
        options: ['Phải đổi dấu tất cả các số hạng trong ngoặc (+ thành -, - thành +)', 'Giữ nguyên dấu tất cả các số hạng', 'Chỉ đổi dấu số hạng đầu tiên', 'Bỏ dấu trừ và giữ nguyên'],
        answerIndex: 0,
        hint: '-(a - b) = -a + b.',
        explanation: 'Khi bỏ dấu ngoặc có dấu trừ đằng trước, phải đổi dấu tất cả các số hạng trong ngoặc.'
      }
    ]
  },
  {
    id: 'quiz-g6-s1-science-cells',
    title: 'KHTN 6 - HK1: Tế bào - Đơn vị cơ bản của sự sống',
    titleEn: 'Science 6 - Sem 1: Cells - The Basic Unit of Life',
    grade: 6,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 110,
    description: 'Cấu tạo tế bào nhân sơ, nhân thực, màng sinh chất, tế bào chất và lục lạp thực vật.',
    descriptionEn: 'Cellular anatomy: membrane, cytoplasm, nucleus, and plant chloroplasts.',
    questions: [
      {
        question: 'Bào quan nào chỉ có ở tế bào thực vật mà không có ở tế bào động vật, giúp thực vật quang hợp?',
        options: ['Lục lạp (chứa diệp lục)', 'Màng tế bào', 'Ti thể', 'Nhân tế bào'],
        answerIndex: 0,
        hint: 'Chứa chất diệp lục màu xanh hấp thụ ánh sáng.',
        explanation: 'Lục lạp giúp cây quang hợp tổng hợp glucose và giải phóng oxy.'
      },
      {
        question: 'Thành phần nào giữ vai trò là "trung tâm điều khiển" mọi hoạt động sống của tế bào?',
        options: ['Nhân tế bào (hoặc vùng nhân)', 'Màng sinh chất', 'Tế bào chất', 'Không bào'],
        answerIndex: 0,
        hint: 'Nơi chứa nhiễm sắc thể và ADN mang thông tin di truyền.',
        explanation: 'Nhân tế bào chứa vật chất di truyền ADN điều khiển hoạt động sinh dưỡng và sinh sản.'
      }
    ]
  },
  {
    id: 'quiz-g6-s1-literature',
    title: 'Ngữ văn 6 - HK1: Truyền thuyết, Cổ tích & Thơ lục bát',
    titleEn: 'Literature 6 - Sem 1: Legends, Fairy Tales & Traditional Poetry',
    grade: 6,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    difficulty: 'medium',
    durationMinutes: 14,
    xpReward: 110,
    description: 'Đặc trưng thể loại truyền thuyết, cổ tích (Thánh Gióng, Sơn Tinh Thủy Tinh, Thạch Sanh) và luật thơ lục bát.',
    descriptionEn: 'Folklore legend structures, fairy tale motifs, and six-eight verse meter.',
    questions: [
      {
        question: 'Hình tượng Thánh Gióng cưỡi ngựa sắt, nhổ tre đánh giặc Ân thể hiện điều gì của dân tộc Việt Nam?',
        options: ['Khát vọng và sức mạnh chống ngoại xâm bảo vệ non sông', 'Tài năng rèn kim loại đúc sắt', 'Sự phát triển của nông nghiệp', 'Lòng hiếu thảo với cha mẹ'],
        answerIndex: 0,
        hint: 'Thánh Gióng là biểu tượng của tinh thần quật cường yêu nước.',
        explanation: 'Thánh Gióng là biểu tượng bất tử cho ý chí kiên cường chống giặc cứu nước của dân tộc Việt Nam.'
      },
      {
        question: 'Trong thể thơ lục bát, tiếng thứ mấy của câu sáu bắt vần với tiếng thứ mấy của câu tám?',
        options: ['Tiếng thứ 6 câu sáu vần với tiếng thứ 6 câu tám', 'Tiếng thứ 4 câu sáu vần với tiếng thứ 4 câu tám', 'Tiếng thứ 6 câu sáu vần với tiếng thứ 8 câu tám', 'Tiếng cuối câu sáu vần với tiếng đầu câu tám'],
        answerIndex: 0,
        hint: 'Luật gieo vần bằng: 6 lục vần với 6 bát.',
        explanation: 'Quy tắc cơ bản: Tiếng thứ 6 của câu lục hiệp vần với tiếng thứ 6 của câu bát bằng vần bằng.'
      }
    ]
  },
  {
    id: 'quiz-g6-s1-english',
    title: 'Tiếng Anh 6 - HK1: My New School & Daily Activities',
    titleEn: 'English 6 - Sem 1: My New School & Daily Activities',
    grade: 6,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Thì hiện tại đơn, hiện tại tiếp diễn, giới từ chỉ nơi chốn và từ vựng học đường.',
    descriptionEn: 'Present simple vs present continuous, prepositions, school subjects and routines.',
    questions: [
      {
        question: 'Choose the correct form: "Look! The students ... football in the school playground."',
        options: ['are playing', 'plays', 'play', 'played'],
        answerIndex: 0,
        hint: '"Look!" signals an action happening right at this moment (Present Continuous).',
        explanation: 'Look! là dấu hiệu thì hiện tại tiếp diễn: S + am/is/are + V-ing => are playing.'
      },
      {
        question: 'Which preposition is used for days of the week (e.g., ... Monday)?',
        options: ['on', 'in', 'at', 'by'],
        answerIndex: 0,
        hint: 'On Monday, On Friday, On weekends.',
        explanation: 'Giới từ "on" đi trước các ngày trong tuần: on Monday, on Sunday.'
      }
    ]
  },

  // =========================================================================
  // GRADE 7 (LỚP 7) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g7-s1-math',
    title: 'Toán 7 - HK1: Số hữu tỉ & Các trường hợp Tam giác bằng nhau',
    titleEn: 'Math 7 - Sem 1: Rational Numbers & Triangle Congruence',
    grade: 7,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 16,
    xpReward: 130,
    description: 'Lũy thừa số hữu tỉ, căn bậc hai số học, hai góc so le trong, ba trường hợp bằng nhau c-c-c, c-g-c, g-c-g.',
    descriptionEn: 'Rational powers, square roots, parallel transversals, triangle congruence proofs.',
    questions: [
      {
        question: 'Số nào sau đây KHÔNG PHẢI là số hữu tỉ?',
        options: ['Số pi (π = 3.14159...)', 'Số 0.75 (3/4)', 'Số -5 (-5/1)', 'Số 0 (0/1)'],
        answerIndex: 0,
        hint: 'Số hữu tỉ viết được dưới dạng phân số a/b (a, b thuộc Z, b khác 0). Số vô tỉ thì không.',
        explanation: 'Số pi là số vô tỉ với phần thập phân vô hạn không tuần hoàn, không viết được dưới dạng a/b.'
      },
      {
        question: 'Nếu hai tam giác có ba cạnh tương ứng bằng nhau thì hai tam giác đó bằng nhau theo trường hợp nào?',
        options: ['Cạnh - Cạnh - Cạnh (c - c - c)', 'Cạnh - Góc - Cạnh (c - g - c)', 'Góc - Cạnh - Góc (g - c - g)', 'Cạnh huyền - góc nhọn'],
        answerIndex: 0,
        hint: 'Cả ba cạnh đều bằng nhau.',
        explanation: 'Đó là trường hợp bằng nhau thứ nhất của tam giác: cạnh - cạnh - cạnh (c - c - c).'
      }
    ]
  },
  {
    id: 'quiz-g7-s1-science',
    title: 'KHTN 7 - HK1: Tốc độ chuyển động, Sóng âm & Phân tử',
    titleEn: 'Science 7 - Sem 1: Kinematic Speed, Sound Waves & Molecules',
    grade: 7,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Công thức v = s/t, đồ thị quãng đường - thời gian, môi trường truyền âm và nguyên tử bảng tuần hoàn.',
    descriptionEn: 'Speed equation, distance-time graphs, acoustic wave media, chemical symbols.',
    questions: [
      {
        question: 'Một người đi xe máy đi được quãng đường 90 km trong thời gian 2 giờ. Tốc độ chuyển động của người đó là:',
        options: ['45 km/h', '180 km/h', '92 km/h', '40 km/h'],
        answerIndex: 0,
        hint: 'Công thức tính tốc độ: v = s / t.',
        explanation: 'v = s / t = 90 / 2 = 45 km/h.'
      },
      {
        question: 'Âm thanh KHÔNG THỂ truyền qua môi trường nào sau đây?',
        options: ['Môi trường chân không', 'Chất rắn (như thanh thép)', 'Chất lỏng (như nước biển)', 'Chất khí (như không khí)'],
        answerIndex: 0,
        hint: 'Âm thanh cần các phân tử vật chất để dao động và lan truyền.',
        explanation: 'Chân không không có các phân tử vật chất nên sóng âm không thể truyền qua được.'
      }
    ]
  },

  // =========================================================================
  // GRADE 8 (LỚP 8) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g8-s1-math-identities',
    title: 'Toán 8 - HK1: 7 Hằng đẳng thức đáng nhớ & Phân tích đa thức',
    titleEn: 'Math 8 - Sem 1: 7 Algebraic Identities & Polynomial Factoring',
    grade: 8,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 18,
    xpReward: 140,
    description: 'Vận dụng thành thạo bình phương của một tổng, hiệu hai bình phương và phương pháp đặt nhân tử chung.',
    descriptionEn: 'Apply square of a sum, difference of squares, and common factor decomposition.',
    questions: [
      {
        question: 'Khai triển hằng đẳng thức (2x + 3y)² cho kết quả là:',
        options: ['4x² + 12xy + 9y²', '4x² + 6xy + 9y²', '4x² + 9y²', '2x² + 12xy + 3y²'],
        answerIndex: 0,
        hint: '(A + B)² = A² + 2AB + B². Ở đây A = 2x, B = 3y.',
        explanation: '(2x)² + 2(2x)(3y) + (3y)² = 4x² + 12xy + 9y².'
      },
      {
        question: 'Phân tích đa thức sau thành nhân tử: x² - 16',
        options: ['(x - 4)(x + 4)', '(x - 4)²', '(x + 4)²', '(x - 8)(x + 2)'],
        answerIndex: 0,
        hint: 'Sử dụng hiệu hai bình phương: A² - B² = (A - B)(A + B).',
        explanation: 'x² - 16 = x² - 4² = (x - 4)(x + 4).'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-chem-reactions',
    title: 'KHTN 8 - HK1: Định luật Bảo toàn khối lượng & Tính theo mol',
    titleEn: 'Science 8 - Sem 1: Mass Conservation & Stoichiometry Moles',
    grade: 8,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Cân bằng phương trình hóa học, tính số mol n = m/M và định luật bảo toàn khối lượng Lomonosov - Lavoisier.',
    descriptionEn: 'Balance chemical equations, calculate moles, and apply conservation of mass.',
    questions: [
      {
        question: 'Cân bằng phương trình: Al + O2 -> Al2O3. Các hệ số nguyên tối giản lần lượt là:',
        options: ['4, 3, 2', '2, 3, 1', '4, 6, 2', '2, 1, 1'],
        answerIndex: 0,
        hint: '4 nguyên tử Al và 6 nguyên tử O ở hai vế.',
        explanation: '4Al + 3O2 -> 2Al2O3.'
      },
      {
        question: 'Khối lượng của 0.5 mol khí Oxy (O2, phân tử khối M = 32 g/mol) là bao nhiêu gam?',
        options: ['16 gam', '32 gam', '64 gam', '8 gam'],
        answerIndex: 0,
        hint: 'Công thức m = n x M.',
        explanation: 'm = 0.5 x 32 = 16 gam.'
      }
    ]
  },

  // =========================================================================
  // GRADE 9 (LỚP 9) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g9-s1-math-radicals',
    title: 'Toán 9 - HK1: Căn bậc hai & Hệ hai phương trình bậc nhất',
    titleEn: 'Math 9 - Sem 1: Square Roots & 2-Variable Linear Systems',
    grade: 9,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 160,
    description: 'Trọng tâm ôn thi tuyển sinh lớp 10: rút gọn biểu thức căn thức bậc hai, giải hệ phương trình bằng phương pháp thế và cộng đại số.',
    descriptionEn: 'Grade 10 entrance exam core: radical expressions simplification and 2-variable linear equations.',
    questions: [
      {
        question: 'Rút gọn biểu thức √( (3 - √11)² ) ta được kết quả là:',
        options: ['√11 - 3', '3 - √11', '-(√11 - 3)', '3 + √11'],
        answerIndex: 0,
        hint: '√(A²) = |A|. Vì 3 = √9 < √11 nên 3 - √11 < 0 => |3 - √11| = √11 - 3.',
        explanation: '√(A²) = |A| = |3 - √11| = √11 - 3.'
      },
      {
        question: 'Nghiệm của hệ phương trình: { 2x + y = 7 ; x - y = 2 } là:',
        options: ['(x = 3; y = 1)', '(x = 2; y = 3)', '(x = 1; y = 5)', '(x = 4; y = -1)'],
        answerIndex: 0,
        hint: 'Cộng hai vế: 3x = 9 => x = 3; y = 1.',
        explanation: 'Cộng hai phương trình: 3x = 9 => x = 3. Thay vào pt 2: 3 - y = 2 => y = 1. Nghiệm (3; 1).'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-math-vieta',
    title: 'Toán 9 - HK2: Phương trình bậc hai, Định lý Vi-ét & Đường tròn',
    titleEn: 'Math 9 - Sem 2: Quadratic Equations, Vieta Theorem & Circles',
    grade: 9,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 25,
    xpReward: 180,
    description: 'Chuyên đề ôn thi vào lớp 10: biệt thức Delta, hệ thức Vi-ét tính tổng và tích nghiệm x1 + x2, x1.x2, góc nội tiếp đường tròn.',
    descriptionEn: 'High school entrance prep: quadratic discriminant Delta, Vieta sum & product formulas, inscribed angles.',
    questions: [
      {
        question: 'Cho phương trình bậc hai: x² - 5x + 6 = 0. Theo định lý Vi-ét, tổng hai nghiệm x1 + x2 và tích x1.x2 bằng:',
        options: ['Tổng = 5, Tích = 6', 'Tổng = -5, Tích = 6', 'Tổng = 5, Tích = -6', 'Tổng = -5, Tích = -6'],
        answerIndex: 0,
        hint: 'Theo định lý Vi-ét: x1 + x2 = -b/a = -(-5)/1; x1.x2 = c/a = 6/1.',
        explanation: 'x1 + x2 = -b/a = 5; x1.x2 = c/a = 6. Hai nghiệm là x1 = 2, x2 = 3.'
      },
      {
        question: 'Trong một đường tròn, góc nội tiếp chắn nửa đường tròn có số đo bằng bao nhiêu độ?',
        options: ['90° (góc vuông)', '180°', '60°', '45°'],
        answerIndex: 0,
        hint: 'Nửa đường tròn có cung bị chắn là 180°. Góc nội tiếp bằng một nửa số đo cung bị chắn.',
        explanation: 'Góc nội tiếp chắn nửa đường tròn luôn là góc vuông 90°.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-english-prep10',
    title: 'Tiếng Anh 9 - HK1: Chuyên đề Ngữ pháp Trọng tâm Ôn thi vào 10',
    titleEn: 'English 9 - Sem 1: Core Grammar Intensive for Entrance Exam',
    grade: 9,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 150,
    description: 'Mệnh đề quan hệ, câu điều kiện loại 2, câu ước Wish, cụm động từ phrasal verbs và phát âm ed/s.',
    descriptionEn: 'Relative clauses, conditional type 2, wish structures, phrasal verbs, phonetic rules.',
    questions: [
      {
        question: 'Choose the correct option: "If I ... a million dollars, I would travel around the world."',
        options: ['had', 'have', 'will have', 'have had'],
        answerIndex: 0,
        hint: 'Câu điều kiện loại 2 diễn tả điều không có thật ở hiện tại: If + S + V2/ed, S + would + V.',
        explanation: 'Vế If của câu điều kiện loại 2 dùng quá khứ đơn: If I had.'
      },
      {
        question: 'The man ... lives next door is a famous scientist.',
        options: ['who', 'which', 'whom', 'whose'],
        answerIndex: 0,
        hint: 'Đại từ quan hệ thay thế cho danh từ chỉ người ("The man") làm chủ ngữ trong mệnh đề.',
        explanation: '"Who" làm đại từ quan hệ thay cho chủ ngữ chỉ người (The man who lives...).'
      }
    ]
  },

  // =========================================================================
  // GRADE 10 (LỚP 10) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g10-s1-math-vectors-sets',
    title: 'Toán 10 - HK1: Mệnh đề, Tập hợp & Vectơ hình học',
    titleEn: 'Math 10 - Sem 1: Logic, Set Theory & Geometric Vectors',
    grade: 10,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 160,
    description: 'Quy tắc ba điểm, quy tắc hình bình hành, tích vô hướng hai vectơ và phép toán giao, hợp tập hợp.',
    descriptionEn: 'Triangle law, parallelogram rule, dot product, and set operations intersection & union.',
    questions: [
      {
        question: 'Cho hai tập hợp A = [-2; 4] và B = (1; 6). Giao của hai tập hợp A ∩ B là:',
        options: ['(1; 4]', '[-2; 6)', '(1; 4)', '[-2; 1]'],
        answerIndex: 0,
        hint: 'Giao là phần tử thuộc cả hai tập: x > 1 và x ≤ 4.',
        explanation: 'A ∩ B = (1; 4].'
      },
      {
        question: 'Cho hình bình hành ABCD. Vectơ AB + vectơ AD bằng vectơ nào sau đây?',
        options: ['Vectơ AC', 'Vectơ CA', 'Vectơ BD', 'Vectơ 0'],
        answerIndex: 0,
        hint: 'Áp dụng quy tắc hình bình hành xuất phát từ đỉnh A.',
        explanation: 'Theo quy tắc hình bình hành: AB + AD = AC.'
      }
    ]
  },
  {
    id: 'quiz-g10-s1-physics-kinematics',
    title: 'Vật lý 10 - HK1: Động học & 3 Định luật Newton',
    titleEn: 'Physics 10 - Sem 1: Kinematics & Newton\'s Laws',
    grade: 10,
    semester: 1,
    subject: 'Vật lý',
    subjectVi: 'Vật lý',
    subjectEn: 'Physics',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 150,
    description: 'Chuyển động thẳng biến đổi đều, gia tốc, lực ma sát và ứng dụng định luật II Newton F = ma.',
    descriptionEn: 'Uniform accelerated motion, acceleration, friction, and Newton\'s second law F = ma.',
    questions: [
      {
        question: 'Một ô tô chuyển động thẳng nhanh dần đều với gia tốc a = 2 m/s² từ trạng thái nghỉ (v0 = 0). Sau 5 giây, vận tốc ô tô đạt được là:',
        options: ['10 m/s', '20 m/s', '25 m/s', '5 m/s'],
        answerIndex: 0,
        hint: 'Công thức v = v0 + at.',
        explanation: 'v = 0 + 2 x 5 = 10 m/s.'
      },
      {
        question: 'Theo định luật II Newton, gia tốc của một vật có khối lượng m chịu tác dụng của hợp lực F được tính bằng:',
        options: ['a = F / m', 'a = F x m', 'a = m / F', 'a = F² / m'],
        answerIndex: 0,
        hint: 'F = ma => a = F/m.',
        explanation: 'Định luật II Newton: a = F / m.'
      }
    ]
  },
  {
    id: 'quiz-g10-s1-chem-atoms',
    title: 'Hóa học 10 - HK1: Cấu tạo Nguyên tử & Bảng tuần hoàn',
    titleEn: 'Chemistry 10 - Sem 1: Atomic Structure & Periodic Table',
    grade: 10,
    semester: 1,
    subject: 'Hóa học',
    subjectVi: 'Hóa học',
    subjectEn: 'Chemistry',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 18,
    xpReward: 140,
    description: 'Số hiệu nguyên tử Z, đồng vị, cấu hình electron nguyên tử và định luật tuần hoàn Mendeleev.',
    descriptionEn: 'Atomic number Z, isotopes, electron configuration, periodic trends.',
    questions: [
      {
        question: 'Nguyên tử nguyên tố Natri (Na) có Z = 11. Cấu hình electron của nguyên tử Na là:',
        options: ['1s² 2s² 2p⁶ 3s¹', '1s² 2s² 2p⁷', '1s² 2s² 2p⁶ 3s²', '1s² 2s² 2p⁵ 3s²'],
        answerIndex: 0,
        hint: 'Phân bố 11 electron theo các phân lớp s, p: 2 + 2 + 6 + 1 = 11.',
        explanation: 'Cấu hình electron chuẩn của Na (Z=11) là 1s² 2s² 2p⁶ 3s¹.'
      },
      {
        question: 'Trong một chu kỳ theo chiều tăng của điện tích hạt nhân (từ trái sang phải), bán kính nguyên tử biến đổi thế nào?',
        options: ['Bán kính nguyên tử giảm dần', 'Bán kính nguyên tử tăng dần', 'Không thay đổi', 'Biến đổi không có quy luật'],
        answerIndex: 0,
        hint: 'Điện tích hạt nhân tăng hút mây electron chặt hơn vào tâm.',
        explanation: 'Trong cùng chu kỳ, số lớp electron bằng nhau nhưng điện tích hạt nhân tăng làm lực hút electron tăng, khiến bán kính co nhỏ lại.'
      }
    ]
  },
  {
    id: 'quiz-g10-s1-bio-cells',
    title: 'Sinh học 10 - HK1: Sinh học Phân tử & Tế bào nhân thực',
    titleEn: 'Biology 10 - Sem 1: Molecular Biology & Eukaryotic Cells',
    grade: 10,
    semester: 1,
    subject: 'Sinh học',
    subjectVi: 'Sinh học',
    subjectEn: 'Biology',
    category: 'science',
    difficulty: 'medium',
    durationMinutes: 16,
    xpReward: 130,
    description: 'Các đại phân tử sinh học (protein, ADN, lipit), màng sinh chất và ti thể nhà máy năng lượng.',
    descriptionEn: 'Biological macromolecules (proteins, nucleic acids, lipids), cell membrane and mitochondria.',
    questions: [
      {
        question: 'Đơn phân cấu tạo nên phân tử ADN là gì?',
        options: ['Các nucleotide (A, T, G, C)', 'Các axit amin', 'Phân tử glucose', 'Axit béo'],
        answerIndex: 0,
        hint: 'ADN là chuỗi đa phân gồm 4 loại nucleotit liên kết theo nguyên tắc bổ sung A-T, G-C.',
        explanation: 'Đơn phân của ADN là nucleotide gồm 3 thành phần: gốc phosphat, đường deoxyribose và bazơ nitơ (A, T, G, C).'
      },
      {
        question: 'Bào quan nào được ví như "nhà máy sản xuất năng lượng ATP" cung cấp cho mọi hoạt động của tế bào?',
        options: ['Ti thể (Mitochondria)', 'Bộ máy Golgi', 'Lưới nội chất', 'Ribosome'],
        answerIndex: 0,
        hint: 'Nơi diễn ra quá trình hô hấp tế bào tạo năng lượng ATP.',
        explanation: 'Ti thể là bào quan hô hấp tế bào, chuyển hóa dưỡng chất thành năng lượng ATP.'
      }
    ]
  },

  // =========================================================================
  // GRADE 11 (LỚP 11) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g11-s1-math-trigonometry',
    title: 'Toán 11 - HK1: Hàm số Lượng giác, Cấp số cộng & Cấp số nhân',
    titleEn: 'Math 11 - Sem 1: Trigonometric Functions & Progressions',
    grade: 11,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 170,
    description: 'Tập xác định hàm lượng giác, giải phương trình sin(x) = m, cos(x) = m và công thức số hạng tổng quát cấp số cộng un = u1 + (n-1)d.',
    descriptionEn: 'Trig domains, elementary trig equations, arithmetic progression general term.',
    questions: [
      {
        question: 'Tập xác định của hàm số y = tan(x) là:',
        options: ['D = ℝ \\ { π/2 + kπ, k ∈ ℤ }', 'D = ℝ \\ { kπ, k ∈ ℤ }', 'D = ℝ', 'D = [-1; 1]'],
        answerIndex: 0,
        hint: 'tan(x) = sin(x)/cos(x). Mẫu số cos(x) phải khác 0.',
        explanation: 'cos(x) ≠ 0 <=> x ≠ π/2 + kπ (k ∈ ℤ).'
      },
      {
        question: 'Cho cấp số cộng (un) có u1 = 3 và công sai d = 4. Tìm số hạng thứ 10 của cấp số cộng:',
        options: ['u10 = 39', 'u10 = 43', 'u10 = 36', 'u10 = 40'],
        answerIndex: 0,
        hint: 'un = u1 + (n - 1)d = 3 + 9 x 4.',
        explanation: 'u10 = 3 + 9 x 4 = 39.'
      }
    ]
  },
  {
    id: 'quiz-g11-s1-physics-oscillations',
    title: 'Vật lý 11 - HK1: Dao động Điều hòa & Sóng cơ học',
    titleEn: 'Physics 11 - Sem 1: Harmonic Oscillations & Mechanical Waves',
    grade: 11,
    semester: 1,
    subject: 'Vật lý',
    subjectVi: 'Vật lý',
    subjectEn: 'Physics',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 160,
    description: 'Phương trình x = A.cos(ωt + φ), chu kỳ con lắc lò xo và con lắc đơn, giao thoa sóng cơ học.',
    descriptionEn: 'Simple harmonic equation, spring & pendulum periods, wave interference conditions.',
    questions: [
      {
        question: 'Một chất điểm dao động điều hòa theo phương trình x = 6.cos(4πt + π/3) (cm). Biên độ A và tần số f của dao động là:',
        options: ['A = 6 cm; f = 2 Hz', 'A = 6 cm; f = 4 Hz', 'A = 12 cm; f = 2 Hz', 'A = 6 cm; f = 4π Hz'],
        answerIndex: 0,
        hint: 'Biên độ là hệ số trước hàm cos: A = 6 cm. Tần số f = ω / (2π) = (4π) / (2π).',
        explanation: 'Biên độ A = 6 cm; tần số f = ω / (2π) = 4π / 2π = 2 Hz.'
      },
      {
        question: 'Chu kỳ dao động nhỏ của con lắc đơn có chiều dài dây l trong trọng trường g được tính theo công thức nào?',
        options: ['T = 2π √(l / g)', 'T = 2π √(g / l)', 'T = 1 / (2π) √(l / g)', 'T = 2π √(m / k)'],
        answerIndex: 0,
        hint: 'T = 2π căn bậc hai của (l chia g).',
        explanation: 'Công thức chu kỳ con lắc đơn dao động góc bé: T = 2π √(l / g).'
      }
    ]
  },
  {
    id: 'quiz-g11-s1-chemistry-equilibrium',
    title: 'Hóa học 11 - HK1: Cân bằng Hóa học & Dung dịch Axit - Bazơ pH',
    titleEn: 'Chemistry 11 - Sem 1: Chemical Equilibrium & pH of Solutions',
    grade: 11,
    semester: 1,
    subject: 'Hóa học',
    subjectVi: 'Hóa học',
    subjectEn: 'Chemistry',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 18,
    xpReward: 150,
    description: 'Nguyên lý chuyển dịch cân bằng Le Chatelier, thang pH, thuyết axit-bazơ Bronsted-Lowry và hợp chất Nitơ.',
    descriptionEn: 'Le Chatelier principle, pH scale, Bronsted-Lowry acid-base theory, nitrogen compounds.',
    questions: [
      {
        question: 'Dung dịch có nồng độ ion [H+] = 10⁻³ M thì chỉ số pH của dung dịch bằng bao nhiêu và có môi trường gì?',
        options: ['pH = 3; môi trường axit', 'pH = 11; môi trường bazơ', 'pH = 3; môi trường kiềm', 'pH = 7; môi trường trung tính'],
        answerIndex: 0,
        hint: 'pH = -log[H+]. pH < 7 là môi trường axit.',
        explanation: 'pH = -log(10⁻³) = 3. Vì pH < 7 nên dung dịch có tính axit.'
      },
      {
        question: 'Theo nguyên lý Le Chatelier, khi tăng nhiệt độ của một hệ phản ứng thuận nghịch tỏa nhiệt (ΔrH < 0), cân bằng sẽ chuyển dịch theo chiều nào?',
        options: ['Chiều nghịch (chiều thu nhiệt để hạ nhiệt độ)', 'Chiều thuận', 'Không làm chuyển dịch cân bằng', 'Tăng tốc cả hai chiều như nhau'],
        answerIndex: 0,
        hint: 'Tăng nhiệt độ thì cân bằng chuyển dịch theo chiều thu nhiệt (chiều nghịch).',
        explanation: 'Tăng nhiệt độ làm cân bằng chuyển dịch theo chiều chống lại sự tăng nhiệt độ, tức là chiều thu nhiệt (chiều nghịch).'
      }
    ]
  },

  // =========================================================================
  // GRADE 12 (LỚP 12) - SEMESTER 1 & 2
  // =========================================================================
  {
    id: 'quiz-g12-s1-math-calculus',
    title: 'Toán 12 - HK1: Khảo sát Hàm số, Đạo hàm & Cực trị',
    titleEn: 'Math 12 - Sem 1: Calculus, Derivatives & Extreme Values',
    grade: 12,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 25,
    xpReward: 180,
    description: 'Tính đơn điệu của hàm số, tiệm cận đứng, tiệm cận ngang và bài toán thực tế tìm giá trị lớn nhất/nhỏ nhất.',
    descriptionEn: 'Monotonicity, asymptotes, critical points, and optimization word problems.',
    questions: [
      {
        question: 'Đạo hàm của hàm số y = x³ - 3x² + 2 là:',
        options: ['y\' = 3x² - 6x', 'y\' = 3x² - 3x', 'y\' = x² - 6x', 'y\' = 3x² - 6x + 2'],
        answerIndex: 0,
        hint: '(xⁿ)\' = n.xⁿ⁻¹ và hằng số đạo hàm bằng 0.',
        explanation: 'y\' = 3x² - 6x.'
      },
      {
        question: 'Đường tiệm cận ngang của đồ thị hàm số y = (2x + 1) / (x - 3) có phương trình là:',
        options: ['y = 2', 'x = 3', 'y = -1/3', 'x = 2'],
        answerIndex: 0,
        hint: 'Giới hạn khi x tiến ra vô cùng: lim y = a/c = 2/1 = 2.',
        explanation: 'lim (x->∞) (2x + 1)/(x - 3) = 2. Phương trình tiệm cận ngang là y = 2.'
      }
    ]
  },
  {
    id: 'quiz-g12-s2-math-integrals-complex',
    title: 'Toán 12 - HK2: Nguyên hàm, Tích phân & Số phức',
    titleEn: 'Math 12 - Sem 2: Integrals, Applications & Complex Numbers',
    grade: 12,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 25,
    xpReward: 200,
    description: 'Ứng dụng tích phân tính diện tích hình phẳng, thể tích khối tròn xoay và các phép toán trên trường số phức.',
    descriptionEn: 'Integral applications for area, solids of revolution, and complex number algebra.',
    questions: [
      {
        question: 'Tính nguyên hàm: ∫ (2x + eˣ) dx = ?',
        options: ['x² + eˣ + C', '2x² + eˣ + C', 'x² + xeˣ + C', '2 + eˣ + C'],
        answerIndex: 0,
        hint: 'Nguyên hàm của 2x là x², nguyên hàm của eˣ là chính nó.',
        explanation: '∫ (2x + eˣ) dx = x² + eˣ + C.'
      },
      {
        question: 'Cho số phức z = 3 - 4i. Môđun |z| của số phức z bằng:',
        options: ['5', '7', '25', '1'],
        answerIndex: 0,
        hint: '|z| = √(a² + b²) = √(3² + (-4)²).',
        explanation: '|z| = √(9 + 16) = √25 = 5.'
      }
    ]
  },
  {
    id: 'quiz-g12-s1-physics-ac-power',
    title: 'Vật lý 12 - HK1: Dòng điện xoay chiều RLC & Máy biến áp',
    titleEn: 'Physics 12 - Sem 1: AC Circuits RLC & Power Transformers',
    grade: 12,
    semester: 1,
    subject: 'Vật lý',
    subjectVi: 'Vật lý',
    subjectEn: 'Physics',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 22,
    xpReward: 180,
    description: 'Mạch xoay chiều RLC nối tiếp, hiện tượng cộng hưởng điện, công suất P = UI.cosφ và truyền tải điện năng đi xa.',
    descriptionEn: 'AC circuit impedance, electrical resonance, power factor, long-distance power grid transmission.',
    questions: [
      {
        question: 'Điều kiện xảy ra hiện tượng cộng hưởng điện trong mạch xoay chiều RLC nối tiếp là:',
        options: ['ZL = ZC (tức là ωL = 1 / (ωC))', 'ZL = R', 'ZC = R', 'ZL + ZC = R'],
        answerIndex: 0,
        hint: 'Cảm kháng bằng dung kháng làm tổng trở nhỏ nhất Z = R.',
        explanation: 'Khi ZL = ZC <=> ωL = 1/(ωC), mạch xảy ra cộng hưởng điện, cường độ dòng điện đạt giá trị cực đại I_max = U/R.'
      },
      {
        question: 'Trong máy biến áp lý tưởng, mối quan hệ giữa điện áp hiệu dụng hai đầu cuộn dây và số vòng dây là:',
        options: ['U1 / U2 = N1 / N2', 'U1 / U2 = N2 / N1', 'U1 . U2 = N1 . N2', 'U1 / U2 = (N1 / N2)²'],
        answerIndex: 0,
        hint: 'Tỉ số điện áp tỉ lệ thuận với số vòng dây.',
        explanation: 'U1 / U2 = N1 / N2. Máy tăng áp khi N2 > N1, máy hạ áp khi N2 < N1.'
      }
    ]
  },
  {
    id: 'quiz-g12-s1-chem-esters',
    title: 'Hóa học 12 - HK1: Este, Lipit & Cacbohiđrat trọng tâm',
    titleEn: 'Chemistry 12 - Sem 1: Esters, Lipids & Carbohydrates',
    grade: 12,
    semester: 1,
    subject: 'Hóa học',
    subjectVi: 'Hóa học',
    subjectEn: 'Chemistry',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 170,
    description: 'Phản ứng xà phòng hóa este, chất béo trieste của glixerol, cấu tạo glucozơ, saccarozơ và tinh bột.',
    descriptionEn: 'Ester saponification, glycerol triglycerides, glucose and starch macromolecular structure.',
    questions: [
      {
        question: 'Thủy phân hoàn toàn este Etyl axetat (CH3COOC2H5) trong dung dịch NaOH đun nóng thu được các sản phẩm là:',
        options: ['CH3COONa và C2H5OH', 'C2H5COONa và CH3OH', 'CH3COOH và C2H5ONa', 'CH3COONa và C2H4'],
        answerIndex: 0,
        hint: 'Phản ứng xà phòng hóa este tạo muối natri axetat và rượu etylic.',
        explanation: 'CH3COOC2H5 + NaOH -> CH3COONa + C2H5OH.'
      },
      {
        question: 'Cacbohiđrat nào sau đây thuộc loại đisaccarit khi thủy phân cho ra một phân tử glucozơ và một phân tử fructozơ?',
        options: ['Saccarozơ (Đường mía)', 'Glucozơ', 'Tinh bột', 'Xenlulozơ'],
        answerIndex: 0,
        hint: 'Công thức phân tử C12H22O11 phổ biến trong mía đường, củ cải đường.',
        explanation: 'Saccarozơ (C12H22O11) là đisaccarit, thủy phân hoàn toàn tạo 1 α-glucozơ và 1 β-fructozơ.'
      }
    ]
  },
  {
    id: 'quiz-g12-s1-bio-genetics',
    title: 'Sinh học 12 - HK1: Cơ chế Di truyền & Đột biến Gen',
    titleEn: 'Biology 12 - Sem 1: Genetic Mechanisms & Gene Mutations',
    grade: 12,
    semester: 1,
    subject: 'Sinh học',
    subjectVi: 'Sinh học',
    subjectEn: 'Biology',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 170,
    description: 'Cơ chế nhân đôi ADN, phiên mã, dịch mã, mã di truyền, các dạng đột biến điểm và quy luật phân li Menđen.',
    descriptionEn: 'DNA replication, transcription, translation, genetic code, point mutations, Mendelian genetics.',
    questions: [
      {
        question: 'Quá trình nhân đôi ADN diễn ra theo những nguyên tắc nào?',
        options: ['Nguyên tắc bổ sung và nguyên tắc bán bảo toàn (giữ lại một nửa)', 'Chỉ theo nguyên tắc bổ sung', 'Chỉ theo nguyên tắc bảo toàn hoàn toàn', 'Nguyên tắc ngẫu nhiên'],
        answerIndex: 0,
        hint: 'A liên kết T, G liên kết C và mỗi phân tử con giữ lại 1 mạch mẹ.',
        explanation: 'Nhân đôi ADN tuân thủ nguyên tắc bổ sung (A-T, G-C) và nguyên tắc bán bảo toàn (mỗi ADN con có 1 mạch cũ từ mẹ và 1 mạch mới tổng hợp).'
      },
      {
        question: 'Dạng đột biến điểm nào làm thay đổi nhiều nhất trình tự các axit amin trong chuỗi polypeptide do mã di truyền bị đọc sai khung dịch mã?',
        options: ['Đột biến thêm hoặc mất 1 cặp nucleotide', 'Đột biến thay thế 1 cặp nucleotide', 'Đột biến đảo vị trí 1 cặp nucleotide', 'Đột biến đồng nghĩa'],
        answerIndex: 0,
        hint: 'Thêm hoặc mất làm dịch chuyển toàn bộ khung đọc từ điểm đột biến về phía sau.',
        explanation: 'Đột biến thêm hoặc mất 1 cặp nucleotide gây đột biến dịch khung, làm thay đổi toàn bộ các bộ ba từ điểm đột biến đến cuối gen.'
      }
    ]
  }
];
