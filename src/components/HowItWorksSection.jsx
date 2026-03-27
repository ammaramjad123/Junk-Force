import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, Truck, Sparkles, CheckCircle2, ArrowRight, Zap } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Request a Free Quote",
      desc: "Call us or fill out our online form. Tell us about your junk removal needs and we'll schedule a time that works for you.",
      icon: Phone,
      color: "from-[#ee8c2c] to-[#f5a450]"
    },
    {
      title: "Get Your Price",
      desc: "Receive a transparent, upfront quote based on volume and type of items. No hidden fees, no surprises—just honest pricing you can trust.",
      icon: Calendar,
      color: "from-[#ee8c2c] to-[#f5a450]"
    },
    {
      title: "We Haul It Away",
      desc: "Our professional team arrives on time, does all the heavy lifting, and efficiently removes your junk with care and respect for your property.",
      icon: Truck,
      color: "from-[#ee8c2c] to-[#f5a450]"
    },
    {
      title: "Done & Clean",
      desc: "We leave your space spotless and dispose of items responsibly. 85%+ of waste is recycled or donated to local Memphis charities.",
      icon: Sparkles,
      color: "from-[#ee8c2c] to-[#f5a450]"
    }
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0a1a2c] to-[#0e1e2e]" id="how-it-works">
      {/* Subtle Energy Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(238,140,44,0.06),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-[#ee8c2c]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Simple Process
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white">
            How It <span className="text-[#ee8c2c]">Works</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">
            Four simple steps to a clutter-free space. No stress, no hassle—just exceptional service.
          </p>
        </motion.div>

        {/* Flow System */}
        <div className="relative mt-20">
          {/* Main Energy Line */}
          <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full overflow-hidden">
            <div className="absolute inset-0 bg-white/10" />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2 }}
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#ee8c2c] via-[#f5a450] to-[#ee8c2c]"
            />
            {/* Moving Energy Pulse */}
            <motion.div
              animate={{ y: ["-20%", "120%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 -translate-x-1/2 w-[8px] h-[80px] rounded-full bg-gradient-to-b from-white/80 via-[#ee8c2c] to-transparent blur-sm"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.25,
                    type: "spring",
                    stiffness: 120,
                  }}
                  viewport={{ once: true }}
                  className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className="relative max-w-[90%] sm:max-w-md p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:border-[#ee8c2c]/30 transition-all duration-300">
                    {/* Step Number */}
                    <div className={`absolute -top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center text-sm font-bold shadow-lg`}>
                      {i + 1}
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#ee8c2c]/10 flex items-center justify-center text-[#ee8c2c]">
                        <StepIcon size={24} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-white font-serif">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-white/60 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Connection Line to Center */}
                    <div className={`hidden sm:block absolute top-1/2 ${i % 2 === 0 ? "right-[-40px]" : "left-[-40px]"} w-[40px] h-[2px] bg-gradient-to-r from-[#ee8c2c] to-[#f5a450] opacity-40`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

       
      </div>
    </section>
  );
}