export interface ProjectType {
  id: number;
  image: string;
  technologies: TechnologyType[];
  description?: string | null;
  name: string;
  companyId: number;
}

export interface TechnologyType {
  id: number;
  name: string;
}

export interface ExperienceType {
  id: number;
  name: string;
  position: string;
  description?: string | null;
  technologies: TechnologyType[];
  projects?: ProjectType[];
}