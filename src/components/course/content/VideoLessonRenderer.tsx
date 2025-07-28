import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Module1HardwareContent from './lessons/Module1HardwareContent';
import SoundEngineeringContent from './lessons/SoundEngineeringContent';
import AnimatedLessonContent from './AnimatedLessonContent';
import LessonHeader from './video-lesson/LessonHeader';
import LessonActions from './video-lesson/LessonActions';
import { generateFallbackContent } from './video-lesson/ContentGenerator';
import type { VideoLesson } from '@/types/course';

interface VideoLessonRendererProps {
  lesson: VideoLesson;
  isCompleted: boolean;
  onMarkComplete: () => void;
  onNext: () => void;
}

const VideoLessonRenderer = ({ lesson, isCompleted, onMarkComplete, onNext }: VideoLessonRendererProps) => {
  const [contentCompleted, setContentCompleted] = useState(false);

  // Scroll to top when lesson changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lesson.id]);

  // Check if this is Module 1 Lesson 1 (Hardware Fundamentals) - keep special content for this
  const isModule1Lesson1 = lesson.id === 1 && (
    lesson.title === 'Introduction to Computer Hardware' || 
    lesson.title === 'Computer Hardware Fundamentals'
  );

  // Check if this is a Sound Engineering lesson that should use special content
  const isSoundEngineeringLegacyLesson = false; // Disable legacy content for now
  
  // Use animated content for ALL other lessons by default (including Sound Engineering)
  const useAnimatedContent = !isModule1Lesson1 && !isSoundEngineeringLegacyLesson;

  // Check if content contains HTML (applies to any course with HTML content)
  const hasHtmlContent = lesson.content?.textContent && (
    lesson.content.textContent.includes('<div') ||
    lesson.content.textContent.includes('<h2>') ||
    lesson.content.textContent.includes('<ul>') ||
    lesson.content.textContent.includes('<li>') ||
    lesson.content.textContent.includes('<p>') ||
    lesson.content.textContent.includes('class=')
  );

  // Always preserve original content - DO NOT generate fallback for existing content
  const lessonContent = lesson.content?.textContent || generateFallbackContent(lesson);

  const handleContentComplete = () => {
    setContentCompleted(true);
  };

  const handleMarkComplete = () => {
    onMarkComplete();
  };

  // Create enhanced content that includes video URLs - use YouTubeVideoRenderer component format
  const enhancedContent = lesson.content?.videoUrl 
    ? `\n<YouTubeVideoRenderer videoId="${lesson.content.videoUrl}" title="${lesson.title}" />\n\n${lessonContent}`
    : lessonContent;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <LessonHeader duration={lesson.duration} isCompleted={isCompleted} />

      {/* Content */}
      {useAnimatedContent ? (
        <AnimatedLessonContent
          content={enhancedContent}
          lessonTitle={lesson.title}
          onComplete={handleContentComplete}
        />
      ) : isModule1Lesson1 ? (
        <div className="animate-fade-in">
          <Module1HardwareContent />
          <div className="mt-6 text-center">
            <Button onClick={handleContentComplete} className="bg-blue-600 hover:bg-blue-700">
              I've Read This Content
            </Button>
          </div>
        </div>
      ) : isSoundEngineeringLegacyLesson ? (
        <div className="animate-fade-in">
          <SoundEngineeringContent lesson={lesson} />
          <div className="mt-6 text-center">
            <Button onClick={handleContentComplete} className="bg-blue-600 hover:bg-blue-700">
              I've Read This Content
            </Button>
          </div>
        </div>
      ) : (
        <AnimatedLessonContent
          content={lessonContent}
          lessonTitle={lesson.title}
          onComplete={handleContentComplete}
        />
      )}

      {/* Actions */}
      <LessonActions
        contentCompleted={contentCompleted}
        isCompleted={isCompleted}
        onMarkComplete={handleMarkComplete}
        onNext={onNext}
      />
    </div>
  );
};

export default VideoLessonRenderer;
