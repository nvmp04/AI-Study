import { Brain, ArrowLeft } from "lucide-react";
function StudyHeader({title}){
    return(
        <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-6">
                    <button 
                        onClick={() => window.history.back()}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
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
                            <h1 className="text-xl font-bold text-white">{title}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-3"></div>
            </div>
        </div>
    </header>
    )
}
export default StudyHeader;