import { useState, useEffect, useRef } from 'react';

export function useElementIntersectObserve(rootmargin, thresholdValue) {
  if (thresholdValue === undefined || thresholdValue === null) thresholdValue = 0.4;
  const containerRef = useRef(null);
  const [boundary, setBoundary] = useState('');

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return undefined;

    const normalizedThreshold = Array.isArray(thresholdValue)
      ? thresholdValue
      : [thresholdValue];
    const thresholdWithZero = [...new Set([0, ...normalizedThreshold])]
      .map((value) => Math.max(0, Math.min(1, value)))
      .sort((a, b) => a - b);
    const effectiveThreshold = Math.max(...thresholdWithZero);

    const updateBoundaryFromEntry = (entry) => {
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
      isVisible ? setBoundary('topIn') : setBoundary('topOut');
    };

    const calculateVisibility = () => {
      const rect = currentRef.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const visiblePixels =
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const isIntersecting = visiblePixels > 0;
      const intersectionRatio = isIntersecting
        ? Math.min(1, visiblePixels / Math.max(rect.height, 1))
        : 0;

      const isVisible =
        isIntersecting &&
        (effectiveThreshold === 0 || intersectionRatio >= effectiveThreshold);

      isVisible ? setBoundary('topIn') : setBoundary('topOut');
    };

    const observerOptions = {
      root: null,
      rootMargin: rootmargin || '0px',
      threshold: thresholdWithZero,
    };

    let observer;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(updateBoundaryFromEntry);
      }, observerOptions);

      observer.observe(currentRef);
    }

    calculateVisibility();
    window.addEventListener('scroll', calculateVisibility, { passive: true });
    window.addEventListener('resize', calculateVisibility);
    window.addEventListener('orientationchange', calculateVisibility);

    return () => {
      window.removeEventListener('scroll', calculateVisibility);
      window.removeEventListener('resize', calculateVisibility);
      window.removeEventListener('orientationchange', calculateVisibility);
      if (observer) observer.disconnect();
    };
  }, [rootmargin, thresholdValue]); // We add rootmargin and thresholdValue to the dependency array so the effect reruns when they change.

  return [containerRef, boundary]; // Return the containerRef and boundary state.
}
