import { Course } from '@/types/course';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';
import { module4 } from './module4';
import { module5 } from './module5';
import { module6 } from './module6';
import { module7 } from './module7';
import { module8 } from './module8';
import { module9 } from './module9';
import { module10 } from './module10';

export const podcastManagement101Course: Course = {
  id: 'p9c8d7e6-f5a4-9382-c1d0-e9f8a7b6c5d4',
  title: 'Podcast Management 101: Launching and Growing Your Audio Brand',
  description: `Unlock the secrets to creating, managing, and growing a successful podcast with this comprehensive online course, designed to guide you from concept to chart-topping production. Covering ideation, recording, editing, publishing, and marketing, this course equips you with the tools and strategies to build a professional podcast that captivates audiences. Delivered entirely online with flexible, interactive learning, it's perfect for aspiring podcasters, content creators, or marketers looking to leverage the power of audio storytelling. With hands-on projects and expert insights, you'll gain the skills to manage every aspect of a podcast, ensuring it stands out in a crowded digital landscape.

The course emphasizes real-world application, guiding learners through hands-on exercises like recording and editing sample audio files, drafting podcast pitches, and creating marketing strategies. Its relevance lies in equipping individuals with the knowledge to navigate today's dynamic podcasting industry, where audio content drives engagement and brand building. With flexible, self-paced learning and support from an AI-powered voice tutor, this course is ideal for anyone looking to build a successful podcast with confidence and clarity.`,
  instructor: {
    name: 'Alex Rodriguez',
    title: 'Podcast Producer & Audio Content Strategist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Experienced podcast producer and audio content strategist with 8+ years helping creators build successful audio brands.'
  },
  level: 'beginner',
  duration: '10 weeks',
  students: 892,
  rating: 4.9,
  price: 500,
  currency: 'ZAR',
  is_free: false,
  thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop',
  category: 'Media & Content Creation',
  learningObjectives: [
    'Develop a compelling podcast concept, including defining niche, audience, and format.',
    'Master audio recording and editing software, such as Audacity and Adobe Audition, to produce high-quality episodes.',
    'Implement effective microphone and recording techniques to achieve professional-grade audio.',
    'Create and execute a content plan, including episode scripting, guest management, and scheduling.',
    'Publish podcasts on major platforms (e.g., Spotify, Apple Podcasts) with optimized metadata and RSS feeds.',
    'Apply marketing strategies, including social media promotion and audience engagement, to grow listenership.',
    'Analyze podcast performance metrics using analytics tools to refine content and increase reach.',
    'Understand monetization strategies including advertising, sponsorships, and paid subscriptions.',
    'Master project and team management for podcast production workflows.',
    'Develop skills for launching and managing client shows professionally.'
  ],
  modules: [
    module1,
    module2,
    module3,
    module4,
    module5,
    module6,
    module7,
    module8,
    module9,
    module10
  ]
}; 