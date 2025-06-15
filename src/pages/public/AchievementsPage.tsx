import React from 'react'
import { Trophy, Award, Star, Target } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'

export function AchievementsPage() {
  const achievements = [
    {
      id: '1',
      title: 'Competitive Programming',
      description: 'Active participant in various competitive programming platforms',
      icon: Trophy,
      color: 'yellow',
      items: [
        'CodeChef: mohiulhaque007',
        'HackerRank: mohiul_rabby',
        'Codeforces: mohiulhaquerabby1432',
        'HackerEarth: mohiul_rabby',
      ],
    },
    {
      id: '2',
      title: 'Academic Projects',
      description: 'Successfully completed various academic and personal projects',
      icon: Award,
      color: 'blue',
      items: [
        'Student Information Management System',
        'Arduino IoT Projects',
        'Competitive Programming Solutions',
        'Data Structures & Algorithms Implementation',
      ],
    },
    {
      id: '3',
      title: 'Technical Skills',
      description: 'Proficiency in multiple programming languages and technologies',
      icon: Star,
      color: 'green',
      items: [
        'C++ Programming',
        'Python Development',
        'Arduino & IoT',
        'Git Version Control',
        'Adobe Photoshop',
      ],
    },
    {
      id: '4',
      title: 'Learning Goals',
      description: 'Continuous learning and skill development',
      icon: Target,
      color: 'red',
      items: [
        'Advanced Data Structures',
        'Machine Learning with Python',
        'Web Development',
        'Mobile App Development',
      ],
    },
  ]
  
  const getIconColor = (color: string) => {
    switch (color) {
      case 'yellow':
        return 'bg-yellow-500'
      case 'blue':
        return 'bg-blue-500'
      case 'green':
        return 'bg-green-500'
      case 'red':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Skills</h1>
          <p className="text-xl text-gray-600">
            My journey in computer science and programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.id} hover className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${getIconColor(achievement.color)}`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {achievement.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Trophy */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 text-center">GitHub Trophies</h2>
            </CardHeader>
            <CardContent className="text-center">
              <img
                src="https://github-profile-trophy.vercel.app/?username=mohiulhaquerabby007&theme=flat&no-frame=true&margin-w=15"
                alt="GitHub Trophies"
                className="mx-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}