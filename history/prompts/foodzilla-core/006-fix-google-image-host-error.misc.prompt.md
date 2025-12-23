---
id: 006
title: Fix Google Image host error in Auth forms
stage: misc
date: 2025-12-23
surface: agent
model: gemini-2.0-flash-exp
feature: foodzilla-core
branch: main
user: muzamil
command: none
labels: ["bugfix", "images", "nextjs", "auth"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - next.config.mjs
tests:
  - manual verification
---

## Prompt

hello ther is error coming in login and sign up  Unhandled Runtime Error
Error: Invalid src prop (https://www.google.com/favicon.ico) on `next/image`, hostname "www.google.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host

Call Stack
defaultLoader
webpack:/src/shared/lib/image-loader.ts
loader
webpack:/src/shared/lib/get-img-props.ts
Array.map
<anonymous>
map
webpack:/src/shared/lib/get-img-props.ts
generateImgAttrs
webpack:/src/shared/lib/get-img-props.ts

## Response snapshot

I will update `next.config.mjs` to include `www.google.com` in the `remotePatterns` configuration, allowing images from that host to be loaded.

## Outcome

- ✅ Impact: Resolved runtime error on login and signup pages by configuring allowed image host.
- 🧪 Tests: No automated tests run, change is configuration-level.
- 📁 Files: Modified `next.config.mjs`.
- 🔁 Next prompts: None.
- 🧠 Reflection: The error was caused by using a direct URL to Google's favicon in `LoginForm.tsx` and `RegisterForm.tsx` without configuring the host in Next.js.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
