// Utility to clean up conflicting progress data that might cause flashing
export const cleanupProgressData = () => {
  try {
    console.log('🧹 Cleaning up conflicting progress data...');
    
    // Get all localStorage keys
    const keys = Object.keys(localStorage);
    
    // Remove all progress-related cache keys that might conflict
    const progressKeys = keys.filter(key => 
      key.includes('progress') || 
      key.includes('enrollment') ||
      key.includes('completed-lessons') ||
      key.includes('quiz-attempts') ||
      key.includes('user-cache')
    );
    
    progressKeys.forEach(key => {
      localStorage.removeItem(key);
      console.log(`  Removed: ${key}`);
    });
    
    // Clear any user-specific caches
    const userKeys = keys.filter(key => key.startsWith('user-') || key.startsWith('cache-'));
    userKeys.forEach(key => {
      localStorage.removeItem(key);
      console.log(`  Removed: ${key}`);
    });
    
    console.log(`✅ Cleaned up ${progressKeys.length + userKeys.length} cache entries`);
    return true;
  } catch (error) {
    console.error('Error cleaning up progress data:', error);
    return false;
  }
};

// Function to clear specific course progress
export const clearCourseProgress = (courseId: string) => {
  try {
    const keys = Object.keys(localStorage);
    const courseKeys = keys.filter(key => key.includes(courseId));
    
    courseKeys.forEach(key => {
      localStorage.removeItem(key);
    });
    
    console.log(`✅ Cleared progress for course: ${courseId}`);
    return true;
  } catch (error) {
    console.error(`Error clearing progress for course ${courseId}:`, error);
    return false;
  }
};

// Make these available for debugging
if (typeof window !== 'undefined') {
  (window as any).cleanupProgressData = cleanupProgressData;
  (window as any).clearCourseProgress = clearCourseProgress;
}
