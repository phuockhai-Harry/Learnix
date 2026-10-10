import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  Sparkles, 
  AlertTriangle, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  RefreshCw, 
  Target, 
  GraduationCap, 
  Flame,
  Check,
  AlertCircle,
  FileText,
  Sliders,
  Share2
} from 'lucide-react';
import { collection, doc, getDoc, setDoc, getDocs, query, where, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { useToast } from '../context/ToastContext';
import { audio } from '../lib/audio';
import confetti from 'canvas-confetti';
import MathMarkdown from './MathMarkdown';
import jsPDF from 'jspdf';
import { setupPdfUnicode, removeVietnameseTones } from '../lib/pdfUnicode';

export interface ExamItem {
  id: string;
  classId: string;
  className: string;
  title: string;
  date: string; // YYYY-MM-DD
  priority: 'high' | 'medium' | 'normal';
  topics: string;
  targetScore?: string;
}

export interface StudySlot {
  id: string;
  examId?: string;
  classId: string;
  className: string;
  topic: string;
  activityType: 'concept' | 'practice' | 'quiz' | 'review';
  durationMinutes: number;
  timeLabel: string;
  completed: boolean;
}

export interface DaySchedule {
  date: string; // YYYY-MM-DD
  dayLabel: string;
  slots: StudySlot[];
}

interface StudyPlannerProps {
  initialClasses?: any[];
  onOpenTutorForTopic?: (topic: string) => void;
}

export function StudyPlanner({ initialClasses, onOpenTutorForTopic }: StudyPlannerProps) {
  const { user, profile } = useAuth();
  const { language } = useLanguage();
  const { showToast } = useToast();
  const isVi = language === 'vi';

  // Registered classes
  const [classes, setClasses] = useState<any[]>(initialClasses || []);
  const [loadingClasses, setLoadingClasses] = useState(false);

  // Planner state
  const [exams, setExams] = useState<ExamItem[]>([]);
  const [schedule, setSchedule] = useState<DaySchedule[]>([]);
  const [dailyHours, setDailyHours] = useState<number>(2);
  const [selectedDateStr, setSelectedDateStr] = useState<string>('');
  const [loadingPlan, setLoadingPlan] = useState(true);
  const [savingPlan, setSavingPlan] = useState(false);

  // New exam form state
  const [showAddExam, setShowAddExam] = useState(false);
  const [formClassId, setFormClassId] = useState('');
  const [formCustomClassName, setFormCustomClassName] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formPriority, setFormPriority] = useState<'high' | 'medium' | 'normal'>('high');
  const [formTopics, setFormTopics] = useState('');
  const [formTargetScore, setFormTargetScore] = useState('90%+');

  // AI Advice state
  const [aiAdvice, setAiAdvice] = useState<string>('');
  const [loadingAiAdvice, setLoadingAiAdvice] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);

  // Export PDF state
  const [exportingPdf, setExportingPdf] = useState(false);

  // Default subject options if student has no classes joined yet
  const defaultSubjects = useMemo(() => [
    { id: 'math', name: isVi ? 'Toán học' : 'Mathematics' },
    { id: 'science', name: isVi ? 'Khoa học Tự nhiên' : 'Natural Sciences' },
    { id: 'english', name: isVi ? 'Tiếng Anh' : 'English Language' },
    { id: 'literature', name: isVi ? 'Ngữ văn' : 'Literature & Reading' },
    { id: 'cs', name: isVi ? 'Tin học & Lập trình' : 'Computer Science' },
    { id: 'history', name: isVi ? 'Lịch sử & Địa lý' : 'History & Social Studies' }
  ], [isVi]);

  // Combined list of classes + default subjects
  const availableSubjects = useMemo(() => {
    const list: { id: string; name: string }[] = [];
    if (classes && classes.length > 0) {
      classes.forEach(c => {
        list.push({ id: c.id, name: c.name });
      });
    }
    // Add default subjects that aren't already included
    defaultSubjects.forEach(s => {
      if (!list.some(existing => existing.name.toLowerCase() === s.name.toLowerCase())) {
        list.push(s);
      }
    });
    return list;
  }, [classes, defaultSubjects]);

  // Today's date string YYYY-MM-DD
  const todayStr = useMemo(() => {
    return new Date().toISOString().split('T')[0];
  }, []);

  // Fetch registered classes if not passed as prop
  useEffect(() => {
    if (initialClasses && initialClasses.length > 0) {
      setClasses(initialClasses);
      return;
    }

    const fetchClasses = async () => {
      if (!profile?.email) return;
      setLoadingClasses(true);
      try {
        const classesQ = query(collection(db, 'classes'), where('studentEmails', 'array-contains', profile.email));
        const snap = await getDocs(classesQ);
        const fetched = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setClasses(fetched);
      } catch (err) {
        console.error('Error fetching registered classes for planner:', err);
      } finally {
        setLoadingClasses(false);
      }
    };

    fetchClasses();
  }, [profile?.email, initialClasses]);

  // Load existing study plan from Firestore with localStorage fallback
  useEffect(() => {
    const loadPlan = async () => {
      if (!user?.uid) {
        setLoadingPlan(false);
        return;
      }

      // Check local cache first for instant rendering
      let localCacheLoaded = false;
      try {
        const cached = localStorage.getItem(`learnix_study_plan_${user.uid}`);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed.exams)) setExams(parsed.exams);
          if (Array.isArray(parsed.schedule)) setSchedule(parsed.schedule);
          if (typeof parsed.dailyHoursTarget === 'number') setDailyHours(parsed.dailyHoursTarget);
          localCacheLoaded = true;
        }
      } catch (e) {
        console.warn('Could not read local study plan cache:', e);
      }

      try {
        const planRef = doc(db, 'studyPlans', user.uid);
        const planSnap = await getDoc(planRef);

        if (planSnap.exists()) {
          const data = planSnap.data();
          if (Array.isArray(data.exams)) {
            setExams(data.exams);
          }
          if (Array.isArray(data.schedule)) {
            setSchedule(data.schedule);
          }
          if (typeof data.dailyHoursTarget === 'number') {
            setDailyHours(data.dailyHoursTarget);
          }
          // Update local cache
          try {
            localStorage.setItem(`learnix_study_plan_${user.uid}`, JSON.stringify(data));
          } catch (e) {}
        } else if (!localCacheLoaded) {
          // Initialize sample exams for first-time onboarding
          const futureDate1 = new Date();
          futureDate1.setDate(futureDate1.getDate() + 7);
          const dateStr1 = futureDate1.toISOString().split('T')[0];

          const futureDate2 = new Date();
          futureDate2.setDate(futureDate2.getDate() + 14);
          const dateStr2 = futureDate2.toISOString().split('T')[0];

          const sampleExams: ExamItem[] = [
            {
              id: 'sample-1',
              classId: availableSubjects[0]?.id || 'math',
              className: availableSubjects[0]?.name || (isVi ? 'Toán học' : 'Mathematics'),
              title: isVi ? 'Kiểm tra Giữa kỳ Toán' : 'Midterm Mathematics Exam',
              date: dateStr1,
              priority: 'high',
              topics: isVi ? 'Phân số, Số nguyên, Phương trình tuyến tính' : 'Fractions, Integers, Linear Equations',
              targetScore: '95%'
            },
            {
              id: 'sample-2',
              classId: availableSubjects[1]?.id || 'science',
              className: availableSubjects[1]?.name || (isVi ? 'Khoa học Tự nhiên' : 'Natural Sciences'),
              title: isVi ? 'Bài thi Đánh giá Khoa học' : 'Science Term Assessment',
              date: dateStr2,
              priority: 'medium',
              topics: isVi ? 'Hệ sinh thái, Năng lượng, Cấu tạo nguyên tử' : 'Ecosystems, Energy Forms, Atomic Structure',
              targetScore: '90%'
            }
          ];

          setExams(sampleExams);
          // Auto-generate initial schedule
          const generated = generateScheduleFromExams(sampleExams, dailyHours);
          setSchedule(generated);
          
          try {
            localStorage.setItem(`learnix_study_plan_${user.uid}`, JSON.stringify({
              exams: sampleExams,
              schedule: generated,
              dailyHoursTarget: dailyHours
            }));
          } catch (e) {}
        }
      } catch (err) {
        console.warn('Notice: Firestore sync fallback, reading local plan:', err);
      } finally {
        setLoadingPlan(false);
      }
    };

    loadPlan();
  }, [user?.uid]);

  // Set initial selected date
  useEffect(() => {
    if (!selectedDateStr) {
      setSelectedDateStr(todayStr);
    }
  }, [todayStr, selectedDateStr]);

  // Save changes to Firestore and localStorage
  const savePlanToFirestore = async (updatedExams: ExamItem[], updatedSchedule: DaySchedule[], targetHours: number) => {
    if (!user?.uid) return;
    setSavingPlan(true);

    // Save locally immediately
    try {
      localStorage.setItem(`learnix_study_plan_${user.uid}`, JSON.stringify({
        exams: updatedExams,
        schedule: updatedSchedule,
        dailyHoursTarget: targetHours
      }));
    } catch (e) {}

    try {
      const planRef = doc(db, 'studyPlans', user.uid);
      await setDoc(planRef, {
        studentId: user.uid,
        exams: updatedExams,
        schedule: updatedSchedule,
        dailyHoursTarget: targetHours,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.warn('Could not sync study plan to Firestore immediately, saved locally:', err);
    } finally {
      setSavingPlan(false);
    }
  };

  /**
   * Spaced-repetition study schedule algorithm:
   * Generates day-by-day study slots from today up to the latest exam date.
   */
  const generateScheduleFromExams = (examList: ExamItem[], hoursPerDay: number): DaySchedule[] => {
    if (!examList || examList.length === 0) return [];

    // Filter valid future exams (or exams on/after today)
    const validExams = [...examList].sort((a, b) => a.date.localeCompare(b.date));
    const latestExam = validExams[validExams.length - 1];
    if (!latestExam) return [];

    const startDate = new Date();
    const endDate = new Date(latestExam.date);
    // Add 1 extra day buffer
    endDate.setDate(endDate.getDate() + 1);

    const generatedDays: DaySchedule[] = [];
    const curr = new Date(startDate);

    // Limit schedule generation to max 30 days to keep UI fast & focused
    let dayCount = 0;
    while (curr <= endDate && dayCount < 30) {
      const dateStr = curr.toISOString().split('T')[0];
      const dayOfWeek = curr.toLocaleDateString(isVi ? 'vi-VN' : 'en-US', { weekday: 'short' });
      const formattedDate = curr.toLocaleDateString(isVi ? 'vi-VN' : 'en-US', { month: 'numeric', day: 'numeric' });
      const dayLabel = `${dayOfWeek}, ${formattedDate}`;

      // Calculate upcoming exams for this date
      const upcoming = validExams.filter(e => e.date >= dateStr);
      
      const slots: StudySlot[] = [];
      const slotsCount = hoursPerDay >= 3 ? 3 : 2; // 2 or 3 focused sessions per day
      const sessionMinutes = Math.round((hoursPerDay * 60) / slotsCount);

      if (upcoming.length > 0) {
        // Interleave exams, prioritizing the closest ones and higher priority
        for (let i = 0; i < slotsCount; i++) {
          // Select exam using weighted round-robin
          const examIndex = (dayCount + i) % upcoming.length;
          const targetExam = upcoming[examIndex];

          const daysUntil = Math.max(0, Math.ceil((new Date(targetExam.date).getTime() - curr.getTime()) / (1000 * 60 * 60 * 24)));

          let activity: 'concept' | 'practice' | 'quiz' | 'review' = 'concept';
          let topicDesc = '';

          if (daysUntil === 0) {
            activity = 'review';
            topicDesc = isVi 
              ? `🎯 NGÀY THI: Ôn nhanh công thức & sơ đồ tư duy cho "${targetExam.title}"`
              : `🎯 EXAM DAY: Light final formula scan & confidence review for "${targetExam.title}"`;
          } else if (daysUntil <= 2) {
            activity = 'review';
            topicDesc = isVi
              ? `Tổng ôn dạng bài trọng tâm & Đề thi thử cho ${targetExam.className}`
              : `High-yield mock exam & formula recall for ${targetExam.className}`;
          } else if (daysUntil <= 5) {
            activity = 'quiz';
            topicDesc = isVi
              ? `Luyện đề trắc nghiệm & Sửa bài tập: ${targetExam.topics || targetExam.className}`
              : `Practice timed quizzes & problem sets: ${targetExam.topics || targetExam.className}`;
          } else {
            activity = (i % 2 === 0) ? 'concept' : 'practice';
            topicDesc = isVi
              ? `Học lý thuyết & Xem lại thẻ ghi nhớ: ${targetExam.topics || targetExam.className}`
              : `Core concepts & flashcards review: ${targetExam.topics || targetExam.className}`;
          }

          const slotTimes = ['08:00 - 08:45', '14:30 - 15:15', '19:30 - 20:15'];

          slots.push({
            id: `slot-${dateStr}-${i}`,
            examId: targetExam.id,
            classId: targetExam.classId,
            className: targetExam.className,
            topic: topicDesc,
            activityType: activity,
            durationMinutes: sessionMinutes,
            timeLabel: slotTimes[i] || `${18 + i}:00 - ${18 + i}:45`,
            completed: false
          });
        }
      }

      generatedDays.push({
        date: dateStr,
        dayLabel,
        slots
      });

      curr.setDate(curr.getDate() + 1);
      dayCount++;
    }

    return generatedDays;
  };

  // Add new exam
  const handleAddExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formDate) {
      showToast({
        type: 'error',
        title: isVi ? 'Thiếu thông tin' : 'Missing Information',
        message: isVi ? 'Vui lòng nhập tên kỳ thi và ngày thi' : 'Please provide exam title and date'
      });
      return;
    }

    // Determine class name
    let selectedClassName = '';
    if (formClassId === 'custom') {
      selectedClassName = formCustomClassName.trim() || (isVi ? 'Môn học khác' : 'Custom Subject');
    } else {
      const found = availableSubjects.find(s => s.id === formClassId);
      selectedClassName = found ? found.name : availableSubjects[0]?.name || 'Mathematics';
    }

    const newExam: ExamItem = {
      id: `exam-${Date.now()}`,
      classId: formClassId || availableSubjects[0]?.id || 'custom',
      className: selectedClassName,
      title: formTitle.trim(),
      date: formDate,
      priority: formPriority,
      topics: formTopics.trim(),
      targetScore: formTargetScore.trim() || '90%+'
    };

    const updatedExams = [...exams, newExam];
    setExams(updatedExams);

    // Re-generate schedule automatically
    const updatedSchedule = generateScheduleFromExams(updatedExams, dailyHours);
    setSchedule(updatedSchedule);

    // Persist
    savePlanToFirestore(updatedExams, updatedSchedule, dailyHours);

    // Reset form
    setFormTitle('');
    setFormDate('');
    setFormTopics('');
    setShowAddExam(false);

    audio.playBadgeUnlocked();
    showToast({
      type: 'success',
      title: isVi ? 'Đã thêm ngày thi' : 'Exam Scheduled',
      message: isVi ? `Đã thêm kỳ thi "${newExam.title}" vào lịch ôn!` : `Added "${newExam.title}" to study plan!`
    });
  };

  // Remove exam
  const handleDeleteExam = (examId: string) => {
    const updatedExams = exams.filter(e => e.id !== examId);
    setExams(updatedExams);

    const updatedSchedule = generateScheduleFromExams(updatedExams, dailyHours);
    setSchedule(updatedSchedule);

    savePlanToFirestore(updatedExams, updatedSchedule, dailyHours);
    showToast({
      type: 'info',
      title: isVi ? 'Đã cập nhật' : 'Schedule Updated',
      message: isVi ? 'Đã xóa kỳ thi khỏi lịch' : 'Removed exam from schedule'
    });
  };

  // Toggle slot completion
  const handleToggleSlot = (dateStr: string, slotId: string) => {
    const updatedSchedule = schedule.map(day => {
      if (day.date !== dateStr) return day;
      return {
        ...day,
        slots: day.slots.map(slot => {
          if (slot.id !== slotId) return slot;
          const nextState = !slot.completed;
          if (nextState) {
            audio.playCorrectAnswer();
            confetti({
              particleCount: 25,
              spread: 60,
              origin: { y: 0.8 }
            });
          }
          return { ...slot, completed: nextState };
        })
      };
    });

    setSchedule(updatedSchedule);
    savePlanToFirestore(exams, updatedSchedule, dailyHours);
  };

  // Change daily hours
  const handleChangeDailyHours = (hours: number) => {
    setDailyHours(hours);
    const updatedSchedule = generateScheduleFromExams(exams, hours);
    setSchedule(updatedSchedule);
    savePlanToFirestore(exams, updatedSchedule, hours);
    showToast({
      type: 'info',
      title: isVi ? 'Mục tiêu học tập' : 'Study Goal',
      message: isVi ? `Đã cập nhật mục tiêu: ${hours} giờ ôn/ngày` : `Updated goal to ${hours}h study/day`
    });
  };

  // Request AI Study Coach advice
  const handleGetAiAdvice = async () => {
    setLoadingAiAdvice(true);
    setShowAiModal(true);
    try {
      const res = await fetch('/api/generate-study-schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          exams,
          classes,
          gradeLevel: profile?.grade || 6,
          dailyHours,
          language
        })
      });

      const data = await res.json();
      if (data && data.advice) {
        setAiAdvice(data.advice);
      } else {
        setAiAdvice(isVi ? 'Không thể tải lời khuyên từ AI.' : 'Failed to retrieve AI advice.');
      }
    } catch (err) {
      console.error(err);
      setAiAdvice(isVi ? 'Lỗi kết nối máy chủ.' : 'Network connection error.');
    } finally {
      setLoadingAiAdvice(false);
    }
  };

  // Export Study Planner PDF
  const handleExportPdf = async () => {
    if (exportingPdf) return;
    setExportingPdf(true);
    try {
      const docPdf = new jsPDF();
      const hasUnicode = await setupPdfUnicode(docPdf);
      const fontName = hasUnicode ? 'Roboto' : 'helvetica';
      const formatTxt = (txt: string) => (hasUnicode ? txt : removeVietnameseTones(txt));

      // Title Banner
      docPdf.setFont(fontName, 'bold');
      docPdf.setFontSize(20);
      docPdf.setTextColor(13, 148, 136); // Teal 600
      docPdf.text(
        formatTxt(isVi ? 'KẾ HOẠCH ÔN THI & LỊCH HỌC HÀNG NGÀY' : 'EXAM STUDY PLANNER & DAILY SCHEDULE'),
        14,
        22
      );

      // Student info subtitle
      docPdf.setFont(fontName, 'normal');
      docPdf.setFontSize(10);
      docPdf.setTextColor(100, 100, 100);
      const studentName = profile?.realName || profile?.codeName || 'Student';
      const gradeStr = isVi ? `Lớp ${profile?.grade || 6}` : `Grade ${profile?.grade || 6}`;
      docPdf.text(
        formatTxt(`${isVi ? 'Học sinh' : 'Student'}: ${studentName} - ${gradeStr} | ${isVi ? 'Mục tiêu' : 'Daily Goal'}: ${dailyHours}h/${isVi ? 'ngày' : 'day'}`),
        14,
        30
      );

      // Section 1: Upcoming Exams
      docPdf.setFont(fontName, 'bold');
      docPdf.setFontSize(14);
      docPdf.setTextColor(30, 41, 59);
      docPdf.text(formatTxt(isVi ? '1. Danh sách các Kỳ thi Sắp tới' : '1. Upcoming Exams'), 14, 42);

      let curY = 50;
      docPdf.setFont(fontName, 'normal');
      docPdf.setFontSize(10);

      if (exams.length === 0) {
        docPdf.text(formatTxt(isVi ? 'Chưa có kỳ thi nào được thêm.' : 'No exams added yet.'), 18, curY);
        curY += 8;
      } else {
        exams.forEach((exam, idx) => {
          const daysLeft = Math.ceil((new Date(exam.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
          const daysTxt = daysLeft >= 0 ? `${daysLeft} ${isVi ? 'ngày nữa' : 'days left'}` : (isVi ? 'Đã qua' : 'Passed');
          docPdf.setFont(fontName, 'bold');
          docPdf.text(formatTxt(`${idx + 1}. [${exam.className}] ${exam.title} - ${exam.date} (${daysTxt})`), 18, curY);
          curY += 6;
          docPdf.setFont(fontName, 'normal');
          docPdf.setTextColor(80, 80, 80);
          if (exam.topics) {
            docPdf.text(formatTxt(`   ${isVi ? 'Nội dung trọng tâm' : 'Topics'}: ${exam.topics}`), 18, curY);
            curY += 6;
          }
          docPdf.setTextColor(30, 41, 59);
        });
      }

      curY += 6;
      // Section 2: Daily Study Schedule
      docPdf.setFont(fontName, 'bold');
      docPdf.setFontSize(14);
      docPdf.text(formatTxt(isVi ? '2. Lộ trình Ôn tập Hàng ngày' : '2. Daily Study Schedule'), 14, curY);
      curY += 8;

      schedule.slice(0, 7).forEach((day) => {
        if (curY > 260) {
          docPdf.addPage();
          curY = 20;
        }

        docPdf.setFont(fontName, 'bold');
        docPdf.setFontSize(11);
        docPdf.setTextColor(13, 148, 136);
        docPdf.text(formatTxt(`📅 ${day.dayLabel}`), 14, curY);
        curY += 6;

        docPdf.setFont(fontName, 'normal');
        docPdf.setFontSize(9);
        docPdf.setTextColor(50, 50, 50);

        if (day.slots.length === 0) {
          docPdf.text(formatTxt(isVi ? '   (Không có lịch ôn tập cho ngày này)' : '   (No study slots for this day)'), 18, curY);
          curY += 6;
        } else {
          day.slots.forEach(slot => {
            const checkSymbol = slot.completed ? '[X]' : '[ ]';
            docPdf.text(formatTxt(`   ${checkSymbol} ${slot.timeLabel}: [${slot.className}] ${slot.topic} (${slot.durationMinutes}m)`), 18, curY);
            curY += 5;
          });
        }
        curY += 3;
      });

      docPdf.save(`Study_Plan_${studentName.replace(/\s+/g, '_')}.pdf`);
      showToast({
        type: 'success',
        title: isVi ? 'Xuất PDF thành công' : 'PDF Exported',
        message: isVi ? 'Đã xuất kế hoạch học tập PDF thành công!' : 'Study plan PDF exported successfully!'
      });
    } catch (err) {
      console.error(err);
      showToast({
        type: 'error',
        title: isVi ? 'Lỗi xuất file' : 'Export Failed',
        message: isVi ? 'Lỗi khi xuất PDF' : 'Error exporting PDF'
      });
    } finally {
      setExportingPdf(false);
    }
  };

  // Selected day's schedule
  const activeDay = useMemo(() => {
    return schedule.find(s => s.date === selectedDateStr) || schedule[0];
  }, [schedule, selectedDateStr]);

  // Overall schedule stats
  const totalSlots = useMemo(() => {
    return schedule.reduce((sum, d) => sum + d.slots.length, 0);
  }, [schedule]);

  const completedSlots = useMemo(() => {
    return schedule.reduce((sum, d) => sum + d.slots.filter(s => s.completed).length, 0);
  }, [schedule]);

  const completionPercentage = totalSlots > 0 ? Math.round((completedSlots / totalSlots) * 100) : 0;

  if (loadingPlan) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center min-h-[300px] text-gray-500">
        <RefreshCw className="w-8 h-8 text-teal-600 animate-spin mb-3" />
        <p className="font-bold">{isVi ? 'Đang tải kế hoạch ôn thi cá nhân...' : 'Loading personalized study planner...'}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Top Banner & Header */}
      <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-48 h-48 bg-teal-400/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black mb-3">
              <CalendarIcon className="w-3.5 h-3.5 text-teal-200" />
              <span>{isVi ? 'Lập Lịch Ôn Thi Thông Minh' : 'Adaptive Exam Study Planner'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              {isVi ? 'Lịch Ôn Thi & Thời Gian Biểu Hàng Ngày' : 'Exam Study Planner & Daily Schedule'}
            </h1>
            <p className="text-teal-100 text-sm sm:text-base font-medium mt-2 max-w-2xl leading-relaxed">
              {isVi 
                ? 'Nhập ngày thi của các lớp học đã đăng ký để tự động tạo lộ trình ôn thi ngắt quãng (spaced repetition), phân bổ thời gian học hợp lý và sẵn sàng chinh phục điểm cao.'
                : 'Enter your exam dates across your registered classes to generate a smart spaced-repetition daily study schedule, balance workload, and ace your tests.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowAddExam(true)}
              className="px-5 py-3 rounded-2xl bg-white text-teal-800 font-black text-sm shadow-md hover:bg-teal-50 active:scale-95 transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-teal-600 stroke-[3]" />
              <span>{isVi ? 'Thêm Ngày Thi' : 'Add Exam Date'}</span>
            </button>

            <button
              onClick={handleGetAiAdvice}
              className="px-5 py-3 rounded-2xl bg-teal-500/40 hover:bg-teal-500/60 backdrop-blur-md border border-white/30 text-white font-black text-sm shadow-sm transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{isVi ? 'Lời Khuyên AI' : 'AI Study Coach'}</span>
            </button>

            <button
              onClick={handleExportPdf}
              disabled={exportingPdf}
              className="p-3 rounded-2xl bg-black/20 hover:bg-black/30 border border-white/20 text-white transition-all disabled:opacity-50"
              title={isVi ? 'Xuất kế hoạch học tập PDF' : 'Export Study Plan as PDF'}
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress & Quick Stats bar */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-teal-500/40">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3.5">
            <p className="text-xs text-teal-200 font-bold">{isVi ? 'Kỳ thi sắp tới' : 'Upcoming Exams'}</p>
            <p className="text-2xl font-black mt-0.5">{exams.length}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3.5">
            <p className="text-xs text-teal-200 font-bold">{isVi ? 'Tiến độ hoàn thành' : 'Schedule Progress'}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-2xl font-black">{completionPercentage}%</span>
              <span className="text-xs text-teal-200 font-medium">({completedSlots}/{totalSlots})</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3.5">
            <p className="text-xs text-teal-200 font-bold">{isVi ? 'Mục tiêu hàng ngày' : 'Daily Goal'}</p>
            <div className="flex items-center gap-2 mt-1">
              {[1, 2, 3, 4].map(h => (
                <button
                  key={h}
                  onClick={() => handleChangeDailyHours(h)}
                  className={`w-7 h-7 rounded-lg text-xs font-black transition-all ${
                    dailyHours === h 
                      ? 'bg-amber-400 text-gray-900 shadow-sm scale-105' 
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                >
                  {h}h
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3.5">
            <p className="text-xs text-teal-200 font-bold">{isVi ? 'Lớp học đăng ký' : 'Registered Classes'}</p>
            <p className="text-2xl font-black mt-0.5">
              {classes.length > 0 ? classes.length : defaultSubjects.length}
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Upcoming Exam Dates Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-white">
                {isVi ? 'Danh Sách Kỳ Thi & Đếm Ngược' : 'Registered Exams & Countdowns'}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {isVi ? 'Các bài thi theo lớp học để hệ thống tính toán khối lượng ôn tập' : 'Class exams used to calculate daily spaced repetition'}
              </p>
            </div>
          </div>

          {exams.length > 0 && (
            <button
              onClick={() => setShowAddExam(true)}
              className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <span>{isVi ? 'Thêm kỳ thi' : 'Add another'}</span>
            </button>
          )}
        </div>

        {exams.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 text-center">
            <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <CalendarIcon className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 mb-1">
              {isVi ? 'Chưa có kỳ thi nào trong danh sách' : 'No upcoming exams scheduled'}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-4">
              {isVi 
                ? 'Hãy thêm ngày kiểm tra hoặc thi học kỳ cho các lớp học của bạn để tạo thời gian biểu ôn tập mỗi ngày.' 
                : 'Add upcoming quizzes, midterms, or finals across your registered classes to generate your daily plan.'}
            </p>
            <button
              onClick={() => setShowAddExam(true)}
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-black shadow-md inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>{isVi ? 'Thêm Kỳ Thi Đầu Tiên' : 'Add First Exam'}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exams.map(exam => {
              const daysLeft = Math.ceil((new Date(exam.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
              const isUrgent = daysLeft >= 0 && daysLeft <= 3;
              const isPassed = daysLeft < 0;

              return (
                <div
                  key={exam.id}
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-5 border transition-all duration-200 shadow-sm relative group ${
                    isUrgent 
                      ? 'border-amber-400 dark:border-amber-500/50 bg-amber-50/20 dark:bg-amber-950/10' 
                      : 'border-gray-200 dark:border-gray-700/80 hover:border-teal-300 dark:hover:border-teal-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 border border-teal-100 dark:border-teal-800 truncate max-w-[180px]">
                      {exam.className}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        exam.priority === 'high' 
                          ? 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
                          : exam.priority === 'medium'
                          ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                          : 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                      }`}>
                        {exam.priority}
                      </span>

                      <button
                        onClick={() => handleDeleteExam(exam.id)}
                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 p-1 rounded-lg transition-all"
                        title={isVi ? 'Xóa kỳ thi' : 'Delete exam'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-black text-gray-900 dark:text-white text-base leading-tight mb-2">
                    {exam.title}
                  </h3>

                  {exam.topics && (
                    <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 font-medium">
                      <span className="font-bold text-gray-700 dark:text-gray-200">{isVi ? 'Nội dung: ' : 'Topics: '}</span>
                      {exam.topics}
                    </p>
                  )}

                  <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      <span>{exam.date}</span>
                    </div>

                    <div className={`font-black flex items-center gap-1 ${
                      isPassed 
                        ? 'text-gray-400' 
                        : isUrgent 
                        ? 'text-red-600 dark:text-red-400 animate-pulse' 
                        : 'text-teal-600 dark:text-teal-400'
                    }`}>
                      {isPassed ? (
                        <span>{isVi ? 'Đã qua' : 'Passed'}</span>
                      ) : daysLeft === 0 ? (
                        <span>{isVi ? 'Hôm nay!' : 'Today!'}</span>
                      ) : daysLeft === 1 ? (
                        <span>{isVi ? 'Ngày mai!' : 'Tomorrow!'}</span>
                      ) : (
                        <span>{isVi ? `Còn ${daysLeft} ngày` : `${daysLeft} days left`}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Section 2: Daily Study Schedule View */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-600" />
              <span>{isVi ? 'Thời Gian Biểu Học Tập Hàng Ngày' : 'Daily Study Schedule'}</span>
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
              {isVi ? 'Kế hoạch ôn tập ngắt quãng được tối ưu cho các lớp học & ngày thi' : 'Spaced repetition schedule dynamically organized by exam proximity'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const refreshed = generateScheduleFromExams(exams, dailyHours);
                setSchedule(refreshed);
                savePlanToFirestore(exams, refreshed, dailyHours);
                showToast({
                  type: 'success',
                  title: isVi ? 'Đã làm mới' : 'Schedule Refreshed',
                  message: isVi ? 'Đã cập nhật lại lịch ôn tập!' : 'Refreshed daily schedule!'
                });
              }}
              className="text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isVi ? 'Tạo lại lịch' : 'Regenerate'}</span>
            </button>
          </div>
        </div>

        {/* Date Selector Pills (Days Carousel) */}
        {schedule.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {schedule.slice(0, 14).map((day) => {
              const isSelected = day.date === (activeDay?.date || selectedDateStr);
              const isToday = day.date === todayStr;
              const completedCount = day.slots.filter(s => s.completed).length;
              const allDone = day.slots.length > 0 && completedCount === day.slots.length;

              return (
                <button
                  key={day.date}
                  onClick={() => setSelectedDateStr(day.date)}
                  className={`px-4 py-3 rounded-2xl text-xs font-black transition-all flex flex-col items-center min-w-[105px] border ${
                    isSelected
                      ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-200 dark:shadow-none scale-105'
                      : isToday
                      ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-200 border-teal-200 dark:border-teal-800'
                      : 'bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-750'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                    {isToday ? (isVi ? 'Hôm nay' : 'Today') : day.dayLabel.split(',')[0]}
                  </span>
                  <span className="text-sm font-black my-0.5">
                    {day.dayLabel.split(',')[1] || day.date.slice(5)}
                  </span>
                  <span className={`text-[10px] mt-0.5 flex items-center gap-1 ${
                    isSelected 
                      ? 'text-teal-100' 
                      : allDone 
                      ? 'text-green-600 dark:text-green-400 font-bold' 
                      : 'text-gray-400'
                  }`}>
                    {allDone ? (
                      <Check className="w-3 h-3 stroke-[3]" />
                    ) : (
                      `${completedCount}/${day.slots.length}`
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Selected Day Slots List */}
        {activeDay ? (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-bold px-1">
              <span>{activeDay.dayLabel} ({activeDay.slots.length} {isVi ? 'phiên học' : 'sessions'})</span>
              <span>{activeDay.slots.filter(s => s.completed).length} / {activeDay.slots.length} {isVi ? 'đã xong' : 'completed'}</span>
            </div>

            {activeDay.slots.length === 0 ? (
              <div className="p-8 text-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-500 font-medium">
                  {isVi ? 'Không có phiên học nào được lên lịch cho ngày này.' : 'No study sessions scheduled for this day.'}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {activeDay.slots.map((slot) => {
                  return (
                    <div
                      key={slot.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        slot.completed 
                          ? 'bg-gray-50 dark:bg-gray-800/40 border-gray-200 dark:border-gray-800 opacity-70' 
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm hover:border-teal-400 dark:hover:border-teal-600'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <button
                          onClick={() => handleToggleSlot(activeDay.date, slot.id)}
                          className="mt-0.5 text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                          {slot.completed ? (
                            <CheckCircle2 className="w-6 h-6 text-teal-600 dark:text-teal-400 fill-teal-50 dark:fill-teal-950" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-300 dark:text-gray-600 hover:text-teal-500" />
                          )}
                        </button>

                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200">
                              {slot.className}
                            </span>

                            <span className="text-xs text-gray-400 dark:text-gray-500 font-semibold flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{slot.timeLabel} ({slot.durationMinutes} {isVi ? 'phút' : 'mins'})</span>
                            </span>

                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                              slot.activityType === 'quiz'
                                ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                                : slot.activityType === 'review'
                                ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                                : 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                            }`}>
                              {slot.activityType.toUpperCase()}
                            </span>
                          </div>

                          <p className={`text-sm font-bold text-gray-800 dark:text-gray-100 leading-snug ${
                            slot.completed ? 'line-through text-gray-400 dark:text-gray-500' : ''
                          }`}>
                            {slot.topic}
                          </p>
                        </div>
                      </div>

                      {/* Action buttons (Tutor, Quiz, Flashcards) */}
                      <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                        {onOpenTutorForTopic && (
                          <button
                            onClick={() => onOpenTutorForTopic(slot.topic)}
                            className="px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-900/40 hover:bg-teal-100 text-teal-700 dark:text-teal-300 text-xs font-bold transition-colors flex items-center gap-1"
                            title={isVi ? 'Hỏi gia sư AI về chủ đề này' : 'Ask AI tutor about this topic'}
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{isVi ? 'Ôn cùng AI' : 'Study with AI'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-400">
            {isVi ? 'Chọn một ngày ở trên để xem chi tiết.' : 'Select a date above to view details.'}
          </div>
        )}
      </div>

      {/* Modal: Add New Exam Date */}
      {showAddExam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-cyan-700 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CalendarIcon className="w-6 h-6 text-teal-200" />
                <h3 className="text-xl font-black">
                  {isVi ? 'Thêm Ngày Thi & Môn Học' : 'Add Exam & Target Date'}
                </h3>
              </div>
              <button
                onClick={() => setShowAddExam(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddExam} className="p-6 space-y-4">
              {/* Select Registered Class */}
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                  {isVi ? 'Lớp học / Môn học đăng ký *' : 'Registered Class / Subject *'}
                </label>
                <select
                  value={formClassId}
                  onChange={(e) => setFormClassId(e.target.value)}
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                >
                  <option value="">{isVi ? '-- Chọn lớp học của bạn --' : '-- Choose registered subject --'}</option>
                  {availableSubjects.map(sub => (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  ))}
                  <option value="custom">{isVi ? '+ Nhập môn học khác...' : '+ Other custom subject...'}</option>
                </select>
              </div>

              {formClassId === 'custom' && (
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                    {isVi ? 'Tên môn học tùy chỉnh' : 'Custom Subject Name'}
                  </label>
                  <input
                    type="text"
                    value={formCustomClassName}
                    onChange={(e) => setFormCustomClassName(e.target.value)}
                    placeholder={isVi ? 'Ví dụ: Hóa học 8, Vật lý Nâng cao' : 'e.g. Physics 101, Advanced Chemistry'}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              )}

              {/* Exam Title */}
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                  {isVi ? 'Tên bài kiểm tra / Kỳ thi *' : 'Exam Title *'}
                </label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder={isVi ? 'Ví dụ: Kiểm tra Giữa kỳ I, Thi Học kỳ Toán' : 'e.g. Midterm Test, Final Exam'}
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>

              {/* Exam Date & Priority in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                    {isVi ? 'Ngày thi *' : 'Exam Date *'}
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full text-sm px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                    {isVi ? 'Mức độ ưu tiên' : 'Priority Level'}
                  </label>
                  <select
                    value={formPriority}
                    onChange={(e) => setFormPriority(e.target.value as any)}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                  >
                    <option value="high">{isVi ? '🔥 Cao (High)' : '🔥 High Priority'}</option>
                    <option value="medium">{isVi ? '⚡ Trung bình (Medium)' : '⚡ Medium Priority'}</option>
                    <option value="normal">{isVi ? '🌱 Bình thường (Normal)' : '🌱 Normal Priority'}</option>
                  </select>
                </div>
              </div>

              {/* Syllabus / Key Topics */}
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                  {isVi ? 'Nội dung trọng tâm cần ôn tập' : 'Key Syllabus Topics'}
                </label>
                <textarea
                  rows={2}
                  value={formTopics}
                  onChange={(e) => setFormTopics(e.target.value)}
                  placeholder={isVi ? 'Ví dụ: Phân số, Tam giác đồng dạng, Phương trình bậc nhất' : 'e.g. Fractions, Geometry, Linear Functions'}
                  className="w-full text-sm px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => setShowAddExam(false)}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-750"
                >
                  {isVi ? 'Hủy' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-black shadow-md flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isVi ? 'Lưu & Cập nhật Lộ trình' : 'Save & Update Schedule'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: AI Study Coach Advice */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 max-h-[85vh] flex flex-col">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-cyan-700 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-amber-300" />
                <h3 className="text-xl font-black">
                  {isVi ? 'Chiến Lược Ôn Thi Tối Ưu (Gemini AI Coach)' : 'Personalized Exam Strategy (Gemini AI)'}
                </h3>
              </div>
              <button
                onClick={() => setShowAiModal(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              {loadingAiAdvice ? (
                <div className="flex flex-col items-center justify-center py-12 text-teal-600 space-y-3">
                  <RefreshCw className="w-8 h-8 animate-spin" />
                  <p className="font-bold text-sm">{isVi ? 'AI đang phân tích các lớp học & ngày thi để lập chiến lược...' : 'AI is analyzing your classes and exam dates...'}</p>
                </div>
              ) : (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <MathMarkdown content={aiAdvice} />
                </div>
              )}
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex justify-end shrink-0">
              <button
                onClick={() => setShowAiModal(false)}
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-black shadow-sm"
              >
                {isVi ? 'Đã hiểu' : 'Got it'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudyPlanner;
