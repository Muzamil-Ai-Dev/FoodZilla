---
id: "004"
title: "Adjust Header Breakpoints for Laptops"
stage: "fix"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "foodzilla-core"
branch: "main"
user: "muzamil"
command: "manual check"
labels: ["ui", "responsive", "navigation"]
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
User reported that on a 16-inch screen, the hamburger menu was still showing instead of the direct navigation links. They expected the full menu to be visible (like Foodpanda).

# Response
Lowered the breakpoint for switching between hamburger and desktop menu from `xl` (1280px) to `lg` (1024px).
- **Hamburger:** Now `lg:hidden` (hidden on screens >= 1024px).
- **Desktop Nav:** Now `hidden lg:flex` (visible on screens >= 1024px).
This ensures laptops and larger tablets see the full navigation links.
