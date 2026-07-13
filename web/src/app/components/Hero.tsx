import { ArrowRight, GitPullRequest, Star, Zap } from "lucide-react";
import { TerminalWindow } from "./TerminalWindow";
import { heroLines } from "./Hero.data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-20 px-6">
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,#ec3750 0%,transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,#ff8c37 0%,transparent 70%)" }}
      />

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-white/5 text-sm text-white/70">
          <Star size={12} className="text-[#ff8c37]" />
          Open Source GitHub Action
          <span className="w-px h-3 bg-white/20" />
          <Zap size={12} className="text-[#ec3750]" />
          AI-Powered
        </div>

        <h1
          className="text-5xl md:text-7xl text-white mb-6 font-extrabold tracking-tight leading-[1.08]"
        >
          Code Reviews on{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#ec3750,#ff8c37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Autopilot
          </span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          PRPilot is an open-source GitHub Action that automatically detects common issues, enforces best practices, and delivers AI-powered actionable feedback — directly on your pull requests.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/Talha12Shiekh/prpilot"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg,#ec3750,#ff8c37)", fontWeight: 600 }}
          >
            <GitPullRequest size={18} />
            Install PRPilot
            <ArrowRight size={16} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-all"
          >
            See how it works
          </a>
        </div>

        <div className="w-full max-w-xl mx-auto">
          <TerminalWindow
            title="PRPilot Review · feat/user-auth"
            lines={heroLines}
            accentColor="#ec3750"
            charSpeed={22}
            lineGap={100}
            loopDelay={2500}
          />
        </div>
      </div>
    </section>
  );
}
