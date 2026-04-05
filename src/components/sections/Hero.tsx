"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const fullTerminalText = `$ anil --status

  Role:   Full-Stack Dev                       |
  CGPA:   9.11 / 10.0                          |
  Year:   B.Tech CSE, Sem 4                    |
  Uni:    ITER, SOA Univ, Bhubaneswar, Odisha  |
  Focus:  AI + Backend                         |
  Open:   Internships ✓                        |`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTerminalText(fullTerminalText.substring(0, i));
      i++;
      if (i > fullTerminalText.length) {
        clearInterval(typingInterval);
      }
    }, 20); // typing speed
    return () => clearInterval(typingInterval);
  }, [fullTerminalText]);

  return (
    <section id="hero" className="relative min-h-[90vh] w-full flex flex-col justify-center items-center px-6 sm:px-12 md:px-24 xl:px-32 lg:flex-row lg:justify-between mx-auto max-w-7xl pt-32 pb-16">
      
      {/* Background Gradients and Noise */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwYTBhMGEiPjwvcmVjdD48cGF0aCBkPSJNMCAwdjRoNHYtNEgwbTIgMmgydjJoLTJ2LTJtLTIgMmgydjJoLTJ2LTIiIGZpbGw9IiMxMTEiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] opacity-20 pointer-events-none z-0" />
      
      {/* Left Content */}
      <div className="flex flex-col z-10 w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-zinc-800 rounded-full px-5 py-2 mb-10 w-fit shadow-lg shadow-black/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
          </span>
          <span className="text-zinc-400 text-xs sm:text-sm tracking-wide">
            Currently building: <span className="text-zinc-200 font-medium">VolunteerIQ</span> <span className="text-zinc-600">-</span> Google Solution Challenge 2026
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-fuchsia-400 text-xl mb-4 tracking-wide"
        >
          &gt; Hello, I'm
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-syne text-5xl sm:text-7xl lg:text-[80px] font-bold text-white mb-4 tracking-tight"
        >
          Anil Pradhan
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-4xl text-zinc-400 font-syne font-medium tracking-wide mb-8"
        >
          Backend Architect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-400 text-lg max-w-lg mb-12 leading-relaxed font-sans"
        >
          Building production-grade AI + Full-Stack systems from Bhubaneswar, India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-bold px-8 py-3.5 rounded-lg hover:from-fuchsia-400 hover:to-pink-400 w-full sm:w-auto text-center transition-all font-sans shadow-[0_0_20px_rgba(232,121,249,0.4)] hover:shadow-[0_0_30px_rgba(232,121,249,0.6)]"
          >
            View My Work
          </a>
          <a
            href="/my_resume.pdf"
            target="_blank"
            className="flex items-center justify-center bg-zinc-900/50 backdrop-blur-md border border-zinc-700 text-zinc-300 font-medium px-8 py-3.5 rounded-lg w-full sm:w-auto text-center hover:bg-zinc-800 hover:text-white transition-all font-sans"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Right Content - Terminal Block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="hidden lg:flex w-full lg:w-[500px] z-10 relative mt-16 lg:mt-0"
      >
        {/* Massive outer glow */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-fuchsia-500/60 via-transparent to-transparent rounded-2xl blur-2xl opacity-70 translate-y-4 -translate-x-4" />
        <div className="absolute inset-x-10 -bottom-8 h-20 bg-fuchsia-400/30 blur-3xl opacity-80" />
        
        <div className="relative w-full rounded-xl border border-zinc-700/50 bg-[#0d0d0d]/80 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* Header */}
          <div className="flex px-5 py-4 w-full items-center justify-between border-b border-zinc-800/80 bg-[#141414]/90">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
            </div>
            <span className="text-xs font-mono text-zinc-400">terminal - bash</span>
            <div className="w-4 h-4 rounded-full border border-fuchsia-400/40 flex items-center justify-center p-0.5 shadow-[0_0_10px_rgba(232,121,249,0.3)]">
              <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
            </div>
          </div>
          
          {/* Body */}
          <div className="p-8 font-mono text-[15px] leading-8 text-fuchsia-300/90 whitespace-pre w-full overflow-hidden min-h-[300px] shadow-[inset_0_-40px_40px_rgba(232,121,249,0.05)] border-b-2 border-r-2 border-fuchsia-400/20">
            <span>{terminalText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 bg-fuchsia-400 h-[1em] translate-y-0.5 ml-1"
            ></motion.span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
