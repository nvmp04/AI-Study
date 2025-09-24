import { Link, useNavigate } from 'react-router-dom';
import { Brain, Sparkles, Menu, User, Home } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
function Header(){
  const {isLoggedIn} = useAuth();
  return (
      <>
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
            <a href="#" className=" flex gap-1 text-white font-medium transition-colors relative group">
              <Home className='text-white'/>
              Home
            </a>
            <Link to={isLoggedIn ? '/sets' : '/login'} className="text-gray-400 hover:text-white transition-colors">Study Sets</Link>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics</a>
            {isLoggedIn && <button className="text-gray-400 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>}
          </nav>
          
        </div>
      </div>
    </header>
    </>
  )
}
export default Header;