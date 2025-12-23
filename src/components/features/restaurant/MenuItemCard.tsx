"use client";

import Image from "next/image";
import { Plus, Flame, Leaf, Star } from "lucide-react";
import { MenuItem } from "@/lib/mock-data";

interface CardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

export const MenuItemCard = ({ item, onAdd }: CardProps) => {
  return (
    <div className="bg-white p-4 rounded-[2rem] border border-gray-100 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-500 flex flex-col justify-between group h-full">
      <div className="flex gap-4">
        {/* Left Side: Info */}
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap gap-2">
            {item.isPopular && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-orange-50 text-orange-600 rounded-lg font-black text-[9px] uppercase tracking-tighter shadow-sm border border-orange-100">
                <Star className="w-2.5 h-2.5 fill-current" />
                Best Seller
              </span>
            )}
            {item.isVegetarian && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-600 rounded-lg font-black text-[9px] uppercase tracking-tighter shadow-sm border border-green-100">
                <Leaf className="w-2.5 h-2.5 fill-current" />
                Veggie
              </span>
            )}
            {item.spicyLevel && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-600 rounded-lg font-black text-[9px] uppercase tracking-tighter shadow-sm border border-red-100">
                <Flame className="w-2.5 h-2.5 fill-current" />
                {item.spicyLevel === 3 ? "Extra Hot" : "Spicy"}
              </span>
            )}
          </div>

          <h3 className="text-xl font-black text-brand-dark leading-tight group-hover:text-brand-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-xs text-gray-400 font-bold leading-relaxed line-clamp-2">
            {item.description}
          </p>
          
          <div className="pt-2">
             <span className="text-lg font-black text-brand-dark">
               ${item.price.toFixed(2)}
             </span>
             {item.calories && (
               <span className="text-[10px] text-gray-400 font-black ml-2 uppercase">
                 • {item.calories} kcal
               </span>
             )}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100px, 128px"
          />
          <button 
            onClick={() => onAdd(item)}
            className="absolute bottom-2 right-2 p-2 bg-brand-primary text-white rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all z-10"
          >
            <Plus className="w-6 h-6 stroke-[3px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
