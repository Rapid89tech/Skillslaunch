import type { Course } from '@/types/course';
import module1 from './module1';
import module2 from './module2';
import module3 from './module3';
import module4 from './module4';
import module5 from './module5';
import module6 from './module6';
import module7 from './module7';
import module8 from './module8';
import module9 from './module9';
import module10 from './module10';

export const carpentry101Course: Course = {
  id: 'carpentry101',
  title: 'Carpentry',
  description: 'Comprehensive carpentry training covering hand tools, power tools, wood properties, joinery techniques, assembly methods, finishing, furniture making, cabinet making, and professional business skills for a successful carpentry career.',
  category: 'Skilled Trades',
  level: 'beginner',
  duration: '12-14 weeks',
  is_free: false,
  price: 290,
  currency: 'ZAR',
  students: 1850,
  rating: 4.8,
  instructor: {
    id: 'betaskilltutor',
    first_name: 'Beta Skill',
    last_name: 'Tutor',
    email: 'betaskilltraining@gmail.com'
  },
  modules: [module1, module2, module3, module4, module5, module6, module7, module8, module9, module10],
  status: 'approved',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  available: true
};

export default carpentry101Course;

