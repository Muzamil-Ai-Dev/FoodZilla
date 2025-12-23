import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    date: string;
    category: string;
    summary: string;
    image: string;
  };
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link href={`/newsroom/${article.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary uppercase tracking-wider">
          {article.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{article.date}</span>
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-3">
          {article.summary}
        </p>
      </div>
    </Link>
  );
};
