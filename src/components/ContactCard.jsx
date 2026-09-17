import { motion } from "framer-motion";

function ContactCard({ icon, label, value, href, index }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 bg-charcoal-800 border border-silver-400/10 rounded-2xl p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
    >
      <div className="w-12 h-12 shrink-0 rounded-full bg-charcoal-900 border-2 border-gold-400/40 flex items-center justify-center text-gold-400">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-silver-500">
          {label}
        </p>
        <p className="text-white font-medium mt-1">{value}</p>
      </div>

      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold-400/40 transition pointer-events-none" />
    </motion.a>
  );
}
export default ContactCard;