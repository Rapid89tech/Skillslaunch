
import type { Module } from '@/types/course';

export const module10DataRecovery: Module = {
  id: 10,
  title: 'Data Recovery and Backup',
  description: 'Recovering lost data and implementing backup strategies',
  lessons: [
    {
      id: 10,
      title: 'Data Recovery Methods',
      duration: '90 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl p-8 text-white">
              <div class="text-center space-y-4">
                <div class="text-6xl mb-4">💾</div>
                <h2 class="text-3xl font-bold">Module 10: Data Recovery and Backup</h2>
                <p class="text-xl opacity-90">Recovering lost data and implementing backup strategies</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-red-600 mb-4">💔 Understanding Data Loss</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">Hardware Failures:</h4>
                  <YouTubeVideoRenderer videoId="E59xfDlU70Q" title="Hardware Failures" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">Software Corruption:</h4>
                  <YouTubeVideoRenderer videoId="yidWdy-Xwdk" title="Software Corruption" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">File System Corruption:</h4>
                  <YouTubeVideoRenderer videoId="WlO5fhQbeOs" title="File System Corruption" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-blue-600 mb-4">🔧 Data Recovery Methods</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Data Recovery Methods Overview:</h4>
                  <YouTubeVideoRenderer videoId="6S2UC818Ono" title="Data Recovery Methods" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">How to Use Data Recovery Software:</h4>
                  <YouTubeVideoRenderer videoId="v0QkafslnrM" title="Data Recovery Software" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Recovery of Deleted Files:</h4>
                  <YouTubeVideoRenderer videoId="iJM13FkwRkA" title="Deleted File Recovery" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Recovery of Formatted Drives:</h4>
                  <YouTubeVideoRenderer videoId="hGPcGeVSPBE" title="Formatted Drive Recovery" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-green-600 mb-4">💾 Backup Strategies</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Backup Strategies:</h4>
                  <YouTubeVideoRenderer videoId="o-83E6levzM" title="Backup Strategies" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Backup Frequency:</h4>
                  <YouTubeVideoRenderer videoId="Gx-Lrr814ng" title="Backup Frequency" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Backup Storage Locations:</h4>
                  <YouTubeVideoRenderer videoId="GNjcdKvTAxE" title="Backup Storage Locations" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Cloud Backup Options:</h4>
                  <YouTubeVideoRenderer videoId="kDYKLzm-EMo" title="Cloud Backup Options" />
                </div>
              </div>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h3 class="font-bold text-blue-800 mb-2">Introduction</h3>
              <ul class="text-blue-700 space-y-1">
                <li>• Data recovery is the process of retrieving lost, corrupted, or inaccessible data from storage devices.</li>
                <li>• It is essential after data loss incidents to minimize impact and restore operations.</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h4 class="font-bold text-lg mb-3 text-green-600">2. Types of Data Loss</h4>
              <ul class="text-gray-700 space-y-1">
                <li>• Accidental deletion</li>
                <li>• Formatted drives</li>
                <li>• Corrupted filesystems</li>
                <li>• Physical damage</li>
                <li>• Malware attacks</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h4 class="font-bold text-lg mb-3 text-purple-600">3. Data Recovery Techniques</h4>
              
              <div class="space-y-4">
                <div class="border-l-4 border-purple-500 pl-4">
                  <h5 class="font-semibold text-purple-700 mb-2">a) Software-Based Recovery</h5>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>• Used for logical failures where hardware is intact.</li>
                    <li>• Tools scan storage for recoverable files.</li>
                    <li>• Examples: Recuva, EaseUS Data Recovery Wizard, Stellar Data Recovery.</li>
                  </ul>
                </div>

                <div class="border-l-4 border-blue-500 pl-4">
                  <h5 class="font-semibold text-blue-700 mb-2">b) File System Repair</h5>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>• Utilities like CHKDSK (Windows) or fsck (Linux) repair corrupted file systems.</li>
                    <li>• Can restore access to files if corruption is minor.</li>
                  </ul>
                </div>

                <div class="border-l-4 border-green-500 pl-4">
                  <h5 class="font-semibold text-green-700 mb-2">c) Partition Recovery</h5>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>• Tools to restore lost or deleted partitions.</li>
                    <li>• Examples: TestDisk.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h4 class="font-bold text-lg mb-3 text-red-600">4. Hardware-Based Recovery</h4>
              
              <div class="space-y-4">
                <div class="border-l-4 border-red-500 pl-4">
                  <h5 class="font-semibold text-red-700 mb-2">a) Disk Imaging</h5>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>• Creating an exact bit-by-bit copy of the drive to work on safely.</li>
                    <li>• Prevents further damage to original media.</li>
                  </ul>
                </div>

                <div class="border-l-4 border-orange-500 pl-4">
                  <h5 class="font-semibold text-orange-700 mb-2">b) PCB (Printed Circuit Board) Replacement</h5>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>• Swapping faulty controller boards on HDDs.</li>
                  </ul>
                </div>

                <div class="border-l-4 border-yellow-500 pl-4">
                  <h5 class="font-semibold text-yellow-700 mb-2">c) Head Replacement</h5>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>• Replacing damaged read/write heads in HDDs (requires cleanroom).</li>
                  </ul>
                </div>

                <div class="border-l-4 border-indigo-500 pl-4">
                  <h5 class="font-semibold text-indigo-700 mb-2">d) Platter Recovery</h5>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>• Recovering data directly from platters in severe damage cases.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h4 class="font-bold text-lg mb-3 text-green-600">5. Backup Restoration</h4>
              <ul class="text-gray-700 space-y-1">
                <li>• Using previously created backups is the safest recovery method.</li>
                <li>• Regular backups reduce downtime and data loss risk.</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h4 class="font-bold text-lg mb-3 text-yellow-600">6. Preventive Measures</h4>
              <ul class="text-gray-700 space-y-1">
                <li>• Always stop using the device after data loss to avoid overwriting.</li>
                <li>• Use professional recovery services for physical damage.</li>
                <li>• Regularly back up data to multiple locations.</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h4 class="font-bold text-lg mb-3 text-blue-600">7. Summary</h4>
              <ul class="text-gray-700 space-y-1">
                <li>• Early action and proper tools increase chances of successful recovery.</li>
                <li>• Understanding cause of data loss guides the recovery approach.</li>
                <li>• Combining software and hardware methods depending on failure type.</li>
              </ul>
            </div>
          </div>
        `
      }
    }
  ]
};
