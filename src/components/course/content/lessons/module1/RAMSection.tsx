
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MemoryStick } from 'lucide-react';

const RAMSection = () => {
  return (
    <Card className="animate-slide-in-right delay-200">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-orange-100 p-3 rounded-full">
            <MemoryStick className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-orange-600">2. Random Access Memory (RAM)</h3>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-orange-800 mb-2">Your Computer's Fast Workspace</h4>
          <p className="text-orange-700 text-sm mb-3">Volatile memory that temporarily stores data and instructions that the CPU uses while the system is running.</p>
          <p className="text-orange-700 text-sm mb-3">Think of RAM like a very fast, temporary workspace. When your computer needs to do something right now, it loads the necessary information into RAM. RAM is much faster than your hard drive, so it can access information almost instantly.</p>
          
          <div className="bg-orange-100 p-3 rounded mt-4">
            <p className="text-orange-800 text-sm"><strong>⚡ Fast:</strong> RAM is much, much faster than your hard drive for immediate tasks</p>
            <p className="text-orange-800 text-sm"><strong>🔄 Temporary:</strong> RAM only holds information while your computer is turned on</p>
            <p className="text-orange-800 text-sm"><strong>💼 Workspace:</strong> More RAM = more workspace for multiple programs</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="border rounded-lg p-4">
            <h5 className="font-semibold text-blue-600 mb-2">RAM Types:</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>DDR3:</strong> Older standard</li>
              <li>• <strong>DDR4:</strong> Current mainstream</li>
              <li>• <strong>DDR5:</strong> Latest, fastest standard</li>
              <li>• <strong>Form Factors:</strong> DIMM (desktop), SO-DIMM (laptop)</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-semibold text-purple-600 mb-2">Key Features:</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Capacity:</strong> 4GB, 8GB, 16GB, 32GB+</li>
              <li>• <strong>Speed:</strong> MHz rating</li>
              <li>• <strong>Temporary:</strong> Erased when power off</li>
              <li>• <strong>Fast Access:</strong> Much faster than storage</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h5 className="font-semibold text-red-800 mb-2">Common RAM Issues:</h5>
          <ul className="text-red-700 text-sm space-y-1">
            <li>• Blue Screen of Death (BSOD)</li>
            <li>• Random system crashes</li>
            <li>• Failure to boot</li>
            <li>• Faulty or incompatible modules</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RAMSection;
