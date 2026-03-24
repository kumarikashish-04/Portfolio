import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

const roles = [
  "Full Stack Developer",
  "ML Enthusiast",
  "Backend Developer",
  "Data Analyst",
];

/* ── Tech Stack Icons ──────────────────────────────────────── */
const techStack = [
  {
    name: "React",
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 100 100" width="36" height="36">
        <circle cx="50" cy="50" r="9" fill="#61DAFB" />
        <ellipse cx="50" cy="50" rx="46" ry="18" fill="none" stroke="#61DAFB" strokeWidth="4" />
        <ellipse cx="50" cy="50" rx="46" ry="18" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="46" ry="18" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#68A063",
    icon: (
      <svg viewBox="0 0 100 100" width="36" height="36">
        <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" fill="none" stroke="#68A063" strokeWidth="5" />
        <text x="50" y="58" textAnchor="middle" fill="#68A063" fontSize="20" fontWeight="bold" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#F89820",
    icon: (
      <svg viewBox="0 0 100 100" width="36" height="36">
        <rect x="10" y="10" width="80" height="80" rx="12" fill="none" stroke="#F89820" strokeWidth="5" />
        <text x="50" y="62" textAnchor="middle" fill="#F89820" fontSize="28" fontWeight="bold" fontFamily="monospace">J</text>
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#FFD43B",
    icon: (
      <svg viewBox="0 0 100 100" width="36" height="36">
        <path d="M50 8 C28 8 24 20 24 30 L24 42 L52 42 L52 46 L18 46 C8 46 8 62 8 62 C8 62 8 92 30 92 L38 92 L38 80 C38 70 46 64 56 64 L68 64 C78 64 84 58 84 50 L84 30 C84 14 68 8 50 8Z" fill="#306998" />
        <path d="M50 92 C72 92 76 80 76 70 L76 58 L48 58 L48 54 L82 54 C92 54 92 38 92 38 C92 38 92 8 70 8 L62 8 L62 20 C62 30 54 36 44 36 L32 36 C22 36 16 42 16 50 L16 70 C16 86 32 92 50 92Z" fill="#FFD43B" />
        <circle cx="41" cy="27" r="4" fill="white" />
        <circle cx="59" cy="73" r="4" fill="white" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    color: "#4479A1",
    icon: (
      <svg viewBox="0 0 100 100" width="36" height="36">
        <ellipse cx="50" cy="28" rx="36" ry="14" fill="none" stroke="#4479A1" strokeWidth="4" />
        <path d="M14 28 L14 72 Q14 86 50 86 Q86 86 86 72 L86 28" fill="none" stroke="#4479A1" strokeWidth="4" />
        <path d="M14 50 Q14 64 50 64 Q86 64 86 50" fill="none" stroke="#4479A1" strokeWidth="3" strokeDasharray="4 2" />
      </svg>
    ),
  },
  {
    name: "Power BI",
    color: "#F2C811",
    icon: (
      <svg viewBox="0 0 100 100" width="36" height="36">
        <rect x="12" y="50" width="18" height="40" rx="3" fill="#F2C811" />
        <rect x="36" y="30" width="18" height="60" rx="3" fill="#F2C811" opacity="0.8" />
        <rect x="60" y="10" width="18" height="80" rx="3" fill="#F2C811" opacity="0.6" />
      </svg>
    ),
  },
];

/* ── Stats ───────────────────────────────────────────────── */
const stats = [
  { value: "5+", label: "Projects" },
  { value: "8+", label: "Skills" },
  { value: "100%", label: "Dedication" },
];

export default function Home() {
  const [text, setText]           = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* Typewriter */
  useEffect(() => {
    const current = roles[roleIndex];
    const speed   = isDeleting ? 55 : 110;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) setTimeout(() => setIsDeleting(true), 1400);
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const email    = "kashishkumari87897231@gmail.com";
  const linkedin = "https://www.linkedin.com/in/kashish-kumari04/";
  const github   = "https://github.com/kumarikashish-04";

  return (
    <>
      {/* ════════════════════════════════════════ HERO ════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Background orbs — blue/cyan glow */}
        <div
          className="glow-orb absolute"
          style={{
            width: "520px", height: "520px", top: "-80px", left: "-120px",
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="glow-orb absolute"
          style={{
            width: "400px", height: "400px", bottom: "-60px", right: "-80px",
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        <div
          className="glow-orb absolute"
          style={{
            width: "300px", height: "300px", top: "40%", left: "45%",
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
            animationDelay: "4s",
          }}
        />

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12 relative z-10 pt-14 pb-12">
          {/* ── TOP — Avatar ── */}
          <div className="flex justify-center w-full md:w-1/2 md:justify-end">
            <div className="relative">
              {/* Rotating ring */}
              <div
                className="absolute -inset-4 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #3b82f6, #06b6d4, #2563eb, #3b82f6)",
                  animation: "spin-slow 12s linear infinite",
                  padding: "2px",
                  borderRadius: "50%",
                  opacity: 0.6,
                }}
              />
              {/* Glow */}
              <div
                className="absolute -inset-2 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
                  animation: "glow-pulse 4s ease-in-out infinite",
                }}
              />
              {/* Avatar container */}
              <div
                className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden"
                style={{
                  border: "3px solid rgba(59, 130, 246, 0.4)",
                  boxShadow: "0 0 0 8px rgba(59,130,246,0.08), 0 32px 80px rgba(59,130,246,0.3)",
                }}
              >
                <img
                  src={profile}
                  alt="Kashish Kumari"
                  className="w-full h-full object-cover"
                />
                {/* Inner overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(160deg, transparent 60%, rgba(59,130,246,0.15) 100%)",
                  }}
                />
              </div>

              
            </div>
          </div>

          {/* ── BOTTOM — Text & Buttons ── */}
          <div className="space-y-6 fade-in-up flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                color: "#93c5fd",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#3b82f6",
                  boxShadow: "0 0 8px #3b82f6",
                  animation: "glow-pulse 2s ease-in-out infinite",
                }}
              />



              Hi there, I'm
            </div>

            <h1
              className="text-5xl md:text-7xl leading-tight font-extrabold tracking-tight mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
            >
              Kashish{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #06b6d4 50%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Kumari
              </span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-1 text-2xl md:text-3xl font-semibold justify-center md:justify-start" style={{ minHeight: "2.5rem" }}>
              <span style={{ color: "var(--text-body)" }}>{text}</span>
                      <span className="cursor-blink" />
            </div>

            {/* Description */}
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--text-body)" }}
            >
              Passionate developer building scalable backend systems, modern React
              apps, and data-driven solutions. I turn complex problems into elegant,
              impactful software.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-4 w-full max-w-md">
              {/* Row 1: View Resume & View Projects */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a 
                  href={resume} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary flex-1" 
                  style={{ justifyContent: "center" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  View Resume
                </a>
                <Link to="/projects" className="btn-outline flex-1" style={{ justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  View Projects
                </Link>
              </div>
              
              {/* Row 2: About Me */}
              <a href="#about" className="btn-outline w-full" style={{ justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
                About Me
              </a>

              {/* Row 3: Let's Connect */}
              <a 
                href="#contact" 
                className="btn-primary w-full" 
                style={{ 
                  justifyContent: "center", 
                  background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                  boxShadow: "0 8px 24px rgba(59,130,246,0.3)"
                }}
              >
                <FaEnvelope className="text-lg" />
                Let's Connect
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 w-full max-w-lg">
              {stats.map(({ value, label }) => (
                <div key={label} className="stat-card">
                  <div className="stat-number">{value}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════ ABOUT ════════════════════════════════════════ */}
      <section
        id="about"
        className="relative py-28 px-6 md:px-12 overflow-hidden"
        style={{ background: "var(--bg-body)" }}
      >
        {/* Decorator */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="section-label justify-center">My Mindset & Goals</div>
            <h2
              className="text-4xl md:text-5xl font-bold mt-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
            >
              About{" "}
              <span className="gradient-text">Me</span>
            </h2>
            <p className="max-w-xl mx-auto mt-4" style={{ color: "var(--text-body)" }}>
              A glimpse into who I am, what drives me, and the impact I want to create.
            </p>
          </div>

          {/* Main Cards Layout */}
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            {/* The 3 Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Who I am */}
              <div 
                className="glass-card rounded-3xl p-8 text-center relative overflow-hidden group transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]" 
                style={{ background: "rgba(59, 130, 246, 0.04)", border: "1px solid rgba(59, 130, 246, 0.2)", backdropFilter: "blur(20px)" }}
              >
                {/* Background ambient glow on hover */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%)" }} />
                
                {/* Floating Icon Container */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto relative transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]" style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))", border: "1px solid rgba(59, 130, 246, 0.4)", color: "#60a5fa" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4 relative z-10 tracking-wide" style={{ background: "linear-gradient(135deg, #93c5fd, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Who I Am</h3>
                <p className="text-sm md:text-[15px] leading-relaxed relative z-10 font-medium" style={{ color: "var(--text-base)" }}>
                  I am a passionate software developer, a quick learner, and a dedicated problem solver who thrives in team environments. I continuously adapt to new technologies, embrace technical challenges, and take pride in transforming complex concepts into reliable solutions.
                </p>
                
                {/* Bottom glowing line on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #3b82f6, transparent)" }}/>
              </div>

              {/* Card 2: What I do */}
              <div 
                className="glass-card rounded-3xl p-8 text-center relative overflow-hidden group transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]" 
                style={{ background: "rgba(6, 182, 212, 0.04)", border: "1px solid rgba(6, 182, 212, 0.2)", backdropFilter: "blur(20px)" }}
              >
                {/* Background ambient glow on hover */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(6,182,212,0.15) 0%, transparent 60%)" }} />
                
                {/* Floating Icon Container */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto relative transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]" style={{ background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.05))", border: "1px solid rgba(6, 182, 212, 0.4)", color: "#22d3ee" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4 relative z-10 tracking-wide" style={{ background: "linear-gradient(135deg, #67e8f9, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>What I Do</h3>
                <p className="text-sm md:text-[15px] leading-relaxed relative z-10 font-medium" style={{ color: "var(--text-base)" }}>
                  I build scalable web applications from end to end. With a strong focus on clean architecture and user-centric design, I specialize in crafting robust backend systems and dynamic frontend experiences. Everyday, I am focused on transforming ideas into elegant, functioning software.
                </p>

                {/* Bottom glowing line on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #06b6d4, transparent)" }}/>
              </div>

              {/* Card 3: My Mindset & Goals */}
              <div 
                className="glass-card rounded-3xl p-8 text-center relative overflow-hidden group transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)]" 
                style={{ background: "rgba(168, 85, 247, 0.04)", border: "1px solid rgba(168, 85, 247, 0.2)", backdropFilter: "blur(20px)" }}
              >
                {/* Background ambient glow on hover */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.15) 0%, transparent 60%)" }} />
                
                {/* Floating Icon Container */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto relative transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]" style={{ background: "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05))", border: "1px solid rgba(168, 85, 247, 0.4)", color: "#c084fc" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4 relative z-10 tracking-wide" style={{ background: "linear-gradient(135deg, #d8b4fe, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>My Mindset & Goals</h3>
                <p className="text-sm md:text-[15px] leading-relaxed relative z-10 font-medium" style={{ color: "var(--text-base)" }}>
                  My mindset revolves around continuous learning. My goal is to become a highly versatile software engineer, contributing to impactful projects and building technologies that create real value. I strive to empower teams and leave a meaningful difference wherever I work.
                </p>

                {/* Bottom glowing line on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #a855f7, transparent)" }}/>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div 
              className="glass-card rounded-3xl p-10 text-center relative overflow-hidden w-full mt-4" 
              style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}
            >
              <h3 className="text-2xl font-bold mb-10 tracking-wide" style={{ color: "var(--text-heading)", fontFamily: "var(--font-display)" }}>Current Tech Stack</h3>
              <div className="flex justify-center flex-wrap gap-5">
                {techStack.map(({ name, icon, color }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-3 group cursor-default"
                  >
                    <div
                      className="w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-300 shadow-md"
                      style={{
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${color}18`;
                        e.currentTarget.style.borderColor = `${color}60`;
                        e.currentTarget.style.transform = "scale(1.1) translateY(-4px)";
                        e.currentTarget.style.boxShadow = `0 12px 24px ${color}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {icon}
                    </div>
                    <span className="text-sm font-medium group-hover:text-slate-800 dark:group-hover:text-white transition-colors" style={{ color: "var(--text-body)" }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ CONTACT ════════════════════════════════════════ */}
      <section
        id="contact"
        className="relative py-28 px-6 md:px-12 overflow-hidden"
        style={{ background: "var(--bg-body)" }}
      >
        {/* Top border accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)" }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="section-label justify-center">Contact</div>
            <h2
              className="text-4xl md:text-5xl font-bold mt-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
            >
              Get In{" "}
              <span className="gradient-text">Touch</span>
            </h2>
            <p className="max-w-xl mx-auto mt-4" style={{ color: "var(--text-body)" }}>
              Whether it's a project, opportunity, or just a hello — my inbox is always open.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="group flex flex-col items-center gap-4 p-7 rounded-2xl transition-all duration-300 text-center"
              style={{
                background: "rgba(59,130,246,0.05)",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.12)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.35)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(59,130,246,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.05)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                  boxShadow: "0 8px 24px rgba(59,130,246,0.35)",
                }}
              >
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--text-heading)" }}>Email</p>
                <p className="text-xs break-all" style={{ color: "var(--text-muted)" }}>kashishkumari87897231<br />@gmail.com</p>
              </div>
              <span
                className="text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "#60a5fa" }}
              >
                Send Mail →
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-7 rounded-2xl transition-all duration-300 text-center"
              style={{
                background: "rgba(6,182,212,0.05)",
                border: "1px solid rgba(6,182,212,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(6,182,212,0.12)";
                e.currentTarget.style.borderColor = "rgba(6,182,212,0.35)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(6,182,212,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(6,182,212,0.05)";
                e.currentTarget.style.borderColor = "rgba(6,182,212,0.15)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0891b2, #06b6d4)",
                  boxShadow: "0 8px 24px rgba(6,182,212,0.35)",
                }}
              >
                <FaLinkedin className="text-white text-xl" />
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--text-heading)" }}>LinkedIn</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>kashish-kumari04</p>
              </div>
              <span
                className="text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "#22d3ee" }}
              >
                View Profile →
              </span>
            </a>

            {/* GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-7 rounded-2xl transition-all duration-300 text-center"
              style={{
                background: "rgba(139,92,246,0.04)",
                border: "1px solid rgba(139,92,246,0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(139,92,246,0.1)";
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(139,92,246,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(139,92,246,0.04)";
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.12)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #374151, #1f2937)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                <FaGithub className="text-white text-xl" />
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--text-heading)" }}>GitHub</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>kumarikashish-04</p>
              </div>
              <span
                className="text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "#a78bfa" }}
              >
                View Code →
              </span>
            </a>
          </div>

          {/* Big CTA */}
          <div className="text-center">
            <a
              href={`mailto:${email}`}
              className="btn-primary text-base"
              style={{
                padding: "1rem 2.5rem",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                boxShadow: "0 16px 48px rgba(59,130,246,0.3)",
              }}
            >
              <FaEnvelope />
              Say Hello ✨
            </a>
          </div>
        </div>
      </section>
    </>
  );
}