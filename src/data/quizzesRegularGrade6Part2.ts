import { CurriculumQuiz } from './curriculumData';

/**
 * Additional Authentic 15-Minute Regular Assessment Tests (Đề Kiểm tra Thường xuyên mở rộng) for Grade 6
 * Covers comprehensive unit-by-unit syllabus for all 8 subjects in Semesters 1 and 2.
 */
export const ADDITIONAL_GRADE_6_REGULAR_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // SEMESTER 1 - CÁC ĐỀ KIỂM TRA THƯỜNG XUYÊN MỞ RỘNG (HK1)
  // =========================================================================

  // 1. TOÁN HỌC 6 - ĐỀ THƯỜNG XUYÊN 2 (HK1)
  {
    id: 'quiz-g6-s1-math-regular-2',
    title: 'Toán 6 - Kiểm tra Thường xuyên (15 phút): Số nguyên ℤ & Phép cộng trừ số nguyên',
    titleEn: 'Math 6 - Regular Assessment (15 mins): Integers & Integer Operations',
    grade: 6,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về tập hợp số nguyên ℤ, số nguyên âm biểu diễn nhiệt độ, độ cao, số đối và quy tắc cộng trừ hai số nguyên.',
    descriptionEn: 'Quick 15-min test on negative integers, opposite numbers, and addition/subtraction rules in Z.',
    questions: [
      {
        question: 'Tập hợp các số nguyên ℤ bao gồm:',
        options: [
          'Số nguyên âm, số 0 và số nguyên dương',
          'Chỉ gồm các số nguyên dương',
          'Chỉ gồm các số nguyên âm',
          'Các số nguyên dương và số nguyên âm, không có số 0'
        ],
        answerIndex: 0,
        hint: 'Tập ℤ = {..., -2, -1, 0, 1, 2, ...}.',
        explanation: 'Tập hợp số nguyên ℤ gồm số nguyên âm, số 0 và số nguyên dương.'
      },
      {
        question: 'Số đối của số nguyên -15 là:',
        options: ['15', '-15', '0', '1/15'],
        answerIndex: 0,
        hint: 'Số đối của a là -a; -(-15) = 15.',
        explanation: 'Số đối của -15 là 15 vì (-15) + 15 = 0.'
      },
      {
        question: 'Kết quả của phép tính (-8) + (-12) là:',
        options: ['-20', '20', '-4', '4'],
        answerIndex: 0,
        hint: 'Cộng hai số nguyên cùng dấu âm: cộng hai phần tự nhiên rồi đặt dấu trừ đằng trước.',
        explanation: '(-8) + (-12) = -(8 + 12) = -20.'
      },
      {
        question: 'Tính giá trị của biểu thức: 15 - 25',
        options: ['-10', '10', '-40', '40'],
        answerIndex: 0,
        hint: 'a - b = a + (-b). 15 + (-25) = -(25 - 15) = -10.',
        explanation: '15 - 25 = -10.'
      },
      {
        question: 'Điểm -3 cách điểm 0 trên trục số bao nhiêu đơn vị?',
        options: ['3 đơn vị', '-3 đơn vị', '6 đơn vị', '0 đơn vị'],
        answerIndex: 0,
        hint: 'Khoảng cách từ điểm a đến 0 trên trục số luôn là một số không âm (|a|).',
        explanation: 'Khoảng cách từ điểm -3 đến điểm 0 trên trục số là |-3| = 3 đơn vị.'
      },
      {
        question: 'Nhiệt độ ban ngày là -2°C, ban đêm giảm thêm 5°C. Nhiệt độ ban đêm là:',
        options: ['-7°C', '3°C', '-3°C', '7°C'],
        answerIndex: 0,
        hint: 'Giảm 5°C nghĩa là làm phép trừ 5: (-2) - 5 = -7.',
        explanation: '(-2) - 5 = -7°C.'
      },
      {
        question: 'Sắp xếp các số nguyên sau theo thứ tự tăng dần: -7; 0; 5; -12; 3',
        options: [
          '-12; -7; 0; 3; 5',
          '-7; -12; 0; 3; 5',
          '5; 3; 0; -7; -12',
          '0; -7; -12; 3; 5'
        ],
        answerIndex: 0,
        hint: 'Số nguyên âm có phần tự nhiên càng lớn thì càng bé: -12 < -7 < 0 < 3 < 5.',
        explanation: 'Thứ tự từ nhỏ đến lớn: -12 < -7 < 0 < 3 < 5.'
      },
      {
        question: 'Kết quả của phép tính (-5) × 6 là:',
        options: ['-30', '30', '-11', '1'],
        answerIndex: 0,
        hint: 'Tích của hai số nguyên khác dấu luôn là một số nguyên âm.',
        explanation: '(-5) × 6 = -30.'
      }
    ]
  },

  // 2. TOÁN HỌC 6 - ĐỀ THƯỜNG XUYÊN 3 (HK1)
  {
    id: 'quiz-g6-s1-math-regular-3',
    title: 'Toán 6 - Kiểm tra Thường xuyên (15 phút): Tam giác đều, Hình vuông & Lục giác đều',
    titleEn: 'Math 6 - Regular Assessment (15 mins): Regular Polygons & Symmetry',
    grade: 6,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về nhận biết hình học trực quan: Tam giác đều, hình vuông, lục giác đều, hình thoi, hình chữ nhật và trục đối xứng.',
    descriptionEn: 'Quick 15-min test on equilateral triangles, squares, regular hexagons, and lines of symmetry.',
    questions: [
      {
        question: 'Hình tam giác đều có đặc điểm nào dưới đây?',
        options: [
          '3 cạnh bằng nhau và 3 góc bằng nhau (bằng 60°)',
          'Chỉ có 2 cạnh bằng nhau',
          'Có 1 góc vuông',
          '3 cạnh có độ dài khác nhau'
        ],
        answerIndex: 0,
        hint: 'Tam giác đều là tam giác có 3 cạnh bằng nhau.',
        explanation: 'Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng 60°.'
      },
      {
        question: 'Hình lục giác đều có bao nhiêu cạnh bằng nhau và bao nhiêu đường chéo chính?',
        options: [
          '6 cạnh bằng nhau và 3 đường chéo chính',
          '6 cạnh bằng nhau và 6 đường chéo chính',
          '8 cạnh bằng nhau và 4 đường chéo chính',
          '5 cạnh bằng nhau và 2 đường chéo chính'
        ],
        answerIndex: 0,
        hint: 'Lục giác đều gồm 6 tam giác đều ghép lại, có 3 đường chéo chính cắt nhau tại tâm.',
        explanation: 'Lục giác đều có 6 cạnh bằng nhau và đúng 3 đường chéo chính đi qua tâm đối xứng.'
      },
      {
        question: 'Chu vi của một hình vuông có cạnh bằng 5 cm là:',
        options: ['20 cm', '25 cm²', '10 cm', '15 cm'],
        answerIndex: 0,
        hint: 'Chu vi hình vuông = cạnh × 4.',
        explanation: 'P = 5 × 4 = 20 cm.'
      },
      {
        question: 'Hình vuông có bao nhiêu trục đối xứng?',
        options: ['4', '2', '1', '8'],
        answerIndex: 0,
        hint: 'Gồm 2 đường trung trực của các cạnh đối và 2 đường chéo.',
        explanation: 'Hình vuông có đúng 4 trục đối xứng.'
      },
      {
        question: 'Hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm. Diện tích của hình chữ nhật là:',
        options: ['40 cm²', '26 cm', '13 cm²', '80 cm²'],
        answerIndex: 0,
        hint: 'S = chiều dài × chiều rộng.',
        explanation: 'S = 8 × 5 = 40 cm².'
      },
      {
        question: 'Hình thoi có độ dài hai đường chéo là 6 cm và 8 cm. Diện tích hình thoi là:',
        options: ['24 cm²', '48 cm²', '14 cm²', '28 cm²'],
        answerIndex: 0,
        hint: 'Diện tích hình thoi bằng nửa tích hai đường chéo: S = (d₁ × d₂) : 2.',
        explanation: 'S = (6 × 8) : 2 = 48 : 2 = 24 cm².'
      },
      {
        question: 'Biển báo giao thông hình tròn có bao nhiêu trục đối xứng?',
        options: ['Vô số trục đối xứng', '1 trục đối xứng', '2 trục đối xứng', '4 trục đối xứng'],
        answerIndex: 0,
        hint: 'Mọi đường thẳng đi qua tâm của hình tròn đều là trục đối xứng.',
        explanation: 'Hình tròn có vô số trục đối xứng đi qua tâm.'
      },
      {
        question: 'Chữ cái in hoa nào sau đây có tâm đối xứng?',
        options: ['Chữ O', 'Chữ A', 'Chữ M', 'Chữ V'],
        answerIndex: 0,
        hint: 'Quay nửa vòng (180°) quanh tâm thì chữ vẫn trùng khớp với chính nó.',
        explanation: 'Chữ O, chữ S, chữ H có tâm đối xứng. Chữ A, M, V chỉ có trục đối xứng.'
      }
    ]
  },

  // 3. NGỮ VĂN 6 - ĐỀ THƯỜNG XUYÊN 2 (HK1)
  {
    id: 'quiz-g6-s1-lit-regular-2',
    title: 'Ngữ văn 6 - Kiểm tra Thường xuyên (15 phút): Truyền thuyết dân gian & Từ mượn',
    titleEn: 'Literature 6 - Regular Assessment (15 mins): Legends & Borrowed Words',
    grade: 6,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về truyền thuyết Thánh Gióng, Sơn Tinh Thủy Tinh, nhân vật lịch sử và phân biệt từ thuần Việt với từ mượn Hán Việt.',
    descriptionEn: 'Quick 15-min test on Vietnamese legends (Thanh Giong, Son Tinh), folk motifs, and borrowed Sino-Vietnamese words.',
    questions: [
      {
        question: 'Hình tượng nhân vật Thánh Gióng đánh giặc Ân tượng trưng cho điều gì?',
        options: [
          'Sức mạnh quật khởi và tinh thần đoàn kết chống giặc ngoại xâm của nhân dân ta',
          'Sự giàu có của làng Phù Đổng',
          'Tài năng chế tạo vũ khí sắt',
          'Sức mạnh thần thánh của loài ngựa'
        ],
        answerIndex: 0,
        hint: 'Gióng lớn nhanh như thổi nhờ cơm cà của dân làng gom góp.',
        explanation: 'Thánh Gióng là biểu tượng bất tử cho ý chí chống ngoại xâm quật cường của dân tộc Việt Nam.'
      },
      {
        question: 'Chi tiết Thánh Gióng sau khi đánh tan giặc đã bay về trời có ý nghĩa gì?',
        options: [
          'Bất tử hóa người anh hùng cứu nước, công đức vô tư không màng danh lợi',
          'Vì Gióng sợ triều đình phong thưởng',
          'Vì ngựa sắt hết cỏ ăn',
          'Vì Gióng không muốn gặp lại mẹ'
        ],
        answerIndex: 0,
        hint: 'Người anh hùng đánh giặc xong thanh thản về trời, sống mãi trong lòng dân.',
        explanation: 'Hình ảnh Gióng về trời thể hiện sự tôn vinh tuyệt đối và bất tử hóa lòng yêu nước trong dân gian.'
      },
      {
        question: 'Trong truyện "Sơn Tinh, Thủy Tinh", nhân vật Sơn Tinh tượng trưng cho điều gì?',
        options: [
          'Khát vọng và sức mạnh kiên cường của nhân dân chế ngự thiên tai bão lũ',
          'Sức mạnh tàn phá của bão lũ',
          'Sự giàu có của các vị vua Hùng',
          'Nghề đánh bắt cá nước ngọt'
        ],
        answerIndex: 0,
        hint: 'Nước dâng cao bao nhiêu, núi cao lên bấy nhiêu.',
        explanation: 'Sơn Tinh là biểu tượng của tinh thần đắp đê ngăn lũ, chinh phục tự nhiên của người Việt cổ.'
      },
      {
        question: 'Từ nào sau đây là từ mượn tiếng Hán (từ Hán Việt)?',
        options: ['Quốc gia', 'Nhà cửa', 'Ăn uống', 'Đi đứng'],
        answerIndex: 0,
        hint: '"Quốc" là nước, "gia" là nhà.',
        explanation: '"Quốc gia" là từ mượn Hán Việt. "Nhà cửa", "ăn uống", "đi đứng" là từ thuần Việt.'
      },
      {
        question: 'Truyền thuyết là thể loại truyện dân gian kể về:',
        options: [
          'Các nhân vật và sự kiện lịch sử trong quá khứ có yếu tố hoang đường kì ảo',
          'Chỉ kể về các loài vật trong rừng sâu',
          'Chỉ kể về chuyện cười vui nhộn',
          'Các câu chuyện khoa học viễn tưởng tương lai'
        ],
        answerIndex: 0,
        hint: 'Gắn liền với các nhân vật và sự kiện lịch sử nhưng được truyền thuyết hóa.',
        explanation: 'Truyền thuyết kể về sự kiện, nhân vật lịch sử qua lăng kính hư cấu thần kì thể hiện thái độ nhân dân.'
      },
      {
        question: 'Câu tục ngữ nào sau đây thể hiện truyền thống "Uống nước nhớ nguồn"?',
        options: [
          'Ăn quả nhớ kẻ trồng cây',
          'Gần mực thì đen, gần đèn thì rạng',
          'Có công mài sắt có ngày nên kim',
          'Nước chảy đá mòn'
        ],
        answerIndex: 0,
        hint: 'Nhớ ơn người gieo trồng chăm sóc để ta có trái ngọt thưởng thức.',
        explanation: '"Ăn quả nhớ kẻ trồng cây" răn dạy lòng biết ơn với người tạo dựng thành quả.'
      },
      {
        question: 'Vua Hùng kén rể bằng các lễ vật sính lễ gồm những gì?',
        options: [
          'Cơm nếp trăm nề, bánh chưng trăm tiệp, voi chín ngà, gà chín cựa, ngựa chín hồng mao',
          'Vàng bạc châu báu đầy mâm',
          'Gấm vóc lụa là phương Tây',
          'Thóc lúa nghìn bồ'
        ],
        answerIndex: 0,
        hint: 'Các sản vật độc đáo của vùng đồi núi trung du Bắc Bộ.',
        explanation: 'Vua Hùng ra điều kiện: voi chín ngà, gà chín cựa, ngựa chín hồng mao, mỗi thứ một đôi.'
      },
      {
        question: 'Mục đích chính của việc mượn từ ngữ từ các ngôn ngữ khác là:',
        options: [
          'Làm phong phú thêm vốn từ ngữ tiếng Việt khi cần biểu thị các khái niệm mới',
          'Thay thế hoàn toàn tiếng mẹ đẻ',
          'Để khoe khoang vốn ngoại ngữ',
          'Làm tiếng Việt khó hiểu hơn'
        ],
        answerIndex: 0,
        hint: 'Tiếp thu tinh hoa ngôn ngữ để làm giàu cho tiếng Việt.',
        explanation: 'Mượn từ là hiện tượng tự nhiên nhằm đáp ứng nhu cầu giao tiếp và làm giàu kho tàng từ vựng.'
      }
    ]
  },

  // 4. KHOA HỌC TỰ NHIÊN 6 - ĐỀ THƯỜNG XUYÊN 2 (HK1)
  {
    id: 'quiz-g6-s1-sci-regular-2',
    title: 'KHTN 6 - Kiểm tra Thường xuyên (15 phút): Oxygen, Không khí & Sự cháy',
    titleEn: 'Science 6 - Regular Assessment (15 mins): Oxygen, Air & Combustion',
    grade: 6,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về tính chất vật lí và hóa học của Oxygen, thành phần không khí, vai trò duy trì sự sống và các biện pháp dập tắt đám cháy.',
    descriptionEn: 'Quick 15-min check on properties of Oxygen, air composition, respiration, and fire extinguishing methods.',
    questions: [
      {
        question: 'Khí Oxygen (O₂) có tính chất vật lí nào sau đây?',
        options: [
          'Chất khí không màu, không mùi, không vị, ít tan trong nước, nặng hơn không khí',
          'Chất khí có màu vàng lục, mùi hắc',
          'Chất lỏng màu xanh lam',
          'Chất khí nhẹ hơn không khí nhiều lần'
        ],
        answerIndex: 0,
        hint: 'Oxygen ta hít thở hàng ngày không nhìn thấy màu và không có mùi.',
        explanation: 'Khí Oxygen là chất khí không màu, không mùi, không vị, ít tan trong nước và nặng hơn không khí.'
      },
      {
        question: 'Hai vai trò quan trọng hàng đầu của khí Oxygen đối với sự sống là:',
        options: [
          'Duy trì sự hô hấp của sinh vật và duy trì sự cháy',
          'Làm cho bầu trời có màu xanh',
          'Giúp cây cối quang hợp hấp thụ CO₂',
          'Tạo ra gió và bão nhiệt đới'
        ],
        answerIndex: 0,
        hint: 'Con người hô hấp cần Oxygen; bếp lửa cháy cần Oxygen.',
        explanation: 'Oxygen cần thiết cho quá trình hô hấp tế bào của sinh vật và là chất duy trì sự cháy.'
      },
      {
        question: 'Để dập tắt một đám cháy nhỏ do xăng dầu, ta TUYỆT ĐỐI KHÔNG NÊN làm gì?',
        options: [
          'Dùng nước dội vào đám cháy',
          'Dùng cát trùm kín lên ngọn lửa',
          'Dùng bình bọt chữa cháy CO₂',
          'Dùng chăn dạ dày nhúng ướt trùm lên'
        ],
        answerIndex: 0,
        hint: 'Xăng dầu nhẹ hơn nước và không tan trong nước, dội nước sẽ làm xăng dầu loang rộng hơn.',
        explanation: 'Dội nước vào đám cháy xăng dầu sẽ khiến xăng dầu nổi lên bề mặt và bốc cháy lan rộng hơn.'
      },
      {
        question: 'Biện pháp nào sau đây giúp bảo vệ môi trường không khí trong lành?',
        options: [
          'Trồng nhiều cây xanh và sử dụng phương tiện giao thông công cộng, xe điện',
          'Đốt rơm rạ và túi nilon ngoài đồng trống',
          'Xả khói bụi công nghiệp trực tiếp ra môi trường',
          'Chặt phá rừng đầu nguồn'
        ],
        answerIndex: 0,
        hint: 'Cây xanh quang hợp hấp thụ CO₂ và thải ra O₂ làm sạch khí quyển.',
        explanation: 'Trồng rừng và hạn chế khí thải hóa thạch là giải pháp hiệu quả hàng đầu bảo vệ bầu không khí.'
      },
      {
        question: 'Hiện tượng nào sau đây là hiện tượng biến đổi hóa học?',
        options: [
          'Đinh sắt để ngoài không khí ẩm bị gỉ sét biến thành màu nâu đỏ',
          'Nước đá tan chảy thành nước lỏng',
          'Cắt tờ giấy thành nhiều mảnh vụn',
          'Hòa tan đường vào cốc nước'
        ],
        answerIndex: 0,
        hint: 'Có chất mới sinh ra với tính chất khác biệt ban đầu.',
        explanation: 'Đinh sắt bị gỉ tạo ra chất mới là gỉ sắt (oxit sắt) nên đây là hiện tượng hóa học.'
      },
      {
        question: 'Trong bình chữa cháy mini dạng bọt hoặc khí CO₂, chất chữa cháy có tác dụng gì?',
        options: [
          'Ngăn cách vật cháy với khí oxygen và hạ nhiệt độ đám cháy',
          'Cung cấp thêm oxygen cho đám cháy',
          'Làm vật cháy bốc hơi nhanh hơn',
          'Làm cho ngọn lửa bùng to hơn'
        ],
        answerIndex: 0,
        hint: 'Không có oxygen thì ngọn lửa sẽ tắt.',
        explanation: 'Khí CO₂ nặng hơn không khí phủ lên bề mặt vật cháy, cách li oxygen làm tắt đám cháy.'
      },
      {
        question: 'Nguồn phát thải khí gây ô nhiễm bụi mịn (PM2.5) nghiêm trọng nhất ở các đô thị lớn là:',
        options: [
          'Khói thải từ động cơ xe máy, ô tô chạy xăng dầu và công trường xây dựng',
          'Quá trình quang hợp của cây xanh',
          'Hơi nước bốc lên từ sông hồ',
          'Gió thổi từ đại dương vào'
        ],
        answerIndex: 0,
        hint: 'Khí thải giao thông và bụi công trình xây dựng.',
        explanation: 'Động cơ đốt trong và bụi xây dựng là nguồn phát thải bụi mịn chủ yếu ở các thành phố.'
      },
      {
        question: 'Khi nuôi cá cảnh trong bể kính kín, người ta thường lắp máy sục khí nhằm mục đích gì?',
        options: [
          'Tăng lượng khí oxygen hòa tan trong nước giúp cá hô hấp tốt hơn',
          'Làm nước trong bể nóng lên',
          'Để nước phát ra âm thanh vui tai',
          'Để đuổi muỗi đẻ trứng'
        ],
        answerIndex: 0,
        hint: 'Cá hô hấp bằng mang lấy oxygen hòa tan trong nước.',
        explanation: 'Máy sục khí bơm bọt khí vào nước để khuếch tán oxygen hòa tan cho cá cảnh hô hấp.'
      }
    ]
  },

  // 5. TIẾNG ANH 6 - ĐỀ THƯỜNG XUYÊN 2 (HK1)
  {
    id: 'quiz-g6-s1-eng-regular-2',
    title: 'Tiếng Anh 6 - Kiểm tra Thường xuyên (15 phút): Unit 2 My House & Prepositions',
    titleEn: 'English 6 - Regular Assessment (15 mins): Rooms & Prepositions of Place',
    grade: 6,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về từ vựng phòng ốc và đồ nội thất trong nhà, giới từ chỉ nơi chốn (in, on, under, behind, next to, between) và cấu trúc There is / There are.',
    descriptionEn: 'Quick 15-min quiz on rooms, household furniture, prepositions of place and There is / There are sentences.',
    questions: [
      {
        question: 'The cat is sleeping _______ the table, right under the chair.',
        options: ['under', 'on', 'in', 'above'],
        answerIndex: 0,
        hint: 'Below the surface of the table.',
        explanation: 'Under means beneath the surface: "under the table".'
      },
      {
        question: 'There _______ three modern bedrooms and two bathrooms in my villa.',
        options: ['are', 'is', 'has', 'have'],
        answerIndex: 0,
        hint: 'Plural noun phrase: "three modern bedrooms".',
        explanation: 'We use "There are" with plural countable nouns.'
      },
      {
        question: 'Which room in the house is typically used for cooking delicious meals?',
        options: ['Kitchen', 'Bedroom', 'Living room', 'Attic'],
        answerIndex: 0,
        hint: 'Where the cooker, fridge, and saucepans are kept.',
        explanation: 'The kitchen is the room where meals are prepared and cooked.'
      },
      {
        question: 'The lamp is placed _______ the armchair and the sofa.',
        options: ['between', 'among', 'next', 'in front'],
        answerIndex: 0,
        hint: 'In the middle of two specific objects: between A and B.',
        explanation: 'We use "between" when an object is situated in the space separating two points.'
      },
      {
        question: 'Where is the microwave oven? - It is _______ the fridge.',
        options: ['next to', 'next', 'behind of', 'between of'],
        answerIndex: 0,
        hint: 'Collocation: "next to" means beside.',
        explanation: 'The preposition of place is "next to" (right beside).'
      },
      {
        question: 'My grandparents live in a peaceful _______ house in the countryside.',
        options: ['country', 'town', 'villa', 'apartment'],
        answerIndex: 0,
        hint: 'A traditional house located in rural areas: country house.',
        explanation: 'Country house refers to a residential house situated in rural countryside.'
      },
      {
        question: 'Nick: "Can you pass me the remote control, please?" - Linda: "_______"',
        options: ['Sure, here you are.', "No, I can't.", "Yes, I am.", 'Thank you.'],
        answerIndex: 0,
        hint: 'Polite answer when handing something to someone.',
        explanation: '"Sure, here you are" is the standard natural way to respond when handing an item.'
      },
      {
        question: 'Is there a garden in front of your house? - Yes, _______.',
        options: ['there is', 'there are', 'it is', 'they are'],
        answerIndex: 0,
        hint: 'Question starts with "Is there...?".',
        explanation: 'Short affirmative answer to "Is there...?": "Yes, there is".'
      }
    ]
  },

  // 6. LỊCH SỬ & ĐỊA LÍ 6 - ĐỀ THƯỜNG XUYÊN 2 (HK1)
  {
    id: 'quiz-g6-s1-hisgeo-regular-2',
    title: 'Lịch sử & Địa lí 6 - Kiểm tra Thường xuyên (15 phút): Các nền văn minh cổ đại',
    titleEn: 'History & Geography 6 - Regular Assessment (15 mins): Ancient Civilizations',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử & Địa lí',
    subjectVi: 'Lịch sử & Địa lí',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về các nền văn minh lưu vực sông lớn phương Đông (sông Nin, sông Ti-gơ-rơ và Ơ-phơ-rát, sông Hằng, sông Ấn, Hoàng Hà) và thành tựu chữ viết cổ.',
    descriptionEn: 'Quick 15-min check on river valley civilizations (Nile, Mesopotamia, Indus, Yellow River) and ancient writing systems.',
    questions: [
      {
        question: 'Nền văn minh Ai Cập cổ đại được hình thành bên lưu vực của dòng sông nào?',
        options: ['Sông Nin (Nile)', 'Sông Hằng', 'Sông Ti-gơ-rơ', 'Sông Hoàng Hà'],
        answerIndex: 0,
        hint: 'Nhà sử học Hê-rô-đốt từng nói: "Ai Cập là tặng phẩm của sông Nin".',
        explanation: 'Sông Nin bồi đắp phù sa màu mỡ là cái nôi nuôi dưỡng nền văn minh Ai Cập cổ đại rực rỡ.'
      },
      {
        question: 'Chữ tượng hình Ai Cập cổ đại thường được viết trên chất liệu nào?',
        options: ['Giấy pa-pi-rút (Papyrus)', 'Đất sét nung', 'Thẻ tre', 'Giấy xốp hiện đại'],
        answerIndex: 0,
        hint: 'Làm từ thân cây sậy pa-pi-rút mọc dày đặc ven đầm lầy sông Nin.',
        explanation: 'Người Ai Cập phát minh ra giấy papyrus ép từ cây sậy để viết chữ tượng hình.'
      },
      {
        question: 'Cư dân Lưỡng Hà cổ đại phát minh ra hệ chữ viết nào nổi tiếng?',
        options: ['Chữ hình nêm (chữ hình đinh găm)', 'Chữ La-tinh', 'Chữ tượng thanh', 'Chữ Hán'],
        answerIndex: 0,
        hint: 'Dùng que vót nhọn ấn lên những phiến đất sét ướt tạo thành nét như chiếc đinh.',
        explanation: 'Chữ hình nêm (cuneiform) là phát minh của người Lưỡng Hà cổ đại trên đất sét.'
      },
      {
        question: 'Vạn Lý Trường Thành là công trình phòng thủ quân sự vĩ đại của nền văn minh cổ đại nào?',
        options: ['Trung Quốc cổ đại', 'Ấn Độ cổ đại', 'La Mã cổ đại', 'Hy Lạp cổ đại'],
        answerIndex: 0,
        hint: 'Được Tần Thủy Hoàng khởi công nối liền các đoạn thành để ngăn chặn người Hung Nô.',
        explanation: 'Vạn Lý Trường Thành là kì quan kiến trúc quân sự kỳ vĩ của Trung Hoa cổ đại.'
      },
      {
        question: 'Đường kinh tuyến và vĩ tuyến trên quả Địa cầu có tác dụng chủ yếu là:',
        options: [
          'Xác định tọa độ địa lí của bất kì vị trí nào trên bề mặt Trái Đất',
          'Làm cho quả cầu đẹp hơn',
          'Đo độ sâu của đáy biển',
          'Dự báo thời tiết tức thời'
        ],
        answerIndex: 0,
        hint: 'Tọa độ địa lí gồm kinh độ và vĩ độ của một điểm.',
        explanation: 'Hệ thống lưới kinh vĩ tuyến giúp định vị chính xác vị trí địa lí của mọi điểm trên Trái Đất.'
      },
      {
        question: 'Trái Đất có dạng hình gì?',
        options: ['Hình cầu hơi dẹt ở hai cực', 'Hình tròn dẹt như cái đĩa', 'Hình lập phương', 'Hình trụ tròn'],
        answerIndex: 0,
        hint: 'Một khối cầu xoay hơi phình ở xích đạo và dẹt nhẹ ở hai cực Bắc - Nam.',
        explanation: 'Trái Đất có dạng hình phỏng cầu (geoid), hơi dẹt ở hai cực và phình ở xích đạo.'
      },
      {
        question: 'Khoảng cách giữa hai vĩ tuyến liền kề cách nhau 1 độ tương ứng với khoảng bao nhiêu km?',
        options: ['Khoảng 111 km', 'Khoảng 50 km', 'Khoảng 200 km', 'Khoảng 10 km'],
        answerIndex: 0,
        hint: 'Chu vi Trái Đất khoảng 40.000 km chia cho 360 độ.',
        explanation: '1 độ vĩ tuyến trên Trái Đất xấp xỉ bằng 40.000 km / 360 ≈ 111,1 km.'
      },
      {
        question: 'Kim tự tháp Ai Cập được xây dựng với mục đích chính là gì?',
        options: [
          'Lăng mộ chôn cất và bảo quản thi hài ướp xác của các Pharaon',
          'Đài thiên văn ngắm trăng sao',
          'Chợ buôn bán lúa mì',
          'Nhà thờ phục vụ dân chúng'
        ],
        answerIndex: 0,
        hint: 'Nơi yên nghỉ vĩnh hằng của các vị vua Pharaon.',
        explanation: 'Kim tự tháp là lăng mộ khổng lồ bảo vệ thi hài của các Pharaon và hoàng hậu Ai Cập.'
      }
    ]
  },

  // 7. TIN HỌC 6 - ĐỀ THƯỜNG XUYÊN 2 (HK1)
  {
    id: 'quiz-g6-s1-it-regular-2',
    title: 'Tin học 6 - Kiểm tra Thường xuyên (15 phút): Đơn vị đo dữ liệu & Thiết bị lưu trữ',
    titleEn: 'Informatics 6 - Regular Assessment (15 mins): Data Units & Storage Devices',
    grade: 6,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về quy đổi các đơn vị đo dung lượng dữ liệu (Byte, KB, MB, GB, TB) và nhận biết các thiết bị lưu trữ thông tin (ổ cứng HDD/SSD, USB, thẻ nhớ).',
    descriptionEn: 'Quick 15-min check on digital storage units conversion and computer memory devices.',
    questions: [
      {
        question: 'Một tệp ảnh chụp bằng điện thoại có dung lượng khoảng 4 MB. Dung lượng này tương đương với khoảng bao nhiêu KB?',
        options: ['Khoảng 4096 KB (xấp xỉ 4000 KB)', 'Khoảng 40 KB', 'Khoảng 400 KB', 'Khoảng 4 KB'],
        answerIndex: 0,
        hint: '1 MB = 1024 KB.',
        explanation: '4 MB = 4 × 1024 KB = 4096 KB.'
      },
      {
        question: 'Thiết bị nào sau đây là thiết bị lưu trữ dữ liệu di động nhỏ gọn thường cắm qua cổng USB?',
        options: ['Ổ nhớ USB (USB Flash Drive)', 'Màn hình máy tính', 'Bàn phím cơ', 'Chuột quang'],
        answerIndex: 0,
        hint: 'Thiết bị nhỏ bỏ túi mang theo để sao chép tập tin giữa các máy tính.',
        explanation: 'Ổ USB flash là thiết bị lưu trữ di động tiện dụng cắm vào cổng USB máy tính.'
      },
      {
        question: 'Ổ đĩa cứng SSD có ưu điểm vượt trội nào so với ổ đĩa cứng HDD truyền thống?',
        options: [
          'Tốc độ đọc ghi dữ liệu nhanh hơn nhiều lần, chạy êm và chống sốc tốt',
          'Dung lượng nhỏ hơn rất nhiều',
          'Chạy phát ra tiếng kêu to hơn',
          'Dễ bị hỏng hơn khi di chuyển'
        ],
        answerIndex: 0,
        hint: 'Sử dụng chip nhớ flash điện tử, không có phiến đĩa quay cơ học.',
        explanation: 'SSD có tốc độ vượt trội, khởi động máy trong vài giây và bền hơn ổ cơ HDD.'
      },
      {
        question: 'Một chiếc thẻ nhớ MicroSD dung lượng 64 GB có thể chứa được khoảng bao nhiêu bài hát MP3 (biết mỗi bài trung bình 4 MB)?',
        options: [
          'Khoảng 16.000 bài hát',
          'Khoảng 160 bài hát',
          'Khoảng 16 bài hát',
          'Khoảng 1.600.000 bài hát'
        ],
        answerIndex: 0,
        hint: '64 GB = 64 × 1024 MB ≈ 65.536 MB. Lấy 65.536 : 4 ≈ 16.384 bài.',
        explanation: '64 GB = 65.536 MB; 65.536 : 4 ≈ 16.384 bài hát MP3.'
      },
      {
        question: 'Bộ nhớ trong của máy tính gồm có hai thành phần chính nào?',
        options: ['RAM (bộ nhớ tạm thời) và ROM', 'Bàn phím và Chuột', 'Màn hình và Loa', 'Ổ đĩa mềm và Đĩa CD'],
        answerIndex: 0,
        hint: 'RAM mất dữ liệu khi tắt máy; ROM chứa chương trình khởi động máy tính.',
        explanation: 'Bộ nhớ trong gồm RAM (Random Access Memory) và ROM (Read Only Memory).'
      },
      {
        question: 'Dữ liệu được lưu trữ trong bộ nhớ RAM của máy tính sẽ xảy ra điều gì khi ngắt nguồn điện (tắt máy)?',
        options: [
          'Toàn bộ dữ liệu trong RAM sẽ bị mất sạch',
          'Dữ liệu vẫn được giữ nguyên vẹn mãi mãi',
          'Dữ liệu tự động sao lưu vào thẻ nhớ',
          'RAM tự động biến thành ổ cứng'
        ],
        answerIndex: 0,
        hint: 'RAM là bộ nhớ bay hơi (volatile memory).',
        explanation: 'RAM chỉ lưu trữ tạm thời khi có điện, tắt máy mọi dữ liệu trong RAM sẽ bị xóa sạch.'
      },
      {
        question: 'Thao tác nào sau đây giúp rút ổ USB an toàn khỏi máy tính không làm hỏng tập tin?',
        options: [
          'Nhấp chuột chọn "Safely Remove Hardware and Eject Media" trước khi rút cáp',
          'Giật mạnh ổ USB ra khi đang copy dở tập tin',
          'Tắt phụt nguồn điện máy tính',
          'Rút ổ USB lúc đèn đang nhấp nháy nhanh'
        ],
        answerIndex: 0,
        hint: 'Chức năng ngắt kết nối an toàn của hệ điều hành Windows.',
        explanation: 'Eject an toàn đảm bảo mọi dữ liệu đã được ghi hoàn tất trước khi ngắt phần cứng.'
      },
      {
        question: 'Một bit chỉ có thể nhận một trong hai trạng thái nào?',
        options: ['0 hoặc 1 (dãy nhị phân)', 'Chữ A hoặc chữ B', 'Đúng hoặc Chưa chắc', 'Số âm hoặc Số dương'],
        answerIndex: 0,
        hint: 'Hệ thống đếm cơ số 2 (hệ nhị phân).',
        explanation: 'Bit là đơn vị nhị phân cơ bản chỉ mang giá trị 0 (tắt) hoặc 1 (bật).'
      }
    ]
  },

  // 8. CÔNG NGHỆ 6 - ĐỀ THƯỜNG XUYÊN 2 (HK1)
  {
    id: 'quiz-g6-s1-tech-regular-2',
    title: 'Công nghệ 6 - Kiểm tra Thường xuyên (15 phút): Ngôi nhà thông minh & Tiết kiệm năng lượng',
    titleEn: 'Technology 6 - Regular Assessment (15 mins): Smart Homes & Energy Saving',
    grade: 6,
    semester: 1,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về hệ thống điều khiển tự động trong ngôi nhà thông minh (chiếu sáng, an ninh, điều hòa), nguyên tắc tiết kiệm năng lượng và sử dụng năng lượng sạch.',
    descriptionEn: 'Quick 15-min check on smart home automation systems, energy efficiency, and renewable green energy.',
    questions: [
      {
        question: 'Hệ thống chiếu sáng thông minh trong gia đình có khả năng tự động nào?',
        options: [
          'Tự động bật đèn khi có người bước vào và tự động tắt khi không có người',
          'Bật đèn sáng rực cả ngày lẫn đêm không bao giờ tắt',
          'Tự động phát ra lửa thật',
          'Chỉ hoạt động khi mất điện'
        ],
        answerIndex: 0,
        hint: 'Sử dụng cảm biến chuyển động hồng ngoại (PIR motion sensor).',
        explanation: 'Cảm biến phát hiện người giúp bật/tắt đèn tự động giúp tiện lợi và tiết kiệm điện năng.'
      },
      {
        question: 'Để sử dụng máy điều hòa không khí tiết kiệm điện và bảo vệ sức khỏe, nên cài đặt nhiệt độ ở mức nào?',
        options: ['Từ 26°C đến 28°C kết hợp quạt gió nhẹ', 'Đặt ở 16°C suốt đêm', 'Đặt ở 35°C', 'Thay đổi nhiệt độ liên tục mỗi 5 phút'],
        answerIndex: 0,
        hint: 'Nhiệt độ 26-28°C chênh lệch vừa phải với môi trường ngoài và tiết kiệm điện.',
        explanation: 'Nhiệt độ 26-28°C giúp cơ thể không bị sốc nhiệt và máy nén điều hòa không phải chạy quá tải.'
      },
      {
        question: 'Hệ thống an ninh thông minh (Smart Security) trong nhà thường bao gồm những thiết bị nào?',
        options: [
          'Camera giám sát IP, chuông cửa có hình, khóa cửa vân tay và cảm biến báo khói',
          'Chỉ có một ổ khóa đồng cổ điển',
          'Gậy gộc để sẵn ở cửa',
          'Hàng rào bằng cây cối tự nhiên'
        ],
        answerIndex: 0,
        hint: 'Báo động gửi tin nhắn đến điện thoại chủ nhà khi có kẻ gian cạy cửa.',
        explanation: 'Hệ thống an ninh tích hợp camera AI, khóa số/vân tay và chuông báo cháy thông minh.'
      },
      {
        question: 'Nguồn năng lượng tái tạo nào đang được nhiều gia đình lắp đặt trên mái nhà để tự cấp điện sinh hoạt?',
        options: ['Hệ thống pin năng lượng mặt trời (Solar panels)', 'Nhà máy nhiệt điện than', 'Lò phản ứng hạt nhân', 'Máy phát điện chạy dầu diesel'],
        answerIndex: 0,
        hint: 'Tận dụng ánh nắng mặt trời dồi dào trên mái nhà.',
        explanation: 'Điện mặt trời áp mái chuyển hóa bức xạ mặt trời thành điện sạch phục vụ gia đình.'
      },
      {
        question: 'Hành vi nào dưới đây gây lãng phí năng lượng điện nghiêm trọng?',
        options: [
          'Bật tivi nhưng không xem, để quạt và điều hòa chạy suốt ngày khi ra khỏi phòng',
          'Tận dụng gió trời qua cửa sổ sổ mát',
          'Dùng bóng đèn LED tiết kiệm điện thay cho bóng sợi đốt',
          'Tắt bình nóng lạnh sau khi nước đã sôi đủ tắm'
        ],
        answerIndex: 0,
        hint: 'Để thiết bị điện hoạt động khi không có nhu cầu sử dụng.',
        explanation: 'Không tắt thiết bị khi ra khỏi nhà gây lãng phí điện năng và tăng nguy cơ cháy chập.'
      },
      {
        question: 'Bình nước nóng năng lượng mặt trời (thái dương năng) hoạt động theo nguyên lí nào?',
        options: [
          'Hấp thụ bức xạ nhiệt từ ánh sáng mặt trời để đun nóng nước trong ống thủy tinh chân không',
          'Dùng điện lưới công suất lớn',
          'Dùng than củi đun bên trong',
          'Dùng hóa chất làm nóng nước'
        ],
        answerIndex: 0,
        hint: 'Nước nóng lên hoàn toàn nhờ nhiệt mặt trời không tốn một số điện.',
        explanation: 'Các ống hấp thụ nhiệt thu quang năng mặt trời làm nước nóng đối lưu tự nhiên vào bồn bảo ôn.'
      },
      {
        question: 'Nhãn năng lượng dán trên các thiết bị điện tử (tủ lạnh, máy giặt, điều hòa) có bao nhiêu ngôi sao là tiết kiệm điện nhất?',
        options: ['5 sao', '1 sao', '3 sao', 'Không có ngôi sao nào'],
        answerIndex: 0,
        hint: 'Số sao càng nhiều thì hiệu suất năng lượng càng cao.',
        explanation: 'Nhãn 5 sao của Bộ Công Thương chứng nhận thiết bị đạt hiệu suất năng lượng cao nhất.'
      },
      {
        question: 'Khi sử dụng tủ lạnh gia đình, thói quen nào giúp tủ lạnh bền và tiết kiệm điện?',
        options: [
          'Hạn chế mở cửa tủ lạnh liên tục và không cho đồ ăn còn đang nóng hổi vào tủ',
          'Mở toang cánh cửa tủ lạnh cho mát nhà',
          'Nhồi nhét kín mít mọi ngóc ngách che kín lỗ thông gió',
          'Rút phích cắm điện ra cắm vào liên tục 10 lần một ngày'
        ],
        answerIndex: 0,
        hint: 'Đồ ăn nóng làm máy nén phải chạy tối đa công suất để hạ nhiệt.',
        explanation: 'Để thức ăn nguội hẳn mới cho vào tủ và hạn chế mở cửa giúp giữ nhiệt độ ổn định, tiết kiệm điện.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2 - CÁC ĐỀ KIỂM TRA THƯỜNG XUYÊN MỞ RỘNG (HK2)
  // =========================================================================

  // 9. TOÁN HỌC 6 - ĐỀ THƯỜNG XUYÊN 2 (HK2)
  {
    id: 'quiz-g6-s2-math-regular-2',
    title: 'Toán 6 - Kiểm tra Thường xuyên (15 phút): Phân số mở rộng, Rút gọn & Quy đồng mẫu số',
    titleEn: 'Math 6 - Regular Assessment (15 mins): Fraction Operations & Common Denominators',
    grade: 6,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về định nghĩa phân số a/b (a, b ∈ ℤ, b ≠ 0), phân số bằng nhau, tính chất cơ bản và quy đồng mẫu số.',
    descriptionEn: '15-min quick test on integers fractions, equivalent fractions, and common denominators.',
    questions: [
      {
        question: 'Điều kiện để biểu thức a/b là một phân số (với a, b ∈ ℤ) là gì?',
        options: ['b ≠ 0', 'b > 0', 'a ≠ 0', 'a và b cùng dấu'],
        answerIndex: 0,
        hint: 'Mẫu số của phân số bắt buộc phải khác 0.',
        explanation: 'Phân số có dạng a/b trong đó a, b ∈ ℤ và mẫu số b ≠ 0.'
      },
      {
        question: 'Rút gọn phân số -18/24 về phân số tối giản:',
        options: ['-3/4', '-9/12', '3/4', '-6/8'],
        answerIndex: 0,
        hint: 'Chia cả tử và mẫu cho ƯCLN(-18, 24) = 6.',
        explanation: '-18 : 6 / 24 : 6 = -3/4.'
      },
      {
        question: 'Hai phân số a/b và c/d bằng nhau khi nào?',
        options: ['a × d = b × c', 'a × c = b × d', 'a + d = b + c', 'a - b = c - d'],
        answerIndex: 0,
        hint: 'Tích chéo của hai phân số bằng nhau phải bằng nhau.',
        explanation: 'Theo định nghĩa hai phân số bằng nhau: a/b = c/d ⇔ a.d = b.c.'
      },
      {
        question: 'Mẫu số chung nhỏ nhất của hai phân số 5/12 và 7/18 là:',
        options: ['36', '72', '216', '6'],
        answerIndex: 0,
        hint: 'Mẫu số chung nhỏ nhất chính là BCNN(12, 18).',
        explanation: '12 = 2² × 3; 18 = 2 × 3² => BCNN(12, 18) = 2² × 3² = 36.'
      },
      {
        question: 'Kết quả của phép tính 1/3 + (-2/5) là:',
        options: ['-1/15', '1/15', '-1/8', '3/15'],
        answerIndex: 0,
        hint: 'Quy đồng mẫu số chung là 15: 5/15 + (-6/15) = -1/15.',
        explanation: '5/15 + (-6/15) = (5 - 6)/15 = -1/15.'
      },
      {
        question: 'Tìm x biết: x - 1/2 = 3/4',
        options: ['x = 5/4', 'x = 1/4', 'x = -1/4', 'x = 3/8'],
        answerIndex: 0,
        hint: 'Chuyển vế: x = 3/4 + 1/2 = 3/4 + 2/4 = 5/4.',
        explanation: 'x = 3/4 + 1/2 = 5/4.'
      },
      {
        question: 'Giá trị của phép nhân (-3/7) × (14/9) là:',
        options: ['-2/3', '2/3', '-1/3', '-6/21'],
        answerIndex: 0,
        hint: 'Rút gọn chéo: -3 với 9 còn -1/3; 14 với 7 còn 2/1 => -2/3.',
        explanation: '(-3 × 14)/(7 × 9) = -42/63 = -2/3.'
      },
      {
        question: 'Số nghịch đảo của phân số -4/5 là:',
        options: ['-5/4', '4/5', '5/4', '-1'],
        answerIndex: 0,
        hint: 'Số nghịch đảo của a/b là b/a sao cho (a/b) × (b/a) = 1.',
        explanation: 'Số nghịch đảo của -4/5 là -5/4 vì (-4/5) × (-5/4) = 1.'
      }
    ]
  },

  // 10. TOÁN HỌC 6 - ĐỀ THƯỜNG XUYÊN 3 (HK2)
  {
    id: 'quiz-g6-s2-math-regular-3',
    title: 'Toán 6 - Kiểm tra Thường xuyên (15 phút): Hình có trục đối xứng & Tâm đối xứng',
    titleEn: 'Math 6 - Regular Assessment (15 mins): Symmetry in Geometry & Nature',
    grade: 6,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về nhận biết hình có trục đối xứng, tâm đối xứng và ứng dụng đối xứng trong đời sống, nghệ thuật.',
    descriptionEn: 'Quick 15-min test on axial and central symmetry in geometric shapes and nature.',
    questions: [
      {
        question: 'Hình nào dưới đây vừa có trục đối xứng vừa có tâm đối xứng?',
        options: ['Hình tròn và hình vuông', 'Tam giác đều', 'Hình thang cân', 'Tam giác vuông cân'],
        answerIndex: 0,
        hint: 'Hình tròn có vô số trục đối xứng và tâm đối xứng là tâm đường tròn.',
        explanation: 'Hình tròn và hình vuông đều có cả trục đối xứng và tâm đối xứng.'
      },
      {
        question: 'Hình chữ nhật có bao nhiêu trục đối xứng?',
        options: ['2 trục đối xứng', '4 trục đối xứng', '1 trục đối xứng', 'Không có trục đối xứng'],
        answerIndex: 0,
        hint: 'Hai trục đối xứng của hình chữ nhật là hai đường trung trực của hai cặp cạnh đối diện.',
        explanation: 'Hình chữ nhật có đúng 2 trục đối xứng (hai đường nối trung điểm các cạnh đối diện).'
      },
      {
        question: 'Chữ cái in hoa nào sau đây có tâm đối xứng?',
        options: ['Chữ N, S, H, O', 'Chữ A, M, V', 'Chữ E, B, D', 'Chữ C, K'],
        answerIndex: 0,
        hint: 'Khi quay chữ 180° quanh tâm, hình dạng không thay đổi.',
        explanation: 'Các chữ N, S, H, O, I, X có tâm đối xứng.'
      },
      {
        question: 'Tam giác đều có bao nhiêu trục đối xứng?',
        options: ['3 trục đối xứng', '1 trục đối xứng', '2 trục đối xứng', 'Không có trục đối xứng'],
        answerIndex: 0,
        hint: '3 đường cao (đồng thời là trung trực, phân giác) là 3 trục đối xứng.',
        explanation: 'Tam giác đều có 3 trục đối xứng đi qua mỗi đỉnh và trung điểm cạnh đối diện.'
      },
      {
        question: 'Đoạn thẳng AB có tâm đối xứng là điểm nào?',
        options: ['Trung điểm của đoạn thẳng AB', 'Điểm A', 'Điểm B', 'Không có tâm đối xứng'],
        answerIndex: 0,
        hint: 'Tâm đối xứng chia đôi khoảng cách từ hai đầu mút.',
        explanation: 'Trung điểm của đoạn thẳng AB chính là tâm đối xứng của đoạn thẳng đó.'
      },
      {
        question: 'Hình bình hành có bao nhiêu tâm đối xứng?',
        options: ['1 tâm đối xứng (giao điểm của hai đường chéo)', '2 tâm đối xứng', '4 tâm đối xứng', 'Không có tâm đối xứng'],
        answerIndex: 0,
        hint: 'Giao điểm hai đường chéo cắt đôi mỗi đường chéo.',
        explanation: 'Hình bình hành có đúng 1 tâm đối xứng là giao điểm hai đường chéo.'
      },
      {
        question: 'Vật thể tự nhiên nào sau đây có tính đối xứng rõ rệt?',
        options: ['Bông hoa tuyết 6 cánh và lá phong', 'Hòn đá cuội tự nhiên méo mó', 'Cành cây khô gãy ngẫu nhiên', 'Vết dầu loang trên mặt nước'],
        answerIndex: 0,
        hint: 'Hoa tuyết và các cánh hoa mang tính đối xứng hình học tuyệt đẹp.',
        explanation: 'Hoa tuyết và lá phong thể hiện cấu trúc đối xứng tự nhiên hoàn hảo.'
      },
      {
        question: 'Biển báo giao thông hình tròn cấm đi ngược chiều có:',
        options: ['Trục đối xứng và tâm đối xứng', 'Chỉ có 1 trục đối xứng', 'Chỉ có 3 trục đối xứng', 'Không có tâm đối xứng'],
        answerIndex: 0,
        hint: 'Biển tròn nền đỏ vạch trắng ngang có 2 trục đối xứng và 1 tâm đối xứng.',
        explanation: 'Biển báo cấm đi ngược chiều vừa có trục đối xứng vừa có tâm đối xứng.'
      }
    ]
  },

  // 11. NGỮ VĂN 6 - ĐỀ THƯỜNG XUYÊN 2 (HK2)
  {
    id: 'quiz-g6-s2-lit-regular-2',
    title: 'Ngữ văn 6 - Kiểm tra Thường xuyên (15 phút): Thơ có yếu tố tự sự & Biện pháp so sánh, nhân hóa',
    titleEn: 'Literature 6 - Regular Assessment (15 mins): Narrative Elements in Poetry & Figures of Speech',
    grade: 6,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về đọc hiểu văn bản thơ tự sự (Đêm nay Bác không ngủ, Lượm) và nhận diện biện pháp tu từ so sánh, nhân hóa, ẩn dụ.',
    descriptionEn: '15-min reading comprehension on narrative poems and rhetoric figures.',
    questions: [
      {
        question: 'Bài thơ "Đêm nay Bác không ngủ" của tác giả nào và kể về sự việc gì?',
        options: [
          'Minh Huệ - kể về một đêm Bác Hồ thức chăm lo cho bộ đội trong chiến dịch Biên giới',
          'Tố Hữu - kể về chú bé liên lạc dũng cảm',
          'Trần Đăng Khoa - kể về đêm trăng làng quê',
          'Huy Cận - kể về đoàn thuyền đánh cá'
        ],
        answerIndex: 0,
        hint: 'Nhà thơ Minh Huệ viết năm 1951 dựa trên lời kể của anh bộ đội.',
        explanation: '"Đêm nay Bác không ngủ" do Minh Huệ sáng tác, ca ngợi tình yêu thương bao la của Bác đối với bộ đội và nhân dân.'
      },
      {
        question: 'Trong câu thơ: "Bác nằm nhắp mắt / Bác thương đoàn dân công / Đêm nay ngủ ngoài rừng / Rải lá cây làm chiếu", tình cảm của Bác thể hiện qua từ ngữ nào?',
        options: ['Bác thương đoàn dân công', 'Nhắp mắt', 'Ngủ ngoài rừng', 'Rải lá cây'],
        answerIndex: 0,
        hint: 'Từ trực tiếp bộc lộ cảm xúc yêu thương trăn trở.',
        explanation: 'Từ "Bác thương" trực tiếp khắc họa tấm lòng yêu thương nhân dân sâu nặng của Bác Hồ.'
      },
      {
        question: 'Biện pháp tu từ nào được sử dụng trong câu thơ: "Người Cha mái tóc bạc / Đốt lửa cho anh nằm"?',
        options: ['Ẩn dụ', 'So sánh', 'Nhân hóa', 'Hoán dụ'],
        answerIndex: 0,
        hint: '"Người Cha" ở đây dùng để chỉ Bác Hồ dựa trên nét tương đồng về tình yêu thương con cái.',
        explanation: 'Ẩn dụ "Người Cha" ví Bác Hồ như người cha ruột thịt của toàn thể chiến sĩ.'
      },
      {
        question: 'Hình ảnh chú bé Lượm trong bài thơ cùng tên của Tố Hữu được miêu tả với trang phục và dáng vẻ như thế nào?',
        options: [
          'Cái xắc xinh xinh, ca lô đội lệch, mồm huýt sáo vang, như con chim chích',
          'Áo giáp sắt, cưỡi ngựa sắt, tay cầm gậy tre',
          'Áo chàm lam lũ, gánh củi trên vai',
          'Đồng phục học sinh khăn quàng đỏ thắm'
        ],
        answerIndex: 0,
        hint: '"Chú bé loắt choắt / Cái xắc xinh xinh / Cái chân thoăn thoắt / Cái đầu nghênh nghênh...".',
        explanation: 'Lượm hiện lên hồn nhiên, vui tươi, nhanh nhẹn và tràn đầy tinh thần yêu nước.'
      },
      {
        question: 'Từ ngữ nào trong các từ sau là từ láy mô phỏng âm thanh?',
        options: ['Ríu rít', 'Xanh ngắt', 'Đo đỏ', 'Trắng tinh'],
        answerIndex: 0,
        hint: 'Âm thanh tiếng chim hót hoặc tiếng cười nói líu lo.',
        explanation: '"Ríu rít" là từ láy tượng thanh mô phỏng âm thanh chim hót hoặc tiếng trẻ con rộn rã.'
      },
      {
        question: 'Tác dụng chính của biện pháp nhân hóa trong câu: "Mặt trời đội biển nhô màu mới" là:',
        options: [
          'Làm cho mặt trời trở nên sống động, có hành động như con người',
          'Làm giảm sắc thái biểu cảm',
          'Khẳng định mặt trời đứng yên',
          'Làm câu văn dài hơn'
        ],
        answerIndex: 0,
        hint: 'Từ "đội" là hành động có chủ đích của con người.',
        explanation: 'Nhân hóa giúp cảnh bình minh trên biển thêm rực rỡ, hùng tráng và đầy sức sống.'
      },
      {
        question: 'Yếu tố tự sự trong tác phẩm thơ có vai trò gì?',
        options: [
          'Kể lại chuỗi sự việc để bộc lộ cảm xúc và thông điệp của nhân vật trữ tình',
          'Thay thế hoàn toàn cảm xúc của nhà thơ',
          'Biến bài thơ thành bản báo cáo khoa học',
          'Loại bỏ vần điệu và nhạc tính'
        ],
        answerIndex: 0,
        hint: 'Tự sự kết hợp trữ tình giúp câu chuyện gợi nhiều cảm xúc sâu sắc.',
        explanation: 'Tự sự dẫn dắt câu chuyện qua các sự kiện, từ đó làm nổi bật chủ đề và cảm xúc của bài thơ.'
      },
      {
        question: 'Đoạn văn ghi lại cảm xúc về một bài thơ cần đảm bảo cấu trúc gồm những phần nào?',
        options: [
          'Mở đoạn, Thân đoạn và Kết đoạn',
          'Chỉ cần liệt kê các câu thơ',
          'Chỉ cần viết phần kết luận',
          'Mở bài, Thân bài gồm 5 đoạn văn riêng'
        ],
        answerIndex: 0,
        hint: 'Quy cách của một đoạn văn chuẩn: lùi đầu dòng, viết liền mạch, đủ 3 phần.',
        explanation: 'Đoạn văn cảm xúc gồm Mở đoạn (giới thiệu bài thơ), Thân đoạn (trình bày cảm xúc về nội dung và nghệ thuật), Kết đoạn (khái quát ấn tượng sâu sắc).'
      }
    ]
  },

  // 12. KHOA HỌC TỰ NHIÊN 6 - ĐỀ THƯỜNG XUYÊN 2 (HK2)
  {
    id: 'quiz-g6-s2-sci-regular-2',
    title: 'KHTN 6 - Kiểm tra Thường xuyên (15 phút): Đa dạng sinh học & Phân loại sinh giới',
    titleEn: 'Natural Science 6 - Regular Assessment (15 mins): Biodiversity & Taxonomy',
    grade: 6,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về 5 giới sinh vật (Whittaker), khóa lưỡng phân, nấm, vi khuẩn, thực vật và vai trò bảo vệ đa dạng sinh học.',
    descriptionEn: 'Quick 15-min test on 5 kingdoms of life, dichotomous keys, fungi, bacteria, and conservation.',
    questions: [
      {
        question: 'Theo hệ thống 5 giới sinh vật (Whittaker), sinh giới được chia thành những giới nào?',
        options: [
          'Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật',
          'Động vật có xương sống và Động vật không xương sống',
          'Vi khuẩn, Virút, Cây cối, Thú, Bò sát',
          'Thực vật có hoa và Thực vật không hoa'
        ],
        answerIndex: 0,
        hint: 'Gồm Monera, Protista, Fungi, Plantae, Animalia.',
        explanation: 'Hệ thống 5 giới gồm: Giới Khởi sinh (Monera), Giới Nguyên sinh (Protista), Giới Nấm (Fungi), Giới Thực vật (Plantae), Giới Động vật (Animalia).'
      },
      {
        question: 'Khóa lưỡng phân là phương pháp phân loại sinh vật dựa trên nguyên tắc nào?',
        options: [
          'Dựa vào một đôi đặc điểm đối lập để chia sinh vật thành hai nhóm ở mỗi bước',
          'Xếp ngẫu nhiên theo màu sắc',
          'Xếp theo thứ tự bảng chữ cái',
          'Chia theo kích thước to nhỏ'
        ],
        answerIndex: 0,
        hint: '"Lưỡng phân" có nghĩa là chia làm hai nhánh đối lập.',
        explanation: 'Khóa lưỡng phân liên tục tách nhóm sinh vật dựa trên một cặp dấu hiệu đối lập cho đến khi xác định được từng loài.'
      },
      {
        question: 'Sinh vật nào dưới đây thuộc Giới Nấm?',
        options: ['Nấm rơm, nấm men, mốc chân mèo', 'Tảo lục, trùng roi', 'Vi khuẩn E. coli', 'Cây rêu tường'],
        answerIndex: 0,
        hint: 'Sinh vật dị dưỡng, thành tế bào chứa kitin, không có diệp lục.',
        explanation: 'Nấm rơm, nấm men, nấm mốc là các đại diện điển hình của Giới Nấm.'
      },
      {
        question: 'Vì sao vi khuẩn được xếp vào nhóm sinh vật nhân sơ?',
        options: [
          'Vì tế bào chưa có màng nhân bao bọc vùng nhân mang vật chất di truyền',
          'Vì không có tế bào chất',
          'Vì chúng di chuyển bằng lông',
          'Vì kích thước chúng quá lớn'
        ],
        answerIndex: 0,
        hint: 'Nhân sơ = sơ khai, chưa có màng nhân hoàn chỉnh.',
        explanation: 'Tế bào vi khuẩn chỉ có vùng nhân chứa ADN trần, chưa có màng nhân ngăn cách với tế bào chất.'
      },
      {
        question: 'Thực vật có vai trò sống còn nào đối với khí quyển Trái Đất thông qua quá trình quang hợp?',
        options: [
          'Hấp thụ CO₂ và thải ra O₂ làm sạch không khí',
          'Hút hết khí oxy để thở',
          'Thải ra khí độc hại',
          'Làm khô cằn nguồn nước ngầm'
        ],
        answerIndex: 0,
        hint: 'Quang hợp hấp thụ carbon dioxide và giải phóng dưỡng khí oxygen.',
        explanation: 'Quang hợp của cây xanh tạo ra khí oxy nuôi dưỡng sự sống và giảm hiệu ứng nhà kính.'
      },
      {
        question: 'Động vật nào sau đây thuộc nhóm Động vật không xương sống?',
        options: ['Giun đất, ốc sên, châu chấu, tôm sông', 'Cá chép, ếch đồng, rắn ráo', 'Chim bồ câu, mèo nhà', 'Cá voi, dơi'],
        answerIndex: 0,
        hint: 'Cơ thể không có cột sống bằng xương hay sụn bên trong.',
        explanation: 'Giun đất, thân mềm (ốc sên), chân khớp (tôm, côn trùng) thuộc động vật không xương sống.'
      },
      {
        question: 'Hành động nào dưới đây góp phần trực tiếp bảo vệ đa dạng sinh học?',
        options: [
          'Trồng cây gây rừng và không săn bắt động vật hoang dã',
          'Sử dụng thuốc trừ sâu hóa học vô tội vạ',
          'Phá rừng nguyên sinh để làm nương rẫy',
          'Mua bán ngà voi và sừng tê giác'
        ],
        answerIndex: 0,
        hint: 'Giữ gìn môi trường sống tự nhiên của muôn loài.',
        explanation: 'Bảo vệ rừng, lập vườn quốc gia và không tiêu thụ thú rừng là hành động bảo vệ đa dạng sinh học thiết thực.'
      },
      {
        question: 'Tên khoa học của một loài sinh vật theo quy tắc quốc tế gồm mấy phần?',
        options: ['2 phần: Tên chi (viết hoa) + Tên loài (viết thường)', '1 phần duy nhất', '3 phần', 'Tùy theo từng quốc gia'],
        answerIndex: 0,
        hint: 'Ví dụ: Homo sapiens, Canis lupus.',
        explanation: 'Tên khoa học theo phân loại học của Linnaeus gồm 2 phần tiếng Latinh: tên chi (viết hoa chữ cái đầu) và tên loài (viết thường), in nghiêng.'
      }
    ]
  },

  // 13. TIẾNG ANH 6 - ĐỀ THƯỜNG XUYÊN 2 (HK2)
  {
    id: 'quiz-g6-s2-eng-regular-2',
    title: 'English 6 - Regular Assessment (15 mins): Superlative Adjectives & World Landmarks',
    titleEn: 'English 6 - Regular Assessment (15 mins): Superlatives & Unit 9 Cities of the World',
    grade: 6,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: '15-minute quick test on superlative forms (the highest, the most exciting), city vocabulary, and reading comprehension.',
    descriptionEn: 'Quick 15-min assessment covering superlative adjectives and world cities.',
    questions: [
      {
        question: 'Choose the correct superlative form: "Mount Everest is _______ mountain in the world."',
        options: ['the highest', 'higher', 'the most high', 'highest'],
        answerIndex: 0,
        hint: 'Short adjective: the + adj + -est.',
        explanation: 'For one-syllable adjectives like "high", the superlative form is "the highest".'
      },
      {
        question: 'Complete the sentence: "Tokyo is one of _______ cities on the planet."',
        options: ['the most modern', 'the modernest', 'more modern', 'most modern'],
        answerIndex: 0,
        hint: 'Long adjective: the most + adjective.',
        explanation: '"Modern" is a two-syllable adjective requiring "the most modern".'
      },
      {
        question: 'What is the superlative form of the irregular adjective "good"?',
        options: ['the best', 'the goodest', 'the better', 'the bestest'],
        answerIndex: 0,
        hint: 'good -> better -> the best.',
        explanation: '"Good" is an irregular adjective with superlative form "the best".'
      },
      {
        question: 'What is the superlative form of the irregular adjective "bad"?',
        options: ['the worst', 'the baddest', 'the worse', 'worst'],
        answerIndex: 0,
        hint: 'bad -> worse -> the worst.',
        explanation: '"Bad" is irregular and changes to "the worst".'
      },
      {
        question: 'Which iconic landmark is located in Paris, France?',
        options: ['Eiffel Tower', 'Big Ben', 'Statue of Liberty', 'Merlion'],
        answerIndex: 0,
        hint: 'A world-famous iron lattice tower designed by Gustave Eiffel.',
        explanation: 'The Eiffel Tower is the iconic symbol of Paris, France.'
      },
      {
        question: 'Choose the correct question tag: "Da Nang is a peaceful coastal city, _______?"',
        options: ["isn't it?", 'is it?', 'does it?', "doesn't it?"],
        answerIndex: 0,
        hint: 'Positive statement with "is" takes negative tag "isn\'t it?".',
        explanation: 'Affirmative clause with verb "to be" is followed by negative tag "isn\'t it?".'
      },
      {
        question: 'Find the mistake in this sentence: "Ha Long Bay is the most wonderfulest natural wonder of Vietnam."',
        options: ['most wonderfulest', 'natural wonder', 'of Vietnam', 'is'],
        answerIndex: 0,
        hint: '"Wonderful" takes "the most wonderful", never add "-est" to long adjectives.',
        explanation: 'Double superlative error: correct phrase is "the most wonderful".'
      },
      {
        question: 'What does the word "crowded" mean in: "The night market is very crowded on weekends"?',
        options: ['Full of people', 'Very quiet', 'Empty', 'Dangerous'],
        answerIndex: 0,
        hint: 'Packed with visitors and shoppers.',
        explanation: '"Crowded" means packed with many people in one area.'
      }
    ]
  },

  // 14. LỊCH SỬ & ĐỊA LÍ 6 - ĐỀ THƯỜNG XUYÊN 2 (HK2)
  {
    id: 'quiz-g6-s2-hisgeo-regular-2',
    title: 'Lịch sử & Địa lí 6 - Kiểm tra Thường xuyên (15 phút): Các đới khí hậu & Sông ngòi Trái Đất',
    titleEn: 'History & Geography 6 - Regular Assessment (15 mins): Climate Zones & Rivers',
    grade: 6,
    semester: 2,
    subject: 'Lịch sử & Địa lí',
    subjectVi: 'Lịch sử & Địa lí',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về các đới khí hậu trên Trái Đất (nhiệt đới, ôn đới, hàn đới), cấu tạo một dòng sông và chế độ nước sông ngòi.',
    descriptionEn: 'Quick 15-min test on Earth climate zones and hydrological river systems.',
    questions: [
      {
        question: 'Trên Trái Đất có bao nhiêu đới khí hậu chính theo sự phân bố nhiệt độ từ xích đạo về cực?',
        options: ['5 đới (1 đới nóng, 2 đới ôn hòa, 2 đới lạnh)', '3 đới', '4 đới', '7 đới'],
        answerIndex: 0,
        hint: '1 nhiệt đới quanh xích đạo, 2 ôn đới ở hai bán cầu và 2 hàn đới quanh cực.',
        explanation: 'Trái Đất có 5 đới nhiệt chính: 1 đới nóng (nhiệt đới), 2 đới ôn hòa (ôn đới) và 2 đới lạnh (hàn đới).'
      },
      {
        question: 'Việt Nam nằm hoàn toàn trong đới khí hậu nào sau đây?',
        options: ['Đới nóng (Nhiệt đới gió mùa)', 'Đới ôn hòa (Ôn đới)', 'Đới lạnh (Hàn đới)', 'Cận nhiệt đới khô'],
        answerIndex: 0,
        hint: 'Nằm giữa chí tuyến Bắc và Xích đạo, quanh năm nhận lượng bức xạ mặt trời lớn.',
        explanation: 'Lãnh thổ Việt Nam nằm trọn trong vành đai nhiệt đới Bắc bán cầu, mang tính chất nhiệt đới gió mùa ẩm.'
      },
      {
        question: 'Một hệ thống sông hoàn chỉnh bao gồm các bộ phận nào?',
        options: ['Sông chính, các phụ lưu (cung cấp nước) và các chi lưu (thoát nước)', 'Chỉ gồm dòng sông chính', 'Chỉ gồm cửa biển', 'Chỉ gồm các con suối nhỏ'],
        answerIndex: 0,
        hint: 'Phụ lưu đổ nước vào sông chính, chi lưu phân chia nước ra biển.',
        explanation: 'Hệ thống sông gồm: sông chính gom nước từ phụ lưu và chia nước thoát qua chi lưu ra biển/hồ.'
      },
      {
        question: 'Nguồn cung cấp nước chủ yếu cho sông ngòi ở vùng nhiệt đới gió mùa như nước ta là gì?',
        options: ['Nước mưa', 'Băng tuyết tan', 'Nước ngầm nhân tạo', 'Hơi sương sớm'],
        answerIndex: 0,
        hint: 'Mùa lũ trùng với mùa mưa lớn trong năm.',
        explanation: 'Ở vùng khí hậu nhiệt đới gió mùa, nước mưa là nguồn cung cấp chủ yếu quyết định mùa lũ và mùa cạn của sông.'
      },
      {
        question: 'Khí hậu đới lạnh (hàn đới) ở vùng cực có đặc điểm nổi bật nào?',
        options: [
          'Quanh năm giá lạnh, băng tuyết bao phủ, lượng mưa rất ít',
          'Nóng ẩm quanh năm, mưa trên 2000mm',
          'Có 4 mùa xuân hạ thu đông rõ rệt',
          'Nắng nóng gay gắt quanh năm'
        ],
        answerIndex: 0,
        hint: 'Góc chiếu mặt trời rất nhỏ, nhiệt độ thường xuyên dưới 0°C.',
        explanation: 'Đới lạnh quanh năm băng giá, bão tuyết và thực vật nghèo nàn (chỉ có rêu và địa y mùa hè).'
      },
      {
        question: 'Hồ nước ngọt lớn nhất Đông Nam Á có vai trò điều tiết lũ cho đồng bằng sông Cửu Long nước ta là:',
        options: ['Biển Hồ (Campuchia)', 'Hồ Ba Bể', 'Hồ Hoàn Kiếm', 'Hồ Tơ Nưng'],
        answerIndex: 0,
        hint: 'Nằm tại Campuchia, nối với sông Tiền và sông Hậu qua sông Mê Kông.',
        explanation: 'Biển Hồ (Tonlé Sap) là túi nước tự nhiên khổng lồ điều tiết dòng chảy sông Cửu Long mùa lũ và mùa kiệt.'
      },
      {
        question: 'Tại sao rừng phòng hộ đầu nguồn có vai trò đặc biệt quan trọng đối với sông ngòi?',
        options: [
          'Giúp giữ nước ngầm, cản dòng chảy xiết, giảm lũ quét và chống xói mòn sạt lở đất',
          'Làm sông nhanh cạn kiệt hơn',
          'Chắn gió biển vào đất liền',
          'Làm tăng nguy cơ sạt lở bờ sông'
        ],
        answerIndex: 0,
        hint: 'Rễ cây giữ đất và thảm mục giữ nước như bọt biển.',
        explanation: 'Rừng đầu nguồn điều hòa nguồn nước, hạn chế sức tàn phá của lũ quét và chống xói mòn đất.'
      },
      {
        question: 'Đại dương nào có diện tích và độ sâu lớn nhất hành tinh?',
        options: ['Thái Bình Dương', 'Đại Tây Dương', 'Ấn Độ Dương', 'Bắc Băng Dương'],
        answerIndex: 0,
        hint: 'Chiếm gần 1/3 bề mặt Trái Đất và chứa rãnh Mariana sâu hơn 11.000m.',
        explanation: 'Thái Bình Dương là đại dương lớn nhất và sâu nhất hành tinh.'
      }
    ]
  },

  // 15. GIÁO DỤC CÔNG DÂN 6 - ĐỀ THƯỜNG XUYÊN 2 (HK2)
  {
    id: 'quiz-g6-s2-civ-regular-2',
    title: 'GDCD 6 - Kiểm tra Thường xuyên (15 phút): Quyền cơ bản của trẻ em & Phòng chống bạo lực học đường',
    titleEn: 'Civics 6 - Regular Assessment (15 mins): Child Rights & School Anti-Bullying',
    grade: 6,
    semester: 2,
    subject: 'Giáo dục công dân',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về 4 nhóm quyền trẻ em (Sống còn, Bảo vệ, Phát triển, Tham gia), bổn phận học sinh và kĩ năng xử lý bạo lực học đường.',
    descriptionEn: 'Quick 15-min test on fundamental child rights and preventing school violence.',
    questions: [
      {
        question: 'Theo Công ước Quốc tế và Luật Trẻ em Việt Nam, quyền trẻ em gồm 4 nhóm quyền cơ bản nào?',
        options: [
          'Nhóm quyền Sống còn, Bảo vệ, Phát triển và Tham gia',
          'Quyền đi chơi, quyền mua sắm, quyền ngủ nướng, quyền tự do',
          'Quyền lao động nặng, quyền kinh doanh, quyền lái xe',
          'Chỉ có quyền học tập'
        ],
        answerIndex: 0,
        hint: 'Gồm 4 nhóm: Sống còn, Bảo vệ, Phát triển, Tham gia.',
        explanation: '4 nhóm quyền cơ bản bảo đảm trẻ em được chăm sóc sức khỏe, bảo vệ khỏi xâm hại, học tập phát triển và bày tỏ ý kiến.'
      },
      {
        question: 'Việc trẻ em được khai sinh, tiêm chủng vaccine phòng bệnh và chăm sóc dinh dưỡng thuộc nhóm quyền nào?',
        options: ['Nhóm quyền Sống còn', 'Nhóm quyền Tham gia', 'Nhóm quyền Lao động', 'Nhóm quyền Bí mật đời tư'],
        answerIndex: 0,
        hint: 'Quyền được bảo đảm tính mạng và sự sống cơ bản nhất.',
        explanation: 'Nhóm quyền sống còn là những quyền được bảo vệ tính mạng, được chăm sóc sức khỏe và dinh dưỡng.'
      },
      {
        question: 'Khi chứng kiến một bạn cùng lớp bị đe dọa hoặc bắt nạt, hành động nào sau đây là đúng đắn và an toàn nhất?',
        options: [
          'Báo ngay cho thầy cô giáo, ban giám hiệu hoặc bố mẹ để kịp thời can thiệp bảo vệ bạn',
          'Đứng cổ vũ và quay video đăng lên mạng xã hội',
          'Lao vào ẩu đả đánh nhau với nhóm bắt nạt',
          'Làm ngơ coi như không có chuyện gì xảy ra'
        ],
        answerIndex: 0,
        hint: 'Báo ngay cho người lớn có trách nhiệm để bảo đảm an toàn.',
        explanation: 'Báo với giáo viên hoặc người có thẩm quyền giúp can thiệp an toàn, ngăn chặn bạo lực học đường hiệu quả.'
      },
      {
        question: 'Trẻ em có bổn phận nào dưới đây đối với cha mẹ và gia đình?',
        options: [
          'Kính trọng, lễ phép, vâng lời và giúp đỡ cha mẹ những việc vừa sức',
          'Đòi hỏi cha mẹ mua đồ chơi đắt tiền vượt quá khả năng',
          'Tự ý bỏ nhà đi chơi không xin phép',
          'Không cần quan tâm đến công việc của gia đình'
        ],
        answerIndex: 0,
        hint: 'Đạo làm con: hiếu thảo, lễ độ và chia sẻ việc nhà.',
        explanation: 'Luật Trẻ em quy định bổn phận hiếu thảo, chăm chỉ học tập và tôn kính ông bà, cha mẹ.'
      },
      {
        question: 'Hành vi nào dưới đây vi phạm nghiêm trọng quyền trẻ em?',
        options: [
          'Bắt trẻ em bỏ học để đi làm thuê kiếm tiền nuôi người lớn',
          'Tổ chức tiêm vaccine miễn phí cho học sinh',
          'Xây dựng công viên và sân chơi bổ ích cho thiếu nhi',
          'Dạy bơi miễn phí phòng chống đuối nước'
        ],
        answerIndex: 0,
        hint: 'Bóc lột sức lao động và tước đoạt quyền học tập của trẻ em.',
        explanation: 'Bóc lột sức lao động trẻ em, cản trở việc học tập là hành vi vi phạm pháp luật.'
      },
      {
        question: 'Tổng đài Quốc gia bảo vệ trẻ em của Việt Nam có số điện thoại là:',
        options: ['111', '113', '114', '115'],
        answerIndex: 0,
        hint: 'Số điện thoại gồm 3 chữ số 1 liền nhau, trực 24/7 hoàn toàn miễn cước.',
        explanation: 'Tổng đài 111 là đường dây nóng miễn phí tiếp nhận thông tin bảo vệ quyền trẻ em 24/7.'
      },
      {
        question: 'Quyền được học tập, vui chơi, giải trí, tiếp cận thông tin thuộc nhóm quyền nào?',
        options: ['Nhóm quyền Phát triển', 'Nhóm quyền Sống còn', 'Nhóm quyền Khiếu nại', 'Nhóm quyền Tài phán'],
        answerIndex: 0,
        hint: 'Phát triển toàn diện về thể chất, trí tuệ và tinh thần.',
        explanation: 'Nhóm quyền phát triển đáp ứng nhu cầu giáo dục, văn hóa, vui chơi để trẻ phát triển toàn diện.'
      },
      {
        question: 'Để xây dựng tình bạn trong sáng, lành mạnh trong trường học, học sinh nên:',
        options: [
          'Chân thành, tôn trọng, tin cậy và giúp đỡ nhau cùng tiến bộ trong học tập',
          'Chia bè phái cô lập những bạn yếu thế',
          'Chỉ chơi với những bạn khá giả có xe đẹp',
          'Bao che cho bạn khi bạn vi phạm nội quy'
        ],
        answerIndex: 0,
        hint: 'Bạn tốt là người nâng đỡ và nhắc nhở nhau vươn lên.',
        explanation: 'Tình bạn lành mạnh được xây dựng trên sự chân thành, tương trợ và đồng hành vượt khó.'
      }
    ]
  },

  // 16. TIN HỌC 6 - ĐỀ THƯỜNG XUYÊN 2 (HK2)
  {
    id: 'quiz-g6-s2-it-regular-2',
    title: 'Tin học 6 - Kiểm tra Thường xuyên (15 phút): Sơ đồ khối thuật toán lặp & Biến số trong Scratch',
    titleEn: 'Informatics 6 - Regular Assessment (15 mins): Loop Algorithms & Scratch Variables',
    grade: 6,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Kiểm tra 15 phút về cấu trúc lặp trong thuật toán, mô tả bằng sơ đồ khối và lập trình khối lặp (Repeat, Forever) trong Scratch.',
    descriptionEn: 'Quick 15-min test on algorithm loops, flowchart representations, and Scratch blocks.',
    questions: [
      {
        question: 'Cấu trúc lặp trong thuật toán được sử dụng khi nào?',
        options: [
          'Khi cần thực hiện một hoặc nhiều thao tác lặp đi lặp lại nhiều lần',
          'Khi chỉ thực hiện thao tác đúng một lần duy nhất',
          'Khi không có dữ liệu đầu vào',
          'Khi muốn dừng chương trình ngay lập tức'
        ],
        answerIndex: 0,
        hint: 'Lặp lại công việc giống nhau với số lần biết trước hoặc điều kiện thỏa mãn.',
        explanation: 'Cấu trúc lặp mô tả các bước công việc được lặp lại một số lần nhất định hoặc đến khi thỏa mãn điều kiện dừng.'
      },
      {
        question: 'Trong sơ đồ khối thuật toán, hình elip (hoặc hình chữ nhật bo tròn) biểu diễn:',
        options: ['Bắt đầu hoặc Kết thúc thuật toán', 'Thao tác tính toán', 'Điều kiện rẽ nhánh', 'Nhập/xuất dữ liệu'],
        answerIndex: 0,
        hint: 'Khởi đầu (Start) và kết thúc (End).',
        explanation: 'Hình elip / oval là quy ước chuẩn biểu thị điểm bắt đầu hoặc kết thúc thuật toán.'
      },
      {
        question: 'Trong phần mềm Scratch, khối lệnh nào giúp nhân vật lặp lại một hành động đúng 10 lần?',
        options: ['repeat 10', 'forever', 'if then', 'wait 10 seconds'],
        answerIndex: 0,
        hint: 'Khối lệnh nằm trong nhóm Control (Điều khiển) có ô điền số lần lặp.',
        explanation: 'Khối "repeat [10]" lặp lại các lệnh bên trong đúng số lần quy định.'
      },
      {
        question: 'Biến số (Variable) trong lập trình là gì?',
        options: [
          'Một vùng nhớ được đặt tên dùng để lưu trữ dữ liệu và giá trị của nó có thể thay đổi trong khi chạy chương trình',
          'Một bức tranh nền',
          'Âm thanh phát ra từ loa',
          'Tên của nhân vật mèo'
        ],
        answerIndex: 0,
        hint: 'Ví dụ: biến Điểm_số (Score), biến Thời_gian (Timer).',
        explanation: 'Biến số là vùng nhớ có tên chứa giá trị có thể cập nhật, tăng giảm xuyên suốt quá trình thực thi chương trình.'
      },
      {
        question: 'Để nhân vật chú mèo Scratch vẽ được một hình vuông cạnh 100 bước, vòng lặp "repeat" cần lặp mấy lần và góc quay là bao nhiêu độ?',
        options: [
          'Lặp 4 lần: đi 100 bước, xoay phải 90 độ',
          'Lặp 3 lần: đi 100 bước, xoay phải 60 độ',
          'Lặp 4 lần: đi 100 bước, xoay phải 120 độ',
          'Lặp 6 lần: đi 100 bước, xoay phải 45 độ'
        ],
        answerIndex: 0,
        hint: 'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông 90°.',
        explanation: 'Hình vuông có 4 cạnh nên lặp 4 lần chuỗi hành động: tiến 100 bước rồi quay 90° (360°/4 = 90°).'
      },
      {
        question: 'Khối lệnh "forever" trong Scratch sẽ dừng lại khi nào?',
        options: [
          'Chỉ dừng khi bấm nút màu đỏ Stop hoặc gặp lệnh "stop all"',
          'Sau đúng 100 giây',
          'Khi nhân vật chạm mép màn hình',
          'Khi người dùng nhấn phím cách'
        ],
        answerIndex: 0,
        hint: '"Forever" nghĩa là lặp mãi mãi không hồi kết.',
        explanation: 'Khối "forever" chạy liên tục vô hạn cho đến khi người dùng bấm nút đỏ Stop hoặc gặp khối lệnh ngắt kịch bản.'
      },
      {
        question: 'Kí hiệu hình thoi trong sơ đồ khối thuật toán dùng để làm gì?',
        options: ['Kiểm tra điều kiện rẽ nhánh (Đúng / Sai)', 'Xử lý phép tính cộng trừ', 'In kết quả ra màn hình', 'Lưu tệp vào ổ cứng'],
        answerIndex: 0,
        hint: 'Tại hình thoi luôn có 2 nhánh mũi tên đi ra: Đúng (True) và Sai (False).',
        explanation: 'Hình thoi dùng để kiểm tra điều kiện logic để quyết định hướng đi tiếp theo của thuật toán.'
      },
      {
        question: 'Lợi ích lớn nhất của việc chia bài toán lớn thành các công việc nhỏ hơn trong tư duy máy tính là:',
        options: [
          'Giúp bài toán dễ hiểu, dễ quản lý, dễ tìm lỗi và giải quyết từng bước hiệu quả',
          'Làm bài toán trở nên phức tạp hơn',
          'Tăng dung lượng tệp lưu trữ',
          'Không có lợi ích gì'
        ],
        answerIndex: 0,
        hint: 'Tư duy phân rã vấn đề (Decomposition).',
        explanation: 'Phân rã vấn đề thành các bài toán con là kĩ năng cốt lõi của tư duy tính toán giúp giải quyết bài toán phức tạp một cách có hệ thống.'
      }
    ]
  }
];
