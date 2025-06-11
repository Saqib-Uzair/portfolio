
export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "purple",
      skills: [
        { name: "React", level: 70 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 70 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    {
      title: "Backend",
      color: "blue",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "RESTful APIs", level: 92 },
        { name: "JWT Auth", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "Socket.io", level: 70 },
      ],
    },
    {
      title: "Database",
      color: "green",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MYSQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Database Design", level: 82 },
        { name: "Query Optimization", level: 78 },
      ],
    },
    {
      title: "Tools",
      color: "yellow",
      skills: [
        { name: "Git/GitHub", level: 80 },
        {name: "Bitbucket", level: 75},
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 75 },
        { name: "AWS", level: 70 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-500 to-purple-600",
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      yellow: "from-yellow-500 to-yellow-600",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-700/30 rounded-2xl p-6 border border-gray-700">
              <h3 className={`text-2xl font-bold mb-6 text-center bg-gradient-to-r ${getColorClasses(category.color)} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${getColorClasses(category.color)} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-400">
            Additional Competencies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Agile/Scrum",
              "Team Leadership",
              "Code Review",
              "Technical Writing",
              "Problem Solving",
              "UI/UX Design",
              "Performance Optimization",
              "Security Best Practices",
              "CI/CD",
              "API Design",
              "Testing"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-700/50 rounded-lg p-3 text-center hover:bg-gray-700 transition-all duration-200 hover:scale-105 border border-gray-600"
              >
                <span className="text-gray-300 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
