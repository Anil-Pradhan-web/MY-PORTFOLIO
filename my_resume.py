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
      font-size: 9.2pt;
      line-height: 1.32;
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
        margin: 0.32in 0.35in;
      }
      .resume-container {
        padding: 0 !important;
      }
    }
    .resume-container {
      max-width: 8.5in;
      margin: 0 auto;
      padding: 0.32in 0.35in;
    }

    /* ===== HEADER ===== */
    .header {
      text-align: center;
      margin-bottom: 6pt;
    }
    .header h1 {
      font-family: 'Source Serif 4', 'Georgia', serif;
      font-size: 18pt;
      font-weight: 700;
      letter-spacing: 0.5pt;
      color: #111;
      margin-bottom: 2pt;
      text-transform: uppercase;
    }
    .header .contact-line {
      font-size: 8.8pt;
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
      font-size: 8.85pt;
      color: #333;
      margin-top: 2.5pt;
      line-height: 1.3;
      font-style: normal;
    }

    /* ===== SECTION ===== */
    .section {
      margin-top: 7pt;
    }
    .section-title {
      font-family: 'Source Serif 4', 'Georgia', serif;
      font-size: 10.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.4pt;
      color: #111;
      border-bottom: 1pt solid #111;
      padding-bottom: 1.5pt;
      margin-bottom: 4pt;
    }

    /* ===== ENTRY (Education / Experience) ===== */
    .entry {
      margin-bottom: 4pt;
    }
    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .entry-title {
      font-size: 9.5pt;
      font-weight: 700;
      color: #111;
    }
    .entry-date {
      font-size: 8.6pt;
      color: #555;
      white-space: nowrap;
      font-style: italic;
    }
    .entry-subtitle {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 8.8pt;
      color: #333;
      font-style: italic;
      margin-top: 0.5pt;
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
      font-size: 9.6pt;
      font-weight: 700;
      color: #111;
    }
    .project-links {
      font-size: 8.4pt;
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
      font-size: 8.65pt;
      color: #555;
      font-style: italic;
      margin-bottom: 0pt;
    }
    .project-tech {
      font-size: 8.45pt;
      color: #444;
      margin-top: 1.5pt;
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
      font-size: 8.85pt;
      color: #222;
      margin-bottom: 2pt;
      line-height: 1.3;
      padding-left: 1pt;
    }

    /* ===== SKILLS ===== */
    .skills-grid {
      display: block;
    }
    .skill-row {
      margin-bottom: 2.2pt;
      font-size: 8.85pt;
      line-height: 1.32;
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
      font-size: 8.85pt;
      color: #222;
      margin-bottom: 2pt;
      line-height: 1.3;
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
      <a href="mailto:ap2019039@gmail.com">ap2019039@gmail.com</a>
      <span class="sep">|</span>
      <span>+91 8917476908</span>
      <span class="sep">|</span>
      <span>Bhubaneswar, Odisha</span>
      <span class="sep">|</span>
      <a href="https://linkedin.com/in/anil-pradhan543">LinkedIn</a>
      <span class="sep">|</span>
      <a href="https://github.com/Anil-Pradhan-web">GitHub</a>
      <span class="sep">|</span>
      <a href="https://my-portfolio-anil.vercel.app/">Portfolio</a>
    </div>
    <div class="tagline">AI &amp; Backend Engineer specializing in autonomous multi-agent architectures, computer vision pipelines, and resilient backend systems with Python, FastAPI, LangGraph, OpenCV, and YOLO11n.</div>
    <div style="font-size: 8.4pt; color: #111; margin-top: 2pt; font-weight: 600;">Dell FutureMinds National Grand Finalist (Top 6 / 8,000+) · 4× AI Hackathon Builder (Dell, MSFT, AWS, Google)</div>
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
        <span class="entry-title">Nalanda Vidya Mandir Higher Secondary School, Berhampur, Odisha</span>
        <span class="entry-date">2022 – 2024</span>
      </div>
      <div class="entry-subtitle">
        <span>Class XII (Higher Secondary) — Physics, Chemistry, Mathematics with IT</span>
        <span class="score">Score: 85%</span>
      </div>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Odisha Adarsha Vidyalaya (OAV), Digapahandi, Ganjam, Odisha</span>
        <span class="entry-date">2020 – 2022</span>
      </div>
      <div class="entry-subtitle">
        <span>Class X (CBSE Board)</span>
        <span class="score">Score: 78.8%</span>
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
      <div style="margin-bottom: 1.5pt;">
        <span class="project-links">
          <a href="https://github.com/Disha-1610/VisionForge">GitHub</a>
        </span>
        <span class="project-role"> — AI/ML &amp; Pipeline Engineer | Team: Disha &amp; Anil</span>
      </div>
      <ul class="bullets">
        <li>Built an autonomous inspection pipeline using <strong>LangGraph state machines</strong> to run OCR, seal-matching, and YOLO11n detection in parallel, with <strong>Groq and Gemini Vision</strong> models giving the final pass/fail verdict in under 5s.</li>
        <li>Trained and fine-tuned a custom <strong>YOLO11n model on 4,448 hardware images</strong> to accurately detect and locate electronic components as small as <strong>12×12 px</strong>.</li>
        <li>Developed an anomaly detection approach (<strong>Anomaly Max-Pooling</strong>) using <strong>OCR and FAISS</strong> to improve detection of critical hardware defects, with <strong>203 automated tests</strong>.</li>
        <li>Implemented <strong>real-time inspection updates using Server-Sent Events (SSE)</strong>, allowing operators to track pipeline progress and receive inspection results instantly.</li>
      </ul>
      <div class="project-tech"><strong>Tech:</strong> Python · FastAPI · LangGraph · YOLO11n · OpenCV · FAISS · Groq LPU · Gemini 3.5 Flash</div>
    </div>

    <!-- Project 2 -->
    <div class="entry">
      <div class="project-header">
        <span class="project-name">TaskPilot AI</span>
        <span class="entry-date">Jul 2026 – Present</span>
      </div>
      <div style="margin-bottom: 2pt;">
        <span class="project-links">
          <a href="https://task-pilot-ai-two.vercel.app/">Live Demo</a>
          <span class="sep">|</span>
          <a href="https://github.com/IdeaForg-e/TaskPilot-AI">GitHub</a>
        </span>
        <span class="project-role"> — Integration Lead | Team IdeaForg-E</span>
      </div>
      <ul class="bullets">
        <li>Built the <strong>orchestrator</strong> for a 6-stage AI pipeline, coordinating task collection, extraction, deduplication, quality checks, prioritization, and scheduling across <strong>5 data sources</strong>.</li>
        <li>Implemented the <strong>pipeline lifecycle and state management</strong> to handle stage execution and recovery, completing the full workflow in around <strong>14–18 seconds</strong>.</li>
        <li>Built a <strong>reliable LLM integration</strong> with fallback mechanisms, allowing the system to continue working during API failures and rate limits.</li>
        <li>Implemented <strong>real-time P1 task injection</strong> through the AI copilot, automatically triggering a pipeline re-run and moving urgent incidents to the <strong>#1 priority</strong>.</li>
      </ul>
      <div class="project-tech"><strong>Tech:</strong> Python · FastAPI · Multi-Agent Systems · SQLAlchemy · SQLite (WAL) · Groq · React 18</div>
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
        <li>Built a multi-agent AI system using <strong>LangGraph</strong> to orchestrate 4 parallel agents (Resume, Market, Roadmap, LinkedIn) with shared state, reducing analysis latency by <strong>~60%</strong>.</li>
        <li>Developed a real-time mock interview engine with a <strong>7-phase FSM over WebSockets</strong>, featuring a live code editor and resume-personalized questions.</li>
        <li>Designed a fault-tolerant backend (<strong>FastAPI, PostgreSQL, Redis</strong>) with <strong>RAG-powered roadmap generation via ChromaDB</strong>, multi-provider LLM failover, and a <strong>113-test CI/CD pipeline</strong>.</li>
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
        <li>Hands-on training in <strong>Agentic AI, LLMs, prompt engineering, RAG, tool calling, MCP</strong>, and multi-agent orchestration.</li>
        <li>Built and experimented with autonomous agents using <strong>OpenClaw, Multica, AnythingLLM, OpenRouter, Claude Code</strong>, and custom MCP servers.</li>
      </ul>
    </div>
  </div>

  <!-- ===== TECHNICAL SKILLS ===== -->
  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skill-row"><strong>Languages:</strong> <span>Python, Java, SQL</span></div>
      <div class="skill-row"><strong>AI &amp; Computer Vision:</strong> <span>LangGraph, Multi-Agent Systems, RAG, Prompt Engineering, LLM Integration, OpenCV, YOLO11n, OCR, Anomaly Detection (SSIM)</span></div>
      <div class="skill-row"><strong>Backend &amp; Databases:</strong> <span>FastAPI, REST APIs, SQLAlchemy, JWT/RBAC, PostgreSQL, Redis, ChromaDB, SQLite</span></div>
      <div class="skill-row"><strong>Core CS Concepts:</strong> <span>Data Structures &amp; Algorithms, OOP, Operating Systems, DBMS, Computer Networks</span></div>
      <div class="skill-row"><strong>Developer Tools:</strong> <span>Git/GitHub, Docker, Linux Commands, Postman</span></div>
    </div>
  </div>

  <!-- ===== ACHIEVEMENTS & CERTIFICATIONS ===== -->
  <div class="section">
    <div class="section-title">Achievements &amp; Certifications</div>
    <ul class="achievements">
      <li><strong>Dell FutureMinds AI Hackathon 2026 — National Grand Finalist:</strong> Top 6 nationwide out of 6,000+ participants; pitched our live solution at Dell Bengaluru Office.</li>
      <li><strong>FlowFinance × Techfest IIT Bombay — Round 2:</strong> Developed GTM strategy and acquisition framework for AI fintech platform.</li>
      <li><strong>4× AI Hackathon Builder:</strong> Deployed AI applications in Microsoft AI Dev Days, Amazon Nova, and Google Solution Challenge.</li>
      <li><strong>100+ Day DSA Streak:</strong> Continuous daily problem solving on GeeksforGeeks 160 Days of Code.</li>
      <li><strong>Certifications:</strong> IBM AI Fundamentals · Cisco Python 2 · Wells Fargo SWE · HackerRank (DSA, SQL, Java, Python).</li>
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
    primary_target = os.path.join(current_dir, "public", "Anil_Pradhan_resume.pdf")
    generate_resume(primary_target)
    
    # Exact Dean filename requested by Raj Hota Sir
    dean_filename_exact = "Anil Pradhan_ SOA_ 2028 batch.pdf"
    
    destinations = [
        os.path.join(current_dir, dean_filename_exact),
        os.path.join(current_dir, "public", dean_filename_exact),
    ]
    for dest in destinations:
        try:
            shutil.copyfile(primary_target, dest)
            print(f"Copied to: {dest}")
        except Exception as e:
            print(f"Failed to copy to {dest}: {e}")
            
    # Clean up any leftover redundant PDFs
    redundant_files = [
        os.path.join(current_dir, "Anil_Pradhan_SOA_2028_batch.pdf"),
        os.path.join(current_dir, "public", "Anil_Pradhan_SOA_2028_batch.pdf"),
        os.path.join(current_dir, "public", "resume.pdf"),
    ]
    for rf in redundant_files:
        if os.path.exists(rf):
            try:
                os.remove(rf)
            except Exception:
                pass
