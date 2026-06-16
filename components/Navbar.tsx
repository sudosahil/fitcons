"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/program", label: "Program" },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-base/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl leading-none text-bone">
            Tushar Menath
          </span>
          <span className="hidden font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-accent sm:inline">
            I&nbsp;am&nbsp;&gt;&nbsp;I&nbsp;was
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-bone ${
                  active ? "text-bone" : "text-mute"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/apply" className="btn-primary !px-5 !py-2.5 !text-xs">
            Work with me
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-bone transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-bone transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-bone transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-line bg-base transition-all duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-3 text-base font-medium ${
                  active ? "text-accent" : "text-bone"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
}
