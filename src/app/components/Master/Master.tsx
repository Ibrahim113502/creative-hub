"use client";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import React from "react";
import { motion, Variants } from "framer-motion";

function Master({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }) {
  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="text-white min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
      <motion.div
        className="flex flex-col items-center text-center max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center justify-center mb-4 sm:mb-0 relative"
          variants={titleVariants}
        >
          {/* Left side decorative elements */}
          <motion.div 
            className="absolute left-[-80px] sm:left-[-120px] md:left-[-150px] top-1/2 transform -translate-y-1/2"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-purple-400 rounded-full opacity-70"></div>
          </motion.div>
          
          <motion.div 
            className="absolute left-[-50px] sm:left-[-70px] md:left-[-90px] top-1/4"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-400 rounded-full"></div>
          </motion.div>

          {/* Main title */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              CREATIVE HUB
            </h2>
          </motion.div>

          {/* Right side decorative elements */}
          <motion.div 
            className="absolute right-[-80px] sm:right-[-120px] md:right-[-150px] top-1/2 transform -translate-y-1/2"
            animate={{
              rotate: [0, -360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-6 h-6 sm:w-10 sm:h-10 border-2 border-green-400 rotate-45 opacity-70"></div>
          </motion.div>
          
          <motion.div 
            className="absolute right-[-50px] sm:right-[-70px] md:right-[-90px] top-3/4"
            animate={{
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-3 h-3 sm:w-5 sm:h-5 bg-pink-400 rounded-full"></div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 relative"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left floating elements */}
          <motion.div 
            className="absolute left-[-60px] sm:left-[-100px] top-1/2 transform -translate-y-1/2"
            animate={{
              x: [0, 15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-3 h-12 sm:w-4 sm:h-16 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full opacity-60"></div>
          </motion.div>
          
          <motion.div 
            className="absolute left-[-40px] sm:left-[-60px] top-1/4"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
          </motion.div>

          <h2>TECHNOLOGIES</h2>

          {/* Right floating elements */}
          <motion.div 
            className="absolute right-[-60px] sm:right-[-100px] top-1/2 transform -translate-y-1/2"
            animate={{
              x: [0, -15, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-8 h-3 sm:w-12 sm:h-4 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-60"></div>
          </motion.div>
          
          <motion.div 
            className="absolute right-[-45px] sm:right-[-65px] top-3/4"
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="w-5 h-5 sm:w-7 sm:h-7 border-2 border-orange-400 rounded-full opacity-70"></div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center text-lg sm:text-xl md:text-2xl gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 relative"
          variants={itemVariants}
        >
          {/* Floating accent elements */}
          <motion.div 
            className="absolute left-[-30px] sm:left-[-50px] top-1/2 transform -translate-y-1/2"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg opacity-50 rotate-45"></div>
          </motion.div>
          
          <motion.div 
            className="absolute right-[-30px] sm:right-[-50px] top-1/2 transform -translate-y-1/2"
            animate={{
              rotate: [0, -360],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-red-400 to-pink-600 rounded-full opacity-60"></div>
          </motion.div>

          <span className="text-center">Innovative Solution For your</span>
          <PointerHighlight>
            <span className="p-2 sm:p-3">business</span>
          </PointerHighlight>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button 
            onClick={handleScroll}
            className="text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Master;