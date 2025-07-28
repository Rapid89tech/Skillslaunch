import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import { useCourses } from '@/hooks/useCourses';
import { useCourseFiltering } from '@/hooks/useCourseFiltering';
import CourseFilters from './courses/CourseFilters';
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
import video1 from '../../Videos/dreamina-2025-07-23-4631-Open with a wide shot of a high-tech fac....mp4';
import video2 from '../../Videos/dreamina-2025-07-23-6991-Open with a wide shot of a dimly lit off....mp4';
import video3 from '../../Videos/dreamina-2025-07-23-7258-zooming in toward a focused nail technic....mp4';
import video4 from '../../Videos/dreamina-2025-07-23-9513-Open with a wide shot of a dimly lit off....mp4';
import bgImage from '../../Videos/generation-5670abf4-0e74-47f0-bff8-9fd29b1af112.png';

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

const COURSE_BG_VIDEOS = [video1, video2, video3, video4];

const CATEGORY_ORDER = [
  'Information Communication and technology',
  'Beauty and Health',
  'Mechanical Repairs',
  'Construction',
  'Business',
];

const CourseGrid = () => {
  const { courses, loading } = useCourses();
  const {
    searchFilters,
    setSearchFilters,
    filteredCourses,
    handleClearFilters
  } = useCourseFiltering(courses);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [bgVideoIndex, setBgVideoIndex] = useState(0);

  // Carousel auto-slide logic
  const carouselApiRef = useRef(null);
  useEffect(() => {
    if (!carouselApiRef.current) return;
    const api = carouselApiRef.current;
    const interval = setInterval(() => {
      if (api && api.scrollNext) api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselApiRef.current, filteredCourses.length]);

  // Auto-slide background video
  useEffect(() => {
    const interval = setInterval(() => {
      setBgVideoIndex((prev) => (prev + 1) % COURSE_BG_VIDEOS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Add smooth scroll to the page
  if (typeof window !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="text-white">Loading courses...</div>
        </div>
      </section>
    );
  }

  // Remove groupedCourses and category headers
  // Use a single carousel for all filteredCourses
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(120deg, #0f172a 0%, #312e81 100%)' }}>
      {/* Static background image with 90% black gradient overlay */}
      <img
        src={bgImage}
        alt="Our Courses Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ opacity: 0.9 }}
      />
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 100%)' }} />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="relative text-center mb-10 animate-fade-in">
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
        {/* Floating filter button (all screens) */}
        <button
          className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-pink-500 text-white font-bold shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-400/60 animate-fade-in hover:scale-105 transition-all duration-300"
          onClick={() => setFiltersOpen(true)}
          type="button"
          style={{ minWidth: 48 }}
        >
          <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0013 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 017 17v-3.586a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" /></svg>
          Course Filter
        </button>
        {filtersOpen && (
          <div className="fixed inset-0 z-40 flex items-start bg-black/40 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-xs h-full animate-slide-in-left" style={{ left: 0, top: 0 }}>
              <CourseFilters onFiltersChange={setSearchFilters} />
              <button
                className="absolute top-4 right-4 text-white bg-red-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-red-700 transition-all"
                onClick={() => setFiltersOpen(false)}
                aria-label="Close Filters"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>
        )}
        {/* Single Carousel for All Filtered Courses */}
        {filteredCourses.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[340px] animate-fade-in mt-12">
            <div className="text-white text-lg">No courses found. Try adjusting your filters.</div>
            <Button className="mt-4 bg-gradient-to-r from-red-600 to-red-800 text-white" onClick={handleClearFilters}>Clear Filters</Button>
          </div>
        ) : (
          <div className="relative">
            <Carousel
              setApi={api => (carouselApiRef.current = api)}
              opts={{
                loop: true,
                align: 'start',
                slidesToScroll: 1,
                breakpoints: {
                  '(min-width: 1024px)': { slidesToScroll: 1 },
                  '(min-width: 768px)': { slidesToScroll: 1 },
                },
              }}
            >
              <CarouselContent>
                {filteredCourses.map((course, index) => {
            const colorScheme = getColorScheme(index);
            return (
                    <CarouselItem key={course.id} className="px-2 lg:basis-1/3 md:basis-1/2 basis-full transition-all duration-500">
                <div
                  className={`relative group rounded-3xl p-0 shadow-xl transition-all duration-500 bg-white/10 border-2 border-transparent flex flex-col items-stretch justify-between min-h-[340px] max-w-md mx-auto animate-fade-in-glass overflow-hidden backdrop-blur-xl
                        hover:scale-[1.045] hover:border-red-400/70 hover:shadow-2xl hover:-translate-y-1.5 hover:z-20
                        hover:shadow-[0_8px_32px_0_rgba(239,68,68,0.25),0_0_0_4px_rgba(239,68,68,0.10)]
                  `}
                  style={{ animationDelay: `${index * 180}ms` }}
                >
                  {/* Animated border glow */}
                        <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl border-2 border-transparent group-hover:border-red-400/60 group-hover:shadow-[0_0_40px_10px_rgba(239,68,68,0.15)] transition-all duration-500" />
                  {/* Featured Badge */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4 z-10">
                            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-1.5 rounded-full text-xs font-black animate-pulse shadow-lg border border-red-400/50">
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 transition-all duration-500 group-hover:from-red-900/60 group-hover:via-red-700/30" />
                  </div>
                  {/* Card Content */}
                  <div className="flex-1 flex flex-col px-6 pt-6 pb-7 z-10">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:via-pink-500 group-hover:to-red-700 group-hover:bg-clip-text group-hover:text-transparent transition-colors line-clamp-2 drop-shadow-lg">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-200 leading-relaxed group-hover:text-white/90 transition-colors line-clamp-3 mb-4 drop-shadow">
                      {course.description}
                    </p>
                          <div className="mt-auto flex items-center gap-3 text-xs text-red-100">
                      <span className="capitalize">{course.level}</span>
                      <span>•</span>
                      <span>{course.duration}</span>
                      {course.is_free && <span className="text-green-400 font-bold ml-2">FREE</span>}
                    </div>
                    <Link to="/courses" className="mt-5">
                            <button className="w-full py-2 px-4 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-medium shadow-lg hover:scale-105 hover:from-red-700 hover:to-red-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400/60 animate-ripple hover:shadow-[0_0_16px_2px_rgba(239,68,68,0.25)]">
                        View Course
                      </button>
                    </Link>
                  </div>
                </div>
                    </CarouselItem>
            );
          })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
        )}
        {/* View All Courses Button */}
        <div className="text-center animate-fade-in delay-1000 mt-10">
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
