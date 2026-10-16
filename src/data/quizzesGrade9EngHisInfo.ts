import { CurriculumQuiz } from './curriculumData';

/**
 * Authentic Grade 9 Curriculum Quizzes (Tiếng Anh, Lịch sử và Địa lý, Tin học)
 * Meets requirement: At least 4 Regular Assessments (15-min) + 1 Final Test (60-min) per semester
 * Aligned with Vietnam Ministry of Education GDPT 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 * Specialized for Grade 10 Entrance Exam Prep
 */
export const GRADE_9_ENG_HIS_INFO_QUIZZES: CurriculumQuiz[] = [
  // =========================================================================
  // GRADE 9 - TIẾNG ANH 9 - SEMESTER 1
  // =========================================================================
  {
    id: 'quiz-g9-s1-eng-reg1',
    title: 'Tiếng Anh 9 - Kiểm tra Thường xuyên 1: Local Environment & Phrasal Verbs',
    titleEn: 'English 9 - Regular Assessment 1: Traditional Crafts & Phrasal Verbs',
    grade: 9,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Unit 1: Traditional craft villages (Bat Trang pottery, Van Phuc silk), phrasal verbs (pass down, set up, look forward to).',
    descriptionEn: 'Artisan craft communities and essential multi-word verbs in context.',
    questions: [
      {
        question: 'Which PHRASAL VERB means "to transfer skills, traditions, or knowledge from older generations to younger ones"?',
        options: ['pass down', 'turn down', 'bring out', 'close down'],
        answerIndex: 0,
        hint: 'Traditional pottery techniques were passed down from father to son.',
        explanation: '"Pass down" means to hand down cultural traditions or craftsmanship through generations.'
      },
      {
        question: 'Bat Trang is a world-renowned Vietnamese craft village famous for its handmade ________.',
        options: ['ceramic pottery', 'silk scarves', 'conical hats', 'bronze statues'],
        answerIndex: 0,
        hint: 'Làng gốm Bát Tràng.',
        explanation: 'Bat Trang village in Hanoi is celebrated for centuries for exquisite ceramic and porcelain pottery.'
      },
      {
        question: 'Complete the sentence: "The local artisans ________ a cooperative to export their bamboo baskets overseas."',
        options: ['set up', 'gave up', 'put down', 'ran out'],
        answerIndex: 0,
        hint: 'Set up = establish/found an organization.',
        explanation: '"Set up" means to establish or start a business, organization or cooperative.'
      },
      {
        question: 'Choose the correct preposition: "I am really looking forward ________ visiting the lantern village in Hoi An."',
        options: ['to', 'for', 'with', 'at'],
        answerIndex: 0,
        hint: 'Look forward to + V-ing.',
        explanation: 'The fixed idiom "look forward to + V-ing" requires the preposition "to".'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-eng-reg2',
    title: 'Tiếng Anh 9 - Kiểm tra Thường xuyên 2: City Life & Comparison of Adjectives/Adverbs',
    titleEn: 'English 9 - Regular Assessment 2: Urban Challenges & Advanced Comparisons',
    grade: 9,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 2: City life, rush hour traffic, public transport, double comparisons (the more... the better).',
    descriptionEn: 'Urbanization issues and parallel double comparative structures.',
    questions: [
      {
        question: 'Complete the double comparative: "The more modern a metropolis becomes, ________ stressful life can be."',
        options: ['the more', 'more', 'the most', 'as much'],
        answerIndex: 0,
        hint: 'Structure: The + comparative..., the + comparative...',
        explanation: 'The parallel comparative pattern is "The + comparative, the + comparative": "The more..., the more...".'
      },
      {
        question: 'Which word refers to the heavy congestion of vehicles on streets during morning and evening commuting hours?',
        options: ['traffic jam (rush hour gridlock)', 'sidewalk', 'pedestrian zone', 'metro station'],
        answerIndex: 0,
        hint: 'Vehicles stuck bumper-to-bumper unable to move.',
        explanation: 'Traffic jams during rush hours are a chronic urban transportation challenge in big cities.'
      },
      {
        question: 'Living in Da Nang is considered ________ than living in many other metropolitan cities due to its fresh coastal air and clean beaches.',
        options: ['much more pleasant', 'more pleasanter', 'pleasantest', 'as pleasant as more'],
        answerIndex: 0,
        hint: 'Use "much" to intensify comparative adjectives.',
        explanation: '"Much more pleasant" uses the intensifier "much" with the multi-syllable comparative adjective "more pleasant".'
      },
      {
        question: 'What is a major advantage of commuting by urban electric metro systems (skytrains)?',
        options: ['It avoids road traffic jams and significantly reduces carbon greenhouse emissions', 'It is always free of charge', 'It can take you to the top of any mountain', 'It flies like an airplane'],
        answerIndex: 0,
        hint: 'Eco-friendly mass rapid transit without road congestion.',
        explanation: 'Urban metro networks offer rapid, reliable transit that cuts fossil fuel pollution and bypasses road bottlenecks.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-eng-reg3',
    title: 'Tiếng Anh 9 - Kiểm tra Thường xuyên 3: Teen Stress and Pressure & Question Words Before To-Infinitive',
    titleEn: 'English 9 - Regular Assessment 3: Adolescent Stress & Wh-word + To-Infinitive',
    grade: 9,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 3: School pressure, mental health, time management, and structures: know/decide what/how/where to do.',
    descriptionEn: 'Adolescent anxiety management and syntactic clause reduction using to-infinitive.',
    questions: [
      {
        question: 'Rewrite using a to-infinitive: "Mai didn\'t know who she should ask for advice about her exam anxiety." -> Mai didn\'t know ________ for advice.',
        options: ['who to ask', 'who ask', 'to ask who', 'who asking'],
        answerIndex: 0,
        hint: 'Wh-word + to-infinitive (who to ask).',
        explanation: 'Reported indirect questions with "should" can be reduced to "Wh-word + to V": "who to ask".'
      },
      {
        question: 'Which of the following is an effective, healthy strategy for teenagers to cope with academic exam stress?',
        options: ['Maintaining balanced sleep, doing physical exercise, and talking with school counselors or parents', 'Staying awake for 48 hours drinking energy drinks', 'Skipping all meals', 'Isolating oneself completely in a dark room'],
        answerIndex: 0,
        hint: 'Healthy lifestyle habits and seeking emotional guidance.',
        explanation: 'Regular sleep, exercise, and open communication with trusted adults alleviate cognitive anxiety and improve focus.'
      },
      {
        question: 'Complete the sentence: "Can you tell me ________ to submit our online graduation portfolio?"',
        options: ['where', 'what time when', 'which that', 'whom to where'],
        answerIndex: 0,
        hint: 'Where to submit (location/platform).',
        explanation: '"Where to submit" is grammatically correct asking for the destination or portal link.'
      },
      {
        question: 'Feeling stressed, frustrated, and unable to concentrate because of excessive homework deadlines is called feeling ________.',
        options: ['overwhelmed', 'delighted', 'carefree', 'relaxed'],
        answerIndex: 0,
        hint: 'Overcome by superior force or an excessive number of tasks.',
        explanation: '"Overwhelmed" (quá tải, choáng ngợp) describes the emotional exhaustion of facing too many simultaneous demands.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-eng-reg4',
    title: 'Tiếng Anh 9 - Kiểm tra Thường xuyên 4: Life in the Past & Used to + Verb',
    titleEn: 'English 9 - Regular Assessment 4: Historical Lifestyles & Used to Structures',
    grade: 9,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Unit 4: Subsidized period (Bao cấp), tramcars in Hanoi, traditional games (tug of war, hide and seek), and "used to / didn\'t use to".',
    descriptionEn: 'Past Vietnamese social history and grammar of past discontinued habits.',
    questions: [
      {
        question: 'My grandfather ________ walk 5 kilometers through muddy village roads to school when he was a boy.',
        options: ['used to', 'is used to', 'was used to', 'got used to'],
        answerIndex: 0,
        hint: 'Used to + bare infinitive for a past habitual action that no longer happens.',
        explanation: '"Used to + V" expresses a discontinued past habit or state.'
      },
      {
        question: 'Choose the correct NEGATIVE form: "Decades ago, people ________ have smartphones or personal internet access."',
        options: ["didn't use to", "didn't used to", 'use not to', 'never used to not'],
        answerIndex: 0,
        hint: 'In negative with "did not", the auxiliary "did" takes past tense, so "use" stays bare: didn\'t use to.',
        explanation: 'The standard negative form is "didn\'t use to + base verb".'
      },
      {
        question: 'Which traditional childhood game in Vietnam involves two opposing teams pulling on a heavy rope across a marked center line?',
        options: ['Tug of war (Kéo co)', 'Blind man\'s buff (Bịt mắt bắt dê)', 'Shuttlecock kicking (Đá cầu)', 'Cat and mouse game (Mèo đuổi chuột)'],
        answerIndex: 0,
        hint: 'Traditional folk game testing team collective physical strength with a rope.',
        explanation: '"Tug of war" (kéo co) is an ancient communal game recognized as UNESCO Intangible Cultural Heritage.'
      },
      {
        question: 'During the subsidy period in Hanoi, people were accustomed to commuting across the city on electric ________.',
        options: ['tramcars (xe điện leng keng)', 'bullet trains', 'private helicopters', 'submarines'],
        answerIndex: 0,
        hint: 'The iconic clanging streetcars running on tracks through Hoan Kiem lake.',
        explanation: 'The clanging electric tramcars (xe điện leng keng) were the quintessential public transportation of old Hanoi.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-eng-final',
    title: 'Tiếng Anh 9 - Đề Kiểm Tra Cuối Học Kỳ 1 (Đề Chuẩn Cấu Trúc Tuyển Sinh Vào Lớp 10)',
    titleEn: 'English 9 - Semester 1 Final Examination (National Grade 10 Entrance Format)',
    grade: 9,
    semester: 1,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối kỳ 1 theo ma trận đề thi vào 10 THPT: Phát âm ed/s, trọng âm 2 & 3 âm tiết, cụm động từ, câu điều kiện, so sánh kép và bài đọc hiểu điền từ.',
    descriptionEn: 'Semester 1 comprehensive final exam modeled after provincial Grade 10 entrance papers.',
    questions: [
      {
        question: 'Choose the word whose underlined part is pronounced differently from the others:',
        options: ['passed (/t/)', 'worked (/t/)', 'watched (/t/)', 'played (/d/)'],
        answerIndex: 3,
        hint: 'Verbs ending in voiced sounds like /eɪ/ pronounce -ed as /d/, while /s/, /k/, /tʃ/ pronounce -ed as /t/.',
        explanation: '"Played" ends in vowel sound /eɪ/ so -ed is pronounced /d/. The others end in voiceless consonants (/s/, /k/, /tʃ/) and are pronounced /t/.'
      },
      {
        question: 'Choose the word with different primary stress position:',
        options: ['artisan (stress on 1st: AR-ti-san)', 'preservation (stress on 3rd: pre-ser-VA-tion)', 'entertainment (stress on 3rd: en-ter-TAIN-ment)', 'environmental (stress on 4th: en-vi-ron-MEN-tal)'],
        answerIndex: 0,
        hint: 'Artisan is stressed on the first syllable (/ˈɑːtɪzæn/).',
        explanation: '"Artisan" is stressed on syllable 1, while words ending in -tion are stressed on the preceding syllable.'
      },
      {
        question: 'If you want to preserve our national identity, you should encourage youth to learn traditional ________.',
        options: ['handicrafts', 'traffic', 'pollution', 'headache'],
        answerIndex: 0,
        hint: 'Artisanal handmade goods like ceramics, conical hats, and silk.',
        explanation: 'Handicrafts (đồ thủ công mỹ nghệ) are vital elements of cultural heritage.'
      },
      {
        question: 'The factory had to ________ because of severe economic losses during the pandemic.',
        options: ['close down', 'pass down', 'look up to', 'face up to'],
        answerIndex: 0,
        hint: 'Close down = stop operating permanently.',
        explanation: '"Close down" means to permanently cease business operations.'
      },
      {
        question: 'Choose the sentence that is closest in meaning to: "They believe that the ancient pagoda was built in the 11th century."',
        options: [
          'The ancient pagoda is believed to have been built in the 11th century.',
          'The ancient pagoda was believed to build in the 11th century.',
          'It is believed that the ancient pagoda built in the 11th century.',
          'They are believed that the ancient pagoda was built in the 11th century.'
        ],
        answerIndex: 0,
        hint: 'Impersonal passive with past infinitive (to have been V3).',
        explanation: 'Active: "They believe that S + was V3" -> Passive: "S + is believed to have been V3".'
      },
      {
        question: 'Choose the best response: "Lan: Congratulations on winning first prize in the English speaking contest!" - "Hoa: ________"',
        options: [
          'Thank you so much! It really means a lot to me.',
          'No problem, I am the best.',
          'Yes, of course.',
          'You are welcome.'
        ],
        answerIndex: 0,
        hint: 'Modest and polite expression of gratitude for congratulations.',
        explanation: '"Thank you so much! It means a lot to me" is the natural, polite response to congratulations.'
      }
    ]
  },

  // =========================================================================
  // GRADE 9 - TIẾNG ANH 9 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g9-s2-eng-reg1',
    title: 'Tiếng Anh 9 - Kiểm tra Thường xuyên 1: Wonders of Viet Nam & Impersonal Passive',
    titleEn: 'English 9 - Regular Assessment 1: Wonders of Viet Nam & Impersonal Passive',
    grade: 9,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Unit 5: Ha Long Bay, Son Doong Cave, Hue Citadel, impersonal passive structures (It is said that / People report that).',
    descriptionEn: 'Natural/cultural UNESCO wonders and impersonal passive reporting syntax.',
    questions: [
      {
        question: 'Son Doong Cave in Quang Binh Province is recognized internationally as the world\'s ________ cave.',
        options: ['largest natural', 'deepest ocean', 'oldest artificial', 'coldest frozen'],
        answerIndex: 0,
        hint: 'World-record gigantic cave chamber that can fit a 40-story skyscraper.',
        explanation: 'Son Doong is the largest known natural limestone cave on the planet.'
      },
      {
        question: 'Complete the impersonal passive: "People claim that the fortress was built by king An Duong Vuong." -> "It is ________ that the fortress was built by king An Duong Vuong."',
        options: ['claimed', 'claiming', 'claim', 'claims'],
        answerIndex: 0,
        hint: 'It is + past participle (V3) + that...',
        explanation: 'The impersonal passive construction follows: "It is + V3 (claimed/reported/said) + that + clause".'
      },
      {
        question: 'Ha Long Bay has been twice recognized by UNESCO for its outstanding geological values and thousands of towering limestone ________.',
        options: ['islets (karst pillars)', 'glaciers', 'active volcanoes', 'sand dunes'],
        answerIndex: 0,
        hint: 'Karst limestone islands rising from turquoise sea water.',
        explanation: 'Ha Long Bay features over 1,600 limestone karst pillars and islets.'
      },
      {
        question: 'Rewrite: "People suggest that tourists ________ littering on the pristine beaches of Phu Quoc."',
        options: ['should avoid', 'avoiding', 'avoids', 'have avoided'],
        answerIndex: 0,
        hint: 'Subjunctive suggest that S + (should) + bare verb.',
        explanation: 'After "suggest that", the dependent clause uses "should + bare verb" or bare verb.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-eng-reg2',
    title: 'Tiếng Anh 9 - Kiểm tra Thường xuyên 2: Tourism & Compound Nouns',
    titleEn: 'English 9 - Regular Assessment 2: Sustainable Tourism & Compound Nouns',
    grade: 9,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 8: Ecotourism, package tours, green traveling, and compound noun formations (jet lag, checkout, stopover).',
    descriptionEn: 'Responsible travel, cultural tourism, and morphological compound nouns.',
    questions: [
      {
        question: 'Which COMPOUND NOUN describes the physical fatigue and disorientation caused by traveling rapidly across multiple time zones?',
        options: ['jet lag', 'sunburn', 'check-in', 'round trip'],
        answerIndex: 0,
        hint: 'Tiredness from flying long distances through different time zones.',
        explanation: '"Jet lag" refers to circadian rhythm disruption after crossing several time zones by jet aircraft.'
      },
      {
        question: 'A vacation that is organized by a travel agency with transportation, hotel, and meals included in one fixed price is a ________.',
        options: ['package holiday (package tour)', 'self-guided expedition', 'spontaneous hitchhiking', 'business meeting'],
        answerIndex: 0,
        hint: 'All-inclusive tour package.',
        explanation: 'A package tour includes transport, lodging, and guided sightseeing under a combined price.'
      },
      {
        question: 'What is the primary objective of "ECOTOURISM" (Du lịch sinh thái)?',
        options: ['To observe nature, respect local cultures, and promote environmental conservation', 'To construct massive casinos and concrete skyscrapers in national parks', 'To capture wild animals for entertainment', 'To pollute remote coral reefs'],
        answerIndex: 0,
        hint: 'Responsible green travel that conserves the natural environment.',
        explanation: 'Ecotourism focuses on ecological sustainability, low impact, and supporting local communities.'
      },
      {
        question: 'Choose the compound noun with a hyphen: "Before boarding the plane, passengers must go through the ________ desk."',
        options: ['check-in', 'takeoff', 'highway', 'waterfall'],
        answerIndex: 0,
        hint: 'Check-in counter at the airport.',
        explanation: '"Check-in" desk is the hyphenated compound noun denoting the airport registration desk.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-eng-reg3',
    title: 'Tiếng Anh 9 - Kiểm tra Thường xuyên 3: Space Exploration & Relative Clauses (who, which, that, whose)',
    titleEn: 'English 9 - Regular Assessment 3: Space Exploration & Relative Clauses',
    grade: 9,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Unit 10: ISS space station, Apollo missions, zero gravity, and defining/non-defining relative pronouns.',
    descriptionEn: 'Astronautics, microgravity physics, and defining/non-defining relative clauses.',
    questions: [
      {
        question: 'Pham Tuan was the first Vietnamese cosmonaut ________ flew into outer space aboard the Soyuz 37 mission in 1980.',
        options: ['who', 'which', 'whose', 'whom'],
        answerIndex: 0,
        hint: 'Relative pronoun referring to a person as subject: who.',
        explanation: '"Who" is used as the subject pronoun referring to the human antecedent "Pham Tuan".'
      },
      {
        question: 'The Hubble Space Telescope, ________ was launched into orbit in 1990, has captured breathtaking photographs of distant galaxies.',
        options: ['which', 'that', 'who', 'where'],
        answerIndex: 0,
        hint: 'Non-defining relative clause enclosed in commas cannot use "that".',
        explanation: 'In non-defining relative clauses with commas referring to an object, "which" must be used instead of "that".'
      },
      {
        question: 'Astronauts float weightlessly inside the International Space Station (ISS) due to the condition of ________.',
        options: ['microgravity (weightlessness)', 'heavy magnetic pull', 'high air pressure', 'extreme friction'],
        answerIndex: 0,
        hint: 'Free-fall orbit creating zero-g environment.',
        explanation: 'Microgravity is the condition in orbit where gravity appears almost zero because the station is in perpetual free fall.'
      },
      {
        question: 'An astronomer is a scientist ________ research focuses on celestial bodies, stars, and planetary systems.',
        options: ['whose', 'who', 'whom', 'which'],
        answerIndex: 0,
        hint: 'Possessive relative pronoun: whose + noun.',
        explanation: '"Whose" shows possession: whose research (nghiên cứu của người đó).'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-eng-reg4',
    title: 'Tiếng Anh 9 - Kiểm tra Thường xuyên 4: My Future Career & Conditional Sentences Type 2',
    titleEn: 'English 9 - Regular Assessment 4: Careers & Second Conditional Practice',
    grade: 9,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Unit 12: Career choices, vocational skills, job interview preparation, and Type 2 conditional sentences (unreal present).',
    descriptionEn: 'Vocational paths, soft skills, and hypothetical conditional structures.',
    questions: [
      {
        question: 'Complete the hypothetical conditional: "If I ________ fluent in three foreign languages, I would apply for a diplomat position at the UN."',
        options: ['were', 'am', 'will be', 'have been'],
        answerIndex: 0,
        hint: 'Second conditional uses subjunctive "were" for all subjects in the If-clause.',
        explanation: 'In Second Conditional expressing an imaginary present condition, the past subjunctive "were" is used.'
      },
      {
        question: 'Which skill is classified as an essential "SOFT SKILL" (Kỹ năng mềm) valued by modern employers?',
        options: ['Teamwork communication and problem-solving', 'Knowing how to type on a keyboard with two fingers', 'Owning a sports car', 'Memorizing phone numbers'],
        answerIndex: 0,
        hint: 'Interpersonal collaborative abilities.',
        explanation: 'Soft skills include interpersonal communication, empathy, leadership, and emotional intelligence.'
      },
      {
        question: 'What would you do if you ________ a million dollars in a scientific innovation competition?',
        options: ['won', 'win', 'have won', 'will win'],
        answerIndex: 0,
        hint: 'Conditional Type 2: What would you do if + Past Simple?',
        explanation: 'The Second Conditional pattern: "What would you do if you won...".'
      },
      {
        question: 'A person whose job is to design user interfaces and write clean code for mobile smartphone applications is a ________.',
        options: ['software developer (app programmer)', 'civil architect', 'botanist', 'veterinarian'],
        answerIndex: 0,
        hint: 'Tech professional creating digital programs.',
        explanation: 'Software and mobile app developers write code and design UX/UI for operating systems.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-eng-final',
    title: 'Tiếng Anh 9 - Đề Kiểm Tra Cuối Học Kỳ 2 (Đề Tổng Ôn Thi Tuyển Sinh Vào Lớp 10 THPT Toàn Diện)',
    titleEn: 'English 9 - Semester 2 Final Examination (Master High School Entrance Mock Exam)',
    grade: 9,
    semester: 2,
    subject: 'Tiếng Anh',
    subjectVi: 'Tiếng Anh',
    subjectEn: 'English',
    category: 'english',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm học lớp 9 chuẩn hóa 100% cấu trúc Đề thi Tuyển sinh vào Lớp 10 của Sở Giáo dục: Ngữ âm, Trọng âm, Tìm lỗi sai, Mệnh đề quan hệ, Câu bị động, Câu điều kiện và Bài đọc hiểu.',
    descriptionEn: 'Final comprehensive year-end exam synthesizing the entire 4-year THCS English curriculum for high school admissions.',
    questions: [
      {
        question: 'The monument ________ was erected in the central square commemorates our heroic ancestors.',
        options: ['which', 'who', 'whom', 'whose'],
        answerIndex: 0,
        hint: 'Relative pronoun for an inanimate object/monument: which / that.',
        explanation: '"Which" is used as the subject relative pronoun replacing the thing "monument".'
      },
      {
        question: 'If you ________ harder during the semester, you will comfortably pass the Grade 10 entrance examination.',
        options: ['study', 'studied', 'would study', 'had studied'],
        answerIndex: 0,
        hint: 'Conditional Type 1: If + Present Simple, will + base verb.',
        explanation: 'First conditional uses present simple "study" in the If-clause to denote a realistic future possibility.'
      },
      {
        question: 'Find the underlined error: "She asked me how much did I pay for the new textbook series."',
        options: ['did I pay (should be: I had paid / I paid)', 'how much', 'for', 'textbook series'],
        answerIndex: 0,
        hint: 'Indirect reported questions must use affirmative word order (Subject + Verb), NOT question order.',
        explanation: 'In indirect questions, the auxiliary "did" is omitted: "how much I paid".'
      },
      {
        question: 'Choose the word whose underlined part is pronounced differently:',
        options: ['natural (/æ/)', 'ancient (/eɪ/)', 'danger (/eɪ/)', 'nature (/eɪ/)'],
        answerIndex: 0,
        hint: 'In "natural", the vowel "a" is /æ/, while in "ancient", "danger", "nature" it is /eɪ/.',
        explanation: '"Natural" has short /æ/, whereas the other three words feature the diphthong /eɪ/.'
      },
      {
        question: 'Complete the sentence: "Neither my parents nor my elder sister ________ in favor of moving to another city."',
        options: ['is', 'are', 'be', 'were being'],
        answerIndex: 0,
        hint: 'Subject-verb agreement: Neither... nor... agrees with the closest subject (my elder sister = singular).',
        explanation: 'With "Neither... nor...", the verb agrees with the subject closest to it ("my elder sister" is singular -> "is").'
      },
      {
        question: 'Reading passage summary: Ecotourism provides income for local hosts while preserving delicate wildlife. The best title for this passage is:',
        options: [
          'Ecotourism: Balancing Economic Prosperity and Environmental Conservation',
          'Why All Tourists Should Stay at Home',
          'How to Build Concrete Roads in Pristine Rainforests',
          'The Complete History of Luxury Aircrafts'
        ],
        answerIndex: 0,
        hint: 'The core main idea connects local revenue with nature preservation.',
        explanation: 'The title effectively captures the dual mission of ecotourism: economic benefit combined with biodiversity conservation.'
      }
    ]
  },

  // =========================================================================
  // GRADE 9 - LỊCH SỬ VÀ ĐỊA LÝ 9 - SEMESTERS 1 & 2
  // =========================================================================
  {
    id: 'quiz-g9-s1-hisgeo-reg1',
    title: 'Lịch sử & Địa lí 9 - Kiểm tra Thường xuyên 1: Chiến tranh Thế giới thứ hai & Dân số Việt Nam',
    titleEn: 'History & Geography 9 - Regular Assessment 1: World War II & Vietnam Demographics',
    grade: 9,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Chiến tranh thế giới thứ hai (1939 - 1945), phe Đồng minh đánh bại chủ nghĩa phát xít và quy mô, cơ cấu dân số vàng của Việt Nam.',
    descriptionEn: 'WWII Allied victory over Fascism and Vietnam\'s golden demographic transition.',
    questions: [
      {
        question: 'Sự kiện lịch sử nào đánh dấu bước ngoặt xoay chuyển hoàn toàn cục diện Chiến tranh thế giới thứ hai sang giai đoạn Đồng minh phản công?',
        options: ['Chiến thắng vĩ đại của Hồng quân Liên Xô tại trận Xta-lin-grát (Stalingrad - đầu năm 1943)', 'Quân Đức xâm chiếm Ba Lan', 'Nhật Bản tấn công Trân Châu Cảng', 'Hội nghị Véc-xai'],
        answerIndex: 0,
        hint: 'Trận đánh bao vây tiêu diệt toàn bộ tập đoàn quân số 6 của phát xít Đức bên bờ sông Vonga.',
        explanation: 'Trận Stalingrad (1942-1943) bẻ gãy xương sống quân đội phát xít Đức, mở đầu giai đoạn tổng phản công của phe Đồng minh trên mọi mặt trận.'
      },
      {
        question: 'Việt Nam hiện đang ở trong giai đoạn "CƠ CẤU DÂN SỐ VÀNG" có nghĩa là gì?',
        options: ['Cứ một người phụ thuộc thì có hai người hoặc nhiều hơn trong độ tuổi lao động (từ 15 đến 64 tuổi)', 'Toàn bộ dân số đều là thợ kim hoàn đãi vàng', 'Tất cả mọi người dân đều trên 70 tuổi', 'Tỷ lệ sinh đẻ cao nhất thế giới'],
        answerIndex: 0,
        hint: 'Lực lượng lao động dồi dào gấp đôi số người già và trẻ em phụ thuộc.',
        explanation: 'Dân số vàng là cơ hội phát triển kinh tế vàng khi lực lượng lao động trẻ hùng hậu chiếm trên 65% tổng dân số.'
      },
      {
        question: 'Hai quả bom nguyên tử đầu tiên do quân đội Mỹ ném xuống hai thành phố nào của Nhật Bản vào tháng 8/1945?',
        options: ['Hi-rô-si-ma (Hiroshima) và Na-ga-xa-ki (Nagasaki)', 'Tô-ky-ô và Ô-xa-ka', 'Ki-ô-tô và Sa-pô-rô', 'O-ki-na-wa và I-wo Ji-ma'],
        answerIndex: 0,
        hint: 'Hai thành phố hứng chịu thảm họa bom nguyên tử ngày 6 và 9 tháng 8 năm 1945.',
        explanation: 'Mỹ ném hai bom nguyên tử xuống Hiroshima và Nagasaki làm hàng trăm ngàn dân thường thiệt mạng, đẩy phát xít Nhật đầu hàng vô điều kiện.'
      },
      {
        question: 'Vùng nào ở nước ta hiện có MẬT ĐỘ DÂN SỐ CAO NHẤT cả nước?',
        options: ['Đồng bằng sông Hồng', 'Đồng bằng sông Cửu Long', 'Vùng Tây Nguyên', 'Vùng Trung du và miền núi Bắc Bộ'],
        answerIndex: 0,
        hint: 'Đồng bằng châu thổ màu mỡ quanh thủ đô Hà Nội.',
        explanation: 'Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước (trên 1000 người/km²) với lịch sử khai cư lâu đời và đô thị hóa cao.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-hisgeo-reg2',
    title: 'Lịch sử & Địa lí 9 - Kiểm tra Thường xuyên 2: Phong trào Dân tộc Dân chủ (1919 - 1930) & Nông nghiệp Việt Nam',
    titleEn: 'History & Geography 9 - Regular Assessment 2: National Liberation (1919-1930) & Agriculture',
    grade: 9,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Hành trình cứu nước của Nguyễn Ái Quốc, Hội Việt Nam Cách mạng Thanh niên, thành lập Đảng Cộng sản Việt Nam (3/2/1930) và các vùng chuyên canh nông nghiệp.',
    descriptionEn: 'Nguyen Ai Quoc\'s revolutionary journey, foundation of CPV (1930) and agricultural zoning in Vietnam.',
    questions: [
      {
        question: 'Đảng Cộng sản Việt Nam chính thức được thành lập vào ngày tháng năm nào và tại đâu?',
        options: ['Ngày 3/2/1930 tại Cửu Long (Hương Cảng, Trung Quốc)', 'Ngày 2/9/1945 tại Hà Nội', 'Ngày 19/5/1890 tại Nghệ An', 'Ngày 30/4/1975 tại Sài Gòn'],
        answerIndex: 0,
        hint: 'Hội nghị hợp nhất các tổ chức cộng sản do đồng chí Nguyễn Ái Quốc chủ trì.',
        explanation: 'Từ ngày 6/1 đến đầu tháng 2/1930, Hội nghị hợp nhất ba tổ chức cộng sản họp tại Hương Cảng dưới sự chủ trì của Nguyễn Ái Quốc, quyết định lấy ngày 3/2 làm ngày thành lập Đảng.'
      },
      {
        question: 'Hai vùng chuyên canh LÚA GẠO lớn nhất đóng vai trò bảo đảm an ninh lương thực quốc gia và xuất khẩu hàng đầu thế giới của nước ta là:',
        options: ['Đồng bằng sông Cửu Long và Đồng bằng sông Hồng', 'Tây Nguyên và Đông Bắc', 'Duyên hải Nam Trung Bộ và Tây Bắc', 'Bắc Trung Bộ và Đông Nam Bộ'],
        answerIndex: 0,
        hint: 'Hai vựa lúa châu thổ màu mỡ bồi đắp bởi sông Tiền, sông Hậu và sông Hồng.',
        explanation: 'Đồng bằng sông Cửu Long là vựa lúa lớn nhất xuất khẩu, còn Đồng bằng sông Hồng là cái nôi thâm canh lúa nước truyền thống.'
      },
      {
        question: 'Luận cương chính trị tháng 10/1930 của Đảng do ai khởi thảo?',
        options: ['Trần Phú (Tổng Bí thư đầu tiên của Đảng)', 'Nguyễn Ái Quốc', 'Lê Duẩn', 'Trường Chinh'],
        answerIndex: 0,
        hint: 'Vị Tổng Bí thư trẻ tuổi hy sinh anh dũng với câu nói: "Hãy giữ vững chí khí chiến đấu".',
        explanation: 'Đồng chí Trần Phú là Tổng Bí thư đầu tiên và là người soạn thảo Luận cương chính trị tháng 10/1930.'
      },
      {
        question: 'Cây CÀ PHÊ và HỒ TIÊU xuất khẩu chủ lực của nước ta được trồng tập trung nhiều nhất ở vùng địa lý nào?',
        options: ['Vùng Tây Nguyên (Đắk Lắk, Lâm Đồng, Gia Lai)', 'Đồng bằng sông Hồng', 'Vùng đồng bằng ven biển miền Trung', 'Vùng núi cao Tây Bắc'],
        answerIndex: 0,
        hint: 'Thủ phủ cà phê Buôn Ma Thuột trên đất đỏ bazan màu mỡ.',
        explanation: 'Tây Nguyên có tầng đất đỏ bazan màu mỡ, địa hình cao nguyên lượn sóng là vùng trồng cà phê vối (Robusta) lớn nhất cả nước và thứ 2 thế giới.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-hisgeo-reg3',
    title: 'Lịch sử & Địa lí 9 - Kiểm tra Thường xuyên 3: Cách mạng Tháng Tám (1945) & Công nghiệp Việt Nam',
    titleEn: 'History & Geography 9 - Regular Assessment 3: August Revolution 1945 & Industry',
    grade: 9,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Chớp thời cơ ngàn năm có một, khởi nghĩa giành chính quyền tháng 8/1945, Bác Hồ đọc Tuyên ngôn Độc lập và các ngành công nghiệp trọng điểm.',
    descriptionEn: 'The August 1945 Revolution, Independence Declaration, and strategic manufacturing sectors.',
    questions: [
      {
        question: 'Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc bản "Tuyên ngôn Độc lập" khai sinh nước Việt Nam Dân chủ Cộng hòa vào ngày tháng năm nào?',
        options: ['Ngày 2 tháng 9 năm 1945 tại Quảng trường Ba Đình (Hà Nội)', 'Ngày 19 tháng 8 năm 1945', 'Ngày 30 tháng 4 năm 1975', 'Ngày 10 tháng 10 năm 1954'],
        answerIndex: 0,
        hint: 'Ngày Quốc khánh thiêng liêng của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.',
        explanation: 'Chiều 2/9/1945, trước hàng chục vạn đồng bào tại Ba Đình, Bác Hồ đọc Tuyên ngôn Độc lập tuyên bố nước Việt Nam có quyền hưởng tự do và độc lập.'
      },
      {
        question: 'Tại sao Cách mạng tháng Tám năm 1945 ở nước ta giành thắng lợi nhanh chóng và ít đổ máu trên phạm vi cả nước (chỉ trong vòng 15 ngày)?',
        options: ['Đảng và Bác Hồ đã chuẩn bị chu đáo suốt 15 năm, chớp đúng thời cơ ngàn năm có một khi phát xít Nhật đầu hàng Đồng minh và toàn dân đồng lòng nhất tề đứng dậy', 'Do quân giặc tự nguyện rút về nước mà không cần khởi nghĩa', 'Do có sự giúp đỡ trực tiếp của quân đội các nước phương Tây', 'Do nhân dân tình cờ gặp may'],
        answerIndex: 0,
        hint: 'Nghệ thuật chớp thời cơ và sức mạnh đại đoàn kết toàn dân tộc.',
        explanation: 'Đảng ta đã lãnh đạo chuẩn bị lực lượng chính trị và vũ trang bền bỉ qua 3 cao trào cách mạng, chớp thời cơ vàng khi quân Nhật tê liệt tan rã.'
      },
      {
        question: 'Ngành CÔNG NGHIỆP TRỌNG ĐIỂM là ngành công nghiệp có đặc điểm nổi trội nào sau đây?',
        options: ['Chiếm tỷ trọng lớn trong cơ cấu sản xuất, có thế mạnh lâu dài về tài nguyên/lao động và thúc đẩy các ngành kinh tế khác cùng phát triển', 'Chỉ sản xuất hàng thủ công mỹ nghệ đơn giản', 'Ngành sử dụng toàn bộ máy móc nhập khẩu bị lỗi', 'Ngành không cần người lao động làm việc'],
        answerIndex: 0,
        hint: 'Ngành mũi nhọn dẫn dắt toàn bộ nền kinh tế (năng lượng, chế biến thực phẩm, điện tử).',
        explanation: 'Ngành công nghiệp trọng điểm có thế mạnh vượt trội, đem lại hiệu quả kinh tế cao và tác động lan tỏa mạnh mẽ lên toàn bộ nền kinh tế quốc gia.'
      },
      {
        question: 'Trung tâm công nghiệp có quy mô lớn nhất và năng động nhất ở vùng kinh tế trọng điểm phía Nam nước ta là:',
        options: ['Thành phố Hồ Chí Minh', 'Thành phố Cần Thơ', 'Thành phố Cà Mau', 'Thành phố Rạch Giá'],
        answerIndex: 0,
        hint: 'Đầu tàu kinh tế, khoa học và công nghệ lớn nhất cả nước.',
        explanation: 'TP. Hồ Chí Minh là trung tâm công nghiệp lớn nhất cả nước với giá trị sản xuất công nghiệp và công nghệ cao hàng đầu.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-hisgeo-reg4',
    title: 'Lịch sử & Địa lí 9 - Kiểm tra Thường xuyên 4: Kháng chiến chống Thực dân Pháp (1945 - 1954) & Vùng Duyên hải Nam Trung Bộ',
    titleEn: 'History & Geography 9 - Regular Assessment 4: Anti-French War (1945-1954) & South Central Coast',
    grade: 9,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Chiến dịch Điện Biên Phủ 1954 "lừng lẫy năm châu, chấn động địa cầu", hiệp định Giơ-ne-vơ và kinh tế biển Duyên hải Nam Trung Bộ.',
    descriptionEn: 'The Dien Bien Phu 1954 victory, Geneva Accords, and marine economy of South Central Coast.',
    questions: [
      {
        question: 'Chiến dịch lịch sử nào năm 1954 của quân dân ta đã đập tan tập đoàn cứ điểm "bất khả xâm phạm" của thực dân Pháp, lập nên kỳ tích "lừng lẫy năm châu, chấn động địa cầu"?',
        options: ['Chiến dịch Điện Biên Phủ', 'Chiến dịch Việt Bắc thu đông 1947', 'Chiến dịch Biên giới thu đông 1950', 'Chiến dịch Hòa Bình 1952'],
        answerIndex: 0,
        hint: '56 ngày đêm khoét núi, ngủ hầm, mưa dầm, cơm vắt dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp.',
        explanation: 'Chiến dịch Điện Biên Phủ toàn thắng ngày 7/5/1954 buộc chính phủ Pháp phải ký Hiệp định Giơ-ne-vơ công nhận độc lập, chủ quyền của Việt Nam.'
      },
      {
        question: 'Vị Tổng tư lệnh quân đội kiệt xuất chỉ huy Chiến dịch Điện Biên Phủ đã quyết đoán chuyển từ phương châm "đánh nhanh thắng nhanh" sang "đánh chắc tiến chắc" là ai?',
        options: ['Đại tướng Võ Nguyên Giáp', 'Đại tướng Nguyễn Chí Thanh', 'Đại tướng Văn Tiến Dũng', 'Trung tướng Đồng Sỹ Nguyên'],
        answerIndex: 0,
        hint: '"Người anh cả của Quân đội Nhân dân Việt Nam".',
        explanation: 'Quyết định lịch sử chuyển phương châm tác chiến của Đại tướng Võ Nguyên Giáp được đánh giá là thiên tài quân sự bảo đảm chắc thắng cho Điện Biên Phủ.'
      },
      {
        question: 'Nghề làm MUỐI biển truyền thống phát triển rất mạnh ở vùng Duyên hải Nam Trung Bộ (Cà Ná, Sa Huỳnh) nhờ điều kiện tự nhiên nào?',
        options: ['Nhiệt độ cao, nhiều nắng, số giờ nắng trong năm lớn và có rất ít sông lớn đổ ra biển làm ngọt hóa nước biển', 'Do nước biển ở đây lạnh nhất cả nước', 'Do thường xuyên có mưa bão quanh năm', 'Do bờ biển đóng băng'],
        answerIndex: 0,
        hint: 'Nắng nóng gay gắt và biển có độ mặn cao thuận lợi cho nước biển bốc hơi kết tinh muối.',
        explanation: 'Duyên hải Nam Trung Bộ ít mưa, nắng quanh năm, độ mặn nước biển cao là cái nôi sản xuất muối biển lớn nhất cả nước (Cà Ná, Sa Huỳnh).'
      },
      {
        question: 'Hiệp định Giơ-ne-vơ (Genève) ký ngày 21/7/1954 đã lấy vĩ tuyến nào làm giới tuyến quân sự tạm thời chia cắt hai miền đất nước?',
        options: ['Vĩ tuyến 17 (dọc theo sông Bến Hải, tỉnh Quảng Trị)', 'Vĩ tuyến 13', 'Vĩ tuyến 20', 'Vĩ tuyến 10'],
        answerIndex: 0,
        hint: 'Sông Bến Hải và cầu Hiền Lương lịch sử.',
        explanation: 'Hiệp định Giơ-ne-vơ quy định vĩ tuyến 17 làm ranh giới quân sự tạm thời để tập kết quân đội trước khi tổng tuyển cử hòa bình.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-hisgeo-final',
    title: 'Lịch sử & Địa lí 9 - Đề Kiểm Tra Cuối Học Kỳ 1 (Đề Tổng Hợp Đánh Giá Năng Lực Toàn Diện)',
    titleEn: 'History & Geography 9 - Semester 1 Final Examination (Comprehensive)',
    grade: 9,
    semester: 1,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối kỳ 1: Chiến tranh thế giới thứ hai, phong trào giải phóng dân tộc, Cách mạng tháng Tám, Điện Biên Phủ, địa lý các ngành kinh tế nông nghiệp - công nghiệp - dịch vụ nước ta.',
    descriptionEn: 'Semester 1 comprehensive final exam covering 20th century history and socioeconomic geography of Vietnam.',
    questions: [
      {
        question: 'Tổ chức quốc tế lớn nhất hành tinh được thành lập vào tháng 10/1945 nhằm duy trì hòa bình và an ninh quốc tế là:',
        options: ['Liên Hợp Quốc (United Nations - UN)', 'Liên minh châu Âu (EU)', 'Hiệp hội các quốc gia Đông Nam Á (ASEAN)', 'Tổ chức Thương mại Thế giới (WTO)'],
        answerIndex: 0,
        hint: 'Tổ chức có 193 quốc gia thành viên có trụ sở tại New York.',
        explanation: 'Liên Hợp Quốc được thành lập sau Chiến tranh thế giới thứ hai với mục tiêu tối thượng là ngăn chặn chiến tranh, thúc đẩy hợp tác phát triển toàn cầu.'
      },
      {
        question: 'Hội nghị I-an-ta (Yalta - 2/1945) với sự tham gia của nguyên thủ ba cường quốc (Liên Xô, Mỹ, Anh) đã đưa ra quyết định nào?',
        options: ['Tiêu diệt tận gốc chủ nghĩa phát xít Đức và quân phiệt Nhật, thỏa thuận phân chia phạm vi ảnh hưởng ở châu Âu và châu Á', 'Ủng hộ phát xít Đức tiếp tục chiến tranh', 'Tuyên bố giải tán Liên Hợp Quốc', 'Phân chia Nam Cực'],
        answerIndex: 0,
        hint: 'Hội nghị định hình trật tự thế giới hai cực Ianta.',
        explanation: 'Hội nghị Ianta đã quyết định tiêu diệt hoàn toàn chủ nghĩa phát xít và phân chia khu vực đóng quân, phạm vi ảnh hưởng giữa các cường quốc Đồng minh.'
      },
      {
        question: 'Tuyến đường bộ huyết mạch xuyên suốt chiều dài đất nước nối liền từ biên giới Lạng Sơn đến mũi Cà Mau là:',
        options: ['Quốc lộ 1A', 'Quốc lộ 5', 'Quốc lộ 22', 'Quốc lộ 14'],
        answerIndex: 0,
        hint: 'Con đường quốc lộ dài nhất Việt Nam kết nối hầu hết các tỉnh thành duyên hải.',
        explanation: 'Quốc lộ 1A là trục giao thông xương sống chạy dọc đất nước từ Bắc vào Nam có ý nghĩa kinh tế quốc phòng đặc biệt quan trọng.'
      },
      {
        question: 'Địa đạo Củ Chi (Thành phố Hồ Chí Minh) và địa đạo Vịnh Mốc (Quảng Trị) là những công trình quân sự độc đáo thể hiện điều gì?',
        options: ['Nghệ thuật chiến tranh nhân dân sáng tạo, tinh thần bám trụ kiên cường và ý chí kiên trung "một tấc không đi, một ly không rời"', 'Công trình khai thác mỏ vàng ngầm', 'Hệ thống thoát nước mưa đô thị', 'Công trình nhà ở thời phong kiến'],
        answerIndex: 0,
        hint: 'Hệ thống làng ngầm trong lòng đất chống lại bom đạn rải thảm.',
        explanation: 'Địa đạo là biểu tượng sáng ngời của nghệ thuật chiến tranh nhân dân, biến lòng đất thành pháo đài thép đánh bại hỏa lực hiện đại của đối phương.'
      },
      {
        question: 'Ngành dịch vụ DU LỊCH nước ta có tiềm năng phát triển phong phú nhờ những tài nguyên du lịch tự nhiên và nhân văn nào?',
        options: ['Bờ biển dài trên 3260 km, nhiều bãi biển đẹp, các di sản thế giới (Vịnh Hạ Long, Phong Nha, Cố đô Huế) và nền văn hóa đậm đà bản sắc', 'Khí hậu băng tuyết quanh năm', 'Sa mạc cát Sahara rộng lớn', 'Không có di tích lịch sử nào'],
        answerIndex: 0,
        hint: 'Tài nguyên du lịch biển đảo, hang động karst kỳ vĩ kết hợp di sản văn hóa phi vật thể.',
        explanation: 'Việt Nam sở hữu nguồn tài nguyên du lịch tự nhiên đa dạng cùng hàng ngàn lễ hội, làng nghề và di sản văn hóa thế giới được UNESCO vinh danh.'
      },
      {
        question: 'Thắng lợi nào đã kết thúc trọn vẹn cuộc kháng chiến 30 năm giải phóng dân tộc (1945 - 1975), thu non sông về một mối?',
        options: ['Chiến dịch Hồ Chí Minh lịch sử mùa xuân năm 1975', 'Chiến dịch Tây Nguyên', 'Chiến dịch Huế - Đà Nẵng', 'Trận Điện Biên Phủ trên không 1972'],
        answerIndex: 0,
        hint: 'Đại thắng mùa xuân 1975 giải phóng hoàn toàn miền Nam ngày 30/4/1975.',
        explanation: '11 giờ 30 phút ngày 30/4/1975, cờ giải phóng tung bay trên nóc Dinh Độc Lập, Chiến dịch Hồ Chí Minh toàn thắng, đất nước hoàn toàn thống nhất.'
      }
    ]
  },

  // =========================================================================
  // GRADE 9 - LỊCH SỬ VÀ ĐỊA LÝ 9 - SEMESTER 2
  // =========================================================================
  {
    id: 'quiz-g9-s2-hisgeo-reg1',
    title: 'Lịch sử & Địa lí 9 - Kiểm tra Thường xuyên 1: Kháng chiến chống Mỹ (1954 - 1975) & Vùng Đông Nam Bộ',
    titleEn: 'History & Geography 9 - Regular Assessment 1: Anti-US Resistance War & Southeast Region',
    grade: 9,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Phong trào Đồng khởi (1959 - 1960), đường Trường Sơn huyền thoại và sự phát triển năng động của vùng kinh tế Đông Nam Bộ.',
    descriptionEn: 'The Dong Khoi movement, Truong Son trail, and industrial leadership of Southeast region.',
    questions: [
      {
        question: 'Phong trào "ĐỒNG KHỞI" (1959 - 1960) bùng nổ mạnh mẽ và tiêu biểu nhất ở tỉnh nào của miền Nam?',
        options: ['Tỉnh Bến Tre (do bà Nguyễn Thị Định lãnh đạo)', 'Tỉnh Quảng Trị', 'Tỉnh Nghệ An', 'Tỉnh Hà Giang'],
        answerIndex: 0,
        hint: 'Quê hương Đồng Khởi với "đội quân tóc dài" huyền thoại.',
        explanation: 'Phong trào Đồng Khởi mở đầu từ ba xã Định Thủy, Phước Hiệp, Bình Khánh (huyện Mỏ Cày, Bến Tre) lan rộng như vũ bão khắp Nam Bộ.'
      },
      {
        question: 'Vùng ĐÔNG NAM BỘ (TP.HCM, Bình Dương, Đồng Nai, Bà Rịa - Vũng Tàu...) dẫn đầu cả nước về chỉ số kinh tế nào?',
        options: ['Tỷ trọng đóng góp GDP, giá trị sản xuất công nghiệp và thu hút vốn đầu tư trực tiếp nước ngoài (FDI)', 'Diện tích rừng nguyên sinh tự nhiên', 'Sản lượng lúa gạo xuất khẩu', 'Số lượng đảo san hô'],
        answerIndex: 0,
        hint: 'Vùng kinh tế đầu tàu năng động nhất cả nước.',
        explanation: 'Đông Nam Bộ là vùng kinh tế trọng điểm phát triển nhất, đóng góp ngân sách lớn nhất và đi đầu trong công nghiệp hóa hiện đại hóa.'
      },
      {
        question: 'Tuyến đường Trường Sơn (Đường Hồ Chí Minh) có vai trò chiến lược sống còn như thế nào trong cuộc kháng chiến chống Mỹ cứu nước?',
        options: ['Tuyến vận tải chiến lược chi viện sức người, sức của, vũ khí từ hậu phương lớn miền Bắc cho tiền tuyến lớn miền Nam', 'Chỉ là con đường mòn đi bộ của người dân địa phương', 'Dùng để xuất khẩu gỗ sang nước ngoài', 'Chỉ dùng để tránh nắng ban ngày'],
        answerIndex: 0,
        hint: '"Xẻ dọc Trường Sơn đi cứu nước / Mà lòng phơi phới dậy tương lai".',
        explanation: 'Đường Hồ Chí Minh là con đường huyền thoại vận chuyển hàng triệu tấn đạn dược, lương thực và các đoàn quân vào giải phóng miền Nam.'
      },
      {
        question: 'Ngành công nghiệp khai thác DẦU KHÍ của Việt Nam phân bố chủ yếu ở thềm lục địa thuộc tỉnh nào vùng Đông Nam Bộ?',
        options: ['Bà Rịa - Vũng Tàu (mỏ Bạch Hổ, Rạng Đông, Đại Hùng)', 'Tỉnh Tây Ninh', 'Tỉnh Bình Phước', 'Tỉnh Long An'],
        answerIndex: 0,
        hint: 'Căn cứ dịch vụ dầu khí ngoài khơi Vũng Tàu.',
        explanation: 'Bà Rịa - Vũng Tàu là trung tâm khai thác dầu mỏ và khí tự nhiên lớn nhất cả nước từ thềm lục địa thềm nam Biển Đông.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-hisgeo-reg2',
    title: 'Lịch sử & Địa lí 9 - Kiểm tra Thường xuyên 2: Đại thắng Mùa xuân 1975 & Vùng Đồng bằng Sông Cửu Long',
    titleEn: 'History & Geography 9 - Regular Assessment 2: Spring 1975 Victory & Mekong River Delta',
    grade: 9,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975, giải phóng hoàn toàn miền Nam và tiềm năng nông nghiệp, nuôi trồng thủy sản Đồng bằng sông Cửu Long.',
    descriptionEn: 'The historic Spring 1975 offensive and agro-aquacultural potential of Mekong Delta.',
    questions: [
      {
        question: 'Chiến dịch Hồ Chí Minh lịch sử giải phóng Sài Gòn - Gia Định bắt đầu từ ngày nào và kết thúc thắng lợi vào thời khắc nào?',
        options: ['Bắt đầu ngày 26/4 và toàn thắng lúc 11 giờ 30 phút ngày 30/4/1975', 'Bắt đầu ngày 1/1/1975', 'Kết thúc ngày 2/9/1975', 'Kéo dài trong 3 năm liên tiếp'],
        answerIndex: 0,
        hint: 'Chiếc xe tăng húc đổ cánh cổng Dinh Độc Lập trưa ngày 30/4/1975.',
        explanation: 'Đúng 11h30 ngày 30/4/1975, lá cờ Mặt trận Dân tộc Giải phóng tung bay trên Dinh Độc Lập, Chiến dịch Hồ Chí Minh toàn thắng rực rỡ.'
      },
      {
        question: 'Đồng bằng sông Cửu Long có thế mạnh nổi bật số một cả nước về những mặt hàng xuất khẩu nào?',
        options: ['Lúa gạo, thủy hải sản (cá tra, cá basa, tôm sú) và cây ăn quả nhiệt đới', 'Khai thác quặng sắt và than đá', 'Trồng cây thông và bạch dương', 'Chế tạo xe tăng và máy bay phản lực'],
        answerIndex: 0,
        hint: 'Vựa lúa, vựa tôm cá và vựa trái cây lớn nhất cả nước.',
        explanation: 'Đồng bằng sông Cửu Long đóng góp trên 50% sản lượng lúa, trên 90% sản lượng gạo xuất khẩu và hơn 70% sản lượng thủy sản nuôi trồng cả nước.'
      },
      {
        question: 'Khó khăn tự nhiên lớn nhất đối với sản xuất nông nghiệp và sinh hoạt của người dân Đồng bằng sông Cửu Long trong mùa khô là gì?',
        options: ['Xâm nhập mặn sâu vào đất liền, thiếu nước ngọt và hiện tượng hạn hán, sạt lở bờ sông kênh rạch', 'Bão tuyết rơi dày đặc', 'Núi lửa phun trào nham thạch', 'Nhiệt độ hạ xuống âm 10 độ C'],
        answerIndex: 0,
        hint: 'Nước biển dâng tràn vào các nhánh sông Cửu Long khi lưu lượng thượng nguồn sông Mê Kông cạn kiệt.',
        explanation: 'Mùa khô thiếu nước ngọt trầm trọng kết hợp triều cường đẩy mặn vào sâu 50-70 km trong nội đồng làm thiệt hại cây trồng vật nuôi.'
      },
      {
        question: 'Chiến thắng nào vào tháng 3/1975 đã mở màn cho cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975?',
        options: ['Chiến thắng Buôn Ma Thuột (Chiến dịch Tây Nguyên)', 'Chiến thắng Ấp Bắc', 'Chiến thắng Vạn Tường', 'Chiến dịch Biên giới'],
        answerIndex: 0,
        hint: 'Đòn đánh trúng huyệt đạo hiểm yếu của quân đội ngụy quyền Sài Gòn tại Buôn Ma Thuột ngày 10/3/1975.',
        explanation: 'Trận Buôn Ma Thuột mở màn Chiến dịch Tây Nguyên thắng lợi ròn rã, tạo bước ngoặt chiến lược chuyển sang tổng tiến công giải phóng hoàn toàn miền Nam.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-hisgeo-reg3',
    title: 'Lịch sử & Địa lí 9 - Kiểm tra Thường xuyên 3: Công cuộc Đổi mới Đất nước (1986 đến nay) & Phát triển Bền vững',
    titleEn: 'History & Geography 9 - Regular Assessment 3: Renovation (Doi Moi) & Sustainable Development',
    grade: 9,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Đại hội đại biểu toàn quốc lần thứ VI của Đảng (12/1986), chuyển đổi sang kinh tế thị trường định hướng XHCN, hội nhập quốc tế và bảo vệ môi trường.',
    descriptionEn: 'The historic 1986 Doi Moi Congress, market socialist reforms, and green sustainability.',
    questions: [
      {
        question: 'Đại hội Đảng lần thứ mấy (tháng 12/1986) đã đề ra đường lối ĐỔI MỚI toàn diện đất nước, đánh dấu bước ngoặt lịch sử đưa Việt Nam thoát khỏi khủng hoảng kinh tế?',
        options: ['Đại hội đại biểu toàn quốc lần thứ VI (Đại hội VI)', 'Đại hội I', 'Đại hội III', 'Đại hội IX'],
        answerIndex: 0,
        hint: 'Đại hội mở đầu công cuộc Đổi mới do Tổng Bí thư Nguyễn Văn Linh khởi xướng.',
        explanation: 'Đại hội VI (12/1986) dũng cảm "nhìn thẳng vào sự thật, đánh giá đúng sự thật" để đề ra đường lối đổi mới kinh tế toàn diện theo cơ chế thị trường định hướng XHCN.'
      },
      {
        question: 'Sau gần 40 năm thực hiện công cuộc Đổi mới, vị thế và uy tín quốc tế của Việt Nam đã thay đổi như thế nào?',
        options: ['Từ một nước nghèo nàn bị bao vây cấm vận trở thành nền kinh tế năng động, có quan hệ ngoại giao với 193 quốc gia và là đối tác chiến lược của nhiều cường quốc', 'Bị cô lập hoàn toàn trên thế giới', 'Kinh tế ngừng phát triển', 'Trở lại nền nông nghiệp tự cung tự cấp'],
        answerIndex: 0,
        hint: '"Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay".',
        explanation: 'Việt Nam đã vươn lên thành một mắt xích quan trọng trong chuỗi cung ứng toàn cầu, duy trì tốc độ tăng trưởng kinh tế cao và hội nhập quốc tế sâu rộng.'
      },
      {
        question: 'Khái niệm "PHÁT TRIỂN BỀN VỮNG" được định nghĩa là sự phát triển nhằm mục tiêu nào?',
        options: ['Đáp ứng những nhu cầu của thế hệ hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu đó của các thế hệ tương lai', 'Khai thác cạn kiệt mọi tài nguyên ngay lập tức', 'Xây dựng nhà máy bất chấp ô nhiễm nguồn nước', 'Dừng tất cả mọi hoạt động sản xuất kinh doanh'],
        answerIndex: 0,
        hint: 'Sự hài hòa giữa phát triển kinh tế, công bằng xã hội và bảo vệ môi trường sinh thái.',
        explanation: 'Phát triển bền vững đòi hỏi kết hợp hài hòa giữa tăng trưởng kinh tế, bảo đảm an sinh xã hội và giữ gìn tài nguyên môi trường cho con cháu mai sau.'
      },
      {
        question: 'Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO) vào năm nào?',
        options: ['Năm 2007 (thành viên thứ 150)', 'Năm 1995', 'Năm 1986', 'Năm 2020'],
        answerIndex: 0,
        hint: 'Cột mốc hội nhập kinh tế thương mại toàn cầu tháng 1 năm 2007.',
        explanation: 'Ngày 11/1/2007, Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO).'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-hisgeo-reg4',
    title: 'Lịch sử & Địa lí 9 - Kiểm tra Thường xuyên 4: Bảo vệ Chủ quyền Biển đảo & Chiến lược Kinh tế Biển Xanh',
    titleEn: 'History & Geography 9 - Regular Assessment 4: Maritime Sovereignty & Blue Sea Economy',
    grade: 9,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Chủ quyền lịch sử pháp lý của Việt Nam đối với Hoàng Sa và Trường Sa, Công ước UNCLOS 1982, phát triển kinh tế hàng hải, du lịch biển đảo và bảo vệ ngư trường.',
    descriptionEn: 'Maritime international legal boundaries, UNCLOS 1982, and blue economy development.',
    questions: [
      {
        question: 'Các tư liệu lịch sử, bản đồ cổ của triều đình phong kiến Việt Nam và phương Tây từ thế kỷ XVII - XIX đều khẳng định điều gì về Hoàng Sa và Trường Sa?',
        options: ['Việt Nam đã xác lập, thực thi chủ quyền liên tục, hòa bình và hợp pháp từ lâu đời đối với hai quần đảo Hoàng Sa và Trường Sa', 'Hai quần đảo này thuộc về các nước châu Âu xa xôi', 'Hai quần đảo này không có người qua lại', 'Hai quần đảo thuộc chủ quyền của nước khác'],
        answerIndex: 0,
        hint: 'Hải đội Hoàng Sa - Bắc Hải được các chúa Nguyễn và vua nhà Nguyễn phái ra thực thi chủ quyền hàng năm.',
        explanation: 'Hệ thống châu bản triều Nguyễn, Phủ biên tạp lục của Lê Quý Đôn chứng minh Việt Nam là quốc gia đầu tiên xác lập và thực thi chủ quyền hòa bình, liên tục đối với Hoàng Sa và Trường Sa.'
      },
      {
        question: 'Chiến lược phát triển KINH TẾ BIỂN XANH của nước ta ưu tiên những ngành kinh tế mũi nhọn nào?',
        options: ['Du lịch và dịch vụ biển, kinh tế hàng hải (cảng nước sâu), khai thác khoáng sản dầu khí bền vững và nuôi trồng hải sản xa bờ gắn với bảo vệ môi trường', 'Xả rác thải nhựa công nghiệp xuống biển', 'Hút cạn kiệt toàn bộ cát ven bờ', 'Cấm tuyệt đối tàu thuyền đánh cá ra khơi'],
        answerIndex: 0,
        hint: 'Nghị quyết số 36-NQ/TW về Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030.',
        explanation: 'Kinh tế biển xanh hướng tới khai thác hiệu quả tài nguyên biển đi đôi với phục hồi các rạn san hô, rừng ngập mặn và bảo đảm quốc phòng an ninh biển đảo.'
      },
      {
        question: 'Cảng biển nước sâu trung chuyển quốc tế hiện đại bậc nhất ở vùng Đông Nam Bộ nước ta có khả năng đón tàu container siêu trường siêu trọng là:',
        options: ['Cụm cảng Cái Mép - Thị Vải (Bà Rịa - Vũng Tàu)', 'Cảng Sa Kỳ', 'Cảng Cửa Lò', 'Cảng Nhà Mát'],
        answerIndex: 0,
        hint: 'Cụm cảng nước sâu trên sông Thị Vải tiếp nhận tàu mẹ đi trực tiếp châu Mỹ, châu Âu.',
        explanation: 'Cụm cảng Cái Mép - Thị Vải là cửa ngõ quốc tế quan trọng của cả vùng kinh tế trọng điểm phía Nam.'
      },
      {
        question: 'Mỗi học sinh chúng ta có thể làm gì thiết thực nhất để bảo vệ chủ quyền và môi trường biển đảo của Tổ quốc?',
        options: ['Học tập tốt, hiểu rõ luật pháp biển, không xả rác bừa bãi ra sông ngòi kênh rạch dẫn ra biển và tuyên truyền tình yêu biển đảo đến mọi người', 'Vứt rác túi ni lông xuống biển khi đi du lịch', 'Lan truyền thông tin thất thiệt chưa kiểm chứng', 'Thờ ơ không quan tâm đến các chiến sĩ đảo xa'],
        answerIndex: 0,
        hint: 'Hành động nhỏ bảo vệ môi trường và lan tỏa nhận thức chủ quyền biển đảo.',
        explanation: 'Bảo vệ nguồn nước sạch không rác thải nhựa và tìm hiểu vững chắc các căn cứ pháp lý là đóng góp thiết thực nhất của tuổi trẻ cho biển đảo quê hương.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-hisgeo-final',
    title: 'Lịch sử & Địa lí 9 - Đề Kiểm Tra Cuối Học Kỳ 2 (Đề Tổng Hợp Đánh Giá Tốt Nghiệp THCS & Thi Tuyển Sinh Vào Lớp 10)',
    titleEn: 'History & Geography 9 - Semester 2 Final Examination (Master High School Entrance Mock Exam)',
    grade: 9,
    semester: 2,
    subject: 'Lịch sử và Địa lý',
    subjectVi: 'Lịch sử và Địa lý',
    subjectEn: 'History & Geography',
    category: 'social',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm học lớp 9 chuẩn hóa cấu trúc đề thi tốt nghiệp THCS và thi tuyển sinh vào 10: Toàn bộ tiến trình lịch sử kháng chiến chống Mỹ, Đổi mới đất nước, địa lý các vùng kinh tế trọng điểm và chủ quyền biển đảo thiêng liêng.',
    descriptionEn: 'Final master examination for Grade 9 graduation and Grade 10 entrance assessment.',
    questions: [
      {
        question: 'Trận đánh nào được mệnh danh là trận "Điện Biên Phủ trên không" diễn ra vào 12 ngày đêm cuối tháng 12/1972 ở bầu trời Hà Nội - Hải Phòng?',
        options: ['Cuộc tập kích đường không chiến lược bằng máy bay B-52 của đế quốc Mỹ bị quân dân ta bắn rơi tan xác', 'Trận đánh giải phóng Khe Sanh', 'Chiến dịch Tây Nguyên', 'Trận đánh sân bay Tân Sơn Nhất'],
        answerIndex: 0,
        hint: 'Hà Nội 12 ngày đêm quật ngã pháo đài bay B-52 buộc Mỹ phải ký Hiệp định Paris 1973 rút quân về nước.',
        explanation: 'Thắng lợi "Điện Biên Phủ trên không" đập tan cuộc tập kích B-52 của không quân Mỹ, buộc chính phủ Mỹ phải ký kết Hiệp định Pa-ri ngày 27/1/1973.'
      },
      {
        question: 'Vùng kinh tế nào của nước ta có tiềm năng to lớn về phát triển thủy điện nhờ hệ thống sông ngòi chảy dốc từ các cao nguyên xếp tầng?',
        options: ['Vùng Tây Nguyên (hệ thống sông Xê Xan, Srêpôk, Đồng Nai)', 'Đồng bằng sông Cửu Long', 'Đồng bằng sông Hồng', 'Bán đảo Cà Mau'],
        answerIndex: 0,
        hint: 'Các nhà máy thủy điện Yaly, Trị An, Đray H\'ling trên sông Tây Nguyên.',
        explanation: 'Địa hình cao nguyên bazan xếp tầng và sông suối dốc đứng mang lại cho Tây Nguyên trữ năng thủy điện dồi dào hàng đầu cả nước.'
      },
      {
        question: 'Sự kiện nào đánh dấu bước ngoặt chấm dứt hoàn toàn tình trạng chia cắt hai miền Nam - Bắc sau ngày giải phóng 1975?',
        options: ['Kỳ họp thứ nhất Quốc hội khóa VI (tháng 6 - 7/1976) quyết định thống nhất đất nước về mặt nhà nước và đặt tên nước là Cộng hòa Xã hội Chủ nghĩa Việt Nam', 'Hội nghị Genève 1954', 'Hiệp định Paris 1973', 'Đại hội Đảng lần thứ IV'],
        answerIndex: 0,
        hint: 'Kỳ họp Quốc hội thống nhất non sông, chọn thủ đô là Hà Nội, đổi tên Sài Gòn thành TP. Hồ Chí Minh.',
        explanation: 'Quốc hội khóa VI thống nhất đã hoàn thành sự nghiệp thống nhất non sông về mặt nhà nước, mở ra kỷ nguyên độc lập, thống nhất và đi lên CNXH.'
      },
      {
        question: 'Trong xu thế toàn cầu hóa hiện nay, việc "hòa nhập nhưng không hòa tan" đòi hỏi dân tộc ta phải kiên quyết giữ vững điều gì?',
        options: ['Giữ vững độc lập tự chủ, an ninh quốc gia và bảo tồn, phát huy bản sắc văn hóa dân tộc truyền thống', 'Đóng cửa biên giới không giao lưu với nước nào', 'Bắt chước 100% lối sống của nước ngoài', 'Bỏ qua việc phát triển kinh tế'],
        answerIndex: 0,
        hint: 'Hội nhập kinh tế quốc tế sâu rộng đi đôi với giữ gìn cốt cách văn hóa Việt Nam.',
        explanation: 'Hòa nhập quốc tế để tiếp thu tinh hoa nhân loại nhưng phải bảo tồn cốt cách, bản sắc và chủ quyền độc lập của dân tộc.'
      },
      {
        question: 'Vùng đệm rừng ngập mặn Cần Giờ (TP. Hồ Chí Minh) được UNESCO công nhận là gì nhờ giá trị sinh thái đặc biệt?',
        options: ['Khu dự trữ sinh quyển thế giới (lá phổi xanh của Thành phố)', 'Di sản văn hóa thế giới', 'Kỳ quan nhân tạo thế giới', 'Công viên giải trí nước'],
        answerIndex: 0,
        hint: 'Lá phổi xanh lọc không khí và chắn sóng gió biển cho TP. Hồ Chí Minh.',
        explanation: 'Rừng ngập mặn Cần Giờ là Khu dự trữ sinh quyển thế giới đầu tiên của Việt Nam, đóng vai trò điều hòa vi khí hậu cho toàn vùng Đông Nam Bộ.'
      },
      {
        question: 'Nguồn lực tự nhiên nào là tiền đề vật chất quyết định để nước ta đẩy mạnh phát triển công nghiệp hóa - hiện đại hóa đất nước?',
        options: ['Tài nguyên khoáng sản, tài nguyên đất, nước, khí hậu nhiệt đới ẩm gió mùa và tài nguyên sinh vật phong phú', 'Toàn bộ là băng tuyết', 'Chỉ có sa mạc cát', 'Nước ngọt nhập khẩu hoàn toàn từ nước ngoài'],
        answerIndex: 0,
        hint: 'Tài nguyên thiên nhiên giàu có và đa dạng là cơ sở xây dựng nền công nghiệp đa ngành.',
        explanation: 'Khoáng sản phong phú (than, dầu khí, bô-xít, sắt), nguồn thủy năng dồi dào và thổ nhưỡng tốt là nền tảng vững chắc cho quá trình công nghiệp hóa quốc gia.'
      }
    ]
  },

  // =========================================================================
  // GRADE 9 - TIN HỌC 9 - SEMESTERS 1 & 2
  // =========================================================================
  {
    id: 'quiz-g9-s1-it-reg1',
    title: 'Tin học 9 - Kiểm tra Thường xuyên 1: Mạng Máy tính & Dịch vụ Đám mây (Cloud Computing)',
    titleEn: 'Informatics 9 - Regular Assessment 1: Computer Networks & Cloud Services',
    grade: 9,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Kiến trúc mạng cục bộ (LAN), mạng diện rộng (WAN), giao thức mạng TCP/IP và lưu trữ đám mây (Google Drive, OneDrive).',
    descriptionEn: 'Network topologies LAN/WAN, internet architecture TCP/IP, and cloud storage collaboration.',
    questions: [
      {
        question: 'ĐIỆN TOÁN ĐÁM MÂY (Cloud Computing) mang lại lợi ích nổi bật nào sau đây cho người dùng?',
        options: ['Cho phép lưu trữ, truy cập dữ liệu và sử dụng phần mềm qua Internet từ bất kỳ thiết bị nào mà không phụ thuộc vào một máy tính cố định', 'Làm cho máy tính không cần dùng điện vẫn chạy được', 'Tự động tạo ra tiền mặt cho người dùng', 'Xóa bỏ hoàn toàn nhu cầu về kết nối mạng'],
        answerIndex: 0,
        hint: 'Truy cập tài liệu mọi lúc mọi nơi qua Google Drive, iCloud, OneDrive.',
        explanation: 'Điện toán đám mây cung cấp tài nguyên điện toán theo nhu cầu qua mạng Internet, giúp sao lưu an toàn và làm việc cộng tác linh hoạt.'
      },
      {
        question: 'Giao thức truyền thông nào là nền tảng cốt lõi cho mọi hoạt động truyền nhận dữ liệu trên mạng toàn cầu Internet?',
        options: ['Bộ giao thức TCP/IP', 'Giao thức Bluetooth', 'Sóng vô tuyến FM', 'Mã vạch QR code'],
        answerIndex: 0,
        hint: 'Transmission Control Protocol / Internet Protocol.',
        explanation: 'TCP/IP là bộ giao thức chuẩn quốc tế quản lý việc đóng gói, đánh địa chỉ và định tuyến các gói tin trên Internet.'
      },
      {
        question: 'Mạng CỤC BỘ (LAN - Local Area Network) thường được triển khai kết nối máy tính trong phạm vi nào?',
        options: ['Trong một căn phòng, một trường học, một tòa nhà hoặc một cơ quan', 'Trải dài trên toàn bộ một lục địa', 'Kết nối giữa Trái Đất và Trạm vũ trụ quốc tế', 'Bao phủ toàn thế giới'],
        answerIndex: 0,
        hint: 'Mạng nội bộ trường học hoặc văn phòng bán kính vài trăm mét.',
        explanation: 'Mạng LAN kết nối các thiết bị trong phạm vi địa lý nhỏ hẹp như phòng máy tính trường học hay văn phòng.'
      },
      {
        question: 'Khi chia sẻ tệp tài liệu học tập trên Google Drive với bạn bè, quyền nào cho phép bạn chỉ ĐỌC mà không được chỉnh sửa nội dung?',
        options: ['Viewer (Người xem)', 'Editor (Người chỉnh sửa)', 'Commenter (Người nhận xét)', 'Owner (Chủ sở hữu)'],
        answerIndex: 0,
        hint: 'Quyền xem chỉ cho phép đọc nội dung (Viewer).',
        explanation: 'Chế độ Viewer chỉ cấp quyền xem tài liệu, ngăn chặn việc vô tình hoặc cố ý sửa đổi nội dung gốc.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-it-reg2',
    title: 'Tin học 9 - Kiểm tra Thường xuyên 2: Đa phương tiện & Xử lý Ảnh, Video Kỹ thuật số',
    titleEn: 'Informatics 9 - Regular Assessment 2: Multimedia & Digital Image/Video Processing',
    grade: 9,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Sản phẩm đa phương tiện (văn bản, âm thanh, hình ảnh, video), phần mềm chỉnh sửa ảnh số (GIMP, Canva) và dựng video.',
    descriptionEn: 'Multimedia production, raster graphics layers, and digital video editing timeline.',
    questions: [
      {
        question: 'Khái niệm ĐA PHƯƠNG TIỆN (Multimedia) trong công nghệ thông tin là sự kết hợp của những yếu tố nào?',
        options: ['Văn bản, hình ảnh tĩnh, đồ họa động, âm thanh và video được truyền tải đồng thời', 'Chỉ có văn bản thuần túy không có hình ảnh', 'Chỉ là tiếng ồn của máy in', 'Chỉ là một sợi dây cáp mạng'],
        answerIndex: 0,
        hint: 'Multi = nhiều, media = phương tiện biểu đạt (text, audio, video, graphics).',
        explanation: 'Đa phương tiện là sự tích hợp đồng bộ giữa chữ viết, âm thanh sống động, hình ảnh và video nhằm tăng hiệu quả truyền đạt thông tin.'
      },
      {
        question: 'Trong phần mềm chỉnh sửa ảnh kỹ thuật số (như GIMP hay Photoshop), khái niệm LỚP (Layer) có ý nghĩa như thế nào?',
        options: ['Các tấm phim trong suốt xếp chồng lên nhau, giúp chỉnh sửa từng chi tiết độc lập mà không làm ảnh hưởng đến các phần khác của bức ảnh', 'Độ phân giải của màn hình', 'Dung lượng của pin laptop', 'Màu sắc của khung viền tranh'],
        answerIndex: 0,
        hint: 'Từng lớp trong suốt chứa các đối tượng riêng biệt.',
        explanation: 'Layer cho phép người thiết kế xử lý từng thành phần riêng lẻ (chữ, hình nền, hiệu ứng) rất linh hoạt và dễ chỉnh sửa.'
      },
      {
        question: 'Định dạng tệp tin nào sau đây là định dạng ẢNH ĐỘNG hoặc ảnh trong suốt không nền phổ biến trên web?',
        options: ['.PNG hoặc .GIF', '.MP3 (tệp âm thanh)', '.TXT (tệp văn bản thô)', '.EXE (tệp chương trình)'],
        answerIndex: 0,
        hint: 'PNG hỗ trợ kênh trong suốt alpha; GIF hỗ trợ chuỗi hình ảnh hoạt họa ngắn.',
        explanation: '.PNG hỗ trợ nền trong suốt chất lượng cao, còn .GIF là định dạng ảnh động nén tiêu chuẩn trên internet.'
      },
      {
        question: 'Khi biên tập một đoạn video ngắn thuyết trình, thao tác "Timeline" (Dòng thời gian) cho phép người dùng làm gì?',
        options: ['Sắp xếp thứ tự các đoạn clip, đồng bộ âm thanh lồng tiếng và căn chỉnh hiệu ứng chuyển cảnh theo trục thời gian', 'Tắt nguồn máy vi tính', 'Xem lịch năm mới', 'Đo tốc độ mạng internet'],
        answerIndex: 0,
        hint: 'Trục thời gian chạy từ trái qua phải để ghép nối các phân cảnh clip và âm nhạc.',
        explanation: 'Dòng thời gian (Timeline) là trung tâm làm việc của phần mềm dựng video giúp cắt ghép, lồng tiếng và hiệu ứng chính xác đến từng khung hình.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-it-reg3',
    title: 'Tin học 9 - Kiểm tra Thường xuyên 3: Biên tập Âm thanh Kỹ thuật số & Podcast Giáo dục',
    titleEn: 'Informatics 9 - Regular Assessment 3: Audio Production & Educational Podcasts',
    grade: 9,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Xử lý âm thanh số bằng phần mềm mã nguồn mở (Audacity), lọc tiếng ồn nền, chèn nhạc nền và xuất file MP3 chất lượng cao.',
    descriptionEn: 'Digital audio sampling, waveform noise reduction, and podcast exporting.',
    questions: [
      {
        question: 'Trong phần mềm biên tập âm thanh Audacity, tính năng "Noise Reduction" (Giảm tiếng ồn) có tác dụng gì?',
        options: ['Loại bỏ tạp âm, tiếng xì xào của quạt gió hoặc tiếng ồn xung quanh trong bản thu âm', 'Làm cho giọng nói nhanh gấp 10 lần', 'Tự động dịch sang tiếng nước ngoài', 'Tắt hoàn toàn tiếng micro'],
        answerIndex: 0,
        hint: 'Lấy mẫu tiếng ồn nền và lọc khử khỏi bản ghi âm.',
        explanation: 'Tính năng Noise Reduction giúp phân tích tần số của tiếng ồn nền và triệt tiêu tạp âm giúp giọng thu trong trẻo.'
      },
      {
        question: 'Đơn vị đo tần số lấy mẫu của âm thanh kỹ thuật số chuẩn CD là gì?',
        options: ['44.1 kHz (Kilohertz)', '100 Watts', '50 Volts', '10 Megabytes'],
        answerIndex: 0,
        hint: 'Tần số lấy mẫu âm thanh số tiêu chuẩn CD audio.',
        explanation: 'Tần số lấy mẫu chuẩn cho âm thanh chất lượng phòng thu CD là 44.1 kHz (44,100 mẫu/giây).'
      },
      {
        question: 'Hiệu ứng âm thanh "Fade Out" ở cuối một tập podcast có tác dụng thẩm mỹ nào?',
        options: ['Âm lượng giảm dần từ từ về 0 tạo cảm giác kết thúc êm dịu, không bị ngắt đột ngột', 'Âm thanh tự nhiên to đùng lên', 'Đổi giọng nam thành giọng nữ', 'Lặp lại đoạn đầu 100 lần'],
        answerIndex: 0,
        hint: 'Nhỏ dần âm lượng ở đoạn kết.',
        explanation: 'Fade Out giảm dần biên độ sóng âm về 0 giúp bản nhạc hoặc đoạn podcast kết thúc nhẹ nhàng tự nhiên.'
      },
      {
        question: 'Định dạng tệp âm thanh nén phổ biến nhất có dung lượng nhỏ gọn và tương thích với hầu hết thiết bị thông minh là:',
        options: ['.MP3', '.DOCX', '.HTML', '.PPTX'],
        answerIndex: 0,
        hint: 'Định dạng nén âm thanh MPEG Audio Layer III.',
        explanation: '.MP3 là định dạng nén âm thanh phổ biến nhất thế giới với tỷ lệ nén cao và chất lượng âm thanh tốt.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-it-reg4',
    title: 'Tin học 9 - Kiểm tra Thường xuyên 4: Bản quyền Kỹ thuật số & Giấy phép Mã nguồn Mở (Creative Commons)',
    titleEn: 'Informatics 9 - Regular Assessment 4: Digital Copyright & Creative Commons',
    grade: 9,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Bản quyền tác giả số, giấy phép Creative Commons (CC BY, CC NC, CC SA), sử dụng tài nguyên công cộng hợp pháp.',
    descriptionEn: 'Digital intellectual property ethics and Creative Commons attribution licensing.',
    questions: [
      {
        question: 'Ký hiệu giấy phép "CC BY" (Creative Commons Attribution) trên một bức ảnh hoặc bản nhạc cho phép người khác sử dụng với điều kiện gì?',
        options: ['Được phép sao chép, phân phối và chỉnh sửa nhưng bắt buộc phải ghi rõ tên tác giả gốc', 'Không được phép tải về máy', 'Chỉ được dùng trong 1 ngày', 'Phải trả 1000 đô la cho tác giả'],
        answerIndex: 0,
        hint: 'Yêu cầu ghi nhận công trạng tác giả (Attribution - BY).',
        explanation: 'Giấy phép CC BY cho phép sử dụng tự do kể cả mục đích thương mại miễn là phải ghi nhận công trạng tác giả gốc.'
      },
      {
        question: 'Hành vi nào sau đây vi phạm ĐẠO ĐỨC VÀ PHÁP LUẬT về sở hữu trí tuệ trên mạng?',
        options: ['Lấy nguyên văn bài luận của người khác trên mạng đổi tên mình thành tác giả rồi nộp cho thầy cô giáo', 'Trích dẫn 1 câu nói nổi tiếng kèm nguồn link tác giả', 'Sử dụng hình ảnh miễn phí trên Pixabay/Unsplash', 'Tự sáng tác bài hát đăng lên YouTube'],
        answerIndex: 0,
        hint: 'Hành vi đạo văn (Plagiarism) gian lận học thuật.',
        explanation: 'Đạo văn là hành vi ăn cắp chất xám của người khác, vi phạm nghiêm trọng liêm chính học thuật và luật sở hữu trí tuệ.'
      },
      {
        question: 'Phần mềm nguồn mở (Open Source Software - như Linux, LibreOffice, GIMP) có đặc trưng nào nổi bật?',
        options: ['Mã nguồn được công khai minh bạch, cộng đồng được tự do xem, chỉnh sửa và phân phối lại theo giấy phép GPL', 'Phần mềm bắt buộc phải trả phí hàng tháng', 'Phần mềm không ai được phép sử dụng', 'Chỉ dùng được trên điện thoại cũ'],
        answerIndex: 0,
        hint: 'Mã nguồn mở miễn phí cho cộng đồng cùng phát triển.',
        explanation: 'Phần mềm nguồn mở cung cấp mã nguồn tự do giúp thúc đẩy học tập, đổi mới sáng tạo công nghệ toàn cầu.'
      },
      {
        question: 'Dấu hiệu nào sau đây cho biết một trang web thương mại điện tử bảo mật dữ liệu thẻ ngân hàng của bạn bằng mã hóa SSL/TLS?',
        options: ['Địa chỉ web bắt đầu bằng "https://" và có biểu tượng ổ khóa màu xanh trên thanh địa chỉ', 'Địa chỉ web bắt đầu bằng http://', 'Có nhiều quảng cáo nhấp nháy', 'Trang web có màu đỏ'],
        answerIndex: 0,
        hint: 'HTTPS với chữ S là Secure (bảo mật) kèm biểu tượng ổ khóa.',
        explanation: 'Giao thức HTTPS mã hóa toàn bộ dữ liệu truyền giữa trình duyệt và máy chủ, bảo vệ mật khẩu và thông tin thẻ thanh toán.'
      }
    ]
  },
  {
    id: 'quiz-g9-s1-it-final',
    title: 'Tin học 9 - Đề Kiểm Tra Cuối Học Kỳ 1 (Mạng Máy tính, Đám mây & Ứng dụng Đa phương tiện)',
    titleEn: 'Informatics 9 - Semester 1 Final Examination (Comprehensive)',
    grade: 9,
    semester: 1,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối kỳ 1: Kiến trúc mạng internet, dịch vụ web, điện toán đám mây, an ninh mạng, xử lý đa phương tiện và tư duy truyền thông số.',
    descriptionEn: 'Semester 1 comprehensive final exam covering networks, cloud storage, multimedia production, and cybersecurity.',
    questions: [
      {
        question: 'Địa chỉ IP (Internet Protocol Address) của một thiết bị trên mạng Internet có vai trò tương đương với cái gì trong đời sống thực?',
        options: ['Địa chỉ nhà riêng duy nhất để các bưu kiện (gói dữ liệu) có thể gửi đến chính xác nơi nhận', 'Tên riêng mà người dùng tự đặt trong máy', 'Mã số tài khoản ngân hàng', 'Số đo cân nặng của máy tính'],
        answerIndex: 0,
        hint: 'Địa chỉ định vị thiết bị trên mạng toàn cầu.',
        explanation: 'Địa chỉ IP là định danh số duy nhất gán cho mỗi thiết bị kết nối mạng để định tuyến dữ liệu trên mạng Internet.'
      },
      {
        question: 'Dịch vụ lưu trữ đám mây giúp bảo vệ dữ liệu học tập của học sinh khỏi rủi ro nào lớn nhất?',
        options: ['Rủi ro mất sạch tài liệu khi máy tính cá nhân bị hỏng ổ cứng, bị nhiễm virus mã hóa hoặc bị mất trộm', 'Rủi ro bị người khác gọi điện làm phiền', 'Rủi ro tốn điện năng sinh hoạt', 'Rủi ro máy tính bị bám bụi'],
        answerIndex: 0,
        hint: 'Dữ liệu được đồng bộ liên tục lên máy chủ từ xa an toàn.',
        explanation: 'Lưu trữ đám mây tự động sao lưu bản sao dự phòng giúp khôi phục dữ liệu ngay cả khi thiết bị cá nhân bị hỏng hóc vật lý hoàn toàn.'
      },
      {
        question: 'Tên miền trang web giáo dục chính thức của Bộ Giáo dục và Đào tạo Việt Nam thường có đuôi phần mở rộng là gì?',
        options: ['.edu.vn hoặc .gov.vn', '.com', '.xyz', '.net'],
        answerIndex: 0,
        hint: 'edu = education (giáo dục), gov = government (chính phủ), vn = Việt Nam.',
        explanation: 'Đuôi .edu.vn là tên miền cấp quốc gia dành riêng cho các tổ chức giáo dục đào tạo chính thống tại Việt Nam.'
      },
      {
        question: 'Hành vi nào sau đây giúp phòng tránh việc bị chiếm đoạt tài khoản mạng xã hội (Facebook, Zalo, Gmail)?',
        options: ['Bật tính năng xác thực 2 bước (2FA), không nhấp vào đường link lạ có quà tặng khuyến mãi và luôn đăng xuất khi dùng máy tính công cộng', 'Đặt mật khẩu là ngày sinh nhật của mình', 'Chia sẻ mật khẩu cho mọi người cùng biết', 'Không bao giờ đổi mật khẩu'],
        answerIndex: 0,
        hint: 'Xác thực 2 yếu tố và cảnh giác với bẫy lừa đảo liên kết giả mạo.',
        explanation: 'Bật 2FA và không bao giờ nhập thông tin đăng nhập trên các trang web lạ giúp bảo vệ tài khoản số trước hacker.'
      },
      {
        question: 'Độ phân giải của một bức ảnh kỹ thuật số (ví dụ 1920 x 1080 Full HD) thể hiện thông số gì?',
        options: ['Số lượng điểm ảnh (pixel) theo chiều ngang và chiều dọc tạo nên bức ảnh', 'Khối lượng tính bằng gam của máy ảnh', 'Tốc độ chụp ảnh trong 1 giây', 'Thời gian lưu trữ bức ảnh'],
        answerIndex: 0,
        hint: 'Tổng số điểm ảnh (pixels) hiển thị trên màn hình.',
        explanation: 'Độ phân giải là số pixel theo chiều ngang nhân số pixel theo chiều dọc; càng nhiều điểm ảnh thì hình ảnh càng sắc nét, chi tiết.'
      },
      {
        question: 'Đạo đức sử dụng hình ảnh trên không gian mạng yêu cầu học sinh phải tuân thủ nguyên tắc nào?',
        options: ['Xin phép người có mặt trong ảnh trước khi đăng tải công khai và không sử dụng hình ảnh của người khác để chế giễu, bôi nhọ', 'Tùy tiện lấy ảnh người khác chế meme xúc phạm', 'Tải ảnh riêng tư của bạn bè đăng lên các diễn đàn', 'Sử dụng ảnh có bản quyền thương mại mà không xin phép tác giả'],
        answerIndex: 0,
        hint: 'Tôn trọng quyền riêng tư và bản quyền tác giả hình ảnh.',
        explanation: 'Tôn trọng quyền riêng tư cá nhân và luật an ninh mạng đòi hỏi phải có sự đồng thuận của nhân vật trước khi phát tán hình ảnh lên mạng xã hội.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-it-reg1',
    title: 'Tin học 9 - Kiểm tra Thường xuyên 3: Thiết kế Trang Web Cơ bản (HTML & CSS)',
    titleEn: 'Informatics 9 - Regular Assessment 3: Web Page Design with HTML & CSS',
    grade: 9,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'easy',
    durationMinutes: 15,
    xpReward: 90,
    description: 'Cấu trúc thẻ văn bản HTML (<h1>, <p>, <a>, <img>), định dạng giao diện bằng CSS (màu sắc, phông chữ, canh lề) và siêu liên kết.',
    descriptionEn: 'Semantic HTML markup tags and CSS styling properties for web development.',
    questions: [
      {
        question: 'Ngôn ngữ đánh dấu siêu văn bản HTML viết tắt của cụm từ tiếng Anh nào?',
        options: ['HyperText Markup Language', 'High Tech Machine Language', 'Home Tool Multi Language', 'Hyperlink Text Modular Logic'],
        answerIndex: 0,
        hint: 'Ngôn ngữ đánh dấu tạo cấu trúc trang web.',
        explanation: 'HTML (HyperText Markup Language) là ngôn ngữ chuẩn mực dùng để xây dựng cấu trúc các trang thông tin trên World Wide Web.'
      },
      {
        question: 'Thẻ HTML nào sau đây dùng để chèn một SIÊU LIÊN KẾT (Hyperlink) dẫn sang một trang web khác?',
        options: ['<a href="url">Nội dung liên kết</a>', '<link src="url">', '<img src="url">', '<button to="url">'],
        answerIndex: 0,
        hint: 'Thẻ neo anchor: <a> với thuộc tính href.',
        explanation: 'Thẻ <a> với thuộc tính href="địa_chỉ_liên_kết" được dùng để tạo siêu liên kết trên trang web.'
      },
      {
        question: 'CSS (Cascading Style Sheets) giữ vai trò nhiệm vụ chính nào trong quá trình phát triển trang web?',
        options: ['Quy định cách trình bày, màu sắc, phông chữ, kích thước và bố cục giao diện của các phần tử HTML', 'Lưu trữ cơ sở dữ liệu học sinh', 'Sửa chữa hỏng hóc phần cứng máy tính', 'Quản lý đường truyền internet'],
        answerIndex: 0,
        hint: 'HTML tạo khung xương cấu trúc, CSS trang trí làm đẹp diện mạo.',
        explanation: 'CSS chịu trách nhiệm thiết kế thẩm mỹ thị giác: màu nền, phông chữ, khoảng cách đệm (padding) và bố cục responsive.'
      },
      {
        question: 'Để chèn một hình ảnh minh họa vào trang web bằng mã nguồn HTML, ta sử dụng thẻ nào?',
        options: ['<img src="duong_dan_anh.jpg" alt="mo ta">', '<picture href="anh.jpg">', '<image file="anh.jpg">', '<photo load="anh.jpg">'],
        answerIndex: 0,
        hint: 'Thẻ img với thuộc tính src (source).',
        explanation: 'Thẻ <img src="..."> dùng để nhúng hình ảnh vào văn bản HTML, thuộc tính alt cung cấp văn bản thay thế khi ảnh bị lỗi tải.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-it-reg2',
    title: 'Tin học 9 - Kiểm tra Thường xuyên 4: Trí tuệ Nhân tạo (AI) & Định hướng Nghề nghiệp Công nghệ',
    titleEn: 'Informatics 9 - Regular Assessment 4: Artificial Intelligence & Tech Careers',
    grade: 9,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Khái niệm Trí tuệ nhân tạo (AI), học máy (Machine Learning), ứng dụng nhận diện giọng nói khuôn mặt, xe tự hành và đạo đức sử dụng AI.',
    descriptionEn: 'AI foundations, machine learning neural nets, facial recognition, autonomous systems, and ethical AI stewardship.',
    questions: [
      {
        question: 'TRÍ TUỆ NHÂN TẠO (AI - Artificial Intelligence) là lĩnh vực khoa học máy tính hướng tới mục tiêu nào?',
        options: ['Xây dựng các hệ thống máy tính có khả năng thực hiện các tác vụ đòi hỏi trí thông minh của con người (nhận thức, học hỏi, suy luận, thị giác máy tính)', 'Chế tạo các bóng đèn phát sáng siêu nhanh', 'Tạo ra các loại máy tính không thể hư hỏng', 'Biến máy tính thành người thật bằng xương bằng thịt'],
        answerIndex: 0,
        hint: 'Mô phỏng các năng lực trí tuệ của con người trên máy tính.',
        explanation: 'AI là ngành khoa học máy tính nghiên cứu cách lập trình cho máy móc có khả năng học tập từ dữ liệu, nhận diện hình ảnh và giải quyết vấn đề phức tạp.'
      },
      {
        question: 'Ứng dụng nào sau đây là minh chứng điển hình của Trí tuệ nhân tạo trong đời sống hàng ngày?',
        options: ['Trợ lý ảo giọng nói (Siri, Google Assistant), nhận diện khuôn mặt mở khóa điện thoại (FaceID) và gợi ý video theo sở thích', 'Bàn phím cơ có đèn LED nhiều màu', 'Cáp sạc điện thoại bọc dù', 'Chuột máy tính có dây'],
        answerIndex: 0,
        hint: 'Nhận dạng giọng nói tự nhiên và thị giác máy tính.',
        explanation: 'Nhận diện giọng nói, FaceID và thuật toán gợi ý nội dung là các ứng dụng AI học sâu (Deep Learning) phổ biến nhất hiện nay.'
      },
      {
        question: 'Vấn đề đạo đức đáng quan ngại nhất khi sử dụng công nghệ Deepfake (trí tuệ nhân tạo tạo video, giọng nói giả mạo) là gì?',
        options: ['Bị kẻ xấu lợi dụng để tạo ra các video, bản ghi âm giả mạo người nổi tiếng hoặc người thân nhằm lừa đảo tiền bạc, bôi nhọ uy tín', 'Làm cho video có độ nét quá cao', 'Tốn quá nhiều dung lượng pin', 'Làm cho màn hình máy tính bị nóng'],
        answerIndex: 0,
        hint: 'Giả mạo hình ảnh và giọng nói để lừa đảo trực tuyến.',
        explanation: 'Deepfake có thể bị kẻ gian lợi dụng mạo danh người thân gọi video lừa chuyển tiền hoặc phát tán tin tức giả mạo nguy hiểm.'
      },
      {
        question: 'Kỹ sư PHÁT TRIỂN TRÍ TUỆ NHÂN TẠO (AI Engineer) cần có nền tảng kiến thức vững chắc nhất ở những môn học nào ở bậc phổ thông?',
        options: ['Môn Toán học (Đại số tuyến tính, Xác suất thống kê) và môn Tin học (Tư duy thuật toán, ngôn ngữ lập trình)', 'Môn Vẽ tranh thủ công', 'Môn Nấu ăn gia chánh', 'Chỉ cần học thuộc bảng cửu chương'],
        answerIndex: 0,
        hint: 'Toán học xác suất và lập trình thuật toán là xương sống của AI.',
        explanation: 'Nền tảng của trí tuệ nhân tạo và học máy là toán học thống kê, đại số tuyến tính kết hợp tư duy lập trình chuyên sâu.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-it-reg3',
    title: 'Tin học 9 - Kiểm tra Thường xuyên 3: Biểu mẫu Web HTML & Thu thập Thông tin Trực tuyến',
    titleEn: 'Informatics 9 - Regular Assessment 3: HTML Web Forms & Online Survey Design',
    grade: 9,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 95,
    description: 'Thẻ form HTML, các trường nhập liệu <input type="text/password/radio/checkbox">, nút submit và biểu mẫu khảo sát trực tuyến.',
    descriptionEn: 'HTML form controls, input elements, buttons, and online data gathering.',
    questions: [
      {
        question: 'Trong biểu mẫu HTML, thẻ <input type="password"> có đặc điểm hiển thị nào để bảo mật?',
        options: ['Các ký tự người dùng gõ vào được ẩn đi và thay thế bằng các dấu chấm tròn đen hoặc dấu sao (*)', 'Chữ viết đổi sang màu đỏ', 'Tự động phát ra âm thanh cảnh báo', 'Tự động gửi tin nhắn cho bạn bè'],
        answerIndex: 0,
        hint: 'Ẩn ký tự mật khẩu phòng người khác nhìn lén màn hình.',
        explanation: 'Input type password hiển thị các ký tự dưới dạng dấu chấm để bảo vệ tính bí mật của mật khẩu.'
      },
      {
        question: 'Để người dùng chỉ có thể CHỌN 01 PHƯƠNG ÁN DUY NHẤT trong một danh sách câu hỏi trắc nghiệm, ta dùng kiểu input nào?',
        options: ['<input type="radio" name="cauhoi">', '<input type="checkbox">', '<input type="text">', '<input type="file">'],
        answerIndex: 0,
        hint: 'Nút radio (nút tròn) nhóm chung cùng thuộc tính "name".',
        explanation: 'Input type radio có cùng giá trị name chỉ cho phép người dùng chọn duy nhất 1 phương án (loại trừ lẫn nhau).'
      },
      {
        question: 'Nút bấm nào trong biểu mẫu HTML dùng để GỬI DỮ LIỆU đã điền về máy chủ để xử lý?',
        options: ['<input type="submit" value="Gửi đi">', '<input type="reset">', '<input type="cancel">', '<input type="delete">'],
        answerIndex: 0,
        hint: 'Nút Submit gửi thông tin.',
        explanation: 'Thẻ <input type="submit"> kích hoạt hành động gửi (action) của biểu mẫu lên máy chủ web.'
      },
      {
        question: 'Thẻ <textarea> trong biểu mẫu HTML được sử dụng trong trường hợp nào?',
        options: ['Khi cần một khung nhập văn bản dài nhiều dòng (như viết ý kiến phản hồi, nhận xét)', 'Khi chèn một bức ảnh', 'Khi vẽ một đường kẻ ngang', 'Khi tạo bảng tính'],
        answerIndex: 0,
        hint: 'Khung nhập văn bản nhiều dòng (multi-line text input).',
        explanation: 'Thẻ <textarea> cho phép người dùng nhập đoạn văn bản dài có nhiều dòng.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-it-reg4',
    title: 'Tin học 9 - Kiểm tra Thường xuyên 4: An toàn Dữ liệu & Phòng chống Tội phạm Công nghệ cao',
    titleEn: 'Informatics 9 - Regular Assessment 4: Data Security & High-Tech Crime Prevention',
    grade: 9,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'regular',
    difficulty: 'medium',
    durationMinutes: 15,
    xpReward: 100,
    description: 'Nhận diện thủ đoạn tội phạm mạng, bảo vệ thông tin sinh trắc học, sao lưu dữ liệu quy tắc 3-2-1 và ứng phó khi bị rò rỉ thông tin.',
    descriptionEn: 'Cybercrime prevention, biometric data safety, 3-2-1 backup strategy, and breach response.',
    questions: [
      {
        question: 'Quy tắc sao lưu dữ liệu "3-2-1" kinh điển trong an toàn thông tin khuyến nghị điều gì?',
        options: ['Lưu ít nhất 3 bản sao dữ liệu, trên 2 phương tiện lưu trữ khác nhau và có ít nhất 1 bản sao lưu ở một địa điểm vật lý khác (hoặc trên đám mây)', 'Mỗi ngày chỉ dùng máy tính 3 giờ', 'Đổi mật khẩu 3 lần trong 2 ngày', 'Chỉ dùng 1 chiếc USB duy nhất'],
        answerIndex: 0,
        hint: '3 bản sao - 2 loại phương tiện - 1 nơi lưu trữ cách biệt an toàn.',
        explanation: 'Quy tắc 3-2-1 bảo đảm dữ liệu luôn có thể phục hồi ngay cả khi gặp hỏa hoạn, mất cắp hoặc tấn công virus mã hóa.'
      },
      {
        question: 'Khi nhận được cuộc gọi video giả mạo người thân (khuôn mặt cử động cứng đờ, giọng nói ngắt quãng) hỏi mượn tiền gấp, bạn nên làm gì?',
        options: ['Lập tức tắt máy và gọi điện thoại thoại trực tiếp qua số di động thông thường của người thân để xác nhận lại thông tin', 'Chuyển tiền ngay lập tức không cần suy nghĩ', 'Chụp ảnh màn hình đăng lên trang cá nhân', 'Đọc to mã số ngân hàng cho đầu dây bên kia'],
        answerIndex: 0,
        hint: 'Bình tĩnh kiểm chứng qua kênh liên lạc độc lập khác.',
        explanation: 'Kẻ xấu dùng AI Deepfake làm video giả mạo, gọi điện thoại trực tiếp qua sim điện thoại là cách nhanh nhất và an toàn nhất để xác minh.'
      },
      {
        question: 'Hành vi cung cấp thông tin căn cước công dân (CCCD) và ảnh chụp khuôn mặt cho các ứng dụng không rõ nguồn gốc có nguy cơ gì?',
        options: ['Bị kẻ xấu lợi dụng thông tin định danh để đăng ký mở tài khoản ngân hàng lừa đảo hoặc vay tiền trực tuyến trái phép', 'Giúp điện thoại chạy mượt hơn', 'Được tặng quà miễn phí thật', 'Tăng dung lượng bộ nhớ máy tính'],
        answerIndex: 0,
        hint: 'Nguy cơ bị đánh cắp danh tính số (Identity Theft).',
        explanation: 'Thông tin CCCD và sinh trắc học khuôn mặt là dữ liệu nhạy cảm cấp cao, bị lộ sẽ dẫn tới nguy cơ bị mạo danh vay nợ hoặc phạm tội.'
      },
      {
        question: 'Phần mềm TỐNG TIỀN (Ransomware) tấn công máy tính bằng phương thức nguy hiểm nào?',
        options: ['Tự động mã hóa toàn bộ tệp tài liệu quan trọng của người dùng và đòi một khoản tiền chuộc lớn để lấy chìa khóa giải mã', 'Chỉ làm đổi hình nền máy tính', 'Làm máy in kêu to', 'Tự động gửi email chúc mừng sinh nhật'],
        answerIndex: 0,
        hint: 'Mã hóa khóa chặt dữ liệu và đòi tiền chuộc.',
        explanation: 'Ransomware dùng thuật toán mã hóa mạnh khóa chặt dữ liệu của nạn nhân và yêu cầu trả tiền chuộc (thường bằng tiền ảo) mới cấp mã giải mã.'
      }
    ]
  },
  {
    id: 'quiz-g9-s2-it-final',
    title: 'Tin học 9 - Đề Kiểm Tra Cuối Học Kỳ 2 (Đề Tổng Ôn Toàn Diện Kiến Thức & Kỹ Năng Số THCS)',
    titleEn: 'Informatics 9 - Semester 2 Final Examination (Master Middle School Graduation Test)',
    grade: 9,
    semester: 2,
    subject: 'Tin học',
    subjectVi: 'Tin học',
    subjectEn: 'Informatics',
    category: 'tech',
    testType: 'final',
    difficulty: 'hard',
    durationMinutes: 60,
    xpReward: 200,
    description: 'Đề thi tổng hợp cuối năm học lớp 9 tốt nghiệp cấp THCS: Mạng máy tính & đám mây, đa phương tiện số, thiết kế web HTML/CSS, trí tuệ nhân tạo AI và đạo đức trách nhiệm công dân số.',
    descriptionEn: 'End-of-year master examination covering entire 4-year THCS computer science curriculum for Grade 9 graduates.',
    questions: [
      {
        question: 'Một học sinh nhận được email thông báo trúng thưởng 1 chiếc iPhone 16 Pro Max kèm đường link yêu cầu nhập họ tên, mật khẩu Gmail và mã OTP. Hành động thông minh nhất là:',
        options: ['Không nhấp vào link, báo cáo thư rác (Spam/Phishing) và xóa ngay email lừa đảo', 'Lập tức nhập mật khẩu và gửi cho mọi bạn bè cùng làm theo', 'Gửi thêm số tài khoản ngân hàng của cha mẹ', 'Chờ đợi người ta mang điện thoại đến nhà trao tặng'],
        answerIndex: 0,
        hint: 'Cảnh giác với bẫy lừa đảo trúng thưởng mạo danh.',
        explanation: 'Đây là thủ đoạn lừa đảo Phishing kinh điển nhằm đánh cắp tài khoản cá nhân, tuyệt đối không được nhấn vào link lạ.'
      },
      {
        question: 'Trong cấu trúc trang web HTML chuẩn, phần nội dung hiển thị trực tiếp cho người xem trên màn hình trình duyệt nằm trọn vẹn trong cặp thẻ nào?',
        options: ['<body> ... </body>', '<head> ... </head>', '<title> ... </title>', '<style> ... </style>'],
        answerIndex: 0,
        hint: 'Phần thân (body) của trang web.',
        explanation: 'Cặp thẻ <body>...</body> chứa tất cả các phần tử văn bản, hình ảnh, video và liên kết hiển thị trên giao diện người dùng.'
      },
      {
        question: 'Thuộc tính CSS nào sau đây được dùng để thay đổi MÀU CHỮ của một đoạn văn bản?',
        options: ['color: red;', 'background-color: red;', 'font-color: red;', 'text-style: red;'],
        answerIndex: 0,
        hint: 'Thuộc tính color: <màu>; (background-color là màu nền).',
        explanation: 'Thuộc tính color trong CSS quy định màu sắc của ký tự chữ viết.'
      },
      {
        question: 'Học máy (Machine Learning) cho phép máy tính tự cải thiện hiệu suất thực hiện nhiệm vụ dựa trên yếu tố nào?',
        options: ['Dựa trên việc phân tích và học hỏi từ các tập DỮ LIỆU lớn (Data) trong quá trình huấn luyện', 'Dựa trên việc cắm thêm nhiều dây điện', 'Dựa vào thời tiết nắng hay mưa', 'Dựa vào việc khởi động lại máy tính liên tục'],
        answerIndex: 0,
        hint: 'Dữ liệu là nhiên liệu nuôi sống các mô hình Machine Learning.',
        explanation: 'Học máy sử dụng các thuật toán huấn luyện trên lượng lớn dữ liệu thực tế để tìm ra các mẫu quy luật và tự đưa ra quyết định chuẩn xác.'
      },
      {
        question: 'Trách nhiệm cao nhất của một CÔNG DÂN SỐ (Digital Citizen) gương mẫu trên mạng xã hội là gì?',
        options: ['Ứng xử văn minh lịch sự, tôn trọng bản quyền, chia sẻ thông tin xác thực tích cực và đấu tranh chống lại các luận điệu sai trái, tin giả', 'Lan truyền các tin đồn giật gân câu like mà không cần biết đúng sai', 'Dùng nick ẩn danh để xúc phạm người khác', 'Chụp lén ảnh người khác đăng lên mạng bêu rếu'],
        answerIndex: 0,
        hint: 'Văn hóa ứng xử văn minh và liêm chính số.',
        explanation: 'Công dân số văn minh có trách nhiệm giữ gìn môi trường mạng lành mạnh, chia sẻ tri thức hữu ích và tuân thủ pháp luật an ninh mạng.'
      },
      {
        question: 'Môn Tin học cấp THCS GDPT 2018 trang bị cho học sinh năng lực cốt lõi nào để vững bước bước vào trường THPT và kỷ nguyên số 4.0?',
        options: ['Năng lực sử dụng và quản lý các phương tiện CNTT, tư duy giải quyết vấn đề với sự hỗ trợ của CNTT và giao tiếp cộng tác trong môi trường số', 'Chỉ biết chơi game giải trí', 'Chỉ để thay thế môn học khác', 'Không có tác dụng thực tế nào'],
        answerIndex: 0,
        hint: 'Các thành phần năng lực tin học theo chuẩn chương trình GDPT 2018.',
        explanation: 'Chương trình Tin học GDPT 2018 hình thành tư duy thuật toán, kỹ năng số thực tiễn và bản lĩnh thích ứng với các công nghệ tương lai như AI và Cloud.'
      }
    ]
  }
];
