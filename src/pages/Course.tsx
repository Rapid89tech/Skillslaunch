
import React, { Suspense, lazy } from 'react';
import { useCourseLogic } from '@/hooks/useCourseLogic';
import CourseSkeleton from '@/components/skeletons/CourseSkeleton';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';
import EnrollNowPopup from '@/components/course/EnrollNowPopup';

// Lazy load heavy components
const CourseEnrollmentView = lazy(() => import('@/components/course/CourseEnrollmentView'));
const CoursePlayerView = lazy(() => import('@/components/course/CoursePlayerView'));

const Course = () => {
  const {
    course,
    enrollment,
    isEnrolled,
    progress,
    allLessons,
    currentLesson,
    currentLessonData,
    completedLessons,
    quizAttempts,
    isPlaying,
    setIsPlaying,
    sidebarOpen,
    setSidebarOpen,
    enrolling,
    showPaymentPopup,
    isLoading,
    canAccessLesson,
    handleEnroll,
    handlePaymentPopupClose,
    handleEnrollmentSuccess,
    handleSetCurrentLesson,
    nextLesson,
    prevLesson,
    markComplete
  } = useCourseLogic();

  const { user } = useAuth();
  const navigate = useNavigate();

  console.log("Course Page: Loading state:", isLoading, "Course exists:", !!course, "Is enrolled:", isEnrolled);

  if (isLoading) {
    return <CourseSkeleton />;
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <a href="/courses" className="text-blue-600 hover:text-blue-800 underline">
            ← Back to Courses
          </a>
        </div>
      </div>
    );
  }

  // Check for pending enrollment
  if (enrollment && enrollment.status !== 'approved') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Enrollment Pending Approval</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your enrollment request for {course.title} has been submitted and is awaiting admin approval.</p>
            <p>You will be notified once approved.</p>
            <Button onClick={() => navigate('/dashboard')} className="mt-4">Back to Dashboard</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isEnrolled) {
    console.log("Course Page: User not enrolled, showing enrollment view");
    return (
      <>
        <Suspense fallback={<CourseSkeleton />}>
          <CourseEnrollmentView
            course={course}
            handleEnroll={handleEnroll}
            enrolling={enrolling}
          />
        </Suspense>
        
        {/* Payment Popup */}
        {showPaymentPopup && user && (
          <EnrollNowPopup
            open={showPaymentPopup}
            onClose={handlePaymentPopupClose}
            course={{
              id: course.id,
              title: course.title,
              description: course.description,
              category: course.category,
              level: course.level,
              duration: course.duration,
              is_free: course.is_free,
              price: course.price,
              currency: course.currency,
              students: course.students,
              rating: course.rating,
              instructor: {
                id: '1',
                first_name: course.instructor.name.split(' ')[0] || '',
                last_name: course.instructor.name.split(' ').slice(1).join(' ') || '',
                email: 'instructor@example.com'
              },
              status: 'active',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              available: true,
              isComingSoon: false,
              thumbnail: course.thumbnail
            }}
            userId={user.id}
            userEmail={user.email || ''}
            onEnrollmentSuccess={handleEnrollmentSuccess}
          />
        )}
      </>
    );
  }

  console.log("Course Page: User enrolled, showing course player");
  return (
    <Suspense fallback={<CourseSkeleton />}>
      <CoursePlayerView
        course={course}
        enrollment={enrollment}
        progress={progress}
        allLessons={allLessons}
        currentLesson={currentLesson}
        currentLessonData={currentLessonData}
        completedLessons={completedLessons}
        quizAttempts={quizAttempts}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        canAccessLesson={canAccessLesson}
        setCurrentLesson={handleSetCurrentLesson}
        nextLesson={nextLesson}
        prevLesson={prevLesson}
        markComplete={markComplete}
      />
    </Suspense>
  );
};

export default Course;
