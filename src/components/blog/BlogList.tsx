'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Calendar,
  Search,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Filter,
} from 'lucide-react';
import type { Article, BlogCategory } from '@/lib/blog-types';
import { BLOG_CATEGORIES } from '@/lib/blog-types';
import { cn } from '@/lib/utils';

interface BlogListProps {
  articles: Article[];
}

const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  'Deep Sea & Oceans': {
    bg: 'bg-[#38bdf8]/10',
    text: 'text-[#38bdf8]',
    border: 'border-[#38bdf8]/30',
  },
  'Science & Oceans': {
    bg: 'bg-[#38bdf8]/10',
    text: 'text-[#38bdf8]',
    border: 'border-[#38bdf8]/30',
  },
  'Nature & Environment': {
    bg: 'bg-[#4ade80]/10',
    text: 'text-[#4ade80]',
    border: 'border-[#4ade80]/30',
  },
  'Technology & AI': {
    bg: 'bg-[#00e89d]/10',
    text: 'text-[#00e89d]',
    border: 'border-[#00e89d]/30',
  },
  'Economics & Society': {
    bg: 'bg-[#f5a623]/10',
    text: 'text-[#f5a623]',
    border: 'border-[#f5a623]/30',
  },
};

const ITEMS_PER_PAGE = 8;

export default function BlogList({ articles }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filtered articles (chronological/sequential order)
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        article.category === selectedCategory ||
        (selectedCategory === 'Deep Sea & Oceans' && article.category === 'Science & Oceans');
      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredArticles.length);
  const paginatedArticles = useMemo(() => {
    return filteredArticles.slice(startIndex, endIndex);
  }, [filteredArticles, startIndex, endIndex]);

  // Category tab button click handler
  const handleCategoryTabClick = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  // Page change handler
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  // Smart page numbers array with ellipsis
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('ellipsis-start');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('ellipsis-end');
      pages.push(totalPages);
    }
    return pages;
  }, [totalPages, currentPage]);

  return (
    <div className="w-full">
      {/* ── Search & Category Filter Bar ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-border-primary/80">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => handleCategoryTabClick('All')}
            className={cn(
              'px-3.5 py-1.5 rounded-full font-medium transition-all focus-ring whitespace-nowrap',
              selectedCategory === 'All'
                ? 'bg-[#00e89d] text-bg-primary font-semibold shadow-md shadow-[#00e89d]/20'
                : 'bg-bg-card border border-border-primary text-text-secondary hover:text-text-primary hover:border-border-secondary'
            )}
          >
            All ({articles.length})
          </button>
          {BLOG_CATEGORIES.map((cat) => {
            const count = articles.filter(
              (a) =>
                a.category === cat ||
                (cat === 'Deep Sea & Oceans' && a.category === 'Science & Oceans')
            ).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryTabClick(cat)}
                className={cn(
                  'px-3.5 py-1.5 rounded-full font-medium transition-all focus-ring whitespace-nowrap flex items-center gap-1.5',
                  isActive
                    ? 'bg-[#00e89d] text-bg-primary font-semibold shadow-md shadow-[#00e89d]/20'
                    : 'bg-bg-card border border-border-primary text-text-secondary hover:text-text-primary hover:border-border-secondary'
                )}
              >
                <span>{cat}</span>
                <span
                  className={cn(
                    'text-[10px] px-1.5 py-0.2 rounded-full',
                    isActive ? 'bg-bg-primary/20 text-bg-primary font-bold' : 'text-text-muted'
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input Box */}
        {articles.length > 0 && (
          <div className="relative w-full lg:w-72 flex-shrink-0">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search dispatches..."
              className="w-full pl-9 pr-7 py-2 rounded-xl bg-bg-card border border-border-primary text-xs font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-[#00e89d]/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Active Filter Indicator Bar */}
      {(selectedCategory !== 'All' || searchQuery) && (
        <div className="flex items-center gap-2 mb-8 p-3 rounded-xl bg-bg-card/50 border border-border-primary text-xs font-mono text-text-secondary">
          <Filter className="w-3.5 h-3.5 text-[#00e89d]" />
          <span>Active filter:</span>
          {selectedCategory !== 'All' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#00e89d]/10 border border-[#00e89d]/30 text-[#00e89d]">
              <span>{selectedCategory}</span>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setCurrentPage(1);
                }}
                className="hover:text-white"
                aria-label="Remove category filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-bg-secondary border border-border-primary text-text-primary">
              <span>"{searchQuery}"</span>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="hover:text-[#00e89d]"
                aria-label="Remove search filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setCurrentPage(1);
            }}
            className="ml-auto text-xs text-text-muted hover:text-[#00e89d] transition-colors underline underline-offset-2"
          >
            Reset filter
          </button>
        </div>
      )}

      {/* ── Sequential Article Feed ── */}
      {filteredArticles.length > 0 ? (
        <>
          <div className="flex flex-col gap-4 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {paginatedArticles.map((article, idx) => {
                const style = CATEGORY_STYLES[article.category] || {
                  bg: 'bg-[#00e89d]/10',
                  text: 'text-[#00e89d]',
                  border: 'border-[#00e89d]/30',
                };
                const sequenceNum = String(startIndex + idx + 1).padStart(2, '0');

                return (
                  <motion.article
                    key={article.slug}
                    layout
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="group relative rounded-2xl border border-border-primary/80 bg-bg-card/70 hover:bg-bg-card hover:border-[#00e89d]/40 transition-all duration-300 p-6 sm:p-7 shadow-sm hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:-translate-y-0.5"
                  >
                    <Link
                      href={`/blog/${article.slug}`}
                      className="flex flex-col sm:flex-row sm:items-start justify-between gap-5"
                    >
                      <div className="flex-1 space-y-3">
                        {/* Meta: Sequence #, Category Badge, Date, Reading Time */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono">
                          <span className="text-[#00e89d] font-bold">
                            #{sequenceNum}
                          </span>
                          <span className="text-border-primary select-none">•</span>
                          <span
                            className={cn(
                              'px-2.5 py-0.5 rounded-full border text-xs font-medium',
                              style.bg,
                              style.text,
                              style.border
                            )}
                          >
                            {article.category}
                          </span>
                          <span className="text-border-primary select-none hidden sm:inline">•</span>
                          <span className="text-text-muted inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </span>
                          <span className="text-border-primary select-none hidden sm:inline">•</span>
                          <span className="text-text-muted inline-flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readingTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight leading-snug group-hover:text-[#00e89d] transition-colors">
                          {article.title}
                        </h3>

                        {/* Excerpt / Description */}
                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-body line-clamp-2 sm:line-clamp-3">
                          {article.description}
                        </p>
                      </div>

                      {/* Right Action */}
                      <div className="sm:self-center flex-shrink-0 pt-2 sm:pt-0">
                        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-semibold text-[#00e89d] group-hover:translate-x-1.5 transition-transform duration-200">
                          <span>Read Article</span>
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ── Pagination Bar ── */}
          {totalPages > 1 ? (
            <div className="mt-12 pt-8 border-t border-border-primary/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs font-mono text-text-muted order-2 sm:order-1">
                Showing <span className="text-text-primary font-medium">{startIndex + 1}–{endIndex}</span> of{' '}
                <span className="text-text-primary font-medium">{filteredArticles.length}</span> dispatches
              </p>

              <nav aria-label="Pagination" className="flex items-center gap-1.5 order-1 sm:order-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={cn(
                    'inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors',
                    currentPage === 1
                      ? 'opacity-35 cursor-not-allowed border-border-primary text-text-muted bg-bg-card/40'
                      : 'border-border-primary bg-bg-card text-text-primary hover:border-[#00e89d]/50 hover:text-[#00e89d]'
                  )}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Prev</span>
                </button>

                {pageNumbers.map((p, pIdx) => {
                  if (typeof p === 'string') {
                    return (
                      <span key={`ellipsis-${pIdx}`} className="px-1.5 text-xs font-mono text-text-muted select-none">
                        …
                      </span>
                    );
                  }
                  const isActive = p === currentPage;
                  return (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      className={cn(
                        'w-8 h-8 rounded-lg text-xs font-mono font-medium transition-all focus-ring',
                        isActive
                          ? 'bg-[#00e89d] text-bg-primary font-bold shadow-md shadow-[#00e89d]/25 scale-105'
                          : 'bg-bg-card border border-border-primary text-text-secondary hover:text-text-primary hover:border-border-secondary'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {p}
                    </button>
                  );
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={cn(
                    'inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors',
                    currentPage === totalPages
                      ? 'opacity-35 cursor-not-allowed border-border-primary text-text-muted bg-bg-card/40'
                      : 'border-border-primary bg-bg-card text-text-primary hover:border-[#00e89d]/50 hover:text-[#00e89d]'
                  )}
                  aria-label="Next page"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </nav>
            </div>
          ) : (
            <div className="mt-10 pt-6 border-t border-border-primary/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-text-muted">
              <span>
                Showing {filteredArticles.length} published {filteredArticles.length === 1 ? 'dispatch' : 'dispatches'}
                {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
              </span>
              <span className="text-text-secondary">Page 1 of 1</span>
            </div>
          )}
        </>
      ) : (
        /* Empty Search or Category State */
        <div className="py-16 px-6 rounded-3xl bg-bg-card/40 border border-border-primary text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-bg-secondary border border-border-primary flex items-center justify-center text-text-muted">
            <BookOpen className="w-6 h-6" />
          </div>
          <h4 className="font-display text-xl font-bold text-text-primary mb-2">
            {searchQuery
              ? 'No matching dispatches found'
              : `No dispatches published in "${selectedCategory}" yet`}
          </h4>
          <p className="text-sm text-text-secondary max-w-md mx-auto mb-6 font-body leading-relaxed">
            {searchQuery
              ? `No articles match your query "${searchQuery}". Try searching with different keywords.`
              : `Field observations and deep-dives for ${selectedCategory} are actively being drafted. Check back soon.`}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setCurrentPage(1);
            }}
            className="btn-secondary text-xs px-4 py-2.5 inline-flex items-center gap-2"
          >
            <span>View All Dispatches ({articles.length})</span>
          </button>
        </div>
      )}
    </div>
  );
}
