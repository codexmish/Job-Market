import { Briefcase } from "@gravity-ui/icons";
import { ChartAreaStacked } from "@gravity-ui/icons";
import { FolderMagnifier } from "@gravity-ui/icons";
import { Star } from "@gravity-ui/icons";

interface metricsDataI {
  id: number;
  value: string;
  label: string;
  icon: React.FC;
}

export const metricsData: metricsDataI[] = [
  {
    id: 1,
    value: "50K",
    label: "Active Jobs",
    icon: Briefcase,
  },
  {
    id: 2,
    value: "12K",
    label: "Companies",
    icon: ChartAreaStacked,
  },
  {
    id: 3,
    value: "2M",
    label: "Job Seekers",
    icon: FolderMagnifier,
  },
  {
    id: 4,
    value: "97%",
    label: "Satisfication Rate",
    icon: Star,
  },
];
