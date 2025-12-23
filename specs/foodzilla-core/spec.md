# Feature: FoodZilla Core & Foundation

## 1. Overview
Establish the foundational architecture of the FoodZilla frontend application. This includes the Next.js App Router setup, global layout (Header, Footer), global state management (Zustand), styling system (Tailwind), and the primary Landing Page.

## Clarifications

### Session 2025-12-21
- Q: Header Search Bar behavior? → A: Navigate to /search page upon submission.
- Q: Mock authentication persistence? → A: LocalStorage (persists on refresh).
- Q: Mobile navigation pattern? → A: Bottom Tab Bar (Home, Search, Orders, Profile).
- Q: Location selection behavior? → A: Clicking address bar opens a Modal overlay.
- Q: Cart drawer animation? → A: Slide-in from right (Overlay).

## 2. Requirements

### 2.1. System Architecture
- **Framework**: Next.js 14 (App Router).
- **Styling**: Tailwind CSS configuration with custom color palette (Brand primary: `#D70F64` or similar original color, Fonts: `Inter` or `Poppins`).
- **Icons**: Lucide React or Heroicons.
- **State**: Setup Zustand store for UI states (e.g., `useUIStore` for Sidebar/Cart toggles).

### 2.2. Global Layout
- **Sticky Header**:
  - Logo (Text/Icon combination).
  - Search Bar: Persistent on desktop; on submission, navigates to `/search` with query params.
  - Actions: "Log in", "Sign up", "Cart" (Icon with badge).
- **Mobile Navigation**: 
  - **Bottom Tab Bar**: Primary navigation for mobile (Home, Search, Orders, Profile).
  - **Header**: Contains Logo and Cart icon on mobile.
- **Footer**: Standard links (About, Restaurants, Help), Social icons, Copyright.

### 2.3. Landing Page (`/`)
- **Hero Section**:
  - Full-width background video (muted, looping, placeholder URL).
  - Overlay: Headline "Delivering Happiness", Subtext.
  - **Address Input**: Clicking the input opens a **Location Selection Modal** (Mock results/current location).
- **Popular Categories**: Grid of circular or card-based food categories (Burger, Pizza, Sushi).
- **Featured Restaurants**: Horizontal scroll or grid of top-rated restaurant cards (Mock data).
- **Call to Action**: "Partner with us" or "Get the App" section.

### 2.4. Authentication UI
- **Routes**: `/login`, `/register`.
- **UI**:
  - Clean, centered card layout.
  - Social login buttons (Mock: Google, Facebook).
  - Email/Password form with validation visuals.
  - Toggle between Login/Register.
  - **Note**: No real backend auth; simulate "Logged In" state by storing a mock user object/token in **LocalStorage** on success.

### 2.5. Account Shell
- **Routes**: `/account`, `/account/orders`, `/account/addresses`.
- **Layout**: Sidebar navigation for account sections (Profile, Orders, Addresses).
- **Content**: Placeholder empty states for now.

## 3. Data Models (Mock)
- **User**: `{ id, name, email, avatarUrl }`
- **Category**: `{ id, name, imageUrl, slug }`

## 4. Implementation Plan (High Level)
1.  **Setup**: Initialize Next.js, Tailwind, Fonts, Icons.
2.  **Components**: Build atoms (Button, Input, Logo, Container).
3.  **Layout**: Implement RootLayout, Header, Footer.
4.  **Pages**: Build Home (`page.tsx`), Auth pages (`(auth)/login/page.tsx`), Account shell.

## 5. Acceptance Criteria
- [ ] Project builds with `npm run build` without errors.
- [ ] Home page displays Hero video and responsive navigation.
- [ ] Clicking "Login" navigates to `/login`.
- [ ] "Logging in" updates the Header to show User Avatar instead of "Log in".
- [ ] Mobile view shows appropriate navigation (Hamburger or Bottom bar).
