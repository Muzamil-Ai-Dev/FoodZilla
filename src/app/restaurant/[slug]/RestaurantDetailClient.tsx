"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { MOCK_RESTAURANTS_EXTENDED, MenuItem } from "@/lib/mock-data";
import { Container } from "@/components/ui/container";
import { RestaurantHero } from "@/components/features/restaurant/RestaurantHero";
import { MenuNavigation } from "@/components/features/restaurant/MenuNavigation";
import { MenuSection } from "@/components/features/restaurant/MenuSection";
import { ItemModal } from "@/components/features/restaurant/ItemModal";
import { ShoppingBag } from "lucide-react";

export function RestaurantDetailClient() {
  const { slug } = useParams();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const restaurant = useMemo(() => {
    return MOCK_RESTAURANTS_EXTENDED.find((r) => r.slug === slug);
  }, [slug]);

  if (!restaurant) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-4xl font-black text-brand-dark">Restaurant not found</h1>
      </Container>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <RestaurantHero restaurant={restaurant} />
      
      <MenuNavigation 
        categories={restaurant.menu.map(c => ({ id: c.id, name: c.name }))} 
      />

      <Container className="pt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Menu Content */}
          <div className="flex-1 min-w-0">
            {restaurant.menu.map((category) => (
              <MenuSection 
                key={category.id} 
                category={category} 
                onItemClick={(item) => setSelectedItem(item)}
              />
            ))}
          </div>

          {/* Sticky Cart Sidebar */}
          <aside className="hidden lg:block w-[380px] flex-shrink-0">
            <div className="sticky top-40 bg-gray-50 rounded-[3rem] p-8 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center space-y-6 h-[400px]">
               <div className="bg-white w-20 h-20 rounded-3xl shadow-lg flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-brand-primary" />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-brand-dark">Your cart is empty</h3>
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-2">Start adding items to build your order</p>
               </div>
            </div>
          </aside>
        </div>
      </Container>

      <ItemModal 
        item={selectedItem} 
        restaurant={restaurant}
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
}
