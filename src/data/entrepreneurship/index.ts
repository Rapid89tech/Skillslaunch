import { module1StartingBusiness } from './module1-starting-business';
import { module2DevelopingBusinessPlan } from './module2-developing-business-plan';
import { module3LegalConsiderations } from './module3-legal-considerations';
import { module4FundingFinancialManagement } from './module4-funding-financial-management';
import { module5BrandingMarketing } from './module5-branding-marketing';
import { module6LaunchingScaling } from './module6-launching-scaling';
import { lesson7Certificate } from './module7-certificate';
import type { Course, Module } from '@/types/course';

export const entrepreneurshipCourse: Course = {
  id: 'c9d8e7f6-a5b4-9483-d2e3-f4a5b6c7d8e9',
  title: 'Entrepreneurship - Starting Your Business',
  description: 'Master the fundamentals of entrepreneurship and learn how to start and grow your own successful business venture.',
  instructor: {
    name: 'Sarah Mitchell',
    title: 'Certified Business Development Coach',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Over 15 years of experience in business development and entrepreneurship. Has helped launch over 200 successful startups and holds an MBA in Entrepreneurship from Harvard Business School.'
  },
  level: 'beginner',
  duration: '10 weeks',
  students: 1024,
  rating: 4.9,
  price: 2200,
  currency: 'ZAR',
  is_free: false,
  thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  category: 'Business',
  learningObjectives: [
    'Develop an understanding of the common characteristics of an entrepreneur',
    'Explain the development process and planning involved in launching a new product',
    'Describe the business ecosystem and successful business models',
    'Learn how to identify viable business opportunities',
    'Master market research and competitor analysis techniques',
    'Create and validate minimum viable products (MVPs)',
    'Understand customer needs and target market identification',
    'Develop skills in demand assessment and idea validation',
    'Master the art of creating comprehensive business plans',
    'Learn to set SMART goals for business success',
    'Understand financial planning and operational strategies'
  ],
  modules: [
    module1StartingBusiness,
    module2DevelopingBusinessPlan,
    module3LegalConsiderations,
    module4FundingFinancialManagement,
    module5BrandingMarketing,
    module6LaunchingScaling,
    {
      id: 7,
      title: 'Course Completion',
      description: 'Complete your entrepreneurship certification',
      lessons: [lesson7Certificate]
    } as Module
  ]
};