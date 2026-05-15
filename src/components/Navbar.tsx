
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-card backdrop-blur-xl border-b border-violet-500/20 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.3)]' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="font-mono text-xl gradient-text font-bold tracking-tight hover:opacity-80 transition-opacity">
            &gt; AP_
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-violet-400 transition-colors relative group pointer-events-auto"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="/my_resume.pdf?v=1.1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white px-5 py-2 text-sm font-medium transition-colors border border-zinc-700 rounded-lg hover:bg-zinc-800"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="group relative bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-sm font-bold hover:from-violet-500 hover:to-cyan-400 px-6 py-2 rounded-lg transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] overflow-hidden ml-2"
            >
              <span className="relative z-10">Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-400 hover:text-violet-400 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          maxHeight: isMobileMenuOpen ? '500px' : '0px',
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden absolute w-full glass-card backdrop-blur-xl border-b border-violet-500/20 overflow-hidden"
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-zinc-400 font-medium hover:text-violet-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/my_resume.pdf?v=1.1"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-zinc-300 text-center py-2 font-medium"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-center py-3 rounded-lg font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
