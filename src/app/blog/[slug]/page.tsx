import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getArticleBySlug,
  getArticleSlugs,
  extractTableOfContents,
  getAdjacentArticles,
} from '@/lib/blog';
import ArticleReadingView from '@/components/blog/ArticleReadingView';

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

  // Extract headings for Table of Contents
  const tocHeadings = extractTableOfContents(article.content);

  // Extract previous and next articles for bottom navigation
  const { prev, next } = getAdjacentArticles(slug);

  return (
    <ArticleReadingView
      article={article}
      tocHeadings={tocHeadings}
      prevArticle={prev}
      nextArticle={next}
    />
  );
}

