import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contactLinks = [
  {
    label: 'Email',
    value: 'shashankgoyal902@gmail.com',
    href: 'mailto:shashankgoyal902@gmail.com',
    icon: '✉️',
    color: 'var(--accent)',
  },
  {
    label: 'Phone',
    value: '+91 8929155621',
    href: 'tel:+918929155621',
    icon: '📞',
    color: 'var(--accent2)',
  },
  {
    label: 'LinkedIn',
    value: 'shashank-goyal-006593203',
    href: 'https://linkedin.com/in/shashank-goyal-006593203',
    icon: '💼',
    color: '#0077b5',
  },
  {
    label: 'GitHub',
    value: 'github.com/shashankgoyl',
    href: 'https://github.com/shashankgoyl',
    icon: '🐙',
    color: '#6e40c9',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <p className="section-subtitle">// let's connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            I'm open to opportunities in AI development, LLM engineering, and full-stack Python roles. Let's build something intelligent together.
          </p>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            textAlign: 'center',
            padding: '60px 40px',
            borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,47,255,0.05))',
            border: '1px solid var(--border)',
            marginBottom: 60,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: '50%',
              border: '1px dashed rgba(0,212,255,0.1)',
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              bottom: -80,
              left: -80,
              width: 200,
              height: 200,
              borderRadius: '50%',
              border: '1px dashed rgba(123,47,255,0.1)',
            }}
          />

          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, var(--text), var(--accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 12,
          }}>
            Open to Opportunities
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32, lineHeight: 1.7 }}>
            Currently looking for AI/ML internships and junior developer roles.
          </p>
          <a
            href="mailto:shashankgoyal902@gmail.com"
            className="btn btn-primary"
            style={{ display: 'inline-flex', fontSize: '0.9rem', padding: '16px 36px' }}
          >
            Send Me a Message ✉️
          </a>
        </motion.div>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {contactLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="glow-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                textDecoration: 'none',
                cursor: 'none',
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `${item.color}15`,
                border: `1px solid ${item.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                flexShrink: 0,
              }}>{item.icon}</div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  marginBottom: 3,
                }}>{item.label}</div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: item.color,
                  wordBreak: 'break-all',
                }}>{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          style={{
            textAlign: 'center',
            marginTop: 80,
            paddingTop: 32,
            borderTop: '1px solid var(--border)',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 900,
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 12,
          }}>SG.</div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: 2 }}>
            DESIGNED & BUILT BY SHASHANK GOYAL © 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}
