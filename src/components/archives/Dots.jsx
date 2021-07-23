import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Matrix4, Vector3 } from 'three';

const Dots = () => {
  const ref = useRef();

  const { vec, transform, positions } = useMemo(() => {
    const vec = new Vector3();
    const transform = new Matrix4();

    const positions = [...Array(10000)].map((_, i) => {
      const position = new Vector3();

      // Place in a grid
      position.x = (i % 100) - 50;
      position.y = Math.floor(i / 100) - 50;

      // Offset every other column (hexagonal pattern)
      position.y += (i % 2) * 0.5;

      // Add some noise
      position.x += Math.random() * 0.3;
      position.y += Math.random() * 0.3;

      return position;
    });

    return { vec, transform, positions };
  }, []);

  useFrame(({ clock }) => {
    const scale = 1 + Math.sin(clock.elapsedTime) * 0.3;

    for (let i = 0; i < 10000; ++i) {
      vec.copy(positions[i]).multiplyScalar(scale);
      transform.setPosition(vec);
      ref.current.setMatrixAt(i, transform);
    }

    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 10000]}>
      <circleBufferGeometry args={[0.015]} />
      <meshBasicMaterial />
    </instancedMesh>
  );
};

export default Dots;
