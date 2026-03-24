const skillGroups = [
  {
    category: "Programming & Core CS",
    emoji: "💻",
    color: "border-blue-200 bg-blue-50/50",
    labelColor: "text-[#0A66C2]",
    dotColor: "bg-[#0A66C2]",
    skills: ["C", "C++", "Mathematics", "Networking", "Artificial Intelligence (AI)", "Generative AI", "Prompt Engineering", "Data Ethics"],
  },
  {
    category: "Design & Creative Tools",
    emoji: "🎨",
    color: "border-violet-200 bg-violet-50/50",
    labelColor: "text-violet-600",
    dotColor: "bg-violet-500",
    skills: ["Canva", "Adobe Illustrator", "Graphic Design", "Logo Design", "Brochures & Flyers", "Figma"],
  },
  {
    category: "AI & Emerging Tech",
    emoji: "🤖",
    color: "border-emerald-200 bg-emerald-50/50",
    labelColor: "text-emerald-600",
    dotColor: "bg-emerald-500",
    skills: ["Artificial Intelligence", "Generative AI", "Prompt Engineering", "Large Language Models (LLMs)", "Google AI Essentials (Certified)"],
  },
  {
    category: "Marketing & Content",
    emoji: "📢",
    color: "border-rose-200 bg-rose-50/50",
    labelColor: "text-rose-600",
    dotColor: "bg-rose-500",
    skills: ["Social Media Content Creation", "Advertising", "Graphic Design"],
  },
  {
    category: "Productivity & Collaboration",
    emoji: "🛠️",
    color: "border-amber-200 bg-amber-50/50",
    labelColor: "text-amber-600",
    dotColor: "bg-amber-500",
    skills: ["Time Management", "Notion", "Slack", "Jira", "Linear", "GitHub", "VS Code", "Docker"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#0A66C2]" />
          <span className="text-[#0A66C2] font-semibold tracking-widest uppercase" style={{ fontSize: "0.75rem" }}>
            Skills
          </span>
        </div>
        <h2
          className="text-[#1B2A47] font-extrabold mb-12"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Technical Expertise
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl border ${group.color} p-6 hover:shadow-md transition-shadow duration-200`}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-5">
                <span style={{ fontSize: "1.2rem" }}>{group.emoji}</span>
                <h3 className={`font-bold ${group.labelColor}`} style={{ fontSize: "0.95rem" }}>
                  {group.category}
                </h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#1B2A47] font-medium hover:border-current hover:shadow-sm transition-all duration-150"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
