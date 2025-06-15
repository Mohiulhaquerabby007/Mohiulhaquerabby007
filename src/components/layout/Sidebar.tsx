import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  FolderOpen,
  FileText,
  Settings,
  Code,
  Trophy,
  Mail,
} from 'lucide-react'
import { cn } from '../../lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Projects', href: '/admin/projects', icon: FolderOpen },
  { name: 'Blog Posts', href: '/admin/posts', icon: FileText },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

const publicNavigation = [
  { name: 'Home', href: '/', icon: LayoutDashboard },
  { name: 'Projects', href: '/projects', icon: Code },
  { name: 'Achievements', href: '/achievements', icon: Trophy },
  { name: 'Contact', href: '/contact', icon: Mail },
]

interface SidebarProps {
  isAdmin?: boolean
}

export function Sidebar({ isAdmin = false }: SidebarProps) {
  const navItems = isAdmin ? navigation : publicNavigation
  
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              {isAdmin ? 'Admin Panel' : 'Mohiul Rabby'}
            </h2>
            <p className="text-gray-400 text-sm">
              {isAdmin ? 'Dashboard' : 'CSE Student'}
            </p>
          </div>
        </div>
      </div>
      
      <nav className="mt-8">
        <div className="px-6 py-2">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {isAdmin ? 'Management' : 'Navigation'}
          </h3>
        </div>
        <div className="mt-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'bg-primary-600 text-white border-r-2 border-primary-400'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                )
              }
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}