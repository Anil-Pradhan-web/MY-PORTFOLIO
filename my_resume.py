import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def generate_resume(output_path):
    # Setup document geometry: 0.26 in margins top/bottom, 0.45 in left/right
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=0.45 * inch,
        rightMargin=0.45 * inch,
        topMargin=0.26 * inch,
        bottomMargin=0.26 * inch
    )
    
    story = []
    styles = getSampleStyleSheet()
    
    # Custom Paragraph Styles (Optimized for density)
    name_style = ParagraphStyle(
        name='NameStyle',
        fontName='Helvetica-Bold',
        fontSize=16,
        leading=18,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#0f172a")  # Dark slate
    )
    
    contact_style = ParagraphStyle(
        name='ContactStyle',
        fontName='Helvetica',
        fontSize=7.8,
        leading=9.5,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#334155")  # Muted slate
    )
    
    section_header_style = ParagraphStyle(
        name='SectionHeaderStyle',
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=10.5,
        textColor=colors.HexColor("#1e3a8a"),  # Deep blue
        spaceAfter=0
    )
    
    entry_title_style = ParagraphStyle(
        name='EntryTitleStyle',
        fontName='Helvetica-Bold',
        fontSize=8.0,
        leading=10.2,
        textColor=colors.HexColor("#0f172a")
    )
    
    entry_right_style = ParagraphStyle(
        name='EntryRightStyle',
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.2,
        alignment=TA_RIGHT,
        textColor=colors.HexColor("#334155")
    )
    
    bullet_marker_style = ParagraphStyle(
        name='BulletMarkerStyle',
        fontName='Helvetica',
        fontSize=7.8,
        leading=9.8,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#0f172a")
    )
    
    bullet_text_style = ParagraphStyle(
        name='BulletTextStyle',
        fontName='Helvetica',
        fontSize=7.8,
        leading=9.8,
        textColor=colors.HexColor("#334155")
    )
    
    skill_category_style = ParagraphStyle(
        name='SkillCategoryStyle',
        fontName='Helvetica-Bold',
        fontSize=7.8,
        leading=9.8,
        textColor=colors.HexColor("#0f172a")
    )
    
    skill_list_style = ParagraphStyle(
        name='SkillListStyle',
        fontName='Helvetica',
        fontSize=7.8,
        leading=9.8,
        textColor=colors.HexColor("#334155")
    )

    # 1. Header Section
    story.append(Paragraph("ANIL PRADHAN", name_style))
    story.append(Spacer(1, 1))
    
    contact_info = (
        "anilpradhan9644@gmail.com &nbsp;|&nbsp; +91-8917476908 &nbsp;|&nbsp; Bhubaneswar, Odisha, India<br/>"
        "Portfolio: <a href='https://my-portfolio-anil.vercel.app/' color='#1e3a8a'>my-portfolio-anil.vercel.app</a> &nbsp;|&nbsp; "
        "GitHub: <a href='https://github.com/Anil-Pradhan-web' color='#1e3a8a'>github.com/Anil-Pradhan-web</a> &nbsp;|&nbsp; "
        "LinkedIn: <a href='https://linkedin.com/in/anil-pradhan543' color='#1e3a8a'>anil-pradhan543</a><br/>"
        "LeetCode: <a href='https://leetcode.com/u/Anil_Pradhan/' color='#1e3a8a'>Anil_Pradhan</a> &nbsp;|&nbsp; "
        "GeeksForGeeks: <a href='https://www.geeksforgeeks.org/profile/anilpradhan543' color='#1e3a8a'>anilpradhan543</a> &nbsp;|&nbsp; "
        "HackerRank: <a href='https://www.hackerrank.com/profile/anilpradhan9644' color='#1e3a8a'>anilpradhan9644</a>"
    )
    story.append(Paragraph(contact_info, contact_style))
    story.append(Spacer(1, 2))

    # Helper function for Section Headers with borders
    def create_section_header(title):
        header_table = Table(
            [[Paragraph(f"<b>{title.upper()}</b>", section_header_style)]],
            colWidths=[7.6 * inch]
        )
        header_table.setStyle(TableStyle([
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 2),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('LINEBELOW', (0,0), (-1,-1), 1.25, colors.HexColor("#1e3a8a")),  # Premium dark blue separator line
        ]))
        return header_table

    # Helper function for bullet points
    def add_bullet(text):
        bullet_table = Table(
            [[Paragraph("&bull;", bullet_marker_style), Paragraph(text, bullet_text_style)]],
            colWidths=[0.12 * inch, 7.48 * inch]
        )
        bullet_table.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0.3),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0.3),
        ]))
        return bullet_table

    # Helper function for sub-entry titles (e.g. Project title & Period)
    def create_entry_header(left_title, right_subtitle):
        entry_table = Table(
            [[Paragraph(left_title, entry_title_style), Paragraph(right_subtitle, entry_right_style)]],
            colWidths=[5.6 * inch, 2.0 * inch]
        )
        entry_table.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 1.0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0.3),
        ]))
        return entry_table

    # 2. Education Section
    story.append(create_section_header("Education"))
    
    edu_data = [
        [
            Paragraph("<b>B.Tech in Computer Science & Engineering</b> &bull; ITER, SOA University, Bhubaneswar", entry_title_style),
            Paragraph("<b>CGPA: 9.11/10</b> &nbsp;|&nbsp; 2024 – 2028", entry_right_style)
        ],
        [
            Paragraph("<b>Class XII (PCM with IT)</b> &bull; Odisha Board of Secondary Education", entry_title_style),
            Paragraph("<b>85%</b> &nbsp;|&nbsp; 2022 – 2024", entry_right_style)
        ]
    ]
    edu_table = Table(edu_data, colWidths=[5.6 * inch, 2.0 * inch])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
    ]))
    story.append(edu_table)

    # 3. Experience Section
    story.append(create_section_header("Experience"))
    story.append(create_entry_header(
        "College Ambassador &nbsp;|&nbsp; <b>Techfest, IIT Bombay</b>",
        "Jun 2026 – Present"
    ))
    story.append(add_bullet(
        "<b>Represented Techfest IIT Bombay</b>, Asia's largest science and technology festival, by leading campus outreach and engagement initiatives to promote competitions, workshops, and technical events across student communities."
    ))
    story.append(add_bullet(
        "<b>Conducted market research</b>, competitor analysis, sponsorship research, and partnership mapping, preparing professional strategy reports for corporate outreach, business development, and event collaborations."
    ))
    story.append(add_bullet(
        "<b>Designed and developed web assets</b>, including landing pages, promotional content, and technical project deliverables supporting Techfest campaigns."
    ))
    story.append(add_bullet(
        "<b>Planned and executed marketing strategies</b>, collaborating with technical clubs, student organizations, and online communities to increase awareness and participation."
    ))
    story.append(add_bullet(
        "<b>Delivered data-driven recommendations</b> by creating presentation decks, reports, outreach strategies, and execution roadmaps using AI-powered research and productivity tools."
    ))

    # 4. Technical Projects (Only AI Career Mentor and VolunteerIQ)
    story.append(create_section_header("Technical Projects"))
    
    # Project 1: AI Career Mentor
    story.append(create_entry_header(
        "AI Career Mentor &nbsp;|&nbsp; <a href='https://ai-career-mentor-anil.vercel.app/' color='#1e3a8a'><b>Live Demo</b></a> &nbsp;|&nbsp; <i>Solo Full-Stack Developer</i>",
        "March 2026 – Present"
    ))
    story.append(add_bullet(
        "<b>Multi-Agent Orchestration & Concurrency:</b> Engineered a high-concurrency Multi-Agent Career Platform orchestrating 7 specialized AI agents using a LangGraph Parallel Directed Acyclic Graph (DAG); reduced end-to-end execution latency by 60% (from ~4 mins to 60s) by fanning out resume parsing and live market scraper nodes concurrently."
    ))
    story.append(add_bullet(
        "<b>System Resilience & Fault Tolerance:</b> Implemented a robust failover architecture featuring custom Circuit Breakers and automated API fallback chains (Groq ⇄ Cerebras ⇄ NVIDIA NIM) for downstream LLM calls, ensuring high platform availability and graceful degradation during peak-load API rate limit (429) spikes."
    ))
    story.append(add_bullet(
        "<b>Real-time Bidirectional Streaming & State Machines:</b> Designed a full-duplex WebSocket messaging protocol integrating the Gemini Multimodal Live API (gemini-2.5-flash-native-audio) for low-latency voice coaching, and built a 7-Phase Finite State Machine (FSM) mock interview simulator with an integrated Monaco IDE code sandbox and real-time audio synthesis."
    ))
    story.append(add_bullet(
        "<b>High-Efficiency RAG & Semantic Search:</b> Optimized an offline-first Retrieval-Augmented Generation (RAG) pipeline utilizing ChromaDB with local ONNX runtime embeddings (all-MiniLM-L6-v2) to eliminate API vector search costs, implementing an auto-switching keyword search fallback to prevent Out-Of-Memory (OOM) crashes on resource-constrained hostings."
    ))
    story.append(add_bullet(
        "<b>Rate-Limiting, Caching & Telemetry:</b> Architected a secure backend middleware tier utilizing Upstash Redis for sliding-window rate limiting and active token validation, and integrated structured server diagnostics (Loguru) with a custom telemetry system tracking live API success rates, latency matrices, and token cost rollups."
    ))
    story.append(add_bullet(
        "<b>Data Durability, Dockerization & CI/CD:</b> Enforced strict data integrity with Pydantic v2 validation schemas at every agent boundary, persisting records to a serverless PostgreSQL database with PgBouncer connection pooling; containerized services via multi-stage Docker builds and automated test validations (116 Pytest suite) via GitHub Actions CI/CD."
    ))

    # Project 2: VolunteerIQ
    story.append(create_entry_header(
        "VolunteerIQ &nbsp;|&nbsp; <a href='https://volunteer-iq-clutchcode.vercel.app/' color='#1e3a8a'><b>Live Demo</b></a> &nbsp;|&nbsp; <i>Lead Backend Developer &bull; Team ClutchCode</i>",
        "Mar 16, 2026 – Apr 13, 2026"
    ))
    story.append(add_bullet(
        "<b>Developed an AI-driven crisis-response coordination platform</b> for NGOs (submitted to Google Solution Challenge 2026) converting survey uploads into geospatially-mapped tasks on Mapbox GL."
    ))
    story.append(add_bullet(
        "<b>Engineered backend matching algorithms</b> using Gemini 1.5 Pro to analyze field data and map tasks, ranking volunteers based on skills, availability, and geographic proximity."
    ))
    story.append(add_bullet(
        "<b>Built secure FastAPI REST endpoints</b> and Firestore integrations with server-side verified Firebase Google Authentication."
    ))

    # 5. Technical Skills (Exact Copy from Portfolio)
    story.append(create_section_header("Technical Skills"))
    story.append(Spacer(1, 2))
    
    skills_data = [
        ["Languages", "Python, Java, JavaScript, SQL"],
        ["Frontend", "Next.js, React, Tailwind CSS, Axios"],
        ["Backend", "FastAPI, LangGraph, LangChain Core, Pydantic, SQLAlchemy 2.0, HTTPX, Loguru, WebSocket, Uvicorn, Prometheus, Sentry, SlowAPI, pdfplumber, edge-tts, Postman Test Suite, Pytest"],
        ["AI / LLM & RAG", "Groq (Llama 3.3 70B), NVIDIA NIM, Gemini Live API, Tavily, Serper.dev, DuckDuckGo"],
        ["Databases", "Neon Postgres, SQLite, Upstash Redis, ChromaDB (Vector Store)"],
        ["Auth & Security", "JWT (python-jose), Google OAuth 2.0, Firebase Authentication, bcrypt, CORS Middleware, Rate Limiting, HTTPS TLS, .env Secrets"],
        ["DevOps & Infra", "Docker, GitHub Actions (CI/CD), Vercel, Render.com, GHCR"],
        ["Tools", "VS Code, Git, Swagger UI, Cline, GitHub Copilot, Gemini Code Assist, OpenAI Codex, AntiGravity IDE"]
    ]
    
    skills_table_data = []
    for cat, items in skills_data:
        skills_table_data.append([
            Paragraph(f"&bull; &nbsp;<b>{cat}:</b>", skill_category_style),
            Paragraph(items, skill_list_style)
        ])
    
    skills_table = Table(skills_table_data, colWidths=[1.5 * inch, 6.1 * inch])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(skills_table)

    # 6. Achievements & Certifications (Grammar corrected)
    story.append(create_section_header("Achievements & Certifications"))
    story.append(Spacer(1, 2))
    story.append(add_bullet(
        "<b>Google Cloud Arcade Program (2024–25):</b> Completed GCP challenges, earning 75 Arcade Points across hands-on cloud labs."
    ))
    story.append(add_bullet(
        "<b>Solved 200+ problems across GFG and LeetCode</b>, awarded GFG Certificate and T-shirt."
    ))
    story.append(add_bullet(
        "<b>Active participant in Developer Communities (GDG Events) and college tech events</b>, exploring AI systems, cloud infrastructure, and backend engineering."
    ))
    story.append(add_bullet(
        "<b>Competitions:</b> Participated in multiple IIT/NIT coding contests and hackathons focused on AI systems, backend engineering, and algorithmic problem solving."
    ))
    story.append(add_bullet(
        "<b>Hackathons:</b> Built production-grade MVP solutions for Microsoft AI DevDays ($80K+ prize pools), Amazon Nova AI ($95K+ prize pools), and Google Solution Challenge 2026, delivering deployable full-stack systems under strict constraints."
    ))

    # Build the document
    doc.build(story)
    print("PDF Resume generated successfully at:", output_path)

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    target_path = os.path.join(current_dir, "public", "Anil_Pradhan_resume.pdf")
    generate_resume(target_path)
