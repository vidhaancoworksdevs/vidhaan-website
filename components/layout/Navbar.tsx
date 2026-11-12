"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "The Standard", href: "/#ethos" },
  { label: "Services", href: "/#services" },
  { label: "Leadership", href: "/#leadership" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-vidhaan-obsidian/90 backdrop-blur-md border-b border-vidhaan-border" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Cinematic Logo Lockup */}
        <Link href="/" className="group flex items-center gap-3 focus:outline-none">
          <span className="font-heading text-2xl font-bold tracking-widest text-vidhaan-ivory transition-colors group-hover:text-vidhaan-gold">
            VIDHAAN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-widest text-vidhaan-muted transition-colors hover:text-vidhaan-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Primary Contact CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="border border-vidhaan-gold px-6 py-2.5 text-xs uppercase tracking-widest text-vidhaan-gold transition-all hover:bg-vidhaan-gold hover:text-vidhaan-obsidian"
          >
            Initiate Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-vidhaan-ivory md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-b border-vidhaan-border bg-vidhaan-obsidian px-6 py-8 md:hidden">
          <nav className="flex flex-col space-y-6">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-widest text-vidhaan-ivory hover:text-vidhaan-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-block border border-vidhaan-gold px-6 py-3 text-center text-xs uppercase tracking-widest text-vidhaan-gold"
            >
              Initiate Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
