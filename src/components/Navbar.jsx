import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const navLinks = ['about', 'skills', 'experience', 'projects', 'achievements', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 40px' : '20px 40px',
        background: scrolled ? 'rgba(2,4,8,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
        transition: 'all 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <motion.div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: 2,
        }}
      >
        SG<span style={{ color: 'var(--accent)', WebkitTextFillColor: 'var(--accent)' }}>.</span>
      </motion.div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
        {navLinks.map((link) => (
          <Link
            key={link}
            to={link}
            smooth={true}
            duration={800}
            offset={-80}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: 2,
              cursor: 'none',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {link}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'none',
          flexDirection: 'column',
          gap: 5,
          padding: 4,
        }}
        className="hamburger"
        aria-label="menu"
      >
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            animate={{
              rotate: open && i === 0 ? 45 : open && i === 2 ? -45 : 0,
              y: open && i === 0 ? 10 : open && i === 2 ? -10 : 0,
              opacity: open && i === 1 ? 0 : 1,
            }}
            style={{
              display: 'block',
              width: 24,
              height: 2,
              background: 'var(--accent)',
              borderRadius: 2,
            }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              background: 'rgba(2,4,8,0.98)',
              backdropFilter: 'blur(20px)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              borderBottom: '1px solid var(--border)',
            }}
          >
            {navLinks.map(link => (
              <Link
                key={link}
                to={link}
                smooth={true}
                duration={800}
                offset={-80}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  color: 'var(--text)',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  cursor: 'none',
                  textDecoration: 'none',
                }}
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
