
export const storageContent = `
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-2xl font-bold text-gray-800 mb-4">Storage Devices: HDD, SSD, NVMe</h3>
    
    <div class="grid md:grid-cols-3 gap-4 mb-6">
      <div class="border rounded-lg p-4">
        <h5 class="font-semibold text-blue-600 mb-2">1. Hard Disk Drive (HDD)</h5>
        <p class="text-sm text-gray-700 mb-2"><strong>Definition:</strong> Traditional storage device that uses spinning magnetic disks (platters) to store data.</p>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• <strong>How it works:</strong> Data written to/read from magnetic platters using read/write heads</li>
          <li>• <strong>Speed:</strong> Slower data access (~80-160 MB/s) due to mechanical movement</li>
          <li>• <strong>Capacity:</strong> Large storage sizes (500GB, 1TB, 2TB) at lower cost per GB</li>
          <li>• <strong>Durability:</strong> More prone to mechanical failure, sensitive to shock</li>
          <li>• <strong>Uses:</strong> Ideal for mass storage, backups</li>
          <li>• <strong>Issues:</strong> Clicking noises, slow performance, bad sectors</li>
        </ul>
      </div>
      
      <div class="border rounded-lg p-4">
        <h5 class="font-semibold text-green-600 mb-2">2. Solid State Drive (SSD)</h5>
        <p class="text-sm text-gray-700 mb-2"><strong>Definition:</strong> Storage device using NAND flash memory with no moving parts, making it faster and more durable than HDDs.</p>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• <strong>How it works:</strong> Data stored in interconnected flash memory chips</li>
          <li>• <strong>Speed:</strong> Much faster read/write speeds (200-550 MB/s for SATA SSDs)</li>
          <li>• <strong>Durability:</strong> More resistant to physical shock, no mechanical parts</li>
          <li>• <strong>Capacity:</strong> More expensive per GB, sizes from 120GB to several TB</li>
          <li>• <strong>Uses:</strong> Primary storage for OS, applications, games</li>
          <li>• <strong>Issues:</strong> Firmware bugs, wear leveling degradation</li>
        </ul>
      </div>
      
      <div class="border rounded-lg p-4">
        <h5 class="font-semibold text-purple-600 mb-2">3. NVMe SSD</h5>
        <p class="text-sm text-gray-700 mb-2"><strong>Definition:</strong> High-speed interface protocol designed specifically for SSDs, using the PCIe bus for faster data transfer.</p>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• <strong>How it works:</strong> Communicates directly with CPU over PCIe lanes</li>
          <li>• <strong>Speed:</strong> Significantly faster (2000-7000 MB/s depending on PCIe lanes)</li>
          <li>• <strong>Form Factors:</strong> Usually M.2 or U.2 cards installed on motherboard</li>
          <li>• <strong>Uses:</strong> High-performance computing, gaming, video editing</li>
          <li>• <strong>Issues:</strong> Requires NVMe-compatible motherboard, possible overheating</li>
        </ul>
      </div>
    </div>

    <div class="bg-gray-50 p-4 rounded-lg mb-4">
      <h4 class="font-bold text-lg mb-3 text-gray-800">Storage Comparison Table</h4>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 p-2 text-left">Feature</th>
              <th class="border border-gray-300 p-2 text-left">HDD</th>
              <th class="border border-gray-300 p-2 text-left">SSD</th>
              <th class="border border-gray-300 p-2 text-left">NVMe SSD</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="border border-gray-300 p-2 font-semibold">Storage Type</td>
              <td class="border border-gray-300 p-2">Magnetic disks</td>
              <td class="border border-gray-300 p-2">NAND Flash memory</td>
              <td class="border border-gray-300 p-2">NAND Flash with PCIe interface</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 p-2 font-semibold">Speed</td>
              <td class="border border-gray-300 p-2">~80-160 MB/s</td>
              <td class="border border-gray-300 p-2">~200-550 MB/s</td>
              <td class="border border-gray-300 p-2">~2000-7000 MB/s</td>
            </tr>
            <tr class="bg-white">
              <td class="border border-gray-300 p-2 font-semibold">Durability</td>
              <td class="border border-gray-300 p-2">Sensitive to shock</td>
              <td class="border border-gray-300 p-2">Shock resistant</td>
              <td class="border border-gray-300 p-2">Shock resistant</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 p-2 font-semibold">Cost per GB</td>
              <td class="border border-gray-300 p-2">Lowest</td>
              <td class="border border-gray-300 p-2">Moderate</td>
              <td class="border border-gray-300 p-2">Highest</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-blue-50 p-4 rounded-lg mb-4">
      <h5 class="font-semibold text-blue-800 mb-2">Practical Tips:</h5>
      <ul class="text-blue-700 text-sm space-y-1">
        <li>• Always check motherboard compatibility for NVMe slots before purchasing</li>
        <li>• Use SSDs for faster boot times and improved system responsiveness</li>
        <li>• Back up important data regularly regardless of storage type</li>
        <li>• Monitor SSD health with manufacturer utilities to track wear levels</li>
      </ul>
    </div>

    <div class="bg-gray-100 p-4 rounded-lg">
      <h5 class="font-semibold text-gray-800 mb-2">📺 Educational Video:</h5>
      <p class="text-gray-700 text-sm">SSD vs HDD vs NVMe vs SATA vs mSATA vs M2: Storage Devices EXPLAINED!</p>
    </div>
  </div>
`;
