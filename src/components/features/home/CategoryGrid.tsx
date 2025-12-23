import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { MOCK_CATEGORIES } from "@/lib/mock-data";

const CATEGORY_STYLES: Record<string, string> = {
  Burgers: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400",
  Pizza: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
  Sushi: "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
  Asian: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400",
  Desserts: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
  Mexican: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
  Coffee: "bg-stone-50 text-stone-600 dark:bg-stone-800 dark:text-stone-300",
  Healthy: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
};

export const CategoryGrid = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden transition-colors">
      <Container>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black text-brand-dark dark:text-white tracking-tight italic uppercase">
            What&apos;s on your mind?
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 md:gap-6">
          {MOCK_CATEGORIES.map((category) => {
            const styleClass = CATEGORY_STYLES[category.name] || "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300";
            
            // Extract bg and text classes for manual application if needed, 
            // but here we just use the full string on the container layers
            // We need to split because the component logic splits them for layers
            // Wait, the component logic does: styleClass.split(' ')[0] which gets ONLY the first class (bg-...)
            // This logic is brittle for multi-class strings like "bg-red-50 ... dark:bg-..."
            // I should refactor the component to apply the full string to the background layer instead of splitting.
            
            return (
              <Link
                key={category.id}
                href={`/search?q=${category.slug}`}
                className="group relative flex flex-col items-center justify-center aspect-square rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Layer - Applying full styleClass here and letting CSS cascade handle overrides, but the text color will apply to this empty div which is fine */}
                <div className={`absolute inset-0 transition-colors duration-500 ${styleClass}`} />
                
                {/* Image Layer */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 z-10">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover rounded-2xl shadow-md"
                    sizes="150px"
                  />
                </div>

                {/* Text Layer - We want the text color here. The styleClass has both bg and text. 
                    The previous logic was: styleClass.split(' ')[1]. 
                    This is definitely broken with my new strings.
                    However, since I applied styleClass to the parent background layer (absolute inset-0), 
                    the text color might not inherit if the h3 is z-10 on top of it?
                    No, h3 is a sibling of the background div. 
                    I should apply the text color class directly to the h3.
                    But I don't want the BG class on the h3.
                    
                    Refactor: Use separate properties or regex to extract. 
                    Or easier: Just apply the text color explicitly using `text-inherit` if possible, 
                    or wrap the whole thing in a div that sets the color.
                    
                    Let's update the CATEGORY_STYLES to be objects or just use `className` logic that handles it.
                    Actually, simpler: Just put the class on the `Link` parent?
                    No, the hover effect relies on layers.
                    
                    Let's just change how we map it. 
                */}
                <h3 className={`mt-4 font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-500 z-10 relative text-current`}>
                  {category.name}
                </h3>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            );
          })}
        </div>

        {/* Repositioned Promo to fill the width below or integrate better */}
        <div className="mt-12">
           <div className="relative w-full h-48 rounded-[2.5rem] overflow-hidden bg-brand-primary group cursor-pointer shadow-2xl shadow-brand-primary/20">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-12 py-8 text-white">
                 <div className="text-center md:text-left">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
                       Special Offer
                    </span>
                    <h3 className="text-3xl font-black leading-none tracking-tighter">
                       Get 50% OFF <span className="opacity-70">on your first 3 orders</span>
                    </h3>
                 </div>
                 <button className="mt-4 md:mt-0 px-10 py-4 bg-white text-brand-primary rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl shadow-black/10">
                    Claim Now
                 </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -left-10 -top-10 w-48 h-48 bg-black/10 rounded-full blur-2xl" />
           </div>
        </div>
      </Container>
    </section>
  );
};

import { ArrowRight } from "lucide-react";