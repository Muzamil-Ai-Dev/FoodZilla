---
id: "034-fix-broken-homepage-images-again"
title: "Fix Broken Homepage Location Images Again"
stage: "fix"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "marketing-pages"
branch: "main"
user: "unknown"
command: "replace"
labels: ["homepage", "bugfix", "images", "iteration-2"]
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
still two image the left one and the last in right not loading

## Response
Updated `src/app/page.tsx` again with new Unsplash image URLs for the 1st (Oxford Street) and 4th (King's Cross) items, as they were reported as still broken. Kept the middle two as they are working.
