"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

interface NavProps {
  categories: { id: string; name: string }[];
}

export const MenuNavigation = ({ categories }: NavProps) => {
  const categoryIds = categories.map(c => c.id);
  const activeId = useIntersectionObserver(categoryIds);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="sticky top-12 md:top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 md:py-4 shadow-sm">
      <Container>
        <div 
          ref={scrollRef}
          className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar relative"
        >
          {categories.map((cat) => {
            const isActive = activeId === cat.id;
            
            return (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={cn(
                  "relative text-sm font-black uppercase tracking-widest transition-all whitespace-nowrap pb-2",
                  isActive ? "text-brand-primary" : "text-gray-400 hover:text-brand-dark"
                )}
              >
                {cat.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-primary rounded-full animate-in fade-in zoom-in duration-300" />
                )}
              </button>
            );
          })}
        </div>
      </Container>
    </nav>
  );
};
