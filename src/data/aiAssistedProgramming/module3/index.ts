import { Module } from '@/types/course';
import lesson1 from './lesson1-prompting-ai-identify-fix-bugs';
import lesson2 from './lesson2-diagnosing-errors-faster';
import lesson3 from './lesson3-optimizing-code-performance-readability';
import lesson4 from './lesson4-refactoring-legacy-code';
import lesson5 from './lesson5-hands-on-debug-broken-app';
import quiz3 from './quiz3';

const module3: Module = {
  id: 3,
  title: 'AI-Assisted Debugging and Refactoring',
  description: 'Learn how to use AI tools to identify, debug, and fix code issues, as well as optimize and refactor existing code for better performance and maintainability.',
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5
  ],
  quiz: quiz3
};

export default module3;
