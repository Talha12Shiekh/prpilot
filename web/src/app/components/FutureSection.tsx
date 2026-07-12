import { LayoutDashboard, Container, Gauge, Bell, Code2, BarChart2, Globe } from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "React / Next.js architectural rules" },
  { icon: Container, label: "Docker and infrastructure analysis" },
  { icon: Gauge, label: "Performance profiling" },
  { icon: Bell, label: "Slack & Discord notifications" },
  { icon: Code2, label: "VS Code extension" },
  { icon: BarChart2, label: "PR analytics dashboard" },
  { icon: Globe, label: "Multi-language support" },
];

export function FutureSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden text-center flex flex-col items-center">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,#ff8c37 0%,transparent 70%)" }}
      />
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-[#ff8c37] mb-3 block">What's Coming</span>
          <h2 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight">
            Future Enhancements
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            The long-term vision: a flexible, extensible review platform adaptable to any language, framework, and workflow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            const color = i % 2 === 0 ? "#ec3750" : "#ff8c37";
            return (
              <div
                key={i}
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
          })}
          <div
            className="rounded-2xl border col-span-2 md:col-span-4 p-6 flex flex-col md:flex-row items-start md:items-center gap-4 text-left"
            style={{ background: "linear-gradient(135deg,#ec375010,#ff8c3710)", borderColor: "#ec375030" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#ec3750,#ff8c37)" }}
            >
              <Globe size={18} className="text-white" />
            </div>
            <div>
              <div className="text-white mb-1 font-semibold">Open Source & Community-Driven</div>
              <div className="text-white/50 text-sm">
                PRPilot is designed for the community. Contribute new review rules, improve existing ones, and help build the most comprehensive code review assistant on GitHub.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
