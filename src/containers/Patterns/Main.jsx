import React, { useEffect, useMemo, useRef, useState } from "react";

import { useThree } from "@react-three/fiber";
import { a, config, useSpring } from "@react-spring/three";
import * as THREE from "three";

import { Planet, Trail } from "components/webgl";
import { updatePosition } from "utils";

const Main = ({ elementRef, offset = [0, 0, 0] }) => {
  const markerRef = useRef(null);
  const [first, setFirst] = useState(true);

  const { camera, size } = useThree();
  const { x, y, offsetX, offsetY } = useMemo(() => {
    const { x, y } = updatePosition(
      elementRef.current.getBoundingClientRect(),
      camera,
      size,
      offset[2]
    );

    const center = updatePosition(
      { top: size.height, left: size.width },
      camera,
      size,
      offset[2]
    );

    return { x, y, offsetX: center.x, offsetY: center.y };
  }, [size]);

  const [groupProps, groupAPI] = useSpring(() => ({
    config: config.molasses,
    precision: 0.00001,
    from: {
      position: [x + offset[0] - 8, y + offset[1], offset[2]],
    },
  }));

  const { curve, points } = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0.1),
      new THREE.Vector3(
        x - offsetX / 3 + offset[0],
        y + offsetY + offset[1],
        offset[2] + 0.1
      ),
      new THREE.Vector3(
        x + offset[0] + 0.6,
        y + offset[1] + 0.41,
        offset[2] + 0.1
      ),
    ]);

    const points = curve.getPoints(100);
    return { curve, points };
  }, [points]);

  // const onUpdate = useCallback((self) => self.setFromPoints(points), [points]);
  const [markerProps, markerAPI] = useSpring(() => ({
    config: config.molasses,
    precision: 0.00001,
    from: {
      percent: 0,
      scale: 8,
    },
  }));

  useEffect(() => {
    groupAPI.start({
      delay: 1500,
      position: [x + offset[0], y + offset[1], offset[2]],
    });

    if (first) return;
    markerAPI.start({
      delay: 500,
      position: [x + offset[0] + 0.6, y + offset[1] + 0.41, offset[2] + 0.1],
    });
  }, [size]);

  useEffect(() => {
    markerAPI.start({
      percent: 1,
      scale: 0.45,
      onChange: ({ value: { percent } }) => {
        const { x, y, z } = curve.getPoint(percent);
        markerRef.current.position.set(x, y, z);
      },
    });

    setFirst(false);
  }, []);

  return (
    <>
      <a.group {...groupProps}>
        <Planet rotation={[0, 0, -Math.PI / 1.5]} scale={0.7} />
        <Trail position={[-0.7, -0.18, 0.08]} />
        <Trail position={[-0.9, -0.32, 0.08]} />
        <Trail position={[-0.5, -0.25, 0.08]} />
      </a.group>
      <a.group
        ref={markerRef}
        // scale={scale}
        {...markerProps}
      >
        <Planet
          uniforms={{
            uColor1: 0x3cfafe,
            uColor2: 0x2ca7cf,
            uColor3: 0x994bf6,
            uColor4: 0xfc08f8,
            uPercent1: -0.2,
            uPercent2: 0.3,
            uPercent3: 0.7,
            uPercent4: 1.2,
          }}
          rotation={[0, 0, Math.PI * 0.75]}
        />
      </a.group>
    </>
  );
};

export default Main;
