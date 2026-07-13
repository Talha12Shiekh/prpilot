import { GitPullRequest, Settings, Search, Brain, FileText, MessageSquare } from "lucide-react";

export interface WorkflowStep {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  label: string;
  desc: string;
  color: string;
}

export const steps: WorkflowStep[] = [
  {
    icon: GitPullRequest,
    label: "PR Opened",
    desc: "Developer opens or updates a pull request on GitHub",
    color: "#ec3750",
  },
  {
    icon: Settings,
    label: "PRPilot Triggered",
    desc: "GitHub Action fires and reads PR metadata & config",
    color: "#ff8c37",
  },
  {
    icon: Search,
    label: "Files Fetched",
    desc: "Changed files and diff patches are collected",
    color: "#ec3750",
  },
  {
    icon: Brain,
    label: "Analysis Runs",
    desc: "Static rules fire simultaneously with AI engine",
    color: "#ff8c37",
  },
  {
    icon: FileText,
    label: "Report Built",
    desc: "Findings are compiled into a clean Markdown summary",
    color: "#ec3750",
  },
  {
    icon: MessageSquare,
    label: "Review Posted",
    desc: "A single comment is posted (or updated) on the PR",
    color: "#ff8c37",
  },
];
