import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Target, Globe, CheckCircle, Users, Star, Layers, ListChecks } from 'lucide-react';
import LearningObjectives from './LearningObjectives';
import CourseCurriculum from './CourseCurriculum';

interface CourseOverviewProps {
  courseId: string;
}

const SECTION_ORDER = [
  'introduction',
  'overview',
  'objectives',
  'learningObjectives', // Only this for objectives
  'learningOutcomes',
  'targetAudience',
  'learningMaterials',
  'assessment',
  'prerequisites',
  'courseCurriculum', // Always include
];

const SECTION_LABELS: Record<string, string> = {
  introduction: 'Introduction',
  overview: 'Course Overview',
  objectives: 'Course Objectives',
  learningObjectives: 'Learning Objectives',
  learningOutcomes: 'Learning Outcomes',
  targetAudience: 'Target Audience',
  learningMaterials: 'Learning Materials/Resources',
  assessment: 'Assessment/Evaluation Methods',
  prerequisites: 'Prerequisites',
  courseCurriculum: 'Course Curriculum',
};

const SECTION_ICONS: Record<string, any> = {
  introduction: <BookOpen className="h-5 w-5 text-blue-600" />,
  overview: <Globe className="h-5 w-5 text-green-600" />,
  objectives: <Target className="h-5 w-5 text-purple-600" />,
  learningObjectives: <Target className="h-5 w-5 text-blue-600" />,
  learningOutcomes: <ListChecks className="h-5 w-5 text-blue-500" />,
  targetAudience: <Users className="h-5 w-5 text-orange-600" />,
  learningMaterials: <Layers className="h-5 w-5 text-pink-600" />,
  assessment: <Star className="h-5 w-5 text-yellow-500" />,
  prerequisites: <Layers className="h-5 w-5 text-red-600" />,
  courseCurriculum: <BookOpen className="h-5 w-5 text-blue-600" />,
};

const CourseOverview = ({ courseId }: CourseOverviewProps) => {
  const courseData: Record<string, any> = {
    'ai-human-relations': {
      description: "This course explores the dynamic relationship between humans and artificial intelligence. It examines how AI influences communication, emotional intelligence, workplace interactions, decision-making, ethics, and societal norms. Learners will critically evaluate the opportunities and challenges AI presents in human-centered fields and develop frameworks to navigate these changes with empathy and responsibility.",
      objectives: [
        'Analyze the evolving relationship between humans and artificial intelligence',
        'Understand how AI technologies are shaping personal, professional, and societal interactions',
        'Evaluate the impact of AI on communication and emotional intelligence',
        'Assess how AI influences human communication styles, empathy, and the development of emotional intelligence',
        'Examine workplace transformations driven by AI',
        'Identify changes in workplace dynamics, collaboration, and decision-making processes resulting from AI integration',
        'Assess ethical considerations and societal implications of AI',
        'Critically discuss issues such as bias, privacy, transparency, and the ethical use of AI in human-centered fields',
        'Explore the influence of AI on societal norms and cultural values',
        'Reflect on how AI adoption is reshaping social expectations, behaviors, and cultural frameworks',
        'Identify opportunities and challenges presented by AI in human-centered professions',
        'Weigh the benefits and risks of AI in education, healthcare, business, and other people-focused sectors',
        'Develop practical frameworks for navigating AI-driven change with empathy and responsibility',
        'Create strategies to ensure ethical, inclusive, and human-centered adoption of AI technologies',
        'Foster critical thinking and adaptability in the age of AI',
        'Build skills to continuously assess and respond to new developments in AI with a focus on human well-being'
      ],
      targetAudience: [
        'HR professionals and organizational leaders',
        'AI developers and designers', 
        'Educators and sociologists',
        'Psychology and ethics students',
        'Anyone interested in the human side of AI'
      ]
    },
    'f9e8d7c6-b5a4-9382-c1d0-e9f8a7b6c5d4': {
      introduction: "Sound engineering is a critical skill in the modern world of media, live events, music production, and broadcasting. This course offers a comprehensive understanding of audio technology, studio operations, sound processing, and distribution — aligned with South African technical education frameworks.",
      overview: "This course is designed to provide a theoretical and practical foundation in sound engineering, incorporating essential concepts, workflows, and tools. It is structured across multiple modules, each covering a critical component of the field. Learners will engage in lessons, activities, and end-of-module quizzes to reinforce learning.",
      objectives: [
        'Understand the physics of sound and digital audio principles',
        'Operate and configure audio recording and mixing equipment',
        'Apply mixing and mastering techniques in a digital audio environment',
        'Set up and manage live sound systems',
        'Understand sound for broadcast and film production',
        'Comply with basic legal and copyright frameworks in audio distribution',
        'Demonstrate workplace-readiness in audio-related industries'
      ]
    },
    'c9d8e7f6-a5b4-9483-d2e3-f4a5b6c7d8e9': {
      overview: `"Entrepreneurship: Building Your Business” is a comprehensive online course designed to empower aspiring entrepreneurs with the skills, mindset, and strategies needed to launch and sustain a successful business. This course covers the entrepreneurial journey from ideation to execution, exploring critical topics such as identifying market opportunities, conducting effective market research, crafting business models, and implementing targeted marketing strategies. Learners will gain practical insights into the planning and development processes, understand the business ecosystem, and discover how to create a unique value proposition that resonates with customers. Delivered entirely online, this course is accessible globally and combines engaging content with actionable tools to help you turn your business ideas into reality, whether you're starting a local service or a scalable tech venture.\n\nThe course emphasizes real-world application, guiding learners through hands-on exercises like conducting a Community Scan to identify market needs and developing a business plan tailored to their target audience. Its relevance lies in equipping individuals with the knowledge to navigate today’s dynamic economy, where entrepreneurship drives innovation and growth. With flexible, self-paced learning and support from an AI-powered voice tutor, this course is ideal for anyone looking to build a business with confidence and clarity.`,
      learningObjectives: [
        'Identify and articulate the mindset and common characteristics of successful entrepreneurs, applying these traits to their own ventures.',
        'Conduct a Community Scan to evaluate market needs and validate business opportunities using observational and interview techniques.',
        'Perform targeted market research to define customer segments, analyze demand, and develop a unique value proposition.',
        'Explain and apply the development and planning processes involved in launching a new product or service, including creating a business plan.',
        'Analyze the business ecosystem and evaluate successful business models (e.g., subscription, freemium, or product-based) to select the most suitable for their venture.',
        'Design effective marketing strategies that focus on specific customer segments to maximize impact and resource efficiency.',
        'Develop a comprehensive business pitch tailored to attract investors, partners, or customers.'
      ],
      targetAudience: [
        'Aspiring entrepreneurs with little to no prior business experience who want to start their own venture.',
        'Professionals seeking to transition into entrepreneurship or launch a side hustle.',
        'Small business owners looking to refine their strategies and scale their operations.',
        'Students or young professionals interested in understanding the entrepreneurial process and business ecosystem.',
        'Individuals from any industry (e.g., tech, retail, services) interested in creating a business that addresses local or global market needs. The course is beginner-friendly and optimized for online learning, requiring no prior business knowledge. Basic digital literacy (e.g., navigating online platforms) is sufficient, making it accessible to a global audience with diverse backgrounds.'
      ],
      learningMaterials: [
        'Video Lectures: Engaging, bite-sized videos covering key topics like market research, business models, and marketing strategies, accessible via the course platform.',
        'Downloadable PDFs: Templates for business plans, Community Scan checklists, and market research frameworks.',
        'Interactive Quizzes: Online quizzes to reinforce key concepts, such as identifying entrepreneurial traits or analyzing business ecosystems.',
        'Case Studies: Real-world examples of successful startups, available as downloadable PDFs or embedded in video content.',
        'Discussion Forums: Online forums for learners to share ideas, discuss Community Scan findings, and collaborate on business ideas.',
        'AI Voice Tutor: An intelligent, voice-enabled tutor available 24/7 to answer questions, clarify concepts, and provide personalized guidance.',
        'External Resources: Links to free online tools for market research (e.g., Google Trends, social media analytics) and business planning (e.g., Canva for pitch decks).',
        'Required Tools: A computer or mobile device with internet access, a web browser (e.g., Chrome, Firefox), and access to the course platform (e.g., via grok.com or the Grok mobile app). No additional software is required.'
      ],
      assessment: [
        'Online Quizzes: Multiple-choice and scenario-based quizzes to test understanding of entrepreneurial concepts, such as identifying market needs or selecting business models (graded automatically).',
        'Community Scan Assignment: A practical exercise where learners conduct a Community Scan in their local area, submit a report via the course platform, and receive feedback from instructors.',
        'Business Plan Project: A capstone project requiring learners to create a business plan, including market research, a value proposition, and a marketing strategy. Submitted online and evaluated by instructors.',
        'Peer Reviews: Learners review and provide feedback on each other’s business pitches in discussion forums, fostering collaboration and critical thinking.',
        'Progress Tracking: The course platform provides a dashboard to monitor quiz scores, assignment completion, and overall progress. Feedback is provided via automated quiz results, instructor comments on assignments, and AI tutor responses to questions, ensuring learners receive timely guidance.'
      ],
      support: [
        'AI Voice Tutor: Available through the Grok iOS and Android apps, the AI tutor provides instant, voice-based responses to learner questions, offering clarifications and personalized advice.',
        'Discussion Forums: Online forums where learners can post questions, share Community Scan insights, discuss business ideas, and receive peer feedback.',
        'Email Helpdesk: A dedicated support email for technical issues or course-related inquiries, with responses within 24–48 hours.',
        'Live Q&A Sessions: Weekly live sessions (via Zoom or the course platform) with instructors to address common challenges and discuss real-world applications.',
        'Community Engagement: Learners can join group projects (e.g., collaborative business pitches) and participate in forum challenges to network with peers globally.',
        'Instructor Office Hours: Scheduled virtual office hours for one-on-one guidance, bookable through the course platform. The AI voice tutor ensures 24/7 support, making it easy for learners in different time zones to get help whenever needed. The combination of forums and live sessions fosters a vibrant online community for collaboration and idea-sharing.'
      ]
    },
    'podcast-management': {
      description: "This course equips learners with the skills to manage and grow professional podcasts—from pre-production to publishing and promotion. Students will learn technical, strategic, and creative elements of podcast management, including content planning, audio editing, guest coordination, distribution, marketing, and monetization.",
      objectives: [
        'Plan and Develop Podcast Content - Identify podcast topics and target audiences, Create structured episode outlines and scripts, Develop compelling storytelling and audio narratives',
        'Manage Pre-Production and Guest Coordination - Organize pre-production meetings and logistics, Source, brief, and coordinate guests for interviews, Prepare recording schedules and scripts to ensure smooth sessions',
        'Record and Edit High-Quality Audio - Select and use appropriate podcasting equipment and software, Apply best practices for recording clean audio, both in-person and remotely, Edit audio files for clarity, pacing, and engagement using industry-standard tools',
        'Distribute and Publish Podcasts - Choose and use podcast hosting platforms, Format and export episodes for various podcast directories (Apple Podcasts, Spotify, etc.), Write effective show notes and episode descriptions to attract listeners',
        'Promote and Grow Podcast Audiences - Develop and execute podcast marketing strategies, Create promotional materials such as trailers, teasers, and social media posts, Engage with listeners and build a community around the podcast',
        'Monetize Podcasts - Explore different monetization methods, including sponsorships, advertising, and listener support, Develop strategies for partnerships, collaborations, and brand building, Track analytics to measure growth and optimize monetization efforts',
        'Apply Strategic and Creative Thinking - Balance technical skills with creative vision to produce engaging content, Adapt podcast strategies to evolving audience needs and industry trends'
      ],
      targetAudience: [
        'Aspiring podcast managers and producers',
        'Virtual assistants seeking to specialize in podcasting',
        'Content creators, influencers, and entrepreneurs',
        'Marketing professionals expanding into audio content'
      ]
    },
    'b8c7d6e5-f4a3-9281-b0c9-d8e7f6a5b4c3': {
      overview: "This online training course provides comprehensive education for aspiring diesel mechanics, focusing on the skills and knowledge necessary to maintain, diagnose, and repair diesel engines in a variety of applications. Through a combination of video tutorials, interactive modules, quizzes, and assignments, participants will gain the practical and theoretical expertise needed for a successful career in the diesel mechanic field.",
      objectives: [
        'Understand the principles of diesel engine operation, including fuel systems, emissions control, and lubrication systems',
        'Learn to inspect, diagnose, and repair common diesel engine issues using professional tools and diagnostic equipment',
        'Develop the ability to maintain and service key components such as fuel injectors, turbochargers, and cooling systems',
        'Familiarize with modern electronic diagnostic systems and software',
        'Gain knowledge of industry standards, safety protocols, and environmental considerations'
      ],
      targetAudience: [
        'Aspiring diesel mechanics with little to no experience',
        'Automotive technicians transitioning into diesel engine repair',
        'Current professionals seeking to deepen their knowledge or refresh their skills',
        'Fleet maintenance personnel'
      ],
      prerequisites: [
        'Basic mechanical aptitude',
        'Familiarity with hand tools and standard shop equipment',
        'A desire to learn and a commitment to completing the coursework'
      ]
    },
    'a7b6c5d4-e3f2-8391-a2b3-c4d5e6f7a8b9': {
      description: "This comprehensive training course is designed to provide aspiring motor mechanics with a solid foundation in petrol engine technology, maintenance, and repair. Through a mix of theoretical instruction, practical demonstrations, and hands-on experience, participants will gain the skills necessary to service and troubleshoot petrol engines confidently.",
      objectives: [
        'Understand the operating principles of petrol engines and their major components',
        'Perform routine maintenance and inspections to ensure engine reliability and performance',
        'Diagnose common faults and implement appropriate repair techniques',
        'Use specialized tools and equipment to perform advanced engine repairs',
        'Interpret technical diagrams and service manuals for accurate troubleshooting'
      ],
      targetAudience: [
        'Aspiring motor mechanics with little or no prior experience',
        'Existing mechanics seeking to specialize in petrol engines',
        'Automotive enthusiasts looking to expand their technical knowledge'
      ]
    },
    'computer-repairs': {
      overview: "This course provides learners with essential knowledge and practical skills in computer and laptop repair, covering both hardware and software troubleshooting. Students will learn to identify key components, diagnose common issues, perform disassembly and reassembly, carry out hardware upgrades, install operating systems, and optimize system performance through virus removal and error correction. Designed to prepare learners for real-world repair challenges, the course also emphasizes delivering excellent customer service and hands-on experience to build confidence and technical competence.",
      objectives: [
        'Equip learners with foundational and advanced knowledge in computer and laptop repair',
        'Enable identification and troubleshooting of hardware and software issues',
        'Develop hands-on repair skills including disassembly, part replacement, and software recovery',
        'Prepare learners for real-world repair scenarios and customer service excellence'
      ],
      learningOutcomes: [
        'Identify and describe the function of key hardware components',
        'Diagnose and fix common computer and laptop issues',
        'Disassemble and reassemble laptops and desktops',
        'Perform hardware upgrades and OS installations',
        'Troubleshoot power, display, and system errors',
        'Implement virus removal and system optimization'
      ]
    },
    'cellphone-repairs-course': {
      overview: "This course provides a step-by-step guide to diagnosing, repairing, and maintaining modern smartphones. Participants will learn about hardware components, common issues, troubleshooting techniques, and preventive maintenance practices. By the end of the program, learners will have the skills and confidence to repair various phone models and keep them running smoothly.",
      objectives: [
        'Equip learners with foundational knowledge of modern smartphone hardware components and their functions',
        'Teach effective diagnostic techniques to identify common smartphone issues',
        'Develop hands-on skills for repairing and replacing smartphone parts safely and accurately',
        'Instruct troubleshooting methods for software and hardware problems',
        'Introduce preventive maintenance practices to extend smartphone lifespan and performance',
        'Build confidence in repairing a variety of phone models through practical exercises',
        'Prepare participants to offer professional smartphone repair services, whether as technicians, hobbyists, or small business owners'
      ],
      targetAudience: [
        'Aspiring cell phone repair technicians',
        'Hobbyists and DIY enthusiasts',
        'Small business owners looking to offer phone repair services'
      ],
      prerequisites: [
        'Basic understanding of electronic devices',
        'Familiarity with simple hand tools',
        'Willingness to learn through hands-on practice'
      ]
    },
    'hair-dressing-course': {
      overview: "This training course is designed to provide in-depth knowledge and hands-on skills for professional hairdressing. Participants will learn various hairstyling techniques, hair care principles, and client management strategies to excel in the hairdressing industry.",
      objectives: [
        'Provide comprehensive knowledge of hairdressing techniques and hair care principles',
        'Develop practical skills in hairstyling, cutting, coloring, and treatment methods',
        'Equip learners with client consultation and management strategies to deliver excellent service',
        'Prepare participants for professional standards and safety practices in the hairdressing industry',
        'Foster creativity and confidence to excel as a hairdressing professional'
      ],
      targetAudience: [
        'Aspiring hairdressers seeking professional training',
        'Beauty salon assistants and trainees wanting to upgrade their skills',
        'Individuals interested in starting a career in hairdressing or cosmetology',
        'Salon owners and small business entrepreneurs looking to enhance service quality'
      ],
      learningOutcomes: [
        'Demonstrate a variety of hairstyling techniques including cutting, coloring, and finishing',
        'Apply hair care principles to maintain and improve hair health',
        'Conduct effective client consultations to understand needs and recommend suitable styles',
        'Implement industry-standard hygiene, safety, and sanitation practices',
        'Manage client relationships professionally and deliver outstanding customer service',
        'Exhibit creativity and adaptability in styling to meet diverse client preferences'
      ]
    },
    'nail-technician-course': {
      overview: "This comprehensive course provides students with foundational knowledge of nail anatomy and health, combined with practical training in manicure, pedicure, nail enhancements, and creative nail art techniques. Emphasizing client consultation, safety, sanitation, and professionalism, the program also equips learners with essential marketing and business skills to build and sustain a successful career as a nail technician.",
      objectives: [
        'Provide foundational knowledge of nail anatomy and common nail health issues',
        'Teach proper and safe techniques for manicures, pedicures, nail enhancements, and nail art',
        'Develop skills in client consultation, hygiene, sanitation, and salon professionalism',
        'Equip students with marketing and business strategies tailored to the nail technician industry',
        'Prepare learners to deliver high-quality nail services while managing a successful salon or freelance career'
      ],
      learningOutcomes: [
        'Identify and explain the structure and health of nails',
        'Perform professional manicures and pedicures using industry-standard techniques',
        'Apply various nail enhancement methods and create artistic nail designs',
        'Conduct thorough client consultations and maintain strict safety and sanitation standards',
        'Demonstrate professionalism in salon environments and client interactions',
        'Develop and implement effective marketing and business plans to grow their nail technician career'
      ],
      targetAudience: [
        'Aspiring nail technicians seeking professional training',
        'Beauty industry professionals looking to expand their skillset',
        'Salon owners and employees aiming to improve service quality',
        'Entrepreneurs interested in starting or growing a nail care business',
        'Hobbyists passionate about nail art and nail care techniques'
      ]
    },
    'plumbing-course': {
      overview: "This comprehensive plumbing course provides participants with foundational knowledge and practical skills essential for working with modern plumbing systems. Covering everything from basic concepts to advanced installation and repair techniques, the course emphasizes safety, blueprint reading, and troubleshooting. Learners will gain hands-on experience in installing, maintaining, and repairing water supply, drainage, and venting systems, preparing them for real-world plumbing challenges.",
      objectives: [
        'Introduce the fundamentals of plumbing systems and their various applications',
        'Equip learners with the ability to identify and use essential plumbing tools and materials safely and effectively',
        'Teach participants to interpret plumbing blueprints and pipe layouts accurately',
        'Develop practical skills for installing, repairing, and maintaining plumbing fixtures and piping systems',
        'Ensure understanding and application of health and safety regulations specific to plumbing',
        'Train learners to troubleshoot and resolve common plumbing issues efficiently',
        'Promote best practices in water supply, drainage, and venting system management'
      ],
      learningOutcomes: [
        'Understand the core principles and components of plumbing systems',
        'Select and operate plumbing tools and materials with confidence',
        'Follow health and safety standards relevant to plumbing tasks',
        'Read and interpret plumbing blueprints and layouts',
        'Perform installation, maintenance, and repair of plumbing fixtures and piping',
        'Apply best practices in managing water supply, drainage, and venting systems',
        'Diagnose and fix common plumbing problems effectively'
      ],
      targetAudience: [
        'Aspiring plumbers seeking foundational and practical training',
        'Construction and maintenance workers aiming to expand their skillset',
        'Homeowners and DIY enthusiasts interested in basic plumbing knowledge',
        'Facility managers responsible for building maintenance',
        'Technical students and apprentices preparing for careers in plumbing and related trades'
      ]
    },
    'tiling-course': {
      overview: "This online tiling course is designed to equip participants with the essential skills and knowledge required to excel in professional tiling projects. Covering foundational concepts through to advanced techniques, the course addresses material selection, surface preparation, installation methods, and troubleshooting common issues. Learners will benefit from a blend of instructional videos, step-by-step guides, interactive assessments, and practical assignments that simulate real-world tiling scenarios, preparing them to confidently undertake a wide range of wall and floor tiling tasks.",
      objectives: [
        'Introduce learners to the tools, materials, and adhesives used in tiling projects',
        'Teach proper surface preparation techniques to ensure durable and quality tile installations',
        'Develop skills in various tile cutting and fixing methods, including working around obstacles like windows and fixtures',
        'Enable learners to plan and set out tiling work according to industry standards and best practices',
        'Provide knowledge on grouting, sealing, and finishing techniques for professional results',
        'Foster understanding of health and safety practices relevant to tiling work',
        'Equip learners to troubleshoot common tiling problems and apply effective solutions'
      ],
      learningOutcomes: [
        'Identify and use appropriate tiling tools and materials safely and effectively',
        'Prepare different types of surfaces for tiling, ensuring proper adhesion and longevity',
        'Accurately measure, cut, and lay tiles on walls and floors, including complex patterns and around obstacles',
        'Apply grouting and sealing techniques to complete tiling projects professionally',
        'Understand and implement health and safety protocols on tiling sites',
        'Read and interpret basic tiling plans and layouts',
        'Troubleshoot and resolve common issues such as uneven surfaces, misaligned tiles, and adhesive failures'
      ],
      targetAudience: [
        'Beginners and DIY enthusiasts interested in learning tiling skills',
        'Aspiring professional tilers seeking foundational and advanced training',
        'Construction workers and tradespeople looking to expand their skillset',
        'Small business owners and contractors involved in home renovation and finishing',
        'Individuals preparing for certification or employment in the tiling industry'
      ]
    },
    'roofing-course': {
      overview: "This professional roofing training course offers a thorough and practical education on all key aspects of roofing, from foundational principles to advanced installation and maintenance techniques. Participants will learn about roofing systems, tools, safety regulations, blueprint reading, material estimation, and sustainable roofing practices. The course combines theoretical knowledge with hands-on modules covering steep and low slope roofing, metal flashing, and roof inspection. Designed to prepare learners for careers in roofing installation, inspection, and certification, this program also emphasizes workplace safety and compliance with industry standards.",
      objectives: [
        'Provide comprehensive knowledge of roofing systems, materials, and construction methods',
        'Develop proficiency in using roofing tools and equipment safely and effectively',
        'Teach installation techniques for common roofing types including asphalt shingles, metal roofs, and built-up roofing',
        'Instruct learners on roof maintenance, repair, and troubleshooting best practices',
        'Enable participants to read and interpret roofing blueprints and technical drawings',
        'Familiarize students with roofing safety standards, fall protection, and regulatory compliance',
        'Introduce sustainable roofing concepts and energy-efficient roofing solutions',
        'Prepare learners for professional roofing roles, including roof inspection and certification processes'
      ],
      learningOutcomes: [
        'Identify and describe various roofing materials, systems, and their appropriate applications',
        'Demonstrate safe and effective use of roofing tools and equipment',
        'Install, maintain, and repair different types of roofing systems according to industry standards',
        'Read and interpret roofing plans, blueprints, and technical specifications',
        'Apply workplace safety principles, including fall protection and hazard management',
        'Conduct roof inspections and prepare detailed evaluation reports',
        'Calculate material requirements and estimate project costs accurately',
        'Understand and apply sustainable roofing practices to reduce environmental impact'
      ],
      targetAudience: [
        'Aspiring roofing professionals and apprentices seeking comprehensive training',
        'Construction workers and tradespeople looking to specialize in roofing',
        'Roof inspectors and building inspectors requiring technical roofing knowledge',
        'Small business owners and contractors in the roofing and construction industry',
        'Facility managers and maintenance personnel responsible for roof upkeep',
        'Individuals preparing for certification as roof erectors or roof inspectors'
      ]
    }
  };

  const data = courseData[courseId] || {};

  // Refs for scrollspy navigation
  const sectionRefs = SECTION_ORDER.reduce((acc, key) => {
    acc[key] = useRef<HTMLDivElement>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement>>);

  // Scroll to section
  const handleNavClick = (key: string) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // For custom section rendering
  const renderSectionContent = (key: string) => {
    if (key === 'learningObjectives' && data.learningObjectives) {
      return <LearningObjectives objectives={data.learningObjectives} />;
    }
    if (key === 'courseCurriculum' && data.courseCurriculum) {
      // Pass modules, totalLessons, totalDuration from data.courseCurriculum
      return (
        <CourseCurriculum
          modules={data.courseCurriculum.modules}
          totalLessons={data.courseCurriculum.totalLessons}
          totalDuration={data.courseCurriculum.totalDuration}
        />
      );
    }
    // Default rendering for other sections
    if (Array.isArray(data[key])) {
  return (
            <div className="space-y-3">
          {data[key].map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-3 animate-fade-in-card" style={{ animationDelay: `${i * 60 + 200}ms` }}>
              <CheckCircle className="h-5 w-5 text-gradient animate-pulse-glow mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
      );
    } else {
      return <p className="text-gray-700 text-lg leading-relaxed animate-fade-in-card">{data[key]}</p>;
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row gap-8 animate-fade-in">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl animate-pulse-glow delay-700" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-200/10 via-pink-200/10 to-purple-200/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-gradient-x" />
            </div>
      {/* Sticky Sidebar Navigation */}
      <nav className="hidden lg:flex flex-col gap-3 min-w-[220px] sticky top-32 h-fit bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-100 animate-slide-in-left">
        <span className="uppercase text-xs font-bold text-gray-500 mb-2 tracking-widest">Quick Navigation</span>
        {SECTION_ORDER.filter(key => data[key]).map((key) => (
          <button
            key={key}
            onClick={() => handleNavClick(key)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-colors"
          >
            {SECTION_ICONS[key]}
            {SECTION_LABELS[key]}
          </button>
        ))}
      </nav>
      {/* Main Content */}
      <div className="flex-1 space-y-8 w-full">
        {SECTION_ORDER.map((key, idx) => {
          if (!data[key]) return null;
          return (
            <section
              key={key}
              ref={sectionRefs[key]}
              className="relative group animate-fade-in-card"
              style={{ animationDelay: `${idx * 100 + 200}ms` }}
            >
              <Card className="glassmorphism-card border-0 shadow-xl rounded-3xl overflow-hidden animate-fade-in-card w-full">
                <CardHeader className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-2 px-4 flex flex-row items-center gap-3 rounded-t-3xl border-b-0">
                  <span className="text-base md:text-lg font-extrabold gradient-text drop-shadow-lg flex items-center gap-2">
                    {SECTION_ICONS[key]}
                    {SECTION_LABELS[key]}
                  </span>
          </CardHeader>
                <CardContent className="py-2 px-4 bg-white/80 dark:bg-gray-900/80 w-full">
                  {key === 'overview' ? (
                    <div className="text-[10px] text-gray-700 leading-relaxed" style={{ fontSize: '6px' }}>
                      {renderSectionContent(key)}
                    </div>
                  ) : (
                    <div className="text-[10px] text-gray-700 leading-relaxed">
                  {renderSectionContent(key)}
                    </div>
                  )}
          </CardContent>
        </Card>
            </section>
          );
        })}
                </div>
      {/* Animations */}
      <style>{`
        .glassmorphism-card {
          background: rgba(255,255,255,0.7);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
          backdrop-filter: blur(12px);
          border-radius: 2rem;
        }
        .gradient-text {
          background: linear-gradient(90deg, #2563eb 0%, #a21caf 50%, #db2777 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-fade-in-card {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          animation: fadeInCard 0.7s cubic-bezier(.4,2,.3,1) forwards;
        }
        @keyframes fadeInCard {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
          0% { opacity: 0.5; filter: blur(32px); }
          100% { opacity: 0.9; filter: blur(48px); }
        }
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

export default CourseOverview;
