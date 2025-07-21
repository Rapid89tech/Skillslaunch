
import type { Module } from '@/types/course';

export const module5HostingDistribution: Module = {
  id: 5,
  title: 'Hosting & Distribution',
  description: 'Learn how to select hosting platforms, set up RSS feeds, submit to directories, and create podcast websites for maximum reach and discoverability.',
  lessons: [
    {
      id: 25,
      title: 'Selecting a Podcast Hosting Platform',
      duration: '30 min',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
          # Selecting a Podcast Hosting Platform
          
          ## 🧠 What Is a Podcast Hosting Platform?
          
          <YouTubeVideoRenderer videoId="0a8rviuua6o" title="What Is a Podcast Hosting Platform?" />
          
          A podcast host stores and delivers your audio files to directories like Spotify, Apple Podcasts, and Google Podcasts.
          
          ### It provides:
          - **File storage** - Secure cloud storage for your audio files
          - **RSS feed generation** - Automatic creation and maintenance of your podcast feed
          - **Analytics** - Detailed insights into your audience and performance
          - **Distribution tools** - Easy submission to major podcast directories
          - **Monetization options** - Tools for ads, subscriptions, and donations
          
          ## ✅ Key Features to Look For
          
          <YouTubeVideoRenderer videoId="9yt3NLJnU6w" title="Key Features to Look For" />
          
          | Feature | Why It Matters |
          |---------|----------------|
          | **Storage & Bandwidth** | Determines how much audio you can upload and how many listeners can stream/download |
          | **RSS Feed Control** | Essential for submitting to directories and keeping ownership of your content |
          | **Analytics** | Helps you track downloads, location, device type, listener trends |
          | **Ease of Use** | Simple UI/UX for uploading, scheduling, and organizing episodes |
          | **Monetization Tools** | Ad insertion, listener donations, subscriptions |
          | **Support & Resources** | Tutorials, live chat, email support, community forums |
          | **Distribution Integrations** | One-click submission to Spotify, Apple, Google, Amazon, etc. |
          
          ## 💼 Popular Hosting Platforms (with Pros/Cons)
          
          ### 1. Buzzsprout
          - **Pros:** Intuitive interface, strong analytics, auto-optimization
          - **Cons:** Free plan has a 90-day limit
          - **Best for:** Beginners & semi-pro podcasters
          
          ### 2. Anchor by Spotify
          - **Pros:** 100% free, easy Spotify integration, built-in monetization
          - **Cons:** Limited analytics depth, Spotify-focused
          - **Best for:** Creators who want to start quickly and for free
          
          ### 3. Podbean
          - **Pros:** Monetization, live streaming, detailed analytics
          - **Cons:** Interface is a bit dated
          - **Best for:** Growing podcasts with monetization goals
          
          ### 4. Transistor
          - **Pros:** Hosts multiple shows under one plan, excellent analytics
          - **Cons:** No free plan
          - **Best for:** Agencies or creators managing multiple shows
          
          ### 5. Captivate
          - **Pros:** Marketing tools, email opt-ins, dynamic ad support
          - **Cons:** Slightly pricier
          - **Best for:** Serious podcasters focused on growth and business integration
          
          ## 💡 Tips for Choosing
          
          ### 🏷️ Start with your goals:
          - Are you hobbyist or commercial?
          - Do you need monetization now or later?
          
          ### 📊 Compare analytics and ease of use
          ### 📦 Check storage limits & episode caps
          ### 💸 Try free trials before committing
          ### 🔐 Ensure you retain RSS feed control & episode rights
          
          ## 📌 Questions to Ask Before Committing
          
          - Does it offer unlimited storage or tiered plans?
          - Can I migrate my podcast if I switch hosts?
          - Does it integrate easily with major directories?
          - Are there hidden fees for analytics or distribution?
          - Is there reliable customer support?
          
          ## 🎯 Summary
          
          | Priority | Suggested Platform |
          |----------|-------------------|
          | Free & Fast Start | Anchor |
          | Easy UI + Support | Buzzsprout |
          | Monetization Focus | Podbean |
          | Growth + Branding | Captivate |
          | Multi-Show Support | Transistor |
        `
      }
    },
    {
      id: 26,
      title: 'Setting Up RSS Feeds',
      duration: '25 min',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
          # Setting Up RSS Feeds
          
          ## 📡 What Is an RSS Feed?
          
          <YouTubeVideoRenderer videoId="IEWJpxq6HVI" title="What Is an RSS Feed?" />
          
          RSS (Really Simple Syndication) is a standardized web feed format used to distribute podcast episodes automatically to platforms like Spotify, Apple Podcasts, and Google Podcasts.
          
          - Your podcast host creates and maintains this feed
          - Think of it like a live "playlist" that updates automatically when you publish new episodes
          
          ## 🧱 Core Elements in a Podcast RSS Feed
          
          | Element | Description |
          |---------|-------------|
          | **Title** | The name of your podcast |
          | **Author** | Your name or podcasting brand |
          | **Description** | Summary of your show – displayed on platforms like Apple Podcasts |
          | **Category** | Must match platform taxonomy (e.g., Education, Business, True Crime) |
          | **Language** | Primary language (e.g., en-US for English – United States) |
          | **Episode Info** | Title, description, publish date, duration, and enclosure (audio file URL) |
          | **Artwork** | Podcast cover image (minimum 1400x1400px, max 3000x3000px) |
          
          ## 🛠️ How to Set Up Your RSS Feed (Step-by-Step)
          
          <YouTubeVideoRenderer videoId="Tm4OkDZyCaU" title="How to Set Up Your RSS Feed (Step-by-Step)" />
          
          ### ✅ A. Use a Podcast Hosting Platform (e.g., Buzzsprout, Podbean, Anchor)
          
          1. **Create an account**
          2. **Enter podcast details:**
             - Podcast title, author, description, category
             - Upload podcast artwork
             - Add first episode (optional but recommended)
          3. **Generate RSS feed link**
             - Usually auto-generated by the host (e.g., https://yourpodcastname.buzzsprout.com/rss)
          
          ### ✅ B. Validate Your Feed
          
          Use tools like:
          - **Podba.se Validator**
          - **CastFeedValidator**
          - Check for missing metadata or formatting errors
          
          ### ✅ C. Submit RSS Feed to Directories
          
          - **Apple Podcasts:** podcasters.apple.com
          - **Spotify:** podcasters.spotify.com
          - **Google Podcasts** (via YouTube Music, starting 2024)
          - **Amazon Music, Stitcher (retired), Overcast, etc.**
          
          ## 🔁 Maintaining Your RSS Feed
          
          | Task | Reason |
          |------|--------|
          | Keep publishing episodes | Feed updates automatically |
          | Update metadata when needed | Title changes, author name, etc. |
          | Avoid changing the feed URL | Could break distribution to apps |
          | Back up episode files | Hosts can go down—keep copies |
          
          ## 🧠 Common Mistakes to Avoid
          
          - ❌ Uploading large artwork files (max 512KB recommended)
          - ❌ Forgetting to fill out episode titles/descriptions
          - ❌ Using multiple feeds for the same show (confuses directories)
          - ❌ Manually editing RSS feeds without understanding XML
          
          ## 💡 Pro Tips
          
          - Use dynamic show notes templates to save time
          - For monetization, choose a host that allows insertion tags in RSS
          - Check RSS feed health monthly via a validator
          - Always retain ownership of your RSS feed — don't rely on proprietary platforms that limit access
        `
      }
    },
    {
      id: 27,
      title: 'Submitting to Platforms (Spotify, Apple Podcasts, Google, etc.)',
      duration: '35 min',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
          # Submitting to Platforms (Spotify, Apple Podcasts, Google, etc.)
          
          ## 🔄 Why Submit to Directories?
          
          Submitting your RSS feed to major platforms ensures your podcast is available where listeners already are.
          
          - Expands reach, improves discoverability, and enhances engagement
          - Most platforms pull episodes automatically once linked
          
          ## 🛠️ Prerequisites Before Submission
          
          Make sure the following are ready before submission:
          
          - ✅ RSS feed is valid (test with Podba.se or CastFeedValidator)
          - ✅ Podcast title, author, and description are filled in
          - ✅ Cover artwork: JPEG/PNG, 1400–3000px, under 512KB
          - ✅ At least one published episode (some platforms require this)
          
          ## 📡 How to Submit to Major Platforms
          
          ### 1️⃣ Apple Podcasts
          
          <YouTubeVideoRenderer videoId="28sfdmxukrw" title="How to Submit to Major Platforms" />
          
          **Website:** https://podcasters.apple.com
          
          **Steps:**
          1. Sign in with an Apple ID
          2. Go to Apple Podcasts Connect
          3. Click "+" to add a show → Select "Add a show with an RSS feed"
          4. Paste your RSS feed URL
          5. Apple will validate and preview the feed
          6. Click Submit
          
          ⚠️ **Review can take up to 5 business days**
          
          ### 2️⃣ Spotify
          
          <YouTubeVideoRenderer videoId="1HZaN5fL1VY" title="Spotify" />
          
          **Website:** https://podcasters.spotify.com
          
          **Steps:**
          1. Log in or sign up
          2. Click "Add Your Podcast"
          3. Paste your RSS feed
          4. Spotify sends a verification code to the email listed in the feed
          5. Enter code and confirm podcast info
          6. Submit for instant listing (usually live within hours)
          
          ### 3️⃣ Google Podcasts (Now shifting to YouTube Music)
          
          <YouTubeVideoRenderer videoId="v2QMMjDDxIw" title="Google Podcasts (Now shifting to YouTube Music)" />
          
          **Website:** https://www.youtube.com/podcasts
          
          **Process (as of 2024):**
          - Submit your podcast to YouTube Studio and tag it as a podcast
          - Upload episodes as full-length videos (audio-only is accepted)
          - YouTube auto-generates an RSS-like distribution for YouTube Music
          
          ### 4️⃣ Amazon Music
          
          <YouTubeVideoRenderer videoId="Qkfuz-jSDS4" title="Amazon Music" />
          
          **Website:** https://podcasters.amazon.com
          
          **Steps:**
          1. Sign in with Amazon account
          2. Submit your RSS feed
          3. Fill in details and agree to terms
          4. Submit for review (typically live within 24–48 hours)
          
          ### 5️⃣ Other Directories
          
          - **Overcast:** Automatically pulls from Apple Podcasts
          - **Pocket Casts:** Auto-indexes or manual submission
          - **Castbox, Deezer, Listen Notes:** Each has manual submission or pulls from Apple
          - **Stitcher:** Retired as of 2023
          
          ## ✅ Best Practices
          
          | Tip | Why It Matters |
          |-----|----------------|
          | Use consistent metadata | Makes your show look professional |
          | Keep artwork under 512KB | Prevents rejection from Apple |
          | Respond to verification emails promptly | Ensures quick approval |
          | Monitor submission status | Some platforms email you if rejected |
          
          ## 📌 Summary Table
          
          | Platform | Submission Link | Approval Time |
          |----------|----------------|---------------|
          | Apple Podcasts | podcasters.apple.com | 1–5 days |
          | Spotify | podcasters.spotify.com | <1 hour |
          | YouTube Music | youtube.com/podcasts | Varies |
          | Amazon Music | podcasters.amazon.com | 1–2 days |
          | Overcast | Auto from Apple | Instant |
        `
      }
    },
    {
      id: 28,
      title: 'Creating Podcast Websites and Landing Pages',
      duration: '28 min',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
          # Creating Podcast Websites and Landing Pages
          
          ## 🎯 Why You Need a Podcast Website
          
          A dedicated website is essential for:
          
          | Purpose | Benefit |
          |---------|---------|
          | 🎧 **Central Hub** | All episodes, links, and info in one place |
          | 🔎 **SEO & Discoverability** | Helps users find your show through search engines |
          | 🎁 **Lead Capture & Monetization** | Collect emails, sell merch, offer memberships |
          | 📬 **RSS Feed Backup** | A backup destination if directories go down |
          | 📣 **Promotion** | Easier to share links to your domain vs. platforms |
          
          ## 🛠️ Website vs. Landing Page: What's the Difference?
          
          | Type | Features | Use Case |
          |------|----------|----------|
          | **Website** | Full multi-page site | For ongoing shows with multiple episodes |
          | **Landing Page** | Single-page with focused CTA | Ideal for launches, promos, or signups |
          
          ## ✅ Core Elements to Include
          
          <YouTubeVideoRenderer videoId="bF-gOr8uDec" title="Core Elements to Include" />
          
          Whether it's a website or landing page, include:
          
          - **Show Name & Logo**
          - **Embedded Player** (Spotify, Apple, or from host)
          - **Episode Listings** (or latest episode)
          - **Subscribe Buttons** (Spotify, Apple, Google, YouTube)
          - **About Section** (show description, host bio)
          - **Contact Form or Email**
          - **Call to Action (CTA)** – e.g., "Subscribe," "Join the newsletter," "Support the show"
          - **Social Media Links**
          - **SEO Elements** – meta title, keywords, image alt text
          
          ## 🧱 Tools to Build Podcast Websites
          
          | Platform | Description |
          |----------|-------------|
          | **Podpage** | Auto-generates a full website from your RSS feed |
          | **WordPress + Plugins** | Highly customizable with tools like PowerPress or Seriously Simple Podcasting |
          | **Buzzsprout, Anchor, Podbean** | Built-in website with every podcast feed |
          | **Carrd / Leadpages** | Ideal for landing pages (lightweight, simple) |
          | **Squarespace / Wix** | Drag-and-drop builders with podcast templates |
          
          ## 🌟 Best Practices for Podcast Websites
          
          <YouTubeVideoRenderer videoId="bsOh2dNm8U8" title="Best Practices for Podcast Websites" />
          
          - ✅ Use a custom domain (e.g., www.mypodcast.com)
          - ✅ Keep the design mobile-friendly
          - ✅ Include search bar for episode discovery
          - ✅ Display categories or tags if you have many episodes
          - ✅ Feature guest profiles or episode highlights
          - ✅ Add a newsletter opt-in to build audience retention
          - ✅ Enable Google Analytics for traffic tracking
          
          ## 🧪 Real-World Examples
          
          | Podcast Site | Features to Highlight |
          |--------------|----------------------|
          | **Podpage Demo** | Pulls episodes from RSS, auto-updates content |
          | **Freakonomics** | Blog + podcast integration, searchable archive |
          | **The Daily (NYT)** | Multi-format publishing, embedded players |
          
          ## 📌 Optional Add-ons
          
          - 💬 **Embedded Comments/Reviews**
          - 💰 **Donation Buttons** (Buy Me a Coffee, Patreon)
          - 📋 **Episode Transcripts** for accessibility and SEO
          - 📢 **Pop-ups** for newsletter signup or announcements
          
          ## 💡 Final Tip
          
          Think of your podcast website as your digital home base. Even if platforms change or shut down, this remains your permanent link to your audience.
        `
      }
    },
    {
      id: 29,
      title: 'Module 5 Quiz: Hosting & Distribution',
      duration: '15 min',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the primary role of a podcast hosting platform?',
            options: [
              'To promote your podcast on social media',
              'To store and deliver your audio files and generate your RSS feed',
              'To record and edit episodes',
              'To transcribe podcast episodes'
            ],
            correct: 1,
            explanation: 'The primary role of a podcast hosting platform is to store and deliver your audio files and generate your RSS feed for distribution to directories.'
          },
          {
            question: 'Which of the following is NOT typically offered by podcast hosting platforms?',
            options: [
              'Monetization tools',
              'Episode artwork creation',
              'Analytics',
              'RSS feed generation'
            ],
            correct: 1,
            explanation: 'Most hosting platforms don\'t offer in-depth episode artwork creation tools - this is typically done by the podcaster using separate design software.'
          },
          {
            question: 'Why is RSS feed control important?',
            options: [
              'It reduces audio file sizes',
              'It increases download speed',
              'It allows you to submit your podcast to directories and retain content ownership',
              'It makes your podcast go viral'
            ],
            correct: 2,
            explanation: 'RSS feed control is critical for distribution and maintaining independence - it allows you to submit to directories and retain ownership of your content.'
          },
          {
            question: 'Which podcast host is best for beginners seeking an easy-to-use interface and support?',
            options: [
              'Transistor',
              'Captivate',
              'Buzzsprout',
              'Anchor'
            ],
            correct: 2,
            explanation: 'Buzzsprout is known for its intuitive interface, strong analytics, and excellent support, making it ideal for beginners and semi-pro podcasters.'
          },
          {
            question: 'What is a major con of Anchor by Spotify?',
            options: [
              'Requires payment to start',
              'Only available in the U.S.',
              'Limited analytics and Spotify-centered',
              'No mobile app support'
            ],
            correct: 2,
            explanation: 'While Anchor is free and easy to use, it has limited analytics depth and tends to be Spotify-focused, which can be limiting for broader distribution strategies.'
          },
          {
            question: 'What tool is used to validate your podcast RSS feed before submission?',
            options: [
              'PodcastFinder',
              'Google Search Console',
              'CastFeedValidator',
              'Audacity'
            ],
            correct: 2,
            explanation: 'CastFeedValidator is a standard tool for checking RSS feed compliance and ensuring your feed meets directory requirements.'
          },
          {
            question: 'Which of the following is a core element required in a podcast RSS feed?',
            options: [
              'Host biography',
              'Episode transcript',
              'Podcast category',
              'Listener reviews'
            ],
            correct: 2,
            explanation: 'Podcast category is a required element that must match platform taxonomy (e.g., Education, Business, True Crime) for proper classification in directories.'
          },
          {
            question: 'What could happen if you change your RSS feed URL without updating platforms?',
            options: [
              'Your artwork disappears',
              'Your feed becomes slower',
              'You lose subscribers and break distribution',
              'Your audio files are compressed'
            ],
            correct: 2,
            explanation: 'Changing RSS feed URLs without proper redirection disrupts your audience and breaks distribution to podcast directories, potentially losing subscribers.'
          },
          {
            question: 'How long does it typically take for your podcast to appear on Spotify after submission?',
            options: [
              '5 business days',
              'Within hours',
              '3–4 weeks',
              'Instantaneously on all apps'
            ],
            correct: 1,
            explanation: 'Spotify is generally very fast at processing submissions, often making podcasts available within a few hours of RSS feed submission.'
          },
          {
            question: 'What is a best practice when creating a podcast website?',
            options: [
              'Use free hosting to save money',
              'Only post your most recent episode',
              'Avoid SEO elements to keep it simple',
              'Use a custom domain and mobile-friendly design'
            ],
            correct: 3,
            explanation: 'Using a custom domain and ensuring mobile-friendly design are essential best practices for professionalism, SEO, and user experience on podcast websites.'
          }
        ]
      }
    }
  ]
};
