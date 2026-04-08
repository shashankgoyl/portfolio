import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    title: 'Languages',
    icon: '{ }',
    color: 'var(--accent)',
    skills: ['Python', 'SQL', 'SQLite', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'AI / ML',
    icon: '🧠',
    color: 'var(--accent2)',
    skills: ['LLMs', 'LangChain', 'LangGraph', 'Transformers', 'NLP', 'RAG', 'MCP'],
  },
  {
    title: 'Backend',
    icon: '⚡',
    color: 'var(--accent3)',
    skills: ['FastAPI', 'REST APIs', 'Docker', 'Git', 'GitHub'],
  },
  {
    title: 'Core CS',
    icon: '⚙️',
    color: '#ffd700',
    skills: ['DSA', 'DBMS', 'OOPs', 'Machine Learning', 'Problem Solving'],
  },
]

const techIcons = [
  { name: 'Python', color: '#3776ab' },
  { name: 'LangChain', color: '#00d4ff' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'LangGraph', color: '#7b2fff' },
  { name: 'Groq', color: '#ff6b35' },
  { name: 'FAISS', color: '#ff2d6b' },
  { name: 'Git', color: '#f05032' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60, textAlign: 'center' }}
        >
          <p className="section-subtitle">// tech stack</p>
          <h2 className="section-title">Skills & Tools</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Technologies I work with to build AI-powered applications and intelligent systems.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 60 }}>
          {skillGroups.map(({ title, icon, color, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glow-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  color: color,
                }}>{icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: color,
                  letterSpacing: 1,
                }}>{title}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 6,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      background: `${color}08`,
                      border: `1px solid ${color}20`,
                      color: 'var(--text)',
                      cursor: 'none',
                    }}
                  >{skill}</motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee tech strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', paddingTop: 32 }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center', letterSpacing: 3, marginBottom: 20, textTransform: 'uppercase' }}>
            Tech I work with
          </p>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            {techIcons.map(({ name, color }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.1, y: -4 }}
                style={{
                  padding: '10px 20px',
                  borderRadius: 8,
                  border: `1px solid ${color}30`,
                  background: `${color}08`,
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  color: color,
                  letterSpacing: 1,
                  cursor: 'none',
                }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
