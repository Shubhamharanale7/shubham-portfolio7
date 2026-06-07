export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  badge: string;
  githubUrl: string;
  category: "mlops" | "devops" | "ai-agents";
  diagramType: string;
}

export interface ServicePackage {
  emoji: string;
  title: string;
  subtitle: string;
  bestFor: string;
  items: string[];
  outcome: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  result: string;
  initials: string;
}

export interface SkillCard {
  title: string;
  description: string;
  impact: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}
