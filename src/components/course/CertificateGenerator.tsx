
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Award } from 'lucide-react';
import type { Course } from '@/types/course';
import { useCertificateGenerator } from '@/hooks/useCertificateGenerator';
import CertificatePreview from './CertificatePreview';

interface CertificateGeneratorProps {
  course: Course;
  onDownload: () => void;
}

const CertificateGenerator = ({ course, onDownload }: CertificateGeneratorProps) => {
  const { profile, currentDate, generateCertificatePDF } = useCertificateGenerator({ 
    course, 
    onDownload 
  });

  const studentName = `${profile?.first_name || 'Student'} ${profile?.last_name || ''}`;

  return (
    <Card className="border-red-400 bg-gradient-to-br from-red-50 to-red-100">
      <CardContent className="p-8 text-center">
        <div className="space-y-6">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
            <Award className="h-12 w-12 text-white" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              You have successfully completed the entire course!
            </p>
          </div>

          <CertificatePreview 
            course={course}
            studentName={studentName}
            completionDate={currentDate}
          />

          <div className="space-y-4">
            <Button 
              onClick={generateCertificatePDF}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Certificate
            </Button>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4 text-red-500" />
                Achievement Unlocked
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateGenerator;
