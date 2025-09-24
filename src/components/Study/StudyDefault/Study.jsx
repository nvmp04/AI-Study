import { createContext, useState } from 'react';
import Introduction from './LeftColumn/StudyContent/Introduction';
import Core from './LeftColumn/StudyContent/Core';
import Notes from './LeftColumn/StudyContent/Notes';
import Applications from './LeftColumn/StudyContent/Applications';
import StudyHeader from './Header/Header';
import TabNav from './LeftColumn/TabNav';
import PDFcontent from './LeftColumn/StudyContent/PDFcontent';
import StudyTools from './RightColumn/StudyTools';
import { useParams } from 'react-router-dom';
import { useSets } from '../../../context/SetsContext';

export default function AIStudyInterface() {
  const [activeTab, setActiveTab] = useState('ai-summary');
  const {id} = useParams();
  const {studySets, isLoading} = useSets();
  if (isLoading) return <p>Loading...</p>;
  const set = studySets.find((item)=>{
    return id === item._id.toString();
  })
  const {
    title = '',
    introduction = '',
    coreKnowledge = '',
    applications = '',
    notes = ''
  } = set ?? {};  
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <StudyHeader title={title}/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            
            {/* Tab Navigation */}
            <TabNav activeTab={activeTab} setActiveTab={setActiveTab}/>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              {activeTab === 'ai-summary' ? (
                <div className="space-y-8">
                    {/* Document Overview */}
                    <Introduction introduction={introduction}/>

                    {/* Core Concepts */}
                    <Core coreKnowledge={coreKnowledge}/>

                    {/* Note*/}
                    <Notes notes={notes}/>

                    {/*Application*/}
                    <Applications applications={applications}/>
                </div>
              ) : (
                /* Original PDF Content */
                <PDFcontent documentInfo = {documentInfo}/>
              )}
            </div>
          </div>

          {/* Right Column - Actions & Info */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <StudyTools/>

            {/* Study Progress */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4">Study Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Overall Progress</span>
                    <span className="text-white">0%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">0</div>
                    <div className="text-xs text-gray-400">Cards Studied</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">0</div>
                    <div className="text-xs text-gray-400">Quiz Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}