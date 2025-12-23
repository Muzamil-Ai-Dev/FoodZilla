"use client";

import { useState, useEffect } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useUIStore } from "@/lib/store/useUIStore";
import { useLocationStore } from "@/lib/store/useLocationStore";
import { getMockImage } from "@/lib/image-utils";

export const Hero = () => {
  const setLocationModalOpen = useUIStore((state) => state.setLocationModalOpen);
  const currentLocation = useLocationStore((state) => state.currentLocation);

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster={getMockImage("video_fallback")}
          preload="none"
        >
          {/* Using a lighter HD version instead of UHD if possible, but keeping original for now with better loading strategy */}
          <source src="https://videos.pexels.com/video-files/2928892/2928892-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          <Image
            src={getMockImage("video_fallback")}
            alt="Hero background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </video>
      </div>

      <Container className="relative z-20 text-white w-full py-12 md:py-0">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 md:mb-6 leading-tight uppercase italic tracking-tighter">
            It&apos;s the food you love, <br />
            <span className="text-brand-primary">delivered.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-gray-200 font-bold max-w-xl">
            Order from the best local restaurants with the fastest delivery service in town.
          </p>

          <div className="bg-white p-1.5 md:p-2 rounded-[1.5rem] md:rounded-full shadow-2xl flex flex-col md:flex-row gap-2 max-w-2xl relative z-30">
            <button
              onClick={() => setLocationModalOpen(true)}
              className="flex-1 flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 text-brand-dark hover:bg-gray-50 transition-colors text-left rounded-xl md:rounded-full group min-w-0"
            >
              <div className="bg-brand-primary/10 p-2 rounded-full flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1 overflow-hidden">
                 <span className="text-[9px] font-black block text-gray-400 uppercase tracking-widest leading-none mb-1">
                    Delivery Address
                 </span>
                 <span 
                   suppressHydrationWarning
                   className="block truncate font-bold text-brand-dark text-sm md:text-base"
                 >
                   {currentLocation?.address || "Enter your delivery address"}
                 </span>
              </div>
            </button>
            
            <Button 
              size="lg" 
              className="h-12 md:h-auto py-3 md:py-2 px-8 md:px-10 rounded-xl md:rounded-full text-base md:text-lg font-black uppercase tracking-widest italic shadow-lg active:scale-95 transition-all"
              onClick={() => setLocationModalOpen(true)}
            >
              Find Food
              <ChevronRight className="ml-2 w-5 h-5 stroke-[3px]" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
