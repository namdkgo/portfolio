import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import About from './about.jsx'
import Portfolio from './portfolio.jsx'
import Contact from './contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
    <Portfolio />
    <Contact />
  </StrictMode>,
)
