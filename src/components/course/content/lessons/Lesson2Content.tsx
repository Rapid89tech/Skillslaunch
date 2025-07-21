
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cpu, Zap, Target, CheckCircle } from 'lucide-react';

const Lesson2Content = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white animate-scale-in">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🤖</div>
          <h2 className="text-3xl font-bold">Types of AI Tools: Autocompletion, Code Generation, Static Analysis</h2>
          <p className="text-xl opacity-90">Discover the power of AI in modern software development! 🚀</p>
        </div>
      </div>

      {/* Interactive Categories */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Autocompletion */}
        <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-200 hover:border-blue-400">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="text-4xl mb-3">⚡</div>
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2">
                <Code className="h-4 w-4 mr-2" />
                Autocompletion
              </Badge>
              <h3 className="text-xl font-semibold">Smart Code Completion</h3>
              <p className="text-gray-600">AI predicts and suggests your next code as you type!</p>
            </div>
          </CardContent>
        </Card>

        {/* Code Generation */}
        <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-purple-200 hover:border-purple-400">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="text-4xl mb-3">🎯</div>
              <Badge className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Code Generation
              </Badge>
              <h3 className="text-xl font-semibold">Automatic Code Creation</h3>
              <p className="text-gray-600">Generate entire functions from natural language descriptions!</p>
            </div>
          </CardContent>
        </Card>

        {/* Static Analysis */}
        <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-green-200 hover:border-green-400">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="text-4xl mb-3">🔍</div>
              <Badge className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">
                <Target className="h-4 w-4 mr-2" />
                Static Analysis
              </Badge>
              <h3 className="text-xl font-semibold">Intelligent Code Review</h3>
              <p className="text-gray-600">AI finds bugs and improvements without running code!</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Content Sections */}
      <div className="space-y-8">
        {/* Autocompletion Section */}
        <Card className="overflow-hidden border-l-4 border-l-blue-500 animate-slide-in-right">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">⚡</div>
              <h3 className="text-2xl font-bold text-blue-600">1. Autocompletion Magic</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                <strong>🎯 Definition:</strong> Autocompletion tools help developers by predicting and suggesting the next word, function, variable, or code snippet as they type. These tools rely on context and learned patterns from large codebases to provide accurate suggestions.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Popular Examples:
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl mb-2">🧠</div>
                    <h5 className="font-semibold">GitHub Copilot</h5>
                    <p className="text-sm text-gray-600">Uses OpenAI Codex for intelligent suggestions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl mb-2">💡</div>
                    <h5 className="font-semibold">IntelliSense</h5>
                    <p className="text-sm text-gray-600">Visual Studio's smart completion system</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl mb-2">🚀</div>
                    <h5 className="font-semibold">TabNine</h5>
                    <p className="text-sm text-gray-600">AI-powered completion with deep learning</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <div className="text-xl">🎉</div>
                  Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="text-green-500">✅</div>
                    <span>Reduces typing effort significantly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="text-green-500">✅</div>
                    <span>Minimizes syntax and logical errors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="text-green-500">✅</div>
                    <span>Increases coding speed dramatically</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="text-green-500">✅</div>
                    <span>Helps beginners understand API usage</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Generation Section */}
        <Card className="overflow-hidden border-l-4 border-l-purple-500 animate-slide-in-right delay-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🎯</div>
              <h3 className="text-2xl font-bold text-purple-600">2. Code Generation Revolution</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                <strong>🚀 Definition:</strong> Code generation tools can create entire functions, classes, or even applications based on high-level descriptions or prompts. They transform natural language or partial code into functional software components.
              </p>
              
              <div className="bg-purple-50 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold text-purple-800 flex items-center gap-2">
                  <div className="text-xl">🛠️</div>
                  Types of Generation:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="text-2xl mb-2">📝</div>
                    <h5 className="font-semibold">Template-based</h5>
                    <p className="text-sm text-gray-600">Uses predefined templates for boilerplate code</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="text-2xl mb-2">🤖</div>
                    <h5 className="font-semibold">AI-based</h5>
                    <p className="text-sm text-gray-600">Creates unique, complex code using machine learning</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <div className="text-xl">⭐</div>
                  Leading Tools:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
                    <div className="text-xl">🧠</div>
                    <div>
                      <span className="font-semibold">OpenAI Codex:</span>
                      <span className="text-gray-600 ml-2">Generates code from natural language instructions</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
                    <div className="text-xl">☁️</div>
                    <div>
                      <span className="font-semibold">Amazon CodeWhisperer:</span>
                      <span className="text-gray-600 ml-2">AWS-optimized code generation</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
                    <div className="text-xl">🎨</div>
                    <div>
                      <span className="font-semibold">Sketch2Code:</span>
                      <span className="text-gray-600 ml-2">Converts sketches into HTML code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Static Analysis Section */}
        <Card className="overflow-hidden border-l-4 border-l-green-500 animate-slide-in-right delay-400">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🔍</div>
              <h3 className="text-2xl font-bold text-green-600">3. Static Analysis Intelligence</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                <strong>🎯 Definition:</strong> Static analysis tools examine code without executing it, to detect potential errors, vulnerabilities, and code quality issues. AI enhances these tools by identifying complex patterns and predicting potential risks.
              </p>
              
              <div className="bg-green-50 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold text-green-800 flex items-center gap-2">
                  <div className="text-xl">🔧</div>
                  Powerful Capabilities:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-green-500">🎯</div>
                      <span>Syntax and semantic error detection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-green-500">🛡️</div>
                      <span>Security vulnerability scanning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-green-500">📏</div>
                      <span>Code style enforcement</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-green-500">🗑️</div>
                      <span>Dead code detection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-green-500">🔗</div>
                      <span>Dependency analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-green-500">📊</div>
                      <span>Performance optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <div className="text-xl">🏆</div>
                  Industry Leaders:
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                    <div className="text-2xl mb-2">🔍</div>
                    <h5 className="font-semibold">SonarQube</h5>
                    <p className="text-sm text-gray-600">Comprehensive code quality platform</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                    <div className="text-2xl mb-2">🛡️</div>
                    <h5 className="font-semibold">DeepCode</h5>
                    <p className="text-sm text-gray-600">AI-powered security analysis</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <h5 className="font-semibold">Codacy</h5>
                    <p className="text-sm text-gray-600">Automated code reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <Card className="overflow-hidden animate-fade-in delay-600">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-2xl font-bold">Quick Comparison Guide</h3>
              <p className="text-gray-600">Choose the right tool for your needs!</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <th className="border border-gray-300 p-4 text-left">Feature</th>
                    <th className="border border-gray-300 p-4 text-left">🏃‍♂️ Autocompletion</th>
                    <th className="border border-gray-300 p-4 text-left">🎯 Code Generation</th>
                    <th className="border border-gray-300 p-4 text-left">🔍 Static Analysis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="border border-gray-300 p-4 font-semibold">🎯 Goal</td>
                    <td className="border border-gray-300 p-4">Assist while coding</td>
                    <td className="border border-gray-300 p-4">Automate code creation</td>
                    <td className="border border-gray-300 p-4">Detect issues in code</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-4 font-semibold">⚡ Execution</td>
                    <td className="border border-gray-300 p-4">Real-time suggestions</td>
                    <td className="border border-gray-300 p-4">Generates blocks of code</td>
                    <td className="border border-gray-300 p-4">Analyzes without running</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <td className="border border-gray-300 p-4 font-semibold">🎯 Use Case</td>
                    <td className="border border-gray-300 p-4">Faster typing, IDE help</td>
                    <td className="border border-gray-300 p-4">Function/class generation</td>
                    <td className="border border-gray-300 p-4">Quality & security checks</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-4 font-semibold">🤖 AI Magic</td>
                    <td className="border border-gray-300 p-4">Predict next tokens</td>
                    <td className="border border-gray-300 p-4">Natural language to code</td>
                    <td className="border border-gray-300 p-4">Pattern recognition</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white animate-scale-in">
        <CardContent className="p-8 text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-4">Ready to Supercharge Your Coding?</h3>
          <p className="text-lg opacity-90 mb-6">
            These AI tools will transform how you write, debug, and optimize code. Let's dive deeper in the next lessons! 💪
          </p>
          <div className="flex justify-center gap-4 text-2xl">
            <span>🔥</span>
            <span>💻</span>
            <span>⚡</span>
            <span>🎯</span>
            <span>🚀</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Lesson2Content;
