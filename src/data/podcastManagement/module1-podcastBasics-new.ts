import { Module } from '@/types/course';

export const module1PodcastBasics: Module = {
  id: 'module1-podcast-basics',
  title: 'Introduction to Podcasting 🎙️',
  description: 'Learn the history, evolution, and fundamental concepts of podcasting from its radio roots to modern digital platforms.',
  lessons: [
    {
      id: 'lesson1-history-evolution',
      title: 'The History and Evolution of Podcasting',
      duration: '45 minutes',
      type: 'video',
      videoUrl: 'https://youtu.be/oyplEP4y6Fg',
      textContent: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-blue-800 mb-4">🎙️ Introduction to Podcasting</h3>
    <p class="text-gray-700 mb-4">Podcasting has transformed audio storytelling, offering a dynamic, on-demand medium that blends education, entertainment, and connection. This lecture traces podcasting's journey from radio-inspired roots to a global industry with over 5 million shows and 460 million listeners (2024 estimate).</p>
    
    <div class="bg-white p-4 rounded-lg mb-4">
      <h4 class="font-semibold text-blue-700 mb-2">What is a Podcast?</h4>
      <ul class="modern-bullet-list">
        <li><strong>Definition:</strong> A digital audio program made available on the internet for download or streaming, typically in episodic form</li>
        <li><strong>Format:</strong> Usually consists of a series of spoken-word content, often focused on specific themes such as news, education, entertainment, storytelling, or interviews</li>
        <li><strong>Name Origin:</strong> The term "podcast" is a blend of "iPod" (Apple's portable media player) and "broadcast"</li>
      </ul>
    </div>

    <div class="bg-white p-4 rounded-lg">
      <h4 class="font-semibold text-blue-700 mb-2">Key Features:</h4>
      <ul class="modern-bullet-list">
        <li><strong>On-demand access:</strong> Podcasts allow listeners to access episodes anytime, anywhere, via streaming or downloading</li>
        <li><strong>Subscription-based delivery:</strong> Podcasts use RSS feeds to deliver new episodes automatically to subscribers</li>
        <li><strong>Episodic and serialized content:</strong> Podcasts are structured as episodic (standalone) or serialized (ongoing narrative) content</li>
        <li><strong>Accessible on multiple platforms:</strong> Available on smartphones, computers, tablets, and smart speakers</li>
      </ul>
    </div>
  </div>

  <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-green-800 mb-4">📻 Pre-Podcasting Era: Foundations</h3>
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-green-700 mb-2">Radio Broadcasting (1900s – 1990s)</h4>
        <ul class="modern-bullet-list">
          <li>Podcasting evolved from the long history of radio broadcasting, especially talk radio and serialized audio shows</li>
          <li>Shows like <em>War of the Worlds</em> (1938) by Orson Welles demonstrated the power of audio storytelling</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-green-700 mb-2">Internet Radio & Streaming</h4>
        <ul class="modern-bullet-list">
          <li>The late 1990s saw the rise of internet radio, allowing users to stream audio online (e.g., Live365, Shoutcast)</li>
          <li>These early systems lacked downloadability and portability, limiting user control</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-purple-800 mb-4">🚀 Birth of Podcasting (Early 2000s)</h3>
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-purple-700 mb-2">Key Innovators</h4>
        <ul class="modern-bullet-list">
          <li><strong>Dave Winer</strong> (software developer) and <strong>Adam Curry</strong> (former MTV host) are credited as podcasting pioneers</li>
          <li>In 2004, Curry created <strong>iPodder</strong>, a program that enabled users to download Internet radio broadcasts to their iPods</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-purple-700 mb-2">First Podcasts</h4>
        <ul class="modern-bullet-list">
          <li>"<strong>Daily Source Code</strong>" (by Curry) became one of the earliest and most influential podcasts</li>
          <li>Blogs and RSS feeds enabled automatic distribution of audio content</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-orange-800 mb-4">📈 Podcasting Goes Mainstream (2005–2010)</h3>
    <div class="bg-white p-4 rounded-lg">
      <ul class="modern-bullet-list">
        <li><strong>2005:</strong> Apple added podcasts to iTunes 4.9, allowing iPod users to easily find and subscribe to podcasts</li>
        <li>Media outlets like NPR, BBC, and The New York Times began podcasting</li>
        <li>Independent creators flourished due to low barriers to entry</li>
      </ul>
    </div>
  </div>

  <div class="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-red-800 mb-4">🔥 The Podcast Boom (2014–2018)</h3>
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-red-700 mb-2">Serial: A Turning Point</h4>
        <ul class="modern-bullet-list">
          <li><strong>2014:</strong> Launch of the true-crime podcast <em>Serial</em> (by Sarah Koenig) marked a cultural shift</li>
          <li>It broke records with millions of downloads and introduced the binge-listening model</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-red-700 mb-2">Celebrity & Corporate Entry</h4>
        <ul class="modern-bullet-list">
          <li>Celebrities like Joe Rogan, Marc Maron, and Oprah joined the space</li>
          <li>Businesses began using podcasting for marketing and branding</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-red-700 mb-2">Platforms Expand</h4>
        <ul class="modern-bullet-list">
          <li>Spotify, Google Podcasts, Stitcher, and others entered the market, increasing accessibility</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-indigo-800 mb-4">🌐 Podcasting in the 2020s: Industry Matures</h3>
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-indigo-700 mb-2">Diversification of Content</h4>
        <ul class="modern-bullet-list">
          <li><strong>Explosion of genres:</strong> true crime, education, politics, self-help, fiction, history, etc.</li>
          <li><strong>Global expansion:</strong> multilingual podcasts, regional creators, and localized content</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-indigo-700 mb-2">Monetization & Business Models</h4>
        <ul class="modern-bullet-list">
          <li>Advertising, sponsorships, paid subscriptions, and crowdfunding (e.g., Patreon)</li>
          <li>Companies like Spotify made multi-million-dollar deals (e.g., <em>Joe Rogan Experience</em>, Gimlet Media acquisition)</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-indigo-700 mb-2">Video Podcasting</h4>
        <ul class="modern-bullet-list">
          <li>Rise of video podcasting on platforms like YouTube, TikTok, and Spotify Video</li>
          <li>Hybrid formats enhance audience engagement and reach</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-indigo-700 mb-2">AI & Technology Integration</h4>
        <ul class="modern-bullet-list">
          <li>AI tools used for editing, transcription, voice synthesis, and content recommendation</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-teal-800 mb-4">🔮 Current Trends & Future Outlook</h3>
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-teal-700 mb-2">Emerging Trends</h4>
        <ul class="modern-bullet-list">
          <li><strong>Hyper-Niche Content:</strong> Podcasts are increasingly targeting smaller, specific audiences with specialized topics</li>
          <li><strong>Interactive Podcasts:</strong> Some platforms explore choose-your-own-adventure formats or live audience engagement</li>
          <li><strong>Global Reach:</strong> Countries like India, South Africa, Nigeria, and Brazil are becoming major podcast markets</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-teal-700 mb-2">Challenges</h4>
        <ul class="modern-bullet-list">
          <li><strong>Discovery:</strong> Podcast searchability is still limited</li>
          <li><strong>Monetization for smaller creators</strong></li>
          <li><strong>Listener retention and attention span</strong></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-yellow-800 mb-4">📌 Suggested Activities</h3>
    <div class="bg-white p-4 rounded-lg">
      <ul class="modern-bullet-list">
        <li>Listen to an episode of <em>Serial</em> or <em>Radiolab</em> and discuss structure</li>
        <li>Create a 5-minute podcast episode using free tools (e.g., Anchor or Audacity)</li>
        <li>Research and present a podcast from a non-Western country</li>
      </ul>
    </div>
  </div>
</div>
      `
    },
    {
      id: 'lesson2-podcast-formats',
      title: 'Understanding Podcast Formats and Types',
      duration: '30 minutes',
      type: 'text',
      textContent: `
<div class="space-y-6">
  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-blue-800 mb-4">🎭 Podcast Formats</h3>
    <p class="text-gray-700 mb-4">The format of your podcast defines its structure, tone, and production needs. Understanding different formats helps you choose the right approach for your content and audience.</p>
    
    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-blue-700 mb-2">Interview Format</h4>
        <ul class="modern-bullet-list">
          <li>Host interviews a guest each episode</li>
          <li>Best for: Experts, thought leaders, diverse voices</li>
          <li>Requires: Guest coordination, interview skills</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-blue-700 mb-2">Solo (Monologue)</h4>
        <ul class="modern-bullet-list">
          <li>Host speaks directly to the audience</li>
          <li>Best for: Personal brand, education, coaching</li>
          <li>Requires: Strong speaking skills, content planning</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-blue-700 mb-2">Co-hosted</h4>
        <ul class="modern-bullet-list">
          <li>Two or more hosts discussing topics together</li>
          <li>Best for: Conversational shows, lifestyle</li>
          <li>Requires: Host chemistry, coordination</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-blue-700 mb-2">Panel</h4>
        <ul class="modern-bullet-list">
          <li>A group discussion with recurring or rotating guests</li>
          <li>Best for: Debates, roundtables</li>
          <li>Requires: Multiple guest coordination</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-blue-700 mb-2">Narrative Nonfiction</h4>
        <ul class="modern-bullet-list">
          <li>Scripted storytelling based on true events</li>
          <li>Best for: Journalism, documentary-style podcasts</li>
          <li>Requires: Research, scripting, sound design</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-blue-700 mb-2">Fiction / Audio Drama</h4>
        <ul class="modern-bullet-list">
          <li>Scripted fictional storytelling with sound effects and acting</li>
          <li>Best for: Storytelling, immersive fiction</li>
          <li>Requires: Scripting, acting, sound design</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-green-800 mb-4">🎤 Number of Hosts/Guests</h3>
    <p class="text-gray-700 mb-4">The number of hosts and guests, and whether they're in-person or remote, significantly impacts your podcast setup and technical requirements.</p>
    
    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-green-700 mb-2">Solo Host</h4>
        <ul class="modern-bullet-list">
          <li>Simplest setup - one microphone, basic recording software</li>
          <li>Perfect for beginners or personal branding</li>
          <li>Lower production complexity</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-green-700 mb-2">Multiple Hosts/Guests</h4>
        <ul class="modern-bullet-list">
          <li>Requires multiple microphones and audio interface</li>
          <li>More complex coordination and scheduling</li>
          <li>Higher production value and dynamic content</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-green-700 mb-2">In-Person Recording</h4>
        <ul class="modern-bullet-list">
          <li>Studio-grade equipment like mixers</li>
          <li>Better audio quality and natural interaction</li>
          <li>Requires physical space and setup</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-green-700 mb-2">Remote Recording</h4>
        <ul class="modern-bullet-list">
          <li>Platforms like Riverside or Zencastr</li>
          <li>Geographic flexibility and easier scheduling</li>
          <li>Requires stable internet and backup plans</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold text-purple-800 mb-4">💸 Budget Considerations</h3>
    <p class="text-gray-700 mb-4">Your budget determines the tools and services you can access, from free software to professional-grade equipment.</p>
    
    <div class="grid md:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-purple-700 mb-2">Free Tools</h4>
        <ul class="modern-bullet-list">
          <li>Audacity, Anchor</li>
          <li>Basic recording and editing</li>
          <li>Great for beginners</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-purple-700 mb-2">Beginner-Friendly</h4>
        <ul class="modern-bullet-list">
          <li>GarageBand, Descript</li>
          <li>User-friendly interfaces</li>
          <li>Modest investment</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-purple-700 mb-2">Professional-Level</h4>
        <ul class="modern-bullet-list">
          <li>Adobe Audition, high-end mics</li>
          <li>Superior quality</li>
          <li>Larger budget required</li>
        </ul>
      </div>
    </div>
  </div>
</div>
      `
    },
    {
      id: 'lesson3-quiz',
      title: 'Quiz: Introduction to Podcasting',
      duration: '15 minutes',
      type: 'quiz',
      questions: [
        {
          id: 'q1',
          question: 'What does the term "podcast" originate from?',
          options: [
            'Podium + Broadcast',
            'iPod + Broadcast',
            'Portable + Cast',
            'Podcast + Audio'
          ],
          correctAnswer: 1
        },
        {
          id: 'q2',
          question: 'Who is known as the "Podfather" for pioneering early podcasting technology?',
          options: [
            'Orson Welles',
            'Joe Rogan',
            'Adam Curry',
            'Sarah Koenig'
          ],
          correctAnswer: 2
        },
        {
          id: 'q3',
          question: 'Which podcast, launched in 2014, played a major role in popularizing the binge-listening model?',
          options: [
            'Welcome to Night Vale',
            'Serial',
            'The Joe Rogan Experience',
            'Radiolab'
          ],
          correctAnswer: 1
        },
        {
          id: 'q4',
          question: 'True or False: Radio broadcasting had no influence on the development of podcasts.',
          options: [
            'True',
            'False'
          ],
          correctAnswer: 1
        },
        {
          id: 'q5',
          question: 'What was one limitation of early internet radio platforms like Live365 and Shoutcast?',
          options: [
            'Poor sound quality',
            'No user access',
            'No download or portability options',
            'Limited internet access'
          ],
          correctAnswer: 2
        },
        {
          id: 'q6',
          question: 'Which major tech company integrated podcasts into its platform in 2005, helping podcasts go mainstream?',
          options: [
            'Google',
            'Apple',
            'Microsoft',
            'Spotify'
          ],
          correctAnswer: 1
        },
        {
          id: 'q7',
          question: 'Which of the following is NOT a common podcast type by content theme?',
          options: [
            'Interview',
            'Comedy',
            'Cooking Show',
            'True Crime'
          ],
          correctAnswer: 2
        },
        {
          id: 'q8',
          question: 'What is a key advantage of the solo podcast format?',
          options: [
            'Requires guest coordination',
            'Easier for audience interaction',
            'Easier to produce and build personal branding',
            'Higher sound quality'
          ],
          correctAnswer: 2
        },
        {
          id: 'q9',
          question: 'What role is responsible for ensuring sound clarity, mixing, and audio levels in a podcast team?',
          options: [
            'Producer',
            'Scriptwriter',
            'Audio Engineer / Editor',
            'Guest Coordinator'
          ],
          correctAnswer: 2
        },
        {
          id: 'q10',
          question: 'Which of the following is a current trend shaping the future of podcasting?',
          options: [
            'Decreasing content diversity',
            'Fewer creators in the industry',
            'Hyper-niche content for smaller audiences',
            'Reduced use of AI tools'
          ],
          correctAnswer: 2
        }
      ]
    }
  ]
}; 