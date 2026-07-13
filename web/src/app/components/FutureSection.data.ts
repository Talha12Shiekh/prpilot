import { LayoutDashboard, Container, Gauge, Bell, Code2, BarChart2, Globe } from "lucide-react";

export interface FutureItem {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  label: string;
}

export const items: FutureItem[] = [
  { icon: LayoutDashboard, label: "React / Next.js architectural rules" },
  { icon: Container, label: "Docker and infrastructure analysis" },
  { icon: Gauge, label: "Performance profiling" },
  { icon: Bell, label: "Slack & Discord notifications" },
  { icon: Code2, label: "VS Code extension" },
  { icon: BarChart2, label: "PR analytics dashboard" },
  { icon: Globe, label: "Multi-language support" },
];
