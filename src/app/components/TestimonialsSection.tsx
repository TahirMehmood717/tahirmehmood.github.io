import { Quote, Linkedin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "I'm excited to share that I've appointed Tahir Mehmood as the Visual Design Strategist at The Chandia Foundation. Tahir's exceptional eye for design and strategic thinking made him the perfect choice for this role. His ability to turn ideas into compelling visuals will play a key part in strengthening our identity and engaging our audience. I look forward to seeing the creative direction he brings to the foundation's work.",
    name: "Muhammad Murad Ali",
    title: "BSc (Hons) Accounting & Finance @ LUMS | Aitchison College '25 | Founder @ The Chandia Foundation",
    relation: "Muhammad Murad managed Tahir directly · August 4, 2025",
    initials: "MA",
    accent: "border-blue-200 bg-blue-50/30",
    avatarBg: "bg-[#0A66C2]",
  },
  {
    id: 2,
    quote:
      "Tahir was very cooperative while working with us and was not reluctant to changing elements of the project if the requirements changed. He was willing to get the required work done even if it meant working in late hours. Overall, he proved to be a valuable asset for our start-up.",
    name: "Faraz Ali",
    title: "Student at Aitchison College",
    relation: "Faraz managed Tahir directly · July 20, 2025",
    initials: "FA",
    accent: "border-violet-200 bg-violet-50/30",
    avatarBg: "bg-violet-600",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#F8FAFF]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#0A66C2]" />
          <span className="text-[#0A66C2] font-semibold tracking-widest uppercase" style={{ fontSize: "0.75rem" }}>
            Recommendations
          </span>
        </div>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <h2
            className="text-[#1B2A47] font-extrabold"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            What Colleagues Say
          </h2>
          <div className="flex items-center gap-1.5 text-[#4B5A6E]" style={{ fontSize: "0.85rem" }}>
            <Linkedin size={15} className="text-[#0A66C2]" />
            <span>Received on LinkedIn · 2 recommendations</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`rounded-2xl border ${t.accent} p-8 hover:shadow-md transition-all duration-200 relative flex flex-col gap-5`}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-[#0A66C2] opacity-20 absolute top-6 right-6"
                fill="currentColor"
              />

              {/* Quote text */}
              <p className="text-[#4B5A6E] leading-relaxed italic relative z-10" style={{ fontSize: "0.92rem" }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div
                  className={`w-12 h-12 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm`}
                  style={{ fontSize: "0.85rem" }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-[#1B2A47] font-bold truncate" style={{ fontSize: "0.9rem" }}>
                    {t.name}
                  </p>
                  <p className="text-[#4B5A6E] leading-snug" style={{ fontSize: "0.78rem" }}>
                    {t.title}
                  </p>
                  <p className="text-[#0A66C2] font-medium mt-0.5" style={{ fontSize: "0.75rem" }}>
                    {t.relation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
