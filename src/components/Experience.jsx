import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    role: 'AI Engineer',
    company: 'CloudStok Technologies',
    location: 'Noida',
    period: 'Dec 2025 – Mar 2026',
    color: 'var(--accent)',
    points: [
      'Developed LLM-powered app to automatically generate professional email drafts using Groq LLM API',
      'Used LangChain & LangGraph for prompt orchestration and multi-agent workflow execution',
      'Designed REST APIs with FastAPI and stored draft data feedback using SQLite',
    ],
    tags: ['LLM','LangChain','LangGraph','FastAPI','SQLite','Groq'],
  },
  {
    role: 'AI Engineer',
    company: 'Tekwissen',
    location: 'Hyderabad',
    period: 'Jun 2025 – Nov 2025',
    color: '#00e5a0',
    points: [
      'Built AI-powered marketing automation agent integrating with LinkedIn for lead engagement and outreach',
      'Features to upload Excel lead data, automate personalized email campaigns, and schedule emails efficiently',
      'Implemented multi-step agent workflows for lead processing, content generation, and campaign execution',
    ],
    tags: ['LLM Agents','LangChain','LinkedIn API','Email Automation','Python','Excel'],
  },
  {
    role: 'Associate Analyst',
    company: 'Vaco Binary Semantics',
    location: 'Gurugram',
    period: 'Dec 2024 – May 2025',
    color: 'var(--accent2)',
    points: [
      'Processed and cleaned datasets for AI model training, improving model accuracy',
      'Conducted data analysis to deliver actionable insights, optimizing content strategy for Google projects',
    ],
    tags: ['Python','Excel','Data Analysis','AI Training Data'],
  },
  {
    role: 'Associate Analyst',
    company: 'GlobalLogic',
    location: 'Noida',
    period: 'Jul – Sep 2024',
    color: 'var(--accent3)',
    points: [
      'Performed data quality audits to ensure accuracy and consistency in digital content datasets',
      'Utilized SQL and Excel for data preprocessing, visualization and reporting',
    ],
    tags: ['SQL','Excel','Data Quality','Reporting'],
  },
  {
    role: 'Developer Intern',
    company: 'AICTE',
    location: 'New Delhi',
    period: 'Jun – Aug 2023',
    color: '#ffd700',
    points: [
      'Built a recruitment web application using React.js, Node.js and SQL to manage candidate hiring workflows',
      'Utilized GitHub for version control; collaborated on frontend, backend, and database integration',
    ],
    tags: ['React.js','Node.js','SQL','GitHub'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <motion.div initial={{opacity:0,y:30}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:.6}} style={{ marginBottom:60 }}>
          <p className="section-subtitle">// work history</p>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute',left:20,top:0,bottom:0,width:1,background:'linear-gradient(to bottom,var(--accent),#00e5a0,var(--accent2),var(--accent3),#ffd700,transparent)' }}/>
          <div style={{ display:'flex',flexDirection:'column',gap:36 }}>
            {experiences.map((exp,i)=>(
              <motion.div key={i} initial={{opacity:0,x:-40}} animate={isInView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:i*.15}}
                style={{ paddingLeft:60,position:'relative' }}>
                <motion.div initial={{scale:0}} animate={isInView?{scale:1}:{}} transition={{duration:.4,delay:i*.15+.2}}
                  style={{ position:'absolute',left:12,top:24,width:18,height:18,borderRadius:'50%',background:exp.color,boxShadow:`0 0 20px ${exp.color}60`,border:'3px solid var(--bg)',transform:'translateX(-50%)' }}/>
                <div className="glow-card">
                  <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:14,flexWrap:'wrap',gap:8 }}>
                    <div>
                      <h3 style={{ fontFamily:'var(--font-display)',fontSize:'1.05rem',fontWeight:700,color:exp.color,marginBottom:3 }}>{exp.role}</h3>
                      <div style={{ fontSize:'.95rem',color:'var(--text)',fontWeight:600 }}>{exp.company} <span style={{ color:'var(--text-muted)',fontWeight:400 }}>· {exp.location}</span></div>
                    </div>
                    <div style={{ padding:'4px 14px',borderRadius:100,border:`1px solid ${exp.color}30`,background:`${exp.color}08`,fontFamily:'var(--font-mono)',fontSize:'.72rem',color:exp.color,whiteSpace:'nowrap' }}>{exp.period}</div>
                  </div>
                  <ul style={{ listStyle:'none',marginBottom:16 }}>
                    {exp.points.map((p,j)=>(
                      <li key={j} style={{ color:'var(--text-muted)',fontSize:'.88rem',lineHeight:1.7,marginBottom:5,paddingLeft:16,position:'relative' }}>
                        <span style={{ position:'absolute',left:0,color:exp.color,fontFamily:'var(--font-mono)' }}>›</span>{p}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
                    {exp.tags.map(tag=>(
                      <span key={tag} className="tag" style={{ borderColor:`${exp.color}30`,color:exp.color }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div initial={{opacity:0,y:40}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:.7,delay:.9}} style={{ marginTop:80 }}>
          <p className="section-subtitle">// education</p>
          <h2 className="section-title" style={{ marginBottom:32 }}>Education</h2>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20 }}>
            {[
              { degree:'B.Tech in IT', school:'IPEC, AKTU', location:'Ghaziabad, UP', year:'2020 – 2024', color:'var(--accent)' },
              { degree:'CBSE Class XII', school:'GHPS Shahdara', location:'Delhi', year:'2020', color:'var(--accent2)' },
              { degree:'CBSE Class X', school:'GHPS Shahdara', location:'Delhi', year:'2018', color:'var(--accent3)' },
            ].map(edu=>(
              <div key={edu.degree} className="glow-card">
                <div style={{ fontFamily:'var(--font-display)',fontSize:'.85rem',color:edu.color,marginBottom:8,fontWeight:700,letterSpacing:1 }}>{edu.degree}</div>
                <div style={{ fontWeight:600,marginBottom:4 }}>{edu.school}</div>
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'.75rem',color:'var(--text-muted)' }}>{edu.location} · {edu.year}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
