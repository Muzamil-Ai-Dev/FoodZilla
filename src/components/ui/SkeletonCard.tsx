import { cn } from "@/lib/utils";

export const SkeletonCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn("animate-pulse space-y-4", className)}>
      <div className="aspect-[16/10] bg-gray-200 rounded-[2rem]" />
      <div className="space-y-2 px-1">
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded-lg w-2/3" />
          <div className="h-6 bg-gray-200 rounded-lg w-12" />
        </div>
        <div className="h-4 bg-gray-100 rounded-lg w-1/2" />
        <div className="flex gap-4 pt-1">
          <div className="h-4 bg-gray-100 rounded-lg w-20" />
          <div className="h-4 bg-gray-100 rounded-lg w-20" />
        </div>
      </div>
    </div>
  );
};
