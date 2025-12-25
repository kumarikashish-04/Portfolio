export default function Skills() {
  const languages = [
    "C++",
    "Python", 
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  const frameworks = [
    "React",
    "Node.js",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Power BI",
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "💡" },
    { name: "Clear Communication", icon: "🗣️" },
    { name: "Team Collaboration", icon: "🤝" },
    { name: "Analytical Thinking", icon: "🔍" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Continuous Learning", icon: "📚" },
  ];

  const tools = [
    "Git", "VS Code", "Postman", "MongoDB", "MySQL", "Docker", "Figma"
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black px-6 md:px-12 py-12 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
          {/* <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-blue-400 font-semibold tracking-wider">EXPERTISE</span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div> */}
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive showcase of my technical proficiency, tool mastery, and professional 
            capabilities refined through practical application and dedicated learning.
          </p>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white">⚡</span>
            </div>
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Languages Card */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <span className="text-white">{"</>"}</span>
                  </div>
                  Programming Languages
                </h4>
                <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm">
                  {languages.length} Skills
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {languages.map((skill, i) => (
                  <div 
                    key={i}
                    className="group relative px-5 py-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/15 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-gray-200 group-hover:text-white transition-colors font-medium">
                      {skill}
                    </span>
                    <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks Card */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
                    <span className="text-white">⚛️</span>
                  </div>
                  Frameworks & Libraries
                </h4>
                <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm">
                  {frameworks.length} Skills
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {frameworks.map((skill, i) => (
                  <div 
                    key={i}
                    className="group relative px-5 py-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-500/15 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-gray-200 group-hover:text-white transition-colors font-medium">
                      {skill}
                    </span>
                    <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/20 rounded-xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white">🛠️</span>
              </div>
              Tools & Technologies
            </h4>
            
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, i) => (
                <div 
                  key={i}
                  className="group relative px-5 py-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/5 border border-emerald-500/20 hover:border-emerald-400/40 hover:bg-emerald-500/15 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-gray-200 group-hover:text-white transition-colors font-medium">
                    {tool}
                  </span>
                  <div className="absolute inset-0 border-2 border-emerald-500/0 group-hover:border-emerald-500/20 rounded-xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-white">🌟</span>
            </div>
            Professional Strengths
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-yellow-500/30 hover:bg-gradient-to-br hover:from-yellow-500/10 hover:to-transparent transition-all duration-500 hover:-translate-y-2"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-yellow-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors">
                    {skill.name}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Developed through collaborative projects, critical thinking exercises, 
                    and continuous professional development.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Continuously expanding skill set through personal projects and professional challenges
          </p>
        </div>
      </div>
    </section>
  );
}