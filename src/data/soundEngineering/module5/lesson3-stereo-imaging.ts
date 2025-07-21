
import type { VideoLesson } from '@/types/course';

export const lesson3StereoImaging: VideoLesson = {
  id: 18,
  title: 'Stereo Imaging Techniques',
  duration: '55 min',
  type: 'video',
  content: {
    videoUrl: 'https://example.com/stereo-imaging',
    textContent: `<h2>🎧 What Is Stereo Imaging?</h2>
<p>Stereo Imaging refers to the perceived spatial location of audio within the stereo field — left, center, right — and the width and depth of a mix.</p>
<p>🧠 It determines where sounds appear to come from in a stereo environment and how wide or narrow your mix feels.</p>

<h2>🖼️ The Stereo Field</h2>
<p>The stereo field consists of three key dimensions:</p>
<table>
<tr><th>Dimension</th><th>Description</th></tr>
<tr><td>Left to Right (Width)</td><td>Pan position — is the sound left, right, or center?</td></tr>
<tr><td>Front to Back (Depth)</td><td>Perceived distance — created by volume, EQ, and reverb</td></tr>
<tr><td>Top to Bottom (Height)</td><td>Implied by frequency content (not true spatial height)</td></tr>
</table>

<h2>🎚️ Key Stereo Imaging Techniques</h2>
<h3>A. Panning</h3>
<ul>
<li>Moves sounds between left and right speakers</li>
<li>Creates separation and clarity</li>
<li>Rule of thumb: Keep essential elements (like vocals, bass, kick) centered</li>
</ul>

<h3>B. Stereo Widening</h3>
<ul>
<li>Expands mix beyond the speakers</li>
<li>Can be achieved via:
<ul>
<li>Doubling & panning</li>
<li>Stereo effects (chorus, delays)</li>
<li>Mid/Side processing</li>
<li>Dedicated stereo imaging plugins</li>
</ul>
</li>
</ul>

<h3>C. Mono Compatibility</h3>
<ul>
<li>Ensures mix doesn't fall apart when summed to mono</li>
<li>Important for broadcast, phones, smart speakers</li>
</ul>

<h3>D. Reverb & Delay</h3>
<ul>
<li>Reverb adds spatial depth; stereo reverbs create width</li>
<li>Delays panned differently in each ear create movement</li>
</ul>

<h2>📦 Tools Used for Stereo Imaging</h2>
<table>
<tr><th>Tool</th><th>Purpose</th></tr>
<tr><td>Panner</td><td>Moves sound across stereo field</td></tr>
<tr><td>Stereo Wideners</td><td>Expand perceived width</td></tr>
<tr><td>Mid/Side EQ or Compression</td><td>Treat center vs. sides independently</td></tr>
<tr><td>Stereo Meters</td><td>Visualize balance and phase issues</td></tr>
<tr><td>Imaging Plugins</td><td>iZotope Ozone Imager, Waves S1, etc.</td></tr>
</table>

<h2>🎙️ Use in Podcasts & Voice Production</h2>
<ul>
<li><strong>Voice:</strong> Usually centered for clarity and focus</li>
<li><strong>Music bed/sound effects:</strong> Can be panned or widened for immersion</li>
<li><strong>Binaural and spatial audio:</strong> Simulate full 3D placement with headphones</li>
</ul>

<h2>⚠️ Common Stereo Imaging Mistakes</h2>
<table>
<tr><th>Mistake</th><th>Consequence</th></tr>
<tr><td>Excessive widening</td><td>Phase cancellation, hollow sound</td></tr>
<tr><td>Narrow mix</td><td>Feels flat, lacks excitement</td></tr>
<tr><td>Important sounds off-center</td><td>Distraction or imbalance</td></tr>
<tr><td>Ignoring mono compatibility</td><td>Sounds disappear in mono playback</td></tr>
<tr><td>Using stereo FX on bass</td><td>Can cause phase/clarity issues</td></tr>
</table>

<h2>🧪 Practical Tips</h2>
<ul>
<li>Start in mono to balance levels and EQ; switch to stereo to place sounds</li>
<li>Keep low-end (kick, bass) in mono</li>
<li>Use stereo widening sparingly and musically</li>
<li>Check mix with a correlation meter to avoid phase issues</li>
<li>Use automation to move elements subtly across stereo field over time</li>
</ul>

<h2>🧠 Key Terms to Remember</h2>
<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td>Pan</td><td>Left-to-right positioning in stereo field</td></tr>
<tr><td>Width</td><td>Perceived separation between left/right</td></tr>
<tr><td>Depth</td><td>Sense of front/back space in a mix</td></tr>
<tr><td>Mid/Side (M/S)</td><td>Processing center and side channels separately</td></tr>
<tr><td>Phase Cancellation</td><td>Loss of signal when stereo collapses to mono</td></tr>
</table>`
  }
};
