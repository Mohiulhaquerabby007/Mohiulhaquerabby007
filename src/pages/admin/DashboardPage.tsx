import React from 'react'
import { Users, FolderOpen, FileText, TrendingUp } from 'lucide-react'
import { StatsCard } from '../../components/dashboard/StatsCard'
import { RecentActivity } from '../../components/dashboard/RecentActivity'
import { Card, CardContent, CardHeader } from '../../components/ui/Card'
import { mockStats, mockProjects } from '../../data/mockData'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const chartData = [
  { name: 'Jan', projects: 2, posts: 1 },
  { name: 'Feb', projects: 1, posts: 2 },
  { name: 'Mar', projects: 3, posts: 1 },
  { name: 'Apr', projects: 2, posts: 3 },
  { name: 'May', projects: 1, posts: 2 },
  { name: 'Jun', projects: 2, posts: 1 },
]

export function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value={mockStats.totalUsers}
          icon={Users}
          trend={{ value: 12, isPositive: true }}
          color="blue"
        />
        <StatsCard
          title="Active Projects"
          value={mockStats.activeProjects}
          icon={FolderOpen}
          trend={{ value: 8, isPositive: true }}
          color="green"
        />
        <StatsCard
          title="Blog Posts"
          value={mockStats.totalPosts}
          icon={FileText}
          trend={{ value: 5, isPositive: false }}
          color="yellow"
        />
        <StatsCard
          title="Total Projects"
          value={mockStats.totalProjects}
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
          color="red"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Monthly Activity</h3>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="projects" fill="#3b82f6" name="Projects" />
                <Bar dataKey="posts" fill="#10b981" name="Posts" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <RecentActivity />
      </div>

      {/* Recent Projects */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{project.title}</h4>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{project.progress}%</div>
                  <div className="text-xs text-gray-500 capitalize">{project.status}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}