import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Grade 9 Curriculum Quizzes - Ngữ văn 9 & KHTN 9 (Semester 2)
 * Meets requirement: At least 4 Regular Tests (15-min) + 1 Final Test (60-min) per semester
 * Aligned with Vietnam Ministry of Education GDPT 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 * Focused on Grade 10 Entrance Exam Mastery (Ôn thi vào 10)
 */
export const GRADE_9_LIT_SCI_PART2_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // GRADE 9 - NGỮ VĂN 9 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g9-s2-lit-reg1',
    title: 'Ngữ văn 9 - Kiểm tra Thường xuyên 1: Thơ Mùa xuân nho nhỏ & Thành phần Biệt lập',
    titleEn: 'Literature 9 - Regular Assessment 1: A Little Spring & Isolated Sentential Elements',
    grade: 9,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Thi phẩm "Mùa xuân nho nhỏ" của Thanh Hải, khát vọng hòa nhập cống hiến và các thành phần tình thái, cảm thán, gọi - đáp, phụ chú.',
    descriptionEn: 'Thanh Hai\'s poetry and syntactic isolated components (modal, exclamatory, vocative, parenthetical).',
    questions: [
      {
        question: 'Thành phần BIỆT LẬP nào được sử dụng trong câu văn sau: "Chắc chắn, cậu ấy sẽ đỗ vào trường chuyên cấp 3"?',
        options: ['Thành phần tình thái (thể hiện cách nhìn nhận, độ tin cậy của người nói)', 'Thành phần cảm thán', 'Thành phần gọi - đáp', 'Thành phần phụ chú'],
        answerIndex: 0,
        hint: '"Chắc chắn" thể hiện mức độ tin cậy cao của người nói đối với sự việc.',
        explanation: 'Thành phần tình thái được dùng để thể hiện cách nhìn của người nói đối với sự việc được nói đến trong câu (chắc chắn, có lẽ, hình như...).'
      },
      {
        question: 'Hình ảnh giọt long lanh rơi trong câu thơ: "Từng giọt long lanh rơi / Tôi đưa tay tôi hứng" (Thanh Hải) mang ý nghĩa nghệ thuật gì?',
        options: ['Giọt sương sớm, giọt mưa xuân và là sự ngưng đọng của âm thanh tiếng chim chiền chiện (ẩn dụ chuyển đổi cảm giác)', 'Giọt nước mắt đau buồn', 'Giọt mồ hôi của người nông dân', 'Giọt mực của nhà thơ'],
        answerIndex: 0,
        hint: 'Âm thanh tiếng chim tiếng hót được "nhìn thấy" (long lanh) và "hứng" được bằng tay.',
        explanation: 'Thanh Hải sử dụng biện pháp ẩn dụ chuyển đổi cảm giác: âm thanh tiếng chim chiền chiện kết tinh thành giọt sương long lanh để đón nhận bằng xúc giác.'
      },
      {
        question: 'Đoạn thơ: "Một mùa xuân nho nhỏ / Lặng lẽ dâng cho đời / Dù là tuổi hai mươi / Dù là khi tóc bạc" thể hiện khát vọng sống nào?',
        options: ['Khát vọng cống hiến thầm lặng, khiêm nhường nhưng bền bỉ suốt cả cuộc đời cho đất nước', 'Mong muốn được nổi tiếng được mọi người tung hô', 'Ước mơ sống thảnh thơi hưởng thụ cuộc sống', 'Nỗi lo sợ tuổi già và cái chết'],
        answerIndex: 0,
        hint: 'Mùa xuân nho nhỏ là biểu tượng cống hiến khiêm nhường.',
        explanation: 'Thanh Hải tâm niệm đem phần tinh túy nhỏ bé của đời mình hòa vào mùa xuân lớn của đất nước, bất kể ở lứa tuổi nào.'
      },
      {
        question: 'Thành phần GỌI - ĐÁP trong câu: "Bầu ơi thương lấy bí cùng / Tuy rằng khác giống nhưng chung một giàn" là cụm từ nào?',
        options: ['Bầu ơi', 'Thương lấy', 'Bí cùng', 'Chung một giàn'],
        answerIndex: 0,
        hint: 'Từ dùng để gọi tạo lập cuộc hội thoại có từ "ơi".',
        explanation: '"Bầu ơi" là thành phần gọi - đáp dùng để thiết lập quan hệ giao tiếp.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-lit-reg2',
    title: 'Ngữ văn 9 - Kiểm tra Thường xuyên 2: Viếng lăng Bác (Viễn Phương) & Khởi ngữ, Phép liên kết',
    titleEn: 'Literature 9 - Regular Assessment 2: Visiting Uncle Ho\'s Mausoleum & Topic Markers',
    grade: 9,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Cảm xúc thành kính của đồng bào miền Nam khi ra viếng Bác, khởi ngữ đứng trước chủ ngữ và các phép liên kết câu.',
    descriptionEn: 'Vien Phuong\'s reverence at Ho Chi Minh Mausoleum and syntactic topicalization.',
    questions: [
      {
        question: 'KHỞI NGỮ trong câu văn: "Về bài thơ này, tôi đã đọc rất nhiều lần và thuộc lòng từng câu chữ" là cụm từ nào?',
        options: ['Về bài thơ này', 'Tôi', 'Đã đọc rất nhiều lần', 'Thuộc lòng từng câu chữ'],
        answerIndex: 0,
        hint: 'Khởi ngữ đứng trước chủ ngữ để nêu lên đề tài được nói đến trong câu.',
        explanation: '"Về bài thơ này" đứng trước chủ ngữ "tôi", có tác dụng khởi đầu nêu chủ đề của câu.'
      },
      {
        question: 'Hình ảnh hàng tre trong bài thơ "Viếng lăng Bác" xuất hiện ở đầu và cuối bài thơ mang ý nghĩa biểu tượng nào?',
        options: ['Biểu tượng cho sức sống kiên cường, bất khuất, tinh thần đoàn kết và tấm lòng trung hiếu của dân tộc Việt Nam quanh Bác', 'Chỉ là bóng mát che nắng cho lăng Bác', 'Biểu tượng của vùng nông thôn nghèo khó', 'Để miêu tả loại cây trồng quanh hồ Gươm'],
        answerIndex: 0,
        hint: '"Đã thấy trong sương hàng tre bát ngát / Ôi! Hàng tre xanh xanh Việt Nam / Bão táp mưa sa đứng thẳng hàng".',
        explanation: 'Hàng tre là hình ảnh ẩn dụ cho con người và dân tộc Việt Nam với cốt cách kiên trung, bất khuất, đứng gác cho giấc ngủ ngàn thu của Người.'
      },
      {
        question: 'Câu thơ "Ngày ngày mặt trời đi qua trên lăng / Thấy một mặt trời trong lăng rất đỏ" sử dụng biện pháp tu từ nào?',
        options: ['Ẩn dụ', 'Hoán dụ', 'So sánh', 'Nói giảm nói tránh'],
        answerIndex: 0,
        hint: 'Bác Hồ được ví ngầm với vầng thái dương của dân tộc.',
        explanation: 'Mặt trời thứ hai là hình ảnh ẩn dụ ca ngợi Bác Hồ - nguồn ánh sáng cách mạng vĩ đại soi đường cho dân tộc Việt Nam thoát khỏi đêm đen nô lệ.'
      },
      {
        question: 'Hai câu thơ: "Bác nằm trong giấc ngủ bình yên / Giữa một vầng trăng sáng dịu hiền" dùng cách nói nào để giảm nhẹ nỗi đau mất mát?',
        options: ['Nói giảm nói tránh (dùng từ "giấc ngủ" thay cho cái chết)', 'Nói quá phóng đại', 'Đảo ngữ', 'Điệp từ điệp ngữ'],
        answerIndex: 0,
        hint: 'Tránh dùng trực tiếp từ "mất" hay "chết".',
        explanation: 'Biện pháp nói giảm nói tránh làm dịu đi nỗi đau thương vô hạn, miêu tả Bác như đang thiếp đi trong giấc ngủ thanh thản sau một đời cống hiến vì nước vì dân.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-lit-reg3',
    title: 'Ngữ văn 9 - Kiểm tra Thường xuyên 3: Sang thu (Hữu Thỉnh) & Nghĩa tường minh, Hàm ý',
    titleEn: 'Literature 9 - Regular Assessment 3: Approaching Autumn & Explicit vs Implied Meanings',
    grade: 9,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Sự biến chuyển tinh tế của đất trời từ hạ sang thu và rèn luyện phân biệt nghĩa hiển ngôn (tường minh) và hàm ngôn (hàm ý).',
    descriptionEn: 'Huu Thinh\'s sensory nature poetry and linguistic pragmatic conversational implicature.',
    questions: [
      {
        question: 'HÀM Ý (nghĩa hàm ẩn) trong giao tiếp ngôn ngữ được hiểu là gì?',
        options: ['Phần thông báo không được diễn đạt trực tiếp bằng từ ngữ trong câu mà được suy ra từ ngữ cảnh giao tiếp', 'Phần câu nói được viết to và in đậm', 'Nghĩa đen hiển thị rõ ràng từng chữ trong từ điển', 'Nghĩa của từ ngữ sai chính tả'],
        answerIndex: 0,
        hint: 'Nói bóng gió, gợi ý mà không nói thẳng tuột ra ngoài.',
        explanation: 'Hàm ý là thông điệp ngầm hiểu dựa trên quan hệ giữa người nói, người nghe và ngữ cảnh.'
      },
      {
        question: 'Hai câu thơ: "Sông được lúc dềnh dàng / Chim bắt đầu vội vã" trong bài "Sang thu" sử dụng biện pháp nghệ thuật gì?',
        options: ['Nhân hóa kết hợp phép đối nhịp nhàng', 'Nói quá', 'Chơi chữ', 'Điệp cấu trúc cú pháp'],
        answerIndex: 0,
        hint: 'Sông "dềnh dàng", chim "vội vã" như có tâm trạng của con người.',
        explanation: 'Phép nhân hóa gán cho dòng sông nét chậm rãi suy tư và bầy chim nét vội vã tránh rét đầu thu, tạo bức tranh chuyển mùa đầy chất thơ.'
      },
      {
        question: 'Hình ảnh ẩn dụ sâu sắc trong hai câu thơ cuối: "Sấm cũng bớt bất ngờ / Trên hàng cây đứng tuổi" thể hiện triết lý sống nào?',
        options: ['Con người từng trải qua nhiều giông bão thử thách của cuộc đời thì trở nên vững vàng, điềm đạm và bản lĩnh hơn', 'Mùa thu không bao giờ có sấm sét', 'Cây cổ thụ không bao giờ bị sét đánh', 'Tuổi già thì tai bị điếc nên không nghe thấy tiếng sấm'],
        answerIndex: 0,
        hint: 'Sấm là biến động bất thường của ngoại cảnh, hàng cây đứng tuổi là con người từng trải.',
        explanation: 'Hữu Thỉnh gửi gắm triết lý: khi đã vượt qua những thăng trầm bão giông của tuổi trẻ, con người sẽ điềm tĩnh, ung dung đối mặt với mọi biến thiên cuộc sống.'
      },
      {
        question: 'Trong câu nói của mẹ: "Trời tối rồi đấy con!", hàm ý nhắc nhở con điều gì?',
        options: ['Con nên dừng chơi và đi vào nhà học bài hoặc tắm rửa ăn cơm', 'Mặt trời đã lặn xuống núi', 'Mẹ muốn mua bóng đèn mới', 'Trời hôm nay có nhiều sao'],
        answerIndex: 0,
        hint: 'Câu trần thuật mang hàm ý yêu cầu hành động gián tiếp.',
        explanation: 'Người mẹ thông báo trạng thái bóng tối để hàm ý nhắc nhở đứa con hoàn thành nhiệm vụ và nghỉ ngơi.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-lit-reg4',
    title: 'Ngữ văn 9 - Kiểm tra Thường xuyên 4: Những ngôi sao xa xôi (Lê Minh Khuê) & Nghị luận một Ý kiến, Hiện tượng',
    titleEn: 'Literature 9 - Regular Assessment 4: The Distant Stars & Social Issues Argumentation',
    grade: 9,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Tổ trinh sát mặt đường (Phương Định, Nho, Thao) phá bom thông đường Trường Sơn và kỹ năng làm bài nghị luận xã hội vào 10.',
    descriptionEn: 'Le Minh Khue\'s female sappers on Truong Son trail and social issue essay argumentation.',
    questions: [
      {
        question: 'Công việc hàng ngày vô cùng nguy hiểm của ba nữ thanh niên xung phong tổ trinh sát mặt đường trong "Những ngôi sao xa xôi" là gì?',
        options: ['Ngồi trên cao điểm, khi máy bay ném bom thì đếm bom rơi, chạy lên đo khối lượng đất đá và phá bom nổ chậm bảo đảm thông đường', 'Lái xe tải chở hàng qua trọng điểm', 'Nấu ăn cho toàn bộ trung đoàn', 'Trồng rau tăng gia sản xuất trong hang đá'],
        answerIndex: 0,
        hint: 'Nhiệm vụ phá bom nổ chậm đếm từng giây đối mặt với cái chết.',
        explanation: 'Phương Định, Nho và chị Thao nhận nhiệm vụ trinh sát cao điểm trên tuyến lửa Trường Sơn, trực tiếp chôn thuốc nổ kích nổ bom chậm cứu thông tuyến đường huyết mạch.'
      },
      {
        question: 'Vẻ đẹp tâm hồn đáng yêu và lãng mạn của nhân vật Phương Định được tác giả khắc họa qua những nét tính cách nào?',
        options: ['Một cô gái Hà Nội nhạy cảm, giàu mộng mơ, thích ngắm mình trong gương, hay hát và nhớ về tuổi thơ êm đềm với những cơn mưa đá', 'Một người luôn cau có khó chịu với đồng đội', 'Một người sợ bóng tối và không dám ra ngoài', 'Một người chỉ thích ăn kẹo ngọt'],
        answerIndex: 0,
        hint: 'Tâm hồn trong sáng của nữ sinh Hà thành bước vào chiến trường khốc liệt.',
        explanation: 'Phương Định dũng cảm gan dạ lúc phá bom nhưng trong đời thường lại rất hồn nhiên, nữ tính, yêu âm nhạc và giàu ký ức đẹp về Hà Nội.'
      },
      {
        question: 'Khi viết bài văn NGHỊ LUẬN XÃ HỘI về một tư tưởng đạo lí (như lòng biết ơn, đức kiên trì), thao tác lập luận đầu tiên ở Thân bài là gì?',
        options: ['Giải thích ngắn gọn khái niệm và nội hàm của vấn đề tư tưởng', 'Kể lại một câu chuyện cổ tích', 'Đưa ra ngay lời kết luận kết bài', 'Phê phán người khác gay gắt'],
        answerIndex: 0,
        hint: 'Thao tác giải thích: Khái niệm là gì? Biểu hiện như thế nào?',
        explanation: 'Thân bài bài nghị luận tư tưởng đạo lý bắt buộc phải mở đầu bằng bước giải thích nghĩa của từ khóa trước khi bàn luận và chứng minh.'
      },
      {
        question: 'Hình ảnh "những ngôi sao xa xôi" trong nhan đề tác phẩm mang ý nghĩa biểu tượng nghệ thuật nào?',
        options: ['Biểu tượng cho ánh sáng lấp lánh của những tâm hồn trẻ trung, kiên cường, tỏa sáng vẻ đẹp anh hùng thầm lặng giữa chiến trường Trường Sơn', 'Tên gọi của một chòm sao trên bầu trời', 'Những chiếc đèn pha của xe ô tô chở hàng', 'Những mảnh bom đạn phát sáng ban đêm'],
        answerIndex: 0,
        hint: 'Vẻ đẹp tâm hồn của ba cô gái tỏa sáng như những vì sao trên cao.',
        explanation: 'Nhan đề tượng trưng cho vẻ đẹp trong trẻo, cao quý và chủ nghĩa anh hùng cách mạng của thế hệ thanh niên xung phong Việt Nam thời chống Mỹ.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-lit-final',
    title: 'Ngữ văn 9 - Đề Kiểm Tra Cuối Học Kỳ 2 (Đề Tổng Ôn Thi Tuyển Sinh Vào Lớp 10 Môn Ngữ Văn)',
    titleEn: 'Literature 9 - Semester 2 Final Examination (Master High School Entrance Mock Exam)',
    grade: 9,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm học lớp 9 chuẩn hóa cấu trúc Đề thi vào Lớp 10 của các Sở GD&ĐT: Đọc hiểu văn bản, Tiếng Việt (khởi ngữ, thành phần biệt lập, hàm ý) và Tập làm văn nghị luận.',
    descriptionEn: 'Final year-end examination simulating standard Grade 10 National Entrance Exam.',
    questions: [
      {
        question: 'Bác Hồ đã khuyên thanh niên: "Không có việc gì khó / Chỉ sợ lòng không bền / Đào núi và lấp biển / Quyết chí ắt làm nên". Đoạn thơ trên thể hiện nội dung tư tưởng cốt lõi nào?',
        options: ['Khẳng định sức mạnh to lớn của ý chí, lòng kiên trì và quyết tâm sắt đá của con người trước mọi gian nan thử thách', 'Khuyên thanh niên đi làm nghề đào đất đắp đường', 'Bắt buộc mọi người phải lấp biển', 'Khuyên mọi người không nên làm việc khó'],
        answerIndex: 0,
        hint: 'Bài học về lòng kiên trì và nghị lực sống phi thường.',
        explanation: 'Bác Hồ đúc kết chân lý: với ý chí kiên định và quyết tâm không lùi bước, con người có thể vượt qua mọi nghịch cảnh để thành công.'
      },
      {
        question: 'Trong câu: "Ôi quê hương! Mỗi tấc đất đều thấm đượm mồ hôi và máu của tiền nhân", từ "Ôi" thuộc thành phần biệt lập nào?',
        options: ['Thành phần cảm thán', 'Thành phần tình thái', 'Thành phần gọi đáp', 'Thành phần phụ chú'],
        answerIndex: 0,
        hint: 'Từ ngữ bộc lộ cảm xúc trực tiếp.',
        explanation: '"Ôi" là từ cảm thán thể hiện nỗi xúc động dâng trào của người nói.'
      },
      {
        question: 'Bài thơ "Ánh trăng" của Nguyễn Duy nhắc nhở con người điều gì sâu sắc trong cuộc sống thời bình hiện đại?',
        options: ['Đạo lý "Uống nước nhớ nguồn", ân nghĩa thủy chung với quá khứ gian lao và đồng đội đã hy sinh', 'Nên tắt hết đèn điện để ngắm trăng hàng đêm', 'Không nên sống ở thành phố nhiều nhà cao tầng', 'Tập thói quen đi dạo dưới trăng'],
        answerIndex: 0,
        hint: 'Trăng tròn vành vạnh nhắc nhở giật mình trước lối sống vô tình vô nghĩa quên đi quá khứ gian khó.',
        explanation: '"Ánh trăng" là lời tự nhắc nhở nghiêm khắc về đạo lý ân nghĩa thủy chung, giữ gìn phẩm chất trong sáng trước những cám dỗ vật chất tiện nghi.'
      },
      {
        question: 'Yếu tố quan trọng nhất để một dẫn chứng (dữ liệu thực tế) trong bài văn nghị luận xã hội có sức thuyết phục mạnh mẽ là gì?',
        options: ['Dẫn chứng phải xác thực, tiêu biểu, mới mẻ và được xã hội công nhận rộng rãi', 'Dẫn chứng càng kỳ lạ, bịa đặt càng tốt', 'Chỉ lấy dẫn chứng về bản thân mình', 'Chép lại các câu chuyện tiếu lâm'],
        answerIndex: 0,
        hint: 'Tính chân thực, tiêu biểu và thời sự của dẫn chứng.',
        explanation: 'Dẫn chứng thuyết phục phải có nguồn gốc xác thực, mang tính điển hình cao (như các tấm gương cống hiến, nhà khoa học, nhân vật truyền cảm hứng).'
      },
      {
        question: 'Câu thơ nào sau đây thể hiện tình yêu tha thiết, lòng gắn bó máu thịt của đứa con đối với người mẹ kính yêu trong bài thơ "Con cò" của Chế Lan Viên?',
        options: [
          'Con dù lớn vẫn là con của mẹ / Đi hết đời, lòng mẹ vẫn theo con',
          'Con cò bay lả bay la',
          'Cò một mình, cò phải kiếm ăn',
          'Ngủ yên, ngủ yên, cò ơi chớ sợ'
        ],
        answerIndex: 0,
        hint: 'Hai câu thơ bất hủ đúc kết tình mẫu tử bao la vĩnh cửu.',
        explanation: 'Chế Lan Viên đúc kết quy luật muôn đời của tình mẹ: dù con có trưởng thành, bay cao bay xa đến đâu thì vòng tay và trái tim mẹ vẫn luôn dõi theo che chở.'
      },
      {
        question: 'Để đạt điểm tối đa ở phần phân tích nghệ thuật khi làm bài thi văn vào 10, học sinh cần tránh lỗi sai phổ biến nào sau đây?',
        options: ['Chỉ diễn xuôi lại nội dung câu thơ, tóm tắt cốt truyện mà không chỉ ra và phân tích tác dụng của các biện pháp tu từ, từ ngữ độc đáo', 'Viết đúng chính tả', 'Trích dẫn thơ chính xác', 'Có mở bài, thân bài, kết bài rõ ràng'],
        answerIndex: 0,
        hint: 'Lỗi diễn xuôi thơ thành văn xuôi không bình nghệ thuật.',
        explanation: 'Nghị luận văn học đòi hỏi phải mổ xẻ các tín hiệu nghệ thuật (tu từ, nhịp điệu, hình ảnh, từ đắt) làm đòn bẩy bật lên tư tưởng chủ đề.'
      }
    ]
  },

  // =========================================================================
  // GRADE 9 - KHOA HỌC TỰ NHIÊN 9 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g9-s2-sci-reg1',
    title: 'KHTN 9 - Kiểm tra Thường xuyên 1: Hóa học Hữu cơ & Hiđrocacbon (Metan, Etilen, Axetilen)',
    titleEn: 'Natural Science 9 - Regular Assessment 1: Organic Chemistry & Hydrocarbons',
    grade: 9,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Đặc điểm hợp chất hữu cơ, cấu tạo phân tử, phản ứng thế của Metan CH₄, phản ứng cộng làm mất màu nước brom của Etilen C₂H₄.',
    descriptionEn: 'Hydrocarbon chemistry: Methane substitution, ethylene addition, and bromine decolorization.',
    questions: [
      {
        question: 'Khí nào sau đây có trong khí thiên nhiên, khí mỏ dầu và khí bioga (khí sinh học) với hàm lượng lớn nhất?',
        options: ['Metan (CH₄)', 'Etilen (C₂H₄)', 'Cacbon đioxit (CO₂)', 'Khí Clo (Cl₂)'],
        answerIndex: 0,
        hint: 'Hiđrocacbon no đơn giản nhất gồm 1 nguyên tử C liên kết 4 nguyên tử H.',
        explanation: 'Metan (CH₄) là thành phần chủ yếu chiếm tới 85 - 95% thể tích trong khí thiên nhiên và khí mỏ dầu.'
      },
      {
        question: 'Khí Etilen (C₂H₄) có phản ứng đặc trưng nào mà khí Metan (CH₄) KHÔNG có ở điều kiện thường?',
        options: ['Làm mất màu dung dịch nước Brom (Br₂ màu da cam) do có liên kết đôi C=C', 'Cháy tỏa nhiều nhiệt sinh ra CO₂ và H₂O', 'Là chất khí không màu', 'Nhẹ hơn không khí'],
        answerIndex: 0,
        hint: 'Liên kết đôi C=C kém bền dễ bị đứt ra để tham gia phản ứng cộng brom.',
        explanation: 'Etilen chứa một liên kết đôi C=C gồm một liên kết pi kém bền dễ tham gia phản ứng cộng làm mất màu dung dịch brom: C₂H₄ + Br₂ -> C₂H₄Br₂.'
      },
      {
        question: 'Phản ứng đặc trưng nhất của METAN (CH₄) khi có ánh sáng khuếch tán là:',
        options: ['Phản ứng thế với khí Clo: CH₄ + Cl₂ -> CH₃Cl + HCl', 'Phản ứng cộng nước brom', 'Phản ứng trùng hợp tạo polime', 'Phản ứng tráng bạc'],
        answerIndex: 0,
        hint: 'Nguyên tử Clo thay thế lần lượt từng nguyên tử Hiđro trong phân tử metan.',
        explanation: 'Metan chỉ chứa liên kết đơn C-H bền vững nên phản ứng đặc trưng là phản ứng thế halogen dưới tác dụng của ánh sáng.'
      },
      {
        question: 'Để kích thích quả xanh mau chín trong đời sống nông nghiệp, người ta thường dùng một lượng nhỏ khí nào?',
        options: ['Etilen (C₂H₄)', 'Hiđro (H₂)', 'Oxy (O₂)', 'Khí sunfurơ (SO₂)'],
        answerIndex: 0,
        hint: 'Hormon thực vật dạng khí giúp quả chín đồng loạt.',
        explanation: 'Khí etilen có tác dụng kích thích quá trình hô hấp của quả làm quả mau chín tự nhiên.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-sci-reg2',
    title: 'KHTN 9 - Kiểm tra Thường xuyên 2: Dẫn xuất Hiđrocacbon (Rượu Etylic & Axit Axetic)',
    titleEn: 'Natural Science 9 - Regular Assessment 2: Ethyl Alcohol & Acetic Acid Reactions',
    grade: 9,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Độ rượu, công thức phân tử C₂H₅OH và CH₃COOH, phản ứng este hóa tạo etyl axetat có mùi thơm hoa quả.',
    descriptionEn: 'Alcohols and carboxylic acids, esterification reaction, and functional groups.',
    questions: [
      {
        question: 'ĐỘ RƯỢU là gì trong phương pháp đo nồng độ cồn?',
        options: ['Số mililít rượu etylic nguyên chất có trong 100 mililít hỗn hợp rượu với nước', 'Số gam rượu trong 1 lít nước', 'Nhiệt độ sôi của dung dịch rượu', 'Số thìa rượu trong một cốc nước'],
        answerIndex: 0,
        hint: 'Ví dụ rượu 45° nghĩa là trong 100 ml rượu có 45 ml C₂H₅OH nguyên chất.',
        explanation: 'Độ rượu là số ml rượu etylic nguyên chất có trong 100 ml dung dịch rượu.'
      },
      {
        question: 'Khi cho mẩu kim loại Natri (Na) vào cốc chứa Rượu etylic (C₂H₅OH) nguyên chất, hiện tượng xảy ra là gì?',
        options: ['Mẩu Natri tan dần và sủi bọt khí không màu H₂ thoát ra', 'Không có hiện tượng gì', 'Natri chìm xuống đáy biến thành cát', 'Dung dịch chuyển sang màu đen'],
        answerIndex: 0,
        hint: 'Nhóm -OH của rượu tác dụng với Na giải phóng H₂: 2C₂H₅OH + 2Na -> 2C₂H₅ONa + H₂↑.',
        explanation: 'Natri phản ứng với nguyên tử H linh động trong nhóm -OH của rượu giải phóng khí hiđro thoát ra.'
      },
      {
        question: 'Giấm ăn dùng trong gia đình là dung dịch của axit axetic (CH₃COOH) trong nước có nồng độ phần trăm khoảng bao nhiêu?',
        options: ['Từ 2% đến 5%', 'Từ 50% đến 70%', '100% axit đậm đặc', '0.01%'],
        answerIndex: 0,
        hint: 'Dung dịch axit hữu cơ nồng độ rất loãng an toàn cho nấu ăn.',
        explanation: 'Giấm ăn là dung dịch axit axetic loãng có nồng độ 2 - 5%, vị chua thanh dùng trong chế biến thực phẩm.'
      },
      {
        question: 'Phản ứng giữa rượu etylic và axit axetic khi có axit H₂SO₄ đặc làm xúc tác đun nóng được gọi là phản ứng gì?',
        options: ['Phản ứng este hóa (tạo etyl axetat CH₃COOC₂H₅ có mùi thơm)', 'Phản ứng trung hòa', 'Phản ứng quang hợp', 'Phản ứng cháy nổ'],
        answerIndex: 0,
        hint: 'Axit + Rượu ⇌ Este + Nước.',
        explanation: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (phản ứng este hóa hai chiều tạo este có mùi thơm đặc trưng).'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-sci-reg3',
    title: 'KHTN 9 - Kiểm tra Thường xuyên 3: Gluxit, Protein, Polime & Vật liệu Mới',
    titleEn: 'Natural Science 9 - Regular Assessment 3: Carbohydrates, Proteins & Synthetic Polymers',
    grade: 9,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Glucozơ, saccarozơ, tinh bột, xenlulozơ; phản ứng tráng gương của glucozơ; sự đông tụ protein; chất dẻo PE, PVC.',
    descriptionEn: 'Biomolecules, Fehling/silver mirror test for glucose, protein denaturation, plastics.',
    questions: [
      {
        question: 'Để nhận biết dung dịch đường GLUCOZƠ (C₆H₁₂O₆), người ta dùng thuốc thử nào để tạo lớp kim loại sáng bóng bám trên thành ống nghiệm?',
        options: ['Dung dịch bạc nitrat trong amoniac (AgNO₃ / NH₃) đun nóng (phản ứng tráng bạc)', 'Dung dịch nước muối ăn NaCl', 'Quỳ tím', 'Dầu hỏa'],
        answerIndex: 0,
        hint: 'Tạo lớp bạc kim loại óng ánh như gương: C₆H₁₂O₆ + Ag₂O -> C₆H₁₂O₇ + 2Ag↓.',
        explanation: 'Glucozơ có nhóm chức anđehit (-CHO) nên tham gia phản ứng tráng bạc khử ion Ag⁺ thành kim loại Ag sáng bóng.'
      },
      {
        question: 'Hiện tượng lòng trắng trứng gà đông tụ lại thành khối rắn khi đun sôi nước hoặc khi vắt thêm chanh được gọi là hiện tượng gì?',
        options: ['Sự đông tụ của Protein', 'Sự bay hơi của nước', 'Sự thăng hoa', 'Sự hòa tan'],
        answerIndex: 0,
        hint: 'Protein bị biến tính bởi nhiệt độ hoặc axit.',
        explanation: 'Protein bị đông tụ (biến tính cấu trúc không gian bậc cao) dưới tác dụng của nhiệt độ cao hoặc môi trường axit/kiềm.'
      },
      {
        question: 'Hợp chất nào sau đây là thành phần chính cấu tạo nên màng tế bào thực vật và có nhiều nhất trong sợi bông nõn, gỗ tre nứa?',
        options: ['Xenlulozơ (chất xơ)', 'Tinh bột', 'Glucozơ', 'Chất béo'],
        answerIndex: 0,
        hint: 'Polisaccarit mạch thẳng không phân nhánh (C₆H₁₀O₅)n.',
        explanation: 'Xenlulozơ cấu tạo nên thành tế bào thực vật, tạo nên bộ khung cứng cáp cho cây cối (chiếm gần 98% sợi bông).'
      },
      {
        question: 'Trùng hợp khí etilen (C₂H₄) ở áp suất và nhiệt độ cao với xúc tác thích hợp thu được chất dẻo phổ biến nào?',
        options: ['Polietilen (nhựa PE dùng làm màng bọc nilông, túi xách)', 'Nhựa PVC làm ống dẫn nước', 'Cao su thiên nhiên', 'Sợi tơ tằm'],
        answerIndex: 0,
        hint: 'n CH₂=CH₂ -> (-CH₂-CH₂-)n.',
        explanation: 'Trùng hợp etilen tạo ra nhựa nhiệt dẻo Polietilen (PE) có tính cách điện, chống thấm nước tuyệt hảo.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-sci-reg4',
    title: 'KHTN 9 - Kiểm tra Thường xuyên 4: Hệ sinh thái & Chuỗi thức ăn, Bảo vệ Môi trường',
    titleEn: 'Natural Science 9 - Regular Assessment 4: Ecosystems, Food Webs & Ecological Balance',
    grade: 9,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Quần thể sinh vật, quần xã, hệ sinh thái, chuỗi và lưới thức ăn, tháp sinh thái và các biện pháp giữ cân bằng sinh thái.',
    descriptionEn: 'Ecosystem trophic levels, producers, consumers, decomposers, and biosphere conservation.',
    questions: [
      {
        question: 'Trong một chuỗi thức ăn trên cạn: Cỏ -> Sâu ăn lá -> Chim sâu -> Rắn -> Đại bàng. Sinh vật nào đóng vai trò là SINH VẬT SẢN XUẤT?',
        options: ['Cỏ (thực vật quang hợp)', 'Sâu ăn lá', 'Chim sâu', 'Đại bàng'],
        answerIndex: 0,
        hint: 'Sinh vật tự dưỡng có khả năng tổng hợp chất hữu cơ từ năng lượng mặt trời.',
        explanation: 'Thực vật (cỏ) là sinh vật sản xuất vì tự tổng hợp chất hữu cơ qua quang hợp làm thức ăn nuôi sống các bậc dinh dưỡng tiếp theo.'
      },
      {
        question: 'Nếu trong một khu rừng, con người săn bắt tận diệt các loài thú ăn thịt đầu bảng (hổ, báo, chó sói) thì hậu quả sinh thái nào sẽ xảy ra?',
        options: ['Các loài động vật ăn cỏ (hươu nai, thỏ) bùng nổ số lượng, ăn phá hoại trơ trụi thảm thực vật dẫn tới xói mòn rừng', 'Rừng cây sẽ mọc nhanh hơn gấp đôi', 'Hệ sinh thái trở nên cân bằng vĩnh viễn', 'Không gây ra bất kỳ tác động nào'],
        answerIndex: 0,
        hint: 'Mất sinh vật kiểm soát số lượng ở đỉnh chuỗi thức ăn.',
        explanation: 'Mất loài săn mồi đỉnh sẽ phá vỡ cân bằng sinh thái, động vật ăn cỏ sinh sôi quá mức phá hủy lớp phủ thực vật rừng.'
      },
      {
        question: 'Nhóm sinh vật nào sau đây đóng vai trò là SINH VẬT PHÂN GIẢI xác động thực vật chết trong hệ sinh thái?',
        options: ['Vi khuẩn và nấm hoại sinh trong đất', 'Hổ báo sư tử', 'Cây thông và cây tre', 'Cá mập biển sâu'],
        answerIndex: 0,
        hint: 'Phân giải chất hữu cơ thành muối khoáng vô cơ trả lại cho đất.',
        explanation: 'Vi khuẩn và nấm hoại sinh phân hủy xác sinh vật và chất thải thành chất vô cơ đơn giản khép kín chu trình tuần hoàn vật chất.'
      },
      {
        question: 'Biện pháp nào sau đây giúp bảo vệ đa dạng sinh học và giữ gìn cân bằng hệ sinh thái rừng nhiệt đới nước ta?',
        options: ['Thành lập các khu bảo tồn thiên nhiên, vườn quốc gia và nghiêm cấm săn bắt động vật hoang dã', 'Đốt rừng làm nương rẫy vào mùa khô', 'Xả rác thải nhựa vào rừng', 'Chặt trộm các cây gỗ quý lâu năm'],
        answerIndex: 0,
        hint: 'Bảo tồn nguyên vẹn môi trường sống tự nhiên của các loài.',
        explanation: 'Bảo vệ nghiêm ngặt các vườn quốc gia và khu bảo tồn sinh quyển là giải pháp hữu hiệu nhất bảo vệ vốn gen quý của động thực vật.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-sci-final',
    title: 'KHTN 9 - Đề Kiểm Tra Cuối Học Kỳ 2 (Đề Tổng Hợp Đánh Giá Kiến Thức Tự Nhiên Toàn Khối 9)',
    titleEn: 'Natural Science 9 - Semester 2 Final Examination (Year-End Comprehensive)',
    grade: 9,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm học lớp 9 bao trùm toàn bộ chương trình KHTN 9: Cơ học, Quang học, Điện năng, Hóa học vô cơ & hữu cơ (hiđrocacbon, dẫn xuất), Di truyền Menđen và Sinh thái học môi trường.',
    descriptionEn: 'End-of-year master examination covering all science disciplines for Grade 9 graduation.',
    questions: [
      {
        question: 'Đốt cháy hoàn toàn 2.24 lít khí metan (CH₄ ở điều kiện tiêu chuẩn). Thể tích khí oxi (O₂) cần dùng là bao nhiêu lít?',
        options: ['4.48 lít', '2.24 lít', '6.72 lít', '1.12 lít'],
        answerIndex: 0,
        hint: 'Phương trình phản ứng: CH₄ + 2O₂ -> CO₂ + 2H₂O. Tỉ lệ thể tích V_O₂ = 2 · V_CH₄ = 2 · 2.24 = 4.48 lít.',
        explanation: 'Theo phương trình hóa học: 1 mol CH₄ phản ứng vừa đủ với 2 mol O₂. Vì vậy thể tích khí oxi cần dùng = 2 x 2.24 = 4.48 lít.'
      },
      {
        question: 'Dung dịch nào sau đây làm đổi màu quỳ tím sang màu ĐỎ (hồng)?',
        options: ['Axit axetic (CH₃COOH)', 'Rượu etylic (C₂H₅OH)', 'Dung dịch đường glucozơ', 'Nước cất tinh khiết'],
        answerIndex: 0,
        hint: 'Axit hữu cơ có tính axit làm quỳ tím hóa đỏ.',
        explanation: 'Axit axetic có tính axit nên phân ly cho ion H⁺ làm đổi màu quỳ tím thành đỏ nhạt.'
      },
      {
        question: 'Vật sáng AB đặt vuông góc với trục chính của một thấu kính hội tụ có tiêu cự f = 12 cm, cách thấu kính một khoảng d = 24 cm (d = 2f). Ảnh thu được có đặc điểm gì?',
        options: ['Ảnh thật, ngược chiều và có kích thước bằng đúng vật (A\'B\' = AB)', 'Ảnh ảo, cùng chiều và lớn hơn vật', 'Ảnh thật, cùng chiều và nhỏ hơn vật', 'Không tạo được ảnh'],
        answerIndex: 0,
        hint: 'Khi vật đặt tại đúng khoảng cách d = 2f, ảnh thật hiện cách thấu kính d\' = 2f và bằng kích thước vật.',
        explanation: 'Công thức thấu kính: 1/f = 1/d + 1/d\' => 1/d\' = 1/12 - 1/24 = 1/24 => d\' = 24 cm. Độ phóng đại k = -d\'/d = -1 (ảnh thật bằng vật).'
      },
      {
        question: 'Hiện tượng hiệu ứng nhà kính gia tăng làm Trái Đất nóng lên toàn cầu bắt nguồn chủ yếu từ sự tích tụ của khí nào trong khí quyển?',
        options: ['Khí cacbon đioxit (CO₂) từ đốt nhiên liệu hóa thạch than đá, dầu mỏ và khí đốt', 'Khí nitơ tự nhiên', 'Khí heli', 'Hơi nước cất'],
        answerIndex: 0,
        hint: 'Khí CO₂ giữ lại bức xạ nhiệt hồng ngoại phản xạ từ mặt đất.',
        explanation: 'Hoạt động đốt nhiên liệu hóa thạch và phá rừng thải lượng khổng lồ khí CO₂ giữ nhiệt trong khí quyển, làm tan băng và biến đổi khí hậu.'
      },
      {
        question: 'Trong quần thể sinh vật giao phối ngẫu nhiên, cấu trúc di truyền có xu hướng đạt trạng thái gì nếu không có đột biến và chọn lọc tự nhiên tác động?',
        options: ['Trạng thái cân bằng di truyền (Định luật Hacđi - Vanbec)', 'Biến đổi hỗn loạn không ngừng', 'Kiểu gen lặn sẽ hoàn toàn biến mất', 'Tất cả cá thể đều mang kiểu gen đồng hợp'],
        answerIndex: 0,
        hint: 'Tần số alen và thành phần kiểu gen duy trì không đổi qua các thế hệ.',
        explanation: 'Định luật Hardy - Weinberg khẳng định trong điều kiện lý tưởng, tần số alen và thành phần kiểu gen của quần thể ngẫu phối luôn ở trạng thái cân bằng.'
      },
      {
        question: 'Ý nghĩa to lớn nhất của việc phát triển các nguồn năng lượng sạch (năng lượng mặt trời, điện gió, thủy triều) là gì?',
        options: ['Giảm phát thải khí nhà kính, bảo vệ môi trường sinh thái và đảm bảo an ninh năng lượng bền vững cho tương lai', 'Để không cần dùng đến bóng đèn điện', 'Để thay thế toàn bộ thức ăn của con người', 'Để làm cho gió thổi mạnh hơn'],
        answerIndex: 0,
        hint: 'Năng lượng tái tạo không tạo ra khí thải độc hại CO₂.',
        explanation: 'Năng lượng tái tạo giúp bảo vệ bầu khí quyển, giảm ô nhiễm và đảm bảo sự phát triển kinh tế bền vững cho các thế hệ tương lai.'
      }
    ]
  }
];
