import { CURRICULUM_QUIZZES } from './curriculumData';
import { GRADE_6_HISTORY_QUIZZES } from './historyGrade6Quizzes';

export const getLessons = (lang: string, quizId?: string) => {
  const isVi = lang === 'vi';
  
  const baseLessons: Record<string, any> = {
    'scientific-notation': {
      id: 'scientific-notation',
      title: isVi ? 'Ký hiệu Khoa học' : 'Scientific Notation',
      questions: [
        { question: isVi ? 'Một biểu thức bằng 2.4 x 10^4 là gì?' : 'What is an expression equal to 2.4 x 10^4?', options: ['24,000', '2,400', '240,000', '24'], answerIndex: 0, hint: '10^4 = 10,000. 2.4 x 10,000 = ?', explanation: '2.4 nhân với 10^4 (10,000) bằng 24,000.' },
        { question: isVi ? 'Làm thế nào để viết 0.00035 bằng ký hiệu khoa học?' : 'How do you write 0.00035 in scientific notation?', options: ['3.5 x 10^-4', '35 x 10^-5', '3.5 x 10^4', '0.35 x 10^-3'], answerIndex: 0, hint: 'Dời dấu phẩy sang phải 4 chữ số: 3.5 x 10^-4', explanation: '0.00035 được viết chuẩn dạng a x 10^b với 1 ≤ a < 10 là 3.5 x 10^-4.' },
        { question: isVi ? 'Tính: (2 x 10^3) * (3 x 10^4)' : 'Calculate: (2 x 10^3) * (3 x 10^4)', options: ['6 x 10^7', '5 x 10^7', '6 x 10^12', '5 x 10^12'], answerIndex: 0, hint: '(2 x 3) x (10^3 x 10^4) = 6 x 10^(3+4).', explanation: 'Nhân phần hệ số 2 x 3 = 6; cộng số mũ 3 + 4 = 7. Kết quả: 6 x 10^7.' },
        { question: isVi ? 'Tiền tố "kilo" tương ứng với lũy thừa nào của 10?' : 'What power of 10 does the prefix "kilo" represent?', options: ['10^3', '10^6', '10^-3', '10^2'], answerIndex: 0, hint: '1 kilômét = 1,000 mét = 10^3 mét.', explanation: 'Tiền tố SI kilo tương ứng 1,000 = 10^3.' },
        { question: isVi ? '5.1 x 10^-2 bằng bao nhiêu?' : 'What is 5.1 x 10^-2 as a standard number?', options: ['0.051', '0.51', '510', '0.0051'], answerIndex: 0, hint: '10^-2 = 1/100 = 0.01.', explanation: '5.1 x 0.01 = 0.051.' },
      ]
    },
    'logic': {
      id: 'logic',
      title: isVi ? 'Nhập môn Logic học' : 'Introduction to Logic',
      questions: [
        { question: isVi ? 'Toán tử logic nào trả về True NẾU VÀ CHỈ NẾU cả hai đầu vào đều là True?' : 'Which logical operator returns True IF AND ONLY IF both inputs are True?', options: ['AND', 'OR', 'XOR', 'NAND'], answerIndex: 0, hint: 'Phép hội logic A ∧ B.', explanation: 'Toán tử AND chỉ trả về True khi cả hai mệnh đề đều đúng.' },
        { question: isVi ? 'Cổng nào trả về True nếu chính xác MỘT đầu vào là True?' : 'Which gate outputs True if exactly ONE input is True?', options: ['XOR', 'OR', 'AND', 'NOR'], answerIndex: 0, hint: 'Phép hoặc loại trừ (Exclusive OR).', explanation: 'Cổng XOR (Exclusive OR) trả về True khi 2 đầu vào khác nhau (chính xác một True).' },
        { question: isVi ? 'NOT(False) có giá trị là bao nhiêu?' : 'What does NOT(False) evaluate to?', options: ['True', 'False', 'Undefined', 'Error'], answerIndex: 0, hint: 'Phủ định của False là True.', explanation: 'Phép phủ định NOT đảo ngược chân trị: NOT(False) = True.' },
      ]
    },
    'math-foundations': {
      id: 'math-foundations',
      title: isVi ? 'Nền tảng Toán học' : 'Mathematical Foundations',
      questions: [
        { question: isVi ? 'Giá trị của pi đến hai chữ số thập phân là bao nhiêu?' : 'What is the value of pi to two decimal places?', options: ['3.14', '3.16', '3.12', '3.18'], answerIndex: 0, hint: 'Số pi xấp xỉ 22/7.', explanation: 'Giá trị pi xấp xỉ 3.14159... làm tròn 2 chữ số thập phân là 3.14.' },
        { question: isVi ? 'Giải phương trình: 2x + 5 = 15' : 'Solve for x: 2x + 5 = 15', options: ['5', '10', '7.5', '20'], answerIndex: 0, hint: '2x = 15 - 5 = 10.', explanation: '2x = 10 => x = 10 / 2 = 5.' },
      ]
    }
  };

  // Populate all curriculum quizzes into baseLessons
  for (const cQuiz of CURRICULUM_QUIZZES) {
    baseLessons[cQuiz.id] = {
      id: cQuiz.id,
      title: isVi ? cQuiz.title : cQuiz.titleEn,
      subject: isVi ? cQuiz.subjectVi : cQuiz.subjectEn,
      grade: cQuiz.grade,
      semester: cQuiz.semester,
      durationMinutes: cQuiz.durationMinutes,
      questions: cQuiz.questions.map(q => ({
        question: q.question,
        options: q.options,
        answerIndex: q.answerIndex,
        hint: q.hint,
        explanation: q.explanation
      }))
    };
  }

  // Populate Grade 6 History examination suite into baseLessons
  for (const hQuiz of GRADE_6_HISTORY_QUIZZES) {
    baseLessons[hQuiz.id] = {
      id: hQuiz.id,
      title: isVi ? hQuiz.title : hQuiz.titleEn,
      subject: isVi ? hQuiz.subjectVi : hQuiz.subject,
      grade: hQuiz.grade,
      semester: hQuiz.semester,
      durationMinutes: hQuiz.durationMinutes,
      questions: hQuiz.questions.map(q => {
        if (q.type === 'true_false') {
          return {
            question: q.question,
            options: isVi ? ['Đúng (True)', 'Sai (False)'] : ['True', 'False'],
            answerIndex: q.isTrue ? 0 : 1,
            hint: q.hint,
            explanation: q.explanation,
            type: 'true_false'
          };
        } else if (q.type === 'drag_drop') {
          const pairSummary = q.dragPairs ? q.dragPairs.map(p => `• ${p.item} ➔ ${p.correctSlot}`).join('\n') : '';
          return {
            question: `${q.question}\n(${isVi ? 'Tự luận kéo thả ghép nối kiến thức' : 'Interactive drag-and-drop matching'}):`,
            options: [
              q.dragPairs?.map(p => `${p.item} ➔ ${p.correctSlot}`).join(' | ') || (isVi ? 'Ghép nối chuẩn xác' : 'Accurate matching'),
              q.dragPairs ? [...q.dragPairs].reverse().map(p => `${p.item} ➔ ${p.correctSlot}`).join(' | ') : 'Ghép nối phương án B',
              isVi ? 'Ghép nối sai lệch vị trí 1' : 'Incorrect slot assignment 1',
              isVi ? 'Ghép nối sai lệch vị trí 2' : 'Incorrect slot assignment 2'
            ],
            answerIndex: 0,
            hint: q.hint,
            explanation: q.explanation || pairSummary,
            type: 'drag_drop',
            slots: q.slots,
            dragPairs: q.dragPairs
          };
        }
        return {
          question: q.question,
          options: q.options || [],
          answerIndex: typeof q.answerIndex === 'number' ? q.answerIndex : 0,
          hint: q.hint,
          explanation: q.explanation,
          type: 'mcq'
        };
      })
    };
  }

  // Aliases for Geography test links in Grade 6
  if (baseLessons['quiz-g6-s1-history-geo']) {
    baseLessons['quiz-g6-s1-geo-midterm'] = {
      ...baseLessons['quiz-g6-s1-history-geo'],
      id: 'quiz-g6-s1-geo-midterm',
      title: isVi ? 'Địa lí 6 - Đề Kiểm Tra Giữa Học Kỳ 1: Bản đồ học & Trái Đất' : 'Geography 6 - Midterm Semester 1: Cartography & Earth'
    };
  }
  if (baseLessons['quiz-g6-s2-history-geo']) {
    baseLessons['quiz-g6-s2-geo-final'] = {
      ...baseLessons['quiz-g6-s2-history-geo'],
      id: 'quiz-g6-s2-geo-final',
      title: isVi ? 'Địa lí 6 - Đề Kiểm Tra Cuối Học Kỳ 2: Khí quyển, Thủy quyển & Trái Đất' : 'Geography 6 - Final Semester 2: Atmosphere & Hydrosphere'
    };
  }

  if (quizId && quizId.startsWith('grade-')) {
    const parts = quizId.split('-');
    const grade = parts[1] || '5';
    const topicIndex = parts[3] || '1';

    let realTitle = isVi ? `Lớp ${grade} - Môn học` : `Grade ${grade} Subject`;
    let realQuestions: any[] = [];

    switch (topicIndex) {
      case '1': // Mathematics
        realTitle = isVi ? `Toán học - Lớp ${grade}` : `Mathematics - Grade ${grade}`;
        realQuestions = [
          {
            question: isVi ? `[Lớp ${grade}] Tính kết quả của phép tính: 145 + 238 - 110` : `[Grade ${grade}] Calculate: 145 + 238 - 110`,
            options: ['273', '263', '283', '253'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Tìm x biết: 4x + 12 = 36` : `[Grade ${grade}] Solve for x: 4x + 12 = 36`,
            options: ['6', '8', '5', '10'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Diện tích hình chữ nhật có chiều dài 8cm và chiều rộng 5cm là bao nhiêu?` : `[Grade ${grade}] Area of a rectangle with length 8cm and width 5cm?`,
            options: ['40 cm²', '26 cm²', '13 cm²', '45 cm²'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Rút gọn phân số 24/36 về tối giản` : `[Grade ${grade}] Simplify the fraction 24/36`,
            options: ['2/3', '3/4', '4/5', '5/6'],
            answerIndex: 0
          }
        ];
        break;

      case '2': // Natural Science
        realTitle = isVi ? `Khoa học Tự nhiên - Lớp ${grade}` : `Natural Science - Grade ${grade}`;
        realQuestions = [
          {
            question: isVi ? `[Lớp ${grade}] Quá trình nào cây xanh tổng hợp chất hữu cơ từ ánh sáng mặt trời?` : `[Grade ${grade}] Which process do plants use to synthesize organic compounds from sunlight?`,
            options: isVi 
              ? ['Quang hợp', 'Hô hấp', 'Thoát hơi nước', 'Tiêu hóa']
              : ['Photosynthesis', 'Respiration', 'Transpiration', 'Digestion'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Hạt mang điện tích âm quay quanh hạt nhân nguyên tử là gì?` : `[Grade ${grade}] What is the negatively charged subatomic particle orbiting the atomic nucleus?`,
            options: ['Electron', 'Proton', 'Neutron', 'Photon'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Trạng thái nào của nước tồn tại ở nhiệt độ dưới 0°C (ở áp suất tiêu chuẩn)?` : `[Grade ${grade}] What state of water exists below 0°C at standard pressure?`,
            options: isVi
              ? ['Thể rắn', 'Thể lỏng', 'Thể khí', 'Thể plasma']
              : ['Solid (Ice)', 'Liquid', 'Gas', 'Plasma'],
            answerIndex: 0
          }
        ];
        break;

      case '3': // Literature
        realTitle = isVi ? `Ngữ văn - Lớp ${grade}` : `Literature - Grade ${grade}`;
        realQuestions = [
          {
            question: isVi ? `[Lớp ${grade}] Trong tiếng Việt, từ loại nào dùng để chỉ sự vật, hiện tượng, con người hoặc khái niệm?` : `[Grade ${grade}] In grammar, which part of speech names a person, place, thing, or idea?`,
            options: isVi
              ? ['Danh từ', 'Động từ', 'Tính từ', 'Trạng từ']
              : ['Noun', 'Verb', 'Adjective', 'Adverb'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Biện pháp tu nghệ nào so sánh sự vật này với sự vật khác có nét tương đồng?` : `[Grade ${grade}] Which literary device draws a comparison between two things based on likeness?`,
            options: isVi
              ? ['So sánh', 'Ẩn dụ ngược', 'Nói giảm nói tránh', 'Liệt kê']
              : ['Simile / Metaphor', 'Irony', 'Understatement', 'Enumeration'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Từ nào sau đây viết đúng chính tả tiếng Việt?` : `[Grade ${grade}] Which of the following words is spelled correctly in Vietnamese?`,
            options: ['Sáng sủa', 'Xáng sủa', 'Sáng chủa', 'Xáng chủa'],
            answerIndex: 0
          }
        ];
        break;

      case '4': // Penmanship
        realTitle = isVi ? `Luyện chữ & Chính tả - Lớp ${grade}` : `Penmanship & Spelling - Grade ${grade}`;
        realQuestions = [
          {
            question: isVi ? `[Lớp ${grade}] Quy tắc viết hoa nào sau đây chính xác?` : `[Grade ${grade}] Which capitalization rule is correct?`,
            options: isVi
              ? ['Viết hoa chữ cái đầu tiên của mỗi tiếng trong tên riêng', 'Viết hoa toàn bộ câu', 'Không bao giờ viết hoa', 'Chỉ viết hoa khi kết thúc câu']
              : ['Capitalize the first letter of each proper noun', 'Capitalize the entire sentence', 'Never capitalize', 'Capitalize only at the end of a sentence'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Chọn từ điền đúng chính tả: "Trẻ em như ... trên cành"` : `[Grade ${grade}] Choose the correct word for the blank: "Trẻ em như ... trên cành"`,
            options: ['búp', 'búp bê', 'búp măng', 'búp sen'],
            answerIndex: 0
          }
        ];
        break;

      case '5': // Extended Maths
        realTitle = isVi ? `Toán nâng cao - Lớp ${grade}` : `Extended Maths - Grade ${grade}`;
        realQuestions = [
          {
            question: isVi ? `[Lớp ${grade}] Tìm số tiếp theo trong dãy: 2, 6, 12, 20, 30, ...` : `[Grade ${grade}] Find the next number in the sequence: 2, 6, 12, 20, 30, ...`,
            options: ['42', '40', '36', '48'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Tổng của 3 số tự nhiên liên tiếp bằng 72. Số lớn nhất trong ba số đó là bao nhiêu?` : `[Grade ${grade}] The sum of 3 consecutive integers is 72. What is the largest integer?`,
            options: ['25', '24', '26', '27'],
            answerIndex: 0
          }
        ];
        break;

      case '6': // Computer Science
        realTitle = isVi ? `Khoa học Máy tính - Lớp ${grade}` : `Computer Science - Grade ${grade}`;
        realQuestions = [
          {
            question: isVi ? `[Lớp ${grade}] Bộ phận nào được ví như "bộ não" của máy tính?` : `[Grade ${grade}] Which component is considered the "brain" of the computer?`,
            options: isVi
              ? ['Bộ vi xử lý (CPU)', 'Bộ nhớ RAM', 'Ổ đĩa cứng', 'Màn hình hiển thị']
              : ['Central Processing Unit (CPU)', 'RAM Memory', 'Hard Drive', 'Monitor Display'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Trong hệ nhị phân, các chữ số được biểu diễn bằng những ký tự nào?` : `[Grade ${grade}] In binary code, what digits are used to represent data?`,
            options: isVi
              ? ['0 và 1', 'Từ 0 đến 9', 'Từ A đến F', '1 đến 10']
              : ['0 and 1', '0 through 9', 'A through F', '1 through 10'],
            answerIndex: 0
          }
        ];
        break;

      case '7': // Coding
      default:
        realTitle = isVi ? `Lập trình - Lớp ${grade}` : `Coding - Grade ${grade}`;
        realQuestions = [
          {
            question: isVi ? `[Lớp ${grade}] Cấu trúc điều kiện nào dùng để kiểm tra đúng/sai trong lập trình?` : `[Grade ${grade}] Which conditional statement is used to check true/false conditions in coding?`,
            options: isVi
              ? ['Câu lệnh điều kiện if / else', 'Vòng lặp loop', 'Lệnh in print', 'Biến số variable']
              : ['if / else statement', 'loop structure', 'print function', 'variable declaration'],
            answerIndex: 0
          },
          {
            question: isVi ? `[Lớp ${grade}] Vòng lặp nào được sử dụng khi biết trước số lần lặp cụ thể?` : `[Grade ${grade}] Which loop is used when the exact number of iterations is known in advance?`,
            options: isVi
              ? ['Vòng lặp for', 'Vòng lặp while', 'Vòng lặp vô hạn', 'Câu lệnh if']
              : ['for loop', 'while loop', 'infinite loop', 'if statement'],
            answerIndex: 0
          }
        ];
        break;
    }

    return {
      [quizId]: {
        id: quizId,
        title: realTitle,
        questions: realQuestions
      },
      ...baseLessons
    };
  }

  return baseLessons;
};
