import { CurriculumPDF } from './curriculumData';

/**
 * Authoritative Curriculum Review Study PDFs for Grade 6 (Lớp 6)
 * Aligned with Ministry of Education Textbooks: "Kết nối tri thức với cuộc sống"
 * Available on https://giaokhoaonline.com/ket-noi-tri-thuc-voi-cuoc-song-lop-6/
 * Covers ALL 8 compulsory subjects across both Semester 1 and Semester 2.
 */
export const GRADE_6_PDFS: CurriculumPDF[] = [
  // =========================================================================
  // SEMESTER 1 (HỌC KỲ 1) - ALL 8 SUBJECTS
  // =========================================================================

  // 1. TOÁN HỌC 6 - HỌC KỲ 1
  {
    id: 'pdf-g6-s1-math-full',
    title: 'Sổ tay Trọng tâm Toán 6 (Tập 1) - Số học & Hình học trực quan',
    titleEn: 'Math 6 Handbook (Sem 1) - Natural Numbers, Integers Z & Geometry',
    grade: 6,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 28,
    fileSize: '4.8 MB',
    description: 'Tổng hợp toàn bộ kiến thức SGK Kết nối tri thức Toán 6 Tập 1: Tập hợp các số tự nhiên ℕ, lũy thừa, dấu hiệu chia hết (2, 3, 5, 9), số nguyên tố, ƯCLN & BCNN, tập số nguyên ℤ, tam giác đều, lục giác đều.',
    descriptionEn: 'Complete Semester 1 Math guide: Sets N, powers, divisibility, primes, GCD/LCM, integer arithmetic, and regular polygons.',
    author: 'Tổ Toán THCS - Bộ SGK Kết nối tri thức với cuộc sống',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_Toan6_Tap1_KetNoiTriThuc_TongHop.pdf',
    sections: [
      {
        title: 'Chương I & II: Số tự nhiên ℕ & Tính chia hết',
        content: 'Tập hợp các số tự nhiên ℕ = {0, 1, 2, 3, ...}; ℕ* = {1, 2, 3, ...}. Thứ tự thực hiện phép tính: trong ngoặc ( ) → [ ] → { }; ngoài ngoặc: lũy thừa → nhân chia → cộng trừ.',
        formulas: [
          'Nhân hai lũy thừa cùng cơ số: aᵐ × aⁿ = aᵐ⁺ⁿ',
          'Chia hai lũy thừa cùng cơ số: aᵐ : aⁿ = aᵐ⁻ⁿ (a ≠ 0, m ≥ n)',
          'Dấu hiệu chia hết: Cho 2 & 5: chữ số tận cùng là 0, 2, 4, 6, 8 (chia hết cho 2) hoặc 0, 5 (chia hết cho 5)',
          'Cho 3 & 9: tổng các chữ số chia hết cho 3 (hoặc 9)',
          'ƯCLN(a, b): Tích các thừa số nguyên tố chung với số mũ nhỏ nhất',
          'BCNN(a, b): Tích các thừa số nguyên tố chung và riêng với số mũ lớn nhất'
        ],
        keyPoints: [
          'Số 0 và số 1 không phải là số nguyên tố và cũng không phải là hợp số.',
          'Số nguyên tố chẵn duy nhất là số 2.'
        ],
        exampleProblem: {
          problem: 'Tìm ƯCLN và BCNN của hai số 24 và 36.',
          solution: '24 = 2³ × 3; 36 = 2² × 3². ƯCLN(24, 36) = 2² × 3 = 12. BCNN(24, 36) = 2³ × 3² = 8 × 9 = 72.'
        }
      },
      {
        title: 'Chương III: Tập hợp các số nguyên ℤ',
        content: 'Tập hợp ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}. Số nguyên âm dùng chỉ độ cao dưới mực nước biển, nhiệt độ dưới 0°C, số tiền nợ.',
        formulas: [
          'Cộng hai số nguyên cùng dấu âm: (-a) + (-b) = -(a + b)',
          'Quy tắc bỏ dấu ngoặc: -(a - b + c) = -a + b - c; +(a - b + c) = a - b + c',
          'Nhân hai số cùng dấu: (+a) × (+b) = +(a × b); (-a) × (-b) = +(a × b)',
          'Nhân hai số khác dấu: (-a) × (+b) = -(a × b)'
        ],
        keyPoints: [
          'Tích của một số chẵn các thừa số nguyên âm là số dương; tích của một số lẻ các thừa số nguyên âm là số âm.'
        ]
      },
      {
        title: 'Chương IV & V: Một số hình phẳng & Tính đối xứng',
        content: 'Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng 60°. Hình vuông có 4 cạnh bằng nhau, 4 góc vuông. Lục giác đều có 6 cạnh bằng nhau, 6 góc bằng nhau và ghép từ 6 tam giác đều.',
        formulas: [
          'Chu vi tam giác đều cạnh a: C = 3a',
          'Chu vi lục giác đều cạnh a: C = 6a',
          'Chu vi hình chữ nhật: C = 2(a + b); Diện tích S = a × b',
          'Diện tích hình vuông: S = a²; Chu vi C = 4a',
          'Diện tích hình thoi có hai đường chéo d₁, d₂: S = (d₁ × d₂) / 2'
        ],
        keyPoints: [
          'Hình lục giác đều có 6 trục đối xứng và 1 tâm đối xứng.',
          'Hình thang cân có 1 trục đối xứng, không có tâm đối xứng.'
        ]
      }
    ]
  },

  // 2. NGỮ VĂN 6 - HỌC KỲ 1
  {
    id: 'pdf-g6-s1-literature-full',
    title: 'Cẩm nang Đọc hiểu & Viết văn 6 (Tập 1) - Kết nối tri thức',
    titleEn: 'Literature 6 Study Guide (Sem 1) - Stories, Poems & Grammar',
    grade: 6,
    semester: 1,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    pageCount: 26,
    fileSize: '4.5 MB',
    description: 'Hệ thống tri thức Ngữ văn 6 Tập 1: Bài 1 "Tôi và các bạn" (Dế Mèn phiêu lưu ký), Bài 2 "Gõ cửa trái tim" (Chuyện cổ tích về loài người, Mây và sóng), Bài 3 "Yêu thương và chia sẻ" (Cô bé bán diêm, Gió lạnh đầu mùa), Bài 4 "Quê hương yêu dấu" (Thơ lục bát), Biện pháp tu từ so sánh, ẩn dụ, nhân hóa.',
    descriptionEn: 'Sem 1 Literature guide: Stories, poems, Luc Bat verse, metaphors, allegories, and essay writing.',
    author: 'Nhóm Tác giả Ngữ văn 6 - NXB Giáo dục Việt Nam',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_NguVan6_Tap1_KetNoiTriThuc_CamNang.pdf',
    sections: [
      {
        title: 'Bài 1 & 2: Truyện đồng thoại & Thơ trữ tình',
        content: 'Truyện đồng thoại là thể loại truyện viết cho thiếu nhi nhân hóa các loài vật, đồ vật có lời nói, tâm tư của con người nhưng vẫn giữ đặc tính tự nhiên (Dế Mèn phiêu lưu ký - Tô Hoài). Thơ tự do diễn tả tình mẫu tử thiêng liêng (Mây và sóng - Tagore) và tình thương bao la với trẻ em (Chuyện cổ tích về loài người - Xuân Quỳnh).',
        keyPoints: [
          'Bài học từ Dế Mèn: Thói kiêu căng, ngạo mạn, vô ý thức trêu chọc người khác sẽ gây ra hậu quả khôn lường cho chính mình và người xung quanh.',
          'Bí mật của Cáo (Hoàng tử bé): "Chỉ có trái tim mới thấy rõ ràng, điều cốt lõi vô hình trong mắt trần", khẳng định tình bạn cần sự gắn kết và tinh thần trách nhiệm.'
        ]
      },
      {
        title: 'Bài 4: Thể thơ lục bát truyền thống & Tiếng Việt',
        content: 'Thể thơ lục bát gồm các cặp câu 6 tiếng (câu lục) và 8 tiếng (câu bát). Luật gieo vần: Tiếng thứ 6 câu lục bắt vần với tiếng thứ 6 câu bát; tiếng thứ 8 câu bát bắt vần với tiếng thứ 6 câu lục tiếp theo. Luật bằng trắc: Các tiếng chẵn 2 - 4 - 6 - 8 tuân thủ Bằng - Trắc - Bằng - Bằng; các tiếng lẻ 1 - 3 - 5 - 7 tự do.',
        formulas: [
          'Mô hình vần: Lục (2-B, 4-T, 6-B₁) → Bát (2-B, 4-T, 6-B₁, 8-B₂)',
          'Biện pháp tu từ So sánh: Vế A + Từ so sánh (như, là, tựa...) + Vế B',
          'Biện pháp tu từ Ẩn dụ: Gọi tên sự vật hiện tượng A bằng sự vật B dựa trên nét tương đồng ngầm'
        ],
        exampleProblem: {
          problem: 'Phân tích tác dụng của biện pháp ẩn dụ trong câu thơ: "Ngày ngày mặt trời đi qua trên lăng / Thấy một mặt trời trong lăng rất đỏ" (Viếng lăng Bác - Viễn Phương).',
          solution: '"Mặt trời trong lăng" là ẩn dụ ca ngợi Bác Hồ. Bác như vầng thái dương tỏa ánh sáng ấm áp giải phóng dân tộc và soi đường cho cách mạng Việt Nam.'
        }
      }
    ]
  },

  // 3. KHOA HỌC TỰ NHIÊN 6 - HỌC KỲ 1
  {
    id: 'pdf-g6-s1-science-full',
    title: 'Cẩm nang Ôn tập KHTN 6 (Học kỳ 1) - Chất & Tế bào sống',
    titleEn: 'Natural Science 6 Guide (Sem 1) - Measurement, Matter & Cell',
    grade: 6,
    semester: 1,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    pageCount: 30,
    fileSize: '5.2 MB',
    description: 'Tài liệu chi tiết SGK KHTN 6 HK1: Phương pháp đo chiều dài, khối lượng, thời gian, nhiệt độ; các thể của chất (rắn, lỏng, khí); oxygen và không khí sạch; phương pháp tách chất (lọc, cô cạn, chiết); cấu tạo và chức năng tế bào nhân sơ và nhân thực.',
    descriptionEn: 'Sem 1 Science guide: Units of measurement, states of matter, oxygen, separation techniques, and cell biology.',
    author: 'Hội đồng Khoa học Tự nhiên THCS - Viện Khoa học Giáo dục',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_KHTN6_HocKy1_Chat_TeBao_SoTay.pdf',
    sections: [
      {
        title: 'Chương 1: Các phép đo cơ bản trong KHTN',
        content: 'Đo chiều dài (thước kẻ, thước cuộn - đơn vị mét m); Đo khối lượng (cân đồng hồ, cân điện tử - đơn vị kilôgam kg); Đo thời gian (đồng hồ bấm giây - đơn vị giây s); Đo nhiệt độ (nhiệt kế - đơn vị độ Celsius °C). Khi đọc kết quả cần đặt mắt vuông góc với vạch chia.',
        formulas: [
          'Đổi đơn vị độ dài: 1 m = 100 cm = 1000 mm; 1 km = 1000 m',
          'Đổi đơn vị khối lượng: 1 tấn = 1000 kg; 1 kg = 1000 g'
        ],
        keyPoints: [
          'Giới hạn đo (GHĐ) là độ dài lớn nhất ghi trên dụng cụ.',
          'Độ chia nhỏ nhất (ĐCNN) là độ dài giữa hai vạch chia liên tiếp trên dụng cụ.'
        ]
      },
      {
        title: 'Chương 2 & 3: Chất, Oxy và Không khí',
        content: 'Chất tồn tại ở 3 thể: rắn (hình dạng và thể tích xác định), lỏng (thể tích xác định, hình dạng phụ thuộc bình chứa), khí (không có hình dạng và thể tích xác định, chiếm toàn bộ bình). Không khí sạch gồm: 78% Nitrogen, 21% Oxygen, 1% Carbon dioxide và khí khác.',
        keyPoints: [
          'Oxygen duy trì sự thở và sự cháy, ít tan trong nước, không màu, không mùi.',
          'Tách chất: Lọc (tách chất rắn không tan ra khỏi chất lỏng), Cô cạn (tách chất rắn tan ra khỏi dung dịch), Chiết (tách hai chất lỏng không hòa tan vào nhau).'
        ]
      },
      {
        title: 'Chương 4: Tế bào - Đơn vị cơ sở của sự sống',
        content: 'Mọi sinh vật đều được cấu tạo từ tế bào. Cấu tạo cơ bản: Màng sinh chất (bao bọc, kiểm soát chất ra vào), Tế bào chất (nơi diễn ra các hoạt động sống), Nhân hoặc Vùng nhân (chứa vật chất di truyền ADN).',
        formulas: [
          'Tế bào nhân sơ: Chưa có màng nhân (vi khuẩn)',
          'Tế bào nhân thực: Đã có màng nhân hoàn chỉnh (nấm, thực vật, động vật)',
          'Tế bào thực vật có thêm: Thành tế bào (xenlulozơ) và Lục lạp (quang hợp)'
        ],
        keyPoints: [
          'Quang hợp ở thực vật: Nước + Carbon dioxide + Ánh sáng mặt trời (nhờ diệp lục) → Glucose + Oxygen.'
        ]
      }
    ]
  },

  // 4. LỊCH SỬ & ĐỊA LÍ 6 - HỌC KỲ 1
  {
    id: 'pdf-g6-s1-history-geo-full',
    title: 'Sổ tay Lịch sử & Địa lí 6 (HK1) - Văn minh cổ đại & Hệ thống Trái Đất',
    titleEn: 'History & Geography 6 Guide (Sem 1) - Ancient Worlds & Earth Maps',
    grade: 6,
    semester: 1,
    subject: 'Lịch sử & Địa lí',
    subjectVi: 'Lịch sử & Địa lí',
    subjectEn: 'History & Geography',
    category: 'social',
    pageCount: 26,
    fileSize: '4.6 MB',
    description: 'Tổng hợp kiến thức SGK Lịch sử & Địa lí 6 HK1: Quá trình tiến hóa loài người, văn minh Ai Cập, Lưỡng Hà, Ấn Độ, Trung Quốc cổ đại, Nhà nước Văn Lang; hệ thống kinh vĩ tuyến, tỉ lệ bản đồ, chuyển động tự quay quanh trục và quay quanh Mặt Trời của Trái Đất.',
    descriptionEn: 'Sem 1 History & Geography: Human evolution, ancient river civilizations, map scales, latitude/longitude, planetary rotation.',
    author: 'Nhóm Tác giả Lịch sử - Địa lí THCS - NXB Giáo dục',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_LichSuDiaLi6_HocKy1_TongOn.pdf',
    sections: [
      {
        title: 'Phần Lịch sử: Xã hội nguyên thủy & Các nền văn minh phương Đông',
        content: 'Vượn người (6-5 triệu năm trước) → Người tối cổ (4 triệu năm trước, biết dùng lửa) → Người tinh khôn (150.000 năm trước). Văn minh Ai Cập gắn liền sông Nin (Kim tự tháp, chữ tượng hình); Văn minh Lưỡng Hà sông Tigris - Euphrates (chữ hình nêm, vườn treo Babylon); Văn Lang ra đời thế kỉ VII TCN do Vua Hùng đứng đầu.',
        keyPoints: [
          'Công cụ bằng kim loại (đồng đỏ, đồng thau, sắt) xuất hiện đã tạo ra của cải dư thừa, dẫn đến sự phân hóa giàu nghèo và nhà nước ra đời.'
        ]
      },
      {
        title: 'Phần Địa lí: Bản đồ & Chuyển động của Trái Đất',
        content: 'Kinh tuyến gốc 0° đi qua đài thiên văn Greenwich (Anh). Vĩ tuyến 0° là đường Xích đạo. Trái Đất là hành tinh thứ 3 từ Mặt Trời, tự quay quanh trục mất 24h (sinh ra ngày đêm luân phiên) và quay quanh Mặt Trời mất 365 ngày 6 giờ (sinh ra 4 mùa Xuân - Hạ - Thu - Đông).',
        formulas: [
          'Khoảng cách thực tế = Khoảng cách trên bản đồ × Mẫu số tỉ lệ bản đồ',
          'Ví dụ: Tỉ lệ 1 : 200 000, đo được 5 cm → Thực tế: 5 × 200 000 = 1 000 000 cm = 10 km.'
        ]
      }
    ]
  },

  // 5. TIẾNG ANH 6 - HỌC KỲ 1
  {
    id: 'pdf-g6-s1-english-full',
    title: 'English 6 Comprehensive Study Guide (Sem 1) - Global Success',
    titleEn: 'English 6 Global Success Review (Units 1 - 6)',
    grade: 6,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    pageCount: 24,
    fileSize: '4.1 MB',
    description: 'Complete revision of Global Success English 6 Semester 1: Units 1 to 6 (My New School, My House, My Friends, My Neighbourhood, Natural Wonders, Our Tet Holiday). Grammar rules: Present Simple, Present Continuous, Comparatives, Superlatives, Must/Mustn\'t, Should.',
    descriptionEn: 'Units 1-6 Global Success: Grammar rules, tenses, adjectives, modal verbs, vocabulary lists and sample exercises.',
    author: 'English Curriculum Development Center - Vietnam MOET',
    releaseDate: 'Semester 1 - 2026',
    downloadFileName: 'Learnix_English6_Sem1_GlobalSuccess_Guide.pdf',
    sections: [
      {
        title: 'Unit 1, 2, 3: Present Simple, Continuous & Prepositions of Place',
        content: 'Present Simple: S + V(s/es) for habits and general truths. Present Continuous: S + am/is/are + V-ing for actions happening right now. Prepositions of place: in, on, behind, opposite, between A and B, in front of, under.',
        formulas: [
          'Present Simple: (+) S + V(s/es) | (-) S + do/does not + V-bare | (?) Do/Does + S + V-bare?',
          'Present Continuous: (+) S + am/is/are + V-ing | (-) S + am/is/are + not + V-ing',
          'Adverbs of frequency: always, usually, often, sometimes, never (stand after Be, before main Verbs)'
        ],
        exampleProblem: {
          problem: 'Put the verbs into correct forms: Look! The children (swim) in the swimming pool. They (swim) there twice a week.',
          solution: 'Look! The children ARE SWIMMING in the swimming pool. They SWIM there twice a week.'
        }
      },
      {
        title: 'Unit 4, 5, 6: Comparatives, Superlatives & Modal Verbs',
        content: 'Comparatives: short adj + er + than (taller than); more + long adj + than (more modern than). Superlatives: the + short adj + est (the oldest); the most + long adj (the most beautiful). Modals: Must (obligation), Mustn\'t (strict prohibition), Should (advice).',
        formulas: [
          'Irregular adjectives: good → better → best; bad → worse → worst; far → farther/further → farthest/furthest',
          'S + should/shouldn\'t + V-bare (You should brush your teeth twice a day)'
        ]
      }
    ]
  },

  // 6. GIÁO DỤC CÔNG DÂN 6 - HỌC KỲ 1
  {
    id: 'pdf-g6-s1-civics-full',
    title: 'Sổ tay Đạo đức & Giá trị sống 6 (HK1) - GDCD Kết nối tri thức',
    titleEn: 'Civic Education 6 Guide (Sem 1) - Values, Humanity & Integrity',
    grade: 6,
    semester: 1,
    subject: 'GDCD',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'social',
    pageCount: 20,
    fileSize: '3.6 MB',
    description: 'Cẩm nang GDCD 6 Học kỳ 1: Bài 1 Tự hào truyền thống gia đình dòng họ, Bài 2 Yêu thương con người, Bài 3 Siêng năng kiên trì, Bài 4 Tôn trọng sự thật; các câu ca dao tục ngữ và tình huống rèn luyện đạo đức.',
    descriptionEn: 'Sem 1 Civics handbook: Family pride, compassion, perseverance, respect for truth and moral dilemma case studies.',
    author: 'Tổ Giáo dục Công dân THCS - Viện Khoa học Giáo dục',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_GDCD6_HocKy1_DaoDuc_GiaTriSong.pdf',
    sections: [
      {
        title: 'Chủ đề: Truyền thống gia đình dòng họ & Yêu thương con người',
        content: 'Truyền thống là các giá trị tốt đẹp (hiếu học, cần cù, nhân ái, nghề thủ công) được giữ gìn qua các thế hệ. Yêu thương con người là sự quan tâm, cảm thông, sẻ chia và giúp đỡ người khác lúc khó khăn, không phân biệt đối xử và không vụ lợi.',
        keyPoints: [
          'Tục ngữ yêu thương: "Lá lành đùm lá rách", "Thương người như thể thương thân", "Một miếng khi đói bằng một gói khi no".'
        ]
      },
      {
        title: 'Chủ đề: Siêng năng, Kiên trì & Tôn trọng sự thật',
        content: 'Siêng năng là tự giác, cần cù, làm việc đều đặn. Kiên trì là quyết tâm làm đến cùng dù gặp khó khăn, thử thách. Tôn trọng sự thật là bảo vệ lẽ phải, trung thực, không dối trá hay bao che cho hành vi sai trái.',
        keyPoints: [
          'Tục ngữ kiên trì & trung thực: "Có công mài sắt có ngày nên kim", "Thẳng mực tàu đau lòng gỗ", "Cây ngay không sợ chết đứng".'
        ]
      }
    ]
  },

  // 7. TIN HỌC 6 - HỌC KỲ 1
  {
    id: 'pdf-g6-s1-informatics-full',
    title: 'Cẩm nang Tin học 6 (HK1) - Dữ liệu, Mạng Internet & Sơ đồ tư duy',
    titleEn: 'Informatics 6 Handbook (Sem 1) - Data, Networks & Mindmaps',
    grade: 6,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    pageCount: 22,
    fileSize: '4.0 MB',
    description: 'Kiến thức cốt lõi Tin học 6 HK1: Khái niệm thông tin và dữ liệu, đơn vị đo dung lượng thông tin (Bit, Byte, KB, MB, GB, TB), mạng máy tính có dây và không dây, Internet, kỹ năng tìm kiếm thông tin bằng Google, sơ đồ tư duy Mindmap.',
    descriptionEn: 'Sem 1 Informatics: Data representation, bits and bytes, networks, internet literacy, and digital mind mapping.',
    author: 'Bộ môn Khoa học Máy tính THCS - NXB Giáo dục',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_TinHoc6_HocKy1_Mang_DuLieu.pdf',
    sections: [
      {
        title: 'Chủ đề 1 & 2: Thông tin, Dữ liệu & Đơn vị đo lượng tin',
        content: 'Bit là đơn vị nhỏ nhất lưu trữ thông tin nhị phân (0 hoặc 1). Byte = 8 bits. Bảng quy đổi đơn vị: 1 KB = 1024 Bytes; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB.',
        formulas: [
          '1 Byte = 8 bits',
          '1 Kilobyte (KB) = 1024 Bytes = 2¹⁰ Bytes',
          '1 Megabyte (MB) = 1024 KB; 1 Gigabyte (GB) = 1024 MB'
        ]
      },
      {
        title: 'Chủ đề 3 & 4: Mạng máy tính, Internet & Sơ đồ tư duy',
        content: 'Mạng máy tính gồm thiết bị đầu cuối (máy tính, máy in), thiết bị kết nối (Switch, Router, Access Point) và đường truyền (cáp mạng, sóng Wi-Fi). Sơ đồ tư duy trực quan hóa ý tưởng với từ khóa trung tâm và các nhánh tỏa ra.',
        keyPoints: [
          'Kỹ năng tìm kiếm: Đặt từ khóa trong dấu ngoặc kép "..." để tìm kiếm chính xác cụm từ nguyên văn trên Google.',
          'Bảo mật tài khoản: Đặt mật khẩu tối thiểu 8 kí tự, kết hợp chữ hoa, chữ thường, số và kí tự đặc biệt.'
        ]
      }
    ]
  },

  // 8. CÔNG NGHỆ 6 - HỌC KỲ 1
  {
    id: 'pdf-g6-s1-technology-full',
    title: 'Cẩm nang Công nghệ 6 (HK1) - Nhà ở & Dinh dưỡng thực phẩm',
    titleEn: 'Technology 6 Handbook (Sem 1) - Smart Home & Food Science',
    grade: 6,
    semester: 1,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'tech',
    pageCount: 22,
    fileSize: '3.9 MB',
    description: 'Chương trình chuẩn Công nghệ 6 Tập 1: Vai trò và kiến trúc nhà ở tại Việt Nam, hệ thống điều khiển tự động ngôi nhà thông minh Smart Home, 4 nhóm chất dinh dưỡng cần thiết cho cơ thể, phương pháp bảo quản và chế biến thực phẩm an toàn vệ sinh.',
    descriptionEn: 'Sem 1 Technology: Architecture, smart home automation, essential nutrition, food safety, and preservation methods.',
    author: 'Nhóm Tác giả Công nghệ THCS - Viện Khoa học Kỹ thuật Giáo dục',
    releaseDate: 'Học kỳ 1 - 2026',
    downloadFileName: 'Learnix_CongNghe6_HocKy1_NhaO_DinhDuong.pdf',
    sections: [
      {
        title: 'Chương 1: Nhà ở & Ngôi nhà thông minh (Smart Home)',
        content: 'Nhà ở bảo vệ con người trước thời tiết (nắng, mưa, bão) và là nơi sinh hoạt gắn kết gia đình. Các kiểu nhà đặc trưng: Nhà sàn (miền núi), Nhà nổi (Tây Nam Bộ), Nhà liên kế/chung cư (đô thị). Smart Home tự động hóa chiếu sáng, an ninh và điều hòa không khí, giúp tiết kiệm năng lượng.',
        keyPoints: [
          'Nguyên tắc tiết kiệm điện: Tận dụng ánh sáng tự nhiên ban ngày, tắt các thiết bị khi không dùng, sử dụng bóng đèn LED hiệu suất cao.'
        ]
      },
      {
        title: 'Chương 2: Thực phẩm & Dinh dưỡng hợp lý',
        content: '4 nhóm dưỡng chất thiết yếu: Chất bột đường (gạo, khoai - cung cấp năng lượng), Chất đạm (thịt, cá, trứng - xây dựng cơ bắp và tế bào), Chất béo (dầu, mỡ - dự trữ năng lượng), Vitamin và khoáng chất (rau quả - tăng sức đề kháng).',
        keyPoints: [
          'Phương pháp bảo quản: Làm lạnh (0-5°C), Đông lạnh (dưới -18°C), Ướp muối, Sấy khô, Đóng hộp kín.',
          'An toàn vệ sinh: Không dùng chung thớt dao cắt đồ sống cho đồ chín để tránh nhiễm chéo vi khuẩn Salmonella, E.coli.'
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2 (HỌC KỲ 2) - ALL 8 SUBJECTS
  // =========================================================================

  // 9. TOÁN HỌC 6 - HỌC KỲ 2
  {
    id: 'pdf-g6-s2-math-full',
    title: 'Cẩm nang Ôn thi Toán 6 (Tập 2) - Phân số, Số thập phân & Hình phẳng',
    titleEn: 'Math 6 Handbook (Sem 2) - Fractions, Decimals & Geometry',
    grade: 6,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    pageCount: 30,
    fileSize: '5.0 MB',
    description: 'Chương trình chi tiết SGK Kết nối tri thức Toán 6 Tập 2: Mở rộng phân số, phân số bằng nhau, rút gọn phân số, các phép toán cộng trừ nhân chia phân số, số thập phân, tỉ số và tỉ số phần trăm, các hình hình học cơ bản (điểm, đường thẳng, tia, đoạn thẳng, góc), xác suất thực nghiệm.',
    descriptionEn: 'Sem 2 Math guide: Fractions, decimals, percentages, geometry (points, rays, lines, angles), and experimental probability.',
    author: 'Tổ Toán THCS - Bộ SGK Kết nối tri thức với cuộc sống',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_Toan6_Tap2_KetNoiTriThuc_TongHop.pdf',
    sections: [
      {
        title: 'Chương VI & VII: Phân số & Số thập phân',
        content: 'Phân số a/b (b ≠ 0). Hai phân số bằng nhau: a/b = c/d ⇔ a × d = b × c. Rút gọn phân số bằng cách chia cả tử và mẫu cho ước chung lớn nhất. Tỉ số phần trăm a/b × 100%.',
        formulas: [
          'Cộng trừ phân số cùng mẫu: a/m + b/m = (a + b) / m',
          'Nhân phân số: (a/b) × (c/d) = (a × c) / (b × d)',
          'Chia phân số: (a/b) : (c/d) = (a/b) × (d/c) = (a × d) / (b × c)',
          'Tìm giá trị phân số m/n của số a: a × (m/n)',
          'Tìm một số biết m/n của nó bằng b: b : (m/n)'
        ],
        exampleProblem: {
          problem: 'Tính: A = (3/4) × (-8/9) + (1/3).',
          solution: '(3/4) × (-8/9) = (3 × (-8)) / (4 × 9) = -24 / 36 = -2/3. Do đó A = -2/3 + 1/3 = -1/3.'
        }
      },
      {
        title: 'Chương VIII & IX: Hình học cơ bản & Xác suất',
        content: 'Qua hai điểm phân biệt có một và chỉ một đường thẳng. Trung điểm của đoạn thẳng AB nằm giữa và cách đều A, B. Phân loại góc: góc nhọn (< 90°), góc vuông (= 90°), góc tù (90° < góc < 180°), góc bẹt (= 180°). Xác suất thực nghiệm = Số lần sự kiện xảy ra / Tổng số lần thực nghiệm.',
        formulas: [
          'Độ dài đoạn thẳng: Nếu M nằm giữa A và B thì AM + MB = AB',
          'I là trung điểm AB ⇔ IA = IB = AB / 2'
        ]
      }
    ]
  },

  // 10. NGỮ VĂN 6 - HỌC KỲ 2
  {
    id: 'pdf-g6-s2-literature-full',
    title: 'Sổ tay Ngữ văn 6 (Tập 2) - Cổ tích, Nghị luận & Thông tin Trái Đất',
    titleEn: 'Literature 6 Study Guide (Sem 2) - Fairy Tales, Essays & Earth',
    grade: 6,
    semester: 2,
    subject: 'Ngữ văn',
    subjectVi: 'Ngữ văn',
    subjectEn: 'Literature',
    category: 'literature',
    pageCount: 26,
    fileSize: '4.4 MB',
    description: 'Chương trình chi tiết SGK Ngữ văn 6 Tập 2: Bài 6 Bài học từ lịch sử, Bài 7 Thế giới cổ tích (Thạch Sanh, Cây khế), Bài 8 Khác biệt và gần gũi (Xem người ta kìa, Hai loại khác biệt), Bài 9 Trái Đất ngôi nhà chung (Trái Đất - cái nôi của sự sống), Thành ngữ, Dấu chấm phẩy.',
    descriptionEn: 'Sem 2 Literature guide: Fairy tales, argumentative writing, informational texts on environmental conservation, and idioms.',
    author: 'Nhóm Tác giả Ngữ văn 6 - NXB Giáo dục Việt Nam',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_NguVan6_Tap2_KetNoiTriThuc_SoTay.pdf',
    sections: [
      {
        title: 'Thế giới cổ tích: Thạch Sanh & Cây khế',
        content: 'Truyện cổ tích là truyện kể dân gian phản ánh ước mơ công lý: người hiền gặp lành, kẻ ác bị trừng phạt. Thạch Sanh là biểu tượng của người dũng sĩ thật thà, tài năng và chuộng hòa bình (tiếng đàn hòa bình và niêu cơm thần). Lý Thông đại diện cho kẻ mưu mô cướp công.',
        keyPoints: [
          'Chi tiết niêu cơm thần: Niêu cơm ăn mãi không hết biểu tượng cho sức mạnh văn hóa, lòng nhân ái và tinh thần hòa hiếu của dân tộc Việt Nam.'
        ]
      },
      {
        title: 'Văn nghị luận & Văn bản thông tin Trái Đất',
        content: 'Văn nghị luận dùng luận điểm, lí lẽ và dẫn chứng thuyết phục người đọc. Văn bản thông tin "Trái Đất - cái nôi của sự sống" cung cấp số liệu khoa học chứng minh Trái Đất là nơi duy nhất có sự sống và kêu gọi con người chung tay cứu lấy hành tinh xanh.',
        keyPoints: [
          'Thành ngữ: Cụm từ cố định giàu hình ảnh ("Há miệng chờ sung" phê phán lười biếng; "Chân lấm tay bùn" ca ngợi nông dân chăm chỉ).',
          'Dấu chấm phẩy (;): Đánh dấu ranh giới giữa các vế câu ghép phức tạp hoặc các mục liệt kê.'
        ]
      }
    ]
  },

  // 11. KHOA HỌC TỰ NHIÊN 6 - HỌC KỲ 2
  {
    id: 'pdf-g6-s2-science-full',
    title: 'Cẩm nang KHTN 6 (Học kỳ 2) - Lực, Năng lượng & Thiên văn học',
    titleEn: 'Natural Science 6 Guide (Sem 2) - Mechanics, Energy & Astronomy',
    grade: 6,
    semester: 2,
    subject: 'Khoa học Tự nhiên',
    subjectVi: 'Khoa học Tự nhiên',
    subjectEn: 'Natural Science',
    category: 'science',
    pageCount: 30,
    fileSize: '5.1 MB',
    description: 'Chương trình chuẩn KHTN 6 HK2: Lực và biểu diễn lực, biến dạng lò xo và lực đàn hồi, lực ma sát trượt và ma sát lăn, trọng lượng và khối lượng, định luật bảo toàn năng lượng, năng lượng tái tạo, hệ Mặt Trời và các tuần trăng của Mặt Trăng.',
    descriptionEn: 'Sem 2 Science guide: Forces, gravity, elasticity, friction, energy forms and transformation, solar system celestial mechanics.',
    author: 'Hội đồng Khoa học Tự nhiên THCS - Viện Khoa học Giáo dục',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_KHTN6_HocKy2_Luc_NangLuong.pdf',
    sections: [
      {
        title: 'Chương 8 & 9: Lực & Tác dụng của lực',
        content: 'Lực là tác dụng đẩy hoặc kéo, đơn vị đo là Newton (N), đo bằng lực kế. Tác dụng của lực: làm biến đổi chuyển động (tốc độ, hướng) hoặc làm biến dạng vật. Trọng lượng P liên hệ với khối lượng m qua P ≈ 10 × m.',
        formulas: [
          'Trọng lượng: P (N) = 10 × m (kg)',
          'Độ dãn của lò xo tỉ lệ thuận với lực kéo tác dụng: Δl ~ F'
        ],
        keyPoints: [
          'Lực ma sát: Ma sát trượt (khi trượt), ma sát lăn (khi lăn, nhỏ hơn nhiều ma sát trượt), ma sát nghỉ (giữ vật đứng yên). Tra dầu mỡ và dùng ổ bi để giảm ma sát có hại.'
        ]
      },
      {
        title: 'Chương 10 & 11: Năng lượng & Hệ Mặt Trời',
        content: 'Định luật bảo toàn năng lượng: Năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa giữa các dạng hoặc truyền giữa các vật. Năng lượng tái tạo: Mặt trời, gió, thủy triều, sinh khối.',
        keyPoints: [
          'Hệ Mặt Trời: Mặt Trời là ngôi sao ở trung tâm, 8 hành tinh quay quanh (Sao Thủy, Sao Kim, Trái Đất, Sao Hỏa, Sao Mộc, Sao Thổ, Sao Thiên Vương, Sao Hải Vương).',
          'Mặt Trăng là vệ tinh tự nhiên của Trái Đất, không tự phát sáng mà phản chiếu ánh sáng Mặt Trời.'
        ]
      }
    ]
  },

  // 12. LỊCH SỬ & ĐỊA LÍ 6 - HỌC KỲ 2
  {
    id: 'pdf-g6-s2-history-geo-full',
    title: 'Đề cương Tổng ôn Lịch sử & Địa lí 6 (HK2) - Đấu tranh Bắc thuộc & Thủy quyển',
    titleEn: 'History & Geography 6 Guide (Sem 2) - Resistance Wars & Hydrosphere',
    grade: 6,
    semester: 2,
    subject: 'Lịch sử & Địa lí',
    subjectVi: 'Lịch sử & Địa lí',
    subjectEn: 'History & Geography',
    category: 'social',
    pageCount: 28,
    fileSize: '4.7 MB',
    description: 'Nội dung cốt lõi Lịch sử & Địa lí 6 HK2: Các cuộc khởi nghĩa chống Bắc thuộc (Hai Bà Trưng năm 40, Bà Triệu 248, Lý Bí 542 lập nước Vạn Xuân, Mai Thúc Loan, Phùng Hưng), Chiến thắng Bạch Đằng năm 938 của Ngô Quyền; Thủy quyển, nước mặn và nước ngọt, sông hồ, nước ngầm, lớp đất và sinh vật.',
    descriptionEn: 'Sem 2 History & Geography: Anti-colonial uprisings, Bach Dang victory in 938, hydrosphere, river systems, soil science and biomes.',
    author: 'Nhóm Tác giả Lịch sử - Địa lí THCS - NXB Giáo dục',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_LichSuDiaLi6_HocKy2_BachDang_ThuyQuyen.pdf',
    sections: [
      {
        title: 'Lịch sử: Đấu tranh giành độc lập & Chiến thắng Bạch Đằng 938',
        content: 'Hơn 1000 năm Bắc thuộc (179 TCN - 938). Nhân dân ta liên tục quật khởi: Hai Bà Trưng (năm 40), Bà Triệu (248), Lý Bí (542) dựng nước Vạn Xuân. Đỉnh cao là Chiến thắng Bạch Đằng năm 938 của Ngô Quyền: dùng bãi cọc nhọn bọc sắt lợi dụng thủy triều tiêu diệt quân Nam Hán, mở ra kỉ nguyên độc lập lâu dài.',
        keyPoints: [
          'Ý nghĩa Bạch Đằng 938: Chấm dứt vĩnh viễn hơn 10 thế kỉ Bắc thuộc, khẳng định quyền độc lập tự chủ thiêng liêng của dân tộc Việt Nam.'
        ]
      },
      {
        title: 'Địa lí: Thủy quyển, Đất & Rừng nhiệt đới',
        content: 'Thủy quyển gồm 97,5% nước mặn đại dương và 2,5% nước ngọt (chủ yếu là băng ở hai cực). Vòng tuần hoàn nước luân chuyển liên tục. Đất gồm chất khoáng và chất mùn (humus) quyết định độ phì nhiêu. Rừng nhiệt đới phát triển quanh xích đạo nóng ẩm.',
        keyPoints: [
          'Bảo vệ nguồn nước: Trồng rừng đầu nguồn giữ nước và chống xói mòn; không xả nước thải bẩn ra sông hồ.'
        ]
      }
    ]
  },

  // 13. TIẾNG ANH 6 - HỌC KỲ 2
  {
    id: 'pdf-g6-s2-english-full',
    title: 'English 6 Exam Mastery Handbook (Sem 2) - Global Success',
    titleEn: 'English 6 Global Success Review (Units 7 - 12)',
    grade: 6,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    pageCount: 26,
    fileSize: '4.3 MB',
    description: 'Chương trình chi tiết Tiếng Anh 6 Global Success Học kỳ 2: Units 7 to 12 (Television, Sports and Games, Cities of the World, Houses in the Future, Our Greener World, Robots). Ngữ pháp: Past Simple tense, Conjunctions (and, but, although, because, so), Future with will/might, First Conditional sentences (Type 1), Possessive pronouns.',
    descriptionEn: 'Units 7-12 Global Success: Past Simple irregulars, Future predictions, Conditionals type 1, 3Rs environmental vocabulary, and robots.',
    author: 'English Curriculum Development Center - Vietnam MOET',
    releaseDate: 'Semester 2 - 2026',
    downloadFileName: 'Learnix_English6_Sem2_GlobalSuccess_Mastery.pdf',
    sections: [
      {
        title: 'Units 7 & 8: Television, Sports & Past Simple Tense',
        content: 'Past Simple with regular verbs (-ed) and irregular verbs (win → won, go → went, see → saw, eat → ate). Conjunctions: and (thêm thông tin), but (đối lập), although (nhượng bộ), because (nguyên nhân), so (kết quả). Imperatives for sports.',
        formulas: [
          'Past Simple: (+) S + V2/ed | (-) S + didn\'t + V-bare | (?) Did + S + V-bare?',
          'Pronunciation of -ed: /ɪd/ after t, d (visited, wanted); /t/ after voiceless sounds; /d/ after voiced sounds'
        ],
        exampleProblem: {
          problem: 'Rewrite using "Although": It rained heavily, but we went playing badminton in the school yard.',
          solution: 'Although it rained heavily, we went playing badminton in the school yard.'
        }
      },
      {
        title: 'Units 9, 10, 11, 12: Cities, Future Houses, 3Rs & Robots',
        content: 'Future Simple with Will: S + will/won\'t + V-bare (predictions). Might + V-bare (uncertain possibility). Conditional Type 1: If + Present Simple, S + will + V-bare. The 3Rs rule: Reduce, Reuse, Recycle. Robots vocabulary.',
        formulas: [
          'Conditional Type 1: If + S + V(s/es), S + will/won\'t + V-bare',
          'Possessive Pronouns: mine, yours, his, hers, ours, theirs (stand alone without noun)'
        ]
      }
    ]
  },

  // 14. GIÁO DỤC CÔNG DÂN 6 - HỌC KỲ 2
  {
    id: 'pdf-g6-s2-civics-full',
    title: 'Cẩm nang GDCD 6 (HK2) - Tự lập, Tiết kiệm & Quyền trẻ em',
    titleEn: 'Civic Education 6 Guide (Sem 2) - Self-Reliance & Child Rights',
    grade: 6,
    semester: 2,
    subject: 'GDCD',
    subjectVi: 'Giáo dục công dân',
    subjectEn: 'Civic Education',
    category: 'social',
    pageCount: 22,
    fileSize: '3.8 MB',
    description: 'Chương trình chi tiết GDCD 6 HK2: Bài 5 Tự lập, Bài 8 Tiết kiệm, Bài 9 Công dân nước CHXHCN Việt Nam, Bài 10 - 11 - 12 Quyền và bổn phận của trẻ em, 4 nhóm quyền cơ bản (Sống còn, Bảo vệ, Phát triển, Tham gia).',
    descriptionEn: 'Sem 2 Civics guide: Independence, resource conservation, Vietnamese citizenship, and the 4 fundamental groups of child rights.',
    author: 'Tổ Giáo dục Công dân THCS - Viện Khoa học Giáo dục',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_GDCD6_HocKy2_QuyenTreEm_TuLap.pdf',
    sections: [
      {
        title: 'Chủ đề: Tự lập & Tiết kiệm',
        content: 'Tự lập là tự mình làm lấy công việc của mình trong học tập và sinh hoạt mà không ỷ lại, dựa dẫm. Tiết kiệm là sử dụng hợp lý của cải, thời gian, công sức của bản thân và xã hội, tránh lãng phí tiền bạc, thức ăn, điện nước.',
        keyPoints: [
          'Tục ngữ: "Tích tiểu thành đại", "Ăn phải dành, có phải kiệm", "Nước lã mà vã nên hồ / Tay không mà nổi cơ đồ mới ngoan".'
        ]
      },
      {
        title: 'Chủ đề: Công dân Việt Nam & Quyền cơ bản của trẻ em',
        content: 'Công dân Việt Nam là người có quốc tịch Việt Nam (chứng minh qua Giấy khai sinh, Căn cước). 4 nhóm quyền trẻ em: 1. Quyền Sống còn (được sống, chăm sóc sức khỏe); 2. Quyền Bảo vệ (chống bạo lực, bóc lột); 3. Quyền Phát triển (học hành, vui chơi); 4. Quyền Tham gia (bày tỏ ý kiến). Bổn phận: hiếu thảo với cha mẹ, kính trọng thầy cô, chăm học và tuân thủ luật pháp.',
        keyPoints: [
          'Tổng đài Quốc gia Bảo vệ Trẻ em: 111 (hoạt động 24/7, gọi hoàn toàn miễn phí).'
        ]
      }
    ]
  },

  // 15. TIN HỌC 6 - HỌC KỲ 2
  {
    id: 'pdf-g6-s2-informatics-full',
    title: 'Sổ tay Lập trình & Thuật toán 6 (HK2) - Sơ đồ khối & Scratch',
    titleEn: 'Informatics 6 Handbook (Sem 2) - Algorithms & Scratch Logic',
    grade: 6,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    pageCount: 26,
    fileSize: '4.6 MB',
    description: 'Chương trình chi tiết Tin học 6 HK2: Khái niệm thuật toán, 3 tính chất (Dừng, Xác định, Đúng đắn), các hình quy chuẩn trong sơ đồ khối Flowchart, cấu trúc rẽ nhánh nếu... thì..., cấu trúc lặp, môi trường lập trình trực quan khối lệnh Scratch.',
    descriptionEn: 'Sem 2 Informatics: Algorithmic thinking, flowchart conventions, loops, conditions, and visual programming in Scratch.',
    author: 'Bộ môn Khoa học Máy tính THCS - NXB Giáo dục',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_TinHoc6_HocKy2_ThuatToan_Scratch.pdf',
    sections: [
      {
        title: 'Chủ đề: Thuật toán & Sơ đồ khối (Flowchart)',
        content: 'Thuật toán là dãy các chỉ dẫn từng bước rõ ràng để giải bài toán. 3 tính chất: Tính dừng (kết thúc sau số bước hữu hạn), Tính xác định (mỗi bước rõ ràng không mơ hồ), Tính đúng đắn (cho ra kết quả đúng). Quy ước hình vẽ sơ đồ khối: Oval (Bắt đầu/Kết thúc), Hình chữ nhật (Tính toán, xử lý), Hình thoi (Kiểm tra điều kiện rẽ nhánh), Hình bình hành (Nhập/Xuất).',
        formulas: [
          'Cấu trúc rẽ nhánh dạng thiếu: Nếu <Điều kiện> thì <Lệnh>',
          'Cấu trúc rẽ nhánh dạng đủ: Nếu <Điều kiện> thì <Lệnh 1> Không thì <Lệnh 2>'
        ]
      },
      {
        title: 'Chủ đề: Lập trình trực quan Scratch',
        content: 'Môi trường Scratch cho phép ghép nối các khối lệnh màu sắc để điều khiển nhân vật Sprite trên Sân khấu Stage. Các nhóm lệnh chính: Motion (chuyển động), Looks (hiển thị), Events (sự kiện lá cờ xanh), Control (lặp lại, nếu thì), Sensing (cảm biến va chạm), Variables (biến số lưu điểm).',
        keyPoints: [
          'Biến số (Variable): Lưu trữ điểm số hoặc thời gian có thể thay đổi trong quá trình trò chơi hoạt động.'
        ]
      }
    ]
  },

  // 16. CÔNG NGHỆ 6 - HỌC KỲ 2
  {
    id: 'pdf-g6-s2-technology-full',
    title: 'Cẩm nang Công nghệ 6 (HK2) - Trang phục thời trang & Đồ dùng điện',
    titleEn: 'Technology 6 Handbook (Sem 2) - Fashion, Apparel & Home Electricity',
    grade: 6,
    semester: 2,
    subject: 'Công nghệ',
    subjectVi: 'Công nghệ',
    subjectEn: 'Technology',
    category: 'tech',
    pageCount: 24,
    fileSize: '4.2 MB',
    description: 'Chương trình chi tiết Công nghệ 6 Tập 2: Nguồn gốc vải may mặc (sợi tự nhiên, sợi tổng hợp, sợi pha), lựa chọn và bảo quản trang phục phù hợp vóc dáng, thời trang và phong cách, đồ dùng điện quang (đèn LED), đồ dùng điện nhiệt (bàn là, nồi cơm), đồ dùng điện cơ (quạt điện), an toàn điện gia đình.',
    descriptionEn: 'Sem 2 Technology: Fabric science, garment care, electrical appliances (LEDs, irons, electric fans), and home electrical safety.',
    author: 'Nhóm Tác giả Công nghệ THCS - Viện Khoa học Kỹ thuật Giáo dục',
    releaseDate: 'Học kỳ 2 - 2026',
    downloadFileName: 'Learnix_CongNghe6_HocKy2_TrangPhuc_ThietBiDien.pdf',
    sections: [
      {
        title: 'Chương 3: Trang phục & Thời trang',
        content: 'Vải sợi tự nhiên (cotton, tơ tằm: thoáng mát, thấm mồ hôi, dễ nhăn); Vải sợi nhân tạo/tổng hợp (polyester, nylon: bền, ít nhăn, nhanh khô); Vải sợi pha (kết hợp ưu điểm cả hai). Lựa chọn trang phục: Người mập nên mặc vải tối màu, kẻ sọc dọc, hoa văn nhỏ; Người gầy nên mặc màu sáng, kẻ sọc ngang.',
        keyPoints: [
          'Kí hiệu giặt là: Hình chậu nước (giặt nước), Hình bàn là 1 chấm (là nhiệt độ thấp < 110°C), Hình tam giác gạch chéo (không dùng chất tẩy).'
        ]
      },
      {
        title: 'Chương 4: Đồ dùng điện trong gia đình & An toàn điện',
        content: 'Đồ dùng điện - quang (đèn LED: tiết kiệm 80% điện, tuổi thọ cao); Đồ dùng điện - nhiệt (bàn là, nồi cơm điện: dây đốt nóng hợp kim biến điện thành nhiệt); Đồ dùng điện - cơ (quạt điện: động cơ stato và roto biến điện thành cơ năng). Thông số kĩ thuật: Vôn (V) là điện áp định mức; Oát (W) là công suất tiêu thụ.',
        keyPoints: [
          'An toàn điện: Tuyệt đối không chạm tay ướt vào công tắc hoặc phích cắm; rút phích cắm cầm vào thân phích, không giật dây; lắp đặt aptomat tự động ngắt điện chống chập cháy; cấp cứu người bị giật bằng cách ngắt ngay cầu dao hoặc dùng gậy gỗ khô gạt dây điện.'
        ]
      }
    ]
  }
];
