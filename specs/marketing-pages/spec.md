# Feature: Marketing & Information Pages

## 1. Overview
Implement a comprehensive set of static and semi-dynamic marketing pages to support the FoodZilla platform's brand, recruitment, and partnership goals. These pages will provide information about the company, press releases, partnership opportunities, and career openings.

## 2. Scope
- **Pages**:
  - `About` (/about)
  - `Newsroom` (/newsroom)
  - `Partners` (/partner-with-us)
  - `Zilla Ads` (/zilla-ads)
  - `Contact` (/contact)
  - `Careers` (/careers)
- **Shared Components**:
  - Reusable Page Header/Hero
  - Card layouts for lists (News, Jobs, Partners)
  - Content sections with image/text splits

## 3. Requirements

### 3.1. About Page (/about)
- **Hero**: Inspiring title and background image.
- **Story**: "Who we are" section with text and image.
- **Mission & Vision**: Highlights of core values.
- **Team**: Grid of key team members (mock data).

### 3.2. Newsroom Page (/newsroom)
- **List View**: Grid of article cards (Title, Date, Summary, Image).
- **Filters**: Simple category filter (All, Press, Product, Community).
- **Pagination**: Mock "Load More" button.

### 3.3. Partners Page (/partner-with-us)
- **Target Audience**: Restaurants and delivery partners.
- **Benefits**: Grid of icons/text explaining why to partner.
- **Testimonials**: Quotes from existing partners.
- **CTA**: "Become a Partner" form or button.

### 3.4. Zilla Ads New Page (/zilla-ads)
- **Overview**: Explanation of advertising solutions.
- **Ad Formats**: Visual examples of ad placements (Banner, Sponsored Listing).
- **CTA**: "Start Advertising".

### 3.5. Contact Page (/contact)
- **Form**: Name, Email, Subject, Message.
- **Info**: Physical address, Email, Phone.
- **Map**: Visual placeholder for office location.

### 3.6. Careers Page (/careers)
- **Culture**: "Why work with us" section.
- **Open Roles**: List of jobs grouped by department (Engineering, Product, Operations).
- **Application**: Link to mock application form or modal.

## 4. Technical Details
- **Routing**: Next.js App Router (`app/about/page.tsx`, etc.).
- **Styling**: Tailwind CSS, consistent with main site theme.
- **Animation**: Framer Motion for fade-ins and smooth transitions.
- **Data**: Mock data files in `src/lib/mock-data.ts` or local constants.

## 5. Acceptance Criteria
- [ ] All pages are accessible via URL.
- [ ] Responsive design works on mobile and desktop.
- [ ] Navigation links in Footer are updated to point to these new pages.
- [ ] Placeholder images are used effectively.
