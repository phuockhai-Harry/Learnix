import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudyPlanner from '../components/StudyPlanner';

export default function StudyPlannerPage() {
  const navigate = useNavigate();

  const handleOpenTutorForTopic = (topic: string) => {
    navigate(`/tutor?prompt=${encodeURIComponent(`Hãy hướng dẫn mình ôn tập chủ đề: ${topic}`)}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <StudyPlanner onOpenTutorForTopic={handleOpenTutorForTopic} />
    </div>
  );
}
