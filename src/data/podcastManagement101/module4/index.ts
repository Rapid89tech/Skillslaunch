import type { Module } from '@/types/course';
import { lesson1IntroductionToEditingTools } from './lesson1-introduction-to-editing-tools';
import { lesson2BasicEditingTechniques } from './lesson2-basic-editing-techniques';
import { lesson3AddingMusicAndExporting } from './lesson3-adding-music-and-exporting';
import { module4Quiz } from './quiz';

const module4: Module = {
  id: 4,
  title: '🎛️ Module 4: Audio Editing Essentials',
  description: 'Master editing tools, basic editing techniques, adding music, and exporting for distribution',
  lessons: [
    lesson1IntroductionToEditingTools,
    lesson2BasicEditingTechniques,
    lesson3AddingMusicAndExporting,
    module4Quiz
  ]
};

export default module4; 