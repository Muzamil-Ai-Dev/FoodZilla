import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { JobCard } from "@/components/marketing/JobCard";
import { JOBS } from "@/lib/marketing-data";
import { Coffee, Globe, Heart, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function CareersPage() {
  const perks = [
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere in the world. We believe in output, not hours.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness stipends for you and your family.",
    },
    {
      icon: Zap,
      title: "Fast-Paced Growth",
      description: "Join a rocket ship. We're growing fast and offer plenty of opportunities to level up.",
    },
    {
      icon: Coffee,
      title: "Team Retreats",
      description: "We meet up twice a year in amazing locations to bond and strategize.",
    },
  ];

  const engineeringJobs = JOBS.filter(job => job.department === "Engineering");
  const otherJobs = JOBS.filter(job => job.department !== "Engineering");

  return (
    <main>
      <PageHero
        title="Join Our Team"
        subtitle="Build the future of food delivery with us."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Perks */}
      <section className="py-24 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Why FoodZilla?</h2>
              <p className="text-lg text-gray-600">
                We&apos;re building a company where people can do their best work.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                  <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <perk.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{perk.title}</h3>
                  <p className="text-gray-500">{perk.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-gray-50">
        <Container>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">Open Positions</h2>
          </FadeIn>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-brand-primary rounded-full"></span>
                  Engineering
                </h3>
                <div className="space-y-4">
                  {engineeringJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-brand-secondary rounded-full"></span>
                  Product & Operations
                </h3>
                <div className="space-y-4">
                  {otherJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
