import { Hero } from "@/components/features/home/Hero";
import { CategoryGrid } from "@/components/features/home/CategoryGrid";
import { FeaturedRestaurants } from "@/components/features/home/FeaturedRestaurants";
import { DealsSection } from "@/components/features/home/DealsSection";
import { DownloadAppBanner } from "@/components/features/home/DownloadAppBanner";
import { RestaurantRow } from "@/components/features/home/RestaurantRow";
import { CuisinesGrid } from "@/components/features/home/CuisinesGrid";
import { CorporateVideo } from "@/components/features/home/CorporateVideo";
import { MOCK_RESTAURANTS } from "@/lib/mock-data";

export default function Home() {
  // Split mock data for variety
  const newArrivals = [...MOCK_RESTAURANTS].reverse().slice(0, 8);
  const popularNearYou = MOCK_RESTAURANTS.slice(0, 8);

  return (
    <div className="flex flex-col bg-white">
      <Hero />
      
      {/* 1. Daily Deals */}
      <DealsSection />
      
      {/* 2. Visual Categories */}
      <CategoryGrid />
      
      {/* 3. Horizontal Scroll: Popular */}
      <RestaurantRow title="Popular Near You" restaurants={popularNearYou} />
      
      {/* 4. Horizontal Scroll: New Arrivals */}
      <RestaurantRow title="New Arrivals" restaurants={newArrivals} />
      
      {/* 5. Cuisines Text Grid (SEO/Quick Links) */}
      <CuisinesGrid />
      
      {/* 6. Main Grid: Featured (All) */}
      <FeaturedRestaurants />
      
      {/* 7. App Banner */}
      <DownloadAppBanner />

      {/* 8. Corporate Video */}
      <CorporateVideo />
      
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
           <h2 className="text-4xl font-bold mb-6 text-brand-dark">Partner with FoodZilla</h2>
           <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
             Join thousands of restaurants and stores that are growing their businesses with us.
           </p>
           <button className="bg-brand-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1">
             Get Started
           </button>
        </div>
      </section>
    </div>
  );
}