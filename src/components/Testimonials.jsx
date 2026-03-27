import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Star, Quote, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      title: "CEO, Thompson Properties",
      location: "Memphis, TN",
      rating: 5,
      text: "JunkForce has been our go-to for property cleanouts. They're reliable, professional, and always leave the site spotless. Highly recommend for any real estate needs!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      service: "Property Trash-Outs"
    },
    {
      id: 2,
      name: "David Chen",
      title: "Operations Manager",
      location: "Germantown, TN",
      rating: 5,
      text: "The team at JunkForce is exceptional! They handled our commercial cleanout with minimal disruption. Professional, efficient, and fairly priced.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      service: "Commercial Cleanouts"
    },
    {
      id: 3,
      name: "James Wilson",
      title: "Homeowner",
      location: "Cordova, TN",
      rating: 5,
      text: "Outstanding service! They removed years of junk from my garage in just a few hours. The team was friendly and even swept up afterward. Will use them again!",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      service: "Residential Junk Removal"
    },
    {
      id: 4,
      name: "Robert Martinez",
      title: "General Contractor",
      location: "Bartlett, TN",
      rating: 5,
      text: "Best construction debris removal service in Memphis! They're always on time, handle heavy materials with care, and their pricing is transparent. 10/10!",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      service: "Construction Debris"
    },
    {
      id: 5,
      name: "William Anderson",
      title: "Property Manager",
      location: "Midtown, Memphis",
      rating: 5,
      text: "I manage multiple properties and JunkForce has never let me down. Fast response, fair pricing, and they always go above and beyond. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      service: "Property Cleanouts"
    },
    {
      id: 6,
      name: "Christopher Lee",
      title: "Small Business Owner",
      location: "Collierville, TN",
      rating: 5,
      text: "Called for same-day service and they were at my door within 2 hours. Removed all the old furniture and appliances from my store. Exceptional service!",
      image: "https://randomuser.me/api/portraits/men/82.jpg",
      service: "Commercial Cleanouts"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative w-full bg-gradient-to-b from-[#132641] to-[#0a1a2c] overflow-hidden py-20 md:py-28 lg:py-32" id="testimonials">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ee8c2c]/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#ee8c2c]/5 rounded-full blur-[120px] animate-pulse delay-1000" />
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
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What Our <span className="text-[#ee8c2c]">Customers Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-sans"
        >
          Don't just take our word for it. Here's what our satisfied customers have to say about their experience with JunkForce.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#ee8c2c]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ee8c2c]/10 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={40} className="text-white" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#ee8c2c] text-[#ee8c2c]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 flex-grow font-sans">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#ee8c2c]/30"
                  />
                  <div>
                    <h4 className="text-white font-bold font-serif text-base md:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/50 text-xs font-sans">
                      {testimonial.title}
                    </p>
                    <p className="text-[#ee8c2c]/70 text-xs font-sans mt-0.5">
                      {testimonial.location} • {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trust Badges */}
      <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#ee8c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>500+</div>
              <div className="text-white/60 text-sm font-sans">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#ee8c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>4.9 ★</div>
              <div className="text-white/60 text-sm font-sans">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#ee8c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>98%</div>
              <div className="text-white/60 text-sm font-sans">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#ee8c2c]" style={{ fontFamily: "'Playfair Display', serif" }}>10+</div>
              <div className="text-white/60 text-sm font-sans">Years of Trust</div>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
}