import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AI for Everyone",
      issuer: "Coursera",
      date: "2024",
      description: "Comprehensive understanding of AI concepts, machine learning fundamentals, and their practical applications in business.",
      logo: "🧠",
      gradient: "from-blue-400 to-purple-400",
      link: "#"
    },
    {
      id: 2,
      title: "Data Visualization",
      issuer: "Coursera",
      date: "2024",
      description: "Advanced techniques in data visualization, creating compelling visual narratives, and using tools like Tableau and Power BI.",
      logo: "📊",
      gradient: "from-green-400 to-teal-400",
      link: "#"
    },
    {
      id: 3,
      title: "Cloud Computing Fundamentals",
      issuer: "Simplilearn",
      date: "2023",
      description: "Understanding cloud architecture, deployment models, and hands-on experience with major cloud platforms.",
      logo: "☁️",
      gradient: "from-cyan-400 to-blue-400",
      link: "#"
    },
    {
      id: 4,
      title: "Digital Marketing",
      issuer: "Tata Consultancy Services",
      date: "2023",
      description: "Comprehensive digital marketing strategies, SEO, social media marketing, and analytics.",
      logo: "📱",
      gradient: "from-pink-400 to-purple-400",
      link: "#"
    },
    {
      id: 5,
      title: "Programming in Java",
      issuer: "NPTEL",
      date: "2023",
      description: "Advanced Java programming concepts, object-oriented programming, and enterprise application development.",
      logo: "☕",
      gradient: "from-orange-400 to-red-400",
      link: "#"
    },
    {
      id: 6,
      title: "Database Management Systems",
      issuer: "NPTEL",
      date: "2023",
      description: "Comprehensive database design, SQL optimization, and database administration concepts.",
      logo: "🗄️",
      gradient: "from-indigo-400 to-purple-400",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
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
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group perspective-1000"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all h-full transform-style-preserve-3d">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cert.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {cert.logo}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-cyan-400 font-medium">{cert.issuer}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-700/50">
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute"
              style={{
                left: `${10 + index * 15}%`,
                top: `${20 + (index % 2) * 60}%`,
              }}
            >
              <Award className="w-6 h-6 text-gray-600" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;