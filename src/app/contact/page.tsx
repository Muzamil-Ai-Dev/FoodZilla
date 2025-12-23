"use client";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";

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
    // In a real app, this would send data to an API
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? We're here to help."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-12">
                Whether you&apos;re a customer, restaurant partner, or interested in joining our team, we&apos;d love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                    <p className="text-gray-600">
                      123 Foodie Lane, Suite 100<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      support@foodzilla.com<br />
                      partners@foodzilla.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +1 (800) 555-0123<br />
                      Mon-Fri, 9am - 6pm PST
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-100">
                  Interactive Map Placeholder
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <Input
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input
                    name="subject"
                    placeholder="How can we help?"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us more..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
