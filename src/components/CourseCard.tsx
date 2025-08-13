import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Star, Users, Eye } from 'lucide-react';
import { Course } from '@/hooks/useCourses';
import { useAuth } from '@/hooks/AuthContext';
import { useEnrollments } from '@/hooks/useEnrollments';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RealTimeEnrollmentButton from '@/components/course/RealTimeEnrollmentButton';
import CourseCardProgress from '@/components/courses/CourseCardProgress';

// Import course images
import entrepreneurshipImage from '@/assets/entrepreneurship-course.jpg';
import aiHumanImage from '@/assets/ai-human-relations-course.jpg';
import soundEngineeringImage from '@/assets/sound-engineering-course.jpg';
import podcastImage from '@/assets/podcast-management-course.jpg';
import dieselMechanicImage from '@/assets/diesel-mechanic-course.jpg';
import motorMechanicImage from '@/assets/motor-mechanic-course.jpg';
import computerRepairsImage from '@/assets/computer-repairs-course.jpg';
import cellphoneRepairsImage from '@/assets/cellphone-repairs-course.jpg';
import hairDressingImage from '@/assets/hair-dressing-course.jpg';
import nailTechnicianImage from '@/assets/nail-technician-course.jpg';
import plumbingImage from '@/assets/plumbing-course.jpg';
import tilingImage from '@/assets/tiling-course.jpg';
import roofingImage from '@/assets/roofing-course.jpg';
import dieselMechanicCourseImage from '@/assets/diesel-mechanic-course.jpg';

const courseImages: Record<string, string> = {
  'c9d8e7f6-a5b4-9483-d2e3-f4a5b6c7d8e9': entrepreneurshipImage,
  'entrepreneurship-final': entrepreneurshipImage,
  'ai-human-relations': aiHumanImage,
  'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d4': soundEngineeringImage,
  'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d5': soundEngineeringImage,
  'podcast-management': podcastImage,
  'podcast-management-101': podcastImage,
  'b8c7d6e5-f4a3-9281-b0c9-d8e7f6a5b4c3': dieselMechanicImage,
  'diesel-mechanic': dieselMechanicImage,
  'a7b6c5d4-e3f2-8391-a2b3-c4d5e6f7a8b9': motorMechanicImage,
  'motor-mechanic-petrol': motorMechanicImage,
  'computer-repairs': computerRepairsImage,
  'cellphone-repairs': cellphoneRepairsImage,
  'cellphone-repairs-course': cellphoneRepairsImage,
  'hair-dressing': hairDressingImage,
  'hair-dressing-course': hairDressingImage,
  'nail-technician': nailTechnicianImage,
  'nail-technician-course': nailTechnicianImage,
  'plumbing101': plumbingImage,
  'plumbing-course': plumbingImage,
  'tiling-course': tilingImage,
  'tiling-101': tilingImage,
  'motor-mechanic-diesel': dieselMechanicCourseImage,
  'roofing101': roofingImage,
  'roofing-course': roofingImage,
};

const courseAvailability: Record<string, 'Available' | 'Coming Soon'> = {
  'entrepreneurship-final': 'Available',
  'ai-human-relations': 'Available',
  'roofing101': 'Available',
  'plumbing101': 'Available',
  'tiling-101': 'Available',
  'hair-dressing': 'Available',
  'nail-technician': 'Available',
  'podcast-management-101': 'Available',
  'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d5': 'Coming Soon', // Sound Engineering
  'computer-repairs': 'Coming Soon',
  'cellphone-repairs': 'Coming Soon',
  'motor-mechanic-petrol': 'Coming Soon',
  'motor-mechanic-diesel': 'Available',
};

interface CourseCardProps {
  course: Course;
  enrollment?: any;
  onEnroll?: (courseId: string) => void;
  onStatusChange?: (courseId: string, status: string) => void;
  showAdminControls?: boolean;
}

const CourseCard = ({ 
  course, 
  enrollment, 
  onEnroll, 
  onStatusChange, 
  showAdminControls = false 
}: CourseCardProps) => {
  const { profile, user } = useAuth();
  const { enrollInCourse, hasPendingEnrollment } = useEnrollments();
  const navigate = useNavigate();
  const courseImage = courseImages[course.id] || '/placeholder.svg';
  const availability = courseAvailability[course.id] || 'Available';

  const handleEnroll = async () => {
    if (onEnroll) {
      onEnroll(course.id);
    } else {
      await enrollInCourse(course.id, course.title);
    }
  };

  const handleContinue = () => {
    navigate(`/course/${course.id}`);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover-lift animate-fade-in group overflow-hidden h-64 relative">
      <div className="relative h-full w-full">
        <img
          src={courseImage}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Black overlay with 90% opacity */}
        <div className="absolute inset-0 bg-black/90" />
        
        {/* Availability Badge */}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold shadow-lg z-10 ${
          availability === 'Available' 
            ? 'bg-green-500 text-white' 
            : 'bg-orange-500 text-white'
        }`}>
          {availability}
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 p-3 flex flex-col justify-between z-10">
          {/* Header section */}
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
            </div>
            
            <p className="text-xs text-gray-300 line-clamp-2">
              {course.description}
            </p>
          </div>

          {/* Progress and buttons section */}
          <div className="space-y-2">
            <CourseCardProgress 
              courseId={course.id}
              enrolled={!!enrollment}
            />

            <div className="flex flex-col gap-1">
              {/* Real-time enrollment button for logged in students */}
              {user && profile?.role === 'student' && (
                <RealTimeEnrollmentButton 
                  courseId={course.id}
                  onEnrollClick={handleEnroll}
                  className="flex-1 text-xs py-2 h-8"
                />
              )}
              
              {/* Pending button for users with pending enrollment - keep as fallback */}
              {user && profile?.role === 'student' && !enrollment && hasPendingEnrollment(course.id) && (
                 <Button 
                   disabled
                   className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white cursor-not-allowed text-xs py-2 h-8"
                 >
                   Pending
                 </Button>
               )}

              {/* Register To Enroll button for logged out users */}
              {!user && (
                 <Button
                   className="w-full py-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold text-xs shadow-lg hover:scale-105 hover:from-gray-500 hover:to-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400/60 animate-ripple h-8"
                   onClick={() => navigate('/auth')}
                 >
                   Register To Enroll
                 </Button>
               )}

              {showAdminControls && course.status === 'pending' && (
                 <div className="flex gap-1">
                   <Button 
                     onClick={() => onStatusChange?.(course.id, 'approved')}
                     className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs py-2 h-8"
                   >
                     Approve
                   </Button>
                   <Button 
                     onClick={() => onStatusChange?.(course.id, 'rejected')}
                     variant="destructive"
                     className="flex-1 text-xs py-2 h-8"
                   >
                     Reject
                   </Button>
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
