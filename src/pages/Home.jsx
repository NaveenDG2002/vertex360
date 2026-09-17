import { motion } from "framer-motion";
import BlueprintBackground from "../components/BlueprintBackground";
import clients from "../data/clients";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="bg-charcoal-900 text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <BlueprintBackground />

        <motion.img
          src={logo}
          alt="Vertex 360 Logo"
          className="w-24 h-24 mb-6 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="text-5xl md:text-6xl font-bold tracking-tight relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Vertex 360
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-silver-300 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We bring architectural visions to life — delivering precise 3D
          modeling, detailed plan drawings, and physical scale models for
          construction companies who demand accuracy and craft.
        </motion.p>

        <motion.span
          className="mt-6 inline-block px-4 py-1 border border-gold-400/40 rounded-full text-sm text-gold-300 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Est. 2026
        </motion.span>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-20 px-6">
        <motion.h2
          className="text-center text-sm uppercase tracking-widest text-silver-500 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by construction companies
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              className="flex flex-col items-center gap-3 w-40"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-white rounded-xl w-full h-20 flex items-center justify-center p-3 shadow-md">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-xs text-silver-500 text-center leading-tight">
                {client.service}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>
          <p className="text-silver-400 mt-3 max-w-xl mx-auto">
            A glimpse into the designs, drawings, and models we've delivered
            for our construction partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;