import Link from 'next/link';
import { ArrowLeft, Compass, Home } from 'lucide-react';

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen pt-28 pb-20 sm:pt-32 sm:pb-24 flex items-center justify-center bg-bg-primary text-text-primary px-4">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-bg-card border border-border-primary text-center shadow-2xl relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-[#00e89d]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-border-primary text-xs font-mono text-text-muted mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
          <span>Status 404 · Not Found</span>
        </div>

        <div className="mx-auto w-14 h-14 rounded-2xl bg-bg-secondary border border-border-primary flex items-center justify-center text-[#00e89d] mb-5">
          <Compass className="w-7 h-7" />
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mb-2">
          Article Not Found
        </h1>

        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          This article does not exist or has not been published yet. You can explore all writing topics or return to the main portfolio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/blog"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs py-2.5 px-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All Articles</span>
          </Link>

          <Link
            href="/"
            className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs py-2.5 px-4"
          >
            <Home className="w-4 h-4 text-text-muted" />
            <span>Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
