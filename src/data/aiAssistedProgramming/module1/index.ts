import { Module } from '@/types/course';
import lesson1 from './lesson1-evolution-programming-tools';
import lesson2 from './lesson2-types-ai-tools';
import lesson3 from './lesson3-overview-leading-tools';
import lesson4 from './lesson4-hands-on-setup';
import quiz1 from './quiz1';

const module1: Module = {
  id: 1,
  title: 'Introduction to AI in Programming',
  description: 'Learn about the evolution of programming assistance tools and understand the fundamentals of AI-powered development.',
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4
  ],
  quiz: quiz1
};

export default module1;
