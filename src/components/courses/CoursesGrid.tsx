import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Star, Users, Play, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
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

interface CoursesGridProps {
  courses: Course[];
}

const courseImages: Record<string, string> = {
  'Entrepreneurship Fundamentals': entrepreneurshipNew,
  'AI and Human Relations': aiHumanNew,
  'Sound Engineering Professional Certification': soundEngineeringNew,
  'Mastering Podcast Management': podcastNew,
  'Diesel Mechanic Professional Certification': dieselMechanicNew,
  'Motor Mechanic (Petrol) Professional Certification': motorMechanicNew,
  'Computer & Laptop Repairs': computerRepairsNew,
  'Cellphone Repairs and Maintenance': cellphoneRepairsNew,
  'Professional Hair Dressing Certification': hairDressingNew,
  'Professional Nail Technician Certification': nailTechnicianNew,
  'Professional Plumbing Training Program': plumbingNew,
  'Professional Tiling Certification': tilingNew,
  'Professional Roofing Certification': roofingNew,
};

const CoursesGrid = ({ courses }: CoursesGridProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { enrollments, enrollInCourse, isEnrolled } = useEnrollments();
  const { toast } = useToast();
  const [enrollingCourses, setEnrollingCourses] = useState<Set<string>>(new Set());
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
      const success = await enrollInCourse(courseId);
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

  const handleButtonClick = () => {
    if (enrolled) {
      handleContinueLearning(course.id, course.title);
    }
  };

  return (
    <div ref={gridRef} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animated-bg-courses">
      {courses.map((course, index) => {
        const enrolled = isEnrolled(course.id);
        const enrolling = isEnrolling(course.id);
        const courseImage = courseImages[course.title] || '/placeholder.svg';
        // Dynamic badges
        const lessonCount = course.lessonsCount || 10;
        const category = course.category || 'Development';
        return (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col animate-fade-in-card group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.03]"
            style={{ animationDelay: `${index * 80 + 200}ms` }}
          >
            {/* Illustration/Image */}
            <div className="relative aspect-[16/9] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
              <img
                src={courseImage}
                alt={course.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={e => { e.currentTarget.src = '/placeholder.svg'; }}
              />
              {/* Dynamic Highlight Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="highlight-badge badge-lesson animate-badge-shimmer">
                  {lessonCount}x Lesson
                </span>
                <span className="highlight-badge badge-category animate-badge-shimmer delay-100">
                  {category}
                </span>
              </div>
            </div>
            {/* Card Content */}
            <div className="flex-1 flex flex-col px-5 pt-4 pb-6">
              <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:via-pink-500 group-hover:to-red-700 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">{course.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-3 mb-3">{course.description}</p>
              <div className="flex items-center gap-6 text-xs text-gray-400 mb-4 justify-center">
                {/* Animated Star Rating */}
                <div className="flex items-center gap-1 text-yellow-500 animate-icon-bounce group-hover:animate-icon-glow transition-all duration-300">
                  <Star className="h-4 w-4 fill-current drop-shadow-md transition-transform duration-300 group-hover:scale-125" />
                  <span className="font-semibold text-sm text-yellow-600 animate-fade-in">4.8</span>
                </div>
                {/* Animated Duration */}
                <div className="flex items-center gap-1 text-blue-500 animate-icon-bounce group-hover:animate-icon-glow transition-all duration-300">
                  <Clock className="h-4 w-4 drop-shadow-md transition-transform duration-300 group-hover:scale-125" />
                  <span className="font-semibold text-sm text-blue-600 animate-fade-in">{course.duration || '6 weeks'}</span>
                </div>
                {/* Animated Certificate */}
                <div className="flex items-center gap-1 text-green-500 animate-icon-bounce group-hover:animate-icon-glow transition-all duration-300">
                  <Award className="h-4 w-4 drop-shadow-md transition-transform duration-300 group-hover:scale-125" />
                  <span className="font-semibold text-sm text-green-600 animate-fade-in">Certificate</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link to={`/course/${course.id}/overview`} className="block">
                  <button className="w-full py-2 rounded-full bg-gradient-to-r from-black to-gray-800 text-white font-bold text-sm shadow-lg hover:scale-105 hover:from-gray-900 hover:to-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-800/60 animate-ripple">
                    Course Overview
                  </button>
                </Link>
                {user && enrolled && (
                  <button
                    className="w-full py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-sm shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/60 animate-ripple"
                    onClick={() => handleContinueLearning(course.id, course.title)}
                  >
                    Continue Learning
                  </button>
                )}
                {!enrolled && (
                  <>
                    {/* Enroll Now button for logged in users only */}
                    {user && (
                      <button
                        className="w-full py-2 px-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/60 animate-ripple"
                        disabled={enrolling}
                        onClick={async () => {
                          await handleEnroll(course.id, course.title, () => triggerConfetti());
                        }}
                      >
                        {enrolling ? 'Enrolling...' : 'Enroll Now'}
                      </button>
                    )}
                    {/* Register To Enroll button for logged out users */}
                    {!user && (
                      <button
                        className="w-full mt-2 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-sm shadow-lg hover:scale-105 hover:from-red-600 hover:to-pink-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400/60 animate-ripple"
                        onClick={() => navigate('/auth')}
                      >
                        Register To Enroll
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
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
        .animated-bg-courses::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(120deg, #e0e7ff 0%, #f3e8ff 100%);
          opacity: 0.5;
          pointer-events: none;
          animation: bgFade 8s ease-in-out infinite alternate;
        }
        @keyframes bgFade {
          0% { filter: blur(0px); opacity: 0.5; }
          100% { filter: blur(4px); opacity: 0.7; }
        }
        .highlight-badge {
          display: inline-block;
          padding: 0.25rem 0.9rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          box-shadow: 0 2px 8px 0 rgba(80,80,200,0.07);
          background: linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%);
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .badge-lesson {
          background: linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%);
        }
        .badge-category {
          background: linear-gradient(90deg, #a78bfa 0%, #f472b6 100%);
        }
        .animate-badge-shimmer {
          animation: badgeShimmer 2.5s linear infinite;
        }
        @keyframes badgeShimmer {
          0% { filter: brightness(1); }
          50% { filter: brightness(1.15); }
          100% { filter: brightness(1); }
        }
        .page-exit {
          animation: pageExit 0.7s cubic-bezier(.4,2,.3,1) forwards;
        }
        @keyframes pageExit {
          to {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
        }
        .animate-badge-pop {
          animation: badgePop 0.7s cubic-bezier(.4,2,.3,1);
        }
        @keyframes badgePop {
          0% { opacity: 0; transform: scale(0.7); }
          80% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-ripple:active {
          animation: ripple 0.4s linear;
        }
        @keyframes ripple {
          0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
          100% { box-shadow: 0 0 0 16px rgba(59,130,246,0); }
        }
        .animate-icon-bounce {
          animation: iconBounce 1.2s cubic-bezier(.4,2,.3,1) infinite alternate;
        }
        @keyframes iconBounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px) scale(1.08); }
          100% { transform: translateY(0); }
        }
        .animate-icon-glow {
          filter: drop-shadow(0 0 8px #facc15) drop-shadow(0 0 2px #fff);
        }
      `}</style>
    </div>
  );
};

export default CoursesGrid;
