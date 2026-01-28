import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home Page/Home'
import Aboutme from './components/About Page/Aboutme'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Certificates from './components/Certificates/Certificates'
import Project from './components/Projects/Project'
import Experiance from './components/Experiance/Experiance'
import Contact from './components/Contact Page/Contact'
import Footer from './components/Footer/Footer'
// import { Certificate } from 'crypto'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme/>
      <Education/>
      <Skills/>
      <Certificates/>
      <Project/>
      <Experiance/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
