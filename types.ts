
export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  avatar: string;
}
