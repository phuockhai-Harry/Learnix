import React from 'react';
import { useLanguage } from '../i18n';
import { Compass, Book, Target, ChevronRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const paths = [
  {
    id: 'math-foundations',
    title: 'Mathematical Foundations',
    description: 'Master the basics of algebra, geometry, and logic.',
    progress: 35,
    modules: 12,
    icon: <Book className="w-6 h-6 text-teal-500" />,
    color: 'bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-800',
  },
  {
    id: 'computer-science',
    title: 'Computer Science Core',
    description: 'Learn algorithms, data structures, and computational thinking.',
    progress: 10,
    modules: 18,
    icon: <Target className="w-6 h-6 text-purple-500" />,
    color: 'bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800',
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis with Python',
    description: 'Explore statistics, probability, and machine learning basics.',
    progress: 0,
    modules: 8,
    icon: <Compass className="w-6 h-6 text-orange-500" />,
    color: 'bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800',
  }
];

export default function Explore() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-[2rem] shadow-sm border-2 border-gray-100 dark:border-gray-700 text-center sm:text-left">
        <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 mb-3">{t('explore.title')}</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">{t('explore.subtitle')}</p>
      </div>

      <div className="space-y-6 mt-10">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl text-indigo-600"><Compass className="w-6 h-6" /></div>
          {t('explore.paths')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div key={path.id} className={`p-6 rounded-[2rem] border-2 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:-translate-y-1 ${path.color}`}>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white">
                  {path.icon}
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  {path.modules} {t('explore.modules')}
                </span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight">{path.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-8 h-10 line-clamp-2">{path.description}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-black text-gray-700 dark:text-gray-200">
                  <span className="uppercase tracking-wider">{t('explore.progress')}</span>
                  <span>{path.progress}%</span>
                </div>
                <div className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full h-4 p-0.5">
                  <div className="bg-gray-900 dark:bg-white h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${path.progress}%` }}></div>
                </div>
              </div>
              
              <button 
                onClick={() => navigate(`/quiz/${path.id}`)}
                className="mt-8 w-full flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3.5 rounded-2xl font-black hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border-b-4 border-gray-200 dark:border-gray-900 active:border-b-0 active:translate-y-1 shadow-sm"
              >
                <span>{path.progress > 0 ? t('explore.continue') : t('explore.start')}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-6 mt-16">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
          <div className="p-2 bg-pink-100 dark:bg-pink-900/50 rounded-xl text-pink-600"><Target className="w-6 h-6" /></div>
          {t('explore.recommended')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div 
            onClick={() => navigate('/quiz/scientific-notation')}
            className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-[2rem] border-b-[6px] border-teal-800 text-white shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2 drop-shadow-sm">Scientific Notation</h3>
              <p className="text-teal-50 mb-6 font-medium text-lg">Master large numbers and exponents.</p>
              <div className="flex items-center space-x-2 font-black text-sm bg-white text-teal-800 w-fit px-6 py-3 rounded-2xl shadow-sm border-b-4 border-gray-200 group-hover:bg-gray-50 transition-colors">
                <Play className="w-5 h-5 fill-current" />
                <span>{t('explore.start_lesson')}</span>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white opacity-10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
          </div>
          
          <div 
            onClick={() => navigate('/quiz/logic')}
            className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-[2rem] border-b-[6px] border-indigo-800 text-white shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2 drop-shadow-sm">Introduction to Logic</h3>
              <p className="text-purple-50 mb-6 font-medium text-lg">Truth tables, boolean logic, and reasoning.</p>
              <div className="flex items-center space-x-2 font-black text-sm bg-white text-indigo-800 w-fit px-6 py-3 rounded-2xl shadow-sm border-b-4 border-gray-200 group-hover:bg-gray-50 transition-colors">
                <Play className="w-5 h-5 fill-current" />
                <span>{t('explore.start_lesson')}</span>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white opacity-10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
