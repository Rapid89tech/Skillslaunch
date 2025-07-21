import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';
import type { Course } from '@/types/course';

interface CertificatePreviewProps {
  course: Course;
  studentName: string;
  completionDate: string;
}

const CertificatePreview = ({ course, studentName, completionDate }: CertificatePreviewProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border-2 border-dashed border-red-400">
      <h3 className="text-xl font-semibold mb-3">Certificate of Completion</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This certificate recognizes <strong>{studentName}</strong> for successfully 
        completing "{course.title}" and demonstrating mastery of {course.category?.toLowerCase() || 'professional skills'}.
      </p>
      <p className="text-sm text-gray-600">Completed on {completionDate}</p>
    </div>
  );
};

export default CertificatePreview;