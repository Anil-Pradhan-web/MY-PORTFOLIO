'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#featured-work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#tech-stack' },
  { name: 'Achievements', href: '#build-log' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] as const }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-primary/80 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div className="container-custom">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="#"
              className="flex items-center gap-2 font-display text-lg md:text-xl font-bold tracking-tight text-text-primary hover:text-[#00e89d] transition-colors focus-ring rounded-lg px-1 py-0.5 group"
              aria-label="Anil Pradhan - Home"
            >
              <span className="w-2 h-2 rounded-full bg-[#00e89d] group-hover:scale-125 transition-transform" />
              <span>Anil Pradhan</span>
              <span className="text-xs font-mono font-medium text-text-muted hidden sm:inline-block">/ dev</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-1 bg-bg-card/70 border border-border-primary/60 p-1.5 rounded-full" aria-label="Main Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'font-body text-xs tracking-wide font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 relative',
                        isActive
                          ? 'text-text-primary bg-bg-card-hover border border-[#00e89d]/30 shadow-[0_0_12px_rgba(0,232,157,0.15)]'
                          : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href="/Anil_Pradhan_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5"
                  aria-label="View Resume PDF"
                >
                  <FileText className="w-3.5 h-3.5 text-text-muted" />
                  <span>Resume</span>
                  <ArrowUpRight className="w-3 h-3 text-text-muted" />
                </a>
                <Link href="#contact" className="btn-primary text-xs px-4 py-1.5" aria-label="Hire me or get in touch">
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="/Anil_Pradhan_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs px-2.5 py-1.5 inline-flex items-center gap-1"
                aria-label="View Resume PDF"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                className="p-2 text-text-secondary hover:text-text-primary transition-colors focus-ring rounded-lg border border-border-primary/50 bg-bg-card/60"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu — Bottom Sheet Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] as const }}
              className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-card border-t border-border-primary rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.5)]"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-text-muted/40" />
              </div>

              <div className="container-custom px-6 pb-8">
                <nav className="flex flex-col gap-1 mb-6" aria-label="Mobile Navigation Links">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={closeMobileMenu}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn(
                          'font-body text-base font-medium px-4 py-3 rounded-xl transition-colors flex items-center justify-between',
                          isActive
                            ? 'text-[#00e89d] bg-[#00e89d]/10 border border-[#00e89d]/20'
                            : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                        )}
                        style={{ transitionDelay: `${idx * 30}ms` }}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#00e89d]" />}
                      </Link>
                    );
                  })}
                </nav>
                <div className="flex flex-col gap-2.5 pt-4 border-t border-border-primary/70">
                  <a
                    href="/Anil_Pradhan_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="btn-secondary w-full justify-center text-sm py-3 inline-flex items-center gap-2"
                    aria-label="View Resume PDF"
                  >
                    <FileText className="w-4 h-4 text-[#00e89d]" />
                    <span>View Resume</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />
                  </a>
                  <Link
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="btn-primary w-full justify-center text-sm py-3"
                    aria-label="Get In Touch"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}