import { useState } from "react";
function NotiSetting({show}){
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        studyReminders: true,
        achievements: true
      });
    return (
        <div className={show ? "" : "hidden"}>
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-black text-white mb-2">Notification Settings</h2>
                    <p className="text-gray-400">Choose how you want to be notified</p>
                </div>

                <div className="space-y-6">
                    {[
                    { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
                    { key: 'push', label: 'Push Notifications', desc: 'Browser and mobile notifications' },
                    { key: 'studyReminders', label: 'Study Reminders', desc: 'Daily study session reminders' },
                    { key: 'achievements', label: 'Achievement Alerts', desc: 'Get notified of your progress milestones' }
                    ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="flex-1">
                        <h3 className="text-white font-bold">{item.label}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                        <button
                        onClick={() => setNotifications(prev => ({...prev, [item.key]: !prev[item.key]}))}
                        className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                            notifications[item.key] ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-600'
                        }`}
                        >
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300 ${
                            notifications[item.key] ? 'translate-x-7' : 'translate-x-1'
                        }`}></div>
                        </button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default NotiSetting;