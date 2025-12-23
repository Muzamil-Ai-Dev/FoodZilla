import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/ui/button";
import { ContentSection } from "@/components/marketing/ContentSection";
import { FadeIn } from "@/components/ui/fade-in";
import { BarChart3, Target, MousePointer2, Megaphone, CheckCircle2, ArrowRight, Smartphone, Zap, Percent, TrendingUp } from "lucide-react";

export default function ZillaAdsPage() {
  const adTypes = [
    {
      icon: Target,
      title: "Sponsored Listings",
      description: "Appear at the top of search results and category listings to capture high-intent customers."
    },
    {
      icon: Megaphone,
      title: "Banner Ads",
      description: "High-impact visual banners on the home screen for maximum brand awareness."
    },
    {
      icon: Percent,
      title: "Deals & Vouchers",
      description: "Drive conversion with exclusive discounts and limited-time voucher codes."
    },
    {
      icon: MousePointer2,
      title: "Cuisine Highlights",
      description: "Feature your restaurant in specific cuisine categories to reach niche audiences."
    }
  ];

  return (
    <main className="pb-20">
      <PageHero
        title="Zilla Ads"
        subtitle="Accelerate your growth with targeted advertising on FoodZilla."
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white text-center">
        <Container>
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 uppercase italic tracking-tighter">Be Seen by Hungry Customers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 font-medium">
              Put your restaurant in front of millions of active users. Our intelligent algorithms ensure your brand reaches the right people at the right time.
            </p>
            <div className="relative w-full h-[300px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 group">
               <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                  alt="FoodZilla Ads Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                  unoptimized
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-end justify-center p-12">
                  <div className="text-white space-y-4">
                    <div className="bg-brand-primary p-3 rounded-2xl inline-block mb-2">
                       <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase italic">Real-Time Performance Tracking</h3>
                    <p className="text-gray-300 max-w-xl mx-auto">Monitor clicks, conversions, and ROI through our intuitive Zilla Ads dashboard.</p>
                  </div>
               </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Ad Types Grid */}
      <section className="py-24 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 uppercase italic tracking-tighter">Our Ad Solutions</h2>
              <p className="text-lg text-gray-600 font-medium">Choose the format that best fits your marketing goals and budget.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adTypes.map((type, index) => (
              <FadeIn key={index} delay={index * 0.1} className="h-full">
                <div className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group h-full flex flex-col">
                  <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500">
                    <type.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase italic">{type.title}</h3>
                  <p className="text-gray-500 leading-relaxed flex-1 font-medium">{type.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Content Sections */}
      <FadeIn>
        <ContentSection
          title="Sponsored Listings"
          description="Boost your restaurant to the top of search results. When customers search for cuisine like yours, make sure you&apos;re the first thing they see. High visibility leads to immediate orders."
          image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          imageAlt="Mobile app search results"
        />
      </FadeIn>

      <FadeIn>
        <ContentSection
          title="Banner Ads"
          description="Capture attention with beautiful, high-impact banner ads on the home screen. Perfect for launching new menu items, special holiday promotions, or seasonal deals."
          image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
          imageAlt="Banner ad example"
          reverse
        />
      </FadeIn>

      {/* How it Works */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-10">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
                  Simple Steps to <br />
                  <span className="text-brand-primary">Start Growing</span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                  Getting started with Zilla Ads is quick and easy. Our team is here to help you every step of the way.
                </p>
              </FadeIn>

              <div className="space-y-8">
                <FadeIn delay={0.1}>
                  <div className="flex items-start gap-6">
                    <div className="bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-xl uppercase italic">Set Your Goals</h4>
                      <p className="text-gray-500 font-medium">Decide whether you want more orders, new customers, or brand awareness.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="flex items-start gap-6">
                    <div className="bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-xl uppercase italic">Choose Your Ad Format</h4>
                      <p className="text-gray-500 font-medium">Select from sponsored listings, banners, or custom vouchers.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="flex items-start gap-6">
                    <div className="bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-xl uppercase italic">Launch Your Campaign</h4>
                      <p className="text-gray-500 font-medium">Set your budget and go live. Your ads will start showing instantly.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            <div className="flex-1 relative w-full h-[500px] md:h-[600px]">
               <FadeIn delay={0.4} className="h-full">
                 <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
                    <Image 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                      alt="Advertising Analytics Dashboard"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      priority
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                    
                    {/* Floating Conversion Card */}
                    <div className="absolute bottom-10 left-10 right-10 bg-brand-dark/90 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl animate-in slide-in-from-bottom-10 duration-700">
                       <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                             <div className="bg-brand-primary p-2 rounded-xl">
                                <Zap className="w-5 h-5 text-white" />
                             </div>
                             <span className="font-black text-white uppercase tracking-widest text-xs">Ad Performance</span>
                          </div>
                          <span className="text-green-400 font-black text-xs uppercase tracking-widest">Active Now</span>
                       </div>
                       <div className="grid grid-cols-2 gap-8">
                          <div>
                             <div className="text-3xl font-black text-white">4.8x</div>
                             <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">Average ROI</div>
                          </div>
                          <div>
                             <div className="text-3xl font-black text-brand-primary">+320%</div>
                             <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">Customer Reach</div>
                          </div>
                       </div>
                    </div>
                 </div>
               </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <Container className="text-center">
          <FadeIn>
            <div className="max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 uppercase italic tracking-tighter">Simple Pricing</h2>
              <p className="text-lg text-gray-600 font-medium">Flexible plans designed to scale with your business.</p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <FadeIn delay={0.1} className="h-full">
               <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-xl transition-all duration-500">
                  <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase italic">Starter</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-black text-brand-primary">$50</span>
                    <span className="text-lg text-gray-400 font-bold uppercase ml-2">/mo</span>
                  </div>
                  <ul className="text-left space-y-5 text-gray-600 mb-10 flex-1 font-medium">
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-primary" /> Top of Category Results</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-primary" /> Basic Analytics</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-primary" /> Email Support</li>
                  </ul>
                  <Button className="w-full h-14 rounded-2xl font-black uppercase italic tracking-widest bg-brand-dark hover:bg-black text-white">Get Started</Button>
               </div>
             </FadeIn>
             
             <FadeIn delay={0.2} className="h-full">
               <div className="bg-brand-primary text-white p-12 rounded-[3rem] shadow-2xl shadow-brand-primary/30 transform scale-105 relative h-full flex flex-col border-4 border-white/20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase italic">Growth</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-black">$150</span>
                    <span className="text-lg opacity-80 font-bold uppercase ml-2">/mo</span>
                  </div>
                  <ul className="text-left space-y-5 mb-10 flex-1 font-medium">
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> Top of Search Results</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> Advanced Analytics</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> Priority Support</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> $50 Ad Credit</li>
                  </ul>
                  <Button className="w-full h-14 rounded-2xl font-black uppercase italic tracking-widest bg-white text-brand-primary hover:bg-gray-100 border-none shadow-xl">Get Started</Button>
               </div>
             </FadeIn>
             
             <FadeIn delay={0.3} className="h-full">
               <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-xl transition-all duration-500">
                  <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase italic">Enterprise</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-black text-brand-primary italic uppercase">Custom</span>
                  </div>
                  <ul className="text-left space-y-5 text-gray-600 mb-10 flex-1 font-medium">
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-primary" /> Homepage Banner</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-primary" /> Account Manager</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-primary" /> Custom Reporting</li>
                     <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-primary" /> Multi-City Support</li>
                  </ul>
                  <Button variant="outline" className="w-full h-14 rounded-2xl font-black uppercase italic tracking-widest border-2">Contact Sales</Button>
               </div>
             </FadeIn>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <Container>
           <div className="bg-brand-dark rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="relative z-10 max-w-3xl mx-auto space-y-10">
               <div className="inline-block p-4 bg-brand-primary/20 rounded-3xl mb-4">
                  <Zap className="w-12 h-12 text-brand-primary" />
               </div>
               <h2 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase italic tracking-tighter">
                 Start Your Growth <br /> Story Today
               </h2>
               <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
                 Join thousands of restaurants who have grown their revenue by over 40% using Zilla Ads. No long-term contracts, cancel anytime.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                  <Button size="lg" className="h-16 px-12 text-xl bg-brand-primary text-white hover:bg-brand-primary/90 rounded-2xl font-black uppercase italic tracking-widest shadow-2xl shadow-brand-primary/20">
                    Get Started Now
                  </Button>
                  <Button size="lg" variant="outline" className="h-16 px-12 text-xl border-2 text-white border-white hover:bg-white/10 hover:text-white rounded-2xl font-black uppercase italic tracking-widest">
                    Request Demo
                  </Button>
               </div>
             </div>
           </div>
        </Container>
      </section>
    </main>
  );
}
