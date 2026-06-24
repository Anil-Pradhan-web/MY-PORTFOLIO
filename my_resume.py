import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def generate_resume(output_path):
    # Setup document geometry: 0.4 in margins top/bottom, 0.45 in left/right
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=0.45 * inch,
        rightMargin=0.45 * inch,
        topMargin=0.4 * inch,
        bottomMargin=0.4 * inch
    )
    
    story = []
    styles = getSampleStyleSheet()
    
    # Custom Paragraph Styles
    name_style = ParagraphStyle(
        name='NameStyle',
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=21,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#0f172a")  # Dark slate
    )
    
    contact_style = ParagraphStyle(
        name='ContactStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#334155")  # Muted slate
    )
    
    section_header_style = ParagraphStyle(
        name='SectionHeaderStyle',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor("#1e3a8a"),  # Deep blue
        spaceAfter=0
    )
    
    entry_title_style = ParagraphStyle(
        name='EntryTitleStyle',
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11.5,
        textColor=colors.HexColor("#0f172a")
    )
    
    entry_right_style = ParagraphStyle(
        name='EntryRightStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        alignment=TA_RIGHT,
        textColor=colors.HexColor("#334155")
    )
    
    bullet_marker_style = ParagraphStyle(
        name='BulletMarkerStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#0f172a")
    )
    
    bullet_text_style = ParagraphStyle(
        name='BulletTextStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor("#334155")
    )
    
    skill_category_style = ParagraphStyle(
        name='SkillCategoryStyle',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor("#0f172a")
    )
    
    skill_list_style = ParagraphStyle(
        name='SkillListStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor("#334155")
    )

    # 1. Header Section
    story.append(Paragraph("ANIL PRADHAN", name_style))
    story.append(Spacer(1, 3))
    
    contact_info = (
        "anilpradhan9644@gmail.com &nbsp;|&nbsp; +91-8917476908 &nbsp;|&nbsp; Bhubaneswar, Odisha, India<br/>"
        "GitHub: <a href='https://github.com/Anil-Pradhan-web' color='#1e3a8a'>github.com/Anil-Pradhan-web</a> &nbsp;|&nbsp; "
        "LinkedIn: <a href='https://linkedin.com/in/anil-pradhan543' color='#1e3a8a'>linkedin.com/in/anil-pradhan543</a><br/>"
        "LeetCode: <a href='https://leetcode.com/u/Anil_Pradhan/' color='#1e3a8a'>leetcode.com/u/Anil_Pradhan/</a> &nbsp;|&nbsp; "
        "HackerRank: <a href='https://www.hackerrank.com/profile/anilpradhan9644' color='#1e3a8a'>hackerrank.com/profile/anilpradhan9644</a>"
    )
    story.append(Paragraph(contact_info, contact_style))
    story.append(Spacer(1, 5))

    # Helper function for Section Headers with borders
    def create_section_header(title):
        header_table = Table(
            [[Paragraph(f"<b>{title.upper()}</b>", section_header_style)]],
            colWidths=[7.6 * inch]
        )
        header_table.setStyle(TableStyle([
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 3),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('LINEBELOW', (0,0), (-1,-1), 1, colors.HexColor("#94a3b8")),  # Gray separator line
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
            ('TOPPADDING', (0,0), (-1,-1), 1),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
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
            ('TOPPADDING', (0,0), (-1,-1), 2),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
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
        "Campus Ambassador &nbsp;|&nbsp; <b>E-Cell, IIT Kanpur</b> &bull; <i>Remote</i>",
        "Dec 2025 – Jan 2026"
    ))
    story.append(add_bullet(
        "Promoted IIT Kanpur's E-Summit events at ITER, SOA University through active social media campaigns, campus networking, and community-building initiatives."
    ))

    # 4. Technical Projects (Only AI Career Mentor and VolunteerIQ)
    story.append(create_section_header("Technical Projects"))
    
    # Project 1: AI Career Mentor
    story.append(create_entry_header(
        "AI Career Mentor &nbsp;|&nbsp; <i>Solo Full-Stack Developer</i>",
        "March 2026 – Present"
    ))
    story.append(add_bullet(
        "Architected a decoupled microservices system with a Next.js 14 SPA on Vercel and a FastAPI gateway on Render, utilizing Neon Serverless Postgres and Upstash Redis for high-performance data operations."
    ))
    story.append(add_bullet(
        "Designed a parallel LangGraph DAG for multi-agent reasoning, with multi-provider routing (Groq Llama 3.3, NVIDIA NIM, Gemini) and fallback circuit-breakers to ensure 100% platform availability."
    ))
    story.append(add_bullet(
        "Optimized memory footprint by engineering a Hybrid Semantic RAG system (ChromaDB + in-memory SequenceMatcher fallback) to prevent OOM crashes on resource-constrained 512MB RAM Render containers."
    ))
    story.append(add_bullet(
        "Developed a real-time full-duplex Hinglish Voice Coach using Gemini Live WebSocket API (16/24kHz audio) and an interactive 7-phase mock interview FSM with Monaco Editor code execution."
    ))
    story.append(add_bullet(
        "Built a secure Google OAuth 2.0 system with JWT refresh token rotation, SlowAPI rate-limiting, and a whitelisted Admin Observation & Telemetry Console tracking active WebSocket connections."
    ))
    story.append(add_bullet(
        "Established a robust CI/CD pipeline using GitHub Actions, executing frontend builds and backend pytest (106 unit tests) with automatic package audits (pip-audit) and GHCR container deployment."
    ))

    # Project 2: VolunteerIQ
    story.append(create_entry_header(
        "VolunteerIQ &nbsp;|&nbsp; <i>Lead Backend Developer &bull; Team ClutchCode</i>",
        "Mar 16, 2026 – Apr 13, 2026"
    ))
    story.append(add_bullet(
        "Developed an AI-driven crisis-response coordination platform for NGOs (submitted to Google Solution Challenge 2026) converting survey uploads into geospatially-mapped tasks on Mapbox GL."
    ))
    story.append(add_bullet(
        "Engineered backend matching algorithms using Gemini 1.5 Pro to analyze field data and map tasks, ranking volunteers based on skills, availability, and geographic proximity."
    ))
    story.append(add_bullet(
        "Built secure FastAPI REST endpoints and Firestore integrations with server-side verified Firebase Google Authentication."
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
        "<b>GeeksForGeeks 80 Days Challenge:</b> Solved 200+ problems across GFG and LeetCode (Arrays, Strings, Recursion, DP, Graphs); awarded GFG Certificate and T-shirt."
    ))
    story.append(add_bullet(
        "<b>Community Engagement:</b> Active participant in Developer Communities (GDG Bhubaneswar) and college tech events, exploring AI systems, cloud infrastructure, and backend engineering."
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
    target_path = os.path.join(current_dir, "public", "my_resume.pdf")
    generate_resume(target_path)
