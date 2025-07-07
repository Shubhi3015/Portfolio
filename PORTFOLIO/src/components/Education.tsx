import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science Engineering",
      institution: "Technical University",
      duration: "2021 - 2025",
      location: "India",
      status: "Final Year",
      highlights: [
        "Specialized in AI/ML and Software Development",
        "Completed multiple internships and projects",
        "Active participant in hackathons and competitions"
      ],
      logo: "🎓",
      gradient: "from-blue-400 to-purple-400"
    }
  ];

  const achievements = [
    { title: "Academic Excellence", value: "8.5+ CGPA", icon: "🏆" },
    { title: "Projects Completed", value: "10+", icon: "💼" },
    { title: "Hackathons", value: "4 Participated", icon: "🚀" },
    { title: "Certifications", value: "6+", icon: "🏅" }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
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
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background and educational achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Education Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {education.map((edu, index) => (
              <div key={edu.id} className="mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center text-2xl`}>
                      {edu.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-cyan-400 font-medium text-lg mb-3">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {edu.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-gray-300 flex items-start gap-2">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Right Side - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Academic Achievements</h3>
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 mx-auto mb-6"
                >
                  <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-16 h-16 text-white" />
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                >
                  <span className="text-2xl">🏆</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center"
                >
                  <span className="text-2xl">📚</span>
                </motion.div>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600/50 transition-all text-center"
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                  <div className="text-sm text-gray-400">{achievement.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;