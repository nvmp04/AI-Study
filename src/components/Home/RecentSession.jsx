import { BookOpen } from "lucide-react";
function RecentSession(){
    return (
        <>
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
        </>
    )
}
export default RecentSession;