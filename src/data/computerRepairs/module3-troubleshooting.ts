
import type { Module } from '@/types/course';

export const module3Troubleshooting: Module = {
  id: 3,
  title: 'Troubleshooting & Diagnostics',
  description: 'Diagnosing hardware issues and using diagnostic tools',
  lessons: [
    {
      id: 3,
      title: 'Systematic Troubleshooting Methods',
      duration: '55 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <div class="space-y-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-3xl font-bold text-blue-600 mb-6">Module 3: Troubleshooting & Diagnostics</h2>
              
              <div class="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-blue-800 mb-3">🔷 What is POST?</h3>
                <p class="text-blue-700 mb-3">
                  POST (Power-On Self-Test) is a diagnostic testing sequence run by a computer's BIOS/UEFI when the system is powered on. It checks that essential hardware components are present and functioning properly before booting the operating system.
                </p>
                <YouTubeVideoRenderer videoId="F78v7edrNeA" title="POST Process Overview" />
              </div>

              <div class="bg-red-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-red-800 mb-3">🚨 POST Error Messages</h3>
                <p class="text-red-700 mb-3">Understanding and diagnosing POST error messages.</p>
                <YouTubeVideoRenderer videoId="QvIVtmFq2cw" title="POST Error Messages" />
              </div>

              <div class="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">🔍 POST Process Overview</h3>
                <ol class="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Power is supplied to the motherboard</li>
                  <li>BIOS/UEFI initializes and begins POST</li>
                  <li>Key components are checked: CPU, RAM, Motherboard chipset, Graphics card, Keyboard and peripherals</li>
                  <li>If no issues found, control passes to boot loader</li>
                  <li>If problems found, system provides POST error codes</li>
                </ol>
              </div>

              <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-yellow-800 mb-3">🛎️ Common POST Beep Codes</h3>
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr class="bg-gray-200">
                        <th class="border border-gray-300 p-2 text-left">Beep Pattern</th>
                        <th class="border border-gray-300 p-2 text-left">Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td class="border border-gray-300 p-2">1 short beep</td><td class="border border-gray-300 p-2">POST completed successfully</td></tr>
                      <tr><td class="border border-gray-300 p-2">Continuous beeps</td><td class="border border-gray-300 p-2">Power supply or motherboard issue</td></tr>
                      <tr><td class="border border-gray-300 p-2">1 long, 2 short beeps</td><td class="border border-gray-300 p-2">Graphics card error</td></tr>
                      <tr><td class="border border-gray-300 p-2">3 short beeps</td><td class="border border-gray-300 p-2">RAM failure</td></tr>
                      <tr><td class="border border-gray-300 p-2">5 short beeps</td><td class="border border-gray-300 p-2">CPU failure</td></tr>
                      <tr><td class="border border-gray-300 p-2">No beep</td><td class="border border-gray-300 p-2">Power, motherboard, or speaker issue</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="bg-red-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-red-800 mb-3">💻 Common POST Error Messages</h3>
                <div class="overflow-x-auto">
                  <table class="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr class="bg-gray-200">
                        <th class="border border-gray-300 p-2 text-left">Error Message</th>
                        <th class="border border-gray-300 p-2 text-left">Likely Cause</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td class="border border-gray-300 p-2">Keyboard error or no keyboard present</td><td class="border border-gray-300 p-2">Keyboard not connected or faulty</td></tr>
                      <tr><td class="border border-gray-300 p-2">CMOS checksum error</td><td class="border border-gray-300 p-2">Corrupted BIOS settings or bad CMOS battery</td></tr>
                      <tr><td class="border border-gray-300 p-2">No boot device found</td><td class="border border-gray-300 p-2">Hard drive disconnected or failed</td></tr>
                      <tr><td class="border border-gray-300 p-2">Memory test failed</td><td class="border border-gray-300 p-2">Faulty RAM</td></tr>
                      <tr><td class="border border-gray-300 p-2">CPU fan error</td><td class="border border-gray-300 p-2">Fan not connected or malfunctioning</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="bg-green-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-green-800 mb-3">🔧 Diagnostic Steps for POST Errors</h3>
                <ol class="list-decimal list-inside space-y-2 text-green-700">
                  <li><strong>Listen and Count Beeps:</strong> Identify beep pattern and refer to BIOS documentation</li>
                  <li><strong>Observe LED or Display Code:</strong> Some systems have onboard diagnostic LEDs</li>
                  <li><strong>Check Hardware Connections:</strong> Reseat RAM, GPU, check power cables</li>
                  <li><strong>Test with Minimum Hardware:</strong> Remove all but essential components</li>
                  <li><strong>Clear CMOS / Reset BIOS:</strong> Remove CMOS battery or use jumper</li>
                  <li><strong>Use Diagnostic Tools:</strong> POST cards for desktops, built-in diagnostics for laptops</li>
                </ol>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-purple-800 mb-3">🧩 Common Hardware Issues</h3>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="space-y-4">
                    <div class="border rounded-lg p-3">
                      <h4 class="font-semibold text-red-600 mb-2">1. Power Issues</h4>
                      <p class="text-sm text-gray-700 mb-2"><strong>Symptoms:</strong> Won't turn on, no LEDs, unexpected shutdowns</p>
                      <p class="text-sm text-gray-700"><strong>Fix:</strong> Check PSU, power cables, DC jack, CMOS battery</p>
                      <YouTubeVideoRenderer videoId="-u8Ioz1EaMc" title="Power Issues Troubleshooting" />
                    </div>
                    <div class="border rounded-lg p-3">
                      <h4 class="font-semibold text-orange-600 mb-2">2. Storage Issues</h4>
                      <p class="text-sm text-gray-700 mb-2"><strong>Symptoms:</strong> OS won't boot, clicking sounds, "OS not found"</p>
                      <p class="text-sm text-gray-700"><strong>Fix:</strong> Use diagnostics, reconnect drives, replace if needed</p>
                      <YouTubeVideoRenderer videoId="OdlW3LyDz14" title="Hard Drive Issues" />
                    </div>
                    <div class="border rounded-lg p-3">
                      <h4 class="font-semibold text-blue-600 mb-2">3. Display Problems</h4>
                      <p class="text-sm text-gray-700 mb-2"><strong>Symptoms:</strong> Blank screen, flickering, lines, dim backlight</p>
                      <p class="text-sm text-gray-700"><strong>Fix:</strong> Check cables, test external monitor, replace screen/GPU</p>
                      <YouTubeVideoRenderer videoId="2uOZbmbIHDA" title="Display Problem Diagnosis" />
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="border rounded-lg p-3">
                      <h4 class="font-semibold text-green-600 mb-2">4. Overheating Issues</h4>
                      <p class="text-sm text-gray-700 mb-2"><strong>Symptoms:</strong> Shutdowns, high fan noise, hot case, throttling</p>
                      <p class="text-sm text-gray-700"><strong>Fix:</strong> Clean fans, replace thermal paste, check airflow</p>
                      <YouTubeVideoRenderer videoId="1PTRCc_BRtQ" title="Overheating Solutions" />
                    </div>
                    <div class="border rounded-lg p-3">
                      <h4 class="font-semibold text-purple-600 mb-2">5. RAM Problems</h4>
                      <p class="text-sm text-gray-700 mb-2"><strong>Symptoms:</strong> Random crashes, BSOD, boot failure, beep codes</p>
                      <p class="text-sm text-gray-700"><strong>Fix:</strong> Test one stick at a time, clean slots, reseat/replace</p>
                      <YouTubeVideoRenderer videoId="KUYtpY10efY" title="RAM Troubleshooting" />
                    </div>
                    <div class="border rounded-lg p-3">
                      <h4 class="font-semibold text-indigo-600 mb-2">6. Motherboard Issues</h4>
                      <p class="text-sm text-gray-700 mb-2"><strong>Symptoms:</strong> No power/display, peripherals fail, POST errors</p>
                      <p class="text-sm text-gray-700"><strong>Fix:</strong> Visual inspection, test minimal components, replace if needed</p>
                      <YouTubeVideoRenderer videoId="y9umSeQCFkw" title="Motherboard Issues" />
                    </div>
                  </div>
                </div>

                <div class="mt-6 space-y-4">
                  <div class="border rounded-lg p-3">
                    <h4 class="font-semibold text-teal-600 mb-2">7. Keyboard and Touchpad Issues</h4>
                    <p class="text-sm text-gray-700 mb-2"><strong>Symptoms:</strong> Keys not working, touchpad unresponsive</p>
                    <YouTubeVideoRenderer videoId="bfzEwAzG830" title="Keyboard and Touchpad Issues" />
                  </div>
                  
                  <div class="border rounded-lg p-3">
                    <h4 class="font-semibold text-cyan-600 mb-2">8. I/O Ports and Peripheral Issues</h4>
                    <p class="text-sm text-gray-700 mb-2"><strong>Symptoms:</strong> Ports not working, devices not recognized</p>
                    <YouTubeVideoRenderer videoId="7WVRYlSn5sA" title="I/O Port Issues" />
                  </div>
                  
                  <div class="border rounded-lg p-3">
                    <h4 class="font-semibold text-pink-600 mb-2">9. Audio Problems</h4>
                    <p class="text-sm text-gray-700 mb-2"><strong>Symptoms:</strong> No sound, distorted audio, microphone issues</p>
                    <YouTubeVideoRenderer videoId="qgCFAPit0hI" title="Audio Problems" />
                  </div>
                  
                  <div class="border rounded-lg p-3">
                    <h4 class="font-semibold text-amber-600 mb-2">10. Peripheral and Device Issues</h4>
                    <p class="text-sm text-gray-700 mb-2"><strong>Symptoms:</strong> External devices not working</p>
                    <YouTubeVideoRenderer videoId="ij0QfMyROxk" title="Peripheral Issues" />
                  </div>
                  </div>
                </div>
              </div>

              <div class="bg-cyan-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-cyan-800 mb-3">🔧 Using Multimeters and Diagnostic Software</h3>
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-semibold text-cyan-700 mb-2">Multimeter Testing:</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Laptop Charger:</strong> Set to DC Voltage (20V range), compare to rating</li>
                      <li>• <strong>CMOS Battery:</strong> Should read ~3V (CR2032)</li>
                      <li>• <strong>DC Jack Continuity:</strong> Use continuity mode, beep indicates good connection</li>
                      <li>• <strong>Safety:</strong> Remove power before testing, use insulated probes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-cyan-700 mb-2">Diagnostic Software:</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• <strong>MemTest86:</strong> RAM testing for errors</li>
                      <li>• <strong>CrystalDiskInfo:</strong> HDD/SSD health and S.M.A.R.T data</li>
                      <li>• <strong>HWMonitor:</strong> Monitor temps, fan speeds, voltages</li>
                      <li>• <strong>CPU-Z/GPU-Z:</strong> Identify hardware specifications</li>
                    </ul>
                  </div>
                </div>
                
                <div class="mt-4">
                  <h4 class="font-semibold text-cyan-700 mb-2">Using Diagnostic Software:</h4>
                  <YouTubeVideoRenderer videoId="c89RojX624U" title="Diagnostic Software Tools" />
                </div>
              </div>

              <div class="bg-gray-100 p-4 rounded-lg">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">🧪 Best Practices</h3>
                <ul class="text-gray-700 space-y-2">
                  <li>• Work methodically—test one component at a time</li>
                  <li>• Label removed parts for reassembly</li>
                  <li>• Keep POST code reference charts handy</li>
                  <li>• Document symptoms and tests during troubleshooting</li>
                  <li>• Use systematic approach: observe, test, isolate, fix</li>
                </ul>
              </div>
            </div>
          </div>
        `
      }
    },
    {
      id: 13,
      title: 'Module 3 Quiz: Troubleshooting & Diagnostics',
      duration: '15 min',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What does the POST process do during computer startup?',
            options: [
              'Installs drivers',
              'Loads the operating system',
              'Diagnoses essential hardware components',
              'Updates BIOS firmware'
            ],
            correct: 2,
            explanation: 'POST (Power-On Self-Test) diagnoses essential hardware components to ensure they are present and functioning properly before booting the operating system.'
          },
          {
            question: 'Which of the following beep codes typically indicates a RAM failure?',
            options: [
              '1 short beep',
              'Continuous beeps',
              '3 short beeps',
              '5 short beeps'
            ],
            correct: 2,
            explanation: '3 short beeps typically indicates a RAM failure, though beep codes can vary by BIOS manufacturer.'
          },
          {
            question: 'What might a "No boot device found" error message indicate?',
            options: [
              'Faulty RAM',
              'Disconnected or failed storage drive',
              'GPU failure',
              'Corrupted BIOS'
            ],
            correct: 1,
            explanation: 'A "No boot device found" error typically indicates that the hard drive is disconnected or has failed.'
          },
          {
            question: 'What should be your first step if a system has no power and no display?',
            options: [
              'Replace the hard drive',
              'Check speaker cables',
              'Test with minimum components',
              'Install new drivers'
            ],
            correct: 2,
            explanation: 'When a system has no power and no display, you should test with minimum components (motherboard, CPU, one RAM stick, PSU) to isolate the issue.'
          },
          {
            question: 'Which tool helps you diagnose motherboard boot problems using numeric codes?',
            options: [
              'CrystalDiskInfo',
              'Multimeter',
              'POST diagnostic card',
              'HWMonitor'
            ],
            correct: 2,
            explanation: 'A POST diagnostic card displays numeric codes that help diagnose motherboard boot problems.'
          },
          {
            question: 'If a laptop shuts down due to overheating, which of the following is the most appropriate fix?',
            options: [
              'Format the hard drive',
              'Clean fans and vents',
              'Reinstall the OS',
              'Reset the BIOS'
            ],
            correct: 1,
            explanation: 'Overheating is typically caused by dust buildup, so cleaning fans and vents is the most appropriate fix.'
          },
          {
            question: 'What is the purpose of MemTest86?',
            options: [
              'Monitor fan speed',
              'Diagnose power supply voltage',
              'Test RAM for errors',
              'Detect GPU driver problems'
            ],
            correct: 2,
            explanation: 'MemTest86 is specifically designed to test RAM for errors and stability issues.'
          },
          {
            question: 'What reading should a healthy CMOS battery (CR2032) show on a multimeter?',
            options: [
              '1.5V',
              '5V',
              '3V',
              '12V'
            ],
            correct: 2,
            explanation: 'A healthy CMOS battery (CR2032) should read approximately 3V on a multimeter.'
          },
          {
            question: 'If you hear 1 long and 2 short beeps during POST, what is the likely issue?',
            options: [
              'RAM failure',
              'CPU overheating',
              'Graphics card error',
              'No keyboard detected'
            ],
            correct: 2,
            explanation: '1 long and 2 short beeps typically indicates a graphics card error during POST.'
          },
          {
            question: 'Which of the following best describes the purpose of CrystalDiskInfo?',
            options: [
              'Monitor CPU temperature',
              'View BIOS version',
              'Check HDD/SSD health and S.M.A.R.T. data',
              'Benchmark gaming performance'
            ],
            correct: 2,
            explanation: 'CrystalDiskInfo is used to check HDD/SSD health status and S.M.A.R.T. data to identify potential drive failures.'
          }
        ]
      }
    }
  ]
};
