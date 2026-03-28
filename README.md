# Nuroh Cafe Blog

Blog for Nuroh Cafe Jaipur — built with Next.js 14, Tailwind CSS, TypeScript.

## Live
- Blog: https://blog.nuroh.in
- Main site: https://nuroh.in

## Setup
```bash
npm install
npm run dev
```

## Deploy
```bash
npm run build
cd out && npx vercel --prod
```

## 30-Day SEO Automation

### Manual run:
```bash
ANTHROPIC_API_KEY=your_key npx tsx scripts/generate-daily-blogs.ts
```

### Automated (GitHub Actions):
Set these secrets in GitHub repo settings:
- `ANTHROPIC_API_KEY` — Your Anthropic API key
- `VERCEL_DEPLOY_HOOK_URL` — Vercel deploy hook URL (optional)

The action runs daily at 8:00 AM IST, generates 10 posts, commits them, and triggers a deploy.

### SEO Dashboard
Visit: https://blog.nuroh.in/seo-dashboard/

## Domain Setup
1. Vercel dashboard → Add domain: blog.nuroh.in
2. BigRock DNS → CNAME: blog → cname.vercel-dns.com
3. Submit sitemap: https://blog.nuroh.in/sitemap.xml to Google Search Console
