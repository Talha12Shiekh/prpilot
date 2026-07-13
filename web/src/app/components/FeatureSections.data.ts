import {
  GitPullRequest,
  Shield,
  Terminal,
  StickyNote,
  Scale,
  TestTube2,
  FileCheck,
  GitCommit,
  Package,
  Sparkles,
  FileText,
  Sliders,
  Puzzle,
} from "lucide-react";
import { TLine } from "./TerminalWindow";

const W = "rgba(255,255,255,0.6)";
const D = "rgba(255,255,255,0.35)";
const G = "rgba(255,255,255,0.18)";
const RED = "#ec3750";
const ORA = "#ff8c37";
const GRN = "#22c55e";

export interface FeatureItem {
  id: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  accentColor: string;
  lines: TLine[];
}

export const features: FeatureItem[] = [
  {
    id: "auto-reviews",
    icon: GitPullRequest,
    tag: "Core",
    title: "Automatic Pull Request Reviews",
    description:
      "PRPilot fires on every PR open, synchronize, and reopen event. No manual trigger needed — the moment code hits GitHub, review starts automatically.",
    bullets: [
      "Triggers on PR open, sync, and reopen",
      "Zero configuration to get started",
      "Works with all GitHub repositories",
    ],
    accentColor: RED,
    lines: [
      { segs: [{ t: "# .github/workflows/prpilot.yml", c: G }], gapAfter: 200 },
      { segs: [{ t: "on:", c: ORA }], gapAfter: 80 },
      { segs: [{ t: "  pull_request:", c: RED }], gapAfter: 80 },
      { segs: [{ t: "    types:", c: D }, { t: " [opened, synchronize, reopened]", c: W }], gapAfter: 160 },
      { segs: [{ t: "jobs:", c: ORA }], gapAfter: 80 },
      { segs: [{ t: "  review:", c: D }], gapAfter: 80 },
      { segs: [{ t: "    uses: ", c: D }, { t: "prpilot/action@v1", c: GRN }], gapAfter: 80 },
      { segs: [{ t: "    with:", c: D }], gapAfter: 80 },
      { segs: [{ t: "      github-token: ", c: D }, { t: "${{ secrets.GITHUB_TOKEN }}", c: ORA }] },
    ],
  },
  {
    id: "security",
    icon: Shield,
    tag: "Security",
    title: "Secret & Security Scanning",
    description:
      "Catches hardcoded credentials before they land in your repo. PRPilot scans every diff for API keys, tokens, passwords, and other sensitive patterns.",
    bullets: [
      "Detects API keys & bearer tokens",
      "Flags hardcoded passwords",
      "Matches 30+ common secret patterns",
    ],
    accentColor: ORA,
    lines: [
      { segs: [{ t: "✖ ERROR  ", c: RED }, { t: "Possible secret detected", c: W }], gapAfter: 120 },
      { segs: [{ t: "  → ", c: G }, { t: "src/config.ts", c: ORA }, { t: ":12", c: D }], gapAfter: 100 },
      { segs: [{ t: "  ", c: "" }, { t: 'const API_KEY = "sk-abc123..."', c: ORA }], gapAfter: 220 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 140, speed: 5 },
      { segs: [{ t: "Pattern: ", c: G }, { t: "sk-[a-zA-Z0-9]{20,}", c: D }], gapAfter: 100 },
      { segs: [{ t: "Severity: ", c: G }, { t: "CRITICAL", c: RED }], gapAfter: 100 },
      { segs: [{ t: "Action: ", c: G }, { t: "rotate credentials immediately", c: W }] },
    ],
  },
  {
    id: "debug",
    icon: Terminal,
    tag: "Code Quality",
    title: "Debug Statement Detection",
    description:
      "Leftover debug code is a silent quality killer. PRPilot flags every console.log, console.error, and debugger statement found in your diff.",
    bullets: [
      "Catches console.log & console.error",
      "Detects debugger statements",
      "Reports exact file and line number",
    ],
    accentColor: RED,
    lines: [
      { segs: [{ t: "⚠ WARN  ", c: ORA }, { t: "Debug statement found", c: W }], gapAfter: 120 },
      { segs: [{ t: "  → ", c: G }, { t: "src/auth.ts", c: ORA }, { t: ":47", c: D }], gapAfter: 100 },
      { segs: [{ t: "  ", c: "" }, { t: 'console.log("token:", token)', c: ORA }], gapAfter: 220 },
      { segs: [{ t: "⚠ WARN  ", c: ORA }, { t: "Debugger statement", c: W }], gapAfter: 120 },
      { segs: [{ t: "  → ", c: G }, { t: "src/utils.ts", c: ORA }, { t: ":22", c: D }], gapAfter: 100 },
      { segs: [{ t: "  ", c: "" }, { t: "debugger;", c: ORA }], gapAfter: 200 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 100, speed: 5 },
      { segs: [{ t: "2 debug statements found", c: D }] },
    ],
  },
  {
    id: "todo",
    icon: StickyNote,
    tag: "Code Quality",
    title: "TODO & FIXME Detection",
    description:
      "Unresolved TODOs accumulate into technical debt. PRPilot surfaces every TODO, FIXME, HACK, and BUG comment left in new or changed code.",
    bullets: [
      "Finds TODO, FIXME, HACK, BUG tags",
      "Only scans changed/new lines",
      "Reduces accidental tech debt merges",
    ],
    accentColor: ORA,
    lines: [
      { segs: [{ t: "⚠ WARN  ", c: ORA }, { t: "Unresolved comment", c: W }], gapAfter: 120 },
      { segs: [{ t: "  → ", c: G }, { t: "src/utils.ts", c: ORA }, { t: ":89", c: D }], gapAfter: 100 },
      { segs: [{ t: "  ", c: "" }, { t: "// TODO: handle rate limiting", c: ORA }], gapAfter: 200 },
      { segs: [{ t: "⚠ WARN  ", c: ORA }, { t: "Fix needed", c: W }], gapAfter: 120 },
      { segs: [{ t: "  → ", c: G }, { t: "src/api.ts", c: ORA }, { t: ":130", c: D }], gapAfter: 100 },
      { segs: [{ t: "  ", c: "" }, { t: "// FIXME: memory leak here", c: ORA }], gapAfter: 200 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 100, speed: 5 },
      { segs: [{ t: "2 unresolved comments found", c: D }] },
    ],
  },
  {
    id: "large-pr",
    icon: Scale,
    tag: "Review Quality",
    title: "Large Pull Request Detection",
    description:
      "Massive PRs slow down reviews and introduce risk. PRPilot warns when a PR exceeds configurable thresholds for file count or changed lines.",
    bullets: [
      "Configurable max lines threshold",
      "Configurable max files threshold",
      "Encourages smaller, focused PRs",
    ],
    accentColor: RED,
    lines: [
      { segs: [{ t: "✖ ERROR  ", c: RED }, { t: "PR is too large", c: W }], gapAfter: 160 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 120, speed: 5 },
      { segs: [{ t: "  Lines changed:  ", c: G }, { t: "847", c: RED }, { t: "  (max: ", c: G }, { t: "500", c: D }, { t: ")", c: G }], gapAfter: 100 },
      { segs: [{ t: "  Files modified: ", c: G }, { t: "23 ", c: RED }, { t: "  (max: ", c: G }, { t: "15", c: D }, { t: ")", c: G }], gapAfter: 220 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 120, speed: 5 },
      { segs: [{ t: "Suggestion: ", c: G }, { t: "split into smaller PRs", c: W }] },
    ],
  },
  {
    id: "tests",
    icon: TestTube2,
    tag: "Testing",
    title: "Missing Test Detection",
    description:
      "New logic without tests is an open invitation to regressions. PRPilot checks whether modified source files have corresponding test updates.",
    bullets: [
      "Maps src/ changes to tests/ coverage",
      "Configurable file patterns",
      "Alerts when tests are absent",
    ],
    accentColor: ORA,
    lines: [
      { segs: [{ t: "⚠ WARN  ", c: ORA }, { t: "Missing test coverage", c: W }], gapAfter: 180 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 120, speed: 5 },
      { segs: [{ t: "  + ", c: GRN }, { t: "src/payment.ts", c: GRN }, { t: "        [modified]", c: G }], gapAfter: 100 },
      { segs: [{ t: "  ✖ ", c: RED }, { t: "tests/payment.test.ts", c: RED }, { t: "  [missing]", c: G }], gapAfter: 220 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 120, speed: 5 },
      { segs: [{ t: "Action: ", c: G }, { t: "add tests for changed logic", c: W }] },
    ],
  },
  {
    id: "pr-desc",
    icon: FileCheck,
    tag: "Process",
    title: "PR Description Validation",
    description:
      "A blank description leaves reviewers guessing. PRPilot enforces that every PR contains a meaningful description against templates or a minimum length.",
    bullets: [
      "Checks minimum description length",
      "Supports custom PR templates",
      "Blocks merges on empty descriptions",
    ],
    accentColor: RED,
    lines: [
      { segs: [{ t: "✖ ERROR  ", c: RED }, { t: "PR description too short", c: W }], gapAfter: 180 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 120, speed: 5 },
      { segs: [{ t: "  Provided: ", c: G }, { t: '"fixed stuff"', c: ORA }, { t: "  (12 chars)", c: G }], gapAfter: 100 },
      { segs: [{ t: "  Required: ", c: G }, { t: "minimum 50 chars", c: D }], gapAfter: 220 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 120, speed: 5 },
      { segs: [{ t: "Tip: ", c: G }, { t: "explain the WHY behind changes", c: W }] },
    ],
  },
  {
    id: "commits",
    icon: GitCommit,
    tag: "Process",
    title: "Conventional Commits Enforcement",
    description:
      "Clean git history starts with consistent commit messages. PRPilot validates that PR titles and commits follow the Conventional Commits specification.",
    bullets: [
      "Validates feat:, fix:, chore: prefixes",
      "Checks PR title and commit messages",
      "Keeps changelog automation working",
    ],
    accentColor: ORA,
    lines: [
      { segs: [{ t: "✖ ERROR  ", c: RED }, { t: "Non-conventional commit", c: W }], gapAfter: 120 },
      { segs: [{ t: "  Given:  ", c: G }, { t: '"updated stuff and fixed bug"', c: RED }], gapAfter: 220 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 120, speed: 5 },
      { segs: [{ t: "✔ PASS   ", c: GRN }, { t: "Expected format", c: W }], gapAfter: 120 },
      { segs: [{ t: "  Valid:  ", c: G }, { t: '"fix(auth): handle expired tokens"', c: GRN }], gapAfter: 200 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 100, speed: 5 },
      { segs: [{ t: "Types: ", c: G }, { t: "feat fix chore docs refactor test", c: D }] },
    ],
  },
  {
    id: "deps",
    icon: Package,
    tag: "Dependencies",
    title: "Dependency Impact Analysis",
    description:
      "A single new dependency can bloat your bundle. PRPilot analyzes package.json changes and alerts reviewers when heavy or unnecessary packages are added.",
    bullets: [
      "Scans package.json diffs",
      "Warns on heavy new packages",
      "Shows bundle size impact hints",
    ],
    accentColor: RED,
    lines: [
      { segs: [{ t: "⚠ WARN  ", c: ORA }, { t: "New dependencies added", c: W }], gapAfter: 180 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 120, speed: 5 },
      { segs: [{ t: "  + ", c: GRN }, { t: "moment@2.30.1", c: GRN }, { t: "    ~300 kB", c: ORA }], gapAfter: 100 },
      { segs: [{ t: "  + ", c: GRN }, { t: "lodash@4.17.21", c: GRN }, { t: "   ~71 kB ", c: ORA }], gapAfter: 220 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 120, speed: 5 },
      { segs: [{ t: "Alt: ", c: G }, { t: "date-fns", c: W }, { t: " or native Date API", c: D }] },
    ],
  },
  {
    id: "ai",
    icon: Sparkles,
    tag: "AI",
    title: "AI-Powered Code Suggestions",
    description:
      "PRPilot connects to LLMs (Gemini / OpenAI) to deliver GitHub-native actionable code suggestions — changes reviewers can accept and commit with a single click.",
    bullets: [
      "Integrates with Gemini & OpenAI",
      "Generates GitHub inline suggestions",
      "One-click commit from the PR page",
    ],
    accentColor: ORA,
    lines: [
      { segs: [{ t: "✦ AI Suggestion", c: ORA }, { t: " · src/auth.ts:55", c: G }], gapAfter: 180 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 100, speed: 5 },
      { segs: [{ t: "- ", c: RED }, { t: "const t = jwt.sign(user, process.env.S)", c: RED }], gapAfter: 80 },
      { segs: [{ t: "+ ", c: GRN }, { t: "const token = jwt.sign(", c: GRN }], gapAfter: 80 },
      { segs: [{ t: "+   ", c: GRN }, { t: "{ id: user.id, role: user.role },", c: GRN }], gapAfter: 80 },
      { segs: [{ t: "+   ", c: GRN }, { t: "process.env.JWT_SECRET,", c: GRN }], gapAfter: 80 },
      { segs: [{ t: "+   ", c: GRN }, { t: "{ expiresIn: '1h' }", c: GRN }], gapAfter: 80 },
      { segs: [{ t: "+ ", c: GRN }, { t: ")", c: GRN }], gapAfter: 200 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 100, speed: 5 },
      { segs: [{ t: "[ Apply suggestion ✓ ]", c: ORA }] },
    ],
  },
  {
    id: "report",
    icon: FileText,
    tag: "Reporting",
    title: "Markdown Review Summary",
    description:
      "Instead of noisy per-line comments, PRPilot posts one clean, organized Markdown report. On follow-up commits it updates the existing comment — keeping the PR timeline clean.",
    bullets: [
      "Single organized comment per PR",
      "Updates in-place on new commits",
      "Structured sections by severity",
    ],
    accentColor: RED,
    lines: [
      { segs: [{ t: "# 🤖 PRPilot Review", c: W }], gapAfter: 160 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 100, speed: 5 },
      { segs: [{ t: "## ✖ Errors ", c: RED }, { t: "(1)", c: D }], gapAfter: 80 },
      { segs: [{ t: "  - SECRET in src/config.ts:12", c: D }], gapAfter: 160 },
      { segs: [{ t: "## ⚠ Warnings ", c: ORA }, { t: "(3)", c: D }], gapAfter: 80 },
      { segs: [{ t: "  - DEBUG in src/auth.ts:47", c: D }], gapAfter: 60 },
      { segs: [{ t: "  - TODO in src/utils.ts:89", c: D }], gapAfter: 160 },
      { segs: [{ t: "## 💡 AI Suggestions ", c: ORA }, { t: "(1)", c: D }], gapAfter: 80 },
      { segs: [{ t: "  - Refactor jwt.sign call", c: D }], gapAfter: 200 },
      { segs: [{ t: "─".repeat(38), c: G }], gapAfter: 100, speed: 5 },
      { segs: [{ t: "Updated just now", c: G }] },
    ],
  },
  {
    id: "config",
    icon: Sliders,
    tag: "Configuration",
    title: "Configurable Rules",
    description:
      "Every team works differently. Drop a .prpilot.yml in your repo and toggle any rule on/off or set custom thresholds — no code changes needed.",
    bullets: [
      "Enable/disable any rule via YAML",
      "Set custom size thresholds",
      "Per-repo configuration",
    ],
    accentColor: ORA,
    lines: [
      { segs: [{ t: "# .prpilot.yml", c: G }], gapAfter: 200 },
      { segs: [{ t: "rules:", c: ORA }], gapAfter: 80 },
      { segs: [{ t: "  debugLogs: ", c: D }, { t: "true", c: GRN }], gapAfter: 80 },
      { segs: [{ t: "  todo:      ", c: D }, { t: "true", c: GRN }], gapAfter: 80 },
      { segs: [{ t: "  largePR:", c: ORA }], gapAfter: 60 },
      { segs: [{ t: "    enabled:  ", c: D }, { t: "true", c: GRN }], gapAfter: 60 },
      { segs: [{ t: "    maxLines: ", c: D }, { t: "500", c: RED }], gapAfter: 80 },
      { segs: [{ t: "  requireTests:       ", c: D }, { t: "true", c: GRN }], gapAfter: 80 },
      { segs: [{ t: "  aiSuggestions:      ", c: D }, { t: "true", c: GRN }], gapAfter: 80 },
      { segs: [{ t: "  conventionalCommits:", c: D }, { t: "true", c: GRN }] },
    ],
  },
  {
    id: "plugins",
    icon: Puzzle,
    tag: "Extensibility",
    title: "Plugin System",
    description:
      "PRPilot is built for extensibility. Developers can write and distribute their own custom static review rules without touching PRPilot's core.",
    bullets: [
      "Custom rules without core changes",
      "TypeScript rule API",
      "Community-shareable plugins",
    ],
    accentColor: RED,
    lines: [
      { segs: [{ t: "// my-custom-rule.ts", c: G }], gapAfter: 200 },
      { segs: [{ t: "export const ", c: ORA }, { t: "noAnyType", c: W }, { t: ": Rule = {", c: D }], gapAfter: 80 },
      { segs: [{ t: "  name: ", c: D }, { t: '"no-any-type"', c: GRN }, { t: ",", c: D }], gapAfter: 80 },
      { segs: [{ t: "  severity: ", c: D }, { t: '"warning"', c: ORA }, { t: ",", c: D }], gapAfter: 80 },
      { segs: [{ t: "  check(diff) {", c: D }], gapAfter: 80 },
      { segs: [{ t: "    return diff.lines", c: D }], gapAfter: 60 },
      { segs: [{ t: "      .filter(l => l.added)", c: D }], gapAfter: 60 },
      { segs: [{ t: "      .some(l => l.text.includes(", c: D }, { t: '": any"', c: GRN }, { t: "));", c: D }], gapAfter: 80 },
      { segs: [{ t: "  }", c: D }], gapAfter: 60 },
      { segs: [{ t: "}", c: D }] },
    ],
  },
];
