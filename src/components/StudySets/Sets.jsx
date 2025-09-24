import { MoreVertical, BookOpen, Calendar, Clock, Target, TrendingUp, Edit, Trash2, Play, Zap, Award} from 'lucide-react';
import { useSets } from '../../context/SetsContext';
import { useNavigate } from 'react-router-dom';
export function Sets({filteredSets}){
  const navigate = useNavigate();
  const {setStudySets} = useSets(); 
  function removeSet(id){
    setStudySets(prev=>prev.filter((set)=>set.id!==id))
  }
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };
  const getProgressColor = (progress) => {
    if (progress === 100) return 'from-green-400 to-emerald-500';
    if (progress >= 75) return 'from-blue-400 to-cyan-500';
    if (progress >= 50) return 'from-yellow-400 to-orange-500';
    if (progress > 0) return 'from-purple-400 to-pink-500';
    return 'from-gray-400 to-gray-500';
  };
  return(
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {filteredSets.map((set) => (
          <div key={set.id} className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:scale-105 shadow-2xl shadow-black/20">
            
            {/* Card Header */}
            <div className="flex items-start justify-between mb-6">
              <div className={`bg-gradient-to-br ${set.color} p-3 rounded-2xl shadow-lg`}>
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-xl text-xs font-bold border ${getDifficultyColor(set.difficulty)}`}>
                  {set.difficulty}
                </span>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {set.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {set.description}
              </p>
              
              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center space-x-1">
                  <Target className="h-4 w-4" />
                  <span>{set.cardCount} cards</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{set.totalTime}</span>
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">Progress</span>
                <span className="text-sm font-bold text-white">{set.progress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${getProgressColor(set.progress)} transition-all duration-500 rounded-full`}
                  style={{ width: `${set.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-xs text-gray-400">Accuracy</span>
                </div>
                <span className="text-lg font-bold text-white">{set.accuracy}%</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span className="text-xs text-gray-400">Last Study</span>
                </div>
                <span className="text-sm font-medium text-white">{set.lastStudied}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button onClick={()=>navigate(`/sets/study/${set._id.toString()}`)}
                className={`flex-1 bg-gradient-to-r ${set.color} hover:scale-105 text-white py-3 px-4 rounded-xl font-bold transition-all duration-300 shadow-lg flex items-center justify-center space-x-2`}>
                <Play className="h-4 w-4" />
                <span>Study</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white p-3 rounded-xl transition-all duration-300">
                <Edit className="h-4 w-4" />
              </button>
              <button onClick={()=>removeSet(set.id)}
                className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 p-3 rounded-xl transition-all duration-300">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {/* Achievements */}
            {set.progress === 100 && (
              <div className="mt-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-xl p-3">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-bold text-yellow-400">Mastered!</span>
                <Zap className="h-4 w-4 text-yellow-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    )
}