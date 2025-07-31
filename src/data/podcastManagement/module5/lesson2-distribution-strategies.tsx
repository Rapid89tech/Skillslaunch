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
  id: 18,
  title: 'Distribution Strategies',
  duration: '90 min',
  type: 'video',
  sections: [
    {
      id: 'multi-platform-distribution',
      title: 'Multi-Platform Distribution',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Maximum Reach Strategy',
      description: `**Multi-platform distribution** ensures your podcast reaches the widest possible audience across all major listening platforms.

**Primary Platforms:**
- **Apple Podcasts**: Largest podcast audience, iOS ecosystem
- **Spotify**: Music integration, playlist features
- **Google Podcasts**: Android integration, search visibility
- **Amazon Music**: Amazon ecosystem, smart speaker integration
- **Stitcher**: Dedicated podcast platform

**Secondary Platforms:**
- **Pocket Casts**: Popular third-party app
- **Overcast**: iOS-focused podcast app
- **Castro**: Premium iOS podcast app
- **Podcast Addict**: Android podcast app
- **Castbox**: International podcast platform

**Distribution Strategy:**
- **Primary focus**: Major platforms (Apple, Spotify, Google)
- **Secondary expansion**: Niche platforms for specific audiences
- **Consistent presence**: Same content, optimized for each platform
- **Platform-specific optimization**: Leverage unique features
- **Cross-promotion**: Direct listeners between platforms

Multi-platform distribution maximizes discoverability and audience reach.`
    },
    {
      id: 'metadata-optimization',
      title: 'Metadata Optimization for Discovery',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'SEO for Podcasts',
      description: `**Metadata optimization** makes your podcast discoverable through search and recommendations across all platforms.

**Essential Metadata Elements:**

**Podcast Title:**
- **Clear and descriptive**: What the show is about
- **Include keywords**: Relevant search terms
- **Brand consistency**: Align with your brand
- **Length**: 50-60 characters optimal
- **Avoid clickbait**: Honest, accurate representation

**Episode Titles:**
- **Descriptive**: Clear episode content
- **Include episode numbers**: For series consistency
- **Use keywords**: Relevant search terms
- **Length**: 60-80 characters optimal
- **Avoid spoilers**: Don't give away key content

**Descriptions:**
- **Compelling summary**: Hook potential listeners
- **Include keywords**: Natural keyword integration
- **Episode highlights**: Key topics covered
- **Call to action**: Encourage listening
- **Length**: 150-300 words optimal

**Tags and Categories:**
- **Primary category**: Most relevant main category
- **Secondary categories**: Additional relevant categories
- **Tags**: Specific keywords and topics
- **Language**: Specify primary language
- **Explicit content**: Mark if contains mature content

**Optimization Best Practices:**
- **Research keywords**: Use tools to find relevant terms
- **Monitor performance**: Track which terms drive discovery
- **Update regularly**: Keep metadata current
- **A/B test**: Experiment with different titles/descriptions
- **Platform-specific**: Optimize for each platform's requirements

Optimized metadata drives organic discovery and growth.`
    },
    {
      id: 'release-scheduling',
      title: 'Release Scheduling and Consistency',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Audience Retention',
      description: `**Release scheduling** builds audience expectations and loyalty through consistent, predictable publishing.

**Scheduling Strategies:**

**Frequency Options:**
- **Daily**: News, current events, daily updates
- **Weekly**: Most common, manageable frequency
- **Bi-weekly**: Less demanding, still regular
- **Monthly**: Deep-dive content, long-form episodes
- **Seasonal**: Themed content, limited series

**Timing Considerations:**
- **Audience habits**: When your audience listens most
- **Time zones**: Consider global audience
- **Day of week**: Different engagement patterns
- **Seasonal factors**: Holidays, events, trends
- **Competition**: Avoid competing with major shows

**Consistency Benefits:**
- **Audience expectations**: Listeners know when to expect content
- **Algorithm favor**: Platforms reward consistent publishing
- **Brand building**: Establishes reliability and professionalism
- **Workflow efficiency**: Predictable production schedule
- **Growth acceleration**: Consistent content drives growth

**Scheduling Tools:**
- **Calendar planning**: Visual schedule management
- **Automated publishing**: Schedule releases in advance
- **Buffer content**: Pre-recorded episodes for consistency
- **Team coordination**: Coordinate with team members
- **Analytics tracking**: Monitor best-performing times

Consistent scheduling builds loyal, engaged audiences.`
    },
    {
      id: 'cross-promotion',
      title: 'Cross-Promotion and Partnerships',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Audience Growth Strategy',
      description: `**Cross-promotion and partnerships** accelerate audience growth by leveraging other creators' audiences and platforms.

**Cross-Promotion Strategies:**

**Guest Appearances:**
- **Appear on other podcasts**: Reach new audiences
- **Host guests on your show**: Share audiences
- **Collaborative episodes**: Joint content creation
- **Interview exchanges**: Reciprocal interviews
- **Panel discussions**: Multi-host episodes

**Platform Cross-Promotion:**
- **Social media**: Promote episodes across platforms
- **YouTube**: Video versions of podcast content
- **Blog posts**: Written content supporting episodes
- **Email newsletters**: Direct audience communication
- **Website integration**: Embed players and show notes

**Partnership Types:**
- **Content partnerships**: Collaborative content creation
- **Distribution partnerships**: Share distribution networks
- **Sponsorship partnerships**: Joint sponsor relationships
- **Event partnerships**: Live events and meetups
- **Community partnerships**: Engage with listener communities

**Best Practices:**
- **Authentic relationships**: Build genuine connections
- **Value exchange**: Provide mutual benefit
- **Audience alignment**: Partner with similar audiences
- **Consistent collaboration**: Regular partnership activities
- **Track results**: Measure partnership effectiveness

Cross-promotion multiplies your reach and accelerates growth.`
    },
    {
      id: 'international-distribution',
      title: 'International Distribution and Localization',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Global Audience Reach',
      description: `**International distribution** expands your podcast's reach to global audiences through strategic localization and platform expansion.

**Global Platform Strategy:**

**Major International Platforms:**
- **Spotify**: Global presence, 180+ countries
- **Apple Podcasts**: Worldwide iOS ecosystem
- **Google Podcasts**: Global Android integration
- **Amazon Music**: International Amazon ecosystem
- **Local platforms**: Country-specific podcast apps

**Localization Considerations:**
- **Language options**: Multiple language versions
- **Cultural adaptation**: Content relevant to local audiences
- **Local partnerships**: Collaborate with local creators
- **Regional promotion**: Targeted marketing in specific regions
- **Local events**: Participate in regional podcast events

**Technical Requirements:**
- **RSS feed localization**: Language-specific feeds
- **Metadata translation**: Localized titles and descriptions
- **Artwork adaptation**: Culturally appropriate visuals
- **Content rating**: Comply with local content standards
- **Legal compliance**: Follow local podcast regulations

**Growth Strategies:**
- **Local SEO**: Optimize for regional search terms
- **Cultural content**: Create region-specific episodes
- **Local guests**: Feature regional experts and personalities
- **Community engagement**: Participate in local podcast communities
- **Regional analytics**: Track performance by geography

International distribution opens new audience opportunities.`
    },
    {
      id: 'distribution-analytics',
      title: 'Distribution Analytics and Optimization',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Performance Measurement',
      description: `**Distribution analytics** provide insights to optimize your podcast's reach and performance across all platforms.

**Key Distribution Metrics:**

**Platform Performance:**
- **Downloads by platform**: Which platforms drive most listeners
- **Geographic distribution**: Regional audience patterns
- **Device breakdown**: How listeners access content
- **Platform growth**: Which platforms are growing fastest
- **Conversion rates**: Platform-to-subscriber conversion

**Content Performance:**
- **Episode rankings**: Performance within categories
- **Search visibility**: Discovery through search terms
- **Recommendation placement**: Algorithm-driven discovery
- **Social sharing**: Cross-platform content sharing
- **Engagement rates**: Listener interaction and retention

**Audience Insights:**
- **Demographics**: Age, gender, location data
- **Listening patterns**: When and how people listen
- **Content preferences**: Which topics perform best
- **Platform preferences**: Preferred listening platforms
- **Engagement depth**: How much content is consumed

**Optimization Strategies:**
- **Platform focus**: Invest in highest-performing platforms
- **Content optimization**: Create more of what works
- **Timing optimization**: Publish when audience is most active
- **Metadata refinement**: Improve discoverability
- **Cross-promotion**: Leverage successful platforms

Analytics-driven optimization maximizes distribution effectiveness.`
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

export const lesson2DistributionStrategies = generateLesson(lessonConfig); 