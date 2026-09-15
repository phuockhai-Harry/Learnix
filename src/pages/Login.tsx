import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { BookOpen } from 'lucide-react';

export default function Login() {
  const { user, profile, signInWithGoogle, registerProfile } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [realName, setRealName] = useState('');
  const [codeName, setCodeName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user && profile) {
      const pendingJoin = localStorage.getItem('pendingJoinClassCode');
      if (pendingJoin) {
        localStorage.removeItem('pendingJoinClassCode');
        navigate(`/join/${pendingJoin}`);
      } else {
        navigate('/');
      }
    }
  }, [user, profile, navigate]);

  const handleCompleteProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!realName) {
      setError(t('login.real_name_req'));
      return;
    }
    if (role === 'student' && !codeName) {
      setError(t('login.code_name_req'));
      return;
    }
    try {
      await registerProfile(role, realName, codeName);
    } catch (err: any) {
      setError(err.message || t('login.fail'));
    }
  };

  if (user && !profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{t('login.title')}</h2>
          <p className="mt-2 text-center text-sm text-gray-600">{t('login.subtitle')}</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleCompleteProfile}>
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('login.role_label')}</label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`py-2 px-4 flex items-center justify-center border rounded-md text-sm font-medium transition-colors ${role === 'student' ? 'border-teal-600 ring-1 ring-teal-600 text-teal-700 bg-teal-50' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  >
                    {t('login.student')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('teacher')}
                    className={`py-2 px-4 flex items-center justify-center border rounded-md text-sm font-medium transition-colors ${role === 'teacher' ? 'border-teal-600 ring-1 ring-teal-600 text-teal-700 bg-teal-50' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  >
                    {t('login.teacher')}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="realName" className="block text-sm font-medium text-gray-700">
                  {t('login.real_name')}
                </label>
                <div className="mt-1">
                  <input
                    id="realName"
                    type="text"
                    required
                    value={realName}
                    onChange={(e) => setRealName(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                </div>
              </div>

              {role === 'student' && (
                <div>
                  <label htmlFor="codeName" className="block text-sm font-medium text-gray-700">
                    {t('login.code_name')}
                  </label>
                  <div className="mt-1">
                    <input
                      id="codeName"
                      type="text"
                      required
                      value={codeName}
                      onChange={(e) => setCodeName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    />
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  {t('login.create_profile')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="mx-auto w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
          <BookOpen className="w-10 h-10 text-white" />
        </div>
        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900 tracking-tight">Learnix</h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          {t('login.app_desc')}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <button
              onClick={signInWithGoogle}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              {t('login.signin_google')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
