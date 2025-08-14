import React from 'react';
import { QuizLesson } from '@/types/course';

const quiz3: QuizLesson = {
  id: 6,
  title: 'AI-Assisted Debugging and Refactoring Quiz',
  duration: '25 minutes',
  content: {
    questions: [
      {
        id: 1,
        question: 'What is legacy code?',
        options: [
          'Newly written code',
          'Older source code that is often poorly documented and hard to maintain',
          'Code written in Python only',
          'Code that always follows modern standards'
        ],
        correctAnswer: 1,
        explanation: 'Legacy code refers to older source code that is often poorly documented, hard to maintain, or incompatible with modern standards and tools.'
      },
      {
        id: 2,
        question: 'What is the primary goal of refactoring legacy code?',
        options: [
          'Changing the external behavior',
          'Adding new features',
          'Restructuring code to improve readability, maintainability, and performance without changing behavior',
          'Removing all comments'
        ],
        correctAnswer: 2,
        explanation: 'The primary goal of refactoring legacy code is to restructure existing code without changing its external behavior to improve readability, maintainability, and performance.'
      }
    ]
  }
};

export default quiz3;
