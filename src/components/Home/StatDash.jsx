import { Clock, Target, Zap, TrendingUp, Award, Brain, Sparkles} from 'lucide-react'
function StatDash(){
    return(
        <>
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
        </>
    )
}
export default StatDash;