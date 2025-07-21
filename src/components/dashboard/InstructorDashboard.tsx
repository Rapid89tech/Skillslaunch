import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen,
  Users,
  TrendingUp,
  Award,
  BarChart3,
  FileText,
  Calendar,
  DollarSign,
  Eye,
  Star,
  Clock,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Profile } from '@/types/auth';
import { Enrollment } from '@/types/enrollment';
import DashboardStats from './DashboardStats';
import { getStatsForRole } from '@/utils/dashboardStats';
import { Course } from '@/hooks/useCourses';

interface InstructorDashboardProps {
  profile: Profile;
  enrollments: Enrollment[];
  courses: Course[];
  userId?: string;
}

const InstructorDashboard = ({ profile, enrollments, courses, userId }: InstructorDashboardProps) => {
  const stats = getStatsForRole(profile, courses, enrollments, userId);
  
  // Get instructor's courses
  const instructorCourses = courses.filter(course => course.instructor.id === userId);
  
  // Calculate instructor-specific metrics
  const totalStudents = instructorCourses.reduce((acc, course) => acc + course.students, 0);
  const totalRevenue = instructorCourses.reduce((acc, course) => 
    acc + (course.is_free ? 0 : course.price * course.students), 0);
  const averageRating = instructorCourses.length > 0 
    ? instructorCourses.reduce((acc, course) => acc + course.rating, 0) / instructorCourses.length 
    : 0;

  return (
    <div className="container mx-auto px-6 py-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">
          Welcome back, Instructor {profile.first_name}! 👨‍🏫
        </h1>
        <p className="text-muted-foreground">Manage your courses and track student progress</p>
      </div>

      {/* Instructor Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Total Courses</p>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">{instructorCourses.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 dark:text-green-400 text-sm font-medium">Total Students</p>
                <p className="text-2xl font-bold text-green-800 dark:text-green-200">{totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">Average Rating</p>
                <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">{averageRating.toFixed(1)}</p>
              </div>
              <Star className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-600 dark:text-orange-400 text-sm font-medium">Total Revenue</p>
                <p className="text-2xl font-bold text-orange-800 dark:text-orange-200">R{totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Course Management */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Your Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              {instructorCourses.length > 0 ? (
                <div className="space-y-4">
                  {instructorCourses.slice(0, 3).map((course, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{course.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            {course.level}
                          </Badge>
                          <Badge variant={course.status === 'approved' ? 'default' : 'secondary'}>
                            {course.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 text-sm">{course.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {course.students} students
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            {course.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {course.duration}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Link to={`/course/${course.id}`}>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </Link>
                          <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                            <FileText className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-center pt-4">
                    <Button className="bg-gradient-primary hover:opacity-90">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Create New Course
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No Courses Yet</h3>
                  <p className="text-gray-500 mb-4">Start by creating your first course</p>
                  <Button className="bg-gradient-primary hover:opacity-90">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Create Course
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Student Progress */}
          <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                Student Progress Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {instructorCourses.slice(0, 3).map((course, index) => {
                  const avgProgress = Math.floor(Math.random() * 40) + 60; // Mock data
                  return (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{course.title}</span>
                        <span className="text-sm text-gray-600">{avgProgress}% avg</span>
                      </div>
                      <Progress value={avgProgress} className="h-2" />
                      <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                        <span>{course.students} enrolled</span>
                        <span>{Math.floor(course.students * (avgProgress / 100))} completed</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="animate-fade-in" style={{ animationDelay: '150ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-red-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-gradient-primary hover:opacity-90">
                <BookOpen className="h-4 w-4 mr-2" />
                Create New Course
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Manage Students
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Course Materials
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { action: "New enrollment", course: "Sound Engineering", time: "2 hours ago", type: "enrollment" },
                  { action: "Course completed", course: "Entrepreneurship", time: "5 hours ago", type: "completion" },
                  { action: "New review (5⭐)", course: "AI Relations", time: "1 day ago", type: "review" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'enrollment' ? 'bg-blue-500' :
                      activity.type === 'completion' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.action}</span> in {activity.course}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    {activity.type === 'completion' && (
                      <UserCheck className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="animate-fade-in" style={{ animationDelay: '250ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                This Month
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">New Enrollments</span>
                  <Badge className="bg-green-100 text-green-800">+23</Badge>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Course Completions</span>
                  <Badge className="bg-blue-100 text-blue-800">12</Badge>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Revenue Generated</span>
                  <Badge variant="secondary">R{(totalRevenue * 0.1).toLocaleString()}</Badge>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;