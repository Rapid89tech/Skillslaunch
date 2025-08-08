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
  id: 32,
  title: 'Workflow Optimization',
  duration: '75 min',
  type: 'video',
  sections: [
    {
      id: 'workflow-importance',
      title: 'Why Workflow Optimization Matters',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Efficiency Foundation',
      description: `**Workflow optimization** maximizes productivity, reduces errors, and ensures consistent quality in podcast production.

**Workflow Benefits:**
- **Increased efficiency**: Streamlined processes save time and resources
- **Quality consistency**: Standardized processes ensure consistent quality
- **Error reduction**: Systematic approaches reduce mistakes
- **Scalability**: Optimized workflows scale with growth
- **Team coordination**: Better coordination between team members

**Workflow Challenges:**
- **Process complexity**: Managing multiple interconnected processes
- **Team coordination**: Coordinating multiple team members
- **Quality maintenance**: Maintaining quality while increasing speed
- **Technology integration**: Integrating various tools and platforms
- **Change management**: Managing workflow changes and improvements

**Optimization Principles:**
- **Process mapping**: Map out current workflows
- **Bottleneck identification**: Identify and address bottlenecks
- **Automation opportunities**: Automate repetitive tasks
- **Standardization**: Standardize processes where possible
- **Continuous improvement**: Continuously improve workflows

**Workflow readiness**: Assess current workflow efficiency and identify improvement opportunities.

Effective workflow optimization drives productivity and quality.`
    },
    {
      id: 'production-workflow',
      title: 'Production Workflow Management',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Production Efficiency',
      description: `**Production workflow management** streamlines the entire podcast production process from planning to publication.

**Production Phases:**

**Planning Phase:**
- **Content planning**: Plan episode topics and content
- **Guest coordination**: Coordinate with guests and interviewees
- **Research preparation**: Conduct research and preparation
- **Equipment setup**: Prepare recording equipment
- **Schedule coordination**: Coordinate team schedules

**Recording Phase:**
- **Technical setup**: Set up recording equipment
- **Quality monitoring**: Monitor recording quality
- **Backup recording**: Create backup recordings
- **Note taking**: Take notes during recording
- **Post-recording review**: Review recording immediately after

**Post-Production Phase:**
- **Audio editing**: Edit and enhance audio
- **Content review**: Review and refine content
- **Quality assurance**: Ensure quality standards
- **Final approval**: Get final approval before publishing
- **File preparation**: Prepare files for distribution

**Publication Phase:**
- **Platform upload**: Upload to hosting platforms
- **Metadata optimization**: Optimize episode metadata
- **Social media promotion**: Promote on social media
- **Email notifications**: Send email notifications
- **Analytics tracking**: Track publication performance

**Workflow Tools:**
- **Project management**: Project management platforms
- **Communication tools**: Team communication tools
- **File sharing**: Secure file sharing systems
- **Quality control**: Quality control checklists
- **Automation tools**: Workflow automation tools

**Production workflow optimization maximizes efficiency and quality.`
    },
    {
      id: 'team-management',
      title: 'Team Management and Coordination',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Team Efficiency',
      description: `**Team management** ensures effective coordination and collaboration among podcast team members.

**Team Structure:**

**Core Team Roles:**
- **Host/Producer**: Lead content creation and production
- **Audio Engineer**: Handle technical audio aspects
- **Content Manager**: Manage content planning and coordination
- **Marketing Manager**: Handle promotion and audience growth
- **Administrative Support**: Handle administrative tasks

**Extended Team:**
- **Guest Coordinators**: Coordinate with guests
- **Social Media Managers**: Manage social media presence
- **Graphic Designers**: Create visual content
- **Copywriters**: Write promotional content
- **Analytics Specialists**: Handle data analysis

**Coordination Strategies:**

**Communication Systems:**
- **Regular meetings**: Regular team meetings and check-ins
- **Communication platforms**: Dedicated communication platforms
- **Documentation**: Comprehensive process documentation
- **Feedback loops**: Regular feedback and improvement cycles
- **Conflict resolution**: Clear conflict resolution procedures

**Task Management:**
- **Task assignment**: Clear task assignment and responsibilities
- **Deadline management**: Manage deadlines and deliverables
- **Progress tracking**: Track progress and completion
- **Quality control**: Quality control checkpoints
- **Performance review**: Regular performance reviews

**Team Development:**
- **Skill development**: Continuous skill development
- **Training programs**: Regular training and development
- **Mentorship**: Mentorship and knowledge sharing
- **Team building**: Team building activities
- **Recognition**: Recognition and appreciation programs

**Effective team management maximizes collaboration and productivity.`
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

export const lesson1WorkflowOptimization = generateLesson(lessonConfig); 
