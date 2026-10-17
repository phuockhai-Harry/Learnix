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
  // BÀI 2: THỜI GIAN TRONG LỊCH SỬ
  // ==========================================
  {
    id: 'history-g6-lesson-2',
    lessonNumber: 2,
    semester: 1,
    title: 'Bài 2: Dựa vào đâu để biết & phục dựng lại lịch sử?',
    titleEn: 'Lesson 2: Sources of History - How We Reconstruct the Past',
    subtitle: 'Tư liệu truyền miệng, tư liệu chữ viết, tư liệu hiện vật và tư liệu gốc',
    sgkReference: 'Bài 2 - SGK Lịch sử & Địa lí 6 (Bộ GD&ĐT - Cánh Diều, Kết nối tri thức, Chân trời sáng tạo)',
    author: 'Hội đồng Khoa học Sử học THCS',
    readTime: '5 phút',

    page1: {
      headerTitle: 'TRANG 1: CÁC NGUỒN TƯ LIỆU LỊCH SỬ THỜI CỔ ĐẠI & HIỆN ĐẠI',
      mainConcept: 'Muốn biết và phục dựng lại lịch sử một cách chân thực, chúng ta phải tìm kiếm, khai quật và giải mã các nguồn tư liệu lịch sử do con người thời xưa để lại.',
      coreKnowledge: [
        {
          sectionTitle: '1. Các nguồn tư liệu lịch sử chính',
          bullets: [
            'Tư liệu truyền miệng: Những câu chuyện cổ tích, truyền thuyết, sử thi được truyền từ đời này sang đời khác bằng lời nói.',
            'Tư liệu chữ viết: Những bản ghi chép, sách cổ, văn bia, tài liệu hành chính, giáp cốt văn khắc trên đá, đất sét hoặc giấy cổ.',
            'Tư liệu hiện vật: Những di tích, công trình kiến trúc, công cụ lao động, vũ khí, xương cổ, đồ trang sức được tìm thấy qua khai quật khảo cổ.',
            'Tư liệu gốc: Tư liệu cung cấp những thông tin trực tiếp, xuất hiện đúng vào thời điểm xảy ra sự kiện lịch sử (có giá trị xác thực cao nhất).'
          ]
        }
      ],
      chronologyTimeline: [
        { time: 'Thời cổ đại', event: 'Khắc vạch trên vách hang động và khắc chữ trên giáp cốt (tư liệu hiện vật & chữ viết sớm)' },
        { time: 'Năm 1272', event: 'Biên soạn "Đại Việt sử ký" - tư liệu chữ viết lịch sử Việt Nam' }
      ]
    },

    page2: {
      headerTitle: 'TRANG 2: BẢNG SO SÁNH GIÁ TRỊ TƯ LIỆU & CÂU HỎI LẬP LUẬN',
      historicalQuotes: [
        {
          source: 'Trích SGK Lịch sử 6',
          quote: '"Tư liệu gốc là bằng chứng xác thực nhất để khôi phục sự thật lịch sử."',
          context: 'Khẳng định tầm quan trọng hàng đầu của việc tìm kiếm tư liệu gốc trong nghiên cứu lịch sử.'
        }
      ],
      comparisonTable: {
        headers: ['Loại tư liệu', 'Hình thức', 'Giá trị'],
        rows: [
          ['Tư liệu truyền miệng', 'Cổ tích, truyền thuyết', 'Lưu giữ ký ức dân gian'],
          ['Tư liệu chữ viết', 'Sách sử, văn bia', 'Cụ thể về ngày tháng'],
          ['Tư liệu hiện vật', 'Đồ vật, di tích cổ', 'Bằng chứng vật chất trung thực'],
          ['Tư liệu gốc', 'Tài liệu ra đời cùng sự kiện', 'Xác thực và tin cậy nhất']
        ]
      },
      goldenRules: [
        'Nhà sử học giống như một nhà điều tra: phải kết hợp nhiều nguồn tư liệu để dựng lại sự thật.'
      ],
      reviewQuestions: [
        '1. Hãy kể tên 3 loại tư liệu lịch sử chủ yếu và cho ví dụ cụ thể.',
        '2. Tại sao tư liệu gốc lại được coi là bằng chứng xác thực nhất?'
      ]
    },

    mindmap: {
      centralTheme: 'DỰA VÀO ĐÂU ĐỂ BIẾT & PHỤC DỰNG LẠI LỊCH SỬ?',
      themeDescription: 'Các nguồn tư liệu lịch sử',
      branches: [
        {
          id: 'b2-oral',
          title: 'TƯ LIỆU TRUYỀN MIỆNG',
          color: 'from-blue-500 to-cyan-600',
          icon: 'BookOpen',
          subBranches: [
            { title: 'Truyện cổ tích', detail: 'Truyền tụng dân gian', keywords: ['Cổ tích'] },
            { title: 'Truyền thuyết', detail: 'Thần thoại, ca dao', keywords: ['Truyền thuyết'] },
            { title: 'Thánh Gióng, Sơn Tinh', detail: 'Nhân vật sử thi', keywords: ['Sử thi'] }
          ]
        },
        {
          id: 'b2-written',
          title: 'TƯ LIỆU CHỮ VIẾT',
          color: 'from-emerald-500 to-teal-600',
          icon: 'FileText',
          subBranches: [
            { title: 'Sách cổ', detail: 'Sử thư, chiếu chỉ', keywords: ['Sách cổ'] },
            { title: 'Văn bản', detail: 'Văn bia, tài liệu', keywords: ['Văn bản'] },
            { title: 'Ký tự, bia mộ', detail: 'Khắc đá, mai rùa', keywords: ['Bia đá'] }
          ]
        },
        {
          id: 'b2-artifact',
          title: 'TƯ LIỆU HIỆN VẬT',
          color: 'from-amber-500 to-orange-600',
          icon: 'Landmark',
          subBranches: [
            { title: 'Di tích', detail: 'Công trình cổ', keywords: ['Di tích'] },
            { title: 'Đồ vật cổ', detail: 'Công cụ, vũ khí', keywords: ['Đồ vật cổ'] },
            { title: 'Trống đồng, bia đá', detail: 'Di vật khảo cổ', keywords: ['Trống đồng'] }
          ]
        },
        {
          id: 'b2-primary',
          title: 'TƯ LIỆU GỐC',
          color: 'from-rose-500 to-red-600',
          icon: 'Sparkles',
          subBranches: [
            { title: 'Bằng chứng', detail: 'Nguồn trực tiếp', keywords: ['Bằng chứng'] },
            { title: 'Xác thực nhất', detail: 'Độ tin cậy cao', keywords: ['Xác thực'] },
            { title: 'Có từ thời điểm xảy ra', detail: 'Gốc ban đầu', keywords: ['Thời điểm'] }
          ]
        }
      ]
    },

    sketchnote: {
      title: 'Sketchnote Bài 2: Thời gian trong Lịch sử',
      badge: 'SỔ TAY HÌNH ẢNH THỜI GIAN',
      quote: 'Thời gian là vàng bạc - Lịch sử là cuộn phim của thời gian',
      timeline: [
        { year: 'Thời cổ đại', event: 'Phát minh đồng hồ cát & đồng hồ mặt trời' },
        { year: 'Năm 1 SCN', event: 'Mốc quy ước bắt đầu Công lịch toàn cầu' },
        { year: 'Hiện đại', event: 'Đồng hồ nguyên tử & lịch số hóa chính xác tuyệt đối' }
      ],
      keyFigures: [
        { name: 'Giáo hoàng Gregory XIII', role: 'Người cải cách Công lịch (1582)', achievement: 'Ban hành Lịch Gregory chuẩn xác dùng toàn thế giới ngày nay' }
      ],
      highlights: [
        '⏳ 3 loại lịch chính: Âm lịch (Mặt Trăng), Dương lịch (Mặt Trời), Công lịch (Thống nhất toàn cầu).',
        '📅 Quy đổi nhanh: 1 Thập kỷ = 10 năm, 1 Thế kỷ = 100 năm, 1 Thiên niên kỷ = 1000 năm.',
        '📌 Mốc TCN đếm ngược (năm lớn xảy ra trước), Mốc SCN đếm tiến.'
      ],
      takeaway: 'Biết tính thời gian giúp ta kết nối các mốc lịch sử thành một dòng chảy tri thức liên tục và có hệ thống.'
    },

    flashcards: [
      {
        id: 'fc-h6-2-1',
        front: 'Vì sao cần phải xác định thời gian trong lịch sử?',
        back: 'Vì lịch sử là chuỗi sự kiện diễn ra nối tiếp nhau. Xác định thời gian giúp sắp xếp sự kiện đúng trình tự và hiểu được quy luật phát triển.',
        tag: 'Ý nghĩa',
        importance: 'essential'
      },
      {
        id: 'fc-h6-2-2',
        front: 'Âm lịch được tính dựa trên chu kỳ thiên văn nào?',
        back: 'Âm lịch được tính dựa trên chu kỳ chuyển động của Mặt Trăng quay xung quanh Trái Đất.',
        tag: 'Các loại Lịch',
        importance: 'essential'
      },
      {
        id: 'fc-h6-2-3',
        front: 'Dương lịch và Công lịch khác nhau thế nào?',
        back: 'Dương lịch tính theo Trái Đất quay quanh Mặt Trời. Công lịch là Dương lịch đã được thống nhất chuẩn hóa dùng làm lịch chính thức toàn thế giới.',
        tag: 'Các loại Lịch',
        importance: 'essential'
      },
      {
        id: 'fc-h6-2-4',
        front: 'Thế kỷ là bao nhiêu năm? Năm 2026 thuộc thế kỷ mấy?',
        back: '1 Thế kỷ = 100 năm. Năm 2026 thuộc Thế kỷ XXI (21), kéo dài từ năm 2001 đến hết năm 2100.',
        tag: 'Quy đổi thời gian',
        importance: 'essential'
      },
      {
        id: 'fc-h6-2-5',
        front: 'TCN và SCN nghĩa là gì?',
        back: 'TCN là Trước Công nguyên (trước Năm 1). SCN là Sau Công nguyên (từ Năm 1 trở đi, lấy mốc năm sinh tương truyền của Chúa Giê-su).',
        tag: 'Mốc lịch sử',
        importance: 'essential'
      },
      {
        id: 'fc-h6-2-6',
        front: 'Hãy kể tên 3 loại dụng cụ đo thời gian của người cổ đại.',
        back: 'Đồng hồ mặt trời (dựa vào bóng nắng), đồng hồ cát (dựa vào dòng chảy của cát) và đồng hồ nước.',
        tag: 'Dụng cụ đo',
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
  },

  // ==========================================
  // BÀI 6 (CHƯƠNG 3): XÃ HỘI CỔ ĐẠI & VĂN MINH
  // ==========================================
  {
    id: 'history-g6-lesson-6',
    lessonNumber: 6,
    semester: 1,
    title: 'Bài 6: Các nền văn minh Cổ đại (Chương 3)',
    titleEn: 'Lesson 6: Ancient Civilizations (Chapter 3)',
    subtitle: 'Chương 3: Sự ra đời nhà nước, chữ viết, toán học và các di sản kiến trúc kỳ vĩ phương Đông & phương Tây',
    sgkReference: 'Bài 6 - SGK Lịch sử & Địa lí 6 (GDPT 2018 - Bộ GD&ĐT)',
    author: 'Viện Nghiên cứu Văn minh Cổ đại THCS',
    readTime: '8 phút',

    page1: {
      headerTitle: 'TRANG 1: TỔNG HÓA VĂN MINH CỔ ĐẠI PHƯƠNG ĐÔNG VÀ PHƯƠNG TÂY',
      mainConcept: 'Thế giới cổ đại chứng kiến bước nhảy vọt vĩ đại của loài người: từ xã hội công xã nguyên thủy bước sang xã hội có phân hóa giai cấp, nhà nước, chữ viết và những thành tựu văn hóa đỉnh cao.',
      coreKnowledge: [
        {
          sectionTitle: '1. Văn minh Phương Đông (Ai Cập, Lưỡng Hà, Ấn Độ, Trung Quốc)',
          bullets: [
            'Điều kiện tự nhiên: Hình thành trên lưu vực các con sông lớn (sông Nile, sông Tigris - Euphrates, sông Hằng - sông Ấn, sông Hoàng Hà). Đất đai phù sa màu mỡ, phát triển nông nghiệp trồng lúa.',
            'Thể chế chính trị: Nhà nước chuyên chế cổ đại do Vua (Pharaon, Ensi, Thiên tử) đứng đầu nắm toàn bộ quyền lực tối cao.',
            'Thành tựu nổi bật: Chữ tượng hình, số 0 (Ấn Độ), lịch Âm Dương, Kim tự tháp Ai Cập, Vạn Lý Trường Thành, Bộ luật Hammurabi (Lưỡng Hà).'
          ]
        },
        {
          sectionTitle: '2. Văn minh Phương Tây (Hy Lạp và La Mã Cổ đại)',
          bullets: [
            'Điều kiện tự nhiên: Bán đảo Nam Âu, nhiều vùng đồi núi, hải cảng tự nhiên thuận lợi phát triển thương nghiệp hàng hải và thủ công nghiệp.',
            'Thể chế chính trị: Thị quốc (Thành quốc) dân chủ Aten (chủ xưởng, thương nhân làm chủ) và Cộng hòa La Mã.',
            'Thành tựu nổi bật: Hệ thống chữ cái Latinh, Dương lịch, hình học Euclid, triết học Socrate/Platon, Đấu trường Colosseum, đền Parthenon.'
          ]
        }
      ],
      chronologyTimeline: [
        { time: 'Khoảng 3200 TCN', event: 'Nhà nước Ai Cập cổ đại và Lưỡng Hà hình thành bên lưu vực các sông lớn' },
        { time: 'Khoảng 2500 TCN', event: 'Văn minh sông Ấn (Harappa & Mohenjo-Daro) ra đời' },
        { time: 'Thế kỷ VIII TCN', event: 'Các thành quốc Hy Lạp hình thành; Đế chế La Mã trỗi dậy' },
        { time: 'Năm 476', event: 'Đế chế Tây La Mã sụp đổ, kết thúc thời kỳ cổ đại Phương Tây' }
      ]
    },

    page2: {
      headerTitle: 'TRANG 2: TƯ LIỆU SỬ HỌC, BẢNG ĐỐI CHIẾU & CÂU HỎI BỔ TRỢ',
      historicalQuotes: [
        {
          source: 'Nhà sử học Hê-rô-đốt (Herodotus)',
          quote: '"Ai Cập là quà tặng của sông Nile."',
          context: 'Phù sa hàng năm của dòng sông Nile đã nuôi sống cư dân Ai Cập và tạo tiền đề xây dựng nền văn minh Kim tự tháp rực rỡ.'
        }
      ],
      comparisonTable: {
        headers: ['Tiêu chí', 'Văn minh Phương Đông Cổ đại', 'Văn minh Phương Tây Cổ đại'],
        rows: [
          ['Cơ sở kinh tế', 'Nông nghiệp lúa nước lưu vực sông lớn', 'Thủ công nghiệp & Thương nghiệp hàng hải Địa Trung Hải'],
          ['Thể chế nhà nước', 'Quân chủ chuyên chế cổ đại (Vua quyết định tất cả)', 'Thị quốc dân chủ chủ nô (Đại hội nhân dân, Hội đồng 500)'],
          ['Chữ viết', 'Chữ tượng hình (khắc trên đá, đất sét, vỏ cây)', 'Hệ thống chữ cái A, B, C (Latinh & Hy Lạp)'],
          ['Di sản kiến trúc', 'Kim tự tháp, Vạn Lý Trường Thành, Đền Lương Sơn', 'Đấu trường Colosseum, Đền Parthenon, Khải Hoàn Môn']
        ]
      },
      goldenRules: [
        'Văn minh phương Đông mạnh về nông nghiệp và quyền lực tập trung; văn minh phương Tây mạnh về hàng hải và tư duy dân chủ sơ khai.',
        'Sự phát minh ra chữ viết và lịch pháp là hai chiếc chìa khóa vàng mở cửa thời kỳ lịch sử văn minh của nhân loại.'
      ],
      reviewQuestions: [
        '1. Hãy so sánh điều kiện tự nhiên ảnh hưởng đến nền kinh tế phương Đông và phương Tây cổ đại.',
        '2. Tại sao Herodotus lại nói "Ai Cập là quà tặng của sông Nile"?',
        '3. Hãy kể tên 3 di sản kiến trúc cổ đại còn tồn tại đến ngày nay.',
        '4. Phân tích ý nghĩa của việc phát minh ra chữ viết đối với văn minh loài người.'
      ]
    },

    mindmap: {
      centralTheme: 'XÃ HỘI CỔ ĐẠI & VĂN MINH NHÂN LOẠI',
      themeDescription: 'Chương 3: Sự hình thành Nhà nước, Chữ viết và Di sản Kiến trúc',
      branches: [
        {
          id: 'b6-orient',
          title: 'Văn minh Phương Đông',
          color: 'from-amber-500 to-orange-600',
          icon: 'Landmark',
          subBranches: [
            { title: 'Địa bàn lưu vực sông', detail: 'Sông Nile (Ai Cập), Lưỡng Hà, Sông Hằng (Ấn Độ), Hoàng Hà (Trung Quốc)', keywords: ['Sông Nile', 'Phù sa'] },
            { title: 'Quân chủ chuyên chế', detail: 'Vua nắm toàn quyền tối cao điều hành thủy lợi và quân đội', keywords: ['Pharaon', 'Chuyên chế'] },
            { title: 'Thành tựu cốt lõi', detail: 'Kim tự tháp, chữ tượng hình, phát minh số 0, bộ luật Hammurabi', keywords: ['Kim tự tháp', 'Số 0'] }
          ]
        },
        {
          id: 'b6-occident',
          title: 'Văn minh Phương Tây',
          color: 'from-blue-600 to-indigo-600',
          icon: 'Globe',
          subBranches: [
            { title: 'Thành quốc & Hàng hải', detail: 'Địa Trung Hải, buôn bán đường biển, kinh tế công thương', keywords: ['Aten', 'Địa Trung Hải'] },
            { title: 'Dân chủ chủ nô', detail: 'Đại hội nhân dân bầu ra cơ quan quản lý, quyền công dân nam', keywords: ['Dân chủ', 'Cộng hòa'] },
            { title: 'Di sản vượt thời gian', detail: 'Chữ cái Latinh (A,B,C), Dương lịch, Colosseum, Hình học Euclid', keywords: ['Chữ Latinh', 'Colosseum'] }
          ]
        },
        {
          id: 'b6-legacy',
          title: 'Di sản Văn hóa Cốt lõi',
          color: 'from-emerald-500 to-teal-600',
          icon: 'Sparkles',
          subBranches: [
            { title: 'Chữ viết & Lịch pháp', detail: 'Nền tảng ghi chép tri thức, đo lường thời gian lao động sản xuất', keywords: ['Tri thức', 'Lịch pháp'] },
            { title: 'Toán học & Triết học', detail: 'Giải số, hình học không gian, các học thuyết triết học đỉnh cao', keywords: ['Toán học', 'Triết học'] },
            { title: 'Kiến trúc kỳ vĩ', detail: 'Những công trình đá khổng lồ thách thức thời gian hàng ngàn năm', keywords: ['Kiến trúc', 'Kỳ quan'] }
          ]
        }
      ]
    },

    sketchnote: {
      title: 'Sketchnote Bài 6: Các nền văn minh Cổ đại',
      badge: 'BẢN ĐỒ TƯ DUY VĂN MINH CỔ ĐẠI',
      quote: 'Kiến thức cổ đại là ngọn hải đăng soi sáng nền văn minh hiện đại',
      timeline: [
        { year: '3200 TCN', event: 'Hình thành nhà nước Ai Cập & Lưỡng Hà' },
        { year: '2500 TCN', event: 'Văn minh Sông Ấn rực rỡ' },
        { year: '800 TCN', event: 'Đô thị Hy Lạp và La Mã phát triển' }
      ],
      keyFigures: [
        { name: 'Hammurabi', role: 'Vua Lưỡng Hà', achievement: 'Ban hành bộ luật thành văn cổ nhất "Mắt trả mắt, răng trả răng"' },
        { name: 'Euclid', role: 'Nhà toán học Hy Lạp', achievement: 'Cha đẻ của môn Hình học được giảng dạy khắp thế giới ngày nay' }
      ],
      highlights: [
        '📐 Phương Đông phát minh số 0 và phép tính; Phương Tây phát minh hệ thống hình học và chữ Latinh.',
        '🏛️ Kim tự tháp Ai Cập và Đấu trường Colosseum là hai đại diện kiến trúc cổ đại lớn nhất thế giới.',
        '📜 Luật Hammurabi và thể chế Dân chủ Aten đặt nền móng cho pháp luật và quản trị ngày nay.'
      ],
      takeaway: 'Văn minh cổ đại là thành quả lao động và trí tuệ ngàn đời của con người phương Đông lẫn phương Tây.'
    },

    flashcards: [
      {
        id: 'fc-h6-6-1',
        front: 'Ai Cập cổ đại được hình thành bên lưu vực con sông nào?',
        back: 'Sông Nile - dòng sông mang lại lượng phù sa màu mỡ nuôi sống toàn bộ cư dân Ai Cập.',
        tag: 'Phương Đông',
        importance: 'essential'
      },
      {
        id: 'fc-h6-6-2',
        front: 'Phát minh toán học quan trọng nhất của cư dân Ấn Độ cổ đại là gì?',
        back: 'Phát minh ra hệ thống 10 chữ số và đặc biệt là con số 0.',
        tag: 'Toán học',
        importance: 'essential'
      },
      {
        id: 'fc-h6-6-3',
        front: 'Chữ cái tiếng Việt (Quốc ngữ) ngày nay có nguồn gốc từ hệ thống chữ viết nào?',
        back: 'Nguồn gốc từ hệ thống chữ cái Latinh của cư dân Hy Lạp và La Mã cổ đại.',
        tag: 'Chữ viết',
        importance: 'essential'
      },
      {
        id: 'fc-h6-6-4',
        front: 'Bộ luật thành văn cổ nhất thế giới có tên là gì?',
        back: 'Bộ luật Hammurabi của vương quốc Lưỡng Hà cổ đại khắc trên bia đá đen.',
        tag: 'Pháp luật',
        importance: 'high'
      },
      {
        id: 'fc-h6-6-5',
        front: 'Công trình lăng mộ kỳ vĩ bậc nhất thế giới của các Pharaoh Ai Cập là gì?',
        back: 'Quần thể Kim tự tháp (tiêu biểu là Kim tự tháp Kheops) xây bằng hàng triệu khối đá đồ sộ.',
        tag: 'Kiến trúc',
        importance: 'essential'
      },
      {
        id: 'fc-h6-6-6',
        front: 'Thể chế Dân chủ chủ nô cổ đại đạt đỉnh cao tại thành bang nào của Hy Lạp?',
        back: 'Thành bang Aten (Athens), nơi công dân nam tự do có quyền tham gia biểu quyết tại Đại hội nhân dân.',
        tag: 'Thể chế',
        importance: 'high'
      }
    ]
  },

  // ==========================================
  // BÀI 10 (CHƯƠNG 4): ĐÔNG NAM Á TỪ CÔNG NGUYÊN ĐẾN THẾ KỶ X
  // ==========================================
  {
    id: 'history-g6-lesson-10',
    lessonNumber: 10,
    semester: 1,
    title: 'Bài 10: Đông Nam Á từ thế kỷ I đến thế kỷ X (Chương 4)',
    titleEn: 'Lesson 10: Southeast Asia 1st - 10th Century (Chapter 4)',
    subtitle: 'Chương 4: Vị trí cầu nối hải hải, sự xuất hiện các quốc gia cổ và nền văn hóa giao thoa sinh động',
    sgkReference: 'Bài 10 - SGK Lịch sử & Địa lí 6 (GDPT 2018 - Bộ GD&ĐT)',
    author: 'Hội đồng Lịch sử Đông Nam Á THCS',
    readTime: '7 phút',

    page1: {
      headerTitle: 'TRANG 1: VỊ TRÍ ĐỊA LÝ VÀ SỰ PHÁT TRIỂN CÁC VƯƠNG QUỐC CỔ ĐÔNG NAM Á',
      mainConcept: 'Đông Nam Á là ngã tư đường giao lưu hàng hải quốc tế nối liền Ấn Độ Dương và Thái Bình Dương. Nhờ điều kiện thiên nhiên ưu đãi và sự giao lưu văn hóa, nhiều quốc gia cổ đại và phong kiến đã ra đời.',
      coreKnowledge: [
        {
          sectionTitle: '1. Vị trí địa lý và điều kiện tự nhiên',
          bullets: [
            'Cầu nối giữa hai đại dương lớn (Ấn Độ Dương và Thái Bình Dương), giao điểm của hai nền văn minh lớn (Ấn Độ và Trung Hoa).',
            'Khí hậu nhiệt đới gió mùa phong phú, nguồn nước dồi dào nhờ hệ thống sông lớn (Sông Mê Công, Sông Hồng, Sông Menam, Sông Irrawaddy).',
            'Nền kinh tế nông nghiệp trồng lúa nước là hoạt động sản xuất cốt lõi của tất cả các dân tộc trong khu vực.'
          ]
        },
        {
          sectionTitle: '2. Sự hình thành các quốc gia cổ đại và phong kiến',
          bullets: [
            'Các quốc gia cổ đại đầu tiên: Phù Nam (hạ lưu sông Mê Công), Chăm-pa (Trung Bộ Việt Nam), Văn Lang - Âu Lạc (Bắc Bộ Việt Nam).',
            'Các vương quốc phong kiến từ thế kỷ VII đến thế kỷ X: Sri Vijaya (đảo Sumatra), Pagan (Miến Điện), Dvaravati (Thái Lan), Angkor sơ khai (Campuchia).',
            'Đặc điểm: Chia làm hai nhóm rõ rệt - Vương quốc hải đảo (mạnh về hàng hải buôn bán) và Vương quốc lục địa (mạnh về nông nghiệp lúa nước).'
          ]
        }
      ],
      chronologyTimeline: [
        { time: 'Thế kỷ I - II', event: 'Vương quốc cổ Phù Nam và Chăm-pa ra đời' },
        { time: 'Thế kỷ VII', event: 'Vương quốc đường biển Sri Vijaya phát triển rực rỡ ở Indonesia' },
        { time: 'Thế kỷ IX', event: 'Đế quốc Khmer (Angkor) và Pagan bắt đầu thời kỳ hoàng kim' }
      ]
    },

    page2: {
      headerTitle: 'TRANG 2: TƯ LIỆU GIAO LƯU VĂN HÓA, DI SẢN & CÂU HỎI TỰ LUYỆN',
      historicalQuotes: [
        {
          source: 'Tài liệu Khảo cổ học Đông Nam Á',
          quote: '"Đông Nam Á vừa là cái nôi lúa nước bản địa, vừa là chiếc phễu tiếp nhận và sáng tạo lại các dòng chảy văn hóa thế giới."',
          context: 'Khẳng định tính bản sắc độc đáo của văn hóa Đông Nam Á dù tiếp thu mạnh mẽ Ấn Độ giáo và Phật giáo.'
        }
      ],
      comparisonTable: {
        headers: ['Lĩnh vực văn hóa', 'Yếu tố tiếp thu (Ấn Độ/Trung Hoa)', 'Sáng tạo bản địa Đông Nam Á'],
        rows: [
          ['Chữ viết', 'Tiếp thu chữ Phạn (Sanskrit) của Ấn Độ', 'Sáng tạo ra chữ Chăm cổ, chữ Khơ-me cổ, chữ Môn cổ'],
          ['Tôn giáo', 'Đón nhận Phật giáo và Ấn Độ giáo (Hindu)', 'Hòa quyện với Tín ngưỡng vạn vật hữu linh & Thờ cúng tổ tiên'],
          ['Kiến trúc', 'Mô hình tháp đền Ấn Độ', 'Xây dựng các quần thể kỳ vĩ như Borobudur, Tháp Chàm Mỹ Sơn']
        ]
      },
      goldenRules: [
        'Đông Nam Á thống nhất trong đa dạng: Cùng chung nền tảng văn minh lúa nước nhưng đa dạng về dân tộc và bản sắc kiến trúc.',
        'Giao lưu thương mại biển là động lực biến Đông Nam Á thành trung tâm giao thương sôi động bậc nhất thế giới cổ-trung đại.'
      ],
      reviewQuestions: [
        '1. Nêu vị trí chiến lược của khu vực Đông Nam Á trên bản đồ hải trình thế giới.',
        '2. Kể tên 3 quốc gia cổ đại xuất hiện sớm nhất tại khu vực Đông Nam Á.',
        '3. Cư dân Đông Nam Á đã sáng tạo văn hóa bản địa như thế nào khi tiếp thu văn hóa Ấn Độ?'
      ]
    },

    mindmap: {
      centralTheme: 'ĐÔNG NAM Á TỪ CÔNG NGUYÊN ĐẾN THẾ KỶ X',
      themeDescription: 'Chương 4: Vị trí Hải hành Chiến lược & Các Vương quốc Cổ',
      branches: [
        {
          id: 'b10-position',
          title: 'Vị trí & Điều kiện',
          color: 'from-blue-500 to-cyan-600',
          icon: 'Compass',
          subBranches: [
            { title: 'Cầu nối hải hải', detail: 'Ngã tư giao thương giữa Ấn Độ Dương và Thái Bình Dương', keywords: ['Cầu nối', 'Hàng hải'] },
            { title: 'Khí hậu gió mùa', detail: 'Nắng lắm mưa nhiều, phù sa sông Mê Công, sông Hồng màu mỡ', keywords: ['Gió mùa', 'Sông lớn'] },
            { title: 'Nông nghiệp lúa nước', detail: 'Sản xuất lúa nước là cội nguồn đời sống làng xã Đông Nam Á', keywords: ['Lúa nước', 'Làng xã'] }
          ]
        },
        {
          id: 'b10-kingdoms',
          title: 'Các Vương quốc Cổ',
          color: 'from-amber-600 to-red-600',
          icon: 'Landmark',
          subBranches: [
            { title: 'Quốc gia lục địa', detail: 'Văn Lang - Âu Lạc, Pagan, Angkor nông nghiệp trù phú', keywords: ['Lục địa', 'Nông nghiệp'] },
            { title: 'Quốc gia ven biển', detail: 'Phù Nam, Chăm-pa thương cảng Óc Eo, Sri Vijaya bá chủ biển', keywords: ['Óc Eo', 'Thương cảng'] },
            { title: 'Thương mại phát triển', detail: 'Tàu thuyền trao đổi hương liệu, gốm sứ, lụa là thế giới', keywords: ['Hương liệu', 'Tàu thuyền'] }
          ]
        },
        {
          id: 'b10-culture',
          title: 'Giao lưu Văn hóa',
          color: 'from-emerald-600 to-teal-700',
          icon: 'Sparkles',
          subBranches: [
            { title: 'Tôn giáo & Chữ viết', detail: 'Tiếp thu Phật giáo, Ấn Độ giáo và biến đổi thành chữ viết riêng', keywords: ['Chữ Phạn', 'Phật giáo'] },
            { title: 'Kiến trúc tháp đền', detail: 'Quần thể Borobudur (Indonesia), Thánh địa Mỹ Sơn (Việt Nam)', keywords: ['Borobudur', 'Mỹ Sơn'] },
            { title: 'Thống nhất trong đa dạng', detail: 'Bản sắc dân gian hòa quyện cùng tinh hoa văn hóa thế giới', keywords: ['Thống nhất', 'Đa dạng'] }
          ]
        }
      ]
    },

    sketchnote: {
      title: 'Sketchnote Bài 10: Đông Nam Á cổ đại & trung đại',
      badge: 'BẢN ĐỒ VĂN MINH SÔNG NƯỚC & HẢI CẢNG',
      quote: 'Đông Nam Á - Ngã tư đường giao lưu các văn minh thế giới',
      timeline: [
        { year: 'Thế kỷ I', event: 'Phù Nam và Chăm-pa xuất hiện' },
        { year: 'Thế kỷ VII', event: 'Đế chế hàng hải Sri Vijaya phát triển' },
        { year: 'Thế kỷ IX', event: 'Xây dựng đại bảo tháp Borobudur' }
      ],
      keyFigures: [
        { name: 'Cư dân Phù Nam', role: 'Chủ nhân thương cảng Óc Eo', achievement: 'Xây dựng đế chế thương mại biển sầm uất nhất Đông Nam Á cổ đại' }
      ],
      highlights: [
        '🌾 Lúa nước và sông ngòi là mẫu số chung của mọi văn hóa Đông Nam Á.',
        '🚢 Thương cảng Óc Eo (An Giang) từng giao thương với cả La Mã và Ba Tư.',
        '🛕 Đền tháp Đông Nam Á mang nét độc đáo vừa thần bí vừa gần gũi thiên nhiên.'
      ],
      takeaway: 'Đông Nam Á là chiếc cầu nối văn hóa tài ba kết nối tri thức thế giới với bản sắc dân tộc.'
    },

    flashcards: [
      {
        id: 'fc-h6-10-1',
        front: 'Đông Nam Á nằm ở vị trí địa lý đặc biệt như thế nào?',
        back: 'Là cầu nối giữa hai đại dương (Ấn Độ Dương & Thái Bình Dương) và hai nền văn minh lớn (Ấn Độ & Trung Hoa).',
        tag: 'Vị trí',
        importance: 'essential'
      },
      {
        id: 'fc-h6-10-2',
        front: 'Thương cảng cổ đại nổi tiếng nhất của Vương quốc Phù Nam là gì?',
        back: 'Thương cảng Óc Eo (thuộc tỉnh An Giang, Việt Nam ngày nay).',
        tag: 'Khảo cổ',
        importance: 'high'
      },
      {
        id: 'fc-h6-10-3',
        front: 'Mẫu số chung nền tảng kinh tế của các dân tộc Đông Nam Á là gì?',
        back: 'Nông nghiệp trồng lúa nước nhờ điều kiện khí hậu nhiệt đới gió mùa dồi dào phù sa.',
        tag: 'Kinh tế',
        importance: 'essential'
      },
      {
        id: 'fc-h6-10-4',
        front: 'Quần thể đại bảo tháp Phật giáo đồ sộ bậc nhất thế giới ở Indonesia có tên là gì?',
        back: 'Đại bảo tháp Borobudur (xây dựng vào thế kỷ IX trên đảo Java).',
        tag: 'Di sản',
        importance: 'essential'
      },
      {
        id: 'fc-h6-10-5',
        front: 'Trung tâm đền tháp Hindu giáo nổi tiếng của Vương quốc Chăm-pa đặt tại đâu?',
        back: 'Thánh địa Mỹ Sơn (thuộc tỉnh Quảng Nam, Việt Nam).',
        tag: 'Di sản',
        importance: 'high'
      },
      {
        id: 'fc-h6-10-6',
        front: 'Cư dân Đông Nam Á tiếp thu chữ viết nào của Ấn Độ để tạo chữ viết dân tộc?',
        back: 'Chữ Phạn (Sanskrit) của Ấn Độ để sáng tạo chữ Chăm cổ, Khơ-me cổ, Môn cổ.',
        tag: 'Văn hóa',
        importance: 'essential'
      }
    ]
  },

  // ==========================================
  // BÀI 12 (CHƯƠNG 5 PART 1): NHÀ NƯỚC VĂN LANG - ÂU LẠC
  // ==========================================
  {
    id: 'history-g6-lesson-12',
    lessonNumber: 12,
    semester: 2,
    title: 'Bài 12: Nhà nước Văn Lang - Âu Lạc (Chương 5)',
    titleEn: 'Lesson 12: Van Lang - Au Lac States (Chapter 5)',
    subtitle: 'Chương 5: Thời đại Hùng Vương - An Dương Vương, Văn hóa Đông Sơn và cội nguồn sức mạnh dân tộc Việt',
    sgkReference: 'Bài 12 - SGK Lịch sử & Địa lí 6 (GDPT 2018 - Bộ GD&ĐT)',
    author: 'Viện Sử học Việt Nam THCS',
    readTime: '8 phút',

    page1: {
      headerTitle: 'TRANG 1: HỆ THỐNG LỊCH SỬ THỜI ĐẠI HÙNG VƯƠNG - AN DƯƠNG VƯƠNG',
      mainConcept: 'Khoảng thế kỷ VII TCN, nhà nước đầu tiên của dân tộc Việt Nam ra đời với tên gọi Văn Lang, nối tiếp là nhà nước Âu Lạc. Đây là mốc mở đầu cho lịch sử dựng nước và giữ nước hàng ngàn năm thiêng liêng.',
      coreKnowledge: [
        {
          sectionTitle: '1. Nhà nước Văn Lang (Thế kỷ VII TCN - 208 TCN)',
          bullets: [
            'Sự ra đời: Do yêu cầu trị thủy bảo vệ mùa màng và chống giặc ngoại xâm, 15 bộ lạc vùng Bắc Bộ và Bắc Trung Bộ đã hợp nhất thành nhà nước Văn Lang.',
            'Bộ máy nhà nước: Vua Hùng đứng đầu, giúp việc có Lạc Hầu, Lạc Tướng cai quản các bộ; Bộc Chính cai quản chiềng chạ (làng xã). Kinh đô đặt tại Phong Châu (Phú Thọ).',
            'Kỹ thuật đỉnh cao: Kỹ thuật đúc đồng Đông Sơn phát triển rực rỡ, tạo nên những kiệt tác Trống đồng, Thạp đồng tiêu biểu.'
          ]
        },
        {
          sectionTitle: '2. Nhà nước Âu Lạc (208 TCN - 179 TCN)',
          bullets: [
            'Thành lập: Thục Phán hợp nhất người Tây Âu và Lạc Việt đánh tan quân xâm lược Tần, lên ngôi xưng An Dương Vương, đặt tên nước là Âu Lạc.',
            'Kinh đô & Công trình quân sự: Chuyển kinh đô xuống vùng đồng bằng Cổ Loa (Đông Anh - Hà Nội). Xây dựng thành Cổ Loa kiên cố gồm 9 vòng xoáy trôn ốc.',
            'Vũ khí độc đáo: Chế tạo nỏ liên châu (Nỏ thần) bắn một lần nhiều mũi tên đồng sắc bén.'
          ]
        }
      ],
      chronologyTimeline: [
        { time: 'Thế kỷ VII TCN', event: 'Vua Hùng dựng nước Văn Lang, đóng đô ở Phong Châu (Phú Thọ)' },
        { time: 'Năm 218 - 208 TCN', event: 'Kháng chiến chống quân Tần thắng lợi; An Dương Vương lập nước Âu Lạc' },
        { time: 'Năm 179 TCN', event: 'Triệu Đà dùng mưu chiếm Âu Lạc, mở đầu thời kỳ Bắc thuộc' }
      ]
    },

    page2: {
      headerTitle: 'TRANG 2: TƯ LIỆU VĂN HÓA ĐÔNG SƠN & CÂU HỎI BỔ TRỢ',
      historicalQuotes: [
        {
          source: 'Chủ tịch Hồ Chí Minh (1954 - Tại Đền Hùng)',
          quote: '"Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước."',
          context: 'Lời dặn dò lịch sử bất hủ khẳng định công ơn khai sơn phá thạch của các Vua Hùng đối với dân tộc.'
        }
      ],
      comparisonTable: {
        headers: ['Tiêu chí', 'Nhà nước Văn Lang', 'Nhà nước Âu Lạc'],
        rows: [
          ['Người đứng đầu', 'Vua Hùng (18 đời Vua Hùng)', 'An Dương Vương (Thục Phán)'],
          ['Kinh đô', 'Phong Châu (Việt Trì - Phú Thọ)', 'Cổ Loa (Đông Anh - Hà Nội)'],
          ['Lãnh thổ', 'Vùng Bắc Bộ và Bắc Trung Bộ', 'Mở rộng hợp nhất Lạc Việt & Tây Âu'],
          ['Công trình tiêu biểu', 'Trống đồng Đông Sơn, Thạp đồng Đào Thịnh', 'Thành Cổ Loa, Nỏ liên châu, Mũi tên đồng Cổ Loa']
        ]
      },
      goldenRules: [
        'Thành Cổ Loa và Nỏ liên châu là biểu tượng của trí tuệ quân sự và kỹ thuật đúc đồng đỉnh cao thời Âu Lạc.',
        'Tín ngưỡng thờ cúng Hùng Vương là Di sản văn hóa phi vật thể đại diện của nhân loại được UNESCO công nhận.'
      ],
      reviewQuestions: [
        '1. Nhà nước Văn Lang ra đời trong hoàn cảnh lịch sử nào?',
        '2. Vẽ sơ đồ bộ máy nhà nước Văn Lang và giải thích vai trò của Vua Hùng.',
        '3. Đánh giá ý nghĩa quân sự của công trình Thành Cổ Loa thời An Dương Vương.'
      ]
    },

    mindmap: {
      centralTheme: 'NHÀ NƯỚC VĂN LANG - ÂU LẠC',
      themeDescription: 'Chương 5: Bình minh Lịch sử & Thời đại Hùng Vương - An Dương Vương',
      branches: [
        {
          id: 'b12-vanlang',
          title: 'Nhà nước Văn Lang',
          color: 'from-amber-600 to-red-600',
          icon: 'Shield',
          subBranches: [
            { title: 'Thế kỷ VII TCN', detail: '15 bộ lạc hợp nhất thành Văn Lang', keywords: ['Phong Châu', 'Vua Hùng'] },
            { title: 'Bộ máy đơn giản', detail: 'Vua Hùng ➔ Lạc Hầu, Lạc Tướng ➔ Bộc Chính (Chiềng chạ)', keywords: ['Bộ máy', 'Chiềng chạ'] },
            { title: 'Trống đồng Đông Sơn', detail: 'Kỹ thuật đúc đồng thau đỉnh cao, hoa văn chim Lạc, thuyền đua', keywords: ['Trống đồng', 'Đông Sơn'] }
          ]
        },
        {
          id: 'b12-aulac',
          title: 'Nhà nước Âu Lạc',
          color: 'from-emerald-600 to-teal-700',
          icon: 'Landmark',
          subBranches: [
            { title: 'Thục Phán An Dương Vương', detail: 'Đánh tan quân Tần xâm lược năm 208 TCN, hợp nhất Tây Âu & Lạc Việt', keywords: ['Thục Phán', 'Kháng Tần'] },
            { title: 'Thành Cổ Loa xoáy trôn ốc', detail: 'Thành nội, thành trung, thành ngoại kiên cố kết hợp sông hào', keywords: ['Cổ Loa', '9 vòng thành'] },
            { title: 'Nỏ liên châu kỳ diệu', detail: 'Mũi tên đồng Cổ Loa bắn cùng lúc hàng trăm phát', keywords: ['Nỏ thần', 'Mũi tên đồng'] }
          ]
        },
        {
          id: 'b12-life',
          title: 'Đời sống & Tín ngưỡng',
          color: 'from-blue-600 to-indigo-700',
          icon: 'Sparkles',
          subBranches: [
            { title: 'Nông nghiệp lúa nước', detail: 'Trồng lúa, nuôi súc vật, làm bánh chưng bánh giầy', keywords: ['Bánh chưng', 'Lúa nước'] },
            { title: 'Phong tục cổ truyền', detail: 'Nhuộm răng đen, ăn trầu, xăm hình rồng cừu, giã gạo', keywords: ['Ăn trầu', 'Xăm hình'] },
            { title: 'Thờ cúng tổ tiên', detail: 'Uống nước nhớ nguồn, tôn vinh công ơn Vua Hùng dựng nước', keywords: ['Đền Hùng', 'Tổ tiên'] }
          ]
        }
      ]
    },

    sketchnote: {
      title: 'Sketchnote Bài 12: Nhà nước Văn Lang - Âu Lạc',
      badge: 'BẢN ĐỒ BÌNH MINH LỊCH SỬ DÂN TỘC',
      quote: 'Dù ai đi ngược về xuôi - Nhớ ngày Giỗ Tổ mùng mười tháng ba',
      timeline: [
        { year: 'Thế kỷ VII TCN', event: 'Vua Hùng thành lập nước Văn Lang' },
        { year: '208 TCN', event: 'An Dương Vương lập nước Âu Lạc, xây thành Cổ Loa' },
        { year: '179 TCN', event: 'Kháng chiến chống Triệu Đà thất bại' }
      ],
      keyFigures: [
        { name: 'Vua Hùng', role: 'Thủy tổ dựng nước', achievement: 'Đặt nền móng quốc gia đầu tiên cho dân tộc Việt Nam' },
        { name: 'An Dương Vương', role: 'Vua nước Âu Lạc', achievement: 'Sáng tạo thành Cổ Loa và Nỏ liên châu bảo vệ đất nước' }
      ],
      highlights: [
        '🥁 Trống đồng Đông Sơn là Quốc bảo thiêng liêng lưu giữ hồn cốt Việt.',
        '🏰 Thành Cổ Loa là tòa thành cổ nhất, đồ sộ nhất Việt Nam thời cổ đại.',
        '🌾 Bánh chưng, bánh giầy tượng trưng cho Mẹ Đất và Cha Trời trong triết lý lúa nước.'
      ],
      takeaway: 'Văn Lang - Âu Lạc là cội nguồn thiêng liêng rèn đúc nên bản lĩnh vững vàng của con người Việt Nam.'
    },

    flashcards: [
      {
        id: 'fc-h6-12-1',
        front: 'Nhà nước đầu tiên của nước ta có tên là gì và ra đời vào khoảng thời gian nào?',
        back: 'Nhà nước Văn Lang, ra đời vào khoảng thế kỷ VII TCN tại vùng Phong Châu (Phú Thọ).',
        tag: 'Dựng nước',
        importance: 'essential'
      },
      {
        id: 'fc-h6-12-2',
        front: 'Cơ sở kinh tế chính của cư dân Văn Lang - Âu Lạc là gì?',
        back: 'Nông nghiệp trồng lúa nước kết hợp chăn nuôi, đánh cá và đúc đồng.',
        tag: 'Kinh tế',
        importance: 'essential'
      },
      {
        id: 'fc-h6-12-3',
        front: 'Công trình kiến trúc quân sự kiên cố nhất thời Âu Lạc có tên là gì?',
        back: 'Thành Cổ Loa (Đông Anh - Hà Nội) với cấu trúc 9 vòng xoáy trôn ốc độc đáo.',
        tag: 'Quân sự',
        importance: 'essential'
      },
      {
        id: 'fc-h6-12-4',
        front: 'Quốc bảo kim loại biểu tượng cho văn hóa dựng nước Văn Lang - Âu Lạc là gì?',
        back: 'Trống đồng Đông Sơn với hoa văn chim Lạc, mặt trời và cảnh sinh hoạt lúa nước.',
        tag: 'Văn hóa',
        importance: 'essential'
      },
      {
        id: 'fc-h6-12-5',
        front: 'Tên vị vua sáng lập ra nhà nước Âu Lạc và đóng đô ở Cổ Loa là ai?',
        back: 'An Dương Vương (Thục Phán) sau khi hợp nhất Lạc Việt và Tây Âu.',
        tag: 'Nhân vật',
        importance: 'high'
      },
      {
        id: 'fc-h6-12-6',
        front: 'Tín ngưỡng văn hóa tâm linh truyền thống thiêng liêng nhất thời Hùng Vương là gì?',
        back: 'Tín ngưỡng thờ cúng Hùng Vương và thờ cúng tổ tiên, thể hiện đạo lý "Uống nước nhớ nguồn".',
        tag: 'Tín ngưỡng',
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
