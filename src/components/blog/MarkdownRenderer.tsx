'use client';

import React, { useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  Bookmark,
  ShieldCheck,
  Info,
  AlertTriangle,
  Quote,
} from 'lucide-react';
import type { ArticleReference } from '@/lib/blog-types';

interface MarkdownRendererProps {
  content: string;
  references?: ArticleReference[];
}

export default function MarkdownRenderer({ content, references }: MarkdownRendererProps) {
  // Parse markdown content line-by-line / block-by-block into React elements
  const blocks = parseMarkdownToBlocks(content);

  // If the very first block is an H1, suppress it since [slug]/page.tsx already renders the page H1
  const renderableBlocks = blocks[0]?.type === 'h1' ? blocks.slice(1) : blocks;

  return (
    <div className="article-body max-w-none text-text-secondary font-body">
      {renderableBlocks.map((block, index) => (
        <BlockComponent key={index} block={block} />
      ))}

      {/* References Section */}
      {references && references.length > 0 && (
        <section
          id="references"
          className="mt-16 pt-10 border-t border-border-primary/80 scroll-mt-28"
          aria-labelledby="references-heading"
        >
          <div className="flex items-center gap-2 mb-6 text-text-primary">
            <span className="p-1.5 rounded-lg bg-[#00e89d]/10 border border-[#00e89d]/30 text-[#00e89d]">
              <Bookmark className="w-4 h-4" />
            </span>
            <h3 id="references-heading" className="font-display text-xl font-bold tracking-tight">
              Verified Outbound Sources &amp; Research
            </h3>
          </div>
          <ul className="space-y-3">
            {references.map((ref, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-bg-card/70 border border-border-primary text-sm transition-all hover:border-[#00e89d]/40 hover:bg-bg-card hover:shadow-md"
              >
                <span className="font-mono text-xs font-semibold text-[#00e89d] mt-0.5 px-2 py-0.5 rounded bg-[#00e89d]/10 border border-[#00e89d]/20">
                  [{idx + 1}]
                </span>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-[#00e89d] transition-colors inline-flex items-center gap-2 flex-wrap font-medium"
                >
                  <span>{ref.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted inline flex-shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

type CalloutType = 'fact' | 'note' | 'warning' | 'quote';

type Block =
  | { type: 'h1'; text: string }
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string; id: string }
  | { type: 'h4'; text: string; id: string }
  | { type: 'paragraph'; text: string }
  | { type: 'blockquote'; text: string; calloutType: CalloutType }
  | { type: 'code'; language: string; code: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'hr' }
  | { type: 'image'; alt: string; src: string }
  | { type: 'table'; headers: string[]; alignments: ('left' | 'center' | 'right' | null)[]; rows: string[][] };

function parseMarkdownToBlocks(raw: string): Block[] {
  const lines = raw.split(/\r?\n/);
  const blocks: Block[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let codeLanguage = '';

  let inList: 'ul' | 'ol' | null = null;
  let listItems: string[] = [];

  let paragraphBuffer: string[] = [];
  let blockquoteBuffer: string[] = [];

  const flushList = () => {
    if (inList && listItems.length > 0) {
      blocks.push({ type: inList, items: [...listItems] });
      listItems = [];
      inList = null;
    }
  };

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      blocks.push({ type: 'paragraph', text: paragraphBuffer.join(' ') });
      paragraphBuffer = [];
    }
  };

  const flushBlockquote = () => {
    if (blockquoteBuffer.length > 0) {
      const fullText = blockquoteBuffer.join(' ');
      let calloutType: CalloutType = 'quote';

      const lower = fullText.toLowerCase();
      if (
        lower.startsWith('[!tip]') ||
        lower.startsWith('[!fact]') ||
        lower.includes('**verified') ||
        lower.includes('**fact:') ||
        lower.includes('**key takeaway')
      ) {
        calloutType = 'fact';
      } else if (
        lower.startsWith('[!warning]') ||
        lower.startsWith('[!caution]') ||
        lower.includes('**warning:') ||
        lower.includes('**caution:') ||
        lower.includes('⚠️')
      ) {
        calloutType = 'warning';
      } else if (
        lower.startsWith('[!note]') ||
        lower.includes('**note:') ||
        lower.includes('**context:') ||
        lower.startsWith('**aqi') ||
        lower.startsWith('**annual pm2.5')
      ) {
        calloutType = 'note';
      }

      // Clean marker tags if present (e.g. [!NOTE])
      const cleanedText = fullText
        .replace(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|FACT)\]\s*/i, '')
        .trim();

      blocks.push({ type: 'blockquote', text: cleanedText, calloutType });
      blockquoteBuffer = [];
    }
  };

  const flushAll = () => {
    flushList();
    flushParagraph();
    flushBlockquote();
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block toggle (```)
    if (line.trim().startsWith('```')) {
      flushAll();
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.trim().slice(3).trim();
        codeBuffer = [];
      } else {
        inCodeBlock = false;
        blocks.push({
          type: 'code',
          language: codeLanguage,
          code: codeBuffer.join('\n'),
        });
        codeBuffer = [];
        codeLanguage = '';
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Table detection: a line starting with | that contains at least one more |
    // and the next line is the separator row (| --- | --- |)
    if (!inCodeBlock && line.trim().startsWith('|') && line.trim().endsWith('|')) {
      const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : '';
      const isSeparatorRow = /^\|[\s:|-]+\|$/.test(nextLine);

      if (isSeparatorRow) {
        flushAll();
        const headers = line.trim().slice(1, -1).split('|').map((c) => c.trim());

        const sepCells = nextLine.slice(1, -1).split('|').map((c) => c.trim());
        const alignments: ('left' | 'center' | 'right' | null)[] = sepCells.map((cell) => {
          const leftColon = cell.startsWith(':');
          const rightColon = cell.endsWith(':');
          if (leftColon && rightColon) return 'center';
          if (rightColon) return 'right';
          if (leftColon) return 'left';
          return null;
        });

        i += 1;

        const tableRows: string[][] = [];
        while (i + 1 < lines.length) {
          const bodyLine = lines[i + 1].trim();
          if (bodyLine.startsWith('|') && bodyLine.endsWith('|')) {
            tableRows.push(bodyLine.slice(1, -1).split('|').map((c) => c.trim()));
            i += 1;
          } else {
            break;
          }
        }

        blocks.push({ type: 'table', headers, alignments, rows: tableRows });
        continue;
      }
    }

    // Blank line indicates block boundary
    if (!line.trim()) {
      flushAll();
      continue;
    }

    // Horizontal Rule: ---, ***, ___, or arbitrary length of dashes/asterisks
    if (/^(\*{3,}|-{3,}|_{3,})$/.test(line.trim())) {
      flushAll();
      blocks.push({ type: 'hr' });
      continue;
    }

    // Image: ![alt](url)
    const imgMatch = line.trim().match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      flushAll();
      blocks.push({ type: 'image', alt: imgMatch[1], src: imgMatch[2] });
      continue;
    }

    // Headings
    if (line.startsWith('# ')) {
      flushAll();
      blocks.push({ type: 'h1', text: line.slice(2).trim() });
      continue;
    }
    if (line.startsWith('## ')) {
      flushAll();
      const text = line.slice(3).trim();
      blocks.push({ type: 'h2', text, id: slugifyHeading(text) });
      continue;
    }
    if (line.startsWith('### ')) {
      flushAll();
      const text = line.slice(4).trim();
      blocks.push({ type: 'h3', text, id: slugifyHeading(text) });
      continue;
    }
    if (line.startsWith('#### ')) {
      flushAll();
      const text = line.slice(5).trim();
      blocks.push({ type: 'h4', text, id: slugifyHeading(text) });
      continue;
    }

    // Blockquote (accumulate multiline blockquotes)
    if (line.startsWith('>')) {
      flushList();
      flushParagraph();
      blockquoteBuffer.push(line.replace(/^>\s*/, '').trim());
      continue;
    } else {
      flushBlockquote();
    }

    // List item continuation
    if (inList && listItems.length > 0 && (line.startsWith('    ') || line.startsWith('\t') || line.startsWith('  '))) {
      listItems[listItems.length - 1] += ' ' + line.trim();
      continue;
    }

    // Unordered List (- or *)
    const ulMatch = line.match(/^(\s*)[-*]\s+(.*)$/);
    if (ulMatch) {
      flushParagraph();
      if (inList !== 'ul') flushList();
      inList = 'ul';
      listItems.push(ulMatch[2]);
      continue;
    }

    // Ordered List (1. 2.)
    const olMatch = line.match(/^(\s*)\d+\.\s+(.*)$/);
    if (olMatch) {
      flushParagraph();
      if (inList !== 'ol') flushList();
      inList = 'ol';
      listItems.push(olMatch[2]);
      continue;
    }

    // Normal paragraph line
    flushList();
    paragraphBuffer.push(line.trim());
  }

  flushAll();

  if (inCodeBlock && codeBuffer.length > 0) {
    blocks.push({
      type: 'code',
      language: codeLanguage,
      code: codeBuffer.join('\n'),
    });
  }

  return blocks;
}

function BlockComponent({ block }: { block: Block }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  switch (block.type) {
    case 'h1':
      return (
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary tracking-tight mt-10 mb-4 pb-2 border-b border-border-primary/60">
          {renderInline(block.text)}
        </h1>
      );
    case 'h2':
      return (
        <h2
          id={block.id}
          className="font-display text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mt-14 mb-5 pt-6 border-t border-border-primary/60 flex items-center justify-between group scroll-mt-28"
        >
          <span>{renderInline(block.text)}</span>
          <a
            href={`#${block.id}`}
            className="text-text-muted hover:text-[#00e89d] opacity-0 group-hover:opacity-100 transition-opacity text-base font-mono font-normal ml-3 select-none"
            aria-label={`Link to section ${block.text}`}
          >
            #
          </a>
        </h2>
      );
    case 'h3':
      return (
        <h3
          id={block.id}
          className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-9 mb-3.5 flex items-center justify-between group scroll-mt-28 text-[#00e89d]"
        >
          <span>{renderInline(block.text)}</span>
          <a
            href={`#${block.id}`}
            className="text-text-muted hover:text-[#00e89d] opacity-0 group-hover:opacity-100 transition-opacity text-sm font-mono font-normal ml-2 select-none"
            aria-label={`Link to subsection ${block.text}`}
          >
            #
          </a>
        </h3>
      );
    case 'h4':
      return (
        <h4
          id={block.id}
          className="font-display text-base sm:text-lg font-semibold text-text-primary tracking-tight mt-6 mb-2.5 scroll-mt-28"
        >
          {renderInline(block.text)}
        </h4>
      );
    case 'paragraph':
      return (
        <p className="text-base sm:text-lg text-text-secondary leading-[1.85] mb-6 font-body">
          {renderInline(block.text)}
        </p>
      );
    case 'blockquote': {
      if (block.calloutType === 'fact') {
        return (
          <aside className="my-8 rounded-2xl border border-[#00e89d]/35 bg-[#00e89d]/[0.05] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2.5 text-xs font-mono font-semibold text-[#00e89d] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#00e89d]" />
              <span>Verified Finding / Key Takeaway</span>
            </div>
            <div className="text-text-primary text-base sm:text-lg leading-relaxed font-body">
              {renderInline(block.text)}
            </div>
          </aside>
        );
      }
      if (block.calloutType === 'note') {
        return (
          <aside className="my-8 rounded-2xl border border-[#38bdf8]/35 bg-[#38bdf8]/[0.05] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2.5 text-xs font-mono font-semibold text-[#38bdf8] uppercase tracking-wider">
              <Info className="w-4 h-4 text-[#38bdf8]" />
              <span>Context &amp; Analysis</span>
            </div>
            <div className="text-text-primary text-base sm:text-lg leading-relaxed font-body">
              {renderInline(block.text)}
            </div>
          </aside>
        );
      }
      if (block.calloutType === 'warning') {
        return (
          <aside className="my-8 rounded-2xl border border-[#f5a623]/35 bg-[#f5a623]/[0.05] p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2.5 text-xs font-mono font-semibold text-[#f5a623] uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-[#f5a623]" />
              <span>Critical Reality / Alert</span>
            </div>
            <div className="text-text-primary text-base sm:text-lg leading-relaxed font-body">
              {renderInline(block.text)}
            </div>
          </aside>
        );
      }
      // Standard editorial pull quote
      return (
        <blockquote className="my-8 pl-6 sm:pl-8 border-l-2 border-[#00e89d] py-2 italic font-display text-lg sm:text-xl text-text-primary leading-relaxed relative bg-gradient-to-r from-bg-card/40 to-transparent rounded-r-xl">
          <Quote className="w-5 h-5 text-[#00e89d]/50 mb-2 not-italic" />
          <div>{renderInline(block.text)}</div>
        </blockquote>
      );
    }
    case 'code':
      return (
        <div className="relative my-7 rounded-2xl border border-border-primary bg-bg-card overflow-hidden shadow-md">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border-primary bg-bg-secondary text-xs font-mono text-text-muted">
            <span className="font-semibold">{block.language || 'code'}</span>
            <button
              onClick={() => handleCopy(block.code)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-card border border-border-primary hover:text-text-primary transition-colors text-text-muted text-xs"
              aria-label="Copy code to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00e89d]" />
                  <span className="text-[#00e89d]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-[#00e89d] leading-relaxed">
            <code>{block.code}</code>
          </pre>
        </div>
      );
    case 'ul':
      return (
        <ul className="list-disc pl-6 mb-7 space-y-2.5 text-text-secondary text-base sm:text-lg">
          {block.items.map((item, idx) => (
            <li key={idx} className="leading-relaxed pl-1">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="list-decimal pl-6 mb-7 space-y-2.5 text-text-secondary text-base sm:text-lg">
          {block.items.map((item, idx) => (
            <li key={idx} className="leading-relaxed pl-1 font-mono text-sm sm:text-base">
              <span className="font-body text-base sm:text-lg text-text-secondary">
                {renderInline(item)}
              </span>
            </li>
          ))}
        </ol>
      );
    case 'hr':
      return (
        <div className="my-12 flex items-center justify-center gap-2 text-border-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-border-primary" />
          <span className="w-2 h-2 rounded-full bg-[#00e89d]/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-border-primary" />
        </div>
      );
    case 'image':
      return (
        <div className="my-8">
          <img
            src={block.src}
            alt={block.alt}
            className="rounded-2xl border border-border-primary w-full object-cover max-h-[520px] shadow-lg"
          />
          {block.alt && (
            <p className="text-center text-xs text-text-muted mt-2.5 font-mono">
              {block.alt}
            </p>
          )}
        </div>
      );
    case 'table':
      return (
        <div className="my-9 rounded-2xl border border-border-primary/80 overflow-hidden shadow-lg bg-bg-card/40">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-bg-secondary/90 border-b border-border-primary">
                  {block.headers.map((header, hIdx) => (
                    <th
                      key={hIdx}
                      className="px-4 py-3.5 text-left font-mono text-xs font-semibold text-text-primary uppercase tracking-wider whitespace-nowrap"
                      style={{
                        textAlign: block.alignments[hIdx] || 'left',
                      }}
                    >
                      {renderInline(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-primary/50">
                {block.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="bg-bg-card/20 hover:bg-bg-card/80 transition-colors"
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="px-4 py-3.5 text-text-secondary leading-relaxed"
                        style={{
                          textAlign: block.alignments[cIdx] || 'left',
                        }}
                      >
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  }
}

/**
 * Parses inline elements: `code`, **bold**, *italic*, [link](url), and smart dashes
 */
function renderInline(text: string): React.ReactNode[] {
  const tokens: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  while (remaining.length > 0) {
    // 1. Inline code: `code`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      tokens.push(
        <code
          key={keyIndex++}
          className="font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded-md bg-bg-card border border-border-primary text-[#00e89d]"
        >
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // 2. Bold: **bold** or __bold__
    const boldMatch = remaining.match(/^(\*\*|__)([\s\S]*?)\1/);
    if (boldMatch) {
      tokens.push(
        <strong key={keyIndex++} className="font-semibold text-text-primary">
          {boldMatch[2]}
        </strong>
      );
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // 3. Italic: *italic* or _italic_
    const italicMatch = remaining.match(/^(\*|_)([\s\S]*?)\1/);
    if (italicMatch) {
      tokens.push(
        <em key={keyIndex++} className="italic text-text-primary">
          {italicMatch[2]}
        </em>
      );
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // 4. Link: [label](url)
    const linkMatch = remaining.match(/^\[([\s\S]*?)\]\((.*?)\)/);
    if (linkMatch) {
      const isExternal = linkMatch[2].startsWith('http');
      tokens.push(
        <a
          key={keyIndex++}
          href={linkMatch[2]}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-[#00e89d] hover:underline underline-offset-4 transition-colors font-medium inline-flex items-center gap-1"
        >
          <span>{linkMatch[1]}</span>
          {isExternal && <ExternalLink className="w-3 h-3 text-text-muted inline" />}
        </a>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // 5. Smart em-dash: " --- " or "---" -> " — "
    const emDashMatch = remaining.match(/^(\s*---\s*)/);
    if (emDashMatch) {
      tokens.push(' — ');
      remaining = remaining.slice(emDashMatch[0].length);
      continue;
    }

    // Regular character
    tokens.push(remaining[0]);
    remaining = remaining.slice(1);
  }

  return tokens;
}

