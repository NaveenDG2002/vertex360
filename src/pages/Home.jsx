import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import clients from "../data/clients";

const projects = [
 {title:"Contemporary Residence",category:"3D Visualisation",description:"Exterior visualisation exploring form, material and light.",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"},
 {title:"Modern Living Spaces",category:"Interior Visualisation",description:"A considered interior concept brought to life through detailed imagery.",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"},
 {title:"Architectural Detail",category:"Design Development",description:"Materiality and architectural detail presented with clarity.",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"},
 {title:"Residential Architecture",category:"3D Modelling",description:"A complete visual story to support design reviews and presentations.",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"}
];
const services = [
 ["01","3D Modelling","Accurate exterior and interior 3D visualisations that help clients understand a design before construction begins."],
 ["02","Plan Drawings","Clear, detailed architectural floor plans and layouts prepared to support project planning and communication."],
 ["03","Physical Scale Models","Carefully crafted physical models for presentations, client approvals and investor discussions."]
];
const reveal={initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.15},transition:{duration:.65}};
export default function Home(){
 return <main>
  <section className="hero-home"><div className="container"><motion.div className="hero-content" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
   <div className="hero-kicker">Architectural visualisation · Sri Lanka</div>
   <h1>See the vision.<br/><span>Shape the future.</span></h1>
   <p className="hero-lead">We transform architectural concepts into precise 3D visualisations, detailed plan drawings and physical scale models — helping construction teams communicate ideas with confidence.</p>
   <div className="hero-actions"><Link to="/contact" className="btn-primary">START A CONVERSATION <ArrowUpRight size={16}/></Link><Link to="/project-flow" className="btn-outline">EXPLORE OUR PROCESS <ArrowRight size={15}/></Link></div>
   <div className="hero-footnote"><div><strong>360°</strong>Visual thinking</div><div><strong>03</strong>Core services</div><div><strong>01</strong>Clear standard of craft</div></div>
  </motion.div></div></section>
  <section className="trust-strip"><div className="container trust-inner"><div className="trust-label">A partner in bringing ideas to life</div>{clients.map(c=><div className="client-logo" key={c.name}><img src={c.logo} alt={c.name}/></div>)}</div></section>
  <section className="section-pad"><div className="container">
   <motion.div className="section-heading" {...reveal}><div><span className="eyebrow">Selected work</span><h2>Ideas made visible.<br/>Details made meaningful.</h2></div><p>A glimpse into architectural visualisation, drawings and physical models created to help communicate a design with clarity.</p></motion.div>
   <div className="project-grid">{projects.map((p,i)=><motion.article className="project-item" key={p.title} {...reveal} transition={{duration:.65,delay:i*.08}}><img className="project-image" src={p.image} alt={p.title}/><div className="project-meta"><small>{p.category}</small><h3>{p.title}</h3><p>{p.description}</p></div></motion.article>)}</div>
  </div></section>
  <section className="section-pad" style={{background:"#151716"}}><div className="container">
   <motion.div className="section-heading" {...reveal}><div><span className="eyebrow">What we do</span><h2>From technical detail<br/>to tangible vision.</h2></div><p>Three complementary services. One consistent focus on precision, presentation and thoughtful collaboration.</p></motion.div>
   <div className="services-grid">{services.map(([n,t,d],i)=><motion.div className="service-item" key={n} {...reveal} transition={{duration:.6,delay:i*.1}}><span className="service-num">{n} / SERVICE</span><h3>{t}</h3><p>{d}</p></motion.div>)}</div>
  </div></section>
  <section className="cta-band"><div className="container cta-inner"><div><h2>Have a project taking shape?</h2><p>Share your brief with us. Let’s explore how we can help turn your ideas into clear, buildable visuals.</p></div><Link to="/contact" className="btn-dark">LET'S TALK <ArrowUpRight size={15} style={{display:"inline",verticalAlign:"middle"}}/></Link></div></section>
 </main>;
}
