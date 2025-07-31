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
  id: 3,
  title: 'Podcast Types and Content Categories',
  duration: '25 minutes',
  type: 'video',
  sections: [
    {
      id: 'content-categories',
      title: 'Content Categories Overview',
      videoUrl: '',
      keyFeatures: 'True Crime, Education, Business, Entertainment, News',
      description: `Podcasts span diverse content categories, each with unique characteristics and audience expectations. Understanding these categories helps creators position their content effectively and connect with the right audience.

Major categories include True Crime (investigative storytelling), Education (learning and knowledge sharing), Business (entrepreneurship and professional development), Entertainment (comedy and pop culture), News (current events and analysis), and many more specialized niches.`
    },
    {
      id: 'true-crime',
      title: 'True Crime Podcasts',
      videoUrl: '',
      keyFeatures: 'Investigative Storytelling, Mystery, Human Psychology',
      description: `True crime podcasts explore real criminal cases, mysteries, and human psychology through investigative storytelling. This category has exploded in popularity, with shows like Serial, Crime Junkie, and My Favorite Murder leading the way.

True crime podcasts excel at creating suspense, building narrative tension, and exploring the darker aspects of human nature. They require extensive research, careful storytelling, and sensitivity to victims and their families. Successful true crime podcasts balance entertainment with respect for the serious nature of their subject matter.`
    },
    {
      id: 'education',
      title: 'Educational Podcasts',
      videoUrl: '',
      keyFeatures: 'Learning, Knowledge Sharing, Skill Development',
      description: `Educational podcasts focus on teaching, learning, and knowledge sharing across various subjects. This category includes everything from academic lectures to practical skill development and general knowledge exploration.

Educational podcasts like Stuff You Should Know, TED Talks Daily, and The Tim Ferriss Show make complex topics accessible and engaging. They require clear communication, well-structured content, and the ability to break down complex concepts into digestible segments.`
    },
    {
      id: 'business',
      title: 'Business and Entrepreneurship',
      videoUrl: '',
      keyFeatures: 'Professional Development, Entrepreneurship, Industry Insights',
      description: `Business podcasts cover entrepreneurship, professional development, industry insights, and career advancement. This category serves professionals at all levels, from aspiring entrepreneurs to seasoned executives.

Business podcasts like How I Built This, Masters of Scale, and The Tim Ferriss Show offer valuable insights into business strategies, leadership, and professional growth. They require industry expertise, practical advice, and the ability to connect with business-minded audiences.`
    },
    {
      id: 'entertainment',
      title: 'Entertainment and Comedy',
      videoUrl: '',
      keyFeatures: 'Comedy, Pop Culture, Celebrity Interviews',
      description: `Entertainment podcasts focus on comedy, pop culture, celebrity interviews, and lighthearted content designed to entertain and amuse listeners. This category includes everything from stand-up comedy to celebrity gossip and pop culture analysis.

Entertainment podcasts like The Joe Rogan Experience, Conan O'Brien Needs a Friend, and Armchair Expert provide entertainment value while often incorporating interviews and discussions. They require engaging personalities, humor, and the ability to create enjoyable listening experiences.`
    },
    {
      id: 'news-politics',
      title: 'News and Politics',
      videoUrl: '',
      keyFeatures: 'Current Events, Political Analysis, Investigative Journalism',
      description: `News and politics podcasts cover current events, political analysis, and investigative journalism. This category serves audiences seeking in-depth analysis and multiple perspectives on important issues.

News podcasts like The Daily, Pod Save America, and The Ben Shapiro Show provide daily or weekly analysis of current events. They require journalistic integrity, balanced reporting, and the ability to present complex issues clearly and engagingly.`
    },
    {
      id: 'health-wellness',
      title: 'Health and Wellness',
      videoUrl: '',
      keyFeatures: 'Mental Health, Physical Health, Lifestyle, Self-Improvement',
      description: `Health and wellness podcasts focus on mental health, physical health, lifestyle, and self-improvement. This category has grown significantly, especially during the COVID-19 pandemic, as people seek guidance on health and well-being.

Health podcasts like The Happiness Lab, On Being, and The Mindful Kind address topics from mental health to physical fitness and spiritual well-being. They require expertise in health-related topics, sensitivity to mental health issues, and the ability to provide practical, actionable advice.`
    },
    {
      id: 'technology',
      title: 'Technology and Innovation',
      videoUrl: '',
      keyFeatures: 'Tech News, Innovation, Digital Trends, Product Reviews',
      description: `Technology podcasts cover tech news, innovation, digital trends, and product reviews. This category serves tech enthusiasts, professionals, and anyone interested in the latest developments in technology and innovation.

Tech podcasts like This Week in Tech, Recode Decode, and The Vergecast provide insights into the latest technology trends, product launches, and industry developments. They require technical knowledge, the ability to explain complex concepts, and staying current with rapidly evolving technology.`
    },
    {
      id: 'niche-categories',
      title: 'Niche and Specialized Categories',
      videoUrl: '',
      keyFeatures: 'Specialized Interests, Community Building, Deep Expertise',
      description: `Niche podcasts focus on specialized interests, hobbies, and communities. These podcasts may have smaller audiences but often have highly engaged listeners who are passionate about the specific topic.

Niche categories include everything from knitting and gardening to specific sports, hobbies, and professional interests. These podcasts require deep expertise in the subject matter and the ability to build community around shared interests.`
    },
    {
      id: 'summary',
      title: 'Summary',
      videoUrl: '',
      keyFeatures: 'Category Selection, Audience Targeting, Content Strategy',
      description: `Understanding podcast categories helps creators position their content effectively and connect with the right audience. Each category has unique characteristics, audience expectations, and content requirements that influence podcast strategy and success.

Choose your category based on your expertise, passion, and target audience. Consider how your content fits within existing categories or if you're creating something new. Your category choice will influence everything from content planning to marketing strategy and audience development.`
    }
  ]
};

const generateLesson = (config: LessonConfig): Lesson => {
  let textContent = `# 🎙️ Module 1: Introduction to Podcasting

## 📂 Podcast Types and Content Categories

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
  <p style="font-size:1.1rem;color:#4a5568;">You've mastered podcast types! Continue your journey to become a professional podcast producer.</p>
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

export const lesson3PodcastTypes: Lesson = generateLesson(lessonConfig);
export { generateLesson, type LessonConfig, type VideoSection };
export default lesson3PodcastTypes; 