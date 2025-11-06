import type { Module } from '@/types/course';
import lesson1 from './lesson1-what-is-carpentry';
import lesson2 from './lesson2-history-role';
import lesson3 from './lesson3-career-opportunities';
import lesson4 from './lesson4-workshop-layout';
import lesson5 from './lesson5-health-safety-ppe';
import quiz from './quiz';

const module1: Module = {
  id: 1,
  title: 'Introduction to Carpentry',
  description: 'Explore the fundamentals of carpentry, its history, career opportunities, workshop organization, and essential health and safety practices.',
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  quiz
};

export default module1;

