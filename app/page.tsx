"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Leadership from "@/components/sections/Leadership";

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Leadership />
    </>
  );
}
