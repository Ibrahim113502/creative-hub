import React, { useState, useEffect } from "react";
import { Globe, Smartphone, Bot, Megaphone, Palette, Video, Code, Zap } from "lucide-react";

const services = [
  {
    title: "Software Development",
    icon: Code,
    sub: "Building scalable, and custom software solutions tailored to meet your unique business needs.",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    delay: "0ms"
  },
  {
    title: "Web Development",
    icon: Globe,
    sub: "Creating sleek, high-performance websites that drive engagement conversions, and brand credibility.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    delay: "150ms"
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    sub: "Designing powerful and user-friendly mobile apps that deliver smooth experiences across iOS and Android.",
    gradient: "from-green-500 via-emerald-500 to-lime-500",
    delay: "300ms"
  },
  {
    title: "AI Automation",
    icon: Bot,
    sub: "Empowering your operations with intelligent automation tools to increase efficiency and reduce manual effort.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    delay: "450ms"
  },
];

const Service2 = [
  {
    title: "Digital Marketing",
    icon: Megaphone,
    sub: "Boosting your online presence through data-driven strategies, SEO, social media, and targeted campaigns.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    delay: "600ms"
  },
  {
    title: "Banner Design",
    icon: Palette,
    sub: "Crafting eye-catching banners and visual content that capture attention and communicate your brand message.",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    delay: "750ms"
  },
  {
    title: "Video Editing",
    icon: Video,
    sub: "Delivering professionally edited videos that tell your story, promote your services, and captivate your audience.",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    delay: "900ms"
  },
];

const FloatingParticle = ({ delay }:any) => (
  <div 
    className="absolute w-2 h-2 bg-white rounded-full opacity-20"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: delay,
      animationDuration: `${2 + Math.random() * 3}s`
    }}
  />
);

const ServiceCard = ({ service, index }:any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-700 hover:-translate-y-4 hover:scale-105"
      style={{ animationDelay: service.delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-1000`} />
      
      {/* Card container */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 min-h-80 overflow-hidden border border-gray-700 group-hover:border-transparent transition-all duration-700">
        
        {/* Floating particles */}
        {Array.from({length: 5}).map((_, i) => (
          <FloatingParticle key={i} delay={`${i * 0.5}s`} />
        ))}
        
        {/* Animated gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-1000 rounded-2xl`} />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          
          {/* Icon container with enhanced animations */}
          <div className="relative mb-6">
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all duration-700 scale-150`} />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-full border-2 border-gray-600 group-hover:border-transparent transition-all duration-700 group-hover:scale-110">
              <service.icon 
                size={40} 
                className={`text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:bg-clip-text transition-all duration-700 transform group-hover:rotate-12`}
              />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-white text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-700"
              style={{ backgroundImage: isHovered ? `linear-gradient(to right, ${service.gradient.split(' ').join(', ').replace(/from-|via-|to-/g, '')})` : 'none' }}>
            {service.title}
          </h3>
          
          {/* Description with smooth reveal */}
          <div className="relative overflow-hidden flex-1">
            <p className={`text-gray-300 text-sm leading-relaxed transition-all duration-1000 ease-out transform ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {service.sub}
            </p>
          </div>
          
          {/* Hover effect button */}
          <div className={`mt-auto pt-4 transform transition-all duration-700 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <button className={`px-6 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105`}>
              Learn More
            </button>
          </div>
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
      </div>
    </div>
  );
};

function Service() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div id="services" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 p-10 lg:p-20">
        
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            What We
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text"> Create</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into digital masterpieces with cutting-edge technology and creative excellence
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
        </div>
        
        {/* Main Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        {/* Secondary Services */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {Service2.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
          </button>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

export default Service;