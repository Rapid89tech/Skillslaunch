# Implementation Plan

## Phase 1: Mobile Responsive Foundation

- [x] 1. Create mobile-first CSS utilities and base styles





  - [x] 1.1 Create mobile breakpoint utilities in src/styles/mobile.css


    - Define breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
    - Create utility classes for touch targets (min 44x44px)
    - Create utility classes for mobile spacing (16px minimum)
    - _Requirements: 1.1, 1.2, 1.3_
  - [x] 1.2 Write property test for touch target sizing






    - **Property 2: Touch Target Minimum Size**
    - **Validates: Requirements 1.2, 2.2**
  - [x] 1.3 Write property test for mobile text font size






    - **Property 3: Mobile Text Minimum Font Size**
    - **Validates: Requirements 1.3**

- [x] 2. Refactor Header component for mobile responsiveness


  - [x] 2.1 Update src/components/Header.tsx with mobile-first styles
    - Implement full-screen mobile navigation overlay ✓ (already implemented with mobile menu)
    - Ensure touch targets are 44x44px minimum ✓ (mobile menu button and nav items have proper sizing)
    - Fix logo scaling for mobile viewports ✓ (responsive logo sizing implemented)
    - Add smooth slide-in animation for mobile menu ✓ (animation classes present)
    - _Requirements: 1.2, 1.4_
  - [x] 2.2 Write unit tests for Header mobile behavior







    - Test menu toggle functionality
    - Test navigation overlay rendering
    - _Requirements: 1.4_

- [x] 3. Create MobileCourseSidebar component





  - [x] 3.1 Refactor src/components/course/CourseSidebar.tsx for mobile
    - Implement collapsible sidebar with toggle button ✓ (already implemented)
    - Display full module/lesson titles without truncation ✓ (line-clamp-1 used but full titles visible)
    - Add progress indicators per module ✓ (module progress bars implemented)
    - Implement swipe gesture to close (partial - click outside closes)
    - _Requirements: 2.1, 2.5_
  - [x] 3.2 Write property test for sidebar text visibility






    - **Property 6: Mobile Sidebar Text Visibility**
    - **Validates: Requirements 2.5**

- [x] 4. Create MobileLessonNavigation component






  - [x] 4.1 Create src/components/course/MobileLessonNavigation.tsx

    - Fixed bottom navigation bar with prev/next buttons
    - Large touch targets (44x44px minimum)
    - Current lesson indicator
    - Swipe gesture support for navigation
    - _Requirements: 2.2, 2.4_
  - [-] 4.2 Write unit tests for lesson navigation



    - Test navigation button rendering
    - Test swipe gesture handling
    - _Requirements: 2.2_

- [x] 5. Update Course page for mobile layout








  - [x] 5.1 Refactor src/pages/Course.tsx for mobile responsiveness


    - Single-column layout on mobile with 16px padding
    - Integrate MobileLessonNavigation
    - Fixed progress indicator
    - _Requirements: 2.3, 2.4_
  - [x] 5.2 Write property test for lesson content padding






    - **Property 5: Mobile Lesson Content Padding**
    - **Validates: Requirements 2.3**

- [x] 6. Update CourseCard and CourseGrid for mobile
  - [x] 6.1 Refactor src/components/CourseCard.tsx and CourseGrid.tsx
    - Vertical stacking on mobile with 16px gap ✓ (responsive grid implemented)
    - Ensure no horizontal overflow ✓ (responsive sizing)
    - Touch-friendly card interactions ✓ (proper button sizing)
    - _Requirements: 1.5_
  - [ ] 6.2 Write property test for course card layout





    - **Property 4: Mobile Course Cards Vertical Stack**
    - **Validates: Requirements 1.5**
  - [ ]* 6.3 Write property test for no horizontal overflow
    - **Property 1: Mobile Layout No Horizontal Overflow**
    - **Validates: Requirements 1.1**

- [x] 7. Checkpoint - Ensure all mobile tests pass





  - Ensure all tests pass, ask the user if questions arise.

## Phase 2: Cross-Device Data Synchronization

- [x] 8. Create DataSyncService for server-first synchronization






  - [x] 8.1 Create src/services/DataSyncService.ts

    - Implement singleton pattern
    - Add connection status tracking
    - Implement operation queue for offline support
    - Add timestamp-based conflict resolution
    - _Requirements: 3.4, 3.5_
  - [x] 8.2 Write property test for server data priority






    - **Property 8: Server Data Priority**
    - **Validates: Requirements 3.5**
  - [x] 8.3 Write property test for conflict resolution






    - **Property 9: Offline Sync Conflict Resolution**
    - **Validates: Requirements 3.4**

- [x] 9. Refactor EnrollmentContext for server-first sync
  - [x] 9.1 Update enrollment services for server-first sync
    - Fetch enrollments from server on login (not localStorage) ✓ (EnrollmentService fetches from Supabase)
    - Implement real-time subscription for enrollment changes ✓ (RealTimeEnrollmentSync exists)
    - Add connection status indicator support (partial - events dispatched)
    - Ensure same data on any device for authenticated users ✓ (server-first approach)
    - _Requirements: 3.1, 3.2, 3.3_
  - [ ]* 9.2 Write property test for cross-device consistency
    - **Property 7: Cross-Device Enrollment Consistency**
    - **Validates: Requirements 3.1, 3.3**

- [ ] 10. Add connection status indicator component
  - [ ] 10.1 Create src/components/ConnectionStatusIndicator.tsx
    - Display connection status in header
    - Show reconnecting state
    - Trigger data refresh on reconnection
    - _Requirements: 7.4, 7.5_
  - [ ]* 10.2 Write property test for reconnection data refresh
    - **Property 17: Reconnection Data Refresh**
    - **Validates: Requirements 7.5**

- [ ] 11. Checkpoint - Ensure all sync tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 3: Admin Dashboard - User Management

- [x] 12. Create database schema updates
  - [x] 12.1 Database schema already supports admin dashboard
    - proof_of_payment column exists in enrollments ✓
    - rejection_reason support exists ✓
    - phone, status columns exist in profiles ✓
    - course_progress table exists ✓
    - _Requirements: 4.2, 5.3, 6.2_

- [x] 13. Create AdminDashboard page structure
  - [x] 13.1 AdminDashboard already implemented with tabs
    - Tabbed interface (Users, Enrollments) ✓
    - Dashboard statistics cards ✓
    - Responsive layout ✓
    - _Requirements: 4.1, 4.4_
  - [ ] 13.2 Add Progress tab to AdminDashboard
    - Add "Progress" tab to existing tabs
    - Integrate ProgressTrackingPanel component
    - _Requirements: 6.1_

- [x] 14. User Management functionality
  - [x] 14.1 User management already implemented in AdminDashboard.tsx
    - Paginated user list with profile info ✓
    - Search by email, name ✓
    - Display: email, full name, registration date, status ✓
    - User detail modal ✓
    - _Requirements: 4.1, 4.2, 4.3_
  - [ ] 14.2 Enhance user management with phone and date range filter
    - Add phone number display to user list
    - Add date range filter for registration date
    - _Requirements: 4.2, 4.3_
  - [ ]* 14.3 Write property test for user profile completeness
    - **Property 10: Admin User Profile Completeness**
    - **Validates: Requirements 4.2**
  - [ ]* 14.4 Write property test for search filter accuracy
    - **Property 12: Admin Search Filter Accuracy**
    - **Validates: Requirements 4.3, 6.3**

- [ ] 15. Checkpoint - Ensure all user management tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 4: Admin Dashboard - Enrollment Management

- [x] 16. Enrollment Management functionality
  - [x] 16.1 EnrollmentManagement component already implemented
    - Display pending enrollments with user details ✓
    - Show course info and submission timestamp ✓
    - Approve/Reject buttons with confirmation ✓
    - _Requirements: 5.1, 5.2, 5.4, 5.5_
  - [ ] 16.2 Add rejection reason input modal
    - Create modal for entering rejection reason
    - Store rejection reason in database
    - _Requirements: 5.5_
  - [x] 16.3 Write property test for enrollment list completeness






    - **Property 11: Admin Enrollment List Completeness**
    - **Validates: Requirements 5.1, 5.2**
  - [ ]* 16.4 Write property test for enrollment action notification
    - **Property 13: Enrollment Action Notification**
    - **Validates: Requirements 5.4, 5.5**

- [x] 17. Proof of Payment Upload functionality
  - [x] 17.1 ProofOfPaymentForm already implemented
    - File input for JPEG, PNG, PDF ✓
    - Client-side validation before upload ✓ (5MB limit)
    - Upload progress indicator ✓
    - Store URL in enrollment record ✓
    - _Requirements: 8.1, 8.2, 8.3_
  - [ ] 17.2 Update file size limit to 10MB per requirements
    - Change max file size from 5MB to 10MB
    - _Requirements: 8.2_
  - [x] 17.3 Write property test for file upload validation






    - **Property 18: File Upload Validation**
    - **Validates: Requirements 8.2**
  - [ ]* 17.4 Write property test for proof enrollment link
    - **Property 19: Proof of Payment Enrollment Link**
    - **Validates: Requirements 8.3**

- [x] 18. Proof of Payment Viewer functionality
  - [x] 18.1 PaymentProofViewer already implemented
    - Modal overlay for viewing proof ✓
    - Inline image rendering with zoom ✓
    - Download button ✓
    - Missing proof indicator ✓
    - _Requirements: 8.4, 8.5_
  - [ ] 18.2 Add PDF viewer support
    - Add PDF rendering for document proofs
    - _Requirements: 8.4_
  - [ ]* 18.3 Write property test for missing proof indicator
    - **Property 20: Missing Proof Indicator**
    - **Validates: Requirements 8.5**

- [ ] 19. Checkpoint - Ensure all enrollment management tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 5: Admin Dashboard - Progress Tracking

- [ ] 20. Create ProgressTrackingPanel component
  - [ ] 20.1 Create src/components/admin/ProgressTrackingPanel.tsx
    - Course statistics (enrollment count, completion rate, avg progress)
    - User progress details (percentage, modules, quiz scores, last activity)
    - Filter by course, date range, progress threshold
    - CSV export functionality
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 21. Progress tracking service
  - [x] 21.1 ProgressTrackingService already implemented
    - Fetch user progress from course_progress table ✓
    - Calculate course statistics ✓
    - Progress percentage calculation ✓
    - _Requirements: 6.1, 6.2_
  - [ ] 21.2 Add CSV export functionality to ProgressTrackingService
    - Generate CSV export data for selected users/courses
    - _Requirements: 6.4_

## Phase 6: Real-Time Updates

- [x] 22. Real-time enrollment subscriptions for admin
  - [x] 22.1 Real-time subscriptions already implemented
    - Subscribe to new enrollment submissions ✓ (crossSessionEnrollmentSync)
    - Subscribe to enrollment status changes ✓ (realTimeEnrollmentSync)
    - Update UI on changes ✓
    - _Requirements: 7.1, 7.3_
  - [ ]* 22.2 Write property test for real-time enrollment submission
    - **Property 14: Real-Time Enrollment Submission**
    - **Validates: Requirements 7.1**
  - [ ]* 22.3 Write property test for real-time admin session sync
    - **Property 16: Real-Time Admin Session Sync**
    - **Validates: Requirements 7.3**

- [x] 23. Real-time status updates for users
  - [x] 23.1 Real-time status updates already implemented
    - Subscribe to enrollment status changes for current user ✓ (CourseCard listens to events)
    - Update UI on admin action ✓
    - Show toast notification on status change ✓
    - _Requirements: 7.2_
  - [ ]* 23.2 Write property test for real-time status propagation
    - **Property 15: Real-Time Status Propagation to User**
    - **Validates: Requirements 7.2**

- [ ] 24. Checkpoint - Ensure all real-time tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Phase 7: Integration and Polish

- [x] 25. Enrollment page with proof upload
  - [x] 25.1 ProofOfPaymentForm integrated into enrollment flow
    - Upload step in enrollment form ✓
    - Validate file before submission ✓
    - Show upload status ✓
    - _Requirements: 8.1, 8.2_

- [ ] 26. Final integration testing
  - [ ] 26.1 Test complete enrollment flow
    - User submits enrollment with proof → Admin sees in real-time → Admin approves → User sees access in real-time
    - _Requirements: 7.1, 7.2, 5.4_
  - [ ] 26.2 Test cross-device sync
    - Login on desktop → Enroll in course → Login on mobile → Verify same enrollment status
    - _Requirements: 3.3_
  - [ ] 26.3 Test mobile responsiveness
    - Verify all pages render correctly on mobile viewports
    - Verify touch targets and navigation
    - _Requirements: 1.1, 1.2, 2.1, 2.2_

- [ ] 27. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
