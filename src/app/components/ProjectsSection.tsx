import { ExternalLink, Github, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const PROJECT_1 = "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjBwcm9qZWN0JTIwc2NyZWVuc2hvdHxlbnwxfHx8fDE3NzQxNzEyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const PROJECT_2 = "https://images.unsplash.com/photo-1590416986650-f8760d42dbd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzc0MTcxMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const PROJECT_3 = "https://images.unsplash.com/photo-1758876202919-4d2fbedcf23d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwdmlzdWFsaXphdGlvbiUyMHByb2plY3R8ZW58MXx8fHwxNzc0MTcxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080";

const projects = [
  {
    id: 1,
    title: "FlowBoard — SaaS Dashboard",
    description:
      "A real-time project management platform with AI-powered task prioritization, team analytics, and integrations with 40+ tools. Scaled to 50K users within 6 months.",
    image: PROJECT_1,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI"],
    stars: "2.1k",
    liveUrl: "#",
    githubUrl: "#",
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "PulseHealth — Mobile App",
    description:
      "A cross-platform health tracking app with biometric data sync, personalized coaching, and HealthKit / Google Fit integration. Featured on Product Hunt (#2 of the day).",
    image: PROJECT_2,
    tags: ["React Native", "Expo", "Firebase", "HealthKit", "GraphQL"],
    stars: "980",
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile",
  },
  {
    id: 3,
    title: "DataLens — Analytics Platform",
    description:
      "An open-source BI tool for startups with drag-and-drop report builder, real-time SQL queries, and one-click chart exports. 5K+ GitHub stars.",
    image: PROJECT_3,
    tags: ["Next.js", "Python", "ClickHouse", "D3.js", "Docker"],
    stars: "5.2k",
    liveUrl: "#",
    githubUrl: "#",
    category: "Open Source",
  },
];

const categoryColors: Record<string, string> = {
  "Full-Stack": "bg-blue-50 text-[#0A66C2]",
  "Mobile": "bg-violet-50 text-violet-600",
  "Open Source": "bg-emerald-50 text-emerald-600",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#0A66C2]" />
          <span className="text-[#0A66C2] font-semibold tracking-widest uppercase" style={{ fontSize: "0.75rem" }}>
            Featured Projects
          </span>
        </div>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <h2
            className="text-[#1B2A47] font-extrabold"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Selected Work
          </h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#0A66C2] font-semibold hover:underline"
            style={{ fontSize: "0.9rem" }}
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-full font-semibold text-xs ${categoryColors[project.category] || "bg-gray-100 text-gray-600"} backdrop-blur-sm`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Stars */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white rounded-full px-2.5 py-1">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span style={{ fontSize: "0.75rem" }}>{project.stars}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3
                  className="text-[#1B2A47] font-bold leading-snug"
                  style={{ fontSize: "1rem", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#4B5A6E] leading-relaxed flex-1" style={{ fontSize: "0.85rem" }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-[#4B5A6E] font-medium"
                      style={{ fontSize: "0.72rem" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-2 pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-[#0A66C2] font-semibold hover:underline"
                    style={{ fontSize: "0.82rem" }}
                  >
                    <ExternalLink size={14} />
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 text-[#4B5A6E] font-semibold hover:text-[#1B2A47] hover:underline"
                    style={{ fontSize: "0.82rem" }}
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
