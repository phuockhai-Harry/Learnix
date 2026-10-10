import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { Link } from 'react-router-dom';
import { 
  FileText, Download, ShieldCheck, BookOpenCheck, Flame, 
  Award, CheckCircle2, MessageCircle, BarChart3, 
  ArrowLeft, Loader2, Sparkles, AlertCircle, Cloud, Target
} from 'lucide-react';
import jsPDF from 'jspdf';
import { setupPdfUnicode, removeVietnameseTones } from '../lib/pdfUnicode';
import { calculateStreak } from '../lib/streak';
import { getLessons } from '../data/lessons';
import { 
  subscribeStudentProgress, 
  subscribePersonalizedLearningPath, 
  LessonProgress, 
  PersonalizedLearningPath 
} from '../services/progressSyncService';

export default function ReportsPage() {
  const { user, profile } = useAuth();
  const { t, language } = useLanguage();
  const isVi = language === 'vi';

  const [submissions, setSubmissions] = useState<any[]>([]);
  const [progressList, setProgressList] = useState<LessonProgress[]>([]);
  const [learningPath, setLearningPath] = useState<PersonalizedLearningPath | null>(null);
  const [loading, setLoading] = useState(true);
  const [exportingPdf, setExportingPdf] = useState(false);
  const [filterScore, setFilterScore] = useState<'all' | 'high' | 'needs_review'>('all');

  const streakInfo = calculateStreak(profile, submissions);
  const accurateStreak = streakInfo.streak;

  useEffect(() => {
    if (!user) return;

    // Real-time progress subscription
    const unsubProgress = subscribeStudentProgress(user.uid, (list) => {
      setProgressList(list);
    });

    // Real-time learning path subscription
    const unsubPath = subscribePersonalizedLearningPath(user.uid, (path) => {
      setLearningPath(path);
    });

    // Real-time submissions query
    const subQ = query(collection(db, 'submissions'), where('studentId', '==', user.uid));
    const unsubSubs = onSnapshot(subQ, (subSnap: any) => {
      const subData = subSnap.docs.map((d: any) => ({ id: d.id, ...d.data() }));

      const localizedLessons = getLessons(language);
      const mapped = subData.map((sub: any) => {
        let title = 'Unknown Quiz';
        if (localizedLessons[sub.quizId as keyof typeof localizedLessons]) {
          title = localizedLessons[sub.quizId as keyof typeof localizedLessons].title;
        } else if (sub.quizTitle) {
          title = sub.quizTitle;
        }
        return {
          ...sub,
          quizTitle: title
        };
      }).sort((a: any, b: any) => {
        const tA = a.completedAt?.toMillis ? a.completedAt.toMillis() : 0;
        const tB = b.completedAt?.toMillis ? b.completedAt.toMillis() : 0;
        return tB - tA;
      });

      setSubmissions(mapped);
      setLoading(false);
    }, (err: any) => {
      console.error('Error fetching submissions for report:', err);
      setLoading(false);
    });

    return () => {
      unsubProgress();
      unsubPath();
      unsubSubs();
    };
  }, [user, language]);

  const exportStudentPDF = async () => {
    if (exportingPdf) return;
    setExportingPdf(true);
    try {
      const docPdf = new jsPDF();
      const hasUnicode = await setupPdfUnicode(docPdf);

      const fontName = hasUnicode ? 'Roboto' : 'helvetica';
      const formatTxt = (txt: string) => (hasUnicode ? txt : removeVietnameseTones(txt));

      // Header Title
      docPdf.setFont(fontName, 'bold');
      docPdf.setFontSize(18);
      docPdf.setTextColor(13, 148, 136);
      docPdf.text(
        formatTxt(isVi ? 'Báo cáo Tiến độ Học tập' : 'Student Academic Progress Report'),
        14,
        20
      );

      // Subtitle with Student details
      docPdf.setFont(fontName, 'normal');
      docPdf.setFontSize(10);
      docPdf.setTextColor(100, 100, 100);
      const studentDisplayName = profile?.realName || profile?.codeName || (isVi ? 'Học sinh' : 'Student');
      const codeName = profile?.codeName && profile?.codeName !== studentDisplayName ? ` (${profile.codeName})` : '';
      const gradeText = isVi ? `Lớp ${profile?.grade || 6}` : `Grade ${profile?.grade || 6}`;
      const dateText = isVi ? `Ngày tạo: ${new Date().toLocaleDateString('vi-VN')}` : `Generated: ${new Date().toLocaleDateString()}`;
      docPdf.text(
        formatTxt(`${dateText} | ${isVi ? 'Học sinh' : 'Student'}: ${studentDisplayName}${codeName} - ${gradeText}`),
        14,
        28
      );

      // Section 1: Academic Metrics
      docPdf.setFont(fontName, 'bold');
      docPdf.setFontSize(13);
      docPdf.setTextColor(30, 41, 59);
      docPdf.text(
        formatTxt(isVi ? '1. Thống kê số liệu học tập' : '1. Academic Metrics'),
        14,
        40
      );

      docPdf.setFont(fontName, 'normal');
      docPdf.setFontSize(10);
      docPdf.text(formatTxt(`- ${isVi ? 'Tổng điểm XP đạt được' : 'Total XP Earned'}: ${profile?.xp || 0} pts`), 18, 48);
      docPdf.text(formatTxt(`- ${isVi ? 'Chuỗi học tập liên tục' : 'Current Study Streak'}: ${accurateStreak} ${isVi ? 'ngày' : 'days'}`), 18, 55);
      docPdf.text(formatTxt(`- ${isVi ? 'Huy hiệu đã mở khóa' : 'Badges Unlocked'}: ${(profile?.earnedBadges || []).length}`), 18, 62);
      docPdf.text(formatTxt(`- ${isVi ? 'Tổng số bài kiểm tra đã hoàn thành' : 'Total Quizzes Completed'}: ${submissions.length}`), 18, 69);
      if (learningPath) {
        docPdf.text(formatTxt(`- ${isVi ? 'Tiến độ lộ trình học tập cá nhân hóa' : 'Personalized Learning Path Progress'}: ${learningPath.overallProgress}% (${learningPath.targetGoal})`), 18, 76);
      }

      // Section 2: Submissions & Teacher feedback
      docPdf.setFont(fontName, 'bold');
      docPdf.setFontSize(13);
      docPdf.text(
        formatTxt(isVi ? '2. Lịch sử bài nộp & Nhận xét giáo viên' : '2. Quiz Submissions & Teacher Feedback'),
        14,
        86
      );

      let y = 90;
      docPdf.setFont(fontName, 'normal');
      if (submissions.length === 0) {
        docPdf.setFontSize(10);
        docPdf.setTextColor(100, 100, 100);
        docPdf.text(formatTxt(isVi ? 'Chưa có bài kiểm tra nào được hoàn thành.' : 'No completed quizzes yet.'), 18, y);
        y += 10;
      } else {
        submissions.forEach((sub, i) => {
          if (y > 265) {
            docPdf.addPage();
            if (hasUnicode) docPdf.setFont('Roboto', 'normal');
            y = 20;
          }
          docPdf.setFontSize(10);
          docPdf.setTextColor(30, 41, 59);
          docPdf.text(formatTxt(`${i + 1}. ${sub.quizTitle} - ${isVi ? 'Điểm' : 'Score'}: ${sub.score}/100`), 18, y);
          if (sub.teacherComment) {
            y += 6;
            docPdf.setTextColor(13, 148, 136);
            docPdf.text(formatTxt(`   ${isVi ? 'Nhận xét giáo viên' : 'Teacher Feedback'}: "${sub.teacherComment}"`), 18, y);
            docPdf.setTextColor(30, 41, 59);
          }
          y += 10;
        });
      }

      const fileName = `learnix_progress_report_${profile?.codeName || profile?.realName || 'student'}.pdf`;
      docPdf.save(fileName);
    } catch (err) {
      console.error('Error exporting student PDF report:', err);
    } finally {
      setExportingPdf(false);
    }
  };

  const avgScore = submissions.length > 0 
    ? Math.round(submissions.reduce((acc, s) => acc + (s.score || 0), 0) / submissions.length)
    : 0;

  const filteredSubs = submissions.filter(sub => {
    if (filterScore === 'high') return sub.score >= 80;
    if (filterScore === 'needs_review') return sub.score < 80;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16">
      {/* Top Breadcrumb & Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Link 
            to="/dashboard" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isVi ? 'Quay lại Bảng điều khiển' : 'Back to Dashboard'}</span>
          </Link>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
            <FileText className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            <span>{isVi ? 'Báo cáo Tiến độ Học tập' : 'Student Academic Progress Report'}</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {isVi 
              ? 'Tổng hợp thành tích học tập, nhận xét của giáo viên và đánh giá tiến độ môn học' 
              : 'Complete academic records, teacher evaluations, and curriculum progress tracking'}
          </p>
        </div>

        <button
          onClick={exportStudentPDF}
          disabled={exportingPdf}
          className="flex items-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-2xl font-black shadow-md transition-all hover:scale-105 active:scale-95 disabled:opacity-70 text-sm shrink-0"
        >
          {exportingPdf ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          <span>{exportingPdf ? (isVi ? 'Đang xuất PDF...' : 'Generating PDF...') : (isVi ? 'Tải Báo cáo PDF' : 'Download PDF Report')}</span>
        </button>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{isVi ? 'Tổng điểm XP' : 'Total XP'}</p>
          <p className="text-2xl font-black text-teal-600 dark:text-teal-400 mt-1">{profile?.xp || 0} pts</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{isVi ? 'Chuỗi học tập' : 'Study Streak'}</p>
          <p className="text-2xl font-black text-orange-500 mt-1">{accurateStreak} {isVi ? 'ngày' : 'days'}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{isVi ? 'Điểm trung bình' : 'Avg Score'}</p>
          <p className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">{avgScore}%</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xs">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{isVi ? 'Bài đã hoàn thành' : 'Completed Quizzes'}</p>
          <p className="text-2xl font-black text-purple-600 dark:text-purple-400 mt-1">{submissions.length}</p>
        </div>
      </div>

      {/* Personalized Learning Path & Cloud Synchronization Status */}
      <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white p-6 sm:p-8 rounded-[2rem] shadow-lg border border-indigo-700/60 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-700/60 text-amber-300 rounded-2xl shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-400/40 text-[11px] font-black uppercase tracking-wider text-emerald-300 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <Cloud className="w-3.5 h-3.5" />
                <span>{isVi ? 'Đồng bộ hóa đám mây an toàn' : 'Cloud Synchronized'}</span>
              </div>
              <h2 className="text-xl font-black text-white">
                {learningPath?.targetGoal || (isVi ? 'Lộ trình học tập cá nhân hóa' : 'Personalized Learning Path')}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 shrink-0">
            <div>
              <p className="text-[11px] text-indigo-200 font-bold">{isVi ? 'Tiến độ lộ trình' : 'Path Progress'}</p>
              <p className="text-xl font-black text-amber-300">{learningPath?.overallProgress || 0}%</p>
            </div>
            <div className="w-10 h-10 rounded-full border-4 border-amber-400/30 border-t-amber-400 flex items-center justify-center font-black text-xs">
              {learningPath?.overallProgress || 0}%
            </div>
          </div>
        </div>

        {/* Learning Path Milestones Overview */}
        {learningPath && learningPath.milestones && learningPath.milestones.length > 0 && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-black text-indigo-200 uppercase tracking-wider">
              <span>{isVi ? 'Chặng mục tiêu đã hoàn thành' : 'Completed Milestones'}</span>
              <span>
                {learningPath.milestones.filter(m => m.completed).length} / {learningPath.milestones.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {learningPath.milestones.map((ms, idx) => (
                <div 
                  key={ms.id || idx}
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                    ms.completed 
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100'
                      : 'bg-white/5 border-white/10 text-white/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                      ms.completed ? 'bg-emerald-500 text-white' : 'bg-white/10 text-indigo-200'
                    }`}>
                      {ms.completed ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>
                    <span className="text-xs font-bold truncate">{ms.title}</span>
                  </div>
                  <span className={`text-[11px] font-bold shrink-0 ${ms.completed ? 'text-emerald-300' : 'text-indigo-300'}`}>
                    {ms.completed ? (isVi ? 'Đã đạt' : 'Mastered') : `+${ms.xpReward} XP`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


      {/* Submissions & Teacher Feedback List */}
      <div className="bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2.5">
              <BarChart3 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <span>{isVi ? 'Lịch sử Bài kiểm tra & Nhận xét Chi tiết' : 'Detailed Quiz History & Teacher Feedback'}</span>
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {isVi ? `Hiển thị ${filteredSubs.length} bài nộp` : `Showing ${filteredSubs.length} submissions`}
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-900 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setFilterScore('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterScore === 'all' 
                  ? 'bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-xs' 
                  : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {isVi ? 'Tất cả' : 'All'}
            </button>
            <button
              onClick={() => setFilterScore('high')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterScore === 'high' 
                  ? 'bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-xs' 
                  : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {isVi ? 'Điểm giỏi (≥80)' : 'High (≥80)'}
            </button>
            <button
              onClick={() => setFilterScore('needs_review')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterScore === 'needs_review' 
                  ? 'bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 shadow-xs' 
                  : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {isVi ? 'Cần ôn lại (<80)' : 'Needs Review (<80)'}
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
          </div>
        ) : filteredSubs.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-900/40 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
            <AlertCircle className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
              {isVi ? 'Chưa có bài kiểm tra nào trong danh mục này' : 'No quiz submissions found in this category'}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-gray-700/60">
            {filteredSubs.map((sub, idx) => (
              <div key={sub.id || idx} className="py-4.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-black text-gray-900 dark:text-white text-base">
                      {sub.quizTitle}
                    </span>
                    <span className="text-xs text-gray-400">
                      {sub.completedAt?.toMillis ? new Date(sub.completedAt.toMillis()).toLocaleString() : ''}
                    </span>
                  </div>

                  {sub.teacherComment ? (
                    <div className="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-100 dark:border-teal-900 text-xs text-teal-900 dark:text-teal-200">
                      <span className="font-black block uppercase tracking-wider text-[10px] text-teal-600 dark:text-teal-400 mb-0.5">
                        {isVi ? 'Nhận xét từ giáo viên:' : 'Teacher Feedback:'}
                      </span>
                      "{sub.teacherComment}"
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 italic">
                      {isVi ? 'Chưa có nhận xét thêm từ giáo viên' : 'No qualitative comments recorded'}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <div className={`px-4 py-2 rounded-xl font-black text-base ${
                    sub.score >= 80 
                      ? 'bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800' 
                      : sub.score >= 50 
                      ? 'bg-amber-50 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                      : 'bg-red-50 dark:bg-red-900/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                  }`}>
                    {sub.score}/100
                  </div>
                  {sub.quizId && (
                    <Link
                      to={`/quiz/${sub.quizId}`}
                      className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline px-2.5 py-1.5 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-950/50"
                    >
                      {isVi ? 'Làm lại' : 'Retake'}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
