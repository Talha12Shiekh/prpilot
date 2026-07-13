import { features } from "./FeatureSections.data";
import { FeatureCard } from "./FeatureCard";

export function FeatureSections() {
  return (
    <section id="features" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-[#ff8c37] mb-3 block">Features</span>
          <h2
            className="text-4xl md:text-5xl text-white font-extrabold tracking-tight"
          >
            Everything your review needs
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            13 built-in capabilities covering security, quality, process, and AI — all in one GitHub Action.
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0;
            return (
              <FeatureCard
                key={feature.id}
                feature={feature}
                isEven={isEven}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
