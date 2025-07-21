
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Code, Zap, Target } from 'lucide-react';

const DefaultLessonContent = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white animate-scale-in">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold">AI-Assisted Programming Course</h2>
          <p className="text-xl opacity-90">Master the future of software development with AI! 💻✨</p>
        </div>
      </div>

      {/* Course Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-200">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="text-4xl mb-3">🤖</div>
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2">
                <Code className="h-4 w-4 mr-2" />
                AI Integration
              </Badge>
              <h3 className="text-xl font-semibold">Smart Development</h3>
              <p className="text-gray-600">Learn to integrate AI tools seamlessly into your coding workflow</p>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-purple-200">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="text-4xl mb-3">⚡</div>
              <Badge className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Productivity Boost
              </Badge>
              <h3 className="text-xl font-semibold">Enhanced Efficiency</h3>
              <p className="text-gray-600">Dramatically increase your coding speed and accuracy</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Path */}
      <Card className="overflow-hidden border-l-4 border-l-indigo-500 animate-slide-in-right">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🎯</div>
            <h3 className="text-2xl font-bold text-indigo-600">Your Learning Journey</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                <Book className="h-5 w-5" />
                What You'll Master:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-indigo-500">🎯</div>
                    <span>AI-powered code generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-indigo-500">🔍</div>
                    <span>Intelligent debugging techniques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-indigo-500">📚</div>
                    <span>Automated documentation</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-indigo-500">🧪</div>
                    <span>AI-assisted testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-indigo-500">🛠️</div>
                    <span>Custom AI tool development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-indigo-500">⚖️</div>
                    <span>Ethical AI development practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools You'll Use */}
      <Card className="bg-gradient-to-r from-emerald-100 to-blue-100 animate-slide-in-right delay-200">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">🛠️</div>
            <h3 className="text-2xl font-bold">AI Tools You'll Master</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-emerald-200 text-center hover:scale-105 transition-transform">
              <div className="text-2xl mb-2">🤖</div>
              <h5 className="font-semibold">GitHub Copilot</h5>
              <p className="text-sm text-gray-600">AI pair programmer</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200 text-center hover:scale-105 transition-transform">
              <div className="text-2xl mb-2">💬</div>
              <h5 className="font-semibold">ChatGPT</h5>
              <p className="text-sm text-gray-600">Conversational AI assistant</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-200 text-center hover:scale-105 transition-transform">
              <div className="text-2xl mb-2">⚡</div>
              <h5 className="font-semibold">Tabnine</h5>
              <p className="text-sm text-gray-600">Smart code completion</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200 text-center hover:scale-105 transition-transform">
              <div className="text-2xl mb-2">☁️</div>
              <h5 className="font-semibold">CodeWhisperer</h5>
              <p className="text-sm text-gray-600">Amazon's AI coding tool</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white animate-scale-in">
        <CardContent className="p-8 text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Coding?</h3>
          <p className="text-lg opacity-90 mb-6">
            Join the AI programming revolution and become a more efficient, productive developer! 💪
          </p>
          <div className="flex justify-center gap-4 text-2xl">
            <span className="animate-bounce">🔥</span>
            <span className="animate-bounce delay-100">💻</span>
            <span className="animate-bounce delay-200">⚡</span>
            <span className="animate-bounce delay-300">🎯</span>
            <span className="animate-bounce delay-400">🚀</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DefaultLessonContent;
