import React, { useState } from 'react';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Trash2, Save } from 'lucide-react';

export default function QuizCreator() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], answerIndex: 0 }]);
  const [saving, setSaving] = useState(false);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], answerIndex: 0 }]);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const updateQuestion = (index: number, field: string, value: any) => {
    const updated = [...questions];
    updated[index] = { ...updated[index], [field]: value };
    setQuestions(updated);
  };

  const updateOption = (qIndex: number, oIndex: number, value: string) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    try {
      const newQuizRef = doc(collection(db, 'quizzes'));
      
      const randomSeed = Math.floor(Math.random() * 1000000);
      const encodedPrompt = encodeURIComponent(`3d render of education learning path colorful modern bright background for quiz ${title}`);
      const bannerUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=400&nologo=true&seed=${randomSeed}`;

      await setDoc(newQuizRef, {
        title,
        creatorId: user.uid,
        isPublic,
        questionsData: JSON.stringify(questions),
        bannerUrl,
        createdAt: serverTimestamp(),
      });
      navigate('/');
    } catch (err) {
      console.error(err);
      alert(t('creator.fail'));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('creator.title')}</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          Thiết lập câu hỏi kiểm tra đánh giá hoặc áp dụng quy chuẩn tự động Bộ Giáo dục & Đào tạo cho môn Lịch sử 6.
        </p>

        {/* Quy chuẩn tạo đề kiểm tra Lịch sử 6 Bộ GD&ĐT */}
        <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-200 dark:border-amber-800 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-base">🏛️</span>
            <span className="text-xs font-black uppercase tracking-wider text-amber-900 dark:text-amber-200">
              Quy tắc tạo đề Lịch sử 6 chuẩn Bộ GD&ĐT (Tự động tải mẫu):
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => {
                setTitle('Lịch sử 6 - Đề Kiểm Tra Thường Xuyên (15 phút)');
                const qs: any[] = [];
                for (let i = 1; i <= 15; i++) {
                  qs.push({
                    question: `[Câu ${i} - MCQ] Kiến thức Lịch sử 6 bài học trọng tâm số ${i}...`,
                    options: ['Phương án đúng A', 'Phương án gây nhiễu B', 'Phương án gây nhiễu C', 'Phương án gây nhiễu D'],
                    answerIndex: 0
                  });
                }
                qs.push({
                  question: `[Câu 16 - Đúng/Sai] Nhận định về nguồn gốc loài người và tư liệu hiện vật là đúng hay sai?`,
                  options: ['Đúng (True)', 'Sai (False)'],
                  answerIndex: 0
                });
                qs.push({
                  question: `[Câu 17 - Đúng/Sai] Phát hiện rìu tay sơ kỳ đồ đá cũ ở An Khê chứng minh dấu tích người tối cổ tại Việt Nam?`,
                  options: ['Đúng (True)', 'Sai (False)'],
                  answerIndex: 0
                });
                for (let i = 1; i <= 3; i++) {
                  qs.push({
                    question: `[Câu ${17 + i} - Tự luận kéo thả] Kéo thả tên di tích/khái niệm vào ô đúng tương ứng (Tự luận tương tác số ${i}):`,
                    options: ['Ghép nối chính xác vào ô đúng A', 'Ghép nối vào ô B', 'Ghép nối vào ô C', 'Ghép nối vào ô D'],
                    answerIndex: 0
                  });
                }
                setQuestions(qs);
              }}
              className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-amber-300 dark:border-amber-700 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-left text-xs font-bold text-amber-900 dark:text-amber-200 transition-all cursor-pointer shadow-xs"
            >
              <div className="font-black text-amber-700 dark:text-amber-300">📝 Thường xuyên (20 câu)</div>
              <div className="text-[10px] text-gray-500 mt-0.5">15 MCQ + 2 Đúng/Sai + 3 Kéo thả</div>
            </button>

            <button
              type="button"
              onClick={() => {
                setTitle('Lịch sử 6 - Đề Kiểm Tra Giữa Học Kỳ (45 phút)');
                const qs: any[] = [];
                for (let i = 1; i <= 20; i++) {
                  qs.push({
                    question: `[Câu ${i} - MCQ] Đánh giá kiến thức Lịch sử 6 Giữa kỳ câu số ${i}...`,
                    options: ['Phương án đúng', 'Phương án gây nhiễu 1', 'Phương án gây nhiễu 2', 'Phương án gây nhiễu 3'],
                    answerIndex: 0
                  });
                }
                for (let i = 1; i <= 5; i++) {
                  qs.push({
                    question: `[Câu ${20 + i} - Đúng/Sai] Đánh giá nhận định lịch sử cổ đại số ${i}: Đúng hay Sai?`,
                    options: ['Đúng (True)', 'Sai (False)'],
                    answerIndex: 0
                  });
                }
                for (let i = 1; i <= 5; i++) {
                  qs.push({
                    question: `[Câu ${25 + i} - Tự luận kéo thả] Kéo thả các dữ kiện lịch sử văn minh cổ đại vào niên biểu đúng (Tự luận ${i}):`,
                    options: ['Khớp đúng dữ kiện niên biểu A', 'Khớp dữ kiện B', 'Khớp dữ kiện C', 'Khớp dữ kiện D'],
                    answerIndex: 0
                  });
                }
                setQuestions(qs);
              }}
              className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-amber-300 dark:border-amber-700 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-left text-xs font-bold text-amber-900 dark:text-amber-200 transition-all cursor-pointer shadow-xs"
            >
              <div className="font-black text-indigo-700 dark:text-indigo-300">🎯 Giữa kỳ (30 câu)</div>
              <div className="text-[10px] text-gray-500 mt-0.5">20 MCQ + 5 Đúng/Sai + 5 Kéo thả</div>
            </button>

            <button
              type="button"
              onClick={() => {
                setTitle('Lịch sử 6 - Đề Kiểm Tra Cuối Học Kỳ (60 phút)');
                const qs: any[] = [];
                for (let i = 1; i <= 25; i++) {
                  qs.push({
                    question: `[Câu ${i} - MCQ] Kiến thức tổng hợp Lịch sử 6 Cuối kỳ câu số ${i}...`,
                    options: ['Phương án chính xác', 'Phương án gây nhiễu 1', 'Phương án gây nhiễu 2', 'Phương án gây nhiễu 3'],
                    answerIndex: 0
                  });
                }
                for (let i = 1; i <= 10; i++) {
                  qs.push({
                    question: `[Câu ${25 + i} - Đúng/Sai] Đánh giá nhận định lịch sử tổng kết số ${i}: Đúng hay Sai?`,
                    options: ['Đúng (True)', 'Sai (False)'],
                    answerIndex: 0
                  });
                }
                for (let i = 1; i <= 7; i++) {
                  qs.push({
                    question: `[Câu ${35 + i} - Tự luận kéo thả] Kéo thả thông tin các triều đại và thành tựu văn minh vào bảng tổng kết (Tự luận ${i}):`,
                    options: ['Ghép nối bảng tổng kết chính xác A', 'Ghép nối B', 'Ghép nối C', 'Ghép nối D'],
                    answerIndex: 0
                  });
                }
                setQuestions(qs);
              }}
              className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-amber-300 dark:border-amber-700 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-left text-xs font-bold text-amber-900 dark:text-amber-200 transition-all cursor-pointer shadow-xs"
            >
              <div className="font-black text-amber-700 dark:text-amber-300">🏆 Cuối kỳ (Đúng 42 câu)</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Đúng 25 MCQ + 10 Đúng/Sai + 7 Kéo thả</div>
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('creator.quiz_title')}</label>
            <input
              type="text"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          
          <div className="flex items-center">
            <input
              id="isPublic"
              type="checkbox"
              checked={isPublic}
              onChange={e => setIsPublic(e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor="isPublic" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
              {t('creator.make_public')}
            </label>
          </div>

          <div className="space-y-8">
            {questions.map((q, qIndex) => (
              <div key={qIndex} className="p-6 bg-gray-50 dark:bg-gray-750 rounded-xl border border-gray-200 dark:border-gray-700 relative">
                {questions.length > 1 && (
                  <button type="button" onClick={() => removeQuestion(qIndex)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('creator.question')} {qIndex + 1}</label>
                  <input
                    type="text"
                    required
                    value={q.question}
                    onChange={e => updateQuestion(qIndex, 'question', e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {q.options.map((opt, oIndex) => (
                    <div key={oIndex} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`answer-${qIndex}`}
                        checked={q.answerIndex === oIndex}
                        onChange={() => updateQuestion(qIndex, 'answerIndex', oIndex)}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <input
                        type="text"
                        required
                        placeholder={`${t('creator.option')} ${oIndex + 1}`}
                        value={opt}
                        onChange={e => updateOption(qIndex, oIndex, e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={addQuestion}
              className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-medium"
            >
              <PlusCircle className="w-5 h-5" />
              <span>{t('creator.add_question')}</span>
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center space-x-2 bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50"
            >
              <Save className="w-5 h-5" />
              <span>{saving ? t('creator.saving') : t('creator.save_quiz')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
