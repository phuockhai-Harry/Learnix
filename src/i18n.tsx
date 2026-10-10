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
  'login.popup_blocked': { en: 'The sign-in popup was blocked by your browser. Please allow popups for this site and try again.', vi: 'Cửa sổ đăng nhập bị trình duyệt chặn. Vui lòng cho phép mở popup trên trình duyệt của bạn và thử lại.' },
  'login.signin_error': { en: 'Sign-in could not be completed. Please try again.', vi: 'Đăng nhập không thành công. Vui lòng thử lại.' },
  'login.signing_in': { en: 'Connecting to Google...', vi: 'Đang mở đăng nhập Google...' },
  'login.tab_signin': { en: 'Sign In', vi: 'Đăng nhập' },
  'login.tab_signup': { en: 'Create Account', vi: 'Đăng ký tài khoản' },
  'login.email_label': { en: 'Email address', vi: 'Địa chỉ Email' },
  'login.email_placeholder': { en: 'student@example.com', vi: 'hocsinh@example.com' },
  'login.password_label': { en: 'Password', vi: 'Mật khẩu' },
  'login.password_placeholder': { en: 'Enter your password', vi: 'Nhập mật khẩu của bạn' },
  'login.confirm_password_label': { en: 'Confirm Password', vi: 'Xác nhận lại mật khẩu' },
  'login.confirm_password_placeholder': { en: 'Re-enter your password', vi: 'Nhập lại mật khẩu' },
  'login.forgot_password': { en: 'Forgot password?', vi: 'Quên mật khẩu?' },
  'login.send_reset_link': { en: 'Send Reset Link', vi: 'Gửi liên kết đặt lại mật khẩu' },
  'login.reset_modal_title': { en: 'Reset your password', vi: 'Đặt lại mật khẩu của bạn' },
  'login.reset_modal_desc': { en: 'Enter your account email and we will send a password reset link.', vi: 'Nhập email tài khoản của bạn để nhận liên kết đặt lại mật khẩu.' },
  'login.reset_sent_success': { en: 'Reset link sent! Please check your email inbox.', vi: 'Đã gửi liên kết! Vui lòng kiểm tra hộp thư email của bạn.' },
  'login.back_to_signin': { en: 'Back to Sign In', vi: 'Quay lại đăng nhập' },
  'login.or_continue_with': { en: 'Or continue with email', vi: 'Hoặc tiếp tục với email' },
  'login.passwords_do_not_match': { en: 'Passwords do not match.', vi: 'Mật khẩu xác nhận không khớp.' },
  'login.password_min_len': { en: 'Password must be at least 6 characters.', vi: 'Mật khẩu phải có ít nhất 6 ký tự.' },
  'login.email_req': { en: 'Please enter a valid email address.', vi: 'Vui lòng nhập địa chỉ email hợp lệ.' },
  'login.processing': { en: 'Please wait...', vi: 'Vui lòng chờ...' },
  'login.no_account_prompt': { en: "Don't have an account yet?", vi: 'Chưa có tài khoản?' },
  'login.have_account_prompt': { en: 'Already have an account?', vi: 'Đã có tài khoản?' },
  'login.auth_err_invalid_creds': { en: 'Invalid email or password. Please verify and try again.', vi: 'Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.' },
  'login.auth_err_email_in_use': { en: 'This email is already registered. Please sign in instead.', vi: 'Email này đã được đăng ký. Vui lòng chọn Đăng nhập.' },
  'login.auth_err_weak_pass': { en: 'Password is too weak. Please use at least 6 characters.', vi: 'Mật khẩu quá yếu. Vui lòng sử dụng ít nhất 6 ký tự.' },
  'login.auth_err_too_many': { en: 'Too many failed attempts. Please try again later or reset password.', vi: 'Quá nhiều lần thử thất bại. Vui lòng thử lại sau hoặc đặt lại mật khẩu.' },
  'login.verify_title': { en: 'Check your email & verify, then log in', vi: 'Kiểm tra email & xác thực tài khoản, sau đó đăng nhập' },
  'login.verify_desc': { en: 'A verification link has been sent to your email. Please click the link to verify your account, then return here to log in.', vi: 'Liên kết xác thực đã được gửi đến email của bạn. Vui lòng mở email và nhấn vào liên kết xác thực, sau đó quay lại đây đăng nhập.' },
  'login.verify_login_btn': { en: 'Log In', vi: 'Đăng nhập' },
  'login.verify_resend': { en: 'Resend verification email', vi: 'Gửi lại email xác thực' },
  'login.verify_resending': { en: 'Sending...', vi: 'Đang gửi...' },
  'login.verify_resent': { en: 'Verification email sent! Check your inbox.', vi: 'Đã gửi lại email xác thực! Vui lòng kiểm tra hộp thư.' },
  'login.verify_change_email': { en: 'Use a different email', vi: 'Sử dụng email khác' },
  'login.verify_enter_pass_prompt': { en: 'Enter password to resend email', vi: 'Nhập mật khẩu để gửi lại email' },
  'login.email_not_verified_banner': { en: 'Your email is not verified yet. Please check your inbox and verify your email first.', vi: 'Email của bạn chưa được xác thực. Vui lòng kiểm tra hộp thư và xác thực trước khi đăng nhập.' },

  // Layout
  'layout.logout': { en: 'Logout', vi: 'Đăng xuất' },

  // Student Dashboard
  'student.welcome': { en: 'Welcome to your Study Path,', vi: 'Chào mừng đến với Lộ trình Học tập của bạn,' },
  'student.subtitle': { en: 'Continue learning and climbing the leaderboard.', vi: 'Tiếp tục học hỏi và leo lên bảng xếp hạng.' },
  'student.create_quiz': { en: 'Create Quiz', vi: 'Tạo Câu hỏi' },
  'student.available_quizzes': { en: 'My Created Quizzes', vi: 'Câu hỏi tôi tạo' },
  'student.start_challenge': { en: 'Start Challenge', vi: 'Bắt đầu Thử thách' },
  'student.no_quizzes': { en: 'No active quizzes found.', vi: 'Không tìm thấy câu hỏi đang hoạt động.' },
  'student.analytics': { en: 'Progress Analytics', vi: 'Phân tích Tiến độ' },
  'student.complete_quizzes': { en: 'Complete quizzes to see your stats!', vi: 'Hoàn thành câu hỏi để xem thống kê của bạn!' },
  'student.leaderboard': { en: 'Class Leaderboard', vi: 'Bảng xếp hạng Lớp' },
  'student.no_scores': { en: 'No scores recorded yet. Be the first!', vi: 'Chưa có điểm số nào được ghi lại. Hãy là người đầu tiên!' },
  'student.pts': { en: 'pts', vi: 'điểm' },
  'activity.title': { en: 'Recent Activity', vi: 'Hoạt động Gần đây' },
  'activity.subtitle': { en: 'Chronological timeline of your completed quizzes and achieved milestones.', vi: 'Dòng thời gian các bài kiểm tra đã hoàn thành và mục tiêu học tập đã đạt được.' },
  'activity.all': { en: 'All Activities', vi: 'Tất cả' },
  'activity.quizzes': { en: 'Completed Quizzes', vi: 'Bài kiểm tra' },
  'activity.goals': { en: 'Goals & Badges', vi: 'Mục tiêu & Huy hiệu' },
  'activity.no_activity': { en: 'No recent activity recorded yet. Take a quiz or complete a study goal to get started!', vi: 'Chưa có hoạt động nào được ghi nhận. Hãy làm một bài kiểm tra hoặc hoàn thành mục tiêu ôn tập để bắt đầu!' },
  'activity.start_quiz': { en: 'Take a Quiz Now', vi: 'Làm bài kiểm tra ngay' },
  'activity.retake': { en: 'Retake', vi: 'Làm lại' },
  'activity.view_plan': { en: 'Study Planner', vi: 'Lịch ôn thi' },
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
  'teacher.expel': { en: 'Delete', vi: 'Xóa' },
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
  'layout.tutor': { en: 'Gemini AI Tutor', vi: 'Gia sư Gemini AI' },
  'layout.flashcards': { en: 'Flashcards', vi: 'Thẻ ghi nhớ' },
  'layout.planner': { en: 'Study Planner', vi: 'Lịch ôn thi' },
  'layout.achievements': { en: 'Achievements', vi: 'Thành tựu' },
  'layout.reports': { en: 'Reports', vi: 'Báo cáo Học tập' },
  'layout.account': { en: 'Account', vi: 'Tài khoản' },
  'layout.learning': { en: 'Learning & Quizzes', vi: 'Học tập & Rèn luyện' },

  // Account
  'account.title': { en: 'Account Settings', vi: 'Cài đặt Tài khoản' },
  'account.role': { en: 'Role', vi: 'Vai trò' },
  'account.role_notice': { en: 'Role cannot be changed.', vi: 'Vai trò không thể thay đổi.' },
  'account.email': { en: 'Email', vi: 'Email' },
  'account.email_notice': { en: 'Email is managed by Google.', vi: 'Email được quản lý bởi Google.' },
  'account.real_name': { en: 'Real Name', vi: 'Họ và tên' },
  'account.code_name': { en: 'Display/Code Name', vi: 'Tên hiển thị / Biệt danh' },
  'account.grade': { en: 'Grade', vi: 'Khối lớp' },
  'account.grade_option': { en: 'Grade', vi: 'Lớp' },
  'account.save': { en: 'Save Changes', vi: 'Lưu thay đổi' },
  'account.saving': { en: 'Saving...', vi: 'Đang lưu...' },
  'account.success': { en: 'Profile updated successfully! Refresh to see changes.', vi: 'Cập nhật hồ sơ thành công! Tải lại trang để thấy thay đổi.' },
  'account.error': { en: 'Failed to update profile', vi: 'Cập nhật hồ sơ thất bại' },

  // Calendar
  'calendar.title': { en: 'Practice History & Streak Calendar', vi: 'Lịch sử Luyện tập & Chuỗi Ngày' },
  'calendar.week': { en: 'Week', vi: 'Tuần' },
  'calendar.month': { en: 'Month', vi: 'Tháng' },
  'calendar.today': { en: 'Today', vi: 'Hôm nay' },
  'calendar.streak_kept': { en: 'Streak Kept', vi: 'Duy trì Chuỗi' },
  'calendar.streak_active': { en: 'Active Streak', vi: 'Chuỗi Hoạt động' },
  'calendar.quizzes_done': { en: 'quizzes', vi: 'bài tập' },
  'calendar.quiz_done': { en: 'quiz', vi: 'bài tập' },
  'calendar.rest_day': { en: 'Rest day', vi: 'Ngày nghỉ' },
  'calendar.practice_today': { en: 'Practice today to keep your streak!', vi: 'Luyện tập hôm nay để duy trì chuỗi!' },
  'calendar.start_quiz': { en: 'Practice Now', vi: 'Luyện tập ngay' },
  'calendar.score': { en: 'Score', vi: 'Điểm' },
  'calendar.stats': { en: 'Calendar Stats', vi: 'Thống kê Lịch' },
  'calendar.total_days': { en: 'Days Practiced', vi: 'Ngày Luyện tập' },
  'calendar.streak_days': { en: 'Streak Days', vi: 'Ngày Chuỗi' },

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
  'practice.streak_start': { en: 'Complete a quiz today to start your streak!', vi: 'Làm bài tập hôm nay để bắt đầu chuỗi ngày!' },
  'practice.streak_keep': { en: 'Practice today to keep your streak alive!', vi: 'Luyện tập hôm nay để duy trì chuỗi ngày!' },
  'practice.quests': { en: 'Daily Quests', vi: 'Nhiệm vụ Hàng ngày' },
  'practice.quests_subtitle': { en: 'Complete tasks to earn bonus XP.', vi: 'Hoàn thành nhiệm vụ để kiếm thêm XP.' },
  'practice.time_left': { en: '12h 45m left', vi: 'Còn 12h 45m' },
  'practice.go': { en: 'Go', vi: 'Đi' },
  'practice.history': { en: 'Practice History', vi: 'Lịch sử Luyện tập' },

  // Achievements
  'achievements.title': { en: 'Achievements & Trophies', vi: 'Thành tựu & Cúp' },
  'achievements.subtitle': { en: 'Collect badges and show off your mastery to the class.', vi: 'Thu thập huy hiệu và thể hiện sự thành thạo của bạn với lớp học.' },
  'achievements.total_xp': { en: 'Total XP', vi: 'Tổng XP' },

  // New Student Dashboard & Homework keys
  'student.total_xp': { en: 'Total XP', vi: 'Tổng điểm XP' },
  'student.streak': { en: 'Study Streak', vi: 'Chuỗi học tập' },
  'student.badge_unlocked': { en: 'Achievement Unlocked', vi: 'Thành tựu Mở khóa' },
  'student.homework_title': { en: 'Assigned Homework & Quizzes', vi: 'Bài tập Về nhà & Bài kiểm tra' },
  'student.practice_quizzes': { en: 'Practice Quizzes & Learning Paths', vi: 'Luyện tập & Lộ trình Học tập' },
  'student.assignments_due_soon': { en: 'Assignments Due Soon!', vi: 'Sắp Hết Hạn!' },
  'student.due_within_24h': { en: 'You have assignment(s) due within 24 hours.', vi: 'Bạn có bài tập sắp hết hạn trong vòng 24 giờ.' },
  'student.view': { en: 'View', vi: 'Xem' },
  'student.my_homework': { en: 'My Homework', vi: 'Bài tập Về nhà' },
  'student.completed': { en: 'Completed', vi: 'Đã hoàn thành' },
  'student.missed': { en: 'Missed (-100 XP)', vi: 'Đã bỏ lỡ (-100 XP)' },
  'student.due_soon': { en: 'Due Soon', vi: 'Sắp hết hạn' },
  'student.pending': { en: 'Pending', vi: 'Đang chờ' },
  'student.tutor': { en: 'Tutor', vi: 'Gia sư' },
  'student.do_it': { en: 'Do It', vi: 'Làm ngay' },
  'student.my_badges': { en: 'My Badges', vi: 'Huy hiệu của tôi' },
  'student.earn_badges': { en: 'Earn badges by completing quizzes!', vi: 'Hoàn thành bài tập để nhận huy hiệu!' },
  'student.practice_history': { en: 'Practice History', vi: 'Lịch sử Luyện tập' },

  // Practice Challenges
  'practice.challenge1': { en: 'Complete 3 Math problems', vi: 'Hoàn thành 3 bài toán' },
  'practice.challenge2': { en: 'Score 100% on any quiz', vi: 'Đạt 100% điểm trong bài tập bất kỳ' },
  'practice.challenge3': { en: 'Learn a new concept in Computer Science', vi: 'Học một khái niệm Khoa học Máy tính mới' },
  'practice.activity_level': { en: 'Activity level', vi: 'Mức độ hoạt động' },

  // AI Study Assistant
  'student.ai_study_assistant': { en: 'AI Study Assistant', vi: 'Trợ lý Học tập AI' },
  'student.select_topic': { en: 'Select or Enter a Study Topic', vi: 'Chọn hoặc Nhập Chủ đề Học tập' },
  'student.study_prompt_placeholder': { en: 'e.g., Fractions, Photosynthesis, Logic gates...', vi: 'Ví dụ: Phân số, Quang hợp, Logic...' },
  'student.get_study_guide': { en: 'Get Study Guide', vi: 'Tạo Hướng dẫn' },
  'student.regenerate': { en: 'Regenerate', vi: 'Tạo lại' },
  'student.generating_summary': { en: 'Generating your personalized study guide...', vi: 'Đang tạo hướng dẫn học tập cá nhân của bạn...' },
  'student.mastery_progress': { en: 'Mastery Progress', vi: 'Tiến độ Thông thạo' },
  'student.score': { en: 'Score', vi: 'Điểm số' },

  // Chat keys
  'chat.ask_hint': { en: 'Ask for a hint...', vi: 'Yêu cầu gợi ý...' },
  'chat.ai_tutor': { en: 'AI Tutor', vi: 'Gia sư AI' },
  'chat.helping_with': { en: 'Helping with', vi: 'Đang giúp với' },
  'chat.initial_greeting': { en: 'Hi! I\'m your AI tutor. I see you\'re working on', vi: 'Chào bạn! Mình là gia sư AI. Mình thấy bạn đang làm bài tập' },
  'chat.need_hint': { en: 'Need a hint?', vi: 'Bạn có cần gợi ý không?' },
  'chat.error': { en: 'Sorry, I encountered an error', vi: 'Xin lỗi, đã xảy ra lỗi' },
  'chat.network_error': { en: 'Sorry, I couldn\'t connect to the server.', vi: 'Xin lỗi, không thể kết nối đến máy chủ.' },

  // Gemini Study Chatbot
  'gemini_chat.title': { en: 'Gemini AI Study Tutor', vi: 'Gia sư AI Gemini' },
  'gemini_chat.subtitle': { en: 'Ask questions, review key topics, and test your knowledge with interactive AI study coaching.', vi: 'Hỏi đáp câu hỏi học tập, khám phá chủ đề và thử thách kiến thức cùng trợ lý AI.' },
  'gemini_chat.role_socratic': { en: 'Socratic Guide', vi: 'Gợi mở Socratic' },
  'gemini_chat.role_socratic_desc': { en: 'Guides you with hints and questions without giving away answers directly.', vi: 'Gợi ý từng bước, giúp bạn tự suy luận và tìm ra đáp án.' },
  'gemini_chat.role_quizmaster': { en: 'Quizmaster', vi: 'Trắc nghiệm Thử thách' },
  'gemini_chat.role_quizmaster_desc': { en: 'Asks bite-sized practice questions, evaluates your answers, and tests recall.', vi: 'Đưa ra câu hỏi trắc nghiệm, chấm điểm và giải thích chi tiết.' },
  'gemini_chat.role_explainer': { en: 'Concept Explainer', vi: 'Giải thích Dễ hiểu' },
  'gemini_chat.role_explainer_desc': { en: 'Simplifies complex concepts using relatable everyday analogies.', vi: 'Minh họa khái niệm trừu tượng bằng ví dụ đời sống sinh động.' },
  'gemini_chat.role_speed': { en: 'Rapid Review', vi: 'Ôn thi Cấp tốc' },
  'gemini_chat.role_speed_desc': { en: 'High-yield bullet points, core formulas, and essential exam facts.', vi: 'Tổng hợp công thức trọng tâm, ghi nhớ nhanh và mẹo làm bài thi.' },
  'gemini_chat.select_topic': { en: 'Study Topic', vi: 'Chủ đề Học tập' },
  'gemini_chat.custom_topic_placeholder': { en: 'Or enter custom topic (e.g. Quadratic Equations, Photosynthesis)...', vi: 'Hoặc nhập chủ đề tự chọn (ví dụ: Phương trình bậc hai, Quang hợp)...' },
  'gemini_chat.model_balanced': { en: 'General Study (gemini-3.5-flash)', vi: 'Học tập Toàn diện (gemini-3.5-flash)' },
  'gemini_chat.model_fast': { en: 'Fast Q&A (gemini-3.1-flash-lite)', vi: 'Phản hồi Nhanh (gemini-3.1-flash-lite)' },
  'gemini_chat.model_pro': { en: 'Deep STEM Reasoning (gemini-3.1-pro-preview)', vi: 'Suy luận Chuyên sâu (gemini-3.1-pro-preview)' },
  'gemini_chat.chip_quiz': { en: '🎯 Quiz me on this topic', vi: '🎯 Đố trắc nghiệm mình về chủ đề này' },
  'gemini_chat.chip_explain': { en: '💡 Explain simply with an analogy', vi: '💡 Giải thích dễ hiểu kèm ví dụ' },
  'gemini_chat.chip_practice': { en: '📝 Give me a practice problem', vi: '📝 Cho mình một bài tập tự luyện' },
  'gemini_chat.chip_steps': { en: '🔍 Show step-by-step method', vi: '🔍 Hướng dẫn các bước giải bài' },
  'gemini_chat.chip_formula': { en: '⚡ Key rules & formulas summary', vi: '⚡ Tóm tắt công thức trọng tâm' },
  'gemini_chat.input_placeholder': { en: 'Ask a question or topic to study...', vi: 'Hỏi bài, đố kiến thức, hoặc yêu cầu giải thích...' },
  'gemini_chat.clear_history': { en: 'Clear History', vi: 'Xóa hội thoại' },
  'gemini_chat.new_session': { en: 'New Topic Chat', vi: 'Phiên học mới' },
  'gemini_chat.initial_prompt': { en: 'Hello! I am your Gemini Study Tutor. Choose a topic above or ask me any question to start learning together.', vi: 'Xin chào! Mình là Gia sư Học tập Gemini. Hãy chọn một chủ đề phía trên hoặc đặt bất kỳ câu hỏi nào để chúng ta cùng ôn tập nhé!' },
  'gemini_chat.start_voice_call': { en: 'Voice Call (Gemini 3.8 Live)', vi: 'Gọi thoại trực tiếp (Gemini 3.8 Live)' },
  'gemini_chat.voice_dictation_listening': { en: 'Listening to your voice...', vi: 'Đang lắng nghe bạn nói...' },
  'gemini_chat.voice_dictation_start': { en: 'Voice typing (Click to speak)', vi: 'Nhập bằng giọng nói (Bấm để nói)' },
  'gemini_chat.voice_dictation_stop': { en: 'Stop recording', vi: 'Dừng ghi âm' },
  'gemini_chat.tts_read_aloud': { en: 'Listen to response', vi: 'Nghe đọc câu trả lời' },
  'gemini_chat.tts_stop': { en: 'Stop reading', vi: 'Dừng đọc' },
  'gemini_chat.conversations': { en: 'Conversations', vi: 'Cuộc trò chuyện' },
  'gemini_chat.new_chat': { en: '+ New Chat', vi: '+ Cuộc trò chuyện mới' },
  'gemini_chat.delete_chat': { en: 'Delete', vi: 'Xóa' },
  'gemini_chat.rename_chat': { en: 'Rename', vi: 'Đổi tên' },
  'gemini_chat.student_account': { en: 'Student Account', vi: 'Tài khoản học sinh' },
  'gemini_chat.no_conversations': { en: 'No conversation history yet', vi: 'Chưa có lịch sử trò chuyện nào' },
  'gemini_chat.switch_conversation': { en: 'Switch conversation', vi: 'Chuyển cuộc trò chuyện' },
  'gemini_chat.current_student_workspace': { en: 'Student Private Workspace', vi: 'Không gian Học tập Cá nhân' },

  // Offline & Toast notifications
  'toast.offline_title': { en: 'You are currently offline', vi: 'Bạn đang ngoại tuyến' },
  'toast.offline_desc': { en: 'Don\'t worry! Your quiz progress, XP, and answers are saved locally and will automatically sync once your connection is restored.', vi: 'Đừng lo lắng! Tiến độ học tập, điểm XP và câu trả lời của bạn được lưu an toàn trên máy và sẽ tự động đồng bộ khi có kết nối trở lại.' },
  'toast.offline_badge': { en: 'Offline Mode', vi: 'Chế độ Ngoại tuyến' },
  'toast.auto_sync_badge': { en: 'Auto-Sync Protected', vi: 'Tự động Đồng bộ Bảo vệ' },
  'toast.online_title': { en: 'Back online!', vi: 'Đã có kết nối Internet!' },
  'toast.online_desc': { en: 'Connection restored. Your learning progress is safely synchronized.', vi: 'Đã khôi phục kết nối. Tiến trình học tập của bạn đã được đồng bộ an toàn lên hệ thống.' },
  'toast.sync_success': { en: 'Progress synchronized successfully!', vi: 'Đã đồng bộ tiến độ thành công!' },
  'toast.pending_items': { en: 'item(s) saved locally pending sync', vi: 'mục đã lưu cục bộ chờ đồng bộ' },
  'toast.sync_now': { en: 'Sync Now', vi: 'Đồng bộ ngay' },
  'toast.test_offline': { en: 'Simulate Offline', vi: 'Thử nghiệm Ngoại tuyến' },
  'toast.reconnect': { en: 'Reconnect', vi: 'Kết nối lại' },
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
