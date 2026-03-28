'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-warm-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5">
          <img src="https://nuroh.in/assets/logo/nuroh-final.png" alt="Nuroh Cafe" className="h-7 w-auto" />
          <span className="text-[10px] font-bold text-warm-400 tracking-widest mt-1">BLOG</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-warm-600 hover:text-terracotta transition-colors">Home</Link>
          <Link href="/blog/" className="text-sm font-medium text-warm-600 hover:text-terracotta transition-colors">All Posts</Link>
          <Link href="/about/" className="text-sm font-medium text-warm-600 hover:text-terracotta transition-colors">About</Link>
          <a href="https://nuroh.in" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-terracotta hover:bg-terracotta-dark px-4 py-2 rounded-lg transition-colors">Visit Cafe</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-coffee" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M18 6L6 18M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} /></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-cream border-t border-warm-200 px-4 pb-4">
          <Link href="/" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-warm-700 border-b border-warm-100">Home</Link>
          <Link href="/blog/" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-warm-700 border-b border-warm-100">All Posts</Link>
          <Link href="/about/" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-warm-700 border-b border-warm-100">About</Link>
          <a href="https://nuroh.in" target="_blank" rel="noopener noreferrer" className="block mt-3 text-center text-sm font-semibold text-white bg-terracotta py-2.5 rounded-lg">Visit Cafe</a>
        </div>
      )}
    </header>
  );
}
