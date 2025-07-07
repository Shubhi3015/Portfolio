import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy, Users, Clock } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      icon: Briefcase,
      value: 10,
      suffix: "+",
      label: "Projects",
      description: "Completed successfully",
      gradient: "from-cyan-400 to-blue-400"
    },
    {
      id: 2,
      icon: Trophy,
      value: 4,
      suffix: "",
      label: "Hackathons",
      description: "Top 5 Finisher",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: 3,
      icon: Users,
      value: 3,
      suffix: "",
      label: "Internships",
      description: "Professional experience",
      gradient: "from-green-400 to-teal-400"
    },
    {
      id: 4,
      icon: Clock,
      value: 1000,
      suffix: "+",
      label: "Learning Hours",
      description: "Continuous improvement",
      gradient: "from-orange-400 to-red-400"
    }
  ];

  const CounterAnimation = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          if (count < value) {
            setCount(count + Math.ceil(value / 50));
          }
        }, 50);
        return () => clearTimeout(timer);
      }
    }, [count, value, isVisible]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsVisible(true)}
        className="text-4xl md:text-5xl font-bold text-white"
      >
        {Math.min(count, value)}{suffix}
      </motion.div>
    );
  };

  return (
    <section id="stats" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Fun Stats
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that tell my story of growth and achievement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all text-center h-full">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Counter */}
                <CounterAnimation value={stat.value} suffix={stat.suffix} />

                {/* Label */}
                <h3 className="text-xl font-bold text-white mt-2 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center space-x-8">
            {[Briefcase, Trophy, Users, Clock].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-gray-600 hidden md:block"
              >
                <Icon className="w-8 h-8" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;