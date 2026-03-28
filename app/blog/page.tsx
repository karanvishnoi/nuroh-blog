import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import CategoryFilter from '@/components/CategoryFilter';
import { getAllPosts, getAllCategories } from '@/lib/posts';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'All Blog Posts — Nuroh Cafe Jaipur',
  description: 'Read all stories from Nuroh Cafe — coffee guides, Jaipur food spots, cafe culture, events, and hidden gems in the Pink City.',
  alternates: { canonical: 'https://blog.nuroh.in/blog/' },
};

export default function BlogListPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: 'https://blog.nuroh.in/' }, { name: 'Blog', url: 'https://blog.nuroh.in/blog/' }])) }} />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-coffee mb-4">All Posts</h1>
        <p className="text-warm-500 mb-8 max-w-2xl">Stories about coffee, food, Jaipur, and life at Nuroh Cafe.</p>
        <div className="mb-10"><CategoryFilter categories={categories} /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => <BlogCard key={post.slug} {...post} />)}
        </div>
      </section>
    </>
  );
}
