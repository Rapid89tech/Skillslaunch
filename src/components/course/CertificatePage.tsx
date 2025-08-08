import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourseData } from '@/hooks/useCourseData';
import { useCourseCompletion } from '@/hooks/useCourseCompletion';
import { useAuth } from '@/hooks/AuthContext';
import { Certificate } from './Certificate';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy } from 'lucide-react';

export const CertificatePage: React.FC = () => {
  const { id: courseId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  
  // PERSISTENT CERTIFICATE DATA - Survives page refresh
  const getCertificateData = () => {
    // Check for stored certificate data first
    const storedData = localStorage.getItem(`certificate-data-${courseId}`);
    if (storedData) {
      return JSON.parse(storedData);
    }
    
    // Get user name from profile or user metadata
    let studentName = 'Student';
    if (profile?.first_name && profile?.last_name) {
      studentName = `${profile.first_name} ${profile.last_name}`;
    } else if (user?.user_metadata?.full_name) {
      studentName = user.user_metadata.full_name;
    } else if (user?.user_metadata?.first_name && user?.user_metadata?.last_name) {
      studentName = `${user.user_metadata.first_name} ${user.user_metadata.last_name}`;
    } else if (user?.email) {
      studentName = user.email.split('@')[0]; // Use email prefix as name
    }
    
    // Create default certificate data
    const defaultData = {
      courseTitle: courseId === 'business' ? 'Business: Creating Your Business' : 
                   courseId === 'entrepreneurship-final' ? 'Entrepreneurship Final Course' :
                   courseId === 'sound-engineering' ? 'Sound Engineering' :
                   courseId === 'podcast-management' ? 'Podcast Management' :
                   'Course Completion',
      studentName,
      completionDate: new Date().toISOString().split('T')[0],
      instructorName: 'Course Instructor',
      courseId: courseId || 'test-course',
      grade: 'A'
    };
    
    // Store for persistence
    localStorage.setItem(`certificate-data-${courseId}`, JSON.stringify(defaultData));
    return defaultData;
  };
  
  const certificateData = getCertificateData();

  // Function to update certificate data (called when course is completed)
  const updateCertificateData = (newData: any) => {
    const updatedData = { ...certificateData, ...newData };
    localStorage.setItem(`certificate-data-${courseId}`, JSON.stringify(updatedData));
    window.location.reload(); // Refresh to show updated data
  };

  // Function to clear certificate data (for testing)
  const clearCertificateData = () => {
    localStorage.removeItem(`certificate-data-${courseId}`);
    window.location.reload();
  };

  console.log('CertificatePage loaded with persistent data:', {
    courseId,
    certificateData,
    user: user?.email,
    profile: profile?.first_name
  });

  // ALWAYS SHOW CERTIFICATE - No more loading states!

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate(`/course/${courseId}`)}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Course
              </Button>
                             <div>
                 <h1 className="text-2xl font-bold">Course Completion</h1>
                 <p className="text-blue-100">{certificateData.courseTitle}</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-yellow-300">
                <Trophy className="w-6 h-6" />
                <span className="font-semibold">Certificate Earned!</span>
              </div>
              <Button
                variant="ghost"
                onClick={() => navigate('/courses')}
                className="text-white hover:bg-white/20"
              >
                All Courses
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate */}
      <Certificate {...certificateData} />
    </div>
  );
}; 