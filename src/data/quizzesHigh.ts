import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Quizzes for High School (THPT: Lớp 10 - 12)
 * Based on Ministry of Education GDPT 2018 Textbooks (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */
export const HIGH_QUIZZES: CurriculumQuiz[] = [
  // ==========================================
  // GRADE 10 - LỚP 10
  // ==========================================
  {
    id: 'quiz-g10-s1-math-sets-vectors',
    title: 'Toán 10 - HK1: Mệnh đề, Tập hợp & Tích vô hướng của Vectơ',
    titleEn: 'Math 10 - Sem 1: Logic Sets, Vectors & Dot Product',
    grade: 10,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 150,
    description: 'Mệnh đề kéo theo, phép toán tập hợp (giao, hợp, hiệu), vectơ hình học, hệ thức lượng tam giác (Định lý Cosin và Sin).',
    descriptionEn: 'Mathematical logic, set operations, vector arithmetic, Law of Cosines and Sines.',
    questions: [
      {
        question: 'Cho tam giác ABC có a = 8, b = 5 và góc C = 60°. Độ dài cạnh c tính theo định lý Cosin là bao nhiêu?',
        options: ['c = 7', 'c = 49', 'c = √89', 'c = 6'],
        answerIndex: 0,
        hint: 'Định lý Cosin: c² = a² + b² - 2ab.cos(C) = 64 + 25 - 2.8.5.(1/2) = 49.',
        explanation: 'c² = 8² + 5² - 2 . 8 . 5 . cos 60° = 64 + 25 - 40 = 49 => c = √49 = 7.'
      },
      {
        question: 'Tích vô hướng của hai vectơ khác không a⃗ và b⃗ được định nghĩa theo công thức nào?',
        options: ['a⃗ . b⃗ = |a⃗| . |b⃗| . cos(a⃗, b⃗)', 'a⃗ . b⃗ = |a⃗| . |b⃗| . sin(a⃗, b⃗)', 'a⃗ . b⃗ = |a⃗| + |b⃗|', 'a⃗ . b⃗ = |a⃗ + b⃗|'],
        answerIndex: 0,
        hint: 'Tích độ dài hai vectơ nhân với cosin của góc xen giữa.',
        explanation: 'Tích vô hướng của hai vectơ: a⃗ . b⃗ = |a⃗| . |b⃗| . cos(a⃗, b⃗).'
      },
      {
        question: 'Phủ định của mệnh đề "∀x ∈ ℝ, x² ≥ 0" là mệnh đề nào sau đây?',
        options: ['∃x ∈ ℝ, x² < 0', '∀x ∈ ℝ, x² < 0', '∃x ∈ ℝ, x² ≤ 0', '∀x ∈ ℝ, x² > 0'],
        answerIndex: 0,
        hint: 'Phủ định của với mọi (∀) là tồn tại (∃); phủ định của ≥ là <.',
        explanation: 'Phủ định của "∀x ∈ ℝ, P(x)" là "∃x ∈ ℝ, ¬P(x)". Vì vậy phủ định là "∃x ∈ ℝ, x² < 0".'
      }
    ]
  },
  {
    id: 'quiz-g10-s1-physics-newton-kinematics',
    title: 'Vật lý 10 - HK1: Chuyển động Biến đổi đều & Ba Định luật Newton',
    titleEn: 'Physics 10 - Sem 1: Kinematics & Newton Three Laws of Motion',
    grade: 10,
    semester: 1,
    subject: 'Vật lý',
    subjectVi: 'Vật lý',
    subjectEn: 'Physics',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 150,
    description: 'Chuyển động thẳng biến đổi đều (v = v0 + at, d = v0.t + 1/2at²), định luật I, II, III Newton, lực ma sát và trọng lực.',
    descriptionEn: 'Uniform accelerated motion equations, Newton dynamics laws, friction and gravitational force.',
    questions: [
      {
        question: 'Định luật II Newton phát biểu mối quan hệ giữa gia tốc a⃗, hợp lực F⃗ tác dụng và khối lượng m của vật như thế nào?',
        options: ['a⃗ = F⃗ / m (hay F⃗ = m.a⃗)', 'F⃗ = m / a⃗', 'a⃗ = m . F⃗', 'F⃗ = m . v⃗'],
        answerIndex: 0,
        hint: 'Gia tốc của một vật cùng hướng với hợp lực tác dụng, độ lớn tỉ lệ thuận với lực và tỉ lệ nghịch với khối lượng.',
        explanation: 'Biểu thức chuẩn của định luật II Newton: F⃗ = m.a⃗ (hoặc a⃗ = F⃗/m).'
      },
      {
        question: 'Một ô tô đang chuyển động với vận tốc 20 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Quãng đường ô tô đi được đến khi dừng hẳn là:',
        options: ['100 m', '200 m', '50 m', '80 m'],
        answerIndex: 0,
        hint: 'Công thức độc lập thời gian: v² - v₀² = 2as. Khi dừng lại v = 0, a = -2 m/s².',
        explanation: '0² - 20² = 2 . (-2) . s <=> -400 = -4s <=> s = 100 m.'
      },
      {
        question: 'Theo định luật III Newton, hai lực trực đối tương tác giữa hai vật A và B có đặc điểm nào?',
        options: [
          'Cùng độ lớn, ngược hướng, tác dụng vào hai vật khác nhau (không cân bằng nhau)',
          'Cùng độ lớn, cùng hướng và cùng tác dụng vào một vật',
          'Tác dụng vào cùng một vật và triệt tiêu nhau',
          'Có độ lớn khác nhau tùy thuộc vào khối lượng vật nào lớn hơn'
        ],
        answerIndex: 0,
        hint: 'Lực và phản lực luôn xuất hiện và mất đi đồng thời, tác dụng lên 2 vật tương tác khác nhau.',
        explanation: 'F⃗_AB = - F⃗_BA: hai lực cùng giá, ngược chiều, cùng độ lớn và đặt vào hai vật khác nhau.'
      }
    ]
  },
  {
    id: 'quiz-g10-s1-chemistry-atom-periodic-table',
    title: 'Hóa học 10 - HK1: Cấu tạo Nguyên tử & Liên kết Hóa học',
    titleEn: 'Chemistry 10 - Sem 1: Atomic Structure, Periodic Trends & Bonding',
    grade: 10,
    semester: 1,
    subject: 'Hóa học',
    subjectVi: 'Hóa học',
    subjectEn: 'Chemistry',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 150,
    description: 'Hạt electron, proton, nơtron; cấu hình electron nguyên tử; liên kết ion và liên kết cộng hóa trị; quy tắc bát tử Octet.',
    descriptionEn: 'Atomic subparticles, electron configurations, ionic and covalent bonding, octet rule.',
    questions: [
      {
        question: 'Nguyên tử Natri (Na) có số hiệu nguyên tử Z = 11. Cấu hình electron của nguyên tử Na là:',
        options: ['1s² 2s² 2p⁶ 3s¹', '1s² 2s² 2p⁶ 3s²', '1s² 2s² 2p⁵ 3s²', '1s² 2s² 2p⁶'],
        answerIndex: 0,
        hint: 'Tổng số electron là 11: phân lớp 1s (2), 2s (2), 2p (6), 3s (1).',
        explanation: 'Với Z = 11: các electron phân bố theo mức năng lượng là 1s² 2s² 2p⁶ 3s¹.'
      },
      {
        question: 'Liên kết hình thành giữa nguyên tử kim loại điển hình và nguyên tử phi kim điển hình do lực hút tĩnh điện giữa các ion trái dấu được gọi là:',
        options: ['Liên kết ion', 'Liên kết cộng hóa trị có cực', 'Liên kết cộng hóa trị không cực', 'Liên kết hiđro'],
        answerIndex: 0,
        hint: 'Ví dụ điển hình trong phân tử muối ăn NaCl (Na⁺ và Cl⁻).',
        explanation: 'Liên kết ion là liên kết được hình thành bởi lực hút tĩnh điện giữa các ion mang điện tích trái dấu.'
      },
      {
        question: 'Quy tắc Octet (bát tử) phát biểu rằng trong quá trình hình thành liên kết hóa học, các nguyên tử có xu hướng đạt được cấu hình electron bền vững của khí hiếm với bao nhiêu electron ở lớp ngoài cùng?',
        options: ['8 electron (hoặc 2 electron với H, He)', '10 electron', '6 electron', '18 electron'],
        answerIndex: 0,
        hint: 'Từ "Octet" xuất phát từ tiếng Hy Lạp có nghĩa là số 8.',
        explanation: 'Các nguyên tử có xu hướng nhường, nhận hoặc góp chung electron để đạt lớp vỏ ngoài cùng có 8 electron giống khí hiếm gần nhất.'
      }
    ]
  },
  {
    id: 'quiz-g10-s2-math-quadratics-oxy',
    title: 'Toán 10 - HK2: Dấu Tam thức Bậc hai & Hình học Tọa độ Oxy',
    titleEn: 'Math 10 - Sem 2: Quadratic Signs & Analytic Geometry of Lines and Circles',
    grade: 10,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 22,
    xpReward: 160,
    description: 'Quy tắc xét dấu tam thức bậc hai ax² + bx + c, bất phương trình bậc hai; phương trình tổng quát đường thẳng và phương trình đường tròn trong Oxy.',
    descriptionEn: 'Quadratic sign rules, quadratic inequalities, coordinate lines and circle equations in 2D Oxy.',
    questions: [
      {
        question: 'Tập nghiệm của bất phương trình bậc hai x² - 4x + 3 < 0 là khoảng nào sau đây?',
        options: ['(1; 3)', '(-∞; 1) ∪ (3; +∞)', '[1; 3]', '(-3; -1)'],
        answerIndex: 0,
        hint: 'Tam thức có hai nghiệm x = 1 và x = 3, hệ số a = 1 > 0. Dấu trong khoảng hai nghiệm trái dấu với a (mang dấu âm).',
        explanation: 'Phương trình x² - 4x + 3 = 0 có nghiệm x1 = 1, x2 = 3. Theo quy tắc "trong trái ngoài cùng", tam thức mang dấu âm khi 1 < x < 3.'
      },
      {
        question: 'Trong mặt phẳng Oxy, phương trình đường tròn có tâm I(2; -3) và bán kính R = 5 là:',
        options: ['(x - 2)² + (y + 3)² = 25', '(x + 2)² + (y - 3)² = 25', '(x - 2)² + (y + 3)² = 5', '(x - 2)² + (y - 3)² = 25'],
        answerIndex: 0,
        hint: 'Phương trình đường tròn chuẩn: (x - a)² + (y - b)² = R².',
        explanation: '(x - 2)² + (y - (-3))² = 5² <=> (x - 2)² + (y + 3)² = 25.'
      },
      {
        question: 'Vectơ pháp tuyến n⃗ của đường thẳng có phương trình tổng quát 3x - 4y + 7 = 0 là:',
        options: ['n⃗ = (3; -4)', 'n⃗ = (4; 3)', 'n⃗ = (-4; 3)', 'n⃗ = (3; 4)'],
        answerIndex: 0,
        hint: 'Phương trình Ax + By + C = 0 có vectơ pháp tuyến n⃗ = (A; B).',
        explanation: 'Hệ số trước x là 3, hệ số trước y là -4. Do đó n⃗ = (3; -4).'
      }
    ]
  },

  // ==========================================
  // GRADE 11 - LỚP 11
  // ==========================================
  {
    id: 'quiz-g11-s1-math-trigonometry-limits',
    title: 'Toán 11 - HK1: Hàm số Lượng giác & Giới hạn Hàm số, Cấp số cộng',
    titleEn: 'Math 11 - Sem 1: Trigonometric Functions, Calculus Limits & Sequences',
    grade: 11,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 22,
    xpReward: 165,
    description: 'Nghiệm phương trình sin x = m, cos x = m; cấp số cộng (un = u1 + (n-1)d), cấp số nhân; tính giới hạn lim f(x) dạng vô định 0/0.',
    descriptionEn: 'Trigonometric equations, arithmetic & geometric sequences, calculus limits indeterminate forms.',
    questions: [
      {
        question: 'Nghiệm của phương trình lượng giác sin x = 1/2 là:',
        options: [
          'x = π/6 + k2π hoặc x = 5π/6 + k2π (k ∈ ℤ)',
          'x = π/3 + k2π hoặc x = -π/3 + k2π (k ∈ ℤ)',
          'x = π/6 + kπ (k ∈ ℤ)',
          'x = ±π/6 + k2π (k ∈ ℤ)'
        ],
        answerIndex: 0,
        hint: 'sin(π/6) = 1/2. Công thức nghiệm sin x = sin α => x = α + k2π hoặc x = π - α + k2π.',
        explanation: 'sin x = sin(π/6) <=> x = π/6 + k2π hoặc x = π - π/6 + k2π = 5π/6 + k2π (k ∈ ℤ).'
      },
      {
        question: 'Cho cấp số cộng (un) có số hạng đầu u1 = 3 và công sai d = 4. Số hạng thứ 10 của cấp số cộng là:',
        options: ['u10 = 39', 'u10 = 43', 'u10 = 36', 'u10 = 40'],
        answerIndex: 0,
        hint: 'Công thức số hạng tổng quát của cấp số cộng: un = u1 + (n - 1)d.',
        explanation: 'u10 = 3 + (10 - 1) . 4 = 3 + 9 . 4 = 3 + 36 = 39.'
      },
      {
        question: 'Tính giới hạn: lim (x -> 2) [ (x² - 4) / (x - 2) ]',
        options: ['4', '2', '0', 'Vô cực (∞)'],
        answerIndex: 0,
        hint: 'Phân tích tử thành nhân tử x² - 4 = (x - 2)(x + 2) rồi triệt tiêu thừa số (x - 2).',
        explanation: 'Dạng vô định 0/0: lim (x->2) [ (x-2)(x+2) / (x-2) ] = lim (x->2) (x+2) = 2 + 2 = 4.'
      }
    ]
  },
  {
    id: 'quiz-g11-s1-physics-harmonic-motion',
    title: 'Vật lý 11 - HK1: Dao động Điều hòa & Sóng Cơ học',
    titleEn: 'Physics 11 - Sem 1: Simple Harmonic Motion & Mechanical Waves',
    grade: 11,
    semester: 1,
    subject: 'Vật lý',
    subjectVi: 'Vật lý',
    subjectEn: 'Physics',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 20,
    xpReward: 160,
    description: 'Phương trình dao động x = A cos(ωt + φ), liên hệ vận tốc v và gia tốc a; con lắc lò xo T = 2π√(m/k); bước sóng λ = v.T = v/f.',
    descriptionEn: 'SHM equations, velocity, acceleration phase relations, spring oscillator period, wavelength formula.',
    questions: [
      {
        question: 'Trong dao động điều hòa x = A cos(ωt + φ), gia tốc a sớm pha hơn li độ x một góc bằng bao nhiêu?',
        options: ['π rad (ngược pha 180°)', 'π/2 rad (vuông pha)', '0 rad (cùng pha)', '2π rad'],
        answerIndex: 0,
        hint: 'Phương trình gia tốc: a = -ω²x = ω²A cos(ωt + φ + π).',
        explanation: 'Gia tốc biến thiên điều hòa cùng tần số nhưng ngược pha (lệch pha π rad) so với li độ x.'
      },
      {
        question: 'Một con lắc lò xo gồm vật nặng khối lượng m = 0.4 kg và lò xo có độ cứng k = 100 N/m. Chu kỳ dao động riêng của con lắc là (lấy π² ≈ 10):',
        options: ['T = 0.4 s', 'T = 0.2 s', 'T = 0.8 s', 'T = 1.0 s'],
        answerIndex: 0,
        hint: 'Công thức chu kỳ con lắc lò xo: T = 2π √(m/k) = 2π √(0.4 / 100) = 2π . 0.2 / 10.',
        explanation: 'T = 2π √(0.4 / 100) = 2 . π . (2 / √1000) = 2 . √10 . (2 / (10√10)) = 4 / 10 = 0.4 s.'
      },
      {
        question: 'Bước sóng (λ) là quãng đường sóng truyền đi được trong thời gian bao lâu?',
        options: ['Đúng một chu kỳ dao động (T)', 'Nửa chu kỳ (T/2)', 'Một giây', 'Hai chu kỳ (2T)'],
        answerIndex: 0,
        hint: 'Công thức tính bước sóng: λ = v . T = v / f.',
        explanation: 'Định nghĩa: Bước sóng là quãng đường mà sóng truyền đi được trong một chu kỳ dao động.'
      }
    ]
  },
  {
    id: 'quiz-g11-s2-math-derivatives-tangents',
    title: 'Toán 11 - HK2: Đạo hàm, Tiếp tuyến Đồ thị & Hình học Không gian',
    titleEn: 'Math 11 - Sem 2: Derivatives, Tangent Lines & Spatial Perpendicularity',
    grade: 11,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 25,
    xpReward: 170,
    description: 'Quy tắc tính đạo hàm (u.v)\', (u/v)\'; hệ số góc tiếp tuyến k = f\'(x0); phương trình tiếp tuyến; đường thẳng vuông góc mặt phẳng trong không gian.',
    descriptionEn: 'Calculus derivative rules, slope of tangent line, tangent equation, 3D line-plane perpendicularity.',
    questions: [
      {
        question: 'Đạo hàm của hàm số y = x³ - 3x² + 5x - 7 là:',
        options: ['y\' = 3x² - 6x + 5', 'y\' = 3x² - 3x + 5', 'y\' = x² - 6x + 5', 'y\' = 3x² - 6x'],
        answerIndex: 0,
        hint: 'Áp dụng công thức (xⁿ)\' = n.xⁿ⁻¹: (x³)\' = 3x²; (x²)\' = 2x.',
        explanation: 'y\' = 3x² - 3(2x) + 5(1) - 0 = 3x² - 6x + 5.'
      },
      {
        question: 'Hệ số góc của tiếp tuyến với đồ thị hàm số y = f(x) tại điểm có hoành độ x0 bằng:',
        options: ['f\'(x0)', 'f(x0)', '1 / f\'(x0)', 'f\'\'(x0)'],
        answerIndex: 0,
        hint: 'Ý nghĩa hình học của đạo hàm tại một điểm.',
        explanation: 'Hệ số góc của tiếp tuyến của đồ thị hàm số y = f(x) tại điểm M(x0; f(x0)) chính là giá trị đạo hàm f\'(x0).'
      },
      {
        question: 'Điều kiện để đường thẳng d vuông góc với mặt phẳng (P) là gì?',
        options: [
          'd vuông góc với hai đường thẳng cắt nhau cùng nằm trong mặt phẳng (P)',
          'd vuông góc với một đường thẳng bất kỳ nằm trong (P)',
          'd vuông góc với hai đường thẳng song song trong (P)',
          'd cắt mặt phẳng (P) tại một điểm'
        ],
        answerIndex: 0,
        hint: 'Định lý chứng minh đường thẳng vuông góc mặt phẳng cốt lõi.',
        explanation: 'Nếu một đường thẳng vuông góc với hai đường thẳng cắt nhau cùng thuộc một mặt phẳng thì nó vuông góc với mặt phẳng đó.'
      }
    ]
  },
  {
    id: 'quiz-g11-s2-chemistry-hydrocarbons-alcohols',
    title: 'Hóa học 11 - HK2: Hiđrocacbon, Dẫn xuất Halogen & Ancol - Phenol',
    titleEn: 'Chemistry 11 - Sem 2: Hydrocarbons, Alcohols & Phenols Organic Reactions',
    grade: 11,
    semester: 2,
    subject: 'Hóa học',
    subjectVi: 'Hóa học',
    subjectEn: 'Chemistry',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 22,
    xpReward: 165,
    description: 'Ankan, anken (phản ứng cộng Br2, quy tắc Mac-côp-nhi-côp), ankin; ancol etylic C2H5OH, phản ứng thế với Na, phenol C6H5OH.',
    descriptionEn: 'Markovnikov addition rule for alkenes, functional groups of alcohols and phenols.',
    questions: [
      {
        question: 'Chất nào sau đây làm mất màu dung dịch nước Brom (Br₂) ở nhiệt độ thường do có liên kết đôi C=C?',
        options: ['Etilen (CH₂=CH₂)', 'Metan (CH₄)', 'Etan (CH₃-CH₃)', 'Propan (CH₃-CH₂-CH₃)'],
        answerIndex: 0,
        hint: 'Hiđrocacbon không no có liên kết pi kém bền tham gia phản ứng cộng làm mất màu dung dịch brom.',
        explanation: 'CH₂=CH₂ + Br₂ -> CH₂Br-CH₂Br (1,2-đibromoetan không màu).'
      },
      {
        question: 'Quy tắc Mac-côp-nhi-côp áp dụng cho phản ứng cộng axit (HX) vào anken bất đối xứng phát biểu rằng:',
        options: [
          'Nguyên tử H ưu tiên cộng vào nguyên tử C mang nhiều H hơn (bậc thấp hơn), X cộng vào C mang ít H hơn',
          'Nguyên tử H ưu tiên cộng vào C mang ít H hơn',
          'Nguyên tử X luôn cộng vào nguyên tử C đầu mạch',
          'Cả hai nguyên tử cộng ngẫu nhiên tạo tỉ lệ 1:1'
        ],
        answerIndex: 0,
        hint: 'Nguyên lý: "Giàu càng thêm giàu" (C nhiều H nhận thêm H).',
        explanation: 'Quy tắc Mac-côp-nhi-côp: H cộng vào C có nhiều H hơn, halogen/nhóm thế cộng vào C có ít H hơn để tạo sản phẩm chính.'
      },
      {
        question: 'Dung dịch phenol (C₆H₅OH) làm xuất hiện kết tủa trắng khi phản ứng với thuốc thử nào sau đây?',
        options: ['Nước Brom (Br₂)', 'Dung dịch NaCl', 'Dung dịch HCl', 'Dung dịch quỳ tím'],
        answerIndex: 0,
        hint: 'Tạo thành kết tủa trắng 2,4,6-tribromophenol.',
        explanation: 'Phenol phản ứng rất nhạy với nước brom tạo kết tủa trắng 2,4,6-tribromophenol dùng để nhận biết phenol.'
      }
    ]
  },

  // ==========================================
  // GRADE 12 - LỚP 12
  // ==========================================
  {
    id: 'quiz-g12-s1-math-calculus-extrema',
    title: 'Toán 12 - HK1: Khảo sát Hàm số, Cực trị & Mũ - Logarit',
    titleEn: 'Math 12 - Sem 1: Differential Curve Sketching, Extrema & Logarithms',
    grade: 12,
    semester: 1,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 25,
    xpReward: 180,
    description: 'Tính đơn điệu, cực trị, giá trị lớn nhất/nhỏ nhất; đường tiệm cận ngang và đứng; phương trình mũ và logarit log_a(b).',
    descriptionEn: 'Monotonicity, extrema, min/max values, vertical/horizontal asymptotes, exponential and logarithmic functions.',
    questions: [
      {
        question: 'Đường tiệm cận đứng của đồ thị hàm số y = (2x + 1) / (x - 3) là đường thẳng có phương trình:',
        options: ['x = 3', 'y = 2', 'x = -3', 'y = -1/2'],
        answerIndex: 0,
        hint: 'Tiệm cận đứng xảy ra tại giá trị x làm mẫu thức bằng 0: x - 3 = 0 => x = 3.',
        explanation: 'lim (x->3⁺) y = +∞ nên đường thẳng x = 3 là tiệm cận đứng của đồ thị hàm số.'
      },
      {
        question: 'Nghiệm của phương trình logarit: log₂(x - 1) = 3 là:',
        options: ['x = 9', 'x = 8', 'x = 7', 'x = 10'],
        answerIndex: 0,
        hint: 'Điều kiện x > 1. log₂(x - 1) = 3 <=> x - 1 = 2³ = 8.',
        explanation: 'x - 1 = 2³ = 8 <=> x = 9 (thỏa mãn điều kiện x > 1).'
      },
      {
        question: 'Cho hàm số y = f(x) có đạo hàm f\'(x) = x(x - 1)²(x + 2). Số điểm cực trị của hàm số là:',
        options: ['2 điểm cực trị', '3 điểm cực trị', '1 điểm cực trị', '4 điểm cực trị'],
        answerIndex: 0,
        hint: 'Hàm số đạt cực trị tại các nghiệm bội lẻ (đạo hàm đổi dấu). x = 1 là nghiệm bội chẵn không đổi dấu.',
        explanation: 'f\'(x) = 0 có nghiệm x = 0 (bội 1), x = -2 (bội 1) và x = 1 (bội 2). Đạo hàm chỉ đổi dấu khi qua x = 0 và x = -2. Vậy có đúng 2 điểm cực trị.'
      }
    ]
  },
  {
    id: 'quiz-g12-s1-physics-ac-electricity',
    title: 'Vật lý 12 - HK1: Dòng điện Xoay chiều RLC & Hiện tượng Cộng hưởng',
    titleEn: 'Physics 12 - Sem 1: AC Electricity RLC Circuits & Resonance',
    grade: 12,
    semester: 1,
    subject: 'Vật lý',
    subjectVi: 'Vật lý',
    subjectEn: 'Physics',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 25,
    xpReward: 180,
    description: 'Trở kháng tổng Z = √(R² + (ZL - ZC)²), định luật Ôm cho đoạn mạch xoay chiều I = U/Z, công suất P = UI cos φ, hiện tượng cộng hưởng điện ZL = ZC.',
    descriptionEn: 'AC impedance, Ohm law for RLC circuits, power factor cos phi, electrical resonance.',
    questions: [
      {
        question: 'Khi trong đoạn mạch RLC nối tiếp xảy ra hiện tượng cộng hưởng điện (ZL = ZC) thì điều nào sau đây là ĐÚNG?',
        options: [
          'Tổng trở của mạch đạt giá trị nhỏ nhất Z_min = R và cường độ dòng điện đạt cực đại',
          'Tổng trở của mạch đạt cực đại',
          'Cường độ dòng điện lệch pha π/2 so với điện áp',
          'Hệ số công suất của mạch cos φ = 0'
        ],
        answerIndex: 0,
        hint: 'ZL = ZC khiến thành phần kháng triệt tiêu: Z = √(R² + 0) = R.',
        explanation: 'Khi cộng hưởng ZL = ZC: Z_min = R, dòng điện I_max = U/R, điện áp cùng pha với dòng điện (cos φ = 1).'
      },
      {
        question: 'Cảm kháng ZL của cuộn cảm thuần có độ tự cảm L mắc trong mạch điện xoay chiều có tần số góc ω được tính theo công thức:',
        options: ['ZL = ω . L', 'ZL = 1 / (ω . L)', 'ZL = ω / L', 'ZL = 2π / L'],
        answerIndex: 0,
        hint: 'Cảm kháng tỉ lệ thuận với tần số góc ω và độ tự cảm L.',
        explanation: 'ZL = ω.L = 2πf.L (đơn vị Ôm Ω).'
      },
      {
        question: 'Một đoạn mạch RLC nối tiếp có R = 40 Ω, cảm kháng ZL = 70 Ω, dung kháng ZC = 40 Ω. Tổng trở Z của đoạn mạch là:',
        options: ['50 Ω', '150 Ω', '70 Ω', '40 Ω'],
        answerIndex: 0,
        hint: 'Công thức: Z = √( R² + (ZL - ZC)² ) = √( 40² + (70 - 40)² ) = √( 40² + 30² ).',
        explanation: 'Z = √(40² + 30²) = √(1600 + 900) = √2500 = 50 Ω.'
      }
    ]
  },
  {
    id: 'quiz-g12-s1-chemistry-esters-carbohydrates',
    title: 'Hóa học 12 - HK1: Este - Lipit, Cacbohiđrat & Peptit - Protein',
    titleEn: 'Chemistry 12 - Sem 1: Esters, Lipids, Carbohydrates & Amino Acids',
    grade: 12,
    semester: 1,
    subject: 'Hóa học',
    subjectVi: 'Hóa học',
    subjectEn: 'Chemistry',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 25,
    xpReward: 180,
    description: 'Thủy phân este trong môi trường kiềm (xà phòng hóa); phản ứng tráng bạc của glucozơ; tính lưỡng tính của amino axit H2N-R-COOH.',
    descriptionEn: 'Ester saponification, glucose Tollens test, amphoteric properties of amino acids and peptide bonds.',
    questions: [
      {
        question: 'Khi thủy phân este etyl axetat (CH₃COOC₂H₅) trong dung dịch NaOH đun nóng thu được các sản phẩm là:',
        options: ['CH₃COONa và C₂H₅OH', 'CH₃COOH và C₂H₅ONa', 'C₂H₅COONa và CH₃OH', 'CH₃COONa và CH₃OH'],
        answerIndex: 0,
        hint: 'CH₃COOC₂H₅ + NaOH -> CH₃COONa + C₂H₅OH.',
        explanation: 'Phản ứng xà phòng hóa este tạo muối natri axetat (CH₃COONa) và ancol etylic (C₂H₅OH).'
      },
      {
        question: 'Chất nào sau đây thuộc nhóm đisaccarit khi bị thủy phân hoàn toàn cho ra một phân tử glucozơ và một phân tử fructozơ?',
        options: ['Saccarozơ', 'Mantozo', 'Tinh bột', 'Xenlulozơ'],
        answerIndex: 0,
        hint: 'Thành phần chính của đường mía, đường củ cải.',
        explanation: 'Saccarozơ (C₁₂H₂₂O₁₁) là đisaccarit tạo bởi 1 gốc α-glucozơ và 1 gốc β-fructozơ.'
      },
      {
        question: 'Amino axit là hợp chất hữu cơ tạp chức trong phân tử chứa đồng thời hai nhóm chức nào?',
        options: [
          'Nhóm amin (-NH₂) và nhóm cacboxyl (-COOH)',
          'Nhóm hiđroxyl (-OH) và nhóm cacboxyl (-COOH)',
          'Nhóm anđehit (-CHO) và nhóm amin (-NH₂)',
          'Nhóm amin (-NH₂) và nhóm nitro (-NO₂)'
        ],
        answerIndex: 0,
        hint: 'Vừa có tính bazơ của nhóm amin, vừa có tính axit của nhóm cacboxyl nên có tính chất lưỡng tính.',
        explanation: 'Công thức tổng quát của amino axit là (H₂N)a-R-(COOH)b.'
      }
    ]
  },
  {
    id: 'quiz-g12-s2-math-integrals-oxyz',
    title: 'Toán 12 - HK2: Nguyên hàm, Tích phân & Hình học Không gian Oxyz',
    titleEn: 'Math 12 - Sem 2: Integrals, Applications & 3D Spatial Geometry Oxyz',
    grade: 12,
    semester: 2,
    subject: 'Toán học',
    subjectVi: 'Toán học',
    subjectEn: 'Mathematics',
    category: 'math',
    difficulty: 'hard',
    durationMinutes: 25,
    xpReward: 190,
    description: 'Tích phân từng phần ∫u dv = uv - ∫v du; ứng dụng tích phân tính diện tích hình phẳng; phương trình mặt cầu, mặt phẳng và đường thẳng trong Oxyz.',
    descriptionEn: 'Integration by parts, area and volume applications, 3D coordinate geometry of planes, spheres, and lines.',
    questions: [
      {
        question: 'Trong không gian Oxyz, phương trình mặt cầu có tâm I(1; -2; 3) và bán kính R = 4 là:',
        options: [
          '(x - 1)² + (y + 2)² + (z - 3)² = 16',
          '(x + 1)² + (y - 2)² + (z + 3)² = 16',
          '(x - 1)² + (y + 2)² + (z - 3)² = 4',
          '(x - 1)² + (y - 2)² + (z - 3)² = 16'
        ],
        answerIndex: 0,
        hint: 'Phương trình mặt cầu tâm I(a; b; c) bán kính R: (x - a)² + (y - b)² + (z - c)² = R².',
        explanation: '(x - 1)² + (y - (-2))² + (z - 3)² = 4² <=> (x - 1)² + (y + 2)² + (z - 3)² = 16.'
      },
      {
        question: 'Tính tích phân I = ∫[0, 1] (2x + 1) dx:',
        options: ['2', '1', '3', '1.5'],
        answerIndex: 0,
        hint: 'Nguyên hàm của 2x + 1 là x² + x. Thế cận từ 0 đến 1: (1² + 1) - (0 + 0) = 2.',
        explanation: 'F(x) = x² + x. I = F(1) - F(0) = (1 + 1) - 0 = 2.'
      },
      {
        question: 'Trong không gian Oxyz, vectơ pháp tuyến n⃗ của mặt phẳng (P): 2x - 3y + 4z - 5 = 0 là:',
        options: ['n⃗ = (2; -3; 4)', 'n⃗ = (2; 3; 4)', 'n⃗ = (-3; 4; -5)', 'n⃗ = (2; -3; -5)'],
        answerIndex: 0,
        hint: 'Mặt phẳng Ax + By + Cz + D = 0 có vectơ pháp tuyến n⃗ = (A; B; C).',
        explanation: 'Các hệ số trước x, y, z tương ứng là 2, -3, 4. Vậy n⃗ = (2; -3; 4).'
      }
    ]
  },
  {
    id: 'quiz-g12-s2-physics-nuclear-photoelectric',
    title: 'Vật lý 12 - HK2: Lượng tử Ánh sáng & Vật lý Hạt nhân',
    titleEn: 'Physics 12 - Sem 2: Quantum Physics, Photoelectric Effect & Nuclear Reactions',
    grade: 12,
    semester: 2,
    subject: 'Vật lý',
    subjectVi: 'Vật lý',
    subjectEn: 'Physics',
    category: 'science',
    difficulty: 'hard',
    durationMinutes: 25,
    xpReward: 190,
    description: 'Thuyết lượng tử ánh sáng Anh-xtanh (ε = h.f = hc/λ), giới hạn quang điện λ0 = hc/A; năng lượng liên kết hạt nhân và định luật phóng xạ N = N0.2^(-t/T).',
    descriptionEn: 'Einstein quantum photon theory, work function, mass defect, nuclear binding energy and radioactive decay.',
    questions: [
      {
        question: 'Theo thuyết lượng tử ánh sáng của Anh-xtanh, mỗi photon ánh sáng đơn sắc tần số f mang một năng lượng bằng bao nhiêu?',
        options: ['ε = h . f', 'ε = h / f', 'ε = f / h', 'ε = h . λ'],
        answerIndex: 0,
        hint: 'Trong đó h là hằng số Plăng (h ≈ 6.625 x 10⁻³⁴ J.s).',
        explanation: 'Năng lượng của một lượng tử ánh sáng (photon) là ε = h.f = hc/λ.'
      },
      {
        question: 'Hạt nhân nguyên tử cấu tạo từ các nucleon, bao gồm các hạt nào?',
        options: [
          'Các proton mang điện tích dương và nơtron không mang điện',
          'Các proton và electron',
          'Các nơtron và electron',
          'Chỉ gồm các hạt proton'
        ],
        answerIndex: 0,
        hint: 'Hạt nhân nằm ở trung tâm nguyên tử gồm 2 loại hạt gọi chung là nuclôn.',
        explanation: 'Hạt nhân cấu tạo từ Z hạt proton mang điện tích +e và (A - Z) hạt nơtron trung hòa về điện.'
      },
      {
        question: 'Chất phóng xạ có chu kỳ bán rã T = 10 ngày. Sau 30 ngày, lượng chất phóng xạ còn lại chiếm bao nhiêu phần trăm so với ban đầu?',
        options: ['12.5% (1/8)', '25% (1/4)', '50% (1/2)', '6.25% (1/16)'],
        answerIndex: 0,
        hint: 'Thời gian t = 30 ngày = 3T. Số lượng còn lại: N = N0 . (1/2)³ = N0 / 8 = 12.5%.',
        explanation: 'Sau 3 chu kỳ bán rã, lượng chất phóng xạ giảm 2³ = 8 lần, còn lại 1/8 = 12.5%.'
      }
    ]
  }
];
