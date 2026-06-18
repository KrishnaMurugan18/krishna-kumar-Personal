import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend',
    icon: 'server',
    items: [
      { name: 'Java', level: 88 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring MVC', level: 78 },
      { name: 'Hibernate / JPA', level: 75 },
      { name: 'REST APIs', level: 86 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'layout',
    items: [
      { name: 'React', level: 72 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML5', level: 88 },
      { name: 'CSS3', level: 80 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: 'database',
    items: [
      { name: 'MySQL', level: 80 },
      { name: 'SQL', level: 82 },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: 'cloud',
    items: [
      { name: 'Google Cloud Platform', level: 78 },
      { name: 'Compute Engine', level: 75 },
      { name: 'Cloud Storage', level: 76 },
      { name: 'IAM', level: 72 },
      { name: 'VPC Networking', level: 68 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'terminal',
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Linux', level: 78 },
      { name: 'Maven', level: 74 },
      { name: 'Data Structures & Algorithms', level: 80 },
    ],
  },
]
