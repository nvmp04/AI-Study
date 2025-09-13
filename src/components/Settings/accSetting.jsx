import { Crown } from "lucide-react";
function AccSetting({show}){
    return (
        <div className={show ? "" : "hidden"}>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-white mb-2">Account Settings</h2>
              <p className="text-gray-400">Manage your profile and account preferences</p>
            </div>

            <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  JD
                </div>
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-green-400 to-emerald-500 p-1 rounded-full">
                  <Crown className="h-4 w-4 text-black" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">John Doe</h3>
                <p className="text-blue-300 font-medium">Premium Member</p>
                <p className="text-gray-400 text-sm">john.doe@email.com</p>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block text-white font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none"
                  defaultValue="John Doe"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-white font-medium">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none"
                  defaultValue="john.doe@email.com"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-white font-medium">Time Zone</label>
                <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 focus:outline-none">
                  <option  className="bg-gray-900">UTC+07:00 (Vietnam)</option>
                  <option  className="bg-gray-900">UTC-05:00 (EST)</option>
                  <option  className="bg-gray-900">UTC+00:00 (GMT)</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="block text-white font-medium">Study Goal</label>
                <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 focus:outline-none">
                  <option  className="bg-gray-900">30 minutes/day</option>
                  <option  className="bg-gray-900">1 hour/day</option>
                  <option  className="bg-gray-900">2 hours/day</option>
                </select>
              </div>
            </div>
          </div>
        </div> 
    )
}
export default AccSetting;