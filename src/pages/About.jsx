import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Box,
  Ruler,
  Layers,
  Target,
  Eye,
  ShieldCheck,
  Clock,
  MessageSquare,
  Gem,
} from "lucide-react";
import BlueprintBackground from "../components/BlueprintBackground";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const stats = [
  { value: "2026", label: "Established" },
  { value: "3", label: "Core Services" },
  { value: "360°", label: "Visualization Approach" },
];

const services = [
  {
    icon: Box,
    title: "3D Modeling",
    text: "Accurate exterior and interior 3D visualizations that let clients see a design in full detail before construction begins.",
  },
  {
    icon: Ruler,
    title: "Plan Drawing",
    text: "Clear, detailed architectural floor plans and layouts, drafted with precision and ready for construction teams to use.",
  },
  {
    icon: Layers,
    title: "Model Making",
    text: "Hand-crafted physical scale models built for presentations, client approvals, and investor pitches.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Accuracy",
    text: "Every drawing and model is checked against the project brief.",
  },
  {
    icon: Gem,
    title: "Craftsmanship",
    text: "Careful detail in every render, plan, and scale model we deliver.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    text: "Clear timelines so your project schedule stays on track.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    text: "Regular updates and open feedback at every stage of the work.",
  },
];

function SectionHeading({ label, title, text }) {
  return (
    <motion.div
      className="text-center mb-14"
      {...fadeUp}
      transition={{ duration: 0.6 }}
    >
      <span className="text-sm uppercase tracking-widest text-gold-400">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-3">{title}</h2>
      {text && (
        <p className="text-silver-400 mt-3 max-w-xl mx-auto">{text}</p>
      )}
    </motion.div>
  );
}

function About() {
  return (
    <div className="bg-charcoal-900 text-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
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
          className="text-4xl md:text-6xl font-bold mt-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Vertex 360
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-silver-300 leading-relaxed relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Vertex 360 was built on a simple idea: construction companies
          deserve architectural partners who combine technical precision
          with genuine craftsmanship. Since 2026, we have been turning
          blueprints into immersive 3D models, detailed plan drawings, and
          physical scale models.
        </motion.p>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-silver-400/10 bg-charcoal-800/50">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-silver-400/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="py-10 px-4 text-center"
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-gold-400">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-silver-400 mt-2 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="text-sm uppercase tracking-widest text-gold-400">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
              Designing with confidence, before construction begins
            </h2>
          </motion.div>

          <motion.div
            className="space-y-5 text-silver-300 leading-relaxed"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p>
              Vertex 360 began with a clear goal: to give construction
              companies a dependable architectural partner for the work that
              happens before the first brick is laid.
            </p>
            <p>
              We combine detailed plan drawings, accurate 3D models, and
              hand-built scale models so clients can see, review, and approve
              a design with confidence, long before construction starts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <SectionHeading
          label="What We Do"
          title="Three services, one standard of quality"
          text="Everything we deliver is built to help construction teams plan, present, and build with clarity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group relative rounded-2xl bg-charcoal-800 border border-silver-400/10 p-8"
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-12 h-12 rounded-full bg-charcoal-900 border-2 border-gold-400/40 flex items-center justify-center text-gold-400 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-silver-400 mt-3 leading-relaxed">
                  {service.text}
                </p>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold-400/40 transition pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="rounded-2xl bg-charcoal-800 border border-silver-400/10 p-8"
            {...fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Target className="w-8 h-8 text-gold-400" />
            <h3 className="text-2xl font-semibold mt-5">Our Mission</h3>
            <p className="text-silver-400 mt-3 leading-relaxed">
              To deliver precise, presentation-ready architectural
              visualizations that help construction companies plan,
              communicate, and build with confidence.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-charcoal-800 border border-silver-400/10 p-8"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Eye className="w-8 h-8 text-gold-400" />
            <h3 className="text-2xl font-semibold mt-5">Our Vision</h3>
            <p className="text-silver-400 mt-3 leading-relaxed">
              To become a trusted name in architectural visualization, known
              for accuracy, craftsmanship, and long-term partnerships with
              our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <SectionHeading
          label="Why Choose Us"
          title="What you can expect from us"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="text-center p-6"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-charcoal-800 border border-gold-400/30 flex items-center justify-center text-gold-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mt-5">{value.title}</h3>
                <p className="text-sm text-silver-400 mt-2 leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center rounded-3xl bg-charcoal-800 border border-gold-400/20 px-8 py-16"
          {...fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Have a project in mind?
          </h2>
          <p className="text-silver-300 mt-4 max-w-xl mx-auto">
            Tell us about your plans and we'll help you turn them into
            drawings, models, and visuals you can build from.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="bg-gold-500 text-charcoal-900 font-semibold rounded-lg px-6 py-3 hover:bg-gold-400 transition"
            >
              Get in Touch
            </Link>
            <Link
              to="/project-flow"
              className="border border-silver-400/30 text-silver-300 rounded-lg px-6 py-3 hover:border-gold-400/60 hover:text-gold-400 transition"
            >
              See Our Process
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
export default About;