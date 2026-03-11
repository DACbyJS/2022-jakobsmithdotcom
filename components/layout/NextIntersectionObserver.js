"use client";
import { useEffect, useId, useState } from "react";
import { useElementIntersectObserve } from "../../lib/hooks/useElementIntersectObserve";

/**
 * https://www.infinitespiral.co.uk/Blog/NextIntersectionObserver
 * **/
export default function NextIntersectionObserver({
  children,
  rootmargin,
  thresholdValue,
  classes,
  id,
  topIn,
}) {
  const [containerRef, boundary] = useElementIntersectObserve(
    rootmargin,
    thresholdValue
  );
  const [className, setClassName] = useState(classes);
  const generatedId = useId().replace(/:/g, "");
  const uniqueId = id || `intersection-${generatedId}`;

  useEffect(() => {
    switch (boundary) {
      case "topIn":
        setClassName(`animate-init ${classes} ${topIn}`);
        break;
    }
  }, [boundary, classes, topIn]);

  return (
    <div id={uniqueId} ref={containerRef} className={className}>
      {children}
    </div>
  );
}
