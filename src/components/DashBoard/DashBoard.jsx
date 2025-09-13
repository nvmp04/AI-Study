import React, { useState } from 'react';
import { Brain, TrendingUp, Target, Clock, Zap, Calendar, Award, BookOpen, BarChart3, Activity, Users, Flame, Trophy, ArrowUp, ArrowDown, Play, Sparkles, ArrowLeft, Settings } from 'lucide-react';

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('week'); // week, month, quarter, year
  const [selectedMetric, setSelectedMetric] = useState('accuracy');

  // Mock analytics data
  const stats = {
    totalStudyTime: { value: 127.5, change: +12.3, unit: 'hours' },
    studySessions: { value: 89, change: +8.1, unit: 'sessions' },
    averageAccuracy: { value: 92.4, change: +3.2, unit: '%' },
    streakDays: { value: 28, change: +7, unit: 'days' },
    cardsStudied: { value: 1247, change: +156, unit: 'cards' },
    setsCompleted: { value: 12, change: +4, unit: 'sets' }
  };

  const weeklyData = [
    { day: 'Mon', accuracy: 89, time: 2.5, sessions: 3 },
    { day: 'Tue', accuracy: 92, time: 3.2, sessions: 4 },
    { day: 'Wed', accuracy: 87, time: 1.8, sessions: 2 },
    { day: 'Thu', accuracy: 95, time: 4.1, sessions: 5 },
    { day: 'Fri', accuracy: 91, time: 2.9, sessions: 3 },
    { day: 'Sat', accuracy: 94, time: 3.7, sessions: 4 },
    { day: 'Sun', accuracy: 88, time: 2.1, sessions: 2 }
  ];

  const recentAchievements = [
    { id: 1, title: 'Study Streak Master', description: '28 days consecutive study', icon: Flame, color: 'from-orange-400 to-red-500', date: '2 hours ago' },
    { id: 2, title: 'Perfect Score', description: '100% accuracy in React Patterns', icon: Trophy, color: 'from-yellow-400 to-orange-500', date: 'Yesterday' },
    { id: 3, title: 'Speed Learner', description: '50 cards in under 10 minutes', icon: Zap, color: 'from-blue-400 to-cyan-500', date: '2 days ago' },
    { id: 4, title: 'Subject Master', description: 'Completed CSS Grid course', icon: Award, color: 'from-green-400 to-emerald-500', date: '3 days ago' }
  ];

  const subjectProgress = [
    { name: 'React', progress: 96, color: 'from-blue-500 to-cyan-500', cards: 45, accuracy: 94 },
    { name: 'Machine Learning', progress: 78, color: 'from-purple-500 to-pink-500', cards: 32, accuracy: 87 },
    { name: 'CSS Grid', progress: 100, color: 'from-green-500 to-emerald-500', cards: 28, accuracy: 98 },
    { name: 'Algorithms', progress: 45, color: 'from-orange-500 to-red-500', cards: 67, accuracy: 82 },
    { name: 'TypeScript', progress: 23, color: 'from-indigo-500 to-blue-500', cards: 39, accuracy: 89 }
  ];

  const getChangeColor = (change) => {
    return change > 0 ? 'text-green-400' : change < 0 ? 'text-red-400' : 'text-gray-400';
  };

  const getChangeIcon = (change) => {
    return change > 0 ? ArrowUp : change < 0 ? ArrowDown : null;
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    StudyAI Pro
                  </h1>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="h-3 w-3 text-yellow-400" />
                    <span className="text-xs text-yellow-400 font-medium">PREMIUM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm"
              >
                <option value="week" className="bg-gray-900">This Week</option>
                <option value="month" className="bg-gray-900">This Month</option>
                <option value="quarter" className="bg-gray-900">This Quarter</option>
                <option value="year" className="bg-gray-900">This Year</option>
              </select>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-white mb-2">Analytics Dashboard</h2>
          <p className="text-xl text-gray-400">Track your learning progress and performance insights</p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {Object.entries(stats).map(([key, data], index) => {
            const icons = {
              totalStudyTime: Clock,
              studySessions: Play,
              averageAccuracy: Target,
              streakDays: Flame,
              cardsStudied: BookOpen,
              setsCompleted: Trophy
            };
            
            const colors = [
              'from-blue-500 to-cyan-600',
              'from-purple-500 to-pink-600',
              'from-green-500 to-emerald-600',
              'from-orange-500 to-red-600',
              'from-indigo-500 to-blue-600',
              'from-teal-500 to-cyan-600'
            ];

            const Icon = icons[key];
            const ChangeIcon = getChangeIcon(data.change);

            return (
              <div key={key} className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:scale-105 shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between mb-6">
                  <div className={`bg-gradient-to-br ${colors[index]} p-4 rounded-2xl shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  {ChangeIcon && (
                    <div className={`flex items-center space-x-1 ${getChangeColor(data.change)}`}>
                      <ChangeIcon className="h-4 w-4" />
                      <span className="text-sm font-bold">
                        {data.change > 0 ? '+' : ''}{data.change}%
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="mb-2">
                  <span className="text-4xl font-black text-white">
                    {data.value}
                  </span>
                  <span className="text-lg text-gray-400 ml-1">
                    {data.unit}
                  </span>
                </div>
                
                <p className="text-gray-400 font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </p>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          
          {/* Weekly Performance Chart */}
          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Weekly Performance</h3>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setSelectedMetric('accuracy')}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedMetric === 'accuracy' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Accuracy
                </button>
                <button 
                  onClick={() => setSelectedMetric('time')}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedMetric === 'time' 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Time
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={day.day} className="flex items-center space-x-4">
                  <div className="w-12 text-sm font-medium text-gray-400">
                    {day.day}
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${
                        selectedMetric === 'accuracy' 
                          ? 'from-blue-400 to-cyan-500' 
                          : 'from-purple-400 to-pink-500'
                      } transition-all duration-500 rounded-full`}
                      style={{ 
                        width: selectedMetric === 'accuracy' 
                          ? `${day.accuracy}%` 
                          : `${(day.time / 5) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <div className="w-16 text-sm font-bold text-white text-right">
                    {selectedMetric === 'accuracy' ? `${day.accuracy}%` : `${day.time}h`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subject Progress */}
          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-bold text-white mb-8">Subject Progress</h3>
            
            <div className="space-y-6">
              {subjectProgress.map((subject) => (
                <div key={subject.name} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-white">{subject.name}</h4>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-400">{subject.cards} cards</span>
                      <span className="text-sm font-bold text-white">{subject.progress}%</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${subject.color} transition-all duration-500 rounded-full`}
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Accuracy: {subject.accuracy}%</span>
                    {subject.progress === 100 && (
                      <div className="flex items-center space-x-1 text-green-400">
                        <Trophy className="h-3 w-3" />
                        <span className="font-bold">Mastered</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-black/20 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Recent Achievements</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>4 new this week</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentAchievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.id} className="group flex items-center space-x-4 p-6 bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`bg-gradient-to-br ${achievement.color} p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                    <p className="text-xs text-gray-500">{achievement.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-3 rounded-2xl shadow-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">AI Study Insights</h3>
              <p className="text-sm text-blue-300">Powered by advanced analytics</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span className="text-sm font-bold text-green-400">Optimal Study Time</span>
              </div>
              <p className="text-white font-bold text-lg mb-2">2:00 PM - 4:00 PM</p>
              <p className="text-xs text-gray-400">You perform 23% better during afternoon sessions</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-bold text-blue-400">Recommended Focus</span>
              </div>
              <p className="text-white font-bold text-lg mb-2">Data Structures</p>
              <p className="text-xs text-gray-400">45% complete - spend 20 more minutes daily</p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-2 mb-3">
                <Activity className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-bold text-purple-400">Learning Velocity</span>
              </div>
              <p className="text-white font-bold text-lg mb-2">+12% This Week</p>
              <p className="text-xs text-gray-400">Your retention rate is improving consistently</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}