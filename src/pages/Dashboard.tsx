import React from 'react';
import { useAuth } from '../auth';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';

export default function Dashboard() {
  const { profile } = useAuth();

  if (profile?.role === 'teacher') {
    return <TeacherDashboard />;
  }
  
  return <StudentDashboard />;
}
