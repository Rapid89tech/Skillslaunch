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
  id: 13,
  title: 'Introduction to Editing Tools',
  duration: '75 min',
  type: 'video',
  sections: [
    {
      id: 'why-editing-matters',
      title: 'Why This Topic Matters',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Professional Audio Quality',
      description: `No matter how good your recording setup is, editing is where the **magic happens** — removing mistakes, enhancing audio, adding music, and creating a polished listening experience.

Choosing the right editing tool can:
- Save time and streamline your workflow
- Improve audio quality and professional standards
- Enable creative enhancements and effects
- Ensure consistent episode quality across your podcast

Editing transforms raw recordings into compelling content that keeps listeners engaged and coming back for more.`
    },
    {
      id: 'editing-software-overview',
      title: 'Overview of Editing Software',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'DAW Comparison and Selection',
      description: `**Digital Audio Workstations (DAWs)** are the heart of podcast editing. Each offers unique features for different needs and skill levels.

**Popular Options:**
- **Audacity**: Free, beginner-friendly, powerful features
- **Adobe Audition**: Professional-grade, subscription-based
- **GarageBand**: Mac-only, intuitive interface
- **Reaper**: Affordable, highly customizable
- **Logic Pro**: Mac-only, comprehensive features
- **Pro Tools**: Industry standard, professional use

Choose based on your budget, platform, and feature requirements.`
    },
    {
      id: 'audacity-basics',
      title: 'Audacity Basics for Beginners',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Free Professional Editing',
      description: `**Audacity** is the perfect starting point for podcast editing — it's free, powerful, and cross-platform.

**Key Features:**
- **Multi-track editing** for complex audio projects
- **Noise reduction** to clean up recordings
- **Audio effects** for enhancement and creativity
- **Export options** for various formats and platforms
- **Plugin support** for extended functionality

**Getting Started:**
1. Download and install Audacity
2. Import your audio files
3. Learn basic editing tools (cut, copy, paste)
4. Apply effects and enhancements
5. Export your finished episode

Audacity provides professional-quality editing without the cost barrier.`
    },
    {
      id: 'basic-editing-techniques',
      title: 'Basic Editing Techniques',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Cut, Copy, Paste, Fade',
      description: `Master these fundamental editing techniques to create polished podcast episodes:

**Essential Tools:**
- **Selection Tool**: Highlight audio sections for editing
- **Cut Tool**: Remove unwanted audio segments
- **Copy/Paste**: Duplicate or move audio sections
- **Fade In/Out**: Smooth audio transitions
- **Amplify**: Adjust volume levels
- **Time Shift**: Move audio segments in time

**Workflow Tips:**
1. **Listen through** your entire recording first
2. **Mark problem areas** with labels or markers
3. **Edit in sections** for better organization
4. **Save frequently** to avoid losing work
5. **Use keyboard shortcuts** for efficiency

These techniques form the foundation of professional podcast editing.`
    },
    {
      id: 'noise-reduction',
      title: 'Noise Reduction and Audio Cleanup',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Clean Audio Quality',
      description: `**Noise reduction** is crucial for professional-sounding podcasts. Clean audio keeps listeners engaged and reflects quality.

**Common Audio Issues:**
- **Background noise** (air conditioning, traffic)
- **Room echo** and reverberation
- **Breathing sounds** and mouth noises
- **Equipment hum** and electrical interference
- **Plosives** (p, b, t sounds)

**Solutions:**
- **Noise Reduction**: Remove consistent background sounds
- **High-pass filter**: Eliminate low-frequency rumble
- **Compression**: Even out volume levels
- **EQ adjustments**: Enhance voice clarity
- **De-essing**: Reduce harsh sibilant sounds

Clean audio is the foundation of professional podcasting.`
    },
    {
      id: 'music-and-sound-effects',
      title: 'Adding Music and Sound Effects',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Enhanced Audio Experience',
      description: `**Music and sound effects** add personality and professionalism to your podcast, creating an immersive listening experience.

**Music Types:**
- **Intro/Outro music**: Brand your show
- **Background music**: Set mood and atmosphere
- **Transition music**: Smooth segment changes
- **Theme music**: Reinforce show identity

**Sound Effects:**
- **Foley sounds**: Realistic environmental audio
- **Impact sounds**: Emphasize key moments
- **Ambient sounds**: Create atmosphere
- **Notification sounds**: Highlight important points

**Legal Considerations:**
- Use **royalty-free music** or licensed tracks
- **Credit artists** when required
- **Purchase licenses** for commercial use
- **Create original music** for unique branding

Music and effects should enhance, not distract from, your content.`
    },
    {
      id: 'exporting-and-quality',
      title: 'Exporting and Quality Control',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Final Production Standards',
      description: `**Exporting** your podcast with the right settings ensures optimal quality across all platforms and devices.

**Export Settings:**
- **Format**: MP3 for compatibility, WAV for quality
- **Bitrate**: 128-320 kbps for optimal quality/size balance
- **Sample Rate**: 44.1 kHz for standard quality
- **Channels**: Mono for voice, stereo for music-heavy content

**Quality Control Checklist:**
- [ ] Audio levels are consistent throughout
- [ ] No unwanted background noise
- [ ] Music levels complement voice
- [ ] Transitions are smooth
- [ ] Episode length is appropriate
- [ ] File size is reasonable for streaming

**Testing:**
- Listen on different devices and platforms
- Check audio quality on various speakers/headphones
- Verify compatibility with podcast platforms
- Test streaming performance

Quality control ensures your podcast sounds professional everywhere.`
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

export const lesson1IntroductionToEditingTools = generateLesson(lessonConfig); 