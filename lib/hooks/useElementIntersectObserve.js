import { useState, useEffect, useRef } from 'react';

export function useElementIntersectObserve(rootmargin, thresholdValue) {
  if (thresholdValue === undefined || thresholdValue === null) thresholdValue = 0.4;
  const containerRef = useRef(null);
  const [boundary, setBoundary] = useState('');

  useEffect(() => {
    const currentRef = containerRef.current;
    const normalizedThreshold = Array.isArray(thresholdValue)
      ? thresholdValue
      : [thresholdValue];
    const thresholdWithZero = [...new Set([0, ...normalizedThreshold])]
      .map((value) => Math.max(0, Math.min(1, value)))
      .sort((a, b) => a - b);

    const observerOptions = {
      root: null,
      rootMargin: rootmargin || '0px',
      threshold: thresholdWithZero,
    };

    // Create a new IntersectionObserver instance.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
        isVisible ? setBoundary('topIn') : setBoundary('topOut');
      });
    }, observerOptions);

    // Start observing the current reference.
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Make sure to unobserve the element on component unmount to avoid memory leaks.
    return () => {
      observer.disconnect();
    };
  }, [rootmargin, thresholdValue]); // We add rootmargin and thresholdValue to the dependency array so the effect reruns when they change.

  return [containerRef, boundary]; // Return the containerRef and boundary state.
}
