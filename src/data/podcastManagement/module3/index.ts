import { Module } from '@/types/course';
import { lesson1RecordingTools } from './lesson1-recording-tools';
import { lesson2RemoteVsInPerson } from './lesson2-remote-vs-inperson';
import { lesson3RecordingBestPractices } from './lesson3-recording-best-practices';
import { lesson4FileManagement } from './lesson4-file-management';
import { lesson5Quiz } from './lesson5-quiz';

export const module3RecordingProduction: Module = {
  id: 3,
  title: '🎙️ Module 3: Recording & Production Workflow',
  description: 'Choosing recording tools, remote vs in-person recording, best practices, and file management',
  lessons: [
    lesson1RecordingTools,
    lesson2RemoteVsInPerson,
    lesson3RecordingBestPractices,
    lesson4FileManagement,
    lesson5Quiz
  ]
}; 