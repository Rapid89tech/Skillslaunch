import { useAuth } from '@/hooks/AuthContext';
import type { Course } from '@/types/course';
import { generateCertificateHTML } from '@/utils/certificateTemplate';

interface UseCertificateGeneratorProps {
  course: Course;
  onDownload: () => void;
}

export const useCertificateGenerator = ({ course, onDownload }: UseCertificateGeneratorProps) => {
  const { profile } = useAuth();
  
  const currentDate = new Date().toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const generateCertificatePDF = () => {
    const certificateWindow = window.open('', '_blank');
    if (!certificateWindow) return;

    const certificateHTML = generateCertificateHTML({
      studentName: `${profile?.first_name || 'Student'} ${profile?.last_name || ''}`,
      courseTitle: course.title,
      courseCategory: course.category,
      completionDate: currentDate
    });

    certificateWindow.document.write(certificateHTML);
    certificateWindow.document.close();
    
    onDownload();
  };

  return {
    profile,
    currentDate,
    generateCertificatePDF
  };
};