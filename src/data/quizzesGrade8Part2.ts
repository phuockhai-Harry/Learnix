import { CurriculumQuiz } from './curriculumData';

/**
 * Grade 8 Curriculum Quizzes Part 2
 * Covers Ngữ văn, Tiếng Anh, Lịch sử và Địa lý, Tin học for Grade 8 (Semesters 1 & 2)
 * Meets requirement: At least 4 Regular Tests + 1 Final Test per semester for each subject
 * Aligned with Vietnam Ministry of Education GDPT 2018
 */
export const GRADE_8_PART2_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // GRADE 8 - NGỮ VĂN 8 - SEMESTER 1
  // =========================================================================
  {
    id: 'quiz-g8-s1-lit-reg1',
    title: 'Ngữ văn 8 - Kiểm tra Thường xuyên 1: Truyện ngắn Hiện thực & Từ tượng hình, tượng thanh',
    titleEn: 'Literature 8 - Regular Assessment 1: Realist Short Stories & Onomatopoeia',
    grade: 8,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Tìm hiểu truyện ngắn Hiện thực Việt Nam (Tôi đi học, Lão Hạc) và từ tượng hình, tượng thanh.',
    descriptionEn: 'Vietnamese realist short stories and onomatopoeia/mimetic words in literary texts.',
    questions: [
      {
        question: 'Dòng nào sau đây chỉ gồm các TỪ TƯỢNG HÌNH gợi tả dáng vẻ, hình thái?',
        options: ['Lêu nghêu, lom khom, liêu xiêu', 'Ào ào, râm ran, róc rách', 'Ha hả, khúc khích, thì thầm', 'Lộp độp, râm ran, xì xào'],
        answerIndex: 0,
        hint: 'Từ tượng hình mô tả đường nét, dáng vẻ của người hoặc vật.',
        explanation: '"Lêu nghêu, lom khom, liêu xiêu" là các từ gợi tả dáng vẻ hình ảnh.'
      },
      {
        question: 'Trong truyện ngắn "Tôi đi học" của Thanh Tịnh, cảm xúc của nhân vật "tôi" buổi sáng đầu tiên đi học được ví với hình ảnh nào?',
        options: ['Mấy cành hoa tươi mỉm cười giữa bầu trời quang đãng', 'Cánh chim non bay lượn trên đồng cỏ rộng lớn', 'Ánh nắng ban mai rực rỡ chiếu qua kẽ lá', 'Dòng suối mát lành chảy róc rách qua khe đá'],
        answerIndex: 0,
        hint: 'Những cảm giác trong sáng ấy nảy nở trong lòng tôi như mấy cành hoa tươi...',
        explanation: 'Thanh Tịnh so sánh cảm xúc ngày tựu trường như "mấy cành hoa tươi mỉm cười giữa bầu trời quang đãng".'
      },
      {
        question: 'Biện pháp tu từ nói quá được sử dụng nhằm mục đích gì trong văn học nghệ thuật?',
        options: ['Nhấn mạnh, gây ấn tượng sâu sắc và tăng sức biểu cảm', 'Xác thực độ chính xác 100% của thông tin số liệu', 'Làm giảm nhẹ mức độ đau buồn, ghê sợ', 'Che giấu khuyết điểm của nhân vật'],
        answerIndex: 0,
        hint: 'Nói quá (phóng đại quy mô tính chất) nhằm nhấn mạnh cảm xúc.',
        explanation: 'Nói quá là biện pháp tu từ phóng đại mức độ, quy mô, tính chất nhằm nhấn mạnh và gây ấn tượng mạnh.'
      },
      {
        question: 'Trong truyện ngắn "Lão Hạc" của Nam Cao, chi tiết Lão Hạc gửi tiền và mảnh vườn cho ông giáo thể hiện phẩm chất cao đẹp nào?',
        options: ['Lòng tự trọng cao quý và tình yêu thương con vô bờ bến', 'Sự tính toán chi li về mặt tài chính', 'Niềm đam mê làm vườn và trồng trọt', 'Sự nhẹ dạ cả tin vào người khác'],
        answerIndex: 0,
        hint: 'Lão thà chết chứ không đụng vào mảnh vườn của con và không muốn phiền lụy hàng xóm.',
        explanation: 'Lão Hạc thà nhịn đói ăn bả chó tự vẫn chứ không tiêu vào số tiền của con trai, thể hiện đức hi sinh và lòng tự trọng vô cùng thiêng liêng.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-lit-reg2',
    title: 'Ngữ văn 8 - Kiểm tra Thường xuyên 2: Văn bản Thông tin & Đoạn văn Diễn dịch - Quy nạp',
    titleEn: 'Literature 8 - Regular Assessment 2: Informational Texts & Paragraph Structure',
    grade: 8,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Cấu trúc văn bản thuyết minh, đoạn văn diễn dịch, quy nạp, song hành và từ ngữ chỉ dẫn nguồn.',
    descriptionEn: 'Informative text features, deductive and inductive paragraph structure.',
    questions: [
      {
        question: 'Đoạn văn DIỄN DỊCH là đoạn văn có đặc điểm cấu trúc nào sau đây?',
        options: ['Câu chủ đề mang ý khái quát đứng ở đầu đoạn văn', 'Câu chủ đề mang ý khái quát đứng ở cuối đoạn văn', 'Không có câu chủ đề mang ý khái quát', 'Câu chủ đề lặp lại ở cả đầu và cuối đoạn văn'],
        answerIndex: 0,
        hint: 'Diễn dịch: đi từ ý chung tổng quát đến các ý chi tiết làm rõ.',
        explanation: 'Đoạn diễn dịch có câu chủ đề nằm ở vị trí đầu câu, các câu tiếp theo triển khai và làm sáng tỏ.'
      },
      {
        question: 'Mục đích chính của văn bản thông tin giới thiệu một cuốn sách hoặc di tích lịch sử là gì?',
        options: ['Cung cấp tri thức khách quan, xác thực và hướng dẫn người đọc tiếp cận', 'Thể hiện tình cảm yêu ghét cá nhân mà không cần căn cứ thực tế', 'Tạo ra cốt truyện hư cấu ly kỳ hấp dẫn', 'Bày tỏ quan điểm chính trị trừu tượng'],
        answerIndex: 0,
        hint: 'Tính chính xác, khách quan của văn bản thông tin.',
        explanation: 'Văn bản thông tin tập trung cung cấp dữ liệu xác thực, chính xác và có căn cứ khoa học rõ ràng.'
      },
      {
        question: 'Khi trích dẫn nguyên văn lời nói hoặc ý kiến của người khác trong văn bản, ta phải sử dụng dấu câu nào?',
        options: ['Dấu ngoặc kép (" ")', 'Dấu ngoặc đơn (( ))', 'Dấu chấm phẩy (;)', 'Dấu gạch ngang đơn lẻ'],
        answerIndex: 0,
        hint: 'Quy tắc chính tả trích dẫn nguyên văn.',
        explanation: 'Dấu ngoặc kép dùng để đánh dấu từ ngữ hoặc lời dẫn trực tiếp nguyên văn.'
      },
      {
        question: 'Phương tiện phi ngôn ngữ nào thường được kết hợp hiệu quả nhất trong văn bản thông tin để minh họa số liệu?',
        options: ['Biểu đồ, bảng thống kê số liệu và sơ đồ tư duy', 'Các câu cảm thán bộc lộ cảm xúc', 'Các từ ngữ tượng hình ẩn dụ', 'Các điển tích điển cố xưa'],
        answerIndex: 0,
        hint: 'Phương tiện trực quan biểu thị dữ liệu.',
        explanation: 'Biểu đồ, hình ảnh và bảng thống kê là các phương tiện phi ngôn ngữ giúp người đọc tiếp nhận dữ liệu nhanh chóng, trực quan.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-lit-reg3',
    title: 'Ngữ văn 8 - Kiểm tra Thường xuyên 3: Thơ Đường luật & Biện pháp Đảo ngữ',
    titleEn: 'Literature 8 - Regular Assessment 3: Tang Dynasty Poetic Forms & Inversion',
    grade: 8,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Quy luật thơ Thất ngôn bát cú Đường luật (Đề - Thực - Luận - Kết), niêm luật và biện pháp tu từ đảo ngữ.',
    descriptionEn: 'Tang-style poetry structure (Exposition, Development, Turn, Conclusion) and inversion syntax.',
    questions: [
      {
        question: 'Một bài thơ THẤT NGÔN BÁT CÚ Đường luật có cấu trúc gồm bao nhiêu câu thơ và mỗi câu bao nhiêu chữ?',
        options: ['8 câu, mỗi câu 7 chữ', '7 câu, mỗi câu 8 chữ', '4 câu, mỗi câu 7 chữ', '8 câu, mỗi câu 5 chữ'],
        answerIndex: 0,
        hint: 'Thất = 7, bát = 8, cú = câu.',
        explanation: 'Thất ngôn bát cú gồm 8 câu thơ, mỗi câu đúng 7 tiếng (chữ).'
      },
      {
        question: 'Bốn cặp câu trong một bài thơ Thất ngôn bát cú Đường luật lần lượt giữ vai trò cấu trúc nào?',
        options: ['Đề - Thực - Luận - Kết', 'Khai - Thừa - Chuyển - Hợp', 'Mở - Thân - Kết - Hậu', 'Nhập - Đề - Luận - Kết'],
        answerIndex: 0,
        hint: 'Cặp 1-2: Đề; cặp 3-4: Thực; cặp 5-6: Luận; cặp 7-8: Kết.',
        explanation: 'Cấu trúc chuẩn của thể thơ Thất ngôn bát cú gồm 4 phần: Đề (câu 1,2), Thực (câu 3,4), Luận (câu 5,6) và Kết (câu 7,8).'
      },
      {
        question: 'Trong câu thơ: "Lom khom dưới núi tiều vài chú / Lác đác bên sông chợ mấy nhà" (Bà Huyện Thanh Quan), tác giả dùng biện pháp nghệ thuật gì?',
        options: ['Đảo ngữ kết hợp phép đối chặt chẽ', 'Nói giảm nói tránh và điệp ngữ', 'Ẩn dụ chuyển đổi cảm giác', 'Hoán dụ lấy bộ phận chỉ toàn thể'],
        answerIndex: 0,
        hint: 'Đưa từ tượng hình "lom khom", "lác đác" lên trước chủ ngữ.',
        explanation: 'Đảo ngữ đưa vị từ/từ tượng hình lên đầu câu nhằm nhấn mạnh sự vắng vẻ, heo hút của cảnh sắc đèo Ngang.'
      },
      {
        question: 'Cặp câu nào trong bài thơ Thất ngôn bát cú bắt buộc phải có nghệ thuật ĐỐI nhau về thanh điệu và từ loại?',
        options: ['Hai câu Thực (câu 3-4) và hai câu Luận (câu 5-6)', 'Hai câu Đề (câu 1-2) và hai câu Kết (câu 7-8)', 'Chỉ câu 1 đối với câu 8', 'Không có câu nào bắt buộc phải đối'],
        answerIndex: 0,
        hint: 'Phần Thực và phần Luận là hai cặp đối bắt buộc trong thơ Đường luật.',
        explanation: 'Trong thơ thất ngôn bát cú Đường luật, câu 3 đối câu 4 (cặp Thực) và câu 5 đối câu 6 (cặp Luận) là quy tắc niêm luật nghiêm ngặt.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-lit-reg4',
    title: 'Ngữ văn 8 - Kiểm tra Thường xuyên 4: Hài kịch & Tiếng cười Châm biếm Xã hội',
    titleEn: 'Literature 8 - Regular Assessment 4: Satirical Comedy & Dramatic Conflict',
    grade: 8,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Xung đột kịch, hành động kịch, ngôn ngữ đối thoại - độc thoại và thủ pháp gây cười trong hài kịch cổ điển & hiện đại.',
    descriptionEn: 'Dramatic conflicts, monologue, dialogue and comic techniques in theater.',
    questions: [
      {
        question: 'Đặc trưng nghệ thuật cốt lõi tạo nên tiếng cười trong thể loại HÀI KỊCH là gì?',
        options: ['Sự mâu thuẫn, cọc cạch giữa cái xấu xa, lố bịch bên trong với cái vẻ hào nhoáng, giả tạo bên ngoài', 'Miêu tả bi kịch thê thảm và giọt nước mắt chia ly', 'Xây dựng hình tượng người anh hùng hoàn hảo không tì vết', 'Sử dụng các câu đố dân gian phức tạp'],
        answerIndex: 0,
        hint: 'Tiếng cười nảy sinh từ sự khập khiễng giữa thực chất và vẻ bề ngoài.',
        explanation: 'Hài kịch phơi bày cái xấu xa đê tiện đội lốt thanh cao đạo mạo để bật ra tiếng cười châm biếm sâu sắc.'
      },
      {
        question: 'Trong kịch bản văn học, phần ghi chú trong ngoặc đơn chỉ dẫn về hành động, cử chỉ, giọng điệu của nhân vật được gọi là gì?',
        options: ['Chỉ dẫn sân khấu (lời chú thích tác giả)', 'Lời thoại trực tiếp', 'Lời thoại nội tâm', 'Phát biểu của khán giả'],
        answerIndex: 0,
        hint: 'Lời văn của tác giả kịch dành cho đạo diễn và diễn viên xử lý trên sân khấu.',
        explanation: 'Chỉ dẫn sân khấu giúp diễn viên hiểu được cử chỉ, cảm xúc và bối cảnh hành động của nhân vật.'
      },
      {
        question: 'Đoạn trích "Ông Giuốc-đanh mặc lễ phục" của Mô-li-e châm biếm sâu cay thói xấu nào trong xã hội?',
        options: ['Thói học đòi quý tộc kệch cỡm, ngu dốt nhưng thích được tâng bốc của tầng lớp tư sản', 'Sự tham lam keo kiệt của người cho vay nặng lãi', 'Thói kiêu căng của những người có học thức cao', 'Tính nhút nhát sợ hãi khi gặp quan lại'],
        answerIndex: 0,
        hint: 'Ông Giuốc-đanh bỏ tiền ra may đồ quý tộc dù bị thợ may lừa xỏ quần áo ngược.',
        explanation: 'Vở kịch đả kích thói rởm đời, hám danh vọng quý tộc của những kẻ giàu có mà dốt nát.'
      },
      {
        question: 'Câu tục ngữ, thành ngữ nào sau đây phê phán tính cách khoe khoang, thích làm màu mà không có thực lực?',
        options: ['Thùng rỗng kêu to', 'Uống nước nhớ nguồn', 'Lá lành đùm lá rách', 'Có công mài sắt có ngày nên kim'],
        answerIndex: 0,
        hint: 'Thùng không có gì bên trong thường phát ra tiếng vang rất lớn.',
        explanation: '"Thùng rỗng kêu to" châm biếm kẻ dốt nát bên trong nhưng hay khoác lác thể hiện bên ngoài.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-lit-final',
    title: 'Ngữ văn 8 - Đề Kiểm Tra Cuối Học Kỳ 1 (Đọc hiểu Văn bản & Kỹ năng Viết bài Nghị luận)',
    titleEn: 'Literature 8 - Semester 1 Final Examination (Comprehensive)',
    grade: 8,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề kiểm tra tổng hợp cuối kỳ 1: Đọc hiểu văn bản nghệ thuật, các biện pháp tu từ, từ Hán Việt, đoạn văn liên kết và nghị luận xã hội.',
    descriptionEn: 'End of Semester 1 comprehensive test: Reading comprehension, rhetorical devices, Sino-Vietnamese lexicons, argumentation.',
    questions: [
      {
        question: 'Trong các từ Hán Việt sau, từ nào có yếu tố "đồng" mang nghĩa là "cùng nhau"?',
        options: ['Đồng chí, đồng hương, đồng cảm', 'Đồng bằng, đồng nội, cánh đồng', 'Đồng thau, đồng đen, mỏ đồng', 'Trẻ đồng, mục đồng, nhi đồng'],
        answerIndex: 0,
        hint: 'Đồng trong cùng lý tưởng, cùng quê, cùng cảm xúc.',
        explanation: 'Đồng chí (cùng chí hướng), đồng hương (cùng quê), đồng cảm (cùng cảm xúc) đều mang nghĩa là cùng một.'
      },
      {
        question: 'Nhận định nào sau đây nêu chính xác nhất chủ đề của văn bản nghị luận xã hội về đức tính khiêm tốn?',
        options: ['Khiêm tốn là thái độ đánh giá đúng bản thân, không tự mãn kiêu ngạo, luôn cầu tiến học hỏi', 'Khiêm tốn là tự ti, rụt rè không dám nhận việc gì', 'Khiêm tốn là nhún nhường để người khác làm thay việc của mình', 'Khiêm tốn là che giấu toàn bộ năng lực thật sự'],
        answerIndex: 0,
        hint: 'Bản chất thực sự của sự khiêm nhường có văn hóa.',
        explanation: 'Khiêm tốn là một phẩm chất đạo đức quan trọng giúp con người nhận thức rõ hạn chế bản thân để không ngừng nỗ lực vươn lên.'
      },
      {
        question: 'Để liên kết các câu trong một đoạn văn bản chặt chẽ về mặt ngữ nghĩa và hình thức, ta có thể dùng phép liên kết nào?',
        options: ['Phép lặp, phép thế, phép nối và phép liên tưởng', 'Chỉ dùng một dấu chấm than', 'Lặp lại toàn bộ đại từ xưng hô ở mọi vị trí', 'Viết hoa tất cả các từ trong câu'],
        answerIndex: 0,
        hint: 'Các phép liên kết câu chuẩn trong chương trình Ngữ văn THCS.',
        explanation: 'Các phép liên kết câu kinh điển gồm phép lặp từ ngữ, phép thế đại từ/từ đồng nghĩa, phép nối quan hệ từ và phép đồng nghĩa - liên tưởng.'
      },
      {
        question: 'Khi làm bài văn phân tích một tác phẩm thơ Đường luật, thao tác lập dàn ý nào là quan trọng nhất ở phần Thân bài?',
        options: ['Phân tích theo bố cục (Đề - Thực - Luận - Kết) kết hợp nghệ thuật niêm luật, đối, từ ngữ và hình ảnh', 'Chỉ dịch thơ sang văn xuôi mà không cần bình luận', 'Kể lại tiểu sử chi tiết của tác giả từ nhỏ đến lớn', 'Đưa ra các số liệu thống kê về năm xuất bản'],
        answerIndex: 0,
        hint: 'Phân tích thơ phải bám sát cấu trúc thi pháp và ngôn từ nghệ thuật.',
        explanation: 'Thân bài bài nghị luận thơ Đường cần phân tích lần lượt từng cặp câu Đề - Thực - Luận - Kết làm nổi bật tư tưởng cảm xúc của tác giả.'
      },
      {
        question: 'Từ ngữ nào sau đây là một TRỢ TỪ dùng để nhấn mạnh mức độ đánh giá sự việc?',
        options: ['Chính, đích, ngay', 'Và, nhưng, vì', 'Ôi, than ôi, hỡi', 'Bởi vì, do đó, nên'],
        answerIndex: 0,
        hint: 'Trợ từ đi kèm một từ ngữ để nhấn mạnh hoặc biểu thị thái độ.',
        explanation: '"Chính nó, ngay cả tôi, đích thân thầy giáo" chứa các trợ từ nhấn mạnh.'
      },
      {
        question: 'Ý nghĩa nhân văn cao cả nhất toát lên từ những truyện ngắn hiện thực Việt Nam giai đoạn 1930 - 1945 là gì?',
        options: ['Tấm lòng yêu thương, trân trọng vẻ đẹp tâm hồn người nông dân nghèo trong nghịch cảnh', 'Khuyên người dân cam chịu số phận đói khổ', 'Ca ngợi lối sống xa hoa của tầng lớp địa chủ phong kiến', 'Khuyến khích con người chạy trốn khỏi quê hương'],
        answerIndex: 0,
        hint: 'Giá trị nhân đạo sâu sắc của Nam Cao, Ngô Tất Tố, Nguyên Hồng.',
        explanation: 'Văn học hiện thực 1930-1945 phát hiện và ca ngợi phẩm chất tốt đẹp, lòng tự trọng và tình mẫu tử thiêng liêng của người lao động cùng khổ.'
      }
    ]
  },

  // =========================================================================
  // GRADE 8 - NGỮ VĂN 8 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g8-s2-lit-reg1',
    title: 'Ngữ văn 8 - Kiểm tra Thường xuyên 1: Thơ Mới (1932 - 1945) & Câu Cảm thán, Câu Cầu khiến',
    titleEn: 'Literature 8 - Regular Assessment 1: The New Poetry Movement & Exclamatory Sentences',
    grade: 8,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Phong trào Thơ mới (Nhớ rừng, Quê hương, Ông đồ) và phân loại câu theo mục đích nói.',
    descriptionEn: 'The New Poetry Movement (1932-1945) and sentence types by communicative purpose.',
    questions: [
      {
        question: 'Câu nào sau đây là một CÂU CẢM THÁN mang từ ngữ biểu lộ cảm xúc trực tiếp?',
        options: ['Than ôi! Thời oanh liệt nay còn đâu?', 'Bạn hãy đóng cửa sổ lại giúp tôi.', 'Hôm nay trời có mưa không?', 'Mặt trời mọc ở hướng đông.'],
        answerIndex: 0,
        hint: 'Câu cảm thán thường chứa các từ than ôi, ôi, chao ôi, xiết bao... và kết thúc bằng dấu chấm than.',
        explanation: '"Than ôi! Thời oanh liệt nay còn đâu?" là câu cảm thán bộc lộ nỗi tiếc nuối tột cùng của con hổ trong "Nhớ rừng".'
      },
      {
        question: 'Tác giả bài thơ "Nhớ rừng" là ai và tác phẩm mượn lời con hổ để kín đáo thể hiện tâm trạng gì?',
        options: ['Thế Lữ - thể hiện nỗi đau mất nước và niềm khao khát tự do mãnh liệt của người dân Việt Nam', 'Huy Cận - thể hiện nỗi sầu nhân thế trước vũ trụ bao la', 'Xuân Diệu - thể hiện khát vọng yêu đương cuồng nhiệt', 'Hàn Mặc Tử - thể hiện nỗi đau thể xác và khát vọng sống'],
        answerIndex: 0,
        hint: 'Thế Lữ là lá cờ đầu của phong trào Thơ mới 1932-1945.',
        explanation: 'Thế Lữ mượn nỗi uất hận của chúa sơn lâm bị giam cầm trong cũi sắt vườn bách thú để thức tỉnh lòng yêu nước và khát vọng tự do của thanh niên lúc bấy giờ.'
      },
      {
        question: 'Hình ảnh người "Ông đồ" trong bài thơ cùng tên của Vũ Đình Liên gắn liền với nét đẹp văn hóa truyền thống nào?',
        options: ['Tục cho chữ thư pháp bằng mực tàu giấy đỏ ngày Tết cổ truyền', 'Nghề làm gốm sứ truyền thống Bát Tràng', 'Tục gói bánh chưng bánh tét đêm giao thừa', 'Nghề đúc đồng cổ'],
        answerIndex: 0,
        hint: '"Mỗi năm hoa đào nở / Lại thấy ông đồ già / Bày mực tàu giấy đỏ / Bên phố đông người qua".',
        explanation: 'Hình ảnh ông đồ viết thư pháp ngày Tết là biểu tượng của nền Nho học cổ kính đang dần bị lãng quên trong buổi giao thời.'
      },
      {
        question: 'Dấu hiệu nhận biết đặc trưng của CÂU CẦU KHIẾN là gì?',
        options: ['Chứa các từ ngữ cầu khiến như: hãy, đừng, chớ, đi, thôi, nào... và dùng để yêu cầu, khuyên bảo', 'Luôn luôn dùng để hỏi han thông tin số liệu', 'Chỉ dùng để khẳng định một chân lý khoa học', 'Có chứa từ "bởi vì" ở đầu câu'],
        answerIndex: 0,
        hint: 'Câu dùng để ra lệnh, yêu cầu hoặc đề nghị ai làm gì.',
        explanation: 'Câu cầu khiến có các từ ngữ hãy, đừng, chớ, đi, thôi... dùng để ra lệnh, yêu cầu, đề nghị hoặc khuyên bảo.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-lit-reg2',
    title: 'Ngữ văn 8 - Kiểm tra Thường xuyên 2: Văn bản Nghị luận Cổ (Chiếu dời đô, Hịch tướng sĩ)',
    titleEn: 'Literature 8 - Regular Assessment 2: Ancient Argumentative Texts (Edicts & Proclamations)',
    grade: 8,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Tìm hiểu thể Chiếu, Hịch và nghệ thuật lập luận đanh thép, tinh thần yêu nước quật cường của cha ông.',
    descriptionEn: 'Ancient political genres (Chieu, Hich) and patriotic rhetoric in medieval Vietnam.',
    questions: [
      {
        question: 'Thể "CHIẾU" trong văn học trung đại Việt Nam là thể văn do ai ban bố và nhằm mục đích gì?',
        options: ['Do vua ban bố để công bố mệnh lệnh lớn của triều đình cho toàn thể thần dân', 'Do tướng lĩnh viết để khích lệ binh sĩ trước trận đánh', 'Do bề tôi dâng lên vua để bày tỏ ý kiến, nguyện vọng', 'Do nhân dân sáng tác truyền miệng'],
        answerIndex: 0,
        hint: 'Chiếu là văn bản mệnh lệnh của thiên tử (vua).',
        explanation: 'Chiếu là thể văn thư nhà vua dùng để ban bố mệnh lệnh tối cao đối với thần dân trong nước.'
      },
      {
        question: 'Lý Công Uẩn (Lý Thái Tổ) quyết định dời đô từ Hoa Lư về thành Đại La (Thăng Long) vì những lý do chiến lược nào?',
        options: ['Địa thế trung tâm đất trời, đất rộng mà bằng phẳng, dân cư không khổ vì ngập lụt, muôn vật tươi tốt phồn thịnh', 'Hoa Lư có quá nhiều cung điện cũ kỹ', 'Đại La gần biên giới để dễ dàng đi săn bắn', 'Theo ý thích riêng tư của hoàng gia'],
        answerIndex: 0,
        hint: '"Ở vào nơi trung tâm trời đất, được cái thế rồng cuộn hổ ngồi...".',
        explanation: 'Thành Đại La hội tụ đầy đủ yếu tố phong thủy, giao thông thủy bộ, kinh tế trù phú để làm chốn đóng đô muôn đời của đất nước.'
      },
      {
        question: 'Trong tác phẩm "Hịch tướng sĩ", Trần Quốc Tuấn bộc lộ lòng căm thù giặc qua câu văn bất hủ nào?',
        options: ['Tới bữa quên ăn, nửa đêm vỗ gối; ruột đau như cắt, nước mắt đầm đìa; chỉ căm tức chưa xả thịt lột da, nuốt gan uống máu quân thù', 'Cùng nhau uống rượu mừng công chiến thắng', 'Ngồi thuyền ngắm trăng ngâm thơ lúc đêm khuya', 'Chăm lo ruộng nương vườn tược chu đáo'],
        answerIndex: 0,
        hint: 'Đoạn văn bộc bạch nỗi lòng gan ruột của vị Tổng tư lệnh quân đội Đại Việt.',
        explanation: 'Đoạn văn hào hùng thể hiện ý chí quyết chiến quyết thắng và lòng căm thù giặc Nguyên Mông tột cùng của Hưng Đạo Đại Vương.'
      },
      {
        question: 'Nghệ thuật lập luận trong "Hịch tướng sĩ" có sức thuyết phục to lớn nhờ yếu tố nào?',
        options: ['Kết hợp chặt chẽ giữa lí lẽ sắc bén, dẫn chứng lịch sử xác thực và tình cảm ân tình chân thành', 'Chỉ dùng những lời đe dọa trừng phạt nặng nề', 'Sử dụng toàn bộ từ ngữ hài hước vui nhộn', 'Vay mượn cốt truyện thần thoại cổ xưa'],
        answerIndex: 0,
        hint: 'Vừa đánh vào lòng tự trọng của tướng sĩ vừa nhắc nhở tình nghĩa chủ tướng.',
        explanation: 'Trần Quốc Tuấn vừa chỉ ra mối nguy mất nước, vừa ân cần như người cha người anh phân tích đúng sai, khơi dậy lòng tự hào dân tộc.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-lit-reg3',
    title: 'Ngữ văn 8 - Kiểm tra Thường xuyên 3: Văn bản Nhật dụng & Vấn đề Ô nhiễm Môi trường, Thuốc lá',
    titleEn: 'Literature 8 - Regular Assessment 3: Contemporary Issues (Pollution & Smoking Dangers)',
    grade: 8,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Phân tích văn bản nhật dụng: hiểm họa bao bì ni lông, tác hại ghê gớm của khói thuốc lá đối với sức khỏe và đạo đức xã hội.',
    descriptionEn: 'Daily life texts analyzing environmental risks of plastics and smoking epidemic.',
    questions: [
      {
        question: 'Tác hại môi trường nguy hiểm và dai dẳng nhất của rác thải bao bì ni lông là gì?',
        options: ['Tính chất khó phân hủy trong tự nhiên, có thể tồn tại từ hàng trăm đến cả nghìn năm', 'Bao bì ni lông có mùi rất thơm thu hút động vật', 'Bao bì ni lông tan biến ngay trong nước mưa', 'Làm cho đất đai màu mỡ hơn'],
        answerIndex: 0,
        hint: 'Ni lông lẫn vào đất làm xói mòn, tắc cống rãnh, cản trở rễ cây hô hấp.',
        explanation: 'Bao bì nhựa polyethylene khó phân hủy sinh học, tồn tại hàng thế kỷ phá hủy đất, nguồn nước và hệ sinh thái.'
      },
      {
        question: 'Chất độc nào trong khói thuốc lá gây nghiện mạnh và làm co thắt động mạch, tăng huyết áp nguy hiểm?',
        options: ['Nicotin', 'Oxy hóa lỏng', 'Cacbon dioxit tự nhiên', 'Vitamin nhóm B'],
        answerIndex: 0,
        hint: 'Chất gây nghiện điển hình trong cây thuốc lá.',
        explanation: 'Nicotin ngấm vào máu làm tê liệt lông mao phế quản, gây nghiện và làm hẹp các mạch máu dẫn tới đột quỵ, nhồi máu cơ tim.'
      },
      {
        question: 'Người hít phải khói thuốc do người khác hút trong cùng phòng (hút thuốc thụ động) có chịu tác hại sức khỏe không?',
        options: ['Chịu tác hại nghiêm trọng không kém, đặc biệt dễ mắc bệnh phổi, hen suyễn và tim mạch ở trẻ em', 'Hoàn toàn không bị ảnh hưởng vì không phải người châm thuốc', 'Khói thuốc thụ động vô hại vì đã loãng trong không khí', 'Giúp tăng cường sức đề kháng đường thở'],
        answerIndex: 0,
        hint: 'Khói thuốc bên ngoài chứa nồng độ chất độc cao gấp nhiều lần khói qua đầu lọc.',
        explanation: 'Hút thuốc lá thụ động gây độc hại khôn lường cho phụ nữ mang thai và trẻ nhỏ xung quanh.'
      },
      {
        question: 'Hành động thiết thực nào của học sinh góp phần trực tiếp giảm thiểu rác thải nhựa tại trường học?',
        options: ['Mang bình nước cá nhân, dùng hộp cơm tái sử dụng và hạn chế tối đa túi ni lông dùng 1 lần', 'Mỗi ngày dùng thêm 5 túi ni lông mới rồi vứt ra sân', 'Đốt các chai nhựa trong lớp học', 'Vứt túi ni lông xuống cống thoát nước'],
        answerIndex: 0,
        hint: 'Thông điệp 3R: Reduce - Reuse - Recycle.',
        explanation: 'Sử dụng đồ dùng cá nhân nhiều lần là cách hiệu quả nhất giảm thiểu rác thải nhựa một lần.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-lit-reg4',
    title: 'Ngữ văn 8 - Kiểm tra Thường xuyên 4: Hành động Nói & Lựa chọn Trật tự Từ trong Câu',
    titleEn: 'Literature 8 - Regular Assessment 4: Speech Acts & Word Order Variation',
    grade: 8,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Hành động nói (hỏi, trình bày, điều khiển, hứa hẹn, bộc lộ cảm xúc) và hiệu quả nghệ thuật của trật tự từ.',
    descriptionEn: 'Pragmatic speech acts and syntactic word order effects.',
    questions: [
      {
        question: 'HÀNH ĐỘNG NÓI là hành động được thực hiện bằng phương tiện nào và nhằm mục đích gì?',
        options: ['Thực hiện bằng lời nói (ngôn từ) nhằm đạt được một mục đích giao tiếp nhất định', 'Thực hiện bằng cử chỉ điệu bộ mà không cần phát ra tiếng', 'Hành động viết thư pháp trang trí', 'Hành động dùng chân tay chạy nhảy'],
        answerIndex: 0,
        hint: 'Nói năng là một dạng hành động xã hội mang tính giao tiếp.',
        explanation: 'Hành động nói là việc người nói sử dụng lời nói để đạt mục tiêu: hỏi, yêu cầu, hứa hẹn, chào hỏi...'
      },
      {
        question: 'Câu nói: "Tôi xin hứa sẽ hoàn thành bài tập trước 8 giờ tối nay!" thuộc nhóm hành động nói nào?',
        options: ['Hành động hứa hẹn (cam kết)', 'Hành động điều khiển (ra lệnh)', 'Hành động hỏi', 'Hành động bộc lộ cảm xúc đơn thuần'],
        answerIndex: 0,
        hint: 'Lời cam kết thực hiện việc làm trong tương lai.',
        explanation: 'Hành động hứa hẹn ràng buộc người nói phải thực hiện việc đã cam đoan.'
      },
      {
        question: 'Việc thay đổi trật tự từ trong câu nhằm mục đích ngữ pháp - nghệ thuật nào sau đây?',
        options: ['Thể hiện thứ tự xuất hiện của sự vật, nhấn mạnh hình ảnh đặc điểm hoặc tạo nhịp điệu hài hòa', 'Bắt buộc biến câu có nghĩa thành câu vô nghĩa', 'Để kiểm tra xem người đọc có nhận ra lỗi sai chính tả hay không', 'Làm cho câu càng dài càng tốt'],
        answerIndex: 0,
        hint: 'Trật tự từ thể hiện dụng ý nghệ thuật của tác giả.',
        explanation: 'Sắp xếp trật tự từ giúp nhấn mạnh ý nghĩa, liên kết câu hoặc tạo nhịp điệu âm vang cho văn bản nghệ thuật.'
      },
      {
        question: 'Trong câu: "Gậy tre, chông tre chống lại sắt thép của quân thù. Tre xung phong vào xe tăng, đại bác." (Thép Mới), trật tự từ nhấn mạnh điều gì?',
        options: ['Sức mạnh quật cường, tinh thần chiến đấu quả cảm của nhân dân Việt Nam lấy thô sơ thắng hiện đại', 'Sự phong phú của các loài cây trong rừng', 'Kích thước to lớn của xe tăng quân xâm lược', 'Độ sắc nhọn cơ học của cọc tre'],
        answerIndex: 0,
        hint: 'Sự đối lập giữa tre mộc mạc và vũ khí tối tân.',
        explanation: 'Điệp từ và vị trí đầu câu làm nổi bật phẩm chất anh hùng, kiên cường bất khuất của cây tre - biểu tượng cho dân tộc Việt Nam.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-lit-final',
    title: 'Ngữ văn 8 - Đề Kiểm Tra Cuối Học Kỳ 2 (Đề Tổng hợp Cuối năm Học)',
    titleEn: 'Literature 8 - Semester 2 Final Examination (Year-End Evaluation)',
    grade: 8,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm lớp 8: Thơ Mới, Văn nghị luận trung đại, Tiếng Việt (hành động nói, câu cầu khiến - cảm thán, hội thoại) và bài văn nghị luận.',
    descriptionEn: 'Comprehensive end-of-year examination: New Poetry Movement, classical edicts, conversational pragmatics, and analytical writing.',
    questions: [
      {
        question: 'Văn bản "Thuế máu" của Nguyễn Ái Quốc trích từ tác phẩm kiệt tác nào sau đây?',
        options: ['Bản án chế độ thực dân Pháp', 'Tuyên ngôn Độc lập', 'Nhật ký trong tù', 'Đường kách mệnh'],
        answerIndex: 0,
        hint: 'Tác phẩm được viết bằng tiếng Pháp xuất bản năm 1925 tại Paris.',
        explanation: '"Thuế máu" là chương đầu tiên trong tác phẩm vạch trần tội ác thực dân "Bản án chế độ thực dân Pháp".'
      },
      {
        question: 'Trong một cuộc hội thoại, khi người nói không tuân thủ "phương châm về lượng" thì câu nói sẽ mắc phải khuyết điểm gì?',
        options: ['Nói thừa thãi hoặc nói thiếu thông tin cần thiết so với yêu cầu giao tiếp', 'Nói những điều mình không có căn cứ xác thực', 'Nói vòng vo lạc đề không ăn nhập nội dung', 'Nói lời hung dữ, bất lịch sự xúc phạm đối phương'],
        answerIndex: 0,
        hint: 'Phương châm về lượng yêu cầu: Lời nói phải có nội dung, lượng thông tin không thiếu cũng không thừa.',
        explanation: 'Phương châm về lượng quy định nói đủ lượng tin cần thiết, tránh nói dài dòng thừa hoặc quá cộc lốc thiếu thông tin.'
      },
      {
        question: 'Hai câu thơ: "Cánh buồm giương to như mảnh hồn làng / Rướn thân trắng bao la thâu góp gió" (Tế Hanh) sử dụng phép so sánh nhằm mục đích gì?',
        options: ['Vừa cụ thể hóa vừa thiêng liêng hóa cánh buồm trắng, biến nó thành biểu tượng linh hồn của làng chài quê hương', 'Để miêu tả chính xác độ dày và chất liệu sợi vải may buồm', 'Thể hiện nỗi sợ hãi giông bão của người dân ven biển', 'So sánh độ nặng của con thuyền với bờ cát'],
        answerIndex: 0,
        hint: 'So sánh vật thể vô tri với "mảnh hồn làng".',
        explanation: 'Tế Hanh biến cánh buồm thành một thực thể có hồn, gửi gắm tình yêu quê hương làng chài tha thiết, nồng nàn.'
      },
      {
        question: 'Phương châm LỊCH SỰ trong giao tiếp yêu cầu người tham gia hội thoại phải ứng xử như thế nào?',
        options: ['Tôn trọng người đối thoại, tế nhị, nhã nhặn và biết lắng nghe', 'Nói to nhất phòng để mọi người phải chú ý', 'Luôn ngắt lời người khác khi họ chưa kịp nói hết câu', 'Chỉ dùng từ ngữ khoa học cao siêu mà người khác không hiểu'],
        answerIndex: 0,
        hint: '"Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau".',
        explanation: 'Phương châm lịch sự thể hiện văn hóa ứng xử tôn trọng và khéo léo trong giao tiếp hàng ngày.'
      },
      {
        question: 'Thể "HỊCH" khác với thể "CÁO" ở điểm cơ bản nào sau đây?',
        options: ['Hịch viết trước trận đánh để khích lệ tướng sĩ chiến đấu; Cáo viết sau khi kết thúc chiến tranh để tổng kết và tuyên bố hòa bình', 'Hịch chỉ dành cho vua, Cáo dành cho thường dân', 'Hịch luôn luôn ngắn hơn Cáo', 'Hịch không được sử dụng vần điệu'],
        answerIndex: 0,
        hint: 'Thời điểm ban bố: Hịch kêu gọi chiến đấu, Cáo công bố thắng lợi (như Bình Ngô đại cáo).',
        explanation: 'Hịch cổ vũ tinh thần tác chiến trước giờ xuất quân; Cáo tổng kết thành quả to lớn mang tính lịch sử sau cuộc kháng chiến thắng lợi.'
      },
      {
        question: 'Yếu tố quan trọng nhất giúp một bài văn thuyết minh về danh lam thắng cảnh đạt điểm cao và hấp dẫn người đọc là gì?',
        options: ['Cung cấp kiến thức lịch sử địa lý chuẩn xác, kết hợp miêu tả sinh động và thể hiện tình cảm tự hào', 'Bịa đặt thêm các câu chuyện ma quái kinh dị không có thật', 'Chỉ liệt kê giá vé vào cổng và số phòng khách sạn', 'Chỉ viết 1 đoạn văn thật dài mà không chia ý'],
        answerIndex: 0,
        hint: 'Tri thức chuẩn xác kết hợp nghệ thuật miêu tả.',
        explanation: 'Thuyết minh danh lam thắng cảnh cần chuẩn xác về số liệu lịch sử kết hợp nét sinh động để khơi gợi niềm yêu mến quê hương đất nước.'
      }
    ]
  },

  // =========================================================================
  // GRADE 8 - TIẾNG ANH 8 - SEMESTER 1
  // =========================================================================
  {
    id: 'quiz-g8-s1-eng-reg1',
    title: 'Tiếng Anh 8 - Kiểm tra Thường xuyên 1: Leisure Activities & Verbs of Liking',
    titleEn: 'English 8 - Regular Assessment 1: Leisure Activities & Verbs of Liking + Gerund',
    grade: 8,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Unit 1: Leisure Activities, verbs of liking followed by gerunds (V-ing) or to-infinitive.',
    descriptionEn: 'Hobbies, leisure time expressions, and verbs of liking/disliking structures.',
    questions: [
      {
        question: 'Which of the following verbs of liking is strictly followed by a GERUND (V-ing)?',
        options: ['enjoy', 'want', 'decide', 'hope'],
        answerIndex: 0,
        hint: 'We say "enjoy doing something", not "enjoy to do".',
        explanation: 'The verb "enjoy" is always followed by a gerund (V-ing): "I enjoy swimming in the summer."'
      },
      {
        question: 'Complete the sentence: "Minh is crazy ________ playing computer games with his classmates."',
        options: ['about', 'with', 'at', 'on'],
        answerIndex: 0,
        hint: 'Collocation: to be crazy about something.',
        explanation: 'The correct preposition is "about": "to be crazy about sth" means extremely fond of something.'
      },
      {
        question: 'Which expression means that you dislike something very much?',
        options: ['detest doing something', 'be fond of something', 'fancy doing something', 'be keen on something'],
        answerIndex: 0,
        hint: 'Detest = hate intensely.',
        explanation: '"Detest" means to hate something passionately, opposite to "be fond of" or "fancy".'
      },
      {
        question: 'Find the correct form: "She spends three hours a day ________ origami paper models."',
        options: ['folding', 'to fold', 'folded', 'fold'],
        answerIndex: 0,
        hint: 'Structure: spend + time + V-ing.',
        explanation: 'The syntactic structure "spend time doing something" requires the gerund form "folding".'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-eng-reg2',
    title: 'Tiếng Anh 8 - Kiểm tra Thường xuyên 2: Life in the Countryside & Comparative Adverbs',
    titleEn: 'English 8 - Regular Assessment 2: Countryside Life & Comparative Adverbs',
    grade: 8,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 2: Rural lifestyle, nomadic cattle herding, comparative forms of adverbs (more quickly, faster).',
    descriptionEn: 'Life in rural communities and formation of comparative adverbs.',
    questions: [
      {
        question: 'Choose the correct comparative adverb: "A tractor moves ________ than a sports car."',
        options: ['more slowly', 'slowlier', 'slowly', 'most slow'],
        answerIndex: 0,
        hint: 'For two-syllable adverbs ending in -ly, use "more + adverb".',
        explanation: 'Adverbs ending in -ly form the comparative with "more": "more slowly".'
      },
      {
        question: 'What is the comparative form of the irregular adverb "well"?',
        options: ['better', 'gooder', 'wellier', 'more well'],
        answerIndex: 0,
        hint: 'Well -> better -> best.',
        explanation: '"Well" is an irregular adverb; its comparative form is "better".'
      },
      {
        question: 'Nomadic children in Mongolia learn to ride a horse ________ than children in modern cities.',
        options: ['much earlier', 'more earlier', 'earlier than more', 'as early as more'],
        answerIndex: 0,
        hint: 'Early ends in -y, changes to -ier: earlier.',
        explanation: '"Early" is both an adjective and an adverb, changing to "earlier" in comparative.'
      },
      {
        question: 'Which word describes the vast, wide-open grassy areas where herdsmen feed their cattle?',
        options: ['pasture', 'highway', 'skyscraper', 'pavement'],
        answerIndex: 0,
        hint: 'A meadow or land covered with grass for animals.',
        explanation: 'A "pasture" (đồng cỏ) is land covered with grass suitable for grazing animals.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-eng-reg3',
    title: 'Tiếng Anh 8 - Kiểm tra Thường xuyên 3: Peoples of Viet Nam & Articles (a, an, the)',
    titleEn: 'English 8 - Regular Assessment 3: Ethnic Groups of Viet Nam & Articles',
    grade: 8,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 3: 54 Ethnic Groups of Viet Nam, cultural heritage, definite and indefinite articles (a, an, the, zero article).',
    descriptionEn: 'Vietnamese ethnic cultures, stilt houses, and article rules.',
    questions: [
      {
        question: 'How many recognized ethnic minority and majority groups are there in Viet Nam?',
        options: ['54 ethnic groups', '50 ethnic groups', '64 ethnic groups', '45 ethnic groups'],
        answerIndex: 0,
        hint: 'The Kinh and 53 minority groups.',
        explanation: 'There are 54 distinct ethnic groups recognized in Viet Nam, with the Kinh forming the majority.'
      },
      {
        question: 'Fill in the article: "The Tay live mostly in ________ mountainous provinces of northern Viet Nam."',
        options: ['the', 'a', 'an', 'zero article (Ø)'],
        answerIndex: 0,
        hint: 'Use "the" when talking about specific, defined geographical areas.',
        explanation: 'We use the definite article "the" before specific geographical regions: "the mountainous provinces".'
      },
      {
        question: 'Which traditional house of ethnic minorities is built on tall wooden pillars to avoid wild animals and floods?',
        options: ['stilt house', 'bungalow', 'apartment building', 'igloo'],
        answerIndex: 0,
        hint: 'Nhà sàn trong tiếng Anh.',
        explanation: 'A "stilt house" (nhà sàn) is raised on piles over the surface of the soil or water.'
      },
      {
        question: 'Choose the correct sentence regarding article usage:',
        options: ['The Kinh people account for about 86% of the population.', 'A Kinh people accounts for about 86% of the population.', 'An Kinh people account for 86% of population.', 'The Kinh people account for about 86% of a population.'],
        answerIndex: 0,
        hint: 'Use "The + ethnic name + people" to refer to an entire group.',
        explanation: '"The Kinh people" designates the entire ethnic group, requiring the definite article "The".'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-eng-reg4',
    title: 'Tiếng Anh 8 - Kiểm tra Thường xuyên 4: Our Customs and Traditions & Modal Verbs (have to, should)',
    titleEn: 'English 8 - Regular Assessment 4: Customs, Traditions & Modals of Obligation',
    grade: 8,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Unit 4: Customs and social etiquette, difference between "have to" (external obligation) and "should" (advice).',
    descriptionEn: 'Etiquette customs and modal verbs for rules, duties, and recommendations.',
    questions: [
      {
        question: 'In Viet Nam, there is a tradition of ________ lucky money to children during the Lunar New Year.',
        options: ['giving', 'take', 'borrows', 'stealing'],
        answerIndex: 0,
        hint: 'Preposition "of" is followed by a gerund V-ing.',
        explanation: 'After the preposition "of", verbs take the gerund form: "tradition of giving".'
      },
      {
        question: 'Choose the appropriate modal: "According to school regulations, students ________ wear uniforms on Mondays."',
        options: ['have to', 'should', 'might', 'may'],
        answerIndex: 0,
        hint: 'School regulations represent a mandatory external rule (have to).',
        explanation: '"Have to" expresses strict external obligations imposed by rules or laws.'
      },
      {
        question: 'When visiting a Buddhist temple in Viet Nam, you ________ dress politely and take off your hat.',
        options: ['should', 'should not', 'ought not', 'must not'],
        answerIndex: 0,
        hint: 'Strong recommendation for showing cultural respect.',
        explanation: '"Should" gives polite advice showing respect to sacred places.'
      },
      {
        question: 'What is the idiom "When in Rome, do as the Romans do" equivalent to in Vietnamese culture?',
        options: ['Nhập gia tùy tục', 'Ăn quả nhớ kẻ trồng cây', 'Lá lành đùm lá rách', 'Có công mài sắt có ngày nên kim'],
        answerIndex: 0,
        hint: 'Adapting to local customs wherever you arrive.',
        explanation: '"When in Rome, do as the Romans do" corresponds to "Nhập gia tùy tục".'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-eng-final',
    title: 'Tiếng Anh 8 - Đề Kiểm Tra Cuối Học Kỳ 1 (Ngữ âm, Từ vựng, Ngữ pháp & Đọc hiểu)',
    titleEn: 'English 8 - Semester 1 Final Examination (Standard A4 Format)',
    grade: 8,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi cuối học kỳ 1: Âm /sk/, /sp/, /st/, liên từ (although, however, therefore), so sánh trạng từ, mạo từ và phong tục lễ hội Việt Nam.',
    descriptionEn: 'Semester 1 comprehensive final exam: Phonetics, connecting words, comparative adverbs, articles, and culture.',
    questions: [
      {
        question: 'Choose the word whose underlined part is pronounced differently from the others:',
        options: ['school (/sk/)', 'scholar (/sk/)', 'schedule (/sk/)', 'machine (/ʃ/)'],
        answerIndex: 3,
        hint: 'In "machine", ch sounds like /ʃ/ (sh), while the others sound like /k/.',
        explanation: 'In "machine" the "ch" is pronounced /ʃ/, while in "school", "scholar" it is pronounced /k/.'
      },
      {
        question: 'Nam wanted to participate in the folk dance contest; ________, he had a sprained ankle.',
        options: ['however', 'although', 'because', 'so that'],
        answerIndex: 0,
        hint: 'Followed by a comma and preceded by a semicolon: ; however,',
        explanation: '"However" connects contrasting ideas and is punctuated with a semicolon and comma.'
      },
      {
        question: 'During Mid-Autumn Festival, children carry colorful lantern parades and eat ________.',
        options: ['mooncakes', 'sticky rice cakes', 'baguettes', 'pizzas'],
        answerIndex: 0,
        hint: 'Traditional baked cake for the full moon celebration.',
        explanation: 'Mooncakes (bánh Trung thu) are the quintessential food of the Mid-Autumn Festival.'
      },
      {
        question: 'Which sentence is grammatically CORRECT?',
        options: [
          'Although he worked hard, he could not finish the project on time.',
          'Although he worked hard, but he could not finish on time.',
          'Despite he worked hard, he could not finish on time.',
          'Because of he worked hard, he could not finish on time.'
        ],
        answerIndex: 0,
        hint: 'Never combine "Although" with "but" in the same English sentence.',
        explanation: 'In English, "Although" clause must NOT be followed by "but".'
      },
      {
        question: 'Choose the best response: "Teacher: Would you like to join our ethnic heritage club?" - "Student: ________"',
        options: [
          "I'd love to! Thank you for inviting me.",
          "No, I hate everybody.",
          "Yes, I have to go to bed.",
          "It's none of your business."
        ],
        answerIndex: 0,
        hint: 'Polite acceptance of an invitation.',
        explanation: '"I\'d love to! Thank you" is the standard polite conversational acceptance.'
      },
      {
        question: 'Identify the mistake: "She runs more faster than any other athlete in her secondary school."',
        options: ['more faster (should be: faster)', 'than', 'athlete', 'in her'],
        answerIndex: 0,
        hint: 'Never use double comparatives: faster is already comparative.',
        explanation: '"Faster" is a one-syllable comparative; using "more faster" is an error. It should be "faster".'
      }
    ]
  },

  // =========================================================================
  // GRADE 8 - TIẾNG ANH 8 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g8-s2-eng-reg1',
    title: 'Tiếng Anh 8 - Kiểm tra Thường xuyên 1: Environmental Protection & Conditional Sentences Type 1',
    titleEn: 'English 8 - Regular Assessment 1: Environmental Protection & First Conditionals',
    grade: 8,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Unit 7: Pollution, recycling, deforestation, and Conditional sentences type 1 (If + Present simple, will + V).',
    descriptionEn: 'Ecology problems, 3R principle, and First Conditional grammar.',
    questions: [
      {
        question: 'Complete the sentence: "If we continue to cut down forests, many wild animals ________ their natural habitats."',
        options: ['will lose', 'lose', 'lost', 'would lose'],
        answerIndex: 0,
        hint: 'First conditional: If + present simple, will + base verb.',
        explanation: 'Conditional sentence type 1: "will lose" describes a realistic outcome in the future.'
      },
      {
        question: 'Which type of pollution is caused by excessive car horns, construction drills, and loud factory machinery?',
        options: ['Noise pollution', 'Water pollution', 'Thermal pollution', 'Light pollution'],
        answerIndex: 0,
        hint: 'Pollution caused by loud sounds.',
        explanation: 'Noise pollution (ô nhiễm tiếng ồn) harms hearing and increases human stress levels.'
      },
      {
        question: 'What does the term "biodegradable" mean when describing packaging materials?',
        options: ['Capable of being decomposed by bacteria and natural biological processes', 'Lasting forever in the oceans', 'Made from pure crude oil and metal', 'Completely poisonous to plants'],
        answerIndex: 0,
        hint: 'Bio (life/nature) + degradable (can break down).',
        explanation: 'Biodegradable materials can break down naturally without harming ecosystems.'
      },
      {
        question: 'Choose the correct word: "Untreated toxic waste dumped into rivers will cause severe ________ pollution."',
        options: ['water', 'air', 'noise', 'visual'],
        answerIndex: 0,
        hint: 'Rivers are water bodies.',
        explanation: 'Waste dumped into canals and rivers directly causes water pollution.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-eng-reg2',
    title: 'Tiếng Anh 8 - Kiểm tra Thường xuyên 2: Natural Disasters & Past Continuous Tense',
    titleEn: 'English 8 - Regular Assessment 2: Natural Disasters & Past Continuous with When/While',
    grade: 8,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 9: Tropical storms, typhoons, earthquakes, and Past Continuous tense (was/were + V-ing).',
    descriptionEn: 'Emergency preparedness and past continuous interrupting past simple actions.',
    questions: [
      {
        question: 'While my family ________ dinner last night, the electric power suddenly went out due to the typhoon.',
        options: ['were having', 'are having', 'have had', 'had'],
        answerIndex: 0,
        hint: 'Longer action in progress in the past: Past Continuous.',
        explanation: '"While my family were having dinner" describes an ongoing past action interrupted by the power blackout.'
      },
      {
        question: 'A giant, destructive sea wave triggered by an undersea earthquake is known as a(n) ________.',
        options: ['tsunami', 'tornado', 'avalanche', 'drought'],
        answerIndex: 0,
        hint: 'Japanese loanword for harbor wave.',
        explanation: 'A tsunami (sóng thần) is a series of massive waves generated by submarine seismic events.'
      },
      {
        question: 'Choose the correct form: "When the earthquake struck the coastal town, the children ________ in the playground."',
        options: ['were playing', 'played', 'are playing', 'will play'],
        answerIndex: 0,
        hint: 'Past continuous for an action in progress when another happened.',
        explanation: 'Past Continuous "were playing" indicates the continuous action happening when the sudden quake occurred.'
      },
      {
        question: 'What essential survival item should be kept in an emergency disaster kit?',
        options: ['First-aid kit, flashlight, clean bottled water, and canned food', 'Expensive luxury jewelry', 'Heavy desktop computers', 'Fresh ice cream'],
        answerIndex: 0,
        hint: 'Items necessary for sustaining life without electricity and tap water.',
        explanation: 'First-aid kits, drinking water, and dry rations are vital emergency disaster supplies.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-eng-reg3',
    title: 'Tiếng Anh 8 - Kiểm tra Thường xuyên 3: Communication in the Future & Prepositions of Time',
    titleEn: 'English 8 - Regular Assessment 3: Future Tech Communication & Time Prepositions',
    grade: 8,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 10: Holographic video calls, telepathy, social media communication, prepositions (in, on, at).',
    descriptionEn: 'Technological forms of communication and temporal preposition accuracy.',
    questions: [
      {
        question: 'Which preposition of time is correct: "The international tech conference will take place ________ October 15th, 2025."',
        options: ['on', 'in', 'at', 'for'],
        answerIndex: 0,
        hint: 'Use "on" before specific calendar dates (day + month).',
        explanation: 'We use the preposition "on" for specific calendar dates: "on October 15th".'
      },
      {
        question: '3D virtual imagery projected into mid-air during future video conferences is called a ________.',
        options: ['hologram', 'telegram', 'landline telephone', 'fax machine'],
        answerIndex: 0,
        hint: 'Holo- projection technology.',
        explanation: 'Holograms are 3D laser projections reproducing three-dimensional images of people and objects.'
      },
      {
        question: 'What is a major psychological drawback of teens spending 8 hours a day staring at smartphone screens?',
        options: ['Lack of face-to-face interaction and higher risk of social isolation', 'Gaining superhuman physical strength', 'Falling asleep instantly at any time', 'Improving eyesight naturally'],
        answerIndex: 0,
        hint: 'Addiction causes reduction in real-life social skills.',
        explanation: 'Excessive screen time leads to social isolation, sleep disturbances, and decreased real-world communicative ability.'
      },
      {
        question: 'Fill in the blank: "Scientists predict that ________ the 22nd century, humans might communicate via brainwaves."',
        options: ['in', 'at', 'on', 'since'],
        answerIndex: 0,
        hint: 'Use "in" for centuries and decades.',
        explanation: 'Preposition "in" is used for long periods such as centuries: "in the 22nd century".'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-eng-reg4',
    title: 'Tiếng Anh 8 - Kiểm tra Thường xuyên 4: Science and Technology & Reported Speech',
    titleEn: 'English 8 - Regular Assessment 4: Science, Inventions & Reported Speech',
    grade: 8,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Unit 11 & 12: Inventions, artificial intelligence, Mars exploration, and Reported Speech statements.',
    descriptionEn: 'Scientific breakthroughs, space rovers, and backshifting in indirect speech.',
    questions: [
      {
        question: 'Direct: "I want to become an astronaut," Tom said. -> Reported speech: Tom said that he ________ to become an astronaut.',
        options: ['wanted', 'wants', 'has wanted', 'will want'],
        answerIndex: 0,
        hint: 'Tense backshift: present simple (want) shifts to past simple (wanted).',
        explanation: 'In reported speech with past reporting verb "said", present simple "want" backshifts to "wanted".'
      },
      {
        question: 'Which robot vehicle was sent by space agencies to explore the dry, rocky surface of planet Mars?',
        options: ['Mars rover', 'Nuclear submarine', 'Hot air balloon', 'Steam engine train'],
        answerIndex: 0,
        hint: 'A motor vehicle designed to travel over the terrain of the Red Planet.',
        explanation: 'Mars rovers (like Curiosity or Perseverance) are robotic exploration vehicles operating on Mars.'
      },
      {
        question: 'Direct: "We are developing a new vaccine," the scientists stated. -> Reported: The scientists stated that they ________ a new vaccine.',
        options: ['were developing', 'are developing', 'have developed', 'develop'],
        answerIndex: 0,
        hint: 'Present continuous backshifts to Past Continuous.',
        explanation: '"Are developing" shifts back to "were developing" in reported speech.'
      },
      {
        question: 'Who invented the modern incandescent light bulb, revolutionizing human life at night?',
        options: ['Thomas Edison', 'Alexander Graham Bell', 'Isaac Newton', 'Albert Einstein'],
        answerIndex: 0,
        hint: 'American inventor holding over 1,000 patents.',
        explanation: 'Thomas Edison developed the practical commercial incandescent light bulb in 1879.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-eng-final',
    title: 'Tiếng Anh 8 - Đề Kiểm Tra Cuối Học Kỳ 2 (Đề Tổng Hợp Toàn Diện Cả Năm)',
    titleEn: 'English 8 - Semester 2 Final Examination (Year-End Evaluation)',
    grade: 8,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm học lớp 8: Câu điều kiện loại 1 & 2, câu gián tiếp, thì quá khứ tiếp diễn, từ vựng khoa học công nghệ và kỹ năng đọc hiểu.',
    descriptionEn: 'Comprehensive end-of-year examination: Conditionals, indirect speech, passive voice foundations, and reading comprehension.',
    questions: [
      {
        question: 'If humans ________ on Mars, we would need to wear specialized pressurized spacesuits constantly.',
        options: ['lived', 'live', 'have lived', 'will live'],
        answerIndex: 0,
        hint: 'Second conditional for an unreal imaginary situation: If + past simple, would + V.',
        explanation: 'Type 2 conditional uses past simple "lived" in the If-clause to express hypothetical present situations.'
      },
      {
        question: 'Choose the word with different primary stress pattern from the remaining three:',
        options: ['pollute (stress on 2nd syllable)', 'damage (stress on 1st syllable)', 'litter (stress on 1st syllable)', 'rescue (stress on 1st syllable)'],
        answerIndex: 0,
        hint: 'pol-LUTE (2nd) vs DAM-age, LIT-ter, RES-cue (1st).',
        explanation: '"Pollute" is stressed on the second syllable (/pəˈluːt/), while the other three are stressed on the first syllable.'
      },
      {
        question: 'Solar energy, wind power, and hydro-electric power are examples of ________ energy sources.',
        options: ['renewable', 'non-renewable', 'exhaustible', 'fossil-fuel'],
        answerIndex: 0,
        hint: 'Energy that can be replenished naturally and never runs out.',
        explanation: 'Renewable energy (năng lượng tái tạo) comes from infinite natural resources like the sun and wind.'
      },
      {
        question: 'Mary asked Peter: "Where do you buy your eco-friendly bamboo straws?" -> Mary asked Peter where ________ his eco-friendly bamboo straws.',
        options: ['he bought', 'did he buy', 'does he buy', 'he buys'],
        answerIndex: 0,
        hint: 'Reported question uses statement word order (Subject + Verb) and past tense.',
        explanation: 'Indirect Wh-questions use affirmative word order (where he bought), not question order (did he buy).'
      },
      {
        question: 'The devastating flash flood ________ several wooden bridges before rescue teams arrived.',
        options: ['had destroyed', 'has destroyed', 'destroys', 'is destroying'],
        answerIndex: 0,
        hint: 'Action completed before another past event: Past Perfect.',
        explanation: 'Past Perfect "had destroyed" marks the action that happened prior to the arrival of rescuers.'
      },
      {
        question: 'Which of the following is the most eco-friendly everyday habit for secondary school students?',
        options: ['Riding a bicycle or walking to school instead of asking parents to drive motorbikes', 'Throwing plastic bottles into garden bushes', 'Leaving air conditioners running when leaving empty rooms', 'Printing hundreds of useless paper sheets'],
        answerIndex: 0,
        hint: 'Minimizing carbon emissions through green commuting.',
        explanation: 'Cycling or walking reduces fossil fuel emissions and fosters physical health.'
      }
    ]
  }
];
