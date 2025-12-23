---
id: 021
title: Expand Partner with Us page content
stage: misc
date: 2025-12-23
surface: agent
model: gemini-2.0-flash-exp
feature: marketing-pages
branch: main
user: muzamil
command: none
labels: ["content", "ui", "partners", "marketing"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/app/partner-with-us/page.tsx
tests:
  - manual verification
---

## Prompt

now patner

## Response snapshot

I will expand the `Partner with Us` page by adding a detailed 5-step "Journey to Success" timeline, a "Smart Tools" section highlighting the Partner Portal technology, a comprehensive FAQ section with interactive hover states, and a much more powerful Call to Action at the bottom.

## Outcome

- ✅ Impact: The Partner page now provides a clear onboarding roadmap and technical reassurance for potential restaurant owners, significantly increasing its professional appeal.
- 🧪 Tests: No automated tests.
- 📁 Files: Modified `src/app/partner-with-us/page.tsx`.
- 🔁 Next prompts: Continue with Careers or Contact.
- 🧠 Reflection: For B2B pages (partners), showing the "How" (steps) and the "Tools" (tech) is just as important as the "Why" (benefits).

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
