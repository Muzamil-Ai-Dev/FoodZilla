---
id: "003"
title: "Fix Header Responsiveness and Mobile Menu"
stage: "fix"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "foodzilla-core"
branch: "main"
user: "muzamil"
command: "manual check"
labels: ["bugfix", "ui", "responsive"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "src/components/layout/Header.tsx"
tests:
  - "manual verification"
---

# Prompt
User reported two issues:
1.  Header responsiveness gap: On some devices (tablets), neither hamburger nor desktop menu was visible.
2.  Mobile menu transparency: The background showed content underneath.

# Response
1.  **Responsiveness Fix:** Changed hamburger menu visibility from `lg:hidden` to `xl:hidden`. The desktop menu starts at `xl`, so this closes the gap (1024px-1280px) where no menu was shown.
2.  **Transparency Fix:** Updated the mobile menu container with `w-screen`, `h-dvh`, and explicit `bg-white` (and `overflow-y-auto`) to ensure full, opaque coverage of the viewport.
