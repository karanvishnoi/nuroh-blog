import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-6xl font-bold text-coffee mb-4">404</h1>
      <p className="text-xl text-warm-500 mb-8">This page doesn't exist — but our coffee does.</p>
      <Link href="/" className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors">Back to Home</Link>
    </section>
  );
}
