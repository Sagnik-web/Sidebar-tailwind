import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='py-4 px-2 bg-amber-600'>
      <h2>Navber</h2>
    </div>
    <App />
    
  </StrictMode>
  ,
)
