import { User, BookOpen, Users, Building2 } from "lucide-react";

export interface TargetUserItem {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  title: string;
  desc: string;
  color: string;
}

export const users: TargetUserItem[] = [
  {
    icon: User,
    title: "Individual Developers",
    desc: "Maintain high code standards on personal and side projects without needing a full review team.",
    color: "#ec3750",
  },
  {
    icon: BookOpen,
    title: "Open Source Maintainers",
    desc: "Handle high volumes of community pull requests efficiently without reviewing every line manually.",
    color: "#ff8c37",
  },
  {
    icon: Users,
    title: "Development Teams",
    desc: "Speed up review cycles, enforce team conventions, and reduce back-and-forth on common issues.",
    color: "#ec3750",
  },
  {
    icon: Building2,
    title: "Organizations on GitHub",
    desc: "Enforce consistent quality and security standards across all repositories at scale.",
    color: "#ff8c37",
  },
];
