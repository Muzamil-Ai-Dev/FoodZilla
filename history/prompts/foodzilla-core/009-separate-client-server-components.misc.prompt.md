---
id: 009
title: Separate client and server components for restaurant page
stage: misc
date: 2025-12-23
surface: agent
model: gemini-2.0-flash-exp
feature: foodzilla-core
branch: main
user: muzamil
command: none
labels: ["refactor", "nextjs", "deployment", "static-export"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/app/restaurant/[slug]/page.tsx
  - src/app/restaurant/[slug]/RestaurantDetailClient.tsx
tests:
  - manual verification via CI
---

## Prompt

Run npx --no-install next build
> Build error occurred
Error: Page "/restaurant/[slug]/page" cannot use both "use client" and export function "generateStaticParams()".

## Response snapshot

I will separate the client-side logic into `RestaurantDetailClient.tsx` and keep `page.tsx` as a Server Component exporting `generateStaticParams`.

## Outcome

- ✅ Impact: Resolved Next.js build error where `generateStaticParams` (server-side) conflicted with `"use client"`.
- 🧪 Tests: Will be verified by the next CI run.
- 📁 Files: Modified `src/app/restaurant/[slug]/page.tsx`, created `src/app/restaurant/[slug]/RestaurantDetailClient.tsx`.
- 🔁 Next prompts: None.
- 🧠 Reflection: Next.js App Router enforces strict boundary between server-side build logic (like `generateStaticParams`) and client-side components.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
