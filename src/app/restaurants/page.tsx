"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/container";
import { RestaurantFilters } from "@/components/features/restaurant/RestaurantFilters";
import { RestaurantList } from "@/components/features/restaurant/RestaurantList";
import { MOCK_RESTAURANTS } from "@/lib/mock-data";
import { useLocationStore } from "@/lib/store/useLocationStore";
import { MapPin, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  ModalTrigger 
} from "@/components/ui/modal";

export default function RestaurantsPage() {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState("all");
  const currentLocation = useLocationStore((state) => state.currentLocation);

  const filteredRestaurants = useMemo(() => {
    return MOCK_RESTAURANTS.filter((res) => {
      const matchesCuisine = selectedCuisines.length === 0 || 
        res.cuisines.some(c => selectedCuisines.includes(c));
      
      const matchesPrice = priceRange === "all" || 
        (priceRange === "$" && res.deliveryFee < 2) ||
        (priceRange === "$$" && res.deliveryFee >= 2 && res.deliveryFee < 3) ||
        (priceRange === "$$$" && res.deliveryFee >= 3);

      return matchesCuisine && matchesPrice;
    });
  }, [selectedCuisines, priceRange]);

  return (
    <div className="bg-white min-h-screen py-12">
      <Container>
        {/* Page Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-xs italic">
              <MapPin className="w-4 h-4" />
              Restaurants in {currentLocation?.city || "London"}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight leading-none uppercase italic">
              Discovery
            </h1>
            <p className="text-gray-500 font-bold text-lg">
              Found {filteredRestaurants.length} restaurants matching your criteria
            </p>
          </div>

          {/* Mobile Filter Trigger */}
          <div className="md:hidden">
            <Modal>
              <ModalTrigger asChild>
                <Button variant="outline" className="w-full gap-2 rounded-2xl py-6 font-black uppercase tracking-widest text-xs">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters & Sort
                </Button>
              </ModalTrigger>
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>Filters</ModalTitle>
                </ModalHeader>
                <div className="pt-6 overflow-y-auto max-h-[70vh]">
                  <RestaurantFilters 
                    selectedCuisines={selectedCuisines}
                    setSelectedCuisines={setSelectedCuisines}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                  />
                </div>
              </ModalContent>
            </Modal>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-28 space-y-10">
              <RestaurantFilters 
                selectedCuisines={selectedCuisines}
                setSelectedCuisines={setSelectedCuisines}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
          </aside>

          {/* Restaurant Grid */}
          <div className="flex-1">
            <RestaurantList restaurants={filteredRestaurants} />
          </div>
        </div>
      </Container>
    </div>
  );
}
