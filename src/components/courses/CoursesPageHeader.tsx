import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const slides = [
  {
    title: 'Explore Courses',
    desc: 'Discover our comprehensive collection of courses designed to help you master new skills and advance your career.'
  },
  {
    title: 'Learn From Experts',
    desc: 'Our instructors are industry leaders ready to guide you every step of the way.'
  },
  {
    title: 'Flexible & Affordable',
    desc: 'Study at your own pace, anytime, anywhere. Many courses are 100% free!'
  }
];

const CoursesPageHeader = () => {
  return (
    <div className="relative mb-12 overflow-hidden rounded-3xl shadow-xl animate-fade-in">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 animate-gradient-x bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-80" />
      {/* Image overlay */}
      <img src="../../images/generation-cffafbac-d91b-446a-9e9b-ca3bf3981651.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0" />
      {/* Black overlay for clarity */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 py-16 px-4 sm:px-8 flex flex-col items-center justify-center min-h-[260px]">
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={idx} className="flex flex-col items-center justify-center text-center min-h-[200px]">
                <h1 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4 drop-shadow-lg animate-fade-in delay-100 text-white">{slide.title}</h1>
                <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
                  {slide.desc}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-30" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-30" />
        </Carousel>
      </div>
      {/* Animated background keyframes */}
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default CoursesPageHeader;
