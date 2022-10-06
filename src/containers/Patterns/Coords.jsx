import React, { useEffect, useMemo } from "react";

import { a, config, useSpring } from "@react-spring/three";
import { useThree } from "@react-three/fiber";

import { Planet, Trail } from "components/webgl";
import { updatePosition } from "utils";

const Coords = ({ elementRef, offset = [0, 0, 0] }) => {
  const { camera, size } = useThree();
  const { x, y } = useMemo(() =>
    updatePosition(
      elementRef.current.getBoundingClientRect(),
      camera,
      size,
      offset[2]
    )
  );

  const [trailProps, trailAPI] = useSpring(() => ({
    config: config.molasses,
    precision: 0.00001,
    from: {
      scale: [1.4, 1.4, 1.4],
      rotation: [0, 0, -Math.PI * 2],
    },
  }));

  const [groupProps, groupAPI] = useSpring(() => ({
    config: config.molasses,
    precision: 0.00001,
    from: {
      position: [x + offset[0] + 4, y + offset[1] - 4, offset[2]],
    },
  }));

  // resize listener
  useEffect(() => {
    trailAPI.start({
      delay: 2000,
      scale: [1, 1, 1],
      rotation: [0, 0, Math.PI / 8],
    });
    groupAPI.start({
      delay: 2000,
      position: [x + offset[0], y + offset[1], offset[2]],
    });
  }, [size]);

  return (
    <a.group {...groupProps}>
      <Planet
        glowSize={2.4}
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
      <a.group position={[-0.74, 0.74, 0.1]} {...trailProps}>
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
      </a.group>
    </a.group>
  );
};

export default Coords;
