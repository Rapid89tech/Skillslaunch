
export interface BaseLesson {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'assignment' | 'certificate';
}

export interface VideoContent {
  videoUrl: string;
  textContent: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface QuizContent {
  questions: QuizQuestion[];
}

export interface AssignmentContent {
  title: string;
  description: string;
  requirements: string[];
  deliverables: string;
  rubric: Record<string, string>;
}

export interface CertificateContent {
  title: string;
  description: string;
  certificateText: string;
}

export interface VideoLesson extends BaseLesson {
  type: 'video';
  content: VideoContent;
}

export interface QuizLesson extends BaseLesson {
  type: 'quiz';
  content: QuizContent;
}

export interface AssignmentLesson extends BaseLesson {
  type: 'assignment';
  content: AssignmentContent;
}

export interface CertificateLesson extends BaseLesson {
  type: 'certificate';
  content: CertificateContent;
}

export type Lesson = VideoLesson | QuizLesson | AssignmentLesson | CertificateLesson;

export interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Instructor {
  name: string;
  title: string;
  avatar: string;
  bio: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: Instructor;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: number;
  currency: string;
  is_free: boolean;
  thumbnail: string;
  category: string;
  learningObjectives: string[];
  modules: Module[];
}
