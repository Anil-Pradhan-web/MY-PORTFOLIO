# Articles Directory

This directory is the content source for your personal blog at `/blog`.

## How to Publish a New Article

To write and publish an article, create a new Markdown file (`.md`) inside this directory (for example: `deep-sea-telemetry.md` or `ai-agent-reliability.md`).

### File Format & Frontmatter

Every article must begin with a YAML frontmatter block enclosed by three dashes `---`:

```markdown
---
title: "Building Reliable Multi-Agent Workflows in Production"
slug: "building-reliable-multi-agent-workflows"
date: "2026-10-25"
description: "A deep dive into state graph checkpoints, deterministic routing, and exception boundaries when deploying multi-agent AI systems."
category: "Technology & AI"
coverImage: "/blog/multi-agent-architecture.png"
references:
  - title: "LangGraph Multi-Agent Architecture Documentation"
    url: "https://langchain-ai.github.io/langgraph/"
  - title: "Deterministic Agentic Execution Patterns"
    url: "https://arxiv.org/abs/2401.00000"
---

# Your Article Heading

Write your article in standard Markdown here.

## Subheading

You can include:
- Bullet points and numbered lists
- Blockquotes using `>`
- Code snippets and blocks using triple backticks
- Links `[Label](https://...)`
- Images `![Alt text](/path/to/image.png)`

```

### Supported Categories
Choose from one of your 4 core research tracks:
- `Deep Sea & Oceans` (or `Science & Oceans`)
- `Nature & Environment`
- `Technology & AI`
- `Economics & Society`

### Automatic Features
- **Reading Time:** Automatically computed from your word count (approx. 200 words/min).
- **SEO & Social Cards:** Page titles, meta descriptions, and OpenGraph tags are automatically generated from your frontmatter.
- **Dynamic Routing:** Your article will instantly be available at `/blog/<slug>`.
