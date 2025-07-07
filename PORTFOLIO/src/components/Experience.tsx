import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Linux World Informatics Pvt. Ltd.",
      position: "DevOps & AI/ML Intern",
      duration: "June 2024 - August 2024",
      location: "Remote",
      description: "Worked on containerization projects using Docker, implemented CI/CD pipelines, and developed machine learning models for automation tasks.",
      achievements: [
        "Reduced deployment time by 40% through Docker containerization",
        "Implemented automated testing pipelines using Jenkins",
        "Developed ML models for predictive maintenance"
      ],
      logo: "🐧",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 2,
      company: "CodSoft",
      position: "Full Stack Developer Intern",
      duration: "March 2024 - May 2024",
      location: "Remote",
      description: "Developed responsive web applications using React and Node.js, collaborated with cross-functional teams, and implemented modern UI/UX designs.",
      achievements: [
        "Built 3 full-stack web applications",
        "Improved application performance by 35%",
        "Implemented responsive design principles"
      ],
      logo: "💻",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: 3,
      company: "Cognifyz Technologies",
      position: "Web Development Intern",
      duration: "January 2024 - February 2024",
      location: "Remote",
      description: "Focused on frontend development, created interactive user interfaces, and optimized web applications for better user experience.",
      achievements: [
        "Developed interactive web components",
        "Optimized page load times by 50%",
        "Implemented accessibility best practices"
      ],
      logo: "🌟",
      gradient: "from-green-400 to-teal-400"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and internship experiences in tech
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className="flex-1 max-w-xl">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.gradient} flex items-center justify-center text-2xl`}>
                        {exp.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                        <p className="text-cyan-400 font-medium mb-2">{exp.position}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-gray-300">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;