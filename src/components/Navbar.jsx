import { useState } from "react";
import { NavLink } from "react-router-dom";
import resume from "../assets/resume.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-300 hover:text-blue-400 transition";

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-500"></h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/education" className={linkClass}>Education</NavLink>
          <a
            href={resume}
            download
            className="ml-4 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium"
          >
            Resume
          </a>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-8 h-8 relative flex flex-col justify-center items-center">
            <span className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${open ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${open ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU - Full Width, Half Height with Transparent Background */}
      {open && (
        <>
          {/* Overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={handleCloseMenu}
          ></div>
          
          {/* Mobile Menu Container - Full width, half height from bottom */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-300 ease-in-out">
            
            {/* Semi-transparent frosted glass background */}
            <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50 rounded-t-2xl shadow-2xl max-h-[50vh] overflow-y-auto">
              
              {/* Close button at top */}
              <div className="flex justify-end p-4 pb-2">
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white text-xl p-2 rounded-full hover:bg-gray-800/50 transition"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              
              {/* Menu Title */}
              <div className="px-6 pb-2">
                <h3 className="text-lg font-medium text-gray-300 text-center">Navigation</h3>
              </div>
              
              {/* Navigation Links in a grid layout */}
              <div className="grid grid-cols-1 gap-1 px-4 pb-8">
                <NavLink 
                  onClick={handleCloseMenu} 
                  to="/" 
                  className="flex items-center px-4 py-4 rounded-xl hover:bg-gray-800/60 transition-all duration-200 group border border-transparent hover:border-gray-700/50"
                >
                  <div className="flex-1 flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center mr-3 bg-blue-500/20 rounded-lg">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <span className={`text-base font-medium ${linkClass({isActive: false})} group-hover:text-blue-400`}>Home</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </NavLink>
                
                <NavLink 
                  onClick={handleCloseMenu} 
                  to="/skills" 
                  className="flex items-center px-4 py-4 rounded-xl hover:bg-gray-800/60 transition-all duration-200 group border border-transparent hover:border-gray-700/50"
                >
                  <div className="flex-1 flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center mr-3 bg-green-500/20 rounded-lg">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <span className={`text-base font-medium ${linkClass({isActive: false})} group-hover:text-green-400`}>Skills</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </NavLink>
                
                <NavLink 
                  onClick={handleCloseMenu} 
                  to="/projects" 
                  className="flex items-center px-4 py-4 rounded-xl hover:bg-gray-800/60 transition-all duration-200 group border border-transparent hover:border-gray-700/50"
                >
                  <div className="flex-1 flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center mr-3 bg-purple-500/20 rounded-lg">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                    </div>
                    <span className={`text-base font-medium ${linkClass({isActive: false})} group-hover:text-purple-400`}>Projects</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </NavLink>
                
                <NavLink 
                  onClick={handleCloseMenu} 
                  to="/education" 
                  className="flex items-center px-4 py-4 rounded-xl hover:bg-gray-800/60 transition-all duration-200 group border border-transparent hover:border-gray-700/50"
                >
                  <div className="flex-1 flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center mr-3 bg-yellow-500/20 rounded-lg">
                      <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      </svg>
                    </div>
                    <span className={`text-base font-medium ${linkClass({isActive: false})} group-hover:text-yellow-400`}>Education</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </NavLink>
                
                {/* Resume Button - Full width at bottom */}
                <div className="pt-2 mt-2">
                  <a
                    href={resume}
                    download
                    onClick={handleCloseMenu}
                    className="flex items-center justify-center px-4 py-4 rounded-xl bg-gradient-to-r from-blue-600/90 to-blue-700/90 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-white font-medium shadow-lg hover:shadow-blue-500/30 border border-blue-500/30"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
              
              {/* Drag handle indicator (optional) */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-1 bg-gray-600/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}