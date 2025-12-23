---
id: 4
title: Analyze glob dependency tree
stage: general
date_iso: 2025-12-23
surface: agent
model: gemini-2.0-flash-exp
feature: none
branch: main
user: mmuzamil
command: npm list glob
labels: ["security", "dependency-analysis"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - none
tests_yaml: |
  - npm list glob
---

# Prompt
The user followed up on the remaining vulnerabilities.

# Response Summary
Identified that `glob@10.3.10` is being pulled by `@next/eslint-plugin-next@14.2.35`. Proposed using NPM `overrides` to force a secure version of `glob` without a major upgrade of the linting suite.

# Outcome
Root cause of the remaining high vulnerabilities is pinpointed. Proposed a surgical fix via `overrides`.
