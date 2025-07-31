
import React from 'react';
import LessonHeader from './content/LessonHeader';
import VideoLessonRenderer from './content/VideoLessonRenderer';
import QuizLessonRenderer from './content/QuizLessonRenderer';
import AssignmentLessonRenderer from './content/AssignmentLessonRenderer';
import CertificateLessonRenderer from './content/CertificateLessonRenderer';
import ContentFormatter from './content/animated-lesson/ContentFormatter';
import type { Lesson, QuizLesson, AssignmentLesson, CertificateLesson, VideoLesson, Course } from '@/types/course';

interface LessonContentProps {
  lesson: Lesson;
  course: Course;
  isCompleted: boolean;
  hasAttempted?: boolean;
  onMarkComplete: () => void;
  onNext: () => void;
  progress: number;
  moduleId: number;
  lessonId: number;
}

const LessonContent = ({ lesson, course, isCompleted, hasAttempted = false, onMarkComplete, onNext, progress, moduleId, lessonId, markdownContent }: LessonContentProps & { markdownContent?: string }) => {
  if (markdownContent) {
    return <ContentFormatter content={markdownContent} />;
  }
  const renderLessonContent = () => {
    switch (lesson.type) {
      case 'video':
        return (
          <VideoLessonRenderer
            lesson={lesson as VideoLesson}
            isCompleted={isCompleted}
            onMarkComplete={onMarkComplete}
            onNext={onNext}
          />
        );
      case 'quiz':
        return (
          <QuizLessonRenderer
            lesson={lesson as QuizLesson}
            isCompleted={isCompleted}
            hasAttempted={hasAttempted}
            onMarkComplete={onMarkComplete}
            onNext={onNext}
            moduleId={moduleId}
            lessonId={lessonId}
          />
        );
      case 'assignment':
        return (
          <AssignmentLessonRenderer
            lesson={lesson as AssignmentLesson}
            isCompleted={isCompleted}
            onMarkComplete={onMarkComplete}
          />
        );
      case 'certificate':
        return (
          <CertificateLessonRenderer
            lesson={lesson as CertificateLesson}
            course={course}
            onMarkComplete={onMarkComplete}
            progress={progress}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {renderLessonContent()}
    </div>
  );
};

export default LessonContent;
