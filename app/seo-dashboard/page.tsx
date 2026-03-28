import { seoKeywords } from '@/data/seo-keywords';
import { seo30DayPlan } from '@/data/seo-30-day-plan';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function SEODashboard() {
  const posts = getAllPosts();
  const totalTarget = 300;
  const published = posts.length;
  const progress = Math.round((published / totalTarget) * 100);

  const today = new Date().toISOString().split('T')[0];
  const todayPlan = seo30DayPlan.find(d => d.date === today) || seo30DayPlan[0];

  const primaryKw = seoKeywords.filter(k => k.category === 'primary');
  const secondaryKw = seoKeywords.filter(k => k.category === 'secondary');
  const longTailKw = seoKeywords.filter(k => k.category === 'long-tail');
  const brandKw = seoKeywords.filter(k => k.category === 'brand');
  const trendingKw = seoKeywords.filter(k => k.category === 'trending');

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-coffee mb-2">SEO Dashboard</h1>
      <p className="text-warm-500 mb-8">30-Day SEO Automation Tracker for Nuroh Cafe Blog</p>

      {/* Progress */}
      <div className="bg-white rounded-2xl border border-warm-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-xl font-bold">Content Progress</h2>
          <span className="text-2xl font-bold text-terracotta">{published}/{totalTarget}</span>
        </div>
        <div className="h-4 bg-warm-100 rounded-full overflow-hidden">
          <div className="h-full bg-terracotta rounded-full transition-all" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>
        <p className="text-sm text-warm-400 mt-2">{progress}% of 30-day target</p>
      </div>

      {/* Today's Plan */}
      <div className="bg-white rounded-2xl border border-warm-200 p-6 mb-6">
        <h2 className="font-display text-xl font-bold mb-4">Today&apos;s Plan — Day {todayPlan.dayNumber}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-warm-500 uppercase tracking-wider mb-2">SEO Task</h3>
            <p className="text-coffee font-medium">{todayPlan.seoTask}</p>
            <h3 className="text-sm font-semibold text-warm-500 uppercase tracking-wider mt-4 mb-2">Strategy</h3>
            <p className="text-coffee">{todayPlan.trendingStrategy}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-warm-500 uppercase tracking-wider mb-2">Target Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {todayPlan.keywordsToTarget.map(kw => (
                <span key={kw} className="text-xs bg-terracotta/10 text-terracotta px-3 py-1 rounded-full font-medium">{kw}</span>
              ))}
            </div>
            <h3 className="text-sm font-semibold text-warm-500 uppercase tracking-wider mt-4 mb-2">Blog Topics ({todayPlan.blogTopics.length})</h3>
            <ul className="text-sm text-warm-600 space-y-1">
              {todayPlan.blogTopics.slice(0, 5).map((t, i) => (
                <li key={i}>• {t}</li>
              ))}
              {todayPlan.blogTopics.length > 5 && <li className="text-warm-400">+ {todayPlan.blogTopics.length - 5} more</li>}
            </ul>
          </div>
        </div>
      </div>

      {/* Keywords */}
      <div className="bg-white rounded-2xl border border-warm-200 p-6 mb-6">
        <h2 className="font-display text-xl font-bold mb-4">SEO Keywords ({seoKeywords.length})</h2>
        {[
          { title: 'Primary', list: primaryKw, color: 'bg-red-50 text-red-700' },
          { title: 'Secondary', list: secondaryKw, color: 'bg-blue-50 text-blue-700' },
          { title: 'Long-Tail', list: longTailKw, color: 'bg-green-50 text-green-700' },
          { title: 'Brand', list: brandKw, color: 'bg-purple-50 text-purple-700' },
          { title: 'Trending', list: trendingKw, color: 'bg-yellow-50 text-yellow-700' },
        ].map(group => (
          <div key={group.title} className="mb-4">
            <h3 className="text-sm font-semibold text-warm-600 mb-2">{group.title} ({group.list.length})</h3>
            <div className="flex flex-wrap gap-2">
              {group.list.map(kw => (
                <span key={kw.keyword} className={`text-xs px-3 py-1 rounded-full font-medium ${group.color}`}>
                  {kw.keyword} <span className="opacity-60">({kw.searchVolume})</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-2xl border border-warm-200 p-6">
        <h2 className="font-display text-xl font-bold mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-3">
          <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-sm bg-warm-100 hover:bg-warm-200 text-coffee px-4 py-2 rounded-lg transition-colors">Google Search Console</a>
          <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-sm bg-warm-100 hover:bg-warm-200 text-coffee px-4 py-2 rounded-lg transition-colors">Google Analytics</a>
          <a href="https://nuroh.in" target="_blank" rel="noopener noreferrer" className="text-sm bg-warm-100 hover:bg-warm-200 text-coffee px-4 py-2 rounded-lg transition-colors">nuroh.in</a>
          <a href="https://blog.nuroh.in/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-sm bg-warm-100 hover:bg-warm-200 text-coffee px-4 py-2 rounded-lg transition-colors">Sitemap</a>
          <Link href="/feed.xml/" className="text-sm bg-warm-100 hover:bg-warm-200 text-coffee px-4 py-2 rounded-lg transition-colors">RSS Feed</Link>
        </div>
      </div>
    </section>
  );
}
