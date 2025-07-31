import { Module } from '@/types/course';
import { lesson1ShowConcepts } from './lesson1-show-concepts';
import { lesson2ContentCalendars } from './lesson2-content-calendars';
import { lesson3GuestManagement } from './lesson3-guest-management';
import { lesson4ScriptWriting } from './lesson4-script-writing';
import { lesson5Quiz } from './lesson5-quiz';

export const module2PreProductionPlanning: Module = {
  id: 2,
  title: '📋 Module 2: Pre-Production Planning',
  description: 'Developing show concepts, content calendars, guest management, and script writing',
  lessons: [
    lesson1ShowConcepts,
    lesson2ContentCalendars,
    lesson3GuestManagement,
    lesson4ScriptWriting,
    lesson5Quiz
  ]
}; 