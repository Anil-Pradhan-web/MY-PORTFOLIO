'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Calendar,
  Search,
  X,
  ArrowRight,
  ArrowDown,
  Cpu,
  Waves,
  TrendingUp,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Check,
  BookOpen,
  Filter,
} from 'lucide-react';
import type { Article, BlogCategory } from '@/lib/blog-types';
import { BLOG_CATEGORIES } from '@/lib/blog-types';
import { cn } from '@/lib/utils';

interface BlogListProps {
  articles: Article[];
}

interface TopicPillar {
  title: BlogCategory;
  headline: string;
  image: string;
  alt: string;
  accent: {
    text: string;
    bg: string;
    border: string;
    ring: string;
  };
  icon: React.ComponentType<{ className?: string }>;
}

const TOPIC_PILLARS: TopicPillar[] = [
  {
    title: 'Deep Sea & Oceans',
    headline: 'Deep Sea & Oceans 🌊',
    image: '/blog/deep_sea.png',
    alt: 'Deep sea exploration submersible with searchlights illuminating the rocky ocean floor',
    accent: {
      text: 'text-[#38bdf8]',
      bg: 'bg-[#38bdf8]/10',
      border: 'border-[#38bdf8]/30',
      ring: 'ring-[#38bdf8]',
    },
    icon: Waves,
  },
  {
    title: 'Nature & Environment',
    headline: 'Nature & Environment 🌿',
    image: '/blog/nature_enviroment.png',
    alt: 'Lush green forest canopy with warm golden morning sunlight filtering through the trees',
    accent: {
      text: 'text-[#4ade80]',
      bg: 'bg-[#4ade80]/10',
      border: 'border-[#4ade80]/30',
      ring: 'ring-[#4ade80]',
    },
    icon: Leaf,
  },
  {
    title: 'Technology & AI',
    headline: 'Technology & AI 🤖',
    image: '/blog/Technology_ai.png',
    alt: 'Developer coding on a modern laptop with lines of python and AI scripts',
    accent: {
      text: 'text-[#00e89d]',
      bg: 'bg-[#00e89d]/10',
      border: 'border-[#00e89d]/30',
      ring: 'ring-[#00e89d]',
    },
    icon: Cpu,
  },
  {
    title: 'Economics & Society',
    headline: 'Economics & Society 📈',
    image: '/blog/society.png',
    alt: 'Street scene of daily commerce and working-class labor in an Indian city',
    accent: {
      text: 'text-[#f5a623]',
      bg: 'bg-[#f5a623]/10',
      border: 'border-[#f5a623]/30',
      ring: 'ring-[#f5a623]',
    },
    icon: TrendingUp,
  },
];

const ITEMS_PER_PAGE = 6;

export default function BlogList({ articles }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filtered articles (when published articles exist)
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

  // Smooth scroll helper to articles section
  const scrollToArticles = () => {
    setTimeout(() => {
      const el = document.getElementById('articles-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  // Card click handler: selects category and scrolls smoothly
  const handleTopicCardClick = (category: BlogCategory) => {
    if (selectedCategory === category) {
      setSelectedCategory('All');
    } else {
      setSelectedCategory(category);
    }
    setCurrentPage(1);
    scrollToArticles();
  };

  // Category tab button click handler
  const handleCategoryTabClick = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  // Page change handler
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    scrollToArticles();
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
      {/* ── Section Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border-primary/80">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
            Curated Research Tracks
          </h2>
          <p className="text-xs sm:text-sm text-text-muted mt-1 font-body">
            Click any track to explore its dispatches and field observations.
          </p>
        </div>

        {articles.length > 0 && (
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search dispatches..."
              className="w-full pl-8 pr-7 py-2 rounded-lg bg-bg-card border border-border-primary text-xs font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-[#00e89d]/50"
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

      {/* ── The 4 Major Topic Cards: Clean Emoji Headlines ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
        {TOPIC_PILLARS.map((topic, idx) => {
          const Icon = topic.icon;
          const isSelected = selectedCategory === topic.title;
          const categoryCount = articles.filter(
            (a) =>
              a.category === topic.title ||
              (topic.title === 'Deep Sea & Oceans' && a.category === 'Science & Oceans')
          ).length;

          return (
            <motion.article
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => handleTopicCardClick(topic.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTopicCardClick(topic.title);
                }
              }}
              className={cn(
                'group flex flex-col rounded-3xl bg-bg-card/70 border overflow-hidden cursor-pointer text-left transition-all duration-300',
                'hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.65)]',
                isSelected
                  ? cn(
                      'ring-2 ring-offset-2 ring-offset-bg-primary border-transparent shadow-[0_16px_40px_rgba(0,0,0,0.8)]',
                      topic.accent.ring
                    )
                  : 'border-border-primary hover:border-border-secondary'
              )}
            >
              {/* Grand 16:9 Image Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-secondary">
                <Image
                  src={topic.image}
                  alt={topic.alt}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle bottom fade to blend with card */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/30 via-transparent to-transparent opacity-25 pointer-events-none" />

                {/* Category Pill Badge on Image */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md border shadow-lg',
                      topic.accent.bg,
                      topic.accent.text,
                      topic.accent.border
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{topic.title}</span>
                  </span>
                </div>

                {/* Active Filter or Dispatch Count Tag on Image Top-Right */}
                <div className="absolute top-4 right-4 z-10">
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#00e89d] text-bg-primary shadow-lg">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Active Filter</span>
                    </span>
                  ) : categoryCount > 0 ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono backdrop-blur-md bg-black/75 border border-white/20 text-text-primary shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d]" />
                      <span>
                        {categoryCount} {categoryCount === 1 ? 'Dispatch' : 'Dispatches'}
                      </span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono backdrop-blur-md bg-black/60 border border-white/10 text-text-muted">
                      <span>Research Track</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Editorial Content: Normal Headline with Emoji */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3
                    className={cn(
                      'font-display text-2xl sm:text-[1.65rem] font-bold tracking-tight transition-colors leading-snug flex items-center gap-2',
                      isSelected ? topic.accent.text : 'text-text-primary group-hover:text-[#00e89d]'
                    )}
                  >
                    <span>{topic.headline}</span>
                  </h3>
                </div>

                {/* Card Footer: Live Dispatch Count & Click Indicator */}
                <div className="pt-4 border-t border-border-primary/70 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-muted">Track 0{idx + 1}</span>

                  {categoryCount > 0 ? (
                    <span className="text-[#00e89d] font-semibold inline-flex items-center gap-1.5 group-hover:translate-y-0.5 transition-transform">
                      <span>
                        {isSelected
                          ? `Showing ${categoryCount} Dispatches ↓`
                          : `View ${categoryCount} ${categoryCount === 1 ? 'Dispatch' : 'Dispatches'} ↓`}
                      </span>
                    </span>
                  ) : (
                    <span className="text-text-muted group-hover:text-text-secondary transition-colors inline-flex items-center gap-1.5">
                      <span>Dispatches in research</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* ── Published Articles Section ── */}
      <section id="articles-section" className="scroll-mt-28 pt-4 border-t border-border-primary">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#00e89d]" />
              <h3 className="font-display text-2xl font-bold text-text-primary tracking-tight">
                Published Dispatches
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-text-muted font-body">
              {selectedCategory === 'All'
                ? `Showing all published research dispatches (${filteredArticles.length} total)`
                : `Filtered by ${selectedCategory} (${filteredArticles.length} matching)`}
            </p>
          </div>

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
        </div>

        {/* Active Filter Pill Bar (if a specific filter is set) */}
        {(selectedCategory !== 'All' || searchQuery) && (
          <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-bg-card/50 border border-border-primary text-xs font-mono text-text-secondary">
            <Filter className="w-3.5 h-3.5 text-[#00e89d]" />
            <span>Active filters:</span>
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
              Reset all
            </button>
          </div>
        )}

        {/* ── Articles Grid ── */}
        {filteredArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {paginatedArticles.map((article, idx) => (
                  <motion.article
                    key={article.slug}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="card-interactive flex flex-col justify-between group overflow-hidden border border-border-primary bg-bg-card rounded-2xl hover:border-[#00e89d]/40 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                  >
                    <Link href={`/blog/${article.slug}`} className="flex flex-col h-full p-6">
                      <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono">
                        <span className="text-[#00e89d] font-medium">{article.category}</span>
                        <span className="text-text-muted inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readingTime}
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-bold text-text-primary mb-2 tracking-tight group-hover:text-[#00e89d] transition-colors leading-snug">
                        {article.title}
                      </h4>

                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6 flex-grow line-clamp-3 font-body">
                        {article.description}
                      </p>

                      <div className="pt-3 border-t border-border-primary/60 flex items-center justify-between text-xs">
                        <span className="text-text-muted font-mono inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="text-[#00e89d] font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Read</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {/* ── Pagination Bar ── */}
            {totalPages > 1 ? (
              <div className="mt-12 pt-8 border-t border-border-primary/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Status Indicator */}
                <p className="text-xs font-mono text-text-muted order-2 sm:order-1">
                  Showing <span className="text-text-primary font-medium">{startIndex + 1}–{endIndex}</span> of{' '}
                  <span className="text-text-primary font-medium">{filteredArticles.length}</span> dispatches
                </p>

                {/* Page Controls */}
                <nav aria-label="Pagination" className="flex items-center gap-1.5 order-1 sm:order-2">
                  {/* Previous Button */}
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

                  {/* Page Numbers */}
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

                  {/* Next Button */}
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
                  Showing all {filteredArticles.length} published {filteredArticles.length === 1 ? 'dispatch' : 'dispatches'}
                  {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
                </span>
                <span className="text-text-secondary">Page 1 of 1</span>
              </div>
            )}
          </>
        ) : (
          /* Empty Search or Empty Category State */
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
                : `Field observations and deep-dives for ${selectedCategory} are actively being drafted. Check back soon for the first release.`}
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
      </section>

      {/* ── Subtle, Honest Empty State Footer (When 0 total articles exist across the blog) ── */}
      {articles.length === 0 && (
        <div className="mt-8 p-6 rounded-2xl bg-bg-card/40 border border-border-primary/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d]" />
            <span>
              No articles published yet. Every piece is drafted from original research without synthetic filler.
            </span>
          </div>

          <span className="text-text-secondary font-medium">
            Check back soon for the first dispatches.
          </span>
        </div>
      )}
    </div>
  );
}
