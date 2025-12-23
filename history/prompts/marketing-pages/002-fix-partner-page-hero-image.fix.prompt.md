---
id: "002"
title: "Fix Partner Page Hero Image"
stage: "fix"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "marketing-pages"
branch: "main"
user: "muzamil"
command: "manual check"
labels: ["bugfix", "404"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "src/app/partner-with-us/page.tsx"
tests:
  - "manual verification"
---

# Prompt
The user reported that the main image on the /partner-with-us page was still not loading.

# Response
Identified that the background image URL for the PageHero component in `src/app/partner-with-us/page.tsx` was broken. Replaced it with a verified working Unsplash URL.
