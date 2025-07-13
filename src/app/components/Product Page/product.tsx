import React, { useState, useEffect } from "react";
import { 
  Monitor, 
  Trophy, 
  Zap, 
  ArrowRight, 
  Star, 
  Users, 
  BarChart3, 
  Shield, 
  Rocket,
  CheckCircle,
  Play,
  Download
} from "lucide-react";

// Counter Animation Hook
const useCountUp = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;
    
    if (isVisible) {
      timeoutId = setTimeout(() => {
        const startTime = Date.now();
        const startValue = 0;
        
        intervalId = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
          
          setCount(currentValue);
          
          if (progress >= 1) {
            clearInterval(intervalId);
            setCount(end);
          }
        }, 16); // ~60fps
      }, delay);
    }
    
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [end, duration, delay, isVisible]);

  return [count, setIsVisible];
};

// Counter Component
const AnimatedCounter = ({ value, suffix = "", duration = 2000, delay = 0 }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const [count, setIsVisible] = useCountUp(numericValue, duration, delay);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, [setIsVisible]);
  
  const formatValue = (num) => {
    if (value.includes('K')) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    if (value.includes('%')) {
      return `${num}%`;
    }
    if (value.includes('/')) {
      return `${(num / 10).toFixed(1)}/5`;
    }
    return num.toString();
  };
  
  return (
    <span className="tabular-nums">
      {formatValue(count)}{suffix}
    </span>
  );
};

const products = [
  {
    id: 1,
    title: "Business Management Suite",
    subtitle: "Complete Business Control Platform",
    description: "Revolutionary all-in-one business management system that seamlessly integrates all your business operations, from inventory to customer relations.",
    icon: Monitor,
    gradient: "from-purple-500 via-pink-500 to-red-500",
    features: [
      "Real-time Analytics Dashboard",
      "Automated Workflow Management",
      "Multi-platform Integration",
      "Advanced Reporting Tools",
      "Team Collaboration Hub",
      "Cloud-based Security"
    ],
    stats: {
      users: "10000",
      rating: "49",
      efficiency: "85"
    },
    delay: "0ms"
  },
  {
    id: 2,
    title: "Tournament Match Handler",
    subtitle: "Professional Tournament Management",
    description: "Advanced tournament management software designed for esports, sports leagues, and competitive events with real-time scoring and bracket management.",
    icon: Trophy,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    features: [
      "Dynamic Bracket Generation",
      "Live Score Tracking",
      "Player Registration System",
      "Automated Scheduling",
      "Prize Pool Management",
      "Streaming Integration"
    ],
    stats: {
      users: "5000",
      rating: "48",
      efficiency: "92"
    },
    delay: "200ms"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Engine",
    subtitle: "Intelligent Data Processing",
    description: "Cutting-edge AI analytics platform that transforms raw data into actionable insights, featuring machine learning algorithms and predictive modeling.",
    icon: Zap,
    gradient: "from-green-500 via-emerald-500 to-lime-500",
    features: [
      "Machine Learning Models",
      "Predictive Analytics",
      "Natural Language Processing",
      "Real-time Data Processing",
      "Custom Algorithm Training",
      "API Integration Suite"
    ],
    stats: {
      users: "8000",
      rating: "49",
      efficiency: "95"
    },
    delay: "400ms"
  }
];

const ProductCard = ({ product, index }:any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-700 hover:-translate-y-4 hover:scale-105"
      style={{ animationDelay: product.delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div className={`absolute -inset-2 bg-gradient-to-r ${product.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-1000`} />
      
      {/* Card container */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 min-h-96 overflow-hidden border border-gray-700 group-hover:border-transparent transition-all duration-700">
        
        {/* Animated gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-10 transition-all duration-1000 rounded-3xl`} />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all duration-700 scale-150`} />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-full border-2 border-gray-600 group-hover:border-transparent transition-all duration-700 group-hover:scale-110">
                <product.icon 
                  size={32} 
                  className="text-white transition-all duration-700 transform group-hover:rotate-12"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="text-yellow-400" size={16} />
                <span className="text-white font-semibold">{product.stats.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="text-blue-400" size={16} />
                <span className="text-white font-semibold">{product.stats.users}</span>
              </div>
            </div>
          </div>
          
          {/* Title & Subtitle */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-700">
              {product.title}
            </h3>
            <p className="text-gray-400 font-medium">
              {product.subtitle}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 mb-6 flex-grow">
            {product.description}
          </p>
          
          {/* Features */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3">Key Features:</h4>
            <div className="grid grid-cols-1 gap-2">
              {product.features.slice(0, 3).map((feature:any, idx:any) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-between mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="text-center">
              <div className="text-lg font-bold text-white">
                <AnimatedCounter value={product.stats.efficiency} suffix="%" duration={2000} delay={800} />
              </div>
              <div className="text-xs text-gray-400">Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">
                <AnimatedCounter value={product.stats.users} suffix="+" duration={2000} delay={1000} />
              </div>
              <div className="text-xs text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">
                <AnimatedCounter value={product.stats.rating} suffix="/5" duration={2000} delay={1200} />
              </div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex space-x-3">
            <button className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center">
                <Play size={16} className="mr-2" />
                Live Demo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
            </button>
            
            <button className="group/btn relative px-4 py-3 bg-transparent border-2 border-gray-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-700 hover:border-purple-500 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center">
                <Download size={16} className="mr-2" />
                Download
              </span>
            </button>
          </div>
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
      </div>
    </div>
  );
};

function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  // const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 p-10 lg:p-20">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Our Products
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Innovative
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text"> Solutions</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Discover our cutting-edge software solutions designed to transform your business operations and drive unprecedented growth.
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full" />
          </div>
        </div>
        
        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { label: "Active Users", value: "23000", suffix: "+", icon: Users, gradient: "from-purple-500 to-pink-500", delay: 0 },
            { label: "Projects Completed", value: "500", suffix: "+", icon: CheckCircle, gradient: "from-blue-500 to-cyan-500", delay: 200 },
            { label: "Average Rating", value: "49", suffix: "/5", icon: Star, gradient: "from-green-500 to-emerald-500", delay: 400 },
            { label: "Performance Boost", value: "90", suffix: "%", icon: BarChart3, gradient: "from-orange-500 to-red-500", delay: 600 }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-700`} />
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-6 text-center border border-gray-700 group-hover:border-transparent transition-all duration-700">
                <stat.icon className="mx-auto mb-3 text-white group-hover:scale-110 transition-transform duration-300" size={32} />
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    duration={2500} 
                    delay={stat.delay}
                  />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {/* Features Comparison */}
        <div className={`max-w-6xl mx-auto mb-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text"> Products?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Built with cutting-edge technology and designed for maximum efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Enterprise Security", desc: "Bank-level security with end-to-end encryption" },
              { icon: Rocket, title: "Lightning Fast", desc: "Optimized performance for instant response times" },
              { icon: Users, title: "Team Collaboration", desc: "Seamless teamwork with real-time sync" },
              { icon: BarChart3, title: "Advanced Analytics", desc: "Deep insights with AI-powered reporting" }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700" />
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-6 text-center border border-gray-700 group-hover:border-transparent transition-all duration-700">
                  <feature.icon className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300" size={40} />
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of satisfied customers who have revolutionized their operations with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  <Play size={20} className="mr-2" />
                  Start Free Trial
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </button>
              <button className="group relative px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-700 hover:border-purple-500 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  <ArrowRight size={20} className="mr-2" />
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

export default ProductShowcase;