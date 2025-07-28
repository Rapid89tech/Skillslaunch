import { Lesson } from '@/types/course';

export const lesson3AudioEquipment: Lesson = {
  id: 'lesson3-audio-equipment',
  title: '🎚️ Audio Interface, Mixers, Preamps',
  description: 'Understanding audio interfaces, mixers, and preamplifiers and their roles in audio systems',
  duration: '55 minutes',
  type: 'lesson',
  content: `
# 🎚️ Audio Interface, Mixers, Preamps

## 1. Audio Interface

**YouTube Video**: [Audio Interface Overview](https://youtu.be/5wabpxVRFfM)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/5wabpxVRFfM" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

**What is an Audio Interface?**
A hardware device that connects microphones, instruments, and other audio sources to a computer. Converts analog signals to digital for recording and digital signals back to analog for playback.

**Main Functions**:
- **Analog-to-Digital Conversion (ADC)**: Converts analog input signals into digital audio data
- **Digital-to-Analog Conversion (DAC)**: Converts digital audio data back into analog signals for monitoring
- Provides inputs (mic, instrument, line) and outputs (monitors, headphones)
- Often includes built-in preamps for mic/instrument signal amplification
- Supplies phantom power (+48V) for condenser microphones
- Supports various connection protocols: USB, Thunderbolt, FireWire, PCIe

**YouTube Video**: [Audio Interface Setup](https://youtu.be/example)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/example" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

**Why Use an Audio Interface?**
- Better audio quality than a computer's built-in sound card
- Lower latency (delay) for real-time monitoring
- Allows multi-channel recording

## 2. Mixers

**YouTube Video**: [Types of Mixers](https://www.youtube.com/watch?v=EZr6M6jE3Iw&pp=ygUPVFlQRVMgT0YgTUlYRVJT)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/EZr6M6jE3Iw?pp=ygUPVFlQRVMgT0YgTUlYRVJT" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

**What is a Mixer?**
A device that takes multiple audio inputs and combines them into one or more outputs. Allows control of volume, tone, and effects on each input channel.

**Types of Mixers**:

**Analog Mixer**: Uses physical knobs, faders, and switches.

**YouTube Video**: [Digital Mixers Basics](https://youtu.be/example)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/example" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

**Digital Mixer**: Uses digital processing, offers presets, effects, and recallable settings.

**YouTube Video**: [Hybrid Mixing](https://youtu.be/example)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/example" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

**Hybrid Mixer**: Combines analog controls with digital processing.

**Key Components**:
- **Channels**: Input strips for microphones or instruments
- **Faders**: Adjust channel volume
- **EQ (Equalizer)**: Modify frequency response of each channel
- **Aux Sends**: Create separate mixes for monitors or effects
- **Buses**: Group several channels for collective control
- **Master Section**: Controls the final output level

**Use Cases**:
- Live sound reinforcement
- Studio recording
- Broadcast and podcast production

## 3. Preamps (Preamplifiers)

**YouTube Video**: [Understanding Preamps](https://youtu.be/7UGEvcXlRlw)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/7UGEvcXlRlw" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

**What is a Preamp?**
A device that boosts very low-level signals (like from microphones or guitars) to line level. Essential for providing clean, noise-free amplification before processing or recording.

**Characteristics**:
- Provides gain (signal boost)
- Should have a low noise floor and high headroom
- Influences the tone and character of the sound
- Available as standalone units or built into mixers and audio interfaces
- Common types: Solid-state (clean, transparent) and Tube (warm, colored)

## 4. How They Work Together

**YouTube Video**: [Audio Equipment Integration](https://youtu.be/EP9zVernOwg)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/EP9zVernOwg" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

| Device | Function | Role in Signal Chain |
|--------|----------|---------------------|
| **Preamp** | Amplifies mic/instrument signal to line level | First stage after microphone or instrument |
| **Mixer** | Combines and processes multiple signals | Mixes all input sources, applies EQ and effects |
| **Audio Interface** | Converts analog signals to/from digital | Connects audio hardware to computer for recording/playback |

In many modern setups, audio interfaces have built-in preamps and mixing functions. External mixers or preamps are used when more control or higher quality is needed.

## 5. Summary

**YouTube Video**: [Summary of Audio Equipment](https://youtu.be/example)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/example" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

- **Audio Interface**: Converts signals between analog and digital, connects to a computer
- **Mixer**: Combines, controls, and processes multiple audio signals
- **Preamplifier**: Boosts low-level signals to line level cleanly

## Key Takeaways

1. **Audio interfaces** bridge analog and digital audio worlds
2. **Mixers** combine and control multiple audio sources
3. **Preamps** provide clean amplification for low-level signals
4. **Different mixer types** serve different applications (analog, digital, hybrid)
5. **Integration** between these devices creates complete audio systems
6. **Quality of each component** affects overall audio quality
7. **Modern interfaces** often include built-in preamps and mixing functions
8. **Understanding signal flow** helps optimize equipment setup
9. **Equipment selection** depends on specific needs and budget
10. **Proper setup and calibration** ensures optimal performance
  `
};

export default lesson3AudioEquipment; 