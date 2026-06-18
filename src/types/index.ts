export interface SkillItem {
  name: string
  level: number // 0-100
}

export interface SkillCategory {
  id: string
  label: string
  icon: string
  items: SkillItem[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  points: string[]
}

export interface ProjectItem {
  id: string
  title: string
  tag: string
  description: string
  tech: string[]
  features: string[]
  challenges: string;
  outcome: string
  githubUrl: string
  liveUrl?: string
}

export interface RoadmapItem {
  id: string
  title: string
  status: 'completed' | 'in-progress' | 'planned'
  detail: string
}

export interface AchievementItem {
  id: string
  title: string
  description: string
  date: string
}
