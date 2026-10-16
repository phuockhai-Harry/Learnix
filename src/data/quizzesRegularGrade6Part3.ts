import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Grade 6 Regular 15-Minute Assessments (Kiểm tra Thường xuyên) - Part 3
 * Guarantees every single subject has AT LEAST 4 regular tests in Semester 1 AND 4 regular tests in Semester 2!
 * Ministry of Education GDPT 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */
export const ADDITIONAL_GRADE_6_REGULAR_QUIZZES_PART3: CurriculumQuiz[] = [
  // =========================================================================
  // SEMESTER 1 - HỌC KỲ 1 REGULAR QUIZZES
  // =========================================================================

  // 1. TOÁN 6 - HK1 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s1-reg4-math',
    title: 'Toán 6 - Kiểm tra Thường xuyên 4: Dấu hiệu Chia hết & Số Nguyên tố',
    titleEn: 'Math 6 - Regular Assessment 4: Divisibility Rules & Prime Numbers',
    grade: 6,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Dấu hiệu chia hết cho 2, 3, 5, 9; số nguyên tố, hợp số và phân tích ra thừa số nguyên tố.',
    descriptionEn: 'Divisibility rules, prime factorization, and composite numbers.',
    questions: [
      {
        question: 'Số nào sau đây là số nguyên tố?',
        options: ['17', '9', '21', '33'],
        answerIndex: 0,
        hint: 'Số nguyên tố chỉ có đúng hai ước là 1 và chính nó.',
        explanation: '17 là số nguyên tố vì chỉ có hai ước là 1 và 17; 9=3x3, 21=3x7, 33=3x11 là các hợp số.'
      },
      {
        question: 'Phân tích số 60 ra thừa số nguyên tố được kết quả là:',
        options: ['2² · 3 · 5', '2 · 3 · 10', '4 · 15', '2³ · 3 · 5'],
        answerIndex: 0,
        hint: '60 = 4 × 15 = 2² × 3 × 5.',
        explanation: '60 chia 2 được 30, chia 2 được 15, chia 3 được 5, chia 5 được 1 => 60 = 2² · 3 · 5.'
      },
      {
        question: 'Chữ số thích hợp điền vào dấu * để số 43* chia hết cho cả 3 và 5 là:',
        options: ['5', '0', '2', '8'],
        answerIndex: 0,
        hint: 'Chia hết cho 5 thì tận cùng là 0 hoặc 5. Kiểm tra tổng chữ số chia hết cho 3.',
        explanation: 'Nếu * = 0: 4+3+0=7 (loại). Nếu * = 5: 4+3+5=12 chia hết cho 3 (thỏa mãn). Vậy * = 5.'
      },
      {
        question: 'Khẳng định nào sau đây là ĐÚNG?',
        options: [
          'Số 2 là số nguyên tố chẵn duy nhất',
          'Tất cả các số lẻ đều là số nguyên tố',
          'Số 0 và số 1 là số nguyên tố nhỏ nhất',
          'Hợp số là số tự nhiên có nhiều hơn 5 ước'
        ],
        answerIndex: 0,
        hint: '2 là số chẵn duy nhất không chia hết cho số nào khác ngoài 1 và chính nó.',
        explanation: '2 là số nguyên tố nhỏ nhất và cũng là số nguyên tố chẵn duy nhất.'
      }
    ]
  },

  // 2. NGỮ VĂN 6 - HK1 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s1-reg4-lit',
    title: 'Ngữ văn 6 - Kiểm tra Thường xuyên 4: Mở rộng Thành phần Câu bằng Cụm từ',
    titleEn: 'Literature 6 - Regular Assessment 4: Phrase Expansion of Sentence Components',
    grade: 6,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Biện pháp mở rộng chủ ngữ và vị ngữ bằng cụm danh từ, cụm động từ, cụm tính từ.',
    descriptionEn: 'Sentence component expansion using noun, verb, and adjective phrases.',
    questions: [
      {
        question: 'Trong câu: "Những bông hoa hồng nhung đỏ thắm đang nở rộ trong vườn", chủ ngữ là:',
        options: ['Những bông hoa hồng nhung đỏ thắm', 'Những bông hoa', 'Hoa hồng nhung', 'Những bông hoa hồng'],
        answerIndex: 0,
        hint: 'Chủ ngữ trả lời cho câu hỏi: "Cái gì đang nở rộ trong vườn?".',
        explanation: '"Những bông hoa hồng nhung đỏ thắm" là cụm danh từ đóng vai trò chủ ngữ được mở rộng chi tiết.'
      },
      {
        question: 'Việc mở rộng chủ ngữ, vị ngữ bằng cụm từ có tác dụng gì?',
        options: [
          'Làm cho thông tin trong câu trở nên chi tiết, cụ thể và sinh động hơn',
          'Làm cho câu văn bắt buộc phải có vần điệu lục bát',
          'Biến câu đơn thành câu ghép phức tạp',
          'Làm câu văn ngắn gọn nhất có thể'
        ],
        answerIndex: 0,
        hint: 'Cung cấp thêm đặc điểm, tính chất, số lượng.',
        explanation: 'Mở rộng thành phần câu giúp người đọc hình dung sự vật, hành động cụ thể, chính xác và giàu hình ảnh.'
      },
      {
        question: 'Cụm từ nào sau đây là Cụm động từ?',
        options: ['đang chăm chú đọc một cuốn sách hay', 'cuốn sách hay của bố', 'rất chăm chỉ và thông minh', 'những bạn học sinh lớp 6'],
        answerIndex: 0,
        hint: 'Trung tâm là động từ "đọc" kèm từ chỉ thời thể "đang".',
        explanation: '"đang chăm chú đọc một cuốn sách hay" có động từ trung tâm là "đọc".'
      },
      {
        question: 'Thành phần phụ nào trong cụm tính từ: "rất đẹp đẽ" đứng trước tính từ trung tâm để chỉ mức độ?',
        options: ['rất', 'đẹp đẽ', 'đẹp', 'đẽ'],
        answerIndex: 0,
        hint: 'Phụ trước chỉ mức độ: rất, quá, lắm, cực kỳ.',
        explanation: '"rất" là phụ ngữ đứng trước chỉ mức độ cao của tính chất "đẹp đẽ".'
      }
    ]
  },

  // 3. KHOA HỌC TỰ NHIÊN 6 - HK1 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s1-reg3-sci',
    title: 'KHTN 6 - Kiểm tra Thường xuyên 3: Nhiên liệu & An ninh Năng lượng',
    titleEn: 'Natural Science 6 - Regular Assessment 3: Fuels and Energy Security',
    grade: 6,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Phân loại nhiên liệu rắn, lỏng, khí; sử dụng nhiên liệu hiệu quả và an toàn phòng chống cháy nổ.',
    descriptionEn: 'Classification of fuels and safe, efficient energy consumption.',
    questions: [
      {
        question: 'Nhiên liệu nào sau đây ở thể khí trong điều kiện thường?',
        options: ['Khí gas (Biogas, LPG)', 'Xăng sinh học E5', 'Dầu hỏa', 'Than đá'],
        answerIndex: 0,
        hint: 'Dùng đun nấu trong bình gas gia đình.',
        explanation: 'Khí gas, khí thiên nhiên là nhiên liệu thể khí; xăng và dầu là nhiên liệu lỏng; than là nhiên liệu rắn.'
      },
      {
        question: 'Để sử dụng nhiên liệu hiệu quả và cháy hoàn toàn, ta cần:',
        options: [
          'Cung cấp đủ không khí (oxygen) và tăng diện tích tiếp xúc giữa nhiên liệu và không khí',
          'Đóng thật kín tất cả các cửa thông gió lò than',
          'Cho thật nhiều nhiên liệu vào buồng đốt chật hẹp',
          'Giảm bớt lượng không khí càng nhiều càng tốt'
        ],
        answerIndex: 0,
        hint: 'Oxygen duy trì sự cháy hoàn toàn.',
        explanation: 'Cung cấp đủ oxygen và diện tích tiếp xúc lớn giúp nhiên liệu cháy hết, tỏa nhiệt tối đa và không tạo khói độc CO.'
      },
      {
        question: 'Nhiên liệu hóa thạch gồm những loại nào?',
        options: ['Than đá, dầu mỏ và khí thiên nhiên', 'Củi khô, rơm rạ', 'Năng lượng mặt trời', 'Cồn sinh học ethanol'],
        answerIndex: 0,
        hint: 'Hình thành từ xác sinh vật qua hàng triệu năm dưới lòng đất.',
        explanation: 'Than đá, dầu mỏ, khí đốt là các nhiên liệu hóa thạch không thể tái tạo nhanh chóng.'
      },
      {
        question: 'Khi đun nấu bằng bếp than tổ ong trong phòng kín đóng kín cửa có thể dẫn đến nguy hiểm chết người do:',
        options: ['Khí carbon monoxide (CO) gây ngạt thở và ngộ độc máu', 'Khí oxygen quá nhiều', 'Khí hơi nước gây ẩm ướt', 'Khí nitrogen trơ'],
        answerIndex: 0,
        hint: 'Cháy thiếu oxy sinh ra khí độc không màu không mùi.',
        explanation: 'Khí CO chiếm chỗ của O2 trong hồng cầu máu gây ngạt và tử vong nhanh chóng, tuyệt đối không đốt than trong phòng kín.'
      }
    ]
  },

  // 4. KHOA HỌC TỰ NHIÊN 6 - HK1 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s1-reg4-sci',
    title: 'KHTN 6 - Kiểm tra Thường xuyên 4: Quang hợp & Hô hấp ở Thực vật',
    titleEn: 'Natural Science 6 - Regular Assessment 4: Photosynthesis & Plant Respiration',
    grade: 6,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Phương trình quang hợp, vai trò của lá cây, hô hấp tế bào và trao đổi chất ở thực vật.',
    descriptionEn: 'Plant photosynthesis and cellular respiration processes.',
    questions: [
      {
        question: 'Trong quá trình quang hợp, cây xanh hấp thụ khí nào và giải phóng ra khí nào?',
        options: [
          'Hấp thụ khí carbon dioxide (CO₂) và giải phóng khí oxygen (O₂)',
          'Hấp thụ khí oxygen (O₂) và giải phóng khí carbon dioxide (CO₂)',
          'Hấp thụ khí nitrogen và giải phóng khí hydrogen',
          'Chỉ hấp thụ hơi nước và không trao đổi khí'
        ],
        answerIndex: 0,
        hint: 'Cây quang hợp dưới ánh sáng mặt trời làm sạch bầu không khí.',
        explanation: 'Phương trình quang hợp: Nước + Carbon dioxide + Ánh sáng mặt trời (diệp lục) → Glucose + Oxygen.'
      },
      {
        question: 'Hô hấp tế bào diễn ra chủ yếu ở bào quan nào trong tế bào?',
        options: ['Ti thể (nhà máy năng lượng)', 'Lục lạp', 'Không bào', 'Thành tế bào'],
        answerIndex: 0,
        hint: 'Bào quan tạo năng lượng ATP cho mọi hoạt động sống.',
        explanation: 'Ti thể là nơi diễn ra hô hấp tế bào, phân giải chất hữu cơ tạo năng lượng sống ATP.'
      },
      {
        question: 'Tại sao không nên để nhiều chậu cây xanh trong phòng ngủ kín vào ban đêm?',
        options: [
          'Vì ban đêm cây không quang hợp mà chỉ hô hấp lấy khí O₂ và thải ra CO₂, gây khó thở',
          'Vì cây xanh hút hết toàn bộ ánh sáng trong phòng',
          'Vì cây phát ra tia bức xạ nguy hiểm',
          'Vì cây sẽ làm phòng ngủ quá lạnh'
        ],
        answerIndex: 0,
        hint: 'Ban đêm không có ánh sáng mặt trời nên cây chỉ thực hiện quá trình hô hấp.',
        explanation: 'Ban đêm không có ánh sáng, cây chỉ hô hấp tiêu hao O2 và thải CO2 trong phòng ngủ kín.'
      },
      {
        question: 'Khí khổng trên bề mặt lá cây có chức năng chính là:',
        options: ['Thực hiện trao đổi khí và thoát hơi nước', 'Hút nước trực tiếp từ không khí', 'Bảo vệ lá không bị sâu bọ cắn', 'Giúp lá có màu xanh lục'],
        answerIndex: 0,
        hint: 'Các lỗ nhỏ đóng mở nhịp nhàng dưới mặt lá.',
        explanation: 'Khí khổng đóng mở điều tiết thoát hơi nước và giúp khí CO2, O2 khuếch tán ra vào lá.'
      }
    ]
  },

  // 5. TIẾNG ANH 6 - HK1 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s1-reg3-eng',
    title: 'Tiếng Anh 6 - Kiểm tra Thường xuyên 3: Unit 4 My Neighbourhood',
    titleEn: 'English 6 - Regular Assessment 3: Unit 4 My Neighbourhood',
    grade: 6,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Comparative adjectives, places in the neighbourhood, giving directions.',
    descriptionEn: 'Comparatives and local community vocabulary.',
    questions: [
      {
        question: 'This modern shopping mall is _______ than the old grocery store near my house.',
        options: ['larger', 'more large', 'largest', 'as large'],
        answerIndex: 0,
        hint: 'Short adjective ending in "e": large -> larger.',
        explanation: 'Tính từ ngắn "large" tận cùng bằng "e" chỉ thêm "r" trong so sánh hơn: larger than.'
      },
      {
        question: 'Excuse me, can you tell me the way to the post office? - Go straight, then turn _______ at the traffic lights.',
        options: ['left', 'up', 'down', 'out'],
        answerIndex: 0,
        hint: 'Direction: turn left or turn right.',
        explanation: 'Cụm từ chỉ hướng đường: "turn left" (rẽ trái) hoặc "turn right" (rẽ phải).'
      },
      {
        question: 'The streets in the central city are always very _______ during rush hour.',
        options: ['crowded', 'quiet', 'peaceful', 'historic'],
        answerIndex: 0,
        hint: 'Full of people and vehicles.',
        explanation: '"crowded" nghĩa là đông đúc, tấp nập xe cộ giờ cao điểm.'
      },
      {
        question: 'My neighborhood is very quiet. There is _______ noise and pollution here.',
        options: ['little', 'many', 'few', 'a lot of'],
        answerIndex: 0,
        hint: '"noise" is an uncountable noun.',
        explanation: '"little" đi kèm với danh từ không đếm được "noise" biểu thị rất ít.'
      }
    ]
  },

  // 6. TIẾNG ANH 6 - HK1 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s1-reg4-eng',
    title: 'Tiếng Anh 6 - Kiểm tra Thường xuyên 4: Unit 5 Natural Wonders of Vietnam',
    titleEn: 'English 6 - Regular Assessment 4: Unit 5 Natural Wonders of Vietnam',
    grade: 6,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Modal verb must/mustn\'t, superlative adjectives, travel items.',
    descriptionEn: 'Modal verbs of obligation and travel gear.',
    questions: [
      {
        question: 'Fansipan is the _______ mountain in Vietnam and Indochina.',
        options: ['highest', 'higher', 'most high', 'high'],
        answerIndex: 0,
        hint: 'Superlative of short adjective "high": the highest.',
        explanation: 'So sánh nhất của tính từ ngắn "high" là "the highest" (cao nhất).'
      },
      {
        question: 'You _______ take a waterproof jacket because it often rains heavily in the rainforest.',
        options: ['must', 'mustn\'t', 'cann\'t', 'shouldn\'t'],
        answerIndex: 0,
        hint: 'Necessary requirement for a trip.',
        explanation: '"must" diễn tả sự cần thiết bắt buộc chuẩn bị áo mưa chống ướt.'
      },
      {
        question: 'Don\'t forget to pack a _______ before going camping in the forest at night.',
        options: ['torch', 'scissors', 'microwave', 'fridge'],
        answerIndex: 0,
        hint: 'A small portable electric light (đèn pin).',
        explanation: '"torch" (flashlight) là đèn pin chiếu sáng khi cắm trại trong rừng ban đêm.'
      },
      {
        question: 'Visitors _______ throw rubbish into the river when exploring the caves.',
        options: ['mustn\'t', 'must', 'can', 'need'],
        answerIndex: 0,
        hint: 'Strict environmental rule prohibiting littering.',
        explanation: '"mustn\'t" chỉ sự cấm đoán xả rác bừa bãi xuống dòng sông bảo vệ cảnh quan.'
      }
    ]
  },

  // 7. LỊCH SỬ VÀ ĐỊA LÝ 6 - HK1 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s1-reg3-hisgeo',
    title: 'Lịch sử và Địa lý 6 - Kiểm tra Thường xuyên 3: Lưỡng Hà & Ấn Độ Cổ đại',
    titleEn: 'History & Geography 6 - Regular Assessment 3: Ancient Mesopotamia & India',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Sông Ti-gơ-rơ và Ơ-phơ-rát, Vườn treo Ba-bi-lon, sông Ấn và sông Hằng, chế độ đẳng cấp Vác-na.',
    descriptionEn: 'Mesopotamia and Ancient Indian civilization achievements.',
    questions: [
      {
        question: 'Công trình kiến trúc nào sau đây của Lưỡng Hà cổ đại là một trong 7 kỳ quan thế giới cổ đại?',
        options: ['Vườn treo Ba-bi-lon (Babylon)', 'Kim tự tháp Giza', 'Vạn Lý Trường Thành', 'Đền Parthenon'],
        answerIndex: 0,
        hint: 'Khu vườn trên cao do vua Nebuchadnezzar II xây dựng tặng hoàng hậu.',
        explanation: 'Vườn treo Ba-bi-lon bên bờ sông Euphrates là kỳ quan nổi tiếng của nền văn minh Lưỡng Hà.'
      },
      {
        question: 'Hai con sông lớn bồi đắp nên nền văn minh Ấn Độ cổ đại rực rỡ là:',
        options: ['Sông Ấn (Indus) và sông Hằng (Ganges)', 'Sông Nin và sông Công-gô', 'Sông Ti-gơ-rơ và Ơ-phơ-rát', 'Sông Hoàng Hà và Trường Giang'],
        answerIndex: 0,
        hint: 'Sông Ấn và sông Hằng chảy qua Nam Á.',
        explanation: 'Nền văn minh Ấn Độ cổ đại hình thành trên lưu vực hai đại hồng thủy sông Ấn và sông Hằng linh thiêng.'
      },
      {
        question: 'Chế độ đẳng cấp Vác-na (Varna) ở Ấn Độ cổ đại chia xã hội thành 4 đẳng cấp dựa trên:',
        options: ['Tôn giáo, chủng tộc và địa vị xã hội từ khi sinh ra', 'Tài sản nhà cửa giàu nghèo', 'Trình độ học vấn đại học', 'Số lượng trâu bò sở hữu'],
        answerIndex: 0,
        hint: 'Brahman (tăng lữ), Kshatriya (quý tộc/chiến binh), Vaisya (bình dân), Sudra (thấp kém nhất).',
        explanation: 'Chế độ Varna phân biệt nghiêm ngặt đẳng cấp cha truyền con nối bất bình đẳng theo giáo lý tôn giáo.'
      },
      {
        question: 'Bộ luật thành văn cổ xưa và hoàn chỉnh nhất của người Lưỡng Hà cổ đại là:',
        options: ['Bộ luật Hammurabi', 'Bộ luật Hồng Đức', 'Bộ luật Gia Long', 'Luật 12 bảng La Mã'],
        answerIndex: 0,
        hint: 'Khắc trên cột đá bazan hình trụ với nguyên tắc "mắt đền mắt, răng đền răng".',
        explanation: 'Bộ luật Hammurabi của vua Lưỡng Hà Hammurabi thế kỷ 18 TCN là di sản lập pháp đồ sộ bậc nhất.'
      }
    ]
  },

  // 8. LỊCH SỬ VÀ ĐỊA LÝ 6 - HK1 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s1-reg4-hisgeo',
    title: 'Lịch sử và Địa lý 6 - Kiểm tra Thường xuyên 4: Cấu tạo Trái Đất & Động đất Núi lửa',
    titleEn: 'History & Geography 6 - Regular Assessment 4: Earth Structure, Volcanoes & Earthquakes',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Ba lớp cấu tạo Trái Đất (vỏ, manti, nhân), các mảng kiến tạo, hiện tượng núi lửa và động đất.',
    descriptionEn: 'Interior layers of the Earth, plate tectonics, seismic and volcanic activity.',
    questions: [
      {
        question: 'Từ ngoài vào trong, Trái Đất được cấu tạo bởi 3 lớp đồng tâm lần lượt là:',
        options: [
          'Vỏ Trái Đất → Manti (Manti) → Nhân (Lõi)',
          'Nhân → Manti → Vỏ Trái Đất',
          'Manti → Vỏ Trái Đất → Nhân',
          'Khí quyển → Thạch quyển → Sinh quyển'
        ],
        answerIndex: 0,
        hint: 'Lớp mỏng nhất ở ngoài cùng nơi con người sinh sống là vỏ Trái Đất.',
        explanation: 'Cấu tạo Trái Đất gồm: Vỏ ngoài mỏng (5-70km), lớp Manti ở giữa và lớp Nhân ở trung tâm.'
      },
      {
        question: 'Núi lửa và động đất thường xảy ra nhiều nhất ở khu vực nào trên Trái Đất?',
        options: [
          'Nơi tiếp xúc ranh giới giữa các mảng kiến tạo (như Vành đai lửa Thái Bình Dương)',
          'Sâu bên trong nội địa các lục địa ổn định cổ xưa',
          'Tại hai vùng cực Bắc và cực Nam lạnh giá',
          'Tại vùng xích đạo bằng phẳng ven biển'
        ],
        answerIndex: 0,
        hint: 'Nơi các mảng xô vào nhau hoặc tách xa nhau.',
        explanation: 'Ranh giới tiếp xúc của các mảng kiến tạo không ổn định là nơi sinh ra núi lửa phun trào và địa chấn động đất.'
      },
      {
        question: 'Khi đang ở trong lớp học mà bất ngờ xảy ra động đất rung lắc mạnh, hành động an toàn nhất là:',
        options: [
          'Nhanh chóng chui xuống gầm bàn kiên cố, dùng cặp sách che đầu và bảo vệ cổ',
          'Hoảng loạn chen lấn chạy ra cửa lớp ngay lập tức',
          'Nhảy qua cửa sổ từ tầng 2 xuống sân',
          'Đứng cạnh cửa kính lớn để quan sát'
        ],
        answerIndex: 0,
        hint: 'Quy tắc "Drop, Cover, Hold On" (Cúi xuống, che chắn, bám chặt).',
        explanation: 'Tránh xa cửa kính, chui dưới gầm bàn học chắc chắn và ôm chặt chân bàn là quy tắc bảo toàn tính mạng hàng đầu.'
      },
      {
        question: 'Vỏ Trái Đất có độ dày dao động trong khoảng bao nhiêu?',
        options: ['Từ 5 km (dưới đáy đại dương) đến khoảng 70 km (dưới vùng núi lục địa)', 'Khoảng 2900 km', 'Khoảng 5000 km', 'Chỉ dày đúng 1 km'],
        answerIndex: 0,
        hint: 'Rất mỏng so với bán kính Trái Đất (6371 km).',
        explanation: 'Vỏ Trái Đất là lớp ngoài cùng mỏng nhất, dày từ 5 km ở đáy đại dương đến 70 km ở chân các rặng núi cao.'
      }
    ]
  },

  // 9. TIN HỌC 6 - HK1 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s1-reg3-info',
    title: 'Tin học 6 - Kiểm tra Thường xuyên 3: World Wide Web & Tìm kiếm Thông tin',
    titleEn: 'Informatics 6 - Regular Assessment 3: World Wide Web & Search Engines',
    grade: 6,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'technology',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Trình duyệt web, siêu văn bản, địa chỉ website (URL) và kỹ năng dùng máy tìm kiếm Google.',
    descriptionEn: 'Web browsers, hypertext, URLs, and advanced search keyword strategies.',
    questions: [
      {
        question: 'Phần mềm nào sau đây là Trình duyệt web (Web Browser) phổ biến?',
        options: ['Google Chrome, Microsoft Edge, Cốc Cốc, Safari', 'Microsoft Word', 'Windows Media Player', 'Adobe Photoshop'],
        answerIndex: 0,
        hint: 'Dùng để mở và xem các trang web trên Internet.',
        explanation: 'Chrome, Edge, Safari là các trình duyệt web giúp truy cập và hiển thị nội dung website.'
      },
      {
        question: 'Để tìm kiếm chính xác một cụm từ cụ thể trên máy tìm kiếm Google, ta nên đặt cụm từ đó trong ký hiệu nào?',
        options: ['Dấu ngoặc kép "..."', 'Dấu ngoặc vuông [...]', 'Dấu sao *...*', 'Dấu thăng #...#'],
        answerIndex: 0,
        hint: 'Ví dụ: "chương trình GDPT 2018".',
        explanation: 'Đặt từ khóa trong dấu ngoặc kép "..." yêu cầu Google tìm kiếm chính xác thứ tự các từ trong cụm từ đó.'
      },
      {
        question: 'Địa chỉ website (URL) nào sau đây có định dạng chuẩn xác?',
        options: ['https://www.moet.gov.vn', 'https//moet,gov,vn', 'www:moet:gov:vn', 'http//moet/gov/vn'],
        answerIndex: 0,
        hint: 'Giao thức http:// hoặc https:// theo sau là tên miền.',
        explanation: 'https://www.moet.gov.vn tuân thủ đúng chuẩn địa chỉ tài nguyên URL trên Internet.'
      },
      {
        question: 'Văn bản được tích hợp sẵn các liên kết (Hyperlink) dẫn tới các văn bản, hình ảnh, âm thanh khác được gọi là:',
        options: ['Siêu văn bản (Hypertext)', 'Văn bản thuần túy (Plain text)', 'Hình ảnh vector', 'Tệp nén dữ liệu'],
        answerIndex: 0,
        hint: 'Nhấp chuột vào từ ngữ có gạch chân màu xanh sẽ mở ra trang mới.',
        explanation: 'Siêu văn bản chứa các liên kết cho phép người dùng điều hướng nhanh chóng sang tài nguyên khác.'
      }
    ]
  },

  // 10. TIN HỌC 6 - HK1 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s1-reg4-info',
    title: 'Tin học 6 - Kiểm tra Thường xuyên 4: Đạo đức, Pháp luật & Văn hóa Số',
    titleEn: 'Informatics 6 - Regular Assessment 4: Digital Ethics, Cyber Safety & Law',
    grade: 6,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'technology',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Bản quyền phần mềm, thông tin độc hại, ứng xử nhân văn trên mạng xã hội và dấu chân kỹ thuật số.',
    descriptionEn: 'Cyber etiquette, copyright compliance, and personal digital footprint management.',
    questions: [
      {
        question: 'Hành vi nào sau đây là vi phạm bản quyền tác giả trong công nghệ thông tin?',
        options: [
          'Tự ý sao chép, bẻ khóa và chia sẻ phần mềm có bản quyền khi chưa được tác giả cho phép',
          'Mua phần mềm có giấy phép sử dụng hợp pháp',
          'Sử dụng các phần mềm mã nguồn mở miễn phí',
          'Ghi rõ tên tác giả và nguồn trích dẫn khi dùng tài liệu'
        ],
        answerIndex: 0,
        hint: 'Sử dụng phần mềm lậu (crack/piracy).',
        explanation: 'Bẻ khóa và phân phối phần mềm không phép vi phạm nghiêm trọng Luật Sở hữu Trí tuệ.'
      },
      {
        question: 'Dấu chân kỹ thuật số (Digital Footprint) của một người trên Internet là gì?',
        options: [
          'Toàn bộ dấu vết dữ liệu, bài đăng, bình luận và lịch sử truy cập mà người đó để lại trên mạng',
          'Kích thước thực tế bàn chân của người dùng máy tính',
          'Dấu vân tay để mở khóa màn hình điện thoại',
          'Một phần mềm đo bước chân đi bộ hàng ngày'
        ],
        answerIndex: 0,
        hint: 'Mọi hoạt động trên mạng đều được ghi lại dấu vết.',
        explanation: 'Dấu chân số là lịch sử hành vi trực tuyến của cá nhân, ảnh hưởng lâu dài đến uy tín và quyền riêng tư.'
      },
      {
        question: 'Khi nhận được một email từ người lạ thông báo "Bạn đã trúng thưởng 500 triệu đồng, hãy nhấp vào link và nhập mật khẩu tài khoản ngân hàng", em nên:',
        options: [
          'Xóa ngay email và báo cáo thư rác lừa đảo (Phishing), tuyệt đối không bấm vào link',
          'Lập tức bấm vào đường link để nhận thưởng',
          'Cung cấp mật khẩu và số điện thoại của bố mẹ',
          'Chuyển tiếp cho tất cả bạn bè cùng nhận thưởng'
        ],
        answerIndex: 0,
        hint: 'Chiêu trò lừa đảo qua mạng (Phishing).',
        explanation: 'Đây là hình thức lừa đảo đánh cắp tài khoản ngân hàng, cần xóa ngay và tuyệt đối không chia sẻ thông tin mật.'
      },
      {
        question: 'Quy tắc ứng xử văn hóa nào cần thực hiện khi bình luận trên các diễn đàn trực tuyến?',
        options: [
          'Dùng từ ngữ lịch sự, tôn trọng quan điểm của người khác và không công kích cá nhân',
          'Dùng lời lẽ thô tục để chứng tỏ sự mạnh mẽ',
          'Lan truyền tin đồn thất thiệt chưa kiểm chứng',
          'Tự ý công khai số điện thoại và địa chỉ nhà của bạn bè'
        ],
        answerIndex: 0,
        hint: 'Văn hóa ứng xử văn minh trong không gian mạng.',
        explanation: 'Tôn trọng, lịch sự và tử tế là chuẩn mực đạo đức số mà mọi công dân mạng cần tuân thủ.'
      }
    ]
  },

  // 11. GIÁO DỤC CÔNG DÂN 6 - HK1 THƯỜNG XUYÊN 2
  {
    id: 'quiz-g6-s1-reg2-civ',
    title: 'GDCD 6 - Kiểm tra Thường xuyên 2: Tự lập & Tự chăm sóc Bản thân',
    titleEn: 'Civic Education 6 - Regular Assessment 2: Self-Reliance & Personal Care',
    grade: 6,
    semester: 1,
    subject: 'Giáo dục công dân',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'civics',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Thói quen sống tự lập, tự giác học tập, giữ gìn vệ sinh thân thể và bảo vệ sức khỏe tuổi dậy thì.',
    descriptionEn: 'Fostering self-reliance and healthy lifestyle routines for middle school students.',
    questions: [
      {
        question: 'Biểu hiện nào sau đây thể hiện tính "Tự lập" của học sinh lớp 6?',
        options: [
          'Tự giác đặt đồng hồ báo thức, tự gấp chăn màn và chuẩn bị sách vở đi học mà không cần cha mẹ nhắc nhở',
          'Đợi cha mẹ giục nhiều lần mới chịu ngồi vào bàn học',
          'Nhờ anh chị làm hộ toàn bộ bài tập về nhà',
          'Để mẹ đút cơm và soạn cặp sách mỗi ngày'
        ],
        answerIndex: 0,
        hint: 'Tự mình làm những công việc vừa sức của bản thân.',
        explanation: 'Chủ động chăm lo sinh hoạt cá nhân và học tập thể hiện đức tính tự lập quý báu.'
      },
      {
        question: 'Người có tính tự lập sẽ nhận được lợi ích gì trong cuộc sống?',
        options: [
          'Tự tin, làm chủ bản thân, dễ thích nghi với hoàn cảnh và được mọi người tôn trọng',
          'Không bao giờ cần đến sự giúp đỡ của bất kỳ ai',
          'Trở nên cô lập và không có bạn bè',
          'Được miễn thi tốt nghiệp'
        ],
        answerIndex: 0,
        hint: 'Tự lập rèn luyện bản lĩnh kiên cường.',
        explanation: 'Tự lập giúp con người chủ động, trưởng thành vững vàng và làm chủ tương lai của chính mình.'
      },
      {
        question: 'Để tự chăm sóc và rèn luyện thể chất khỏe mạnh, học sinh lớp 6 nên làm gì?',
        options: [
          'Ăn uống đủ chất, ngủ đủ giấc, tập thể dục thể thao đều đặn và giữ vệ sinh cá nhân sạch sẽ',
          'Thức khuya chơi game đến 2 giờ sáng rồi hôm sau nhịn ăn sáng',
          'Chỉ uống nước ngọt có ga và ăn đồ ăn vặt đóng gói',
          'Ngồi lì trong phòng không bao giờ vận động ngoài trời'
        ],
        answerIndex: 0,
        hint: 'Chế độ sinh hoạt lành mạnh khoa học.',
        explanation: 'Dinh dưỡng đủ chất, ngủ đủ giấc và thể thao giúp cơ thể tuổi dậy thì phát triển chiều cao và thể lực tối ưu.'
      },
      {
        question: 'Câu tục ngữ nào sau đây khuyên con người nên biết tự lực cánh sinh?',
        options: [
          'Muốn ăn thì lăn vào bếp',
          'Há miệng chờ sung',
          'Nước đến chân mới nhảy',
          'Ăn cỗ đi trước, lội nước đi sau'
        ],
        answerIndex: 0,
        hint: 'Muốn có thành quả thì phải tự mình bắt tay vào hành động.',
        explanation: '"Muốn ăn thì lăn vào bếp" khẳng định chân lý phải tự mình lao động thì mới có được thành quả xứng đáng.'
      }
    ]
  },

  // 12. GIÁO DỤC CÔNG DÂN 6 - HK1 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s1-reg3-civ',
    title: 'GDCD 6 - Kiểm tra Thường xuyên 3: Tiết kiệm Thời gian & Tiền bạc',
    titleEn: 'Civic Education 6 - Regular Assessment 3: Thriftiness & Time Management',
    grade: 6,
    semester: 1,
    subject: 'Giáo dục công dân',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'civics',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Thế nào là sống tiết kiệm, phân biệt tiết kiệm với keo kiệt bủn xỉn, kỹ năng quản lý thời gian hiệu quả.',
    descriptionEn: 'Understanding thriftiness, distinguishing it from stinginess, and time management.',
    questions: [
      {
        question: 'Thế nào là "Tiết kiệm"?',
        options: [
          'Sử dụng hợp lý, đúng mức tiền bạc, của cải, thời gian và sức lực của mình và người khác',
          'Chắt bóp tằn tiện đến mức nhịn ăn nhịn mặc để tích trữ tiền',
          'Chi tiêu hoang phí mua sắm những thứ không thực sự cần thiết',
          'Chỉ tiêu tiền của người khác mà không dùng tiền của mình'
        ],
        answerIndex: 0,
        hint: 'Sử dụng đúng mục đích, không lãng phí nhưng không keo kiệt.',
        explanation: 'Tiết kiệm là biết chi tiêu đúng lúc, đúng chỗ, tránh lãng phí thời gian và của cải.'
      },
      {
        question: 'Hành vi nào sau đây thể hiện việc tiết kiệm thời gian?',
        options: [
          'Lập thời gian biểu khoa học và thực hiện nghiêm túc: giờ nào việc nấy',
          'Vừa học bài vừa xem điện thoại và nói chuyện phiếm',
          'Để việc hôm nay dồn lại cho ngày mai làm',
          'Chơi game cả ngày rồi thức trắng đêm làm bài tập'
        ],
        answerIndex: 0,
        hint: 'Sắp xếp công việc theo thời gian biểu hợp lý.',
        explanation: 'Lập kế hoạch làm việc tập trung giờ nào việc nấy giúp tăng năng suất và tiết kiệm quỹ thời gian quý giá.'
      },
      {
        question: 'Sự khác biệt căn bản giữa "Tiết kiệm" và "Keo kiệt, bủn xỉn" là gì?',
        options: [
          'Tiết kiệm là chi tiêu đúng lúc đúng chỗ khi cần thiết; keo kiệt là việc đáng chi tiêu vì sức khỏe, học tập cũng không chịu chi',
          'Tiết kiệm là dành cho người giàu; keo kiệt là của người nghèo',
          'Hai khái niệm này hoàn toàn giống hệt nhau không có gì khác',
          'Tiết kiệm là không bao giờ mua sắm gì cả'
        ],
        answerIndex: 0,
        hint: 'Đầu tư cho tri thức và sức khỏe là chi tiêu chính đáng, không phải hoang phí.',
        explanation: 'Keo kiệt là tằn tiện mù quáng làm tổn hại sức khỏe và các mối quan hệ; tiết kiệm là chi tiêu thông minh, hợp lý.'
      },
      {
        question: 'Câu tục ngữ nào sau đây ca ngợi đức tính tiết kiệm của cha ông ta?',
        options: [
          'Tích tiểu thành đại',
          'Vung tay quá trán',
          'Ném tiền qua cửa sổ',
          'Được đằng chân lân đằng đầu'
        ],
        answerIndex: 0,
        hint: 'Góp từng hạt cát nhỏ sẽ xây thành ngọn đồi lớn.',
        explanation: '"Tích tiểu thành đại" khuyên ta biết chắt chiu từ việc nhỏ để tạo nên thành công và tích lũy to lớn.'
      }
    ]
  },

  // 13. GIÁO DỤC CÔNG DÂN 6 - HK1 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s1-reg4-civ',
    title: 'GDCD 6 - Kiểm tra Thường xuyên 4: Tôn trọng Kỷ luật & Nội quy Trường lớp',
    titleEn: 'Civic Education 6 - Regular Assessment 4: School Discipline & Community Rules',
    grade: 6,
    semester: 1,
    subject: 'Giáo dục công dân',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'civics',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Nội quy trường học, ý thức chấp hành luật an toàn giao thông, và tinh thần thượng tôn pháp luật.',
    descriptionEn: 'Adherence to classroom regulations, traffic safety laws, and civic duty.',
    questions: [
      {
        question: 'Hành vi nào sau đây chấp hành đúng Luật Giao thông đường bộ khi đi xe đạp điện?',
        options: [
          'Đội mũ bảo hiểm đạt chuẩn, cài quai đúng quy cách và đi đúng làn đường bên phải',
          'Đi dàn hàng ba hàng bốn vừa đi vừa đùa giỡn',
          'Lạng lách đánh võng trước đầu xe ô tô',
          'Vừa lái xe vừa nghe tai nghe nhạc âm lượng lớn'
        ],
        answerIndex: 0,
        hint: 'Đội mũ bảo hiểm bảo vệ đầu khi tham gia giao thông.',
        explanation: 'Đội mũ bảo hiểm và đi đúng phần đường quy định bảo đảm an toàn tính mạng cho mình và cộng đồng.'
      },
      {
        question: 'Kỷ luật trong trường học mang lại lợi ích gì cho tập thể học sinh?',
        options: [
          'Tạo môi trường học tập trật tự, an toàn, công bằng và rèn luyện nhân cách tốt đẹp',
          'Gò bó làm học sinh không thể phát triển năng khiếu',
          'Chỉ phục vụ cho việc quản lý của ban giám hiệu',
          'Làm cho các tiết học trở nên căng thẳng'
        ],
        answerIndex: 0,
        hint: 'Kỷ luật là sức mạnh tạo nên tập thể đoàn kết, văn minh.',
        explanation: 'Kỷ luật trường lớp bảo đảm quyền lợi học tập của mọi người và rèn luyện tính kỷ luật cho tương lai.'
      },
      {
        question: 'Trong giờ kiểm tra trên lớp, hành động nào thể hiện tinh thần tôn trọng kỷ luật và trung thực?',
        options: [
          'Tự mình làm bài bằng thực lực của bản thân, không quay cóp hay mở tài liệu xem trộm',
          'Dùng điện thoại thông minh tra cứu đáp án trên mạng',
          'Nhìn bài bạn ngồi bên cạnh để đạt điểm cao',
          'Lén lút truyền giấy nháp chứa lời giải cho bạn khác'
        ],
        answerIndex: 0,
        hint: 'Trung thực trong thi cử là thước đo nhân cách học sinh.',
        explanation: 'Làm bài bằng chính năng lực của mình thể hiện lòng tự trọng, sự trung thực và tôn trọng nội quy thi cử.'
      },
      {
        question: 'Khi thấy bạn cùng lớp có biểu hiện vi phạm nội quy như trốn học, hút thuốc lá điện tử, em nên:',
        options: [
          'Khuyên ngăn bạn và báo cáo kịp thời với thầy cô giáo chủ nhiệm để can thiệp giúp đỡ bạn',
          'Cổ vũ bạn và cùng tham gia vi phạm',
          'Quay video đăng lên mạng xã hội để chế giễu bạn',
          'Đe dọa tống tiền bạn để giữ im lặng'
        ],
        answerIndex: 0,
        hint: 'Kịp thời ngăn chặn bạn trước khi sa đọa.',
        explanation: 'Báo thầy cô giúp bạn nhận ra sai lầm sớm và sửa đổi, bảo vệ môi trường học đường lành mạnh.'
      }
    ]
  },

  // 14. CÔNG NGHỆ 6 - HK1 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s1-reg3-tech',
    title: 'Công nghệ 6 - Kiểm tra Thường xuyên 3: Kiến trúc Nhà ở Việt Nam',
    titleEn: 'Technology 6 - Regular Assessment 3: Vietnamese Architectural Housing Styles',
    grade: 6,
    semester: 1,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'technology',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Các kiểu nhà ở nông thôn, đô thị, nhà sàn miền núi, nhà bè trên sông và đặc điểm khí hậu vùng miền.',
    descriptionEn: 'Rural, urban, stilt, and floating house designs suited to diverse regional climates.',
    questions: [
      {
        question: 'Kiểu nhà sàn độc đáo ở vùng núi phía Bắc và Tây Nguyên được thiết kế với mục đích chính là gì?',
        options: [
          'Tránh thú dữ, chống ẩm thấp côn trùng và thích ứng với địa hình đồi dốc',
          'Tiết kiệm gạch ngói xây dựng',
          'Để đón gió bão biển nhiệt đới',
          'Chỉ để nuôi nhốt gia súc dưới gầm'
        ],
        answerIndex: 0,
        hint: 'Sàn nhà được nâng cao trên các cột gỗ vững chãi.',
        explanation: 'Nhà sàn cao ráo giúp đồng bào tránh ẩm mốc, thú dữ săn mồi và phù hợp sườn đồi dốc.'
      },
      {
        question: 'Đặc điểm kiến trúc tiêu biểu của nhà ống (nhà phố) tại các khu đô thị lớn là:',
        options: [
          'Mặt tiền hẹp, chiều sâu dài, nhiều tầng và các nhà thường xây sát vách nhau',
          'Khuôn viên vườn cây rộng hàng nghìn mét vuông',
          'Chỉ xây duy nhất một tầng trệt lợp mái lá',
          'Được xây dựng nổi hoàn toàn trên mặt nước sông hồ'
        ],
        answerIndex: 0,
        hint: 'Do diện tích đất đô thị đắt đỏ nên phát triển theo chiều cao.',
        explanation: 'Nhà ống phát triển mạnh ở phố thị do quỹ đất hạn hẹp: mặt tiền hẹp, nhiều tầng liên kế san sát.'
      },
      {
        question: 'Tại vùng đồng bằng sông Cửu Long thường xuyên có mùa nước nổi, người dân sáng tạo kiểu nhà ở nào?',
        options: ['Nhà nổi (nhà bè) trên sông và nhà cọc ven kênh rạch', 'Nhà ngầm dưới lòng đất', 'Nhà bê tông cốt thép kiên cố không có cửa', 'Lâu đài bằng đá tuyết'],
        answerIndex: 0,
        hint: 'Nổi bồng bềnh thích ứng với mực nước dâng cao hàng năm.',
        explanation: 'Nhà bè và nhà cọc là nét văn hóa thích ứng tài tình với mùa nước lũ miền Tây sông nước.'
      },
      {
        question: 'Quy trình chung xây dựng một ngôi nhà ở kiên cố gồm 3 bước cơ bản theo thứ tự:',
        options: [
          'Chuẩn bị (thiết kế, mặt bằng) → Thi công xây dựng (móng, khung, tường, mái) → Hoàn thiện (trát, sơn, lắp điện nước)',
          'Hoàn thiện → Thi công xây dựng → Chuẩn bị',
          'Sơn tường → Đào móng → Vẽ bản vẽ thiết kế',
          'Lắp bóng đèn → Lợp mái → Đào đất'
        ],
        answerIndex: 0,
        hint: 'Chuẩn bị kĩ lưỡng rồi mới xây thô, sau cùng là hoàn thiện nội ngoại thất.',
        explanation: 'Quy trình chuẩn kỹ thuật xây dựng: Chuẩn bị mặt bằng → Thi công phần thô kết cấu → Hoàn thiện thẩm mỹ.'
      }
    ]
  },

  // 15. CÔNG NGHỆ 6 - HK1 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s1-reg4-tech',
    title: 'Công nghệ 6 - Kiểm tra Thường xuyên 4: Bảo quản Thực phẩm Khô & Đóng gói',
    titleEn: 'Technology 6 - Regular Assessment 4: Food Drying & Packaging Preservation',
    grade: 6,
    semester: 1,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'technology',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Phương pháp sấy khô, ướp muối, ướp đường, đóng hộp chân không và an toàn vệ sinh thực phẩm.',
    descriptionEn: 'Drying, salting, sugaring, vacuum sealing, and food safety standards.',
    questions: [
      {
        question: 'Phương pháp sấy khô (phơi khô) nông sản (ngô, thóc, mộc nhĩ) dựa trên nguyên lý khoa học nào?',
        options: [
          'Làm giảm lượng nước (độ ẩm) trong thực phẩm xuống mức vi sinh vật không thể sinh sống được',
          'Làm thực phẩm chín nhừ',
          'Bổ sung thêm hóa chất diệt khuẩn',
          'Làm đông đá thực phẩm'
        ],
        answerIndex: 0,
        hint: 'Vi khuẩn và nấm mốc cần nước để phát triển.',
        explanation: 'Làm bay hơi nước khiến vi sinh vật không có môi trường ẩm để sinh sôi, giúp lưu trữ hạt giống nhiều tháng.'
      },
      {
        question: 'Làm mứt quả (mứt dừa, mứt gừng) bảo quản được lâu nhờ phương pháp nào?',
        options: [
          'Ướp đường nồng độ cao tạo áp suất thẩm thấu kìm hãm vi khuẩn',
          'Ướp đá lạnh dưới 0 độ',
          'Ngâm trong giấm chua',
          'Chiên ngập dầu sôi'
        ],
        answerIndex: 0,
        hint: 'Nồng độ đường cao hút nước ra khỏi tế bào vi sinh vật.',
        explanation: 'Đường nồng độ cao (trên 60%) tạo áp suất thẩm thấu mạnh làm vi khuẩn mất nước và bị ức chế phát triển.'
      },
      {
        question: 'Dấu hiệu nhận biết thực phẩm đóng hộp đã bị hỏng, nhiễm độc tố và KHÔNG được sử dụng là:',
        options: [
          'Hộp bị phồng căng, móp méo rỉ sét hoặc có mùi ôi chua bất thường khi mở',
          'Hộp còn nguyên niêm phong và vỏ sáng bóng',
          'Còn trong hạn sử dụng ghi trên bao bì',
          'Nhãn mác in chữ rõ ràng'
        ],
        answerIndex: 0,
        hint: 'Hộp phồng chứng tỏ vi khuẩn kị khí sinh khí độc bên trong.',
        explanation: 'Đồ hộp phồng nắp có nguy cơ nhiễm độc tố Botulinum cực độc chết người, tuyệt đối phải tiêu hủy.'
      },
      {
        question: 'Để đảm bảo an toàn vệ sinh thực phẩm trong gia đình, nguyên tắc "Ăn chín, uống sôi" giúp phòng ngừa:',
        options: [
          'Bệnh giun sán, ngộ độc thực phẩm và các bệnh truyền nhiễm đường tiêu hóa',
          'Bệnh cận thị học đường',
          'Bệnh cong vẹo cột sống',
          'Bệnh viêm khớp tuổi già'
        ],
        answerIndex: 0,
        hint: 'Nhiệt độ sôi tiêu diệt vi khuẩn tả, lỵ, thương hàn và trứng giun sán.',
        explanation: 'Nhiệt độ cao khi nấu chín tiêu diệt mầm bệnh và ký sinh trùng gây hại cho đường ruột.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2 - HỌC KỲ 2 REGULAR QUIZZES
  // =========================================================================

  // 16. NGỮ VĂN 6 - HK2 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s2-reg3-lit',
    title: 'Ngữ văn 6 - Kiểm tra Thường xuyên 3: Văn Bản Nghị Luận & Thuyết Phục',
    titleEn: 'Literature 6 - Regular Assessment 3: Argumentative & Persuasive Essays',
    grade: 6,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Ý kiến, lý lẽ, bằng chứng trong văn bản nghị luận xã hội và nghị luận văn học.',
    descriptionEn: 'Claims, reasoning, and evidence in argumentative texts.',
    questions: [
      {
        question: 'Một văn bản nghị luận chặt chẽ bắt buộc phải có sự kết hợp của 3 yếu tố cơ bản nào?',
        options: [
          'Ý kiến (Luận điểm) - Lí lẽ (Luận cứ) - Bằng chứng (Dẫn chứng)',
          'Mở bài - Thân bài - Kết luận hư cấu',
          'Nhân vật - Cốt truyện - Lời thoại',
          'Vần chân - Vần lưng - Nhịp điệu'
        ],
        answerIndex: 0,
        hint: 'Nêu quan điểm, đưa ra lý giải hợp lý và chứng minh bằng sự thật.',
        explanation: 'Nghị luận cần luận điểm rõ ràng, lí lẽ logic sắc bén và dẫn chứng thực tế xác thực thuyết phục người đọc.'
      },
      {
        question: 'Bằng chứng trong văn nghị luận phải đảm bảo tính chất nào sau đây?',
        options: [
          'Chân thực, tiêu biểu, xác thực và được kiểm chứng trong đời sống thực tế',
          'Do người viết tự nghĩ ra không cần đúng sự thật',
          'Càng kỳ ảo hoang đường càng tốt',
          'Chỉ lấy từ các câu chuyện cổ tích dân gian'
        ],
        answerIndex: 0,
        hint: 'Dẫn chứng phải có thật và được xã hội công nhận.',
        explanation: 'Dẫn chứng tiêu biểu, chính xác làm tăng độ tin cậy và sức thuyết phục cho lập luận.'
      },
      {
        question: 'Câu văn nào sau đây thể hiện trực tiếp Ý kiến (Luận điểm) của người viết?',
        options: [
          'Đọc sách là một thói quen tốt mang lại nhiều lợi ích to lớn cho trí tuệ con người',
          'Hôm qua em đi đến thư viện lúc 3 giờ chiều',
          'Trời hôm nay nhiều mây xám xịt',
          'Bác nông dân đang cày ruộng bên bờ sông'
        ],
        answerIndex: 0,
        hint: 'Khẳng định quan điểm, nhận định đánh giá.',
        explanation: 'Câu này nêu rõ quan điểm, nhận xét đánh giá về giá trị của việc đọc sách.'
      },
      {
        question: 'Trong văn bản "Vì sao chúng ta phải đối xử thân thiện với động vật?", tác giả đưa ra lí lẽ nào?',
        options: [
          'Động vật có vai trò quan trọng trong cân bằng sinh thái và gắn bó thân thiết với đời sống con người',
          'Động vật có thể làm thay toàn bộ công việc của con người',
          'Động vật có trí thông minh vượt trội hơn con người',
          'Động vật không bao giờ cần thức ăn hay nước uống'
        ],
        answerIndex: 0,
        hint: 'Mối quan hệ cộng sinh giữa con người và muôn loài trong tự nhiên.',
        explanation: 'Bảo vệ muôn loài giữ gìn đa dạng sinh học và duy trì môi trường sống bền vững cho chính con người.'
      }
    ]
  },

  // 17. NGỮ VĂN 6 - HK2 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s2-reg4-lit',
    title: 'Ngữ văn 6 - Kiểm tra Thường xuyên 4: Lựa chọn Từ ngữ & Cấu trúc Câu',
    titleEn: 'Literature 6 - Regular Assessment 4: Word Choice & Sentence Structure',
    grade: 6,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Từ nhiều nghĩa, từ đồng âm, nghệ thuật dùng từ gợi tả và cấu trúc câu đặc biệt.',
    descriptionEn: 'Polysemy, homophones, evocative vocabulary, and stylistic syntax.',
    questions: [
      {
        question: 'Từ "đường" trong hai câu: "Đường đi gập ghềnh" và "Bát chè ngọt lịm vì nhiều đường" là hiện tượng gì?',
        options: ['Từ đồng âm (phát âm giống nhau nhưng nghĩa hoàn toàn khác biệt)', 'Từ nhiều nghĩa chuyển nghĩa', 'Từ đồng nghĩa hoàn toàn', 'Từ trái nghĩa'],
        answerIndex: 0,
        hint: 'Một từ chỉ lối đi lại, một từ chỉ gia vị tạo vị ngọt, không có mối liên hệ nghĩa nào.',
        explanation: 'Hai từ "đường" này là từ đồng âm ngẫu nhiên về vỏ ngữ âm nhưng khác hẳn về nguồn gốc và bản chất nghĩa.'
      },
      {
        question: 'Từ láy nào sau đây là từ láy tượng thanh (mô phỏng âm thanh)?',
        options: ['Róc rách', 'Thoang thoảng', 'Lung linh', 'Mênh mông'],
        answerIndex: 0,
        hint: 'Âm thanh của dòng suối nhỏ chảy qua khe đá.',
        explanation: '"Róc rách" mô phỏng tiếng nước chảy; "lung linh", "mênh mông" là từ láy tượng hình.'
      },
      {
        question: 'Trong câu: "Dưới bóng tre xanh của ngàn xưa, người dân cày Việt Nam dựng nhà, dựng cửa, vỡ ruộng, khai hoang", từ "ngàn xưa" là thành phần gì?',
        options: ['Thành phần phụ trong trạng ngữ', 'Chủ ngữ chính', 'Vị ngữ chính', 'Khởi ngữ'],
        answerIndex: 0,
        hint: 'Nằm trong cụm trạng ngữ chỉ nơi chốn/thời gian.',
        explanation: '"ngàn xưa" là định ngữ bổ nghĩa cho "bóng tre xanh" trong cụm trạng ngữ đầu câu.'
      },
      {
        question: 'Khi viết biên bản cuộc họp lớp, phần nội dung cốt lõi bắt buộc phải có là:',
        options: [
          'Thời gian, địa điểm, thành phần tham dự, diễn biến các ý kiến thảo luận và kết luận biểu quyết',
          'Những câu chuyện tưởng tượng hấp dẫn',
          'Thơ ca tự sáng tác của học sinh',
          'Các công thức toán học'
        ],
        answerIndex: 0,
        hint: 'Biên bản là văn bản hành chính ghi nhận sự việc khách quan trung thực.',
        explanation: 'Biên bản ghi chép chính xác tiến trình cuộc họp, người phát biểu và kết quả biểu quyết để làm chứng cứ pháp lý.'
      }
    ]
  },

  // 18. KHOA HỌC TỰ NHIÊN 6 - HK2 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s2-reg3-sci',
    title: 'KHTN 6 - Kiểm tra Thường xuyên 3: Lực Hấp Dẫn & Trọng Lượng',
    titleEn: 'Natural Science 6 - Regular Assessment 3: Gravity and Weight',
    grade: 6,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Trọng lực, lực hút Trái Đất, mối liên hệ giữa khối lượng m (kg) và trọng lượng P (N): P = 10m.',
    descriptionEn: 'Gravitational forces, mass versus weight relationship P = 10m.',
    questions: [
      {
        question: 'Một vật có khối lượng 5 kg đặt trên mặt đất thì có trọng lượng xấp xỉ bằng bao nhiêu?',
        options: ['50 Newton (50 N)', '5 Newton', '0.5 Newton', '500 Newton'],
        answerIndex: 0,
        hint: 'Công thức liên hệ trên Trái Đất: Trọng lượng P = 10 × m.',
        explanation: 'P = 10 × m = 10 × 5 = 50 N.'
      },
      {
        question: 'Lực hút mà Trái Đất tác dụng lên mọi vật có phương và chiều như thế nào?',
        options: [
          'Phương thẳng đứng, chiều từ trên xuống dưới (hướng về tâm Trái Đất)',
          'Phương nằm ngang, chiều từ trái sang phải',
          'Phương xiên góc 45 độ',
          'Không có phương chiều cố định'
        ],
        answerIndex: 0,
        hint: 'Khi buông tay, quả táo luôn rơi thẳng đứng xuống đất.',
        explanation: 'Trọng lực có phương thẳng đứng và chiều hướng về tâm Trái Đất.'
      },
      {
        question: 'Dụng cụ nào dùng để đo độ lớn của lực trong phòng thực hành?',
        options: ['Lực kế lò xo', 'Cân đồng hồ', 'Nhiệt kế điện tử', 'Thước dây'],
        answerIndex: 0,
        hint: 'Đơn vị đo lực là Newton (N).',
        explanation: 'Lực kế (Dynamometer) dùng để đo trực tiếp độ lớn của các lực.'
      },
      {
        question: 'Khi nhà du hành vũ trụ lên Mặt Trăng, đại lượng nào của người đó KHÔNG thay đổi?',
        options: ['Khối lượng cơ thể (m)', 'Trọng lượng (P)', 'Lực nén lên mặt đất', 'Khả năng nhảy cao'],
        answerIndex: 0,
        hint: 'Khối lượng chỉ lượng chất chứa trong vật, không phụ thuộc vào vị trí không gian.',
        explanation: 'Khối lượng là đại lượng bất biến; còn trọng lượng giảm 6 lần vì lực hấp dẫn Mặt Trăng yếu hơn Trái Đất.'
      }
    ]
  },

  // 19. KHOA HỌC TỰ NHIÊN 6 - HK2 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s2-reg4-sci',
    title: 'KHTN 6 - Kiểm tra Thường xuyên 4: Năng lượng Hao phí & Bảo toàn Năng lượng',
    titleEn: 'Natural Science 6 - Regular Assessment 4: Energy Dissipation & Conservation Law',
    grade: 6,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Định luật bảo toàn năng lượng, năng lượng có ích và năng lượng hao phí (tỏa nhiệt, ma sát).',
    descriptionEn: 'Law of conservation of energy, useful vs dissipated thermal energy.',
    questions: [
      {
        question: 'Định luật bảo toàn năng lượng phát biểu rằng:',
        options: [
          'Năng lượng không tự nhiên sinh ra cũng không tự nhiên mất đi, nó chỉ chuyển hóa từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác',
          'Năng lượng luôn tự nhiên biến mất sau khi sử dụng',
          'Con người có thể tạo ra năng lượng từ hư vô',
          'Tổng năng lượng của vũ trụ liên tục giảm dần về số không'
        ],
        answerIndex: 0,
        hint: 'Định luật cơ bản bậc nhất của vũ trụ học và vật lý.',
        explanation: 'Định luật bảo toàn và chuyển hóa năng lượng là nguyên lý nền tảng của tự nhiên.'
      },
      {
        question: 'Khi bóng đèn điện dây tóc phát sáng, dạng năng lượng nào là năng lượng hao phí không mong muốn?',
        options: ['Nhiệt năng (làm nóng bóng đèn)', 'Quang năng (ánh sáng)', 'Hóa năng', 'Cơ năng'],
        answerIndex: 0,
        hint: 'Mục đích dùng đèn là lấy ánh sáng, sức nóng tỏa ra làm lãng phí điện năng.',
        explanation: 'Nhiệt năng tỏa ra ở bóng sợi đốt chiếm tới 90% điện năng tiêu thụ là phần hao phí vô ích.'
      },
      {
        question: 'Trong quạt điện gia đình, điện năng được chuyển hóa chủ yếu thành dạng năng lượng có ích nào?',
        options: ['Cơ năng (cánh quạt quay tạo gió mát)', 'Quang năng', 'Năng lượng hạt nhân', 'Hóa năng'],
        answerIndex: 0,
        hint: 'Động cơ điện làm quay trục cánh quạt.',
        explanation: 'Quạt điện biến đổi điện năng thành cơ năng làm quay cánh quạt tạo luồng gió mát.'
      },
      {
        question: 'Để giảm năng lượng hao phí do ma sát trong các trục quay máy móc, biện pháp kỹ thuật hiệu quả là:',
        options: ['Tra dầu mỡ bôi trơn định kỳ và sử dụng ổ bi', 'Rắc cát vào các khớp quay', 'Tăng tải trọng thật nặng', 'Đun nóng các ổ trục'],
        answerIndex: 0,
        hint: 'Dầu nhờn làm giảm ma sát trượt và ma sát lăn.',
        explanation: 'Dầu mỡ bôi trơn tạo lớp màng mỏng ngăn hai bề mặt kim loại cọ sát trực tiếp, giảm nhiệt hao phí.'
      }
    ]
  },

  // 20. TIẾNG ANH 6 - HK2 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s2-reg3-eng',
    title: 'Tiếng Anh 6 - Kiểm tra Thường xuyên 3: Unit 10 Our Houses in the Future',
    titleEn: 'English 6 - Regular Assessment 3: Unit 10 Our Houses in the Future',
    grade: 6,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Future simple with will/won\'t, types of houses (UFO, houseboat, solar house).',
    descriptionEn: 'Future simple tense and visionary housing architectures.',
    questions: [
      {
        question: 'In 2050, many eco-friendly houses _______ smart appliances powered by ocean wind.',
        options: ['will have', 'have', 'had', 'having'],
        answerIndex: 0,
        hint: 'Future prediction with "In 2050": will + V.',
        explanation: 'Thì tương lai đơn "will have" dùng để dự đoán sự việc trong tương lai.'
      },
      {
        question: 'A _______ house will float on the ocean and move with sea currents.',
        options: ['houseboat', 'skyscraper', 'palace', 'cottage'],
        answerIndex: 0,
        hint: 'A boat that people can live in on the water.',
        explanation: '"houseboat" là nhà nổi trên thuyền/bè di chuyển được trên mặt nước.'
      },
      {
        question: 'People _______ burn coal in the future because it causes harmful air pollution.',
        options: ['won\'t', 'will', 'must', 'should'],
        answerIndex: 0,
        hint: 'Negative future prediction: will not = won\'t.',
        explanation: '"won\'t burn" (sẽ không đốt) than đá để bảo vệ bầu khí quyển.'
      },
      {
        question: 'Our future smart fridge will automatically _______ food and drinks online when it is empty.',
        options: ['order', 'throw', 'cook', 'break'],
        answerIndex: 0,
        hint: 'Tủ lạnh thông minh tự động đặt mua thức ăn trên mạng.',
        explanation: '"order" nghĩa là đặt hàng thực phẩm trực tuyến khi tủ lạnh sắp hết đồ.'
      }
    ]
  },

  // 21. TIẾNG ANH 6 - HK2 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s2-reg4-eng',
    title: 'Tiếng Anh 6 - Kiểm tra Thường xuyên 4: Unit 12 Robots in Daily Life',
    titleEn: 'English 6 - Regular Assessment 4: Unit 12 Robots in Daily Life',
    grade: 6,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Modal verb can/could/be able to, types of service robots.',
    descriptionEn: 'Abilities with can/could/will be able to and robotics terminology.',
    questions: [
      {
        question: 'In the past, robots _______ perform complex brain surgeries, but now they can.',
        options: ['couldn\'t', 'can', 'will', 'must'],
        answerIndex: 0,
        hint: 'Past inability: couldn\'t.',
        explanation: '"couldn\'t" là quá khứ của can, diễn tả trong quá khứ robot chưa thể phẫu thuật não.'
      },
      {
        question: 'Worker robots will be able to build skyscrapers _______ and safely.',
        options: ['quickly', 'quick', 'slow', 'quiet'],
        answerIndex: 0,
        hint: 'Adverb of manner modifying the verb "build".',
        explanation: 'Trạng từ "quickly" bổ nghĩa cho động từ "build" (xây dựng một cách nhanh chóng).'
      },
      {
        question: 'A doctor robot can _______ sick people and give them the right medicine.',
        options: ['examine', 'repair', 'cut', 'drive'],
        answerIndex: 0,
        hint: 'Bác sĩ robot thăm khám bệnh nhân.',
        explanation: '"examine" nghĩa là khám bệnh cho bệnh nhân.'
      },
      {
        question: 'Home robots can wash dirty dishes, iron clothes, and _______ the carpets.',
        options: ['vacuum', 'fly', 'sail', 'paint'],
        answerIndex: 0,
        hint: 'Hút bụi thảm trải sàn nhà.',
        explanation: '"vacuum" là hút bụi làm sạch thảm và sàn nhà.'
      }
    ]
  },

  // 22. LỊCH SỬ VÀ ĐỊA LÝ 6 - HK2 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s2-reg3-hisgeo',
    title: 'Lịch sử và Địa lý 6 - Kiểm tra Thường xuyên 3: Nước Vạn Xuân & Khởi nghĩa Mai Thúc Loan',
    titleEn: 'History & Geography 6 - Regular Assessment 3: Van Xuan State & Early Insurrections',
    grade: 6,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Lý Bí dựng cờ khởi nghĩa, thành lập nhà nước Vạn Xuân năm 544; khởi nghĩa Mai Thúc Loan, Phùng Hưng.',
    descriptionEn: 'Ly Bi insurrection, founding of Van Xuan State in 544, and local uprisings.',
    questions: [
      {
        question: 'Mùa xuân năm 544, Lý Bí lên ngôi hoàng đế (Lý Nam Đế) và đặt tên nước ta là gì?',
        options: ['Vạn Xuân (mong đất nước thái bình vạn mùa xuân)', 'Đại Cồ Việt', 'Đại Việt', 'Âu Lạc'],
        answerIndex: 0,
        hint: 'Khát vọng đất nước trường tồn, bình yên mãi mãi như vạn mùa xuân.',
        explanation: 'Lý Bí xưng đế, đặt tên nước là Vạn Xuân, đóng đô ở vùng cửa sông Tô Lịch (Hà Nội).'
      },
      {
        question: 'Căn cứ đầm Dạ Trạch (Hưng Yên) gắn liền với vị tướng tài ba nào được nhân dân gọi là "Dạ Trạch Vương"?',
        options: ['Triệu Quang Phục', 'Lý Phật Tử', 'Mai Thúc Loan', 'Phùng Hưng'],
        answerIndex: 0,
        hint: 'Chiến thuật đánh du kích ban đêm bí mật xuất quỷ nhập thần.',
        explanation: 'Triệu Quang Phục kế tục Lý Nam Đế lập căn cứ đầm Dạ Trạch đánh tan quân Lương xâm lược.'
      },
      {
        question: 'Mai Thúc Loan lãnh đạo cuộc khởi nghĩa chống quân đô hộ nhà Đường, được nhân dân tôn xưng là gì?',
        options: ['Mai Hắc Đế (Vua Đen)', 'Bố Cái Đại Vương', 'Tiền Ngô Vương', 'Bình Định Vương'],
        answerIndex: 0,
        hint: 'Ông đóng đô ở thành Vạn An bên dòng sông Lam (Nghệ An).',
        explanation: 'Mai Thúc Loan da ngăm đen khỏe khoắn, được nghĩa quân tôn làm Mai Hắc Đế.'
      },
      {
        question: 'Nhân dân ta suy tôn người anh hùng Phùng Hưng là "Bố Cái Đại Vương" với ý nghĩa thiêng liêng là:',
        options: [
          'Tôn kính ông như bậc cha mẹ che chở cho muôn dân',
          'Vị vua có nhiều con cái nhất',
          'Vị tướng có sức mạnh phi thường đánh hổ',
          'Người giàu có nhất vùng Đường Lâm'
        ],
        answerIndex: 0,
        hint: '"Bố Cái" theo tiếng cổ nghĩa là cha và mẹ.',
        explanation: '"Bố Cái Đại Vương" là danh hiệu nhân dân biết ơn sâu sắc người anh hùng như cha mẹ của dân.'
      }
    ]
  },

  // 23. LỊCH SỬ VÀ ĐỊA LÝ 6 - HK2 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s2-reg4-hisgeo',
    title: 'Lịch sử và Địa lý 6 - Kiểm tra Thường xuyên 4: Nước trên Trái Đất, Sông & Hồ',
    titleEn: 'History & Geography 6 - Regular Assessment 4: Hydrosphere, Rivers & Lakes',
    grade: 6,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Thủy quyển, vòng tuần hoàn lớn của nước, lưu vực sông, nguồn cung cấp nước và các loại hồ.',
    descriptionEn: 'The water cycle, river basins, freshwater systems, and lake origins.',
    questions: [
      {
        question: 'Trong tổng lượng nước trên Trái Đất, nước ngọt chỉ chiếm tỉ lệ khoảng bao nhiêu?',
        options: ['Khoảng 2.5% đến 3% (phần lớn đóng băng ở hai cực)', 'Khoảng 50%', 'Khoảng 70%', 'Khoảng 97%'],
        answerIndex: 0,
        hint: 'Hơn 97% nước trên hành tinh là nước mặn trong các đại dương.',
        explanation: 'Nước ngọt cực kỳ quý hiếm, chỉ chiếm gần 2.8% toàn cầu và đa phần nằm trong băng tuyết và nước ngầm sâu.'
      },
      {
        question: 'Vùng đất cung cấp nước thường xuyên cho một dòng sông được gọi là:',
        options: ['Lưu vực sông', 'Cửa sông', 'Chi lưu', 'Phụ lưu'],
        answerIndex: 0,
        hint: 'Toàn bộ diện tích hứng nước mưa đổ vào dòng chính.',
        explanation: 'Lưu vực sông là diện tích đất tự nhiên mà nước mặt và nước ngầm chảy dồn vào dòng sông đó.'
      },
      {
        question: 'Hồ Tây ở thủ đô Hà Nội có nguồn gốc hình thành từ:',
        options: ['Hồ móng ngựa (dấu vết khúc sông Hồng bị đổi dòng xưa kia)', 'Miệng núi lửa đã tắt', 'Hồ kiến tạo do sụt lún địa chất', 'Hồ nhân tạo do con người đào'],
        answerIndex: 0,
        hint: 'Khúc sông uốn khúc bị chia cắt khi dòng chảy nắn thẳng.',
        explanation: 'Hồ Tây là một hồ móng ngựa điển hình hình thành từ vết tích lòng cũ của sông Hồng.'
      },
      {
        question: 'Hành động nào sau đây của con người góp phần bảo vệ nguồn nước ngọt quý giá?',
        options: [
          'Sử dụng nước tiết kiệm, không xả rác và nước thải chưa qua xử lý xuống sông hồ',
          'Vứt xác động vật chết và rác thải nhựa xuống kênh rạch',
          'Lãng phí xả vòi nước chảy tràn lan khi đánh răng',
          'Xả hóa chất trừ sâu trực tiếp ra nguồn nước ngầm'
        ],
        answerIndex: 0,
        hint: 'Bảo vệ nguồn nước là bảo vệ sự sống cho chính chúng ta.',
        explanation: 'Tiết kiệm nước sạch và bảo vệ lưu vực sông ngòi khỏi ô nhiễm là trách nhiệm của toàn xã hội.'
      }
    ]
  },

  // 24. TIN HỌC 6 - HK2 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s2-reg3-info',
    title: 'Tin học 6 - Kiểm tra Thường xuyên 3: Trình bày Bảng & Định dạng Bảng',
    titleEn: 'Informatics 6 - Regular Assessment 3: Tables and Document Formatting',
    grade: 6,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'technology',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Chèn bảng, thêm/xóa dòng cột, gộp ô (Merge Cells), căn lề dữ liệu trong ô bảng biểu.',
    descriptionEn: 'Creating and formatting tables in word processing applications.',
    questions: [
      {
        question: 'Bảng (Table) trong phần mềm soạn thảo văn bản được cấu tạo bởi:',
        options: ['Các hàng (Row), các cột (Column) và các ô (Cell)', 'Chỉ gồm các đường thẳng', 'Các siêu liên kết web', 'Các hình khối 3D'],
        answerIndex: 0,
        hint: 'Giao giữa một hàng và một cột là một ô.',
        explanation: 'Bảng gồm tập hợp các dòng và cột giao nhau tạo thành các ô để tổ chức dữ liệu khoa học.'
      },
      {
        question: 'Thao tác gộp nhiều ô liền kề trong bảng thành một ô duy nhất được gọi là:',
        options: ['Merge Cells (Gộp ô)', 'Split Cells (Tách ô)', 'Delete Cells (Xóa ô)', 'Insert Rows (Chèn dòng)'],
        answerIndex: 0,
        hint: 'Dùng khi muốn tạo tiêu đề chung cho nhiều cột.',
        explanation: 'Lệnh "Merge Cells" hợp nhất nhiều ô đã chọn thành một ô duy nhất.'
      },
      {
        question: 'Để thêm một cột mới vào bên phải của cột đang chọn trong bảng, ta dùng lệnh:',
        options: ['Insert Right', 'Insert Left', 'Insert Above', 'Insert Below'],
        answerIndex: 0,
        hint: '"Right" nghĩa là bên phải.',
        explanation: 'Lệnh Insert Right chèn thêm một cột trắng vào ngay phía bên phải vị trí con trỏ.'
      },
      {
        question: 'Khi trình bày thời khóa biểu tuần của lớp, sử dụng công cụ nào sau đây là trực quan và rõ ràng nhất?',
        options: ['Tạo bảng biểu nhiều hàng nhiều cột', 'Viết một đoạn văn xuôi dài liên tục', 'Vẽ sơ đồ khối thuật toán', 'Gửi thư điện tử'],
        answerIndex: 0,
        hint: 'Bảng hàng là các tiết học, cột là các thứ trong tuần.',
        explanation: 'Bảng biểu giúp so sánh, đối chiếu và tra cứu thông tin lịch trình nhanh chóng và chuẩn xác.'
      }
    ]
  },

  // 25. TIN HỌC 6 - HK2 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s2-reg4-info',
    title: 'Tin học 6 - Kiểm tra Thường xuyên 4: Thuật toán Tìm kiếm Tuần tự (Linear Search)',
    titleEn: 'Informatics 6 - Regular Assessment 4: Linear Sequential Search Algorithm',
    grade: 6,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'technology',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Nguyên lý tìm kiếm tuần tự từ đầu đến cuối danh sách, số bước kiểm tra và sơ đồ khối.',
    descriptionEn: 'Linear search mechanics, traversal steps, and worst-case comparison counts.',
    questions: [
      {
        question: 'Thuật toán tìm kiếm tuần tự thực hiện tìm một giá trị trong danh sách bằng cách nào?',
        options: [
          'Kiểm tra lần lượt từng phần tử từ đầu danh sách đến cuối danh sách cho đến khi tìm thấy hoặc hết danh sách',
          'Chia đôi danh sách ngay từ bước đầu tiên',
          'Chỉ kiểm tra phần tử ở giữa',
          'Chọn ngẫu nhiên một phần tử bất kỳ rồi dừng lại'
        ],
        answerIndex: 0,
        hint: '"Tuần tự" nghĩa là lần lượt từng bước một theo thứ tự.',
        explanation: 'Tìm kiếm tuần tự so sánh giá trị cần tìm lần lượt với từng phần tử từ vị trí đầu tiên đến cuối.'
      },
      {
        question: 'Thuật toán tìm kiếm tuần tự có ưu điểm nổi bật nào so với tìm kiếm nhị phân?',
        options: [
          'Áp dụng được trên mọi danh sách bất kỳ mà không cần danh sách phải sắp xếp thứ tự trước',
          'Luôn chạy nhanh hơn tìm kiếm nhị phân trên mọi kích thước dữ liệu',
          'Chỉ mất đúng 1 bước tìm kiếm duy nhất',
          'Tự động sửa lỗi chính tả'
        ],
        answerIndex: 0,
        hint: 'Không đòi hỏi danh sách phải sắp xếp trước.',
        explanation: 'Tìm kiếm tuần tự linh hoạt vì hoạt động tốt trên danh sách ngẫu nhiên, không cần điều kiện sắp xếp.'
      },
      {
        question: 'Cho danh sách: [15, 8, 24, 7, 36, 19]. Để tìm số 7 bằng tìm kiếm tuần tự, ta cần thực hiện bao nhiêu lần so sánh?',
        options: ['4 lần so sánh', '1 lần so sánh', '2 lần so sánh', '6 lần so sánh'],
        answerIndex: 0,
        hint: 'So sánh lần 1 với 15, lần 2 với 8, lần 3 với 24, lần 4 với 7 (tìm thấy!).',
        explanation: 'Số 7 ở vị trí thứ 4 trong danh sách nên thuật toán trải qua đúng 4 lần so sánh.'
      },
      {
        question: 'Trường hợp xấu nhất (Worst case) của thuật toán tìm kiếm tuần tự xảy ra khi:',
        options: [
          'Phần tử cần tìm nằm ở cuối cùng của danh sách hoặc hoàn toàn không có trong danh sách',
          'Phần tử cần tìm nằm ngay ở vị trí đầu tiên của danh sách',
          'Danh sách chỉ có 1 phần tử duy nhất',
          'Danh sách đã được sắp xếp tăng dần'
        ],
        answerIndex: 0,
        hint: 'Phải duyệt qua toàn bộ N phần tử của danh sách.',
        explanation: 'Khi phần tử ở cuối hoặc không tồn tại, thuật toán phải duyệt qua toàn bộ n phần tử mới kết luận được.'
      }
    ]
  },

  // 26. GIÁO DỤC CÔNG DÂN 6 - HK2 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s2-reg3-civ',
    title: 'GDCD 6 - Kiểm tra Thường xuyên 3: Phòng chống Tai nạn Thương tích & Đuối nước',
    titleEn: 'Civic Education 6 - Regular Assessment 3: Injury Prevention & Water Safety',
    grade: 6,
    semester: 2,
    subject: 'Giáo dục công dân',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'civics',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Quy tắc an toàn dưới nước, phòng chống đuối nước mùa hè và kỹ năng xử lý khi gặp người bị nạn.',
    descriptionEn: 'Water safety regulations, drowning prevention, and emergency rescue skills.',
    questions: [
      {
        question: 'Để phòng tránh tai nạn đuối nước mùa hè, học sinh tuyệt đối KHÔNG được:',
        options: [
          'Tự ý rủ nhau đi tắm, bơi lội ở ao hồ, sông suối sâu, thác nước khi không có người lớn giám sát',
          'Học bơi có huấn luyện viên hướng dẫn tại bể bơi an toàn',
          'Mặc áo phao khi tham gia giao thông đường thủy trên thuyền đò',
          'Khởi động kỹ các khớp trước khi xuống nước'
        ],
        answerIndex: 0,
        hint: 'Sông suối có dòng nước xiết và hố sâu nguy hiểm.',
        explanation: 'Tự ý bơi lội ở sông hồ nguy hiểm là nguyên nhân hàng đầu gây đuối nước ở trẻ em.'
      },
      {
        question: 'Khi phát hiện một bạn đang bị chới với đuối nước dưới ao sâu, hành động cấp cứu an toàn và đúng đắn nhất là:',
        options: [
          'Hô to kêu cứu người lớn xung quanh, đồng thời tìm sào dài, dây thừng hoặc ném phao nổi xuống cho bạn bám',
          'Lập tức nhảy ngay xuống nước dù bản thân không biết bơi',
          'Bỏ chạy về nhà đóng cửa im lặng vì sợ hãi',
          'Đứng quay video điện thoại đăng lên mạng'
        ],
        answerIndex: 0,
        hint: 'Nguyên tắc gián tiếp cứu hộ: Kêu cứu, quăng phao, đưa sào dài, không nhảy xuống khi chưa có kỹ năng cứu hộ.',
        explanation: 'Hô hoán người lớn và ném vật nổi/sào dài giúp nạn nhân bám vào, tránh bị nạn nhân kéo chìm theo.'
      },
      {
        question: 'Tại các bãi biển du lịch, biển báo có cờ đỏ mang ý nghĩa cảnh báo gì?',
        options: [
          'Vùng nước xoáy sâu nguy hiểm, cấm tuyệt đối không được xuống tắm',
          'Vùng nước an toàn cho phép trẻ em tự do bơi lội',
          'Nơi cho thuê thuyền buồm miễn phí',
          'Nơi có thể nhặt được nhiều vỏ ốc đẹp'
        ],
        answerIndex: 0,
        hint: 'Cờ đỏ biểu thị nguy hiểm cấm bơi lội.',
        explanation: 'Cờ đỏ là hiệu lệnh cảnh báo dòng chảy xa bờ hoặc sóng to nguy hiểm đến tính mạng.'
      },
      {
        question: 'Trước khi xuống hồ bơi tập luyện, học sinh bắt buộc phải làm gì để tránh bị chuột rút (vọp bẻ)?',
        options: [
          'Khởi động kỹ toàn thân ít nhất 5-10 phút để làm ấm các nhóm cơ và khớp',
          'Ăn thật no nê ngay trước khi nhảy xuống nước',
          'Uống nhiều nước đá lạnh có ga',
          'Mặc quần áo ấm dày cộp nhảy xuống nước'
        ],
        answerIndex: 0,
        hint: 'Làm nóng cơ bắp thích ứng nhiệt độ nước.',
        explanation: 'Khởi động kỹ giúp giãn cơ, lưu thông máu và phòng tránh chuột rút co cơ nguy hiểm dưới nước.'
      }
    ]
  },

  // 27. GIÁO DỤC CÔNG DÂN 6 - HK2 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s2-reg4-civ',
    title: 'GDCD 6 - Kiểm tra Thường xuyên 4: Bảo vệ Môi trường & Tài nguyên Thiên nhiên',
    titleEn: 'Civic Education 6 - Regular Assessment 4: Environmental & Resource Protection',
    grade: 6,
    semester: 2,
    subject: 'Giáo dục công dân',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'civics',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Trách nhiệm công dân bảo vệ môi trường, phân loại rác tại nguồn và lối sống xanh.',
    descriptionEn: 'Civic duties in environmental conservation and waste sorting at source.',
    questions: [
      {
        question: 'Hành động nhỏ nào hàng ngày của học sinh thể hiện lối sống xanh và bảo vệ môi trường?',
        options: [
          'Tự mang bình nước cá nhân, dùng túi vải đi chợ và phân loại rác tái chế',
          'Mỗi ngày dùng hàng chục cốc nhựa và ống hút nhựa dùng một lần rồi vứt bừa bãi',
          'Xả pin cũ đã qua sử dụng chung với rác hữu cơ sinh hoạt',
          'Bẻ cành hái hoa cây xanh trong công viên trường học'
        ],
        answerIndex: 0,
        hint: 'Hạn chế rác thải nhựa dùng một lần.',
        explanation: 'Dùng đồ tái sử dụng và phân loại rác giúp giảm thiểu ô nhiễm rác thải nhựa đe dọa sinh quyển.'
      },
      {
        question: 'Rác hữu cơ dễ phân hủy (như cuống rau củ, vỏ chuối, cơm thừa) nên được xử lý bằng cách nào tốt nhất?',
        options: [
          'Ủ làm phân bón hữu cơ (compost) cho cây trồng',
          'Đốt cháy thành khói đen ngột ngạt',
          'Ném xuống cống rãnh thoát nước',
          'Chôn chung với pin chì độc hại'
        ],
        answerIndex: 0,
        hint: 'Tái sinh thành nguồn dinh dưỡng màu mỡ cho đất trồng.',
        explanation: 'Ủ phân hữu cơ vi sinh biến thức ăn thừa thành phân bón tự nhiên giàu dinh dưỡng cho cây cối.'
      },
      {
        question: 'Tại sao pin điện tử cũ hỏng (chứa chì, thủy ngân, cadimi) KHÔNG được vứt bừa bãi vào thùng rác thông thường?',
        options: [
          'Vì kim loại nặng độc hại sẽ ngấm vào đất và nguồn nước ngầm gây ung thư cho con người',
          'Vì pin cũ sẽ tự biến mất trong 2 ngày',
          'Vì pin cũ rất thơm làm thu hút chuột bọ',
          'Vì pin cũ sẽ phát sáng vào ban đêm'
        ],
        answerIndex: 0,
        hint: 'Kim loại nặng cực độc tồn lưu vĩnh viễn trong chuỗi thức ăn.',
        explanation: 'Một viên pin nhỏ có thể làm ô nhiễm 500 lít nước; cần thu gom pin cũ riêng để xử lý nguy hại theo quy trình.'
      },
      {
        question: 'Trồng và chăm sóc cây xanh quanh trường học mang lại lợi ích to lớn nào?',
        options: [
          'Cung cấp bóng mát, thanh lọc bụi bẩn khí độc và tạo cảnh quan sư phạm tươi đẹp',
          'Làm sân trường chật chội không có chỗ đi lại',
          'Thu hút côn trùng phá hoại bàn ghế',
          'Làm học sinh mất tập trung'
        ],
        answerIndex: 0,
        hint: 'Cây xanh là lá phổi xanh điều hòa không khí trường học.',
        explanation: 'Cây xanh quang hợp nhả O2, cản bụi tiếng ồn và tạo bóng mát xanh tươi cho tuổi học trò vui chơi.'
      }
    ]
  },

  // 28. CÔNG NGHỆ 6 - HK2 THƯỜNG XUYÊN 2
  {
    id: 'quiz-g6-s2-reg2-tech',
    title: 'Công nghệ 6 - Kiểm tra Thường xuyên 2: Bảo dưỡng & Phối hợp Trang phục',
    titleEn: 'Technology 6 - Regular Assessment 2: Garment Maintenance & Style Coordination',
    grade: 6,
    semester: 2,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'technology',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Phối màu trang phục tương phản, bổ sung; bảo quản giặt là và gấp xếp quần áo khoa học.',
    descriptionEn: 'Color matching principles and clothing care techniques.',
    questions: [
      {
        question: 'Cách phối màu trang phục nào sau đây tạo ấn tượng nổi bật, năng động và cá tính?',
        options: [
          'Phối màu tương phản (đối đỉnh trên vòng tuần hoàn màu sắc như trắng - đen, vàng - xanh thẫm)',
          'Mặc nguyên một cây quần áo cùng một tông màu xám từ đầu đến chân',
          'Mặc quần áo nhăn nhúm không là ủi',
          'Mặc lẫn lộn nhiều màu sắc lộn xộn không theo quy luật nào'
        ],
        answerIndex: 0,
        hint: 'Hai màu đối diện nhau trên vòng tròn bánh xe màu sắc.',
        explanation: 'Phối màu tương phản làm nổi bật từng phần của trang phục, tạo phong cách khỏe khoắn, hiện đại.'
      },
      {
        question: 'Khi là (ủi) áo đồng phục học sinh may bằng vải sợi tổng hợp pha cotton, ta nên điều chỉnh nhiệt độ bàn là ở mức nào?',
        options: [
          'Mức nhiệt độ trung bình (khoảng 130°C - 150°C)',
          'Mức nhiệt độ tối đa 250°C để ủi thật nhanh',
          'Mức nhiệt độ đóng băng',
          'Đặt bàn là đứng yên trên áo suốt 5 phút'
        ],
        answerIndex: 0,
        hint: 'Sợi nhân tạo chịu nhiệt kém hơn vải lanh thiên nhiên.',
        explanation: 'Nhiệt độ trung bình giúp áo phẳng phiu mà không làm cháy hay quéo sợi tổng hợp.'
      },
      {
        question: 'Để cất giữ áo len và áo dệt kim không bị dão và biến dạng phom dáng, ta nên:',
        options: [
          'Gấp gọn gàng và xếp phẳng trong ngăn tủ kéo',
          'Dùng móc kim loại mảnh treo lủng lẳng trên giá cao cả năm',
          'Vò tròn nhét vào góc tủ',
          'Kéo căng hết cỡ trước khi cất'
        ],
        answerIndex: 0,
        hint: 'Treo móc lâu ngày sức nặng của len làm áo chảy dài mất dáng.',
        explanation: 'Áo len dệt kim có độ co giãn cao, cần gấp phẳng để sợi len không bị dão rộng do trọng lực.'
      },
      {
        question: 'Trang phục đi học (đồng phục học sinh) cần đảm bảo tiêu chuẩn quan trọng nào?',
        options: [
          'Lịch sự, gọn gàng, kín đáo, thuận tiện vận động và phù hợp lứa tuổi học sinh',
          'Đắt tiền nhất và nhiều phụ kiện rườm rà lấp lánh',
          'Quần áo rách cách điệu theo mốt',
          'Quần áo quá chật bó sát gây khó thở'
        ],
        answerIndex: 0,
        hint: 'Trang nhã, nghiêm túc trong môi trường học đường.',
        explanation: 'Đồng phục học sinh tạo sự bình đẳng, trang nhã, lịch sự và tiện lợi cho việc học tập thể dục thể thao.'
      }
    ]
  },

  // 29. CÔNG NGHỆ 6 - HK2 THƯỜNG XUYÊN 3
  {
    id: 'quiz-g6-s2-reg3-tech',
    title: 'Công nghệ 6 - Kiểm tra Thường xuyên 3: Đồ dùng Điện Quang & Chiếu sáng Học tập',
    titleEn: 'Technology 6 - Regular Assessment 3: Lighting Appliances & Study Illumination',
    grade: 6,
    semester: 2,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'technology',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Cấu tạo đèn LED, đèn huỳnh quang, tiêu chuẩn ánh sáng học đường phòng chống cận thị.',
    descriptionEn: 'Lighting technologies and eye-protective desk illumination standards.',
    questions: [
      {
        question: 'Đèn bàn học chống cận thị cho học sinh nên đáp ứng tiêu chí nào sau đây?',
        options: [
          'Ánh sáng liên tục không nhấp nháy, có chụp đèn chống lóa mắt và chỉ số hoàn màu cao (CRI > 80)',
          'Ánh sáng chớp tắt liên tục như đèn vũ trường',
          'Độ sáng cực mạnh chói chang làm bỏng mắt',
          'Bóng đèn tỏa nhiệt nóng rực phả vào mặt'
        ],
        answerIndex: 0,
        hint: 'Không nhấp nháy và không gây lóa mắt.',
        explanation: 'Ánh sáng ổn định, màu sắc trung thực và có cần điều chỉnh góc chiếu bảo vệ thị lực khỏi mỏi mắt cận thị.'
      },
      {
        question: 'Khi ngồi học bài bằng đèn bàn, hướng chiếu của ánh sáng nên đặt như thế nào để tránh bị bóng tay sấp?',
        options: [
          'Người thuận tay phải nên đặt đèn ở phía trước bên trái chiếu sang',
          'Người thuận tay phải đặt đèn sát ngay tay phải',
          'Đặt đèn ngay sau gáy lưng',
          'Tắt hết đèn trong phòng và chỉ bật mỗi đèn pin nhỏ'
        ],
        answerIndex: 0,
        hint: 'Chiếu từ phía đối diện với tay cầm bút để bóng bàn tay không che khuất dòng chữ.',
        explanation: 'Đèn đặt phía trước bên trái của người thuận tay phải giúp bóng ngón tay không đổ lên trang vở khi viết.'
      },
      {
        question: 'Bóng đèn huỳnh quang compact phát sáng nhờ cơ chế nào?',
        options: [
          'Phóng điện qua hơi thủy ngân tạo tia tử ngoại kích thích bột huỳnh quang phát sáng',
          'Đốt nóng sợi dây tóc vonfram đỏ rực',
          'Đốt cháy khí gas bên trong',
          'Phản chiếu ánh trăng'
        ],
        answerIndex: 0,
        hint: 'Sự phóng điện giữa hai điện cực trong ống thủy tinh phủ bột huỳnh quang.',
        explanation: 'Hiện tượng phóng điện làm hơi thủy ngân phát tia UV đập vào lớp bột huỳnh quang tạo ra ánh sáng trắng.'
      },
      {
        question: 'Hành động nào sau đây giúp tăng tuổi thọ của bóng đèn chiếu sáng trong gia đình?',
        options: [
          'Thường xuyên lau chùi bụi bẩn bám trên bóng đèn bằng khăn khô mềm',
          'Bật tắt công tắc liên tục hàng chục lần để kiểm tra',
          'Dùng khăn ướt sũng lau bóng đèn khi đang bật sáng',
          'Để bóng đèn tiếp xúc trực tiếp với nước mưa dột'
        ],
        answerIndex: 0,
        hint: 'Vệ sinh định kỳ bằng giẻ khô giúp tản nhiệt tốt và sáng rõ hơn.',
        explanation: 'Lau sạch bụi giúp đèn tản nhiệt tốt, duy trì quang thông và kéo dài độ bền thiết bị chiếu sáng.'
      }
    ]
  },

  // 30. CÔNG NGHỆ 6 - HK2 THƯỜNG XUYÊN 4
  {
    id: 'quiz-g6-s2-reg4-tech',
    title: 'Công nghệ 6 - Kiểm tra Thường xuyên 4: An toàn Điện & Sử dụng Đồ dùng Điện',
    titleEn: 'Technology 6 - Regular Assessment 4: Electrical Safety & Home Appliances',
    grade: 6,
    semester: 2,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'technology',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Quy tắc an toàn khi sử dụng điện, xử lý khi thấy người bị điện giật, và aptomat chống giật.',
    descriptionEn: 'Household electrical safety protocols and emergency electrocution response.',
    questions: [
      {
        question: 'Khi phát hiện một người đang bị điện giật dính vào dây điện, việc đầu tiên cần làm ngay là:',
        options: [
          'Ngắt ngay cầu dao điện (Aptomat) tổng hoặc dùng thanh gỗ khô gạt dây điện ra khỏi người nạn nhân',
          'Lao vào dùng tay không kéo mạnh người nạn nhân ra',
          'Đổ một xô nước lạnh vào người nạn nhân',
          'Đứng nhìn và la hét hoảng loạn'
        ],
        answerIndex: 0,
        hint: 'Cắt nguồn điện ngay lập tức hoặc dùng vật cách điện khô.',
        explanation: 'Ngắt cầu dao hoặc dùng que gỗ khô cách điện để tách nguồn điện, tuyệt đối không chạm tay trực tiếp kẻo bị giật liên đới.'
      },
      {
        question: 'Tại sao tuyệt đối KHÔNG được cắm hoặc rút phích cắm điện khi tay đang ướt nước?',
        options: [
          'Vì nước lã dẫn điện rất tốt, dòng điện dễ truyền qua nước vào cơ thể gây điện giật chết người',
          'Vì nước sẽ làm phích cắm bị rỉ sét ngay lập tức',
          'Vì nước làm dây điện bị đứt đôi',
          'Vì ổ cắm sẽ phát ra tiếng chuông reo'
        ],
        answerIndex: 0,
        hint: 'Nước thường chứa khoáng chất dẫn điện cực mạnh.',
        explanation: 'Nước làm giảm điện trở tiếp xúc của da, tạo cầu dẫn dòng điện 220V chạy qua tim cực kỳ nguy hiểm.'
      },
      {
        question: 'Thiết bị bảo vệ tự động ngắt điện khi xảy ra sự cố quá tải hoặc ngắn mạch (chập điện) là:',
        options: ['Aptomat (Cầu dao tự động / Circuit Breaker)', 'Công tắc xoay đèn', 'Phích cắm chuyển đổi', 'Bóng đèn báo hiệu'],
        answerIndex: 0,
        hint: 'Tự động "nhảy" ngắt mạch khi quá tải phòng chống hỏa hoạn.',
        explanation: 'Aptomat tự động ngắt nguồn điện khi dòng điện vượt mức an toàn để bảo vệ mạng lưới điện gia đình.'
      },
      {
        question: 'Hành động nào sau đây là vi phạm quy định an toàn hành lang lưới điện cao áp?',
        options: [
          'Thả diều, câu cá hoặc trèo lên cây gần đường dây điện cao thế',
          'Báo cáo với cơ quan điện lực khi thấy cây có nguy cơ ngã vào dây điện',
          'Trồng trọt hoa màu thấp cách xa chân cột điện cao áp',
          'Đi đường vòng tránh xa khu vực trạm biến áp'
        ],
        answerIndex: 0,
        hint: 'Dòng điện cao thế có thể phóng qua không khí gây cháy giật.',
        explanation: 'Thả diều hoặc lại gần đường điện cao thế có nguy cơ bị phóng điện hồ quang gây bỏng nặng và tử vong.'
      }
    ]
  }
];
