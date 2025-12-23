import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { JobCard } from "@/components/marketing/JobCard";
import { JOBS } from "@/lib/marketing-data";
import { Coffee, Globe, Heart, Zap, Target, Users, Award, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

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

  const steps = [
    {
      title: "Application Review",
      description: "Our talent team reviews your profile to see if there's a match."
    },
    {
      title: "Initial Chat",
      description: "A 30-minute call to discuss your experience and our culture."
    },
    {
      title: "Technical/Role Assessment",
      description: "Show us your skills through a project or a deep-dive interview."
    },
    {
      title: "Final Rounds",
      description: "Meet the broader team and our leadership."
    }
  ];

  const engineeringJobs = JOBS.filter(job => job.department === "Engineering");
  const otherJobs = JOBS.filter(job => job.department !== "Engineering");

  return (
    <main className="pb-20">
      <PageHero
        title="Join the Revolution"
        subtitle="We're on a mission to transform how the world eats. Are you ready to build the future?"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-black text-brand-dark uppercase italic tracking-tighter leading-none">
                  Building the <br />
                  <span className="text-brand-primary">Ultimate Food App</span>
                </h2>
                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                  FoodZilla isn&apos;t just about delivery. We&apos;re a team of engineers, designers, and foodies building a global logistics engine. Join a culture that values speed, innovation, and customer obsession.
                </p>
                <div className="flex gap-8 pt-4">
                   <div>
                      <div className="text-4xl font-black text-brand-primary">500+</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Global Team</div>
                   </div>
                   <div>
                      <div className="text-4xl font-black text-brand-primary">20+</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Nationalities</div>
                   </div>
                   <div>
                      <div className="text-4xl font-black text-brand-primary">100%</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Remote-First</div>
                   </div>
                </div>
              </FadeIn>
            </div>
            <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
               <FadeIn delay={0.2} className="h-full">
                 <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-2xl border-8 border-gray-50 group">
                    <Image 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                      alt="Our team collaborating"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      priority
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                 </div>
               </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Perks Section (Modernized) */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
                Life at <span className="text-brand-primary">FoodZilla</span>
              </h2>
              <p className="text-lg text-gray-400 font-medium">
                We provide the resources and environment you need to thrive personally and professionally.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-brand-primary transition-all duration-500 group h-full flex flex-col hover:-translate-y-2">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <perk.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase italic">{perk.title}</h3>
                  <p className="text-gray-400 group-hover:text-white/80 transition-colors flex-1 font-medium">{perk.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Interview Process Section */}
      <section className="py-24 bg-white">
        <Container>
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 order-2 lg:order-1 relative w-full h-[500px]">
                 <FadeIn delay={0.2} className="h-full">
                    <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-gray-100 group">
                       <Image 
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                          alt="Hiring at FoodZilla"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-1000"
                          priority
                          unoptimized
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 via-transparent to-transparent" />
                    </div>
                 </FadeIn>
              </div>
              <div className="flex-1 order-1 lg:order-2 space-y-10">
                 <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase italic tracking-tighter">
                       How We <span className="text-brand-primary">Hire</span>
                    </h2>
                    <p className="text-lg text-gray-600 font-medium">
                       We value transparency and candidate experience. Here&apos;s a typical journey through our hiring pipeline.
                    </p>
                 </FadeIn>

                 <div className="space-y-8">
                    {steps.map((step, i) => (
                       <FadeIn key={i} delay={i * 0.1}>
                          <div className="flex items-start gap-6">
                             <div className="bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0">{i + 1}</div>
                             <div>
                                <h4 className="font-bold text-xl uppercase italic text-brand-dark">{step.title}</h4>
                                <p className="text-gray-500 font-medium">{step.description}</p>
                             </div>
                          </div>
                       </FadeIn>
                    ))}
                 </div>
              </div>
           </div>
        </Container>
      </section>

      {/* Open Roles (Modernized) */}
      <section className="py-24 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase italic tracking-tighter">Open Positions</h2>
              <p className="text-lg text-gray-600 font-medium">Join us in the next phase of our journey. Select a department to view available roles.</p>
            </div>
          </FadeIn>
          
          <div className="max-w-4xl mx-auto space-y-20">
            <FadeIn delay={0.2}>
              <div>
                <div className="flex items-center justify-between mb-8 border-b-4 border-brand-primary pb-4">
                  <h3 className="text-3xl font-black text-brand-dark uppercase italic tracking-tight">Engineering</h3>
                  <span className="bg-brand-primary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{engineeringJobs.length} Roles</span>
                </div>
                <div className="space-y-4">
                  {engineeringJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                 <div className="flex items-center justify-between mb-8 border-b-4 border-brand-secondary pb-4">
                  <h3 className="text-3xl font-black text-brand-dark uppercase italic tracking-tight">Product & Operations</h3>
                  <span className="bg-brand-secondary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{otherJobs.length} Roles</span>
                </div>
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

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <Container>
           <div className="bg-brand-dark rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="relative z-10 max-w-3xl mx-auto space-y-10">
               <div className="inline-block p-4 bg-brand-primary/20 rounded-3xl mb-4">
                  <Rocket className="w-12 h-12 text-brand-primary" />
               </div>
               <h2 className="text-4xl md:text-7xl font-black text-white leading-tight uppercase italic tracking-tighter">
                 Don&apos;t See Your <br /> Role?
               </h2>
               <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
                 We&apos;re always looking for talented individuals who are passionate about food and technology. Send us your CV and we&apos;ll keep you in mind for future openings.
               </p>
               <div className="flex justify-center pt-6">
                  <Button size="lg" className="h-16 px-12 text-xl bg-brand-primary text-white hover:bg-brand-primary/90 rounded-2xl font-black uppercase italic tracking-widest shadow-2xl shadow-brand-primary/20">
                    Submit General Application
                  </Button>
               </div>
             </div>
           </div>
        </Container>
      </section>
    </main>
  );
}

