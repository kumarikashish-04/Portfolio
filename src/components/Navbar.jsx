import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import resume from "../assets/resume.pdf";
import { useTheme } from "../context/ThemeContext";
import ContactModal from "./ContactModal";

const NAV_LINKS = [
  { to: "/",          label: "Home",      icon: "🏠" },
  { to: "/skills",    label: "Skills",    icon: "⚡" },
  { to: "/projects",  label: "Projects",  icon: "🚀" },
  { to: "/education", label: "Education", icon: "🎓" },
  { to: "/certificates", label: "Certificates", icon: "📜" },
  { to: "#contact",   label: "Contact",      icon: "✉️" },
];

/* ── Theme Toggle Button ───────────────────────────────── */
function ThemeToggleBtn({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

/* ── Navbar ────────────────────────────────────────────── */
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  /* nav link classes – uses CSS variables so they flip with the theme */
  const activeCls   = "nav-link-active";
  const inactiveCls = "nav-link-idle";
  const linkClass   = ({ isActive }) => (isActive ? activeCls : inactiveCls);

  return (
    <>
      {/* ── NAVBAR BAR ──────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background:    scrolled ? "var(--nav-bg-scrolled)"   : "var(--nav-bg-base)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom:  scrolled
            ? "1px solid var(--nav-border-scroll)"
            : "1px solid var(--nav-border)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3 group" onClick={close}>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
              style={{
                background: "var(--nav-logo-bg)",
                boxShadow: `0 4px 16px var(--nav-logo-shadow)`,
              }}
            >
              K
            </div>
            <div className="hidden sm:block">
              <div
                className="text-base font-semibold leading-tight"
                style={{ fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)", color: "var(--nav-name-color)" }}
              >
                Kashish
              </div>
              <div style={{ fontSize: "0.73rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Software Engineer
              </div>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              to === "#contact" ? (
                <button 
                  key={to} 
                  onClick={() => setShowContact(true)}
                  className="nav-link-idle hover:text-blue-500 transition-colors"
                  style={{ fontSize: "0.87rem", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}
                >
                  {label}
                </button>
              ) : (
                <NavLink key={to} to={to} className={linkClass}>
                  <span style={{ fontSize: "0.87rem", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                    {label}
                  </span>
                </NavLink>
              )
            ))}
          </div>

          {/* DESKTOP RIGHT: resume */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggleBtn theme={theme} toggleTheme={toggleTheme} />
            <a
              href={resume}
              download
              className="btn-primary"
              style={{ padding: "0.5rem 1.15rem", borderRadius: "10px", fontSize: "0.84rem" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </div>

          {/* MOBILE: hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggleBtn theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-all duration-200"
              style={{
                background: open ? "var(--glass-bg)" : "transparent",
                border: "1px solid var(--border)",
              }}
              aria-label="Toggle menu"
            >
              <span
                className="block h-0.5 w-5 rounded-full transition-all duration-300"
                style={{
                  background: "var(--nav-link-active, #c8854a)",
                  transform: open ? "rotate(45deg) translate(3px, 4px)" : "none",
                }}
              />
              <span
                className="block h-0.5 w-5 rounded-full transition-all duration-300"
                style={{
                  background: "var(--nav-link-active, #c8854a)",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="block h-0.5 w-5 rounded-full transition-all duration-300"
                style={{
                  background: "var(--nav-link-active, #c8854a)",
                  transform: open ? "rotate(-45deg) translate(3px, -4px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ──────────────────────────────── */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 z-40"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
            onClick={close}
          />

          {/* Sheet */}
          <div
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl"
            style={{
              background:     "var(--bg-surface)",
              backdropFilter: "blur(24px)",
              border:         "1px solid var(--border)",
              boxShadow:      "0 -16px 48px rgba(0,0,0,0.3)",
            }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-4 pb-2">
              <div
                className="w-10 h-1 rounded-full"
                style={{ background: "var(--border-hover)" }}
              />
            </div>

            <div className="px-5 pt-2 pb-8">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Navigation
              </p>

              {/* Nav links */}
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map(({ to, label, icon }) => (
                  to === "#contact" ? (
                    <button
                      key={to}
                      onClick={() => { setShowContact(true); close(); }}
                      className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 hover:bg-[var(--glass-bg)]"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: "var(--glass-bg)", border: "1px solid var(--border)" }}
                      >
                        {icon}
                      </div>
                      <span
                        className="text-base font-medium"
                        style={{ color: "var(--nav-link-active)", fontFamily: "'Inter', sans-serif" }}
                      >
                        {label}
                      </span>
                    </button>
                  ) : (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={close}
                      className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200"
                      style={({ isActive }) => ({
                        background:  isActive ? "var(--glass-bg)"     : "transparent",
                        border:      isActive ? "1px solid var(--glass-border)" : "1px solid transparent",
                      })}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: "var(--glass-bg)", border: "1px solid var(--border)" }}
                      >
                        {icon}
                      </div>
                      <span
                        className="text-base font-medium"
                        style={{ color: "var(--nav-link-active)", fontFamily: "'Inter', sans-serif" }}
                      >
                        {label}
                      </span>
                      <svg className="ml-auto" width="15" height="15" viewBox="0 0 24 24"
                        fill="none" stroke="var(--text-muted)" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </NavLink>
                  )
                ))}
              </div>

              {/* Resume button */}
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <a
                  href={resume}
                  download
                  onClick={close}
                  className="btn-primary w-full"
                  style={{ padding: "0.9rem", borderRadius: "14px", fontSize: "0.95rem" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}