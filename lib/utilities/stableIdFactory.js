/**
 * Creates a deterministic ID generator scoped to a prefix.
 * Useful for stable, readable IDs in static content objects.
 */
export const createStableIdFactory = (prefix) => {
  let idCounter = 0;
  return () => `${prefix}-${++idCounter}`;
};
