import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectFlow from "./pages/ProjectFlow";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
function AppLayout() {
  return <><ScrollToTop/><Navbar/><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/project-flow" element={<ProjectFlow/>}/>
  </Routes><Footer/></>;
}
export default function App() { return <BrowserRouter><div className="site-shell"><AppLayout/></div></BrowserRouter>; }
