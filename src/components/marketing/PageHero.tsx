import Image from "next/image";
import { Container } from "@/components/ui/container";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  centered?: boolean;
}

export const PageHero = ({ title, subtitle, backgroundImage, centered = true }: PageHeroProps) => {
  return (
    <section className="relative h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <Container className={`relative z-20 text-white w-full ${centered ? "text-center" : "text-left"}`}>
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
};
