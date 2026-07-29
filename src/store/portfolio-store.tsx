import type {
  Project,
  Skill,
  ExperienceItem,
  Achievement,
  StatItem,
  NavLink,
} from '../types/portfolio-types'

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const stats: StatItem[] = [
  { id: 's1', value: 10, suffix: '+', label: 'Projects Completed' },
  { id: 's2', value: 0, suffix: '+', label: 'Years Experience' },
  { id: 's3', value: 6, suffix: '+', label: 'Certifications' },
  { id: 's4', value: 2, suffix: 'M+', label: 'Rows Analyzed' },
]

export const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'Languages' },
  { name: 'SQL', level: 92, category: 'Languages' },
  { name: 'Tableau', level: 90, category: 'Tools' },
  { name: 'Power BI', level: 88, category: 'Tools' },
  { name: 'Excel', level: 95, category: 'Tools' },
  { name: 'Pandas', level: 93, category: 'Frameworks' },
  { name: 'NumPy', level: 90, category: 'Frameworks' },
  { name: 'Matplotlib', level: 94, category: 'Frameworks' },
]

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Customer Behavior Analysis',
    category: 'Data Analyst',
    description:
      'Clean and built an visualise dashboards of Customer Behavior Analysis using Data Analysis Tools .',
    tags: ['Python', 'SQL', 'Power BI'],
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Recall', value: '89%' },
      { label: 'ROI', value: '3.2x' },
    ],
    gradient: 'from-brand-500 to-accent-500',
  },
  {
    id: 'p2',
    title: 'Pizza Sales Analytics',
    category: 'Business Intelligence',
    description:
      'Designed an interactive Tableau dashboard consolidating 12 data sources for real-time sales performance tracking across 8 regions and 40+ product lines.',
    tags: ['Tableau', 'SQL','Data Modeling'],
    metrics: [
      { label: 'Data Sources', value: '12' },
      { label: 'Refresh', value: '15min' },
      { label: 'Users', value: '200+' },
    ],
    gradient: 'from-accent-500 to-brand-400',
  },
  {
    id: 'p3',
    title: 'Hospital Readmission Data',
    category: 'Data Analysis',
    description:
      'Performed association rule mining on 2M+ transaction records to uncover product affinity patterns, driving a 18% increase in cross-sell revenue.',
    tags: ['Python', 'Numpy','matplotlib', 'Pandas'],
    metrics: [
      { label: 'Transactions', value: '2M+' },
      { label: 'Lift', value: '4.5' },
      { label: 'Revenue ↑', value: '18%' },
    ],
    gradient: 'from-brand-400 to-accent-600',
  },
  {
    id: 'p4',
    title: 'Time Series Forecasting',
    category: 'Predictive Analytics',
    description:
      'Developed a demand forecasting pipeline using Prophet and ARIMA models for inventory optimization, reducing stockouts by 35% across 1,200 SKUs.',
    tags: ['Python','Power BI','Excel'],
    metrics: [
      { label: 'MAPE', value: '6.2%' },
      { label: 'SKUs', value: '1,200' },
      { label: 'Stockout ↓', value: '35%' },
    ],
    gradient: 'from-accent-400 to-brand-600',
  },
]

export const experience: ExperienceItem[] = [
  {
 id: 'e1',
    role: 'Data Analyst',
   period: '2025 —present',
    description:
      'Owned end-to-end analytics for the customer success division, from data ingestion to insight delivery.',
    highlights: [
      'Developed churn prediction model that reduced churn by 23%',
      'Created self-serve Looker dashboard suite used by 150+ stakeholders',
      'Automated data quality checks across 8 production databases',
    ],
  },
]

export const achievements: Achievement[] = [
  { id: 'a1', title: 'J.P. Morgan - Quantitative Research Job Simulation', issuer: 'Forage', date: 'July 2026', icon: 'BarChart3' },
  { id: 'a2', title: 'Tata - GenAI Powered Data Analytics Job Simulation', issuer: 'Forage', date: 'July 2026', icon: 'BarChart3' },
  { id: 'a3', title: 'BCG - Introduction to Data for Decision Makers Job Simulation', issuer: 'Forage', date: 'July 2026', icon: 'Cpu' },
  { id: 'a4', title: 'Deloitte Australia - Data Analytics Job Simulation', issuer: 'Forage', date: 'May 2026', icon: 'PieChart' },
  { id: 'a5', title: 'Tata - Data Visualisation: Empowering Business with Effective Insights Job Simulation', issuer: 'Forage', date: ' July 2026', icon: 'Database' },
] 

export const techStack = [
  'Python', 'SQL', 'Tableau', 'Power BI', 'Pandas', 'NumPy','Matplotlib',
 'Excel','Looker',
]
