"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FaJava, FaPython, FaReact, FaCss3Alt, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiFastapi, SiNextdotjs, SiSqlite, SiFirebase, SiVercel, SiRender, SiGithubactions, SiPostman, SiRedis, SiSwagger, SiOpenai, SiAxios, SiMapbox, SiGoogle, SiJsonwebtokens } from 'react-icons/si';
import { TbApi, TbRobot } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { BrainCircuit, Cpu, Database, BarChart3, Zap, Lock, Workflow, FileText, Volume2, Code2, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    title: "🌐 Frontend",
    skills: ["Next.js 14", "React", "Vanilla CSS", "Recharts", "Lucide React", "Axios", "react-map-gl"]
  },
  {
    title: "⚙️ Backend",
    skills: ["FastAPI", "Microsoft AutoGen v0.2", "OpenAI SDK", "SlowAPI", "SQLAlchemy", "Alembic", "Pydantic", "Uvicorn", "Loguru", "pdfplumber", "edge-tts"]
  },
  {
    title: "🧠 AI / LLM",
    skills: ["Google Gemini 1.5 Flash", "Groq (Llama 3.3 70B)", "Microsoft AutoGen"]
  },
  {
    title: "🗄️ Databases",
    skills: ["Neon Postgres", "SQLite", "Upstash Redis"]
  },
  {
    title: "🔐 Auth & Security",
    skills: ["Google OAuth 2.0", "Firebase Authentication", "JWT", "bcrypt"]
  },
  {
    title: "🚀 DevOps & Infra",
    skills: ["Docker", "GitHub Actions", "Vercel", "Render.com", "CI/CD"]
  },
  {
    title: "🛠️ Tools",
    skills: ["VS Code", "Git", "Swagger UI", "Postman", "Mapbox GL"]
  },
  {
    title: "☕ Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java"]
  }
];

const techConfig: Record<string, { icon: React.ElementType; color?: string }> = {
  // Languages
  "Python": { icon: FaPython, color: "#3776AB" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "Java": { icon: FaJava, color: "#f89820" },

  // Frontend
  "Next.js 14": { icon: SiNextdotjs, color: "#ffffff" },
  "React": { icon: FaReact, color: "#61DAFB" },
  "Vanilla CSS": { icon: FaCss3Alt, color: "#1572B6" },
  "Recharts": { icon: BarChart3, color: "#3b82f6" },
  "Lucide React": { icon: Code2, color: "#f43f5e" },
  "Axios": { icon: SiAxios, color: "#5A29E4" },
  "react-map-gl": { icon: SiMapbox, color: "#3387FF" },

  // Backend
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "Microsoft AutoGen v0.2": { icon: TbRobot, color: "#0078D4" },
  "OpenAI SDK": { icon: SiOpenai, color: "#412991" },
  "SlowAPI": { icon: TbApi, color: "#0ea5e9" },
  "SQLAlchemy": { icon: Database, color: "#D71F00" },
  "Alembic": { icon: Database, color: "#8b5cf6" },
  "Pydantic": { icon: ShieldCheck, color: "#E92063" },
  "Uvicorn": { icon: Zap, color: "#24292E" },
  "Loguru": { icon: FileText, color: "#10b981" },
  "pdfplumber": { icon: FileText, color: "#ef4444" },
  "edge-tts": { icon: Volume2, color: "#6366f1" },

  // AI / LLM
  "Google Gemini 1.5 Flash": { icon: BrainCircuit, color: "#8b5cf6" },
  "Groq (Llama 3.3 70B)": { icon: Cpu, color: "#f97316" },
  "Microsoft AutoGen": { icon: TbRobot, color: "#0078D4" },

  // Databases
  "Neon Postgres": { icon: Database, color: "#00E599" },
  "SQLite": { icon: SiSqlite, color: "#003B57" },
  "Upstash Redis": { icon: SiRedis, color: "#DC382D" },

  // Auth & Security
  "Google OAuth 2.0": { icon: SiGoogle, color: "#4285F4" },
  "Firebase Authentication": { icon: SiFirebase, color: "#FFCA28" },
  "JWT": { icon: SiJsonwebtokens, color: "#FB015B" },
  "bcrypt": { icon: Lock, color: "#94a3b8" },

  // DevOps & Infra
  "Docker": { icon: FaDocker, color: "#2496ED" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "Vercel": { icon: SiVercel, color: "#ffffff" },
  "Render.com": { icon: SiRender, color: "#46E3B7" },
  "CI/CD": { icon: Workflow, color: "#10b981" },

  // Tools
  "VS Code": { icon: VscCode, color: "#007ACC" },
  "Git": { icon: FaGitAlt, color: "#F05032" },
  "Swagger UI": { icon: SiSwagger, color: "#85EA2D" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Mapbox GL": { icon: SiMapbox, color: "#3387FF" }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Tech Stack</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="font-mono text-violet-400 font-semibold mb-4 tracking-wide text-sm">{category.title}</h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill) => {
                const config = techConfig[skill];
                const Icon = config?.icon;
                return (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-2.5 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-base font-medium rounded-xl hover:border-violet-400 hover:text-white hover:bg-violet-500/5 hover:shadow-[0_0_12px_rgba(139,92,246,0.15)] transition-all cursor-default shadow-sm"
                  >
                    {Icon && <Icon className="w-5 h-5 drop-shadow-md" color={config?.color} />}
                    {skill}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
