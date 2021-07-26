import React, { useRef } from 'react';

import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Camera = () => {
  // const ref = useRef();
  const orbitRef = useRef(null);
  const { camera, gl } = useThree();

  // const set = useThree((state) => state.set);

  // Make the camera known to the system
  // useEffect(() => void set({ camera: ref.current }), []);

  // Update it every frame
  useFrame(() => {
    orbitRef.current.update();
    // ref.current.updateMatrixWorld();
  });

  return (
    <>
      <OrbitControls
        enableDamping
        args={[camera, gl.domElement]}
        ref={orbitRef}
      />
      {/* <perspectiveCamera ref={ref} {...props} /> */}
    </>
  );
};

export default Camera;
