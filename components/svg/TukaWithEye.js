"use client";
import Image from "next/image";
import { useElementIntersectObserve } from "../../lib/hooks/useElementIntersectObserve";
import { useEffect, useRef, useState } from "react";

// Eye center in local SVG coords (inside the scale(5.5) transform group)
const EYE_CENTER_X = 10.32;
const EYE_CENTER_Y = 16;
// Max pupil travel radius in local units (iris radius is 4, keep pupil well within)
const MAX_OFFSET = 1.4;

// Sub-paths 1+2 of the original compound path: eyelid outline + inner lens
const eyeOutlinePath =
  "M10.32 22.32c-5.6 0-9.92-5.56-10.12-5.8-0.24-0.32-0.24-0.72 0-1.040 0.2-0.24 4.52-5.8 10.12-5.8s9.92 5.56 10.12 5.8c0.24 0.32 0.24 0.72 0 1.040-0.2 0.24-4.56 5.8-10.12 5.8z" +
  "M1.96 16c1.16 1.32 4.52 4.64 8.36 4.64s7.2-3.32 8.36-4.64c-1.16-1.32-4.52-4.64-8.36-4.64s-7.2 3.32-8.36 4.64z";

// Sub-paths 3+4: outer iris circle + inner pupil highlight
const pupilPath =
  "M10.32 20c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.84 4-4 4z" +
  "M10.32 13.68c-1.28 0-2.32 1.040-2.32 2.32s1.040 2.32 2.32 2.32 2.32-1.040 2.32-2.32-1.040-2.32-2.32-2.32z";

// tuka-user-body-and-head.svg is 446x439 — eye is positioned at the head center in viewBox coords
export default function TukaWithEye() {
  const [containerRef, boundary] = useElementIntersectObserve();
  const isVisible = boundary === "topIn";
  const svgRef = useRef(null);
  const trackingActive = useRef(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

  // Activate mouse tracking after the appear animation finishes (0.5s delay + 1s duration)
  useEffect(() => {
    if (!isVisible) return;
    const timeout = setTimeout(() => {
      trackingActive.current = true;
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!trackingActive.current || !svgRef.current) return;

      const rect = svgRef.current.getBoundingClientRect();

      // Map mouse position into SVG viewBox space (446 × 439)
      const mouseViewX = ((e.clientX - rect.left) / rect.width) * 446;
      const mouseViewY = ((e.clientY - rect.top) / rect.height) * 439;

      // Eye center in viewBox coords: translate(166.24, 44.671) scale(5.5)
      const eyeViewX = 166.24 + EYE_CENTER_X * 5.5; // ≈ 223
      const eyeViewY = 44.671 + EYE_CENTER_Y * 5.5; // ≈ 132.7

      const dx = mouseViewX - eyeViewX;
      const dy = mouseViewY - eyeViewY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Clamp in viewBox units, then convert back to local units (÷ scale)
      const maxViewOffset = MAX_OFFSET * 5.5;
      const clamp = Math.min(dist, maxViewOffset);
      const angle = Math.atan2(dy, dx);

      setPupilOffset({
        x: (clamp * Math.cos(angle)) / 5.5,
        y: (clamp * Math.sin(angle)) / 5.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="tuka-container absolute bottom-0 right-0 w-[375px]"
      style={{ aspectRatio: "446 / 439" }}
    >
      <Image
        fill
        src="/svg/tuka-user-body-and-head.svg"
        alt="The User Knows All Icon"
        style={{ objectFit: "contain" }}
      />
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 446 439"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g transform="translate(166.24, 44.671) scale(5.5)" fill="#E8E9EB">
          <g
            className={`tuka-eye-inner${isVisible ? " tuka-eye-visible" : ""}`}
          >
            {/* Eyelid outline — stays fixed */}
            <path d={eyeOutlinePath} />
            {/* Pupil — translates to follow the mouse */}
            <g
              className="tuka-eye-pupil"
              style={{
                transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
                transition: "transform 0.2s ease-out",
                transformBox: "fill-box",
                transformOrigin: "center",
              }}
            >
              <path d={pupilPath} />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
