import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Comprehensive Question Bank for Grade 6 (Lớp 6)
 * Aligned strictly with Ministry of Education Textbooks: "Kết nối tri thức với cuộc sống"
 * Each quiz contains at least 18 rigorous, verified questions with hints & explanations.
 */
export const GRADE_6_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // SEMESTER 1 (HỌC KỲ 1) - ALL 8 COMPULSORY SUBJECTS (MIN 18 QUESTIONS EACH)
  // =========================================================================

  // 1. TOÁN HỌC 6 - HỌC KỲ 1 (18 QUESTIONS)
  {
    id: 'quiz-g6-s1-math',
    title: 'Toán 6 - Kiểm tra Giữa học kỳ 1: Tập hợp Số tự nhiên, Số nguyên Z & Hình học trực quan',
    titleEn: 'Math 6 - Sem 1: Integers, Factors, Multiples & Geometry',
    grade: 6,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Ôn tập toàn diện học kỳ 1: Tập hợp ℕ, phép tính lũy thừa, tính chia hết, ƯCLN & BCNN, số nguyên ℤ, tam giác đều, hình vuông, lục giác đều.',
    descriptionEn: 'Comprehensive Sem 1 review: Sets N, powers, divisibility, GCD/LCM, integers Z, regular polygons.',
    questions: [
      {
        question: 'Cho tập hợp M = {x ∈ ℕ | 3 < x ≤ 8}. Cách viết nào sau đây liệt kê đúng các phần tử của M?',
        options: ['M = {4; 5; 6; 7; 8}', 'M = {3; 4; 5; 6; 7; 8}', 'M = {4; 5; 6; 7}', 'M = {3; 4; 5; 6; 7}'],
        answerIndex: 0,
        hint: 'Dấu > 3 không lấy số 3, dấu ≤ 8 lấy cả số 8.',
        explanation: 'x là số tự nhiên lớn hơn 3 và nhỏ hơn hoặc bằng 8 nên x ∈ {4; 5; 6; 7; 8}.'
      },
      {
        question: 'Kết quả của phép tính 2⁴ × 2³ dưới dạng một lũy thừa là gì?',
        options: ['2⁷', '2¹²', '4⁷', '2¹'],
        answerIndex: 0,
        hint: 'Nhân hai lũy thừa cùng cơ số: giữ nguyên cơ số và cộng các số mũ: aᵐ × aⁿ = aᵐ⁺ⁿ.',
        explanation: '2⁴ × 2³ = 2⁴⁺³ = 2⁷.'
      },
      {
        question: 'Thứ tự thực hiện phép tính đối với biểu thức có dấu ngoặc là:',
        options: ['( ) → [ ] → { }', '{ } → [ ] → ( )', '[ ] → ( ) → { }', '( ) → { } → [ ]'],
        answerIndex: 0,
        hint: 'Ngoặc tròn trước, tiếp đến ngoặc vuông, ngoài cùng là ngoặc nhọn.',
        explanation: 'Quy tắc chuẩn: Thực hiện trong ngoặc tròn ( ) trước, sau đó ngoặc vuông [ ], cuối cùng là ngoặc nhọn { }.'
      },
      {
        question: 'Trong các số sau, số nào chia hết cho cả 2, 3, 5 và 9?',
        options: ['180', '145', '270', '150'],
        answerIndex: 0,
        hint: 'Chia hết cho 2 và 5 thì tận cùng là 0. Chia hết cho 9 thì chia hết cho 3, tổng chữ số chia hết cho 9.',
        explanation: 'Số 180 có chữ số tận cùng là 0 (chia hết cho 2 và 5) và có tổng các chữ số 1 + 8 + 0 = 9 chia hết cho 9 và 3.'
      },
      {
        question: 'Số nguyên tố là số tự nhiên lớn hơn 1 thỏa mãn điều kiện nào?',
        options: ['Chỉ có đúng hai ước là 1 và chính nó', 'Có từ ba ước trở lên', 'Là một số lẻ bất kì', 'Chia hết cho 2'],
        answerIndex: 0,
        hint: 'Ví dụ: 2, 3, 5, 7, 11... chỉ chia hết cho 1 và chính nó.',
        explanation: 'Định nghĩa SGK: Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.'
      },
      {
        question: 'Phân tích số 60 ra thừa số nguyên tố được kết quả là:',
        options: ['2² × 3 × 5', '4 × 3 × 5', '2 × 30', '2 × 3 × 10'],
        answerIndex: 0,
        hint: 'Mọi thừa số trong tích đều phải là số nguyên tố.',
        explanation: '60 = 4 × 15 = 2² × 3 × 5 (các số 2, 3, 5 đều là số nguyên tố).'
      },
      {
        question: 'Ước chung lớn nhất (ƯCLN) của hai số 24 và 36 là:',
        options: ['12', '6', '18', '24'],
        answerIndex: 0,
        hint: '24 = 2³ × 3; 36 = 2² × 3². Lấy các thừa số chung với số mũ nhỏ nhất: 2² × 3.',
        explanation: 'ƯCLN(24, 36) = 2² × 3 = 12.'
      },
      {
        question: 'Bội chung nhỏ nhất (BCNN) của hai số 12 và 18 là:',
        options: ['36', '72', '24', '18'],
        answerIndex: 0,
        hint: '12 = 2² × 3; 18 = 2 × 3². Lấy thừa số chung và riêng với số mũ lớn nhất: 2² × 3².',
        explanation: 'BCNN(12, 18) = 2² × 3² = 4 × 9 = 36.'
      },
      {
        question: 'Tập hợp các số nguyên ℤ bao gồm những thành phần nào?',
        options: ['Các số nguyên âm, số 0 và các số nguyên dương', 'Các số tự nhiên và phân số', 'Các số nguyên dương và số 0', 'Chỉ các số có dấu trừ đằng trước'],
        answerIndex: 0,
        hint: 'ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}',
        explanation: 'Tập hợp số nguyên ℤ gồm số nguyên âm, số 0 và số nguyên dương.'
      },
      {
        question: 'Tính giá trị của phép tính: (-15) + (-27) = ... ?',
        options: ['-42', '42', '-12', '12'],
        answerIndex: 0,
        hint: 'Cộng hai số nguyên âm: giữ nguyên dấu trừ và cộng hai số đối của chúng.',
        explanation: '(-15) + (-27) = -(15 + 27) = -42.'
      },
      {
        question: 'Tính giá trị của phép tính: (-35) + 50 = ... ?',
        options: ['15', '-15', '85', '-85'],
        answerIndex: 0,
        hint: 'Cộng hai số nguyên khác dấu: lấy số có giá trị tuyệt đối lớn trừ số có giá trị tuyệt đối nhỏ, đặt dấu của số lớn hơn trước kết quả.',
        explanation: '50 - 35 = 15 (mang dấu dương của 50).'
      },
      {
        question: 'Khi bỏ dấu ngoặc có dấu "-" đằng trước: -(a - b + c), kết quả đúng là:',
        options: ['-a + b - c', '-a - b + c', 'a - b + c', '-a + b + c'],
        answerIndex: 0,
        hint: 'Quy tắc dấu ngoặc: Đổi dấu tất cả các số hạng trong ngoặc (+ thành -, - thành +).',
        explanation: 'Dấu "-" trước ngoặc làm đổi dấu: a thành -a, -b thành +b, +c thành -c. Kết quả: -a + b - c.'
      },
      {
        question: 'Tính tích của hai số nguyên cùng dấu: (-6) × (-7) = ... ?',
        options: ['42', '-42', '13', '-13'],
        answerIndex: 0,
        hint: 'Tích của hai số nguyên cùng dấu luôn là một số nguyên dương.',
        explanation: '(-6) × (-7) = 6 × 7 = 42.'
      },
      {
        question: 'Tam giác đều ABC có cạnh bằng 5 cm. Chu vi của tam giác ABC là bao nhiêu?',
        options: ['15 cm', '10 cm', '25 cm', '20 cm'],
        answerIndex: 0,
        hint: 'Tam giác đều có 3 cạnh bằng nhau, chu vi bằng 3 lần độ dài một cạnh.',
        explanation: 'Chu vi = 5 × 3 = 15 cm.'
      },
      {
        question: 'Hình lục giác đều có bao nhiêu trục đối xứng?',
        options: ['6 trục đối xứng', '3 trục đối xứng', '12 trục đối xứng', '1 trục đối xứng'],
        answerIndex: 0,
        hint: 'Gồm 3 đường nối các đỉnh đối diện và 3 đường nối trung điểm các cạnh đối diện.',
        explanation: 'Hình lục giác đều có đúng 6 trục đối xứng và 1 tâm đối xứng (tâm của hình).'
      },
      {
        question: 'Một mảnh vườn hình chữ nhật có chiều dài 12 m và chiều rộng 8 m. Diện tích mảnh vườn là:',
        options: ['96 m²', '40 m²', '48 m²', '20 m²'],
        answerIndex: 0,
        hint: 'Diện tích hình chữ nhật bằng chiều dài nhân chiều rộng: S = a × b.',
        explanation: 'S = 12 × 8 = 96 m².'
      },
      {
        question: 'Hình nào dưới đây vừa có trục đối xứng vừa có tâm đối xứng?',
        options: ['Hình vuông', 'Hình tam giác đều', 'Hình thang cân', 'Hình tam giác vuông'],
        answerIndex: 0,
        hint: 'Hình này có 4 trục đối xứng và giao điểm hai đường chéo là tâm đối xứng.',
        explanation: 'Hình vuông có 4 trục đối xứng và giao điểm hai đường chéo là tâm đối xứng. Tam giác đều chỉ có trục đối xứng, không có tâm đối xứng.'
      },
      {
        question: 'Nhiệt độ buổi sáng ở Sapa là -2°C, đến buổi trưa tăng thêm 7°C. Nhiệt độ buổi trưa là:',
        options: ['5°C', '-9°C', '9°C', '-5°C'],
        answerIndex: 0,
        hint: 'Tính phép cộng số nguyên: (-2) + 7.',
        explanation: '(-2) + 7 = 5°C.'
      }
    ]
  },

  // 2. NGỮ VĂN 6 - HỌC KỲ 1 (18 QUESTIONS)
  {
    id: 'quiz-g6-s1-literature',
    title: 'Ngữ văn 6 - Kiểm tra Giữa học kỳ 1: Tôi và các bạn, Gõ cửa trái tim & Quê hương yêu dấu',
    titleEn: 'Literature 6 - Sem 1: Tales, Poetry, Fables & Vietnamese Grammar',
    grade: 6,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Kiểm tra toàn diện kiến thức SGK Ngữ văn 6 HK1: Bài học đường đời đầu tiên, Nếu cậu muốn có một người bạn, Cô bé bán diêm, Thơ lục bát, Biện pháp tu từ so sánh, ẩn dụ, nhân hóa.',
    descriptionEn: 'Sem 1 Literature review: Animal allegories, poetry, figurative language, vocabulary.',
    questions: [
      {
        question: 'Đoạn trích "Bài học đường đời đầu tiên" được rút từ tác phẩm nổi tiếng nào của nhà văn Tô Hoài?',
        options: ['Dế Mèn phiêu lưu ký', 'Đất rừng phương Nam', 'Tuổi thơ dữ dội', 'Gió lạnh đầu mùa'],
        answerIndex: 0,
        hint: 'Tác phẩm kể về cuộc phiêu lưu của chú Dế Mèn qua nhiều vùng đất.',
        explanation: 'Đoạn trích "Bài học đường đời đầu tiên" nằm ở chương 1 của truyện đồng thoại "Dế Mèn phiêu lưu ký".'
      },
      {
        question: 'Trong tác phẩm "Dế Mèn phiêu lưu ký", hành động dại dột nào của Dế Mèn đã gián tiếp gây nên cái chết của Dế Choắt?',
        options: ['Cất tiếng trêu chọc chị Cốc rồi chui tọt vào hang lẩn trốn', 'Đánh nhau trực tiếp với Dế Choắt', 'Đạp phanh phách vào ngọn cỏ ngáng đường', 'Ăn trộm thức ăn của mẹ'],
        answerIndex: 0,
        hint: 'Dế Mèn kiêu căng trêu một con chim lớn rồi bỏ mặc bạn.',
        explanation: 'Dế Mèn trêu chị Cốc, chị Cốc tức giận mổ Dế Choắt khiến Choắt bị thương nặng và qua đời.'
      },
      {
        question: 'Truyện đồng thoại có đặc điểm nổi bật nhất là gì?',
        options: ['Nhân vật loài vật, đồ vật được nhân hóa sinh động nhưng vẫn giữ đặc tính sinh học tự nhiên', 'Nhân vật thần linh biến hóa kì ảo', 'Kể chuyện danh nhân lịch sử có thật', 'Chỉ dùng thơ để diễn đạt'],
        answerIndex: 0,
        hint: 'Loài vật biết nói tiếng người, có suy nghĩ như con người.',
        explanation: 'Truyện đồng thoại dành cho thiếu nhi nhân hóa các con vật, đồ vật với tâm lý con người mà không làm mất đi tập tính tự nhiên.'
      },
      {
        question: 'Trong đoạn trích "Nếu cậu muốn có một người bạn" (Hoàng tử bé - Saint-Exupéry), con Cáo đã dạy Hoàng tử bé bí mật gì?',
        options: ['Người ta chỉ thấy rõ với trái tim, điều cốt lõi vô hình trong mắt trần', 'Muốn kết bạn phải tặng nhiều quà đắt tiền', 'Hãy luôn nghi ngờ người lạ', 'Cần phải thuần hóa thật nhiều bạn bè'],
        answerIndex: 0,
        hint: 'Bí mật về nhìn nhận bằng trái tim và sự cảm thông.',
        explanation: 'Cáo chia sẻ: "Người ta chỉ nhìn thấy thật rõ ràng bằng trái tim. Điều cốt lõi thì mắt trần không thể nhìn thấy."'
      },
      {
        question: 'Tác giả của bài thơ "Chuyện cổ tích về loài người" là ai?',
        options: ['Xuân Quỳnh', 'Trần Đăng Khoa', 'Định Hải', 'Lâm Thị Mỹ Dạ'],
        answerIndex: 0,
        hint: 'Nữ thi sĩ nổi tiếng với các tác phẩm: Thuyền và biển, Tiếng gà trưa, Sóng.',
        explanation: 'Bài thơ "Chuyện cổ tích về loài người" do nhà thơ Xuân Quỳnh sáng tác.'
      },
      {
        question: 'Trong bài thơ "Mây và sóng" của đại thi hào R. Tagore, vì sao em bé từ chối lời mời rủ đi chơi của những người trên mây và trong sóng?',
        options: ['Vì em yêu mẹ sâu sắc và không muốn rời xa mẹ', 'Vì em sợ bị đuối nước và ngã từ trên cao', 'Vì mẹ em cấm em không được ra ngoài', 'Vì em không biết đường đi'],
        answerIndex: 0,
        hint: 'Tình mẫu tử thiêng liêng và ấm áp khiến em bé chọn ở bên mẹ.',
        explanation: 'Em bé từ chối vì không muốn rời xa mẹ: "Mẹ mình đang đợi ở nhà", thể hiện tình mẫu tử bao la.'
      },
      {
        question: 'Truyện ngắn "Gió lạnh đầu mùa" của Thạch Lam khắc họa phẩm chất tốt đẹp nào của hai chị em Sơn và Lan?',
        options: ['Lòng nhân ái, biết yêu thương, sẻ chia áo ấm cho đứa trẻ nghèo khó', 'Sự dũng cảm chống lại kẻ xấu', 'Tính tiết kiệm không tiêu xài hoang phí', 'Tinh thần hiếu học vượt khó'],
        answerIndex: 0,
        hint: 'Hai chị em đã đem chiếc áo bông cũ cho cái Hiên mặc.',
        explanation: 'Sơn và Lan thương bé Hiên nhà nghèo co ro vì rét nên đã mang chiếc áo bông cũ tặng bạn.'
      },
      {
        question: 'Trong thể thơ lục bát, tiếng thứ 6 của câu lục (6 tiếng) sẽ bắt vần với tiếng thứ mấy của câu bát (8 tiếng)?',
        options: ['Tiếng thứ 6', 'Tiếng thứ 8', 'Tiếng thứ 4', 'Tiếng thứ 2'],
        answerIndex: 0,
        hint: 'Quy luật: Lục 6 hiệp vần với Bát 6.',
        explanation: 'Quy tắc hiệp vần thể thơ lục bát: Tiếng thứ 6 câu lục bắt vần với tiếng thứ 6 câu bát (thường là thanh bằng).'
      },
      {
        question: 'Câu thơ lục bát nào dưới đây đúng luật thanh điệu và gieo vần?',
        options: ['Cày đồng đang buổi ban trưa / Mồ hôi thánh thót như mưa ruộng cày', 'Anh đi anh nhớ quê nhà / Nhớ canh rau muống nhớ ai nơi này', 'Bầu ơi thương lấy bí cùng / Tuy rằng khác giống nhưng chung một nhà', 'Hôm nay trời nắng chang chang / Mèo con đi học quên mang theo dù'],
        answerIndex: 0,
        hint: '"trưa" (vần ưa) hiệp vần với "mưa" (vần ưa ở tiếng thứ 6 câu bát).',
        explanation: 'Cặp câu "trưa" và "mưa" chuẩn luật hiệp vần lục bát ở tiếng thứ 6.'
      },
      {
        question: 'Biện pháp tu từ nào được sử dụng trong câu: "Mặt trời xuống biển như hòn lửa"?',
        options: ['So sánh', 'Ẩn dụ', 'Hoán dụ', 'Điệp ngữ'],
        answerIndex: 0,
        hint: 'Có từ so sánh "như" liên kết giữa vế A và vế B.',
        explanation: 'Tác giả so sánh "mặt trời xuống biển" với "hòn lửa" qua từ nối "như".'
      },
      {
        question: 'Biện pháp tu từ nào được sử dụng trong câu thơ: "Ngày ngày mặt trời đi qua trên lăng / Thấy một mặt trời trong lăng rất đỏ"?',
        options: ['Ẩn dụ', 'Hoán dụ', 'Nói quá', 'Nhân hóa'],
        answerIndex: 0,
        hint: '"mặt trời trong lăng" dùng để chỉ Bác Hồ dựa trên nét tương đồng vĩ đại.',
        explanation: 'Hình ảnh "mặt trời trong lăng" là ẩn dụ chỉ Bác Hồ, người soi đường dẫn lối cho cách mạng Việt Nam.'
      },
      {
        question: 'Trong câu: "Bác đã đi rồi sao, Bác ơi!", từ "đi" là biện pháp tu từ gì?',
        options: ['Nói giảm - nói tránh', 'Nói quá', 'Chơi chữ', 'Liệt kê'],
        answerIndex: 0,
        hint: 'Tránh dùng từ "chết" hay "mất" để giảm nhẹ nỗi đau thương.',
        explanation: 'Từ "đi" được dùng theo phép nói giảm nói tránh để bày tỏ sự kính trọng và giảm bớt sự đau đớn mất mát.'
      },
      {
        question: 'Từ nào dưới đây là từ ghép đẳng lập trong tiếng Việt?',
        options: ['Quần áo', 'Xe đạp', 'Bút chì', 'Cây chuối'],
        answerIndex: 0,
        hint: 'Hai tiếng có nghĩa ngang hàng nhau, không phân biệt chính phụ.',
        explanation: '"Quần" và "áo" đều là danh từ chỉ trang phục có vai trò ngữ nghĩa ngang hàng nhau nên là từ ghép đẳng lập.'
      },
      {
        question: 'Từ nào dưới đây là từ láy tượng hình?',
        options: ['Liêu xiêu', 'Thánh thót', 'Ào ào', 'Rì rào'],
        answerIndex: 0,
        hint: 'Gợi tả hình ảnh, dáng vẻ của người hoặc vật.',
        explanation: '"Liêu xiêu" gợi tả dáng đi siêu vẹo không vững chắc, thuộc nhóm từ láy tượng hình.'
      },
      {
        question: 'Văn bản "Cô bé bán diêm" của nhà văn An-đéc-xen kết thúc bằng hình ảnh nào?',
        options: ['Cô bé mỉm cười chết vì giá rét trong đêm giao thừa cùng que diêm đã tàn', 'Cô bé tìm được một ngôi nhà ấm áp giàu có', 'Cô bé bán hết sạch diêm và trở về nhà với bố', 'Bà nội sống lại đưa cô bé đi học'],
        answerIndex: 0,
        hint: 'Một cái chết thanh thản nhưng xót xa trong buổi sáng đầu năm.',
        explanation: 'Cô bé chết vì rét trong đêm giao thừa với đôi má hồng và nụ cười, phản ánh hiện thực bất công và tình thương bao la.'
      },
      {
        question: 'Dấu hiệu nào nhận biết trạng ngữ chỉ thời gian trong câu văn?',
        options: ['Trả lời cho câu hỏi: Khi nào? Bao giờ? Mấy giờ?', 'Trả lời cho câu hỏi: Ở đâu? Chỗ nào?', 'Trả lời cho câu hỏi: Để làm gì?', 'Trả lời cho câu hỏi: Bằng cái gì?'],
        answerIndex: 0,
        hint: 'Trạng ngữ chỉ mốc hoặc khoảng thời gian xảy ra hành động.',
        explanation: 'Trạng ngữ thời gian bổ sung thông tin về thời gian diễn ra sự việc và trả lời cho câu hỏi "Khi nào?".'
      },
      {
        question: 'Tác phẩm "Cô Tô" của nhà văn Nguyễn Tuân thuộc thể loại văn học nào?',
        options: ['Kí (bút kí / tùy bút)', 'Tiểu thuyết chương hồi', 'Thơ trường ca', 'Kịch bản sân khấu'],
        answerIndex: 0,
        hint: 'Ghi chép chân thực và đầy cảm xúc về phong cảnh đảo Cô Tô sau cơn bão.',
        explanation: '"Cô Tô" là bài kí nổi tiếng ghi lại vẻ đẹp rực rỡ, khoáng đạt của biển đảo Đông Bắc nước ta.'
      },
      {
        question: 'Đặc điểm nào dưới đây là yêu cầu cốt lõi khi viết một đoạn văn cảm thụ văn học?',
        options: ['Nêu rõ cảm nghĩ, kết hợp trích dẫn chi tiết tiêu biểu và chỉ ra nét đặc sắc nghệ thuật', 'Chỉ cần chép lại nguyên văn toàn bộ tác phẩm', 'Không được sử dụng từ ngữ bộc lộ cảm xúc', 'Kể lại các câu chuyện ngoài đời không liên quan'],
        answerIndex: 0,
        hint: 'Phải chỉ ra cái hay về nội dung lẫn nghệ thuật (từ ngữ, biện pháp tu từ).',
        explanation: 'Đoạn văn cảm thụ cần thể hiện cảm xúc chân thành, có dẫn chứng từ ngữ, hình ảnh và biện pháp tu từ của tác phẩm.'
      }
    ]
  },

  // 3. KHOA HỌC TỰ NHIÊN 6 - HỌC KỲ 1 (18 QUESTIONS)
  {
    id: 'quiz-g6-s1-science',
    title: 'Khoa học Tự nhiên 6 - Kiểm tra Giữa học kỳ 1: Đo lường, Chất quanh ta & Tế bào sống',
    titleEn: 'Natural Science 6 - Sem 1: Measurement, Matter & Cell Biology',
    grade: 6,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Các phép đo cơ bản, các thể của chất, không khí và oxygen, tách chất ra khỏi hỗn hợp, cấu tạo tế bào nhân sơ và nhân thực, quang hợp.',
    descriptionEn: 'Sem 1 Natural Science: Measurements, states of matter, oxygen, separation techniques, cells, microorganisms.',
    questions: [
      {
        question: 'Dụng cụ nào dưới đây dùng để đo thể tích của một lượng chất lỏng trong phòng thí nghiệm?',
        options: ['Ống đong (hoặc bình chia độ)', 'Cân đồng hồ', 'Thước dây', 'Nhiệt kế thủy ngân'],
        answerIndex: 0,
        hint: 'Dụng cụ bằng thủy tinh hoặc nhựa có vạch chia mililít (ml).',
        explanation: 'Ống đong và bình chia độ là dụng cụ chuyên dụng để đo chính xác thể tích chất lỏng.'
      },
      {
        question: 'Khi đo chiều dài của một cuốn sách bằng thước kẻ, mắt ta cần đặt như thế nào để đọc kết quả chính xác?',
        options: ['Nhìn theo hướng vuông góc với cạnh thước tại đầu kia của vật', 'Nhìn nghiêng từ bên trái sang', 'Nhìn chếch từ trên cao xuống một góc 45 độ', 'Nhìn từ bên phải sang'],
        answerIndex: 0,
        hint: 'Phải đặt mắt nhìn vuông góc để tránh sai số thị giác.',
        explanation: 'Đặt mắt vuông góc với mép thước tại vạch chia tương ứng với đầu của vật để tránh sai lệch đọc vạch.'
      },
      {
        question: 'Quá trình chuyển từ thể rắn sang thể lỏng của một chất được gọi là gì?',
        options: ['Sự nóng chảy', 'Sự đông đặc', 'Sự bay hơi', 'Sự ngưng tụ'],
        answerIndex: 0,
        hint: 'Ví dụ: Cục nước đá để ngoài không khí biến thành nước lỏng.',
        explanation: 'Sự nóng chảy là quá trình chuyển thể từ rắn sang lỏng khi nhiệt độ đạt đến nhiệt độ nóng chảy.'
      },
      {
        question: 'Khí Oxygen (O₂) có vai trò thiết yếu nào đối với đời sống con người và sinh vật?',
        options: ['Duy trì sự hô hấp và sự cháy', 'Làm mát bầu khí quyển toàn cầu', 'Dập tắt các đám cháy dầu mỏ', 'Ngăn chặn hiện tượng quang hợp'],
        answerIndex: 0,
        hint: 'Mọi sinh vật hiếu khí đều cần khí này để thở và tạo năng lượng.',
        explanation: 'Oxygen cần thiết cho quá trình hô hấp của động - thực vật và cần thiết để duy trì sự cháy của các nhiên liệu.'
      },
      {
        question: 'Thành phần phần trăm thể tích của khí Nitrogen (N₂) trong không khí sạch khoảng bao nhiêu?',
        options: ['Khoảng 78%', 'Khoảng 21%', 'Khoảng 1%', 'Khoảng 50%'],
        answerIndex: 0,
        hint: 'Khí chiếm tỉ lệ lớn nhất trong khí quyển Trái Đất.',
        explanation: 'Không khí sạch chứa xấp xỉ 78% Nitrogen, 21% Oxygen và 1% các khí khác (CO₂, hơi nước, Argon...).'
      },
      {
        question: 'Phương pháp nào thích hợp nhất để tách cát ra khỏi hỗn hợp nước cát?',
        options: ['Phương pháp lọc', 'Phương pháp cô cạn', 'Phương pháp chưng cất', 'Phương pháp chiết'],
        answerIndex: 0,
        hint: 'Cát là chất rắn không tan trong nước, dùng phễu và giấy lọc.',
        explanation: 'Lọc dùng để tách chất rắn không tan (cát) ra khỏi chất lỏng (nước).'
      },
      {
        question: 'Nước muối sinh lí (dung dịch NaCl 0,9%) là một ví dụ về:',
        options: ['Dung dịch đồng nhất', 'Chất tinh khiết hoàn toàn', 'Huyền phù đục', 'Nhũ tương dầu nước'],
        answerIndex: 0,
        hint: 'Muối tan hoàn toàn trong nước tạo thành chất lỏng trong suốt.',
        explanation: 'Dung dịch là hỗn hợp đồng nhất giữa chất tan (muối ăn) và dung môi (nước).'
      },
      {
        question: 'Tế bào là đơn vị cấu trúc và chức năng cơ bản của đối tượng nào?',
        options: ['Mọi sinh vật sống (thực vật, động vật, vi khuẩn, nấm)', 'Chỉ riêng con người', 'Chỉ có ở các khoáng vật đất đá', 'Chỉ có ở robot thông minh'],
        answerIndex: 0,
        hint: 'Tất cả cơ thể sống đều được cấu tạo từ một hoặc nhiều tế bào.',
        explanation: 'Học thuyết tế bào khẳng định mọi sinh vật sống từ đơn bào đến đa bào đều được tạo nên từ tế bào.'
      },
      {
        question: 'Thành phần nào dưới đây KHÔNG có ở tế bào động vật nhưng lại có ở tế bào thực vật?',
        options: ['Thành tế bào (Cell wall) và Lục lạp (Chloroplast)', 'Màng sinh chất (Màng tế bào)', 'Nhân tế bào', 'Chất tế bào'],
        answerIndex: 0,
        hint: 'Tạo nên độ cứng cáp và màu xanh giúp thực vật quang hợp.',
        explanation: 'Tế bào thực vật có thành tế bào cellulose tạo khung bảo vệ và lục lạp chứa diệp lục quang hợp.'
      },
      {
        question: 'Bộ phận nào đóng vai trò là "trung tâm điều khiển" mọi hoạt động sống của tế bào nhân thực?',
        options: ['Nhân tế bào (Nucleus)', 'Màng tế bào', 'Không bào', 'Chất tế bào'],
        answerIndex: 0,
        hint: 'Nơi lưu giữ nhiễm sắc thể và thông tin di truyền ADN.',
        explanation: 'Nhân tế bào chứa vật chất di truyền, chỉ đạo mọi quá trình trao đổi chất và phân chia của tế bào.'
      },
      {
        question: 'Điểm khác biệt cốt lõi giữa tế bào nhân sơ (vi khuẩn) và tế bào nhân thực là gì?',
        options: ['Tế bào nhân sơ chưa có màng nhân bao bọc vật chất di truyền', 'Tế bào nhân sơ không có màng tế bào', 'Tế bào nhân sơ có kích thước to hơn rất nhiều', 'Tế bào nhân sơ có nhiều ti thể'],
        answerIndex: 0,
        hint: 'Vật chất di truyền của vi khuẩn nằm tự do ở vùng nhân.',
        explanation: 'Tế bào nhân sơ chỉ có "vùng nhân" chưa có màng nhân ngăn cách với tế bào chất.'
      },
      {
        question: 'Sinh vật nào dưới đây là cơ thể đơn bào (cấu tạo từ duy nhất một tế bào)?',
        options: ['Trùng roi xanh (hoặc Vi khuẩn E. coli)', 'Cây phượng vĩ', 'Con cá chép', 'Con chim bồ câu'],
        answerIndex: 0,
        hint: 'Một cá thể chỉ gồm 1 tế bào duy nhất nhưng thực hiện đầy đủ chức năng sống.',
        explanation: 'Trùng roi, trùng giày, vi khuẩn là các sinh vật đơn bào điển hình.'
      },
      {
        question: 'Tập hợp các tế bào có cùng hình dạng, cấu tạo và cùng thực hiện một chức năng nhất định tạo thành:',
        options: ['Mô', 'Cơ quan', 'Hệ cơ quan', 'Cơ thể'],
        answerIndex: 0,
        hint: 'Ví dụ: Mô biểu bì, mô cơ, mô giậu.',
        explanation: 'Cấp độ tổ chức: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.'
      },
      {
        question: 'Dụng cụ nào có độ phóng đại từ 40 đến hàng nghìn lần dùng để quan sát chi tiết cấu trúc tế bào?',
        options: ['Kính hiển vi quang học', 'Kính lúp cầm tay', 'Kính râm chống lóa', 'Kính thiên văn'],
        answerIndex: 0,
        hint: 'Thiết bị quang học quan trọng trong phòng thực hành Sinh học.',
        explanation: 'Kính hiển vi quang học dùng nguồn sáng và các thấu kính để phóng đại tế bào mắt thường không nhìn thấy.'
      },
      {
        question: 'Nước đá tan chảy ở nhiệt độ nào dưới áp suất khí quyển tiêu chuẩn?',
        options: ['0°C', '100°C', '-10°C', '37°C'],
        answerIndex: 0,
        hint: 'Nhiệt độ đóng băng và nóng chảy của nước tinh khiết.',
        explanation: 'Ở áp suất khí quyển chuẩn, nước đá nóng chảy thành nước lỏng ở đúng 0°C.'
      },
      {
        question: 'Hành động nào dưới đây vi phạm quy tắc an toàn trong phòng thực hành môn Khoa học tự nhiên?',
        options: ['Nếm thử hoặc ngửi trực tiếp các hóa chất lạ bằng mũi', 'Đeo găng tay và kính bảo hộ khi làm việc với hóa chất', 'Rửa tay sạch bằng xà phòng sau buổi thực hành', 'Báo cáo ngay với giáo viên khi có ống nghiệm vỡ'],
        answerIndex: 0,
        hint: 'Tuyệt đối không ăn, uống hoặc đưa hóa chất lên miệng nếm.',
        explanation: 'Nếm hoặc ngửi hóa chất lạ có thể gây ngộ độc đường hô hấp và tiêu hóa cực kì nguy hiểm.'
      },
      {
        question: 'Hiện tượng nào dưới đây thể hiện tính chất hóa học của chất (có sự biến đổi thành chất mới)?',
        options: ['Đinh sắt để ngoài không khí ẩm bị gỉ sét biến thành chất màu nâu đỏ', 'Thanh sắt bị uốn cong thành móc treo', 'Cốc nước đá bị tan chảy thành nước lỏng', 'Hòa tan đường vào cốc nước'],
        answerIndex: 0,
        hint: 'Sắt kết hợp với oxy và nước tạo thành oxit sắt (chất mới).',
        explanation: 'Sắt gỉ là phản ứng hóa học tạo ra chất mới (rỉ sắt), các trường hợp còn lại chỉ là biến đổi vật lí.'
      },
      {
        question: 'Để dập tắt một đám cháy nhỏ do xăng dầu, biện pháp nào sau đây là ĐÚNG?',
        options: ['Dùng cát hoặc bình bọt chữa cháy phủ kín lên ngọn lửa', 'Dội thật nhiều nước lạnh vào đám cháy', 'Quạt thật mạnh để thổi bay ngọn lửa', 'Mở toang các cửa sổ đón gió'],
        answerIndex: 0,
        hint: 'Xăng dầu nhẹ hơn nước, nổi trên nước làm đám cháy lan rộng nếu dội nước.',
        explanation: 'Xăng dầu nhẹ hơn nước nên không được dội nước; phải dùng cát hoặc chăn ướt/bình bọt để cách ly đám cháy với oxy.'
      }
    ]
  },

  // 4. LỊCH SỬ & ĐỊA LÍ 6 - HỌC KỲ 1 (18 QUESTIONS)
  {
    id: 'quiz-g6-s1-history-geo',
    title: 'Lịch sử & Địa lí 6 - Kiểm tra Giữa học kỳ 1: Xã hội nguyên thủy, Cổ đại phương Đông & Bản đồ Trái Đất',
    titleEn: 'History & Geography 6 - Sem 1: Ancient Times, Map Skills & Planet Earth',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử & Địa lí',
    subjectVi: 'Lịch sử & Địa lí',
    subjectEn: 'History & Geography',
    category: 'social',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Nguồn gốc loài người, văn minh Ai Cập, Lưỡng Hà, Ấn Độ, Trung Quốc cổ đại, hệ thống kinh vĩ tuyến, tỉ lệ bản đồ, Trái Đất trong hệ Mặt Trời.',
    descriptionEn: 'Sem 1 History & Geography: Human origins, ancient civilizations, map coordinates, Earth systems.',
    questions: [
      {
        question: 'Dấu tích của Người tối cổ xuất hiện sớm nhất tại châu lục nào trên Trái Đất?',
        options: ['Châu Phi', 'Châu Âu', 'Châu Á', 'Châu Mĩ'],
        answerIndex: 0,
        hint: 'Khu vực Đông Phi với các di cốt vượn nhân hình hàng triệu năm tuổi.',
        explanation: 'Các nhà khảo cổ học tìm thấy những hóa thạch Người tối cổ cổ xưa nhất (khoảng 4 triệu năm trước) tại Đông Phi.'
      },
      {
        question: 'Phát minh vĩ đại nào đã giúp Người nguyên thủy sưởi ấm, xua đuổi thú dữ và nướng chín thức ăn?',
        options: ['Phát minh ra cách tạo ra và sử dụng Lửa', 'Phát minh ra máy bay', 'Phát minh ra đồ gốm', 'Phát minh ra la bàn'],
        answerIndex: 0,
        hint: 'Ngọn lửa giúp con người bước qua thời kì ăn lông ở lỗ.',
        explanation: 'Lửa là bước tiến vượt bậc của nhân loại, giúp sưởi ấm, cải thiện chất lượng dinh dưỡng và bảo vệ bản thân.'
      },
      {
        question: 'Các nền văn minh cổ đại phương Đông (Ai Cập, Lưỡng Hà, Ấn Độ, Trung Quốc) đều hình thành ở đâu?',
        options: ['Lưu vực các con sông lớn màu mỡ phù sa', 'Vùng sa mạc khô hạn sâu trong lục địa', 'Trên các đỉnh núi cao hiểm trở', 'Trên các hải đảo xa xôi'],
        answerIndex: 0,
        hint: 'Sông Nin, sông Ti-gơ-rơ, sông Hằng, sông Hoàng Hà.',
        explanation: 'Lưu vực các con sông lớn cung cấp nguồn nước ngọt dồi dào, đất đai màu mỡ cho sản xuất nông nghiệp trồng lúa nước.'
      },
      {
        question: 'Công trình kiến trúc kì vĩ nào của người Ai Cập cổ đại được xây dựng làm lăng mộ cho các Pha-ra-ông?',
        options: ['Kim tự tháp (Pyramids)', 'Vạn Lý Trường Thành', 'Đấu trường La Mã Cô-li-dê', 'Vườn treo Ba-bi-lon'],
        answerIndex: 0,
        hint: 'Kiến trúc hình chóp tứ giác khổng lồ xây bằng đá khối ở Giza.',
        explanation: 'Kim tự tháp là kì quan kiến trúc nổi tiếng bậc nhất thế giới cổ đại do người Ai Cập dựng nên.'
      },
      {
        question: 'Người Lưỡng Hà cổ đại đã phát minh ra loại chữ viết nào đầu tiên?',
        options: ['Chữ hình nêm (chữ tiết cốt trên đất sét)', 'Chữ tượng hình trên giấy papyrus', 'Chữ cái Latinh', 'Chữ Hán'],
        answerIndex: 0,
        hint: 'Dùng que vót nhọn ấn vào những phiến đất sét ướt tạo thành hình chiếc đinh hay hình nêm.',
        explanation: 'Chữ hình nêm (cuneiform) là sáng tạo của người Su-me ở vùng Lưỡng Hà (Tigris - Euphrates).'
      },
      {
        question: 'Nhà nước cổ đại đầu tiên của người Việt có tên gọi là gì?',
        options: ['Nhà nước Văn Lang', 'Nhà nước Đại Việt', 'Nhà nước Âu Lạc', 'Nhà nước Vạn Xuân'],
        answerIndex: 0,
        hint: 'Đứng đầu là các Vua Hùng đóng đô ở Phong Châu (Phú Thọ).',
        explanation: 'Nhà nước Văn Lang ra đời vào khoảng thế kỉ VII TCN, do Hùng Vương đứng đầu.'
      },
      {
        question: 'Đường Kinh tuyến gốc (Kinh tuyến 0 độ) theo quy ước quốc tế đi qua địa danh nào?',
        options: ['Đài thiên văn Greenwich ở thủ đô Luân Đôn (nước Anh)', 'Thủ đô Paris (nước Pháp)', 'Quần đảo Hawaii (nước Mĩ)', 'Đỉnh núi Everest'],
        answerIndex: 0,
        hint: 'Kinh tuyến gốc đi qua đài thiên văn ngoại ô thành phố London.',
        explanation: 'Kinh tuyến 0° được quy ước đi qua đài thiên văn Hoàng gia Greenwich gần London, Vương quốc Anh.'
      },
      {
        question: 'Đường Vĩ tuyến lớn nhất trên bề mặt Trái Đất (Vĩ tuyến 0 độ) được gọi là gì?',
        options: ['Đường Xích đạo', 'Đường Chí tuyến Bắc', 'Đường Vòng cực Nam', 'Đường Kinh tuyến gốc'],
        answerIndex: 0,
        hint: 'Đường phân chia Trái Đất thành Bán cầu Bắc và Bán cầu Nam.',
        explanation: 'Đường Xích đạo là đường vĩ tuyến số 0°, chia quả Địa Cầu thành hai nửa bán cầu bằng nhau.'
      },
      {
        question: 'Nếu trên bản đồ có tỉ lệ 1 : 100 000, khoảng cách đo được giữa hai điểm là 3 cm thì khoảng cách thực địa tương ứng là bao nhiêu?',
        options: ['3 km (tức 300 000 cm)', '30 km', '300 m', '30 m'],
        answerIndex: 0,
        hint: 'Nhân khoảng cách trên bản đồ với mẫu số tỉ lệ: 3 × 100 000 = 300 000 cm = 3 km.',
        explanation: '3 cm × 100 000 = 300 000 cm = 3 000 m = 3 km.'
      },
      {
        question: 'Trong hệ Mặt Trời, tính theo thứ tự khoảng cách từ Mặt Trời ra ngoài, Trái Đất nằm ở vị trí thứ mấy?',
        options: ['Vị trí thứ 3', 'Vị trí thứ 1', 'Vị trí thứ 5', 'Vị trí thứ 7'],
        answerIndex: 0,
        hint: 'Sau Thủy tinh (sao Thủy) và Kim tinh (sao Kim).',
        explanation: 'Thứ tự từ Mặt Trời: Sao Thủy → Sao Kim → Trái Đất (hành tinh thứ 3).'
      },
      {
        question: 'Hiện tượng ngày và đêm luân phiên nhau trên Trái Đất là hệ quả của chuyển động nào?',
        options: ['Chuyển động tự quay quanh trục của Trái Đất từ Tây sang Đông', 'Chuyển động quay quanh Mặt Trời', 'Chuyển động của Mặt Trăng quanh Trái Đất', 'Sự bay hơi của nước biển'],
        answerIndex: 0,
        hint: 'Trái Đất hình cầu tự quay quanh trục nghiêng cứ sau 24 giờ một vòng.',
        explanation: 'Trái Đất hình cầu nên chỉ được Mặt Trời chiếu sáng một nửa. Nhờ tự quay quanh trục nên mọi nơi lần lượt có ngày và đêm.'
      },
      {
        question: 'Thời gian để Trái Đất hoàn thành một vòng chuyển động quanh Mặt Trời là bao lâu?',
        options: ['365 ngày và 6 giờ (khoảng 1 năm)', '24 giờ (1 ngày đêm)', '30 ngày (1 tháng)', '100 ngày'],
        answerIndex: 0,
        hint: 'Cứ 4 năm lại dư ra 24 giờ tạo thành năm nhuận có 366 ngày.',
        explanation: 'Chu kì một vòng quay quanh Mặt Trời mất 365 ngày 6 giờ (chính là độ dài một năm thiên văn).'
      },
      {
        question: 'Lớp vỏ Trái Đất có độ dày trung bình dao động khoảng bao nhiêu?',
        options: ['Từ 5 km (ở đại dương) đến 70 km (ở lục địa)', 'Hơn 2900 km', 'Trên 5000 km', 'Chỉ 10 mét'],
        answerIndex: 0,
        hint: 'Lớp ngoài cùng mỏng nhất, nơi con người sinh sống.',
        explanation: 'Vỏ Trái Đất là lớp mỏng nhất ngoài cùng, dày từ 5 km ở đáy đại dương đến khoảng 70 km ở các khối núi lục địa cao.'
      },
      {
        question: 'Núi lửa và Động đất thường xảy ra tập trung nhiều nhất ở khu vực nào?',
        options: ['Ranh giới tiếp xúc giữa các mảng kiến tạo', 'Ở chính giữa các mảng kiến tạo ổn định', 'Chỉ ở các vùng cực băng giá', 'Chỉ ở các hồ nước ngọt'],
        answerIndex: 0,
        hint: 'Vành đai lửa Thái Bình Dương là nơi va chạm của các mảng vỏ Trái Đất.',
        explanation: 'Các mảng kiến tạo chuyển động xô vào nhau hoặc tách xa nhau ở ranh giới, gây tích tụ nội lực phát sinh động đất và núi lửa.'
      },
      {
        question: 'Dạng địa hình có độ cao tuyệt đối thường từ 500 m trở lên, sườn dốc và đỉnh nhọn được gọi là:',
        options: ['Núi', 'Đồng bằng', 'Cao nguyên', 'Đồi'],
        answerIndex: 0,
        hint: 'Địa hình nhô cao rõ rệt so với mặt bằng xung quanh, ví dụ dãy Hoàng Liên Sơn.',
        explanation: 'Núi là dạng địa hình nhô cao nổi bật, đỉnh nhọn, sườn dốc, độ cao thường trên 500 m so với mực nước biển.'
      },
      {
        question: 'Bộ luật thành văn cổ xưa nhất còn bảo tồn tương đối nguyên vẹn của vùng Lưỡng Hà là:',
        options: ['Bộ luật Hammurabi', 'Bộ luật Gia Long', 'Bộ luật La Mã 12 bảng', 'Bộ luật Dân sự'],
        answerIndex: 0,
        hint: 'Bộ luật được khắc trên cột đá bazan đen hình trụ của vua Ham-mu-ra-bi.',
        explanation: 'Bộ luật Hammurabi (Babylon) nổi tiếng với nguyên tắc công bằng nghiêm khắc "mắt đền mắt, răng đền răng".'
      },
      {
        question: 'Thành tựu văn hóa nào của người Ấn Độ cổ đại vẫn được toàn thế giới sử dụng rộng rãi trong toán học ngày nay?',
        options: ['Hệ thống 10 chữ số từ 0 đến 9', 'Chữ nêm trên đất sét', 'Kỹ thuật ướp xác', 'Thuốc súng và la bàn'],
        answerIndex: 0,
        hint: 'Đặc biệt là phát minh ra số 0 mang tính cách mạng.',
        explanation: 'Người Ấn Độ cổ đại đã sáng tạo ra hệ thống chữ số thập phân từ 0 đến 9, sau đó người Ả Rập truyền bá sang châu Âu.'
      },
      {
        question: 'Kinh độ của một điểm trên bản đồ là khoảng cách tính bằng số độ từ điểm đó đến:',
        options: ['Kinh tuyến gốc (0°)', 'Đường Xích đạo', 'Cực Bắc', 'Cực Nam'],
        answerIndex: 0,
        hint: 'Kinh độ tính từ kinh tuyến 0° sang phía Đông hoặc Tây.',
        explanation: 'Kinh độ là khoảng cách tính bằng độ từ kinh tuyến đi qua điểm đó đến kinh tuyến gốc 0°.'
      }
    ]
  },

  // 5. TIẾNG ANH 6 - HỌC KỲ 1 (18 QUESTIONS)
  {
    id: 'quiz-g6-s1-english',
    title: 'Tiếng Anh 6 - Kiểm tra Giữa học kỳ 1: Global Success Units 1 - 6 (School, Home, Friends, Tet)',
    titleEn: 'English 6 - Sem 1: Global Success Comprehensive Grammar & Vocab',
    grade: 6,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Ngữ pháp và từ vựng trọng tâm SGK Tiếng Anh 6 Global Success HK1: Thì hiện tại đơn, hiện tại tiếp diễn, tính từ so sánh hơn, so sánh nhất, modal verbs must/mustn\'t, should.',
    descriptionEn: 'Units 1-6 Global Success: Present simple/continuous, comparatives, superlatives, modals, vocabulary.',
    questions: [
      {
        question: 'Choose the correct form: My brother usually _______ his homework right after dinner.',
        options: ['does', 'do', 'doing', 'is doing'],
        answerIndex: 0,
        hint: 'Adverb of frequency "usually" + singular subject "My brother" requires Vs/es in Present Simple.',
        explanation: '"My brother" is third-person singular, with "usually" we use Present Simple: does.'
      },
      {
        question: 'Listen! The teacher _______ an important announcement in the hallway.',
        options: ['is making', 'makes', 'make', 'made'],
        answerIndex: 0,
        hint: 'Imperative word "Listen!" signals an action occurring at the present moment.',
        explanation: 'With "Listen!", we use Present Continuous: is making.'
      },
      {
        question: 'Find the odd one out among school items:',
        options: ['Pillow', 'Pencil sharpener', 'Compass', 'Calculator'],
        answerIndex: 0,
        hint: 'Pillow belongs to the bedroom, not classroom stationery.',
        explanation: 'Pillow (gối ngủ) belongs to bedroom furniture, others are study stationery.'
      },
      {
        question: 'Complete the sentence: "Where is the cat?" - "It is sleeping _______ the table and the sofa."',
        options: ['between', 'among', 'in front', 'opposite to'],
        answerIndex: 0,
        hint: 'Structure: between A and B.',
        explanation: 'We use the preposition "between" when referring to a position between two distinct objects (the table and the sofa).'
      },
      {
        question: 'Which adjective describes a person who loves talking and meeting new people easily?',
        options: ['Friendly', 'Shy', 'Hard-working', 'Selfish'],
        answerIndex: 0,
        hint: 'Opposite of reserved or shy.',
        explanation: '"Friendly" (thân thiện) describes someone sociable and pleasant with others.'
      },
      {
        question: 'Choose the correct comparative adjective: Living in the countryside is _______ than living in a crowded metropolis.',
        options: ['more peaceful', 'peacefuler', 'most peaceful', 'as peaceful'],
        answerIndex: 0,
        hint: 'Peaceful is a two-syllable adjective ending in -ful, so use "more + adjective + than".',
        explanation: '"Peaceful" is a long adjective, its comparative form is "more peaceful than".'
      },
      {
        question: 'Choose the correct word: Ha Long Bay is one of the most magnificent natural _______ of Vietnam.',
        options: ['wonders', 'islands', 'caves', 'lakes'],
        answerIndex: 0,
        hint: 'Natural wonders of the world (kỳ quan thiên nhiên).',
        explanation: 'Natural wonders (kỳ quan thiên nhiên) is the core vocabulary in Unit 5.'
      },
      {
        question: 'Choose the correct modal verb for school laboratory safety: You _______ touch the electrical wires with wet hands!',
        options: ['mustn\'t', 'must', 'should', 'need'],
        answerIndex: 0,
        hint: 'Strict prohibition for safety reasons.',
        explanation: '"Mustn\'t" expresses strict prohibition (cấm tuyệt đối) to avoid danger.'
      },
      {
        question: 'Select the appropriate recommendation: Students _______ get at least eight hours of sleep before an exam.',
        options: ['should', 'shouldn\'t', 'mustn\'t', 'are'],
        answerIndex: 0,
        hint: 'Giving constructive advice for health.',
        explanation: '"Should" is used to provide good advice or recommendations.'
      },
      {
        question: 'What do Vietnamese children traditionally receive from elders during Tet holiday?',
        options: ['Lucky money in red envelopes', 'A pumpkin lantern', 'A pine tree', 'Easter eggs'],
        answerIndex: 0,
        hint: 'Lì xì inside red envelopes for blessings.',
        explanation: '"Lucky money in red envelopes" (tiền lì xì trong bao đỏ) is the quintessential Tet tradition.'
      },
      {
        question: 'Complete the dialogue: "Can you pass me the salt, please?" - "_______"',
        options: ['Sure, here you are.', 'No, thank you.', 'You\'re welcome.', 'I agree with you.'],
        answerIndex: 0,
        hint: 'Polite response when handing something to someone.',
        explanation: '"Sure, here you are" is the natural, polite response when giving something requested.'
      },
      {
        question: 'Choose the sentence with correct word order of adverbs of frequency:',
        options: ['Nam is always on time for morning classes.', 'Nam always is on time for morning classes.', 'Nam is on time always for morning classes.', 'Always Nam is on time for morning classes.'],
        answerIndex: 0,
        hint: 'Adverbs of frequency come AFTER the verb "to be" (am/is/are).',
        explanation: 'Adverbs of frequency stand after "be": S + be + adverb of frequency + adj.'
      },
      {
        question: 'Which of the following words has the underlined sound pronounced /ɪ/ (short i)?',
        options: ['Kitchen', 'Nice', 'Light', 'Fine'],
        answerIndex: 0,
        hint: 'Nice, Light, Fine have the diphthong /aɪ/.',
        explanation: '"Kitchen" is pronounced /ˈkɪtʃ.ɪn/ with short /ɪ/, whereas the others have /aɪ/.'
      },
      {
        question: 'Find the preposition: There is a big grandfather clock _______ the wall in the living room.',
        options: ['on', 'in', 'under', 'between'],
        answerIndex: 0,
        hint: 'Things hanging against a flat vertical surface take "on".',
        explanation: 'We say "on the wall" for paintings, clocks, and pictures.'
      },
      {
        question: 'Choose the correct question word: "_______ do you go to the English club?" - "Twice a week."',
        options: ['How often', 'How many', 'How far', 'How much'],
        answerIndex: 0,
        hint: '"Twice a week" denotes frequency.',
        explanation: '"How often" asks about frequency of an activity.'
      },
      {
        question: 'Select the superlative sentence: Sahara is the _______ desert on our planet.',
        options: ['hottest', 'hotter', 'most hot', 'more hot'],
        answerIndex: 0,
        hint: 'Hot is a 1-syllable adjective ending in consonant-vowel-consonant, double the last consonant + est.',
        explanation: 'Superlative of "hot" is "the hottest" with doubled \'t\'.'
      },
      {
        question: 'Complete the phrase: Before Tet, families often _______ their houses with yellow apricot blossoms and peach blossoms.',
        options: ['decorate', 'destroy', 'sell', 'lock'],
        answerIndex: 0,
        hint: 'Trang hoàng nhà cửa đón Tết.',
        explanation: '"Decorate the house" means trang hoàng nhà cửa đẹp đẽ.'
      },
      {
        question: 'Which word contains the prefix "un-" meaning "not"?',
        options: ['Unhappy', 'Under', 'Uncle', 'Unit'],
        answerIndex: 0,
        hint: 'Happy -> Unhappy (not happy).',
        explanation: '"Unhappy" means not happy, where "un-" is a negative prefix.'
      }
    ]
  },

  // 6. GIÁO DỤC CÔNG DÂN 6 - HỌC KỲ 1 (18 QUESTIONS)
  {
    id: 'quiz-g6-s1-civics',
    title: 'Giáo dục công dân 6 - Kiểm tra Giữa học kỳ 1: Đạo đức, Yêu thương & Tôn trọng sự thật',
    titleEn: 'Civic Education 6 - Sem 1: Ethics, Humanity, Diligence & Truth',
    grade: 6,
    semester: 1,
    subject: 'GDCD',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'social',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Truyền thống tốt đẹp của gia đình dòng họ, tình yêu thương con người, đức tính siêng năng kiên trì, lòng trung thực và tôn trọng sự thật.',
    descriptionEn: 'Sem 1 Civics review: Family traditions, compassion, diligence, perseverance, and honesty.',
    questions: [
      {
        question: 'Truyền thống tốt đẹp của gia đình, dòng họ là gì?',
        options: ['Những giá trị văn hóa, đạo đức, nghề nghiệp tốt đẹp được lưu truyền từ thế hệ này sang thế hệ khác', 'Những hủ tục lạc hậu lâu đời không thay đổi', 'Số tài sản đất đai của ông bà để lại', 'Sự phân biệt đối xử giữa các con cháu'],
        answerIndex: 0,
        hint: 'Gồm hiếu học, cần cù, hiếu thảo, nghề truyền thống.',
        explanation: 'Truyền thống là những giá trị vật chất và tinh thần quý báu được hình thành trong lịch sử và truyền qua nhiều thế hệ.'
      },
      {
        question: 'Hành động nào dưới đây thể hiện sự kế thừa và phát huy truyền thống tốt đẹp của gia đình, dòng họ?',
        options: ['Tích cực học tập, rèn luyện đạo đức và giữ gìn bí quyết nghề gốm truyền thống của quê hương', 'Tự ti, xấu hổ vì bố mẹ là người lao động bình dị', 'Bỏ bê việc học hành để vui chơi đua đòi', 'Từ chối thăm viếng tổ tiên ngày lễ Tết'],
        answerIndex: 0,
        hint: 'Trân trọng, tự hào và nỗ lực phát triển những điều tốt đẹp.',
        explanation: 'Học sinh chăm ngoan, trân trọng nghề nghiệp của cha ông thể hiện lòng biết ơn và tiếp nối truyền thống.'
      },
      {
        question: 'Biểu hiện nào sau đây thể hiện rõ nét tình yêu thương con người?',
        options: ['Sẵn sàng chia sẻ tập sách, quyên góp ủng hộ bạn bè vùng bão lũ', 'Thờ ơ, chế giễu khi thấy bạn bị ngã xe', 'Chỉ giúp đỡ người khác khi họ cho tiền thù lao', 'Bao che cho hành vi gian lận thi cử của bạn thân'],
        answerIndex: 0,
        hint: 'Quan tâm, giúp đỡ người hoạn nạn không toan tính vụ lợi.',
        explanation: 'Yêu thương con người là quan tâm, đồng cảm và giúp đỡ mọi người khi gặp hoạn nạn, khó khăn.'
      },
      {
        question: 'Câu tục ngữ nào dưới đây ca ngợi truyền thống yêu thương con người của dân tộc Việt Nam?',
        options: ['Lá lành đùm lá rách', 'Đói ăn vụng, túng làm càn', 'Việc ai người nấy lo', 'Đèn nhà ai nhà nấy rạng'],
        answerIndex: 0,
        hint: 'Tương thân tương ái, đùm bọc người khó khăn.',
        explanation: '"Lá lành đùm lá rách" là bài học đạo đức ngàn đời về lòng nhân ái, tương trợ đồng bào.'
      },
      {
        question: 'Đức tính "Siêng năng" được hiểu là:',
        options: ['Sự cần cù, tự giác, chăm chỉ làm việc một cách thường xuyên và đều đặn', 'Chỉ làm việc chăm chỉ khi có người lớn giám sát', 'Làm việc tùy hứng lúc thích lúc không', 'Lợi dụng công sức của người khác để hoàn thành việc'],
        answerIndex: 0,
        hint: 'Tự giác, đều đặn trong công việc và học tập.',
        explanation: 'Siêng năng là sự cần cù, chăm chỉ, làm việc liên tục và có trách nhiệm.'
      },
      {
        question: 'Đức tính "Kiên trì" có ý nghĩa cốt lõi là:',
        options: ['Quyết tâm theo đuổi mục tiêu đến cùng dù gặp muôn vàn khó khăn, thử thách', 'Không chịu thay đổi khi bản thân làm sai', 'Bắt người khác phải làm theo ý mình', 'Chán nản bỏ cuộc ngay khi gặp bài tập khó'],
        answerIndex: 0,
        hint: 'Vượt qua chông gai, không từ bỏ ước mơ chính đáng.',
        explanation: 'Kiên trì là nhẫn nại, nỗ lực vượt qua trở ngại để đạt được mục tiêu tốt đẹp đã đề ra.'
      },
      {
        question: 'Tấm gương danh nhân nào của Việt Nam vượt qua tật nguyền hai tay để trở thành Nhà giáo Ưu tú viết bằng chân nổi tiếng?',
        options: ['Thầy giáo Nguyễn Ngọc Ký', 'Anh hùng Kim Đồng', 'Anh hùng Võ Thị Sáu', 'Bác sĩ Đặng Thùy Trâm'],
        answerIndex: 0,
        hint: 'Nhà văn, nhà giáo ưu tú kiên trì luyện viết chữ bằng chân.',
        explanation: 'Thầy Nguyễn Ngọc Ký là biểu tượng sáng ngời của tinh thần siêng năng, kiên trì vượt lên số phận.'
      },
      {
        question: 'Tôn trọng sự thật nghĩa là:',
        options: ['Công nhận, ủng hộ và bảo vệ những điều đúng đắn, khách quan; không dối trá hay xuyên tạc', 'Nói những lời tâng bốc người khác để lấy lòng', 'Giữ im lặng khi thấy hành vi gian lận', 'Bịa đặt thông tin chưa kiểm chứng lên mạng xã hội'],
        answerIndex: 0,
        hint: 'Thẳng thắn, trung thực, bảo vệ lẽ phải.',
        explanation: 'Tôn trọng sự thật là đức tính trung thực, dũng cảm lên tiếng bảo vệ chân lý và điều đúng đắn.'
      },
      {
        question: 'Khi vô tình làm vỡ chậu hoa của lớp, hành động nào sau đây thể hiện sự tôn trọng sự thật và có trách nhiệm?',
        options: ['Chủ động nhận lỗi với cô giáo và các bạn, xin phép đền chậu hoa mới', 'Lặng lẽ đổ lỗi cho bạn ngồi bên cạnh', 'Giấu mảnh vỡ vào thùng rác rồi vờ như không biết gì', 'Bỏ chạy về nhà ngay lập tức'],
        answerIndex: 0,
        hint: 'Dũng cảm nhận khuyết điểm của bản thân.',
        explanation: 'Thành khẩn nhận lỗi và khắc phục hậu quả là biểu hiện cao đẹp của người có trách nhiệm và tôn trọng sự thật.'
      },
      {
        question: 'Câu tục ngữ nào nói về đức tính tôn trọng sự thật và tính trung thực?',
        options: ['Thẳng mực tàu đau lòng gỗ', 'Ăn ốc nói mò', 'Mật ngọt chết ruồi', 'Mồm miệng đỡ chân tay'],
        answerIndex: 0,
        hint: 'Nói thẳng, nói thật dù có thể làm mất lòng nhưng đúng đắn.',
        explanation: '"Thẳng mực tàu đau lòng gỗ" ví lời nói thẳng thắn, tôn trọng sự thật như sợi dây mực của người thợ mộc.'
      },
      {
        question: 'Hành vi nào dưới đây đi ngược lại với lòng yêu thương con người?',
        options: ['Bắt nạt, cô lập và xúc phạm danh dự của bạn học', 'Nhường ghế xe buýt cho người già và phụ nữ mang thai', 'Dắt người khiếm thị qua đường an toàn', 'Tham gia hiến máu nhân đạo khi đủ tuổi'],
        answerIndex: 0,
        hint: 'Hành vi bạo lực học đường, làm tổn thương thể xác và tinh thần người khác.',
        explanation: 'Bắt nạt và cô lập bạn bè là hành vi bạo lực học đường, trái ngược hoàn toàn với đạo đức tình thương con người.'
      },
      {
        question: 'Siêng năng, kiên trì mang lại lợi ích gì cho mỗi học sinh trong cuộc sống?',
        options: ['Giúp vượt qua thử thách, nâng cao kiến thức và gặt hái thành công bền vững', 'Giúp kiếm được tiền ngay mà không cần học', 'Làm cho người khác ganh ghét', 'Không mang lại lợi ích gì đặc biệt'],
        answerIndex: 0,
        hint: 'Có công mài sắt có ngày nên kim.',
        explanation: 'Sự kiên trì giúp rèn luyện bản lĩnh, tích lũy tri thức và đạt được những ước mơ lớn.'
      },
      {
        question: 'Câu ca dao: "Công cha như núi Thái Sơn / Nghĩa mẹ như nước trong nguồn chảy ra" nhắc nhở chúng ta về truyền thống gì?',
        options: ['Truyền thống hiếu thảo, biết ơn công sinh thành dưỡng dục của cha mẹ', 'Truyền thống hiếu học', 'Truyền thống đánh giặc cứu nước', 'Truyền thống tôn sư trọng đạo'],
        answerIndex: 0,
        hint: 'Lòng hiếu thảo với cha mẹ là cội nguồn của đạo đức.',
        explanation: 'Bài ca dao bất hủ nhắc nhở đạo làm con phải luôn ghi nhớ và đền đáp công lao trời biển của cha mẹ.'
      },
      {
        question: 'Để rèn luyện tính kiên trì, khi gặp một bài toán khó học sinh nên làm gì?',
        options: ['Đọc kĩ đề bài, ôn lại lý thuyết và kiên nhẫn thử các hướng giải khác nhau', 'Mở sách giải chép ngay đáp án đối phó', 'Bỏ qua không làm bài tập', 'Đóng vở lại đi xem video giải trí'],
        answerIndex: 0,
        hint: 'Suy nghĩ, tìm tòi hướng giải quyết từng bước.',
        explanation: 'Kiên trì tư duy, không nản chí trước bài toán khó giúp phát triển tư duy logic sâu sắc.'
      },
      {
        question: 'Người biết tôn trọng sự thật sẽ nhận được điều gì từ mọi người xung quanh?',
        options: ['Sự tin tưởng, kính trọng và yêu quý của bạn bè, thầy cô', 'Sự nghi ngờ và xa lánh', 'Sự chế giễu của tập thể', 'Không ai muốn kết bạn cùng'],
        answerIndex: 0,
        hint: 'Người trung thực luôn có uy tín cao.',
        explanation: 'Tôn trọng sự thật giúp xây dựng uy tín cá nhân và mối quan hệ bền chặt, tin cậy trong xã hội.'
      },
      {
        question: 'Hành vi nào dưới đây là biểu hiện của sự dối trá, không tôn trọng sự thật?',
        options: ['Quay cóp bài kiểm tra trong giờ thi', 'Thẳng thắn góp ý khi bạn làm sai', 'Báo với cô giáo việc nhặt được của rơi để trả lại', 'Nói đúng sự thật vụ va chạm xe'],
        answerIndex: 0,
        hint: 'Gian lận để đạt điểm số không đúng với năng lực thực.',
        explanation: 'Quay cóp trong thi cử là hành vi gian lận, thiếu trung thực với bản thân và thầy cô.'
      },
      {
        question: 'Khi thấy thông tin sai lệch, thất thiệt lan truyền trên mạng xã hội, một học sinh có trách nhiệm nên:',
        options: ['Không chia sẻ, bình tĩnh xác minh từ các nguồn tin chính thống và báo cho người lớn', 'Lập tức chia sẻ rộng rãi lên trang cá nhân để câu like', 'Bình luận kích động chửi bới thêm', 'Tag tên tất cả bạn bè vào bàn tán'],
        answerIndex: 0,
        hint: 'Kiểm chứng nguồn tin, ngăn chặn tin giả (fake news).',
        explanation: 'Không tiếp tay lan truyền tin giả là trách nhiệm công dân trên không gian mạng số.'
      },
      {
        question: 'Câu tục ngữ nào khuyên nhủ con người phải luôn kiên định, giữ vững ý chí trước khó khăn?',
        options: ['Chớ thấy sóng cả mà ngã tay chèo', 'Gió chiều nào theo chiều ấy', 'Nước đến chân mới nhảy', 'Đẽo cày giữa đường'],
        answerIndex: 0,
        hint: 'Đừng vì sóng lớn hiểm nguy mà buông xuôi mái chèo.',
        explanation: '"Chớ thấy sóng cả mà ngã tay chèo" khuyên ta phải dũng cảm, kiên trì vượt qua bão tố cuộc đời.'
      }
    ]
  },

  // 7. TIN HỌC 6 - HỌC KỲ 1 (18 QUESTIONS)
  {
    id: 'quiz-g6-s1-informatics',
    title: 'Tin học 6 - Kiểm tra Giữa học kỳ 1: Thông tin, Dữ liệu, Mạng máy tính & Sơ đồ tư duy',
    titleEn: 'Informatics 6 - Sem 1: Data, Information, Internet & Mindmaps',
    grade: 6,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Khái niệm thông tin và dữ liệu, các đơn vị đo dung lượng thông tin (Bit, Byte, KB, MB, GB), mạng máy tính, Internet, tìm kiếm thông tin và sơ đồ tư duy.',
    descriptionEn: 'Sem 1 Informatics: Bits/Bytes, computer networks, internet search, mind mapping.',
    questions: [
      {
        question: 'Thông tin trong tin học được hiểu là gì?',
        options: ['Sự hiểu biết của con người về thế giới xung quanh sau khi tiếp nhận và xử lý dữ liệu', 'Các dãy số vô nghĩa không có giá trị', 'Chỉ là những bức ảnh chụp kỹ thuật số', 'Màn hình máy vi tính'],
        answerIndex: 0,
        hint: 'Thông tin mang lại hiểu biết và giúp đưa ra quyết định.',
        explanation: 'Thông tin là những hiểu biết của con người thu nhận được qua các giác quan hoặc qua xử lý dữ liệu.'
      },
      {
        question: 'Dữ liệu (Data) là gì?',
        options: ['Các số liệu, văn bản, hình ảnh, âm thanh được lưu trữ trong máy tính', 'Ý nghĩ bên trong não bộ con người', 'Bàn phím và chuột máy tính', 'Bộ nguồn điện của máy tính'],
        answerIndex: 0,
        hint: 'Dữ liệu là dạng biểu diễn của thông tin trong máy tính.',
        explanation: 'Dữ liệu là hình thức thể hiện của thông tin (chữ viết, con số, hình ảnh, âm thanh) được máy tính lưu trữ và xử lý.'
      },
      {
        question: 'Đơn vị đo lượng thông tin nhỏ nhất trong máy tính chỉ nhận một trong hai giá trị 0 hoặc 1 là:',
        options: ['Bit (viết tắt của Binary digit)', 'Byte', 'Kilobyte', 'Héc (Hz)'],
        answerIndex: 0,
        hint: 'Đơn vị nhị phân cơ bản nhất.',
        explanation: 'Bit là đơn vị nhỏ nhất biểu diễn thông tin trong máy tính, chỉ nhận giá trị 0 hoặc 1.'
      },
      {
        question: '1 Byte (B) bằng bao nhiêu bit?',
        options: ['8 bits', '2 bits', '10 bits', '1024 bits'],
        answerIndex: 0,
        hint: 'Một byte gồm dãy 8 chữ số nhị phân 0 và 1.',
        explanation: 'Theo quy chuẩn kiến trúc máy tính: 1 Byte = 8 bits.'
      },
      {
        question: '1 Gigabyte (GB) tương đương với bao nhiêu Megabyte (MB)?',
        options: ['1024 MB', '1000 MB', '100 MB', '1048576 MB'],
        answerIndex: 0,
        hint: 'Hệ số lũy thừa của 2: 2¹⁰ = 1024.',
        explanation: 'Trong tin học: 1 GB = 1024 MB; 1 MB = 1024 KB; 1 KB = 1024 Bytes.'
      },
      {
        question: 'Mạng máy tính là gì?',
        options: ['Hệ thống gồm hai hay nhiều máy tính kết nối với nhau để truyền thông tin và chia sẻ tài nguyên', 'Tập hợp các màn hình máy tính đặt cạnh nhau', 'Dây điện cắm nguồn máy vi tính', 'Một phần mềm trò chơi điện tử'],
        answerIndex: 0,
        hint: 'Kết nối các máy tính để gửi nhận dữ liệu và dùng chung máy in, ổ cứng.',
        explanation: 'Mạng máy tính kết nối các thiết bị để chia sẻ dữ liệu, phần mềm và thiết bị ngoại vi.'
      },
      {
        question: 'Thiết bị nào dưới đây đóng vai trò kết nối các máy tính trong mạng nội bộ và chuyển tiếp dữ liệu đến đúng máy nhận?',
        options: ['Bộ chuyển mạch (Switch) hoặc Router', 'Bàn phím cơ', 'Chuột quang', 'Loa vi tính'],
        answerIndex: 0,
        hint: 'Thiết bị mạng có nhiều cổng cắm cáp mạng RJ45.',
        explanation: 'Switch và Router là thiết bị trung tâm điều phối và định tuyến các gói tin trong mạng.'
      },
      {
        question: 'Mạng không dây (Wi-Fi) truyền tải dữ liệu giữa các thiết bị bằng phương tiện gì?',
        options: ['Sóng điện từ (sóng vô tuyến)', 'Dây cáp đồng', 'Dây cáp quang', 'Dòng nước chảy'],
        answerIndex: 0,
        hint: 'Không cần dây dẫn vật lý nối trực tiếp.',
        explanation: 'Mạng không dây truyền tín hiệu thông qua sóng vô tuyến điện từ trong không gian.'
      },
      {
        question: 'Mạng Internet là gì?',
        options: ['Mạng máy tính toàn cầu kết nối hàng triệu mạng máy tính trên khắp thế giới', 'Mạng nội bộ trong một lớp học', 'Một trang web mạng xã hội', 'Phần mềm diệt virus máy tính'],
        answerIndex: 0,
        hint: 'Mạng lưới thông tin toàn cầu (Inter-network).',
        explanation: 'Internet là mạng của các mạng máy tính kết nối trên quy mô toàn cầu.'
      },
      {
        question: 'Chương trình nào dưới đây là Trình duyệt Web (Web Browser) phổ biến?',
        options: ['Google Chrome (hoặc Cốc Cốc, Microsoft Edge, Firefox)', 'Microsoft Word', 'Scratch', 'Windows Calculator'],
        answerIndex: 0,
        hint: 'Dùng để mở các trang web www.',
        explanation: 'Google Chrome, Microsoft Edge, Firefox, Cốc Cốc là các trình duyệt web phổ biến.'
      },
      {
        question: 'Để tìm kiếm thông tin về "các danh lam thắng cảnh Việt Nam" trên Google, cách đặt từ khóa nào cho kết quả chính xác nhất?',
        options: ['Đặt cụm từ chính trong dấu ngoặc kép: "danh lam thắng cảnh Việt Nam"', 'Gõ nguyên một bức thư dài', 'Chỉ gõ chữ "Việt Nam"', 'Gõ một dấu chấm hỏi'],
        answerIndex: 0,
        hint: 'Dấu ngoặc kép buộc công cụ tìm kiếm tìm chính xác cụm từ nguyên văn.',
        explanation: 'Đặt từ khóa trong cặp dấu ngoặc kép "..." giúp thu hẹp phạm vi tìm kiếm chính xác cụm từ đó.'
      },
      {
        question: 'Sơ đồ tư duy (Mindmap) là phương pháp gì?',
        options: ['Biểu diễn thông tin trực quan bằng từ khóa, hình ảnh và các nhánh liên kết rẽ ra từ chủ đề trung tâm', 'Viết kín một trang giấy bằng văn bản thuần túy', 'Vẽ biểu đồ hình cột toán học', 'Chụp ảnh màn hình máy tính'],
        answerIndex: 0,
        hint: 'Do Tony Buzan phát triển, giúp kích thích cả hai bán cầu não.',
        explanation: 'Sơ đồ tư duy tổ chức ý tưởng xoay quanh chủ đề chính với các nhánh cấp 1, cấp 2 và màu sắc trực quan.'
      },
      {
        question: 'Yếu tố nào dưới đây là phần quan trọng nhất ở vị trí trung tâm của sơ đồ tư duy?',
        options: ['Chủ đề chính (hoặc hình ảnh trung tâm biểu đạt ý tưởng chính)', 'Tên tác giả vẽ tranh', 'Khung viền trang giấy', 'Ngày tháng năm'],
        answerIndex: 0,
        hint: 'Nơi xuất phát của tất cả các nhánh ý tưởng.',
        explanation: 'Trung tâm sơ đồ tư duy là hình ảnh hoặc từ khóa thể hiện chủ đề cốt lõi cần triển khai.'
      },
      {
        question: 'Ưu điểm lớn nhất của việc sử dụng phần mềm vẽ sơ đồ tư duy trên máy tính so với vẽ tay trên giấy là gì?',
        options: ['Dễ dàng chỉnh sửa, chèn hình ảnh, di chuyển các nhánh và lưu trữ chia sẻ không giới hạn', 'Không cần dùng chuột hay bàn phím', 'Không tốn bộ nhớ máy tính', 'Không bao giờ bị lỗi phần mềm'],
        answerIndex: 0,
        hint: 'Khả năng chỉnh sửa linh hoạt và chia sẻ số hóa.',
        explanation: 'Phần mềm cho phép xóa sửa, thay đổi cấu trúc nhánh, gắn link tài liệu và chia sẻ tức thì.'
      },
      {
        question: 'Mật khẩu nào dưới đây được đánh giá là MẬT KHẨU MẠNH và an toàn cho tài khoản trực tuyến?',
        options: ['Hk6@Le@rn2026! (kết hợp chữ hoa, chữ thường, chữ số và kí tự đặc biệt)', '123456', 'password', 'nguyenvana'],
        answerIndex: 0,
        hint: 'Tối thiểu 8 ký tự, có đủ chữ hoa, chữ thường, số và ký tự đặc biệt.',
        explanation: 'Mật khẩu mạnh cần tối thiểu 8-12 ký tự, pha trộn chữ cái viết hoa, viết thường, chữ số và ký tự đặc biệt.'
      },
      {
        question: 'Hành vi nào dưới đây giúp bảo vệ thông tin cá nhân và an toàn trên Internet?',
        options: ['Không chia sẻ mật khẩu tài khoản và thông tin nhạy cảm cho người lạ trên mạng', 'Bấm vào tất cả các liên kết lạ trúng thưởng điện thoại', 'Đăng tải số căn cước công dân và mật khẩu lên mạng xã hội', 'Sử dụng chung một mật khẩu đơn giản cho mọi tài khoản'],
        answerIndex: 0,
        hint: 'Giữ bí mật thông tin tài khoản cá nhân.',
        explanation: 'Bảo mật mật khẩu và thận trọng trước liên kết lạ là nguyên tắc vàng phòng tránh lừa đảo mạng.'
      },
      {
        question: 'Thư điện tử (Email) mang lại lợi ích nổi bật nào so với thư gửi qua bưu điện truyền thống?',
        options: ['Tốc độ truyền gửi tức thì trong vài giây và có thể gửi kèm tệp đa phương tiện dung lượng lớn', 'Phải mất từ 3 đến 5 ngày mới đến nơi', 'Chỉ gửi được vào ban ngày', 'Bắt buộc người nhận phải ở gần bưu điện'],
        answerIndex: 0,
        hint: 'Nhanh chóng, tiết kiệm chi phí và gửi kèm tài liệu số.',
        explanation: 'Email gửi nhận gần như tức thời khắp toàn cầu và đính kèm được tài liệu hình ảnh, video.'
      },
      {
        question: 'Thiết bị nào sau đây là thiết bị VÀO (Input device) của hệ thống máy tính?',
        options: ['Bàn phím (Keyboard) và Chuột (Mouse)', 'Màn hình (Monitor)', 'Máy in (Printer)', 'Tai nghe (Headphone)'],
        answerIndex: 0,
        hint: 'Dùng để nhập dữ liệu từ người dùng vào máy tính.',
        explanation: 'Bàn phím và chuột là thiết bị nhập liệu; màn hình, máy in, loa là thiết bị xuất dữ liệu (Output).'
      }
    ]
  },

  // 8. CÔNG NGHỆ 6 - HỌC KỲ 1 (18 QUESTIONS)
  {
    id: 'quiz-g6-s1-technology',
    title: 'Công nghệ 6 - Kiểm tra Giữa học kỳ 1: Nhà ở, Ngôi nhà thông minh & Bảo quản thực phẩm',
    titleEn: 'Technology 6 - Sem 1: Smart Home & Food Preservation',
    grade: 6,
    semester: 1,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'tech',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Vai trò của nhà ở, các kiểu nhà đặc trưng ở Việt Nam, hệ thống điều khiển ngôi nhà thông minh Smart Home, an toàn thực phẩm và các phương pháp bảo quản chế biến món ăn.',
    descriptionEn: 'Sem 1 Technology: Architecture, smart home systems, nutrition and food safety.',
    questions: [
      {
        question: 'Vai trò quan trọng hàng đầu của nhà ở đối với đời sống con người là gì?',
        options: ['Bảo vệ con người khỏi tác động xấu của thời tiết thiên nhiên và là nơi sinh hoạt, nghỉ ngơi, gắn kết gia đình', 'Chỉ dùng để chứa đồ đạc', 'Chỉ để thể hiện sự giàu có với hàng xóm', 'Nơi buôn bán kinh doanh thuần túy'],
        answerIndex: 0,
        hint: 'Che mưa, che nắng, gió bão và mang lại không gian ấm cúng.',
        explanation: 'Nhà ở là nơi trú ngụ an toàn, bảo vệ sức khỏe con người trước thời tiết và là tổ ấm sum họp gia đình.'
      },
      {
        question: 'Kiểu nhà nào dưới đây là kiến trúc nhà ở truyền thống đặc trưng của đồng bào các dân tộc thiểu số vùng núi Việt Nam?',
        options: ['Nhà sàn', 'Nhà chung cư cao tầng', 'Nhà biệt thự phố', 'Nhà nổi trên mặt nước'],
        answerIndex: 0,
        hint: 'Nhà dựng trên các cột gỗ cao khỏi mặt đất để tránh ẩm ướt và thú dữ.',
        explanation: 'Nhà sàn được thiết kế sàn nhà cao hơn mặt đất, phù hợp với địa hình dốc núi và chống thú dữ, côn trùng.'
      },
      {
        question: 'Kiểu nhà nổi (nhà bè) thường phổ biến ở vùng địa lí nào của nước ta?',
        options: ['Vùng đồng bằng sông Cửu Long và các làng chài ven sông biển', 'Vùng cao nguyên đá Hà Giang', 'Vùng trung du Bắc Bộ', 'Vùng đỉnh núi Hoàng Liên Sơn'],
        answerIndex: 0,
        hint: 'Vùng sông ngòi chằng chịt, gắn liền với văn hóa chợ nổi.',
        explanation: 'Nhà nổi được dựng trên bè nổi trên mặt nước, rất phổ biến ở vùng sông nước Tây Nam Bộ.'
      },
      {
        question: 'Hệ thống Smart Home (Ngôi nhà thông minh) có đặc điểm nổi bật nào?',
        options: ['Các thiết bị điện trong nhà được tự động hóa và có thể điều khiển từ xa qua điện thoại hoặc giọng nói', 'Phải làm bằng vàng bạc nguyên khối', 'Không cần dùng bất kì nguồn điện nào', 'Tất cả các việc phải làm bằng tay'],
        answerIndex: 0,
        hint: 'Ứng dụng công nghệ cảm biến và kết nối IoT.',
        explanation: 'Smart Home tích hợp hệ thống cảm biến tự động bật tắt đèn, camera giám sát và điều khiển qua smartphone.'
      },
      {
        question: 'Biện pháp nào dưới đây giúp tiết kiệm năng lượng điện trong gia đình một cách hiệu quả?',
        options: ['Tận dụng tối đa ánh sáng mặt trời tự nhiên và tắt các thiết bị điện khi không sử dụng', 'Bật máy điều hòa cả ngày lẫn đêm ở nhiệt độ 16°C kể cả khi vắng nhà', 'Bật tất cả các đèn trong nhà suốt 24 giờ', 'Để cửa tủ lạnh mở toang liên tục'],
        answerIndex: 0,
        hint: 'Mở cửa sổ đón gió và ánh sáng ban ngày, tắt đèn khi ra khỏi phòng.',
        explanation: 'Tận dụng thông gió tự nhiên và tắt thiết bị khi không có nhu cầu sử dụng giúp giảm tiêu thụ điện năng.'
      },
      {
        question: 'Bốn nhóm chất dinh dưỡng cần thiết cho sự phát triển toàn diện của cơ thể con người gồm:',
        options: ['Chất bột đường (carbohydrate), chất đạm (protein), chất béo (lipid), vitamin và khoáng chất', 'Chất đường, chất cay, chất đắng, chất mặn', 'Dầu ăn, mỡ heo, đường kính, muối hột', 'Thịt bò, thịt heo, thịt gà, thịt cá'],
        answerIndex: 0,
        hint: 'Bao gồm nguồn cung cấp năng lượng, xây dựng tế bào và tăng đề kháng.',
        explanation: '4 nhóm dưỡng chất thiết yếu theo khoa học dinh dưỡng: Glucid (đường bột), Protid (đạm), Lipid (béo), Vitamin & Khoáng.'
      },
      {
        question: 'Thực phẩm nào dưới đây là nguồn cung cấp dồi dào chất bột đường (Carbohydrate)?',
        options: ['Gạo, ngô, khoai, sắn, bánh mì', 'Thịt bò nạc', 'Mỡ lợn', 'Rau muống'],
        answerIndex: 0,
        hint: 'Lương thực chính trong bữa ăn của người Việt Nam.',
        explanation: 'Gạo, khoai, ngô giàu tinh bột, cung cấp nguồn năng lượng chính cho hoạt động sống hàng ngày.'
      },
      {
        question: 'Chất đạm (Protein) có vai trò cốt lõi nào đối với cơ thể trẻ em đang tuổi lớn?',
        options: ['Xây dựng tế bào mới, giúp cơ thể phát triển chiều cao, cân nặng và tăng cường sức đề kháng', 'Chỉ làm cho cơ thể béo phì', 'Gây sâu răng', 'Không có tác dụng dinh dưỡng'],
        answerIndex: 0,
        hint: 'Nguyên liệu cấu tạo nên cơ bắp, kháng thể và các enzym.',
        explanation: 'Chất đạm là thành phần chính cấu tạo nên tế bào, cơ bắp và giúp trẻ em phát triển tầm vóc.'
      },
      {
        question: 'Phương pháp bảo quản thực phẩm bằng nhiệt độ thấp (bảo quản lạnh ở ngăn mát tủ lạnh 0°C đến 5°C) có tác dụng gì?',
        options: ['Làm chậm tốc độ phát triển và hoạt động của vi sinh vật gây ôi thiu', 'Tiêu diệt hoàn toàn 100% tất cả vi khuẩn ngay lập tức', 'Làm cho thực phẩm biến thành chất độc', 'Làm chín thức ăn'],
        answerIndex: 0,
        hint: 'Nhiệt độ thấp ức chế vi khuẩn sinh sôi.',
        explanation: 'Bảo quản lạnh làm chậm quá trình trao đổi chất của vi sinh vật và enzyme, giữ thực phẩm tươi lâu hơn.'
      },
      {
        question: 'Phương pháp chế biến món ăn nào dưới đây có sử dụng nhiệt và làm chín thức ăn trong môi trường nước sôi?',
        options: ['Luộc (hoặc Nấu canh)', 'Nướng trên than hoa', 'Trộn dầu giấm', 'Muối chua'],
        answerIndex: 0,
        hint: 'Làm chín thực phẩm trong nồi nước sôi.',
        explanation: 'Luộc và nấu canh là phương pháp làm chín thực phẩm trong môi trường nước đun sôi.'
      },
      {
        question: 'Hành động nào dưới đây vi phạm nghiêm trọng an toàn vệ sinh thực phẩm khi nấu ăn?',
        options: ['Dùng chung dao và thớt cắt thịt sống để thái thịt chín đã luộc mà không rửa sạch', 'Rửa tay sạch bằng xà phòng trước khi chế biến thức ăn', 'Rửa rau củ nhiều lần dưới vòi nước sạch', 'Nấu chín kĩ thức ăn trước khi ăn'],
        answerIndex: 0,
        hint: 'Gây lây nhiễm chéo vi khuẩn từ thực phẩm sống sang thực phẩm chín.',
        explanation: 'Dùng chung thớt thái thịt sống cho thịt chín gây nhiễm chéo vi khuẩn nguy hiểm (như Salmonella, E. coli).'
      },
      {
        question: 'Vì sao trong một ngôi nhà ở cần phân chia thành các khu vực chức năng riêng biệt (phòng ngủ, phòng bếp, phòng khách, khu vệ sinh)?',
        options: ['Để đảm bảo sự tiện nghi, hợp vệ sinh và bảo vệ sự riêng tư cho sinh hoạt gia đình', 'Chỉ để trang trí cho đẹp', 'Không có lý do gì', 'Để tốn nhiều diện tích đất'],
        answerIndex: 0,
        hint: 'Ngăn cách mùi khói bếp, đảm bảo vệ sinh và yên tĩnh.',
        explanation: 'Phân chia không gian chức năng giúp sinh hoạt tiện lợi, ngăn mùi bếp và giữ gìn vệ sinh sạch sẽ.'
      },
      {
        question: 'Chế độ ăn uống hợp lý, lành mạnh cần đảm bảo nguyên tắc nào?',
        options: ['Đủ 4 nhóm chất dinh dưỡng với tỉ lệ cân đối, ăn nhiều rau xanh và uống đủ nước mỗi ngày', 'Chỉ ăn độc nhất một món thịt chiên rán', 'Nhịn ăn sáng và ăn thật nhiều vào ban đêm', 'Uống nhiều nước ngọt có gas thay cho nước lọc'],
        answerIndex: 0,
        hint: 'Cân đối các nhóm dưỡng chất, ăn đa dạng thực phẩm.',
        explanation: 'Bữa ăn khoa học cần cân đối giữa bột đường, đạm, chất béo, nhiều vitamin rau quả và uống đủ 1.5 - 2 lít nước.'
      },
      {
        question: 'Vật liệu nào sau đây là vật liệu xây dựng nhân tạo phổ biến nhất để xây tường nhà kiên cố?',
        options: ['Gạch nung và xi măng', 'Tre nứa', 'Lá cọ khô', 'Đá tuyết'],
        answerIndex: 0,
        hint: 'Gạch, vôi vữa xi măng tạo nên kết cấu bền vững.',
        explanation: 'Gạch, cát, đá và xi măng là vật liệu xây dựng nhân tạo cơ bản tạo nên kết cấu nhà ở kiên cố hiện đại.'
      },
      {
        question: 'Khi sử dụng các thiết bị điện trong nhà ở thông minh (như bình nóng lạnh, bàn là), nguyên tắc an toàn hàng đầu là:',
        options: ['Ngắt nguồn điện khi không sử dụng và không chạm tay ướt vào phích cắm', 'Cắm điện để quên suốt nhiều ngày', 'Dùng dây điện bị hở lõi đồng để cắm trực tiếp vào ổ', 'Vừa tắm vừa bật bình nóng lạnh không có rơ-le chống giật'],
        answerIndex: 0,
        hint: 'Tránh nguy cơ chập cháy điện và điện giật.',
        explanation: 'Không chạm tay ướt vào thiết bị điện và ngắt nguồn khi không dùng là quy tắc an toàn cơ bản nhất.'
      },
      {
        question: 'Loại thực phẩm nào dưới đây rất giàu Vitamin C giúp tăng cường hệ miễn dịch cho cơ thể?',
        options: ['Cam, bưởi, ổi, chanh, kiwi', 'Mỡ động vật', 'Gạo trắng', 'Bánh mì khô'],
        answerIndex: 0,
        hint: 'Các loại trái cây có múi vị chua ngọt.',
        explanation: 'Cam, chanh, bưởi, ổi chứa hàm lượng Vitamin C rất cao giúp tăng sức đề kháng và chống oxy hóa.'
      },
      {
        question: 'Phương pháp bảo quản thực phẩm truyền thống nào sử dụng nồng độ muối cao để ngăn vi khuẩn phát triển?',
        options: ['Ướp muối (hoặc làm mắm)', 'Ướp đá lạnh', 'Hút chân không', 'Sấy thăng hoa'],
        answerIndex: 0,
        hint: 'Ví dụ: Cá muối, mắm cá, cà muối.',
        explanation: 'Nồng độ muối cao làm mất nước trong tế bào vi sinh vật, ức chế vi khuẩn làm hỏng thực phẩm.'
      },
      {
        question: 'Mục đích chính của việc xây dựng "Ngôi nhà xanh" (Green Architecture) tiết kiệm năng lượng là gì?',
        options: ['Giảm thiểu khí thải, tiết kiệm tài nguyên thiên nhiên và bảo vệ môi trường sống', 'Để phủ sơn màu xanh lá cây khắp nhà', 'Để không cần làm mái che', 'Để nuôi thật nhiều động vật hoang dã'],
        answerIndex: 0,
        hint: 'Sử dụng năng lượng mặt trời, gió, vật liệu thân thiện môi trường.',
        explanation: 'Kiến trúc xanh hướng đến tận dụng năng lượng tái tạo, giảm tiêu hao điện năng và sống hòa hợp với thiên nhiên.'
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2 (HỌC KỲ 2) - ALL 8 COMPULSORY SUBJECTS (MIN 18 QUESTIONS EACH)
  // =========================================================================

  // 9. TOÁN HỌC 6 - HỌC KỲ 2 (18 QUESTIONS)
  {
    id: 'quiz-g6-s2-math',
    title: 'Toán 6 - Kiểm tra Giữa học kỳ 2: Phân số, Số thập phân & Hình học cơ bản (Điểm, Đoạn thẳng, Góc)',
    titleEn: 'Math 6 - Sem 2: Fractions, Decimals, Ratios & Basic Geometry',
    grade: 6,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Chương trình chuẩn HK2 Toán 6: Phân số và các phép tính, hỗn số, số thập phân, tỉ số phần trăm, các hình hình học cơ bản (điểm, đường thẳng, tia, đoạn thẳng, góc), dữ liệu và xác suất.',
    descriptionEn: 'Sem 2 Math review: Fractions, decimals, percentages, geometry (points, lines, rays, angles) and probability.',
    questions: [
      {
        question: 'Hai phân số a/b và c/d (với b, d ≠ 0) được gọi là bằng nhau khi nào?',
        options: ['a × d = b × c', 'a × b = c × d', 'a + d = b + c', 'a - d = b - c'],
        answerIndex: 0,
        hint: 'Tích chéo của tử phân số này với mẫu phân số kia bằng nhau.',
        explanation: 'Định nghĩa: a/b = c/d ⇔ a.d = b.c.'
      },
      {
        question: 'Rút gọn phân số (-24)/36 về dạng phân số tối giản được kết quả là:',
        options: ['-2/3', '2/3', '-3/4', '-4/6'],
        answerIndex: 0,
        hint: 'Chia cả tử và mẫu cho ƯCLN(24, 36) = 12.',
        explanation: '(-24 : 12) / (36 : 12) = -2/3.'
      },
      {
        question: 'Tính giá trị của biểu thức: (3/5) + (-7/5) = ... ?',
        options: ['-4/5', '4/5', '-10/5', '2/5'],
        answerIndex: 0,
        hint: 'Cộng hai phân số cùng mẫu số: lấy tử số cộng tử số, giữ nguyên mẫu số.',
        explanation: '(3 + (-7)) / 5 = -4/5.'
      },
      {
        question: 'Tính tích của hai phân số: (-3/4) × (8/9) = ... ?',
        options: ['-2/3', '2/3', '-1/2', '6/13'],
        answerIndex: 0,
        hint: 'Rút gọn trước khi nhân: 8 với 4 còn 2; -3 với 9 còn -1/3.',
        explanation: '(-3 × 8) / (4 × 9) = -24 / 36 = -2/3.'
      },
      {
        question: 'Phân số nghịch đảo của phân số -5/7 là:',
        options: ['-7/5', '7/5', '5/7', '7/-5'],
        answerIndex: 0,
        hint: 'Phân số nghịch đảo của a/b là b/a sao cho (a/b) × (b/a) = 1.',
        explanation: 'Nghịch đảo của -5/7 là -7/5 vì (-5/7) × (-7/5) = 1.'
      },
      {
        question: 'Viết hỗn số 3 và 2/5 dưới dạng phân số ta được:',
        options: ['17/5', '11/5', '15/5', '6/5'],
        answerIndex: 0,
        hint: 'Tử số = (phần nguyên × mẫu số) + tử số cũ: (3 × 5) + 2.',
        explanation: '(3 × 5 + 2) / 5 = 17/5.'
      },
      {
        question: 'Chuyển phân số 7/100 sang số thập phân ta được:',
        options: ['0,07', '0,7', '0,007', '7,0'],
        answerIndex: 0,
        hint: 'Chia cho 100 nghĩa là dịch dấu phẩy sang trái 2 chữ số.',
        explanation: '7/100 = 0,07.'
      },
      {
        question: 'Tính giá trị của phép tính số thập phân: (-4,5) + 2,3 = ... ?',
        options: ['-2,2', '2,2', '-6,8', '6,8'],
        answerIndex: 0,
        hint: 'Lấy số lớn trừ số nhỏ và mang dấu của số có giá trị tuyệt đối lớn hơn.',
        explanation: '-(4,5 - 2,3) = -2,2.'
      },
      {
        question: 'Làm tròn số thập phân 18,376 đến hàng phần mười (chữ số thập phân thứ nhất) được kết quả là:',
        options: ['18,4', '18,3', '18,38', '18,0'],
        answerIndex: 0,
        hint: 'Chữ số ngay sau hàng phần mười là 7 (≥ 5) nên cộng thêm 1 đơn vị.',
        explanation: 'Chữ số hàng phần trăm là 7 ≥ 5 nên làm tròn lên thành 18,4.'
      },
      {
        question: 'Tìm 30% của số 150:',
        options: ['45', '50', '30', '15'],
        answerIndex: 0,
        hint: '150 × (30 / 100) = 150 × 0,3.',
        explanation: '150 × 30% = 150 × 0,3 = 45.'
      },
      {
        question: 'Biết 25% của một đoạn dây dài 12 mét. Chiều dài toàn bộ sợi dây đó là:',
        options: ['48 mét', '36 mét', '24 mét', '30 mét'],
        answerIndex: 0,
        hint: 'Chiều dài sợi dây = 12 : 25% = 12 : 0,25.',
        explanation: '12 : 0,25 = 48 mét.'
      },
      {
        question: 'Qua hai điểm phân biệt A và B trên một mặt phẳng, ta vẽ được:',
        options: ['Một và chỉ một đường thẳng duy nhất', 'Vô số đường thẳng', 'Hai đường thẳng song song', 'Không vẽ được đường thẳng nào'],
        answerIndex: 0,
        hint: 'Tiên đề cơ bản về đường thẳng đi qua 2 điểm.',
        explanation: 'Có một và chỉ một đường thẳng đi qua hai điểm phân biệt cho trước.'
      },
      {
        question: 'Cho điểm M nằm giữa hai điểm A và B. Nếu AM = 3 cm và MB = 4 cm thì độ dài đoạn thẳng AB là:',
        options: ['7 cm', '1 cm', '12 cm', '3,5 cm'],
        answerIndex: 0,
        hint: 'Khi M nằm giữa A và B thì AB = AM + MB.',
        explanation: 'AB = 3 + 4 = 7 cm.'
      },
      {
        question: 'Điểm I được gọi là trung điểm của đoạn thẳng AB nếu thỏa mãn điều kiện nào?',
        options: ['I nằm giữa A, B và IA = IB = AB / 2', 'I nằm ngoài đoạn thẳng AB', 'IA + IB > AB', 'I là điểm bất kì nằm giữa A và B'],
        answerIndex: 0,
        hint: 'Nằm giữa và cách đều hai đầu mút đoạn thẳng.',
        explanation: 'Trung điểm của đoạn thẳng là điểm nằm giữa hai đầu mút và cách đều hai đầu mút đó.'
      },
      {
        question: 'Góc có số đo lớn hơn 90° và nhỏ hơn 180° được gọi là:',
        options: ['Góc tù', 'Góc nhọn', 'Góc vuông', 'Góc bẹt'],
        answerIndex: 0,
        hint: 'Góc nhọn (< 90°), góc vuông (= 90°), góc tù (90° < góc < 180°), góc bẹt (= 180°).',
        explanation: 'Định nghĩa: Góc tù là góc có số đo lớn hơn 90° và nhỏ hơn 180°.'
      },
      {
        question: 'Góc bẹt có số đo bằng bao nhiêu độ?',
        options: ['180°', '90°', '360°', '120°'],
        answerIndex: 0,
        hint: 'Hai tia đối nhau tạo thành góc bẹt.',
        explanation: 'Góc bẹt là góc tạo bởi hai tia đối nhau và có số đo bằng đúng 180°.'
      },
      {
        question: 'Tung một đồng xu cân đối và đồng chất 20 lần, thấy có 12 lần xuất hiện mặt ngửa. Xác suất thực nghiệm của sự kiện "Mặt ngửa xuất hiện" là:',
        options: ['12/20 = 3/5 (tức 60%)', '8/20 = 2/5 (tức 40%)', '1/2 (tức 50%)', '12/8'],
        answerIndex: 0,
        hint: 'Xác suất thực nghiệm = Số lần xảy ra sự kiện / Tổng số lần thực nghiệm.',
        explanation: 'Xác suất thực nghiệm = 12 / 20 = 3/5 = 60%.'
      },
      {
        question: 'Khi đo một góc bằng thước đo góc (thước đo độ), tâm của thước phải đặt trùng với vị trí nào?',
        options: ['Đỉnh của góc', 'Một điểm bất kì trên cạnh của góc', 'Trung điểm cạnh góc', 'Bên ngoài góc'],
        answerIndex: 0,
        hint: 'Tâm hình bán nguyệt của thước đo góc đặt trùng đỉnh của góc.',
        explanation: 'Đặt tâm thước đo độ trùng đỉnh góc, một cạnh của góc đi qua vạch số 0 của thước.'
      }
    ]
  },

  // 10. NGỮ VĂN 6 - HỌC KỲ 2 (18 QUESTIONS)
  {
    id: 'quiz-g6-s2-literature',
    title: 'Ngữ văn 6 - Kiểm tra Giữa học kỳ 2: Thế giới cổ tích, Khác biệt gần gũi & Trái Đất ngôi nhà chung',
    titleEn: 'Literature 6 - Sem 2: Fairy Tales, Essays, Earth Texts & Language Skills',
    grade: 6,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Chương trình chuẩn HK2 Ngữ văn 6: Truyện cổ tích Thạch Sanh, Cây khế; văn bản nghị luận Hai loại khác biệt, Xem người ta kìa; văn bản thông tin Trái Đất - cái nôi của sự sống; thành ngữ, dấu chấm phẩy.',
    descriptionEn: 'Sem 2 Literature: Vietnamese fairy tales, argumentative essays, environmental expository texts.',
    questions: [
      {
        question: 'Trong truyện cổ tích "Thạch Sanh", niêu cơm thần kì của chàng Thạch Sanh có chi tiết đặc biệt nào?',
        options: ['Ăn mãi không bao giờ hết, khiến quân sĩ 18 nước chư hầu thán phục quy hàng', 'Nấu được các món ăn vàng bạc châu báu', 'Biến người ăn vào trở nên bất tử', 'Tự động bay lên trời'],
        answerIndex: 0,
        hint: 'Niêu cơm nhỏ nhưng ăn hết lại đầy, biểu tượng cho lòng yêu chuộng hòa bình của dân tộc.',
        explanation: 'Niêu cơm thần kì ăn mãi không hết thể hiện lòng nhân đạo, tinh thần hòa hiếu của nhân dân ta.'
      },
      {
        question: 'Trong truyện cổ tích "Cây khế", vì sao người em được chim thần đưa đi lấy vàng và có cuộc sống sung túc?',
        options: ['Vì người em thật thà, chăm chỉ, nhân hậu và biết nghe theo lời dặn của chim', 'Vì người em dùng bẫy bắt chim thần', 'Vì người em lừa gạt người anh', 'Vì người em xin tiền cha mẹ'],
        answerIndex: 0,
        hint: 'Ở hiền gặp lành là ước mơ công lý của truyện cổ tích.',
        explanation: 'Người em hiền lành, chịu thương chịu khó nên nhận được sự trợ giúp kỳ diệu của chim thần.'
      },
      {
        question: 'Truyện cổ tích thần kì thường phản ánh ước mơ cháy bỏng nào của nhân dân lao động thời xưa?',
        options: ['Ước mơ về công lý xã hội: cái thiện chiến thắng cái ác, người hiền gặp lành', 'Ước mơ trở thành phi hành gia bay vào vũ trụ', 'Ước mơ phát minh ra máy móc hiện đại', 'Ước mơ thống trị các nước khác'],
        answerIndex: 0,
        hint: 'Ở hiền gặp lành, ác giả ác báo.',
        explanation: 'Truyện cổ tích là tiếng nói công lý khẳng định chân lý cái thiện luôn chiến thắng cái ác.'
      },
      {
        question: 'Văn bản "Xem người ta kìa!" của tác giả Lạc Thanh bàn luận về vấn đề gì?',
        options: ['Mỗi người cần được tôn trọng cá tính, nét độc đáo riêng biệt bên cạnh việc học hỏi điều tốt từ người khác', 'Phải bắt chước người khác bằng mọi giá', 'Không bao giờ được quan tâm đến ai xung quanh', 'Phải phê phán mọi bạn bè trong lớp'],
        answerIndex: 0,
        hint: 'Vừa học hỏi cộng đồng vừa gìn giữ bản sắc cá nhân.',
        explanation: 'Tác giả khuyên ta biết học điều hay ở người khác nhưng không đánh mất bản sắc riêng độc đáo của mình.'
      },
      {
        question: 'Trong văn bản "Hai loại khác biệt", tác giả chỉ ra sự khác biệt có ý nghĩa xuất phát từ đâu?',
        options: ['Xuất phát từ năng lực thực sự, phẩm chất đạo đức và sự đóng góp tích cực cho cộng đồng', 'Xuất phát từ những trò quái đản, quậy phá gây chú ý', 'Xuất phát từ quần áo đắt tiền', 'Xuất phát từ việc không thèm nói chuyện với ai'],
        answerIndex: 0,
        hint: 'Khác biệt có giá trị khác với trò kỳ quặc nông nổi.',
        explanation: 'Khác biệt có ý nghĩa phải bắt nguồn từ trí tuệ, lòng tốt và hành động cống hiến cho xã hội.'
      },
      {
        question: 'Văn bản "Trái Đất - cái nôi của sự sống" cung cấp cho người đọc thông tin cốt lõi nào?',
        options: ['Trái Đất có nguồn nước và bầu khí quyển nuôi dưỡng muôn loài, nhưng môi trường đang bị con người tàn phá nghiêm trọng', 'Trái Đất là hành tinh chết không có sinh vật', 'Con người sắp chuyển toàn bộ sang sống ở sao Hỏa', 'Trái Đất có lượng tài nguyên vô hạn không bao giờ cạn'],
        answerIndex: 0,
        hint: 'Lời kêu gọi bảo vệ hành tinh xanh của chúng ta.',
        explanation: 'Văn bản khẳng định Trái Đất là nơi duy nhất có sự sống và con người phải có trách nhiệm bảo vệ ngôi nhà chung.'
      },
      {
        question: 'Thể loại văn bản thông tin sử dụng phương thức biểu đạt chính nào?',
        options: ['Thuyết minh (cung cấp tri thức khách quan)', 'Tự sự (kể chuyện hư cấu)', 'Miêu tả hình ảnh bay bổng', 'Biểu cảm trữ tình cá nhân'],
        answerIndex: 0,
        hint: 'Cung cấp kiến thức chính xác, khoa học và số liệu thực tế.',
        explanation: 'Văn bản thông tin sử dụng phương thức thuyết minh để cung cấp sự thật khách quan cho người đọc.'
      },
      {
        question: 'Dấu chấm phẩy (;) trong câu văn thường được sử dụng nhằm mục đích gì?',
        options: ['Đánh ranh giới giữa các vế trong một câu ghép có cấu tạo phức tạp hoặc ngăn cách các bộ phận trong phép liệt kê', 'Kết thúc một câu khẳng định', 'Đánh dấu lời nói trực tiếp của nhân vật', 'Biểu thị sự ngạc nhiên thán phục'],
        answerIndex: 0,
        hint: 'Ngăn cách các vế câu dài có quan hệ chặt chẽ.',
        explanation: 'Dấu chấm phẩy dùng ngăn cách các vế câu ghép phức hoặc liệt kê các mục lớn có chứa dấu phẩy con.'
      },
      {
        question: 'Thành ngữ nào dưới đây có ý nghĩa phê phán sự lười biếng, chỉ muốn hưởng thụ mà không muốn lao động?',
        options: ['Há miệng chờ sung', 'Chân lấm tay bùn', 'Một nắng hai sương', 'Thức khuya dậy sớm'],
        answerIndex: 0,
        hint: 'Chờ đợi may mắn từ trên trời rơi xuống một cách thụ động.',
        explanation: '"Há miệng chờ sung" phê phán thói ỷ lại, lười lao động chờ đợi thành quả có sẵn.'
      },
      {
        question: 'Nghĩa của thành ngữ "Chân lấm tay bùn" là gì?',
        options: ['Chỉ sự lao động vất vả, cực nhọc của người nông dân trên đồng ruộng', 'Chỉ người thích nghịch bẩn', 'Chỉ người làm nghề thợ gốm', 'Chỉ việc tắm bùn khoáng nóng'],
        answerIndex: 0,
        hint: 'Hình ảnh người nông dân cày cấy lam lũ.',
        explanation: '"Chân lấm tay bùn" miêu tả nỗi vất vả, lam lũ của bà con nông dân quanh năm gắn bó với ruộng đồng.'
      },
      {
        question: 'Trong văn bản nghị luận, yếu tố nào đóng vai trò là "xương sống", thể hiện ý kiến và luận điểm chính của người viết?',
        options: ['Luận điểm', 'Dẫn chứng minh họa', 'Từ ngữ cảm thán', 'Tên tiêu đề'],
        answerIndex: 0,
        hint: 'Các quan điểm, tư tưởng chính được đưa ra thuyết phục.',
        explanation: 'Luận điểm là linh hồn của bài nghị luận, dẫn dắt các lý lẽ và bằng chứng đi đúng hướng.'
      },
      {
        question: 'Trong truyện cổ tích "Thạch Sanh", tiếng đàn của Thạch Sanh đã có tác dụng diệu kì nào?',
        options: ['Vạch trần tội ác cướp công của Lý Thông và hóa giải sự thù địch của binh lính 18 nước chư hầu', 'Làm cho quái vật biến thành vàng', 'Giúp Thạch Sanh bay lên trời', 'Chữa khỏi bệnh cho nhà vua'],
        answerIndex: 0,
        hint: 'Tiếng đàn công lý và tiếng đàn hòa bình giải oan cho chàng.',
        explanation: 'Tiếng đàn thần kì giúp công chúa khỏi câm, vạch trần Lý Thông và làm nhụt ý chí xâm lược của quân giặc.'
      },
      {
        question: 'Biện pháp tu từ nào được sử dụng trong câu thơ: "Tre xanh xanh tự bao giờ / Chuyện ngày xưa đã có bờ tre xanh"?',
        options: ['Điệp từ (Điệp ngữ)', 'Nói quá', 'Ẩn dụ chuyển đổi cảm giác', 'Chơi chữ'],
        answerIndex: 0,
        hint: 'Từ "xanh" được lặp lại nhiều lần tạo nhịp điệu tha thiết.',
        explanation: 'Điệp từ "xanh" lặp lại nhấn mạnh sức sống trường tồn, gắn bó ngàn đời của cây tre với làng quê Việt Nam.'
      },
      {
        question: 'Từ "chân" trong câu nào dưới đây mang NGHĨA CHUYỂN?',
        options: ['Đoàn người dừng chân dưới chân núi', 'Bé bị đau chân nên phải nghỉ học', 'Vận động viên có đôi chân rất khỏe', 'Con gà có hai chân'],
        answerIndex: 0,
        hint: '"chân núi" là phần đáy tiếp giáp mặt đất của ngọn núi.',
        explanation: '"chân núi" dùng theo nghĩa chuyển (phần dưới cùng của vật), các câu còn lại dùng theo nghĩa gốc (bộ phận cơ thể).'
      },
      {
        question: 'Yếu tố nào dưới đây KHÔNG PHẢI là đặc điểm của truyện cổ tích?',
        options: ['Ghi chép chính xác 100% các số liệu lịch sử từng ngày tháng', 'Có các yếu tố tưởng tượng kì ảo (bụt, tiên, đồ vật thần)', 'Kết thúc có hậu (người tốt được hạnh phúc, kẻ ác bị trừng phạt)', 'Có nguồn gốc truyền miệng trong nhân dân thời xưa'],
        answerIndex: 0,
        hint: 'Truyện cổ tích là sáng tác dân gian giàu tưởng tượng, không phải biên niên sử.',
        explanation: 'Truyện cổ tích không ghi chép số liệu lịch sử chính xác mà là tác phẩm hư cấu mang tính biểu tượng.'
      },
      {
        question: 'Nhân vật Lý Thông trong truyện "Thạch Sanh" đại diện cho kiểu người nào trong xã hội?',
        options: ['Kẻ bất nhân bất nghĩa, nham hiểm, mưu mô xảo quyệt và chuyên cướp công người khác', 'Người hiền lành chất phác', 'Người dũng cảm xả thân cứu nước', 'Người thông minh ham học'],
        answerIndex: 0,
        hint: 'Kẻ xảo trá lừa bạn vào hang chằn tinh để thế mạng.',
        explanation: 'Lý Thông là hình mẫu điển hình của kẻ phản trắc, tư lợi và độc ác trong kho tàng truyện cổ dân gian.'
      },
      {
        question: 'Khi tóm tắt một văn bản thông tin, người đọc cần chú ý giữ lại nội dung nào?',
        options: ['Các sự kiện chính, số liệu xác thực và thông điệp cốt lõi của văn bản', 'Các cảm xúc ngoài lề của người đọc', 'Các câu chuyện hài hước tự sáng tác thêm', 'Chỉ ghi lại dòng tiêu đề'],
        answerIndex: 0,
        hint: 'Giữ lại các ý chính, lược bỏ chi tiết rườm rà.',
        explanation: 'Tóm tắt văn bản thông tin đòi hỏi cô đọng các sự kiện, số liệu chính xác và thông điệp trọng tâm.'
      },
      {
        question: 'Hình ảnh "Trái Đất" trong văn bản "Trái Đất - cái nôi của sự sống" được so sánh với hình ảnh biểu tượng nào?',
        options: ['Một viên ngọc xanh lộng lẫy và mong manh trôi giữa vũ trụ bao la', 'Một tảng đá đen khổng lồ', 'Một quả bóng bay rực rỡ sắc màu', 'Một đám mây khổng lồ'],
        answerIndex: 0,
        hint: 'Màu xanh của đại dương và sự sống nhìn từ ngoài không gian.',
        explanation: 'Trái Đất hiện lên như viên ngọc xanh diệu kỳ, duy nhất có sự sống nhưng vô cùng dễ bị tổn thương.'
      }
    ]
  },

  // 11. KHOA HỌC TỰ NHIÊN 6 - HỌC KỲ 2 (18 QUESTIONS)
  {
    id: 'quiz-g6-s2-science',
    title: 'Khoa học Tự nhiên 6 - Kiểm tra Giữa học kỳ 2: Lực, Năng lượng & Trái Đất trong Hệ Mặt Trời',
    titleEn: 'Natural Science 6 - Sem 2: Forces, Energy & Astronomy',
    grade: 6,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Chương trình chuẩn HK2 KHTN 6: Lực và tác dụng của lực, lực ma sát, lực cản của nước, trọng lực, biến dạng lò xo, năng lượng và định luật bảo toàn năng lượng, hệ Mặt Trời và chuyển động thiên thể.',
    descriptionEn: 'Sem 2 Science: Dynamics, friction, gravity, energy forms, conservation of energy, celestial systems.',
    questions: [
      {
        question: 'Lực tác dụng lên một vật có thể gây ra những kết quả nào dưới đây?',
        options: ['Làm biến đổi chuyển động (vận tốc, hướng) hoặc làm biến dạng vật đó', 'Chỉ làm vật nóng lên', 'Không gây ra bất kì tác dụng nào', 'Làm cho vật biến mất hoàn toàn'],
        answerIndex: 0,
        hint: 'Đá vào quả bóng làm bóng bay đi và móp tạm thời.',
        explanation: 'Lực có thể làm thay đổi tốc độ, hướng chuyển động của vật hoặc làm vật biến dạng (hoặc cả hai).'
      },
      {
        question: 'Dụng cụ nào dưới đây được sử dụng để đo độ lớn của lực trong phòng thực hành?',
        options: ['Lực kế (Spring balance)', 'Nhiệt kế', 'Cân điện tử', 'Thước kẹp'],
        answerIndex: 0,
        hint: 'Dụng cụ có lò xo và bảng chia vạch đơn vị Newton (N).',
        explanation: 'Lực kế là dụng cụ chuyên dụng dùng để đo độ lớn của lực (đơn vị Newton).'
      },
      {
        question: 'Một vật có khối lượng m = 2,5 kg đặt trên mặt đất. Trọng lượng P của vật đó xấp xỉ bằng bao nhiêu?',
        options: ['25 N', '2,5 N', '250 N', '0,25 N'],
        answerIndex: 0,
        hint: 'Công thức liên hệ trọng lượng và khối lượng: P ≈ 10 × m.',
        explanation: 'P = 10 × m = 10 × 2,5 = 25 N.'
      },
      {
        question: 'Khi treo một quả nặng vào đầu dưới của lò xo, chiều dài lò xo bị dãn ra. Lực mà lò xo bị biến dạng tác dụng ngược lại lên quả nặng gọi là:',
        options: ['Lực đàn hồi', 'Lực ma sát', 'Trọng lực', 'Lực hấp dẫn'],
        answerIndex: 0,
        hint: 'Lực xuất hiện khi lò xo bị biến dạng và có xu hướng kéo vật về vị trí ban đầu.',
        explanation: 'Lực đàn hồi của lò xo xuất hiện khi lò xo bị biến dạng và chống lại nguyên nhân gây biến dạng.'
      },
      {
        question: 'Độ dãn của lò xo treo thẳng đứng có mối quan hệ như thế nào với khối lượng quả nặng treo vào nó?',
        options: ['Tỉ lệ thuận với khối lượng quả nặng treo vào', 'Tỉ lệ nghịch với khối lượng quả nặng', 'Không phụ thuộc vào quả nặng', 'Lò xo luôn giữ nguyên độ dài'],
        answerIndex: 0,
        hint: 'Treo quả nặng càng nặng thì lò xo dãn ra càng dài tương ứng.',
        explanation: 'Độ dãn của lò xo tỉ lệ thuận với lực kéo (trọng lượng quả nặng) tác dụng vào nó.'
      },
      {
        question: 'Lực ma sát trượt xuất hiện khi nào?',
        options: ['Khi một vật trượt trên bề mặt của một vật khác', 'Khi một vật đứng yên hoàn toàn trong chân không', 'Khi một vật rơi tự do không chạm vật nào', 'Khi một vật lăn trên mặt phẳng'],
        answerIndex: 0,
        hint: 'Ví dụ: Kéo một khúc gỗ trượt trên sàn nhà.',
        explanation: 'Ma sát trượt sinh ra ở mặt tiếp xúc giữa hai vật khi một vật trượt trên bề mặt vật kia.'
      },
      {
        question: 'Để giảm lực ma sát có hại trong các ổ trục xe đạp, xe máy, người ta thường làm gì?',
        options: ['Tra dầu mỡ bôi trơn và lắp các ổ bi vòng bi', 'Rắc thêm cát sỏi vào ổ trục', 'Tăng độ nhám của trục quay', 'Tháo hết bi trong ổ trục ra'],
        answerIndex: 0,
        hint: 'Chuyển ma sát trượt thành ma sát lăn và làm trơn bề mặt tiếp xúc.',
        explanation: 'Tra dầu mỡ và dùng ổ bi giúp chuyển ma sát trượt thành ma sát lăn, giảm ma sát tối đa.'
      },
      {
        question: 'Lực ma sát có vai trò có lợi trong trường hợp nào dưới đây?',
        options: ['Giúp con người đi lại trên mặt đất mà không bị trượt ngã và giúp phanh xe dừng lại', 'Làm mòn đế giày dép sau thời gian sử dụng', 'Làm nóng và mòn các chi tiết máy móc', 'Làm cản trở chuyển động của tàu hỏa trên đường ray'],
        answerIndex: 0,
        hint: 'Nếu không có ma sát, chân ta sẽ trượt ngã không thể bước đi.',
        explanation: 'Ma sát giữa đế giày và mặt đường giúp ta bước đi vững vàng; ma sát ở má phanh giúp xe dừng lại an toàn.'
      },
      {
        question: 'Dạng năng lượng nào dưới đây thuộc nhóm Năng lượng tái tạo (vô tận và thân thiện môi trường)?',
        options: ['Năng lượng mặt trời, năng lượng gió và năng lượng thủy triều', 'Năng lượng từ than đá', 'Năng lượng từ dầu mỏ', 'Năng lượng từ khí đốt tự nhiên'],
        answerIndex: 0,
        hint: 'Nguồn năng lượng tự nhiên liên tục được tái sinh không cạn kiệt.',
        explanation: 'Mặt trời, gió, thủy triều là các nguồn năng lượng sạch vô tận, không gây ô nhiễm khí hậu.'
      },
      {
        question: 'Khi thả rơi một quả bóng cao su từ trên cao xuống sàn nhà, thế năng của quả bóng đã chuyển hóa thành dạng năng lượng nào?',
        options: ['Động năng', 'Hóa năng', 'Năng lượng hạt nhân', 'Điện năng'],
        answerIndex: 0,
        hint: 'Vật chuyển động nhanh dần lên khi rơi xuống thấp.',
        explanation: 'Độ cao giảm làm thế năng giảm, đồng thời vận tốc tăng khiến thế năng chuyển hóa thành động năng.'
      },
      {
        question: 'Nội dung cốt lõi của Định luật Bảo toàn Năng lượng là:',
        options: ['Năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác', 'Năng lượng sẽ tự động mất đi sau một thời gian', 'Con người có thể tạo ra năng lượng từ hư vô', 'Năng lượng chỉ tồn tại ở dạng nhiệt'],
        answerIndex: 0,
        hint: 'Tổng năng lượng của một hệ cô lập luôn là một hằng số.',
        explanation: 'Định luật khẳng định tính bảo toàn toàn vẹn: năng lượng chỉ biến đổi giữa các dạng chứ không bị triệt tiêu.'
      },
      {
        question: 'Tại sao khi dùng quạt điện một thời gian, sờ vào bầu quạt ta thấy nóng lên?',
        options: ['Một phần điện năng đã chuyển hóa thành nhiệt năng hao phí do ma sát và dòng điện', 'Điện năng biến hoàn toàn thành gió mát', 'Quạt hút nhiệt từ bên ngoài vào', 'Do quạt sắp hết pin'],
        answerIndex: 0,
        hint: 'Năng lượng hao phí không mong muốn dưới dạng nhiệt.',
        explanation: 'Điện năng cung cấp cho quạt điện phần lớn biến thành cơ năng (làm quay cánh quạt), một phần hao phí thành nhiệt năng.'
      },
      {
        question: 'Mặt Trăng là thiên thể dạng gì trong vũ trụ?',
        options: ['Vệ tinh tự nhiên quay xung quanh Trái Đất', 'Một ngôi sao tự phát ra ánh sáng', 'Một hành tinh quay quanh Mặt Trời', 'Một thiên thạch rơi tự do'],
        answerIndex: 0,
        hint: 'Mặt Trăng chỉ phản chiếu ánh sáng từ Mặt Trời và bay quanh Trái Đất.',
        explanation: 'Mặt Trăng là vệ tinh tự nhiên duy nhất của Trái Đất, không tự phát sáng mà phản chiếu ánh sáng Mặt Trời.'
      },
      {
        question: 'Hiện tượng nhìn thấy các hình dạng khác nhau của Mặt Trăng (Trăng tròn, Trăng khuyết, Trăng lưỡi liềm) trong một tháng là do:',
        options: ['Vị trí tương đối của Mặt Trăng so với Trái Đất và Mặt Trời thay đổi liên tục', 'Mặt Trăng bị mây đen che khuất từng phần', 'Mặt Trăng tự co lại và phình to ra', 'Mặt Trăng bị vỡ vụn rồi ghép lại'],
        answerIndex: 0,
        hint: 'Góc nhìn phần được Mặt Trời chiếu sáng từ Trái Đất thay đổi theo tuần trăng.',
        explanation: 'Khi Mặt Trăng quay quanh Trái Đất, phần được chiếu sáng hướng về phía Trái Đất thay đổi tạo nên các tuần Trăng.'
      },
      {
        question: 'Hành tinh nào trong hệ Mặt Trời có kích thước lớn nhất?',
        options: ['Sao Mộc (Jupiter)', 'Sao Thổ (Saturn)', 'Sao Hỏa (Mars)', 'Trái Đất (Earth)'],
        answerIndex: 0,
        hint: 'Hành tinh khí khổng lồ có khối lượng lớn hơn tất cả các hành tinh khác cộng lại.',
        explanation: 'Sao Mộc là hành tinh lớn nhất trong hệ Mặt Trời, với đường kính gấp hơn 11 lần đường kính Trái Đất.'
      },
      {
        question: 'Mặt Trời mọc ở đằng Đông và lặn ở đằng Tây là hiện tượng chuyển động nhìn thấy do:',
        options: ['Trái Đất tự quay quanh trục của nó từ hướng Tây sang hướng Đông', 'Mặt Trời bay xung quanh Trái Đất từ Đông sang Tây', 'Trái Đất đứng yên tuyệt đối', 'Mặt Trời lắc lư qua lại'],
        answerIndex: 0,
        hint: 'Chuyển động biểu kiến ngược hướng với chiều tự quay của Trái Đất.',
        explanation: 'Trái Đất tự quay từ Tây sang Đông làm ta có cảm giác Mặt Trời chuyển động theo chiều ngược lại từ Đông sang Tây.'
      },
      {
        question: 'Tại sao các vận động viên bơi lội thường đội mũ bơi ôm sát đầu và mặc đồ bơi đặc biệt?',
        options: ['Để giảm lực cản của nước, giúp bơi nhanh hơn', 'Chỉ để cho đẹp mắt', 'Để giữ ấm cơ thể trong nước nóng', 'Để làm tăng sức nặng cơ thể'],
        answerIndex: 0,
        hint: 'Lực cản của nước làm chậm tốc độ bơi lội.',
        explanation: 'Mũ bơi làm nhẵn bề mặt tiếp xúc, giảm đáng kể lực cản của nước lên cơ thể vận động viên.'
      },
      {
        question: 'Năng lượng gió làm quay các cánh quạt tuabin gió để tạo ra dạng năng lượng nào?',
        options: ['Điện năng', 'Hóa năng', 'Năng lượng hạt nhân', 'Nhiệt năng sưởi ấm'],
        answerIndex: 0,
        hint: 'Các nhà máy phong điện hòa vào mạng lưới điện quốc gia.',
        explanation: 'Động năng của gió làm quay tuabin máy phát điện, biến đổi cơ năng thành điện năng sạch.'
      }
    ]
  },

  // 12. LỊCH SỬ & ĐỊA LÍ 6 - HỌC KỲ 2 (18 QUESTIONS)
  {
    id: 'quiz-g6-s2-history-geo',
    title: 'Lịch sử & Địa lí 6 - Kiểm tra Giữa học kỳ 2: Thời kì Bắc thuộc, Độc lập Bạch Đằng & Nước trên Trái Đất',
    titleEn: 'History & Geography 6 - Sem 2: Resistance Wars, Bach Dang 938 & Hydrosphere',
    grade: 6,
    semester: 2,
    subject: 'Lịch sử & Địa lí',
    subjectVi: 'Lịch sử & Địa lí',
    subjectEn: 'History & Geography',
    category: 'social',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Chính sách cai trị thời Bắc thuộc, các cuộc khởi nghĩa Hai Bà Trưng, Bà Triệu, Lý Bí, Mai Thúc Loan, Phùng Hưng, chiến thắng Bạch Đằng năm 938, thủy quyển, sông ngòi, đất và sinh vật.',
    descriptionEn: 'Sem 2 History & Geography: Vietnamese independence battles (Bach Dang 938), rivers, oceans, biomes.',
    questions: [
      {
        question: 'Thời kì Bắc thuộc trong lịch sử Việt Nam bắt đầu từ sau sự kiện lịch sử nào?',
        options: ['Cuộc kháng chiến của An Dương Vương thất bại trước Triệu Đà (năm 179 TCN)', 'Sau chiến thắng Bạch Đằng năm 938', 'Thời kì các Vua Hùng dựng nước Văn Lang', 'Thời kì nhà Đinh lập nước Đại Cồ Việt'],
        answerIndex: 0,
        hint: 'Nỏ thần biến mất, thành Cổ Loa thất thủ.',
        explanation: 'Năm 179 TCN, Triệu Đà sáp nhập Âu Lạc vào Nam Việt, mở đầu hơn một nghìn năm Bắc thuộc đầy đau thương.'
      },
      {
        question: 'Mục đích chính của chính sách đồng hóa của các triều đại phong kiến phương Bắc đối với nhân dân ta là gì?',
        options: ['Biến nước ta thành quận huyện của Trung Quốc, xóa bỏ tiếng nói và văn hóa dân tộc của người Việt', 'Giúp nhân dân ta phát triển kinh tế giàu có', 'Xây dựng trường học dạy miễn phí cho mọi trẻ em', 'Bảo vệ các phong tục tập quán của người Việt'],
        answerIndex: 0,
        hint: 'Đồng hóa nhằm đồng nhất ngôn ngữ, phong tục để cai trị vĩnh viễn.',
        explanation: 'Chính quyền đô hộ truyền bá phong tục Hán, ép dùng chữ Hán nhằm biến người Việt thành thần dân của đế chế phương Bắc.'
      },
      {
        question: 'Cuộc khởi nghĩa vũ trang đầu tiên của nhân dân ta chống lại ách đô hộ của nhà Đông Hán nổ ra vào năm 40 do ai lãnh đạo?',
        options: ['Hai Bà Trưng (Trưng Trắc và Trưng Nhị)', 'Bà Triệu (Triệu Thị Trinh)', 'Lý Bí (Lý Nam Đế)', 'Mai Thúc Loan'],
        answerIndex: 0,
        hint: 'Nữ anh hùng đền nợ nước, trả thù nhà ở vùng Mê Linh.',
        explanation: 'Mùa xuân năm 40, Hai Bà Trưng phất cờ khởi nghĩa ở Hát Môn, lật đổ nền thống trị tàn bạo của Tô Định.'
      },
      {
        question: 'Câu nói nổi tiếng: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông..." là của nữ anh hùng dân tộc nào?',
        options: ['Bà Triệu (Triệu Thị Trinh)', 'Trưng Trắc', 'Trưng Nhị', 'Bùi Thị Xuân'],
        answerIndex: 0,
        hint: 'Nữ kiệt lãnh đạo khởi nghĩa chống quân Ngô năm 248 tại Thanh Hóa.',
        explanation: 'Bà Triệu thể hiện ý chí quật cường kiên quyết không cam chịu làm tì thiếp nô lệ cho giặc ngoại xâm.'
      },
      {
        question: 'Sau khi đánh đuổi quân đô hộ nhà Lương, Lý Bí đã lên ngôi hoàng đế và đặt tên nước ta là gì vào năm 544?',
        options: ['Vạn Xuân (mong đất nước trường tồn ngàn mùa xuân tươi đẹp)', 'Đại Cồ Việt', 'Đại Việt', 'Âu Lạc'],
        answerIndex: 0,
        hint: 'Ý nghĩa đất nước thanh bình vĩnh viễn qua hàng vạn mùa xuân.',
        explanation: 'Mùa xuân năm 544, Lý Bí lên ngôi (Lý Nam Đế), đặt tên nước là Vạn Xuân, đóng đô ở vùng cửa sông Tô Lịch.'
      },
      {
        question: 'Chiến thắng lịch sử trên sông Bạch Đằng năm 938 do ai trực tiếp chỉ huy đánh tan quân xâm lược Nam Hán?',
        options: ['Ngô Quyền', 'Dương Đình Nghệ', 'Khúc Thừa Dụ', 'Đinh Bộ Lĩnh'],
        answerIndex: 0,
        hint: 'Vị anh hùng dùng bãi cọc nhọn bọc sắt đón thủy triều tiêu diệt Lưu Hoằng Thao.',
        explanation: 'Ngô Quyền lãnh đạo nhân dân tiêu diệt đạo quân Nam Hán trên sông Bạch Đằng, chấm dứt hoàn toàn ách đô hộ Bắc thuộc.'
      },
      {
        question: 'Kế sách quân sự độc đáo và sáng tạo nhất của Ngô Quyền trong trận Bạch Đằng năm 938 là gì?',
        options: ['Cắm bãi cọc gỗ vót nhọn bịt sắt dưới lòng sông, lợi dụng quy luật thủy triều lên xuống để nhử địch', 'Cho quân đào hào sâu quanh thành', 'Dùng máy bay ném bom', 'Cử sứ giả sang giảng hòa nộp vàng'],
        answerIndex: 0,
        hint: 'Lợi dụng thủy triều dâng che giấu bãi cọc nhọn đâm thủng thuyền giặc.',
        explanation: 'Lợi dụng nước triều rút nhanh, cọc nhọn nhô lên chọc thủng chiến thuyền quân giặc, làm nên chiến thắng lẫy lừng.'
      },
      {
        question: 'Ý nghĩa lịch sử vĩ đại nhất của Chiến thắng Bạch Đằng năm 938 là gì?',
        options: ['Chấm dứt hoàn toàn hơn 1000 năm Bắc thuộc, mở ra thời kì độc lập, tự chủ lâu dài cho dân tộc ta', 'Mở rộng bờ cõi sang phương Bắc', 'Xóa bỏ hoàn toàn chế độ quân chủ', 'Bắt đầu giai đoạn nội chiến loạn 12 sứ quân'],
        answerIndex: 0,
        hint: 'Mốc son chói lọi mở ra kỉ nguyên độc lập tự do bền vững.',
        explanation: 'Chiến thắng Bạch Đằng 938 là mốc son chấm dứt đêm trường Bắc thuộc, khẳng định quyền tự chủ dân tộc thiêng liêng.'
      },
      {
        question: 'Thủy quyển là gì?',
        options: ['Lớp nước bao phủ Trái Đất gồm nước mặn ở đại dương, nước ngọt trên lục địa và hơi nước trong khí quyển', 'Chỉ riêng nước mưa trên trời', 'Chỉ các dòng sông trên núi', 'Nước khoáng đóng chai'],
        answerIndex: 0,
        hint: 'Toàn bộ khối lượng nước trên bề mặt và trong lòng Trái Đất.',
        explanation: 'Thủy quyển bao gồm biển, đại dương, sông ngòi, hồ đầm, băng hà, nước ngầm và hơi nước trong khí quyển.'
      },
      {
        question: 'Nước mặn trong các biển và đại dương chiếm khoảng bao nhiêu phần trăm tổng lượng nước trên toàn Trái Đất?',
        options: ['Khoảng 97,5%', 'Chỉ khoảng 50%', 'Khoảng 2,5%', 'Khoảng 10%'],
        answerIndex: 0,
        hint: 'Phần lớn nước trên hành tinh là nước biển mặn.',
        explanation: 'Nước mặn chiếm tới 97,5% tổng lượng nước; nước ngọt chỉ chiếm vỏn vẹn khoảng 2,5% (phần lớn đóng băng ở hai cực).'
      },
      {
        question: 'Bộ phận nào của một dòng sông là nơi tiếp nhận nguồn nước từ các dòng chảy phụ đổ vào sông chính?',
        options: ['Chi lưu và phụ lưu', 'Cửa sông', 'Đáy biển', 'Thác nước'],
        answerIndex: 0,
        hint: 'Phụ lưu cung cấp nước cho sông chính, chi lưu thoát nước ra biển.',
        explanation: 'Phụ lưu là sông nhánh cấp nước cho sông chính; chi lưu chia bớt nước từ sông chính đổ ra biển.'
      },
      {
        question: 'Hồ nước ngọt sâu nhất và chứa lượng nước ngọt mặt lớn nhất thế giới là hồ nào?',
        options: ['Hồ Baikal (ở Liên bang Nga)', 'Hồ Ba Bể (Việt Nam)', 'Hồ Victoria (châu Phi)', 'Biển Chết'],
        answerIndex: 0,
        hint: 'Hồ nước hình trăng khuyết khổng lồ tại vùng Siberia.',
        explanation: 'Hồ Baikal ở Nga là hồ nước ngọt sâu nhất thế giới (trên 1600 m), chứa 20% lượng nước ngọt không đóng băng của hành tinh.'
      },
      {
        question: 'Nước ngầm có vai trò đặc biệt quan trọng nào trong đời sống tự nhiên và con người?',
        options: ['Cung cấp nước sinh hoạt, tưới tiêu nông nghiệp và duy trì dòng chảy cho các con sông mùa khô', 'Làm cho đất đai bị xói mòn hoàn toàn', 'Gây khô hạn sa mạc', 'Không có giá trị sử dụng'],
        answerIndex: 0,
        hint: 'Nguồn nước sạch dưới lòng đất dùng cho giếng khoan.',
        explanation: 'Nước ngầm là kho dự trữ nước ngọt vô giá phục vụ ăn uống sinh hoạt và nuôi dưỡng hệ sinh thái.'
      },
      {
        question: 'Thành phần hữu cơ quan trọng nhất quyết định độ phì nhiêu (màu mỡ) của đất trồng trọt là gì?',
        options: ['Chất mùn (Humus)', 'Hạt cát thô', 'Mảnh đá vụn', 'Nước mặn'],
        answerIndex: 0,
        hint: 'Xác thực vật và động vật bị vi sinh vật phân giải tạo thành màu đen hoặc nâu thẫm.',
        explanation: 'Chất mùn là nguồn dinh dưỡng hữu cơ then chốt cung cấp dưỡng chất nuôi cây trồng phát triển.'
      },
      {
        question: 'Rừng nhiệt đới (như rừng mưa nhiệt đới Amazon) phân bố chủ yếu ở khu vực nào trên Trái Đất?',
        options: ['Vùng xích đạo và đới nóng nhiệt đới có nhiệt độ cao và mưa nhiều quanh năm', 'Vùng cực Bắc băng tuyết', 'Vùng sa mạc khô hạn Sahara', 'Vùng ôn đới lạnh giá'],
        answerIndex: 0,
        hint: 'Khí hậu nóng ẩm mưa nhiều quanh năm.',
        explanation: 'Rừng mưa nhiệt đới phát triển rực rỡ ở đới nóng (quanh xích đạo) nhờ lượng mưa và nhiệt độ dồi dào.'
      },
      {
        question: 'Hành động nào dưới đây của con người góp phần tích cực bảo vệ nguồn nước và chống suy thoái đất?',
        options: ['Trồng rừng phủ xanh đất trống đồi trọc và không xả rác, nước thải bẩn ra sông hồ', 'Chặt phá rừng phòng hộ đầu nguồn lấy gỗ', 'Lạm dụng quá mức phân bón hóa học và thuốc trừ sâu', 'Xả nước thải công nghiệp trực tiếp xuống biển'],
        answerIndex: 0,
        hint: 'Bảo vệ rừng đầu nguồn và giữ sạch nguồn nước ngọt.',
        explanation: 'Trồng rừng giúp giữ đất, chống xói mòn rửa trôi và bảo vệ tầng nước ngầm trong sạch.'
      },
      {
        question: 'Dòng hải lưu (dòng biển) nóng chảy qua vùng ven biển thường làm cho khí hậu nơi đó có đặc điểm gì?',
        options: ['Ấm áp và có lượng mưa nhiều hơn', 'Rất lạnh giá và đóng băng', 'Cực kì khô hạn không có giọt mưa nào', 'Không có ảnh hưởng gì'],
        answerIndex: 0,
        hint: 'Dòng nước ấm làm tăng bốc hơi nước tạo mây gây mưa.',
        explanation: 'Dòng biển nóng làm tăng độ ẩm và nhiệt độ không khí, mang lại thời tiết ấm áp và mưa nhiều cho dải ven bờ.'
      },
      {
        question: 'Sông Mê Kông trước khi đổ ra biển Đông trên lãnh thổ Việt Nam đã chia thành 9 cửa sông lớn nên còn được gọi là:',
        options: ['Sông Cửu Long', 'Sông Hồng', 'Sông Đồng Nai', 'Sông Thái Bình'],
        answerIndex: 0,
        hint: 'Cửu Long nghĩa là 9 con rồng đổ ra biển.',
        explanation: 'Đoạn sông Mê Kông chảy qua đồng bằng Nam Bộ chia thành 9 cửa sông nên mang tên hào hùng là sông Cửu Long.'
      }
    ]
  },

  // 13. TIẾNG ANH 6 - HỌC KỲ 2 (18 QUESTIONS)
  {
    id: 'quiz-g6-s2-english',
    title: 'Tiếng Anh 6 - Kiểm tra Giữa học kỳ 2: Global Success Units 7 - 12 (TV, Sports, Future, Green World)',
    titleEn: 'English 6 - Sem 2: Global Success Past Simple, Future & Modals',
    grade: 6,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Chương trình chuẩn HK2 Tiếng Anh 6 Global Success: Thì quá khứ đơn, tương lai đơn với Will/Won\'t, câu điều kiện loại 1, từ nối (and, but, although, because, so), đại từ sở hữu và từ vựng Units 7-12.',
    descriptionEn: 'Units 7-12 Global Success: Past Simple, Future Simple, First Conditionals, Conjunctions, Possessive Pronouns.',
    questions: [
      {
        question: 'Choose the correct past form of the irregular verb: Yesterday afternoon, our school football team _______ the championship match.',
        options: ['won', 'win', 'winned', 'winning'],
        answerIndex: 0,
        hint: 'Past tense of "win" is an irregular verb (win -> won).',
        explanation: 'The past simple of the irregular verb "win" is "won".'
      },
      {
        question: 'Complete the sentence with an appropriate conjunction: He was very tired, _______ he still stayed up late to finish his project.',
        options: ['but', 'so', 'because', 'and'],
        answerIndex: 0,
        hint: 'Expresses contrast between feeling tired and continuing to work.',
        explanation: '"But" (nhưng) connects two contrasting clauses.'
      },
      {
        question: 'Choose the conjunction of concession: _______ it rained heavily, the students went hiking in the national park.',
        options: ['Although', 'Because', 'So', 'Therefore'],
        answerIndex: 0,
        hint: 'Although + clause expresses concession (mặc dù).',
        explanation: '"Although" (mặc dù) expresses concession despite unfavorable conditions.'
      },
      {
        question: 'Fill in the blank: "_______ television channel do you watch the most?" - "I like VTV7 because of its educational programs."',
        options: ['Which', 'How', 'Where', 'When'],
        answerIndex: 0,
        hint: 'Asking to choose among specific TV channels.',
        explanation: '"Which" is used when asking about a specific choice among a limited set.'
      },
      {
        question: 'Which sport requires a net, a shuttlecock, and two rackets?',
        options: ['Badminton', 'Football', 'Basketball', 'Swimming'],
        answerIndex: 0,
        hint: 'Cầu lông với quả cầu lông (shuttlecock) và vợt.',
        explanation: 'Badminton (môn cầu lông) is played with rackets and a feathered shuttlecock over a high net.'
      },
      {
        question: 'Choose the correct imperative for a workout session: _______ stretch your muscles before exercising vigorously!',
        options: ['Always', 'Never', 'Not', 'Don\'t always'],
        answerIndex: 0,
        hint: 'An affirmative instruction urging safety.',
        explanation: '"Always stretch your muscles..." gives positive advice for sports safety.'
      },
      {
        question: 'Complete the sentence with possessive pronoun: "Is this notebook yours?" - "No, it is not _______; it belongs to Linda."',
        options: ['mine', 'my', 'me', 'myself'],
        answerIndex: 0,
        hint: 'Possessive pronoun stands alone without a noun following it.',
        explanation: '"Mine" replaces "my notebook" as a possessive pronoun.'
      },
      {
        question: 'Choose the sentence with Future Simple expressing a prediction: Scientists predict that humans _______ on Mars in the next century.',
        options: ['will live', 'lives', 'lived', 'are living'],
        answerIndex: 0,
        hint: 'Will + bare verb predicts future events.',
        explanation: 'We use "will live" to make future scientific predictions.'
      },
      {
        question: 'Choose the modal verb expressing future possibility (50% chance): We _______ have solar-powered flying cars in 2050, but we aren\'t sure yet.',
        options: ['might', 'must', 'can\'t', 'shouldn\'t'],
        answerIndex: 0,
        hint: '"Might" expresses uncertainty or possibility.',
        explanation: '"Might" expresses tentative possibility when the speaker is not completely certain.'
      },
      {
        question: 'Complete the First Conditional: If people _______ plastic bags, the marine environment will be much cleaner.',
        options: ['stop using', 'will stop using', 'stopped', 'are stopping'],
        answerIndex: 0,
        hint: 'If-clause of Conditional Type 1 takes Present Simple: If + S + V(present).',
        explanation: 'In conditional type 1, the condition clause (If-clause) uses Present Simple: "stop using".'
      },
      {
        question: 'Which action exemplifies the "Recycle" practice in the 3Rs rule?',
        options: ['Sending plastic bottles and empty aluminum cans to a processing factory to make new items', 'Refusing to buy single-use plastic', 'Using an old glass jar as a pen container', 'Leaving the tap water running'],
        answerIndex: 0,
        hint: 'Reprocessing scrap materials into raw material for new goods.',
        explanation: '"Recycle" involves reprocessing waste materials into brand-new products.'
      },
      {
        question: 'What kind of robot can help teachers explain difficult lessons and check attendance in smart schools?',
        options: ['Teaching robot', 'Worker robot', 'Doctor robot', 'Guard robot'],
        answerIndex: 0,
        hint: 'Unit 12 vocabulary: Robots.',
        explanation: 'Teaching robots assist instructors with lessons and quizzes in digital classrooms.'
      },
      {
        question: 'Choose the word that has the underlined part pronounced differently: visited, decided, played, wanted.',
        options: ['played', 'visited', 'decided', 'wanted'],
        answerIndex: 0,
        hint: 'Verbs ending in /t/ or /d/ pronounce -ed as /ɪd/. "Played" ends in /d/.',
        explanation: '"Visited", "decided", "wanted" end in /ɪd/, whereas "played" ends in /d/.'
      },
      {
        question: 'Complete the sentence: Tokyo is one of the most _______ cities in Asia with excellent public transport.',
        options: ['modern', 'historic', 'polluted', 'quiet'],
        answerIndex: 0,
        hint: 'State-of-the-art infrastructure and technology.',
        explanation: '"Modern" describes Tokyo\'s advanced technology and high-tech transit network.'
      },
      {
        question: 'Choose the correct preposition: Robots can work _______ dangerous environments like deep mines and nuclear plants.',
        options: ['in', 'at', 'on', 'with'],
        answerIndex: 0,
        hint: 'Working within enclosed or deep areas.',
        explanation: 'We use the preposition "in" with environments (in dangerous environments).'
      },
      {
        question: 'Which of the following is an eco-friendly mode of green transportation?',
        options: ['Bicycle', 'Gasoline car', 'Diesel truck', 'Motorbike'],
        answerIndex: 0,
        hint: 'Powered by human legs, zero tailpipe emissions.',
        explanation: 'Bicycles produce zero carbon emissions, representing green transportation.'
      },
      {
        question: 'Complete the sentence: "_______ did you go to Da Nang last summer?" - "We went by airplane."',
        options: ['How', 'Why', 'When', 'Who'],
        answerIndex: 0,
        hint: 'Asking about means of transport.',
        explanation: '"How" is used to inquire about the means of transportation.'
      },
      {
        question: 'Choose the sentence with correct grammar for Past Simple negative:',
        options: ['She didn\'t watch the football match on TV last night.', 'She didn\'t watched the football match on TV last night.', 'She not watch the football match on TV last night.', 'She doesn\'t watched the football match on TV last night.'],
        answerIndex: 0,
        hint: 'Negative past simple: S + didn\'t + bare verb.',
        explanation: 'In negative past simple, auxiliary "didn\'t" is followed by bare infinitive "watch".'
      }
    ]
  },

  // 14. GIÁO DỤC CÔNG DÂN 6 - HỌC KỲ 2 (18 QUESTIONS)
  {
    id: 'quiz-g6-s2-civics',
    title: 'Giáo dục công dân 6 - Kiểm tra Giữa học kỳ 2: Tự lập, Tiết kiệm & Quyền cơ bản của trẻ em',
    titleEn: 'Civic Education 6 - Sem 2: Independence, Frugality & Children\'s Rights',
    grade: 6,
    semester: 2,
    subject: 'GDCD',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'social',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Chương trình chuẩn HK2 GDCD 6: Đức tính tự lập, đức tính tiết kiệm, công dân nước CHXHCN Việt Nam, 4 nhóm quyền cơ bản của trẻ em và bổn phận của trẻ em.',
    descriptionEn: 'Sem 2 Civics: Self-reliance, thriftiness, Vietnamese citizenship, 4 core groups of child rights.',
    questions: [
      {
        question: 'Tính tự lập trong học tập và đời sống hàng ngày được hiểu là gì?',
        options: ['Tự làm lấy công việc của mình, không trông chờ, ỷ lại hay dựa dẫm vào người khác', 'Từ chối nghe lời khuyên bảo đúng đắn của cha mẹ', 'Luôn đòi hỏi người khác phải phục vụ mình', 'Làm việc theo cảm tính bất chấp đúng sai'],
        answerIndex: 0,
        hint: 'Chủ động hoàn thành bổn phận của bản thân.',
        explanation: 'Tự lập là khả năng tự giải quyết các công việc cá nhân mà không dựa dẫm vào người khác.'
      },
      {
        question: 'Hành động nào dưới đây là biểu hiện của một học sinh có tính tự lập?',
        options: ['Tự giác hoàn thành bài tập về nhà, tự gấp chăn màn và chuẩn bị sách vở đi học', 'Đợi bố mẹ nhắc nhở nhiều lần mới chịu ngồi vào bàn học', 'Nhờ bạn làm hộ bài tập về nhà', 'Đòi bố mẹ phải dọn dẹp phòng ngủ cho mình'],
        answerIndex: 0,
        hint: 'Tự giác thực hiện công việc cá nhân không cần ai thúc giục.',
        explanation: 'Tự giác học tập và dọn dẹp đồ đạc cá nhân là biểu hiện chân thực của tính tự lập tuổi học trò.'
      },
      {
        question: 'Người có tính tự lập sẽ nhận được giá trị quý báu nào trong cuộc sống?',
        options: ['Tự tin, bản lĩnh, dễ thích nghi với hoàn cảnh và được mọi người tin tưởng, nể phục', 'Sẽ bị bạn bè xa lánh', 'Sẽ luôn gặp thất bại', 'Không được bố mẹ yêu thương'],
        answerIndex: 0,
        hint: 'Rèn luyện khả năng thích ứng và thành công trong tương lai.',
        explanation: 'Tự lập giúp con người vững vàng, làm chủ cuộc sống và gặt hái thành công.'
      },
      {
        question: 'Đức tính "Tiết kiệm" được định nghĩa chuẩn xác là:',
        options: ['Sử dụng hợp lý, đúng mức của cải vật chất, thời gian, công sức của mình và của người khác', 'Keo kiệt, bủn xỉn, không dám chi tiêu ngay cả khi cần thiết', 'Tiêu xài hoang phí tiền bạc của bố mẹ', 'Chỉ tiết kiệm tiền, lãng phí thời gian'],
        answerIndex: 0,
        hint: 'Sử dụng hợp lý, tránh lãng phí tiền của, công sức và thời gian.',
        explanation: 'Tiết kiệm là biết sử dụng tiền của, thời gian, năng lượng một cách hiệu quả và đúng mục đích, khác với keo kiệt.'
      },
      {
        question: 'Hành vi nào dưới đây thể hiện sự tiết kiệm trong sinh hoạt gia đình và nhà trường?',
        options: ['Tắt đèn và quạt điện khi ra khỏi lớp học; khóa vòi nước sau khi rửa tay', 'Xả nước tràn bồn rửa để nghịch', 'Bỏ thừa nhiều thức ăn vào thùng rác mỗi bữa', 'Đòi bố mẹ mua đồ chơi đắt tiền liên tục'],
        answerIndex: 0,
        hint: 'Bảo tồn điện, nước và chống lãng phí lương thực.',
        explanation: 'Tắt điện khi không dùng và tiết kiệm nước là hành động thiết thực rèn luyện thói quen tiết kiệm.'
      },
      {
        question: 'Câu thành ngữ nào dưới đây khuyên răn chúng ta về lối sống cần kiệm, biết tích lũy cho tương lai?',
        options: ['Tích tiểu thành đại', 'Bóc ngắn cắn dài', 'Vung tay quá trán', 'Tiêu tiền như rác'],
        answerIndex: 0,
        hint: 'Tích góp từng việc nhỏ, từng đồng nhỏ thành tài sản lớn.',
        explanation: '"Tích tiểu thành đại" khuyên ta biết chắt chiu, gom góp từ những điều nhỏ bé để nên việc lớn.'
      },
      {
        question: 'Công dân nước Cộng hòa xã hội chủ nghĩa Việt Nam là ai?',
        options: ['Người có quốc tịch Việt Nam', 'Tất cả mọi người đang sinh sống trên lãnh thổ Việt Nam', 'Chỉ những người sinh ra ở thủ đô Hà Nội', 'Chỉ người đã thành niên từ 18 tuổi trở lên'],
        answerIndex: 0,
        hint: 'Căn cứ pháp lý duy nhất xác định công dân là Quốc tịch.',
        explanation: 'Hiến pháp quy định: Công dân nước Cộng hòa XHCN Việt Nam là người có quốc tịch Việt Nam.'
      },
      {
        question: 'Giấy tờ pháp lý quan trọng nhất do cơ quan nhà nước có thẩm quyền cấp chứng minh một người có quốc tịch Việt Nam là:',
        options: ['Giấy khai sinh (hoặc Căn cước công dân, Hộ chiếu Việt Nam)', 'Thẻ học sinh', 'Sổ hộ khẩu cũ', 'Thẻ bảo hiểm y tế tư nhân'],
        answerIndex: 0,
        hint: 'Giấy tờ đăng ký khai sinh xác lập quan hệ quốc tịch từ khi chào đời.',
        explanation: 'Giấy khai sinh và Căn cước công dân là văn bản pháp lý chính thức xác định tư cách công dân Việt Nam.'
      },
      {
        question: 'Theo Công ước Liên Hợp Quốc và Luật Trẻ em Việt Nam, 4 nhóm quyền cơ bản của trẻ em gồm:',
        options: ['Quyền Sống còn, Quyền Bảo vệ, Quyền Phát triển và Quyền Tham gia', 'Quyền được chơi game, Quyền ngủ nướng, Quyền tự do, Quyền ăn ngon', 'Quyền đi làm sớm, Quyền lái xe máy, Quyền kinh doanh, Quyền bầu cử', 'Quyền không đi học, Quyền xem tivi cả ngày, Quyền mua sắm, Quyền đi chơi'],
        answerIndex: 0,
        hint: '4 trụ cột quyền lợi quốc tế của trẻ em.',
        explanation: '4 nhóm quyền cơ bản: Sống còn (được chăm sóc dinh dưỡng), Bảo vệ (chống bạo lực), Phát triển (học tập), Tham gia (bày tỏ ý kiến).'
      },
      {
        question: 'Trẻ em được tiêm chủng vaccine phòng bệnh miễn phí và được chăm sóc sức khỏe khi ốm đau thuộc nhóm quyền nào?',
        options: ['Nhóm quyền Sống còn', 'Nhóm quyền Tham gia', 'Nhóm quyền Tự do ngôn luận', 'Nhóm quyền Sở hữu'],
        answerIndex: 0,
        hint: 'Bảo đảm quyền được sống và có sức khỏe tốt nhất.',
        explanation: 'Chăm sóc y tế và dinh dưỡng bảo vệ tính mạng trẻ em thuộc nhóm Quyền Sống còn.'
      },
      {
        question: 'Trẻ em được đến trường học tập, vui chơi giải trí và phát triển năng khiếu nghệ thuật thể thao thuộc nhóm quyền nào?',
        options: ['Nhóm quyền Phát triển', 'Nhóm quyền Bảo vệ', 'Nhóm quyền Sống còn', 'Nhóm quyền Hình sự'],
        answerIndex: 0,
        hint: 'Phát triển toàn diện về thể chất, trí tuệ và tinh thần.',
        explanation: 'Được học hành, vui chơi và phát triển tài năng là nội dung cốt lõi của Quyền Phát triển.'
      },
      {
        question: 'Trẻ em được bảo vệ khỏi mọi hình thức bạo lực học đường, bóc lột sức lao động và xâm hại thân thể thuộc nhóm quyền nào?',
        options: ['Nhóm quyền Bảo vệ', 'Nhóm quyền Sống còn', 'Nhóm quyền Tham gia', 'Nhóm quyền Kinh tế'],
        answerIndex: 0,
        hint: 'Bảo vệ an toàn tính mạng, nhân phẩm và danh dự.',
        explanation: 'Quyền Bảo vệ giữ gìn trẻ em an toàn trước bạo lực, lạm dụng và bóc lột.'
      },
      {
        question: 'Trẻ em được bày tỏ ý kiến, nguyện vọng của mình trong các buổi đối thoại học đường hay Diễn đàn Trẻ em thuộc nhóm quyền nào?',
        options: ['Nhóm quyền Tham gia', 'Nhóm quyền Sống còn', 'Nhóm quyền Sở hữu', 'Nhóm quyền Bầu cử'],
        answerIndex: 0,
        hint: 'Quyền được lắng nghe và tôn trọng tiếng nói.',
        explanation: 'Nhóm quyền Tham gia đảm bảo trẻ em được nói lên suy nghĩ và tham gia vào các quyết định liên quan đến mình.'
      },
      {
        question: 'Bên cạnh việc hưởng các quyền lợi, trẻ em có BỔN PHẬN nào đối với gia đình?',
        options: ['Kính trọng, lễ phép, vâng lời ông bà cha mẹ và giúp đỡ công việc nhà vừa sức', 'Đòi hỏi bố mẹ phải mua cho mọi món đồ mình thích', 'Được quyền không làm bất cứ việc nhà nào', 'Bỏ nhà đi chơi khi không vừa ý'],
        answerIndex: 0,
        hint: 'Hiếu thảo và phụ giúp công việc gia đình.',
        explanation: 'Luật Trẻ em quy định rõ bổn phận hiếu thảo, vâng lời và đỡ đần cha mẹ.'
      },
      {
        question: 'Đối với nhà trường và xã hội, bổn phận quan trọng hàng đầu của mỗi học sinh là gì?',
        options: ['Chăm chỉ học tập, rèn luyện đạo đức, tôn trọng thầy cô và chấp hành tốt pháp luật', 'Chỉ cần học giỏi mà không cần rèn luyện đạo đức', 'Đánh nhau để khẳng định bản thân', 'Vẽ bậy lên tường lớp học và bàn ghế'],
        answerIndex: 0,
        hint: 'Tôn sư trọng đạo và tuân thủ nội quy, luật pháp.',
        explanation: 'Học sinh có bổn phận học tập tốt, tôn kính thầy cô, đoàn kết với bạn bè và tuân thủ luật pháp.'
      },
      {
        question: 'Hành vi bắt trẻ em dưới độ tuổi lao động phải làm việc nặng nhọc, nguy hiểm là hành vi vi phạm điều gì?',
        options: ['Vi phạm quyền được bảo vệ của trẻ em và pháp luật bảo vệ quyền trẻ em', 'Là điều bình thường giúp trẻ em có tiền', 'Được pháp luật khuyến khích', 'Là việc riêng của gia đình không ai có quyền can thiệp'],
        answerIndex: 0,
        hint: 'Bóc lột lao động trẻ em là hành vi bị pháp luật nghiêm cấm.',
        explanation: 'Ép buộc trẻ em làm việc nặng nhọc là bóc lột sức lao động, xâm phạm nghiêm trọng quyền trẻ em.'
      },
      {
        question: 'Khi phát hiện một bạn cùng lớp có dấu hiệu bị bạo lực gia đình hoặc xâm hại, em cần làm gì?',
        options: ['Báo ngay cho thầy cô giáo chủ nhiệm, cha mẹ hoặc gọi Tổng đài Quốc gia Bảo vệ Trẻ em 111', 'Quay video đăng lên mạng xã hội để câu like', 'Giữ im lặng coi như không biết', 'Rủ các bạn khác đến đánh nhau trả thù'],
        answerIndex: 0,
        hint: 'Gọi tổng đài miễn phí 111 để được hỗ trợ bảo vệ khẩn cấp.',
        explanation: 'Tổng đài 111 hoạt động 24/7 để tiếp nhận, can thiệp và bảo vệ trẻ em trước mọi nguy cơ bị bạo lực.'
      },
      {
        question: 'Vì sao trẻ em không được phép điều khiển xe mô tô, xe gắn máy có dung tích xi lanh từ 50 cm³ trở lên khi tham gia giao thông?',
        options: ['Vì chưa đủ độ tuổi và năng lực hành vi để xử lý an toàn, vi phạm Luật Giao thông đường bộ', 'Vì xe máy chạy chậm hơn xe đạp', 'Vì xe máy tốn xăng', 'Vì trường học không có chỗ gửi xe'],
        answerIndex: 0,
        hint: 'Luật Giao thông quy định người từ đủ 18 tuổi trở lên mới được lái xe mô tô từ 50cc.',
        explanation: 'Học sinh THCS chưa đủ tuổi lái xe máy, không đảm bảo an toàn tính mạng cho bản thân và cộng đồng.'
      }
    ]
  },

  // 15. TIN HỌC 6 - HỌC KỲ 2 (18 QUESTIONS)
  {
    id: 'quiz-g6-s2-informatics',
    title: 'Tin học 6 - Kiểm tra Giữa học kỳ 2: Thuật toán, Sơ đồ khối & Lập trình trực quan Scratch',
    titleEn: 'Informatics 6 - Sem 2: Algorithms, Flowcharts & Scratch Programming',
    grade: 6,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Chương trình chuẩn HK2 Tin học 6: Khái niệm thuật toán, 3 tính chất thuật toán, sơ đồ khối quy chuẩn, cấu trúc rẽ nhánh, cấu trúc lặp, môi trường lập trình trực quan Scratch.',
    descriptionEn: 'Sem 2 Informatics: Algorithms, flowchart conventions, conditional branching, loops, visual block coding in Scratch.',
    questions: [
      {
        question: 'Thuật toán (Algorithm) được định nghĩa chuẩn xác là gì?',
        options: ['Dãy hữu hạn các chỉ dẫn từng bước rõ ràng, xác định để giải quyết một bài toán hay nhiệm vụ', 'Một trò chơi điện tử trên máy tính', 'Một linh kiện điện tử gắn trong CPU', 'Dây cáp mạng Internet'],
        answerIndex: 0,
        hint: 'Quy trình các bước làm rõ ràng từ dữ liệu vào (Input) đến kết quả ra (Output).',
        explanation: 'Thuật toán là chuỗi các thao tác từng bước chính xác nhằm biến đổi Input thành Output mong muốn.'
      },
      {
        question: 'Ba tính chất cốt lõi không thể thiếu của mọi thuật toán là gì?',
        options: ['Tính dừng (hữu hạn), tính xác định và tính đúng đắn', 'Tính dài dòng, tính phức tạp và tính bảo mật', 'Tính ngẫu nhiên, tính tự do và tính nhanh chóng', 'Tính vô tận, tính bất định và tính tự động'],
        answerIndex: 0,
        hint: 'Phải kết thúc sau số bước hữu hạn và đưa ra kết quả chính xác.',
        explanation: 'Thuật toán phải: Dừng (hữu hạn số bước), Xác định (mỗi bước rõ ràng không mập mờ) và Đúng đắn (cho ra kết quả đúng).'
      },
      {
        question: 'Trong sơ đồ khối thuật toán (Flowchart), hình Oval (hoặc hình chữ nhật bo tròn) biểu diễn thao tác gì?',
        options: ['Bắt đầu (Start) hoặc Kết thúc (End) của thuật toán', 'Một phép tính toán xử lý dữ liệu', 'Một điều kiện so sánh rẽ nhánh', 'Nhập hoặc xuất dữ liệu'],
        answerIndex: 0,
        hint: 'Nằm ở điểm mở đầu và điểm chốt cuối cùng của sơ đồ khối.',
        explanation: 'Quy ước quốc tế: Hình Oval đại diện cho nút Bắt đầu hoặc Kết thúc của thuật toán.'
      },
      {
        question: 'Hình chữ nhật trong sơ đồ khối biểu diễn thao tác nào?',
        options: ['Bước xử lý, tính toán hoặc gán giá trị', 'Điểm bắt đầu thuật toán', 'Kiểm tra điều kiện đúng/sai', 'Nhập dữ liệu từ bàn phím'],
        answerIndex: 0,
        hint: 'Ví dụ: Tính tổng Tổng = a + b.',
        explanation: 'Hình chữ nhật dùng để mô tả các thao tác tính toán, xử lý dữ liệu cụ thể.'
      },
      {
        question: 'Hình thoi trong sơ đồ khối được sử dụng để làm gì?',
        options: ['Kiểm tra điều kiện để rẽ nhánh (Đúng / Sai)', 'Bắt đầu thuật toán', 'Kết thúc thuật toán', 'In kết quả ra màn hình'],
        answerIndex: 0,
        hint: 'Có hai hướng đi ra: Đúng (Yes/True) hoặc Sai (No/False).',
        explanation: 'Hình thoi chứa biểu thức điều kiện so sánh, rẽ thành hai nhánh luồng xử lý.'
      },
      {
        question: 'Hình bình hành trong sơ đồ khối chuẩn dùng để biểu diễn thao tác gì?',
        options: ['Nhập dữ liệu vào (Input) hoặc Xuất kết quả ra (Output)', 'Bước tính toán cộng trừ', 'Bước lặp lại vô tận', 'Kiểm tra điều kiện đúng sai'],
        answerIndex: 0,
        hint: 'Nhập a, b hoặc Xuất ra màn hình giá trị lớn nhất.',
        explanation: 'Hình bình hành chuẩn quy ước cho các thao tác Nhập/Xuất (Input/Output).'
      },
      {
        question: 'Cấu trúc rẽ nhánh (Selection structure) trong thuật toán được dùng khi nào?',
        options: ['Khi một hành động chỉ được thực hiện tùy thuộc vào một điều kiện nào đó là Đúng hay Sai', 'Khi cần lặp đi lặp lại một việc mãi mãi', 'Khi các bước luôn thực hiện tuần tự từ trên xuống dưới', 'Khi không cần giải bài toán'],
        answerIndex: 0,
        hint: 'Ví dụ: "Nếu trời mưa thì mang ô, ngược lại thì không mang ô".',
        explanation: 'Cấu trúc rẽ nhánh (Nếu... Thì... Không thì...) điều khiển luồng thực thi dựa trên kết quả kiểm tra điều kiện.'
      },
      {
        question: 'Cấu trúc lặp (Loop / Repetition) trong thuật toán có ý nghĩa gì?',
        options: ['Thực hiện lặp lại một nhóm lệnh nhiều lần cho đến khi thỏa mãn điều kiện dừng', 'Chỉ chạy đúng một lần rồi tắt máy', 'Làm cho máy tính bị treo', 'Xóa toàn bộ dữ liệu máy tính'],
        answerIndex: 0,
        hint: 'Ví dụ: Lặp lại 10 lần việc bước về phía trước 1 bước.',
        explanation: 'Cấu trúc lặp giúp thực thi một đoạn lệnh nhiều lần tự động mà không cần viết lại lệnh.'
      },
      {
        question: 'Trong môi trường lập trình trực quan Scratch, nhân vật mặc định ban đầu là hình con vật gì?',
        options: ['Chú mèo vàng Scratch (Scratch Cat)', 'Con gấu trúc', 'Con đại bàng', 'Chú chó đốm'],
        answerIndex: 0,
        hint: 'Biểu tượng chú mèo màu vàng nổi tiếng của phần mềm Scratch.',
        explanation: 'Mèo Scratch là linh vật và nhân vật (sprite) mặc định khi tạo dự án mới trong Scratch.'
      },
      {
        question: 'Để nhân vật trong Scratch di chuyển về phía trước 10 bước, ta sử dụng khối lệnh nào trong nhóm Chuyển động (Motion)?',
        options: ['di chuyển 10 bước (move 10 steps)', 'nói "Xin chào!" trong 2 giây', 'xoay 180 độ', 'ẩn'],
        answerIndex: 0,
        hint: 'Khối lệnh màu xanh lam đầu tiên trong nhóm Motion.',
        explanation: 'Khối lệnh "di chuyển 10 bước" (move 10 steps) điều khiển nhân vật tiến lên theo hướng hiện tại.'
      },
      {
        question: 'Khối lệnh "lặp lại 10 lần" (repeat 10) trong Scratch thuộc nhóm lệnh nào?',
        options: ['Điều khiển (Control - màu cam)', 'Chuyển động (Motion - màu xanh lam)', 'Hiển thị (Looks - màu tím)', 'Âm thanh (Sound - màu hồng)'],
        answerIndex: 0,
        hint: 'Nhóm lệnh chứa các cấu trúc lặp, rẽ nhánh nếu... thì... có màu cam.',
        explanation: 'Các khối lệnh cấu trúc điều khiển (lặp, rẽ nhánh, dừng) nằm trong nhóm Control (màu cam).'
      },
      {
        question: 'Để kiểm tra xem nhân vật có chạm vào con trỏ chuột hay chạm vào cạnh sân khấu không, ta dùng nhóm lệnh nào?',
        options: ['Cảm biến (Sensing - màu xanh lơ)', 'Sự kiện (Events - màu vàng)', 'Các phép toán (Operators - màu xanh lục)', 'Biến số (Variables)'],
        answerIndex: 0,
        hint: 'Nhóm lệnh nhận biết tương tác va chạm, vị trí chuột, bàn phím.',
        explanation: 'Nhóm Sensing (Cảm biến) chứa các khối lệnh hình lục giác kiểm tra va chạm, nhấn phím.'
      },
      {
        question: 'Khối lệnh nào thường được dùng để BẮT ĐẦU kịch bản chạy trong Scratch khi người dùng bấm vào lá cờ xanh?',
        options: ['Khi bấm vào lá cờ xanh (when green flag clicked)', 'Khi bấm phím cách', 'Khi phông nền đổi', 'Dừng lại tất cả'],
        answerIndex: 0,
        hint: 'Khối lệnh sự kiện hình chiếc mũ có biểu tượng lá cờ xanh.',
        explanation: '"When green flag clicked" là khối lệnh kích hoạt kịch bản chạy chương trình phổ biến nhất.'
      },
      {
        question: 'Trong thuật toán tính chu vi hình chữ nhật với chiều dài a và chiều rộng b, công thức tính là:',
        options: ['P = (a + b) × 2', 'P = a × b', 'P = a + b', 'P = a × b × 2'],
        answerIndex: 0,
        hint: 'Tổng chiều dài và chiều rộng nhân đôi.',
        explanation: 'Chu vi hình chữ nhật P = (a + b) × 2; diện tích S = a × b.'
      },
      {
        question: 'Biến số (Variable) trong lập trình được sử dụng để làm gì?',
        options: ['Lưu trữ giá trị dữ liệu có thể thay đổi trong quá trình chạy chương trình (như điểm số, thời gian)', 'Vẽ hình nền sân khấu', 'Phát ra âm thanh bài hát', 'Đổi màu áo nhân vật'],
        answerIndex: 0,
        hint: 'Ví dụ: biến Điểm_số (Score) tăng lên 1 điểm mỗi khi trả lời đúng.',
        explanation: 'Biến số là một vùng nhớ được đặt tên dùng để lưu trữ dữ liệu biến đổi trong lúc chương trình chạy.'
      },
      {
        question: 'Thuật toán tìm giá trị lớn nhất (Max) của hai số a và b có điều kiện rẽ nhánh là:',
        options: ['Nếu a > b thì Max = a; Ngược lại thì Max = b', 'Nếu a = b thì Max = 0', 'Max luôn luôn bằng a + b', 'Nếu a < b thì Max = a'],
        answerIndex: 0,
        hint: 'So sánh a với b, số nào lớn hơn thì gán cho Max.',
        explanation: 'Nếu a > b thì số lớn nhất là a, ngược lại nếu a ≤ b thì số lớn nhất là b.'
      },
      {
        question: 'Hành động nào dưới đây là lỗi thường gặp khiến chương trình Scratch bị lặp vô tận không dừng?',
        options: ['Đặt điều kiện lặp mà điều kiện đó không bao giờ xảy ra hoặc không bao giờ sai', 'Bấm vào nút cờ xanh', 'Tạo nhân vật chú mèo', 'Chèn thêm âm thanh tiếng kêu meo meo'],
        answerIndex: 0,
        hint: 'Vòng lặp không có lối thoát khiến máy tính chạy mãi mãi.',
        explanation: 'Vòng lặp vô tận xảy ra khi không thiết lập điều kiện dừng hoặc điều kiện dừng không bao giờ đạt tới.'
      },
      {
        question: 'Lập trình trực quan kéo thả khối lệnh như Scratch giúp ích gì cho học sinh lứa tuổi THCS?',
        options: ['Rèn luyện tư duy logic giải quyết vấn đề, tính sáng tạo mà không bị cản trở bởi lỗi cú pháp gõ chữ', 'Chỉ giúp chơi game thư giãn', 'Không có tác dụng gì cho việc học Toán', 'Khiến học sinh lười suy nghĩ'],
        answerIndex: 0,
        hint: 'Tập trung phát triển tư duy thuật toán trực quan sinh động.',
        explanation: 'Khối lệnh trực quan giúp học sinh tiếp cận tư duy máy tính logic, rèn luyện kỹ năng phân tích và sáng tạo game giáo dục.'
      }
    ]
  },

  // 16. CÔNG NGHỆ 6 - HỌC KỲ 2 (18 QUESTIONS)
  {
    id: 'quiz-g6-s2-technology',
    title: 'Công nghệ 6 - Kiểm tra Giữa học kỳ 2: Trang phục, Thời trang & Đồ dùng điện gia đình',
    titleEn: 'Technology 6 - Sem 2: Apparel, Fashion & Home Electric Appliances',
    grade: 6,
    semester: 2,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'tech',
    difficulty: 'medium',
    durationMinutes: 45,
    xpReward: 180,
    description: 'Chương trình chuẩn HK2 Công nghệ 6: Nguồn gốc và tính chất các loại vải may mặc, lựa chọn và bảo quản trang phục, thời trang và phong cách, đồ dùng điện quang, điện nhiệt, điện cơ, an toàn và tiết kiệm điện.',
    descriptionEn: 'Sem 2 Technology: Fabrics, apparel selection, fashion styles, electrical appliances, home electrical safety.',
    questions: [
      {
        question: 'Vải sợi tự nhiên (như vải sợi bông cotton, vải tơ tằm) có nguồn gốc từ đâu?',
        options: ['Từ sợi cây bông, sợi gai, tơ của kén con tằm', 'Từ than đá và dầu mỏ qua chế biến hóa học', 'Từ kim loại đồng và nhôm', 'Từ đất sét nung'],
        answerIndex: 0,
        hint: 'Có nguồn gốc tự nhiên từ thực vật và động vật.',
        explanation: 'Vải tự nhiên dệt từ sợi cây trồng (bông, lanh) hoặc tơ kén động vật (tơ tằm).'
      },
      {
        question: 'Ưu điểm nổi bật nhất của vải sợi bông (Cotton) khi mặc vào mùa hè là gì?',
        options: ['Thấm hút mồ hôi cực tốt, thoáng mát, mềm mại và an toàn cho da', 'Hoàn toàn không bao giờ bị nhăn', 'Rất khó giặt sạch', 'Không thấm một giọt nước nào'],
        answerIndex: 0,
        hint: 'Mát mẻ, thấm hút mồ hôi, dễ chịu khi thời tiết nắng nóng.',
        explanation: 'Vải cotton thoáng mát, hút ẩm mồ hôi cao, rất thích hợp may trang phục mùa hè.'
      },
      {
        question: 'Vải sợi tổng hợp (như sợi Polyester, Nylon) có ưu điểm nào vượt trội so với vải tự nhiên?',
        options: ['Rất bền chắc, không bị nhăn khi vò, giặt nhanh khô và có giá thành rẻ', 'Thấm hút mồ hôi tốt hơn vải cotton', 'Mặc vào mùa hè rất mát', 'Dễ bị mọt cắn phá'],
        answerIndex: 0,
        hint: 'Bền, ít nhăn, chống nhàu tốt và khô rất nhanh.',
        explanation: 'Vải sợi nhân tạo tổng hợp bền cơ học, chống nhăn, ít bám bẩn và mau khô khi phơi.'
      },
      {
        question: 'Vải sợi pha là loại vải như thế nào?',
        options: ['Vải được dệt từ sự kết hợp giữa hai hay nhiều loại sợi khác nhau để kết hợp các ưu điểm của chúng', 'Loại vải rẻ tiền kém chất lượng', 'Vải chỉ nhuộm nhiều màu sắc lòe loẹt', 'Vải dệt từ sợi sắt thép'],
        answerIndex: 0,
        hint: 'Ví dụ: Vải pha Cotton - Polyester (vừa thoáng mát vừa không nhăn).',
        explanation: 'Vải sợi pha tận dụng ưu điểm thoáng mát của sợi tự nhiên và độ bền, chống nhăn của sợi tổng hợp.'
      },
      {
        question: 'Để tạo cảm giác vóc dáng trông thon gọn và cao hơn, một người có thân hình mập mạp nên chọn trang phục thế nào?',
        options: ['Chọn vải màu tối, kẻ sọc dọc, hoa văn nhỏ li ti, kiểu may vừa vặn', 'Chọn vải màu trắng sáng bóng, kẻ sọc ngang to bản', 'Mặc quần áo quá rộng thùng thình', 'Mặc áo hoa văn sặc sỡ bản to'],
        answerIndex: 0,
        hint: 'Màu tối và đường kẻ dọc tạo hiệu ứng thị giác thon dài.',
        explanation: 'Màu tối, hoa văn nhỏ và kẻ sọc dọc tạo cảm giác thân hình thanh mảnh và cao hơn.'
      },
      {
        question: 'Kí hiệu hình chiếc bàn là (ủi) có một dấu chấm tròn ở giữa trên nhãn mác quần áo có ý nghĩa gì?',
        options: ['Được phép là ở nhiệt độ thấp (dưới 110°C)', 'Tuyệt đối cấm không được là', 'Là ở nhiệt độ tối đa 200°C', 'Chỉ được giặt khô'],
        answerIndex: 0,
        hint: 'Một chấm: nhiệt độ thấp; hai chấm: nhiệt độ vừa; ba chấm: nhiệt độ cao.',
        explanation: 'Biểu tượng bàn là 1 chấm chỉ định là ủi ở mức nhiệt độ thấp an toàn cho sợi vải tổng hợp.'
      },
      {
        question: 'Đèn điện LED được xếp vào nhóm đồ dùng điện nào theo nguyên lí biến đổi năng lượng?',
        options: ['Đồ dùng loại điện - quang (biến điện năng thành quang năng phát sáng)', 'Đồ dùng loại điện - nhiệt', 'Đồ dùng loại điện - cơ', 'Đồ dùng loại từ tính'],
        answerIndex: 0,
        hint: 'Biến điện năng thành ánh sáng chiếu sáng.',
        explanation: 'Đèn LED, đèn huỳnh quang, đèn sợi đốt thuộc nhóm đồ dùng điện - quang biến điện thành ánh sáng.'
      },
      {
        question: 'Ưu điểm vượt trội của bóng đèn LED so với bóng đèn sợi đốt truyền thống là gì?',
        options: ['Hiệu suất phát quang cao, tiết kiệm đến 80% điện năng và tuổi thọ rất cao', 'Tỏa ra rất nhiều nhiệt nóng rát', 'Giá thành đắt và rất tốn điện', 'Dễ bị nổ khi sử dụng'],
        answerIndex: 0,
        hint: 'Tiết kiệm điện vượt trội và tuổi thọ lên tới hàng chục nghìn giờ.',
        explanation: 'Đèn LED tiêu thụ rất ít điện năng, phát nhiệt thấp và tuổi thọ cao gấp nhiều lần đèn sợi đốt.'
      },
      {
        question: 'Đồ dùng điện nào dưới đây thuộc nhóm Đồ dùng loại Điện - Nhiệt (biến điện năng thành nhiệt năng)?',
        options: ['Nồi cơm điện, Bàn là điện, Bình nước nóng', 'Quạt trần, Máy xay sinh tố', 'Tivi, Máy tính để bàn', 'Máy hút bụi, Máy giặt'],
        answerIndex: 0,
        hint: 'Dùng dây đốt nóng bằng hợp kim điện trở cao để sinh nhiệt đun nấu, ủi quần áo.',
        explanation: 'Bàn là, nồi cơm, ấm đun nước sử dụng dây đốt nóng để chuyển điện năng thành nhiệt năng.'
      },
      {
        question: 'Bộ phận quan trọng nhất trong bàn là điện và nồi cơm điện trực tiếp biến đổi điện năng thành nhiệt năng là:',
        options: ['Dây đốt nóng (điện trở nhiệt)', 'Vỏ nhựa bên ngoài', 'Đèn báo hiệu nguồn', 'Dây dẫn điện'],
        answerIndex: 0,
        hint: 'Dây hợp kim niken - crom chịu nhiệt độ cao.',
        explanation: 'Dây đốt nóng làm bằng hợp kim có điện trở suất cao, phát nhiệt mạnh khi có dòng điện chạy qua.'
      },
      {
        question: 'Quạt điện và máy xay sinh tố thuộc nhóm đồ dùng điện nào?',
        options: ['Đồ dùng loại Điện - Cơ (biến điện năng thành cơ năng làm quay động cơ)', 'Đồ dùng loại Điện - Quang', 'Đồ dùng loại Điện - Nhiệt', 'Đồ dùng loại Hóa học'],
        answerIndex: 0,
        hint: 'Có động cơ điện bên trong làm quay cánh quạt hoặc lưỡi dao.',
        explanation: 'Quạt điện và máy xay dùng động cơ điện biến điện năng thành cơ năng quay.'
      },
      {
        question: 'Bộ phận chính bên trong động cơ điện của quạt điện gồm hai phần cơ bản là:',
        options: ['Stato (phần đứng yên) và Roto (phần quay)', 'Cánh quạt và vỏ quạt', 'Phích cắm và công tắc', 'Tuabin và bóng đèn'],
        answerIndex: 0,
        hint: 'Phần tĩnh stato tạo từ trường và phần quay roto nhận lực từ.',
        explanation: 'Động cơ điện gồm 2 phần chính: Stato (phần cảm đứng yên) và Roto (phần ứng quay).'
      },
      {
        question: 'Thông số kĩ thuật ghi trên một chiếc quạt điện: "220V - 45W" cho ta biết điều gì?',
        options: ['Điện áp định mức là 220 Vôn và Công suất định mức là 45 Oát', 'Quạt chạy bằng pin 220 vôn', 'Cân nặng của quạt là 45 kg', 'Quạt có 220 cánh quạt'],
        answerIndex: 0,
        hint: 'Vôn (V) là đơn vị điện áp; Oát (W) là đơn vị công suất tiêu thụ điện.',
        explanation: '220V là điện áp lưới điện phù hợp để cắm quạt; 45W là lượng điện năng tiêu thụ trong 1 giờ hoạt động bình thường.'
      },
      {
        question: 'Hành động nào dưới đây vi phạm nghiêm trọng quy tắc an toàn khi sử dụng đồ dùng điện trong gia đình?',
        options: ['Rút phích cắm điện bằng cách cầm nắm trực tiếp vào dây điện giật mạnh ra', 'Cầm vào phần nhựa cách điện của phích cắm khi rút', 'Ngắt cầu dao điện trước khi sửa chữa bóng đèn', 'Không chạm tay ướt vào công tắc điện'],
        answerIndex: 0,
        hint: 'Giật dây có thể làm đứt gãy lõi đồng bên trong gây chập điện cháy nổ.',
        explanation: 'Tuyệt đối không giật dây điện; phải cầm vào thân phích cắm nhựa cách điện để rút.'
      },
      {
        question: 'Để sử dụng bàn là điện an toàn và tiết kiệm điện, ta nên làm gì?',
        options: ['Phân loại quần áo theo chất liệu vải trước khi là và rút phích cắm trước khi kết thúc vài phút để tận dụng nhiệt dư', 'Bật bàn là ở mức nhiệt độ cao nhất cho tất cả các loại vải', 'Để mặt bàn là nóng áp trực tiếp lên thảm sàn nhà rồi đi làm việc khác', 'Vừa là quần áo vừa dùng tay ướt vẩy nước vào ổ điện'],
        answerIndex: 0,
        hint: 'Là vải mỏng trước, vải dày sau và tận dụng nhiệt tích lũy.',
        explanation: 'Phân loại vải và tận dụng nhiệt dư của bàn là giúp bảo vệ quần áo và tiết kiệm đáng kể điện năng.'
      },
      {
        question: 'Thiết bị nào trong mạng điện gia đình có chức năng tự động ngắt mạch điện khi xảy ra sự cố quá tải hoặc ngắn mạch (chập điện)?',
        options: ['Aptomat (Cầu dao tự động / Circuit Breaker)', 'Công tắc điện', 'Bóng đèn LED', 'Ổ cắm điện đôi'],
        answerIndex: 0,
        hint: 'Thiết bị bảo vệ tự động bật cần gạt xuống khi chập điện.',
        explanation: 'Aptomat tự động ngắt dòng điện tức thì khi có hiện tượng quá tải hoặc chập mạch để chống cháy nổ.'
      },
      {
        question: 'Khi phát hiện có người bị điện giật trong nhà, hành động cấp cứu ĐẦU TIÊN và quan trọng nhất là gì?',
        options: ['Nhanh chóng ngắt ngay cầu dao điện (Aptomat) hoặc dùng vật liệu cách điện khô (gậy gỗ) gạt dây điện ra khỏi người nạn nhân', 'Dùng tay không lao vào kéo trực tiếp nạn nhân ra', 'Dội nước lạnh vào người nạn nhân', 'Đứng nhìn và gào khóc'],
        answerIndex: 0,
        hint: 'Phải cách ly nguồn điện trước, tuyệt đối không chạm tay không vào người bị giật.',
        explanation: 'Ngắt nguồn điện hoặc dùng gậy gỗ khô gạt nguồn điện là bước tiên quyết để không bị điện giật lây lan.'
      },
      {
        question: 'Nhãn năng lượng dán trên các thiết bị điện gia dụng (tủ lạnh, điều hòa, máy giặt) có bao nhiêu ngôi sao là mức tiết kiệm điện cao nhất?',
        options: ['5 sao', '1 sao', '3 sao', '10 sao'],
        answerIndex: 0,
        hint: 'Càng nhiều sao càng tiết kiệm điện năng.',
        explanation: 'Nhãn 5 sao của Bộ Công Thương chứng nhận thiết bị đạt hiệu suất năng lượng tối ưu, tiết kiệm điện nhất.'
      }
    ]
  }
];
