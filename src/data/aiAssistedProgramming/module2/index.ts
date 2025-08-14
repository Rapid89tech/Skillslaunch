import { Module } from '@/types/course';
import lesson1 from './lesson1-writing-effective-prompts';
import lesson2 from './lesson2-building-functions-specifications';
import lesson3 from './lesson3-code-generation-languages';
import lesson4 from './lesson4-hands-on-rest-api';
import quiz2 from './quiz2';

const module2: Module = {
  id: 2,
  title: 'AI-Assisted Code Generation',
  description: 'Learn how to write effective prompts and generate code using AI tools across different programming languages.',
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4
  ],
  quiz: quiz2
};

export default module2;
