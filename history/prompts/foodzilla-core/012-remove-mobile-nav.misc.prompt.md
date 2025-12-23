---
id: 012
title: Remove mobile bottom navigation bar
stage: misc
date: 2025-12-23
surface: agent
model: gemini-2.0-flash-exp
feature: foodzilla-core
branch: main
user: muzamil
command: none
labels: ["ui", "navigation", "cleanup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - src/app/layout.tsx
  - src/components/layout/MobileNav.tsx
tests:
  - manual verification
---

## Prompt

ok issue resolved but when i open in mobile why i see option in buttom of mobile like home search order profile is this beacuse hamburger ? i think we dont need this option first tell me what you understood from my question then go for the changes

## Response snapshot

I will remove the `MobileNav` component usage from `src/app/layout.tsx` and delete the `src/components/layout/MobileNav.tsx` file, as requested by the user to remove the bottom navigation bar on mobile.

## Outcome

- ✅ Impact: The bottom navigation bar (Home, Search, Orders, Profile) is removed from the mobile view.
- 🧪 Tests: No automated tests.
- 📁 Files: Modified `src/app/layout.tsx`, deleted `src/components/layout/MobileNav.tsx`.
- 🔁 Next prompts: None.
- 🧠 Reflection: The bottom nav was part of the initial "app-like" design spec but the user prefers a cleaner web-like interface or just the hamburger menu.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
