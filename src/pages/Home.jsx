import { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaArrowRight, 
  FaGithub, 
  FaDownload, 
  FaReact, 
  FaJava, 
  FaPython, 
  FaNodeJs,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaStar,
  FaHeart,
  FaBrain,
  FaChartLine
} from "react-icons/fa";
import { SiMysql, SiPowerbi, SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  const github = "https://github.com/kashishkumari";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center px-6 md:px-12 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -30, 30, -30],
                x: [null, 30, -30, 30],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT CONTENT */}
          <motion.div 
            className="space-y-5"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Greeting */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm"
            >
              <div className="relative">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-blue-400 font-medium">✨ Welcome to My Portfolio ✨</span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="text-white">I'm </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent relative">
                Kashish Kumari
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-semibold min-h-[60px] flex items-center"
            >
              <span className="text-gray-300">{text}</span>
              <motion.span 
                className="text-blue-500 ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >|</motion.span>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              Passionate developer crafting <span className="text-blue-400 font-semibold">scalable backend systems</span>, 
              <span className="text-cyan-400 font-semibold"> modern React applications</span>, and 
              <span className="text-purple-400 font-semibold"> data-driven solutions</span> that create real impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <span className="relative z-10">About Me</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 border-2 border-gray-700 hover:border-blue-500 rounded-xl font-semibold text-white hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <span className="relative z-10">View Projects</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-blue-500/10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="flex gap-8 pt-8"
            >
              {[
                { value: "5+", label: "Projects", icon: FaRocket },
                { value: "8+", label: "Skills", icon: FaBrain },
                { value: "100%", label: "Dedication", icon: FaHeart }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-white flex items-center gap-2">
                    <stat.icon className="text-blue-400 group-hover:text-cyan-400 transition-colors" />
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT AVATAR */}
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Outer Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Avatar Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-white/10 bg-gradient-to-br from-gray-900 to-black p-3 shadow-2xl">
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={profile}
                    alt="Kashish Avatar"
                    className="w-full h-full object-cover rounded-full border-4 border-gray-800"
                  />
                </motion.div>
                
                {/* Floating Icons */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaCode className="text-white text-3xl" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <FaLaptopCode className="text-white text-3xl" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EMAIL CONTACT SECTION */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,#3b82f6_0%,transparent_50%)] opacity-20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div 
            className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaEnvelope className="text-5xl text-blue-400 mx-auto mb-6" />
            </motion.div>
            
            <h3 className="text-4xl font-bold text-white mb-4">
              Let's Build Something <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Amazing</span> Together
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Have an exciting project or opportunity? I'd love to hear about it!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmailClick}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-3"
              >
                <FaEnvelope className="group-hover:animate-bounce" />
                <span>Send Email</span>
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-blue-500/30 hover:border-blue-400 rounded-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 flex items-center gap-3"
              >
                <FaLinkedin className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Connect on LinkedIn</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-gray-700 hover:border-gray-500 rounded-xl font-semibold text-white hover:text-gray-300 transition-all duration-300 flex items-center gap-3"
              >
                <FaGithub className="text-gray-400 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black px-6 md:px-12 py-24 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_50%_-100px,#3b82f6,transparent)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_800px_at_80%_800px,#8b5cf6,transparent)]"></div>
        </div>

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
              style={{ top: `${20 + i * 15}%` }}
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ 
                duration: 8,
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <motion.div 
                className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                animate={{ width: [12, 48, 12] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-blue-400 font-semibold tracking-wider">GET TO KNOW ME</span>
              <motion.div 
                className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                animate={{ width: [12, 48, 12] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent relative">
                Me
                <motion.span 
                  className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>
            
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A glimpse into who I am, what I do, and what drives me as a developer.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Who I Am Card */}
            <motion.div 
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">👩‍💻</span>
              </div>
              
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <h3 className="text-2xl font-bold mb-6 mt-4 text-white">
                Who I Am
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                I am <span className="text-white font-semibold">Kashish Kumari</span>, a
                passionate software engineer with a strong inclination towards
                <span className="text-blue-400 font-medium"> backend development</span>,
                full-stack engineering, and data analytics.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, scalable code and creating solutions that 
                make a difference. Every line of code tells a story, and I strive to 
                make mine impactful.
              </p>
            </motion.div>

            {/* What I Do Card */}
            <motion.div 
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              
              <motion.div 
                className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              />
              
              <h3 className="text-2xl font-bold mb-6 mt-4 text-white">
                What I Do
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                I specialize in building robust applications using
                <span className="text-white font-semibold"> React, Node.js, Java, MySQL, Python</span>
                and tools like <span className="text-white font-semibold">Power BI</span>.
              </p>

              <p className="text-gray-300 leading-relaxed">
                From responsive frontends to scalable backends and insightful dashboards,
                I bring ideas to life with clean code and modern practices.
              </p>
            </motion.div>
          </div>

          {/* Mindset & Goals Card */}
          <motion.div 
            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Background Icon */}
            <motion.div 
              className="absolute top-0 right-0 text-9xl text-white/5"
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              🌱
            </motion.div>
            
            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <motion.span 
                  className="text-4xl"
                  animate={{ 
                    rotate: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🌱
                </motion.span>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  My Mindset & Goals
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed text-xl max-w-3xl mx-auto">
                I'm a quick learner and problem solver who thrives in collaborative 
                environments. My goal? To create impactful solutions that push boundaries 
                and make a difference in people's lives.
              </p>

              {/* Tech Stack Icons - Enhanced */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10">
                {[
                  { icon: FaReact, name: "React", color: "blue", bg: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30" },
                  { icon: FaNodeJs, name: "Node.js", color: "green", bg: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30" },
                  { icon: FaJava, name: "Java", color: "red", bg: "from-red-500/20 to-orange-500/20", border: "border-red-500/30" },
                  { icon: FaPython, name: "Python", color: "yellow", bg: "from-yellow-500/20 to-amber-500/20", border: "border-yellow-500/30" },
                  { icon: SiMysql, name: "MySQL", color: "blue", bg: "from-blue-600/20 to-blue-400/20", border: "border-blue-600/30" },
                  { icon: SiPowerbi, name: "Power BI", color: "yellow", bg: "from-yellow-600/20 to-amber-600/20", border: "border-yellow-600/30" },
                  { icon: SiJavascript, name: "JavaScript", color: "yellow", bg: "from-yellow-400/20 to-yellow-600/20", border: "border-yellow-500/30" },
                  { icon: SiTypescript, name: "TypeScript", color: "blue", bg: "from-blue-400/20 to-blue-600/20", border: "border-blue-500/30" },
                  { icon: TbBrandNextjs, name: "Next.js", color: "gray", bg: "from-gray-500/20 to-gray-700/20", border: "border-gray-500/30" },
                  { icon: SiTailwindcss, name: "Tailwind", color: "cyan", bg: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/30" },
                  { icon: FaChartLine, name: "Data Analytics", color: "purple", bg: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/30" },
                  { icon: FaCode, name: "Clean Code", color: "white", bg: "from-white/20 to-gray-500/20", border: "border-white/30" }
                ].map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="group flex flex-col items-center gap-2"
                    whileHover={{ scale: 1.1, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className={`relative w-24 h-24 bg-gradient-to-br ${tech.bg} rounded-2xl flex items-center justify-center border ${tech.border} group-hover:border-${tech.color}-400 group-hover:shadow-xl group-hover:shadow-${tech.color}-500/20 transition-all duration-300 overflow-hidden`}>
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${tech.bg} opacity-0 group-hover:opacity-100`}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <tech.icon className={`text-5xl text-${tech.color}-400 group-hover:text-${tech.color}-300 relative z-10`} />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Email CTA */}
              <motion.div 
                className="mt-12 pt-8 border-t border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEmailClick}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 hover:from-blue-600/30 hover:to-cyan-500/30 border border-blue-500/30 hover:border-blue-400/50 rounded-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 flex items-center gap-3 mx-auto relative overflow-hidden"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <FaEnvelope className="group-hover:animate-bounce relative z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}