import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthContext';
import { useToast } from './use-toast';

export interface ModuleScore {
  id: string;
  user_id: string;
  course_id: string;
  module_id: number;
  lesson_id: number;
  score: number;
  total_points: number;
  percentage: number;
  grade: string;
  completed_at: string;
  created_at: string;
  updated_at: string;
}

export interface CourseScoreSummary {
  user_id: string;
  course_id: string;
  completed_modules: number;
  total_score: number;
  total_possible_points: number;
  average_percentage: number;
  overall_grade: string;
}

// Mapping from course slugs to UUIDs for DB queries
const courseSlugToUuid: Record<string, string> = {
  'ai-human-relations': 'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d4',
  'entrepreneurship-101': 'c9d8e7f6-a5b4-9483-d2e3-f4a5b6c7d8e9',
  'sound-engineering': 'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d4',
  'motor-mechanic-petrol': 'a7b6c5d4-e3f2-8391-a2b3-c4d5e6f7a8b9',
  'diesel-mechanic': 'b8c7d6e5-f4a3-9281-b0c9-d8e7f6a5b4c3',
  'podcast-management': 'p9c8d7e6-f5a4-9382-c1d0-e9f8a7b6c5d4', // Added podcast management
  // Add more mappings as needed
};

export const useModuleScores = (courseId?: string) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [scores, setScores] = useState<ModuleScore[]>([]);
  const [courseSummary, setCourseSummary] = useState<CourseScoreSummary | null>(null);
  const [loading, setLoading] = useState(false);

  // Helper to get the real UUID for DB queries
  const getDbCourseId = (id?: string) => {
    if (!id) return undefined;
    // If the ID is already a UUID, return it as is
    if (id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return id;
    }
    return courseSlugToUuid[id] || id;
  };

  // Fetch scores for a specific course or all courses
  const fetchScores = async () => {
    if (!user || !courseId) return;
    const dbCourseId = getDbCourseId(courseId);
    if (!dbCourseId) {
      console.warn('No database course ID found for:', courseId);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('module_scores')
        .select('*')
        .eq('user_id', user.id)
        .eq('course_id', dbCourseId)
        .order('created_at', { ascending: false });

      if (error) {
        // Only show error if it's not a "no rows" error
        if (error.code !== 'PGRST116') {
          console.error('Error fetching scores:', error, JSON.stringify(error));
          toast({
            title: "Error",
            description: error.message ? `Failed to load scores: ${error.message}` : "Failed to load scores",
            variant: "destructive",
          });
        }
        setScores([]);
        return;
      }

      setScores(data || []);
    } catch (error: any) {
      console.error('Error fetching scores:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to load scores",
        variant: "destructive",
      });
      setScores([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch course summary
  const fetchCourseSummary = async () => {
    if (!user || !courseId) return;
    const dbCourseId = getDbCourseId(courseId);
    if (!dbCourseId) {
      console.warn('No database course ID found for course summary:', courseId);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('course_score_summary')
        .select('*')
        .eq('user_id', user.id)
        .eq('course_id', dbCourseId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching course summary:', error);
        return;
      }

      setCourseSummary(data);
    } catch (error) {
      console.error('Error fetching course summary:', error);
    }
  };

  // Submit or update a score for a quiz/assignment
  const submitScore = async (moduleId: number, lessonId: number, score: number, totalPoints: number = 100) => {
    if (!user || !courseId) {
      console.warn('No user or courseId for score submission');
      return false;
    }
    
    const dbCourseId = getDbCourseId(courseId);
    if (!dbCourseId) {
      console.warn('No database course ID found for score submission:', courseId);
      return false;
    }

    try {
      console.log('Submitting score:', {
        user_id: user.id,
        course_id: dbCourseId,
        module_id: moduleId,
        lesson_id: lessonId,
        score: score,
        total_points: totalPoints,
      });

      const { error } = await supabase
        .from('module_scores')
        .upsert({
          user_id: user.id,
          course_id: dbCourseId,
          module_id: moduleId,
          lesson_id: lessonId,
          score: score,
          total_points: totalPoints,
        }, {
          onConflict: 'user_id,course_id,module_id,lesson_id'
        });

      if (error) {
        console.error('Error submitting score:', error);
        toast({
          title: "Error",
          description: "Failed to save score",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Score Saved",
        description: `You scored ${score}/${totalPoints} (${Math.round((score/totalPoints) * 100)}%)`,
      });

      // Refresh data
      await fetchScores();
      await fetchCourseSummary();
      
      return true;
    } catch (error) {
      console.error('Error submitting score:', error);
      return false;
    }
  };

  // Get grade color for UI display
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600 bg-green-100 border-green-300';
      case 'B': return 'text-blue-600 bg-blue-100 border-blue-300';
      case 'C': return 'text-yellow-600 bg-yellow-100 border-yellow-300';
      case 'D': return 'text-orange-600 bg-orange-100 border-orange-300';
      case 'F': return 'text-red-600 bg-red-100 border-red-300';
      default: return 'text-gray-600 bg-gray-100 border-gray-300';
    }
  };

  // Get score for a specific module and lesson
  const getScore = (moduleId: number, lessonId: number) => {
    return scores.find(s => s.module_id === moduleId && s.lesson_id === lessonId);
  };

  // Calculate module average
  const getModuleAverage = (moduleId: number) => {
    const moduleScores = scores.filter(s => s.module_id === moduleId);
    if (moduleScores.length === 0) return null;
    
    const totalScore = moduleScores.reduce((sum, s) => sum + s.score, 0);
    const totalPossible = moduleScores.reduce((sum, s) => sum + s.total_points, 0);
    const percentage = (totalScore / totalPossible) * 100;
    
    let grade = 'F';
    if (percentage >= 90) grade = 'A';
    else if (percentage >= 80) grade = 'B';
    else if (percentage >= 70) grade = 'C';
    else if (percentage >= 60) grade = 'D';
    
    return {
      score: totalScore,
      totalPoints: totalPossible,
      percentage: Math.round(percentage * 100) / 100,
      grade
    };
  };

  useEffect(() => {
    if (user && courseId) {
      fetchScores();
      fetchCourseSummary();
    }
  }, [user, courseId]);

  return {
    scores,
    courseSummary,
    loading,
    submitScore,
    getGradeColor,
    getScore,
    getModuleAverage,
    fetchScores,
    fetchCourseSummary
  };
};