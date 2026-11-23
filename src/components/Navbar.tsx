import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Determine active section based on scroll offset
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'py-3 sm:py-3.5 bg-void-950/90 backdrop-blur-md border-b border-void-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'py-4 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2 cursor-pointer z-50 flex-shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-crimson group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_#ff2a38]" />
          <span className="font-display text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-white group-hover:text-crimson-accent transition-colors duration-200">
            SRIHARI<span className="text-crimson"> S</span>
          </span>
        </a>

        {/* Desktop Nav Items (lg+) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-mono text-xs uppercase tracking-widest transition-colors duration-200 py-1 ${
                  isActive ? 'text-white font-semibold' : 'text-silver-muted hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-crimson shadow-[0_0_8px_#ff2a38] transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Resume CTA (lg+) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={PERSONAL_INFO.contacts.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-sm border border-void-700 hover:border-crimson bg-void-900/80 hover:bg-crimson/15 font-mono text-xs tracking-wider text-silver-light hover:text-white transition-all duration-200 group"
          >
            <FileText className="w-3.5 h-3.5 text-crimson group-hover:rotate-6 transition-transform" />
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-silver-muted group-hover:text-crimson transition-colors" />
          </a>
        </div>

        {/* Mobile / Tablet Actions (< lg) */}
        <div className="flex lg:hidden items-center gap-2.5 sm:gap-3">
          {/* Compact Header Resume Button for immediate accessibility */}
          <a
            href={PERSONAL_INFO.contacts.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-sm border border-void-700 hover:border-crimson bg-void-900/90 text-silver-light hover:text-white font-mono text-[11px] sm:text-xs tracking-wider transition-colors"
            aria-label="View Resume"
          >
            <FileText className="w-3 h-3 text-crimson" />
            <span className="hidden xs:inline sm:inline">RESUME</span>
          </a>

          {/* Clean Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-silver-light hover:text-white bg-void-900/60 border border-void-800 hover:border-void-700 transition-colors focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-crimson" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full-Screen Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-void-950/98 backdrop-blur-2xl border-t border-void-800 z-40 flex flex-col justify-between px-6 sm:px-8 py-6 sm:py-8 overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-250">
          <nav className="flex flex-col gap-2">
            <span className="font-mono text-[10px] tracking-widest text-silver-muted uppercase mb-2">
              NAVIGATION MENU
            </span>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xl sm:text-2xl font-display tracking-tight flex items-center justify-between py-3 px-3 rounded-lg border transition-all duration-200 min-h-[48px] ${
                    isActive
                      ? 'text-crimson bg-void-900/90 border-crimson/40 font-bold pl-4'
                      : 'text-silver-light hover:text-white hover:bg-void-900/50 border-transparent'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-crimson shadow-[0_0_8px_#ff2a38]" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-void-600" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 mt-4 border-t border-void-800/80 flex flex-col gap-3">
            <a
              href={PERSONAL_INFO.contacts.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-crimson hover:bg-crimson-glow text-white font-mono text-xs sm:text-sm tracking-wider font-semibold shadow-[0_0_20px_rgba(229,9,20,0.4)] min-h-[44px]"
            >
              <FileText className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center font-mono text-[11px] text-silver-muted truncate">
              {PERSONAL_INFO.contacts.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
