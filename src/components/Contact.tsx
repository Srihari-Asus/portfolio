import { useState } from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  FileText,
  Copy,
  Check,
  ArrowUpRight,
  Send,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.contacts.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 relative z-10 bg-void-950/80 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-void-800">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-crimson tracking-widest uppercase">
              <span>06</span>
              <span className="w-8 h-[1px] bg-crimson" />
              <span>DIRECT INQUIRIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
              LET'S BUILD <br className="sm:hidden" />
              <span className="text-crimson text-glow-crimson">SOMETHING.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-silver-muted tracking-wider mt-4 md:mt-0 uppercase">
            OPEN TO OPPORTUNITIES &amp; COLLABORATIONS
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Direct Channel Cards */}
          <div className="lg:col-span-6 space-y-8">
            <p className="font-sans text-base sm:text-lg lg:text-xl text-silver-light/95 leading-relaxed font-light">
              "I'm always interested in building meaningful projects, exploring new technologies, and collaborating with people who enjoy turning ideas into reality."
            </p>

            {/* Direct Channels Cards */}
            <div className="space-y-4">
              
              {/* Email Card with Copy Feature */}
              <div className="p-4 sm:p-5 rounded-xl bg-void-900/80 border border-void-800 hover:border-crimson/50 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-crimson/15 text-crimson border border-crimson/30 group-hover:bg-crimson group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[11px] text-silver-muted block uppercase tracking-wider">
                      PRIMARY EMAIL
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.contacts.email}`}
                      className="font-mono text-xs sm:text-sm md:text-base text-white hover:text-crimson transition-colors font-medium break-all"
                    >
                      {PERSONAL_INFO.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-2 rounded bg-void-800 hover:bg-void-700 text-silver-light font-mono text-xs tracking-wider border border-void-700 transition-colors min-h-[40px]"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-crimson" />
                        <span className="text-crimson">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.contacts.email}`}
                    className="p-2.5 rounded bg-crimson hover:bg-crimson-glow text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                    title="Send Email"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Phone Card (Mobile Clickable) */}
              <div className="p-4 sm:p-5 rounded-xl bg-void-900/80 border border-void-800 hover:border-crimson/50 transition-all duration-300 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-void-800 text-crimson border border-void-700 group-hover:bg-crimson group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[11px] text-silver-muted block uppercase tracking-wider">
                      PHONE CONTACT
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.contacts.phone}`}
                      className="font-mono text-xs sm:text-sm md:text-base text-white hover:text-crimson transition-colors font-medium"
                    >
                      {PERSONAL_INFO.contacts.phoneDisplay}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${PERSONAL_INFO.contacts.phone}`}
                  className="p-2.5 rounded bg-void-800 hover:bg-crimson text-silver-muted hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center flex-shrink-0"
                  title="Call directly"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Resume Direct Button */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-void-900 via-void-900 to-crimson/10 border border-void-800 hover:border-crimson/50 transition-all duration-300 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-void-800 text-crimson border border-void-700 group-hover:bg-crimson group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[11px] text-silver-muted block uppercase tracking-wider">
                      CURRICULUM VITAE
                    </span>
                    <span className="font-display text-xs sm:text-sm md:text-base text-white font-bold truncate block">
                      View Official Resume (Drive)
                    </span>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.contacts.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded bg-crimson hover:bg-crimson-glow text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(229,9,20,0.4)] min-h-[40px] flex-shrink-0"
                >
                  <span>OPEN</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Social Links Matrix */}
            <div className="pt-6 border-t border-void-800">
              <span className="font-mono text-xs uppercase tracking-widest text-silver-muted block mb-4">
                PRIMARY PROFESSIONAL NETWORKS
              </span>

              <div className="flex flex-wrap items-center gap-3">
                {/* GitHub (Primary) */}
                <a
                  href={PERSONAL_INFO.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-lg bg-void-900 border border-void-700 hover:border-crimson hover:bg-void-800 text-white font-mono text-xs tracking-wider transition-all duration-200 group min-h-[44px]"
                >
                  <Github className="w-4 h-4 text-crimson group-hover:scale-110 transition-transform" />
                  <span>GITHUB // SRIHARI-ASUS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-silver-muted group-hover:text-white" />
                </a>

                {/* LinkedIn (Primary) */}
                <a
                  href={PERSONAL_INFO.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-lg bg-void-900 border border-void-700 hover:border-crimson hover:bg-void-800 text-white font-mono text-xs tracking-wider transition-all duration-200 group min-h-[44px]"
                >
                  <Linkedin className="w-4 h-4 text-[#0a66c2] group-hover:scale-110 transition-transform" />
                  <span>LINKEDIN // SRIHARIS2305</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-silver-muted group-hover:text-white" />
                </a>

                {/* Instagram (Secondary) */}
                <a
                  href={PERSONAL_INFO.contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-void-950 border border-void-800 hover:border-void-600 text-silver-muted hover:text-white font-mono text-xs tracking-wider transition-all duration-200 group min-h-[44px]"
                >
                  <Instagram className="w-3.5 h-3.5 text-silver-muted group-hover:text-[#e4405f] transition-colors" />
                  <span>@SRI.HARI_23</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-void-900/60 border border-void-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-void-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-silver-muted">
                    SEND A DISPATCH
                  </span>
                </div>
                <span className="font-mono text-[11px] text-silver-muted">DIRECT ROUTING</span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-silver-muted mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg bg-void-950 border border-void-800 focus:border-crimson focus:outline-none text-white font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-silver-muted mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-void-950 border border-void-800 focus:border-crimson focus:outline-none text-white font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-silver-muted mb-2">
                    MESSAGE OR PROJECT BRIEF
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share what you'd like to collaborate on..."
                    className="w-full px-4 py-3 rounded-lg bg-void-950 border border-void-800 focus:border-crimson focus:outline-none text-white font-sans text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-crimson hover:bg-crimson-glow text-white font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.4)] active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </button>

                {formSent && (
                  <p className="text-center font-mono text-xs text-crimson-accent pt-2">
                    Opening your default email client with your message drafted to Srihari...
                  </p>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
