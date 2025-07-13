import React, { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  ArrowRight,
  Heart,
  Send,
} from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "#",
    gradient: "from-blue-600 to-blue-400",
    hoverColor: "hover:text-blue-400"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "#",
    gradient: "from-sky-600 to-sky-400",
    hoverColor: "hover:text-sky-400"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "#",
    gradient: "from-pink-600 to-purple-400",
    hoverColor: "hover:text-pink-400"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "#",
    gradient: "from-blue-700 to-blue-500",
    hoverColor: "hover:text-blue-500"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "#",
    gradient: "from-gray-700 to-gray-500",
    hoverColor: "hover:text-gray-400"
  }
];

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" },
  { name: "Careers", href: "#careers" }
];

const services = [
  { name: "Web Development", href: "#" },
  { name: "Mobile Apps", href: "#" },
  { name: "Software Development", href: "#" },
  { name: "AI Automation", href: "#" },
  { name: "Digital Marketing", href: "#" },
  { name: "Video Editing", href: "#" }
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = () => {
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
      alert('Thank you for subscribing!');
    }, 2000);
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 px-10 lg:px-20 py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                CREATIVE<span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text"> HUB</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We&apos;re a passionate team of developers, designers, and innovators dedicated to bringing your digital dreams to life with cutting-edge technology and creative excellence.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={16} />
                <span className="text-sm">creativehub@gmil.com</span>
              </div>
              {/* <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                <MapPin size={16} />
                <span className="text-sm">Rayan Complex, 1&apos;st Floor Rahuman Street, Aloor<br />Kanyakumari District, TamilNadu</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button
                onClick={handleNewsletterSubmit}
                disabled={isSubscribing || !email}
                className="w-full group relative px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-700 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubscribing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Subscribe
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Social Links Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-2">Follow Us</h4>
              <p className="text-gray-400 text-sm">Stay connected on social media</p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`group relative p-3 bg-gray-800 rounded-full border border-gray-700 transition-all duration-300 hover:border-transparent hover:scale-110 ${social.hoverColor}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <social.icon size={20} className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
        </div> */}
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 Creative Hub. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>in Tamilnadu</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 group p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 z-50"
      >
        <ChevronUp size={24} className="group-hover:animate-bounce" />
      </button> */}
      
      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
    </footer>
  );
};

export default Footer;