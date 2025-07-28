import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import CourseGrid from '@/components/CourseGrid';
import Footer from '@/components/Footer';
import { useAuth } from '@/hooks/AuthContext';
import { Calendar, CheckCircle, Users, TrendingUp } from 'lucide-react';

const Index = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const handleDashboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user && profile) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Auth Quick Access */}
      {user ? (
        <div className="bg-gradient-to-r from-red-600/90 to-red-800/90 py-3 border-b border-red-500/30 animate-slide-in-right backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-white font-medium">
              Welcome back, <span className="font-bold text-red-200">{profile?.first_name || 'User'}</span>! 
              <button 
                onClick={handleDashboardClick}
                className="ml-2 text-red-200 hover:text-white font-semibold hover:underline transition-colors cursor-pointer"
              >
                Go to your dashboard →
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-red-600/90 to-red-800/90 py-3 border-b border-red-500/30 animate-slide-in-right backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-white font-medium">
              🚀 Ready to transform your career? 
              <Link to="/auth" className="ml-2 text-red-200 hover:text-white font-bold hover:underline transition-colors">
                Join thousands of successful graduates →
              </Link>
            </p>
          </div>
        </div>
      )}
      
      <div className="animate-fade-in">
        <Hero />
        <div className="animate-slide-in-right delay-300">
          <CourseGrid />
        </div>
        
        {/* Students Interest Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden" style={{background: 'linear-gradient(120deg, #fff1f2 0%, #fff7ed 100%)'}}>
          {/* Animated blurred shapes for depth */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-pink-300/30 rounded-full filter blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-200/40 rounded-full filter blur-3xl animate-pulse-glow delay-700" />
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-gradient-to-r from-pink-200/20 via-yellow-100/20 to-orange-200/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-gradient-x" />
          </div>
          <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
            <div className="backdrop-blur-xl bg-white/60 border-2 border-pink-200/40 shadow-2xl rounded-3xl p-0 max-w-4xl mx-auto animate-fade-in-glass overflow-hidden">
              {/* Animated badge and number */}
              <div className="flex flex-col items-center justify-center pt-10 pb-2 gap-2">
                <div className="relative flex items-center justify-center">
                  <span className="absolute -top-3 -right-3 bg-gradient-to-br from-pink-500 to-orange-400 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-bounce-slow border-2 border-white/60 z-10">
                    <Users className="inline-block w-4 h-4 mr-1 -mt-1" />
                    Students
                  </span>
                  <span className="text-4xl md:text-6xl font-black text-gray-900 drop-shadow animate-countup">5,056</span>
                  <TrendingUp className="h-7 w-7 text-green-500 ml-3 animate-bounce" />
                </div>
                <div className="text-base md:text-lg text-gray-700 font-bold tracking-wide animate-fade-in delay-200">Already Interested!</div>
              </div>
              {/* Growth badge */}
              <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-full inline-block mb-4 mt-2 animate-pulse shadow-lg text-xs md:text-sm font-bold tracking-wide animate-fade-in delay-300">
                <span>🔥 Growing with every registration! Join them now!</span>
              </div>
              {/* Glassmorphism CTA card */}
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 text-white rounded-3xl p-6 md:p-8 mx-4 md:mx-8 mb-8 shadow-xl border border-pink-200/20 animate-fade-in-glass">
                <div className="flex flex-col items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-pink-600 to-orange-500 text-white px-5 py-2 rounded-full text-xs md:text-base font-black shadow-lg animate-pulse-glow border-2 border-white/10 animate-fade-in delay-400">
                    🎉 100% FREE TUITION! 🎉
                  </span>
                  <h3 className="text-lg md:text-2xl font-black mb-1 text-white animate-fade-in delay-500">Ready to Start Your Journey?</h3>
                  <p className="text-xs md:text-base mb-4 text-gray-200 leading-relaxed max-w-2xl mx-auto animate-fade-in delay-600">
                    Join thousands of students who have already shown interest in our FREE courses. Submit your details and we'll contact you with next steps.
                  </p>
                  <Link to="/auth" className="w-full max-w-xs animate-fade-in delay-700">
                    <button className="w-full py-3 rounded-full bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold text-base shadow-xl hover:scale-105 hover:from-pink-700 hover:to-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400/60 animate-ripple relative overflow-hidden">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 animate-confetti">🎓</span>
                      GET STARTED FREE
                    </button>
                  </Link>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm mt-2 animate-fade-in delay-800">
                  <div className="flex items-center text-green-400 justify-center">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="font-semibold">No commitment required</span>
                  </div>
                  <div className="flex items-center text-green-400 justify-center">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="font-semibold">100% FREE tuition</span>
                  </div>
                  <div className="flex items-center text-green-400 justify-center">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="font-semibold">Only R500 admin fee when accepted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`
            .animate-fade-in-glass {
              opacity: 0;
              transform: translateY(40px) scale(0.98);
              animation: fadeInGlass 0.8s cubic-bezier(.4,2,.3,1) forwards;
            }
            @keyframes fadeInGlass {
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            .animate-bounce-slow {
              animation: bounceSlow 2.2s infinite alternate cubic-bezier(.5,1.5,.5,1);
            }
            @keyframes bounceSlow {
              0% { transform: translateY(0); }
              100% { transform: translateY(-12px); }
            }
            .animate-pulse-glow {
              animation: pulseGlow 2.5s ease-in-out infinite;
            }
            @keyframes pulseGlow {
              0%, 100% { opacity: 0.7; }
              50% { opacity: 1; }
            }
            .animate-gradient-x {
              background-size: 200% 200%;
              animation: gradient-x 8s ease-in-out infinite;
            }
            @keyframes gradient-x {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-countup {
              animation: countUp 1.2s cubic-bezier(.4,2,.3,1);
            }
            @keyframes countUp {
              from { opacity: 0; transform: scale(0.8); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-confetti {
              animation: confetti 1.2s infinite alternate;
            }
            @keyframes confetti {
              0% { transform: rotate(-10deg) scale(1); }
              100% { transform: rotate(10deg) scale(1.15); }
            }
            .animate-ripple:active {
              animation: ripple 0.4s linear;
            }
            @keyframes ripple {
              0% { box-shadow: 0 0 0 0 rgba(236,72,153,0.3); }
              100% { box-shadow: 0 0 0 16px rgba(236,72,153,0); }
            }
          `}</style>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
