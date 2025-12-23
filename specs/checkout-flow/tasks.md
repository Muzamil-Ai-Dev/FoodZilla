# Tasks: Checkout Flow Implementation

## Phase 1: Cart Core & Persistence
- [x] **Task 1: Update `useCartStore` for persistence and restaurant logic**
    - Add `persist` middleware.
    - Implement `restaurantId` check in `addItem`.
    - Add `clearCart` and `getTotal` methods.
    - *Test Case:* Add item -> Refresh -> Item still exists.
    - *Test Case:* Add item from different restaurant -> Verify constraint logic triggers.

## Phase 2: UI - Cart Drawer
- [x] **Task 2: Implement `CartDrawer` component**
    - Create `src/components/layout/CartDrawer.tsx` using `framer-motion`.
    - Add item list with quantity controls.
    - Add subtotal and "Checkout" button.
    - Integrate with `Header` cart icon.
    - *Test Case:* Clicking cart icon opens drawer; clicking "Checkout" redirects.

## Phase 3: Checkout Page (`/checkout`)
- [x] **Task 4: Scaffold `/checkout` page layout**
    - Create `src/app/checkout/page.tsx`.
    - Implement 2-column layout (Form | Summary).
- [x] **Task 5: Implement Selection Sections**
    - Address selection (Mock saved addresses).
    - Delivery time selection.
    - Payment method selection.
- [x] **Task 6: Implement `OrderSummary` component**
    - Calculate Subtotal, Delivery Fee (mock $2.99), Tax (10%), Total.
    - Enable "Place Order" only when valid.

## Phase 4: Finalization & Success
- [x] **Task 7: Create Success Page**
    - Create `src/app/checkout/success/page.tsx`.
    - Add confirmation animation and mock Order ID.
- [x] **Task 8: Hook up "Place Order"**
    - On click: Clear cart -> Redirect to success.
    - *Test Case:* Entire flow from adding item to success page.
