import { User, BookOpen, Users, Building2 } from "lucide-react";

const users = [
  {
    icon: User,
    title: "Individual Developers",
    desc: "Maintain high code standards on personal and side projects without needing a full review team.",
    color: "#ec3750",
  },
  {
    icon: BookOpen,
    title: "Open Source Maintainers",
    desc: "Handle high volumes of community pull requests efficiently without reviewing every line manually.",
    color: "#ff8c37",
  },
  {
    icon: Users,
    title: "Development Teams",
    desc: "Speed up review cycles, enforce team conventions, and reduce back-and-forth on common issues.",
    color: "#ec3750",
  },
  {
    icon: Building2,
    title: "Organizations on GitHub",
    desc: "Enforce consistent quality and security standards across all repositories at scale.",
    color: "#ff8c37",
  },
];

export function TargetUsers() {
  return (
    <section className="py-24 px-6 text-center flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#ff8c37] mb-3 block">Who it's for</span>
          <h2 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            Built for every team size
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {users.map((u, i) => {
            const Icon = u.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/8 bg-[#111113] p-6 hover:border-white/15 transition-colors group text-left"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${u.color}15`, border: `1px solid ${u.color}25` }}
                >
                  <Icon size={20} style={{ color: u.color }} />
                </div>
                <h3 className="text-white mb-2 font-semibold text-[1rem]">{u.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{u.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
