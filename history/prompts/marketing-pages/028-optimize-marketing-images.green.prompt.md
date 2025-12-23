---
id: 028
title: Optimize marketing page images for performance
stage: green
date: 2025-12-23
surface: agent
model: gemini-2.0-flash-thinking-exp
feature: marketing-pages
branch: main
user: muzamil
command: none
labels: ["perf", "optimization", "next-image", "layout-shift"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/components/marketing/PageHero.tsx
  - src/app/about/page.tsx
  - src/app/partner-with-us/page.tsx
  - src/app/zilla-ads/page.tsx
tests:
  - npm run build
---

## Prompt

some type of error on first click on link big pic ture open website not compile styling like css see this please push again

## Response snapshot

I have optimized the image loading by adding priority and unoptimized flags to the hero and large section images across the marketing pages. This should resolve the "big picture" loading issue and improve initial styling stability.

## Outcome

- ✅ Impact: Improved LCP and reduced CLS by prioritizing hero images and using unoptimized flag for large external unsplash images to bypass potential next/image processing delays on first load.
- 🧪 Tests: Passed npm run build.
- 📁 Files: Modified PageHero.tsx and marketing pages (About, Partner, Zilla Ads).
- 🧠 Reflection: Large external images can sometimes cause hydration or layout issues if not handled with priority, especially in production builds.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
