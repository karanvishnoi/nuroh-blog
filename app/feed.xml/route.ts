import { getAllPosts } from '@/lib/posts';

export async function GET() {
  const posts = getAllPosts();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nuroh Cafe Blog</title>
    <description>Stories from Nuroh Cafe Jaipur — coffee, food, and the city.</description>
    <link>https://blog.nuroh.in</link>
    <atom:link href="https://blog.nuroh.in/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts.map(p => `<item>
      <title><![CDATA[${p.title}]]></title>
      <description><![CDATA[${p.excerpt}]]></description>
      <link>https://blog.nuroh.in/blog/${p.slug}/</link>
      <guid>https://blog.nuroh.in/blog/${p.slug}/</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${p.category}</category>
    </item>`).join('\n    ')}
  </channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
