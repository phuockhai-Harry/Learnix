import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';
import { BookOpen, ChevronLeft, ChevronRight, RotateCw, CheckCircle, Award, Sparkles, GraduationCap } from 'lucide-react';

const ALL_GRADE_DECKS: Record<string, any[]> = {
  elementary: [
    {
      id: 'elem-math',
      title: { en: 'Elementary Arithmetic & Shapes', vi: 'Số học & Hình học Tiểu học' },
      cards: [
        { term: { en: 'Addition & Sum', vi: 'Phép cộng & Tổng' }, definition: { en: 'Finding the total or sum by combining two or more numbers.', vi: 'Tìm tổng bằng cách kết hợp hai hay nhiều số lại với nhau.' } },
        { term: { en: 'Rectangle', vi: 'Hình chữ nhật' }, definition: { en: 'A four-sided flat shape with straight sides where all interior angles are right angles (90°).', vi: 'Hình phẳng có 4 cạnh thẳng và 4 góc vuông (90°).' } },
        { term: { en: 'Fraction', vi: 'Phân số' }, definition: { en: 'Represents a part of a whole or number of equal parts.', vi: 'Biểu thị một phần của một tổng thể hoặc các phần bằng nhau.' } },
        { term: { en: 'Multiplication', vi: 'Phép nhân' }, definition: { en: 'Repeated addition of the same number multiple times.', vi: 'Phép cộng lặp lại của cùng một số nhiều lần.' } }
      ]
    },
    {
      id: 'elem-science',
      title: { en: 'Basic Nature & Animals', vi: 'Thiên nhiên & Động vật Cơ bản' },
      cards: [
        { term: { en: 'Photosynthesis', vi: 'Quang hợp' }, definition: { en: 'How plants use sunlight, water, and air to make their own food.', vi: 'Cách thực vật sử dụng ánh sáng mặt trời, nước và không khí để tạo thức ăn.' } },
        { term: { en: 'Water Cycle', vi: 'Vòng tuần hoàn nước' }, definition: { en: 'The continuous movement of water on, above and below the surface of the Earth.', vi: 'Sự di chuyển liên tục của nước trên, trên và dưới bề mặt Trái Đất.' } },
        { term: { en: 'Mammal', vi: 'Thú / Động vật có vú' }, definition: { en: 'Warm-blooded vertebrate animals that have hair or fur and feed milk to young.', vi: 'Động vật có xương sống máu nóng, có lông mao và nuôi con bằng sữa.' } }
      ]
    }
  ],
  middle: [
    {
      id: 'math-vocab',
      title: { en: 'Middle School Math & Pre-Algebra', vi: 'Toán Trung học Cơ sở & Tiền Đại số' },
      cards: [
        { term: { en: 'Greatest Common Divisor (GCD)', vi: 'Ước chung lớn nhất (ƯCLN)' }, definition: { en: 'The largest positive integer that divides each of the integers without a remainder.', vi: 'Số nguyên dương lớn nhất chia hết cho tất cả các số đã cho mà không dư.' } },
        { term: { en: 'Pythagorean Theorem', vi: 'Định lý Pytago' }, definition: { en: 'In a right triangle, a² + b² = c² relating the lengths of the sides.', vi: 'Trong tam giác vuông, liên hệ giữa các cạnh là a² + b² = c².' } },
        { term: { en: 'Integer', vi: 'Số nguyên' }, definition: { en: 'A whole number that can be positive, negative, or zero.', vi: 'Số nguyên có thể là số dương, số âm hoặc số không.' } },
        { term: { en: 'Ratio & Proportion', vi: 'Tỷ lệ & Tỉ lệ thức' }, definition: { en: 'Comparison of two quantities by division or equality of two ratios.', vi: 'So sánh hai đại lượng bằng phép chia hoặc sự bằng nhau của hai tỷ số.' } }
      ]
    },
    {
      id: 'science-vocab',
      title: { en: 'General Science & Physics', vi: 'Khoa học Tổng quát & Vật lý' },
      cards: [
        { term: { en: 'Newton\'s Second Law', vi: 'Định luật II Newton' }, definition: { en: 'Force equals mass times acceleration (F = ma).', vi: 'Lực bằng khối lượng nhân gia tốc (F = ma).' } },
        { term: { en: 'Cell Nucleus', vi: 'Nhân tế bào' }, definition: { en: 'The membrane-bound organelle containing genetic material in eukaryotic cells.', vi: 'Bào quan chứa vật chất di truyền trong tế bào nhân thực.' } },
        { term: { en: 'Stratosphere', vi: 'Tầng bình lưu' }, definition: { en: 'Atmospheric layer above the troposphere containing the ozone layer.', vi: 'Tầng khí quyển phía trên tầng đối lưu chứa lớp ozone.' } }
      ]
    }
  ],
  high: [
    {
      id: 'high-math',
      title: { en: 'High School Algebra & Trigonometry', vi: 'Đại số & Lượng giác Trung học Phổ thông' },
      cards: [
        { term: { en: 'Quadratic Formula', vi: 'Công thức nghiệm bậc hai' }, definition: { en: 'x = (-b ± √(b² - 4ac)) / (2a) for solving quadratic equations ax² + bx + c = 0.', vi: 'Công thức x = (-b ± √(b² - 4ac)) / (2a) dùng giải phương trình bậc hai.' } },
        { term: { en: 'Logarithm', vi: 'Lô-garit' }, definition: { en: 'The inverse function to exponentiation; log_b(x) = y means b^y = x.', vi: 'Hàm ngược của lũy thừa; log_b(x) = y nghĩa là b^y = x.' } },
        { term: { en: 'Trigonometric Ratios (Sin/Cos/Tan)', vi: 'Tỉ số lượng giác (Sin/Cos/Tan)' }, definition: { en: 'Ratios of sides of a right triangle: Opposite/Hypotenuse, Adjacent/Hypotenuse, Opposite/Adjacent.', vi: 'Tỉ số các cạnh trong tam giác vuông: Đối/Huyền, Kề/Huyền, Đối/Kề.' } }
      ]
    },
    {
      id: 'cs-vocab',
      title: { en: 'Computer Science & Algorithms', vi: 'Khoa học Máy tính & Thuật toán' },
      cards: [
        { term: { en: 'Binary Search', vi: 'Tìm kiếm nhị phân' }, definition: { en: 'An efficient algorithm for finding an item from a sorted list of items in O(log n) time.', vi: 'Thuật toán tìm kiếm hiệu quả trên danh sách đã sắp xếp với độ phức tạp O(log n).' } },
        { term: { en: 'Recursion', vi: 'Đệ quy' }, definition: { en: 'A programming technique where a function calls itself to solve smaller sub-problems.', vi: 'Kỹ thuật lập trình trong đó hàm tự gọi chính nó để giải quyết bài toán nhỏ hơn.' } },
        { term: { en: 'Object-Oriented Programming (OOP)', vi: 'Lập trình hướng đối tượng' }, definition: { en: 'A programming paradigm based on the concept of "objects" containing data and methods.', vi: 'Mô hình lập trình dựa trên khái niệm "đối tượng" chứa dữ liệu và phương thức.' } }
      ]
    }
  ]
};

export default function Flashcards() {
  const { language } = useLanguage();
  const { profile } = useAuth();
  const navigate = useNavigate();
  const isVi = language === 'vi';

  const studentGrade = Number(profile?.grade) || 6;
  const gradeCategory = studentGrade <= 5 ? 'elementary' : studentGrade <= 8 ? 'middle' : 'high';
  const gradeDecks = ALL_GRADE_DECKS[gradeCategory] || ALL_GRADE_DECKS.middle;

  const [selectedDeck, setSelectedDeck] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);

  if (!selectedDeck) {
    return (
      <div className="max-w-4xl mx-auto py-8 space-y-8">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-8 rounded-[2rem] shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full w-fit text-xs font-black uppercase tracking-wider mb-3">
              <GraduationCap className="w-4 h-4" />
              {isVi ? `Khối lớp ${studentGrade}` : `Grade ${studentGrade} Level`}
            </div>
            <h1 className="text-3xl font-black mb-2 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              {isVi ? 'Thẻ ghi nhớ Từ vựng (Flashcards)' : 'Interactive Flashcard Decks'}
            </h1>
            <p className="text-teal-100 font-medium max-w-xl">
              {isVi 
                ? `Được điều chỉnh riêng cho học sinh Khối lớp ${studentGrade}. Ôn tập thuật ngữ và định nghĩa trước khi làm bài kiểm tra.`
                : `Tailored specifically for Grade ${studentGrade} students. Review core terminology before formal quizzes.`}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gradeDecks.map(deck => (
            <div 
              key={deck.id}
              onClick={() => {
                setSelectedDeck(deck);
                setCurrentIndex(0);
                setIsFlipped(false);
                setMasteredCount(0);
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] border-2 border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 bg-teal-50 dark:bg-teal-900/40 text-teal-600 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">{isVi ? deck.title.vi : deck.title.en}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{deck.cards.length} {isVi ? 'thuật ngữ' : 'cards'}</p>
              </div>
              <button className="mt-6 w-full py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-sm">
                {isVi ? 'Bắt đầu ôn tập' : 'Start Review'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const currentCard = selectedDeck.cards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < selectedDeck.cards.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setSelectedDeck(null)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-bold hover:text-teal-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>{isVi ? 'Quay lại danh sách' : 'Back to Decks'}</span>
        </button>
        <div className="text-sm font-black text-gray-500 dark:text-gray-400">
          {currentIndex + 1} / {selectedDeck.cards.length}
        </div>
      </div>

      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative h-80 sm:h-96 w-full cursor-pointer perspective-1000 group"
      >
        <div className={`absolute inset-0 w-full h-full rounded-[2.5rem] p-10 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 shadow-xl flex flex-col items-center justify-center text-center transition-all duration-500 transform ${isFlipped ? 'rotate-y-180 opacity-0 pointer-events-none' : 'rotate-y-0 opacity-100'}`}>
          <span className="text-xs font-black uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4 bg-teal-50 dark:bg-teal-950 px-4 py-1.5 rounded-full">
            {isVi ? 'Thuật ngữ' : 'Term'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-6">
            {isVi ? currentCard.term.vi : currentCard.term.en}
          </h2>
          <p className="text-sm text-gray-400 flex items-center gap-1.5 font-bold">
            <RotateCw className="w-4 h-4 animate-spin" /> {isVi ? 'Chạm để lật thẻ xem định nghĩa' : 'Tap to flip for definition'}
          </p>
        </div>

        <div className={`absolute inset-0 w-full h-full rounded-[2.5rem] p-10 bg-teal-600 text-white shadow-xl flex flex-col items-center justify-center text-center transition-all duration-500 transform ${isFlipped ? 'rotate-y-0 opacity-100' : 'rotate-y-180 opacity-0 pointer-events-none'}`}>
          <span className="text-xs font-black uppercase tracking-widest text-teal-200 mb-4 bg-teal-700 px-4 py-1.5 rounded-full">
            {isVi ? 'Định nghĩa' : 'Definition'}
          </span>
          <p className="text-xl sm:text-2xl font-bold leading-relaxed mb-6">
            {isVi ? currentCard.definition.vi : currentCard.definition.en}
          </p>
          <p className="text-xs text-teal-200 font-bold">
            {isVi ? 'Chạm để xem lại thuật ngữ' : 'Tap to flip back'}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold rounded-2xl disabled:opacity-50 hover:bg-gray-50 transition-colors shadow-sm"
        >
          {isVi ? 'Trước' : 'Previous'}
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => {
              setMasteredCount(c => c + 1);
              handleNext();
            }}
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold shadow-md hover:bg-green-600 transition-colors"
          >
            <CheckCircle className="w-5 h-5" />
            <span>{isVi ? 'Đã hiểu' : 'Got it!'}</span>
          </button>
        </div>

        <button
          onClick={handleNext}
          className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-colors shadow-sm"
        >
          {isVi ? 'Tiếp' : 'Next'}
        </button>
      </div>
    </div>
  );
}
