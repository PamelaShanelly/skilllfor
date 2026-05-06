
export interface CourseContentItem {
  id: string;
  type: 'video' | 'activity' | 'infographic';
  title: string;
  label?: string; // e.g. "Video 1", "Actividad 1"
  duration?: string;
  videoUrl?: string;
  content?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description?: string;
  items?: CourseContentItem[];
}

export interface CourseLevel {
  id: string;
  title: string;
  modules: CourseModule[];
}

export interface LessonTopic {
  title: string;
  description: string;
  image?: string;
  whatIsItFor?: string;
  howToDoIt?: string;
}

export interface LessonPart {
  id: string;
  title: string;
  type: 'document' | 'video' | 'task'; 
  content: string; 
  topics?: LessonTopic[];
}

export interface Lesson {
  id: string;
  title: string;
  parts: LessonPart[];
  lessonExam: ExamQuestion[];
}

export interface ExamQuestion {
  id: string;
  type: 'multiple' | 'open';
  question: string;
  options?: string[]; // Optional for open questions
  correctAnswer: number | string; // index for multiple, string for open
}

export interface Task {
  id: string;
  title: string;
  description: string;
  deadline: string;
  completed?: boolean;
  downloadUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category?: string;
  youtubeId?: string;
  competencies: string[];
  perfil?: string;
  perfilProfesional?: string;
  subjects?: { name: string; credits: number }[];
  lessons: Lesson[];
  finalExam: ExamQuestion[];
  tasks?: Task[];
  levels?: any[]; 
  modules?: any[]; 
  exam?: ExamQuestion[]; 
}

export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
  profilePic?: string;
  bio?: string;
  role: 'student' | 'admin';
  lastLogin?: string;
  courses: RegisteredCourse[];
}

export interface RegisteredCourse {
  courseId: string;
  progress: number; // 0 to 100
  grades: { [subjectName: string]: number };
  status: 'enrolled' | 'completed';
  completedModules: string[];
  completedTasks: string[];
  completedExams: string[];
  examScore?: number;
  startDate?: string;
  completionDate?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
