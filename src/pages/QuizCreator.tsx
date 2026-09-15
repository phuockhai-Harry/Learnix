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
      await setDoc(newQuizRef, {
        title,
        creatorId: user.uid,
        isPublic,
        questionsData: JSON.stringify(questions),
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('creator.title')}</h1>
        
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
