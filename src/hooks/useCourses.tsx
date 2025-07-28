import { useState, useEffect } from 'react';
import { Course } from '@/types/course';
import { podcastManagementCourse } from '@/data/podcastManagement/index';
import { nailTechnicianCourse } from '@/data/nailTechnician/index';
import { plumbingCourse } from '@/data/plumbing/index';
import { hairDressingCourse } from '@/data/hairDressing/index';
import { tilingCourse } from '@/data/tiling/index';
import { roofingCourse } from '@/data/roofing/index';
import { cellphoneRepairsCourse } from '@/data/cellphoneRepairs/index';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        
        // Restore static course data for now
        const staticCourses: SimplifiedCourse[] = [
          {
            id: 'ai-human-relations',
            title: 'AI and Human Relations',
            description: 'Explore the intersection of artificial intelligence and human interaction. Learn about AI fundamentals, human-AI collaboration, and the ethical implications of AI in society.',
            category: 'Information Communication and technology',
            level: 'beginner',
            duration: '8 weeks',
            is_free: false,
            price: 899,
            currency: 'ZAR',
            students: 1847,
            rating: 4.8,
            instructor: {
              id: 'betaskilltutor',
              first_name: 'Beta Skill',
              last_name: 'Tutor',
              email: 'betaskilltraining@gmail.com'
            },
            status: 'approved',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            available: true
          },
          {
            id: 'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d4',
            title: 'Sound Engineering',
            description: 'Master the art and science of sound engineering with hands-on training in recording, mixing, mastering, and live sound production',
            category: 'Information Communication and technology',
            level: 'intermediate',
            duration: '10 weeks',
            is_free: false,
            price: 3500,
            currency: 'ZAR',
            students: 892,
            rating: 4.8,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'podcast-management',
            title: 'Podcast Management',
            description: 'Become a podcast pro! Learn planning, production, distribution, and audience growth strategies for successful podcasting.',
            category: 'Information Communication and technology',
            level: 'intermediate',
            duration: '8 weeks',
            is_free: false,
            price: 1200,
            currency: 'ZAR',
            students: 500,
            rating: 4.7,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'computer-repairs',
            title: 'Computer & Laptop Repairs',
            description: 'Master computer and laptop repair techniques including hardware diagnostics, component replacement, and professional service skills',
            category: 'Information Communication and technology',
            level: 'beginner',
            duration: '6 weeks',
            is_free: false,
            price: 950,
            currency: 'ZAR',
            students: 1200,
            rating: 4.6,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'cellphone-repairs-course',
            title: 'Cellphone Repairs and Maintenance',
            description: 'Learn to repair and maintain smartphones and tablets, including diagnostics, screen replacement, and battery servicing.',
            category: 'Information Communication and technology',
            level: 'beginner',
            duration: '5 weeks',
            is_free: false,
            price: 800,
            currency: 'ZAR',
            students: 900,
            rating: 4.5,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'hair-dressing-course',
            title: 'Hair Dressing',
            description: 'Become a certified hairdresser with training in cutting, coloring, styling, and salon management.',
            category: 'Beauty and Health',
            level: 'beginner',
            duration: '8 weeks',
            is_free: false,
            price: 1500,
            currency: 'ZAR',
            students: 1100,
            rating: 4.7,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'nail-technician-course',
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
            id: 'b8c7d6e5-f4a3-9281-b0c9-d8e7f6a5b4c3',
            title: 'Diesel Mechanic',
            description: 'Comprehensive training in diesel engine repair, maintenance, and troubleshooting for heavy-duty vehicles and equipment',
            category: 'Mechanical Repairs',
            level: 'intermediate',
            duration: '12 weeks',
            is_free: false,
            price: 4200,
            currency: 'ZAR',
            students: 743,
            rating: 4.7,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'a7b6c5d4-e3f2-8391-a2b3-c4d5e6f7a8b9',
            title: 'Motor Mechanic (Petrol)',
            description: 'Complete training in petrol engine systems, diagnostics, repair techniques, and automotive maintenance',
            category: 'Mechanical Repairs',
            level: 'intermediate',
            duration: '10 weeks',
            is_free: false,
            price: 3800,
            currency: 'ZAR',
            students: 656,
            rating: 4.6,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'plumbing-course',
            title: 'Plumbing',
            description: 'Get certified in plumbing with hands-on training in installation, repair, and maintenance of plumbing systems.',
            category: 'Construction',
            level: 'intermediate',
            duration: '10 weeks',
            is_free: false,
            price: 2000,
            currency: 'ZAR',
            students: 700,
            rating: 4.5,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'tiling-course',
            title: 'Professional Tiling',
            description: 'Learn tiling techniques for floors and walls, including surface preparation, layout, and finishing.',
            category: 'Construction',
            level: 'beginner',
            duration: '7 weeks',
            is_free: false,
            price: 1100,
            currency: 'ZAR',
            students: 600,
            rating: 4.4,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'roofing-course',
            title: 'Professional Roofing',
            description: 'Get certified in roofing installation, repair, and safety for residential and commercial buildings.',
            category: 'Construction',
            level: 'intermediate',
            duration: '9 weeks',
            is_free: false,
            price: 1700,
            currency: 'ZAR',
            students: 550,
            rating: 4.3,
            instructor: { id: 'betaskilltutor', first_name: 'Beta Skill', last_name: 'Tutor', email: 'betaskilltraining@gmail.com' },
            status: 'approved', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), available: true
          },
          {
            id: 'c9d8e7f6-a5b4-9483-d2e3-f4a5b6c7d8e9',
            title: 'Entrepreneurship',
            description: 'Learn essential entrepreneurship skills including business planning, market research, funding strategies, and startup management',
            category: 'Business',
            level: 'beginner',
            duration: '6 weeks',
            is_free: true,
            price: 0,
            currency: 'ZAR',
            students: 2341,
            rating: 4.5,
            instructor: {
              id: 'betaskilltutor',
              first_name: 'Beta Skill',
              last_name: 'Tutor',
              email: 'betaskilltraining@gmail.com'
            },
            status: 'approved',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            available: true
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
