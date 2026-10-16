import { CurriculumQuiz } from './curriculumData';

/**
 * Grade 8 Curriculum Quizzes Part 3
 * Covers Lịch sử và Địa lý & Tin học for Grade 8 (Semesters 1 & 2)
 * Meets requirement: At least 4 Regular Assessments + 1 Final Test per semester for each subject
 * Aligned with Vietnam Ministry of Education GDPT 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */
export const GRADE_8_PART3_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // GRADE 8 - LỊCH SỬ VÀ ĐỊA LÝ 8 - SEMESTER 1
  // =========================================================================
  {
    id: 'quiz-g8-s1-hisgeo-reg1',
    title: 'Lịch sử & Địa lí 8 - Kiểm tra Thường xuyên 1: Các cuộc Cách mạng Tư sản thời Cận đại & Địa hình Việt Nam',
    titleEn: 'History & Geography 8 - Regular Assessment 1: Bourgeois Revolutions & Vietnam Topography',
    grade: 8,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Cách mạng tư sản Anh, Chiến tranh giành độc lập 13 thuộc địa Bắc Mỹ, đặc điểm chung của địa hình Việt Nam.',
    descriptionEn: 'Early modern bourgeois revolutions and fundamental characteristics of Vietnam topography.',
    questions: [
      {
        question: 'Đặc điểm chung nổi bật nhất của địa hình phần đất liền Việt Nam là gì?',
        options: ['Đồi núi chiếm 3/4 diện tích lãnh thổ nhưng chủ yếu là đồi núi thấp dưới 1000m', 'Đồng bằng chiếm 80% diện tích lãnh thổ', 'Toàn bộ lãnh thổ là sa mạc cát khô cằn', 'Địa hình hoàn toàn bằng phẳng không có núi'],
        answerIndex: 0,
        hint: 'Đồi núi chiếm 3/4 diện tích, trong đó núi thấp dưới 1000m chiếm tới 85%.',
        explanation: 'Địa hình Việt Nam có đồi núi chiếm 3/4 diện tích, chủ yếu là đồi núi thấp, hướng địa hình chính là tây bắc - đông nam và vòng cung.'
      },
      {
        question: 'Tuyên ngôn Độc lập của Hợp chúng quốc Mỹ (1776) do Thomas Jefferson soạn thảo đã khẳng định quyền cơ bản nào của con người?',
        options: ['Quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc', 'Quyền được sở hữu nô lệ mãi mãi', 'Quyền xâm lược các nước láng giềng', 'Quyền không cần phải đóng bất kỳ thứ thuế nào'],
        answerIndex: 0,
        hint: 'Những chân lý bất hủ được Chủ tịch Hồ Chí Minh trích dẫn trong Tuyên ngôn Độc lập 1945.',
        explanation: 'Tuyên ngôn 1776 tuyên bố: "Tất cả mọi người sinh ra đều có quyền bình đẳng, tạo hóa ban cho họ những quyền không ai có thể xâm phạm được; trong đó có quyền sống, quyền tự do và quyền mưu cầu hạnh phúc".'
      },
      {
        question: 'Hai hướng địa hình chính của vùng núi non nước ta là hướng nào?',
        options: ['Hướng tây bắc - đông nam và hướng vòng cung', 'Hướng bắc - nam và hướng đông - tây', 'Chỉ duy nhất hướng đông bắc - tây nam', 'Hướng hình nan quạt xòe tròn'],
        answerIndex: 0,
        hint: 'Vùng Tây Bắc chạy tây bắc - đông nam; vùng Đông Bắc có 4 cánh cung lớn.',
        explanation: 'Hai hướng sơn văn chủ yếu của Việt Nam là hướng tây bắc - đông nam (dãy Hoàng Liên Sơn, Trường Sơn Bắc) và hướng vòng cung (Đông Bắc, Trường Sơn Nam).'
      },
      {
        question: 'Cuộc Cách mạng tư sản Pháp năm 1789 bùng nổ bắt đầu bằng sự kiện lịch sử vang dội nào?',
        options: ['Quần chúng nhân dân tấn công phá ngục Ba-xti (Bastille) ngày 14/7/1789', 'Vua Lu-i XVI chủ động thoái vị nhường ngôi', 'Ký kết hiệp ước hòa bình với nước Anh', 'Cuộc diễu hành hòa bình tại Paris'],
        answerIndex: 0,
        hint: 'Phá pháo đài ngục Ba-xti biểu tượng chế độ phong kiến chuyên chế.',
        explanation: 'Ngày 14/7/1789, nhân dân Paris vũ trang tấn công chiếm ngục Ba-xti, mở đầu cuộc đại cách mạng tư sản Pháp.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-hisgeo-reg2',
    title: 'Lịch sử & Địa lí 8 - Kiểm tra Thường xuyên 2: Cách mạng Công nghiệp Thế kỷ XVIII - XIX & Khoáng sản Việt Nam',
    titleEn: 'History & Geography 8 - Regular Assessment 2: Industrial Revolution & Minerals of Vietnam',
    grade: 8,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Máy hơi nước James Watt, chuyển đổi từ sản xuất thủ công sang cơ khí, phân bố khoáng sản than đá, dầu khí, bô-xít Việt Nam.',
    descriptionEn: 'The Industrial Revolution in Britain and spatial distribution of mineral resources in Vietnam.',
    questions: [
      {
        question: 'Phát minh mang tính bước ngoặt vĩ đại nhất mở đầu cho Cách mạng công nghiệp ở Anh thế kỷ XVIII là gì?',
        options: ['Máy hơi nước do Giêm Oát (James Watt) cải tiến năm 1784', 'Máy vi tính điện tử', 'Tàu hỏa chạy bằng năng lượng hạt nhân', 'Điện thoại di động thông minh'],
        answerIndex: 0,
        hint: 'Động cơ hơi nước cung cấp sức kéo cơ khí không phụ thuộc vào sức nước hay sức gió.',
        explanation: 'Máy hơi nước của James Watt ra đời năm 1784 giúp máy móc vận hành liên tục ở mọi nơi, mở ra kỷ nguyên cơ giới hóa.'
      },
      {
        question: 'Vùng mỏ THAN ĐÁ có trữ lượng lớn nhất và chất lượng than antraxit tốt nhất Việt Nam phân bố ở tỉnh nào?',
        options: ['Quảng Ninh', 'Cà Mau', 'Lào Cai', 'Bình Thuận'],
        answerIndex: 0,
        hint: 'Bể than Đông Bắc lớn nhất cả nước.',
        explanation: 'Quảng Ninh là trung tâm khai thác than đá lớn nhất cả nước, chiếm trên 90% sản lượng than antraxit thương phẩm của Việt Nam.'
      },
      {
        question: 'Hậu quả xã hội lớn nhất của cuộc Cách mạng công nghiệp thời cận đại là gì?',
        options: ['Hình thành hai giai cấp cơ bản đối lập sâu sắc trong xã hội tư bản: Tư sản và Vô sản', 'Xóa bỏ hoàn toàn khoảng cách giàu nghèo', 'Tất cả mọi người đều trở thành quý tộc', 'Con người ngừng làm việc hoàn toàn'],
        answerIndex: 0,
        hint: 'Chủ xưởng tư bản nắm tư liệu sản xuất và công nhân làm thuê bán sức lao động.',
        explanation: 'Cách mạng công nghiệp làm biến đổi sâu sắc cơ cấu xã hội, làm nảy sinh mâu thuẫn giai cấp sâu sắc giữa tư sản và vô sản.'
      },
      {
        question: 'Mỏ BÔ-XÍT (quặng nhôm) quy mô khổng lồ của Việt Nam tập trung chủ yếu ở vùng địa lý nào?',
        options: ['Tây Nguyên (Đắk Nông, Lâm Đồng, Gia Lai)', 'Đồng bằng sông Cửu Long', 'Vùng Duyên hải Nam Trung Bộ', 'Quần đảo Hoàng Sa và Trường Sa'],
        answerIndex: 0,
        hint: 'Bauxit phong hóa từ đá bazan trên cao nguyên bazan.',
        explanation: 'Tây Nguyên sở hữu trữ lượng bô-xít lớn hàng đầu thế giới phân bố trên các cao nguyên đất đỏ bazan.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-hisgeo-reg3',
    title: 'Lịch sử & Địa lí 8 - Kiểm tra Thường xuyên 3: Phong trào Công nhân & Khí hậu Nhiệt đới Gió mùa Việt Nam',
    titleEn: 'History & Geography 8 - Regular Assessment 3: Labor Movements & Monsoon Climate of Vietnam',
    grade: 8,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Sự ra đời của Chủ nghĩa Mác, Tuyên ngôn Đảng Cộng sản (1848), gió mùa mùa đông và gió mùa mùa hạ ở nước ta.',
    descriptionEn: 'Marxist philosophy emergence and northeast/southwest monsoon dynamics in Vietnam.',
    questions: [
      {
        question: 'Gió mùa Đông Bắc (hoạt động từ tháng 11 đến tháng 4 năm sau) gây ra thời tiết đặc trưng nào cho miền Bắc nước ta?',
        options: ['Nửa đầu mùa đông lạnh khô hanh, nửa cuối mùa đông lạnh ẩm có mưa phùn', 'Quanh năm nóng nực trên 40°C', 'Mưa rào bão tố kèm lốc xoáy liên tục suốt cả ngày', 'Tuyết rơi dày đặc bao phủ toàn bộ đồng bằng'],
        answerIndex: 0,
        hint: 'Đặc điểm mùa đông miền Bắc: đầu đông hanh hao, cuối đông mưa phùn ẩm ướt gió bấc.',
        explanation: 'Gió mùa mùa đông xuất phát từ áp cao Xi-bia qua lục địa nên đầu mùa lạnh khô, cuối mùa lệch đông qua biển nên gây lạnh ẩm mưa phùn.'
      },
      {
        question: 'Tác phẩm "Tuyên ngôn của Đảng Cộng sản" xuất bản tháng 2/1848 do ai đồng sáng lập?',
        options: ['C. Mác (Karl Marx) và Ph. Ăng-ghen (Friedrich Engels)', 'V.I. Lênin và Xtalin', 'Rút-xô và Vôn-te', 'Tôm-xơn và Niu-tơn'],
        answerIndex: 0,
        hint: 'Hai nhà tư tưởng vĩ đại của chủ nghĩa xã hội khoa học.',
        explanation: 'Mác và Ăng-ghen đã viết bản cương lĩnh chính trị Tuyên ngôn Đảng Cộng sản với khẩu hiệu: "Vô sản tất cả các nước, đoàn kết lại!".'
      },
      {
        question: 'Tại sao cùng nằm trên cùng vĩ độ với các sa mạc khô hạn ở Tây Á và Bắc Phi nhưng Việt Nam lại có khí hậu ẩm và rừng cây xanh tốt quanh năm?',
        options: ['Do giáp Biển Đông rộng lớn và chịu tác động sâu sắc của các khối khí gió mùa mang nhiều hơi ẩm', 'Do Việt Nam có rất nhiều núi lửa đang hoạt động', 'Do Việt Nam nằm gần Bắc Cực', 'Do đất liền Việt Nam thấp hơn mực nước biển'],
        answerIndex: 0,
        hint: 'Vai trò điều hòa hơi ẩm to lớn của Biển Đông.',
        explanation: 'Biển Đông cung cấp nguồn ẩm dồi dào biến Việt Nam thành vùng thiên nhiên nhiệt đới gió mùa tươi tốt khác hẳn khí hậu khô hạn cùng vĩ độ.'
      },
      {
        question: 'Công xã Pa-ri (1871) đi vào lịch sử nhân loại với tư cách là:',
        options: ['Nhà nước kiểu mới đầu tiên của giai cấp vô sản do nhân dân lao động lập nên', 'Một đế chế phong kiến hùng mạnh', 'Một thuộc địa của đế quốc Anh', 'Một tổ chức tôn giáo thời Trung cổ'],
        answerIndex: 0,
        hint: 'Hình thái nhà nước công nhân đầu tiên kéo dài 72 ngày.',
        explanation: 'Công xã Paris thành lập tháng 3/1871 là cuộc cách mạng vô sản đầu tiên trên thế giới, đập tan bộ máy nhà nước tư sản.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-hisgeo-reg4',
    title: 'Lịch sử & Địa lí 8 - Kiểm tra Thường xuyên 4: Phong trào Kháng chiến chống Thực dân Pháp (1858 - 1884)',
    titleEn: 'History & Geography 8 - Regular Assessment 4: Resistance Against French Colonial Invasions',
    grade: 8,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Thực dân Pháp nổ súng xâm lược Đà Nẵng (1858), cuộc chiến đấu của quân dân ta tại Gia Định và các bản hiệp ước bất bình đẳng triều đình Huế.',
    descriptionEn: 'The 1858 French invasion of Da Nang and anti-colonial resistance battles.',
    questions: [
      {
        question: 'Thực dân Pháp chính thức nổ súng mở đầu cuộc chiến tranh xâm lược nước ta vào ngày tháng năm nào và tại địa điểm nào?',
        options: ['Ngày 1/9/1858 tại bán đảo Sơn Trà (Đà Nẵng)', 'Ngày 2/9/1945 tại Ba Đình (Hà Nội)', 'Ngày 20/11/1873 tại cửa biển Hải Phòng', 'Ngày 10/10/1954 tại Thăng Long'],
        answerIndex: 0,
        hint: 'Liên quân Pháp - Tây Ban Nha nã đại bác vào bán đảo Sơn Trà.',
        explanation: 'Sáng ngày 1/9/1858, hạm đội liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu công cuộc xâm lược.'
      },
      {
        question: 'Vị anh hùng dân tộc nào đã lãnh đạo nghĩa quân đánh chìm tàu chiến Ét-pê-răng (Hy Vọng) của Pháp trên sông Nhật Tảo (1861)?',
        options: ['Nguyễn Trung Trực', 'Trương Định', 'Võ Duy Dương', 'Nguyễn Tri Phương'],
        answerIndex: 0,
        hint: 'Người có câu nói bất hủ: "Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây".',
        explanation: 'Nguyễn Trung Trực chỉ huy trận hỏa công đốt cháy tàu Ét-pê-răng trên sông Nhật Tảo và hy sinh oanh liệt năm 1868.'
      },
      {
        question: 'Tướng giặc Pháp nào đã bị quân dân ta và quân Cờ Đen tiêu diệt tại trận Cầu Giấy lần thứ nhất (1873)?',
        options: ['Gác-ni-ê (Francis Garnier)', 'Ri-vi-e (Henri Rivière)', 'Đờ Cát (De Castries)', 'Măng-găng (Mangin)'],
        answerIndex: 0,
        hint: 'Viên đại úy Pháp đánh chiếm thành Hà Nội năm 1873.',
        explanation: 'Ngày 21/12/1873, Gác-ni-ê bị phục kích và tiêu diệt tại trận địa Cầu Giấy, làm rung chuyển tinh thần quân xâm lược Pháp.'
      },
      {
        question: 'Bản hiệp ước bất bình đẳng nào năm 1884 do triều đình nhà Nguyễn ký đã chấm dứt hoàn toàn sự độc lập của nước Đại Nam?',
        options: ['Hiệp ước Pa-tơ-nốt (Patenôtre - 1884)', 'Hiệp ước Nhâm Tuất (1862)', 'Hiệp ước Giáp Tuất (1874)', 'Hiệp ước Genève (1954)'],
        answerIndex: 0,
        hint: 'Hiệp ước áp đặt quyền bảo hộ của thực dân Pháp lên toàn bộ lãnh thổ Việt Nam.',
        explanation: 'Hiệp ước Pa-tơ-nốt (6/6/1884) chính thức biến Việt Nam từ một quốc gia phong kiến độc lập thành nước thuộc địa nửa phong kiến.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-hisgeo-final',
    title: 'Lịch sử & Địa lí 8 - Đề Kiểm Tra Cuối Học Kỳ 1 (Lịch sử Thế giới Cận đại & Địa lý Tự nhiên Việt Nam)',
    titleEn: 'History & Geography 8 - Semester 1 Final Examination (Comprehensive)',
    grade: 8,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối kỳ 1: Các cuộc cách mạng tư sản, phong trào công nhân quốc tế, địa hình, khoáng sản, khí hậu và thủy văn sông ngòi Việt Nam.',
    descriptionEn: 'Semester 1 comprehensive exam: World modern revolutions, natural resources, climate and hydrology of Vietnam.',
    questions: [
      {
        question: 'Hệ thống sông nào có diện tích lưu vực và chiều dài lớn nhất chảy hoàn toàn trên lãnh thổ Việt Nam?',
        options: ['Hệ thống sông Hồng', 'Hệ thống sông Đồng Nai', 'Hệ thống sông Cả (Lam)', 'Hệ thống sông Mã'],
        answerIndex: 0,
        hint: 'Đồng bằng Bắc Bộ được bồi đắp bởi phù sa sông này.',
        explanation: 'Hệ thống sông Hồng là mạng lưới sông lớn nhất miền Bắc với lượng phù sa bồi đắp màu mỡ hàng năm.'
      },
      {
        question: 'Tại sao sông ngòi nước ta lại có đặc điểm thủy văn là mạng lưới dày đặc nhưng phần lớn là sông ngắn, dốc và nhiều thác ghềnh?',
        options: ['Do lãnh thổ hẹp ngang, địa hình đồi núi lan sát ra biển và khí hậu mưa nhiều quanh năm', 'Do đất đai chỉ toàn là cát xốp', 'Do không có mưa', 'Do nhân dân đào đắp nhân tạo'],
        answerIndex: 0,
        hint: 'Hình dáng lãnh thổ cong chữ S hẹp ngang và địa thế dốc ra biển.',
        explanation: 'Lãnh thổ hẹp bề ngang kết hợp các dải núi áp sát bờ biển khiến sông ngòi chảy dốc, ngắn và lưu lượng dòng chảy biến động theo mùa mưa bão.'
      },
      {
        question: 'Cuộc khởi nghĩa Yên Thế (1884 - 1913) do vị thủ lĩnh kiệt xuất nào lãnh đạo kéo dài gần 30 năm chống thực dân Pháp?',
        options: ['Hoàng Hoa Thám (Đề Thám)', 'Phan Đình Phùng', 'Nguyễn Thiện Thuật', 'Đinh Công Tráng'],
        answerIndex: 0,
        hint: '"Hùm xám Yên Thế" với căn cứ Phồn Xương lừng lẫy.',
        explanation: 'Hoàng Hoa Thám lãnh đạo nông dân Yên Thế kiên cường đánh bại nhiều cuộc càn quét đẫm máu của thực dân Pháp suốt 3 thập kỷ.'
      },
      {
        question: 'Mục đích cơ bản nhất của phong trào Cần Vương (1885 - 1896) do vua Hàm Nghi và Tôn Thất Thuyết phát động là gì?',
        options: ['Giúp vua cứu nước, đánh đuổi thực dân Pháp xâm lược và khôi phục nền độc lập phong kiến', 'Đầu hàng để xin chia chức tước triều đình', 'Bảo vệ quyền lợi cho thương nhân Pháp', 'Di dân sang các nước phương Tây'],
        answerIndex: 0,
        hint: '"Cần Vương" nghĩa là phò vua giúp nước.',
        explanation: 'Chiếu Cần Vương kêu gọi văn thân, sĩ phu và toàn thể nhân dân đứng lên phò vua kháng chiến diệt giặc cứu nước.'
      },
      {
        question: 'Đất FERALIT hình thành trên đá bazan và đá vôi ở vùng đồi núi nước ta thích hợp nhất để trồng nhóm cây nào?',
        options: ['Cây công nghiệp lâu năm (cà phê, cao su, chè, hồ tiêu) và cây ăn quả', 'Chỉ cấy lúa nước ngập mặn', 'Cây sú vẹt ven biển', 'Chỉ trồng rêu và địa y'],
        answerIndex: 0,
        hint: 'Cây công nghiệp mũi nhọn của Tây Nguyên và Đông Nam Bộ.',
        explanation: 'Đất feralit giàu dinh dưỡng, tầng phong hóa dày là điều kiện lý tưởng phát triển vùng chuyên canh cây công nghiệp nhiệt đới.'
      },
      {
        question: 'Biển Đông có ý nghĩa chiến lược sống còn đối với sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam như thế nào?',
        options: ['Tuyến đường hàng hải quốc tế huyết mạch, nguồn tài nguyên sinh vật - khoáng sản trù phú và lá chắn an ninh quốc phòng', 'Chỉ là nơi chứa nước mưa', 'Không có giá trị kinh tế đáng kể', 'Chỉ dùng để đi lại vào mùa hè'],
        answerIndex: 0,
        hint: 'Chủ quyền biển đảo thiêng liêng Hoàng Sa và Trường Sa.',
        explanation: 'Biển Đông mở lối giao thương toàn cầu, giàu trữ lượng dầu khí - hải sản và là không gian phòng thủ an ninh thiêng liêng của Tổ quốc.'
      }
    ]
  },

  // =========================================================================
  // GRADE 8 - LỊCH SỬ VÀ ĐỊA LÝ 8 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g8-s2-hisgeo-reg1',
    title: 'Lịch sử & Địa lí 8 - Kiểm tra Thường xuyên 1: Khởi nghĩa Hương Khê & Thổ nhưỡng Việt Nam',
    titleEn: 'History & Geography 8 - Regular Assessment 1: Huong Khe Uprising & Vietnam Soil Types',
    grade: 8,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Đỉnh cao phong trào Cần Vương (Khởi nghĩa Hương Khê do Phan Đình Phùng lãnh đạo) và ba nhóm đất chính tại Việt Nam.',
    descriptionEn: 'The Huong Khe revolt under Phan Dinh Phung and soil classification in Vietnam.',
    questions: [
      {
        question: 'Khởi nghĩa Hương Khê (1885 - 1896) được coi là cuộc khởi nghĩa tiêu biểu và đỉnh cao nhất trong phong trào Cần Vương vì lý do nào?',
        options: ['Quy mô rộng lớn trên 4 tỉnh, tổ chức quân đội quy củ chặt chẽ và tự chế tạo được súng trường theo mẫu của Pháp', 'Thời gian diễn ra ngắn nhất', 'Chỉ có 100 nghĩa quân tham gia', 'Chỉ đánh du kích ở 1 ngôi làng nhỏ'],
        answerIndex: 0,
        hint: 'Phan Đình Phùng và Cao Thắng đã chế tạo thành công súng trường kiểu Pháp.',
        explanation: 'Nghĩa quân Hương Khê có tổ chức kỷ luật cao, địa bàn lan rộng khắp Hà Tĩnh, Quảng Bình, Nghệ An, Thanh Hóa và tự rèn đúc vũ khí hiện đại.'
      },
      {
        question: 'Nhóm đất chiếm diện tích lớn nhất (trên 65% diện tích tự nhiên) ở nước ta là nhóm đất nào?',
        options: ['Nhóm đất feralit đồi núi', 'Nhóm đất phù sa đồng bằng', 'Nhóm đất cát pha ven biển', 'Nhóm đất than bùn lầy'],
        answerIndex: 0,
        hint: 'Đất hình thành ở vùng đồi núi nhiệt đới ẩm có màu đỏ vàng.',
        explanation: 'Đất feralit chiếm hơn 65% diện tích đất tự nhiên, phân bố rộng khắp các vùng đồi núi thấp từ Bắc vào Nam.'
      },
      {
        question: 'Đất PHÙ SA màu mỡ ở đồng bằng sông Hồng và đồng bằng sông Cửu Long là địa bàn lý tưởng nhất để trồng trọt cây trồng nào?',
        options: ['Lúa nước và các loại hoa màu lương thực, thực phẩm ngắn ngày', 'Cây cao su lấy mủ', 'Cây thông tuyết vùng lạnh', 'Cây cà phê chè'],
        answerIndex: 0,
        hint: 'Hai vựa lúa lớn nhất bảo đảm an ninh lương thực quốc gia.',
        explanation: 'Đất phù sa sông màu mỡ, bằng phẳng, nước tưới dồi dào là cái nôi sản xuất lúa gạo truyền thống nuôi sống hàng chục triệu dân.'
      },
      {
        question: 'Vị kỹ sư thiên tài của nghĩa quân Hương Khê đã nghiên cứu tháo lắp và chế tạo súng trường thành công là ai?',
        options: ['Cao Thắng', 'Phan Đình Phùng', 'Nguyễn Tri Phương', 'Trương Định'],
        answerIndex: 0,
        hint: 'Tướng trẻ tài ba dưới quyền Phan Đình Phùng.',
        explanation: 'Cao Thắng chỉ huy rèn đúc vũ khí, chế tạo hàng trăm khẩu súng trường kiểu mới cho nghĩa quân đánh đuổi quân Pháp.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-hisgeo-reg2',
    title: 'Lịch sử & Địa lí 8 - Kiểm tra Thường xuyên 2: Phong trào Cải cách Duy Tân & Sinh vật Việt Nam',
    titleEn: 'History & Geography 8 - Regular Assessment 2: Reformist Trends & Biodiversity in Vietnam',
    grade: 8,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Tư tưởng cải cách canh tân đất nước cuối thế kỷ XIX (Nguyễn Trường Tộ) và tính đa dạng sinh học cao của hệ sinh thái Việt Nam.',
    descriptionEn: 'Modernizing reform petitions by Nguyen Truong To and rich flora/fauna biomes in Vietnam.',
    questions: [
      {
        question: 'Nhà canh tân yêu nước kiệt xuất nào vào nửa cuối thế kỷ XIX đã dâng lên vua Tự Đức hàng chục bản điều trần xin cải cách đất nước trên mọi lĩnh vực?',
        options: ['Nguyễn Trường Tộ', 'Phan Thanh Giản', 'Trần Hưng Đạo', 'Lê Lợi'],
        answerIndex: 0,
        hint: 'Người con của xứ Nghệ từng đi sang phương Tây học hỏi kỹ thuật hiện đại.',
        explanation: 'Nguyễn Trường Tộ đã gửi các bản điều trần tâm huyết đề nghị triều đình mở cửa ngoại giao, canh tân quân sự, phát triển công thương nghiệp.'
      },
      {
        question: 'Hệ sinh thái rừng nguyên sinh nhiệt đới ẩm lá rộng thường xanh ở nước ta có đặc trưng nổi bật nào?',
        options: ['Cấu trúc rừng nhiều tầng tán (4-5 tầng), đa dạng sinh học vô cùng phong phú và nhiều loài động thực vật quý hiếm', 'Chỉ có duy nhất một loài cây thông', 'Toàn bộ cây rụng lá trơ trụi quanh năm', 'Không có bất kỳ loài chim thú nào sinh sống'],
        answerIndex: 0,
        hint: 'Rừng nhiệt đới rậm rạp tầng tầng lớp lớp.',
        explanation: 'Rừng mưa nhiệt đới Việt Nam có cấu trúc đa tầng, phong phú về chủng loài sinh vật bậc nhất thế giới (rừng Cúc Phương, Cát Tiên, Bạch Mã).'
      },
      {
        question: 'Tại sao các đề nghị cải cách canh tân đất nước cuối thế kỷ XIX ở Việt Nam đều không thể thực hiện được hoặc nửa vời thất bại?',
        options: ['Do triều đình phong kiến nhà Nguyễn bảo thủ, trì trệ, ôm giữ tư tưởng "bế quan tỏa cảng" hẹp hòi', 'Do đất nước ta có quá nhiều tiền vàng không cần cải cách', 'Do nhân dân phản đối kịch liệt việc phát triển kinh tế', 'Do các đề nghị đó hoàn toàn vô nghĩa không có giá trị'],
        answerIndex: 0,
        hint: 'Sự thiển cận và sợ mất quyền lợi của vua quan phong kiến.',
        explanation: 'Triều đình Tự Đức khép kín, bảo thủ và bất lực trước thời cuộc, bỏ lỡ cơ hội tự cường cứu vãn nền độc lập dân tộc.'
      },
      {
        question: 'Vườn quốc gia nào của Việt Nam được UNESCO công nhận là Di sản Thiên nhiên Thế giới với cảnh quan địa mạo karst độc đáo?',
        options: ['Vườn quốc gia Phong Nha - Kẻ Bàng (Quảng Bình)', 'Vườn quốc gia Ba Vì', 'Vườn quốc gia Tràm Chim', 'Vườn quốc gia Côn Đảo'],
        answerIndex: 0,
        hint: 'Kỳ quan hang động Sơn Đoòng, động Phong Nha.',
        explanation: 'Phong Nha - Kẻ Bàng nổi tiếng thế giới về hệ thống hang động đá vôi cổ xưa cùng hệ sinh thái rừng nguyên sinh trên núi đá vôi.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-hisgeo-reg3',
    title: 'Lịch sử & Địa lí 8 - Kiểm tra Thường xuyên 3: Chiến tranh Thế giới thứ nhất & Biển đảo Việt Nam',
    titleEn: 'History & Geography 8 - Regular Assessment 3: World War I & Maritime Islands of Vietnam',
    grade: 8,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Chiến tranh thế giới thứ nhất (1914 - 1918) và phạm vi lãnh hải, vùng đặc quyền kinh tế, thềm lục địa biển Việt Nam.',
    descriptionEn: 'The causes and outcomes of WWI, and jurisdictional zones of Vietnam maritime sovereignty.',
    questions: [
      {
        question: 'Nguyên nhân sâu xa dẫn tới sự bùng nổ của Chiến tranh thế giới thứ nhất (1914 - 1918) là gì?',
        options: ['Mâu thuẫn sâu sắc giữa các đế quốc về vấn đề thị trường và thuộc địa trên phạm vi toàn cầu', 'Do cuộc chạy đua phóng tàu vũ trụ lên sao Hỏa', 'Do sự bùng phát của dịch bệnh truyền nhiễm toàn cầu', 'Do tranh chấp một hòn đảo nhỏ vô danh'],
        answerIndex: 0,
        hint: 'Quy luật phát triển không đều của chủ nghĩa đế quốc đòi chia lại thế giới.',
        explanation: 'Sự phát triển không đều về kinh tế và thuộc địa giữa phe Liên minh và phe Hiệp ước dẫn đến cuộc chiến tranh đế quốc phi nghĩa xâu xé thuộc địa.'
      },
      {
        question: 'Theo Công ước Luật Biển quốc tế năm 1982 (UNCLOS) và Luật Biển Việt Nam, chiều rộng LÃNH HẢI của nước ta là bao nhiêu hải lý?',
        options: ['12 hải lý tính từ đường cơ sở', '200 hải lý tính từ bờ biển', '3 hải lý', '50 hải lý'],
        answerIndex: 0,
        hint: 'Lãnh hải là vùng biển chủ quyền thiêng liêng như lãnh thổ đất liền.',
        explanation: 'Lãnh hải có chiều rộng 12 hải lý tính từ đường cơ sở ra phía biển, thuộc chủ quyền hoàn toàn và tuyệt đối của quốc gia.'
      },
      {
        question: 'Vùng ĐẶC QUYỀN KINH TẾ (EEZ) của nước ta tiếp liền với lãnh hải và có chiều rộng tối đa là bao nhiêu hải lý?',
        options: ['200 hải lý tính từ đường cơ sở', '12 hải lý', '24 hải lý', '500 hải lý'],
        answerIndex: 0,
        hint: 'Quyền chủ quyền thăm dò khai thác tài nguyên sinh vật và khoáng sản.',
        explanation: 'Vùng đặc quyền kinh tế hợp với lãnh hải thành vùng biển rộng 200 hải lý tính từ đường cơ sở theo UNCLOS 1982.'
      },
      {
        question: 'Hậu quả tàn khốc lớn nhất của Chiến tranh thế giới thứ nhất đối với nhân loại là gì?',
        options: ['Khoảng 10 triệu người chết, 20 triệu người bị thương, kinh tế châu Âu bị tàn phá kiệt quệ', 'Nền hòa bình vĩnh cửu được thiết lập trên toàn Trái Đất', 'Tất cả các nước đế quốc đều tự nguyện từ bỏ vũ khí', 'Xóa bỏ hoàn toàn chế độ chiếm hữu tư nhân'],
        answerIndex: 0,
        hint: 'Tổn thất sinh mạng và của cải khổng lồ trong lịch sử chiến tranh cận đại.',
        explanation: 'Chiến tranh làm hàng chục triệu người thương vong và gây ra những hậu quả kinh tế xã hội nặng nề cho các nước châu Âu.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-hisgeo-reg4',
    title: 'Lịch sử & Địa lí 8 - Kiểm tra Thường xuyên 4: Cách mạng Tháng Mười Nga (1917) & Bảo vệ Môi trường Biển đảo',
    titleEn: 'History & Geography 8 - Regular Assessment 4: Russian October Revolution & Ocean Conservation',
    grade: 8,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Ý nghĩa lịch sử toàn cầu của Cách mạng tháng Mười Nga 1917 và các giải pháp cấp bách bảo vệ môi trường biển đảo nước ta.',
    descriptionEn: 'The 1917 Russian Revolution under Lenin and conservation strategies for marine ecosystems.',
    questions: [
      {
        question: 'Thắng lợi của Cách mạng tháng Mười Nga năm 1917 do V.I. Lênin và Đảng Bôn-sê-vích lãnh đạo có ý nghĩa lịch sử vĩ đại thế nào?',
        options: ['Đập tan ách thống trị của giai cấp phong kiến tư sản, mở ra kỷ nguyên mới - kỷ nguyên quá độ lên chủ nghĩa xã hội trên phạm vi toàn cầu', 'Khôi phục lại chế độ Nga hoàng độc tài chuyên chế', 'Biến nước Nga thành thuộc địa của nước Anh', 'Chấm dứt hoàn toàn sự phát triển của công nghệ'],
        answerIndex: 0,
        hint: 'Sự kiện làm "rung chuyển thế giới" năm 1917.',
        explanation: 'Cách mạng tháng Mười mở ra con đường giải phóng cho các dân tộc bị áp bức thuộc địa, cổ vũ phong trào cách mạng thế giới.'
      },
      {
        question: 'Hai quần đảo san hô xa bờ có vị trí phòng thủ chiến lược thiêng liêng bậc nhất trên Biển Đông thuộc chủ quyền lịch sử của Việt Nam là:',
        options: ['Quần đảo Hoàng Sa và Quần đảo Trường Sa', 'Quần đảo Cô Tô và Cát Bà', 'Quần đảo Phú Quốc và Thổ Chu', 'Quần đảo Nam Du và Côn Đảo'],
        answerIndex: 0,
        hint: 'Nhà nước phong kiến Việt Nam từ thời chúa Nguyễn đã xác lập chủ quyền liên tục đối với hai quần đảo này.',
        explanation: 'Hoàng Sa (thuộc TP Đà Nẵng) và Trường Sa (thuộc tỉnh Khánh Hòa) là một phần máu thịt thiêng liêng không thể tách rời của Tổ quốc Việt Nam.'
      },
      {
        question: 'Hiện tượng ô nhiễm "thủy triều đỏ" ở một số vùng biển nước ta thường bắt nguồn từ nguyên nhân sinh thái nào?',
        options: ['Sự bùng nổ quá mức của các loài vi tảo biển độc hại do nguồn nước thải chứa nhiều chất hữu cơ (phú dưỡng hóa)', 'Do bùn đỏ từ các mỏ sắt tràn ra biển', 'Do nước biển quá sạch và lạnh', 'Do cá biển đẻ quá nhiều trứng'],
        answerIndex: 0,
        hint: 'Nước xả thải dư thừa đạm và phốt pho nuôi tảo độc phát triển đột biến.',
        explanation: 'Tảo độc nở hoa bùng phát tiêu thụ hết oxy trong nước và tiết độc tố làm chết hàng loạt thủy hải sản, gây ngộ độc cho người.'
      },
      {
        question: 'Hành vi đánh bắt thủy hải sản nào sau đây bị pháp luật Việt Nam và quốc tế nghiêm cấm tuyệt đối vì tính chất hủy diệt sinh thái biển?',
        options: ['Dùng thuốc nổ, xung điện và hóa chất cực độc để đánh bắt', 'Dùng cần câu đơn lẻ ven bờ', 'Nuôi trồng trai cấy ngọc nhân tạo', 'Đánh bắt bằng lồng bẫy truyền thống'],
        answerIndex: 0,
        hint: 'Cách đánh bắt phá hủy hoàn toàn rạn san hô và quét sạch con non.',
        explanation: 'Thuốc nổ và xung điện phá hủy rạn san hô vĩnh viễn, hủy diệt môi trường sinh sản của các loài thủy sinh.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-hisgeo-final',
    title: 'Lịch sử & Địa lí 8 - Đề Kiểm Tra Cuối Học Kỳ 2 (Đề Tổng Hợp Đánh Giá Toàn Diện Lớp 8)',
    titleEn: 'History & Geography 8 - Semester 2 Final Examination (Comprehensive)',
    grade: 8,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm học: Phong trào Cần Vương, cải cách duy tân, chiến tranh thế giới thứ nhất, thổ nhưỡng, sinh vật và chủ quyền biển đảo Việt Nam.',
    descriptionEn: 'End-of-year examination: Patriotic movements, modernizing reforms, soils, ecosystems, and maritime territory.',
    questions: [
      {
        question: 'Văn kiện pháp lý lịch sử nào khẳng định các đội hùng binh Hoàng Sa của các chúa Nguyễn hàng năm đi thuyền ra đo đạc hải trình và cắm mốc chủ quyền?',
        options: ['Phủ biên tạp lục của Lê Quý Đôn và Đại Nam thực lục của Quốc sử quán triều Nguyễn', 'Bản đồ du lịch thế giới hiện đại', 'Hiệp ước thương mại giữa Pháp và Anh', 'Các câu chuyện ngụ ngôn dân gian'],
        answerIndex: 0,
        hint: 'Châu bản triều Nguyễn và các bộ chính sử quốc gia.',
        explanation: 'Châu bản triều Nguyễn ghi lại đầy đủ các chiếu chỉ, lệnh cử hải đội Hoàng Sa kiêm quản Trường Sa thực thi chủ quyền liên tục, hòa bình từ nhiều thế kỷ.'
      },
      {
        question: 'Biện pháp công trình và phi công trình quan trọng nhất để phòng chống thoái hóa xói mòn đất vùng đồi núi nước ta là gì?',
        options: ['Trồng rừng phòng hộ đầu nguồn, làm ruộng bậc thang và áp dụng biện pháp nông - lâm kết hợp', 'Chặt phá toàn bộ cây rừng để lấy củi đốt', 'Đào xới các sườn núi dốc vào mùa mưa lũ', 'Xây dựng nhà máy hóa chất trên đỉnh núi cao'],
        answerIndex: 0,
        hint: 'Giữ lớp phủ thực vật để giữ nước giữ đất chống sạt lở.',
        explanation: 'Trồng cây gây rừng và canh tác theo đường đồng mức, ruộng bậc thang giúp bảo vệ tầng đất mặt khỏi bị nước mưa rửa trôi.'
      },
      {
        question: 'Đặc điểm nào sau đây thể hiện tính chất đa dạng cao của sinh vật nước ta?',
        options: ['Đa dạng về thành phần loài, đa dạng về gen di truyền và đa dạng về các hệ sinh thái', 'Chỉ có đúng 10 loài chim sinh sống', 'Toàn bộ thực vật đều giống hệt nhau', 'Không có loài sinh vật đặc hữu nào'],
        answerIndex: 0,
        hint: 'Ba cấp độ đa dạng sinh học quốc tế.',
        explanation: 'Việt Nam được xếp vào một trong 16 quốc gia có tính đa dạng sinh học cao nhất thế giới với nhiều loài đặc hữu quý hiếm.'
      },
      {
        question: 'Nguyên nhân trực tiếp nào châm ngòi làm bùng nổ Chiến tranh thế giới thứ nhất vào tháng 6/1914?',
        options: ['Vụ ám sát Thái tử Áo - Hung Phéc-đi-nan tại thành phố Xa-ra-ye-vô (Bosnia)', 'Quân Đức bất ngờ tấn công sang biên giới nước Nga', 'Cuộc bầu cử Tổng thống tại Hoa Kỳ', 'Vụ chìm tàu biển Titanic'],
        answerIndex: 0,
        hint: 'Tiếng súng Xa-ra-ye-vô châm ngòi cho thùng thuốc súng châu Âu.',
        explanation: 'Vụ ám sát Thái tử Áo - Hung ngày 28/6/1914 là cái cớ trực tiếp để phe Liên minh và phe Hiệp ước chính thức khai chiến.'
      },
      {
        question: 'Khí hậu nước ta có sự phân hóa đa dạng thành các miền khí hậu nào sau đây?',
        options: ['Miền khí hậu phía Bắc (có mùa đông lạnh) và miền khí hậu phía Nam (cận xích đạo, nóng quanh năm với hai mùa mưa - khô)', 'Khí hậu cực hàn quanh năm băng tuyết', 'Khí hậu hoang mạc xích đạo không có giọt mưa nào', 'Chỉ có duy nhất một mùa thu dịu mát quanh năm'],
        answerIndex: 0,
        hint: 'Bức chắn địa hình dãy Bạch Mã làm ranh giới khí hậu Bắc - Nam.',
        explanation: 'Dãy Bạch Mã ngăn bớt gió mùa đông bắc, tạo nên sự phân hóa rõ rệt: phía Bắc có mùa đông lạnh, phía Nam có khí hậu cận xích đạo nóng quanh năm.'
      },
      {
        question: 'Ý thức trách nhiệm cao nhất của thế hệ trẻ học sinh đối với sự nghiệp bảo vệ chủ quyền biển đảo Tổ quốc là gì?',
        options: ['Học tập rèn luyện tốt, tìm hiểu lịch sử chủ quyền và tích cực tuyên truyền các bằng chứng pháp lý của Việt Nam', 'Không cần quan tâm đến các vấn đề biên giới biển đảo', 'Chia sẻ các thông tin sai lệch xuyên tạc trên mạng', 'Trốn tránh trách nhiệm công dân'],
        answerIndex: 0,
        hint: 'Trách nhiệm thiêng liêng của thế hệ công dân tương lai.',
        explanation: 'Thế hệ trẻ cần bồi dưỡng lòng yêu nước, nắm vững căn cứ lịch sử - luật pháp quốc tế và sẵn sàng đóng góp công sức xây dựng và bảo vệ hải cương Tổ quốc.'
      }
    ]
  },

  // =========================================================================
  // GRADE 8 - TIN HỌC 8 - SEMESTER 1
  // =========================================================================
  {
    id: 'quiz-g8-s1-it-reg1',
    title: 'Tin học 8 - Kiểm tra Thường xuyên 1: Lịch sử Phát triển Máy tính & Dữ liệu Kỹ thuật số',
    titleEn: 'Informatics 8 - Regular Assessment 1: Computer History & Digital Representation',
    grade: 8,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Năm thế hệ máy tính điện tử, mạch tích hợp bán dẫn (IC, VLSI) và biểu diễn thông tin dạng nhị phân trong máy tính.',
    descriptionEn: 'Five computing generations, semiconductor chips, and binary data bits.',
    questions: [
      {
        question: 'Thế hệ máy tính đầu tiên (1945 - 1955) sử dụng linh kiện điện tử cơ bản nào sau đây?',
        options: ['Đèn điện tử chân không (Vacuum tubes)', 'Bóng bán dẫn (Transistor)', 'Mạch tích hợp IC', 'Bộ vi xử lý cực lớn VLSI'],
        answerIndex: 0,
        hint: 'Linh kiện bóng thủy tinh phát sáng tỏa nhiệt rất nhiều và có kích thước khổng lồ.',
        explanation: 'Thế hệ máy tính thứ nhất dùng đèn điện tử chân không, tiêu thụ lượng điện lớn và máy có kích thước chiếm cả căn phòng (như ENIAC).'
      },
      {
        question: 'Đơn vị đo dung lượng thông tin nhỏ nhất trong máy tính điện tử là gì?',
        options: ['Bit (nhận giá trị 0 hoặc 1)', 'Byte (8 bit)', 'Kilobyte (KB)', 'Megabyte (MB)'],
        answerIndex: 0,
        hint: 'Binary digit = bit.',
        explanation: 'Bit là đơn vị lưu trữ dữ liệu nhị phân cơ bản nhất trong kiến trúc máy tính.'
      },
      {
        question: '1 Gigabyte (1 GB) tương đương với bao nhiêu Megabyte (MB) theo chuẩn tính toán máy tính?',
        options: ['1024 MB', '1000 MB', '512 MB', '2048 MB'],
        answerIndex: 0,
        hint: 'Lũy thừa của 2: 2¹⁰ = 1024.',
        explanation: 'Theo chuẩn nhị phân máy tính, 1 GB = 1024 MB = 1024 x 1024 KB.'
      },
      {
        question: 'Thiết bị nào sau đây là THIẾT BỊ VÀO (Input Device) đưa dữ liệu từ bên ngoài vào máy tính xử lý?',
        options: ['Bàn phím, chuột máy tính và máy quét (Scanner)', 'Màn hình máy tính', 'Máy in màu laser', 'Loa và tai nghe âm thanh'],
        answerIndex: 0,
        hint: 'Thiết bị dùng để nhập liệu văn bản, bấm click hoặc scan hình ảnh.',
        explanation: 'Bàn phím, chuột và máy quét là các thiết bị vào (input), còn màn hình và máy in là thiết bị ra (output).'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-it-reg2',
    title: 'Tin học 8 - Kiểm tra Thường xuyên 2: An toàn Thông tin & Ứng xử trên Không gian Mạng',
    titleEn: 'Informatics 8 - Regular Assessment 2: Cyber Safety & Digital Etiquette',
    grade: 8,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Bảo vệ tài khoản cá nhân, mật khẩu mạnh 2 lớp, nhận diện lừa đảo giả mạo (phishing) và tôn trọng bản quyền số.',
    descriptionEn: 'Cybersecurity principles, multi-factor authentication, phishing scams, and copyright.',
    questions: [
      {
        question: 'Mật khẩu nào sau đây được đánh giá là MẬT KHẨU MẠNH và có độ an toàn bảo mật cao nhất?',
        options: ['Tr@nHuNgD@o_2024!$', '12345678', 'password', 'nguyenvana'],
        answerIndex: 0,
        hint: 'Kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt có độ dài trên 8 ký tự.',
        explanation: 'Mật khẩu mạnh phải dài trên 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt, không liên quan đến thông tin cá nhân dễ đoán.'
      },
      {
        question: 'Hình thức lừa đảo trực tuyến "Phishing" hoạt động bằng thủ đoạn nào sau đây?',
        options: ['Gửi email, tin nhắn mạo danh ngân hàng hoặc cơ quan chức năng dẫn tới liên kết giả mạo nhằm đánh cắp mật khẩu và mã OTP', 'Tự động gửi hoa tặng người dùng', 'Sửa chữa phần cứng máy tính miễn phí', 'Tăng tốc độ mạng internet lên gấp 10 lần'],
        answerIndex: 0,
        hint: 'Giả mạo giao diện ngân hàng để lừa nhập thông tin bí mật.',
        explanation: 'Phishing là hình thức tấn công giả mạo tổ chức uy tín để dụ người dùng cung cấp thông tin nhạy cảm như số thẻ tín dụng hay mật khẩu.'
      },
      {
        question: 'Hành vi nào sau đây VI PHẠM nghiêm trọng luật bản quyền và sở hữu trí tuệ số?',
        options: ['Tải phần mềm có bản quyền bị bẻ khóa (crack) từ trang web lậu và chia sẻ phát tán công khai', 'Mua ứng dụng chính hãng trên App Store', 'Sử dụng phần mềm mã nguồn mở miễn phí GNU/GPL', 'Ghi rõ nguồn tác giả khi trích dẫn bài nghiên cứu'],
        answerIndex: 0,
        hint: 'Hành vi dùng đồ sao chép trái phép không trả phí bản quyền cho tác giả.',
        explanation: 'Sử dụng và phát tán phần mềm bẻ khóa vi phạm bản quyền tác giả và dễ khiến máy tính bị cài mã độc, virus tống tiền.'
      },
      {
        question: 'Khi phát hiện một bạn cùng lớp bị bạo lực mạng (cyberbullying), xúc phạm danh dự trên mạng xã hội, hành động đúng đắn là gì?',
        options: ['Lưu lại bằng chứng (chụp màn hình), không hùa theo công kích và báo ngay cho thầy cô, cha mẹ can thiệp', 'Tham gia viết bình luận nhục mạ cùng với đám đông', 'Chia sẻ bài viết bôi nhọ để nhiều người xem hơn', 'Giữ im lặng và cổ vũ hành vi bắt nạt'],
        answerIndex: 0,
        hint: 'Dũng cảm đứng lên bảo vệ nạn nhân và báo cho người lớn xử lý.',
        explanation: 'Lưu bằng chứng và thông báo kịp thời cho nhà trường, phụ huynh là biện pháp chuẩn mực để ngăn chặn bạo lực học đường trên mạng.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-it-reg3',
    title: 'Tin học 8 - Kiểm tra Thường xuyên 3: Phần mềm Bảng tính Điện tử Nâng cao (Hàm IF, SUMIF, COUNTIF)',
    titleEn: 'Informatics 8 - Regular Assessment 3: Advanced Spreadsheets (IF, SUMIF, COUNTIF)',
    grade: 8,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Sử dụng hàm logic IF, tính tổng có điều kiện SUMIF, đếm có điều kiện COUNTIF và địa chỉ ô tuyệt đối ($A$1).',
    descriptionEn: 'Conditional formulas IF, SUMIF, COUNTIF, and absolute cell references.',
    questions: [
      {
        question: 'Cú pháp chuẩn của hàm điều kiện IF trong phần mềm bảng tính Excel là gì?',
        options: ['=IF(Điều_kiện, Giá_trị_nếu_đúng, Giá_trị_nếu_sai)', '=IF(Giá_trị_đúng, Giá_trị_sai, Điều_kiện)', '=IF(Điều_kiện1, Điều_kiện2)', '=IF(SUM, COUNT, AVERAGE)'],
        answerIndex: 0,
        hint: 'Kiểm tra biểu thức logic -> trả về nhánh True hoặc nhánh False.',
        explanation: 'Cú pháp của hàm IF: =IF(logical_test, value_if_true, value_if_false).'
      },
      {
        question: 'Trong Excel, để cố định một ô tính (ví dụ ô A1) không bị thay đổi khi sao chép công thức, ta nhấn phím gì hoặc dùng ký hiệu nào?',
        options: ['Dùng ký hiệu $ (ví dụ $A$1) hoặc nhấn phím F4', 'Dùng dấu sao (*)', 'Dùng dấu thăng (#)', 'Dùng dấu ngoặc vuông ([])'],
        answerIndex: 0,
        hint: 'Địa chỉ tuyệt đối dùng ký tự đô-la $ trước tên cột và chỉ số dòng.',
        explanation: 'Địa chỉ tuyệt đối sử dụng ký hiệu $ (ví dụ $A$1) được tạo nhanh bằng phím chức năng F4.'
      },
      {
        question: 'Công thức nào sau đây đếm số lượng học sinh có điểm trung bình (ở cột D từ D2 đến D50) lớn hơn hoặc bằng 8.0?',
        options: ['=COUNTIF(D2:D50, ">=8.0")', '=SUMIF(D2:D50, ">=8.0")', '=COUNT(D2:D50)', '=IF(D2:D50 >= 8.0, 1, 0)'],
        answerIndex: 0,
        hint: 'Hàm đếm thỏa mãn tiêu chí: COUNTIF(vùng_dữ_liệu, điều_kiện).',
        explanation: '=COUNTIF(D2:D50, ">=8.0") đếm số ô thỏa mãn tiêu chuẩn điểm từ 8.0 trở lên.'
      },
      {
        question: 'Kết quả của công thức =IF(7 > 5, "Đúng", "Sai") hiển thị trên màn hình là gì?',
        options: ['Đúng', 'Sai', '#VALUE!', '0'],
        answerIndex: 0,
        hint: 'Vì 7 luôn lớn hơn 5 nên điều kiện mang giá trị True.',
        explanation: 'Biểu thức 7 > 5 là đúng, do đó hàm IF trả về nhánh giá trị_nếu_đúng là "Đúng".'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-it-reg4',
    title: 'Tin học 8 - Kiểm tra Thường xuyên 4: Sắp xếp, Lọc Dữ liệu & Trực quan hóa Biểu đồ',
    titleEn: 'Informatics 8 - Regular Assessment 4: Data Sorting, Filtering & Chart Visualization',
    grade: 8,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Thao tác Sort A-Z/Z-A, AutoFilter dữ liệu và tạo biểu đồ cột (Column Chart), biểu đồ hình tròn (Pie Chart).',
    descriptionEn: 'Multi-level sorting, automated filters, and creating column/pie charts for presentation.',
    questions: [
      {
        question: 'Dạng biểu đồ nào trong bảng tính Excel là lựa chọn tối ưu nhất để mô tả TỶ TRỌNG PHẦN TRĂM của các thành phần trong một tổng thể?',
        options: ['Biểu đồ hình tròn (Pie Chart)', 'Biểu đồ đường gấp khúc (Line Chart)', 'Biểu đồ phân tán (Scatter Chart)', 'Biểu đồ radar'],
        answerIndex: 0,
        hint: 'Biểu đồ tròn chia thành các lát quạt thể hiện cơ cấu phần trăm.',
        explanation: 'Pie Chart biểu diễn cơ cấu tỷ trọng phần trăm trực quan nhất (tổng toàn bộ hình tròn bằng 100%).'
      },
      {
        question: 'Để lọc các dòng dữ liệu thỏa mãn một tiêu chí nhất định trong bảng dữ liệu Excel, ta vào dải lệnh Data và bấm nút lệnh nào?',
        options: ['Filter (biểu tượng hình cái phễu)', 'Wrap Text', 'Merge & Center', 'Conditional Formatting'],
        answerIndex: 0,
        hint: 'Biểu tượng hình chiếc phễu lọc dữ liệu.',
        explanation: 'Nút lệnh Filter trong thẻ Data cho phép tạo các nút mũi tên lọc dữ liệu tự động theo điều kiện.'
      },
      {
        question: 'Khi sắp xếp cột điểm số theo thứ tự GIẢM DẦN (từ điểm cao nhất xuống thấp nhất), ta chọn kiểu sắp xếp nào?',
        options: ['Sort Largest to Smallest (hoặc Sort Z to A)', 'Sort Smallest to Largest (Sort A to Z)', 'Sort Randomly', 'Clear Sort'],
        answerIndex: 0,
        hint: 'Sắp xếp từ lớn đến bé: Largest to Smallest.',
        explanation: 'Lựa chọn "Sort Largest to Smallest" sắp xếp các giá trị số theo chiều giảm dần từ lớn tới bé.'
      },
      {
        question: 'Để thay đổi tiêu đề biểu đồ (Chart Title) sau khi đã vẽ xong, ta thực hiện thao tác nào?',
        options: ['Nhấp đúp chuột trực tiếp vào khung Chart Title và gõ nội dung mới', 'Phải xóa toàn bộ biểu đồ đi vẽ lại từ đầu', 'Tắt phần mềm máy tính', 'Bấm phím Delete trên bàn phím'],
        answerIndex: 0,
        hint: 'Chỉnh sửa trực tiếp trên hộp văn bản tiêu đề biểu đồ.',
        explanation: 'Nhấp đúp chuột vào khung tiêu đề biểu đồ cho phép gõ hoặc chỉnh sửa văn bản tiêu đề dễ dàng.'
      }
    ]
  },
  {
    id: 'quiz-g8-s1-it-final',
    title: 'Tin học 8 - Đề Kiểm Tra Cuối Học Kỳ 1 (Bảng tính Điện tử, Xử lý Số liệu & An toàn Không gian mạng)',
    titleEn: 'Informatics 8 - Semester 1 Final Examination (Comprehensive)',
    grade: 8,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối kỳ 1: Kiến trúc máy tính, an toàn an ninh mạng, các hàm thống kê logic trong bảng tính và trực quan hóa số liệu.',
    descriptionEn: 'End of Semester 1 comprehensive test: Computer architecture, cyber safety, nested logic formulas, data visualization.',
    questions: [
      {
        question: 'Trong bảng tính Excel, công thức =SUMIF(C2:C20, "Nam", E2:E20) có ý nghĩa thực tế là gì?',
        options: ['Tính tổng giá trị các ô ở cột E với điều kiện ô tương ứng ở cột C có giá trị là "Nam"', 'Đếm xem có bao nhiêu người tên là "Nam"', 'Tính điểm trung bình của tất cả học sinh', 'Sắp xếp danh sách theo giới tính'],
        answerIndex: 0,
        hint: 'Cú pháp SUMIF: SUMIF(vùng_điều_kiện, điều_kiện, vùng_tính_tổng).',
        explanation: 'Hàm SUMIF kiểm tra vùng C2:C20, nếu ô nào bằng "Nam" thì lấy giá trị tương ứng ở cột E2:E20 để cộng dồn vào tổng.'
      },
      {
        question: 'Biện pháp xác thực 2 yếu tố (2FA - Two-Factor Authentication) bảo vệ tài khoản người dùng như thế nào?',
        options: ['Ngoài mật khẩu chính, hệ thống yêu cầu thêm một mã số xác thực dùng một lần (OTP) gửi qua điện thoại hoặc ứng dụng', 'Bắt buộc người dùng phải gõ mật khẩu 2 lần liên tiếp giống nhau', 'Chia mật khẩu làm 2 nửa lưu ở 2 máy tính khác nhau', 'Tự động đổi mật khẩu sau mỗi 5 phút'],
        answerIndex: 0,
        hint: 'Mật khẩu + mã OTP sinh ra theo thời gian thực.',
        explanation: '2FA bảo vệ tài khoản ngay cả khi mật khẩu bị lộ vì kẻ xấu không có thiết bị nhận mã OTP bảo mật thứ hai.'
      },
      {
        question: 'Khi sao chép công thức chứa địa chỉ tương đối =A2*B2 từ ô C2 xuống ô C3, công thức tại ô C3 sẽ tự động chuyển thành:',
        options: ['=A3*B3', '=$A$2*$B$2', '=A2*B2', '=A4*B4'],
        answerIndex: 0,
        hint: 'Địa chỉ tương đối tăng dần chỉ số hàng khi kéo xuống dòng tiếp theo.',
        explanation: 'Địa chỉ tương đối tự động tịnh tiến theo hướng sao chép: dòng 2 tăng lên dòng 3 thành =A3*B3.'
      },
      {
        question: 'Công cụ nào sau đây cho phép tạo bài trình chiếu trực tuyến chuyên nghiệp và có thể cộng tác theo thời gian thực?',
        options: ['Google Slides hoặc Microsoft PowerPoint Online', 'Notepad đơn thuần', 'Paint vẽ tranh', 'Calculator'],
        answerIndex: 0,
        hint: 'Ứng dụng trình chiếu cộng tác qua đám mây của Google / Microsoft.',
        explanation: 'Google Slides và PowerPoint Online cho phép nhiều người cùng chỉnh sửa một tệp slide trình chiếu đồng thời qua mạng.'
      },
      {
        question: 'Biểu thức nào sau đây kiểm tra xem giá trị ô A1 có nằm trong khoảng từ 10 đến 50 (bao gồm cả 10 và 50) hay không?',
        options: ['=AND(A1>=10, A1<=50)', '=OR(A1>=10, A1<=50)', '=IF(10<=A1<=50)', '=10 <= A1 <= 50'],
        answerIndex: 0,
        hint: 'Trong Excel dùng hàm AND(điều_kiện1, điều_kiện2) để kiểm tra cả 2 điều kiện đồng thời đúng.',
        explanation: 'Hàm AND kết hợp hai mệnh đề so sánh: =AND(A1>=10, A1<=50).'
      },
      {
        question: 'Để phòng tránh lây nhiễm virus và mã độc tống tiền (Ransomware) vào máy tính, thói quen an toàn quan trọng nhất là gì?',
        options: ['Thường xuyên cập nhật hệ điều hành, cài phần mềm diệt virus bản quyền và không mở các tệp đính kèm lạ không rõ nguồn gốc', 'Tắt hoàn toàn tường lửa Windows Defender', 'Tải mọi file miễn phí trên các trang web chia sẻ không rõ nguồn gốc', 'Không bao giờ sao lưu dữ liệu quan trọng'],
        answerIndex: 0,
        hint: 'Cập nhật bản vá bảo mật và cảnh giác với tệp tin lạ.',
        explanation: 'Bảo mật máy tính đòi hỏi cập nhật phần mềm thường xuyên, bật tường lửa và tuyệt đối không tải file đáng ngờ từ internet.'
      }
    ]
  },

  // =========================================================================
  // GRADE 8 - TIN HỌC 8 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g8-s2-it-reg1',
    title: 'Tin học 8 - Kiểm tra Thường xuyên 1: Thuật toán & Tư duy Lập trình Cơ bản',
    titleEn: 'Informatics 8 - Regular Assessment 1: Algorithm Design & Programming Basics',
    grade: 8,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Khái niệm thuật toán, cấu trúc tuần tự, rẽ nhánh, lặp và biểu diễn thuật toán bằng sơ đồ khối.',
    descriptionEn: 'Algorithm concepts, flowchart symbols, sequence, selection, and iteration constructs.',
    questions: [
      {
        question: 'Trong sơ đồ khối (Flowchart) mô tả thuật toán, hình nào được quy ước dùng để biểu diễn THAO TÁC KIỂM TRA ĐIỀU KIỆN (rẽ nhánh)?',
        options: ['Hình thoi', 'Hình chữ nhật', 'Hình ô van (elip)', 'Hình tròn'],
        answerIndex: 0,
        hint: 'Hình có một đường vào và hai đường ra (Đúng / Sai).',
        explanation: 'Hình thoi dùng để kiểm tra điều kiện rẽ nhánh (Yes/No), hình chữ nhật thể hiện phép xử lý tính toán, hình elip là bắt đầu/kết thúc.'
      },
      {
        question: 'Thuật toán giải quyết một bài toán cần phải thỏa mãn các tính chất cơ bản nào sau đây?',
        options: ['Tính xác định, tính dừng (hữu hạn) và tính đúng đắn (kết quả chính xác)', 'Tính vô tận không bao giờ kết thúc', 'Tính mơ hồ tùy ý hiểu thế nào cũng được', 'Chỉ chạy được vào ban đêm'],
        answerIndex: 0,
        hint: 'Thuật toán phải rõ ràng từng bước, có hồi kết và cho kết quả đúng.',
        explanation: 'Ba tính chất nền tảng của thuật toán là tính xác định, tính dừng và tính đúng đắn.'
      },
      {
        question: 'Cấu trúc điều khiển nào trong lập trình lặp đi lặp lại một khối lệnh cho đến khi thỏa mãn một điều kiện dừng?',
        options: ['Cấu trúc lặp (Loop)', 'Cấu trúc tuần tự', 'Cấu trúc rẽ nhánh đơn', 'Cấu trúc nhảy cóc ngẫu nhiên'],
        answerIndex: 0,
        hint: 'Lặp lại nhiều lần (vòng lặp for, while).',
        explanation: 'Cấu trúc lặp thực hiện công việc lặp đi lặp lại với số lần biết trước hoặc lặp với điều kiện.'
      },
      {
        question: 'Biến nhớ (Variable) trong ngôn ngữ lập trình là gì?',
        options: ['Một vùng trong bộ nhớ máy tính được đặt tên dùng để lưu trữ giá trị dữ liệu và giá trị này có thể thay đổi trong khi chương trình chạy', 'Một hằng số không bao giờ thay đổi', 'Một chiếc đĩa cứng ngoài', 'Một đoạn dây nối màn hình'],
        answerIndex: 0,
        hint: 'Vùng nhớ có tên để lưu dữ liệu biến thiên.',
        explanation: 'Biến là đại lượng được đặt tên để lưu trữ dữ liệu, giá trị của biến có thể được gán hoặc thay đổi qua các câu lệnh.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-it-reg2',
    title: 'Tin học 8 - Kiểm tra Thường xuyên 2: Lập trình Trực quan Scratch / Python - Biến số & Rẽ nhánh',
    titleEn: 'Informatics 8 - Regular Assessment 2: Visual Coding / Python - Variables & Conditionals',
    grade: 8,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Tạo biến số, nhập xuất dữ liệu, cấu trúc if - else trong môi trường lập trình trực quan Scratch hoặc Python cơ bản.',
    descriptionEn: 'Variable creation, input/output, and if-else logic in block coding or Python.',
    questions: [
      {
        question: 'Trong ngôn ngữ lập trình Python, lệnh nào sau đây dùng để IN KẾT QUẢ hoặc thông báo ra màn hình?',
        options: ['print()', 'input()', 'scan()', 'output()'],
        answerIndex: 0,
        hint: 'Hàm in tiêu chuẩn trong Python: print("Xin chào!").',
        explanation: 'Hàm print() trong Python có chức năng xuất dữ liệu ra màn hình console.'
      },
      {
        question: 'Đoạn mã Python sau: x = 15; if x % 2 == 0: print("Chẵn") else: print("Lẻ") sẽ in ra kết quả gì?',
        options: ['Lẻ', 'Chẵn', '15', 'Lỗi cú pháp'],
        answerIndex: 0,
        hint: '15 chia 2 dư 1 (khác 0) nên rơi vào nhánh else.',
        explanation: 'Phép chia lấy phần dư 15 % 2 = 1. Vì 1 != 0 nên điều kiện False, chương trình thực thi nhánh else in ra "Lẻ".'
      },
      {
        question: 'Trong môi trường lập trình khối Scratch, nhóm khối lệnh màu CAM mang tên "Variables" (Các biến số) dùng để làm gì?',
        options: ['Tạo mới biến số, gán giá trị và thay đổi giá trị của biến', 'Thay đổi màu sắc nhân vật', 'Phát ra âm thanh tiếng đàn', 'Vẽ các đường tròn'],
        answerIndex: 0,
        hint: 'Nhóm lệnh liên quan đến lưu trữ số điểm, thời gian, sinh mạng.',
        explanation: 'Khối lệnh Variables trong Scratch cho phép lập trình viên tạo biến (Make a Variable) và thay đổi giá trị của nó.'
      },
      {
        question: 'Trong Scratch, khối lệnh nào sau đây dùng để lặp lại một hành động đúng 10 lần?',
        options: ['repeat (10)', 'forever', 'if on edge, bounce', 'wait (10) secs'],
        answerIndex: 0,
        hint: 'Khối lặp xác định số lần: repeat ...',
        explanation: 'Khối lệnh "repeat (10)" thực thi tất cả các câu lệnh bên trong nó lặp lại đúng 10 lượt.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-it-reg3',
    title: 'Tin học 8 - Kiểm tra Thường xuyên 3: Vòng lặp For / While & Thuật toán Tìm kiếm Cơ bản',
    titleEn: 'Informatics 8 - Regular Assessment 3: Loops & Linear Search Algorithm',
    grade: 8,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Vòng lặp xác định for, lặp không xác định while, thuật toán tìm kiếm tuần tự (Linear Search) trên danh sách.',
    descriptionEn: 'For/while iterations and linear sequential searching algorithms.',
    questions: [
      {
        question: 'Thuật toán TÌM KIẾM TUẦN TỰ (Linear Search) trên một danh sách n phần tử hoạt động theo nguyên lý nào?',
        options: ['Lần lượt so sánh giá trị cần tìm với từng phần tử của danh sách từ đầu đến cuối cho đến khi tìm thấy hoặc hết danh sách', 'Chỉ nhìn vào phần tử ở chính giữa danh sách', 'Sắp xếp danh sách rồi xóa hết các phần tử', 'Đoán ngẫu nhiên một vị trí'],
        answerIndex: 0,
        hint: 'Kiểm tra tuần tự từng phần tử một từ vị trí 1 đến vị trí n.',
        explanation: 'Tìm kiếm tuần tự duyệt qua từng phần tử theo thứ tự tuyến tính để so sánh với khóa tìm kiếm.'
      },
      {
        question: 'Đoạn mã Python: for i in range(1, 5): print(i, end=" ") sẽ in ra màn hình dãy số nào?',
        options: ['1 2 3 4', '1 2 3 4 5', '0 1 2 3 4', '5 4 3 2 1'],
        answerIndex: 0,
        hint: 'Hàm range(start, stop) chạy từ start đến stop - 1.',
        explanation: 'range(1, 5) sinh ra các số nguyên từ 1 đến 4 (dừng trước 5), do đó in ra "1 2 3 4".'
      },
      {
        question: 'Vòng lặp WHILE trong lập trình sẽ DỪNG LẠI khi nào?',
        options: ['Khi điều kiện lặp trở thành SAI (False)', 'Khi điều kiện lặp luôn luôn ĐÚNG (True)', 'Khi máy tính bị mất điện', 'Sau đúng 1 giây bất kể điều kiện'],
        answerIndex: 0,
        hint: 'While điều_kiện lặp: chạy chừng nào điều kiện còn True, dừng khi False.',
        explanation: 'Vòng lặp while tiếp tục lặp khi biểu thức điều kiện còn True và lập tức kết thúc khi điều kiện thành False.'
      },
      {
        question: 'Hiện tượng "vòng lặp vô tận" (Infinite Loop) xảy ra do lỗi logic nào của lập trình viên?',
        options: ['Điều kiện dừng không bao giờ xảy ra (luôn luôn True) khiến chương trình không thể thoát khỏi vòng lặp', 'Do viết sai chữ hoa chữ thường', 'Do máy tính không có màn hình', 'Do quên cắm chuột máy tính'],
        answerIndex: 0,
        hint: 'Vòng lặp không có cơ chế thay đổi biến điều kiện để đạt tới điểm dừng.',
        explanation: 'Nếu giá trị của biến điều kiện không được cập nhật bên trong vòng lặp dẫn tới điều kiện luôn đúng, chương trình sẽ rơi vào vòng lặp vô tận làm treo ứng dụng.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-it-reg4',
    title: 'Tin học 8 - Kiểm tra Thường xuyên 4: Hướng nghiệp Tin học & Nghề nghiệp Kỷ nguyên Số',
    titleEn: 'Informatics 8 - Regular Assessment 4: Careers in the Digital Era & IT Ethics',
    grade: 8,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Các ngành nghề ứng dụng CNTT (Kỹ sư phần mềm, An ninh mạng, Phân tích dữ liệu, Thiết kế đồ họa) và đạo đức nghề nghiệp.',
    descriptionEn: 'IT careers, digital skills, software engineering, cybersecurity specialist, and tech ethics.',
    questions: [
      {
        question: 'Chuyên gia phụ trách bảo vệ mạng máy tính, ngăn chặn tin tặc tấn công và đảm bảo bí mật dữ liệu của tổ chức là nghề nghiệp nào?',
        options: ['Chuyên viên An toàn thông tin / An ninh mạng (Cybersecurity Specialist)', 'Thợ sửa điện gia dụng', 'Nhân viên kế toán', 'Người làm vườn cảnh quan'],
        answerIndex: 0,
        hint: 'Nghề chuyên về an ninh mạng bảo vệ hệ thống trước hacker.',
        explanation: 'Chuyên gia an ninh mạng chịu trách nhiệm kiểm thử lỗ hổng, xây dựng tường lửa và bảo vệ dữ liệu chống tấn công mạng.'
      },
      {
        question: 'Kỹ năng số (Digital Skills) nào sau đây là thiết yếu cho học sinh trong kỷ nguyên trí tuệ nhân tạo (AI)?',
        options: ['Tư duy phản biện, kỹ năng tìm kiếm và thẩm định thông tin chuẩn xác, tư duy giải quyết vấn đề bằng công nghệ', 'Học thuộc lòng hàng nghìn trang danh bạ điện thoại', 'Chơi game 14 tiếng một ngày', 'Tin tưởng tuyệt đối 100% mọi bài đăng trên mạng xã hội'],
        answerIndex: 0,
        hint: 'Kỹ năng đánh giá chọn lọc thông tin và ứng dụng công nghệ hiệu quả.',
        explanation: 'Trong kỷ nguyên số, kỹ năng phản biện, tra cứu xác thực và tư duy logic là năng lực cốt lõi giúp học sinh làm chủ công nghệ.'
      },
      {
        question: 'Một lập trình viên phát triển phần mềm có đạo đức nghề nghiệp (Code of Ethics) sẽ hành xử như thế nào?',
        options: ['Viết phần mềm tôn trọng quyền riêng tư của người dùng, không bí mật cài mã độc đánh cắp thông tin cá nhân', 'Lén chèn virus vào sản phẩm để tống tiền khách hàng', 'Đánh cắp mã nguồn của công ty đem bán ra chợ đen', 'Cố tình tạo ra lỗi phần mềm để đòi thêm tiền sửa chữa'],
        answerIndex: 0,
        hint: 'Đạo đức nghề nghiệp đòi hỏi sự trung thực và tôn trọng sự an toàn của người dùng.',
        explanation: 'Lập trình viên chân chính luôn bảo đảm tính an toàn, minh bạch và tôn trọng quyền riêng tư của người sử dụng.'
      },
      {
        question: 'Ngành nghề "Phân tích dữ liệu" (Data Analyst) tập trung vào công việc chính nào?',
        options: ['Thu thập, xử lý và trực quan hóa số liệu để giúp doanh nghiệp ra quyết định đúng đắn', 'Vận chuyển máy vi tính đi giao hàng', 'Vẽ tranh sơn dầu trên vải', 'Đánh máy văn bản hộ người khác'],
        answerIndex: 0,
        hint: 'Phân tích số liệu và biểu đồ để tìm ra xu hướng kinh doanh.',
        explanation: 'Chuyên viên phân tích dữ liệu biến các số liệu thô thành thông tin hữu ích hỗ trợ các quyết định kinh doanh chiến lược.'
      }
    ]
  },
  {
    id: 'quiz-g8-s2-it-final',
    title: 'Tin học 8 - Đề Kiểm Tra Cuối Học Kỳ 2 (Đề Tổng Hợp Đánh Giá Toàn Diện Kỹ Năng Số & Lập Trình Lớp 8)',
    titleEn: 'Informatics 8 - Semester 2 Final Examination (Year-End Evaluation)',
    grade: 8,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm lớp 8: Tư duy thuật toán, cấu trúc rẽ nhánh & lặp, thuật toán sắp xếp tìm kiếm, kỹ năng bảng tính và an toàn số.',
    descriptionEn: 'End-of-year comprehensive exam: Algorithm design, loop logic, linear search, advanced spreadsheet mastery, digital citizenship.',
    questions: [
      {
        question: 'Cho mảng gồm 5 số: [12, 45, 7, 23, 9]. Để tìm giá trị LỚN NHẤT (Max), thuật toán khởi tạo biến max = 12 và lần lượt so sánh với các phần tử còn lại. Kết quả max là:',
        options: ['45', '12', '23', '7'],
        answerIndex: 0,
        hint: 'Giá trị cực đại trong 5 số đã cho.',
        explanation: 'So sánh lần lượt: max=12; gặp 45 > 12 -> max=45; các số 7, 23, 9 đều nhỏ hơn 45 nên kết quả cuối cùng max = 45.'
      },
      {
        question: 'Đoạn mã Python sau: s = 0; for i in range(1, 4): s = s + i; print(s) sẽ cho kết quả là bao nhiêu?',
        options: ['6', '10', '3', '0'],
        answerIndex: 0,
        hint: 'Tổng s = 1 + 2 + 3 = 6.',
        explanation: 'Vòng lặp chạy i từ 1, 2, 3. s tích lũy: s = 0 + 1 + 2 + 3 = 6.'
      },
      {
        question: 'Để kiểm tra một số nguyên N có phải là SỐ NGUYÊN TỐ hay không, thuật toán cần kiểm tra điều gì?',
        options: ['N > 1 và N không chia hết cho bất kỳ số nguyên nào từ 2 đến căn bậc hai của N', 'N là một số chẵn', 'N chia hết cho số 3', 'N tận cùng bằng chữ số 5'],
        answerIndex: 0,
        hint: 'Số nguyên tố chỉ có đúng hai ước là 1 và chính nó.',
        explanation: 'Số nguyên tố lớn hơn 1 và không có ước số nào khác ngoài 1 và chính nó.'
      },
      {
        question: 'Khi sử dụng các công cụ trí tuệ nhân tạo (như AI Chatbot) để hỗ trợ học tập, học sinh cần có thái độ nào đúng đắn nhất?',
        options: ['Sử dụng AI như một trợ lý gợi ý ý tưởng, phải tự mình kiểm chứng độ chính xác và không được sao chép nguyên văn để nộp bài làm của mình', 'Sao chép 100% nội dung AI viết nộp cho thầy cô mà không cần đọc lại', 'Tin tưởng tuyệt đối rằng AI không bao giờ trả lời sai', 'Cấm hoàn toàn không bao giờ được chạm vào công nghệ'],
        answerIndex: 0,
        hint: 'Dùng AI có trách nhiệm và liêm chính học thuật.',
        explanation: 'AI là công cụ hỗ trợ tư duy, học sinh phải duy trì tính liêm chính học thuật, tự suy nghĩ phản biện và kiểm chứng kiến thức.'
      },
      {
        question: 'Thuật toán SẮP XẾP NỔI BỌT (Bubble Sort) đưa phần tử lớn nhất về cuối danh sách bằng thao tác nào?',
        options: ['Lần lượt so sánh hai phần tử liền kề nhau và đổi chỗ nếu chúng đứng sai thứ tự', 'Đổi chỗ ngẫu nhiên hai phần tử bất kỳ', 'Xóa bỏ tất cả các số nhỏ hơn', 'Đảo ngược danh sách ngay lập tức'],
        answerIndex: 0,
        hint: 'So sánh từng cặp số kề nhau và hoán đổi như bọt khí nổi lên mặt nước.',
        explanation: 'Bubble sort liên tục so sánh các cặp phần tử liền kề và tráo đổi vị trí cho nhau nếu phần tử trước lớn hơn phần tử sau.'
      },
      {
        question: 'Mục đích tối thượng của việc học môn Tin học trong chương trình giáo dục phổ thông GDPT 2018 là gì?',
        options: ['Hình thành năng lực số (Digital Literacy), tư duy thuật toán và khả năng thích ứng linh hoạt trong kỷ nguyên số', 'Chỉ để học gõ 10 ngón thật nhanh', 'Để trở thành game thủ chuyên nghiệp', 'Chỉ để thi trắc nghiệm lấy điểm số'],
        answerIndex: 0,
        hint: 'Phát triển năng lực tin học và thích ứng với thời đại 4.0.',
        explanation: 'Tin học giúp trang bị cho thế hệ trẻ tư duy logic, năng lực giải quyết vấn đề và kỹ năng làm chủ công nghệ phục vụ đời sống và nghề nghiệp tương lai.'
      }
    ]
  }
];
