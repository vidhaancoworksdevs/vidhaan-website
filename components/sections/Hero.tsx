"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic Text Reveal
      gsap.fromTo(
        "[data-hero-text]",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );

      // Gold Line "Creator-Brand" Connection Animation
      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2 });
      tl.to(lineRef.current, { scaleX: 1, opacity: 1, duration: 2, ease: "power2.inOut" })
        .to(dotRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-vidhaan-obsidian pt-20"
    >
      {/* Subtle Radial Light Field */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
        
        {/* Creator-Brand Connection Visual */}
        <div className="mb-12 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.2em] text-vidhaan-muted">
          <span>Creator</span>
          <div className="relative flex w-32 items-center justify-center sm:w-48">
            <div className="absolute h-[1px] w-full bg-vidhaan-border" />
            <div ref={lineRef} className="absolute h-[1px] w-full origin-left scale-x-0 bg-vidhaan-gold opacity-0" />
            <div ref={dotRef} className="absolute h-2 w-2 scale-0 rounded-full bg-vidhaan-gold opacity-0 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          </div>
          <span>Brand</span>
        </div>

        <p data-hero-text className="mb-6 text-xs uppercase tracking-[0.2em] text-vidhaan-gold">
          Creator-Brand Partnerships, Structured.
        </p>

        <h1 data-hero-text className="font-heading text-5xl font-medium leading-[1.15] tracking-tight text-vidhaan-ivory sm:text-6xl lg:text-7xl">
          Partnerships, <br className="hidden sm:block" />
          <span className="text-vidhaan-muted">Built with Intention.</span>
        </h1>

        <p data-hero-text className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-vidhaan-ivory/80 sm:text-base">
          VIDHAAN brings creators and brands together through considered matchmaking, transparent communication and disciplined campaign operations. From first conversation to final delivery, every collaboration is supported by a clear process.
        </p>

        <div data-hero-text className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="#contact"
            className="w-full border border-vidhaan-gold bg-vidhaan-gold px-8 py-3.5 text-xs uppercase tracking-widest text-vidhaan-obsidian transition-all hover:bg-transparent hover:text-vidhaan-gold sm:w-auto"
          >
            Start a Partnership
          </Link>
          <Link
            href="#ethos"
            className="w-full border border-vidhaan-border px-8 py-3.5 text-xs uppercase tracking-widest text-vidhaan-ivory transition-all hover:border-vidhaan-gold sm:w-auto"
          >
            Explore Our Approach
          </Link>
        </div>

        <p data-hero-text className="mt-8 text-[11px] tracking-wider text-vidhaan-muted">
          For brands seeking considered creator partnerships and creators seeking professionally managed opportunities.
        </p>
      </div>
    </section>
  );
}
