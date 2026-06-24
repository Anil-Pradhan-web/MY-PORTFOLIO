
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Brain, Cpu, Rocket, Globe, Phone, Mail, Linkedin, Github, Code } from 'lucide-react';

export default function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const fullTerminalText = `$ anil --status
 
  [Focus]
  🚀 Building Production-Grade AI Systems
  🧠 FastAPI | LangGraph | RAG Pipelines
  🛡️ Backend & System Design
  ⚙️ Distributed Systems
 
  [Education]
  🎓 B.Tech CSE @ ITER, SOA University
  📈 CGPA: 9.11 / 10.0 (2024 - 2028)
 
  [Status]
  💻 Active in GDG Tech Community
  ✨ Code. Learn. Build. Repeat.`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTerminalText(fullTerminalText.substring(0, i));
      i++;
      if (i > fullTerminalText.length) {
        clearInterval(typingInterval);
      }
    }, 20);
    return () => clearInterval(typingInterval);
  }, [fullTerminalText]);



  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-between gap-8 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 mx-auto max-w-7xl pt-32 pb-16 overflow-hidden">

      {/* Static Background Orbs for Performance */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Tech Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] hidden lg:block text-violet-400/20"
      >
        <Code2 size={120} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[10%] hidden lg:block text-cyan-400/20"
      >
        <Brain size={100} />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] left-[20%] hidden lg:block text-violet-500/10"
      >
        <Cpu size={80} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex flex-1 flex-col z-10 w-full text-center lg:text-left items-center lg:items-start"
      >


        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-violet-400 text-lg sm:text-xl mb-4 tracking-wide"
        >
          &gt; Hello, I&apos;m
        </motion.p>

        {/* Name with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-title text-7xl sm:text-9xl lg:text-[110px] font-normal mb-6 tracking-tight leading-[0.9] flex flex-col items-center lg:items-start"
        >
          <span className="relative gradient-text font-extrabold">
            Anil
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-2 left-0 h-[4px] bg-gradient-to-r from-violet-600 to-transparent rounded-full"
            />
          </span>
          <span className="lg:ml-12 gradient-text font-extrabold tracking-widest mt-2">Pradhan</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl lg:text-[32px] text-zinc-300 font-syne font-medium tracking-wide mb-8 leading-relaxed lg:leading-tight flex flex-col lg:flex-row lg:items-center gap-y-2.5 lg:gap-x-4 lg:gap-y-0 text-center lg:text-left"
        >
          <span className="px-3.5 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm sm:text-base lg:text-[15px] font-mono tracking-wider w-fit mx-auto lg:mx-0 shadow-[0_0_15px_rgba(139,92,246,0.05)]">Full Stack Developer</span>
          <span className="text-zinc-800 hidden lg:inline">|</span>
          <span className="px-3.5 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm sm:text-base lg:text-[15px] font-mono tracking-wider w-fit mx-auto lg:mx-0 shadow-[0_0_15px_rgba(6,182,212,0.05)]">AI Systems Engineer</span>
          <span className="text-zinc-800 hidden lg:inline">|</span>
          <span className="px-3.5 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm sm:text-base lg:text-[15px] font-mono tracking-wider w-fit mx-auto lg:mx-0 shadow-[0_0_15px_rgba(139,92,246,0.05)]">Backend Builder</span>
        </motion.h2>
 
        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-zinc-400 text-base sm:text-lg max-w-xl mb-6 leading-relaxed font-sans lg:text-left text-center"
        >
          Building scalable backend systems and production-grade AI applications.
          Turning ideas into scalable systems, one commit at a time.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-400 text-xs sm:text-sm font-mono mb-4 justify-center lg:justify-start"
        >
          <a href="tel:+918917476908" className="hover:text-violet-400 transition-colors flex items-center gap-1.5">
            <Phone size={13} className="text-violet-400" /> +91 8917476908
          </a>
          <span className="text-zinc-700">·</span>
          <a href="mailto:anilpradhan9644@gmail.com" className="hover:text-violet-400 transition-colors flex items-center gap-1.5">
            <Mail size={13} className="text-violet-400" /> anilpradhan9644@gmail.com
          </a>
          <span className="text-zinc-700">·</span>
          <a href="https://linkedin.com/in/anil-pradhan543" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-1.5">
            <Linkedin size={13} className="text-violet-400" /> linkedin.com/in/anil-pradhan543
          </a>
          <span className="text-zinc-700">·</span>
          <a href="https://github.com/Anil-Pradhan-web" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-1.5">
            <Github size={13} className="text-violet-400" /> github.com/Anil-Pradhan-web
          </a>
        </motion.div>

        {/* Profiles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-400 text-xs sm:text-sm font-mono mb-8 justify-center lg:justify-start"
        >
          <a href="https://leetcode.com/u/Anil_Pradhan/" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-1.5">
            <Code size={13} className="text-violet-400" /> LeetCode
          </a>
          <span className="text-zinc-700">·</span>
          <a href="https://www.geeksforgeeks.org/profile/anilpradhan543" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-1.5">
            <Code size={13} className="text-violet-400" /> GeeksForGeeks
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group relative flex items-center justify-center bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl w-full sm:w-auto text-center transition-all font-sans shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Explore My Work</span>
          </a>
          <a
            href="/my_resume.pdf?v=1.1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center glass-card backdrop-blur-md border border-zinc-700 text-zinc-300 font-medium px-8 py-4 rounded-xl w-full sm:w-auto text-center hover:bg-zinc-800/50 hover:text-white hover:border-violet-400/50 transition-all font-sans"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side - Image and Terminal Container */}
      <div className="flex flex-col gap-12 z-10 w-full lg:w-auto items-center lg:items-end">
        
        {/* User Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative group"
        >
          {/* Outer Glows */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/30 via-cyan-400/20 to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-violet-500 to-cyan-400 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
          
          {/* Main Image Container */}
          <div className="relative w-56 h-56 xl:w-64 xl:h-64 rounded-full border-2 border-white/10 overflow-hidden backdrop-blur-sm shadow-[0_0_50px_rgba(139,92,246,0.1)]">
            <img 
              src="/anil.png" 
              alt="Anil Pradhan" 
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Animated Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none opacity-40">
              <circle 
                cx="50%" cy="50%" r="48%" 
                fill="none" 
                stroke="url(#grad1)" 
                strokeWidth="2" 
                strokeDasharray="10 20"
                className="animate-[spin_20s_linear_infinite]"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-lg border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">Available</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Terminal Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-[450px] xl:w-[500px] relative perspective-1000"
        >
          {/* Glow Effects */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-violet-500/40 via-cyan-500/20 to-transparent rounded-2xl blur-2xl opacity-60 translate-y-4 -translate-x-4" />
          <div className="absolute inset-x-10 -bottom-8 h-24 bg-violet-400/20 blur-3xl opacity-60" />

          {/* Terminal Window */}
          <div className="relative w-full rounded-2xl border border-white/10 bg-[#050508]/60 backdrop-blur-2xl overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.15)]">
            {/* Scanlines Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,33,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />

            {/* Header */}
            <div className="flex px-5 py-4 w-full items-center justify-between border-b border-white/5 bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                <Rocket size={10} className="text-violet-400" />
                <span>system_core.sh</span>
              </div>
              <div className="w-4 h-4 rounded-full border border-violet-500/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></div>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 font-mono text-[14px] leading-7 text-violet-200/90 whitespace-pre-wrap w-full overflow-hidden min-h-[340px] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent pointer-events-none" />
              <span className="relative z-10">{terminalText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 bg-violet-400 h-[1.2em] translate-y-1 ml-1 shadow-[0_0_15px_rgba(139,92,246,1)]"
              ></motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-zinc-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-violet-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
