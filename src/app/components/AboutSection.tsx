import { Brain, ShieldCheck, Code2, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "LUMS",
    label: "CS Freshman",
    color: "text-[#0A66C2]",
    bg: "bg-blue-50",
  },
  {
    icon: Brain,
    value: "AI",
    label: "Focus Area",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: ShieldCheck,
    value: "Cyber",
    label: "Security Interest",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Code2,
    value: "LLMs",
    label: "Deep Curiosity",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-0.5 bg-[#0A66C2]" />
          <span className="text-[#0A66C2] font-semibold tracking-widest uppercase" style={{ fontSize: "0.75rem" }}>
            About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Summary */}
          <div>
            <h2
              className="text-[#1B2A47] font-extrabold mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Building things that are not only smart, but trustworthy
            </h2>
            <div className="space-y-4 text-[#4B5A6E] leading-relaxed" style={{ fontSize: "1rem" }}>
              <p>
                I'm a Computer Science freshman at LUMS with a deep curiosity for how programming works at its core — not just writing code, but truly understanding the mechanisms, structures, and foundations that make it all function.
              </p>
              <p>
                My focus areas include artificial intelligence integration, large language models, code security, and cyber protection. I'm drawn to the intersection of intelligent systems and secure software — building things that are not only smart, but trustworthy.
              </p>
              <p>
                What sets me apart is the way I approach problems. I'm detail-oriented by nature, which means I rarely settle for a surface-level solution. I dig deeper, ask better questions, and look for the kind of understanding that sticks. Whether I'm debugging logic, exploring a new concept, or collaborating with a team, I bring the same level of care and intention to everything I do.
              </p>
              <p>
                I also genuinely value people — users, teammates, and clients alike. Good technology starts with understanding who it's for, and I try to carry that mindset into everything I build.
              </p>
              <p>
                I'm at the beginning of my journey, but I'm moving with purpose. Every project, course, and challenge is a step toward becoming the kind of developer who doesn't just keep up with the future — but helps build it.
              </p>
            </div>

            {/* Highlight Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Detail-Oriented", "AI Enthusiast", "Cyber Security", "LLM Explorer", "Problem Solver", "Team Player"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-blue-50 text-[#0A66C2] font-medium border border-blue-100"
                  style={{ fontSize: "0.8rem" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                    <Icon size={22} className={stat.color} />
                  </div>
                  <div>
                    <div
                      className={`font-extrabold ${stat.color}`}
                      style={{ fontSize: "1.6rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[#4B5A6E] font-medium" style={{ fontSize: "0.85rem" }}>
                      {stat.label}
                    </div>
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