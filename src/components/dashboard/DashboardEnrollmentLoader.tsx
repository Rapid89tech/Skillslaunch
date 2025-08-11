import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/AuthContext';
import { ensureSampleEnrollmentData } from '@/utils/dashboardTestData';
import EnrolledCoursesList from './EnrolledCoursesList';
import RecentActivities from './RecentActivities';

interface DashboardEnrollmentLoaderProps {
  courses: any[];
}

const DashboardEnrollmentLoader = ({ courses }: DashboardEnrollmentLoaderProps) => {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllEnrollmentSources = () => {
      if (!user) {
        setEnrollments([]);
        setLoading(false);
        return;
      }

      console.log('🔍 Loading enrollments from all sources for user:', user.id);
      
      // First, ensure we have some sample data for testing if no real data exists
      const createdSampleData = ensureSampleEnrollmentData(user.id);
      if (createdSampleData) {
        console.log('📝 Created sample enrollment data for testing');
      }
      
      const allEnrollments: any[] = [];
      
      // Source 1: General localStorage enrollments
      try {
        const localEnrollments = localStorage.getItem('enrollments');
        if (localEnrollments) {
          const parsed = JSON.parse(localEnrollments);
          console.log('📦 Found localStorage enrollments:', parsed);
          allEnrollments.push(...parsed);
        }
      } catch (error) {
        console.warn('Error loading localStorage enrollments:', error);
      }
      
      // Source 2: User-specific cache
      try {
        const userCache = localStorage.getItem(`user-enrollments-${user.id}`);
        if (userCache) {
          const parsed = JSON.parse(userCache);
          console.log('👤 Found user-specific enrollments:', parsed);
          allEnrollments.push(...parsed);
        }
      } catch (error) {
        console.warn('Error loading user-specific enrollments:', error);
      }
      
      // Source 3: Emergency restored enrollments
      try {
        const emergencyEnrollments = localStorage.getItem('emergency-enrollments');
        if (emergencyEnrollments) {
          const parsed = JSON.parse(emergencyEnrollments);
          console.log('🚨 Found emergency enrollments:', parsed);
          allEnrollments.push(...parsed);
        }
      } catch (error) {
        console.warn('Error loading emergency enrollments:', error);
      }
      
      // Source 4: Check for known course IDs with progress
      const knownCourseIds = [
        'roofing', 'plumbing', 'podcast-management', 'tiling-101', 
        'hair-dressing', 'ai-human-relations', 'nail-technician',
        'motor-mechanic-diesel', 'computer-repairs', 'cellphone-repairs'
      ];
      
      knownCourseIds.forEach(courseId => {
        const progressKey = `course-progress-${courseId}`;
        const completedKey = `completed-lessons-${courseId}`;
        const progress = localStorage.getItem(progressKey);
        const completed = localStorage.getItem(completedKey);
        
        if (progress && parseInt(progress) > 0) {
          console.log(`🎯 Found progress for ${courseId}: ${progress}%`);
          
          // Check if this enrollment already exists
          const exists = allEnrollments.some(e => 
            e.course_id === courseId || e.courseId === courseId
          );
          
          if (!exists) {
            // Create enrollment from progress data
            const course = courses.find(c => c.id === courseId);
            allEnrollments.push({
              course_id: courseId,
              user_id: user.id,
              course_title: course?.title || courseId,
              progress: parseInt(progress) / 100, // Convert to decimal
              status: 'approved',
              enrolled_at: new Date().toISOString()
            });
            console.log(`✅ Created enrollment from progress data for ${courseId}`);
          }
        }
      });
      
      // Remove duplicates based on course_id
      const uniqueEnrollments = allEnrollments.filter((enrollment, index, self) => {
        const courseId = enrollment.course_id || enrollment.courseId;
        return index === self.findIndex(e => (e.course_id || e.courseId) === courseId);
      });
      
      console.log('📊 Final unique enrollments:', uniqueEnrollments);
      setEnrollments(uniqueEnrollments);
      setLoading(false);
    };

    loadAllEnrollmentSources();
  }, [user, courses]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-4">Enrolled Courses</h3>
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
            <p className="text-gray-500 mt-2">Loading your courses...</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Recent Activities</h3>
          <div className="text-center py-6">
            <div className="animate-pulse bg-gray-200 h-4 rounded mb-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-lg mb-4">Enrolled Courses</h3>
        <EnrolledCoursesList 
          enrollments={enrollments}
          courses={courses}
        />
      </div>
      
      <div>
        <h3 className="font-bold text-lg mb-4">Recent Activities</h3>
        <RecentActivities 
          enrollments={enrollments}
          courses={courses}
        />
      </div>
    </div>
  );
};

export default DashboardEnrollmentLoader;
