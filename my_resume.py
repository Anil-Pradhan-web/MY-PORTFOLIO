import os
import subprocess

def generate_resume(output_path):
    html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anil Pradhan Resume</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      color: #1e293b; /* slate-800 */
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    @media print {
      body {
        width: 8.5in;
        height: 11in;
        margin: 0;
        padding: 0;
      }
      @page {
        size: letter;
        margin: 0.12in 0.25in;
      }
    }
  </style>
</head>
<body class="bg-white p-0 text-slate-800">

  <!-- Header Section -->
  <div class="bg-[#0f172a] text-white rounded-lg p-3.5 flex justify-between items-center mb-2.5">
    <!-- Left: Profile Info -->
    <div class="w-[58%]">
      <h1 class="text-xl font-extrabold tracking-tight">ANIL PRADHAN</h1>
      <h2 class="text-[9px] font-bold tracking-wider text-sky-400 mt-0.5 uppercase">Backend Engineer | AI Systems Builder</h2>
      <p class="text-[8.5px] text-slate-300 mt-1.5 leading-snug">
        Computer Science undergraduate passionate about building scalable backend systems and AI-powered applications. Experienced in FastAPI, LangGraph, RAG pipelines, and cloud deployment. Eager to contribute to impactful products and grow as a software engineer.
      </p>
    </div>
    <!-- Right: Contact Details -->
    <div class="w-[40%] flex flex-col items-end text-[8.5px] text-slate-200 space-y-0.5 font-mono">
      <div class="flex items-center gap-1.5 justify-end">
        <span>anilpradhan9644@gmail.com</span>
        <svg class="w-2.5 h-2.5 text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>
      <div class="flex items-center gap-1.5 justify-end">
        <span>+91 8917476908</span>
        <svg class="w-2.5 h-2.5 text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      </div>
      <div class="flex items-center gap-1.5 justify-end">
        <span>Bhubaneswar, Odisha, India</span>
        <svg class="w-2.5 h-2.5 text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </div>
      <div class="flex items-center gap-1.5 justify-end">
        <a href="https://linkedin.com/in/anil-pradhan543" class="hover:underline">linkedin.com/in/anil-pradhan543</a>
        <svg class="w-2.5 h-2.5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </div>
      <div class="flex items-center gap-1.5 justify-end">
        <a href="https://github.com/Anil-Pradhan-web" class="hover:underline">github.com/Anil-Pradhan-web</a>
        <svg class="w-2.5 h-2.5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      </div>
      <div class="flex items-center gap-1.5 justify-end">
        <a href="https://my-portfolio-anil.vercel.app/" class="hover:underline">my-portfolio-anil.vercel.app</a>
        <svg class="w-2.5 h-2.5 text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      </div>
    </div>
  </div>

  <!-- Education Section -->
  <div class="mb-2.5">
    <div class="flex items-center gap-2 border-b border-slate-200 pb-1 mb-1.5">
      <!-- Circle Icon Badge -->
      <div class="w-5.5 h-5.5 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"></path>
        </svg>
      </div>
      <h3 class="text-[10px] font-extrabold tracking-wider text-[#0f172a] uppercase flex-grow">Education</h3>
      <!-- Calendar Icon on the right -->
      <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    </div>

    <div class="grid grid-cols-2 gap-4 text-[9.2px]">
      <div>
        <h4 class="font-bold text-slate-900">ITER, SOA University, Bhubaneswar</h4>
        <p class="text-slate-600 font-medium">B.Tech in Computer Science & Engineering</p>
        <p class="text-slate-500 font-mono text-[8.5px] mt-0.5">2024 – 2028 &nbsp;|&nbsp; <span class="font-bold text-slate-900">CGPA: 9.11/10</span></p>
      </div>
      <div class="border-l border-dashed border-slate-300 pl-4">
        <h4 class="font-bold text-slate-900">Odisha Board of Secondary Education</h4>
        <p class="text-slate-600 font-medium">Class XII (PCM with IT)</p>
        <p class="text-slate-500 font-mono text-[8.5px] mt-0.5">2022 – 2024 &nbsp;|&nbsp; <span class="font-bold text-slate-900">Percentage: 85%</span></p>
      </div>
    </div>
  </div>

  <!-- Experience Section -->
  <div class="mb-2.5">
    <div class="flex items-center gap-2 border-b border-slate-200 pb-1 mb-1.5">
      <div class="w-5.5 h-5.5 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>
      <h3 class="text-[10px] font-extrabold tracking-wider text-[#0f172a] uppercase flex-grow">Experience</h3>
      <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
    </div>

    <div>
      <div class="flex justify-between items-baseline mb-0.5">
        <h4 class="text-[9.2px] font-bold text-slate-900">College Ambassador <span class="text-slate-400 font-normal">|</span> <span class="text-[#1e3a8a]">Techfest, IIT Bombay</span></h4>
        <span class="text-[8.5px] text-slate-500 font-mono">Jun 2026 – Present</span>
      </div>
      <ul class="list-disc list-outside ml-3.5 text-[8.8px] text-slate-600 space-y-[1px]">
        <li>Selected as a Campus Ambassador for Techfest, IIT Bombay, participating in technical and industry-oriented initiatives.</li>
        <li>Contributed to web development and marketing by successfully completing multiple project-based assignments.</li>
        <li>Conducted market research, prepared a business strategy presentation, and qualified for Round 2 of the FlowFinance Growth Strategy & Business Development Challenge.</li>
      </ul>
    </div>
  </div>

  <!-- Projects Section -->
  <div class="mb-2.5">
    <div class="flex items-center gap-2 border-b border-slate-200 pb-1 mb-1.5">
      <div class="w-5.5 h-5.5 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      </div>
      <h3 class="text-[10px] font-extrabold tracking-wider text-[#0f172a] uppercase flex-grow">Technical Projects</h3>
      <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    </div>

    <div class="space-y-2">
      <!-- Project 1 -->
      <div>
        <div class="flex justify-between items-baseline mb-0.5">
          <h4 class="text-[9.2px] font-bold text-slate-900">
            <span class="text-[#1e3a8a]">AI Career Mentor</span> 
            <span class="text-slate-400 font-normal">|</span> 
            <a href="https://ai-career-mentor-anil.vercel.app/" class="text-[#1e3a8a] hover:underline font-semibold">Live Demo</a> 
            <span class="text-slate-400 font-normal">|</span> 
            <span class="text-slate-500 italic font-normal">Solo Full-Stack Developer</span>
          </h4>
          <span class="text-[8.5px] text-slate-500 font-mono">March 2026 – Present</span>
        </div>
        <ul class="list-disc list-outside ml-3.5 text-[8.6px] text-slate-600 space-y-[1px] leading-tight">
          <li><strong>Multi-Agent Orchestration & Concurrency:</strong> Orchestrated 7 specialized AI agents using a parallel LangGraph DAG; reduced end-to-end latency by 60% (from 4 mins to 60s) by executing resume parsing and market scraping concurrently.</li>
          <li><strong>System Resilience & Fault Tolerance:</strong> Built failover architecture with custom Circuit Breakers and LLM fallback chains (Groq ⇄ Cerebras ⇄ NVIDIA NIM), preventing request drops during API rate-limit spikes.</li>
          <li><strong>Real-time Bidirectional Streaming & State Machines:</strong> Designed a full-duplex WebSocket protocol with Gemini Multimodal Live API for low-latency audio coaching; built a 7-phase FSM coding interview simulator with Monaco IDE.</li>
          <li><strong>High-Efficiency RAG & Semantic Search:</strong> Optimized ChromaDB RAG using local ONNX embeddings (all-MiniLM-L6-v2) to eliminate API costs; built a keyword-search fallback to prevent OOM container crashes.</li>
          <li><strong>Rate-Limiting, Caching & Telemetry:</strong> Integrated Upstash Redis middleware for sliding-window rate limiting and JWT validation; built a telemetry dashboard tracking API latencies and token cost rollups.</li>
          <li><strong>Data Durability, Dockerization & CI/CD:</strong> Enforced data validation with Pydantic v2, persisting entries to Postgres with PgBouncer pooling; deployed multi-stage Docker builds with a 116 Pytest CI/CD suite.</li>
        </ul>
        <div class="flex flex-wrap gap-1 mt-1 ml-3.5">
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">FastAPI</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">LangGraph</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">ChromaDB</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">ONNX</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">Docker</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">Upstash Redis</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">Next.js 14</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">Gemini Live</span>
        </div>
      </div>

      <!-- Project 2 -->
      <div>
        <div class="flex justify-between items-baseline mb-0.5">
          <h4 class="text-[9.2px] font-bold text-slate-900">
            <span class="text-[#1e3a8a]">Task Pilot-AI</span> 
            <span class="text-slate-400 font-normal">|</span> 
            <a href="https://taskpilot-ai-app.onrender.com/" class="text-[#1e3a8a] hover:underline font-semibold">Live Demo</a> 
            <span class="text-slate-400 font-normal">|</span> 
            <span class="text-slate-500 italic font-normal">Integration Lead • Team IdeaForg-E</span>
          </h4>
          <span class="text-[8.5px] text-slate-500 font-mono">June 2026 – July 2026</span>
        </div>
        <ul class="list-disc list-outside ml-3.5 text-[8.6px] text-slate-600 space-y-[1px] leading-tight">
          <li><strong>Solved Developer Context Overload:</strong> Aggregated engineering tasks from 7 sources (Jira, GitHub, Slack, Email, Calendar, Meetings, Incidents) into a unified DB, saving developers ~2 hours daily.</li>
          <li><strong>Recovered Untracked \"Hidden\" Tasks:</strong> Developed an LLM and rule-based extraction system to parse emails and Slack chats for hidden action items, capturing ~35% of previously untracked tasks.</li>
          <li><strong>Reduced LLM Costs and API Failures:</strong> Built local fallback algorithms to reduce token costs and bypass Groq API rate limits; used fuzzy text-matching for deduplication and local Slack parsing.</li>
          <li><strong>Prevented Database Locking and Workflow Freezes:</strong> Configured SQLite in WAL mode to allow concurrent multi-agent writes without locking; built a self-healing monitor to auto-restart stuck pipeline runs.</li>
          <li><strong>Automated Real-Time Emergency Re-Prioritization:</strong> Created a chat command API allowing developers to inject critical P1 incidents; autonomously re-ran the 6-stage pipeline to update schedules in under 15s.</li>
        </ul>
        <div class="flex flex-wrap gap-1 mt-1 ml-3.5">
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">FastAPI</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">LangGraph</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">SQLite</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">LLMs</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">React</span>
          <span class="bg-blue-50/50 text-[#1e3a8a] border border-blue-200/80 px-1 py-0 rounded text-[7.5px] font-semibold">Redis</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Skills Section -->
  <div class="mb-2.5">
    <div class="flex items-center gap-2 border-b border-slate-200 pb-1 mb-1.5">
      <div class="w-5.5 h-5.5 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </div>
      <h3 class="text-[10px] font-extrabold tracking-wider text-[#0f172a] uppercase flex-grow">Technical Skills</h3>
      <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
      </svg>
    </div>

    <div class="grid grid-cols-6 gap-2 text-[8.2px] leading-tight">
      <div class="border-r border-slate-100 pr-1">
        <h4 class="font-bold text-[#1e3a8a] mb-0.5 text-[8.5px]">Languages</h4>
        <ul class="space-y-0.5 text-slate-600 font-medium">
          <li>Python</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>SQL</li>
        </ul>
      </div>
      <div class="border-r border-slate-100 pr-1 pl-0.5">
        <h4 class="font-bold text-[#1e3a8a] mb-0.5 text-[8.5px]">Backend</h4>
        <ul class="space-y-0.5 text-slate-600 font-medium">
          <li>FastAPI</li>
          <li>LangGraph</li>
          <li>Pydantic</li>
          <li>SQLAlchemy</li>
          <li>WebSocket</li>
          <li>Prometheus</li>
          <li>Sentry</li>
          <li>pdfplumber</li>
          <li>edge-tts</li>
        </ul>
      </div>
      <div class="border-r border-slate-100 pr-1 pl-0.5">
        <h4 class="font-bold text-[#1e3a8a] mb-0.5 text-[8.5px]">Frontend</h4>
        <ul class="space-y-0.5 text-slate-600 font-medium">
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>Axios</li>
          <li>React</li>
        </ul>
      </div>
      <div class="border-r border-slate-100 pr-1 pl-0.5">
        <h4 class="font-bold text-[#1e3a8a] mb-0.5 text-[8.5px]">Database</h4>
        <ul class="space-y-0.5 text-slate-600 font-medium">
          <li>Neon Postgres</li>
          <li>SQLite</li>
          <li>Upstash Redis</li>
          <li>ChromaDB</li>
        </ul>
      </div>
      <div class="border-r border-slate-100 pr-1 pl-0.5">
        <h4 class="font-bold text-[#1e3a8a] mb-0.5 text-[8.5px]">DevOps/Tools</h4>
        <ul class="space-y-0.5 text-slate-600 font-medium">
          <li>Docker</li>
          <li>GitHub Actions</li>
          <li>Vercel</li>
          <li>Render.com</li>
          <li>VS Code</li>
          <li>Git</li>
        </ul>
      </div>
      <div class="pl-0.5">
        <h4 class="font-bold text-[#1e3a8a] mb-0.5 text-[8.5px]">AI/LLM/RAG</h4>
        <ul class="space-y-0.5 text-slate-600 font-medium">
          <li>Groq Cloud</li>
          <li>Cerebras Cloud</li>
          <li>NVIDIA NIM</li>
          <li>Gemini Live</li>
          <li>Tavily</li>
          <li>Serper.dev</li>
          <li>DuckDuckGo</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Achievements Section -->
  <div>
    <div class="flex items-center gap-2 border-b border-slate-200 pb-1 mb-1.5">
      <div class="w-5.5 h-5.5 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4l-1.9 2.53a1 1 0 01-1.6 0L12 8z"></path>
        </svg>
      </div>
      <h3 class="text-[10px] font-extrabold tracking-wider text-[#0f172a] uppercase flex-grow">Achievements & Certifications</h3>
      <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
      </svg>
    </div>

    <!-- 2 Column Achievements List -->
    <div class="grid grid-cols-2 gap-x-6 gap-y-0.5 text-[8.5px] text-slate-600 leading-tight">
      <div class="flex items-start gap-1">
        <span class="text-sky-500 font-bold flex-shrink-0">&bull;</span>
        <span>Google Cloud Arcade Program (2024–25): Completed GCP challenges, earning 75 Arcade Points.</span>
      </div>
      <div class="flex items-start gap-1">
        <span class="text-sky-500 font-bold flex-shrink-0">&bull;</span>
        <span>Competitions: Participated in multiple IIT/NIT coding contests and hackathons.</span>
      </div>
      <div class="flex items-start gap-1">
        <span class="text-sky-500 font-bold flex-shrink-0">&bull;</span>
        <span>Solved 200+ problems across GFG and LeetCode, awarded GFG Certificate and T-shirt.</span>
      </div>
      <div class="flex items-start gap-1">
        <span class="text-sky-500 font-bold flex-shrink-0">&bull;</span>
        <span>Hackathons: Built production-grade MVP solutions for Microsoft AI DevDays ($80K+) and Amazon Nova AI ($95K+).</span>
      </div>
      <div class="flex items-start gap-1">
        <span class="text-sky-500 font-bold flex-shrink-0">&bull;</span>
        <span>Certifications: Credentials in Python, AI, and Web Dev from IBM, Cisco, Anthropic, Infosys, Udemy.</span>
      </div>
      <div class="flex items-start gap-1">
        <span class="text-sky-500 font-bold flex-shrink-0">&bull;</span>
        <span>Active participant in Developer Communities (GDG Events) and college tech events.</span>
      </div>
    </div>
  </div>
</body>
</html>"""

    # Save to resume.html
    html_path = "resume.html"
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    # Use Google Chrome headless to compile PDF via PowerShell Start-Process (extremely robust on Windows)
    try:
        abs_html_path = os.path.abspath(html_path)
        abs_output_path = os.path.abspath(output_path)
        cmd = [
            "powershell",
            "-Command",
            f'Start-Process -FilePath "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" -ArgumentList "--headless", "--disable-gpu", "--print-to-pdf-no-header", "--print-to-pdf={abs_output_path}", "{abs_html_path}" -Wait -NoNewWindow'
        ]
        subprocess.run(cmd, check=True)
        print("PDF Resume generated successfully at:", abs_output_path)
    except Exception as e:
        print("Error during PDF generation:", e)

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    target_path = os.path.join(current_dir, "public", "Anil_Pradhan_resume.pdf")
    generate_resume(target_path)
