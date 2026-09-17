import { motion } from "framer-motion";
import BlueprintBackground from "../components/BlueprintBackground";
import team from "../data/team";
import TeamCard from "../components/TeamCard";

function About() {
  return (
    <div className="bg-charcoal-900 text-white">
      {/* HERO / INTRO SECTION */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <BlueprintBackground />

        <motion.span
          className="text-sm uppercase tracking-widest text-gold-400 relative z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.span>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mt-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The People Behind Vertex 360
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-silver-300 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Vertex 360 was built on a simple idea — construction companies
          deserve architectural partners who combine technical precision
          with genuine craftsmanship. Since 2026, our team has been turning
          blueprints into immersive 3D models, detailed drawings, and
          physical scale builds.
        </motion.p>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
          <p className="text-silver-400 mt-3 max-w-xl mx-auto">
            The people driving Vertex 360's vision, execution, and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default About;