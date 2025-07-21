import type { Module } from '@/types/course';

export const module4PodcastMarketing: Module = {
  id: 4,
  title: 'Audio Editing Essentials',
  description: 'Master the fundamentals of podcast audio editing using professional tools and techniques.',
  lessons: [
    {
      id: 9,
      title: 'Introduction to Editing Tools',
      duration: '45:00',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
## Audio Editing Essentials: Introduction to Editing Tools

### 🧠 Why This Topic Matters

No matter how good your recording setup is, editing is where the magic happens — removing mistakes, enhancing audio, adding music, and creating a polished listening experience.

Choosing the right editing tool can:
- **Save time** ⏰
- **Improve quality** 🎧
- **Simplify your workflow** 🔄

Understanding the differences helps you pick the right tool for your podcasting goals.

### 📺 Software Overview Videos

<YouTubeVideoRenderer videoId="xl-WDjWrTtk" title="Audacity Tutorial" />

<YouTubeVideoRenderer videoId="5O71pkMEPXI" title="Adobe Audition Tutorial" />

<YouTubeVideoRenderer videoId="oNACZy0VBLg" title="Descript Tutorial" />

### 🛠️ I. Overview of Editing Tools

| Tool | Best For | Platform | Skill Level | Price |
|------|----------|----------|-------------|--------|
| **Audacity** | Basic to intermediate editing | Windows, Mac, Linux | Beginner-friendly | Free |
| **Adobe Audition** | Professional, detailed editing | Windows, Mac | Intermediate to pro | Paid (Adobe CC) |
| **Descript** | Text-based, fast editing | Windows, Mac | Beginner to intermediate | Free + Paid plans |

### 🎧 II. Audacity

#### 🔍 What It Is:
A free, open-source audio editor ideal for beginners and hobbyist podcasters.

#### ✅ Key Features:
- **Multitrack editing** 🎵
- **Cut, trim, fade, and silence tools** ✂️
- **Noise reduction and effects** 🔇
- **Supports plugins (VST, LADSPA)** 🔌
- **Exports to WAV, MP3, etc.** 💾

#### 🎯 Best For:
- New podcasters on a budget
- Basic audio cleanup
- Learning editing fundamentals

#### 📝 Tips:
- Use labels to mark sections 🏷️
- Always keep an original backup 💾
- Use the "Noise Profile" + "Noise Reduction" combo to clean up background sounds 🔧

#### ⚠️ Limitations:
- Outdated interface
- No built-in transcription
- Non-destructive editing is limited

### 🎚️ III. Adobe Audition

#### 🔍 What It Is:
A professional-grade Digital Audio Workstation (DAW) that offers detailed control over your podcast audio.

#### ✅ Key Features:
- **Advanced multitrack and waveform editing** 🎛️
- **Real-time noise reduction and EQ** 🎚️
- **Spectral frequency editing for removing hums or clicks** 📊
- **Auto-ducking for music under voice** 🎵
- **Adobe Creative Cloud integration (Premiere Pro, etc.)** 🔗

#### 🎯 Best For:
- Producers, audio engineers, or creators aiming for pro-level polish
- Narrative, fiction, or sound-rich shows
- Teams with Adobe Creative Cloud access

#### 📝 Tips:
- Use the "Essential Sound" panel for quick cleanup ⚡
- Always work in non-destructive multitrack mode 🔄
- Use batch processing to apply the same effects to multiple files 📦

#### ⚠️ Limitations:
- Steeper learning curve 📈
- Subscription required ($20.99/month standalone) 💳

### 🖥️ IV. Descript

#### 🔍 What It Is:
An AI-powered text-based editor that treats your audio like a Google Doc. You edit by editing words, not waveforms.

#### ✅ Key Features:
- **Auto-transcription of your audio** 📝
- **Edit audio by deleting text (e.g., remove "ums" by deleting the word)** ✂️
- **Overdub (AI-generated voice cloning)** 🤖
- **Multitrack support with simple video/audio alignment** 🎬
- **Auto filler word removal (e.g., "uh," "like," "you know")** 🧹

#### 🎯 Best For:
- Fast editing without deep audio experience
- Interview or solo podcasters
- Content repurposing (e.g., turning podcast into social clips)

#### 📝 Tips:
- Use the Screen Recorder to record tutorials or guest calls 📹
- Export timelines directly to Premiere Pro if needed 🎬
- Customize filler word removal to match your tone 🎯

#### ⚠️ Limitations:
- Less control over precise audio mixing
- Requires internet for transcription and Overdub
- AI-based edits may need human fine-tuning

### ⚖️ V. Feature Comparison

| Feature | Audacity | Adobe Audition | Descript |
|---------|----------|----------------|----------|
| **Price** | ✅ Free | ❌ Paid | ✅ Freemium |
| **Multitrack** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Auto-transcription** | ❌ No | ❌ No | ✅ Yes |
| **Noise Reduction** | ✅ Yes | ✅ Advanced | ⚠️ Limited |
| **Visual Editing** | ⚠️ Basic | ✅ Pro-level | ✅ Text-based |
| **Learning Curve** | ✅ Easy | ❌ Steep | ✅ Easy |
| **Best Use** | Budget DIY | Professional polish | Fast, text-driven editing |

### 📊 VI. Which Should You Choose?

| You Are... | Use This |
|------------|----------|
| Just getting started | **Audacity** |
| Experienced editor or producer | **Adobe Audition** |
| Want to edit fast and hate audio waveforms | **Descript** |
| On a team with Adobe Creative Cloud access | **Audition** |
| Need to transcribe, edit, and publish fast | **Descript** |

### 💼 VII. Class Activity

**Scenario:** You recorded a 10-minute podcast episode.

Choose ONE tool and do the following:
1. Trim the intro and outro ✂️
2. Remove background noise 🔇
3. Cut filler words 🧹
4. Add a music bed 🎵
5. Export as MP3 💾

**Reflection Questions:**
- How easy or hard was it to use the tool? 🤔
- What would you do differently next time? 🔄
- How did the editing improve your final product? ✨

### 🧩 VIII. Bonus Tools

| Tool | Purpose |
|------|---------|
| **Auphonic** | Automatic audio leveling and noise reduction |
| **Reaper** | Affordable DAW with deep customization |
| **Hindenburg** | Podcast-specific editor with storyboarding |
| **Levelator** | Quick volume balancing for speech audio |
| **Crisp.ai / NVIDIA Broadcast** | Real-time background noise removal |

### 📝 Summary Checklist

- ✅ Know your skill level and project type
- ✅ Choose the tool that matches your workflow
- ✅ Always back up original files
- ✅ Use headphones while editing
- ✅ Keep a checklist of edits to apply consistently
- ✅ Export to 320kbps MP3 for final distribution

### 📚 Suggested Resources

- [Audacity Manual](https://manual.audacityteam.org/)
- [Adobe Audition YouTube Tutorials](https://www.youtube.com/playlist?list=PLjwm_8O3suyM5krYaO3G-fUK8WGBJ_5U3)
- [Descript Academy](https://academy.descript.com/)
- [Podcast Editing Guide – Descript Blog](https://blog.descript.com/podcast-editing-guide/)
- [The Audacity to Podcast – Podcast Editing Tips](https://theaudacitytopodcast.com/)
        `
      }
    },
    {
      id: 10,
      title: 'Basic Editing: Cutting, Noise Removal, Levels',
      duration: '50:00',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
## Basic Editing: Cutting, Noise Removal, Levels

**Objective:** To equip students with the foundational editing skills needed to produce clean, listenable podcast audio using any editing tool (Audacity, Adobe Audition, Descript, etc.).

### 🧠 Why Basic Editing Matters

Even the best content can lose impact if the audio is distracting or unpleasant. Basic editing helps:
- **Improve clarity** 🔍
- **Reduce distractions** 🎧
- **Maintain listener engagement** 💫

### 🛠️ I. Cutting Audio (Trimming and Deleting)

#### ✂️ Purpose:
To remove:
- Mistakes or retakes 🔄
- Long pauses ⏸️
- "Ums," "uhs," and filler words 🗣️
- Off-topic tangents 💭

#### 📍 Tools & Methods:

##### 🟢 Audacity:
- Use Selection Tool to highlight 🎯
- Press Delete or use Edit > Delete ❌
- Use Split (Ctrl + I) for non-destructive edits ✂️

<YouTubeVideoRenderer videoId="jZfgDVKOwbo" title="Audacity: Cutting Audio" />

##### 🟠 Adobe Audition:
- Use the Razor Tool to cut 🔪
- Move or delete clips in Multitrack View 🎛️
- Use Markers to plan your edits first 📌

<YouTubeVideoRenderer videoId="fzeN8colBNI" title="Adobe Audition: Cutting Audio" />

##### 🔵 Descript:
- Auto-transcribes your audio 📝
- Simply highlight and delete text ✂️
- Use the "Remove Filler Words" tool for bulk edits 🧹

#### 📝 Best Practices:
- Always keep a backup of your original audio 💾
- Avoid over-editing to maintain natural flow 🌊
- Listen with headphones to catch subtle issues 🎧

### 🎧 II. Noise Removal

#### 🎯 Purpose:
To eliminate:
- Room hums or static 🔊
- Fan or air conditioning noise 💨
- Background chatter or buzz 🗣️

#### 📍 Tools & Techniques:

##### 🟢 Audacity:
1. Select a small portion of noise (no talking) 🎯
2. Go to Effect > Noise Reduction > Get Noise Profile 📊
3. Select entire track → Effect > Noise Reduction > OK ✅

<YouTubeVideoRenderer videoId="pLfpFtstORg" title="Audacity: Noise Removal" />

##### 🟠 Adobe Audition:
- Use Spectral Frequency Display to identify noise 📈
- Apply Noise Reduction (process) or Adaptive Noise Reduction 🔧
- Try DeReverb and DeNoise in the Essential Sound Panel 🎚️

<YouTubeVideoRenderer videoId="SsvpNfLrRO4" title="Adobe Audition: Noise Removal" />

##### 🔵 Descript:
- Use Studio Sound (enhances voice & removes noise) ✨
- Toggle under "Effects" in the sidebar 🎛️

<YouTubeVideoRenderer videoId="srN2TfrjFYY" title="Descript: Noise Removal" />

#### 📝 Tips:
- Don't overuse noise reduction — it can make voices sound robotic 🤖
- Reduce noise at the source first (quiet room, good mic) 🎤
- Use pop filters and treat echoey spaces with foam or blankets 🧽

### 📶 III. Adjusting Levels (Volume and Balance)

#### 🎯 Purpose:
To ensure:
- Clear voice levels 🗣️
- Music and SFX aren't overpowering 🎵
- Consistent loudness throughout 📊

#### 📍 Concepts:

| Term | Meaning |
|------|---------|
| **Gain** | Volume before effects are applied |
| **Volume** | Output level after processing |
| **Normalization** | Sets audio to a consistent peak |
| **Compression** | Evens out loud and soft parts |
| **LUFS** | Loudness standard (target: -16 LUFS for podcasts) |

#### 📍 Tools & Methods:

##### 🟢 Audacity:
- Use Effect > Normalize to set volume peak (e.g., -1 dB) 📊
- Use Compressor for voice smoothing 🎚️

<YouTubeVideoRenderer videoId="xLYh4YrkllM" title="Audacity: Adjusting Levels" />

##### 🟠 Adobe Audition:
- Use Amplitude and Compression > Normalize to -16 LUFS 📈
- Apply Hard Limiter to prevent clipping ⚡
- Use Essential Sound Panel → Dialogue → Loudness → Auto-Match 🎯

<YouTubeVideoRenderer videoId="TyV7IJRE5UE" title="Adobe Audition: Adjusting Levels" />

<YouTubeVideoRenderer videoId="gPN92u_6-M0" title="In Adobe Audition: Advanced Level Adjustment" />

##### 🔵 Descript:
- Automatic volume leveling with Studio Sound ✨
- Manual volume sliders on each track 🎛️

<YouTubeVideoRenderer videoId="fYHgqioY6bM" title="Descript: Adjusting Levels" />

<YouTubeVideoRenderer videoId="r14Szi9hUrI" title="In Descript: Advanced Level Control" />

#### 📝 Tips:
- Always monitor using headphones 🎧
- Keep spoken word around -16 LUFS (or -19 LUFS for mono) 📊
- Test with different devices (phone, laptop, car) 📱

### 🎓 IV. Live Demo Exercise (Optional for Class)

**Scenario:** You recorded a raw podcast intro. Perform the following:
1. Cut out an awkward pause ✂️
2. Remove fan noise in the background 🔇
3. Adjust volume to match podcast standards 📊

### ✅ Summary Checklist

| Task | Done? |
|------|-------|
| Trimmed silence, mistakes, and filler words | ✅ / ❌ |
| Applied noise removal (subtle, not harsh) | ✅ / ❌ |
| Normalized voice levels | ✅ / ❌ |
| Exported at correct volume (around -16 LUFS) | ✅ / ❌ |
| Listened to final cut on headphones | ✅ / ❌ |

### 📚 Additional Resources

- [Audacity Noise Reduction Tutorial](https://manual.audacityteam.org/man/noise_reduction.html)
- [Adobe Audition Essential Sound Panel Guide](https://helpx.adobe.com/audition/using/essential-sound-panel.html)
- [Descript's Studio Sound Feature](https://help.descript.com/hc/en-us/articles/4404683080461-Studio-Sound)
        `
      }
    },
    {
      id: 11,
      title: 'Adding Intros, Outros, and Music',
      duration: '40:00',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
## Adding Intros, Outros, and Music

### 🧠 Why Add Intros, Outros, and Music?

- 🎯 **Establishes your brand identity**
- 🎧 **Improves listener experience**
- 🧠 **Increases memorability**
- 📍 **Sets mood and tone for the episode**

### 🎼 I. Understanding Podcast Structure

A typical podcast structure:
\`\`\`
🎵 Intro Music → 🎙️ Host Intro → 📚 Main Content → 🔚 Outro Message → 🎵 Outro Music
\`\`\`

#### ✅ Components:

| Part | Purpose | Typical Length |
|------|---------|----------------|
| **Intro** | Grab attention, state purpose | 15–30 seconds |
| **Outro** | Wrap-up, CTA, thank you | 15–30 seconds |
| **Music Beds** | Fill gaps, transitions, background | Varies |

### 🎶 II. Sourcing Music Legally

#### 🎵 Free/Low-Cost Sources:
- **YouTube Audio Library** 📺
- **Incompetech (by Kevin MacLeod)** 🎼
- **Free Music Archive** 📁
- **Epidemic Sound (paid, professional)** 💰
- **Artlist or Soundstripe (subscription-based)** 🔄

#### ❗ Licensing Tip:
- Look for "Royalty-Free" or Creative Commons (CC-BY) licenses ✅
- Always credit the artist if required 📝

### 🛠️ III. How to Add Music in Each Tool

#### 🟢 A. In Audacity

##### Import Audio Files
1. **File > Import > Audio** 📁
2. Select your intro music, voice recording, and outro music 🎵

##### Arrange Tracks
- **Track 1:** Intro Music 🎵
- **Track 2:** Voice Recording 🎙️
- **Track 3:** Outro Music 🎶

##### Adjust Volume and Timing
- Use **Time Shift Tool** to position clips ⏰
- **Effect > Amplify** to adjust music volume (make it quieter than voice) 🔊
- **Generate > Silence** to add gaps if needed 🔇

##### Fade Music
- Select beginning/end of music clips 🎯
- **Effect > Fade In/Out** for smooth transitions ↗️↘️

##### Export Final Episode
- **File > Export > Export as MP3** 💾

#### 🟠 B. In Adobe Audition

##### Use Multitrack Editor
- Create new session (**File > New > Multitrack Session**) 📁
- Drag in Music and Voice Clips 🎵🎙️
- Place music on Track 1, voice on Track 2 🎛️

##### Adjust Volume
- Use **Clip Gain** and **Mixer Panel** 🎚️
- Apply **Essential Sound > Ducking** to lower music behind voice 🔄

##### Fade and Cut
- Apply **Fade Handles** or **Fade Effects** ↗️↘️
- Use **Razor Tool** to trim and arrange clips ✂️

##### Export Final Episode
- **File > Export > Multitrack Mixdown** 💾

#### 🔵 C. In Descript

##### Add Intro/Outro Tracks
- Drag and drop music files into the project 📁
- Align Audio Segments 📐

##### Control Volume
- Click on clip > Adjust volume slider 🎚️
- Use **Studio Sound** for better balance ⚖️

##### Fade Music
- Right-click on clip > "**Add Fade In/Out**" ↗️↘️

##### Export
- **File > Export > Audio (MP3/WAV)** 💾

### 🎛️ IV. Best Practices

| Tip | Why It Matters |
|-----|----------------|
| **Keep intros short (15–30s)** | Listeners want to get to the content fast ⚡ |
| **Fade music under voice** | Ensures clarity of spoken words 🔍 |
| **Use the same intro/outro every episode** | Builds familiarity and brand identity 🎯 |
| **Normalize audio levels** | Avoids abrupt volume changes 📊 |
| **Credit music creators** | Avoid copyright issues ⚖️ |

### 🎓 Class Demo/Assignment

#### Exercise:
1. Download a royalty-free music clip 🎵
2. Record a short host intro (10 seconds) 🎙️
3. Add music before and after using your editor of choice 🎛️
4. Export the final MP3 💾
5. Submit with time-stamped notes of each section 📝

### 📋 Summary Checklist

| Task | Done? |
|------|-------|
| Music downloaded and licensed? | ✅ / ❌ |
| Music imported and faded in/out? | ✅ / ❌ |
| Voice volume above music? | ✅ / ❌ |
| Intro/outro length < 30 sec? | ✅ / ❌ |
| Final export clear and balanced? | ✅ / ❌ |

### 📚 Further Resources

- [Audacity: Mixing Music & Voice](https://manual.audacityteam.org/man/mixing.html)
- [Adobe Audition: Ducking Tutorial](https://helpx.adobe.com/audition/using/mixing-ducking-audio.html)
- [Descript: Adding Music](https://help.descript.com/hc/en-us/articles/360042636811-Adding-music-to-your-project)
        `
      }
    },
    {
      id: 12,
      title: 'Exporting Files for Distribution',
      duration: '35:00',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
## Exporting Files for Distribution

### 🧠 Why Exporting Properly Matters

- 🎧 **Audio quality consistency across platforms**
- ⚙️ **Compatibility with distribution services**
- 🔍 **SEO and discoverability (via metadata and ID3 tags)**
- ⏳ **Faster uploads with smaller file sizes**

### 📁 I. Choosing the Right Export Format

| Format | When to Use | Notes |
|--------|-------------|-------|
| **MP3** | ✅ Most common | Universal, small size, supported everywhere |
| **WAV** | For mastering or archiving | High quality but large file size |
| **AAC (M4A)** | Optional, for Apple | High-quality alternative, not universal |

#### 🎯 Recommended Settings for Podcasts:
- **Format:** MP3 🎵
- **Bitrate:** 128 kbps (CBR or ABR preferred) 📊
- **Sample Rate:** 44.1 kHz 📈
- **Channels:** Stereo or Mono (Mono preferred for voice-only shows) 🎧

### 🛠️ II. Exporting in Different Editing Tools

#### 🟢 A. Audacity

##### Finalize Editing
- Remove silences, adjust levels, add music ✨

##### Export File
- **File → Export → Export as MP3** 💾

##### Set Bitrate
- Choose **128 kbps** or **160 kbps** 📊
- **Constant Bitrate (CBR)** preferred 📈

##### Add Metadata
- Fill in: **Title, Artist, Album, Year, Genre, Comments** 📝

##### Save File
- Name it clearly (e.g., Ep01_IntroToPodcasting.mp3) 🏷️

<YouTubeVideoRenderer videoId="wfA1vW_XXzc" title="Audacity: Exporting" />

#### 🟠 B. Adobe Audition

##### Export Process
1. **File → Export → Multitrack Mixdown → Entire Session** 📁
2. Choose **Format: MP3** 🎵
3. Set **Sample Rate:** 44100 Hz 📈
4. **Bitrate:** 128 kbps CBR 📊
5. **Channels:** Mono/Stereo 🎧

##### Add Metadata
- Click "**ID3 Tags**" to add title, author, episode, etc. 📝

##### Save File
- Choose destination and filename 💾

<YouTubeVideoRenderer videoId="-_YLdi2IG2k" title="Adobe Audition: Exporting" />

#### 🔵 C. Descript

##### Export Process
1. Click "**Publish**" → "**Export**" → Choose "**Audio**" 📁
2. **Format:** MP3 🎵
3. **Bitrate:** Medium (128 kbps) or High (192 kbps) 📊

##### Add Metadata
- Add metadata via export panel or manually later 📝

##### Export and Save
- Choose destination 💾

<YouTubeVideoRenderer videoId="ThrUGVnbIFw" title="Descript: Exporting" />

### 🧾 III. Metadata and ID3 Tags

📌 **Metadata makes your podcast searchable and organized.**

#### 🏷️ Recommended Tags:

| Field | Example |
|-------|---------|
| **Title** | Episode 01: Introduction to Editing |
| **Artist** | Your Name / Podcast Name |
| **Album** | Podcast Show Title |
| **Year** | 2025 |
| **Genre** | Podcast, Education, etc. |
| **Comment** | "Subscribe on Spotify & Apple" |

#### 🛠 Tools to Edit Metadata:
- **Audacity Metadata Editor** 🔧
- **Adobe Audition's ID3 Tag Editor** 🎚️
- **MP3Tag (Free software for bulk editing)** 📦
- **Descript (limited support)** 🔵

### ☁️ IV. Preparing for Hosting/Distribution

Once exported:
- ✅ **Check file size:** Keep it under 100MB for faster uploads
- 🔊 **Play test:** Listen to full episode before uploading
- 🧾 **Check ID3 tags and filename format**
- ⬆️ **Upload to your podcast host** (e.g., Spotify via Anchor, Buzzsprout, Podbean)

<YouTubeVideoRenderer videoId="4-NXVreDGFk" title="Preparing for Hosting/Distribution" />

### 🧪 Assignment: Export & Deliver

#### Task:
1. Export your edited episode to MP3 (128 kbps, mono) 💾
2. Fill in all metadata 📝
3. Upload to Google Drive or podcast host (if available) ☁️
4. Submit the download link + a screenshot of metadata settings 📸

### 📋 Final Checklist

| Task | Done? |
|------|-------|
| Exported in MP3 format | ✅ / ❌ |
| Bitrate set to 128 kbps | ✅ / ❌ |
| Metadata (ID3 tags) completed | ✅ / ❌ |
| File size under 100MB | ✅ / ❌ |
| Episode tested for clarity | ✅ / ❌ |

### 📚 Resources

- [Audacity Export Guide](https://manual.audacityteam.org/man/exporting_audio.html)
- [Adobe Audition Mixdown Help](https://helpx.adobe.com/audition/using/exporting-multitrack-sessions.html)
- [ID3 Tag Editing: MP3Tag](https://www.mp3tag.de/en/)
- [Podcast Hosting: Anchor, Buzzsprout](https://anchor.fm/)
        `
      }
    },
    {
      id: 13,
      title: 'Audio Editing Tools Quiz',
      duration: '15:00',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'Which of the following is a FREE, open-source editing tool ideal for beginners?',
            options: [
              'Adobe Audition',
              'Descript',
              'Audacity',
              'Pro Tools'
            ],
            correct: 2,
            explanation: 'Audacity is free, open-source, and great for beginners learning audio editing fundamentals.'
          },
          {
            question: 'What is the biggest advantage of using Descript for editing?',
            options: [
              'Advanced spectral editing',
              'Drag-and-drop music tools',
              'Text-based audio editing',
              'Dolby Atmos support'
            ],
            correct: 2,
            explanation: 'Descript allows editing audio like a document - you can edit by modifying text rather than waveforms.'
          },
          {
            question: 'True or False: Adobe Audition is a free tool best suited for beginners.',
            options: [
              'True',
              'False'
            ],
            correct: 1,
            explanation: 'False. Adobe Audition is paid software with advanced features, making it more suitable for intermediate to professional users.'
          },
          {
            question: 'Which tool would best suit a podcaster who wants fast, text-driven editing with automatic transcription?',
            options: [
              'Audacity',
              'Adobe Audition',
              'Descript',
              'GarageBand'
            ],
            correct: 2,
            explanation: 'Descript excels at fast, text-driven editing with built-in automatic transcription features.'
          },
          {
            question: 'In Audacity, which feature helps remove constant background noise?',
            options: [
              'Razor Tool',
              'Studio Sound',
              'Noise Profile + Noise Reduction',
              'Ducking'
            ],
            correct: 2,
            explanation: 'The Noise Profile + Noise Reduction combination is Audacity\'s primary method for removing constant background noise.'
          },
          {
            question: 'Which feature is exclusive to Descript among the three tools?',
            options: [
              'Multitrack editing',
              'Export to MP3',
              'Spectral frequency editing',
              'Overdub (AI voice cloning)'
            ],
            correct: 3,
            explanation: 'Overdub, the AI voice cloning feature, is unique to Descript among these editing tools.'
          },
          {
            question: 'What is a major limitation of using Audacity for podcast editing?',
            options: [
              'No support for WAV files',
              'No music support',
              'Outdated interface and limited non-destructive editing',
              'Cannot export MP3 files'
            ],
            correct: 2,
            explanation: 'While Audacity is powerful and free, it has an outdated interface and limited non-destructive editing capabilities.'
          },
          {
            question: 'Which of these is NOT a feature of Adobe Audition?',
            options: [
              'Auto-ducking',
              'Essential Sound panel',
              'Automatic transcription',
              'Spectral frequency editing'
            ],
            correct: 2,
            explanation: 'Adobe Audition lacks built-in automatic transcription - this feature is found in Descript.'
          },
          {
            question: 'What\'s the recommended LUFS level for podcast audio loudness?',
            options: [
              '-6 LUFS',
              '-16 LUFS',
              '-30 LUFS',
              '+3 LUFS'
            ],
            correct: 1,
            explanation: '-16 LUFS is the standard loudness level recommended for podcast platforms and streaming services.'
          },
          {
            question: 'Which of the following statements is TRUE about exporting audio for podcast distribution?',
            options: [
              'Use 320 kbps stereo MP3 for all podcasts',
              'Always export in WAV format for streaming',
              'Add ID3 metadata to help with search and discoverability',
              'You must export at 96 kHz for Spotify'
            ],
            correct: 2,
            explanation: 'Adding ID3 metadata tags enhances podcast organization and SEO in podcast directories and platforms.'
          }
        ]
      }
    }
  ]
};