
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, BookOpen, User, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import LogoutButton from './LogoutButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  const getDashboardLink = () => {
    if (!user || !profile) return '/dashboard'; // Default to main dashboard
    
    switch (profile.role) {
      case 'instructor':
        return '/instructor-dashboard';
      case 'admin':
        return '/admin-dashboard';
      default:
        return '/dashboard';
    }
  };

  const handleDashboardClick = () => {
    // Don't redirect to auth if loading or if user exists
    if (loading) return; // Wait for auth to finish loading
    
    if (!user) {
      navigate('/auth');
    } else {
      // Navigate to appropriate dashboard
      navigate(getDashboardLink());
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/c890d50b-9e2b-4f34-8958-e006a579ccea.png" 
              alt="Beta Skill Logo" 
              className="h-12 w-auto group-hover:scale-110 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">Beta Skill</span>
              <span className="text-xs text-gray-600 uppercase tracking-wider">Training Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Courses
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Button
                  onClick={handleDashboardClick}
                  variant="ghost"
                  className="text-gray-700 hover:text-primary font-medium"
                  disabled={loading}
                >
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
                <LogoutButton />
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/auth">
                  <Button variant="ghost" className="text-gray-700 hover:text-primary font-medium">
                    Log In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="bg-primary hover:bg-primary-dark text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/courses" 
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              
              {user ? (
                <div className="flex flex-col space-y-3">
                  <Button
                    onClick={handleDashboardClick}
                    variant="ghost"
                    className="justify-start text-gray-700 hover:text-primary font-medium"
                    disabled={loading}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                  <LogoutButton />
                </div>
              ) : (
                <div className="flex flex-col space-y-3">
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-primary font-medium">
                      Log In
                    </Button>
                  </Link>
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
