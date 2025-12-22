import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Trophy } from 'lucide-react';
import { useAuth } from '@/hooks/AuthContext';

interface CertificateDownloadButtonProps {
  courseTitle: string;
  courseId: string;
}

export const CertificateDownloadButton: React.FC<CertificateDownloadButtonProps> = ({ courseTitle, courseId }) => {
  const { user, profile } = useAuth();

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      alert('Unable to generate certificate. Please try again.');
      return;
    }

    const certificateImg = new Image();
    certificateImg.crossOrigin = 'anonymous';
    
    certificateImg.onload = () => {
      canvas.width = certificateImg.width;
      canvas.height = certificateImg.height;
      ctx.drawImage(certificateImg, 0, 0);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Get student name
      const studentName = (() => {
        if (profile?.first_name && profile?.last_name) {
          return `${profile.first_name} ${profile.last_name}`;
        } else if (user?.user_metadata?.full_name) {
          return user.user_metadata.full_name;
        } else if (user?.email) {
          return user.email.split('@')[0];
        }
        return 'Student';
      })();
      
      // Student Name
      ctx.font = 'bold 72px "Times New Roman", serif';
      ctx.fillStyle = '#1a365d';
      ctx.fillText(studentName, canvas.width / 2, canvas.height * 0.42);

      // Course Title
      ctx.font = 'bold 48px "Times New Roman", serif';
      ctx.fillStyle = '#2d3748';
      ctx.fillText(courseTitle, canvas.width / 2, canvas.height * 0.55);

      // Date
      ctx.font = '36px "Times New Roman", serif';
      ctx.fillStyle = '#4a5568';
      const dateStr = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      ctx.fillText(dateStr, canvas.width / 2, canvas.height * 0.75);

      // Download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          const cleanName = studentName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_');
          const cleanCourse = courseTitle.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_');
          a.download = `Certificate_${cleanCourse}_${cleanName}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          
          alert('Certificate downloaded successfully!');
        }
      }, 'image/png', 1.0);
    };
    
    certificateImg.onerror = () => {
      alert('Failed to load certificate template. Please try again.');
    };
    
    certificateImg.src = '/beta-skill-certificate-template.png';
  };

  return (
    <Button 
      onClick={handleDownload}
      className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
    >
      <Trophy className="w-4 h-4" />
      Get Certificate Now
    </Button>
  );
};
