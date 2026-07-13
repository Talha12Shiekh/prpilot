import { TerminalWindow } from "./TerminalWindow";
import { FeatureItem } from "./FeatureSections.data";

interface FeatureCardProps {
  feature: FeatureItem;
  isEven: boolean;
}

export function FeatureCard({ feature, isEven }: FeatureCardProps) {
  const Icon = feature.icon;
  return (
    <div
      id={feature.id}
      className="rounded-2xl border border-white/8 bg-[#111113] overflow-hidden hover:border-white/15 transition-colors"
    >
      <div className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"}`}>
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: `${feature.accentColor}18`,
                border: `1px solid ${feature.accentColor}30`,
              }}
            >
              <Icon size={18} style={{ color: feature.accentColor }} />
            </div>
            <span
              className="text-xs px-2.5 py-1 rounded-full border"
              style={{
                color: feature.accentColor,
                borderColor: `${feature.accentColor}30`,
                background: `${feature.accentColor}10`,
              }}
            >
              {feature.tag}
            </span>
          </div>

          <h3 className="text-white mb-3 font-bold text-[1.35rem] leading-[1.3]">
            {feature.title}
          </h3>
          <p className="text-white/50 mb-6 leading-relaxed text-sm">
            {feature.description}
          </p>

          <ul className="space-y-2">
            {feature.bullets.map((b, bi) => (
              <li key={bi} className="flex items-center gap-2 text-sm text-white/60">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: feature.accentColor }}
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 md:max-w-[440px] border-t md:border-t-0 md:border-l border-white/8 bg-[#0d0d0f] p-5 md:p-7 flex items-center">
          <div className="w-full">
            <TerminalWindow
              title={`${feature.tag} · PRPilot`}
              lines={feature.lines}
              accentColor={feature.accentColor}
              charSpeed={20}
              lineGap={90}
              loopDelay={2200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
