import fs from 'fs';
import path from 'path';
import type { BlogCategory, ArticleReference, Article } from './blog-types';
export * from './blog-types';

const ARTICLES_DIRECTORY = path.join(process.cwd(), 'content', 'articles');

/**
 * Calculates estimated reading time based on a standard 200 words-per-minute rate.
 */
export function calculateReadingTime(text: string): string {
  const words = text
    .replace(/<[^>]*>/g, '') // strip HTML if any
    .replace(/```[\s\S]*?```/g, '') // strip code blocks for raw prose count
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Parses frontmatter and body from a markdown file string.
 * Minimalist zero-dependency parser compatible with standard YAML frontmatter blocks.
 */
function parseMarkdownFile(fileContent: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: fileContent.trim() };
  }

  const rawYaml = match[1];
  const content = match[2].trim();
  const data: Record<string, any> = {};

  const lines = rawYaml.split(/\r?\n/);
  let currentArrayKey: string | null = null;
  let currentArrayObj: Record<string, string> | null = null;
  let currentStringKey: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) continue;

    // Detect array item in an object list (e.g. references: - title: ... url: ...)
    if (trimmed.startsWith('-') && currentArrayKey) {
      if (currentArrayObj) {
        data[currentArrayKey].push(currentArrayObj);
        currentArrayObj = null;
      }

      currentStringKey = null;
      const itemContent = trimmed.substring(1).trim();
      if (itemContent.includes(':')) {
        const [k, ...v] = itemContent.split(':');
        currentArrayObj = { [k.trim()]: v.join(':').trim().replace(/^["']|["']$/g, '') };
      } else if (itemContent) {
        data[currentArrayKey].push(itemContent.replace(/^["']|["']$/g, ''));
      }
      continue;
    }

    // Detect indented key in array object (e.g. url: https://...)
    if (line.startsWith('    ') || line.startsWith('\t\t') || (line.startsWith('  ') && currentArrayObj)) {
      if (currentArrayObj && trimmed.includes(':')) {
        const [k, ...v] = trimmed.split(':');
        currentArrayObj[k.trim()] = v.join(':').trim().replace(/^["']|["']$/g, '');
        continue;
      }
    }

    // Detect folded multiline string continuation (e.g. description folded onto multiple lines)
    if ((line.startsWith('  ') || line.startsWith('    ') || line.startsWith('\t')) && currentStringKey && !currentArrayKey) {
      data[currentStringKey] = ((data[currentStringKey] || '') + ' ' + trimmed).replace(/^["']|["']$/g, '').trim();
      continue;
    }

    // If we reached a new top-level key, flush previous array object
    if (currentArrayObj && currentArrayKey) {
      data[currentArrayKey].push(currentArrayObj);
      currentArrayObj = null;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex > 0 && !line.startsWith(' ') && !line.startsWith('\t')) {
      const key = line.slice(0, colonIndex).trim();
      const val = line.slice(colonIndex + 1).trim();

      if (val === '') {
        // Start of list or nested object
        currentArrayKey = key;
        currentStringKey = null;
        data[key] = [];
      } else {
        currentArrayKey = null;
        currentStringKey = key;
        // Clean quotes
        data[key] = val.replace(/^["']|["']$/g, '');
      }
    }
  }

  if (currentArrayObj && currentArrayKey) {
    data[currentArrayKey].push(currentArrayObj);
  }

  return { data, content };
}

/**
 * Returns all published articles sorted by publication date descending.
 * Returns an empty array if no articles exist.
 */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIRECTORY)) {
    return [];
  }

  try {
    const fileNames = fs.readdirSync(ARTICLES_DIRECTORY);
    const mdFiles = fileNames.filter(
      (fileName) =>
        fileName.endsWith('.md') &&
        !fileName.startsWith('_') &&
        !fileName.toLowerCase().startsWith('readme')
    );

    if (mdFiles.length === 0) {
      return [];
    }

    const articles: Article[] = [];

    for (const fileName of mdFiles) {
      const fullPath = path.join(ARTICLES_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = parseMarkdownFile(fileContents);

      // Require title and description to consider a valid article
      if (!data.title) continue;

      const slug = data.slug || fileName.replace(/\.md$/, '');
      let rawCat = (data.category as string) || 'Technology & AI';
      if (rawCat === 'Science & Oceans') rawCat = 'Deep Sea & Oceans';
      const category = rawCat as BlogCategory;
      const readingTime = data.readingTime || calculateReadingTime(content);

      // Strip redundant leading H1 if it repeats the article title
      let cleanContent = content;
      if (cleanContent.startsWith('# ')) {
        const firstLineEnd = cleanContent.indexOf('\n');
        if (firstLineEnd !== -1) {
          const firstLine = cleanContent.slice(0, firstLineEnd).replace(/^#\s+/, '').trim();
          if (firstLine.toLowerCase() === data.title.toLowerCase()) {
            cleanContent = cleanContent.slice(firstLineEnd).trim();
          }
        }
      }

      // Strip redundant in-body "## References" section if frontmatter references are present
      if (Array.isArray(data.references) && data.references.length > 0) {
        cleanContent = cleanContent.replace(/##\s+References[\s\S]*$/i, '').trim();
      }

      articles.push({
        title: data.title,
        slug,
        date: data.date ? String(data.date) : '',
        description: data.description || '',
        category,
        readingTime,
        content: cleanContent,
        coverImage: data.coverImage,
        references: data.references,
        tags: Array.isArray(data.tags) ? data.tags : [],
      });
    }

    // Sort by date descending
    return articles.sort((a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0));
  } catch (err) {
    console.error('Error reading articles directory:', err);
    return [];
  }
}

/**
 * Returns a single article by its URL slug, or null if not found.
 */
export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug) || null;
}

/**
 * Returns all unique article slugs for static parameter generation.
 */
export function getArticleSlugs(): string[] {
  const articles = getAllArticles();
  return articles.map((article) => article.slug);
}

export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

/**
 * Extracts H2 and H3 headings for the sticky Table of Contents.
 */
export function extractTableOfContents(markdownContent: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const lines = markdownContent.split(/\r?\n/);
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = line.match(/^(#{2,3})\s+(.*)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim().replace(/\*\*/g, '').replace(/`/g, '');
      const id = text
        .toLowerCase()
        .replace(/<[^>]*>/g, '')
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');

      if (id && text) {
        headings.push({ id, text, level });
      }
    }
  }

  return headings;
}

/**
 * Returns previous and next articles relative to current article slug.
 */
export function getAdjacentArticles(slug: string): { prev: Article | null; next: Article | null } {
  const articles = getAllArticles();
  const currentIndex = articles.findIndex((article) => article.slug === slug);
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  // articles are sorted date descending (0 is newest)
  const next = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const prev = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
  return { prev, next };
}

