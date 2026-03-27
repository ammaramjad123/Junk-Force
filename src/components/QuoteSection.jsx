import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Send, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Truck,
  Home,
  Building2,
  Trash2,
  Package,
  Leaf,
  Hammer,
  Clock,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Heart,
  MessageCircle
} from "lucide-react";

export default function QuoteSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    date: "",
    time: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setIsDateOpen(false);
      }
      if (timeRef.current && !timeRef.current.contains(event.target)) {
        setIsTimeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { value: "residential", label: "Residential Junk Removal", icon: <Home size={18} />, desc: "Homes, apartments, garages" },
    { value: "commercial", label: "Commercial Cleanouts", icon: <Building2 size={18} />, desc: "Offices, retail, warehouses" },
    { value: "property", label: "Full Property Trash-Outs", icon: <Trash2 size={18} />, desc: "Move-outs, evictions" },
    { value: "single", label: "Single Item Pickup", icon: <Package size={18} />, desc: "Furniture, appliances" },
    { value: "yard", label: "Yard Debris & Demolition", icon: <Leaf size={18} />, desc: "Storm cleanup, landscaping" },
    { value: "construction", label: "Construction Debris Removal", icon: <Hammer size={18} />, desc: "Renovation waste" },
    { value: "same-day", label: "Same-Day & Scheduled Hauling", icon: <Truck size={18} />, desc: "24/7 emergency service" }
  ];

  const timeSlots = [
    { value: "8am-10am", label: "8:00 AM - 10:00 AM" },
    { value: "10am-12pm", label: "10:00 AM - 12:00 PM" },
    { value: "12pm-2pm", label: "12:00 PM - 2:00 PM" },
    { value: "2pm-4pm", label: "2:00 PM - 4:00 PM" },
    { value: "4pm-6pm", label: "4:00 PM - 6:00 PM" },
    { value: "6pm-8pm", label: "6:00 PM - 8:00 PM" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (serviceValue, serviceLabel) => {
    setFormData({ ...formData, service: serviceLabel });
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        address: "",
        date: "",
        time: "",
        description: ""
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#132641] to-[#0a1a2c] overflow-hidden py-20 md:py-28 lg:py-32" id="quote">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ee8c2c]/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#ee8c2c]/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Side - Enhanced Info Section */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Zap className="w-4 h-4 text-[#ee8c2c]" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#ee8c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Get a Quote
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Free, No-Obligation
                <br />
                <span className="text-[#ee8c2c]">Estimate</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg font-sans leading-relaxed">
                Tell us about your junk removal needs and we'll provide you with a 
                free, transparent quote within 30 minutes. No hidden fees, no surprises.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold text-xl mb-5 font-serif flex items-center gap-2">
                <Star size={20} className="text-[#ee8c2c]" />
                Why Choose JunkForce?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Clock size={18} />, text: "Same-day service available", color: "text-[#ee8c2c]" },
                  { icon: <CheckCircle size={18} />, text: "Free estimates, no hidden fees", color: "text-green-500" },
                  { icon: <Shield size={18} />, text: "Professional & insured team", color: "text-blue-400" },
                  { icon: <Leaf size={18} />, text: "Eco-friendly disposal (85%+ recycled)", color: "text-emerald-400" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-[#ee8c2c]/30 transition-all duration-300 group">
                    <div className={`${benefit.color} transition-transform group-hover:scale-110`}>
                      {benefit.icon}
                    </div>
                    <span className="text-white/80 text-sm font-sans">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Card - Fully Responsive */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-4 font-serif flex items-center gap-2">
                  <Heart size={18} className="text-[#ee8c2c]" />
                  Contact Us Directly
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Card */}
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#ee8c2c]/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-[#ee8c2c]/20 flex items-center justify-center group-hover:bg-[#ee8c2c] transition-all duration-300">
                      <Phone size={22} className="text-[#ee8c2c] group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-sans uppercase tracking-wide">Call Us</p>
                      <a href="tel:+19013509597" className="text-white font-bold text-[16px] sm:text-[14px] hover:text-[#ee8c2c] transition-colors">
                        (901) 350-9597
                      </a>
                    </div>
                  </div>
                  
                  {/* Email Card */}
                  <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#ee8c2c]/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-[#ee8c2c]/20 flex items-center justify-center group-hover:bg-[#ee8c2c] transition-all duration-300">
                      <Mail size={22} className="text-[#ee8c2c] group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-sans uppercase tracking-wide">Email Us</p>
                      <a href="mailto:info@junkforcetn.com" className="text-white text-[16px] sm:text-[14px] font-medium hover:text-[#ee8c2c] transition-colors break-all">
                        info@junkforcetn.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Response Guarantee */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 bg-[#ee8c2c]/10 rounded-xl p-4 border border-[#ee8c2c]/20">
              <div className="w-10 h-10 rounded-full bg-[#ee8c2c]/20 flex items-center justify-center animate-pulse">
                <MessageCircle size={20} className="text-[#ee8c2c]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">30-Minute Response Guarantee</p>
                <p className="text-white/50 text-xs">We'll get back to you within 30 minutes during business hours</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Quote Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-white font-bold text-2xl mb-6 font-serif text-center">Request Your Free Quote</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Quote Request Sent!</h4>
                  <p className="text-white/60">We'll get back to you within 30 minutes.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-white/70 text-sm font-sans mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-[#ee8c2c] focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm font-sans mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-[#ee8c2c] focus:outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm font-sans mb-2">
                        Phone *
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-[#ee8c2c] focus:outline-none transition-all"
                          placeholder="(901) 350-9597"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-white/70 text-sm font-sans mb-2">
                      Service Type *
                    </label>
                    <div className="relative" ref={dropdownRef}>
                      <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white cursor-pointer flex items-center justify-between transition-all hover:border-[#ee8c2c]"
                      >
                        <div className="flex items-center gap-2">
                          {formData.service ? (
                            <>
                              {services.find(s => s.label === formData.service)?.icon}
                              <span className="text-sm">{formData.service}</span>
                            </>
                          ) : (
                            <span className="text-white/40 text-sm">Select a service</span>
                          )}
                        </div>
                        <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                      </div>
                      
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#132641] border border-white/20 rounded-xl overflow-hidden z-20 shadow-2xl max-h-80 overflow-y-auto">
                          {services.map((service) => (
                            <button
                              key={service.value}
                              type="button"
                              onClick={() => handleServiceSelect(service.value, service.label)}
                              className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors flex items-center gap-3"
                            >
                              <div className="text-[#ee8c2c]">{service.icon}</div>
                              <div>
                                <div className="text-sm font-medium">{service.label}</div>
                                <div className="text-xs text-white/50">{service.desc}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-white/70 text-sm font-sans mb-2">
                      Address
                    </label>
                    <div className="relative">
                      <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-[#ee8c2c] focus:outline-none transition-all"
                        placeholder="Memphis, TN"
                      />
                    </div>
                  </div>

                  {/* Date & Time Row - Enhanced Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Date Dropdown */}
                    <div>
                      <label className="block text-white/70 text-sm font-sans mb-2">
                        Preferred Date *
                      </label>
                      <div className="relative" ref={dateRef}>
                        <div
                          onClick={() => setIsDateOpen(!isDateOpen)}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white cursor-pointer flex items-center justify-between transition-all hover:border-[#ee8c2c]"
                        >
                          <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-white/40" />
                            <span className="text-sm">
                              {formData.date || "Select date"}
                            </span>
                          </div>
                          <ChevronDown size={18} className={`transition-transform ${isDateOpen ? "rotate-180" : ""}`} />
                        </div>
                        
                        {isDateOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-[#132641] border border-white/20 rounded-xl overflow-hidden z-20 shadow-2xl">
                            <input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={(e) => {
                                handleChange(e);
                                setIsDateOpen(false);
                              }}
                              className="w-full px-4 py-3 bg-[#132641] text-white border-b border-white/10 focus:outline-none"
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Time Dropdown */}
                    <div>
                      <label className="block text-white/70 text-sm font-sans mb-2">
                        Preferred Time *
                      </label>
                      <div className="relative" ref={timeRef}>
                        <div
                          onClick={() => setIsTimeOpen(!isTimeOpen)}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white cursor-pointer flex items-center justify-between transition-all hover:border-[#ee8c2c]"
                        >
                          <div className="flex items-center gap-2">
                            <Clock size={18} className="text-white/40" />
                            <span className="text-sm">
                              {formData.time || "Select time"}
                            </span>
                          </div>
                          <ChevronDown size={18} className={`transition-transform ${isTimeOpen ? "rotate-180" : ""}`} />
                        </div>
                        
                        {isTimeOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-[#132641] border border-white/20 rounded-xl overflow-hidden z-20 shadow-2xl">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot.value}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, time: slot.label });
                                  setIsTimeOpen(false);
                                }}
                                className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors text-sm"
                              >
                                {slot.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-white/70 text-sm font-sans mb-2">
                      Tell us about your junk (optional)
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-[#ee8c2c] focus:outline-none transition-all resize-none"
                      placeholder="Describe the items you need removed (furniture, appliances, construction debris, etc.)"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#ee8c2c] to-[#f5a450] text-white font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Free Quote
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-white/40 text-xs font-sans">
                    By submitting, you agree to our terms and privacy policy.
                    We'll never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}