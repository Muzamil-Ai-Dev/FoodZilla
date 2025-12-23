import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export const ContentSection = ({ title, description, image, imageAlt, reverse = false, children }: ContentSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className={cn("flex flex-col md:flex-row items-center gap-12", reverse && "md:flex-row-reverse")}>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">{title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
            {children}
          </div>
          <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
