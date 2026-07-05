import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Strengths from './components/Strengths'
import Footer from './components/Footer'
import { initAllAnimations } from './animations'

export default function App() {
  useEffect(() => {
    initAllAnimations()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Strengths />
      <Footer />
    </div>
  )
}
