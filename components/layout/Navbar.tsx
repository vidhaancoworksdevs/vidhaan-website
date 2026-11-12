"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function VidhaanCrest({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top Double Ivory Chevrons */}
      <path d="M50 6L76 28L70 34L50 17L30 34L24 28L50 6Z" fill="#F9F9F8" />
      <path d="M50 21L66 35L60 41L50 32L40 41L34 35L50 21Z" fill="#F9F9F8" />

      {/* Center Royal Gold Diamond & Inverted Triangle Focal Accent */}
      <polygon points="50,36 55,41 50,46 45,41" fill="#D4AF37" />
      <polygon points="39,48 61,48 50,58" fill="#D4AF37" />

      {/* Left Hexagonal Shield Wing */}
      <path
        d="M14 34L46 60V98L14 73V45L22 51V69L38 82V64L14 44V34Z"
        fill="#F9F9F8"
      />
      <polygon points="26,54 34,60 34,74 26,68" fill="#F9F9F8" />

      {/* Right Hexagonal Shield Wing */}
      <path
        d="M86 34L54 60V98L86 73V45L78 51V69L62 82V64L86 44V34Z"
        fill="#F9F9F8"
      />
      <polygon points="74,54 66,60 66,74 74,68" fill="#F9F9F8" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "The Standard", href: "/#ethos" },
  { label: "Services", href: "/#services" },
  { label: "Leadership", href: "/#leadership" },
  { label: "For Brands & Creators", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-vidhaan-border bg-vidhaan-obsidian/90 backdrop-blur-md"
          : "border-b border-vidhaan-border/40 bg-vidhaan-obsidian/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3.5 focus:outline-none">
          <VidhaanCrest className="h-10 w-10 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-heading text-xl font-semibold tracking-[0.22em] text-vidhaan-ivory">
              VIDHAAN
            </span>
            <span className="text-[9px] uppercase tracking-[0.24em] text-vidhaan-gold">
              SHIVAE ECOSYSTEM
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.16em] text-vidhaan-muted transition-colors hover:text-vidhaan-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 border border-vidhaan-gold bg-vidhaan-gold px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-vidhaan-obsidian transition-all hover:bg-transparent hover:text-vidhaan-gold"
          >
            <span>Start a Partnership</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center border border-vidhaan-border p-2 text-vidhaan-ivory md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-b border-vidhaan-border bg-vidhaan-obsidian px-6 py-8 md:hidden">
          <nav className="flex flex-col space-y-5">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs uppercase tracking-[0.18em] text-vidhaan-ivory hover:text-vidhaan-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 border border-vidhaan-gold bg-vidhaan-gold px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-vidhaan-obsidian"
            >
              <span>Start a Partnership</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
