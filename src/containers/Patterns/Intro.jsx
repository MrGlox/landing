import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';

import { Clouds, Planet, Trail } from 'components/webgl';
import { updatePosition } from 'utils';

const Intro = ({ elementRef, offset = [0, 0, 0] }) => {
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
      <Clouds position={[-0, 0.2, 0]} />
      <Planet
        uniforms={{
          uColor1: 0xfda04f,
          uColor2: 0xe26781,
          uColor3: 0x5a28eb,
          uColor4: 0x0b1bb3,
          uPercent1: -0.1,
          uPercent2: 0.2,
          uPercent3: 1.5,
          uPercent4: 1.8,
        }}
        rotation={[0, 0, Math.PI * 0.75]}
        scale={0.4}
      />
      <group
        rotation={[0, 0, Math.PI]}
        position={[-0.1, -0.4, -0.1]}
        scale={[0.7, 0.7, 0.7]}>
        <Trail position={[-0.6, -0.18, 0]} />
        <Trail position={[-0.8, -0.32, 0]} />
        <Trail position={[-1, -0.25, 0]} />
      </group>
    </group>
  );
};

export default Intro;
