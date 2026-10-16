import { CurriculumQuiz } from './curriculumData';

export interface HistoryFlashcardItem {
  id: string;
  front: string;
  back: string;
  tag: string;
  importance: 'essential' | 'high' | 'normal';
}

export interface HistoryMindmapBranch {
  id: string;
  title: string;
  color: string;
  icon: string;
  subBranches: {
    title: string;
    detail: string;
    keywords?: string[];
  }[];
}

export interface HistorySketchnoteSection {
  title: string;
  badge: string;
  quote?: string;
  timeline?: { year: string; event: string }[];
  keyFigures?: { name: string; role: string; achievement: string }[];
  highlights: string[];
  takeaway: string;
}

export interface HistoryLessonArticle {
  id: string;
  lessonNumber: number;
  semester: 1 | 2;
  title: string;
  titleEn: string;
  subtitle: string;
  sgkReference: string; // e.g., 'Bài 1 - SGK Lịch sử & Địa lí 6 (GDPT 2018)'
  author: string;
  readTime: string;

  // 2-PAGE PDF DATA
  page1: {
    headerTitle: string;
    mainConcept: string;
    coreKnowledge: {
      sectionTitle: string;
      bullets: string[];
    }[];
    chronologyTimeline?: { time: string; event: string }[];
  };
  page2: {
    headerTitle: string;
    historicalQuotes: {
      source: string;
      quote: string;
      context: string;
    }[];
    comparisonTable?: {
      headers: string[];
      rows: string[][];
    };
    goldenRules: string[];
    reviewQuestions: string[];
  };

  // 3 SUPPLEMENTARY ATTACHMENTS (MINDMAP, SKETCHNOTE, FLASHCARDS)
  mindmap: {
    centralTheme: string;
    themeDescription: string;
    branches: HistoryMindmapBranch[];
  };

  sketchnote: HistorySketchnoteSection;

  flashcards: HistoryFlashcardItem[];
}

/**
 * Authoritative Grade 6 History Lessons (GDPT 2018 Textbook Standards)
 */
export const GRADE_6_HISTORY_LESSONS: HistoryLessonArticle[] = [
  // ==========================================
  // BÀI 1: LỊCH SỬ LÀ GÌ?
  // ==========================================
  {
    id: 'history-g6-lesson-1',
    lessonNumber: 1,
    semester: 1,
    title: 'Bài 1: Lịch sử và Cuộc sống',
    titleEn: 'Lesson 1: What is History and Why Study It?',
    subtitle: 'Khái niệm lịch sử, các nguồn tư liệu lịch sử và ý nghĩa thực tiễn đối với cuộc sống con người',
    sgkReference: 'Bài 1 - SGK Lịch sử & Địa lí 6 (Bộ GD&ĐT - Kết nối tri thức & Cánh Diều)',
    author: 'Hội đồng Khoa học Lịch sử GDPT 2018',
    readTime: '6 phút',

    page1: {
      headerTitle: 'TRANG 1: HỆ THỐNG HÓA KIẾN THỨC CỐT LÕI - LỊCH SỬ LÀ GÌ?',
      mainConcept: 'Lịch sử là tất cả những gì đã diễn ra trong quá khứ của xã hội loài người. Môn Lịch sử là khoa học nghiên cứu và phục dựng lại quá khứ ấy một cách khách quan, chân thực và có hệ thống.',
      coreKnowledge: [
        {
          sectionTitle: '1. Khái niệm và Đối tượng nghiên cứu',
          bullets: [
            'Lịch sử là quá trình hình thành, sinh tồn, phát triển và biến đổi không ngừng của tự nhiên, con người và toàn thể nhân loại.',
            'Lịch sử xã hội loài người nghiên cứu hoạt động cá nhân, cộng đồng, thể chế chính trị, sản xuất kinh tế và các giá trị văn hóa tinh thần.',
            'Quá khứ đã qua không thể thay đổi, nhưng nhận thức lịch sử luôn được làm sâu sắc hơn nhờ các phát hiện khảo cổ và sử liệu mới.'
          ]
        },
        {
          sectionTitle: '2. Các nguồn tư liệu lịch sử (Căn cứ phục dựng quá khứ)',
          bullets: [
            'Tư liệu truyền miệng: Ca dao, cổ tích, thần thoại, truyền thuyết (vd: Truyền thuyết Thánh Gióng, Sơn Tinh Thủy Tinh, Lạc Long Quân - Âu Cơ).',
            'Tư liệu hiện vật: Di tích khảo cổ, công cụ đá, đồ đồng, vũ khí, xương cổ, công trình kiến trúc (vd: Trống đồng Đông Sơn, thành Cổ Loa, di tích Hoàng thành Thăng Long).',
            'Tư liệu chữ viết: Văn bia, chữ khắc trên đá, mai rùa, giáp cốt văn, sách sử cổ, văn kiện hành chính (vd: Bia tiến sĩ Văn Miếu, Đại Việt Sử ký Toàn thư).'
          ]
        }
      ],
      chronologyTimeline: [
        { time: 'Thời cổ đại', event: 'Con người bắt đầu ghi chép bằng hình vẽ trên vách hang và giáp cốt văn' },
        { time: 'Thế kỷ V TCN', event: 'Hê-rô-đốt (Hy Lạp) được tôn vinh là "Người cha của ngành Lịch sử phương Tây"' },
        { time: 'Thế kỷ II TCN', event: 'Tư Mã Thiên hoàn thành bộ "Sử ký" đồ sộ tại Trung Quốc' },
        { time: 'Năm 1272', event: 'Lê Văn Hưu biên soạn "Đại Việt sử ký" - bộ chính sử đầu tiên của dân tộc ta' }
      ]
    },

    page2: {
      headerTitle: 'TRANG 2: TƯ LIỆU MỞ RỘNG, BẢNG ĐỐI CHIẾU & CÂU HỎI TỰ LUYỆN',
      historicalQuotes: [
        {
          source: 'Chủ tịch Hồ Chí Minh - Mở đầu tập thơ "Lịch sử nước ta" (1942)',
          quote: '"Dân ta phải biết sử ta / Cho tường gốc tích nước nhà Việt Nam."',
          context: 'Lời dạy thiêng liêng khẳng định trách nhiệm của mỗi công dân Việt Nam phải hiểu rõ nguồn cội, tổ tiên và truyền thống kiên cường dựng nước, giữ nước.'
        },
        {
          source: 'Danh nhân văn hóa Cicero (La Mã cổ đại)',
          quote: '"Lịch sử là nhân chứng của thời gian, ánh sáng của chân lý, sự sống của ký ức và người thầy dạy của cuộc sống."',
          context: 'Khẳng định vai trò dẫn đường của lịch sử giúp hậu thế không lặp lại sai lầm trong quá khứ.'
        }
      ],
      comparisonTable: {
        headers: ['Loại tư liệu', 'Đặc điểm nhận biết', 'Ưu điểm', 'Hạn chế cần lưu ý'],
        rows: [
          ['Tư liệu truyền miệng', 'Lời kể, truyền thuyết dân gian', 'Giàu cảm xúc, lưu giữ ký ức cộng đồng sâu sắc', 'Dễ bị thêm bớt, tam sao thất bản qua thời gian'],
          ['Tư liệu hiện vật', 'Đồ vật cổ, công trình, hóa thạch', 'Bằng chứng vật chất trung thực, không thiên vị', 'Không nói được tiếng nói trực tiếp, cần giải mã chuyên sâu'],
          ['Tư liệu chữ viết', 'Sách sử, văn bia, tài liệu lưu trữ', 'Cụ thể về ngày tháng, niên đại, tên nhân vật', 'Có thể mang góc nhìn chủ quan của người ghi chép']
        ]
      },
      goldenRules: [
        'Học lịch sử không phải để ghi nhớ ngày tháng máy móc, mà là để hiểu quy luật vận động của xã hội và nuôi dưỡng lòng yêu nước.',
        'Mỗi sự kiện lịch sử đều là mắt xích liên kết giữa quá khứ - hiện tại - tương lai.'
      ],
      reviewQuestions: [
        '1. Lịch sử là gì và tại sao chúng ta phải học môn Lịch sử?',
        '2. Hãy phân biệt tư liệu hiện vật và tư liệu truyền miệng qua ví dụ cụ thể.',
        '3. Nhận định: "Tư liệu chữ viết là hoàn toàn chính xác tuyệt đối" đúng hay sai? Vì sao?',
        '4. Em hãy kể tên 3 nguồn tư liệu lịch sử có tại địa phương hoặc gia đình em.'
      ]
    },

    mindmap: {
      centralTheme: 'LỊCH SỬ VÀ CUỘC SỐNG',
      themeDescription: 'Khoa học về quá khứ và nền tảng xây dựng tương lai',
      branches: [
        {
          id: 'b1-concept',
          title: 'Khái niệm Lịch sử',
          color: 'from-amber-500 to-orange-600',
          icon: 'BookOpen',
          subBranches: [
            { title: 'Quá khứ', detail: 'Tất cả sự kiện đã diễn ra của tự nhiên và xã hội loài người', keywords: ['Khách quan', 'Đã diễn ra'] },
            { title: 'Khoa học Lịch sử', detail: 'Ngành khoa học nghiên cứu, giải mã và phục dựng lại quá khứ', keywords: ['Hệ thống', 'Khoa học'] }
          ]
        },
        {
          id: 'b1-sources',
          title: 'Nguồn tư liệu',
          color: 'from-blue-500 to-indigo-600',
          icon: 'Layers',
          subBranches: [
            { title: 'Tư liệu truyền miệng', detail: 'Thần thoại, truyền thuyết, sử thi lưu truyền qua các thế hệ', keywords: ['Thánh Gióng', 'Sơn Tinh'] },
            { title: 'Tư liệu hiện vật', detail: 'Di tích khảo cổ, xương cốt, công cụ đá, đồ đồng, thành lũy', keywords: ['Trống đồng', 'Thành Cổ Loa'] },
            { title: 'Tư liệu chữ viết', detail: 'Văn bia, sách cổ, giáp cốt văn, chiếu chỉ, thư tịch cổ', keywords: ['Đại Việt sử ký', 'Bia đá'] }
          ]
        },
        {
          id: 'b1-meaning',
          title: 'Ý nghĩa học Lịch sử',
          color: 'from-emerald-500 to-teal-600',
          icon: 'Sparkles',
          subBranches: [
            { title: 'Biết cội nguồn', detail: 'Biết rõ gốc tích dân tộc, tổ tiên, quê hương đất nước', keywords: ['Lòng biết ơn', 'Cội nguồn'] },
            { title: 'Đúc kết bài học', detail: 'Học tập kinh nghiệm quý báu của cha ông để ứng dụng cho hiện tại', keywords: ['Kinh nghiệm', 'Trí tuệ'] },
            { title: 'Trách nhiệm công dân', detail: 'Nuôi dưỡng lòng tự hào, tự tôn dân tộc và ý chí cống hiến', keywords: ['Yêu nước', 'Trách nhiệm'] }
          ]
        }
      ]
    },

    sketchnote: {
      title: 'Sketchnote Bài 1: Lịch sử & Cuộc sống',
      badge: 'BẢN ĐỒ TƯ DUY HÌNH ẢNH NHANH',
      quote: 'Dân ta phải biết sử ta - Cho tường gốc tích nước nhà Việt Nam (Hồ Chí Minh)',
      timeline: [
        { year: 'Nguyên thủy', event: 'Khắc vạch trên vách đá hang động (tư liệu hiện vật đầu tiên)' },
        { year: 'Thời cổ đại', event: 'Xuất hiện chữ viết tượng hình & hệ thống chữ cái cổ' },
        { year: 'Thời nay', event: 'Công nghệ số hóa bảo tồn tư liệu lịch sử toàn cầu' }
      ],
      keyFigures: [
        { name: 'Hê-rô-đốt (Herodotus)', role: 'Nhà sử học Hy Lạp cổ đại', achievement: 'Được mệnh danh là "Người cha của ngành Lịch sử phương Tây"' },
        { name: 'Lê Văn Hưu', role: 'Hàn lâm viện Học sĩ thời Trần', achievement: 'Tác giả bộ quốc sử đầu tiên "Đại Việt sử ký" (1272)' }
      ],
      highlights: [
        '🔍 Lịch sử là chiếc cầu nối kỳ diệu giữa Quá khứ - Hiện tại - Tương lai.',
        '🏺 3 loại tư liệu chủ yếu: Truyền miệng, Hiện vật và Chữ viết.',
        '🌱 Hiểu lịch sử giúp con người đứng vững trên cội rễ văn hóa dân tộc.'
      ],
      takeaway: 'Học lịch sử không phải để thuộc lòng ngày tháng, mà là để thấu hiểu quá khứ, trân trọng hiện tại và vững bước tương lai.'
    },

    flashcards: [
      {
        id: 'fc-h6-1-1',
        front: 'Lịch sử là gì?',
        back: 'Lịch sử là tất cả những gì đã diễn ra trong quá khứ của xã hội loài người, bao gồm toàn bộ hoạt động sinh tồn, sản xuất và tư tưởng.',
        tag: 'Khái niệm',
        importance: 'essential'
      },
      {
        id: 'fc-h6-1-2',
        front: 'Tư liệu hiện vật là gì? Cho ví dụ minh họa.',
        back: 'Là những di tích, đồ vật do con người thời xưa để lại (công cụ lao động, vũ khí, đồ trang sức, công trình). Ví dụ: Trống đồng Đông Sơn, thành Cổ Loa.',
        tag: 'Tư liệu sử học',
        importance: 'essential'
      },
      {
        id: 'fc-h6-1-3',
        front: 'Tư liệu truyền miệng có đặc điểm gì nổi bật?',
        back: 'Gồm thần thoại, truyền thuyết, ca dao được truyền miệng qua các thế hệ. Phản ánh tâm tư nguyện vọng của nhân dân nhưng cần đối chiếu hiện vật.',
        tag: 'Tư liệu sử học',
        importance: 'high'
      },
      {
        id: 'fc-h6-1-4',
        front: 'Vì sao chúng ta cần phải học môn Lịch sử?',
        back: 'Để biết được cội nguồn tổ tiên, quê hương đất nước; hiểu quá trình dựng nước giữ nước; và rút ra bài học kinh nghiệm cho tương lai.',
        tag: 'Ý nghĩa',
        importance: 'essential'
      },
      {
        id: 'fc-h6-1-5',
        front: 'Ai được suy tôn là "Người cha của ngành Lịch sử phương Tây"?',
        back: 'Hê-rô-đốt (Herodotus), nhà sử học kiệt xuất Hy Lạp cổ đại sống vào thế kỷ V TCN.',
        tag: 'Nhân vật',
        importance: 'high'
      },
      {
        id: 'fc-h6-1-6',
        front: 'Bộ chính sử đầu tiên của dân tộc Việt Nam có tên là gì và do ai biên soạn?',
        back: 'Bộ "Đại Việt sử ký", do Bảng nhãn Lê Văn Hưu hoàn thành vào năm 1272 dưới thời vua Trần Thánh Tông.',
        tag: 'Sử liệu Việt Nam',
        importance: 'high'
      }
    ]
  },

  // ==========================================
  // BÀI 3: NGUỒN GỐC LOÀI NGƯỜI
  // ==========================================
  {
    id: 'history-g6-lesson-3',
    lessonNumber: 3,
    semester: 1,
    title: 'Bài 3: Nguồn gốc loài người',
    titleEn: 'Lesson 3: Origins of Humanity',
    subtitle: 'Quá trình tiến hóa từ Vượn người thành Người tinh khôn và dấu tích người tối cổ tại Việt Nam',
    sgkReference: 'Bài 3 - SGK Lịch sử & Địa lí 6 (Bộ GD&ĐT)',
    author: 'Hội đồng Khoa học Khảo cổ học THCS',
    readTime: '7 phút',

    page1: {
      headerTitle: 'TRANG 1: HỆ THỐNG TIẾN HÓA CỦA LOÀI NGƯỜI & KHẢO CỔ HỌC',
      mainConcept: 'Loài người có nguồn gốc từ một loài vượn cổ sống cách ngày nay khoảng 5-6 triệu năm. Trải qua hàng triệu năm lao động cải tạo tự nhiên, vượn người đã tiến hóa thành Người tối cổ và Người tinh khôn.',
      coreKnowledge: [
        {
          sectionTitle: '1. Ba chặng đường tiến hóa của loài người',
          bullets: [
            'Vượn người (khoảng 5 - 6 triệu năm trước): Đi bằng hai chi sau, hai chi trước biết cầm nắm, thể tích não khoảng 400 - 500 cm³.',
            'Người tối cổ (khoảng 4 triệu năm trước): Đứng thẳng hoàn toàn, biết ghè đẽo đá thô sơ làm công cụ, tìm ra lửa và giữ lửa để sưởi ấm, nấu chín thức ăn, thể tích não 850 - 1100 cm³.',
            'Người tinh khôn (khoảng 15 vạn năm trước): Cấu tạo cơ thể hoàn thiện như người ngày nay, biết mài nhẵn công cụ đá, chế tạo cung tên, gốm sứ và có tiếng nói phát triển, thể tích não khoảng 1400 cm³.'
          ]
        },
        {
          sectionTitle: '2. Dấu tích Người tối cổ trên đất nước Việt Nam',
          bullets: [
            'Các nhà khảo cổ học đã tìm thấy răng hóa thạch của Người tối cổ tại hang Thẩm Khuyên, Thẩm Hai (Lạng Sơn) có niên đại 40 - 30 vạn năm trước.',
            'Công cụ đá ghè đẽo thô sơ được phát hiện tại Núi Đọ (Thanh Hóa), Xuân Lộc (Đồng Nai), và đặc biệt là Rộc Tủng, Gò Đá (An Khê - Gia Lai) có niên đại khoảng 80 vạn năm trước.',
            'Chứng minh Việt Nam là một trong những cái nôi xuất hiện con người sớm nhất của khu vực Đông Nam Á và thế giới.'
          ]
        }
      ],
      chronologyTimeline: [
        { time: '6 triệu năm trước', event: 'Vượn cổ xuất hiện chủ yếu ở Đông Phi và Tây Á' },
        { time: '4 triệu năm trước', event: 'Người tối cổ (Homo erectus) hình thành và di cư rộng khắp' },
        { time: '80 vạn năm trước', event: 'Dấu tích công cụ đá thô sơ tại An Khê (Gia Lai, Việt Nam)' },
        { time: '15 vạn năm trước', event: 'Người tinh khôn (Homo sapiens) xuất hiện hoàn thiện' }
      ]
    },

    page2: {
      headerTitle: 'TRANG 2: TƯ LIỆU MỞ RỘNG, BẢNG ĐỐI CHIẾU & CÂU HỎI TỰ LUYỆN',
      historicalQuotes: [
        {
          source: 'Ph.Ăng-ghen - Tác phẩm "Tác dụng của lao động trong sự chuyển biến từ vượn thành người"',
          quote: '"Lao động đã sáng tạo ra chính bản thân con người."',
          context: 'Lao động và chế tạo công cụ chính là nhân tố quyết định trực tiếp biến đổi bộ não, bàn tay và tư thế đứng thẳng của con người.'
        }
      ],
      comparisonTable: {
        headers: ['Tiêu chí', 'Người tối cổ (Homo erectus)', 'Người tinh khôn (Homo sapiens)'],
        rows: [
          ['Niên đại xuất hiện', 'Khoảng 4 triệu năm trước', 'Khoảng 15 vạn năm trước'],
          ['Tư thế & hình dáng', 'Đi đứng thẳng, trán thấp vát về sau, còn lớp lông mỏng', 'Hình dáng thanh thoát, trán cao, mặt phẳng, hoàn toàn như người ngày nay'],
          ['Thể tích hộp sọ', 'Khoảng 850 - 1100 cm³', 'Khoảng 1400 cm³ (phát triển tư duy trừu tượng)'],
          ['Công cụ lao động', 'Đá ghè đẽo thô sơ (rìu tay, mảnh tước)', 'Đá mài nhẵn lưỡi, đục lỗ tra cán, cung tên, đồ gốm'],
          ['Tổ chức xã hội', 'Bầy người nguyên thủy (sống theo bầy 20-30 người)', 'Thị tộc và bộ lạc (chung huyết thống, phân công lao động rõ ràng)']
        ]
      },
      goldenRules: [
        'Lao động là điều kiện căn bản đầu tiên của toàn bộ đời sống con người, thúc đẩy sự tiến hóa sinh học và xã hội.',
        'Việt Nam tự hào sở hữu những dấu tích khảo cổ hàng đầu Đông Nam Á khẳng định vị thế cái nôi nhân loại.'
      ],
      reviewQuestions: [
        '1. Hãy nêu các giai đoạn phát triển từ Vượn người thành Người tinh khôn.',
        '2. Việc phát minh ra lửa có ý nghĩa to lớn như thế nào đối với Người tối cổ?',
        '3. Bằng chứng nào chứng minh Người tối cổ từng sinh sống trên lãnh thổ Việt Nam?',
        '4. Phân tích nhận định của Ăng-ghen: "Lao động đã sáng tạo ra chính bản thân con người".'
      ]
    },

    mindmap: {
      centralTheme: 'NGUỒN GỐC LOÀI NGƯỜI',
      themeDescription: 'Hành trình hàng triệu năm vượt thoát tự nhiên',
      branches: [
        {
          id: 'b3-stages',
          title: 'Giai đoạn tiến hóa',
          color: 'from-amber-600 to-red-600',
          icon: 'Flame',
          subBranches: [
            { title: 'Vượn người', detail: '5-6 triệu năm trước, đi 2 chân, não 400-500 cm³', keywords: ['Khởi đầu', 'Đông Phi'] },
            { title: 'Người tối cổ', detail: '4 triệu năm trước, đứng thẳng, ghè đá, dùng lửa', keywords: ['Núi Đọ', 'Thẩm Khuyên'] },
            { title: 'Người tinh khôn', detail: '15 vạn năm trước, cấu tạo hoàn chỉnh, công cụ mài nhẵn', keywords: ['Homo sapiens', 'Thị tộc'] }
          ]
        },
        {
          id: 'b3-factors',
          title: 'Động lực tiến hóa',
          color: 'from-blue-600 to-teal-600',
          icon: 'Target',
          subBranches: [
            { title: 'Lao động sản xuất', detail: 'Chế tạo công cụ biến đổi bàn tay và vỏ não', keywords: ['Ăng-ghen', 'Sáng tạo'] },
            { title: 'Phát minh ra lửa', detail: 'Nấu chín thức ăn, sưởi ấm, xua đuổi dã thú hung dữ', keywords: ['Bước ngoặt', 'Sinh tồn'] },
            { title: 'Ngôn ngữ giao tiếp', detail: 'Hình thành tiếng nói giúp truyền đạt kinh nghiệm tập thể', keywords: ['Giao tiếp', 'Tư duy'] }
          ]
        },
        {
          id: 'b3-vietnam',
          title: 'Dấu tích tại Việt Nam',
          color: 'from-emerald-600 to-green-700',
          icon: 'Landmark',
          subBranches: [
            { title: 'An Khê (Gia Lai)', detail: 'Rìu tay đá thô sơ niên đại 80 vạn năm trước', keywords: ['80 vạn năm', 'Rìu tay'] },
            { title: 'Thẩm Khuyên, Thẩm Hai', detail: 'Răng hóa thạch Người tối cổ (Lạng Sơn)', keywords: ['Hóa thạch', 'Lạng Sơn'] },
            { title: 'Núi Đọ (Thanh Hóa)', detail: 'Hàng ngàn mảnh tước ghè đẽo của Người tối cổ', keywords: ['Thanh Hóa', 'Công cụ'] }
          ]
        }
      ]
    },

    sketchnote: {
      title: 'Sketchnote Bài 3: Nguồn gốc loài người',
      badge: 'BẢN ĐỒ TIẾN HÓA VÀ LAO ĐỘNG',
      quote: 'Lao động sáng tạo ra con người (Ph.Ăng-ghen)',
      timeline: [
        { year: '6 triệu năm', event: 'Vượn người biết đi bằng hai chân sau' },
        { year: '80 vạn năm', event: 'Người tối cổ xuất hiện tại An Khê (Gia Lai, VN)' },
        { year: '15 vạn năm', event: 'Người tinh khôn làm chủ hoàn toàn Trái Đất' }
      ],
      keyFigures: [
        { name: 'Người tối cổ An Khê', role: 'Dấu tích cổ xưa nhất tại VN', achievement: 'Để lại bộ công cụ rìu tay bằng đá cuội niên đại 800.000 năm' },
        { name: 'Người tinh khôn Thẩm Ồm', role: 'Khảo cổ Nghệ An', achievement: 'Đại diện cho bước nhảy vọt về tư duy và kỹ thuật chế tác' }
      ],
      highlights: [
        '🔥 Lửa là bước ngoặt vĩ đại giải phóng con người khỏi bóng tối tự nhiên.',
        '🔨 Công cụ lao động chuyển từ: Ghè đẽo thô sơ ➜ Mài nhẵn lưỡi ➜ Tra cán & Chế tạo gốm.',
        '🇻🇳 Việt Nam nằm trong vùng trung tâm khởi nguồn con người ở Đông Nam Á.'
      ],
      takeaway: 'Nhờ có lao động không ngừng nghỉ mà vượn cổ đã hóa thành con người có trí tuệ.'
    },

    flashcards: [
      {
        id: 'fc-h6-3-1',
        front: 'Người tối cổ xuất hiện vào khoảng thời gian nào?',
        back: 'Khoảng 4 triệu năm trước, là chặng tiếp theo sau Vượn người, có thể tích não từ 850 - 1100 cm³.',
        tag: 'Tiến hóa',
        importance: 'essential'
      },
      {
        id: 'fc-h6-3-2',
        front: 'Phát minh quan trọng nhất giúp Người tối cổ thay đổi điều kiện sống là gì?',
        back: 'Phát minh ra lửa và biết giữ lửa nhân tạo để sưởi ấm, nướng chín thức ăn và xua đuổi thú dữ.',
        tag: 'Bước ngoặt',
        importance: 'essential'
      },
      {
        id: 'fc-h6-3-3',
        front: 'Người tinh khôn xuất hiện vào khoảng thời gian nào và có gì khác Người tối cổ?',
        back: 'Xuất hiện khoảng 15 vạn năm trước. Khác biệt: Trán cao, mặt phẳng, lông tiêu biến, não 1400 cm³, biết mài đá và chế tạo cung tên.',
        tag: 'Tiến hóa',
        importance: 'essential'
      },
      {
        id: 'fc-h6-3-4',
        front: 'Dấu tích Người tối cổ ở An Khê (Gia Lai) có niên đại bao nhiêu năm?',
        back: 'Khoảng 80 vạn năm (800.000 năm) trước, gồm nhiều công cụ đá ghè đẽo và rìu tay thô sơ.',
        tag: 'Khảo cổ học VN',
        importance: 'high'
      },
      {
        id: 'fc-h6-3-5',
        front: 'Các di tích răng hóa thạch của Người tối cổ tại Việt Nam được tìm thấy ở đâu?',
        back: 'Tại hang Thẩm Khuyên và Thẩm Hai thuộc tỉnh Lạng Sơn, niên đại khoảng 40 - 30 vạn năm trước.',
        tag: 'Khảo cổ học VN',
        importance: 'high'
      },
      {
        id: 'fc-h6-3-6',
        front: 'Nhân tố quyết định biến Vượn người thành Người là gì?',
        back: 'Lao động sản xuất và chế tạo công cụ (như luận điểm nổi tiếng của triết gia Ph.Ăng-ghen).',
        tag: 'Quy luật',
        importance: 'essential'
      }
    ]
  },

  // ==========================================
  // BÀI 17: BƯỚC NGOẶT ĐẦU THẾ KỶ X & BẠCH ĐẰNG 938
  // ==========================================
  {
    id: 'history-g6-lesson-17',
    lessonNumber: 17,
    semester: 2,
    title: 'Bài 17: Bước ngoặt lịch sử đầu thế kỷ X & Chiến thắng Bạch Đằng năm 938',
    titleEn: 'Lesson 17: The 10th Century Turning Point & The Great Bach Dang Victory 938',
    subtitle: 'Khúc Thừa Dụ giành quyền tự chủ và thiên tài quân sự Ngô Quyền chấm dứt hơn 1000 năm Bắc thuộc',
    sgkReference: 'Bài 17 - SGK Lịch sử & Địa lí 6 (Bộ GD&ĐT)',
    author: 'Viện Lịch sử Quân sự Việt Nam & THCS',
    readTime: '8 phút',

    page1: {
      headerTitle: 'TRANG 1: HỆ THỐNG HÓA DIỄN BIẾN LỊCH SỬ THẾ KỶ X',
      mainConcept: 'Thế kỷ X là thế kỷ bản lề của lịch sử Việt Nam, đánh dấu quá trình từ tự chủ cục bộ đến độc lập hoàn toàn, kết tinh rực rỡ trong trận đại thắng Bạch Đằng năm 938 của anh hùng dân tộc Ngô Quyền.',
      coreKnowledge: [
        {
          sectionTitle: '1. Họ Khúc và Dương Đình Nghệ xây nền tự chủ',
          bullets: [
            'Năm 905: Khúc Thừa Dụ lãnh đạo nhân dân nổi dậy đánh chiếm phủ Tống Bình (Hà Nội), tự xưng Tiết độ sứ, mở đầu nền độc lập tự chủ.',
            'Chính sách của Khúc Hạo: "Chính sự cốt chuộng khoan dung, giản dị, nhân dân đều được yên vui", chia đặt lại các lộ, phủ, châu, bình định thuế khóa.',
            'Năm 931: Dương Đình Nghệ đem quân từ Thanh Hóa tiến ra bao vây hạ thành Đại La, đập tan quân tiếp viện Nam Hán, củng cố nền tự chủ.'
          ]
        },
        {
          sectionTitle: '2. Chiến thắng Bạch Đằng lịch sử năm 938 của Ngô Quyền',
          bullets: [
            'Hoàn cảnh: Năm 937, Kiều Công Tiễn phản nghịch giết Dương Đình Nghệ rồi cầu viện vua Nam Hán. Ngô Quyền từ Ái Châu (Thanh Hóa) kéo quân ra Bắc diệt Tiễn và chuẩn bị kháng chiến.',
            'Kế sách độc đáo: Lợi dụng chế độ thủy triều lên xuống mạnh của sông Bạch Đằng, Ngô Quyền cho quân đẵn gỗ lim vạt nhọn, bịt sắt cắm ngầm dưới lòng sông.',
            'Diễn biến: Cuối năm 938, tướng giặc Lưu Hoằng Tháo kéo thuyền chiến vào cửa sông. Quân ta dùng thuyền nhẹ nhử giặc vượt qua bãi cọc khi thủy triều dâng cao. Khi triều rút nhanh, quân ta dốc toàn lực phản công, ép thuyền giặc va vào cọc nhọn vỡ nát. Tướng giặc Lưu Hoằng Tháo tử trận.'
          ]
        }
      ],
      chronologyTimeline: [
        { time: 'Năm 905', event: 'Khúc Thừa Dụ xưng Tiết độ sứ, đặt nền móng tự chủ' },
        { time: 'Năm 931', event: 'Dương Đình Nghệ đại phá quân Nam Hán ở thành Đại La' },
        { time: 'Năm 937', event: 'Kiều Công Tiễn phản trắc, cầu cứu quân xâm lược Nam Hán' },
        { time: 'Mùa đông 938', event: 'Chiến thắng Bạch Đằng vang dội, đập tan mộng xâm lược của quân Nam Hán' },
        { time: 'Năm 939', event: 'Ngô Quyền lên ngôi vua, xưng Ngô Vương, định đô ở Cổ Loa' }
      ]
    },

    page2: {
      headerTitle: 'TRANG 2: TƯ LIỆU SỬ HỌC, Ý NGHĨA LỊCH SỬ & CÂU HỎI TỰ LUYỆN',
      historicalQuotes: [
        {
          source: 'Sử gia Lê Văn Hưu - "Đại Việt sử ký" (1272)',
          quote: '"Tiền Ngô Vương có thể lấy quân mới nhóm họp của đất Việt ta mà đánh tan được trăm vạn quân của Lưu Hoằng Tháo, mở nước xưng vương, làm cho người phương Bắc không dám sang nữa. Có thể nói là một cơn thịnh nộ mà yên được dân, mưu giỏi mà đánh cũng giỏi vậy."',
          context: 'Lời bình bất hủ khẳng định tài năng quân sự kiệt xuất và công lao khai sáng nền độc lập của Ngô Quyền.'
        },
        {
          source: 'Sử gia Ngô Sĩ Liên - "Đại Việt sử ký toàn thư"',
          quote: '"Ngô Quyền cứu nước giúp dân, giết nghịch tặc, phá giặc mạnh, mở mang bờ cõi, chính thống nước ta lại tiếp nối."',
          context: 'Tôn vinh Ngô Quyền là vị "Vua của các vị vua" (Trung hưng đệ nhất tổ) của lịch sử dựng nước.'
        }
      ],
      comparisonTable: {
        headers: ['Tiêu chí', 'Khúc Thừa Dụ (905)', 'Ngô Quyền (938)'],
        rows: [
          ['Danh xưng chức vị', 'Tiết độ sứ (danh nghĩa quan chức nhà Đường)', 'Ngô Vương (Vua độc lập, bỏ hẳn chức Tiết độ sứ)'],
          ['Hình thức đấu tranh', 'Chớp thời cơ hòa bình nổi dậy', 'Chiến tranh quân sự vệ quốc quy mô lớn trên sông nước'],
          ['Tổ chức bộ máy', 'Giữ nguyên cơ cấu cũ, cải cách thuế khóa', 'Thiết lập triều đình độc lập, định kinh đô ở Cổ Loa'],
          ['Ý nghĩa lịch sử', 'Mở đầu thời kỳ giành quyền tự chủ', 'Chấm dứt hoàn toàn ách thống trị hơn 1000 năm Bắc thuộc']
        ]
      },
      goldenRules: [
        'Trận Bạch Đằng năm 938 là cột mốc chói lọi nhất chấm dứt hơn 10 thế kỷ Bắc thuộc (từ năm 179 TCN đến 938).',
        'Mưu lược lợi dụng địa hình tự nhiên và thủy triều sông nước là đỉnh cao nghệ thuật quân sự Việt Nam.'
      ],
      reviewQuestions: [
        '1. Trình bày ngắn gọn công lao của Khúc Thừa Dụ đối với lịch sử dân tộc đầu thế kỷ X.',
        '2. Ngô Quyền đã chủ động đón đánh quân xâm lược Nam Hán bằng kế sách độc đáo nào?',
        '3. Vì sao nói chiến thắng Bạch Đằng năm 938 là bước ngoặt vĩ đại của lịch sử nước ta?',
        '4. Việc Ngô Quyền chọn Cổ Loa làm kinh đô có ý nghĩa biểu tượng lịch sử gì?'
      ]
    },

    mindmap: {
      centralTheme: 'CHIẾN THẮNG BẠCH ĐẰNG 938',
      themeDescription: 'Bước ngoặt chấm dứt hơn 1000 năm Bắc thuộc',
      branches: [
        {
          id: 'b17-pre',
          title: 'Tiền đề tự chủ',
          color: 'from-amber-500 to-yellow-600',
          icon: 'Shield',
          subBranches: [
            { title: 'Khúc Thừa Dụ (905)', detail: 'Chiếm phủ Tống Bình, xưng Tiết độ sứ, đặt nền tự chủ', keywords: ['Năm 905', 'Khoan dung'] },
            { title: 'Khúc Hạo cải cách', detail: 'Chính sự khoan dung, giản dị, phân định lại thuế khóa và hộ khẩu', keywords: ['Cải cách', 'Yên dân'] },
            { title: 'Dương Đình Nghệ (931)', detail: 'Hạ thành Đại La, đánh tan quân viện binh Nam Hán', keywords: ['Đại La', 'Quân Nam Hán'] }
          ]
        },
        {
          id: 'b17-battle',
          title: 'Trận thủy chiến 938',
          color: 'from-blue-600 to-cyan-600',
          icon: 'Anchor',
          subBranches: [
            { title: 'Địa bàn Bạch Đằng', detail: 'Sông sâu, rừng rậm bao quanh, biên độ thủy triều lên xuống cực lớn', keywords: ['Thủy triều', 'Hải Phòng'] },
            { title: 'Bãi cọc ngầm lim', detail: 'Đẵn gỗ vạt nhọn bịt sắt, cắm ngầm zic-zac dưới lòng sông', keywords: ['Cọc ngầm', 'Bịt sắt'] },
            { title: 'Chiến thuật nhử địch', detail: 'Dùng thuyền nhẹ khiêu chiến khi nước lớn rồi dốc tổng lực phản công khi triều rút', keywords: ['Thuyền nhẹ', 'Triều rút'] }
          ]
        },
        {
          id: 'b17-meaning',
          title: 'Ý nghĩa vĩ đại',
          color: 'from-rose-600 to-red-700',
          icon: 'Trophy',
          subBranches: [
            { title: 'Chấm dứt Bắc thuộc', detail: 'Quét sạch hoàn toàn ách thống trị đô hộ kéo dài hơn 10 thế kỷ', keywords: ['1000 năm', 'Độc lập'] },
            { title: 'Mở kỷ nguyên độc lập', detail: 'Mở ra thời kỳ độc lập tự chủ lâu dài cho quốc gia Đại Việt', keywords: ['Ngô Vương', 'Cổ Loa'] },
            { title: 'Đỉnh cao quân sự', detail: 'Tấm gương sáng ngời về nghệ thuật quân sự lấy đoản binh thắng trường trận', keywords: ['Nghệ thuật', 'Thủy chiến'] }
          ]
        }
      ]
    },

    sketchnote: {
      title: 'Sketchnote Bài 17: Bước ngoặt lịch sử & Bạch Đằng 938',
      badge: 'THIÊN THU ĐỆ NHẤT THỦY CHIẾN',
      quote: 'Tiền Ngô Vương mưu giỏi mà đánh cũng giỏi vậy (Lê Văn Hưu)',
      timeline: [
        { year: '905', event: 'Khúc Thừa Dụ giành quyền tự chủ' },
        { year: '931', event: 'Dương Đình Nghệ đại thắng ở thành Đại La' },
        { year: '938', event: 'Đại thắng Bạch Đằng - Giết Lưu Hoằng Tháo' },
        { year: '939', event: 'Ngô Quyền xưng vương, đóng đô ở Cổ Loa' }
      ],
      keyFigures: [
        { name: 'Khúc Thừa Dụ', role: 'Khúc Tiên Chủ', achievement: 'Mở đầu thời kỳ tự chủ của dân tộc sau nghìn năm ngoại thuộc' },
        { name: 'Ngô Quyền (897 - 944)', role: 'Vị vua mở nền độc lập', achievement: 'Sáng tạo bãi cọc ngầm Bạch Đằng tiêu diệt hoàn toàn quân Nam Hán' }
      ],
      highlights: [
        '🪵 Bãi cọc gỗ lim bịt sắt: Vũ khí bí mật tạo nên chiến thắng vô tiền khoáng hậu.',
        '🌊 Thủy triều sông Bạch Đằng: Đồng minh tự nhiên được thiên tài quân sự vận dụng tài tình.',
        '👑 Ngô Quyền bỏ chức Tiết độ sứ, xưng vương, định đô ở Cổ Loa nối tiếp truyền thống An Dương Vương.'
      ],
      takeaway: 'Chiến thắng Bạch Đằng 938 khẳng định dứt khoát quyền sống độc lập, tự do muôn đời của dân tộc Việt Nam.'
    },

    flashcards: [
      {
        id: 'fc-h6-17-1',
        front: 'Khúc Thừa Dụ đã làm gì vào năm 905?',
        back: 'Nhân lúc nhà Đường suy yếu, ông lãnh đạo nhân dân nổi dậy chiếm phủ Tống Bình (Hà Nội), tự xưng Tiết độ sứ, giành quyền tự chủ cho đất nước.',
        tag: 'Thời kỳ tự chủ',
        importance: 'essential'
      },
      {
        id: 'fc-h6-17-2',
        front: 'Phương châm cai trị nổi tiếng của Khúc Hạo là gì?',
        back: '"Chính sự cốt chuộng khoan dung, giản dị, nhân dân đều được yên vui", thực hiện giảm nhẹ thuế khóa và bình định biên giới.',
        tag: 'Thời kỳ tự chủ',
        importance: 'high'
      },
      {
        id: 'fc-h6-17-3',
        front: 'Trước nguy cơ quân Nam Hán xâm lược năm 938, Ngô Quyền đã có kế sách mưu lược gì?',
        back: 'Lợi dụng chế độ thủy triều lên xuống mạnh của sông Bạch Đằng, cho đẵn gỗ lim vạt nhọn bịt sắt cắm ngầm thành bãi cọc để bẫy thuyền giặc.',
        tag: 'Quân sự',
        importance: 'essential'
      },
      {
        id: 'fc-h6-17-4',
        front: 'Ai là tướng giặc chỉ huy đạo quân Nam Hán bị tử trận trên sông Bạch Đằng năm 938?',
        back: 'Hoàng tử Lưu Hoằng Tháo (con trai vua Nam Hán Lưu Nghiễm).',
        tag: 'Nhân vật',
        importance: 'high'
      },
      {
        id: 'fc-h6-17-5',
        front: 'Chiến thắng Bạch Đằng năm 938 có ý nghĩa lịch sử to lớn như thế nào?',
        back: 'Chấm dứt hoàn toàn ách đô hộ hơn 1000 năm của phong kiến phương Bắc, mở ra kỷ nguyên độc lập tự chủ lâu dài cho dân tộc Việt Nam.',
        tag: 'Ý nghĩa lịch sử',
        importance: 'essential'
      },
      {
        id: 'fc-h6-17-6',
        front: 'Sau đại thắng năm 938, Ngô Quyền đã có hành động gì vào mùa xuân năm 939?',
        back: 'Ông xưng vương (Ngô Vương), bãi bỏ chức Tiết độ sứ phương Bắc, thiết lập triều đình mới và đóng đô tại thành Cổ Loa.',
        tag: 'Dựng nước',
        importance: 'essential'
      }
    ]
  }
];

// -------------------------------------------------------------
// HISTORY GRADE 6 EXAM QUESTION DATA ENGINE
// STRICT ADHERENCE TO PART 3 REQUIREMENTS:
// - Regular test: At least 15 MCQ + 2 True/False + 3 Drag & Drop (Total: 20 questions)
// - Midterm test: At least 20 MCQ + 5 True/False + 5 Drag & Drop (Total: 30 questions)
// - Final test: Exactly 25 MCQ + 10 True/False + 7 Drag & Drop (Total: 42 questions)
// -------------------------------------------------------------

export interface HistoryExtendedQuestion {
  question: string;
  type: 'mcq' | 'true_false' | 'drag_drop';
  // MCQ
  options?: string[];
  answerIndex?: number;
  // TRUE/FALSE
  isTrue?: boolean;
  // DRAG & DROP
  dragPairs?: {
    id: string;
    item: string;
    correctSlot: string;
  }[];
  slots?: string[];

  hint: string;
  explanation: string;
}

export interface HistoryStandardQuiz {
  id: string;
  title: string;
  titleEn: string;
  grade: number;
  semester: 1 | 2;
  subject: string;
  subjectVi: string;
  category: 'social';
  testType: 'regular' | 'midterm' | 'final';
  durationMinutes: number;
  xpReward: number;
  description: string;
  descriptionEn: string;
  questions: HistoryExtendedQuestion[];
}
