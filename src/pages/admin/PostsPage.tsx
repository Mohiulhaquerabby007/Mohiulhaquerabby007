import React from 'react'
import { Plus, Calendar, Eye, Edit, MoreHorizontal } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { mockBlogPosts } from '../../data/mockData'
import { formatDate } from '../../lib/utils'

export function PostsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600">Manage your blog content</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">All Posts</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockBlogPosts.map((post) => (
              <div key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                      <Badge variant={post.published ? 'success' : 'warning'}>
                        {post.published ? 'Published' : 'Draft'}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="default" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Created {formatDate(post.createdAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Edit className="w-4 h-4" />
                        <span>Updated {formatDate(post.updatedAt)}</span>
                      </div>
                      <span>By {post.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}