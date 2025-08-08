import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Calendar, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg1 from '../../images/generation-cffafbac-d91b-446a-9e9b-ca3bf3981651.png';
import heroImg2 from '../../images/generation-00555fea-3c4a-4d7f-b3e6-3b5f5c7489e2.png';
import heroImg3 from '../../images/generation-969f65e7-199f-413b-9dd0-f1cc327594ae.png';
import heroImg4 from '../../images/generation-1c94cbdf-290c-4cce-88ce-73966ec946ba.png';
// import video1 from '../../Videos/dreamina-2025-07-23-4631-Open with a wide shot of a high-tech fac....mp4';
// import video2 from '../../Videos/dreamina-2025-07-23-6991-Open with a wide shot of a dimly lit off....mp4';
// import video3 from '../../Videos/dreamina-2025-07-23-7258-zooming in toward a focused nail technic....mp4';
// import video4 from '../../Videos/dreamina-2025-07-23-9513-Open with a wide shot of a dimly lit off....mp4';

// Randomize the order of hero images
const heroImages = [heroImg2, heroImg4, heroImg1, heroImg3];

// const heroVideos = [video1, video2, video3, video4];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000); // Slower transition
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVideoIndex((prev) => (prev + 1) % heroVideos.length);
  //   }, 10000); // Much slower transition
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Video Background Slider - STABILIZED */}
        {/* {heroVideos.map((src, idx) => (
          <video
            key={src}
            className={`absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-2000 ${videoIndex === idx ? 'opacity-100' : 'opacity-0'}`}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            poster="/lovable-uploads/c890d50b-9e2b-4f34-8958-e006a579ccea.png"
            style={{ pointerEvents: 'none' }}
          />
        ))} */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/85 to-black/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
            {/* Logo above the main title, centered - STABILIZED */}
            <div className="flex items-center justify-center mb-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-full p-4 shadow-2xl">
                <img 
                  src="/lovable-uploads/c890d50b-9e2b-4f34-8958-e006a579ccea.png" 
                  alt="Beta Skill Logo" 
                  className="h-20 w-auto"
                />
              </div>
            </div>
            {/* Main Title with STABILIZED Animation */}
            <h1 className="hero-title mb-6">
              <span className="hero-title-beta">BETA</span>
              <span className="hero-title-skill ml-4">SKILL TRAINING</span>
            </h1>
            {/* Main Message */}
            <h2 className="text-lg lg:text-xl font-bold text-white mb-6 leading-tight animate-hero-text delay-200">
              FREE TRAINING TO START YOUR OWN BUSINESS
            </h2>
            {/* Warning Messages - NO FLASHING */}
            <div className="space-y-3 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="block">
                <div className="bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-2 rounded-full shadow-xl inline-block transform hover:scale-105 transition-transform duration-300">
                  <div className="text-base lg:text-lg font-bold">FEES MUST FALL!</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full shadow-2xl inline-block transform hover:scale-105 transition-transform duration-300">
                <div className="text-lg lg:text-xl font-black">
                  JOBS ARE AT RISK!
                </div>
              </div>
            </div>
            {/* CTA Buttons - Smaller Size */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Link to="/courses">
                <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-2 text-sm font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-0">
                  OUR COURSES
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-2 text-sm font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-0">
                  APPLY NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - STABILIZED */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Professional Courses</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Students Enrolled</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Support Available</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Free Training</div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes hero-text {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-text {
          animation: hero-text 1s ease-out both;
        }
        .hero-title {
          position: relative;
          display: inline-block;
          font-size: 3rem;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -2px;
          background: none;
          filter: none;
        }
        .hero-title-beta {
          color: #ff3c3c;
          font-size: 1.1em;
          letter-spacing: 2px;
          font-weight: 900;
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 12px #ff3c3c55, 0 0 0 #fff;
          animation: hero-beta-pop 1s ease-out both;
        }
        .hero-title-skill {
          background: linear-gradient(90deg, #fff, #7f5fff 60%, #ff3c3c 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          font-size: 1em;
          font-weight: 900;
          letter-spacing: 1px;
          position: relative;
          z-index: 2;
          animation: hero-skill-slide 1.2s ease-out both;
        }
        @keyframes hero-beta-pop {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes hero-skill-slide {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default Hero;
