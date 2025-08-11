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

    // Set canvas size for high quality (A4 ratio)
    canvas.width = 2480; // A4 width at 300 DPI
    canvas.height = 1754; // A4 height at 300 DPI

    // Create certificate design
    const drawCertificate = () => {
      // Background gradient (red theme)
      const gradient = ctx.createLinearGradient(0, 0, 2480, 1754);
      gradient.addColorStop(0, '#dc2626');
      gradient.addColorStop(0.5, '#b91c1c');
      gradient.addColorStop(1, '#991b1b');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 2480, 1754);

      // Inner white background with rounded corners effect
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(100, 100, 2280, 1554);

      // Decorative border (red theme)
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 16;
      ctx.strokeRect(100, 100, 2280, 1554);

      // Inner decorative border
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 8;
      ctx.strokeRect(120, 120, 2240, 1514);

      // Decorative corner elements
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 12;
      // Top-left corner
      ctx.beginPath();
      ctx.moveTo(200, 200);
      ctx.lineTo(400, 200);
      ctx.moveTo(200, 200);
      ctx.lineTo(200, 400);
      ctx.stroke();
      // Top-right corner
      ctx.beginPath();
      ctx.moveTo(2080, 200);
      ctx.lineTo(2280, 200);
      ctx.moveTo(2280, 200);
      ctx.lineTo(2280, 400);
      ctx.stroke();
      // Bottom-left corner
      ctx.beginPath();
      ctx.moveTo(200, 1354);
      ctx.lineTo(400, 1354);
      ctx.moveTo(200, 1354);
      ctx.lineTo(200, 1554);
      ctx.stroke();
      // Bottom-right corner
      ctx.beginPath();
      ctx.moveTo(2080, 1354);
      ctx.lineTo(2280, 1354);
      ctx.moveTo(2280, 1354);
      ctx.lineTo(2280, 1554);
      ctx.stroke();

      // Certificate title
      ctx.fillStyle = '#1f2937';
      ctx.font = 'bold 72px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('🎓 CERTIFICATE OF COMPLETION 🎓', 1240, 300);

      // Load and draw logo
      const logoImg = new Image();
      logoImg.onload = () => {
        // Draw Beta Skill logo
        const logoWidth = 150;
        const logoHeight = 100;
        ctx.drawImage(logoImg, 1240 - logoWidth/2, 350, logoWidth, logoHeight);
        
        // Continue with the rest of the certificate after logo loads
        drawRestOfCertificate();
      };
      logoImg.src = '/beta-skill-logo.png';
    };

    const drawRestOfCertificate = () => {
      // Main content (adjusted position for logo)
      ctx.font = 'bold 96px Arial';
      ctx.fillText('This is to certify that', 1240, 500);

      // Student name with special styling (red theme)
      ctx.font = 'bold 128px Arial';
      ctx.fillStyle = '#dc2626';
      ctx.fillText(studentName, 1240, 650);

      ctx.font = 'bold 72px Arial';
      ctx.fillStyle = '#1f2937';
      ctx.fillText('has successfully completed the course', 1240, 800);

      // Course title (red theme)
      ctx.font = 'bold 96px Arial';
      ctx.fillStyle = '#b91c1c';
      ctx.fillText(courseTitle, 1240, 900);

      // Additional details in a structured layout
      ctx.font = '48px Arial';
      ctx.fillStyle = '#6b7280';
      ctx.fillText(`Completion Date: ${completionDate}`, 1240, 1050);

      // Signature section (no line)
      // Load and draw signature image
      const signatureImg = new Image();
      signatureImg.onload = () => {
        // Draw signature image without line
        const signatureWidth = 200;
        const signatureHeight = 80;
        ctx.drawImage(signatureImg, 1240 - signatureWidth/2, 1200, signatureWidth, signatureHeight);
        
        // Add name below the signature
        ctx.font = '48px Arial';
        ctx.fillStyle = '#6b7280';
        ctx.fillText('Managing Director - Dr Raynauld Russon', 1240, 1350);
        
        // Trigger download after signature is drawn
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
      signatureImg.src = '/dr-signature.png';
    };

    drawCertificate();
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
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 text-center">
            <div className="text-4xl font-bold mb-2">🎓 CERTIFICATE OF COMPLETION 🎓</div>
            <div className="text-lg opacity-90">Congratulations on your achievement!</div>
          </div>

          {/* Certificate Body */}
          <div className="p-12 text-center relative">
            {/* Decorative border */}
            <div className="absolute inset-4 border-4 border-red-200 rounded-lg pointer-events-none"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-red-600 rounded-tl-lg"></div>
            <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-red-600 rounded-tr-lg"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-red-600 rounded-bl-lg"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-red-600 rounded-br-lg"></div>
            
            {/* Main content */}
            <div className="relative z-10">
              {/* Beta Skill Logo */}
              <div className="mb-6">
                <img 
                  src="/beta-skill-logo.png" 
                  alt="Beta Skill Logo" 
                  className="h-16 w-auto mx-auto object-contain"
                />
              </div>
              
              <div className="text-gray-600 text-xl mb-6">This is to certify that</div>
              
              <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-8 animate-pulse">
                {studentName}
              </div>
              
              <div className="text-2xl text-gray-700 mb-4">has successfully completed the course</div>
              
              <div className="text-4xl font-bold bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent mb-8">
                {courseTitle}
              </div>
              
              {/* Course details */}
              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Completion Date</div>
                  <div className="font-semibold">{completionDate}</div>
                </div>
              </div>

              {/* Signature */}
              <div className="border-t-2 border-gray-300 pt-8">
                <div className="flex flex-col items-center">
                  {/* Signature image without line */}
                  <div className="mb-4">
                    <img 
                      src="/dr-signature.png" 
                      alt="Dr Raynauld Russon Signature" 
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <div className="text-gray-600">Managing Director - Dr Raynauld Russon</div>
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