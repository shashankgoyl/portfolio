import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    title: 'RAG Chatbot',
    subtitle: 'AI-Powered Document Assistant',
    description: 'LLM-powered RAG chatbot using Groq API, LangChain & FAISS for context-aware responses from Google Drive documents. Features vector embeddings stored in FAISS, real-time chat management, and is deployed live on Render.',
    tags: ['Python','LangChain','RAG','FastAPI','FAISS','Groq','Docker','Render'],
    color: 'var(--accent)',
    gradient: 'linear-gradient(135deg,rgba(0,212,255,.1),rgba(0,212,255,.02))',
    icon: '🤖',
    features: ['FAISS vector embeddings','Google Drive integration','Scalable FastAPI backend','Deployed on Render'],
    live: true,
  },
  {
    title: 'Marketing Automation Agent',
    subtitle: 'AI LinkedIn Lead Agent — Tekwissen',
    description: 'AI-powered marketing automation agent integrating with LinkedIn for lead engagement. Upload Excel lead data, automate personalized email campaigns, and schedule emails using multi-step LLM agent workflows.',
    tags: ['LLM Agents','LangChain','LinkedIn API','Email Automation','Python','Excel'],
    color: '#00e5a0',
    gradient: 'linear-gradient(135deg,rgba(0,229,160,.1),rgba(0,229,160,.02))',
    icon: '📣',
    features: ['LinkedIn lead integration','Excel data upload','Personalized email campaigns','Multi-step agent workflows'],
    live: false,
  },
  {
    title: 'LLM Email Generator',
    subtitle: 'Multi-Agent Workflow — CloudStok',
    description: 'Automated email draft generation using Groq LLM with multi-agent workflow execution via LangGraph. REST API backend with SQLite for feedback storage, containerized with Docker.',
    tags: ['LangChain','LangGraph','Groq','FastAPI','SQLite','Docker'],
    color: 'var(--accent2)',
    gradient: 'linear-gradient(135deg,rgba(123,47,255,.1),rgba(123,47,255,.02))',
    icon: '✉️',
    features: ['Multi-agent LangGraph','REST API endpoints','Draft feedback loop','Docker deployment'],
    live: false,
  },
  {
    title: 'Recruitment Web App',
    subtitle: 'Full-Stack — AICTE Internship',
    description: 'Full-stack recruitment web application built with React.js, Node.js and SQL to manage candidate hiring workflows. Collaborated on frontend, backend, and database integration using GitHub for version control.',
    tags: ['React.js','Node.js','SQL','GitHub','REST API'],
    color: '#ffd700',
    gradient: 'linear-gradient(135deg,rgba(255,215,0,.08),rgba(255,215,0,.01))',
    icon: '💼',
    features: ['Candidate management','React.js frontend','Node.js backend','SQL database'],
    live: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} style={{ background:'var(--bg2)' }}>
      <div className="container">
        <motion.div initial={{opacity:0,y:30}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:.6}}
          style={{ marginBottom:60,textAlign:'center' }}>
          <p className="section-subtitle">// featured work</p>
          <h2 className="section-title">Projects</h2>
          <p style={{ color:'var(--text-muted)',maxWidth:500,margin:'0 auto',lineHeight:1.7 }}>AI-powered applications and intelligent systems built in production.</p>
        </motion.div>

        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(500px,1fr))',gap:28 }}>
          {projects.map((project,i)=>(
            <motion.div key={project.title} initial={{opacity:0,y:50}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:.7,delay:i*.12}}
              className="glow-card" style={{ background:project.gradient }}>
              <div style={{ display:'flex',alignItems:'flex-start',gap:16,marginBottom:16 }}>
                <div style={{ width:52,height:52,borderRadius:14,background:'rgba(0,0,0,.3)',border:`1px solid ${project.color}30`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem',flexShrink:0 }}>{project.icon}</div>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex',alignItems:'center',gap:8,marginBottom:2 }}>
                    <h3 style={{ fontFamily:'var(--font-display)',fontSize:'1.1rem',fontWeight:700,color:project.color }}>{project.title}</h3>
                    {project.live && (
                      <span style={{ padding:'2px 8px',borderRadius:100,background:'rgba(0,229,160,.15)',border:'1px solid rgba(0,229,160,.3)',fontFamily:'var(--font-mono)',fontSize:'.6rem',color:'#00e5a0',letterSpacing:1 }}>● LIVE</span>
                    )}
                  </div>
                  <div style={{ fontFamily:'var(--font-mono)',fontSize:'.7rem',color:'var(--text-muted)',letterSpacing:1,textTransform:'uppercase' }}>{project.subtitle}</div>
                </div>
              </div>

              <p style={{ color:'var(--text-muted)',lineHeight:1.8,marginBottom:16,fontSize:'.9rem' }}>{project.description}</p>

              <div style={{ padding:16,borderRadius:10,background:'rgba(0,0,0,.25)',border:`1px solid ${project.color}10`,marginBottom:16 }}>
                {project.features.map((f,j)=>(
                  <div key={f} style={{ display:'flex',alignItems:'center',gap:8,padding:'6px 0',borderBottom:j<project.features.length-1?'1px solid rgba(255,255,255,.03)':'none' }}>
                    <div style={{ width:5,height:5,borderRadius:'50%',background:project.color,flexShrink:0 }}/>
                    <span style={{ fontFamily:'var(--font-mono)',fontSize:'.75rem',color:'var(--text-muted)' }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
                {project.tags.map(tag=>(
                  <span key={tag} className="tag" style={{ borderColor:`${project.color}30`,color:project.color }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{}} transition={{delay:.8}} style={{ textAlign:'center',marginTop:48 }}>
          <a href="https://github.com/shashankgoyl" target="_blank" rel="noreferrer" className="btn btn-outline">View All on GitHub →</a>
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){#projects .container>div{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
