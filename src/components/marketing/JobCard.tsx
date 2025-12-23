import { MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  job: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
  };
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h3 className="text-lg font-bold text-brand-dark mb-2">{job.title}</h3>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {job.department}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {job.location}
          </span>
          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium text-gray-600">
            {job.type}
          </span>
        </div>
      </div>
      <Button variant="outline" className="shrink-0">
        View Details
      </Button>
    </div>
  );
};
