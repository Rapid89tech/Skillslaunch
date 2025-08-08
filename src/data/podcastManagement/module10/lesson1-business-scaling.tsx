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
  id: 34,
  title: 'Business Scaling Strategies',
  duration: '75 min',
  type: 'video',
  sections: [
    {
      id: 'scaling-fundamentals',
      title: 'Business Scaling Fundamentals',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Growth Strategy',
      description: `**Business scaling** involves growing your podcast business sustainably while maintaining quality and profitability.

**Scaling Benefits:**
- **Increased revenue**: Higher income through expanded operations
- **Market expansion**: Reach new markets and audiences
- **Brand recognition**: Build stronger brand recognition
- **Resource efficiency**: Better utilization of resources
- **Competitive advantage**: Stay ahead of competition

**Scaling Challenges:**
- **Quality maintenance**: Maintaining quality while growing
- **Resource management**: Managing increased resource needs
- **Team coordination**: Coordinating larger teams
- **Process complexity**: Managing more complex processes
- **Financial management**: Managing increased financial complexity

**Scaling Principles:**
- **Sustainable growth**: Focus on sustainable, manageable growth
- **Quality first**: Maintain quality standards during growth
- **Systematic approach**: Use systematic scaling approaches
- **Resource planning**: Plan resources for growth
- **Risk management**: Manage risks associated with scaling

**Scaling readiness**: Assess current business capacity and identify scaling opportunities.

Strategic scaling drives long-term business success.`
    },
    {
      id: 'client-management',
      title: 'Client Relationship Management',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Client Success',
      description: `**Client relationship management** builds and maintains strong relationships with podcast clients and partners.

**Client Management Strategies:**

**Communication Excellence:**
- **Regular updates**: Provide regular project updates
- **Clear expectations**: Set and manage clear expectations
- **Responsive communication**: Respond quickly to client needs
- **Professional presentation**: Maintain professional communication
- **Documentation**: Document all client interactions

**Service Delivery:**
- **Quality assurance**: Ensure high-quality service delivery
- **Timeline management**: Meet or exceed project timelines
- **Problem resolution**: Quickly resolve any issues
- **Value addition**: Provide additional value to clients
- **Continuous improvement**: Continuously improve services

**Relationship Building:**
- **Trust building**: Build trust through consistent delivery
- **Understanding needs**: Deeply understand client needs
- **Partnership approach**: Treat clients as partners
- **Long-term thinking**: Focus on long-term relationships
- **Referral generation**: Generate referrals from satisfied clients

**Client management excellence drives business growth and success.`
    },
    {
      id: 'business-development',
      title: 'Business Development and Growth',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Growth Planning',
      description: `**Business development** identifies and pursues new opportunities for podcast business growth.

**Development Strategies:**

**Market Expansion:**
- **New markets**: Identify and enter new markets
- **Audience expansion**: Expand to new audience segments
- **Geographic growth**: Expand to new geographic areas
- **Platform expansion**: Expand to new platforms
- **Service diversification**: Diversify service offerings

**Partnership Development:**
- **Strategic partnerships**: Develop strategic business partnerships
- **Industry networking**: Network within the podcast industry
- **Collaboration opportunities**: Identify collaboration opportunities
- **Joint ventures**: Explore joint venture opportunities
- **Alliance building**: Build industry alliances

**Revenue Diversification:**
- **Multiple revenue streams**: Develop multiple revenue streams
- **Service expansion**: Expand service offerings
- **Product development**: Develop new products and services
- **Licensing opportunities**: Explore licensing opportunities
- **Consulting services**: Offer consulting and advisory services

**Strategic business development drives sustainable growth.`
    }
  ]
};

const generateLesson = (config: LessonConfig): Lesson => {
  return {
    id: config.id,
    title: config.title,
    duration: config.duration,
    type: config.type,
    content: {
      videoUrl: config.sections[0]?.videoUrl || '',
      textContent: config.sections.map(section => `
## ${section.title}

**YOUTUBE LINK**: ${section.videoUrl}

**Key Features**: ${section.keyFeatures}

${section.description}

<iframe 
  width="100%" 
  height="315" 
  src="${getEmbedUrl(section.videoUrl)}" 
  title="${section.title}"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
      `).join('\n\n')
    }
  };
};

export const lesson1BusinessScaling = generateLesson(lessonConfig); 
