import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { SetsProvider } from './context/SetsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SetsProvider>
        <App />
      </SetsProvider>
    </BrowserRouter>
  </StrictMode>,
)
