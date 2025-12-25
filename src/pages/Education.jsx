import { FaExternalLinkAlt, FaGraduationCap, FaCertificate, FaCalendarAlt, FaUniversity, FaBookOpen } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Lovely Professional University (LPU)",
      duration: "2023 – Present",
      score: "CGPA: 8.34",
      link: "https://www.lpu.in",
      description:
        "Pursuing B.Tech with strong focus on Cloud Computing, Software Development, Data Structures, Web Technologies, and Data Analytics. Actively building real-world projects using React, Java, Power BI, and modern tools.",
      icon: <FaUniversity className="text-xl" />
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Adarsh Vidya Mandir, Bokaro Steel City",
      duration: "2022 – 2023",
      score: "88.6%",
      link: "https://avmbokaro.co.in/#",
      description:
        "Completed higher secondary education with emphasis on Mathematics and Computer Science, developing strong analytical and problem-solving skills.",
      icon: <FaBookOpen className="text-xl" />
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Adarsh Vidya Mandir, Bokaro Steel City",
      duration: "2020 – 2021",
      score: "88%",
      link: "https://avmbokaro.co.in/#",
      description:
        "Built a strong academic foundation with focus on mathematics, science, and logical reasoning.",
      icon: <FaGraduationCap className="text-xl" />
    },
  ];

  const certificates = [
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      time: "April 2025",
      link: "https://drive.google.com/file/d/1sj-WvURgIoPnjQxYbwEWtOPe6asEaKE5/view",
      icon: <div className="text-2xl">☁️</div>
    },
    {
      title: "ChatGPT-4 Prompt Engineering – Generative AI & LLM",
      provider: "Infosys",
      time: "September 2025",
      link: "https://drive.google.com/file/d/1nQbtX3OBE9vBshs9w51Z8lSoFaR5gDHl/view",
      icon: <div className="text-2xl">🤖</div>
    },
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      provider: "Infosys",
      time: "September 2025",
      link: "https://drive.google.com/file/d/1ANtdl9iaatt8mPWUxDFy8X9pDtuU0q-F/view",
      icon: <div className="text-2xl">⚡</div>
    },
    {
      title: "Child Right and Education",
      provider: "N.R Ashirwad Foundation",
      time: "June 2024",
      link: "https://drive.google.com/file/d/1E5dnakNedWhHtJNwZVPylHqFKOJCReHk/view",
      icon: <div className="text-2xl">👨‍🎓</div>
    },
    {
      title: "Code of Duty – Web Hackathon",
      provider: "Lovely Professional University",
      time: "March 2024",
      link: "https://drive.google.com/file/d/11qZRxeAIQwAwR8sagQS4cFezHQX51rzg/view",
      icon: <div className="text-2xl">🏆</div>
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black px-6 md:px-12 py-12 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-blue-400 font-semibold tracking-wider">ACADEMIC JOURNEY</span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div> */}
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Academic background, certifications, and activities with verified
            timelines demonstrating consistent learning and growth.
          </p>
        </div>

        {/* ================= EDUCATION TIMELINE ================= */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <FaGraduationCap className="text-white text-lg" />
            </div>
            <h3 className="text-3xl font-bold text-white">
              Academic Journey
            </h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/40 via-cyan-500/40 to-purple-500/40"></div>

            {educationData.map((edu, index) => (
              <div key={index} className="relative mb-16 pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-5 md:left-10 top-6 z-10">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-4 border-gray-950"></div>
                </div>

                {/* Content card */}
                <div className="relative">
                  <div className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1">
                    {/* Degree icon - Fixed alignment */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <div className="text-blue-300">{edu.icon}</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {edu.degree}
                          </h4>
                          <span className="flex items-center gap-1 text-sm text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                            <FaCalendarAlt className="text-xs" />
                            {edu.duration}
                          </span>
                        </div>

                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-cyan-300 transition-colors group/link mt-1"
                        >
                          {edu.institution}
                          <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>

                    {/* Score badge */}
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                      <p className="text-green-300 font-semibold text-sm">
                        {edu.score}
                      </p>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <FaCertificate className="text-white text-lg" />
            </div>
            <h3 className="text-3xl font-bold text-white">
              Certifications & Co-Curricular Activities
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 
                rounded-2xl p-6 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Certificate icon - Fixed alignment */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    {cert.icon}
                  </div>

                  <div className="flex-1 space-y-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                      {cert.title}
                    </h4>
                    
                    <div className="flex items-center gap-2 text-blue-300 text-sm">
                      <SiGoogleclassroom className="flex-shrink-0" />
                      <span className="truncate">{cert.provider}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCalendarAlt className="flex-shrink-0" />
                      <span>{cert.time}</span>
                    </div>
                  </div>
                </div>

                {/* View Certificate Link */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm text-gray-400 group-hover:text-blue-300 transition-colors">
                    View Certificate
                  </span>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-300 transition-colors" />
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS SUMMARY */}
        <div className="mt-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Academic Excellence
              </span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Consistently maintaining high academic standards while actively participating 
              in certifications and extracurricular activities to enhance practical skills.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-300">8.34</div>
              <div className="text-gray-400 text-sm mt-1">Current CGPA</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-green-300">88.6%</div>
              <div className="text-gray-400 text-sm mt-1">12th Percentage</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-purple-300">5+</div>
              <div className="text-gray-400 text-sm mt-1">Certifications</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-cyan-300">∞</div>
              <div className="text-gray-400 text-sm mt-1">Growth Mindset</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}