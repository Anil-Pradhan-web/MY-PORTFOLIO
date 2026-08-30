'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, MousePointer2, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// One orchestrated load sequence: heading → subtitle → body → contact → socials → CTAs
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

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

      <div className="relative z-10 container-custom w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 lg:gap-16">

          {/* ── Left: Text Content (staggered entrance) ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left"
          >
            {/* Name */}
            <motion.h1
              id="hero-title"
              variants={item}
              className="heading-1 mb-4"
            >
              Anil Pradhan
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={item}
              className="font-mono text-sm md:text-base font-medium text-teal-400 tracking-widest uppercase mb-6"
            >
              Software Engineer | Backend &amp; AI
              <span className="cursor-blink ml-1" aria-hidden="true">▍</span>
            </motion.p>

            {/* Description */}
            <motion.p
              variants={item}
              className="body-lg max-w-xl mb-8 text-text-secondary"
            >
              Backend-focused Computer Science undergraduate specializing in AI-powered applications, scalable backend systems, and intelligent software using FastAPI, LangGraph, and RAG.
            </motion.p>

            {/* Contact info */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5 text-sm font-mono text-text-muted mb-6"
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

            {/* Social Links */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5 text-sm font-mono mb-8"
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
              variants={item}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
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
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Status pill */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-sm text-emerald-400 font-mono text-xs font-medium whitespace-nowrap shadow-lg">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  Open to internships
                </span>
              </div>
              {/* Subtle glow behind photo */}
              <div className="absolute -inset-3 bg-teal-500/10 rounded-2xl blur-2xl pointer-events-none" aria-hidden="true" />
              <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 rounded-2xl overflow-hidden border-2 border-border-primary hover:border-teal-500/50 transition-all duration-300 shadow-lg">
                <Image
                  src="/anil.png"
                  alt="Anil Pradhan"
                  className="w-full h-auto block"
                  width={320}
                  height={426}
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </motion.div>

        </div>
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