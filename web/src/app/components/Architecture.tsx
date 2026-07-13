"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Cpu, Search, FileText, MessageSquare } from "lucide-react";
import { STEPS, ENGINE_NODES } from "./Architecture.data";
import { NodeCard } from "./NodeCard";
import { ConnectorLine } from "./ConnectorLine";

export function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    if (!started) return;
    const step = STEPS[stepIdx];
    const id = setTimeout(() => {
      setStepIdx((i) => (i + 1) % STEPS.length);
    }, step.duration);
    return () => clearTimeout(id);
  }, [started, stepIdx]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const step = STEPS[stepIdx];

  function isNodeActive(id: string) {
    return step.kind === "node" && step.id === id;
  }
  function isConnectorActive(from: string, to: string) {
    return step.kind === "connector" && step.from === from && step.to === to;
  }
  function isFanActive() {
    return step.kind === "fan";
  }

  function nodeColor(id: string): string {
    if (step.kind === "node" && step.id === id) return step.color;
    return "#ec3750";
  }
  function connColor(from: string, to: string): string {
    if (step.kind === "connector" && step.from === from && step.to === to) return step.color;
    return "#ec3750";
  }

  const subColors = ["#ec3750", "#ff8c37", "#ec3750", "#ff8c37"];

  return (
    <>
      <style>{`
        @keyframes arch-pulse {
          0%   { transform: scale(1);    opacity: 0.85; }
          60%  { transform: scale(1.55); opacity: 0.3;  }
          100% { transform: scale(2.0);  opacity: 0;    }
        }
        @keyframes arch-travel-h {
          0%   { left: -8px;  opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { left: 100%;  opacity: 0; }
        }
        @keyframes arch-travel-v {
          0%   { top: -8px;  opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%;  opacity: 0; }
        }
      `}</style>

      <section id="architecture" className="py-24 px-6 relative" ref={containerRef}>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#ec3750] mb-3 block">Architecture</span>
            <h2 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight">
              System Architecture
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              A modular review engine with independent analysis modules that feed into a unified report generator.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111113] p-8 md:p-12 overflow-x-auto">
            <div className="min-w-[520px] flex flex-col items-center">
              <div className="flex items-center justify-center gap-0">
                <NodeCard icon={Github} label="GitHub" sub="PR Event" active={isNodeActive("github")} color={nodeColor("github")} />
                <ConnectorLine direction="right" active={isConnectorActive("github", "action")} color={connColor("github", "action")} />
                <NodeCard icon={Cpu} label="GitHub Action" sub="PRPilot" active={isNodeActive("action")} color={nodeColor("action")} />
                <ConnectorLine direction="right" active={isConnectorActive("action", "reader")} color={connColor("action", "reader")} />
                <NodeCard icon={Search} label="PR Reader" sub="Metadata+Diffs" active={isNodeActive("reader")} color={nodeColor("reader")} />
              </div>

              <ConnectorLine direction="down" active={isConnectorActive("reader", "engine")} color={connColor("reader", "engine")} />

              <div
                className="w-full max-w-[520px] rounded-2xl border p-5 md:p-7 transition-all duration-300"
                style={{
                  borderColor: isNodeActive("engine") || isFanActive() ? "#ec375060" : "rgba(255,255,255,0.08)",
                  background: isNodeActive("engine") || isFanActive() ? "#ec375008" : "rgba(255,255,255,0.02)",
                  boxShadow: isNodeActive("engine") || isFanActive() ? "0 0 40px #ec375015" : "none",
                }}
              >
                <div className="text-center mb-4">
                  <span
                    className="text-[11px] uppercase tracking-wider font-semibold transition-colors duration-300"
                    style={{
                      color: isNodeActive("engine") || isFanActive() ? "#ec3750" : "rgba(255,255,255,0.2)",
                    }}
                  >
                    Review Engine
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 justify-items-center">
                  {ENGINE_NODES.map((sub, i) => (
                    <NodeCard
                      key={sub.id}
                      icon={sub.icon}
                      label={sub.label}
                      active={isFanActive()}
                      color={subColors[i]}
                      small
                    />
                  ))}
                </div>
              </div>

              <ConnectorLine direction="down" active={isConnectorActive("engine", "report")} color={connColor("engine", "report")} />

              <div className="flex items-center justify-center gap-0">
                <NodeCard icon={FileText} label="Report Generator" sub="Markdown" active={isNodeActive("report")} color={nodeColor("report")} />
                <ConnectorLine direction="right" active={isConnectorActive("report", "comment")} color={connColor("report", "comment")} />
                <NodeCard icon={MessageSquare} label="GitHub Comment" sub="PR Review" active={isNodeActive("comment")} color={nodeColor("comment")} />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-1.5 mt-6">
            {STEPS.map((s, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === stepIdx ? 20 : 6,
                  background: i === stepIdx
                    ? (s.kind === "node" || s.kind === "fan" ? s.color : (s as any).color)
                    : "rgba(255,255,255,0.12)",
                }}
              />
            ))}
          </div>

          <p className="text-center mt-3 text-xs text-white/20">
            {step.kind === "node" && `→ ${step.id.charAt(0).toUpperCase() + step.id.slice(1)} node active`}
            {step.kind === "connector" && `→ Data flowing: ${step.from} → ${step.to}`}
            {step.kind === "fan" && "→ All analysis engines running in parallel"}
          </p>
        </div>
      </section>
    </>
  );
}
