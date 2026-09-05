import os
import subprocess
import shutil

def generate_resume(output_path):
    html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anil Pradhan Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Source Sans 3', 'Calibri', 'Arial', sans-serif;
      color: #111;
      font-size: 9pt;
      line-height: 1.2;
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
        margin: 0.30in 0.36in;
      }
    }
    .resume-container {
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.30in 0.36in;
    }

    /* ===== HEADER ===== */
    .header {
      text-align: center;
      margin-bottom: 3.5pt;
    }
    .header h1 {
      font-family: 'Source Serif 4', 'Georgia', serif;
      font-size: 17pt;
      font-weight: 700;
      letter-spacing: 0.5pt;
      color: #111;
      margin-bottom: 1.5pt;
      text-transform: uppercase;
    }
    .header .contact-line {
      font-size: 8.65pt;
      color: #333;
      word-spacing: 0.5pt;
    }
    .header .contact-line a {
      color: #1a5276;
      text-decoration: none;
    }
    .header .contact-line a:hover {
      text-decoration: underline;
    }
    .header .contact-line .sep {
      margin: 0 3pt;
      color: #999;
    }
    .header .tagline {
      font-size: 8.65pt;
      color: #333;
      margin-top: 2pt;
      font-style: normal;
    }

    /* ===== SECTION ===== */
    .section {
      margin-top: 6.8pt;
    }
    .section-title {
      font-family: 'Source Serif 4', 'Georgia', serif;
      font-size: 10pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.4pt;
      color: #111;
      border-bottom: 1pt solid #111;
      padding-bottom: 1.2pt;
      margin-bottom: 3pt;
    }

    /* ===== ENTRY (Education / Experience) ===== */
    .entry {
      margin-bottom: 3.5pt;
    }
    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .entry-title {
      font-size: 9.25pt;
      font-weight: 700;
      color: #111;
    }
    .entry-date {
      font-size: 8.5pt;
      color: #555;
      white-space: nowrap;
      font-style: italic;
    }
    .entry-subtitle {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 8.65pt;
      color: #333;
      font-style: italic;
      margin-top: 0pt;
    }
    .entry-subtitle .score {
      font-style: normal;
      font-weight: 600;
      color: #111;
    }

    /* ===== PROJECT ENTRY ===== */
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0pt;
    }
    .project-name {
      font-size: 9.35pt;
      font-weight: 700;
      color: #111;
    }
    .project-links {
      font-size: 8.25pt;
    }
    .project-links a {
      color: #1a5276;
      text-decoration: none;
      font-weight: 600;
    }
    .project-links a:hover {
      text-decoration: underline;
    }
    .project-links .sep {
      color: #999;
      margin: 0 2pt;
    }
    .project-role {
      font-size: 8.5pt;
      color: #555;
      font-style: italic;
      margin-bottom: 0pt;
    }
    .project-tech {
      font-size: 8.25pt;
      color: #444;
      margin-top: 1pt;
    }
    .project-tech strong {
      color: #222;
    }

    /* ===== BULLET LISTS ===== */
    ul.bullets {
      list-style: disc;
      margin-left: 13pt;
      padding: 0;
    }
    ul.bullets li {
      font-size: 8.65pt;
      color: #222;
      margin-bottom: 1.4pt;
      line-height: 1.25;
      padding-left: 1pt;
    }

    /* ===== SKILLS ===== */
    .skills-grid {
      display: block;
    }
    .skill-row {
      margin-bottom: 1.4pt;
      font-size: 8.65pt;
      line-height: 1.28;
    }
    .skill-row strong {
      color: #111;
    }
    .skill-row span {
      color: #333;
    }

    /* ===== ACHIEVEMENTS ===== */
    ul.achievements {
      list-style: disc;
      margin-left: 13pt;
      padding: 0;
    }
    ul.achievements li {
      font-size: 8.65pt;
      color: #222;
      margin-bottom: 1.5pt;
      line-height: 1.24;
      padding-left: 1pt;
    }
    ul.achievements li strong {
      color: #111;
    }
  </style>
</head>
<body>
<div class="resume-container">

  <!-- ===== HEADER ===== -->
  <div class="header">
    <h1>Anil Pradhan</h1>
    <div class="contact-line">
      <a href="mailto:anilpradhan9644@gmail.com">anilpradhan9644@gmail.com</a>
      <span class="sep">|</span>
      <span>+91 8917476908</span>
      <span class="sep">|</span>
      <span>Bhubaneswar, Odisha</span>
      <span class="sep">|</span>
      <a href="https://linkedin.com/in/anil-pradhan543">LinkedIn</a>
      <span class="sep">|</span>
      <a href="https://github.com/Anil-Pradhan-web">GitHub</a>
      <span class="sep">|</span>
      <a href="https://anil-portfolio-web.vercel.app">Portfolio</a>
    </div>
    <div class="tagline">AI &amp; Backend Engineer specializing in autonomous multi-agent architectures, computer vision pipelines, and resilient backend systems with Python, FastAPI, LangGraph, and PyTorch.</div>
    <div style="font-size: 8.65pt; color: #111; margin-top: 2pt; font-weight: 600;">Dell FutureMinds AI Hackathon 2026 – 2nd Runner-Up (Top 6 / 8,000+) · Built in 3 International Hackathons (Microsoft, Amazon, Google)</div>
  </div>

  <!-- ===== EDUCATION ===== -->
  <div class="section">
    <div class="section-title">Education</div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Institute of Technical Education &amp; Research (ITER), SOA University</span>
        <span class="entry-date">2024 – 2028</span>
      </div>
      <div class="entry-subtitle">
        <span>Bachelor of Technology (B.Tech), Computer Science &amp; Engineering</span>
        <span class="score">CGPA: 8.93</span>
      </div>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Council of Higher Secondary Education (CHSE), Odisha</span>
        <span class="entry-date">2022 – 2024</span>
      </div>
      <div class="entry-subtitle">
        <span>Class XII (Higher Secondary) — Physics, Chemistry, Mathematics with IT</span>
        <span class="score">Score: 85%</span>
      </div>
    </div>
  </div>

  <!-- ===== PROJECTS (moved above Leadership) ===== -->
  <div class="section">
    <div class="section-title">Technical Projects</div>

    <!-- Project 1: Most Recent -->
    <div class="entry">
      <div class="project-header">
        <span class="project-name">VisionForge AI</span>
        <span class="entry-date">Aug 2026 – Present</span>
      </div>
      <div style="margin-bottom: 2pt;">
        <span class="project-links">
          <a href="https://github.com/IdeaForg-e/VeriVision-AI">GitHub</a>
        </span>
        <span class="project-role"> — AI/Backend Developer | Team IdeaForg-E</span>
      </div>
      <ul class="bullets">
        <li>Built an AI inspection pipeline to <strong>detect counterfeit and tampered hardware parts</strong> using OpenCV embeddings and FAISS reference matching.</li>
        <li>Developed <strong>ROI-based inspection agents</strong> using OCR, SSIM, YOLO, and Vision LLMs to detect missing, altered, or suspicious components.</li>
        <li>Combined evidence from multiple checks to generate <strong>explainable fraud verdicts and recommended actions</strong> (Accept, Retake, Quarantine, or Verify).</li>
      </ul>
      <div class="project-tech"><strong>Tech:</strong> Python · FastAPI · LangGraph · OpenCV · CLIP · FAISS · YOLO · NVIDIA NIM</div>
    </div>

    <!-- Project 2 -->
    <div class="entry">
      <div class="project-header">
        <span class="project-name">TaskPilot AI</span>
        <span class="entry-date">Jul 2026 – Present</span>
      </div>
      <div style="margin-bottom: 2pt;">
        <span class="project-links">
          <a href="https://taskpilot-ai-app.onrender.com/">Live Demo</a>
          <span class="sep">|</span>
          <a href="https://github.com/IdeaForg-e/TaskPilot-AI">GitHub</a>
        </span>
        <span class="project-role"> — Integration Lead | Team IdeaForg-E</span>
      </div>
      <ul class="bullets">
        <li>Built a <strong>6-stage multi-agent pipeline</strong> (Agent 0 Orchestrator) in Python &amp; FastAPI to collect, extract, clean, and schedule tasks from 5 tools in <strong>~20 seconds</strong>.</li>
        <li>Developed <strong>smart deduplication and a 7-factor priority engine</strong> (severity, deadline, outage risk, customer impact) with a 7-point quality checker to rank tasks with clear explanations.</li>
        <li>Implemented a <strong>reliable LLM client with circuit breaker</strong> (Groq + local fallback rules) and an AI chat assistant for <strong>instant P1 bug injection</strong> and calendar-aware daily scheduling.</li>
      </ul>
      <div class="project-tech"><strong>Tech:</strong> FastAPI · React · SQLite · Groq/NVIDIA NIM</div>
    </div>

    <!-- Project 3 -->
    <div class="entry">
      <div class="project-header">
        <span class="project-name">AI Career Mentor</span>
        <span class="entry-date">Feb 2026 – Aug 2026</span>
      </div>
      <div style="margin-bottom: 2pt;">
        <span class="project-links">
          <a href="https://ai-career-mentor-anil.vercel.app/">Live Demo</a>
          <span class="sep">|</span>
          <a href="https://github.com/Anil-Pradhan-web/ai-career-mentor">GitHub</a>
        </span>
        <span class="project-role"> — Solo Developer</span>
      </div>
      <ul class="bullets">
        <li>Built a multi-agent AI system using LangGraph to orchestrate 4 parallel agents (Resume, Market, Roadmap, LinkedIn) with shared state, reducing analysis latency by ~60%.</li>
        <li>Developed a real-time mock interview engine with a 7-phase FSM over WebSockets, featuring a live code editor and resume-personalized questions.</li>
        <li>Designed a fault-tolerant backend (FastAPI, PostgreSQL, Redis) with RAG-powered roadmap generation via ChromaDB, multi-provider LLM failover, and a 113-test CI/CD pipeline.</li>
      </ul>
      <div class="project-tech"><strong>Tech:</strong> FastAPI · LangGraph · Next.js · ChromaDB · Redis · Docker · ONNX</div>
    </div>
  </div>

  <!-- ===== TRAINING ===== -->
  <div class="section">
    <div class="section-title">Training</div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Agentic AI Training Program — CogniForce.AI &amp; ITER, SOA University</span>
        <span class="entry-date">2026 – Present</span>
      </div>
      <ul class="bullets">
        <li>Hands-on training in Agentic AI, LLMs, prompt engineering, RAG, tool calling, MCP, and multi-agent orchestration.</li>
        <li>Built and experimented with agents using OpenClaw, Multica, AnythingLLM, OpenRouter, Claude Code, OpenCode, and MCP servers, including agent squads and tool integrations.</li>
      </ul>
    </div>
  </div>

  <!-- ===== TECHNICAL SKILLS ===== -->
  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skill-row"><strong>Languages:</strong> <span>Python, Java, JavaScript, SQL</span></div>
      <div class="skill-row"><strong>Backend &amp; APIs:</strong> <span>FastAPI, REST APIs, SQLAlchemy, Alembic, Pydantic v2, JWT, RBAC, SSE</span></div>
      <div class="skill-row"><strong>Generative AI &amp; LLM Orchestration:</strong> <span>LangGraph, Custom Multi-Agent Pipeline Design, Prompt Engineering, Agentic AI, Semantic Search, LLM Resilience Patterns (Circuit Breaker, Rate-Limit Handling)</span></div>
      <div class="skill-row"><strong>Computer Vision &amp; Embeddings:</strong> <span>OpenCV, PyTorch, YOLO11n (custom fine-tuning), CLIP, FAISS, OCR, SSIM</span></div>
      <div class="skill-row"><strong>LLM Providers:</strong> <span>Groq, Google Gemini, OpenRouter</span></div>
      <div class="skill-row"><strong>Databases:</strong> <span>PostgreSQL, SQLite, Redis, ChromaDB</span></div>
      <div class="skill-row"><strong>DevOps &amp; Testing:</strong> <span>Docker, GitHub Actions (CI/CD), Render, Vercel, pytest</span></div>
      <div class="skill-row"><strong>Core Concepts:</strong> <span>Data Structures &amp; Algorithms, OS, CN, DBMS, Object-Oriented Programming</span></div>
      <div class="skill-row"><strong>Soft Skills:</strong> <span>Problem-Solving, Teamwork, Technical Communication, Time Management</span></div>
    </div>
  </div>

  <!-- ===== ACHIEVEMENTS & CERTIFICATIONS ===== -->
  <div class="section">
    <div class="section-title">Achievements &amp; Certifications</div>
    <ul class="achievements">
      <li><strong>Dell FutureMinds AI Hackathon 2026 — 2nd Runner-Up (3rd Place):</strong> Advanced through a 4-stage national selection (8,000+ participants → 370 → Top 10 → Top 6 Grand Finalists); presented final solution to Dell jury and senior leaders at Dell Bengaluru.</li>
      <li><strong>FlowFinance × Techfest IIT Bombay — Round 2 Qualifier:</strong> Designed a GTM strategy deck (platform analysis, customer personas, acquisition/retention framework) for FlowFinance (AI SMB fintech platform) with real customer outreach.</li>
      <li><strong>Built in 3 International Hackathons:</strong> Built and deployed AI products in Microsoft AI Dev Days, Amazon Nova Challenge, and Google Solution Challenge.</li>
      <li><strong>100+ Day DSA Streak:</strong> Maintained a 100+ day coding streak on GeeksforGeeks' 160 Days of Code Challenge, solving DSA problems daily — recognized with GFG consistency reward.</li>
      <li><strong>Certifications:</strong> IBM AI Fundamentals · Cisco Python Essentials 2 · Wells Fargo SWE (Forage) · HackerRank (Problem Solving, SQL, Java, Python).</li>
    </ul>
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
        temp_pdf_path = abs_output_path + ".tmp.pdf"
        if os.path.exists(temp_pdf_path):
            try:
                os.remove(temp_pdf_path)
            except Exception:
                pass
        cmd = [
            "powershell",
            "-Command",
            f'Start-Process -FilePath "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" -ArgumentList "--headless", "--disable-gpu", "--print-to-pdf-no-header", "--print-to-pdf={temp_pdf_path}", "{abs_html_path}" -Wait -NoNewWindow'
        ]
        subprocess.run(cmd, check=True)
        if os.path.exists(temp_pdf_path):
            shutil.copyfile(temp_pdf_path, abs_output_path)
            try:
                os.remove(temp_pdf_path)
            except Exception:
                pass
            print("PDF Resume generated successfully at:", abs_output_path)
        else:
            print("Warning: Temp PDF file was not generated.")
    except Exception as e:
        print("Error during PDF generation:", e)

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    target_path = os.path.join(current_dir, "public", "Anil_Pradhan_resume.pdf")
    generate_resume(target_path)
