import { Module } from '@/types/course';
import { lesson1AnalyticsFundamentals } from './lesson1-analytics-fundamentals';
import { lesson2GrowthStrategies } from './lesson2-growth-strategies';
import { lesson3Quiz } from './lesson3-quiz';

export const module8AnalyticsGrowth: Module = {
  id: 8,
  title: '📊 Module 8: Analytics & Growth',
  description: 'Master podcast analytics fundamentals, growth strategies, performance tracking, and audience development',
  lessons: [
    lesson1AnalyticsFundamentals,
    lesson2GrowthStrategies,
    lesson3Quiz
  ]
}; 