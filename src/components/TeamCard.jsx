import { motion } from "framer-motion";

function TeamCard({ member, index }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-charcoal-800 border border-silver-400/10 text-center p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-gold-400/40 mb-5">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <span className="text-xs uppercase tracking-wide text-gold-400">
        {member.role}
      </span>
      <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
      <p className="text-sm text-silver-400 mt-3 leading-relaxed">
        {member.bio}
      </p>

      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold-400/40 transition pointer-events-none" />
    </motion.div>
  );
}
export default TeamCard;