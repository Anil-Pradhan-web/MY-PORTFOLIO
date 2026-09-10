'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Trophy, FileText, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Ambient background illumination - lightweight GPU-composited */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/[0.05] rounded-full blur-[80px] transform-gpu" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-indigo-500/[0.04] rounded-full blur-[80px] transform-gpu" />
      </div>

      {/* Subtle architectural grid lines */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-14 items-center">

          {/* ── Left Column: Editorial & System Credentials ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col text-left"
          >
            {/* Live Availability Beacon */}
            <motion.div variants={item} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-200 font-mono text-xs tracking-tight">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Open to Internships · Bangalore, Hyderabad, Bhubaneswar</span>
              </span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              id="hero-title"
              variants={item}
              className="heading-1 text-text-primary tracking-tight font-display mb-3"
            >
              Anil Pradhan
            </motion.h1>

            {/* Role & Engineering Focus */}
            <motion.div variants={item} className="mb-5">
              <p className="text-base sm:text-lg font-medium text-emerald-400 font-body flex items-center gap-2 flex-wrap">
                <span>AI &amp; Backend Engineer</span>
                <span className="text-text-muted">/</span>
                <span className="text-text-primary">Multi-Agent Systems &amp; Computer Vision</span>
              </p>
            </motion.div>

            {/* Narrative Paragraphs */}
            <motion.div variants={item} className="space-y-3 mb-6 max-w-2xl">
              <p className="body-lg text-text-primary/95 font-normal leading-relaxed">
                I&apos;m a Computer Science undergraduate who enjoys building the systems behind real-world AI products.
              </p>
              <p className="body text-text-secondary leading-relaxed">
                My work focuses on <strong className="text-text-primary font-semibold">backend engineering, multi-agent systems, computer vision, and reliable AI pipelines</strong> using{' '}
                <span className="font-mono text-xs text-teal-300 bg-bg-card/80 px-2 py-0.5 rounded border border-border-primary">
                  Python · FastAPI · LangGraph · OpenCV · PyTorch
                </span>.
              </p>
            </motion.div>

            {/* Flagship Achievement Pill */}
            <motion.div
              variants={item}
              className="mb-6 p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-bg-card to-bg-card border border-amber-500/25 flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400 flex-shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">Dell FutureMinds 2nd Runner-Up</span>{' '}
                <span className="text-amber-300/90 font-mono text-xs">(Top 6 / 8,000+)</span>
                <span className="text-text-muted mx-1.5 hidden sm:inline">·</span>
                <span className="block sm:inline text-text-muted mt-0.5 sm:mt-0">
                  4× AI Hackathon Builder (Dell, MSFT, AWS, Google)
                </span>
              </div>
            </motion.div>

            {/* Action Bar & Quick Reach */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <Link href="#featured-work" className="btn-primary group" aria-label="View featured projects">
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href="/Anil_Pradhan_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-1.5 group"
                aria-label="View or Download Resume PDF"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link href="#contact" className="btn-secondary" aria-label="Get in touch with Anil">
                Get In Touch
              </Link>

              {/* Social Channels */}
              <div className="flex items-center gap-2 sm:ml-2 border-l border-border-primary/80 pl-4">
                <a
                  href="https://github.com/Anil-Pradhan-web"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-border-primary bg-bg-card/70 text-text-secondary hover:text-white hover:border-border-secondary hover:bg-bg-card transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/anil-pradhan543"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-border-primary bg-bg-card/70 text-text-secondary hover:text-[#0A66C2] hover:border-border-secondary hover:bg-bg-card transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:anilpradhan9644@gmail.com"
                  className="p-2.5 rounded-lg border border-border-primary bg-bg-card/70 text-text-secondary hover:text-emerald-400 hover:border-border-secondary hover:bg-bg-card transition-all"
                  aria-label="Email Anil"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Direct Contact Metadata */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted font-body"
            >
              <a href="mailto:anilpradhan9644@gmail.com" className="inline-flex items-center gap-1.5 hover:text-text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                anilpradhan9644@gmail.com
              </a>
              <a href="tel:+918917476908" className="inline-flex items-center gap-1.5 hover:text-text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                +91 8917476908
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Bhubaneswar, Odisha
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Engineer Portrait & Telemetry Badge with Animated Border ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-end justify-center"
          >
            <div className="relative w-full max-w-sm group">
              {/* Outer ambient soft glow - GPU accelerated */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-indigo-600/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform-gpu" />

              {/* Animated Rotating Gradient Border Container */}
              <div className="relative p-[2.5px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-bg-card">
                {/* Rotating Conic Light Beam on Border - GPU hardware accelerated */}
                <div
                  className="absolute inset-[-150%] animate-[spin_5s_linear_infinite] transform-gpu will-change-transform"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, #2563eb 60deg, #38bdf8 140deg, #6366f1 220deg, transparent 360deg)',
                  }}
                  aria-hidden="true"
                />

                {/* Inner Portrait Card */}
                <div className="relative rounded-[14px] overflow-hidden bg-bg-card">
                  <Image
                    src="/anil.png"
                    alt="Anil Pradhan"
                    width={384}
                    height={480}
                    priority
                    className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 384px"
                  />

                  {/* Sub-photo Telemetry Ribbon */}
                  <div className="p-4 bg-gradient-to-t from-bg-primary via-bg-card to-bg-card border-t border-border-primary/80">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-text-muted">Education:</span>
                      <span className="text-text-primary font-semibold">B.Tech CSE · ITER SOA</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono mt-1.5">
                      <span className="text-text-muted">Academic Merit:</span>
                      <span className="text-blue-400 font-bold">CGPA 8.93 / 10</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono mt-1.5 pt-1.5 border-t border-border-primary/40">
                      <span className="text-text-muted">Location:</span>
                      <span className="text-text-secondary flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        Bhubaneswar, IN
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}