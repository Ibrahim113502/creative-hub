"use client";
import React, { forwardRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const AboutPage = forwardRef<HTMLDivElement>((_, ref) => {
  const aboutRef = React.useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const subTitleVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const floatingVariants: Variants = {
    floating: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={ref} id="about" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-gradient-to-br from-pink-500/10 to-orange-500/10 backdrop-blur-sm"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        ref={aboutRef}
        className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main Title */}
        <motion.div
          className="relative"
          variants={titleVariants}
        >
          <motion.h2
            className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wider"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            ABOUT US
          </motion.h2>
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Who We Are Section */}
        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 relative"
          variants={subTitleVariants}
        >
          <motion.span
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mission-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
            variants={floatingVariants}
            animate="floating"
          >
            Who We Are
          </motion.span>
          
          {/* Floating decorative elements around title */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-70"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-60"
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 mt-8 sm:mt-10 md:mt-12"
          variants={containerVariants}
        >
          {/* Mission Card */}
          <motion.div
            className="relative group"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 group-hover:bg-white/10 transition-all duration-300">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-xl sm:text-2xl text-white font-semibold">
                  Our Mission
                </span>
              </motion.div>
              
              <motion.p
                className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                We help businesses grow with smart digital solutions. Our goal is to build reliable, easy-to-use technology that fits your needs and makes your work better and faster.
              </motion.p>
              
              {/* Floating icon */}
              <motion.div
                className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-white font-bold text-lg">🚀</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="relative group"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateY: -5,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 group-hover:bg-white/10 transition-all duration-300">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <span className="text-xl sm:text-2xl text-white font-semibold">
                  Our Vision
                </span>
              </motion.div>
              
              <motion.p
                className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                We aim to be a top tech partner for businesses around the world—bringing new ideas, smart digital changes, and solutions that help you grow for the long term.
              </motion.p>
              
              {/* Floating icon */}
              <motion.div
                className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center"
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-white font-bold text-lg">🎯</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-12 sm:mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "200px" } : { width: 0 }}
            transition={{ duration: 1.5, delay: 1.7 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
});

export default AboutPage;