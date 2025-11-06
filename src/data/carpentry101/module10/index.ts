import type { Module } from '@/types/course';
import lesson1 from './lesson1-major-project-design';
import lesson2 from './lesson2-major-project-execution';
import lesson3 from './lesson3-portfolio-building';

const module10: Module = {
  id: 10,
  title: 'Final Project & Portfolio Development',
  description: 'Apply all learned skills to design, plan, and construct a major carpentry project (custom oak dining table) and build a professional portfolio for employment or business opportunities.',
  lessons: [lesson1, lesson2, lesson3]
};

export default module10;

