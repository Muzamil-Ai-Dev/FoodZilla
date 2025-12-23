# Implementation Plan: Restaurant Discovery

**Branch**: `002-restaurant-discovery` | **Date**: 2025-12-21 | **Spec**: [specs/restaurant-discovery/spec.md](specs/restaurant-discovery/spec.md)

## Summary
Implement the core discovery experience for FoodZilla. This includes a high-performance Restaurant Listing page with dynamic client-side filtering, a debounced Search results page, and a rich Restaurant Detail page featuring a sticky menu navigation and an interactive item customization modal.

## Technical Context

**Language/Version**: TypeScript / Node.js 18+  
**Primary Dependencies**: Next.js 14, Tailwind CSS, Radix UI (Dialog, Checkbox, RadioGroup), Framer Motion, Zustand, Lucide React  
**Storage**: Mock JSON (client-side state for filtering)  
**Testing**: Vitest + RTL  
**Target Platform**: Web (Responsive, 1440px max-width)  
**Performance Goals**: Instant filter updates (< 100ms), Optimized image loading via `next/image`.

## Constitution Check

- [x] **Visual Consistency**: Inherit `rounded-[2rem]` and `font-black` from Core.
- [x] **Scale**: Use `max-w-[1440px]` container for Listing and Detail.
- [x] **A11y**: Use Radix UI for Filter Checkboxes, Radio Groups, and the Item Modal.
- [x] **Performance**: Implement debounced search and lazy-loaded restaurant cards.
- [x] **SDD**: Plan created before implementation.

## Project Structure

```text
app/
├── restaurants/
│   └── page.tsx         # Listing page with Sidebar Filters
├── restaurant/
│   └── [slug]/
│       └── page.tsx     # Detail page with Floating Info Card
├── search/
│   └── page.tsx         # Results page with debounced query handling
components/
├── features/
│   ├── restaurant/
│   │   ├── RestaurantFilters.tsx   # Sidebar/Modal filter logic
│   │   ├── RestaurantList.tsx      # Grid + Skeleton loading logic
│   │   ├── RestaurantHero.tsx      # Floating Info Card component
│   │   ├── MenuNavigation.tsx      # Sticky horizontal category scroll
│   │   ├── MenuSection.tsx         # Category title + item grid
│   │   ├── MenuItemCard.tsx        # Bold item card with price/add button
│   │   └── ItemModal.tsx           # Radix-based customization dialog
lib/
├── store/
│   ├── useCartStore.ts             # Global Cart state (Persisted)
│   └── useSearchStore.ts           # Syncs header query with search page
└── hooks/
    └── useSearch.ts                # Custom hook for debounced searching
```

## Data Model (New)

### Cart Store (`useCartStore`)
```typescript
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  restaurantId: string; // Required for multi-restaurant guard
  options: Record<string, string | string[]>; 
}

interface CartState {
  items: CartItem[];
  activeRestaurantId: string | null;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}
```

## Design Decisions & Rationale

1.  **Shared RestaurantCard**: Reuse the `RestaurantCard` from Core to maintain visual parity and performance (optimized images).
2.  **Radix UI for Customization**: The Item Modal requires complex input (Radio for size, Checkboxes for extras). Radix UI ensures these are accessible.
3.  **Search Bridge**: Implement `useSearchStore` to bridge the gap between the Header's search overlay and the `/search` page, ensuring the query is preserved and used to trigger initial loading states.
4.  **Floating Hero Identity**: On the Restaurant Detail page, the info (Name, Rating, Time) will be presented in a white, glassmorphism-style card that floats over the large cover image, mimicking the premium "App" feel.
5.  **Multi-Restaurant Guard**: Logic within `useCartStore` will check if an incoming item belongs to the same `activeRestaurantId`. If not, a "Clear Cart?" modal will be triggered.
6.  **Filter Skeletons**: To prevent layout "flicker" during client-side filtering, a brief (~200ms) skeleton loading state will be injected, making the transition feel stable and deliberate.
7.  **Cart Persistence**: Use Zustand's `persist` middleware to save the cart to LocalStorage, ensuring users don't lose their selection on refresh or tab close.

## Operational Readiness
- **Observability**: Track filter interactions and search queries via `console.log`.
- **UX**: Implement Skeleton loaders for the restaurant grid during "mock loading" states.

## Risk Analysis
- **Filtering Logic**: Complex combinations of filters can be tricky. *Mitigation*: Centralize filter logic in a utility function.
- **Scroll Syncing**: Category highlighting must be performant. *Mitigation*: Use `IntersectionObserver` instead of raw scroll events.

## 6. Definition of Done
- [x] Filters update the UI correctly.
- [x] Item Modal "Add to Cart" updates the global store.
- [x] Menu navigation pins to top correctly on scroll.
- [x] Search returns relevant results debounced.
