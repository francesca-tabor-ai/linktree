"use client";

import { useEffect, useRef } from "react";

export default function CursorGlowBackground() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.3;
    let currentX = targetX;
    let currentY = targetY;

    let raf = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth follow (lower = slower, higher = snappier)
      const ease = 0.12;

      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      // Use transform for performance
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* This element is moved to the cursor position */}
      <div
        ref={ref}
        className="
          absolute left-0 top-0
          -translate-x-1/2 -translate-y-1/2
          h-[520px] w-[520px]
          md:h-[680px] md:w-[680px]
          rounded-full
          blur-3xl
          opacity-70
          will-change-transform
        "
        style={{
          background:
            // Stronger lilac core + soft falloff
            "radial-gradient(circle at center, rgba(168,85,247,0.45) 0%, rgba(168,85,247,0.18) 35%, rgba(168,85,247,0.00) 70%)",
        }}
      />

      {/* Optional: secondary ambient wash so it doesn't look empty on no-mouse */}
      <div
        className="
          absolute -left-40 -top-40
          h-[520px] w-[520px]
          rounded-full
          blur-3xl
          opacity-40
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.22) 0%, rgba(99,102,241,0.00) 70%)",
        }}
      />
    </div>
  );
}

