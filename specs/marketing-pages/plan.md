# Plan: Marketing & Information Pages

## 1. Architecture

### Directory Structure
```
src/app/
  (marketing)/      # Route group for marketing pages (optional, to share layout if needed)
    about/
      page.tsx
    newsroom/
      page.tsx
    partner-with-us/
      page.tsx
    zilla-ads/
      page.tsx
    contact/
      page.tsx
    careers/
      page.tsx
```

### Shared Components (`src/components/marketing/`)
- `PageHero.tsx`: Reusable hero section with title and background.
- `ContentSection.tsx`: Image + Text split section (left/right variant).
- `FeatureGrid.tsx`: Grid of icons/benefits.
- `JobCard.tsx`: For Careers page.
- `ArticleCard.tsx`: For Newsroom page.

### Data
- Create `src/lib/marketing-data.ts` to hold mock data for:
  - Team members
  - News articles
  - Partner testimonials
  - Job listings

## 2. Implementation Steps

### Phase 1: Infrastructure & Data
1.  Create `src/components/marketing` directory.
2.  Create `src/lib/marketing-data.ts` with mock content.
3.  Update `src/components/layout/Footer.tsx` with new links.

### Phase 2: Page Implementation
1.  **About Page**: Implement `PageHero`, `ContentSection`, `TeamGrid`.
2.  **Newsroom**: Implement `ArticleCard`, Filter logic (client-side).
3.  **Partners**: Implement Benefits grid, Testimonials.
4.  **Zilla Ads**: Visual showcase of ad formats.
5.  **Contact**: Form layout (controlled inputs, mock submit) and Map placeholder.
6.  **Careers**: Job listing with department grouping.

### Phase 3: Polish
1.  Add Framer Motion animations (fade-in on scroll).
2.  Verify responsive layouts.

## 3. Dependencies
- `lucide-react` for icons.
- `framer-motion` for transitions.
- Existing `Button` and `Container` components.
