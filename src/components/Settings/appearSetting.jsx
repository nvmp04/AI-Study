import {Moon, Sun} from 'lucide-react';
import { useState } from 'react';
function AppearSetting({show}){
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className={show ? "" : "hidden"}>
        <div className="space-y-8">
            <div>
            <h2 className="text-3xl font-black text-white mb-2">Appearance</h2>
            <p className="text-gray-400">Customize your visual experience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-white font-bold mb-4">Theme</h3>
                <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-800 to-black border border-white/20 rounded-xl">
                    <Moon className="h-5 w-5 text-blue-400" />
                    <span className="text-white">Dark Mode</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-white/5 border border-white/10 rounded-xl opacity-50">
                    <Sun className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-400">Light Mode (Coming Soon)</span>
                </button>
                </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-white font-bold mb-4">Display</h3>
                <div className="space-y-4">
                <div>
                    <label className="block text-gray-400 text-sm mb-2">Font Size</label>
                    <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 focus:outline-none">
                    <option  className="bg-gray-900">Small</option>
                    <option  className="bg-gray-900">Medium</option>
                    <option  className="bg-gray-900">Large</option>
                    </select>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default AppearSetting;