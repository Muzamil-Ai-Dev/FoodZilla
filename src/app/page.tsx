import { Hero } from "@/components/features/home/Hero";
import { DownloadAppBanner } from "@/components/features/home/DownloadAppBanner";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";
import Link from "next/link";
import { Globe, Utensils, Smartphone, Building2, CheckCircle2 } from "lucide-react";

export default function Home() {
  const cities = [
    "Islamabad", "Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", 
    "Hyderabad", "Gujranwala", "Peshawar", "Quetta", "Sargodha", "Sialkot",
    "Bahawalpur", "Sukkur", "Jhang", "Sheikhupura", "Larkana", "Gujrat",
    "Mardan", "Kasur", "Rahim Yar Khan", "Sahiwal", "Okara", "Wah Cantonment"
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* 1. Hero Section (Location Search) */}
      <Hero />
      
      {/* 2. Restaurant Partner Section */}
      <section className="py-24 bg-white overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="flex-1 space-y-8 order-2 lg:order-1">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter italic uppercase leading-none">
                  You prepare the food, <br />
                  <span className="text-brand-primary">we handle the rest</span>
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                  Want to grow your business? Partner with FoodZilla to reach more customers than ever before. We handle the logistics so you can focus on your craft.
                </p>
                <Link href="/partner-with-us">
                   <button className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest text-sm hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1 mt-4">
                      Get Started
                   </button>
                </Link>
              </FadeIn>
            </div>
            <div className="flex-1 relative w-full h-[400px] md:h-[600px] order-1 lg:order-2">
               <FadeIn delay={0.2} className="h-full">
                 <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-gray-100 group">
                    <Image 
                      src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200"
                      alt="Restaurant Partner"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      unoptimized
                    />
                 </div>
               </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Cities Section */}
      <section className="py-24 bg-gray-50">
        <Container>
           <FadeIn>
             <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-16 italic uppercase tracking-tighter text-center">
                Find us in these <span className="text-brand-primary">cities</span> and many more!
             </h2>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {cities.map((city) => (
                  <Link 
                    key={city} 
                    href={`/search?city=${city.toLowerCase()}`}
                    className="group flex flex-col items-center p-8 rounded-[3rem] bg-white hover:bg-brand-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                  >
                     <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                        <Globe className="w-7 h-7 text-brand-primary" />
                     </div>
                     <span className="font-black text-brand-dark group-hover:text-white transition-colors text-center uppercase italic text-sm tracking-tight">{city}</span>
                  </Link>
                ))}
             </div>
           </FadeIn>
        </Container>
      </section>

      {/* 4. Corporate Section */}
      <section className="py-24 bg-white overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="flex-1 relative w-full h-[400px] md:h-[600px]">
               <FadeIn delay={0.2} className="h-full">
                 <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-gray-100 group">
                    <Image 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                      alt="FoodZilla for Business"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      unoptimized
                    />
                 </div>
               </FadeIn>
            </div>
            <div className="flex-1 space-y-8">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter italic uppercase leading-none">
                  FoodZilla for <br />
                  <span className="text-brand-primary">business</span>
                </h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                  Order meals for your team or stock up your office pantry. We offer tailored solutions for companies of all sizes.
                </p>
                <Link href="/contact">
                   <button className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest text-sm hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1 mt-4">
                      Contact Us
                   </button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. App Download (Large Section) */}
      <div className="bg-brand-primary/5">
        <DownloadAppBanner />
      </div>

      {/* 6. Final SEO Text Section (Like foodpanda footer content) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <Container>
           <FadeIn>
              <div className="prose prose-lg max-w-none text-gray-500 font-medium leading-relaxed">
                 <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-10 uppercase italic tracking-tight">Order food and more online from the best restaurants and shops on FoodZilla</h2>
                 <p className="mb-8 text-lg">
                    Are you hungry? Did you have a long and stressful day? Surprised by a healthy appetite? 
                    Don&apos;t worry, FoodZilla is here to help! Whether you&apos;re in the mood for a classic burger, 
                    authentic sushi, or a fresh salad, we connect you with the best restaurants in your city.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
                    <div className="space-y-4">
                       <h3 className="text-2xl font-black text-brand-dark uppercase italic flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                          Fastest delivery
                       </h3>
                       <p>We pride ourselves on our lightning-fast delivery times. Our optimized dispatching system ensures your food arrives hot and fresh, exactly when you expect it.</p>
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-2xl font-black text-brand-dark uppercase italic flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                          The best restaurants
                       </h3>
                       <p>We partner with only the top-rated restaurants in your neighborhood. From local hidden gems to your favorite international chains, quality is our priority.</p>
                    </div>
                 </div>
              </div>
           </FadeIn>
        </Container>
      </section>
    </div>
  );
}