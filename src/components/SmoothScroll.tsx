"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // controls scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // clean up on unmount
    };
  }, []);

  return null;
}
