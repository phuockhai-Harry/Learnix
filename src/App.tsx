import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth';
import { ThemeProvider } from './theme';
import { LanguageProvider } from './i18n';
import { ToastProvider } from './context/ToastContext';
import { ToastContainer } from './components/ToastContainer';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import QuizRunner from './pages/QuizRunner';
import QuizCreator from './pages/QuizCreator';
import Explore from './pages/Explore';
import Practice from './pages/Practice';
import Flashcards from './pages/Flashcards';
import Achievements from './pages/Achievements';
import JoinClass from './pages/JoinClass';
import ClassPage from './pages/ClassPage';
import Landing from './pages/Landing';
import Account from './pages/Account';
import AITutorPage from './pages/AITutorPage';
import StudyPlannerPage from './pages/StudyPlannerPage';
import AdminDashboard from './pages/AdminDashboard';
import ReportsPage from './pages/ReportsPage';

// When people enter the URL without an active session, they enter the Homepage (Landing) before the login page
function HomeRoute() {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD] dark:bg-gray-950">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400">Learnix...</p>
        </div>
      </div>
    );
  }

  // If user is already authenticated with completed profile, take them to their dashboard
  if (user && profile) {
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise, entering the URL takes them to the Homepage before the login page
  return <Landing />;
}

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD] dark:bg-gray-950">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400">Learnix...</p>
        </div>
      </div>
    );
  }

  if (!user || !profile) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function RoleRoute({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) {
  const { profile } = useAuth();

  if (!profile) return <Navigate to="/dashboard" replace />;

  if (!allowedRoles.includes(profile.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          <AuthProvider>
            <BrowserRouter>
              <ToastContainer />
              <Routes>
                {/* Public Routes: Entering the URL directly opens the Homepage */}
                <Route path="/" element={<HomeRoute />} />
                <Route path="/home" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join/:classCode" element={<JoinClass />} />

                {/* Authenticated Application Routes */}
                <Route element={<RequireAuth><Layout /></RequireAuth>}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/tutor" element={<RoleRoute allowedRoles={['student']}><AITutorPage /></RoleRoute>} />
                  <Route path="/explore" element={<RoleRoute allowedRoles={['student']}><Explore /></RoleRoute>} />
                  <Route path="/practice" element={<RoleRoute allowedRoles={['student']}><Practice /></RoleRoute>} />
                  <Route path="/flashcards" element={<RoleRoute allowedRoles={['student']}><Flashcards /></RoleRoute>} />
                  <Route path="/planner" element={<RoleRoute allowedRoles={['student']}><StudyPlannerPage /></RoleRoute>} />
                  <Route path="/achievements" element={<RoleRoute allowedRoles={['student']}><Achievements /></RoleRoute>} />
                  <Route path="/reports" element={<RoleRoute allowedRoles={['student']}><ReportsPage /></RoleRoute>} />
                  <Route path="/admin" element={<RoleRoute allowedRoles={['admin']}><AdminDashboard /></RoleRoute>} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/quiz/create" element={<RoleRoute allowedRoles={['teacher', 'admin']}><QuizCreator /></RoleRoute>} />
                  <Route path="/quiz/:quizId" element={<QuizRunner />} />
                  <Route path="/class/:classId" element={<ClassPage />} />
                </Route>

                {/* Fallback to homepage */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

