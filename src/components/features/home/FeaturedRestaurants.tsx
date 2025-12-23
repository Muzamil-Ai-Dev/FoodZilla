import Link from "next/link";
import Image from "next/image";
import { Star, Clock, Bike } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MOCK_RESTAURANTS } from "@/lib/mock-data";
import { Restaurant } from "@/lib/types";

export const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <Link 
      href={`/restaurant/${restaurant.slug}`}
      className="group block"
    >
      <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-5 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {restaurant.isPromoted && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.1em] px-3 py-1.5 rounded-full text-brand-dark z-10 shadow-sm">
            Promoted
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-brand-primary text-white text-[11px] font-black px-3 py-1.5 rounded-full z-10 shadow-lg">
          {restaurant.deliveryTime}
        </div>
      </div>

      <div className="space-y-2 px-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-black text-xl text-brand-dark truncate leading-none">{restaurant.name}</h3>
          <div className="flex items-center gap-1 bg-brand-primary/10 px-2 py-1 rounded-lg text-brand-primary font-black text-sm">
            <Star className="w-3.5 h-3.5 fill-current" />
            {restaurant.rating}
          </div>
        </div>
        
        <p className="text-sm font-bold text-gray-400 truncate uppercase tracking-wide">
          {restaurant.cuisines.join(" • ")}
        </p>

        <div className="flex items-center gap-5 text-sm font-bold text-gray-500 pt-1">
          <div className="flex items-center gap-1.5">
            <Bike className="w-4 h-4 text-brand-primary" />
            <span className="text-brand-dark">${restaurant.deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const FeaturedRestaurants = () => {
  return (
    <section className="py-16 bg-brand-secondary/30">
      <Container>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark">Featured Restaurants</h2>
            <p className="text-gray-500 mt-1">Discover the best local favorites</p>
          </div>
          <Link href="/restaurants" className="text-brand-primary font-bold hover:underline">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {MOCK_RESTAURANTS.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </Container>
    </section>
  );
};
