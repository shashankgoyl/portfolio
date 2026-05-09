import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'

export default function App() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX; mouseY = e.clientY
      cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px'
    }
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = followerX + 'px'; follower.style.top = followerY + 'px'
      requestAnimationFrame(animateFollower)
    }
    window.addEventListener('mousemove', moveCursor)
    animateFollower()
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Chatbot />
    </>
  )
}
