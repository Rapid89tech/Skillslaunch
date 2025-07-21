import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';
import { useCourses } from '@/hooks/useCourses';
import aiHumanNew from '../../images/generation-7f218044-3139-41b5-8dc7-afedae829ae7.png';
import soundEngineeringNew from '../../images/generation-9c9ad650-aa25-4df1-9236-b137241521c0.png';
import podcastNew from '../../images/generation-8d3c5693-9f7f-4360-8c0b-533dc0da09bd.png';
import dieselMechanicNew from '../../images/generation-c8135d13-bf83-4379-847e-e306db926631.png';
import motorMechanicNew from '../../images/generation-147b4caa-7110-471b-bea0-9f848409020e.png';
import computerRepairsNew from '../../images/generation-223f5d12-39ae-4748-84af-466e0078c55d.png';
import entrepreneurshipNew from '../../images/generation-0fca7938-9dd0-47b3-9d36-a552cd0e2ed2.png';
import cellphoneRepairsNew from '../../images/generation-f3a5d1c2-fed5-4324-be4b-7b9c526b3455.png';
import hairDressingNew from '../../images/generation-14193c97-8259-4674-ac20-0b8a10a628ea.png';
import nailTechnicianNew from '../../images/generation-ca8e153c-3951-4b5e-b646-5b4e33e835cc.png';
import plumbingNew from '../../images/generation-704ccdce-48ca-411f-b5de-3adbe0ef98c1.png';
import tilingNew from '../../images/generation-25c77381-c00b-4f6f-a660-5de57dbf0cc5.png';
import roofingNew from '../../images/generation-8dea647f-b6de-42c7-8708-d6e68a0fe5d1.png';
import bg1 from '../../images/generation-cffafbac-d91b-446a-9e9b-ca3bf3981651.png';
import bg2 from '../../images/generation-00555fea-3c4a-4d7f-b3e6-3b5f5c7489e2.png';
import bg3 from '../../images/generation-969f65e7-199f-413b-9dd0-f1cc327594ae.png';
import bg4 from '../../images/generation-1c94cbdf-290c-4cce-88ce-73966ec946ba.png';

const getColorScheme = (index: number) => {
  const schemes = [
    {
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-600/30',
      borderColor: 'border-blue-500/30'
    },
    {
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-pink-600/30',
      borderColor: 'border-purple-500/30'
    },
    {
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-600/30',
      borderColor: 'border-green-500/30'
    },
    {
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-gradient-to-br from-orange-500/20 to-red-600/30',
      borderColor: 'border-orange-500/30'
    },
    {
      color: 'from-indigo-600 to-blue-600',
      bgColor: 'bg-gradient-to-br from-indigo-500/20 to-blue-600/30',
      borderColor: 'border-indigo-500/30'
    },
    {
      color: 'from-pink-600 to-rose-600',
      bgColor: 'bg-gradient-to-br from-pink-500/20 to-rose-600/30',
      borderColor: 'border-pink-500/30'
    }
  ];
  return schemes[index % schemes.length];
};

const COURSE_IMAGES: Record<string, string> = {
  'c9d8e7f6-a5b4-9483-d2e3-f4a5b6c7d8e9': entrepreneurshipNew,
  'ai-human-relations': aiHumanNew,
  'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d4': soundEngineeringNew,
  'podcast-management': podcastNew,
  'b8c7d6e5-f4a3-9281-b0c9-d8e7f6a5b4c3': dieselMechanicNew,
  'a7b6c5d4-e3f2-8391-a2b3-c4d5e6f7a8b9': motorMechanicNew,
  'computer-repairs': computerRepairsNew,
  'cellphone-repairs-course': cellphoneRepairsNew,
  'hair-dressing-course': hairDressingNew,
  'nail-technician-course': nailTechnicianNew,
  'plumbing-course': plumbingNew,
  'tiling-course': tilingNew,
  'roofing-course': roofingNew,
};
const PROFESSIONAL_BG_SLIDES = [
  bg3,
  bg1,
  bg4,
  bg2,
];

const CourseGrid = () => {
  const { courses, loading } = useCourses();
  
  // Display only the first 3 courses for home page preview
  const displayedCourses = courses.slice(0, 3);

  const [bgIndex, setBgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % PROFESSIONAL_BG_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="text-white">Loading courses...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(120deg, #0f172a 0%, #312e81 100%)' }}>
      {/* Animated HD background slider with dark overlay */}
      <div className="absolute inset-0 z-0">
        {PROFESSIONAL_BG_SLIDES.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Professionals"
            className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000 animate-bg-pan ${bgIndex === idx ? 'opacity-95' : 'opacity-0'}`}
            style={{filter:'brightness(0.5)'}}
          />
        ))}
        {/* Subtle animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/50 to-pink-900/40 mix-blend-multiply animate-gradient-x" />
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-glow delay-700" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-400/10 via-pink-400/10 to-purple-400/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-gradient-x" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="relative text-center mb-16 animate-fade-in">
          {/* Animated background element for depth */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-96 h-32 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse-glow" />
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-xl border border-blue-400/30 mb-4 animate-slide-in-right">
            <span className="text-white text-lg font-bold tracking-wide flex items-center">
              <svg className="w-5 h-5 mr-2 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
              Our Courses
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Professional Skills
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
            Get your certificate with Beta Skill Training Solutions, an accredited training institution
          </p>
        </div>

        {/* Course Grid or Empty State */}
        {displayedCourses.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[340px] animate-fade-in mt-12">
            {/* Modern card placeholder with color themes */}
            <div className="flex flex-wrap gap-8 justify-center">
              {[
                {
                  color: 'bg-red-600',
                  border: 'border-red-200',
                  btn: 'bg-red-600 text-white',
                  btnOutline: 'border-red-600 text-red-600',
                },
                {
                  color: 'bg-green-600',
                  border: 'border-green-200',
                  btn: 'bg-green-600 text-white',
                  btnOutline: 'border-green-600 text-green-600',
                },
                {
                  color: 'bg-purple-600',
                  border: 'border-purple-200',
                  btn: 'bg-purple-600 text-white',
                  btnOutline: 'border-purple-600 text-purple-600',
                },
              ].map((theme, idx) => (
                <div key={idx} className={`w-72 bg-white rounded-2xl shadow-xl border ${theme.border} flex flex-col items-center animate-scale-in`} style={{ animationDelay: `${idx * 120}ms` }}>
                  <div className={`w-full h-24 rounded-t-2xl ${theme.color} flex items-center justify-center relative`}>
                    <img src="/lovable-uploads/c890d50b-9e2b-4f34-8958-e006a579ccea.png" alt="Avatar" className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white object-cover" />
                  </div>
                  <div className="pt-14 pb-6 px-6 w-full flex flex-col items-center">
                    <div className="font-semibold text-lg text-gray-800">Tyrell Wellick</div>
                    <div className="text-xs text-gray-500 mb-4">Senior Web Developer</div>
                    <div className="flex justify-between w-full mb-4">
                      <div className="text-center">
                        <div className="font-bold text-gray-800 text-base">1.5M</div>
                        <div className="text-xs text-gray-500">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-800 text-base">92</div>
                        <div className="text-xs text-gray-500">Following</div>
                      </div>
                    </div>
                    <div className="flex gap-3 w-full">
                      <button className={`flex-1 rounded-full py-2 font-semibold text-sm shadow-sm transition-all duration-200 ${theme.btn}`}>Follow</button>
                      <button className={`flex-1 rounded-full py-2 font-semibold text-sm border shadow-sm transition-all duration-200 ${theme.btnOutline}`}>Message</button>
                    </div>
                  </div>
                  {/* Color selector dots */}
                  <div className="flex justify-center gap-3 py-3 bg-white rounded-b-2xl w-full border-t">
                    <span className="w-5 h-5 rounded-full bg-red-500 border-2 border-white shadow-sm inline-block"></span>
                    <span className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white shadow-sm inline-block"></span>
                    <span className="w-5 h-5 rounded-full bg-green-500 border-2 border-white shadow-sm inline-block"></span>
                    <span className="w-5 h-5 rounded-full bg-purple-500 border-2 border-white shadow-sm inline-block"></span>
                    <span className="w-5 h-5 rounded-full bg-yellow-400 border-2 border-white shadow-sm inline-block"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-2 md:px-0">
          {displayedCourses.map((course, index) => {
            const colorScheme = getColorScheme(index);
            return (
                <div
                  key={course.id}
                  className={`relative group rounded-3xl p-0 shadow-xl transition-all duration-500 bg-white/10 border-2 border-transparent flex flex-col items-stretch justify-between min-h-[340px] max-w-md mx-auto animate-fade-in-glass overflow-hidden backdrop-blur-xl
                  hover:scale-[1.045] hover:border-blue-400/70 hover:shadow-2xl hover:-translate-y-1.5 hover:z-20
                  hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.25),0_0_0_4px_rgba(59,130,246,0.10)]
                  `}
                  style={{ animationDelay: `${index * 180}ms` }}
                >
                  {/* Animated border glow */}
                  <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl border-2 border-transparent group-hover:border-blue-400/60 group-hover:shadow-[0_0_40px_10px_rgba(59,130,246,0.15)] transition-all duration-500" />
                  {/* Featured Badge */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-black animate-pulse shadow-lg border border-blue-400/50">
                        ⭐ FEATURED
                      </div>
                    </div>
                  )}
                  {/* Course Image with animated overlay */}
                  <div className="relative w-full h-40 overflow-hidden rounded-t-3xl">
                    <img
                      src={COURSE_IMAGES[course.id] || '/public/placeholder.svg'}
                      alt={course.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 bg-gray-200"
                      onError={e => { e.currentTarget.src = '/public/placeholder.svg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 transition-all duration-500 group-hover:from-blue-900/60 group-hover:via-blue-700/30" />
                  </div>
                  {/* Card Content */}
                  <div className="flex-1 flex flex-col px-6 pt-6 pb-7 z-10">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:via-pink-500 group-hover:to-red-700 group-hover:bg-clip-text group-hover:text-transparent transition-colors line-clamp-2 drop-shadow-lg">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-200 leading-relaxed group-hover:text-white/90 transition-colors line-clamp-3 mb-4 drop-shadow">
                      {course.description}
                    </p>
                    <div className="mt-auto flex items-center gap-3 text-xs text-blue-100">
                      <span className="capitalize">{course.level}</span>
                      <span>•</span>
                      <span>{course.duration}</span>
                      {course.is_free && <span className="text-green-400 font-bold ml-2">FREE</span>}
                    </div>
                    <Link to="/courses" className="mt-5">
                      <button className="w-full py-2 px-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-medium shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/60 animate-ripple hover:shadow-[0_0_16px_2px_rgba(59,130,246,0.25)]">
                        View Course
                      </button>
                    </Link>
                  </div>
                </div>
            );
          })}
        </div>
        )}

        {/* View All Courses Button */}
        <div className="text-center animate-fade-in delay-1000">
          <Link to="/courses">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-16 py-6 text-2xl font-black rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-blue-400/50">
              🎓 VIEW ALL COURSES
            </Button>
          </Link>
        </div>
      </div>

      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-spin-slow {
          animation: spin 2.5s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2.2s infinite alternate cubic-bezier(.5,1.5,.5,1);
        }
        @keyframes bounceSlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-18px); }
        }
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
        .animate-ripple:active {
          animation: ripple 0.4s linear;
        }
        @keyframes ripple {
          0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
          100% { box-shadow: 0 0 0 16px rgba(59,130,246,0); }
        }
        .animate-bg-pan {
          animation: bgPan 24s linear infinite alternate;
        }
        @keyframes bgPan {
          0% { object-position: 0% 50%; }
          100% { object-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default CourseGrid;
