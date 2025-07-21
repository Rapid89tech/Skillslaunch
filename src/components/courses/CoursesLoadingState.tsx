
const CoursesLoadingState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center animate-scale-in">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
        <p className="text-gray-600">Loading amazing courses...</p>
      </div>
    </div>
  );
};

export default CoursesLoadingState;
