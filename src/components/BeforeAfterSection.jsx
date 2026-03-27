import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { CheckCircle, Clock, Truck, Shield, Eye } from "lucide-react";

export default function BeforeAfterSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const beforeAfter = {
    before: "/images/before.png",
    after: "/images/after.png"
  };

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a1a2c] to-[#132641] overflow-hidden pt-13 sm:pt-9" id="before-after">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#ee8c2c]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#ee8c2c]/5 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-30" />
      </div>

      {/* Section Header */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#ee8c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Before & After
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          See the <span className="text-[#ee8c2c]">Transformation</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-sans"
        >
          Watch how we transform cluttered spaces into clean, organized areas.
          Our team works quickly and efficiently to get the job done right.
        </motion.p>
      </div>

      {/* Before & After Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Before Image */}
          <motion.div
            variants={itemVariants}
            className="group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#ee8c2c]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ee8c2c]/10">
              <img
                src={beforeAfter.before}
                alt="Before - Cluttered kitchen with junk"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
             
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
            </div>
          </motion.div>

          {/* After Image */}
          <motion.div
            variants={itemVariants}
            className="group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#ee8c2c]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ee8c2c]/10">
              <img
                src={beforeAfter.after}
                alt="After - Clean, organized kitchen"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#ee8c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>500+</div>
            <div className="text-white/60 text-sm font-sans">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#ee8c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>2,500+</div>
            <div className="text-white/60 text-sm font-sans">Tons of Waste Removed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#ee8c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>85%+</div>
            <div className="text-white/60 text-sm font-sans">Waste Recycled</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#ee8c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>&lt; 2 Hrs</div>
            <div className="text-white/60 text-sm font-sans">Response Time</div>
          </div>
        </div>
      </motion.div>


    </section>
  );
}