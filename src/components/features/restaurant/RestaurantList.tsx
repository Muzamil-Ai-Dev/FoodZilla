"use client";

import { useSearchStore } from "@/lib/store/useSearchStore";
import { RestaurantCard } from "../home/FeaturedRestaurants";
import { Restaurant } from "@/lib/types";
import { SkeletonCard } from "@/components/ui/SkeletonCard";

interface ListProps {
  restaurants: Restaurant[];
}

export const RestaurantList = ({ restaurants }: ListProps) => {
  const isFiltering = useSearchStore((state) => state.isFiltering);

  if (isFiltering) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (restaurants.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
        <h3 className="text-2xl font-black text-brand-dark mb-4">No restaurants found</h3>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Try adjusting your filters or location</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-in fade-in duration-500">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
