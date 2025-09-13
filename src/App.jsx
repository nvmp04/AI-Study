import './App.css'
import HomePage from './components/Home/Home'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import StudySetsPage from './components/StudySets/StudySets'
import DashboardPage from './components/DashBoard/DashBoard'
import SettingsPage from './components/Settings/Settings'
import AIStudyInterface from './components/Study/StudyDefault/Study'
import Flashcards from './components/Study/FlashCarts'
import { useState } from 'react'
import Quiz from './components/Study/Quiz'
export function Background(){
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>
  )
}
function AppRoutes() {
  const [showCreateModal, setShowCreateModal] = useState();
  return (
    <>
        <Routes> 
          <Route path="/" element={<HomePage 
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal}/>} /> 
          <Route path="/sets" element={<StudySetsPage 
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal}/>} /> 
          <Route path='/sets/study/:id' element={<AIStudyInterface />} /> 
          <Route path="/sets/study/:id/flashcard" element={<Flashcards/>} />
          <Route path="/sets/study/:id/quiz" element={<Quiz/>} />
          <Route path="/dashboard" element={<DashboardPage />} /> 
          <Route path="/settings" element={<SettingsPage />} /> 
        </Routes> 
    </>
  )
}
function App(){
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Background/>}
      <AppRoutes/>
    </>
  )
}
export default App
