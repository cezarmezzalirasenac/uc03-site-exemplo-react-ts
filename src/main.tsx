import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Contato from './pages/Contato'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Contato />
        {/* <App /> */}
    </StrictMode>,
)
