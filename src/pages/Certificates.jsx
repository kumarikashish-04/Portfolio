import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaCalendarAlt, FaMedal, FaRobot, FaAward, FaSearch } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const allCertificates = [
  /* Official Certifications */
  {
    id: 1,
    title: "Cloud Computing",
    provider: "NPTEL",
    time: "April 2025",
    link: "https://drive.google.com/file/d/1sj-WvURgIoPnjQxYbwEWtOPe6asEaKE5/view",
    emoji: "☁️",
    accent: "#38bdf8",
    category: "Official",
    description: "In-depth study of cloud architecture, virtualization, and distributed systems via NPTEL.",
  },
  {
    id: 2,
    title: "Fundamentals of Data Structures",
    provider: "LPU CPE",
    time: "July 2025",
    link: "https://drive.google.com/file/d/1yr8wzlfNLk58PeNfP9Z9RAA5HCXuNOyf/view?usp=sharing",
    emoji: "🧩",
    accent: "#10b981",
    category: "Official",
    description: "Earned a 'Certificate of Merit' with 'O' Grade for excelling in Data Structures implementation and application-based projects.",
  },
  /* AI Related */
  {
    id: 3,
    title: "ChatGPT-4 Prompt Engineering – Generative AI & LLM",
    provider: "Infosys",
    time: "September 2025",
    link: "https://drive.google.com/file/d/1nQbtX3OBE9vBshs9w51Z8lSoFaR5gDHl/view",
    emoji: "🤖",
    accent: "#60a5fa",
    category: "AI & GenAI",
    description: "Mastering advanced prompt design and LLM integration for transformative AI solutions.",
  },
  {
    id: 4,
    title: "Build Generative AI Apps with No-Code Tools",
    provider: "Infosys",
    time: "September 2025",
    link: "https://drive.google.com/file/d/1ANtdl9iaatt8mPWUxDFy8X9pDtuU0q-F/view",
    emoji: "⚡",
    accent: "#06b6d4",
    category: "AI & GenAI",
    description: "Leveraging modern AI tools to build powerful applications without writing complex code.",
  },
  /* Extra Curricular */
  {
    id: 5,
    title: "Child Right and Education",
    provider: "N.R Ashirwad Foundation",
    time: "June 2024",
    link: "https://drive.google.com/file/d/1E5dnakNedWhHtJNwZVPylHqFKOJCReHk/view",
    emoji: "👨‍🎓",
    accent: "#22d3ee",
    category: "Extra-Curricular",
    description: "Recognized for promoting educational rights and volunteering for children's welfare.",
  },
  {
    id: 6,
    title: "Code of Duty – Web Hackathon",
    provider: "Lovely Professional University",
    time: "March 2024",
    link: "https://drive.google.com/file/d/11qZRxeAIQwAwR8sagQS4cFezHQX51rzg/view",
    emoji: "🏆",
    accent: "#3b82f6",
    category: "Extra-Curricular",
    description: "Achieved excellence in a competitive 24-hour web development hackathon.",
  },
];

const categories = ["All", "Official", "AI & GenAI", "Extra-Curricular"];

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allCertificates.filter(cert => {
    const matchesTab = activeTab === "All" || cert.category === activeTab;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         cert.provider.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="relative min-h-screen pt-24 pb-20 px-6 md:px-12 overflow-hidden" style={{ background: "var(--bg-body)" }}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[100px]" style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-5 blur-[120px]" style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 75%)" }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Credentials</div>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}>
            Professional <span className="gradient-text">Certificates</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
            A comprehensive collection of my certified expertise, specialized training, and hackathon achievements.
          </p>
        </motion.div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Tabs */}
          <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all relative ${activeTab === cat ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80 group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all placeholder:text-slate-600"
              style={{ color: "var(--text-body)" }}
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <CertificateCard cert={cert} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500 text-lg">No certificates found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function CertificateCard({ cert }) {
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div 
        className="relative h-full rounded-[40px] p-8 flex flex-col transition-all duration-500 overflow-hidden"
        style={{ 
          background: "var(--glass-bg)", 
          border: "1px solid var(--glass-border)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.borderColor = `${cert.accent}40`;
          e.currentTarget.style.boxShadow = `0 30px 60px ${cert.accent}15`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.borderColor = "var(--glass-border)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
             style={{ background: `radial-gradient(circle at 100% 0%, ${cert.accent}, transparent 70%)` }} />

        {/* Header Area */}
        <div className="flex items-start justify-between mb-8">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            style={{ 
              background: `linear-gradient(135deg, ${cert.accent}20, ${cert.accent}05)`,
              border: `1px solid ${cert.accent}30`
            }}
          >
            {cert.emoji}
          </div>
          <div 
            className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border"
            style={{ 
              background: `${cert.accent}10`, 
              color: cert.accent, 
              borderColor: `${cert.accent}30` 
            }}
          >
            {cert.category}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-blue-400 transition-colors" 
              style={{ color: "var(--text-heading)", fontFamily: "var(--font-display)" }}>
            {cert.title}
          </h3>
          
          <div className="flex items-center gap-2 mb-2 text-sm font-medium" style={{ color: cert.accent }}>
            <SiGoogleclassroom className="text-sm opacity-70" />
            {cert.provider}
          </div>
          
          <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: "var(--text-muted)" }}>
            <FaCalendarAlt className="opacity-50" />
            {cert.time}
          </div>

          <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
            {cert.description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-blue-400 transition-all">
            Verify Certificate
          </span>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 group-hover:bg-blue-600 transition-colors">
            <FaExternalLinkAlt className="text-[10px] text-white" />
          </div>
        </div>
      </div>
    </a>
  );
}
