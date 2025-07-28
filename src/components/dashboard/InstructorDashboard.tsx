import React, { useState, useEffect } from 'react';
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
  UserCheck,
  CheckCircle,
  MessageSquare,
  Check,
  XCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Profile } from '@/types/auth';
import { Enrollment } from '@/types/enrollment';
import DashboardStats from './DashboardStats';
import { getStatsForRole } from '@/utils/dashboardStats';
import { Course } from '@/hooks/useCourses';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

interface InstructorDashboardProps {
  profile: Profile;
  enrollments: Enrollment[];
  courses: Course[];
  userId?: string;
}

interface Enrollment {
  id: string;
  user_email: string;
  course_title: string;
  proof_of_payment: string;
  payment_ref: string;
  payment_date: string;
  enrolled_at: string;
  status: string;
}

const InstructorDashboard = ({ profile, enrollments = [], courses = [], userId }: any) => {
  const [pendingEnrollments, setPendingEnrollments] = useState<any[]>([]);
  const [lastEnrollmentCount, setLastEnrollmentCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false); // Add this to prevent rapid updates
  const [isManualRefreshing, setIsManualRefreshing] = useState(false); // Add this for manual refresh feedback
  const [dashboardStats, setDashboardStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    totalRevenue: 0
  });
  const stats = getStatsForRole(profile, courses, enrollments, userId);
  const [quickAction, setQuickAction] = React.useState<string | null>(null);
  
  // Main instructor email - this instructor receives all enrollment requests
  const MAIN_INSTRUCTOR_EMAIL = 'rapid.rws1111@gmail.com';
  
  // Check if current user is the main instructor
  const isMainInstructor = profile?.email === MAIN_INSTRUCTOR_EMAIL;
  
  // Calculate real dashboard statistics
  const calculateDashboardStats = async () => {
    try {
      // Get all enrollments from Supabase
      const { data: allEnrollments, error } = await supabase
        .from('enrollments')
        .select('*');
      
      if (error) {
        console.error('Error fetching enrollments for stats:', error);
        // Fallback to localStorage
        const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
        calculateStatsFromData(localEnrollments);
        return;
      }
      
      calculateStatsFromData(allEnrollments || []);
    } catch (error) {
      console.error('Error calculating dashboard stats:', error);
      // Fallback to localStorage
      const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
      calculateStatsFromData(localEnrollments);
    }
  };
  
  const calculateStatsFromData = (enrollmentsData: any[]) => {
    // Get unique courses
    const uniqueCourses = new Set(enrollmentsData.map(e => e.course_id));
    const totalCourses = uniqueCourses.size;
    
    // Get unique students (users who have enrolled)
    const uniqueStudents = new Set(enrollmentsData.map(e => e.user_id));
    const totalStudents = uniqueStudents.size;
    
    // Calculate revenue: R250 for each approved enrollment
    const approvedEnrollments = enrollmentsData.filter(e => e.status === 'approved');
    const totalRevenue = approvedEnrollments.length * 250; // R250 per approved enrollment
    
    setDashboardStats({
      totalCourses,
      totalStudents,
      totalRevenue
    });
    
    console.log('Dashboard stats calculated:', { 
      totalCourses, 
      totalStudents, 
      totalRevenue, 
      approvedEnrollments: approvedEnrollments.length 
    });
  };

  useEffect(() => {
    console.log('useEffect triggered - isMainInstructor:', isMainInstructor);

    if (isMainInstructor) {
      fetchPendingEnrollments();
      calculateDashboardStats(); // Calculate stats on mount if main instructor

      const interval = setInterval(() => {
        console.log('Refreshing enrollments...');
        fetchPendingEnrollments();
        calculateDashboardStats(); // Recalculate stats periodically
      }, 10000); // Changed to 10 seconds for more stability

      return () => clearInterval(interval);
    } else {
      setPendingEnrollments([]);
      setLoading(false);
      setDashboardStats({ totalCourses: 0, totalStudents: 0, totalRevenue: 0 }); // Reset stats for non-main instructors
    }
  }, [isMainInstructor]); // Add isMainInstructor as dependency

  // Add CSS for notification animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const fetchPendingEnrollments = async () => {
    // Prevent rapid updates
    if (isRefreshing) {
      console.log('Skipping refresh - already in progress');
      return;
    }
    
    console.log('=== FETCHING PENDING ENROLLMENTS ===');
    console.log('Current user email:', profile?.email);
    console.log('Main instructor email:', MAIN_INSTRUCTOR_EMAIL);
    console.log('Is main instructor:', isMainInstructor);
    
    // Only show enrollments if user is the main instructor
    if (!isMainInstructor) {
      console.log('User is not the main instructor, showing empty list');
      setPendingEnrollments([]);
      setLoading(false);
      return;
    }
    
    setIsRefreshing(true);
    setLoading(true);
    setError(null); // Clear previous errors
    
    try {
      // First try Supabase
      console.log('Querying Supabase for pending enrollments...');
      const { data: pendingEnrollments, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('status', 'pending')
        .order('enrolled_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching enrollments from Supabase:', error);
        console.log('Falling back to localStorage...');
        
        // Fallback to localStorage
        const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
        const pendingLocalEnrollments = localEnrollments.filter(e => e.status === 'pending');
        console.log('Found pending enrollments in localStorage:', pendingLocalEnrollments.length);
        
        setLastEnrollmentCount(pendingLocalEnrollments.length);
        setPendingEnrollments(pendingLocalEnrollments);
        setError(`Using localStorage fallback. Supabase error: ${error.message}`);
      } else {
        console.log('Fetched enrollments from Supabase:', pendingEnrollments);
        
        const currentCount = pendingEnrollments?.length || 0;
        const previousCount = lastEnrollmentCount;
        
        console.log('Current count:', currentCount, 'Previous count:', previousCount);
        
        // Only show notification if we have genuinely new enrollments
        if (currentCount > previousCount && previousCount > 0) {
          const newCount = currentCount - previousCount;
          if (newCount > 0) {
            console.log(`🎉 ${newCount} new enrollment request${newCount > 1 ? 's' : ''} received!`);
            // Use a more user-friendly notification method
            const notification = document.createElement('div');
            notification.style.cssText = `
              position: fixed;
              top: 20px;
              right: 20px;
              background: #10b981;
              color: white;
              padding: 16px 20px;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.15);
              z-index: 9999;
              font-weight: 500;
              animation: slideIn 0.3s ease-out;
            `;
            notification.innerHTML = `🎉 ${newCount} new enrollment request${newCount > 1 ? 's' : ''} received!`;
            document.body.appendChild(notification);
            
            // Remove notification after 5 seconds
            setTimeout(() => {
              if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
              }
            }, 5000);
          }
        }
        
        setLastEnrollmentCount(currentCount);
        setPendingEnrollments(pendingEnrollments || []);
      }
      
    } catch (error) {
      console.error('Error in fetchPendingEnrollments:', error);
      
      // Final fallback to localStorage
      const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
      const pendingLocalEnrollments = localEnrollments.filter(e => e.status === 'pending');
      console.log('Using localStorage fallback due to error:', pendingLocalEnrollments.length);
      
      setPendingEnrollments(pendingLocalEnrollments);
      setLastEnrollmentCount(pendingLocalEnrollments.length);
      setError(`Using localStorage fallback. Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
      console.log('=== FETCH COMPLETE ===');
    }
  };

  const handleApprove = async (enrollmentId: string) => {
    if (!isMainInstructor) return;
    
    try {
      console.log('Approving enrollment:', enrollmentId);
      
      // Try Supabase first
      const { data, error } = await supabase
        .from('enrollments')
        .update({ 
          status: 'approved',
          approved_at: new Date().toISOString()
        })
        .eq('id', enrollmentId)
        .select();
      
      if (error) {
        console.error('Error approving enrollment in Supabase:', error);
        console.log('Falling back to localStorage...');
        
        // Fallback to localStorage
        const allEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
        const updatedEnrollments = allEnrollments.map(e => 
          e.id === enrollmentId 
            ? { ...e, status: 'approved', approved_at: new Date().toISOString() }
            : e
        );
        localStorage.setItem('enrollments', JSON.stringify(updatedEnrollments));
        console.log('Enrollment approved in localStorage fallback');
      } else {
        console.log('Enrollment approved successfully in Supabase:', data);
      }
      
      // Refresh the list and recalculate stats
      await Promise.all([
        fetchPendingEnrollments(),
        calculateDashboardStats()
      ]);
      
      // Show success message with revenue update
      const newRevenue = dashboardStats.totalRevenue + 250;
      alert(`Enrollment approved successfully!\n\nRevenue increased by R250!\nNew total: R${newRevenue}`);
      
    } catch (error) {
      console.error('Error in handleApprove:', error);
      alert(`Failed to approve enrollment: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleReject = async (enrollmentId: string) => {
    if (!isMainInstructor) return;
    
    try {
      console.log('Rejecting enrollment:', enrollmentId);
      
      // Try Supabase first
      const { data, error } = await supabase
        .from('enrollments')
        .update({ 
          status: 'rejected',
          rejected_at: new Date().toISOString()
        })
        .eq('id', enrollmentId)
        .select();
      
      if (error) {
        console.error('Error rejecting enrollment in Supabase:', error);
        console.log('Falling back to localStorage...');
        
        // Fallback to localStorage
        const allEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
        const updatedEnrollments = allEnrollments.map(e => 
          e.id === enrollmentId 
            ? { ...e, status: 'rejected', rejected_at: new Date().toISOString() }
            : e
        );
        localStorage.setItem('enrollments', JSON.stringify(updatedEnrollments));
        console.log('Enrollment rejected in localStorage fallback');
      } else {
        console.log('Enrollment rejected successfully in Supabase:', data);
      }
      
      // Refresh the list
      fetchPendingEnrollments();
      calculateDashboardStats(); // Recalculate stats after rejection
      
      alert('Enrollment rejected successfully!');
      
    } catch (error) {
      console.error('Error in handleReject:', error);
      alert(`Failed to reject enrollment: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Modal state for statistics
  const [statsModalOpen, setStatsModalOpen] = useState(false);
  const [statsModalContent, setStatsModalContent] = useState<null | JSX.Element>(null);

  // Show detailed statistics in a modal
  const showDetailedStats = (enrollmentsData: any[]) => {
    const uniqueCourses = new Set(enrollmentsData.map(e => e.course_id));
    const totalCourses = uniqueCourses.size;
    const uniqueStudents = new Set(enrollmentsData.map(e => e.user_id));
    const totalStudents = uniqueStudents.size;
    const approvedEnrollments = enrollmentsData.filter(e => e.status === 'approved');
    const pendingEnrollments = enrollmentsData.filter(e => e.status === 'pending');
    const rejectedEnrollments = enrollmentsData.filter(e => e.status === 'rejected');
    const totalRevenue = approvedEnrollments.length * 250;
    const courseBreakdown = enrollmentsData.reduce((acc: any, enrollment) => {
      const courseId = enrollment.course_id;
      if (!acc[courseId]) {
        acc[courseId] = {
          title: enrollment.course_title || 'Unknown Course',
          total: 0,
          approved: 0,
          pending: 0,
          rejected: 0
        };
      }
      acc[courseId].total++;
      acc[courseId][enrollment.status]++;
      return acc;
    }, {});
    const courseDetails = Object.values(courseBreakdown).map((course: any) =>
      <li key={course.title} className="mb-1 text-sm">• <span className="font-semibold">{course.title}</span>: {course.total} enrollments (<span className="text-green-600">{course.approved} approved</span>, <span className="text-yellow-600">{course.pending} pending</span>, <span className="text-red-600">{course.rejected} rejected</span>)</li>
    );
    setStatsModalContent(
      <div className="animate-fade-in-up">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><BarChart3 className="w-6 h-6 text-purple-600" /> Detailed Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3"><BookOpen className="text-blue-600 w-5 h-5" /><span className="font-semibold">Total Courses:</span> {totalCourses}</div>
          <div className="flex items-center gap-2 bg-green-50 rounded-lg p-3"><Users className="text-green-600 w-5 h-5" /><span className="font-semibold">Total Students:</span> {totalStudents}</div>
          <div className="flex items-center gap-2 bg-orange-50 rounded-lg p-3"><DollarSign className="text-orange-600 w-5 h-5" /><span className="font-semibold">Total Revenue:</span> R{totalRevenue}</div>
        </div>
        <div className="mb-4">
          <div className="font-semibold mb-2">Enrollment Status:</div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1 text-green-700"><CheckCircle className="w-4 h-4" /> Approved: {approvedEnrollments.length}</span>
            <span className="flex items-center gap-1 text-yellow-700"><Clock className="w-4 h-4" /> Pending: {pendingEnrollments.length}</span>
            <span className="flex items-center gap-1 text-red-700"><XCircle className="w-4 h-4" /> Rejected: {rejectedEnrollments.length}</span>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Course Breakdown:</div>
          <ul className="list-disc ml-6">
            {courseDetails}
          </ul>
        </div>
      </div>
    );
    setStatsModalOpen(true);
  };

  // Error boundary for rendering errors
  const [renderError, setRenderError] = useState<string | null>(null);
  React.useEffect(() => {
    window.onerror = (msg, url, line, col, error) => {
      setRenderError(error ? error.toString() : String(msg));
      return false;
    };
    return () => {
      window.onerror = null;
    };
  }, []);

  if (renderError) {
    return (
      <div style={{ color: 'red', padding: 32, fontWeight: 'bold', fontSize: 18 }}>
        Dashboard Error: {renderError}
      </div>
    );
  }

  // Modal state for viewing proof
  const [proofModal, setProofModal] = useState<{ open: boolean, url: string, type: string }>({ open: false, url: '', type: '' });
  const [proofLoading, setProofLoading] = useState(false);
  const [proofError, setProofError] = useState('');
  const proofTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Helper to determine file type
  const getFileType = (url: string) => {
    if (!url) return '';
    
    // Extract file extension from URL
    const ext = url.split('.').pop()?.toLowerCase();
    
    // Check for image types
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'].includes(ext || '')) {
      return 'image';
    }
    
    // Check for PDF
    if (['pdf'].includes(ext || '')) {
      return 'pdf';
    }
    
    // Check for document types that can be displayed
    if (['doc', 'docx', 'txt'].includes(ext || '')) {
      return 'document';
    }
    
    // If no extension or unknown type, try to infer from URL
    if (url.includes('image') || url.includes('img') || url.includes('photo')) {
      return 'image';
    }
    
    if (url.includes('pdf') || url.includes('document')) {
      return 'pdf';
    }
    
    // Default to image for unknown types (most common case)
    return 'image';
  };

  // Helper to check if a string is a full URL
  const isFullUrl = (url: string) => /^https?:\/\//.test(url);

  // Helper to get signed URL from Supabase Storage
  const getSignedUrl = async (filePath: string) => {
    try {
      // Remove any leading slashes
      const cleanPath = filePath.replace(/^\//, '');
      // Assume bucket is 'proofs' and filePath is like 'proofs/filename.png'
      const bucket = cleanPath.split('/')[0];
      const pathInBucket = cleanPath.split('/').slice(1).join('/');
      if (!bucket || !pathInBucket) return null;
      const { data, error } = await supabase.storage.from(bucket).createSignedUrl(pathInBucket, 60 * 10); // 10 min
      if (error) return null;
      return data?.signedUrl || null;
    } catch {
      return null;
    }
  };

  // Handle proof modal open/close and loading state
  React.useEffect(() => {
    if (proofModal.open) {
      setProofError('');
      if (proofModal.type === 'image' || proofModal.type === 'pdf') {
        setProofLoading(true);
        // Timeout fallback: if not loaded in 8 seconds, show error
        proofTimeoutRef.current = setTimeout(() => {
          setProofLoading(false);
          setProofError('File could not be loaded. Please check the file URL or permissions.');
        }, 8000);
      } else {
        // For documents and unknown types, don't show loading
        setProofLoading(false);
      }
    } else {
      setProofLoading(false);
      setProofError('');
      if (proofTimeoutRef.current) clearTimeout(proofTimeoutRef.current);
    }
    return () => {
      if (proofTimeoutRef.current) clearTimeout(proofTimeoutRef.current);
    };
  }, [proofModal]);

  return (
    <div className="container mx-auto px-6 py-8 animate-fade-in">
      {/* Enrollment Approval Widget */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-red-600 to-black text-white rounded-xl p-6 shadow-lg">
          <div>
            <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
              {isMainInstructor ? 'Main Instructor Dashboard' : 'Instructor Dashboard'}
              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-red-700 font-bold ml-2 ${pendingEnrollments.length > 0 ? 'animate-pulse' : ''}`}>
                {pendingEnrollments.length}
              </span>
              {isMainInstructor && (
                <Badge className="bg-yellow-500 text-black text-xs ml-2">MAIN INSTRUCTOR</Badge>
              )}
            </h2>
            <p className="text-white/80 text-sm">
              {!isMainInstructor ? (
                'Only the main instructor can view and approve enrollment requests.'
              ) : pendingEnrollments.length > 0 ? (
                `${pendingEnrollments.length} enrollment request${pendingEnrollments.length > 1 ? 's' : ''} awaiting approval`
              ) : (
                'Approve or reject student enrollment requests below.'
              )}
            </p>
            {isMainInstructor && (
              <div className="text-xs text-white/60 mt-1">
                Real-time updates every 1 second • Last refresh: {new Date().toLocaleTimeString()}
          </div>
            )}
        </div>
          {isMainInstructor && (
            <div className="flex gap-2">
              <Button 
                onClick={() => {
                  console.log('Manual refresh triggered');
                  setIsManualRefreshing(true);
                  setLoading(true);
                  setError(null);
                  
                  // Force immediate refresh
                  Promise.all([
                    fetchPendingEnrollments(),
                    calculateDashboardStats()
                  ]).finally(() => {
                    setIsManualRefreshing(false);
                    // Show success message
                    const notification = document.createElement('div');
                    notification.style.cssText = `
                      position: fixed;
                      top: 20px;
                      right: 20px;
                      background: #10b981;
                      color: white;
                      padding: 16px 20px;
                      border-radius: 8px;
                      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                      z-index: 9999;
                      font-weight: 500;
                      animation: slideIn 0.3s ease-out;
                    `;
                    notification.innerHTML = `✅ Dashboard refreshed successfully!`;
                    document.body.appendChild(notification);
                    
                    // Remove notification after 3 seconds
                    setTimeout(() => {
                      if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                      }
                    }, 3000);
                  });
                }}
                className={`${isManualRefreshing ? 'bg-gray-500' : 'bg-red-500 hover:bg-red-600'} text-white transition-colors duration-200`}
                size="sm"
                disabled={isManualRefreshing}
              >
                {isManualRefreshing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Refreshing...
                  </>
                ) : (
                  'Refresh Now'
                )}
              </Button>
              <Button 
                onClick={() => {
                  console.log('Clearing notification state...');
                  setLastEnrollmentCount(pendingEnrollments.length);
                  alert('Notification state cleared! You should no longer see repeated notifications.');
                }}
                className="bg-green-500 text-white hover:bg-green-600"
                size="sm"
              >
                Clear Notifications
              </Button>
              <Button 
                onClick={async () => {
                  // Test Supabase connection and show debug info
                  console.log('Testing Supabase connection...');
                  
                  try {
                    // Get all enrollments
                    const { data: allEnrollments, error } = await supabase
                      .from('enrollments')
                      .select('*');
                    
                    if (error) {
                      console.error('Error fetching enrollments:', error);
                      alert(`Supabase Error: ${error.message}`);
                    } else {
                      const pendingCount = allEnrollments?.filter(e => e.status === 'pending').length || 0;
                      alert(`Supabase Connection: SUCCESS\n\nTotal enrollments: ${allEnrollments?.length || 0}\nPending: ${pendingCount}\n\nAll enrollments:\n${JSON.stringify(allEnrollments, null, 2)}`);
                    }
                  } catch (error) {
                    console.error('Supabase test failed:', error);
                    alert(`Supabase Connection: FAILED\n\nError: ${error}`);
                  }
                }}
                className="bg-yellow-500 text-black hover:bg-yellow-600"
                size="sm"
              >
                Debug
              </Button>
              <Button 
                onClick={() => {
                  // Test refresh functionality
                  console.log('Testing refresh functionality...');
                  alert(`Current state:\n\n- Pending enrollments: ${pendingEnrollments.length}\n- Loading: ${loading}\n- Error: ${error || 'None'}\n- Is refreshing: ${isRefreshing}\n- Is manual refreshing: ${isManualRefreshing}`);
                }}
                className="bg-blue-500 text-white hover:bg-blue-600"
                size="sm"
              >
                Test State
              </Button>
              <Button 
                onClick={async () => {
                  // Show detailed statistics
                  try {
                    const { data: allEnrollments, error } = await supabase
                      .from('enrollments')
                      .select('*');
                    
                    if (error) {
                      const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
                      showDetailedStats(localEnrollments);
                    } else {
                      showDetailedStats(allEnrollments || []);
                    }
                  } catch (error) {
                    const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
                    showDetailedStats(localEnrollments);
                  }
                }}
                className="bg-purple-500 text-white hover:bg-purple-600"
                size="sm"
              >
                View Statistics
              </Button>
            </div>
          )}
        </div>
        <div className="bg-white rounded-b-xl shadow-lg p-4 mt-0">
          {loading && (
            <div className="text-gray-600 text-center py-4">Loading pending requests...</div>
          )}
          
          {error && (
            <div className="text-red-600 text-center py-4 bg-red-50 border border-red-200 rounded-lg">
              <strong>Error:</strong> {error}
              <br />
              <small>Please check your Supabase connection and try again.</small>
            </div>
          )}
          
          {!isMainInstructor && !loading && !error && (
            <div className="text-center py-8">
              <div className="text-gray-500 mb-4">Access Restricted</div>
              <div className="text-xs text-gray-400 mb-4">
                Only the main instructor ({MAIN_INSTRUCTOR_EMAIL}) can view and approve enrollment requests.
              </div>
            </div>
          )}
          
          {!loading && !error && isMainInstructor && pendingEnrollments.length === 0 && (
            <div className="text-gray-500 text-center py-8">
              <div className="text-4xl mb-2">📭</div>
              <div className="text-lg font-medium">No pending enrollments</div>
              <div className="text-sm">New enrollment requests will appear here automatically.</div>
            </div>
          )}
          {!loading && !error && isMainInstructor && pendingEnrollments.length > 0 && (
            <div className="space-y-3">
              {pendingEnrollments.map(req => (
                <div 
                  key={req.id || `enrollment_${req.user_email}_${req.course_id}`} 
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">{req.user_email}</div>
                      <div className="text-sm text-gray-600 mb-1">Course: {req.course_title}</div>
                      <div className="text-xs text-gray-500">
                        Enrolled: {new Date(req.enrolled_at).toLocaleDateString()}
                  </div>
                      {req.payment_date && (
                        <div className="text-xs text-gray-500">
                          Payment Date: {req.payment_date}
                  </div>
                      )}
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={async () => {
                          if (req.proof_of_payment) {
                            setProofLoading(true);
                            setProofError('');
                            let url = req.proof_of_payment;
                            
                            console.log('Original proof URL:', url);
                            console.log('Is full URL:', isFullUrl(url));
                            
                            // If not a full URL, generate a signed URL
                            if (!isFullUrl(url)) {
                              const signed = await getSignedUrl(url);
                              console.log('Signed URL result:', signed);
                              if (signed) {
                                url = signed;
                              } else {
                                setProofError('Could not generate signed URL for this file.');
                                setProofLoading(false);
                                setProofModal({ open: true, url: '', type: '' });
                                return;
                              }
                            }
                            
                            const fileType = getFileType(url);
                            console.log('Detected file type:', fileType);
                            console.log('Final URL:', url);
                            
                            setProofModal({
                              open: true,
                              url,
                              type: fileType
                            });
                          } else {
                            alert('No proof of payment uploaded');
                          }
                        }}
                        className="text-blue-600 border-blue-200 hover:bg-blue-50"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View Proof
                      </Button>
                      <Button 
                        onClick={() => handleApprove(req.id)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                        size="sm"
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => handleReject(req.id)}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                        size="sm"
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                  </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => {
          alert(`📚 Total Courses: ${dashboardStats.totalCourses}\n\nThis represents the number of unique courses that students have enrolled in.`);
        }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 font-semibold text-sm">Total Courses</p>
                <p className="text-2xl font-bold text-blue-800">{dashboardStats.totalCourses}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => {
          alert(`👥 Total Students: ${dashboardStats.totalStudents}\n\nThis represents the number of unique students who have enrolled in courses.`);
        }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 font-semibold text-sm">Total Students</p>
                <p className="text-2xl font-bold text-green-800">{dashboardStats.totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => {
          const approvedEnrollments = pendingEnrollments.filter(e => e.status === 'approved').length;
          alert(`💰 Total Revenue: R${dashboardStats.totalRevenue}\n\nBreakdown:\n• R250 per approved enrollment\n• ${approvedEnrollments} approved enrollments\n• Total: R${dashboardStats.totalRevenue}`);
        }}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-600 font-semibold text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-orange-800">R{dashboardStats.totalRevenue}</p>
              </div>
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {isMainInstructor && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-600" />
                <p className="text-yellow-800 font-medium text-sm">
                  You are the main instructor. All enrollment requests are sent to you for approval.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

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
              {courses.length > 0 ? (
                <div className="space-y-4">
                  {courses.slice(0, 3).map((course, index) => (
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
                  
                </div>
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No Courses Yet</h3>
                  <p className="text-gray-500 mb-4">You have no assigned courses yet.</p>
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
                {courses.slice(0, 3).map((course, index) => {
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
              <Button variant="outline" className="w-full justify-start" onClick={() => setQuickAction('analytics')}>
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => setQuickAction('students')}>
                <Users className="h-4 w-4 mr-2" />
                Manage Students
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => setQuickAction('materials')}>
                <FileText className="h-4 w-4 mr-2" />
                Course Materials
              </Button>
            </CardContent>
          </Card>

          {/* Animated Popups for Quick Actions */}
          <AnimatePresence>
            {quickAction && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative animate-fade-in-up"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold" onClick={() => setQuickAction(null)}>&times;</button>
                  {quickAction === 'analytics' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-red-700">Analytics Overview</h2>
                      <p className="mb-2">See detailed analytics for your courses, student engagement, and performance trends.</p>
                      <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Course completion rates</li>
                        <li>Student progress tracking</li>
                        <li>Quiz and assignment performance</li>
                        <li>Revenue and enrollment trends</li>
                      </ul>
                      <Button className="bg-gradient-to-r from-red-600 to-black text-white font-bold">Go to Analytics</Button>
                    </div>
                  )}
                  {quickAction === 'students' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-red-700">Manage Students</h2>
                      <p className="mb-2">View and manage students enrolled in your courses. Approve enrollments, track progress, and communicate directly.</p>
                      <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Approve/reject enrollment requests</li>
                        <li>Monitor student progress</li>
                        <li>Send announcements</li>
                        <li>View student profiles</li>
                      </ul>
                      <Button className="bg-gradient-to-r from-red-600 to-black text-white font-bold">Go to Student Management</Button>
                    </div>
                  )}
                  {quickAction === 'materials' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-red-700">Course Materials</h2>
                      <p className="mb-2">Access and manage all course materials, upload new resources, and organize content for your students.</p>
                      <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Upload new materials</li>
                        <li>Organize by module or lesson</li>
                        <li>Share resources with students</li>
                        <li>Track material usage</li>
                      </ul>
                      <Button className="bg-gradient-to-r from-red-600 to-black text-white font-bold">Go to Materials</Button>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
                  <Badge variant="secondary">R{(dashboardStats.totalRevenue).toLocaleString()}</Badge>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Proof Modal */}
      {proofModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-lg w-full relative animate-fade-in-up">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => {
                setProofModal({ open: false, url: '', type: '' });
                setProofError('');
                setProofLoading(false);
              }}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4 text-blue-700">Proof of Payment</h2>
            {proofLoading && (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            )}
            {proofError && (
              <div className="text-red-600 text-center mb-4">{proofError}</div>
            )}
            {!proofLoading && !proofError && proofModal.type === 'image' && (
              <div className="flex flex-col items-center">
                <img
                  src={proofModal.url}
                  alt="Proof of Payment"
                  className="max-h-96 w-auto rounded-lg border shadow"
                  style={{ maxWidth: '100%' }}
                  onLoad={() => {
                    setProofLoading(false);
                    if (proofTimeoutRef.current) clearTimeout(proofTimeoutRef.current);
                  }}
                  onError={() => {
                    setProofError('Failed to load image. The file may be corrupted or inaccessible.');
                    setProofLoading(false);
                    if (proofTimeoutRef.current) clearTimeout(proofTimeoutRef.current);
                  }}
                />
                <a
                  href={proofModal.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Download Image
                </a>
              </div>
            )}
            {!proofLoading && !proofError && proofModal.type === 'pdf' && (
              <div className="flex flex-col items-center">
                <iframe
                  src={proofModal.url}
                  title="Proof of Payment PDF"
                  className="w-full h-96 rounded-lg border"
                  onLoad={() => {
                    setProofLoading(false);
                    if (proofTimeoutRef.current) clearTimeout(proofTimeoutRef.current);
                  }}
                  onError={() => {
                    setProofError('Failed to load PDF. The file may be corrupted or inaccessible.');
                    setProofLoading(false);
                    if (proofTimeoutRef.current) clearTimeout(proofTimeoutRef.current);
                  }}
                />
                <a
                  href={proofModal.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Download PDF
                </a>
              </div>
            )}
            {!proofLoading && !proofError && proofModal.type === 'document' && (
              <div className="flex flex-col items-center">
                <div className="text-gray-500 mb-4 text-center">
                  <FileText className="h-16 w-16 mx-auto mb-2 text-gray-400" />
                  <p>Document preview not available</p>
                  <p className="text-sm">Please download to view this document</p>
                </div>
                <a
                  href={proofModal.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Download Document
                </a>
              </div>
            )}
            {!proofLoading && !proofError && proofModal.type === '' && (
              <div className="flex flex-col items-center">
                <div className="text-gray-500 mb-4 text-center">
                  <FileText className="h-16 w-16 mx-auto mb-2 text-gray-400" />
                  <p>File type not recognized</p>
                  <p className="text-sm">Please download to view this file</p>
                </div>
                <a
                  href={proofModal.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Download File
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Stats Modal */}
      {statsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in" onClick={() => setStatsModalOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-xl w-full relative animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setStatsModalOpen(false)}
            >
              &times;
            </button>
            {statsModalContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorDashboard;