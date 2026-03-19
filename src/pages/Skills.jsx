export default function Skills() {
  const languages = [
    { name: "C++", icon: "⚡", color: "blue" },
    { name: "Python", icon: "🐍", color: "yellow" },
    { name: "Java", icon: "☕", color: "red" },
    { name: "JavaScript", icon: "📜", color: "yellow" },
    { name: "HTML", icon: "🌐", color: "orange" },
    { name: "CSS", icon: "🎨", color: "blue" },
  ];

  const frameworks = [
    { name: "React", icon: "⚛️", color: "cyan" },
    { name: "Node.js", icon: "🟢", color: "green" },
    { name: "NumPy", icon: "🔢", color: "blue" },
    { name: "Pandas", icon: "🐼", color: "purple" },
    { name: "Matplotlib", icon: "📊", color: "blue" },
    { name: "Power BI", icon: "📈", color: "yellow" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "💡", description: "Finding elegant solutions to complex challenges" },
    { name: "Clear Communication", icon: "🗣️", description: "Articulating ideas effectively across teams" },
    { name: "Team Collaboration", icon: "🤝", description: "Working synergistically towards common goals" },
    { name: "Analytical Thinking", icon: "🔍", description: "Breaking down problems with precision" },
    { name: "Adaptability", icon: "🔄", description: "Thriving in dynamic environments" },
    { name: "Continuous Learning", icon: "📚", description: "Always expanding knowledge horizons" },
  ];

  const tools = [
    { name: "Git", icon: "📦", color: "orange" },
    { name: "VS Code", icon: "💻", color: "blue" },
    { name: "Postman", icon: "📮", color: "orange" },
    { name: "MongoDB", icon: "🍃", color: "green" },
    { name: "MySQL", icon: "🗄️", color: "blue" },
    { name: "Docker", icon: "🐳", color: "blue" },
    { name: "Figma", icon: "🎨", color: "purple" },
  ];

  // Color mapping for gradients
  const getGradient = (color) => {
    const gradients = {
      blue: "from-blue-500 to-cyan-400",
      yellow: "from-yellow-500 to-amber-400",
      red: "from-red-500 to-orange-400",
      orange: "from-orange-500 to-amber-400",
      green: "from-green-500 to-emerald-400",
      purple: "from-purple-500 to-pink-400",
      cyan: "from-cyan-500 to-blue-400",
    };
    return gradients[color] || gradients.blue;
  };

  const getBorderColor = (color) => {
    const colors = {
      blue: "border-blue-500/30 hover:border-blue-400/40",
      yellow: "border-yellow-500/30 hover:border-yellow-400/40",
      red: "border-red-500/30 hover:border-red-400/40",
      orange: "border-orange-500/30 hover:border-orange-400/40",
      green: "border-green-500/30 hover:border-green-400/40",
      purple: "border-purple-500/30 hover:border-purple-400/40",
      cyan: "border-cyan-500/30 hover:border-cyan-400/40",
    };
    return colors[color] || colors.blue;
  };

  const getBgGradient = (color) => {
    const gradients = {
      blue: "from-blue-500/10 to-cyan-500/5",
      yellow: "from-yellow-500/10 to-amber-500/5",
      red: "from-red-500/10 to-orange-500/5",
      orange: "from-orange-500/10 to-amber-500/5",
      green: "from-green-500/10 to-emerald-500/5",
      purple: "from-purple-500/10 to-pink-500/5",
      cyan: "from-cyan-500/10 to-blue-500/5",
    };
    return gradients[color] || gradients.blue;
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-b from-gray-950 to-black px-6 md:px-12 py-12 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-blue-400 font-semibold tracking-wider animate-pulse">⚡ EXPERTISE ⚡</span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
          
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
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center animate-bounce">
              <span className="text-white">⚡</span>
            </div>
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Languages Card */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white">{"</>"}</span>
                  </div>
                  Programming Languages
                </h4>
                <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm">
                  {languages.length} Skills
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {languages.map((skill, i) => (
                  <div 
                    key={i}
                    className={`group/item relative p-4 rounded-xl bg-gradient-to-br ${getBgGradient(skill.color)} border ${getBorderColor(skill.color)} hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center text-center`}
                  >
                    <span className={`text-3xl mb-2 filter drop-shadow-lg group-hover/item:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </span>
                    <span className="text-gray-200 group-hover/item:text-white transition-colors font-medium text-sm">
                      {skill.name}
                    </span>
                    <div className={`absolute inset-0 border-2 border-${skill.color}-500/0 group-hover/item:border-${skill.color}-500/20 rounded-xl transition-all duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks Card */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white">⚛️</span>
                  </div>
                  Frameworks & Libraries
                </h4>
                <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm">
                  {frameworks.length} Skills
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {frameworks.map((skill, i) => (
                  <div 
                    key={i}
                    className={`group/item relative p-4 rounded-xl bg-gradient-to-br ${getBgGradient(skill.color)} border ${getBorderColor(skill.color)} hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center text-center`}
                  >
                    <span className={`text-3xl mb-2 filter drop-shadow-lg group-hover/item:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </span>
                    <span className="text-gray-200 group-hover/item:text-white transition-colors font-medium text-sm">
                      {skill.name}
                    </span>
                    <div className={`absolute inset-0 border-2 border-${skill.color}-500/0 group-hover/item:border-${skill.color}-500/20 rounded-xl transition-all duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-400 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white">🛠️</span>
              </div>
              Tools & Technologies
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
              {tools.map((tool, i) => (
                <div 
                  key={i}
                  className={`group/item relative p-4 rounded-xl bg-gradient-to-br ${getBgGradient(tool.color)} border ${getBorderColor(tool.color)} hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center text-center`}
                >
                  <span className={`text-3xl mb-2 filter drop-shadow-lg group-hover/item:scale-110 transition-transform duration-300`}>
                    {tool.icon}
                  </span>
                  <span className="text-gray-200 group-hover/item:text-white transition-colors font-medium text-xs">
                    {tool.name}
                  </span>
                  <div className={`absolute inset-0 border-2 border-${tool.color}-500/0 group-hover/item:border-${tool.color}-500/20 rounded-xl transition-all duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-lg flex items-center justify-center animate-bounce delay-300">
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
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-yellow-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-3xl filter drop-shadow-lg">{skill.icon}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors">
                    {skill.name}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-4 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <span className="animate-pulse">✨</span>
            Continuously expanding skill set through personal projects and professional challenges
            <span className="animate-pulse delay-300">✨</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
        }
      `}</style>
    </section>
  );
}