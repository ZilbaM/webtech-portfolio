import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ReactLenis} from 'lenis/react'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
    <Analytics />
  </StrictMode>,
)
