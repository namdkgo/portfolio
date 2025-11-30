import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './header.jsx'
import Footer from './footer.jsx'
import About from './about.jsx'
import Projects from './projects.jsx'
import Contact from './contact.jsx'
import Project1 from './projects/project1.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/project/1" element={<Project1 />} />
      </Routes>
    </Router>
  </StrictMode>,
)
