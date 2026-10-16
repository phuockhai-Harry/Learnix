import React, { useEffect, useState, useMemo } from 'react';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';
import { auth } from '../firebase';
import { 
  Compass, 
  Target, 
  ChevronRight, 
  Calculator, 
  Code, 
  FlaskConical, 
  Globe, 
  BookOpen, 
  PenTool, 
  Lightbulb, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Award,
  FileText,
  GraduationCap,
  ArrowDownToLine,
  Eye,
  RotateCcw,
  BookMarked,
  Atom,
  Dna,
  Landmark,
  Cpu,
  HeartHandshake,
  Info,
  Calendar,
  Layers,
  Check,
  ChevronDown
} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { QuizDownloadButton } from '../components/QuizDownloadButton';
import { QuizA4PdfButton } from '../components/QuizA4PdfButton';
import { 
  subscribeStudentProgress, 
  subscribePersonalizedLearningPath, 
  initializeStudentLearningPath,
  updateLearningPathSettings,
  LessonProgress, 
  PersonalizedLearningPath 
} from '../services/progressSyncService';
import { 
  GRADE_LEVELS, 
  SEMESTERS, 
  getCurriculumQuizzes, 
  getCurriculumPDFs, 
  getSubjectsForGrade,
  getQuizTestType,
  isQuizForSubject,
  isPDFForSubject,
  CurriculumQuiz, 
  CurriculumPDF 
} from '../data/curriculumData';
import { PDFLearningViewer } from '../components/PDFLearningViewer';

// Helper to render grade-appropriate icons
const renderSubjectIcon = (iconName: string, className = "w-5 h-5") => {
  switch (iconName) {
    case 'Calculator': return <Calculator className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'FlaskConical': return <FlaskConical className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Code': return <Code className={className} />;
    case 'Atom': return <Atom className={className} />;
    case 'Dna': return <Dna className={className} />;
    case 'Landmark': return <Landmark className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'PenTool': return <PenTool className={className} />;
    case 'HeartHandshake': return <HeartHandshake className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Lightbulb': default: return <Lightbulb className={className} />;
  }
};

export default function Explore() {
  const { t, language } = useLanguage();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const isVi = language === 'vi';
  
  // Selected Grade (1 to 12) & Semester (1 or 2)
  const [selectedGrade, setSelectedGrade] = useState<number>(profile?.grade || 6);
  const [selectedSemester, setSelectedSemester] = useState<1 | 2>(
    searchParams.get('semester') === '2' ? 2 : 1
  );

  // Subject Tab state: 'all' or subject identifier (e.g. 'math', 'literature', 'science', 'english', etc.)
  const initialSubject = searchParams.get('subject') || 'all';
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject);

  // Secondary sub-tab inside a subject: 'all' | 'regular' | 'midterm' | 'final' | 'pdfs'
  const [testSubTab, setTestSubTab] = useState<'all' | 'regular' | 'midterm' | 'final' | 'pdfs'>('all');
  const [showGradeInfo, setShowGradeInfo] = useState<boolean>(false);

  // Synchronize URL search params when subject or semester changes
  const handleSelectSubject = (subjCategory: string) => {
    setSelectedSubject(subjCategory);
    setTestSubTab('all');
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (subjCategory === 'all') {
        next.delete('subject');
      } else {
        next.set('subject', subjCategory);
      }
      return next;
    }, { replace: true });
  };

  const handleSelectSemester = (sem: 1 | 2) => {
    setSelectedSemester(sem);
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set('semester', String(sem));
      return next;
    }, { replace: true });
  };

  // Automatically keep selectedGrade in sync with student's profile grade from Account
  useEffect(() => {
    if (profile?.grade) {
      setSelectedGrade(profile.grade);
    }
  }, [profile?.grade]);

  // Selected PDF viewer modal
  const [activeViewingPDF, setActiveViewingPDF] = useState<CurriculumPDF | null>(null);

  // Real-time Cloud Progress state
  const [progressList, setProgressList] = useState<LessonProgress[]>([]);
  const [learningPath, setLearningPath] = useState<PersonalizedLearningPath | null>(null);
  const [savingSettings, setSavingSettings] = useState(false);

  // Subscribe to real-time Cloud Storage for student progress
  useEffect(() => {
    if (!user?.uid || !auth.currentUser) return;
    let isCancelled = false;

    const unsubProgress = subscribeStudentProgress(user.uid, (list) => {
      if (!isCancelled) setProgressList(list);
    });

    const unsubPath = subscribePersonalizedLearningPath(user.uid, (path) => {
      if (isCancelled) return;
      if (!path) {
        initializeStudentLearningPath(user.uid, selectedGrade, isVi).then(newPath => {
          if (!isCancelled) setLearningPath(newPath);
        });
      } else {
        setLearningPath(path);
      }
    });

    return () => {
      isCancelled = true;
      unsubProgress();
      unsubPath();
    };
  }, [user?.uid, selectedGrade, isVi]);

  // Current grade official specifications & subjects
  const currentGradeInfo = GRADE_LEVELS.find(g => g.grade === selectedGrade) || GRADE_LEVELS[4];
  const gradeSubjects = getSubjectsForGrade(selectedGrade);

  // Retrieve Quizzes & PDFs for current grade and semester
  const semesterQuizzes = useMemo(() => {
    return getCurriculumQuizzes(selectedGrade, selectedSemester);
  }, [selectedGrade, selectedSemester]);

  const semesterPDFs = useMemo(() => {
    return getCurriculumPDFs(selectedGrade, selectedSemester);
  }, [selectedGrade, selectedSemester]);

  // Active subject object if a specific subject is selected
  const activeSubjectObj = useMemo(() => {
    if (selectedSubject === 'all') return null;
    // 1. Match by exact id
    const byId = gradeSubjects.find(s => s.id === selectedSubject);
    if (byId) return byId;

    // 2. Match by exact Vietnamese or English name
    const byName = gradeSubjects.find(s => 
      s.nameVi.toLowerCase() === selectedSubject.toLowerCase() ||
      s.nameEn.toLowerCase() === selectedSubject.toLowerCase()
    );
    if (byName) return byName;

    // 3. Fallback to category only if unique match
    const byCat = gradeSubjects.filter(s => s.category === selectedSubject);
    if (byCat.length === 1) return byCat[0];

    // If multiple share category (e.g. social, tech), match specific keywords
    if (selectedSubject.includes('civic') || selectedSubject.includes('gdcd')) {
      return gradeSubjects.find(s => s.id.includes('civic')) || null;
    }
    if (selectedSubject.includes('hist') || selectedSubject.includes('geo')) {
      return gradeSubjects.find(s => s.id.includes('history')) || null;
    }
    if (selectedSubject.includes('tech') && !selectedSubject.includes('info')) {
      return gradeSubjects.find(s => s.id.includes('technology')) || null;
    }
    if (selectedSubject.includes('info') || selectedSubject.includes('it')) {
      return gradeSubjects.find(s => s.id.includes('informatics')) || null;
    }

    return byCat[0] || null;
  }, [selectedSubject, gradeSubjects]);

  // Filter quizzes by active subject using authoritative subject matching
  const currentSubjectQuizzes = useMemo(() => {
    if (selectedSubject === 'all' || !activeSubjectObj) return semesterQuizzes;
    return semesterQuizzes.filter(q => isQuizForSubject(q, activeSubjectObj));
  }, [semesterQuizzes, selectedSubject, activeSubjectObj]);

  // Filter PDFs by active subject
  const currentSubjectPDFs = useMemo(() => {
    if (selectedSubject === 'all' || !activeSubjectObj) return semesterPDFs;
    return semesterPDFs.filter(p => isPDFForSubject(p, activeSubjectObj));
  }, [semesterPDFs, selectedSubject, activeSubjectObj]);

  // Categorize quizzes into Midterm and Regular assessment
  const midtermQuizzes = useMemo(() => {
    return currentSubjectQuizzes.filter(q => getQuizTestType(q) === 'midterm');
  }, [currentSubjectQuizzes]);

  const regularQuizzes = useMemo(() => {
    return currentSubjectQuizzes.filter(q => getQuizTestType(q) === 'regular');
  }, [currentSubjectQuizzes]);

  const finalQuizzes = useMemo(() => {
    return currentSubjectQuizzes.filter(q => getQuizTestType(q) === 'final');
  }, [currentSubjectQuizzes]);

  // Grade Subjects mapped with live student progress
  const paths = useMemo(() => {
    return gradeSubjects.map((sub) => {
      const topicId = `grade-${selectedGrade}-subject-${sub.id}`;
      const matchingRecords = progressList.filter(p => 
        p.lessonId === topicId || 
        p.subject?.toLowerCase() === sub.nameEn.toLowerCase() ||
        p.subject?.toLowerCase() === sub.nameVi.toLowerCase()
      );

      const isCompleted = matchingRecords.some(r => r.completed);
      let progressPercent = 0;
      if (isCompleted) {
        progressPercent = 100;
      } else if (matchingRecords.length > 0) {
        const avgMastery = Math.round(
          matchingRecords.reduce((sum, r) => sum + (r.mastery || 50), 0) / matchingRecords.length
        );
        progressPercent = Math.min(95, Math.max(25, avgMastery));
      }

      // Count quizzes for this subject in current semester
      const subQuizzes = semesterQuizzes.filter(q => isQuizForSubject(q, sub));
      const subMidterms = subQuizzes.filter(q => getQuizTestType(q) === 'midterm');
      const subRegulars = subQuizzes.filter(q => getQuizTestType(q) === 'regular');

      return {
        id: topicId,
        subjectId: sub.id,
        category: sub.category,
        title: isVi ? sub.nameVi : sub.nameEn,
        description: isVi ? sub.descVi : sub.descEn,
        modules: 4,
        icon: renderSubjectIcon(sub.iconName, 'w-6 h-6'),
        color: sub.color,
        badgeColor: sub.badgeColor,
        subjectKey: sub.nameEn,
        progress: progressPercent,
        isCompleted,
        midtermCount: subMidterms.length,
        regularCount: subRegulars.length
      };
    });
  }, [gradeSubjects, selectedGrade, progressList, isVi, semesterQuizzes]);

  const handlePaceChange = async (newMinutes: number) => {
    if (!user?.uid || !learningPath) return;
    setSavingSettings(true);
    try {
      await updateLearningPathSettings(user.uid, { dailyPaceMinutes: newMinutes });
      setLearningPath(prev => prev ? { ...prev, dailyPaceMinutes: newMinutes } : null);
    } catch (e) {
      console.error(e);
    } finally {
      setSavingSettings(false);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-32 sm:pb-36 animate-fade-in">
      
      {/* Top Banner - Clean, responsive, non-overlapping header */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-7 rounded-[2rem] shadow-xs border-2 border-gray-100 dark:border-gray-700/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-black uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>{isVi ? `${currentGradeInfo.tierVi} • ${currentGradeInfo.nameVi} (${currentGradeInfo.ageRange})` : `${currentGradeInfo.tierEn} • ${currentGradeInfo.nameEn} (${currentGradeInfo.ageRange})`}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight">
              {isVi ? `Chương trình & Đề kiểm tra - ${currentGradeInfo.nameVi}` : `Curriculum & Assessments - ${currentGradeInfo.nameEn}`}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium max-w-3xl leading-relaxed">
              {isVi 
                ? 'Hệ thống đề kiểm tra Giữa kỳ & Đánh giá Thường xuyên (15 phút) chuẩn chương trình GDPT 2018.'
                : 'Standardized Midterm Exams and 15-Minute Continuous Assessments based on K-12 GDPT 2018.'}
            </p>
          </div>

          {/* Quick Collapse Info Button */}
          <button
            onClick={() => setShowGradeInfo(prev => !prev)}
            className="self-start md:self-center px-3.5 py-2 rounded-xl text-xs font-black bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <Info className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{showGradeInfo ? (isVi ? 'Thu gọn chuẩn GDPT' : 'Hide Guidelines') : (isVi ? 'Xem chuẩn GDPT' : 'View Guidelines')}</span>
          </button>
        </div>

        {/* Collapsible Curriculum Guidelines */}
        {showGradeInfo && (
          <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3 animate-fade-in text-xs">
            <div className="p-3.5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/80">
              <span className="font-black uppercase tracking-wider text-teal-900 dark:text-teal-200 block text-[11px] mb-1">
                🎯 {isVi ? 'Mục tiêu & Trọng tâm học tập toàn năm:' : 'Annual Learning Goals:'}
              </span>
              <p className="text-teal-950 dark:text-teal-100 font-medium leading-relaxed">
                {isVi ? currentGradeInfo.coreFocusVi : currentGradeInfo.coreFocusEn}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 2 Semesters Switcher - Clear, modern bar */}
      <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-slate-900 rounded-3xl p-5 sm:p-6 text-white shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-teal-300 text-[11px] font-black uppercase tracking-wider block mb-1">
              {isVi ? 'Phân kỳ năm học' : 'Academic Semesters'}
            </span>
            <h2 className="text-lg sm:text-xl font-black">
              {isVi ? `Năm học 2025 - 2026: ${currentGradeInfo.nameVi}` : `Academic Year 2025 - 2026: ${currentGradeInfo.nameEn}`}
            </h2>
          </div>

          {/* 2 Semesters Toggle Buttons */}
          <div className="flex items-center gap-2 p-1 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 shrink-0">
            {SEMESTERS.map(sem => {
              const isActive = selectedSemester === sem.semester;
              return (
                <button
                  key={sem.semester}
                  onClick={() => handleSelectSemester(sem.semester as 1 | 2)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-gray-900 shadow-md scale-102'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{isVi ? sem.nameVi : sem.nameEn}</span>
                  <span className="text-[10px] opacity-75 hidden sm:inline">({isVi ? sem.periodVi : sem.periodEn})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Semester Summary */}
        <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-teal-100 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>
              {selectedSemester === 1 
                ? (isVi ? `Học kỳ 1 (Tháng 9 - Tháng 1): ${currentGradeInfo.semester1FocusVi}` : `Semester 1: ${currentGradeInfo.semester1FocusEn}`)
                : (isVi ? `Học kỳ 2 (Tháng 1 - Tháng 5): ${currentGradeInfo.semester2FocusVi}` : `Semester 2: ${currentGradeInfo.semester2FocusEn}`)}
            </span>
          </div>
          <span className="text-[11px] text-amber-300 font-bold shrink-0">
            {semesterQuizzes.length} {isVi ? 'đề kiểm tra' : 'tests'} • {semesterPDFs.length} {isVi ? 'tài liệu PDF' : 'PDFs'}
          </span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* SUBJECT TABS BAR ("mỗi môn sẽ chuyển sang tab đúng với môn đó") */}
      {/* ============================================================== */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{isVi ? 'Chọn tab môn học để xem đề thi & tài liệu:' : 'Select subject tab to view exams & PDFs:'}</span>
          </span>
          {selectedSubject !== 'all' && (
            <button
              onClick={() => handleSelectSubject('all')}
              className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{isVi ? 'Xem tất cả môn' : 'View all subjects'}</span>
            </button>
          )}
        </div>

        {/* Horizontal Subject Tab Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {/* "All Subjects" Tab */}
          <button
            onClick={() => handleSelectSubject('all')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              selectedSubject === 'all'
                ? 'bg-teal-600 text-white shadow-md scale-102 ring-2 ring-teal-500/30'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isVi ? 'Tất cả các môn' : 'All Subjects'}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
              selectedSubject === 'all' ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}>
              {gradeSubjects.length}
            </span>
          </button>

          {/* Individual Subject Tabs */}
          {gradeSubjects.map((sub) => {
            const isTabActive = activeSubjectObj ? activeSubjectObj.id === sub.id : false;

            return (
              <button
                key={sub.id}
                onClick={() => handleSelectSubject(sub.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  isTabActive
                    ? 'bg-teal-600 text-white shadow-md scale-102 ring-2 ring-teal-500/30'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/60'
                }`}
              >
                <span className={isTabActive ? 'text-amber-300' : 'text-teal-600 dark:text-teal-400'}>
                  {renderSubjectIcon(sub.iconName, 'w-4 h-4')}
                </span>
                <span>{isVi ? sub.nameVi : sub.nameEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIEW 1: DEDICATED SUBJECT VIEW ("mỗi môn sẽ chuyển sang tab đúng với môn đó") */}
      {/* WITH CLEAR SECTIONS: KIỂM TRA GIỮA KỲ & KIỂM TRA THƯỜNG XUYÊN             */}
      {/* ========================================================================= */}
      {selectedSubject !== 'all' && (
        <div className="space-y-8 animate-fade-in">
          
          {/* Active Subject Banner */}
          {activeSubjectObj && (
            <div className={`p-6 sm:p-7 rounded-3xl border-2 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${activeSubjectObj.color}`}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                  {renderSubjectIcon(activeSubjectObj.iconName, 'w-7 h-7')}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200">
                      HK{selectedSemester} • {currentGradeInfo.nameVi}
                    </span>
                    <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400">
                      {midtermQuizzes.length} {isVi ? 'Đề Giữa kỳ' : 'Midterm'} • {regularQuizzes.length} {isVi ? 'Đề Thường xuyên' : 'Regular'}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                    {isVi ? activeSubjectObj.nameVi : activeSubjectObj.nameEn}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 max-w-2xl mt-0.5">
                    {isVi ? activeSubjectObj.descVi : activeSubjectObj.descEn}
                  </p>
                </div>
              </div>

              {/* Sub-tab view buttons: All | Regular | Midterm | Final | PDFs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/60 dark:bg-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700 shrink-0 self-start sm:self-center">
                <button
                  onClick={() => setTestSubTab('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    testSubTab === 'all'
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {isVi ? 'Tất cả' : 'All'}
                </button>
                <button
                  onClick={() => setTestSubTab('regular')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    testSubTab === 'regular'
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  📝 {isVi ? 'Thường xuyên (15p)' : '15-min'}
                </button>
                <button
                  onClick={() => setTestSubTab('midterm')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    testSubTab === 'midterm'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  🎯 {isVi ? 'Giữa kỳ (45p)' : 'Midterm'}
                </button>
                <button
                  onClick={() => setTestSubTab('final')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    testSubTab === 'final'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  🏆 {isVi ? 'Cuối kỳ (60p)' : 'Final'}
                </button>
                <button
                  onClick={() => setTestSubTab('pdfs')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    testSubTab === 'pdfs'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  📚 {isVi ? 'Tài liệu PDF' : 'PDFs'}
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* SECTION 1: KIỂM TRA GIỮA KỲ (ĐỀ THI GIỮA HỌC KỲ - 45 PHÚT)     */}
          {/* ============================================================== */}
          {(testSubTab === 'all' || testSubTab === 'midterm') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                      <span>{isVi ? `Đề thi Kiểm tra Giữa học kỳ ${selectedSemester}` : `Semester ${selectedSemester} Midterm Exams`}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold">
                        45 {isVi ? 'phút' : 'mins'} • {isVi ? 'Chuẩn GDPT' : 'Official'}
                      </span>
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isVi ? 'Đề kiểm tra giữa kỳ tổng hợp nửa đầu học kỳ (45 phút, chấm điểm tức thì hoặc bấm giờ thi thử).' : 'Official comprehensive midterm exam simulation.'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400 hidden sm:inline">
                  {midtermQuizzes.length} {isVi ? 'đề thi' : 'quizzes'}
                </span>
              </div>

              {midtermQuizzes.length === 0 ? (
                <div className="p-8 text-center bg-white dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-xs text-gray-500 font-medium">
                  {isVi ? 'Chưa có đề thi giữa kỳ cho môn này trong học kỳ được chọn.' : 'No midterm exams for this subject in the selected semester.'}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {midtermQuizzes.map((quiz) => (
                    <div 
                      key={quiz.id}
                      className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-3xl border-2 border-indigo-100 dark:border-indigo-950/60 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4 relative"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shrink-0">
                            🎯 {isVi ? `Kiểm tra Giữa kỳ ${quiz.semester}` : `Midterm Sem ${quiz.semester}`}
                          </span>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <QuizA4PdfButton quiz={quiz} compact />
                            <QuizDownloadButton
                              quizId={quiz.id}
                              quizTitle={isVi ? quiz.title : quiz.titleEn}
                              subject={quiz.subject}
                              compact
                            />
                            <span className="text-[11px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-lg shrink-0">
                              +{quiz.xpReward} XP
                            </span>
                          </div>
                        </div>

                        <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white leading-snug line-clamp-2 break-words">
                          {isVi ? quiz.title : quiz.titleEn}
                        </h4>

                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 break-words">
                          {isVi ? quiz.description : quiz.descriptionEn}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-500 font-semibold pt-1">
                          <span className="flex items-center gap-1 shrink-0">
                            <Clock className="w-3.5 h-3.5 text-indigo-500" />
                            {quiz.durationMinutes} {isVi ? 'phút' : 'mins'}
                          </span>
                          <span>•</span>
                          <span className="shrink-0">{quiz.questions.length} {isVi ? 'câu hỏi trắc nghiệm' : 'questions'}</span>
                        </div>
                      </div>

                      {/* Action buttons: Review Mode, Test Mode & A4 PDF with balanced 3-col grid */}
                      <div className="pt-3 border-t border-gray-100 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <button
                          onClick={() => navigate(`/quiz/${quiz.id}?mode=review`)}
                          className="w-full py-2.5 px-2 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          title={isVi ? 'Ôn tập kèm giải thích chi tiết tức thì' : 'Review with instant feedback'}
                        >
                          <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{isVi ? 'Ôn tập' : 'Review'}</span>
                        </button>

                        <button
                          onClick={() => navigate(`/quiz/${quiz.id}?mode=test`)}
                          className="w-full py-2.5 px-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                          title={isVi ? 'Thi thử bấm giờ nghiêm túc 45 phút' : 'Timed exam simulation'}
                        >
                          <Clock className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{isVi ? 'Thi thử (45p)' : 'Timed Test'}</span>
                        </button>

                        <QuizA4PdfButton quiz={quiz} className="w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ============================================================== */}
          {/* SECTION 2: KIỂM TRA THƯỜNG XUYÊN (BÀI KIỂM TRA 15 PHÚT)          */}
          {/* ============================================================== */}
          {(testSubTab === 'all' || testSubTab === 'regular') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black shrink-0">
                    📝
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                      <span>{isVi ? `Đánh giá Kiểm tra Thường xuyên HK${selectedSemester}` : `Semester ${selectedSemester} Regular Assessments`}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold shrink-0">
                        15 {isVi ? 'phút' : 'mins'} • {isVi ? 'Chuyên đề' : 'Unit Test'}
                      </span>
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isVi ? 'Bài kiểm tra 15 phút đánh giá thường xuyên theo từng bài học và chuyên đề trọng tâm.' : '15-minute quick diagnostic assessments for regular grading.'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400 hidden sm:inline shrink-0">
                  {regularQuizzes.length} {isVi ? 'bài kiểm tra' : 'quizzes'}
                </span>
              </div>

              {regularQuizzes.length === 0 ? (
                <div className="p-8 text-center bg-white dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-xs text-gray-500 font-medium">
                  {isVi ? 'Chưa có bài kiểm tra thường xuyên cho môn này trong học kỳ được chọn.' : 'No regular assessment tests for this subject in the selected semester.'}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {regularQuizzes.map((quiz) => (
                    <div 
                      key={quiz.id}
                      className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-3xl border-2 border-teal-100 dark:border-teal-950/60 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4 relative"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 shrink-0">
                            📝 {isVi ? 'Kiểm tra 15 phút' : '15-min Test'}
                          </span>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <QuizA4PdfButton quiz={quiz} compact />
                            <QuizDownloadButton
                              quizId={quiz.id}
                              quizTitle={isVi ? quiz.title : quiz.titleEn}
                              subject={quiz.subject}
                              compact
                            />
                            <span className="text-[11px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-lg shrink-0">
                              +{quiz.xpReward} XP
                            </span>
                          </div>
                        </div>

                        <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white leading-snug line-clamp-2 break-words">
                          {isVi ? quiz.title : quiz.titleEn}
                        </h4>

                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 break-words">
                          {isVi ? quiz.description : quiz.descriptionEn}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-500 font-semibold pt-1">
                          <span className="flex items-center gap-1 shrink-0">
                            <Clock className="w-3.5 h-3.5 text-teal-600" />
                            {quiz.durationMinutes} {isVi ? 'phút' : 'mins'}
                          </span>
                          <span>•</span>
                          <span className="shrink-0">{quiz.questions.length} {isVi ? 'câu hỏi' : 'questions'}</span>
                        </div>
                      </div>

                      {/* Action buttons: Review Mode, Test Mode & A4 PDF with balanced 3-col grid */}
                      <div className="pt-3 border-t border-gray-100 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <button
                          onClick={() => navigate(`/quiz/${quiz.id}?mode=review`)}
                          className="w-full py-2.5 px-2 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/40 rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          title={isVi ? 'Luyện tập xem lời giải ngay' : 'Review with instant feedback'}
                        >
                          <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{isVi ? 'Ôn tập' : 'Review'}</span>
                        </button>

                        <button
                          onClick={() => navigate(`/quiz/${quiz.id}?mode=test`)}
                          className="w-full py-2.5 px-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                          title={isVi ? 'Làm bài kiểm tra 15 phút tính điểm' : 'Start 15-minute test'}
                        >
                          <Clock className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{isVi ? 'Làm bài (15p)' : 'Start Test'}</span>
                        </button>

                        <QuizA4PdfButton quiz={quiz} className="w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ============================================================== */}
          {/* SECTION 3: KIỂM TRA CUỐI KỲ (ĐỀ THI CUỐI HỌC KỲ - 60 PHÚT)     */}
          {/* ============================================================== */}
          {(testSubTab === 'all' || testSubTab === 'final') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black shrink-0">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                      <span>{isVi ? `Đề thi Kiểm tra Cuối học kỳ ${selectedSemester}` : `Semester ${selectedSemester} Final Examinations`}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold shrink-0">
                        60 {isVi ? 'phút' : 'mins'} • {isVi ? 'Tổng kết' : 'Final Exam'}
                      </span>
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isVi ? 'Đề thi cuối kỳ toàn diện đánh giá chuẩn kiến thức và kỹ năng trọn vẹn cả học kỳ.' : 'Official comprehensive final evaluation for the semester.'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400 hidden sm:inline shrink-0">
                  {finalQuizzes.length} {isVi ? 'đề thi' : 'quizzes'}
                </span>
              </div>

              {finalQuizzes.length === 0 ? (
                <div className="p-8 text-center bg-white dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-xs text-gray-500 font-medium">
                  {isVi ? 'Chưa có đề thi cuối kỳ cho môn này trong học kỳ được chọn.' : 'No final exams for this subject in the selected semester.'}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {finalQuizzes.map((quiz) => (
                    <div 
                      key={quiz.id}
                      className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-3xl border-2 border-amber-200 dark:border-amber-950/60 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4 relative"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shrink-0">
                            🏆 {isVi ? `Kiểm tra Cuối kỳ ${quiz.semester}` : `Final Exam Sem ${quiz.semester}`}
                          </span>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <QuizA4PdfButton quiz={quiz} compact />
                            <QuizDownloadButton
                              quizId={quiz.id}
                              quizTitle={isVi ? quiz.title : quiz.titleEn}
                              subject={quiz.subject}
                              compact
                            />
                            <span className="text-[11px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-lg shrink-0">
                              +{quiz.xpReward} XP
                            </span>
                          </div>
                        </div>

                        <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white leading-snug line-clamp-2 break-words">
                          {isVi ? quiz.title : quiz.titleEn}
                        </h4>

                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 break-words">
                          {isVi ? quiz.description : quiz.descriptionEn}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-500 font-semibold pt-1">
                          <span className="flex items-center gap-1 shrink-0">
                            <Clock className="w-3.5 h-3.5 text-amber-600" />
                            {quiz.durationMinutes} {isVi ? 'phút' : 'mins'}
                          </span>
                          <span>•</span>
                          <span className="shrink-0">{quiz.questions.length} {isVi ? 'câu hỏi' : 'questions'}</span>
                        </div>
                      </div>

                      {/* Action buttons: Review Mode, Test Mode & A4 PDF with balanced 3-col grid */}
                      <div className="pt-3 border-t border-gray-100 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <button
                          onClick={() => navigate(`/quiz/${quiz.id}?mode=review`)}
                          className="w-full py-2.5 px-2 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40 rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          title={isVi ? 'Ôn tập kèm giải thích chi tiết tức thì' : 'Review with instant feedback'}
                        >
                          <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{isVi ? 'Ôn tập' : 'Review'}</span>
                        </button>

                        <button
                          onClick={() => navigate(`/quiz/${quiz.id}?mode=test`)}
                          className="w-full py-2.5 px-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                          title={isVi ? 'Thi thử cuối kỳ 60 phút' : 'Timed final exam'}
                        >
                          <Clock className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{isVi ? 'Thi Cuối kỳ' : 'Final Test'}</span>
                        </button>

                        <QuizA4PdfButton quiz={quiz} className="w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ============================================================== */}
          {/* SECTION 3: TÀI LIỆU & ĐỀ CƯƠNG PDF CỦA MÔN HỌC                 */}
          {/* ============================================================== */}
          {(testSubTab === 'all' || testSubTab === 'pdfs') && currentSubjectPDFs.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black">
                    📚
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                      <span>{isVi ? `Đề cương & Cẩm nang PDF môn ${activeSubjectObj?.nameVi || ''}` : `Subject Study PDFs`}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold">
                        {currentSubjectPDFs.length} {isVi ? 'tài liệu' : 'files'}
                      </span>
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isVi ? 'Sách ôn tập, tóm tắt công thức và sơ đồ tư duy chuẩn SGK.' : 'Curriculum formula sheets, summaries and review documents.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {currentSubjectPDFs.map((pdf) => (
                  <div 
                    key={pdf.id}
                    className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-3xl border-2 border-purple-100 dark:border-purple-950/60 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4 overflow-hidden"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 shrink-0">
                          {pdf.subject}
                        </span>

                        <span className="text-[11px] font-bold text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-lg shrink-0">
                          {pdf.fileSize} • {pdf.pageCount} {isVi ? 'trang' : 'pages'}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white leading-snug line-clamp-2 break-words">
                        {isVi ? pdf.title : pdf.titleEn}
                      </h4>

                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 break-words">
                        {isVi ? pdf.description : pdf.descriptionEn}
                      </p>

                      <div className="text-[11px] text-gray-400 font-medium truncate">
                        {pdf.author} • {pdf.releaseDate}
                      </div>
                    </div>

                    {/* PDF Actions: Read Document & Download PDF */}
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex flex-wrap sm:flex-nowrap items-center gap-2">
                      <button
                        onClick={() => setActiveViewingPDF(pdf)}
                        className="flex-1 min-w-[110px] py-2.5 px-3 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 hover:bg-teal-100 rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{isVi ? 'Đọc trực tuyến' : 'Read'}</span>
                      </button>

                      <button
                        onClick={() => setActiveViewingPDF(pdf)}
                        className="flex-1 min-w-[110px] py-2.5 px-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <ArrowDownToLine className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{isVi ? 'Tải PDF' : 'Download'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* ============================================================== */}
      {/* VIEW 2: OVERVIEW OF ALL SUBJECTS (when selectedSubject === 'all') */}
      {/* SHOWS CARDS WITH "CHUYỂN SANG MÔN NÀY"                          */}
      {/* ============================================================== */}
      {selectedSubject === 'all' && (
        <div className="space-y-10 animate-fade-in">
          
          {/* Subjects Grid for Current Grade */}
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2.5">
                  <Compass className="w-6 h-6 text-teal-600" />
                  <span>{isVi ? `Các môn học của ${currentGradeInfo.nameVi} theo chuẩn GDPT` : `Official Subjects for ${currentGradeInfo.nameEn}`}</span>
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {isVi ? 'Chọn một môn để chuyển sang tab riêng biệt với đầy đủ đề Giữa kỳ, Thường xuyên & tài liệu PDF.' : 'Click any subject to open its dedicated tab with Midterms, Regular tests & PDFs.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {paths.map((path) => (
                <div 
                  key={path.id} 
                  className={`p-6 rounded-[2rem] border-2 transition-all hover:shadow-lg flex flex-col justify-between ${path.color}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3.5 bg-white dark:bg-gray-800 rounded-2xl shadow-xs border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white">
                        {path.icon}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[11px] font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-2.5 py-1 rounded-xl shadow-xs border border-gray-100 dark:border-gray-700">
                          HK{selectedSemester}
                        </span>
                        {path.isCompleted && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            {isVi ? 'Đã thành thạo' : 'Mastered'}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-black text-gray-900 dark:text-white mb-1.5 leading-snug">
                      {path.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-xs mb-4 leading-relaxed line-clamp-2">
                      {path.description}
                    </p>

                    {/* Test counts breakdown */}
                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 p-2.5 rounded-xl border border-gray-100 dark:border-gray-700/60 mb-4">
                      <span>🎯 {path.midtermCount} {isVi ? 'Đề Giữa kỳ' : 'Midterm'}</span>
                      <span>•</span>
                      <span>📝 {path.regularCount} {isVi ? 'Đề Thường xuyên' : 'Regular'}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-black text-gray-700 dark:text-gray-200">
                        <span className="uppercase tracking-wider text-[10px]">{t('explore.progress')}</span>
                        <span>{path.progress}%</span>
                      </div>
                      <div className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full h-2.5 p-0.5">
                        <div 
                          className={`h-full rounded-full transition-all duration-700 ${
                            path.isCompleted ? 'bg-emerald-500' : 'bg-teal-600'
                          }`}
                          style={{ width: `${path.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Switch to this subject tab button */}
                    <button 
                      onClick={() => handleSelectSubject(path.subjectId)}
                      className="w-full flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2.5 rounded-xl font-black hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700 shadow-xs text-xs cursor-pointer group"
                    >
                      <span>{isVi ? `Vào môn ${path.title}` : `Open ${path.title}`}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personalized Learning Path Hub */}
          {learningPath && (
            <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 rounded-[2.5rem] p-6 sm:p-9 text-white shadow-xl border-2 border-indigo-700/50">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/10 backdrop-blur-md text-indigo-200 text-xs font-black uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>{isVi ? 'Lộ trình học tập cá nhân hóa' : 'Personalized Learning Path'}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      {learningPath.targetGoal}
                    </h2>
                  </div>

                  {/* Study Pace Selector */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 border border-white/10">
                    <div className="text-[11px] font-bold text-indigo-200 mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{isVi ? 'Mục tiêu học mỗi ngày:' : 'Daily Pace Goal:'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[15, 30, 45, 60].map((mins) => (
                        <button
                          key={mins}
                          onClick={() => handlePaceChange(mins)}
                          disabled={savingSettings}
                          className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
                            learningPath.dailyPaceMinutes === mins
                              ? 'bg-amber-400 text-gray-900 shadow-md scale-105'
                              : 'bg-white/10 hover:bg-white/20 text-white'
                          }`}
                        >
                          {mins}m
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2 bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex justify-between text-xs font-black">
                    <span className="text-indigo-200 uppercase tracking-wider">
                      {isVi ? 'Tiến độ hoàn thành lộ trình' : 'Overall Path Completion'}
                    </span>
                    <span className="text-amber-300 text-base">{learningPath.overallProgress}%</span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-3 p-0.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${Math.max(5, learningPath.overallProgress)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Milestones */}
                <div>
                  <h3 className="text-xs font-black text-indigo-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>{isVi ? 'Các chặng mục tiêu (Milestones)' : 'Learning Milestones'}</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {learningPath.milestones.map((ms, idx) => (
                      <div 
                        key={ms.id}
                        className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                          ms.completed 
                            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100'
                            : 'bg-white/10 hover:bg-white/15 border-white/10 text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
                            ms.completed ? 'bg-emerald-500 text-white' : 'bg-white/20 text-indigo-200'
                          }`}>
                            {ms.completed ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                          </div>
                          <div className="truncate">
                            <div className="font-bold text-xs truncate">{ms.title}</div>
                            <div className="text-[10px] text-indigo-200/80 flex items-center gap-2">
                              <span>{ms.subject}</span>
                              <span>•</span>
                              <span className="text-amber-300 font-bold">+{ms.xpReward} XP</span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => navigate(`/quiz/${ms.lessonId}?mode=review`)}
                          className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                            ms.completed
                              ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/30'
                              : 'bg-white hover:bg-gray-100 text-gray-900 shadow-xs'
                          }`}
                        >
                          {ms.completed 
                            ? (isVi ? 'Ôn lại' : 'Review') 
                            : (isVi ? 'Học ngay' : 'Start')}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* PDF Learning Viewer Modal */}
      {activeViewingPDF && (
        <PDFLearningViewer
          pdf={activeViewingPDF}
          isOpen={!!activeViewingPDF}
          onClose={() => setActiveViewingPDF(null)}
        />
      )}

    </div>
  );
}
