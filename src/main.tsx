import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { preloadGroup } from './preload.tsx'

const timeout = new Promise((resolve) => setTimeout(resolve, 8000));

Promise.race([preloadGroup('hero'), timeout]).then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
