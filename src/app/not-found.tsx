import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";

export default function NotFound() {
  return (
    <Container className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="bg-brand-secondary p-8 rounded-full mb-8">
        <UtensilsCrossed className="w-20 h-20 text-brand-primary" />
      </div>
      <h1 className="text-5xl font-bold text-brand-dark mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-500 max-w-md mb-10">
        Oops! It seems the page you&apos;re looking for has been devoured or doesn&apos;t exist.
      </p>
      <Link href="/">
        <Button size="lg" className="px-10 py-6 rounded-full text-lg font-bold">
          Back to Homepage
        </Button>
      </Link>
    </Container>
  );
}
