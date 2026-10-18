'use client';

import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Bookmark } from 'lucide-react';
import type { ArticleReference } from '@/lib/blog-types';

interface MarkdownRendererProps {
  content: string;
  references?: ArticleReference[];
}

export default function MarkdownRenderer({ content, references }: MarkdownRendererProps) {
  // Parse markdown content line-by-line / block-by-block into React elements
  const blocks = parseMarkdownToBlocks(content);

  return (
    <div className="article-body max-w-none text-text-secondary font-body">
      {blocks.map((block, index) => (
        <BlockComponent key={index} block={block} />
      ))}

      {/* References Section */}
      {references && references.length > 0 && (
        <section className="mt-14 pt-8 border-t border-border-primary/80" aria-labelledby="references-heading">
          <div className="flex items-center gap-2 mb-4 text-text-primary">
            <Bookmark className="w-4 h-4 text-[#00e89d]" />
            <h3 id="references-heading" className="font-display text-lg font-semibold tracking-tight">
              References &amp; Outbound Sources
            </h3>
          </div>
          <ul className="space-y-2.5">
            {references.map((ref, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-bg-card border border-border-primary text-sm transition-colors hover:border-[#00e89d]/30"
              >
                <span className="font-mono text-xs text-[#00e89d] mt-0.5">[{idx + 1}]</span>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-[#00e89d] transition-colors inline-flex items-center gap-1.5 flex-wrap"
                >
                  <span>{ref.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted inline" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

type Block =
  | { type: 'h1'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'h4'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'blockquote'; text: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'hr' }
  | { type: 'image'; alt: string; src: string };

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
      blocks.push({ type: 'blockquote', text: blockquoteBuffer.join(' ') });
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
      blocks.push({ type: 'h2', text: line.slice(3).trim() });
      continue;
    }
    if (line.startsWith('### ')) {
      flushAll();
      blocks.push({ type: 'h3', text: line.slice(4).trim() });
      continue;
    }
    if (line.startsWith('#### ')) {
      flushAll();
      blocks.push({ type: 'h4', text: line.slice(5).trim() });
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

    // List item continuation (indented line following previous list item)
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

    // Normal paragraph line: accumulate consecutive lines into single paragraph block
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
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-text-primary tracking-tight mt-10 mb-4 text-[#00e89d]">
          {renderInline(block.text)}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="font-display text-lg sm:text-xl font-semibold text-text-primary tracking-tight mt-7 mb-3">
          {renderInline(block.text)}
        </h3>
      );
    case 'h4':
      return (
        <h4 className="font-display text-base sm:text-lg font-medium text-text-primary tracking-tight mt-5 mb-2">
          {renderInline(block.text)}
        </h4>
      );
    case 'paragraph':
      return (
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-5 font-body">
          {renderInline(block.text)}
        </p>
      );
    case 'blockquote':
      return (
        <blockquote className="border-l-4 border-[#00e89d] bg-bg-card/40 pl-4 pr-3 py-2.5 my-6 italic text-text-primary rounded-r-lg">
          {renderInline(block.text)}
        </blockquote>
      );
    case 'code':
      return (
        <div className="relative my-6 rounded-xl border border-border-primary bg-bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border-primary bg-bg-secondary text-xs font-mono text-text-muted">
            <span>{block.language || 'code'}</span>
            <button
              onClick={() => handleCopy(block.code)}
              className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-bg-card hover:text-text-primary transition-colors text-text-muted"
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
          <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-[#00e89d] leading-relaxed">
            <code>{block.code}</code>
          </pre>
        </div>
      );
    case 'ul':
      return (
        <ul className="list-disc pl-6 mb-6 space-y-2 text-text-secondary text-base sm:text-lg">
          {block.items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{renderInline(item)}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="list-decimal pl-6 mb-6 space-y-2 text-text-secondary text-base sm:text-lg">
          {block.items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{renderInline(item)}</li>
          ))}
        </ol>
      );
    case 'hr':
      return <hr className="border-border-primary/80 my-10" />;
    case 'image':
      return (
        <div className="my-8">
          <img
            src={block.src}
            alt={block.alt}
            className="rounded-xl border border-border-primary w-full object-cover max-h-[500px]"
          />
          {block.alt && (
            <p className="text-center text-xs text-text-muted mt-2 font-mono">
              {block.alt}
            </p>
          )}
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
          className="font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-bg-card border border-border-primary text-[#00e89d]"
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
          className="text-[#00e89d] hover:underline underline-offset-4 transition-colors font-medium"
        >
          {linkMatch[1]}
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
