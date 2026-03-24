import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Clock, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-[#0A66C2]" />
          <span className="text-[#0A66C2] font-semibold tracking-widest uppercase" style={{ fontSize: "0.75rem" }}>
            Contact
          </span>
        </div>
        <h2
          className="text-[#1B2A47] font-extrabold mb-4"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Let's Work Together
        </h2>
        <p className="text-[#4B5A6E] mb-12 max-w-xl" style={{ fontSize: "1rem" }}>
          I'm always open to interesting conversations and new opportunities. Whether it's a project, a partnership, or just a hello — my inbox is open.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <div className="flex flex-col gap-8">
            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:abidtahir717@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-[#0A66C2]/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A66C2] transition-colors duration-200">
                  <Mail size={20} className="text-[#0A66C2] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[#4B5A6E] font-medium" style={{ fontSize: "0.8rem" }}>Email</p>
                  <p className="text-[#1B2A47] font-semibold" style={{ fontSize: "0.95rem" }}>abidtahir717@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/tahiraspirant/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-[#0A66C2]/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A66C2] transition-colors duration-200">
                  <Linkedin size={20} className="text-[#0A66C2] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[#4B5A6E] font-medium" style={{ fontSize: "0.8rem" }}>LinkedIn</p>
                  <p className="text-[#1B2A47] font-semibold" style={{ fontSize: "0.95rem" }}>linkedin.com/in/tahiraspirant</p>
                </div>
              </a>

              <a
                href="https://github.com/TahirMehmood717"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-gray-400/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B2A47] transition-colors duration-200">
                  <Github size={20} className="text-[#1B2A47] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[#4B5A6E] font-medium" style={{ fontSize: "0.8rem" }}>GitHub</p>
                  <p className="text-[#1B2A47] font-semibold" style={{ fontSize: "0.95rem" }}>github.com/TahirMehmood717</p>
                </div>
              </a>
            </div>

            {/* Meta info */}
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[#F8FAFF] border border-gray-100">
              <div className="flex items-center gap-3 text-[#4B5A6E]" style={{ fontSize: "0.88rem" }}>
                <MapPin size={15} className="text-[#0A66C2] flex-shrink-0" />
                <span>Lahore, Pakistan (Open to remote)</span>
              </div>
              <div className="flex items-center gap-3 text-[#4B5A6E]" style={{ fontSize: "0.88rem" }}>
                <Clock size={15} className="text-[#0A66C2] flex-shrink-0" />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="text-[#1B2A47] font-bold" style={{ fontSize: "1.2rem" }}>Message Sent!</h3>
                <p className="text-[#4B5A6E]" style={{ fontSize: "0.9rem" }}>
                  Thanks for reaching out, {form.name.split(" ")[0]}. I'll get back to you soon.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-2 px-5 py-2 rounded-full border border-gray-200 text-[#4B5A6E] hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors font-medium"
                  style={{ fontSize: "0.85rem" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1B2A47] font-semibold" style={{ fontSize: "0.82rem" }}>
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1B2A47] placeholder-gray-400 focus:outline-none focus:border-[#0A66C2] focus:bg-white focus:ring-2 focus:ring-[#0A66C2]/10 transition-all duration-200"
                      style={{ fontSize: "0.9rem" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1B2A47] font-semibold" style={{ fontSize: "0.82rem" }}>
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1B2A47] placeholder-gray-400 focus:outline-none focus:border-[#0A66C2] focus:bg-white focus:ring-2 focus:ring-[#0A66C2]/10 transition-all duration-200"
                      style={{ fontSize: "0.9rem" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1B2A47] font-semibold" style={{ fontSize: "0.82rem" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, job opportunity..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1B2A47] placeholder-gray-400 focus:outline-none focus:border-[#0A66C2] focus:bg-white focus:ring-2 focus:ring-[#0A66C2]/10 transition-all duration-200"
                    style={{ fontSize: "0.9rem" }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1B2A47] font-semibold" style={{ fontSize: "0.82rem" }}>
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1B2A47] placeholder-gray-400 focus:outline-none focus:border-[#0A66C2] focus:bg-white focus:ring-2 focus:ring-[#0A66C2]/10 transition-all duration-200 resize-none"
                    style={{ fontSize: "0.9rem" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A66C2] text-white font-semibold hover:bg-[#0856a8] active:bg-[#074a8f] transition-all duration-200 shadow-lg shadow-blue-200 hover:shadow-blue-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ fontSize: "0.9rem" }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}