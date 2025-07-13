import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare, Star } from "lucide-react";

const contactMethods = [
  {
    title: "Email Us",
    icon: Mail,
    value: "hello@yourcompany.com",
    description: "Get a response within 24 hours",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    delay: "0ms"
  },
  {
    title: "Call Us",
    icon: Phone,
    value: "+1 (555) 123-4567",
    description: "Mon-Fri, 9AM-6PM EST",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    delay: "150ms"
  },
  {
    title: "Visit Us",
    icon: MapPin,
    value: "123 Business Ave, Suite 100",
    description: "New York, NY 10001",
    gradient: "from-green-500 via-emerald-500 to-lime-500",
    delay: "300ms"
  },
  {
    title: "Live Chat",
    icon: MessageSquare,
    value: "Available 24/7",
    description: "Instant support and quotes",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    delay: "450ms"
  },
];

const ContactMethodCard = ( method:any ) => {  
  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-700 hover:-translate-y-2 hover:scale-105"
      style={{ animationDelay: method.delay }}
    >
      {/* Animated background glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${method.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-1000`} />
      
      {/* Card container */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-6 min-h-48 overflow-hidden border border-gray-700 group-hover:border-transparent transition-all duration-700">
        
        {/* Animated gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-all duration-1000 rounded-2xl`} />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          
          {/* Icon container */}
          <div className="relative mb-4">
            <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all duration-700 scale-150`} />
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-full border-2 border-gray-600 group-hover:border-transparent transition-all duration-700 group-hover:scale-110">
              <method.icon 
                size={32} 
                className="text-white transition-all duration-700 transform group-hover:rotate-12"
              />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-white text-lg font-bold mb-2">
            {method.title}
          </h3>
          
          {/* Value */}
          <p className="text-gray-300 font-medium mb-2">
            {method.value}
          </p>
          
          {/* Description */}
          <p className="text-gray-400 text-sm">
            {method.description}
          </p>
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
      </div>
    </div>
  );
};

function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    }, 2000);
  };
  
  return (
    <div id="contact" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 p-10 lg:p-20">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block mb-4">
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Something
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text"> Amazing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your ideas into reality? We&apos;re here to help you every step of the way.
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
        </div>
        
        {/* Contact Methods Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {contactMethods.map((method, index) => (
            <ContactMethodCard key={index} method={method} index={index} />
          ))}
        </div>
        
        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl blur-xl opacity-30" />
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="mr-3" size={24} />
                Send us a message
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="software-development">Software Development</option>
                      <option value="ai-automation">AI Automation</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="video-editing">Video Editing</option>
                      <option value="banner-design">Banner Design</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Info & Features */}
          <div className="space-y-8">
            
            {/* Why Choose Us */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="mr-3" size={24} />
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Expert Team</h4>
                      <p className="text-gray-400 text-sm">Skilled professionals with years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Fast Delivery</h4>
                      <p className="text-gray-400 text-sm">Quick turnaround times without compromising quality</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">24/7 Support</h4>
                      <p className="text-gray-400 text-sm">Round-the-clock assistance for all your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Affordable Pricing</h4>
                      <p className="text-gray-400 text-sm">Competitive rates with transparent pricing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 rounded-2xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock className="mr-3" size={24} />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                    <p className="text-green-300 text-sm flex items-center">
                      <Globe size={16} className="mr-2" />
                      Emergency support available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-8">
              Don&apos;t wait! Let&apos;s discuss your ideas and turn them into reality. 
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </button>
              <button className="group relative px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-700 hover:border-purple-500 hover:scale-105">
                <span className="relative z-10">Schedule Call</span>
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

export default ContactUs;