
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Course, Lesson, Module } from '@/types/course';
import { comingSoonCourses } from '@/data/comingSoonCourses';
import type { SimplifiedCourse } from '@/types/course';
import { performanceMonitor } from '@/utils/performanceMonitor';
import { courseLoadingMonitor } from '@/services/CourseLoadingPerformanceMonitor';

interface CourseLoadResult {
  course: Course | null;
  status: 'success' | 'partial' | 'fallback' | 'failed';
  errors: string[];
}

interface CourseValidation {
  isValid: boolean;
  hasModules: boolean;
  hasLessons: boolean;
  missingData: string[];
  canProceed: boolean;
}

export const useCourseData = (courseId?: string) => {
  const params = useParams<{ id: string; courseId: string }>();
  const idFromParams = courseId || params.id || params.courseId;
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadResult, setLoadResult] = useState<CourseLoadResult>({
    course: null,
    status: 'failed',
    errors: []
  });

  // Validate course data structure
  const validateCourseData = (course: Course): CourseValidation => {
    const validation: CourseValidation = {
      isValid: true,
      hasModules: false,
      hasLessons: false,
      missingData: [],
      canProceed: false
    };

    if (!course) {
      validation.isValid = false;
      validation.missingData.push('Course object is null');
      return validation;
    }

    // Check for required fields
    if (!course.id) validation.missingData.push('Course ID');
    if (!course.title) validation.missingData.push('Course title');
    if (!course.description) validation.missingData.push('Course description');

    // Check modules
    if (course.modules && Array.isArray(course.modules) && course.modules.length > 0) {
      validation.hasModules = true;
      
      // Check lessons within modules
      const totalLessons = course.modules.reduce((count: number, module: Module) => {
        return count + (module.lessons ? module.lessons.length : 0);
      }, 0);
      
      if (totalLessons > 0) {
        validation.hasLessons = true;
      } else {
        validation.missingData.push('Course lessons');
      }
    } else {
      validation.missingData.push('Course modules');
    }

    // Determine if course can proceed
    validation.canProceed = validation.hasModules && (validation.hasLessons || validation.missingData.length === 1);
    validation.isValid = validation.missingData.length === 0;

    return validation;
  };

  // Create fallback course structure for missing course data
  const createFallbackCourse = (courseId: string, featuredCourse?: any): Course => {
    console.log('Creating fallback course for ID:', courseId);
    
    const fallbackCourse: Course = {
      id: courseId,
      title: featuredCourse?.title || 'Course Content Loading',
      description: featuredCourse?.description || 'Course content is being prepared and will be available soon.',
      category: featuredCourse?.category || 'General',
      level: featuredCourse?.level?.toLowerCase() || 'beginner',
      duration: featuredCourse?.duration || '6 weeks',
      is_free: featuredCourse?.price === 0 || false,
      price: featuredCourse?.price || 290,
      currency: featuredCourse?.currency || 'ZAR',
      students: featuredCourse?.students || 0,
      rating: featuredCourse?.rating || 5,
      instructor: {
        id: 'betaskilltutor',
        first_name: 'Beta Skill',
        last_name: 'Tutor',
        email: 'betaskilltraining@gmail.com'
      },
      status: 'approved',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      available: true,
      isComingSoon: false,
      overview: featuredCourse?.description || 'Course overview will be available soon.',
      thumbnail: featuredCourse?.image || '',
      modules: [
        {
          id: 1,
          title: 'Course Preparation',
          description: 'Course content is being finalized. You will have access once lessons are ready.',
          lessons: [
            {
              id: 1,
              title: 'Welcome & Course Information',
              duration: '5 minutes',
              type: 'video' as const,
              content: {
                videoUrl: '',
                textContent: `
                  <div class="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                    <div class="mb-6">
                      <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-white text-2xl">📚</span>
                      </div>
                      <h2 class="text-3xl font-bold text-gray-900 mb-4">Welcome to ${featuredCourse?.title || 'Your Course'}!</h2>
                    </div>
                    
                    <div class="bg-white p-6 rounded-lg shadow-sm mb-6">
                      <h3 class="text-xl font-semibold mb-3 text-blue-600">🎯 Course Status</h3>
                      <p class="text-lg mb-4 text-gray-700">Thank you for enrolling in this course!</p>
                      <p class="mb-4 text-gray-600">Our expert instructors are putting the finishing touches on your course content.</p>
                      <div class="bg-blue-50 p-4 rounded-lg">
                        <p class="text-blue-800 font-medium">✨ You will be automatically notified when lessons are ready</p>
                      </div>
                    </div>

                    <div class="bg-green-50 p-6 rounded-lg">
                      <h3 class="text-xl font-semibold mb-3 text-green-600">🚀 What to Expect</h3>
                      <ul class="text-left space-y-2 text-gray-700">
                        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> High-quality video lessons</li>
                        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Practical exercises and assignments</li>
                        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Interactive quizzes and assessments</li>
                        <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Certificate upon completion</li>
                      </ul>
                    </div>
                  </div>
                `
              }
            }
          ]
        }
      ],
      learningObjectives: [
        `Master the fundamentals of ${featuredCourse?.title || 'this subject'}`,
        'Gain practical skills and hands-on experience',
        'Prepare for career opportunities in this field',
        'Earn a recognized certificate of completion'
      ]
    };

    return fallbackCourse;
  };

  useEffect(() => {
    const loadCourse = async () => {
      setIsLoading(true);
      console.log("useCourseData: Loading course with ID:", idFromParams);
      
      // Start performance monitoring
      const loadingId = idFromParams ? courseLoadingMonitor.startLoading(idFromParams) : null;
      
      const result: CourseLoadResult = {
        course: null,
        status: 'failed',
        errors: []
      };
      
      try {
        let foundCourse: Course | null = null;
        let featuredCourseData: any = null;
        
        // First, try to get featured course data for fallback purposes
        try {
          const { featuredCourses } = await import('@/data/featuredCourses');
          featuredCourseData = featuredCourses.find(c => c.id === idFromParams || c.courseId === idFromParams);
          console.log('Found featured course data:', featuredCourseData?.title);
        } catch (error) {
          console.warn('Could not load featured courses for fallback:', error);
          result.errors.push('Featured courses unavailable for fallback');
        }
        
        // Dynamic course loading to reduce bundle size
        const courseLoaders: Record<string, () => Promise<{ default?: Course } | Course>> = {
          'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d5': () => import(/* webpackChunkName: "course-sound-engineering" */ '@/data/soundEngineering102Course').then(m => ({ default: m.soundEngineering102Course })),
          'roofing101': () => import(/* webpackChunkName: "course-roofing" */ '@/data/roofing101'),
          'plumbing101': () => import(/* webpackChunkName: "course-plumbing" */ '@/data/plumbing101'),
          'podcast-management-101': () => import(/* webpackChunkName: "course-podcast" */ '@/data/podcastManagement101Course').then(m => ({ default: m.podcastManagement101Course })),
          'podcast-management': () => import(/* webpackChunkName: "course-podcast" */ '@/data/podcastManagement101Course').then(m => ({ default: m.podcastManagement101Course })),
          'motor-mechanic-petrol': () => import(/* webpackChunkName: "course-motor-petrol" */ '@/data/motorMechanicPetrol/index').then(m => ({ default: m.motorMechanicPetrolCourse })),
          'diesel-mechanic': () => import(/* webpackChunkName: "course-diesel" */ '@/data/dieselMechanic/index').then(m => ({ default: m.dieselMechanicCourse })),
          'motor-mechanic-diesel': () => import(/* webpackChunkName: "course-motor-diesel" */ '@/data/motorMechanicDiesel/index').then(m => ({ default: m.motorMechanicDieselCourse })),
          'cellphone-repairs': () => import(/* webpackChunkName: "course-cellphone" */ '@/data/cellphoneRepairs/index').then(m => ({ default: m.cellphoneRepairsCourse })),
          'computer-repairs': () => import(/* webpackChunkName: "course-computer" */ '@/data/computerRepairsCourse').then(m => ({ default: m.computerRepairsCourse })),
          'ai-human-relations': () => import(/* webpackChunkName: "course-ai-human" */ '@/data/aiHumanRelations/index').then(m => ({ default: m.aiHumanRelationsCourse })),
          'hair-dressing': () => import(/* webpackChunkName: "course-hair" */ '@/data/hairDressing/index').then(m => ({ default: m.hairDressingCourse })),
          'nail-technician': () => import(/* webpackChunkName: "course-nail" */ '@/data/nailTechnician/index').then(m => ({ default: m.nailTechnicianCourse })),
          'entrepreneurship-final': () => import(/* webpackChunkName: "course-entrepreneurship" */ '@/data/entrepreneurshipFinalCourse').then(m => ({ default: m.entrepreneurshipFinalCourse })),
          'tiling-101': () => import(/* webpackChunkName: "course-tiling" */ '@/data/tiling101').then(m => ({ default: m.tiling101Course })),
          'motor-mechanic-petrol-02': () => import(/* webpackChunkName: "course-motor-petrol-02" */ '@/data/motorMechanicPetrol02').then(m => ({ default: m.motorMechanicPetrol02Course })),
          'cellphone-repairs-101': () => import(/* webpackChunkName: "course-cellphone-101" */ '@/data/cellphoneRepairs101'),
          'ai-assisted-programming': () => import(/* webpackChunkName: "course-ai-programming" */ '@/data/aiAssistedProgrammingCourse').then(m => ({ default: m.aiAssistedProgrammingCourse })),
          'ai-assisted-web-development': () => import(/* webpackChunkName: "course-ai-web" */ '@/data/aiAssistedWebDevelopmentCourse').then(m => ({ default: m.aiAssistedWebDevelopmentCourse })),
          'christian-teacher': () => import(/* webpackChunkName: "course-christian-teacher" */ '@/data/christianTeacherCourse').then(m => ({ default: m.christianTeacherCourse }))
        };

        if (idFromParams && courseLoaders[idFromParams]) {
          performanceMonitor.startMeasure(`course-load-${idFromParams}`, 'chunk');
          try {
            const courseModule = await courseLoaders[idFromParams]();
            foundCourse = (courseModule as any).default || courseModule as Course;
            console.log("useCourseData: Dynamically loaded course:", foundCourse?.title);
            performanceMonitor.endMeasure(`course-load-${idFromParams}`);
            
            // Validate the loaded course
            if (foundCourse) {
              const validation = validateCourseData(foundCourse);
              if (validation.isValid) {
                result.status = 'success';
              } else if (validation.canProceed) {
                result.status = 'partial';
                result.errors.push(`Course loaded but missing: ${validation.missingData.join(', ')}`);
              } else {
                result.status = 'fallback';
                result.errors.push(`Course validation failed: ${validation.missingData.join(', ')}`);
                console.warn('Course validation failed, creating fallback:', validation);
                foundCourse = createFallbackCourse(idFromParams, featuredCourseData);
              }
            } else {
              result.status = 'failed';
              result.errors.push('Course loading returned null');
            }
          } catch (error: any) {
            console.error(`Failed to load course ${idFromParams}:`, error);
            result.errors.push(`Course loading failed: ${error?.message || 'Unknown error'}`);
            performanceMonitor.endMeasure(`course-load-${idFromParams}`);
            
            // Create fallback course on loading failure
            if (featuredCourseData) {
              console.log('Creating fallback course due to loading failure');
              foundCourse = createFallbackCourse(idFromParams, featuredCourseData);
              result.status = 'fallback';
            }
          }
        } else if (idFromParams) {
          // Course loader not found, try featured courses
          console.log("useCourseData: Course loader not found, checking featured courses for:", idFromParams);
          
          if (featuredCourseData) {
            console.log("useCourseData: Found course in featured courses, creating fallback structure:", featuredCourseData.title);
            foundCourse = createFallbackCourse(idFromParams, featuredCourseData);
            result.status = 'fallback';
            result.errors.push('Course loader not available, using featured course data');
          } else {
            // Try Coming Soon courses as last resort
            const simplified = comingSoonCourses.find(c => c.id === idFromParams) as Partial<SimplifiedCourse> | undefined;
            if (simplified) {
              console.log("useCourseData: Building fallback course for Coming Soon id:", idFromParams);
              foundCourse = createFallbackCourse(idFromParams, simplified);
              result.status = 'fallback';
              result.errors.push('Using coming soon course data');
            } else {
              console.log("useCourseData: Course not found anywhere for ID:", idFromParams);
              result.errors.push('Course not found in any data source');
            }
          }
        }

        // Normalize course: ensure module quizzes are rendered as lessons
        if (foundCourse) {
          try {
            const modulesArray: any[] = Array.isArray((foundCourse as any).modules) ? (foundCourse as any).modules : [];
            const normalizedModules = modulesArray.map((mod: any) => {
              const hasQuizLesson = Array.isArray(mod.lessons) && mod.lessons.some((l: any) => l.type === 'quiz');
              if (!mod.quiz || hasQuizLesson) {
                return mod;
              }
              // Convert module.quiz into a quiz lesson appended to lessons
              const quiz = (mod as any).quiz;
              const quizLesson = {
                id: quiz.id,
                title: quiz.title,
                duration: quiz.duration || '30 min',
                type: 'quiz' as const,
                content: { questions: quiz.questions }
              };
              return {
                ...mod,
                lessons: [...(mod.lessons || []), quizLesson]
              };
            });
            const normalizedCourse = { ...(foundCourse as any), modules: normalizedModules } as Course;
            
            // Final validation of normalized course
            const finalValidation = validateCourseData(normalizedCourse);
            if (!finalValidation.canProceed && result.status === 'success') {
              result.status = 'partial';
              result.errors.push('Course normalization resulted in incomplete data');
            }
            
            result.course = normalizedCourse;
            setCourse(normalizedCourse);
          } catch (normalizationError: any) {
            console.error('Error normalizing course:', normalizationError);
            result.errors.push(`Course normalization failed: ${normalizationError?.message || 'Unknown error'}`);
            result.course = foundCourse;
            setCourse(foundCourse);
          }
        } else {
          result.course = null;
          setCourse(null);
        }
        
        setLoadResult(result);
      } catch (error: any) {
        console.error('Error loading course:', error);
        result.errors.push(`Unexpected error: ${error?.message || 'Unknown error'}`);
        result.status = 'failed';
        setLoadResult(result);
        setCourse(null);
      } finally {
        setIsLoading(false);
        
        // Finish performance monitoring
        if (loadingId && idFromParams) {
          const status = result.status === 'success' || result.status === 'partial' || result.status === 'fallback' 
            ? 'success' 
            : 'error';
          
          const errorMessage = result.errors.length > 0 ? result.errors.join('; ') : undefined;
          
          // Calculate additional metrics
          const moduleCount = result.course?.modules?.length || 0;
          const lessonCount = result.course?.modules?.reduce((count, module) => 
            count + (module.lessons?.length || 0), 0) || 0;
          
          courseLoadingMonitor.finishLoading(loadingId, status, errorMessage, {
            cacheHit: false, // We're always loading fresh in this implementation
            moduleCount,
            lessonCount,
          });
        }
      }
    };

    loadCourse();
  }, [idFromParams]);

  // Flatten all lessons from all modules for easier navigation
  const allLessons: Lesson[] = course?.modules?.flatMap((module: Module) => module.lessons || []) || [];

  return {
    course,
    allLessons,
    isLoading,
    loadResult,
    validateCourseData,
    createFallbackCourse
  };
};
