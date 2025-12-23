export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Location {
  address: string;
  city: string;
  lat?: number;
  lng?: number;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  image: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: number;
  cuisines: string[];
  tags: string[];
  isPromoted?: boolean;
}
