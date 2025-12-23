---
id: 011
title: Further performance optimization - lighter video and thumbnails
stage: misc
date: 2025-12-23
surface: agent
model: gemini-2.0-flash-exp
feature: foodzilla-core
branch: main
user: muzamil
command: none
labels: ["performance", "video", "images", "optimization"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/lib/image-utils.ts
  - src/lib/mock-data.ts
  - src/components/features/home/Hero.tsx
tests:
  - manual verification
---

## Prompt

still the same things happend

## Response snapshot

I will replace the 2.5K UHD background video with a 720p HD version and ensure all thumbnail images in `MOCK_DATA` request the 'small' (400w) variant.

## Outcome

- ✅ Impact: Drastically reduced bandwidth usage for the hero video (likely ~50MB -> ~5MB) and thumbnails.
- 🧪 Tests: No automated tests.
- 📁 Files: Modified `src/lib/mock-data.ts` (verified), `src/components/features/home/Hero.tsx`.
- 🔁 Next prompts: None.
- 🧠 Reflection: High-resolution video backgrounds are a primary cause of mobile/initial load lag. Downgrading to 720p is a standard optimization.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
