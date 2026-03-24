import { Download, Mail, MapPin, Briefcase, Github, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profilePhoto from "figma:asset/42a278e69b8e4391ae4dbd89f3ae226ee31eafbd.png";

const PROFILE_IMAGE = profilePhoto;

export function HeroSection() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EEF4FF 0%, #F8FAFF 50%, #EDF7F6 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0A66C2 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0A66C2 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-20 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div
                className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <ImageWithFallback
                  src={PROFILE_IMAGE}
                  alt="Tahir Mehmood"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status badge */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-lg border border-green-100">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-700 font-semibold whitespace-nowrap" style={{ fontSize: "0.72rem" }}>
                  Open to work
                </span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
              <Briefcase size={14} className="text-[#0A66C2]" />
              <span className="text-[#0A66C2] font-semibold" style={{ fontSize: "0.8rem" }}>
                Computer Scientist
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-[#1B2A47] font-extrabold leading-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Tahir Mehmood
            </h1>

            {/* Bio */}
            <p className="text-[#4B5A6E] leading-relaxed max-w-xl" style={{ fontSize: "1.05rem" }}>
              CS freshman at LUMS with a deep curiosity for AI, large language models, code security,
              and cyber protection — building things that are not only smart, but trustworthy.
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[#4B5A6E]" style={{ fontSize: "0.9rem" }}>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-[#0A66C2]" />
                Lahore, Pakistan
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start">
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A66C2] text-white hover:bg-[#0856a8] transition-all duration-200 font-semibold shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
                style={{ fontSize: "0.9rem" }}
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1B2A47] border border-gray-200 hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all duration-200 font-semibold shadow-sm hover:-translate-y-0.5"
                style={{ fontSize: "0.9rem" }}
              >
                <Mail size={16} />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.linkedin.com/in/tahiraspirant/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#4B5A6E] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all duration-200 shadow-sm"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/TahirMehmood717"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#4B5A6E] hover:text-[#1B2A47] hover:border-[#1B2A47] transition-all duration-200 shadow-sm"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:abidtahir717@gmail.com"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#4B5A6E] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all duration-200 shadow-sm"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[#4B5A6E]" style={{ fontSize: "0.72rem", letterSpacing: "0.1em" }}>
            SCROLL
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#0A66C2] to-transparent" />
        </div>
      </div>
    </section>
  );
}