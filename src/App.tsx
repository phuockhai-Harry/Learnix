import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth';
import { ThemeProvider } from './theme';
import { LanguageProvider } from './i18n';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import QuizRunner from './pages/QuizRunner';
import QuizCreator from './pages/QuizCreator';
import Explore from './pages/Explore';
import Practice from './pages/Practice';
import Achievements from './pages/Achievements';
import JoinClass from './pages/JoinClass';
import ClassPage from './pages/ClassPage';

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, profile } = useAuth();
  
  if (!user) return <Navigate to="/login" replace />;
  if (!profile) return <Navigate to="/login" replace />; // Need to complete profile
  
  return <>{children}</>;
}

function RoleRoute({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) {
  const { profile } = useAuth();
  
  if (!profile) return <Navigate to="/" replace />;
  
  if (!allowedRoles.includes(profile.role)) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/join/:classCode" element={<JoinClass />} />
              <Route path="/" element={<RequireAuth><Layout /></RequireAuth>}>
                <Route index element={<Dashboard />} />
                <Route path="explore" element={<RoleRoute allowedRoles={['student']}><Explore /></RoleRoute>} />
                <Route path="practice" element={<RoleRoute allowedRoles={['student']}><Practice /></RoleRoute>} />
                <Route path="achievements" element={<RoleRoute allowedRoles={['student']}><Achievements /></RoleRoute>} />
                <Route path="quiz/create" element={<QuizCreator />} />
                <Route path="quiz/:quizId" element={<QuizRunner />} />
                <Route path="class/:classId" element={<ClassPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

