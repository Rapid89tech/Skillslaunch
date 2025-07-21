
import type { Module } from '@/types/course';
import { lesson17AITutorsAdaptiveLearning } from './lesson17-aiTutorsAdaptiveLearning';
import { lesson18TeacherStudentRelationships } from './lesson18-teacherStudentRelationships';
import { lesson19HumanizingDigitalEducation } from './lesson19-humanizingDigitalEducation';
import { lesson20Quiz } from './lesson20-quiz';

export const module5EducationLearningAI: Module = {
  id: 5,
  title: 'Education, Learning & AI',
  description: 'Explore how artificial intelligence is transforming education through AI tutors, adaptive learning systems, and their impact on teacher-student relationships and digital learning environments.',
  lessons: [
    lesson17AITutorsAdaptiveLearning,
    lesson18TeacherStudentRelationships,
    lesson19HumanizingDigitalEducation,
    lesson20Quiz
  ]
};
