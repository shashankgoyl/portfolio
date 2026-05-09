import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '5+', label: 'Roles Held' },
  { value: '3+', label: 'AI Projects' },
  { value: '4+', label: 'Years Learning' },
  { value: '1', label: 'Certification' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center' }}>
          <motion.div initial={{opacity:0,x:-50}} animate={isInView?{opacity:1,x:0}:{}} transition={{duration:.8}}>
            <p className="section-subtitle">// about me</p>
            <h2 className="section-title">Who Am I?</h2>
            <p style={{ color:'var(--text-muted)',lineHeight:1.9,marginBottom:20,fontSize:'1.05rem' }}>
              I'm an AI Engineer from Delhi, India with a B.Tech in Information Technology from IPEC, Ghaziabad. I specialize in building production-grade LLM applications, RAG systems, and AI automation agents.
            </p>
            <p style={{ color:'var(--text-muted)',lineHeight:1.9,marginBottom:32,fontSize:'1.05rem' }}>
              From marketing automation agents at Tekwissen to multi-agent email workflows at CloudStok — I build AI that works in the real world. I'm passionate about making intelligent systems that create real business value.
            </p>
            <div style={{ display:'flex',gap:12,flexWrap:'wrap' }}>
              {['LLMs','LangChain','LangGraph','FastAPI','RAG','Python','Docker','Hugging Face'].map(tag=>(
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div style={{ marginTop:32 }}>
              <a href="mailto:shashankgoyal902@gmail.com" className="btn btn-primary" style={{ display:'inline-flex' }}>Hire Me</a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:50}} animate={isInView?{opacity:1,x:0}:{}} transition={{duration:.8,delay:.2}}>
            <div style={{ position:'relative',marginBottom:32 }}>
              <motion.div animate={{rotate:[0,360]}} transition={{duration:20,repeat:Infinity,ease:'linear'}}
                style={{ position:'absolute',inset:-20,borderRadius:'50%',border:'1px dashed rgba(0,212,255,.2)' }}/>
              <div className="glow-card" style={{ background:'linear-gradient(135deg,var(--surface),var(--surface2))',padding:40,textAlign:'center',position:'relative',overflow:'hidden' }}>
                <div style={{ position:'absolute',top:-40,right:-40,width:160,height:160,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,212,255,.08),transparent)' }}/>
                <div style={{ fontFamily:'var(--font-display)',fontSize:'3.5rem',fontWeight:900,background:'linear-gradient(135deg,var(--accent),var(--accent2))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',marginBottom:8 }}>SG</div>
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'.75rem',color:'var(--text-muted)',letterSpacing:3 }}>AI ENGINEER</div>
                <div style={{ marginTop:20,padding:'12px 20px',background:'rgba(0,212,255,.05)',borderRadius:8,border:'1px solid var(--border)',fontFamily:'var(--font-mono)',fontSize:'.8rem',color:'var(--accent)' }}>📍 Delhi, India</div>
                <div style={{ marginTop:12,padding:'12px 20px',background:'rgba(123,47,255,.05)',borderRadius:8,border:'1px solid rgba(123,47,255,.2)',fontFamily:'var(--font-mono)',fontSize:'.8rem',color:'var(--accent2)' }}>📞 +91 8929155621</div>
              </div>
            </div>
            <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:16 }}>
              {stats.map(({value,label},i)=>(
                <motion.div key={label} initial={{opacity:0,scale:.8}} animate={isInView?{opacity:1,scale:1}:{}} transition={{duration:.5,delay:.4+i*.1}}
                  className="glow-card" style={{ textAlign:'center',padding:'20px 16px' }}>
                  <div style={{ fontFamily:'var(--font-display)',fontSize:'2rem',fontWeight:900,color:'var(--accent)' }}>{value}</div>
                  <div style={{ fontFamily:'var(--font-mono)',fontSize:'.7rem',color:'var(--text-muted)',letterSpacing:1,marginTop:4 }}>{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#about .container>div{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  )
}
