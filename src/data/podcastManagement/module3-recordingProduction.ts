
import type { Module } from '@/types/course';

export const module3RecordingProduction: Module = {
  id: 3,
  title: 'Recording & Production Workflow',
  description: 'Master professional recording techniques and post-production workflows for high-quality podcast content.',
  lessons: [
    {
      id: 7,
      title: 'Choosing the Right Recording Tools and Software',
      duration: '40:00',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
## Choosing the Right Recording Tools and Software

### 🔑 Why This Matters

High-quality audio is non-negotiable in podcasting. Poor sound can make even the best content unlistenable. Choosing the right tools and software sets the foundation for professional sound quality, efficient workflow, and an enjoyable experience for both host and listener.

<YouTubeVideoRenderer videoId="whL_nS46lRQ" title="Understanding Your Needs" />

### 🎧 I. Understanding Your Needs

Before selecting tools, ask:

#### Podcast Format
- Interview, solo, panel, fiction, narrative? 📻

#### Number of Hosts/Guests
- In-person or remote? 👥

#### Budget
- Free, beginner-friendly, or professional-level? 💰

#### Editing Skills
- Are you tech-savvy or need simple tools? 🛠️

#### Publishing Plan
- One-time series or ongoing? 📅

### 🧰 II. Essential Recording Tools

#### A. Microphones
Microphones affect sound quality the most.

| Type | Pros | Best For |
|------|------|----------|
| 🎙️ **Dynamic Mic** | Durable, isolates voice well | Live, untreated rooms, budget setups |
| 🎤 **Condenser Mic** | Crisp, sensitive to detail | Studio setups, voice acting |
| 🎧 **USB Mic** | Plug-and-play, easy | Beginners, solo podcasters |
| 🎚️ **XLR Mic** | Pro-grade, needs interface | High-quality setups, co-hosted shows |

**Popular Models:**
- **USB**: Blue Yeti, Samson Q2U, Audio-Technica ATR2100x
- **XLR**: Shure SM7B, Rode PodMic, Electro-Voice RE20

<YouTubeVideoRenderer videoId="pGGiqs1kP9Q" title="Podcast Microphones: Dynamic vs. Condenser, USB vs. XLR, and more!" />

#### B. Audio Interfaces
If using XLR mics, you need an audio interface to convert analog to digital.

- **Focusrite Scarlett 2i2** 🎚️
- **PreSonus AudioBox USB** 🎛️
- **Behringer UMC22** 💿

For 2+ mics, ensure your interface has enough inputs.

#### C. Headphones
Closed-back headphones are ideal to monitor audio during recording and editing.

- 🔊 **Prevent echo and bleed**
- 🎧 **Help catch issues in real-time**

**Recommended Models:**
Audio-Technica ATH-M50x, Sony MDR-7506, Sennheiser HD280 Pro

### 💻 III. Recording Software (DAWs)

#### A. Digital Audio Workstations (DAWs)
These allow you to record, edit, and export your audio.

| Software | Platform | Price | Features |
|----------|----------|-------|----------|
| **Audacity** | Win/Mac/Linux | Free | Great for beginners |
| **GarageBand** | Mac only | Free | Simple, music-friendly |
| **Adobe Audition** | Win/Mac | Paid | Pro tools & effects |
| **Reaper** | Win/Mac/Linux | Low-cost | Highly customizable |
| **Hindenburg Journalist** | Win/Mac | Paid | Built for spoken-word audio |

#### B. Remote Recording Tools
For interviewing guests or co-hosting online.

| Tool | Features | Notes |
|------|----------|-------|
| **Zoom** | Easy, popular | Lower audio quality |
| **Riverside.fm** | Local HD recording | Video + audio, stable |
| **Zencastr** | Records separate tracks | Free tier available |
| **SquadCast** | Studio-quality audio | Good for pros |

💡 **Tip**: Always record locally when possible, or use platforms that record locally and upload (like Riverside or Zencastr).

### 🛠️ IV. Accessories and Setup

<YouTubeVideoRenderer videoId="YiG0j6hHwcU" title="Accessories and Setup" />

#### A. Pop Filter or Windscreen
- Reduces plosives (popping sounds) 💨
- Inexpensive and improves clarity 🎯

#### B. Mic Stand or Boom Arm
- Ensures stability and consistent mic positioning 📐

#### C. Acoustic Treatment
- Minimize room echo with foam panels, rugs, curtains 🏠
- Record in small, carpeted rooms or closets if budget is tight 💡

### 📤 V. Export and File Management

- Record in **WAV** (high quality), export in **MP3** (compressed for upload) 💾
- Use **44.1 kHz / 16-bit** for standard podcast audio 📊
- Use naming conventions: ep01-guestname-topic.mp3 🏷️

### 🧠 VI. Tips for Choosing the Right Tools

- **Start simple** – Don't over-invest early 🎯
- **Prioritize audio quality** – Your voice is the product 🎤
- **Test before you commit** – Try free versions or demos 🧪
- **Match tools to your workflow** – Don't choose complicated tools if you just want to hit "record" ⚡
- **Plan for scalability** – Will it support future growth (video, guests, etc.)? 📈

### 🧪 VII. Homework / Practice Activity

**Scenario:** You're starting a solo podcast from home on a tight budget.

**Task:**
1. Pick a mic, software, and remote tool 🎙️
2. Justify your choices 📝
3. Record a 2-minute test episode and analyze the sound quality 🎧

### 📝 Summary

| Component | Beginner | Intermediate | Pro |
|-----------|----------|--------------|-----|
| **Mic** | USB (ATR2100x) | XLR (Rode PodMic) | Shure SM7B |
| **Software** | Audacity, GarageBand | Reaper, Hindenburg | Adobe Audition |
| **Remote Tools** | Zoom | Zencastr | Riverside |
| **Accessories** | Pop filter, stand | Boom arm, monitor headphones | Full acoustic setup |

### 📚 Suggested Tools to Explore

- **Mic Test Comparisons**: Podcastage YouTube Channel 🎥
- **Editing Practice**: Try Descript for transcription-based editing ✂️
- **Gear Bundles**: Focusrite Podcast Studio Pack 📦
        `
      }
    },
    {
      id: 8,
      title: 'Remote vs. In-Person Recording',
      duration: '35:00',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
## Remote vs. In-Person Recording

### 🧠 Why This Topic Matters

Whether you record remotely or in person will shape your equipment needs, workflow, sound quality, guest experience, and overall production approach. Understanding the pros and cons of each helps you make the right decision for your podcast setup and strategy.

### 🔍 I. Key Definitions

- **In-Person Recording**: All participants are in the same physical location using a shared recording setup.
- **Remote Recording**: Participants join the session from separate locations, typically via the internet.

### 🏠 II. In-Person Podcast Recording

<YouTubeVideoRenderer videoId="GyKL9eK5I0o" title="In-Person Podcast Recording" />

#### ✅ Pros
- **Superior Audio Quality** 🎧
  - All voices recorded on high-quality, local microphones.
- **Natural Conversation Flow** 💬
  - Easier to read body language, make eye contact, and avoid awkward interruptions.
- **Simplified Editing** ✂️
  - Fewer audio syncing issues and delays.
- **Stronger Guest Engagement** 🤝
  - Better rapport-building and connection.

#### ❌ Cons
- **Logistics and Scheduling** 📅
  - Everyone must be in the same place at the same time.
- **Higher Equipment Cost** 💰
  - Requires multiple mics, headphones, an interface or mixer, and a treated space.
- **Physical Space Needed** 🏢
  - Requires a studio, office, or quiet, treated room.
- **Not Scalable for Distant Guests** 🌍
  - Limits you to local guests unless you travel.

#### 🛠️ Common Setup
- XLR microphones (e.g., Rode PodMic) 🎙️
- Audio interface (e.g., Focusrite Scarlett 2i2) 🎚️
- Mixer (for more complex setups) 🎛️
- Sound-treated room or portable acoustic panels 🏠

<YouTubeVideoRenderer videoId="VbxZAO7RAhI" title="Podcasting with an XLR Mic: The Pros and Cons" />

### 🌐 III. Remote Podcast Recording

<YouTubeVideoRenderer videoId="DXQ6iK-dfCQ" title="Remote Podcast Recording" />

#### ✅ Pros
- **Convenience and Accessibility** 🌎
  - Guests and co-hosts can join from anywhere in the world.
- **Scalable and Flexible** 📈
  - Easier to schedule interviews across time zones and locations.
- **Lower Setup Cost** 💸
  - No need for a large studio or group mic setup.
- **More Guest Variety** 🎯
  - Access to global talent, experts, and voices.

#### ❌ Cons
- **Variable Audio Quality** ⚠️
  - Depends on guest's mic, internet, and recording environment.
- **Lag, Dropouts & Tech Glitches** 🐛
  - Can lead to delayed responses, audio drift, or lost content.
- **Editing Complexity** 🧩
  - Requires syncing multiple tracks and cleaning up digital noise.
- **Lower Personal Connection** 📞
  - Harder to build rapport or control pacing.

#### 🛠️ Common Tools
- **Riverside.fm**: Local HD recording, video options 🎬
- **Zencastr**: Separate track recording, lossless audio 🎵
- **SquadCast**: Studio-quality audio, automatic backups 💾
- **Zoom / Skype**: Easy to use, but lower quality unless recorded locally 📱

<YouTubeVideoRenderer videoId="R0_QDsk1_v4" title="Zencastr vs Riverside.FM - Which is Better Choice?" />

### ⚖️ IV. Comparison Table

| Feature | In-Person | Remote |
|---------|-----------|---------|
| **Audio Quality** | ✔️ High | ⚠️ Variable |
| **Guest Flexibility** | ❌ Limited to local | ✔️ Global access |
| **Setup Costs** | ⚠️ Higher upfront | ✔️ Lower for solo/remote tools |
| **Scheduling** | ⚠️ Harder | ✔️ Easier with time zones |
| **Editing** | ✔️ Simpler | ⚠️ More complex |
| **Environment Control** | ✔️ Full control | ⚠️ Dependent on guests' setup |
| **Connection Quality** | ✔️ Reliable | ⚠️ Depends on internet |
| **Emotional Connection** | ✔️ Stronger in person | ⚠️ Weaker digitally |

### 🎯 V. Best Use Cases

#### In-Person is Ideal When:
- You have a co-host or guest locally 🏠
- You can invest in a studio space 🏢
- You want maximum audio quality 🎧
- You're producing fiction, narrative, or scripted shows 🎭

#### Remote is Ideal When:
- You want to interview guests globally 🌍
- You're on a tight budget 💰
- You need flexible scheduling ⏰
- You host panel shows with distributed hosts 👥

### 📌 VI. Hybrid Setup: Best of Both Worlds?

- Record your voice locally, have guest record theirs 🎙️
- Use **double-ender method** (both parties record their own side) 🔄
- Sync tracks in post-production for best quality ✂️

**Example workflow**: Use Zoom for the call, but both record using Audacity or QuickTime and send files afterward.

### 🧠 VII. Summary

| Choose... | If You... |
|-----------|-----------|
| 🏠 **In-Person** | Prioritize quality, control, and connection |
| 🌍 **Remote** | Need flexibility, guests worldwide, or lower costs |
| 🧪 **Hybrid** | Want remote access with local-level quality |

### 📝 Class Activity / Discussion

**Scenario:** You want to launch a weekly interview podcast with industry experts, most of whom are overseas.

**Task:**
1. Decide between remote and in-person 🤔
2. Choose your tools 🛠️
3. Explain your choice in terms of quality, cost, and workflow 📝

### 📚 Suggested Tools to Explore

- **Riverside.fm** – Try recording a test interview 🎬
- **Cleanfeed.net** – Free and studio-quality for remote guests 🎧
- **Auphonic** – Clean up both in-person and remote audio 🧹
- **Descript** – Edit remote recordings like a text doc 📝
        `
      }
    },
    {
      id: 9,
      title: 'Recording Best Practices',
      duration: '45:00',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
## Recording Best Practices

### 🎯 Objective
To ensure professional, clear, and high-quality audio recordings for your podcast by following best practices before, during, and after recording.

### 🧠 Why This Matters
Even with great content, poor audio quality can turn listeners away. These best practices help you maintain consistency, clarity, and professionalism in every episode — whether you're recording solo, remotely, or in person.

### 🧰 I. Pre-Recording Preparation

<YouTubeVideoRenderer videoId="ZlOmbWL0ZDM" title="Pre-Recording Preparation" />

#### 🗂️ 1. Prepare Your Content
- Outline or script your episode (intro, main points, outro) 📝
- Practice your tone, pacing, and transitions 🎭
- Prepare interview questions in advance and share them with guests 📋

#### 🧪 2. Test Your Gear
- Check your microphone connection 🎙️
- Confirm that your recording software is functioning 💻
- Test headphones to prevent feedback 🎧
- Do a soundcheck to review volume levels 📊

#### 🧼 3. Choose the Right Environment
- Record in a quiet, treated room 🏠
- Use carpets, curtains, pillows to absorb echo 🛋️
- Avoid rooms with hard surfaces and noise (fans, fridges, traffic) 🚫

#### 🎛️ 4. Adjust Recording Settings
- Record in **WAV** or **320kbps MP3** format 💾
- Set mic input level between **-6dB to -12dB** to avoid clipping 📊
- Use **mono** for voice-only or **stereo** for interviews with ambiance 🎵

<YouTubeVideoRenderer videoId="dWF9EfWpDr8" title="3 Crucial Prechecks Before Recording Your Podcast | Podcast Recording Tips | Podcast Equipment" />

### 🎙️ II. During Recording

#### 🧏‍♂️ 1. Mic Technique
- Maintain a consistent distance (**6–12 inches** from mic) 📏
- Speak directly into the mic at a slight angle to reduce plosives 💨
- Use a pop filter or foam windscreen 🛡️

#### 🤫 2. Minimize Noise
- Turn off fans, phones, or notifications 📱
- Ask others to be quiet or put up a "Recording in Progress" sign 🚪
- Avoid touching the mic, table, or fidgeting 🤲

#### 🧑‍💻 3. Monitor with Headphones
- Helps catch background noise, distortions, or connection issues in real-time 👂
- Enables better audio leveling and awareness 🎚️

#### ⏯️ 4. Record a Backup
- Use a second device or app to record as a safety net 📱
- In remote interviews, consider local recordings (double-ender) 🔄

#### 🧩 5. Use Markers
- Clap or say "MARK" if an error happens so you can find it during editing 👏
- Keep notes during recording for editing reference 📝

<YouTubeVideoRenderer videoId="ZlOmbWL0ZDM" title="Microphone Techniques for Podcasting" />

### 🔧 III. Post-Recording Practices

<YouTubeVideoRenderer videoId="_4-Bfp_bQ0k" title="Post-Recording Practices" />

#### 🎧 1. Review Immediately
- Listen for dropouts, noise, or mistakes 👂
- Re-record any essential parts if needed while still in setup 🔄

#### 📁 2. Organize Your Files
- Label recordings clearly: PodcastName_Episode##_GuestName_Date.wav 🏷️
- Back up files to cloud storage or external drive ☁️

#### 🎚️ 3. Normalize Audio Levels
- Use tools like Auphonic, Adobe Audition, or Audacity 🛠️
- Ensure all voices are at a consistent volume 📊

#### 🧼 4. Clean Up Audio
- Remove long pauses, ums/ahs, coughing, filler words ✂️
- Use EQ to boost clarity and remove low rumble 🎛️
- Apply noise reduction to eliminate background hiss 🔇

<YouTubeVideoRenderer videoId="fYHgqioY6bM" title="Audio Editing Secrets: How To Remove Filler Words, Silences & more!" />

### 🧩 IV. Special Tips for Remote Recordings

- Ask guests to wear headphones (prevents echo) 🎧
- Encourage them to use external mics or their phone's voice memo app if no mic 📱
- Have a tech-check meeting before the actual interview 🤝
- Always record separate audio tracks if your tool allows 🎵

### 📊 V. Summary Table

| Best Practice | Benefit |
|---------------|---------|
| Use quality mic + headphones | Clear, professional audio |
| Treat your room | Reduce echo and background noise |
| Monitor levels | Prevent distortion and clipping |
| Backup recordings | Protect against tech failure |
| Record separate tracks | Better control during editing |
| Minimize ambient noise | Clean recording, less editing required |
| Keep files organized | Faster editing and version tracking |

### 📝 Class Activity

**Exercise:**
Record a 2-minute podcast intro following these practices.
Then, swap files with a classmate and provide feedback on:
- Audio clarity 🔍
- Mic technique 🎙️
- Background noise 🔇
- Overall delivery 🎭

### 📚 Suggested Tools

- **Audacity** – Free recording and editing software 🆓
- **Auphonic** – Automatic audio leveling and cleanup 🤖
- **Descript** – Visual editing and transcription 📝
- **Crisp.ai / NVIDIA Broadcast** – Background noise removal 🎧
- **Zencastr / Riverside.fm** – Remote high-quality recordings 🌐
        `
      }
    },
    {
      id: 10,
      title: 'Managing and Organizing Podcast Files',
      duration: '30:00',
      type: 'video',
      content: {
        videoUrl: '',
        textContent: `
## Managing and Organizing Podcast Files

### 🎯 Objective
To help podcasters develop an efficient, repeatable file management system that ensures easy access, smooth collaboration, and long-term storage of podcast assets.

### 🧠 Why This Matters
Poor file organization can lead to:
- Lost audio or project files 🗂️
- Confusion during editing 😵‍💫
- Delayed publishing ⏰
- Inconsistent quality ⚠️

Efficient file management saves time, stress, and effort, especially as your podcast grows.

### 🗂️ I. Create a Consistent Folder Structure

<YouTubeVideoRenderer videoId="zBwS9oPf2BM" title="Create a Consistent Folder Structure" />

A reliable structure ensures every episode has its own space and files are easy to locate.

#### ✅ Example Folder Structure

**Podcast Project/**
- Episode_001/
  - Raw_Audio/
  - Edited_Audio/
  - Final/
  - Notes/
  - Artwork/
  - Transcripts/
- Episode_002/
- Music/
- Intros_Outros/
- Templates/
- Branding/

🔁 Use this same structure for every episode for consistency.

<YouTubeVideoRenderer videoId="zBwS9oPf2BM" title="Storing and Organizing Your Podcast Files | Independent Podcast Network 🎙 Podcasting. Simplified." />

### 📄 II. File Naming Conventions
Consistent naming avoids confusion. Include:
- Podcast name 📺
- Episode number 🔢
- Guest name (if applicable) 👤
- File type 📁

#### ✅ Examples:
- Plot49_Ep001_Intro.wav 🎵
- Plot49_Ep003_Interview_JaneDoe.wav 🎙️
- Plot49_Ep005_FinalMix.mp3 🎧
- Plot49_Ep007_Transcript.docx 📝

🚨 Avoid spaces and vague names like final.wav or audio1.mp3.

<YouTubeVideoRenderer videoId="cbaP6uCQnyk" title="Best Practices for File Naming Conventions and Folder Hierarchy" />

### ☁️ III. Use Cloud Storage + Backups

#### 🔹 Recommended Services
- **Google Drive** 📊
- **Dropbox** 📦
- **OneDrive** 💙
- **iCloud** 🍎
- **Notion** (for notes and tracking) 📝

#### 🔁 Best Practices
- Backup files in **two locations**: local and cloud ☁️
- Use **version control** for edits (e.g. v1, v2, final, final_v2) 🔄
- Set **permissions** if collaborating (e.g. view only vs. edit access) 👥

<YouTubeVideoRenderer videoId="ihpbZFPwWXw" title="Backing Up Unraid with Duplicati: Complete Guide for Cloud, USB, Local and Remote Backups" />

### 🗃️ IV. Use Project Management Tools
Stay on top of tasks and deadlines with tools like:
- **Trello / Notion / ClickUp** – episode planning, deadlines, checklists 📋
- **Google Sheets** – episode log with guests, dates, file links 📊
- **Airtable** – database for managing archives and marketing assets 🗃️

#### ✅ Sample Episode Tracking Sheet:

| Episode | Title | Guest | Status | Recording Date | Publish Date | File Links |
|---------|-------|-------|--------|----------------|--------------|-------------|
| 001 | Intro | N/A | Published | Jan 3 | Jan 10 | [Link] |
| 002 | Art & AI | Jane Doe | Editing | Jan 5 | Jan 17 | [Link] |
| 003 | Music Biz | Mike Smith | Scheduled | Jan 10 | Jan 24 | [Link] |

<YouTubeVideoRenderer videoId="u1kor4VPQPU" title="How I Create & Plan my Podcast Workflow in Notion" />

### 🧹 V. Clean Up Regularly
- Archive old projects to an external drive or cloud folder 📦
- Delete duplicate or corrupted files 🗑️
- Keep only the final mix and essential assets in main folders 🎯
- Use naming and tagging to search easily 🔍

### 🧠 VI. Bonus Tips

#### 🧷 Templates
Create templates for:
- Show notes 📝
- File structure 🗂️
- Naming conventions 🏷️
- Recording checklists ✅

#### 🧾 Metadata
Add metadata to your files (in MP3s):
- Title 🏷️
- Episode number 🔢
- Artist (Podcast name) 🎤
- Cover art 🎨

#### 🗓️ Automate With Naming Tools
Use tools like **NameChanger** (Mac) or **Advanced Renamer** (Windows) to batch rename files.

<YouTubeVideoRenderer videoId="R6TZaA8-y7I" title="Bonus Tips" />

### 🔄 VII. Summary Checklist
- ✅ Consistent folder structure
- ✅ Clear and descriptive file names
- ✅ Cloud + local backup
- ✅ Episode tracking sheet
- ✅ Regular clean-up and archiving
- ✅ Collaborative tools for teams

### 📚 Suggested Tools

| Purpose | Tools |
|---------|-------|
| **File storage** | Google Drive, Dropbox, OneDrive |
| **File naming automation** | NameChanger, Advanced Renamer |
| **Project management** | Notion, Trello, Airtable |
| **Audio organization** | Audacity Projects, Descript, Reaper |

### 📝 Class Activity
Create a folder structure for your next 3 episodes, including:
- Raw, edited, and final audio 🎵
- Notes and transcripts 📝
- Final MP3 🎧
- Artwork 🎨

Upload to a shared drive and practice linking from your episode tracker.
        `
      }
    },
    {
      id: 11,
      title: 'Recording & Production Quiz',
      duration: '15:00',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'Why is it important to understand the difference between in-person and remote podcast recording?',
            options: [
              'So you can reduce your internet bill',
              'It affects equipment, workflow, sound quality, and guest experience',
              'It helps you find more social media followers',
              'So you can avoid editing altogether'
            ],
            correct: 1,
            explanation: 'Understanding in-person vs remote recording affects all aspects of your podcast production - from equipment needs to workflow and final quality.'
          },
          {
            question: 'What is a defining characteristic of in-person podcast recording?',
            options: [
              'It happens over Zoom',
              'All participants are in the same physical location',
              'It always uses phone microphones',
              'Each participant uses a different software'
            ],
            correct: 1,
            explanation: 'In-person recording means all participants are physically together in the same location using a shared recording setup.'
          },
          {
            question: 'Which of the following is true about remote podcast recording?',
            options: [
              'It\'s only possible with a professional studio',
              'All guests must be in the same city',
              'Participants join from different locations, usually over the internet',
              'It requires zero equipment'
            ],
            correct: 2,
            explanation: 'Remote recording allows participants to join from separate locations, typically via internet connection.'
          },
          {
            question: 'True or False: The decision between in-person and remote podcasting does not affect your equipment or workflow.',
            options: [
              'True',
              'False'
            ],
            correct: 1,
            explanation: 'False. The choice between in-person and remote recording significantly impacts equipment needs, workflow, and production processes.'
          },
          {
            question: 'Which is a potential benefit of in-person podcast recording?',
            options: [
              'Cheaper and easier scheduling',
              'Automatic syncing of internet connections',
              'Natural conversation flow and stronger engagement',
              'Access to global guests'
            ],
            correct: 2,
            explanation: 'In-person recording enables natural conversation flow, better rapport building, and stronger guest engagement.'
          },
          {
            question: 'What is one downside of remote podcasting?',
            options: [
              'It always requires physical studio space',
              'It limits the variety of guests',
              'Editing can be more complex due to syncing and quality issues',
              'You can\'t record in high definition'
            ],
            correct: 2,
            explanation: 'Remote podcasting often requires more complex editing due to sync issues, variable audio quality, and digital artifacts.'
          },
          {
            question: 'What best describes a scenario where remote recording is ideal?',
            options: [
              'You have guests nearby and want perfect audio quality',
              'You\'re hosting a live podcast in a theater',
              'You want to feature global experts from different time zones',
              'You\'re recording with no access to the internet'
            ],
            correct: 2,
            explanation: 'Remote recording is perfect for accessing global guests and experts who can\'t be physically present.'
          },
          {
            question: 'Which of the following is not a typical remote podcast recording tool?',
            options: [
              'SquadCast',
              'Riverside.fm',
              'Zoom',
              'Rodecaster Pro'
            ],
            correct: 3,
            explanation: 'Rodecaster Pro is a physical mixing console for in-person recording, not a remote recording software platform.'
          },
          {
            question: 'What does the "double-ender" method involve?',
            options: [
              'Editing two podcast episodes at once',
              'Using two microphones for one guest',
              'Each participant records their own audio locally and syncs later',
              'Hosting the same show in two different languages'
            ],
            correct: 2,
            explanation: 'Double-ender method means each participant records their own high-quality local audio, which is later synced in post-production.'
          },
          {
            question: 'True or False: In-person podcasting always has lower equipment costs than remote podcasting.',
            options: [
              'True',
              'False'
            ],
            correct: 1,
            explanation: 'False. In-person recording typically requires higher upfront equipment costs (multiple mics, interfaces, treated space) compared to remote setups.'
          }
        ]
      }
    }
  ]
};
