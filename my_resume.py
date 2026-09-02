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
        margin: 0.25in 0.35in;
      }
    }
    .resume-container {
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.25in 0.35in;
    }

    /* ===== HEADER ===== */
    .header {
      text-align: center;
      margin-bottom: 2pt;
    }
    .header h1 {
      font-family: 'Source Serif 4', 'Georgia', serif;
      font-size: 16pt;
      font-weight: 700;
      letter-spacing: 1.5pt;
      color: #111;
      margin-bottom: 1pt;
      text-transform: uppercase;
    }
    .header .contact-line {
      font-size: 8.5pt;
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
      font-size: 8.5pt;
      color: #444;
      margin-top: 1pt;
      font-style: italic;
    }

    /* ===== SECTION ===== */
    .section {
      margin-top: 4pt;
    }
    .section-title {
      font-family: 'Source Serif 4', 'Georgia', serif;
      font-size: 10pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5pt;
      color: #111;
      border-bottom: 1pt solid #111;
      padding-bottom: 1pt;
      margin-bottom: 2pt;
    }

    /* ===== ENTRY (Education / Experience) ===== */
    .entry {
      margin-bottom: 2pt;
    }
    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .entry-title {
      font-size: 9pt;
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
      font-size: 8.5pt;
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
      font-size: 9pt;
      font-weight: 700;
      color: #111;
    }
    .project-links {
      font-size: 8pt;
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
      font-size: 8pt;
      color: #555;
      margin-top: 0pt;
    }
    .project-tech strong {
      color: #333;
    }

    /* ===== BULLET LISTS ===== */
    ul.bullets {
      list-style: disc;
      margin-left: 12pt;
      padding: 0;
    }
    ul.bullets li {
      font-size: 8.5pt;
      color: #222;
      margin-bottom: 0pt;
      line-height: 1.18;
      padding-left: 1pt;
    }

    /* ===== SKILLS ===== */
    .skills-grid {
      display: block;
    }
    .skill-row {
      margin-bottom: 0pt;
      font-size: 8.5pt;
      line-height: 1.25;
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
      margin-left: 12pt;
      padding: 0;
    }
    ul.achievements li {
      font-size: 8.5pt;
      color: #222;
      margin-bottom: 0pt;
      line-height: 1.18;
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
      +91 8917476908
      <span class="sep">|</span>
      Bhubaneswar, Odisha
      <span class="sep">|</span>
      <a href="https://linkedin.com/in/anil-pradhan543">LinkedIn</a>
      <span class="sep">|</span>
      <a href="https://github.com/Anil-Pradhan-web">GitHub</a>
      <span class="sep">|</span>
      <a href="https://my-portfolio-anil.vercel.app/">Portfolio</a>
    </div>
    <div class="tagline">Backend-focused Computer Science undergraduate specializing in AI-powered applications, scalable backend systems, and intelligent software using FastAPI, LangGraph, and RAG.</div>
    <div style="font-size: 8.2pt; color: #111; margin-top: 2pt; font-weight: 600;">2nd Runner-Up, Dell FutureMinds AI Hackathon 2026 (Top 6 / 8,000+) · 3× International Hackathon Builder (Microsoft, Amazon, Google)</div>
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
        <span class="project-name">VeriVision AI</span>
        <span class="entry-date">Aug 2026 – Present</span>
      </div>
      <div style="margin-bottom: 2pt;">
        <span class="project-links">
          <a href="https://github.com/IdeaForg-e/VeriVision-AI">GitHub</a>
        </span>
        <span class="project-role"> — Agent Developer | Team IdeaForg-E</span>
      </div>
      <ul class="bullets">
        <li>Built a 5-agent LangGraph pipeline for hardware parts fraud detection, orchestrating CLIP-based reference matching, quality gating, and a 6-method parallel anomaly ensemble (SSIM, EasyOCR, ORB keypoints, template ROI, color histogram, vision LLM).</li>
        <li>Implemented a Noisy-OR multi-angle fusion engine with a weighted scoring matrix to produce deterministic fraud verdicts, replacing 4+ hours of manual inspection with ~3-5 second automated analysis.</li>
        <li>Integrated NVIDIA NIM microservices for multimodal vision inspection and natural language audit explanations, with graceful fallback to local rule-based templates for offline operation.</li>
      </ul>
      <div class="project-tech"><strong>Tech:</strong> FastAPI · LangGraph · OpenCV · CLIP ViT-B/32 · EasyOCR · PyTorch · NVIDIA NIM</div>
    </div>

    <!-- Project 2 -->
    <div class="entry">
      <div class="project-header">
        <span class="project-name">AI Career Mentor</span>
        <span class="entry-date">Mar 2026 – Jul 2026</span>
      </div>
      <div style="margin-bottom: 2pt;">
        <span class="project-links">
          <a href="https://ai-career-mentor-anil.vercel.app/">Live Demo</a>
          <span class="sep">|</span>
          <a href="https://github.com/Anil-Pradhan-web/ai-career-mentor">GitHub</a>
        </span>
        <span class="project-role"> — Solo Full Stack Developer</span>
      </div>
      <ul class="bullets">
        <li>Built a multi-agent AI system using LangGraph to orchestrate 4 parallel agents (Resume, Market, Roadmap, LinkedIn) with shared state, reducing analysis latency by ~60%.</li>
        <li>Developed a real-time mock interview engine with a 7-phase FSM over WebSockets, featuring a live code editor and resume-personalized questions.</li>
        <li>Designed a fault-tolerant backend (FastAPI, PostgreSQL, Redis) with RAG-powered roadmap generation via ChromaDB, multi-provider LLM failover, and a 113-test CI/CD pipeline.</li>
      </ul>
      <div class="project-tech"><strong>Tech:</strong> FastAPI · LangGraph · Next.js · ChromaDB · Redis · Docker · ONNX</div>
    </div>

    <!-- Project 3 -->
    <div class="entry">
      <div class="project-header">
        <span class="project-name">TaskPilot AI</span>
        <span class="entry-date">Jun 2026 – Jul 2026</span>
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
        <li>Built an 8-agent AI system that collects, cleans, and merges tasks from 5 sources (GitHub, Slack, Email, Calendar, Meeting notes), using fuzzy matching plus LLM checks to catch duplicates.</li>
        <li>Built a 7-factor system to rank tasks by urgency, deadline, and impact, with clear reasons for each rank, plus a smart daily planner that works around your meetings.</li>
        <li>Added backup AI models (Groq → NVIDIA NIM → local rules) so the app never breaks, and a chat assistant that can add urgent tasks and instantly re-rank everything.</li>
      </ul>
      <div class="project-tech"><strong>Tech:</strong> FastAPI · React · SQLite · Groq/NVIDIA NIM</div>
    </div>
  </div>

  <!-- ===== TRAINING & EXPERIENCE ===== -->
  <div class="section">
    <div class="section-title">Training &amp; Experience</div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Agentic AI Training Program — ITER, SOA University</span>
        <span class="entry-date">Jul 2026 – Present</span>
      </div>
      <ul class="bullets">
        <li>Trained in Agentic AI concepts including LLM fine-tuning, MCP integration, multi-agent orchestration, and tools like AnythingLLM, OpenCode, and Hermes through a structured program with hands-on labs and assessments.</li>
        <li>Building a collaborative team project following corporate development workflows — requirement analysis, sprint planning, and iterative delivery — to develop a production-style AI application.</li>
      </ul>
    </div>
  </div>

  <!-- ===== TECHNICAL SKILLS ===== -->
  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skill-row"><strong>Programming Languages:</strong> <span>Python, Java, JavaScript, SQL</span></div>
      <div class="skill-row"><strong>Backend &amp; APIs:</strong> <span>FastAPI, REST APIs, WebSockets, LangGraph, SQLAlchemy, Pydantic, JWT, OAuth 2.0</span></div>
      <div class="skill-row"><strong>Databases:</strong> <span>PostgreSQL (Neon), SQLite, Redis (Upstash), ChromaDB</span></div>
      <div class="skill-row"><strong>Tools &amp; Technologies:</strong> <span>Docker, GitHub Actions, Render, Vercel, Git, Postman</span></div>
      <div class="skill-row"><strong>Frontend:</strong> <span>React, HTML, CSS, Tailwind CSS</span></div>
      <div class="skill-row"><strong>AI / GenAI:</strong> <span>RAG, Agentic AI, Multi-Agent Systems, LLM Integration, Semantic Search, Computer Vision, Image Processing, Anomaly Detection</span></div>
      <div class="skill-row"><strong>Core Concepts:</strong> <span>Data Structures &amp; Algorithms, Operating Systems, Computer Networks, Database Management Systems, Object Oriented Programming</span></div>
      <div class="skill-row"><strong>Soft Skills:</strong> <span>Problem-Solving, Agile Collaboration &amp; Teamwork, Technical Communication, Time Management, Adaptability</span></div>
    </div>
  </div>

  <!-- ===== ACHIEVEMENTS & CERTIFICATIONS ===== -->
  <div class="section">
    <div class="section-title">Achievements &amp; Certifications</div>
    <ul class="achievements">
      <li><strong>2nd Runner-Up — Dell FutureMinds AI Hackathon 2026:</strong> Advanced through a 4-stage national selection (8,000+ participants → 370 → Top 10 → Top 6 Grand Finalists) to secure 3rd position; presented final solution to Dell jury, senior leaders, and employees at Dell Bengaluru office.</li>
      <li><strong>Round 2 Qualifier (Real-World Business Development) — FlowFinance × Techfest IIT Bombay Growth Challenge:</strong> Designed a GTM strategy deck (platform analysis, customer personas, acquisition/retention framework) for FlowFinance (AI SMB fintech platform) with real customer outreach.</li>
      <li><strong>International Hackathons:</strong> Built and deployed AI products in three international hackathons — <strong>Microsoft AI Dev Days</strong>, <strong>Amazon Nova AI Challenge</strong>, and <strong>Google Solution Challenge</strong>.</li>
      <li><strong>100+ Day DSA Streak:</strong> Maintained a 100+ day coding streak on GeeksforGeeks' 160 Days of Code Challenge, solving DSA problems daily — recognized with a GFG reward (T-shirt) for consistency.</li>
      <li><strong>Google Cloud Arcade:</strong> Completed <strong>75+ Google Cloud Arcade points</strong> through hands-on labs on Google Cloud services, earning official rewards from Google Cloud.</li>
      <li><strong>Certifications:</strong> Wells Fargo Software Engineering Job Simulation (Forage), Cisco Python Essentials 2, HackerRank Java / Python / SQL / Problem Solving (Basic), IBM AI Fundamentals.</li>
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
