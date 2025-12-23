import Link from "next/link";
import { Container } from "@/components/ui/container";

const CUISINES = [
  { name: "American", emoji: "🍔", color: "bg-red-50 text-red-600" },
  { name: "Asian", emoji: "🥢", color: "bg-orange-50 text-orange-600" },
  { name: "Bakery", emoji: "🥐", color: "bg-amber-50 text-amber-600" },
  { name: "Beverages", emoji: "🥤", color: "bg-blue-50 text-blue-600" },
  { name: "Biryani", emoji: "🍛", color: "bg-yellow-50 text-yellow-600" },
  { name: "Burger", emoji: "🍔", color: "bg-red-50 text-red-600" },
  { name: "Chinese", emoji: "🥡", color: "bg-red-50 text-red-600" },
  { name: "Coffee", emoji: "☕", color: "bg-stone-50 text-stone-600" },
  { name: "Desserts", emoji: "🍰", color: "bg-pink-50 text-pink-600" },
  { name: "Fast Food", emoji: "🍟", color: "bg-yellow-50 text-yellow-600" },
  { name: "Healthy", emoji: "🥗", color: "bg-green-50 text-green-600" },
  { name: "Ice Cream", emoji: "🍦", color: "bg-pink-50 text-pink-600" },
  { name: "Indian", emoji: "🍲", color: "bg-orange-50 text-orange-600" },
  { name: "Italian", emoji: "🍝", color: "bg-red-50 text-red-600" },
  { name: "Japanese", emoji: "🍱", color: "bg-red-50 text-red-600" },
  { name: "Mexican", emoji: "🌮", color: "bg-yellow-50 text-yellow-600" },
  { name: "Pasta", emoji: "🍝", color: "bg-orange-50 text-orange-600" },
  { name: "Pizza", emoji: "🍕", color: "bg-orange-50 text-orange-600" },
  { name: "Salad", emoji: "🥗", color: "bg-green-50 text-green-600" },
  { name: "Sandwich", emoji: "🥪", color: "bg-yellow-50 text-yellow-600" },
  { name: "Seafood", emoji: "🦐", color: "bg-blue-50 text-blue-600" },
  { name: "Steak", emoji: "🥩", color: "bg-red-50 text-red-600" },
  { name: "Sushi", emoji: "🍣", color: "bg-orange-50 text-orange-600" },
  { name: "Thai", emoji: "🥘", color: "bg-red-50 text-red-600" }
];

export const CuisinesGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <h2 className="text-2xl font-bold text-brand-dark mb-8">Cuisines</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CUISINES.map((cuisine) => (
            <Link 
              key={cuisine.name}
              href={`/search?q=${cuisine.name}`}
              className={`p-4 rounded-xl text-center text-sm font-bold transition-all border border-transparent hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 ${cuisine.color}`}
            >
              <span className="text-lg">{cuisine.emoji}</span>
              {cuisine.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
