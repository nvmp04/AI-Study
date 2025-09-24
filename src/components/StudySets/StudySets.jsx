import React, { createContext, useState } from 'react';
import { Brain, Plus, Search, Filter, ArrowLeft, Sparkles } from 'lucide-react';
import CreateModal from '../Create/CreateModal';
import { useSets } from '../../context/SetsContext';
import { Sets } from './Sets';
import { SaFbar } from './SaFbar';


export default function StudySetsPage({showCreateModal, setShowCreateModal}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');  
  const { studySets, isLoading, error } = useSets();
  
  const filteredSets = studySets.filter(set => {
    const matchesSearch = set.title.toLowerCase().includes(searchTerm.toLowerCase()) ||  set.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterBy === 'all') return matchesSearch;
    if (filterBy === 'recent') return matchesSearch && set.lastStudied !== 'Never';
    if (filterBy === 'completed') return matchesSearch && set.progress === 100;
    if (filterBy === 'in-progress') return matchesSearch && set.progress > 0 && set.progress < 100;
    if (filterBy === 'not-started') return matchesSearch && set.progress === 0;
    
    return matchesSearch;
  });
  return (
    <>
    <div className='min-h-screen bg-black overflow-hidden
    '>
      {/* Header */}
      <header className={`relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl ${showCreateModal ? 'pointer-events-none' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <button onClick={()=>window.history.back()}
                className="text-gray-400 hover:text-white transition-colors">
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
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    StudyAI Pro
                  </h1>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="h-3 w-3 text-yellow-400" />
                    <span className="text-xs text-yellow-400 font-medium">PREMIUM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowCreateModal(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <Plus className="inline-block w-5 h-5 mr-2" />
                Create Set
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      {isLoading && <p>Loading...</p>}
      <main className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 transition-all duration-300 ${showCreateModal ? 'blur-sm pointer-events-none opacity-50' : ''} ${!isLoading  ? "" : "hidden"}`}>
        {/* Page Header */}
        <div className="mb-12">
          {/* Search and Filters */}
          <SaFbar searchTerm={searchTerm} 
                  setSearchTerm = {setSearchTerm}  
                  filterBy={filterBy}
                  setFilterBy={setFilterBy}/>
        </div>
        {/* Study Sets Grid */}
        <Sets filteredSets={filteredSets}/>
        {/* Empty State */}
        {filteredSets.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-gray-500 to-gray-600 p-6 rounded-3xl w-fit mx-auto mb-6">
              <Search className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No study sets found</h3>
            <p className="text-gray-400 mb-8">Try adjusting your search or filter criteria</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
              <Plus className="inline-block w-5 h-5 mr-2" />
              Create Your First Set
            </button>
          </div>
        )}
      </main>
      {/* Create Study Set Modal */}
      <CreateModal show={showCreateModal} setShowCreateModal={setShowCreateModal}/>
    </div>
    </>
  );
}