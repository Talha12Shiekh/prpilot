import { WorkflowStep } from "./HowItWorks.data";

interface HowItWorksStepCardProps {
  step: WorkflowStep;
  index: number;
  totalSteps: number;
}

export function HowItWorksStepCard({ step, index, totalSteps }: HowItWorksStepCardProps) {
  const Icon = step.icon;
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-4 relative z-10 border border-white/10 group-hover:scale-110 transition-transform"
        style={{ background: `${step.color}22`, boxShadow: `0 0 20px ${step.color}33` }}
      >
        <Icon size={16} style={{ color: step.color }} />
      </div>
      <div className="text-white/30 text-xs mb-1">0{index + 1}</div>
      <div className="text-white mb-2 font-semibold text-[0.875rem]">{step.label}</div>
      <div className="text-white/40 text-xs leading-relaxed">{step.desc}</div>

      {index < totalSteps - 1 && (
        <div className="hidden md:block absolute top-5 -right-3 text-white/20 text-xs z-20">›</div>
      )}
    </div>
  );
}
