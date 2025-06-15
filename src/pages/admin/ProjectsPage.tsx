import React from 'react'
import { Plus, Calendar, TrendingUp, MoreHorizontal } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { mockProjects } from '../../data/mockData'

export function ProjectsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'info'
      case 'completed':
        return 'success'
      case 'paused':
        return 'warning'
      default:
        return 'default'
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600">Manage your development projects</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <Card key={project.id} hover>
            <CardHeader>
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <span className="text-sm font-medium text-gray-700">
                    {project.progress}% Complete
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Created {project.createdAt.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>Updated {project.updatedAt.toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1">Edit</Button>
                  <Button variant="outline" size="sm" className="flex-1">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}