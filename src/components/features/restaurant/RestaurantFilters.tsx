"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSearchStore } from "@/lib/store/useSearchStore";
import { Star } from "lucide-react";

const CUISINES = ["American", "Asian", "Burgers", "Italian", "Japanese", "Mexican", "Pizza", "Sushi"];
const PRICE_RANGES = ["$", "$$", "$$$"];

interface FilterProps {
  selectedCuisines: string[];
  setSelectedCuisines: (cuisines: string[]) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
}

export const RestaurantFilters = ({
  selectedCuisines,
  setSelectedCuisines,
  priceRange,
  setPriceRange,
}: FilterProps) => {
  const setFiltering = useSearchStore((state) => state.setFiltering);

  const handleCuisineChange = (cuisine: string) => {
    setFiltering(true);
    const newCuisines = selectedCuisines.includes(cuisine)
      ? selectedCuisines.filter((c) => c !== cuisine)
      : [...selectedCuisines, cuisine];
    setSelectedCuisines(newCuisines);
    setTimeout(() => setFiltering(false), 300);
  };

  const handlePriceChange = (value: string) => {
    setFiltering(true);
    setPriceRange(value);
    setTimeout(() => setFiltering(false), 300);
  };

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Cuisines */}
      <div>
        <h3 className="text-lg font-black text-brand-dark mb-4 md:mb-6 uppercase tracking-wider italic">
          Cuisines
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
          {CUISINES.map((cuisine) => (
            <div key={cuisine} className="flex items-center space-x-3 group cursor-pointer" onClick={() => handleCuisineChange(cuisine)}>
              <Checkbox 
                checked={selectedCuisines.includes(cuisine)}
                onCheckedChange={() => handleCuisineChange(cuisine)}
              />
              <span className="text-sm font-bold text-gray-600 group-hover:text-brand-primary transition-colors">
                {cuisine}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-black text-brand-dark mb-4 md:mb-6 uppercase tracking-wider italic">
          Price Range
        </h3>
        <RadioGroup value={priceRange} onValueChange={handlePriceChange} className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <RadioGroupItem value="all" id="p-all" />
            <label htmlFor="p-all" className="text-sm font-bold text-gray-600 group-hover:text-brand-primary cursor-pointer transition-colors">
              All Prices
            </label>
          </div>
          {PRICE_RANGES.map((range) => (
            <div key={range} className="flex items-center space-x-3 group cursor-pointer">
              <RadioGroupItem value={range} id={`p-${range}`} />
              <label htmlFor={`p-${range}`} className="text-sm font-bold text-gray-600 group-hover:text-brand-primary cursor-pointer transition-colors">
                {range}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Ratings Filter (Simple implementation) */}
      <div>
        <h3 className="text-lg font-black text-brand-dark mb-6 uppercase tracking-wider italic">
          Min. Rating
        </h3>
        <div className="flex flex-wrap gap-2">
          {[4.5, 4.0, 3.5].map((rating) => (
            <button
              key={rating}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-brand-primary/10 text-brand-dark font-bold text-xs hover:border-brand-primary hover:text-brand-primary transition-all"
            >
              <Star className="w-3 h-3 fill-current text-brand-primary" />
              {rating}+
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
