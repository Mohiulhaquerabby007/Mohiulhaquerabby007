import { User, Project, BlogPost, DashboardStats } from '../types'

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Mohiul Haque Rabby',
    email: 'mohiulhaquerabby1432@gmail.com',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: new Date('2023-01-15'),
    lastLogin: new Date(),
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: new Date('2023-03-20'),
    lastLogin: new Date('2024-01-10'),
  },
  {
    id: '3',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: new Date('2023-05-10'),
    lastLogin: new Date('2024-01-08'),
  },
]

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Student Information Management System',
    description: 'A comprehensive system for managing student data, grades, and academic records.',
    technologies: ['C++', 'Python', 'SQLite'],
    status: 'active',
    progress: 75,
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Competitive Programming Solutions',
    description: 'Collection of solutions for various competitive programming problems.',
    technologies: ['C++', 'Python', 'Algorithms'],
    status: 'active',
    progress: 60,
    createdAt: new Date('2023-06-15'),
    updatedAt: new Date('2024-01-12'),
  },
  {
    id: '3',
    title: 'Arduino IoT Project',
    description: 'Smart home automation system using Arduino and IoT sensors.',
    technologies: ['Arduino', 'C++', 'IoT'],
    status: 'completed',
    progress: 100,
    createdAt: new Date('2023-04-01'),
    updatedAt: new Date('2023-08-30'),
  },
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Competitive Programming',
    content: 'Competitive programming is an excellent way to improve your problem-solving skills...',
    excerpt: 'Learn the basics of competitive programming and how to get started.',
    author: 'Mohiul Haque Rabby',
    tags: ['Programming', 'Competitive Programming', 'C++'],
    published: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: '2',
    title: 'Arduino Projects for Beginners',
    content: 'Arduino is a great platform for learning electronics and programming...',
    excerpt: 'Explore exciting Arduino projects perfect for beginners.',
    author: 'Mohiul Haque Rabby',
    tags: ['Arduino', 'Electronics', 'IoT'],
    published: true,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
  },
  {
    id: '3',
    title: 'Python vs C++: Which to Choose?',
    content: 'Both Python and C++ are powerful programming languages...',
    excerpt: 'A comparison between Python and C++ for different use cases.',
    author: 'Mohiul Haque Rabby',
    tags: ['Python', 'C++', 'Programming'],
    published: false,
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-14'),
  },
]

export const mockStats: DashboardStats = {
  totalUsers: mockUsers.length,
  totalProjects: mockProjects.length,
  totalPosts: mockBlogPosts.length,
  activeProjects: mockProjects.filter(p => p.status === 'active').length,
}