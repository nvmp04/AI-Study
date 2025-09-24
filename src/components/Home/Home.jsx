import { Link, useNavigate } from 'react-router-dom';
import { Brain, BarChart3, Plus, Sparkles, ArrowRight, Menu, LogIn } from 'lucide-react';
import CreateModal from '../Create/CreateModal';
import { useAuth } from '../../hooks/useAuth';
import StatDash from './StatDash';
import RecentSession from './RecentSession';
import Footer from './Footer';
import Header from './Header';
export default function HomePage({showCreateModal, setShowCreateModal}) {
  const navigate = useNavigate()
  const {isLoggedIn} = useAuth();
  function handleLogOrCreate(){
    if(!isLoggedIn) navigate('/login');
    else setShowCreateModal(true);
  }
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <Header/>

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
            <button onClick={()=>{handleLogOrCreate()}}
                    className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div 
                className="relative flex items-center space-x-3">
                {isLoggedIn && <Plus className="w-6 h-6" />}
                <span>{isLoggedIn ? "Create Study Set" : "Login now"}</span>
                <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button className={`group border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 ${isLoggedIn ? '' : "hidden"}`}>
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-6 h-6" />
                <span>View Analytics</span>
              </div>
            </button>
          </div>
        </div>

        {/* Premium Stats Dashboard */}
        { isLoggedIn && <StatDash />}
        {/* Recent Sessions - Premium Style */}
        { isLoggedIn && <RecentSession/>}
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
      <Footer/>
    </div>
  );
}