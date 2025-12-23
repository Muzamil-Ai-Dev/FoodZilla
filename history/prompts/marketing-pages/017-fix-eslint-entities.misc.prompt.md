---
id: 017
title: Fix ESLint unescaped entities in About page
stage: misc
date: 2025-12-23
surface: agent
model: gemini-2.0-flash-exp
feature: marketing-pages
branch: main
user: muzamil
command: none
labels: ["bugfix", "eslint", "nextjs"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/app/about/page.tsx
tests:
  - manual verification via CI
---

## Prompt

Failed to compile.
./src/app/about/page.tsx
264:29  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities

## Response snapshot

I will escape the apostrophes in the "Call to Action" section of the About page using `&apos;` to satisfy ESLint rules.

## Outcome

- ✅ Impact: Resolved build-blocking ESLint errors on the About page.
- 🧪 Tests: Will be verified by the next CI run.
- 📁 Files: Modified `src/app/about/page.tsx`.
- 🔁 Next prompts: Continue with page expansions.
- 🧠 Reflection: Next.js by default enforces strict linting for HTML entities in JSX. Always use `&apos;` or similar for apostrophes.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
