import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Phone,
  Calendar,
  Menu,
  X,
  Shield,
  CheckCircle,
  Recycle,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Brand colors
  const brandOrange = "#ee8c2c";
  const brandNavy = "#132641";

  // Hash navigation function
  const handleHashNavigation = (link) => {
    const currentPath = location.pathname;
    const targetPath = link.targetPage || "/";
    const hash = link.path;
    
    if (currentPath === targetPath) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `${targetPath}${hash}`;
    }
  };

  // Scroll handling with hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="py-3 sm:py-4 transition-all duration-500">
            <div
              className={`relative mx-auto flex items-center justify-between transition-all duration-500 ${
                scrolled
                  ? "bg-[#132641]/95 backdrop-blur-xl rounded-full shadow-2xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3"
                  : "bg-[#132641]/90 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4"
              }`}
              style={{ backdropFilter: "blur(12px)" }}
            >
              {/* LOGO */}
              <Link
                to="/"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex-shrink-0 flex items-center"
              >
                <img
                  src="/logo.png"
                  alt="JunkForce"
                  className="object-contain transition-all duration-300 h-22 w-22 sm:h-24 sm:w-24 md:h-26 md:w-26 lg:h-32 lg:w-32"
                />
              </Link>

              {/* DESKTOP NAVIGATION */}
              <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-10 mx-4 xl:mx-8">
                <Link
                  to="/"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`group relative whitespace-nowrap text-base xl:text-lg font-semibold transition-colors duration-300 ${
                    isActive("/") ? "text-[#ee8c2c]" : "text-white hover:text-[#ee8c2c]"
                  }`}
                >
                  Home
                  <span
                    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                      isActive("/") ? "w-full bg-[#ee8c2c]" : "w-0 bg-[#ee8c2c]"
                    }`}
                  />
                </Link>

                <button
                  onClick={() => handleHashNavigation({ label: "Testimonials", path: "#testimonials", targetPage: "/" })}
                  className="group relative whitespace-nowrap text-base xl:text-lg font-semibold text-white hover:text-[#ee8c2c] transition-colors duration-300 cursor-pointer"
                >
                  Testimonials
                  <span className="absolute left-0 top-full mt-1 h-0.5 w-0 rounded-full bg-[#ee8c2c] transition-all duration-300 group-hover:w-full" />
                </button>

                <a
                  href="#services"
                  className={`group relative whitespace-nowrap text-base xl:text-lg font-semibold transition-colors duration-300 ${
                    isActive("/services") ? "text-[#ee8c2c]" : "text-white hover:text-[#ee8c2c]"
                  }`}
                >
                  Services
                  <span
                    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                      isActive("/services") ? "w-full bg-[#ee8c2c]" : "w-0 bg-[#ee8c2c]"
                    }`}
                  />
                </a>

                <button
                  onClick={() => handleHashNavigation({ label: "How It Works", path: "#how-it-works", targetPage: "/" })}
                  className="group relative whitespace-nowrap text-base xl:text-lg font-semibold text-white hover:text-[#ee8c2c] transition-colors duration-300 cursor-pointer"
                >
                  How It Works
                  <span className="absolute left-0 top-full mt-1 h-0.5 w-0 rounded-full bg-[#ee8c2c] transition-all duration-300 group-hover:w-full" />
                </button>

                <button
                  onClick={() => handleHashNavigation({ label: "Contact", path: "#contact", targetPage: "/" })}
                  className="group relative whitespace-nowrap text-base xl:text-lg font-semibold text-white hover:text-[#ee8c2c] transition-colors duration-300 cursor-pointer"
                >
                  Contact
                  <span className="absolute left-0 top-full mt-1 h-0.5 w-0 rounded-full bg-[#ee8c2c] transition-all duration-300 group-hover:w-full" />
                </button>
              </nav>

              {/* DESKTOP CTA BUTTONS */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4">
                <a
                  href="tel:+19013509597"
                  className="flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full font-bold text-sm xl:text-base bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Phone size={16} className="xl:w-[18px] xl:h-[18px]" />
                  <span>(901) 350-9597</span>
                </a>
                <a
                href="#quote">

                <button
                  className="flex items-center gap-2 px-5 xl:px-6 py-2 xl:py-2.5 rounded-full font-bold text-sm xl:text-base bg-[#ee8c2c] text-white shadow-lg hover:bg-[#d47a1f] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                  <Calendar size={16} className="xl:w-[18px] xl:h-[18px]" />
                  <span>Free Quote</span>
                </button>
                  </a>
              </div>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition hover:bg-white/10"
              >
                <Menu size={24} className="sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`relative h-full w-full overflow-y-auto transition-all duration-500 transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="min-h-screen bg-[#132641] shadow-2xl">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <img
                  src="/logo.png"
                  alt="JunkForce"
                  className="h-28 w-28 sm:h-24 sm:w-24 object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition hover:bg-white/10"
              >
                <X size={24} className="sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col p-5 sm:p-6 space-y-2">
              <Link
                to="/"
                className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
                  isActive("/") 
                    ? "bg-[#ee8c2c]/20 text-[#ee8c2c] border-l-4 border-[#ee8c2c]" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <button
                onClick={() => {
                  handleHashNavigation({ label: "Testimonials", path: "#testimonials", targetPage: "/" });
                  setMobileOpen(false);
                }}
                className="py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 text-left"
              >
                Testimonials
              </button>

              <a
                href="#services"
                className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
                  isActive("/services") 
                    ? "bg-[#ee8c2c]/20 text-[#ee8c2c] border-l-4 border-[#ee8c2c]" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Services
              </a>

              <button
                onClick={() => {
                  handleHashNavigation({ label: "How It Works", path: "#how-it-works", targetPage: "/" });
                  setMobileOpen(false);
                }}
                className="py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 text-left"
              >
                How It Works
              </button>

              <button
                onClick={() => {
                  handleHashNavigation({ label: "Contact", path: "#contact", targetPage: "/" });
                  setMobileOpen(false);
                }}
                className="py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 text-left"
              >
                Contact
              </button>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="p-5 sm:p-6 border-t border-white/10 mt-4 space-y-3">
              <a
                href="tel:+19013509597"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-3.5 sm:py-4 rounded-full border-2 border-[#ee8c2c] text-[#ee8c2c] font-bold text-base sm:text-lg hover:bg-[#ee8c2c] hover:text-white transition-all duration-300"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                <span>Call (901) 350-9597</span>
              </a>
              <a href="#quote">

              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-3.5 sm:py-4 rounded-full bg-[#ee8c2c] text-white font-bold text-base sm:text-lg hover:bg-[#d47a1f] transition-all duration-300 shadow-lg"
                >
                <Calendar size={18} className="sm:w-5 sm:h-5" />
                <span>Get Free Quote</span>
              </button>
                </a>
            </div>

            {/* Trust Badges */}
            <div className="p-5 sm:p-6 pt-0 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                <Shield size={14} className="sm:w-4 sm:h-4" />
                <span>Licensed</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                <span>Insured</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                <Recycle size={14} className="sm:w-4 sm:h-4" />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}