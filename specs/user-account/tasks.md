# Tasks: User Account Implementation

## Phase 1: Data & Setup
- [ ] **Task 1: Expand mock data and types**
    - Add `Order` interface to `src/lib/types/index.ts`.
    - Add `MOCK_ORDERS` to `src/lib/mock-data.ts`.
- [ ] **Task 2: Scaffold Account Pages**
    - Create `src/app/account/layout.tsx` (Shared sidebar navigation).
    - Create `src/app/account/page.tsx` (Profile).
    - Create `src/app/account/orders/page.tsx` (Order History).

## Phase 2: Order History UI
- [ ] **Task 3: Implement `OrderCard` and `StatusBadge`**
    - Build reusable card for individual orders.
    - Implement color-coded badges for status.
- [ ] **Task 4: Assemble Order History List**
    - Map through `MOCK_ORDERS` and display cards.
    - Implement "Reorder" logic (mock).

## Phase 3: Profile & Integration
- [ ] **Task 5: Build Profile Page**
    - Display user avatar, name, and email from `useAuthStore`.
    - Add mock "Saved Addresses" section.
- [ ] **Task 6: Final Integration**
    - Update Header links to point to `/account` and `/account/orders`.
    - Verify "Track Order" link from Success page.
- [ ] **Task 7: Build & Verify**
    - Run `npm run build`.
    - Responsive audit.
