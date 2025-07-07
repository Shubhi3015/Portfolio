import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Bot, Target, Share2, Package, MessageCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Pay Planner",
      description: "An intelligent financial planning application that helps users manage their expenses, track spending patterns, and plan future payments with AI-powered insights.",
      icon: Smartphone,
      tags: ["React", "Node.js", "AI/ML", "Financial"],
      gradient: "from-cyan-400 to-blue-500",
      demoLink: "https://github.com/Shubhi3015/SmartPay-Planner",
      codeLink: "https://github.com/Shubhi3015/SmartPay-Planner"
    },
    {
      id: 2,
      title: "Medical Symptom Checker Chatbot",
      description: "AI-powered chatbot that analyzes symptoms and provides preliminary medical guidance using natural language processing and machine learning algorithms.",
      icon: Bot,
      tags: ["Python", "NLP", "TensorFlow", "Healthcare"],
      gradient: "from-purple-400 to-pink-500",
      demoLink: "https://github.com/Shubhi3015/MEDICAL-SYMPTOM-CHATBOT",
      codeLink: "https://github.com/Shubhi3015/MEDICAL-SYMPTOM-CHATBOT"
    },
    {
      id: 3,
      title: "AI-powered Career Guidance System",
      description: "Intelligent system that analyzes user profiles, skills, and preferences to provide personalized career recommendations and growth paths.",
      icon: Target,
      tags: ["Python", "Machine Learning", "Data Analysis", "Career"],
      gradient: "from-green-400 to-teal-500",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Multi-platform Social Media Poster",
      description: "Automated tool that enables users to post content across multiple social media platforms simultaneously with scheduling and analytics features.",
      icon: Share2,
      tags: ["React", "API Integration", "Automation", "Social Media"],
      gradient: "from-orange-400 to-red-500",
      demoLink: "https://github.com/Shubhi3015/MultiPoster",
      codeLink: "https://github.com/Shubhi3015/MultiPoster"
    },
    {
      id: 5,
      title: "Docker and Linux Menu-Based Project",
      description: "Interactive command-line tool that simplifies Docker container management and Linux system administration through an intuitive menu interface.",
      icon: Package,
      tags: ["Docker", "Linux", "Shell Scripting", "DevOps"],
      gradient: "from-indigo-400 to-purple-500",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 6,
      title: "Communication Hub",
      description: "Centralized platform for team communication featuring real-time messaging, file sharing, video calls, and project collaboration tools.",
      icon: MessageCircle,
      tags: ["React", "Node.js", "Socket.io", "WebRTC"],
      gradient: "from-yellow-400 to-orange-500",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating innovation and problem-solving skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all h-full flex flex-col">
                {/* Project Icon */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-600 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-600 rounded-full font-medium hover:bg-gray-800 transition-all group"
          >
            View More Projects
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2 inline-block"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;