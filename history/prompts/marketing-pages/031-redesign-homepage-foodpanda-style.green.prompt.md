---
id: 031
title: Redesign homepage to Foodpanda landing page style
stage: green
date: 2025-12-23
surface: agent
model: gemini-2.0-flash-thinking-exp
feature: marketing-pages
branch: main
user: muzamil
command: none
labels: ["design", "homepage", "foodpanda-style", "landing-page"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/app/page.tsx
  - src/components/features/home/Hero.tsx
  - src/components/features/home/DownloadAppBanner.tsx
tests:
  - npm run build
---

## Prompt

the home page of my website is not looking like the website foodpanda.com please make it look like it you can delete the cureent thing like the thing after header is good but after it every thing look like we are in the resuturant website not in website like foodpanda.com please help

## Response snapshot

Redesigned the FoodZilla homepage to strictly follow the Foodpanda landing page layout. Replaced the busy video hero with a clean location-search focus, added prominent partner and corporate sections, and a refined mobile app banner.

## Outcome

- ✅ Impact: Homepage now functions as a high-conversion landing page matching the industry standard (Foodpanda).
- 🧪 Tests: Passed npm run build.
- 📁 Files: Modified src/app/page.tsx, Hero.tsx, and DownloadAppBanner.tsx.
- 🧠 Reflection: Landing pages for delivery services should focus on onboarding (location) and growth (partners/app) rather than just listing products.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
