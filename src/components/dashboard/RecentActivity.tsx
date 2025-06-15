import React from 'react'
import { Card, CardHeader, CardContent } from '../ui/Card'
import { formatDate } from '../../lib/utils'

interface Activity {
  id: string
  type: 'user' | 'project' | 'post'
  message: string
  timestamp: Date
}

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'user',
    message: 'New user John Doe registered',
    timestamp: new Date('2024-01-15T10:30:00'),
  },
  {
    id: '2',
    type: 'project',
    message: 'Student Management System updated',
    timestamp: new Date('2024-01-15T09:15:00'),
  },
  {
    id: '3',
    type: 'post',
    message: 'New blog post published: Getting Started with CP',
    timestamp: new Date('2024-01-14T16:45:00'),
  },
  {
    id: '4',
    type: 'project',
    message: 'Arduino IoT Project completed',
    timestamp: new Date('2024-01-14T14:20:00'),
  },
]

export function RecentActivity() {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'user':
        return '👤'
      case 'project':
        return '📁'
      case 'post':
        return '📝'
      default:
        return '📋'
    }
  }
  
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="text-2xl">{getActivityIcon(activity.type)}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDate(activity.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}