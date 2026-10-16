import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Quizzes for Primary School (Tiểu học: Lớp 1 - 5)
 * Based on Ministry of Education GDPT 2018 Textbooks (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */
export const PRIMARY_QUIZZES: CurriculumQuiz[] = [
  // ==========================================
  // GRADE 1 - LỚP 1
  // ==========================================
  {
    id: 'quiz-g1-s1-vietnamese-alphabet',
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
    description: 'Nhận diện bảng chữ cái tiếng Việt, nguyên âm, phụ âm và ghép vần đơn giản.',
    descriptionEn: 'Recognize the 29 Vietnamese letters, vowels, consonants, and simple syllable blending.',
    questions: [
      {
        question: 'Chữ cái nào sau đây là một nguyên âm trong tiếng Việt?',
        options: ['Chữ "A"', 'Chữ "B"', 'Chữ "C"', 'Chữ "D"'],
        answerIndex: 0,
        hint: 'Nguyên âm là âm có thể tự phát âm mà không cần phụ âm kèm theo: a, ă, â, e, ê, i, o, ô, ơ, u, ư, y.',
        explanation: '"A" là một trong các nguyên âm chính trong bảng chữ cái tiếng Việt.'
      },
      {
        question: 'Ghép phụ âm "b" với nguyên âm "a" và dấu huyền (`) ta được từ nào?',
        options: ['bà', 'ba', 'bá', 'bả'],
        answerIndex: 0,
        hint: 'Âm "b" + âm "a" = "ba". Thêm dấu huyền trên đầu chữ "a" thành "bà".',
        explanation: 'b - a - ba - huyền - bà. Nghĩa chỉ người bà kính yêu.'
      },
      {
        question: 'Bảng chữ cái tiếng Việt chuẩn có tất cả bao nhiêu chữ cái?',
        options: ['29 chữ cái', '26 chữ cái', '32 chữ cái', '24 chữ cái'],
        answerIndex: 0,
        hint: 'Nhiều hơn bảng chữ cái tiếng Anh (26 chữ) vì có thêm các chữ ă, â, đ, ê, ô, ơ, ư.',
        explanation: 'Bảng chữ cái tiếng Việt chính thức bao gồm đúng 29 chữ cái.'
      }
    ]
  },
  {
    id: 'quiz-g1-s1-math-counting-10',
    title: 'Toán 1 - HK1: Đếm số & Phép tính trong phạm vi 10',
    titleEn: 'Math 1 - Sem 1: Counting & Arithmetic within 10',
    grade: 1,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'easy',
    durationMinutes: 10,
    xpReward: 90,
    description: 'Đếm các số 1 đến 10, so sánh lớn bé bằng và các phép cộng trừ cơ bản.',
    descriptionEn: 'Counting numbers 1-10, comparison (<, >, =), and foundational addition and subtraction.',
    questions: [
      {
        question: 'Điền số thích hợp vào chỗ chấm: 3 + 4 = ... ?',
        options: ['7', '6', '8', '5'],
        answerIndex: 0,
        hint: 'Đếm tiếp từ 3 thêm 4 đơn vị: 4, 5, 6, 7.',
        explanation: '3 + 4 = 7.'
      },
      {
        question: 'So sánh hai số sau: 8 ... 5',
        options: ['>', '<', '=', '+'],
        answerIndex: 0,
        hint: 'Số 8 đứng sau số 5 trong dãy số tự nhiên nên 8 lớn hơn 5.',
        explanation: '8 lớn hơn 5, do đó ta điền dấu lớn hơn (>).'
      },
      {
        question: 'Một cành cây có 6 chú chim, sau đó bay đi 2 chú chim. Hỏi còn lại bao nhiêu chú chim?',
        options: ['4 chú chim', '3 chú chim', '5 chú chim', '8 chú chim'],
        answerIndex: 0,
        hint: 'Lấy số chim ban đầu trừ đi số chim bay đi: 6 - 2 = ?',
        explanation: 'Phép tính: 6 - 2 = 4 (chú chim).'
      }
    ]
  },
  {
    id: 'quiz-g1-s1-nature-society-family',
    title: 'Tự nhiên & Xã hội 1 - HK1: Gia đình & Chăm sóc Bản thân',
    titleEn: 'Nature & Society 1 - Sem 1: Family & Self-care Routine',
    grade: 1,
    semester: 1,
    subject: 'Tự nhiên và Xã hội',
    subjectVi: 'Tự nhiên và Xã hội',
    subjectEn: 'Nature & Society',
    category: 'science',
    difficulty: 'easy',
    durationMinutes: 10,
    xpReward: 85,
    description: 'Tìm hiểu về các thành viên trong gia đình, các bộ phận cơ thể và thói quen giữ gìn vệ sinh sạch sẽ.',
    descriptionEn: 'Discover family roles, body parts, and daily hygiene habits.',
    questions: [
      {
        question: 'Để bảo vệ răng miệng luôn chắc khỏe, em nên đánh răng khi nào?',
        options: ['Sau khi ăn và trước khi đi ngủ', 'Chỉ khi nào nhớ ra', 'Một tuần một lần', 'Trước khi ăn cơm'],
        answerIndex: 0,
        hint: 'Đánh răng buổi sáng thức dậy, sau các bữa ăn và trước khi đi ngủ vào buổi tối.',
        explanation: 'Đánh răng ít nhất 2 lần mỗi ngày (sau khi ăn và trước khi ngủ) giúp ngừa sâu răng hiệu quả.'
      },
      {
        question: 'Bộ phận nào trên cơ thể giúp em nhìn thấy màu sắc và cảnh vật xung quanh?',
        options: ['Đôi mắt (thị giác)', 'Đôi tai (thính giác)', 'Chiếc mũi (khứu giác)', 'Bàn tay (xúc giác)'],
        answerIndex: 0,
        hint: 'Cơ quan thị giác nằm ở trên khuôn mặt.',
        explanation: 'Đôi mắt là cơ quan thị giác giúp con người nhìn ngắm thế giới.'
      },
      {
        question: 'Hành động nào thể hiện sự hiếu thảo với ông bà, cha mẹ?',
        options: ['Lễ phép chào hỏi và giúp đỡ việc nhà vừa sức', 'Vòi vĩnh đòi mua đồ chơi đắt tiền', 'Không nghe lời người lớn', 'Lười biếng không học bài'],
        answerIndex: 0,
        hint: 'Lễ phép, vâng lời và đỡ đần những việc nhỏ như quét nhà, gấp quần áo.',
        explanation: 'Kính trọng, vâng lời và phụ giúp cha mẹ việc nhà là biểu hiện của người con ngoan ngoãn.'
      }
    ]
  },
  {
    id: 'quiz-g1-s1-english-colors',
    title: 'Tiếng Anh 1 - HK1: Colors & Greetings',
    titleEn: 'English 1 - Sem 1: Colors & Basic Greetings',
    grade: 1,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    difficulty: 'easy',
    durationMinutes: 10,
    xpReward: 90,
    description: 'Từ vựng màu sắc (Red, Blue, Yellow), số đếm 1-10 và câu chào hỏi tiếng Anh cơ bản.',
    descriptionEn: 'Colors vocabulary, numbers 1-10, and greetings.',
    questions: [
      {
        question: 'Từ tiếng Anh nào chỉ "Màu đỏ"?',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        answerIndex: 0,
        hint: 'Quả táo chín hoặc lá cờ Tổ quốc có màu này.',
        explanation: 'Red có nghĩa là màu đỏ.'
      },
      {
        question: 'Khi gặp bạn bè vào buổi sáng, em nên chào như thế nào?',
        options: ['Hello! / Good morning!', 'Goodbye!', 'Good night!', 'Thank you!'],
        answerIndex: 0,
        hint: 'Lời chào gặp mặt quen thuộc.',
        explanation: 'Hello hoặc Good morning dùng để chào hỏi khi gặp mặt vào buổi sáng.'
      },
      {
        question: 'Số "Five" trong tiếng Anh là số mấy?',
        options: ['Số 5', 'Số 4', 'Số 6', 'Số 3'],
        answerIndex: 0,
        hint: 'One (1), Two (2), Three (3), Four (4), Five (?)...',
        explanation: 'Five là số 5.'
      }
    ]
  },
  {
    id: 'quiz-g1-s2-math-numbers-100',
    title: 'Toán 1 - HK2: Các số đến 100 & Đo độ dài Centimét',
    titleEn: 'Math 1 - Sem 2: Numbers to 100 & Measuring in Centimeters',
    grade: 1,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'easy',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Làm quen các số tròn chục, cấu tạo số có hai chữ số, đơn vị đo độ dài cm và xem đồng hồ đúng giờ.',
    descriptionEn: 'Round tens, 2-digit number structure, cm units, and reading the clock on the hour.',
    questions: [
      {
        question: 'Số 45 gồm mấy chục và mấy đơn vị?',
        options: ['4 chục và 5 đơn vị', '5 chục và 4 đơn vị', '40 chục và 5 đơn vị', '4 chục và 50 đơn vị'],
        answerIndex: 0,
        hint: 'Chữ số hàng chục đứng trước (4), chữ số hàng đơn vị đứng sau (5).',
        explanation: 'Số 45 gồm 4 chục (40) và 5 đơn vị.'
      },
      {
        question: 'Ký hiệu viết tắt của đơn vị đo độ dài xăng-ti-mét là gì?',
        options: ['cm', 'm', 'kg', 'dm'],
        answerIndex: 0,
        hint: 'Chữ c ghép với chữ m.',
        explanation: 'Centimét viết tắt là cm.'
      },
      {
        question: 'Kim ngắn đồng hồ chỉ số 3, kim dài chỉ số 12. Lúc đó là mấy giờ?',
        options: ['3 giờ đúng', '12 giờ đúng', '3 giờ 12 phút', '6 giờ đúng'],
        answerIndex: 0,
        hint: 'Kim dài chỉ số 12 là giờ đúng, kim ngắn chỉ vào số nào là bấy nhiêu giờ.',
        explanation: 'Khi kim phút (dài) chỉ số 12 và kim giờ (ngắn) chỉ số 3 thì đồng hồ đang chỉ đúng 3 giờ.'
      }
    ]
  },
  {
    id: 'quiz-g1-s2-vietnamese-reading',
    title: 'Tiếng Việt 1 - HK2: Tập đọc hiểu & Chính tả vần khó',
    titleEn: 'Vietnamese 1 - Sem 2: Reading Comprehension & Complex Syllables',
    grade: 1,
    semester: 2,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    difficulty: 'easy',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Luyện tập đọc trơn câu chuyện ngắn, phân biệt quy tắc chính tả c/k, g/gh, ng/ngh.',
    descriptionEn: 'Reading fluency, reading short passages, and spelling rules for c/k, g/gh, ng/ngh.',
    questions: [
      {
        question: 'Theo quy tắc chính tả tiếng Việt, chữ "k" đi liền với những nguyên âm nào sau đây?',
        options: ['i, e, ê', 'a, o, u', 'ơ, ư, ă', 'o, ô, u'],
        answerIndex: 0,
        hint: 'Ví dụ: kim, kem, kẹo, kể...',
        explanation: 'Quy tắc chính tả: k, gh, ngh chỉ đi trước các nguyên âm i, e, ê.'
      },
      {
        question: 'Từ nào sau đây viết ĐÚNG chính tả?',
        options: ['Ghi nhớ', 'Gi nhớ', 'Ghy nhớ', 'Gh nhớ'],
        answerIndex: 0,
        hint: 'Âm "gh" đứng trước nguyên âm "i".',
        explanation: '"Ghi nhớ" viết đúng chính tả với gh ghép trước âm i.'
      },
      {
        question: 'Đọc câu: "Mùa xuân, chim én bay lượn trên bầu trời xanh." Câu trên nói về mùa nào?',
        options: ['Mùa xuân', 'Mùa hè', 'Mùa thu', 'Mùa đông'],
        answerIndex: 0,
        hint: 'Xem ngay từ đầu tiên của câu văn.',
        explanation: 'Câu văn miêu tả cảnh sắc của "Mùa xuân".'
      }
    ]
  },

  // ==========================================
  // GRADE 2 - LỚP 2
  // ==========================================
  {
    id: 'quiz-g2-s1-math-addition-subtraction',
    title: 'Toán 2 - HK1: Cộng trừ có nhớ trong phạm vi 100 & Đơn vị dm, kg, lít',
    titleEn: 'Math 2 - Sem 1: Regrouping Addition & Subtraction & Measurement Units',
    grade: 2,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'easy',
    durationMinutes: 12,
    xpReward: 95,
    description: 'Thực hiện phép tính cộng trừ có nhớ dạng 28 + 5, 43 - 8; làm quen đề-xi-mét, ki-lô-gam và lít.',
    descriptionEn: 'Regrouping addition/subtraction within 100, dm, kg, and liters measurement.',
    questions: [
      {
        question: 'Tính: 38 + 25 = ... ?',
        options: ['63', '53', '62', '73'],
        answerIndex: 0,
        hint: '8 + 5 = 13 (viết 3 nhớ 1); 3 + 2 = 5, thêm 1 bằng 6.',
        explanation: '38 + 25 = 63.'
      },
      {
        question: '1 đề-xi-mét (dm) bằng bao nhiêu xăng-ti-mét (cm)?',
        options: ['10 cm', '100 cm', '1 cm', '5 cm'],
        answerIndex: 0,
        hint: '1 dm = 10 cm.',
        explanation: 'Quy đổi chuẩn: 1 dm = 10 cm.'
      },
      {
        question: 'Mẹ mua một can dầu 5 lít và một can dầu 3 lít. Hỏi mẹ mua tất cả bao nhiêu lít dầu?',
        options: ['8 lít', '15 lít', '2 lít', '10 lít'],
        answerIndex: 0,
        hint: 'Cộng số lít ở hai can lại: 5 + 3 = ?',
        explanation: '5 l + 3 l = 8 l.'
      }
    ]
  },
  {
    id: 'quiz-g2-s1-vietnamese-words-sentences',
    title: 'Tiếng Việt 2 - HK1: Luyện từ & câu (Ai là gì? Từ chỉ sự vật)',
    titleEn: 'Vietnamese 2 - Sem 1: Vocabulary & Sentence Structure "Who is what?"',
    grade: 2,
    semester: 1,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    difficulty: 'easy',
    durationMinutes: 12,
    xpReward: 95,
    description: 'Xác định từ chỉ sự vật (người, đồ vật, con vật, cây cối) và kiểu câu giới thiệu "Ai là gì?".',
    descriptionEn: 'Identify nouns/objects and the foundational intro sentence pattern "Who is what?".',
    questions: [
      {
        question: 'Từ nào sau đây là từ chỉ người trong gia đình?',
        options: ['Ông nội', 'Cây bàng', 'Bàn học', 'Bút chì'],
        answerIndex: 0,
        hint: 'Chỉ người thân có quan hệ huyết thống.',
        explanation: '"Ông nội" là từ chỉ người, các từ còn lại chỉ cây cối hoặc đồ vật.'
      },
      {
        question: 'Câu nào dưới đây được cấu tạo theo mẫu câu "Ai là gì?"?',
        options: ['Bạn Mai là học sinh lớp 2A.', 'Bạn Mai đang đọc sách trong thư viện.', 'Bạn Mai chạy rất nhanh.', 'Bạn Mai đi học về.'],
        answerIndex: 0,
        hint: 'Mẫu câu "Ai là gì?" có chữ "là" dùng để giới thiệu, nhận xét.',
        explanation: '"Bạn Mai là học sinh lớp 2A" là câu giới thiệu theo cấu trúc Ai (Bạn Mai) là gì (là học sinh lớp 2A).'
      },
      {
        question: 'Dấu câu nào thích hợp để đặt ở cuối câu: "Hôm nay trời có mưa không...?"',
        options: ['Dấu chấm hỏi (?)', 'Dấu chấm (.)', 'Dấu chấm than (!)', 'Dấu phẩy (,)'],
        answerIndex: 0,
        hint: 'Đây là câu dùng để hỏi (nghi vấn).',
        explanation: 'Cuối câu hỏi phải dùng dấu chấm hỏi (?).'
      }
    ]
  },
  {
    id: 'quiz-g2-s2-math-multiplication-2-5',
    title: 'Toán 2 - HK2: Bảng nhân 2 & Bảng nhân 5, Hình khối cơ bản',
    titleEn: 'Math 2 - Sem 2: Times Tables 2 & 5, Basic 3D Shapes',
    grade: 2,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'easy',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Thành thạo bảng nhân, chia 2 và 5; nhận diện khối lập phương, khối trụ và xem lịch ngày tháng.',
    descriptionEn: 'Master multiplication & division for 2 and 5; recognize cubes and cylinders.',
    questions: [
      {
        question: 'Tính nhẩm: 5 x 7 = ... ?',
        options: ['35', '30', '40', '25'],
        answerIndex: 0,
        hint: 'Trong bảng nhân 5: 5 x 6 = 30, thêm 5 nữa bằng...',
        explanation: '5 x 7 = 35.'
      },
      {
        question: 'Có 18 viên kẹo chia đều cho 2 bạn. Hỏi mỗi bạn được mấy viên kẹo?',
        options: ['9 viên kẹo', '8 viên kẹo', '7 viên kẹo', '10 viên kẹo'],
        answerIndex: 0,
        hint: 'Lấy 18 chia cho 2: 18 : 2 = ?',
        explanation: '18 : 2 = 9 viên kẹo.'
      },
      {
        question: 'Khối hộp nào sau đây có 6 mặt đều là hình vuông bằng nhau?',
        options: ['Khối lập phương', 'Khối chữ nhật', 'Khối trụ', 'Khối cầu'],
        answerIndex: 0,
        hint: 'Đặc điểm của khối xúc xắc con súc sắc.',
        explanation: 'Khối lập phương có 6 mặt phẳng đều là các hình vuông bằng nhau.'
      }
    ]
  },
  {
    id: 'quiz-g2-s2-nature-society-living-things',
    title: 'Tự nhiên & Xã hội 2 - HK2: Thực vật, Động vật & Môi trường sống',
    titleEn: 'Nature & Society 2 - Sem 2: Plants, Animals & Natural Habitats',
    grade: 2,
    semester: 2,
    subject: 'Tự nhiên và Xã hội',
    subjectVi: 'Tự nhiên và Xã hội',
    subjectEn: 'Nature & Society',
    category: 'science',
    difficulty: 'easy',
    durationMinutes: 12,
    xpReward: 95,
    description: 'Tìm hiểu môi trường sống trên cạn, dưới nước; ích lợi của động thực vật và ý thức bảo vệ môi trường.',
    descriptionEn: 'Terrestrial and aquatic habitats; roles of flora and fauna.',
    questions: [
      {
        question: 'Loài vật nào sau đây sống trong môi trường dưới nước?',
        options: ['Cá chép', 'Con thỏ', 'Chim bồ câu', 'Con mèo'],
        answerIndex: 0,
        hint: 'Loài có mang thở và vây bơi.',
        explanation: 'Cá chép là loài động vật sống ở môi trường nước ngọt.'
      },
      {
        question: 'Bộ phận nào của cây xanh cắm sâu vào lòng đất để hút nước và muối khoáng?',
        options: ['Rễ cây', 'Thân cây', 'Lá cây', 'Hoa'],
        answerIndex: 0,
        hint: 'Bộ phận nằm dưới mặt đất giúp cây đứng vững.',
        explanation: 'Rễ cây có chức năng hút nước và chất dinh dưỡng từ đất để nuôi cây.'
      },
      {
        question: 'Hành động nào giúp bảo vệ cây xanh trong khuôn viên trường học?',
        options: ['Tưới nước và không bẻ cành hái hoa', 'Ngắt lá non chơi trò chơi', 'Khắc tên lên thân cây', 'Vứt rác vào gốc cây'],
        answerIndex: 0,
        hint: 'Chăm sóc và bảo vệ cây xanh giúp trường lớp luôn xanh mát.',
        explanation: 'Tưới nước thường xuyên và không giẫm đạp, bẻ cành giúp cây xanh tươi tốt.'
      }
    ]
  },

  // ==========================================
  // GRADE 3 - LỚP 3
  // ==========================================
  {
    id: 'quiz-g3-s1-math-tables-shapes',
    title: 'Toán 3 - HK1: Bảng nhân chia 6-9, Chu vi hình chữ nhật & Góc vuông',
    titleEn: 'Math 3 - Sem 1: Times Tables 6-9, Rectangle Perimeter & Right Angles',
    grade: 3,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Bảng nhân 6 đến 9, nhận biết góc vuông bằng ê-ke, tính chu vi hình chữ nhật và hình vuông.',
    descriptionEn: 'Multiplication 6-9, right angles with set square, rectangle and square perimeter.',
    questions: [
      {
        question: 'Tính giá trị biểu thức: 7 x 8 + 15 = ... ?',
        options: ['71', '69', '61', '56'],
        answerIndex: 0,
        hint: 'Thực hiện phép nhân trước: 7 x 8 = 56, sau đó cộng 15.',
        explanation: '7 x 8 = 56; 56 + 15 = 71.'
      },
      {
        question: 'Một mảnh vườn hình chữ nhật có chiều dài 12m, chiều rộng 8m. Chu vi mảnh vườn là bao nhiêu?',
        options: ['40 m', '20 m', '96 m', '48 m'],
        answerIndex: 0,
        hint: 'Công thức tính chu vi hình chữ nhật: P = (dài + rộng) x 2.',
        explanation: 'P = (12 + 8) x 2 = 20 x 2 = 40 (m).'
      },
      {
        question: 'Dụng cụ học tập nào thường được dùng để kiểm tra xem một góc có phải là góc vuông hay không?',
        options: ['Thước ê-ke', 'Com-pa', 'Thước dây uốn dẻo', 'Kính lúp'],
        answerIndex: 0,
        hint: 'Chiếc thước hình tam giác có 1 góc vuông chuẩn.',
        explanation: 'Thước ê-ke có góc vuông chuẩn giúp học sinh kiểm tra góc vuông hay không vuông.'
      }
    ]
  },
  {
    id: 'quiz-g3-s1-vietnamese-similes',
    title: 'Tiếng Việt 3 - HK1: Biện pháp Tu từ So sánh & Mở rộng vốn từ Quê hương',
    titleEn: 'Vietnamese 3 - Sem 1: Literary Similes & Homeland Vocabulary',
    grade: 3,
    semester: 1,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    difficulty: 'medium',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Nhận biết cấu trúc so sánh (A như B, A là B), phân tích tác dụng gợi hình gợi cảm trong thơ ca.',
    descriptionEn: 'Identify simile structures (A is like B) and their descriptive emotional effect.',
    questions: [
      {
        question: 'Trong câu "Mặt biển xanh biếc như một tấm gương khổng lồ", sự vật nào được so sánh với nhau?',
        options: ['Mặt biển được so sánh với tấm gương khổng lồ', 'Mặt biển được so sánh với bầu trời', 'Tấm gương được so sánh với con thuyền', 'Màu xanh được so sánh với giọt sương'],
        answerIndex: 0,
        hint: 'Mô hình so sánh: Sự vật 1 (Mặt biển) - từ so sánh (như) - Sự vật 2 (tấm gương khổng lồ).',
        explanation: 'Mặt biển được ví với tấm gương khổng lồ nhờ sự phẳng lặng và trong xanh.'
      },
      {
        question: 'Từ ngữ nào sau đây mang ý nghĩa chỉ tình cảm gắn bó với quê hương đất nước?',
        options: ['Yêu quý, thiết tha, tự hào', 'Đường sá, nhà cửa', 'Cây đa, bến nước', 'Đồng lúa, bờ tre'],
        answerIndex: 0,
        hint: 'Chọn nhóm từ chỉ thái độ, tình cảm thay vì sự vật cụ thể.',
        explanation: '"Yêu quý, thiết tha, tự hào" là các từ chỉ cảm xúc, lòng gắn bó với quê hương.'
      },
      {
        question: 'Tìm từ so sánh thích hợp điền vào chỗ trống: "Công cha ... núi Thái Sơn"',
        options: ['như', 'vì', 'nhưng', 'bởi'],
        answerIndex: 0,
        hint: 'Câu ca dao quen thuộc về công ơn cha mẹ.',
        explanation: '"Công cha như núi Thái Sơn, Nghĩa mẹ như nước trong nguồn chảy ra".'
      }
    ]
  },
  {
    id: 'quiz-g3-s2-math-numbers-100000',
    title: 'Toán 3 - HK2: Số có 5 chữ số & Diện tích hình chữ nhật, hình vuông',
    titleEn: 'Math 3 - Sem 2: 5-Digit Numbers & Area of Rectangles and Squares',
    grade: 3,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 110,
    description: 'Đọc viết số trong phạm vi 100 000, 4 phép tính, công thức tính diện tích hình chữ nhật S = a x b, hình vuông S = a x a.',
    descriptionEn: 'Numbers up to 100,000, 4 operations, rectangle and square area calculation.',
    questions: [
      {
        question: 'Một hình vuông có cạnh dài 6 cm. Diện tích của hình vuông đó là bao nhiêu?',
        options: ['36 cm²', '24 cm²', '12 cm²', '30 cm²'],
        answerIndex: 0,
        hint: 'Diện tích hình vuông bằng độ dài cạnh nhân với chính nó: S = a x a.',
        explanation: 'S = 6 x 6 = 36 (cm²).'
      },
      {
        question: 'Số "Bốn mươi lăm nghìn không trăm linh tám" được viết bằng số là:',
        options: ['45 008', '45 080', '40 508', '45 800'],
        answerIndex: 0,
        hint: '45 nghìn (45), không trăm (0), linh tám (08).',
        explanation: '45 008 gồm 4 chục nghìn, 5 nghìn, 0 trăm, 0 chục và 8 đơn vị.'
      },
      {
        question: 'Tính giá trị: 12 000 x 3 = ... ?',
        options: ['36 000', '30 000', '24 000', '48 000'],
        answerIndex: 0,
        hint: '12 nghìn nhân 3 = 36 nghìn.',
        explanation: '12 000 x 3 = 36 000.'
      }
    ]
  },
  {
    id: 'quiz-g3-s2-tech-informatics-paint',
    title: 'Tin học 3 - HK2: Công cụ đồ họa Paint & Tư duy thuật toán',
    titleEn: 'Informatics 3 - Sem 2: MS Paint Drawing & Algorithm Logic',
    grade: 3,
    semester: 2,
    subject: 'Tin học & Công nghệ',
    subjectVi: 'Tin học & Công nghệ',
    subjectEn: 'Informatics & Tech',
    category: 'tech',
    difficulty: 'easy',
    durationMinutes: 12,
    xpReward: 100,
    description: 'Làm quen các công cụ vẽ hình học, tô màu, tẩy xóa trong phần mềm đồ họa và các bước thực hiện tuần tự.',
    descriptionEn: 'Graphics software tools (shapes, fill, eraser) and step-by-step algorithms.',
    questions: [
      {
        question: 'Để vẽ được hình tròn hoàn hảo hoặc hình vuông trong Paint, em nhấn giữ phím nào trên bàn phím trong khi kéo chuột?',
        options: ['Phím Shift', 'Phím Ctrl', 'Phím Enter', 'Phím Caps Lock'],
        answerIndex: 0,
        hint: 'Phím Shift thường nằm ở cả hai bên trái và phải bàn phím.',
        explanation: 'Nhấn giữ phím Shift khi dùng công cụ Oval hoặc Rectangle sẽ cho hình tròn hoặc hình vuông đều.'
      },
      {
        question: 'Công cụ hình chiếc thùng sơn nghiêng trong phần mềm vẽ dùng để làm gì?',
        options: ['Tô màu một vùng kín (Fill with color)', 'Tẩy xóa nét vẽ bị sai', 'Gõ chữ văn bản', 'Phóng to hình ảnh'],
        answerIndex: 0,
        hint: 'Dùng để đổ màu vào bên trong hình.',
        explanation: 'Biểu tượng thùng sơn là công cụ Fill with Color (đổ màu vùng kín).'
      },
      {
        question: 'Thuật toán để "Pha một cốc sữa ấm" gồm các bước theo thứ tự nào?',
        options: ['1. Cho sữa bột vào cốc -> 2. Rót nước ấm -> 3. Khuấy đều', '1. Khuấy đều -> 2. Uống sữa -> 3. Rót nước', '1. Rót nước -> 2. Uống luôn -> 3. Cho sữa', '1. Rửa cốc -> 2. Bỏ vào tủ lạnh'],
        answerIndex: 0,
        hint: 'Tuần tự từng bước hợp lý trước sau.',
        explanation: 'Quy trình chuẩn: Cho sữa vào cốc -> thêm nước ấm -> khuấy đều cho tan sữa.'
      }
    ]
  },

  // ==========================================
  // GRADE 4 - LỚP 4
  // ==========================================
  {
    id: 'quiz-g4-s1-math-large-numbers',
    title: 'Toán 4 - HK1: Lớp Triệu, Dấu hiệu chia hết & Tính chất giao hoán',
    titleEn: 'Math 4 - Sem 1: Millions Class, Divisibility Rules & Properties',
    grade: 4,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 110,
    description: 'Các lớp đơn vị, nghìn, triệu; phép cộng trừ nhân chia số lớn; dấu hiệu chia hết cho 2, 5, 3, 9.',
    descriptionEn: 'Large numbers to millions, operations, and divisibility rules for 2, 3, 5, 9.',
    questions: [
      {
        question: 'Số nào sau đây vừa chia hết cho 2, vừa chia hết cho 5?',
        options: ['250', '255', '242', '249'],
        answerIndex: 0,
        hint: 'Số chia hết cho cả 2 và 5 phải có chữ số tận cùng là 0.',
        explanation: 'Số tận cùng bằng 0 vừa chia hết cho 2, vừa chia hết cho 5. 250 thỏa mãn.'
      },
      {
        question: 'Tính nhanh: 25 x 37 x 4 = ... ?',
        options: ['3 700', '37 000', '2 500', '4 200'],
        answerIndex: 0,
        hint: 'Áp dụng tính chất giao hoán và kết hợp: (25 x 4) x 37 = 100 x 37.',
        explanation: '(25 x 4) x 37 = 100 x 37 = 3 700.'
      },
      {
        question: 'Trong số 785 412 093, chữ số 8 thuộc hàng nào, lớp nào?',
        options: ['Hàng chục triệu, lớp triệu', 'Hàng trăm triệu, lớp triệu', 'Hàng triệu, lớp triệu', 'Hàng trăm nghìn, lớp nghìn'],
        answerIndex: 0,
        hint: 'Lớp triệu gồm 3 chữ số: 7 (trăm triệu), 8 (chục triệu), 5 (triệu).',
        explanation: 'Chữ số 8 thuộc hàng chục triệu, nằm ở lớp triệu.'
      }
    ]
  },
  {
    id: 'quiz-g4-s1-vietnamese-parts-of-speech',
    title: 'Tiếng Việt 4 - HK1: Danh từ, Động từ, Tính từ & Văn Miêu tả',
    titleEn: 'Vietnamese 4 - Sem 1: Nouns, Verbs, Adjectives & Descriptive Writing',
    grade: 4,
    semester: 1,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 110,
    description: 'Phân loại từ loại tiếng Việt: Danh từ (chỉ sự vật), Động từ (chỉ hoạt động/trạng thái), Tính từ (chỉ đặc điểm/tính chất).',
    descriptionEn: 'Grammatical parts of speech: nouns, verbs, and adjectives.',
    questions: [
      {
        question: 'Dãy từ nào sau đây gồm TOÀN TÍNH TỪ?',
        options: ['Xanh biếc, êm đềm, chăm chỉ, tròn xoe', 'Chạy nhảy, suy nghĩ, hát ca, bay lượn', 'Bút chì, ngôi trường, học sinh, bầu trời', 'Học tập, siêng năng, chiếc lá, vui tươi'],
        answerIndex: 0,
        hint: 'Tính từ là từ chỉ màu sắc, hình dáng, tính nết, đặc điểm.',
        explanation: '"Xanh biếc, êm đềm, chăm chỉ, tròn xoe" đều là từ chỉ đặc điểm, tính chất (tính từ).'
      },
      {
        question: 'Trong câu "Bác nông dân đang cày ruộng trên cánh đồng bao la", từ nào là ĐỘNG TỪ chính?',
        options: ['cày', 'bác nông dân', 'ruộng', 'bao la'],
        answerIndex: 0,
        hint: 'Từ chỉ hoạt động của bác nông dân.',
        explanation: '"Cày" là động từ chỉ hoạt động sản xuất nông nghiệp.'
      },
      {
        question: 'Một bài văn miêu tả hoàn chỉnh gồm mấy phần theo thứ tự?',
        options: ['Mở bài -> Thân bài -> Kết bài', 'Thân bài -> Mở bài -> Kết bài', 'Mở bài -> Kết luận', 'Giới thiệu -> Nhận xét'],
        answerIndex: 0,
        hint: 'Bố cục 3 phần tiêu chuẩn của bài văn miêu tả.',
        explanation: 'Bố cục chuẩn mực: Mở bài (giới thiệu đối tượng) -> Thân bài (tả chi tiết bao quát và từng bộ phận) -> Kết bài (bày tỏ tình cảm, cảm nghĩ).'
      }
    ]
  },
  {
    id: 'quiz-g4-s1-science-water-air',
    title: 'Khoa học 4 - HK1: Nước, Không khí & Dinh dưỡng Con người',
    titleEn: 'Science 4 - Sem 1: Water, Air States & Human Nutrition',
    grade: 4,
    semester: 1,
    subject: 'Khoa học',
    subjectVi: 'Khoa học',
    subjectEn: 'Science',
    category: 'science',
    difficulty: 'medium',
    durationMinutes: 12,
    xpReward: 105,
    description: 'Tính chất và vòng tuần hoàn của nước, thành phần không khí (Oxy, Nitơ), 4 nhóm chất dinh dưỡng nuôi cơ thể.',
    descriptionEn: 'Water cycle, atmospheric composition, and 4 essential human nutrient groups.',
    questions: [
      {
        question: 'Nước nguyên chất có những tính chất vật lý nào sau đây?',
        options: ['Không màu, không mùi, không vị, không có hình dạng nhất định', 'Có màu trắng, mùi thơm, vị ngọt', 'Có hình vuông cố định', 'Chỉ tồn tại ở thể lỏng'],
        answerIndex: 0,
        hint: 'Nước trong suốt, chảy lan ra mọi phía và có dạng của vật chứa.',
        explanation: 'Nước là chất lỏng trong suốt, không màu, không mùi, không vị, không có hình dạng nhất định, chảy từ trên cao xuống.'
      },
      {
        question: 'Khí nào trong không khí cần thiết nhất cho sự hô hấp của con người và duy trì sự cháy?',
        options: ['Khí Ô-xi (Oxygen)', 'Khí Ni-tơ (Nitrogen)', 'Khí Các-bô-níc (CO2)', 'Khí Hơi nước'],
        answerIndex: 0,
        hint: 'Chiếm khoảng 21% thể tích bầu khí quyển.',
        explanation: 'Khí oxy duy trì sự sống và hô hấp cho mọi sinh vật cũng như duy trì sự cháy.'
      },
      {
        question: 'Nhóm chất dinh dưỡng nào có vai trò chính là cung cấp năng lượng cho các hoạt động sống hàng ngày của cơ thể?',
        options: ['Chất bột đường (Gluxit / Carbohydrate)', 'Chất khoáng', 'Vitamin', 'Nước'],
        answerIndex: 0,
        hint: 'Có nhiều trong cơm, bánh mì, ngô, khoai, sắn.',
        explanation: 'Chất bột đường là nguồn cung cấp năng lượng chủ yếu cho mọi hoạt động của cơ thể người.'
      }
    ]
  },
  {
    id: 'quiz-g4-s2-math-fractions',
    title: 'Toán 4 - HK2: Phân số & Các Phép tính Phân số, Hình thoi',
    titleEn: 'Math 4 - Sem 2: Fractions Operations & Rhombus Geometry',
    grade: 4,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 115,
    description: 'Quy đồng mẫu số, rút gọn phân số, 4 phép tính cộng trừ nhân chia phân số; diện tích hình thoi.',
    descriptionEn: 'Simplifying fractions, common denominators, operations, and rhombus area.',
    questions: [
      {
        question: 'Rút gọn phân số 18/24 về phân số tối giản ta được:',
        options: ['3/4', '9/12', '2/3', '6/8'],
        answerIndex: 0,
        hint: 'Chia cả tử số và mẫu số cho ước chung lớn nhất là 6.',
        explanation: '18 : 6 = 3; 24 : 6 = 4. Kết quả tối giản là 3/4.'
      },
      {
        question: 'Tính phép cộng phân số: 2/5 + 3/10 = ... ?',
        options: ['7/10', '5/15', '1/2', '4/5'],
        answerIndex: 0,
        hint: 'Quy đồng mẫu số chung là 10: 2/5 = 4/10; 4/10 + 3/10 = ?',
        explanation: '2/5 = 4/10; 4/10 + 3/10 = 7/10.'
      },
      {
        question: 'Diện tích hình thoi có độ dài hai đường chéo là m = 8 cm và n = 6 cm bằng bao nhiêu?',
        options: ['24 cm²', '48 cm²', '14 cm²', '28 cm²'],
        answerIndex: 0,
        hint: 'Công thức diện tích hình thoi: S = (m x n) : 2.',
        explanation: 'S = (8 x 6) : 2 = 48 : 2 = 24 (cm²).'
      }
    ]
  },
  {
    id: 'quiz-g4-s2-history-geo-vietnam',
    title: 'Lịch sử & Địa lý 4 - HK2: Triều đại Lý - Trần & Thiên nhiên Việt Nam',
    titleEn: 'History & Geography 4 - Sem 2: Ly & Tran Dynasties & Vietnam Geography',
    grade: 4,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 110,
    description: 'Chiếu dời đô của Lý Công Uẩn (1010), 3 lần chiến thắng quân Nguyên Mông thời Trần, địa hình và khí hậu nhiệt đới gió mùa.',
    descriptionEn: 'Relocation of capital to Thang Long (1010), anti-Mongol victories, tropical monsoon geography.',
    questions: [
      {
        question: 'Vua Lý Thái Tổ quyết định dời đô từ Hoa Lư về thành Đại La (Thăng Long - Hà Nội) vào năm nào?',
        options: ['Năm 1010', 'Năm 938', 'Năm 1009', 'Năm 1288'],
        answerIndex: 0,
        hint: 'Mốc son lịch sử mở đầu kỷ nguyên Thăng Long rực rỡ nghìn năm văn hiến.',
        explanation: 'Mùa thu năm Canh Tuất (1010), vua Lý Thái Tổ ban Chiếu dời đô về thành Đại La và đổi tên là Thăng Long.'
      },
      {
        question: 'Hội nghị Diên Hồng với tiếng hô vang "Đánh!" của các bậc bô lão thể hiện tinh thần đoàn kết chống giặc ngoại xâm dưới triều đại nào?',
        options: ['Nhà Trần', 'Nhà Lý', 'Nhà Lê', 'Nhà Nguyễn'],
        answerIndex: 0,
        hint: 'Triều đại 3 lần đánh bại đội quân xâm lược đế quốc Mông - Nguyên hùng mạnh.',
        explanation: 'Hội nghị Diên Hồng do vua Trần Thánh Tông tổ chức năm 1284 quy tụ các bô lão cả nước biểu thị ý chí sắt đá quyết tâm đánh giặc.'
      },
      {
        question: 'Dãy núi nào được mệnh danh là bức tường thành tự nhiên ngăn gió mùa đông bắc giữa miền Bắc và miền Nam nước ta?',
        options: ['Dãy núi Bạch Mã', 'Dãy Hoàng Liên Sơn', 'Dãy Trường Sơn Bắc', 'Dãy Tam Điệp'],
        answerIndex: 0,
        hint: 'Nằm ở ranh giới giữa tỉnh Thừa Thiên Huế và thành phố Đà Nẵng.',
        explanation: 'Dãy Bạch Mã đâm ngang ra biển tạo nên ranh giới khí hậu tự nhiên giữa hai miền đất nước.'
      }
    ]
  },

  // ==========================================
  // GRADE 5 - LỚP 5
  // ==========================================
  {
    id: 'quiz-g5-s1-math-decimals',
    title: 'Toán 5 - HK1: Số Thập phân & Tỉ số Phần trăm',
    titleEn: 'Math 5 - Sem 1: Decimals & Percentage Arithmetic',
    grade: 5,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Chuyển đổi phân số thập phân, 4 phép tính với số thập phân, tìm tỉ số phần trăm và giải toán thực tế.',
    descriptionEn: 'Converting decimal fractions, operations with decimals, calculating percentages.',
    questions: [
      {
        question: 'Tính giá trị: 45.6 x 0.1 = ... ?',
        options: ['4.56', '456', '0.456', '45.60'],
        answerIndex: 0,
        hint: 'Nhân một số thập phân với 0.1 tương đương với việc dời dấu phẩy sang bên trái một chữ số.',
        explanation: '45.6 x 0.1 = 4.56.'
      },
      {
        question: 'Một lớp học có 40 học sinh, trong đó có 24 học sinh nữ. Hỏi học sinh nữ chiếm bao nhiêu phần trăm số học sinh cả lớp?',
        options: ['60%', '55%', '40%', '65%'],
        answerIndex: 0,
        hint: 'Tỉ số phần trăm: (24 : 40) x 100%.',
        explanation: '24 : 40 = 0.6 = 60%.'
      },
      {
        question: 'Diện tích hình thang có đáy lớn 14 cm, đáy bé 10 cm và chiều cao 8 cm là bao nhiêu?',
        options: ['96 cm²', '192 cm²', '48 cm²', '120 cm²'],
        answerIndex: 0,
        hint: 'Công thức diện tích hình thang: S = (đáy lớn + đáy bé) x chiều cao : 2.',
        explanation: 'S = (14 + 10) x 8 : 2 = 24 x 8 : 2 = 192 : 2 = 96 (cm²).'
      }
    ]
  },
  {
    id: 'quiz-g5-s1-vietnamese-conjunctions',
    title: 'Tiếng Việt 5 - HK1: Quan hệ từ & Nghệ thuật Tả cảnh Thiên nhiên',
    titleEn: 'Vietnamese 5 - Sem 1: Conjunctions & Landscape Essay Writing',
    grade: 5,
    semester: 1,
    subject: 'Tiếng Việt',
    subjectVi: 'Tiếng Việt',
    subjectEn: 'Vietnamese',
    category: 'literature',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Cặp quan hệ từ chỉ nguyên nhân - kết quả, điều kiện - kết quả, tương phản; liên kết câu văn miêu tả.',
    descriptionEn: 'Correlative conjunction pairs (cause-effect, conditional, contrast) and paragraph coherence.',
    questions: [
      {
        question: 'Cặp quan hệ từ nào sau đây biểu thị mối quan hệ "Tương phản / Đối lập"?',
        options: ['Tuy ... nhưng ...', 'Vì ... nên ...', 'Nếu ... thì ...', 'Không những ... mà còn ...'],
        answerIndex: 0,
        hint: 'Ví dụ: "Tuy trời mưa to nhưng bạn Nam vẫn đến lớp đúng giờ".',
        explanation: 'Cặp "Tuy ... nhưng ..." hoặc "Mặc dù ... nhưng ..." biểu thị quan hệ tương phản giữa hai vế câu ghép.'
      },
      {
        question: 'Cặp từ nào dưới đây là cặp "TỪ ĐỒNG NGHĨA HOÀN TOÀN"?',
        options: ['Mẹ - má - u', 'Màu xanh - màu đỏ', 'To lớn - nhỏ bé', 'Chăm chỉ - lười biếng'],
        answerIndex: 0,
        hint: 'Các từ cùng gọi một người mẹ ở các phương ngữ khác nhau của Việt Nam.',
        explanation: '"Mẹ", "má", "u", "bầm" đều là từ đồng nghĩa chỉ người mẹ sinh thành ra con.'
      },
      {
        question: 'Trong câu văn "Rừng cọ quê tôi um tùm, thân thẳng tắp như những cột chống trời", tác giả đã sử dụng biện pháp tu từ nào?',
        options: ['So sánh', 'Nhân hóa', 'Điệp từ', 'Đảo ngữ'],
        answerIndex: 0,
        hint: 'Dấu hiệu: từ so sánh "như".',
        explanation: 'Thân cọ được so sánh với "những cột chống trời" bằng từ so sánh "như".'
      }
    ]
  },
  {
    id: 'quiz-g5-s2-math-speed-time',
    title: 'Toán 5 - HK2: Toán Chuyển động đều (v, s, t) & Thể tích Hình khối',
    titleEn: 'Math 5 - Sem 2: Uniform Motion (v, s, t) & 3D Geometry Volume',
    grade: 5,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 18,
    xpReward: 140,
    description: 'Công thức chuyển động đều v = s/t, s = v x t, t = s/v; hai xe đi cùng chiều/ngược chiều; thể tích hình lập phương & hình hộp chữ nhật.',
    descriptionEn: 'Uniform speed, distance, time problems; overtaking and meeting points; 3D volume calculation.',
    questions: [
      {
        question: 'Một người đi xe máy quãng đường dài 105 km hết 2 giờ 30 phút. Vận tốc của người đi xe máy là bao nhiêu km/giờ?',
        options: ['42 km/h', '40 km/h', '45 km/h', '50 km/h'],
        answerIndex: 0,
        hint: 'Đổi 2 giờ 30 phút = 2.5 giờ. Vận tốc v = s : t = 105 : 2.5.',
        explanation: '2 giờ 30 phút = 2.5 giờ. Vận tốc v = 105 : 2.5 = 42 (km/h).'
      },
      {
        question: 'Một bể nước hình hộp chữ nhật có chiều dài 2m, chiều rộng 1.5m và chiều cao 1.2m. Thể tích của bể nước là:',
        options: ['3.6 m³', '3.0 m³', '4.2 m³', '4.7 m³'],
        answerIndex: 0,
        hint: 'Thể tích hình hộp chữ nhật: V = a x b x c.',
        explanation: 'V = 2 x 1.5 x 1.2 = 3.6 (m³).'
      },
      {
        question: 'Hai ô tô cùng xuất phát từ A và B cách nhau 180 km đi ngược chiều nhau. Xe 1 đi với vận tốc 50 km/h, xe 2 đi với vận tốc 40 km/h. Hỏi sau mấy giờ hai xe gặp nhau?',
        options: ['2 giờ', '3 giờ', '1.5 giờ', '2.5 giờ'],
        answerIndex: 0,
        hint: 'Tổng vận tốc hai xe là 50 + 40 = 90 km/h. Thời gian gặp nhau: t = s : (v1 + v2).',
        explanation: 'Tổng vận tốc: 50 + 40 = 90 km/h. Thời gian để gặp nhau: 180 : 90 = 2 giờ.'
      }
    ]
  },
  {
    id: 'quiz-g5-s2-science-energy-environment',
    title: 'Khoa học 5 - HK2: Năng lượng Tái tạo, Điện năng & Môi trường',
    titleEn: 'Science 5 - Sem 2: Renewable Energy, Electricity & Environment',
    grade: 5,
    semester: 2,
    subject: 'Khoa học',
    subjectVi: 'Khoa học',
    subjectEn: 'Science',
    category: 'science',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 115,
    description: 'Năng lượng mặt trời, gió, nước chảy; an toàn sử dụng điện trong gia đình; bảo vệ rừng và nguồn nước sạch.',
    descriptionEn: 'Solar, wind, hydro renewable energies; electrical safety; ecological protection.',
    questions: [
      {
        question: 'Nguồn năng lượng nào sau đây là nguồn năng lượng sạch và có khả năng tái tạo vô tận?',
        options: ['Năng lượng mặt trời và gió', 'Than đá', 'Dầu mỏ', 'Khí đốt thiên nhiên'],
        answerIndex: 0,
        hint: 'Nguồn năng lượng tự nhiên không phát thải khí nhà kính và không bị cạn kiệt.',
        explanation: 'Năng lượng ánh sáng mặt trời và sức gió là các nguồn năng lượng sạch, tái tạo được.'
      },
      {
        question: 'Hành động nào sau đây đảm bảo an toàn khi sử dụng các thiết bị điện trong gia đình?',
        options: ['Rút phích cắm khi không sử dụng và giữ tay khô ráo khi chạm vào công tắc', 'Chạm tay ướt vào ổ điện', 'Cắm quá nhiều thiết bị công suất lớn vào một ổ cắm', 'Dùng dây điện bị hở cách điện'],
        answerIndex: 0,
        hint: 'Nước dẫn điện rất tốt gây nguy cơ giật điện.',
        explanation: 'Tay khô ráo và ngắt nguồn khi không dùng giúp bảo đảm an toàn tính mạng tuyệt đối.'
      },
      {
        question: 'Nguyên nhân chủ yếu nào gây ra hiện tượng xói mòn đất và lũ quét ở các vùng đồi núi?',
        options: ['Chặt phá rừng đầu nguồn bừa bãi', 'Trồng nhiều cây xanh', 'Xây dựng hồ chứa nước điều tiết', 'Đắp đê ngăn lũ'],
        answerIndex: 0,
        hint: 'Rừng cây có vai trò giữ đất, giữ nước và ngăn dòng lũ chảy siết.',
        explanation: 'Nạn phá rừng làm mất đi thảm thực vật che phủ, khi mưa lớn đất bị rửa trôi gây lũ quét và sạt lở.'
      }
    ]
  }
];
