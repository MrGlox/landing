import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';

import { Planet, Trail } from 'components/webgl';
import { updatePosition } from 'utils';

const Main = ({ elementRef, offset = [0, 0, 0] }) => {
  const { camera, size } = useThree();
  const [{ x, y }, setPosition] = useState(
    elementRef.current.getBoundingClientRect(),
  );

  // resize listener
  useEffect(() => {
    // position helper
    const { x, y } = updatePosition(
      elementRef.current.getBoundingClientRect(),
      camera,
      size,
      offset[2],
    );

    setPosition({ x, y });
  }, [size]);

  return (
    <group position={[x + offset[0], y + offset[1], offset[2]]}>
      <Planet rotation={[0, 0, -Math.PI / 1.5]} scale={0.65} />
      <Planet
        uniforms={{
          uColor1: 0x3cfafe,
          uColor2: 0x49cbf5,
          uColor3: 0xaa68f9,
          uColor4: 0xfc08f8,
          uPercent1: -0,
          uPercent2: 0.1,
          uPercent3: 0.7,
          uPercent4: 1.1,
        }}
        position={[0.6, 0.35, 0.1]}
        rotation={[0, 0, Math.PI * 0.75]}
        scale={0.4}
      />
      <Trail position={[-0.8, -0.18, 0]} />
      <Trail position={[-0.7, -0.32, 0]} />
      <Trail position={[-0.5, -0.25, 0]} />
    </group>
  );
};

export default Main;
