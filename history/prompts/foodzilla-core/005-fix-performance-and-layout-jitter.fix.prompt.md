---
id: "005"
title: "Fix Performance and Layout Jitter"
stage: "fix"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "foodzilla-core"
branch: "main"
user: "muzamil"
command: "manual check"
labels: ["performance", "ui", "optimization"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "src/components/features/auth/LoginForm.tsx"
  - "src/components/features/auth/RegisterForm.tsx"
  - "src/components/layout/Header.tsx"
tests:
  - "npm run lint"
---

# Prompt
User reported two issues:
1.  **Slow image loading:** "images takes time to load".
2.  **Responsive jitter:** "when i try to f12 to see it in different device its also take 2 sec to make it responsive".

# Response
1.  **Image Optimization:**
    *   Replaced `<img>` tags with Next.js `<Image>` component in `LoginForm.tsx`, `RegisterForm.tsx`, and `Header.tsx` to leverage lazy loading and optimization.
    *   (Note: `Hero.tsx` and `PageHero.tsx` already use `<Image>` with priority, so the slow loading there is likely due to the high-res video or network speed, but fixing the other images helps overall bandwidth).

2.  **Responsive Fixes:**
    *   Reduced `Header` transition duration from `500ms` to `200ms` to make resize adjustments feel instant.
    *   Added `min-width` to the Auth container in `Header` to prevent layout shifts when the `mounted` state (hydration) resolves.
    *   Verified and fixed linting errors introduced during refactoring.
