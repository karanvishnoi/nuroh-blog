'use client';
import Link from 'next/link';

interface Props {
  categories: string[];
  active?: string;
}

export default function CategoryFilter({ categories, active }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/blog/" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!active ? 'bg-coffee text-white' : 'bg-white text-warm-600 border border-warm-200 hover:border-terracotta/30'}`}>
        All
      </Link>
      {categories.map(cat => (
        <Link key={cat} href={`/category/${cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? 'bg-coffee text-white' : 'bg-white text-warm-600 border border-warm-200 hover:border-terracotta/30'}`}>
          {cat}
        </Link>
      ))}
    </div>
  );
}
