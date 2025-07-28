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
  title: 'Entrepreneurship: Building Your Business',
  description: `"Entrepreneurship: Building Your Business” is a comprehensive online course designed to empower aspiring entrepreneurs with the skills, mindset, and strategies needed to launch and sustain a successful business. This course covers the entrepreneurial journey from ideation to execution, exploring critical topics such as identifying market opportunities, conducting effective market research, crafting business models, and implementing targeted marketing strategies. Learners will gain practical insights into the planning and development processes, understand the business ecosystem, and discover how to create a unique value proposition that resonates with customers. Delivered entirely online, this course is accessible globally and combines engaging content with actionable tools to help you turn your business ideas into reality, whether you're starting a local service or a scalable tech venture.`,
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
    'Identify and articulate the mindset and common characteristics of successful entrepreneurs, applying these traits to their own ventures.',
    'Conduct a Community Scan to evaluate market needs and validate business opportunities using observational and interview techniques.',
    'Perform targeted market research to define customer segments, analyze demand, and develop a unique value proposition.',
    'Explain and apply the development and planning processes involved in launching a new product or service, including creating a business plan.',
    'Analyze the business ecosystem and evaluate successful business models (e.g., subscription, freemium, or product-based) to select the most suitable for their venture.',
    'Design effective marketing strategies that focus on specific customer segments to maximize impact and resource efficiency.',
    'Develop a comprehensive business pitch tailored to attract investors, partners, or customers.'
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