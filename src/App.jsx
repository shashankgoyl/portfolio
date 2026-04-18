import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import ChatBot from './components/Chatbot'

export default function App() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = followerX + 'px'
      follower.style.top = followerY + 'px'
      requestAnimationFrame(animateFollower)
    }

    window.addEventListener('mousemove', moveCursor)
    animateFollower()

    const links = document.querySelectorAll('a, button, .glow-card')
    links.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px'
        cursor.style.height = '20px'
        follower.style.width = '60px'
        follower.style.height = '60px'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px'
        cursor.style.height = '12px'
        follower.style.width = '36px'
        follower.style.height = '36px'
      })
    })

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
      <ChatBot />
    </>
  )
}
