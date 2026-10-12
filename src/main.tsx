import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {images, fonts} from './assets'

const loadImage = (src : string) => {
  const img = new Image()
  img.src = src
  return img.decode()
}
const preload = Promise.allSettled([
  ...images.map(loadImage),
  ...fonts.map((f) => document.fonts.load(f))
])

const timeout = new Promise((resolve) => setTimeout(resolve, 8000));

Promise.race([preload, timeout]).then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
