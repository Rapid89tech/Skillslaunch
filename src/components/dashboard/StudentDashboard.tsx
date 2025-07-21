import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Play,
  Clock,
  CheckCircle,
  Star,
  BarChart3,
  Target,
  Calendar,
  Brain,
  Download,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Profile } from '@/types/auth';
import { Enrollment } from '@/types/enrollment';
import DashboardStats from './DashboardStats';
import { getStatsForRole } from '@/utils/dashboardStats';
import { Course } from '@/hooks/useCourses';
import MakeAdminButton from '../admin/MakeAdminButton';

interface StudentDashboardProps {
  profile: Profile;
  enrollments: Enrollment[];
  courses: Course[];
  userId?: string;
}

const StudentDashboard = ({ profile, enrollments, courses, userId }: StudentDashboardProps) => {
  const stats = getStatsForRole(profile, courses, enrollments, userId);
  
  // Get the most recent enrollment with actual course data
  const enrolledCourses = enrollments.map(enrollment => {
    const course = courses.find(c => c.id === enrollment.course_id);
    return { ...enrollment, course };
  }).filter(item => item.course);
  
  const currentEnrollment = enrolledCourses[0];

  return (
    <div className="container mx-auto px-6 py-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">
          Welcome back, {profile.first_name}! 👋
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Ready to continue your learning journey?</p>
          <MakeAdminButton 
            userId={profile.id} 
            currentRole={profile.role}
            onRoleUpdate={() => {}}
          />
        </div>
      </div>

      {/* Stats Cards */}
      <DashboardStats stats={stats} />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning Section */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-blue-600" />
                Continue Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentEnrollment ? (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-lg mb-2">{currentEnrollment.course?.title || 'Course Title'}</h3>
                    <p className="text-gray-600 mb-4">{currentEnrollment.course?.description || 'Course description'}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold text-blue-600">{Math.round(currentEnrollment.progress)}%</span>
                      </div>
                      <Progress value={currentEnrollment.progress} className="h-2" />
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {currentEnrollment.progress < 100 ? 'In Progress' : 'Completed'}
                          </span>
                          <span className="flex items-center gap-1">
                            <Target className="h-4 w-4" />
                            {currentEnrollment.course?.level || 'Beginner'}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Link to={`/course/${currentEnrollment.course_id}`}>
                            <Button className="bg-gradient-primary hover:opacity-90">
                              {currentEnrollment.progress < 100 ? 'Continue Learning' : 'Review Course'}
                            </Button>
                          </Link>
                          {currentEnrollment.progress === 100 && (
                            <Link to={`/course/${currentEnrollment.course_id}/certificate`}>
                              <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                                <Award className="h-4 w-4 mr-2" />
                                Certificate
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No Active Enrollments</h3>
                  <p className="text-gray-500 mb-4">Start your learning journey by enrolling in a course</p>
                  <Link to="/courses">
                    <Button className="bg-gradient-primary hover:opacity-90">
                      Browse Courses
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {enrollments.length > 0 ? (
                  enrollments.slice(0, 3).map((enrollment, index) => {
                    const course = courses.find(c => c.id === enrollment.course_id);
                    const activityType = enrollment.progress === 100 ? 'completion' : 
                                       enrollment.progress > 0 ? 'progress' : 'start';
                    
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${
                          activityType === 'completion' ? 'bg-green-500' :
                          activityType === 'progress' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">
                              {activityType === 'completion' ? 'Completed' : 
                               activityType === 'progress' ? 'Continuing' : 'Started'}
                            </span> {course?.title || 'Course'}
                          </p>
                          <p className="text-xs text-gray-500">
                            {Math.round(enrollment.progress)}% complete • {new Date(enrollment.enrolled_at).toLocaleDateString()}
                          </p>
                        </div>
                        {activityType === 'completion' && (
                          <div className="flex items-center gap-2">
                            <Link to={`/course/${enrollment.course_id}/certificate`}>
                              <Button size="sm" variant="outline" className="h-6 border-green-500 text-green-600 hover:bg-green-50">
                                <Download className="h-3 w-3 mr-1" />
                                Certificate
                              </Button>
                            </Link>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  [
                    { action: "Welcome!", item: "Get started by enrolling in a course", time: "Just now", type: "welcome" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.action}</span> {activity.item}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Learning Goals */}
          <Card className="animate-fade-in" style={{ animationDelay: '150ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Enrollments</span>
                  <Badge variant="secondary">{enrollments.length}</Badge>
                </div>
                <Progress value={enrollments.length > 0 ? 100 : 0} className="h-2" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Completed Courses</span>
                  <Badge className="bg-green-100 text-green-800">
                    {enrollments.filter(e => e.progress === 100).length}
                  </Badge>
                </div>
                <Progress value={enrollments.length > 0 ? (enrollments.filter(e => e.progress === 100).length / enrollments.length) * 100 : 0} className="h-2" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Average Progress</span>
                  <Badge variant="secondary">
                    {enrollments.length > 0 ? Math.round(enrollments.reduce((acc, e) => acc + e.progress, 0) / enrollments.length) : 0}%
                  </Badge>
                </div>
                <Progress value={enrollments.length > 0 ? enrollments.reduce((acc, e) => acc + e.progress, 0) / enrollments.length : 0} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Calendar Widget */}
          <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Your Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {enrolledCourses.length > 0 ? (
                  enrolledCourses.map((enrollment, index) => (
                    <Link
                      key={index}
                      to={`/course/${enrollment.course_id}`}
                      className="block bg-blue-50 p-3 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-blue-800">{enrollment.course?.title}</p>
                          <p className="text-xs text-blue-600">{Math.round(enrollment.progress)}% Complete</p>
                        </div>
                        {enrollment.progress === 100 && (
                          <Link to={`/course/${enrollment.course_id}/certificate`} onClick={e => e.stopPropagation()}>
                            <Button size="sm" variant="outline" className="h-6 border-green-500 text-green-600 hover:bg-green-50">
                              <Award className="h-3 w-3" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">No active courses</p>
                    <p className="text-xs text-gray-600">Enroll in a course to start learning</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
