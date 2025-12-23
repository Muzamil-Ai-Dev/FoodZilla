---
id: "001"
title: "Fix Broken Links and Images"
stage: "fix"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "foodzilla-core"
branch: "main"
user: "muzamil"
command: "npm run dev"
labels: ["bugfix", "lint", "404"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "src/components/layout/Header.tsx"
  - "src/app/about/page.tsx"
  - "src/app/contact/page.tsx"
  - ".eslintrc.json"
  - "src/app/(auth)/login/page.tsx"
  - "src/app/careers/page.tsx"
  - "src/app/not-found.tsx"
  - "src/app/partner-with-us/page.tsx"
  - "src/app/search/page.tsx"
  - "src/components/features/auth/RegisterForm.tsx"
  - "src/components/features/home/CategoryGrid.tsx"
  - "src/components/features/home/DownloadAppBanner.tsx"
  - "src/components/features/home/Hero.tsx"
tests:
  - "npm run lint"
---

# Prompt
(User provided logs showing 404 errors for images and routes /partners and /zillaads)

# Response
Analyzed logs to identify broken Unsplash image URLs and incorrect route paths.
1.  **Fixed Links:** Updated `Header.tsx` to point `/partners` to `/partner-with-us` and `/zillaads` to `/zilla-ads`.
2.  **Fixed Images:** Replaced broken Unsplash URLs in `about/page.tsx` and `contact/page.tsx` with valid ones.
3.  **Fixed Linting:** Created `.eslintrc.json` and fixed `react/no-unescaped-entities` errors across multiple files to ensure `npm run lint` passes.
