
import type { Module } from '@/types/course';

export const module4PowerSupply: Module = {
  id: 4,
  title: 'Power Supply & Battery Repair',
  description: 'Testing and replacing power components and batteries',
  lessons: [
    {
      id: 4,
      title: 'Power Supply Testing and Repair',
      duration: '70 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <div class="space-y-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-3xl font-bold text-blue-600 mb-6">Module 4: Power Supply & Battery Repair</h2>
              
              <div class="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-blue-800 mb-3">🔋 Types of Power Issues</h3>
                <p class="text-blue-700 mb-3">
                  Power issues are among the most common problems encountered in laptops and desktop computers. Understanding the types, causes, diagnosis, and resolution techniques is critical for any repair technician.
                </p>
              </div>

              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="bg-red-50 p-4 rounded-lg">
                  <h4 class="text-lg font-semibold text-red-800 mb-3">⚠️ 1. No Power / Dead System</h4>
                  <div class="mb-3">
                    <h5 class="font-semibold text-red-700">Symptoms:</h5>
                    <ul class="text-sm text-red-600 list-disc list-inside">
                      <li>No lights, sounds, or display when pressing power button</li>
                      <li>No fan movement or charging indicators</li>
                    </ul>
                  </div>
                  <div class="mb-3">
                    <h5 class="font-semibold text-red-700">Possible Causes:</h5>
                    <ul class="text-sm text-red-600 list-disc list-inside">
                      <li>Faulty AC adapter or charger</li>
                      <li>Damaged DC power jack</li>
                      <li>Dead battery or CMOS battery</li>
                      <li>Internal component short</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-orange-50 p-4 rounded-lg">
                  <h4 class="text-lg font-semibold text-orange-800 mb-3">⚡ 2. Battery Not Charging</h4>
                  <div class="mb-3">
                    <h5 class="font-semibold text-orange-700">Symptoms:</h5>
                    <ul class="text-sm text-orange-600 list-disc list-inside">
                      <li>Laptop runs only on AC power</li>
                      <li>Battery shows "Not Charging"</li>
                      <li>Charging light doesn't come on</li>
                    </ul>
                  </div>
                  <div class="mb-3">
                    <h5 class="font-semibold text-orange-700">Solutions:</h5>
                    <ul class="text-sm text-orange-600 list-disc list-inside">
                      <li>Replace battery with known good one</li>
                      <li>Test adapter voltage output</li>
                      <li>Update BIOS/firmware</li>
                      <li>Clean battery connectors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-yellow-800 mb-3">🔋 Laptop Battery Replacement</h3>
                
                <div class="mb-4">
                  <h4 class="font-semibold text-yellow-700 mb-2">Understanding Laptop Batteries:</h4>
                  <YouTubeVideoRenderer videoId="wqL3ZT26i4c" title="Understanding Laptop Batteries" />
                </div>
                
                <div class="mb-4">
                  <h4 class="font-semibold text-yellow-700 mb-2">Signs of a Failing Battery:</h4>
                  <YouTubeVideoRenderer videoId="ba4ToTzqF2o" title="Signs of a Failing Battery" />
                </div>
                
                <div class="mb-4">
                  <h4 class="font-semibold text-yellow-700 mb-2">Tools Required for Battery Replacement:</h4>
                  <YouTubeVideoRenderer videoId="Gdditi3KvW0" title="Battery Replacement Tools" />
                </div>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-semibold text-yellow-700 mb-2">Battery Types:</h4>
                    <ul class="text-sm text-yellow-600 space-y-1">
                      <li>• <strong>Li-ion:</strong> Most common; light, high capacity, durable</li>
                      <li>• <strong>Li-Po:</strong> Slimmer, lighter, used in ultrabooks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-yellow-700 mb-2">Signs of Failing Battery:</h4>
                    <ul class="text-sm text-yellow-600 space-y-1">
                      <li>• Rapid discharge</li>
                      <li>• Random shutdowns</li>
                      <li>• Physical bulging (Critical!)</li>
                      <li>• "Replace soon" messages</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-green-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-green-800 mb-3">🛠️ Battery Replacement Procedure</h3>
                
                <div class="mb-4">
                  <h4 class="font-semibold text-green-700 mb-2">Battery Replacement Procedure:</h4>
                  <YouTubeVideoRenderer videoId="rR9A9F5-YRg" title="Battery Replacement Procedure" />
                </div>
                
                <div class="mb-4">
                  <h4 class="font-semibold text-green-700 mb-2">Testing After Replacement:</h4>
                  <YouTubeVideoRenderer videoId="ZLB0XvKmsP0" title="Testing After Battery Replacement" />
                </div>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="border rounded-lg p-3">
                    <h4 class="font-semibold text-green-700 mb-2">For Removable Batteries:</h4>
                    <ol class="text-sm text-green-600 list-decimal list-inside space-y-1">
                      <li>Power off the laptop</li>
                      <li>Unplug the power adapter</li>
                      <li>Slide battery release latches</li>
                      <li>Remove and replace battery</li>
                      <li>Secure latches and test</li>
                    </ol>
                  </div>
                  <div class="border rounded-lg p-3">
                    <h4 class="font-semibold text-green-700 mb-2">For Internal Batteries:</h4>
                    <ol class="text-sm text-green-600 list-decimal list-inside space-y-1">
                      <li>Power off and unplug charger</li>
                      <li>Use ESD protection</li>
                      <li>Remove bottom panel</li>
                      <li>Disconnect battery cable</li>
                      <li>Install new battery carefully</li>
                      <li>Reassemble and test</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-purple-800 mb-3">🔌 DC Jack and Adapter Testing</h3>
                
                <div class="space-y-4 mb-6">
                  <div>
                    <h4 class="font-semibold text-purple-700 mb-2">DC Jack (Charging Port):</h4>
                    <YouTubeVideoRenderer videoId="pzhGMi6120o" title="DC Jack Overview" />
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-purple-700 mb-2">Common Symptoms of DC Jack Issues:</h4>
                    <YouTubeVideoRenderer videoId="JREsQQfFN9E" title="DC Jack Symptoms" />
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-purple-700 mb-2">Testing the Laptop Adapter:</h4>
                    <YouTubeVideoRenderer videoId="SW5c5b7b6AY" title="Testing Laptop Adapter" />
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-purple-700 mb-2">Set Multimeter to DC Voltage:</h4>
                    <YouTubeVideoRenderer videoId="YBhsVHideGE" title="Multimeter DC Voltage" />
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-purple-700 mb-2">Wiggle Test:</h4>
                    <YouTubeVideoRenderer videoId="r0-6YYixUdw" title="Adapter Wiggle Test" />
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-purple-700 mb-2">Testing the DC Jack:</h4>
                    <YouTubeVideoRenderer videoId="AdGHqfVFQdY" title="Testing DC Jack" />
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-purple-700 mb-2">Repair or Replacement:</h4>
                    <YouTubeVideoRenderer videoId="b5rtZZB06fU" title="DC Jack Repair" />
                  </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-semibold text-purple-700 mb-2">Testing Adapter:</h4>
                    <ul class="text-sm text-purple-600 space-y-1">
                      <li>• Set multimeter to DC voltage</li>
                      <li>• Red probe to inner pin (positive)</li>
                      <li>• Black probe to outer ring (ground)</li>
                      <li>• Expected: ~19V (check label)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-purple-700 mb-2">Testing DC Jack:</h4>
                    <ul class="text-sm text-purple-600 space-y-1">
                      <li>• Visual inspection for damage</li>
                      <li>• Continuity test with multimeter</li>
                      <li>• Check solder joints</li>
                      <li>• Test voltage at motherboard</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-cyan-50 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-cyan-800 mb-3">🌡️ Additional Power Issues</h3>
                
                <div class="space-y-4 mb-6">
                  <div>
                    <h4 class="font-semibold text-cyan-700 mb-2">Intermittent Power / Random Shutdowns:</h4>
                    <YouTubeVideoRenderer videoId="ipTyEY-fGNA" title="Intermittent Power Issues" />
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-cyan-700 mb-2">Overheating and Thermal Shutdown:</h4>
                    <YouTubeVideoRenderer videoId="pDq-TuwWI5k" title="Overheating Issues" />
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-cyan-700 mb-2">Reboot Loop:</h4>
                    <YouTubeVideoRenderer videoId="7BM-tG5vqPs" title="Boot Loop Issues" />
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-cyan-700 mb-2">Short Circuit / Burnt Smell:</h4>
                    <YouTubeVideoRenderer videoId="Wqvi3nLg19o" title="Short Circuit Diagnosis" />
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-cyan-700 mb-2">Power Button Not Working:</h4>
                    <YouTubeVideoRenderer videoId="UD7RHpY8mlE" title="Power Button Issues" />
                  </div>
                </div>
                
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="border rounded-lg p-3">
                    <h4 class="font-semibold text-cyan-700 mb-2">Random Shutdowns</h4>
                    <p class="text-sm text-gray-700 mb-2"><strong>Causes:</strong> Overheating, loose connections, PSU instability</p>
                    <p class="text-sm text-gray-700"><strong>Fix:</strong> Clean fans, reseat components, check thermal paste</p>
                  </div>
                  <div class="border rounded-lg p-3">
                    <h4 class="font-semibold text-cyan-700 mb-2">Boot Loop</h4>
                    <p class="text-sm text-gray-700 mb-2"><strong>Causes:</strong> Faulty RAM, corrupt BIOS, power delivery issues</p>
                    <p class="text-sm text-gray-700"><strong>Fix:</strong> Test RAM, flash BIOS, check power rails</p>
                  </div>
                  <div class="border rounded-lg p-3">
                    <h4 class="font-semibold text-cyan-700 mb-2">Short Circuit</h4>
                    <p class="text-sm text-gray-700 mb-2"><strong>Signs:</strong> Burnt smell, adapter LED turns off</p>
                    <p class="text-sm text-gray-700"><strong>Fix:</strong> Inspect motherboard, replace damaged components</p>
                  </div>
                </div>
              </div>

              <div class="bg-red-100 p-4 rounded-lg mb-6">
                <h3 class="text-xl font-semibold text-red-800 mb-3">🚨 Safety Precautions</h3>
                <ul class="text-red-700 space-y-2">
                  <li>• Never puncture or bend batteries (fire hazard)</li>
                  <li>• Use ESD protection when handling internal components</li>
                  <li>• Always power off and unplug before testing</li>
                  <li>• Dispose of old batteries at certified recycling centers</li>
                  <li>• If battery is swollen, isolate in fire-safe bag</li>
                </ul>
              </div>

              <div class="bg-gray-100 p-4 rounded-lg">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">🧰 Required Tools</h3>
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 class="font-semibold text-gray-700 mb-2">Basic Tools:</h4>
                    <ul class="text-gray-600 space-y-1">
                      <li>• Digital multimeter</li>
                      <li>• Precision screwdriver set</li>
                      <li>• Anti-static wrist strap</li>
                      <li>• Plastic spudger/pry tools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-700 mb-2">Testing Equipment:</h4>
                    <ul class="text-gray-600 space-y-1">
                      <li>• Known-good power adapter</li>
                      <li>• Battery testing software</li>
                      <li>• Thermal monitoring tools</li>
                      <li>• Replacement batteries/adapters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      }
    },
    {
      id: 14,
      title: 'Module 4 Quiz: Power Supply & Battery Repair',
      duration: '15 min',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'Which of the following is NOT a typical symptom of a laptop with no power?',
            options: [
              'No display or lights',
              'Fan spins but no charging light',
              'BIOS error message',
              'No fan or sound when pressing power'
            ],
            correct: 2,
            explanation: 'A BIOS error message indicates the system is powered on and running POST. The other options indicate no power issues.'
          },
          {
            question: 'What is the most common voltage output for a standard laptop adapter?',
            options: [
              '5V',
              '12V',
              '19V',
              '24V'
            ],
            correct: 2,
            explanation: '19V is the most common voltage output for standard laptop adapters, though this can vary by manufacturer.'
          },
          {
            question: 'A laptop runs fine on AC but shows "Plugged in, not charging." What is the LEAST likely cause?',
            options: [
              'A faulty battery',
              'A defective charger',
              'Bad display cable',
              'A damaged charging IC'
            ],
            correct: 2,
            explanation: 'A bad display cable would not affect charging functionality. The other options are all potential causes of charging issues.'
          },
          {
            question: 'What tool should you use to test continuity between a DC jack and the motherboard?',
            options: [
              'Oscilloscope',
              'Signal tracer',
              'Digital multimeter',
              'Voltage regulator'
            ],
            correct: 2,
            explanation: 'A digital multimeter in continuity mode is the correct tool for testing electrical continuity between components.'
          },
          {
            question: 'During a wiggle test on an adapter, the voltage reading cuts in and out. What does this indicate?',
            options: [
              'Dead CMOS battery',
              'Bad RAM',
              'Loose or broken adapter wiring',
              'BIOS failure'
            ],
            correct: 2,
            explanation: 'Intermittent voltage during a wiggle test indicates loose or broken wiring inside the adapter cable.'
          },
          {
            question: 'What is the first step before replacing an internal laptop battery?',
            options: [
              'Open the laptop\'s display',
              'Remove the SSD',
              'Power off and unplug the device',
              'Format the hard drive'
            ],
            correct: 2,
            explanation: 'Safety first: always power off and unplug the device before performing any internal repairs.'
          },
          {
            question: 'Which of the following is a sign of a failing lithium battery?',
            options: [
              'Laptop charges faster than normal',
              'Battery lasts longer than usual',
              'Battery percentage drops suddenly',
              'Battery icon turns red'
            ],
            correct: 2,
            explanation: 'Sudden battery percentage drops indicate failing battery cells that can no longer hold charge properly.'
          },
          {
            question: 'If a laptop restarts randomly, what is the FIRST thing you should check?',
            options: [
              'Internet connection',
              'Thermal paste and cooling fan',
              'Printer settings',
              'Display brightness'
            ],
            correct: 1,
            explanation: 'Random restarts are often caused by overheating, so checking thermal paste and cooling fans should be the first step.'
          },
          {
            question: 'A burnt smell and adapter LED turning off when plugged in may indicate:',
            options: [
              'Normal behavior',
              'Dead battery',
              'Short circuit on motherboard',
              'BIOS update required'
            ],
            correct: 2,
            explanation: 'A burnt smell combined with adapter LED turning off indicates a short circuit, which is a serious safety issue.'
          },
          {
            question: 'When testing a barrel-type adapter with a multimeter, the red probe should contact:',
            options: [
              'Outer shell (negative)',
              'Power switch',
              'Inner pin (positive)',
              'Laptop battery terminal'
            ],
            correct: 2,
            explanation: 'The red probe (positive) should contact the inner pin of the barrel connector, while the black probe contacts the outer shell (ground).'
          }
        ]
      }
    }
  ]
};
