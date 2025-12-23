---
id: "032-update-homepage-locations"
title: "Update Homepage Locations to Match Modal"
stage: "green"
date: "2025-12-23"
surface: "agent"
model: "gemini-2.0-flash-exp"
feature: "marketing-pages"
branch: "main"
user: "unknown"
command: "replace"
labels: ["homepage", "locations", "ui-update"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "src/app/page.tsx"
tests:
  - "npm run lint"
---

## Prompt
Find us in these cities and many more! here in home page we cover the location we mentioned in loction bar check location bar and then apply this location with their location picture but it should be ralated with the name like if Oxford Street, London then image also of it

## Response
Updated `src/app/page.tsx` to replace the static list of cities with the locations found in `LocationModal.tsx` (Oxford Street, Baker Street, Piccadilly Circus, King's Cross). Added relevant Unsplash images for each location and updated the UI to display them as image cards with overlay text, replacing the previous icon-based grid.
