import { VideoLesson } from '@/types/course';

export const lesson1WhatIsSound: VideoLesson = {
  id: 1,
  title: 'What is Sound?',
  duration: '45 min',
  type: 'video',
  content: {
    videoUrl: 'https://www.youtube.com/watch?v=m3aojGTTDT8&pp=ygUjWW91VHViZTogU291bmQgYXMgYSBNZWNoYW5pY2FsIFdhdmU%3D',
    textContent: ` 🎧 Lecture Notes: What is Sound?

<div style="background: linear-gradient(135deg,rgb(234, 102, 102) 0%,hsl(0, 0.00%, 0.00%) 100%); padding: 2rem; border-radius: 15px; color: white; margin-bottom: 2rem;">
  <h2 style="margin: 0; font-size: 2rem;">Welcome to the World of Sound! 🌊</h2>
  <p style="margin-top: 1rem; opacity: 0.9;">Discover the fundamental principles that shape everything we hear</p>
</div>

 🔊 1. Definition of Sound

<div style="background: #f7fafc; border-left: 4px solid #667eea; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
  <h3>📹 <a href="https://www.youtube.com/watch?v=m3aojGTTDT8&pp=ygUjWW91VHViZTogU291bmQgYXMgYSBNZWNoYW5pY2FsIFdhdmU%3D" style="color: #667eea; text-decoration: none;">Watch: Sound as a Mechanical Wave</a></h3>
</div>

 🎯 Key Features: Mechanical Wave Fundamentals

<div style="background: linear-gradient(to right, #f3f4f6, #e5e7eb); padding: 2rem; border-radius: 12px; margin: 1.5rem 0;">
  <p style="font-size: 1.1rem; line-height: 1.8;">
    <strong>Sound is a mechanical wave</strong> resulting from particle vibrations in a medium like air, water, or solids, perceived by the human ear and interpreted by the brain as auditory information.
  </p>
</div>

💡 Why This Matters:
- 🎚️ Underpins all audio production processes
- 🎤 Essential for microphone placement
- 🏢 Informs acoustic treatment decisions
- 🎛️ Enables effective sound manipulation

<div style="background:hsl(214, 100.00%, 50.00%); border: 2px solid #3b82f6; padding: 1.5rem; border-radius: 10px; margin: 2rem 0;">
  <h4 style="color:hsl(0, 0.00%, 100.00%); margin-top: 0;">🔍 Deep Dive</h4>
  <p>Sound's nature as a mechanical wave distinguishes it from electromagnetic waves, like light, requiring a medium for propagation. This property affects how sound behaves in different environments, such as studios or open spaces.</p>
</div>


🎵 2. How Sound is Produced

<div style="background: #f7fafc; border-left: 4px solid #667eea; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
  <h3>📹 <a href="https://www.youtube.com/watch?v=XLfQpv2ZRPU&pp=ygUhWW91VHViZTogSG93IERvIFNvdW5kIFdhdmVzIFdvcms_" style="color: #667eea; text-decoration: none;">Watch: How Do Sound Waves Work?</a></h3>
</div>

🎯 Key Features: Vibration and Wave Propagation

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
  <div style="background: #fef3c7; padding: 1.5rem; border-radius: 12px; border: 2px solid #f59e0b;">
    <h4 style="color: #92400e; margin-top: 0;">🎸 Vibration Sources</h4>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Guitar strings</li>
      <li>Vocal cords</li>
      <li>Speaker cones</li>
      <li>Drum heads</li>
    </ul>
  </div>
  <div style="background: #dbeafe; padding: 1.5rem; border-radius: 12px; border: 2px solid #3b82f6;">
    <h4 style="color: #1e3a8a; margin-top: 0;">🌊 Wave Formation</h4>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Compression zones</li>
      <li>Rarefaction areas</li>
      <li>Longitudinal waves</li>
      <li>Pressure variations</li>
    </ul>
  </div>
</div>

---

📊 3. Properties of Sound Waves

<div style="background: #f7fafc; border-left: 4px solid #667eea; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
  <h3>📹 <a href="https://www.youtube.com/watch?v=mevjV5pcITc&pp=ygUjWW91VHViZTogUHJvcGVydGllcyBvZiBhIFNvdW5kIFdhdmU%3D" style="color: #667eea; text-decoration: none;">Watch: Properties of a Sound Wave</a></h3>
</div>

🎯 Key Features: The Big Five Properties

<div style="background: white; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 2rem; margin: 2rem 0;">
  <table style="width: 100%; border-collapse: collapse;">
    <thead>
      <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <th style="padding: 1rem; text-align: left; border-radius: 8px 0 0 0;">🔧 Property</th>
        <th style="padding: 1rem; text-align: left;">📐 Description</th>
        <th style="padding: 1rem; text-align: left; border-radius: 0 8px 0 0;">🎚️ Application</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 1rem; font-weight: bold; color: #667eea;">Frequency</td>
        <td style="padding: 1rem;">Determines pitch (Hz)</td>
        <td style="padding: 1rem;">Tuning instruments, sound effects</td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
        <td style="padding: 1rem; font-weight: bold; color: #667eea;">Amplitude</td>
        <td style="padding: 1rem;">Affects loudness (dB)</td>
        <td style="padding: 1rem;">Balancing mixes, dynamics</td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 1rem; font-weight: bold; color: #667eea;">Wavelength</td>
        <td style="padding: 1rem;">Distance between peaks</td>
        <td style="padding: 1rem;">Room acoustics, placement</td>
      </tr>
      <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
        <td style="padding: 1rem; font-weight: bold; color: #667eea;">Speed</td>
        <td style="padding: 1rem;">Medium-dependent rate</td>
        <td style="padding: 1rem;">Environmental design</td>
      </tr>
      <tr>
        <td style="padding: 1rem; font-weight: bold; color: #667eea;">Phase</td>
        <td style="padding: 1rem;">Waveform position</td>
        <td style="padding: 1rem;">Multi-mic setups</td>
      </tr>
    </tbody>
  </table>
</div>


🌈 4. Types of Sound Waves

<div style="background: #f7fafc; border-left: 4px solid #667eea; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
  <h3>📹 <a href="https://youtu.be/f9wzSCSDd1U" style="color: #667eea; text-decoration: none;">Watch: Types of Sound Waves</a></h3>
</div>

🎯 Key Features: The Sound Spectrum

<div style="display: flex; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 250px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 2rem; border-radius: 15px; color: white; text-align: center;">
    <h3 style="margin-top: 0;">🔊 Audible Sound</h3>
    <p style="font-size: 2rem; font-weight: bold; margin: 0.5rem 0;">20 Hz - 20 kHz</p>
    <p>Music, speech, everyday sounds</p>
  </div>
  <div style="flex: 1; min-width: 250px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 2rem; border-radius: 15px; color: white; text-align: center;">
    <h3 style="margin-top: 0;">🌍 Infrasound</h3>
    <p style="font-size: 2rem; font-weight: bold; margin: 0.5rem 0;">< 20 Hz</p>
    <p>Earthquakes, weather monitoring</p>
  </div>
  <div style="flex: 1; min-width: 250px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); padding: 2rem; border-radius: 15px; color: white; text-align: center;">
    <h3 style="margin-top: 0;">🏥 Ultrasound</h3>
    <p style="font-size: 2rem; font-weight: bold; margin: 0.5rem 0;">> 20 kHz</p>
    <p>Medical imaging, sonar</p>
  </div>
</div>


🌊 5. Mediums for Sound Transmission

<div style="background: #f7fafc; border-left: 4px solid #667eea; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
  <h3>📹 <a href="https://youtu.be/7iUbaOq5LA8" style="color: #667eea; text-decoration: none;">Watch: Sound Transmission Through Different Mediums</a></h3>
</div>

🎯 Key Features: Speed of Sound

<div style="background: linear-gradient(to bottom, #e0f2fe, #bae6fd); padding: 2rem; border-radius: 15px; margin: 2rem 0;">
  <div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 2rem;">
    <div style="text-align: center;">
      <div style="font-size: 3rem;">🪨</div>
      <h4 style="margin: 0.5rem 0;">Solids</h4>
      <p style="font-size: 1.5rem; font-weight: bold; color: #0369a1;">~5,000 m/s</p>
      <p style="font-size: 0.9rem;">Fastest transmission</p>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 3rem;">💧</div>
      <h4 style="margin: 0.5rem 0;">Liquids</h4>
      <p style="font-size: 1.5rem; font-weight: bold; color: #0369a1;">~1,500 m/s</p>
      <p style="font-size: 0.9rem;">Moderate speed</p>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 3rem;">💨</div>
      <h4 style="margin: 0.5rem 0;">Gases</h4>
      <p style="font-size: 1.5rem; font-weight: bold; color: #0369a1;">~343 m/s</p>
      <p style="font-size: 0.9rem;">Slowest in air</p>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 3rem;">🌌</div>
      <h4 style="margin: 0.5rem 0;">Vacuum</h4>
      <p style="font-size: 1.5rem; font-weight: bold; color: #dc2626;">0 m/s</p>
      <p style="font-size: 0.9rem;">No transmission</p>
    </div>
  </div>
</div>


🎭 6. Sound vs. Noise

<div style="background: #f7fafc; border-left: 4px solid #667eea; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
  <h3>📹 <a href="https://youtu.be/6gGVLYH5_Bk" style="color: #667eea; text-decoration: none;">Watch: Understanding Sound vs. Noise</a></h3>
</div>

🎯 Key Features: Organized vs. Random

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
  <div style="background: #f0fdf4; border: 2px solid #22c55e; padding: 2rem; border-radius: 15px;">
    <h3 style="color: #15803d; margin-top: 0; text-align: center;">✅ Sound</h3>
    <ul style="list-style: none; padding: 0;">
      <li style="padding: 0.5rem 0;">🎵 Musical notes</li>
      <li style="padding: 0.5rem 0;">🗣️ Speech patterns</li>
      <li style="padding: 0.5rem 0;">🎹 Harmonious tones</li>
      <li style="padding: 0.5rem 0;">🎼 Organized vibrations</li>
    </ul>
  </div>
  <div style="background: #fef2f2; border: 2px solid #ef4444; padding: 2rem; border-radius: 15px;">
    <h3 style="color: #991b1b; margin-top: 0; text-align: center;">❌ Noise</h3>
    <ul style="list-style: none; padding: 0;">
      <li style="padding: 0.5rem 0;">🚧 Random signals</li>
      <li style="padding: 0.5rem 0;">🔊 Unwanted background</li>
      <li style="padding: 0.5rem 0;">⚡ Static, hiss, hum</li>
      <li style="padding: 0.5rem 0;">💥 Disorganized patterns</li>
    </ul>
  </div>
</div>

`
  }
};

