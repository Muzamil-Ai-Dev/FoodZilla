import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import { getMockImage } from "@/lib/image-utils";

const DEALS = [
  {
    id: 1,
    title: "50% OFF First Order",
    description: "Use code: WELCOME50",
    image: getMockImage("burger"),
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Free Delivery",
    description: "On all orders above $20",
    image: getMockImage("pizza"),
    color: "bg-gradient-to-br from-brand-primary to-pink-600",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Family Meal Deal",
    description: "Burgers, Fries & Drinks",
    image: getMockImage("restaurant"),
    color: "bg-gradient-to-br from-gray-800 to-brand-dark",
    textColor: "text-white",
  },
];

export const DealsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors">
      <Container>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark dark:text-white">Your Daily Deals</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Handpicked discounts just for you</p>
          </div>
          <Link href="/offers" className="text-brand-primary font-bold flex items-center gap-2 group">
            See all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEALS.map((deal) => (
            <div 
              key={deal.id} 
              className={`relative overflow-hidden rounded-[2.5rem] p-8 h-64 md:h-72 flex flex-col justify-center ${deal.color} group cursor-pointer shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`}
            >
              <div className="relative z-10 max-w-[65%]">
                <h3 className={`text-3xl font-black mb-3 ${deal.textColor} leading-tight tracking-tight`}>
                  {deal.title}
                </h3>
                <p className={`font-bold opacity-90 mb-8 ${deal.textColor}`}>{deal.description}</p>
                <span className="inline-block px-6 py-2.5 bg-white text-brand-dark rounded-full text-sm font-black shadow-lg uppercase tracking-wider hover:bg-brand-primary hover:text-white transition-colors">
                  Claim
                </span>
              </div>
              
              <div className="absolute -right-12 -bottom-12 w-56 h-56 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                <div className="relative w-full h-full">
                   <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
                   <Image
                     src={deal.image}
                     alt={deal.title}
                     fill
                     className="object-cover rounded-full border-8 border-white/10"
                     sizes="250px"
                   />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};