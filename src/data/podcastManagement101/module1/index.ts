import type { Module } from '@/types/course';
import { lesson1Introduction } from './lesson1-introduction';
import { lesson2PrePodcastingEra } from './lesson2-pre-podcasting-era';
import { lesson3BirthOfPodcasting } from './lesson3-birth-of-podcasting';
import { lesson4Mainstream } from './lesson4-mainstream';
import { lesson5PodcastBoom } from './lesson5-podcast-boom';
import { lesson6IndustryMatures } from './lesson6-industry-matures';
import { lesson7CurrentTrends } from './lesson7-current-trends';
import { lesson8Conclusion } from './lesson8-conclusion';
import { module1Quiz } from './quiz';

const module1: Module = {
  id: 1,
  title: 'Introduction to Podcasting 🎙️',
  description: 'Explore the history and evolution of podcasting from its radio roots to the modern digital landscape. Learn about key innovators, technological milestones, and current trends shaping the industry.',
  lessons: [
    lesson1Introduction,
    lesson2PrePodcastingEra,
    lesson3BirthOfPodcasting,
    lesson4Mainstream,
    lesson5PodcastBoom,
    lesson6IndustryMatures,
    lesson7CurrentTrends,
    lesson8Conclusion,
    module1Quiz
  ]
};

export default module1; 