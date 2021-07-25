export const roundedSquareWave = (t, delta, a, f) =>
  ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

export const calculateUnitSize = (camera, z = 0) => {
  const vFov = (camera.fov * Math.PI) / 180;
  const distance = camera.position.z - z;

  const height = 2 * Math.tan(vFov / 2) * Math.abs(distance);
  const width = height * camera.aspect;

  return { width, height };
};

export const updatePosition = ({ top, left }, camera, size, z) => {
  const camUnit = calculateUnitSize(camera, z);

  // The pixel ratio from the canvas
  const relativePosition = {
    x: (size.width / 2 - left) / size.width,
    y: (size.height / 2 - top) / size.height,
  };

  return {
    x: -(relativePosition.x * camUnit.width),
    y: relativePosition.y * camUnit.height,
  };
};
