import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share2, Printer } from 'lucide-react';

interface CertificateProps {
  courseTitle: string;
  studentName: string;
  completionDate: string;
  instructorName: string;
  courseId: string;
  grade?: string;
}

export const Certificate: React.FC<CertificateProps> = ({
  courseTitle,
  studentName,
  completionDate,
  instructorName,
  courseId,
  grade
}) => {
  const handleDownload = () => {
    // Create a canvas element to generate high-quality certificate
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load the certificate background image
    const certificateImg = new Image();
    certificateImg.onload = () => {
      // Set canvas size to match the certificate image
      canvas.width = certificateImg.width;
      canvas.height = certificateImg.height;

      // Draw the certificate background
      ctx.drawImage(certificateImg, 0, 0);

      // Add text overlay
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Student Name - positioned in the center
      ctx.font = 'bold 48px Arial';
      ctx.fillStyle = '#1f2937';
      ctx.fillText(studentName, canvas.width / 2, canvas.height / 2 - 20);

      // Course Title - positioned below student name
      ctx.font = 'bold 32px Arial';
      ctx.fillStyle = '#374151';
      ctx.fillText(courseTitle, canvas.width / 2, canvas.height / 2 + 40);

      // Completion Date - positioned at bottom
      ctx.font = '24px Arial';
      ctx.fillStyle = '#6b7280';
      ctx.fillText(completionDate, canvas.width / 2, canvas.height - 100);

      // Trigger download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          const cleanName = studentName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_');
          a.download = `Certificate_${courseTitle.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')}_${cleanName}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
      }, 'image/png', 1.0);
    };
    
    certificateImg.src = '/official-course-certificate.png';
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Certificate of Completion - ${courseTitle}`,
        text: `I just completed ${courseTitle}!`,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`I just completed ${courseTitle}! Check out my certificate.`);
      alert('Certificate link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Certificate Display */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8 print:shadow-none">
          {/* Certificate with new design */}
          <div className="relative">
            {/* Background certificate image */}
            <img 
              src="/official-course-certificate.png" 
              alt="Certificate of Completion" 
              className="w-full h-auto object-contain"
            />
            
            {/* Overlay content positioned on top of the certificate */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              {/* Student Name - positioned where it should be on the certificate */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                  {studentName}
                </div>
              </div>
              
              {/* Course Title - positioned below student name */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-8">
                <div className="text-2xl md:text-3xl font-bold text-gray-800" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                  {courseTitle}
                </div>
              </div>
              
              {/* Completion Date - positioned at bottom */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="text-lg md:text-xl font-semibold text-gray-700" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                  {completionDate}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
          <Button 
            onClick={handleDownload}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Certificate
          </Button>
          
          <Button 
            onClick={handlePrint}
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <Printer className="w-5 h-5" />
            Print Certificate
          </Button>
          
          <Button 
            onClick={handleShare}
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            Share Achievement
          </Button>
        </div>

        {/* Success Message */}
        <div className="mt-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="text-2xl font-bold text-green-800 mb-2">🎉 Congratulations!</div>
            <div className="text-green-700">
              You have successfully completed <strong>{courseTitle}</strong>. 
              This certificate validates your achievement and the knowledge you've gained.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 