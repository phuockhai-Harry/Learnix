import React, { useState, useEffect } from 'react';
import { Bell, BookOpen, Award, X, CheckCircle, Clock, Flame } from 'lucide-react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../auth';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n';

export function NotificationCenter() {
  const { user, profile } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isVi = language === 'vi';

  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(false);

  useEffect(() => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        setPushEnabled(true);
      }
    }
  }, []);

  const requestPushPermission = async () => {
    if (!('Notification' in window)) {
      alert(isVi ? 'Trình duyệt của bạn không hỗ trợ thông báo đẩy.' : 'Your browser does not support push notifications.');
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      setPushEnabled(true);
      new Notification(isVi ? 'Đã bật thông báo nhắc nhở!' : 'Streak Reminders Enabled!', {
        body: isVi ? 'Bạn sẽ nhận được nhắc nhở ôn tập lúc 8 giờ tối hàng ngày.' : 'You will be reminded to complete your daily streak at 8 PM.'
      });
    }
  };

  useEffect(() => {
    if (!user || !profile) return;

    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const notifs: any[] = [];
        const todayStr = new Date().toLocaleDateString('en-CA');

        // Check if student has practiced today by 8 PM
        const currentHour = new Date().getHours();
        if (profile.role === 'student') {
          const hasPracticedToday = profile.lastActiveDate === todayStr;
          if (currentHour >= 20 && !hasPracticedToday) {
            notifs.push({
              id: 'streak-reminder-8pm',
              type: 'streak',
              title: isVi ? '🔥 Nhắc nhở chuỗi học tập (Streak)!' : '🔥 Daily Streak Reminder!',
              subtitle: isVi ? 'Bạn chưa hoàn thành mục tiêu học tập hôm nay. Hãy ôn tập ngay để giữ chuỗi!' : "You haven't completed your practice today. Complete a quiz to keep your streak!",
              quizId: 'math-foundations',
              timestamp: Date.now()
            });

            // Trigger browser push notification if enabled
            if ('Notification' in window && Notification.permission === 'granted') {
              new Notification(isVi ? '🔥 Cảnh báo Chuỗi học tập!' : '🔥 Streak Alert!', {
                body: isVi ? 'Hãy hoàn thành một bài kiểm tra trước khi hết ngày để duy trì chuỗi học tập!' : 'Complete a quiz before the day ends to keep your streak alive!'
              });
            }
          }

          const email = user.email || profile.realName;
          const classesQuery = query(collection(db, 'classes'), where('studentEmails', 'array-contains', email));
          const classSnap = await getDocs(classesQuery);
          
          classSnap.forEach(docSnap => {
            const cData = docSnap.data();
            const hws = cData.homeworks || [];
            hws.forEach((hw: any) => {
              notifs.push({
                id: `hw-${docSnap.id}-${hw.quizId}`,
                type: 'homework',
                title: isVi ? `Bài tập mới được giao: ${hw.title}` : `New Quiz Assigned: ${hw.title}`,
                subtitle: isVi ? `Hạn nộp: ${hw.dueDate || 'Sớm nhất'}` : `Due: ${hw.dueDate || 'Upcoming'}`,
                quizId: hw.quizId,
                timestamp: hw.dueDate ? new Date(hw.dueDate).getTime() : Date.now()
              });
            });
          });

          // Fetch submissions
          const subQuery = query(collection(db, 'submissions'), where('studentId', '==', user.uid));
          const subSnap = await getDocs(subQuery);
          subSnap.forEach(subDoc => {
            const sData = subDoc.data();
            notifs.push({
              id: `sub-${subDoc.id}`,
              type: 'grade',
              title: isVi ? `Đã có điểm: ${sData.quizTitle || 'Bài kiểm tra'}` : `Grade Posted: ${sData.quizTitle || 'Quiz'}`,
              subtitle: isVi ? `Điểm số đạt được: ${sData.score}/100` : `Score achieved: ${sData.score}/100`,
              quizId: sData.quizId,
              timestamp: sData.completedAt?.toMillis ? sData.completedAt.toMillis() : Date.now()
            });
          });
        } else if (profile.role === 'teacher') {
          const subQuery = query(collection(db, 'submissions'), where('teacherId', '==', user.uid));
          const subSnap = await getDocs(subQuery);
          subSnap.forEach(subDoc => {
            const sData = subDoc.data();
            notifs.push({
              id: `t-sub-${subDoc.id}`,
              type: 'teacher_sub',
              title: isVi ? `Học sinh đã nộp bài` : `New Student Submission`,
              subtitle: isVi ? `Điểm: ${sData.score}/100` : `Score: ${sData.score}/100`,
              quizId: sData.quizId,
              timestamp: sData.completedAt?.toMillis ? sData.completedAt.toMillis() : Date.now()
            });
          });
        }

        notifs.sort((a, b) => b.timestamp - a.timestamp);
        setNotifications(notifs.slice(0, 10));
      } catch (err) {
        console.error('Error fetching notifications:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [user, profile, isVi]);

  return (
    <div className="relative flex items-center gap-2">
      {profile?.role === 'student' && !pushEnabled && (
        <button
          onClick={requestPushPermission}
          className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-3 py-1.5 rounded-full border border-teal-200 dark:border-teal-800 hover:bg-teal-100 transition-colors"
          title="Enable 8 PM Streak Reminders"
        >
          <Clock className="w-3.5 h-3.5" />
          <span>{isVi ? 'Bật nhắc 20:00' : 'Enable 8 PM Reminders'}</span>
        </button>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5" />
        {notifications.length > 0 && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-black text-gray-900 dark:text-white flex items-center gap-2">
              <Bell className="w-4 h-4 text-teal-600" />
              {isVi ? 'Thông báo & Nhắc nhở' : 'Notifications & Reminders'}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800">
            {loading ? (
              <div className="p-6 text-center text-gray-500 font-medium text-sm">
                {isVi ? 'Đang tải thông báo...' : 'Loading notifications...'}
              </div>
            ) : notifications.length > 0 ? (
              notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => {
                    setIsOpen(false);
                    if (n.quizId) {
                      navigate(`/quiz/${n.quizId}`);
                    }
                  }}
                  className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer flex items-start space-x-3"
                >
                  <div className={`p-2 rounded-xl mt-0.5 ${
                    n.type === 'streak'
                      ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 animate-pulse'
                      : n.type === 'homework' 
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30' 
                      : n.type === 'grade'
                      ? 'bg-green-50 text-green-600 dark:bg-green-900/30'
                      : 'bg-purple-50 text-purple-600 dark:bg-purple-900/30'
                  }`}>
                    {n.type === 'streak' ? <Flame className="w-4 h-4" /> : n.type === 'homework' ? <BookOpen className="w-4 h-4" /> : n.type === 'grade' ? <Award className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-gray-900 dark:text-white truncate">{n.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{n.subtitle}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-400 dark:text-gray-500 font-medium text-sm">
                {isVi ? 'Không có thông báo mới' : 'No new notifications'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
