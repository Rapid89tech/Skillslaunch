import { Module } from '@/types/course';
import lesson1 from './lesson1-generating-docstrings-readme';
import lesson2 from './lesson2-writing-unit-integration-tests';
import lesson3 from './lesson3-creating-data-mocks-testing';
import lesson4 from './lesson4-hands-on-document-test-mini-project';
import lesson5 from './lesson5-assignment-fully-documented-tested-module';
import quiz4 from './quiz4';

const module4: Module = {
  id: 4,
  title: 'AI-Assisted Documentation and Testing',
  description: 'Learn how to use AI tools to generate comprehensive documentation and create effective tests for your code.',
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  quiz: quiz4
};

export default module4;
