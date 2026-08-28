// Temporary script: generates public/og-image.png (1200x630)
import puppeteer from 'puppeteer';
import { writeFileSync, unlinkSync } from 'fs';

const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; background: #030712; color: #f8fafc;
    font-family: 'Segoe UI', system-ui, sans-serif; display: flex; align-items: center; overflow: hidden; position: relative; }
  .glow { position: absolute; width: 500px; height: 500px; border-radius: 50%; filter: blur(150px); }
  .g1 { top: -150px; left: -100px; background: rgba(20,184,166,0.18); }
  .g2 { bottom: -180px; right: -80px; background: rgba(20,184,166,0.12); }
  .grid { position: absolute; inset: 0;
    background-image: linear-gradient(rgba(0,212,170,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.05) 1px, transparent 1px);
    background-size: 60px 60px; }
  .content { position: relative; padding: 0 90px; z-index: 2; }
  .kicker { color: #2dd4bf; font-size: 22px; letter-spacing: 6px; text-transform: uppercase; font-weight: 600; margin-bottom: 22px; }
  h1 { font-size: 84px; font-weight: 800; letter-spacing: -2px; margin-bottom: 18px; }
  .sub { color: #94a3b8; font-size: 30px; line-height: 1.4; max-width: 900px; margin-bottom: 34px; }
  .tags { display: flex; gap: 14px; }
  .tag { border: 1px solid rgba(0,212,170,0.35); background: rgba(0,212,170,0.08); color: #00D4AA;
    font-size: 20px; padding: 8px 22px; border-radius: 999px; font-weight: 500; }
  .brand { position: absolute; top: 44px; left: 90px; color: #2dd4bf; font-size: 24px; font-weight: 700; font-family: 'Consolas', monospace; }
</style></head>
<body>
  <div class="glow g1"></div><div class="glow g2"></div><div class="grid"></div>
  <div class="brand">&gt; AP_</div>
  <div class="content">
    <div class="kicker">Software Engineer · Backend &amp; AI</div>
    <h1>Anil Pradhan</h1>
    <p class="sub">Building scalable backend systems and AI-powered applications with FastAPI, LangGraph &amp; RAG.</p>
    <div class="tags">
      <span class="tag">Multi-Agent RAG</span>
      <span class="tag">Scalable APIs</span>
      <span class="tag">Distributed Systems</span>
    </div>
  </div>
</body></html>`;

writeFileSync('og-tmp.html', html);
const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630 });
await page.goto('file://' + process.cwd().replace(/\\/g, '/') + '/og-tmp.html');
await page.screenshot({ path: 'public/og-image.png' });
await browser.close();
unlinkSync('og-tmp.html');
console.log('OG image generated: public/og-image.png');
