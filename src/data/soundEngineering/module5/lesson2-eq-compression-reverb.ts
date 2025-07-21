
import type { VideoLesson } from '@/types/course';

export const lesson2EqCompressionReverb: VideoLesson = {
  id: 17,
  title: 'EQ, Compression, and Reverb',
  duration: '75 min',
  type: 'video',
  content: {
    videoUrl: 'https://example.com/eq-compression-reverb',
    textContent: `<h2>🎚️ EQ (Equalization)</h2>
<h3>A. What is EQ?</h3>
<p>EQ (Equalization) is the process of adjusting the balance of frequency content in an audio signal. It helps shape tone, correct imbalances, and create space in a mix.</p>

<h3>B. Frequency Ranges</h3>
<table>
<tr><th>Range</th><th>Frequency</th><th>Typical Sounds</th></tr>
<tr><td>Sub-bass</td><td>20–60 Hz</td><td>Rumble, power</td></tr>
<tr><td>Bass</td><td>60–250 Hz</td><td>Kick drum, bass guitar</td></tr>
<tr><td>Low mids</td><td>250–500 Hz</td><td>Warmth, muddiness</td></tr>
<tr><td>Mids</td><td>500 Hz–2 kHz</td><td>Boxiness, clarity</td></tr>
<tr><td>Upper mids</td><td>2–5 kHz</td><td>Presence, edge</td></tr>
<tr><td>Highs</td><td>5–10 kHz</td><td>Air, brightness</td></tr>
<tr><td>Brilliance</td><td>10–20 kHz</td><td>Sparkle, shimmer</td></tr>
</table>

<h3>C. Common EQ Types</h3>
<ul>
<li><strong>High-pass filter (HPF):</strong> Cuts low frequencies</li>
<li><strong>Low-pass filter (LPF):</strong> Cuts high frequencies</li>
<li><strong>Bell (Peak):</strong> Boosts or cuts a specific frequency</li>
<li><strong>Shelf (High/Low):</strong> Raises or lowers a full range</li>
<li><strong>Notch:</strong> Cuts a very narrow band (e.g., hum)</li>
</ul>

<h3>D. EQ Tips</h3>
<ul>
<li>Cut mud at 250–400 Hz</li>
<li>Reduce harshness at 2.5–4 kHz</li>
<li>Boost presence around 3–6 kHz</li>
<li>High-pass voice tracks below 80–100 Hz</li>
<li>Don't boost and cut the same frequencies in different tracks</li>
</ul>

<h2>🔊 Compression</h2>
<h3>A. What is Compression?</h3>
<p>Compression reduces the dynamic range of an audio signal. It makes loud parts quieter and quiet parts louder to create a more consistent and controlled sound.</p>

<h3>B. Key Compression Controls</h3>
<table>
<tr><th>Control</th><th>Function</th></tr>
<tr><td>Threshold</td><td>Level where compression starts</td></tr>
<tr><td>Ratio</td><td>How much compression is applied (e.g., 4:1)</td></tr>
<tr><td>Attack</td><td>How quickly compression kicks in</td></tr>
<tr><td>Release</td><td>How quickly it stops after signal drops</td></tr>
<tr><td>Knee</td><td>How smoothly compression is applied</td></tr>
<tr><td>Make-up Gain</td><td>Boosts output to compensate for loss</td></tr>
</table>

<h3>C. Types of Compression</h3>
<ul>
<li><strong>Vocal Compression:</strong> Adds consistency and intimacy</li>
<li><strong>Parallel Compression:</strong> Mixes dry + compressed signal for punch</li>
<li><strong>Multiband Compression:</strong> Compresses by frequency range</li>
<li><strong>Sidechain Compression:</strong> Duck one track (e.g., music) when another plays (e.g., voice)</li>
</ul>

<h3>D. Compression Tips</h3>
<ul>
<li>Use fast attack for controlling peaks</li>
<li>Use slower attack for punchiness</li>
<li>Avoid over-compression (can sound squashed or lifeless)</li>
<li>Always match input and output levels for fair comparison</li>
</ul>

<h2>🌊 Reverb</h2>
<h3>A. What is Reverb?</h3>
<p>Reverb simulates the reflections of sound in a physical space (room, hall, plate, etc.), adding a sense of depth, distance, and natural space.</p>

<h3>B. Common Reverb Types</h3>
<table>
<tr><th>Type</th><th>Character</th></tr>
<tr><td>Room</td><td>Small, intimate, natural</td></tr>
<tr><td>Hall</td><td>Large, lush, ambient</td></tr>
<tr><td>Plate</td><td>Smooth, metallic, used on vocals</td></tr>
<tr><td>Spring</td><td>Boingy, vintage, used on guitars</td></tr>
<tr><td>Convolution</td><td>Uses real-world impulse responses</td></tr>
</table>

<h3>C. Reverb Controls</h3>
<table>
<tr><th>Control</th><th>Purpose</th></tr>
<tr><td>Pre-delay</td><td>Delay before reverb starts (adds clarity)</td></tr>
<tr><td>Decay time</td><td>How long reverb tail lasts</td></tr>
<tr><td>Wet/Dry mix</td><td>Balance between dry (original) and wet (reverberated) signal</td></tr>
<tr><td>Size</td><td>Simulates the physical size of the space</td></tr>
<tr><td>Damping</td><td>Controls high-frequency rolloff in reverb tail</td></tr>
</table>

<h3>D. Reverb Tips</h3>
<ul>
<li>Use short reverb for clarity (podcast, speech)</li>
<li>Use longer reverb for dramatic or ambient feel</li>
<li>Pre-delay helps keep vocals upfront</li>
<li>Avoid clutter: use one or two shared reverb buses</li>
<li>High-pass the reverb return to avoid mud in low frequencies</li>
</ul>

<h2>🧠 How These Tools Work Together</h2>
<table>
<tr><th>Tool</th><th>Main Function</th><th>When to Use</th></tr>
<tr><td>EQ</td><td>Shapes tone by boosting/cutting frequencies</td><td>To fix or enhance specific frequency areas</td></tr>
<tr><td>Compression</td><td>Controls volume dynamics</td><td>To smooth vocals or control peaks</td></tr>
<tr><td>Reverb</td><td>Adds spatial depth and realism</td><td>To place sounds in a virtual space</td></tr>
</table>

<p><strong>Order in signal chain matters:</strong><br>
EQ → Compression → Reverb (most common)<br>
But can change creatively depending on desired effect</p>`
  }
};
