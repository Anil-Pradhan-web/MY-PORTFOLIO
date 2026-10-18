import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Sparkles, Mail } from 'lucide-react';
import { getAllArticles } from '@/lib/blog';
import BlogList from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'Writing & Explorations — Anil Pradhan',
  description:
    'An independent digital journal and research notebook by Anil Pradhan on technology & AI, deep-sea exploration, nature, and economics.',
  openGraph: {
    title: 'Writing & Explorations — Anil Pradhan',
    description:
      'An independent digital journal and research notebook by Anil Pradhan on technology & AI, deep-sea exploration, nature, and economics.',
    url: 'https://my-portfolio-anil.vercel.app/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen pt-28 pb-24 sm:pt-32 sm:pb-32 bg-bg-primary text-text-primary">
      <div className="container-custom max-w-6xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-[#00e89d] transition-colors group focus-ring rounded-lg px-2 py-1 -ml-2"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Editorial Masthead & Personal Hero */}
        <header className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="p-1.5 rounded-md bg-[#00e89d]/10 border border-[#00e89d]/25 text-[#00e89d]">
              <BookOpen className="w-3.5 h-3.5" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00e89d]">
              Anil Pradhan · Research &amp; Writing
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-text-primary tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Curiosity across code, deep oceans, ecosystems, and human systems.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed font-body max-w-3xl mb-8">
            An independent digital publication exploring where computational engineering meets physical and social reality. I write long-form deep-dives, architectural notes, and field observations across four ongoing research tracks.
          </p>

          {/* Subtle Editorial Dispatch Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-bg-card/70 border border-border-primary text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e89d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e89d]" />
              </span>
              <span className="text-text-primary font-medium">Editorial Status:</span>
              <span className="text-text-muted">
                {articles.length > 0
                  ? `${articles.length} dispatch${articles.length === 1 ? '' : 'es'} published · Open for reader dispatches`
                  : 'Inaugural dispatches currently in research & writing'}
              </span>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-[#00e89d] hover:underline underline-offset-4 transition-colors font-medium"
            >
              <Mail className="w-3 h-3" />
              <span>Suggest a topic or collaborate</span>
            </Link>
          </div>
        </header>

        {/* Main Content: The 4 Editorial Pillars & Future Articles */}
        <main>
          <BlogList articles={articles} />
        </main>
      </div>
    </div>
  );
}
