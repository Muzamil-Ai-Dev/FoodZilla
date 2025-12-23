import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/ui/button";
import { PARTNER_TESTIMONIALS } from "@/lib/marketing-data";
import { TrendingUp, Users, Clock, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function PartnerPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Your Sales",
      description: "Reach thousands of new customers and increase your daily orders by up to 300%.",
    },
    {
      icon: Users,
      title: "Reach New Customers",
      description: "Expand your customer base beyond your physical location.",
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "Our fleet of riders ensures your food arrives fresh and on time.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description: "Weekly payouts and transparent reporting on all your earnings.",
    },
  ];

  return (
    <main>
      <PageHero
        title="Partner with FoodZilla"
        subtitle="Grow your business with the most reliable delivery network."
        backgroundImage="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Why Partner With Us?</h2>
              <p className="text-lg text-gray-600">
                We provide the tools and support you need to thrive in the digital age.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
                  <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                    <benefit.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{benefit.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-dark text-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Partners Say</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PARTNER_TESTIMONIALS.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 0.2}>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.restaurant}</p>
                    </div>
                  </div>
                  <p className="text-lg italic text-gray-200">&quot;{testimonial.quote}&quot;</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-primary">
        <Container className="text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to Grow?</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 text-lg h-14 px-8">
                Register Your Restaurant
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-14 px-8">
                Contact Sales
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
