import React, { useRef } from 'react';

import { MeshLine, MeshLineMaterial } from 'meshline';
import { Vector3 } from 'three';
import { extend, useFrame } from '@react-three/fiber';

extend({ MeshLine, MeshLineMaterial });

const Clouds = ({ ...props }) => {
  const fixedMaterial = useRef(null);
  const topMaterial = useRef(null);
  const bottomMaterial = useRef(null);

  useFrame(() => {
    topMaterial.current.uniforms.dashOffset.value +=
      0.0025 * (1 + Math.random()) * 0.6;
    bottomMaterial.current.uniforms.dashOffset.value +=
      0.0025 * (1 + Math.random()) * 0.4;
  });

  return (
    <group {...props}>
      <mesh>
        <meshLine
          attach="geometry"
          points={[new Vector3(-0.5, 0, 0), new Vector3(0.5, 0, 0)]}
        />
        <meshLineMaterial
          attach="material"
          ref={fixedMaterial}
          transparent
          lineWidth={0.01}
          color={0xffffff}
        />
      </mesh>
      <mesh position={[0, 0.06, 0]}>
        <meshLine
          attach="geometry"
          points={[new Vector3(0.35, 0, 0), new Vector3(-0.35, 0, 0)]}
        />
        <meshLineMaterial
          attach="material"
          ref={bottomMaterial}
          transparent
          lineWidth={0.01}
          color={0xffffff}
          dashArray={0.5}
          dashRatio={0.65}
        />
      </mesh>
      <mesh position={[0, -0.06, 0]}>
        <meshLine
          attach="geometry"
          points={[new Vector3(-0.35, 0, 0), new Vector3(0.35, 0, 0)]}
        />
        <meshLineMaterial
          attach="material"
          ref={topMaterial}
          transparent
          lineWidth={0.01}
          color={0xffffff}
          dashArray={0.5}
          dashRatio={0.65}
        />
      </mesh>
    </group>
  );
};

export default Clouds;
