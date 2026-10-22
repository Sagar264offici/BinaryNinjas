import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Binary, Braces, Cpu, Github, Menu, MoveUpRight, Sparkles, X, Zap } from 'lucide-react';

const members = [
  { id:'01', name:'ARYAN', role:'TEAM LEAD', specialty:'Strategy · Leadership', symbol:'A', className:'aryan', tagline:'The one who sees the whole board.' },
  { id:'02', name:'SAGAR', role:'TECH LEAD', specialty:'Full-Stack · AI', symbol:'S', className:'sagar', tagline:'Turning ambitious ideas into working systems.' },
  { id:'03', name:'AYUSHI', role:'DESIGN & EXPERIENCE', specialty:'UI · Product Thinking', symbol:'A', className:'ayushi', tagline:'Making complex things feel effortless.' },
  { id:'04', name:'ABHISHEK', role:'BUILD & SUPPORT', specialty:'Execution · Team Support', symbol:'B', className:'abhishek', tagline:'Making sure the details land.' },
];
const reveal = { hidden:{opacity:0,y:28}, visible:{opacity:1,y:0,transition:{duration:.7,ease:[.22,1,.36,1]}} };

function Poster({member,index}) {
  return <motion.article className={'poster '+member.className} variants={reveal} whileHover={{y:-10,rotate:index%2===0?-.5:.5}} transition={{type:'spring',stiffness:240,damping:20}}>
    <div className="poster-top"><span>BN / PERSONNEL FILE</span><span>NO. {member.id}</span></div>
    <div className="poster-art">
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
      <div className="art-grid"/>
      <span className="art-index">{member.id}</span>
      <div className="portrait-monogram">{member.symbol}<span className="crosshair">+</span></div>
      <span className="vertical-code">BINARY / NINJAS / 2026</span>
      <div className="poster-stamp">FIELD<br/>READY</div>
    </div>
    <div className="poster-copy">
      <div className="poster-role">{member.role}</div>
      <h3>{member.name}</h3>
      <p>{member.tagline}</p>
      <div className="poster-foot"><span>{member.specialty}</span><ArrowUpRight size={18}/></div>
    </div>
  </motion.article>;
}

export default function App(){
  const reduceMotion = useReducedMotion();
  const [menuOpen,setMenuOpen] = useState(false);
  const [active,setActive] = useState(null);
  const go = id => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({behavior:reduceMotion?'auto':'smooth'}); };
  return <div className="site-shell">
    <div className="noise" aria-hidden="true"/>
    <header className="nav">
      <a className="brand" href="#top" aria-label="Binary Ninjas home"><span className="brand-mark"><Binary size={23}/></span><span>BINARY<span className="brand-light">NINJAS</span><small>SAARTHI’26 / TEAM 04</small></span></a>
      <nav className={menuOpen?'nav-links open':'nav-links'}>
        <button onClick={()=>go('team')}>THE SQUAD <span>01</span></button>
        <button onClick={()=>go('mission')}>THE MISSION <span>02</span></button>
        <button onClick={()=>go('footer')}>CONNECT <span>03</span></button>
      </nav>
      <button className="nav-cta" onClick={()=>go('team')}>MEET THE TEAM <ArrowUpRight size={16}/></button>
      <button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-left">
          <motion.div className="eyebrow" initial={{opacity:0,x:-18}} animate={{opacity:1,x:0}} transition={{duration:.7}}><span className="live-dot"/> NATIONAL LEVEL HACKATHON <span className="eyebrow-line"/></motion.div>
          <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.22,1,.36,1]}}>WE THINK.<br/>WE <span className="outline-word">BUILD.</span><br/><span className="accent-word">WE BREAK</span><span className="period">.</span></motion.h1>
          <motion.p className="hero-description" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5,duration:.7}}>Four minds. One mission. Zero interest in ordinary solutions. We’re <strong>Binary Ninjas</strong> — building what comes next.</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.65}}><button className="button-primary" onClick={()=>go('team')}>MEET YOUR MAKERS <ArrowDownRight size={18}/></button><span className="micro-copy">INDEPENDENT THINKERS<br/>UNITED BY CODE.</span></motion.div>
        </div>
        <div className="hero-right">
          <div className="hero-rings"><div className="ring ring-a"/><div className="ring ring-b"/><div className="ring ring-c"/><div className="ring-core"><Binary size={72} strokeWidth={1.1}/><span>BN</span></div><span className="ring-label label-top">LOGIC / 001</span><span className="ring-label label-bottom">CREATIVITY / ∞</span><span className="ring-label label-side">EST. 2026</span><div className="orbit-node node-one"/><div className="orbit-node node-two"/><div className="orbit-node node-three"/></div>
          <div className="hero-index"><span>FIG. 001</span><span>THE COLLECTIVE</span><span>30° 00' / 78° 15'</span></div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE <ArrowDownRight size={15}/></span><span className="hero-bottom-center">THINK SHARP. SHIP SMART.</span><span>INDIA / 2026</span></div>
      </section>

      <section className="ticker" aria-label="Team motto"><div className="ticker-track">{Array.from({length:6},(_,i)=><span key={i}>BUILT DIFFERENT <i>✳</i> THINK IN SYSTEMS <i>✳</i> MAKE IT MATTER <i>✳</i></span>)}</div></section>

      <section className="team section-pad" id="team">
        <div className="section-heading"><div><div className="eyebrow"><span className="section-number">01 /</span> THE PEOPLE BEHIND THE PIXELS</div><h2>MEET THE <span className="accent-word">SQUAD.</span></h2></div><p>Different strengths. Shared obsession.<br/>One team that gets things done.</p></div>
        <motion.div className="poster-grid" initial="hidden" whileInView="visible" viewport={{once:true,amount:.12}} variants={{visible:{transition:{staggerChildren:.12}}}}>
          {members.map((member,i)=><button className="poster-button" key={member.id} onClick={()=>setActive(member)} aria-label={'More about '+member.name}><Poster member={member} index={i}/></button>)}
        </motion.div>
        <div className="team-note"><span><Sparkles size={15}/> SMALL TEAM. BIG ENERGY.</span><span>4 MEMBERS <i>·</i> ONE DIRECTION <i>·</i> NO SHORTCUTS</span></div>
      </section>

      <section className="mission section-pad" id="mission">
        <div className="mission-visual"><div className="mission-lines"/><div className="mission-big">01<span>→</span><br/>∞</div><div className="mission-tag">IDEA → IMPACT</div><div className="mission-corner">SYSTEM STATUS<br/><span>READY TO BUILD</span></div></div>
        <div className="mission-copy"><div className="eyebrow"><span className="section-number">02 /</span> WHY WE SHOW UP</div><h2>NOT HERE TO<br/>JUST <span className="accent-word">PARTICIPATE.</span></h2><p>Hackathons are where curiosity meets a deadline. We bring product thinking, engineering, design, and relentless iteration to turn a real problem into something people can actually use.</p><div className="principles"><div><span>01</span><div><strong>QUESTION EVERYTHING</strong><p>Start with the problem, not the hype.</p></div><Braces size={20}/></div><div><span>02</span><div><strong>BUILD WITH INTENT</strong><p>Useful beats complicated. Every time.</p></div><Cpu size={20}/></div><div><span>03</span><div><strong>SHIP AS A TEAM</strong><p>Different skills. One shared outcome.</p></div><Zap size={20}/></div></div></div>
      </section>

      <section className="closing section-pad"><div className="closing-top"><span className="eyebrow"><span className="live-dot"/> CURRENTLY IN BUILD MODE</span><span className="closing-coordinates">BN / 26 — 001</span></div><h2>THE NEXT BIG<br/>THING STARTS<br/><span className="accent-word">WITH A QUESTION.</span></h2><button className="closing-button" onClick={()=>go('team')}>GET TO KNOW THE NINJAS <MoveUpRight size={18}/></button><div className="closing-decoration">?</div></section>
    </main>

    <footer className="footer" id="footer"><a className="brand" href="#top"><span className="brand-mark"><Binary size={23}/></span><span>BINARY<span className="brand-light">NINJAS</span><small>BUILT ON CURIOSITY.</small></span></a><div className="footer-center">MADE OF IDEAS. POWERED BY PEOPLE.</div><a className="footer-link" href="https://github.com/Sagar264offici/BinaryNinjas" target="_blank" rel="noreferrer">GITHUB <Github size={15}/></a><span className="copyright">© 2026 / BN</span></footer>

    {active && <div className="modal-backdrop" onClick={()=>setActive(null)}><motion.div className={'member-modal '+active.className} initial={{opacity:0,y:18,scale:.98}} animate={{opacity:1,y:0,scale:1}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setActive(null)} aria-label="Close"><X/></button><span className="eyebrow">PERSONNEL FILE / {active.id}</span><div className="modal-initial">{active.symbol}</div><span className="poster-role">{active.role}</span><h2>{active.name}</h2><p>{active.tagline}</p><div className="modal-specialty">{active.specialty}</div><span className="modal-foot">BINARY NINJAS / SAARTHI’26</span></motion.div></div>}
  </div>;
}