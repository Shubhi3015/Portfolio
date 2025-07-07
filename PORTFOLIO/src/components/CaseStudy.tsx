import React from 'react';
import { motion } from 'framer-motion';
import { Container, Layers, Zap, Shield, GitBranch, Globe } from 'lucide-react';

const CaseStudy = () => {
  const benefits = [
    {
      icon: Container,
      title: "Container Orchestration",
      description: "Automated deployment, scaling, and management of containerized applications"
    },
    {
      icon: Layers,
      title: "Microservices Architecture",
      description: "Breaking down applications into smaller, manageable, and scalable services"
    },
    {
      icon: Zap,
      title: "High Availability",
      description: "Ensuring applications remain available and responsive under varying loads"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Built-in security features and compliance with enterprise standards"
    },
    {
      icon: GitBranch,
      title: "CI/CD Integration",
      description: "Seamless integration with continuous integration and deployment pipelines"
    },
    {
      icon: Globe,
      title: "Multi-Cloud Support",
      description: "Deploy across multiple cloud providers with consistent management"
    }
  ];

  return (
    <section id="case-study" className="py-20 relative overflow-hidden">
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
              Case Study
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Why MNCs Use Kubernetes for Enterprise Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Enterprise Container Orchestration
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <span className="text-cyan-400 font-semibold">Kubernetes</span> has become the de facto standard for container orchestration in enterprise environments. Major MNCs leverage Kubernetes to manage their containerized applications at scale.
                </p>
                
                <p className="leading-relaxed">
                  With the rise of <span className="text-purple-400 font-semibold">microservices architecture</span>, companies need robust solutions to handle deployment, scaling, and management of hundreds or thousands of containers.
                </p>
                
                <p className="leading-relaxed">
                  Kubernetes provides automated <span className="text-green-400 font-semibold">load balancing</span>, <span className="text-yellow-400 font-semibold">self-healing</span>, and <span className="text-pink-400 font-semibold">rolling updates</span> that ensure applications remain highly available and performant.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Real-world Enterprise Scenarios:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  E-commerce platforms handling millions of transactions
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  Financial services requiring 99.9% uptime
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Media streaming with dynamic scaling needs
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Kubernetes Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl backdrop-blur-sm border border-gray-700/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">☸️</div>
                  <h4 className="text-2xl font-bold text-white mb-2">Kubernetes</h4>
                  <p className="text-gray-400">Container Orchestration</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Container className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;