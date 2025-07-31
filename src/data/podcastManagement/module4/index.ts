import { Module } from '@/types/course';
import { lesson1IntroductionToEditingTools } from './lesson1-introduction-to-editing-tools';
import { lesson2AdvancedEditingTechniques } from './lesson2-advanced-editing-techniques';
import { lesson3WorkflowOptimization } from './lesson3-workflow-optimization';
import { lesson4Quiz } from './lesson4-quiz';

export const module4AudioEditingEssentials: Module = {
  id: 4,
  title: '🎛️ Module 4: Audio Editing Essentials',
  description: 'Master editing tools, basic editing techniques, adding music, and exporting for distribution',
  lessons: [
    lesson1IntroductionToEditingTools,
    lesson2AdvancedEditingTechniques,
    lesson3WorkflowOptimization,
    lesson4Quiz
  ]
}; 