import { motion } from "framer-motion";
import BlueprintBackground from "../components/BlueprintBackground";
import clients from "../data/clients";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="bg-gray-950 text-white">
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
          className="mt-6 max-w-2xl text-lg text-gray-300 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We bring architectural visions to life — delivering precise 3D
          modeling, detailed plan drawings, and physical scale models for
          construction companies who demand accuracy and craft.
        </motion.p>

        <motion.span
          className="mt-6 inline-block px-4 py-1 border border-blue-400/40 rounded-full text-sm text-blue-300 relative z-10"
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
          className="text-center text-sm uppercase tracking-widest text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by construction companies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <motion.img
              key={client.name}
              src={client.logo}
              alt={client.name}
              className="mx-auto h-12 object-contain grayscale hover:grayscale-0 transition"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;