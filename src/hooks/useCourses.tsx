import { useState, useEffect } from 'react';
import { Course } from '@/types/course';
import { soundEngineering102Course } from '@/data/soundEngineering102Course';

// Define a simplified Course type for the hook's return value
export interface SimplifiedCourse {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  is_free: boolean;
  price: number;
  currency: string;
  students: number;
  rating: number;
  instructor: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  status: string;
  created_at: string;
  updated_at: string;
  available: boolean;
  available_date?: string;
}

// Utility to generate a slug from a string (e.g., 'AI Human Relations' -> 'ai-human-relations')
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '');    // Remove leading/trailing hyphens
}

export const useCourses = () => {
  const [courses, setCourses] = useState<SimplifiedCourse[]>(() => {
    try {
      const cached = localStorage.getItem('courses');
      return cached ? JSON.parse(cached) : [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(false); // Start with false to avoid loading delays
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        
        // Restore static course data for now
        const staticCourses: SimplifiedCourse[] = [
          {
            id: 'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d5',
            title: 'Sound Engineering',
            description: 'Master the art of sound engineering and audio production with comprehensive training in recording, mixing, and mastering techniques.',
            category: 'Audio Technology',
            level: 'intermediate',
            duration: '12 weeks',
            is_free: false,
            price: 2500,
            currency: 'ZAR',
            students: 892,
            rating: 4.9,
            instructor: { id: 'betaskilltutor', first_name: 'David', last_name: 'Martinez', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'roofing101',
            title: 'Roofing',
            description: 'Comprehensive online course covering roofing design, installation, maintenance, and modern sustainable practices',
            category: 'Construction',
            level: 'beginner',
            duration: '8-10 weeks',
            is_free: false,
            price: 1800,
            currency: 'ZAR',
            students: 650,
            rating: 4.7,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'plumbing101',
            title: 'Plumbing',
            description: 'Comprehensive online course covering plumbing fundamentals, tools, systems, installation, and professional practices',
            category: 'Construction',
            level: 'beginner',
            duration: '8-10 weeks',
            is_free: false,
            price: 1800,
            currency: 'ZAR',
            students: 650,
            rating: 4.7,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'podcast-management-101',
            title: 'Podcast Management',
            description: 'Unlock the secrets to creating, managing, and growing a successful podcast with this comprehensive online course, designed to guide you from concept to chart-topping production. Covering ideation, recording, editing, publishing, and marketing, this course equips you with the tools and strategies to build a professional podcast that captivates audiences.',
            category: 'Media & Content Creation',
            level: 'beginner',
            duration: '10 weeks',
            is_free: false,
            price: 3200,
            currency: 'ZAR',
            students: 892,
            rating: 4.9,
            instructor: { id: 'betaskilltutor', first_name: 'Alex', last_name: 'Rodriguez', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'motor-mechanic-petrol',
            title: 'Motor Mechanic (Petrol)',
            description: 'Comprehensive training in petrol engine diagnostics, repair, and maintenance for automotive professionals.',
            category: 'Motor Vehicles',
            level: 'intermediate',
            duration: '12 weeks',
            is_free: false,
            price: 2200,
            currency: 'ZAR',
            students: 750,
            rating: 4.6,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'diesel-mechanic',
            title: 'Diesel Mechanic',
            description: 'Advanced training in diesel engine systems, diagnostics, and repair techniques for heavy machinery.',
            category: 'Motor Vehicles',
            level: 'intermediate',
            duration: '14 weeks',
            is_free: false,
            price: 2400,
            currency: 'ZAR',
            students: 580,
            rating: 4.8,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'cellphone-repairs',
            title: 'Cellphone Repairs',
            description: 'Learn smartphone diagnostics, repairs, and maintenance for a career in mobile device repair.',
            category: 'Information Communication and technology',
            level: 'beginner',
            duration: '8 weeks',
            is_free: false,
            price: 1600,
            currency: 'ZAR',
            students: 920,
            rating: 4.7,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'computer-repairs',
            title: 'Computer Repairs',
            description: 'Master computer hardware and software troubleshooting for IT support and repair careers.',
            category: 'Information Communication and technology',
            level: 'intermediate',
            duration: '10 weeks',
            is_free: false,
            price: 2000,
            currency: 'ZAR',
            students: 1100,
            rating: 4.8,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'ai-human-relations',
            title: 'AI and Human Relations',
            description: 'Explore the intersection of artificial intelligence and human interaction, covering AI fundamentals, ethics, and workplace applications.',
            category: 'Information Communication and technology',
            level: 'intermediate',
            duration: '8 weeks',
            is_free: false,
            price: 1800,
            currency: 'ZAR',
            students: 680,
            rating: 4.9,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'hair-dressing',
            title: 'Hair Dressing',
            description: 'Professional hair styling, cutting, coloring, and salon management training for beauty industry careers.',
            category: 'Beauty and Health',
            level: 'beginner',
            duration: '12 weeks',
            is_free: false,
            price: 1500,
            currency: 'ZAR',
            students: 850,
            rating: 4.6,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'nail-technician',
            title: 'Nail Technician',
            description: 'Learn nail care, art, and extension techniques to become a certified nail technician.',
            category: 'Beauty and Health',
            level: 'beginner',
            duration: '6 weeks',
            is_free: false,
            price: 1000,
            currency: 'ZAR',
            students: 850,
            rating: 4.6,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'entrepreneurship-final',
            title: 'Entrepreneurship',
            description: '"Entrepreneurship: Creating Your Business" is a comprehensive online course designed to empower aspiring entrepreneurs with the skills, mindset, and strategies needed to launch and sustain a successful business. This course covers the entrepreneurial journey from ideation to execution, exploring critical topics such as identifying market opportunities, conducting effective market research, crafting business models, and implementing targeted marketing strategies. Learners will gain practical insights into the planning and development processes, understand the business ecosystem, and discover how to create a unique value proposition that resonates with customers. Delivered entirely online, this course is accessible globally and combines engaging content with actionable tools to help you turn your business ideas into reality, whether you\'re starting a local service or a scalable tech venture.',
            category: 'Business & Entrepreneurship',
            level: 'intermediate',
            duration: '6 weeks',
            is_free: false,
            price: 2800,
            currency: 'ZAR',
            students: 1247,
            rating: 4.8,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          }
        ];
        // Set instructor for all courses to Beta Skill Tutor
        staticCourses.forEach(course => {
          course.instructor = {
            id: 'betaskilltutor',
            first_name: 'Beta Skill',
            last_name: 'Tutor',
            email: 'betaskilltraining@gmail.com'
          };
        });
        setCourses(staticCourses);
        setLoading(false);
      } catch (err) {
        console.error('Error loading courses:', err);
        setError('Failed to load courses');
        setLoading(false);
      }
    };

    // Add timeout protection to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 10000); // 10 second timeout (increased from 3)

    loadCourses();

    return () => clearTimeout(timeoutId);
  }, []);

  const createCourse = async (courseData: any) => {
    try {
      // Generate a slug from the course title for the course ID
      const slug = slugify(courseData.title);
      // Mock implementation for now - in real app this would call an API
      const newCourse = {
        ...courseData,
        id: slug,
        status: 'approved',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        available: true,
        students: 0,
        rating: 0,
        instructor: {
          id: 'instructor-temp',
          first_name: 'Temp',
          last_name: 'Instructor',
          email: 'temp.instructor@example.com'
        },
        duration: courseData.duration || '4 weeks',
        price: courseData.is_free ? 0 : courseData.price,
        currency: 'ZAR',
      };
      setCourses(prev => [...prev, newCourse]);
      return newCourse;
    } catch (error) {
      console.error('Error creating course:', error);
      return false;
    }
  };

  return {
    courses,
    loading,
    error,
    createCourse
  };
};

// Export the Course type for backward compatibility
export type { SimplifiedCourse as Course };
