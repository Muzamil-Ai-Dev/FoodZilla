# Feature: Checkout Flow

## 1. Overview
Manage the transaction process, from reviewing the cart to finalizing the order. This involves a persistent Cart Drawer, a dedicated Checkout page, and an Order Success confirmation.

## 2. Requirements

### 2.1. Global Cart Drawer
- **Access**: Accessible from the Header (Cart icon).
- **Behavior**: Slides in from the right (Framer Motion).
- **Content**:
  - List of added items (Qty, Name, Price).
  - +/- controls to adjust quantity.
  - Subtotal calculation.
  - "Checkout" button (navigates to `/checkout`).
- **Empty State**: "Your cart is empty" illustration + "Browse Restaurants" button.

### 2.2. Checkout Page (`/checkout`)
- **Guard**: Redirect to `/login` if not authenticated (mock check).
- **Layout**: Two columns (Forms | Order Summary).
- **Sections**:
  1.  **Delivery Address**: List saved addresses (mock) or "Add New".
  2.  **Delivery Time**: "Standard (20-30 min)" vs "Schedule".
  3.  **Payment Method**: "Credit Card", "Cash on Delivery". (Visual selection only).
- **Order Summary**: Sticky panel with Item list, Subtotal, Delivery Fee, Tax, Total.
- **Action**: "Place Order" button.

### 2.3. Order Success (`/checkout/success`)
- **Trigger**: "Place Order" success.
- **Content**:
  - "Order Confirmed!" animation.
  - Order ID.
  - Estimated delivery time.
  - "Track Order" button (navigates to Orders page).

## 3. Data Models (Mock)
- **CartItem**: `{ menuItemId, quantity, selectedOptions, price }`
- **Cart**: `{ restaurantId, items: CartItem[] }` (Enforce single restaurant constraint? Optional: Prompt to clear cart if adding from different restaurant).
- **Order**: `{ id, items, total, status, date }`

## 4. Acceptance Criteria
- [ ] Cart drawer opens/closes smoothly.
- [ ] Adding items in Restaurant Detail updates Cart Drawer immediately.
- [ ] Cart retains state across navigations (Zustand + LocalStorage persistence).
- [ ] Checkout page displays correct total.
- [ ] "Place Order" clears the cart and redirects to Success page.
