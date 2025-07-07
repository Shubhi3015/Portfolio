import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Server, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, text: "Final-year B.Tech CSE", color: "from-cyan-400 to-blue-400" },
    { icon: Brain, text: "AI Enthusiast", color: "from-purple-400 to-pink-400" },
    { icon: Server, text: "DevOps & Automation", color: "from-green-400 to-teal-400" },
    { icon: Trophy, text: "10+ Projects | 4 Hackathons", color: "from-yellow-400 to-orange-400" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions and exploring cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 backdrop-blur-sm p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/WhatsApp Image 2025-07-08 at 00.25.01_f55e7542.jpg" 
                    alt="Shubhi Tiwari"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center"
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <p className="text-gray-300 leading-relaxed mb-6">
                Hi, I'm <span className="text-cyan-400 font-semibold">Shubhi Tiwari</span>, a final-year B.Tech student with a strong passion for <span className="text-purple-400 font-semibold">Artificial Intelligence</span>, <span className="text-purple-400 font-semibold">Machine Learning</span>, <span className="text-cyan-400 font-semibold">DevOps</span>, and <span className="text-green-400 font-semibold">Full-Stack Development</span>.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I enjoy building intelligent systems, automating workflows, and creating seamless web experiences. I'm constantly exploring new technologies and thrive in collaborative, fast-paced environments.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Currently, I'm seeking opportunities to apply my skills and grow as a software professional in innovative and impactful projects.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600/50 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center`}>
                      <highlight.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">{highlight.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;