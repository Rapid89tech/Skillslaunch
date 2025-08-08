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
  id: 17,
  title: 'Podcast Hosting Platforms',
  duration: '75 min',
  type: 'video',
  sections: [
    {
      id: 'hosting-importance',
      title: 'Why Podcast Hosting Matters',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Distribution Foundation',
      description: `**Podcast hosting** is the foundation of your podcast's distribution strategy. It's where your audio files live and how they reach listeners worldwide.

**Key Functions:**
- **File storage**: Secure, reliable audio file hosting
- **RSS feed generation**: Automatic feed creation for podcast directories
- **Analytics**: Track downloads, listeners, and engagement
- **Distribution**: Automatic submission to major platforms
- **Reliability**: 99.9% uptime for consistent availability

**Benefits of Professional Hosting:**
- **Global reach**: Your podcast available worldwide
- **Professional reliability**: No downtime or technical issues
- **Analytics insights**: Understand your audience better
- **Automatic distribution**: Reach all major platforms
- **Scalability**: Grow without technical limitations

Choosing the right hosting platform is crucial for podcast success.`
    },
    {
      id: 'platform-comparison',
      title: 'Major Hosting Platform Comparison',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Platform Selection Guide',
      description: `**Understanding platform differences** helps you choose the best hosting solution for your podcast needs and budget.

**Popular Hosting Platforms:**

**Libsyn (Liberated Syndication)**
- **Pros**: Industry standard, reliable, excellent analytics
- **Cons**: Higher cost, limited storage on basic plans
- **Best for**: Professional podcasters, businesses
- **Pricing**: $5-40/month

**Buzzsprout**
- **Pros**: User-friendly, great analytics, automatic optimization
- **Cons**: Limited storage, higher cost for large files
- **Best for**: Beginners, ease of use
- **Pricing**: $12-24/month

**Anchor (Spotify)**
- **Pros**: Free, integrated with Spotify, easy to use
- **Cons**: Limited analytics, Spotify-focused
- **Best for**: Beginners, Spotify-focused creators
- **Pricing**: Free

**Podbean**
- **Pros**: Good value, unlimited storage, live streaming
- **Cons**: Interface can be clunky
- **Best for**: Budget-conscious creators
- **Pricing**: $9-99/month

**Spreaker**
- **Pros**: Live streaming, good monetization tools
- **Cons**: Limited storage, higher cost
- **Best for**: Live podcasting, monetization focus
- **Pricing**: $7-120/month

Choose based on your budget, technical needs, and growth plans.`
    },
    {
      id: 'rss-feed-basics',
      title: 'RSS Feed Fundamentals',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Distribution Technology',
      description: `**RSS (Really Simple Syndication)** feeds are the technology that makes podcast distribution possible across all platforms.

**What is RSS?**
- **XML format**: Structured data that podcast apps can read
- **Automatic updates**: New episodes appear automatically
- **Universal standard**: Works across all podcast platforms
- **Metadata included**: Episode info, descriptions, artwork

**RSS Feed Components:**
- **Podcast metadata**: Title, description, category, artwork
- **Episode information**: Title, description, duration, file URL
- **Publishing dates**: When episodes were published
- **File locations**: Direct links to audio files

**How RSS Works:**
1. **Hosting platform** generates RSS feed
2. **Podcast directories** read the feed
3. **Listeners subscribe** through their preferred app
4. **New episodes** automatically appear in subscriptions

**RSS Feed Benefits:**
- **One upload, everywhere**: Upload once, distribute everywhere
- **Automatic updates**: No manual submission needed
- **Consistent branding**: Same metadata across platforms
- **Analytics tracking**: Monitor performance across platforms

RSS feeds are the backbone of podcast distribution.`
    },
    {
      id: 'platform-setup',
      title: 'Setting Up Your Hosting Platform',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Account Configuration',
      description: `**Proper platform setup** ensures your podcast launches successfully and reaches your target audience effectively.

**Setup Checklist:**
- [ ] **Account creation**: Sign up for hosting platform
- [ ] **Podcast information**: Title, description, category
- [ ] **Artwork upload**: High-quality cover image (1400x1400px)
- [ ] **RSS feed generation**: Automatic feed creation
- [ ] **Episode upload**: First episode with proper metadata
- [ ] **Directory submission**: Submit to major platforms

**Essential Podcast Information:**
- **Title**: Clear, memorable, searchable
- **Description**: Compelling summary with keywords
- **Category**: Choose most relevant category
- **Language**: Specify primary language
- **Explicit content**: Mark if contains mature content
- **Author/Publisher**: Your name or company

**Artwork Requirements:**
- **Size**: 1400x1400 pixels minimum
- **Format**: PNG or JPG
- **Design**: Clear, readable at small sizes
- **Branding**: Consistent with your brand
- **Text**: Minimal, readable text

**First Episode Setup:**
- **Title**: Episode title with episode number
- **Description**: Detailed episode description
- **Duration**: Accurate episode length
- **File format**: MP3, optimized for streaming
- **Tags**: Relevant keywords for discovery

Proper setup ensures maximum visibility and professional presentation.`
    },
    {
      id: 'directory-submission',
      title: 'Submitting to Podcast Directories',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Platform Distribution',
      description: `**Podcast directory submission** makes your show discoverable to millions of potential listeners across all major platforms.

**Major Directories to Submit To:**

**Apple Podcasts (iTunes)**
- **Process**: Submit RSS feed through Apple Podcasts Connect
- **Review time**: 24-48 hours typically
- **Requirements**: Valid RSS feed, proper artwork
- **Benefits**: Largest podcast audience, iOS integration

**Spotify**
- **Process**: Submit through Spotify for Podcasters or hosting platform
- **Review time**: 24-72 hours
- **Requirements**: Valid RSS feed, no explicit content issues
- **Benefits**: Music integration, playlist features

**Google Podcasts**
- **Process**: Automatic if RSS feed is public
- **Review time**: 24-48 hours
- **Requirements**: Valid RSS feed, proper metadata
- **Benefits**: Android integration, Google search visibility

**Amazon Music**
- **Process**: Submit through hosting platform or directly
- **Review time**: 24-72 hours
- **Requirements**: Valid RSS feed, quality content
- **Benefits**: Amazon ecosystem integration

**Stitcher**
- **Process**: Submit RSS feed through Stitcher dashboard
- **Review time**: 24-48 hours
- **Requirements**: Valid RSS feed, consistent publishing

**Submission Best Practices:**
- **Complete profiles**: Fill out all available information
- **Consistent branding**: Same artwork and description everywhere
- **Regular updates**: Keep information current
- **Monitor reviews**: Respond to feedback and ratings
- **Track performance**: Monitor analytics across platforms

Directory submission maximizes your podcast's discoverability.`
    },
    {
      id: 'analytics-understanding',
      title: 'Understanding Hosting Analytics',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Performance Tracking',
      description: `**Hosting analytics** provide crucial insights into your podcast's performance and audience behavior.

**Key Metrics to Track:**

**Download Statistics:**
- **Total downloads**: Overall episode performance
- **Unique downloads**: Individual listener count
- **Download trends**: Growth or decline patterns
- **Geographic data**: Where listeners are located
- **Device types**: How listeners access your content

**Listener Behavior:**
- **Completion rates**: How much of episodes are listened to
- **Drop-off points**: Where listeners stop listening
- **Listening patterns**: When people listen most
- **Episode preferences**: Which content performs best
- **Return listeners**: Audience retention rates

**Platform Performance:**
- **Platform breakdown**: Which apps drive most listeners
- **Geographic distribution**: Regional audience patterns
- **Device preferences**: Mobile vs desktop listening
- **Streaming vs downloading**: How content is consumed

**Analytics Tools:**
- **Hosting platform analytics**: Basic metrics included
- **Third-party services**: Advanced analytics and insights
- **Social media analytics**: Engagement on promotional platforms
- **Website analytics**: Traffic from podcast promotion

**Using Analytics for Growth:**
- **Content optimization**: Create more of what works
- **Timing optimization**: Publish when audience is most active
- **Platform focus**: Invest in highest-performing platforms
- **Audience insights**: Understand listener demographics
- **ROI measurement**: Track monetization effectiveness

Analytics guide strategic decisions for podcast growth.`
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

export const lesson1PodcastHostingPlatforms = generateLesson(lessonConfig); 
