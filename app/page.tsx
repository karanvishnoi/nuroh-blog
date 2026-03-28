import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import CategoryFilter from '@/components/CategoryFilter';
import { getAllPosts, getAllCategories } from '@/lib/posts';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts.slice(0, 3);
  const recent = posts.slice(3, 9);
  const categories = getAllCategories();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: 'https://blog.nuroh.in/' }])) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-coffee via-coffee-light to-coffee-dark text-white py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-terracotta-light text-sm font-semibold tracking-widest uppercase mb-4">From the Heart of Jaipur</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">Stories, Sips<br className="hidden md:block" /> & the City</h1>
          <p className="text-warm-300 text-lg max-w-2xl mx-auto mb-8">Coffee tales, Jaipur hidden gems, brunch guides, and everything happening at Nuroh Cafe — your corner in C Scheme.</p>
          <Link href="/blog/" className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors">Explore All Posts</Link>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-coffee mb-8">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(post => <BlogCard key={post.slug} {...post} />)}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-coffee mb-6">Browse by Category</h2>
        <CategoryFilter categories={categories} />
      </section>

      {/* Recent */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-coffee mb-8">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map(post => <BlogCard key={post.slug} {...post} />)}
        </div>
        <div className="text-center mt-10">
          <Link href="/blog/" className="inline-block border-2 border-coffee text-coffee hover:bg-coffee hover:text-white font-semibold px-8 py-3 rounded-xl transition-all">View All Posts</Link>
        </div>
      </section>
    </>
  );
}
