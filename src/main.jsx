import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { GithubProvider } from './contexts/GithubContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GithubProvider>

      <App />
    </GithubProvider>
  </StrictMode>,
)
