'use client';
import { useEffect, useState } from 'react';
import { useElementIntersectObserve } from '../../lib/hooks/useElementIntersectObserve';

/**
 * https://www.infinitespiral.co.uk/Blog/NextIntersectionObserver
 * **/
export default function NextIntersectionObserver({
  children,
  rootmargin,
  thresholdValue,
  classes,
  topIn,
}) {
  const [containerRef, boundary] = useElementIntersectObserve(
    rootmargin,
    thresholdValue
  );
  const [className, setClassName] = useState(classes);

  useEffect(() => {
    switch (boundary) {
      case 'topIn':
        setClassName(`animate-init ${classes} ${topIn}`);
        break;
    }
  }, [boundary, classes, topIn]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
