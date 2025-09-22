import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { SetsProvider } from './context/SetsContext.jsx'
import { AISummaryProvider } from './context/AISummaryContext.jsx'
import { AuthProvider } from './hooks/useAuth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AISummaryProvider>
          <SetsProvider>
            <App />
          </SetsProvider>
        </AISummaryProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
