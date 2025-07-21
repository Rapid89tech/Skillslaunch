
import type { VideoLesson } from '@/types/course';

export const lesson1GainStaging: VideoLesson = {
  id: 16,
  title: 'Gain Staging Fundamentals',
  duration: '65 min',
  type: 'video',
  content: {
    videoUrl: 'https://example.com/gain-staging',
    textContent: `<h2>🎧 What Is Gain Staging?</h2>
<p>Gain staging is the process of managing the level (volume) of audio signals throughout the signal chain to avoid distortion, noise, or loss of clarity.</p>
<p><strong>🔑 Goal:</strong> Maintain optimal signal levels from recording to mixing to mastering — not too quiet (adds noise), not too loud (causes clipping).</p>

<h2>🎙️ Why Is Gain Staging Important?</h2>
<ul>
<li><strong>Prevents Clipping</strong> (distortion from too-high levels)</li>
<li><strong>Avoids Noise Floor</strong> (from boosting low-level signals)</li>
<li><strong>Ensures Headroom</strong> (space before distortion point)</li>
<li><strong>Improves Mix Clarity</strong> (balanced levels feed processors better)</li>
<li><strong>Protects Speakers & Ears</strong> (from accidental volume spikes)</li>
</ul>

<h2>📈 Signal Flow and Gain Stages</h2>
<p>A signal chain has multiple stages where gain can be adjusted:</p>
<table>
<tr><th>Stage</th><th>Example</th></tr>
<tr><td>1. Source</td><td>Microphone, instrument, sample</td></tr>
<tr><td>2. Preamp</td><td>Audio interface or mixer gain knobs</td></tr>
<tr><td>3. Input Level</td><td>DAW track input meters</td></tr>
<tr><td>4. Insert Effects</td><td>EQ, compression, etc.</td></tr>
<tr><td>5. Fader</td><td>Channel volume fader</td></tr>
<tr><td>6. Master Bus</td><td>Final output meter</td></tr>
</table>
<p>Each of these points is a gain stage — and must be managed.</p>

<h2>📊 Ideal Level Guidelines</h2>
<table>
<tr><th>Stage</th><th>Recommended Peak</th></tr>
<tr><td>Recording</td><td>-18 dBFS to -12 dBFS</td></tr>
<tr><td>DAW Track Input</td><td>~-12 dBFS</td></tr>
<tr><td>After EQ/FX</td><td>Keep under -6 dBFS</td></tr>
<tr><td>Master Output</td><td>Target -6 dBFS before mastering</td></tr>
</table>

<h2>⚠️ Common Gain Staging Mistakes</h2>
<table>
<tr><th>Mistake</th><th>Result</th></tr>
<tr><td>Setting input gain too high</td><td>Clipping and distortion</td></tr>
<tr><td>Mixing tracks too low</td><td>Excess noise when boosted</td></tr>
<tr><td>Overusing effects to fix gain</td><td>Introduces artifacts</td></tr>
<tr><td>Ignoring plugin input/output gain</td><td>Inconsistent signal chain</td></tr>
<tr><td>Pushing master fader to 0 dB</td><td>No headroom, distortion risk</td></tr>
</table>

<h2>🛠️ How to Gain Stage Properly</h2>
<ol>
<li><strong>Set Input Gain (Preamp Stage):</strong> Adjust microphone or instrument gain so peaks hit -18 dBFS to -12 dBFS.</li>
<li><strong>Normalize/Trim Audio Clips:</strong> Use clip gain to ensure a consistent level before applying effects.</li>
<li><strong>Use Metering Tools:</strong> Watch your track and plugin input/output meters.</li>
<li><strong>Adjust Plugin Levels:</strong> Ensure plugins don't output louder than they input (unless intentional).</li>
<li><strong>Balance Using Faders (Mixing Stage):</strong> Mix with your faders instead of cranking gain inside effects.</li>
<li><strong>Leave Headroom on the Master Bus:</strong> Don't exceed -6 dBFS on the master fader before exporting for mastering.</li>
</ol>

[[VIDEO:o-BfqvSY2w4]]

<h2>🎚️ Tools That Assist with Gain Staging</h2>
<ul>
<li><strong>VU Meters:</strong> Simulate analog meters for gain targeting</li>
<li><strong>Peak Meters:</strong> Show max level; avoid 0 dBFS</li>
<li><strong>LUFS Meters:</strong> Measure perceived loudness (used for streaming/podcasts)</li>
<li><strong>Trim/Gain Plugins:</strong> Help adjust level at any stage</li>
<li><strong>Metering Suites:</strong> iZotope Insight, Waves VU Meter, Klanghelm VUMT</li>
</ul>

[[VIDEO:ZYhhfkoZ9Ik]]

<h2>🎤 Gain Staging in Podcasting & Voice</h2>
<ul>
<li>Record voice at -16 to -12 dBFS</li>
<li>Clean up with EQ/compression, then adjust output gain</li>
<li>Use loudness normalization to target -16 LUFS (mono podcast standard)</li>
</ul>

<h2>🔁 Gain Staging vs. Volume</h2>
<table>
<tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Gain</td><td>Input level (before processing)</td></tr>
<tr><td>Volume</td><td>Output level (after processing/fader)</td></tr>
</table>
<p>➡️ Gain affects the signal before it hits effects/plugins. Volume controls what the listener hears after processing.</p>`
  }
};
