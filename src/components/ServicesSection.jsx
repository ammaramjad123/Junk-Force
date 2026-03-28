import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Home, 
  Building2, 
  Trash2, 
  Package, 
  Leaf, 
  Hammer,
  Truck,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Star,
  CheckCircle,
  Zap,
  Phone,
  Calendar
} from "lucide-react";

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  const services = [
    {
      id: 1,
      title: "Residential Junk Removal",
      description: "Transform your home from cluttered to clean. We handle everything from old furniture to garage cleanouts with care and efficiency.",
      features: ["Same-day service", "Free estimates", "Eco-friendly disposal", "No hidden fees"],
      image: "/images/services/residential.jpg",
      icon: <Home size={28} />,
      badge: "Most Popular",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      id: 2,
      title: "Commercial Cleanouts",
      description: "Minimal disruption to your business. We handle office furniture, retail fixtures, and warehouse cleanouts professionally.",
      features: ["After-hours available", "Bulk pricing", "Professional team", "Licensed & insured"],
      image: "/images/services/commercial.jpg",
      icon: <Building2 size={28} />,
      badge: "Business",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 3,
      title: "Full Property Trash-Outs",
      description: "Complete property restoration for move-outs, evictions, and foreclosures. Fast, thorough, and documented service.",
      features: ["Full property cleanup", "Fast turnaround", "Documentation provided", "24/7 available"],
      image: "/images/services/property.jpg",
      icon: <Trash2 size={28} />,
      badge: "Emergency",
      gradient: "from-red-500/20 to-orange-500/20",
    },
    {
      id: 4,
      title: "Single Item Pickup",
      description: "Need one item gone? No problem. No minimum fee, same-day available for furniture, appliances, and mattresses.",
      features: ["No minimum fee", "Same-day available", "White glove service", "Quick response"],
      image: "/images/services/single-item.jpg",
      icon: <Package size={28} />,
      badge: "Flexible",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 5,
      title: "Yard Debris & Demolition",
      description: "Storm cleanup, landscaping waste, and light demolition. We recycle green waste and handle heavy debris professionally.",
      features: ["Green waste recycling", "Storm cleanup", "Seasonal service", "Heavy equipment"],
      image: "/images/services/yard-debris.jpg",
      icon: <Leaf size={28} />,
      badge: "Eco-Friendly",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      id: 6,
      title: "Construction Debris Removal",
      description: "Keep your construction site clean and safe. We handle renovation waste, demo debris, and heavy materials.",
      features: ["Heavy debris removal", "Dumpster alternatives", "Permit assistance", "Scheduled service"],
      image: "/images/services/construction.jpg",
      icon: <Hammer size={28} />,
      badge: "Contractor",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 7,
      title: "Same-Day & Scheduled Hauling",
      description: "Emergency pickup or regular service? We adapt to your schedule with flexible options and volume discounts.",
      features: ["24/7 emergency service", "Flexible scheduling", "Volume discounts", "Priority dispatch"],
      image: "/images/services/same-day.jpg",
      icon: <Truck size={28} />,
      badge: "Fast Response",
      gradient: "from-orange-500/20 to-amber-500/20",
    },
  ];


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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#132641] to-[#0a1a2c] overflow-hidden" id="services">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ee8c2c]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#ee8c2c]/5 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern Overlay - FIXED VERSION */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-30" />
      </div>

      {/* Section Header */}
      <div ref={ref} className="relative z-10 pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#ee8c2c]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white/90" style={{ fontFamily: "'Playfair Display', serif" }}>
              Premium Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What We Offer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee8c2c] to-[#f5a450]">
              Premium Junk Removal
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            From residential cleanouts to commercial projects, we deliver excellence
            with eco-friendly practices and professional service.
          </motion.p>
        </div>
      </div>

      {/* Services Grid - Elegant Card Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              
              
              {/* Card Content */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#ee8c2c]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ee8c2c]/10">
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-2 py-1 rounded-full bg-gradient-to-r from-[#ee8c2c] to-[#f5a450] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      {service.badge}
                    </div>
                  </div>
                )}

                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132641] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#132641] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#ee8c2c]/20 flex items-center justify-center text-[#ee8c2c] group-hover:bg-[#ee8c2c] group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <CheckCircle size={10} className="text-[#ee8c2c]" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                 <a href="#quote">

                  <button className="w-full group/btn relative overflow-hidden rounded-xl bg-white/10 border border-white/20 py-3 text-white font-semibold transition-all duration-300 hover:bg-[#ee8c2c] hover:border-[#ee8c2c] cursor-pointer">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Free Quote
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ee8c2c] to-[#f5a450] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                 </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      
      
    </section>
  );
}