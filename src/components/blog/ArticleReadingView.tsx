'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Check,
  Copy,
  ChevronRight,
  List,
  ArrowUp,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import type { Article } from '@/lib/blog-types';
import type { TocHeading } from '@/lib/blog';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';
import { cn } from '@/lib/utils';

interface ArticleReadingViewProps {
  article: Article;
  tocHeadings: TocHeading[];
  prevArticle: Article | null;
  nextArticle: Article | null;
}

export default function ArticleReadingView({
  article,
  tocHeadings,
  prevArticle,
  nextArticle,
}: ArticleReadingViewProps) {
  const [copied, setCopied] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track active heading using IntersectionObserver
  useEffect(() => {
    if (tocHeadings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-80px 0px -65% 0px',
        threshold: 0,
      }
    );

    tocHeadings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocHeadings]);

  // Copy Link Handler
  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  // Social Share URLs
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = encodeURIComponent(article.title);
  const shareOnXUrl = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(pageUrl)}`;
  const shareOnLinkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;

  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  return (
    <>
      {/* ── Top Reading Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#00e89d] z-50 origin-left shadow-[0_0_12px_#00e89d]"
        style={{ scaleX }}
      />

      <article className="min-h-screen pt-28 pb-20 sm:pt-32 sm:pb-28 bg-bg-primary text-text-primary">
        <div className="container-custom max-w-6xl">
          {/* ── Top Toolbar: Navigation & Social Share ── */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-primary/60">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-[#00e89d] transition-colors group focus-ring rounded-lg px-2 py-1 -ml-2"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to all dispatches</span>
            </Link>

            {/* Share and Copy Link Toolbar */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card border border-border-primary text-xs font-mono text-text-secondary hover:text-text-primary hover:border-[#00e89d]/40 transition-all shadow-sm"
                aria-label="Copy article link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00e89d]" />
                    <span className="text-[#00e89d] font-semibold">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-text-muted" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={shareOnXUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-bg-card border border-border-primary text-xs font-mono text-text-muted hover:text-text-primary hover:border-border-secondary transition-colors"
                aria-label="Share on X"
                title="Share on X (Twitter)"
              >
                𝕏
              </a>

              <a
                href={shareOnLinkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-bg-card border border-border-primary text-xs font-mono text-text-muted hover:text-text-primary hover:border-border-secondary transition-colors"
                aria-label="Share on LinkedIn"
                title="Share on LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* ── Article Editorial Header ── */}
          <header className="mb-12 max-w-4xl">
            {/* Category, Date & Reading Time Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#00e89d]/10 border border-[#00e89d]/30 text-[#00e89d] font-semibold">
                {article.category}
              </span>
              <span className="text-border-primary select-none">•</span>
              {formattedDate && (
                <span className="inline-flex items-center gap-1.5 text-text-muted">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formattedDate}</span>
                </span>
              )}
              <span className="text-border-primary select-none">•</span>
              <span className="inline-flex items-center gap-1.5 text-text-muted">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readingTime}</span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-primary tracking-tight leading-[1.15] mb-6">
              {article.title}
            </h1>

            {/* Description / Subtitle */}
            {article.description && (
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-body font-light">
                {article.description}
              </p>
            )}

            {/* Cover Image */}
            {article.coverImage && (
              <div className="mt-9 rounded-2xl overflow-hidden border border-border-primary shadow-2xl bg-bg-card relative">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>
            )}
          </header>

          {/* ── 2-Column Grid: Main Body + Sticky Table of Contents ── */}
          <div className="flex flex-col xl:flex-row items-start justify-between gap-12 lg:gap-16">
            {/* Main Content Column */}
            <main className="min-w-0 max-w-3xl flex-1">
              <MarkdownRenderer content={article.content} references={article.references} />

              {/* ── Adjacent Articles (Previous / Next Navigation) ── */}
              {(prevArticle || nextArticle) && (
                <nav
                  aria-label="Dispatch navigation"
                  className="mt-16 pt-10 border-t border-border-primary/80 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {prevArticle ? (
                    <Link
                      href={`/blog/${prevArticle.slug}`}
                      className="group p-5 rounded-2xl bg-bg-card/70 border border-border-primary hover:border-[#00e89d]/40 transition-all flex flex-col justify-between hover:bg-bg-card hover:shadow-md"
                    >
                      <span className="text-xs font-mono text-text-muted flex items-center gap-1 mb-2 group-hover:text-[#00e89d] transition-colors">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        <span>Previous Dispatch</span>
                      </span>
                      <h4 className="font-display font-bold text-sm sm:text-base text-text-primary group-hover:text-[#00e89d] transition-colors line-clamp-2">
                        {prevArticle.title}
                      </h4>
                      <span className="mt-3 text-xs font-mono text-text-muted">
                        {prevArticle.category} · {prevArticle.readingTime}
                      </span>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextArticle ? (
                    <Link
                      href={`/blog/${nextArticle.slug}`}
                      className="group p-5 rounded-2xl bg-bg-card/70 border border-border-primary hover:border-[#00e89d]/40 transition-all flex flex-col justify-between text-left sm:text-right hover:bg-bg-card hover:shadow-md"
                    >
                      <span className="text-xs font-mono text-text-muted flex items-center justify-start sm:justify-end gap-1 mb-2 group-hover:text-[#00e89d] transition-colors">
                        <span>Next Dispatch</span>
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <h4 className="font-display font-bold text-sm sm:text-base text-text-primary group-hover:text-[#00e89d] transition-colors line-clamp-2">
                        {nextArticle.title}
                      </h4>
                      <span className="mt-3 text-xs font-mono text-text-muted">
                        {nextArticle.category} · {nextArticle.readingTime}
                      </span>
                    </Link>
                  ) : (
                    <div />
                  )}
                </nav>
              )}

              {/* ── Author Footer Card ── */}
              <footer className="mt-12 pt-8 border-t border-border-primary/80">
                <div className="p-6 sm:p-7 rounded-2xl bg-bg-card/80 border border-border-primary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00e89d]/25 to-[#f5a623]/25 border border-[#00e89d]/40 flex items-center justify-center font-display font-bold text-[#00e89d] text-lg flex-shrink-0 shadow-sm">
                      AP
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-text-primary text-base">
                        Anil Pradhan
                      </h4>
                      <p className="text-xs text-text-secondary mt-0.5">
                        AI &amp; Backend Engineer · Multi-Agent Systems &amp; Technical Writing
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href="/blog"
                      className="btn-secondary text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>All Dispatches</span>
                    </Link>
                    <Link
                      href="/"
                      className="btn-primary text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5"
                    >
                      <span>Portfolio</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </footer>
            </main>

            {/* ── Sticky Table of Contents Sidebar (Desktop XL+) ── */}
            {tocHeadings.length > 0 && (
              <aside className="hidden xl:block w-72 flex-shrink-0 sticky top-28 self-start space-y-6">
                <div className="p-5 rounded-2xl bg-bg-card/60 border border-border-primary shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                    <List className="w-3.5 h-3.5 text-[#00e89d]" />
                    <span>In This Dispatch</span>
                  </div>

                  <nav aria-label="Table of contents" className="max-h-[60vh] overflow-y-auto pr-1 scrollbar-none">
                    <ul className="space-y-1.5 text-xs">
                      {tocHeadings.map((heading) => {
                        const isActive = activeHeadingId === heading.id;
                        return (
                          <li
                            key={heading.id}
                            className={cn(
                              'transition-all',
                              heading.level === 3 ? 'pl-3' : 'pl-0'
                            )}
                          >
                            <a
                              href={`#${heading.id}`}
                              className={cn(
                                'block py-1.5 px-2 rounded-lg transition-colors leading-snug',
                                isActive
                                  ? 'bg-[#00e89d]/10 text-[#00e89d] font-semibold border-l-2 border-[#00e89d]'
                                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                              )}
                            >
                              {heading.text}
                            </a>
                          </li>
                        );
                      })}
                      {article.references && article.references.length > 0 && (
                        <li>
                          <a
                            href="#references"
                            className="block py-1.5 px-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-secondary transition-colors"
                          >
                            Verified Sources
                          </a>
                        </li>
                      )}
                    </ul>
                  </nav>

                  <div className="mt-5 pt-4 border-t border-border-primary/60 flex items-center justify-between text-xs font-mono text-text-muted">
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="inline-flex items-center gap-1.5 hover:text-[#00e89d] transition-colors"
                    >
                      <ArrowUp className="w-3 h-3" />
                      <span>Back to top</span>
                    </button>
                    <span>{tocHeadings.length} sections</span>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>

        {/* ── Mobile Floating Table of Contents Trigger (Below XL) ── */}
        {tocHeadings.length > 0 && (
          <div className="xl:hidden fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-bg-card border border-[#00e89d]/40 text-[#00e89d] shadow-2xl font-mono text-xs font-semibold backdrop-blur-md hover:bg-[#00e89d] hover:text-bg-primary transition-all"
              aria-label="Toggle Table of Contents"
            >
              <List className="w-4 h-4" />
              <span>Outline ({tocHeadings.length})</span>
            </button>

            {/* Mobile Drawer Dropdown */}
            {isMobileTocOpen && (
              <div className="absolute bottom-14 right-0 w-80 max-h-[70vh] overflow-y-auto p-4 rounded-2xl bg-bg-card border border-border-primary shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-border-primary text-xs font-mono font-semibold text-text-muted">
                  <span>Sections</span>
                  <button
                    onClick={() => setIsMobileTocOpen(false)}
                    className="text-text-muted hover:text-text-primary"
                  >
                    Close
                  </button>
                </div>
                <ul className="space-y-1 text-xs">
                  {tocHeadings.map((heading) => (
                    <li key={heading.id} className={heading.level === 3 ? 'pl-3' : ''}>
                      <a
                        href={`#${heading.id}`}
                        onClick={() => setIsMobileTocOpen(false)}
                        className="block py-1.5 px-2 rounded-lg text-text-secondary hover:text-[#00e89d] hover:bg-bg-secondary"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </article>
    </>
  );
}
