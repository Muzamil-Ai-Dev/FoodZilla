# Feature: Restaurant Discovery

## 1. Overview
Manage how users find restaurants and browse menus. This includes the main listing page, search results, and the detailed restaurant page with menu categories and items.

## Clarifications

### Session 2025-12-21
- Q: Mobile Filter UX? → A: Expandable Full-screen Modal with "Apply" button.
- Q: Menu Category Navigation? → A: Sticky Horizontal Pill Scroll (at top).
- Q: Item Detail Modal Features? → A: Both Radio (Size) and Checkbox (Extras) groups.
- Q: Empty States for Search? → A: Message + "Try searching for these" links.
- Q: Search Behavior? → A: Real-time Debounced (Updates as you type).

## 2. Requirements

### 2.1. Restaurant Listing (`/restaurants`)
- **Layout**: Sidebar (Filters) + Main Content (Grid/List of Restaurants).
- **Filters**:
  - Cuisines (Checkbox list).
  - Price Range ($, $$, $$$).
  - Delivery Time (Slider or ranges).
  - Rating (4.5+, 4.0+).
- **Sorting**: "Recommended", "Fastest Delivery", "Rating".
- **Restaurant Card**:
  - Hero Image.
  - Name, Rating (Star icon), Delivery Time, Delivery Fee.
  - "Promoted" tag support.

### 2.2. Search Page (`/search`)
- **Search Logic**: Mock client-side search across mock data.
- **Results**: Grouped by "Restaurants" and "Cuisines".
- **Empty State**: "No results found" with suggestions.

### 2.3. Restaurant Detail (`/restaurant/[slug]`)
- **Hero**: Restaurant cover image, logo, meta info (tags, rating, time).
- **Menu Navigation**: Sticky horizontal scroll or sidebar for Menu Categories (e.g., "Starters", "Mains").
- **Menu Section**:
  - Category Title.
  - Grid/List of **Menu Items**.
- **Menu Item Card**:
  - Name, Description, Price.
  - Image (Thumbnail).
  - "Add" button (triggers Item Modal or direct add).

### 2.4. Item Detail Modal
- Triggered when clicking a menu item.
- **Content**: Large image, full description.
- **Options** (Mock): "Choose Size", "Add Ons".
- **Action**: "Add to Cart" (updates global Cart store).

## 3. Data Models (Mock)
- **Restaurant**: `{ id, name, slug, image, rating, deliveryTime, deliveryFee, tags, cuisines }`
- **MenuCategory**: `{ id, name, items: MenuItem[] }`
- **MenuItem**: `{ id, name, description, price, image, options? }`

## 4. Acceptance Criteria
- [ ] `/restaurants` displays a grid of mock restaurants.
- [ ] Filtering updates the list (client-side filtering).
- [ ] Clicking a restaurant navigates to `/restaurant/[slug]`.
- [ ] Restaurant page shows menu categories and items.
- [ ] Clicking an item opens the detail modal.
