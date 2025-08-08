import { Lesson } from '@/types/course';

interface VideoSection {
  id: string;
  title: string;
  videoUrl: string;
  keyFeatures: string;
  description: string;
}

interface LessonConfig {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'audio' | 'text' | 'interactive';
  sections: VideoSection[];
}

// Helper: Convert YouTube URL to embed
const getEmbedUrl = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const lessonConfig: LessonConfig = {
  id: 4,
  title: 'Podcast Industry Overview and Career Opportunities',
  duration: '35 minutes',
  type: 'video',
  sections: [
    {
      id: 'industry-size',
      title: 'Industry Size and Growth',
      videoUrl: '',
      keyFeatures: 'Market Size, Growth Trends, Revenue Streams',
      description: `The podcast industry has experienced explosive growth, with over 5 million shows and 460 million listeners globally as of 2024. The market continues to expand rapidly, driven by increasing smartphone penetration, improved audio quality, and growing advertiser interest.

Revenue streams include advertising, sponsorships, paid subscriptions, crowdfunding, and live events. The industry is projected to continue growing as more listeners discover podcasts and advertisers recognize their effectiveness for reaching engaged audiences.`
    },
    {
      id: 'platform-landscape',
      title: 'Platform Landscape',
      videoUrl: '',
      keyFeatures: 'Spotify, Apple Podcasts, Google Podcasts, Amazon',
      description: `Major platforms dominate the podcast landscape, with Spotify, Apple Podcasts, Google Podcasts, and Amazon leading the market. Each platform offers unique features, audience demographics, and monetization opportunities for creators.

Spotify has invested heavily in exclusive content and podcast acquisitions. Apple Podcasts remains a key platform for discovery and distribution. Google Podcasts integrates with Android devices and Google services. Amazon Music and Audible are expanding their podcast offerings. Understanding platform differences helps creators optimize their distribution strategy.`
    },
    {
      id: 'monetization-models',
      title: 'Monetization Models',
      videoUrl: '',
      keyFeatures: 'Advertising, Sponsorships, Subscriptions, Crowdfunding',
      description: `Podcast monetization has evolved beyond traditional advertising to include diverse revenue streams. Advertising remains the primary model, with dynamic ad insertion and programmatic buying becoming more sophisticated.

Sponsorships offer higher revenue per episode but require direct relationships with brands. Paid subscriptions through platforms like Patreon provide recurring revenue from dedicated fans. Crowdfunding campaigns can fund specific projects or ongoing production costs. Live events and merchandise offer additional revenue opportunities.`
    },
    {
      id: 'career-opportunities',
      title: 'Career Opportunities in Podcasting',
      videoUrl: '',
      keyFeatures: 'Host, Producer, Editor, Marketing, Business Development',
      description: `The podcast industry offers diverse career opportunities beyond hosting. Producers manage content creation, guest coordination, and production workflows. Audio engineers and editors ensure high-quality sound and engaging content.

Marketing professionals help grow audiences and develop brand partnerships. Business development roles focus on monetization and strategic partnerships. Content strategists plan episode themes and series development. The industry also needs professionals in analytics, distribution, and platform management.`
    },
    {
      id: 'skills-required',
      title: 'Skills Required for Success',
      videoUrl: '',
      keyFeatures: 'Technical Skills, Communication, Business Acumen, Creativity',
      description: `Success in podcasting requires a combination of technical, creative, and business skills. Technical skills include audio recording, editing, and distribution. Communication skills are essential for hosting, interviewing, and audience engagement.

Business skills include marketing, monetization, and strategic planning. Creativity drives content development and storytelling. Adaptability is crucial as the industry evolves rapidly. Networking and relationship-building skills help with guest coordination and industry connections.`
    },
    {
      id: 'industry-challenges',
      title: 'Industry Challenges and Opportunities',
      videoUrl: '',
      keyFeatures: 'Discovery, Competition, Monetization, Technology',
      description: `The podcast industry faces challenges including discovery (finding new shows), competition (over 5 million shows), and monetization for smaller creators. However, these challenges also present opportunities for innovation and differentiation.

Technology continues to evolve, offering new tools for creation, distribution, and monetization. AI and machine learning are improving discovery and personalization. Video podcasts are expanding reach and engagement. Global markets offer growth opportunities as podcasting expands internationally.`
    },
    {
      id: 'future-trends',
      title: 'Future Trends and Predictions',
      videoUrl: '',
      keyFeatures: 'AI Integration, Video Podcasts, Global Expansion, Interactive Content',
      description: `Future trends include increased AI integration for content creation, editing, and personalization. Video podcasts will continue growing, offering new engagement opportunities and revenue streams. Global expansion will bring new markets and audiences.

Interactive content, including choose-your-own-adventure formats and live audience participation, will become more common. Blockchain and Web3 technologies may enable new monetization models. Virtual and augmented reality could create immersive podcast experiences.`
    },
    {
      id: 'getting-started',
      title: 'Getting Started in the Industry',
      videoUrl: '',
      keyFeatures: 'Education, Networking, Portfolio Building, Entry Points',
      description: `Getting started in podcasting requires education, networking, and portfolio building. Take courses in audio production, content creation, and business development. Attend industry conferences and join online communities to build connections.

Create a portfolio of work, including sample episodes, scripts, and marketing materials. Consider internships or entry-level positions at podcast networks or production companies. Start your own podcast to gain hands-on experience and demonstrate your skills to potential employers or clients.`
    },
    {
      id: 'professional-development',
      title: 'Professional Development and Growth',
      videoUrl: '',
      keyFeatures: 'Continuous Learning, Skill Development, Industry Trends',
      description: `Professional development in podcasting requires continuous learning and skill development. Stay current with industry trends, technology changes, and best practices. Attend workshops, conferences, and training programs.

Develop specialized skills in areas like audio engineering, content strategy, or business development. Build a personal brand and online presence to showcase your expertise. Seek mentorship from experienced professionals and contribute to industry discussions and publications.`
    },
    {
      id: 'summary',
      title: 'Summary',
      videoUrl: '',
      keyFeatures: 'Industry Overview, Career Paths, Future Opportunities',
      description: `The podcast industry offers exciting opportunities for creators, professionals, and entrepreneurs. Understanding the industry landscape, monetization models, and career paths helps you make informed decisions about your podcasting journey.

Whether you're interested in hosting, producing, marketing, or business development, the podcast industry provides diverse career opportunities. Stay informed about trends, develop relevant skills, and build your network to succeed in this dynamic and growing field.`
    }
  ]
};

const generateLesson = (config: LessonConfig): Lesson => {
  let textContent = `# 🎙️ Module 1: Introduction to Podcasting

## 🌐 Podcast Industry Overview and Career Opportunities

`;

  config.sections.forEach((section, idx) => {
    textContent += `---

## ${idx + 1}. <span style="color:#5a67d8;font-weight:700">${section.title}</span>

${section.videoUrl ? `
<div style="display:flex;justify-content:center;margin:2rem 0;">
  <iframe width="900" height="506" src="${getEmbedUrl(section.videoUrl)}" frameborder="0" allowfullscreen style="border-radius:18px;box-shadow:0 8px 32px rgba(90,103,216,0.18);"></iframe>
</div>
` : ''}

<div style="background:linear-gradient(90deg,#e0e7ff 0%,#f0e6ff 100%);padding:1rem 2rem;border-radius:12px;margin-bottom:1.5rem;border-left:5px solid #667eea;">
  <b>🔑 Key Features:</b> <span style="color:#5a67d8">${section.keyFeatures}</span>
</div>

<div style="font-size:1.1rem;line-height:1.8;color:#2d3748;">
  ${section.description}
</div>

`;
  });

  textContent += `
---

<div style="text-align:center;margin:3rem 0 1rem 0;">
  <span style="font-size:2rem;font-weight:700;color:#764ba2;">🚀 Ready for the Next Level?</span>
  <p style="font-size:1.1rem;color:#4a5568;">You've mastered the podcast industry overview! Continue your journey to become a professional podcast producer.</p>
</div>
`;

  return {
    id: config.id,
    title: config.title,
    duration: config.duration,
    type: config.type,
    content: {
      videoUrl: config.sections[0]?.videoUrl || '',
      textContent
    }
  };
};

export const lesson4IndustryOverview: Lesson = generateLesson(lessonConfig);
export { generateLesson, type LessonConfig, type VideoSection };
export default lesson4IndustryOverview; 
