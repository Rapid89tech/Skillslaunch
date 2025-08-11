import React from 'react';
import { Progress } from '@/components/ui/progress';
import { useStableProgress } from '@/hooks/useStableProgress';

interface CourseProgressBarProps {
  courseId: string;
  enrolled: boolean;
  className?: string;
}

const CourseProgressBar = ({ courseId, enrolled, className }: CourseProgressBarProps) => {
  const { progress } = useStableProgress(courseId);

  // Only show progress bar if user is enrolled
  if (!enrolled) {
    return null;
  }

  // Ensure progress is a valid number between 0 and 100
  const validProgress = Math.min(100, Math.max(0, progress || 0));

  return (
    <div className={`flex-1 flex flex-col gap-1 ${className}`}>
      <Progress 
        value={validProgress} 
        className="h-2 bg-neutral-700"
      />
      <span className="text-[10px] text-gray-400 mt-1">
        Progress: {Math.round(validProgress)}%
      </span>
    </div>
  );
};

export default CourseProgressBar;
