import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def generate_resume(output_path):
    # Setup document geometry: 0.45 in margins top/bottom, 0.5 in left/right
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=0.5 * inch,
        rightMargin=0.5 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.45 * inch
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
        fontSize=10,
        leading=12,
        textColor=colors.HexColor("#1e3a8a"),  # Deep blue
        spaceAfter=0
    )
    
    entry_title_style = ParagraphStyle(
        name='EntryTitleStyle',
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=colors.HexColor("#0f172a")
    )
    
    entry_right_style = ParagraphStyle(
        name='EntryRightStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        alignment=TA_RIGHT,
        textColor=colors.HexColor("#334155")
    )
    
    bullet_marker_style = ParagraphStyle(
        name='BulletMarkerStyle',
        fontName='Helvetica',
        fontSize=9,
        leading=11.5,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#0f172a")
    )
    
    bullet_text_style = ParagraphStyle(
        name='BulletTextStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
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
    story.append(Spacer(1, 4))
    
    contact_info = (
        "anilpradhan9644@gmail.com &nbsp;|&nbsp; +91-8917476908 &nbsp;|&nbsp; Bhubaneswar, Odisha, India<br/>"
        "GitHub: <a href='https://github.com/Anil-Pradhan-web' color='#1e3a8a'>github.com/Anil-Pradhan-web</a> &nbsp;|&nbsp; "
        "LinkedIn: <a href='https://linkedin.com/in/anil-pradhan543' color='#1e3a8a'>linkedin.com/in/anil-pradhan543</a><br/>"
        "LeetCode: <a href='https://leetcode.com/u/Anil_Pradhan/' color='#1e3a8a'>leetcode.com/u/Anil_Pradhan/</a> &nbsp;|&nbsp; "
        "HackerRank: <a href='https://www.hackerrank.com/profile/anilpradhan9644' color='#1e3a8a'>hackerrank.com/profile/anilpradhan9644</a>"
    )
    story.append(Paragraph(contact_info, contact_style))
    story.append(Spacer(1, 8))

    # Helper function for Section Headers with borders
    def create_section_header(title):
        header_table = Table(
            [[Paragraph(f"<b>{title.upper()}</b>", section_header_style)]],
            colWidths=[7.5 * inch]
        )
        header_table.setStyle(TableStyle([
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 4),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('LINEBELOW', (0,0), (-1,-1), 1, colors.HexColor("#94a3b8")),  # Light gray separator line
        ]))
        return header_table

    # Helper function for bullet points
    def add_bullet(text):
        bullet_table = Table(
            [[Paragraph("&bull;", bullet_marker_style), Paragraph(text, bullet_text_style)]],
            colWidths=[0.15 * inch, 7.35 * inch]
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
            colWidths=[5.5 * inch, 2.0 * inch]
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
    story.append(create_entry_header(
        "Siksha 'O' Anusandhan University (ITER) &nbsp;|&nbsp; B.Tech in Computer Science & Engineering",
        "Bhubaneswar, Odisha | 2024 – 2028"
    ))
    story.append(Table(
        [[
            Paragraph("&bull; &nbsp;<b>CGPA: 9.11 / 10.0</b> (Current Status)", bullet_text_style),
            Paragraph("Coursework: Data Structures, Algorithms, Systems Design, DBMS", entry_right_style)
        ]],
        colWidths=[4.0 * inch, 3.5 * inch],
        style=TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 1),
            ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ])
    ))

    # 3. Technical Skills
    story.append(create_section_header("Technical Skills"))
    story.append(Spacer(1, 2))
    
    skills_data = [
        ["Languages", "Python, Java, JavaScript (ES6+), SQL"],
        ["AI & RAG", "LangGraph, LangChain Core, Gemini Live API, ChromaDB (Vector Store), Groq, NVIDIA NIM, OpenAI API"],
        ["Backend & APIs", "FastAPI, WebSockets (Full-Duplex), RESTful APIs, Pydantic, SQLAlchemy 2.0, Uvicorn, SlowAPI, Axios"],
        ["Databases & Infra", "PostgreSQL (Neon Serverless), Upstash Redis, SQLite, Docker, GitHub Actions (CI/CD), Vercel, Render.com"],
        ["Developer Tools", "Git, GitHub, Linux, Swagger UI, Postman Test Suite, VS Code, AntiGravity IDE"]
    ]
    
    skills_table_data = []
    for cat, items in skills_data:
        skills_table_data.append([
            Paragraph(f"&bull; &nbsp;<b>{cat}:</b>", skill_category_style),
            Paragraph(items, skill_list_style)
        ])
    
    skills_table = Table(skills_table_data, colWidths=[1.5 * inch, 6.0 * inch])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(skills_table)

    # 4. Technical Projects / Experience
    story.append(create_section_header("Technical Projects & Experience"))
    
    # Project 1: AI Career Mentor
    story.append(create_entry_header(
        "AI Career Mentor &nbsp;|&nbsp; <i>Solo Full-Stack Developer</i>",
        "Feb 2026 – June 2026"
    ))
    story.append(add_bullet(
        "Orchestrated 6 specialized AI workflows (Resume Intelligence, Roadmaps, Market Explorer, LinkedIn Optimizer, WebSocket Mock Interview Engine, and Gemini Live Voice Coach) on a Next.js 14 SPA and FastAPI gateway."
    ))
    story.append(add_bullet(
        "Designed a parallel LangGraph DAG for multi-agent reasoning, with multi-provider routing (Groq, NVIDIA NIM, Gemini) and deterministic fallback chains/circuit-breakers to guarantee 100% platform availability."
    ))
    story.append(add_bullet(
        "Built a real-time Hinglish Voice Coach powered by the Gemini Live Multimodal WebSocket API with 16/24kHz full-duplex audio and implemented a 7-phase mock interview FSM with code execution via WebSockets."
    ))
    story.append(add_bullet(
        "Implemented a hybrid RAG system utilizing ChromaDB paired with an in-memory SequenceMatcher fallback to prevent OOM errors on Render's 512MB RAM containers. Achieved 106 passing pytest unit tests."
    ))
    story.append(add_bullet(
        "Developed a secure OAuth 2.0 system with JWT rotation and a Whitelisted Admin Telemetry & Observability Console backed by Upstash Redis to track active user and WebSocket connections in real-time."
    ))

    # Project 2: VolunteerIQ
    story.append(create_entry_header(
        "VolunteerIQ &nbsp;|&nbsp; <i>Lead Backend Developer &bull; Team ClutchCode</i>",
        "Mar 2026 – Apr 2026"
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

    # Project 3: S.I.A
    story.append(create_entry_header(
        "S.I.A — Super Intelligent Assistant &nbsp;|&nbsp; <i>Solo Developer</i>",
        "Jan 2026 – Feb 2026"
    ))
    story.append(add_bullet(
        "Engineered a local Windows desktop assistant v5.0 using a LangGraph ReAct agent that autonomously decides tool execution, controlling native OS volume, brightness, and screenshots via Win32 APIs."
    ))
    story.append(add_bullet(
        "Integrated Selenium for browser automation with persistent Chrome profiles, coupled with SQLite for settings and ChromaDB for local session memory. Leveraged Edge-TTS voice fallbacks."
    ))

    # 5. Achievements & Certifications
    story.append(create_section_header("Achievements & Coding Profile"))
    story.append(Spacer(1, 2))
    story.append(add_bullet(
        "<b>Coding Achievements:</b> Solved 200+ DSA problems across LeetCode & GeeksForGeeks; completed the GFG 80 Days Challenge (Arrays, Recursion, DP, Graphs) and awarded GFG Certificate + T-shirt."
    ))
    story.append(add_bullet(
        "<b>Google Cloud Arcade (2024-25):</b> Completed labs and GCP challenges, earning 75 Arcade Points."
    ))
    story.append(add_bullet(
        "<b>Hackathons:</b> Built and submitted functional microservices MVPs for Microsoft AI DevDays ($480K prize pool) and Amazon Nova AI Hackathon ($495K prize pool)."
    ))
    story.append(add_bullet(
        "<b>Community:</b> Active in Developer Communities (GDG Bhubaneswar) and local university tech events."
    ))

    # Build the document
    doc.build(story)
    print("PDF Resume generated successfully at:", output_path)

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    target_path = os.path.join(current_dir, "public", "my_resume.pdf")
    generate_resume(target_path)
