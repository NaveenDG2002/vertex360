import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import projectFlow from "../data/projectFlow";
const reveal={initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:true},transition:{duration:.55}};
export default function ProjectFlow(){return <main>
 <section className="page-hero"><div className="container"><span className="eyebrow">Our process</span><motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}}>A clear process.<br/><span className="gold">A considered outcome.</span></motion.h1><p>From the first conversation to final delivery, each Vertex 360 project follows a structured and collaborative process shaped around the project brief.</p></div></section>
 <section className="section-pad"><div className="container"><motion.div className="section-heading" {...reveal}><div><span className="eyebrow">How we work</span><h2>Every stage moves<br/>the vision forward.</h2></div><p>We keep communication open throughout the process, making room for review and refinement as the work develops.</p></motion.div><div className="flow-list">{projectFlow.map((item,i)=><motion.article className="flow-row" key={item.step} {...reveal} transition={{duration:.5,delay:i*.05}}><div className="flow-number">{item.step}</div><div><h3>{item.title}</h3><p>{item.description}</p></div></motion.article>)}</div></div></section>
 <section className="cta-band"><div className="container cta-inner"><div><h2>Have a brief ready?</h2><p>Let’s discuss your requirements, timeline and the right approach for your project.</p></div><Link to="/contact" className="btn-dark">START A PROJECT <ArrowUpRight size={15} style={{display:"inline",verticalAlign:"middle"}}/></Link></div></section>
 </main>}
