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
  id: 15,
  title: 'Workflow Optimization',
  duration: '60 min',
  type: 'video',
  sections: [
    {
      id: 'efficient-workflow',
      title: 'Building Efficient Editing Workflows',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Time-Saving Techniques',
      description: `**Efficient workflows** are the key to consistent, high-quality podcast production without burning out.

**Workflow Components:**
- **Project templates**: Standardized starting points
- **Track presets**: Pre-configured audio settings
- **Effect chains**: Saved processing combinations
- **Keyboard shortcuts**: Speed up common tasks
- **File organization**: Logical project structure

**Workflow Stages:**
1. **Preparation**: Organize files and set up project
2. **Rough edit**: Remove major mistakes and organize content
3. **Fine edit**: Refine timing and flow
4. **Processing**: Apply effects and enhancements
5. **Mastering**: Final polish and export

**Time-Saving Tips:**
- **Batch processing**: Apply effects to multiple files
- **Macros**: Automate repetitive tasks
- **Presets**: Save and reuse settings
- **Parallel processing**: Work on multiple elements

Efficient workflows save time and improve quality.`
    },
    {
      id: 'quality-control',
      title: 'Quality Control and Standards',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Professional Standards',
      description: `**Quality control** ensures your podcast meets professional standards and provides the best listener experience.

**Quality Checklist:**
- [ ] **Audio levels**: Consistent volume throughout
- [ ] **Noise floor**: Clean background audio
- [ ] **Frequency balance**: Natural voice reproduction
- [ ] **Dynamic range**: Appropriate compression
- [ ] **Stereo image**: Proper spatial positioning
- [ ] **Transitions**: Smooth segment changes
- [ ] **Content flow**: Logical episode structure

**Technical Standards:**
- **Loudness**: -16 LUFS target
- **Peak levels**: -1 dB maximum
- **Noise floor**: Below -60 dB
- **Frequency response**: 80 Hz - 15 kHz for voice
- **Format**: MP3 128-320 kbps

**Listening Tests:**
- **Multiple devices**: Test on various speakers/headphones
- **Different environments**: Car, office, home
- **Volume levels**: Low, medium, and high playback
- **Platform testing**: Verify on major podcast platforms

Quality control ensures professional results.`
    },
    {
      id: 'collaboration-tools',
      title: 'Collaboration and File Sharing',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Team Workflow',
      description: `**Collaboration tools** enable seamless teamwork when multiple people are involved in podcast production.

**File Sharing Platforms:**
- **Google Drive**: Cloud storage and sharing
- **Dropbox**: Professional file synchronization
- **WeTransfer**: Large file transfers
- **Slack**: Team communication and file sharing
- **Trello**: Project management and task tracking

**Collaboration Workflows:**
- **Remote recording**: Coordinate with remote guests
- **File exchange**: Share audio files securely
- **Feedback loops**: Collect and implement changes
- **Version control**: Track project versions
- **Approval processes**: Get sign-off on final versions

**Best Practices:**
- **Clear naming**: Use descriptive file names
- **Version tracking**: Include version numbers
- **Backup systems**: Multiple storage locations
- **Access control**: Manage who can edit files
- **Communication**: Regular status updates

Effective collaboration improves podcast quality and efficiency.`
    },
    {
      id: 'backup-strategies',
      title: 'Backup and Recovery Strategies',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Data Protection',
      description: `**Backup strategies** protect your work from data loss and ensure you can recover from technical issues.

**Backup Types:**
- **Local backup**: External hard drives and NAS
- **Cloud backup**: Online storage services
- **Project backup**: Complete project file copies
- **Audio backup**: Raw and processed audio files
- **Settings backup**: Software configurations

**Backup Schedule:**
- **Real-time**: Continuous cloud synchronization
- **Daily**: Complete project backups
- **Weekly**: Full system backups
- **Monthly**: Archive important projects
- **Before major changes**: Pre-edit backups

**Recovery Planning:**
- **Test restores**: Verify backup integrity
- **Multiple locations**: Geographic redundancy
- **Access documentation**: Recovery procedures
- **Software licenses**: Backup activation keys
- **Contact information**: Technical support details

Proper backup strategies prevent catastrophic data loss.`
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'System Efficiency',
      description: `**Performance optimization** ensures your editing software runs smoothly and efficiently.

**System Requirements:**
- **CPU**: Multi-core processor for real-time processing
- **RAM**: 16GB+ for large projects
- **Storage**: SSD for project files and scratch disks
- **Graphics**: Dedicated GPU for video editing
- **Audio interface**: Low-latency audio hardware

**Software Optimization:**
- **Buffer settings**: Adjust for your system
- **Scratch disk**: Use fast storage for temporary files
- **Plugin management**: Disable unused plugins
- **Project cleanup**: Remove unused files and tracks
- **Regular updates**: Keep software current

**Workflow Optimization:**
- **Freeze tracks**: Reduce CPU load
- **Bounce in place**: Create audio files from MIDI
- **Use proxies**: Lower-resolution files for editing
- **Close other applications**: Free up system resources
- **Restart regularly**: Clear memory and cache

Optimized performance improves workflow efficiency.`
    },
    {
      id: 'future-proofing',
      title: 'Future-Proofing Your Workflow',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Long-term Planning',
      description: `**Future-proofing** ensures your workflow remains effective as technology and requirements evolve.

**Technology Trends:**
- **AI-powered editing**: Automated audio enhancement
- **Cloud collaboration**: Real-time remote editing
- **Mobile editing**: On-the-go podcast production
- **Spatial audio**: Immersive 3D audio experiences
- **Live streaming**: Real-time podcast broadcasting

**Adaptation Strategies:**
- **Modular workflows**: Easy to update individual components
- **Standard formats**: Use widely-supported file types
- **Skill development**: Continuous learning and training
- **Equipment planning**: Gradual technology upgrades
- **Industry networking**: Stay informed about trends

**Scalability Planning:**
- **Growth preparation**: Plan for increased production
- **Team expansion**: Prepare for additional collaborators
- **Platform diversification**: Multiple distribution channels
- **Monetization integration**: Revenue-generating features
- **Quality improvement**: Continuous enhancement processes

Future-proofing ensures long-term success in podcast production.`
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

export const lesson3WorkflowOptimization = generateLesson(lessonConfig); 