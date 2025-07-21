
export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  completed_at?: string;
  progress: number;
  course?: {
    title: string;
    description?: string;
    instructor_id: string;
  };
}
