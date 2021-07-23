export const roundedSquareWave = (t, delta, a, f) =>
  ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
