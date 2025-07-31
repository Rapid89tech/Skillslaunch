import { Module } from '@/types/course';
import { lesson1IntroductionToPodcasting } from './lesson1-introduction-to-podcasting';
import { lesson2PrePodcastingEra } from './lesson2-pre-podcasting-era';
import { lesson3BirthOfPodcasting } from './lesson3-birth-of-podcasting';
import { lesson4PodcastingGoesMainstream } from './lesson4-podcasting-goes-mainstream';
import { lesson5PodcastBoom } from './lesson5-podcast-boom';
import { lesson6Podcasting2020s } from './lesson6-podcasting-2020s';
import { lesson7CurrentTrends } from './lesson7-current-trends';
import { lesson8Quiz } from './lesson8-quiz';

export const module1IntroductionToPodcasting: Module = {
  id: 1,
  title: '🎙️ Module 1: Introduction to Podcasting',
  description: 'The History and Evolution of Podcasting',
  lessons: [
    lesson1IntroductionToPodcasting,
    lesson2PrePodcastingEra,
    lesson3BirthOfPodcasting,
    lesson4PodcastingGoesMainstream,
    lesson5PodcastBoom,
    lesson6Podcasting2020s,
    lesson7CurrentTrends,
    lesson8Quiz
  ]
}; 