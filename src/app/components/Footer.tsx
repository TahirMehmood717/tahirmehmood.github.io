import { Github, Linkedin, Mail, Heart } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1B2A47] text-white py-14">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            className="text-white font-extrabold tracking-tight"
            style={{ fontSize: "1.4rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Tahir Mehmood<span className="text-[#0A66C2]">.cs</span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
                style={{ fontSize: "0.875rem" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/tahiraspirant/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/TahirMehmood717"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:abidtahir717@gmail.com"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-500" style={{ fontSize: "0.8rem" }}>
            <span>© {new Date().getFullYear()} Tahir Mehmood. All rights reserved.</span>
            <span className="hidden sm:flex items-center gap-1">
              · Built with <Heart size={12} className="text-red-400 fill-red-400 mx-0.5" /> using React & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}