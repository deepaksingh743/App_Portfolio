export interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  metrics: { label: string; value: string }[]
  gradient: string
}

export interface Skill {
  name: string
  level: number
  category: 'Languages' | 'Tools' | 'Frameworks' | 'Databases'
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export interface Achievement {
  id: string
  title: string
  issuer: string
  date: string
  icon: string
}

export interface StatItem {
  id: string
  value: number
  suffix: string
  label: string
}

export interface NavLink {
  id: string
  label: string
}
