import { useEffect, useState } from "react";
import classNames from "classnames";

// Fonts
import { fonts } from "../../lib/constants";

export default function SiteModal({ isActive, toggle, children, className }) {
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    if (!isActive) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") toggle();
    };

    const animationFrame = window.requestAnimationFrame(() => {
      setIsEntering(true);
    });

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      setIsEntering(false);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isActive, toggle]);

  if (!isActive) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4"
      role="dialog"
      aria-modal="true"
      onClick={toggle}
    >
      <div
        className={classNames(
          "absolute inset-0 bg-js-black/70 transition-opacity duration-300 ease-out",
          isEntering ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        className={classNames(
          `${fonts?.overpass?.variable} ${fonts?.overpassMono?.variable} ${fonts?.jsMath?.variable}`,
          "white-black-border relative z-10 max-h-[90vh] w-full max-w-[720px] overflow-y-auto bg-js-white p-6 transition-all duration-300 ease-out sm:p-8",
          isEntering
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-[0.98] opacity-0",
          className
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={toggle}
          className="absolute right-3 top-3 border-2 border-js-black px-2 py-1 font-overpass-mono text-[1.2ch] uppercase tracking-wide hover:bg-js-black hover:text-js-white"
          aria-label="Close modal"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
