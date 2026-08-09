'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Work', href: '#featured-work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Stack', href: '#tech-stack' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border-primary shadow-lg'
          : 'bg-transparent'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="font-mono text-xl font-bold text-text-primary hover:text-teal-400 transition-colors focus-ring"
            aria-label="Anil Pradhan - Home"
          >
            {'>'} AP_
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6" aria-label="Main">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-body text-sm font-medium text-text-secondary hover:text-teal-400 transition-colors relative py-2"
                >
                  {link.name}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3 ml-4 border-l border-border-primary pl-4">
              <Link href="/Anil_Pradhan_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm px-4 py-2 hidden sm:inline-flex" aria-label="Download Resume">
                Resume
              </Link>
              <Link href="#contact" className="btn-primary text-sm px-4 py-2" aria-label="Hire me">
                Hire Me
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors focus-ring rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={{
          maxHeight: isMobileMenuOpen ? '500px' : '0px',
          opacity: isMobileMenuOpen ? 1 : 0,
          paddingTop: isMobileMenuOpen ? '1rem' : 0,
          paddingBottom: isMobileMenuOpen ? '1.5rem' : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden bg-bg-primary/95 backdrop-blur-xl border-b border-border-primary"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="container-custom px-6">
          <nav className="flex flex-col gap-2" aria-label="Mobile main">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-base font-medium text-text-secondary hover:text-teal-400 transition-colors py-3 border-b border-border-primary/50"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border-primary">
            <Link
              href="/Anil_Pradhan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-secondary w-full justify-center"
              aria-label="Download Resume"
            >
              Download Resume
            </Link>
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full justify-center" aria-label="Hire me">
              Hire Me
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}