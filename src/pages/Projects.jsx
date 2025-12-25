import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Crime Analytics Demographics Insights Dashboard",
      description:
        "Interactive Power BI dashboard providing crime trend insights through dynamic charts, filters, and reports.",
      tech: ["Power BI", "Analytics", "Visualization"],
      gradient: "from-orange-500 to-red-400",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
      github:
        "https://github.com/kumarikashish-04/Crime-Analytics-Demographic-Insights-Dashboard",
      live:
        "https://app.powerbi.com/groups/me/reports/34227bf9-200d-4cf0-a8ff-ffaa8ef78a09/07a066d53eb047887cfd?experience=power-bi",
      category: "Crime Analytics",
    },
    
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS showcasing projects, skills, and professional information.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      gradient: "from-amber-500 to-yellow-400",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/kumarikashish-04/Portfolio",
      live: "https://kashish4portfolio.netlify.app/",
      category: "Web Development",
    },
    {
      title: "Violence Reduction Dashboard",
      description:
        "Excel-based analytics dashboard using public datasets from data.gov to identify violence trends through KPIs, charts, and structured reporting.",
      tech: ["Excel", "Data Analysis", "Dashboard"],
      gradient: "from-blue-500 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      github:
        "https://github.com/kumarikashish-04/Violence_Reduction_dashboard1",
      category: "Data Analytics",
    },
    {
      title: "Student Record System",
      description:
        "A Java Swing desktop application for managing student records with CRUD operations and object-oriented design principles.",
      tech: ["Java", "Swing", "OOP", "MySQL"],
      gradient: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
      github:
        "https://github.com/kumarikashish-04/student-record-system-java-swing",
      category: "Desktop Application",
    },
    {
      title: "Password Generator",
      description:
        "A secure password generator built using HTML, CSS, and JavaScript with customizable options.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-green-500 to-emerald-400",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/kumarikashish-04/PasswordGenerator",
      live: "https://password04gen.netlify.app",
      category: "Web Application",
    },
    {
      title: "Weather Vista",
      description:
        "A modern weather application that fetches real-time data using APIs and displays forecasts with a clean UI.",
      tech: ["React", "API", "Tailwind"],
      gradient: "from-cyan-500 to-blue-400",
      image:
        "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/kumarikashish-04/WeatherVista",
      live: "https://weather1vista.netlify.app",
      category: "Web Application",
    },
  ];

  const githubProfile = "https://github.com/kumarikashish-04";

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black px-6 md:px-12 py-12"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-blue-400 font-semibold tracking-wider">PORTFOLIO</span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div> */}
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of real-world projects demonstrating my skills across
            development and analytics.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl 
              border border-white/10 rounded-3xl p-6 overflow-hidden
              transition-all duration-500
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* IMAGE */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <span className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-black/50 backdrop-blur-sm text-white border border-white/20">
                  {project.category}
                </span>

                {/* Gradient accent at top right (without icon) */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${project.gradient} opacity-20 rounded-bl-3xl`}
                />
              </div>

              {/* TEXT */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-white transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <div className="flex gap-3">
                  <button
                    onClick={() => openLink(project.github)}
                    className="group/link flex items-center gap-2 px-4 py-2 rounded-lg 
                    bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <FaGithub className="text-gray-400 group-hover/link:text-white transition-colors" />
                    <span className="text-sm text-gray-300 group-hover/link:text-white">Code</span>
                  </button>

                  {project.live && (
                    <button
                      onClick={() => openLink(project.live)}
                      className="group/link flex items-center gap-2 px-4 py-2 rounded-lg 
                      bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 
                      border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-blue-300 group-hover/link:text-white transition-colors" />
                      <span className="text-sm text-blue-300 group-hover/link:text-white">Live</span>
                    </button>
                  )}
                </div>

                <button
                  onClick={() =>
                    openLink(project.live || project.github)
                  }
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center 
                  hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-300 transition-colors text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PROJECT STATS - Updated count */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">6</div>
            <div className="text-gray-400 text-sm mt-2">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">12+</div>
            <div className="text-gray-400 text-sm mt-2">Technologies Used</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-green-500/30 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">100%</div>
            <div className="text-gray-400 text-sm mt-2">Code Quality</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-orange-500/30 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">∞</div>
            <div className="text-gray-400 text-sm mt-2">Learning Mindset</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4">
            <button
              onClick={() => openLink(githubProfile)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              View All Projects
            </button>
            <button
              onClick={() => openLink(githubProfile)}
              className="px-8 py-3 border-2 border-gray-700 hover:border-blue-500 rounded-xl font-semibold text-white hover:text-blue-400 transition-all duration-300"
            >
              GitHub Profile
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            More projects and contributions available on my GitHub
          </p>
        </div>
      </div>
    </section>
  );
}