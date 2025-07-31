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
  id: 14,
  title: 'Advanced Editing Techniques',
  duration: '90 min',
  type: 'video',
  sections: [
    {
      id: 'multi-track-editing',
      title: 'Multi-Track Editing Fundamentals',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Complex Audio Projects',
      description: `**Multi-track editing** allows you to work with multiple audio sources simultaneously, creating rich, layered podcast episodes.

**Key Concepts:**
- **Track organization**: Separate voice, music, and effects
- **Synchronization**: Align multiple audio sources
- **Volume automation**: Dynamic level control
- **Panning**: Spatial audio positioning
- **Grouping**: Manage related tracks together

**Benefits:**
- **Professional sound**: Layered audio creates depth
- **Flexibility**: Easy to adjust individual elements
- **Efficiency**: Work on multiple elements simultaneously
- **Quality control**: Isolate and fix specific issues

Multi-track editing is essential for professional podcast production.`
    },
    {
      id: 'compression-and-dynamics',
      title: 'Compression and Dynamics Processing',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Professional Audio Control',
      description: `**Compression** is a powerful tool for controlling audio dynamics and achieving consistent, professional-sounding podcasts.

**Compression Parameters:**
- **Threshold**: Level at which compression begins
- **Ratio**: Amount of compression applied
- **Attack**: How quickly compression responds
- **Release**: How quickly compression stops
- **Knee**: Transition between compressed and uncompressed

**Applications:**
- **Voice leveling**: Even out speaking volume
- **Music control**: Tame dynamic music elements
- **Overall mix**: Glue different elements together
- **Loudness**: Achieve competitive volume levels

Proper compression creates polished, broadcast-ready audio.`
    },
    {
      id: 'equalization-techniques',
      title: 'Equalization (EQ) Techniques',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Frequency Shaping',
      description: `**Equalization** shapes the frequency content of your audio, enhancing clarity and creating space in your mix.

**EQ Types:**
- **High-pass filter**: Remove low-frequency rumble
- **Low-pass filter**: Remove high-frequency noise
- **Parametric EQ**: Precise frequency control
- **Graphic EQ**: Broad frequency adjustments
- **Shelf EQ**: Boost or cut frequency ranges

**Voice EQ Guidelines:**
- **80-120 Hz**: Remove room rumble
- **200-400 Hz**: Reduce muddiness
- **2-4 kHz**: Enhance presence and clarity
- **8-12 kHz**: Add air and brightness

**Music EQ:**
- **Cut conflicting frequencies** with voice
- **Enhance musical character**
- **Create space** for voice clarity

EQ is crucial for professional-sounding podcasts.`
    },
    {
      id: 'reverb-and-effects',
      title: 'Reverb and Audio Effects',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Spatial Audio Enhancement',
      description: `**Reverb and effects** add depth and character to your podcast, creating immersive listening experiences.

**Reverb Types:**
- **Room reverb**: Natural acoustic spaces
- **Hall reverb**: Large venue simulation
- **Plate reverb**: Classic studio sound
- **Spring reverb**: Vintage character
- **Convolution reverb**: Real space simulation

**Effect Applications:**
- **Subtle reverb**: Add natural space to voice
- **Delay**: Create echo effects for emphasis
- **Chorus**: Thicken and enhance sounds
- **Distortion**: Add character and warmth
- **Pitch shifting**: Create unique effects

**Best Practices:**
- **Use sparingly**: Effects should enhance, not distract
- **Match context**: Choose effects that fit your content
- **Test on different systems**: Ensure compatibility
- **Save presets**: For consistent application

Effects add professional polish when used tastefully.`
    },
    {
      id: 'automation-techniques',
      title: 'Automation and Dynamic Control',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Precise Audio Control',
      description: `**Automation** allows you to create dynamic, engaging podcasts with precise control over audio elements over time.

**Automation Types:**
- **Volume automation**: Dynamic level changes
- **Pan automation**: Moving audio in stereo field
- **Effect automation**: Changing effect parameters
- **Mute automation**: Precise audio cutting
- **Filter automation**: Dynamic frequency changes

**Applications:**
- **Fade music**: Smooth transitions between segments
- **Emphasize moments**: Volume boosts for impact
- **Create movement**: Panning for spatial interest
- **Dynamic effects**: Changing reverb or delay
- **Precise editing**: Automated muting of mistakes

**Workflow Tips:**
- **Plan automation**: Know what you want to achieve
- **Use keyframes**: For precise control points
- **Test thoroughly**: Ensure smooth playback
- **Save versions**: Before major automation changes

Automation creates professional, dynamic podcasts.`
    },
    {
      id: 'mastering-basics',
      title: 'Mastering Basics for Podcasts',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Final Audio Polish',
      description: `**Mastering** is the final step in podcast production, ensuring your audio sounds great across all platforms and devices.

**Mastering Goals:**
- **Consistent loudness**: Competitive volume levels
- **Frequency balance**: Optimized frequency response
- **Stereo enhancement**: Improved stereo image
- **Dynamic range**: Appropriate compression
- **Format optimization**: Platform-specific settings

**Mastering Tools:**
- **Limiter**: Prevent clipping and control peaks
- **Multiband compressor**: Frequency-specific dynamics
- **Stereo enhancer**: Improve stereo width
- **EQ**: Final frequency adjustments
- **Loudness meter**: Monitor perceived loudness

**Target Standards:**
- **Loudness**: -16 LUFS (Loudness Units Full Scale)
- **True Peak**: -1 dB maximum
- **Dynamic Range**: 8-12 dB for podcasts
- **Format**: MP3 128-320 kbps

Proper mastering ensures professional quality across all platforms.`
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

export const lesson2AdvancedEditingTechniques = generateLesson(lessonConfig); 