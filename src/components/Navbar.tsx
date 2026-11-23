import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-void-950/85 backdrop-blur-md border-b border-void-700/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-crimson group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_#ff2a38]" />
          <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-crimson-accent transition-colors duration-200">
            SRIHARI<span className="text-crimson"> S</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
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

        {/* Right CTA / Resume Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={PERSONAL_INFO.contacts.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-sm border border-void-600 hover:border-crimson bg-void-900/60 hover:bg-crimson/10 font-mono text-xs tracking-wider text-silver-light hover:text-white transition-all duration-200 group"
          >
            <FileText className="w-3.5 h-3.5 text-crimson group-hover:rotate-6 transition-transform" />
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-silver-muted group-hover:text-crimson transition-colors" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-silver-light hover:text-white hover:bg-void-800 transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-crimson" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-void-950/98 backdrop-blur-xl border-t border-void-800 z-40 flex flex-col justify-between px-8 py-10 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-2xl font-display tracking-tight flex items-center justify-between py-2 border-b border-void-800/60 ${
                    isActive ? 'text-crimson font-bold' : 'text-silver-light hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-crimson" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-void-800 flex flex-col gap-4">
            <a
              href={PERSONAL_INFO.contacts.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-crimson text-white font-mono text-sm tracking-wider font-semibold shadow-[0_0_20px_rgba(229,9,20,0.4)]"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center font-mono text-xs text-silver-muted pt-2">
              srihari23052007@gmail.com
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
