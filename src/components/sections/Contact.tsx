"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Briefcase } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const contactInfo = [
  { icon: Mail, text: "anilpradhan9644@gmail.com", href: "mailto:anilpradhan9644@gmail.com" },
  { icon: Linkedin, text: "linkedin.com/in/anil-pradhan543", href: "https://linkedin.com/in/anil-pradhan543" },
  { icon: Github, text: "github.com/Anil-Pradhan-web", href: "https://github.com/Anil-Pradhan-web" },
  { icon: MapPin, text: "Bhubaneswar, Odisha, India" },
  { icon: Briefcase, text: "Open to: Internships in Bangalore, Hyderabad, Bhubaneswar" }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Let's Build Something</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="flex items-center gap-4 text-zinc-300 group">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-colors">
                  <Icon className="text-zinc-500 group-hover:text-cyan-400 transition-colors" size={20} />
                </div>
                {info.href ? (
                  <a href={info.href} target="_blank" rel="noreferrer" className="text-lg hover:text-cyan-400 transition-colors font-sans">
                    {info.text}
                  </a>
                ) : (
                  <span className="text-lg font-sans">
                    {info.text}
                  </span>
                )}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0f0f0f] border border-zinc-800 p-8 rounded-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
          
          <form suppressHydrationWarning className="flex flex-col gap-6" action="https://formsubmit.co/anilpradhan9644@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://anilpradhan-web.vercel.app/" />
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-zinc-400 font-mono tracking-wide">Name</label>
              <input
                suppressHydrationWarning
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className="bg-black border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-zinc-600"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-zinc-400 font-mono tracking-wide">Email</label>
              <input
                suppressHydrationWarning
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="bg-black border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-zinc-600"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-zinc-400 font-mono tracking-wide">Message</label>
              <textarea
                suppressHydrationWarning
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help?"
                className="bg-black border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-zinc-600 resize-none"
                required
              ></textarea>
            </div>

            <button
              suppressHydrationWarning
              type="submit"
              className="mt-2 w-full bg-cyan-400 text-black font-bold text-lg py-4 rounded-lg hover:bg-cyan-300 transition-colors neon-glow"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-sm gap-4">
        <span>Built by Anil Pradhan · 2026 · ITER, SOA University, Bhubaneswar, Odisha</span>
        <div className="flex gap-4">
          <a href="https://github.com/Anil-Pradhan-web" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/anil-pradhan543" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </section>
  );
}
