import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Grade 9 Curriculum Quizzes (Ngữ văn & Khoa học Tự nhiên)
 * Meets requirement: At least 4 Regular Assessments (15-min) + 1 Final Test (60-min) per semester
 * Aligned with Vietnam Ministry of Education GDPT 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */
export const GRADE_9_LIT_SCI_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // GRADE 9 - NGỮ VĂN 9 - SEMESTER 1
  // =========================================================================
  {
    id: 'quiz-g9-s1-lit-reg1',
    title: 'Ngữ văn 9 - Kiểm tra Thường xuyên 1: Chuyện người con gái Nam Xương & Điển tích, Điển cố',
    titleEn: 'Literature 9 - Regular Assessment 1: The Girl from Nam Xuong & Classical Allusions',
    grade: 9,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Tác phẩm truyền kỳ mạn lục của Nguyễn Dữ, bi kịch thân phận người phụ nữ phong kiến và nghệ thuật kết hợp yếu tố kỳ ảo.',
    descriptionEn: 'The Tale of the Nam Xuong Maiden by Nguyen Du and classical supernatural fiction.',
    questions: [
      {
        question: 'Nguyên nhân trực tiếp và sâu xa dẫn đến nỗi oan khuất và cái chết bi thảm của nàng Vũ Nương là gì?',
        options: [
          'Lời nói ngây thơ của bé Đản về cái bóng trên vách kết hợp với tính đa nghi, ghen tuông mù quáng của Trương Sinh trong bối cảnh nam quyền phong kiến',
          'Vũ Nương lười biếng không chịu chăm lo gia đình',
          'Nạn đói hoành hành khắp làng Nam Xương',
          'Mẹ chồng đối xử cay nghiệt tàn nhẫn'
        ],
        answerIndex: 0,
        hint: 'Chiếc bóng trên vách và chế độ phụ quyền độc đoán.',
        explanation: 'Lời ngây thơ của bé Đản chỉ là ngòi nổ, nguyên nhân sâu xa là tính gia trưởng độc đoán của Trương Sinh và lễ giáo phong kiến hà khắc trói buộc người phụ nữ.'
      },
      {
        question: 'Chi tiết chiếc bóng trên vách trong "Chuyện người con gái Nam Xương" có vai trò nghệ thuật gì đặc sắc?',
        options: ['Vừa là nút thắt mở ra bi kịch oan khuất, vừa là nút cởi giải tỏa nỗi oan khi Trương Sinh bế con', 'Chỉ là chi tiết ngẫu nhiên không có ý nghĩa', 'Để hù dọa ma quỷ ban đêm', 'Để trang trí cho ngôi nhà thêm đẹp'],
        answerIndex: 0,
        hint: 'Chi tiết thắt nút và mở nút truyện ngắn mẫu mực.',
        explanation: 'Chiếc bóng là chi tiết đắt giá thắt nút mối nghi ngờ của Trương Sinh nhưng cũng chính chiếc bóng đã cởi nút giải oan cho Vũ Nương.'
      },
      {
        question: 'Ý nghĩa của việc tác giả Nguyễn Dữ đưa vào các yếu tố kỳ ảo (thế giới thủy cung của Linh Phi) ở cuối truyện là gì?',
        options: ['Minh oan cho phẩm tiết trong sạch của Vũ Nương và thể hiện ước mơ công lý của nhân dân', 'Để biến tác phẩm thành truyện kinh dị', 'Để khen ngợi Trương Sinh', 'Để Vũ Nương quay về sống hạnh phúc như xưa'],
        answerIndex: 0,
        hint: 'Yếu tố kỳ ảo bù đắp cho hiện thực bất công tàn nhẫn.',
        explanation: 'Yếu tố kỳ ảo nhằm hoàn thiện vẻ đẹp của Vũ Nương, trả lại danh dự cho nàng và gửi gắm khát vọng về sự công bằng nhân đạo.'
      },
      {
        question: 'Từ ngữ Hán Việt "tiết hạnh khả phong" thường dùng để ca ngợi phẩm chất nào của người phụ nữ xưa?',
        options: ['Lòng chung thủy son sắt và đạo đức trong sạch, đáng được nêu gương khen thưởng', 'Tài năng nấu nướng giỏi giang', 'Nhan sắc kiều diễm tuyệt trần', 'Gia thế giàu sang phú quý'],
        answerIndex: 0,
        hint: 'Tiết hạnh là phẩm giá trinh bạch thủy chung.',
        explanation: '"Tiết hạnh khả phong" là danh hiệu triều đình phong tặng cho phụ nữ có đức hạnh vẹn toàn, thủy chung son sắt.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-lit-reg2',
    title: 'Ngữ văn 9 - Kiểm tra Thường xuyên 2: Truyện Kiều (Nguyễn Du) & Nghệ thuật Miêu tả Nội tâm',
    titleEn: 'Literature 9 - Regular Assessment 2: The Tale of Kieu & Psychological Portraiture',
    grade: 9,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Đoạn trích Chị em Thúy Kiều, Kiều ở lầu Ngưng Bích; nghệ thuật ước lệ tượng trưng và bút pháp tả cảnh ngụ tình bậc thầy.',
    descriptionEn: 'The Tale of Kieu excerpts and evocative landscape psychologism by Nguyen Du.',
    questions: [
      {
        question: 'Bút pháp nghệ thuật "TẢ CẢNH NGỤ TÌNH" trong đoạn trích "Kiều ở lầu Ngưng Bích" được thể hiện qua thủ pháp nào?',
        options: ['Mượn cảnh thiên nhiên bao la, hoang vắng (cánh buồm, hoa trôi, nội cỏ) để bộc lộ tâm trạng cô đơn, xót xa và lo âu của Thúy Kiều', 'Kể lại tỉ mỉ lịch sử xây dựng lầu Ngưng Bích', 'Vẽ tranh phong cảnh thuần túy không có cảm xúc', 'Liệt kê các đồ dùng trong phòng của Kiều'],
        answerIndex: 0,
        hint: '"Cảnh nào cảnh chẳng đeo sầu / Người buồn cảnh có vui đâu bao giờ".',
        explanation: 'Nguyễn Du dùng 4 cặp câu điệp từ "Buồn trông" gắn với 4 bức tranh thiên nhiên để thể hiện 4 cung bậc cảm xúc đau đớn, cô đơn, tuyệt vọng của Thúy Kiều.'
      },
      {
        question: 'Nguyễn Du miêu tả vẻ đẹp của Thúy Vân bằng những hình tượng ước lệ: "Hoa cười ngọc thốt đoan trang / Mây thua nước tóc tuyết nhường màu da" nhằm dự báo điều gì về số phận nàng?',
        options: ['Số phận êm đềm, bình lặng và hạnh phúc trọn vẹn', 'Cuộc đời đầy bão táp phong ba lưu lạc', 'Số phận ngắn ngủi đoản mệnh', 'Cuộc sống nghèo khổ cơ cực'],
        answerIndex: 0,
        hint: 'Thiên nhiên "thua", "nhường" thể hiện sự hòa hợp, bao dung.',
        explanation: 'Các từ "thua", "nhường" cho thấy thiên nhiên nhường bước trước vẻ đẹp đoan trang của Vân, dự báo cuộc đời bình yên thuận buồm xuôi gió.'
      },
      {
        question: 'Trong câu thơ tả Thúy Kiều: "Làn thu thủy nét xuân sơn / Hoa ghen thua thắm liễu hờn kém xanh", từ ngữ nào dự báo một số phận éo le trắc trở?',
        options: ['Từ "ghen" và "hờn"', 'Từ "thu thủy"', 'Từ "xuân sơn"', 'Từ "xanh"'],
        answerIndex: 0,
        hint: 'Sắc đẹp làm thiên nhiên hờn ghen, đố kỵ ("Tạo hóa đố hồng nhan").',
        explanation: 'Thiên nhiên "ghen", "hờn" trước sắc đẹp sắc sảo mặn mà của Kiều dự báo số phận nàng sẽ chịu nhiều sóng gió, bất hạnh và ghen ghét của cuộc đời.'
      },
      {
        question: 'Tác phẩm "Truyện Kiều" (Đoạn trường tân thanh) của Đại thi hào Nguyễn Du được viết bằng thể thơ nào của dân tộc?',
        options: ['Thể thơ Lục bát', 'Thể thơ Song thất lục bát', 'Thể thơ Thất ngôn bát cú Đường luật', 'Thể thơ Tự do hiện đại'],
        answerIndex: 0,
        hint: 'Thể thơ truyền thống câu 6 câu 8 của người Việt.',
        explanation: 'Truyện Kiều gồm 3254 câu thơ lục bát, là đỉnh cao chói lọi của văn học chữ Nôm và thi ca dân tộc Việt Nam.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-lit-reg3',
    title: 'Ngữ văn 9 - Kiểm tra Thường xuyên 3: Thơ ca Kháng chiến (Đồng chí, Bài thơ về tiểu đội xe không kính)',
    titleEn: 'Literature 9 - Regular Assessment 3: Wartime Poetry (Comradeship & Glassless Jeeps)',
    grade: 9,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Tình đồng chí đồng đội gắn bó keo sơn thời kỳ chống Pháp và tinh thần lạc quan, quả cảm của người lính lái xe Trường Sơn thời chống Mỹ.',
    descriptionEn: 'The brotherhood in Chinh Huu\'s "Comrades" and Pham Tien Duat\'s Truong Son soldier optimism.',
    questions: [
      {
        question: 'Cơ sở cốt lõi hình thành nên tình "ĐỒNG CHÍ" cao đẹp giữa những người lính nông dân trong bài thơ của Chính Hữu là gì?',
        options: ['Cùng chung cảnh ngộ nghèo khó, cùng chung lý tưởng chiến đấu và chia sẻ mọi gian lao thiếu thốn nơi chiến trường', 'Họ là anh em ruột thịt cùng một nhà', 'Họ cùng làm việc trong một cơ quan nhà nước', 'Họ có cùng sở thích câu cá'],
        answerIndex: 0,
        hint: '"Quê hương anh nước mặn đồng chua / Làng tôi nghèo đất cày lên sỏi đá... Súng bên súng, đầu sát bên đầu".',
        explanation: 'Tình đồng chí nảy nở từ sự đồng cảm giai cấp nghèo khó, cùng chung lý tưởng giải phóng Tổ quốc và đồng cam cộng khổ trong bom đạn.'
      },
      {
        question: 'Hình ảnh câu thơ: "Đầu súng trăng treo" ở cuối bài thơ "Đồng chí" mang vẻ đẹp biểu tượng nghệ thuật nào?',
        options: ['Biểu tượng tuyệt đẹp cho sự kết hợp hài hòa giữa hiện thực chiến đấu khốc liệt và lãng mạn cách mạng, giữa chiến sĩ và thi sĩ', 'Chỉ là hiện tượng vầng trăng bị súng bắn trúng', 'Ánh trăng làm mắt người lính bị chói', 'Trời sắp có mưa lớn'],
        answerIndex: 0,
        hint: 'Súng biểu tượng chiến đấu, trăng biểu tượng hòa bình thơ mộng.',
        explanation: '"Đầu súng trăng treo" là hình ảnh thơ độc đáo kết nối súng (hiện thực chiến tranh) và trăng (vẻ đẹp hòa bình lãng mạn).'
      },
      {
        question: 'Trong "Bài thơ về tiểu đội xe không kính" của Phạm Tiến Duật, nguyên nhân khiến những chiếc xe tải không có kính là gì?',
        options: ['Bom giật bom rung kính vỡ đi rồi', 'Do nhà máy sản xuất quên lắp kính', 'Do các chiến sĩ lái xe tự tháo kính cho thoáng mát', 'Do xe quá cũ nát'],
        answerIndex: 0,
        hint: '"Không có kính không phải vì xe không có kính / Bom giật bom rung kính vỡ đi rồi".',
        explanation: 'Bom đạn tàn khốc của đế quốc Mỹ trên tuyến đường Trường Sơn đã làm vỡ kính xe, làm nổi bật hoàn cảnh chiến đấu ác liệt.'
      },
      {
        question: 'Giọng điệu ngôn ngữ đặc sắc nhất của "Bài thơ về tiểu đội xe không kính" là gì?',
        options: ['Hồn nhiên, tếu táo, ngang tàng và tràn đầy tinh thần lạc quan yêu đời', 'Bi lụy, đau thương và tuyệt vọng', 'Trang nghiêm cổ kính như thơ Đường', 'Hùng hồn đe dọa quân thù'],
        answerIndex: 0,
        hint: 'Giọng điệu khẩu ngữ sinh động của tuổi trẻ lính xe Trường Sơn.',
        explanation: 'Phạm Tiến Duật đưa ngôn ngữ đời lính tự nhiên, hóm hỉnh, ngang tàng vào thơ tạo nên sức trẻ phơi phới trên tuyến lửa Trường Sơn.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-lit-reg4',
    title: 'Ngữ văn 9 - Kiểm tra Thường xuyên 4: Truyện ngắn Hiện đại (Làng - Kim Lân, Lặng lẽ Sa Pa - Nguyễn Thành Long)',
    titleEn: 'Literature 9 - Regular Assessment 4: Modern Stories (The Village & Quiet Sa Pa)',
    grade: 9,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Diễn biến tâm lý nhân vật ông Hai khi nghe tin làng chợ Dầu theo giặc và vẻ đẹp cống hiến thầm lặng của anh thanh niên trên đỉnh Yên Sơn.',
    descriptionEn: 'Psychological shifts in Kim Lan\'s "Lang" and quiet patriotic devotion in "Lang Le Sa Pa".',
    questions: [
      {
        question: 'Tình huống truyện độc đáo bộc lộ mãnh liệt tình yêu làng gắn liền với lòng yêu nước của ông Hai trong truyện ngắn "Làng" là gì?',
        options: ['Ông Hai bất ngờ nghe tin sét đánh: Làng Chợ Dầu thân yêu của ông đã theo giặc Pháp làm Việt gian', 'Ông Hai trúng số độc đắc', 'Ông Hai được trở về làng đón Tết', 'Làng Chợ Dầu được mùa lúa bội thu'],
        answerIndex: 0,
        hint: 'Tin đồn thất thiệt thử thách danh dự và lòng tự trọng của người nông dân tản cư.',
        explanation: 'Tình huống tin làng Chợ Dầu theo giặc dồn ông Hai vào nỗi dằn vặt nội tâm đau đớn cùng cực, từ đó làm sáng ngời chân lý: "Làng thì yêu thật nhưng làng theo Tây thì phải thù".'
      },
      {
        question: 'Công việc chính của người anh thanh niên 26 tuổi sống một mình trên đỉnh núi Yên Sơn cao 2600m (Lặng lẽ Sa Pa) là gì?',
        options: ['Làm công tác khí tượng kiêm vật lý địa cầu, đo gió, đo mưa, đo nắng và tính mây báo về trung tâm dự báo thời tiết', 'Đi tìm kho báu vàng bạc trong hang đá', 'Trồng rừng phòng hộ và săn bắn thú rừng', 'Lái xe khách đường dài'],
        answerIndex: 0,
        hint: '"Cháu ở đây có nhiệm vụ ốp thời tiết mỗi ngày 4 lần: 4 giờ, 11 giờ trưa, 7 giờ tối và 1 giờ sáng".',
        explanation: 'Anh thanh niên làm công tác khí tượng đo các thông số khí quyển, một lần dự báo kịp thời đám mây khô giúp không quân bắn rơi máy bay Mỹ.'
      },
      {
        question: 'Chi tiết ông Hai "cứ khoe mãi cái nhà của ông bị giặc Pháp đốt nhẵn" cuối truyện "Làng" có ý nghĩa sâu sắc thế nào?',
        options: ['Chứng minh làng Chợ Dầu không hề theo giặc mà đã anh dũng kháng chiến; niềm vui danh dự làng được phục hồi lấn át mọi mất mát vật chất', 'Vì ông Hai không thích ngôi nhà cũ', 'Vì ông muốn đòi tiền bồi thường', 'Vì ông Hai bị mất trí nhớ'],
        answerIndex: 0,
        hint: 'Nhà cháy là bằng chứng làng Chợ Dầu trung kiên đánh giặc.',
        explanation: 'Ngôi nhà là tài sản cả đời nhưng bị đốt chứng tỏ làng không theo giặc. Niềm tự hào về danh dự trong sạch của làng quê lớn hơn mọi thiệt hại gia sản.'
      },
      {
        question: 'Ý nghĩa tư tưởng cốt lõi của tác phẩm "Lặng lẽ Sa Pa" là ca ngợi điều gì?',
        options: ['Vẻ đẹp của những con người lao động bình dị, vô danh đang ngày đêm âm thầm cống hiến tuổi xuân cho Tổ quốc', 'Cảnh quan tuyết rơi đẹp như châu Âu ở Sa Pa', 'Nghề lái xe vượt đèo hiểm trở', 'Thú vui sưu tầm hoa phong lan quý hiếm'],
        answerIndex: 0,
        hint: 'Trong cái lặng lẽ của Sa Pa, có những người đang âm thầm làm việc hết mình cho đất nước.',
        explanation: 'Tác phẩm tôn vinh tinh thần cống hiến thầm lặng không đòi hỏi tôn vinh của thế hệ thanh niên Việt Nam trong công cuộc xây dựng chủ nghĩa xã hội.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-lit-final',
    title: 'Ngữ văn 9 - Đề Kiểm Tra Cuối Học Kỳ 1 (Đề Tổng Hợp Đọc Hiểu & Nghị Luận Văn Học Vào 10)',
    titleEn: 'Literature 9 - Semester 1 Final Examination (Comprehensive Entrance Exam Prep)',
    grade: 9,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối kỳ 1: Đọc hiểu văn bản văn học, các phương châm hội thoại, thuật ngữ, lời dẫn trực tiếp/gián tiếp và kỹ năng lập dàn ý bài văn nghị luận.',
    descriptionEn: 'Comprehensive Semester 1 exam: Literary text reading, conversational maxims, direct/indirect quotes, essay outlining.',
    questions: [
      {
        question: 'Trong tác phẩm "Chiếc lược ngà" của Nguyễn Quang Sáng, chi tiết bé Thu kiên quyết không nhận ông Sáu là cha xuất phát từ lý do nào?',
        options: ['Vì vết sẹo dài trên má phải khiến ông Sáu không giống với người cha trong bức ảnh chụp chung với má', 'Vì bé Thu ghét những người lính bộ đội', 'Vì có người xúi giục bé Thu làm như vậy', 'Vì ông Sáu không mua quà đồ chơi cho bé'],
        answerIndex: 0,
        hint: 'Vết thẹo chiến tranh làm thay đổi diện mạo bên ngoài của cha.',
        explanation: 'Bé Thu chỉ biết cha qua bức ảnh ngày cưới. Vết sẹo do mảnh đạn chiến tranh làm khuôn mặt ông Sáu biến dạng khiến tâm hồn trẻ thơ ngờ vực.'
      },
      {
        question: 'Thành ngữ "Ăn đơm nói đặt" hoặc "Nói có sách, mách có chứng" liên quan trực tiếp đến PHƯƠNG CHÂM HỘI THOẠI nào?',
        options: ['Phương châm về chất', 'Phương châm về lượng', 'Phương châm quan hệ', 'Phương châm cách thức'],
        answerIndex: 0,
        hint: 'Không nói những điều mà mình không có bằng chứng xác thực (chất lượng thông tin).',
        explanation: 'Phương châm về chất yêu cầu lời nói phải có căn cứ xác thực, không nói sai sự thật.'
      },
      {
        question: 'Khi chuyển một LỜI DẪN TRỰC TIẾP sang LỜI DẪN GIÁN TIẾP, thao tác ngữ pháp nào bắt buộc phải thực hiện?',
        options: ['Bỏ dấu hai chấm và dấu ngoặc kép, thay đổi đại từ nhân xưng và từ chỉ thời gian không gian cho phù hợp', 'Giữ nguyên 100% không được thay đổi chữ nào', 'Chỉ cần thêm dấu chấm than ở cuối câu', 'Xóa bỏ hoàn toàn câu nói đó'],
        answerIndex: 0,
        hint: 'Điều chỉnh ngôi kể từ góc nhìn người tường thuật.',
        explanation: 'Dẫn gián tiếp thuật lại lời nói theo cách của người kể: bỏ ngoặc kép, chuyển đại từ nhân xưng (tôi -> anh ấy/cô ấy) và chỉnh thời gian.'
      },
      {
        question: 'Hình tượng "Bếp lửa" trong bài thơ cùng tên của Bằng Việt gắn liền với hình ảnh người bà tần tảo biểu trưng cho điều gì?',
        options: ['Tình bà cháu thiêng liêng, đức hy sinh bền bỉ và nguồn cội hơi ấm nuôi dưỡng tâm hồn người cháu khôn lớn', 'Nỗi sợ hãi bếp tro tàn', 'Nghề nấu nướng gia truyền vùng quê', 'Thời tiết lạnh giá của mùa đông nước Nga'],
        answerIndex: 0,
        hint: '"Một ngọn lửa, lòng bà luôn ủ sẵn / Một ngọn lửa chứa niềm tin dai dẳng...".',
        explanation: 'Bếp lửa vừa là hình ảnh thực vừa là biểu tượng của tình yêu thương, sự che chở và niềm tin vững bền mà bà trao truyền cho cháu.'
      },
      {
        question: 'Yêu cầu quan trọng nhất của phần MỞ BÀI trong một bài văn nghị luận phân tích nhân vật văn học là gì?',
        options: ['Giới thiệu ngắn gọn tác giả, tác phẩm, nêu bật tên nhân vật và định hướng vấn đề nghị luận cốt lõi', 'Kể lại toàn bộ cốt truyện từ đầu đến cuối', 'Đưa ra lời cảm ơn ban giám khảo chấm thi', 'Chỉ ghi lại đúng một câu trích dẫn'],
        answerIndex: 0,
        hint: 'Giới thiệu tác giả - tác phẩm - nhân vật - vấn đề nghị luận.',
        explanation: 'Mở bài chuẩn mực cần định vị tác giả, xuất xứ tác phẩm và dẫn dắt trúng vấn đề nghị luận về phẩm chất, số phận nhân vật.'
      },
      {
        question: 'Thông điệp nhân đạo sâu sắc nhất mà tác phẩm "Chiếc lược ngà" gửi gắm đến người đọc là gì?',
        options: ['Tình phụ tử thiêng liêng, bất tử vượt lên trên mọi sự tàn khốc, chia cắt của chiến tranh bom đạn', 'Lên án sự bướng bỉnh của trẻ em vùng căn cứ', 'Khuyên người lính không nên tham gia chiến tranh', 'Ca ngợi nghề làm đồ thủ công mỹ nghệ bằng ngà voi'],
        answerIndex: 0,
        hint: 'Chiếc lược ngà là kỷ vật tình cha con bất diệt.',
        explanation: 'Nguyễn Quang Sáng khẳng định chiến tranh có thể tàn phá thể xác nhưng không thể nào hủy diệt được tình cảm cha con máu thịt thiêng liêng.'
      }
    ]
  },

  // =========================================================================
  // GRADE 9 - KHOA HỌC TỰ NHIÊN 9 - SEMESTER 1
  // =========================================================================
  {
    id: 'quiz-g9-s1-sci-reg1',
    title: 'KHTN 9 - Kiểm tra Thường xuyên 1: Năng lượng Cơ học & Động năng - Thế năng',
    titleEn: 'Natural Science 9 - Regular Assessment 1: Mechanical Energy & Conservation Laws',
    grade: 9,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Công thức động năng Wđ = 1/2 mv², thế năng trọng trường Wt = mgh, định luật bảo toàn cơ năng.',
    descriptionEn: 'Kinetic energy, gravitational potential energy, and mechanical energy conservation.',
    questions: [
      {
        question: 'Công thức tính ĐỘNG NĂNG (Wđ) của một vật có khối lượng m đang chuyển động với vận tốc v là:',
        options: ['Wđ = (1/2) · m · v²', 'Wđ = m · g · h', 'Wđ = m · v', 'Wđ = (1/2) · m · v'],
        answerIndex: 0,
        hint: 'Một nửa tích khối lượng với bình phương vận tốc.',
        explanation: 'Động năng là dạng năng lượng do chuyển động mà có: Wđ = (1/2)mv² (đơn vị Jun - J).'
      },
      {
        question: 'Một hòn sỏi có khối lượng 0.2 kg đang rơi tự do từ độ cao h = 10 m xuống đất. Lấy g = 10 m/s². Thế năng trọng trường ban đầu của hòn sỏi là:',
        options: ['20 J', '2 J', '200 J', '10 J'],
        answerIndex: 0,
        hint: 'Wt = m · g · h = 0.2 · 10 · 10 = 20 J.',
        explanation: 'Wt = m · g · h = 0.2 · 10 · 10 = 20 J.'
      },
      {
        question: 'Khi một vật rơi tự do từ trên cao xuống đất (bỏ qua mọi lực cản không khí), sự chuyển hóa năng lượng diễn ra như thế nào?',
        options: ['Thế năng giảm dần và chuyển hóa hoàn toàn thành động năng tăng dần, cơ năng được bảo toàn', 'Động năng chuyển hóa thành thế năng', 'Cả động năng và thế năng đều bằng 0', 'Cơ năng biến mất hoàn toàn'],
        answerIndex: 0,
        hint: 'Độ cao giảm làm thế năng giảm, vận tốc tăng làm động năng tăng.',
        explanation: 'Trong quá trình rơi tự do, thế năng giảm bao nhiêu thì động năng tăng bấy nhiêu, tổng cơ năng W = Wđ + Wt luôn không đổi.'
      },
      {
        question: 'Nếu vận tốc của một chiếc ô tô tăng lên gấp đôi (từ 20 km/h lên 40 km/h) thì động năng của ô tô sẽ tăng lên gấp mấy lần?',
        options: ['Tăng lên gấp 4 lần', 'Tăng lên gấp 2 lần', 'Tăng lên gấp 8 lần', 'Không đổi'],
        answerIndex: 0,
        hint: 'Động năng tỉ lệ thuận với BÌNH PHƯƠNG vận tốc (v²): 2² = 4.',
        explanation: 'Wđ tỉ lệ với v². Khi v tăng 2 lần thì v² tăng 4 lần, do đó động năng tăng lên gấp 4 lần.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-sci-reg2',
    title: 'KHTN 9 - Kiểm tra Thường xuyên 2: Ánh sáng & Khúc xạ Ánh sáng, Thấu kính',
    titleEn: 'Natural Science 9 - Regular Assessment 2: Light Refraction & Optical Lenses',
    grade: 9,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Hiện tượng khúc xạ ánh sáng, định luật khúc xạ, thấu kính hội tụ, thấu kính phân kỳ và tật khúc xạ của mắt.',
    descriptionEn: 'Refraction laws, converging/diverging lenses, and eye vision defects correction.',
    questions: [
      {
        question: 'Khi một tia sáng truyền xiên góc từ KHÔNG KHÍ vào NƯỚC, góc khúc xạ r so với góc tới i có mối quan hệ như thế nào?',
        options: ['Góc khúc xạ r nhỏ hơn góc tới i (r < i)', 'Góc khúc xạ r lớn hơn góc tới i (r > i)', 'Góc khúc xạ luôn bằng góc tới (r = i)', 'Góc khúc xạ luôn bằng 90°'],
        answerIndex: 0,
        hint: 'Nước có chiết suất quang học lớn hơn không khí nên tia sáng bị bẻ gãy lại gần pháp tuyến hơn.',
        explanation: 'Khi truyền từ môi trường chiết quang kém (không khí) sang môi trường chiết quang hơn (nước), tia khúc xạ lệch lại gần pháp tuyến nên r < i.'
      },
      {
        question: 'THẤU KÍNH HỘI TỤ có đặc điểm hình học nhận dạng nào sau đây?',
        options: ['Phần rìa mỏng hơn phần giữa', 'Phần rìa dày hơn phần giữa', 'Độ dày đồng nhất từ rìa vào giữa', 'Có hình cầu rỗng'],
        answerIndex: 0,
        hint: 'Thấu kính mép mỏng làm hội tụ chùm sáng song song.',
        explanation: 'Thấu kính hội tụ có phần rìa mỏng hơn phần trung tâm (kính mép mỏng), khi chiếu chùm tia tới song song thì chùm tia ló hội tụ tại tiêu điểm.'
      },
      {
        question: 'Người bị tật CẬN THỊ khi nhìn các vật ở xa sẽ thấy mờ nhòe. Để khắc phục tật cận thị, người đó cần đeo kính làm bằng:',
        options: ['Thấu kính phân kỳ có tiêu cự thích hợp', 'Thấu kính hội tụ', 'Gương phẳng', 'Kính râm màu tối đơn thuần'],
        answerIndex: 0,
        hint: 'Mắt cận hội tụ ảnh trước võng mạc, cần thấu kính phân kỳ kéo ảnh lùi về đúng màng lưới võng mạc.',
        explanation: 'Kính cận là thấu kính phân kỳ giúp làm phân kỳ chùm sáng trước khi vào mắt để ảnh của vật ở vô cực hiện rõ đúng trên màng lưới.'
      },
      {
        question: 'Vật sáng đặt trước thấu kính hội tụ ngoài khoảng tiêu cự (d > f) sẽ cho ảnh có tính chất gì?',
        options: ['Ảnh thật, ngược chiều với vật', 'Ảnh ảo, cùng chiều và lớn hơn vật', 'Ảnh ảo, ngược chiều', 'Không bao giờ tạo được ảnh'],
        answerIndex: 0,
        hint: 'Ảnh thật hứng được trên màn chắn phía sau thấu kính.',
        explanation: 'Khi vật đặt ngoài khoảng tiêu cự của thấu kính hội tụ, chùm tia ló luôn hội tụ tạo nên ảnh thật ngược chiều với vật.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-sci-reg3',
    title: 'KHTN 9 - Kiểm tra Thường xuyên 3: Kim loại & Dãy Hoạt động Hóa học',
    titleEn: 'Natural Science 9 - Regular Assessment 3: Metals & Reactivity Series',
    grade: 9,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Tính chất vật lý, hóa học của kim loại; dãy hoạt động hóa học K, Na, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au; phản ứng đẩy kim loại khỏi muối.',
    descriptionEn: 'Chemical reactivity series of metals, displacement reactions in aqueous salt solutions.',
    questions: [
      {
        question: 'Dãy kim loại nào sau đây được sắp xếp đúng theo chiều HOẠT ĐỘNG HÓA HỌC GIẢM DẦN?',
        options: ['K > Na > Mg > Al > Zn > Fe > Cu > Ag', 'Cu > Fe > Zn > Al > Mg > Na > K', 'Fe > Al > Mg > Zn > Cu > Ag', 'Na > K > Cu > Fe > Mg > Ag'],
        answerIndex: 0,
        hint: '"Khi Nào May Áo Giáp Sắt... Cửa Hàng Á Phi Âu".',
        explanation: 'Dãy hoạt động hóa học chuẩn: K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, (H), Cu, Hg, Ag, Pt, Au theo chiều tính kim loại giảm dần.'
      },
      {
        question: 'Khi nhúng một đinh sắt (Fe) sạch vào dung dịch đồng sunfat (CuSO₄ màu xanh lam), hiện tượng quan sát được là gì?',
        options: ['Có lớp kim loại màu đỏ (Cu) bám ngoài đinh sắt và màu xanh lam của dung dịch nhạt dần', 'Đinh sắt tan biến ngay và sủi bọt khí dữ dội', 'Dung dịch chuyển sang màu tím đậm', 'Không có hiện tượng gì xảy ra'],
        answerIndex: 0,
        hint: 'Fe đứng trước Cu trong dãy hoạt động nên đẩy được Cu ra khỏi muối: Fe + CuSO₄ -> FeSO₄ + Cu↓.',
        explanation: 'Sắt đẩy đồng ra khỏi dung dịch tạo kết tủa Cu màu đỏ gạch bám trên đinh sắt, muối FeSO₄ tạo thành làm dung dịch nhạt dần màu xanh.'
      },
      {
        question: 'Kim loại nào sau đây có tính DẪN ĐIỆN VÀ DẪN NHIỆT TỐT NHẤT trong số tất cả các kim loại?',
        options: ['Bạc (Ag)', 'Đồng (Cu)', 'Vàng (Au)', 'Nhôm (Al)'],
        answerIndex: 0,
        hint: 'Thứ tự dẫn điện giảm dần: Bạc > Đồng > Vàng > Nhôm > Sắt.',
        explanation: 'Bạc (Ag) là kim loại dẫn điện và dẫn nhiệt tốt nhất, tiếp theo là đồng (Cu) và vàng (Au).'
      },
      {
        question: 'Gang và thép là hai hợp kim vô cùng quan trọng của kim loại nào với cacbon?',
        options: ['Sắt (Fe)', 'Đồng (Cu)', 'Nhôm (Al)', 'Kẽm (Zn)'],
        answerIndex: 0,
        hint: 'Hợp kim của sắt với cacbon (gang có 2-5% C, thép có dưới 2% C).',
        explanation: 'Gang và thép là hợp kim của sắt (Fe) với nguyên tố cacbon (C) cùng một số nguyên tố khác.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-sci-reg4',
    title: 'KHTN 9 - Kiểm tra Thường xuyên 4: Di truyền Học Menđen & Quy luật Phân ly',
    titleEn: 'Natural Science 9 - Regular Assessment 4: Mendelian Genetics & Segregation Law',
    grade: 9,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Thí nghiệm lai một cặp tính trạng của Menđen trên đậu Hà Lan, kiểu gen đồng hợp, dị hợp, tỉ lệ kiểu hình 3 trội : 1 lặn ở F2.',
    descriptionEn: 'Gregor Mendel pea plant monohybrid crosses, dominant and recessive alleles, 3:1 F2 ratio.',
    questions: [
      {
        question: 'Khi lai hai dòng thuần chủng hoa đỏ (trội hoàn toàn) và hoa trắng (lặn) với nhau, tỉ lệ kiểu hình ở thế hệ con lai F2 theo Menđen là:',
        options: ['3 cây hoa đỏ : 1 cây hoa trắng', '1 cây hoa đỏ : 1 cây hoa trắng', '100% cây hoa đỏ', '1 cây hoa đỏ : 2 cây hoa hồng : 1 cây hoa trắng'],
        answerIndex: 0,
        hint: 'Sơ đồ lai: P: AA x aa -> F1: Aa -> F2: 1 AA : 2 Aa : 1 aa (3 trội : 1 lặn).',
        explanation: 'Ở thế hệ F2, tỉ lệ kiểu gen là 1 AA : 2 Aa : 1 aa, cho tỉ lệ kiểu hình là 3 hoa đỏ (trội) : 1 hoa trắng (lặn).'
      },
      {
        question: 'Đối tượng thực nghiệm di truyền học xuất sắc được Menđen lựa chọn để phát hiện ra các quy luật di truyền là loài cây nào?',
        options: ['Cây đậu Hà Lan (Pisum sativum)', 'Cây ngô', 'Cây lúa nước', 'Cây cà chua'],
        answerIndex: 0,
        hint: 'Loài cây tự thụ phấn nghiêm ngặt và có nhiều cặp tính trạng tương phản rõ rệt.',
        explanation: 'Đậu Hà Lan có khả năng tự thụ phấn nghiêm ngặt, thời gian sinh trưởng ngắn và các cặp tính trạng biểu hiện tương phản dứt khoát.'
      },
      {
        question: 'Phép lai nào sau đây được gọi là PHÉP LAI PHÂN TÍCH (Test Cross)?',
        options: ['Lai giữa cá thể mang tính trạng trội cần xác định kiểu gen với cá thể mang tính trạng lặn', 'Lai giữa hai cá thể có kiểu hình lặn với nhau', 'Lai giữa hai cá thể mang kiểu gen thuần chủng trội', 'Lai tự do ngẫu nhiên trong quần thể'],
        answerIndex: 0,
        hint: 'Dùng cá thể lặn (aa) để kiểm tra xem cá thể trội là AA hay Aa.',
        explanation: 'Lai phân tích là phép lai giữa cá thể mang tính trạng trội với cá thể mang tính trạng lặn tương ứng nhằm xác định kiểu gen của cá thể trội.'
      },
      {
        question: 'Đơn vị cấu trúc mang thông tin di truyền xác định một tính trạng cụ thể của sinh vật nằm trên nhiễm sắc thể được gọi là gì?',
        options: ['Gen', 'Tế bào chất', 'Màng tế bào', 'Không bào'],
        answerIndex: 0,
        hint: 'Một đoạn phân tử ADN mang thông tin mã hóa.',
        explanation: 'Gen là một đoạn của phân tử ADN mang thông tin mã hóa cho một chuỗi pôlipeptit hay một phân tử ARN, quyết định tính trạng của sinh vật.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-sci-final',
    title: 'KHTN 9 - Đề Kiểm Tra Cuối Học Kỳ 1 (Vật lý Cơ - Quang, Kim loại Hóa học & Di truyền học Menđen)',
    titleEn: 'Natural Science 9 - Semester 1 Final Examination (Comprehensive)',
    grade: 9,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối kỳ 1: Bảo toàn cơ năng, khúc xạ ánh sáng qua thấu kính, tính chất và dãy hoạt động kim loại, quy luật phân ly Menđen và phân tử ADN.',
    descriptionEn: 'Semester 1 comprehensive final exam: Mechanics, optics, metallurgy reactions, genetics, and DNA molecular structure.',
    questions: [
      {
        question: 'Nguyên tắc bổ sung trong cấu trúc xoắn kép của phân tử ADN (Axit đêôxiribônuclêic) quy định các cặp bazơ nitơ liên kết với nhau như thế nào?',
        options: ['A liên kết với T bằng 2 liên kết hiđro; G liên kết với X bằng 3 liên kết hiđro', 'A liên kết với G; T liên kết với X', 'A liên kết với X; T liên kết với G', 'Tất cả các bazơ nitơ đều liên kết ngẫu nhiên'],
        answerIndex: 0,
        hint: 'A liên kết với T (2 liên kết H); G liên kết với X (3 liên kết H).',
        explanation: 'Theo nguyên tắc bổ sung của Watson - Crick: Adenin (A) liên kết với Timin (T) bằng 2 liên kết hiđro; Guanin (G) liên kết với Xitôzin (X) bằng 3 liên kết hiđro.'
      },
      {
        question: 'Để bảo vệ các công trình bằng thép ngoài biển (như chân giàn khoan dầu khí) khỏi bị nước biển ăn mòn điện hóa, người ta thường gắn những khối kim loại nào vào thân thép?',
        options: ['Kẽm (Zn)', 'Đồng (Cu)', 'Vàng (Au)', 'Bạc (Ag)'],
        answerIndex: 0,
        hint: 'Phương pháp bảo vệ catot dùng kim loại có tính khử mạnh hơn sắt để bị ăn mòn thay thế.',
        explanation: 'Kẽm (Zn) hoạt động hóa học mạnh hơn sắt (Fe) nên sẽ đóng vai trò anot bị ăn mòn trước, bảo vệ khối thép nguyên vẹn.'
      },
      {
        question: 'Một bóng đèn có ghi (220V - 100W). Khi hoạt động bình thường ở hiệu điện thế 220V trong thời gian 5 giờ mỗi ngày, điện năng bóng đèn tiêu thụ trong 30 ngày là:',
        options: ['15 kWh (15 số điện)', '30 kWh', '150 kWh', '1.5 kWh'],
        answerIndex: 0,
        hint: 'A = P · t = 0.1 kW · (5 · 30) h = 0.1 · 150 = 15 kWh.',
        explanation: 'Công suất P = 100W = 0.1 kW. Tổng thời gian t = 5 x 30 = 150 giờ. Điện năng A = P · t = 0.1 · 150 = 15 kWh (15 số điện).'
      },
      {
        question: 'Cho phản ứng quang hợp ở cây xanh: 6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂. Quá trình này đã hấp thụ dạng năng lượng nào để chuyển hóa thành hóa năng?',
        options: ['Quang năng (năng lượng ánh sáng mặt trời)', 'Nhiệt năng tỏa ra từ lò than', 'Điện năng', 'Năng lượng hạt nhân'],
        answerIndex: 0,
        hint: 'Sắc tố diệp lục hấp thụ ánh sáng mặt trời.',
        explanation: 'Quang hợp hấp thụ quang năng của mặt trời nhờ diệp lục để tổng hợp chất hữu cơ (gluxit) và giải phóng khí oxy duy trì sự sống.'
      },
      {
        question: 'Trong phép lai AaBb x aabb (các gen phân li độc lập), tỉ lệ kiểu hình thu được ở đời con Fb là:',
        options: ['1 : 1 : 1 : 1', '9 : 3 : 3 : 1', '3 : 3 : 1 : 1', '100%'],
        answerIndex: 0,
        hint: 'Lai phân tích cơ thể dị hợp 2 cặp gen: (1:1)(1:1) = 1:1:1:1.',
        explanation: 'AaBb cho 4 loại giao tử tỉ lệ 1:1:1:1, aabb cho 1 loại giao tử ab. Kết quả thu được 4 nhóm kiểu hình bằng nhau: 1 AaBb : 1 Aabb : 1 aaBb : 1 aabb.'
      },
      {
        question: 'Sự truyền tải điện năng đi xa bằng đường dây cao thế (như đường dây 500kV Bắc - Nam) nhằm mục đích chính nào?',
        options: ['Tăng hiệu điện thế để giảm dòng điện, qua đó giảm hao phí do tỏa nhiệt trên đường dây truyền tải', 'Làm cho đường dây phát sáng đẹp mắt', 'Để đường dây không bị sét đánh', 'Làm tăng nhiệt độ môi trường xung quanh'],
        answerIndex: 0,
        hint: 'Công suất hao phí tỉ lệ nghịch với bình phương hiệu điện thế: Php = R · P² / U².',
        explanation: 'Khi tăng hiệu điện thế U lên n lần thì công suất hao phí nhiệt Php giảm đi n² lần, giúp tiết kiệm hàng triệu kilowatt điện.'
      }
    ]
  }
];
