import { Crown, Zap, Brain, Award,  Key, CreditCard} from "lucide-react";
function PremiumTab({show}){
    return (
        <div className={show ? "" : "hidden"}>
        <div className="space-y-8">
            <div>
            <h2 className="text-3xl font-black text-white mb-2">Premium Membership</h2>
            <p className="text-gray-400">Manage your premium subscription and benefits</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-3xl">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                <Crown className="h-8 w-8 text-yellow-400" />
                <div>
                    <h3 className="text-2xl font-bold text-white">Premium Pro</h3>
                    <p className="text-yellow-300">Active until Dec 2025</p>
                </div>
                </div>
                <div className="text-right">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-xl font-bold text-sm">
                    ACTIVE
                </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-white font-medium">Unlimited AI</p>
                <p className="text-gray-400 text-sm">No usage limits</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                <Brain className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-medium">Advanced Models</p>
                <p className="text-gray-400 text-sm">GPT-4 & Claude</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                <Award className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-medium">Priority Support</p>
                <p className="text-gray-400 text-sm">24/7 assistance</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                <CreditCard className="h-5 w-5" />
                <span>Manage Billing</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border border-yellow-500/30 text-yellow-400 px-6 py-3 rounded-xl font-bold hover:bg-yellow-500/10 transition-colors">
                <Key className="h-5 w-5" />
                <span>View Benefits</span>
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}
export default PremiumTab;