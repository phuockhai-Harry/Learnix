import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, Users, Send, BookOpen, Hash, 
  Shield, Globe, Circle, Search, ChevronRight, X, Trash2, 
  Pin, Edit3, CheckCircle2, Clock, HelpCircle, Sparkles, Timer
} from 'lucide-react';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { useToast } from '../context/ToastContext';
import { db } from '../firebase';
import { 
  collection, query, where, orderBy, limit, onSnapshot, 
  addDoc, deleteDoc, doc, setDoc, serverTimestamp, getDocs
} from 'firebase/firestore';

export interface ChatMessage {
  id: string;
  roomId: string;
  senderId: string;
  senderName: string;
  senderRole: 'student' | 'teacher' | 'admin';
  text: string;
  createdAt: any;
  subject?: string;
  grade?: number;
}

export interface PeerPresence {
  id: string;
  roomId: string;
  userId: string;
  userName: string;
  userRole: 'student' | 'teacher' | 'admin';
  status: 'online' | 'studying' | 'asking_question';
  lastActive: any;
  grade?: number;
}

export interface RoomTopic {
  roomId: string;
  pinnedTopic: string;
  pinnedByName: string;
  pinnedByRole?: string;
  updatedAt?: any;
}

export interface StudyRoomDef {
  id: string;
  nameVi: string;
  nameEn: string;
  subjectVi: string;
  subjectEn: string;
  grade: string;
  color: string;
  descriptionVi: string;
  descriptionEn: string;
  quickPromptsVi: string[];
  quickPromptsEn: string[];
  defaultTopicVi: string;
  defaultTopicEn: string;
}

export const STUDY_ROOMS: StudyRoomDef[] = [
  { 
    id: 'room-math-6', 
    nameVi: 'Toán học 6 - Số học & Hình học', 
    nameEn: 'Mathematics 6 - Numbers & Geometry', 
    subjectVi: 'Toán học', 
    subjectEn: 'Mathematics', 
    grade: 'Lớp 6', 
    color: 'border-blue-500 text-blue-600',
    descriptionVi: 'Hỏi đáp số nguyên ℤ, ƯCLN & BCNN, phân số, tỉ số phần trăm và hình học trực quan.',
    descriptionEn: 'Discuss integers Z, GCD & LCM, fractions, percentages and coordinate geometry.',
    quickPromptsVi: [
      'Ai giúp mình bài toán tìm ƯCLN và BCNN với?',
      'Cách quy đồng mẫu số phân số này làm sao vậy các bạn?',
      'Cho mình hỏi công thức tính diện tích hình thang và hình thoi.',
      'Bài tập hình học đối xứng có ai giải xong chưa?'
    ],
    quickPromptsEn: [
      'Can someone help me find the GCD and LCM for this problem?',
      'How do we find the common denominator for these fractions?',
      'What are the formulas for trapezoid and rhombus area?',
      'Has anyone finished the geometry symmetry exercise?'
    ],
    defaultTopicVi: 'Ôn tập phân số, số nguyên ℤ và tính chất chia hết (SGK Kết nối tri thức)',
    defaultTopicEn: 'Review fractions, integers Z, and divisibility rules'
  },
  { 
    id: 'room-lit-6', 
    nameVi: 'Ngữ văn 6 - Đọc hiểu & Viết văn', 
    nameEn: 'Literature 6 - Reading & Creative Writing', 
    subjectVi: 'Ngữ văn', 
    subjectEn: 'Literature', 
    grade: 'Lớp 6', 
    color: 'border-rose-500 text-rose-600',
    descriptionVi: 'Trao đổi về truyện đồng thoại, thơ lục bát, truyền thuyết dân gian và rèn kĩ năng viết đoạn văn.',
    descriptionEn: 'Discuss animal allegories, six-eight poetry, folk legends and writing skills.',
    quickPromptsVi: [
      'Mọi người cho mình xin ý tưởng mở bài văn kể lại một trải nghiệm.',
      'Bài thơ lục bát gieo vần ở những tiếng nào vậy các bạn?',
      'Bài học đường đời đầu tiên của Dế Mèn là gì ạ?',
      'Ai phân tích giúp mình tác dụng của biện pháp nhân hóa với!'
    ],
    quickPromptsEn: [
      'Can anyone share ideas for writing an essay about personal experience?',
      'Which syllables rhyme in traditional six-eight poetry?',
      'What is the central moral lesson from the cricket fable?',
      'How does personification enhance the emotional resonance here?'
    ],
    defaultTopicVi: 'Thảo luận kĩ năng viết đoạn văn ghi lại cảm xúc về bài thơ lục bát',
    defaultTopicEn: 'Discussion on expressing emotional response to six-eight poems'
  },
  { 
    id: 'room-sci-6', 
    nameVi: 'Khoa học Tự nhiên 6 - Chất & Thế giới sống', 
    nameEn: 'Natural Science 6 - Matter, Cells & Forces', 
    subjectVi: 'KHTN', 
    subjectEn: 'Natural Science', 
    grade: 'Lớp 6', 
    color: 'border-emerald-500 text-emerald-600',
    descriptionVi: 'Giải bài tập về cấu tạo tế bào, quang hợp, các thể của chất, lực ma sát và chuyển hóa năng lượng.',
    descriptionEn: 'Cell biology, photosynthesis, states of matter, friction and energy conservation.',
    quickPromptsVi: [
      'Cho mình hỏi điểm khác biệt chính giữa tế bào nhân sơ và nhân thực?',
      'Oxygen chiếm bao nhiêu phần trăm thể tích không khí vậy ạ?',
      'Ai giải thích giúp mình công thức liên hệ giữa trọng lượng và khối lượng P = 10m với?',
      'Khi nào lực ma sát có lợi và khi nào có hại trong đời sống?'
    ],
    quickPromptsEn: [
      'What are the key differences between prokaryotic and eukaryotic cells?',
      'What percentage of dry atmospheric air is Oxygen?',
      'Can someone explain the relationship between weight and mass (P = 10m)?',
      'When is friction beneficial vs harmful in everyday mechanisms?'
    ],
    defaultTopicVi: 'Thảo luận cấu tạo tế bào nhân thực và các dạng chuyển hóa năng lượng',
    defaultTopicEn: 'Eukaryotic cell structure and energy transformations review'
  },
  { 
    id: 'room-eng-6', 
    nameVi: 'Tiếng Anh 6 - Global Success Practice', 
    nameEn: 'English 6 - Global Success Practice Hub', 
    subjectVi: 'Tiếng Anh', 
    subjectEn: 'English', 
    grade: 'Lớp 6', 
    color: 'border-indigo-500 text-indigo-600',
    descriptionVi: 'Luyện tập ngữ pháp Thì hiện tại đơn, so sánh hơn/nhất, modal verbs và từ vựng Units 1-12.',
    descriptionEn: 'Practice Present Simple, comparative/superlative adjectives, modals and vocabulary.',
    quickPromptsVi: [
      'Cho mình xin ví dụ về câu so sánh hơn với tính từ dài với!',
      'Khi nào dùng must và khi nào dùng should vậy các bạn?',
      'Mọi người kiểm tra giúp mình câu điều kiện loại 1 này đã đúng chưa.',
      'Từ vựng chủ đề The 3Rs bảo vệ môi trường gồm những từ nào?'
    ],
    quickPromptsEn: [
      'Can someone give an example of comparative with a long adjective?',
      'What is the difference in usage between must and should?',
      'Could someone check my first conditional sentence structure?',
      'What key vocabulary relates to the 3Rs environmental rule?'
    ],
    defaultTopicVi: 'Thực hành câu điều kiện loại 1 & So sánh hơn tính từ dài (Units 7 - 12)',
    defaultTopicEn: 'First conditional sentences & comparative adjectives practice'
  },
  { 
    id: 'room-hist-geo-6', 
    nameVi: 'Lịch sử & Địa lí 6 - Văn minh cổ & Trái Đất', 
    nameEn: 'History & Geography 6 - Earth & Civilizations', 
    subjectVi: 'Lịch sử & Địa lí', 
    subjectEn: 'History & Geography', 
    grade: 'Lớp 6', 
    color: 'border-amber-500 text-amber-600',
    descriptionVi: 'Tìm hiểu nguồn gốc loài người, các nền văn minh cổ đại, chuyển động Trái Đất và khí quyển.',
    descriptionEn: 'Human evolution, ancient civilizations, Earth rotations and atmospheric weather.',
    quickPromptsVi: [
      'Ý nghĩa lịch sử của chiến thắng Bạch Đằng năm 938 là gì?',
      'Kinh tuyến gốc 0° đi qua đài thiên văn nào vậy các bạn?',
      'Tại sao Trái Đất tự quay quanh trục lại sinh ra ngày và đêm luân phiên?',
      'Nhà nước Văn Lang do ai đứng đầu và đóng đô ở đâu?'
    ],
    quickPromptsEn: [
      'What was the historical significance of the Bach Dang battle in 938 AD?',
      'Which observatory does the 0° Prime Meridian pass through?',
      'Why does Earth axial rotation produce alternating day and night cycles?',
      'Who governed the ancient Van Lang state and where was the capital?'
    ],
    defaultTopicVi: 'Tổng ôn chiến thắng Bạch Đằng 938 và chuyển động của Trái Đất',
    defaultTopicEn: 'Battle of Bach Dang 938 & Earth planetary motions review'
  },
  { 
    id: 'room-civics-6', 
    nameVi: 'Giáo dục công dân 6 - Đạo đức & Quyền trẻ em', 
    nameEn: 'Civic Education 6 - Ethics & Child Rights', 
    subjectVi: 'GDCD', 
    subjectEn: 'Civic Education', 
    grade: 'Lớp 6', 
    color: 'border-cyan-500 text-cyan-600',
    descriptionVi: 'Trao đổi về lòng yêu thương con người, siêng năng kiên trì, tự lập và 4 nhóm quyền trẻ em.',
    descriptionEn: 'Discuss compassion, diligence, self-reliance, and the 4 fundamental child rights.',
    quickPromptsVi: [
      '4 nhóm quyền cơ bản của trẻ em theo luật gồm những nhóm nào?',
      'Biểu hiện của tính tự lập trong học tập hàng ngày là gì?',
      'Tại sao chúng ta phải luôn tôn trọng sự thật trong cuộc sống?',
      'Làm thế nào để phát huy truyền thống tốt đẹp của gia đình, dòng họ?'
    ],
    quickPromptsEn: [
      'What are the 4 fundamental groups of child rights under law?',
      'What are concrete examples of self-reliance in daily studies?',
      'Why is respecting truth essential for personal character?',
      'How can students preserve and honor positive family traditions?'
    ],
    defaultTopicVi: 'Tìm hiểu 4 nhóm quyền cơ bản của trẻ em & rèn luyện tính tự lập',
    defaultTopicEn: 'Understanding the 4 basic child rights & cultivating self-reliance'
  },
  { 
    id: 'room-informatics-6', 
    nameVi: 'Tin học 6 - Thuật toán & Lập trình Scratch', 
    nameEn: 'Informatics 6 - Algorithms & Scratch Logic', 
    subjectVi: 'Tin học', 
    subjectEn: 'Informatics', 
    grade: 'Lớp 6', 
    color: 'border-purple-500 text-purple-600',
    descriptionVi: 'Xây dựng thuật toán, vẽ sơ đồ khối, mạng Internet và lập trình khối lệnh Scratch.',
    descriptionEn: 'Algorithm structures, flowcharts, internet concepts, and block coding.',
    quickPromptsVi: [
      'Trong sơ đồ khối, hình thoi dùng để biểu diễn thao tác gì vậy các bạn?',
      '1 Kilobyte (KB) bằng bao nhiêu Bytes?',
      'Khối lệnh "nếu... thì..." trong Scratch nằm ở nhóm lệnh nào?',
      'Mạng máy tính gồm những thành phần cơ bản nào?'
    ],
    quickPromptsEn: [
      'What operation does the diamond symbol represent in a flowchart?',
      'How many Bytes are in 1 Kilobyte (KB)?',
      'Which block category holds "if... then..." conditions in Scratch?',
      'What are the core hardware components that make up a computer network?'
    ],
    defaultTopicVi: 'Thực hành vẽ sơ đồ khối thuật toán & điều khiển nhân vật Scratch',
    defaultTopicEn: 'Flowchart design & Scratch character motion algorithms'
  },
  { 
    id: 'room-technology-6', 
    nameVi: 'Công nghệ 6 - Đời sống & Đồ dùng gia đình', 
    nameEn: 'Technology 6 - Living, Nutrition & Home Tech', 
    subjectVi: 'Công nghệ', 
    subjectEn: 'Technology', 
    grade: 'Lớp 6', 
    color: 'border-teal-500 text-teal-600',
    descriptionVi: 'Ngôi nhà thông minh, 4 nhóm chất dinh dưỡng, bảo quản thực phẩm và an toàn điện.',
    descriptionEn: 'Smart home automation, nutritional food groups, food preservation and electrical safety.',
    quickPromptsVi: [
      '4 nhóm chất dinh dưỡng cần thiết cho cơ thể gồm những nhóm nào?',
      'Tại sao không được chạm tay ướt vào công tắc hoặc phích cắm điện?',
      'Nêu các đặc điểm nổi bật của một ngôi nhà thông minh (Smart Home)?',
      'Phương pháp bảo quản thực phẩm nào an toàn và giữ được chất dinh dưỡng?'
    ],
    quickPromptsEn: [
      'What are the 4 essential nutrient groups for a balanced diet?',
      'Why must we never touch electrical switches with wet hands?',
      'What key automated features define a smart home dwelling?',
      'Which food preservation methods best retain nutritional quality?'
    ],
    defaultTopicVi: 'Thảo luận an toàn sử dụng đồ điện gia đình & cân bằng dinh dưỡng 4 nhóm',
    defaultTopicEn: 'Home electrical safety & 4 nutrient groups dietary balance'
  }
];

export default function StudyRooms() {
  const { user, profile } = useAuth();
  const { language, t } = useLanguage();
  const isVi = language === 'vi';
  const { showToast } = useToast();

  const [selectedRoomId, setSelectedRoomId] = useState<string>(STUDY_ROOMS[0].id);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [presenceList, setPresenceList] = useState<PeerPresence[]>([]);
  const [roomTopic, setRoomTopic] = useState<RoomTopic | null>(null);
  
  const [inputText, setInputText] = useState('');
  const [sending, setSending] = useState(false);
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [topicInput, setTopicInput] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const activeHeartbeatRef = useRef<any>(null);

  const currentRoom = STUDY_ROOMS.find(r => r.id === selectedRoomId) || STUDY_ROOMS[0];
  const myName = profile?.codeName || profile?.realName || user?.displayName || (isVi ? 'Học sinh' : 'Student');
  const myRole = (profile?.role === 'teacher' ? 'teacher' : profile?.role === 'admin' ? 'admin' : 'student') as 'student' | 'teacher' | 'admin';

  // 1. Real-time Firestore Messages Listener
  useEffect(() => {
    if (!user) return;

    const msgsQuery = query(
      collection(db, 'studyRoomMessages'),
      where('roomId', '==', selectedRoomId),
      limit(100)
    );

    const unsubscribe = onSnapshot(msgsQuery, (snapshot) => {
      const fetched: ChatMessage[] = snapshot.docs.map(docSnap => {
        const d = docSnap.data();
        return {
          id: docSnap.id,
          roomId: d.roomId,
          senderId: d.senderId,
          senderName: d.senderName,
          senderRole: d.senderRole || 'student',
          text: d.text,
          createdAt: d.createdAt,
          subject: d.subject,
          grade: d.grade
        };
      });

      // Sort messages by createdAt timestamp ascending
      fetched.sort((a, b) => {
        const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : (a.createdAt?.seconds ? a.createdAt.seconds * 1000 : 0);
        const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : (b.createdAt?.seconds ? b.createdAt.seconds * 1000 : 0);
        return timeA - timeB;
      });

      setMessages(fetched);
    }, (err) => {
      console.warn('Real-time messages listener notice:', err);
    });

    return () => unsubscribe();
  }, [selectedRoomId, user]);

  // 2. Real-time Firestore Pinned Topic Listener
  useEffect(() => {
    if (!user) return;

    const topicDocRef = doc(db, 'studyRoomTopics', selectedRoomId);
    const unsubTopic = onSnapshot(topicDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setRoomTopic({
          roomId: selectedRoomId,
          pinnedTopic: data.pinnedTopic || '',
          pinnedByName: data.pinnedByName || '',
          pinnedByRole: data.pinnedByRole || '',
          updatedAt: data.updatedAt
        });
      } else {
        setRoomTopic(null);
      }
    }, (err) => {
      console.warn('Real-time room topic listener notice:', err);
    });

    return () => unsubTopic();
  }, [selectedRoomId, user]);

  // 3. Real-time Peer Presence Tracking (Heartbeat & Listener)
  useEffect(() => {
    if (!user) return;

    const presenceDocId = `${selectedRoomId}_${user.uid}`;
    const presenceDocRef = doc(db, 'studyRoomPresence', presenceDocId);

    // Register active user in room
    const registerPresence = async () => {
      try {
        await setDoc(presenceDocRef, {
          roomId: selectedRoomId,
          userId: user.uid,
          userName: myName,
          userRole: myRole,
          status: 'online',
          grade: profile?.grade || 6,
          lastActive: serverTimestamp()
        });
      } catch (e) {
        console.warn('Could not register presence:', e);
      }
    };

    registerPresence();

    // Heartbeat every 45 seconds to keep presence active
    activeHeartbeatRef.current = setInterval(() => {
      registerPresence();
    }, 45000);

    // Subscribe to online peers in this room
    const presenceQuery = query(
      collection(db, 'studyRoomPresence'),
      where('roomId', '==', selectedRoomId)
    );

    const unsubPresence = onSnapshot(presenceQuery, (snap) => {
      const now = Date.now();
      const peers: PeerPresence[] = [];

      snap.docs.forEach(d => {
        const p = d.data();
        const activeTime = p.lastActive?.toMillis ? p.lastActive.toMillis() : (p.lastActive?.seconds ? p.lastActive.seconds * 1000 : now);
        // Only keep peers active within last 4 minutes
        if (now - activeTime < 240000 || d.id === presenceDocId) {
          peers.push({
            id: d.id,
            roomId: p.roomId,
            userId: p.userId,
            userName: p.userName || 'Peer',
            userRole: p.userRole || 'student',
            status: p.status || 'online',
            lastActive: p.lastActive,
            grade: p.grade
          });
        }
      });

      setPresenceList(peers);
    }, (err) => {
      console.warn('Presence listener notice:', err);
    });

    return () => {
      if (activeHeartbeatRef.current) {
        clearInterval(activeHeartbeatRef.current);
      }
      unsubPresence();
      // Clean up presence doc on room leave
      deleteDoc(presenceDocRef).catch(() => {});
    };
  }, [selectedRoomId, user, myName, myRole, profile?.grade]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, selectedRoomId]);

  // Handle Send Message
  const handleSendMessage = async (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    const content = (customText !== undefined ? customText : inputText).trim();
    if (!content || !user || sending) return;

    setSending(true);
    try {
      await addDoc(collection(db, 'studyRoomMessages'), {
        roomId: selectedRoomId,
        senderId: user.uid,
        senderName: myName,
        senderRole: myRole,
        text: content,
        createdAt: serverTimestamp(),
        subject: currentRoom.subjectVi,
        grade: profile?.grade || 6
      });

      setInputText('');
    } catch (err: any) {
      console.error('Error posting message to study room:', err);
      showToast({
        type: 'error',
        title: isVi ? 'Lỗi gửi tin nhắn' : 'Send Failed',
        message: isVi ? 'Không thể gửi tin nhắn. Vui lòng thử lại.' : 'Could not send message. Please retry.'
      });
    } finally {
      setSending(false);
    }
  };

  // Handle Delete Message
  const handleDeleteMessage = async (msgId: string) => {
    if (!user) return;
    setDeletingId(msgId);
    try {
      await deleteDoc(doc(db, 'studyRoomMessages', msgId));
      showToast({
        type: 'info',
        title: isVi ? 'Đã xóa' : 'Deleted',
        message: isVi ? 'Đã xóa tin nhắn khỏi phòng học' : 'Message deleted from study room'
      });
    } catch (err: any) {
      console.error('Error deleting message:', err);
      showToast({
        type: 'error',
        title: isVi ? 'Lỗi' : 'Error',
        message: isVi ? 'Lỗi khi xóa tin nhắn.' : 'Error deleting message.'
      });
    } finally {
      setDeletingId(null);
    }
  };

  // Handle Update Pinned Topic
  const handleSavePinnedTopic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicInput.trim() || !user) return;

    try {
      await setDoc(doc(db, 'studyRoomTopics', selectedRoomId), {
        roomId: selectedRoomId,
        pinnedTopic: topicInput.trim(),
        pinnedByName: myName,
        pinnedByRole: myRole,
        updatedAt: serverTimestamp()
      });

      showToast({
        type: 'success',
        title: isVi ? 'Thành công' : 'Success',
        message: isVi ? 'Đã ghim chủ đề thảo luận mới!' : 'New discussion topic pinned!'
      });
      setShowTopicModal(false);
      setTopicInput('');
    } catch (err: any) {
      console.error('Error setting pinned topic:', err);
      showToast({
        type: 'error',
        title: isVi ? 'Lỗi' : 'Error',
        message: isVi ? 'Không thể ghim chủ đề.' : 'Could not pin topic.'
      });
    }
  };

  // Format timestamp helper
  const formatMsgTime = (createdAt: any) => {
    if (!createdAt) return isVi ? 'Vừa xong' : 'Just now';
    const date = createdAt.toDate ? createdAt.toDate() : (createdAt.seconds ? new Date(createdAt.seconds * 1000) : new Date());
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };


  const filteredRooms = STUDY_ROOMS.filter(r => {
    const q = searchFilter.toLowerCase();
    return r.nameVi.toLowerCase().includes(q) || 
           r.nameEn.toLowerCase().includes(q) || 
           r.subjectVi.toLowerCase().includes(q) || 
           r.subjectEn.toLowerCase().includes(q);
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Top Header Card */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-[2rem] border-2 border-gray-100 dark:border-gray-700 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-black uppercase tracking-wider mb-2">
            <Users className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>{isVi ? 'Phòng học Nhóm Cộng tác Trực tuyến' : 'Live Peer Collaborative Study Rooms'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight">
            {t('studyRooms.title')}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-2xl font-medium leading-relaxed">
            {isVi 
              ? 'Tham gia phòng học chuyên đề cùng bạn bè và thầy cô. Trao đổi bài tập, giải đáp thắc mắc trực tiếp không qua bot tự động.' 
              : 'Join subject-specific rooms with classmates and teachers. Discuss homework and solve questions collaboratively with real people.'}
          </p>
        </div>

        {/* Live Active Peers Indicator & Pin Topic & Pomodoro Quick Info */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowUsersModal(true)}
            className="px-4 py-2.5 rounded-2xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-200 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
            title={isVi ? 'Xem danh sách thành viên đang có mặt trong phòng' : 'View active peers in this study room'}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{presenceList.length} {isVi ? 'thành viên online' : 'peers online'}</span>
          </button>

          <button
            onClick={() => {
              setTopicInput(roomTopic?.pinnedTopic || (isVi ? currentRoom.defaultTopicVi : currentRoom.defaultTopicEn));
              setShowTopicModal(true);
            }}
            className="px-4 py-2.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95"
            title={isVi ? 'Ghim chủ đề hoặc câu hỏi thảo luận chung' : 'Pin discussion topic or study question'}
          >
            <Pin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{isVi ? 'Ghim chủ đề' : 'Pin Topic'}</span>
          </button>
        </div>
      </div>


      {/* Main Study Room Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Column: Subject Channels Selector */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-gray-100 dark:border-gray-700 p-4 shadow-xs lg:col-span-1 flex flex-col h-[700px]">
          {/* Header & Search */}
          <div className="pb-3 border-b border-gray-100 dark:border-gray-700 space-y-2 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-gray-400">
                {isVi ? 'Môn học' : 'Subject Channels'} ({STUDY_ROOMS.length})
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300">
                {isVi ? `Khối ${profile?.grade || 6}` : `Grade ${profile?.grade || 6}`}
              </span>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={isVi ? 'Tìm môn học...' : 'Search subjects...'}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 outline-none text-gray-900 dark:text-gray-100 font-medium"
              />
            </div>
          </div>

          {/* Rooms List */}
          <div className="space-y-2 overflow-y-auto flex-1 pr-1">
            {filteredRooms.map(room => {
              const isSelected = room.id === selectedRoomId;
              return (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoomId(room.id)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all border-2 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-500 text-teal-900 dark:text-teal-100 shadow-xs'
                      : 'bg-gray-50/70 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700 hover:border-gray-300 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-2xs">
                      {isVi ? room.subjectVi : room.subjectEn}
                    </span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="font-bold text-xs truncate text-gray-900 dark:text-white">
                    {isVi ? room.nameVi : room.nameEn}
                  </div>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate mt-1">
                    {isVi ? room.descriptionVi : room.descriptionEn}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Area: Active Real-time Chat Discussion */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-xs lg:col-span-3 flex flex-col h-[700px] overflow-hidden">
          
          {/* Active Room Top Header */}
          <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between bg-gray-50/80 dark:bg-gray-850 shrink-0">
            <div className="min-w-0 pr-3">
              <div className="flex items-center gap-2">
                <h2 className="font-black text-gray-900 dark:text-white text-base truncate">
                  {isVi ? currentRoom.nameVi : currentRoom.nameEn}
                </h2>
                <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-black">
                  {isVi ? 'Phòng học Trực tiếp' : 'Live Room'}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5 font-medium">
                {isVi ? currentRoom.descriptionVi : currentRoom.descriptionEn}
              </p>
            </div>

            <button
              onClick={() => setShowUsersModal(true)}
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <Users className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span className="hidden sm:inline">{isVi ? 'Thành viên' : 'Peers'}</span>
              <span>({presenceList.length})</span>
            </button>
          </div>

          {/* Pinned Study Topic Banner */}
          <div className="px-4 py-2.5 bg-amber-50/80 dark:bg-amber-950/30 border-b border-amber-200/70 dark:border-amber-900/40 flex items-center justify-between gap-3 text-xs shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <Pin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="font-bold text-amber-900 dark:text-amber-200 shrink-0">
                {isVi ? 'Chủ đề đang ôn:' : 'Pinned Focus:'}
              </span>
              <p className="text-amber-800 dark:text-amber-300 truncate font-medium">
                {roomTopic?.pinnedTopic || (isVi ? currentRoom.defaultTopicVi : currentRoom.defaultTopicEn)}
              </p>
            </div>
            <button
              onClick={() => {
                setTopicInput(roomTopic?.pinnedTopic || (isVi ? currentRoom.defaultTopicVi : currentRoom.defaultTopicEn));
                setShowTopicModal(true);
              }}
              className="shrink-0 text-[11px] font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Edit3 className="w-3 h-3" />
              <span>{isVi ? 'Đổi chủ đề' : 'Edit'}</span>
            </button>
          </div>

          {/* Messages Stream Container */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-gray-50/40 dark:bg-gray-900/30">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                    {isVi ? 'Chưa có tin nhắn trong phòng này' : 'No messages in this study room yet'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-sm">
                    {isVi 
                      ? 'Hãy là người đầu tiên đặt câu hỏi bài tập hoặc chia sẻ cách giải cùng các bạn và thầy cô!' 
                      : 'Be the first to ask a homework question or share an answer with your peers!'}
                  </p>
                </div>
              </div>
            ) : (
              messages.map(msg => {
                const isMe = msg.senderId === user?.uid;
                const canDelete = isMe || myRole === 'teacher' || myRole === 'admin';
                return (
                  <div key={msg.id} className={`group flex flex-col ${isMe ? 'items-end' : 'items-start'} animate-in fade-in duration-150`}>
                    <div className="flex items-center gap-2 mb-1 px-1">
                      <span className={`text-xs font-bold flex items-center gap-1 ${
                        msg.senderRole === 'teacher' 
                          ? 'text-amber-600 dark:text-amber-400 font-black' 
                          : msg.senderRole === 'admin'
                          ? 'text-indigo-600 dark:text-indigo-400 font-black'
                          : isMe 
                          ? 'text-teal-700 dark:text-teal-300' 
                          : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {msg.senderRole === 'teacher' && <Shield className="w-3.5 h-3.5 text-amber-500" />}
                        {msg.senderName} {isMe && `(${isVi ? 'Bạn' : 'You'})`}
                      </span>

                      <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        <span>{formatMsgTime(msg.createdAt)}</span>
                      </span>

                      {canDelete && (
                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          disabled={deletingId === msg.id}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-red-500 rounded cursor-pointer"
                          title={isVi ? 'Xóa tin nhắn' : 'Delete message'}
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    <div className={`p-3.5 rounded-2xl max-w-[85%] sm:max-w-lg text-sm leading-relaxed shadow-2xs whitespace-pre-wrap break-words ${
                      isMe
                        ? 'bg-teal-600 text-white rounded-tr-xs'
                        : msg.senderRole === 'teacher'
                        ? 'bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-200 dark:border-amber-800/80 text-gray-900 dark:text-gray-100 rounded-tl-xs'
                        : 'bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-tl-xs'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Study Prompt Pills */}
          <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-700/80 bg-gray-50/70 dark:bg-gray-850 flex items-center gap-2 overflow-x-auto shrink-0">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{isVi ? 'Gợi ý nhanh:' : 'Quick Prompt:'}</span>
            </span>
            {(isVi ? currentRoom.quickPromptsVi : currentRoom.quickPromptsEn).map((prompt, pIdx) => (
              <button
                key={pIdx}
                type="button"
                onClick={() => setInputText(prompt)}
                className="shrink-0 px-2.5 py-1 rounded-xl bg-white dark:bg-gray-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 border border-gray-200 dark:border-gray-700 text-[11px] font-medium text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Message Input Bar */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 flex gap-2.5 shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder={isVi ? `Nhắn tin thảo luận bài tập ${currentRoom.subjectVi}...` : `Type your question in ${currentRoom.subjectEn}...`}
              maxLength={2000}
              className="flex-1 px-4 py-3 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-teal-500 font-medium"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || sending}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white rounded-2xl font-black text-xs flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>{sending ? (isVi ? 'Đang gửi...' : 'Sending...') : (isVi ? 'Gửi' : 'Send')}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Online Users Roster Modal */}
      {showUsersModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setShowUsersModal(false)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-gray-200 dark:border-gray-700 shadow-2xl max-w-md w-full p-6 space-y-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h3 className="font-black text-gray-900 dark:text-white text-base">
                  {isVi ? `Thành viên online (${presenceList.length})` : `Online Peers (${presenceList.length})`}
                </h3>
              </div>
              <button
                onClick={() => setShowUsersModal(false)}
                className="p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {isVi 
                ? `Danh sách học sinh và giáo viên đang trực tuyến trong phòng ${currentRoom.nameVi}.` 
                : `Active students and teachers currently joined in ${currentRoom.nameEn}.`}
            </p>

            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {presenceList.map(peer => {
                const isMe = peer.userId === user?.uid;
                return (
                  <div 
                    key={peer.id} 
                    className={`flex items-center justify-between p-3 rounded-2xl border ${
                      isMe 
                        ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800' 
                        : 'bg-gray-50 dark:bg-gray-700/40 border-gray-100 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-gray-900 dark:text-white truncate flex items-center gap-1">
                          {peer.userRole === 'teacher' && <Shield className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                          <span className="truncate">{peer.userName}</span>
                          {isMe && <span className="text-teal-600 dark:text-teal-400">({isVi ? 'Bạn' : 'You'})</span>}
                        </p>
                        <span className="text-[10px] text-gray-400 capitalize">
                          {peer.userRole === 'teacher' ? (isVi ? 'Giáo viên phụ trách' : 'Teacher') : (isVi ? 'Học sinh' : 'Student')}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 shrink-0">
                      Online
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowUsersModal(false)}
                className="w-full py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold text-xs rounded-xl hover:bg-gray-200 cursor-pointer"
              >
                {isVi ? 'Đóng' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Pinned Topic Modal */}
      {showTopicModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setShowTopicModal(false)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-gray-200 dark:border-gray-700 shadow-2xl max-w-md w-full p-6 space-y-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Pin className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h3 className="font-black text-gray-900 dark:text-white text-base">
                  {isVi ? 'Ghim chủ đề ôn tập' : 'Pin Study Focus Topic'}
                </h3>
              </div>
              <button
                onClick={() => setShowTopicModal(false)}
                className="p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSavePinnedTopic} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                  {isVi ? 'Nội dung hoặc câu hỏi cần thảo luận trong phòng:' : 'Question or topic to discuss:'}
                </label>
                <textarea
                  rows={3}
                  value={topicInput}
                  onChange={e => setTopicInput(e.target.value)}
                  placeholder={isVi ? 'Ví dụ: Ôn tập các dạng toán phân số và hình học SGK Kết nối tri thức...' : 'e.g., Discussing fractions and geometry...'}
                  maxLength={500}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:border-amber-500 font-medium"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowTopicModal(false)}
                  className="flex-1 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold text-xs rounded-xl hover:bg-gray-200 cursor-pointer"
                >
                  {isVi ? 'Hủy' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={!topicInput.trim()}
                  className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-gray-950 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  {isVi ? 'Lưu & Ghim' : 'Save & Pin'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
