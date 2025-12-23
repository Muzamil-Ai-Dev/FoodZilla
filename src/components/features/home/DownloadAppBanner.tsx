import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react"; 

export const DownloadAppBanner = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter italic uppercase leading-tight">
              Put us in your <span className="text-brand-primary">pocket</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Download the app to get the best of your neighborhood delivered to your door in minutes. 
              Track your order in real-time and enjoy exclusive app-only deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
               <Button size="lg" className="bg-brand-dark text-white hover:bg-black h-16 px-8 rounded-2xl gap-4 shadow-xl hover:scale-105 transition-all">
                 <Apple className="w-7 h-7 fill-current" />
                 <div className="text-left leading-tight">
                   <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Download on the</div>
                   <div className="text-lg font-black italic uppercase">App Store</div>
                 </div>
               </Button>
               <Button size="lg" className="bg-brand-dark text-white hover:bg-black h-16 px-8 rounded-2xl gap-4 shadow-xl hover:scale-105 transition-all">
                 <Smartphone className="w-7 h-7 fill-current" />
                 <div className="text-left leading-tight">
                   <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Get it on</div>
                   <div className="text-lg font-black italic uppercase">Google Play</div>
                 </div>
               </Button>
            </div>
          </div>

          {/* Image - Refined Mobile Mockup style */}
          <div className="flex-1 relative w-full max-w-lg h-[450px] md:h-[600px]">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-3xl" />
             <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-8 border-gray-50 shadow-2xl transition-transform hover:rotate-2 duration-1000">
                <Image
                  src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800"
                  alt="App Preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent flex items-end p-12">
                   <div className="space-y-2">
                      <div className="bg-brand-primary px-3 py-1 rounded-full inline-block text-[10px] font-black uppercase tracking-widest text-white mb-2">Exclusive Deal</div>
                      <p className="text-white font-black text-3xl italic uppercase tracking-tighter">Fastest <br /> Delivery</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

