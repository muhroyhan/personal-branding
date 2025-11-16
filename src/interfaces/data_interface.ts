export interface ArchivementInf {
  icon: string;
  title: string;
  desc: string;
}

export interface SkillInf {
  title: string;
  color: string;
  tags: string[];
}

export interface ProjectInf {
  name: string;
  categories: string[];
  description: string;
  features: string[];
  technologies: string[];
  image_url: string;
  website_url: string;
  github_url: string;
}

export interface ExperienceInf {
  position: string;
  company: string;
  start_date: string;
  end_date: string;
  location: string;
  responsibilities: string[];
}

export interface DataInf {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  position: string;
  description: string;
  linkedin: string;
  github: string;
  instagram: string;
  about: {
    title: string;
    paragraphs: string[];
  };
  achivements: ArchivementInf[];
  skills: SkillInf[];
  projects: ProjectInf[];
  experiences: ExperienceInf[];
}
