
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Course, Lesson } from '@/types/course';
import { soundEngineering102Course } from '@/data/soundEngineering102Course';
import roofing101 from '@/data/roofing101';
import plumbing101 from '@/data/plumbing101';
import { podcastManagement101Course } from '@/data/podcastManagement101Course';
import { motorMechanicPetrolCourse } from '@/data/motorMechanicPetrol/index';
import { dieselMechanicCourse } from '@/data/dieselMechanic/index';
import { cellphoneRepairsCourse } from '@/data/cellphoneRepairs/index';
import { computerRepairsCourse } from '@/data/computerRepairsCourse';
import { aiHumanRelationsCourse } from '@/data/aiHumanRelations/index';
import { hairDressingCourse } from '@/data/hairDressing/index';
import { nailTechnicianCourse } from '@/data/nailTechnician/index';
import { entrepreneurshipFinalCourse } from '@/data/entrepreneurshipFinalCourse';

export const useCourseData = (courseId?: string) => {
  const params = useParams<{ id: string; courseId: string }>();
  const idFromParams = courseId || params.id || params.courseId;
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      setIsLoading(true);
      console.log("useCourseData: Loading course with ID:", idFromParams);
      
      try {
        let foundCourse: Course | null = null;
        
        // Map course IDs to course data
        const courseMap: Record<string, Course> = {
          'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d5': soundEngineering102Course, // Sound Engineering 102
          'roofing101': roofing101,
          'plumbing101': plumbing101,
          'podcast-management-101': podcastManagement101Course,
          'motor-mechanic-petrol': motorMechanicPetrolCourse,
          'diesel-mechanic': dieselMechanicCourse,
          'cellphone-repairs': cellphoneRepairsCourse,
          'computer-repairs': computerRepairsCourse,
          'ai-human-relations': aiHumanRelationsCourse,
          'hair-dressing': hairDressingCourse,
          'nail-technician': nailTechnicianCourse,
          'entrepreneurship-final': entrepreneurshipFinalCourse
        };

        if (idFromParams && courseMap[idFromParams]) {
          foundCourse = courseMap[idFromParams];
          console.log("useCourseData: Found course:", foundCourse.title);
        } else {
          console.log("useCourseData: Course not found for ID:", idFromParams);
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
  }, [idFromParams]);

  // Flatten all lessons from all modules for easier navigation
  const allLessons: Lesson[] = course?.modules.flatMap(module => module.lessons) || [];

  return {
    course,
    allLessons,
    isLoading
  };
};
