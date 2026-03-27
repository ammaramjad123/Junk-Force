import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Shield, 
  Truck, 
  Leaf, 
  Clock, 
  Star, 
  Heart,
  Award,
  ThumbsUp,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  DollarSign,
  Recycle,
  Sparkles
} from "lucide-react";

export default function WhyChooseUsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const reasons = [
    {
      id: 1,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind. Our team is professionally trained and certified to handle any junk removal job safely.",
      icon: <Shield size={32} />,
      stats: "100% Insured"
    },
    {
      id: 2,
      title: "Eco-Friendly Disposal",
      description: "85%+ of all waste is recycled or donated to local Memphis charities. We're committed to reducing landfill waste and helping our community.",
      icon: <Leaf size={32} />,
      stats: "85%+ Recycled"
    },
    {
      id: 3,
      title: "Same-Day Service",
      description: "Need junk gone today? We offer same-day service with response times under 2 hours. Quick, efficient, and reliable.",
      icon: <Clock size={32} />,
      stats: "< 2 Hrs Response"
    },
    {
      id: 4,
      title: "Free Estimates",
      description: "No hidden fees, no surprises. Get a transparent, upfront quote before we start any work. What we quote is what you pay.",
      icon: <DollarSign size={32} />,
      stats: "100% Free"
    },
    {
      id: 5,
      title: "Professional Team",
      description: "Uniformed, professional, and respectful of your property. Our team arrives on time and treats your home like their own.",
      icon: <Users size={32} />,
      stats: "10+ Years Experience"
    },
    {
      id: 6,
      title: "5-Star Service",
      description: "Rated 4.9 stars by 500+ happy customers. We're committed to excellence and your complete satisfaction, guaranteed.",
      icon: <Star size={32} />,
      stats: "4.9 ★ Rating"
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a1a2c] to-[#0e1e2e] overflow-hidden py-24 md:py-32 lg:py-40" id="why-choose-us">
      {/* Minimal Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Award className="w-4 h-4 text-[#ee8c2c]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              Why Memphis Trusts Us
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose{" "}
            <span className="relative inline-block">
              <span className="text-[#ee8c2c]">JunkForce?</span>
              <motion.div 
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ee8c2c] to-transparent"
              />
            </span>
          </h2>
          
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We're not just another junk removal company. We're your trusted Memphis partner for a cleaner, greener community.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              onMouseEnter={() => setActiveFeature(reason.id)}
              onMouseLeave={() => setActiveFeature(null)}
              className="group relative"
            >
              <div className={`
                relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500
                border border-white/10 hover:border-[#ee8c2c]/40
                hover:shadow-2xl hover:shadow-[#ee8c2c]/10
                ${activeFeature === reason.id ? 'scale-[1.02]' : 'scale-100'}
                h-full flex flex-col
              `}>
                {/* Icon Container */}
                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent
                  flex items-center justify-center text-[#ee8c2c]
                  transition-all duration-500 group-hover:scale-110 group-hover:bg-[#ee8c2c]/20
                  border border-white/10 mb-6
                `}>
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 font-serif">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6 font-sans flex-grow">
                  {reason.description}
                </p>

                {/* Stats Badge */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ee8c2c]" />
                    <span className="text-white/40 text-xs font-sans uppercase tracking-wide">
                      {reason.stats}
                    </span>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ee8c2c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      
      </div>
    </section>
  );
}