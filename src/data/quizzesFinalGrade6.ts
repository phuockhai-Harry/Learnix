import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Semester Final Examinations (Kiểm Tra Đánh Giá Cuối Học Kỳ) for Grade 6
 * Ministry of Education & Training GDPT 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 * Comprehensive testing across all 8 subjects for Semester 1 and Semester 2 (60 - 90 minutes).
 */
export const GRADE_6_FINAL_QUIZZES: CurriculumQuiz[] = [
  // =============================================================
  // SEMESTER 1 - HỌC KỲ 1 (8 FINAL EXAMS)
  // =============================================================

  // 1. TOÁN HỌC - HK1 FINAL
  {
    id: 'quiz-g6-s1-final-math',
    title: 'Toán 6 - Đề Kiểm Tra Cuối Học Kỳ 1 (Tổng hợp Toàn diện)',
    titleEn: 'Math 6 - Semester 1 Comprehensive Final Examination',
    grade: 6,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi cuối kì 1 chuẩn cấu trúc: Tập hợp N, lũy thừa, tính chia hết, số nguyên Z, hình vuông, tam giác đều, lục giác đều và hình chữ nhật.',
    descriptionEn: 'Official Grade 6 Semester 1 Final Exam covering Natural Numbers, Integers, Divisibility and Plane Geometry.',
    questions: [
      {
        question: 'Tập hợp các ước chung của 12 và 18 là:',
        options: ['{1; 2; 3; 6}', '{1; 2; 3; 4; 6}', '{1; 3; 6}', '{2; 3; 6}'],
        answerIndex: 0,
        hint: 'Ư(12) = {1; 2; 3; 4; 6; 12}, Ư(18) = {1; 2; 3; 6; 9; 18}.',
        explanation: 'ƯC(12, 18) = Ư(12) ∩ Ư(18) = {1; 2; 3; 6}.'
      },
      {
        question: 'Kết quả của phép tính (-15) + (-25) là:',
        options: ['-40', '40', '-10', '10'],
        answerIndex: 0,
        hint: 'Cộng hai số nguyên âm: cộng hai giá trị tuyệt đối rồi đặt dấu "-" trước kết quả.',
        explanation: '(-15) + (-25) = -(15 + 25) = -40.'
      },
      {
        question: 'Tìm x biết: 2x - 13 = 17',
        options: ['x = 15', 'x = 2', 'x = 30', 'x = 14'],
        answerIndex: 0,
        hint: '2x = 17 + 13 = 30, sau đó chia 2.',
        explanation: '2x = 17 + 13 => 2x = 30 => x = 15.'
      },
      {
        question: 'Hình lục giác đều ABCDEF có bao nhiêu đường chéo chính?',
        options: ['3 đường chéo chính', '6 đường chéo chính', '9 đường chéo chính', '12 đường chéo chính'],
        answerIndex: 0,
        hint: 'Các đường chéo chính nối hai đỉnh đối diện: AD, BE, CF.',
        explanation: 'Hình lục giác đều có đúng 3 đường chéo chính cắt nhau tại tâm đối xứng.'
      },
      {
        question: 'Một hình chữ nhật có chu vi là 48 cm, chiều dài hơn chiều rộng 4 cm. Diện tích hình chữ nhật là:',
        options: ['140 cm²', '144 cm²', '136 cm²', '160 cm²'],
        answerIndex: 0,
        hint: 'Nửa chu vi = 24 cm. Chiều dài = (24 + 4) : 2 = 14 cm. Chiều rộng = 10 cm.',
        explanation: 'Nửa chu vi = 24 cm. Chiều dài = 14 cm, chiều rộng = 10 cm. Diện tích = 14 × 10 = 140 cm².'
      },
      {
        question: 'Trong các số sau, số nào chia hết cho cả 2, 3, 5 và 9?',
        options: ['180', '145', '2700', '180 và 2700'],
        answerIndex: 3,
        hint: 'Tận cùng là 0 thì chia hết cho 2 và 5; tổng các chữ số chia hết cho 9 thì chia hết cho cả 3 và 9.',
        explanation: 'Cả 180 (1+8+0=9) và 2700 (2+7+0+0=9) đều tận cùng bằng 0 và tổng các chữ số chia hết cho 9.'
      },
      {
        question: 'Nhiệt độ buổi sáng ở Sa Pa là -2°C, đến trưa nhiệt độ tăng thêm 5°C. Nhiệt độ buổi trưa là:',
        options: ['3°C', '-7°C', '7°C', '-3°C'],
        answerIndex: 0,
        hint: 'Lấy nhiệt độ ban đầu cộng thêm nhiệt độ tăng: (-2) + 5.',
        explanation: '(-2) + 5 = 3°C.'
      },
      {
        question: 'Một mảnh vườn hình thoi có độ dài hai đường chéo là 8m và 6m. Diện tích mảnh vườn đó là:',
        options: ['24 m²', '48 m²', '14 m²', '28 m²'],
        answerIndex: 0,
        hint: 'Diện tích hình thoi bằng nửa tích độ dài hai đường chéo: S = (d1 × d2) / 2.',
        explanation: 'S = (8 × 6) / 2 = 48 / 2 = 24 m².'
      }
    ]
  },

  // 2. NGỮ VĂN - HK1 FINAL
  {
    id: 'quiz-g6-s1-final-lit',
    title: 'Ngữ văn 6 - Đề Kiểm Tra Cuối Học Kỳ 1 (Đọc hiểu & Tiếng Việt)',
    titleEn: 'Literature 6 - Semester 1 Comprehensive Final Exam',
    grade: 6,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi cuối kì 1 tổng hợp: Truyền thuyết, cổ tích, đồng thoại, thơ lục bát, biện pháp tu từ, từ đơn, từ phức và trạng ngữ.',
    descriptionEn: 'Literature Semester 1 final exam covering folklore, fairy tales, six-eight poetry, and grammar.',
    questions: [
      {
        question: 'Truyện truyền thuyết dân gian Việt Nam thường có đặc điểm cốt lõi nào sau đây?',
        options: [
          'Kể về các nhân vật, sự kiện lịch sử có yếu tố tưởng tượng kì ảo nhằm thể hiện thái độ nhân dân',
          'Chỉ kể về cuộc đời số phận của những người bất hạnh trong xã hội',
          'Mượn chuyện loài vật để khuyên nhủ con người bài học đạo đức',
          'Kể về các hiện tượng tự nhiên nguyên thủy thông qua các vị thần sáng tạo'
        ],
        answerIndex: 0,
        hint: 'Xem định nghĩa truyền thuyết trong Bài 1: Lắng nghe lịch sử nước mình.',
        explanation: 'Truyền thuyết phản ánh lịch sử qua lăng kính tưởng tượng kì ảo để tôn vinh anh hùng và thể hiện cách đánh giá của nhân dân.'
      },
      {
        question: 'Trong câu thơ: "Bàn tay mẹ chắn mưa sa / Bàn tay mẹ chặn bão qua mùa màng", tác giả đã sử dụng biện pháp tu từ nào?',
        options: ['Điệp ngữ', 'So sánh', 'Nói quá', 'Chơi chữ'],
        answerIndex: 0,
        hint: 'Cụm từ "Bàn tay mẹ" được lặp lại đầu cả hai dòng thơ.',
        explanation: 'Điệp từ ngữ "Bàn tay mẹ" nhấn mạnh sự chở che, đức hy sinh to lớn của người mẹ đối với con.'
      },
      {
        question: 'Từ "chân" trong câu nào sau đây được dùng theo nghĩa chuyển?',
        options: [
          'Dưới chân núi Ba Vì sương trắng bảng lảng',
          'Cậu bé bị đau chân sau buổi đá bóng',
          'Bác nông dân rửa chân sạch sẽ bên bờ mương',
          'Đôi chân thoăn thoắt bước trên đường làng'
        ],
        answerIndex: 0,
        hint: 'Nghĩa gốc của "chân" là bộ phận dưới cùng của cơ thể người hoặc động vật.',
        explanation: '"Chân núi" là nghĩa chuyển theo phương thức ẩn dụ (vị trí tiếp giáp với mặt đất).'
      },
      {
        question: 'Bài học đắt giá nhất mà nhân vật Dế Mèn rút ra sau cái chết của Dế Choắt là gì?',
        options: [
          'Ở đời không được kiêu căng, xốc nổi và bắt nạt kẻ yếu kẻo mang vạ lớn',
          'Cần phải thường xuyên tập luyện võ thuật để mạnh khỏe hơn',
          'Không nên kết bạn với những người gầy gò ốm yếu',
          'Nên sống một mình khép kín trong hang để an toàn'
        ],
        answerIndex: 0,
        hint: 'Lời trăn trối của Dế Choắt trước khi nhắm mắt.',
        explanation: 'Dế Choắt khuyên: Ở đời mà có thói hung hăng bậy bạ, có óc mà không biết nghĩ, sớm muộn cũng mang vạ vào mình.'
      },
      {
        question: 'Quy luật gieo vần của thể thơ lục bát: Tiếng thứ 6 của câu lục vần với tiếng thứ mấy của câu bát?',
        options: ['Tiếng thứ sáu của câu bát', 'Tiếng thứ tám của câu bát', 'Tiếng thứ tư của câu bát', 'Tiếng thứ hai của câu bát'],
        answerIndex: 0,
        hint: 'Ví dụ: "Trăm năm trong cõi người ta (tiếng 6 là "ta") / Chữ tài chữ mệnh khéo là (tiếng 6 là "là") ghét nhau".',
        explanation: 'Quy luật lục bát: Tiếng thứ 6 câu lục bắt vần với tiếng thứ 6 câu bát, và tiếng 8 câu bát bắt vần với tiếng 6 câu lục tiếp theo.'
      },
      {
        question: 'Thành ngữ nào sau đây bắt nguồn từ một truyện truyền thuyết quen thuộc?',
        options: ['Sơn tinh Thủy tinh (Cầu được ước thấy)', 'Một nắng hai sương', 'Ăn quả nhớ kẻ trồng cây', 'Lên thác xuống ghềnh'],
        answerIndex: 0,
        hint: 'Thành ngữ liên quan đến sính lễ voi chín ngà, gà chín cựa, ngựa chín hồng mao.',
        explanation: 'Truyền thuyết Sơn Tinh - Thủy Tinh gắn với câu chuyện sính lễ thách cưới độc đáo.'
      },
      {
        question: 'Trạng ngữ trong câu: "Mùa xuân, trăm hoa đua nhau khoe sắc thắm." có chức năng bổ sung thông tin gì?',
        options: ['Chỉ thời gian', 'Chỉ nơi chốn', 'Chỉ nguyên nhân', 'Chỉ mục đích'],
        answerIndex: 0,
        hint: '"Mùa xuân" là khoảng thời gian trong năm.',
        explanation: 'Trạng ngữ "Mùa xuân" đứng đầu câu bổ sung ý nghĩa thời gian cho sự việc được nói đến ở cụm chủ - vị.'
      },
      {
        question: 'Văn bản "Bức tranh của em gái tôi" (Tạ Duy Anh) ca ngợi phẩm chất cao đẹp nào của nhân vật Kiều Phương?',
        options: [
          'Tấm lòng trong sáng, hồn nhiên và tình cảm nhân hậu khoan dung',
          'Tài năng hội họa kiệt xuất vượt trội hơn bạn bè',
          'Sự tự tin và tính cách độc lập từ thuở nhỏ',
          'Sự cần cù chịu khó giúp đỡ cha mẹ việc nhà'
        ],
        answerIndex: 0,
        hint: 'Kiều Phương vẽ bức tranh "Anh trai tôi" với trọn vẹn tình yêu thương thuần khiết.',
        explanation: 'Bức tranh và thái độ của Kiều Phương thể hiện tâm hồn vị tha, trong trẻo, thức tỉnh lương tri của người anh.'
      }
    ]
  },

  // 3. KHOA HỌC TỰ NHIÊN - HK1 FINAL
  {
    id: 'quiz-g6-s1-final-science',
    title: 'KHTN 6 - Đề Kiểm Tra Cuối Học Kỳ 1 (Vật lý, Hóa học, Sinh học)',
    titleEn: 'Natural Science 6 - Semester 1 Comprehensive Final Exam',
    grade: 6,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối kì 1 tích hợp KHTN: Đo lường cơ bản, các thể của chất, oxygen và không khí, tế bào đơn vị cơ sở của sự sống, sinh vật đơn bào và đa bào.',
    descriptionEn: 'Natural Science Semester 1 final exam covering measurement, matter, atmosphere, cell biology, and biodiversity.',
    questions: [
      {
        question: 'Để đo thể tích của một hòn đá cuội không thấm nước và chìm trong nước, người ta thường dùng dụng cụ nào?',
        options: ['Bình chia độ', 'Cân điện tử', 'Thước kẹp micromet', 'Nhiệt kế rượu'],
        answerIndex: 0,
        hint: 'Thả hòn đá vào bình chia độ chứa sẵn nước, thể tích nước dâng lên chính là thể tích hòn đá.',
        explanation: 'Phương pháp dâng nước dùng bình chia độ đo chính xác thể tích vật rắn có hình dạng bất kì.'
      },
      {
        question: 'Không khí là một hỗn hợp khí trong đó thành phần chiếm tỉ lệ thể tích lớn nhất là:',
        options: ['Khí nitrogen (~78%)', 'Khí oxygen (~21%)', 'Khí carbon dioxide (~0.04%)', 'Hơi nước và khí hiếm (~1%)'],
        answerIndex: 0,
        hint: 'Khí chiếm gần 4/5 thể tích không khí xung quanh chúng ta.',
        explanation: 'Khí nitrogen (N2) chiếm khoảng 78% thể tích không khí, oxygen chiếm 21%.'
      },
      {
        question: 'Bộ phận nào của tế bào thực vật có vai trò quang hợp, tạo ra chất hữu cơ cho cây?',
        options: ['Lục lạp (chứa diệp lục)', 'Màng sinh chất', 'Không bào lớn', 'Thành tế bào cellulose'],
        answerIndex: 0,
        hint: 'Bào quan có màu xanh lục hấp thụ năng lượng ánh sáng mặt trời.',
        explanation: 'Lục lạp chứa chất diệp lục giúp cây quang hợp tổng hợp glucose và giải phóng O2.'
      },
      {
        question: 'Sinh vật nào sau đây là cơ thể đơn bào?',
        options: ['Trùng roi xanh', 'Cây lúa nước', 'Con mèo mướp', 'Cây nấm rơm'],
        answerIndex: 0,
        hint: 'Cơ thể chỉ gồm một tế bào duy nhất thực hiện mọi chức năng sống.',
        explanation: 'Trùng roi xanh là sinh vật đơn bào; cây lúa, con mèo và nấm rơm là sinh vật đa bào.'
      },
      {
        question: 'Quá trình chất chuyển từ thể lỏng sang thể hơi (khí) trên bề mặt chất lỏng được gọi là:',
        options: ['Sự bay hơi', 'Sự ngưng tụ', 'Sự đông đặc', 'Sự nóng chảy'],
        answerIndex: 0,
        hint: 'Ví dụ: Nước mưa trên sân bay hơi sau khi nắng lên.',
        explanation: 'Sự bay hơi là sự chuyển từ thể lỏng sang thể khí diễn ra ở bề mặt chất lỏng.'
      },
      {
        question: 'Thứ tự đúng về các cấp độ tổ chức của cơ thể đa bào từ nhỏ đến lớn là:',
        options: [
          'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể',
          'Tế bào → Cơ quan → Mô → Hệ cơ quan → Cơ thể',
          'Mô → Tế bào → Cơ quan → Hệ cơ quan → Cơ thể',
          'Cơ thể → Hệ cơ quan → Cơ quan → Mô → Tế bào'
        ],
        answerIndex: 0,
        hint: 'Đơn vị nhỏ nhất là tế bào, tập hợp các tế bào cùng chức năng tạo thành mô.',
        explanation: 'Chuỗi cấp độ: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể hoàn chỉnh.'
      },
      {
        question: 'Để tách cát ra khỏi hỗn hợp nước và cát mịn, phương pháp đơn giản và hiệu quả nhất là:',
        options: ['Lọc bằng phễu và giấy lọc', 'Đun sôi cô cạn', 'Chiết bằng phễu chiết', 'Dùng nam châm hút'],
        answerIndex: 0,
        hint: 'Cát là chất rắn không tan trong nước.',
        explanation: 'Dùng giấy lọc giữ lại cát trên bề mặt phễu và cho nước trong chảy xuống bình chứa.'
      },
      {
        question: 'Tế bào nhân sơ khác tế bào nhân thực ở đặc điểm cốt lõi nào?',
        options: [
          'Chưa có màng nhân bao bọc vùng nhân mang vật chất di truyền',
          'Không có màng sinh chất',
          'Kích thước lớn hơn tế bào nhân thực rất nhiều',
          'Có đầy đủ các bào quan có màng bao bọc'
        ],
        answerIndex: 0,
        hint: '"Sơ" nghĩa là nguyên thủy, chưa hoàn thiện lớp màng bao bọc nhân.',
        explanation: 'Tế bào nhân sơ (như vi khuẩn) chỉ có vùng nhân, không có màng nhân bao bọc phân cách với tế bào chất.'
      }
    ]
  },

  // 4. TIẾNG ANH - HK1 FINAL
  {
    id: 'quiz-g6-s1-final-english',
    title: 'Tiếng Anh 6 - Đề Kiểm Tra Cuối Học Kỳ 1 (Comprehensive Exam)',
    titleEn: 'English 6 - Semester 1 Comprehensive Final Exam',
    grade: 6,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi cuối kỳ 1 chuẩn Global Success: My New School, My Home, My Friends, My Neighbourhood, Natural Wonders, và Tết Holiday.',
    descriptionEn: 'English Grade 6 Semester 1 final exam covering Units 1 to 6 (grammar, vocabulary, and reading).',
    questions: [
      {
        question: 'Look at the sign! You _______ walk on the grass in the national park.',
        options: ['mustn\'t', 'must', 'can', 'should'],
        answerIndex: 0,
        hint: 'A strict rule or prohibition.',
        explanation: '"mustn\'t" expresses strict prohibition (Cấm không được làm).'
      },
      {
        question: 'Ha Long Bay is one of the most famous natural _______ of the world.',
        options: ['wonders', 'islands', 'valleys', 'forests'],
        answerIndex: 0,
        hint: 'Kỳ quan thiên nhiên thế giới.',
        explanation: '"natural wonders" có nghĩa là các kỳ quan thiên nhiên.'
      },
      {
        question: 'My best friend Nam is very _______. He always shares his books and pens with classmates.',
        options: ['generous', 'shy', 'lazy', 'selfish'],
        answerIndex: 0,
        hint: 'Someone who is happy to give or share with others.',
        explanation: '"generous" nghĩa là hào phóng, rộng rãi, tốt bụng.'
      },
      {
        question: 'Choose the word whose underlined part is pronounced differently: A. c<u>a</u>t  B. f<u>a</u>ther  C. h<u>a</u>t  D. m<u>a</u>p',
        options: ['father', 'cat', 'hat', 'map'],
        answerIndex: 0,
        hint: 'father has the /ɑː/ sound, while the others have /æ/.',
        explanation: '"father" phát âm là /fɑːðər/, còn cat, hat, map phát âm là /æ/.'
      },
      {
        question: 'Life in the countryside is _______ than life in the noisy city.',
        options: ['more peaceful', 'peacefuler', 'most peaceful', 'peacefully'],
        answerIndex: 0,
        hint: 'Comparative of two-syllable adjective "peaceful": more + adj + than.',
        explanation: 'So sánh hơn của tính từ dài 2 âm tiết "peaceful" là "more peaceful than".'
      },
      {
        question: 'Children shouldn\'t _______ food or water during the Tet holiday preparation.',
        options: ['waste', 'wish', 'celebrate', 'decorate'],
        answerIndex: 0,
        hint: 'Lãng phí đồ ăn thức uống.',
        explanation: '"waste" nghĩa là lãng phí, hoang phí.'
      },
      {
        question: 'What time _______ your mother usually _______ home from work?',
        options: ['does / come', 'do / come', 'is / coming', 'did / came'],
        answerIndex: 0,
        hint: 'Present simple with singular subject "your mother" + adverb "usually".',
        explanation: 'Chủ ngữ "your mother" ngôi thứ 3 số ít nên dùng trợ động từ "does" và động từ nguyên thể "come".'
      },
      {
        question: 'There _______ a large computer room and two science labs in our new school.',
        options: ['is', 'are', 'be', 'have'],
        answerIndex: 0,
        hint: '"There is" agrees with the nearest noun phrase: "a large computer room".',
        explanation: 'Quy tắc "There is" hòa hợp với danh từ số ít đứng ngay sau nó ("a large computer room").'
      }
    ]
  },

  // 5. LỊCH SỬ VÀ ĐỊA LÝ - HK1 FINAL
  {
    id: 'quiz-g6-s1-final-hisgeo',
    title: 'Lịch sử và Địa lý 6 - Đề Kiểm Tra Cuối Học Kỳ 1 (Tổng hợp)',
    titleEn: 'History & Geography 6 - Semester 1 Comprehensive Final Exam',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối kì 1: Nguồn gốc loài người, các nền văn minh Lưỡng Hà, Ai Cập, Ấn Độ, Trung Quốc cổ đại; Trái Đất, tọa độ địa lí và bản đồ.',
    descriptionEn: 'History & Geography Semester 1 final exam covering ancient civilizations and Earth physical geography.',
    questions: [
      {
        question: 'Nhà nước cổ đại Ai Cập được hình thành dọc theo thung lũng của con sông nào?',
        options: ['Sông Nin (Nile)', 'Sông Tigris', 'Sông Euphrates', 'Sông Hằng (Ganges)'],
        answerIndex: 0,
        hint: 'Con sông dài nhất thế giới chảy qua Bắc Phi, được mệnh danh là món quà của Ai Cập.',
        explanation: 'Sử gia Hy Lạp Herodotus viết: "Ai Cập là tặng phẩm của sông Nin".'
      },
      {
        question: 'Hệ tọa độ địa lí trên Trái Đất bao gồm hai yếu tố cơ bản nào?',
        options: ['Kinh độ và vĩ độ', 'Độ cao và độ sâu', 'Khoảng cách và phương vị', 'Bắc cực và Nam cực'],
        answerIndex: 0,
        hint: 'Mỗi điểm trên bản đồ được xác định bởi một kinh tuyến và một vĩ tuyến đi qua điểm đó.',
        explanation: 'Tọa độ địa lí của một điểm là kinh độ và vĩ độ của điểm đó trên bản đồ.'
      },
      {
        question: 'Dấu tích của Người tối cổ xuất hiện sớm nhất tại khu vực nào của Việt Nam?',
        options: [
          'Thẩm Khuyên, Thẩm Hai (Lạng Sơn), An Khê (Gia Lai)',
          'Đồng Nai, Cần Giờ (TP. Hồ Chí Minh)',
          'Vịnh Hạ Long (Quảng Ninh)',
          'Cúc Phương (Ninh Bình)'
        ],
        answerIndex: 0,
        hint: 'Răng Người tối cổ tìm thấy trong hang đá vôi Lạng Sơn và công cụ đá ghè đẽo ở Tây Nguyên.',
        explanation: 'Dấu tích răng và rìu tay sơ kỳ đá cũ được phát hiện tại Thẩm Khuyên (Lạng Sơn) và An Khê (Gia Lai).'
      },
      {
        question: 'Trái Đất tự quay quanh trục tưởng tượng theo hướng nào và trong thời gian bao lâu?',
        options: [
          'Từ Tây sang Đông trong khoảng 24 giờ (1 ngày đêm)',
          'Từ Đông sang Tây trong khoảng 12 giờ',
          'Từ Bắc xuống Nam trong 365 ngày',
          'Từ Tây sang Đông trong 48 giờ'
        ],
        answerIndex: 0,
        hint: 'Chính vì Trái Đất quay từ Tây sang Đông nên ta thấy Mặt Trời mọc đằng Đông lặn đằng Tây.',
        explanation: 'Trái Đất tự quay quanh trục theo chiều từ Tây sang Đông, chu kỳ quay trọn một vòng là 24 giờ.'
      },
      {
        question: 'Kim tự tháp Kê-ốp (Giza) là công trình kiến trúc kì vĩ của nền văn minh cổ đại nào?',
        options: ['Ai Cập cổ đại', 'Lưỡng Hà cổ đại', 'Hy Lạp cổ đại', 'La Mã cổ đại'],
        answerIndex: 0,
        hint: 'Lăng mộ của các Pharaoh Ai Cập.',
        explanation: 'Kim tự tháp Kê-ốp được xây dựng dưới thời Ai Cập cổ đại là một trong 7 kỳ quan thế giới cổ đại duy nhất còn tồn tại.'
      },
      {
        question: 'Kinh tuyến gốc 0° đi qua đài thiên văn Greenwich nằm ở quốc gia nào?',
        options: ['Vương quốc Anh', 'Pháp', 'Hoa Kỳ', 'Ai Cập'],
        answerIndex: 0,
        hint: 'Đài thiên văn Greenwich nằm gần thủ đô Luân Đôn (London).',
        explanation: 'Kinh tuyến gốc 0° đi qua đài thiên văn Hoàng gia Greenwich ở ngoại ô Luân Đôn, nước Anh.'
      },
      {
        question: 'Nền chữ viết cổ nhất của người Lưỡng Hà được viết trên chất liệu gì?',
        options: ['Các phiến đất sét ướt rồi đem nung', 'Giấy cói papyrus', 'Thẻ tre và mai rùa', 'Vải lụa tơ tằm'],
        answerIndex: 0,
        hint: 'Dùng que vót nhọn ấn vào đất sét tạo thành chữ hình nêm (chữ tiết hình).',
        explanation: 'Người Lưỡng Hà dùng cây sậy vót nhọn viết chữ hình nêm lên các phiến đất sét dẻo rồi đem nung khô.'
      },
      {
        question: 'Khoảng cách giữa hai vĩ tuyến cách nhau 1 độ trên bề mặt Trái Đất xấp xỉ khoảng bao nhiêu kilômét?',
        options: ['Khoảng 111 km', 'Khoảng 55 km', 'Khoảng 222 km', 'Khoảng 333 km'],
        answerIndex: 0,
        hint: 'Lấy chu vi Trái Đất (khoảng 40.000 km) chia cho 360 độ.',
        explanation: '40.075 km / 360° ≈ 111.3 km trên một vĩ độ.'
      }
    ]
  },

  // 6. TIN HỌC - HK1 FINAL
  {
    id: 'quiz-g6-s1-final-informatics',
    title: 'Tin học 6 - Đề Kiểm Tra Cuối Học Kỳ 1 (Toàn diện Kỹ thuật số)',
    titleEn: 'Informatics 6 - Semester 1 Comprehensive Final Exam',
    grade: 6,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'technology',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối kì 1 Tin học 6: Thông tin và dữ liệu, biểu diễn thông tin bằng dãy bit 0 và 1, mạng máy tính, Internet, email và bảo mật thông tin.',
    descriptionEn: 'Informatics Semester 1 final exam covering information theory, binary representation, computer networks, and cybersecurity.',
    questions: [
      {
        question: 'Đơn vị đo lượng dữ liệu nhỏ nhất trong máy tính là gì?',
        options: ['Bit (kí hiệu là b)', 'Byte (kí hiệu là B)', 'Kilobyte (KB)', 'Megabyte (MB)'],
        answerIndex: 0,
        hint: 'Mỗi bit chỉ nhận một trong hai giá trị là 0 hoặc 1.',
        explanation: 'Bit (binary digit) là đơn vị cơ bản và nhỏ nhất để đo lượng dữ liệu trong công nghệ thông tin.'
      },
      {
        question: '1 Megabyte (1 MB) bằng bao nhiêu Kilobyte (KB)?',
        options: ['1024 KB', '1000 KB', '100 KB', '1048576 KB'],
        answerIndex: 0,
        hint: 'Hệ nhị phân: 2¹⁰ = 1024.',
        explanation: '1 MB = 1024 KB = 2²⁰ Bytes.'
      },
      {
        question: 'Thành phần nào sau đây là thiết bị đầu cuối trong một hệ thống mạng máy tính?',
        options: ['Máy tính để bàn, điện thoại thông minh, máy in mạng', 'Bộ định tuyến (Router)', 'Bộ chia mạng (Switch)', 'Cáp mạng truyền dẫn xoắn đôi'],
        answerIndex: 0,
        hint: 'Thiết bị gửi hoặc nhận dữ liệu trực tiếp phục vụ người sử dụng.',
        explanation: 'Máy tính, điện thoại, máy in là thiết bị đầu cuối; router và switch là thiết bị kết nối.'
      },
      {
        question: 'Dịch vụ nào của Internet cho phép gửi và nhận thư điện tử đính kèm tệp tin qua mạng?',
        options: ['Email (Thư điện tử)', 'World Wide Web (Web)', 'Trò chơi trực tuyến', 'Mạng xã hội'],
        answerIndex: 0,
        hint: 'Electronic Mail (ví dụ Gmail, Outlook).',
        explanation: 'Thư điện tử (Email) là dịch vụ trao đổi thư tín kỹ thuật số kèm văn bản, hình ảnh, tài liệu.'
      },
      {
        question: 'Mật khẩu nào sau đây được coi là an toàn và có độ bảo mật cao nhất?',
        options: ['L3@rn!x_2024#Math', '12345678', 'password', 'nguyenvana2012'],
        answerIndex: 0,
        hint: 'Mật khẩu mạnh dài trên 8 kí tự, có chữ hoa, chữ thường, số và kí tự đặc biệt.',
        explanation: '"L3@rn!x_2024#Math" kết hợp đầy đủ chữ hoa, chữ thường, số và ký tự đặc biệt, không chứa thông tin cá nhân dễ đoán.'
      },
      {
        question: 'Tại sao máy tính điện tử chỉ có thể xử lý và lưu trữ dữ liệu dưới dạng các dãy bit 0 và 1?',
        options: [
          'Vì các linh kiện điện tử chỉ có hai trạng thái vật lý rõ rệt: có điện (1) hoặc ngắt điện (0)',
          'Vì người sáng chế máy tính chỉ thích hai số 0 và 1',
          'Vì các chữ số từ 2 đến 9 làm máy tính chạy chậm hơn',
          'Vì màn hình máy tính chỉ hiển thị được hai màu'
        ],
        answerIndex: 0,
        hint: 'Nguyên lý trạng thái đóng/ngắt mạch bán dẫn (Transistor).',
        explanation: 'Linh kiện điện tử bán dẫn hoạt động dựa trên hai trạng thái ổn định: thông mạch (bật/1) và ngắt mạch (tắt/0).'
      },
      {
        question: 'Mạng kết nối các máy tính trong phạm vi hẹp như một phòng học hoặc tòa nhà trường học được gọi là:',
        options: ['Mạng cục bộ (LAN)', 'Mạng diện rộng (WAN)', 'Mạng toàn cầu (Internet)', 'Mạng vệ tinh'],
        answerIndex: 0,
        hint: 'LAN là viết tắt của Local Area Network.',
        explanation: 'LAN (Local Area Network) là mạng máy tính cục bộ trong không gian nhỏ hẹp.'
      },
      {
        question: 'Hành vi nào sau đây là KHÔNG đúng đắn khi tham gia môi trường mạng Internet?',
        options: [
          'Đăng tải thông tin bịa đặt, bêu riếu hoặc xúc phạm danh dự người khác',
          'Bảo vệ mật khẩu tài khoản cá nhân cẩn thận',
          'Tìm kiếm tài liệu học tập bổ ích',
          'Tôn trọng bản quyền tác giả khi sử dụng hình ảnh'
        ],
        answerIndex: 0,
        hint: 'Quy tắc ứng xử văn minh và đạo đức số.',
        explanation: 'Bêu riếu, xúc phạm người khác trên mạng vi phạm nghiêm trọng pháp luật và đạo đức số.'
      }
    ]
  },

  // 7. GIÁO DỤC CÔNG DÂN - HK1 FINAL
  {
    id: 'quiz-g6-s1-final-civics',
    title: 'GDCD 6 - Đề Kiểm Tra Cuối Học Kỳ 1 (Chuẩn Đạo đức & Kỹ năng)',
    titleEn: 'Civic Education 6 - Semester 1 Comprehensive Final Exam',
    grade: 6,
    semester: 1,
    subject: 'Giáo dục công dân',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'civics',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối kì 1 GDCD: Tự hào truyền thống gia đình dòng họ, Yêu thương con người, Siêng năng kiên trì, và Tôn trọng sự thật.',
    descriptionEn: 'Civic Education Semester 1 final exam covering family traditions, empathy, perseverance, and honesty.',
    questions: [
      {
        question: 'Câu tục ngữ nào sau đây thể hiện sâu sắc truyền thống "Yêu thương con người"?',
        options: ['Lá lành đùm lá rách', 'Có công mài sắt có ngày nên kim', 'Uống nước nhớ nguồn', 'Học thầy không tày học bạn'],
        answerIndex: 0,
        hint: 'Giúp đỡ san sẻ với người gặp hoạn nạn, khó khăn.',
        explanation: '"Lá lành đùm lá rách" biểu hiện sự đùm bọc, tương thân tương ái giữa con người với nhau.'
      },
      {
        question: 'Tôn trọng sự thật mang lại ý nghĩa quan trọng nào sau đây đối với mỗi cá nhân?',
        options: [
          'Giúp con người nâng cao uy tín cá nhân, được mọi người tin tưởng và xã hội công bằng',
          'Giúp làm giàu vật chất nhanh chóng hơn',
          'Tránh được mọi hình phạt dù làm điều sai trái',
          'Không bao giờ gặp thất bại trong cuộc sống'
        ],
        answerIndex: 0,
        hint: 'Sự thật là nền tảng của lòng tin và nhân cách cao đẹp.',
        explanation: 'Tôn trọng sự thật bảo vệ lẽ phải, tạo dựng niềm tin yêu từ mọi người và xây dựng xã hội lành mạnh.'
      },
      {
        question: 'Hành vi nào sau đây thể hiện tính "Siêng năng, kiên trì" trong học tập của học sinh lớp 6?',
        options: [
          'Gặp bài toán khó không nản lòng, kiên nhẫn đọc lại lý thuyết và tìm nhiều cách giải',
          'Chép bài của bạn để kịp giờ nộp cho giáo viên',
          'Chỉ học những môn mình thích, bỏ bê các môn học khác',
          'Học bài một lúc thấy khó liền bỏ đi chơi điện tử'
        ],
        answerIndex: 0,
        hint: 'Kiên trì là vượt qua thử thách khó khăn để đạt mục tiêu.',
        explanation: 'Chủ động suy nghĩ, không lùi bước trước bài tập khó là biểu hiện chuẩn mực của siêng năng, kiên trì.'
      },
      {
        question: 'Để giữ gìn và phát huy truyền thống tốt đẹp của gia đình, dòng họ, học sinh cần làm gì?',
        options: [
          'Tự hào, chăm chỉ học tập, rèn luyện đạo đức để làm rạng rỡ dòng họ',
          'Che giấu nguồn gốc gia đình vì sợ bạn bè chê cười',
          'Bắt chước mọi phong tục kể cả hủ tục mê tín lạc hậu',
          'Cho rằng truyền thống xưa không còn phù hợp với thời hiện đại'
        ],
        answerIndex: 0,
        hint: 'Kế thừa có chọn lọc và phát huy những giá trị đạo đức cao đẹp.',
        explanation: 'Học sinh phát huy truyền thống bằng nỗ lực học tập, sống trung thực và cống hiến cho xã hội.'
      },
      {
        question: 'Khi thấy bạn trong lớp vô tình làm vỡ bình hoa nhưng lại sợ hãi không dám nhận lỗi, em nên ứng xử thế nào?',
        options: [
          'Động viên, khuyên bạn dũng cảm nhận lỗi với thầy cô và cùng bạn dọn dẹp mảnh vỡ',
          'Lên mạng xã hội bêu tên bạn để cả trường biết',
          'Mặc kệ bạn vì việc đó không liên quan đến mình',
          'Đổ tội cho một bạn khác mà em không thích'
        ],
        answerIndex: 0,
        hint: 'Vừa tôn trọng sự thật vừa thể hiện tình yêu thương, giúp bạn sửa sai.',
        explanation: 'Khuyên bạn trung thực nhận lỗi thể hiện sự tôn trọng sự thật và tình bạn chân thành, nhân văn.'
      },
      {
        question: 'Tình yêu thương con người KHÔNG bao gồm biểu hiện nào sau đây?',
        options: [
          'Bao che cho hành vi sai trái, vi phạm pháp luật của bạn bè thân thiết',
          'Sẵn sàng chia sẻ, giúp đỡ người già neo đơn và trẻ em tàn tật',
          'Tha thứ cho người biết ăn năn hối cải sau khi mắc lỗi lầm',
          'Đồng cảm với nỗi đau của những người bị thiên tai lũ lụt'
        ],
        answerIndex: 0,
        hint: 'Yêu thương chân chính phải gắn liền với lẽ phải và pháp luật.',
        explanation: 'Bao che sai trái không phải là tình yêu thương mà là làm hại bạn và vi phạm kỷ luật.'
      },
      {
        question: 'Thế nào là "Tôn trọng sự thật"?',
        options: [
          'Công nhận cái có thật, suy nghĩ, nói và hành động đúng với sự thật khách quan',
          'Nói theo số đông dù biết việc đó không có thật',
          'Im lặng trước những điều bất công để bảo vệ bản thân',
          'Chỉ nói thật khi có người kiểm tra hoặc đe dọa'
        ],
        answerIndex: 0,
        hint: 'Sự thật khách quan không phụ thuộc vào ý muốn chủ quan hay số đông.',
        explanation: 'Tôn trọng sự thật là luôn hành xử khách quan, đúng đắn, dám bảo vệ chân lý.'
      },
      {
        question: 'Biểu hiện nào sau đây là thiếu kiên trì trong đời sống hàng ngày?',
        options: [
          'Bỏ dở việc luyện tập thể thao chỉ sau vài ngày vì cảm thấy mệt mỏi',
          'Tập đàn kiên nhẫn mỗi ngày 30 phút suốt cả năm học',
          'Dậy sớm chạy bộ đều đặn bất kể thời tiết',
          'Kiên trì sửa lại bài vẽ cho đến khi ưng ý mới nộp'
        ],
        answerIndex: 0,
        hint: '"Cả thèm chóng chán".',
        explanation: 'Bỏ dở kế hoạch chỉ sau vài ngày là biểu hiện tiêu biểu của thói cả thèm chóng chán, thiếu ý chí kiên trì.'
      }
    ]
  },

  // 8. CÔNG NGHỆ - HK1 FINAL
  {
    id: 'quiz-g6-s1-final-tech',
    title: 'Công nghệ 6 - Đề Kiểm Tra Cuối Học Kỳ 1 (Nhà ở & Thực phẩm)',
    titleEn: 'Technology 6 - Semester 1 Comprehensive Final Exam',
    grade: 6,
    semester: 1,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'technology',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối kì 1 Công nghệ: Nhà ở đối với đời sống, xây dựng nhà ở, ngôi nhà thông minh, bảo quản thực phẩm và chế biến món ăn không sử dụng nhiệt.',
    descriptionEn: 'Technology Semester 1 final exam covering housing, smart homes, food preservation, and healthy nutrition.',
    questions: [
      {
        question: 'Ngôi nhà thông minh (Smart Home) được trang bị hệ thống gì giúp tự động hóa tiện nghi?',
        options: [
          'Hệ thống cảm biến và thiết bị điều khiển tự động hóa từ xa',
          'Tường bao bằng đá hoa cương nguyên khối kiên cố',
          'Số lượng bóng đèn chiếu sáng nhiều gấp ba lần nhà thông thường',
          'Mái nhà bắt buộc phải làm bằng kính trong suốt'
        ],
        answerIndex: 0,
        hint: 'Tự động bật tắt đèn khi có người, báo trộm, điều khiển bằng điện thoại.',
        explanation: 'Ngôi nhà thông minh ứng dụng công nghệ cảm biến và IoT để điều khiển thiết bị tự động hoặc từ xa.'
      },
      {
        question: 'Để xây dựng phần khung và tường nhà ở hiện đại, vật liệu xây dựng phổ biến gồm:',
        options: ['Xi măng, cát, đá, gạch và thép', 'Lá cọ, tranh, tre và nứa', 'Nhựa tái chế và màng xốp', 'Gỗ ép và bìa carton'],
        answerIndex: 0,
        hint: 'Bê tông cốt thép và gạch xây chịu lực.',
        explanation: 'Khung nhà bê tông cốt thép gồm xi măng, cát, đá, thép kết hợp gạch nung tạo kết cấu vững chãi.'
      },
      {
        question: 'Chế biến món nộm (gỏi) rau củ thuộc phương pháp chế biến thực phẩm nào?',
        options: [
          'Chế biến thực phẩm không sử dụng nhiệt',
          'Chế biến thực phẩm có sử dụng nhiệt',
          'Phương pháp bảo quản đông lạnh sâu',
          'Phương pháp sấy khô bằng than củi'
        ],
        answerIndex: 0,
        hint: 'Nộm trộn rau củ với gia vị chua ngọt mà không cần nấu trên bếp ga hay lò nướng.',
        explanation: 'Món nộm là phương pháp trộn hỗn hợp thực phẩm tươi sống không dùng nhiệt để giữ vitamin tự nhiên.'
      },
      {
        question: 'Biện pháp nào sau đây giúp sử dụng điện năng tiết kiệm và an toàn trong gia đình?',
        options: [
          'Tắt các thiết bị điện khi không sử dụng và tận dụng ánh sáng tự nhiên',
          'Bật điều hòa ở nhiệt độ 16°C liên tục cả ngày lẫn đêm',
          'Cắm nhiều thiết bị công suất lớn vào cùng một ổ cắm điện',
          'Để cửa tủ lạnh mở suốt trong khi nấu nướng'
        ],
        answerIndex: 0,
        hint: 'Tận dụng ánh sáng cửa sổ ban ngày và tắt đèn khi ra khỏi phòng.',
        explanation: 'Tắt thiết bị khi không dùng và mở cửa đón gió tự nhiên giúp tiết kiệm năng lượng và tiền bạc.'
      },
      {
        question: 'Chất dinh dưỡng nào là nguồn cung cấp năng lượng chủ yếu cho các hoạt động của cơ thể người?',
        options: ['Chất bột đường (Glucid/Carbohydrate)', 'Chất khoáng (Canxi, Sắt)', 'Vitamin (A, C, D)', 'Nước uống'],
        answerIndex: 0,
        hint: 'Có nhiều trong cơm, ngô, khoai, sắn, bánh mì.',
        explanation: 'Chất đường bột cung cấp 60-65% tổng nhu cầu năng lượng hàng ngày của cơ thể.'
      },
      {
        question: 'Việc bảo quản thực phẩm trong ngăn đá tủ lạnh (nhiệt độ dưới 0°C) có tác dụng gì?',
        options: [
          'Làm chậm hoặc ức chế sự phát triển của vi sinh vật gây ôi thiu',
          'Làm thức ăn chín nhanh hơn',
          'Tiêu diệt hoàn toàn 100% tất cả các loại vi khuẩn',
          'Tăng thêm hàm lượng chất đạm trong thịt cá'
        ],
        answerIndex: 0,
        hint: 'Nhiệt độ đóng băng ức chế hoạt động sinh học của vi khuẩn.',
        explanation: 'Nhiệt độ âm làm đóng băng nước, kìm hãm vi khuẩn phát triển, giúp lưu trữ thịt cá dài ngày.'
      },
      {
        question: 'Một bữa ăn hợp lý và cân đối dinh dưỡng cần có sự phối hợp của:',
        options: [
          'Đủ 4 nhóm thực phẩm: bột đường, chất đạm, chất béo, vitamin và khoáng chất',
          'Toàn bộ là các món chiên xào nhiều dầu mỡ để có nhiều năng lượng',
          'Chỉ ăn thịt và hải sản, không ăn rau xanh',
          'Chỉ uống nước ngọt có ga và ăn thức ăn nhanh đóng gói'
        ],
        answerIndex: 0,
        hint: 'Nguyên tắc tháp dinh dưỡng cân đối 4 nhóm thực phẩm.',
        explanation: 'Bữa ăn cân đối cần đầy đủ 4 nhóm dưỡng chất thiết yếu đảm bảo phát triển thể chất toàn diện.'
      },
      {
        question: 'Khu vực nào trong nhà ở cần được bố trí kín đáo nhưng đảm bảo thông thoáng và vệ sinh?',
        options: ['Khu vực vệ sinh, nhà tắm', 'Phòng khách', 'Khu vực thờ cúng', 'Phòng học tập'],
        answerIndex: 0,
        hint: 'Nơi phục vụ nhu cầu vệ sinh cá nhân hàng ngày.',
        explanation: 'Khu vực vệ sinh cần kín đáo, có cửa thông gió hoặc quạt hút để giữ không khí trong nhà trong lành.'
      }
    ]
  },

  // =============================================================
  // SEMESTER 2 - HỌC KỲ 2 (8 FINAL EXAMS)
  // =============================================================

  // 9. TOÁN HỌC - HK2 FINAL
  {
    id: 'quiz-g6-s2-final-math',
    title: 'Toán 6 - Đề Kiểm Tra Cuối Học Kỳ 2 (Tổng kết Năm học)',
    titleEn: 'Math 6 - Semester 2 Final Exam (Comprehensive Yearly Evaluation)',
    grade: 6,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi cuối năm tổng hợp toàn bộ chương trình: Phân số, số thập phân, phần trăm, góc, tia, đoạn thẳng, và xác suất thực nghiệm.',
    descriptionEn: 'Math 6 Semester 2 Final Exam covering Fractions, Decimals, Percentages, Geometry, and Empirical Probability.',
    questions: [
      {
        question: 'Kết quả của phép tính: (3/4) + (-1/2) là:',
        options: ['1/4', '2/2', '-1/4', '1/2'],
        answerIndex: 0,
        hint: 'Quy đồng mẫu số: -1/2 = -2/4. Khi đó 3/4 + (-2/4) = 1/4.',
        explanation: '3/4 - 2/4 = 1/4.'
      },
      {
        question: 'Tỉ số phần trăm của 15 và 60 là:',
        options: ['25%', '20%', '30%', '40%'],
        answerIndex: 0,
        hint: '(15 : 60) × 100%.',
        explanation: '(15 / 60) × 100% = 0.25 × 100% = 25%.'
      },
      {
        question: 'Góc có số đo bằng 120° là góc gì?',
        options: ['Góc tù', 'Góc nhọn', 'Góc vuông', 'Góc bẹt'],
        answerIndex: 0,
        hint: 'Góc nhọn < 90°, góc vuông = 90°, 90° < góc tù < 180°, góc bẹt = 180°.',
        explanation: 'Vì 90° < 120° < 180° nên góc 120° là góc tù.'
      },
      {
        question: 'Tung một đồng xu cân đối 20 lần, thấy có 12 lần xuất hiện mặt ngửa (N). Xác suất thực nghiệm xuất hiện mặt ngửa là:',
        options: ['12/20 = 3/5 (60%)', '8/20 = 2/5 (40%)', '1/2 (50%)', '12/8'],
        answerIndex: 0,
        hint: 'Xác suất thực nghiệm = Số lần xảy ra sự kiện / Tổng số lần thực hiện.',
        explanation: 'P = 12 / 20 = 3/5 = 60%.'
      },
      {
        question: 'Làm tròn số thập phân 18.736 đến hàng phần mười (chữ số thập phân thứ nhất) được kết quả là:',
        options: ['18.7', '18.8', '19.0', '18.74'],
        answerIndex: 0,
        hint: 'Chữ số ngay sau hàng phần mười là chữ số 3 (< 5) nên giữ nguyên.',
        explanation: 'Vì chữ số hàng phần trăm là 3 < 5 nên làm tròn thành 18.7.'
      },
      {
        question: 'Cho điểm M nằm giữa hai điểm A và B. Biết AM = 3 cm, AB = 8 cm. Độ dài đoạn thẳng MB là:',
        options: ['5 cm', '11 cm', '4 cm', '6 cm'],
        answerIndex: 0,
        hint: 'Vì M nằm giữa A và B nên AM + MB = AB.',
        explanation: 'MB = AB - AM = 8 - 3 = 5 cm.'
      },
      {
        question: 'Tìm x biết: (2/5) · x = -4/15',
        options: ['x = -2/3', 'x = 2/3', 'x = -8/75', 'x = -3/2'],
        answerIndex: 0,
        hint: 'x = (-4/15) : (2/5) = (-4/15) · (5/2).',
        explanation: 'x = (-4 × 5) / (15 × 2) = -20 / 30 = -2/3.'
      },
      {
        question: 'Bác An gửi tiết kiệm 50 triệu đồng với lãi suất 6% một năm. Sau một năm, số tiền lãi bác An nhận được là:',
        options: ['3.000.000 đồng', '300.000 đồng', '6.000.000 đồng', '53.000.000 đồng'],
        answerIndex: 0,
        hint: 'Tiền lãi = 50.000.000 × 6%.',
        explanation: '50.000.000 × 0.06 = 3.000.000 đồng.'
      }
    ]
  },

  // 10. NGỮ VĂN - HK2 FINAL
  {
    id: 'quiz-g6-s2-final-lit',
    title: 'Ngữ văn 6 - Đề Kiểm Tra Cuối Học Kỳ 2 (Tổng kết Đọc hiểu & Viết)',
    titleEn: 'Literature 6 - Semester 2 Final Exam (Comprehensive Yearly Evaluation)',
    grade: 6,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối kì 2 Ngữ văn 6: Truyện ngắn hiện đại, ký, thơ có yếu tố tự sự miêu tả, văn bản thông tin, biên bản và dấu câu.',
    descriptionEn: 'Literature Semester 2 final exam covering modern prose, travelogues, narrative poetry, and informational texts.',
    questions: [
      {
        question: 'Thể loại "Ký" (như Cô Tô của Nguyễn Tuân) có đặc điểm nổi bật nào?',
        options: [
          'Ghi chép lại những sự việc, con người có thật mà nhà văn tận mắt chứng kiến kèm cảm xúc chân thực',
          'Hoàn toàn hư cấu tưởng tượng không dựa trên bất kỳ sự thật nào',
          'Bắt buộc phải có cốt truyện kịch tính và kết thúc bất ngờ',
          'Luôn dùng loài vật làm nhân vật chính'
        ],
        answerIndex: 0,
        hint: 'Ký là thể loại phi hư cấu tôn trọng sự thật khách quan.',
        explanation: 'Ký ghi chép người thật, việc thật mà người viết trực tiếp trải nghiệm và ghi lại sinh động.'
      },
      {
        question: 'Trong văn bản "Thánh Gióng", hình tượng Thánh Gióng bay về trời sau khi đánh tan giặc Ân mang ý nghĩa gì?',
        options: [
          'Sự bất tử của người anh hùng cứu nước và tinh thần cống hiến vô tư không màng danh lợi',
          'Thể hiện nỗi sợ hãi triều đình phong kiến',
          'Gióng muốn đi du lịch khắp thế gian',
          'Thể hiện sự chia ly đau buồn của dân tộc'
        ],
        answerIndex: 0,
        hint: 'Gióng không ở lại nhận bổng lộc hay chức tước của nhà vua.',
        explanation: 'Bay về trời thể hiện sự hóa thân vào non sông đất nước, bất tử trong lòng nhân dân và không màng danh lợi.'
      },
      {
        question: 'Câu: "Trăng ơi... từ đâu đến? / Hay từ cánh rừng xa" sử dụng biện pháp tu từ nào?',
        options: ['Nhân hóa (gọi trăng ơi như người bạn)', 'Ẩn dụ chuyển đổi cảm giác', 'Nói giảm nói tránh', 'Hoán dụ lấy bộ phận chỉ toàn thể'],
        answerIndex: 0,
        hint: 'Tác giả Trần Đăng Khoa trò chuyện thân mật với vầng trăng.',
        explanation: 'Biện pháp nhân hóa khiến trăng trở thành người bạn tâm tình thân thương của tuổi thơ.'
      },
      {
        question: 'Mục đích chính của văn bản thông tin (như tờ hướng dẫn, bản tin) là gì?',
        options: [
          'Cung cấp thông tin chính xác, khách quan về một sự kiện hay hiện tượng cho người đọc',
          'Kể câu chuyện lãng mạn hư cấu để giải trí',
          'Thuyết phục người đọc thay đổi niềm tin tôn giáo',
          'Bộc lộ cảm xúc đau buồn của tác giả'
        ],
        answerIndex: 0,
        hint: 'Truyền tải thông tin tin cậy, rõ ràng, ngắn gọn.',
        explanation: 'Văn bản thông tin tập trung cung cấp dữ liệu, sự kiện thực tế một cách chuẩn xác, trực quan.'
      },
      {
        question: 'Dấu chấm phẩy (;) trong câu thường được dùng để làm gì?',
        options: [
          'Ngăn cách các vế trong một câu ghép phức tạp hoặc các bộ phận liệt kê lớn',
          'Đặt ở cuối câu trần thuật đã kết thúc trọn vẹn ý',
          'Báo hiệu lời nói trực tiếp của nhân vật',
          'Đánh dấu từ ngữ được trích dẫn nguyên văn'
        ],
        answerIndex: 0,
        hint: 'Dấu chấm phẩy có giá trị ngắt quãng dài hơn dấu phẩy nhưng ngắn hơn dấu chấm.',
        explanation: 'Dấu chấm phẩy dùng để phân tách các vế đẳng lập có quan hệ ý nghĩa chặt chẽ trong câu ghép.'
      },
      {
        question: 'Văn bản "Gió lạnh đầu mùa" của Thạch Lam gợi lên trong lòng người đọc bài học sâu sắc về:',
        options: [
          'Lòng trắc ẩn, tình yêu thương và sự sẻ chia ấm áp giữa những đứa trẻ nghèo khó',
          'Cách kiếm tiền trong mùa đông lạnh giá',
          'Tầm quan trọng của việc mặc áo ấm đắt tiền',
          'Sự cạnh tranh ghen tị giữa các gia đình láng giềng'
        ],
        answerIndex: 0,
        hint: 'Hành động chị em Sơn đem chiếc áo bông cũ cho cái Hiên mặc.',
        explanation: 'Truyện ca ngợi tình yêu thương, sự sẻ chia ấm áp tình người giữa cảnh nghèo khó ngày chớm đông.'
      },
      {
        question: 'Khi viết một bài văn thuyết minh thuật lại một sự kiện, người viết cần tuân thủ trình tự nào?',
        options: [
          'Trình tự thời gian diễn biến sự kiện (trước, trong và sau sự kiện)',
          'Tùy tiện đảo lộn không theo quy luật nào',
          'Chỉ kể phần kết thúc rồi dừng lại',
          'Chỉ tập trung vào cảm xúc cá nhân mà không nêu diễn biến sự kiện'
        ],
        answerIndex: 0,
        hint: 'Diễn biến sự việc theo dòng thời gian mạch lạc.',
        explanation: 'Thuật lại sự kiện cần đảm bảo trình tự thời gian rõ ràng để người đọc dễ dàng theo dõi.'
      },
      {
        question: 'Từ ngữ nào sau đây là từ mượn gốc Hán quen thuộc trong tiếng Việt?',
        options: ['Quốc gia', 'Nhà cửa', 'Bếp núc', 'Làng xóm'],
        answerIndex: 0,
        hint: '"Quốc" là nước, "gia" là nhà.',
        explanation: '"Quốc gia" là từ Hán Việt; "nhà cửa", "bếp núc", "làng xóm" là từ thuần Việt.'
      }
    ]
  },

  // 11. KHOA HỌC TỰ NHIÊN - HK2 FINAL
  {
    id: 'quiz-g6-s2-final-science',
    title: 'KHTN 6 - Đề Kiểm Tra Cuối Học Kỳ 2 (Đa dạng Sinh học, Lực & Năng lượng)',
    titleEn: 'Natural Science 6 - Semester 2 Final Exam (Comprehensive Yearly Evaluation)',
    grade: 6,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi cuối kì 2 tích hợp: Đa dạng thế giới sống, động vật có xương sống và không xương sống, lực ma sát, lực tiếp xúc, năng lượng và Trái Đất trong Hệ Mặt Trời.',
    descriptionEn: 'Natural Science Semester 2 final exam covering biodiversity, mechanics, energy, and planetary astronomy.',
    questions: [
      {
        question: 'Động vật nào sau đây thuộc nhóm Động vật có xương sống?',
        options: ['Cá chép', 'Mực ống', 'Giun đất', 'Tôm sú'],
        answerIndex: 0,
        hint: 'Có cột sống cấu tạo từ các đốt xương nối liền nhau.',
        explanation: 'Cá chép thuộc lớp Cá có xương sống; mực ống, giun đất, tôm là động vật không xương sống.'
      },
      {
        question: 'Lực nào sau đây là lực tiếp xúc?',
        options: [
          'Lực của tay đẩy cánh cửa mở ra',
          'Lực hấp dẫn của Trái Đất hút quả táo rơi',
          'Lực từ giữa hai thanh nam châm đặt cách nhau một khoảng',
          'Lực hút tĩnh điện giữa thước nhựa và mẩu giấy vụn'
        ],
        answerIndex: 0,
        hint: 'Lực tiếp xúc xuất hiện khi hai vật tiếp xúc cơ học trực tiếp vào nhau.',
        explanation: 'Tay phải chạm trực tiếp vào cánh cửa để đẩy là lực tiếp xúc; ba trường hợp còn lại là lực không tiếp xúc.'
      },
      {
        question: 'Nguồn năng lượng nào sau đây được coi là nguồn năng lượng tái tạo sạch và bền vững?',
        options: ['Năng lượng mặt trời và năng lượng gió', 'Năng lượng từ than đá', 'Năng lượng từ dầu mỏ', 'Năng lượng từ khí đốt tự nhiên'],
        answerIndex: 0,
        hint: 'Năng lượng vô tận từ thiên nhiên không cạn kiệt.',
        explanation: 'Mặt trời, gió, thủy triều là nguồn năng lượng tái tạo, không gây ô nhiễm khí nhà kính.'
      },
      {
        question: 'Hiện tượng ngày và đêm luân phiên trên Trái Đất là do:',
        options: [
          'Trái Đất có dạng hình cầu và tự quay quanh trục từ Tây sang Đông',
          'Mặt Trời di chuyển vòng quanh Trái Đất',
          'Mặt Trăng che khuất Mặt Trời tạo ra ban đêm',
          'Trái Đất ngừng quay mỗi khi trời tối'
        ],
        answerIndex: 0,
        hint: 'Trái Đất hình cầu nên một nửa luôn được chiếu sáng, nửa còn lại trong bóng tối.',
        explanation: 'Do Trái Đất hình cầu tự quay quanh trục nên mọi điểm lần lượt được chiếu sáng (ngày) và vào bóng tối (đêm).'
      },
      {
        question: 'Khi ô tô phanh gấp, lực ma sát giữa má phanh và bánh xe, cũng như giữa lốp xe và mặt đường có tác dụng gì?',
        options: [
          'Cản trở chuyển động, làm xe giảm tốc độ và dừng lại',
          'Thúc đẩy xe chạy nhanh hơn',
          'Giúp xe bay lên không trung',
          'Không có tác dụng gì đối với chuyển động của xe'
        ],
        answerIndex: 0,
        hint: 'Lực ma sát hãm chuyển động.',
        explanation: 'Lực ma sát cản trở chuyển động tương đối giữa lốp xe và mặt đường, giúp xe dừng lại an toàn.'
      },
      {
        question: 'Nấm mốc phát triển mạnh nhất trong điều kiện môi trường nào?',
        options: ['Ẩm ướt, ấm áp và thiếu ánh sáng', 'Khô ráo, nhiệt độ dưới 0°C', 'Nhiệt độ sôi 100°C', 'Môi trường chân không hoàn toàn'],
        answerIndex: 0,
        hint: 'Độ ẩm cao và nhiệt độ phòng thuận lợi cho bào tử nấm nảy mầm.',
        explanation: 'Nấm mốc ưa môi trường ẩm ướt, nhiệt độ ấm từ 25-30°C và có chất hữu cơ để dinh dưỡng.'
      },
      {
        question: 'Hành tinh nào trong Hệ Mặt Trời có vị trí gần Mặt Trời nhất?',
        options: ['Sao Thủy (Mercury)', 'Sao Kim (Venus)', 'Trái Đất (Earth)', 'Sao Hỏa (Mars)'],
        answerIndex: 0,
        hint: 'Thứ tự từ trong ra ngoài: Thủy, Kim, Địa, Hỏa, Mộc, Thổ, Thiên Vương, Hải Vương.',
        explanation: 'Sao Thủy là hành tinh đầu tiên gần Mặt Trời nhất với khoảng cách trung bình 58 triệu km.'
      },
      {
        question: 'Biện pháp nào sau đây giúp bảo vệ sự đa dạng sinh học tại Việt Nam?',
        options: [
          'Xây dựng các vườn quốc gia, khu bảo tồn thiên nhiên và nghiêm cấm săn bắt trái phép',
          'Phá rừng tự nhiên để trồng cây công nghiệp độc canh',
          'Đưa các loài sinh vật ngoại lai hung dữ vào rừng',
          'Đốt nương làm rẫy tràn lan trên sườn núi'
        ],
        answerIndex: 0,
        hint: 'Bảo vệ môi trường sống tự nhiên của muôn loài.',
        explanation: 'Thành lập vườn quốc gia và bảo tồn động thực vật quý hiếm là biện pháp then chốt gìn giữ đa dạng sinh học.'
      }
    ]
  },

  // 12. TIẾNG ANH - HK2 FINAL
  {
    id: 'quiz-g6-s2-final-english',
    title: 'Tiếng Anh 6 - Đề Kiểm Tra Cuối Học Kỳ 2 (Comprehensive Final Exam)',
    titleEn: 'English 6 - Semester 2 Final Exam (Global Success Comprehensive)',
    grade: 6,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối kỳ 2 tổng hợp: Television, Sports and Games, Cities of the World, Our Houses in the Future, Our Greener World, và Robots.',
    descriptionEn: 'English 6 Semester 2 final exam covering Units 7 to 12 (grammar, vocabulary, communication, and reading).',
    questions: [
      {
        question: 'In the future, robots will be able to _______ all the heavy housework for humans.',
        options: ['do', 'make', 'play', 'take'],
        answerIndex: 0,
        hint: 'Collocation: do housework (làm việc nhà).',
        explanation: 'Cụm từ cố định: "do housework" (làm công việc nhà).'
      },
      {
        question: 'If we plant more green trees, our air _______ cleaner and fresher.',
        options: ['will be', 'is', 'was', 'would be'],
        answerIndex: 0,
        hint: 'First conditional sentence: If + S + V(present simple), S + will + V.',
        explanation: 'Câu điều kiện loại 1 diễn tả khả năng có thể xảy ra: If + present simple, S + will + V nguyên thể.'
      },
      {
        question: 'Which TV channel do you watch most often, VTV1 _______ VTV3?',
        options: ['or', 'and', 'but', 'so'],
        answerIndex: 0,
        hint: 'Choice between two alternatives.',
        explanation: 'Liên từ "or" dùng để đưa ra sự lựa chọn giữa hai kênh truyền hình.'
      },
      {
        question: 'Pele is widely regarded as the greatest _______ player of all time.',
        options: ['football', 'badminton', 'tennis', 'volleyball'],
        answerIndex: 0,
        hint: 'The King of Football (Vua bóng đá người Brazil).',
        explanation: 'Pele là huyền thoại bóng đá thế giới được mệnh danh Vua bóng đá (King of Football).'
      },
      {
        question: 'London is famous for its red double-decker buses and Big Ben _______.',
        options: ['clock tower', 'temple', 'pagoda', 'desert'],
        answerIndex: 0,
        hint: 'Tháp đồng hồ Big Ben biểu tượng nước Anh.',
        explanation: 'Big Ben là tháp đồng hồ (clock tower) nổi tiếng tại Luân Đôn.'
      },
      {
        question: 'We should follow the 3Rs rule: Reduce, Reuse and _______ to protect our environment.',
        options: ['Recycle', 'Rebuild', 'Return', 'Remove'],
        answerIndex: 0,
        hint: '3 chữ R bảo vệ môi trường: Giảm thiểu, Tái sử dụng và Tái chế.',
        explanation: '3Rs = Reduce (Giảm thiểu), Reuse (Tái sử dụng), Recycle (Tái chế rác thải).'
      },
      {
        question: 'My brother played badminton with his classmates yesterday afternoon, _______ he was tired.',
        options: ['so', 'because', 'although', 'but'],
        answerIndex: 0,
        hint: 'Cause and effect: he played sports -> as a result, he was tired.',
        explanation: 'Liên từ "so" diễn tả kết quả của hành động chơi cầu lông trước đó.'
      },
      {
        question: 'Find the mistake in this sentence: "Our future house <u>will has</u> <u>solar panels</u> <u>on</u> <u>the roof</u>."',
        options: ['will has', 'solar panels', 'on', 'the roof'],
        answerIndex: 0,
        hint: 'After "will", we always use the bare infinitive "have".',
        explanation: 'Sau trợ động từ "will" phải dùng động từ nguyên thể "will have", không chia "will has".'
      }
    ]
  },

  // 13. LỊCH SỬ VÀ ĐỊA LÝ - HK2 FINAL
  {
    id: 'quiz-g6-s2-final-hisgeo',
    title: 'Lịch sử và Địa lý 6 - Đề Kiểm Tra Cuối Học Kỳ 2 (Toàn diện Cuối năm)',
    titleEn: 'History & Geography 6 - Semester 2 Final Exam (Comprehensive Yearly Evaluation)',
    grade: 6,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối kì 2: Nhà nước Văn Lang, Âu Lạc; khởi nghĩa Hai Bà Trưng, Bà Triệu; khí hậu, lớp vỏ Trái Đất, biển và đại dương, dân số thế giới.',
    descriptionEn: 'History & Geography Semester 2 final exam covering ancient Vietnamese kingdoms and physical climatology.',
    questions: [
      {
        question: 'Kinh đô của nhà nước Văn Lang thời các vua Hùng đóng tại địa danh nào ngày nay?',
        options: ['Phong Châu (Phú Thọ)', 'Cổ Loa (Đông Anh, Hà Nội)', 'Hoa Lư (Ninh Bình)', 'Thăng Long (Hà Nội)'],
        answerIndex: 0,
        hint: 'Vùng đất cội nguồn Bạch Hạc, Phong Châu bên bờ sông Thao.',
        explanation: 'Kinh đô nhà nước Văn Lang đóng ở Phong Châu (nay thuộc tỉnh Phú Thọ).'
      },
      {
        question: 'Tòa thành quân sự hình xoắn ốc độc đáo của nhà nước Âu Lạc dưới thời An Dương Vương là:',
        options: ['Thành Cổ Loa', 'Thành nhà Hồ', 'Kinh thành Huế', 'Thành Lam Kinh'],
        answerIndex: 0,
        hint: 'Thành có 9 vòng xoắn ốc xây bằng đất và hào nước bao quanh.',
        explanation: 'Thành Cổ Loa do An Dương Vương xây dựng có cấu trúc xoắn ốc kiên cố độc nhất vô nhị.'
      },
      {
        question: 'Khởi nghĩa Hai Bà Trưng bùng nổ vào năm nào để lật đổ ách thống trị nhà Đông Hán?',
        options: ['Mùa xuân năm 40', 'Năm 248', 'Năm 542', 'Năm 938'],
        answerIndex: 0,
        hint: '"Một xin rửa sạch nước thù / Hai xin dựng lại nghiệp xưa họ Hùng" (năm 40 sau Công nguyên).',
        explanation: 'Khởi nghĩa Hai Bà Trưng bùng nổ vào mùa xuân năm 40 tại Hát Môn.'
      },
      {
        question: 'Tầng khí quyển nào nằm sát bề mặt Trái Đất, nơi diễn ra hầu hết các hiện tượng thời tiết như mây, mưa, sấm sét?',
        options: ['Tầng đối lưu', 'Tầng bình lưu', 'Tầng giữa', 'Tầng nhiệt'],
        answerIndex: 0,
        hint: 'Tầng dày từ 0 đến khoảng 16km chứa 3/4 khối lượng khí quyển.',
        explanation: 'Tầng đối lưu chứa gần như toàn bộ hơi nước và là nơi diễn ra mọi hiện tượng mây mưa thời tiết.'
      },
      {
        question: 'Đại dương nào có diện tích và độ sâu trung bình lớn nhất thế giới?',
        options: ['Thái Bình Dương (Pacific Ocean)', 'Đại Tây Dương', 'Ấn Độ Dương', 'Bắc Băng Dương'],
        answerIndex: 0,
        hint: 'Chiếm gần 1/3 diện tích bề mặt Trái Đất với rãnh vực Mariana sâu nhất.',
        explanation: 'Thái Bình Dương rộng hơn 165 triệu km², lớn hơn toàn bộ diện tích lục địa trên Trái Đất gộp lại.'
      },
      {
        question: 'Ai là người lãnh đạo cuộc khởi nghĩa năm 248 với câu nói bất hủ: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông..."?',
        options: ['Bà Triệu (Triệu Thị Trinh)', 'Trưng Trắc', 'Trưng Nhị', 'Lê Chân'],
        answerIndex: 0,
        hint: 'Nữ anh hùng căn cứ tại núi Nưa (Triệu Sơn, Thanh Hóa).',
        explanation: 'Bà Triệu lãnh đạo cuộc khởi nghĩa kiên cường chống quân xâm lược nhà Ngô năm 248.'
      },
      {
        question: 'Độ muối trung bình của nước biển và đại dương trên thế giới xấp xỉ khoảng:',
        options: ['Khoảng 35‰ (35 phần nghìn)', 'Khoảng 35% (35 phần trăm)', 'Khoảng 5‰', 'Khoảng 100‰'],
        answerIndex: 0,
        hint: 'Trung bình trong 1000 gam nước biển có 35 gam muối khoáng hòa tan.',
        explanation: 'Độ mặn trung bình của nước biển toàn cầu là 35‰.'
      },
      {
        question: 'Chiến thắng lịch sử trên sông Bạch Đằng năm 938 của Ngô Quyền đã mở ra kỷ nguyên gì cho dân tộc?',
        options: [
          'Chấm dứt hơn 1000 năm Bắc thuộc, mở ra thời kỳ độc lập tự chủ lâu dài cho Tổ quốc',
          'Bắt đầu thời kỳ lệ thuộc phong kiến phương Bắc',
          'Thành lập nhà nước Văn Lang cổ đại',
          'Hoàn thành công cuộc dời đô về Thăng Long'
        ],
        answerIndex: 0,
        hint: 'Trận cọc gỗ đánh tan quân Nam Hán năm 938.',
        explanation: 'Chiến thắng Bạch Đằng năm 938 đặt dấu chấm hết vĩnh viễn cho nghìn năm Bắc thuộc, mở ra kỷ nguyên độc lập tự chủ.'
      }
    ]
  },

  // 14. TIN HỌC - HK2 FINAL
  {
    id: 'quiz-g6-s2-final-informatics',
    title: 'Tin học 6 - Đề Kiểm Tra Cuối Học Kỳ 2 (Soạn thảo, Bảng tính & Thuật toán)',
    titleEn: 'Informatics 6 - Semester 2 Final Exam (Comprehensive Yearly Evaluation)',
    grade: 6,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'technology',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối năm tổng hợp: Soạn thảo văn bản nâng cao, bảng biểu và đồ họa, sơ đồ tư duy, thuật toán tìm kiếm tuần tự và tìm kiếm nhị phân.',
    descriptionEn: 'Informatics Semester 2 final exam covering word processing, mind maps, flowchart algorithms, and binary search.',
    questions: [
      {
        question: 'Thuật toán tìm kiếm nhị phân (Binary Search) chỉ áp dụng được trên danh sách thỏa mãn điều kiện nào?',
        options: [
          'Danh sách đã được sắp xếp theo thứ tự (tăng dần hoặc giảm dần)',
          'Danh sách gồm các phần tử ngẫu nhiên hoàn toàn',
          'Danh sách phải có số lượng phần tử là số chẵn',
          'Danh sách chỉ gồm các số nguyên dương'
        ],
        answerIndex: 0,
        hint: 'Tìm kiếm nhị phân chia đôi danh sách tại mỗi bước so sánh.',
        explanation: 'Điều kiện tiên quyết của tìm kiếm nhị phân là dãy dữ liệu bắt buộc phải được sắp xếp thứ tự.'
      },
      {
        question: 'Trong phần mềm soạn thảo văn bản, tổ hợp phím tắt nào dùng để sao chép (Copy) đoạn văn bản được chọn?',
        options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + X', 'Ctrl + Z'],
        answerIndex: 0,
        hint: 'Ctrl + C là Copy, Ctrl + V là Paste.',
        explanation: 'Ctrl + C sao chép đối tượng vào bộ nhớ tạm (Clipboard).'
      },
      {
        question: 'Sơ đồ tư duy (Mind Map) đem lại lợi ích nổi bật nào trong học tập và ghi nhớ kiến thức?',
        options: [
          'Giúp liên kết các ý tưởng, tóm tắt bài học trực quan bằng từ khóa và hình ảnh màu sắc',
          'Tự động làm hộ bài tập về nhà cho học sinh',
          'Giúp máy tính không bao giờ bị nhiễm virus',
          'Thay thế hoàn toàn việc đọc sách giáo khoa'
        ],
        answerIndex: 0,
        hint: 'Tư duy não bộ thông qua nhánh cây, từ khóa và màu sắc.',
        explanation: 'Sơ đồ tư duy kích hoạt hai bán cầu não, giúp cấu trúc hóa kiến thức nhanh chóng và nhớ lâu.'
      },
      {
        question: 'Để biểu diễn thuật toán dưới dạng hình học trực quan, người ta sử dụng công cụ gì?',
        options: ['Sơ đồ khối (Flowchart)', 'Bảng tính Excel', 'Đoạn văn tự sự', 'Tệp âm thanh'],
        answerIndex: 0,
        hint: 'Dùng hình oval cho bắt đầu/kết thúc, hình thoi cho điều kiện rẽ nhánh, hình chữ nhật cho xử lý.',
        explanation: 'Sơ đồ khối dùng các hình khối quy ước để mô tả tuần tự các bước của thuật toán.'
      },
      {
        question: 'Trong sơ đồ khối thuật toán, hình thoi biểu diễn thao tác nào sau đây?',
        options: ['Kiểm tra điều kiện rẽ nhánh (Đúng / Sai)', 'Bắt đầu hoặc kết thúc thuật toán', 'Thực hiện phép tính toán thông thường', 'Nhập hoặc xuất dữ liệu'],
        answerIndex: 0,
        hint: 'Hình thoi luôn có hai nhánh rẽ ra: Đúng (Yes) và Sai (No).',
        explanation: 'Hình thoi thể hiện thao tác so sánh, kiểm tra điều kiện logic để quyết định hướng đi tiếp theo.'
      },
      {
        question: 'Khi chèn hình ảnh vào văn bản, tùy chọn căn chỉnh nào giúp văn bản tự động bao quanh khung hình chữ nhật của ảnh?',
        options: ['Square (hoặc Tight)', 'In Line with Text', 'Behind Text', 'Top and Bottom'],
        answerIndex: 0,
        hint: 'Square giúp chữ uốn lượn gọn gàng xung quanh mép ảnh.',
        explanation: 'Wrap Text > Square làm chữ chạy ôm sát quanh khung ảnh một cách cân đối, thẩm mỹ.'
      },
      {
        question: 'Cho dãy số đã sắp xếp: [2, 5, 8, 12, 16, 23, 38, 45]. Số bước tối đa để tìm phần tử bằng thuật toán tìm kiếm nhị phân là:',
        options: ['Không quá 3 bước so sánh', '8 bước so sánh', '16 bước so sánh', '24 bước so sánh'],
        answerIndex: 0,
        hint: '2³ = 8 phần tử, mỗi lần chia đôi nên tối đa chỉ cần log₂(8) = 3 lần so sánh.',
        explanation: 'Với dãy 8 phần tử, tìm kiếm nhị phân mất tối đa 3 lần so sánh để tìm thấy hoặc kết luận không có.'
      },
      {
        question: 'Thao tác nào sau đây là an toàn khi tải tệp tài liệu học tập từ Internet về máy tính?',
        options: [
          'Chỉ tải từ các nguồn uy tín, website chính thức và quét virus trước khi mở',
          'Mở ngay mọi tệp đính kèm trong thư rác không rõ người gửi',
          'Tắt toàn bộ phần mềm diệt virus trước khi tải về',
          'Cung cấp mật khẩu mạng xã hội để được cấp link tải miễn phí'
        ],
        answerIndex: 0,
        hint: 'Cảnh giác với mã độc và lừa đảo qua mạng.',
        explanation: 'Luôn kiểm tra nguồn tải uy tín và quét virus tệp tải về để bảo vệ an toàn cho máy tính và dữ liệu.'
      }
    ]
  },

  // 15. GIÁO DỤC CÔNG DÂN - HK2 FINAL
  {
    id: 'quiz-g6-s2-final-civics',
    title: 'GDCD 6 - Đề Kiểm Tra Cuối Học Kỳ 2 (Pháp luật & Quyền Trẻ em)',
    titleEn: 'Civic Education 6 - Semester 2 Final Exam (Comprehensive Yearly Evaluation)',
    grade: 6,
    semester: 2,
    subject: 'Giáo dục công dân',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'civics',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối năm tổng kết GDCD: Ứng phó với biến cố, Quyền cơ bản của trẻ em, Quyền bất khả xâm phạm về thân thể, Công dân nước CHXHCN Việt Nam.',
    descriptionEn: 'Civic Education Semester 2 final exam covering children rights, personal bodily integrity, coping with emergencies, and citizenship.',
    questions: [
      {
        question: 'Trẻ em Việt Nam được hưởng 4 nhóm quyền cơ bản nào theo Luật Trẻ em và Công ước Quốc tế?',
        options: [
          'Nhóm quyền Sống còn, Bảo vệ, Phát triển và Tham gia',
          'Nhóm quyền vui chơi, mua sắm, tự do đi lại và tiêu tiền',
          'Nhóm quyền lao động nặng, tự do kinh doanh và bầu cử sớm',
          'Nhóm quyền không cần học tập và miễn trừ mọi nghĩa vụ'
        ],
        answerIndex: 0,
        hint: 'Bốn nhóm quyền trụ cột bảo đảm trẻ phát triển toàn diện.',
        explanation: 'Luật Trẻ em 2016 quy định 4 nhóm quyền: Sống còn, Bảo vệ, Phát triển và Tham gia.'
      },
      {
        question: 'Ai là công dân nước Cộng hòa xã hội chủ nghĩa Việt Nam?',
        options: [
          'Người có quốc tịch Việt Nam',
          'Người đang sinh sống trên lãnh thổ Việt Nam bất kể quốc tịch nào',
          'Người biết nói tiếng Việt trôi chảy',
          'Người gốc Việt mang quốc tịch nước ngoài'
        ],
        answerIndex: 0,
        hint: 'Căn cứ pháp lý duy nhất để xác định công dân một quốc gia là quốc tịch.',
        explanation: 'Hiến pháp quy định: Công dân nước CHXHCN Việt Nam là người có quốc tịch Việt Nam.'
      },
      {
        question: 'Quyền bất khả xâm phạm về thân thể của công dân có nghĩa là gì?',
        options: [
          'Không ai bị bắt nếu không có quyết định của Tòa án, quyết định hoặc phê chuẩn của Viện kiểm sát (trừ trường hợp phạm tội quả tang)',
          'Không ai được phép chụp ảnh người khác',
          'Mọi người đều được miễn phí khám chữa bệnh',
          'Công dân không bao giờ bị xử lý kỷ luật'
        ],
        answerIndex: 0,
        hint: 'Bảo vệ tính mạng, sức khỏe và tự do thân thể của con người.',
        explanation: 'Quyền bất khả xâm phạm về thân thể ngăn cấm mọi hành vi bắt, giam giữ người tùy tiện trái pháp luật.'
      },
      {
        question: 'Khi gặp sự cố cháy nổ trong nhà cao tầng, kỹ năng thoát hiểm đúng đắn nào cần thực hiện ngay?',
        options: [
          'Dùng khăn ướt bịt mũi miệng, cúi thấp người men theo tường và di chuyển bằng cầu thang bộ',
          'Chạy ngay vào thang máy để xuống tầng trệt thật nhanh',
          'Nhảy ngay từ tầng cao xuống đất',
          'Trốn vào trong tủ quần áo hoặc gầm giường đóng chặt cửa phòng'
        ],
        answerIndex: 0,
        hint: 'Không dùng thang máy vì mất điện; khói độc bốc lên cao nên cần bò sát mặt sàn.',
        explanation: 'Khăn ướt lọc khói độc, cúi thấp tránh hít khí CO, và tuyệt đối không đi thang máy khi hỏa hoạn.'
      },
      {
        question: 'Hành vi nào sau đây vi phạm quyền được bảo vệ của trẻ em?',
        options: [
          'Bắt trẻ em bỏ học để đi làm thuê nặng nhọc kiếm tiền nuôi gia đình',
          'Tiêm vắc-xin phòng bệnh định kỳ miễn phí cho trẻ em',
          'Tổ chức cho trẻ em tham gia câu lạc bộ đọc sách',
          'Lắng nghe ý kiến của trẻ em trong sinh hoạt gia đình'
        ],
        answerIndex: 0,
        hint: 'Bóc lột sức lao động trẻ em là hành vi bị pháp luật nghiêm cấm.',
        explanation: 'Ép buộc trẻ em bỏ học để lao động kiếm tiền là hành vi bóc lột, vi phạm nghiêm trọng quyền trẻ em.'
      },
      {
        question: 'Khi bị một người lạ tiếp cận, rủ rê đi chơi hoặc có hành vi đụng chạm thân thể không an toàn, em cần:',
        options: [
          'Kiên quyết nói "Không!", lùi xa hét lớn kêu gọi sự giúp đỡ của người xung quanh và báo ngay cho cha mẹ, thầy cô',
          'Im lặng nghe theo lời người lạ vì sợ bị đánh',
          'Giữ bí mật tuyệt đối không kể cho ai biết',
          'Nhận tiền hoặc quà bánh của người lạ rồi đi theo họ'
        ],
        answerIndex: 0,
        hint: 'Nguyên tắc 5 ngón tay và quy tắc phòng chống xâm hại cơ thể.',
        explanation: 'Nói "Không", chạy đến nơi đông người cầu cứu và báo cho người lớn đáng tin cậy để được bảo vệ kịp thời.'
      },
      {
        question: 'Bổn phận quan trọng hàng đầu của học sinh đối với gia đình là gì?',
        options: [
          'Kính trọng, yêu thương, vâng lời ông bà cha mẹ và chăm chỉ học hành',
          'Đòi hỏi cha mẹ mua sắm đồ đắt tiền theo ý mình',
          'So sánh điều kiện gia đình mình với bạn bè',
          'Bỏ mặc việc nhà để cha mẹ làm hết'
        ],
        answerIndex: 0,
        hint: 'Đạo hiếu và lòng biết ơn đối với công ơn sinh thành dưỡng dục.',
        explanation: 'Yêu thương, kính trọng cha mẹ và chăm ngoan học giỏi là bổn phận thiêng liêng của con cái.'
      },
      {
        question: 'Số điện thoại tổng đài quốc gia bảo vệ trẻ em tại Việt Nam là số nào?',
        options: ['111', '113', '114', '115'],
        answerIndex: 0,
        hint: 'Tổng đài 3 chữ số 1 miễn phí cước gọi 24/7 bảo vệ quyền trẻ em.',
        explanation: 'Tổng đài điện thoại quốc gia bảo vệ trẻ em có đầu số ngắn gọn là 111 (miễn cước gọi).'
      }
    ]
  },

  // 16. CÔNG NGHỆ - HK2 FINAL
  {
    id: 'quiz-g6-s2-final-tech',
    title: 'Công nghệ 6 - Đề Kiểm Tra Cuối Học Kỳ 2 (Trang phục & Đồ dùng Điện)',
    titleEn: 'Technology 6 - Semester 2 Final Exam (Comprehensive Yearly Evaluation)',
    grade: 6,
    semester: 2,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'technology',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra cuối năm Công nghệ 6: Các loại vải may mặc, phối hợp trang phục, sử dụng và bảo quản trang phục, đồ dùng điện quang, điện nhiệt và tiết kiệm điện.',
    descriptionEn: 'Technology Semester 2 final exam covering textiles, garment care, electrical appliances, and energy conservation.',
    questions: [
      {
        question: 'Vải sợi thiên nhiên (như vải bông cotton, vải tơ tằm) có đặc tính nổi bật nào?',
        options: [
          'Hút ẩm tốt, mặc thoáng mát, dễ bị nhàu khi vò và giặt lâu khô hơn sợi nhân tạo',
          'Hoàn toàn không thấm mồ hôi, bóng láng và không bao giờ bị nhàu',
          'Rất cứng, chịu nhiệt kém và dễ bị biến dạng ở nhiệt độ thấp',
          'Cháy có mùi khét như mùi nhựa ni-lông và tro vón cục cứng'
        ],
        answerIndex: 0,
        hint: 'Sợi từ cây bông hoặc kén tằm thân thiện với làn da nhưng dễ nhăn.',
        explanation: 'Vải sợi thiên nhiên thấm hút mồ hôi tuyệt vời, thoáng khí nhưng nhược điểm là dễ nhàu nát.'
      },
      {
        question: 'Đèn LED được ưa chuộng và sử dụng rộng rãi hiện nay vì ưu điểm vượt trội nào?',
        options: [
          'Hiệu suất phát quang cao, tiết kiệm điện năng đến 80% và tuổi thọ rất bền',
          'Tỏa rất nhiều nhiệt lượng làm ấm căn phòng mùa đông',
          'Có giá thành rẻ hơn nến và đèn dầu cổ truyền',
          'Dễ vỡ và cần thay bóng đèn liên tục mỗi tuần'
        ],
        answerIndex: 0,
        hint: 'Công nghệ diot phát quang hiện đại nhất hiện nay.',
        explanation: 'Đèn LED tiêu thụ rất ít điện năng, phát sáng mát mẻ và có tuổi thọ lên tới hàng chục nghìn giờ.'
      },
      {
        question: 'Người có vóc dáng gầy và cao nên chọn trang phục thế nào để tạo cảm giác đầy đặn và cân đối hơn?',
        options: [
          'Quần áo có màu sắc sáng, kẻ sọc ngang hoặc hoa văn lớn, chất liệu hơi bồng',
          'Quần áo màu đen tối, kẻ sọc dọc mảnh và bó sát cơ thể',
          'Quần áo dài quét đất màu xám tro',
          'Trang phục may bằng vải mỏng dính vào người'
        ],
        answerIndex: 0,
        hint: 'Kẻ sọc ngang và màu sáng tạo cảm giác mở rộng bề ngang.',
        explanation: 'Màu sáng kết hợp sọc ngang đánh lừa thị giác giúp cơ thể gầy trông tròn trịa, cân đối hơn.'
      },
      {
        question: 'Đồ dùng điện nào sau đây biến đổi trực tiếp điện năng thành nhiệt năng phục vụ đời sống?',
        options: ['Bàn là điện, nồi cơm điện, ấm đun nước điện', 'Quạt trần điện', 'Máy hút bụi', 'Máy xay sinh tố'],
        answerIndex: 0,
        hint: 'Biến điện thành nhiệt để làm nóng, nấu chín hoặc là phẳng quần áo.',
        explanation: 'Bàn là, nồi cơm, ấm đun chuyển điện năng thành nhiệt năng qua dây đốt nóng điện trở.'
      },
      {
        question: 'Kí hiệu bàn là có dấu một chấm (•) trên nhãn mác quần áo có ý nghĩa gì?',
        options: [
          'Chỉ được là ở nhiệt độ thấp (dưới 110°C, thích hợp với sợi tổng hợp như nilon, polyester)',
          'Được là ở nhiệt độ tối đa 200°C',
          'Tuyệt đối cấm không được là ủi',
          'Chỉ được giặt khô bằng hóa chất'
        ],
        answerIndex: 0,
        hint: 'Số chấm biểu thị mức nhiệt: 1 chấm = thấp, 2 chấm = trung bình, 3 chấm = cao.',
        explanation: 'Biểu tượng bàn là 1 chấm chỉ thị mức nhiệt độ thấp để tránh làm sun quéo sợi nhân tạo.'
      },
      {
        question: 'Khi sử dụng nồi cơm điện, hành vi nào sau đây giúp nồi bền đẹp và an toàn?',
        options: [
          'Lau khô mặt ngoài của lòng nồi trước khi đặt vào vỏ và cắm điện',
          'Dùng thìa kim loại sắc nhọn chà mạnh vào đáy lòng nồi để cạo cháy',
          'Để nước tràn vào mâm nhiệt trong thân nồi',
          'Rút phích cắm điện bằng cách giật mạnh dây dẫn điện'
        ],
        answerIndex: 0,
        hint: 'Tránh ẩm ướt mâm nhiệt gây đoản mạch và hỏng rơ-le.',
        explanation: 'Lau khô đáy và thân ngoài của lòng nồi bảo vệ mâm nhiệt khô ráo, tiếp xúc đều và phòng cháy chập.'
      },
      {
        question: 'Nhãn năng lượng dán trên các thiết bị điện gia dụng (tủ lạnh, máy giặt, điều hòa) có 5 sao biểu thị:',
        options: [
          'Cấp độ tiết kiệm điện năng cao nhất (tiết kiệm điện tối ưu nhất)',
          'Thiết bị tiêu tốn điện năng nhiều nhất',
          'Thiết bị có giá thành rẻ nhất thị trường',
          'Thiết bị có kích thước to nhất'
        ],
        answerIndex: 0,
        hint: 'Càng nhiều sao càng tiết kiệm điện (từ 1 đến 5 sao).',
        explanation: 'Theo Bộ Công Thương, 5 sao là cấp độ hiệu suất năng lượng cao nhất, siêu tiết kiệm điện.'
      },
      {
        question: 'Phương pháp bảo quản trang phục nào sau đây giúp quần áo bền màu và giữ dáng lâu nhất?',
        options: [
          'Phân loại quần áo màu và trắng trước khi giặt, phơi ở nơi thoáng gió tránh nắng gắt',
          'Giặt chung tất cả các loại quần áo màu với thuốc tẩy nồng độ cao',
          'Phơi quần áo len ướt sũng bằng móc treo thẳng đứng dưới nắng chói chang',
          'Cất quần áo còn ẩm ướt vào sâu trong tủ kín nhiều ngày'
        ],
        answerIndex: 0,
        hint: 'Nắng gắt làm giòn sợi vải và phai màu nhanh.',
        explanation: 'Phân loại đồ và phơi nơi bóng râm thoáng mát giữ sợi vải dẻo dai và màu sắc tươi mới lâu dài.'
      }
    ]
  }
];
