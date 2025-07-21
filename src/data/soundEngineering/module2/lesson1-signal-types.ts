
import type { Lesson } from '@/types/course';

export const lesson1SignalTypes: Lesson = {
  id: 6,
  title: 'Signal Types – Analog vs Digital',
  duration: '45 min',
  type: 'video',
  content: {
    videoUrl: 'https://www.youtube.com/embed/Yh8-0bj3_sI',
    textContent: `
      <div class="space-y-8">
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-lg">
          <h2 class="text-4xl font-bold text-purple-800 mb-6 text-center animate-fade-in">
            📡 Signal Types – Analog vs Digital
          </h2>
          
          <div class="bg-white p-6 rounded-lg shadow-md mb-6 animate-scale-in">
            <h3 class="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
              <span class="animate-pulse mr-3">🌊</span>
              Introduction to Signals
            </h3>
            <div class="space-y-3 text-gray-700">
              <p class="leading-relaxed">
                A signal is a function that conveys information about a phenomenon.
              </p>
              <p class="leading-relaxed">
                Signals can be electrical, acoustic, optical, or mechanical, used to transmit data or sound.
              </p>
              <p class="leading-relaxed">
                In audio and communications, signals represent sound waves or data streams.
              </p>
            </div>
          </div>

          <div class="my-8">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/X5W07irHpgw" title="Analog signals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="rounded-lg shadow-lg"></iframe>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg shadow-md border-l-4 border-green-500 animate-slide-in-left">
              <h3 class="text-2xl font-semibold text-green-800 mb-4 flex items-center">
                <span class="animate-bounce mr-3">📻</span>
                Analog Signals
              </h3>
              <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-semibold text-green-700 mb-2">Definition:</h4>
                  <p class="text-sm text-gray-600">
                    An analog signal is a continuous signal that varies smoothly over time and can take any value within a range.
                  </p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-semibold text-green-700 mb-2">Characteristics:</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Continuous in both time and amplitude</li>
                    <li>• Represents information as fluctuations in voltage, current, or another physical quantity</li>
                    <li>• Closely mimics the original sound wave or physical phenomenon</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-semibold text-green-700 mb-2">Examples:</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Human voice captured by a microphone produces analog electrical signals</li>
                    <li>• Vinyl records, cassette tapes store analog audio</li>
                    <li>• Analog radios and televisions use analog signals</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <p class="text-sm text-gray-600">
                    <strong>Waveform:</strong> Smooth, continuous waveform that changes fluidly.
                  </p>
              </div>
            </div>
          </div>

          <div class="my-8">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/2BbkLImFKxs" title="What is an Analog Signal?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="rounded-lg shadow-lg"></iframe>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500 animate-slide-in-right">
              <h3 class="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
                <span class="animate-bounce mr-3">💾</span>
                Digital Signals
              </h3>
              <div class="space-y-4">
                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-semibold text-blue-700 mb-2">Definition:</h4>
                  <p class="text-sm text-gray-600">
                    A digital signal represents information using discrete (binary) values, typically 0s and 1s.
                  </p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-semibold text-blue-700 mb-2">Characteristics:</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Discrete in both time and amplitude</li>
                    <li>• Converts continuous analog signals into a series of samples at specific intervals (sampling)</li>
                    <li>• Each sample is quantized into a finite number of amplitude levels</li>
                    <li>• Enables error detection and correction during transmission</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-semibold text-blue-700 mb-2">Examples:</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• CDs, MP3s, and streaming audio files store sound digitally</li>
                    <li>• Digital phones, computers, and modern broadcasting use digital signals</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <p class="text-sm text-gray-600">
                    <strong>Waveform:</strong> Step-like or square waveform with defined high and low levels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="my-8">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/xtjIu9H_jO0" title="Digital signals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="rounded-lg shadow-lg"></iframe>
          </div>

          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg shadow-md mb-6 animate-fade-in">
            <h3 class="text-2xl font-semibold text-orange-800 mb-4 text-center">
              ⚖️ Key Differences Between Analog and Digital Signals
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead>
                  <tr class="bg-orange-100">
                    <th class="border border-orange-300 p-3 text-left font-semibold">Aspect</th>
                    <th class="border border-orange-300 p-3 text-left font-semibold">Analog Signal</th>
                    <th class="border border-orange-300 p-3 text-left font-semibold">Digital Signal</th>
                  </tr>
                </thead>
                <tbody class="text-gray-700">
                  <tr class="hover:bg-orange-50 transition-colors">
                    <td class="border border-orange-300 p-3 font-medium">Nature</td>
                    <td class="border border-orange-300 p-3">Continuous waveform</td>
                    <td class="border border-orange-300 p-3">Discrete binary values</td>
                  </tr>
                  <tr class="hover:bg-orange-50 transition-colors">
                    <td class="border border-orange-300 p-3 font-medium">Values</td>
                    <td class="border border-orange-300 p-3">Infinite possible values</td>
                    <td class="border border-orange-300 p-3">Limited finite values (usually 0 & 1)</td>
                  </tr>
                  <tr class="hover:bg-orange-50 transition-colors">
                    <td class="border border-orange-300 p-3 font-medium">Noise Sensitivity</td>
                    <td class="border border-orange-300 p-3">More susceptible to noise and distortion</td>
                    <td class="border border-orange-300 p-3">Less affected by noise, more robust</td>
                  </tr>
                  <tr class="hover:bg-orange-50 transition-colors">
                    <td class="border border-orange-300 p-3 font-medium">Signal Processing</td>
                    <td class="border border-orange-300 p-3">Complex, requires analog circuitry</td>
                    <td class="border border-orange-300 p-3">Easier with computers and DSP</td>
                  </tr>
                  <tr class="hover:bg-orange-50 transition-colors">
                    <td class="border border-orange-300 p-3 font-medium">Storage</td>
                    <td class="border border-orange-300 p-3">Requires physical medium (tape, vinyl)</td>
                    <td class="border border-orange-300 p-3">Stored in digital media (hard drives, SSDs)</td>
                  </tr>
                  <tr class="hover:bg-orange-50 transition-colors">
                    <td class="border border-orange-300 p-3 font-medium">Transmission</td>
                    <td class="border border-orange-300 p-3">Prone to degradation over distance</td>
                    <td class="border border-orange-300 p-3">Can be regenerated to maintain quality</td>
                  </tr>
                  <tr class="hover:bg-orange-50 transition-colors">
                    <td class="border border-orange-300 p-3 font-medium">Bandwidth Usage</td>
                    <td class="border border-orange-300 p-3">Requires less bandwidth</td>
                    <td class="border border-orange-300 p-3">Requires higher bandwidth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-md animate-scale-in">
              <h3 class="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <span class="animate-pulse mr-3">🔄</span>
                Analog to Digital Conversion (ADC)
              </h3>
              <div class="space-y-3 text-gray-700">
                <p><strong>Process:</strong></p>
                <ul class="space-y-1 text-sm">
                  <li>• Analog signals are converted to digital via sampling and quantization</li>
                  <li>• <strong>Sampling Rate:</strong> How many samples are taken per second (measured in Hertz, e.g., 44.1 kHz for CDs)</li>
                  <li>• <strong>Bit Depth:</strong> Number of bits used to represent each sample (e.g., 16-bit, 24-bit). Higher bit depth = better dynamic range</li>
                </ul>
                <div class="bg-white p-3 rounded-lg mt-3">
                  <p class="text-sm font-medium text-purple-700">Nyquist Theorem:</p>
                  <p class="text-sm text-gray-600">
                    To accurately represent a signal digitally, the sampling rate must be at least twice the highest frequency component in the signal.
                  </p>
                </div>
              </div>
            </div>

            <div class="my-8">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/-R4SNrdLSEI" title="Analog to Digital Conversion (ADC)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="rounded-lg shadow-lg"></iframe>
            </div>

            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg shadow-md animate-scale-in">
              <h3 class="text-xl font-semibold text-teal-800 mb-4 flex items-center">
                <span class="animate-pulse mr-3">🔄</span>
                Digital to Analog Conversion (DAC)
              </h3>
              <div class="space-y-3 text-gray-700 text-sm">
                <p>Converts digital samples back into a continuous analog waveform for playback or processing.</p>
                <p>DAC quality affects audio fidelity.</p>
              </div>
            </div>
          </div>

          <div class="my-8">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/mDngoCbDQyM" title="Digital to Analog Conversion (DAC)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="rounded-lg shadow-lg"></iframe>
          </div>

          <div class="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg shadow-md mb-6 animate-fade-in">
            <h3 class="text-2xl font-semibold text-red-800 mb-4 text-center">
              ⚡ Advantages and Disadvantages
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-green-700">Analog Signal</h4>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-green-600 mb-2">Advantages:</h5>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Natural, smooth sound</li>
                    <li>• Simple to generate</li>
                    <li>• Low latency</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-red-600 mb-2">Disadvantages:</h5>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Susceptible to noise & degradation</li>
                    <li>• Difficult to store long-term</li>
                    <li>• Less flexible processing</li>
                  </ul>
                </div>
              </div>
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-blue-700">Digital Signal</h4>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-green-600 mb-2">Advantages:</h5>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Noise resistant</li>
                    <li>• Easily stored & copied</li>
                    <li>• Easy to process & manipulate</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h5 class="font-semibold text-red-600 mb-2">Disadvantages:</h5>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Requires ADC & DAC hardware</li>
                    <li>• Quantization introduces small errors</li>
                    <li>• More bandwidth needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg shadow-md animate-fade-in">
            <h3 class="text-2xl font-semibold text-indigo-800 mb-4 text-center">
              🎯 Summary
            </h3>
            <div class="space-y-3 text-gray-700">
              <p>• Analog signals are continuous and closely mimic real-world phenomena but are prone to noise.</p>
              <p>• Digital signals use discrete values, enabling robust transmission, storage, and processing.</p>
              <p>• Most modern audio and communication systems use digital signals due to their flexibility and quality preservation.</p>
              <p>• Understanding both is essential for audio engineering, telecommunications, and signal processing careers.</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
};
