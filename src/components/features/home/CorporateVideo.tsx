"use client";

import { Container } from "@/components/ui/container";
import { Play } from "lucide-react";
import Image from "next/image";
import { getMockImage } from "@/lib/image-utils";

export const CorporateVideo = () => {
  return (
    <section className="py-20 bg-brand-dark overflow-hidden relative">
      {/* Background Image/Video Fallback */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src={getMockImage("restaurant")}
          alt="Corporate Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Behind the Scenes at FoodZilla
          </h2>
          <p className="text-xl text-gray-300">
            See how we deliver millions of smiles every single day.
          </p>
          
          <button className="group relative inline-flex items-center justify-center w-20 h-20 bg-brand-primary rounded-full hover:scale-110 transition-transform duration-300 shadow-xl shadow-brand-primary/30">
             <Play className="w-8 h-8 text-white fill-current ml-1" />
             <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
          </button>
          
          <p className="text-sm font-bold text-brand-primary uppercase tracking-widest pt-4">
             Watch Our Story
          </p>
        </div>
      </Container>
    </section>
  );
};
