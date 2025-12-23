"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { ArticleCard } from "@/components/marketing/ArticleCard";
import { NEWS_ARTICLES } from "@/lib/marketing-data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Download, Mail, MessageCircle, FileText, Share2, ArrowRight } from "lucide-react";

const CATEGORIES = ["All", "Press", "Product", "Community"];

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredArticle = NEWS_ARTICLES[0];
  const regularArticles = NEWS_ARTICLES.slice(1);

  const filteredArticles = activeCategory === "All" 
    ? regularArticles 
    : NEWS_ARTICLES.filter(article => article.category === activeCategory);

  return (
    <main className="pb-20">
      <PageHero
        title="FoodZilla Newsroom"
        subtitle="The latest updates, stories, and announcements from our team."
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Featured Story */}
      <section className="py-20 bg-white">
        <Container>
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-12 items-center bg-gray-50 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex-1 relative h-[300px] md:h-[500px] w-full">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-1.5 bg-brand-primary text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    Latest Story
                  </span>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-16 space-y-6">
                <div className="text-gray-400 font-bold text-sm uppercase tracking-widest">{featuredArticle.date}</div>
                <h2 className="text-3xl md:text-5xl font-black text-brand-dark leading-tight uppercase italic">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {featuredArticle.summary}
                </p>
                <Button size="lg" className="rounded-full px-8 uppercase italic font-black">
                  Read Full Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 bg-gray-50">
        <Container>
          {/* Filter Tabs */}
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
              <h3 className="text-3xl font-black text-brand-dark uppercase italic tracking-tighter">Recent Updates</h3>
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      activeCategory === category
                        ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <FadeIn key={article.id} delay={index * 0.1}>
                <ArticleCard article={article} />
              </FadeIn>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No articles found in this category.
            </div>
          )}
        </Container>
      </section>

      {/* Media Kit Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase italic tracking-tighter leading-none">
                  Resources for <br />
                  <span className="text-brand-primary">The Media</span>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Download our official brand assets, executive headshots, and company fact sheet for your stories. We&apos;re happy to help you find what you need.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-brand-primary transition-colors cursor-pointer">
                    <FileText className="w-8 h-8 text-brand-primary mb-4" />
                    <h4 className="font-bold text-brand-dark mb-1 uppercase text-sm">Brand Kit 2025</h4>
                    <p className="text-xs text-gray-400 mb-4 font-medium">Logos, Colors, Fonts (PDF, PNG)</p>
                    <div className="flex items-center gap-2 text-brand-primary font-black text-[10px] uppercase tracking-widest">
                      <Download className="w-3.5 h-3.5" />
                      Download Assets
                    </div>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-brand-primary transition-colors cursor-pointer">
                    <Users className="w-8 h-8 text-brand-primary mb-4" />
                    <h4 className="font-bold text-brand-dark mb-1 uppercase text-sm">Executive Photos</h4>
                    <p className="text-xs text-gray-400 mb-4 font-medium">Leadership team headshots (Hi-Res)</p>
                    <div className="flex items-center gap-2 text-brand-primary font-black text-[10px] uppercase tracking-widest">
                      <Download className="w-3.5 h-3.5" />
                      Download Assets
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-brand-dark rounded-[3rem] p-10 md:p-12 text-white space-y-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black uppercase italic tracking-tight">Media Inquiries</h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  For press releases, interview requests, and media assets, please contact our global communications team.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="bg-brand-primary p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-black text-gray-500 tracking-widest mb-0.5">Global Press</div>
                      <div className="font-bold text-sm">press@foodzilla.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="bg-brand-primary p-2 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-black text-gray-500 tracking-widest mb-0.5">Corporate Affairs</div>
                      <div className="font-bold text-sm">affairs@foodzilla.com</div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full h-14 rounded-2xl font-black uppercase tracking-widest italic bg-white text-brand-dark hover:bg-gray-100">
                  Submit Request
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <FadeIn>
              <div className="inline-block p-4 bg-white/10 rounded-3xl mb-4">
                 <Mail className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight">
                Get FoodZilla Stories <br /> Delivered to Your Inbox
              </h2>
              <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
                Join 50,000+ readers who receive our weekly update on technology, food culture, and community impact.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-14 rounded-2xl px-6 text-brand-dark font-bold focus:outline-none focus:ring-4 focus:ring-white/20"
                />
                <Button className="h-14 px-8 bg-brand-dark text-white hover:bg-black rounded-2xl font-black uppercase tracking-widest italic">
                  Subscribe
                </Button>
              </form>
              <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest mt-4">
                By subscribing, you agree to our Privacy Policy and Terms of Use.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
