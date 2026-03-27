import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const SOCIALS = {
    facebook: "https://www.facebook.com/junkforcetn",
    instagram: "https://www.instagram.com/junkforcetn",
    twitter: "https://twitter.com/junkforcetn",
    linkedin: "https://www.linkedin.com/company/junkforcetn",
  };

  return (
    <footer className="bg-[#0a1a2c] border-t border-white/10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Left: Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="JunkForce"
                className="h-22 md:h-20 w-auto"
              />
            </div>
          </div>

          {/* Center: Tagline */}
          <div className="flex justify-center w-full md:w-auto text-center">
            <p className="text-sm md:text-base text-white/50 max-w-xl">
              Professional junk removal in Memphis. Same-day service. Free estimates. Eco-friendly disposal.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex justify-center md:justify-end items-center gap-6 w-full md:w-auto">
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="group transition-all duration-300"
            >
              <FaFacebook className="text-xl md:text-lg text-white/50 group-hover:text-[#ee8c2c] transition-colors duration-300" />
            </a>
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="group transition-all duration-300"
            >
              <FaInstagram className="text-xl md:text-lg text-white/50 group-hover:text-[#ee8c2c] transition-colors duration-300" />
            </a>
            <a
              href={SOCIALS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
              className="group transition-all duration-300"
            >
              <FaTwitter className="text-xl md:text-lg text-white/50 group-hover:text-[#ee8c2c] transition-colors duration-300" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="group transition-all duration-300"
            >
              <FaLinkedin className="text-xl md:text-lg text-white/50 group-hover:text-[#ee8c2c] transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-sm text-white/40">
          © {currentYear} JunkForce. All rights reserved. Memphis, TN.
        </p>
      </div>
    </footer>
  );
}