import type { Lesson } from '@/types/course';

export const lesson3AddingMusicAndExporting: Lesson = {
  id: 3,
  title: 'Adding Intros, Outros, and Music',
  duration: '60 min',
  type: 'video',
  content: [
    {
      id: 'why-add-music',
      type: 'video',
      title: 'Why Add Intros, Outros, and Music?',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Brand Identity and Listener Experience',
      textContent: `- 🎯 **Establishes your brand identity**
- 🎧 **Improves listener experience**
- 🧠 **Increases memorability**
- 📍 **Sets mood and tone** for the episode`
    },
    {
      id: 'podcast-structure',
      type: 'video',
      title: 'Understanding Podcast Structure',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Typical Episode Flow',
      textContent: `A typical podcast structure:

🎵 Intro Music → 🎙️ Host Intro → 📚 Main Content → 🔚 Outro Message → 🎵 Outro Music

### **✅ Components:**

| Part | Purpose | Typical Length |
| ----- | ----- | ----- |
| Intro | Grab attention, state purpose | 15–30 seconds |
| Outro | Wrap-up, CTA, thank you | 15–30 seconds |
| Music Beds | Fill gaps, transitions, background | Varies |`
    },
    {
      id: 'sourcing-music-purpose',
      type: 'video',
      title: 'Purpose of Sourcing Music Legally',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Enhance podcasts while complying with copyright laws',
      textContent: `Sourcing music legally for podcasts ensures you enhance episodes with intros, outros, or background tracks while adhering to copyright laws, avoiding legal issues or platform takedowns. Legally sourced music, such as royalty-free tracks from YouTube Audio Library, adds professionalism to solo, interview, or narrative podcasts recorded via Riverside.fm, without risking penalties on platforms like Spotify. For example, a royalty-free intro can set the tone for a true crime podcast. Legal sourcing protects your content, supports artists, and ensures uninterrupted distribution. Using tools like Epidemic Sound or Creative Commons licenses, podcasters can access high-quality music affordably, maintaining ethical standards and enhancing listener engagement with polished audio.`
    },
    {
      id: 'free-music-sources',
      type: 'video',
      title: 'Free/Low-Cost Music Sources',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'YouTube Audio Library, Incompetech, Free Music Archive, and more',
      textContent: `Several platforms provide free or low-cost music for podcasts, ideal for budget-conscious creators. **YouTube Audio Library** offers royalty-free tracks and sound effects, downloadable for free, with most requiring no attribution, perfect for intros or transitions. **Incompetech**, by Kevin MacLeod, provides royalty-free tracks under Creative Commons (CC-BY) licenses, requiring artist credit, suitable for narrative podcasts. **Free Music Archive** hosts diverse, free tracks, often under Creative Commons, ideal for unique vibes. **Epidemic Sound** ($15/month) and **Artlist** or **Soundstripe** (~$10-$20/month subscriptions) offer premium royalty-free libraries for professional productions, like interviews recorded with a Rode PodMic. These sources ensure legal, high-quality music, balancing cost and professionalism for seamless integration into episodes, enhancing listener experience across formats.`
    },
    {
      id: 'licensing-tips',
      type: 'video',
      title: 'Licensing Tips',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Royalty-free and Creative Commons (CC-BY) licenses',
      textContent: `Prioritize **royalty-free** or **Creative Commons (CC-BY)** licenses to ensure legal music use in podcasts. Royalty-free music, like that from Epidemic Sound, requires a one-time or subscription fee but allows unlimited use without ongoing royalties, ideal for commercial podcasts on Apple Podcasts. CC-BY licenses, common on Incompetech or Free Music Archive, permit use with proper artist credit (e.g., "Music by Kevin MacLeod" in show notes). Always verify license terms, as some require attribution or restrict commercial use. For example, a CC-BY track in a Zencastr episode needs credits in the description. Keep license records to avoid copyright strikes. These practices ensure compliance, support artists, and protect your podcast, making them essential for professional, hassle-free production.`
    },
    {
      id: 'integrating-music-audacity',
      type: 'video',
      title: 'Integrating Music in Audacity',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Simple multitrack editing and effects',
      textContent: `Audacity's multitrack interface makes music integration straightforward for podcasters. Import music files (e.g., from YouTube Audio Library) via File > Import > Audio, placing them on separate tracks from voice recordings. Use the Time Shift Tool to align music with vocals, adjusting timing for intros or outros. Apply Fade In/Out effects (Effect > Fade In/Out) for smooth transitions, preventing abrupt starts or stops. Adjust track volumes using the gain slider to balance music and voice levels, ensuring vocals remain clear. For example, lower music to -20 dB while keeping voice at -16 LUFS. Export the final mix via File > Export > Export as MP3, selecting 128-320 kbps for quality and compatibility with platforms like Spotify. Audacity's free, accessible tools suit beginners using USB mics like the Audio-Technica ATR2100x, though it lacks advanced automation compared to premium software.`
    },
    {
      id: 'integrating-music-adobe-audition',
      type: 'video',
      title: 'Integrating Music in Adobe Audition',
      videoUrl: 'https://youtu.be/iPrFV71EjnA',
      keyFeatures: 'Multitrack editing, ducking, and precise adjustments',
      textContent: `Adobe Audition's Multitrack Editor streamlines music integration for podcasts. Create a new session (File > New > Multitrack Session), then drag music (e.g., from Artlist) to Track 1 and voice clips (e.g., from a Shure SM7B) to Track 2. Adjust volume using Clip Gain or the Mixer Panel to balance music and vocals, targeting -16 LUFS for voices. Apply Essential Sound > Ducking to automatically lower music behind dialogue, ensuring clarity. Use Fade Handles or Fade Effects for smooth intro/outro transitions, and the Razor Tool to trim or arrange clips, like cutting a long music bed. Export the final episode via File > Export > Multitrack Mixdown as a WAV or MP3. Audition's non-destructive editing ensures flexibility, ideal for narrative or interview podcasts needing professional polish, though its $20.99/month cost suits experienced users seeking precision.`
    },
    {
      id: 'integrating-music-descript',
      type: 'video',
      title: 'Integrating Music in Descript',
      videoUrl: 'https://youtu.be/t86rG7hJJoU',
      keyFeatures: 'Simple drag-and-drop and AI-enhanced balancing',
      textContent: `Descript simplifies music integration with its intuitive, text-based interface. Drag and drop music files (e.g., from YouTube Audio Library) into the project for intros/outros. Align audio segments in the transcript timeline, moving clips to sync music with vocals from a Riverside.fm recording. Adjust volume using per-clip sliders to balance tracks, ensuring voices (e.g., recorded with an Audio-Technica ATR2100x) remain clear. Apply Studio Sound under "Effects" for AI-driven volume leveling and vocal enhancement, approximating -16 LUFS. Right-click clips to add Fade In/Out for smooth transitions. Export via File > Export > Audio (MP3/WAV) for platforms like Spotify. Descript's $12/month subscription and ease of use suit beginners or podcasters needing quick turnarounds, though it offers less mixing precision than Audition. Ideal for solo or interview formats with minimal editing expertise.`
    },
    {
      id: 'best-practices',
      type: 'video',
      title: 'Best Practices',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Professional Music Integration',
      textContent: `| Tip | Why It Matters |
| ----- | ----- |
| Keep intros short (15–30s) | Listeners want to get to the content fast |
| Fade music under voice | Ensures clarity of spoken words |
| Use the same intro/outro every episode | Builds familiarity and brand identity |
| Normalize audio levels | Avoids abrupt volume changes |
| Credit music creators | Avoid copyright issues |`
    },
    {
      id: 'exporting-files-purpose',
      type: 'video',
      title: 'Why Exporting Properly Matters',
      videoUrl: 'https://youtu.be/wfA1vW_XXzc',
      keyFeatures: 'Quality, compatibility, and discoverability',
      textContent: `- 🎧 **Audio quality consistency** across platforms
- ⚙️ **Compatibility** with distribution services
- 🔍 **SEO and discoverability** (via metadata and ID3 tags)
- ⏳ **Faster uploads** with smaller file sizes`
    },
    {
      id: 'export-formats',
      type: 'video',
      title: 'Choosing the Right Export Format',
      videoUrl: 'https://youtu.be/wfA1vW_XXzc',
      keyFeatures: 'MP3, WAV, and AAC options',
      textContent: `| Format | When to Use | Notes |
| ----- | ----- | ----- |
| **MP3** | ✅ Most common | Universal, small size, supported everywhere |
| **WAV** | For mastering or archiving | High quality but large file size |
| **AAC (M4A)** | Optional, for Apple | High-quality alternative, not universal |

### **🎯 Recommended Settings for Podcasts:**

- **Format:** MP3
- **Bitrate:** 128 kbps (CBR or ABR preferred)
- **Sample Rate:** 44.1 kHz
- **Channels:** Stereo or Mono (Mono preferred for voice-only shows)`
    },
    {
      id: 'exporting-audacity',
      type: 'video',
      title: 'Exporting in Audacity',
      videoUrl: 'https://youtu.be/wfA1vW_XXzc',
      keyFeatures: 'Simple MP3 export with metadata',
      textContent: `Audacity, a free, open-source editor, offers straightforward exporting for podcast episodes. After finalizing edits—removing silences, adjusting levels to -16 LUFS, and adding music (e.g., from YouTube Audio Library)—export via File > Export > Export as MP3. Set the bitrate to 128 kbps or 160 kbps with Constant Bitrate (CBR) for consistent quality, ideal for platforms like Spotify. Use the Metadata Editor to add tags: Title (e.g., "Episode 01: Podcast Basics"), Artist (your name), Album (show title), Year (2025), Genre (Podcast), and Comments (e.g., "Subscribe on Apple Podcasts"). Save the file with a clear name, like *Ep01_IntroToPodcasting.mp3*. This ensures compatibility and searchability for uploads to hosts like Buzzsprout. Audacity's simplicity suits beginners using a Rode PodMic setup, delivering professional audio on a budget, though it lacks advanced automation compared to Adobe Audition.`
    },
    {
      id: 'exporting-adobe-audition',
      type: 'video',
      title: 'Exporting in Adobe Audition',
      videoUrl: 'https://youtu.be/MmWIkh8wiB0',
      keyFeatures: 'Advanced mixdown with precise settings',
      textContent: `Adobe Audition, a professional DAW, provides robust exporting options for podcasts. After editing (e.g., balancing vocals from a Shure SM7B and music from Epidemic Sound), export via File > Export > Multitrack Mixdown > Entire Session. Choose MP3 format, set Sample Rate to 44100 Hz, and Bitrate to 128 kbps CBR for compatibility with hosts like Podbean. Select Mono or Stereo based on your podcast (mono for voice-heavy, stereo for music-rich). Add metadata via "ID3 Tags" in the export window, including Title (e.g., "Episode 02: Storytelling"), Author, Episode number, and more. Save with a clear filename, like *Ep02_Storytelling.mp3*. Audition's non-destructive multitrack editing and precise settings ensure broadcast-quality files, ideal for complex narrative or interview podcasts. Its $20.99/month cost suits professionals seeking precision over Audacity's free but basic export tools.`
    },
    {
      id: 'exporting-descript',
      type: 'video',
      title: 'Exporting in Descript',
      videoUrl: 'https://youtu.be/q_7aVF9TCjI',
      keyFeatures: 'AI-enhanced, user-friendly export',
      textContent: `Descript's intuitive interface simplifies podcast exporting. After editing—aligning vocals (e.g., from Riverside.fm) and music (e.g., from Free Music Archive) with Studio Sound for -16 LUFS—click Publish > Export > Audio. Choose MP3 format with Medium (128 kbps) or High (192 kbps) bitrate for quality and compatibility with hosts like Anchor. Add metadata in the export panel, including Title, Artist, and Comments, or edit later with external tools like MP3Tag. Save with a clear name, like *Ep01_PodcastBasics.mp3*. Descript's AI-driven leveling and text-based editing streamline the process, ideal for beginners or podcasters needing quick turnarounds for solo or interview episodes. While its $12/month subscription offers less mixing control than Audition, it excels in efficiency for modern workflows, especially for repurposing content into social clips.`
    },
    {
      id: 'metadata-id3-tags',
      type: 'video',
      title: 'Metadata and ID3 Tags',
      videoUrl: 'https://youtu.be/ZL9fo_Fg-mE',
      keyFeatures: 'Enhance searchability and organization',
      textContent: `Metadata and ID3 tags make podcasts searchable and organized on platforms like Apple Podcasts. Recommended tags include: Title (e.g., "Episode 01: Introduction to Editing"), Artist (your name or podcast name), Album (show title), Year (2025), Genre (Podcast, Education, etc.), and Comment (e.g., "Subscribe on Spotify & Apple"). Use Audacity's Metadata Editor during export, Adobe Audition's ID3 Tag Editor in the mixdown window, or Descript's export panel (with limited options, supplemented by MP3Tag). For bulk editing, MP3Tag, a free tool, allows tagging multiple episodes efficiently. For example, tag a Zencastr-recorded episode to ensure proper display on Spotify. Accurate metadata enhances discoverability, organizes your catalog, and aligns with professional standards, ensuring listeners find and engage with your content easily.`
    },
    {
      id: 'preparing-distribution',
      type: 'video',
      title: 'Preparing for Hosting/Distribution',
      videoUrl: 'https://youtu.be/Z2pNVt4s_Fo',
      keyFeatures: 'Optimize files for upload and playback',
      textContent: `After exporting, prepare your podcast for hosting and distribution. Ensure file size is under 100MB (e.g., a 30-minute MP3 at 128 kbps is ~30MB) for faster uploads to hosts like Anchor, Buzzsprout, or Podbean. Play-test the full episode with headphones (e.g., Sony MDR-7506) to confirm clarity, checking for issues like unbalanced music or clipping. Verify ID3 tags using MP3Tag or host platforms to ensure proper display. Use clear filenames (e.g., *Ep01_IntroToPodcasting.mp3*) for organization. Upload to your host, ensuring compatibility with platforms like Spotify. For example, test a Riverside.fm episode on multiple devices before uploading to Buzzsprout. These steps ensure seamless distribution, professional presentation, and listener satisfaction, minimizing technical issues and maximizing reach across podcast platforms.`
    },
    {
      id: 'final-checklist',
      type: 'video',
      title: 'Final Checklist',
      videoUrl: 'https://youtu.be/Z2pNVt4s_Fo',
      keyFeatures: 'Ensure export quality and readiness',
      textContent: `**Before distribution, use this checklist:**

- **Exported in MP3 format**: Ensure the file is MP3 for compatibility. ✅ / ❌
- **Bitrate set to 128 kbps**: Balances quality and file size. ✅ / ❌
- **Metadata (ID3 tags) completed**: Include Title, Artist, Album, etc. ✅ / ❌
- **File size under 100MB**: Keeps uploads efficient. ✅ / ❌
- **Episode tested for clarity**: Play-test with headphones on multiple devices. ✅ / ❌

This checklist ensures your episode, whether edited in Audacity or Descript, is optimized for hosting and listener enjoyment, maintaining professional standards for platforms like Apple Podcasts.`
    }
  ]
}; 
