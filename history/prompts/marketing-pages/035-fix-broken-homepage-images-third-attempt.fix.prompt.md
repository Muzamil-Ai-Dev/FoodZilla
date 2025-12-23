---
id: "035-fix-broken-homepage-images-third-attempt"
title: "Fix Broken Homepage Location Images (Third Attempt)"
stage: "fix"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "marketing-pages"
branch: "main"
user: "unknown"
command: "replace"
labels: ["homepage", "bugfix", "images", "iteration-3"]
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
king cross station and oxford image still not coming

## Response
Updated `src/app/page.tsx` again with fresh Unsplash image URLs for Oxford Street and King's Cross. Kept the middle two as they are working.
