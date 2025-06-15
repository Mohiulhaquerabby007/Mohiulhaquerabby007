export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  avatar?: string
  createdAt: Date
  lastLogin?: Date
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  status: 'active' | 'completed' | 'paused'
  progress: number
  createdAt: Date
  updatedAt: Date
}

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  tags: string[]
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export interface DashboardStats {
  totalUsers: number
  totalProjects: number
  totalPosts: number
  activeProjects: number
}