import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const achievements = [
  {
    icon: '🏆',
    title: 'Robotech Competition',
    subtitle: '3rd Place – Robotics Event',
    description: 'Demonstrated teamwork and technical skills in a competitive robotics event, securing 3rd position.',
    color: '#ffd700',
  },
  {
    icon: '🌱',
    title: 'NGO Volunteer',
    subtitle: 'Best Volunteer of the Year 2023',
    description: 'Recognized as Best Volunteer of the Year 2023 at Mercy For Animals India for outstanding contributions.',
    color: '#4caf50',
  },
  {
    icon: '☁️',
    title: 'Salesforce Certified',
    subtitle: 'Developer Certification by SmartInternz',
    description: 'Earned Salesforce Developer Certification — gained strong knowledge of Salesforce Flow, automation, and process tools.',
    color: '#00a1e0',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60, textAlign: 'center' }}
        >
          <p className="section-subtitle">// milestones</p>
          <h2 className="section-title">Achievements</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glow-card"
              style={{ textAlign: 'center', padding: '40px 28px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute',
                top: -30,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${item.color}15, transparent)`,
              }} />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                style={{ fontSize: '3rem', marginBottom: 20 }}
              >
                {item.icon}
              </motion.div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 700,
                color: item.color,
                marginBottom: 6,
                letterSpacing: 1,
              }}>{item.title}</h3>

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: 1,
                marginBottom: 16,
                textTransform: 'uppercase',
              }}>{item.subtitle}</div>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.88rem',
                lineHeight: 1.7,
              }}>{item.description}</p>

              {/* Bottom accent */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 2,
                background: `linear-gradient(to right, transparent, ${item.color}, transparent)`,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
