export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'design';
  level: number; // 1-5 scale
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}