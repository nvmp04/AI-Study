import React, { useState } from 'react';
import { Brain, Settings, User, Bell, Palette, Shield, Database, Sparkles, Save, ArrowLeft, Menu, Crown } from 'lucide-react';
import AccSetting from './accSetting';
import NotiSetting from './notiSetting';
import AIsetting from './AIsetting';
import PremiumTab from './premiumTab';
import AppearSetting from './appearSetting';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'ai', label: 'AI Settings', icon: Brain },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'premium', label: 'Premium', icon: Crown },
    { id: 'data', label: 'Data', icon: Database }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => window.history.back()}
                className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl blur opacity-75 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Settings
                  </h1>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="h-3 w-3 text-yellow-400" />
                    <span className="text-xs text-yellow-400 font-medium">PREMIUM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="lg:hidden text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl shadow-black/20 sticky top-8">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl shadow-black/20">
              <AccSetting show={activeTab === 'account'}/>
              <NotiSetting show={activeTab === 'notifications'}/>
              <AIsetting show={activeTab === 'ai'}/>
              <PremiumTab show={activeTab === 'premium'}/>
              <AppearSetting show={activeTab === 'appearance'}/>
              {/* Save Button */}
              <div className="flex justify-end pt-8 border-t border-white/10 mt-8">
                <button className="group bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  <div className="flex items-center space-x-3">
                    <Save className="w-5 h-5" />
                    <span>Save Changes</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}