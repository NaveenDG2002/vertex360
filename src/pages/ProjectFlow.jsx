import { motion } from "framer-motion";
import BlueprintBackground from "../components/BlueprintBackground";
import projectFlow from "../data/projectFlow";
import FlowStep from "../components/FlowStep";

function ProjectFlow() {
  return (
    <div className="bg-charcoal-900 text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[55vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <BlueprintBackground />

        <motion.span
          className="text-sm uppercase tracking-widest text-gold-400 relative z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Process
        </motion.span>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mt-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          How We Bring Projects to Life
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-silver-300 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From first consultation to final delivery, every Vertex 360
          project follows a clear, structured process built for accuracy
          and collaboration.
        </motion.p>
      </section>

      {/* FLOW TIMELINE SECTION */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        {projectFlow.map((item, i) => (
          <FlowStep
            key={item.step}
            item={item}
            index={i}
            isLast={i === projectFlow.length - 1}
          />
        ))}
      </section>
    </div>
  );
}
export default ProjectFlow;