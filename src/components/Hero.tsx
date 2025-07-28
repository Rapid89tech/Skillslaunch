import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Calendar, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg1 from '../../images/generation-cffafbac-d91b-446a-9e9b-ca3bf3981651.png';
import heroImg2 from '../../images/generation-00555fea-3c4a-4d7f-b3e6-3b5f5c7489e2.png';
import heroImg3 from '../../images/generation-969f65e7-199f-413b-9dd0-f1cc327594ae.png';
import heroImg4 from '../../images/generation-1c94cbdf-290c-4cce-88ce-73966ec946ba.png';
import video1 from '../../Videos/dreamina-2025-07-23-4631-Open with a wide shot of a high-tech fac....mp4';
import video2 from '../../Videos/dreamina-2025-07-23-6991-Open with a wide shot of a dimly lit off....mp4';
import video3 from '../../Videos/dreamina-2025-07-23-7258-zooming in toward a focused nail technic....mp4';
import video4 from '../../Videos/dreamina-2025-07-23-9513-Open with a wide shot of a dimly lit off....mp4';

// Randomize the order of hero images
const heroImages = [heroImg2, heroImg4, heroImg1, heroImg3];

const heroVideos = [video1, video2, video3, video4];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Video Background Slider */}
        {heroVideos.map((src, idx) => (
          <video
            key={src}
            className={`absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-1000 ${videoIndex === idx ? 'opacity-100' : 'opacity-0'}`}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            poster="/lovable-uploads/c890d50b-9e2b-4f34-8958-e006a579ccea.png"
            style={{ pointerEvents: 'none' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/85 to-black/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
            {/* Logo above the main title, centered */}
            <div className="flex items-center justify-center mb-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-full p-4 shadow-2xl animate-pulse-glow">
                <img 
                  src="/lovable-uploads/c890d50b-9e2b-4f34-8958-e006a579ccea.png" 
                  alt="Beta Skill Logo" 
                  className="h-20 w-auto"
                />
              </div>
            </div>
            {/* Main Title with Enhanced Animation */}
            <h1 className="hero-title mb-6">
              <span className="hero-title-beta">BETA</span>
              <span className="hero-title-skill ml-4">SKILL TRAINING</span>
              <span className="hero-title-shimmer" />
            </h1>
            {/* Main Message */}
            <h2 className="text-lg lg:text-xl font-bold text-white mb-6 leading-tight animate-hero-text delay-200">
              FREE TRAINING TO START YOUR OWN BUSINESS
            </h2>
            {/* Warning Messages with Flashing Animation */}
            <div className="space-y-3 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="block">
                <div className="bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-2 rounded-full shadow-xl inline-block transform hover:scale-105 transition-transform duration-300">
                  <div className="text-base lg:text-lg font-bold">FEES MUST FALL!</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full shadow-2xl inline-block transform hover:scale-105 transition-transform duration-300">
                <div className="text-lg lg:text-xl font-black animate-flash-strong">
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
            {/* Course Start Date - Added to bottom of hero with animations */}
            <div className="mt-8 animate-fade-in" style={{ animationDelay: '1.0s' }}>
              <div className="bg-gradient-to-r from-red-600/90 to-red-800/90 backdrop-blur-sm text-white px-6 py-4 rounded-2xl shadow-2xl inline-block animate-pulse-glow hover:scale-105 transition-all duration-500 border border-red-400/30">
                <div className="flex items-center justify-center mb-2 animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <Calendar className="h-6 w-6 mr-2 text-red-200 animate-pulse" />
                  <span className="text-sm font-bold text-red-100">COURSE START DATE</span>
                </div>
                <div className="text-2xl lg:text-3xl font-black mb-1 text-white drop-shadow-lg animate-pulse-glow">
                  01 AUGUST 2025
                </div>
                <div className="text-xs text-red-100 font-medium animate-fade-in" style={{ animationDelay: '1.8s' }}>
                  All courses begin on this date - Don't miss out!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Animated keyframes for hero text and flash */}
      <style>{`
        @keyframes hero-text {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          60% { opacity: 1; transform: translateY(-8px) scale(1.04); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-hero-text {
          animation: hero-text 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes flash {
          0% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        .animate-flash {
          animation: flash 1.5s infinite alternate;
        }
        @keyframes flash-strong {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 16px #ff0000cc); }
          50% { opacity: 0.3; filter: drop-shadow(0 0 32px #ff0000ff); }
        }
        .animate-flash-strong {
          animation: flash-strong 1s infinite alternate;
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
          animation: hero-beta-pop 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
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
          animation: hero-skill-slide 1.4s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .hero-title-shimmer {
          content: '';
          position: absolute;
          left: 0; top: 0; right: 0; bottom: 0;
          background: linear-gradient(120deg, transparent 0%, #fff8 50%, transparent 100%);
          opacity: 0.7;
          pointer-events: none;
          z-index: 3;
          animation: hero-shimmer 2.5s linear infinite;
        }
        @keyframes hero-gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes hero-shimmer {
          0% { transform: translateX(-100%); opacity: 0.2; }
          40% { opacity: 0.7; }
          60% { opacity: 0.7; }
          100% { transform: translateX(100%); opacity: 0.2; }
        }
        @keyframes hero-beta-pop {
          0% { opacity: 0; transform: scale(0.8) translateY(40px); }
          60% { opacity: 1; transform: scale(1.1) translateY(-8px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes hero-skill-slide {
          0% { opacity: 0; transform: translateX(60px) scale(0.95); }
          60% { opacity: 1; transform: translateX(-8px) scale(1.04); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </>
  );
};

export default Hero;
