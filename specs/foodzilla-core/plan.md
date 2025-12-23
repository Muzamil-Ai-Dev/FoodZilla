# Implementation Plan: FoodZilla Core & Foundation

**Branch**: `001-foodzilla-core` | **Date**: 2025-12-21 | **Spec**: [specs/foodzilla-core/spec.md](specs/foodzilla-core/spec.md)

## Summary
Establish the production-ready foundation for FoodZilla. This includes scaffolding a Next.js 14 App Router project, configuring Tailwind CSS for a custom design system, setting up Zustand for global state management (UI & Mock Auth), and implementing the core layout (Sticky Header, Footer, Bottom Tab Bar) and the video-hero Landing Page.

## Technical Context

**Language/Version**: TypeScript / Node.js 18+  
**Primary Dependencies**: Next.js 14 (App Router), Tailwind CSS, Radix UI (Primitives), Framer Motion, Zustand, Lucide React  
**Storage**: LocalStorage (via Zustand persist middleware)  
**Testing**: Vitest + React Testing Library (for unit/component tests)  
**Target Platform**: Web (Mobile-first responsive)  
**Performance Goals**: < 1s LCP, 60fps animations, 100/100 A11y score  
**Constraints**: strictly no copyrighted assets; use Pexels/Unsplash placeholders.  
**Scale/Scope**: Initial foundation with ~5 core routes and 10+ reusable UI components.

## Constitution Check

- [x] **Mobile-First**: Tailwind breakpoint strategy starting from `base` (mobile).
- [x] **Visual Fidelity**: Custom Tailwind config for rounded-xl cards and brand colors.
- [x] **Interactivity**: Framer Motion `AnimatePresence` for Cart Drawer and Page transitions.
- [x] **A11y First**: Leverage Radix UI primitives for accessible focus management and keyboard navigation.
- [x] **SDD**: Plan created before implementation; tasks will follow.
- [x] **Component Modularity**: UI primitives in `components/ui` and feature blocks in `components/features`.
- [x] **Type Safety**: Interfaces for `User`, `Category`, `Restaurant`, and `Location` models.

## Project Structure

```text
app/
├── (auth)/              # Login and Register routes
│   ├── login/
│   └── register/
├── (dashboard)/         # Protected user account routes
│   └── account/
├── search/              # Dedicated search results page
├── page.tsx             # Landing Page (Hero + Categories + Featured)
└── layout.tsx           # Root layout with Header, Footer, and Providers
components/
├── ui/                  # Accessible primitives (Radix-based Button, Input, Modal)
├── layout/              # Shared layout parts (Header, Footer, MobileNav)
└── features/            # Core feature components
    ├── auth/            # Auth forms and logic
    ├── home/            # Hero section, Category grid
    └── location/        # Location selection modal logic
lib/
├── store/               # Zustand stores (useUIStore, useAuthStore, useLocationStore)
├── types/               # TypeScript definitions
├── utils.ts             # Tailwind merge and shared helpers
└── mock-data.ts         # Centralized mock data for restaurants/categories
```

## Data Model (Mock)

### Auth Store (`useAuthStore`)
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: any) => void;
  logout: () => void;
}
```

### Location Store (`useLocationStore`)
```typescript
interface Location {
  address: string;
  city: string;
  lat?: number;
  lng?: number;
}

interface LocationState {
  currentLocation: Location | null;
  setLocation: (location: Location) => void;
}
```

### UI Store (`useUIStore`)
```typescript
interface UIState {
  isCartOpen: boolean;
  isLocationModalOpen: boolean;
  setCartOpen: (open: boolean) => void;
  setLocationModalOpen: (open: boolean) => void;
}
```

## Design Decisions & Rationale

1.  **Next.js App Router**: Chosen for built-in SEO, file-based routing, and efficient server-client component split.
2.  **Zustand for State**: Minimalist alternative to Redux. Perfect for persisting Cart, Auth, and Location state to LocalStorage via middleware.
3.  **Radix UI Primitives**: Used for all complex interactive UI (Modals, Popovers, Dropdowns) to ensure WCAG accessibility without sacrificing design freedom.
4.  **Framer Motion**: Enables high-quality "App-like" feel on the web (sliding drawers, smooth hover states).
5.  **Next/Font Optimization**: Explicitly use `next/font/google` for Inter and Poppins to eliminate layout shifts and optimize delivery.
6.  **Mock Persistence**: Using `zustand/middleware`'s `persist` to handle LocalStorage automatically.

## Operational Readiness
- **Observability**: Simple `console.log` wrappers for navigation and state changes (simulating analytics).
- **Deployment**: Configured for Vercel/Standard CI (will include `npm run build` check).

## Risk Analysis
- **Complexity**: Next.js 14 learning curve for server/client components. *Mitigation*: Strict use of `'use client'` where interactivity (Framer/Zustand) is needed.
- **Assets**: Video background performance. *Mitigation*: Ensure video is muted, optimized, and has a fallback static image.

## Evaluation & Validation
- [ ] Responsive check (375px to 1440px).
- [ ] Lighthouse score > 90 for Performance and Accessibility.
- [ ] Type-check passes (`tsc`).
