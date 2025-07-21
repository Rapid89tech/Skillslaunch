
export const ioPortsContent = `
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-2xl font-bold text-gray-800 mb-4">I/O Ports: USB, HDMI, Ethernet, Audio</h3>
    
    <div class="space-y-6 mb-6">
      <div class="border rounded-lg p-4">
        <h5 class="font-semibold text-blue-600 mb-2">1. Universal Serial Bus (USB)</h5>
        <p class="text-sm text-gray-700 mb-2"><strong>Definition:</strong> A widely used interface for connecting peripherals (keyboards, mice, storage devices) to computers.</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <strong class="text-gray-800">Versions:</strong>
            <ul class="text-sm text-gray-700 space-y-1 mt-1">
              <li>• USB 1.1: Up to 12 Mbps</li>
              <li>• USB 2.0: Up to 480 Mbps</li>
              <li>• USB 3.x: Up to 5 Gbps (3.0), 10 Gbps (3.1)</li>
              <li>• USB4: Up to 40 Gbps, supports Thunderbolt 3</li>
            </ul>
          </div>
          <div>
            <strong class="text-gray-800">Connector Types:</strong>
            <ul class="text-sm text-gray-700 space-y-1 mt-1">
              <li>• Type-A: Standard rectangular connector</li>
              <li>• Type-B: Usually on printers and peripherals</li>
              <li>• Mini/Micro USB: Smaller connectors for mobile devices</li>
              <li>• Type-C: Reversible connector, faster speeds</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-700 mt-2"><strong>Functions:</strong> Data transfer, power supply (charging devices), video output (via USB-C)</p>
        <p class="text-sm text-red-700 mt-1"><strong>Common Issues:</strong> Loose connections, driver conflicts, power supply issues</p>
      </div>

      <div class="border rounded-lg p-4">
        <h5 class="font-semibold text-green-600 mb-2">2. High-Definition Multimedia Interface (HDMI)</h5>
        <p class="text-sm text-gray-700 mb-2"><strong>Definition:</strong> A digital interface used to transmit uncompressed video and audio from a device to a display.</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <strong class="text-gray-800">Versions:</strong>
            <ul class="text-sm text-gray-700 space-y-1 mt-1">
              <li>• HDMI 1.4: Supports 4K at 30Hz, 1080p full HD</li>
              <li>• HDMI 2.0: Supports 4K at 60Hz, HDR</li>
              <li>• HDMI 2.1: Supports 8K, higher refresh rates</li>
            </ul>
          </div>
          <div>
            <strong class="text-gray-800">Uses:</strong>
            <ul class="text-sm text-gray-700 space-y-1 mt-1">
              <li>• Connecting computers to monitors or TVs</li>
              <li>• Audio/video transmission in home theater</li>
              <li>• Supports HDCP (copy protection)</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-red-700 mt-1"><strong>Common Issues:</strong> No signal due to bad cables, resolution mismatches, HDCP handshake failure</p>
      </div>

      <div class="border rounded-lg p-4">
        <h5 class="font-semibold text-indigo-600 mb-2">3. Ethernet Port (RJ-45)</h5>
        <p class="text-sm text-gray-700 mb-2"><strong>Definition:</strong> A port for wired network connections, typically using twisted pair cables.</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <strong class="text-gray-800">Speeds:</strong>
            <ul class="text-sm text-gray-700 space-y-1 mt-1">
              <li>• Fast Ethernet: 100 Mbps</li>
              <li>• Gigabit Ethernet: 1 Gbps (common today)</li>
              <li>• 10 Gigabit Ethernet: Used in high-end setups</li>
            </ul>
          </div>
          <div>
            <strong class="text-gray-800">Cable Types:</strong>
            <ul class="text-sm text-gray-700 space-y-1 mt-1">
              <li>• Cat5e: Supports up to 1 Gbps</li>
              <li>• Cat6: Supports up to 10 Gbps at shorter distances</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-700 mt-2"><strong>Uses:</strong> Connecting to routers, switches, modems; enterprise networks and home internet</p>
        <p class="text-sm text-red-700 mt-1"><strong>Common Issues:</strong> Loose or damaged cables, driver problems, network congestion</p>
      </div>

      <div class="border rounded-lg p-4">
        <h5 class="font-semibold text-purple-600 mb-2">4. Audio Ports</h5>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <strong class="text-gray-800">Types of Connectors:</strong>
            <ul class="text-sm text-gray-700 space-y-1 mt-1">
              <li>• 3.5mm Jack: Most common analog audio connector</li>
              <li>• RCA Connectors: Red and white for stereo audio</li>
              <li>• Optical (TOSLINK): Digital audio using fiber optic</li>
              <li>• USB Audio: Digital audio through USB interfaces</li>
            </ul>
          </div>
          <div>
            <strong class="text-gray-800">Functions:</strong>
            <ul class="text-sm text-gray-700 space-y-1 mt-1">
              <li>• Transmit audio input/output signals</li>
              <li>• Support microphones, speakers, headphones</li>
              <li>• Line-in/out devices connectivity</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-red-700 mt-1"><strong>Common Issues:</strong> No sound or distorted audio, incorrect device selection, ground loop noise</p>
      </div>
    </div>

    <div class="bg-gray-50 p-4 rounded-lg mb-4">
      <h4 class="font-bold text-lg mb-3 text-gray-800">I/O Ports Summary Table</h4>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 p-3 text-left">Port Type</th>
              <th class="border border-gray-300 p-3 text-left">Common Connector</th>
              <th class="border border-gray-300 p-3 text-left">Main Use</th>
              <th class="border border-gray-300 p-3 text-left">Max Data Speed</th>
              <th class="border border-gray-300 p-3 text-left">Typical Issues</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-3 font-semibold">USB</td>
              <td class="border border-gray-300 p-3">Type-A, Type-C, Mini, Micro</td>
              <td class="border border-gray-300 p-3">Peripherals, data, power</td>
              <td class="border border-gray-300 p-3">Up to 40 Gbps (USB4)</td>
              <td class="border border-gray-300 p-3">Loose cable, driver conflicts</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 p-3 font-semibold">HDMI</td>
              <td class="border border-gray-300 p-3">Standard, Mini, Micro</td>
              <td class="border border-gray-300 p-3">Audio/video transmission</td>
              <td class="border border-gray-300 p-3">Up to 48 Gbps (HDMI 2.1)</td>
              <td class="border border-gray-300 p-3">No signal, HDCP failure</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-3 font-semibold">Ethernet</td>
              <td class="border border-gray-300 p-3">RJ-45</td>
              <td class="border border-gray-300 p-3">Wired networking</td>
              <td class="border border-gray-300 p-3">Up to 10 Gbps</td>
              <td class="border border-gray-300 p-3">Cable damage, configuration</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 p-3 font-semibold">Audio</td>
              <td class="border border-gray-300 p-3">3.5mm, RCA, USB, Optical</td>
              <td class="border border-gray-300 p-3">Sound input/output</td>
              <td class="border border-gray-300 p-3">Analog/Digital varies</td>
              <td class="border border-gray-300 p-3">No sound, interference</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-gray-100 p-4 rounded-lg">
      <h5 class="font-semibold text-gray-800 mb-2">📺 Educational Videos:</h5>
      <ul class="text-gray-700 text-sm space-y-1">
        <li>• USB Types, Ports and Devices Explained</li>
        <li>• Hands On With HDMI 2.1 - What You Need To Know</li>
        <li>• Ethernet Explained | RJ45, GG45, Cables & Ports</li>
        <li>• Audio Connectors</li>
      </ul>
    </div>
  </div>
`;
