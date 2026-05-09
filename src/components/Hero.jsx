import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function ParticleField() {
  const ref = useRef()
  const count = 4000
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i*3]=(Math.random()-.5)*20; pos[i*3+1]=(Math.random()-.5)*20; pos[i*3+2]=(Math.random()-.5)*20
    }
    return pos
  }, [])
  useFrame((_,delta) => { if(ref.current){ ref.current.rotation.x-=delta*.04; ref.current.rotation.y-=delta*.06 }})
  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color="#00d4ff" size={0.03} sizeAttenuation depthWrite={false} opacity={0.7}/>
    </Points>
  )
}

function FloatingGeometry() {
  const meshRef = useRef(), wireRef = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if(meshRef.current){ meshRef.current.rotation.x=t*.2; meshRef.current.rotation.y=t*.3; meshRef.current.position.y=Math.sin(t*.5)*.3 }
    if(wireRef.current){ wireRef.current.rotation.x=-t*.15; wireRef.current.rotation.y=t*.25; wireRef.current.position.y=Math.sin(t*.5)*.3 }
  })
  return (
    <group position={[3.5,0,-2]}>
      <mesh ref={meshRef}><icosahedronGeometry args={[1.4,1]}/><meshStandardMaterial color="#00d4ff" emissive="#001a33" roughness={0.1} metalness={0.9} transparent opacity={0.15}/></mesh>
      <mesh ref={wireRef}><icosahedronGeometry args={[1.45,1]}/><meshStandardMaterial color="#7b2fff" wireframe transparent opacity={0.6}/></mesh>
    </group>
  )
}

function FloatingTorus() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if(ref.current){ ref.current.rotation.x=t*.3; ref.current.rotation.z=t*.2; ref.current.position.y=-.5+Math.cos(t*.4)*.4 }
  })
  return <mesh ref={ref} position={[-4,1,-3]}><torusGeometry args={[.9,.25,16,50]}/><meshStandardMaterial color="#ff2d6b" wireframe transparent opacity={0.5}/></mesh>
}

export default function Hero() {
  return (
    <section id="hero" style={{ height:'100vh',position:'relative',display:'flex',alignItems:'center',overflow:'hidden' }}>
      <div style={{ position:'absolute',inset:0,zIndex:0 }}>
        <Canvas camera={{ position:[0,0,6],fov:60 }} gl={{ antialias:true,alpha:true }}>
          <ambientLight intensity={0.5}/>
          <pointLight position={[10,10,10]} intensity={1} color="#00d4ff"/>
          <pointLight position={[-10,-10,-10]} intensity={0.5} color="#7b2fff"/>
          <ParticleField/><FloatingGeometry/><FloatingTorus/>
        </Canvas>
      </div>
      <div style={{ position:'absolute',inset:0,background:'radial-gradient(ellipse at 20% 50%,rgba(0,212,255,.06),transparent 60%),radial-gradient(ellipse at 80% 50%,rgba(123,47,255,.06),transparent 60%)',zIndex:1 }}/>
      <div style={{ position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,212,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,.03) 1px,transparent 1px)',backgroundSize:'60px 60px',zIndex:1 }}/>

      <div className="container" style={{ position:'relative',zIndex:2 }}>
        <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.2}}>
          <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:.6,delay:.4}}
            style={{ fontFamily:'var(--font-mono)',fontSize:'.85rem',color:'var(--accent)',letterSpacing:4,textTransform:'uppercase',marginBottom:20,display:'flex',alignItems:'center',gap:12 }}>
            <span style={{ display:'inline-block',width:40,height:1,background:'var(--accent)' }}/>
            AI Engineer & LLM Developer
          </motion.div>

          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.5}}
            style={{ fontFamily:'var(--font-display)',fontSize:'clamp(3rem,9vw,7.5rem)',fontWeight:900,lineHeight:.95,marginBottom:24,letterSpacing:-1 }}>
            <span style={{ background:'linear-gradient(135deg,#e8f4ff 30%,var(--accent) 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>SHASHANK</span>
            <br/>
            <span style={{ background:'linear-gradient(135deg,var(--accent2),var(--accent3))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>GOYAL</span>
          </motion.h1>

          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.7}}
            style={{ fontSize:'clamp(1rem,2vw,1.2rem)',color:'var(--text-muted)',maxWidth:520,lineHeight:1.7,marginBottom:40 }}>
            Building intelligent systems with LLMs, LangChain & FastAPI. Turning complex AI into real-world products.
          </motion.p>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.9}}
            style={{ display:'flex',gap:16,flexWrap:'wrap' }}>
            <Link to="projects" smooth duration={800} offset={-80}>
              <button className="btn btn-primary">View Projects
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </Link>
            <a href="mailto:shashankgoyal902@gmail.com" className="btn btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.2}}
            style={{ display:'flex',gap:20,marginTop:48 }}>
            {[
              {label:'GitHub',href:'https://github.com/shashankgoyl'},
              {label:'LinkedIn',href:'https://linkedin.com/in/shashank-goyal-006593203'},
              {label:'Portfolio',href:'https://shashankgoyal902.netlify.app/'},
            ].map(({label,href})=>(
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ fontFamily:'var(--font-mono)',fontSize:'.75rem',color:'var(--text-muted)',textDecoration:'none',letterSpacing:1,transition:'color .3s',cursor:'none' }}
                onMouseEnter={e=>e.currentTarget.style.color='var(--accent)'}
                onMouseLeave={e=>e.currentTarget.style.color='var(--text-muted)'}>{label}</a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}
        style={{ position:'absolute',bottom:40,left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:8,zIndex:2 }}>
        <span style={{ fontFamily:'var(--font-mono)',fontSize:'.65rem',color:'var(--text-muted)',letterSpacing:3,textTransform:'uppercase' }}>Scroll</span>
        <motion.div animate={{y:[0,8,0]}} transition={{repeat:Infinity,duration:1.5}}
          style={{ width:1,height:40,background:'linear-gradient(to bottom,var(--accent),transparent)' }}/>
      </motion.div>
    </section>
  )
}
