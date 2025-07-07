import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, BarChart3, Wrench, Monitor, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 }
      ],
      color: "from-cyan-400 to-blue-400"
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Java", level: 80 },
        { name: "Shell", level: 85 }
      ],
      color: "from-green-400 to-teal-400"
    },
    {
      title: "AI/ML",
      icon: Brain,
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "TensorFlow", level: 75 },
        { name: "Scikit-Learn", level: 80 }
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "Docker", level: 80 },
        { name: "Linux", level: 85 },
        { name: "Jenkins", level: 75 },
        { name: "GCP", level: 70 }
      ],
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "SQL", level: 85 },
        { name: "C", level: 80 }
      ],
      color: "from-yellow-400 to-orange-400"
    },
    {
      title: "Other Skills",
      icon: Wrench,
      skills: [
        { name: "Power BI", level: 75 },
        { name: "DSA", level: 80 },
        { name: "Problem Solving", level: 85 }
      ],
      color: "from-indigo-400 to-purple-400"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[Code, Database, Cloud, Brain, BarChart3, Wrench].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute text-gray-600"
              style={{
                left: `${10 + index * 15}%`,
                top: `${20 + (index % 2) * 60}%`,
              }}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;