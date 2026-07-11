import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def generate_resume(output_path):
    # Setup document geometry: 0.22 in margins top/bottom, 0.45 in left/right
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=0.45 * inch,
        rightMargin=0.45 * inch,
        topMargin=0.22 * inch,
        bottomMargin=0.22 * inch
    )
    
    story = []
    styles = getSampleStyleSheet()
    
    # Custom Paragraph Styles (Optimized for density)
    name_style = ParagraphStyle(
        name='NameStyle',
        fontName='Helvetica-Bold',
        fontSize=15.5,
        leading=17.5,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#0f172a")  # Dark slate
    )
    
    contact_style = ParagraphStyle(
        name='ContactStyle',
        fontName='Helvetica',
        fontSize=7.6,
        leading=9.0,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#334155")  # Muted slate
    )
    
    section_header_style = ParagraphStyle(
        name='SectionHeaderStyle',
        fontName='Helvetica-Bold',
        fontSize=8.6,
        leading=10.2,
        textColor=colors.HexColor("#0f172a"),  # Dark slate
        spaceAfter=0
    )
    
    entry_title_style = ParagraphStyle(
        name='EntryTitleStyle',
        fontName='Helvetica-Bold',
        fontSize=7.8,
        leading=9.8,
        textColor=colors.HexColor("#0f172a")
    )
    
    entry_right_style = ParagraphStyle(
        name='EntryRightStyle',
        fontName='Helvetica',
        fontSize=7.6,
        leading=9.8,
        alignment=TA_RIGHT,
        textColor=colors.HexColor("#334155")
    )
    
    bullet_marker_style = ParagraphStyle(
        name='BulletMarkerStyle',
        fontName='Helvetica',
        fontSize=7.6,
        leading=9.4,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#0f172a")
    )
    
    bullet_text_style = ParagraphStyle(
        name='BulletTextStyle',
        fontName='Helvetica',
        fontSize=7.6,
        leading=9.4,
        textColor=colors.HexColor("#334155")
    )
    
    skill_category_style = ParagraphStyle(
        name='SkillCategoryStyle',
        fontName='Helvetica-Bold',
        fontSize=7.6,
        leading=9.4,
        textColor=colors.HexColor("#0f172a")
    )
    
    skill_list_style = ParagraphStyle(
        name='SkillListStyle',
        fontName='Helvetica',
        fontSize=7.6,
        leading=9.4,
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

    # Helper function for Section Headers with borders (Recruiter Left-Accent Ribbon Style)
    def create_section_header(title):
        header_table = Table(
            [[
                # Column 1: A solid deep blue vertical bar
                "",
                # Column 2: The actual Section Title text
                Paragraph(f"<b>{title.upper()}</b>", section_header_style)
            ]],
            colWidths=[0.06 * inch, 7.54 * inch]
        )
        header_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (0,0), colors.HexColor("#1e3a8a")), # Premium dark blue accent bar
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 2),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('LEFTPADDING', (1,0), (1,0), 6), # 6pt spacing between indicator and text
            ('LINEBELOW', (1,0), (1,0), 0.75, colors.HexColor("#e2e8f0")), # Modern thin grey line under title
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
            ('TOPPADDING', (0,0), (-1,-1), 0.2),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0.2),
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
            ('TOPPADDING', (0,0), (-1,-1), 0.8),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0.2),
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
        "College Ambassador &nbsp;|&nbsp; <font color='#1e3a8a'><b>Techfest, IIT Bombay</b></font>",
        "Jun 2026 – Present"
    ))
    story.append(add_bullet(
        "<b>Selected as a Campus Ambassador</b> for Techfest, IIT Bombay, participating in technical and industry-oriented initiatives."
    ))
    story.append(add_bullet(
        "<b>Contributed to web development</b> and marketing by successfully completing multiple project-based assignments."
    ))
    story.append(add_bullet(
        "<b>Conducted market research</b>, prepared a business strategy presentation, and qualified for Round 2 of the FlowFinance Growth Strategy & Business Development Challenge."
    ))

    # 4. Technical Projects (Only AI Career Mentor and VolunteerIQ)
    story.append(create_section_header("Technical Projects"))
    
    # Project 1: AI Career Mentor
    story.append(create_entry_header(
        "<font color='#1e3a8a'><b>AI Career Mentor</b></font> &nbsp;|&nbsp; <a href='https://ai-career-mentor-anil.vercel.app/' color='#1e3a8a'><b>Live Demo</b></a> &nbsp;|&nbsp; <i>Solo Full-Stack Developer</i>",
        "March 2026 – Present"
    ))
    story.append(add_bullet(
        "<b>Multi-Agent Orchestration & Concurrency:</b> Orchestrated 7 specialized AI agents using a parallel LangGraph DAG; reduced end-to-end latency by 60% (from 4 mins to 60s) by executing resume parsing and market scraping concurrently."
    ))
    story.append(add_bullet(
        "<b>System Resilience & Fault Tolerance:</b> Built failover architecture with custom Circuit Breakers and LLM fallback chains (Groq ⇄ Cerebras ⇄ NVIDIA NIM), preventing request drops during API rate-limit spikes."
    ))
    story.append(add_bullet(
        "<b>Real-time Bidirectional Streaming & State Machines:</b> Designed a full-duplex WebSocket protocol with Gemini Multimodal Live API for low-latency audio coaching; built a 7-phase FSM coding interview simulator with Monaco IDE."
    ))
    story.append(add_bullet(
        "<b>High-Efficiency RAG & Semantic Search:</b> Optimized ChromaDB RAG using local ONNX embeddings (all-MiniLM-L6-v2) to eliminate API costs; built a keyword-search fallback to prevent OOM container crashes."
    ))
    story.append(add_bullet(
        "<b>Rate-Limiting, Caching & Telemetry:</b> Integrated Upstash Redis middleware for sliding-window rate limiting and JWT validation; built a telemetry dashboard tracking API latencies and token cost rollups."
    ))
    story.append(add_bullet(
        "<b>Data Durability, Dockerization & CI/CD:</b> Enforced data validation with Pydantic v2, persisting entries to Postgres with PgBouncer pooling; deployed multi-stage Docker builds with a 116 Pytest CI/CD suite."
    ))

    # Project 2: Task Pilot-AI
    story.append(create_entry_header(
        "<font color='#1e3a8a'><b>Task Pilot-AI</b></font> &nbsp;|&nbsp; <a href='https://taskpilot-ai-app.onrender.com/' color='#1e3a8a'><b>Live Demo</b></a> &nbsp;|&nbsp; <i>Integration Lead &bull; Team IdeaForg-E</i>",
        "June 2026 – July 2026"
    ))
    story.append(add_bullet(
        "<b>Solved Developer Context Overload:</b> Aggregated engineering tasks from 7 sources (Jira, GitHub, Slack, Email, Calendar, Meetings, Incidents) into a unified DB, saving developers ~2 hours daily."
    ))
    story.append(add_bullet(
        "<b>Recovered Untracked \"Hidden\" Tasks:</b> Developed an LLM and rule-based extraction system to parse emails and Slack chats for hidden action items, capturing ~35% of previously untracked tasks."
    ))
    story.append(add_bullet(
        "<b>Reduced LLM Costs and API Failures:</b> Built local fallback algorithms to reduce token costs and bypass Groq API rate limits; used fuzzy text-matching for deduplication and local Slack parsing."
    ))
    story.append(add_bullet(
        "<b>Prevented Database Locking and Workflow Freezes:</b> Configured SQLite in WAL mode to allow concurrent multi-agent writes without locking; built a self-healing monitor to auto-restart stuck pipeline runs."
    ))
    story.append(add_bullet(
        "<b>Automated Real-Time Emergency Re-Prioritization:</b> Created a chat command API allowing developers to inject critical P1 incidents; autonomously re-ran the 6-stage pipeline to update schedules in under 15s."
    ))

    # 5. Technical Skills (Exact Copy from Portfolio)
    story.append(create_section_header("Technical Skills"))
    story.append(Spacer(1, 2))
    
    skills_data = [
        ["Languages", "Python, Java, JavaScript, SQL"],
        ["Frontend", "HTML, CSS, Tailwind CSS, Axios, React"],
        ["Backend", "FastAPI, LangGraph, Pydantic, SQLAlchemy 2.0, WebSocket, Prometheus, Sentry, pdfplumber, edge-tts"],
        ["AI / LLM & RAG", "Groq Cloud, Cerebras Cloud, NVIDIA NIM, Gemini Live API, Tavily, Serper.dev, DuckDuckGo"],
        ["Databases", "Neon Postgres, SQLite, Upstash Redis, ChromaDB (Vector Store)"],
        ["Auth & Security", "JWT (python-jose), Google OAuth 2.0, bcrypt, CORS Middleware, Rate Limiting, HTTPS"],
        ["DevOps & Infra", "Docker, GitHub Actions (CI/CD), Vercel, Render.com"],
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
        "<b>Certifications:</b> Earned professional credentials in Python, AI Fundamentals, and Web Development from IBM, Cisco, Anthropic, Infosys, and Udemy."
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
