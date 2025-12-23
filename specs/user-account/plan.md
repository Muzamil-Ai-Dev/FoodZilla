# Architectural Plan: User Account & Order History

## 1. Scope and Dependencies
- **In Scope:**
    - `/account/orders` page for viewing order history.
    - `/account` page for profile management.
    - Reusable `OrderCard` and `StatusBadge` components.
    - Integration with `useAuthStore` for user data.
- **Out of Scope:**
    - Actual backend integration for real-time tracking (will use static mocks).
    - Image uploading for profile avatars.
    - Real "Reorder" API (will mock adding items to store).
- **Dependencies:**
    - `lucide-react` (Icons).
    - `framer-motion` (Animations).
    - `useAuthStore` (Current user state).
    - `useCartStore` (For "Reorder" functionality).

## 2. Key Decisions and Rationale
- **Component Strategy:** Create a shared `AccountLayout` or use a sidebar pattern to navigate between Profile and Orders.
- **Data Handling:** Add `MOCK_ORDERS` to `src/lib/mock-data.ts` to simulate a history of transactions.
- **UI Consistency:** Use the "Card" and "Badges" pattern established in the Restaurant Discovery phase.

## 3. Interfaces and API Contracts
- **Order Interface:**
  ```typescript
  export interface Order {
    id: string;
    restaurantName: string;
    restaurantImage: string;
    date: string;
    total: number;
    status: 'delivered' | 'processing' | 'cancelled';
    items: { name: string; quantity: number; price: number }[];
  }
  ```

## 4. Operation Readiness
- Ensure the "Track Order" button from the Success page correctly navigates to `/account/orders`.
- Verify that the Header dropdown links to these new pages correctly.

## 5. Definition of Done
- [ ] User can view a list of past orders with correct details.
- [ ] Status badges (Delivered/Processing/Cancelled) are visually distinct.
- [ ] Profile page displays current authenticated user's name and email.
- [ ] Responsive behavior verified on mobile.
