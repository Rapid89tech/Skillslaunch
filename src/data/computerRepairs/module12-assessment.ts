
import type { Module } from '@/types/course';

export const module12Assessment: Module = {
  id: 12,
  title: 'Final Assessment and Certification',
  description: 'Comprehensive practical and written evaluations, certification',
  lessons: [
    {
      id: 12,
      title: 'Final Practical Assessment',
      duration: '120 min',
      type: 'assignment',
      content: {
        title: 'Computer Repair Certification Assessment',
        description: 'Complete practical assessment demonstrating all learned skills',
        requirements: [
          'Diagnose and repair a computer with multiple issues',
          'Perform hardware upgrade (RAM/Storage)',
          'Install and configure operating system',
          'Demonstrate customer service scenario'
        ],
        deliverables: 'Video demonstration of repair process and written report',
        rubric: {
          'Technical Skills': 'Proper use of tools and repair techniques',
          'Problem Solving': 'Systematic troubleshooting approach',
          'Safety': 'Following ESD and safety protocols',
          'Communication': 'Clear documentation and customer interaction'
        }
      }
    },
    {
      id: 13,
      title: 'Certification',
      duration: '5 min',
      type: 'certificate',
      content: {
        title: 'Certified Computer & Laptop Repair Technician',
        description: 'Congratulations on completing the Computer & Laptop Repair Technician certification course!',
        certificateText: 'This certifies that you have successfully completed the Certified Computer & Laptop Repair Technician Training course and demonstrated proficiency in computer hardware repair, troubleshooting, and customer service.'
      }
    }
  ]
};
