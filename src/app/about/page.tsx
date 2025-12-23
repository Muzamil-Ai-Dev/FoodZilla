import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { ContentSection } from "@/components/marketing/ContentSection";
import { TEAM_MEMBERS } from "@/lib/marketing-data";
import { FadeIn } from "@/components/ui/fade-in";
import { Clock, Leaf, Heart, Users, TrendingUp, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="pb-20">
      <PageHero
        title="We Deliver Happiness"
        subtitle="FoodZilla is on a mission to transform the way you eat, one meal at a time."
        backgroundImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Our Story */}
      <FadeIn>
        <ContentSection
          title="Our Story"
          description="Founded in 2025, FoodZilla started with a simple idea: good food should be accessible to everyone, everywhere. What began as a small project in a college dorm has grown into a global movement. We connect passionate food lovers with the best local restaurants, empowering small businesses and providing flexible opportunities for riders along the way."
          image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
          imageAlt="FoodZilla delivery rider"
        />
      </FadeIn>

      {/* Stats Section */}
      <section className="py-20 bg-brand-primary text-white">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">10M+</div>
                <div className="text-sm md:text-base font-bold uppercase tracking-widest opacity-90">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">500+</div>
                <div className="text-sm md:text-base font-bold uppercase tracking-widest opacity-90">Cities</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">50K+</div>
                <div className="text-sm md:text-base font-bold uppercase tracking-widest opacity-90">Restaurant Partners</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-black">100%</div>
                <div className="text-sm md:text-base font-bold uppercase tracking-widest opacity-90">Carbon Neutral</div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Our DNA Section */}
      <section className="py-24 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter uppercase italic">
                The FoodZilla <span className="text-brand-primary">DNA</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                We&apos;re more than just a delivery app. We are a technology company that connects people with the best of their neighborhoods.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="group bg-gray-50 rounded-[3rem] p-10 hover:bg-brand-primary transition-all duration-500 hover:-translate-y-2">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-black text-brand-dark mb-4 group-hover:text-white transition-colors uppercase italic">Hyper-Local Growth</h3>
                <p className="text-gray-500 text-lg leading-relaxed group-hover:text-white/90 transition-colors">
                  We empower local restaurants to reach new customers and grow their business online. By providing the tools and logistics, we allow them to focus on what they do best: cooking incredible food.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="group bg-gray-50 rounded-[3rem] p-10 hover:bg-brand-primary transition-all duration-500 hover:-translate-y-2">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-black text-brand-dark mb-4 group-hover:text-white transition-colors uppercase italic">Customer Obsession</h3>
                <p className="text-gray-500 text-lg leading-relaxed group-hover:text-white/90 transition-colors">
                  Every feature we build and every delivery we make is centered around the user. We strive for a seamless, joyful experience from the first click to the final bite.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Innovation & Tech Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 -skew-x-12 translate-x-1/2" />
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 space-y-8">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
                  Powered by <br />
                  <span className="text-brand-primary">Advanced Tech</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl mt-6">
                  Our proprietary dispatching algorithms and real-time mapping technology work behind the scenes to ensure the most efficient delivery routes possible.
                </p>
              </FadeIn>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <FadeIn delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                      <Award className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 italic uppercase tracking-tight">AI Logistics</h4>
                      <p className="text-sm text-gray-400">Predictive modeling for peak hour demand and courier balancing.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                      <Clock className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 italic uppercase tracking-tight">Real-time Sync</h4>
                      <p className="text-sm text-gray-400">Live order tracking and seamless communication for every stakeholder.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
            
            <div className="flex-1 relative w-full h-[400px] md:h-[600px]">
               <FadeIn delay={0.3}>
                 <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/10">
                    <Image 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                      alt="Data visualization"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                 </div>
               </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values (Moved and updated) */}
        <Container>
           <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                These principles guide every decision we make, from the code we write to the food we deliver.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-green-50 p-6 rounded-full mb-2">
                  <Leaf className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Sustainability First</h3>
                <p className="text-gray-500 leading-relaxed">
                  We are committed to reducing our carbon footprint. From eco-friendly packaging to electric delivery fleets, we care for the planet as much as we care for your palate.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-orange-50 p-6 rounded-full mb-2">
                  <Clock className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Lightning Fast</h3>
                <p className="text-gray-500 leading-relaxed">
                  Time is precious. Our advanced logistics algorithms ensure your food arrives hot and fresh, exactly when you expect it. No excuses.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-50 p-6 rounded-full mb-2">
                  <Heart className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Community Love</h3>
                <p className="text-gray-500 leading-relaxed">
                  We champion local businesses. By partnering with neighborhood gems, we help them thrive in the digital age while bringing you authentic flavors.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Our Mission (Existing) */}
      <FadeIn>
        <ContentSection
          title="Our Mission"
          description="To create a world where eating well is effortless. We believe in speed, quality, and sustainability. That's why we're committed to 100% carbon-neutral deliveries by 2028."
          image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
          imageAlt="Sustainable food packaging"
          reverse
        />
      </FadeIn>

      {/* Team Section (Existing) */}
      <section className="py-24 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Meet Our Leaders</h2>
              <p className="text-lg text-gray-600">
                The passionate team behind the revolution in food delivery.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <FadeIn key={member.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-brand-dark mb-1">{member.name}</h3>
                    <p className="text-brand-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <Container>
           <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
             <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="relative z-10 max-w-2xl mx-auto space-y-8">
               <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                 Ready to Join the Revolution?
               </h2>
               <p className="text-xl text-gray-300">
                 Whether you're a foodie, a rider, or a restaurant owner, there's a place for you at FoodZilla.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/careers">
                    <Button size="lg" className="h-14 px-8 text-lg bg-white text-brand-dark hover:bg-gray-100 border-none">
                      Join Our Team
                    </Button>
                  </Link>
                  <Link href="/partner-with-us">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 text-white border-white hover:bg-white/10 hover:text-white">
                      Partner With Us
                    </Button>
                  </Link>
               </div>
             </div>
           </div>
        </Container>
      </section>
    </main>
  );
}
