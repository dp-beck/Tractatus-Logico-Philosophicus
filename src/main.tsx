import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App title="Tractatus Logico-Philosophicus"
         author= "Ludwig Wittgenstein" 
          />
  </StrictMode>,
)
