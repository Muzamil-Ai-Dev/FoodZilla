"use client";

import { useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Container } from "@/components/ui/container";
import { RestaurantList } from "@/components/features/restaurant/RestaurantList";
import { MOCK_RESTAURANTS } from "@/lib/mock-data";
import { useSearchStore } from "@/lib/store/useSearchStore";
import { Search, ArrowRight, Utensils } from "lucide-react";
import Link from "next/link";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { setQuery, setFiltering } = useSearchStore();
  const router = useRouter();

  useEffect(() => {
    setQuery(query);
    // Simulate initial loading for premium feel
    setFiltering(true);
    const timer = setTimeout(() => setFiltering(false), 500);
    return () => clearTimeout(timer);
  }, [query, setQuery, setFiltering]);

  const results = useMemo(() => {
    if (!query) return [];
    return MOCK_RESTAURANTS.filter(
      (res) =>
        res.name.toLowerCase().includes(query.toLowerCase()) ||
        res.cuisines.some((c) => c.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  const popularCuisines = ["Burgers", "Pizza", "Sushi", "Healthy", "Asian"];

  return (
    <div className="bg-white min-h-screen py-12">
      <Container>
        {/* Search Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-brand-primary font-black uppercase tracking-widest text-xs italic mb-2">
            <Search className="w-4 h-4" />
            Search Results
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight leading-none uppercase italic">
            &quot;{query}&quot;
          </h1>
          <p className="text-gray-500 font-bold mt-4 text-lg">
            {results.length} results found for your search
          </p>
        </div>

        {results.length > 0 ? (
          <RestaurantList restaurants={results} />
        ) : (
          /* Empty State */
          <div className="max-w-2xl mx-auto text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200 px-6">
            <div className="bg-white w-20 h-20 rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-8">
               <Utensils className="w-10 h-10 text-brand-primary" />
            </div>
            <h3 className="text-3xl font-black text-brand-dark mb-4">No results found</h3>
            <p className="text-gray-500 font-bold mb-10">
              We couldn&apos;t find any restaurants matching your search. Why not try one of these popular cuisines?
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {popularCuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => router.push(`/search?q=${cuisine}`)}
                  className="bg-white px-6 py-3 rounded-2xl border border-gray-200 font-black text-brand-dark hover:border-brand-primary hover:text-brand-primary transition-all flex items-center gap-2"
                >
                  {cuisine}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchResults />
    </Suspense>
  );
}
