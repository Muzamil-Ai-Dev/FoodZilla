# Tasks: FoodZilla Core & Foundation

**Input**: Design documents from `specs/foodzilla-core/`
**Prerequisites**: `plan.md` (required), `spec.md` (required)

## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Initialize Next.js 14 project with Tailwind CSS and TypeScript
- [ ] T002 [P] Install core dependencies: `zustand`, `framer-motion`, `lucide-react`, `@radix-ui/react-dialog`, `@radix-ui/react-popover`, `clsx`, `tailwind-merge`
- [ ] T003 [P] Configure Tailwind with FoodZilla design tokens (Colors: `#D70F64`, Border-radius: `xl/2xl`)
- [ ] T004 [P] Setup Font optimization using `next/font/google` for Inter and Poppins in `app/layout.tsx`
- [ ] T005 Setup Vitest and React Testing Library for component testing

---

## Phase 2: Foundational (Blocking Prerequisites)

**⚠️ CRITICAL**: Must be complete before UI work begins.

- [ ] T006 Implement `lib/utils.ts` for Tailwind class merging
- [ ] T007 [P] Create `lib/store/useUIStore.ts` for transient UI states (Modals, Drawers)
- [ ] T008 [P] Create `lib/store/useAuthStore.ts` with LocalStorage persistence for mock session
- [ ] T009 [P] Create `lib/store/useLocationStore.ts` with LocalStorage persistence for delivery address
- [ ] T010 [P] Create `lib/mock-data.ts` with initial `User`, `Category`, and `Restaurant` data
- [ ] T011 [P] Define TypeScript interfaces in `lib/types/index.ts` (User, Location, Category, Restaurant)
- [ ] T011b [P] Create `lib/image-utils.ts` for dynamic placeholder URL generation (categorized mock images)

---

## Phase 3: User Story 1 - Global Layout & Navigation (Priority: P1) 🎯 MVP

**Goal**: Establish the app shell with Header, Footer, and Mobile Tab Bar.

- [ ] T012 [P] [US1] Create UI primitive: `Button` (Radix-based or accessible) in `components/ui/button.tsx`
- [ ] T013 [P] [US1] Create UI primitive: `Container` in `components/ui/container.tsx`
- [ ] T014 [US1] Implement `components/layout/Header.tsx` (Sticky, Logo, Desktop Search, Auth/Cart buttons)
- [ ] T015 [US1] Implement `components/layout/Footer.tsx` (Links, Socials, Copyright)
- [ ] T016 [US1] Implement `components/layout/MobileNav.tsx` (Bottom Tab Bar: Home, Search, Orders, Profile)
- [ ] T017 [US1] Integrate Layout components into `app/layout.tsx`
- [ ] T017b [US1] Configure Global Metadata (Title, Description, OG Tags) in `app/layout.tsx`

---

## Phase 4: User Story 2 - Landing Page & Location (Priority: P1)

**Goal**: Implement the Hero section with video background and location selection.

- [ ] T018 [P] [US2] Create UI primitive: `Modal` using Radix Dialog in `components/ui/modal.tsx`
- [ ] T019 [US2] Implement `components/features/location/LocationModal.tsx` (Address input, mock suggestions)
- [ ] T020 [US2] Implement `components/features/home/Hero.tsx` with optimized video background and address trigger
- [ ] T021 [US2] Implement `components/features/home/CategoryGrid.tsx` on the Home page
- [ ] T022 [US2] Implement `components/features/home/FeaturedRestaurants.tsx` (Horizontal scroll)
- [ ] T023 [US2] Assemble Home page in `app/page.tsx`

---

## Phase 5: User Story 3 - Authentication UI (Priority: P2)

**Goal**: Mock login/register flows.

- [ ] T024 [P] [US3] Implement `components/features/auth/LoginForm.tsx` with mock validation
- [ ] T025 [P] [US3] Implement `components/features/auth/RegisterForm.tsx`
- [ ] T026 [US3] Create `app/(auth)/login/page.tsx` and `app/(auth)/register/page.tsx`
- [ ] T027 [US3] Wire up Header to show User Profile/Logout when `isAuthenticated` is true

---

## Phase 6: Polish & Cross-Cutting Concerns

- [ ] T028 [P] Implement Framer Motion page transitions in `app/layout.tsx` (Optional/Nice-to-have)
- [ ] T028b Implement global `loading.tsx` (Skeleton) and `not-found.tsx` (Branded 404)
- [ ] T029 Ensure all interactive elements have correct ARIA labels and focus states
- [ ] T030 Final responsive audit across 375px, 768px, and 1440px widths
- [ ] T031 Run `npm run build` to verify production readiness

---

## Dependencies & Execution Order

1. **Phase 1 & 2** are strictly serial and blocking.
2. **Phase 3 (Layout)** must be finished before **Phase 4 (Home)** to ensure a consistent frame.
3. **Phase 5 (Auth)** can run in parallel with Phase 4 if needed.
4. **Phase 6** is the final quality gate.
