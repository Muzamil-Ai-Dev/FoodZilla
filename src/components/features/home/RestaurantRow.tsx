import Link from "next/link";
import Image from "next/image";
import { Star, Clock, Bike } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Restaurant } from "@/lib/types";

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <Link 
      href={`/restaurant/${restaurant.slug}`}
      className="group block min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] snap-start"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-3 shadow-sm group-hover:shadow-md transition-shadow">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 280px, 320px"
          loading="lazy"
        />
        {restaurant.isPromoted && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded text-brand-dark z-10">
            Promoted
          </span>
        )}
        <div className="absolute bottom-3 left-3 bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded z-10">
          {restaurant.deliveryTime}
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-brand-dark truncate pr-2">{restaurant.name}</h3>
          <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded text-green-700 font-bold text-xs whitespace-nowrap">
            <Star className="w-3 h-3 fill-current" />
            {restaurant.rating}
          </div>
        </div>
        
        <p className="text-sm text-gray-500 truncate">
          {restaurant.cuisines.join(" • ")}
        </p>

        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 pt-1">
          <div className="flex items-center gap-1">
            <Bike className="w-3.5 h-3.5 text-brand-primary" />
            ${restaurant.deliveryFee.toFixed(2)} delivery
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {restaurant.deliveryTime}
          </div>
        </div>
      </div>
    </Link>
  );
};

interface RestaurantRowProps {
  title: string;
  restaurants: Restaurant[];
  linkHref?: string;
}

export const RestaurantRow = ({ title, restaurants, linkHref = "/restaurants" }: RestaurantRowProps) => {
  return (
    <section className="py-12 bg-white border-b border-gray-50">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">{title}</h2>
          <Link href={linkHref} className="text-brand-primary font-bold hover:underline">
            View all
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar snap-x">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </Container>
    </section>
  );
};
