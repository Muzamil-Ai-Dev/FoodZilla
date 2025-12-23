---
id: "036-switch-to-pexels-images"
title: "Switch Broken Homepage Images to Pexels"
stage: "fix"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "marketing-pages"
branch: "main"
user: "unknown"
command: "replace"
labels: ["homepage", "bugfix", "images", "pexels", "iteration-4"]
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
still not shown why why

## Response
Switched the image sources for Oxford Street and King's Cross from Unsplash to **Pexels**. This avoids potential issues with specific Unsplash IDs or caching. Pexels is already configured in `next.config.mjs` as a trusted domain.
