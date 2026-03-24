import { GraduationCap, Star, Award, Users, Building2 } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Bachelor's degree, Computer Science",
    field: "Aug 2025 – Sep 2029",
    institution: "Lahore University of Management Sciences",
    shortName: "LUMS",
    logoColor: "bg-[#003366]",
    gpa: "3.96",
    note: "Working alongside top scholars and fellows at the Syed Babar Ali School of Science and Engineering (SBASSE), LUMS. My focus lies in strengthening problem solving skills, core competencies in coding, computational linguistics, AI integration, web and app development, and data structures. I'm deeply committed to enhancing my research capabilities by engaging with some of the finest labs in the region. Over the course of four years, my goal is to gain mastery over advanced coding techniques, development tools, and creative problem-solving strategies across all domains of software development.",
  },
  {
    id: 2,
    degree: "Pre-Engineering",
    field: "May 2023 – Jun 2025",
    institution: "Punjab Group Of Colleges",
    shortName: "PGC",
    logoColor: "bg-[#1a6b3c]",
    gpa: "93%",
    note: "Completed pre-engineering with a strong academic record, building foundational knowledge in mathematics, physics, and analytical thinking that now underpins my computer science studies.",
  },
];

const certifications = [
  {
    name: "Google AI Essentials",
    issuer: "Google",
    year: "Aug 2025",
    credentialId: "VGHS31DTRN8R",
    skills: ["Artificial Intelligence (AI)", "Generative AI", "Prompt Engineering", "Data Ethics"],
    color: "bg-blue-50",
    iconColor: "text-[#0A66C2]",
  },
  {
    name: "Adobe Illustrator CC",
    issuer: "Udemy",
    year: "Jul 2025",
    credentialId: null,
    skills: ["Graphic Design", "Brochures & Flyers", "Logo Design", "Adobe Illustrator"],
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const volunteering = [
  {
    id: 1,
    role: "Media Specialist (Graphic Designer)",
    org: "Jobshow",
    period: "Jul 2025 – Sep 2025 · 3 mos",
    description: "Collaborated closely with the startup team to create compelling and cohesive visual content that strengthened the brand identity and supported marketing efforts. Designed social media graphics, banners, flyers, and promotional materials aligned with the brand's vision. Appreciated by Authorities with an Experience Certificate.",
    color: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    id: 2,
    role: "Visual Strategist",
    org: "The Chandia Foundation",
    period: "Jun 2025 – Dec 2025 · 7 mos",
    description: "Responsible for designing engaging content for social media platforms including static posts, reels, stories, and visual content for campaigns, events, and awareness initiatives. Collaborated closely to maintain brand consistency and support the foundation's outreach efforts through visually compelling designs.",
    color: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
];

const organizations = [
  {
    id: 1,
    name: "LUMS Consultancy Group",
    short: "LCG",
    color: "bg-[#003366]",
  },
  {
    id: 2,
    name: "LUMS Community Services Society",
    short: "LCSS",
    color: "bg-emerald-700",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-[#F8FAFF]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#0A66C2]" />
          <span className="text-[#0A66C2] font-semibold tracking-widest uppercase" style={{ fontSize: "0.75rem" }}>
            Education
          </span>
        </div>
        <h2
          className="text-[#1B2A47] font-extrabold mb-12"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Academic Background
        </h2>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`w-16 h-16 rounded-2xl ${edu.logoColor} flex items-center justify-center text-white font-extrabold flex-shrink-0 shadow-md`}
                  style={{ fontSize: "0.85rem", letterSpacing: "0.02em" }}
                >
                  {edu.shortName}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3
                        className="text-[#1B2A47] font-bold"
                        style={{ fontSize: "1rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-[#4B5A6E]" style={{ fontSize: "0.85rem" }}>
                        {edu.field}
                      </p>
                    </div>
                    <span
                      className="flex-shrink-0 px-3 py-1 rounded-full bg-blue-50 text-[#0A66C2] font-semibold flex items-center gap-1"
                      style={{ fontSize: "0.78rem" }}
                    >
                      <Star size={11} className="text-amber-400 fill-amber-400" />
                      {edu.gpa}
                    </span>
                  </div>

                  <p className="text-[#0A66C2] font-semibold mt-2" style={{ fontSize: "0.9rem" }}>
                    {edu.institution}
                  </p>

                  <p className="text-[#4B5A6E] mt-3 leading-relaxed" style={{ fontSize: "0.85rem" }}>
                    {edu.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3
            className="text-[#1B2A47] font-bold mb-5 flex items-center gap-2"
            style={{ fontSize: "1rem" }}
          >
            <Award size={18} className="text-[#0A66C2]" />
            Licences & Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <div className={`w-10 h-10 rounded-xl ${cert.color} flex items-center justify-center mb-4`}>
                  <GraduationCap size={20} className={cert.iconColor} />
                </div>
                <p className="text-[#1B2A47] font-bold leading-snug mb-1" style={{ fontSize: "0.95rem" }}>
                  {cert.name}
                </p>
                <p className="text-[#0A66C2] font-semibold" style={{ fontSize: "0.82rem" }}>
                  {cert.issuer}
                </p>
                <p className="text-[#4B5A6E] mt-0.5" style={{ fontSize: "0.78rem" }}>
                  Issued {cert.year}
                  {cert.credentialId && <> · ID: {cert.credentialId}</>}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-full bg-gray-50 border border-gray-200 text-[#4B5A6E]"
                      style={{ fontSize: "0.72rem" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div className="mb-12">
          <h3
            className="text-[#1B2A47] font-bold mb-5 flex items-center gap-2"
            style={{ fontSize: "1rem" }}
          >
            <Users size={18} className="text-[#0A66C2]" />
            Volunteering
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {volunteering.map((v) => (
              <div
                key={v.id}
                className={`bg-white rounded-2xl border ${v.borderColor} p-6 shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${v.color} flex items-center justify-center flex-shrink-0`}>
                    <Users size={18} className="text-[#1B2A47]" />
                  </div>
                  <div>
                    <p className="text-[#1B2A47] font-bold" style={{ fontSize: "0.95rem" }}>
                      {v.role}
                    </p>
                    <p className="text-[#0A66C2] font-semibold" style={{ fontSize: "0.85rem" }}>
                      {v.org}
                    </p>
                    <p className="text-[#4B5A6E]" style={{ fontSize: "0.78rem" }}>
                      {v.period}
                    </p>
                  </div>
                </div>
                <p className="text-[#4B5A6E] leading-relaxed" style={{ fontSize: "0.85rem" }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div>
          <h3
            className="text-[#1B2A47] font-bold mb-5 flex items-center gap-2"
            style={{ fontSize: "1rem" }}
          >
            <Building2 size={18} className="text-[#0A66C2]" />
            Organizations
          </h3>
          <div className="flex flex-wrap gap-4">
            {organizations.map((org) => (
              <div
                key={org.id}
                className="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${org.color} flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm`}
                  style={{ fontSize: "0.7rem", letterSpacing: "0.03em" }}
                >
                  {org.short}
                </div>
                <p className="text-[#1B2A47] font-semibold" style={{ fontSize: "0.9rem" }}>
                  {org.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}