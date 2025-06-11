
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Junior Full Stack Developer with 2 years of experience specializing in the MERN stack. I hold a B.E. in Computer Systems Engineering from Mehran University of Engineering and Technology. Passionate about turning ideas into code, I enjoy building both intuitive frontends and robust backends. While my main focus is JavaScript and full stack development, I’ve also worked with Python on a few projects. Outside of coding, I enjoy exploring new tech, open source, hiking, and photography.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in the MERN stack and enjoy working on both frontend and backend challenges. 
              From crafting intuitive user interfaces with React to building robust APIs with Node.js and Express, 
              I love the full spectrum of web development.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Core Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "TypeScript", "Git"].map((tech) => (
                  <div key={tech} className="bg-gray-700/50 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors duration-200">
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Stats or additional info */}
          <div className="space-y-8">
            <div className="bg-gray-700/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-center text-purple-400">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">DevOps, AI</div>
                  <div className="text-gray-400">Learning Interests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">0-2</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-gray-400">Dedication</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Current Focus</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Learning Next.js and serverless architectures
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Contributing to open source projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Building scalable microservices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
