"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/marketing/PageHero";
import { ArticleCard } from "@/components/marketing/ArticleCard";
import { NEWS_ARTICLES } from "@/lib/marketing-data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const CATEGORIES = ["All", "Press", "Product", "Community"];

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? NEWS_ARTICLES 
    : NEWS_ARTICLES.filter(article => article.category === activeCategory);

  return (
    <main>
      <PageHero
        title="FoodZilla Newsroom"
        subtitle="The latest updates, stories, and announcements from our team."
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20 bg-gray-50 min-h-screen">
        <Container>
          {/* Filter Tabs */}
          <FadeIn>
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === category
                      ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
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

          {/* Load More Mock */}
          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <Button size="lg" variant="outline" className="px-12">
                Load More
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}
