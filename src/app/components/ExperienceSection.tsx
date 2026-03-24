import { Calendar, MapPin, Code2, Cpu } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "C Chatbot Memory Manager",
    company: "LUMS",
    icon: Cpu,
    iconColor: "bg-[#0A66C2]",
    location: "Lahore, Pakistan",
    period: "2026",
    current: true,
    tag: "Systems Programming · C",
    bullets: [
      "Engineered a chatbot system in C featuring dynamic memory management to efficiently allocate, track, and free memory across conversation sessions.",
      "Implemented custom memory pool strategies to handle variable-length chat histories without memory leaks or fragmentation.",
      "Designed a context-aware memory model that persists relevant dialogue state while releasing stale data, mimicking real LLM memory behaviour.",
      "Deepened low-level understanding of pointers, heap allocation, and manual memory lifecycle management in C.",
    ],
  },
  {
    id: 2,
    role: "Galactic Logistics Hub",
    company: "LUMS",
    icon: Code2,
    iconColor: "bg-violet-600",
    location: "Lahore, Pakistan",
    period: "2025",
    current: false,
    tag: "Object-Oriented Programming · C++",
    bullets: [
      "Built a space-themed logistics simulation applying core OOP principles including encapsulation, inheritance, polymorphism, and abstraction.",
      "Modelled a fleet of spacecraft, cargo types, and delivery routes as a hierarchy of classes with well-defined interfaces.",
      "Applied design patterns such as Factory and Strategy to manage different ship classes and routing algorithms cleanly.",
      "Strengthened practical understanding of how OOP architecture scales for complex, real-world simulation problems.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#F8FAFF]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#0A66C2]" />
          <span className="text-[#0A66C2] font-semibold tracking-widest uppercase" style={{ fontSize: "0.75rem" }}>
            Experience
          </span>
        </div>
        <h2
          className="text-[#1B2A47] font-extrabold mb-12"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Projects & Experience
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0A66C2] via-blue-200 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <div key={exp.id} className="relative flex gap-6 md:gap-8">
                  {/* Timeline icon */}
                  <div className="hidden md:flex flex-shrink-0 flex-col items-center">
                    <div
                      className={`w-14 h-14 rounded-2xl ${exp.iconColor} flex items-center justify-center text-white shadow-md z-10`}
                    >
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 bg-white rounded-2xl p-6 md:p-8 border shadow-sm hover:shadow-md transition-all duration-200 ${
                      exp.current ? "border-[#0A66C2]/20 ring-1 ring-[#0A66C2]/10" : "border-gray-100"
                    }`}
                  >
                    {/* Mobile icon */}
                    <div className={`md:hidden w-10 h-10 rounded-xl ${exp.iconColor} flex items-center justify-center text-white mb-4 shadow-sm`}>
                      <Icon size={18} />
                    </div>

                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3
                            className="text-[#1B2A47] font-bold"
                            style={{ fontSize: "1.1rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                          >
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 font-semibold" style={{ fontSize: "0.72rem" }}>
                              Latest
                            </span>
                          )}
                        </div>
                        <p className="text-[#0A66C2] font-semibold mt-0.5" style={{ fontSize: "0.95rem" }}>
                          {exp.company}
                        </p>
                        <span
                          className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0A66C2] border border-blue-100 font-medium"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {exp.tag}
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1.5 text-[#4B5A6E]" style={{ fontSize: "0.82rem" }}>
                          <Calendar size={13} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#4B5A6E]" style={{ fontSize: "0.82rem" }}>
                          <MapPin size={13} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-[#4B5A6E]" style={{ fontSize: "0.9rem" }}>
                          <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#0A66C2]" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}