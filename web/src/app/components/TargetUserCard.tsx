import { TargetUserItem } from "./TargetUsers.data";

interface TargetUserCardProps {
  user: TargetUserItem;
}

export function TargetUserCard({ user }: TargetUserCardProps) {
  const Icon = user.icon;
  return (
    <div
      className="rounded-2xl border border-white/8 bg-[#111113] p-6 hover:border-white/15 transition-colors group text-left"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `${user.color}15`, border: `1px solid ${user.color}25` }}
      >
        <Icon size={20} style={{ color: user.color }} />
      </div>
      <h3 className="text-white mb-2 font-semibold text-[1rem]">{user.title}</h3>
      <p className="text-white/40 text-sm leading-relaxed">{user.desc}</p>
    </div>
  );
}
