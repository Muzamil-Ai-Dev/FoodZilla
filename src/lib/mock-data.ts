import { Category, Restaurant, User } from "./types";
import { getMockImage } from "./image-utils";

export const MOCK_USER: User = {
  id: "u1",
  name: "John Doe",
  email: "john@example.com",
  avatarUrl: getMockImage("user", "small"),
};

export const MOCK_CATEGORIES: Category[] = [
  { id: "c1", name: "Burgers", slug: "burgers", imageUrl: getMockImage("burger", "small") },
  { id: "c2", name: "Pizza", slug: "pizza", imageUrl: getMockImage("pizza", "small") },
  { id: "c3", name: "Sushi", slug: "sushi", imageUrl: getMockImage("sushi", "small") },
  { id: "c4", name: "Asian", slug: "asian", imageUrl: getMockImage("asian", "small") },
  { id: "c5", name: "Desserts", slug: "desserts", imageUrl: getMockImage("dessert", "small") },
  { id: "c6", name: "Mexican", slug: "mexican", imageUrl: getMockImage("mexican", "small") },
  { id: "c7", name: "Coffee", slug: "coffee", imageUrl: getMockImage("coffee", "small") },
  { id: "c8", name: "Healthy", slug: "healthy", imageUrl: getMockImage("restaurant", "small") },
];

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: "r1",
    name: "Burger King",
    slug: "burger-king",
    image: getMockImage("restaurant"),
    rating: 4.5,
    reviewCount: 1200,
    deliveryTime: "20-30 min",
    deliveryFee: 2.99,
    cuisines: ["American", "Burgers"],
    tags: ["Free Delivery"],
    isPromoted: true,
  },
  {
    id: "r2",
    name: "Pizza Hut",
    slug: "pizza-hut",
    image: getMockImage("pizza"),
    rating: 4.2,
    reviewCount: 850,
    deliveryTime: "30-40 min",
    deliveryFee: 1.99,
    cuisines: ["Italian", "Pizza"],
    tags: ["Hot Deal"],
  },
  {
    id: "r3",
    name: "Sushi Master",
    slug: "sushi-master",
    image: getMockImage("sushi"),
    rating: 4.8,
    reviewCount: 500,
    deliveryTime: "40-50 min",
    deliveryFee: 3.99,
    cuisines: ["Japanese", "Sushi"],
    tags: ["Top Rated"],
  },
  {
    id: "r4",
    name: "KFC",
    slug: "kfc",
    image: getMockImage("restaurant"),
    rating: 4.1,
    reviewCount: 2100,
    deliveryTime: "15-25 min",
    deliveryFee: 1.49,
    cuisines: ["American", "Fast Food"],
    tags: [],
  },
  {
    id: "r5",
    name: "Subway",
    slug: "subway",
    image: getMockImage("burger"),
    rating: 4.3,
    reviewCount: 600,
    deliveryTime: "20-30 min",
    deliveryFee: 0.99,
    cuisines: ["Healthy", "Sandwiches"],
    tags: ["Healthy Choice"],
  },
  {
    id: "r6",
    name: "Taco Bell",
    slug: "taco-bell",
    image: getMockImage("mexican"),
    rating: 4.0,
    reviewCount: 950,
    deliveryTime: "25-35 min",
    deliveryFee: 2.49,
    cuisines: ["Mexican", "Tacos"],
    tags: ["Value Meal"],
  },
  {
    id: "r7",
    name: "McDonald's",
    slug: "mcdonalds",
    image: getMockImage("burger"),
    rating: 4.4,
    reviewCount: 5000,
    deliveryTime: "10-20 min",
    deliveryFee: 1.99,
    cuisines: ["American", "Burgers"],
    tags: ["Popular"],
  },
  {
    id: "r8",
    name: "Domino's Pizza",
    slug: "dominos",
    image: getMockImage("pizza"),
    rating: 4.1,
    reviewCount: 1500,
    deliveryTime: "25-35 min",
    deliveryFee: 0.00,
    cuisines: ["Italian", "Pizza"],
    tags: ["Free Delivery"],
  },
  {
    id: "r9",
    name: "Starbucks",
    slug: "starbucks",
    image: getMockImage("coffee"),
    rating: 4.6,
    reviewCount: 3000,
    deliveryTime: "15-25 min",
    deliveryFee: 2.49,
    cuisines: ["Coffee", "Breakfast"],
    tags: [],
  },
  {
    id: "r10",
    name: "Panda Express",
    slug: "panda-express",
    image: getMockImage("asian"),
    rating: 4.2,
    reviewCount: 800,
    deliveryTime: "30-40 min",
    deliveryFee: 3.49,
    cuisines: ["Chinese", "Asian"],
    tags: [],
  },
  {
    id: "r11",
    name: "Chipotle",
    slug: "chipotle",
    image: getMockImage("mexican"),
    rating: 4.5,
    reviewCount: 1100,
    deliveryTime: "20-30 min",
    deliveryFee: 2.99,
    cuisines: ["Mexican", "Healthy"],
    tags: ["Top Rated"],
  },
  {
    id: "r12",
    name: "Dunkin'",
    slug: "dunkin",
    image: getMockImage("dessert"),
    rating: 4.0,
    reviewCount: 2000,
    deliveryTime: "10-20 min",
    deliveryFee: 1.49,
    cuisines: ["Coffee", "Donuts"],
    tags: [],
  },
];

export interface MenuOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuOptionGroup {
  id: string;
  name: string;
  type: "radio" | "checkbox";
  options: MenuOption[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  spicyLevel?: 1 | 2 | 3;
  calories?: number;
  optionGroups?: MenuOptionGroup[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface RestaurantExtended extends Restaurant {
  menu: MenuCategory[];
}

const MOCK_OPTIONS = {
  sizes: {
    id: "g1",
    name: "Choose Size",
    type: "radio" as const,
    options: [
      { id: "o1", name: "Regular", price: 0 },
      { id: "o2", name: "Large", price: 2.50 },
    ]
  },
  extras: {
    id: "g2",
    name: "Add-ons",
    type: "checkbox" as const,
    options: [
      { id: "e1", name: "Extra Cheese", price: 1.50 },
      { id: "e2", name: "Bacon", price: 2.00 },
      { id: "e3", name: "Avocado", price: 1.75 },
    ]
  }
};

export const MOCK_RESTAURANTS_EXTENDED: RestaurantExtended[] = MOCK_RESTAURANTS.map(res => ({
  ...res,
  menu: [
    {
      id: "cat1",
      name: "Popular Items",
      items: [
        {
          id: `${res.id}-m1`,
          name: "Signature Burger",
          description: "Our world famous signature burger with special sauce and prime beef.",
          price: 12.99,
          image: getMockImage("burger", "small"),
          isPopular: true,
          calories: 850,
          optionGroups: [MOCK_OPTIONS.sizes, MOCK_OPTIONS.extras]
        },
        {
          id: `${res.id}-m2`,
          name: "Crispy Fries",
          description: "Golden and crispy fries seasoned with sea salt.",
          price: 4.50,
          image: getMockImage("burger", "small"),
          isVegetarian: true,
          calories: 320
        }
      ]
    },
    {
      id: "cat2",
      name: "Main Course",
      items: [
        {
          id: `${res.id}-m3`,
          name: "Spicy Zilla Chicken",
          description: "Tender chicken breast with our secret spicy glaze.",
          price: 15.50,
          image: getMockImage("asian", "small"),
          spicyLevel: 2,
          calories: 600,
          optionGroups: [MOCK_OPTIONS.extras]
        },
        {
          id: `${res.id}-m4`,
          name: "Garden Fresh Salad",
          description: "Organic greens, cherry tomatoes, and cucumber with balsamic vinaigrette.",
          price: 9.99,
          image: getMockImage("restaurant", "small"),
          isVegetarian: true,
          calories: 150
        }
      ]
    }
  ]
}));