import { steps } from "./HowItWorks.data";
import { HowItWorksStepCard } from "./HowItWorksStepCard";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative flex flex-col items-center">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-6xl mx-auto w-full text-center">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#ec3750] mb-3 block">Workflow</span>
          <h2 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            How PRPilot Works
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            From PR open to review posted — fully automated in seconds.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {steps.map((step, i) => (
              <HowItWorksStepCard
                key={i}
                step={step}
                index={i}
                totalSteps={steps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
