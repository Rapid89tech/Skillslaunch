import { Course } from '@/types/course';
import module1 from './module1';
import module2 from './module2';
import module3 from './module3';
import module4 from './module4';
import module5 from './module5';
import module6 from './module6';

export const aiAssistedProgrammingCourse: Course = {
  id: 'ai-assisted-programming-101',
  title: 'AI Assisted Programming 101',
  description: 'Master the fundamentals of AI-powered programming tools and techniques to enhance your development workflow.',
  category: 'ICT',
  price: 500,
  duration: '6-8 weeks',
  level: 'Beginner to Intermediate',
  instructor: {
    id: 'dr-russon-nkuna',
    first_name: 'Dr. Russon',
    last_name: 'Nkuna',
    email: 'dr.russon@example.com',
    bio: 'Expert in AI-assisted development and modern programming practices.',
    avatar: '/images/instructors/dr-russon.jpg'
  },
  thumbnail: '/images/courses/ai-assisted-programming.jpg',
  modules: [
    module1,
    module2,
    module3,
    module4,
    module5,
    module6
  ],
  students: 0,
  rating: 5.0,
  reviews: [],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  status: 'approved',
  is_free: false,
  currency: 'ZAR',
  available: true
};

export default aiAssistedProgrammingCourse;
