import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import CategoryFilter from '@/components/CategoryFilter';
import { getAllPosts, getAllCategories } from '@/lib/posts';
import { breadcrumbSchema } from '@/lib/schema';

const categoryMap: Record<string, string> = {
  'coffee---culture': 'Coffee & Culture',
  'coffee-&-culture': 'Coffee & Culture',
  'food---brunch': 'Food & Brunch',
  'food-&-brunch': 'Food & Brunch',
  'jaipur-guide': 'Jaipur Guide',
  'events---lifestyle': 'Events & Lifestyle',
  'events-&-lifestyle': 'Events & Lifestyle',
};

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map(cat => ({ cat: cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') }));
}

export function generateMetadata({ params }: { params: { cat: string } }): Metadata {
  const catName = categoryMap[params.cat] || params.cat;
  return {
    title: `${catName} — Nuroh Cafe Blog`,
    description: `Read all ${catName} articles from Nuroh Cafe Jaipur.`,
    alternates: { canonical: `https://blog.nuroh.in/category/${params.cat}/` },
  };
}

export default function CategoryPage({ params }: { params: { cat: string } }) {
  const catName = categoryMap[params.cat] || params.cat;
  const allPosts = getAllPosts();
  const posts = allPosts.filter(p => p.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === params.cat);
  const categories = getAllCategories();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: 'https://blog.nuroh.in/' }, { name: catName, url: `https://blog.nuroh.in/category/${params.cat}/` }])) }} />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-coffee mb-4">{catName}</h1>
        <p className="text-warm-500 mb-8">{posts.length} articles in this category</p>
        <div className="mb-10"><CategoryFilter categories={categories} active={catName} /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => <BlogCard key={post.slug} {...post} />)}
        </div>
      </section>
    </>
  );
}
