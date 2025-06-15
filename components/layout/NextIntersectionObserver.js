"use client";
import { useEffect, useState } from "react";
import { useElementIntersectObserve } from "../../lib/hooks/useElementIntersectObserve";
import { v4 as uuvid4 } from "uuid";

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
  const uniqueId = id || uuvid4();

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
