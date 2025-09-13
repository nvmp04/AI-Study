import { Link } from 'react-router-dom';
import { Brain, BookOpen, BarChart3, Plus, Clock, Target, Zap, Sparkles, TrendingUp, Award, ArrowRight, Menu } from 'lucide-react';
import CreateModal from '../Create/CreateModal';

export default function HomePage({showCreateModal, setShowCreateModal}) {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl blur opacity-75 animate-pulse"></div>
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
            
            <nav className="hidden lg:flex items-center space-x-10">
              <a href="#" className="text-white font-medium hover:text-blue-400 transition-colors relative group">
                Home
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-100 group-hover:scale-x-110 transition-transform"></div>
              </a>
              <Link to={'/sets'} className="text-gray-400 hover:text-white transition-colors">Study Sets</Link>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics</a>
              <Link to={'/settings'} className="text-gray-400 hover:text-white transition-colors">Settings</Link>
            </nav>

            <button className="lg:hidden text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-300 font-medium">Powered by GPT-4 & Claude</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Master Any
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Subject
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade AI transforms your study materials into personalized learning experiences. 
            <span className="text-white font-medium"> 10x faster mastery</span> with adaptive intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button onClick={()=>setShowCreateModal(true)}
                    className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div 
                className="relative flex items-center space-x-3">
                <Plus className="w-6 h-6" />
                <span>Create Study Set</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button className="group border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-6 h-6" />
                <span>View Analytics</span>
              </div>
            </button>
          </div>
        </div>

        {/* Premium Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <div className="group bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-blue-400/40">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl shadow-lg shadow-blue-500/30">
                <Target className="h-7 w-7 text-white" />
              </div>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">247</h3>
            <p className="text-blue-300 font-medium">Cards Mastered</p>
            <div className="mt-3 flex items-center space-x-2">
              <div className="flex-1 bg-blue-900/30 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
              <span className="text-xs text-blue-300">+12%</span>
            </div>
          </div>
          
          <div className="group bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-purple-400/40">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-xl shadow-lg shadow-purple-500/30">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <Award className="h-5 w-5 text-yellow-400" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">28</h3>
            <p className="text-purple-300 font-medium">Day Streak</p>
            <div className="mt-3 text-xs text-purple-300">🔥 Personal Best!</div>
          </div>
          
          <div className="group bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-cyan-400/40">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 p-3 rounded-xl shadow-lg shadow-cyan-500/30">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">47.2h</h3>
            <p className="text-cyan-300 font-medium">Total Study Time</p>
            <div className="mt-3 text-xs text-cyan-300">This Month: 12.5h</div>
          </div>

          <div className="group bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-green-400/40">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl shadow-lg shadow-green-500/30">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <Sparkles className="h-5 w-5 text-yellow-400" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">94%</h3>
            <p className="text-green-300 font-medium">AI Accuracy</p>
            <div className="mt-3 text-xs text-green-300">Learning Pattern Optimized</div>
          </div>
        </div>

        {/* Recent Sessions - Premium Style */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-10 backdrop-blur-xl mb-20 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-black text-white">Recent Sessions</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Analytics</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="group flex items-center justify-between p-6 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Advanced React Patterns</p>
                  <p className="text-gray-400">45 cards • AI Quiz Mode</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-green-400 font-medium">96% Mastery</span>
                    </div>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-400">23 min session</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-xl font-bold text-sm mb-2">
                  PERFECT
                </div>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>
            
            <div className="group flex items-center justify-between p-6 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/5 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Machine Learning Basics</p>
                  <p className="text-gray-400">32 cards • Adaptive Learning</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs text-yellow-400 font-medium">In Progress</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded-xl font-bold text-sm mb-2">
                  78% COMPLETE
                </div>
                <p className="text-xs text-gray-400">Yesterday</p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="group relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-3xl p-8 cursor-pointer overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl w-fit mb-6 shadow-lg">
                <Plus className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">AI Study Set Creator</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">Upload any document and watch our AI transform it into an optimized learning experience.</p>
              <div className="flex items-center text-white font-bold group-hover:translate-x-2 transition-transform duration-300">
                <span>Create Now</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-800 rounded-3xl p-8 cursor-pointer overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl w-fit mb-6 shadow-lg">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Smart AI Tutor</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">Get personalized explanations and adaptive questioning powered by advanced AI models.</p>
              <div className="flex items-center text-white font-bold group-hover:translate-x-2 transition-transform duration-300">
                <span>Start Session</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-800 rounded-3xl p-8 cursor-pointer overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl w-fit mb-6 shadow-lg">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Advanced Analytics</h3>
              <p className="text-cyan-100 mb-6 leading-relaxed">Deep insights into your learning patterns with predictive performance modeling.</p>
              <div className="flex items-center text-white font-bold group-hover:translate-x-2 transition-transform duration-300">
                <span>View Insights</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <CreateModal show={showCreateModal} setShowCreateModal={setShowCreateModal} />
    </div>
  );
}