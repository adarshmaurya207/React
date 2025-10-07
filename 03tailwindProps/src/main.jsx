import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
aman="My name is Adarsh Maurya" 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App title={aman}/>
  </StrictMode>,
)
