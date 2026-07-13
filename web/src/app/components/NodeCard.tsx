interface PulseRingProps {
  color: string;
}

function PulseRing({ color }: PulseRingProps) {
  return (
    <span
      style={{
        position: "absolute",
        inset: -8,
        borderRadius: "50%",
        border: `2px solid ${color}`,
        animation: "arch-pulse 1.1s ease-out infinite",
        pointerEvents: "none",
      }}
    />
  );
}

interface NodeCardProps {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
  sub?: string;
  active: boolean;
  color: string;
  small?: boolean;
}

export function NodeCard({
  icon: Icon,
  label,
  sub,
  active,
  color,
  small,
}: NodeCardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        minWidth: small ? 90 : 110,
        transition: "all 0.3s",
      }}
    >
      <div style={{ position: "relative", display: "inline-flex" }}>
        <div
          style={{
            width: small ? 40 : 48,
            height: small ? 40 : 48,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1.5px solid ${active ? color : "rgba(255,255,255,0.1)"}`,
            background: active ? `${color}20` : "rgba(255,255,255,0.04)",
            transition: "all 0.35s",
            boxShadow: active ? `0 0 20px ${color}40, 0 0 40px ${color}18` : "none",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Icon size={small ? 14 : 18} style={{ color: active ? color : "rgba(255,255,255,0.35)", transition: "color 0.35s" }} />
        </div>
        {active && <PulseRing color={color} />}
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: active ? "#fff" : "rgba(255,255,255,0.5)", fontSize: small ? 11 : 12, fontWeight: 600, transition: "color 0.3s", lineHeight: 1.3 }}>
          {label}
        </div>
        {sub && (
          <div style={{ color: active ? color : "rgba(255,255,255,0.2)", fontSize: 10, marginTop: 2, transition: "color 0.3s", fontFamily: "'JetBrains Mono', monospace" }}>
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}
