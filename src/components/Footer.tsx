import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-void-800 bg-void-950 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        
        {/* Brand & Subtitle */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-crimson" />
            <h3 className="font-display text-xl font-black text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h3>
          </div>
          <p className="font-mono text-xs text-silver-muted uppercase tracking-wider">
            {PERSONAL_INFO.tagline} · SOFTWARE DEVELOPER · AI ENTHUSIAST
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={PERSONAL_INFO.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-silver-muted hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-silver-muted hover:text-[#0a66c2] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.contacts.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-silver-muted hover:text-[#e4405f] transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <span className="font-mono text-xs text-silver-muted">
            © {currentYear} SRIHARI S. ALL RIGHTS RESERVED.
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-void-900 border border-void-700 hover:border-crimson hover:bg-crimson text-silver-light hover:text-white transition-all duration-200 group"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
