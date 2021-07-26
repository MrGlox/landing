import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';

import { Planet, Trail } from 'components/webgl';
import { updatePosition } from 'utils';

const Coords = ({ elementRef, offset = [0, 0, 0] }) => {
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
      <Planet
        uniforms={{
          uColor1: 0xf94f4f,
          uColor2: 0xf58c30,
          uColor3: 0xeb2678,
          uColor4: 0xfc08f8,
          uPercent1: -0.1,
          uPercent2: 0.3,
          uPercent3: 0.6,
          uPercent4: 1.3,
        }}
        rotation={[0, 0, -0.2]}
        scale={1}
      />
      <group position={[-0.74, 0.74, 0.1]} rotation={[0, 0, Math.PI / 8]}>
        <group scale={[0.6, 0.6, 0.6]}>
          <Trail rotation={[0, 0, Math.PI / 2]} position={[0, -0.5, 0]} />
          <Trail rotation={[0, 0, -Math.PI / 2]} position={[0, 0.5, 0]} />
          <Trail rotation={[0, 0, Math.PI]} position={[0.5, 0, 0]} />
          <Trail position={[-0.5, 0, 0]} />
        </group>
        <group scale={[0.4, 0.4, 0.4]} rotation={[0, 0, Math.PI / 4]}>
          <Trail rotation={[0, 0, Math.PI / 2]} position={[0, -0.5, 0]} />
          <Trail rotation={[0, 0, -Math.PI / 2]} position={[0, 0.5, 0]} />
          <Trail rotation={[0, 0, Math.PI]} position={[0.5, 0, 0]} />
          <Trail position={[-0.5, 0, 0]} />
        </group>
      </group>
    </group>
  );
};

export default Coords;
