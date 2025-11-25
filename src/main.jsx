import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import Footer from './footer.jsx'
import About from './about.jsx'
import Projects from './Projects.jsx'
import Contact from './contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </StrictMode>,
)
