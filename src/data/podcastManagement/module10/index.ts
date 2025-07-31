import { Module } from '@/types/course';
import { lesson1BusinessScaling } from './lesson1-business-scaling';
import { lesson2Quiz } from './lesson2-quiz';

export const module10BusinessScaling: Module = {
  id: 10,
  title: '🚀 Module 10: Business Scaling & Client Management',
  description: 'Master business scaling strategies, client relationship management, and sustainable business growth',
  lessons: [
    lesson1BusinessScaling,
    lesson2Quiz
  ]
}; 