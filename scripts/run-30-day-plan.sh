#!/bin/bash
# Nuroh Cafe Blog — Daily Blog Generator
# Run via cron or GitHub Actions at 8:00 AM IST daily

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "📅 $(date '+%Y-%m-%d %H:%M:%S') — Starting daily blog generation..."

# Check for API key
if [ -z "$ANTHROPIC_API_KEY" ]; then
  echo "❌ ANTHROPIC_API_KEY not set. Exiting."
  exit 1
fi

# Run the generator
npx tsx scripts/generate-daily-blogs.ts

# Rebuild the site
echo "🔨 Rebuilding blog..."
npm run build

# Deploy to Vercel (if deploy hook is set)
if [ -n "$VERCEL_DEPLOY_HOOK_URL" ]; then
  echo "🚀 Triggering Vercel deploy..."
  curl -s -X POST "$VERCEL_DEPLOY_HOOK_URL"
fi

echo "✅ $(date '+%Y-%m-%d %H:%M:%S') — Daily generation complete!"
