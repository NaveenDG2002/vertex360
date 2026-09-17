import { motion } from "framer-motion";

function FlowStep({ item, index, isLast }) {
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Number + connecting line */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 shrink-0 rounded-full bg-charcoal-800 border-2 border-gold-400/50 flex items-center justify-center text-gold-400 font-bold">
          {item.step}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-gold-400/40 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="pb-14">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-silver-400 mt-2 max-w-xl leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
export default FlowStep;