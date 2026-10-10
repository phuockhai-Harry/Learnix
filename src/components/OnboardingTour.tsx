import React, { useState, useEffect } from 'react';
import { 
  Sparkles, BookOpen, Target, Users, Trophy, X, ChevronRight, ChevronLeft, CheckCircle2,
  GraduationCap, ShieldCheck, FileText
} from 'lucide-react';
import { useLanguage } from '../i18n';
import { useAuth } from '../auth';

interface OnboardingTourProps {
  forceOpen?: boolean;
  onClose?: () => void;
  role?: 'student' | 'teacher' | 'admin';
}

interface TourStep {
  title: { en: string; vi: string };
  description: { en: string; vi: string };
  icon: React.ReactNode;
  badge: { en: string; vi: string };
}

export function OnboardingTour({ forceOpen, onClose, role }: OnboardingTourProps) {
  const { profile } = useAuth();
  const { language } = useLanguage();
  const isVi = language === 'vi';
  
  const activeRole: 'student' | 'teacher' | 'admin' = role || (profile?.role as any) || 'student';

  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      setStepIndex(0);
      return;
    }

    const roleKey = `learnix_tour_seen_${activeRole}`;
    const hasSeenRoleTour = localStorage.getItem(roleKey);
    const hasSeenLegacyTour = activeRole === 'student' && localStorage.getItem('learnix_onboarding_seen');

    if (!hasSeenRoleTour && !hasSeenLegacyTour) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setStepIndex(0);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [forceOpen, activeRole]);

  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
      setStepIndex(0);
    };
    window.addEventListener('learnix-open-tour', handleOpenEvent);
    return () => window.removeEventListener('learnix-open-tour', handleOpenEvent);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(`learnix_tour_seen_${activeRole}`, 'true');
    if (activeRole === 'student') {
      localStorage.setItem('learnix_onboarding_seen', 'true');
    }
    if (onClose) onClose();
  };

  // Steps customized per role
  const studentSteps: TourStep[] = [
    {
      title: {
        en: 'Welcome to Learnix! 🎉',
        vi: 'Chào mừng bạn đến với Learnix! 🎉'
      },
      description: {
        en: 'Your intelligent gamified learning and quiz platform. Let\'s take a quick 1-minute tour of key features designed to boost your academic success.',
        vi: 'Nền tảng học tập thông minh và trò chơi hóa. Hãy cùng khám phá nhanh các tính năng cốt lõi giúp bạn chinh phục mọi môn học.'
      },
      icon: <Sparkles className="w-10 h-10 text-teal-600" />,
      badge: { en: 'Getting Started', vi: 'Khởi đầu' }
    },
    {
      title: {
        en: 'AI Study Assistant 🤖',
        vi: 'Trợ lý học tập AI 🤖'
      },
      description: {
        en: 'Our built-in AI assistant analyzes your quiz performance in real-time, generates tailored study summaries, and gives personalized feedback for topics you need to practice.',
        vi: 'Trợ lý AI tích hợp phân tích kết quả bài kiểm tra theo thời gian thực, tổng hợp tóm tắt học tập và đưa ra gợi ý ôn tập cá nhân hóa.'
      },
      icon: <BookOpen className="w-10 h-10 text-teal-600" />,
      badge: { en: 'AI Powered', vi: 'Trí tuệ nhân tạo' }
    },
    {
      title: {
        en: 'Quiz Hub & Practice 🎯',
        vi: 'Trung tâm bài tập & Luyện thi 🎯'
      },
      description: {
        en: 'Explore practice quizzes across Math, Science, and Coding, take timed tests, review detailed question breakdowns, and build your daily learning streak.',
        vi: 'Khám phá các bài kiểm tra Toán, Khoa học, Lập trình, làm bài tính giờ, xem giải thích chi tiết và duy trì chuỗi học tập mỗi ngày.'
      },
      icon: <Target className="w-10 h-10 text-teal-600" />,
      badge: { en: 'Interactive Quizzes', vi: 'Kiểm tra tương tác' }
    },
    {
      title: {
        en: 'Classroom & Homework 👥',
        vi: 'Lớp học & Bài tập về nhà 👥'
      },
      description: {
        en: 'Join teacher-led virtual classrooms using a simple class code, submit assignments on time, and track grade reports instantly.',
        vi: 'Tham gia lớp học ảo của giáo viên bằng mã lớp, nộp bài tập đúng hạn và theo dõi bảng điểm ngay lập tức.'
      },
      icon: <Users className="w-10 h-10 text-teal-600" />,
      badge: { en: 'Collaborative', vi: 'Kết nối lớp học' }
    },
    {
      title: {
        en: 'Badges & Achievements 🏆',
        vi: 'Huy hiệu & Thành tích 🏆'
      },
      description: {
        en: 'Earn XP, unlock milestone badges (Quiz Master, Streak Champion, Speed Demon), and climb the leaderboard as you master new subjects!',
        vi: 'Nhận điểm kinh nghiệm XP, mở khóa huy hiệu cột mốc và thăng hạng trên bảng xếp hạng khi bạn làm chủ môn học mới!'
      },
      icon: <Trophy className="w-10 h-10 text-teal-600" />,
      badge: { en: 'Gamification', vi: 'Thưởng & Đua top' }
    }
  ];

  const teacherSteps: TourStep[] = [
    {
      title: {
        en: 'Welcome to Teacher Workspace! 🎓',
        vi: 'Chào mừng Thầy/Cô đến với Learnix! 🎓'
      },
      description: {
        en: 'Empower your teaching with automated grading, interactive quiz creation, digital classroom management, and student performance tracking.',
        vi: 'Không gian làm việc hiện đại giúp Thầy/Cô quản lý lớp học ảo, biên soạn đề kiểm tra trắc nghiệm, chấm bài nộp và theo dõi tiến độ của học sinh.'
      },
      icon: <GraduationCap className="w-10 h-10 text-purple-600" />,
      badge: { en: 'Teacher Hub', vi: 'Không gian Giáo viên' }
    },
    {
      title: {
        en: 'Classroom Management & Codes 👥',
        vi: 'Quản lý Lớp học & Mã tham gia 👥'
      },
      description: {
        en: 'Create digital classes in seconds. Share unique 6-character class codes (e.g. MATH6A) with your students so they can join easily and view class announcements.',
        vi: 'Tạo các lớp học số chỉ trong vài giây. Chia sẻ mã lớp học gồm 6 ký tự (như MATH6A) cho học sinh tham gia tức thì và theo dõi danh sách thành viên.'
      },
      icon: <Users className="w-10 h-10 text-purple-600" />,
      badge: { en: 'Classrooms & Rosters', vi: 'Lớp học & Sĩ số' }
    },
    {
      title: {
        en: 'Custom Quiz Builder ✍️',
        vi: 'Soạn bài kiểm tra trắc nghiệm ✍️'
      },
      description: {
        en: 'Design rich quizzes across Math, Science, Literature, and Coding. Set timed durations, custom explanations, and point values to assign directly to your classes.',
        vi: 'Biên soạn đề thi trắc nghiệm đa môn học với thời gian làm bài, đáp án chuẩn xác, thang điểm và lời giải chi tiết cho học sinh.'
      },
      icon: <Sparkles className="w-10 h-10 text-purple-600" />,
      badge: { en: 'Quiz Authoring', vi: 'Soạn đề kiểm tra' }
    },
    {
      title: {
        en: 'Submissions & Teacher Feedback 📝',
        vi: 'Chấm bài & Gửi nhận xét học sinh 📝'
      },
      description: {
        en: 'Monitor student submissions in real time. Review individual answer choices, grade distributions, and write personalized feedback comments directly to students.',
        vi: 'Theo dõi bài nộp của học sinh theo thời gian thực. Xem điểm số chi tiết, phân tích các câu làm sai và gửi lời nhận xét trực tiếp cho từng học sinh.'
      },
      icon: <CheckCircle2 className="w-10 h-10 text-purple-600" />,
      badge: { en: 'Grading & Comments', vi: 'Chấm điểm & Nhận xét' }
    },
    {
      title: {
        en: 'Print-Ready PDF Grade Reports 📊',
        vi: 'Xuất Báo cáo & Bảng điểm PDF 📊'
      },
      description: {
        en: 'Export formal class grade books and student academic progress reports into clean, formatted PDF documents with full Vietnamese Unicode support.',
        vi: 'Xuất bảng điểm chính thức và báo cáo tiến độ học tập của cả lớp ra tệp PDF chuẩn mực, hỗ trợ tiếng Việt có dấu trọn vẹn sẵn sàng in ấn hoặc lưu trữ.'
      },
      icon: <FileText className="w-10 h-10 text-purple-600" />,
      badge: { en: 'Reports & Export', vi: 'Báo cáo & Xuất file' }
    }
  ];

  const adminSteps: TourStep[] = [
    {
      title: {
        en: 'Welcome to Admin Control Center 🛡️',
        vi: 'Chào mừng Quản trị viên! 🛡️'
      },
      description: {
        en: 'Your centralized administrative command center. Oversee system accounts, regulate role permissions, audit platform activity, and safeguard school data.',
        vi: 'Trung tâm chỉ huy và quản trị hệ thống tập trung. Điều hành tài khoản người dùng, phân quyền vai trò, kiểm toán hoạt động và bảo vệ dữ liệu nhà trường.'
      },
      icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
      badge: { en: 'System Oversight', vi: 'Quản trị hệ thống' }
    },
    {
      title: {
        en: 'Live User & Student Directory 🔍',
        vi: 'Danh bạ thành viên toàn diện 🔍'
      },
      description: {
        en: 'Search and filter all registered students, teachers, and admins. Quickly inspect user metrics such as XP, learning streaks, grade levels, and contact emails.',
        vi: 'Tra cứu và lọc nhanh danh sách toàn bộ học sinh, giáo viên và quản trị viên. Kiểm tra các chỉ số XP, chuỗi ngày học tập liên tiếp, khối lớp và email liên hệ.'
      },
      icon: <Users className="w-10 h-10 text-indigo-600" />,
      badge: { en: 'Directory Search', vi: 'Tra cứu danh bạ' }
    },
    {
      title: {
        en: 'Role Assignment & Access Governance 🔑',
        vi: 'Phân quyền & Chuyển đổi vai trò 🔑'
      },
      description: {
        en: 'Instantly promote or reassign user roles between Student, Teacher, and Administrator. Changes sync immediately to Firestore security rules without reloading.',
        vi: 'Dễ dàng thay đổi vai trò giữa Học sinh, Giáo viên và Quản trị viên với đồng bộ Firestore tức thì. Phân quyền có hiệu lực ngay lập tức.'
      },
      icon: <Sparkles className="w-10 h-10 text-indigo-600" />,
      badge: { en: 'Access Control', vi: 'Kiểm soát truy cập' }
    },
    {
      title: {
        en: 'Account Moderation & Security ⚙️',
        vi: 'Quản lý tài khoản & An toàn dữ liệu ⚙️'
      },
      description: {
        en: 'Safely prune inactive accounts, protect super-admin credentials, and copy user emails with 1-click clipboard actions for streamlined communication.',
        vi: 'Dọn dẹp các tài khoản không còn sử dụng an toàn, bảo vệ thông tin quản trị viên cao cấp và sao chép email người dùng nhanh chóng với 1 cú nhấp chuột.'
      },
      icon: <CheckCircle2 className="w-10 h-10 text-indigo-600" />,
      badge: { en: 'Security & Governance', vi: 'Bảo mật & Kiểm soát' }
    },
    {
      title: {
        en: 'Directory CSV & Audit Export 📑',
        vi: 'Xuất dữ liệu & Báo cáo kiểm toán 📑'
      },
      description: {
        en: 'Download comprehensive user rosters, registration timestamps, and performance metrics as UTF-8 CSV spreadsheets for school administration and archival.',
        vi: 'Xuất toàn bộ danh sách tài khoản, thời gian tạo và chỉ số học tập ra tệp CSV chuẩn UTF-8 phục vụ công tác báo cáo hành chính và lưu trữ hồ sơ.'
      },
      icon: <FileText className="w-10 h-10 text-indigo-600" />,
      badge: { en: 'Data & Archival', vi: 'Xuất file & Lưu trữ' }
    }
  ];

  const steps = activeRole === 'admin' 
    ? adminSteps 
    : activeRole === 'teacher' 
    ? teacherSteps 
    : studentSteps;

  if (!isOpen) return null;

  const currentStep = steps[stepIndex] || steps[0];

  // Theme styling based on active role
  const themeColors = activeRole === 'admin' 
    ? {
        badge: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800',
        iconBg: 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400',
        activeDot: 'bg-indigo-600',
        nextBtn: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        finishBtn: 'bg-indigo-700 hover:bg-indigo-800 text-white',
        finishLabel: isVi ? 'Bắt đầu quản trị!' : 'Open Admin Console'
      }
    : activeRole === 'teacher'
    ? {
        badge: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800',
        iconBg: 'bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
        activeDot: 'bg-purple-600',
        nextBtn: 'bg-purple-600 hover:bg-purple-700 text-white',
        finishBtn: 'bg-purple-700 hover:bg-purple-800 text-white',
        finishLabel: isVi ? 'Bắt đầu giảng dạy!' : 'Enter Teacher Workspace'
      }
    : {
        badge: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800',
        iconBg: 'bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400',
        activeDot: 'bg-teal-600',
        nextBtn: 'bg-teal-600 hover:bg-teal-700 text-white',
        finishBtn: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        finishLabel: isVi ? 'Bắt đầu học ngay!' : 'Get Started!'
      };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-900 max-w-lg w-full rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between">
        
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full ${themeColors.badge}`}>
              {isVi ? currentStep.badge.vi : currentStep.badge.en}
            </span>
            <span className="text-xs font-semibold text-gray-400">
              {stepIndex + 1} / {steps.length}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-center my-4">
          <div className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center shadow-sm ${themeColors.iconBg}`}>
            {currentStep.icon}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight">
            {isVi ? currentStep.title.vi : currentStep.title.en}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-medium text-base sm:text-lg leading-relaxed">
            {isVi ? currentStep.description.vi : currentStep.description.en}
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div className="flex space-x-1.5">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === stepIndex ? `w-8 ${themeColors.activeDot}` : 'w-2 bg-gray-200 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            {stepIndex > 0 && (
              <button
                onClick={() => setStepIndex(i => i - 1)}
                className="px-5 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{isVi ? 'Trước' : 'Prev'}</span>
              </button>
            )}

            {stepIndex < steps.length - 1 ? (
              <button
                onClick={() => setStepIndex(i => i + 1)}
                className={`px-6 py-3 font-bold rounded-2xl shadow-lg transition-colors flex items-center gap-1.5 ${themeColors.nextBtn}`}
              >
                <span>{isVi ? 'Tiếp' : 'Next'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleClose}
                className={`px-6 py-3 font-bold rounded-2xl shadow-lg transition-colors flex items-center gap-2 ${themeColors.finishBtn}`}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>{themeColors.finishLabel}</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
