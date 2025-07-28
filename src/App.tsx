import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Layout from "@/components/Layout";
import LoadingSpinner from "@/components/LoadingSpinner";
import useScrollToTop from "@/hooks/useScrollToTop";
import CourseEnrollmentView from "@/components/course/CourseEnrollmentView";
import CourseOverviewPage from "@/pages/CourseOverviewPage";

// Lazy load all pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Auth = lazy(() => import("./pages/Auth"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const Course = lazy(() => import("./pages/Course"));
const Courses = lazy(() => import("./pages/Courses"));
const NotFound = lazy(() => import("./pages/NotFound"));
const InstructorDashboardPage = lazy(() => import("./pages/InstructorDashboard"));

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  return <>{children}</>;
};

const App = () => (
  <>
    <Toaster />
    <Sonner />
    <ScrollToTopWrapper>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Index />
            </Layout>
          } />
          <Route path="/auth" element={
            <Layout showHeader={false}>
              <Auth />
            </Layout>
          } />
          <Route path="/reset-password" element={
            <Layout showHeader={false}>
              <ResetPassword />
            </Layout>
          } />
          <Route path="/courses" element={
            <Layout>
              <Courses />
            </Layout>
          } />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute allowedRoles={['student', 'instructor', 'admin']}>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/instructor-dashboard" 
            element={
              <ProtectedRoute allowedRoles={['instructor']}>
                <Layout>
                  <InstructorDashboardPage />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Layout>
                  <AdminDashboard />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/course/:id" 
            element={
              <ProtectedRoute>
                <Layout>
                  <Course />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/course/:id/overview" 
            element={
              <Layout>
                <CourseOverviewPage />
              </Layout>
            } 
          />
          <Route path="*" element={
            <Layout>
              <NotFound />
            </Layout>
          } />
        </Routes>
      </Suspense>
    </ScrollToTopWrapper>
  </>
);

export default App;
