# Feature: User Account & Order History

## 1. Overview
Provide users with a dedicated space to view their previous orders, track current orders, and manage their profile information.

## 2. Requirements

### 2.1. Order History Page (`/account/orders`)
- **Display**: A list of past orders.
- **Card Details**:
  - Restaurant Name and Image.
  - Order Date.
  - Items purchased (truncated).
  - Total Price.
  - Status (Delivered, Cancelled, In Progress).
- **Actions**: "Reorder" button (adds items back to cart).

### 2.2. Order Tracking (Part of History)
- For "In Progress" orders, show a visual progress bar (Order Received -> Preparing -> Out for Delivery -> Delivered).

### 2.3. Profile Management (`/account`)
- Display user details (Name, Email).
- Mock "Edit" functionality.
- List of saved addresses.

## 3. Data Models (Mock)
- **OrderHistory**: Array of `Order` objects.
  ```typescript
  interface Order {
    id: string;
    restaurantName: string;
    restaurantImage: string;
    date: string;
    items: { name: string; quantity: number }[];
    total: number;
    status: 'delivered' | 'processing' | 'cancelled';
  }
  ```

## 4. Acceptance Criteria
- [ ] `/account/orders` page displays at least 3 mock past orders.
- [ ] Status badges use appropriate colors (Green for delivered, Yellow for processing).
- [ ] "Reorder" button functionality is mocked or implemented.
- [ ] Profile page displays current user data from `useAuthStore`.
