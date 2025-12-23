import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/ui/button";
import { ContentSection } from "@/components/marketing/ContentSection";
import { FadeIn } from "@/components/ui/fade-in";

export default function ZillaAdsPage() {
  return (
    <main>
      <PageHero
        title="Zilla Ads"
        subtitle="Accelerate your growth with targeted advertising on FoodZilla."
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20 bg-white text-center">
        <Container>
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">Be Seen by Hungry Customers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Get top placement in search results and category pages. Pay only when customers click on your ad.
            </p>
            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
               <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                  alt="FoodZilla Ads Dashboard"
                  fill
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8">
                  <p className="text-white text-lg font-medium">Intuitive Dashboard to Track Performance</p>
               </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <FadeIn>
        <ContentSection
          title="Sponsored Listings"
          description="Boost your restaurant to the top of search results. When customers search for cuisine like yours, make sure you're the first thing they see."
          image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          imageAlt="Mobile app search results"
        />
      </FadeIn>

      <FadeIn>
        <ContentSection
          title="Banner Ads"
          description="Capture attention with beautiful banner ads on the home screen. Perfect for launching new menu items or special promotions."
          image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
          imageAlt="Banner ad example"
          reverse
        />
      </FadeIn>

      <section className="py-24 bg-gray-50">
        <Container className="text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12">Simple Pricing</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <FadeIn delay={0.1} className="h-full">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4">Starter</h3>
                  <p className="text-4xl font-black text-brand-primary mb-6">$50<span className="text-base text-gray-400 font-normal">/mo</span></p>
                  <ul className="text-left space-y-4 text-gray-600 mb-8 flex-1">
                     <li>✓ Top of Category Results</li>
                     <li>✓ Basic Analytics</li>
                     <li>✓ Email Support</li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
               </div>
             </FadeIn>
             <FadeIn delay={0.2} className="h-full">
               <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-xl border border-brand-dark transform scale-105 relative h-full flex flex-col">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold mb-4">Growth</h3>
                  <p className="text-4xl font-black text-brand-primary mb-6">$150<span className="text-base text-gray-400 font-normal">/mo</span></p>
                  <ul className="text-left space-y-4 text-gray-300 mb-8 flex-1">
                     <li>✓ Top of Search Results</li>
                     <li>✓ Advanced Analytics</li>
                     <li>✓ Priority Support</li>
                     <li>✓ $50 Ad Credit</li>
                  </ul>
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90">Get Started</Button>
               </div>
             </FadeIn>
             <FadeIn delay={0.3} className="h-full">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4">Enterprise</h3>
                  <p className="text-4xl font-black text-brand-primary mb-6">Custom</p>
                  <ul className="text-left space-y-4 text-gray-600 mb-8 flex-1">
                     <li>✓ Homepage Banner</li>
                     <li>✓ Dedicated Account Manager</li>
                     <li>✓ Custom Reporting</li>
                  </ul>
                  <Button variant="outline" className="w-full">Contact Sales</Button>
               </div>
             </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
