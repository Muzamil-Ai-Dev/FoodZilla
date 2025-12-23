import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react"; // Mock icons for stores
import { getMockImage } from "@/lib/image-utils";

export const DownloadAppBanner = () => {
  return (
    <section className="py-20 bg-brand-secondary/50 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
              Put us in your pocket
            </h2>
            <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Download the App. It&apos;s the fastest way to order food on the go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
               <Button size="lg" className="bg-black text-white hover:bg-gray-800 h-14 md:h-16 px-6 rounded-2xl gap-3 w-full sm:w-auto">
                 <Apple className="w-6 h-6 fill-current flex-shrink-0" />
                 <div className="text-left leading-tight">
                   <div className="text-[10px] font-black uppercase tracking-widest opacity-70">Download on the</div>
                   <div className="text-base md:text-lg font-black italic">App Store</div>
                 </div>
               </Button>
               <Button size="lg" className="bg-black text-white hover:bg-gray-800 h-14 md:h-16 px-6 rounded-2xl gap-3 w-full sm:w-auto">
                 <Smartphone className="w-6 h-6 fill-current flex-shrink-0" />
                 <div className="text-left leading-tight">
                   <div className="text-[10px] font-black uppercase tracking-widest opacity-70">Get it on</div>
                   <div className="text-base md:text-lg font-black italic">Google Play</div>
                 </div>
               </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative w-full max-w-sm h-[350px] md:h-[500px]">
             <div className="absolute inset-0 bg-brand-primary/10 rounded-[3rem] transform -rotate-6 scale-90" />
             <div className="relative h-full w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl transition-transform hover:scale-105 duration-700">
                <Image
                  src={getMockImage("sushi")}
                  alt="App Preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-10">
                   <p className="text-white font-black text-xl md:text-2xl italic uppercase tracking-tighter">Order with 1-Tap</p>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
