"use client";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase, Globe, Twitter, Instagram, Linkedin, Facebook, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for contacting us! We'll get back to you shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const departments = [
    {
      icon: MessageSquare,
      title: "Customer Support",
      description: "Need help with an order? Our team is available 24/7.",
      email: "support@foodzilla.com",
    },
    {
      icon: Briefcase,
      title: "Business Partners",
      description: "Interested in partnering? Let's grow together.",
      email: "partners@foodzilla.com",
    },
    {
      icon: Globe,
      title: "Press & Media",
      description: "For all media inquiries and brand assets.",
      email: "press@foodzilla.com",
    }
  ];

  const faqs = [
    {
      q: "How can I track my order?",
      a: "You can track your order in real-time through the 'My Orders' section in your account dashboard."
    },
    {
      q: "What are your delivery hours?",
      a: "Our platform operates 24/7, though individual restaurant availability may vary based on their operating hours."
    },
    {
      q: "How do I become a rider?",
      a: "Visit our Careers page or download the Zilla Rider app to start your application process."
    },
    {
      q: "Do you offer group ordering?",
      a: "Yes! Use the 'Group Order' button on any restaurant page to invite friends and split the bill automatically."
    }
  ];

  return (
    <main className="pb-20">
      <PageHero
        title="Get in Touch"
        subtitle="We're here to help you with anything you need. Reach out to our global team."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Quick Contact Cards */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-10 rounded-[3rem] bg-gray-50 hover:bg-brand-primary group transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <dept.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-dark mb-4 group-hover:text-white transition-colors uppercase italic">{dept.title}</h3>
                  <p className="text-gray-500 mb-6 group-hover:text-white/80 transition-colors flex-1">{dept.description}</p>
                  <a href={`mailto:${dept.email}`} className="text-brand-primary font-black group-hover:text-white transition-colors flex items-center gap-2">
                    {dept.email}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2" />
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            <div className="flex-1 space-y-10">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
                  Send us a <br />
                  <span className="text-brand-primary">Message</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-xl">
                  Have a specific question or feedback? Use the form to reach our executive team directly.
                </p>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FadeIn delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase italic">Global HQ</h4>
                      <p className="text-sm text-gray-500">123 Foodie Lane, Suite 100<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase italic">Call Us</h4>
                      <p className="text-sm text-gray-500">+1 (800) 555-0123<br />Mon-Fri, 9am - 6pm PST</p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Social Links */}
              <FadeIn delay={0.3}>
                <div className="pt-8">
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-6">Connect with us</h4>
                  <div className="flex gap-4">
                    {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                      <a key={i} href="#" className="w-12 h-12 bg-white/5 hover:bg-brand-primary rounded-xl flex items-center justify-center transition-all">
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="flex-1">
              <FadeIn delay={0.4}>
                <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Your Name</label>
                        <Input
                          name="name"
                          className="h-14 rounded-2xl bg-gray-50 border-none focus-visible:ring-brand-primary text-brand-dark font-medium"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                        <Input
                          name="email"
                          type="email"
                          className="h-14 rounded-2xl bg-gray-50 border-none focus-visible:ring-brand-primary text-brand-dark font-medium"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                      <Input
                        name="subject"
                        className="h-14 rounded-2xl bg-gray-50 border-none focus-visible:ring-brand-primary text-brand-dark font-medium"
                        placeholder="How can we help?"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        className="w-full rounded-[2rem] bg-gray-50 border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary p-6 text-brand-dark font-medium"
                        placeholder="Tell us more about your inquiry..."
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full h-16 rounded-2xl bg-brand-primary hover:bg-brand-primary/90 text-white font-black uppercase italic tracking-widest text-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <Container>
          <FadeIn>
            <div className="relative w-full h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-gray-50 grayscale hover:grayscale-0 transition-all duration-1000 group">
              <Image 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
                alt="Map Location"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary p-6 rounded-3xl shadow-2xl animate-bounce">
                <MapPin className="w-10 h-10 text-white" />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 uppercase italic tracking-tighter">Frequently Asked</h2>
              <p className="text-lg text-gray-600 font-medium">Find quick answers to common questions about our platform.</p>
            </FadeIn>
          </div>

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

      {/* Final Call to Action */}
      <section className="py-24">
        <Container>
          <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-brand-primary/20">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="relative z-10 max-w-2xl mx-auto space-y-8">
               <h2 className="text-3xl md:text-6xl font-black text-white leading-tight uppercase italic tracking-tighter">
                 Start Your Order <br /> Now
               </h2>
               <p className="text-xl text-white/90 font-medium">
                 Hungry? Discover the best restaurants in your neighborhood.
               </p>
               <div className="flex justify-center pt-4">
                  <Button size="lg" className="h-16 px-12 text-xl bg-brand-dark text-white hover:bg-black rounded-2xl font-black uppercase italic tracking-widest shadow-2xl">
                    Discover Restaurants
                  </Button>
               </div>
             </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

