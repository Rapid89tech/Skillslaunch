
import { VideoLesson } from '@/types/course';

export const lesson3BasicSoundProperties: VideoLesson = {
  id: 3,
  title: 'Basic Sound Properties',
  duration: '55 min',
  type: 'video',
  content: {
    videoUrl: 'https://example.com/basic-sound-properties',
    textContent: `# 🔊 Lecture Notes: Basic Sound Properties

## 1. Introduction to Sound Properties
Sound is a mechanical wave that travels through a medium by vibrating particles.

The characteristics of these waves determine how sound is perceived by the human ear.

Understanding these properties is essential for anyone working in audio, acoustics, music, or media production.

## 2. Key Properties of Sound Waves

<iframe width="560" height="315" src="https://www.youtube.com/embed/wEL87lznGrg" title="Key Properties of Sound Waves" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 🌀 A. Frequency
**Definition:** Number of wave cycles per second.

**Measured in:** Hertz (Hz)

**Perception:** Determines the pitch of the sound.
- Low frequency = Low pitch (e.g., bass guitar)
- High frequency = High pitch (e.g., whistle)

**Human hearing range:** ~20 Hz to 20,000 Hz

### 🔊 B. Amplitude
**Definition:** The height of the sound wave (from the rest position to the peak).

**Measured in:** Decibels (dB)

**Perception:** Determines loudness.
- Higher amplitude = Louder sound
- Lower amplitude = Softer sound

<iframe width="560" height="315" src="https://www.youtube.com/embed/PVObtPN_UFw" title="Amplitude" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 🌊 C. Wavelength
**Definition:** Distance between two corresponding points on consecutive waves (e.g., peak to peak).

**Measured in:** Meters

**Relationship:** Wavelength = Speed of Sound ÷ Frequency
- Longer wavelength = Lower frequency sound

<iframe width="560" height="315" src="https://www.youtube.com/embed/E-SPpUhzYZY" title="Wavelength" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 🚀 D. Speed of Sound
**Definition:** How fast a sound wave travels through a medium.

**Measured in:** Meters per second (m/s)

**Varies by Medium:**
- Air (at 20°C): ~343 m/s
- Water: ~1,480 m/s
- Steel: ~5,960 m/s

Sound travels faster in solids, slower in gases.

**YOUTUBE LINK:** Propagation speed of sound in steel, water and air

### 🔄 E. Phase
**Definition:** The position of a point in time on a waveform cycle.

Used to understand constructive and destructive interference.

In audio mixing, phase issues can cause sounds to cancel out or become distorted.

**YOUTUBE LINK:** Treat These Areas First: Where to begin Acoustic Treatment

### 🔉 F. Timbre (Tone Color)
**Definition:** The quality or color of a sound that distinguishes it from others, even if pitch and loudness are the same.

Determined by the harmonics and overtones in a sound wave.

**Example:** A violin and flute playing the same note sound different due to timbre.

**YOUTUBE LINK:** What is Timbre? | Why people interpret sounds differently

## 3. Types of Sound Waves

| Wave Type | Description | Example |
|-----------|-------------|---------|
| Longitudinal | Particles vibrate parallel to wave direction | Sound in air |
| Transverse | Particles vibrate perpendicular to wave direction | Not typical for sound in air, but seen in strings |
| Complex | Combination of many frequencies | Most real-world sounds |
| Pure Tone | Single frequency wave | Tuning fork |

## 4. Reflection, Absorption, Diffusion
**Reflection:** Sound bounces off a surface (echo).

**Absorption:** Sound energy is absorbed by material (used in soundproofing).

**Diffusion:** Sound is scattered in many directions to reduce harsh reflections.

<iframe width="560" height="315" src="https://www.youtube.com/embed/L3cIo8G65m4" title="Reflection, Absorption, Diffusion" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 5. The Inverse Square Law
As sound moves away from its source, its intensity decreases.

Doubling the distance = Quarter the intensity (−6 dB drop)

## 6. Sound Environments
**Reverberation:** Persistence of sound due to multiple reflections.

**Echo:** A distinct repetition of sound caused by reflection from a distant surface.

**Dry Sound:** Recorded in a space with little or no reverb.

**Wet Sound:** Has noticeable reverb or effects added.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xI_gXxA7GaM" title="Sound Environments" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 7. Summary of Basic Sound Properties

| Property | Measured In | Affects... |
|----------|-------------|-----------|
| Frequency | Hertz (Hz) | Pitch |
| Amplitude | Decibels (dB) | Loudness |
| Wavelength | Meters | Pitch/Speed |
| Speed | m/s | Timing |
| Phase | Degrees | Clarity/Mix |
| Timbre | N/A | Tone Quality |`
  }
};
