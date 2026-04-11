"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [
  { label: "Solutions", href: "#solutions", active: false, cta: false },
  { label: "Leadership", href: "/ceo", active: false, cta: false },
  { label: "Vision", href: "#vision", active: false, cta: false },
  { label: "Contact", href: "#contact", active: false, cta: true }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#010204]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:py-6">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] text-xs font-bold text-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">
            NBI
          </div>
          <div>
            <span className="block text-xs font-black uppercase tracking-[0.4em] text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
              Nexus Bridge
            </span>
            <span className="block text-[8px] font-semibold uppercase tracking-[0.5em] text-[#D4AF37]/70">
              International
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.cta
                  ? "bg-[#D4AF37] px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-[#D4AF37]/25"
                  : item.active
                  ? "border-b border-[#D4AF37] pb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37] transition hover:text-white"
                  : "text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:text-[#D4AF37]"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#010204] px-6 py-5 lg:hidden animate-in slide-in-from-top">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  item.cta
                    ? "w-fit bg-[#D4AF37] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-white"
                    : "text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:text-[#D4AF37]"
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
