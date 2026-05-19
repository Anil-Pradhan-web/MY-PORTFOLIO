const {
  Document, Packer, Paragraph, TextRun,
  AlignmentType, BorderStyle, LevelFormat,
  ExternalHyperlink, TabStopType
} = require('docx');
const fs = require('fs');

const COLOR_ACCENT = "1a56db";
const COLOR_DARK = "1e293b";
const COLOR_GRAY = "64748b";
const CONTENT_WIDTH = 9720;

function sectionHeader(title) {
  return new Paragraph({
    spacing: { before: 90, after: 42 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: COLOR_ACCENT, space: 1 } },
    children: [new TextRun({ text: title.toUpperCase(), bold: true, size: 20, color: COLOR_ACCENT, font: "Calibri" })]
  });
}

function jobHeading(title, org, date) {
  return new Paragraph({
    spacing: { before: 60, after: 10 },
    tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
    children: [
      new TextRun({ text: title, bold: true, size: 20, font: "Calibri", color: COLOR_DARK }),
      new TextRun({ text: "  |  ", size: 20, font: "Calibri", color: COLOR_GRAY }),
      new TextRun({ text: org, size: 20, font: "Calibri", color: COLOR_GRAY }),
      new TextRun({ text: "\t", size: 18 }),
      new TextRun({ text: date, size: 18, font: "Calibri", color: COLOR_GRAY, italics: true }),
    ]
  });
}

function bullet(text) {
  return new Paragraph({
    spacing: { before: 10, after: 10 },
    numbering: { reference: "bullets", level: 0 },
    children: [new TextRun({ text, size: 18, font: "Calibri", color: COLOR_DARK })]
  });
}

function skillRow(label, value) {
  return new Paragraph({
    spacing: { before: 18, after: 18 },
    children: [
      new TextRun({ text: label + ": ", bold: true, size: 18, font: "Calibri", color: COLOR_DARK }),
      new TextRun({ text: value, size: 18, font: "Calibri", color: COLOR_GRAY }),
    ]
  });
}

function projectHeading(name, date) {
  return new Paragraph({
    spacing: { before: 60, after: 6 },
    tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
    children: [
      new TextRun({ text: name, bold: true, size: 20, font: "Calibri", color: COLOR_DARK }),
      new TextRun({ text: "\t", size: 18 }),
      new TextRun({ text: date, size: 18, font: "Calibri", color: COLOR_GRAY, italics: true }),
    ]
  });
}

function projectStack(stack) {
  return new Paragraph({
    spacing: { before: 0, after: 10 },
    children: [new TextRun({ text: stack, size: 17, font: "Calibri", color: COLOR_ACCENT, italics: true })]
  });
}

const doc = new Document({
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "▸",
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 320, hanging: 180 } } }
      }]
    }]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 504, right: 792, bottom: 504, left: 792 }
      }
    },
    children: [

      // HEADER
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 28 },
        children: [new TextRun({ text: "ANIL PRADHAN", bold: true, size: 52, font: "Calibri", color: COLOR_DARK })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 28 },
        children: [new TextRun({ text: "Full Stack Developer · AI/Agent Systems · Backend Engineering", size: 21, font: "Calibri", color: COLOR_GRAY, italics: true })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 50 },
        children: [
          new TextRun({ text: "+91 8917476908", size: 18, font: "Calibri", color: COLOR_GRAY }),
          new TextRun({ text: "   •   ", size: 18, color: COLOR_ACCENT }),
          new ExternalHyperlink({ link: "mailto:anilpradhan9644@gmail.com", children: [new TextRun({ text: "anilpradhan9644@gmail.com", size: 18, font: "Calibri", color: COLOR_ACCENT, underline: {} })] }),
          new TextRun({ text: "   •   ", size: 18, color: COLOR_ACCENT }),
          new ExternalHyperlink({ link: "https://linkedin.com/in/anil-pradhan543", children: [new TextRun({ text: "linkedin.com/in/anil-pradhan543", size: 18, font: "Calibri", color: COLOR_ACCENT, underline: {} })] }),
          new TextRun({ text: "   •   ", size: 18, color: COLOR_ACCENT }),
          new ExternalHyperlink({ link: "https://github.com/Anil-Pradhan-web", children: [new TextRun({ text: "github.com/Anil-Pradhan-web", size: 18, font: "Calibri", color: COLOR_ACCENT, underline: {} })] }),
          new TextRun({ text: "   •   ", size: 18, color: COLOR_ACCENT }),
          new ExternalHyperlink({ link: "https://my-portfolio-anil.vercel.app", children: [new TextRun({ text: "Portfolio", size: 18, font: "Calibri", color: COLOR_ACCENT, underline: {} })] }),
        ]
      }),

      // EDUCATION
      sectionHeader("Education"),
      jobHeading("B.Tech – CSE  |  CGPA: 9.11/10", "ITER, SOA University, Bhubaneswar", "2024 – 2028"),
      jobHeading("Class XII – PCM with IT  |  85%", "Odisha Board of Secondary Education", "2022 – 2024"),

      // EXPERIENCE
      sectionHeader("Experience"),
      jobHeading("Campus Ambassador", "E-Cell, IIT Kanpur · Remote", "Dec 2025 – Jan 2026"),
      bullet("Represented IIT Kanpur's E-Summit at ITER, SOA University; boosted student participation via tech talks and networking sessions."),

      // PROJECTS
      sectionHeader("Projects"),

      projectHeading("AI Career Mentor", "Feb 2026 – Present"),
      projectStack("Next.js 14 · FastAPI · LangGraph · ChromaDB · Neon Postgres · Groq · NVIDIA NIM · Gemini 2.5 Flash · Upstash Redis · Google OAuth · Serper · Tavily"),
      bullet("Built and deployed a production-grade AI career coaching platform using a LangGraph static DAG to orchestrate 4 specialized AI workflows (Resume Analyst, Market Researcher, LinkedIn Optimizer, Roadmap Generator) with parallel fan-out via asyncio, delivering complete career diagnostics in under 60 seconds."),
      bullet("Engineered a Hybrid Semantic RAG pipeline using ChromaDB vector store (auto-seeded at startup), curated resource knowledge base, and in-memory keyword fallback — enriching personalized 8-week roadmaps with real YouTube, GitHub, and documentation resources."),
      bullet("Built real-time WebSocket mock interview engine using OpenAI SDK directly over Groq — sub-2s token streaming, 7-question adaptive state machine scaling difficulty by company tier (FAANG to Service-based), Edge-TTS voice synthesis, and crash-resilient WebSocket handling."),
      bullet("Implemented Dynamic Multi-Provider LLM routing across Groq (Llama 3.3 70B), NVIDIA NIM (Llama 3.3 70B Instruct), and Gemini 2.5 Flash with automatic fallback chains, Pydantic validation/repair loops, and circuit-breaker mechanisms ensuring 100% system availability."),
      bullet("Hardened market intelligence pipeline integrating Serper.dev, Tavily AI, and DuckDuckGo with regex-based JSON extraction for real-time salary benchmarks, hiring volumes, and trending skills — zero static mock data."),
      bullet("Designed Secure Auth & Data Pipeline — Google OAuth 2.0 (ID Token via google-auth), short-lived JWTs with Refresh Tokens, deterministic ATS Scoring Engine, in-memory PDF parsing via pdfplumber, and Upstash Redis for SHA-256 keyed AI response caching (100 req/hr, 1000 req/day)."),
      bullet("Deployed across Vercel (Next.js 14) + Render (FastAPI) with Dockerized environments, GitHub Actions CI/CD (ESLint + pytest + pip-audit + Render deploy hook + Docker image publishing to GHCR). 130+ commits, solo-built over 5–6 months."),

      projectHeading("VolunteerIQ", "Mar 2026 – Apr 2026"),
      projectStack("Next.js 14 · FastAPI · Firebase Auth · Gemini 2.5 Flash · Mapbox GL · react-map-gl · PostgreSQL · Docker"),
      bullet("Built an AI-powered NGO coordination platform for Google Solution Challenge 2026, integrating Gemini 2.5 Flash to process multi-format field surveys (PDF, CSV, DOCX, TXT) and extract urgent community problems with urgency scores and auto-generated deployable field tasks."),
      bullet("Implemented AI volunteer matching system ranking candidates by skill match, location proximity, and availability with a 0–100 score, alongside a context-aware AI chat assistant querying live PostgreSQL data to answer plain-English NGO operational queries."),
      bullet("Deployed a Mapbox GL live operations map with geocoding cache, Firebase JWT authentication verified server-side on every protected request, Docker + docker-compose containerization, and Gemini-to-Groq automatic fallback for uninterrupted AI service under rate limits."),

      // TECHNICAL SKILLS
      sectionHeader("Technical Skills"),
      skillRow("Languages", "Python · TypeScript · JavaScript · Java"),
      skillRow("Frontend", "Next.js 14 · React · Vanilla CSS · Recharts · Lucide React · Axios · react-map-gl"),
      skillRow("Backend", "FastAPI · LangGraph · OpenAI SDK (via Groq/NVIDIA) · SQLAlchemy · Alembic · Pydantic · Uvicorn · pdfplumber · edge-tts · WebSocket"),
      skillRow("AI / LLM", "Groq (Llama 3.3 70B) · NVIDIA NIM · Gemini 2.5 Flash · ChromaDB (RAG) · Serper.dev · Tavily AI"),
      skillRow("Databases", "Neon Postgres · SQLite · Upstash Redis"),
      skillRow("Auth & Security", "Google OAuth 2.0 · Firebase Authentication · JWT · bcrypt · google-auth"),
      skillRow("DevOps & Infra", "Docker · GitHub Actions · Vercel · Render.com · CI/CD · GHCR"),
      skillRow("Tools", "VS Code · Git · Swagger UI · Postman · Mapbox GL"),

      // ACHIEVEMENTS
      sectionHeader("Achievements & Certifications"),
      bullet("Google Cloud Arcade Program (2024–25): Completed with 75 Arcade Points; learned multiple cloud skills across GCP services."),
      bullet("GeeksForGeeks – Java DSA: 80+ day continuous streak; 200+ problems solved across GFG and LeetCode (Arrays, Strings, Recursion, DP, Graphs). Certificate + T-shirt awarded."),
      bullet("Active Tech Community: Attending multiple offline tech events, actively building professional network, and connecting with like-minded developers."),
      bullet("Top Tech Hackathons: Successfully shipped projects in 3 major hackathons — Microsoft AI Dev Days ($80K+), Amazon Nova AI ($95K+), and Google Solution Challenge 2026. Consistently building and competing."),
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("/mnt/user-data/outputs/Anil_Pradhan_Resume.docx", buf);
  console.log("Done!");
});