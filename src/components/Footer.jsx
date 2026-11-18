
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import logo from "../assets/logo.png";
import contactInfo from "../data/contactInfo";

// Custom LinkedIn Icon
function LinkedInIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* BRAND SECTION */}
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img src={logo} alt="Vertex 360 logo" />

              <span>
                <span className="brand-name">VERTEX 360</span>
                <span className="brand-sub">
                  Architectural Visualization
                </span>
              </span>
            </Link>

            <p>
              Turning architectural ideas into clear, compelling visual
              experiences through 3D modelling, detailed plan drawings
              and physical scale models.
            </p>

            <Link
              to="/contact"
              className="footer-mark"
              style={{ fontSize: 12, fontWeight: 700 }}
            >
              Discuss a project
              <ArrowUpRight
                size={14}
                style={{
                  display: "inline",
                  verticalAlign: "middle"
                }}
              />
            </Link>
          </div>

          {/* EXPLORE */}
          <div>
            <div className="footer-title">Explore</div>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Vertex 360</Link>
              <Link to="/project-flow">Our Process</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <div className="footer-title">Our Services</div>

            <div className="footer-links">
              <Link to="/about">3D Modelling</Link>
              <Link to="/about">Architectural Drawings</Link>
              <Link to="/about">Physical Scale Models</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <div className="footer-title">Get in touch</div>

            <div className="footer-links">

              <a
                href={`mailto:${contactInfo.email}`}
                className="footer-contact"
              >
                <Mail
                  size={14}
                  style={{
                    display: "inline",
                    marginRight: 9,
                    verticalAlign: "middle"
                  }}
                />
                {contactInfo.email}
              </a>

              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="footer-contact"
              >
                <Phone
                  size={14}
                  style={{
                    display: "inline",
                    marginRight: 9,
                    verticalAlign: "middle"
                  }}
                />
                WhatsApp us
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-contact"
              >
                <LinkedInIcon className="w-[14px] h-[14px] inline mr-[9px] align-middle" />
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Vertex 360. All rights reserved.
          </span>

          <span>
            Designed with precision.{" "}
            <span className="footer-mark">
              Built around your vision.
            </span>
          </span>
        </div>

      </div>
    </footer>
  );
}
