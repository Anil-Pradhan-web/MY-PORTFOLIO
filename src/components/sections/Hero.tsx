'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center px-6 py-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/3 rounded-full blur-[200px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,170,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Subtle glow behind photo */}
            <div className="absolute -inset-2 bg-teal-500/10 rounded-2xl blur-xl pointer-events-none" aria-hidden="true" />
            <div className="relative w-44 sm:w-48 md:w-52 lg:w-56 rounded-2xl overflow-hidden border-2 border-border-primary hover:border-teal-500/50 transition-all duration-300 shadow-lg">
              <img
                src="/anil.png"
                alt="Anil Pradhan"
                className="w-full h-auto block"
                width={224}
                height={298}
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-1 mb-4"
        >
          Anil Pradhan
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-sm md:text-base font-medium text-teal-400 tracking-widest uppercase mb-8"
        >
          Software Engineer | Backend &amp; AI
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="body-lg max-w-2xl mx-auto mb-8 text-text-secondary"
        >
          Backend-focused Computer Science undergraduate specializing in AI-powered applications, scalable backend systems, and intelligent software using FastAPI, LangGraph, and RAG.
        </motion.p>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-mono text-text-muted mb-10"
        >
          <a href="mailto:anilpradhan9644@gmail.com" className="flex items-center gap-1.5 hover:text-teal-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            anilpradhan9644@gmail.com
          </a>
          <a href="tel:+918917476908" className="flex items-center gap-1.5 hover:text-teal-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-teal-400" />
            +91 8917476908
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            Bhubaneswar, Odisha
          </span>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-mono mb-10"
        >
          <a href="https://linkedin.com/in/anil-pradhan543" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-teal-400 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/Anil-Pradhan-web" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-teal-400 transition-colors">
            GitHub
          </a>
          <a href="#featured-work" className="text-text-secondary hover:text-teal-400 transition-colors">
            Portfolio
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#featured-work" className="btn-primary group" aria-label="View featured projects">
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
          <Link href="#contact" className="btn-secondary" aria-label="Get in touch">
            Get In Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator - outside content div, positioned relative to section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted z-10"
        aria-hidden="true"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <MousePointer2 className="w-5 h-5 text-teal-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}