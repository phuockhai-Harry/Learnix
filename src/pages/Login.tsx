import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth';
import { useLanguage } from '../i18n';
import { 
  BookOpen, 
  ArrowLeft, 
  Loader2, 
  AlertCircle, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  KeyRound, 
  CheckCircle2, 
  X,
  Sparkles,
  MailCheck,
  RefreshCw,
  LogIn
} from 'lucide-react';

export default function Login() {
  const { 
    user, 
    profile, 
    signInWithGoogle, 
    signInWithEmail, 
    signUpWithEmail, 
    sendPasswordReset, 
    resendVerification,
    registerProfile 
  } = useAuth();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Mode: 'signin' | 'signup'
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  
  // Credentials
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Status & Errors
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSigningIn, setIsGoogleSigningIn] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');

  // Email verification screen state
  const [showVerificationScreen, setShowVerificationScreen] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState('');
  const [savedPassword, setSavedPassword] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [resendError, setResendError] = useState('');
  const [needPasswordForResend, setNeedPasswordForResend] = useState(false);
  const [resendPasswordInput, setResendPasswordInput] = useState('');

  // Password Reset Modal
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState('');

  // Complete profile state (for newly authenticated users without profile)
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [realName, setRealName] = useState('');
  const [codeName, setCodeName] = useState('');
  const [grade, setGrade] = useState<number>(1);
  const [profileError, setProfileError] = useState('');

  useEffect(() => {
    if (user && profile) {
      const pendingJoin = localStorage.getItem('pendingJoinClassCode');
      if (pendingJoin) {
        localStorage.removeItem('pendingJoinClassCode');
        navigate(`/join/${pendingJoin}`);
      } else {
        navigate('/dashboard');
      }
    }
  }, [user, profile, navigate]);

  const mapAuthError = (err: any) => {
    const code = err?.code || '';
    const msg = err?.message || '';

    if (code === 'auth/email-not-verified' || msg === 'EMAIL_NOT_VERIFIED') {
      return t('login.email_not_verified_banner');
    }
    if (
      code === 'auth/invalid-credential' || 
      code === 'auth/user-not-found' || 
      code === 'auth/wrong-password' ||
      msg.includes('invalid-credential') ||
      msg.includes('user-not-found') ||
      msg.includes('wrong-password')
    ) {
      return t('login.auth_err_invalid_creds');
    }
    if (code === 'auth/email-already-in-use' || msg.includes('email-already-in-use')) {
      return t('login.auth_err_email_in_use');
    }
    if (code === 'auth/weak-password' || msg.includes('weak-password')) {
      return t('login.auth_err_weak_pass');
    }
    if (code === 'auth/invalid-email' || msg.includes('invalid-email')) {
      return t('login.email_req');
    }
    if (code === 'auth/too-many-requests' || msg.includes('too-many-requests')) {
      return t('login.auth_err_too_many');
    }
    if (code === 'auth/popup-blocked' || msg.includes('popup-blocked')) {
      return t('login.popup_blocked');
    }
    return msg || t('login.signin_error');
  };

  const handleEmailAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setAuthError(t('login.email_req'));
      return;
    }
    if (!password) {
      setAuthError(t('login.password_placeholder'));
      return;
    }

    if (authMode === 'signup') {
      if (password.length < 6) {
        setAuthError(t('login.password_min_len'));
        return;
      }
      if (password !== confirmPassword) {
        setAuthError(t('login.passwords_do_not_match'));
        return;
      }
    }

    setIsSubmitting(true);
    try {
      if (authMode === 'signin') {
        await signInWithEmail(cleanEmail, password);
      } else {
        // Sign up: sends verification email, signs out immediately, does NOT auto-login
        await signUpWithEmail(cleanEmail, password);
        setVerificationEmail(cleanEmail);
        setSavedPassword(password);
        setShowVerificationScreen(true);
        setResendSuccess(false);
        setResendError('');
      }
    } catch (err: any) {
      if (err?.code === 'auth/email-not-verified' || err?.message === 'EMAIL_NOT_VERIFIED') {
        // If email not verified on Login -> block + show the same screen
        setVerificationEmail(cleanEmail);
        setSavedPassword(password);
        setShowVerificationScreen(true);
        setResendSuccess(false);
        setResendError('');
        setAuthError('');
      } else {
        setAuthError(mapAuthError(err));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendVerification = async (customPassword?: string) => {
    setResendError('');
    setResendSuccess(false);
    const pwd = customPassword || savedPassword;
    if (!pwd) {
      setNeedPasswordForResend(true);
      return;
    }
    setResendLoading(true);
    try {
      await resendVerification(verificationEmail, pwd);
      setResendSuccess(true);
      setNeedPasswordForResend(false);
      setResendPasswordInput('');
    } catch (err: any) {
      setResendError(mapAuthError(err));
    } finally {
      setResendLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setAuthError('');
    setIsGoogleSigningIn(true);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      if (
        err?.code === 'auth/popup-closed-by-user' ||
        err?.code === 'auth/cancelled-popup-request' ||
        err?.message?.includes('auth/popup-closed-by-user') ||
        err?.message?.includes('auth/cancelled-popup-request')
      ) {
        return;
      }
      setAuthError(mapAuthError(err));
    } finally {
      setIsGoogleSigningIn(false);
    }
  };

  const handleSendPasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');
    setResetSuccess(false);

    const cleanEmail = resetEmail.trim();
    if (!cleanEmail) {
      setResetError(t('login.email_req'));
      return;
    }

    setResetLoading(true);
    try {
      await sendPasswordReset(cleanEmail);
      setResetSuccess(true);
    } catch (err: any) {
      setResetError(mapAuthError(err));
    } finally {
      setResetLoading(false);
    }
  };

  const handleCompleteProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileError('');
    if (!realName.trim()) {
      setProfileError(t('login.real_name_req'));
      return;
    }
    if (role === 'student' && !codeName.trim()) {
      setProfileError(t('login.code_name_req'));
      return;
    }
    try {
      await registerProfile(role, realName.trim(), codeName.trim(), role === 'student' ? grade : undefined);
    } catch (err: any) {
      setProfileError(err.message || t('login.fail'));
    }
  };

  // Dedicated Email Verification Screen (Firebase Auth Only)
  if (showVerificationScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/20 to-white flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8 relative">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-3">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-teal-700 transition-colors px-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'vi' ? 'Quay lại trang chủ' : 'Back to homepage'}</span>
          </Link>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 sm:px-10 text-center">
            
            {/* Visual Icon */}
            <div className="mx-auto w-16 h-16 bg-teal-50 border border-teal-200/80 rounded-2xl flex items-center justify-center text-teal-600 mb-5 shadow-sm">
              <MailCheck className="w-8 h-8" />
            </div>

            {/* Headline: Exact prompt text */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Check your email & verify, then log in
            </h2>
            {language === 'vi' && (
              <p className="mt-1 text-sm font-semibold text-teal-800">
                Kiểm tra email & xác thực tài khoản, sau đó đăng nhập
              </p>
            )}

            {/* Target Email address container */}
            {verificationEmail && (
              <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-slate-800 break-all shadow-inner">
                <Mail className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>{verificationEmail}</span>
              </div>
            )}

            {/* Explanatory description */}
            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'vi'
                ? 'Chúng tôi đã gửi một liên kết xác thực đến email của bạn. Vui lòng mở email (kiểm tra cả mục Thư rác/Spam), nhấn vào liên kết xác thực, sau đó đăng nhập để tiếp tục.'
                : 'A verification link has been sent to your email. Please click the link in your email to verify your account, then log in to continue.'}
            </p>

            {/* Primary Log In Button */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  setShowVerificationScreen(false);
                  setAuthMode('signin');
                  setEmail(verificationEmail);
                  setAuthError('');
                  setAuthSuccess('');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>{language === 'vi' ? 'Đăng nhập' : 'Log In'}</span>
              </button>
            </div>

            {/* Resend success notice */}
            {resendSuccess && (
              <div className="mt-4 flex items-center justify-center gap-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-xl">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                <span>{language === 'vi' ? 'Đã gửi lại email xác thực! Vui lòng kiểm tra hộp thư.' : 'Verification email sent! Please check your inbox.'}</span>
              </div>
            )}

            {/* Resend error notice */}
            {resendError && (
              <div className="mt-4 flex items-center justify-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
                <span>{resendError}</span>
              </div>
            )}

            {/* Password input prompt if password is required to resend */}
            {needPasswordForResend && (
              <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-left">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {language === 'vi' ? 'Nhập mật khẩu để gửi lại email xác thực:' : 'Enter password to resend verification email:'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={resendPasswordInput}
                    onChange={(e) => setResendPasswordInput(e.target.value)}
                    placeholder={language === 'vi' ? 'Mật khẩu của bạn' : 'Your password'}
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="button"
                    disabled={resendLoading || !resendPasswordInput}
                    onClick={() => handleResendVerification(resendPasswordInput)}
                    className="px-3.5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold disabled:opacity-50 cursor-pointer"
                  >
                    {resendLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : (language === 'vi' ? 'Gửi lại' : 'Send')}
                  </button>
                </div>
              </div>
            )}

            {/* Resend Action & Switch Email */}
            <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <button
                type="button"
                disabled={resendLoading}
                onClick={() => handleResendVerification()}
                className="inline-flex items-center gap-1.5 font-bold text-teal-600 hover:text-teal-700 disabled:opacity-60 cursor-pointer"
              >
                {resendLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{language === 'vi' ? 'Đang gửi...' : 'Resending...'}</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{language === 'vi' ? 'Gửi lại email xác thực' : 'Resend verification email'}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowVerificationScreen(false);
                  setAuthMode('signup');
                  setEmail('');
                  setPassword('');
                  setConfirmPassword('');
                  setAuthError('');
                }}
                className="font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                {language === 'vi' ? 'Sử dụng email khác' : 'Use a different email'}
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // If user is authenticated but has not completed their role profile:
  if (user && !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/20 to-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mx-auto w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center shadow-md mb-4 text-white">
            <Sparkles className="w-7 h-7" />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('login.title')}
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600 max-w-sm mx-auto">
            {t('login.subtitle')}
          </p>
          {user.email && (
            <p className="mt-1 text-center text-xs font-medium text-teal-700 bg-teal-50 border border-teal-200/60 rounded-full py-1 px-3 w-fit mx-auto">
              {user.email}
            </p>
          )}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 sm:px-10">
            <form className="space-y-5" onSubmit={handleCompleteProfile}>
              {profileError && (
                <div className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
                  <span className="font-medium">{profileError}</span>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('login.role_label')}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`py-2.5 px-4 flex items-center justify-center border rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      role === 'student'
                        ? 'border-teal-600 ring-2 ring-teal-500/20 text-teal-700 bg-teal-50/80 shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {t('login.student')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('teacher')}
                    className={`py-2.5 px-4 flex items-center justify-center border rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      role === 'teacher'
                        ? 'border-teal-600 ring-2 ring-teal-500/20 text-teal-700 bg-teal-50/80 shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {t('login.teacher')}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="realName" className="block text-sm font-semibold text-slate-700 mb-1">
                  {t('login.real_name')}
                </label>
                <input
                  id="realName"
                  type="text"
                  required
                  placeholder={language === 'vi' ? 'Ví dụ: Nguyễn Văn An' : 'e.g. Alex Johnson'}
                  value={realName}
                  onChange={(e) => setRealName(e.target.value)}
                  className="appearance-none block w-full px-3.5 py-2.5 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                />
              </div>

              {role === 'student' && (
                <>
                  <div>
                    <label htmlFor="codeName" className="block text-sm font-semibold text-slate-700 mb-1">
                      {t('login.code_name')}
                    </label>
                    <input
                      id="codeName"
                      type="text"
                      required
                      placeholder={language === 'vi' ? 'Ví dụ: SwiftFalcon, SuperStar' : 'e.g. SwiftFalcon, Nova'}
                      value={codeName}
                      onChange={(e) => setCodeName(e.target.value)}
                      className="appearance-none block w-full px-3.5 py-2.5 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="grade" className="block text-sm font-semibold text-slate-700 mb-1">
                      {language === 'vi' ? 'Khối lớp' : 'Grade'}
                    </label>
                    <select
                      id="grade"
                      value={grade}
                      onChange={(e) => setGrade(Number(e.target.value))}
                      className="block w-full px-3.5 py-2.5 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((g) => (
                        <option key={g} value={g}>
                          {language === 'vi' ? `Lớp ${g}` : `Grade ${g}`}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all cursor-pointer"
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/20 to-white flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-3">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-teal-700 transition-colors px-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'vi' ? 'Quay lại trang chủ' : 'Back to homepage'}</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-teal-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-600/20 mb-4 text-white">
          <BookOpen className="w-9 h-9" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Learnix</h2>
        <p className="mt-2 text-center text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
          {t('login.app_desc')}
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 sm:px-10">
          {/* Tab selector between Sign In and Sign Up */}
          <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => {
                setAuthMode('signin');
                setAuthError('');
                setAuthSuccess('');
              }}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
                authMode === 'signin'
                  ? 'bg-white text-teal-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('login.tab_signin')}
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthMode('signup');
                setAuthError('');
                setAuthSuccess('');
              }}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
                authMode === 'signup'
                  ? 'bg-white text-teal-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('login.tab_signup')}
            </button>
          </div>

          {/* Feedback messages */}
          {authError && (
            <div className="mb-4 flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl animate-fade-in">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
              <span className="font-medium leading-snug">{authError}</span>
            </div>
          )}

          {authSuccess && (
            <div className="mb-4 flex items-start gap-2.5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-xl">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600 mt-0.5" />
              <span className="font-medium leading-snug">{authSuccess}</span>
            </div>
          )}

          {/* Email & Password Form */}
          <form className="space-y-4" onSubmit={handleEmailAuthSubmit}>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('login.email_label')}
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder={t('login.email_placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3.5 py-2.5 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {t('login.password_label')}
                </label>
                {authMode === 'signin' && (
                  <button
                    type="button"
                    onClick={() => {
                      setResetEmail(email);
                      setShowResetModal(true);
                      setResetSuccess(false);
                      setResetError('');
                    }}
                    className="text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    {t('login.forgot_password')}
                  </button>
                )}
              </div>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={authMode === 'signin' ? 'current-password' : 'new-password'}
                  required
                  placeholder={t('login.password_placeholder')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authMode === 'signup' && (
              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t('login.confirm_password_label')}
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    placeholder={t('login.confirm_password_placeholder')}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || isGoogleSigningIn}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all cursor-pointer mt-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t('login.processing')}</span>
                </>
              ) : (
                <span>{authMode === 'signin' ? t('login.tab_signin') : t('login.tab_signup')}</span>
              )}
            </button>
          </form>

          {/* Social Divider */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-500 font-semibold tracking-wider">
                {language === 'vi' ? 'Hoặc tiếp tục với Google' : 'Or continue with Google'}
              </span>
            </div>
          </div>

          {/* Google Sign-in Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isGoogleSigningIn || isSubmitting}
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-slate-300 rounded-xl shadow-sm text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all cursor-pointer"
            >
              {isGoogleSigningIn ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
                  <span className="text-slate-700 font-bold">{t('login.signing_in')}</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>{t('login.signin_google')}</span>
                </>
              )}
            </button>
          </div>

          {/* Switch mode footer */}
          <div className="mt-6 text-center text-xs text-slate-500">
            {authMode === 'signin' ? (
              <p>
                {t('login.no_account_prompt')}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('signup');
                    setAuthError('');
                    setAuthSuccess('');
                  }}
                  className="font-bold text-teal-600 hover:text-teal-700 underline underline-offset-2 cursor-pointer"
                >
                  {t('login.tab_signup')}
                </button>
              </p>
            ) : (
              <p>
                {t('login.have_account_prompt')}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('signin');
                    setAuthError('');
                    setAuthSuccess('');
                  }}
                  className="font-bold text-teal-600 hover:text-teal-700 underline underline-offset-2 cursor-pointer"
                >
                  {t('login.tab_signin')}
                </button>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              type="button"
              onClick={() => setShowResetModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{t('login.reset_modal_title')}</h3>
                <p className="text-xs text-slate-500">{t('login.reset_modal_desc')}</p>
              </div>
            </div>

            {resetError && (
              <div className="my-3 flex items-start gap-2.5 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500 mt-0.5" />
                <span>{resetError}</span>
              </div>
            )}

            {resetSuccess ? (
              <div className="my-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="text-sm font-bold text-emerald-800">{t('login.reset_sent_success')}</p>
                <button
                  type="button"
                  onClick={() => setShowResetModal(false)}
                  className="mt-2 inline-flex items-center justify-center py-2 px-4 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer"
                >
                  {t('login.back_to_signin')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendPasswordReset} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="resetEmail" className="block text-xs font-bold text-slate-700 mb-1">
                    {t('login.email_label')}
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="resetEmail"
                      type="email"
                      required
                      placeholder={t('login.email_placeholder')}
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="block w-full pl-10 pr-3.5 py-2.5 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowResetModal(false)}
                    className="py-2 px-4 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                  >
                    {language === 'vi' ? 'Hủy' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    disabled={resetLoading}
                    className="py-2.5 px-4 text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-sm disabled:opacity-60 flex items-center gap-1.5 cursor-pointer"
                  >
                    {resetLoading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>{t('login.processing')}</span>
                      </>
                    ) : (
                      <span>{t('login.send_reset_link')}</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
