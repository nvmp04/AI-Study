import { useState } from "react";
import { Brain } from "lucide-react";
function AIsetting({show}){
    const [aiSettings, setAiSettings] = useState({
        difficulty: 'adaptive',
        language: 'english',
        voiceSpeed: 1.0,
        autoGenerate: true
    });
    return (
        <div className={show ? "" : "hidden"}>
            <div className="space-y-8">
                <div>
                <h2 className="text-3xl font-black text-white mb-2">AI Configuration</h2>
                <p className="text-gray-400">Customize your AI learning experience</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <label className="block text-white font-medium">Difficulty Level</label>
                    <select 
                    value={aiSettings.difficulty}
                    onChange={(e) => setAiSettings(prev => ({...prev, difficulty: e.target.value}))}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 focus:outline-none"
                    >
                    <option  className="bg-gray-900" value="beginner">Beginner</option>
                    <option  className="bg-gray-900" value="intermediate">Intermediate</option>
                    <option  className="bg-gray-900" value="advanced">Advanced</option>
                    <option  className="bg-gray-900" value="adaptive">Adaptive (AI Chooses)</option>
                    </select>
                </div>
                
                <div className="space-y-4">
                    <label className="block text-white font-medium">Primary Language</label>
                    <select 
                    value={aiSettings.language}
                    onChange={(e) => setAiSettings(prev => ({...prev, language: e.target.value}))}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 focus:outline-none"
                    >
                    <option  className="bg-gray-900" value="english">English</option>
                    <option className="bg-gray-900" value="vietnamese">Tiếng Việt</option>
                    </select>
                </div>

                <div className="space-y-4">
                    <label className="block text-white font-medium">Voice Speed</label>
                    <div className="space-y-2">
                    <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={aiSettings.voiceSpeed}
                        onChange={(e) => setAiSettings(prev => ({...prev, voiceSpeed: parseFloat(e.target.value)}))}
                        className="w-full accent-blue-500"
                    />
                    <div className="text-center text-gray-400">{aiSettings.voiceSpeed}x</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="block text-white font-medium">Auto-Generate Questions</label>
                    <button
                    onClick={() => setAiSettings(prev => ({...prev, autoGenerate: !prev.autoGenerate}))}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 ${
                        aiSettings.autoGenerate 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-white'
                        : 'bg-white/5 border-white/20 text-gray-400'
                    }`}
                    >
                    {aiSettings.autoGenerate ? 'Enabled' : 'Disabled'}
                    </button>
                </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                    <Brain className="h-6 w-6 text-purple-400" />
                    <h3 className="text-white font-bold">AI Model Selection</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <h4 className="text-white font-medium">GPT-4 Turbo</h4>
                    <p className="text-gray-400 text-sm">Advanced reasoning and analysis</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <h4 className="text-white font-medium">Claude 3.5 Sonnet</h4>
                    <p className="text-gray-400 text-sm">Superior creative writing</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default AIsetting;