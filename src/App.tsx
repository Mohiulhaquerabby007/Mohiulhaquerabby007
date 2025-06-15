import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'

// Public Pages
import { HomePage } from './pages/public/HomePage'
import { ProjectsPage } from './pages/public/ProjectsPage'
import { AchievementsPage } from './pages/public/AchievementsPage'
import { ContactPage } from './pages/public/ContactPage'

// Admin Pages
import { DashboardPage } from './pages/admin/DashboardPage'
import { UsersPage } from './pages/admin/UsersPage'
import { ProjectsPage as AdminProjectsPage } from './pages/admin/ProjectsPage'
import { PostsPage } from './pages/admin/PostsPage'
import { SettingsPage } from './pages/admin/SettingsPage'

import { mockUsers } from './data/mockData'

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isAdmin={false} />
      <div className="flex-1">
        <Header title="Mohiul Haque Rabby" />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

function AdminLayout({ children }: { children: React.ReactNode }) {
  const adminUser = mockUsers.find(user => user.role === 'admin')
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isAdmin={true} />
      <div className="flex-1">
        <Header 
          title="Admin Dashboard" 
          user={adminUser ? { name: adminUser.name, avatar: adminUser.avatar } : undefined}
        />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        } />
        <Route path="/projects" element={
          <PublicLayout>
            <ProjectsPage />
          </PublicLayout>
        } />
        <Route path="/achievements" element={
          <PublicLayout>
            <AchievementsPage />
          </PublicLayout>
        } />
        <Route path="/contact" element={
          <PublicLayout>
            <ContactPage />
          </PublicLayout>
        } />

        {/* Admin Routes */}
        <Route path="/admin" element={
          <AdminLayout>
            <DashboardPage />
          </AdminLayout>
        } />
        <Route path="/admin/users" element={
          <AdminLayout>
            <UsersPage />
          </AdminLayout>
        } />
        <Route path="/admin/projects" element={
          <AdminLayout>
            <AdminProjectsPage />
          </AdminLayout>
        } />
        <Route path="/admin/posts" element={
          <AdminLayout>
            <PostsPage />
          </AdminLayout>
        } />
        <Route path="/admin/settings" element={
          <AdminLayout>
            <SettingsPage />
          </AdminLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App