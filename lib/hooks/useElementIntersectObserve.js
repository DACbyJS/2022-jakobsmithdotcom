import { useState, useEffect, useRef } from 'react';

export function useElementIntersectObserve(rootmargin, thresholdValue) {
  if (!thresholdValue) thresholdValue = 0.4;
  const containerRef = useRef(null);
  const [boundary, setBoundary] = useState('');

  useEffect(() => {
    const currentRef = containerRef.current;
    const observerOptions = {
      root: null,
      rootMargin: rootmargin,
      threshold: thresholdValue,
    };

    // Create a new IntersectionObserver instance.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? setBoundary('topIn') : setBoundary('topOut');
      });
    }, observerOptions);

    // Start observing the current reference.
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Make sure to unobserve the element on component unmount to avoid memory leaks.
    return () => {
      if (currentRef && !currentRef.isIntersecting) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootmargin, thresholdValue]); // We add rootmargin and thresholdValue to the dependency array so the effect reruns when they change.

  return [containerRef, boundary]; // Return the containerRef and boundary state.
}
