import os
import subprocess
import shutil

def generate_resume(output_path):
    html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Anil Pradhan Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    @page {
      size: A4;
      margin: 0;
    }
    body {
      font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #000000;
      background: #ffffff;
      -webkit-font-smoothing: antialiased;
      line-height: 1.34;
    }
    .page {
      width: 210mm;
      min-height: 297mm;
      padding: 24pt 34pt 24pt 34pt;
      margin: 0 auto;
      background: #fff;
    }

    /* ===== HEADER ===== */
    .header {
      margin-bottom: 5pt;
    }
    .name {
      font-size: 23pt;
      font-weight: 800;
      color: #000;
      letter-spacing: -0.3px;
      line-height: 1.1;
      margin-bottom: 2pt;
    }
    .contact-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10pt;
      font-size: 8.75pt;
      color: #000;
      margin-bottom: 3pt;
    }
    .contact-item {
      display: inline-flex;
      align-items: center;
      gap: 3.5pt;
      text-decoration: none;
      color: #000;
    }
    .contact-item a {
      color: #000;
      text-decoration: none;
    }
    .contact-item a:hover {
      text-decoration: underline;
    }
    .contact-icon {
      width: 9.5pt;
      height: 9.5pt;
      fill: currentColor;
      flex-shrink: 0;
    }
    .tagline {
      font-size: 8.55pt;
      color: #222;
      line-height: 1.32;
    }

    /* ===== SECTION HEADINGS ===== */
    .section {
      margin-top: 9.5pt;
    }
    .section-title {
      font-size: 10.3pt;
      font-weight: 800;
      color: #000;
      letter-spacing: 0.6px;
      text-transform: uppercase;
      padding-bottom: 1.5pt;
      border-bottom: 1.5px solid #000;
      margin-bottom: 4pt;
    }

    /* ===== ENTRIES ===== */
    .entry {
      margin-bottom: 4.2pt;
    }
    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .entry-title {
      font-size: 9.3pt;
      font-weight: 700;
      color: #000;
    }
    .entry-date {
      font-size: 8.6pt;
      color: #000;
      text-align: right;
      white-space: nowrap;
    }
    .entry-subline {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 8.5pt;
      color: #222;
      margin-top: 0.8pt;
    }
    .entry-location {
      font-size: 8.4pt;
      color: #444;
      text-align: right;
      white-space: nowrap;
    }

    /* ===== PROJECTS ===== */
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .project-title-wrap {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 2pt;
    }
    .project-name {
      font-size: 9.3pt;
      font-weight: 700;
      color: #000;
    }
    .project-tagline {
      font-size: 8.85pt;
      font-weight: 400;
      color: #333;
    }
    .project-links {
      display: inline-flex;
      align-items: center;
      gap: 5pt;
      margin-left: 2pt;
    }
    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 2pt;
      font-size: 8.3pt;
      color: #000;
      text-decoration: underline;
      text-underline-offset: 1.5px;
    }
    .project-link:hover {
      color: #0066cc;
    }
    .link-svg {
      width: 7.2pt;
      height: 7.2pt;
      stroke: currentColor;
      stroke-width: 2;
      fill: none;
    }
    .project-role {
      font-size: 8.4pt;
      color: #555;
      font-style: italic;
      margin-top: 0.8pt;
      margin-bottom: 1.5pt;
    }
    .project-tech {
      font-size: 8.3pt;
      color: #333;
      margin-top: 1.5pt;
    }
    .tech-label {
      color: #000;
      font-weight: 700;
    }

    /* ===== BULLETS ===== */
    ul.bullets {
      list-style-type: disc;
      margin-left: 12pt;
      padding: 0;
    }
    ul.bullets li {
      font-size: 8.5pt;
      color: #000;
      line-height: 1.30;
      margin-bottom: 1.8pt;
    }
    ul.bullets li strong {
      font-weight: 700;
      color: #000;
    }

    /* ===== SKILLS ===== */
    .skills-table {
      width: 100%;
      border-collapse: collapse;
    }
    .skill-row {
      font-size: 8.5pt;
      line-height: 1.30;
      margin-bottom: 2.2pt;
    }
    .skill-cat {
      font-weight: 700;
      color: #000;
    }
    .skill-row span {
      color: #111;
    }

    /* ===== ACHIEVEMENTS ===== */
    ul.achievements {
      list-style-type: disc;
      margin-left: 12pt;
      padding: 0;
    }
    ul.achievements li {
      font-size: 8.5pt;
      color: #111;
      line-height: 1.30;
      margin-bottom: 2pt;
    }
    .achieve-title {
      font-weight: 700;
      color: #000;
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <div class="header">
    <div class="name">Anil Pradhan</div>
    <div class="contact-row">
      <span class="contact-item">
        <svg class="contact-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <a href="mailto:anilpradhan.dev@gmail.com">anilpradhan.dev@gmail.com</a>
      </span>
      <span class="contact-item">
        <svg class="contact-icon" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        <span>+91 8917476908</span>
      </span>
      <span class="contact-item">
        <svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        <span>Bhubaneswar, Odisha</span>
      </span>
      <a href="https://linkedin.com/in/anil-pradhan543" class="contact-item" target="_blank">
        <svg class="contact-icon" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/Anil-Pradhan-web" class="contact-item" target="_blank">
        <svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
        <span>GitHub</span>
      </a>
      <a href="https://my-portfolio-anil.vercel.app/" class="contact-item" target="_blank">
        <svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
        <span>Portfolio</span>
      </a>
    </div>
    <div class="tagline">AI &amp; Backend Engineer specializing in autonomous multi-agent architectures, computer vision pipelines, and resilient backend systems with Python, FastAPI, LangGraph, OpenCV, and YOLO11n.</div>
  </div>

  <!-- EDUCATION -->
  <div class="section">
    <div class="section-title">Education</div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Institute of Technical Education &amp; Research (ITER), SOA University</span>
        <span class="entry-date">2024 – 2028</span>
      </div>
      <div class="entry-subline">
        <span>Bachelor of Technology (B.Tech), Computer Science &amp; Engineering &bull; CGPA: 8.93</span>
        <span class="entry-location">Bhubaneswar, Odisha</span>
      </div>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Nalanda Vidya Mandir Higher Secondary School</span>
        <span class="entry-date">2022 – 2024</span>
      </div>
      <div class="entry-subline">
        <span>Class XII (Higher Secondary) — Physics, Chemistry, Mathematics with IT &bull; Score: 85%</span>
        <span class="entry-location">Berhampur, Odisha</span>
      </div>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Odisha Adarsha Vidyalaya (OAV), Digapahandi</span>
        <span class="entry-date">2017 – 2022</span>
      </div>
      <div class="entry-subline">
        <span>Class X (CBSE Board) &bull; Score: 78.8%</span>
        <span class="entry-location">Ganjam, Odisha</span>
      </div>
    </div>
  </div>

  <!-- TECHNICAL PROJECTS -->
  <div class="section">
    <div class="section-title">Technical Projects</div>

    <!-- Project 1 -->
    <div class="entry">
      <div class="project-header">
        <div class="project-title-wrap">
          <span class="project-name">VisionForge AI</span>
          <span class="project-tagline">— AI Hardware Forensic Inspector for Electronics QA</span>
          <span class="project-links">
            <a href="https://github.com/Disha-1610/VisionForge" class="project-link" target="_blank">
              <span>GitHub</span>
              <svg class="link-svg" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </span>
        </div>
        <span class="entry-date">Aug 2026 – Present</span>
      </div>
      <div class="project-role">AI/ML &amp; Pipeline Engineer | Team: Disha &amp; Anil</div>
      <ul class="bullets">
        <li>Built an autonomous inspection pipeline with <strong>LangGraph</strong> state machines running OCR, seal-matching, and YOLO11n in parallel; Groq and Gemini Vision deliver final verdicts in &lt;5s.</li>
        <li>Fine-tuned custom <strong>YOLO11n</strong> on 4,448 hardware images, accurately detecting micro-components down to 12×12 px.</li>
        <li>Developed Anomaly Max-Pooling with OCR and FAISS for defect localization, validated by 203 automated tests.</li>
        <li>Streamed live inspection status to operators via Server-Sent Events (SSE) for real-time progress and instant alerts.</li>
      </ul>
      <div class="project-tech"><span class="tech-label">Tech:</span> Python · FastAPI · LangGraph · YOLO11n · OpenCV · FAISS · Groq LPU · Gemini 3.5 Flash</div>
    </div>

    <!-- Project 2 -->
    <div class="entry">
      <div class="project-header">
        <div class="project-title-wrap">
          <span class="project-name">TaskPilot AI</span>
          <span class="project-tagline">— AI Chief of Staff for Software Engineers</span>
          <span class="project-links">
            <a href="https://github.com/IdeaForg-e/TaskPilot-AI" class="project-link" target="_blank">
              <span>GitHub</span>
              <svg class="link-svg" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <a href="https://task-pilot-ai-two.vercel.app/" class="project-link" target="_blank">
              <span>Live Demo</span>
              <svg class="link-svg" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </span>
        </div>
        <span class="entry-date">Jul 2026 – Present</span>
      </div>
      <div class="project-role">Integration Lead | Team IdeaForg-E</div>
      <ul class="bullets">
        <li>Orchestrated a <strong>6-stage AI pipeline</strong> automating collection, deduplication, quality checks, and scheduling across 5 data sources.</li>
        <li>Engineered pipeline lifecycle and state recovery mechanisms, executing the full multi-stage workflow in 14–18 seconds.</li>
        <li>Built resilient LLM integration with automatic fallbacks, preventing downtime across API outages and rate limits.</li>
        <li>Implemented real-time P1 task injection via AI copilot, triggering instant pipeline re-runs and elevating urgent issues to #1 priority.</li>
      </ul>
      <div class="project-tech"><span class="tech-label">Tech:</span> Python · FastAPI · Multi-Agent Systems · SQLAlchemy · SQLite (WAL) · Groq · React 18</div>
    </div>

    <!-- Project 3 -->
    <div class="entry">
      <div class="project-header">
        <div class="project-title-wrap">
          <span class="project-name">AI Career Mentor</span>
          <span class="project-tagline">— AI Career Coach &amp; Mock Interviewer for Developers</span>
          <span class="project-links">
            <a href="https://github.com/Anil-Pradhan-web/ai-career-mentor" class="project-link" target="_blank">
              <span>GitHub</span>
              <svg class="link-svg" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <a href="https://ai-career-mentor-anil.vercel.app/" class="project-link" target="_blank">
              <span>Live Demo</span>
              <svg class="link-svg" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </span>
        </div>
        <span class="entry-date">Feb 2026 – Aug 2026</span>
      </div>
      <div class="project-role">Solo Developer</div>
      <ul class="bullets">
        <li>Engineered a production-ready <strong>FastAPI backend</strong> with REST APIs, JWT authentication, validation, and rate limiting.</li>
        <li>Architected the PostgreSQL database layer with SQLAlchemy for persistent user profiles, sessions, and usage quotas.</li>
        <li>Automated deployment via Docker and GitHub Actions CI/CD with <strong>113 automated tests</strong>, Prometheus, and Sentry monitoring.</li>
      </ul>
      <div class="project-tech"><span class="tech-label">Tech:</span> FastAPI · PostgreSQL · WebSockets · Docker · GitHub Actions · SQLAlchemy</div>
    </div>
  </div>

  <!-- TRAINING -->
  <div class="section">
    <div class="section-title">Training</div>
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Agentic AI Training Program — CogniForce.AI &amp; ITER, SOA University</span>
        <span class="entry-date">Jul 2026 – Present</span>
      </div>
      <ul class="bullets" style="margin-top: 1.5pt;">
        <li>Hands-on training in Agentic AI, LLMs, tokenization, prompt engineering, RAG, tool calling, MCP, and multi-agent orchestration.</li>
        <li>Built autonomous agents using OpenCode, Multica, AnythingLLM, Claude Code, MCP; integrated multi-cloud LLM APIs across Groq, OpenRouter, Google AI Studio, and NVIDIA Build.</li>
      </ul>
    </div>
  </div>

  <!-- TECHNICAL SKILLS -->
  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-table">
      <div class="skill-row"><span class="skill-cat">Languages:</span> <span>Python, Java, JavaScript, SQL</span></div>
      <div class="skill-row"><span class="skill-cat">AI &amp; Computer Vision:</span> <span>LangGraph, Multi-Agent Systems, RAG, Prompt Engineering, LLM Integration, OpenCV, YOLO11n, OCR, Anomaly Detection (SSIM)</span></div>
      <div class="skill-row"><span class="skill-cat">Backend &amp; Databases:</span> <span>FastAPI, REST APIs, SQLAlchemy, JWT/RBAC, PostgreSQL, SQLite</span></div>
      <div class="skill-row"><span class="skill-cat">Core CS Concepts:</span> <span>Data Structures &amp; Algorithms, Object-Oriented Programming (OOP)</span></div>
      <div class="skill-row"><span class="skill-cat">Developer Tools:</span> <span>Git/GitHub, Docker, Linux Commands, Postman</span></div>
    </div>
  </div>

  <!-- ACHIEVEMENTS & CERTIFICATIONS -->
  <div class="section">
    <div class="section-title">Achievements &amp; Certifications</div>
    <ul class="achievements">
      <li><span class="achieve-title">Dell FutureMinds AI Hackathon 2026 — National Grand Finalist:</span> Top 6 nationwide out of 8,000+ participants; awarded Certificate of Excellence &amp; pitched live at Dell Bengaluru HQ.</li>
      <li><span class="achieve-title">FlowFinance × Techfest IIT Bombay — Round 2:</span> Developed GTM strategy and acquisition framework for AI fintech platform.</li>
      <li><span class="achieve-title">4× AI Hackathon Builder:</span> Deployed AI applications in Microsoft AI Dev Days, Amazon Nova, and Google Solution Challenge.</li>
      <li><span class="achieve-title">100+ Day DSA Streak:</span> Continuous daily problem solving on GeeksforGeeks 160 Days of Code.</li>
      <li><span class="achieve-title">Certifications:</span> IBM AI Fundamentals · Cisco Python 2 · Wells Fargo SWE (Forage) · HackerRank (DSA, SQL, Java, Python).</li>
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
