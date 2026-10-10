import React, { useState, useEffect } from 'react';
import { Sparkles, Brain, Loader2, TrendingUp, BookOpen, Send } from 'lucide-react';
import { useLanguage } from '../i18n';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import MathMarkdown from './MathMarkdown';

interface AIStudyAssistantProps {
  gradeLevel: number | string;
  activeTopics: string[];
  recentScores: any[];
}

export function AIStudyAssistant({ gradeLevel, activeTopics, recentScores }: AIStudyAssistantProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>(activeTopics[0] || 'Mathematics & Algebra');
  const [customInput, setCustomInput] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { t } = useLanguage();

  const fetchSummaryForTopic = async (topicToFetch: string) => {
    if (!topicToFetch) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/study-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gradeLevel,
          topics: [topicToFetch]
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setSummary(data.summary);
      } else {
        setError(data.error || 'Failed to generate summary.');
      }
    } catch (err) {
      setError('Could not connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  // Sync selectedTopic if activeTopics changes and we haven't selected one
  useEffect(() => {
    if (activeTopics.length > 0 && !activeTopics.includes(selectedTopic) && !customInput) {
      setSelectedTopic(activeTopics[0]);
    }
  }, [activeTopics]);

  useEffect(() => {
    // Automatically fetch for the selected topic on initial load
    if (!summary && selectedTopic && !loading && !error) {
      fetchSummaryForTopic(selectedTopic);
    }
  }, [selectedTopic]);

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    fetchSummaryForTopic(topic);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const topic = customInput.trim();
    setSelectedTopic(topic);
    fetchSummaryForTopic(topic);
  };

  if (activeTopics.length === 0 && (!recentScores || recentScores.length === 0)) {
    return null;
  }

  const chartData = (recentScores || []).map((sub, i) => ({
    name: sub.quizTitle || `Quiz ${i+1}`,
    score: sub.score || 0
  }));

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-[2rem] p-6 sm:p-8 border-2 border-indigo-100 dark:border-indigo-800/30 shadow-sm relative overflow-hidden">
      {/* Decorative background icon */}
      <Brain className="absolute -right-8 -bottom-8 w-48 h-48 text-indigo-500/5 dark:text-indigo-400/5 rotate-12" />
      
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-black text-indigo-900 dark:text-indigo-100 flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-6 h-6" />
            </div>
            {t('student.ai_study_assistant')}
          </h2>
          <p className="text-xs text-indigo-600 dark:text-indigo-300 font-bold mt-1">
            {t('student.select_topic')}
          </p>
        </div>
        
        <button 
          onClick={() => fetchSummaryForTopic(selectedTopic)}
          disabled={loading}
          className="text-sm font-bold bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-700 px-4 py-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm self-start sm:self-auto"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4" />
          )}
          {t('student.regenerate')}
        </button>
      </div>

      {/* Topic selection chips & custom input */}
      <div className="relative z-10 space-y-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          {activeTopics.map((topic, i) => (
            <button
              key={i}
              onClick={() => handleSelectTopic(topic)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm ${
                selectedTopic === topic
                  ? 'bg-indigo-600 text-white shadow-indigo-200 dark:shadow-none scale-105'
                  : 'bg-white dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/60 hover:bg-indigo-50 dark:hover:bg-gray-700'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{topic}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleCustomSubmit} className="flex gap-2">
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder={t('student.study_prompt_placeholder')}
            className="flex-1 text-xs px-3.5 py-2 rounded-xl bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 text-gray-800 dark:text-gray-100 placeholder-indigo-300 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={!customInput.trim() || loading}
            className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black disabled:opacity-50 transition-colors flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{t('student.get_study_guide')}</span>
          </button>
        </form>
      </div>

      {/* Study Guide Content Card */}
      <div className="relative z-10 bg-white/70 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/60 dark:border-gray-700/50 min-h-[160px]">
        {loading && !summary ? (
          <div className="flex flex-col items-center justify-center h-32 text-indigo-600/70 dark:text-indigo-400/70 space-y-4">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p className="font-medium animate-pulse">{t('student.generating_summary')}</p>
          </div>
        ) : error ? (
          <div className="text-red-500 font-medium p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
            {error}
          </div>
        ) : (
          <div className="prose prose-indigo dark:prose-invert max-w-none prose-headings:font-black prose-p:font-medium prose-p:leading-relaxed prose-a:text-indigo-600">
            <MathMarkdown content={summary} />
          </div>
        )}
      </div>

      {chartData.length > 0 && (
        <div className="relative z-10 mt-8 border-t border-indigo-200/50 dark:border-indigo-800/50 pt-8">
          <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-100 flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-indigo-500" />
            {t('student.mastery_progress')}
          </h3>
          <div className="h-56 w-full bg-white/50 dark:bg-gray-900/30 rounded-2xl p-4 border border-indigo-100/50 dark:border-indigo-800/30">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <YAxis stroke="#818cf8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: '900', color: '#1f2937', marginBottom: '4px' }}
                  itemStyle={{ fontWeight: '700', color: '#6366f1' }}
                />
                <Area type="monotone" dataKey="score" name={t('student.score')} stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
