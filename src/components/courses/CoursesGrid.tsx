import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Star, Users, Play, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';
import { useEnrollments } from '@/hooks/useEnrollments';
import { useToast } from '@/hooks/use-toast';
import { Course } from '@/hooks/useCourses';
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
import aiHumanNew from '../../../images/generation-7f218044-3139-41b5-8dc7-afedae829ae7.png';
import soundEngineeringNew from '../../../images/generation-9c9ad650-aa25-4df1-9236-b137241521c0.png';
import podcastNew from '../../../images/generation-8d3c5693-9f7f-4360-8c0b-533dc0da09bd.png';
import dieselMechanicNew from '../../../images/generation-c8135d13-bf83-4379-847e-e306db926631.png';
import motorMechanicNew from '../../../images/generation-147b4caa-7110-471b-bea0-9f848409020e.png';
import computerRepairsNew from '../../../images/generation-223f5d12-39ae-4748-84af-466e0078c55d.png';
import entrepreneurshipNew from '../../../images/generation-0fca7938-9dd0-47b3-9d36-a552cd0e2ed2.png';
import cellphoneRepairsNew from '../../../images/generation-f3a5d1c2-fed5-4324-be4b-7b9c526b3455.png';
import hairDressingNew from '../../../images/generation-14193c97-8259-4674-ac20-0b8a10a628ea.png';
import nailTechnicianNew from '../../../images/generation-ca8e153c-3951-4b5e-b646-5b4e33e835cc.png';
import plumbingNew from '../../../images/generation-704ccdce-48ca-411f-b5de-3adbe0ef98c1.png';
import tilingNew from '../../../images/generation-25c77381-c00b-4f6f-a660-5de57dbf0cc5.png';
import roofingNew from '../../../images/generation-8dea647f-b6de-42c7-8708-d6e68a0fe5d1.png';
import { triggerConfetti } from '@/utils/confetti';
import { Progress } from '@/components/ui/progress';
import EnrollNowPopup from '../course/EnrollNowPopup';

interface CoursesGridProps {
  courses: Course[];
}

const courseImages: Record<string, string> = {
  'Entrepreneurship': entrepreneurshipNew,
  'AI and Human Relations': aiHumanNew,
  'Sound Engineering': soundEngineeringNew,
  'Podcast Management': podcastNew,
  'Diesel Mechanic': dieselMechanicNew,
  'Motor Mechanic (Petrol)': motorMechanicNew,
  'Computer & Laptop Repairs': computerRepairsNew,
  'Cellphone Repairs and Maintenance': cellphoneRepairsNew,
  'Hair Dressing': hairDressingNew,
  'Nail Technician': nailTechnicianNew,
  'Plumbing': plumbingNew,
  'Professional Tiling': tilingNew,
  'Professional Roofing': roofingNew,
};

const CoursesGrid = ({ courses }: CoursesGridProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { enrollments, enrollInCourse, isEnrolled, hasPendingEnrollment, refetch } = useEnrollments();
  const { toast } = useToast();
  const [enrollingCourses, setEnrollingCourses] = useState<Set<string>>(new Set());
  const [showEnrollPopup, setShowEnrollPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [pendingEnrollments, setPendingEnrollments] = useState<Set<string>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);

  // Dynamic page transition
  const handlePageTransition = (cb: () => void) => {
    if (gridRef.current) {
      gridRef.current.classList.add('page-exit');
      setTimeout(() => {
        cb();
        setTimeout(() => {
          if (gridRef.current) gridRef.current.classList.remove('page-exit');
        }, 700);
      }, 300);
    } else {
      cb();
    }
  };

  const handleEnroll = async (courseId: string, courseName: string, onSuccess?: () => void) => {
    console.log("Attempting to enroll in course:", courseId, courseName);
    
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to enroll in courses",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }
    
    setEnrollingCourses(prev => new Set(prev).add(courseId));
    
    try {
      console.log("Calling enrollInCourse function...");
      const success = await enrollInCourse(courseId, courseName);
      console.log("Enrollment result:", success);
      
      if (success) {
        toast({
          title: "🎉 Enrollment Successful!",
          description: `You're now enrolled in "${courseName}"! Redirecting to course...`,
        });
        if (onSuccess) onSuccess();
        // Navigate immediately to the course
        setTimeout(() => {
          console.log("Navigating to course:", courseId);
          navigate(`/course/${courseId}`);
        }, 1500);
      } else {
        toast({
          title: "Enrollment Failed",
          description: "There was an issue enrolling in the course. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Enrollment error:", error);
      toast({
        title: "Enrollment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setEnrollingCourses(prev => {
        const newSet = new Set(prev);
        newSet.delete(courseId);
        return newSet;
      });
    }
  };

  const handleContinueLearning = (courseId: string, courseName: string) => {
    toast({
      title: 'Continuing Course',
      description: `Loading "${courseName}"...`,
    });
    handlePageTransition(() => navigate(`/course/${courseId}`));
  };

  const isEnrolling = (courseId: string) => {
    return enrollingCourses.has(courseId);
  };

  // Refresh enrollment data periodically to catch updates
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 2000);

    return () => clearInterval(interval);
  }, [refetch]);

  // Check for pending enrollments
  useEffect(() => {
    const checkPendingEnrollments = async () => {
      if (!user) return;
      
      const pendingSet = new Set<string>();
      for (const course of courses) {
        const isPending = await hasPendingEnrollment(course.id);
        if (isPending) {
          pendingSet.add(course.id);
        }
      }
      setPendingEnrollments(pendingSet);
    };
    
    checkPendingEnrollments();
  }, [user, courses, hasPendingEnrollment]);

  return (
    <div ref={gridRef} className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
      {courses.map((course, index) => {
        const enrolled = isEnrolled(course.id);
        const enrolling = isEnrolling(course.id);
        const courseImage = courseImages[course.title] || '/public/placeholder.svg';
        // Find enrollment for progress (if enrolled)
        const enrollment = enrollments?.find(e => e.course_id === course.id);
        const progress = enrolled && enrollment ? Math.round((enrollment.progress || 0) * 100) : 0;
        return (
          <div
            key={course.id}
            className="bg-[#18181b] rounded-3xl shadow-xl border-0 overflow-hidden flex flex-col h-full group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.03]"
            style={{ animationDelay: `${index * 80 + 200}ms` }}
          >
            {/* Illustration/Image */}
            <div className="relative aspect-[16/9] min-h-[180px] w-full flex items-center justify-center bg-neutral-800">
              <img
                src={courseImage}
                alt={course.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={e => { e.currentTarget.src = '/placeholder.svg'; }}
              />
            </div>
            {/* Card Content */}
            <div className="flex-1 flex flex-col px-7 pt-7 pb-8">
              <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 rounded-lg px-2 py-1 bg-gradient-to-r from-red-600 to-red-800 inline-block w-fit shadow-md animate-title-gradient">
                {course.title}
              </h3>
              <p className="text-xs text-gray-200 line-clamp-3 mb-4">{course.description}</p>
              {/* Dynamic Info Row */}
              <div className="flex items-center gap-6 text-xs text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-red-400" />
                  <span>{course.students || 0}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>Certificate</span>
                </div>
                {enrolled && (
                  <div className="flex-1 flex flex-col gap-1">
                    <Progress value={progress} className="h-2 bg-neutral-700" />
                    <span className="text-[10px] text-gray-400 mt-1">Progress: {progress}%</span>
                  </div>
                )}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <Link to={`/course/${course.id}/overview`} className="block">
                  <button className="w-full py-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-sm shadow-lg hover:scale-105 hover:from-red-700 hover:to-red-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400/60 animate-ripple">
                    View Course
                  </button>
                </Link>
                {user && enrolled && (
                  <Button
                    className="w-full py-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-sm shadow-lg hover:scale-105 hover:from-green-600 hover:to-green-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400/60 animate-ripple"
                    onClick={() => handleContinueLearning(course.id, course.title)}
                  >
                    Continue
                  </Button>
                )}
                {!enrolled && user && pendingEnrollments.has(course.id) && (
                  <Button
                    disabled
                    className="w-full py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold text-sm shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 cursor-not-allowed"
                  >
                    Pending
                  </Button>
                )}
                {!enrolled && user && !pendingEnrollments.has(course.id) && (
                  <Button
                    onClick={() => {
                      setSelectedCourse(course);
                      setShowEnrollPopup(true);
                    }}
                  >
                    Enroll Now
                  </Button>
                )}
                {!user && (
                  <button
                    className="w-full py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-sm shadow-lg hover:scale-105 hover:from-red-600 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400/60 animate-ripple"
                    onClick={() => navigate('/auth')}
                  >
                    Register To Enroll
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      {showEnrollPopup && selectedCourse && (
        <EnrollNowPopup
          open={showEnrollPopup}
          onClose={() => setShowEnrollPopup(false)}
          course={selectedCourse}
          userId={user?.id}
          userEmail={user?.email}
        />
      )}
      <style>{`
        .animate-fade-in-card {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          animation: fadeInCard 0.7s cubic-bezier(.4,2,.3,1) forwards;
        }
        @keyframes fadeInCard {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-title-gradient {
          background-size: 200% 200%;
          animation: titleGradient 3s ease-in-out infinite alternate;
        }
        @keyframes titleGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .group {
          transition: box-shadow 0.4s, transform 0.4s;
        }
        .group:hover {
          box-shadow: 0 8px 32px 0 rgba(239,68,68,0.15), 0 0 0 4px rgba(239,68,68,0.10);
          transform: translateY(-8px) scale(1.04);
        }
      `}</style>
    </div>
  );
};

export default CoursesGrid;
