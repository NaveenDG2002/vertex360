import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-charcoal-800 border border-silver-400/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="p-5">
        <span className="text-xs uppercase tracking-wide text-gold-400">
          {project.category}
        </span>
        <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
        <p className="text-sm text-silver-400 mt-2">{project.description}</p>
      </div>

      {/* Hover glow border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold-400/40 transition pointer-events-none" />
    </motion.div>
  );
}
export default ProjectCard;