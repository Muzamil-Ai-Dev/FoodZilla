# Tasks: Restaurant Discovery

**Input**: Design documents from `specs/restaurant-discovery/`
**Prerequisites**: `plan.md` (required), `spec.md` (required)

## Phase 1: Foundational (State & Hooks)

- [ ] T001 Implement `lib/store/useCartStore.ts` with `persist`, multi-restaurant logic, and **Business Logic** (Min Order / Free Delivery calculations)
- [ ] T002 Implement `lib/store/useSearchStore.ts` with URL parameter synchronization (Sync query with `/search?q=...`)
- [ ] T002b [P] Create `lib/store/useNotificationStore.ts` for professional feedback toasts (e.g., "Added to Cart")
- [ ] T003 [P] Create `lib/hooks/useIntersectionObserver.ts` for menu category tracking
- [ ] T004 [P] Expand `lib/mock-data.ts` with detailed menu items including meta-badges (Popular, Vegetarian, Spicy)
- [ ] T004b Add `isFiltering` loading state to the store logic to handle smooth filter transitions

---

## Phase 2: User Story 1 - Restaurant Listing & Filtering (Priority: P1) 🎯 MVP

**Goal**: Users can browse, filter, and sort the full restaurant list.

- [ ] T005 [P] Create UI primitive: `Checkbox` using Radix UI in `components/ui/checkbox.tsx`
- [ ] T006 [P] Create UI primitive: `RadioGroup` using Radix UI in `components/ui/radio-group.tsx`
- [ ] T007 Implement `components/features/restaurant/RestaurantFilters.tsx` (Desktop sidebar, Mobile Modal)
- [ ] T008 Implement `components/features/restaurant/RestaurantList.tsx` with skeleton loading state
- [ ] T009 [P] Create `components/ui/SkeletonCard.tsx` for filter transitions
- [ ] T009b Implement **Location-Aware Empty State** (e.g., "We don't deliver here yet")
- [ ] T010 Assemble `app/restaurants/page.tsx` with filter + list integration

---

## Phase 3: User Story 2 - Search Results (Priority: P1)

**Goal**: A dedicated page for debounced search results.

- [ ] T011 Implement `app/search/page.tsx` using `useSearchStore`
- [ ] T012 Add "No Results" empty state with category suggestions
- [ ] T013 Connect Header's Search Trigger to `useSearchStore` and navigate to `/search`

---

## Phase 4: User Story 3 - Restaurant Detail Page (Priority: P1)

**Goal**: High-fidelity restaurant page with interactive menu.

- [ ] T014 Implement `components/features/restaurant/RestaurantHero.tsx` (Large cover + Floating Info Card)
- [ ] T015 Implement `components/features/restaurant/MenuNavigation.tsx` (Sticky horizontal scroll with **Active Progress Underline**)
- [ ] T016 Implement `components/features/restaurant/MenuSection.tsx` (Category grid layout)
- [ ] T017 Create `components/features/restaurant/MenuItemCard.tsx` (Render meta-badges, bold price, add-to-cart trigger)
- [ ] T018 Assemble `app/restaurant/[slug]/page.tsx` with **Shared Layout Transitions** (Image growth)

---

## Phase 5: User Story 4 - Item Customization & Cart (Priority: P2)

**Goal**: Users can customize items and add them to their persistent cart.

- [ ] T019 Implement `components/features/restaurant/ItemModal.tsx` using Radix Dialog (Display rich item info & badges)
- [ ] T020 Add Radio/Checkbox option groups to the Item Modal
- [ ] T021 Implement "Clear Cart" Guard Modal for multi-restaurant additions
- [ ] T022 Wire up "Add to Cart" button to `useCartStore`

---

## Phase 6: Polish & Cross-Cutting Concerns

- [ ] T023 Implement page transitions (Framer Motion) when entering a restaurant
- [ ] T024 Final responsive check for Filter Modal on mobile (375px)
- [ ] T025 Run `npm run build` to verify production readiness
- [ ] T026 Audit accessibility for Menu Item Modal (Focus trapping, Keyboard nav)

---

## Dependencies & Execution Order

1. **Phase 1** must be complete to provide the `useCartStore` required for all adding actions.
2. **Phase 2 (Listing)** and **Phase 3 (Search)** can be implemented in parallel.
3. **Phase 4 (Detail)** must be complete before **Phase 5 (Customization)** can be wired up.
