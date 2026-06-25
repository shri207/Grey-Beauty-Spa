import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Packages", href: "#packages" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-stone/90 backdrop-blur-md border-black/5 h-[80px] flex items-center"
          : "bg-transparent border-transparent h-[80px] flex items-center"
      }`}
    >
      <div className="w-full px-6 lg:px-[60px] flex items-center justify-between">
        <a href="#" className="font-serif text-[20px] font-light tracking-[0.15em] text-matte uppercase">
          Grey Beauty Spa
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[40px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] text-warmgrey hover:text-matte transition-colors uppercase tracking-[0.1em]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className="text-[11px] text-matte hover:text-warmgrey transition-colors uppercase tracking-[0.1em] font-semibold"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-matte"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-stone border-b border-warmgrey/20 py-8 px-6 flex flex-col space-y-6 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-graphite hover:text-matte transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setIsOpen(false)}
            className="inline-block text-center px-6 py-4 bg-matte text-stone text-sm uppercase tracking-widest hover:bg-graphite transition-colors w-full"
          >
            Book Appointment
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
