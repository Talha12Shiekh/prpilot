import { Zap, Shield, Brain, Package } from "lucide-react";

export type Step =
  | { kind: "node"; id: string; color: string; duration: number }
  | { kind: "connector"; from: string; to: string; color: string; duration: number }
  | { kind: "fan"; color: string; duration: number };

export const STEPS: Step[] = [
  { kind: "node",      id: "github",  color: "#ffffff",  duration: 1400 },
  { kind: "connector", from: "github",  to: "action",   color: "#ec3750", duration: 500 },
  { kind: "node",      id: "action",  color: "#ec3750",  duration: 1200 },
  { kind: "connector", from: "action",  to: "reader",   color: "#ff8c37", duration: 500 },
  { kind: "node",      id: "reader",  color: "#ff8c37",  duration: 1200 },
  { kind: "connector", from: "reader",  to: "engine",   color: "#ec3750", duration: 600 },
  { kind: "node",      id: "engine",  color: "#ec3750",  duration: 1000 },
  { kind: "fan",       color: "#ff8c37",                  duration: 1600 },
  { kind: "connector", from: "engine",  to: "report",   color: "#ec3750", duration: 600 },
  { kind: "node",      id: "report",  color: "#ff8c37",  duration: 1200 },
  { kind: "connector", from: "report",  to: "comment",  color: "#ec3750", duration: 500 },
  { kind: "node",      id: "comment", color: "#ec3750",  duration: 1600 },
];

export interface EngineNode {
  id: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
}

export const ENGINE_NODES: EngineNode[] = [
  { id: "static", icon: Zap, label: "Static Rules" },
  { id: "security", icon: Shield, label: "Security Scan" },
  { id: "ai", icon: Brain, label: "AI Engine" },
  { id: "deps", icon: Package, label: "Dep Analyzer" },
];
