"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import VidhaanScene from "@/components/three/VidhaanScene";
import { CORE_VALUES } from "@/lib/constants";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-text]",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out" }
      );

      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1.5 });
      tl.to(lineRef.current, { scaleX: 1, opacity: 1, duration: 1.8, ease: "power2.inOut" }).to(
        dotRef.current,
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <VidhaanScene />

      <section
        ref={containerRef}
        className="relative z-10 flex min-h-screen flex-col justify-center border-b border-vidhaan-border/80 pt-24 pb-16"
      >
        {/* Subtle Gold Radial Atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_65%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center lg:px-8">
          {/* Creator <-> Brand Royal Gold Node Bridge */}
          <div
            data-hero-text
            className="mx-auto mb-10 inline-flex items-center gap-5 border border-vidhaan-border bg-vidhaan-surface/80 px-6 py-2.5 backdrop-blur-sm"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-vidhaan-ivory">
              CREATOR
            </span>
            <div className="relative flex w-28 items-center justify-center sm:w-44">
              <div className="h-[1px] w-full bg-vidhaan-border" />
              <div
                ref={lineRef}
                className="absolute inset-x-0 h-[1px] origin-left scale-x-0 bg-vidhaan-gold opacity-0"
              />
              <div
                ref={dotRef}
                className="absolute h-2.5 w-2.5 scale-0 rounded-full bg-vidhaan-gold opacity-0 shadow-[0_0_12px_#D4AF37]"
              />
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-vidhaan-ivory">
              BRAND
            </span>
          </div>

          <p
            data-hero-text
            className="mb-5 text-xs font-medium uppercase tracking-[0.26em] text-vidhaan-gold"
          >
            CREATOR-BRAND PARTNERSHIPS, STRUCTURED.
          </p>

          <h1
            data-hero-text
            className="font-heading text-5xl font-semibold leading-[1.1] tracking-tight text-vidhaan-ivory sm:text-6xl lg:text-7xl"
          >
            Partnerships,{" "}
            <span className="block sm:inline text-vidhaan-gold">Built with Intention.</span>
          </h1>

          <p
            data-hero-text
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-vidhaan-muted sm:text-lg"
          >
            VIDHAAN brings creators and brands together through considered matchmaking, transparent
            communication and disciplined campaign operations. From first conversation to final
            delivery, every collaboration is supported by a clear process.
          </p>

          <div
            data-hero-text
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-3 border border-vidhaan-gold bg-vidhaan-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-vidhaan-obsidian transition-all hover:bg-transparent hover:text-vidhaan-gold sm:w-auto"
            >
              <span>Start a Partnership</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#ethos"
              className="inline-flex w-full items-center justify-center gap-2 border border-vidhaan-border bg-vidhaan-surface/70 px-8 py-4 text-xs uppercase tracking-[0.18em] text-vidhaan-ivory backdrop-blur-sm transition-all hover:border-vidhaan-gold sm:w-auto"
            >
              <span>Explore Our Approach</span>
              <ChevronDown className="h-4 w-4 text-vidhaan-gold" />
            </Link>
          </div>

          <p data-hero-text className="mt-6 text-xs tracking-wide text-vidhaan-muted">
            For brands seeking considered creator partnerships and creators seeking professionally
            managed opportunities.
          </p>

          {/* 6 Core Values Ribbon */}
          <div
            data-hero-text
            className="mt-16 grid grid-cols-2 gap-3 border-t border-vidhaan-border/80 pt-8 sm:grid-cols-3 lg:grid-cols-6"
          >
            {CORE_VALUES.map((val, i) => (
              <div
                key={val}
                className="border border-vidhaan-border/60 bg-vidhaan-surface/50 px-3 py-3 text-center backdrop-blur-sm"
              >
                <span className="block text-[10px] uppercase tracking-[0.2em] text-vidhaan-gold">
                  0{i + 1}
                </span>
                <span className="mt-1 block font-heading text-xs font-medium uppercase tracking-[0.14em] text-vidhaan-ivory">
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
