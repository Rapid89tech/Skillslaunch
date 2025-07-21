
import { Course } from '@/types/course';
import { module1IntroductionToSoundEngineering } from './soundEngineering/module1/index';
import { module2AudioTechnology } from './soundEngineering/module2/index';
import { module3MicrophonesAndApplications } from './soundEngineering/module3/index';
import { module4DigitalAudioWorkstations } from './soundEngineering/module4/index';
import { module5MixingPrinciples } from './soundEngineering/module5/index';

export const soundEngineeringCourse: Course = {
  id: 'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d4',
  title: 'Sound Engineering Professional Certification',
  description: 'Master the fundamentals of sound engineering with hands-on training in recording, mixing, and audio production.',
  instructor: {
    name: 'David Martinez',
    title: 'Senior Audio Engineer & Producer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Award-winning sound engineer with 15+ years in the music industry, having worked with major record labels and live venues.'
  },
  level: 'beginner',
  duration: '12 weeks',
  students: 892,
  rating: 4.9,
  price: 2500,
  currency: 'ZAR',
  is_free: false,
  thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
  category: 'Audio Technology',
  learningObjectives: [
    'Master recording techniques and studio equipment',
    'Learn mixing fundamentals and gain staging',
    'Understand acoustics and sound physics',
    'Operate digital audio workstations (DAWs)',
    'Apply EQ, compression, and reverb techniques',
    'Develop critical listening skills'
  ],
  modules: [
    module1IntroductionToSoundEngineering,
    module2AudioTechnology,
    module3MicrophonesAndApplications,
    module4DigitalAudioWorkstations,
    module5MixingPrinciples
  ]
};
