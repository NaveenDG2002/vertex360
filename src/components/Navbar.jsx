import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";

const links = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Our Process", path: "/project-flow" }, { name: "Contact", path: "/contact" }];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return <header className="navbar">
    <div className="container nav-inner">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img src={logo} alt="Vertex 360 logo" />
        <span><span className="brand-name">VERTEX 360</span><span className="brand-sub">Architectural Visualization</span></span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map(link => <Link key={link.path} to={link.path} className={`nav-link ${location.pathname === link.path ? "active" : ""}`}>{link.name}</Link>)}
      </nav>
      <Link to="/contact" className="nav-cta">START A PROJECT <ArrowUpRight size={14} /></Link>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav">{links.map(link => <Link key={link.path} to={link.path} onClick={() => setOpen(false)}>{link.name}</Link>)}</nav>}
  </header>;
}
