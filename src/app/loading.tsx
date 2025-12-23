import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-brand-primary/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-brand-primary rounded-full border-t-transparent animate-spin" />
      </div>
      <p className="mt-6 text-brand-dark font-bold text-lg animate-pulse">
        FoodZilla is preparing your experience...
      </p>
    </Container>
  );
}
