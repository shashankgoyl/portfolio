import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'RAG Chatbot',
    subtitle: 'AI-Powered Document Assistant',
    description: 'LLM-powered RAG chatbot using Groq API, LangChain & FAISS to deliver context-aware responses from Google Drive documents. Features real-time chat handling with conversation management.',
    tags: ['Python', 'LangChain', 'RAG', 'FastAPI', 'FAISS', 'Groq', 'Docker'],
    color: 'var(--accent)',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(0,212,255,0.02))',
    icon: '🤖',
    features: ['Google Drive integration', 'Context-aware responses', 'Scalable FastAPI backend', 'Containerized with Docker'],
  },
  {
    title: 'Real-Time Object Detection',
    subtitle: 'Computer Vision System',
    description: 'Real-time system using pre-trained SSD-MobileNetV3 to detect and classify 80 common objects from live video. Optimized with OpenCV DNN for efficient inference.',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'SSD-MobileNetV3', 'DNN'],
    color: 'var(--accent2)',
    gradient: 'linear-gradient(135deg, rgba(123,47,255,0.1), rgba(123,47,255,0.02))',
    icon: '👁️',
    features: ['80 object classes', 'Real-time inference', 'OpenCV DNN optimized', 'Live video processing'],
  },
  {
    title: 'LLM Email Generator',
    subtitle: 'Multi-Agent Workflow',
    description: 'Automated email draft generation using Groq LLM API with multi-agent workflow execution via LangGraph. REST API backend with SQLite for feedback storage.',
    tags: ['LangChain', 'LangGraph', 'Groq', 'FastAPI', 'SQLite', 'Docker'],
    color: 'var(--accent3)',
    gradient: 'linear-gradient(135deg, rgba(255,45,107,0.1), rgba(255,45,107,0.02))',
    icon: '✉️',
    features: ['Multi-agent LangGraph', 'REST API endpoints', 'Draft feedback loop', 'Containerized deployment'],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 60, textAlign: 'center' }}
        >
          <p className="section-subtitle">// featured work</p>
          <h2 className="section-title">Projects</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            AI-powered applications and intelligent systems built with modern tools.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glow-card"
              style={{
                background: project.gradient,
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '2fr 1fr' : '1fr 2fr',
                gap: 40,
                alignItems: 'center',
              }}
            >
              {/* Main info */}
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `rgba(0,0,0,0.3)`,
                    border: `1px solid ${project.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>{project.icon}</div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: project.color,
                      marginBottom: 2,
                    }}>{project.title}</h3>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                    }}>{project.subtitle}</div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 20, fontSize: '0.95rem' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag" style={{ borderColor: `${project.color}30`, color: project.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{
                  padding: 24,
                  borderRadius: 12,
                  background: 'rgba(0,0,0,0.3)',
                  border: `1px solid ${project.color}15`,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: project.color,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    marginBottom: 16,
                  }}>Key Features</div>
                  {project.features.map((feature, j) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.15 + j * 0.08 + 0.3 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 0',
                        borderBottom: j < project.features.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}
                    >
                      <div style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: project.color,
                        flexShrink: 0,
                      }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <a
            href="https://github.com/shashankgoyl"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            View All on GitHub →
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .glow-card {
            grid-template-columns: 1fr !important;
          }
          #projects .glow-card > div {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  )
}
