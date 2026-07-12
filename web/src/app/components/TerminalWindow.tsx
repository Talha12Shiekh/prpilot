'use client';

import { useEffect, useRef, useState } from "react";

export type Seg = { t: string; c?: string };
export type TLine = {
  segs: Seg[];
  gapAfter?: number;
  speed?: number;
};

interface Props {
  title?: string;
  lines: TLine[];
  accentColor?: string;
  charSpeed?: number;
  lineGap?: number;
  loopDelay?: number;
  loop?: boolean;
}

function lineLength(segs: Seg[]) {
  return segs.reduce((s, sg) => s + sg.t.length, 0);
}

function renderLineUpTo(segs: Seg[], charCount: number): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let remaining = charCount;
  segs.forEach((seg, i) => {
    if (remaining <= 0) return;
    const visible = seg.t.slice(0, remaining);
    remaining -= seg.t.length;
    nodes.push(
      <span key={i} style={{ color: seg.c }}>{visible}</span>
    );
  });
  return nodes;
}

export function TerminalWindow({
  title = "PRPilot",
  lines,
  accentColor = "#ec3750",
  charSpeed = 28,
  lineGap = 120,
  loopDelay = 2800,
  loop = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);
  const [blink, setBlink] = useState(true);

  // Start only when visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!started || done) return;
    const currentLine = lines[lineIdx];
    if (!currentLine) return;
    const total = lineLength(currentLine.segs);
    const speed = currentLine.speed ?? charSpeed;

    if (charIdx < total) {
      const id = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(id);
    } else {
      const gap = currentLine.gapAfter ?? lineGap;
      const nextIdx = lineIdx + 1;
      if (nextIdx >= lines.length) {
        if (loop) {
          const id = setTimeout(() => {
            setLineIdx(0);
            setCharIdx(0);
            setDone(false);
          }, loopDelay);
          setDone(true);
          return () => clearTimeout(id);
        } else {
          setDone(true);
          return;
        }
      }
      const id = setTimeout(() => {
        setLineIdx(nextIdx);
        setCharIdx(0);
      }, gap);
      return () => clearTimeout(id);
    }
  }, [started, lineIdx, charIdx, done, lines, charSpeed, lineGap, loop, loopDelay]);

  return (
    <div ref={containerRef} className="w-full rounded-xl border border-white/10 bg-[#0a0a0c] overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-[#111113]">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: accentColor }} />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/8" />
        <span className="ml-2 text-white/25 text-[11px]">{title}</span>
      </div>

      <div className="px-4 py-4 space-y-0.5 text-[11.5px] leading-[1.7] min-h-[120px] text-left">
        {lines.map((line, li) => {
          const total = lineLength(line.segs);
          const isCurrentLine = li === lineIdx;
          const isComplete = li < lineIdx || (li === lineIdx && charIdx >= total);
          const isFuture = li > lineIdx;

          if (isFuture) return null;

          const charsToShow = isCurrentLine ? charIdx : total;
          const showCursor = isCurrentLine && !done;

          return (
            <div key={li} className="flex items-start">
              <span className="text-white/15 mr-2 select-none flex-shrink-0 text-[10px] mt-[1px]">
                {String(li + 1).padStart(2, "0")}
              </span>
              <span>
                {renderLineUpTo(line.segs, charsToShow)}
                {showCursor && (
                  <span
                    className="inline-block w-[7px] h-[13px] ml-px align-middle"
                    style={{
                      background: accentColor,
                      opacity: blink ? 1 : 0,
                      transition: "opacity 0.1s",
                      verticalAlign: "middle",
                    }}
                  />
                )}
              </span>
            </div>
          );
        })}

        {done && loop && (
          <div className="flex items-start">
            <span className="text-white/15 mr-2 select-none text-[10px]">&nbsp;&nbsp;</span>
            <span
              className="inline-block w-[7px] h-[13px]"
              style={{ background: accentColor, opacity: blink ? 0.6 : 0, transition: "opacity 0.1s" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
