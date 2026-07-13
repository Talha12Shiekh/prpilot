interface ConnectorLineProps {
  direction?: "right" | "down";
  active: boolean;
  color: string;
}

export function ConnectorLine({
  direction = "right",
  active,
  color,
}: ConnectorLineProps) {
  const isHoriz = direction === "right";
  return (
    <div
      style={{
        position: "relative",
        ...(isHoriz
          ? { width: 56, height: 2, alignSelf: "center", flexShrink: 0 }
          : { width: 2, height: 40, margin: "0 auto" }),
        background: active ? `${color}50` : "rgba(255,255,255,0.08)",
        borderRadius: 1,
        transition: "background 0.3s",
        overflow: "hidden",
      }}
    >
      {isHoriz && (
        <div
          style={{
            position: "absolute",
            right: -1,
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "4px solid transparent",
            borderBottom: "4px solid transparent",
            borderLeft: `5px solid ${active ? color : "rgba(255,255,255,0.15)"}`,
            transition: "border-left-color 0.3s",
          }}
        />
      )}
      {!isHoriz && (
        <div
          style={{
            position: "absolute",
            bottom: -1,
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: `5px solid ${active ? color : "rgba(255,255,255,0.15)"}`,
            transition: "border-top-color 0.3s",
          }}
        />
      )}
      {active && (
        <div
          style={{
            position: "absolute",
            ...(isHoriz
              ? { top: "50%", width: 8, height: 8, transform: "translateY(-50%)", borderRadius: "50%", animation: "arch-travel-h 0.48s linear" }
              : { left: "50%", width: 8, height: 8, transform: "translateX(-50%)", borderRadius: "50%", animation: "arch-travel-v 0.55s linear" }),
            background: color,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      )}
    </div>
  );
}
