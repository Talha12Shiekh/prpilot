import { FutureItem } from "./FutureSection.data";

interface FutureCardProps {
  item: FutureItem;
  index: number;
}

export function FutureCard({ item, index }: FutureCardProps) {
  const Icon = item.icon;
  const color = index % 2 === 0 ? "#ec3750" : "#ff8c37";
  return (
    <div
      className="rounded-2xl border border-white/8 bg-[#111113] p-5 flex flex-col items-start gap-3 hover:border-white/15 transition-colors text-left"
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ background: `${color}15`, border: `1px solid ${color}20` }}
      >
        <Icon size={15} style={{ color }} />
      </div>
      <span className="text-white/60 text-sm leading-snug">{item.label}</span>
    </div>
  );
}
