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
  id: 19,
  title: 'Technical Optimization',
  duration: '60 min',
  type: 'video',
  sections: [
    {
      id: 'file-optimization',
      title: 'Audio File Optimization',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Quality and Performance',
      description: `**Audio file optimization** ensures your podcast sounds great while maintaining fast loading times and compatibility across all platforms.

**File Format Optimization:**

**MP3 Settings:**
- **Bitrate**: 128-320 kbps (128 for voice, 320 for music-heavy)
- **Sample rate**: 44.1 kHz (standard for podcasts)
- **Channels**: Mono for voice, stereo for music
- **Encoding**: CBR (Constant Bit Rate) for consistency
- **Quality**: High-quality encoding settings

**File Size Considerations:**
- **Download speed**: Smaller files load faster
- **Storage costs**: Reduced hosting expenses
- **Mobile data**: Consider listener data usage
- **Quality balance**: Maintain audio quality
- **Platform limits**: Respect platform file size limits

**Optimization Tools:**
- **Audacity**: Free audio optimization
- **Adobe Audition**: Professional optimization
- **Online converters**: Quick format conversion
- **Batch processors**: Multiple file optimization
- **Quality analyzers**: Verify optimization results

**Best Practices:**
- **Test on multiple devices**: Ensure compatibility
- **Monitor file sizes**: Balance quality and size
- **Use consistent settings**: Maintain quality standards
- **Backup original files**: Preserve high-quality masters
- **Regular optimization**: Update settings as needed

Optimized files improve listener experience and reduce costs.`
    },
    {
      id: 'rss-feed-optimization',
      title: 'RSS Feed Optimization',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Distribution Efficiency',
      description: `**RSS feed optimization** ensures your podcast appears correctly across all platforms and directories.

**RSS Feed Structure:**

**Required Elements:**
- **Title**: Podcast title (clear, descriptive)
- **Description**: Detailed show description
- **Language**: Primary language code
- **Category**: Main content category
- **Image**: High-quality cover artwork
- **Link**: Website or show homepage

**Episode Elements:**
- **Title**: Episode title with episode number
- **Description**: Detailed episode description
- **Enclosure**: Direct link to audio file
- **Duration**: Episode length in seconds
- **Publication date**: When episode was published
- **GUID**: Unique episode identifier

**Feed Validation:**
- **XML validation**: Ensure proper XML structure
- **Required fields**: Include all mandatory elements
- **Character encoding**: Use UTF-8 encoding
- **Link validation**: Verify all links work
- **Image validation**: Ensure artwork displays correctly

**Optimization Tips:**
- **Regular updates**: Keep feed current
- **Consistent formatting**: Maintain structure
- **Error monitoring**: Check for feed errors
- **Performance testing**: Test feed loading speed
- **Cross-platform testing**: Verify on all platforms

Optimized RSS feeds ensure reliable distribution.`
    },
    {
      id: 'platform-specific-optimization',
      title: 'Platform-Specific Optimization',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Platform Best Practices',
      description: `**Platform-specific optimization** maximizes your podcast's performance on each individual platform.

**Apple Podcasts Optimization:**

**Metadata Requirements:**
- **Title**: 255 characters maximum
- **Description**: 4000 characters maximum
- **Category**: Choose most relevant category
- **Language**: Specify primary language
- **Explicit content**: Mark if contains mature content

**Artwork Requirements:**
- **Size**: 1400x1400 pixels minimum
- **Format**: PNG or JPG
- **Design**: Clear, readable at small sizes
- **Text**: Minimal, readable text
- **Branding**: Consistent with your brand

**Content Guidelines:**
- **Quality standards**: High-quality audio required
- **Content policies**: Follow Apple's content guidelines
- **Regular publishing**: Consistent release schedule
- **Episode descriptions**: Detailed, engaging descriptions
- **Show notes**: Comprehensive episode information

**Spotify Optimization:**

**Spotify-Specific Features:**
- **Spotify for Podcasters**: Enhanced analytics and tools
- **Playlist integration**: Music playlist features
- **Social sharing**: Easy social media integration
- **Episode chapters**: Chapter markers for navigation
- **Interactive elements**: Polls and Q&A features

**Google Podcasts Optimization:**

**SEO Benefits:**
- **Google search integration**: Appears in search results
- **Android ecosystem**: Native Android integration
- **Voice search**: Optimized for voice queries
- **Rich snippets**: Enhanced search results
- **Analytics integration**: Google Analytics compatibility

**Amazon Music Optimization:**

**Amazon Ecosystem:**
- **Alexa integration**: Smart speaker compatibility
- **Amazon Prime**: Potential Prime member audience
- **Echo devices**: Optimized for Amazon devices
- **Music integration**: Seamless music-podcast experience
- **Amazon advertising**: Potential ad integration

Platform-specific optimization maximizes each platform's unique benefits.`
    },
    {
      id: 'performance-monitoring',
      title: 'Performance Monitoring and Troubleshooting',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Quality Assurance',
      description: `**Performance monitoring** ensures your podcast maintains high quality and reliability across all platforms.

**Monitoring Tools:**

**Hosting Platform Analytics:**
- **Download tracking**: Monitor episode downloads
- **Listener behavior**: Track listening patterns
- **Geographic data**: Monitor regional performance
- **Device breakdown**: Track platform usage
- **Error reporting**: Identify technical issues

**Third-Party Analytics:**
- **Chartable**: Advanced podcast analytics
- **Podtrac**: Industry-standard measurement
- **Blubrry**: Comprehensive analytics platform
- **Libsyn Analytics**: Detailed performance insights
- **Custom tracking**: Platform-specific monitoring

**Technical Monitoring:**

**Feed Health:**
- **RSS validation**: Regular feed validation checks
- **Link testing**: Verify all links work correctly
- **Image validation**: Ensure artwork displays properly
- **Error monitoring**: Track feed errors and issues
- **Performance metrics**: Monitor feed loading speed

**Audio Quality:**
- **File integrity**: Verify audio file quality
- **Encoding quality**: Monitor encoding standards
- **Playback testing**: Test on multiple devices
- **Streaming performance**: Monitor streaming quality
- **Download reliability**: Ensure reliable downloads

**Troubleshooting Common Issues:**

**Feed Problems:**
- **Invalid XML**: Fix XML structure errors
- **Missing elements**: Add required RSS elements
- **Broken links**: Update or fix broken URLs
- **Image issues**: Resolve artwork display problems
- **Encoding errors**: Fix character encoding issues

**Platform Issues:**
- **Rejection reasons**: Address platform rejection issues
- **Update delays**: Troubleshoot slow updates
- **Display problems**: Fix metadata display issues
- **Analytics gaps**: Resolve missing analytics data
- **Performance issues**: Optimize slow-loading content

**Prevention Strategies:**
- **Regular testing**: Test feeds and content regularly
- **Automated monitoring**: Set up automated error detection
- **Backup systems**: Maintain backup feeds and content
- **Documentation**: Keep detailed technical documentation
- **Support contacts**: Maintain platform support relationships

Proactive monitoring prevents issues and maintains quality.`
    },
    {
      id: 'future-technologies',
      title: 'Future Technologies and Trends',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Technology Evolution',
      description: `**Future technologies** will transform podcast distribution and create new opportunities for creators and listeners.

**Emerging Technologies:**

**Spatial Audio:**
- **3D audio**: Immersive listening experiences
- **Binaural recording**: Realistic spatial sound
- **VR integration**: Virtual reality podcast experiences
- **AR applications**: Augmented reality podcast features
- **Platform support**: Growing platform adoption

**AI and Machine Learning:**
- **Content recommendation**: Personalized episode suggestions
- **Automatic transcription**: AI-powered show notes
- **Voice synthesis**: AI-generated content
- **Content analysis**: Automated content insights
- **Quality enhancement**: AI-powered audio improvement

**Live Streaming Integration:**
- **Real-time interaction**: Live audience engagement
- **Hybrid formats**: Live and recorded content
- **Interactive features**: Real-time polls and Q&A
- **Multi-platform streaming**: Simultaneous platform streaming
- **Event integration**: Live event podcasting

**Blockchain and Web3:**
- **Decentralized hosting**: Blockchain-based distribution
- **Token-based rewards**: Cryptocurrency incentives
- **NFT integration**: Unique digital content ownership
- **Smart contracts**: Automated royalty distribution
- **Community governance**: Decentralized decision-making

**Voice-First Technologies:**
- **Smart speakers**: Optimized for voice interfaces
- **Voice search**: Voice-optimized content discovery
- **Conversational AI**: AI-powered podcast assistants
- **Voice commerce**: Voice-activated purchasing
- **Accessibility features**: Enhanced accessibility options

**Adaptation Strategies:**
- **Technology monitoring**: Stay informed about new technologies
- **Experimentation**: Test new features and formats
- **Audience feedback**: Gather listener input on new features
- **Gradual adoption**: Implement new technologies gradually
- **Skill development**: Learn new technical skills

Future technologies create new opportunities for podcast growth and innovation.`
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

export const lesson3TechnicalOptimization = generateLesson(lessonConfig); 
