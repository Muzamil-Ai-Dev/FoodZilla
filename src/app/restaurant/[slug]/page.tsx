import { MOCK_RESTAURANTS_EXTENDED } from "@/lib/mock-data";
import { RestaurantDetailClient } from "./RestaurantDetailClient";

export function generateStaticParams() {
  return MOCK_RESTAURANTS_EXTENDED.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

export default function RestaurantDetailPage() {
  return <RestaurantDetailClient />;
}