import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import BlueprintBackground from "../components/BlueprintBackground";
import ContactCard from "../components/ContactCard";
import contactInfo from "../data/contactInfo";

// Inline WhatsApp icon (not in lucide-react)
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm0 1.67c2.16 0 4.19.84 5.72 2.37a8.07 8.07 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09a8.1 8.1 0 0 1-4.1-1.11l-.29-.17-3.14.82.84-3.06-.19-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.46 3.63-8.09 8.09-8.09h.03Zm-4.45 4.57c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.09.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.03Z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
    </svg>
  );
}

function Contact() {
  const contacts = [
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    value: "Chat with us",
    href: contactInfo.whatsapp,
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "Follow our page",
    href: contactInfo.linkedin,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
];

  return (
    <div className="bg-charcoal-900 text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <BlueprintBackground />

        <motion.span
          className="text-sm uppercase tracking-widest text-gold-400 relative z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.span>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mt-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's Build Something Together
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-silver-300 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Have a project in mind? Reach out through any of the channels
          below and our team will get back to you shortly.
        </motion.p>
      </section>

      {/* CONTACT CARDS SECTION */}
      <section className="py-16 px-6 max-w-3xl mx-auto grid gap-5">
        {contacts.map((c, i) => (
          <ContactCard
            key={c.label}
            icon={c.icon}
            label={c.label}
            value={c.value}
            href={c.href}
            index={i}
          />
        ))}
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-16 px-6 max-w-2xl mx-auto">
        <motion.div
          className="bg-charcoal-800 border border-silver-400/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
          </h2>

          <form
            action={`mailto:${contactInfo.email}`}
            method="post"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-charcoal-900 border border-silver-400/20 rounded-lg px-4 py-3 text-white placeholder-silver-500 focus:outline-none focus:border-gold-400/60 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-charcoal-900 border border-silver-400/20 rounded-lg px-4 py-3 text-white placeholder-silver-500 focus:outline-none focus:border-gold-400/60 transition"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="bg-charcoal-900 border border-silver-400/20 rounded-lg px-4 py-3 text-white placeholder-silver-500 focus:outline-none focus:border-gold-400/60 transition resize-none"
            />
            <motion.button
              type="submit"
              className="bg-gold-500 text-charcoal-900 font-semibold rounded-lg px-6 py-3 mt-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
export default Contact;