import { HistoryStandardQuiz } from './historyGrade6Data';

/**
 * Authentic Grade 6 History Examination Suite
 * Strict compliance with Ministry of Education (Bộ GD&ĐT) standards:
 * - Regular tests (15 mins): At least 15 MCQ + 2 True/False + 3 Drag & Drop (20 questions total)
 * - Midterm tests (45 mins): At least 20 MCQ + 5 True/False + 5 Drag & Drop (30 questions total)
 * - Final tests (60 mins): Exactly 25 MCQ + 10 True/False + 7 Drag & Drop (42 questions total)
 */

export const GRADE_6_HISTORY_QUIZZES: HistoryStandardQuiz[] = [
  // =========================================================================
  // 1. KIỂM TRA THƯỜNG XUYÊN 1 - HỌC KỲ 1 (20 CÂU: 15 MCQ + 2 T/F + 3 D&D)
  // =========================================================================
  {
    id: 'quiz-h6-s1-reg1',
    title: 'Lịch sử 6 - Kiểm tra Thường xuyên 1: Lịch sử & Nguồn gốc loài người',
    titleEn: 'History 6 - Regular Assessment 1: Historiography & Human Origins',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Phân môn Lịch sử',
    category: 'social',
    testType: 'regular',
    durationMinutes: 15,
    xpReward: 80,
    description: 'Đề kiểm tra thường xuyên chuẩn quy cách: 15 câu trắc nghiệm nhiều lựa chọn, 2 câu trắc nghiệm Đúng/Sai và 3 câu tự luận kéo thả kiến thức.',
    descriptionEn: 'Standard 15-minute regular test: 15 MCQs, 2 True/False, and 3 interactive drag-and-drop questions.',
    questions: [
      // 15 MCQ QUESTIONS (1 - 15)
      {
        question: 'Lịch sử là gì?',
        type: 'mcq',
        options: [
          'Những truyện thần thoại cổ tích do con người tưởng tượng ra',
          'Tất cả những gì đã diễn ra trong quá khứ của xã hội loài người',
          'Các dự đoán khoa học về những điều sẽ xảy ra ở tương lai',
          'Tập hợp các bài thơ ca ngợi thiên nhiên và đất nước'
        ],
        answerIndex: 1,
        hint: 'Lịch sử phản ánh sự việc có thật đã diễn ra.',
        explanation: 'Theo SGK Lịch sử 6, lịch sử là toàn bộ những gì đã diễn ra trong quá khứ của loài người, từ khi xuất hiện đến nay.'
      },
      {
        question: 'Tư liệu nào sau đây thuộc loại tư liệu hiện vật?',
        type: 'mcq',
        options: [
          'Truyền thuyết Thánh Gióng đánh giặc Ân',
          'Trống đồng Đông Sơn tìm thấy dưới lòng đất',
          'Bài thơ "Lịch sử nước ta" của Bác Hồ',
          'Câu ca dao "Dù ai đi ngược về xuôi"'
        ],
        answerIndex: 1,
        hint: 'Tư liệu hiện vật là đồ vật cụ thể của người xưa để lại.',
        explanation: 'Trống đồng Đông Sơn là di vật cụ thể do người xưa chế tác và để lại qua hàng ngàn năm, là tư liệu hiện vật.'
      },
      {
        question: 'Ai được người phương Tây tôn vinh là "Người cha của ngành Lịch sử"?',
        type: 'mcq',
        options: ['Aristotle', 'Herodotus (Hê-rô-đốt)', 'Plato', 'Socrates'],
        answerIndex: 1,
        hint: 'Nhà sử học người Hy Lạp sống vào thế kỷ V TCN.',
        explanation: 'Herodotus (khoảng 484 - 425 TCN) được mệnh danh là Người cha của ngành Lịch sử phương Tây nhờ các công trình ghi chép lịch sử công phu.'
      },
      {
        question: 'Một thế kỷ trong cách tính thời gian lịch sử tương đương với bao nhiêu năm?',
        type: 'mcq',
        options: ['10 năm', '50 năm', '100 năm', '1000 năm'],
        answerIndex: 2,
        hint: '1 thập kỷ = 10 năm, 1 thế kỷ = 100 năm, 1 thiên niên kỷ = 1000 năm.',
        explanation: 'Một thế kỷ gồm tròn 100 năm (ví dụ từ năm 1 đến hết năm 100 là thế kỷ I).'
      },
      {
        question: 'Năm 938 thuộc thế kỷ thứ mấy trong lịch sử?',
        type: 'mcq',
        options: ['Thế kỷ VIII', 'Thế kỷ IX', 'Thế kỷ X', 'Thế kỷ XI'],
        answerIndex: 2,
        hint: 'Từ năm 901 đến năm 1000 thuộc thế kỷ X.',
        explanation: 'Năm 938 nằm trong khoảng từ năm 901 đến năm 1000, do đó thuộc thế kỷ X.'
      },
      {
        question: 'Vượn người tiến hóa thành Người tối cổ vào khoảng thời gian nào?',
        type: 'mcq',
        options: ['Khoảng 10 triệu năm trước', 'Khoảng 4 triệu năm trước', 'Khoảng 15 vạn năm trước', 'Khoảng 4000 năm trước'],
        answerIndex: 1,
        hint: 'Người tối cổ xuất hiện sớm hơn Người tinh khôn hàng triệu năm.',
        explanation: 'Theo khảo cổ học, Người tối cổ hình thành cách ngày nay khoảng 4 triệu năm từ Vượn người.'
      },
      {
        question: 'Bước ngoặt vĩ đại giúp Người tối cổ cải thiện điều kiện sống và sinh tồn là gì?',
        type: 'mcq',
        options: [
          'Chế tạo đồ trang sức bằng vỏ ốc',
          'Biết tìm ra lửa và giữ lửa để nấu chín thức ăn, sưởi ấm',
          'Biết trồng lúa nước hai vụ',
          'Xây dựng các thành phố kiên cố'
        ],
        answerIndex: 1,
        hint: 'Yếu tố giúp con người thoát khỏi ăn sống nuốt tươi và chống chọi giá lạnh.',
        explanation: 'Phát minh ra lửa giúp con người nướng chín thức ăn, sưởi ấm trong mùa đông khắc nghiệt và xua đuổi thú dữ.'
      },
      {
        question: 'Dấu tích răng hóa thạch của Người tối cổ ở Việt Nam được tìm thấy tại đâu?',
        type: 'mcq',
        options: [
          'Hang Thẩm Khuyên, Thẩm Hai (Lạng Sơn)',
          'Núi Đọ (Thanh Hóa)',
          'Đồng Đậu (Vĩnh Phúc)',
          'Sa Huỳnh (Quảng Ngãi)'
        ],
        answerIndex: 0,
        hint: 'Địa danh thuộc tỉnh miền núi biên giới phía Bắc.',
        explanation: 'Tại hang Thẩm Khuyên và Thẩm Hai (tỉnh Lạng Sơn), các nhà khảo cổ đã phát hiện răng hóa thạch của Người tối cổ có niên đại 40 - 30 vạn năm.'
      },
      {
        question: 'Di chỉ khảo cổ An Khê (Gia Lai) nổi tiếng với phát hiện nào?',
        type: 'mcq',
        options: [
          'Trống đồng thời Đông Sơn',
          'Rìu tay đá ghè đẽo thô sơ có niên đại 80 vạn năm trước',
          'Thuyền chiến thời Bạch Đằng',
          'Đồ gốm nung men xanh'
        ],
        answerIndex: 1,
        hint: 'Công cụ lao động bằng đá cuội ghè đẽo thô sơ.',
        explanation: 'Tại Rộc Tủng, Gò Đá (An Khê, Gia Lai), các nhà khoa học phát hiện rìu tay đá có niên đại cổ xưa bậc nhất Đông Nam Á (~800.000 năm).'
      },
      {
        question: 'Tổ chức xã hội đầu tiên của loài người được gọi là gì?',
        type: 'mcq',
        options: ['Bộ lạc', 'Thị tộc', 'Bầy người nguyên thủy', 'Nhà nước cổ đại'],
        answerIndex: 2,
        hint: 'Tập hợp từ 20 đến 30 người cùng tìm kiếm thức ăn.',
        explanation: 'Bầy người nguyên thủy là tổ chức xã hội sơ khai gồm vài chục người sống thành từng bầy, cùng hái lượm và săn thú.'
      },
      {
        question: 'Đặc điểm nào dưới đây là của Người tinh khôn (Homo sapiens)?',
        type: 'mcq',
        options: [
          'Vẫn còn lớp lông dày bao phủ cơ thể',
          'Trán thấp và vát về phía sau',
          'Dáng đứng thẳng, trán cao, mặt phẳng, não phát triển ~1400 cm³',
          'Chưa biết chế tạo công cụ bằng đá'
        ],
        answerIndex: 2,
        hint: 'Cấu tạo cơ thể hoàn toàn giống với người hiện đại ngày nay.',
        explanation: 'Người tinh khôn xuất hiện khoảng 15 vạn năm trước, cấu tạo cơ thể hoàn thiện như người ngày nay với hộp sọ lớn.'
      },
      {
        question: 'Thị tộc trong xã hội Người tinh khôn được hình thành dựa trên mối quan hệ nào?',
        type: 'mcq',
        options: ['Quan hệ mua bán kinh tế', 'Quan hệ cùng huyết thống', 'Quan hệ địa lý xóm làng', 'Quan hệ cấp trên - cấp dưới'],
        answerIndex: 1,
        hint: 'Những người cùng chung dòng máu cha mẹ, ông bà.',
        explanation: 'Thị tộc gồm vài chục gia đình có cùng huyết thống gắn bó khăng khít, cùng làm cùng hưởng.'
      },
      {
        question: 'Kim loại đầu tiên được con người phát hiện và sử dụng là kim loại nào?',
        type: 'mcq',
        options: ['Sắt', 'Đồng đỏ', 'Vàng', 'Nhôm'],
        answerIndex: 1,
        hint: 'Kim loại mềm, dễ nung chảy ở nhiệt độ thấp hơn sắt.',
        explanation: 'Đồng đỏ là kim loại đầu tiên con người phát hiện khoảng 4000 năm TCN, sau đó mới đến đồng thau và sắt.'
      },
      {
        question: 'Hệ quả xã hội lớn nhất khi công cụ bằng kim khí xuất hiện là gì?',
        type: 'mcq',
        options: [
          'Con người không cần phải lao động nữa',
          'Năng suất tăng vọt, xuất hiện sản phẩm dư thừa dẫn đến phân hóa giàu nghèo và giai cấp',
          'Các loài thú dữ bị tiêu diệt hoàn toàn',
          'Mọi người đều bình đẳng tuyệt đối'
        ],
        answerIndex: 1,
        hint: 'Dư thừa của cải dẫn đến tư hữu và phân hóa xã hội.',
        explanation: 'Công cụ kim khí tạo ra sản phẩm dư thừa thường xuyên, người đứng đầu chiếm đoạt làm của riêng, dẫn đến bất bình đẳng và xã hội có giai cấp hình thành.'
      },
      {
        question: 'Môn Lịch sử giúp học sinh bồi dưỡng phẩm chất cốt lõi nào?',
        type: 'mcq',
        options: [
          'Kỹ năng lập trình phần mềm máy tính',
          'Lòng yêu nước, niềm tự hào dân tộc và lòng biết ơn tổ tiên cha ông',
          'Kỹ năng tính toán số học nhanh',
          'Kỹ năng hội họa phong cảnh'
        ],
        answerIndex: 1,
        hint: 'Nhận thức cội nguồn dân tộc xây dựng nhân cách và lòng yêu nước.',
        explanation: 'Học lịch sử bồi đắp tinh thần tự hào dân tộc, trân trọng công lao dựng nước và giữ nước của cha ông.'
      },

      // 2 CÂU ĐÚNG / SAI (16 - 17)
      {
        question: 'Nhận định sau đây Đúng hay Sai: "Tư liệu chữ viết luôn phản ánh lịch sử một cách hoàn toàn khách quan và tuyệt đối chính xác hơn mọi loại tư liệu khác."',
        type: 'true_false',
        isTrue: false,
        hint: 'Tư liệu chữ viết do con người ghi lại, có thể chịu ảnh hưởng từ góc nhìn chủ quan của triều đại hoặc tác giả.',
        explanation: 'Sai. Tư liệu chữ viết rất có giá trị nhưng cũng có thể mang tính chủ quan của người biên soạn, do đó nhà sử học luôn phải đối chiếu với tư liệu hiện vật và khảo cổ.'
      },
      {
        question: 'Nhận định sau đây Đúng hay Sai: "Phát hiện rìu tay đá ở An Khê (Gia Lai) chứng minh lãnh thổ Việt Nam là một trong những nơi xuất hiện con người sớm nhất ở Đông Nam Á."',
        type: 'true_false',
        isTrue: true,
        hint: 'Niên đại 800.000 năm tại Tây Nguyên sánh ngang với các di chỉ tiền sử lớn trên thế giới.',
        explanation: 'Đúng. Rìu tay sơ kỳ đồ đá cũ ở An Khê có niên đại khoảng 80 vạn năm trước, chứng minh người tối cổ đã sinh sống rất sớm trên đất nước ta.'
      },

      // 3 CÂU TỰ LUẬN KÉO THẢ (18 - 20)
      {
        question: 'Hãy kéo thả tên loại tư liệu lịch sử tương ứng vào ví dụ thực tế phù hợp:',
        type: 'drag_drop',
        slots: ['Tư liệu hiện vật', 'Tư liệu truyền miệng', 'Tư liệu chữ viết'],
        dragPairs: [
          { id: 'dp1', item: 'Thành Cổ Loa và mũi tên đồng Đông Sơn', correctSlot: 'Tư liệu hiện vật' },
          { id: 'dp2', item: 'Truyền thuyết Sơn Tinh - Thủy Tinh đắp đê ngăn lũ', correctSlot: 'Tư liệu truyền miệng' },
          { id: 'dp3', item: 'Bia tiến sĩ khắc tên các nhà khoa bảng tại Văn Miếu', correctSlot: 'Tư liệu chữ viết' }
        ],
        hint: 'Phân loại theo dạng vật chất, lời kể dân gian hay văn bản ghi chép.',
        explanation: 'Thành Cổ Loa & mũi tên đồng là hiện vật; Sơn Tinh Thủy Tinh là truyền miệng; Bia tiến sĩ Văn Miếu là văn bản chữ viết.'
      },
      {
        question: 'Kéo thả đặc điểm nhân chủng học vào đúng giai đoạn tiến hóa của loài người:',
        type: 'drag_drop',
        slots: ['Vượn người', 'Người tối cổ', 'Người tinh khôn'],
        dragPairs: [
          { id: 'dp4', item: 'Đi bằng 2 chi sau, thể tích não 400 - 500 cm³', correctSlot: 'Vượn người' },
          { id: 'dp5', item: 'Đứng thẳng, trán vát, biết dùng lửa, não 850 - 1100 cm³', correctSlot: 'Người tối cổ' },
          { id: 'dp6', item: 'Trán cao, mặt phẳng, tư duy phát triển, não 1400 cm³', correctSlot: 'Người tinh khôn' }
        ],
        hint: 'Chú ý dung tích hộp sọ và tư thế tiến hóa qua từng giai đoạn.',
        explanation: 'Vượn người (400-500cm3) -> Người tối cổ (850-1100cm3) -> Người tinh khôn (1400cm3).'
      },
      {
        question: 'Kéo thả các di tích khảo cổ học tiền sử Việt Nam vào đúng tỉnh/thành phố tương ứng:',
        type: 'drag_drop',
        slots: ['Tỉnh Lạng Sơn', 'Tỉnh Thanh Hóa', 'Tỉnh Gia Lai'],
        dragPairs: [
          { id: 'dp7', item: 'Răng hóa thạch Người tối cổ ở hang Thẩm Khuyên, Thẩm Hai', correctSlot: 'Tỉnh Lạng Sơn' },
          { id: 'dp8', item: 'Hàng nghìn công cụ đá ghè đẽo cổ xưa tại Núi Đọ', correctSlot: 'Tỉnh Thanh Hóa' },
          { id: 'dp9', item: 'Rìu tay đá cuội thô sơ 80 vạn năm tại Rộc Tủng, Gò Đá (An Khê)', correctSlot: 'Tỉnh Gia Lai' }
        ],
        hint: 'Nhớ lại các địa danh khảo cổ học tiêu biểu trong SGK Lịch sử 6.',
        explanation: 'Thẩm Khuyên thuộc Lạng Sơn; Núi Đọ thuộc Thanh Hóa; An Khê thuộc Gia Lai.'
      }
    ]
  },

  // =========================================================================
  // 2. KIỂM TRA GIỮA KỲ 1 - HỌC KỲ 1 (30 CÂU: 20 MCQ + 5 T/F + 5 D&D)
  // =========================================================================
  {
    id: 'quiz-h6-s1-midterm',
    title: 'Lịch sử 6 - Đề Kiểm Tra Giữa Học Kỳ 1 (Chuẩn GDPT 2018)',
    titleEn: 'History 6 - Midterm Examination 1: Prehistory to Ancient Civilizations',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Phân môn Lịch sử',
    category: 'social',
    testType: 'midterm',
    durationMinutes: 45,
    xpReward: 150,
    description: 'Đề thi giữa kỳ môn Lịch sử lớp 6 gồm 30 câu hỏi chuẩn mực: 20 câu trắc nghiệm nhiều lựa chọn, 5 câu trắc nghiệm Đúng/Sai, và 5 câu tự luận ghép nối kéo thả.',
    descriptionEn: '45-minute Midterm exam: exactly 20 MCQs, 5 True/False, and 5 interactive Drag & Drop matching questions.',
    questions: [
      // 20 MCQ QUESTIONS (1 - 20)
      {
        question: 'Khoa học Lịch sử có nhiệm vụ cơ bản là gì?',
        type: 'mcq',
        options: [
          'Dự đoán thị trường tài chính tương lai',
          'Khôi phục, giải thích và làm sáng tỏ quy luật vận động của quá khứ xã hội loài người',
          'Sáng tác các câu chuyện truyền thuyết hấp dẫn',
          'Nghiên cứu khí hậu các hành tinh ngoài vũ trụ'
        ],
        answerIndex: 1,
        hint: 'Phục dựng chân thực quá khứ của nhân loại.',
        explanation: 'Nhiệm vụ của sử học là khôi phục quá khứ một cách chân thực, khách quan và đúc kết quy luật phát triển.'
      },
      {
        question: 'Dương lịch được tính dựa trên chuyển động nào?',
        type: 'mcq',
        options: [
          'Chuyển động của Mặt Trăng quanh Trái Đất',
          'Chuyển động của Trái Đất quay quanh Mặt Trời',
          'Chuyển động của Sao Hỏa quanh Hệ Mặt Trời',
          'Chuyển động của sao chổi'
        ],
        answerIndex: 1,
        hint: 'Mỗi vòng quay mất khoảng 365 ngày và 6 giờ.',
        explanation: 'Dương lịch tính theo chu kỳ Trái Đất quay một vòng quanh Mặt Trời (khoảng 365 ngày 6 giờ).'
      },
      {
        question: 'Âm lịch được tính dựa trên chu kỳ chuyển động nào?',
        type: 'mcq',
        options: [
          'Mặt Trời quay quanh Trái Đất',
          'Mặt Trăng quay quanh Trái Đất',
          'Trái Đất tự quay quanh trục',
          'Các vì sao chuyển động trên bầu trời'
        ],
        answerIndex: 1,
        hint: 'Trăng tròn và trăng khuyết mỗi tháng.',
        explanation: 'Âm lịch dựa vào chu kỳ tròn - khuyết của Mặt Trăng quay quanh Trái Đất (khoảng 29,5 ngày mỗi tháng).'
      },
      {
        question: 'Thiên niên kỷ là đơn vị thời gian tương ứng với bao nhiêu năm?',
        type: 'mcq',
        options: ['100 năm', '500 năm', '1000 năm', '10.000 năm'],
        answerIndex: 2,
        hint: 'Gấp 10 lần một thế kỷ.',
        explanation: '1 thiên niên kỷ = 1000 năm (ví dụ Thiên niên kỷ thứ nhất từ năm 1 đến 1000).'
      },
      {
        question: 'Địa điểm nào sau đây KHÔNG PHẢI là nơi tìm thấy dấu tích Người tối cổ ở Việt Nam?',
        type: 'mcq',
        options: ['Hang Thẩm Khuyên (Lạng Sơn)', 'Núi Đọ (Thanh Hóa)', 'An Khê (Gia Lai)', 'Đỉnh núi Fansipan (Lào Cai)'],
        answerIndex: 3,
        hint: 'Nơi có độ cao hơn 3000m không có dấu tích định cư tiền sử.',
        explanation: 'Fansipan không có di chỉ khảo cổ Người tối cổ; 3 địa danh còn lại đều là di chỉ khảo cổ nổi tiếng.'
      },
      {
        question: 'Người tinh khôn bắt đầu biết chế tác công cụ bằng đá như thế nào?',
        type: 'mcq',
        options: [
          'Chỉ biết nhặt đá cuội có sẵn đập vỡ',
          'Mài nhẵn lưỡi đá, khoan lỗ tra cán gỗ và chế tác nhiều loại công cụ chuyên dụng',
          'Không dùng đồ đá mà chuyển sang dùng nhựa',
          'Chỉ dùng xương cá làm vũ khí'
        ],
        answerIndex: 1,
        hint: 'Kỹ thuật mài nhẵn đánh dấu bước nhảy vọt so với ghè đẽo thô sơ.',
        explanation: 'Người tinh khôn sáng tạo ra kỹ thuật mài đá nhẵn lưỡi, đục lỗ tra cán, giúp tăng năng suất lao động rõ rệt.'
      },
      {
        question: 'Nền văn minh Ai Cập cổ đại được hình thành bên bờ dòng sông nào?',
        type: 'mcq',
        options: ['Sông Ti-gơ-rơ', 'Sông Nin (Nile)', 'Sông Hằng (Ganges)', 'Sông Hoàng Hà'],
        answerIndex: 1,
        hint: 'Dòng sông dài nhất châu Phi, được ca ngợi là "Tặng phẩm của sông Nin".',
        explanation: 'Sử gia Hy Lạp Herodotus từng nói: "Ai Cập là tặng phẩm của sông Nin" nhờ lượng phù sa màu mỡ bồi đắp hàng năm.'
      },
      {
        question: 'Đứng đầu nhà nước Ai Cập cổ đại là ai?',
        type: 'mcq',
        options: ['En-xi (Ensi)', 'Pharaoh (Pha-ra-ông)', 'Hoàng đế', 'Tổng thống'],
        answerIndex: 1,
        hint: 'Người nắm quyền tối cao về chính trị, quân sự và tôn giáo, được coi là con của thần Mặt Trời Ra.',
        explanation: 'Pharaoh là danh xưng tôn kính dành cho các vị vua chuyên chế Ai Cập cổ đại, có quyền lực tuyệt đối.'
      },
      {
        question: 'Công trình kiến trúc kỳ vĩ bậc nhất của người Ai Cập cổ đại dùng làm lăng mộ cho Pharaoh là:',
        type: 'mcq',
        options: ['Vườn treo Ba-bi-lon', 'Kim tự tháp', 'Đấu trường La Mã', 'Vạn Lý Trường Thành'],
        answerIndex: 1,
        hint: 'Công trình hình chóp đồ sộ bằng đá khối, tiêu biểu là Kim tự tháp Kheops.',
        explanation: 'Kim tự tháp (đặc biệt là quần thể Giza và Kim tự tháp Kheops) là biểu tượng đỉnh cao của nền văn minh Ai Cập.'
      },
      {
        question: 'Chữ viết của người Ai Cập cổ đại thuộc loại chữ gì?',
        type: 'mcq',
        options: ['Chữ cái La-tinh A, B, C', 'Chữ tượng hình khắc trên giấy Pa-pi-rút', 'Chữ hình nêm khắc trên đất sét', 'Chữ quốc ngữ'],
        answerIndex: 1,
        hint: 'Mô phỏng hình dạng đồ vật, con vật và viết trên cây sậy ép.',
        explanation: 'Người Ai Cập cổ đại dùng chữ tượng hình (hieroglyphics), ghi chép trên đá và giấy chỉ thảo papyrus.'
      },
      {
        question: 'Nền văn minh Lưỡng Hà cổ đại nằm ở lưu vực của hai con sông nào?',
        type: 'mcq',
        options: [
          'Sông Ấn và sông Hằng',
          'Sông Ti-gơ-rơ và sông Ơ-phơ-rát',
          'Sông Hoàng Hà và sông Trường Giang',
          'Sông Mê Kông và sông Hồng'
        ],
        answerIndex: 1,
        hint: 'Khu vực Trung Đông màu mỡ còn gọi là Lưỡng Hà (Mesopotamia).',
        explanation: 'Lưỡng Hà nghĩa là vùng đất giữa hai con sông Tigris (Ti-gơ-rơ) và Euphrates (Ơ-phơ-rát).'
      },
      {
        question: 'Bộ luật thành văn cổ xưa và hoàn chỉnh nhất thế giới thời Lưỡng Hà là:',
        type: 'mcq',
        options: ['Luật 12 bảng La Mã', 'Bộ luật Ham-mu-ra-bi', 'Luật Hồng Đức', 'Bộ luật Gia Long'],
        answerIndex: 1,
        hint: 'Khắc trên bia đá bazan đen hình trụ cao hơn 2 mét của vua Babylon.',
        explanation: 'Bộ luật Hammurabi (khoảng thế kỷ XVIII TCN) gồm 282 điều khắc trên đá, bảo vệ trật tự xã hội vương quốc Babylon.'
      },
      {
        question: 'Chữ viết của cư dân Lưỡng Hà được viết như thế nào?',
        type: 'mcq',
        options: [
          'Dùng bút lông viết trên lụa',
          'Dùng que nhọn ấn vào phiến đất sét ướt tạo thành chữ hình góc nhọn (chữ hình nêm)',
          'Khắc trên mai rùa',
          'Vẽ màu trên da thú'
        ],
        answerIndex: 1,
        hint: 'Hình dáng chữ giống như những chiếc đinh hay hình nêm.',
        explanation: 'Người Lưỡng Hà sáng tạo ra chữ hình nêm (cuneiform) bằng cách ấn que sậy vào đất sét mềm rồi đem nung khô.'
      },
      {
        question: 'Xã hội Ấn Độ cổ đại bị phân chia sâu sắc theo chế độ nào?',
        type: 'mcq',
        options: ['Chế độ nô tì gia đình', 'Chế độ 4 đẳng cấp Vác-na (Varna)', 'Chế độ phường hội thủ công', 'Chế độ đẳng cấp quý tộc Tây Âu'],
        answerIndex: 1,
        hint: 'Bao gồm Braman (Tăng lữ), Kshatriya (Võ sĩ), Vaisya (Bình dân), Sudra (Thấp hèn).',
        explanation: 'Chế độ Varna phân chia xã hội Ấn Độ thành 4 đẳng cấp khắt khe dựa trên thân phận và tôn giáo truyền kiếp.'
      },
      {
        question: 'Hai tôn giáo lớn nào bắt nguồn từ nền văn minh Ấn Độ cổ đại?',
        type: 'mcq',
        options: ['Hồi giáo và Kitô giáo', 'Phật giáo và Ấn Độ giáo (Bà La Môn / Hindu giáo)', 'Nho giáo và Đạo giáo', 'Do Thái giáo và Shinto giáo'],
        answerIndex: 1,
        hint: 'Tôn giáo do Thích Ca Mâu Ni sáng lập và tôn giáo tôn thờ các thần Brahma, Vishnu, Shiva.',
        explanation: 'Ấn Độ là cái nôi của Phật giáo (thế kỷ VI TCN) và Ấn Độ giáo (Hindu giáo).'
      },
      {
        question: 'Thành tựu toán học nổi bật nhất của cư dân Ấn Độ cổ đại đóng góp cho nhân loại là:',
        type: 'mcq',
        options: [
          'Tính chính xác chu vi Trái Đất',
          'Sáng tạo ra hệ thống 10 chữ số và phát minh ra chữ số 0',
          'Định lý Pythagoras',
          'Bảng cửu chương 9 chữ số'
        ],
        answerIndex: 1,
        hint: 'Hệ chữ số từ 0 đến 9 chúng ta đang dùng ngày nay.',
        explanation: 'Người Ấn Độ cổ đại đã phát minh ra chữ số 0 và hệ thống 10 chữ số, sau đó người Ả Rập truyền bá sang phương Tây.'
      },
      {
        question: 'Ai là người đầu tiên thống nhất Trung Quốc và lập ra nhà Tần năm 221 TCN?',
        type: 'mcq',
        options: ['Hán Cao Tổ Lưu Bang', 'Tần Thủy Hoàng (Doanh Chính)', 'Đường Thái Tông', 'Tào Tháo'],
        answerIndex: 1,
        hint: 'Vị hoàng đế cho xây Vạn Lý Trường Thành và lăng mộ đội quân đất nung.',
        explanation: 'Tần Thủy Hoàng thống nhất Trung Quốc năm 221 TCN, thiết lập nhà nước phong kiến trung ương tập quyền đầu tiên.'
      },
      {
        question: 'Công trình phòng thủ quân sự vĩ đại dài hàng ngàn cây số của Trung Quốc cổ đại là:',
        type: 'mcq',
        options: ['Cố Cung Bắc Kinh', 'Vạn Lý Trường Thành', 'Di Hòa Viên', 'Chùa Thiếu Lâm'],
        answerIndex: 1,
        hint: 'Xây dựng để ngăn chặn sự xâm nhập của các bộ tộc du mục phương Bắc.',
        explanation: 'Vạn Lý Trường Thành được bắt đầu nối dài và kiên cố hóa từ thời Tần Thủy Hoàng, là kỳ quan thế giới.'
      },
      {
        question: 'Các nền văn minh Hy Lạp và La Mã cổ đại có đặc trưng kinh tế chủ yếu nào?',
        type: 'mcq',
        options: [
          'Trồng trọt lúa nước ven các con sông lớn',
          'Thủ công nghiệp và thương mại hàng hải phát triển mạnh nhờ nhiều hải cảng tốt',
          'Chăn nuôi du mục trên thảo nguyên rộng lớn',
          'Khai thác lâm sản nhiệt đới'
        ],
        answerIndex: 1,
        hint: 'Nằm bên bờ Địa Trung Hải với nhiều vũng vịnh thuận lợi cho tàu thuyền buôn bán.',
        explanation: 'Hy Lạp và La Mã giáp Địa Trung Hải, giàu khoáng sản, bờ biển khúc khuỷu, phát triển rực rỡ thương mại đường biển.'
      },
      {
        question: 'Thể chế chính trị tiến bộ ra đời tại thành bang A-ten (Hy Lạp cổ đại) là:',
        type: 'mcq',
        options: ['Quân chủ chuyên chế độc tài', 'Chế độ dân chủ chủ nô', 'Chế độ phong kiến tập quyền', 'Chế độ tài phiệt'],
        answerIndex: 1,
        hint: 'Công dân tự do có quyền bầu cử và thảo luận tại Đại hội nhân dân.',
        explanation: 'Thành bang Aten là cái nôi của nền dân chủ chủ nô cổ đại, nơi công dân nam tự do có quyền biểu quyết việc nước.'
      },

      // 5 CÂU ĐÚNG / SAI (21 - 25)
      {
        question: 'Nhận định sau đây Đúng hay Sai: "Người Ai Cập cổ đại ướp xác vì họ tin vào sự bất tử của linh hồn và hy vọng thể xác còn nguyên vẹn sẽ đón linh hồn trở lại."',
        type: 'true_false',
        isTrue: true,
        hint: 'Quan niệm tôn giáo về thế giới bên kia của cư dân sông Nin.',
        explanation: 'Đúng. Người Ai Cập tin rằng linh hồn bất diệt, ướp xác để thể xác chờ ngày linh hồn tái sinh.'
      },
      {
        question: 'Nhận định sau đây Đúng hay Sai: "Bộ luật Hammurabi của Lưỡng Hà cổ đại quy định mọi người dân trong xã hội đều bình đẳng như nhau trước pháp luật."',
        type: 'true_false',
        isTrue: false,
        hint: 'Bộ luật bảo vệ quyền lợi của giai cấp thống trị chủ nô và trừng phạt nặng nề nô lệ.',
        explanation: 'Sai. Bộ luật Hammurabi phân biệt đẳng cấp rất rõ rệt: hình phạt áp dụng cho nô lệ nặng hơn nhiều so với quý tộc tự do.'
      },
      {
        question: 'Nhận định sau đây Đúng hay Sai: "Chữ số 0 là phát minh vĩ đại của các nhà toán học Hy Lạp cổ đại."',
        type: 'true_false',
        isTrue: false,
        hint: 'Chữ số 0 do người Ấn Độ sáng tạo ra.',
        explanation: 'Sai. Chữ số 0 là phát minh thiên tài của cư dân Ấn Độ cổ đại, sau đó lan truyền khắp thế giới qua người Ả Rập.'
      },
      {
        question: 'Nhận định sau đây Đúng hay Sai: "Đại hội nhân dân tại thành bang Aten (Hy Lạp) cho phép toàn bộ cư dân gồm đàn ông, phụ nữ và nô lệ cùng tham gia bỏ phiếu."',
        type: 'true_false',
        isTrue: false,
        hint: 'Dân chủ chủ nô thời kỳ này có tính chất hạn chế.',
        explanation: 'Sai. Quyền dân chủ chỉ dành cho công dân nam tự do từ 18 tuổi trở lên; phụ nữ, người ngoại kiều và nô lệ không có quyền công dân.'
      },
      {
        question: 'Nhận định sau đây Đúng hay Sai: "Trống đồng Đông Sơn là minh chứng rực rỡ khẳng định trình độ luyện kim và đúc đồng đạt đỉnh cao của cư dân Văn Lang - Âu Lạc."',
        type: 'true_false',
        isTrue: true,
        hint: 'Văn hóa Đông Sơn là đỉnh cao của thời kỳ đồ đồng Việt Nam.',
        explanation: 'Đúng. Trống đồng Đông Sơn thể hiện kỹ thuật đúc đồng tinh xảo và đời sống văn hóa phong phú của người Việt cổ.'
      },

      // 5 CÂU TỰ LUẬN KÉO THẢ (26 - 30)
      {
        question: 'Kéo thả tên kỳ quan/công trình kiến trúc vào đúng nền văn minh sáng tạo ra:',
        type: 'drag_drop',
        slots: ['Văn minh Ai Cập', 'Văn minh Lưỡng Hà', 'Văn minh Hy Lạp', 'Văn minh La Mã'],
        dragPairs: [
          { id: 'dp10', item: 'Kim tự tháp Kheops và Tượng Nhân sư (Sphinx)', correctSlot: 'Văn minh Ai Cập' },
          { id: 'dp11', item: 'Vườn treo Ba-bi-lon (Babylon) huyền thoại', correctSlot: 'Văn minh Lưỡng Hà' },
          { id: 'dp12', item: 'Đền Pác-tê-nông (Parthenon) trên đồi Acropolis', correctSlot: 'Văn minh Hy Lạp' },
          { id: 'dp13', item: 'Đấu trường Cô-li-dê (Colosseum) đồ sộ', correctSlot: 'Văn minh La Mã' }
        ],
        hint: 'Nhớ lại các công trình tiêu biểu của từng quốc gia cổ đại.',
        explanation: 'Kim tự tháp -> Ai Cập; Vườn treo -> Lưỡng Hà; Parthenon -> Hy Lạp; Colosseum -> La Mã.'
      },
      {
        question: 'Kéo thả tên các con sông lớn vào đúng nền văn minh phương Đông tương ứng:',
        type: 'drag_drop',
        slots: ['Ai Cập cổ đại', 'Lưỡng Hà cổ đại', 'Ấn Độ cổ đại', 'Trung Quốc cổ đại'],
        dragPairs: [
          { id: 'dp14', item: 'Sông Nin (Nile)', correctSlot: 'Ai Cập cổ đại' },
          { id: 'dp15', item: 'Sông Ti-gơ-rơ và sông Ơ-phơ-rát', correctSlot: 'Lưỡng Hà cổ đại' },
          { id: 'dp16', item: 'Sông Ấn (Indus) và sông Hằng (Ganges)', correctSlot: 'Ấn Độ cổ đại' },
          { id: 'dp17', item: 'Sông Hoàng Hà và sông Trường Giang', correctSlot: 'Trung Quốc cổ đại' }
        ],
        hint: 'Các nền văn minh nông nghiệp phương Đông đều gắn liền với các dòng sông lớn bồi đắp phù sa.',
        explanation: 'Nin -> Ai Cập; Tigris & Euphrates -> Lưỡng Hà; Indus & Ganges -> Ấn Độ; Hoàng Hà & Trường Giang -> Trung Quốc.'
      },
      {
        question: 'Kéo thả thành tựu chữ viết vào đúng nền văn minh cổ đại tương ứng:',
        type: 'drag_drop',
        slots: ['Ai Cập cổ đại', 'Lưỡng Hà cổ đại', 'Ấn Độ cổ đại', 'Trung Quốc cổ đại'],
        dragPairs: [
          { id: 'dp18', item: 'Chữ tượng hình viết trên giấy chỉ thảo Pa-pi-rút', correctSlot: 'Ai Cập cổ đại' },
          { id: 'dp19', item: 'Chữ hình nêm (tiết hình) ấn trên đất sét', correctSlot: 'Lưỡng Hà cổ đại' },
          { id: 'dp20', item: 'Chữ Phạn (Sanskrit) cổ kính', correctSlot: 'Ấn Độ cổ đại' },
          { id: 'dp21', item: 'Chữ giáp cốt khắc trên mai rùa và xương thú', correctSlot: 'Trung Quốc cổ đại' }
        ],
        hint: 'Mỗi nền văn minh có chất liệu và dạng thức ghi chép chữ viết riêng biệt.',
        explanation: 'Papyrus -> Ai Cập; Hình nêm -> Lưỡng Hà; Chữ Phạn -> Ấn Độ; Giáp cốt -> Trung Quốc.'
      },
      {
        question: 'Kéo thả các danh nhân lịch sử vào đúng lĩnh vực cống hiến nổi bật:',
        type: 'drag_drop',
        slots: ['Lịch sử học', 'Luật học cổ đại', 'Toán học & Thiên văn', 'Triết học & Tư tưởng'],
        dragPairs: [
          { id: 'dp22', item: 'Hê-rô-đốt (Herodotus) và Tư Mã Thiên', correctSlot: 'Lịch sử học' },
          { id: 'dp23', item: 'Vua Ham-mu-ra-bi (Babylon)', correctSlot: 'Luật học cổ đại' },
          { id: 'dp24', item: 'Ta-lét (Thales), Pi-ta-go (Pythagoras)', correctSlot: 'Toán học & Thiên văn' },
          { id: 'dp25', item: 'Khổng Tử và Thích Ca Mâu Ni', correctSlot: 'Triết học & Tư tưởng' }
        ],
        hint: 'Phân loại theo chuyên ngành khoa học hoặc tư tưởng tôn giáo.',
        explanation: 'Herodotus/Tư Mã Thiên -> Sử học; Hammurabi -> Luật học; Thales/Pythagoras -> Toán học; Khổng Tử/Thích Ca Mâu Ni -> Triết học tư tưởng.'
      },
      {
        question: 'Kéo thả các nhân vật/sự kiện lịch sử Việt Nam thời cổ vào đúng nội dung:',
        type: 'drag_drop',
        slots: ['Thời đại Hùng Vương', 'Thời kỳ An Dương Vương', 'Nền văn hóa khảo cổ'],
        dragPairs: [
          { id: 'dp26', item: 'Đặt tên nước là Văn Lang, đóng đô ở Bạch Hạc (Phú Thọ)', correctSlot: 'Thời đại Hùng Vương' },
          { id: 'dp27', item: 'Dựng nước Âu Lạc, xây thành ốc Cổ Loa, nỏ thần Liên Châu', correctSlot: 'Thời kỳ An Dương Vương' },
          { id: 'dp28', item: 'Văn hóa Phùng Nguyên, Đồng Đậu, Gò Mun, Đông Sơn', correctSlot: 'Nền văn hóa khảo cổ' }
        ],
        hint: 'Giai đoạn dựng nước sơ khai đầu tiên của dân tộc Việt Nam.',
        explanation: 'Văn Lang gắn với Vua Hùng; Âu Lạc & Cổ Loa gắn với An Dương Vương; Phùng Nguyên/Đông Sơn là các giai tầng khảo cổ.'
      }
    ]
  },

  // =========================================================================
  // 3. KIỂM TRA CUỐI KỲ 1 - HỌC KỲ 1 (ĐÚNG 42 CÂU: ĐÚNG 25 MCQ + 10 T/F + 7 D&D)
  // =========================================================================
  {
    id: 'quiz-h6-s1-final',
    title: 'Lịch sử 6 - Đề Kiểm Tra Cuối Học Kỳ 1 (Tổng hợp Toàn diện)',
    titleEn: 'History 6 - Semester 1 Final Comprehensive Examination',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Phân môn Lịch sử',
    category: 'social',
    testType: 'final',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi cuối kỳ chính thức theo chuẩn quy định Bộ GD&ĐT: đúng 25 câu trắc nghiệm nhiều lựa chọn (MCQ), 10 câu trắc nghiệm Đúng/Sai, và 7 câu tự luận kéo thả thông tin.',
    descriptionEn: 'Official 60-minute Final Exam: exactly 25 MCQs, 10 True/False, and 7 Drag & Drop matching questions (42 questions total).',
    questions: [
      // ĐÚNG 25 CÂU MCQ (1 - 25)
      {
        question: 'Lịch sử được hiểu theo những nghĩa nào dưới đây?',
        type: 'mcq',
        options: [
          'Chỉ là những câu chuyện cổ tích và ngụ ngôn lưu truyền dân gian',
          'Là toàn bộ những gì đã diễn ra trong quá khứ và là môn khoa học nghiên cứu về quá khứ',
          'Là những dự án quy hoạch phát triển kinh tế tương lai',
          'Là những cuốn tiểu thuyết dã sử được các nhà văn sáng tác'
        ],
        answerIndex: 1,
        hint: 'Hai nghĩa: hiện thực lịch sử khách quan và khoa học lịch sử.',
        explanation: 'Lịch sử vừa là hiện thực khách quan đã xảy ra trong quá khứ, vừa là môn khoa học nghiên cứu hiện thực ấy.'
      },
      {
        question: 'Dương lịch quy ước một năm có bao nhiêu ngày?',
        type: 'mcq',
        options: ['354 ngày', '360 ngày', '365 ngày (năm nhuận có 366 ngày)', '370 ngày'],
        answerIndex: 2,
        hint: 'Năm thường có 365 ngày, năm nhuận thêm 1 ngày vào tháng 2.',
        explanation: 'Dương lịch tính một năm có 365 ngày, cứ 4 năm lại có một năm nhuận gồm 366 ngày.'
      },
      {
        question: 'Công nguyên là mốc thời gian bắt đầu từ sự kiện nào?',
        type: 'mcq',
        options: [
          'Năm xây dựng Kim tự tháp Ai Cập',
          'Năm sinh của Chúa Giê-su (Chúa Jesus)',
          'Năm Ngô Quyền chiến thắng Bạch Đằng',
          'Năm Tần Thủy Hoàng thống nhất Trung Quốc'
        ],
        answerIndex: 1,
        hint: 'Mốc gắn với sự ra đời của Kitô giáo được quốc tế quy ước.',
        explanation: 'Công nguyên quy ước lấy năm tương truyền Chúa Giê-su ra đời làm năm thứ nhất (năm 1).'
      },
      {
        question: 'Các nhà khảo cổ học phát hiện di cốt Người tối cổ sớm nhất ở châu lục nào?',
        type: 'mcq',
        options: ['Châu Âu', 'Châu Á', 'Châu Phi', 'Châu Mỹ'],
        answerIndex: 2,
        hint: 'Khu vực Đông Phi là nơi tìm thấy hóa thạch vượn cổ và người tối cổ sớm nhất.',
        explanation: 'Hóa thạch cổ xưa nhất của vượn người và người tối cổ được phát hiện chủ yếu ở miền Đông châu Phi.'
      },
      {
        question: 'Đặc điểm căn bản phân biệt Người tối cổ với Vượn người là gì?',
        type: 'mcq',
        options: [
          'Người tối cổ đã hoàn toàn rụng hết lông trên người',
          'Người tối cổ đã đứng thẳng, hai tay giải phóng biết chế tạo công cụ và dùng lửa',
          'Người tối cổ đã biết viết sách và làm thơ',
          'Người tối cổ đã biết chế tạo máy móc'
        ],
        answerIndex: 1,
        hint: 'Khả năng chế tạo công cụ lao động có mục đích.',
        explanation: 'Điểm khác biệt căn bản là Người tối cổ đã đứng thẳng, biết ghè đẽo đá làm công cụ và tìm ra lửa.'
      },
      {
        question: 'Xã hội nguyên thủy ở Việt Nam phát triển qua các giai đoạn văn hóa khảo cổ đồ đồng nào?',
        type: 'mcq',
        options: [
          'Văn hóa Đông Sơn -> Sa Huỳnh -> Óc Eo',
          'Văn hóa Phùng Nguyên -> Đồng Đậu -> Gò Mun -> Đông Sơn',
          'Văn hóa Hòa Bình -> Bắc Sơn -> Hạ Long',
          'Văn hóa Óc Eo -> Champa -> Đại Việt'
        ],
        answerIndex: 1,
        hint: 'Tiến trình từ đồng đỏ, đồng thau đến đỉnh cao đồ đồng Đông Sơn.',
        explanation: 'Tiến trình khảo cổ thời đại kim khí miền Bắc Việt Nam phát triển tuần tự: Phùng Nguyên -> Đồng Đậu -> Gò Mun -> Đông Sơn.'
      },
      {
        question: 'Vì sao các nền văn minh cổ đại phương Đông đều hình thành ven các con sông lớn?',
        type: 'mcq',
        options: [
          'Vì người xưa thích ngắm cảnh sông nước',
          'Vì nguồn nước dồi dào, phù sa màu mỡ thuận lợi phát triển nghề nông trồng lúa',
          'Vì các con sông không bao giờ xảy ra lũ lụt',
          'Vì chỉ có ở bờ sông mới có khoáng sản vàng bạc'
        ],
        answerIndex: 1,
        hint: 'Phù sa và nước tưới tiêu là điều kiện sống còn của nông nghiệp sơ khai.',
        explanation: 'Lũ sông hàng năm bồi đắp phù sa màu mỡ, cung cấp nước sinh hoạt và tưới tiêu nông nghiệp, tạo tiền đề ra đời nhà nước.'
      },
      {
        question: 'Kim tự tháp Ai Cập Kheops được xây dựng hoàn toàn bằng vật liệu gì?',
        type: 'mcq',
        options: ['Gỗ lim và tre nứa', 'Hàng triệu khối đá vôi lớn ghép khít không dùng vữa', 'Gạch nung đỏ', 'Bê tông cốt thép'],
        answerIndex: 1,
        hint: 'Các khối đá nặng trung bình 2,5 tấn được vận chuyển và xếp chồng chuẩn xác tuyệt đối.',
        explanation: 'Kim tự tháp Kheops được ghép từ hơn 2,3 triệu khối đá vôi lớn nặng từ 2 đến 15 tấn với độ chính xác kinh ngạc.'
      },
      {
        question: 'Tác phẩm điêu khắc nổi tiếng gắn liền với Kim tự tháp Giza ở Ai Cập là:',
        type: 'mcq',
        options: ['Tượng Nhân sư (Sphinx - đầu người mình sư tử)', 'Tượng Nữ thần Tự do', 'Tượng Phật nghìn mắt nghìn tay', 'Tượng David'],
        answerIndex: 0,
        hint: 'Bức tượng đá khổng lồ đầu người mình sư tử canh gác lăng mộ.',
        explanation: 'Tượng Nhân sư (Sphinx) nằm trước quần thể kim tự tháp Giza, biểu trưng cho trí tuệ con người và sức mạnh chúa sơn lâm.'
      },
      {
        question: 'Cư dân Ai Cập cổ đại đã sáng tạo ra phép đếm dựa trên cơ số mấy?',
        type: 'mcq',
        options: ['Cơ số 2 (hệ nhị phân)', 'Cơ số 10 (hệ thập phân)', 'Cơ số 60', 'Cơ số 100'],
        answerIndex: 1,
        hint: 'Đếm theo số lượng 10 ngón tay của con người.',
        explanation: 'Người Ai Cập sáng tạo ra hệ đếm thập phân (cơ số 10) và tính được số Pi xấp xỉ 3,16.'
      },
      {
        question: 'Cư dân Lưỡng Hà cổ đại có đóng góp to lớn nào về cách tính thời gian?',
        type: 'mcq',
        options: [
          'Chia 1 năm thành 10 tháng',
          'Sáng tạo ra hệ đếm cơ số 60: chia 1 giờ thành 60 phút, 1 phút thành 60 giây và 1 vòng tròn 360 độ',
          'Tính năm nhuận 380 ngày',
          'Không biết đo đạc thời gian'
        ],
        answerIndex: 1,
        hint: 'Hệ đếm 60 phút và 60 giây mà ngày nay chúng ta vẫn dùng.',
        explanation: 'Người Lưỡng Hà dùng hệ đếm cơ số 60, chia vòng tròn thành 360 độ, 1 giờ 60 phút, 1 phút 60 giây.'
      },
      {
        question: 'Ai là người sáng lập ra Phật giáo tại Ấn Độ vào thế kỷ VI TCN?',
        type: 'mcq',
        options: ['Khổng Tử', 'Tất-đạt-đa Cồ-đàm (Siddhartha Gautama - Thích Ca Mâu Ni)', 'Lão Tử', 'Chúa Jesus'],
        answerIndex: 1,
        hint: 'Thái tử con vua Tịnh Phạn từ bỏ cung vàng điện ngọc đi tìm con đường cứu khổ.',
        explanation: 'Thái tử Siddhartha Gautama (Thích Ca Mâu Ni) đã giác ngộ dưới cội bồ đề và sáng lập ra đạo Phật đề cao từ bi, bình đẳng.'
      },
      {
        question: 'Bộ kinh tôn giáo cổ xưa nhất của người Ấn Độ cổ đại là:',
        type: 'mcq',
        options: ['Kinh Vê-đa (Veda)', 'Kinh Koran', 'Kinh Cựu ước', 'Kinh Dịch'],
        answerIndex: 0,
        hint: 'Bộ thánh kinh của đạo Bà La Môn.',
        explanation: 'Kinh Vê-đa (Veda) gồm 4 tập thi ca tôn giáo, là di sản văn học cổ xưa nhất của Ấn Độ.'
      },
      {
        question: 'Tư tưởng triết học nào giữ vai trò thống trị văn hóa và chính trị Trung Quốc phong kiến suốt hơn 2000 năm?',
        type: 'mcq',
        options: ['Pháp gia', 'Nho giáo (Khổng giáo)', 'Mặc gia', 'Đạo giáo'],
        answerIndex: 1,
        hint: 'Đề cao nhân, nghĩa, lễ, trí, tín và trật tự quân - thần, phụ - tử.',
        explanation: 'Nho giáo do Khổng Tử sáng lập thời Xuân Thu trở thành hệ tư tưởng chính thống của các triều đại phong kiến Trung Quốc.'
      },
      {
        question: 'Bốn phát minh vĩ đại ("Tứ đại phát minh") của người Trung Quốc thời cổ - trung đại là:',
        type: 'mcq',
        options: [
          'Động cơ hơi nước, máy tính, tivi, điện thoại',
          'Giấy, kỹ thuật in, la bàn và thuốc súng',
          'Xe lửa, máy bay, tàu ngầm, vệ tinh',
          'Tủ lạnh, quạt điện, máy giặt, điều hòa'
        ],
        answerIndex: 1,
        hint: 'Những phát minh làm thay đổi tiến trình văn minh thế giới.',
        explanation: 'Giấy, in ấn, la bàn và thuốc súng là 4 phát minh lớn của người Trung Quốc lan tỏa làm biến đổi sâu sắc lịch sử nhân loại.'
      },
      {
        question: 'Thế vận hội Olympic cổ đại bắt nguồn từ đất nước nào?',
        type: 'mcq',
        options: ['Ai Cập', 'Hy Lạp', 'La Mã', 'Ấn Độ'],
        answerIndex: 1,
        hint: 'Tổ chức 4 năm một lần tại thung lũng Olympia để tôn vinh thần Zeus.',
        explanation: 'Thế vận hội Olympic đầu tiên diễn ra vào năm 776 TCN tại Hy Lạp cổ đại để tôn vinh thần Dớt (Zeus).'
      },
      {
        question: 'Tác phẩm văn học sử thi đồ sộ nào của thi hào Hô-me-rơ (Homer) phản ánh chiến tranh thành Troi?',
        type: 'mcq',
        options: ['Ramayana và Mahabharata', 'I-li-át (Iliad) và Ô-đi-xê (Odyssey)', 'Tây Du Ký', 'Truyện Kiều'],
        answerIndex: 1,
        hint: 'Hai bản anh hùng ca bất hủ của Hy Lạp cổ đại.',
        explanation: 'Sử thi Iliad và Odyssey của thi hào Homer là đỉnh cao của nền văn học Hy Lạp cổ đại.'
      },
      {
        question: 'Hệ thống chữ cái La-tinh (A, B, C...) mà chúng ta dùng viết tiếng Việt ngày nay bắt nguồn từ đâu?',
        type: 'mcq',
        options: ['Cư dân Lưỡng Hà cổ đại', 'Người Phê-ni-xi và người La Mã cổ đại', 'Cư dân Ai Cập cổ đại', 'Người Ấn Độ cổ đại'],
        answerIndex: 1,
        hint: 'Chữ cái ngữ âm đơn giản xuất phát từ vùng Địa Trung Hải.',
        explanation: 'Bảng chữ cái mẫu La-tinh hoàn thiện từ chữ Hy Lạp và La Mã cổ đại, có nguồn gốc từ người Phoenicia.'
      },
      {
        question: 'Nhà nước đầu tiên trong lịch sử dân tộc Việt Nam có tên gọi là gì?',
        type: 'mcq',
        options: ['Âu Lạc', 'Văn Lang', 'Vạn Xuân', 'Đại Cồ Việt'],
        answerIndex: 1,
        hint: 'Do các Vua Hùng dựng nên, đóng đô tại Phong Châu (Phú Thọ).',
        explanation: 'Nhà nước Văn Lang do Hùng Vương đứng đầu là nhà nước sơ khai đầu tiên của dân tộc ta vào khoảng thế kỷ VII TCN.'
      },
      {
        question: 'Kinh đô của nhà nước Âu Lạc dưới thời An Dương Vương đặt tại đâu?',
        type: 'mcq',
        options: ['Hoa Lư (Ninh Bình)', 'Phong Châu (Phú Thọ)', 'Cổ Loa (Đông Anh, Hà Nội)', 'Thăng Long (Hà Nội)'],
        answerIndex: 2,
        hint: 'Nơi có tòa thành xoáy hình trôn ốc nhiều vòng kiên cố.',
        explanation: 'An Dương Vương dời đô từ miền núi Phong Châu về miền đồng bằng Cổ Loa (Đông Anh, Hà Nội) và xây thành ốc.'
      },
      {
        question: 'Vũ khí đặc biệt của quân đội Âu Lạc khiến quân Triệu Đà khiếp sợ là:',
        type: 'mcq',
        options: ['Súng thần công nòng đồng', 'Nỏ Liên Châu (bắn một phát ra nhiều mũi tên đồng)', 'Gươm báu đúc bằng thép cứng', 'Giáo mác dài tẩm độc'],
        answerIndex: 1,
        hint: 'Gắn liền với hình tượng thần Kim Quy ban móng rùa làm lẫy nỏ.',
        explanation: 'Tướng Cao Lỗ chế tạo nỏ bắn một lần nhiều phát tên đồng (nỏ Liên Châu), trở thành bảo vật quân sự giữ nước Âu Lạc.'
      },
      {
        question: 'Ai là người lãnh đạo cuộc khởi nghĩa đầu tiên lật đổ ách cai trị của nhà Đông Hán năm 40?',
        type: 'mcq',
        options: ['Bà Triệu', 'Hai Bà Trưng (Trưng Trắc, Trưng Nhị)', 'Lý Bí', 'Mai Thúc Loan'],
        answerIndex: 1,
        hint: '"Một xin rửa sạch nước thù / Hai xin dựng lại nghiệp xưa họ Hùng".',
        explanation: 'Mùa xuân năm 40, Hai Bà Trưng dấy binh khởi nghĩa tại Hát Môn, đánh đuổi thái thú Tô Định, giành lại độc lập cho đất nước.'
      },
      {
        question: 'Bà Triệu (Triệu Thị Trinh) dấy binh chống quân xâm lược nhà Ngô vào năm nào?',
        type: 'mcq',
        options: ['Năm 40', 'Năm 248', 'Năm 542', 'Năm 938'],
        answerIndex: 1,
        hint: 'Câu nói nổi tiếng: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông...".',
        explanation: 'Năm 248, từ căn cứ núi Nưa (Triệu Sơn, Thanh Hóa), Bà Triệu lãnh đạo nhân dân nổi dậy đánh tan quân Ngô xâm lược.'
      },
      {
        question: 'Lý Bí lãnh đạo khởi nghĩa thắng lợi và thành lập nhà nước có tên là gì vào năm 544?',
        type: 'mcq',
        options: ['Đại Cồ Việt', 'Vạn Xuân', 'Đại Việt', 'Âu Lạc'],
        answerIndex: 1,
        hint: 'Tên nước mang ý nghĩa mong muốn đất nước trường tồn ngàn vạn mùa xuân.',
        explanation: 'Năm 544, Lý Bí lên ngôi hoàng đế (Lý Nam Đế), đặt tên nước là Vạn Xuân, đóng đô ở cửa sông Tô Lịch (Hà Nội).'
      },
      {
        question: 'Trận chiến trên sông Bạch Đằng năm 938 của Ngô Quyền đã đánh tan đạo quân xâm lược nào?',
        type: 'mcq',
        options: ['Quân Tống', 'Quân Nam Hán', 'Quân Mông - Nguyên', 'Quân Minh'],
        answerIndex: 1,
        hint: 'Đạo quân phương Bắc do hoàng tử Lưu Hoằng Tháo cầm đầu đường thủy.',
        explanation: 'Ngô Quyền dùng bãi cọc ngầm đánh tan hoàn toàn thủy quân Nam Hán, chém chết tướng giặc Lưu Hoằng Tháo, chấm dứt thời kỳ Bắc thuộc.'
      },

      // ĐÚNG 10 CÂU ĐÚNG / SAI (26 - 35)
      {
        question: 'Nhận định sau Đúng hay Sai: "Lịch sử chỉ ghi chép tiểu sử của các vị vua chúa, tướng lĩnh mà không nghiên cứu đời sống của người dân lao động bình thường."',
        type: 'true_false',
        isTrue: false,
        hint: 'Nhân dân lao động là chủ thể sáng tạo ra lịch sử.',
        explanation: 'Sai. Khoa học lịch sử hiện đại nghiên cứu toàn diện mọi giai tầng, đời sống vật chất, văn hóa và phong tục của quần chúng nhân dân.'
      },
      {
        question: 'Nhận định sau Đúng hay Sai: "Năm nhuận của dương lịch có 366 ngày, ngày nhuận được cộng thêm vào cuối tháng Hai (ngày 29 tháng 2)."',
        type: 'true_false',
        isTrue: true,
        hint: 'Tháng 2 năm nhuận có 29 ngày.',
        explanation: 'Đúng. Cứ 4 năm có 1 năm nhuận, tháng Hai có thêm ngày 29 để bù đắp phần dư 6 giờ mỗi năm.'
      },
      {
        question: 'Nhận định sau Đúng hay Sai: "Người tối cổ đã biết chế tạo cung tên bắn xa và đúc đồ đồng tinh xảo."',
        type: 'true_false',
        isTrue: false,
        hint: 'Người tối cổ chỉ mới biết ghè đẽo đá thô sơ; cung tên và kim loại xuất hiện muộn hơn nhiều thời Người tinh khôn.',
        explanation: 'Sai. Người tối cổ mới chỉ biết ghè đẽo thô sơ công cụ đá cuội. Cung tên và đồ đồng là thành tựu của Người tinh khôn giai đoạn sau.'
      },
      {
        question: 'Nhận định sau Đúng hay Sai: "Kim tự tháp Ai Cập được xây dựng phục vụ mục đích làm lăng mộ cất giữ thi hài ướp xác của các Pharaoh và hoàng hậu."',
        type: 'true_false',
        isTrue: true,
        hint: 'Chức năng cốt lõi của các kim tự tháp cổ đại.',
        explanation: 'Đúng. Kim tự tháp là công trình lăng mộ vĩnh hằng bảo vệ xác ướp của các vị vua Pharaoh.'
      },
      {
        question: 'Nhận định sau Đúng hay Sai: "Vườn treo Ba-bi-lon được xây dựng ven sông Nin ở Ai Cập."',
        type: 'true_false',
        isTrue: false,
        hint: 'Vườn treo Babylon thuộc nền văn minh Lưỡng Hà ven sông Euphrates.',
        explanation: 'Sai. Vườn treo Babylon nằm tại Lưỡng Hà (Iraq ngày nay) bên dòng sông Ơ-phơ-rát, không phải ở Ai Cập.'
      },
      {
        question: 'Nhận định sau Đúng hay Sai: "Đạo Phật chủ trương xóa bỏ phân biệt đẳng cấp xã hội, đề cao lòng từ bi hỷ xả và sự bình đẳng giữa mọi con người."',
        type: 'true_false',
        isTrue: true,
        hint: 'Tư tưởng nhân văn cốt lõi của Phật giáo tại Ấn Độ cổ đại.',
        explanation: 'Đúng. Đức Phật dạy: "Không có giai cấp trong dòng máu cùng đỏ, không có phân biệt trong giọt nước mắt cùng mặn".'
      },
      {
        question: 'Nhận định sau Đúng hay Sai: "Chữ giáp cốt của Trung Quốc cổ đại là loại chữ viết được khắc trực tiếp trên mai rùa và xương thú để bói toán."',
        type: 'true_false',
        isTrue: true,
        hint: 'Dạng chữ viết cổ nhất thời nhà Thương ở Trung Quốc.',
        explanation: 'Đúng. Chữ giáp cốt (giáp là mai rùa, cốt là xương thú) được phát hiện nhiều tại di chỉ Ân Khư thời Thương.'
      },
      {
        question: 'Nhận định sau Đúng hay Sai: "Ở thành bang Sparta (Hy Lạp), nền giáo dục chú trọng đào tạo võ sĩ quân sự nghiêm khắc ngay từ khi còn nhỏ."',
        type: 'true_false',
        isTrue: true,
        hint: 'Sparta là thành bang quân phiệt kỷ luật thép nổi tiếng.',
        explanation: 'Đúng. Con trai Sparta từ 7 tuổi đã phải vào trại huấn luyện quân sự gian khổ để trở thành chiến binh dũng cảm.'
      },
      {
        question: 'Nhận định sau Đúng hay Sai: "Thành Cổ Loa của nước Âu Lạc được đắp bằng đất theo hình xoắn trôn ốc gồm 9 vòng thành kiên cố."',
        type: 'true_false',
        isTrue: true,
        hint: 'Kiến trúc quân sự độc đáo thời An Dương Vương.',
        explanation: 'Đúng. Truyền thuyết và khảo cổ xác nhận thành Cổ Loa có cấu trúc nhiều vòng khép kín hình ốc (Loa thành).'
      },
      {
        question: 'Nhận định sau Đúng hay Sai: "Chiến thắng Bạch Đằng năm 938 chỉ là một trận phục kích nhỏ, không làm ảnh hưởng đến ách đô hộ của nhà Nam Hán."',
        type: 'true_false',
        isTrue: false,
        hint: 'Đây là mốc son chói lọi mở ra kỷ nguyên độc lập tự chủ hoàn toàn của dân tộc.',
        explanation: 'Sai. Chiến thắng Bạch Đằng năm 938 là bước ngoặt vĩ đại tiêu diệt quân xâm lược, chấm dứt hoàn toàn ách thống trị hơn 1000 năm Bắc thuộc.'
      },

      // ĐÚNG 7 CÂU TỰ LUẬN KÉO THẢ (36 - 42)
      {
        question: 'Kéo thả tên nhân vật lịch sử vào đúng câu nói hoặc chiến công bất hủ:',
        type: 'drag_drop',
        slots: ['Hai Bà Trưng', 'Bà Triệu (Triệu Thị Trinh)', 'Lý Nam Đế (Lý Bí)', 'Ngô Quyền'],
        dragPairs: [
          { id: 'dp29', item: 'Họp quân Hát Môn: "Một xin rửa sạch nước thù / Hai xin dựng lại nghiệp xưa họ Hùng"', correctSlot: 'Hai Bà Trưng' },
          { id: 'dp30', item: '"Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông"', correctSlot: 'Bà Triệu (Triệu Thị Trinh)' },
          { id: 'dp31', item: 'Lên ngôi hoàng đế, dựng chùa Khai Quốc, đặt tên nước là Vạn Xuân', correctSlot: 'Lý Nam Đế (Lý Bí)' },
          { id: 'dp32', item: 'Dùng cọc ngầm gỗ lim bịt sắt đập tan quân Nam Hán trên sông Bạch Đằng năm 938', correctSlot: 'Ngô Quyền' }
        ],
        hint: 'Nối các câu nói bất hủ với vị anh hùng dân tộc tương ứng.',
        explanation: 'Hai Bà Trưng dấy binh Hát Môn; Bà Triệu chém cá kình; Lý Bí lập nước Vạn Xuân; Ngô Quyền cắm cọc Bạch Đằng.'
      },
      {
        question: 'Kéo thả các sự kiện lịch sử vào đúng mốc thời gian diễn ra:',
        type: 'drag_drop',
        slots: ['Năm 40', 'Năm 248', 'Năm 542', 'Năm 938'],
        dragPairs: [
          { id: 'dp33', item: 'Khởi nghĩa Hai Bà Trưng bùng nổ tại Hát Môn', correctSlot: 'Năm 40' },
          { id: 'dp34', item: 'Khởi nghĩa Bà Triệu ở vùng núi Căn Đông (Thanh Hóa)', correctSlot: 'Năm 248' },
          { id: 'dp35', item: 'Lý Bí lãnh đạo nhân dân khởi nghĩa lật đổ chính quyền đô hộ nhà Lương', correctSlot: 'Năm 542' },
          { id: 'dp36', item: 'Đại thắng Bạch Đằng kết liễu hoàng tử giặc Lưu Hoằng Tháo', correctSlot: 'Năm 938' }
        ],
        hint: 'Thứ tự thời gian các cuộc khởi nghĩa tiêu biểu thời Bắc thuộc.',
        explanation: 'Năm 40 -> Hai Bà Trưng; Năm 248 -> Bà Triệu; Năm 542 -> Lý Bí; Năm 938 -> Ngô Quyền.'
      },
      {
        question: 'Kéo thả tên kỳ quan thế giới vào đúng quốc gia cổ đại sở hữu:',
        type: 'drag_drop',
        slots: ['Ai Cập', 'Lưỡng Hà (Iraq)', 'Hy Lạp', 'La Mã (Ý)'],
        dragPairs: [
          { id: 'dp37', item: 'Quần thể Kim tự tháp Giza và Tượng Nhân sư', correctSlot: 'Ai Cập' },
          { id: 'dp38', item: 'Vườn treo Ba-bi-lon bên bờ sông Ơ-phơ-rát', correctSlot: 'Lưỡng Hà (Iraq)' },
          { id: 'dp39', item: 'Đền Pác-tê-nông (Parthenon) thờ nữ thần Athena', correctSlot: 'Hy Lạp' },
          { id: 'dp40', item: 'Đấu trường Cô-li-dê (Colosseum) sức chứa 5 vạn người', correctSlot: 'La Mã (Ý)' }
        ],
        hint: 'Địa danh gắn liền với các công trình kiến trúc cổ đại.',
        explanation: 'Kim tự tháp -> Ai Cập; Vườn treo -> Lưỡng Hà; Đền Parthenon -> Hy Lạp; Đấu trường -> La Mã.'
      },
      {
        question: 'Kéo thả các phát minh lớn vào đúng nền văn minh sáng tạo:',
        type: 'drag_drop',
        slots: ['Ai Cập cổ đại', 'Lưỡng Hà cổ đại', 'Ấn Độ cổ đại', 'Trung Quốc cổ đại'],
        dragPairs: [
          { id: 'dp41', item: 'Kỹ thuật ướp xác và làm giấy từ cây Pa-pi-rút', correctSlot: 'Ai Cập cổ đại' },
          { id: 'dp42', item: 'Bộ luật thành văn khắc trên đá Ham-mu-ra-bi', correctSlot: 'Lưỡng Hà cổ đại' },
          { id: 'dp43', item: 'Hệ thống 10 chữ số và phát minh ra chữ số 0', correctSlot: 'Ấn Độ cổ đại' },
          { id: 'dp44', item: 'Thuốc súng, la bàn định hướng và kỹ thuật làm giấy', correctSlot: 'Trung Quốc cổ đại' }
        ],
        hint: 'Phân loại các phát minh khoa học kỹ thuật của phương Đông cổ đại.',
        explanation: 'Ướp xác/Papyrus -> Ai Cập; Luật Hammurabi -> Lưỡng Hà; Số 0 -> Ấn Độ; Thuốc súng/la bàn -> Trung Quốc.'
      },
      {
        question: 'Kéo thả các khái niệm xã hội vào đúng định nghĩa tương ứng:',
        type: 'drag_drop',
        slots: ['Thị tộc', 'Bộ lạc', 'Giai cấp', 'Nhà nước'],
        dragPairs: [
          { id: 'dp45', item: 'Tổ chức gồm các gia đình có cùng quan hệ huyết thống huyết thống chung', correctSlot: 'Thị tộc' },
          { id: 'dp46', item: 'Tập hợp nhiều thị tộc sống cạnh nhau trên cùng một địa bàn', correctSlot: 'Bộ lạc' },
          { id: 'dp47', item: 'Tập đoàn người có địa vị kinh tế và quyền lực khác biệt trong xã hội', correctSlot: 'Giai cấp' },
          { id: 'dp48', item: 'Bộ máy quyền lực công cộng quản lý xã hội và duy trì trật tự pháp luật', correctSlot: 'Nhà nước' }
        ],
        hint: 'Thứ tự phát triển các hình thái tổ chức xã hội loài người.',
        explanation: 'Thị tộc (huyết thống) -> Bộ lạc (liên minh thị tộc) -> Giai cấp (phân hóa giàu nghèo) -> Nhà nước (bộ máy cai trị).'
      },
      {
        question: 'Kéo thả tên các vị vua/thủ lĩnh vào đúng kinh đô/trung tâm quyền lực:',
        type: 'drag_drop',
        slots: ['Phong Châu (Phú Thọ)', 'Cổ Loa (Đông Anh, Hà Nội)', 'Hát Môn - Mê Linh (Hà Nội)', 'Vạn Xuân (Cửa sông Tô Lịch)'],
        dragPairs: [
          { id: 'dp49', item: 'Vua Hùng (Nước Văn Lang)', correctSlot: 'Phong Châu (Phú Thọ)' },
          { id: 'dp50', item: 'An Dương Vương (Nước Âu Lạc)', correctSlot: 'Cổ Loa (Đông Anh, Hà Nội)' },
          { id: 'dp51', item: 'Hai Bà Trưng khởi nghĩa đóng đô', correctSlot: 'Hát Môn - Mê Linh (Hà Nội)' },
          { id: 'dp52', item: 'Lý Nam Đế (Lý Bí) đóng đô', correctSlot: 'Vạn Xuân (Cửa sông Tô Lịch)' }
        ],
        hint: 'Địa danh kinh đô của các triều đại sơ khai và khởi nghĩa giải phóng dân tộc.',
        explanation: 'Hùng Vương -> Phong Châu; An Dương Vương -> Cổ Loa; Hai Bà Trưng -> Mê Linh; Lý Nam Đế -> Cửa sông Tô Lịch.'
      },
      {
        question: 'Kéo thả các trận chiến/khởi nghĩa vang dội vào người lãnh đạo tương ứng:',
        type: 'drag_drop',
        slots: ['Khúc Thừa Dụ', 'Dương Đình Nghệ', 'Ngô Quyền', 'Mai Thúc Loan'],
        dragPairs: [
          { id: 'dp53', item: 'Nổi dậy chiếm phủ Tống Bình năm 905 xưng Tiết độ sứ mở nền tự chủ', correctSlot: 'Khúc Thừa Dụ' },
          { id: 'dp54', item: 'Đem quân từ Thanh Hóa hạ thành Đại La đánh tan quân Nam Hán năm 931', correctSlot: 'Dương Đình Nghệ' },
          { id: 'dp55', item: 'Đại thắng bãi cọc ngầm Bạch Đằng năm 938 chấm dứt nghìn năm Bắc thuộc', correctSlot: 'Ngô Quyền' },
          { id: 'dp56', item: 'Xây dựng căn cứ Sa Nam (Nghệ An), xưng Mai Hắc Đế chống quân Đường năm 713', correctSlot: 'Mai Thúc Loan' }
        ],
        hint: 'Các anh hùng dân tộc trong phong trào đấu tranh giành độc lập đầu thế kỷ X.',
        explanation: '905 -> Khúc Thừa Dụ; 931 -> Dương Đình Nghệ; 938 -> Ngô Quyền; Sa Nam/Mai Hắc Đế -> Mai Thúc Loan.'
      }
    ]
  },

  // =========================================================================
  // 4. ÔN TẬP CHƯƠNG 1: VÌ SAO PHẢI HỌC LỊCH SỬ? (ĐÚNG 15 CÂU TRẮC NGHIỆM MCQ)
  // =========================================================================
  {
    id: 'quiz-h6-ch1-revision',
    title: 'Lịch sử 6 - Ôn tập Chương 1: Vì sao phải học Lịch sử?',
    titleEn: 'History 6 - Chapter 1 Revision: Why Study History?',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Phân môn Lịch sử',
    category: 'social',
    testType: 'regular',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Bộ 15 câu hỏi trắc nghiệm chuẩn mực ôn tập toàn bộ kiến thức Chương 1: Khái niệm lịch sử, các nguồn tư liệu và phương pháp tính thời gian.',
    descriptionEn: 'Chapter 1 Revision Quiz: exactly 15 multiple-choice questions on historiography, sources, and chronology.',
    questions: [
      {
        question: 'Lịch sử là gì?',
        type: 'mcq',
        options: [
          'Những câu chuyện viễn tưởng do con người sáng tác',
          'Toàn bộ những gì đã diễn ra trong quá khứ của xã hội loài người',
          'Các quy luật tự nhiên về thời tiết và vũ trụ',
          'Dự báo những sự kiện sẽ diễn ra trong tương lai'
        ],
        answerIndex: 1,
        hint: 'Lịch sử là sự thật khách quan đã diễn ra.',
        explanation: 'SGK Lịch sử 6 định nghĩa: Lịch sử là tất cả những gì đã diễn ra trong quá khứ của loài người.'
      },
      {
        question: 'Yếu tố nào dưới đây KHÔNG PHẢI là đối tượng nghiên cứu của Sử học?',
        type: 'mcq',
        options: ['Các cuộc kháng chiến giữ nước', 'Sự phát triển công cụ lao động cổ đại', 'Sự quay của Trái Đất quanh Mặt Trời', 'Sự hình thành các quốc gia cổ'],
        answerIndex: 2,
        hint: 'Sự quay của Trái Đất thuộc môn Địa lý và Thiên văn.',
        explanation: 'Sử học tập trung nghiên cứu đời sống và hoạt động con người trong quá khứ.'
      },
      {
        question: 'Tư liệu truyền miệng có ưu điểm nổi bật nào?',
        type: 'mcq',
        options: ['Chính xác tuyệt đối 100% không bị dị bản', 'Lưu giữ tâm tư, nguyện vọng và ký ức nhân dân qua nhiều thế hệ', 'Khắc trực tiếp trên đá cổ', 'Ghi chép cụ thể ngày tháng'],
        answerIndex: 1,
        hint: 'Gồm thần thoại, truyền thuyết, ca dao.',
        explanation: 'Tư liệu truyền miệng phản ánh tình cảm, thái độ của nhân dân đối với nhân vật, sự kiện lịch sử.'
      },
      {
        question: 'Trống đồng Đông Sơn thuộc loại nguồn tư liệu lịch sử nào?',
        type: 'mcq',
        options: ['Tư liệu chữ viết', 'Tư liệu hiện vật', 'Tư liệu truyền miệng', 'Tư liệu phim ảnh'],
        answerIndex: 1,
        hint: 'Là di vật do người xưa chế tác và để lại.',
        explanation: 'Trống đồng là hiện vật vật chất do cư dân cổ đại chế tác và bảo tồn qua thời gian.'
      },
      {
        question: 'Loại tư liệu nào cung cấp thông tin chữ viết trên bia đá, giáp cốt hoặc sách cổ?',
        type: 'mcq',
        options: ['Tư liệu hiện vật', 'Tư liệu truyền miệng', 'Tư liệu chữ viết', 'Tư liệu khảo cổ'],
        answerIndex: 2,
        hint: 'Chứa hệ thống ký tự ghi chép.',
        explanation: 'Văn bia, thư tịch cổ, giáp cốt văn là nguồn tư liệu chữ viết trực tiếp.'
      },
      {
        question: 'Mục đích tối cao của việc học tập môn Lịch sử là gì?',
        type: 'mcq',
        options: ['Thuộc lòng các mốc ngày tháng', 'Hiểu cội nguồn, rút ra bài học quá khứ để xây dựng tương lai', 'Để tham gia trò chơi đố vui', 'Để viết tiểu thuyết hư cấu'],
        answerIndex: 1,
        hint: 'Dân ta phải biết sử ta - Cho tường gốc tích nước nhà Việt Nam.',
        explanation: 'Học Lịch sử để biết gốc tích tổ tiên, quê hương và vận dụng kinh nghiệm quá khứ cho hiện tại.'
      },
      {
        question: 'Nhà sử học Herodotus (Hê-rô-đốt) nổi tiếng đến từ quốc gia cổ đại nào?',
        type: 'mcq',
        options: ['Ai Cập cổ đại', 'Hy Lạp cổ đại', 'La Mã cổ đại', 'Trung Quốc cổ đại'],
        answerIndex: 1,
        hint: 'Quốc gia giáp Địa Trung Hải nổi tiếng với thành bang Aten.',
        explanation: 'Herodotus là nhà sử học kiệt xuất của Hy Lạp cổ đại sống vào thế kỷ V TCN.'
      },
      {
        question: 'Một thập kỷ trong cách tính thời gian lịch sử bằng bao nhiêu năm?',
        type: 'mcq',
        options: ['5 năm', '10 năm', '100 năm', '1000 năm'],
        answerIndex: 1,
        hint: '1 thập kỷ = 10 năm.',
        explanation: 'Thập kỷ là khoảng thời gian 10 năm liên tiếp.'
      },
      {
        question: 'Một thế kỷ trong lịch sử có độ dài là bao nhiêu năm?',
        type: 'mcq',
        options: ['10 năm', '50 năm', '100 năm', '1000 năm'],
        answerIndex: 2,
        hint: 'Chữ "thế kỷ" tương ứng với 100 năm.',
        explanation: '1 thế kỷ = 100 năm.'
      },
      {
        question: 'Một thiên niên kỷ tương ứng với bao nhiêu năm?',
        type: 'mcq',
        options: ['100 năm', '500 năm', '1000 năm', '10000 năm'],
        answerIndex: 2,
        hint: 'Gấp 10 lần thế kỷ.',
        explanation: '1 thiên niên kỷ = 1000 năm.'
      },
      {
        question: 'Năm 179 TCN thuộc thế kỷ thứ mấy?',
        type: 'mcq',
        options: ['Thế kỷ I TCN', 'Thế kỷ II TCN', 'Thế kỷ III TCN', 'Thế kỷ IV TCN'],
        answerIndex: 1,
        hint: 'Năm từ 200 TCN đến 101 TCN thuộc thế kỷ II TCN.',
        explanation: 'Năm 179 TCN thuộc thế kỷ II trước Công nguyên.'
      },
      {
        question: 'Âm lịch là lịch được tính theo chu kỳ chuyển động của:',
        type: 'mcq',
        options: ['Trái Đất quay quanh Mặt Trời', 'Mặt Trăng quay quanh Trái Đất', 'Sao Hỏa quay quanh Mặt Trời', 'Trái Đất tự quay quanh trục'],
        answerIndex: 1,
        hint: 'Dựa vào hiện tượng trăng tròn trăng khuyết.',
        explanation: 'Âm lịch dựa trên chu kỳ trăng tròn khuyết (khoảng 29,5 ngày/tháng).'
      },
      {
        question: 'Dương lịch dựa vào chu kỳ chuyển động nào dưới đây?',
        type: 'mcq',
        options: ['Mặt Trăng quay quanh Trái Đất', 'Trái Đất quay quanh Mặt Trời', 'Mặt Trời quay quanh Ngân Hà', 'Thủy triều dâng rút'],
        answerIndex: 1,
        hint: 'Một chu kỳ mất 365 ngày 6 giờ.',
        explanation: 'Dương lịch tính theo chu kỳ Trái Đất quay một vòng quanh Mặt Trời.'
      },
      {
        question: 'Bộ quốc sử đầu tiên của Việt Nam do ai biên soạn vào năm 1272?',
        type: 'mcq',
        options: ['Ngô Sĩ Liên', 'Lê Văn Hưu', 'Phan Huy Chú', 'Trần Trọng Kim'],
        answerIndex: 1,
        hint: 'Tác giả bộ "Đại Việt sử ký" thời vua Trần Thánh Tông.',
        explanation: 'Lê Văn Hưu biên soạn bộ Đại Việt sử ký năm 1272 dưới thời nhà Trần.'
      },
      {
        question: 'Muốn phục dựng lại bức tranh lịch sử chân thực nhất, các nhà khoa học phải làm gì?',
        type: 'mcq',
        options: ['Chỉ tin tưởng vào tư liệu truyền miệng', 'Đối chiếu, kiểm chứng đa dạng nhiều nguồn tư liệu lịch sử', 'Sáng tác thêm tình tiết hư cấu', 'Chỉ dựa vào tưởng tượng'],
        answerIndex: 1,
        hint: 'Phải phối hợp hiện vật, chữ viết và truyền miệng.',
        explanation: 'Sử học cần khai thác, phân tích và so sánh đối chiếu nhiều nguồn tư liệu để đảm bảo tính khách quan khoa học.'
      }
    ]
  },

  // =========================================================================
  // 5. ÔN TẬP CHƯƠNG 2: XÃ HỘI NGUYÊN THỦY (ĐÚNG 15 CÂU TRẮC NGHIỆM MCQ)
  // =========================================================================
  {
    id: 'quiz-h6-ch2-revision',
    title: 'Lịch sử 6 - Ôn tập Chương 2: Xã hội nguyên thủy',
    titleEn: 'History 6 - Chapter 2 Revision: Primitive Society',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Phân môn Lịch sử',
    category: 'social',
    testType: 'regular',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Bộ 15 câu hỏi trắc nghiệm ôn tập Chương 2: Quá trình tiến hóa từ Vượn người thành Người tinh khôn và đời sống nguyên thủy ở Việt Nam.',
    descriptionEn: 'Chapter 2 Revision Quiz: 15 MCQs covering human evolution, fire discovery, primitive society, and archaeology in Vietnam.',
    questions: [
      {
        question: 'Quá trình tiến hóa từ Vượn người thành con người trải qua các chặng nào?',
        type: 'mcq',
        options: [
          'Vượn người ➔ Người tối cổ ➔ Người tinh khôn',
          'Người tối cổ ➔ Vượn người ➔ Người hiện đại',
          'Vượn người ➔ Người tinh khôn ➔ Người tối cổ',
          'Thị tộc ➔ Bộ lạc ➔ Người tối cổ'
        ],
        answerIndex: 0,
        hint: 'Khởi đầu từ vượn cổ cách ngày nay 5 - 6 triệu năm.',
        explanation: 'Sơ đồ tiến hóa chuẩn: Vượn người -> Người tối cổ (4 triệu năm) -> Người tinh khôn (15 vạn năm).'
      },
      {
        question: 'Thể tích hộp sọ của Người tối cổ đạt khoảng bao nhiêu?',
        type: 'mcq',
        options: ['400 - 500 cm³', '850 - 1100 cm³', '1400 cm³', '2000 cm³'],
        answerIndex: 1,
        hint: 'Lớn hơn Vượn người (400-500) và nhỏ hơn Người tinh khôn (1400).',
        explanation: 'Thể tích não Người tối cổ phát triển lên khoảng 850 - 1100 cm³.'
      },
      {
        question: 'Nhân tố quyết định trực tiếp biến Vượn người thành Con người là:',
        type: 'mcq',
        options: ['Điều kiện thời tiết mưa nhiều', 'Lao động sản xuất và chế tạo công cụ', 'Ăn hoa quả rừng chín', 'Trốn chạy dã thú'],
        answerIndex: 1,
        hint: 'Luận điểm nổi tiếng của triết gia Ăng-ghen.',
        explanation: 'Lao động chế tác công cụ giúp hoàn thiện bàn tay, dáng đứng thẳng và tư duy bộ não.'
      },
      {
        question: 'Phát minh vĩ đại nhất của Người tối cổ giúp thay đổi hoàn toàn điều kiện sinh tồn là:',
        type: 'mcq',
        options: ['Chế tạo gốm sứ', 'Tìm ra lửa và biết giữ lửa', 'Đúc trống đồng', 'Xây nhà tầng'],
        answerIndex: 1,
        hint: 'Dùng để nướng chín thức ăn, sưởi ấm và xua đuổi thú dữ.',
        explanation: 'Lửa giúp con người thoát khỏi ăn sống nuốt tươi, tăng sức đề kháng và bảo vệ bản thân.'
      },
      {
        question: 'Người tinh khôn xuất hiện vào khoảng thời gian nào?',
        type: 'mcq',
        options: ['5 - 6 triệu năm trước', '4 triệu năm trước', '15 vạn năm trước', '4000 năm trước'],
        answerIndex: 2,
        hint: 'Khoảng 150.000 năm trước.',
        explanation: 'Người tinh khôn (Homo sapiens) xuất hiện cách đây khoảng 15 vạn năm.'
      },
      {
        question: 'Đặc điểm kỹ thuật chế tác đá nổi bật của Người tinh khôn là:',
        type: 'mcq',
        options: ['Chỉ biết ghè đẽo thô sơ', 'Kỹ thuật mài nhẵn lưỡi, đục lỗ tra cán', 'Không dùng đồ đá', 'Chỉ dùng vỏ cây'],
        answerIndex: 1,
        hint: 'Tạo ra sản phẩm sắc bén và nhiều hình dáng chuyên dụng.',
        explanation: 'Kỹ thuật mài đá nhẵn đánh dấu bước tiến lớn của đồ đá mới.'
      },
      {
        question: 'Di chỉ khảo cổ rìu tay đá có niên đại 80 vạn năm trước ở Việt Nam được phát hiện tại:',
        type: 'mcq',
        options: ['Núi Đọ (Thanh Hóa)', 'An Khê (Gia Lai)', 'Thẩm Khuyên (Lạng Sơn)', 'Soi Nhụ (Quảng Ninh)'],
        answerIndex: 1,
        hint: 'Địa danh thuộc vùng Tây Nguyên trù phú.',
        explanation: 'Bộ rìu tay đá cuội thô sơ 800.000 năm được phát hiện tại Rộc Tủng, Gò Đá (An Khê, Gia Lai).'
      },
      {
        question: 'Răng hóa thạch của Người tối cổ ở Việt Nam tìm thấy tại hang động nào?',
        type: 'mcq',
        options: ['Hang Con Moong (Thanh Hóa)', 'Hang Thẩm Khuyên, Thẩm Hai (Lạng Sơn)', 'Hang Sơn Doòng (Quảng Bình)', 'Động Phong Nha'],
        answerIndex: 1,
        hint: 'Thuộc tỉnh miền núi phía Bắc giáp biên giới.',
        explanation: 'Di tích răng hóa thạch Người tối cổ (40-30 vạn năm) tìm thấy ở Lạng Sơn.'
      },
      {
        question: 'Tổ chức xã hội đầu tiên của Người tinh khôn gồm các gia đình cùng huyết thống gọi là:',
        type: 'mcq',
        options: ['Bầy người nguyên thủy', 'Thị tộc', 'Bộ lạc', 'Giai cấp'],
        answerIndex: 1,
        hint: 'Nhóm người 20-30 người chung dòng máu.',
        explanation: 'Thị tộc là nhóm người gồm vài chục gia đình có cùng quan hệ huyết thống, hợp sức lao động.'
      },
      {
        question: 'Nhiều thị tộc sống cạnh nhau trên cùng một địa bàn đất đai hợp thành:',
        type: 'mcq',
        options: ['Giai cấp', 'Bộ lạc', 'Nhà nước', 'Thị quốc'],
        answerIndex: 1,
        hint: 'Tổ chức liên minh nhiều thị tộc.',
        explanation: 'Bộ lạc gồm nhiều thị tộc cư trú trên cùng địa bàn, có tên gọi và tập quán chung.'
      },
      {
        question: 'Kim loại đầu tiên con người phát minh ra để chế tạo công cụ thay thế đồ đá là:',
        type: 'mcq',
        options: ['Sắt', 'Đồng thau (Đồng đỏ)', 'Vàng', 'Nhôm'],
        answerIndex: 1,
        hint: 'Dễ nung chảy ở nhiệt độ thấp hơn sắt.',
        explanation: 'Khoảng thiên niên kỷ IV TCN, cư dân Tây Á phát minh ra đồng đỏ (đồng thau).'
      },
      {
        question: 'Khi công cụ kim loại ra đời, năng suất lao động tăng vọt dẫn tới hệ quả xã hội nào?',
        type: 'mcq',
        options: ['Mọi người bình đẳng như cũ', 'Xuất hiện sản phẩm dư thừa và sự phân hóa giàu nghèo', 'Con người quay lại sống trong hang động', 'Thị tộc tan rã không còn gia đình'],
        answerIndex: 1,
        hint: 'Mầm mầm tư hữu xuất hiện.',
        explanation: 'Sản phẩm dư thừa bị tư hữu hóa, làm xã hội nguyên thủy rạn nứt và giai cấp ra đời.'
      },
      {
        question: 'Sự xuất hiện tư hữu và phân hóa giai cấp đã dẫn đến sự ra đời của hình thái nào?',
        type: 'mcq',
        options: ['Công xã nguyên thủy', 'Nhà nước', 'Bầy người nguyên thủy', 'Thị tộc mẫu hệ'],
        answerIndex: 1,
        hint: 'Bộ máy quyền lực cai trị xã hội.',
        explanation: 'Nhà nước ra đời để quản lý xã hội có phân hóa giai cấp.'
      },
      {
        question: 'Cư dân nguyên thủy Việt Nam bắt đầu biết làm đồ gốm từ nền văn hóa nào?',
        type: 'mcq',
        options: ['Văn hóa Hòa Bình', 'Văn hóa Bắc Sơn', 'Văn hóa Phùng Nguyên', 'Văn hóa Đông Sơn'],
        answerIndex: 1,
        hint: 'Nền văn hóa đá mới miền núi phía Bắc.',
        explanation: 'Văn hóa Bắc Sơn chứng kiến sự ra đời của kỹ thuật nặn và nung đồ gốm sơ khai.'
      },
      {
        question: 'Nguyên nhân cốt lõi khiến xã hội nguyên thủy trên thế giới tan rã là gì?',
        type: 'mcq',
        options: ['Do thiên tai bão lũ kéo dài', 'Do sự phát triển của công cụ kim loại dẫn tới sản phẩm dư thừa', 'Do thú dữ tấn công', 'Do con người ngừng lao động'],
        answerIndex: 1,
        hint: 'Công cụ kim khí làm thay đổi quan hệ sản xuất.',
        explanation: 'Phát minh kim khí làm tăng năng suất, tạo dư thừa, nảy sinh tư hữu và làm xã hội nguyên thủy tan rã.'
      }
    ]
  },

  // =========================================================================
  // 6. ÔN TẬP CHƯƠNG 3: XÃ HỘI CỔ ĐẠI (ĐÚNG 15 CÂU TRẮC NGHIỆM MCQ)
  // =========================================================================
  {
    id: 'quiz-h6-ch3-revision',
    title: 'Lịch sử 6 - Ôn tập Chương 3: Xã hội Cổ đại & Văn minh Nhân loại',
    titleEn: 'History 6 - Chapter 3 Revision: Ancient Civilizations',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Phân môn Lịch sử',
    category: 'social',
    testType: 'regular',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Bộ 15 câu hỏi trắc nghiệm ôn tập Chương 3: Văn minh Ai Cập, Lưỡng Hà, Ấn Độ, Trung Quốc, Hy Lạp và La Mã cổ đại.',
    descriptionEn: 'Chapter 3 Revision Quiz: 15 MCQs on ancient Eastern and Western civilizations, achievements, and legacies.',
    questions: [
      {
        question: 'Các nền văn minh phương Đông cổ đại đều hình thành bên lưu vực:',
        type: 'mcq',
        options: ['Các bán đảo ven biển', 'Các con sông lớn trù phú', 'Vùng sa mạc khô hạn', 'Các vùng đồi núi cao'],
        answerIndex: 1,
        hint: 'Nơi có phù sa màu mỡ phát triển lúa nước.',
        explanation: 'Sông Nin, Lưỡng Hà, Sông Hằng, Hoàng Hà nuôi dưỡng văn minh phương Đông.'
      },
      {
        question: 'Chế độ chính trị phổ biến ở các quốc gia cổ đại phương Đông là:',
        type: 'mcq',
        options: ['Dân chủ chủ nô', 'Quân chủ chuyên chế cổ đại', 'Cộng hòa nghị viện', 'Thị quốc độc lập'],
        answerIndex: 1,
        hint: 'Vua (Pharaon, Thiên tử) nắm toàn bộ quyền lực.',
        explanation: 'Vua có quyền lực tuyệt đối chỉ đạo thủy lợi và quân đội.'
      },
      {
        question: 'Kim tự tháp Ai Cập cổ đại được xây dựng nhằm mục đích chính gì?',
        type: 'mcq',
        options: ['Làm đài quan sát thiên văn', 'Làm lăng mộ cất giữ thi hài Pharaoh', 'Làm kho chứa lương thực', 'Làm đền thờ thần linh'],
        answerIndex: 1,
        hint: 'Nơi lưu giữ xác ướp của vua.',
        explanation: 'Kim tự tháp là công trình lăng mộ vĩ đại bảo vệ thi hài Pharaoh.'
      },
      {
        question: 'Chữ hình nêm (tiết hình) là sản phẩm chữ viết độc đáo của cư dân:',
        type: 'mcq',
        options: ['Ai Cập', 'Lưỡng Hà', 'Ấn Độ', 'Trung Quốc'],
        answerIndex: 1,
        hint: 'Dùng que nhọn ấn vào phiến đất sét mềm.',
        explanation: 'Người Lưỡng Hà phát minh chữ hình nêm khắc trên gạch đất sét.'
      },
      {
        question: 'Bộ luật thành văn cổ nhất thế giới còn nguyên vẹn là bộ luật nào?',
        type: 'mcq',
        options: ['Luật 12 Bảng', 'Bộ luật Hammurabi', 'Luật Hồng Đức', 'Bộ luật Napoleon'],
        answerIndex: 1,
        hint: 'Khắc trên bia đá đen của vua Babylon.',
        explanation: 'Bộ luật Hammurabi Lưỡng Hà gồm 282 điều khoản.'
      },
      {
        question: 'Chế độ phân chia xã hội theo 4 đẳng cấp Varna là đặc trưng của quốc gia nào?',
        type: 'mcq',
        options: ['Ai Cập cổ đại', 'Ấn Độ cổ đại', 'La Mã cổ đại', 'Trung Quốc cổ đại'],
        answerIndex: 1,
        hint: 'Phân biệt Braman, Kshatriya, Vaisya, Sudra.',
        explanation: 'Chế độ Varna phân hóa khắt khe xã hội Ấn Độ cổ đại.'
      },
      {
        question: 'Hệ thống chữ số từ 0 đến 9 đang được toàn thế giới sử dụng do ai sáng tạo?',
        type: 'mcq',
        options: ['Người Hy Lạp', 'Người Ấn Độ cổ đại', 'Người Ả Rập', 'Người La Mã'],
        answerIndex: 1,
        hint: 'Sau đó người Ả Rập truyền sang phương Tây.',
        explanation: 'Cư dân Ấn Độ cổ đại phát minh chữ số 0 và hệ 10 chữ số.'
      },
      {
        question: 'Ai là người thống nhất Trung Quốc và xưng Hoàng đế năm 221 TCN?',
        type: 'mcq',
        options: ['Hán Vũ Đế', 'Tần Thủy Hoàng', 'Đường Thái Tông', 'Tống Thái Tổ'],
        answerIndex: 1,
        hint: 'Chủ nhân lăng mộ đội quân đất nung.',
        explanation: 'Tần Thủy Hoàng lập ra triều đại phong kiến tập quyền đầu tiên.'
      },
      {
        question: 'Nền kinh tế phương Tây cổ đại (Hy Lạp & La Mã) phát triển mạnh mẽ ngành nào?',
        type: 'mcq',
        options: ['Nông nghiệp trồng lúa nước', 'Thủ công nghiệp và thương nghiệp hàng hải', 'Chăn nuôi du mục', 'Săn bắt hái lượm'],
        answerIndex: 1,
        hint: 'Nhờ vị trí giáp biển Địa Trung Hải.',
        explanation: 'Bờ biển khúc khuỷu, nhiều cảng tốt thúc đẩy thương mại đường biển.'
      },
      {
        question: 'Thể chế Dân chủ chủ nô đạt đến đỉnh cao tại thành bang nào của Hy Lạp?',
        type: 'mcq',
        options: ['Xpác-ta (Sparta)', 'A-ten (Aten)', 'Cơ-rét (Crete)', 'Trôi (Troy)'],
        answerIndex: 1,
        hint: 'Cái nôi của dân chủ phương Tây.',
        explanation: 'Aten là thành bang dân chủ tiêu biểu nhất thời cổ đại.'
      },
      {
        question: 'Hệ thống chữ cái A, B, C (Latinh) ngày nay có nguồn gốc từ đâu?',
        type: 'mcq',
        options: ['Ai Cập & Lưỡng Hà', 'Hy Lạp & La Mã cổ đại', 'Ấn Độ cổ đại', 'Trung Quốc cổ đại'],
        answerIndex: 1,
        hint: 'Chữ cái Hy Lạp và La Mã.',
        explanation: 'Chữ cái Latinh là di sản vĩ đại của Hy Lạp và La Mã.'
      },
      {
        question: 'Công trình Đấu trường Colosseum nổi tiếng nằm ở quốc gia cổ đại nào?',
        type: 'mcq',
        options: ['Hy Lạp cổ đại', 'Đế chế La Mã', 'Ai Cập cổ đại', 'Ba Tư cổ đại'],
        answerIndex: 1,
        hint: 'Kỳ quan kiến trúc tại thủ đô Rome ngày nay.',
        explanation: 'Đấu trường Colosseum là biểu tượng sức mạnh đế chế La Mã.'
      },
      {
        question: 'Sự kiện nào đánh dấu sự kết thúc của thời kỳ Cổ đại phương Tây năm 476?',
        type: 'mcq',
        options: ['Tần Thủy Hoàng lên ngôi', 'Đế chế Tây La Mã sụp đổ', 'Chiến tranh Ba Tư bùng nổ', 'Xây xong Kim tự tháp'],
        answerIndex: 1,
        hint: 'Tây La Mã bị người Man di xâm chiếm.',
        explanation: 'Năm 476, Tây La Mã sụp đổ, mở ra thời Trung đại.'
      },
      {
        question: 'Nhà toán học Hy Lạp cổ đại nổi tiếng với Định lý về tam giác vuông là:',
        type: 'mcq',
        options: ['Euclid (Ơ-cli-đơ)', 'Pythagoras (Pi-ta-go)', 'Archimedes (Ác-si-mét)', 'Thales (Ta-lét)'],
        answerIndex: 1,
        hint: 'Định lý bình phương cạnh huyền.',
        explanation: 'Pythagoras phát minh định lý toán học kinh điển.'
      },
      {
        question: 'Dương lịch chúng ta dùng ngày nay được hoàn thiện dựa trên cách tính lịch của:',
        type: 'mcq',
        options: ['Người Trung Quốc', 'Người La Mã và Hy Lạp cổ đại', 'Người Ấn Độ', 'Người Babylon'],
        answerIndex: 1,
        hint: 'Lịch Julius và Gregorian.',
        explanation: 'Dương lịch tính theo chu kỳ Trái Đất quay quanh Mặt Trời của người La Mã.'
      }
    ]
  },

  // =========================================================================
  // 7. ÔN TẬP CHƯƠNG 4: ĐÔNG NAM Á TỪ CÔNG NGUYÊN ĐẾN THẾ KỶ X (ĐÚNG 15 CÂU)
  // =========================================================================
  {
    id: 'quiz-h6-ch4-revision',
    title: 'Lịch sử 6 - Ôn tập Chương 4: Đông Nam Á từ thế kỷ I đến thế kỷ X',
    titleEn: 'History 6 - Chapter 4 Revision: Southeast Asia 1st - 10th Century',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Phân môn Lịch sử',
    category: 'social',
    testType: 'regular',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Bộ 15 câu hỏi trắc nghiệm ôn tập Chương 4: Vị trí địa lý, các vương quốc cổ Đông Nam Á và thành tựu giao lưu văn hóa.',
    descriptionEn: 'Chapter 4 Revision Quiz: 15 MCQs on Southeast Asian ancient kingdoms, trade routes, and cultural exchange.',
    questions: [
      {
        question: 'Khu vực Đông Nam Á nằm ở vị trí địa lý chiến lược như thế nào?',
        type: 'mcq',
        options: ['Nằm biệt lập giữa đại dương', 'Là cầu nối giữa Ấn Độ Dương - Thái Bình Dương và Ấn Độ - Trung Hoa', 'Nằm ở cực Bắc Trái Đất', 'Nằm hoàn toàn trong sa mạc'],
        answerIndex: 1,
        hint: 'Ngã tư đường giao thương hàng hải thế giới.',
        explanation: 'Đông Nam Á là phễu giao lưu giữa hai đại dương và hai nền văn minh lớn.'
      },
      {
        question: 'Khí hậu đặc trưng nổi bật của toàn bộ khu vực Đông Nam Á là:',
        type: 'mcq',
        options: ['Khí hậu ôn đới lạnh giá', 'Khí hậu nhiệt đới gió mùa', 'Khí hậu hoang mạc khô hạn', 'Khí hậu cực đới'],
        answerIndex: 1,
        hint: 'Nóng ẩm, mưa nhiều, có gió mùa.',
        explanation: 'Khí hậu nhiệt đới gió mùa tạo điều kiện cây lúa nước phát triển.'
      },
      {
        question: 'Nền tảng kinh tế nông nghiệp chung của các dân tộc Đông Nam Á là:',
        type: 'mcq',
        options: ['Trồng lúa mì', 'Trồng lúa nước', 'Chăn nuôi cừu du mục', 'Săn bắt cá tôm biển sâu'],
        answerIndex: 1,
        hint: 'Cây lương thực chủ đạo.',
        explanation: 'Văn minh lúa nước là mẫu số chung của văn hóa Đông Nam Á.'
      },
      {
        question: 'Một trong những quốc gia cổ đại xuất hiện sớm nhất ở hạ lưu sông Mê Công là:',
        type: 'mcq',
        options: ['Vương quốc Phù Nam', 'Đế quốc La Mã', 'Vương quốc Anh', 'Đại Việt'],
        answerIndex: 0,
        hint: 'Thương cảng Óc Eo nổi tiếng.',
        explanation: 'Phù Nam ra đời từ thế kỷ I TCN ở Nam Bộ Việt Nam và Campuchia.'
      },
      {
        question: 'Thương cảng quốc tế sầm uất bậc nhất của Vương quốc Phù Nam có tên là:',
        type: 'mcq',
        options: ['Vân Đồn', 'Óc Eo (An Giang)', 'Hội An', 'Đà Nẵng'],
        answerIndex: 1,
        hint: 'Di chỉ khảo cổ ở An Giang.',
        explanation: 'Óc Eo từng giao thương với La Mã, Ba Tư, Ấn Độ và Trung Hoa.'
      },
      {
        question: 'Vương quốc cổ Chăm-pa được hình thành ở khu vực nào của Việt Nam ngày nay?',
        type: 'mcq',
        options: ['Vùng Bắc Bộ', 'Vùng Duyên hải Trung Bộ', 'Vùng Nam Bộ', 'Vùng Tây Bắc'],
        answerIndex: 1,
        hint: 'Thánh địa Mỹ Sơn thuộc Quảng Nam.',
        explanation: 'Chăm-pa hình thành từ thế kỷ II ở dải đất Trung Bộ.'
      },
      {
        question: 'Đặc điểm phân loại các vương quốc phong kiến Đông Nam Á gồm 2 nhóm:',
        type: 'mcq',
        options: ['Vương quốc du mục và trồng trọt', 'Vương quốc lục địa và vương quốc hải đảo (ven biển)', 'Vương quốc sa mạc và băng giá', 'Vương quốc miền núi và thung lũng'],
        answerIndex: 1,
        hint: 'Nhóm mạnh về lúa nước và nhóm mạnh về buôn bán biển.',
        explanation: 'Lục địa (Angkor, Pagan) và Hải đảo (Sri Vijaya, Phù Nam).'
      },
      {
        question: 'Vương quốc đường biển bá chủ hàng hải vùng đảo Indonesia từ thế kỷ VII là:',
        type: 'mcq',
        options: ['Sri Vijaya (Sơ-ri Vi-jay-a)', 'Pagan', 'Sukhothai', 'Lan Xang'],
        answerIndex: 0,
        hint: 'Đế chế kiểm soát eo biển Malacca.',
        explanation: 'Sri Vijaya làm chủ đường thương mại biển qua eo Malacca.'
      },
      {
        question: 'Hai tôn giáo lớn từ Ấn Độ được cư dân Đông Nam Á đón nhận mạnh mẽ là:',
        type: 'mcq',
        options: ['Kitô giáo và Hồi giáo', 'Phật giáo và Ấn Độ giáo (Hindu)', 'Nho giáo và Đạo giáo', 'Do Thái giáo'],
        answerIndex: 1,
        hint: 'Tôn giáo tạo nên đền tháp Mỹ Sơn và Borobudur.',
        explanation: 'Phật giáo và Hindu giáo ảnh hưởng sâu sắc đến chính trị và nghệ thuật.'
      },
      {
        question: 'Cư dân Đông Nam Á đã tiếp thu chữ viết nào của Ấn Độ để sáng tạo chữ viết riêng?',
        type: 'mcq',
        options: ['Chữ La-tinh', 'Chữ Phạn (Sanskrit)', 'Chữ Hán', 'Chữ tượng hình'],
        answerIndex: 1,
        hint: 'Chữ cổ của các nhà sư Ấn Độ.',
        explanation: 'Chữ Phạn là nền tảng sáng tạo ra chữ Chăm cổ, Khmer cổ, Mon cổ.'
      },
      {
        question: 'Quần thể đại bảo tháp Phật giáo đồ sộ bậc nhất thế giới ở Indonesia là:',
        type: 'mcq',
        options: ['Thánh địa Mỹ Sơn', 'Đại bảo tháp Bo-ro-bu-đưa (Borobudur)', 'Đền Angkor Wat', 'Chùa Vàng Yangon'],
        answerIndex: 1,
        hint: 'Xây dựng vào thế kỷ IX trên đảo Java.',
        explanation: 'Borobudur là di sản Phật giáo lớn nhất thế giới.'
      },
      {
        question: 'Quần thể di tích đền tháp Hindu giáo nổi tiếng của người Chăm ở Quảng Nam là:',
        type: 'mcq',
        options: ['Tháp Bà Ponagar', 'Thánh địa Mỹ Sơn', 'Tháp Bánh Ít', 'Tháp Nhạn'],
        answerIndex: 1,
        hint: 'Di sản văn hóa thế giới UNESCO tại Quảng Nam.',
        explanation: 'Thánh địa Mỹ Sơn là trung tâm đền tháp Hindu giáo Chăm-pa.'
      },
      {
        question: 'Yếu tố cốt lõi thể hiện tính "Thống nhất trong đa dạng" của văn hóa Đông Nam Á là:',
        type: 'mcq',
        options: ['Dùng chung một ngôn ngữ', 'Cùng chung bản sắc văn minh lúa nước và tín ngưỡng bản địa', 'Cùng một triều đại cai trị', 'Cùng một loại trang phục'],
        answerIndex: 1,
        hint: 'Nền tảng lúa nước hòa quyện đa dạng dân tộc.',
        explanation: 'Thống nhất ở nền lúa nước và tín ngưỡng; đa dạng ở sắc thái tộc người.'
      },
      {
        question: 'Mặt hàng xuất khẩu độc đáo nổi tiếng của các vương quốc biển Đông Nam Á là:',
        type: 'mcq',
        options: ['Đạn dược', 'Hương liệu, gia vị (trầm hương, quế, hồ tiêu) và gốm sứ', 'Máy móc', 'Xe cộ'],
        answerIndex: 1,
        hint: 'Sản vật rừng nhiệt đới quý hiếm.',
        explanation: 'Gia vị và hương liệu Đông Nam Á được thương nhân thế giới săn lùng.'
      },
      {
        question: 'Thế kỷ IX - X đánh dấu bước ngoặt gì ở khu vực Đông Nam Á?',
        type: 'mcq',
        options: ['Toàn khu vực bị xâm chiếm', 'Sự bước vào thời kỳ hoàng kim của các vương quốc phong kiến', 'Các vương quốc sụp đổ hoàn toàn', 'Kinh tế suy ngoái'],
        answerIndex: 1,
        hint: 'Sự trỗi dậy rực rỡ của Angkor, Pagan, Dai Viet.',
        explanation: 'Thế kỷ X mở ra giai đoạn phát triển thịnh vượng của các quốc gia phong kiến.'
      }
    ]
  },

  // =========================================================================
  // 8. ÔN TẬP CHƯƠNG 5: VIỆT NAM TỪ THẾ KỶ VII TCN ĐẾN ĐẦU THẾ KỶ X (ĐÚNG 15 CÂU)
  // =========================================================================
  {
    id: 'quiz-h6-ch5-revision',
    title: 'Lịch sử 6 - Ôn tập Chương 5: Việt Nam từ thế kỷ VII TCN đến đầu thế kỷ X',
    titleEn: 'History 6 - Chapter 5 Revision: Vietnam 7th Century BC to 10th Century AD',
    grade: 6,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Phân môn Lịch sử',
    category: 'social',
    testType: 'final',
    durationMinutes: 15,
    xpReward: 120,
    description: 'Bộ 15 câu hỏi trắc nghiệm ôn tập Chương 5: Thời đại Hùng Vương - An Dương Vương, các cuộc đấu tranh chống Bắc thuộc và chiến thắng Bạch Đằng 938.',
    descriptionEn: 'Chapter 5 Revision Quiz: 15 MCQs on Van Lang - Au Lac, Anti-Northern Domination resistance, and Ngô Quyền victory 938.',
    questions: [
      {
        question: 'Nhà nước đầu tiên trong lịch sử dân tộc Việt Nam có tên là gì?',
        type: 'mcq',
        options: ['Âu Lạc', 'Văn Lang', 'Vạn Xuân', 'Đại Cồ Việt'],
        answerIndex: 1,
        hint: 'Ra đời thế kỷ VII TCN dưới thời Vua Hùng.',
        explanation: 'Nhà nước Văn Lang do Vua Hùng thành lập đóng đô ở Phong Châu.'
      },
      {
        question: 'Kinh đô của nhà nước Văn Lang đặt tại địa danh nào ngày nay?',
        type: 'mcq',
        options: ['Cổ Loa (Hà Nội)', 'Phong Châu (Phú Thọ)', 'Hoa Lư (Ninh Bình)', 'Thăng Long (Hà Nội)'],
        answerIndex: 1,
        hint: 'Nơi có di tích Đền Hùng thiêng liêng.',
        explanation: 'Phong Châu thuộc Việt Trì, Phú Thọ ngày nay.'
      },
      {
        question: 'Kỹ thuật chế tác kim loại đỉnh cao của cư dân Văn Lang - Âu Lạc là:',
        type: 'mcq',
        options: ['Rèn sắt', 'Đúc đồng thau (Đông Sơn)', 'Đúc vàng', 'Rèn nhôm'],
        answerIndex: 1,
        hint: 'Sản phẩm tiêu biểu là Trống đồng Đông Sơn.',
        explanation: 'Nghệ thuật đúc đồng Đông Sơn đạt trình độ đỉnh cao thế giới.'
      },
      {
        question: 'Thục Phán hợp nhất Lạc Việt và Tây Âu lập ra nhà nước Âu Lạc sau thắng lợi nào?',
        type: 'mcq',
        options: ['Kháng chiến chống quân Minh', 'Kháng chiến chống quân Tần (218 - 208 TCN)', 'Kháng chiến chống quân Nam Hán', 'Đánh tan quân Nguyên Mông'],
        answerIndex: 1,
        hint: 'Đánh bại tướng Tần Đồ Thư.',
        explanation: 'Sau khi đánh bại quân Tần, Thục Phán xưng An Dương Vương lập nước Âu Lạc.'
      },
      {
        question: 'Công trình thành lũy hình xoáy trôn ốc kiên cố thời Âu Lạc là:',
        type: 'mcq',
        options: ['Thành Nhà Hồ', 'Thành Cổ Loa', 'Thành Đại La', 'Thành Sơn Tây'],
        answerIndex: 1,
        hint: 'Nằm ở Đông Anh, Hà Nội.',
        explanation: 'Thành Cổ Loa 9 vòng xoáy trôn ốc là kiệt tác quân sự cổ đại.'
      },
      {
        question: 'Vũ khí thần kỳ bắn một lần nhiều mũi tên đồng thời An Dương Vương là:',
        type: 'mcq',
        options: ['Súng thần công', 'Nỏ liên châu (Nỏ thần)', 'Cung tên tre', 'Pháo đại bác'],
        answerIndex: 1,
        hint: 'Do Cao Lỗ chế tạo.',
        explanation: 'Nỏ liên châu bắn ra hàng loạt mũi tên đồng sắc bén.'
      },
      {
        question: 'Năm 179 TCN đánh dấu cột mốc đau thương nào trong lịch sử dân tộc?',
        type: 'mcq',
        options: ['Nhà Tần sụp đổ', 'Triệu Đà dùng mưu chiếm Âu Lạc, mở đầu thời Bắc thuộc', 'Nước Văn Lang ra đời', 'Ngô Quyền xưng vương'],
        answerIndex: 1,
        hint: 'Truyện Mị Châu - Trọng Thủy.',
        explanation: 'Triệu Đà chiếm Âu Lạc, bắt đầu hơn 1000 năm Bắc thuộc.'
      },
      {
        question: 'Mục đích thâm độc nhất của chính sách đô hộ phương Bắc đối với nước ta là:',
        type: 'mcq',
        options: ['Mở rộng đường giao thông', 'Sáp nhập lãnh thổ và đồng hóa dân tộc Việt', 'Giúp nhân dân làm giàu', 'Xây dựng trường học'],
        answerIndex: 1,
        hint: 'Xóa tên nước ta và biến người Việt thành người Hán.',
        explanation: 'Chính sách đồng hóa nhằm tiêu diệt văn hóa và bản sắc Việt.'
      },
      {
        question: 'Cuộc khởi nghĩa mở đầu cho phong trào chống Bắc thuộc bùng nổ năm 40 do ai lãnh đạo?',
        type: 'mcq',
        options: ['Bà Triệu', 'Hai Bà Trưng (Trưng Trắc, Trưng Nhị)', 'Lý Bí', 'Mai Thúc Loan'],
        answerIndex: 1,
        hint: 'Hát Môn - Mê Linh "Đánh đuổi Tô Định".',
        explanation: 'Hai Bà Trưng phất cờ khởi nghĩa năm 40 giành lại độc lập 3 năm.'
      },
      {
        question: 'Lý Bí lãnh đạo nhân dân khởi nghĩa năm 542 và lập ra nhà nước có tên là:',
        type: 'mcq',
        options: ['Đại Việt', 'Vạn Xuân', 'Đại Cồ Việt', 'Âu Lạc'],
        answerIndex: 1,
        hint: 'Mong muốn đất nước vạn mùa xuân độc lập.',
        explanation: 'Năm 544, Lý Bí xưng Lý Nam Đế, đặt tên nước là Vạn Xuân.'
      },
      {
        question: 'Khúc Thừa Dụ có công lao lịch sử gì vào năm 905?',
        type: 'mcq',
        options: ['Đúc trống đồng', 'Chiếm phủ Tống Bình, xưng Tiết độ sứ giành quyền tự chủ', 'Xây thành Cổ Loa', 'Xưng Vua ở Hoa Lư'],
        answerIndex: 1,
        hint: 'Đặt móng nền tự chủ đầu thế kỷ X.',
        explanation: 'Khúc Thừa Dụ nhân lúc nhà Đường suy yếu đã giành quyền tự chủ.'
      },
      {
        question: 'Vị anh hùng dân tộc lãnh đạo trận đại thắng Bạch Đằng năm 938 là:',
        type: 'mcq',
        options: ['Dương Đình Nghệ', 'Ngô Quyền', 'Lạc Long Quân', 'Trần Hưng Đạo'],
        answerIndex: 1,
        hint: 'Người nghĩ ra kế sách bãi cọc ngầm bịt sắt.',
        explanation: 'Ngô Quyền đại phá quân Nam Hán trên sông Bạch Đằng năm 938.'
      },
      {
        question: 'Kế sách độc đáo nhất Ngô Quyền sử dụng trong trận Bạch Đằng 938 là:',
        type: 'mcq',
        options: ['Đào hầm ngầm', 'Cắm bãi cọc gỗ bịt sắt vạt nhọn dưới lòng sông phối hợp thủy triều', 'Dùng hỏa công đốt rừng', 'Thương lượng hòa hoãn'],
        answerIndex: 1,
        hint: 'Lợi dụng hiện tượng tự nhiên nước triều lên xuống.',
        explanation: 'Bãi cọc ngầm lợi dụng thủy triều là đỉnh cao nghệ thuật quân sự.'
      },
      {
        question: 'Tướng giặc Nam Hán chỉ huy bị tử trận trên sông Bạch Đằng năm 938 là:',
        type: 'mcq',
        options: ['Tô Định', 'Mã Viện', 'Lưu Hoằng Tháo', 'Triệu Đà'],
        answerIndex: 2,
        hint: 'Hoàng tử con vua Nam Hán Lưu Nghiễm.',
        explanation: 'Lưu Hoằng Tháo trúng kế cọc ngầm và tử trận.'
      },
      {
        question: 'Ý nghĩa lịch sử vĩ đại nhất của chiến thắng Bạch Đằng năm 938 là:',
        type: 'mcq',
        options: ['Giảm thuế cho nhân dân', 'Chấm dứt hoàn toàn ách thống trị hơn 1000 năm Bắc thuộc, mở ra kỷ nguyên độc lập lâu dài', 'Xây dựng thêm thành quách', 'Mở mang đường giao thương'],
        answerIndex: 1,
        hint: 'Bước ngoặt kết thúc ngàn năm ngoại thuộc.',
        explanation: 'Bạch Đằng 938 khẳng định dứt khoát quyền sống độc lập, tự do muôn đời của dân tộc Việt Nam.'
      }
    ]
  }
];
