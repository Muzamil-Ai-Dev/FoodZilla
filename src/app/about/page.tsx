import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { ContentSection } from "@/components/marketing/ContentSection";
import { TEAM_MEMBERS } from "@/lib/marketing-data";
import { FadeIn } from "@/components/ui/fade-in";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="We Deliver Happiness"
        subtitle="FoodZilla is on a mission to transform the way you eat."
        backgroundImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000"
      />

      <FadeIn>
        <ContentSection
          title="Our Story"
          description="Founded in 2025, FoodZilla started with a simple idea: good food should be accessible to everyone, everywhere. We connect food lovers with the best local restaurants, empowering small businesses and riders along the way."
          image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
          imageAlt="FoodZilla delivery rider"
        />
      </FadeIn>

      <section className="py-20 bg-gray-50">
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
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
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

      <FadeIn>
        <ContentSection
          title="Our Mission"
          description="To create a world where eating well is effortless. We believe in speed, quality, and sustainability. That's why we're committed to 100% carbon-neutral deliveries by 2028."
          image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
          imageAlt="Sustainable food packaging"
          reverse
        />
      </FadeIn>
    </main>
  );
}
