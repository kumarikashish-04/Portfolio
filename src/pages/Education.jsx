import { motion, useScroll, useSpring } from "framer-motion";
import { 
  FaExternalLinkAlt, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaUniversity, 
  FaBookOpen, 
  FaAward,
  FaMapMarkerAlt
} from "react-icons/fa";
import { useEffect, useRef } from "react";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Lovely Professional University (LPU)",
    address: "Phagwara, Punjab, India",
    duration: "2023 – Present",
    score: "CGPA: 8.37",
    link: "https://www.lpu.in",
    description:
      "Specializing in Computer Science and Engineering with a focus on Cloud Computing, Full-Stack Development, and Data Analytics. Consistently maintaining strong academic standing while leading technical projects.",
    accent: "#3b82f6",
    icon: <FaUniversity />,
    skills: ["Cloud Computing", "Java", "DSA", "React"]
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "Adarsh Vidya Mandir",
    address: "Bokaro Steel City, Jharkhand, India",
    duration: "2021 – 2022",
    score: "88.6% ",
    link: "https://avmbokaro.co.in/#",
    description:
      "Core focus on Physics, Chemistry, and Mathematics. Developed strong analytical foundations and logical reasoning skills through rigorous academic training.",
    accent: "#06b6d4",
    icon: <FaBookOpen />,
    skills: ["Mathematics", "Physics", "Computer Science"]
  },
  {
    degree: "Secondary Education (10th)",
    institution: "Adarsh Vidya Mandir",
    address: "Bokaro Steel City, Jharkhand, India",
    duration: "2019 – 2020",
    score: "88%",
    link: "https://avmbokaro.co.in/#",
    description:
      "Built a solid foundation across general science and humanities with a clear interest in computing and problem solving.",
    accent: "#60a5fa",
    icon: <FaGraduationCap />,
    skills: ["General Science", "Analytical Thinking"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -30, y: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      className="relative min-h-screen pt-24 pb-32 px-6 md:px-12 overflow-hidden"
      style={{ background: "var(--bg-body)" }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="section-label justify-center">Academic Milestones</div>
          <h1
            className="text-5xl md:text-7xl font-bold mt-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
          >
            Education <span className="gradient-text">Timeline</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
            A journey of continuous learning, academic excellence, and technical specialization.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Animated Timeline Line */}
          <div className="absolute left-[31px] md:left-[47px] top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-16 md:gap-24"
          >
            {educationData.map((edu, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants}
                className="relative pl-20 md:pl-32"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-0 w-16 md:w-24 h-full flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full border-[3px] z-20 mb-auto mt-7"
                    style={{ borderColor: edu.accent, background: "var(--bg-body)", boxShadow: `0 0 20px ${edu.accent}60` }}
                  />
                </div>

                {/* Content Card */}
                <div
                  className="group relative rounded-[40px] p-8 md:p-12 transition-all duration-500 overflow-hidden"
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(10px) scale(1.02)";
                    e.currentTarget.style.borderColor = `${edu.accent}30`;
                    e.currentTarget.style.background = "var(--glass-bg-hover)";
                    e.currentTarget.style.boxShadow = `0 32px 80px -20px ${edu.accent}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.background = "var(--glass-bg)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Decorative corner icon */}
                  <div className="absolute -top-6 -right-6 text-9xl opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" style={{ color: edu.accent }}>
                    {edu.icon}
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left side: Icon & Degree */}
                    <div className="lg:w-1/3">
                      <div
                        className="w-20 h-20 rounded-[28px] flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 transition-transform"
                        style={{
                          background: `linear-gradient(135deg, ${edu.accent}20, ${edu.accent}05)`,
                          border: `1px solid ${edu.accent}30`,
                          color: edu.accent,
                        }}
                      >
                        {edu.icon}
                      </div>
                      
                      <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                        style={{ background: `${edu.accent}15`, color: edu.accent, border: `1px solid ${edu.accent}30` }}
                      >
                        <FaCalendarAlt /> {edu.duration}
                      </div>
                      
                      <h3
                        className="text-2xl md:text-3xl font-bold leading-tight"
                        style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
                      >
                        {edu.degree}
                      </h3>
                    </div>

                    {/* Right side: Details */}
                    <div className="flex-1 lg:pt-2">
                       <div className="flex flex-col gap-3 mb-6 w-full">
                         <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-wrap items-center gap-2 text-xl md:text-2xl font-bold transition-all hover:text-blue-400 leading-tight"
                          style={{ color: "var(--text-heading)" }}
                         >
                          <FaUniversity className="opacity-80 text-xl md:text-2xl" />
                          <span>{edu.institution}</span>
                          <FaExternalLinkAlt className="text-sm md:text-base opacity-60 mt-1" />
                         </a>
                         <div className="flex items-center gap-2 text-base md:text-lg font-semibold" style={{ color: "var(--text-heading)" }}>
                           <FaMapMarkerAlt className="opacity-90 text-blue-400" />
                           {edu.address}
                         </div>
                       </div>

                       <div className="flex items-center gap-3 mb-8">
                          <div 
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-base md:text-lg shadow-sm"
                            style={{ 
                              background: "rgba(16,182,22,0.1)", 
                              color: "#10b981", 
                              border: "1px solid rgba(16,182,22,0.3)"
                            }}
                          >
                            <FaAward className="text-lg md:text-xl" />
                            {edu.score}
                          </div>
                       </div>

                       <p className="text-base leading-relaxed mb-8 opacity-80" style={{ color: "var(--text-body)" }}>{edu.description}</p>

                       <div className="flex flex-wrap gap-2">
                         {edu.skills.map(skill => (
                           <span 
                            key={skill}
                            className="px-4 py-1.5 rounded-xl text-xs font-semibold"
                            style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--text-muted)" }}
                           >
                            {skill}
                           </span>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}