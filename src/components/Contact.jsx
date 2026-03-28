import React, { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle,
  ArrowRight,
  Headphones,
  Users,
  Shield,
  Sparkles,
  User,
  AtSign,
  AlertCircle,
  Loader2,
  ChevronRight
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    service: 'general'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
  if (isSubmitted) {
    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 4000); // form returns after 4 seconds

    return () => clearTimeout(timer);
  }
}, [isSubmitted]);

  const services = [
    { value: 'general', label: 'General Enquiry' },
    { value: 'residential', label: 'Residential Junk Removal' },
    { value: 'commercial', label: 'Commercial Cleanouts' },
    { value: 'property', label: 'Property Trash-Outs' },
    { value: 'construction', label: 'Construction Debris' },
    { value: 'same-day', label: 'Same-Day Service' }
  ];

  const benefits = [
    { icon: <Headphones className="w-5 h-5" />, text: '24/7 Customer Support' },
    { icon: <Clock className="w-5 h-5" />, text: 'Same-Day Response' },
    { icon: <Shield className="w-5 h-5" />, text: 'Licensed & Insured' },
    { icon: <Users className="w-5 h-5" />, text: 'Professional Team' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Emergency Service Only' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s+\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = validateForm();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_wtax8g9",          // your service id
      "template_fo79inb",         // your template id
      {
         fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    service: services.find(s => s.value === formData.service)?.label,
    message: formData.message,
        title: "Contact Form Submission"
      },
      "aK-LjuvacQU3cwdWP"          // your public key
    );

    setIsSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
      service: "general"
    });

  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Something went wrong. Please try again.");
  }

  setIsSubmitting(false);
};

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['(901) 350-9597'],
      action: 'Call Now',
      link: 'tel:+19013509597',
      color: 'from-[#ee8c2c] to-[#f5a450]'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['junkforce901@gmail.com'],
      action: 'Send Email',
      link: 'mailto:junkforce901@gmail.com',
      color: 'from-[#ee8c2c] to-[#f5a450]'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Service Area',
      details: ['Memphis, TN', '& Surrounding Areas'],
      action: 'Get Directions',
      link: '#',
      color: 'from-[#ee8c2c] to-[#f5a450]'
    }
  ];

  

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a1a2c] to-[#0e1e2e] overflow-hidden py-20 md:py-28 lg:py-32" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#ee8c2c]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Get in Touch
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Let's Clear the Clutter
            <span className="block text-[#ee8c2c] mt-2">
              Together
            </span>
          </h1>
          <p className="text-white/50 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl">
            Have questions about our junk removal services? Ready to book your appointment? 
            Our team is here to help you every step of the way.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="relative">
          {/* Floating Background Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ee8c2c]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ee8c2c]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Contact Form */}
              <div className="p-6 sm:p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-serif">Send us a message</h2>
                  <p className="text-white/50 text-sm md:text-base">Fill out the form below and we'll get back to you within 30 minutes.</p>
                </div>

                {isSubmitted ? (
                  <div className="bg-gradient-to-r from-[#ee8c2c]/10 to-[#f5a450]/10 rounded-2xl p-8 text-center animate-fade-in border border-[#ee8c2c]/20">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ee8c2c] to-[#f5a450] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">Message Sent!</h3>
                    <p className="text-white/60">Thank you for reaching out. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-white/70 mb-2">Full Name *</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'fullName' ? 'transform scale-[1.02]' : ''}`}>
                        <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'fullName' ? 'text-[#ee8c2c]' : 'text-white/40'}`} />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('fullName')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none bg-white/5 text-white placeholder-white/30 ${
                            errors.fullName 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-white/10 focus:border-[#ee8c2c] hover:border-[#ee8c2c]/50'
                          }`}
                          placeholder="John Smith"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white/70 mb-2">Email Address *</label>
                        <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}>
                          <AtSign className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-[#ee8c2c]' : 'text-white/40'}`} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none bg-white/5 text-white placeholder-white/30 ${
                              errors.email 
                                ? 'border-red-500 focus:border-red-500' 
                                : 'border-white/10 focus:border-[#ee8c2c] hover:border-[#ee8c2c]/50'
                            }`}
                            placeholder="john@example.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white/70 mb-2">Phone Number *</label>
                        <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'transform scale-[1.02]' : ''}`}>
                          <Phone className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'phone' ? 'text-[#ee8c2c]' : 'text-white/40'}`} />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none bg-white/5 text-white placeholder-white/30 ${
                              errors.phone 
                                ? 'border-red-500 focus:border-red-500' 
                                : 'border-white/10 focus:border-[#ee8c2c] hover:border-[#ee8c2c]/50'
                            }`}
                            placeholder="(901) 350-9597"
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service Type Dropdown */}
                    <div>
                      <label className="block text-sm font-semibold text-white/70 mb-2">Service Type</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                        <div
                          onClick={() => setOpenDropdown(!openDropdown)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:border-[#ee8c2c]/50 transition-all duration-300"
                        >
                          <span className="text-white pl-8">
                            {services.find(s => s.value === formData.service)?.label}
                          </span>
                          <ChevronRight className={`w-4 h-4 text-white/40 transition-transform duration-300 ${openDropdown ? 'rotate-90' : ''}`} />
                        </div>
                        {openDropdown && (
                          <div className="absolute z-20 mt-2 w-full bg-[#0e1e2e] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                            {services.map((service, i) => (
                              <div
                                key={i}
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, service: service.value }));
                                  setOpenDropdown(false);
                                }}
                                className="px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white cursor-pointer transition-all duration-200"
                              >
                                {service.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-white/70 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/30 focus:border-[#ee8c2c] hover:border-[#ee8c2c]/50 transition-all duration-300 focus:outline-none resize-none"
                        placeholder="Tell us about the items you need removed..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-[#ee8c2c] to-[#f5a450] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                      {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 text-center">
                          <div className="text-[#ee8c2c]">{benefit.icon}</div>
                          <span className="text-white/50 text-xs">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </form>
                )}
              </div>

              {/* Right Side - Contact Information */}
              <div className="bg-gradient-to-br from-[#0e1e2e] to-[#0a1a2c] p-6 sm:p-8 md:p-10 border-l border-white/10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-serif">Connect With Us</h2>
                  <p className="text-white/50 text-sm md:text-base">We're here to help and answer any questions you might have.</p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4 mb-8">
                  {contactMethods.map((method, idx) => (
                    <a
                      key={idx}
                      href={method.link}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-1">{method.title}</h3>
                        {method.details.map((detail, i) => (
                          <p key={i} className="text-white/50 text-sm">{detail}</p>
                        ))}
                        <span className="inline-flex items-center gap-1 text-sm text-[#ee8c2c] mt-2 group-hover:gap-2 transition-all">
                          {method.action}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="border-t border-white/10 pt-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-[#ee8c2c]" />
                    <h3 className="font-semibold text-white">Office Hours</h3>
                  </div>
                  <div className="space-y-2">
                    {officeHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-white/50">{schedule.day}</span>
                        <span className="text-white/70">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

              

                {/* Social Links - Fixed with SVG Icons */}
                <div className="border-t border-white/10 pt-6">
                  <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#ee8c2c] flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                      <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#ee8c2c] flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                      <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#ee8c2c] flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                      <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <line x1="17" y1="7" x2="17.01" y2="7" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#ee8c2c] flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                      <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}