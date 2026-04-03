import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Job Portal Web Application",
    description:
      "A full-stack job portal built with React, Node.js, Express, and MongoDB — featuring authentication, job listings, and application management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    accent: "#60a5fa",
    category: "Full Stack",
    emoji: "💼",
    github: "https://github.com/kumarikashish-04/Job-Portal",
    live: "https://jobportal-orcin-nine.vercel.app/",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Crime Analytics Dashboard",
    description:
      "Interactive Power BI dashboard providing crime trend insights through dynamic charts, filters, and KPI reports for data-driven decision making.",
    tech: ["Power BI", "Analytics", "Data Viz"],
    accent: "#22d3ee",
    category: "Data Analytics",
    emoji: "📊",
    github: "https://github.com/kumarikashish-04/Crime-Analytics-Demographic-Insights-Dashboard",
    live: "https://app.powerbi.com/groups/me/reports/34227bf9-200d-4cf0-a8ff-ffaa8ef78a09/07a066d53eb047887cfd?experience=power-bi",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React showcasing projects, skills, and professional information with premium design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    accent: "#3b82f6",
    category: "Web Design",
    emoji: "🎨",
    github: "https://github.com/kumarikashish-04/Portfolio",
    live: "https://portfolio04kashish.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Violence Reduction Dashboard",
    description:
      "Excel-based analytics dashboard using public datasets from data.gov to identify violence trends through KPIs, charts, and structured reporting.",
    tech: ["Excel", "Data Analysis", "Dashboard"],
    accent: "#38bdf8",
    category: "Data Analytics",
    emoji: "📉",
    github: "https://github.com/kumarikashish-04/Violence_Reduction_dashboard1",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Student Record System",
    description:
      "A Java Swing desktop application for managing student records with full CRUD operations and object-oriented design principles.",
    tech: ["Java", "Swing", "OOP", "MySQL"],
    accent: "#a78bfa",
    category: "Desktop App",
    emoji: "🎓",
    github: "https://github.com/kumarikashish-04/student-record-system-java-swing",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Password Generator",
    description:
      "A secure, customizable password generator built with HTML, CSS, and JavaScript — offering multiple complexity options and one-click copy.",
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "#06b6d4",
    category: "Web App",
    emoji: "🔐",
    github: "https://github.com/kumarikashish-04/PasswordGenerator",
    live: "https://password04gen.netlify.app",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Weather Vista",
    description:
      "A modern weather application that fetches real-time data using APIs and displays forecasts with a clean UI.",
    tech: ["React", "API", "Tailwind"],
    accent: "#2563eb",
    category: "Web Application",
    emoji: "🌤️",
    github: "https://github.com/kumarikashish-04/WeatherVista",
    live: "https://weather1vista.netlify.app",
    image: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "InterviewIQ.AI",
    description:
      "A smart, AI-driven platform for practicing role-based mock interviews with real-time feedback, performance scoring, and speech-to-text integration.",
    tech: ["Next.js", "Gemini AI", "Tailwind CSS", "Web Speech API"],
    accent: "#8b5cf6",
    category: "Full Stack AI",
    emoji: "🤖",
    github: "https://github.com/kumarikashish-04",
    live: "https://interview-iq-client.vercel.app/",
    image: "/projects/interview-iq.png",
  },
];

const overview = [
  { value: "8+",   label: "Projects Completed",  accent: "#60a5fa" },
  { value: "12+",  label: "Technologies Used",    accent: "#22d3ee" },
  { value: "100%", label: "Code Quality",         accent: "#3b82f6" },
  { value: "∞",    label: "Learning Mindset",     accent: "#06b6d4" },
];

function ProjectCard({ p, visible, i, open }) {
  return (
    <article
      className="group rounded-3xl overflow-hidden transition-all duration-500 flex flex-col"
      style={{
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${i * 80}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${p.accent}40`;
        e.currentTarget.style.boxShadow = `0 24px 60px ${p.accent}20`;
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(3,0,20,0.85) 0%, rgba(3,0,20,0.2) 60%, transparent 100%)" }}
        />
        {/* Category badge */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: "rgba(3,0,20,0.75)",
            border: `1px solid ${p.accent}40`,
            color: p.accent,
            backdropFilter: "blur(8px)",
          }}
        >
          <span>{p.emoji}</span>
          {p.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3
          className="text-lg font-bold mb-2 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-heading)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = p.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-heading)")}
        >
          {p.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-body)" }}>
          {p.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium"
              style={{
                background: `${p.accent}12`,
                border: `1px solid ${p.accent}30`,
                color: p.accent,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex gap-3 pt-4"
          style={{ borderTop: "1px solid var(--glass-border)" }}
        >
          <button
            onClick={() => open(p.github)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              color: "var(--text-body)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.09)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.color = "var(--text-body)";
            }}
          >
            <FaGithub /> Code
          </button>

          {p.live && (
            <button
              onClick={() => open(p.live)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: `${p.accent}18`,
                border: `1px solid ${p.accent}35`,
                color: p.accent,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${p.accent}28`;
                e.currentTarget.style.boxShadow = `0 4px 16px ${p.accent}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${p.accent}18`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FaExternalLinkAlt /> Live
            </button>
          )}

          <button
            onClick={() => open(p.live || p.github)}
            className="ml-auto flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              color: "var(--text-muted)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "var(--text-body)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            <FaExternalLinkAlt className="text-xs" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const open = (url) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen pt-12 pb-20 px-6 md:px-12 overflow-hidden"
      style={{ background: "var(--bg-body)" }}
    >
      {/* Background orbs — blue/cyan */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="section-label justify-center">My Work</div>
          <h1
            className="text-4xl md:text-6xl font-bold mt-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
          >
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="max-w-xl mx-auto mt-4 leading-relaxed" style={{ color: "var(--text-body)" }}>
            A curated selection of real-world projects demonstrating my capabilities
            across full-stack development and data analytics.
          </p>
        </div>

        {/* DATA SCIENCE PROJECTS */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-500">
              📊
            </div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}>
              Data Science & Analytics Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.category === "Data Analytics").map((p, i) => (
              <ProjectCard key={i} p={p} visible={visible} i={i} open={open} />
            ))}
          </div>
        </div>

        {/* WEB DEVELOPMENT PROJECTS */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
              🌐
            </div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}>
              Web Development Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => !["Data Analytics"].includes(p.category)).map((p, i) => (
              <ProjectCard key={i} p={p} visible={visible} i={i} open={open} />
            ))}
          </div>
        </div>

        {/* STATS ROW */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {overview.map(({ value, label, accent }) => (
            <div key={label} className="stat-card">
              <div
                className="text-3xl font-bold mb-1"
                style={{
                  fontFamily: "var(--font-display)",
                  background: `linear-gradient(135deg, ${accent}, ${accent}aa)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => open("https://github.com/kumarikashish-04")}
            className="btn-primary"
          >
            <FaGithub /> View All Projects
          </button>
          <button
            onClick={() => open("https://github.com/kumarikashish-04")}
            className="btn-outline"
          >
            GitHub Profile →
          </button>
        </div>
      </div>
    </section>
  );
}