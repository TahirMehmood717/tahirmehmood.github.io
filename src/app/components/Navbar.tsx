import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
          className="text-[#0A66C2] font-extrabold tracking-tight"
          style={{ fontSize: "1.2rem" }}
        >
          Tahir Mehmood<span className="text-[#1B2A47]">.cs</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="px-4 py-2 rounded-lg text-[#1B2A47] hover:text-[#0A66C2] hover:bg-blue-50 transition-colors duration-200 font-medium"
              style={{ fontSize: "0.875rem" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="ml-3 px-5 py-2 rounded-full bg-[#0A66C2] text-white hover:bg-[#0856a8] transition-colors duration-200 font-semibold"
            style={{ fontSize: "0.875rem" }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-[#1B2A47] hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="px-4 py-3 rounded-lg text-[#1B2A47] hover:text-[#0A66C2] hover:bg-blue-50 transition-colors font-medium"
              style={{ fontSize: "0.9rem" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="mt-2 px-5 py-3 rounded-full bg-[#0A66C2] text-white text-center hover:bg-[#0856a8] transition-colors font-semibold"
            style={{ fontSize: "0.9rem" }}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}