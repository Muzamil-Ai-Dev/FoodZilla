---
id: "037-fix-oxford-street-image"
title: "Fix Oxford Street Image"
stage: "fix"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "marketing-pages"
branch: "main"
user: "unknown"
command: "replace"
labels: ["homepage", "bugfix", "images", "iteration-5"]
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
now the only one oxford not shwon

## Response
Replaced the **Oxford Street** image with a different **Pexels** image (`pexels-photo-2225389`). The previous Pexels image was also reported as failing.
