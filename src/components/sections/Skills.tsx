"use client";

import { motion, Variants } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FaJava, FaPython, FaReact, FaDocker, FaGitAlt } from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiFastapi, SiNextdotjs, SiSqlite, 
  SiVercel, SiRender, SiGithubactions, SiPostman, SiRedis, 
  SiSwagger, SiGoogle, SiJsonwebtokens, SiNvidia, SiPostgresql, 
  SiTailwindcss, SiAxios, SiSentry, SiPrometheus 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { 
  BrainCircuit, Cpu, Database, Code2, Zap, Lock, 
  ShieldCheck, GitBranch, Box, Globe, Activity, Award, Github
} from 'lucide-react';

const skillCategories = [
  {
    title: "☕ Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"]
  },
  {
    title: "⚙️ Backend",
    skills: ["FastAPI", "REST APIs", "WebSockets", "LangGraph", "SQLAlchemy", "Pydantic"]
  },
  {
    title: "🌐 Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS", "Axios"]
  },
  {
    title: "🗄️ Databases",
    skills: ["PostgreSQL (Neon)", "SQLite", "Redis (Upstash)", "ChromaDB"]
  },
  {
    title: "🧠 AI / GenAI",
    skills: ["RAG", "LangGraph", "Gemini Live API", "Groq", "NVIDIA NIM", "Cerebras"]
  },
  {
    title: "🚀 DevOps & Cloud",
    skills: ["Docker", "GitHub Actions (CI/CD)", "Render", "Vercel"]
  },
  {
    title: "🔐 Authentication & Security",
    skills: ["JWT", "Google OAuth 2.0", "bcrypt", "CORS", "Rate Limiting"]
  },
  {
    title: "📊 Monitoring",
    skills: ["Prometheus", "Sentry"]
  },
  {
    title: "🛠️ Developer Tools",
    skills: ["Git", "GitHub", "Postman", "Swagger UI", "VS Code"]
  }
];

const techConfig: Record<string, { icon: React.ElementType; color?: string }> = {
  // Languages
  "Java":       { icon: FaJava,       color: "#f89820" },
  "Python":     { icon: FaPython,     color: "#3776AB" },
  "SQL":        { icon: SiPostgresql, color: "#336791" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },

  // Frontend
  "React":        { icon: FaReact,       color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Axios":        { icon: SiAxios,       color: "#5a29e4" },
  "HTML":         { icon: Code2,         color: "#E34F26" },
  "CSS":          { icon: Code2,         color: "#1572B6" },

  // Backend
  "FastAPI":      { icon: SiFastapi,   color: "#009688" },
  "REST APIs":    { icon: TbApi,       color: "#0ea5e9" },
  "WebSockets":   { icon: Zap,         color: "#f59e0b" },
  "LangGraph":    { icon: GitBranch,   color: "#4ade80" },
  "SQLAlchemy":   { icon: Database,    color: "#D71F00" },
  "Pydantic":     { icon: ShieldCheck, color: "#E92063" },
  "Prometheus":   { icon: SiPrometheus, color: "#E6522C" },
  "Sentry":       { icon: SiSentry,     color: "#362D59" },

  // AI / GenAI
  "RAG":             { icon: BrainCircuit, color: "#a78bfa" },
  "Gemini Live API": { icon: BrainCircuit, color: "#38bdf8" },
  "Groq":            { icon: Cpu,          color: "#f97316" },
  "NVIDIA NIM":      { icon: SiNvidia,     color: "#76B900" },
  "Cerebras":        { icon: Cpu,          color: "#FF6B35" },

  // Databases
  "PostgreSQL (Neon)": { icon: Database, color: "#00E599" },
  "SQLite":            { icon: SiSqlite, color: "#64b5f6" },
  "Redis (Upstash)":   { icon: SiRedis,  color: "#DC382D" },
  "ChromaDB":          { icon: Box,      color: "#FF6B35" },

  // Security
  "JWT":              { icon: SiJsonwebtokens, color: "#FB015B" },
  "Google OAuth 2.0": { icon: SiGoogle,        color: "#4285F4" },
  "bcrypt":           { icon: Lock,             color: "#94a3b8" },
  "CORS":             { icon: ShieldCheck,      color: "#22C55E" },
  "Rate Limiting":    { icon: Activity,         color: "#0EA5E9" },

  // DevOps & Cloud
  "Docker":                 { icon: FaDocker,        color: "#2496ED" },
  "GitHub Actions (CI/CD)": { icon: SiGithubactions, color: "#2088FF" },
  "Vercel":                 { icon: SiVercel,         color: "#ffffff" },
  "Render":                 { icon: SiRender,         color: "#46E3B7" },

  // Tools
  "VS Code":    { icon: VscCode,    color: "#007ACC" },
  "Git":        { icon: FaGitAlt,   color: "#F05032" },
  "GitHub":     { icon: Github,     color: "#ffffff" },
  "Postman":    { icon: SiPostman,   color: "#FF6C37" },
  "Swagger UI": { icon: SiSwagger,  color: "#85EA2D" },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 6 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Technical Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="flex flex-col gap-4 bg-[#050508]/40 border border-zinc-900 p-6 rounded-2xl hover:border-zinc-800 transition-colors"
          >
            <h3 className="font-title text-sm font-bold text-white tracking-wider uppercase border-b border-zinc-900 pb-2 flex items-center justify-between">
              <span>{category.title}</span>
              <span className="text-[10px] text-zinc-600 font-mono tracking-normal font-normal">
                {category.skills.length} skills
              </span>
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {category.skills.map((skill) => {
                const config = techConfig[skill];
                const Icon = config?.icon;
                return (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-zinc-950/60 border border-zinc-900/60 hover:border-violet-500/30 text-zinc-400 hover:text-zinc-200 text-xs font-mono rounded-lg transition-all cursor-default"
                  >
                    {Icon && (
                      <Icon
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{ color: config?.color }}
                      />
                    )}
                    <span className="leading-none">{skill}</span>
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
