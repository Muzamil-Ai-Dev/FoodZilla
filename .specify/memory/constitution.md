# FoodZilla Constitution

## Core Principles

### I. User Experience First
- **Mobile-First**: Design and implementation must prioritize mobile responsiveness.
- **Visual Fidelity**: Use bold imagery, rounded cards, and clean spacing.
- **Interactivity**: Utilize Framer Motion for smooth, meaningful animations (e.g., cart drawer, page transitions).
- **Parity**: Functionality must match industry leaders (e.g., foodpanda) but with original design.

### II. Spec-Driven Development (SDD)
- **Spec First**: No code is written without a corresponding specification in `specs/`.
- **Task Decomposition**: Specs are broken down into testable tasks in `specs/<feature>/tasks.md`.
- **Traceability**: Code changes must link back to a specific task or requirement.

### III. Component Modularity
- **Atomic-ish Design**: Build reusable UI primitives (buttons, inputs, cards) separate from feature components.
- **Composition**: Prefer composition over inheritance or complex prop drilling.
- **Server vs. Client**: Utilize Next.js App Router paradigm effectively—Server Components for data fetching/layout, Client Components for interactivity.

### IV. Type Safety & State
- **Strict TypeScript**: `noImplicitAny`, strict null checks. Interfaces for all data models.
- **Explicit State**: Use Zustand for global client state (Cart, Auth UI status). Avoid deeply nested contexts for simple state.
- **Mock Data**: All features must work with typed mock data initially to ensure UI readiness before backend integration.

### V. Media & Assets
- **Copyright Safe**: Strictly use placeholder URLs or royalty-free sources (Pexels, Unsplash).
- **Optimization**: Images must be optimized (Next/Image) and responsive.

## Technology Stack

### Frontend Core
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: React 18
- **Animations**: Framer Motion
- **State Management**: Zustand

### Infrastructure (Simulation)
- **Auth**: Mock authentication flow (for now).
- **Data**: Static JSON / Mock hooks.

## Directory Structure Standards
- `app/`: Next.js App Router pages and layouts.
- `components/ui/`: Generic, reusable UI primitives.
- `components/features/`: Domain-specific components (e.g., `RestaurantCard`, `CartDrawer`).
- `lib/`: Utilities, stores (Zustand), and types.
- `public/`: Static assets.

## Governance
- This constitution supersedes all other practices.
- Code reviews must verify compliance with design system and type safety.
- Amendments require a clear architectural decision record (ADR).

**Version**: 1.0.0 | **Ratified**: 2025-12-21