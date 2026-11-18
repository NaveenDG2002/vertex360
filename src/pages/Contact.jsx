
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import contactInfo from "../data/contactInfo";

// Custom LinkedIn Brand Icon
function LinkedInIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Contact() {

  // Prepare project enquiry
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const name = data.get("name");
    const email = data.get("email");
    const service = data.get("service");
    const message = data.get("message");

    const subject = encodeURIComponent(
      `Project enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project type: ${service}\n\n` +
      `Project Details:\n${message}`
    );

    window.location.href =
      `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main>

      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">

          <span className="eyebrow">
            Get in touch
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Let’s talk about
            <br />
            <span className="gold">
              what you’re building.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Have a project in mind or need help bringing a design
            to life? Tell us a little about it and we’ll be happy
            to start a conversation.
          </motion.p>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section-pad">
        <div className="container contact-layout">

          {/* CONTACT INFORMATION */}
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="eyebrow">
              Contact Vertex 360
            </span>

            <h2>
              Start with a conversation.
            </h2>

            <p>
              Reach out through your preferred channel or send us
              a project enquiry using the form. We look forward
              to hearing about your plans.
            </p>

            {/* WHATSAPP */}
            <a
              className="contact-link"
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">
                <MessageCircle size={19} />
              </span>

              <span>
                <small>WhatsApp</small>

                <strong>
                  Chat with our team
                  <ArrowUpRight
                    size={13}
                    style={{
                      display: "inline",
                      marginLeft: 4
                    }}
                  />
                </strong>
              </span>
            </a>

            {/* EMAIL */}
            <a
              className="contact-link"
              href={`mailto:${contactInfo.email}`}
            >
              <span className="contact-icon">
                <Mail size={19} />
              </span>

              <span>
                <small>Email</small>

                <strong>
                  {contactInfo.email}
                </strong>
              </span>
            </a>

            {/* LINKEDIN */}
            <a
              className="contact-link"
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">
                <LinkedInIcon size={19} />
              </span>

              <span>
                <small>LinkedIn</small>

                <strong>
                  Connect with Vertex 360
                  <ArrowUpRight
                    size={13}
                    style={{
                      display: "inline",
                      marginLeft: 4
                    }}
                  />
                </strong>
              </span>
            </a>

          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h3>
              Tell us about your project
            </h3>

            <p>
              Complete the details below and your email app
              will open with the enquiry prepared.
            </p>

            <div className="form-grid">

              {/* NAME */}
              <div className="form-field">
                <label htmlFor="name">
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  autoComplete="name"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="form-field">
                <label htmlFor="email">
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              {/* SERVICE */}
              <div className="form-field full">
                <label htmlFor="service">
                  What do you need?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="3D Modelling">
                    3D Modelling
                  </option>

                  <option value="Plan Drawing">
                    Plan Drawing
                  </option>

                  <option value="Physical Scale Model">
                    Physical Scale Model
                  </option>

                  <option value="Multiple services / Not sure yet">
                    Multiple services / Not sure yet
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="form-field full">
                <label htmlFor="message">
                  Project details
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project, requirements and timeline..."
                  rows={5}
                  required
                />
              </div>

            </div>

            {/* SUBMIT BUTTON */}
            <button
              className="btn-primary form-submit"
              type="submit"
            >
              PREPARE ENQUIRY
              <ArrowUpRight size={15} />
            </button>

          </motion.form>

        </div>
      </section>

    </main>
  );
}
