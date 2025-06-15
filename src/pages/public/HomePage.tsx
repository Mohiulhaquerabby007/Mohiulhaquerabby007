import React from 'react'
import { Github, ExternalLink, Mail, MapPin, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'

export function HomePage() {
  const skills = ['C++', 'Python', 'Arduino', 'Git', 'Photoshop', 'Dart']
  const achievements = [
    { platform: 'CodeChef', handle: 'mohiulhaque007' },
    { platform: 'HackerRank', handle: 'mohiul_rabby' },
    { platform: 'Codeforces', handle: 'mohiulhaquerabby1432' },
    { platform: 'HackerEarth', handle: 'mohiul_rabby' },
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Mohiul Haque Rabby"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi 👋, I'm Mohiul Haque Rabby
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate CSE student from Bangladesh
          </p>
          <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Bangladesh</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>CSE Student</span>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Button size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg">
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
          </div>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="animate-slide-up">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <p>🔭 I'm currently working on <strong>Student Information Management System</strong></p>
                <p>🌱 I'm currently learning <strong>C, C++, Python etc.</strong></p>
                <p>💬 Ask me about <strong>C++ & Python</strong></p>
                <p>📫 How to reach me: <strong>mohiulhaquerabby1432@gmail.com</strong></p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">Skills & Technologies</h2>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="info" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Competitive Programming */}
        <Card className="mb-16 animate-slide-up">
          <CardHeader>
            <h2 className="text-2xl font-bold text-gray-900">Competitive Programming</h2>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.platform}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-gray-900">{achievement.platform}</h3>
                  <p className="text-sm text-gray-600 mt-1">{achievement.handle}</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Profile
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* GitHub Stats */}
        <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
          <Card>
            <CardContent className="p-6">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs?username=mohiulhaquerabby007&show_icons=true&locale=en&layout=compact&theme=light"
                alt="Top Languages"
                className="w-full"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <img
                src="https://github-readme-stats.vercel.app/api?username=mohiulhaquerabby007&show_icons=true&locale=en&theme=light"
                alt="GitHub Stats"
                className="w-full"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=mohiulhaquerabby007&theme=light"
                alt="GitHub Streak"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}