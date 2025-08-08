import type { Lesson } from '@/types/course';

export const lesson3SubmittingToDirectories: Lesson = {
  id: 3,
  title: 'Submitting to Directories',
  duration: '60 min',
  type: 'video',
  content: [
    {
      id: 'why-submit-to-directories',
      type: 'video',
      title: 'Why Submit to Directories?',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Expands reach, improves discoverability, enhances engagement',
      textContent: `Submitting your podcast RSS feed to major platforms ensures your show reaches listeners where they already consume content, maximizing accessibility and engagement.

1. **Expands Reach**  
   **Benefit**: Connects your podcast to millions of listeners on popular platforms.  
   **On-demand access**: Submitting to directories ensures episodes are available for streaming or downloading on listeners' preferred platforms, broadening global reach.  
   Submitting your RSS feed to directories like Apple Podcasts, Spotify, and YouTube Music significantly enhances on-demand access by placing your podcast where listeners already are. With billions of users across these platforms, your episodes become instantly available for streaming or downloading, catering to diverse consumption habits like commuting, working out, or relaxing. For example, Spotify's global user base allows listeners in different time zones to access your content at their convenience. This broad distribution ensures your podcast reaches a wide audience, supporting flexible listening schedules and driving engagement through seamless accessibility across devices.

2. **Improves Discoverability**  
   **Benefit**: Platforms' search and recommendation algorithms promote your show.  
   **On-demand access**: Enhanced discoverability allows listeners to find and access episodes easily, encouraging instant consumption.  
   Directory submission boosts on-demand access by leveraging platforms' search and recommendation systems, making your podcast easier to find. For instance, Apple Podcasts' category-based browsing and Spotify's personalized playlists help listeners discover your show, prompting them to stream or download episodes immediately. Optimized metadata (e.g., titles, descriptions) ensures your podcast appears in relevant searches, such as "true crime podcasts." This discoverability supports flexible listening, whether during travel or leisure, ensuring global audiences can access your content anytime, enhancing engagement and growth.

3. **Enhances Engagement**  
   **Benefit**: Platform features like subscriptions and notifications keep listeners returning.  
   **On-demand access**: Engagement tools ensure listeners can access new episodes instantly, fostering loyalty.  
   Submitting to directories enhances on-demand access by leveraging platform features like subscriptions, push notifications, and playlists, which keep listeners engaged. For example, when listeners subscribe on Apple Podcasts, they receive instant updates for new episodes, enabling immediate streaming or downloading. This fosters loyalty, as listeners can access content during their daily routines, such as commutes or workouts. Platforms like Spotify also promote episodes through curated playlists, ensuring global accessibility and encouraging consistent engagement with your podcast.`
    },
    {
      id: 'prerequisites-valid-rss',
      type: 'video',
      title: 'Prerequisites - Valid RSS Feed',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Test with Podba.se or CastFeedValidator',
      textContent: `**Requirement**: Test with Podba.se or CastFeedValidator.  
**On-demand access**: A valid RSS feed ensures episodes are delivered without errors, enabling instant listener access.  
A valid RSS feed is essential for on-demand access, as errors in metadata or XML can prevent episodes from appearing on platforms like Spotify or Apple Podcasts. Tools like Podba.se Validator or CastFeedValidator check for issues, such as missing enclosure URLs or invalid categories, ensuring seamless distribution. A validated feed allows listeners to stream or download episodes instantly, supporting consumption during commutes or offline scenarios. By confirming feed health before submission, podcasters ensure global audiences can access content anytime, avoiding disruptions and maximizing reach.`
    },
    {
      id: 'prerequisites-metadata',
      type: 'video',
      title: 'Prerequisites - Complete Metadata',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Ensure all fields are filled accurately',
      textContent: `**Requirement**: Ensure all fields are filled accurately.  
**On-demand access**: Complete metadata ensures episodes are discoverable and accessible across platforms.  
Complete metadata—podcast title, author, and description—is critical for on-demand access, as it ensures your show is discoverable and professional on directories. A clear title like "Tech Trends" and a detailed description attract listeners browsing Apple Podcasts, encouraging them to stream or download episodes. The author field builds brand recognition, supporting repeat access. Accurate metadata, embedded in the RSS feed, ensures platforms index your content correctly, enabling global listeners to access episodes during daily activities like workouts or travel, boosting engagement.`
    },
    {
      id: 'prerequisites-artwork',
      type: 'video',
      title: 'Prerequisites - Cover Artwork',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Meet platform size and format guidelines',
      textContent: `**Requirement**: Meet platform size and format guidelines.  
**On-demand access**: Compliant artwork ensures episodes are visually appealing and accessible without delays.  
High-quality cover artwork (1400x1400px to 3000x3000px, under 512KB, JPEG/PNG) enhances on-demand access by making your podcast visually appealing on directories. Eye-catching artwork attracts listeners browsing Spotify, prompting them to stream or download episodes. Non-compliant artwork can lead to rejection by platforms like Apple Podcasts, delaying accessibility. By optimizing images with tools like Canva, podcasters ensure quick feed approval, enabling global listeners to access content during commutes or leisure, driving discoverability and engagement.`
    },
    {
      id: 'prerequisites-episode',
      type: 'video',
      title: 'Prerequisites - At Least One Published Episode',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Some platforms require an episode for submission',
      textContent: `**Requirement**: Some platforms require an episode for submission.  
**On-demand access**: A published episode ensures listeners can immediately engage with content upon submission.  
Having at least one published episode in your RSS feed is crucial for on-demand access, as platforms like Apple Podcasts often require it for submission. An episode allows listeners to stream or download content immediately, catering to their schedules—whether commuting or relaxing. A strong debut episode with clear metadata sets the tone for your podcast, encouraging engagement. By publishing an episode before submission, podcasters ensure directories can pull content instantly, supporting global accessibility and building listener trust from the start.`
    },
    {
      id: 'apple-podcasts',
      type: 'video',
      title: 'How to Submit to Major Platforms - Apple Podcasts',
      videoUrl: 'https://youtu.be/28sfdmxukrw',
      keyFeatures: 'Sign in with Apple ID, go to Podcasts Connect, add show with RSS feed, submit for review',
      textContent: `**Website**: podcasters.apple.com  
**Steps**: Sign in with Apple ID, go to Podcasts Connect, add show with RSS feed, submit for review (1–5 days).  
**On-demand access**: Apple Podcasts' vast user base ensures episodes are available for streaming or downloading globally.  
Submitting to Apple Podcasts via podcasters.apple.com enables on-demand access for millions of listeners worldwide. After signing in with an Apple ID, navigate to Podcasts Connect, click "+" to add a show, and paste your RSS feed URL. Apple validates and previews the feed before submission, with reviews taking up to 5 days. Once approved, episodes are available for streaming or downloading, supporting listeners' varied schedules, like commutes or workouts. Apple's robust platform ensures seamless distribution, making your podcast accessible anytime, anywhere, and driving global engagement.`
    },
    {
      id: 'spotify',
      type: 'video',
      title: 'How to Submit to Major Platforms - Spotify',
      videoUrl: 'https://youtu.be/9HaqGGkKK9w',
      keyFeatures: 'Sign up, add podcast, paste RSS feed, verify via email code, submit for instant listing',
      textContent: `**Website**: podcasters.spotify.com  
**Steps**: Sign up, add podcast, paste RSS feed, verify via email code, submit for instant listing.  
**On-demand access**: Spotify's instant listing ensures episodes are quickly available for streaming or downloading.  
Submitting to Spotify via podcasters.spotify.com maximizes on-demand access due to its fast approval process, often within hours. After signing up, paste your RSS feed URL, verify ownership with an email code, and confirm details. Once submitted, episodes are instantly available for streaming or downloading, catering to listeners during daily routines like travel or exercise. Spotify's global reach and playlist features enhance discoverability, ensuring your podcast is accessible to diverse audiences worldwide, driving immediate engagement.`
    },
    {
      id: 'google-podcasts',
      type: 'video',
      title: 'How to Submit to Major Platforms - Google Podcasts (Now YouTube Music)',
      videoUrl: 'https://youtu.be/zlbdMwM4rdk',
      keyFeatures: 'Submit via YouTube Studio, tag as podcast, upload episodes as audio-only videos',
      textContent: `**Website**: youtube.com/podcasts  
**Steps**: Submit via YouTube Studio, tag as podcast, upload episodes as audio-only videos.  
**On-demand access**: YouTube Music's integration ensures episodes are accessible via audio or video formats.  
As of 2024, Google Podcasts has transitioned to YouTube Music, enhancing on-demand access through youtube.com/podcasts. In YouTube Studio, tag your content as a podcast and upload episodes as audio-only videos or full-length content, which YouTube auto-distributes to its music platform. This ensures listeners can stream or download episodes anytime, supporting consumption during commutes or leisure. YouTube's vast user base and search capabilities boost discoverability, making your podcast accessible globally and fostering engagement across diverse devices.`
    },
    {
      id: 'amazon-music',
      type: 'video',
      title: 'How to Submit to Major Platforms - Amazon Music',
      videoUrl: 'https://youtu.be/Qkfuz-jSDS4',
      keyFeatures: 'Sign in, submit RSS feed, agree to terms, review',
      textContent: `**Website**: podcasters.amazon.com  
**Steps**: Sign in, submit RSS feed, agree to terms, review (1–2 days).  
**On-demand access**: Amazon Music's growing platform ensures episodes are available for instant listener access.  
Submitting to Amazon Music via podcasters.amazon.com enhances on-demand access by tapping into Amazon's expanding listener base. Sign in, submit your RSS feed, fill in details, and agree to terms. Reviews typically take 1–2 days, after which episodes are available for streaming or downloading. This supports listeners' flexible schedules, such as during workouts or travel. Amazon's integration with Audible further boosts reach, ensuring global accessibility and encouraging engagement through seamless episode delivery on a trusted platform.`
    },
    {
      id: 'other-directories',
      type: 'video',
      title: 'How to Submit to Major Platforms - Other Directories',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Overcast, Pocket Casts, Castbox, Deezer, Listen Notes',
      textContent: `**Examples**: Overcast, Pocket Casts, Castbox, Deezer, Listen Notes.  
**On-demand access**: Niche directories expand accessibility, ensuring episodes reach diverse audiences.  
Submitting to smaller directories like Overcast, Pocket Casts, or Castbox expands on-demand access by reaching niche audiences. Overcast auto-pulls from Apple Podcasts, while others offer manual submission portals. These platforms cater to dedicated podcast listeners, ensuring episodes are available for streaming or downloading during daily activities like commuting or relaxing. By diversifying distribution, podcasters enhance global reach, making content accessible across multiple apps and devices, boosting discoverability and listener engagement.`
    },
    {
      id: 'best-practices-consistent-metadata',
      type: 'video',
      title: 'Best Practices - Use Consistent Metadata',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Maintains a professional appearance across platforms',
      textContent: `**Why**: Maintains a professional appearance across platforms.  
**On-demand access**: Consistent metadata ensures seamless episode discoverability and access.  
Consistent metadata (title, author, description) across your RSS feed and directories enhances on-demand access by presenting a professional, unified brand. For example, matching titles on Spotify and Apple Podcasts avoid confusion, encouraging listeners to stream or download episodes. Consistency also aids platform algorithms in indexing your content, improving searchability. This ensures global listeners can access episodes during commutes or workouts, maintaining engagement through a polished presence across diverse platforms.`
    },
    {
      id: 'best-practices-artwork',
      type: 'video',
      title: 'Best Practices - Keep Artwork Under 512KB',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Prevents rejection from platforms like Apple Podcasts',
      textContent: `**Why**: Prevents rejection from platforms like Apple Podcasts.  
**On-demand access**: Compliant artwork ensures quick approval, making episodes accessible without delays.  
Keeping artwork under 512KB and within 1400–3000px ensures on-demand access by avoiding rejection from strict platforms like Apple Podcasts. Oversized files can delay feed approval, preventing listeners from streaming or downloading episodes. Using tools like Canva to optimize images in JPEG/PNG format ensures quick processing, making content available for global audiences during daily routines like travel or exercise. Compliant artwork supports seamless distribution, enhancing discoverability and listener engagement.`
    },
    {
      id: 'best-practices-verification',
      type: 'video',
      title: 'Best Practices - Respond to Verification Emails Promptly',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Speeds up approval on platforms like Spotify',
      textContent: `**Why**: Speeds up approval on platforms like Spotify.  
**On-demand access**: Quick verification ensures episodes are accessible to listeners sooner.  
Promptly responding to verification emails, such as Spotify's ownership code, accelerates on-demand access by ensuring fast approval. Delays in verification can postpone episode availability, frustrating listeners eager to stream or download content. For example, Spotify's instant listing relies on quick email confirmation, enabling access during commutes or workouts. By checking inboxes regularly and responding promptly, podcasters ensure episodes reach global audiences without delay, maintaining engagement and accessibility.`
    },
    {
      id: 'best-practices-monitoring',
      type: 'video',
      title: 'Best Practices - Monitor Submission Status',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Platforms may notify you of rejections or issues',
      textContent: `**Why**: Platforms may notify you of rejections or issues.  
**On-demand access**: Monitoring ensures episodes remain accessible by resolving issues quickly.  
Monitoring submission status ensures on-demand access by catching rejections or errors early. Platforms like Apple Podcasts may email you about issues, such as invalid metadata, that could block episode availability. Regularly checking submission portals or validator tools like Podba.se helps resolve problems, ensuring listeners can stream or download content during daily routines. Proactive monitoring maintains seamless distribution, supporting global accessibility and preventing disruptions in listener engagement.`
    },
    {
      id: 'submission-summary-table',
      type: 'video',
      title: 'Submission Summary Table',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Platform comparison with submission links and approval times',
      textContent: `| Platform | Submission Link | Approval Time |
| ----- | ----- | ----- |
| Apple Podcasts | podcasters.apple.com | 1–5 days |
| Spotify | podcasters.spotify.com | <1 hour |
| YouTube Music | youtube.com/podcasts | Varies |
| Amazon Music | podcasters.amazon.com | 1–2 days |
| Overcast | Auto from Apple | Instant |

This table provides a quick reference for submission requirements and expected approval times across major platforms.`
    },
    {
      id: 'final-checklist',
      type: 'video',
      title: 'Final Checklist',
      videoUrl: 'https://youtu.be/IEWJpxq6HVI',
      keyFeatures: 'Essential steps for successful directory submission',
      textContent: `**Directory Submission Checklist:**

✅ **Validated RSS feed** with Podba.se or CastFeedValidator
✅ **Complete metadata** (title, author, description) filled out
✅ **Compliant artwork** (1400x1400px, <512KB, JPEG/PNG)
✅ **At least one published episode** in the feed
✅ **Submitted to Apple Podcasts** via podcasters.apple.com
✅ **Submitted to Spotify** via podcasters.spotify.com
✅ **Submitted to YouTube Music** via youtube.com/podcasts
✅ **Submitted to Amazon Music** via podcasters.amazon.com
✅ **Responded to verification emails** promptly
✅ **Monitored submission status** for any issues

This checklist ensures your podcast reaches maximum audiences across all major platforms.`
    }
  ]
}; 
