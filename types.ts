export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}
