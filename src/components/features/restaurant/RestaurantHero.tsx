"use client";

import Image from "next/image";
import { Star, Clock, Bike, Info } from "lucide-react";
import { RestaurantExtended } from "@/lib/mock-data";
import { Container } from "@/components/ui/container";

interface HeroProps {
  restaurant: RestaurantExtended;
}

export const RestaurantHero = ({ restaurant }: HeroProps) => {
  return (
    <section className="relative">
      {/* Cover Image */}
      <div className="relative h-[250px] md:h-[350px] w-full">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating Info Card */}
      <Container className="relative -mt-20 md:-mt-32 z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {restaurant.cuisines.map((c) => (
                  <span key={c} className="px-3 py-1 bg-brand-primary/10 rounded-full text-brand-primary font-black text-[10px] uppercase tracking-widest">
                    {c}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter uppercase italic leading-none">
                {restaurant.name}
              </h1>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="bg-brand-primary p-1.5 rounded-xl">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                  <div className="text-left leading-none">
                    <div className="text-brand-dark font-black text-lg">{restaurant.rating}</div>
                    <div className="text-gray-400 font-bold text-[10px] uppercase">{restaurant.reviewCount}+ Reviews</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-1.5 rounded-xl">
                    <Clock className="w-4 h-4 text-brand-dark" />
                  </div>
                  <div className="text-left leading-none">
                    <div className="text-brand-dark font-black text-lg">{restaurant.deliveryTime}</div>
                    <div className="text-gray-400 font-bold text-[10px] uppercase">Delivery Time</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-1.5 rounded-xl">
                    <Bike className="w-4 h-4 text-brand-dark" />
                  </div>
                  <div className="text-left leading-none">
                    <div className="text-brand-dark font-black text-lg">${restaurant.deliveryFee.toFixed(2)}</div>
                    <div className="text-gray-400 font-bold text-[10px] uppercase">Delivery Fee</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-xs hover:bg-brand-primary/5 px-4 py-2 rounded-full transition-colors self-start md:self-center">
              <Info className="w-4 h-4" />
              More Info
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
