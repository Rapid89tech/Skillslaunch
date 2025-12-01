import { Course, Module } from '@/types/course';
import * as module1 from './module1';
import { module1Quiz } from './module1/quiz';
import * as module2 from './module2';
import { module2Quiz } from './module2/quiz';
import * as module3 from './module3';
import { module3Quiz } from './module3/quiz';
import * as module4 from './module4';
import { module4Quiz } from './module4/quiz';
import * as module5 from './module5';
import { module5Quiz } from './module5/quiz';

const filmProduction101Modules: Module[] = [
  {
    id: 1,
    title: 'Introduction to Film Production',
    description: 'Learn the fundamentals of film production, the film industry, key roles, film types, and cinema history.',
    lessons: [
      module1.lesson1WhatIsFilmProduction,
      module1.lesson2OverviewOfFilmIndustry,
      module1.lesson3RolesResponsibilitiesFilmSet,
      module1.lesson4TypesOfFilms,
      module1.lesson5HistoryOfCinema
    ],
    quiz: module1Quiz
  },
  {
    id: 2,
    title: 'Film Theory and Storytelling',
    description: 'Master the elements of storytelling, narrative structures, genre analysis, screenwriting basics, and storyboarding.',
    lessons: [
      module2.lesson1ElementsOfStorytelling,
      module2.lesson2NarrativeStructures,
      module2.lesson3GenreAnalysis,
      module2.lesson4ScreenwritingBasics,
      module2.lesson5StoryboardingShotPlanning
    ],
    quiz: module2Quiz
  },
  {
    id: 3,
    title: 'Sound Design',
    description: 'Explore the importance of sound in storytelling, microphone types, dialogue recording, sound editing and mixing, and music scoring.',
    lessons: [
      module3.lesson1ImportanceOfSound,
      module3.lesson2MicrophoneTypes,
      module3.lesson3DialogueAmbientFoley,
      module3.lesson4SoundEditingMixing,
      module3.lesson5MusicScoring
    ],
    quiz: module3Quiz
  },
  {
    id: 4,
    title: 'Directing',
    description: 'Understand the director\'s role, scene blocking, rehearsal techniques, and collaboration with cinematographers and production designers.',
    lessons: [
      module4.lesson1RoleOfDirector,
      module4.lesson2SceneBlockingRehearsal,
      module4.lesson3WorkingWithCinematographers
    ],
    quiz: module4Quiz
  },
  {
    id: 5,
    title: 'Distribution and Marketing',
    description: 'Learn about film festivals, distribution channels, marketing strategies, and creating press kits and trailers.',
    lessons: [
      module5.lesson1FilmFestivals,
      module5.lesson2DistributionChannels,
      module5.lesson3MarketingSocialMedia,
      module5.lesson4PressKitsTrailers
    ],
    quiz: module5Quiz
  }
];

export const filmProduction101CourseData: Course = {
  id: 'film-production-101',
  title: 'Film Production 101',
  description: 'Master the art of filmmaking from concept to distribution. This comprehensive course covers all aspects of film production including storytelling, cinematography, lighting, sound design, directing, and distribution.',
  category: 'Film & Broadcasting',
  level: 'beginner',
  duration: '10-12 weeks',
  is_free: false,
  price: 290,
  currency: 'ZAR',
  students: 0,
  rating: 4.9,
  instructor: {
    id: 'film-production-experts',
    first_name: 'Film Production',
    last_name: 'Experts',
    email: 'betaskilltraining@gmail.com'
  },
  status: 'approved',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  available: true,
  isComingSoon: false,
  overview: 'Master the art of filmmaking from concept to distribution. This comprehensive course covers all aspects of film production including storytelling, cinematography, lighting, sound design, directing, and distribution. Learn the technical skills and creative vision needed to bring stories to life on screen.',
  thumbnail: '/images/courses/film-production.jpg',
  modules: filmProduction101Modules,
  learningObjectives: [
    'Understand the complete film production process from development to distribution',
    'Master storytelling techniques and narrative structures',
    'Learn cinematography, lighting, and sound design fundamentals',
    'Develop screenwriting and storyboarding skills',
    'Understand directing and working with actors',
    'Learn film distribution and marketing strategies'
  ]
};

export default filmProduction101CourseData;
