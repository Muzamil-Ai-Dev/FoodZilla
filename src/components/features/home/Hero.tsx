"use client";

import { MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useUIStore } from "@/lib/store/useUIStore";
import { useLocationStore } from "@/lib/store/useLocationStore";

export const Hero = () => {
  const setLocationModalOpen = useUIStore((state) => state.setLocationModalOpen);
  const currentLocation = useLocationStore((state) => state.currentLocation);

  return (
    <section className="relative h-[500px] md:h-[650px] flex items-center overflow-hidden bg-gray-50">
      {/* Background Image - Clean and Minimal */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000"
          alt="Hero background"
          fill
          priority
          className="object-cover opacity-90"
          sizes="100vw"
          unoptimized
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent z-10" />
      </div>

      <Container className="relative z-20 w-full py-12 md:py-0">
        <div className="max-w-2xl bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/20">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-brand-dark uppercase italic tracking-tighter">
            It&apos;s the food you love, <br />
            <span className="text-brand-primary">delivered.</span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-2">Enter your delivery address</p>
            <div className="bg-gray-50 p-2 rounded-2xl flex flex-col md:flex-row gap-3 border border-gray-100">
              <button
                onClick={() => setLocationModalOpen(true)}
                className="flex-1 flex items-center gap-4 px-6 py-4 text-brand-dark hover:bg-white transition-all text-left rounded-xl group min-w-0"
              >
                <div className="bg-brand-primary/10 p-2 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <span 
                    suppressHydrationWarning
                    className="block truncate font-bold text-brand-dark text-lg"
                  >
                    {currentLocation?.address || "Enter your delivery address"}
                  </span>
                </div>
              </button>
              
              <Button 
                size="lg" 
                className="h-16 px-10 rounded-xl text-lg font-black uppercase tracking-widest italic shadow-xl shadow-brand-primary/20 hover:scale-105 transition-all"
                onClick={() => setLocationModalOpen(true)}
              >
                Find Food
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

