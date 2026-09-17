import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-charcoal-900 text-silver-300 border-b border-gold-500/20">
  <Link to="/" className="hover:text-gold-400 transition">Home</Link>
  <Link to="/about" className="hover:text-gold-400 transition">About</Link>
  <Link to="/contact" className="hover:text-gold-400 transition">Contact</Link>
  <Link to="/project-flow" className="hover:text-gold-400 transition">Project Flow</Link>
</nav>
  );
}
export default Navbar;