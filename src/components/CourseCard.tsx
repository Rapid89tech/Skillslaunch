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
  'roofing101': roofingImage,
  'roofing-course': roofingImage,
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
    <Card className="hover-lift animate-fade-in group overflow-hidden h-full max-h-80">
      <div className="aspect-[4/3] relative overflow-hidden h-32">
        <img
          src={courseImage}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader className="pb-1 px-3 pt-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xs line-clamp-1 group-hover:text-primary transition-colors">
            {course.title}
          </CardTitle>
          <div className="flex flex-col gap-1">
            <Badge className={`${getLevelColor(course.level)} text-xs px-1 py-0`}>
              {course.level}
            </Badge>
            {showAdminControls && (
              <Badge className={`${getStatusColor(course.status)} text-xs px-1 py-0`}>
                {course.status}
              </Badge>
            )}
          </div>
        </div>
        
        <p className="text-xs text-gray-600 line-clamp-1 mt-1">
          {course.description}
        </p>
        
        {course.instructor && (
          <p className="text-xs text-gray-500 mt-1">
            by {course.instructor.first_name} {course.instructor.last_name}
          </p>
        )}
      </CardHeader>

      <CardContent className="space-y-1 px-3 pb-3">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <Clock className="h-2 w-2" />
              Self-paced
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-2 w-2 text-yellow-500" />
              4.8
            </span>
          </div>
          
          <div className="text-right">
            <Badge variant="secondary" className="text-xs px-1 py-0">Course</Badge>
          </div>
        </div>

        {enrollment && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{Math.round(enrollment.progress)}%</span>
            </div>
            <Progress value={enrollment.progress} className="h-2" />
          </div>
        )}

        <div className="flex flex-col gap-1">
          {/* Enroll Now button for logged in users only */}
                     {user && profile?.role === 'student' && !enrollment && !hasPendingEnrollment(course.id) && (
             <Button 
               onClick={handleEnroll}
               className="flex-1 bg-gradient-primary hover:opacity-90 text-white text-xs py-1 h-7"
             >
               Enroll Now
             </Button>
           )}
          
          {/* Pending button for users with pending enrollment */}
                     {user && profile?.role === 'student' && !enrollment && hasPendingEnrollment(course.id) && (
             <Button 
               disabled
               className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white cursor-not-allowed text-xs py-1 h-7"
             >
               Pending
             </Button>
           )}
          
                     {profile?.role === 'student' && enrollment && (
             <Link to={`/course/${course.id}`}>
               {course.available ? (
                 <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg transform transition-all duration-300 hover:scale-105 text-xs py-1 h-7">
                   Continue Learning
                 </Button>
               ) : (
                 <Button 
                   variant="outline" 
                   className="border-orange-500 text-orange-600 hover:bg-orange-50 transform transition-all duration-300 hover:scale-105 text-xs py-1 h-7"
                 >
                   <Eye className="w-3 h-3 mr-1" />
                   View Details
                 </Button>
               )}
             </Link>
           )}

          {/* Register To Enroll button for logged out users */}
                     {!user && (
             <Button
               className="w-full mt-1 py-1 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold text-xs shadow-lg hover:scale-105 hover:from-gray-500 hover:to-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400/60 animate-ripple h-7"
               onClick={() => navigate('/auth')}
             >
               Register To Enroll
             </Button>
           )}

                     {showAdminControls && course.status === 'pending' && (
             <>
               <Button 
                 onClick={() => onStatusChange?.(course.id, 'approved')}
                 className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs py-1 h-7"
               >
                 Approve
               </Button>
               <Button 
                 onClick={() => onStatusChange?.(course.id, 'rejected')}
                 variant="destructive"
                 className="flex-1 text-xs py-1 h-7"
               >
                 Reject
               </Button>
             </>
           )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
