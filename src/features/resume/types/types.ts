export interface ExperienceType {
  company: string;
  position: string;
  description: string;
  technologies: string[];
  projects?: {
    id: string;
    imageSrc: string;
    technologies: string;
    description?: string | undefined;
  }[];
}