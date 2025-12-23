# Architectural Plan: Checkout Flow

## 1. Scope and Dependencies
- **In Scope:**
    - Global `CartDrawer` component (Sidebar).
    - Cart logic in `useCartStore` (single restaurant constraint, persistence).
    - `/checkout` page with multi-step-like form (Address, Time, Payment).
    - Sticky `OrderSummary` on checkout page.
    - `/checkout/success` confirmation page.
- **Out of Scope:**
    - Real payment processing (Stripe/PayPal).
    - Real-time order tracking (will use static mock status).
    - Editing saved addresses (will use mock selection).
- **Dependencies:**
    - `zustand` (State management).
    - `framer-motion` (Drawer animations).
    - `lucide-react` (Icons).

## 2. Key Decisions and Rationale
- **State Management:** Extend `useCartStore` to handle complex logic (adding/removing, clearing, restaurant checks).
- **Persistence:** Use `zustand/middleware` `persist` to ensure the cart survives refreshes.
- **UI Components:** Use existing `Modal` and `Button` components; create a new `Drawer` pattern for the cart.

## 3. Interfaces and API Contracts
- **`useCartStore` State:**
  ```typescript
  interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    restaurantId: string;
    restaurantName: string;
    image: string;
  }
  ```
- **Navigation:**
  - Header -> `toggleCart()` (Opens Drawer).
  - Drawer -> `/checkout`.
  - Checkout -> `/checkout/success`.

## 4. Data Management
- **Persistence:** `localStorage` key: `foodzilla-cart`.
- **Constraint Logic:** 
  - `addItem(item)`: If `cart.restaurantId` exists and `item.restaurantId !== cart.restaurantId`, trigger "Clear Cart" confirmation.

## 5. Risk Analysis
- **Complexity:** Managing cart state across different components (Restaurant page vs Drawer).
- **Mitigation:** Centralize all logic in the Zustand store and use custom hooks where needed.

## 6. Definition of Done
- [x] Cart Drawer opens/closes with items correctly listed.
- [x] Quantity adjustments update totals immediately.
- [x] Checkout page validates required selections.
- [x] "Place Order" clears the cart and redirects to success page.
- [x] Persistence verified after refresh.
