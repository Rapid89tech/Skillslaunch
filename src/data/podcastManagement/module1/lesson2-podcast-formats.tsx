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
  id: 2,
  title: 'Understanding Podcast Formats and Types',
  duration: '30 minutes',
  type: 'video',
  sections: [
    {
      id: 'formats-overview',
      title: 'Podcast Formats Overview',
      videoUrl: 'https://youtu.be/uy9Sx-OwP6M',
      keyFeatures: 'Interview, Solo, Co-hosted, Panel, Narrative, Fiction',
      description: `The format of your podcast defines its structure, tone, and production needs. Understanding different formats helps you choose the right approach for your content and audience. Each format has unique characteristics that shape listener experience and production workflow.

Common formats include Interview (host interviews a guest each episode), Solo/Monologue (host speaks directly to the audience), Co-hosted (two or more hosts discussing topics together), Panel (group discussion with recurring or rotating guests), Narrative Nonfiction (scripted storytelling based on true events), and Fiction/Audio Drama (scripted fictional storytelling with sound effects and acting).`
    },
    {
      id: 'interview-format',
      title: 'Interview Format',
      videoUrl: '',
      keyFeatures: 'Guest Coordination, Expert Insights, Diverse Voices',
      description: `Interview format podcasts feature a host interviewing a guest each episode, making them ideal for experts, thought leaders, and diverse voices. This format requires strong guest coordination skills and the ability to conduct engaging conversations.

Interview podcasts excel at bringing expert insights to audiences, exposing your podcast to the guest's audience, offering new perspectives, and making your show more dynamic and engaging. Successful interview podcasts require research, preparation, and the ability to ask insightful questions that draw out valuable information from guests.`
    },
    {
      id: 'solo-format',
      title: 'Solo (Monologue) Format',
      videoUrl: '',
      keyFeatures: 'Personal Brand, Education, Coaching, Direct Communication',
      description: `Solo format podcasts feature a host speaking directly to the audience, making them perfect for personal branding, education, and coaching. This format reduces production complexity and enables consistent output while building strong listener connection.

Solo podcasts are ideal for hosts with strong speaking skills and clear content planning. They allow for deep dives into specific topics, personal storytelling, and direct communication with listeners. This format is particularly effective for building personal brands and establishing thought leadership in specific niches.`
    },
    {
      id: 'co-hosted-format',
      title: 'Co-hosted Format',
      videoUrl: '',
      keyFeatures: 'Multiple Hosts, Dynamic Discussions, Chemistry',
      description: `Co-hosted podcasts feature two or more hosts discussing topics together, creating dynamic discussions perfect for conversational shows and lifestyle content. This format requires strong chemistry between hosts and effective coordination.

Multiple hosts create varied perspectives and more engaging conversations. Co-hosted shows excel at building community and creating a conversational atmosphere that listeners can feel part of. The key to success is ensuring hosts have complementary personalities and skills that enhance rather than compete with each other.`
    },
    {
      id: 'panel-format',
      title: 'Panel Format',
      videoUrl: '',
      keyFeatures: 'Group Discussions, Debates, Roundtables, Multiple Perspectives',
      description: `Panel format podcasts feature group discussions with recurring or rotating guests, making them ideal for debates, roundtables, and exploring multiple perspectives on topics. This format requires careful coordination of multiple participants.

Panel podcasts offer varied insights and balanced perspectives on complex topics. They're particularly effective for industry discussions, current events analysis, and exploring controversial topics from multiple angles. Successful panel podcasts require strong moderation skills and the ability to manage group dynamics effectively.`
    },
    {
      id: 'narrative-format',
      title: 'Narrative Nonfiction Format',
      videoUrl: '',
      keyFeatures: 'Scripted Storytelling, Research, Documentary Style',
      description: `Narrative nonfiction podcasts feature scripted storytelling based on true events, making them perfect for journalism and documentary-style content. This format requires extensive research, strong writing skills, and careful sound design.

Narrative podcasts excel at immersive storytelling and can create powerful emotional connections with listeners. They're particularly effective for true crime, history, and investigative journalism. This format demands high production values and careful attention to pacing, structure, and audio quality to maintain listener engagement.`
    },
    {
      id: 'fiction-format',
      title: 'Fiction / Audio Drama Format',
      videoUrl: '',
      keyFeatures: 'Scripted Fiction, Sound Effects, Acting, Immersive Storytelling',
      description: `Fiction and audio drama podcasts feature scripted fictional storytelling with sound effects and acting, creating immersive experiences perfect for storytelling and entertainment. This format requires strong writing, acting, and sound design skills.

Audio dramas can create deeply immersive experiences that rival visual media. They're particularly effective for horror, science fiction, and dramatic storytelling. This format demands high production values, including professional voice acting, sound effects, and music to create compelling audio experiences.`
    },
    {
      id: 'hybrid-formats',
      title: 'Hybrid Formats',
      videoUrl: '',
      keyFeatures: 'Multiple Formats, Flexibility, Depth, Innovation',
      description: `Hybrid formats combine multiple podcast formats, such as interviews with commentary, offering flexibility and depth. This approach allows creators to experiment with different styles and create unique content that doesn't fit traditional categories.

Hybrid formats can include elements like interviews followed by solo analysis, narrative segments with guest commentary, or panel discussions with scripted introductions. This flexibility allows creators to tailor their format to specific content needs and audience preferences while maintaining consistency and engagement.`
    },
    {
      id: 'format-selection',
      title: 'Choosing Your Format',
      videoUrl: '',
      keyFeatures: 'Audience Preferences, Content Goals, Production Resources',
      description: `Choosing the right podcast format depends on your content goals, audience preferences, and available production resources. Consider factors like your expertise, available time, technical skills, and target audience when selecting a format.

The best format aligns with your strengths as a creator while meeting your audience's expectations. Consider starting with a simpler format and evolving as you gain experience and understand your audience better. Remember that your format choice will significantly impact your production workflow, technical requirements, and long-term sustainability.`
    },
    {
      id: 'summary',
      title: 'Summary',
      videoUrl: '',
      keyFeatures: 'Format Selection, Production Planning, Audience Alignment',
      description: `Understanding podcast formats is crucial for creating content that resonates with your target audience and aligns with your production capabilities. Each format offers unique opportunities and challenges that will shape your podcast's success.

Your format choice will influence every aspect of your podcast, from content planning to technical requirements. Choose wisely based on your goals, resources, and audience needs, and be prepared to adapt as your podcast grows and evolves.`
    }
  ]
};

const generateLesson = (config: LessonConfig): Lesson => {
  let textContent = `# 🎙️ Module 1: Introduction to Podcasting

## 🎭 Understanding Podcast Formats and Types

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
  <p style="font-size:1.1rem;color:#4a5568;">You've mastered podcast formats! Continue your journey to become a professional podcast producer.</p>
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

export const lesson2PodcastFormats: Lesson = generateLesson(lessonConfig);
export { generateLesson, type LessonConfig, type VideoSection };
export default lesson2PodcastFormats; 