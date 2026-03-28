import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/posts';
import { blogPostingSchema, breadcrumbSchema } from '@/lib/schema';

const postImages: Record<string, string> = {
  'best-specialty-coffee-jaipur': 'https://nuroh.in/assets/images/food/espresso.jpg',
  'pour-over-coffee-guide-nuroh': 'https://nuroh.in/assets/images/food/latte-art.jpg',
  'cold-brew-vs-iced-coffee-nuroh': 'https://nuroh.in/assets/images/food/frappe.jpg',
  'latte-art-culture-jaipur-nuroh': 'https://nuroh.in/assets/images/food/coffee.jpg',
  'jaipur-coffee-scene-nuroh': 'https://nuroh.in/assets/images/food/hot-chocolate.jpg',
  'best-brunch-spots-jaipur': 'https://nuroh.in/assets/images/food/pancakes-dessert.jpg',
  'what-to-eat-nuroh-cafe-jaipur': 'https://nuroh.in/assets/images/food/food-platter.jpg',
  'top-breakfast-spots-jaipur': 'https://nuroh.in/assets/images/food/bruschetta.jpg',
  'nuroh-signature-avocado-toast': 'https://nuroh.in/assets/images/food/bruschetta2.jpg',
  'mediterranean-food-jaipur-nuroh': 'https://nuroh.in/assets/images/food/hummus.jpg',
  'hidden-gems-jaipur-locals': 'https://nuroh.in/assets/images/interior-grand-arches.jpg',
  'work-from-cafe-jaipur-freelancers': 'https://nuroh.in/assets/images/interior-full-hall.jpg',
  'things-to-do-jaipur-weekend': 'https://nuroh.in/assets/images/interior-arches-cityview.jpg',
  'best-study-cafes-jaipur': 'https://nuroh.in/assets/images/interior-warm-arches.jpg',
  'c-scheme-jaipur-food-cafe-guide': 'https://nuroh.in/assets/images/corridor-daylight.jpg',
  'weekend-plans-jaipur-nuroh': 'https://nuroh.in/assets/images/interior-night-terrace.jpg',
  'instagrammable-cafes-jaipur-2026': 'https://nuroh.in/assets/images/interior-terrace-1.jpg',
  'book-reading-events-nuroh-jaipur': 'https://nuroh.in/assets/images/interior-moorish-arches.jpg',
  'open-mic-nights-jaipur': 'https://nuroh.in/assets/images/interior-night-outdoor.jpg',
  'nuroh-cafe-community-jaipur': 'https://nuroh.in/assets/images/interior-terrace-seating.jpg',
};

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, url: `https://blog.nuroh.in/blog/${post.slug}/`, type: 'article', images: [{ url: post.image }] },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt },
    alternates: { canonical: `https://blog.nuroh.in/blog/${post.slug}/` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const imgSrc = postImages[params.slug] || 'https://nuroh.in/assets/images/interior-grand-arches.jpg';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ ...post, author: post.author, image: post.image })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: 'https://blog.nuroh.in/' }, { name: 'Blog', url: 'https://blog.nuroh.in/blog/' }, { name: post.title, url: `https://blog.nuroh.in/blog/${post.slug}/` }])) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-warm-400 mb-8">
          <Link href="/" className="hover:text-terracotta">Home</Link>
          <span>/</span>
          <Link href="/blog/" className="hover:text-terracotta">Blog</Link>
          <span>/</span>
          <span className="text-warm-600 truncate">{post.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Link href={`/category/${post.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/`} className="text-xs font-semibold text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">{post.category}</Link>
            <span className="text-xs text-warm-400">{post.readingTime}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-coffee leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-warm-400">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => <span key={tag} className="text-xs text-warm-500 bg-warm-100 px-3 py-1 rounded-full">{tag}</span>)}
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-10 aspect-video">
          <img src={imgSrc} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-coffee to-coffee-light rounded-2xl text-center text-white">
          <h3 className="font-display text-2xl font-bold mb-3">Visit Nuroh Cafe</h3>
          <p className="text-warm-300 mb-5">4th Floor, Ashok Marg, C Scheme, Jaipur</p>
          <a href="https://nuroh.in" target="_blank" rel="noopener noreferrer" className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors">Visit Nuroh Cafe</a>
        </div>

        {/* Back */}
        <div className="mt-10 text-center">
          <Link href="/blog/" className="text-sm font-semibold text-terracotta hover:text-terracotta-dark">← Back to All Posts</Link>
        </div>
      </article>
    </>
  );
}
