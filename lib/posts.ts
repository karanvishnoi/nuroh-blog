import { blogPosts, BlogPost } from '@/data/blogs';

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map(p => p.category)));
}

export function getAllSlugs(): string[] {
  return blogPosts.map(p => p.slug);
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.toLowerCase();
  return getAllPosts().filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.excerpt.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
}
