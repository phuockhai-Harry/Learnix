/**
 * Comprehensive Curriculum, Quizzes, and Learning PDFs Database for Learnix
 * 
 * Accurately aligned with the Ministry of Education standard K-12 General Education Curriculum (GDPT 2018):
 * - Primary School (Tiểu học): Grades 1 to 5
 * - Middle School (THCS): Grades 6 to 9
 * - High School (THPT): Grades 10 to 12
 * 
 * Provides:
 * - Precise, grade-specific subject lists and curriculum outlines for each grade level
 * - 2 Semesters for EACH school year (Semester 1 & Semester 2)
 * - Rich quizzes with hints, explanations, and Review/Test mode support
 * - Downloadable learning PDF documents with authentic syllabus notes and formula sheets
 */

export interface CurriculumQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  hint: string;
  explanation: string;
}

export type QuizTestType = 'midterm' | 'regular' | 'final';

export interface CurriculumQuiz {
  id: string;
  title: string;
  titleEn: string;
  grade: number;
  semester: 1 | 2;
  subject: string;
  subjectVi: string;
  subjectEn: string;
  category: 'math' | 'science' | 'literature' | 'english' | 'tech' | 'social';
  difficulty: 'easy' | 'medium' | 'hard';
  durationMinutes: number;
  xpReward: number;
  description: string;
  descriptionEn: string;
  testType?: QuizTestType;
  questions: CurriculumQuestion[];
}

export interface PDFSection {
  title: string;
  content: string;
  formulas?: string[];
  keyPoints?: string[];
  exampleProblem?: {
    problem: string;
    solution: string;
  };
}

export interface CurriculumPDF {
  id: string;
  title: string;
  titleEn: string;
  grade: number;
  semester: 1 | 2;
  subject: string;
  subjectVi: string;
  subjectEn: string;
  category: 'math' | 'science' | 'literature' | 'english' | 'tech' | 'social';
  pageCount: number;
  fileSize: string;
  description: string;
  descriptionEn: string;
  author: string;
  releaseDate: string;
  downloadFileName: string;
  sections: PDFSection[];
}

export interface GradeSubject {
  id: string;
  nameVi: string;
  nameEn: string;
  category: 'math' | 'science' | 'literature' | 'english' | 'tech' | 'social';
  descVi: string;
  descEn: string;
  iconName: 'Calculator' | 'BookOpen' | 'FlaskConical' | 'Globe' | 'Code' | 'Atom' | 'Dna' | 'Scale' | 'Compass' | 'PenTool' | 'Landmark' | 'Cpu' | 'Lightbulb' | 'HeartHandshake';
  color: string;
  badgeColor: string;
}

export type SubjectInfo = GradeSubject;

export interface GradeLevelInfo {
  grade: number;
  nameVi: string;
  nameEn: string;
  tier: 'primary' | 'middle' | 'high';
  tierVi: string;
  tierEn: string;
  ageRange: string;
  descriptionVi: string;
  descriptionEn: string;
  coreFocusVi: string;
  coreFocusEn: string;
  semester1FocusVi: string;
  semester1FocusEn: string;
  semester2FocusVi: string;
  semester2FocusEn: string;
  compulsorySubjectsVi: string[];
  compulsorySubjectsEn: string[];
}

// 12 School Years with authoritative curriculum specifications
export const GRADE_LEVELS: GradeLevelInfo[] = [
  {
    grade: 1,
    nameVi: 'Lớp 1',
    nameEn: 'Grade 1',
    tier: 'primary',
    tierVi: 'Tiểu học',
    tierEn: 'Primary',
    ageRange: '6 - 7 tuổi',
    descriptionVi: 'Giai đoạn khởi đầu: nhận biết 29 chữ cái, đánh vần, đếm số và làm quen môi trường xung quanh',
    descriptionEn: 'The beginning: alphabet recognition, phonics, counting numbers, and discovering surroundings',
    coreFocusVi: 'Đọc thông viết thạo chữ cái tiếng Việt, phép cộng trừ không nhớ trong phạm vi 10 và 100, hình học trực quan',
    coreFocusEn: 'Vietnamese phonics and handwriting, basic addition and subtraction within 10 and 100, visual geometry',
    semester1FocusVi: 'Nhận biết âm vần, làm quen phép tính cộng trừ trong phạm vi 10, quy tắc ứng xử gia đình',
    semester1FocusEn: 'Vowels & consonants, addition & subtraction within 10, family manners and hygiene',
    semester2FocusVi: 'Tập đọc đoạn văn ngắn, phép tính trong phạm vi 100, đo độ dài cm, động thực vật xung quanh',
    semester2FocusEn: 'Reading short stories, math within 100, centimeter measurement, plants and animals',
    compulsorySubjectsVi: ['Tiếng Việt', 'Toán', 'Tự nhiên và Xã hội', 'Tiếng Anh', 'Đạo đức', 'Giáo dục thể chất'],
    compulsorySubjectsEn: ['Vietnamese', 'Mathematics', 'Nature & Society', 'English', 'Ethics', 'Physical Education']
  },
  {
    grade: 2,
    nameVi: 'Lớp 2',
    nameEn: 'Grade 2',
    tier: 'primary',
    tierVi: 'Tiểu học',
    tierEn: 'Primary',
    ageRange: '7 - 8 tuổi',
    descriptionVi: 'Hình thành kỹ năng tính toán có nhớ, đọc hiểu văn bản ngắn và ý thức cộng đồng',
    descriptionEn: 'Developing regrouping arithmetic, text comprehension, and community awareness',
    coreFocusVi: 'Cộng trừ có nhớ trong phạm vi 100 và 1000, bảng nhân 2 và 5, chính tả và tập làm văn miêu tả',
    coreFocusEn: 'Addition & subtraction with regrouping, multiplication tables 2 and 5, spelling and descriptive composition',
    semester1FocusVi: 'Phép cộng trừ có nhớ trong phạm vi 100, mở rộng vốn từ gia đình & trường học, an toàn giao thông',
    semester1FocusEn: 'Regrouping math within 100, vocabulary enrichment, school life, road safety basics',
    semester2FocusVi: 'Làm quen bảng nhân chia 2 và 5, số có 3 chữ số đến 1000, đơn vị đo km, dm, lít, kg',
    semester2FocusEn: 'Multiplication & division 2 and 5, 3-digit numbers to 1000, units of length, volume and mass',
    compulsorySubjectsVi: ['Toán', 'Tiếng Việt', 'Tự nhiên và Xã hội', 'Tiếng Anh', 'Đạo đức', 'Âm nhạc & Mỹ thuật'],
    compulsorySubjectsEn: ['Mathematics', 'Vietnamese', 'Nature & Society', 'English', 'Ethics', 'Arts & Music']
  },
  {
    grade: 3,
    nameVi: 'Lớp 3',
    nameEn: 'Grade 3',
    tier: 'primary',
    tierVi: 'Tiểu học',
    tierEn: 'Primary',
    ageRange: '8 - 9 tuổi',
    descriptionVi: 'Bước ngoặt tiểu học: làm chủ toàn bộ bảng cửu chương, bắt đầu học môn Tin học và Công nghệ',
    descriptionEn: 'Mastering full multiplication tables and introducing Informatics & Technology',
    coreFocusVi: 'Bảng nhân chia từ 2 đến 9, số có 4 và 5 chữ số, chu vi diện tích hình chữ nhật, biện pháp so sánh & nhân hóa',
    coreFocusEn: 'Multiplication tables 2-9, 4-digit and 5-digit numbers, perimeter & area, similes and personification',
    semester1FocusVi: 'Hoàn thành bảng nhân chia 6, 7, 8, 9; làm quen máy tính và bàn phím; cơ quan tuần hoàn & hô hấp',
    semester1FocusEn: 'Tables 6-9, computer hardware & keyboarding basics, human circulatory & respiratory systems',
    semester2FocusVi: 'Số có 4 và 5 chữ số, tính chu vi và diện tích hình vuông/chữ nhật, tập làm văn kể chuyện',
    semester2FocusEn: 'Numbers up to 100,000, geometric area & perimeter, story writing, environmental protection',
    compulsorySubjectsVi: ['Toán', 'Tiếng Việt', 'Tự nhiên và Xã hội', 'Tin học và Công nghệ', 'Tiếng Anh', 'Đạo đức'],
    compulsorySubjectsEn: ['Mathematics', 'Vietnamese', 'Nature & Society', 'Informatics & Tech', 'English', 'Ethics']
  },
  {
    grade: 4,
    nameVi: 'Lớp 4',
    nameEn: 'Grade 4',
    tier: 'primary',
    tierVi: 'Tiểu học',
    tierEn: 'Primary',
    ageRange: '9 - 10 tuổi',
    descriptionVi: 'Mở rộng tư duy trừu tượng: phân số, lịch sử dân tộc và khoa học tự nhiên thực nghiệm',
    descriptionEn: 'Abstract thinking expansion: fractions, national history, and experimental science',
    coreFocusVi: 'Dãy số tự nhiên, 4 phép tính, dấu hiệu chia hết, phân số, từ loại (danh từ, động từ, tính từ), khoa học vật chất',
    coreFocusEn: 'Natural numbers to millions, fractions, parts of speech (nouns, verbs, adjectives), physical sciences',
    semester1FocusVi: 'Số có nhiều chữ số đến lớp triệu, góc nhọn/tù/bẹt, danh từ - động từ - tính từ, nước và không khí',
    semester1FocusEn: 'Numbers up to millions, geometric angles, nouns/verbs/adjectives, water and air properties',
    semester2FocusVi: 'Phân số và phép tính phân số, hình bình hành, hình thoi, lịch sử thời Lý - Trần, ánh sáng và nhiệt',
    semester2FocusEn: 'Fractions operations, parallelogram & rhombus, medieval Vietnamese dynasties, light and heat',
    compulsorySubjectsVi: ['Toán', 'Tiếng Việt', 'Khoa học', 'Lịch sử và Địa lý', 'Tiếng Anh', 'Tin học và Công nghệ'],
    compulsorySubjectsEn: ['Mathematics', 'Vietnamese', 'Science', 'History & Geography', 'English', 'Informatics & Tech']
  },
  {
    grade: 5,
    nameVi: 'Lớp 5',
    nameEn: 'Grade 5',
    tier: 'primary',
    tierVi: 'Tiểu học',
    tierEn: 'Primary',
    ageRange: '10 - 11 tuổi',
    descriptionVi: 'Hoàn thiện cấp Tiểu học: số thập phân, tỉ số phần trăm, hình học không gian và sẵn sàng chuyển cấp',
    descriptionEn: 'Completing Primary: decimals, percentages, 3D geometry volumes, and middle school readiness',
    coreFocusVi: 'Số thập phân, hỗn số, tỉ số phần trăm, diện tích hình thang, hình tròn, thể tích hình hộp, toán chuyển động',
    coreFocusEn: 'Decimals, percentages, trapezoid & circle areas, box volumes, uniform motion word problems',
    semester1FocusVi: 'Phân số nâng cao, khái niệm số thập phân, 4 phép tính số thập phân, từ đồng nghĩa/trái nghĩa, năng lượng',
    semester1FocusEn: 'Advanced fractions, decimal numbers, decimal operations, synonyms & antonyms, energy sources',
    semester2FocusVi: 'Tỉ số phần trăm, thể tích hình hộp chữ nhật & lập phương, toán chuyển động đều (v, s, t), chuẩn bị thi chuyển cấp',
    semester2FocusEn: 'Percentages, 3D prism volume, uniform speed/distance/time, secondary school entrance review',
    compulsorySubjectsVi: ['Toán', 'Tiếng Việt', 'Khoa học', 'Lịch sử và Địa lý', 'Tiếng Anh', 'Tin học'],
    compulsorySubjectsEn: ['Mathematics', 'Vietnamese', 'Science', 'History & Geography', 'English', 'Informatics']
  },
  {
    grade: 6,
    nameVi: 'Lớp 6',
    nameEn: 'Grade 6',
    tier: 'middle',
    tierVi: 'THCS',
    tierEn: 'Middle School',
    ageRange: '11 - 12 tuổi',
    descriptionVi: 'Khởi đầu THCS: làm quen phương pháp học tập theo bộ môn, số nguyên âm, tế bào và văn học nghị luận',
    descriptionEn: 'Starting Middle School: departmentalized subjects, negative integers, living cells, and essay writing',
    coreFocusVi: 'Tập hợp số tự nhiên và số nguyên, tính chia hết & ước/bội, tế bào đơn vị của sự sống, văn bản tự sự và thơ lục bát',
    coreFocusEn: 'Integers (positive & negative), divisibility & factors/multiples, cell biology, narrative essays and poetry',
    semester1FocusVi: 'Tập hợp, ước chung lớn nhất & bội chung nhỏ nhất, số nguyên, mở đầu KHTN và các phép đo, truyện truyền thuyết',
    semester1FocusEn: 'GCD & LCM, integer arithmetic, science measurement units, cell structure, legends & folklore',
    semester2FocusVi: 'Phân số & số thập phân mở rộng, hình học trực quan (tam giác đều, lục giác đều), lực và năng lượng, thơ lục bát',
    semester2FocusEn: 'Rational fractions & decimals, regular polygons, forces and motion, environmental geography',
    compulsorySubjectsVi: ['Toán học', 'Ngữ văn', 'Khoa học Tự nhiên', 'Tiếng Anh', 'Lịch sử và Địa lý', 'Tin học', 'Giáo dục công dân'],
    compulsorySubjectsEn: ['Mathematics', 'Literature', 'Natural Science', 'English', 'History & Geography', 'Informatics', 'Civic Education']
  },
  {
    grade: 7,
    nameVi: 'Lớp 7',
    nameEn: 'Grade 7',
    tier: 'middle',
    tierVi: 'THCS',
    tierEn: 'Middle School',
    ageRange: '12 - 13 tuổi',
    descriptionVi: 'Phát triển tư duy định lượng: số hữu tỉ, tam giác bằng nhau, tốc độ, sóng âm và phân tử',
    descriptionEn: 'Quantitative reasoning: rational numbers, congruent triangles, speed, sound, and molecules',
    coreFocusVi: 'Số hữu tỉ và số thực, biểu thức đại số, các trường hợp bằng nhau của tam giác, bảng tuần hoàn hóa học cơ bản',
    coreFocusEn: 'Rational numbers, algebraic expressions, triangle congruence proofs, periodic table intro, light & sound',
    semester1FocusVi: 'Số hữu tỉ, số vô tỉ, căn bậc hai số học, góc và đường thẳng song song, tam giác bằng nhau, tốc độ và sóng âm',
    semester1FocusEn: 'Rational numbers, parallel lines, triangle congruency, kinematics speed, periodic table elements',
    semester2FocusVi: 'Biểu thức đại số và đa thức một biến, tam giác cân và quan hệ giữa các cạnh, quang học và trao đổi chất',
    semester2FocusEn: 'Polynomials of one variable, isosceles triangles, optics reflection/refraction, organism metabolism',
    compulsorySubjectsVi: ['Toán học', 'Ngữ văn', 'Khoa học Tự nhiên', 'Tiếng Anh', 'Lịch sử và Địa lý', 'Tin học', 'Giáo dục công dân'],
    compulsorySubjectsEn: ['Mathematics', 'Literature', 'Natural Science', 'English', 'History & Geography', 'Informatics', 'Civic Education']
  },
  {
    grade: 8,
    nameVi: 'Lớp 8',
    nameEn: 'Grade 8',
    tier: 'middle',
    tierVi: 'THCS',
    tierEn: 'Middle School',
    ageRange: '13 - 14 tuổi',
    descriptionVi: 'Đột phá đại số và khoa học: 7 hằng đẳng thức, phản ứng hóa học, cơ học áp suất và cơ thể người',
    descriptionEn: 'Algebraic & scientific breakthrough: 7 identities, chemical reactions, pressure mechanics, and anatomy',
    coreFocusVi: 'Đa thức nhiều biến, 7 hằng đẳng thức, phân thức đại số, tứ giác, định lý Talet, mol và phản ứng hóa học',
    coreFocusEn: 'Polynomial algebra, 7 identities, rational expressions, quadrilaterals, Thales theorem, stoichiometry moles',
    semester1FocusVi: '7 hằng đẳng thức đáng nhớ, phân tích đa thức thành nhân tử, tứ giác (hình bình hành, chữ nhật, thoi), mol và nồng độ',
    semester1FocusEn: '7 special products, factoring polynomials, quadrilaterals geometry, chemical mass conservation and moles',
    semester2FocusVi: 'Phân thức đại số, định lý Talet và tam giác đồng dạng, axit-bazơ-muối, áp suất chất lỏng, hệ cơ quan người',
    semester2FocusEn: 'Rational expressions, Thales theorem, similar triangles, acids & bases, liquid pressure, human biology',
    compulsorySubjectsVi: ['Toán học', 'Ngữ văn', 'Khoa học Tự nhiên', 'Tiếng Anh', 'Lịch sử và Địa lý', 'Tin học', 'Giáo dục công dân'],
    compulsorySubjectsEn: ['Mathematics', 'Literature', 'Natural Science', 'English', 'History & Geography', 'Informatics', 'Civic Education']
  },
  {
    grade: 9,
    nameVi: 'Lớp 9',
    nameEn: 'Grade 9',
    tier: 'middle',
    tierVi: 'THCS',
    tierEn: 'Middle School',
    ageRange: '14 - 15 tuổi',
    descriptionVi: 'Năm học bản lề: làm chủ căn bậc hai, định lý Vi-ét, đường tròn và tổng ôn luyện thi tuyển sinh vào lớp 10',
    descriptionEn: 'The pivotal year: square roots, Vieta theorem, circle geometry, and high school entrance exam mastery',
    coreFocusVi: 'Căn bậc hai và bậc ba, hệ phương trình bậc nhất hai ẩn, phương trình bậc hai một ẩn, định lý Vi-ét, đường tròn',
    coreFocusEn: 'Radicals, 2-variable linear systems, quadratic equations, Vieta formulas, circle geometry and trigonometry',
    semester1FocusVi: 'Rút gọn biểu thức chứa căn, hệ hai phương trình bậc nhất, tỉ số lượng giác góc nhọn, tính chất tiếp tuyến đường tròn',
    semester1FocusEn: 'Radical algebraic simplification, linear systems, trigonometric ratios, circle tangents, inorganic chemistry',
    semester2FocusVi: 'Phương trình bậc hai ax² + bx + c = 0, định lý Vi-ét, góc với đường tròn, hình trụ-nón-cầu, luyện đề thi vào 10',
    semester2FocusEn: 'Quadratic equations & Vieta theorem, inscribed angles, 3D solids, entrance exam mock tests',
    compulsorySubjectsVi: ['Toán học', 'Ngữ văn', 'Khoa học Tự nhiên', 'Tiếng Anh', 'Lịch sử và Địa lý', 'Tin học', 'Giáo dục công dân'],
    compulsorySubjectsEn: ['Mathematics', 'Literature', 'Natural Science', 'English', 'History & Geography', 'Informatics', 'Civic Education']
  },
  {
    grade: 10,
    nameVi: 'Lớp 10',
    nameEn: 'Grade 10',
    tier: 'high',
    tierVi: 'THPT',
    tierEn: 'High School',
    ageRange: '15 - 16 tuổi',
    descriptionVi: 'Khởi đầu cấp THPT: phân hóa môn học theo định hướng nghề nghiệp, mệnh đề tập hợp, vectơ và cơ học Newton',
    descriptionEn: 'High school launch: career pathway tracks, set theory, vector geometry, and Newtonian mechanics',
    coreFocusVi: 'Mệnh đề và tập hợp, bất phương trình bậc hai, vectơ và hệ thức lượng trong tam giác, 3 định luật Newton, nguyên tử',
    coreFocusEn: 'Sets & logic, quadratic inequalities, vector geometry, trigonometry laws of sines/cosines, atomic structure',
    semester1FocusVi: 'Mệnh đề, tập hợp, hệ bất phương trình bậc nhất hai ẩn, vectơ, định lý Cosin/Sin, chuyển động biến đổi đều, nguyên tử',
    semester1FocusEn: 'Set operations, vector addition & dot product, Law of Cosines/Sines, uniform accelerated motion, atomic models',
    semester2FocusVi: 'Hàm số bậc hai, dấu tam thức bậc hai, phương trình đường thẳng & đường tròn Oxyz, năng lượng và công, bảng tuần hoàn',
    semester2FocusEn: 'Quadratic functions, coordinate geometry of lines and circles, work & energy conservation, periodic trends',
    compulsorySubjectsVi: ['Toán học', 'Ngữ văn', 'Tiếng Anh', 'Vật lý', 'Hóa học', 'Sinh học', 'Lịch sử', 'Địa lý', 'Tin học'],
    compulsorySubjectsEn: ['Mathematics', 'Literature', 'English', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Informatics']
  },
  {
    grade: 11,
    nameVi: 'Lớp 11',
    nameEn: 'Grade 11',
    tier: 'high',
    tierVi: 'THPT',
    tierEn: 'High School',
    ageRange: '16 - 17 tuổi',
    descriptionVi: 'Giai đoạn trọng tâm THPT: lượng giác, giới hạn, đạo hàm, dao động điều hòa, sóng cơ và hóa học hữu cơ',
    descriptionEn: 'High school core: trigonometry, limits & derivatives, harmonic oscillation, waves, and organic chemistry',
    coreFocusVi: 'Hàm số lượng giác, dãy số & cấp số nhân, giới hạn và đạo hàm, quan hệ vuông góc không gian, dao động điều hòa',
    coreFocusEn: 'Trigonometric functions, geometric progressions, calculus limits & derivatives, spatial geometry, harmonic oscillations',
    semester1FocusVi: 'Phương trình lượng giác, dãy số, cấp số cộng/nhân, giới hạn hàm số, dao động điều hòa con lắc đơn & lò xo, hydrocacbon',
    semester1FocusEn: 'Trig equations, arithmetic & geometric sequences, limits, simple harmonic motion, hydrocarbon chemistry',
    semester2FocusVi: 'Đạo hàm và tiếp tuyến đồ thị, hai mặt phẳng vuông góc, sóng cơ và giao thoa sóng, dẫn xuất halogen và ancol',
    semester2FocusEn: 'Derivatives & tangents, spatial perpendicularity, mechanical waves & interference, alcohols and organic synthesis',
    compulsorySubjectsVi: ['Toán học', 'Ngữ văn', 'Tiếng Anh', 'Vật lý', 'Hóa học', 'Sinh học', 'Lịch sử', 'Địa lý', 'Tin học'],
    compulsorySubjectsEn: ['Mathematics', 'Literature', 'English', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Informatics']
  },
  {
    grade: 12,
    nameVi: 'Lớp 12',
    nameEn: 'Grade 12',
    tier: 'high',
    tierVi: 'THPT',
    tierEn: 'High School',
    ageRange: '17 - 18 tuổi',
    descriptionVi: 'Chặng đường về đích: khảo sát hàm số, nguyên hàm - tích phân, số phức, vật lý lượng tử và ôn thi Tốt nghiệp THPT',
    descriptionEn: 'The graduation finish line: calculus analysis, integrals, complex numbers, quantum physics, and college entrance',
    coreFocusVi: 'Ứng dụng đạo hàm khảo sát hàm số, lũy thừa - mũ - logarit, tích phân, số phức, hình học Oxyz, tổng ôn thi đại học',
    coreFocusEn: 'Calculus curve sketching, exponential & logarithmic functions, integrals, complex algebra, 3D Oxyz vectors, college prep',
    semester1FocusVi: 'Cực trị & tiệm cận hàm số, giá trị lớn nhất/nhỏ nhất, hàm số mũ và logarit, khối đa diện và thể tích, este - lipit',
    semester1FocusEn: 'Extrema & asymptotes, optimization, exponential/log functions, polyhedron volume, esters & lipids',
    semester2FocusVi: 'Nguyên hàm, tích phân và ứng dụng hình học, số phức, tọa độ không gian Oxyz, vật lý hạt nhân, tổng ôn thi tốt nghiệp',
    semester2FocusEn: 'Integrals and area/volume applications, complex numbers, 3D analytical geometry, nuclear physics, national exams',
    compulsorySubjectsVi: ['Toán học', 'Ngữ văn', 'Tiếng Anh', 'Vật lý', 'Hóa học', 'Sinh học', 'Lịch sử', 'Địa lý', 'Tin học'],
    compulsorySubjectsEn: ['Mathematics', 'Literature', 'English', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Informatics']
  }
];

export const SEMESTERS = [
  {
    semester: 1 as const,
    nameVi: 'Học kỳ 1',
    nameEn: 'Semester 1',
    periodVi: 'Tháng 9 - Tháng 1',
    periodEn: 'Sep - Jan',
    badgeVi: 'Nền tảng & Giữa kỳ',
    badgeEn: 'Core & Midterms'
  },
  {
    semester: 2 as const,
    nameVi: 'Học kỳ 2',
    nameEn: 'Semester 2',
    periodVi: 'Tháng 1 - Tháng 5',
    periodEn: 'Jan - May',
    badgeVi: 'Nâng cao & Cuối kỳ',
    badgeEn: 'Advanced & Finals'
  }
];

// Grade-Specific Subject Definitions based on the Ministry of Education GDPT 2018 Curriculum
export const GRADE_SUBJECTS_MAP: Record<number, GradeSubject[]> = {
  1: [
    { id: 'g1-vietnamese', nameVi: 'Tiếng Việt', nameEn: 'Vietnamese', category: 'literature', descVi: 'Học 29 chữ cái, ghép vần, đọc từ ngữ và luyện viết chữ chuẩn', descEn: '29 alphabet letters, phonics, sight words, and penmanship', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g1-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Đếm số, so sánh trong phạm vi 10 và 100, phép cộng trừ không nhớ, hình học trực quan', descEn: 'Counting, comparison within 10 & 100, simple addition/subtraction, shapes', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g1-nature-society', nameVi: 'Tự nhiên và Xã hội', nameEn: 'Nature & Society', category: 'science', descVi: 'Tìm hiểu về gia đình, trường học, chăm sóc cơ thể và con vật quen thuộc', descEn: 'Family, school, body parts, and familiar domestic animals', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g1-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Từ vựng tiếng Anh màu sắc, động vật, số đếm và chào hỏi vui nhộn', descEn: 'Colors, animals, numbers, and basic greetings', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g1-ethics', nameVi: 'Đạo đức & Kỹ năng', nameEn: 'Ethics & Life Skills', category: 'social', descVi: 'Lễ phép với người lớn, thương yêu bạn bè và tự chăm sóc bản thân', descEn: 'Respect, kindness, honesty, and self-care routines', iconName: 'HeartHandshake', color: 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800 text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
  ],
  2: [
    { id: 'g2-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Cộng trừ có nhớ trong phạm vi 100 và 1000, bảng nhân 2 và 5, đo lường dm, km, kg, lít', descEn: 'Regrouping addition/subtraction, times tables 2 and 5, measurement units', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g2-vietnamese', nameVi: 'Tiếng Việt', nameEn: 'Vietnamese', category: 'literature', descVi: 'Đọc hiểu mẩu chuyện thiếu nhi, luyện từ và câu, tập làm văn miêu tả đồ vật', descEn: 'Reading comprehension, grammar sentences, descriptive writing', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g2-nature-society', nameVi: 'Tự nhiên và Xã hội', nameEn: 'Nature & Society', category: 'science', descVi: 'Nghề nghiệp trong xã hội, môi trường sống của thực vật, an toàn giao thông', descEn: 'Occupations, natural habitats, and road safety', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g2-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Các câu giao tiếp hàng ngày, phòng học, đồ dùng học tập và hoạt động vui chơi', descEn: 'Daily classroom conversations, objects, and hobbies', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g2-ethics', nameVi: 'Đạo đức', nameEn: 'Ethics', category: 'social', descVi: 'Chăm chỉ học tập, giữ lời hứa, bảo vệ môi trường trường lớp xanh sạch', descEn: 'Responsibility, keeping promises, and keeping school clean', iconName: 'HeartHandshake', color: 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800 text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
  ],
  3: [
    { id: 'g3-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Bảng cửu chương 2-9, số có 4-5 chữ số, chu vi và diện tích hình vuông, hình chữ nhật', descEn: 'Multiplication tables 2-9, numbers to 100,000, rectangle area & perimeter', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g3-vietnamese', nameVi: 'Tiếng Việt', nameEn: 'Vietnamese', category: 'literature', descVi: 'Nghệ thuật so sánh, nhân hóa, mở rộng vốn từ quê hương và tập viết đoạn văn', descEn: 'Literary similes, personification, vocabulary, and paragraph writing', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g3-nature-society', nameVi: 'Tự nhiên và Xã hội', nameEn: 'Nature & Society', category: 'science', descVi: 'Cơ quan tuần hoàn, hô hấp, bài tiết ở người và các hiện tượng thời tiết tự nhiên', descEn: 'Human circulatory & respiratory systems, weather and climate', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g3-tech-informatics', nameVi: 'Tin học & Công nghệ', nameEn: 'Informatics & Tech', category: 'tech', descVi: 'Thao tác chuột, bàn phím, vẽ hình đồ họa Paint và làm quen tư duy lập trình khối', descEn: 'Keyboarding, mouse skills, digital drawing, and visual block coding', iconName: 'Code', color: 'bg-indigo-50 dark:bg-gray-800 border-indigo-200 dark:border-indigo-800 text-indigo-600', badgeColor: 'bg-indigo-100 text-indigo-700' },
    { id: 'g3-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Thì hiện tại đơn, hỏi đáp về tuổi, sở thích, gia đình và bạn bè', descEn: 'Present simple tense, asking about age, preferences, and family', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
  ],
  4: [
    { id: 'g4-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Số tự nhiên đến lớp triệu, 4 phép tính, dấu hiệu chia hết, phân số và hình học phẳng', descEn: 'Large numbers to millions, fractions, divisibility rules, and plane geometry', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g4-vietnamese', nameVi: 'Tiếng Việt', nameEn: 'Vietnamese', category: 'literature', descVi: 'Danh từ, động từ, tính từ, cấu tạo từ tiếng Việt và văn miêu tả cây cối, con vật', descEn: 'Nouns, verbs, adjectives, word structures, and nature essays', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g4-science', nameVi: 'Khoa học', nameEn: 'Science', category: 'science', descVi: 'Nước, không khí, ánh sáng, nhiệt độ, các nhóm chất dinh dưỡng và chuỗi thức ăn', descEn: 'Water, air, thermal energy, human nutrients, and food chains', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g4-history-geo', nameVi: 'Lịch sử và Địa lý', nameEn: 'History & Geography', category: 'social', descVi: 'Thời Hùng Vương dựng nước, các triều đại Lý - Trần, địa hình và sông ngòi Việt Nam', descEn: 'Early Vietnamese dynasties, national geography, terrain, and river systems', iconName: 'Landmark', color: 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800 text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
    { id: 'g4-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Mô tả ngoại hình, thời gian, hoạt động thường nhật và thì quá khứ đơn cơ bản', descEn: 'Describing appearance, telling time, daily routines, past simple intro', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g4-informatics', nameVi: 'Tin học & Công nghệ', nameEn: 'Informatics & Tech', category: 'tech', descVi: 'Soạn thảo văn bản, chèn hình ảnh, tìm kiếm thông tin an toàn trên Internet', descEn: 'Word processing, inserting illustrations, safe web search principles', iconName: 'Code', color: 'bg-purple-50 dark:bg-gray-800 border-purple-200 dark:border-purple-800 text-purple-600', badgeColor: 'bg-purple-100 text-purple-700' },
  ],
  5: [
    { id: 'g5-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Phân số nâng cao, số thập phân, tỉ số phần trăm, diện tích hình thang/tròn, thể tích hình hộp, toán chuyển động đều', descEn: 'Fractions, decimals, percentages, trapezoid/circle geometry, 3D volume, speed problems', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g5-vietnamese', nameVi: 'Tiếng Việt', nameEn: 'Vietnamese', category: 'literature', descVi: 'Đại từ, quan hệ từ, từ đồng nghĩa/trái nghĩa, văn miêu tả cảnh thiên nhiên và người', descEn: 'Pronouns, conjunctions, synonyms/antonyms, landscape and portrait essays', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g5-science', nameVi: 'Khoa học', nameEn: 'Science', category: 'science', descVi: 'Sự sinh sản của thực vật & động vật, năng lượng điện, mặt trời, bảo vệ tài nguyên môi trường', descEn: 'Biological reproduction, clean energy, electricity safety, environmental conservation', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g5-history-geo', nameVi: 'Lịch sử và Địa lý', nameEn: 'History & Geography', category: 'social', descVi: 'Lịch sử cận hiện đại Việt Nam, kinh tế các vùng miền đất nước, các châu lục trên thế giới', descEn: 'Modern Vietnamese history, regional domestic economies, world continents', iconName: 'Landmark', color: 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800 text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
    { id: 'g5-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Giao tiếp tình huống, các thì quá khứ/tương lai, kỹ năng đọc hiểu và chuẩn bị chuyển cấp THCS', descEn: 'Functional communication, past & future tenses, reading passages, middle school prep', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g5-informatics', nameVi: 'Tin học', nameEn: 'Informatics', category: 'tech', descVi: 'Bảng tính Excel cơ bản, trình chiếu đa phương tiện PowerPoint và lập trình khối Scratch', descEn: 'Spreadsheets intro, presentation decks, and visual block algorithm programming', iconName: 'Code', color: 'bg-purple-50 dark:bg-gray-800 border-purple-200 dark:border-purple-800 text-purple-600', badgeColor: 'bg-purple-100 text-purple-700' },
  ],
  6: [
    { id: 'g6-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Tập hợp, ước và bội, số nguyên (âm & dương), phân số & số thập phân, hình học trực quan', descEn: 'Integer arithmetic, divisibility factors, rational fractions, visual geometry', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g6-literature', nameVi: 'Ngữ văn', nameEn: 'Literature', category: 'literature', descVi: 'Truyện truyền thuyết, cổ tích, thơ lục bát, văn bản thông tin và viết đoạn văn nghị luận', descEn: 'Legends, fairy tales, traditional poetic meters, expository texts, opinion writing', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g6-science', nameVi: 'Khoa học Tự nhiên', nameEn: 'Natural Science', category: 'science', descVi: 'Mở đầu KHTN, các phép đo lường, chất và sự biến đổi, tế bào sống, lực và chuyển động', descEn: 'Scientific measurements, matter states, cellular biology, forces and physical motion', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g6-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Các thì hiện tại và tương lai, giới từ chỉ vị trí, miêu tả trường học, ngôi nhà và thành phố', descEn: 'Present and future tenses, prepositions of place, descriptions of towns and schools', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g6-history-geo', nameVi: 'Lịch sử và Địa lý', nameEn: 'History & Geography', category: 'social', descVi: 'Xã hội nguyên thủy, các nền văn minh cổ đại Ai Cập, Lưỡng Hà, Hy Lạp; bản đồ địa lý Trái Đất', descEn: 'Ancient world civilizations, prehistoric societies, cartography, Earth dynamics', iconName: 'Landmark', color: 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800 text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
    { id: 'g6-informatics', nameVi: 'Tin học', nameEn: 'Informatics', category: 'tech', descVi: 'Thông tin và dữ liệu số, mạng máy tính và Internet, sơ đồ khối thuật toán cơ bản', descEn: 'Digital data, computer networks and Internet, basic flowchart algorithms', iconName: 'Code', color: 'bg-purple-50 dark:bg-gray-800 border-purple-200 dark:border-purple-800 text-purple-600', badgeColor: 'bg-purple-100 text-purple-700' },
    { id: 'g6-civics', nameVi: 'Giáo dục công dân', nameEn: 'Civic Education', category: 'social', descVi: 'Tự hào truyền thống, yêu thương con người, siêng năng kiên trì, tôn trọng sự thật, tự lập và tiết kiệm', descEn: 'Family traditions, compassion, perseverance, honesty, independence, and thrift', iconName: 'HeartHandshake', color: 'bg-cyan-50 dark:bg-gray-800 border-cyan-200 dark:border-cyan-800 text-cyan-600', badgeColor: 'bg-cyan-100 text-cyan-700' },
    { id: 'g6-technology', nameVi: 'Công nghệ', nameEn: 'Technology', category: 'tech', descVi: 'Nhà ở, ngôi nhà thông minh, bảo quản thực phẩm an toàn, trang phục và đồ dùng điện trong gia đình', descEn: 'Smart home, food preservation, clothing, and domestic electric devices', iconName: 'Cpu', color: 'bg-orange-50 dark:bg-gray-800 border-orange-200 dark:border-orange-800 text-orange-600', badgeColor: 'bg-orange-100 text-orange-700' },
  ],
  7: [
    { id: 'g7-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Số hữu tỉ, số thực, biểu thức đại số, đa thức một biến, tam giác bằng nhau, đường vuông góc', descEn: 'Rational & real numbers, algebraic polynomials, triangle congruence theorems', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g7-literature', nameVi: 'Ngữ văn', nameEn: 'Literature', category: 'literature', descVi: 'Thơ 4-5 chữ, truyện ngụ ngôn, tùy bút, văn bản nghị luận chứng minh và giải thích', descEn: 'Short metered poetry, fables, personal essays, argumentative writing', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g7-science', nameVi: 'Khoa học Tự nhiên', nameEn: 'Natural Science', category: 'science', descVi: 'Bảng tuần hoàn các nguyên tố hóa học, phân tử, tốc độ chuyển động, âm thanh, ánh sáng, quang hợp', descEn: 'Periodic table basics, molecules, kinematic speed, acoustics, optics, photosynthesis', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g7-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'So sánh hơn/nhất, câu điều kiện loại 1, các thì tiếp diễn, chủ đề âm nhạc và ẩm thực', descEn: 'Comparatives/superlatives, conditional type 1, progressive tenses, arts and music', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g7-history-geo', nameVi: 'Lịch sử và Địa lý', nameEn: 'History & Geography', category: 'social', descVi: 'Việt Nam thời Lý - Trần, châu Âu và châu Á thời phong kiến, đặc điểm tự nhiên các châu lục', descEn: 'Medieval Vietnamese feudal dynasties, feudal Eurasia, continental geography', iconName: 'Landmark', color: 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800 text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
    { id: 'g7-informatics', nameVi: 'Tin học', nameEn: 'Informatics', category: 'tech', descVi: 'Phần mềm bảng tính điện tử Excel, tạo biểu đồ số liệu, an toàn không gian mạng', descEn: 'Spreadsheets data analytics, chart visualizations, cybersecurity hygiene', iconName: 'Code', color: 'bg-purple-50 dark:bg-gray-800 border-purple-200 dark:border-purple-800 text-purple-600', badgeColor: 'bg-purple-100 text-purple-700' },
  ],
  8: [
    { id: 'g8-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: '7 hằng đẳng thức đáng nhớ, phân tích đa thức thành nhân tử, phân thức đại số, tứ giác, định lý Talet', descEn: '7 special identities, polynomial factoring, rational expressions, quadrilaterals, Thales theorem', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g8-literature', nameVi: 'Ngữ văn', nameEn: 'Literature', category: 'literature', descVi: 'Hài kịch, truyện lịch sử, văn bản nghị luận xã hội, biện pháp tu từ đảo ngữ, chơi chữ, điệp từ', descEn: 'Dramatic comedy, historical narratives, social commentary essays, rhetoric devices', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g8-science', nameVi: 'Khoa học Tự nhiên', nameEn: 'Natural Science', category: 'science', descVi: 'Phản ứng hóa học, bảo toàn khối lượng, mol và nồng độ dung dịch, cơ học áp suất, giải phẫu cơ thể người', descEn: 'Chemical equations, conservation of mass, molarity, liquid pressure, human anatomy', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g8-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Câu bị động (Passive voice), câu tường thuật gián tiếp, mệnh đề quan hệ, chủ đề công nghệ và môi trường', descEn: 'Passive voice, reported speech, relative clauses, technology and green lifestyle', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g8-history-geo', nameVi: 'Lịch sử và Địa lý', nameEn: 'History & Geography', category: 'social', descVi: 'Cách mạng công nghiệp phương Tây, phong trào yêu nước chống Pháp, địa lý tự nhiên và khoáng sản Việt Nam', descEn: 'Industrial revolution, Vietnamese resistance against French colonialism, natural resources', iconName: 'Landmark', color: 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800 text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
    { id: 'g8-informatics', nameVi: 'Tin học', nameEn: 'Informatics', category: 'tech', descVi: 'Lập trình trực quan Scratch/Python cơ bản, thuật toán sắp xếp và tìm kiếm dữ liệu', descEn: 'Scratch and Python coding fundamentals, sorting and searching algorithms', iconName: 'Code', color: 'bg-purple-50 dark:bg-gray-800 border-purple-200 dark:border-purple-800 text-purple-600', badgeColor: 'bg-purple-100 text-purple-700' },
  ],
  9: [
    { id: 'g9-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Căn bậc hai & ba, hệ 2 phương trình bậc nhất, phương trình bậc hai & định lý Vi-ét, đường tròn, hình không gian', descEn: 'Radicals, linear systems, quadratic equations & Vieta theorem, circle geometry, 3D solids', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g9-literature', nameVi: 'Ngữ văn', nameEn: 'Literature', category: 'literature', descVi: 'Tác phẩm văn học hiện đại Việt Nam (thơ & truyện ngắn), nghị luận văn học, nghị luận xã hội ôn thi vào lớp 10', descEn: 'Modern Vietnamese prose and poetry masterpieces, literary & societal critique, grade 10 prep', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g9-science', nameVi: 'Khoa học Tự nhiên', nameEn: 'Natural Science', category: 'science', descVi: 'Hợp chất vô cơ (oxit, axit, bazơ, muối), kim loại, dòng điện xoay chiều, thấu kính quang học, di truyền Menđen', descEn: 'Inorganic families, metal reactivity, AC electricity, convex/concave optics, Mendelian genetics', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g9-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Tổng ôn luyện thi vào lớp 10: câu điều kiện loại 2, câu ước Wish, mệnh đề quan hệ rút gọn, trọng âm & ngữ pháp', descEn: 'Grade 10 entrance exam prep: conditionals, wish clauses, reduced relatives, phonetics', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g9-history-geo', nameVi: 'Lịch sử và Địa lý', nameEn: 'History & Geography', category: 'social', descVi: 'Lịch sử thế giới hiện đại từ 1919, Chiến tranh thế giới thứ hai, địa lý kinh tế các vùng trọng điểm Việt Nam', descEn: 'World history 1919-present, World War II, socioeconomic geography of Vietnamese regions', iconName: 'Landmark', color: 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800 text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
    { id: 'g9-informatics', nameVi: 'Tin học', nameEn: 'Informatics', category: 'tech', descVi: 'Lập trình cấu trúc điều khiển trong Python, phân tích tập dữ liệu và xây dựng dự án ứng dụng', descEn: 'Structured control flows in Python, data processing, and student mini-software projects', iconName: 'Code', color: 'bg-purple-50 dark:bg-gray-800 border-purple-200 dark:border-purple-800 text-purple-600', badgeColor: 'bg-purple-100 text-purple-700' },
  ],
  10: [
    { id: 'g10-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Mệnh đề & tập hợp, bất phương trình bậc hai một ẩn, vectơ hình học, hệ thức lượng tam giác, đại số tổ hợp', descEn: 'Mathematical logic & sets, quadratic inequalities, vector geometry, Law of Sines/Cosines, combinatorics', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g10-physics', nameVi: 'Vật lý', nameEn: 'Physics', category: 'science', descVi: 'Động học chất điểm, chuyển động biến đổi đều, 3 định luật Newton, các lực cơ học, động lượng & bảo toàn năng lượng', descEn: 'Kinematics, uniform accelerated motion, Newton laws, mechanical forces, momentum & energy conservation', iconName: 'Atom', color: 'bg-cyan-50 dark:bg-gray-800 border-cyan-200 dark:border-cyan-800 text-cyan-600', badgeColor: 'bg-cyan-100 text-cyan-700' },
    { id: 'g10-chemistry', nameVi: 'Hóa học', nameEn: 'Chemistry', category: 'science', descVi: 'Cấu tạo nguyên tử, bảng tuần hoàn các nguyên tố, liên kết hóa học ion & cộng hóa trị, phản ứng oxi hóa - khử', descEn: 'Atomic structure, periodic table trends, chemical bonds (ionic & covalent), redox reactions', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g10-biology', nameVi: 'Sinh học', nameEn: 'Biology', category: 'science', descVi: 'Sinh học phân tử & tế bào, thành phần hóa học (cacbohidrat, lipit, protein, axit nucleic), chu kỳ tế bào & phân bào', descEn: 'Molecular cell biology, macromolecules (DNA, RNA, proteins), cell cycle, mitosis and meiosis', iconName: 'Dna', color: 'bg-green-50 dark:bg-gray-800 border-green-200 dark:border-green-800 text-green-600', badgeColor: 'bg-green-100 text-green-700' },
    { id: 'g10-literature', nameVi: 'Ngữ văn', nameEn: 'Literature', category: 'literature', descVi: 'Sử thi và thần thoại, thơ trữ tình trung đại, nghệ thuật chèo tuồng truyền thống, bài văn nghị luận phân tích', descEn: 'Epic poetry & mythology, medieval Vietnamese lyric poetry, traditional drama, analytical criticism', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g10-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Ngữ pháp học thuật, danh động từ và động từ nguyên mẫu, ôn luyện IELTS/THPT nền tảng, các chủ đề xã hội', descEn: 'Academic grammar, gerunds & infinitives, IELTS foundational skills, modern societal topics', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g10-informatics', nameVi: 'Tin học', nameEn: 'Informatics', category: 'tech', descVi: 'Kiến trúc máy tính, ngôn ngữ lập trình Python, xử lý kiểu dữ liệu danh sách, chuỗi, hàm và tệp tin', descEn: 'Computer architecture, Python programming, lists, strings, functions, and file I/O handling', iconName: 'Code', color: 'bg-purple-50 dark:bg-gray-800 border-purple-200 dark:border-purple-800 text-purple-600', badgeColor: 'bg-purple-100 text-purple-700' },
    { id: 'g10-history', nameVi: 'Lịch sử', nameEn: 'History', category: 'social', descVi: 'Lịch sử và sử học, các nền văn minh phương Đông & phương Tây cổ - trung đại, văn minh Văn Lang - Đại Việt', descEn: 'Historiography, ancient civilizations of East and West, foundational Vietnamese civil society', iconName: 'Landmark', color: 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800 text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
    { id: 'g10-geography', nameVi: 'Địa lý', nameEn: 'Geography', category: 'social', descVi: 'Địa lý tự nhiên đại cương: thạch quyển, khí quyển, thủy quyển, sinh quyển và phương pháp sử dụng bản đồ', descEn: 'Earth physical systems (lithosphere, atmosphere, hydrosphere, biosphere), advanced GIS & cartography', iconName: 'Compass', color: 'bg-orange-50 dark:bg-gray-800 border-orange-200 dark:border-orange-800 text-orange-600', badgeColor: 'bg-orange-100 text-orange-700' },
  ],
  11: [
    { id: 'g11-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Hàm số lượng giác & phương trình lượng giác, dãy số, cấp số cộng/nhân, giới hạn, đạo hàm, hình học không gian', descEn: 'Trigonometric equations, sequences & series, calculus limits, derivatives, 3D space perpendicularity', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g11-physics', nameVi: 'Vật lý', nameEn: 'Physics', category: 'science', descVi: 'Dao động điều hòa (con lắc lò xo, con lắc đơn), sóng cơ học & giao thoa sóng, điện trường, dòng điện không đổi', descEn: 'Simple harmonic motion, mechanical waves & interference, electrostatic fields, direct electric currents', iconName: 'Atom', color: 'bg-cyan-50 dark:bg-gray-800 border-cyan-200 dark:border-cyan-800 text-cyan-600', badgeColor: 'bg-cyan-100 text-cyan-700' },
    { id: 'g11-chemistry', nameVi: 'Hóa học', nameEn: 'Chemistry', category: 'science', descVi: 'Cân bằng hóa học, dung dịch điện li và pH, hydrocacbon (ankan, anken, ankin, aren), dẫn xuất halogen, ancol - phenol', descEn: 'Chemical equilibrium, electrolyte solutions & pH, hydrocarbons, halogen derivatives, alcohols and phenols', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g11-biology', nameVi: 'Sinh học', nameEn: 'Biology', category: 'science', descVi: 'Trao đổi chất và chuyển hóa năng lượng ở thực vật & động vật, cảm ứng, sinh trưởng và phát triển sinh giới', descEn: 'Plant and animal bioenergetics, sensory responses, organism development and homeostasis', iconName: 'Dna', color: 'bg-green-50 dark:bg-gray-800 border-green-200 dark:border-green-800 text-green-600', badgeColor: 'bg-green-100 text-green-700' },
    { id: 'g11-literature', nameVi: 'Ngữ văn', nameEn: 'Literature', category: 'literature', descVi: 'Văn học hiện thực phê phán, phong trào Thơ mới, văn bản nghị luận văn học và phương pháp nghiên cứu khoa học', descEn: 'Critical realism in prose, the New Poetry movement, academic synthesis and critical debate', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g11-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Mệnh đề phân từ (Participle clauses), câu chẻ (Cleft sentences), câu điều kiện kết hợp, từ vựng học thuật nâng cao', descEn: 'Participle clauses, cleft sentences, mixed conditionals, academic vocabulary enrichment', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g11-informatics', nameVi: 'Tin học', nameEn: 'Informatics', category: 'tech', descVi: 'Lập trình thuật toán đệ quy, lập trình hướng đối tượng OOP, hệ cơ sở dữ liệu quan hệ SQL', descEn: 'Recursive algorithms, object-oriented programming (OOP), relational databases with SQL', iconName: 'Code', color: 'bg-purple-50 dark:bg-gray-800 border-purple-200 dark:border-purple-800 text-purple-600', badgeColor: 'bg-purple-100 text-purple-700' },
  ],
  12: [
    { id: 'g12-math', nameVi: 'Toán học', nameEn: 'Mathematics', category: 'math', descVi: 'Ứng dụng đạo hàm khảo sát hàm số, hàm số lũy thừa/mũ/logarit, nguyên hàm & tích phân, số phức, hình học Oxyz', descEn: 'Differential calculus curve analysis, exponential/log functions, integrals, complex numbers, 3D Oxyz geometry', iconName: 'Calculator', color: 'bg-teal-50 dark:bg-gray-800 border-teal-200 dark:border-teal-800 text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
    { id: 'g12-physics', nameVi: 'Vật lý', nameEn: 'Physics', category: 'science', descVi: 'Dao động cơ học nâng cao, sóng âm & sóng điện từ, dòng điện xoay chiều, sóng ánh sáng, lượng tử & vật lý hạt nhân', descEn: 'Advanced oscillation, electromagnetic waves, AC power, optical wave interference, quantum and nuclear physics', iconName: 'Atom', color: 'bg-cyan-50 dark:bg-gray-800 border-cyan-200 dark:border-cyan-800 text-cyan-600', badgeColor: 'bg-cyan-100 text-cyan-700' },
    { id: 'g12-chemistry', nameVi: 'Hóa học', nameEn: 'Chemistry', category: 'science', descVi: 'Este & Lipit, Cacbohiđrat, Amin, Amino axit & Protein, Polime & vật liệu mới, đại cương kim loại và hợp kim', descEn: 'Esters & lipids, carbohydrates, amines and proteins, synthetic polymers, metallurgy of metals', iconName: 'FlaskConical', color: 'bg-emerald-50 dark:bg-gray-800 border-emerald-200 dark:border-emerald-800 text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
    { id: 'g12-biology', nameVi: 'Sinh học', nameEn: 'Biology', category: 'science', descVi: 'Cơ chế di truyền và biến dị (ADN, mã di truyền, đột biến), quy luật di truyền Menđen, di truyền học quần thể, tiến hóa', descEn: 'Molecular genetics (DNA, transcription, mutation), Mendelian inheritance, population genetics, evolutionary ecology', iconName: 'Dna', color: 'bg-green-50 dark:bg-gray-800 border-green-200 dark:border-green-800 text-green-600', badgeColor: 'bg-green-100 text-green-700' },
    { id: 'g12-literature', nameVi: 'Ngữ văn', nameEn: 'Literature', category: 'literature', descVi: 'Kiệt tác văn học hiện đại & cách mạng Việt Nam, phong cách nghệ thuật tác gia lớn, phương pháp làm bài thi tốt nghiệp', descEn: 'Modern and revolutionary Vietnamese masterworks, literary authors style critique, national exam strategies', iconName: 'BookOpen', color: 'bg-rose-50 dark:bg-gray-800 border-rose-200 dark:border-rose-800 text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'g12-english', nameVi: 'Tiếng Anh', nameEn: 'English', category: 'english', descVi: 'Tổng ôn luyện toàn diện thi Tốt nghiệp THPT & Đại học, bẫy ngữ pháp, bài đọc hiểu học thuật, từ vựng chuyên sâu', descEn: 'National high school graduation and university entrance exam mastery, reading strategies, advanced grammar', iconName: 'Globe', color: 'bg-blue-50 dark:bg-gray-800 border-blue-200 dark:border-blue-800 text-blue-600', badgeColor: 'bg-blue-100 text-blue-700' },
    { id: 'g12-informatics', nameVi: 'Tin học', nameEn: 'Informatics', category: 'tech', descVi: 'Trí tuệ nhân tạo (AI), học máy Machine Learning cơ bản, an ninh mạng và kiến trúc hệ thống thông tin', descEn: 'Artificial intelligence (AI), machine learning foundations, cloud cybersecurity and software design', iconName: 'Code', color: 'bg-purple-50 dark:bg-gray-800 border-purple-200 dark:border-purple-800 text-purple-600', badgeColor: 'bg-purple-100 text-purple-700' },
    { id: 'g12-history', nameVi: 'Lịch sử', nameEn: 'History', category: 'social', descVi: 'Lịch sử thế giới hiện đại từ 1945 đến nay, Chiến tranh Lạnh, Cách mạng giải phóng dân tộc và công cuộc Đổi mới Việt Nam', descEn: 'World history 1945-present, the Cold War, Vietnamese national liberation and contemporary modernization', iconName: 'Landmark', color: 'bg-amber-50 dark:bg-gray-800 border-amber-200 dark:border-amber-800 text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
    { id: 'g12-geography', nameVi: 'Địa lý', nameEn: 'Geography', category: 'social', descVi: 'Địa lý tự nhiên, dân cư và kinh tế Việt Nam, chuyển dịch cơ cấu ngành và phát triển các vùng kinh tế trọng điểm', descEn: 'Physical, demographic and economic geography of Vietnam, structural transitions, key economic regions', iconName: 'Compass', color: 'bg-orange-50 dark:bg-gray-800 border-orange-200 dark:border-orange-800 text-orange-600', badgeColor: 'bg-orange-100 text-orange-700' },
  ]
};

export function getSubjectsForGrade(grade: number): GradeSubject[] {
  return GRADE_SUBJECTS_MAP[grade] || GRADE_SUBJECTS_MAP[5];
}

import { PRIMARY_QUIZZES } from './quizzesPrimary';
import { MIDDLE_QUIZZES } from './quizzesMiddle';
import { HIGH_QUIZZES } from './quizzesHigh';
import { ALL_CURRICULUM_PDFS } from './pdfsCurriculum';

// Rich, authentic curriculum quizzes covering all 12 grades and subjects
export const CURRICULUM_QUIZZES: CurriculumQuiz[] = [
  ...PRIMARY_QUIZZES,
  ...MIDDLE_QUIZZES,
  ...HIGH_QUIZZES
];

// Complete curriculum review PDFs with authentic textbook notes and formulas
export const CURRICULUM_PDFS: CurriculumPDF[] = [
  ...ALL_CURRICULUM_PDFS
];

/**
 * Filter quizzes by grade and semester
 */
export function getCurriculumQuizzes(grade: number, semester?: 1 | 2): CurriculumQuiz[] {
  return CURRICULUM_QUIZZES.filter(q => {
    const matchGrade = q.grade === grade;
    if (semester !== undefined) {
      return matchGrade && q.semester === semester;
    }
    return matchGrade;
  });
}

/**
 * Filter PDFs by grade and semester
 */
export function getCurriculumPDFs(grade: number, semester?: 1 | 2): CurriculumPDF[] {
  return CURRICULUM_PDFS.filter(p => {
    const matchGrade = p.grade === grade;
    if (semester !== undefined) {
      return matchGrade && p.semester === semester;
    }
    return matchGrade;
  });
}

/**
 * Get quiz by ID
 */
export function getCurriculumQuizById(id: string): CurriculumQuiz | undefined {
  return CURRICULUM_QUIZZES.find(q => q.id === id);
}

/**
 * Get PDF by ID
 */
export function getCurriculumPDFById(id: string): CurriculumPDF | undefined {
  return CURRICULUM_PDFS.find(p => p.id === id);
}

/**
 * Determine if a quiz is Regular assessment, Midterm, or Final
 */
export function getQuizTestType(quiz: CurriculumQuiz): QuizTestType {
  if (quiz.testType) return quiz.testType;
  const t = (quiz.title + ' ' + (quiz.description || '')).toLowerCase();
  if (t.includes('thường xuyên') || t.includes('15 phút') || t.includes('15-minute') || t.includes('regular') || quiz.durationMinutes <= 20) {
    return 'regular';
  }
  if (t.includes('cuối kỳ') || t.includes('final') || quiz.durationMinutes >= 55) {
    return 'final';
  }
  return 'midterm';
}

/**
 * Accurately check if a quiz belongs to a specific subject (prevents overlap/leakage between subjects)
 */
export function isQuizForSubject(quiz: CurriculumQuiz, sub: SubjectInfo): boolean {
  const qId = (quiz.id || '').toLowerCase();
  const qSub = (quiz.subjectVi || quiz.subject || '').toLowerCase();
  const qTitle = (quiz.title || '').toLowerCase();
  const sId = (sub.id || '').toLowerCase();
  const sCat = (sub.category || '').toLowerCase();

  // Civic Education (Giáo dục công dân)
  if (sId.includes('civic') || sId.includes('civ')) {
    return qId.includes('-civ-') || qId.includes('civics') || qSub.includes('công dân') || qSub.includes('gdcd') || qTitle.includes('công dân') || qTitle.includes('gdcd');
  }
  // History & Geography (Lịch sử & Địa lí) - distinct from Civics
  if (sId.includes('history') || sId.includes('geo')) {
    return (qId.includes('hisgeo') || qId.includes('history') || qSub.includes('lịch sử') || qSub.includes('địa l') || qTitle.includes('lịch sử') || qTitle.includes('địa l')) && !qId.includes('civ') && !qSub.includes('công dân');
  }
  // Technology (Công nghệ) - distinct from Informatics
  if (sId.includes('technology')) {
    return (qId.includes('-tech-') || qId.endsWith('-tech') || qId.includes('technology')) || qSub.includes('công nghệ') || qTitle.includes('công nghệ');
  }
  // Informatics / IT (Tin học) - distinct from Technology
  if (sId.includes('informatics') || sId.includes('info')) {
    return (qId.includes('-it-') || qId.endsWith('-it') || qId.includes('informatics')) || qSub.includes('tin học') || qTitle.includes('tin học');
  }
  // Mathematics
  if (sId.includes('math') || sCat === 'math') {
    return qId.includes('math') || qSub.includes('toán') || qTitle.includes('toán');
  }
  // Literature
  if (sId.includes('literature') || sCat === 'literature') {
    return qId.includes('lit') || qSub.includes('văn') || qTitle.includes('văn');
  }
  // Science / KHTN
  if (sId.includes('science') || sCat === 'science') {
    return qId.includes('sci') || qSub.includes('khoa học') || qSub.includes('khtn') || qTitle.includes('khtn');
  }
  // English
  if (sId.includes('english') || sCat === 'english') {
    return qId.includes('eng') || qSub.includes('tiếng anh') || qTitle.includes('tiếng anh');
  }
  return false;
}

/**
 * Accurately check if a PDF belongs to a specific subject
 */
export function isPDFForSubject(pdf: CurriculumPDF, sub: SubjectInfo): boolean {
  const pId = (pdf.id || '').toLowerCase();
  const pSub = (pdf.subjectVi || pdf.subject || '').toLowerCase();
  const pTitle = (pdf.title || '').toLowerCase();
  const sId = (sub.id || '').toLowerCase();
  const sCat = (sub.category || '').toLowerCase();

  if (sId.includes('civic') || sId.includes('civ')) {
    return pId.includes('civ') || pSub.includes('công dân') || pSub.includes('gdcd') || pTitle.includes('công dân');
  }
  if (sId.includes('history') || sId.includes('geo')) {
    return (pId.includes('his') || pId.includes('geo') || pSub.includes('lịch sử') || pSub.includes('địa l') || pTitle.includes('lịch sử') || pTitle.includes('địa l')) && !pId.includes('civ') && !pSub.includes('công dân');
  }
  if (sId.includes('technology')) {
    return (pId.includes('tech') && !pId.includes('it')) || pSub.includes('công nghệ') || pTitle.includes('công nghệ');
  }
  if (sId.includes('informatics') || sId.includes('info')) {
    return pId.includes('it') || pId.includes('info') || pSub.includes('tin học') || pTitle.includes('tin học');
  }
  if (sId.includes('math') || sCat === 'math') {
    return pId.includes('math') || pSub.includes('toán') || pTitle.includes('toán');
  }
  if (sId.includes('literature') || sCat === 'literature') {
    return pId.includes('lit') || pSub.includes('văn') || pTitle.includes('văn');
  }
  if (sId.includes('science') || sCat === 'science') {
    return pId.includes('sci') || pSub.includes('khoa học') || pSub.includes('khtn') || pTitle.includes('khtn');
  }
  if (sId.includes('english') || sCat === 'english') {
    return pId.includes('eng') || pSub.includes('tiếng anh') || pTitle.includes('tiếng anh');
  }
  return false;
}
