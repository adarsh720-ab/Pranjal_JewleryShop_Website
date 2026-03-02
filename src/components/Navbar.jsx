import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Collection", to: "/collection" },
  { label: "Categories", to: "/categories" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Pages whose hero has a dark/image background — nav should be white when unscrolled
const DARK_HERO_PAGES = ["/about"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isDarkHero = DARK_HERO_PAGES.includes(location.pathname) && !scrolled;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    fn(); // run on mount
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setScrolled(window.scrollY > 60);
  }, [location]);

  const logoColor = isDarkHero ? "text-white" : "text-ink";
  const linkBase = isDarkHero
    ? "text-white/80 hover:text-[#C4A35A]"
    : "text-black hover:text-[#C4A35A]";
  const burgerColor = isDarkHero ? "bg-white" : "bg-ink";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-pearl/95 backdrop-blur-md shadow-soft border-b border-ivory"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`font-heading text-xl font-bold tracking-[0.25em] uppercase transition-colors duration-300 drop-shadow-sm ${logoColor}`}
        >
          Pranjal Enterprise
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link transition-colors duration-300 ${linkBase} ${location.pathname === to ? "active" : ""}`}
              style={
                location.pathname === to ? { color: "#C4A35A" } : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${burgerColor} ${mobileOpen ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${burgerColor} ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${burgerColor} ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-pearl border-t border-ivory overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-0">
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link py-3 text-sm border-b border-ivory/60 last:border-0 ${location.pathname === to ? "active" : ""}`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
