import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { collection, query, where, getDocs, updateDoc, doc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { Users, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function JoinClass() {
  const { classCode } = useParams<{ classCode: string }>();
  const navigate = useNavigate();
  const { user, profile, loading: authLoading } = useAuth();
  const { t } = useLanguage();
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState(t('student.joining_class'));

  useEffect(() => {
    if (authLoading) return;

    if (!user || !profile) {
      // User must log in first to join
      // Optionally store the join intent in local storage to redirect after login
      localStorage.setItem('pendingJoinClassCode', classCode || '');
      navigate('/login');
      return;
    }

    if (profile.role === 'teacher') {
      setStatus('error');
      setMessage('Teachers cannot join classes as students.');
      return;
    }

    const joinClass = async () => {
      try {
        const code = (classCode || '').toUpperCase();
        const q = query(collection(db, 'classes'), where('classCode', '==', code));
        const snap = await getDocs(q);

        if (snap.empty) {
          setStatus('error');
          setMessage(t('student.invalid_code'));
          return;
        }

        const classDoc = snap.docs[0];
        const classData = classDoc.data();

        const emailToUse = profile.email || user.email;
        
        if (!emailToUse) {
          setStatus('error');
          setMessage('No email address found for your account.');
          return;
        }

        if (classData.studentEmails && classData.studentEmails.includes(emailToUse)) {
          // Already joined
          setStatus('success');
          setMessage(t('student.joined_success'));
          setTimeout(() => navigate('/'), 2000);
          return;
        }

        await updateDoc(doc(db, 'classes', classDoc.id), {
          studentEmails: arrayUnion(emailToUse)
        });

        setStatus('success');
        setMessage(t('student.joined_success'));
        setTimeout(() => navigate('/'), 2000);

      } catch (err) {
        console.error("Error joining class:", err);
        setStatus('error');
        setMessage('An error occurred while joining the class.');
      }
    };

    joinClass();

  }, [authLoading, user, profile, classCode, navigate, t]);

  if (authLoading) {
    return <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div></div>;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl max-w-md w-full text-center border-2 border-gray-100 dark:border-gray-700">
        
        {status === 'loading' && (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-500 mx-auto mb-6"></div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{message}</h2>
            <p className="text-gray-500 dark:text-gray-400">Please wait while we add you to the class roster.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{message}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">You are being redirected to your dashboard...</p>
            <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors">
              Go to Dashboard
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Join Failed</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">{message}</p>
            <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Return Home
            </Link>
          </>
        )}

      </div>
    </div>
  );
}
