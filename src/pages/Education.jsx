import {
  FaExternalLinkAlt,
  FaGraduationCap,
  FaCertificate,
  FaCalendarAlt,
  FaUniversity,
  FaBookOpen,
} from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Lovely Professional University (LPU)",
    address: "Phagwara, Punjab, India",
    duration: "2023 – Present",
    score: "CGPA: 8.37",
    link: "https://www.lpu.in",
    description:
      "Pursuing B.Tech with strong focus on Cloud Computing, Software Development, Data Structures, Web Technologies, and Data Analytics. Actively building real-world projects using React, Java, Power BI, and modern tools.",
    accent: "#3b82f6",
    icon: <FaUniversity />,
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "Adarsh Vidya Mandir",
    address: "Bokaro Steel City, Jharkhand, India",
    duration: "2021 – 2022",
    score: "88.6%",
    link: "https://avmbokaro.co.in/#",
    description:
      "Completed higher secondary education with emphasis on Mathematics and Computer Science, developing strong analytical and problem-solving skills.",
    accent: "#06b6d4",
    icon: <FaBookOpen />,
  },
  {
    degree: "Secondary Education (10th)",
    institution: "Adarsh Vidya Mandir",
    address: "Bokaro Steel City, Jharkhand, India",
    duration: "2019 – 2020",
    score: "88%",
    link: "https://avmbokaro.co.in/#",
    description:
      "Built a strong academic foundation with focus on mathematics, science, and logical reasoning.",
    accent: "#60a5fa",
    icon: <FaGraduationCap />,
  },
];


export default function Education() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative min-h-screen pt-12 pb-20 px-6 md:px-12 overflow-hidden"
      style={{ background: "var(--bg-body)" }}
    >
      {/* Background orbs — blue/cyan */}
      <div
        className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="section-label justify-center">Academic Journey</div>
          <h1
            className="text-4xl md:text-6xl font-bold mt-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
          >
            My <span className="gradient-text">Education</span>
          </h1>
          <p className="max-w-xl mx-auto mt-4 leading-relaxed" style={{ color: "var(--text-body)" }}>
            Academic background and milestones demonstrating consistent growth and dedication to learning.
          </p>
        </div>

        {/* ──────────── EDUCATION TIMELINE ──────────── */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2563eb, #0891b2)", boxShadow: "0 4px 16px rgba(59,130,246,0.35)" }}
            >
              <FaGraduationCap className="text-white" />
            </div>
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
            >
              Academic Journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-5 md:left-6 top-2 bottom-2 w-0.5 rounded-full"
              style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.5) 0%, rgba(6,182,212,0.3) 60%, rgba(59,130,246,0.1) 100%)" }}
            />

            <div className="flex flex-col gap-8">
              {educationData.map((edu, i) => (
                <div key={i} className="relative pl-14 md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-3.5 md:left-4 top-7 z-10">
                    <div className="timeline-dot" style={{ boxShadow: `0 0 0 3px #030014, 0 0 16px ${edu.accent}60` }} />
                  </div>

                  <div
                    className="rounded-3xl p-10 md:p-12 transition-all duration-400 group"
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(-30px)",
                      transitionDelay: `${i * 200}ms`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${edu.accent}08`;
                      e.currentTarget.style.borderColor = `${edu.accent}35`;
                      e.currentTarget.style.transform = "translateX(6px)";
                      e.currentTarget.style.boxShadow = `0 16px 48px ${edu.accent}15`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl"
                        style={{
                          background: `${edu.accent}15`,
                          border: `1px solid ${edu.accent}30`,
                          color: edu.accent,
                        }}
                      >
                        {edu.icon}
                      </div>

                      <div className="flex-1">
                        {/* Degree + Date */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h3
                            className="text-xl font-bold transition-colors"
                            style={{ fontFamily: "var(--font-display)", color: "var(--text-heading)" }}
                          >
                            {edu.degree}
                          </h3>
                          <span
                            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full w-fit"
                            style={{
                              background: `${edu.accent}18`,
                              color: edu.accent,
                              border: `1px solid ${edu.accent}30`,
                            }}
                          >
                            <FaCalendarAlt /> {edu.duration}
                          </span>
                        </div>

                        {/* Institution link */}
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium mb-3 transition-colors animated-underline"
                          style={{ color: edu.accent }}
                        >
                          {edu.institution}, {edu.address}
                          <FaExternalLinkAlt className="text-xs" />
                        </a>

                        {/* Score badge */}
                        <div className="mb-3">
                          <span
                            className="text-xs font-bold px-3 py-1 rounded-full"
                            style={{
                              background: "rgba(6,182,212,0.1)",
                              color: "#22d3ee",
                              border: "1px solid rgba(6,182,212,0.25)",
                            }}
                          >
                            {edu.score}
                          </span>
                        </div>

                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}