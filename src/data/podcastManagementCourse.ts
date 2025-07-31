import { Course } from '@/types/course';
import { module1IntroductionToPodcasting } from './podcastManagement/module1/index';
import { module2PreProductionPlanning } from './podcastManagement/module2/index';
import { module3RecordingProduction } from './podcastManagement/module3/index';

export const podcastManagementCourse: Course = {
  id: 'podcast-management-mastery',
  title: 'Podcast Management Mastery: Launching and Growing Your Audio Brand',
  description: `Unlock the secrets to creating, managing, and growing a successful podcast with this comprehensive online course, designed to guide you from concept to chart-topping production. Covering ideation, recording, editing, publishing, and marketing, this course equips you with the tools and strategies to build a professional podcast that captivates audiences. Delivered entirely online with flexible, interactive learning, it's perfect for aspiring podcasters, content creators, or marketers looking to leverage the power of audio storytelling. With hands-on projects and expert insights, you'll gain the skills to manage every aspect of a podcast, ensuring it stands out in a crowded digital landscape.

Whether you're a beginner looking to launch your first podcast or an experienced creator aiming to scale your show, this course offers a structured yet flexible learning path. With a focus on practical experience, students will work on real-world projects, such as developing a podcast concept, recording professional episodes, and implementing marketing strategies, while leveraging cutting-edge online tools to collaborate and create, ensuring relevance in today's competitive podcast landscape.`,
  instructor: {
    name: 'Sarah Mitchell',
    title: 'Senior Podcast Producer & Digital Media Strategist',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c63c?w=150&h=150&fit=crop&crop=face',
    bio: 'With over 8 years in digital media and podcast production, Sarah has managed top-ranking shows across multiple genres, helping creators grow their audiences and revenue streams.'
  },
  level: 'beginner',
  duration: '10 weeks',
  students: 892,
  rating: 4.8,
  price: 1200,
  currency: 'ZAR',
  is_free: false,
  thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop',
  category: 'Media Production',
  learningObjectives: [
    'Develop a compelling podcast concept, including defining niche, audience, and format.',
    'Master audio recording and editing software, such as Audacity and Adobe Audition, to produce high-quality episodes.',
    'Implement effective microphone and recording techniques to achieve professional-grade audio.',
    'Create and execute a content plan, including episode scripting, guest management, and scheduling.',
    'Publish podcasts on major platforms (e.g., Spotify, Apple Podcasts) with optimized metadata and RSS feeds.',
    'Apply marketing strategies, including social media promotion and audience engagement, to grow listenership.',
    'Analyze podcast performance metrics using analytics tools to refine content and increase reach.',
    'Build effective guest coordination systems and manage professional relationships.',
    'Create powerful marketing and promotion campaigns that drive audience growth.',
    'Implement multiple monetization strategies for sustainable podcast revenue.',
    'Set up professional hosting and distribution systems for global reach.',
    'Use analytics to optimize podcast performance and audience retention.',
    'Master project management and team collaboration for podcast production.',
    'Launch and manage successful podcast projects from concept to completion.',
    'Work professionally with clients and manage contracts effectively.',
    'Price services effectively and manage multiple shows simultaneously.'
  ],
  modules: [
    module1IntroductionToPodcasting,
    module2PreProductionPlanning,
    module3RecordingProduction
  ]
}; 