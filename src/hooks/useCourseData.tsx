
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Course, Lesson } from '@/types/course';
import { computerRepairsCourse } from '@/data/computerRepairsCourse';
import { soundEngineeringCourse } from '@/data/soundEngineeringCourse';
import { entrepreneurshipCourse } from '@/data/entrepreneurship/index';
import { podcastManagementCourse } from '@/data/podcastManagement/index';
import { nailTechnicianCourse } from '@/data/nailTechnician/index';
import { plumbingCourse } from '@/data/plumbing/index';
import { hairDressingCourse } from '@/data/hairDressing/index';
import { tilingCourse } from '@/data/tiling/index';
import { dieselMechanicCourse } from '@/data/dieselMechanic/index';
import { motorMechanicPetrolCourse } from '@/data/motorMechanicPetrol/index';
import { roofingCourse } from '@/data/roofing/index';
import { cellphoneRepairsCourse } from '@/data/cellphoneRepairs/index';
import { aiHumanRelationsCourse } from '@/data/aiHumanRelations/index';

export const useCourseData = () => {
  const { id: courseId } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      setIsLoading(true);
      console.log("useCourseData: Loading course with ID:", courseId);
      
      try {
        let foundCourse: Course | null = null;
        
        // Map course IDs to course data
        const courseMap: Record<string, Course> = {
          'computer-repairs': computerRepairsCourse,
          'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d4': soundEngineeringCourse,
          'c9d8e7f6-a5b4-9483-d2e3-f4a5b6c7d8e9': entrepreneurshipCourse,
          'podcast-management': podcastManagementCourse,
          'nail-technician-course': nailTechnicianCourse,
          'plumbing-course': plumbingCourse,
          'hair-dressing-course': hairDressingCourse,
          'tiling-course': tilingCourse,
          'roofing-course': roofingCourse,
          'cellphone-repairs-course': cellphoneRepairsCourse,
          'b8c7d6e5-f4a3-9281-b0c9-d8e7f6a5b4c3': dieselMechanicCourse,
          'a7b6c5d4-e3f2-8391-a2b3-c4d5e6f7a8b9': motorMechanicPetrolCourse,
          'ai-human-relations': aiHumanRelationsCourse
        };

        if (courseId && courseMap[courseId]) {
          foundCourse = courseMap[courseId];
          console.log("useCourseData: Found course:", foundCourse.title);
        } else {
          console.log("useCourseData: Course not found for ID:", courseId);
        }

        setCourse(foundCourse);
      } catch (error) {
        console.error('Error loading course:', error);
        setCourse(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadCourse();
  }, [courseId]);

  // Flatten all lessons from all modules for easier navigation
  const allLessons: Lesson[] = course?.modules.flatMap(module => module.lessons) || [];

  return {
    course,
    allLessons,
    isLoading
  };
};
