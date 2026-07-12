'use client';

import { useState } from "react";
import { Menu, X, GitPullRequest } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Architecture", href: "#architecture" },
    { label: "Roadmap", href: "#roadmap" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0d0d0f]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#ec3750,#ff8c37)" }}>
            <GitPullRequest size={16} className="text-white" />
          </div>
          <span className="text-white font-bold text-[1.1rem] tracking-tight">PRPilot</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-white/60 hover:text-white transition-colors text-sm">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/Talha12Shiekh/prpilot" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">GitHub</a>
          <a
            href="https://github.com/Talha12Shiekh/prpilot"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg text-white text-sm transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#ec3750,#ff8c37)" }}
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden text-white/60" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0d0d0f] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-white/60 hover:text-white text-sm" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/Talha12Shiekh/prpilot"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-white text-sm"
            style={{ background: "linear-gradient(135deg,#ec3750,#ff8c37)" }}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
