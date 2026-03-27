import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, Mail, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you respond to a junk removal request?",
    answer: "We aim to respond to all enquiries within 30 minutes during business hours. For same-day service, we can often be at your location within 2-4 hours depending on availability. Emergency services are available 24/7."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! All estimates are completely free with no obligation. We provide transparent, upfront pricing based on the volume and type of items. What we quote is exactly what you pay—no hidden fees, no surprises."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely! JunkForce is fully licensed and insured for your peace of mind. Our professional team is trained, certified, and carries comprehensive insurance to protect your property during the removal process."
  },
  {
    question: "What items do you accept?",
    answer: "We accept a wide range of items including furniture, appliances, electronics, construction debris, yard waste, and general household junk. We also handle commercial cleanouts and property trash-outs. If you're unsure about a specific item, just give us a call!"
  },
  {
    question: "What happens to the junk after you remove it?",
    answer: "We're committed to eco-friendly disposal. 85%+ of all waste is recycled or donated to local Memphis charities. We sort items responsibly to minimize landfill waste and support our community through donations whenever possible."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a1a2c] to-[#0e1e2e] overflow-hidden py-20 md:py-28 lg:py-32" id="faq">
      {/* Background Pattern - Matching the rest of the website */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Matching website style */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <HelpCircle className="w-4 h-4 text-[#ee8c2c]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Got Questions?
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked <span className="text-[#ee8c2c]">Questions</span>
          </h2>
          
          <p className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg font-sans">
            Find answers to common questions about our junk removal services.
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Accordion - Matching card style from other sections */}
       <div className="max-w-6xl px-4 sm:px-6 mx-auto space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white/10 border-[#ee8c2c]/30 shadow-lg shadow-[#ee8c2c]/5"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#ee8c2c]/20"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span
                    className={`text-base sm:text-lg font-semibold transition-colors duration-300 font-sans ${
                      isOpen ? "text-[#ee8c2c]" : "text-white/90 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-300 flex-shrink-0 ml-4 ${
                      isOpen 
                        ? "rotate-180 text-[#ee8c2c]" 
                        : "text-white/50 group-hover:text-white/80"
                    }`}
                  />
                </button>

                {/* Answer with Smooth Animation */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-white/60 text-sm sm:text-base leading-relaxed font-sans">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      

       
      </div>
    </section>
  );
}