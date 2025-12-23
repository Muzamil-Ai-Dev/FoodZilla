import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/ui/button";
import { PARTNER_TESTIMONIALS } from "@/lib/marketing-data";
import { TrendingUp, Users, Clock, ShieldCheck, ClipboardCheck, Smartphone, Zap, HelpCircle, CheckCircle2, ChevronDown } from "lucide-react";
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

  const steps = [
    {
      number: "01",
      title: "Register Online",
      description: "Fill out the registration form with your business details and menu."
    },
    {
      number: "02",
      title: "Document Review",
      description: "Upload your business license and ID for a quick verification process."
    },
    {
      number: "03",
      title: "Sign Contract",
      description: "Review and sign the partnership agreement electronically."
    },
    {
      number: "04",
      title: "Onboarding",
      description: "Receive training on our platform and set up your tablet or app."
    },
    {
      number: "05",
      title: "Go Live!",
      description: "Start receiving orders and growing your business with FoodZilla."
    }
  ];

  const faqs = [
    {
      q: "How much does it cost to partner with FoodZilla?",
      a: "We work on a commission-based model. You only pay for the orders you receive through the platform."
    },
    {
      q: "What documents do I need to provide?",
      a: "You'll need a valid local business license, a food safety certificate, and a form of government ID for the owner."
    },
    {
      q: "How often do I get paid?",
      a: "Payments are processed weekly and deposited directly into your registered business bank account."
    },
    {
      q: "Do I need my own delivery riders?",
      a: "No! FoodZilla provides a professional fleet of riders, though we also offer a 'Self-Pick-Up' option for your customers."
    }
  ];

  return (
    <main className="pb-20">
      <PageHero
        title="Partner with FoodZilla"
        subtitle="Grow your business with the most reliable delivery network in the country."
        backgroundImage="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 uppercase italic tracking-tighter">Why Partner With Us?</h2>
              <p className="text-lg text-gray-600 font-medium">
                Join the largest food community and leverage our technology to scale your restaurant.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-10 rounded-[3rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-brand-primary/10 group h-full flex flex-col">
                  <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500">
                    <benefit.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase italic">{benefit.title}</h3>
                  <p className="text-gray-500 leading-relaxed flex-1">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* How it Works - Timeline */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 uppercase italic tracking-tighter">Your Journey to Success</h2>
              <p className="text-lg text-gray-600 font-medium">
                Become a partner in 5 simple steps. We&apos;ll be with you every step of the way.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-brand-primary/10 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group">
                    <div className="text-4xl font-black text-brand-primary/20 mb-6 group-hover:text-brand-primary transition-colors italic">
                      {step.number}
                    </div>
                    <h4 className="text-xl font-black text-brand-dark mb-3 uppercase">{step.title}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Restaurant Portal Highlight */}
      <section className="py-24 bg-brand-dark text-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-10">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
                  Smart Tools for <br />
                  <span className="text-brand-primary">Smart Growth</span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                  Manage your business from anywhere with our powerful Partner Portal. Track sales, update menus, and understand customer trends in real-time.
                </p>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary p-2 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg uppercase italic">Live Performance Dashboard</h4>
                      <p className="text-sm text-gray-500">Monitor your orders and revenue live as they happen.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary p-2 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg uppercase italic">Menu Management</h4>
                      <p className="text-sm text-gray-500">Change prices or mark items as unavailable instantly.</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary p-2 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg uppercase italic">Customer Insights</h4>
                      <p className="text-sm text-gray-500">Get data-driven recommendations to improve your rating.</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
               <FadeIn delay={0.4}>
                 <div className="bg-gradient-to-br from-brand-primary/20 to-transparent p-8 rounded-[4rem] h-full flex items-center justify-center border border-white/10">
                    <Smartphone className="w-48 h-48 text-brand-primary animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Zap className="w-12 h-12 text-white" />
                    </div>
                 </div>
               </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials (Modified) */}
      <section className="py-24 bg-white">
        <Container>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark text-center mb-20 uppercase italic tracking-tighter">Trusted by 50,000+ Owners</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {PARTNER_TESTIMONIALS.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 0.2}>
                <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 relative group hover:-translate-y-2 transition-all duration-500">
                  <div className="text-6xl text-brand-primary/10 font-serif absolute top-6 right-10 leading-none">&quot;</div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative w-20 h-20 rounded-[2rem] overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-brand-dark uppercase italic">{testimonial.name}</h4>
                      <p className="text-sm text-brand-primary font-bold">{testimonial.restaurant}</p>
                    </div>
                  </div>
                  <p className="text-xl italic text-gray-600 leading-relaxed font-medium">&quot;{testimonial.quote}&quot;</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 uppercase italic tracking-tighter">Common Questions</h2>
              <p className="text-lg text-gray-600 font-medium">Everything you need to know about the FoodZilla partnership.</p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 group cursor-pointer hover:border-brand-primary transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-lg font-black text-brand-dark uppercase tracking-tight italic">{faq.q}</h4>
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
                  </div>
                  <p className="mt-4 text-gray-500 font-medium leading-relaxed hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA (Modified) */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <Container className="text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic leading-tight">
              Let&apos;s Build Your <br /> Future Together
            </h2>
            <p className="text-xl text-white/80 font-medium mb-12 max-w-2xl mx-auto">
              Registration takes less than 10 minutes. Our team will get back to you within 24 hours.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-dark text-white hover:bg-black text-xl h-16 px-12 rounded-[2rem] font-black uppercase italic tracking-widest shadow-2xl">
                Register Your Business
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-xl h-16 px-12 rounded-[2rem] font-black uppercase italic tracking-widest">
                Speak to an Expert
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
