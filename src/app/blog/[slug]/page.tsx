import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2, Compass, ArrowUpRight } from 'lucide-react';
import { getArticleBySlug, getArticleSlugs } from '@/lib/blog';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found — Anil Pradhan',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${article.title} — Anil Pradhan`,
    description: article.description,
    openGraph: {
      title: `${article.title} — Anil Pradhan`,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: ['Anil Pradhan'],
      images: article.coverImage ? [{ url: article.coverImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: article.coverImage ? [article.coverImage] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  // If no article exists matching this slug, show clean 404
  if (!article) {
    notFound();
  }

  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : '';

  return (
    <article className="min-h-screen pt-28 pb-20 sm:pt-32 sm:pb-24 bg-bg-primary text-text-primary">
      <div className="container-custom max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-[#00e89d] transition-colors group focus-ring rounded-lg px-2 py-1 -ml-2"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>All Articles</span>
          </Link>

          <span className="text-xs font-mono text-text-muted">
            /blog/{article.slug}
          </span>
        </div>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-border-primary/80">
          {/* Metadata pill */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#00e89d]/10 border border-[#00e89d]/25 text-[#00e89d] font-medium">
              {article.category}
            </span>
            {formattedDate && (
              <span className="inline-flex items-center gap-1.5 text-text-muted">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formattedDate}</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-text-muted">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-5">
            {article.title}
          </h1>

          {/* Subtitle / Excerpt */}
          {article.description && (
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-body">
              {article.description}
            </p>
          )}

          {/* Optional Cover Image */}
          {article.coverImage && (
            <div className="mt-8 rounded-2xl overflow-hidden border border-border-primary">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-auto object-cover max-h-[480px]"
              />
            </div>
          )}
        </header>

        {/* Rendered Markdown Body */}
        <main className="mb-14">
          <MarkdownRenderer content={article.content} references={article.references} />
        </main>

        {/* Author Footer Card */}
        <footer className="pt-10 border-t border-border-primary/80">
          <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-primary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00e89d]/20 to-[#f5a623]/20 border border-[#00e89d]/30 flex items-center justify-center font-display font-bold text-[#00e89d] text-lg flex-shrink-0">
                AP
              </div>
              <div>
                <h4 className="font-display font-bold text-text-primary text-base">
                  Anil Pradhan
                </h4>
                <p className="text-xs text-text-secondary mt-0.5">
                  AI &amp; Backend Engineer · Multi-Agent Systems &amp; Computer Vision
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <Link
                href="/blog"
                className="btn-secondary text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>More Articles</span>
              </Link>
              <Link
                href="/"
                className="btn-primary text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5"
              >
                <span>Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
