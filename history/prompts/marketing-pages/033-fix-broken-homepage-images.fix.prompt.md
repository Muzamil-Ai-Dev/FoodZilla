---
id: "033-fix-broken-homepage-images"
title: "Fix Broken Homepage Location Images"
stage: "fix"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "marketing-pages"
branch: "main"
user: "unknown"
command: "replace"
labels: ["homepage", "bugfix", "images"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "src/app/page.tsx"
tests:
  - "none"
---

## Prompt
the image on home page you use in location not coming except one baker street

## Response
Updated `src/app/page.tsx` with new, reliable Unsplash image URLs for Oxford Street, Piccadilly Circus, and King's Cross. Preserved the working Baker Street image.
