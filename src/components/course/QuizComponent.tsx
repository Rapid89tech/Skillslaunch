import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  HelpCircle,
  ChevronRight,
  RotateCcw,
  Award
} from 'lucide-react';
import type { QuizLesson } from '@/types/course';
import { useModuleScores } from '@/hooks/useModuleScores';
import { useParams } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

interface QuizComponentProps {
  lesson: QuizLesson;
  onComplete: () => void;
  onNext: () => void;
  moduleId: number;
  lessonId: number;
}

const QuizComponent = ({ lesson, onComplete, onNext, moduleId, lessonId }: QuizComponentProps) => {
  const { id: courseId } = useParams<{ id: string }>();
  const { submitScore, scores, getGradeColor, fetchScores, fetchCourseSummary } = useModuleScores(courseId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(lesson.content.questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  const questions = lesson.content.questions;
  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (!isFirstQuestion) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = async () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        correctCount++;
      }
    });
    
    const percentage = (correctCount / questions.length) * 100;
    const scorePoints = Math.round(percentage); // Convert percentage to points out of 100
    
    setScore(percentage);
    setShowResults(true);
    setQuizCompleted(true);
    
    // Save score to database
    if (courseId && moduleId !== undefined && lessonId !== undefined) {
      await submitScore(moduleId, lessonId, scorePoints, 100);
      await fetchScores(); // Force refresh after submitting
      await fetchCourseSummary(); // Also refresh course summary
      setRefreshKey(prev => prev + 1); // Force re-render
    }
    
    if (percentage >= 70) {
      onComplete();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setQuizCompleted(false);
    setScore(0);
  };

  const allAnswered = answers.every(answer => answer !== null);
  const currentAnswerSelected = answers[currentQuestion] !== null;

  // Optionally, listen for score changes and force re-render
  useEffect(() => {
    setRefreshKey(prev => prev + 1);
  }, [scores]);

  if (showResults) {
    // Filter past attempts for this module/lesson
    const pastAttempts = scores.filter(
      (s) => s.module_id === moduleId && s.lesson_id === lessonId
    );
    const latestAttempt = pastAttempts[0];
    // Module score for this module
    const moduleScores = scores.filter(s => s.module_id === moduleId);
    const totalScore = moduleScores.reduce((sum, s) => sum + s.score, 0);
    const totalPoints = moduleScores.reduce((sum, s) => sum + s.total_points, 0);
    const percentage = totalPoints > 0 ? (totalScore / totalPoints) * 100 : 0;
    let grade = 'F';
    if (percentage >= 90) grade = 'A';
    else if (percentage >= 80) grade = 'B';
    else if (percentage >= 70) grade = 'C';
    else if (percentage >= 60) grade = 'D';
    return (
      <div className="space-y-6 animate-fade-in">
        {/* Flex row for percentage widget and module score */}
        <div className="flex flex-col md:flex-row md:items-stretch md:gap-8 w-full justify-center">
          {/* Dynamic Score Widget (centered, replaces old percentage text) */}
          {latestAttempt && (
            <div className="flex justify-center mb-2 md:mb-0">
              <div className="relative w-[220px] h-[220px] bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-2xl border border-blue-200/40 dark:border-blue-900/40 backdrop-blur-lg glassmorphism-card group hover:scale-105 transition-transform duration-300 animate-fade-in">
                {/* Animated Circular Progress */}
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 220 220">
                  <circle cx="110" cy="110" r="95" fill="#f3f4f6" />
                  <circle
                    cx="110" cy="110" r="95" fill="none"
                    stroke="url(#score-gradient)"
                    strokeWidth="18"
                    strokeDasharray={2 * Math.PI * 95}
                    strokeDashoffset={2 * Math.PI * 95 * (1 - (latestAttempt.percentage / 100))}
                    strokeLinecap="round"
                    className="transition-all duration-700 ease-in-out"
                    style={{ filter: 'drop-shadow(0 0 16px #a5b4fc)' }}
                  />
                  <defs>
                    <linearGradient id="score-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#a21caf" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Animated Percentage */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 animate-pulse">
                    {Math.round(latestAttempt.percentage)}%
                  </span>
                  <span className="text-base font-semibold text-gray-700 dark:text-gray-200 mt-2 animate-fade-in">Score</span>
                  <span className={`mt-3 px-3 py-1 rounded-full text-sm font-bold border ${getGradeColor(latestAttempt.grade)} animate-bounce`}>{latestAttempt.grade}</span>
                  <span className="text-xs text-gray-500 mt-2 animate-fade-in">Attempt #{pastAttempts.length}</span>
                </div>
              </div>
            </div>
          )}
          {/* Module Score Card */}
          <div className="flex justify-center items-center">
            <div className="w-[320px] max-w-full bg-gray-50 rounded-3xl shadow-xl border border-blue-100 p-6 flex flex-col gap-2 animate-fade-in">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-lg">Module {moduleId}</h4>
                <Badge 
                  variant="outline" 
                  className={`font-bold ${getGradeColor(grade)}`}
                >
                  {grade}
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm mb-2">
                <div>
                  <span className="text-gray-600">Score: </span>
                  <span className="font-semibold">{totalScore}/{totalPoints}</span>
                </div>
                <div>
                  <span className="text-gray-600">Percentage: </span>
                  <span className="font-semibold">{Math.round(percentage)}%</span>
                </div>
                <div>
                  <span className="text-gray-600">Lessons: </span>
                  <span className="font-semibold">{moduleScores.length}</span>
                </div>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
          </div>
        </div>
        {/* Try Again Button */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <Button
            onClick={resetQuiz}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <RotateCcw className="h-5 w-5" />
            Try Again
          </Button>
        </div>
        {/* Answer Review */}
        <Card className="animate-fade-in transition-all duration-200 hover:shadow-xl hover:scale-[1.015]" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <CardTitle>Answer Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions.map((question, qIndex) => (
              <div key={qIndex} className="p-4 border rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.01] animate-fade-in" style={{ animationDelay: `${0.1 * qIndex}s` }}>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center animate-scale-in">
                    {qIndex + 1}
                  </span>
                  {question.question}
                </h4>
                <div className="space-y-2 mb-3">
                  {question.options.map((option, oIndex) => (
                    <div
                      key={oIndex}
                      className={`p-2 rounded border transition-all duration-200 hover:shadow-sm hover:scale-[1.01] ${
                        oIndex === question.correct
                          ? 'bg-green-100 border-green-300'
                          : answers[qIndex] === oIndex
                          ? 'bg-red-100 border-red-300'
                          : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {oIndex === question.correct && <CheckCircle className="h-4 w-4 text-green-600" />}
                        {answers[qIndex] === oIndex && oIndex !== question.correct && <XCircle className="h-4 w-4 text-red-600" />}
                        <span>{option}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        {/* Past Attempts Section */}
        {pastAttempts.length > 0 && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-bold mb-3 mt-6 text-blue-700">Past Attempts</h3>
            <div className="grid gap-4">
              {pastAttempts.map((attempt, idx) => (
                <div
                  key={attempt.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 border border-blue-100 shadow-md animate-fade-in"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div>
                    <div className="font-semibold text-base text-blue-900">Attempt {pastAttempts.length - idx}</div>
                    <div className="text-xs text-gray-500">{new Date(attempt.completed_at || attempt.created_at).toLocaleString()}</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-lg">
                      {attempt.score}/{attempt.total_points} ({attempt.percentage}%)
                    </span>
                    <span className={`mt-1 px-2 py-1 rounded text-xs font-bold border ${getGradeColor(attempt.grade)}`}>{attempt.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Progress Header */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover-scale transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4 animate-slide-in-right">
            <h2 className="text-2xl font-bold">{lesson.title}</h2>
            <Badge variant="secondary" className="bg-white/20 text-white animate-scale-in" style={{ animationDelay: '0.2s' }}>
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-500 animate-fade-in"
              style={{ 
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                animationDelay: '0.4s'
              }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="border-0 shadow-xl hover-scale transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
        <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
          <CardTitle className="flex items-center gap-3 animate-fade-in">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center animate-pulse">
              <HelpCircle className="h-5 w-5" />
            </div>
            <span>Question {currentQuestion + 1}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>{currentQ.question}</h3>
            
            <RadioGroup 
              value={answers[currentQuestion]?.toString() || ''} 
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
              className="space-y-3"
            >
              {currentQ.options.map((option, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-slate-50 hover-scale transition-all duration-200 animate-fade-in" 
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer text-base"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button 
              onClick={goToPrevQuestion}
              disabled={isFirstQuestion}
              variant="outline"
              className="flex items-center gap-2 hover-scale transition-all duration-200"
            >
              Previous
            </Button>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{lesson.duration}</span>
            </div>

            {!isLastQuestion ? (
              <Button 
                onClick={goToNextQuestion}
                disabled={!currentAnswerSelected}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 hover-scale transition-all duration-200"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={submitQuiz}
                disabled={!allAnswered}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 hover-scale transition-all duration-200"
              >
                Submit Quiz
                <CheckCircle className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Answer Instructions */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <p className="text-sm text-blue-800 flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Select your answer and navigate through all questions before submitting.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizComponent;
