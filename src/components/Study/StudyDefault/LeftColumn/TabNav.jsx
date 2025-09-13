import { Sparkles, FileText } from "lucide-react";
function TabNav({activeTab, setActiveTab}){
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-2 mb-8 backdrop-blur-sm">
            <div className="flex space-x-2">
            <button
                onClick={() => setActiveTab('ai-summary')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'ai-summary'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
                <Sparkles className="h-5 w-5" />
                <span>AI Summary</span>
            </button>
            <button
                onClick={() => setActiveTab('original-pdf')}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'original-pdf'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
                <FileText className="h-5 w-5" />
                <span>Original PDF</span>
            </button>
            </div>
        </div>
    )
}
export default TabNav;