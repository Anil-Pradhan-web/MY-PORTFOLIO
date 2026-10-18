export type BlogCategory =
  | 'Deep Sea & Oceans'
  | 'Science & Oceans'
  | 'Nature & Environment'
  | 'Technology & AI'
  | 'Economics & Society';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'Deep Sea & Oceans',
  'Nature & Environment',
  'Technology & AI',
  'Economics & Society',
];

export interface ArticleReference {
  title: string;
  url: string;
}

export interface Article {
  title: string;
  slug: string;
  date: string;
  description: string;
  category: BlogCategory;
  readingTime: string;
  content: string;
  coverImage?: string;
  references?: ArticleReference[];
  tags?: string[];
}
