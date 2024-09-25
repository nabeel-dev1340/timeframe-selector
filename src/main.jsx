import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('time-frame-selector')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
