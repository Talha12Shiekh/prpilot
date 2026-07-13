import { TLine } from "./TerminalWindow";

export const heroLines: TLine[] = [
  { segs: [{ t: "PRPilot Review", c: "rgba(255,255,255,0.25)" }, { t: " · feat/user-auth", c: "rgba(255,255,255,0.15)" }], gapAfter: 300 },
  { segs: [{ t: "─".repeat(46), c: "rgba(255,255,255,0.08)" }], gapAfter: 120, speed: 4 },
  { segs: [{ t: "✖ ", c: "#ec3750" }, { t: "[SECRET]", c: "#ec3750" }, { t: " API key in ", c: "rgba(255,255,255,0.6)" }, { t: "src/config.ts:12", c: "#ff8c37" }], gapAfter: 110 },
  { segs: [{ t: "⚠ ", c: "#ff8c37" }, { t: "[DEBUG]", c: "#ff8c37" }, { t: " console.log in ", c: "rgba(255,255,255,0.6)" }, { t: "src/auth.ts:47", c: "#ff8c37" }], gapAfter: 110 },
  { segs: [{ t: "⚠ ", c: "#ff8c37" }, { t: "[TODO]", c: "#ff8c37" }, { t: " Unresolved TODO on ", c: "rgba(255,255,255,0.6)" }, { t: "src/utils.ts:89", c: "#ff8c37" }], gapAfter: 110 },
  { segs: [{ t: "✔ ", c: "#22c55e" }, { t: "[AI]", c: "#22c55e" }, { t: " Refactor into ", c: "rgba(255,255,255,0.6)" }, { t: "validateToken()", c: "#ff8c37" }, { t: " helper", c: "rgba(255,255,255,0.6)" }], gapAfter: 280 },
  { segs: [{ t: "─".repeat(46), c: "rgba(255,255,255,0.08)" }], gapAfter: 160, speed: 4 },
  { segs: [{ t: "3 warnings · 1 error · 1 AI suggestion", c: "rgba(255,255,255,0.22)" }], gapAfter: 80 },
  { segs: [{ t: "Posted by ", c: "rgba(255,255,255,0.15)" }, { t: "PRPilot", c: "#ec3750" }, { t: " · just now", c: "rgba(255,255,255,0.12)" }] },
];
