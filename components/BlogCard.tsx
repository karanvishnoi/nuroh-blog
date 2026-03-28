import Link from 'next/link';

const categoryImages: Record<string, string> = {
  'Coffee & Culture': 'https://nuroh.in/assets/images/food/espresso.jpg',
  'Food & Brunch': 'https://nuroh.in/assets/images/food/food-platter.jpg',
  'Jaipur Guide': 'https://nuroh.in/assets/images/interior-warm-arches.jpg',
  'Events & Lifestyle': 'https://nuroh.in/assets/images/interior-night-terrace.jpg',
};

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

interface Props {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
}

export default function BlogCard({ title, slug, excerpt, category, date, readingTime }: Props) {
  const imgSrc = postImages[slug] || categoryImages[category] || 'https://nuroh.in/assets/images/interior-grand-arches.jpg';

  return (
    <Link href={`/blog/${slug}/`} className="group block bg-white rounded-2xl overflow-hidden border border-warm-200 hover:border-terracotta/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-52 overflow-hidden relative">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-full">{category}</span>
          <span className="text-xs text-warm-400">{readingTime}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-coffee leading-snug group-hover:text-terracotta transition-colors mb-2">{title}</h3>
        <p className="text-sm text-warm-500 leading-relaxed line-clamp-2">{excerpt}</p>
        <div className="mt-4 pt-3 border-t border-warm-100 flex items-center justify-between">
          <span className="text-xs text-warm-400">{new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          <span className="text-xs font-semibold text-terracotta group-hover:translate-x-1 transition-transform">Read more →</span>
        </div>
      </div>
    </Link>
  );
}
