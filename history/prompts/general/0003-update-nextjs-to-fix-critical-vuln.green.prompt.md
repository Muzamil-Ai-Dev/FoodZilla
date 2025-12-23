---
id: 3
title: Update Next.js to fix critical vulnerabilities
stage: green
date_iso: 2025-12-23
surface: agent
model: gemini-2.0-flash-exp
feature: none
branch: main
user: mmuzamil
command: npm install
labels: ["security", "nextjs", "fix"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - package.json
tests_yaml: |
  - npm install
  - npm audit
---

# Prompt
The user followed up on the vulnerability investigation.

# Response Summary
Updated `package.json` to bump `next` and `eslint-config-next` to `14.2.35`. Successfully cleared the critical vulnerabilities. Identified that the remaining high vulnerabilities require a major ESLint bump.

# Outcome
Critical security risks (Cache Poisoning, DoS) are resolved. High risks in dev-tools remain for user decision.
