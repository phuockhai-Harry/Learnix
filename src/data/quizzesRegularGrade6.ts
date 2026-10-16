import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic 15-Minute Regular Assessment Tests (Kiểm tra Thường xuyên) for Grade 6
 * Compliant with Vietnamese General Education Curriculum GDPT 2018 (Thông tư 22/2021/TT-BGDĐT)
 * Covers Semesters 1 & 2 for all 8 compulsory subjects.
 */
export const GRADE_6_REGULAR_QUIZZES: CurriculumQuiz[] = [
  // ==========================================
  // SEMESTER 1 - KIỂM TRA THƯỜNG XUYÊN (15 PHÚT)
  // ==========================================

  // 1. TOÁN HỌC 6 - THƯỜNG XUYÊN HK1
  {
    id: 'quiz-g6-s1-math-regular',
    title: 'Toán 6 - Kiểm tra Thường xuyên (15 phút): Tập hợp, Lũy thừa & ƯC - BC',
    titleEn: 'Math 6 - Regular Assessment (15 mins): Sets, Exponents & Factors',
    grade: 6,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra thường xuyên 15 phút đánh giá kĩ năng: Phần tử tập hợp, quy tắc nhân chia lũy thừa cùng cơ số, dấu hiệu chia hết cho 2, 3, 5, 9 và tìm ƯCLN, BCNN.',
    descriptionEn: '15-minute quick test on set notation, exponent laws, divisibility rules and GCD/LCM.',
    questions: [
      {
        question: 'Cho tập hợp A = {2; 3; 5; 7}. Khẳng định nào sau đây là ĐÚNG?',
        options: ['5 ∈ A', '4 ∈ A', '{2} ∈ A', '7 ∉ A'],
        answerIndex: 0,
        hint: 'Kí hiệu ∈ dùng cho phần tử thuộc tập hợp.',
        explanation: 'Số 5 là một phần tử có mặt trong tập hợp A nên 5 ∈ A.'
      },
      {
        question: 'Viết tích 3⁴ × 3² dưới dạng một lũy thừa:',
        options: ['3⁶', '3⁸', '9⁶', '3²'],
        answerIndex: 0,
        hint: 'Giữ nguyên cơ số, cộng các số mũ: aᵐ × aⁿ = aᵐ⁺ⁿ.',
        explanation: '3⁴ × 3² = 3⁴⁺² = 3⁶.'
      },
      {
        question: 'Số nào sau đây chia hết cho cả 2 và 5?',
        options: ['120', '125', '132', '144'],
        answerIndex: 0,
        hint: 'Số chia hết cho cả 2 và 5 có chữ số tận cùng là 0.',
        explanation: '120 có tận cùng là 0 nên chia hết cho cả 2 và 5.'
      },
      {
        question: 'Ước chung lớn nhất của 12 và 18, kí hiệu ƯCLN(12, 18), là:',
        options: ['6', '3', '2', '36'],
        answerIndex: 0,
        hint: '12 = 2² × 3; 18 = 2 × 3² => ƯCLN = 2 × 3 = 6.',
        explanation: 'ƯCLN(12, 18) = 6 vì 6 là số lớn nhất mà cả 12 và 18 đều chia hết.'
      },
      {
        question: 'Trong các số sau, số nào là số nguyên tố?',
        options: ['17', '9', '15', '21'],
        answerIndex: 0,
        hint: 'Số nguyên tố chỉ có đúng hai ước là 1 và chính nó.',
        explanation: '17 là số nguyên tố vì chỉ chia hết cho 1 và 17. 9, 15, 21 là hợp số.'
      },
      {
        question: 'Bội chung nhỏ nhất của 4 và 6, kí hiệu BCNN(4, 6), là:',
        options: ['12', '24', '2', '6'],
        answerIndex: 0,
        hint: 'Bội dương nhỏ nhất chia hết cho cả 4 và 6 là 12.',
        explanation: '4 = 2²; 6 = 2 × 3 => BCNN(4, 6) = 2² × 3 = 12.'
      },
      {
        question: 'Hình tam giác đều có bao nhiêu trục đối xứng?',
        options: ['3', '1', '2', '0'],
        answerIndex: 0,
        hint: 'Tam giác đều có 3 đường cao đồng thời là 3 trục đối xứng.',
        explanation: 'Tam giác đều có đúng 3 trục đối xứng đi qua mỗi đỉnh và trung điểm cạnh đối diện.'
      },
      {
        question: 'Tập hợp các ước của 6 là:',
        options: ['{1; 2; 3; 6}', '{0; 1; 2; 3; 6}', '{2; 3; 6}', '{1; 2; 6}'],
        answerIndex: 0,
        hint: 'Các số tự nhiên mà 6 chia hết là 1, 2, 3, 6.',
        explanation: 'Ư(6) = {1; 2; 3; 6}. Số 0 không thể là ước của bất kì số nào.'
      }
    ]
  },

  // 2. NGỮ VĂN 6 - THƯỜNG XUYÊN HK1
  {
    id: 'quiz-g6-s1-lit-regular',
    title: 'Ngữ văn 6 - Kiểm tra Thường xuyên (15 phút): Truyện đồng thoại & Thơ lục bát',
    titleEn: 'Literature 6 - Regular Assessment (15 mins): Fables & Folk Poetry',
    grade: 6,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về đặc trưng truyện đồng thoại (Bài học đường đời đầu tiên), nhân vật Dế Mèn, thể thơ lục bát và phép so sánh, nhân hóa.',
    descriptionEn: 'Quick 15-min assessment on animal fable characteristics, Dế Mèn story, and six-eight poetry rhythm.',
    questions: [
      {
        question: 'Tác giả của tác phẩm thiếu nhi nổi tiếng "Dế Mèn phiêu lưu ký" là ai?',
        options: ['Tô Hoài', 'Nguyễn Du', 'Đoàn Giỏi', 'Vũ Hùng'],
        answerIndex: 0,
        hint: 'Nhà văn Tô Hoài (1920 - 2014) là tác giả của Dế Mèn phiêu lưu ký.',
        explanation: 'Tô Hoài sáng tác tác phẩm kinh điển "Dế Mèn phiêu lưu ký" năm 1941.'
      },
      {
        question: 'Nhân vật Dế Mèn trong "Bài học đường đời đầu tiên" có tính cách nổi bật là:',
        options: ['Cường tráng nhưng kiêu căng, xốc nổi', 'Hiền lành, nhút nhát', 'Chăm chỉ, khiêm nhường', 'Tốt bụng, luôn giúp đỡ kẻ yếu'],
        answerIndex: 0,
        hint: 'Dế Mèn tự hào về vẻ đẹp lực lưỡng của mình nên coi thường Dế Choắt và trêu chị Cốc.',
        explanation: 'Dế Mèn tự cao, ngạo mạn, trêu chị Cốc dẫn đến cái chết oan ức của Dế Choắt.'
      },
      {
        question: 'Trong thể thơ lục bát, tiếng thứ 6 của câu sáu hiệp vần với tiếng thứ mấy của câu tám?',
        options: ['Tiếng thứ sáu', 'Tiếng thứ tám', 'Tiếng thứ tư', 'Tiếng thứ hai'],
        answerIndex: 0,
        hint: 'Quy tắc vần lục bát: Tiếng 6 câu lục vần với tiếng 6 câu bát.',
        explanation: 'Luật gieo vần thơ lục bát quy định: Tiếng thứ 6 câu lục gieo vần với tiếng thứ 6 câu bát.'
      },
      {
        question: 'Câu "Mặt trời như quả cầu lửa khổng lồ từ từ nhô lên" sử dụng biện pháp tu từ nào?',
        options: ['So sánh', 'Nhân hóa', 'Ẩn dụ', 'Điệp từ'],
        answerIndex: 0,
        hint: 'Có từ so sánh "như" giữa hai sự vật.',
        explanation: 'Biện pháp so sánh được nhận biết qua từ so sánh "như" giữa "Mặt trời" và "quả cầu lửa".'
      },
      {
        question: 'Từ nào dưới đây là từ láy tượng hình?',
        options: ['Rón rén', 'Học hành', 'Nhà cửa', 'Xe cộ'],
        answerIndex: 0,
        hint: 'Từ láy tượng hình mô tả dáng vẻ, hành động chuyển động nhẹ nhàng.',
        explanation: '"Rón rén" là từ láy gợi tả hành động bước đi nhẹ nhàng, cẩn trọng.'
      },
      {
        question: 'Bài học đắt giá mà Dế Mèn rút ra sau cái chết của Dế Choắt là:',
        options: ['Ở đời không được kiêu ngạo, hung hăng hại người', 'Cần phải rèn luyện đôi càng sắc nhọn hơn', 'Không bao giờ được ra ngoài hang', 'Không kết bạn với loài vật yếu ớt'],
        answerIndex: 0,
        hint: 'Thói hung hăng bậy bạ có khi mang họa vào thân và hại người khác.',
        explanation: 'Dế Mèn hối hận: "Ở đời mà có thói hung hăng bậy bạ... sớm muộn cũng mang vạ vào thân".'
      },
      {
        question: 'Truyện đồng thoại thường có nhân vật chính là:',
        options: ['Loài vật, đồ vật được nhân hóa', 'Các vị thần linh siêu nhiên', 'Các nhà khoa học viễn tưởng', 'Các danh nhân lịch sử'],
        answerIndex: 0,
        hint: 'Nhân vật đồng thoại mang đặc điểm sinh học loài vật nhưng biết suy nghĩ như con người.',
        explanation: 'Truyện đồng thoại viết cho thiếu nhi có nhân vật là loài vật hoặc đồ vật được nhân hóa sinh động.'
      },
      {
        question: 'Từ "dũng cảm" thuộc từ loại nào?',
        options: ['Tính từ', 'Danh từ', 'Động từ', 'Quan hệ từ'],
        answerIndex: 0,
        hint: 'Từ chỉ đặc điểm tính chất phẩm chất con người.',
        explanation: '"Dũng cảm" là tính từ chỉ phẩm chất dám đối mặt với gian nan thử thách.'
      }
    ]
  },

  // 3. KHOA HỌC TỰ NHIÊN 6 - THƯỜNG XUYÊN HK1
  {
    id: 'quiz-g6-s1-sci-regular',
    title: 'KHTN 6 - Kiểm tra Thường xuyên (15 phút): Đo lường, Chất & Tế bào',
    titleEn: 'Science 6 - Regular Assessment (15 mins): Measurement, Matter & Cell',
    grade: 6,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về dụng cụ đo (thước, cân, nhiệt kế), ba thể của chất (rắn, lỏng, khí) và các bào quan cơ bản của tế bào sinh vật.',
    descriptionEn: 'Quick check on lab measurement tools, physical states of matter, and basic cell structure.',
    questions: [
      {
        question: 'Đơn vị đo chiều dài hợp pháp trong hệ thống đo lường Việt Nam là:',
        options: ['Mét (m)', 'Kilôgam (kg)', 'Giây (s)', 'Lít (L)'],
        answerIndex: 0,
        hint: 'Hệ SI quy định đơn vị chiều dài là mét.',
        explanation: 'Mét (m) là đơn vị đo độ dài chính thức của hệ đo lường quốc tế và Việt Nam.'
      },
      {
        question: 'Dụng cụ nào sau đây dùng để đo nhiệt độ cơ thể người?',
        options: ['Nhiệt kế y tế', 'Cân điện tử', 'Thước kẹp', 'Bình chia độ'],
        answerIndex: 0,
        hint: 'Dùng để theo dõi thân nhiệt khi ốm sốt.',
        explanation: 'Nhiệt kế y tế có thang chia độ từ khoảng 35°C đến 42°C chuyên dùng đo nhiệt độ cơ thể.'
      },
      {
        question: 'Chất ở thể lỏng có đặc điểm nào dưới đây?',
        options: ['Có thể tích xác định nhưng không có hình dạng xác định', 'Có hình dạng và thể tích cố định', 'Dễ dàng nén lại và lan tỏa tự do', 'Không có thể tích xác định'],
        answerIndex: 0,
        hint: 'Nước lỏng đựng trong chai có hình cái chai, đựng trong bát có hình cái bát.',
        explanation: 'Chất lỏng có thể tích xác định nhưng hình dạng phụ thuộc vào vật chứa.'
      },
      {
        question: 'Thành phần nào của tế bào giữ vai trò điều khiển mọi hoạt động sống?',
        options: ['Nhân tế bào', 'Màng tế bào', 'Chất tế bào', 'Lục lạp'],
        answerIndex: 0,
        hint: 'Chứa vật chất di truyền DNA/Nhiễm sắc thể điều khiển tế bào.',
        explanation: 'Nhân tế bào (hoặc vùng nhân) là trung tâm điều khiển mọi hoạt động sống của tế bào.'
      },
      {
        question: 'Tế bào thực vật có bào quan nào chứa sắc tố diệp lục để quang hợp?',
        options: ['Lục lạp', 'Ti thể', 'Không bào lớn', 'Thành cellulose'],
        answerIndex: 0,
        hint: 'Bào quan có màu xanh lục hấp thụ ánh sáng mặt trời.',
        explanation: 'Lục lạp chứa diệp lục giúp thực vật hấp thụ ánh sáng để tổng hợp chất hữu cơ (quang hợp).'
      },
      {
        question: 'Khí nào chiếm tỉ lệ thể tích lớn nhất trong không khí khô (khoảng 78%)?',
        options: ['Khí Nitrogen (N₂)', 'Khí Oxygen (O₂)', 'Khí Carbon dioxide (CO₂)', 'Khí Argon (Ar)'],
        answerIndex: 0,
        hint: 'Oxygen chiếm khoảng 21%, còn lại phần lớn là khí này.',
        explanation: 'Không khí bao gồm khoảng 78% Nitrogen, 21% Oxygen và 1% các khí khác.'
      },
      {
        question: 'Quá trình chất chuyển từ thể lỏng sang thể khí (hơi) gọi là:',
        options: ['Sự bay hơi / Sự sôi', 'Sự đông đặc', 'Sự nóng chảy', 'Sự ngưng tụ'],
        answerIndex: 0,
        hint: 'Nước bốc hơi khi đun nóng.',
        explanation: 'Sự hóa hơi là quá trình chuyển từ thể lỏng sang thể khí (bao gồm bay hơi và sôi).'
      },
      {
        question: 'Vật thể nào sau đây là vật thể tự nhiên?',
        options: ['Cây bàng', 'Bàn gỗ', 'Xe đạp', 'Bút bi'],
        answerIndex: 0,
        hint: 'Vật thể có sẵn trong thiên nhiên, không do con người chế tạo.',
        explanation: 'Cây bàng là sinh vật sống tự nhiên. Bàn gỗ, xe đạp, bút bi là vật thể nhân tạo.'
      }
    ]
  },

  // 4. TIẾNG ANH 6 - THƯỜNG XUYÊN HK1
  {
    id: 'quiz-g6-s1-eng-regular',
    title: 'Tiếng Anh 6 - Kiểm tra Thường xuyên (15 phút): Present Simple & School Life',
    titleEn: 'English 6 - Regular Assessment (15 mins): Present Simple & School Vocab',
    grade: 6,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút ngữ pháp Thì Hiện tại đơn, động từ have/has, từ vựng đồ dùng học tập Units 1 - 3 Global Success.',
    descriptionEn: 'Quick 15-min quiz on Present Simple tense, school vocabulary and possessive adjectives.',
    questions: [
      {
        question: 'Look! She _______ judo twice a week after school.',
        options: ['does', 'plays', 'makes', 'has'],
        answerIndex: 0,
        hint: 'We use the verb "do" with martial arts like judo, karate.',
        explanation: 'Collocation: "do judo", "do karate". Subject "she" takes "does".'
      },
      {
        question: 'Nam and Ba _______ in the library right now.',
        options: ['are studying', 'studies', 'study', 'is studying'],
        answerIndex: 0,
        hint: '"Right now" is a signal word for Present Continuous.',
        explanation: 'Present continuous with plural subject Nam and Ba: "are studying".'
      },
      {
        question: 'My brother _______ to school on Sundays.',
        options: ["doesn't go", "don't go", "isn't go", 'not goes'],
        answerIndex: 0,
        hint: 'Negative Present Simple with singular subject: does not + V-infinitive.',
        explanation: 'Subject "My brother" (he) uses the auxiliary verb "doesn\'t go".'
      },
      {
        question: 'Which item is used to sharpen pencils?',
        options: ['Pencil sharpener', 'Compass', 'Calculator', 'Rubber'],
        answerIndex: 0,
        hint: 'It makes pencils sharp for writing and drawing.',
        explanation: 'A pencil sharpener is used to sharpen wooden pencils.'
      },
      {
        question: 'There _______ a large computer room and two science labs in our new school.',
        options: ['is', 'are', 'have', 'has'],
        answerIndex: 0,
        hint: 'With "there is/are", the verb agrees with the nearest noun phrase: "a large computer room".',
        explanation: '"a large computer room" is singular, so we use "There is".'
      },
      {
        question: 'Phong is very _______. He always helps his friends with difficult homework.',
        options: ['helpful', 'shy', 'lazy', 'curious'],
        answerIndex: 0,
        hint: 'Someone who likes to give help to others.',
        explanation: 'Helpful means willing to help other people.'
      },
      {
        question: 'What time _______ you usually have breakfast in the morning?',
        options: ['do', 'does', 'are', 'is'],
        answerIndex: 0,
        hint: 'Question in Present Simple with subject "you" requires auxiliary "do".',
        explanation: 'We use "do" with subject "you" in Present Simple questions: "do you have".'
      },
      {
        question: 'An: "Would you like to come to my house for lunch?" - Mai: "_______"',
        options: ["I'd love to, thanks!", 'No, I am not.', 'Yes, I do.', 'You are welcome.'],
        answerIndex: 0,
        hint: 'Polite acceptance to an invitation.',
        explanation: '"I\'d love to, thanks!" is the natural, polite response to accept an invitation.'
      }
    ]
  },

  // 5. LỊCH SỬ & ĐỊA LÍ 6 - THƯỜNG XUYÊN HK1
  {
    id: 'quiz-g6-s1-hisgeo-regular',
    title: 'Lịch sử & Địa lí 6 - Kiểm tra Thường xuyên (15 phút): Nguyên thủy & Bản đồ',
    titleEn: 'History & Geography 6 - Regular Assessment (15 mins): Prehistory & Maps',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử & Địa lí',
    subjectVi: 'Lịch sử & Địa lí',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về nguồn gốc loài người, các giai đoạn thời nguyên thủy, kinh tuyến, vĩ tuyến và tỉ lệ bản đồ.',
    descriptionEn: 'Quick assessment on human origins, primitive societies, latitude/longitude, and map scales.',
    questions: [
      {
        question: 'Người tối cổ xuất hiện trên Trái Đất vào khoảng thời gian nào?',
        options: ['Khoảng 4 triệu năm trước', 'Khoảng 15 vạn năm trước', 'Khoảng 4 vạn năm trước', 'Khoảng 1000 năm trước'],
        answerIndex: 0,
        hint: 'Dấu vết Người tối cổ có niên đại khoảng 4 triệu năm trước tại Đông Phi.',
        explanation: 'Người tối cổ có niên đại sớm nhất khoảng 4 triệu năm trước tại khu vực Đông Phi.'
      },
      {
        question: 'Phát minh quan trọng nhất giúp Người tối cổ sưởi ấm, nướng chín thức ăn và xua đuổi thú dữ là:',
        options: ['Tìm ra và giữ lửa', 'Chế tạo cung tên', 'Tìm ra kim loại đồng', 'Làm gốm sứ'],
        answerIndex: 0,
        hint: 'Lửa là phát minh vĩ đại bước ngoặt của loài người nguyên thủy.',
        explanation: 'Lửa giúp con người bước qua thời kì ăn sống ở lỗ, bảo vệ khỏi thú dữ và phát triển trí não.'
      },
      {
        question: 'Đường vĩ tuyến lớn nhất chia Trái Đất thành Bán cầu Bắc và Bán cầu Nam là:',
        options: ['Đường Xích đạo (0°)', 'Kinh tuyến gốc (0°)', 'Chí tuyến Bắc', 'Chí tuyến Nam'],
        answerIndex: 0,
        hint: 'Vĩ tuyến 0 độ nằm chính giữa địa cầu.',
        explanation: 'Đường Xích đạo có vĩ độ 0°, là vòng tròn vĩ tuyến lớn nhất chia đôi Trái Đất.'
      },
      {
        question: 'Nếu tỉ lệ bản đồ là 1 : 100 000, khoảng cách 1 cm trên bản đồ tương ứng với bao nhiêu ngoài thực địa?',
        options: ['1 km (1 000 m)', '100 m', '10 km', '10 000 m'],
        answerIndex: 0,
        hint: '100 000 cm = 1 000 m = 1 km.',
        explanation: '1 cm trên bản đồ tương ứng 100 000 cm thực địa = 1 km.'
      },
      {
        question: 'Kim tự tháp Kê-ốp (Khufu) nổi tiếng là kì quan kiến trúc của nền văn minh cổ đại nào?',
        options: ['Ai Cập cổ đại', 'Lưỡng Hà cổ đại', 'Hy Lạp cổ đại', 'Ấn Độ cổ đại'],
        answerIndex: 0,
        hint: 'Xây dựng bên bờ sông Nin hùng vĩ.',
        explanation: 'Kim tự tháp Ai Cập là lăng mộ khổng lồ của các Pharaon xây dựng ven sông Nin.'
      },
      {
        question: 'Kinh tuyến đi qua đài thiên văn Grin-uýt (Greenwich, London, Anh) được quy ước là:',
        options: ['Kinh tuyến gốc (0°)', 'Kinh tuyến 180°', 'Kinh tuyến Tây', 'Kinh tuyến Đông'],
        answerIndex: 0,
        hint: 'Kinh tuyến mang số 0 độ chuẩn quốc tế.',
        explanation: 'Kinh tuyến 0° đi qua Greenwich được quy ước là kinh tuyến gốc của Trái Đất.'
      },
      {
        question: 'Tổ chức xã hội đầu tiên của loài người thời nguyên thủy là:',
        options: ['Bầy người nguyên thủy', 'Thị tộc', 'Bộ lạc', 'Gia đình hạt nhân'],
        answerIndex: 0,
        hint: 'Các nhóm người sống quần tụ vài chục người cùng tìm kiếm thức ăn.',
        explanation: 'Bầy người nguyên thủy là hình thức tổ chức sơ khai nhất gồm vài chục người sống cùng nhau.'
      },
      {
        question: 'Hướng chính giữa phía trên của bản đồ theo quy ước địa lí thông thường là hướng nào?',
        options: ['Hướng Bắc', 'Hướng Nam', 'Hướng Đông', 'Hướng Tây'],
        answerIndex: 0,
        hint: 'Trên Bắc, dưới Nam, phải Đông, trái Tây.',
        explanation: 'Quy ước chuẩn: Phía trên là hướng Bắc, phía dưới là hướng Nam.'
      }
    ]
  },

  // 6. GIÁO DỤC CÔNG DÂN 6 - THƯỜNG XUYÊN HK1
  {
    id: 'quiz-g6-s1-civ-regular',
    title: 'GDCD 6 - Kiểm tra Thường xuyên (15 phút): Đạo đức & Yêu thương con người',
    titleEn: 'Civics 6 - Regular Assessment (15 mins): Ethics & Compassion',
    grade: 6,
    semester: 1,
    subject: 'Giáo dục công dân',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về truyền thống gia đình dòng họ, tình yêu thương con người và đức tính siêng năng, kiên trì.',
    descriptionEn: 'Quick 15-min assessment on family traditions, loving kindness, and perseverance.',
    questions: [
      {
        question: 'Câu tục ngữ nào sau đây ca ngợi truyền thống yêu thương, tương thân tương ái giữa con người?',
        options: ['Lá lành đùm lá rách', 'Có công mài sắt có ngày nên kim', 'Uống nước nhớ nguồn', 'Lời nói chẳng mất tiền mua'],
        answerIndex: 0,
        hint: 'Giúp đỡ chia sẻ với người gặp khó khăn, hoạn nạn.',
        explanation: '"Lá lành đùm lá rách" biểu thị lòng nhân ái, sẵn sàng giúp đỡ người khó khăn.'
      },
      {
        question: 'Hành vi nào thể hiện thái độ tôn trọng sự thật?',
        options: ['Dũng cảm nhận lỗi khi mình làm vỡ lọ hoa của lớp', 'Nói dối bố mẹ để đi chơi game', 'Đổ tội cho bạn để mình không bị phạt', 'Chép bài của bạn trong giờ kiểm tra'],
        answerIndex: 0,
        hint: 'Thẳng thắn, trung thực, không giấu giếm khuyết điểm.',
        explanation: 'Dũng cảm nhận lỗi và sửa sai là biểu hiện cao đẹp của đức tính tôn trọng sự thật.'
      },
      {
        question: 'Thế nào là siêng năng, kiên trì?',
        options: ['Cần cù, tự giác, quyết tâm vượt khó khăn để hoàn thành mục tiêu', 'Chỉ làm bài khi có cô giáo nhắc nhở', 'Gặp bài toán khó là bỏ cuộc ngay', 'Làm việc theo cảm hứng nhất thời'],
        answerIndex: 0,
        hint: 'Cần cù làm việc đều đặn không nản lòng trước gian khổ.',
        explanation: 'Siêng năng là làm việc tự giác đều đặn; kiên trì là quyết tâm làm đến cùng dù có gian nan.'
      },
      {
        question: 'Hành động nào sau đây giữ gìn và phát huy truyền thống tốt đẹp của gia đình, dòng họ?',
        options: ['Học tập chăm chỉ và tiếp nối nghề truyền thống làm gốm của quê hương', 'Tự ti vì gia đình làm nông nghiệp', 'Tiêu xài hoang phí tiền của cha mẹ', 'Chê bai nghề may truyền thống của gia đình'],
        answerIndex: 0,
        hint: 'Trân trọng, tự hào và nỗ lực học tập để kế thừa di sản cha ông.',
        explanation: 'Nỗ lực học tập và tiếp nối nghề truyền thống thể hiện lòng biết ơn và niềm tự hào nguồn cội.'
      },
      {
        question: 'Khi thấy một bạn cùng lớp bị ngã xe trầy xước chân tay, em nên làm gì?',
        options: ['Chạy lại đỡ bạn dậy, hỏi thăm và đưa bạn vào phòng y tế trường', 'Đứng nhìn và cười đùa cùng các bạn khác', 'Bỏ đi thật nhanh coi như không thấy', 'Chụp ảnh đăng lên mạng xã hội'],
        answerIndex: 0,
        hint: 'Thể hiện sự cảm thông và hành động trợ giúp kịp thời.',
        explanation: 'Giúp đỡ bạn lúc tai nạn là hành vi chuẩn mực của tình yêu thương và tinh thần nhân ái.'
      },
      {
        question: 'Câu nói "Có công mài sắt, có ngày nên kim" khuyên nhủ chúng ta rèn luyện phẩm chất gì?',
        options: ['Lòng kiên trì, bền bỉ', 'Tính tiết kiệm', 'Lòng dũng cảm', 'Tính trung thực'],
        answerIndex: 0,
        hint: 'Mài thanh sắt to thành chiếc kim nhỏ đòi hỏi sự bền bỉ theo thời gian.',
        explanation: 'Câu tục ngữ răn dạy con người phải có ý chí kiên trì, không nản lòng trước mọi thử thách.'
      },
      {
        question: 'Tôn trọng sự thật mang lại lợi ích gì cho bản thân và xã hội?',
        options: ['Được mọi người tin cậy, tôn trọng và góp phần xây dựng xã hội công bằng', 'Giúp kiếm được nhiều tiền bất chính', 'Giúp che giấu được các lỗi lầm', 'Làm mọi người sợ hãi'],
        answerIndex: 0,
        hint: 'Người thật thà luôn nhận được sự kính trọng và tin tưởng từ mọi người.',
        explanation: 'Tôn trọng sự thật bảo vệ công lí, tạo niềm tin cậy và giúp tâm hồn thanh thản.'
      },
      {
        question: 'Khi gia đình em có truyền thống hiếu học nhiều đời đỗ đạt, trách nhiệm của em là:',
        options: ['Chăm chỉ học tập, rèn luyện đạo đức để noi gương các thế hệ đi trước', 'Ỷ lại vào gia đình không cần học bài', 'Khoe khoang tự đắc với bạn bè', 'Bắt bạn bè phải phục vụ mình'],
        answerIndex: 0,
        hint: 'Noi gương truyền thống bằng chính nỗ lực rèn đức luyện tài của bản thân.',
        explanation: 'Tự hào bằng hành động thực tế: ra sức học hành chăm chỉ để xứng đáng với truyền thống.'
      }
    ]
  },

  // 7. TIN HỌC 6 - THƯỜNG XUYÊN HK1
  {
    id: 'quiz-g6-s1-it-regular',
    title: 'Tin học 6 - Kiểm tra Thường xuyên (15 phút): Thông tin, Dữ liệu & Mạng máy tính',
    titleEn: 'Informatics 6 - Regular Assessment (15 mins): Data, Info & Networks',
    grade: 6,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về khái niệm thông tin và dữ liệu, đơn vị đo dung lượng bộ nhớ (Byte, KB, MB, GB) và mạng Internet.',
    descriptionEn: 'Quick 15-min check on information vs data, storage capacity units (Byte, KB, GB) and computer networks.',
    questions: [
      {
        question: 'Mối quan hệ chính xác giữa thông tin và dữ liệu là gì?',
        options: ['Dữ liệu là nguồn gốc để rút ra thông tin qua quá trình xử lí', 'Thông tin và dữ liệu là hai từ hoàn toàn giống nhau', 'Dữ liệu chỉ tồn tại dưới dạng chữ viết', 'Thông tin không mang lại hiểu biết gì'],
        answerIndex: 0,
        hint: 'Các con số, hình ảnh thô là dữ liệu; sau khi con người đọc hiểu sẽ trở thành thông tin.',
        explanation: 'Dữ liệu là vật mang thông tin (chữ, số, hình, âm); thông tin là sự hiểu biết được rút ra từ dữ liệu.'
      },
      {
        question: 'Đơn vị đo lượng dữ liệu nhỏ nhất trong máy tính là:',
        options: ['Bit', 'Byte', 'Kilobyte', 'Megabyte'],
        answerIndex: 0,
        hint: 'Chỉ nhận một trong hai giá trị 0 hoặc 1.',
        explanation: 'Bit (viết tắt của binary digit) là đơn vị cơ bản nhỏ nhất lưu trữ số nhị phân 0 hoặc 1.'
      },
      {
        question: '1 Byte (B) bằng bao nhiêu bit?',
        options: ['8 bit', '2 bit', '10 bit', '1024 bit'],
        answerIndex: 0,
        hint: '1 Byte là dãy gồm 8 bit nhị phân.',
        explanation: 'Theo chuẩn tin học: 1 Byte = 8 bit.'
      },
      {
        question: 'Thứ tự đúng của các đơn vị đo dung lượng nhớ từ nhỏ đến lớn là:',
        options: ['B < KB < MB < GB < TB', 'B < MB < KB < GB < TB', 'KB < B < MB < TB < GB', 'TB < GB < MB < KB < B'],
        answerIndex: 0,
        hint: 'Mỗi đơn vị kế tiếp gấp 1024 lần đơn vị liền trước.',
        explanation: 'Thứ tự chuẩn: Byte (B) -> Kilobyte (KB) -> Megabyte (MB) -> Gigabyte (GB) -> Terabyte (TB).'
      },
      {
        question: 'Mạng máy tính là tập hợp các máy tính được kết nối với nhau nhằm mục đích gì?',
        options: ['Chia sẻ dữ liệu và dùng chung thiết bị (máy in, máy quét...)', 'Chỉ để xem phim một mình', 'Làm cho máy tính chạy chậm lại', 'Để tắt nguồn cùng một lúc'],
        answerIndex: 0,
        hint: 'Giúp trao đổi tập tin và dùng chung tài nguyên phần cứng.',
        explanation: 'Mạng máy tính giúp kết nối các thiết bị để chia sẻ thông tin và dùng chung tài nguyên phần cứng/phần mềm.'
      },
      {
        question: 'Thiết bị nào sau đây là thiết bị đầu cuối trong mạng máy tính?',
        options: ['Máy tính bảng, điện thoại thông minh, laptop', 'Dây cáp mạng', 'Bộ chuyển mạch Switch', 'Bộ định tuyến Router'],
        answerIndex: 0,
        hint: 'Thiết bị người dùng trực tiếp sử dụng để gửi hoặc nhận dữ liệu.',
        explanation: 'Máy tính, điện thoại, máy in là các thiết bị đầu cuối (End Devices).'
      },
      {
        question: 'Biện pháp nào sau đây giúp bảo vệ thông tin cá nhân an toàn trên mạng Internet?',
        options: ['Đặt mật khẩu mạnh gồm cả chữ hoa, chữ thường, số và kí tự đặc biệt', 'Chia sẻ mật khẩu cho tất cả bạn bè trong lớp', 'Nhấp vào các đường link lạ gửi qua tin nhắn', 'Đăng số căn cước và địa chỉ nhà lên mạng xã hội'],
        answerIndex: 0,
        hint: 'Mật khẩu phức tạp và không tiết lộ cho người lạ.',
        explanation: 'Mật khẩu mạnh và bảo mật thông tin cá nhân là nguyên tắc hàng đầu để an toàn mạng.'
      },
      {
        question: 'Ứng dụng nào sau đây thường dùng để tạo sơ đồ tư duy (Mind Map)?',
        options: ['Mindmeister / Coggle', 'Phần mềm Paint vẽ hình', 'Phần mềm Calculator máy tính', 'Phần mềm nghe nhạc'],
        answerIndex: 0,
        hint: 'Công cụ vẽ sơ đồ phân nhánh ý tưởng trực quan.',
        explanation: 'Mindmeister, Coggle, XMind là các phần mềm chuyên nghiệp hỗ trợ xây dựng sơ đồ tư duy.'
      }
    ]
  },

  // 8. CÔNG NGHỆ 6 - THƯỜNG XUYÊN HK1
  {
    id: 'quiz-g6-s1-tech-regular',
    title: 'Công nghệ 6 - Kiểm tra Thường xuyên (15 phút): Nhà ở & Bảo quản thực phẩm',
    titleEn: 'Technology 6 - Regular Assessment (15 mins): Housing & Food Preservation',
    grade: 6,
    semester: 1,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về vai trò của nhà ở, các khu vực chức năng trong ngôi nhà thông minh và phương pháp bảo quản thực phẩm an toàn.',
    descriptionEn: 'Quick 15-min check on residential housing functions, smart homes, and food preservation.',
    questions: [
      {
        question: 'Nhà ở có vai trò quan trọng nhất đối với con người là:',
        options: ['Bảo vệ con người trước các tác động thời tiết và là nơi sinh hoạt, gắn kết gia đình', 'Chỉ là nơi chứa đồ đạc khi đi vắng', 'Nơi con người buôn bán hàng hóa', 'Chỉ để ngủ vào ban đêm'],
        answerIndex: 0,
        hint: 'Che mưa nắng, bảo vệ an toàn và là tổ ấm sum họp của gia đình.',
        explanation: 'Nhà ở là nơi che chở con người khỏi mưa bão, nắng gió và phục vụ mọi nhu cầu sinh hoạt hàng ngày.'
      },
      {
        question: 'Đặc điểm nổi bật nhất của một "Ngôi nhà thông minh" (Smart Home) là:',
        options: ['Các thiết bị điện tử có thể tự động hóa và điều khiển từ xa qua điện thoại', 'Ngôi nhà có diện tích rộng nhất khu phố', 'Ngôi nhà xây bằng vàng bạc đắt tiền', 'Ngôi nhà không có cửa ra vào'],
        answerIndex: 0,
        hint: 'Tự động bật tắt đèn, điều hòa nhiệt độ, báo trộm thông minh.',
        explanation: 'Ngôi nhà thông minh ứng dụng công nghệ IoT giúp thiết bị tự động vận hành và điều khiển từ xa tiện lợi.'
      },
      {
        question: 'Để tiết kiệm năng lượng điện trong gia đình, chúng ta nên:',
        options: ['Tắt các thiết bị điện khi không sử dụng và tận dụng ánh sáng tự nhiên', 'Bật đèn phòng khách suốt ngày đêm', 'Bật điều hòa ở nhiệt độ 16°C và mở toang cửa sổ', 'Cắm sạc điện thoại liên tục không rút ra'],
        answerIndex: 0,
        hint: 'Tắt đèn quạt khi ra khỏi phòng và tận dụng cửa sổ đón gió trời.',
        explanation: 'Tắt thiết bị khi không dùng và đón ánh sáng ban ngày giúp tiết kiệm điện năng đáng kể.'
      },
      {
        question: 'Phương pháp bảo quản thực phẩm nào làm giảm nhiệt độ để ức chế vi sinh vật gây thối hỏng?',
        options: ['Bảo quản lạnh (ngăn mát) hoặc làm đông (ngăn đá)', 'Phơi nắng cho khô', 'Muối chua bằng giấm đường', 'Sấy khô bằng lò nướng'],
        answerIndex: 0,
        hint: 'Sử dụng tủ lạnh gia đình.',
        explanation: 'Nhiệt độ thấp trong tủ lạnh (ngăn mát 1-4°C, ngăn đá -18°C) làm chậm sự phát triển của vi khuẩn.'
      },
      {
        question: 'Biển báo "Nguy hiểm về điện" thường được dán ở vị trí nào trong nhà?',
        options: ['Gần cầu dao tổng, ổ cắm cao áp hoặc trạm biến áp', 'Trên cánh cửa phòng ngủ', 'Trên bàn ăn uống', 'Dưới sàn nhà'],
        answerIndex: 0,
        hint: 'Nơi có nguy cơ rò rỉ điện hoặc điện áp nguy hiểm.',
        explanation: 'Biển cảnh báo điện giúp cảnh báo nguy cơ điện giật tại các tủ điện, cầu dao.'
      },
      {
        question: 'Vật liệu nào sau đây là vật liệu xây dựng tự nhiên, thân thiện môi trường?',
        options: ['Tre, nứa, gỗ, lá cọ', 'Nhựa PVC dẻo', 'Sơn hóa chất tổng hợp', 'Tấm lợp amiăng'],
        answerIndex: 0,
        hint: 'Các loài cây cối khai thác trực tiếp từ tự nhiên.',
        explanation: 'Tre, gỗ, lá cọ là vật liệu tự nhiên truyền thống dùng làm nhà sàn, nhà lá mát mẻ.'
      },
      {
        question: 'Khi sử dụng khí gas nấu ăn, nếu ngửi thấy mùi gas nồng nặc trong bếp, việc đầu tiên cần làm là:',
        options: ['Khóa van bình gas ngay lập tức, mở toang cửa và KHÔNG bật lửa hay công tắc điện', 'Bật ngay công tắc đèn để tìm chỗ rò rỉ', 'Bật bếp lên thử xem còn gas không', 'Đóng kín tất cả các cửa lại'],
        answerIndex: 0,
        hint: 'Tia lửa điện từ công tắc có thể kích nổ khí gas rò rỉ.',
        explanation: 'Phải khóa van gas và mở cửa thông gió ngay, tuyệt đối không tạo ra tia lửa điện để tránh phát nổ.'
      },
      {
        question: 'Thực phẩm bị ôi thiu, biến đổi màu sắc và bốc mùi lạ cần được xử lí thế nào?',
        options: ['Bỏ đi, tuyệt đối không ăn để tránh ngộ độc thực phẩm nguy hiểm', 'Nấu lại thật kĩ rồi ăn tiếp', 'Rửa qua nước sôi rồi bảo quản lại', 'Cho thêm hạt tiêu và gia vị để át mùi'],
        answerIndex: 0,
        hint: 'Độc tố vi khuẩn (như Clostridium, Salmonella) có thể gây tử vong.',
        explanation: 'Thực phẩm hỏng chứa độc tố vi sinh vật nguy hiểm, đun sôi không khử hết được độc tố nên phải loại bỏ.'
      }
    ]
  },

  // ==========================================
  // SEMESTER 2 - KIỂM TRA THƯỜNG XUYÊN (15 PHÚT)
  // ==========================================

  // 9. TOÁN HỌC 6 - THƯỜNG XUYÊN HK2
  {
    id: 'quiz-g6-s2-math-regular',
    title: 'Toán 6 - Kiểm tra Thường xuyên (15 phút): Phân số & Số thập phân',
    titleEn: 'Math 6 - Regular Assessment (15 mins): Fractions & Decimals',
    grade: 6,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra thường xuyên 15 phút về phân số bằng nhau, rút gọn phân số, phép cộng trừ nhân chia phân số và các bài toán tỉ số phần trăm.',
    descriptionEn: 'Quick 15-min check on equivalent fractions, fraction operations, decimals and percentages.',
    questions: [
      {
        question: 'Rút gọn phân số 15/20 về phân số tối giản:',
        options: ['3/4', '5/6', '2/3', '1/2'],
        answerIndex: 0,
        hint: 'Chia cả tử và mẫu cho ước chung lớn nhất là 5.',
        explanation: '15:5 = 3; 20:5 = 4 => phân số tối giản là 3/4.'
      },
      {
        question: 'Kết quả của phép cộng 1/3 + 1/6 là:',
        options: ['1/2', '2/9', '2/6', '3/6'],
        answerIndex: 0,
        hint: 'Quy đồng mẫu chung là 6: 1/3 = 2/6. 2/6 + 1/6 = 3/6 = 1/2.',
        explanation: '1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2.'
      },
      {
        question: 'Số thập phân 0,75 viết dưới dạng phân số tối giản là:',
        options: ['3/4', '75/10', '7/5', '1/4'],
        answerIndex: 0,
        hint: '0,75 = 75/100 = 3/4.',
        explanation: '0,75 = 75/100, chia cả tử và mẫu cho 25 ta được 3/4.'
      },
      {
        question: '25% của 80 kg bằng bao nhiêu kg?',
        options: ['20 kg', '25 kg', '16 kg', '40 kg'],
        answerIndex: 0,
        hint: '25% = 1/4. Lấy 80 chia cho 4.',
        explanation: '80 × 25/100 = 80 × 0,25 = 20 kg.'
      },
      {
        question: 'Hai phân số a/b và c/d bằng nhau (a/b = c/d) khi và chỉ khi:',
        options: ['a × d = b × c', 'a × c = b × d', 'a + d = b + c', 'a × b = c × d'],
        answerIndex: 0,
        hint: 'Tích chéo bằng nhau.',
        explanation: 'Định nghĩa phân số bằng nhau: a/b = c/d <=> a × d = b × c.'
      },
      {
        question: 'Góc bẹt có số đo bằng bao nhiêu độ?',
        options: ['180°', '90°', '360°', '60°'],
        answerIndex: 0,
        hint: 'Hai tia đối nhau tạo thành góc bẹt bằng hai góc vuông.',
        explanation: 'Góc bẹt có hai cạnh là hai tia đối nhau và số đo chính xác bằng 180°.'
      },
      {
        question: 'Điểm M là trung điểm của đoạn thẳng AB dài 10 cm. Độ dài đoạn AM bằng:',
        options: ['5 cm', '10 cm', '2 cm', '20 cm'],
        answerIndex: 0,
        hint: 'Trung điểm chia đoạn thẳng thành 2 nửa bằng nhau.',
        explanation: 'AM = MB = AB : 2 = 10 : 2 = 5 cm.'
      },
      {
        question: 'Số đối của phân số -5/8 là:',
        options: ['5/8', '-8/5', '8/5', '1'],
        answerIndex: 0,
        hint: 'Hai số đối nhau có tổng bằng 0.',
        explanation: 'Số đối của -5/8 là 5/8 vì (-5/8) + (5/8) = 0.'
      }
    ]
  },

  // 10. NGỮ VĂN 6 - THƯỜNG XUYÊN HK2
  {
    id: 'quiz-g6-s2-lit-regular',
    title: 'Ngữ văn 6 - Kiểm tra Thường xuyên (15 phút): Truyện cổ tích & Trạng ngữ',
    titleEn: 'Literature 6 - Regular Assessment (15 mins): Fairy Tales & Adverbials',
    grade: 6,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về đặc điểm truyện cổ tích (Thạch Sanh, Cây khế), yếu tố kì ảo, bài học đạo lí và nhận biết trạng ngữ trong câu.',
    descriptionEn: 'Quick 15-min assessment on fairy tale motifs, magical elements, moral lessons, and Vietnamese adverbial clauses.',
    questions: [
      {
        question: 'Chi tiết tiếng đàn của Thạch Sanh trong truyện cổ tích "Thạch Sanh" có ý nghĩa gì?',
        options: ['Là biểu tượng của công lí, hòa bình và sức mạnh hóa giải chiến tranh', 'Chỉ để Thạch Sanh giải trí lúc buồn', 'Để làm cho công chúa ngủ say', 'Để khoe khoang tài năng âm nhạc'],
        answerIndex: 0,
        hint: 'Tiếng đàn vạch mặt Lý Thông và làm 18 nước chư hầu cởi giáp lui quân.',
        explanation: 'Tiếng đàn Thạch Sanh là chi tiết thần kì biểu tượng cho công lí, chính nghĩa và khát vọng hòa bình.'
      },
      {
        question: 'Trong câu: "Sáng sớm hôm nay, trên cành bàng, những chú chim hót líu lo", từ nào là trạng ngữ chỉ thời gian?',
        options: ['Sáng sớm hôm nay', 'Trên cành bàng', 'Những chú chim', 'Hót líu lo'],
        answerIndex: 0,
        hint: 'Thành phần phụ trả lời cho câu hỏi "Khi nào?".',
        explanation: '"Sáng sớm hôm nay" là trạng ngữ chỉ thời gian; "trên cành bàng" là trạng ngữ chỉ nơi chốn.'
      },
      {
        question: 'Kết cục của nhân vật người anh tham lam trong truyện "Cây khế" phản ánh quan niệm dân gian nào?',
        options: ['Ở hiền gặp lành, ác giả ác báo', 'Lá lành đùm lá rách', 'Có công mài sắt có ngày nên kim', 'Tốt gỗ hơn tốt nước sơn'],
        answerIndex: 0,
        hint: 'Người tham lam, độc ác cuối cùng phải gánh chịu hậu quả bi thảm.',
        explanation: 'Truyện răn dạy: Tham lam độc ác sẽ nhận kết cục bi đát ("ở hiền gặp lành, gieo gió gặt bão").'
      },
      {
        question: 'Yếu tố thần kì (kì ảo) trong truyện cổ tích có tác dụng chủ yếu là:',
        options: ['Trợ giúp nhân vật thiện vượt qua thử thách và thể hiện ước mơ công lí của nhân dân', 'Làm cho truyện thật dài', 'Thay thế hoàn toàn con người thực tế', 'Dọa cho trẻ em sợ hãi'],
        answerIndex: 0,
        hint: 'Bụt, Tiên, chim thần... luôn xuất hiện giúp đỡ người hiền lương.',
        explanation: 'Yếu tố kì ảo giúp thực hiện ước mơ của người xưa về sự chiến thắng của cái thiện đối với cái ác.'
      },
      {
        question: 'Văn bản nghị luận khác với văn bản tự sự (kể chuyện) ở điểm cơ bản nào?',
        options: ['Dùng lí lẽ, dẫn chứng thuyết phục để bảo vệ một luận điểm, ý kiến', 'Dùng nhân vật hư cấu để kể một câu chuyện', 'Dùng vần điệu nhịp điệu như thơ', 'Chỉ để giải trí không có thông điệp'],
        answerIndex: 0,
        hint: 'Nghị luận là bày tỏ quan điểm bằng hệ thống luận điểm, lí lẽ và dẫn chứng.',
        explanation: 'Văn nghị luận nhằm thuyết phục người đọc về một vấn đề tư tưởng thông qua lí lẽ và dẫn chứng xác thực.'
      },
      {
        question: 'Từ "Trái Đất" trong văn bản "Trái Đất - cái nôi của sự sống" được tác giả gọi là gì?',
        options: ['Hành tinh xanh kì diệu nuôi dưỡng muôn loài', 'Ngôi sao xa xôi lạnh lẽo', 'Khối đá khô cằn', 'Mặt trăng thứ hai'],
        answerIndex: 0,
        hint: 'Bảo vệ môi trường sống của toàn nhân loại.',
        explanation: 'Trái Đất được tôn vinh là hành tinh xanh - ngôi nhà chung tràn đầy sự sống cần được bảo vệ.'
      },
      {
        question: 'Dấu chấm phẩy (;) thường được dùng để:',
        options: ['Đánh dấu ranh giới giữa các vế trong một câu ghép có cấu tạo phức tạp', 'Kết thúc câu hỏi', 'Báo hiệu lời nói trực tiếp', 'Đánh dấu phần trích dẫn'],
        answerIndex: 0,
        hint: 'Phân tách các vế câu ghép dài hoặc các bộ phận liệt kê phức tạp.',
        explanation: 'Dấu chấm phẩy dùng ngăn cách các vế câu ghép phức tạp hoặc các mục liệt kê.'
      },
      {
        question: 'Biện pháp tu từ nào được sử dụng trong câu: "Tre giữ làng, giữ nước, giữ mái nhà tranh"?',
        options: ['Điệp từ "giữ"', 'So sánh', 'Nói quá', 'Chơi chữ'],
        answerIndex: 0,
        hint: 'Từ "giữ" được lặp lại 3 lần liên tiếp tạo nhịp điệu hùng hồn.',
        explanation: 'Điệp từ "giữ" nhấn mạnh vai trò to lớn, bền bỉ của cây tre Việt Nam trong bảo vệ Tổ quốc.'
      }
    ]
  },

  // 11. KHOA HỌC TỰ NHIÊN 6 - THƯỜNG XUYÊN HK2
  {
    id: 'quiz-g6-s2-sci-regular',
    title: 'KHTN 6 - Kiểm tra Thường xuyên (15 phút): Lực, Năng lượng & Vũ trụ',
    titleEn: 'Science 6 - Regular Assessment (15 mins): Forces, Energy & Cosmos',
    grade: 6,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về các loại lực (lực ma sát, trọng lực, lực đàn hồi), các dạng năng lượng và Trái Đất trong Hệ Mặt Trời.',
    descriptionEn: 'Quick 15-min check on friction, gravity, energy transformations, and Solar System astronomy.',
    questions: [
      {
        question: 'Lực nào sau đây là lực tiếp xúc?',
        options: ['Lực bàn tay đẩy cánh cửa mở ra', 'Lực hút của Trái Đất lên quả táo rơi', 'Lực hút giữa hai thanh nam châm đặt cách nhau', 'Lực tĩnh điện giữa hai quả cầu tích điện'],
        answerIndex: 0,
        hint: 'Hai vật phải chạm vào nhau trực tiếp để xuất hiện lực.',
        explanation: 'Lực đẩy cửa yêu cầu bàn tay tiếp xúc trực tiếp với cánh cửa. Trọng lực và từ lực là lực không tiếp xúc.'
      },
      {
        question: 'Đơn vị đo lực trong hệ đo lường quốc tế là:',
        options: ['Newton (N)', 'Kilôgam (kg)', 'Joule (J)', 'Watt (W)'],
        answerIndex: 0,
        hint: 'Đặt theo tên nhà bác học Isaac Newton.',
        explanation: 'Đơn vị đo độ lớn của lực là Newton, kí hiệu là N.'
      },
      {
        question: 'Một vật có khối lượng m = 5 kg thì có trọng lượng P xấp xỉ bằng:',
        options: ['50 N', '5 N', '500 N', '0,5 N'],
        answerIndex: 0,
        hint: 'Công thức liên hệ trọng lượng và khối lượng trên Trái Đất: P = 10 × m.',
        explanation: 'P = 10 × m = 10 × 5 = 50 N.'
      },
      {
        question: 'Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo sạch?',
        options: ['Năng lượng mặt trời và gió', 'Than đá', 'Dầu mỏ', 'Khí đốt tự nhiên'],
        answerIndex: 0,
        hint: 'Nguồn năng lượng thiên nhiên vô tận, không gây ô nhiễm khí thải.',
        explanation: 'Năng lượng mặt trời, gió, thủy triều là nguồn năng lượng tái tạo không bao giờ cạn kiệt.'
      },
      {
        question: 'Khi xoa hai bàn tay vào nhau trong mùa đông, cơ năng đã chuyển hóa thành dạng năng lượng nào làm ấm tay?',
        options: ['Nhiệt năng', 'Hóa năng', 'Quang năng', 'Thế năng hấp dẫn'],
        answerIndex: 0,
        hint: 'Tay ấm lên do sinh nhiệt từ ma sát.',
        explanation: 'Ma sát giữa hai lòng bàn tay biến đổi cơ năng chuyển động thành nhiệt năng làm ấm.'
      },
      {
        question: 'Trái Đất tự quay quanh trục của nó theo hướng nào?',
        options: ['Từ Tây sang Đông', 'Từ Đông sang Tây', 'Từ Bắc xuống Nam', 'Từ Nam lên Bắc'],
        answerIndex: 0,
        hint: 'Do Trái Đất quay từ Tây sang Đông nên ta thấy Mặt Trời mọc ở đằng Đông và lặn ở đằng Tây.',
        explanation: 'Trái Đất tự quay từ Tây sang Đông dẫn đến hiện tượng ngày đêm luân phiên.'
      },
      {
        question: 'Hành tinh nào trong Hệ Mặt Trời có vị trí gần Mặt Trời nhất?',
        options: ['Sao Thủy (Mercury)', 'Sao Kim (Venus)', 'Trái Đất (Earth)', 'Sao Hỏa (Mars)'],
        answerIndex: 0,
        hint: 'Thủy tinh - Kim tinh - Trái Đất - Hỏa tinh.',
        explanation: 'Sao Thủy (Mercury) là hành tinh đầu tiên, gần Mặt Trời nhất.'
      },
      {
        question: 'Để giảm lực ma sát có hại trên các vòng bi xe đạp, người ta thường làm gì?',
        options: ['Tra dầu nhớt hoặc mỡ bôi trơn', 'Rắc cát vào vòng bi', 'Rửa bằng nước muối', 'Khía các rãnh sâu'],
        answerIndex: 0,
        hint: 'Chất bôi trơn giúp các bề mặt kim loại trượt êm ái hơn.',
        explanation: 'Tra dầu mỡ bôi trơn giúp giảm đáng kể ma sát trượt và mài mòn trong các ổ trục xe đạp.'
      }
    ]
  },

  // 12. TIẾNG ANH 6 - THƯỜNG XUYÊN HK2
  {
    id: 'quiz-g6-s2-eng-regular',
    title: 'Tiếng Anh 6 - Kiểm tra Thường xuyên (15 phút): Past Simple & Future with Will',
    titleEn: 'English 6 - Regular Assessment (15 mins): Past Simple & Future Will',
    grade: 6,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về Thì Quá khứ đơn (Past Simple), tương lai đơn với Will, từ vựng thể thao và môi trường Units 7 - 10.',
    descriptionEn: 'Quick 15-min check on Past Simple tense, Future will, sports vocabulary, and green living.',
    questions: [
      {
        question: 'Yesterday, our football team _______ the championship match.',
        options: ['won', 'win', 'wins', 'winned'],
        answerIndex: 0,
        hint: '"Yesterday" indicates Past Simple. The past form of "win" is an irregular verb.',
        explanation: 'Past form of "win" is "won".'
      },
      {
        question: 'I think robots _______ all the heavy household chores in the future.',
        options: ['will do', 'did', 'do', 'are doing'],
        answerIndex: 0,
        hint: '"In the future" signals future prediction with "will".',
        explanation: 'We use "will + V" for predictions about future technology: "will do".'
      },
      {
        question: 'Which piece of equipment is essential for protecting your head when cycling?',
        options: ['Helmet', 'Goggles', 'Racket', 'Whistle'],
        answerIndex: 0,
        hint: 'A hard hat worn on the head.',
        explanation: 'A helmet protects your head from injuries when riding a bicycle or motorbike.'
      },
      {
        question: 'We should _______ plastic bottles to protect the environment instead of throwing them away.',
        options: ['recycle', 'pollute', 'burn', 'litter'],
        answerIndex: 0,
        hint: 'The 3Rs principle: Reduce, Reuse, Recycle.',
        explanation: 'Recycling plastic bottles turns waste into new useful products and saves nature.'
      },
      {
        question: 'Where _______ you go on your summer holiday last year?',
        options: ['did', 'do', 'were', 'have'],
        answerIndex: 0,
        hint: 'Question in Past Simple with action verb "go" requires auxiliary "did".',
        explanation: 'Structure: Where + did + S + V-inf?: "Where did you go...".'
      },
      {
        question: 'Tokyo is one of the _______ cities in the world.',
        options: ['cleanest', 'cleaner', 'clean', 'most clean'],
        answerIndex: 0,
        hint: 'Superlative of one-syllable adjective "clean": the + cleanest.',
        explanation: 'Short adjective superlative form: "the cleanest".'
      },
      {
        question: 'If we plant more green trees, our air _______ much fresher.',
        options: ['will become', 'became', 'becomes', 'is becoming'],
        answerIndex: 0,
        hint: 'First Conditional: If + Present Simple, S + will + V.',
        explanation: 'First conditional main clause uses "will + verb": "will become".'
      },
      {
        question: 'This sports bag is not mine. It is _______.',
        options: ['hers', 'her', 'she', 'she is'],
        answerIndex: 0,
        hint: 'Possessive pronoun replacing "her bag".',
        explanation: 'Possessive pronoun "hers" stands alone without following noun: "It is hers".'
      }
    ]
  },

  // 13. LỊCH SỬ & ĐỊA LÍ 6 - THƯỜNG XUYÊN HK2
  {
    id: 'quiz-g6-s2-hisgeo-regular',
    title: 'Lịch sử & Địa lí 6 - Kiểm tra Thường xuyên (15 phút): Thời kì Bắc thuộc & Nước trên Trái Đất',
    titleEn: 'History & Geography 6 - Regular Assessment (15 mins): Northern Rule & Hydrosphere',
    grade: 6,
    semester: 2,
    subject: 'Lịch sử & Địa lí',
    subjectVi: 'Lịch sử & Địa lí',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về các cuộc khởi nghĩa chống Bắc thuộc (Hai Bà Trưng, Bà Triệu, Lý Bí, Mai Thúc Loan), chiến thắng Bạch Đằng 938 và vòng tuần hoàn của nước.',
    descriptionEn: 'Quick 15-min check on anti-Northern rule uprisings, Bach Dang 938 victory and hydrological cycle.',
    questions: [
      {
        question: 'Cuộc khởi nghĩa đầu tiên bùng nổ chống lại ách đô hộ của phong kiến phương Bắc do ai lãnh đạo?',
        options: ['Hai Bà Trưng (năm 40)', 'Bà Triệu (năm 248)', 'Lý Bí (năm 542)', 'Ngô Quyền (năm 938)'],
        answerIndex: 0,
        hint: 'Khởi nghĩa Mê Linh năm 40 chống quân Đông Hán.',
        explanation: 'Khởi nghĩa Hai Bà Trưng mùa xuân năm 40 là ngọn cờ đầu giành lại độc lập cho dân tộc.'
      },
      {
        question: 'Chiến thắng vang dội trên sông Bạch Đằng năm 938 của Ngô Quyền đã đánh tan quân xâm lược nào?',
        options: ['Quân Nam Hán', 'Quân Tống', 'Quân Nguyên Mông', 'Quân Minh'],
        answerIndex: 0,
        hint: 'Kế sách cắm cọc nhọn bịt sắt dưới lòng sông Bạch Đằng.',
        explanation: 'Ngô Quyền dùng trận địa cọc ngầm tiêu diệt toàn bộ thủy quân Nam Hán, mở ra kỉ nguyên độc lập lâu dài.'
      },
      {
        question: 'Nước trên Trái Đất chủ yếu phân bố ở đâu (chiếm khoảng 97% lượng nước toàn cầu)?',
        options: ['Các đại dương và biển', 'Các con sông và suối', 'Các hồ nước ngọt', 'Băng tuyết ở hai cực'],
        answerIndex: 0,
        hint: 'Nước mặn chiếm đại đa số bề mặt thủy quyển.',
        explanation: 'Khoảng 97% lượng nước của Trái Đất là nước mặn trong các đại dương và biển.'
      },
      {
        question: 'Vòng tuần hoàn lớn của nước bao gồm các quá trình chính nào?',
        options: ['Bốc hơi -> Ngưng tụ thành mây -> Mưa rơi -> Nước chảy về biển', 'Chỉ bốc hơi lên trời', 'Chỉ ngấm xuống lòng đất', 'Nước từ biển tràn lên núi'],
        answerIndex: 0,
        hint: 'Nước chuyển động liên tục giữa mặt đất, khí quyển và đại dương.',
        explanation: 'Vòng tuần hoàn nước là chu trình khép kín: bốc hơi, ngưng tụ, giáng thủy (mưa) và dòng chảy.'
      },
      {
        question: 'Câu nói bất hủ: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông..." là của anh hùng dân tộc nào?',
        options: ['Bà Triệu (Triệu Thị Trinh)', 'Trưng Trắc', 'Trưng Nhị', 'Lê Chân'],
        answerIndex: 0,
        hint: 'Nữ anh hùng lãnh đạo khởi nghĩa năm 248 chống quân Đông Ngô.',
        explanation: 'Câu nói khẳng định khí phách quật cường bất khuất của nữ anh hùng Triệu Thị Trinh (Bà Triệu).'
      },
      {
        question: 'Dòng biển nóng và dòng biển lạnh có tác động như thế nào đến khí hậu vùng ven bờ?',
        options: ['Dòng biển nóng làm tăng nhiệt độ và độ ẩm; dòng biển lạnh làm bờ khô ráo, ít mưa', 'Cả hai đều làm hạ nhiệt độ', 'Không có tác động gì', 'Làm cho biển đóng băng quanh năm'],
        answerIndex: 0,
        hint: 'Hơi nước bốc lên từ dòng biển nóng mang lại mưa ẩm.',
        explanation: 'Dòng biển nóng sưởi ấm và tăng ẩm cho khí hậu duyên hải; dòng biển lạnh gây khô hạn.'
      },
      {
        question: 'Quốc hiệu nước ta thời Lý Nam Đế (Lý Bí) sau khi khởi nghĩa thắng lợi năm 544 là gì?',
        options: ['Vạn Xuân', 'Đại Cồ Việt', 'Đại Việt', 'Âu Lạc'],
        answerIndex: 0,
        hint: 'Mong muốn đất nước mãi mãi thanh bình và tươi đẹp như vạn mùa xuân.',
        explanation: 'Lý Nam Đế đặt tên nước là Vạn Xuân với ước nguyện quốc gia trường tồn, thịnh vượng muôn đời.'
      },
      {
        question: 'Thành phố Hà Nội nằm bên hữu ngạn của con sông lớn nào?',
        options: ['Sông Hồng', 'Sông Tiền', 'Sông Cửu Long', 'Sông Đồng Nai'],
        answerIndex: 0,
        hint: 'Dòng sông bồi đắp nên châu thổ đồng bằng Bắc Bộ trù phú.',
        explanation: 'Hà Nội nằm ở tả ngạn và hữu ngạn sông Hồng (sông Mẹ của văn minh đồng bằng Bắc Bộ).'
      }
    ]
  },

  // 14. GIÁO DỤC CÔNG DÂN 6 - THƯỜNG XUYÊN HK2
  {
    id: 'quiz-g6-s2-civ-regular',
    title: 'GDCD 6 - Kiểm tra Thường xuyên (15 phút): Tự lập, Tiết kiệm & Quyền trẻ em',
    titleEn: 'Civics 6 - Regular Assessment (15 mins): Independence, Thrift & Children Rights',
    grade: 6,
    semester: 2,
    subject: 'Giáo dục công dân',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về tính tự lập trong học tập và đời sống, thực hành tiết kiệm, và 4 nhóm quyền cơ bản của trẻ em theo Công ước LHQ.',
    descriptionEn: 'Quick 15-min check on personal independence, practice of thrift, and the 4 groups of child rights.',
    questions: [
      {
        question: 'Thế nào là đức tính tự lập?',
        options: ['Tự làm lấy công việc của mình bằng năng lực bản thân, không dựa dẫm ỷ lại vào người khác', 'Làm việc gì cũng nhờ vả cha mẹ', 'Chỉ học khi có người kèm cặp', 'Bắt bạn bè làm hộ bài tập'],
        answerIndex: 0,
        hint: 'Tự mình suy nghĩ và hành động độc lập, có trách nhiệm.',
        explanation: 'Tự lập là phẩm chất tự lo liệu, hoàn thành công việc mà không ỷ lại hay trông chờ vào ai.'
      },
      {
        question: 'Hành động nào sau đây là biểu hiện của lối sống tiết kiệm đúng đắn?',
        options: ['Sử dụng điện, nước và tiền bạc hợp lí, tránh lãng phí những thứ không cần thiết', 'Bỏ bữa ăn để dành tiền mua đồ chơi điện tử', 'Kẹt xỉn, không dám giúp đỡ ai kể cả khi cần kíp', 'Tiêu xài vô độ cho bằng bạn bằng bè'],
        answerIndex: 0,
        hint: 'Tiết kiệm khác với keo kiệt; tiết kiệm là chi tiêu hợp lí, đúng mục đích.',
        explanation: 'Tiết kiệm là biết sử dụng của cải, thời gian, công sức một cách khoa học và không lãng phí.'
      },
      {
        question: 'Theo Công ước Liên Hợp Quốc và Luật Trẻ em Việt Nam, trẻ em có mấy nhóm quyền cơ bản?',
        options: ['4 nhóm quyền (Sống còn, Bảo vệ, Phát triển, Tham gia)', '2 nhóm quyền', '6 nhóm quyền', '8 nhóm quyền'],
        answerIndex: 0,
        hint: 'Gồm: Quyền sống còn, Quyền được bảo vệ, Quyền được phát triển và Quyền được tham gia.',
        explanation: '4 nhóm quyền cơ bản gồm: Quyền Sống còn, Quyền Bảo vệ, Quyền Phát triển và Quyền Tham gia.'
      },
      {
        question: 'Quyền được đi học, vui chơi giải trí và phát triển tài năng thuộc nhóm quyền nào của trẻ em?',
        options: ['Nhóm quyền được phát triển', 'Nhóm quyền sống còn', 'Nhóm quyền bảo vệ', 'Nhóm quyền tham gia'],
        answerIndex: 0,
        hint: 'Tạo điều kiện toàn diện về thể chất, trí tuệ và tinh thần.',
        explanation: 'Nhóm quyền phát triển đảm bảo trẻ em được học tập, giải trí, tiếp cận thông tin và phát triển năng khiếu.'
      },
      {
        question: 'Hành vi bạo lực học đường, xâm hại thể xác và tinh thần trẻ em vi phạm nhóm quyền nào?',
        options: ['Nhóm quyền được bảo vệ', 'Nhóm quyền tham gia', 'Nhóm quyền tự do kinh doanh', 'Nhóm quyền thừa kế'],
        answerIndex: 0,
        hint: 'Trẻ em phải được bảo vệ khỏi mọi hình thức phân biệt đối xử và bạo lực.',
        explanation: 'Nhóm quyền bảo vệ nhằm giữ cho trẻ em an toàn khỏi bạo lực, bóc lột và ngược đãi.'
      },
      {
        question: 'Học sinh thể hiện tính tự lập trong học tập như thế nào?',
        options: ['Tự giác chuẩn bị bài và sách vở trước khi đến lớp, không đợi nhắc nhở', 'Đến lớp mượn vở bạn chép bài tập về nhà', 'Chỉ học khi bố mẹ ngồi cạnh giám sát', 'Thuê người khác làm bài kiểm tra giúp'],
        answerIndex: 0,
        hint: 'Chủ động học tập và tự chịu trách nhiệm với kết quả.',
        explanation: 'Tự giác hoàn thành bài học và tự soạn bài là biểu hiện trực tiếp của tinh thần tự lập học tập.'
      },
      {
        question: 'Khi nhận được tiền mừng tuổi hoặc tiền thưởng học tập, em nên quản lí như thế nào cho hợp lí?',
        options: ['Gửi bố mẹ giữ hộ hoặc nuôi heo đất tiết kiệm cho việc mua sách vở, dụng cụ học tập', 'Mang ra quán net chơi hết trong một ngày', 'Mua quà vặt đắt tiền khao bạn bè cho hết', 'Giấu kín không cho ai biết để mua đồ chơi bạo lực'],
        answerIndex: 0,
        hint: 'Dành dụm cho mục đích học tập lâu dài và có ý nghĩa.',
        explanation: 'Tiết kiệm và sử dụng tiền vào mục đích học tập nâng cao tri thức là cách ứng xử văn minh.'
      },
      {
        question: 'Bổn phận quan trọng hàng đầu của trẻ em đối với ông bà, cha mẹ là gì?',
        options: ['Kính trọng, lễ phép, vâng lời và chăm sóc ông bà cha mẹ lúc ốm đau', 'Đòi hỏi cha mẹ mua đồ dùng đắt tiền', 'Cãi lại lời người lớn khi không vừa ý', 'Chỉ quan tâm đến bản thân mình'],
        answerIndex: 0,
        hint: 'Đạo hiếu là cái gốc làm người.',
        explanation: 'Bổn phận làm con là phải hiếu thảo, lễ phép, chăm ngoan học giỏi để đền đáp công ơn sinh thành.'
      }
    ]
  },

  // 15. TIN HỌC 6 - THƯỜNG XUYÊN HK2
  {
    id: 'quiz-g6-s2-it-regular',
    title: 'Tin học 6 - Kiểm tra Thường xuyên (15 phút): Thuật toán & Sơ đồ khối',
    titleEn: 'Informatics 6 - Regular Assessment (15 mins): Algorithms & Flowcharts',
    grade: 6,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về khái niệm thuật toán, các bước mô tả thuật toán bằng ngôn ngữ tự nhiên và các hình khối quy ước trong sơ đồ khối.',
    descriptionEn: 'Quick 15-min check on algorithm concepts, step-by-step description and flowchart geometric symbols.',
    questions: [
      {
        question: 'Thuật toán là gì?',
        options: ['Một dãy các chỉ dẫn từng bước rõ ràng, hữu hạn để giải quyết một bài toán hay công việc cụ thể', 'Một bức tranh vẽ trên máy tính', 'Trò chơi điện tử', 'Bàn phím và chuột máy tính'],
        answerIndex: 0,
        hint: 'Các bước hữu hạn xác định để đi từ dữ liệu đầu vào (Input) đến kết quả (Output).',
        explanation: 'Thuật toán là tập hợp các chỉ dẫn tuần tự, rõ ràng và có điểm dừng nhằm giải quyết vấn đề.'
      },
      {
        question: 'Trong sơ đồ khối thuật toán, hình elip (hoặc hình chữ nhật bo tròn) dùng để biểu thị thao tác nào?',
        options: ['Bắt đầu hoặc Kết thúc thuật toán (Start / End)', 'Phép tính xử lí dữ liệu', 'Điều kiện rẽ nhánh kiểm tra Đúng / Sai', 'Nhập hoặc Xuất dữ liệu'],
        answerIndex: 0,
        hint: 'Điểm xuất phát và điểm dừng của chu trình.',
        explanation: 'Hình elip quy ước dùng cho khối Bắt đầu (Start) và Kết thúc (End).'
      },
      {
        question: 'Trong sơ đồ khối, hình thoi (◇) có chức năng quy ước là:',
        options: ['Kiểm tra điều kiện rẽ nhánh (Nếu... thì...)', 'Thực hiện phép tính toán', 'Nhập dữ liệu đầu vào', 'Bắt đầu chương trình'],
        answerIndex: 0,
        hint: 'Có hai nhánh đi ra tương ứng với điều kiện Đúng (True) hoặc Sai (False).',
        explanation: 'Hình thoi quy ước đại diện cho khối Quyết định / Điều kiện (Decision block).'
      },
      {
        question: 'Hình chữ nhật trong sơ đồ khối biểu thị thao tác nào?',
        options: ['Thực hiện phép tính hoặc xử lí dữ liệu (Processing)', 'Bắt đầu', 'Rẽ nhánh', 'Nhập từ bàn phím'],
        answerIndex: 0,
        hint: 'Tính toán: ví dụ Tổng = a + b.',
        explanation: 'Hình chữ nhật là khối Thao tác xử lí / Tính toán dữ liệu.'
      },
      {
        question: 'Hình bình hành trong sơ đồ khối quy ước dùng để:',
        options: ['Nhập dữ liệu vào (Input) hoặc Xuất dữ liệu ra (Output)', 'Kiểm tra điều kiện', 'Dừng thuật toán', 'Vẽ mũi tên'],
        answerIndex: 0,
        hint: 'Nhập số a, b hoặc In kết quả ra màn hình.',
        explanation: 'Hình bình hành biểu thị thao tác Nhập/Xuất (Input/Output).'
      },
      {
        question: 'Một thuật toán có tính chất "hữu hạn" nghĩa là:',
        options: ['Thuật toán phải kết thúc sau một số lượng hữu hạn các bước thực hiện', 'Thuật toán chạy mãi mãi không bao giờ dừng', 'Thuật toán chỉ làm được với số nhỏ hơn 10', 'Thuật toán chỉ viết trong 1 dòng'],
        answerIndex: 0,
        hint: 'Không được rơi vào vòng lặp vô tận.',
        explanation: 'Tính hữu hạn (Finiteness) yêu cầu thuật toán phải dừng lại sau một số bước xác định.'
      },
      {
        question: 'Ngôn ngữ lập trình trực quan kéo thả khối lệnh phổ biến dành cho học sinh THCS là:',
        options: ['Scratch', 'Hệ điều hành Windows', 'Phần mềm Word', 'Trình duyệt Chrome'],
        answerIndex: 0,
        hint: 'Lập trình chú mèo bằng cách ghép các khối màu.',
        explanation: 'Scratch (MIT) là môi trường lập trình khối trực quan rất trực quan và sinh động.'
      },
      {
        question: 'Khi mô tả thuật toán tìm số lớn nhất trong hai số a và b, điều kiện so sánh được đặt ra là:',
        options: ['Nếu a > b thì Max = a; ngược lại Max = b', 'Nếu a + b > 0 thì Max = a', 'Nếu a = b thì không có số nào lớn hơn', 'Luôn luôn chọn a'],
        answerIndex: 0,
        hint: 'So sánh tương quan giữa giá trị của a và b.',
        explanation: 'Cấu trúc so sánh: Nếu a > b thì Max là a, ngược lại nếu a ≤ b thì Max là b.'
      }
    ]
  },

  // 16. CÔNG NGHỆ 6 - THƯỜNG XUYÊN HK2
  {
    id: 'quiz-g6-s2-tech-regular',
    title: 'Công nghệ 6 - Kiểm tra Thường xuyên (15 phút): Trang phục & Thiết bị điện gia đình',
    titleEn: 'Technology 6 - Regular Assessment (15 mins): Clothing & Home Electric Appliances',
    grade: 6,
    semester: 2,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiểm tra 15 phút về nguồn gốc và tính chất các loại vải (vải sợi tự nhiên, sợi hóa học), cách phối trang phục và nguyên lí sử dụng đồ dùng điện gia đình an toàn.',
    descriptionEn: 'Quick 15-min check on textile fiber types, clothing coordination and safe household electrical appliance usage.',
    questions: [
      {
        question: 'Vải sợi bông (cotton) thuộc nhóm vải sợi nào dưới đây?',
        options: ['Vải sợi thiên nhiên có nguồn gốc thực vật', 'Vải sợi hóa học nhân tạo', 'Vải sợi tổng hợp nilon', 'Vải sợi kim loại'],
        answerIndex: 0,
        hint: 'Được dệt từ quả của cây bông trồng tự nhiên.',
        explanation: 'Vải cotton được làm từ sợi cây bông, có ưu điểm thấm hút mồ hôi tốt, mặc thoáng mát.'
      },
      {
        question: 'Vải sợi tổng hợp (như nilon, polyester) có đặc tính nổi bật nào?',
        options: ['Bền đẹp, giặt nhanh khô, không bị nhàu nhưng thấm hút mồ hôi kém', 'Thấm hút mồ hôi cực tốt', 'Dễ bị mốc khi ẩm ướt', 'Mặc mùa hè rất mát'],
        answerIndex: 0,
        hint: 'Tổng hợp từ sản phẩm dầu mỏ, rất dai bền nhưng ít hút ẩm.',
        explanation: 'Vải sợi tổng hợp bền bỉ, không nhăn, giặt nhanh khô nhưng kém thoáng khí hơn vải tự nhiên.'
      },
      {
        question: 'Để vóc dáng trông thon gọn và cao hơn, người có thân hình mập nên chọn trang phục thế nào?',
        options: ['Trang phục màu tối, hoa văn nhỏ, kẻ sọc dọc cơ thể', 'Trang phục màu sáng chói, kẻ sọc ngang to bản', 'Trang phục có bèo nhún rườm rà', 'Vải dày cứng và bóng loáng'],
        answerIndex: 0,
        hint: 'Kẻ sọc dọc tạo cảm giác kéo dài chiều cao; màu tối che khuyết điểm.',
        explanation: 'Trang phục sọc dọc và gam màu tối tạo hiệu ứng thị giác giúp vóc dáng thon thả, cao ráo hơn.'
      },
      {
        question: 'Đồ dùng loại điện - quang biến đổi điện năng thành dạng năng lượng nào?',
        options: ['Quang năng (ánh sáng)', 'Cơ năng (quay quạt)', 'Nhiệt năng (nóng nước)', 'Hóa năng'],
        answerIndex: 0,
        hint: 'Ví dụ: Đèn LED, đèn huỳnh quang, đèn sợi đốt.',
        explanation: 'Đồ dùng điện - quang (bóng đèn) có chức năng chính là chuyển hóa điện năng thành ánh sáng (quang năng).'
      },
      {
        question: 'Để sử dụng bàn là (bàn ủi) điện an toàn và không làm cháy quần áo, ta cần:',
        options: ['Điều chỉnh núm nhiệt độ phù hợp với từng loại vải và không để bàn là bật mà bỏ đi làm việc khác', 'Luôn vặn nhiệt độ cao nhất cho mọi loại vải', 'Đặt mặt bàn là úp xuống quần áo rồi đi xem ti vi', 'Là quần áo lúc đang còn ướt sũng nước'],
        answerIndex: 0,
        hint: 'Mỗi loại vải chịu được mức nhiệt khác nhau (vải lụa nhiệt thấp, cotton nhiệt cao).',
        explanation: 'Cần chỉnh nhiệt độ đúng theo kí hiệu trên mác áo và luôn quan sát khi là đồ để phòng hỏa hoạn.'
      },
      {
        question: 'Thiết bị nào sau đây thuộc nhóm đồ dùng điện - nhiệt trong gia đình?',
        options: ['Nồi cơm điện, ấm đun siêu tốc, bình nóng lạnh', 'Quạt trần, máy bơm nước', 'Đèn tuýp LED chiếu sáng', 'Máy tính xách tay'],
        answerIndex: 0,
        hint: 'Tạo ra nhiệt lượng để nấu chín hoặc đun sôi.',
        explanation: 'Nồi cơm, ấm siêu tốc, bếp từ là đồ dùng điện - nhiệt biến đổi điện năng thành nhiệt năng.'
      },
      {
        question: 'Kí hiệu hình tròn có chữ X trên nhãn mác quần áo mang ý nghĩa gì?',
        options: ['Không được giặt khô (do not dry clean)', 'Được là ủi ở nhiệt độ cao', 'Được tẩy trắng bằng clo', 'Giặt bằng nước nóng'],
        answerIndex: 0,
        hint: 'Hình tròn thường quy ước việc giặt khô (Dry cleaning), dấu X nghĩa là cấm.',
        explanation: 'Hình tròn gạch chéo là biểu tượng quốc tế cảnh báo không được giặt khô sản phẩm.'
      },
      {
        question: 'Hành động nào bảo đảm an toàn điện tuyệt đối trong gia đình?',
        options: ['Không chạm tay ướt vào ổ điện, phích cắm và các thiết bị đang hoạt động', 'Dùng dây điện bị hở để cắm quạt', 'Vừa sạc pin điện thoại vừa nghe gọi ngoài trời mưa', 'Tự ý chọc đinh sắt vào lỗ cắm điện'],
        answerIndex: 0,
        hint: 'Nước là chất dẫn điện tốt, tay ướt làm tăng nguy cơ giật điện.',
        explanation: 'Tay ướt dính nước làm giảm điện trở tiếp xúc, rất dễ bị điện giật nguy hiểm đến tính mạng.'
      }
    ]
  }
];

