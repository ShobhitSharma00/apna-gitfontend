import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProjectRotes from './Routes.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './authContext.jsx'
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Router>
    <ProjectRotes />
    </Router>
    </AuthProvider>

)
