import type { Lesson } from '@/types/course';

export const lesson1IntroductionToEditingTools: Lesson = {
  id: 1,
  title: 'Introduction to Editing Tools',
  duration: '75 min',
  type: 'video',
  content: [
    {
      id: 'why-editing-matters',
      type: 'video',
      title: 'Why This Topic Matters',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Professional Audio Quality',
      textContent: `No matter how good your recording setup is, editing is where the **magic happens** — removing mistakes, enhancing audio, adding music, and creating a polished listening experience.

Choosing the right editing tool can:
- Save time
- Improve quality
- Simplify your workflow

Understanding the differences helps you pick the right tool for your podcasting goals.`
    },
    {
      id: 'editing-tools-overview',
      type: 'video',
      title: 'Overview of Editing Tools',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Tool Comparison and Selection',
      textContent: `| Tool | Best For | Platform | Skill Level | Price |
| ----- | ----- | ----- | ----- | ----- |
| **Audacity** | Basic to intermediate editing | Windows, Mac, Linux | Beginner-friendly | Free |
| **Adobe Audition** | Professional, detailed editing | Windows, Mac | Intermediate to pro | Paid (Adobe CC) |
| **Descript** | Text-based, fast editing | Windows, Mac | Beginner to intermediate | Free + Paid plans |`
    },
    {
      id: 'audacity-overview',
      type: 'video',
      title: 'What Is Audacity?',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Free, open-source audio editor for beginners',
      textContent: `Audacity is a free, open-source audio editing software ideal for beginner and hobbyist podcasters. Available on Windows, macOS, and Linux, it offers robust tools for recording and editing audio, making it accessible for those starting with minimal budget. With a straightforward interface, Audacity supports WAV, MP3, and other formats, allowing users to record via USB or XLR mics (e.g., Rode PodMic with Focusrite Scarlett 2i2) and edit with precision. Its open-source nature ensures regular community-driven updates, and it's compatible with platforms like Riverside.fm for importing remote recordings. Audacity is perfect for podcasters learning the ropes, offering essential features without the cost of premium software like Adobe Audition. It's widely used for solo, interview, or narrative podcasts, providing a reliable foundation for producing clean, professional audio on a budget, with flexibility for growth as skills develop.`
    },
    {
      id: 'audacity-features',
      type: 'video',
      title: 'Audacity Key Features',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Multitrack editing, effects, and plugin support',
      textContent: `Audacity's key features make it a powerful tool for podcast editing. Multitrack editing allows you to work with multiple audio tracks (e.g., host, guest, music) simultaneously, ideal for interviews or layered narrative podcasts. Tools like cut, trim, fade, and silence enable precise edits to remove errors or pauses, while noise reduction and effects (e.g., compression, EQ) enhance audio quality. Support for VST and LADSPA plugins expands functionality, adding advanced effects like reverb or auto-tune. Audacity exports to high-quality formats like WAV or 320kbps MP3, compatible with platforms like Spotify. For example, you can import a Zencastr recording, apply noise reduction, and export a polished episode. These features make Audacity versatile for beginners, offering professional-grade editing without cost, perfect for podcasters refining raw recordings into engaging episodes with minimal setup.`
    },
    {
      id: 'audacity-best-for',
      type: 'video',
      title: 'Audacity Best For',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Budget-friendly editing and learning fundamentals',
      textContent: `Audacity is best suited for new podcasters on a budget, those needing basic audio cleanup, and anyone learning editing fundamentals. Its free price tag makes it accessible for hobbyists or startups, eliminating the need for costly subscriptions like Auphonic ($11/month). For example, a beginner using a USB mic like the Audio-Technica ATR2100x can record, trim filler words, and apply basic EQ in Audacity to produce clean episodes. It's ideal for simple tasks like cutting pauses or balancing levels in solo or interview podcasts recorded via SquadCast. Audacity's straightforward tools help users master core editing skills, such as syncing tracks or applying fades, building a foundation for advanced software later. Its versatility suits podcasters prioritizing cost-effectiveness and simplicity while delivering professional results, making it a go-to for those starting their podcasting journey or managing low-budget productions.`
    },
    {
      id: 'audacity-tips',
      type: 'video',
      title: 'Audacity Tips',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Labels, backups, and noise reduction techniques',
      textContent: `To maximize Audacity's potential, use these practical tips. Add labels (Ctrl+B) to mark sections like errors, intros, or key quotes, streamlining navigation during editing (e.g., note a cough at 5:23). Always keep an original backup of raw files on cloud storage (e.g., Google Drive) or an external drive before editing to prevent data loss. Use the "Noise Profile" and "Noise Reduction" combo to clean up background sounds: select a silent section, capture the noise profile, then apply 24-30 dB reduction to remove hiss or hums from recordings (e.g., a fan in a Riverside.fm session). These techniques enhance efficiency, especially for beginners editing multi-guest tracks. For example, labeling a guest's low-volume section helps you apply amplification later. These practices ensure organized, high-quality edits, making Audacity a reliable tool for professional podcast production on a budget.`
    },
    {
      id: 'audacity-limitations',
      type: 'video',
      title: 'Audacity Limitations',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Outdated interface and limited advanced features',
      textContent: `Audacity has limitations that podcasters should consider. Its interface, though functional, feels outdated compared to modern tools like Adobe Audition, with a less intuitive design that can slow workflows for complex projects. It lacks built-in transcription, requiring external tools like Descript ($12/month) for text-based editing, which can be a drawback for narrative podcasts. Non-destructive editing is limited, meaning changes are applied directly to tracks, risking mistakes without easy undo options (unlike Reaper's layered approach). For example, heavy edits on a multi-track interview may require frequent saving to avoid errors. While Audacity supports plugins, it lacks advanced automation or AI-driven features found in premium software. These limitations make it less ideal for professional studios or complex productions but manageable for beginners focused on basic editing and cost savings.`
    },
    {
      id: 'adobe-audition-overview',
      type: 'video',
      title: 'What Is Adobe Audition?',
      videoUrl: 'https://www.youtube.com/watch?v=5O71pkMEPXI&utm_source=chatgpt.com',
      keyFeatures: 'Professional DAW for detailed audio control',
      textContent: `Adobe Audition is a professional-grade Digital Audio Workstation (DAW) designed for podcasters seeking precise control over audio production. Part of Adobe Creative Cloud, it offers advanced tools for recording, editing, and mixing, ideal for achieving polished, broadcast-quality results. Compatible with XLR mics (e.g., Rode PodMic via Focusrite Scarlett 2i2) and platforms like Riverside.fm, Audition supports WAV, MP3, and other formats. Its robust feature set suits complex projects, from solo episodes to narrative podcasts with intricate sound design. While requiring a subscription ($20.99/month standalone), it integrates seamlessly with tools like Premiere Pro, enhancing workflows for multimedia creators. Audition is perfect for producers aiming for professional-grade audio, offering unmatched flexibility and precision for podcasts demanding high production value, whether in studio or remote setups.`
    },
    {
      id: 'adobe-audition-features',
      type: 'video',
      title: 'Adobe Audition Key Features',
      videoUrl: 'https://www.youtube.com/watch?v=5O71pkMEPXI&utm_source=chatgpt.com',
      keyFeatures: 'Advanced editing, noise reduction, and integration',
      textContent: `Adobe Audition's key features make it a powerhouse for podcast editing. Advanced multitrack and waveform editing allow precise control over multiple tracks (e.g., host, guest, music), ideal for interviews or layered narratives. Real-time noise reduction and EQ eliminate background noise and enhance vocal clarity, while spectral frequency editing visually removes hums or clicks with surgical accuracy. Auto-ducking automatically lowers music under voices, streamlining sound mixing. Integration with Adobe Creative Cloud, including Premiere Pro, supports seamless audio-video workflows for video podcasts or multimedia projects. For example, you can import a SquadCast recording, apply dynamic processing, and export a -16 LUFS WAV for Spotify. These features deliver professional polish, making Audition ideal for podcasters needing advanced tools to craft immersive, high-quality episodes with complex audio elements, surpassing free options like Audacity.`
    },
    {
      id: 'adobe-audition-best-for',
      type: 'video',
      title: 'Adobe Audition Best For',
      videoUrl: 'https://www.youtube.com/watch?v=5O71pkMEPXI&utm_source=chatgpt.com',
      keyFeatures: 'Pro-level polish and complex productions',
      textContent: `Adobe Audition is best for producers, audio engineers, or creators aiming for professional-level polish, as well as narrative, fiction, or sound-rich podcasts. Its advanced tools excel in crafting cinematic audio, making it ideal for scripted shows with foley, music, or layered effects, unlike simpler tools like Audacity. Teams with Adobe Creative Cloud access benefit from integrated workflows, syncing audio with video in Premiere Pro for video podcasts. For example, a producer using a Shure SM7B can refine multi-guest Zencastr recordings with spectral editing for flawless results. Audition suits podcasters with editing experience or those investing in high production value, delivering broadcast-quality audio for genres like true crime or storytelling. Its precision and flexibility make it a top choice for professionals or ambitious creators seeking to elevate their podcast's audio quality and stand out in competitive markets.`
    },
    {
      id: 'adobe-audition-tips',
      type: 'video',
      title: 'Adobe Audition Tips',
      videoUrl: 'https://www.youtube.com/watch?v=5O71pkMEPXI&utm_source=chatgpt.com',
      keyFeatures: 'Essential Sound, non-destructive editing, batch processing',
      textContent: `Maximize Adobe Audition's efficiency with these tips. Use the "Essential Sound" panel to quickly tag and clean up audio tracks (e.g., dialogue, music), applying presets for compression, EQ, and noise reduction with one click. Always work in non-destructive multitrack mode to preserve original files, allowing experimentation without risking data loss—unlike Audacity's limited undo options. Use batch processing to apply consistent effects (e.g., normalization to -16 LUFS) across multiple files, saving time for multi-episode projects recorded via Riverside.fm. For example, batch process guest tracks to remove hiss or balance levels. These practices streamline workflows, especially for complex edits like removing clicks in spectral view or auto-ducking music. By leveraging these features, podcasters can achieve professional results efficiently, making Audition a powerful tool for high-quality podcast production, even for users transitioning from simpler software.`
    },
    {
      id: 'adobe-audition-limitations',
      type: 'video',
      title: 'Adobe Audition Limitations',
      videoUrl: 'https://www.youtube.com/watch?v=5O71pkMEPXI&utm_source=chatgpt.com',
      keyFeatures: 'Steep learning curve and subscription cost',
      textContent: `Adobe Audition has limitations to consider. Its steeper learning curve can overwhelm beginners, as its advanced interface and feature set (e.g., spectral editing, multitrack routing) require time to master compared to Audacity's simplicity. The subscription cost ($20.99/month standalone or $59.99/month for Creative Cloud) is a barrier for budget-conscious podcasters, unlike free tools. For example, hobbyists editing basic solo episodes may find the cost unjustified for simple cuts and fades. While Audition offers non-destructive editing, its complexity can slow workflows for users unfamiliar with DAWs, and it lacks built-in transcription, requiring external tools like Descript ($12/month). These drawbacks make it less ideal for novices or low-budget projects but manageable for professionals willing to invest time and money in mastering a premium tool for top-tier podcast audio production.`
    },
    {
      id: 'descript-overview',
      type: 'video',
      title: 'What Is Descript?',
      videoUrl: 'https://www.youtube.com/watch?v=oNACZy0VBLg&utm_source=chatgpt.com',
      keyFeatures: 'AI-powered text-based audio editing',
      textContent: `Descript is an AI-powered, text-based audio editor that simplifies podcast production by treating audio like a Google Doc, allowing edits via text rather than waveforms. Ideal for beginners and professionals, it auto-transcribes recordings (e.g., from a Rode PodMic or Riverside.fm) into editable text, streamlining workflows. Available on Windows and macOS, Descript supports solo, interview, and narrative podcasts with features like voice cloning and video integration. Its subscription starts at $12/month, offering a user-friendly alternative to traditional DAWs like Adobe Audition. Perfect for podcasters seeking fast, intuitive editing without deep audio expertise, Descript excels in content repurposing and quick turnarounds, making it a powerful tool for modern podcasting workflows, especially for those prioritizing efficiency and accessibility.`
    },
    {
      id: 'descript-features',
      type: 'video',
      title: 'Descript Key Features',
      videoUrl: 'https://www.youtube.com/watch?v=oNACZy0VBLg&utm_source=chatgpt.com',
      keyFeatures: 'Auto-transcription, text-based editing, and AI tools',
      textContent: `Descript's key features revolutionize podcast editing. Auto-transcription converts audio to text in minutes, allowing you to edit by deleting words (e.g., removing "ums" by deleting text). Overdub, an AI voice cloning tool, generates synthetic voiceovers to fix mistakes or add content, ideal for polished episodes. Multitrack support aligns audio and video tracks, simplifying remote interview edits from platforms like SquadCast. Auto filler word removal targets "uh," "like," or "you know," streamlining cleanup. Descript exports to WAV, MP3, or video formats for platforms like Spotify or YouTube. For example, you can import a Zencastr recording, edit via text, and create social clips in one workflow. These features make Descript ideal for podcasters seeking fast, intuitive editing with AI-driven efficiency, reducing reliance on complex audio tools while maintaining professional quality.`
    },
    {
      id: 'descript-best-for',
      type: 'video',
      title: 'Descript Best For',
      videoUrl: 'https://www.youtube.com/watch?v=oNACZy0VBLg&utm_source=chatgpt.com',
      keyFeatures: 'Fast editing and content repurposing',
      textContent: `Descript is best for podcasters needing fast editing without deep audio experience, interview or solo formats, and content repurposing. Its text-based interface allows beginners using a USB mic like the Audio-Technica ATR2100x to edit episodes by cutting text, bypassing waveform editing skills required by Audacity. Interview podcasters benefit from multitrack support for aligning guest tracks, while solo creators can quickly refine monologues. Descript excels at repurposing content, turning podcast segments into social media clips or transcripts for blogs, ideal for marketing-focused shows. For example, a tech podcast recorded via Riverside.fm can be transcribed and clipped for Instagram in minutes. It suits creators prioritizing speed and versatility, especially those without Adobe Audition's budget ($20.99/month) or technical expertise, delivering professional results for modern, multi-platform podcasting workflows.`
    },
    {
      id: 'descript-tips',
      type: 'video',
      title: 'Descript Tips',
      videoUrl: 'https://www.youtube.com/watch?v=oNACZy0VBLg&utm_source=chatgpt.com',
      keyFeatures: 'Screen Recorder, Premiere Pro export, custom filler removal',
      textContent: `Maximize Descript's potential with these tips. Use the built-in Screen Recorder to capture tutorials or guest calls, ideal for video podcasts or behind-the-scenes content, enhancing engagement on platforms like YouTube. Export timelines directly to Premiere Pro for seamless video editing, leveraging Adobe Creative Cloud integration for multimedia projects. Customize filler word removal to match your tone, adjusting settings to preserve natural speech (e.g., keeping intentional "likes" in casual podcasts). For instance, when editing a SquadCast interview, tweak filler detection to avoid over-editing. Save original files to cloud storage (e.g., Dropbox) before editing to prevent data loss. These practices streamline workflows, especially for text-based edits or social clip creation, making Descript a powerful tool for podcasters seeking efficiency and flexibility while producing polished, professional episodes with minimal technical hassle.`
    },
    {
      id: 'descript-limitations',
      type: 'video',
      title: 'Descript Limitations',
      videoUrl: 'https://www.youtube.com/watch?v=oNACZy0VBLg&utm_source=chatgpt.com',
      keyFeatures: 'Limited audio mixing and AI dependency',
      textContent: `Descript has limitations to consider. It offers less control over precise audio mixing compared to Adobe Audition, with fewer options for advanced EQ, compression, or spectral editing, which can frustrate audio engineers working on sound-rich podcasts. Transcription and Overdub require an internet connection, limiting offline workflows and potentially slowing editing for large files. AI-based edits, like filler word removal or voice cloning, may need human fine-tuning to avoid unnatural results, especially for nuanced speech or narrative shows. For example, auto-transcription might misinterpret accents, requiring manual corrections. While user-friendly, Descript's $12/month cost may deter budget-conscious podcasters compared to free tools like Audacity. These drawbacks make it less ideal for complex audio productions but manageable for users prioritizing speed and text-based editing over granular control.`
    },
    {
      id: 'feature-comparison',
      type: 'video',
      title: 'Feature Comparison',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Tool Comparison Matrix',
      textContent: `| Feature | Audacity | Adobe Audition | Descript |
| ----- | ----- | ----- | ----- |
| Price | ✅ Free | ❌ Paid | ✅ Freemium |
| Multitrack | ✅ Yes | ✅ Yes | ✅ Yes |
| Auto-transcription | ❌ No | ❌ No | ✅ Yes |
| Noise Reduction | ✅ Yes | ✅ Advanced | ⚠️ Limited |
| Visual Editing | ⚠️ Basic | ✅ Pro-level | ✅ Text-based |
| Learning Curve | ✅ Easy | ❌ Steep | ✅ Easy |
| Best Use | Budget DIY | Professional polish | Fast, text-driven editing |`
    },
    {
      id: 'choosing-tool',
      type: 'video',
      title: 'Which Should You Choose?',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Tool Selection Guide',
      textContent: `| You Are... | Use This |
| ----- | ----- |
| Just getting started | **Audacity** |
| Experienced editor or producer | **Adobe Audition** |
| Want to edit fast and hate audio waveforms | **Descript** |
| On a team with Adobe Creative Cloud access | **Audition** |
| Need to transcribe, edit, and publish fast | **Descript** |`
    },
    {
      id: 'bonus-tools',
      type: 'video',
      title: 'Bonus Tools',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Additional Editing Resources',
      textContent: `| Tool | Purpose |
| ----- | ----- |
| **Auphonic** | Automatic audio leveling and noise reduction |
| **Reaper** | Affordable DAW with deep customization |
| **Hindenburg** | Podcast-specific editor with storyboarding |
| **Levelator** | Quick volume balancing for speech audio |
| **Crisp.ai / NVIDIA Broadcast** | Real-time background noise removal |`
    },
    {
      id: 'summary-checklist',
      type: 'video',
      title: 'Summary Checklist',
      videoUrl: 'https://youtu.be/vlzOb4OLj94',
      keyFeatures: 'Essential Takeaways',
      textContent: `✅ Know your skill level and project type
✅ Choose the tool that matches your workflow
✅ Always back up original files
✅ Use headphones while editing
✅ Keep a checklist of edits to apply consistently
✅ Export to 320kbps MP3 for final distribution`
    }
  ]
}; 
