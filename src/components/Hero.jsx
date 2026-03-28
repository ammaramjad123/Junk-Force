import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Phone, 
  Calendar, 
  ArrowRight, 
  Star, 
  Clock, 
  Shield, 
  Sparkles,
  Users,
  Award,
  Zap,
  Leaf
} from "lucide-react";

export default function HeroSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Clean Stats Data
  const stats = [
    { 
      label: "Projects Completed", 
      value: "2,500+", 
      icon: <Users size={24} />,
      description: "Satisfied customers"
    },
    { 
      label: "Years Experience", 
      value: "10+", 
      icon: <Award size={24} />,
      description: "Trusted service"
    },
    { 
      label: "Response Time", 
      value: "< 2 Hrs", 
      icon: <Zap size={24} />,
      description: "Fast arrival"
    },
    { 
      label: "Waste Recycled", 
      value: "85%+", 
      icon: <Leaf size={24} />,
      description: "Eco-friendly"
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#132641] pt-38 sm:pt-50">
      {/* 4K Cleaning Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&w=2400"
            alt="Professional junk removal team cleaning"
            className="w-full h-full object-cover"
          />
          {/* Multiple Overlay Layers for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#132641]/90 via-[#132641]/70 to-[#132641]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132641] via-transparent to-[#132641]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#132641_90%)]" />
        </motion.div>
      </div>

      {/* Animated Grain Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ee8c2c]/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, -100, -200],
              opacity: [0, 0.5, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 mb-6 md:mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#ee8c2c]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white/90 font-['Montserrat']">
              Premium Junk Removal Services
            </span>
          </motion.div>

          {/* Main Heading - Montserrat Font */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-black text-white tracking-tighter leading-[1.1] md:leading-[1.05] mb-6 font-['Montserrat']"
          >
            Fast & Affordable
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#ee8c2c] via-[#f5a450] to-[#ee8c2c] bg-clip-text text-transparent">
                Junk Removal
              </span>
            
            </span>
            <br />
            <span className="text-white/90">in Memphis, TN</span>
          </motion.h1>

          {/* Description - Plus Jakarta Sans Font */}
          <motion.p
            variants={itemVariants}
            className="text-white/70 max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 px-4 font-['Plus_Jakarta_Sans']"
          >
            Professional, eco-friendly junk removal services for homes and businesses.
            Same-day service available. Free estimates with no hidden fees.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="tel:+19013509597"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 overflow-hidden font-['Montserrat']"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Call Now: (901) 350-9597</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ee8c2c]/0 via-[#ee8c2c]/20 to-[#ee8c2c]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <div className="inline-block transition-transform duration-300 hover:-translate-y-1">
  <a href="#quote">

  <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#ee8c2c] to-[#f5a450] text-white font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden font-['Montserrat'] cursor-pointer">

    {/* Gradient Hover Overlay */}
    <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#d47a1f] to-[#ee8c2c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Content (kept above overlay) */}
    <Calendar className="w-5 h-5 relative z-10" />

    <span className="relative z-10">
      Get Free Quote
    </span>

    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

  </button>
  </a>
</div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#ee8c2c]/20 flex items-center justify-center">
                <Star className="w-4 h-4 text-[#ee8c2c] fill-[#ee8c2c]" />
              </div>
              <span className="text-sm text-white/70 font-['Plus_Jakarta_Sans']">4.9 ★ (500+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#ee8c2c]/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-[#ee8c2c]" />
              </div>
              <span className="text-sm text-white/70 font-['Plus_Jakarta_Sans']">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#ee8c2c]/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#ee8c2c]" />
              </div>
              <span className="text-sm text-white/70 font-['Plus_Jakarta_Sans']">Licensed & Insured</span>
            </div>
          </motion.div>

          {/* Stats Section - Clean Design */}
          {/* Premium Trust Strip */}
<motion.div
  variants={itemVariants}
  className="mt-20 pt-5 border-t border-white/10"
>
  <div className="relative">

    {/* Edge fade */}
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#132641] to-transparent pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#132641] to-transparent pointer-events-none" />

    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14 opacity-90">

      {/* Fast Service */}
      <div className="flex items-center gap-3 group">
        <Zap className="w-6 h-6 text-white/50 group-hover:text-[#ee8c2c] transition duration-300" />
        <span className="text-xl md:text-2xl font-black italic tracking-wide text-white/60 group-hover:text-white transition duration-300 font-['Montserrat']">
          FAST SERVICE
        </span>
      </div>

      {/* Reliable */}
      <div className="flex items-center gap-3 group">
        <Star className="w-6 h-6 text-white/50 group-hover:text-[#ee8c2c] transition duration-300" />
        <span className="text-xl md:text-2xl font-black italic tracking-wide text-white/60 group-hover:text-white transition duration-300 font-['Montserrat']">
          RELIABLE
        </span>
      </div>

      {/* Licensed & Insured */}
      <div className="flex items-center gap-3 group">
        <Shield className="w-6 h-6 text-white/50 group-hover:text-[#ee8c2c] transition duration-300" />
        <span className="text-xl md:text-2xl font-black italic tracking-wide text-white/60 group-hover:text-white transition duration-300 font-['Montserrat']">
          LICENSED & INSURED
        </span>
      </div>

      {/* Eco Friendly */}
      <div className="flex items-center gap-3 group">
        <Leaf className="w-6 h-6 text-white/50 group-hover:text-[#ee8c2c] transition duration-300" />
        <span className="text-xl md:text-2xl font-black italic tracking-wide text-white/60 group-hover:text-white transition duration-300 font-['Montserrat']">
          ECO-FRIENDLY
        </span>
      </div>

    </div>
  </div>
</motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#132641] to-transparent z-10" />
    </section>
  );
}

// Stat Item Component - Clean Design
function StatItem({ label, value, icon, description }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className="flex flex-col items-center text-center gap-2 group cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full bg-[#ee8c2c]/10 flex items-center justify-center text-[#ee8c2c] group-hover:bg-[#ee8c2c]/20 transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-2xl md:text-3xl font-black text-white tracking-tighter font-['Montserrat']">
          {value}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-white/60 font-['Montserrat']">
          {label}
        </span>
        <span className="text-[10px] text-white/40 font-['Plus_Jakarta_Sans']">
          {description}
        </span>
      </div>
    </motion.div>
  );
}