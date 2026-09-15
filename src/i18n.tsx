import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'vi';

interface Translations {
  [key: string]: {
    en: string;
    vi: string;
  };
}

export const translations: Translations = {
  // Login
  'login.title': { en: 'Complete your profile', vi: 'Hoàn thiện hồ sơ của bạn' },
  'login.subtitle': { en: 'Choose your role carefully, this cannot be changed later.', vi: 'Chọn vai trò của bạn cẩn thận, điều này không thể thay đổi sau này.' },
  'login.role_label': { en: 'I am a...', vi: 'Tôi là...' },
  'login.student': { en: 'Student', vi: 'Học sinh' },
  'login.teacher': { en: 'Teacher', vi: 'Giáo viên' },
  'login.real_name': { en: 'Real Name', vi: 'Họ và tên' },
  'login.code_name': { en: 'Code Name (for leaderboards K-6)', vi: 'Biệt danh (cho bảng xếp hạng K-6)' },
  'login.create_profile': { en: 'Create Profile', vi: 'Tạo hồ sơ' },
  'login.app_desc': { en: 'Interactive lessons, gamified challenges, and collaborative live classroom assessments.', vi: 'Bài học tương tác, thử thách trò chơi hóa và đánh giá lớp học trực tiếp hợp tác.' },
  'login.signin_google': { en: 'Sign in with Google', vi: 'Đăng nhập bằng Google' },
  'login.real_name_req': { en: 'Real name is required', vi: 'Yêu cầu nhập họ và tên' },
  'login.code_name_req': { en: 'Code name is required for students', vi: 'Yêu cầu nhập biệt danh cho học sinh' },
  'login.fail': { en: 'Failed to create profile', vi: 'Không thể tạo hồ sơ' },

  // Layout
  'layout.logout': { en: 'Logout', vi: 'Đăng xuất' },

  // Student Dashboard
  'student.welcome': { en: 'Welcome to your Study Path,', vi: 'Chào mừng đến với Lộ trình Học tập của bạn,' },
  'student.subtitle': { en: 'Continue learning and climbing the leaderboard.', vi: 'Tiếp tục học hỏi và leo lên bảng xếp hạng.' },
  'student.create_quiz': { en: 'Create Quiz', vi: 'Tạo Câu hỏi' },
  'student.available_quizzes': { en: 'Available Quizzes', vi: 'Câu hỏi có sẵn' },
  'student.start_challenge': { en: 'Start Challenge', vi: 'Bắt đầu Thử thách' },
  'student.no_quizzes': { en: 'No active quizzes found.', vi: 'Không tìm thấy câu hỏi đang hoạt động.' },
  'student.analytics': { en: 'Progress Analytics', vi: 'Phân tích Tiến độ' },
  'student.complete_quizzes': { en: 'Complete quizzes to see your stats!', vi: 'Hoàn thành câu hỏi để xem thống kê của bạn!' },
  'student.leaderboard': { en: 'Class Leaderboard', vi: 'Bảng xếp hạng Lớp' },
  'student.no_scores': { en: 'No scores recorded yet. Be the first!', vi: 'Chưa có điểm số nào được ghi lại. Hãy là người đầu tiên!' },
  'student.pts': { en: 'pts', vi: 'điểm' },
  'student.notify_goal': { en: 'Goal Update!', vi: 'Cập nhật Mục tiêu!' },
  'student.notify_body': { en: 'You\'re doing great! Keep completing quizzes to reach your weekly learning goal.', vi: 'Bạn đang làm rất tốt! Tiếp tục hoàn thành các câu hỏi để đạt mục tiêu học tập hàng tuần.' },
  'student.notify_reminders': { en: 'Goal Reminders', vi: 'Nhắc nhở Mục tiêu' },
  'student.test_knowledge': { en: 'Test your knowledge!', vi: 'Kiểm tra kiến thức của bạn!' },
  'student.loading': { en: 'Loading your personalized study path...', vi: 'Đang tải lộ trình học tập cá nhân của bạn...' },

  // Teacher Dashboard
  'teacher.admin': { en: 'Teacher Admin', vi: 'Quản trị Giáo viên' },
  'teacher.manage': { en: 'Manage classrooms and track student progress.', vi: 'Quản lý lớp học và theo dõi tiến độ của học sinh.' },
  'teacher.export': { en: 'Export Report', vi: 'Xuất Báo cáo' },
  'teacher.create_quiz': { en: 'Create Quiz', vi: 'Tạo Câu hỏi' },
  'teacher.my_quizzes': { en: 'My Quizzes', vi: 'Câu hỏi của tôi' },
  'teacher.public': { en: 'Public', vi: 'Công khai' },
  'teacher.private': { en: 'Private', vi: 'Riêng tư' },
  'teacher.view': { en: 'View', vi: 'Xem' },
  'teacher.no_quizzes': { en: 'You haven\'t created any quizzes yet.', vi: 'Bạn chưa tạo bất kỳ câu hỏi nào.' },
  'teacher.recent_subs': { en: 'Recent Submissions', vi: 'Bài nộp gần đây' },
  'teacher.score': { en: 'Score:', vi: 'Điểm:' },
  'teacher.no_subs': { en: 'No submissions yet.', vi: 'Chưa có bài nộp nào.' },
  'teacher.loading': { en: 'Loading Teacher Admin...', vi: 'Đang tải Quản trị Giáo viên...' },
  'teacher.report': { en: 'Learnix - Class Performance Report', vi: 'Learnix - Báo cáo thành tích lớp học' },
  'teacher.manage_students': { en: 'Manage Students', vi: 'Quản lý Học sinh' },
  'teacher.student_email_placeholder': { en: 'Student email address...', vi: 'Địa chỉ email học sinh...' },
  'teacher.add_student': { en: 'Add Student', vi: 'Thêm Học sinh' },
  'teacher.adding': { en: 'Adding...', vi: 'Đang thêm...' },
  'teacher.my_students': { en: 'My Students', vi: 'Học sinh của tôi' },
  'teacher.registered': { en: 'Registered', vi: 'Đã đăng ký' },
  'teacher.pending': { en: 'Pending', vi: 'Chờ đăng ký' },
  'teacher.no_students': { en: 'No students added yet.', vi: 'Chưa thêm học sinh nào.' },
  'teacher.classes': { en: 'Classes', vi: 'Lớp học' },
  'teacher.add_class': { en: 'Add Class', vi: 'Thêm Lớp' },
  'teacher.class_name_placeholder': { en: 'Class name...', vi: 'Tên lớp học...' },
  'teacher.manage_classes': { en: 'Manage Classes & Students', vi: 'Quản lý Lớp học & Học sinh' },
  'teacher.select_class': { en: 'Select class...', vi: 'Chọn lớp...' },
  'teacher.no_classes': { en: 'No classes yet. Create one above!', vi: 'Chưa có lớp nào. Hãy tạo một lớp!' },
  'teacher.class_code': { en: 'Class Code', vi: 'Mã lớp' },
  'teacher.copy_link': { en: 'Copy Invite Link', vi: 'Sao chép Liên kết Mời' },
  'teacher.link_copied': { en: 'Link Copied!', vi: 'Đã sao chép!' },
  'teacher.expel': { en: 'Expel', vi: 'Xóa khỏi lớp' },
  'teacher.email_not_found': { en: 'Student email not found in the system.', vi: 'Không tìm thấy email học sinh trong hệ thống.' },

  // Student joining
  'student.join_class': { en: 'Join a Class', vi: 'Tham gia Lớp học' },
  'student.joining_class': { en: 'Joining class...', vi: 'Đang tham gia lớp...' },
  'student.joined_success': { en: 'Successfully joined!', vi: 'Tham gia thành công!' },
  'student.class_code_placeholder': { en: 'Enter class code...', vi: 'Nhập mã lớp...' },
  'student.join': { en: 'Join', vi: 'Tham gia' },
  'student.invalid_code': { en: 'Invalid class code.', vi: 'Mã lớp không hợp lệ.' },
  'student.my_classes': { en: 'My Classes', vi: 'Lớp học của tôi' },
  'student.teacher': { en: 'Teacher', vi: 'Giáo viên' },

  // Quiz Creator
  'creator.title': { en: 'Create New Quiz', vi: 'Tạo Câu hỏi Mới' },
  'creator.quiz_title': { en: 'Quiz Title', vi: 'Tiêu đề Câu hỏi' },
  'creator.make_public': { en: 'Make this quiz public', vi: 'Đặt câu hỏi này ở chế độ công khai' },
  'creator.question': { en: 'Question', vi: 'Câu hỏi' },
  'creator.option': { en: 'Option', vi: 'Lựa chọn' },
  'creator.add_question': { en: 'Add Question', vi: 'Thêm Câu hỏi' },
  'creator.save_quiz': { en: 'Save Quiz', vi: 'Lưu Câu hỏi' },
  'creator.saving': { en: 'Saving...', vi: 'Đang lưu...' },
  'creator.fail': { en: 'Failed to save quiz. Make sure all fields are filled.', vi: 'Lỗi lưu câu hỏi. Đảm bảo đã điền tất cả các trường.' },

  // Quiz Runner
  'runner.complete': { en: 'Challenge Complete!', vi: 'Hoàn thành Thử thách!' },
  'runner.final_score': { en: 'Your final score', vi: 'Điểm số cuối cùng của bạn' },
  'runner.return': { en: 'Return to Dashboard', vi: 'Trở về Bảng điều khiển' },
  'runner.loading': { en: 'Loading challenge...', vi: 'Đang tải thử thách...' },
  'runner.score': { en: 'Score:', vi: 'Điểm:' },
  'runner.not_found': { en: 'Quiz not found', vi: 'Không tìm thấy câu hỏi' },
  'runner.of': { en: 'of', vi: 'trên' },

  // Layout Sidebar
  'layout.dashboard': { en: 'Dashboard', vi: 'Bảng điều khiển' },
  'layout.explore': { en: 'Explore', vi: 'Khám phá' },
  'layout.practice': { en: 'Practice', vi: 'Luyện tập' },
  'layout.achievements': { en: 'Achievements', vi: 'Thành tựu' },
  'layout.learning': { en: 'Learning', vi: 'Học tập' },

  // Explore
  'explore.title': { en: 'Explore Courses', vi: 'Khám phá Khóa học' },
  'explore.subtitle': { en: 'Discover new learning paths and continue where you left off.', vi: 'Khám phá các lộ trình học tập mới và tiếp tục nơi bạn đã dừng lại.' },
  'explore.paths': { en: 'Your Learning Paths', vi: 'Lộ trình Học tập của Bạn' },
  'explore.modules': { en: 'Modules', vi: 'Học phần' },
  'explore.progress': { en: 'Progress', vi: 'Tiến độ' },
  'explore.continue': { en: 'Continue', vi: 'Tiếp tục' },
  'explore.start': { en: 'Start Path', vi: 'Bắt đầu Lộ trình' },
  'explore.recommended': { en: 'Recommended for You', vi: 'Đề xuất cho Bạn' },
  'explore.start_lesson': { en: 'Start Lesson', vi: 'Bắt đầu Bài học' },

  // Practice
  'practice.streak': { en: 'Day Streak!', vi: 'Ngày Liên tiếp!' },
  'practice.streak_subtitle': { en: 'You\'re on fire! Keep it up tomorrow.', vi: 'Bạn đang rất tuyệt! Hãy tiếp tục vào ngày mai.' },
  'practice.quests': { en: 'Daily Quests', vi: 'Nhiệm vụ Hàng ngày' },
  'practice.quests_subtitle': { en: 'Complete tasks to earn bonus XP.', vi: 'Hoàn thành nhiệm vụ để kiếm thêm XP.' },
  'practice.time_left': { en: '12h 45m left', vi: 'Còn 12h 45m' },
  'practice.go': { en: 'Go', vi: 'Đi' },
  'practice.history': { en: 'Practice History', vi: 'Lịch sử Luyện tập' },

  // Achievements
  'achievements.title': { en: 'Achievements & Trophies', vi: 'Thành tựu & Cúp' },
  'achievements.subtitle': { en: 'Collect badges and show off your mastery to the class.', vi: 'Thu thập huy hiệu và thể hiện sự thành thạo của bạn với lớp học.' },
  'achievements.total_xp': { en: 'Total XP', vi: 'Tổng XP' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved === 'en' || saved === 'vi') {
      setLanguage(saved);
    } else {
      setLanguage('vi');
      localStorage.setItem('language', 'vi');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'en' ? 'vi' : 'en';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
