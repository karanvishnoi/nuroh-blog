import Anthropic from '@anthropic-ai/sdk';
import * as fs from 'fs';
import * as path from 'path';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const topicBank: Record<string, string[]> = {
  '1-3': ['Jaipur cafe culture', 'best cafes in Jaipur 2026', 'Pink City coffee scene', 'cafe hopping Jaipur guide', 'why cafes are booming in Jaipur'],
  '4-6': ['Nuroh Cafe interior design', 'Nuroh menu highlights', 'Nuroh signature drinks', 'behind the scenes at Nuroh', 'Nuroh Cafe story'],
  '7-9': ['work from cafe Jaipur', 'study cafes Jaipur', 'freelancer spots Jaipur', 'cafes with wifi Jaipur', 'productive cafe Jaipur'],
  '10-12': ['Jaipur food scene', 'brunch spots Jaipur', 'breakfast cafes Jaipur', 'cafe food Jaipur', 'Mediterranean food Jaipur'],
  '13-15': ['pour over coffee guide', 'cold brew at Nuroh', 'espresso culture Jaipur', 'coffee education', 'specialty beans Jaipur'],
  '16-18': ['cafe events Jaipur', 'open mic nights Jaipur', 'art shows cafes Jaipur', 'weekend plans Jaipur', 'live music cafes'],
  '19-21': ['Jaipur travel guide cafes', 'tourist cafe Jaipur', 'hidden gems Jaipur', 'C Scheme area guide', 'local cafe guide Jaipur'],
  '22-24': ['cafe vs restaurant Jaipur', 'why cafes trending Rajasthan', 'cafe culture India', 'modern cafes Jaipur', 'aesthetic cafes Jaipur'],
  '25-27': ['behind scenes Nuroh', 'sustainability cafes', 'coffee sourcing Nuroh', 'local ingredients Jaipur', 'eco friendly cafe'],
  '28-30': ['best of Jaipur compilations', 'seasonal cafe content', 'festive cafe Jaipur', 'year review Jaipur cafes', 'top picks Nuroh'],
};

function getTopicsForDay(dayNumber: number): string[] {
  if (dayNumber <= 3) return topicBank['1-3'];
  if (dayNumber <= 6) return topicBank['4-6'];
  if (dayNumber <= 9) return topicBank['7-9'];
  if (dayNumber <= 12) return topicBank['10-12'];
  if (dayNumber <= 15) return topicBank['13-15'];
  if (dayNumber <= 18) return topicBank['16-18'];
  if (dayNumber <= 21) return topicBank['19-21'];
  if (dayNumber <= 24) return topicBank['22-24'];
  if (dayNumber <= 27) return topicBank['25-27'];
  return topicBank['28-30'];
}

async function generateBlogPost(topic: string, index: number): Promise<string> {
  const prompt = `Write a complete blog post for Nuroh Cafe's blog (blog.nuroh.in). Nuroh Cafe is located at 4th Floor, Ashok Marg, C Scheme, Jaipur, Rajasthan 302001.

Topic: "${topic}"

Requirements:
- SEO-optimized title naturally containing "Jaipur" or "Nuroh"
- Meta description under 155 characters with primary keyword
- 600-800 words of engaging, useful content
- 3-4 H2 subheadings
- Warm, friendly tone (not robotic)
- Naturally mention Nuroh Cafe, Jaipur, C Scheme
- End with CTA: "Visit Nuroh Cafe at 4th Floor, Ashok Marg, C Scheme, Jaipur"
- 5 SEO tags

Return ONLY valid JSON in this exact format (no markdown, no explanation):
{
  "title": "...",
  "slug": "...",
  "excerpt": "...",
  "content": "HTML content with <h2>, <p>, <ul>, <li>, <strong>, <blockquote> tags",
  "category": "one of: Coffee & Culture, Food & Brunch, Jaipur Guide, Events & Lifestyle",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "readingTime": "X min read"
}`;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-5-20250514',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '';
  return text;
}

async function main() {
  const startDate = new Date('2026-03-29');
  const logPath = path.join(__dirname, '..', 'logs', 'generation-log.txt');

  // Determine which day we're on
  const today = new Date();
  const diffDays = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const dayNumber = Math.min(Math.max(diffDays, 1), 30);

  const dateStr = today.toISOString().split('T')[0];
  const outputDir = path.join(__dirname, '..', 'content', 'blogs', dateStr);

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const topics = getTopicsForDay(dayNumber);
  const log: string[] = [`\n=== Day ${dayNumber} | ${dateStr} ===\n`];

  console.log(`\n🚀 Generating 10 blog posts for Day ${dayNumber} (${dateStr})...\n`);

  let successCount = 0;

  for (let i = 0; i < 10; i++) {
    const topic = topics[i % topics.length] + ` — variation ${i + 1}`;
    console.log(`  📝 [${i + 1}/10] Generating: ${topic}...`);

    try {
      const result = await generateBlogPost(topic, i);
      const parsed = JSON.parse(result);

      const mdxContent = `---
title: "${parsed.title.replace(/"/g, '\\"')}"
slug: "${parsed.slug}"
excerpt: "${parsed.excerpt.replace(/"/g, '\\"')}"
category: "${parsed.category}"
tags: ${JSON.stringify(parsed.tags)}
date: "${dateStr}"
author: "Nuroh Team"
readingTime: "${parsed.readingTime}"
image: "https://nuroh.in/assets/images/interior-grand-arches.jpg"
---

${parsed.content}`;

      const filePath = path.join(outputDir, `${parsed.slug}.mdx`);
      fs.writeFileSync(filePath, mdxContent);

      log.push(`✅ ${parsed.title} → ${filePath}`);
      successCount++;
      console.log(`  ✅ Done: ${parsed.title}`);
    } catch (error: unknown) {
      const errMsg = error instanceof Error ? error.message : String(error);
      log.push(`❌ Failed: ${topic} — ${errMsg}`);
      console.log(`  ❌ Failed: ${topic}`);
    }

    // Rate limiting — wait 2 seconds between requests
    if (i < 9) await new Promise(r => setTimeout(r, 2000));
  }

  log.push(`\nTotal: ${successCount}/10 posts generated\n`);
  console.log(`\n✨ Done! ${successCount}/10 posts generated in ${outputDir}\n`);

  // Append to log file
  fs.appendFileSync(logPath, log.join('\n'));
}

main().catch(console.error);
