import { useState } from "react";
import { NavLink } from "react-router-dom";
import resume from "../assets/resume.pdf";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-300 hover:text-blue-400 transition";

  return (
    <nav className="fixed top-0 h-25 left-0 w-full bg-gray-950 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-2xl">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-500"></h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/education" className={linkClass}>Education</NavLink>
          {/* <NavLink to="/contact" className={linkClass}>Contact</NavLink> */}

          <a
            href={resume}
            download
            className="ml-4 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 space-y-4">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/skills" className={linkClass}>
            Skills
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/education" className={linkClass}>
            Education
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <a
            href="/resume.pdf"
            download
            className="block text-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
