const languages = [
  { name: "C++",        icon: "⚡", accent: "#60a5fa" },
  { name: "Python",     icon: "🐍", accent: "#facc15" },
  { name: "Java",       icon: "☕", accent: "#fb923c" },
  { name: "JavaScript", icon: "📜", accent: "#fbbf24" },
  { name: "HTML",       icon: "🌐", accent: "#f97316" },
  { name: "CSS",        icon: "🎨", accent: "#38bdf8" },
];

const frameworks = [
  { name: "React",       icon: "⚛️", accent: "#61dafb" },
  { name: "Node.js",     icon: "🟢", accent: "#68a063" },
  { name: "NumPy",       icon: "🔢", accent: "#4f6eb4" },
  { name: "Pandas",      icon: "🐼", accent: "#e70488" },
  { name: "Matplotlib",  icon: "📊", accent: "#11a3cf" },
  { name: "Power BI",    icon: "📈", accent: "#f2c811" },
];

const tools = [
  { name: "Git",      icon: "📦", accent: "#f97316" },
  { name: "VS Code",  icon: "💻", accent: "#38bdf8" },
  { name: "Postman",  icon: "📮", accent: "#f97316" },
  { name: "MongoDB",  icon: "🍃", accent: "#4ade80" },
  { name: "MySQL",    icon: "🗄️", accent: "#38bdf8" },
  { name: "Docker",   icon: "🐳", accent: "#38bdf8" },
  { name: "Figma",    icon: "🎨", accent: "#a78bfa" },
];

const softSkills = [
  { icon: "💡", name: "Problem Solving",       desc: "Finding elegant solutions to complex challenges" },
  { icon: "🗣️", name: "Clear Communication",   desc: "Articulating ideas effectively across teams" },
  { icon: "🤝", name: "Team Collaboration",    desc: "Working synergistically towards common goals" },
  { icon: "🔍", name: "Analytical Thinking",   desc: "Breaking down problems with precision" },
  { icon: "🔄", name: "Adaptability",          desc: "Thriving in dynamic environments" },
  { icon: "📚", name: "Continuous Learning",   desc: "Always expanding knowledge horizons" },
];

function SkillChip({ name, icon, accent }) {
  return (
    <div
      className="flex flex-col items-center gap-3 p-6 rounded-2xl text-center cursor-default group transition-all duration-300"
      style={{
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${accent}14`;
        e.currentTarget.style.borderColor = `${accent}55`;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 12px 32px ${accent}25`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span className="text-4xl">{icon}</span>
      <span className="text-sm font-semibold text-slate-300">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen pt-12 pb-20 px-6 md:px-12 overflow-hidden"
      style={{ background: "var(--bg-body)" }}
    >
      {/* Background orbs — blue/cyan */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="section-label justify-center">My Expertise</div>
          <h1
            className="text-4xl md:text-6xl font-bold mt-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
          >
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 leading-relaxed" style={{ color: "var(--text-body)" }}>
            A comprehensive showcase of my technical proficiency, tool mastery, and professional capabilities
            refined through dedicated learning and real-world application.
          </p>
        </div>

        {/* ──────────── TECHNICAL SKILLS ──────────── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{ background: "linear-gradient(135deg, #2563eb, #0891b2)", boxShadow: "0 4px 16px rgba(59,130,246,0.35)" }}
            >
              ⚡
            </div>
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
            >
              Technical Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Languages */}
            <div
              className="rounded-3xl p-7"
              style={{
                background: "rgba(59,130,246,0.05)",
                border: "1px solid rgba(59,130,246,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-lg font-semibold flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)", color: "#93c5fd" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                    style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa" }}
                  >
                    {"</>"}
                  </span>
                  Programming Languages
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: "rgba(59,130,246,0.1)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.2)" }}
                >
                  {languages.length} skills
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {languages.map((s) => <SkillChip key={s.name} {...s} />)}
              </div>
            </div>

            {/* Frameworks */}
            <div
              className="rounded-3xl p-7"
              style={{
                background: "rgba(6,182,212,0.05)",
                border: "1px solid rgba(6,182,212,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-lg font-semibold flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)", color: "#67e8f9" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(6,182,212,0.15)" }}
                  >
                    ⚛️
                  </span>
                  Frameworks & Libraries
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: "rgba(6,182,212,0.1)", color: "#22d3ee", border: "1px solid rgba(6,182,212,0.2)" }}
                >
                  {frameworks.length} skills
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {frameworks.map((s) => <SkillChip key={s.name} {...s} />)}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div
            className="rounded-3xl p-7"
            style={{
              background: "rgba(139,92,246,0.04)",
              border: "1px solid rgba(139,92,246,0.12)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h3
              className="text-lg font-semibold flex items-center gap-2 mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(139,92,246,0.12)" }}
              >
                🛠️
              </span>
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
              {tools.map((t) => <SkillChip key={t.name} {...t} />)}
            </div>
          </div>
        </div>

        {/* ──────────── PROFESSIONAL STRENGTHS ──────────── */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)", boxShadow: "0 4px 16px rgba(59,130,246,0.3)" }}
            >
              🌟
            </div>
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
            >
              Professional Strengths
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {softSkills.map(({ icon, name, desc }) => (
              <div
                key={name}
                className="group rounded-2xl p-8 transition-all duration-400 relative overflow-hidden cursor-default"
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(59,130,246,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)" }}
                >
                  {icon}
                </div>
                <h4
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
                >
                  {name}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{desc}</p>

                {/* Hover indicator bar */}
                <div className="mt-5 w-full h-0.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="h-full rounded-full w-0 group-hover:w-full transition-all duration-700"
                    style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            ✨ Continuously expanding skill set through personal projects and professional challenges ✨
          </p>
        </div>
      </div>
    </section>
  );
}