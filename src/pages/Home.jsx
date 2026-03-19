import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaArrowRight, FaGithub } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

const roles = [
  "Software Engineer",
  "Backend Engineer",
  "React Developer",
  "Data Analyst",
];

// Large SVG tech icons
const TechIcons = {
  React: () => (
    <svg viewBox="0 0 100 100" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="9" fill="#61DAFB" />
      <ellipse cx="50" cy="50" rx="46" ry="18" fill="none" stroke="#61DAFB" strokeWidth="4" />
      <ellipse cx="50" cy="50" rx="46" ry="18" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="46" ry="18" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)" />
    </svg>
  ),
  NodeJS: () => (
    <svg viewBox="0 0 100 100" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,5 92,27 92,73 50,95 8,73 8,27" fill="none" stroke="#68A063" strokeWidth="5" />
      <text x="50" y="58" textAnchor="middle" fill="#68A063" fontSize="20" fontWeight="bold" fontFamily="monospace">JS</text>
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 100 100" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="80" height="80" rx="12" fill="none" stroke="#F89820" strokeWidth="5" />
      <text x="50" y="62" textAnchor="middle" fill="#F89820" fontSize="28" fontWeight="bold" fontFamily="monospace">J</text>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 100 100" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 8 C28 8 24 20 24 30 L24 42 L52 42 L52 46 L18 46 C8 46 8 62 8 62 C8 62 8 92 30 92 L38 92 L38 80 C38 70 46 64 56 64 L68 64 C78 64 84 58 84 50 L84 30 C84 14 68 8 50 8Z" fill="#306998" />
      <path d="M50 92 C72 92 76 80 76 70 L76 58 L48 58 L48 54 L82 54 C92 54 92 38 92 38 C92 38 92 8 70 8 L62 8 L62 20 C62 30 54 36 44 36 L32 36 C22 36 16 42 16 50 L16 70 C16 86 32 92 50 92Z" fill="#FFD43B" />
      <circle cx="41" cy="27" r="4" fill="white" />
      <circle cx="59" cy="73" r="4" fill="white" />
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 100 100" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="28" rx="36" ry="14" fill="none" stroke="#4479A1" strokeWidth="4" />
      <path d="M14 28 L14 72 Q14 86 50 86 Q86 86 86 72 L86 28" fill="none" stroke="#4479A1" strokeWidth="4" />
      <path d="M14 50 Q14 64 50 64 Q86 64 86 50" fill="none" stroke="#4479A1" strokeWidth="3" strokeDasharray="4 2" />
    </svg>
  ),
  PowerBI: () => (
    <svg viewBox="0 0 100 100" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="50" width="18" height="40" rx="3" fill="#F2C811" />
      <rect x="36" y="30" width="18" height="60" rx="3" fill="#F2C811" opacity="0.8" />
      <rect x="60" y="10" width="18" height="80" rx="3" fill="#F2C811" opacity="0.6" />
      <text x="50" y="98" textAnchor="middle" fill="#F2C811" fontSize="9" fontFamily="monospace" opacity="0.7">POWER BI</text>
    </svg>
  ),
};

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const email = "kashishkumari87897231@gmail.com";
  const linkedin = "https://www.linkedin.com/in/kashish-kumari04/";
  const github = "hthttps://github.com/kumarikashish-04"; // update if different

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const techStack = [
    { name: "React", Icon: TechIcons.React },
    { name: "Node.js", Icon: TechIcons.NodeJS },
    { name: "Java", Icon: TechIcons.Java },
    { name: "Python", Icon: TechIcons.Python },
    { name: "MySQL", Icon: TechIcons.MySQL },
    { name: "Power BI", Icon: TechIcons.PowerBI },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <div className="text-xl w-5 h-5 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-medium">Hi There, I'm</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Kashish </span>
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Kumari
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold min-h-[50px] flex items-center">
              <span className="text-gray-300">{text}</span>
              <span className="text-blue-500 animate-pulse ml-2">|</span>
            </div>

            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Passionate developer focused on scalable backend systems, modern
              React applications, and data-driven solutions that create impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>About Me</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <Link to="/projects">
                <button className="group px-8 py-4 border-2 border-gray-700 hover:border-blue-500 rounded-xl font-semibold text-white hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                  <span>View Projects</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">8+</div>
                <div className="text-gray-400">Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-gray-400">Dedication</div>
              </div>
            </div>
          </div>

          {/* RIGHT AVATAR */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-white/10 bg-gradient-to-br from-gray-900 to-black p-3 shadow-2xl">
                <img
                  src={profile}
                  alt="Kashish Avatar"
                  className="w-full h-full object-cover rounded-full border-4 border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL CONTACT SECTION */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 md:p-12">
            <FaEnvelope className="text-4xl text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or have an opportunity? Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={handleEmailClick}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
              >
                <FaEnvelope className="group-hover:animate-bounce" />
                <span>Send Email</span>
              </button>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-blue-500/30 hover:border-blue-400 rounded-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
              >
                <FaLinkedin className="text-blue-400" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black px-6 md:px-12 py-24 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_50%_-100px,#3b82f6,transparent)]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <span className="text-blue-400 font-semibold tracking-wider">GET TO KNOW ME</span>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A glimpse into who I am, what I do, and what drives me as a developer.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Who I Am Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">👩‍💻</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 mt-4 text-white">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am <span className="text-white font-semibold">Kashish Kumari</span>, a passionate software engineer with a strong inclination towards
                <span className="text-blue-400 font-medium"> backend development</span>, full-stack engineering, and data analytics. I enjoy transforming ideas into scalable, efficient, and user-centric digital solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe that great software is not just about functionality, but also about clean architecture, performance, and long-term maintainability. I constantly strive to write code that is readable, optimized, and aligned with industry best practices.
              </p>
            </div>

            {/* What I Do Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 mt-4 text-white">What I Do</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                My technical skill set includes working with
                <span className="text-white font-semibold"> React, Node.js, Java, MySQL, Python</span>
                {" "}and tools like <span className="text-white font-semibold">Power BI and Excel</span>.
                I have experience building responsive frontends, robust backend systems, and data-driven dashboards.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Alongside development, I enjoy analyzing datasets, extracting insights, and presenting data in a meaningful way. This combination allows me to build applications that are not only functional, but also intelligent and insight-driven.
              </p>
            </div>
          </div>

          {/* Mindset & Goals Card */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 text-8xl text-white/5">🌱</div>
            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-3xl">🌱</span>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  My Mindset & Goals
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-xl max-w-3xl mx-auto">
                I am a quick learner, problem solver, and team player who thrives in collaborative environments. My long-term goal is to grow as a software engineer, contribute to impactful projects, and work on technologies that create real-world value.
              </p>

              {/* Tech Stack — Large SVG Icons */}
              <div className="flex justify-center gap-8 mt-10 flex-wrap">
                {techStack.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-2 group cursor-default"
                  >
                    <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                      <Icon />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">{name}</span>
                  </div>
                ))}
              </div>

              {/* Email CTA */}
              {/* <div className="mt-12 pt-8 border-t border-white/10">
                <button
                  onClick={handleEmailClick}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 hover:from-blue-600/30 hover:to-cyan-500/30 border border-blue-500/30 hover:border-blue-400/50 rounded-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 mx-auto"
                >
                  <FaEnvelope className="group-hover:animate-pulse" />
                  <span>Get in Touch</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section
        id="contact"
        className="relative py-28 bg-gradient-to-b from-black via-gray-950 to-gray-900 overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Contact</span>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Get In <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Whether it's a project, opportunity, or just a hello — my inbox is always open.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-lg mb-1">Email</p>
                <p className="text-gray-400 text-xs break-all">kashishkumari87897231<br />@gmail.com</p>
              </div>
              <span className="text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                Send Mail <FaArrowRight className="text-xs" />
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/40 hover:bg-blue-400/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform duration-300">
                <FaLinkedin className="text-white text-2xl" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-lg mb-1">LinkedIn</p>
                <p className="text-gray-400 text-sm">kashish-kumari04</p>
              </div>
              <span className="text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                View Profile <FaArrowRight className="text-xs" />
              </span>
            </a>

            {/* GitHub */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gray-400/40 hover:bg-gray-400/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center shadow-lg shadow-gray-700/30 group-hover:scale-110 transition-transform duration-300">
                <FaGithub className="text-white text-2xl" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-lg mb-1">GitHub</p>
                <p className="text-gray-400 text-sm">kashish-kumari04</p>
              </div>
              <span className="text-gray-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                View Code <FaArrowRight className="text-xs" />
              </span>
            </a>
          </div>

          {/* Big Email CTA */}
          <div className="text-center">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-bold text-white text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <FaEnvelope className="text-xl" />
              Say Hello →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}