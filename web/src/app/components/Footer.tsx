import { GitPullRequest, Github, Star, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <>
      <section className="py-24 px-6 relative overflow-hidden text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%,#ec375015 0%,transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 text-sm text-white/60"
            style={{ borderColor: "#ec375030", background: "#ec375008" }}
          >
            <Star size={12} className="text-[#ff8c37]" />
            Free & Open Source
          </div>
          <h2
            className="text-4xl md:text-6xl text-white mb-6 font-extrabold tracking-tight leading-[1.1]"
          >
            Start reviewing smarter{" "}
            <span
              style={{ background: "linear-gradient(90deg,#ec3750,#ff8c37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              today
            </span>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-2xl">
            Add PRPilot to your GitHub workflow in under 5 minutes. No credit card, no signup — just better code reviews.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/Talha12Shiekh/prpilot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg,#ec3750,#ff8c37)", fontWeight: 600 }}
            >
              <GitPullRequest size={18} />
              Get Started Free
              <ArrowRight size={16} />
            </a>
            <a
              href="https://github.com/Talha12Shiekh/prpilot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white/60 border border-white/10 hover:text-white hover:border-white/25 transition-all"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#ec3750,#ff8c37)" }}
            >
              <GitPullRequest size={13} className="text-white" />
            </div>
            <span className="text-white/70 text-sm font-semibold">PRPilot</span>
            <span className="text-white/20 text-sm ml-2">Open Source GitHub Action</span>
          </div>
          <div className="flex items-center gap-6">
            {["Docs", "GitHub", "Issues", "Contributing"].map((item) => (
              <a key={item} href="https://github.com/Talha12Shiekh/prpilot" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white/60 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="text-white/20 text-xs">
            MIT License · Built for developers
          </div>
        </div>
      </footer>
    </>
  );
}
