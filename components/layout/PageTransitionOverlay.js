import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function PageTransitionOverlay() {
  const router = useRouter();
  const [phase, setPhase] = useState(null); // null | 'in' | 'out'
  const timerRef = useRef(null);

  useEffect(() => {
    const onStart = () => {
      clearTimeout(timerRef.current);
      setPhase("in");
    };

    const onComplete = () => {
      timerRef.current = setTimeout(() => {
        setPhase("out");
        timerRef.current = setTimeout(() => {
          setPhase(null);
        }, 1200);
      }, 1200);
    };

    router.events.on("routeChangeStart", onStart);
    router.events.on("routeChangeComplete", onComplete);

    return () => {
      router.events.off("routeChangeStart", onStart);
      router.events.off("routeChangeComplete", onComplete);
      clearTimeout(timerRef.current);
    };
  }, [router.events]);

  if (phase === null) return null;

  const colors = ["bg-js-blue", "bg-js-yellow", "bg-js-red"];

  return (
    <div
      aria-hidden="true"
      className={`page-wipe-overlay ${phase === "in" ? "page-wipe-overlay-in" : "page-wipe-overlay-out"}`}
    >
      <div className="page-wipe-backdrop" />
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          className={`page-wipe-panel ${colors[i % 3]} ${phase === "in" ? `page-wipe-panel-in-${i}` : `page-wipe-panel-out-${i}`}`}
        />
      ))}
    </div>
  );
}
