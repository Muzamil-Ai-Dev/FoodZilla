"use client";

import { MenuCategory, MenuItem } from "@/lib/mock-data";
import { MenuItemCard } from "./MenuItemCard";

interface SectionProps {
  category: MenuCategory;
  onItemClick: (item: MenuItem) => void;
}

export const MenuSection = ({ category, onItemClick }: SectionProps) => {
  return (
    <div id={category.id} className="scroll-mt-40 mb-16">
      <h2 className="text-3xl font-black text-brand-dark mb-8 uppercase italic tracking-tight flex items-center gap-4">
        {category.name}
        <div className="h-px bg-gray-100 flex-1" />
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
        {category.items.map((item) => (
          <MenuItemCard 
            key={item.id} 
            item={item} 
            onAdd={onItemClick} 
          />
        ))}
      </div>
    </div>
  );
};
