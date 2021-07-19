import React, { useRef } from 'react';

import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Camera = () => {
  const orbitRef = useRef(null);
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <OrbitControls
      enableDamping
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

export default Camera;
