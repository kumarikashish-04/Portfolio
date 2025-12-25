import { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import { FaEnvelope, FaLinkedin, FaArrowRight, FaGithub, FaDownload } from "react-icons/fa";
import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpg";

const roles = [
  "Software Engineer",
  "Backend Engineer",
  "React Developer",
  "Data Analyst",
];

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

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center px-6 md:px-12 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT CONTENT */}
          <div className="space-y-5">
            {/* Greeting */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <div className="text-xl w-5 h-5 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-medium">Hi There, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Kashish </span>
              {/* <br /> */}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Kumari
              </span>
            </h1>

            {/* Animated Role */}
            <div className="text-2xl md:text-3xl font-semibold min-h-[50px] flex items-center">
              <span className="text-gray-300">{text}</span>
              <span className="text-blue-500 animate-pulse ml-2">|</span>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Passionate developer focused on scalable backend systems, modern
              React applications, and data-driven solutions that create impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>About Me</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group px-8 py-4 border-2 border-gray-700 hover:border-blue-500 rounded-xl font-semibold text-white hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>View Projects</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Email Button - Centered between other buttons
            <div className="flex justify-center">
              <button
                onClick={handleEmailClick}
                className="group px-8 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-blue-500/50 rounded-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
              >
                <FaEnvelope className="text-blue-400 group-hover:animate-pulse" />
                <span>Email Me</span>
              </button>
            </div> */}

            {/* Stats */}
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
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Avatar Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-white/10 bg-gradient-to-br from-gray-900 to-black p-3 shadow-2xl">
                {/* Image */}
                <img
                  src={profile}
                  alt="Kashish Avatar"
                  className="w-full h-full object-cover rounded-full border-4 border-gray-800"
                />
                
                {/* Floating Elements */}
                {/* <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center animate-bounce">
                  {/* <FaGithub className="text-white text-2xl" /> */}
                {/* </div> */}
                
                {/* <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce delay-300"> */}
                  {/* <FaLinkedin className="text-white text-2xl" /> */}
                {/* </div> */} 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL CONTACT SECTION - Added in the middle */}
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
            {/* <p className="text-gray-400 text-sm mt-6">
              Email: <span className="text-blue-300">{email}</span>
            </p> */}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black px-6 md:px-12 py-24 overflow-hidden"
      >
        {/* Background Pattern */}
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
              
              <h3 className="text-2xl font-bold mb-6 mt-4 text-white">
                Who I Am
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                I am <span className="text-white font-semibold">Kashish Kumari</span>, a
                passionate software engineer with a strong inclination towards
                <span className="text-blue-400 font-medium"> backend development</span>,
                full-stack engineering, and data analytics. I enjoy transforming ideas
                into scalable, efficient, and user-centric digital solutions.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I believe that great software is not just about functionality, but
                also about clean architecture, performance, and long-term
                maintainability. I constantly strive to write code that is readable,
                optimized, and aligned with industry best practices.
              </p>
            </div>

            {/* What I Do Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 mt-4 text-white">
                What I Do
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                My technical skill set includes working with
                <span className="text-white font-semibold">
                  {" "}React, Node.js, Java, MySQL, Python
                </span>
                {" "}and tools like <span className="text-white font-semibold">
                  Power BI and Excel
                </span>.
                I have experience building responsive frontends, robust backend
                systems, and data-driven dashboards.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Alongside development, I enjoy analyzing datasets, extracting insights,
                and presenting data in a meaningful way. This combination of
                development and analytics allows me to build applications that are not
                only functional, but also intelligent and insight-driven.
              </p>
            </div>
          </div>

          {/* Mindset & Goals Card */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden">
            {/* Background Icon */}
            <div className="absolute top-0 right-0 text-8xl text-white/5">🌱</div>
            
            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-3xl">🌱</span>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  My Mindset & Goals
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed text-xl max-w-3xl mx-auto">
                I am a quick learner, problem solver, and team player who thrives in
                collaborative environments. My long-term goal is to grow as a software
                engineer, contribute to impactful projects, and work on technologies
                that create real-world value. I am always eager to learn, adapt, and
                take on new challenges that push my limits.
              </p>

              {/* Tech Stack Icons */}
              <div className="flex justify-center gap-6 mt-10 flex-wrap">
                {["React", "Node.js", "Java", "Python", "MySQL", "Power BI"].map((tech) => (
                  <div key={tech} className="px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
                    <span className="text-gray-300 hover:text-white">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Email CTA at bottom of About section */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <button
                  onClick={handleEmailClick}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 hover:from-blue-600/30 hover:to-cyan-500/30 border border-blue-500/30 hover:border-blue-400/50 rounded-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 mx-auto"
                >
                  <FaEnvelope className="group-hover:animate-pulse" />
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}