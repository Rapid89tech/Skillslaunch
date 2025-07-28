import { Lesson } from '@/types/course';

export const lesson1TypesOfMicrophones: Lesson = {
  id: 'lesson1-types-of-microphones',
  title: '🎙️ Types of Microphones',
  description: 'Understanding different microphone types, their characteristics, and applications',
  duration: '50 minutes',
  type: 'lesson',
  content: `
# 🎙️ Types of Microphones

## 1. Introduction to Microphones

**What is a Microphone?**
A microphone (mic) is a transducer that converts sound (acoustic energy) into electrical signals. It captures audio from voices, instruments, or environments for recording, amplification, or broadcasting.

## 2. Microphone Classifications

**YouTube Video**: [Microphone Classifications Overview](https://youtu.be/example)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/example" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Microphones are commonly classified by:
- **Transducer Type**: How they convert sound
- **Polar Pattern**: Directionality of sound pickup
- **Application/Design**: Usage or physical design

## 3. By Transducer Type

### A. Dynamic Microphones

**YouTube Video**: [Dynamic Microphones](https://youtu.be/Ofq6FrI6dd4)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/Ofq6FrI6dd4" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Use a moving coil and magnetic field to generate signal.

**Features**:
- No external power needed
- Handles high SPL (sound pressure levels)
- Less sensitive to quiet, subtle sounds

**Examples**:
- Shure SM58 (vocals)
- Shure SM57 (instruments)

**Use Cases**:
- Live performances
- Drums, guitar amps, vocals (live)

### B. Condenser Microphones

**YouTube Video**: [Condenser Microphones](https://youtu.be/omOTBD19P4I)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/omOTBD19P4I" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Use a capacitor (electrostatic) element to detect sound. Require phantom power (+48V) or battery.

**Features**:
- High sensitivity and wide frequency response
- Better for capturing detail and nuance
- More fragile than dynamic mics

**Examples**:
- Audio-Technica AT2020
- Neumann U87

**Use Cases**:
- Studio vocals
- Acoustic instruments
- Podcasting and broadcasting

### C. Ribbon Microphones

**YouTube Video**: [Ribbon Microphones](https://youtu.be/sE8cp7usjXo)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/sE8cp7usjXo" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Use a thin metal ribbon suspended in a magnetic field.

**Features**:
- Natural, vintage sound with smooth high frequencies
- Very delicate and sensitive to handling and wind

**Examples**:
- Royer R-121
- AEA R84

**Use Cases**:
- Studio recording
- Vocals, brass, strings, guitar cabinets

## 4. By Polar Pattern (Directionality)

### A. Omnidirectional

**YouTube Video**: [Omnidirectional Microphones](https://youtu.be/AdOx7t-J2ek)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/AdOx7t-J2ek" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Picks up sound equally from all directions.

**Use Cases**:
- Room mics
- Lavaliers for interviews
- Classical music recording

### B. Cardioid

**YouTube Video**: [Cardioid Microphones](https://youtu.be/keBa2ocQInI)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/keBa2ocQInI" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Picks up mostly from the front, rejects sound from the back. Most common pattern.

**Use Cases**:
- Studio vocals
- Live sound
- Voice-over

### C. Supercardioid / Hypercardioid

**YouTube Video**: [Supercardioid Microphones](https://youtu.be/nTFeedjmJxQ)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/nTFeedjmJxQ" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Tighter front pickup than cardioid, slightly more rear sensitivity. Better side rejection.

**Use Cases**:
- Noisy environments
- Stage miking

### D. Bidirectional (Figure-8)

**YouTube Video**: [Bidirectional Microphones](https://youtu.be/example)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/example" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Picks up sound from front and back, rejects sides.

**Use Cases**:
- Duets, interviews (face-to-face)
- Blumlein stereo technique

## 5. Specialty Microphones

### A. Lavalier Microphones

**YouTube Video**: [Lavalier Microphones](https://youtu.be/mUlB0lLXZNM)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/mUlB0lLXZNM" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Small, clip-on mics for voice capture, usually omnidirectional.

**Used in**: Film, broadcasting, theater

### B. Shotgun Microphones

**YouTube Video**: [Shotgun Microphones](https://youtu.be/h3LSEnI3ko0)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/h3LSEnI3ko0" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Highly directional with narrow pickup angle, uses interference tube to reject off-axis sound.

**Use Cases**:
- Film and TV production
- Field recording

### C. USB Microphones

**YouTube Video**: [USB Microphones](https://youtu.be/sDjr1G0uqRc)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/sDjr1G0uqRc" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Built-in analog-to-digital converter and USB output, plug-and-play with computers.

**Use Cases**:
- Podcasting
- Home studios
- Streaming

### D. Boundary Microphones (PZM)

**YouTube Video**: [Boundary Microphones](https://youtu.be/PLM70P1xrEA)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/PLM70P1xrEA" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Placed on flat surfaces; pick up ambient sound.

**Use Cases**: Conferences, stage floors

## 6. Microphone Selection Considerations

| Factor | Description |
|--------|-------------|
| **Source Type** | Voice, drums, strings, ambient, etc. |
| **Environment** | Studio, live stage, noisy field, etc. |
| **Budget** | Cost and durability |
| **Sound Quality** | Detail, warmth, frequency response |
| **Pickup Pattern** | Directionality and isolation needs |

## 7. Summary Table

| Type | Power Needed | Sensitivity | Durability | Common Use |
|------|--------------|-------------|------------|------------|
| Dynamic | No | Low | High | Live vocals, drums |
| Condenser | Yes (+48V) | High | Moderate | Studio vocals, acoustic |
| Ribbon | No (some yes) | Medium-High | Low | Studio instruments |
| Lavalier | Yes (battery or phantom) | Medium | Moderate | Interviews, film |
| Shotgun | Yes | High | High | Film, field recording |

## 8. Conclusion

**YouTube Video**: [Choosing Microphones for Different Applications](https://youtu.be/example)

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/example" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Understanding microphone types helps in choosing the right mic for optimal sound quality, appropriate application, and maximum performance in different recording environments.

**Tip**: Always match mic type and pattern to the sound source and setting.

## Key Takeaways

1. **Microphones are transducers** that convert acoustic energy to electrical signals
2. **Dynamic mics** are rugged and don't need power, ideal for live use
3. **Condenser mics** are sensitive and detailed, perfect for studio recording
4. **Ribbon mics** provide vintage character but are delicate
5. **Polar patterns** determine directionality and isolation capabilities
6. **Specialty mics** serve specific applications (lavalier, shotgun, USB, boundary)
7. **Selection depends on** source type, environment, budget, and quality needs
8. **Understanding mic characteristics** helps optimize recording quality
9. **Proper mic selection** is crucial for professional audio production
10. **Different applications** require different microphone types and patterns
  `
};

export default lesson1TypesOfMicrophones; 