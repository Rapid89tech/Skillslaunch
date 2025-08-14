import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Calendar, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg1 from '../../images/generation-cffafbac-d91b-446a-9e9b-ca3bf3981651.png';
import heroImg2 from '../../images/generation-00555fea-3c4a-4d7f-b3e6-3b5f5c7489e2.png';
import heroImg3 from '../../images/generation-969f65e7-199f-413b-9dd0-f1cc327594ae.png';
import heroImg4 from '../../images/generation-1c94cbdf-290c-4cce-88ce-73966ec946ba.png';

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('August 15, 2025 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="bg-gradient-to-r from-red-600/90 to-red-800/90 backdrop-blur-sm border border-red-400/30 rounded-2xl p-4 md:p-6 shadow-2xl">
        <div className="text-center mb-3">
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
            🎓 Courses Starting Soon!
          </h3>
          <p className="text-sm md:text-base text-red-100">
            Don't miss out on FREE training opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
        
        <div className="text-center mt-3">
          <p className="text-xs md:text-sm text-red-200 font-medium">
            Starting August 15th, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('August 15, 2025 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
        setTimeLeft(newTimeLeft);
        
        // Update DOM elements for the highlighted countdown
        const daysElement = document.getElementById('countdown-days');
        const hoursElement = document.getElementById('countdown-hours');
        const minutesElement = document.getElementById('countdown-minutes');
        const secondsElement = document.getElementById('countdown-seconds');
        
        if (daysElement) daysElement.textContent = newTimeLeft.days.toString();
        if (hoursElement) hoursElement.textContent = newTimeLeft.hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = newTimeLeft.minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = newTimeLeft.seconds.toString().padStart(2, '0');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
             {/* Main Hero Section */}
       <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
         {/* Video Background */}
         <video
           className="absolute inset-0 w-full h-full object-cover object-center z-0"
           src="/hero-video.mp4"
           autoPlay
           loop
           muted
           playsInline
           poster="/lovable-uploads/c890d50b-9e2b-4f34-8958-e006a579ccea.png"
           style={{ pointerEvents: 'none' }}
         />
         
         {/* Overlay */}
         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/85 to-black/90"></div>
         
         <div className="container mx-auto px-6 relative z-10">
           <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
             {/* Logo above the main title, centered */}
             <div className="flex items-center justify-center mb-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
               <div className="bg-white rounded-full p-4 shadow-2xl">
                 <img 
                   src="/lovable-uploads/c890d50b-9e2b-4f34-8958-e006a579ccea.png" 
                   alt="Beta Skill Logo" 
                   className="h-20 w-auto"
                 />
               </div>
             </div>
             
             {/* Main Title */}
             <h1 className="hero-title mb-6">
               <span className="hero-title-beta">BETA</span>
               <span className="hero-title-skill ml-4">SKILL TRAINING</span>
             </h1>
             
             {/* Main Message */}
             <h2 className="text-lg lg:text-xl font-bold text-white mb-6 leading-tight animate-hero-text delay-200">
               FREE TRAINING TO START YOUR OWN BUSINESS
             </h2>
             
             {/* Warning Messages */}
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
             
             {/* CTA Buttons */}
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
         
                   {/* Countdown in Bottom Left Corner - Highlighted Area */}
          <div className="absolute bottom-8 left-8 z-20 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="countdown-beautiful-container">
              <div className="countdown-beautiful-header">
                <div className="countdown-beautiful-icon">🎓</div>
                <div className="countdown-beautiful-text">
                  <h3 className="countdown-beautiful-title">Starting August 15th, 2025</h3>
                  <p className="countdown-beautiful-subtitle">Don't miss out!</p>
                </div>
              </div>
              
              <div className="countdown-beautiful-grid">
                <div className="countdown-beautiful-item">
                  <div className="countdown-beautiful-number" id="countdown-days">0</div>
                  <div className="countdown-beautiful-label">Days</div>
                  <div className="countdown-beautiful-glow"></div>
                </div>
                <div className="countdown-beautiful-item">
                  <div className="countdown-beautiful-number" id="countdown-hours">00</div>
                  <div className="countdown-beautiful-label">Hours</div>
                  <div className="countdown-beautiful-glow"></div>
                </div>
                <div className="countdown-beautiful-item">
                  <div className="countdown-beautiful-number" id="countdown-minutes">00</div>
                  <div className="countdown-beautiful-label">Min</div>
                  <div className="countdown-beautiful-glow"></div>
                </div>
                <div className="countdown-beautiful-item">
                  <div className="countdown-beautiful-number" id="countdown-seconds">00</div>
                  <div className="countdown-beautiful-label">Sec</div>
                  <div className="countdown-beautiful-glow"></div>
                </div>
              </div>
              
              <div className="countdown-beautiful-pulse"></div>
            </div>
          </div>
       </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">60+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Professional Courses</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Students Enrolled</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
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
        
        .countdown-container {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .countdown-item {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .countdown-item:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .countdown-number {
          font-size: 1.5rem;
          font-weight: 900;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          margin-bottom: 0.25rem;
        }
        
        .countdown-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #fecaca;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        @media (min-width: 768px) {
          .countdown-number {
            font-size: 2rem;
          }
          
          .countdown-label {
            font-size: 0.875rem;
          }
        }
        
                 .countdown-beautiful-container {
           background: linear-gradient(135deg, rgba(220, 38, 38, 0.95) 0%, rgba(153, 27, 27, 0.95) 100%);
           border: 2px solid rgba(255, 255, 255, 0.3);
           border-radius: 20px;
           padding: 1.5rem;
           box-shadow: 
             0 20px 40px rgba(0, 0, 0, 0.4),
             0 0 0 1px rgba(255, 255, 255, 0.1),
             inset 0 1px 0 rgba(255, 255, 255, 0.2);
           backdrop-filter: blur(20px);
           position: relative;
           overflow: hidden;
           min-width: 280px;
         }
         
         .countdown-beautiful-container::before {
           content: '';
           position: absolute;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
           animation: shimmer 3s infinite;
         }
         
         .countdown-beautiful-header {
           display: flex;
           align-items: center;
           gap: 0.75rem;
           margin-bottom: 1rem;
         }
         
         .countdown-beautiful-icon {
           font-size: 1.5rem;
           animation: bounce 2s infinite;
         }
         
         .countdown-beautiful-text {
           flex: 1;
         }
         
         .countdown-beautiful-title {
           font-size: 0.875rem;
           font-weight: 700;
           color: white;
           margin: 0;
           text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
         }
         
         .countdown-beautiful-subtitle {
           font-size: 0.75rem;
           color: rgba(255, 255, 255, 0.8);
           margin: 0;
           font-weight: 500;
         }
         
         .countdown-beautiful-grid {
           display: grid;
           grid-template-columns: repeat(4, 1fr);
           gap: 0.75rem;
         }
         
         .countdown-beautiful-item {
           position: relative;
           text-align: center;
           background: rgba(255, 255, 255, 0.15);
           border-radius: 12px;
           padding: 0.75rem 0.5rem;
           border: 1px solid rgba(255, 255, 255, 0.2);
           backdrop-filter: blur(10px);
           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
           overflow: hidden;
         }
         
         .countdown-beautiful-item:hover {
           transform: translateY(-4px) scale(1.05);
           background: rgba(255, 255, 255, 0.25);
           box-shadow: 
             0 8px 25px rgba(0, 0, 0, 0.3),
             0 0 0 1px rgba(255, 255, 255, 0.3);
         }
         
         .countdown-beautiful-item::before {
           content: '';
           position: absolute;
           top: 0;
           left: -100%;
           width: 100%;
           height: 100%;
           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
           transition: left 0.6s ease;
         }
         
         .countdown-beautiful-item:hover::before {
           left: 100%;
         }
         
         .countdown-beautiful-number {
           font-size: 1.5rem;
           font-weight: 900;
           color: white;
           text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
           margin-bottom: 0.25rem;
           display: block;
           position: relative;
           z-index: 2;
           animation: numberPulse 1s ease-in-out infinite alternate;
         }
         
         .countdown-beautiful-label {
           font-size: 0.625rem;
           font-weight: 600;
           color: rgba(255, 255, 255, 0.9);
           text-transform: uppercase;
           letter-spacing: 0.5px;
           position: relative;
           z-index: 2;
         }
         
         .countdown-beautiful-glow {
           position: absolute;
           top: 50%;
           left: 50%;
           width: 100%;
           height: 100%;
           background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
           transform: translate(-50%, -50%);
           border-radius: 50%;
           animation: glowPulse 2s ease-in-out infinite;
         }
         
         .countdown-beautiful-pulse {
           position: absolute;
           top: 50%;
           left: 50%;
           width: 100%;
           height: 100%;
           background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
           transform: translate(-50%, -50%);
           border-radius: 50%;
           animation: containerPulse 3s ease-in-out infinite;
         }
         
         @media (min-width: 768px) {
           .countdown-beautiful-container {
             min-width: 320px;
             padding: 2rem;
           }
           
           .countdown-beautiful-number {
             font-size: 1.75rem;
           }
           
           .countdown-beautiful-label {
             font-size: 0.75rem;
           }
           
           .countdown-beautiful-title {
             font-size: 1rem;
           }
         }
         
         @keyframes shimmer {
           0% { transform: translateX(-100%); }
           100% { transform: translateX(100%); }
         }
         
         @keyframes bounce {
           0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
           40% { transform: translateY(-5px); }
           60% { transform: translateY(-3px); }
         }
         
         @keyframes numberPulse {
           0% { transform: scale(1); }
           100% { transform: scale(1.05); }
         }
         
         @keyframes glowPulse {
           0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
           50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
         }
         
         @keyframes containerPulse {
           0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
           50% { opacity: 0.3; transform: translate(-50%, -50%) scale(1.05); }
         }
      `}</style>
    </>
  );
};

export default Hero;
